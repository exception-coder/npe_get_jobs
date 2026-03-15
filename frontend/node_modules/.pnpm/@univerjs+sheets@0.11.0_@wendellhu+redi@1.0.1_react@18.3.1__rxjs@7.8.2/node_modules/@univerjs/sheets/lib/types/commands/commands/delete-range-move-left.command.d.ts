import { ICommand, IRange } from '@univerjs/core';
export interface IDeleteRangeMoveLeftCommandParams {
    range: IRange;
}
export declare const DeleteRangeMoveLeftCommandId = "sheet.command.delete-range-move-left";
/**
 * The command to delete range.
 */
export declare const DeleteRangeMoveLeftCommand: ICommand;
