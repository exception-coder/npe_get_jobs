import { IMutation } from '@univerjs/core';
export interface IDeleteSheetTableParams {
    unitId: string;
    subUnitId: string;
    tableId: string;
}
export declare const DeleteSheetTableMutation: IMutation<IDeleteSheetTableParams>;
