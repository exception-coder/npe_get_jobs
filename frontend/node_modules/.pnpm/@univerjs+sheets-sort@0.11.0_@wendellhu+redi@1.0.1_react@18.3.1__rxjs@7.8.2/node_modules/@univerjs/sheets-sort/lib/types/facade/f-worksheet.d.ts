import { FWorksheet } from '@univerjs/sheets/facade';
/**
 * @ignore
 */
export interface IFWorksheetSort {
    /**
     * Sort the worksheet by the specified column.
     * @param {number} colIndex The column index to sort by.
     * @param {boolean} [asc=true] The sort order. `true` for ascending, `false` for descending. The column A index is 0.
     * @returns {FWorksheet} The worksheet itself for chaining.
     * @example
     * ```typescript
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     *
     * // Sorts the worksheet by the column A in ascending order.
     * fWorksheet.sort(0);
     *
     * // Sorts the worksheet by the column A in descending order.
     * fWorksheet.sort(0, false);
     * ```
     */
    sort(colIndex: number, asc?: boolean): FWorksheet;
}
export declare class FWorksheetSort extends FWorksheet implements IFWorksheetSort {
    sort(colIndex: number, asc?: boolean): FWorksheet;
}
declare module '@univerjs/sheets/facade' {
    interface FWorksheet extends IFWorksheetSort {
    }
}
