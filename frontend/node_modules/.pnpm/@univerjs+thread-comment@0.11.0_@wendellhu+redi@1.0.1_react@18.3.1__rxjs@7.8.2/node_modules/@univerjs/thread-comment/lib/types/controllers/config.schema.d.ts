import { DependencyOverride } from '@univerjs/core';
export declare const THREAD_COMMENT_PLUGIN_CONFIG_KEY = "thread-comment.config";
export declare const configSymbol: unique symbol;
export interface IUniverThreadCommentConfig {
    overrides?: DependencyOverride;
}
export declare const defaultPluginConfig: IUniverThreadCommentConfig;
