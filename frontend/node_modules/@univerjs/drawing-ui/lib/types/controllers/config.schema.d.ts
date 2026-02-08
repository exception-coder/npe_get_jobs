import { MenuConfig } from '@univerjs/ui';
export declare const DRAWING_UI_PLUGIN_CONFIG_KEY = "drawing-ui.config";
export declare const configSymbol: unique symbol;
export interface IUniverDrawingUIConfig {
    menu?: MenuConfig;
}
export declare const defaultPluginConfig: IUniverDrawingUIConfig;
