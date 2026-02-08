import { Nullable } from '@univerjs/core';
import { ISheetNote } from '@univerjs/sheets-note';
import { FRange } from '@univerjs/sheets/facade';
/**
 * @ignore
 */
export interface IFSheetsNoteRange {
    /**
     * Get the annotation of the top-left cell in the range
     * @returns {Nullable<ISheetNote>} The annotation of the top-left cell in the range
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const fRange = fWorksheet.getRange('A1:D10');
     * const note = fRange.getNote();
     * console.log(note);
     * ```
     */
    getNote(): Nullable<ISheetNote>;
    /**
     * Create or update the annotation of the top-left cell in the range
     * @param {ISheetNote} note The annotation to create or update
     * @returns {FRange} This range for method chaining
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const fRange = fWorksheet.getRange('A1');
     * fRange.createOrUpdateNote({
     *   note: 'This is a note',
     *   width: 160,
     *   height: 100,
     *   show: true,
     * });
     * ```
     */
    createOrUpdateNote(note: ISheetNote): FRange;
    /**
     * Delete the annotation of the top-left cell in the range
     * @returns {FRange} This range for method chaining
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const notes = fWorksheet.getNotes();
     * console.log(notes);
     *
     * if (notes.length > 0) {
     *   // Delete the first note
     *   const { row, col } = notes[0];
     *   fWorksheet.getRange(row, col).deleteNote();
     * }
     * ```
     */
    deleteNote(): FRange;
}
export declare class FSheetsNoteRangeMixin extends FRange implements IFSheetsNoteRange {
    createOrUpdateNote(note: ISheetNote): FRange;
    deleteNote(): FRange;
    getNote(): Nullable<ISheetNote>;
}
declare module '@univerjs/sheets/facade' {
    interface FRange extends IFSheetsNoteRange {
    }
}
