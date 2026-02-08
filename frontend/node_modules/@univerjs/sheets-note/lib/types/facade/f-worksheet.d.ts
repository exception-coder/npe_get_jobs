import { ISheetNote } from '@univerjs/sheets-note';
import { FWorksheet } from '@univerjs/sheets/facade';
export interface ISheetNoteInfo extends ISheetNote {
    row: number;
    col: number;
}
/**
 * @ignore
 */
export interface IFSheetsNoteWorksheet {
    /**
     * Get all annotations in the worksheet
     * @returns {ISheetNoteInfo[]} An array of all annotations in the worksheet
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const notes = fWorksheet.getNotes();
     * console.log(notes);
     *
     * notes.forEach((item) => {
     *   const { row, col, note } = item;
     *   console.log(`Cell ${fWorksheet.getRange(row, col).getA1Notation()} has a note: ${note}`);
     * });
     * ```
     */
    getNotes(): ISheetNoteInfo[];
}
export declare class FSheetsNoteWorksheet extends FWorksheet implements IFSheetsNoteWorksheet {
    getNotes(): ISheetNoteInfo[];
}
declare module '@univerjs/sheets/facade' {
    interface FWorksheet extends IFSheetsNoteWorksheet {
    }
}
