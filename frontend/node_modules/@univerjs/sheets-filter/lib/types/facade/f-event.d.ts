import { IEventBase, FEventName } from '@univerjs/core/facade';
import { ISetSheetsFilterCriteriaCommandParams } from '@univerjs/sheets-filter';
import { FWorkbook, FWorksheet } from '@univerjs/sheets/facade';
/**
 * @ignore
 */
export interface IFSheetFilterEventMixin {
    /**
     * This event will be emitted when the filter criteria on a column is changed.
     * @see {@link ISheetRangeFilteredParams}
     * @example
     * ```typescript
     * const callbackDisposable = univerAPI.addEvent(univerAPI.Event.SheetRangeFiltered, (params) => {
     *   console.log(params);
     *   const { workbook, worksheet, col, criteria } = params;
     *
     *   // your custom logic
     * });
     *
     * // Remove the event listener, use `callbackDisposable.dispose()`
     * ```
     */
    readonly SheetRangeFiltered: 'SheetRangeFiltered';
    /**
     * This event will be emitted before the filter criteria on a column is changed.
     * @see {@link ISheetRangeFilteredParams}
     * @example
     * ```typescript
     * const callbackDisposable = univerAPI.addEvent(univerAPI.Event.SheetBeforeRangeFilter, (params) => {
     *   console.log(params);
     *   const { workbook, worksheet, col, criteria } = params;
     *
     *   // your custom logic
     *
     *   // Cancel the filter criteria change operation
     *   params.cancel = true;
     * });
     *
     * // Remove the event listener, use `callbackDisposable.dispose()`
     * ```
     */
    readonly SheetBeforeRangeFilter: 'SheetBeforeRangeFilter';
    /**
     * This event will be emitted when the filter on a worksheet is cleared.
     * @see {@link ISheetRangeFilterClearedEventParams}
     * @example
     * ```typescript
     * const callbackDisposable = univerAPI.addEvent(univerAPI.Event.SheetRangeFilterCleared, (params) => {
     *   console.log(params);
     *   const { workbook, worksheet } = params;
     *
     *   // your custom logic
     * });
     *
     * // Remove the event listener, use `callbackDisposable.dispose()`
     * ```
     */
    readonly SheetRangeFilterCleared: 'SheetRangeFilterCleared';
    /**
     * This event will be emitted after the filter on a worksheet is cleared.
     * @see {@link ISheetRangeFilterClearedEventParams}
     * @example
     * ```typescript
     * const callbackDisposable = univerAPI.addEvent(univerAPI.Event.SheetBeforeRangeFilterClear, (params) => {
     *   console.log(params);
     *   const { workbook, worksheet } = params;
     *
     *   // your custom logic
     *
     *   // Cancel the filter clear operation
     *   params.cancel = true;
     * });
     *
     * // Remove the event listener, use `callbackDisposable.dispose()`
     * ```
     */
    readonly SheetBeforeRangeFilterClear: 'SheetBeforeRangeFilterClear';
}
export declare class FSheetFilterEventName extends FEventName implements IFSheetFilterEventMixin {
    get SheetBeforeRangeFilter(): 'SheetBeforeRangeFilter';
    get SheetRangeFiltered(): 'SheetRangeFiltered';
    get SheetRangeFilterCleared(): 'SheetRangeFilterCleared';
    get SheetBeforeRangeFilterClear(): 'SheetBeforeRangeFilterClear';
}
declare module '@univerjs/core/facade' {
    interface FEventName extends IFSheetFilterEventMixin {
    }
}
/**
 * The params of SheetRangeFiltered and SheetBeforeRangeFilter events.
 * @param workbook - The corresponding workbook wrapped in {@link FWorkbook}.
 * @param worksheet - The corresponding worksheet wrapped in {@link FWorksheet}.
 * @param col - The column on which the filter criteria is changed.
 * @param criteria - Raw filter criteria.
 */
export interface ISheetRangeFilteredParams extends IEventBase, Pick<ISetSheetsFilterCriteriaCommandParams, 'criteria' | 'col'> {
    workbook: FWorkbook;
    worksheet: FWorksheet;
}
/**
 * The params of SheetRangeFilterCleared and SheetBeforeRangeFilterClear events.
 * @param workbook - The corresponding workbook wrapped in {@link FWorkbook}.
 * @param worksheet - The corresponding worksheet wrapped in {@link FWorksheet}.
 */
export interface ISheetRangeFilterClearedEventParams extends IEventBase {
    workbook: FWorkbook;
    worksheet: FWorksheet;
}
/**
 * @ignore
 */
interface ISheetRangeFilterEventParamConfig {
    SheetBeforeRangeFilter: ISheetRangeFilteredParams;
    SheetRangeFiltered: ISheetRangeFilteredParams;
    SheetBeforeRangeFilterClear: ISheetRangeFilterClearedEventParams;
    SheetRangeFilterCleared: ISheetRangeFilterClearedEventParams;
}
declare module '@univerjs/core/facade' {
    interface FEventName extends IFSheetFilterEventMixin {
    }
    interface IEventParamConfig extends ISheetRangeFilterEventParamConfig {
    }
}
export {};
