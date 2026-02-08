import { ICommand, IRange } from '@univerjs/core';
export interface IMoveRowsCommandParams {
    unitId?: string;
    subUnitId?: string;
    range?: IRange;
    fromRange: IRange;
    toRange: IRange;
}
export declare const MoveRowsCommandId: "sheet.command.move-rows";
/**
 * Command to move the selected rows (must currently selected) to the specified row.
 */
export declare const MoveRowsCommand: ICommand<IMoveRowsCommandParams>;
export interface IMoveColsCommandParams {
    unitId?: string;
    subUnitId?: string;
    range?: IRange;
    fromRange: IRange;
    toRange: IRange;
}
export declare const MoveColsCommandId: "sheet.command.move-cols";
export declare const MoveColsCommand: ICommand<IMoveColsCommandParams>;
