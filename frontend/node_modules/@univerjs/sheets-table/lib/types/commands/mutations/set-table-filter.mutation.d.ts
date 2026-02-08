import { IMutation } from '@univerjs/core';
import { ITableFilterItem } from '../../types/type';
export interface ISetSheetTableParams {
    unitId: string;
    tableId: string;
    column: number;
    tableFilter: ITableFilterItem | undefined;
}
export declare const SetSheetTableFilterMutation: IMutation<ISetSheetTableParams & {
    tableId: string;
}>;
