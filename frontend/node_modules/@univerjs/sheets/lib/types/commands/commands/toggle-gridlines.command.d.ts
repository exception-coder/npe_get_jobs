import { ICommand, BooleanNumber } from '@univerjs/core';
export interface IToggleGridlinesCommandParams {
    showGridlines?: BooleanNumber;
    unitId?: string;
    subUnitId?: string;
}
export declare const ToggleGridlinesCommand: ICommand;
