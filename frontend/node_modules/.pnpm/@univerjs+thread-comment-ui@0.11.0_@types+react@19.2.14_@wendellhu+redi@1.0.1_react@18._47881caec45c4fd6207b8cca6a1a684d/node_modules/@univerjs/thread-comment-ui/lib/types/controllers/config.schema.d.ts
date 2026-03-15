import { DependencyOverride } from '@univerjs/core';
import { MenuConfig } from '@univerjs/ui';
export declare const THREAD_COMMENT_UI_PLUGIN_CONFIG_KEY = "thread-comment-ui.config";
export declare const configSymbol: unique symbol;
export interface IUniverThreadCommentUIConfig {
    overrides?: DependencyOverride;
    menu?: MenuConfig;
}
export declare const defaultPluginConfig: IUniverThreadCommentUIConfig;
