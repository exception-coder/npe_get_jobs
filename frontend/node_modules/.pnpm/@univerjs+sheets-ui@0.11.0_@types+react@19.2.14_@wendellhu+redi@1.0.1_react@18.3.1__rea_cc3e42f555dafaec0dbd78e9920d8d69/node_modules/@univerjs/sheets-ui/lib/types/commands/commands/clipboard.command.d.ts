import { ICommand, IMultiCommand } from '@univerjs/core';
export declare const SheetCopyCommand: IMultiCommand;
export declare const SheetCutCommand: IMultiCommand;
export interface ISheetPasteParams {
    value: string;
}
export interface ISheetPasteByShortKeyParams {
    htmlContent?: string;
    textContent?: string;
    files?: File[];
}
export declare const SheetPasteCommand: IMultiCommand;
export declare const SheetPasteShortKeyCommand: ICommand;
export declare const SheetPasteValueCommand: ICommand;
export declare const SheetPasteFormatCommand: ICommand;
export declare const SheetPasteColWidthCommand: ICommand;
export declare const SheetPasteBesidesBorderCommand: ICommand;
export declare const SheetOptionalPasteCommand: ICommand;
