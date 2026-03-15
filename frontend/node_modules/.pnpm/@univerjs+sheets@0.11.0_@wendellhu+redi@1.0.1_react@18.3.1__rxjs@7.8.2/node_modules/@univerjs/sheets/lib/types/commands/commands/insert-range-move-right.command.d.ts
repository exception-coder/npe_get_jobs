import { ICommand, IRange } from '@univerjs/core';
export interface InsertRangeMoveRightCommandParams {
    range: IRange;
}
export declare const InsertRangeMoveRightCommandId = "sheet.command.insert-range-move-right";
/**
 * The command to insert range.
 */
export declare const InsertRangeMoveRightCommand: ICommand;
