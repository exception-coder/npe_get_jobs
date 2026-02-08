import { FUniver } from '@univerjs/core/facade';
import { FTextFinder } from './f-text-finder';
/**
 * @ignore
 */
export interface IFUniverFindReplaceMixin {
    /**
     * Create a text-finder for the current univer.
     * @param {string} text - The text to find.
     * @returns {Promise<FTextFinder | null>} A promise that resolves to the text-finder instance.
     * @example
     * ```typescript
     * // Assume the current sheet is empty sheet.
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     *
     * // Set some values to the range A1:D10.
     * const fRange = fWorksheet.getRange('A1:D10');
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
     *   [10, 11, 12, 13]
     * ]);
     *
     * // Create a text-finder to find the text '5'.
     * const textFinder = await univerAPI.createTextFinderAsync('5');
     *
     * // Find all cells that contain the text '5'.
     * const matchCells = textFinder.findAll();
     * matchCells.forEach((cell) => {
     *   console.log(cell.getA1Notation()); // D2, C3, B4, A5
     * });
     * ```
     */
    createTextFinderAsync(text: string): Promise<FTextFinder | null>;
}
export declare class FUniverFindReplaceMixin extends FUniver implements IFUniverFindReplaceMixin {
    createTextFinderAsync(text: string): Promise<FTextFinder | null>;
}
declare module '@univerjs/core/facade' {
    interface FUniver extends IFUniverFindReplaceMixin {
    }
}
