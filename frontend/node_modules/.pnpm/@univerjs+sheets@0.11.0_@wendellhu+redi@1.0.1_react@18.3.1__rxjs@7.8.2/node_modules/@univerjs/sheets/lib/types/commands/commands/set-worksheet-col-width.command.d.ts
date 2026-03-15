import { ICommand, IRange } from '@univerjs/core';
export interface IDeltaColumnWidthCommandParams {
    anchorCol: number;
    deltaX: number;
}
export declare const DeltaColumnWidthCommand: ICommand<IDeltaColumnWidthCommandParams>;
export interface ISetColWidthCommandParams {
    unitId?: string;
    subUnitId?: string;
    ranges?: IRange[];
    value: number;
}
export declare const SetColWidthCommand: ICommand;
export interface ISetWorksheetColIsAutoWidthCommandParams {
    unitId?: string;
    subUnitId?: string;
    ranges?: IRange[];
}
export declare const SetWorksheetColIsAutoWidthCommand: ICommand;
