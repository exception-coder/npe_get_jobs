import { IOperation, IRange } from '@univerjs/core';
export interface IMarkDirtyRowAutoHeightMutationParams {
    unitId: string;
    subUnitId: string;
    ranges: IRange[];
    id: string;
}
export declare const MarkDirtyRowAutoHeightMutation: IOperation<IMarkDirtyRowAutoHeightMutationParams>;
export interface ICancelMarkDirtyRowAutoHeightMutationParams {
    unitId: string;
    subUnitId: string;
    id: string;
}
export declare const CancelMarkDirtyRowAutoHeightMutation: IOperation<ICancelMarkDirtyRowAutoHeightMutationParams>;
