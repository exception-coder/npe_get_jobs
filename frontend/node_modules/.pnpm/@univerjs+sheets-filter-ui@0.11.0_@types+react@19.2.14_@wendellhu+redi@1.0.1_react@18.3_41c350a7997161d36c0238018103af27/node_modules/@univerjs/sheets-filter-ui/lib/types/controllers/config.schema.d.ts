import { MenuConfig } from '@univerjs/ui';
export declare const SHEETS_FILTER_UI_PLUGIN_CONFIG_KEY = "sheets-filter-ui.config";
export declare const configSymbol: unique symbol;
export interface IUniverSheetsFilterUIConfig {
    menu?: MenuConfig;
    useRemoteFilterValuesGenerator?: boolean;
}
export declare const defaultPluginConfig: IUniverSheetsFilterUIConfig;
