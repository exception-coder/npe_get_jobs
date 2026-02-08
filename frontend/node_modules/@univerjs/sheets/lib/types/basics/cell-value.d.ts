import { ICellData, Nullable, CellValueType } from '@univerjs/core';
/**
 * Get cell value from new value by type
 * @param type
 * @param cell
 * @returns
 */
export declare function getCellValue(type: Nullable<CellValueType>, cell: ICellData): void | import('@univerjs/core').CellValue | null;
/**
 * Supplement the data of the cell, set the other value to NULL, Used to reset properties when undoing
 * @param value
 * @returns
 */
export declare function setNull(value: Nullable<ICellData>): ICellData | null;
