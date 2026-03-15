import { ICommand, IRange } from '@univerjs/core';
export interface IDeleteRangeMoveUpCommandParams {
    range: IRange;
}
export declare const DeleteRangeMoveUpCommandId = "sheet.command.delete-range-move-up";
/**
 * The command to delete range.
 */
export declare const DeleteRangeMoveUpCommand: ICommand;
