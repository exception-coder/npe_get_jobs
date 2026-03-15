import { ICommand, IRange, Worksheet } from '@univerjs/core';
export interface ISetSpecificRowsVisibleCommandParams {
    unitId: string;
    subUnitId: string;
    ranges: IRange[];
}
export declare const SetSpecificRowsVisibleCommand: ICommand<ISetSpecificRowsVisibleCommandParams>;
export declare const SetSelectedRowsVisibleCommand: ICommand;
export interface ISetRowHiddenCommandParams {
    unitId?: string;
    subUnitId?: string;
    ranges?: IRange[];
}
export declare const SetRowHiddenCommand: ICommand<ISetRowHiddenCommandParams>;
export declare function divideRangesByHiddenRows(worksheet: Worksheet, ranges: IRange[]): IRange[];
