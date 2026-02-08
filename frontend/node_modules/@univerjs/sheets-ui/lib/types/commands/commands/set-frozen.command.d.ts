import { ICommand } from '@univerjs/core';
export declare enum SetSelectionFrozenType {
    RowColumn = 0,
    Row = 1,
    Column = 2
}
export interface ISetSelectionFrozenCommandParams {
    type?: SetSelectionFrozenType;
}
export declare const SetSelectionFrozenCommand: ICommand<ISetSelectionFrozenCommandParams>;
export declare const SetRowFrozenCommand: ICommand;
export declare const SetColumnFrozenCommand: ICommand;
