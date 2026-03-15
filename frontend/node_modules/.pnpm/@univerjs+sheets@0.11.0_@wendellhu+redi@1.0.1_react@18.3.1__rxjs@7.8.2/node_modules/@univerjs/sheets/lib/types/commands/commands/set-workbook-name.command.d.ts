import { ICommand } from '@univerjs/core';
export interface ISetWorkbookNameCommandParams {
    name: string;
    unitId: string;
}
/**
 * The command to set the workbook name. It does not support undo redo.
 */
export declare const SetWorkbookNameCommand: ICommand;
