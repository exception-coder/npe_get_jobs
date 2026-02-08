import { Dimension, ICellData, IColumnData, IObjectArrayPrimitiveType, IObjectMatrixPrimitiveType, IRange, IRowData, IStyleData, IWorksheetData, Nullable } from '@univerjs/core';
/** Params of `RemoveSheetMutation` */
export interface IRemoveSheetMutationParams {
    subUnitId: string;
    unitId: string;
    subUnitName: string;
}
/** Params of `InsertSheetMutation` */
export interface IInsertSheetMutationParams {
    index: number;
    sheet: IWorksheetData;
    unitId: string;
    styles?: Record<string, Nullable<IStyleData>>;
}
/** Params of InsertRowMutation */
export interface IInsertRowMutationParams {
    unitId: string;
    subUnitId: string;
    range: IRange;
    rowInfo?: IObjectArrayPrimitiveType<IRowData>;
}
/** Params of InsertColMutation */
export interface IInsertColMutationParams {
    unitId: string;
    subUnitId: string;
    range: IRange;
    colInfo?: IObjectArrayPrimitiveType<IColumnData>;
}
/** Params of InsertRowMutation */
export interface IRemoveRowsMutationParams {
    unitId: string;
    subUnitId: string;
    range: IRange;
}
/** Params of InsertColMutation */
export interface IRemoveColMutationParams {
    unitId: string;
    subUnitId: string;
    range: IRange;
}
/** Params of DeleteRange */
export interface IDeleteRangeMutationParams {
    unitId: string;
    subUnitId: string;
    range: IRange;
    shiftDimension: Dimension;
}
/** Params of InsertRange */
export interface IInsertRangeMutationParams {
    unitId: string;
    subUnitId: string;
    range: IRange;
    shiftDimension: Dimension;
    cellValue?: IObjectMatrixPrimitiveType<Nullable<ICellData>>;
}
/** Params of RemoveWorksheetMergeMutation */
export interface IRemoveWorksheetMergeMutationParams {
    unitId: string;
    subUnitId: string;
    ranges: IRange[];
}
/** Params of AddWorksheetMergeMutation */
export interface IAddWorksheetMergeMutationParams {
    unitId: string;
    subUnitId: string;
    ranges: IRange[];
}
/** Params of AddWorksheetMergeMutation */
export interface IWorksheetRangeThemeStyleMutationParams {
    unitId: string;
    subUnitId: string;
    range: IRange;
    themeName: string;
}
