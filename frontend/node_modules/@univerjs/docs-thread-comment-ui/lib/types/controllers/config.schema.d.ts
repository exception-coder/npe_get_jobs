import { MenuConfig } from '@univerjs/ui';
export declare const DOCS_THREAD_COMMENT_UI_PLUGIN_CONFIG_KEY = "docs-thread-comment-ui.config";
export declare const configSymbol: unique symbol;
export interface IUniverDocsThreadCommentUIConfig {
    menu?: MenuConfig;
}
export declare const defaultPluginConfig: IUniverDocsThreadCommentUIConfig;
