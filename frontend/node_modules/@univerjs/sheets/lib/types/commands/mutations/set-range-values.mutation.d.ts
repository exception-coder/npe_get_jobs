import { IAccessor, ICellData, ICopyToOptionsData, IMutation, IMutationCommonParams, IObjectMatrixPrimitiveType, IRange, Nullable } from '@univerjs/core';
/** Params of `SetRangeValuesMutation` */
export interface ISetRangeValuesMutationParams extends IMutationCommonParams {
    subUnitId: string;
    unitId: string;
    /**
     * null for clear all
     */
    cellValue?: IObjectMatrixPrimitiveType<Nullable<ICellData>>;
    /**
     * @deprecated not a good design
     */
    options?: ICopyToOptionsData;
}
export interface ISetRangeValuesRangeMutationParams extends ISetRangeValuesMutationParams {
    range: IRange[];
}
/**
 * Generate undo mutation of a `SetRangeValuesMutation`
 *
 * @param {IAccessor} accessor - injector accessor
 * @param {ISetRangeValuesMutationParams} params - do mutation params
 * @returns {ISetRangeValuesMutationParams} undo mutation params
 */
export declare const SetRangeValuesUndoMutationFactory: (accessor: IAccessor, params: ISetRangeValuesMutationParams) => ISetRangeValuesMutationParams;
export declare const SetRangeValuesMutation: IMutation<ISetRangeValuesMutationParams, boolean>;
