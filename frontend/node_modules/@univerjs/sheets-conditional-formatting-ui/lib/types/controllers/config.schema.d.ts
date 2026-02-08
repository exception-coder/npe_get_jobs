import { MenuConfig } from '@univerjs/ui';
export declare const SHEETS_CONDITIONAL_FORMATTING_UI_PLUGIN_CONFIG_KEY = "sheets-conditional-formatting-ui.config";
export declare const configSymbol: unique symbol;
export interface IUniverSheetsConditionalFormattingUIConfig {
    menu?: MenuConfig;
}
export declare const defaultPluginConfig: IUniverSheetsConditionalFormattingUIConfig;
