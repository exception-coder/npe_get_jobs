import { IOperation } from '@univerjs/core';
export interface ISetZoomRatioOperationParams {
    zoomRatio: number;
    unitId: string;
    subUnitId: string;
}
export declare const SetZoomRatioOperation: IOperation<ISetZoomRatioOperationParams>;
