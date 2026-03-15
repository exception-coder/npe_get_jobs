import { ICellData, IObjectMatrixPrimitiveType, Nullable } from '@univerjs/core';
export declare enum FormulaResultStatus {
    NOT_REGISTER = 1,
    SUCCESS = 2,
    WAIT = 3,
    ERROR = 4
}
export interface IOtherFormulaResult {
    result?: IObjectMatrixPrimitiveType<Nullable<ICellData>[][]>;
    status: FormulaResultStatus;
    formulaId: string;
    callbacks: Set<(value: IObjectMatrixPrimitiveType<Nullable<ICellData>[][]>) => void>;
    extra?: Record<string, any>;
}
export interface IFormulaInfo {
    id: string;
    text: string;
}
