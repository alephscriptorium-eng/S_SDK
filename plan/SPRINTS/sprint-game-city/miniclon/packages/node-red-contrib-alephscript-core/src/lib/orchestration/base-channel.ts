/**
 * Base Channel Implementation
 * Simplified version extracted from state-machine-mcp-driver
 */

import { Subject, Observable } from "rxjs";
import { filter, tap } from "rxjs/operators";
import { BaseMessage } from "@/types";

export interface ChannelStats {
    messagesSent: number;
    messagesReceived: number;
    errorCount: number;
    lastMessageTimestamp: number;
}

export abstract class BaseChannel<T extends BaseMessage> {
    protected messageSubject = new Subject<T>();
    public readonly messages$ = this.messageSubject.asObservable();
    
    protected stats: ChannelStats = {
        messagesSent: 0,
        messagesReceived: 0,
        errorCount: 0,
        lastMessageTimestamp: 0,
    };

    protected generateId(): string {
        return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }

    protected createMessage(message: Omit<T, "id" | "timestamp">): T {
        return {
            ...message,
            id: this.generateId(),
            timestamp: Date.now(),
        } as T;
    }

    public send(message: Omit<T, "id" | "timestamp">): void {
        try {
            const fullMessage = this.createMessage(message);
            this.messageSubject.next(fullMessage);
            this.stats.messagesSent++;
            this.stats.lastMessageTimestamp = fullMessage.timestamp;
        } catch (error) {
            this.stats.errorCount++;
            console.error(`Error sending message on ${this.constructor.name}:`, error);
        }
    }

    public subscribe(handler: (message: T) => void): () => void {
        const subscription = this.messages$.pipe(
            tap(() => this.stats.messagesReceived++)
        ).subscribe(handler);
        
        return () => subscription.unsubscribe();
    }

    public filter<K extends T["type"]>(
        type: K
    ): Observable<T & { type: K }> {
        return this.messages$.pipe(
            filter((message: T): message is T & { type: K } => message.type === type)
        );
    }

    public getStats(): ChannelStats {
        return { ...this.stats };
    }

    public destroy(): void {
        this.messageSubject.complete();
    }
}
