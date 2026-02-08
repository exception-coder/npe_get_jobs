import { IWorkbookData } from '@univerjs/core';
export declare function WithCustomFilterModelFactory(): IWorkbookData;
export declare function WithValuesFilterModelFactory(): IWorkbookData;
export declare function WithValuesAndEmptyFilterModelFactory(): IWorkbookData;
export declare function WithMultiEmptyCellsModelFactory(): IWorkbookData;
export declare function WithTwoFilterColumnsFactory(): IWorkbookData;
export declare function WithMergedCellFilterFactory(): IWorkbookData;
export declare const ITEMS: ({
    title: string;
    key: string;
    children: {
        title: string;
        key: string;
        children: {
            title: string;
            key: string;
            count: number;
            originValues: Set<string>;
            leaf: boolean;
            checked: boolean;
        }[];
        count: number;
        leaf: boolean;
        checked: boolean;
    }[];
    count: number;
    leaf: boolean;
    checked: boolean;
} | {
    title: string;
    leaf: boolean;
    checked: boolean;
    key: string;
    count: number;
    children?: undefined;
})[];
export declare const ITEMS_WITH_EMPTY: {
    title: string;
    leaf: boolean;
    checked: boolean;
    key: string;
    count: number;
}[];
export declare const E_ITEMS: ({
    title: string;
    key: string;
    children: {
        title: string;
        key: string;
        children: {
            title: string;
            key: string;
            count: number;
            originValues: Set<string>;
            leaf: boolean;
            checked: boolean;
        }[];
        count: number;
        leaf: boolean;
        checked: boolean;
    }[];
    count: number;
    leaf: boolean;
    checked: boolean;
} | {
    title: string;
    leaf: boolean;
    checked: boolean;
    key: string;
    count: number;
    children?: undefined;
})[];
