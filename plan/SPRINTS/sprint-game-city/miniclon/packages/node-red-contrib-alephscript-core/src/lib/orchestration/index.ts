/**
 * Orchestration Module Index
 * Exports for aleph-aleph-bot orchestration
 */

export { AlephOrchestrator } from "./orchestrator";
export type { OrchestratorStatistics } from "./orchestrator";

export { BaseChannel } from "./base-channel";
export type { ChannelStats } from "./base-channel";

export { AppChannelImpl } from "./app-channel";
export { SysChannelImpl } from "./sys-channel";
export { UIChannelImpl } from "./ui-channel";

// Re-export types from types module
export type {
    BaseMessage,
    AppMessage,
    SysMessage,
    UIMessage,
    AppChannel,
    SysChannel,
    UIChannel,
    ChannelAgent,
    IOrchestratorChannels,
    OrchestratorConfig,
    OrchestratorEvents,
    AlephBotConfig,
    AlephChatMessage,
    AlephEvent,
} from "@/types";
