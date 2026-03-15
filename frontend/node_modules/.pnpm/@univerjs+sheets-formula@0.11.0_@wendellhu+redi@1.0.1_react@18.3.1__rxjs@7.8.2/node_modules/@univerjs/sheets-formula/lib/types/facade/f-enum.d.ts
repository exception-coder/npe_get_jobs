import { CalculationMode } from '@univerjs/sheets-formula';
/**
 * @ignore
 */
export interface IFSheetsFormulaEnum {
    /**
     * Define the calculation mode during initialization
     */
    CalculationMode: typeof CalculationMode;
}
export declare class FSheetsFormulaEnum implements IFSheetsFormulaEnum {
    get CalculationMode(): typeof CalculationMode;
}
declare module '@univerjs/core/facade' {
    interface FEnum extends IFSheetsFormulaEnum {
    }
}
