import { ICommand, IRange } from '@univerjs/core';
export interface ISetScrollRelativeCommandParams {
    offsetX?: number;
    offsetY?: number;
}
export interface IScrollCommandParams {
    offsetX?: number;
    offsetY?: number;
    /**
     * The index of row in spreadsheet.
     * e.g. if row start 10 at current viewport after freeze, and scroll value is zero, startRow is 0.
     * e.g. if scrolled about 2 rows, now top is 12, then sheetViewStartRow is 2.
     */
    sheetViewStartRow?: number;
    /**
     * Not the index of col in spreadsheet, but index of first column in current viewport.
     * e.g. if col start C at current viewport after freeze, and scroll value is zero, startColumn is 0.
     * e.g. if scrolled about 2 columns, now left is E, then sheetViewStartColumn is 2.
     */
    sheetViewStartColumn?: number;
    /**
     * The duration of the scroll animation in milliseconds.
     */
    duration?: number;
}
/**
 * This command is used to manage the scroll by relative offset
 * Usually triggered by wheel event.
 * NOT same as ScrollCommand, which is usually triggered by scrollbar.
 */
export declare const SetScrollRelativeCommand: ICommand<ISetScrollRelativeCommandParams>;
/**
 * This command is used to manage the scroll position of the current view by specifying the cell index of the top left cell
 * Usually triggered by dragging scroll bar and click scroll track or moving selection range.
 * NOT same as SetScrollRelativeCommand which usually trigger by wheelevent.
 */
export declare const ScrollCommand: ICommand<IScrollCommandParams>;
export interface IScrollToCellCommandParams {
    range: IRange;
    forceTop?: boolean;
    forceLeft?: boolean;
}
/**
 * The command is used to scroll to the specific cell if the target cell is not in the viewport.
 */
export declare const ScrollToCellCommand: ICommand<IScrollToCellCommandParams>;
/**
 * This command is reset the scroll position of the current view to 0, 0
 */
export declare const ResetScrollCommand: ICommand;
