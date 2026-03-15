import { FRange } from '@univerjs/sheets/facade';
/**
 * @ignore
 */
export interface IFRangeSheetsNumfmtMixin {
    /**
     * Set the number format of the range.
     * @param {string} pattern - The number format pattern.
     * @returns {FRange} The FRange instance for chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     *
     * // Set the number format of the A1 cell to '#,##0.00'.
     * const fRange = fWorksheet.getRange('A1');
     * fRange.setValue(1234.567).setNumberFormat('#,##0.00');
     * console.log(fRange.getDisplayValue()); // 1,234.57
     * ```
     */
    setNumberFormat(pattern: string): FRange;
    /**
     * Sets a rectangular grid of number formats (must match dimensions of this range).
     * @param {string[][]} patterns - A two-dimensional array of number formats.
     * @returns {FRange} The FRange instance for chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     *
     * // Set the number formats of the A1:B2 range.
     * const fRange = fWorksheet.getRange('A1:B2');
     * fRange.setValues([
     *   [1234.567, 0.1234],
     *   [45658, 0.9876]
     * ]).setNumberFormats([
     *   ['#,##0.00', '0.00%'],
     *   ['yyyy-MM-DD', '']
     * ]);
     * console.log(fRange.getDisplayValues()); // [['1,234.57', '12.34%'], ['2025-01-01', 0.9876]]
     * ```
     */
    setNumberFormats(patterns: string[][]): FRange;
    /**
     * Get the number formatting of the top-left cell of the given range. Empty cells return an empty string.
     * @returns {string} The number format of the top-left cell of the range.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     *
     * // Get the number format of the top-left cell of the A1:B2 range.
     * const fRange = fWorksheet.getRange('A1:B2');
     * console.log(fRange.getNumberFormat());
     * ```
     */
    getNumberFormat(): string;
    /**
     * Returns the number formats for the cells in the range.
     * @returns {string[][]} A two-dimensional array of number formats.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     *
     * // Get the number formats of the A1:B2 range.
     * const fRange = fWorksheet.getRange('A1:B2');
     * console.log(fRange.getNumberFormats());
     * ```
     */
    getNumberFormats(): string[][];
}
export declare class FRangeLegacy extends FRange implements IFRangeSheetsNumfmtMixin {
    setNumberFormat(pattern: string): FRange;
    setNumberFormats(patterns: string[][]): FRange;
    getNumberFormat(): string;
    getNumberFormats(): string[][];
}
declare module '@univerjs/sheets/facade' {
    interface FRange extends IFRangeSheetsNumfmtMixin {
    }
}
