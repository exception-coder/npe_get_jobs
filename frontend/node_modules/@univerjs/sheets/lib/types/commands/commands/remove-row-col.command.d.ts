import { ICommand, IRange } from '@univerjs/core';
export interface IRemoveRowColCommandParams {
    range: IRange;
}
export interface IRemoveRowColCommandInterceptParams extends IRemoveRowColCommandParams {
    ranges?: IRange[];
}
export interface IRemoveRowByRangeCommandParams {
    range: IRange;
    unitId: string;
    subUnitId: string;
}
export interface IRemoveColByRangeCommandParams {
    range: IRange;
    unitId: string;
    subUnitId: string;
}
export declare const RemoveRowCommandId = "sheet.command.remove-row";
export declare const RemoveRowByRangeCommand: ICommand<IRemoveRowByRangeCommandParams>;
/**
 * This command would remove the selected rows. These selected rows can be non-continuous.
 */
export declare const RemoveRowCommand: ICommand<IRemoveRowColCommandParams>;
export declare const RemoveColCommandId = "sheet.command.remove-col";
export declare const RemoveColByRangeCommand: ICommand<IRemoveColByRangeCommandParams>;
/**
 * This command would remove the selected columns. These selected rows can be non-continuous.
 */
export declare const RemoveColCommand: ICommand;
