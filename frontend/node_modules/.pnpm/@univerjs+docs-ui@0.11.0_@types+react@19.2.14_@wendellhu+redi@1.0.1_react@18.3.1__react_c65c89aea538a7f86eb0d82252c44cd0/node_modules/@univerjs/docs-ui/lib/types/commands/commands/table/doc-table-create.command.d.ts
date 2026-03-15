import { ICommand } from '@univerjs/core';
export declare const CreateDocTableCommandId = "doc.command.create-table";
export interface ICreateDocTableCommandParams {
    rowCount: number;
    colCount: number;
}
/**
 * The command to create a table at cursor point.
 */
export declare const CreateDocTableCommand: ICommand<ICreateDocTableCommandParams>;
