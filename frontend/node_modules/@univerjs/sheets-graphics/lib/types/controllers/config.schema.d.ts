import { DependencyOverride } from '@univerjs/core';
export declare const PLUGIN_CONFIG_KEY = "graphics.config";
export declare const configSymbol: unique symbol;
export interface IUniverSheetsGraphicsConfig {
    override?: DependencyOverride;
}
export declare const defaultPluginConfig: IUniverSheetsGraphicsConfig;
