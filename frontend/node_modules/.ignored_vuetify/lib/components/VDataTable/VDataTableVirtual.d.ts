import type { VDataTableSlotProps } from './VDataTable.js';
import type { VDataTableHeadersSlots } from './VDataTableHeaders.js';
import type { VDataTableRowsSlots } from './VDataTableRows.js';
import type { CellProps, RowProps } from './types.js';
import type { GenericProps, SelectItemKey, TemplateRef } from '../../util/index.js';
type VDataTableVirtualSlotProps<T> = Omit<VDataTableSlotProps<T>, 'setItemsPerPage' | 'page' | 'pageCount' | 'itemsPerPage'>;
export type VDataTableVirtualSlots<T> = VDataTableRowsSlots<T> & VDataTableHeadersSlots & {
    colgroup: VDataTableVirtualSlotProps<T>;
    top: VDataTableVirtualSlotProps<T>;
    headers: VDataTableHeadersSlots['headers'];
    tbody: VDataTableVirtualSlotProps<T>;
    thead: VDataTableVirtualSlotProps<T>;
    tfoot: VDataTableVirtualSlotProps<T>;
    bottom: VDataTableVirtualSlotProps<T>;
    'body.prepend': VDataTableVirtualSlotProps<T>;
    'body.append': VDataTableVirtualSlotProps<T>;
    item: {
        itemRef: TemplateRef;
    };
};
export declare const makeVDataTableVirtualProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
    mobile?: unknown;
    mobileBreakpoint?: unknown;
    customFilter?: unknown;
    customKeyFilter?: unknown;
    filterKeys?: unknown;
    filterMode?: unknown;
    noFilter?: unknown;
    expandOnClick?: unknown;
    showExpand?: unknown;
    expanded?: unknown;
    sortBy?: unknown;
    customKeySort?: unknown;
    mustSort?: unknown;
    groupBy?: unknown;
    items?: unknown;
    itemValue?: unknown;
    itemSelectable?: unknown;
    rowProps?: unknown;
    cellProps?: unknown;
    returnObject?: unknown;
    showSelect?: unknown;
    selectStrategy?: unknown;
    modelValue?: unknown;
    valueComparator?: unknown;
    density?: unknown;
    tag?: unknown;
    loading?: unknown;
    itemHeight?: unknown;
    itemKey?: unknown;
    height?: unknown;
    headers?: unknown;
    color?: unknown;
    disableSort?: unknown;
    multiSort?: unknown;
    sortAscIcon?: unknown;
    sortDescIcon?: unknown;
    headerProps?: unknown;
    sticky?: unknown;
    groupCollapseIcon?: unknown;
    groupExpandIcon?: unknown;
    collapseIcon?: unknown;
    expandIcon?: unknown;
    loadingText?: unknown;
    hideNoData?: unknown;
    noDataText?: unknown;
    fixedHeader?: unknown;
    fixedFooter?: unknown;
    hover?: unknown;
    striped?: unknown;
    hideDefaultBody?: unknown;
    hideDefaultHeader?: unknown;
    width?: unknown;
    search?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
    class: unknown extends Defaults["class"] ? import("vue").PropType<any> : {
        type: import("vue").PropType<unknown extends Defaults["class"] ? any : any>;
        default: unknown extends Defaults["class"] ? any : any;
    };
    style: unknown extends Defaults["style"] ? {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    } : Omit<{
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["style"] ? import("vue").StyleValue : Defaults["style"] | import("vue").StyleValue>;
        default: unknown extends Defaults["style"] ? import("vue").StyleValue : Defaults["style"] | NonNullable<import("vue").StyleValue>;
    };
    mobile: unknown extends Defaults["mobile"] ? {
        type: import("vue").PropType<boolean | null>;
        default: boolean;
    } : Omit<{
        type: import("vue").PropType<boolean | null>;
        default: boolean;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["mobile"] ? boolean | null : boolean | Defaults["mobile"] | null>;
        default: unknown extends Defaults["mobile"] ? boolean | null : Defaults["mobile"] | NonNullable<boolean | null>;
    };
    mobileBreakpoint: unknown extends Defaults["mobileBreakpoint"] ? import("vue").PropType<number | import("../../types.js").DisplayBreakpoint> : {
        type: import("vue").PropType<unknown extends Defaults["mobileBreakpoint"] ? number | import("../../types.js").DisplayBreakpoint : number | Defaults["mobileBreakpoint"] | import("../../types.js").DisplayBreakpoint>;
        default: unknown extends Defaults["mobileBreakpoint"] ? number | import("../../types.js").DisplayBreakpoint : Defaults["mobileBreakpoint"] | NonNullable<number | import("../../types.js").DisplayBreakpoint>;
    };
    customFilter: unknown extends Defaults["customFilter"] ? import("vue").PropType<import("../../types.js").FilterFunction> : {
        type: import("vue").PropType<unknown extends Defaults["customFilter"] ? import("../../types.js").FilterFunction : import("../../types.js").FilterFunction | Defaults["customFilter"]>;
        default: unknown extends Defaults["customFilter"] ? import("../../types.js").FilterFunction : import("../../types.js").FilterFunction | Defaults["customFilter"];
    };
    customKeyFilter: unknown extends Defaults["customKeyFilter"] ? import("vue").PropType<import("../../composables/filter.js").FilterKeyFunctions> : {
        type: import("vue").PropType<unknown extends Defaults["customKeyFilter"] ? import("../../composables/filter.js").FilterKeyFunctions : import("../../composables/filter.js").FilterKeyFunctions | Defaults["customKeyFilter"]>;
        default: unknown extends Defaults["customKeyFilter"] ? import("../../composables/filter.js").FilterKeyFunctions : import("../../composables/filter.js").FilterKeyFunctions | Defaults["customKeyFilter"];
    };
    filterKeys: unknown extends Defaults["filterKeys"] ? import("vue").PropType<import("../../composables/filter.js").FilterKeys> : {
        type: import("vue").PropType<unknown extends Defaults["filterKeys"] ? import("../../composables/filter.js").FilterKeys : Defaults["filterKeys"] | import("../../composables/filter.js").FilterKeys>;
        default: unknown extends Defaults["filterKeys"] ? import("../../composables/filter.js").FilterKeys : Defaults["filterKeys"] | NonNullable<import("../../composables/filter.js").FilterKeys>;
    };
    filterMode: unknown extends Defaults["filterMode"] ? {
        type: import("vue").PropType<import("../../composables/filter.js").FilterMode>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/filter.js").FilterMode>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["filterMode"] ? import("../../composables/filter.js").FilterMode : Defaults["filterMode"] | import("../../composables/filter.js").FilterMode>;
        default: unknown extends Defaults["filterMode"] ? import("../../composables/filter.js").FilterMode : Defaults["filterMode"] | NonNullable<import("../../composables/filter.js").FilterMode>;
    };
    noFilter: unknown extends Defaults["noFilter"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["noFilter"] ? boolean : boolean | Defaults["noFilter"]>;
        default: unknown extends Defaults["noFilter"] ? boolean : boolean | Defaults["noFilter"];
    };
    expandOnClick: unknown extends Defaults["expandOnClick"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["expandOnClick"] ? boolean : boolean | Defaults["expandOnClick"]>;
        default: unknown extends Defaults["expandOnClick"] ? boolean : boolean | Defaults["expandOnClick"];
    };
    showExpand: unknown extends Defaults["showExpand"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["showExpand"] ? boolean : boolean | Defaults["showExpand"]>;
        default: unknown extends Defaults["showExpand"] ? boolean : boolean | Defaults["showExpand"];
    };
    expanded: unknown extends Defaults["expanded"] ? {
        type: import("vue").PropType<readonly string[]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<readonly string[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["expanded"] ? readonly string[] : readonly string[] | Defaults["expanded"]>;
        default: unknown extends Defaults["expanded"] ? readonly string[] : readonly string[] | Defaults["expanded"];
    };
    sortBy: unknown extends Defaults["sortBy"] ? {
        type: import("vue").PropType<readonly import("../../types.js").DataTableSortItem[]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<readonly import("../../types.js").DataTableSortItem[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["sortBy"] ? readonly import("../../types.js").DataTableSortItem[] : readonly import("../../types.js").DataTableSortItem[] | Defaults["sortBy"]>;
        default: unknown extends Defaults["sortBy"] ? readonly import("../../types.js").DataTableSortItem[] : readonly import("../../types.js").DataTableSortItem[] | Defaults["sortBy"];
    };
    customKeySort: unknown extends Defaults["customKeySort"] ? import("vue").PropType<Record<string, import("../../types.js").DataTableCompareFunction>> : {
        type: import("vue").PropType<unknown extends Defaults["customKeySort"] ? Record<string, import("../../types.js").DataTableCompareFunction> : Record<string, import("../../types.js").DataTableCompareFunction> | Defaults["customKeySort"]>;
        default: unknown extends Defaults["customKeySort"] ? Record<string, import("../../types.js").DataTableCompareFunction> : Record<string, import("../../types.js").DataTableCompareFunction> | Defaults["customKeySort"];
    };
    mustSort: unknown extends Defaults["mustSort"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["mustSort"] ? boolean : boolean | Defaults["mustSort"]>;
        default: unknown extends Defaults["mustSort"] ? boolean : boolean | Defaults["mustSort"];
    };
    groupBy: unknown extends Defaults["groupBy"] ? {
        type: import("vue").PropType<readonly import("../../types.js").DataTableSortItem[]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<readonly import("../../types.js").DataTableSortItem[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["groupBy"] ? readonly import("../../types.js").DataTableSortItem[] : readonly import("../../types.js").DataTableSortItem[] | Defaults["groupBy"]>;
        default: unknown extends Defaults["groupBy"] ? readonly import("../../types.js").DataTableSortItem[] : readonly import("../../types.js").DataTableSortItem[] | Defaults["groupBy"];
    };
    items: unknown extends Defaults["items"] ? {
        type: import("vue").PropType<any[]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<any[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["items"] ? any[] : any[] | Defaults["items"]>;
        default: unknown extends Defaults["items"] ? any[] : any[] | Defaults["items"];
    };
    itemValue: unknown extends Defaults["itemValue"] ? {
        type: import("vue").PropType<SelectItemKey>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<SelectItemKey>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["itemValue"] ? SelectItemKey : Defaults["itemValue"] | SelectItemKey>;
        default: unknown extends Defaults["itemValue"] ? SelectItemKey : Defaults["itemValue"] | NonNullable<SelectItemKey>;
    };
    itemSelectable: unknown extends Defaults["itemSelectable"] ? {
        type: import("vue").PropType<SelectItemKey>;
        default: null;
    } : Omit<{
        type: import("vue").PropType<SelectItemKey>;
        default: null;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["itemSelectable"] ? SelectItemKey : Defaults["itemSelectable"] | SelectItemKey>;
        default: unknown extends Defaults["itemSelectable"] ? SelectItemKey : Defaults["itemSelectable"] | NonNullable<SelectItemKey>;
    };
    rowProps: unknown extends Defaults["rowProps"] ? import("vue").PropType<RowProps<any>> : {
        type: import("vue").PropType<unknown extends Defaults["rowProps"] ? RowProps<any> : Defaults["rowProps"] | RowProps<any>>;
        default: unknown extends Defaults["rowProps"] ? RowProps<any> : Defaults["rowProps"] | NonNullable<RowProps<any>>;
    };
    cellProps: unknown extends Defaults["cellProps"] ? import("vue").PropType<CellProps<any>> : {
        type: import("vue").PropType<unknown extends Defaults["cellProps"] ? CellProps<any> : Defaults["cellProps"] | CellProps<any>>;
        default: unknown extends Defaults["cellProps"] ? CellProps<any> : Defaults["cellProps"] | NonNullable<CellProps<any>>;
    };
    returnObject: unknown extends Defaults["returnObject"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["returnObject"] ? boolean : boolean | Defaults["returnObject"]>;
        default: unknown extends Defaults["returnObject"] ? boolean : boolean | Defaults["returnObject"];
    };
    showSelect: unknown extends Defaults["showSelect"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["showSelect"] ? boolean : boolean | Defaults["showSelect"]>;
        default: unknown extends Defaults["showSelect"] ? boolean : boolean | Defaults["showSelect"];
    };
    selectStrategy: unknown extends Defaults["selectStrategy"] ? {
        type: import("vue").PropType<"all" | "page" | "single">;
        default: string;
    } : Omit<{
        type: import("vue").PropType<"all" | "page" | "single">;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["selectStrategy"] ? "all" | "page" | "single" : "all" | "page" | "single" | Defaults["selectStrategy"]>;
        default: unknown extends Defaults["selectStrategy"] ? "all" | "page" | "single" : Defaults["selectStrategy"] | NonNullable<"all" | "page" | "single">;
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: import("vue").PropType<readonly any[]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<readonly any[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["modelValue"] ? readonly any[] : readonly any[] | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? readonly any[] : readonly any[] | Defaults["modelValue"];
    };
    valueComparator: unknown extends Defaults["valueComparator"] ? import("vue").PropType<typeof import("../../util/index.js").deepEqual> : {
        type: import("vue").PropType<unknown extends Defaults["valueComparator"] ? typeof import("../../util/index.js").deepEqual : typeof import("../../util/index.js").deepEqual | Defaults["valueComparator"]>;
        default: unknown extends Defaults["valueComparator"] ? typeof import("../../util/index.js").deepEqual : typeof import("../../util/index.js").deepEqual | Defaults["valueComparator"];
    };
    density: unknown extends Defaults["density"] ? {
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["density"] ? import("../../composables/density.js").Density : Defaults["density"] | import("../../composables/density.js").Density>;
        default: unknown extends Defaults["density"] ? import("../../composables/density.js").Density : Defaults["density"] | NonNullable<import("../../composables/density.js").Density>;
    };
    tag: unknown extends Defaults["tag"] ? {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : string | Defaults["tag"] | import("../../util/index.js").JSXComponent>;
        default: unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : Defaults["tag"] | NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    loading: unknown extends Defaults["loading"] ? (BooleanConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["loading"] ? string | boolean : string | boolean | Defaults["loading"]>;
        default: unknown extends Defaults["loading"] ? string | boolean : Defaults["loading"] | NonNullable<string | boolean>;
    };
    itemHeight: unknown extends Defaults["itemHeight"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["itemHeight"] ? string | number : string | number | Defaults["itemHeight"]>;
        default: unknown extends Defaults["itemHeight"] ? string | number : Defaults["itemHeight"] | NonNullable<string | number>;
    };
    itemKey: unknown extends Defaults["itemKey"] ? {
        type: import("vue").PropType<SelectItemKey>;
        default: null;
    } : Omit<{
        type: import("vue").PropType<SelectItemKey>;
        default: null;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["itemKey"] ? SelectItemKey : Defaults["itemKey"] | SelectItemKey>;
        default: unknown extends Defaults["itemKey"] ? SelectItemKey : Defaults["itemKey"] | NonNullable<SelectItemKey>;
    };
    height: unknown extends Defaults["height"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : Defaults["height"] | NonNullable<string | number>;
    };
    headers: unknown extends Defaults["headers"] ? import("vue").PropType<readonly {
        readonly key?: "data-table-expand" | "data-table-group" | "data-table-select" | (string & {}) | undefined;
        readonly value?: SelectItemKey<Record<string, any>>;
        readonly title?: string | undefined;
        readonly fixed?: "end" | "start" | boolean | undefined;
        readonly align?: "center" | "end" | "start" | undefined;
        readonly width?: string | number | undefined;
        readonly minWidth?: string | number | undefined;
        readonly maxWidth?: string | number | undefined;
        readonly nowrap?: boolean | undefined;
        readonly intent?: number | undefined;
        readonly headerProps?: {
            readonly [x: string]: any;
        } | undefined;
        readonly cellProps?: import("../../types.js").DataTableHeaderCellPropsFunction | {
            readonly [x: string]: any;
        } | undefined;
        readonly sortable?: boolean | undefined;
        readonly sort?: import("../../types.js").DataTableCompareFunction<any> | undefined;
        readonly sortRaw?: import("../../types.js").DataTableCompareFunction<any> | undefined;
        readonly filter?: import("../../types.js").FilterFunction | undefined;
        readonly children?: readonly {
            readonly key?: "data-table-expand" | "data-table-group" | "data-table-select" | (string & {}) | undefined;
            readonly value?: SelectItemKey<Record<string, any>>;
            readonly title?: string | undefined;
            readonly fixed?: "end" | "start" | boolean | undefined;
            readonly align?: "center" | "end" | "start" | undefined;
            readonly width?: string | number | undefined;
            readonly minWidth?: string | number | undefined;
            readonly maxWidth?: string | number | undefined;
            readonly nowrap?: boolean | undefined;
            readonly intent?: number | undefined;
            readonly headerProps?: {
                readonly [x: string]: any;
            } | undefined;
            readonly cellProps?: import("../../types.js").DataTableHeaderCellPropsFunction | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: import("../../types.js").DataTableCompareFunction<any> | undefined;
            readonly sortRaw?: import("../../types.js").DataTableCompareFunction<any> | undefined;
            readonly filter?: import("../../types.js").FilterFunction | undefined;
            readonly children?: readonly /*elided*/ any[] | undefined;
        }[] | undefined;
    }[]> : {
        type: import("vue").PropType<unknown extends Defaults["headers"] ? readonly {
            readonly key?: "data-table-expand" | "data-table-group" | "data-table-select" | (string & {}) | undefined;
            readonly value?: SelectItemKey<Record<string, any>>;
            readonly title?: string | undefined;
            readonly fixed?: "end" | "start" | boolean | undefined;
            readonly align?: "center" | "end" | "start" | undefined;
            readonly width?: string | number | undefined;
            readonly minWidth?: string | number | undefined;
            readonly maxWidth?: string | number | undefined;
            readonly nowrap?: boolean | undefined;
            readonly intent?: number | undefined;
            readonly headerProps?: {
                readonly [x: string]: any;
            } | undefined;
            readonly cellProps?: import("../../types.js").DataTableHeaderCellPropsFunction | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: import("../../types.js").DataTableCompareFunction<any> | undefined;
            readonly sortRaw?: import("../../types.js").DataTableCompareFunction<any> | undefined;
            readonly filter?: import("../../types.js").FilterFunction | undefined;
            readonly children?: readonly {
                readonly key?: "data-table-expand" | "data-table-group" | "data-table-select" | (string & {}) | undefined;
                readonly value?: SelectItemKey<Record<string, any>>;
                readonly title?: string | undefined;
                readonly fixed?: "end" | "start" | boolean | undefined;
                readonly align?: "center" | "end" | "start" | undefined;
                readonly width?: string | number | undefined;
                readonly minWidth?: string | number | undefined;
                readonly maxWidth?: string | number | undefined;
                readonly nowrap?: boolean | undefined;
                readonly intent?: number | undefined;
                readonly headerProps?: {
                    readonly [x: string]: any;
                } | undefined;
                readonly cellProps?: import("../../types.js").DataTableHeaderCellPropsFunction | {
                    readonly [x: string]: any;
                } | undefined;
                readonly sortable?: boolean | undefined;
                readonly sort?: import("../../types.js").DataTableCompareFunction<any> | undefined;
                readonly sortRaw?: import("../../types.js").DataTableCompareFunction<any> | undefined;
                readonly filter?: import("../../types.js").FilterFunction | undefined;
                readonly children?: readonly any[] | undefined;
            }[] | undefined;
        }[] : readonly {
            readonly key?: "data-table-expand" | "data-table-group" | "data-table-select" | (string & {}) | undefined;
            readonly value?: SelectItemKey<Record<string, any>>;
            readonly title?: string | undefined;
            readonly fixed?: "end" | "start" | boolean | undefined;
            readonly align?: "center" | "end" | "start" | undefined;
            readonly width?: string | number | undefined;
            readonly minWidth?: string | number | undefined;
            readonly maxWidth?: string | number | undefined;
            readonly nowrap?: boolean | undefined;
            readonly intent?: number | undefined;
            readonly headerProps?: {
                readonly [x: string]: any;
            } | undefined;
            readonly cellProps?: import("../../types.js").DataTableHeaderCellPropsFunction | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: import("../../types.js").DataTableCompareFunction<any> | undefined;
            readonly sortRaw?: import("../../types.js").DataTableCompareFunction<any> | undefined;
            readonly filter?: import("../../types.js").FilterFunction | undefined;
            readonly children?: readonly {
                readonly key?: "data-table-expand" | "data-table-group" | "data-table-select" | (string & {}) | undefined;
                readonly value?: SelectItemKey<Record<string, any>>;
                readonly title?: string | undefined;
                readonly fixed?: "end" | "start" | boolean | undefined;
                readonly align?: "center" | "end" | "start" | undefined;
                readonly width?: string | number | undefined;
                readonly minWidth?: string | number | undefined;
                readonly maxWidth?: string | number | undefined;
                readonly nowrap?: boolean | undefined;
                readonly intent?: number | undefined;
                readonly headerProps?: {
                    readonly [x: string]: any;
                } | undefined;
                readonly cellProps?: import("../../types.js").DataTableHeaderCellPropsFunction | {
                    readonly [x: string]: any;
                } | undefined;
                readonly sortable?: boolean | undefined;
                readonly sort?: import("../../types.js").DataTableCompareFunction<any> | undefined;
                readonly sortRaw?: import("../../types.js").DataTableCompareFunction<any> | undefined;
                readonly filter?: import("../../types.js").FilterFunction | undefined;
                readonly children?: readonly any[] | undefined;
            }[] | undefined;
        }[] | Defaults["headers"]>;
        default: unknown extends Defaults["headers"] ? readonly {
            readonly key?: "data-table-expand" | "data-table-group" | "data-table-select" | (string & {}) | undefined;
            readonly value?: SelectItemKey<Record<string, any>>;
            readonly title?: string | undefined;
            readonly fixed?: "end" | "start" | boolean | undefined;
            readonly align?: "center" | "end" | "start" | undefined;
            readonly width?: string | number | undefined;
            readonly minWidth?: string | number | undefined;
            readonly maxWidth?: string | number | undefined;
            readonly nowrap?: boolean | undefined;
            readonly intent?: number | undefined;
            readonly headerProps?: {
                readonly [x: string]: any;
            } | undefined;
            readonly cellProps?: import("../../types.js").DataTableHeaderCellPropsFunction | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: import("../../types.js").DataTableCompareFunction<any> | undefined;
            readonly sortRaw?: import("../../types.js").DataTableCompareFunction<any> | undefined;
            readonly filter?: import("../../types.js").FilterFunction | undefined;
            readonly children?: readonly {
                readonly key?: "data-table-expand" | "data-table-group" | "data-table-select" | (string & {}) | undefined;
                readonly value?: SelectItemKey<Record<string, any>>;
                readonly title?: string | undefined;
                readonly fixed?: "end" | "start" | boolean | undefined;
                readonly align?: "center" | "end" | "start" | undefined;
                readonly width?: string | number | undefined;
                readonly minWidth?: string | number | undefined;
                readonly maxWidth?: string | number | undefined;
                readonly nowrap?: boolean | undefined;
                readonly intent?: number | undefined;
                readonly headerProps?: {
                    readonly [x: string]: any;
                } | undefined;
                readonly cellProps?: import("../../types.js").DataTableHeaderCellPropsFunction | {
                    readonly [x: string]: any;
                } | undefined;
                readonly sortable?: boolean | undefined;
                readonly sort?: import("../../types.js").DataTableCompareFunction<any> | undefined;
                readonly sortRaw?: import("../../types.js").DataTableCompareFunction<any> | undefined;
                readonly filter?: import("../../types.js").FilterFunction | undefined;
                readonly children?: readonly any[] | undefined;
            }[] | undefined;
        }[] : readonly {
            readonly key?: "data-table-expand" | "data-table-group" | "data-table-select" | (string & {}) | undefined;
            readonly value?: SelectItemKey<Record<string, any>>;
            readonly title?: string | undefined;
            readonly fixed?: "end" | "start" | boolean | undefined;
            readonly align?: "center" | "end" | "start" | undefined;
            readonly width?: string | number | undefined;
            readonly minWidth?: string | number | undefined;
            readonly maxWidth?: string | number | undefined;
            readonly nowrap?: boolean | undefined;
            readonly intent?: number | undefined;
            readonly headerProps?: {
                readonly [x: string]: any;
            } | undefined;
            readonly cellProps?: import("../../types.js").DataTableHeaderCellPropsFunction | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: import("../../types.js").DataTableCompareFunction<any> | undefined;
            readonly sortRaw?: import("../../types.js").DataTableCompareFunction<any> | undefined;
            readonly filter?: import("../../types.js").FilterFunction | undefined;
            readonly children?: readonly {
                readonly key?: "data-table-expand" | "data-table-group" | "data-table-select" | (string & {}) | undefined;
                readonly value?: SelectItemKey<Record<string, any>>;
                readonly title?: string | undefined;
                readonly fixed?: "end" | "start" | boolean | undefined;
                readonly align?: "center" | "end" | "start" | undefined;
                readonly width?: string | number | undefined;
                readonly minWidth?: string | number | undefined;
                readonly maxWidth?: string | number | undefined;
                readonly nowrap?: boolean | undefined;
                readonly intent?: number | undefined;
                readonly headerProps?: {
                    readonly [x: string]: any;
                } | undefined;
                readonly cellProps?: import("../../types.js").DataTableHeaderCellPropsFunction | {
                    readonly [x: string]: any;
                } | undefined;
                readonly sortable?: boolean | undefined;
                readonly sort?: import("../../types.js").DataTableCompareFunction<any> | undefined;
                readonly sortRaw?: import("../../types.js").DataTableCompareFunction<any> | undefined;
                readonly filter?: import("../../types.js").FilterFunction | undefined;
                readonly children?: readonly any[] | undefined;
            }[] | undefined;
        }[] | Defaults["headers"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    disableSort: unknown extends Defaults["disableSort"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["disableSort"] ? boolean : boolean | Defaults["disableSort"]>;
        default: unknown extends Defaults["disableSort"] ? boolean : boolean | Defaults["disableSort"];
    };
    multiSort: unknown extends Defaults["multiSort"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["multiSort"] ? boolean : boolean | Defaults["multiSort"]>;
        default: unknown extends Defaults["multiSort"] ? boolean : boolean | Defaults["multiSort"];
    };
    sortAscIcon: unknown extends Defaults["sortAscIcon"] ? {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["sortAscIcon"] ? import("../../composables/icons.js").IconValue : Defaults["sortAscIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["sortAscIcon"] ? import("../../composables/icons.js").IconValue : Defaults["sortAscIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    sortDescIcon: unknown extends Defaults["sortDescIcon"] ? {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["sortDescIcon"] ? import("../../composables/icons.js").IconValue : Defaults["sortDescIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["sortDescIcon"] ? import("../../composables/icons.js").IconValue : Defaults["sortDescIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    headerProps: unknown extends Defaults["headerProps"] ? {
        type: import("vue").PropType<Record<string, any>>;
    } : Omit<{
        type: import("vue").PropType<Record<string, any>>;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["headerProps"] ? Record<string, any> : Record<string, any> | Defaults["headerProps"]>;
        default: unknown extends Defaults["headerProps"] ? Record<string, any> : Record<string, any> | Defaults["headerProps"];
    };
    sticky: unknown extends Defaults["sticky"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["sticky"] ? boolean : boolean | Defaults["sticky"]>;
        default: unknown extends Defaults["sticky"] ? boolean : boolean | Defaults["sticky"];
    };
    groupCollapseIcon: unknown extends Defaults["groupCollapseIcon"] ? {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["groupCollapseIcon"] ? import("../../composables/icons.js").IconValue : Defaults["groupCollapseIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["groupCollapseIcon"] ? import("../../composables/icons.js").IconValue : Defaults["groupCollapseIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    groupExpandIcon: unknown extends Defaults["groupExpandIcon"] ? {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["groupExpandIcon"] ? import("../../composables/icons.js").IconValue : Defaults["groupExpandIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["groupExpandIcon"] ? import("../../composables/icons.js").IconValue : Defaults["groupExpandIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    collapseIcon: unknown extends Defaults["collapseIcon"] ? {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["collapseIcon"] ? import("../../composables/icons.js").IconValue : Defaults["collapseIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["collapseIcon"] ? import("../../composables/icons.js").IconValue : Defaults["collapseIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    expandIcon: unknown extends Defaults["expandIcon"] ? {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["expandIcon"] ? import("../../composables/icons.js").IconValue : Defaults["expandIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["expandIcon"] ? import("../../composables/icons.js").IconValue : Defaults["expandIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    loadingText: unknown extends Defaults["loadingText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["loadingText"] ? string : string | Defaults["loadingText"]>;
        default: unknown extends Defaults["loadingText"] ? string : string | Defaults["loadingText"];
    };
    hideNoData: unknown extends Defaults["hideNoData"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hideNoData"] ? boolean : boolean | Defaults["hideNoData"]>;
        default: unknown extends Defaults["hideNoData"] ? boolean : boolean | Defaults["hideNoData"];
    };
    noDataText: unknown extends Defaults["noDataText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["noDataText"] ? string : string | Defaults["noDataText"]>;
        default: unknown extends Defaults["noDataText"] ? string : string | Defaults["noDataText"];
    };
    fixedHeader: unknown extends Defaults["fixedHeader"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["fixedHeader"] ? boolean : boolean | Defaults["fixedHeader"]>;
        default: unknown extends Defaults["fixedHeader"] ? boolean : boolean | Defaults["fixedHeader"];
    };
    fixedFooter: unknown extends Defaults["fixedFooter"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["fixedFooter"] ? boolean : boolean | Defaults["fixedFooter"]>;
        default: unknown extends Defaults["fixedFooter"] ? boolean : boolean | Defaults["fixedFooter"];
    };
    hover: unknown extends Defaults["hover"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hover"] ? boolean : boolean | Defaults["hover"]>;
        default: unknown extends Defaults["hover"] ? boolean : boolean | Defaults["hover"];
    };
    striped: unknown extends Defaults["striped"] ? {
        type: import("vue").PropType<import("../VTable/VTable.js").Striped>;
        default: null;
        validator: (v: any) => boolean;
    } : Omit<{
        type: import("vue").PropType<import("../VTable/VTable.js").Striped>;
        default: null;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["striped"] ? import("../VTable/VTable.js").Striped : Defaults["striped"] | import("../VTable/VTable.js").Striped>;
        default: unknown extends Defaults["striped"] ? import("../VTable/VTable.js").Striped : Defaults["striped"] | NonNullable<import("../VTable/VTable.js").Striped>;
    };
    hideDefaultBody: unknown extends Defaults["hideDefaultBody"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hideDefaultBody"] ? boolean : boolean | Defaults["hideDefaultBody"]>;
        default: unknown extends Defaults["hideDefaultBody"] ? boolean : boolean | Defaults["hideDefaultBody"];
    };
    hideDefaultHeader: unknown extends Defaults["hideDefaultHeader"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hideDefaultHeader"] ? boolean : boolean | Defaults["hideDefaultHeader"]>;
        default: unknown extends Defaults["hideDefaultHeader"] ? boolean : boolean | Defaults["hideDefaultHeader"];
    };
    width: unknown extends Defaults["width"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : Defaults["width"] | NonNullable<string | number>;
    };
    search: unknown extends Defaults["search"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["search"] ? string : string | Defaults["search"]>;
        default: unknown extends Defaults["search"] ? string : string | Defaults["search"];
    };
};
type ItemType<T> = T extends readonly (infer U)[] ? U : never;
export declare const VDataTableVirtual: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        mobile: boolean | null;
        filterMode: import("../../composables/filter.js").FilterMode;
        noFilter: boolean;
        expandOnClick: boolean;
        showExpand: boolean;
        expanded: readonly string[];
        sortBy: readonly import("../../types.js").DataTableSortItem[];
        mustSort: boolean;
        groupBy: readonly import("../../types.js").DataTableSortItem[];
        returnObject: boolean;
        showSelect: boolean;
        selectStrategy: "all" | "page" | "single";
        density: import("../../composables/density.js").Density;
        tag: string | import("../../util/index.js").JSXComponent;
        itemHeight: string | number;
        itemKey: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        disableSort: boolean;
        multiSort: boolean;
        sortAscIcon: import("../../composables/icons.js").IconValue;
        sortDescIcon: import("../../composables/icons.js").IconValue;
        sticky: boolean;
        groupCollapseIcon: import("../../composables/icons.js").IconValue;
        groupExpandIcon: import("../../composables/icons.js").IconValue;
        collapseIcon: import("../../composables/icons.js").IconValue;
        expandIcon: import("../../composables/icons.js").IconValue;
        loadingText: string;
        hideNoData: boolean;
        noDataText: string;
        fixedHeader: boolean;
        fixedFooter: boolean;
        hover: boolean;
        striped: import("../VTable/VTable.js").Striped;
        hideDefaultBody: boolean;
        hideDefaultHeader: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
        customFilter?: import("../../types.js").FilterFunction | undefined;
        customKeyFilter?: import("../../composables/filter.js").FilterKeyFunctions | undefined;
        filterKeys?: import("../../composables/filter.js").FilterKeys | undefined;
        customKeySort?: Record<string, import("../../types.js").DataTableCompareFunction> | undefined;
        valueComparator?: typeof import("../../util/index.js").deepEqual | undefined;
        loading?: string | boolean | undefined;
        height?: string | number | undefined;
        color?: string | undefined;
        headerProps?: Record<string, any> | undefined;
        width?: string | number | undefined;
        search?: string | undefined;
    } & {
        "onUpdate:expanded"?: ((value: any) => any) | undefined;
        "onUpdate:groupBy"?: ((value: any) => any) | undefined;
        "onUpdate:options"?: ((value: any) => any) | undefined;
        "onUpdate:sortBy"?: ((value: any) => any) | undefined;
    }, {
        calculateVisibleItems: () => void;
        scrollToIndex: (index: number) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        "update:modelValue": (value: any[]) => true;
        "update:sortBy": (value: any) => true;
        "update:options": (value: any) => true;
        "update:groupBy": (value: any) => true;
        "update:expanded": (value: any) => true;
    }, "$children" | "cellProps" | "headers" | "itemSelectable" | "itemValue" | "items" | "modelValue" | "rowProps" | "update:modelValue" | "v-slot:body.append" | "v-slot:body.prepend" | "v-slot:bottom" | "v-slot:colgroup" | "v-slot:data-table-group" | "v-slot:data-table-select" | "v-slot:expanded-row" | "v-slot:group-header" | "v-slot:group-summary" | "v-slot:headers" | "v-slot:item" | "v-slot:loader" | "v-slot:loading" | "v-slot:no-data" | "v-slot:tbody" | "v-slot:tfoot" | "v-slot:thead" | "v-slot:top" | "v-slots" | `v-slot:header.${string}` | `v-slot:item.${string}`>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        mobile: boolean | null;
        filterMode: import("../../composables/filter.js").FilterMode;
        noFilter: boolean;
        expandOnClick: boolean;
        showExpand: boolean;
        expanded: readonly string[];
        sortBy: readonly import("../../types.js").DataTableSortItem[];
        mustSort: boolean;
        groupBy: readonly import("../../types.js").DataTableSortItem[];
        returnObject: boolean;
        showSelect: boolean;
        selectStrategy: "all" | "page" | "single";
        density: import("../../composables/density.js").Density;
        tag: string | import("../../util/index.js").JSXComponent;
        itemHeight: string | number;
        itemKey: SelectItemKey;
        disableSort: boolean;
        multiSort: boolean;
        sortAscIcon: import("../../composables/icons.js").IconValue;
        sortDescIcon: import("../../composables/icons.js").IconValue;
        sticky: boolean;
        groupCollapseIcon: import("../../composables/icons.js").IconValue;
        groupExpandIcon: import("../../composables/icons.js").IconValue;
        collapseIcon: import("../../composables/icons.js").IconValue;
        expandIcon: import("../../composables/icons.js").IconValue;
        loadingText: string;
        hideNoData: boolean;
        noDataText: string;
        fixedHeader: boolean;
        fixedFooter: boolean;
        hover: boolean;
        striped: import("../VTable/VTable.js").Striped;
        hideDefaultBody: boolean;
        hideDefaultHeader: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        [x: `item.${string}`]: (arg: import("./types.js").ItemKeySlot<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        [x: `header.${string}`]: (arg: import("./VDataTableHeaders.js").VDataTableHeaderCellColumnSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        headers: (arg: import("./VDataTableHeaders.js").HeadersSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "data-table-group": (arg: {
            item: import("./composables/group.js").Group<any>;
            count: number;
            props: Record<string, unknown>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "data-table-select": (arg: {
            props: Record<string, unknown>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "item.data-table-select": (arg: import("./VDataTableRow.js").VDataTableItemCellColumnSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "item.data-table-expand": (arg: import("./VDataTableRow.js").VDataTableItemCellColumnSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "header.data-table-select": (arg: import("./VDataTableHeaders.js").VDataTableHeaderCellColumnSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "header.data-table-expand": (arg: import("./VDataTableHeaders.js").VDataTableHeaderCellColumnSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        item: (arg: {
            index: number;
            item: any;
            internalItem: import("./types.js").DataTableItem<any>;
            isExpanded: (item: import("./types.js").DataTableItem<any>) => boolean;
            toggleExpand: (item: import("./types.js").DataTableItem<any>) => void;
            isSelected: (items: import("./composables/select.js").SelectableItem[] | import("./composables/select.js").SelectableItem) => boolean;
            toggleSelect: (item: import("./composables/select.js").SelectableItem, index?: number | undefined, event?: MouseEvent | undefined) => void;
        } & {
            columns: import("./types.js").InternalDataTableHeader[];
        } & {
            props: Record<string, any>;
        } & {
            itemRef: TemplateRef;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        loading: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "group-header": (arg: import("./types.js").GroupHeaderSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "group-summary": (arg: import("./types.js").GroupSummarySlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "no-data": () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "expanded-row": (arg: import("./types.js").ItemSlot<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        colgroup: (arg: VDataTableVirtualSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        top: (arg: VDataTableVirtualSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        tbody: (arg: VDataTableVirtualSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        thead: (arg: VDataTableVirtualSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        tfoot: (arg: VDataTableVirtualSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        bottom: (arg: VDataTableVirtualSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "body.prepend": (arg: VDataTableVirtualSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "body.append": (arg: VDataTableVirtualSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        mobile: boolean | null;
        filterMode: import("../../composables/filter.js").FilterMode;
        noFilter: boolean;
        expandOnClick: boolean;
        showExpand: boolean;
        expanded: readonly string[];
        sortBy: readonly import("../../types.js").DataTableSortItem[];
        mustSort: boolean;
        groupBy: readonly import("../../types.js").DataTableSortItem[];
        returnObject: boolean;
        showSelect: boolean;
        selectStrategy: "all" | "page" | "single";
        density: import("../../composables/density.js").Density;
        tag: string | import("../../util/index.js").JSXComponent;
        itemHeight: string | number;
        itemKey: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        disableSort: boolean;
        multiSort: boolean;
        sortAscIcon: import("../../composables/icons.js").IconValue;
        sortDescIcon: import("../../composables/icons.js").IconValue;
        sticky: boolean;
        groupCollapseIcon: import("../../composables/icons.js").IconValue;
        groupExpandIcon: import("../../composables/icons.js").IconValue;
        collapseIcon: import("../../composables/icons.js").IconValue;
        expandIcon: import("../../composables/icons.js").IconValue;
        loadingText: string;
        hideNoData: boolean;
        noDataText: string;
        fixedHeader: boolean;
        fixedFooter: boolean;
        hover: boolean;
        striped: import("../VTable/VTable.js").Striped;
        hideDefaultBody: boolean;
        hideDefaultHeader: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
        customFilter?: import("../../types.js").FilterFunction | undefined;
        customKeyFilter?: import("../../composables/filter.js").FilterKeyFunctions | undefined;
        filterKeys?: import("../../composables/filter.js").FilterKeys | undefined;
        customKeySort?: Record<string, import("../../types.js").DataTableCompareFunction> | undefined;
        valueComparator?: typeof import("../../util/index.js").deepEqual | undefined;
        loading?: string | boolean | undefined;
        height?: string | number | undefined;
        color?: string | undefined;
        headerProps?: Record<string, any> | undefined;
        width?: string | number | undefined;
        search?: string | undefined;
    } & {
        "onUpdate:expanded"?: ((value: any) => any) | undefined;
        "onUpdate:groupBy"?: ((value: any) => any) | undefined;
        "onUpdate:options"?: ((value: any) => any) | undefined;
        "onUpdate:sortBy"?: ((value: any) => any) | undefined;
    }, {
        calculateVisibleItems: () => void;
        scrollToIndex: (index: number) => void;
    }, {}, {}, {}, {
        style: import("vue").StyleValue;
        mobile: boolean | null;
        filterMode: import("../../composables/filter.js").FilterMode;
        noFilter: boolean;
        expandOnClick: boolean;
        showExpand: boolean;
        expanded: readonly string[];
        sortBy: readonly import("../../types.js").DataTableSortItem[];
        mustSort: boolean;
        groupBy: readonly import("../../types.js").DataTableSortItem[];
        returnObject: boolean;
        showSelect: boolean;
        selectStrategy: "all" | "page" | "single";
        density: import("../../composables/density.js").Density;
        tag: string | import("../../util/index.js").JSXComponent;
        itemHeight: string | number;
        itemKey: SelectItemKey;
        disableSort: boolean;
        multiSort: boolean;
        sortAscIcon: import("../../composables/icons.js").IconValue;
        sortDescIcon: import("../../composables/icons.js").IconValue;
        sticky: boolean;
        groupCollapseIcon: import("../../composables/icons.js").IconValue;
        groupExpandIcon: import("../../composables/icons.js").IconValue;
        collapseIcon: import("../../composables/icons.js").IconValue;
        expandIcon: import("../../composables/icons.js").IconValue;
        loadingText: string;
        hideNoData: boolean;
        noDataText: string;
        fixedHeader: boolean;
        fixedFooter: boolean;
        hover: boolean;
        striped: import("../VTable/VTable.js").Striped;
        hideDefaultBody: boolean;
        hideDefaultHeader: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    mobile: boolean | null;
    filterMode: import("../../composables/filter.js").FilterMode;
    noFilter: boolean;
    expandOnClick: boolean;
    showExpand: boolean;
    expanded: readonly string[];
    sortBy: readonly import("../../types.js").DataTableSortItem[];
    mustSort: boolean;
    groupBy: readonly import("../../types.js").DataTableSortItem[];
    returnObject: boolean;
    showSelect: boolean;
    selectStrategy: "all" | "page" | "single";
    density: import("../../composables/density.js").Density;
    tag: string | import("../../util/index.js").JSXComponent;
    itemHeight: string | number;
    itemKey: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
    disableSort: boolean;
    multiSort: boolean;
    sortAscIcon: import("../../composables/icons.js").IconValue;
    sortDescIcon: import("../../composables/icons.js").IconValue;
    sticky: boolean;
    groupCollapseIcon: import("../../composables/icons.js").IconValue;
    groupExpandIcon: import("../../composables/icons.js").IconValue;
    collapseIcon: import("../../composables/icons.js").IconValue;
    expandIcon: import("../../composables/icons.js").IconValue;
    loadingText: string;
    hideNoData: boolean;
    noDataText: string;
    fixedHeader: boolean;
    fixedFooter: boolean;
    hover: boolean;
    striped: import("../VTable/VTable.js").Striped;
    hideDefaultBody: boolean;
    hideDefaultHeader: boolean;
} & {
    theme?: string | undefined;
    class?: any;
    mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
    customFilter?: import("../../types.js").FilterFunction | undefined;
    customKeyFilter?: import("../../composables/filter.js").FilterKeyFunctions | undefined;
    filterKeys?: import("../../composables/filter.js").FilterKeys | undefined;
    customKeySort?: Record<string, import("../../types.js").DataTableCompareFunction> | undefined;
    valueComparator?: typeof import("../../util/index.js").deepEqual | undefined;
    loading?: string | boolean | undefined;
    height?: string | number | undefined;
    color?: string | undefined;
    headerProps?: Record<string, any> | undefined;
    width?: string | number | undefined;
    search?: string | undefined;
} & {
    "onUpdate:expanded"?: ((value: any) => any) | undefined;
    "onUpdate:groupBy"?: ((value: any) => any) | undefined;
    "onUpdate:options"?: ((value: any) => any) | undefined;
    "onUpdate:sortBy"?: ((value: any) => any) | undefined;
}, {
    calculateVisibleItems: () => void;
    scrollToIndex: (index: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
    "update:modelValue": (value: any[]) => true;
    "update:sortBy": (value: any) => true;
    "update:options": (value: any) => true;
    "update:groupBy": (value: any) => true;
    "update:expanded": (value: any) => true;
}, "$children" | "cellProps" | "headers" | "itemSelectable" | "itemValue" | "items" | "modelValue" | "rowProps" | "update:modelValue" | "v-slot:body.append" | "v-slot:body.prepend" | "v-slot:bottom" | "v-slot:colgroup" | "v-slot:data-table-group" | "v-slot:data-table-select" | "v-slot:expanded-row" | "v-slot:group-header" | "v-slot:group-summary" | "v-slot:headers" | "v-slot:item" | "v-slot:loader" | "v-slot:loading" | "v-slot:no-data" | "v-slot:tbody" | "v-slot:tfoot" | "v-slot:thead" | "v-slot:top" | "v-slots" | `v-slot:header.${string}` | `v-slot:item.${string}`>, string, {
    style: import("vue").StyleValue;
    mobile: boolean | null;
    filterMode: import("../../composables/filter.js").FilterMode;
    noFilter: boolean;
    expandOnClick: boolean;
    showExpand: boolean;
    expanded: readonly string[];
    sortBy: readonly import("../../types.js").DataTableSortItem[];
    mustSort: boolean;
    groupBy: readonly import("../../types.js").DataTableSortItem[];
    returnObject: boolean;
    showSelect: boolean;
    selectStrategy: "all" | "page" | "single";
    density: import("../../composables/density.js").Density;
    tag: string | import("../../util/index.js").JSXComponent;
    itemHeight: string | number;
    itemKey: SelectItemKey;
    disableSort: boolean;
    multiSort: boolean;
    sortAscIcon: import("../../composables/icons.js").IconValue;
    sortDescIcon: import("../../composables/icons.js").IconValue;
    sticky: boolean;
    groupCollapseIcon: import("../../composables/icons.js").IconValue;
    groupExpandIcon: import("../../composables/icons.js").IconValue;
    collapseIcon: import("../../composables/icons.js").IconValue;
    expandIcon: import("../../composables/icons.js").IconValue;
    loadingText: string;
    hideNoData: boolean;
    noDataText: string;
    fixedHeader: boolean;
    fixedFooter: boolean;
    hover: boolean;
    striped: import("../VTable/VTable.js").Striped;
    hideDefaultBody: boolean;
    hideDefaultHeader: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    [x: `item.${string}`]: (arg: import("./types.js").ItemKeySlot<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    [x: `header.${string}`]: (arg: import("./VDataTableHeaders.js").VDataTableHeaderCellColumnSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    headers: (arg: import("./VDataTableHeaders.js").HeadersSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "data-table-group": (arg: {
        item: import("./composables/group.js").Group<any>;
        count: number;
        props: Record<string, unknown>;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "data-table-select": (arg: {
        props: Record<string, unknown>;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "item.data-table-select": (arg: import("./VDataTableRow.js").VDataTableItemCellColumnSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "item.data-table-expand": (arg: import("./VDataTableRow.js").VDataTableItemCellColumnSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "header.data-table-select": (arg: import("./VDataTableHeaders.js").VDataTableHeaderCellColumnSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "header.data-table-expand": (arg: import("./VDataTableHeaders.js").VDataTableHeaderCellColumnSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    item: (arg: {
        index: number;
        item: any;
        internalItem: import("./types.js").DataTableItem<any>;
        isExpanded: (item: import("./types.js").DataTableItem<any>) => boolean;
        toggleExpand: (item: import("./types.js").DataTableItem<any>) => void;
        isSelected: (items: import("./composables/select.js").SelectableItem[] | import("./composables/select.js").SelectableItem) => boolean;
        toggleSelect: (item: import("./composables/select.js").SelectableItem, index?: number | undefined, event?: MouseEvent | undefined) => void;
    } & {
        columns: import("./types.js").InternalDataTableHeader[];
    } & {
        props: Record<string, any>;
    } & {
        itemRef: TemplateRef;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    loading: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "group-header": (arg: import("./types.js").GroupHeaderSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "group-summary": (arg: import("./types.js").GroupSummarySlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "no-data": () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "expanded-row": (arg: import("./types.js").ItemSlot<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    colgroup: (arg: VDataTableVirtualSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    top: (arg: VDataTableVirtualSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    tbody: (arg: VDataTableVirtualSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    thead: (arg: VDataTableVirtualSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    tfoot: (arg: VDataTableVirtualSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    bottom: (arg: VDataTableVirtualSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "body.prepend": (arg: VDataTableVirtualSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "body.append": (arg: VDataTableVirtualSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T extends readonly any[], V>(props: {
    items?: T | undefined;
    itemValue?: SelectItemKey<ItemType<T>>;
    rowProps?: RowProps<ItemType<T>> | undefined;
    cellProps?: CellProps<ItemType<T>> | undefined;
    itemSelectable?: SelectItemKey<ItemType<T>>;
    headers?: readonly {
        readonly key?: "data-table-expand" | "data-table-group" | "data-table-select" | (string & {}) | undefined;
        readonly value?: SelectItemKey<ItemType<T>>;
        readonly title?: string | undefined;
        readonly fixed?: "end" | "start" | boolean | undefined;
        readonly align?: "center" | "end" | "start" | undefined;
        readonly width?: string | number | undefined;
        readonly minWidth?: string | number | undefined;
        readonly maxWidth?: string | number | undefined;
        readonly nowrap?: boolean | undefined;
        readonly intent?: number | undefined;
        readonly headerProps?: {
            readonly [x: string]: any;
        } | undefined;
        readonly cellProps?: import("../../types.js").DataTableHeaderCellPropsFunction | {
            readonly [x: string]: any;
        } | undefined;
        readonly sortable?: boolean | undefined;
        readonly sort?: import("../../types.js").DataTableCompareFunction<any> | undefined;
        readonly sortRaw?: import("../../types.js").DataTableCompareFunction<any> | undefined;
        readonly filter?: import("../../types.js").FilterFunction | undefined;
        readonly children?: readonly /*elided*/ any[] | undefined;
    }[] | undefined;
    modelValue?: V | undefined;
    "onUpdate:modelValue"?: ((value: V) => void) | undefined;
}, slots: VDataTableVirtualSlots<ItemType<T>>) => GenericProps<{
    items?: T | undefined;
    itemValue?: SelectItemKey<ItemType<T>>;
    rowProps?: RowProps<ItemType<T>> | undefined;
    cellProps?: CellProps<ItemType<T>> | undefined;
    itemSelectable?: SelectItemKey<ItemType<T>>;
    headers?: readonly {
        readonly key?: "data-table-expand" | "data-table-group" | "data-table-select" | (string & {}) | undefined;
        readonly value?: SelectItemKey<ItemType<T>>;
        readonly title?: string | undefined;
        readonly fixed?: "end" | "start" | boolean | undefined;
        readonly align?: "center" | "end" | "start" | undefined;
        readonly width?: string | number | undefined;
        readonly minWidth?: string | number | undefined;
        readonly maxWidth?: string | number | undefined;
        readonly nowrap?: boolean | undefined;
        readonly intent?: number | undefined;
        readonly headerProps?: {
            readonly [x: string]: any;
        } | undefined;
        readonly cellProps?: import("../../types.js").DataTableHeaderCellPropsFunction | {
            readonly [x: string]: any;
        } | undefined;
        readonly sortable?: boolean | undefined;
        readonly sort?: import("../../types.js").DataTableCompareFunction<any> | undefined;
        readonly sortRaw?: import("../../types.js").DataTableCompareFunction<any> | undefined;
        readonly filter?: import("../../types.js").FilterFunction | undefined;
        readonly children?: readonly any[] | undefined;
    }[] | undefined;
    modelValue?: V | undefined;
    "onUpdate:modelValue"?: ((value: V) => void) | undefined;
}, VDataTableVirtualSlots<ItemType<T>>>) & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    mobile: {
        type: import("vue").PropType<boolean | null>;
        default: boolean;
    };
    mobileBreakpoint: import("vue").PropType<number | import("../../types.js").DisplayBreakpoint>;
    customFilter: import("vue").PropType<import("../../types.js").FilterFunction>;
    customKeyFilter: import("vue").PropType<import("../../composables/filter.js").FilterKeyFunctions>;
    filterKeys: import("vue").PropType<import("../../composables/filter.js").FilterKeys>;
    filterMode: {
        type: import("vue").PropType<import("../../composables/filter.js").FilterMode>;
        default: string;
    };
    noFilter: BooleanConstructor;
    expandOnClick: BooleanConstructor;
    showExpand: BooleanConstructor;
    expanded: {
        type: import("vue").PropType<readonly string[]>;
        default: () => never[];
    };
    sortBy: {
        type: import("vue").PropType<readonly import("../../types.js").DataTableSortItem[]>;
        default: () => never[];
    };
    customKeySort: import("vue").PropType<Record<string, import("../../types.js").DataTableCompareFunction>>;
    mustSort: BooleanConstructor;
    groupBy: {
        type: import("vue").PropType<readonly import("../../types.js").DataTableSortItem[]>;
        default: () => never[];
    };
    items: {
        type: import("vue").PropType<any[]>;
        default: () => never[];
    };
    itemValue: {
        type: import("vue").PropType<SelectItemKey>;
        default: string;
    };
    itemSelectable: {
        type: import("vue").PropType<SelectItemKey>;
        default: null;
    };
    rowProps: import("vue").PropType<RowProps<any>>;
    cellProps: import("vue").PropType<CellProps<any>>;
    returnObject: BooleanConstructor;
    showSelect: BooleanConstructor;
    selectStrategy: {
        type: import("vue").PropType<"all" | "page" | "single">;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<readonly any[]>;
        default: () => never[];
    };
    valueComparator: import("vue").PropType<typeof import("../../util/index.js").deepEqual>;
    density: {
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    loading: (BooleanConstructor | StringConstructor)[];
    itemHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    itemKey: {
        type: import("vue").PropType<SelectItemKey>;
        default: null;
    };
    height: (NumberConstructor | StringConstructor)[];
    headers: import("vue").PropType<readonly {
        readonly key?: "data-table-expand" | "data-table-group" | "data-table-select" | (string & {}) | undefined;
        readonly value?: SelectItemKey<Record<string, any>>;
        readonly title?: string | undefined;
        readonly fixed?: "end" | "start" | boolean | undefined;
        readonly align?: "center" | "end" | "start" | undefined;
        readonly width?: string | number | undefined;
        readonly minWidth?: string | number | undefined;
        readonly maxWidth?: string | number | undefined;
        readonly nowrap?: boolean | undefined;
        readonly intent?: number | undefined;
        readonly headerProps?: {
            readonly [x: string]: any;
        } | undefined;
        readonly cellProps?: import("../../types.js").DataTableHeaderCellPropsFunction | {
            readonly [x: string]: any;
        } | undefined;
        readonly sortable?: boolean | undefined;
        readonly sort?: import("../../types.js").DataTableCompareFunction<any> | undefined;
        readonly sortRaw?: import("../../types.js").DataTableCompareFunction<any> | undefined;
        readonly filter?: import("../../types.js").FilterFunction | undefined;
        readonly children?: readonly {
            readonly key?: "data-table-expand" | "data-table-group" | "data-table-select" | (string & {}) | undefined;
            readonly value?: SelectItemKey<Record<string, any>>;
            readonly title?: string | undefined;
            readonly fixed?: "end" | "start" | boolean | undefined;
            readonly align?: "center" | "end" | "start" | undefined;
            readonly width?: string | number | undefined;
            readonly minWidth?: string | number | undefined;
            readonly maxWidth?: string | number | undefined;
            readonly nowrap?: boolean | undefined;
            readonly intent?: number | undefined;
            readonly headerProps?: {
                readonly [x: string]: any;
            } | undefined;
            readonly cellProps?: import("../../types.js").DataTableHeaderCellPropsFunction | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: import("../../types.js").DataTableCompareFunction<any> | undefined;
            readonly sortRaw?: import("../../types.js").DataTableCompareFunction<any> | undefined;
            readonly filter?: import("../../types.js").FilterFunction | undefined;
            readonly children?: readonly /*elided*/ any[] | undefined;
        }[] | undefined;
    }[]>;
    color: StringConstructor;
    disableSort: BooleanConstructor;
    multiSort: BooleanConstructor;
    sortAscIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    sortDescIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    headerProps: {
        type: import("vue").PropType<Record<string, any>>;
    };
    sticky: BooleanConstructor;
    groupCollapseIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    groupExpandIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    collapseIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    expandIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    hideNoData: BooleanConstructor;
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    fixedHeader: BooleanConstructor;
    fixedFooter: BooleanConstructor;
    hover: BooleanConstructor;
    striped: {
        type: import("vue").PropType<import("../VTable/VTable.js").Striped>;
        default: null;
        validator: (v: any) => boolean;
    };
    hideDefaultBody: BooleanConstructor;
    hideDefaultHeader: BooleanConstructor;
    width: (NumberConstructor | StringConstructor)[];
    search: StringConstructor;
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    mobile: {
        type: import("vue").PropType<boolean | null>;
        default: boolean;
    };
    mobileBreakpoint: import("vue").PropType<number | import("../../types.js").DisplayBreakpoint>;
    customFilter: import("vue").PropType<import("../../types.js").FilterFunction>;
    customKeyFilter: import("vue").PropType<import("../../composables/filter.js").FilterKeyFunctions>;
    filterKeys: import("vue").PropType<import("../../composables/filter.js").FilterKeys>;
    filterMode: {
        type: import("vue").PropType<import("../../composables/filter.js").FilterMode>;
        default: string;
    };
    noFilter: BooleanConstructor;
    expandOnClick: BooleanConstructor;
    showExpand: BooleanConstructor;
    expanded: {
        type: import("vue").PropType<readonly string[]>;
        default: () => never[];
    };
    sortBy: {
        type: import("vue").PropType<readonly import("../../types.js").DataTableSortItem[]>;
        default: () => never[];
    };
    customKeySort: import("vue").PropType<Record<string, import("../../types.js").DataTableCompareFunction>>;
    mustSort: BooleanConstructor;
    groupBy: {
        type: import("vue").PropType<readonly import("../../types.js").DataTableSortItem[]>;
        default: () => never[];
    };
    items: {
        type: import("vue").PropType<any[]>;
        default: () => never[];
    };
    itemValue: {
        type: import("vue").PropType<SelectItemKey>;
        default: string;
    };
    itemSelectable: {
        type: import("vue").PropType<SelectItemKey>;
        default: null;
    };
    rowProps: import("vue").PropType<RowProps<any>>;
    cellProps: import("vue").PropType<CellProps<any>>;
    returnObject: BooleanConstructor;
    showSelect: BooleanConstructor;
    selectStrategy: {
        type: import("vue").PropType<"all" | "page" | "single">;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<readonly any[]>;
        default: () => never[];
    };
    valueComparator: import("vue").PropType<typeof import("../../util/index.js").deepEqual>;
    density: {
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    loading: (BooleanConstructor | StringConstructor)[];
    itemHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    itemKey: {
        type: import("vue").PropType<SelectItemKey>;
        default: null;
    };
    height: (NumberConstructor | StringConstructor)[];
    headers: import("vue").PropType<readonly {
        readonly key?: "data-table-expand" | "data-table-group" | "data-table-select" | (string & {}) | undefined;
        readonly value?: SelectItemKey<Record<string, any>>;
        readonly title?: string | undefined;
        readonly fixed?: "end" | "start" | boolean | undefined;
        readonly align?: "center" | "end" | "start" | undefined;
        readonly width?: string | number | undefined;
        readonly minWidth?: string | number | undefined;
        readonly maxWidth?: string | number | undefined;
        readonly nowrap?: boolean | undefined;
        readonly intent?: number | undefined;
        readonly headerProps?: {
            readonly [x: string]: any;
        } | undefined;
        readonly cellProps?: import("../../types.js").DataTableHeaderCellPropsFunction | {
            readonly [x: string]: any;
        } | undefined;
        readonly sortable?: boolean | undefined;
        readonly sort?: import("../../types.js").DataTableCompareFunction<any> | undefined;
        readonly sortRaw?: import("../../types.js").DataTableCompareFunction<any> | undefined;
        readonly filter?: import("../../types.js").FilterFunction | undefined;
        readonly children?: readonly {
            readonly key?: "data-table-expand" | "data-table-group" | "data-table-select" | (string & {}) | undefined;
            readonly value?: SelectItemKey<Record<string, any>>;
            readonly title?: string | undefined;
            readonly fixed?: "end" | "start" | boolean | undefined;
            readonly align?: "center" | "end" | "start" | undefined;
            readonly width?: string | number | undefined;
            readonly minWidth?: string | number | undefined;
            readonly maxWidth?: string | number | undefined;
            readonly nowrap?: boolean | undefined;
            readonly intent?: number | undefined;
            readonly headerProps?: {
                readonly [x: string]: any;
            } | undefined;
            readonly cellProps?: import("../../types.js").DataTableHeaderCellPropsFunction | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: import("../../types.js").DataTableCompareFunction<any> | undefined;
            readonly sortRaw?: import("../../types.js").DataTableCompareFunction<any> | undefined;
            readonly filter?: import("../../types.js").FilterFunction | undefined;
            readonly children?: readonly any[] | undefined;
        }[] | undefined;
    }[]>;
    color: StringConstructor;
    disableSort: BooleanConstructor;
    multiSort: BooleanConstructor;
    sortAscIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    sortDescIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    headerProps: {
        type: import("vue").PropType<Record<string, any>>;
    };
    sticky: BooleanConstructor;
    groupCollapseIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    groupExpandIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    collapseIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    expandIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    hideNoData: BooleanConstructor;
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    fixedHeader: BooleanConstructor;
    fixedFooter: BooleanConstructor;
    hover: BooleanConstructor;
    striped: {
        type: import("vue").PropType<import("../VTable/VTable.js").Striped>;
        default: null;
        validator: (v: any) => boolean;
    };
    hideDefaultBody: BooleanConstructor;
    hideDefaultHeader: BooleanConstructor;
    width: (NumberConstructor | StringConstructor)[];
    search: StringConstructor;
}>>;
export type VDataTableVirtual = InstanceType<typeof VDataTableVirtual>;

