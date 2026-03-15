import { ICommand } from '@univerjs/core';
export interface ISetWorksheetOrderCommandParams {
    order: number;
    unitId?: string;
    subUnitId?: string;
}
export declare const SetWorksheetOrderCommand: ICommand;
