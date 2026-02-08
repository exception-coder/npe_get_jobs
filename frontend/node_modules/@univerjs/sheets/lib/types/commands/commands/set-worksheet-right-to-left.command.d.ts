import { ICommand, BooleanNumber } from '@univerjs/core';
export interface ISetWorksheetRightToLeftCommandParams {
    rightToLeft?: BooleanNumber;
    unitId?: string;
    subUnitId?: string;
}
export declare const SetWorksheetRightToLeftCommand: ICommand;
