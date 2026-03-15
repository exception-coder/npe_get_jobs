import { ISheetFormulaError } from '@univerjs/engine-formula';
import { FRange } from '@univerjs/sheets/facade';
/**
 * @ignore
 */
export interface IFRangeEngineFormulaMixin {
    /**
     * Get formula errors in the current range
     * @returns {ISheetFormulaError[]} Array of formula errors in the range
     * @example
     * ```typescript
     * const range = univerAPI.getActiveWorkbook()
     *   .getActiveSheet()
     *   .getRange('A1:B10');
     * const errors = range.getFormulaError();
     * console.log('Formula errors in range:', errors);
     * ```
     */
    getFormulaError(): ISheetFormulaError[];
}
/**
 * @ignore
 */
export declare class FRangeEngineFormulaMixin extends FRange implements IFRangeEngineFormulaMixin {
    getFormulaError(): ISheetFormulaError[];
}
declare module '@univerjs/sheets/facade' {
    interface FRange extends IFRangeEngineFormulaMixin {
    }
}
