import { ICommand } from '@univerjs/core';
export interface ISetFrozenCommandParams {
    startRow: number;
    startColumn: number;
    ySplit: number;
    xSplit: number;
    unitId?: string;
    subUnitId?: string;
}
export declare const SetFrozenCommand: ICommand;
export interface ICancelFrozenCommandParams {
    unitId?: string;
    subUnitId?: string;
}
export declare const CancelFrozenCommand: ICommand<ICancelFrozenCommandParams>;
