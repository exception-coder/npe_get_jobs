import { ICommand, IRange } from '@univerjs/core';
export interface IDeltaRowHeightCommand {
    anchorRow: number;
    deltaY: number;
}
export declare const DeltaRowHeightCommand: ICommand;
export interface ISetRowHeightCommandParams {
    unitId?: string;
    subUnitId?: string;
    ranges?: IRange[];
    value: number;
}
export declare const SetRowHeightCommand: ICommand;
export interface ISetWorksheetRowIsAutoHeightCommandParams {
    unitId?: string;
    subUnitId?: string;
    ranges?: IRange[];
}
export declare const SetWorksheetRowIsAutoHeightCommand: ICommand;
