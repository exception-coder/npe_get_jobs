import { ICommand, IRange } from '@univerjs/core';
export interface IAutoFillCommandParams {
    sourceRange: IRange;
    targetRange: IRange;
}
export declare const AutoFillCommand: ICommand;
export interface IAutoClearContentCommand {
    clearRange: IRange;
    selectionRange: IRange;
}
export declare const AutoClearContentCommand: ICommand;
