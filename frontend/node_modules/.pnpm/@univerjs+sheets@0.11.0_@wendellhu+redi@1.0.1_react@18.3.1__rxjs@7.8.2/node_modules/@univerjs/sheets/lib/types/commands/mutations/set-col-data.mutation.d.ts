import { IColumnData, IMutation, IObjectArrayPrimitiveType, Nullable, Worksheet } from '@univerjs/core';
export interface ISetColDataMutationParams {
    unitId: string;
    subUnitId: string;
    columnData: IObjectArrayPrimitiveType<Nullable<IColumnData>>;
}
export declare const SetColDataMutationFactory: (params: ISetColDataMutationParams, worksheet: Worksheet) => ISetColDataMutationParams;
export declare const SetColDataMutation: IMutation<ISetColDataMutationParams>;
