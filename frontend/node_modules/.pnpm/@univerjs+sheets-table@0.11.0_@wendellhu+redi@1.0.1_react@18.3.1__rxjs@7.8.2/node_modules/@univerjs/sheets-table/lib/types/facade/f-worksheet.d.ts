import { IRangeThemeStyleJSON } from '@univerjs/sheets';
import { ITableFilterItem, ITableInfoWithUnitId, ITableOptions, ITableRange } from '@univerjs/sheets-table';
import { FWorksheet } from '@univerjs/sheets/facade';
/**
 * @ignore
 */
export interface IFWorkSheetTableMixin {
    /**
     * Add a table to the worksheet
     * @param {string} tableName The table name
     * @param {ITableRange} rangeInfo The table range information
     * @param {string} [tableId] The table id
     * @param {ITableOptions} [options] The table options
     * @returns {Promise<boolean>} Whether the table was added successfully
     * @example
     * ```typescript
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     *
     * // Insert a table in the range B2:F11
     * const fRange = fWorksheet.getRange('B2:F11');
     * const success = await fWorksheet.addTable(
     *   'name-1',
     *   fRange.getRange(),
     *   'id-1',
     *   {
     *     tableStyleId: 'table-default-4',
     *     columns: [
     *       { id: 'col-1', displayName: 'Column 1' }
     *     ],
     *     filters: [
     *       {
     *         filterType: univerAPI.Enum.TableColumnFilterTypeEnum.condition,
     *         filterInfo: {
     *           conditionType: univerAPI.Enum.TableConditionTypeEnum.Number,
     *           compareType: univerAPI.Enum.TableNumberCompareTypeEnum.GreaterThan,
     *           expectedValue: 2,
     *         }
     *       }
     *     ]
     *   }
     * );
     *
     * if (success) {
     *   const tableInfo = fWorkbook.getTableInfo('id-1');
     *   console.log('debugger tableInfo', tableInfo);
     * }
     * ```
     */
    addTable(tableName: string, rangeInfo: ITableRange, tableId?: string, options?: ITableOptions): Promise<boolean> | boolean;
    /**
     * Set the filter for a table column
     * @param {string} tableId The table id
     * @param {number} column The table column index, starting from 0. For example, the first column is 0, the second column is 1, and so on.
     * @param {ITableFilterItem} filter The filter item
     * @returns {Promise<boolean>} Whether the table filter was set successfully
     * @example
     * ```typescript
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     *
     * // Insert a table in the range B2:F11
     * const fRange = fWorksheet.getRange('B2:F11');
     * const success = await fWorksheet.addTable(
     *   'name-1',
     *   fRange.getRange(),
     *   'id-1',
     *   {
     *     tableStyleId: 'table-default-4',
     *   }
     * );
     *
     * if (success) {
     *   // Set the filter for the second column
     *   await fWorksheet.setTableFilter('id-1', 1, {
     *     filterType: univerAPI.Enum.TableColumnFilterTypeEnum.condition,
     *     filterInfo: {
     *       conditionType: univerAPI.Enum.TableConditionTypeEnum.Number,
     *       compareType: univerAPI.Enum.TableNumberCompareTypeEnum.GreaterThan,
     *       expectedValue: 10,
     *     },
     *   });
     *
     *   const tableInfo = fWorkbook.getTableInfo('id-1');
     *   console.log('debugger tableInfo', tableInfo);
     * }
     * ```
     */
    setTableFilter(tableId: string, column: number, filter: ITableFilterItem): Promise<boolean>;
    /**
     * Remove a table from the worksheet
     * @param {string} tableId The table id
     * @returns {Promise<boolean>} Whether the table was removed successfully
     * @example
     * ```typescript
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const tableInfo = fWorkbook.getTableInfo('id-1');
     * console.log('debugger tableInfo', tableInfo);
     *
     * if (tableInfo) {
     *   // Remove the table with the specified id
     *   await fWorksheet.removeTable('id-1');
     * }
     * ```
     */
    removeTable(tableId: string): Promise<boolean>;
    /**
     * Set the range of a table
     * @param {string} tableId The table id
     * @param {ITableRange} rangeInfo The new range information
     * @returns {Promise<boolean>} Whether the table range was set successfully
     * @example
     * ```typescript
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     *
     * // Insert a table in the range B2:F11
     * const fRange = fWorksheet.getRange('B2:F11');
     * const success = await fWorksheet.addTable(
     *   'name-1',
     *   fRange.getRange(),
     *   'id-1',
     *   {
     *     tableStyleId: 'table-default-4',
     *   }
     * );
     *
     * if (success) {
     *   // Update the table range to B2:F21 after 3 seconds
     *   setTimeout(async () => {
     *     const newRange = fWorksheet.getRange('B2:F21');
     *     await fWorksheet.setTableRange('id-1', newRange.getRange());
     *
     *     const tableInfo = fWorkbook.getTableInfo('id-1');
     *     console.log('debugger tableInfo', tableInfo);
     *   }, 3000);
     * }
     * ```
     */
    setTableRange(tableId: string, rangeInfo: ITableRange): Promise<boolean>;
    /**
     * Set the name of a table
     * @param {string} tableId The table id
     * @param {string} tableName The new table name
     * @returns {Promise<boolean>} Whether the table name was set successfully
     * @example
     * ```typescript
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     *
     * // Insert a table in the range B2:F11
     * const fRange = fWorksheet.getRange('B2:F11');
     * const success = await fWorksheet.addTable(
     *   'name-1',
     *   fRange.getRange(),
     *   'id-1',
     *   {
     *     tableStyleId: 'table-default-4',
     *   }
     * );
     *
     * if (success) {
     *   // Update the table name after 3 seconds
     *   setTimeout(async () => {
     *     await fWorksheet.setTableName('id-1', 'new-name');
     *
     *     const tableInfo = fWorkbook.getTableInfo('id-1');
     *     console.log('debugger tableInfo', tableInfo);
     *   }, 3000);
     * }
     * ```
     */
    setTableName(tableId: string, tableName: string): Promise<boolean> | boolean;
    /**
     * Get the list of tables in the worksheet
     * @returns {ITableInfoWithUnitId[]} The list of tables
     * @example
     * ```typescript
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const tables = fWorksheet.getSubTableInfos();
     * console.log('debugger tables', tables);
     * ```
     */
    getSubTableInfos(): ITableInfoWithUnitId[];
    /**
     * Reset the column filter of a table
     * @param {string} tableId The table id
     * @param {number} column The column index, starting from 0. For example, the first column is 0, the second column is 1, and so on.
     * @returns {Promise<boolean>} Whether the table filter was reset successfully
     * @example
     * ```typescript
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     *
     * // Insert a table in the range B2:F11
     * const fRange = fWorksheet.getRange('B2:F11');
     * const success = await fWorksheet.addTable(
     *   'name-1',
     *   fRange.getRange(),
     *   'id-1',
     *   {
     *     tableStyleId: 'table-default-4',
     *   }
     * );
     *
     * if (success) {
     *   // Set the filter for the second column
     *   await fWorksheet.setTableFilter('id-1', 1, {
     *     filterType: univerAPI.Enum.TableColumnFilterTypeEnum.condition,
     *     filterInfo: {
     *       conditionType: univerAPI.Enum.TableConditionTypeEnum.Number,
     *       compareType: univerAPI.Enum.TableNumberCompareTypeEnum.GreaterThan,
     *       expectedValue: 10,
     *     },
     *   });
     *
     *   // Reset the filter for the second column after 3 seconds
     *   setTimeout(async () => {
     *     await fWorksheet.resetFilter('id-1', 1);
     *   }, 3000);
     *
     *   const tableInfo = fWorkbook.getTableInfo('id-1');
     *   console.log('debugger tableInfo', tableInfo);
     * }
     * ```
     */
    resetFilter(tableId: string, column: number): Promise<boolean>;
    /**
     * Get the table information by cell position
     * @param {number} row The cell row index, starting from 0.
     * @param {number} column The cell column index, starting from 0.
     * @returns {ITableInfoWithUnitId | undefined} The table information or undefined if not found
     * @example
     * ```typescript
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     *
     * const cellB2 = fWorksheet.getRange('B2');
     * const row = cellB2.getRow();
     * const column = cellB2.getColumn();
     * console.log('debugger tableInfo', fWorksheet.getTableByCell(row, column));
     *
     * // Insert a table in the range B2:F11
     * const fRange = fWorksheet.getRange('B2:F11');
     * const success = await fWorksheet.addTable(
     *   'name-1',
     *   fRange.getRange(),
     *   'id-1',
     *   {
     *     tableStyleId: 'table-default-4',
     *   }
     * );
     * console.log('debugger tableInfo2', fWorksheet.getTableByCell(row, column));
     * ```
     */
    getTableByCell(row: number, column: number): ITableInfoWithUnitId | undefined;
    /**
     * Add a theme to the table
     * @param {string} tableId The table id
     * @param {IRangeThemeStyleJSON} themeStyleJSON The theme style JSON
     * @returns {Promise<boolean>} Whether the theme was added successfully
     * @example
     * ```typescript
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     *
     * // Insert a table in the range B2:F11
     * const fRange = fWorksheet.getRange('B2:F11');
     * const success = await fWorksheet.addTable(
     *   'name-1',
     *   fRange.getRange(),
     *   'id-1',
     *   {
     *     tableStyleId: 'table-default-4',
     *   }
     * );
     *
     * if (success) {
     *   await fWorksheet.addTableTheme('id-1', {
     *     name: 'table-custom-1',
     *     headerRowStyle: {
     *       bg: {
     *         rgb: '#145f82',
     *       },
     *     },
     *     firstRowStyle: {
     *       bg: {
     *         rgb: '#c0e4f5',
     *       },
     *     },
     *   });
     *
     *   const tableInfo = fWorkbook.getTableInfo('id-1');
     *   console.log('debugger tableInfo', tableInfo);
     * }
     * ```
     */
    addTableTheme(tableId: string, themeStyleJSON: IRangeThemeStyleJSON): Promise<boolean>;
}
export declare class FWorkSheetTableMixin extends FWorksheet implements IFWorkSheetTableMixin {
    addTable(tableName: string, rangeInfo: ITableRange, tableId?: string, options?: ITableOptions): Promise<boolean> | boolean;
    setTableFilter(tableId: string, column: number, filter: ITableFilterItem): Promise<boolean>;
    removeTable(tableId: string): Promise<boolean>;
    setTableRange(tableId: string, rangeInfo: ITableRange): Promise<boolean>;
    setTableName(tableId: string, tableName: string): Promise<boolean> | boolean;
    getSubTableInfos(): ITableInfoWithUnitId[];
    resetFilter(tableId: string, column: number): Promise<boolean>;
    getTableByCell(row: number, column: number): ITableInfoWithUnitId | undefined;
    addTableTheme(tableId: string, themeStyleJSON: IRangeThemeStyleJSON): Promise<boolean>;
}
declare module '@univerjs/sheets/facade' {
    interface FWorksheet extends IFWorkSheetTableMixin {
    }
}
