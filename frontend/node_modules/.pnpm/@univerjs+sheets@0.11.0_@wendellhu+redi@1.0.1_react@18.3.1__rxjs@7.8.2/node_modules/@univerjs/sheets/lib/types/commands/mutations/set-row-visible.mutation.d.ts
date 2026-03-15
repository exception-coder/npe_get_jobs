import { IAccessor, IMutation, IRange } from '@univerjs/core';
export interface ISetRowVisibleMutationParams {
    unitId: string;
    subUnitId: string;
    ranges: IRange[];
}
export declare const SetRowVisibleUndoMutationFactory: (accessor: IAccessor, params: ISetRowVisibleMutationParams) => {
    unitId: string;
    subUnitId: string;
    ranges: IRange[];
};
export declare const SetRowVisibleMutation: IMutation<ISetRowVisibleMutationParams>;
export interface ISetRowHiddenMutationParams {
    unitId: string;
    subUnitId: string;
    ranges: IRange[];
}
export declare const SetRowHiddenUndoMutationFactory: (accessor: IAccessor, params: ISetRowHiddenMutationParams) => {
    unitId: string;
    subUnitId: string;
    ranges: IRange[];
};
export declare const SetRowHiddenMutation: IMutation<ISetRowHiddenMutationParams>;
