import { ICommand, IWorksheetData } from '@univerjs/core';
export interface IInsertSheetCommandParams {
    unitId?: string;
    index?: number;
    sheet?: IWorksheetData;
}
/**
 * The command to insert new worksheet
 */
export declare const InsertSheetCommand: ICommand;
