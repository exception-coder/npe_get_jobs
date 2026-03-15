import { IAccessor, IOperation } from '@univerjs/core';
export interface ISetDocZoomRatioOperationParams {
    zoomRatio: number;
    unitId: string;
}
export declare const SetDocZoomRatioUndoMutationFactory: (accessor: IAccessor, params: ISetDocZoomRatioOperationParams) => ISetDocZoomRatioOperationParams;
export declare const SetDocZoomRatioOperation: IOperation<ISetDocZoomRatioOperationParams>;
