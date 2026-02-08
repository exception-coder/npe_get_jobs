import { MenuConfig } from '@univerjs/ui';
export declare const SHEETS_SORT_UI_PLUGIN_CONFIG_KEY = "sheets-sort-ui.config";
export declare const configSymbol: unique symbol;
export interface IUniverSheetsSortUIConfig {
    menu?: MenuConfig;
}
export declare const defaultPluginConfig: IUniverSheetsSortUIConfig;
