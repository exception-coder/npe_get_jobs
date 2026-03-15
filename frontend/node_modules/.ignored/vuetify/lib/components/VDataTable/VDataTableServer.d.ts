import type { VDataTableSlotProps, VDataTableSlots } from './VDataTable.js';
import type { CellProps, RowProps } from './types.js';
import type { GenericProps, SelectItemKey } from '../../util/index.js';
export declare const makeVDataTableServerProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
    mobile?: unknown;
    mobileBreakpoint?: unknown;
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
    page?: unknown;
    itemsPerPage?: unknown;
    prevIcon?: unknown;
    nextIcon?: unknown;
    firstIcon?: unknown;
    lastIcon?: unknown;
    itemsPerPageText?: unknown;
    pageText?: unknown;
    firstPageLabel?: unknown;
    prevPageLabel?: unknown;
    nextPageLabel?: unknown;
    lastPageLabel?: unknown;
    itemsPerPageOptions?: unknown;
    showCurrentPage?: unknown;
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
    height?: unknown;
    hover?: unknown;
    striped?: unknown;
    hideDefaultBody?: unknown;
    hideDefaultFooter?: unknown;
    hideDefaultHeader?: unknown;
    width?: unknown;
    search?: unknown;
    itemsLength?: unknown;
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
    page: unknown extends Defaults["page"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["page"] ? string | number : string | number | Defaults["page"]>;
        default: unknown extends Defaults["page"] ? string | number : Defaults["page"] | NonNullable<string | number>;
    };
    itemsPerPage: unknown extends Defaults["itemsPerPage"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["itemsPerPage"] ? string | number : string | number | Defaults["itemsPerPage"]>;
        default: unknown extends Defaults["itemsPerPage"] ? string | number : Defaults["itemsPerPage"] | NonNullable<string | number>;
    };
    prevIcon: unknown extends Defaults["prevIcon"] ? {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["prevIcon"] ? import("../../composables/icons.js").IconValue : Defaults["prevIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["prevIcon"] ? import("../../composables/icons.js").IconValue : Defaults["prevIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    nextIcon: unknown extends Defaults["nextIcon"] ? {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["nextIcon"] ? import("../../composables/icons.js").IconValue : Defaults["nextIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["nextIcon"] ? import("../../composables/icons.js").IconValue : Defaults["nextIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    firstIcon: unknown extends Defaults["firstIcon"] ? {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["firstIcon"] ? import("../../composables/icons.js").IconValue : Defaults["firstIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["firstIcon"] ? import("../../composables/icons.js").IconValue : Defaults["firstIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    lastIcon: unknown extends Defaults["lastIcon"] ? {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["lastIcon"] ? import("../../composables/icons.js").IconValue : Defaults["lastIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["lastIcon"] ? import("../../composables/icons.js").IconValue : Defaults["lastIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    itemsPerPageText: unknown extends Defaults["itemsPerPageText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["itemsPerPageText"] ? string : string | Defaults["itemsPerPageText"]>;
        default: unknown extends Defaults["itemsPerPageText"] ? string : string | Defaults["itemsPerPageText"];
    };
    pageText: unknown extends Defaults["pageText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["pageText"] ? string : string | Defaults["pageText"]>;
        default: unknown extends Defaults["pageText"] ? string : string | Defaults["pageText"];
    };
    firstPageLabel: unknown extends Defaults["firstPageLabel"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["firstPageLabel"] ? string : string | Defaults["firstPageLabel"]>;
        default: unknown extends Defaults["firstPageLabel"] ? string : string | Defaults["firstPageLabel"];
    };
    prevPageLabel: unknown extends Defaults["prevPageLabel"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["prevPageLabel"] ? string : string | Defaults["prevPageLabel"]>;
        default: unknown extends Defaults["prevPageLabel"] ? string : string | Defaults["prevPageLabel"];
    };
    nextPageLabel: unknown extends Defaults["nextPageLabel"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["nextPageLabel"] ? string : string | Defaults["nextPageLabel"]>;
        default: unknown extends Defaults["nextPageLabel"] ? string : string | Defaults["nextPageLabel"];
    };
    lastPageLabel: unknown extends Defaults["lastPageLabel"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["lastPageLabel"] ? string : string | Defaults["lastPageLabel"]>;
        default: unknown extends Defaults["lastPageLabel"] ? string : string | Defaults["lastPageLabel"];
    };
    itemsPerPageOptions: unknown extends Defaults["itemsPerPageOptions"] ? {
        type: import("vue").PropType<readonly (number | {
            title: string;
            value: number;
        })[]>;
        default: () => {
            value: number;
            title: string;
        }[];
    } : Omit<{
        type: import("vue").PropType<readonly (number | {
            title: string;
            value: number;
        })[]>;
        default: () => {
            value: number;
            title: string;
        }[];
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["itemsPerPageOptions"] ? readonly (number | {
            title: string;
            value: number;
        })[] : readonly (number | {
            title: string;
            value: number;
        })[] | Defaults["itemsPerPageOptions"]>;
        default: unknown extends Defaults["itemsPerPageOptions"] ? readonly (number | {
            title: string;
            value: number;
        })[] : readonly (number | {
            title: string;
            value: number;
        })[] | Defaults["itemsPerPageOptions"];
    };
    showCurrentPage: unknown extends Defaults["showCurrentPage"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["showCurrentPage"] ? boolean : boolean | Defaults["showCurrentPage"]>;
        default: unknown extends Defaults["showCurrentPage"] ? boolean : boolean | Defaults["showCurrentPage"];
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
    height: unknown extends Defaults["height"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : Defaults["height"] | NonNullable<string | number>;
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
    hideDefaultFooter: unknown extends Defaults["hideDefaultFooter"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hideDefaultFooter"] ? boolean : boolean | Defaults["hideDefaultFooter"]>;
        default: unknown extends Defaults["hideDefaultFooter"] ? boolean : boolean | Defaults["hideDefaultFooter"];
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
    itemsLength: unknown extends Defaults["itemsLength"] ? {
        type: (NumberConstructor | StringConstructor)[];
        required: true;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        required: true;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["itemsLength"] ? string | number : string | number | Defaults["itemsLength"]>;
        default: unknown extends Defaults["itemsLength"] ? string | number : Defaults["itemsLength"] | NonNullable<string | number>;
    };
};
type ItemType<T> = T extends readonly (infer U)[] ? U : never;
export declare const VDataTableServer: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        mobile: boolean | null;
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
        page: string | number;
        itemsPerPage: string | number;
        prevIcon: import("../../composables/icons.js").IconValue;
        nextIcon: import("../../composables/icons.js").IconValue;
        firstIcon: import("../../composables/icons.js").IconValue;
        lastIcon: import("../../composables/icons.js").IconValue;
        itemsPerPageText: string;
        pageText: string;
        firstPageLabel: string;
        prevPageLabel: string;
        nextPageLabel: string;
        lastPageLabel: string;
        itemsPerPageOptions: readonly (number | {
            title: string;
            value: number;
        })[];
        showCurrentPage: boolean;
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
        hideDefaultFooter: boolean;
        hideDefaultHeader: boolean;
        itemsLength: string | number;
    } & {
        theme?: string | undefined;
        class?: any;
        mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
        customKeySort?: Record<string, import("../../types.js").DataTableCompareFunction> | undefined;
        valueComparator?: typeof import("../../util/index.js").deepEqual | undefined;
        loading?: string | boolean | undefined;
        color?: string | undefined;
        headerProps?: Record<string, any> | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        search?: string | undefined;
    } & {
        "onUpdate:expanded"?: ((options: any) => any) | undefined;
        "onUpdate:groupBy"?: ((value: any) => any) | undefined;
        "onUpdate:itemsPerPage"?: ((page: number) => any) | undefined;
        "onUpdate:options"?: ((options: any) => any) | undefined;
        "onUpdate:page"?: ((page: number) => any) | undefined;
        "onUpdate:sortBy"?: ((sortBy: any) => any) | undefined;
    }, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        "update:modelValue": (value: any[]) => true;
        "update:page": (page: number) => true;
        "update:itemsPerPage": (page: number) => true;
        "update:sortBy": (sortBy: any) => true;
        "update:options": (options: any) => true;
        "update:expanded": (options: any) => true;
        "update:groupBy": (value: any) => true;
    }, "$children" | "cellProps" | "headers" | "itemSelectable" | "itemValue" | "items" | "modelValue" | "rowProps" | "update:modelValue" | "v-slot:body" | "v-slot:body.append" | "v-slot:body.prepend" | "v-slot:bottom" | "v-slot:colgroup" | "v-slot:data-table-group" | "v-slot:data-table-select" | "v-slot:default" | "v-slot:expanded-row" | "v-slot:footer.prepend" | "v-slot:group-header" | "v-slot:group-summary" | "v-slot:headers" | "v-slot:item" | "v-slot:loader" | "v-slot:loading" | "v-slot:no-data" | "v-slot:tbody" | "v-slot:tfoot" | "v-slot:thead" | "v-slot:top" | "v-slots" | `v-slot:header.${string}` | `v-slot:item.${string}`>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        mobile: boolean | null;
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
        page: string | number;
        itemsPerPage: string | number;
        prevIcon: import("../../composables/icons.js").IconValue;
        nextIcon: import("../../composables/icons.js").IconValue;
        firstIcon: import("../../composables/icons.js").IconValue;
        lastIcon: import("../../composables/icons.js").IconValue;
        itemsPerPageText: string;
        pageText: string;
        firstPageLabel: string;
        prevPageLabel: string;
        nextPageLabel: string;
        lastPageLabel: string;
        itemsPerPageOptions: readonly (number | {
            title: string;
            value: number;
        })[];
        showCurrentPage: boolean;
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
        hideDefaultFooter: boolean;
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
        default: (arg: VDataTableSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        colgroup: (arg: VDataTableSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        top: (arg: VDataTableSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        body: (arg: VDataTableSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        tbody: (arg: VDataTableSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        thead: (arg: VDataTableSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        tfoot: (arg: VDataTableSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        bottom: (arg: VDataTableSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "body.prepend": (arg: VDataTableSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "body.append": (arg: VDataTableSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "footer.prepend": () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        page: string | number;
        itemsPerPage: string | number;
        prevIcon: import("../../composables/icons.js").IconValue;
        nextIcon: import("../../composables/icons.js").IconValue;
        firstIcon: import("../../composables/icons.js").IconValue;
        lastIcon: import("../../composables/icons.js").IconValue;
        itemsPerPageText: string;
        pageText: string;
        firstPageLabel: string;
        prevPageLabel: string;
        nextPageLabel: string;
        lastPageLabel: string;
        itemsPerPageOptions: readonly (number | {
            title: string;
            value: number;
        })[];
        showCurrentPage: boolean;
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
        hideDefaultFooter: boolean;
        hideDefaultHeader: boolean;
        itemsLength: string | number;
    } & {
        theme?: string | undefined;
        class?: any;
        mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
        customKeySort?: Record<string, import("../../types.js").DataTableCompareFunction> | undefined;
        valueComparator?: typeof import("../../util/index.js").deepEqual | undefined;
        loading?: string | boolean | undefined;
        color?: string | undefined;
        headerProps?: Record<string, any> | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        search?: string | undefined;
    } & {
        "onUpdate:expanded"?: ((options: any) => any) | undefined;
        "onUpdate:groupBy"?: ((value: any) => any) | undefined;
        "onUpdate:itemsPerPage"?: ((page: number) => any) | undefined;
        "onUpdate:options"?: ((options: any) => any) | undefined;
        "onUpdate:page"?: ((page: number) => any) | undefined;
        "onUpdate:sortBy"?: ((sortBy: any) => any) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        mobile: boolean | null;
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
        page: string | number;
        itemsPerPage: string | number;
        prevIcon: import("../../composables/icons.js").IconValue;
        nextIcon: import("../../composables/icons.js").IconValue;
        firstIcon: import("../../composables/icons.js").IconValue;
        lastIcon: import("../../composables/icons.js").IconValue;
        itemsPerPageText: string;
        pageText: string;
        firstPageLabel: string;
        prevPageLabel: string;
        nextPageLabel: string;
        lastPageLabel: string;
        itemsPerPageOptions: readonly (number | {
            title: string;
            value: number;
        })[];
        showCurrentPage: boolean;
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
        hideDefaultFooter: boolean;
        hideDefaultHeader: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    mobile: boolean | null;
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
    page: string | number;
    itemsPerPage: string | number;
    prevIcon: import("../../composables/icons.js").IconValue;
    nextIcon: import("../../composables/icons.js").IconValue;
    firstIcon: import("../../composables/icons.js").IconValue;
    lastIcon: import("../../composables/icons.js").IconValue;
    itemsPerPageText: string;
    pageText: string;
    firstPageLabel: string;
    prevPageLabel: string;
    nextPageLabel: string;
    lastPageLabel: string;
    itemsPerPageOptions: readonly (number | {
        title: string;
        value: number;
    })[];
    showCurrentPage: boolean;
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
    hideDefaultFooter: boolean;
    hideDefaultHeader: boolean;
    itemsLength: string | number;
} & {
    theme?: string | undefined;
    class?: any;
    mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
    customKeySort?: Record<string, import("../../types.js").DataTableCompareFunction> | undefined;
    valueComparator?: typeof import("../../util/index.js").deepEqual | undefined;
    loading?: string | boolean | undefined;
    color?: string | undefined;
    headerProps?: Record<string, any> | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
    search?: string | undefined;
} & {
    "onUpdate:expanded"?: ((options: any) => any) | undefined;
    "onUpdate:groupBy"?: ((value: any) => any) | undefined;
    "onUpdate:itemsPerPage"?: ((page: number) => any) | undefined;
    "onUpdate:options"?: ((options: any) => any) | undefined;
    "onUpdate:page"?: ((page: number) => any) | undefined;
    "onUpdate:sortBy"?: ((sortBy: any) => any) | undefined;
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
    "update:modelValue": (value: any[]) => true;
    "update:page": (page: number) => true;
    "update:itemsPerPage": (page: number) => true;
    "update:sortBy": (sortBy: any) => true;
    "update:options": (options: any) => true;
    "update:expanded": (options: any) => true;
    "update:groupBy": (value: any) => true;
}, "$children" | "cellProps" | "headers" | "itemSelectable" | "itemValue" | "items" | "modelValue" | "rowProps" | "update:modelValue" | "v-slot:body" | "v-slot:body.append" | "v-slot:body.prepend" | "v-slot:bottom" | "v-slot:colgroup" | "v-slot:data-table-group" | "v-slot:data-table-select" | "v-slot:default" | "v-slot:expanded-row" | "v-slot:footer.prepend" | "v-slot:group-header" | "v-slot:group-summary" | "v-slot:headers" | "v-slot:item" | "v-slot:loader" | "v-slot:loading" | "v-slot:no-data" | "v-slot:tbody" | "v-slot:tfoot" | "v-slot:thead" | "v-slot:top" | "v-slots" | `v-slot:header.${string}` | `v-slot:item.${string}`>, string, {
    style: import("vue").StyleValue;
    mobile: boolean | null;
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
    page: string | number;
    itemsPerPage: string | number;
    prevIcon: import("../../composables/icons.js").IconValue;
    nextIcon: import("../../composables/icons.js").IconValue;
    firstIcon: import("../../composables/icons.js").IconValue;
    lastIcon: import("../../composables/icons.js").IconValue;
    itemsPerPageText: string;
    pageText: string;
    firstPageLabel: string;
    prevPageLabel: string;
    nextPageLabel: string;
    lastPageLabel: string;
    itemsPerPageOptions: readonly (number | {
        title: string;
        value: number;
    })[];
    showCurrentPage: boolean;
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
    hideDefaultFooter: boolean;
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
    default: (arg: VDataTableSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    colgroup: (arg: VDataTableSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    top: (arg: VDataTableSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    body: (arg: VDataTableSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    tbody: (arg: VDataTableSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    thead: (arg: VDataTableSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    tfoot: (arg: VDataTableSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    bottom: (arg: VDataTableSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "body.prepend": (arg: VDataTableSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "body.append": (arg: VDataTableSlotProps<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "footer.prepend": () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
}, slots: VDataTableSlots<ItemType<T>>) => GenericProps<{
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
}, VDataTableSlots<ItemType<T>>>) & import("../../util/index.js").FilterPropsOptions<{
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
    page: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    itemsPerPage: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    prevIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    nextIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    firstIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    lastIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    itemsPerPageText: {
        type: StringConstructor;
        default: string;
    };
    pageText: {
        type: StringConstructor;
        default: string;
    };
    firstPageLabel: {
        type: StringConstructor;
        default: string;
    };
    prevPageLabel: {
        type: StringConstructor;
        default: string;
    };
    nextPageLabel: {
        type: StringConstructor;
        default: string;
    };
    lastPageLabel: {
        type: StringConstructor;
        default: string;
    };
    itemsPerPageOptions: {
        type: import("vue").PropType<readonly (number | {
            title: string;
            value: number;
        })[]>;
        default: () => {
            value: number;
            title: string;
        }[];
    };
    showCurrentPage: BooleanConstructor;
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
    height: (NumberConstructor | StringConstructor)[];
    hover: BooleanConstructor;
    striped: {
        type: import("vue").PropType<import("../VTable/VTable.js").Striped>;
        default: null;
        validator: (v: any) => boolean;
    };
    hideDefaultBody: BooleanConstructor;
    hideDefaultFooter: BooleanConstructor;
    hideDefaultHeader: BooleanConstructor;
    width: (NumberConstructor | StringConstructor)[];
    search: StringConstructor;
    itemsLength: {
        type: (NumberConstructor | StringConstructor)[];
        required: true;
    };
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
    page: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    itemsPerPage: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    prevIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    nextIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    firstIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    lastIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    itemsPerPageText: {
        type: StringConstructor;
        default: string;
    };
    pageText: {
        type: StringConstructor;
        default: string;
    };
    firstPageLabel: {
        type: StringConstructor;
        default: string;
    };
    prevPageLabel: {
        type: StringConstructor;
        default: string;
    };
    nextPageLabel: {
        type: StringConstructor;
        default: string;
    };
    lastPageLabel: {
        type: StringConstructor;
        default: string;
    };
    itemsPerPageOptions: {
        type: import("vue").PropType<readonly (number | {
            title: string;
            value: number;
        })[]>;
        default: () => {
            value: number;
            title: string;
        }[];
    };
    showCurrentPage: BooleanConstructor;
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
    height: (NumberConstructor | StringConstructor)[];
    hover: BooleanConstructor;
    striped: {
        type: import("vue").PropType<import("../VTable/VTable.js").Striped>;
        default: null;
        validator: (v: any) => boolean;
    };
    hideDefaultBody: BooleanConstructor;
    hideDefaultFooter: BooleanConstructor;
    hideDefaultHeader: BooleanConstructor;
    width: (NumberConstructor | StringConstructor)[];
    search: StringConstructor;
    itemsLength: {
        type: (NumberConstructor | StringConstructor)[];
        required: true;
    };
}>>;
export type VDataTableServer = InstanceType<typeof VDataTableServer>;

