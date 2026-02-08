import { IMutation } from '@univerjs/core';
import { ITableOptions, ITableRange } from '../../types/type';
export interface IAddSheetTableParams {
    unitId: string;
    subUnitId: string;
    name: string;
    range: ITableRange;
    options?: ITableOptions;
    tableId?: string;
    header?: string[];
}
export declare const AddSheetTableMutation: IMutation<IAddSheetTableParams & {
    tableId: string;
}>;
