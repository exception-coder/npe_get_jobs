import { ICommand } from '@univerjs/core';
import { FormatType } from '@univerjs/sheets';
export interface ISetNumfmtCommandParams {
    unitId?: string;
    subUnitId?: string;
    values: Array<{
        pattern?: string;
        row: number;
        col: number;
        type?: FormatType;
    }>;
}
export declare const SetNumfmtCommand: ICommand<ISetNumfmtCommandParams>;
