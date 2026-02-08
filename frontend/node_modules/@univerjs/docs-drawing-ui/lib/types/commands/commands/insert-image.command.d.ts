import { ICommand, Nullable } from '@univerjs/core';
export interface IInsertDocImageCommandParams {
    files: Nullable<File[]>;
}
export declare const InsertDocImageCommand: ICommand<IInsertDocImageCommandParams>;
