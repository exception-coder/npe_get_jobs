import { IEventBase } from '@univerjs/core/facade';
import { FRange, FWorkbook, FWorksheet } from '@univerjs/sheets/facade';
/**
 * @ignore
 */
export interface IFSheetSortEventMixin {
    /**
     * This event will be emitted when a range on a worksheet is sorted.
     * @see {@link ISheetRangeSortParams}
     * @example
     * ```typescript
     * const callbackDisposable = univerAPI.addEvent(univerAPI.Event.SheetRangeSorted, (params) => {
     *   console.log(params);
     *   const { workbook, worksheet, range, sortColumn } = params;
     * });
     *
     * // Remove the event listener, use `callbackDisposable.dispose()`
     * ```
     */
    SheetRangeSorted: 'SheetRangeSorted';
    /**
     * This event will be emitted before sorting a range on a worksheet.
     * @see {@link ISheetRangeSortParams}
     * @example
     * ```typescript
     * const callbackDisposable = univerAPI.addEvent(univerAPI.Event.SheetBeforeRangeSort, (params) => {
     *   console.log(params);
     *   const { workbook, worksheet, range, sortColumn } = params;
     *
     *   // Cancel the sorting operation.
     *   params.cancel = true;
     * });
     *
     * // Remove the event listener, use `callbackDisposable.dispose()`
     * ```
     */
    SheetBeforeRangeSort: 'SheetBeforeRangeSort';
}
export declare class FSheetSortEventName implements IFSheetSortEventMixin {
    get SheetRangeSorted(): 'SheetRangeSorted';
    get SheetBeforeRangeSort(): 'SheetBeforeRangeSort';
}
interface ISortColumn {
    column: number;
    ascending: boolean;
}
export interface ISheetRangeSortParams extends IEventBase {
    workbook: FWorkbook;
    worksheet: FWorksheet;
    range: FRange;
    sortColumn: ISortColumn[];
}
/**
 * @ignore
 */
export interface ISheetRangeSortEventParamConfig {
    SheetBeforeRangeSort: ISheetRangeSortParams;
    SheetRangeSorted: ISheetRangeSortParams;
}
declare module '@univerjs/core/facade' {
    interface FEventName extends IFSheetSortEventMixin {
    }
    interface IEventParamConfig extends ISheetRangeSortEventParamConfig {
    }
}
export {};
