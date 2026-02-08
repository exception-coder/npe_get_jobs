import { FRange } from '@univerjs/sheets/facade';
export interface IFRangeSheetDrawingMixin {
    /**
     * Inserts an image into the current cell.
     *
     * @param {string | File} file File or URL string
     * @returns True if the image is inserted successfully, otherwise false
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     *
     * // Insert an image into the cell A10
     * const fRange = fWorksheet.getRange('A10');
     * const result = await fRange.insertCellImageAsync('https://avatars.githubusercontent.com/u/61444807?s=48&v=4');
     * console.log(result);
     * ```
     */
    insertCellImageAsync(file: File | string): Promise<boolean>;
}
export declare class FRangeSheetDrawingUI extends FRange implements IFRangeSheetDrawingMixin {
    insertCellImageAsync(file: File | string): Promise<boolean>;
}
declare module '@univerjs/sheets/facade' {
    interface FRange extends IFRangeSheetDrawingMixin {
    }
}
