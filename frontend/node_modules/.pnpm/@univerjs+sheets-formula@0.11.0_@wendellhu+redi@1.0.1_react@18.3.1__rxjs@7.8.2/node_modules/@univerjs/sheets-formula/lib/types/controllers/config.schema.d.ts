import { Ctor } from '@univerjs/core';
import { BaseFunction, IFunctionInfo, IFunctionNames } from '@univerjs/engine-formula';
/**
 * Base configuration for the plugin.
 */
export declare const PLUGIN_CONFIG_KEY_BASE = "sheets-formula.base.config";
export declare const configSymbolBase: unique symbol;
export declare enum CalculationMode {
    /**
     * Force calculation of all formulas
     */
    FORCED = 0,
    /**
     * Partial calculation, only cells with formulas but no v values are calculated
     */
    WHEN_EMPTY = 1,
    /**
     * All formulas are not calculated
     */
    NO_CALCULATION = 2
}
export interface IUniverSheetsFormulaBaseConfig {
    notExecuteFormula?: boolean;
    description?: IFunctionInfo[];
    function?: Array<[Ctor<BaseFunction>, IFunctionNames]>;
    /**
     * Define the calculation mode during initialization, default is `WHEN_EMPTY`
     */
    initialFormulaComputing?: CalculationMode;
    /**
     * If true, the plugin will write array formula results to the snapshot. Normally you should not set this value.
     */
    writeArrayFormulaToSnapshot?: boolean;
}
export declare const defaultPluginBaseConfig: IUniverSheetsFormulaBaseConfig;
/**
 * Remote configuration for the plugin.
 */
export declare const PLUGIN_CONFIG_KEY_REMOTE = "sheets-formula.remote.config";
export declare const configSymbolRemote: unique symbol;
export interface IUniverSheetsFormulaRemoteConfig {
}
export declare const defaultPluginRemoteConfig: IUniverSheetsFormulaRemoteConfig;
/**
 * Mobile configuration for the plugin.
 */
export declare const PLUGIN_CONFIG_KEY_MOBILE = "sheets-formula.mobile.config";
export declare const configSymbolMobile: unique symbol;
