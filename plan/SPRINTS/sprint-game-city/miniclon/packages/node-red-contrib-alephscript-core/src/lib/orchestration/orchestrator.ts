/**
 * Aleph Aleph Bot Orchestrator
 * Simplified orchestrator for Aleph bot integration
 */

import { EventEmitter } from "events";
import { AppChannelImpl } from "./app-channel";
import { SysChannelImpl } from "./sys-channel";
import { UIChannelImpl } from "./ui-channel";
import {
    ChannelAgent,
    IOrchestratorChannels,
    OrchestratorConfig,
    OrchestratorEvents,
} from "@/types";

export interface OrchestratorStatistics {
    startTime: number;
    uptime: number;
    registeredComponents: number;
    totalMessagesSent: number;
    totalMessagesReceived: number;
    totalErrors: number;
}

export class AlephOrchestrator extends EventEmitter implements IOrchestratorChannels {
    public readonly app: AppChannelImpl;
    public readonly sys: SysChannelImpl;
    public readonly ui: UIChannelImpl;

    private config: OrchestratorConfig;
    private components = new Map<string, ChannelAgent>();
    private isRunning = false;
    private startTime = 0;

    constructor(config: OrchestratorConfig = {}) {
        super();
        
        this.config = {
            syncInterval: 1000,
            enableEventBroadcasting: true,
            enableLogging: true,
            messageTimeout: 5000,
            enableCrossChannelRouting: false,
            replayBufferSize: 100,
            ...config,
        };

        this.app = new AppChannelImpl();
        this.sys = new SysChannelImpl();
        this.ui = new UIChannelImpl();
    }

    async start(): Promise<void> {
        if (this.isRunning) {
            throw new Error("Orchestrator is already running");
        }

        this.startTime = Date.now();
        this.isRunning = true;

        // Setup logging if enabled
        if (this.config.enableLogging) {
            this.setupLogging();
        }

        this.emit("orchestrator:started", { timestamp: Date.now() });
        
        if (this.config.enableLogging) {
            console.log("🚀 Aleph Aleph Bot Orchestrator started");
        }
    }

    async stop(): Promise<void> {
        if (!this.isRunning) {
            return;
        }

        // Shutdown all registered components
        const shutdownPromises = Array.from(this.components.values()).map(
            (component) => component.shutdown()
        );
        await Promise.all(shutdownPromises);

        this.isRunning = false;
        this.emit("orchestrator:stopped", { timestamp: Date.now() });
        
        if (this.config.enableLogging) {
            console.log("🛑 Aleph Aleph Bot Orchestrator stopped");
        }
    }

    async registerComponent(component: ChannelAgent): Promise<void> {
        if (this.components.has(component.id)) {
            throw new Error(`Component with id "${component.id}" is already registered`);
        }

        this.components.set(component.id, component);
        
        try {
            await component.initialize(this);
            this.emit("component:registered", {
                componentId: component.id,
                componentName: component.name,
            });
            
            if (this.config.enableLogging) {
                console.log(`📦 Component registered: ${component.name} (${component.id})`);
            }
        } catch (error) {
            this.components.delete(component.id);
            throw new Error(`Failed to initialize component "${component.id}": ${error}`);
        }
    }

    async unregisterComponent(componentId: string): Promise<void> {
        const component = this.components.get(componentId);
        if (!component) {
            throw new Error(`Component with id "${componentId}" is not registered`);
        }

        try {
            await component.shutdown();
        } catch (error) {
            console.error(`Error shutting down component "${componentId}":`, error);
        }

        this.components.delete(componentId);
        this.emit("component:unregistered", { componentId });
        
        if (this.config.enableLogging) {
            console.log(`📦 Component unregistered: ${componentId}`);
        }
    }

    getStatistics(): OrchestratorStatistics {
        const appStats = this.app.getStats();
        const sysStats = this.sys.getStats();
        const uiStats = this.ui.getStats();

        return {
            startTime: this.startTime,
            uptime: this.isRunning ? Date.now() - this.startTime : 0,
            registeredComponents: this.components.size,
            totalMessagesSent: appStats.messagesSent + sysStats.messagesSent + uiStats.messagesSent,
            totalMessagesReceived: appStats.messagesReceived + sysStats.messagesReceived + uiStats.messagesReceived,
            totalErrors: appStats.errorCount + sysStats.errorCount + uiStats.errorCount,
        };
    }

    destroy(): void {
        if (this.isRunning) {
            this.stop();
        }
        
        this.app.destroy();
        this.sys.destroy();
        this.ui.destroy();
        this.removeAllListeners();
    }

    private setupLogging(): void {
        // Log all messages if detailed logging is enabled
        this.app.subscribe((message) => {
            console.log(`📱 APP: ${message.type} from ${message.source}`);
        });

        this.sys.subscribe((message) => {
            console.log(`⚙️  SYS: ${message.type} from ${message.source}`);
        });

        this.ui.subscribe((message) => {
            console.log(`🎨 UI: ${message.type} from ${message.source}`);
        });
    }
}
