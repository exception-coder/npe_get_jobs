import { ICommand, IRange } from '@univerjs/core';
export interface InsertRangeMoveDownCommandParams {
    range: IRange;
}
export declare const InsertRangeMoveDownCommandId = "sheet.command.insert-range-move-down";
/**
 * The command to insert range.
 */
export declare const InsertRangeMoveDownCommand: ICommand;
