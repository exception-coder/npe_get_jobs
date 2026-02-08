import { ICommand, Nullable } from '@univerjs/core';
export interface IInsertImageCommandParams {
    files: Nullable<File[]>;
}
export declare const InsertFloatImageCommand: ICommand<IInsertImageCommandParams>;
export declare const InsertCellImageCommand: ICommand;
