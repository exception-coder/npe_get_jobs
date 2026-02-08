import { DependencyOverride } from '@univerjs/core';
import { MenuConfig } from '@univerjs/ui';
export declare const SHEETS_DRAWING_UI_PLUGIN_CONFIG_KEY = "sheets-drawing-ui.config";
export declare const configSymbol: unique symbol;
export interface IUniverSheetsDrawingUIConfig {
    menu?: MenuConfig;
    overrides?: DependencyOverride;
}
export declare const defaultPluginConfig: IUniverSheetsDrawingUIConfig;
