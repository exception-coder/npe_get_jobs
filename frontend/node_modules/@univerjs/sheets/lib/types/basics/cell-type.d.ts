import { CellValue, ICellData, Nullable, Styles, CellValueType } from '@univerjs/core';
/**
 * Get cell value type by style, new value and old value.
 * If the new value contains t, then take t directly. In other cases, we need to dynamically determine based on actual data and styles
 * @param newVal
 * @param oldVal
 * @returns
 */
export declare function getCellType(styles: Styles, newVal: ICellData, oldVal: ICellData): void | CellValueType | null;
/**
 * Get the correct type after setting values to a cell.
 *
 * @param v the new value
 * @param type the old type
 * @returns the new type
 */
export declare function checkCellValueType(v: Nullable<CellValue>, type: Nullable<CellValueType>): Nullable<CellValueType>;
export declare function getCellTypeByPattern(cell: ICellData, pattern: string): Nullable<CellValueType>;
