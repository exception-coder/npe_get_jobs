import { Workbook, Worksheet } from '@univerjs/core';
export interface ISheetLocationBase {
    unitId: string;
    subUnitId: string;
    row: number;
    col: number;
}
export interface ISheetLocation extends ISheetLocationBase {
    workbook: Workbook;
    worksheet: Worksheet;
}
export interface ISheetRowLocation {
    workbook: Workbook;
    worksheet: Worksheet;
    unitId: string;
    subUnitId: string;
    row: number;
}
