import { IMutation, IObjectArrayPrimitiveType, IRowData, Nullable, Worksheet } from '@univerjs/core';
export interface ISetRowDataMutationParams {
    unitId: string;
    subUnitId: string;
    rowData: IObjectArrayPrimitiveType<Nullable<IRowData>>;
}
export declare const SetRowDataMutationFactory: (params: ISetRowDataMutationParams, worksheet: Worksheet) => ISetRowDataMutationParams;
export declare const SetRowDataMutation: IMutation<ISetRowDataMutationParams>;
