import { ICellData, Nullable } from '@univerjs/core';
import { ErrorType } from '../../basics/error-type';
export declare function getCellValue(cell: Nullable<ICellData>): import('@univerjs/core').CellValue;
/**
 * Extract the formula error from the cell
 * @param cell
 * @returns
 */
export declare function extractFormulaError(cell: Nullable<ICellData>, isArrayFormulaCell?: boolean): ErrorType | null;
