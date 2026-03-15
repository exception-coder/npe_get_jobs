import { IAccessor, IMutation, IRange } from '@univerjs/core';
export interface ISetColHiddenMutationParams {
    unitId: string;
    subUnitId: string;
    ranges: IRange[];
}
export declare const SetColHiddenUndoMutationFactory: (accessor: IAccessor, params: ISetColHiddenMutationParams) => {
    unitId: string;
    subUnitId: string;
    ranges: IRange[];
};
export declare const SetColHiddenMutation: IMutation<ISetColHiddenMutationParams>;
export interface ISetColVisibleMutationParams {
    unitId: string;
    subUnitId: string;
    ranges: IRange[];
}
export declare const SetColVisibleUndoMutationFactory: (accessor: IAccessor, params: ISetColVisibleMutationParams) => {
    unitId: string;
    subUnitId: string;
    ranges: IRange[];
};
export declare const SetColVisibleMutation: IMutation<ISetColVisibleMutationParams>;
