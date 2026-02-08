import { Ctor } from '@univerjs/core';
import { BaseFunction, IFunctionInfo, IFunctionNames } from '@univerjs/engine-formula';
import { MenuConfig } from '@univerjs/ui';
/**
 * Base configuration for the plugin.
 */
export declare const PLUGIN_CONFIG_KEY_BASE = "sheets-formula-ui.base.config";
export declare const configSymbolBase: unique symbol;
export interface IUniverSheetsFormulaUIConfig {
    menu?: MenuConfig;
    notExecuteFormula?: boolean;
    description?: IFunctionInfo[];
    function?: Array<[Ctor<BaseFunction>, IFunctionNames]>;
    /**
     * The switch for the function screen tips display in the formula editor.
     * @default true
     */
    functionScreenTips?: boolean;
}
export declare const defaultPluginConfig: IUniverSheetsFormulaUIConfig;
