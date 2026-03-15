import { MenuConfig } from '@univerjs/ui';
export declare const FIND_REPLACE_PLUGIN_CONFIG_KEY = "find-replace.config";
export declare const configSymbol: unique symbol;
export interface IUniverFindReplaceConfig {
    menu?: MenuConfig;
}
export declare const defaultPluginConfig: IUniverFindReplaceConfig;
