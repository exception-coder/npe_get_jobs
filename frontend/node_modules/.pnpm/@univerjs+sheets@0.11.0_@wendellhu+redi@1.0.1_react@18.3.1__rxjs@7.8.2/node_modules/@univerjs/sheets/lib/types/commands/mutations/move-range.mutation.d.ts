import { ICellData, IMutation, IObjectMatrixPrimitiveType, IRange, Nullable } from '@univerjs/core';
export interface IMoveRangeMutationParams {
    unitId: string;
    fromRange: IRange;
    toRange: IRange;
    from: {
        subUnitId: string;
        value: IObjectMatrixPrimitiveType<Nullable<ICellData>>;
    };
    to: {
        subUnitId: string;
        value: IObjectMatrixPrimitiveType<Nullable<ICellData>>;
    };
}
export declare const MoveRangeMutation: IMutation<IMoveRangeMutationParams, boolean>;
