import { ICommand, IRange } from '@univerjs/core';
export interface ISetWorksheetColIsAutoWidthCommandParams {
    unitId?: string;
    subUnitId?: string;
    ranges?: IRange[];
}
export declare const SetWorksheetColAutoWidthCommand: ICommand;
