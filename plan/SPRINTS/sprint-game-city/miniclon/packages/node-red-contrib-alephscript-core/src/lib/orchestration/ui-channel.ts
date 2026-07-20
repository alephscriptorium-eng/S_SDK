/**
 * UI Channel Implementation
 * Handles UI-level messages for Aleph bot
 */

import { BaseChannel } from "./base-channel";
import { UIMessage, UIChannel } from "@/types";

export class UIChannelImpl extends BaseChannel<UIMessage> implements UIChannel {
    
    sendUserInput(
        source: string,
        input: string,
        command?: string,
        args?: string[],
        metadata?: Record<string, any>
    ): void {
        this.send({
            source,
            type: "user_input",
            payload: {
                input,
                command,
                args,
            },
            metadata,
        });
    }

    sendDisplayUpdate(
        source: string,
        component: string,
        displayType: "info" | "success" | "warning" | "error",
        message: string,
        metadata?: Record<string, any>
    ): void {
        this.send({
            source,
            type: "display_update",
            payload: {
                component,
                displayType,
                message,
            },
            metadata,
        });
    }

    sendNotification(
        source: string,
        title: string,
        message: string,
        displayType?: "info" | "success" | "warning" | "error",
        metadata?: Record<string, any>
    ): void {
        this.send({
            source,
            type: "notification",
            payload: {
                title,
                message,
                displayType,
            },
            metadata,
        });
    }

    sendPhaseChange(
        source: string,
        phase: string,
        uiState?: any,
        metadata?: Record<string, any>
    ): void {
        this.send({
            source,
            type: "phase_change",
            payload: {
                phase,
                uiState,
            },
            metadata,
        });
    }

    sendRenderRequest(
        source: string,
        component: string,
        renderData: any,
        metadata?: Record<string, any>
    ): void {
        this.send({
            source,
            type: "render_request",
            payload: {
                component,
                renderData,
            },
            metadata,
        });
    }

    // Aleph-specific methods
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
    ): void {
        this.send({
            source,
            type: "aleph_chat_render",
            payload: {
                chatData,
            },
            metadata,
        });
    }

    sendAlephUIUpdate(
        source: string,
        streamInfo: {
            title?: string;
            category?: string;
            viewers?: number;
            isLive?: boolean;
        },
        metadata?: Record<string, any>
    ): void {
        this.send({
            source,
            type: "aleph_ui_update",
            payload: {
                streamInfo,
            },
            metadata,
        });
    }
}
