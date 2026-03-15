import { ICommand, IRange, Worksheet } from '@univerjs/core';
export interface ISetSpecificColsVisibleCommandParams {
    unitId: string;
    subUnitId: string;
    ranges: IRange[];
}
export declare const SetSpecificColsVisibleCommand: ICommand<ISetSpecificColsVisibleCommandParams>;
export declare const SetSelectedColsVisibleCommand: ICommand;
export interface ISetColHiddenCommandParams {
    unitId?: string;
    subUnitId?: string;
    ranges?: IRange[];
}
export declare const SetColHiddenCommand: ICommand;
export declare function divideRangesByHiddenCols(worksheet: Worksheet, ranges: IRange[]): IRange[];
