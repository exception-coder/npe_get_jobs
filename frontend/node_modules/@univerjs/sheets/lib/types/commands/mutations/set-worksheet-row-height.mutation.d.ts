import { BooleanNumber, IMutation, IObjectArrayPrimitiveType, IRange, IRowAutoHeightInfo, Nullable, Worksheet } from '@univerjs/core';
export interface ISetWorksheetRowHeightMutationParams {
    unitId: string;
    subUnitId: string;
    ranges: IRange[];
    rowHeight: number | IObjectArrayPrimitiveType<Nullable<number>>;
}
export interface ISetWorksheetRowIsAutoHeightMutationParams {
    unitId: string;
    subUnitId: string;
    ranges: IRange[];
    autoHeightInfo: BooleanNumber | IObjectArrayPrimitiveType<Nullable<BooleanNumber>>;
}
export interface ISetWorksheetRowAutoHeightMutationParams {
    unitId: string;
    subUnitId: string;
    rowsAutoHeightInfo: IRowAutoHeightInfo[];
}
export declare const SetWorksheetRowHeightMutationFactory: (params: ISetWorksheetRowHeightMutationParams, worksheet: Worksheet) => ISetWorksheetRowHeightMutationParams;
export declare const SetWorksheetRowIsAutoHeightMutationFactory: (params: ISetWorksheetRowIsAutoHeightMutationParams, worksheet: Worksheet) => ISetWorksheetRowIsAutoHeightMutationParams;
export declare const SetWorksheetRowAutoHeightMutationFactory: (params: ISetWorksheetRowAutoHeightMutationParams, worksheet: Worksheet) => ISetWorksheetRowAutoHeightMutationParams;
export declare const SetWorksheetRowHeightMutation: IMutation<ISetWorksheetRowHeightMutationParams>;
export declare const SetWorksheetRowIsAutoHeightMutation: IMutation<ISetWorksheetRowIsAutoHeightMutationParams>;
export declare const SetWorksheetRowAutoHeightMutation: IMutation<ISetWorksheetRowAutoHeightMutationParams>;
