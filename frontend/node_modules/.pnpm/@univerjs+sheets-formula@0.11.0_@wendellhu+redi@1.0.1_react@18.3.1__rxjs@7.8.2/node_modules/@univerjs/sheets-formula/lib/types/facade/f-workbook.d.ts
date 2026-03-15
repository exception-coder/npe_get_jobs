import { ISheetFormulaError } from '@univerjs/engine-formula';
import { FWorkbook } from '@univerjs/sheets/facade';
/**
 * @ignore
 */
export interface IFWorkbookEngineFormulaMixin {
    /**
     * Get all formula errors in the workbook
     * @returns {ISheetFormulaError[]} Array of formula errors
     * @example
     * ```typescript
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const errors = fWorkbook.getAllFormulaError();
     * console.log('Formula errors:', errors);
     * ```
     */
    getAllFormulaError(): ISheetFormulaError[];
}
export declare class FWorkbookEngineFormulaMixin extends FWorkbook implements IFWorkbookEngineFormulaMixin {
    getAllFormulaError(): ISheetFormulaError[];
}
declare module '@univerjs/sheets/facade' {
    interface FWorkbook extends IFWorkbookEngineFormulaMixin {
    }
}
