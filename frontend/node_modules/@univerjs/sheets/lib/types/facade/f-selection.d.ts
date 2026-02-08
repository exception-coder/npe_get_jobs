import { Direction, ISelectionCell, Nullable, Workbook, Worksheet, Injector } from '@univerjs/core';
import { ISelectionWithStyle } from '@univerjs/sheets';
import { FRange } from './f-range';
import { FWorksheet } from './f-worksheet';
/**
 * Represents the active selection in the sheet.
 *
 * @example
 * ```ts
 * const fWorkbook = univerAPI.getActiveWorkbook()
 * const fWorksheet = fWorkbook.getActiveSheet()
 * const fSelection = fWorksheet.getSelection();
 * const activeRange = fSelection.getActiveRange();
 * console.log(activeRange);
 * ```
 * @hideconstructor
 */
export declare class FSelection {
    private readonly _workbook;
    private readonly _worksheet;
    private readonly _selections;
    private readonly _injector;
    constructor(_workbook: Workbook, _worksheet: Worksheet, _selections: Readonly<ISelectionWithStyle[]>, _injector: Injector);
    /**
     * Represents the active selection in the sheet. Which means the selection contains the active cell.
     * @returns {FRange | null} The active selection.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const fRange = fWorksheet.getRange('A10:B11');
     * fRange.activate();
     * const fSelection = fWorksheet.getSelection();
     * console.log(fSelection.getActiveRange().getA1Notation()); // A10:B11
     * ```
     */
    getActiveRange(): FRange | null;
    /**
     * Represents the active selection list in the sheet.
     * @returns {FRange[]} The active selection list.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const fSelection = fWorksheet.getSelection();
     * const activeRangeList = fSelection.getActiveRangeList();
     * activeRangeList.forEach((range) => {
     *   console.log(range.getA1Notation());
     * });
     * ```
     */
    getActiveRangeList(): FRange[];
    /**
     * Represents the current select cell in the sheet.
     * @returns {ISelectionCell} The current select cell info.Pay attention to the type of the return value.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const fRange = fWorksheet.getRange('A10:B11');
     * fRange.activate();
     * const fSelection = fWorksheet.getSelection();
     * const currentCell = fSelection.getCurrentCell();
     * const { actualRow, actualColumn } = currentCell;
     * console.log(currentCell);
     * console.log(`actualRow: ${actualRow}, actualColumn: ${actualColumn}`); // actualRow: 9, actualColumn: 0
     * ```
     */
    getCurrentCell(): Nullable<ISelectionCell>;
    /**
     * Returns the active sheet in the spreadsheet.
     * @returns {FWorksheet} The active sheet in the spreadsheet.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const fSelection = fWorksheet.getSelection();
     * const activeSheet = fSelection.getActiveSheet();
     * console.log(activeSheet.equalTo(fWorksheet)); // true
     * ```
     */
    getActiveSheet(): FWorksheet;
    /**
     * Update the primary cell in the selection. if the primary cell not exists in selections, add it to the selections and clear the old selections.
     * @param {FRange} cell The new primary cell to update.
     * @returns {FSelection} The new selection after updating the primary cell.Because the selection is immutable, the return value is a new selection.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const fRange = fWorksheet.getRange('A10:B11');
     * fRange.activate();
     * const cell = fWorksheet.getRange('B11');
     *
     * let fSelection = fWorksheet.getSelection();
     * fSelection = fSelection.updatePrimaryCell(cell);
     *
     * const currentCell = fSelection.getCurrentCell();
     * const { actualRow, actualColumn } = currentCell;
     * console.log(currentCell);
     * console.log(`actualRow: ${actualRow}, actualColumn: ${actualColumn}`); // actualRow: 10, actualColumn: 1
     * ```
     */
    updatePrimaryCell(cell: FRange): FSelection;
    /**
     * Get the next primary cell in the specified direction. If the primary cell not exists in selections, return null.
     * The next primary cell in the specified direction is the next cell only within the current selection range.
     * For example, if the current selection is A1:B2, and the primary cell is B1, the next cell in the right direction is A2 instead of C1.
     * @param {Direction} direction The direction to move the primary cell.The enum value is maybe one of the following: UP(0),RIGHT(1), DOWN(2), LEFT(3).
     * @returns {FRange | null} The next primary cell in the specified direction.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * // make sure the active cell is A1 and selection is A1:B2
     * const fRange = fWorksheet.getRange('A1:B2');
     * fRange.activate();
     *
     * // get the next cell in the right direction, and update the primary cell to the next cell, now the active cell is B1
     * let fSelection = fWorksheet.getSelection();
     * const nextCell = fSelection.getNextDataRange(univerAPI.Enum.Direction.RIGHT);
     * console.log(nextCell?.getA1Notation()); // B1
     * fSelection = fSelection.updatePrimaryCell(nextCell);
     *
     * // get the next cell in the right direction, the next cell is A2
     * const nextCell2 = fSelection.getNextDataRange(univerAPI.Enum.Direction.RIGHT);
     * console.log(nextCell2?.getA1Notation()); // A2
     * ```
     */
    getNextDataRange(direction: Direction): FRange | null;
}
