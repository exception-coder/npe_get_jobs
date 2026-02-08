import { ICommand } from '@univerjs/core';
export interface ISetWorksheetNameCommandParams {
    name: string;
    subUnitId?: string;
    unitId?: string;
}
/**
 * The command to set the sheet name.
 */
export declare const SetWorksheetNameCommand: ICommand;
