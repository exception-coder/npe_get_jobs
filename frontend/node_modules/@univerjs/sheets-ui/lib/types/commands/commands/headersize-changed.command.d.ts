import { ICommand } from '@univerjs/core';
export interface ISetHeaderSizeParams {
    size: number;
    unitId: string;
    subUnitId: string;
}
export declare const SetRowHeaderWidthCommand: ICommand<ISetHeaderSizeParams>;
export declare const SetColumnHeaderHeightCommand: ICommand<ISetHeaderSizeParams>;
