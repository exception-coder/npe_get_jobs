import { ICommand } from '@univerjs/core';
export interface ISetZoomRatioCommandParams {
    zoomRatio: number;
    unitId: string;
    subUnitId: string;
}
export interface IChangeZoomRatioCommandParams {
    reset?: boolean;
    delta: number;
}
/**
 * Zoom
 */
export declare const ChangeZoomRatioCommand: ICommand<IChangeZoomRatioCommandParams>;
export declare const SetZoomRatioCommand: ICommand<ISetZoomRatioCommandParams>;
