import { ICommand } from '@univerjs/core';
export interface IClearWorksheetCfParams {
    unitId?: string;
    subUnitId?: string;
}
export declare const ClearWorksheetCfCommand: ICommand<IClearWorksheetCfParams>;
