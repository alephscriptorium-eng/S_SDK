/**
 * Aleph Bot Agent
 * Integrates Aleph with orchestrator channels
 */

import { 
    ChannelAgent, 
    IOrchestratorChannels,
    AlephBotConfig,
    AlephChatMessage,
    AlephEvent
} from "@/types";

export class AlephChannelAgent implements ChannelAgent {
    public readonly id = "Aleph-bot";
    public readonly name = "Aleph Bot Agent";

    private channels?: IOrchestratorChannels;
    private AlephClient?: any;
    private config: AlephBotConfig;
    private isConnected = false;
    private reconnectAttempts = 0;
    private chatHistory: AlephChatMessage[] = [];
    private maxChatHistory = 100;

    constructor(config: AlephBotConfig) {
        this.config = {
            autoJoin: true,
            enableEvents: true,
            enableChatLogging: true,
            reconnectOnError: true,
            maxReconnectAttempts: 5,
            reconnectDelay: 5000,
            ...config
        };
    }

    async initialize(orchestrator: IOrchestratorChannels): Promise<void> {
        this.channels = orchestrator;

        // Listen for app messages that should trigger Aleph actions
        orchestrator.app.filter("agent_command").subscribe((message) => {
            if (message.payload.agentId === this.id) {
                this.handleAgentCommand(message.payload.command);
            }
        });

        // Listen for user input from UI that should be sent to Aleph chat
        orchestrator.ui.filter("user_input").subscribe((message) => {
            this.handleUIInput(message);
        });

        // Initialize Aleph client
        if (this.config.channels.length > 0) {
            await this.connectToAleph();
        }

        orchestrator.sys.sendInfo(this.id, "Aleph Bot Agent initialized");
        console.log("🎮 Aleph Bot Agent initialized");
    }

    async shutdown(): Promise<void> {
        if (this.AlephClient) {
            try {
                this.AlephClient.disconnect();
            } catch (error) {
                console.error("Error disconnecting from Aleph:", error);
            }
        }

        if (this.channels) {
            this.channels.sys.sendInfo(this.id, "Aleph Bot Agent shutting down");
        }
        console.log("🎮 Aleph Bot Agent shutdown");
    }

    private async connectToAleph(): Promise<void> {
        try {
            this.channels?.sys.sendConnectionStatus(this.id, "Aleph-client", "connecting");
            
            // Create Aleph client for the primary channel
            const primaryChannel = this.config.channels[0];
            this.AlephClient = createClient(primaryChannel, { 
                logger: this.config.enableChatLogging,
                readOnly: !this.config.username && !this.config.password 
            });

            // Setup authentication if credentials provided
            if (this.config.username && this.config.password) {
                this.AlephClient.login({
                    type: "login",
                    credentials: {
                        username: this.config.username,
                        password: this.config.password,
                    },
                });
            }

            // Setup event listeners
            this.setupAlephEventListeners();

        } catch (error) {
            this.channels?.sys.sendError(this.id, error as Error, "Failed to connect to Aleph");
            if (this.config.reconnectOnError) {
                this.scheduleReconnect();
            }
        }
    }

    private setupAlephEventListeners(): void {
        if (!this.AlephClient) return;

        this.AlephClient.on("ready", () => {
            this.isConnected = true;
            this.reconnectAttempts = 0;
            
            this.channels?.sys.sendConnectionStatus(this.id, "Aleph-client", "connected");
            this.channels?.sys.sendInfo(this.id, `Connected to Aleph as ${this.AlephClient.user?.tag || 'anonymous'}`);
            
            // Notify UI of connection
            this.channels?.ui.sendAlephUIUpdate(this.id, {
                isLive: true,
                title: `Connected to ${this.config.channels[0]}`,
            });

            console.log(`🎮 Connected to Aleph channel: ${this.config.channels[0]}`);
        });

        this.AlephClient.on("ChatMessage", (message: any) => {
            this.handleAlephChatMessage(message);
        });

        this.AlephClient.on("disconnect", () => {
            this.isConnected = false;
            this.channels?.sys.sendConnectionStatus(this.id, "Aleph-client", "disconnected");
            this.channels?.sys.sendWarning(this.id, "Disconnected from Aleph");

            if (this.config.reconnectOnError) {
                this.scheduleReconnect();
            }
        });

        this.AlephClient.on("error", (error: Error) => {
            this.channels?.sys.sendError(this.id, error, "Aleph client error");
            
            if (this.config.reconnectOnError) {
                this.scheduleReconnect();
            }
        });
    }

    private handleAlephChatMessage(AlephMessage: any): void {
        // Convert Aleph message to our standardized format
        const chatMessage: AlephChatMessage = {
            id: AlephMessage.id || Date.now().toString(),
            username: AlephMessage.sender.username,
            message: AlephMessage.content,
            timestamp: Date.now(),
            channel: this.config.channels[0],
            badges: AlephMessage.sender.badges || [],
            emotes: AlephMessage.emotes || [],
            color: AlephMessage.sender.color,
            isBot: AlephMessage.sender.is_bot || false,
            isModerator: AlephMessage.sender.is_moderator || false,
            isSubscriber: AlephMessage.sender.is_subscriber || false,
        };

        // Add to chat history
        this.chatHistory.push(chatMessage);
        if (this.chatHistory.length > this.maxChatHistory) {
            this.chatHistory.shift();
        }

        // Send to app channel
        this.channels?.app.sendAlephMessage(
            this.id,
            chatMessage.channel,
            chatMessage.username,
            chatMessage.message,
            chatMessage.badges,
            chatMessage.emotes
        );

        // Send to UI for display
        this.channels?.ui.sendAlephChatRender(this.id, {
            messages: this.chatHistory.slice(-10), // Last 10 messages
            viewers: this.AlephClient?.viewerCount || 0,
            followers: this.AlephClient?.followerCount || 0,
        });

        console.log(`💬 ${chatMessage.username}: ${chatMessage.message}`);
    }

    private handleAgentCommand(command: any): void {
        if (!command) return;

        switch (command.type) {
            case "send_message":
                this.sendChatMessage(command.message);
                break;
            case "get_chat_history":
                this.sendChatHistory();
                break;
            case "get_status":
                this.sendStatus();
                break;
            case "reconnect":
                this.reconnect();
                break;
            default:
                this.channels?.sys.sendWarning(this.id, `Unknown command: ${command.type}`);
        }
    }

    private handleUIInput(message: any): void {
        const { input, command, args } = message.payload;

        if (command) {
            switch (command) {
                case "send":
                    if (args && args[0]) {
                        this.sendChatMessage(args.join(" "));
                    }
                    break;
                case "status":
                    this.sendStatus();
                    break;
                case "history":
                    this.sendChatHistory();
                    break;
                default:
                    this.channels?.ui.sendDisplayUpdate(
                        this.id,
                        "command-feedback",
                        "warning",
                        `Unknown command: ${command}`
                    );
            }
        } else if (input) {
            // Treat raw input as chat message
            this.sendChatMessage(input);
        }
    }

    private async sendChatMessage(message: string): Promise<void> {
        if (!this.isConnected || !this.AlephClient) {
            this.channels?.ui.sendDisplayUpdate(
                this.id,
                "chat-error",
                "error",
                "Not connected to Aleph"
            );
            return;
        }

        try {
            await this.AlephClient.sendMessage(message);
            
            this.channels?.ui.sendDisplayUpdate(
                this.id,
                "chat-sent",
                "success",
                `Message sent: ${message}`
            );
        } catch (error) {
            this.channels?.sys.sendError(this.id, error as Error, "Failed to send chat message");
            this.channels?.ui.sendDisplayUpdate(
                this.id,
                "chat-error",
                "error",
                `Failed to send message: ${error}`
            );
        }
    }

    private sendChatHistory(): void {
        this.channels?.ui.sendAlephChatRender(this.id, {
            messages: this.chatHistory,
            viewers: this.AlephClient?.viewerCount || 0,
            followers: this.AlephClient?.followerCount || 0,
        });

        this.channels?.app.sendActionResult(
            this.id,
            "get_chat_history",
            { history: this.chatHistory },
            true
        );
    }

    private sendStatus(): void {
        const status = {
            connected: this.isConnected,
            channel: this.config.channels[0],
            username: this.AlephClient?.user?.tag || "anonymous",
            chatHistoryCount: this.chatHistory.length,
            reconnectAttempts: this.reconnectAttempts,
        };

        this.channels?.app.sendActionResult(
            this.id,
            "get_status",
            status,
            true
        );

        this.channels?.ui.sendDisplayUpdate(
            this.id,
            "status-display",
            this.isConnected ? "success" : "warning",
            `Status: ${this.isConnected ? "Connected" : "Disconnected"} to ${this.config.channels[0]}`
        );
    }

    private async reconnect(): Promise<void> {
        if (this.reconnectAttempts >= (this.config.maxReconnectAttempts || 5)) {
            this.channels?.sys.sendError(
                this.id,
                new Error("Max reconnect attempts reached"),
                "Failed to reconnect to Aleph"
            );
            return;
        }

        this.reconnectAttempts++;
        this.channels?.sys.sendInfo(this.id, `Attempting to reconnect (${this.reconnectAttempts}/${this.config.maxReconnectAttempts})`);
        
        await this.connectToAleph();
    }

    private scheduleReconnect(): void {
        if (this.reconnectAttempts >= (this.config.maxReconnectAttempts || 5)) {
            return;
        }

        const delay = this.config.reconnectDelay || 5000;
        setTimeout(() => {
            this.reconnect();
        }, delay);
    }

    // Public methods for external control
    public getChatHistory(): AlephChatMessage[] {
        return [...this.chatHistory];
    }

    public getConnectionStatus(): boolean {
        return this.isConnected;
    }

    public async sendMessage(message: string): Promise<void> {
        await this.sendChatMessage(message);
    }
}
