import { FRange } from '@univerjs/sheets/facade';
export type SortColumnSpec = {
    column: number;
    ascending: boolean;
} | number;
/**
 * @ignore
 */
export interface IFRangeSort {
    /**
     * Sorts the cells in the given range, by column(s) and order specified.
     * @param {SortColumnSpec | SortColumnSpec[]} column The column index with order or an array of column indexes with order. The range first column index is 0.
     * @returns {FRange} The range itself for chaining.
     * @example
     * ```typescript
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const fRange = fWorksheet.getRange('D1:G10');
     *
     * // Sorts the range by the first column in ascending order.
     * fRange.sort(0);
     *
     * // Sorts the range by the first column in descending order.
     * fRange.sort({ column: 0, ascending: false });
     *
     * // Sorts the range by the first column in descending order and the second column in ascending order.
     * fRange.sort([{ column: 0, ascending: false }, 1]);
     * ```
     */
    sort(column: SortColumnSpec | SortColumnSpec[]): FRange;
}
export declare class FRangeSort extends FRange implements IFRangeSort {
    sort(column: SortColumnSpec | SortColumnSpec[]): FRange;
}
declare module '@univerjs/sheets/facade' {
    interface FRange extends IFRangeSort {
    }
}
