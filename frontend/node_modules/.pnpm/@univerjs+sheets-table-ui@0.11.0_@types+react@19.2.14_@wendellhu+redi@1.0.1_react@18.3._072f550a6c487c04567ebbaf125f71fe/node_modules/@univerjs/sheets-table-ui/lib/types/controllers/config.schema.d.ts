import { MenuConfig } from '@univerjs/ui';
export declare const SHEETS_TABLE_UI_PLUGIN_CONFIG_KEY = "sheets-table-ui.config";
export declare const configSymbol: unique symbol;
export interface IUniverSheetsTableUIConfig {
    anchorHeight?: number;
    anchorBackgroundColor?: string;
    hideAnchor?: boolean;
    menu?: MenuConfig;
}
export declare const defaultPluginConfig: IUniverSheetsTableUIConfig;
