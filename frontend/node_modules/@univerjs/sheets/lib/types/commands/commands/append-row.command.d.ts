import { ICellData, IObjectMatrixPrimitiveType } from '@univerjs/core';
export interface IAppendRowCommandParams {
    unitId: string;
    subUnitId: string;
    cellValue: IObjectMatrixPrimitiveType<ICellData>;
    insertRowNums?: number;
    insertColumnNums?: number;
    maxRows?: number;
    maxColumns?: number;
}
export declare const AppendRowCommandId = "sheet.command.append-row";
