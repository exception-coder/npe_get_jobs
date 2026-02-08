import { IRange } from '@univerjs/core';
export interface ISortOption {
    range: IRange;
    orderRules: IOrderRule[];
    hasTitle?: boolean;
}
export declare enum SortType {
    DESC = "desc",// Z-A
    ASC = "asc"
}
export interface IOrderRule {
    type: SortType;
    colIndex: number;
}
