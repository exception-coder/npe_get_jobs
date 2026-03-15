import { IColumnData, IRowData, Nullable } from '@univerjs/core';
/**
 * Reset the row data to undefined when undoing the operation
 * @param currentRow
 * @returns
 */
export declare function getOldRowData(currentRow: Nullable<Partial<IRowData>>, newRow: Nullable<Partial<IRowData>>): Nullable<Partial<IRowData>>;
/**
 * Reset the column data to undefined when undoing the operation
 * @param currenColumn
 * @param newColumn
 * @returns
 */
export declare function getOldColumnData(currenColumn: Nullable<Partial<IColumnData>>, newColumn: Nullable<Partial<IColumnData>>): Nullable<Partial<IColumnData>>;
