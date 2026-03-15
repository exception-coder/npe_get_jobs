import { ICellData, ICommand, IRange, Nullable } from '@univerjs/core';
import { ISheetCommandSharedParams } from '@univerjs/sheets';
import { IOrderRule, SortType } from '../../services/interface';
export interface ISortRangeCommandParams extends ISheetCommandSharedParams {
    range: IRange;
    orderRules: IOrderRule[];
    hasTitle: boolean;
}
export interface IRowComparator {
    index: number;
    value: Array<Nullable<ICellData>>;
}
export declare enum ORDER {
    KEEP = 1,
    EXCHANGE = -1,
    EQUAL = 0
}
export type CellValue = number | string | null;
export type ICellValueCompareFn = (type: SortType, a: Nullable<ICellData>, b: Nullable<ICellData>) => Nullable<number>;
export declare const SortRangeCommand: ICommand;
