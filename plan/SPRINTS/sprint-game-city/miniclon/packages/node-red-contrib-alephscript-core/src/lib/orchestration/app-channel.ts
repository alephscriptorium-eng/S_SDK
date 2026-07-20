/**
 * App Channel Implementation
 * Handles application-level messages for Aleph bot
 */

import { BaseChannel } from "./base-channel";
import { AppMessage, AppChannel } from "@/types";

export class AppChannelImpl extends BaseChannel<AppMessage> implements AppChannel {
    
    sendStateTransition(
        source: string,
        currentState: string,
        targetState: string,
        metadata?: Record<string, any>
    ): void {
        this.send({
            source,
            type: "state_transition",
            payload: {
                stateId: currentState,
                targetState,
            },
            metadata,
        });
    }

    sendActionRequest(
        source: string,
        actionType: string,
        actionParams: any,
        metadata?: Record<string, any>
    ): void {
        this.send({
            source,
            type: "action_request",
            payload: {
                actionType,
                actionParams,
            },
            metadata,
        });
    }

    sendActionResult(
        source: string,
        actionType: string,
        result: any,
        success: boolean,
        metadata?: Record<string, any>
    ): void {
        this.send({
            source,
            type: "action_result",
            payload: {
                actionType,
                result,
                success,
            },
            metadata,
        });
    }

    sendAgentCommand(
        source: string,
        agentId: string,
        command: any,
        metadata?: Record<string, any>
    ): void {
        this.send({
            source,
            type: "agent_command",
            payload: {
                agentId,
                command,
            },
            metadata,
        });
    }

    // Aleph-specific methods
    sendAlephMessage(
        source: string,
        chatroom: string,
        username: string,
        message: string,
        badges?: string[],
        emotes?: any[],
        metadata?: Record<string, any>
    ): void {
        this.send({
            source,
            type: "aleph_message",
            payload: {
                chatroom,
                username,
                message,
                badges,
                emotes,
            },
            metadata,
        });
    }

    sendAlephEvent(
        source: string,
        eventType: "message" | "follow" | "subscribe" | "gift" | "raid",
        data: any,
        metadata?: Record<string, any>
    ): void {
        this.send({
            source,
            type: "aleph_event",
            payload: {
                eventType,
                data,
            },
            metadata,
        });
    }
}
