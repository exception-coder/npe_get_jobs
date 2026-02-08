import { ICellData, ICommand, IRange, Nullable, ObjectMatrix } from '@univerjs/core';
export interface IInsertFunctionOperationParams {
    /**
     * function name
     */
    value: string;
}
export declare const InsertFunctionOperation: ICommand;
export declare function isNumberCell(cell: Nullable<ICellData>): boolean | void | null;
/**
 * Check if a single cell
 * @param range
 */
export declare function isSingleCell(range: IRange): boolean;
/**
 * Check if there is a multi-row, multi-column range
 * @param range
 */
export declare function isMultiRowsColumnsRange(range: IRange): boolean;
/**
 * Check the range has no number
 * @param cellMatrix
 * @param range
 */
export declare function rangeHasNoNumber(cellMatrix: ObjectMatrix<Nullable<ICellData>>, range: IRange): boolean;
