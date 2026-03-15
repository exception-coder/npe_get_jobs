// Types
import type { DeepReadonly, InjectionKey, PropType, Ref } from 'vue';
import type { SortItem } from './sort.js';
import type { DataTableCompareFunction, DataTableHeader, InternalDataTableHeader } from '../types.js';
import type { FilterKeyFunctions } from '../../../composables/filter.js';
export declare const makeDataTableHeaderProps: <Defaults extends {
    headers?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    headers: unknown extends Defaults["headers"] ? PropType<readonly {
        readonly key?: "data-table-expand" | "data-table-group" | "data-table-select" | (string & {}) | undefined;
        readonly value?: import("../../../util/index.js").SelectItemKey<Record<string, any>>;
        readonly title?: string | undefined;
        readonly fixed?: "end" | "start" | boolean | undefined;
        readonly align?: "center" | "end" | "start" | undefined;
        readonly width?: string | number | undefined;
        readonly minWidth?: string | number | undefined;
        readonly maxWidth?: string | number | undefined;
        readonly nowrap?: boolean | undefined;
        readonly indent?: number | undefined;
        readonly headerProps?: {
            readonly [x: string]: any;
        } | undefined;
        readonly cellProps?: import("../../../types.js").DataTableHeaderCellPropsFunction | {
            readonly [x: string]: any;
        } | undefined;
        readonly sortable?: boolean | undefined;
        readonly sort?: DataTableCompareFunction<any> | undefined;
        readonly sortRaw?: DataTableCompareFunction<any> | undefined;
        readonly filter?: import("../../../types.js").FilterFunction | undefined;
        readonly children?: readonly {
            readonly key?: "data-table-expand" | "data-table-group" | "data-table-select" | (string & {}) | undefined;
            readonly value?: import("../../../util/index.js").SelectItemKey<Record<string, any>>;
            readonly title?: string | undefined;
            readonly fixed?: "end" | "start" | boolean | undefined;
            readonly align?: "center" | "end" | "start" | undefined;
            readonly width?: string | number | undefined;
            readonly minWidth?: string | number | undefined;
            readonly maxWidth?: string | number | undefined;
            readonly nowrap?: boolean | undefined;
            readonly indent?: number | undefined;
            readonly headerProps?: {
                readonly [x: string]: any;
            } | undefined;
            readonly cellProps?: import("../../../types.js").DataTableHeaderCellPropsFunction | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: DataTableCompareFunction<any> | undefined;
            readonly sortRaw?: DataTableCompareFunction<any> | undefined;
            readonly filter?: import("../../../types.js").FilterFunction | undefined;
            readonly children?: readonly /*elided*/ any[] | undefined;
        }[] | undefined;
    }[]> : {
        type: PropType<unknown extends Defaults["headers"] ? readonly {
            readonly key?: "data-table-expand" | "data-table-group" | "data-table-select" | (string & {}) | undefined;
            readonly value?: import("../../../util/index.js").SelectItemKey<Record<string, any>>;
            readonly title?: string | undefined;
            readonly fixed?: "end" | "start" | boolean | undefined;
            readonly align?: "center" | "end" | "start" | undefined;
            readonly width?: string | number | undefined;
            readonly minWidth?: string | number | undefined;
            readonly maxWidth?: string | number | undefined;
            readonly nowrap?: boolean | undefined;
            readonly indent?: number | undefined;
            readonly headerProps?: {
                readonly [x: string]: any;
            } | undefined;
            readonly cellProps?: import("../../../types.js").DataTableHeaderCellPropsFunction | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: DataTableCompareFunction<any> | undefined;
            readonly sortRaw?: DataTableCompareFunction<any> | undefined;
            readonly filter?: import("../../../types.js").FilterFunction | undefined;
            readonly children?: readonly {
                readonly key?: "data-table-expand" | "data-table-group" | "data-table-select" | (string & {}) | undefined;
                readonly value?: import("../../../util/index.js").SelectItemKey<Record<string, any>>;
                readonly title?: string | undefined;
                readonly fixed?: "end" | "start" | boolean | undefined;
                readonly align?: "center" | "end" | "start" | undefined;
                readonly width?: string | number | undefined;
                readonly minWidth?: string | number | undefined;
                readonly maxWidth?: string | number | undefined;
                readonly nowrap?: boolean | undefined;
                readonly indent?: number | undefined;
                readonly headerProps?: {
                    readonly [x: string]: any;
                } | undefined;
                readonly cellProps?: import("../../../types.js").DataTableHeaderCellPropsFunction | {
                    readonly [x: string]: any;
                } | undefined;
                readonly sortable?: boolean | undefined;
                readonly sort?: DataTableCompareFunction<any> | undefined;
                readonly sortRaw?: DataTableCompareFunction<any> | undefined;
                readonly filter?: import("../../../types.js").FilterFunction | undefined;
                readonly children?: readonly any[] | undefined;
            }[] | undefined;
        }[] : readonly {
            readonly key?: "data-table-expand" | "data-table-group" | "data-table-select" | (string & {}) | undefined;
            readonly value?: import("../../../util/index.js").SelectItemKey<Record<string, any>>;
            readonly title?: string | undefined;
            readonly fixed?: "end" | "start" | boolean | undefined;
            readonly align?: "center" | "end" | "start" | undefined;
            readonly width?: string | number | undefined;
            readonly minWidth?: string | number | undefined;
            readonly maxWidth?: string | number | undefined;
            readonly nowrap?: boolean | undefined;
            readonly indent?: number | undefined;
            readonly headerProps?: {
                readonly [x: string]: any;
            } | undefined;
            readonly cellProps?: import("../../../types.js").DataTableHeaderCellPropsFunction | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: DataTableCompareFunction<any> | undefined;
            readonly sortRaw?: DataTableCompareFunction<any> | undefined;
            readonly filter?: import("../../../types.js").FilterFunction | undefined;
            readonly children?: readonly {
                readonly key?: "data-table-expand" | "data-table-group" | "data-table-select" | (string & {}) | undefined;
                readonly value?: import("../../../util/index.js").SelectItemKey<Record<string, any>>;
                readonly title?: string | undefined;
                readonly fixed?: "end" | "start" | boolean | undefined;
                readonly align?: "center" | "end" | "start" | undefined;
                readonly width?: string | number | undefined;
                readonly minWidth?: string | number | undefined;
                readonly maxWidth?: string | number | undefined;
                readonly nowrap?: boolean | undefined;
                readonly indent?: number | undefined;
                readonly headerProps?: {
                    readonly [x: string]: any;
                } | undefined;
                readonly cellProps?: import("../../../types.js").DataTableHeaderCellPropsFunction | {
                    readonly [x: string]: any;
                } | undefined;
                readonly sortable?: boolean | undefined;
                readonly sort?: DataTableCompareFunction<any> | undefined;
                readonly sortRaw?: DataTableCompareFunction<any> | undefined;
                readonly filter?: import("../../../types.js").FilterFunction | undefined;
                readonly children?: readonly any[] | undefined;
            }[] | undefined;
        }[] | Defaults["headers"]>;
        default: unknown extends Defaults["headers"] ? readonly {
            readonly key?: "data-table-expand" | "data-table-group" | "data-table-select" | (string & {}) | undefined;
            readonly value?: import("../../../util/index.js").SelectItemKey<Record<string, any>>;
            readonly title?: string | undefined;
            readonly fixed?: "end" | "start" | boolean | undefined;
            readonly align?: "center" | "end" | "start" | undefined;
            readonly width?: string | number | undefined;
            readonly minWidth?: string | number | undefined;
            readonly maxWidth?: string | number | undefined;
            readonly nowrap?: boolean | undefined;
            readonly indent?: number | undefined;
            readonly headerProps?: {
                readonly [x: string]: any;
            } | undefined;
            readonly cellProps?: import("../../../types.js").DataTableHeaderCellPropsFunction | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: DataTableCompareFunction<any> | undefined;
            readonly sortRaw?: DataTableCompareFunction<any> | undefined;
            readonly filter?: import("../../../types.js").FilterFunction | undefined;
            readonly children?: readonly {
                readonly key?: "data-table-expand" | "data-table-group" | "data-table-select" | (string & {}) | undefined;
                readonly value?: import("../../../util/index.js").SelectItemKey<Record<string, any>>;
                readonly title?: string | undefined;
                readonly fixed?: "end" | "start" | boolean | undefined;
                readonly align?: "center" | "end" | "start" | undefined;
                readonly width?: string | number | undefined;
                readonly minWidth?: string | number | undefined;
                readonly maxWidth?: string | number | undefined;
                readonly nowrap?: boolean | undefined;
                readonly indent?: number | undefined;
                readonly headerProps?: {
                    readonly [x: string]: any;
                } | undefined;
                readonly cellProps?: import("../../../types.js").DataTableHeaderCellPropsFunction | {
                    readonly [x: string]: any;
                } | undefined;
                readonly sortable?: boolean | undefined;
                readonly sort?: DataTableCompareFunction<any> | undefined;
                readonly sortRaw?: DataTableCompareFunction<any> | undefined;
                readonly filter?: import("../../../types.js").FilterFunction | undefined;
                readonly children?: readonly any[] | undefined;
            }[] | undefined;
        }[] : readonly {
            readonly key?: "data-table-expand" | "data-table-group" | "data-table-select" | (string & {}) | undefined;
            readonly value?: import("../../../util/index.js").SelectItemKey<Record<string, any>>;
            readonly title?: string | undefined;
            readonly fixed?: "end" | "start" | boolean | undefined;
            readonly align?: "center" | "end" | "start" | undefined;
            readonly width?: string | number | undefined;
            readonly minWidth?: string | number | undefined;
            readonly maxWidth?: string | number | undefined;
            readonly nowrap?: boolean | undefined;
            readonly indent?: number | undefined;
            readonly headerProps?: {
                readonly [x: string]: any;
            } | undefined;
            readonly cellProps?: import("../../../types.js").DataTableHeaderCellPropsFunction | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: DataTableCompareFunction<any> | undefined;
            readonly sortRaw?: DataTableCompareFunction<any> | undefined;
            readonly filter?: import("../../../types.js").FilterFunction | undefined;
            readonly children?: readonly {
                readonly key?: "data-table-expand" | "data-table-group" | "data-table-select" | (string & {}) | undefined;
                readonly value?: import("../../../util/index.js").SelectItemKey<Record<string, any>>;
                readonly title?: string | undefined;
                readonly fixed?: "end" | "start" | boolean | undefined;
                readonly align?: "center" | "end" | "start" | undefined;
                readonly width?: string | number | undefined;
                readonly minWidth?: string | number | undefined;
                readonly maxWidth?: string | number | undefined;
                readonly nowrap?: boolean | undefined;
                readonly indent?: number | undefined;
                readonly headerProps?: {
                    readonly [x: string]: any;
                } | undefined;
                readonly cellProps?: import("../../../types.js").DataTableHeaderCellPropsFunction | {
                    readonly [x: string]: any;
                } | undefined;
                readonly sortable?: boolean | undefined;
                readonly sort?: DataTableCompareFunction<any> | undefined;
                readonly sortRaw?: DataTableCompareFunction<any> | undefined;
                readonly filter?: import("../../../types.js").FilterFunction | undefined;
                readonly children?: readonly any[] | undefined;
            }[] | undefined;
        }[] | Defaults["headers"];
    };
};
export declare const VDataTableHeadersSymbol: InjectionKey<{
    headers: Ref<InternalDataTableHeader[][]>;
    columns: Ref<InternalDataTableHeader[]>;
}>;
type HeaderProps = {
    headers: DeepReadonly<DataTableHeader[]> | undefined;
    items: any[];
};
export declare function createHeaders(props: HeaderProps, options?: {
    groupBy?: Ref<readonly SortItem[]>;
    showSelect?: Ref<boolean>;
    showExpand?: Ref<boolean>;
}): {
    headers: Ref<{
        title?: string | undefined;
        fixed?: "end" | "start" | boolean | undefined;
        align?: "center" | "end" | "start" | undefined;
        width?: string | number | undefined;
        minWidth?: string | number | undefined;
        maxWidth?: string | number | undefined;
        nowrap?: boolean | undefined;
        indent?: number | undefined;
        headerProps?: Record<string, any> | undefined;
        cellProps?: import("../types.js").HeaderCellProps | undefined;
        sortable: boolean;
        sort?: DataTableCompareFunction<any> | undefined;
        sortRaw?: DataTableCompareFunction<any> | undefined;
        filter?: import("../../../types.js").FilterFunction | undefined;
        key: string | null;
        value: import("../../../util/index.js").SelectItemKey;
        fixedOffset?: number | undefined;
        fixedEndOffset?: number | undefined;
        lastFixed?: boolean | undefined;
        firstFixedEnd?: boolean | undefined;
        colspan?: number | undefined;
        rowspan?: number | undefined;
        children?: /*elided*/ any[] | undefined;
    }[][], {
        title?: string | undefined;
        fixed?: "end" | "start" | boolean | undefined;
        align?: "center" | "end" | "start" | undefined;
        width?: string | number | undefined;
        minWidth?: string | number | undefined;
        maxWidth?: string | number | undefined;
        nowrap?: boolean | undefined;
        indent?: number | undefined;
        headerProps?: Record<string, any> | undefined;
        cellProps?: import("../types.js").HeaderCellProps | undefined;
        sortable: boolean;
        sort?: DataTableCompareFunction<any> | undefined;
        sortRaw?: DataTableCompareFunction<any> | undefined;
        filter?: import("../../../types.js").FilterFunction | undefined;
        key: string | null;
        value: import("../../../util/index.js").SelectItemKey;
        fixedOffset?: number | undefined;
        fixedEndOffset?: number | undefined;
        lastFixed?: boolean | undefined;
        firstFixedEnd?: boolean | undefined;
        colspan?: number | undefined;
        rowspan?: number | undefined;
        children?: any[] | undefined;
    }[][] | InternalDataTableHeader[][]>;
    columns: Ref<{
        title?: string | undefined;
        fixed?: "end" | "start" | boolean | undefined;
        align?: "center" | "end" | "start" | undefined;
        width?: string | number | undefined;
        minWidth?: string | number | undefined;
        maxWidth?: string | number | undefined;
        nowrap?: boolean | undefined;
        indent?: number | undefined;
        headerProps?: Record<string, any> | undefined;
        cellProps?: import("../types.js").HeaderCellProps | undefined;
        sortable: boolean;
        sort?: DataTableCompareFunction<any> | undefined;
        sortRaw?: DataTableCompareFunction<any> | undefined;
        filter?: import("../../../types.js").FilterFunction | undefined;
        key: string | null;
        value: import("../../../util/index.js").SelectItemKey;
        fixedOffset?: number | undefined;
        fixedEndOffset?: number | undefined;
        lastFixed?: boolean | undefined;
        firstFixedEnd?: boolean | undefined;
        colspan?: number | undefined;
        rowspan?: number | undefined;
        children?: any[] | undefined;
    }[], {
        title?: string | undefined;
        fixed?: "end" | "start" | boolean | undefined;
        align?: "center" | "end" | "start" | undefined;
        width?: string | number | undefined;
        minWidth?: string | number | undefined;
        maxWidth?: string | number | undefined;
        nowrap?: boolean | undefined;
        indent?: number | undefined;
        headerProps?: Record<string, any> | undefined;
        cellProps?: import("../types.js").HeaderCellProps | undefined;
        sortable: boolean;
        sort?: DataTableCompareFunction<any> | undefined;
        sortRaw?: DataTableCompareFunction<any> | undefined;
        filter?: import("../../../types.js").FilterFunction | undefined;
        key: string | null;
        value: import("../../../util/index.js").SelectItemKey;
        fixedOffset?: number | undefined;
        fixedEndOffset?: number | undefined;
        lastFixed?: boolean | undefined;
        firstFixedEnd?: boolean | undefined;
        colspan?: number | undefined;
        rowspan?: number | undefined;
        children?: any[] | undefined;
    }[] | InternalDataTableHeader[]>;
    sortFunctions: Ref<Record<string, DataTableCompareFunction>, Record<string, DataTableCompareFunction>>;
    sortRawFunctions: Ref<Record<string, DataTableCompareFunction>, Record<string, DataTableCompareFunction>>;
    filterFunctions: Ref<FilterKeyFunctions, FilterKeyFunctions>;
};
export declare function useHeaders(): {
    headers: Ref<InternalDataTableHeader[][], InternalDataTableHeader[][]>;
    columns: Ref<InternalDataTableHeader[], InternalDataTableHeader[]>;
};

