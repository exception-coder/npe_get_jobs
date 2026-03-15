import { Nullable, Workbook, Worksheet, ICommandService, Injector } from '@univerjs/core';
import { FilterModel, IFilterColumn, ISetSheetsFilterCriteriaCommandParams } from '@univerjs/sheets-filter';
import { FRange } from '@univerjs/sheets/facade';
/**
 * This interface class provides methods to modify the filter settings of a worksheet.
 * @hideconstructor
 */
export declare class FFilter {
    private readonly _workbook;
    private readonly _worksheet;
    private readonly _filterModel;
    private readonly _injector;
    private readonly _commandSrv;
    constructor(_workbook: Workbook, _worksheet: Worksheet, _filterModel: FilterModel, _injector: Injector, _commandSrv: ICommandService);
    /**
     * Get the filtered out rows by this filter.
     * @returns {number[]} Filtered out rows by this filter.
     * @example
     * ```typescript
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     *
     * // Set some values of the range C1:F10
     * const fRange = fWorksheet.getRange('C1:F10');
     * fRange.setValues([
     *   [1, 2, 3, 4],
     *   [2, 3, 4, 5],
     *   [3, 4, 5, 6],
     *   [4, 5, 6, 7],
     *   [5, 6, 7, 8],
     *   [6, 7, 8, 9],
     *   [7, 8, 9, 10],
     *   [8, 9, 10, 11],
     *   [9, 10, 11, 12],
     *   [10, 11, 12, 13],
     * ]);
     *
     * // Create a filter on the range C1:F10
     * let fFilter = fRange.createFilter();
     *
     * // If the filter already exists, remove it and create a new one
     * if (!fFilter) {
     *   fRange.getFilter().remove();
     *   fFilter = fRange.createFilter();
     * }
     *
     * // Set the filter criteria of the column C, filter out the rows that are not 1, 5, 9
     * const column = fWorksheet.getRange('C:C').getColumn();
     * fFilter.setColumnFilterCriteria(column, {
     *   colId: 0,
     *   filters: {
     *     filters: ['1', '5', '9'],
     *   },
     * });
     *
     * // Get the filtered out rows
     * console.log(fFilter.getFilteredOutRows()); // [1, 2, 3, 5, 6, 7, 9]
     * ```
     */
    getFilteredOutRows(): number[];
    /**
     * Get the filter criteria of a column.
     * @param {number} column - The column index.
     * @returns {Nullable<IFilterColumn>} The filter criteria of the column.
     * @example
     * ```typescript
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     *
     * // Set some values of the range C1:F10
     * const fRange = fWorksheet.getRange('C1:F10');
     * fRange.setValues([
     *   [1, 2, 3, 4],
     *   [2, 3, 4, 5],
     *   [3, 4, 5, 6],
     *   [4, 5, 6, 7],
     *   [5, 6, 7, 8],
     *   [6, 7, 8, 9],
     *   [7, 8, 9, 10],
     *   [8, 9, 10, 11],
     *   [9, 10, 11, 12],
     *   [10, 11, 12, 13],
     * ]);
     *
     * // Create a filter on the range C1:F10
     * let fFilter = fRange.createFilter();
     *
     * // If the filter already exists, remove it and create a new one
     * if (!fFilter) {
     *   fRange.getFilter().remove();
     *   fFilter = fRange.createFilter();
     * }
     *
     * // Set the filter criteria of the column C, filter out the rows that are not 1, 5, 9
     * const column = fWorksheet.getRange('C:C').getColumn();
     * fFilter.setColumnFilterCriteria(column, {
     *   colId: 0,
     *   filters: {
     *     filters: ['1', '5', '9'],
     *   },
     * });
     *
     * // Print the filter criteria of the column C and D
     * console.log(fFilter.getColumnFilterCriteria(column)); // { colId: 0, filters: { filters: ['1', '5', '9'] } }
     * console.log(fFilter.getColumnFilterCriteria(column + 1)); // undefined
     * ```
     */
    getColumnFilterCriteria(column: number): Nullable<IFilterColumn>;
    /**
     * Clear the filter criteria of a column.
     * @param {number} column - The column index.
     * @returns {FFilter} The FFilter instance for chaining.
     * @example
     * ```typescript
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     *
     * // Set some values of the range C1:F10
     * const fRange = fWorksheet.getRange('C1:F10');
     * fRange.setValues([
     *   [1, 2, 3, 4],
     *   [2, 3, 4, 5],
     *   [3, 4, 5, 6],
     *   [4, 5, 6, 7],
     *   [5, 6, 7, 8],
     *   [6, 7, 8, 9],
     *   [7, 8, 9, 10],
     *   [8, 9, 10, 11],
     *   [9, 10, 11, 12],
     *   [10, 11, 12, 13],
     * ]);
     *
     * // Create a filter on the range C1:F10
     * let fFilter = fRange.createFilter();
     *
     * // If the filter already exists, remove it and create a new one
     * if (!fFilter) {
     *   fRange.getFilter().remove();
     *   fFilter = fRange.createFilter();
     * }
     *
     * // Set the filter criteria of the column C, filter out the rows that are not 1, 5, 9
     * const column = fWorksheet.getRange('C:C').getColumn();
     * fFilter.setColumnFilterCriteria(column, {
     *   colId: 0,
     *   filters: {
     *     filters: ['1', '5', '9'],
     *   },
     * });
     *
     * // Clear the filter criteria of the column C after 3 seconds
     * setTimeout(() => {
     *   fFilter.removeColumnFilterCriteria(column);
     * }, 3000);
     * ```
     */
    removeColumnFilterCriteria(column: number): FFilter;
    /**
     * Set the filter criteria of a column.
     * @param {number} column - The column index.
     * @param {ISetSheetsFilterCriteriaCommandParams['criteria']} criteria - The new filter criteria.
     * @returns {FFilter} The FFilter instance for chaining.
     * @example
     * ```typescript
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     *
     * // Set some values of the range C1:F10
     * const fRange = fWorksheet.getRange('C1:F10');
     * fRange.setValues([
     *   [1, 2, 3, 4],
     *   [2, 3, 4, 5],
     *   [3, 4, 5, 6],
     *   [4, 5, 6, 7],
     *   [5, 6, 7, 8],
     *   [6, 7, 8, 9],
     *   [7, 8, 9, 10],
     *   [8, 9, 10, 11],
     *   [9, 10, 11, 12],
     *   [10, 11, 12, 13],
     * ]);
     *
     * // Create a filter on the range C1:F10
     * let fFilter = fRange.createFilter();
     *
     * // If the filter already exists, remove it and create a new one
     * if (!fFilter) {
     *   fRange.getFilter().remove();
     *   fFilter = fRange.createFilter();
     * }
     *
     * // Set the filter criteria of the column C, filter out the rows that are not 1, 5, 9
     * const column = fWorksheet.getRange('C:C').getColumn();
     * fFilter.setColumnFilterCriteria(column, {
     *   colId: 0,
     *   filters: {
     *     filters: ['1', '5', '9'],
     *   },
     * });
     * ```
     */
    setColumnFilterCriteria(column: number, criteria: ISetSheetsFilterCriteriaCommandParams['criteria']): FFilter;
    /**
     * Get the range of the filter.
     * @returns {FRange} The range of the filter.
     * @example
     * ```typescript
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const fFilter = fWorksheet.getFilter();
     * console.log(fFilter?.getRange().getA1Notation());
     * ```
     */
    getRange(): FRange;
    /**
     * Remove the filter criteria of all columns.
     * @returns {FFilter} The FFilter instance for chaining.
     * @example
     * ```typescript
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     *
     * // Set some values of the range C1:F10
     * const fRange = fWorksheet.getRange('C1:F10');
     * fRange.setValues([
     *   [1, 2, 3, 4],
     *   [2, 3, 4, 5],
     *   [3, 4, 5, 6],
     *   [4, 5, 6, 7],
     *   [5, 6, 7, 8],
     *   [6, 7, 8, 9],
     *   [7, 8, 9, 10],
     *   [8, 9, 10, 11],
     *   [9, 10, 11, 12],
     *   [10, 11, 12, 13],
     * ]);
     *
     * // Create a filter on the range C1:F10
     * let fFilter = fRange.createFilter();
     *
     * // If the filter already exists, remove it and create a new one
     * if (!fFilter) {
     *   fRange.getFilter().remove();
     *   fFilter = fRange.createFilter();
     * }
     *
     * // Set the filter criteria of the column C, filter out the rows that are not 1, 5, 9
     * const column = fWorksheet.getRange('C:C').getColumn();
     * fFilter.setColumnFilterCriteria(column, {
     *   colId: 0,
     *   filters: {
     *     filters: ['1', '5', '9'],
     *   },
     * });
     *
     * // Clear the filter criteria of all columns after 3 seconds
     * setTimeout(() => {
     *   fFilter.removeFilterCriteria();
     * }, 3000);
     * ```
     */
    removeFilterCriteria(): FFilter;
    /**
     * Remove the filter from the worksheet.
     * @returns {boolean} True if the filter is removed successfully; otherwise, false.
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
     * console.log(fFilter);
     * ```
     */
    remove(): boolean;
}
