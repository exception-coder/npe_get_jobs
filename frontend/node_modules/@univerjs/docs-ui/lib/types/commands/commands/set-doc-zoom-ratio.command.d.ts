import { ICommand } from '@univerjs/core';
export interface ISetDocZoomRatioCommandParams {
    zoomRatio?: number;
    documentId?: string;
}
export declare const SetDocZoomRatioCommand: ICommand;
