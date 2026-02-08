import { DependencyOverride } from '@univerjs/core';
export declare const DRAWING_PLUGIN_CONFIG_KEY = "drawing.config";
export declare const configSymbol: unique symbol;
export interface IUniverDrawingConfig {
    override?: DependencyOverride;
}
export declare const defaultPluginConfig: IUniverDrawingConfig;
