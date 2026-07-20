/**
 * System Channel Implementation
 * Handles system-level messages for Aleph bot
 */

import { BaseChannel } from "./base-channel";
import { SysMessage, SysChannel } from "@/types";

export class SysChannelImpl extends BaseChannel<SysMessage> implements SysChannel {
    
    sendHealthCheck(
        source: string,
        serviceId: string,
        health: boolean,
        message?: string,
        metadata?: Record<string, any>
    ): void {
        this.send({
            source,
            type: "health_check",
            payload: {
                serviceId,
                health,
                message,
            },
            metadata,
        });
    }

    sendError(
        source: string,
        error: Error,
        message?: string,
        metadata?: Record<string, any>
    ): void {
        this.send({
            source,
            type: "error",
            payload: {
                level: "error",
                error,
                message,
            },
            metadata,
        });
    }

    sendWarning(
        source: string,
        message: string,
        metadata?: Record<string, any>
    ): void {
        this.send({
            source,
            type: "warning",
            payload: {
                level: "warn",
                message,
            },
            metadata,
        });
    }

    sendInfo(
        source: string,
        message: string,
        metadata?: Record<string, any>
    ): void {
        this.send({
            source,
            type: "info",
            payload: {
                level: "info",
                message,
            },
            metadata,
        });
    }

    // Aleph-specific methods
    sendAlephStatus(
        source: string,
        channel: string,
        streamStatus: "live" | "offline",
        metadata?: Record<string, any>
    ): void {
        this.send({
            source,
            type: "aleph_status",
            payload: {
                channel,
                streamStatus,
            },
            metadata,
        });
    }

    sendConnectionStatus(
        source: string,
        connectionId: string,
        status: "connecting" | "connected" | "disconnected",
        metadata?: Record<string, any>
    ): void {
        this.send({
            source,
            type: "connection_status",
            payload: {
                connectionId,
                status: status === "connected" ? "online" : status === "connecting" ? "connecting" : "offline",
            },
            metadata,
        });
    }
}
