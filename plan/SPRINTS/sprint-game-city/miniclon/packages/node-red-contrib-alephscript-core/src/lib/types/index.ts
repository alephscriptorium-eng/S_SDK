/**
 * Aleph Aleph Bot - Core Types
 * Extracted "lite" version of orchestration types from state-machine-mcp-driver
 */

import { Observable } from "rxjs";

// ===== Channel Message Types =====

/**
 * Base message interface for all channels
 */
export interface BaseMessage {
    id: string;
    timestamp: number;
    source: string;
    type: string;
    payload?: any;
    metadata?: Record<string, any>;
}

/**
 * Application-level messages (business logic, state changes, etc.)
 */
export interface AppMessage extends BaseMessage {
    type:
        | "state_transition"
        | "action_request" 
        | "action_result"
        | "app_event"
        | "agent_command"
        | "Aleph_message"
        | "Aleph_event";
    payload: {
        stateId?: string;
        targetState?: string;
        actionType?: string;
        actionParams?: any;
        result?: any;
        success?: boolean;
        agentId?: string;
        command?: any;
        data?: any;
        // Aleph-specific payload fields
        chatroom?: string;
        username?: string;
        message?: string;
        badges?: string[];
        emotes?: any[];
        eventType?: "message" | "follow" | "subscribe" | "gift" | "raid";
    };
}

/**
 * System-level messages (health, logging, errors, configuration)
 */
export interface SysMessage extends BaseMessage {
    type:
        | "health_check"
        | "error"
        | "warning"
        | "info"
        | "config_change"
        | "service_status"
        | "Aleph_status"
        | "connection_status";
    payload: {
        level?: "debug" | "info" | "warn" | "error" | "fatal";
        message?: string;
        error?: Error;
        serviceId?: string;
        status?: "online" | "offline" | "degraded" | "connecting" | "disconnected";
        health?: boolean;
        configKey?: string;
        configValue?: any;
        // Aleph-specific payload fields
        channel?: string;
        streamStatus?: "live" | "offline";
        connectionId?: string;
    };
}

/**
 * UI-level messages (user interactions, display updates, notifications)
 */
export interface UIMessage extends BaseMessage {
    type:
        | "user_input"
        | "display_update"
        | "notification"
        | "ui_event"
        | "phase_change"
        | "render_request"
        | "Aleph_chat_render"
        | "Aleph_ui_update";
    payload: {
        input?: string;
        command?: string;
        args?: string[];
        displayType?: "info" | "success" | "warning" | "error";
        title?: string;
        message?: string;
        component?: string;
        phase?: string;
        uiState?: any;
        renderData?: any;
        // Aleph-specific payload fields
        chatData?: {
            messages: Array<{
                username: string;
                message: string;
                timestamp: number;
                badges?: string[];
                emotes?: any[];
            }>;
            viewers?: number;
            followers?: number;
        };
        streamInfo?: {
            title?: string;
            category?: string;
            viewers?: number;
            isLive?: boolean;
        };
    };
}

// ===== Channel Interfaces =====

/**
 * Application Channel - Business logic and state management
 */
export interface AppChannel {
    messages$: Observable<AppMessage>;
    send(message: Omit<AppMessage, "id" | "timestamp">): void;
    subscribe(handler: (message: AppMessage) => void): () => void;
    filter<T extends AppMessage["type"]>(
        type: T
    ): Observable<AppMessage & { type: T }>;

    // Convenience methods
    sendStateTransition(
        source: string,
        currentState: string,
        targetState: string,
        metadata?: Record<string, any>
    ): void;
    sendActionRequest(
        source: string,
        actionType: string,
        actionParams: any,
        metadata?: Record<string, any>
    ): void;
    sendActionResult(
        source: string,
        actionType: string,
        result: any,
        success: boolean,
        metadata?: Record<string, any>
    ): void;
    sendAgentCommand(
        source: string,
        agentId: string,
        command: any,
        metadata?: Record<string, any>
    ): void;

    // Aleph-specific convenience methods
    sendAlephMessage(
        source: string,
        chatroom: string,
        username: string,
        message: string,
        badges?: string[],
        emotes?: any[],
        metadata?: Record<string, any>
    ): void;
    sendAlephEvent(
        source: string,
        eventType: "message" | "follow" | "subscribe" | "gift" | "raid",
        data: any,
        metadata?: Record<string, any>
    ): void;
}

/**
 * System Channel - System health, logging, and monitoring
 */
export interface SysChannel {
    messages$: Observable<SysMessage>;
    send(message: Omit<SysMessage, "id" | "timestamp">): void;
    subscribe(handler: (message: SysMessage) => void): () => void;
    filter<T extends SysMessage["type"]>(
        type: T
    ): Observable<SysMessage & { type: T }>;

    // Convenience methods
    sendHealthCheck(
        source: string,
        serviceId: string,
        health: boolean,
        message?: string,
        metadata?: Record<string, any>
    ): void;
    sendError(
        source: string,
        error: Error,
        message?: string,
        metadata?: Record<string, any>
    ): void;
    sendWarning(
        source: string,
        message: string,
        metadata?: Record<string, any>
    ): void;
    sendInfo(
        source: string,
        message: string,
        metadata?: Record<string, any>
    ): void;
    
    // Aleph-specific convenience methods
    sendAlephStatus(
        source: string,
        channel: string,
        streamStatus: "live" | "offline",
        metadata?: Record<string, any>
    ): void;
    sendConnectionStatus(
        source: string,
        connectionId: string,
        status: "connecting" | "connected" | "disconnected",
        metadata?: Record<string, any>
    ): void;
}

/**
 * UI Channel - User interface interactions and updates
 */
export interface UIChannel {
    messages$: Observable<UIMessage>;
    send(message: Omit<UIMessage, "id" | "timestamp">): void;
    subscribe(handler: (message: UIMessage) => void): () => void;
    filter<T extends UIMessage["type"]>(
        type: T
    ): Observable<UIMessage & { type: T }>;

    // Convenience methods
    sendUserInput(
        source: string,
        input: string,
        command?: string,
        args?: string[],
        metadata?: Record<string, any>
    ): void;
    sendDisplayUpdate(
        source: string,
        component: string,
        displayType: "info" | "success" | "warning" | "error",
        message: string,
        metadata?: Record<string, any>
    ): void;
    sendNotification(
        source: string,
        title: string,
        message: string,
        displayType?: "info" | "success" | "warning" | "error",
        metadata?: Record<string, any>
    ): void;
    sendPhaseChange(
        source: string,
        phase: string,
        uiState?: any,
        metadata?: Record<string, any>
    ): void;
    sendRenderRequest(
        source: string,
        component: string,
        renderData: any,
        metadata?: Record<string, any>
    ): void;

    // Aleph-specific convenience methods
    sendAlephChatRender(
        source: string,
        chatData: {
            messages: Array<{
                username: string;
                message: string;
                timestamp: number;
                badges?: string[];
                emotes?: any[];
            }>;
            viewers?: number;
            followers?: number;
        },
        metadata?: Record<string, any>
    ): void;
    sendAlephUIUpdate(
        source: string,
        streamInfo: {
            title?: string;
            category?: string;
            viewers?: number;
            isLive?: boolean;
        },
        metadata?: Record<string, any>
    ): void;
}

// ===== Component Registration =====

/**
 * Component that can participate in orchestrator communication
 */
export interface ChannelAgent {
    id: string;
    name: string;
    initialize(orchestrator: IOrchestratorChannels): Promise<void>;
    shutdown(): Promise<void>;
}

/**
 * Interface for accessing all communication channels
 */
export interface IOrchestratorChannels {
    app: AppChannel;
    sys: SysChannel;
    ui: UIChannel;
}

// ===== Aleph-specific Types =====

/**
 * Aleph bot configuration
 */
export interface AlephBotConfig {
    username: string;
    password?: string;
    channels: string[];
    autoJoin?: boolean;
    enableEvents?: boolean;
    enableChatLogging?: boolean;
    reconnectOnError?: boolean;
    maxReconnectAttempts?: number;
    reconnectDelay?: number;
}

/**
 * Aleph chat message structure
 */
export interface AlephChatMessage {
    id: string;
    username: string;
    message: string;
    timestamp: number;
    channel: string;
    badges?: string[];
    emotes?: Array<{
        name: string;
        positions: Array<{ start: number; end: number }>;
        url: string;
    }>;
    color?: string;
    isBot?: boolean;
    isModerator?: boolean;
    isSubscriber?: boolean;
}

/**
 * Aleph event types
 */
export interface AlephEvent {
    type: "follow" | "subscribe" | "gift" | "raid" | "host";
    data: {
        username?: string;
        amount?: number;
        message?: string;
        months?: number;
        viewers?: number;
        channel?: string;
    };
    timestamp: number;
}

// ===== Configuration =====

/**
 * Orchestrator configuration options
 */
export interface OrchestratorConfig {
    syncInterval?: number;
    enableEventBroadcasting?: boolean;
    primaryUIId?: string;
    enableReplay?: boolean;
    replayBufferSize?: number;
    enableLogging?: boolean;
    messageTimeout?: number;
    enableCrossChannelRouting?: boolean;
    // Aleph-specific configuration
    AlephBot?: AlephBotConfig;
    webUI?: {
        enabled?: boolean;
        port?: number;
        host?: string;
        enableWebSocket?: boolean;
    };
}

// ===== Web Server Configuration =====

/**
 * Web server configuration
 */
export interface WebServerConfig {
    port?: number;
    host?: string;
    enableWebSocket?: boolean;
    enableCors?: boolean;
    staticPath?: string;
}

// ===== Events =====

/**
 * Orchestrator lifecycle events
 */
export interface OrchestratorEvents {
    "orchestrator:started": { timestamp: number };
    "orchestrator:stopped": { timestamp: number };
    "component:registered": { componentId: string; componentName: string };
    "component:unregistered": { componentId: string };
    "message:sent": { channel: string; messageType: string; messageId: string };
    "message:error": { channel: string; messageId: string; error: Error };
    // Aleph-specific events
    "Aleph:connected": { channel: string; timestamp: number };
    "Aleph:disconnected": { channel: string; timestamp: number };
    "Aleph:message": { message: AlephChatMessage; timestamp: number };
    "Aleph:event": { event: AlephEvent; timestamp: number };
}
