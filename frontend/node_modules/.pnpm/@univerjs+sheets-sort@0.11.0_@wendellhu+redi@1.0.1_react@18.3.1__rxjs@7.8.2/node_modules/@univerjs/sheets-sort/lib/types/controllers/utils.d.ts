import { ICellData, Nullable } from '@univerjs/core';
import { ICommonComparableCellValue } from './sheets-sort.controller';
import { SortType } from '../services/interface';
export declare enum ORDER {
    POSITIVE = 1,
    NEGATIVE = -1,
    ZERO = 0
}
export declare const compareNull: (a1: ICommonComparableCellValue, a2: ICommonComparableCellValue) => ORDER | null;
export declare const compareNumber: (a1: ICommonComparableCellValue, a2: ICommonComparableCellValue, type: SortType) => ORDER | null;
export declare const compareString: (a1: ICommonComparableCellValue, a2: ICommonComparableCellValue, type: SortType) => ORDER | null;
export declare const isNullValue: (cell: Nullable<ICellData>) => boolean;
