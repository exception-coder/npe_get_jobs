import { ICommand, IRange } from '@univerjs/core';
export interface IClearRangeCfParams {
    ranges?: IRange[];
    unitId?: string;
    subUnitId?: string;
}
export declare const ClearRangeCfCommand: ICommand<IClearRangeCfParams>;
