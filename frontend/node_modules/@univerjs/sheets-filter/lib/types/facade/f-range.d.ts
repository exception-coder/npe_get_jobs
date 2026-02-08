import { FRange } from '@univerjs/sheets/facade';
import { FFilter } from './f-filter';
/**
 * @ignore
 */
export interface IFRangeFilter {
    /**
     * Create a filter for the current range. If the worksheet already has a filter, this method would return `null`.
     * @returns {FFilter | null} The FFilter instance to handle the filter.
     * @example
     * ```typescript
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const fRange = fWorksheet.getRange('A1:D14');
     * let fFilter = fRange.createFilter();
     *
     * // If the worksheet already has a filter, remove it and create a new filter.
     * if (!fFilter) {
     *   fWorksheet.getFilter().remove();
     *   fFilter = fRange.createFilter();
     * }
     * console.log(fFilter, fFilter.getRange().getA1Notation());
     * ```
     */
    createFilter(this: FRange): FFilter | null;
    /**
     * Get the filter in the worksheet to which the range belongs. If the worksheet does not have a filter, this method would return `null`.
     * Normally, you can directly call `getFilter` on {@link FWorksheet}.
     * @returns {FFilter | null} The FFilter instance to handle the filter.
     * @example
     * ```typescript
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const fRange = fWorksheet.getRange('A1:D14');
     * let fFilter = fRange.getFilter();
     *
     * // If the worksheet does not have a filter, create a new filter.
     * if (!fFilter) {
     *    fFilter = fRange.createFilter();
     * }
     * console.log(fFilter, fFilter.getRange().getA1Notation());
     * ```
     */
    getFilter(): FFilter | null;
}
export declare class FRangeFilter extends FRange implements IFRangeFilter {
    createFilter(): FFilter | null;
    /**
     * Get the filter for the current range's worksheet.
     * @returns {FFilter | null} The interface class to handle the filter. If the worksheet does not have a filter,
     * this method would return `null`.
     */
    getFilter(): FFilter | null;
    private _getFilterModel;
}
declare module '@univerjs/sheets/facade' {
    interface FRange extends IFRangeFilter {
    }
}
