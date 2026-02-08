import { IDisposable } from '@univerjs/core';
import { IRegisterFunctionParams } from '@univerjs/sheets-formula';
import { FUniver } from '@univerjs/core/facade';
/**
 * @ignore
 */
export interface IFUniverSheetsFormulaMixin {
    /**
     * Register a function to the spreadsheet.
     * @deprecated Use `univerAPI.getFormula().registerFunction` instead.
     * @param {IRegisterFunctionParams} config The configuration of the function.
     * @returns {IDisposable} The disposable instance.
     */
    registerFunction(config: IRegisterFunctionParams): IDisposable;
}
/**
 * @ignore
 */
export declare class FUniverSheetsFormulaMixin extends FUniver implements IFUniverSheetsFormulaMixin {
    /**
     * RegisterFunction may be executed multiple times, triggering multiple formula forced refreshes.
     */
    private _debouncedFormulaCalculation;
    /**
     * Initialize the FUniver instance.
     * @ignore
     */
    _initialize(): void;
    registerFunction(config: IRegisterFunctionParams): IDisposable;
}
declare module '@univerjs/core/facade' {
    interface FUniver extends IFUniverSheetsFormulaMixin {
    }
}
