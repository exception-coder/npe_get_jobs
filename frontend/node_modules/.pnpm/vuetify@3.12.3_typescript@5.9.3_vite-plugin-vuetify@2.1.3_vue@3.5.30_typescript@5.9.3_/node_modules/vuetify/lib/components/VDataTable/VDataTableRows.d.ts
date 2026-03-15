// Types
import type { PropType } from 'vue';
import type { Group, GroupSummary } from './composables/group.js';
import type { CellProps, DataTableItem, GroupHeaderSlot, GroupSummarySlot, ItemSlot, RowProps } from './types.js';
import type { VDataTableGroupHeaderRowSlots } from './VDataTableGroupHeaderRow.js';
import type { VDataTableRowSlots } from './VDataTableRow.js';
import type { GenericProps } from '../../util/index.js';
export type VDataTableRowsSlots<T> = VDataTableGroupHeaderRowSlots & VDataTableRowSlots<T> & {
    item: ItemSlot<T> & {
        props: Record<string, any>;
    };
    loading: never;
    'group-header': GroupHeaderSlot;
    'group-summary': GroupSummarySlot;
    'no-data': never;
    'expanded-row': ItemSlot<T>;
};
export declare const makeVDataTableRowsProps: <Defaults extends {
    mobile?: unknown;
    mobileBreakpoint?: unknown;
    density?: unknown;
    groupCollapseIcon?: unknown;
    groupExpandIcon?: unknown;
    collapseIcon?: unknown;
    expandIcon?: unknown;
    color?: unknown;
    loading?: unknown;
    loadingText?: unknown;
    hideNoData?: unknown;
    items?: unknown;
    noDataText?: unknown;
    rowProps?: unknown;
    cellProps?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    mobile: unknown extends Defaults["mobile"] ? {
        type: PropType<boolean | null>;
        default: boolean;
    } : Omit<{
        type: PropType<boolean | null>;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["mobile"] ? boolean | null : boolean | Defaults["mobile"] | null>;
        default: unknown extends Defaults["mobile"] ? boolean | null : Defaults["mobile"] | NonNullable<boolean | null>;
    };
    mobileBreakpoint: unknown extends Defaults["mobileBreakpoint"] ? PropType<number | import("../../types.js").DisplayBreakpoint> : {
        type: PropType<unknown extends Defaults["mobileBreakpoint"] ? number | import("../../types.js").DisplayBreakpoint : number | Defaults["mobileBreakpoint"] | import("../../types.js").DisplayBreakpoint>;
        default: unknown extends Defaults["mobileBreakpoint"] ? number | import("../../types.js").DisplayBreakpoint : Defaults["mobileBreakpoint"] | NonNullable<number | import("../../types.js").DisplayBreakpoint>;
    };
    density: unknown extends Defaults["density"] ? {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["density"] ? import("../../composables/density.js").Density : Defaults["density"] | import("../../composables/density.js").Density>;
        default: unknown extends Defaults["density"] ? import("../../composables/density.js").Density : Defaults["density"] | NonNullable<import("../../composables/density.js").Density>;
    };
    groupCollapseIcon: unknown extends Defaults["groupCollapseIcon"] ? {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["groupCollapseIcon"] ? import("../../composables/icons.js").IconValue : Defaults["groupCollapseIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["groupCollapseIcon"] ? import("../../composables/icons.js").IconValue : Defaults["groupCollapseIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    groupExpandIcon: unknown extends Defaults["groupExpandIcon"] ? {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["groupExpandIcon"] ? import("../../composables/icons.js").IconValue : Defaults["groupExpandIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["groupExpandIcon"] ? import("../../composables/icons.js").IconValue : Defaults["groupExpandIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    collapseIcon: unknown extends Defaults["collapseIcon"] ? {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["collapseIcon"] ? import("../../composables/icons.js").IconValue : Defaults["collapseIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["collapseIcon"] ? import("../../composables/icons.js").IconValue : Defaults["collapseIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    expandIcon: unknown extends Defaults["expandIcon"] ? {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["expandIcon"] ? import("../../composables/icons.js").IconValue : Defaults["expandIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["expandIcon"] ? import("../../composables/icons.js").IconValue : Defaults["expandIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    loading: unknown extends Defaults["loading"] ? (BooleanConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["loading"] ? string | boolean : string | boolean | Defaults["loading"]>;
        default: unknown extends Defaults["loading"] ? string | boolean : Defaults["loading"] | NonNullable<string | boolean>;
    };
    loadingText: unknown extends Defaults["loadingText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["loadingText"] ? string : string | Defaults["loadingText"]>;
        default: unknown extends Defaults["loadingText"] ? string : string | Defaults["loadingText"];
    };
    hideNoData: unknown extends Defaults["hideNoData"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideNoData"] ? boolean : boolean | Defaults["hideNoData"]>;
        default: unknown extends Defaults["hideNoData"] ? boolean : boolean | Defaults["hideNoData"];
    };
    items: unknown extends Defaults["items"] ? {
        type: PropType<readonly (DataTableItem<any> | Group<any> | GroupSummary<any>)[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<readonly (DataTableItem<any> | Group<any> | GroupSummary<any>)[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["items"] ? readonly (DataTableItem<any> | Group<any> | GroupSummary<any>)[] : readonly (DataTableItem<any> | Group<any> | GroupSummary<any>)[] | Defaults["items"]>;
        default: unknown extends Defaults["items"] ? readonly (DataTableItem<any> | Group<any> | GroupSummary<any>)[] : readonly (DataTableItem<any> | Group<any> | GroupSummary<any>)[] | Defaults["items"];
    };
    noDataText: unknown extends Defaults["noDataText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["noDataText"] ? string : string | Defaults["noDataText"]>;
        default: unknown extends Defaults["noDataText"] ? string : string | Defaults["noDataText"];
    };
    rowProps: unknown extends Defaults["rowProps"] ? PropType<RowProps<any>> : {
        type: PropType<unknown extends Defaults["rowProps"] ? RowProps<any> : Defaults["rowProps"] | RowProps<any>>;
        default: unknown extends Defaults["rowProps"] ? RowProps<any> : Defaults["rowProps"] | NonNullable<RowProps<any>>;
    };
    cellProps: unknown extends Defaults["cellProps"] ? PropType<CellProps<any>> : {
        type: PropType<unknown extends Defaults["cellProps"] ? CellProps<any> : Defaults["cellProps"] | CellProps<any>>;
        default: unknown extends Defaults["cellProps"] ? CellProps<any> : Defaults["cellProps"] | NonNullable<CellProps<any>>;
    };
};
export declare const VDataTableRows: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        mobile: boolean | null;
        density: import("../../composables/density.js").Density;
        groupCollapseIcon: import("../../composables/icons.js").IconValue;
        groupExpandIcon: import("../../composables/icons.js").IconValue;
        collapseIcon: import("../../composables/icons.js").IconValue;
        expandIcon: import("../../composables/icons.js").IconValue;
        loadingText: string;
        hideNoData: boolean;
        noDataText: string;
    } & {
        mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        rowProps?: RowProps<any> | undefined;
        cellProps?: CellProps<any> | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<Record<string, any>, "$children" | "items" | "v-slot:data-table-group" | "v-slot:data-table-select" | "v-slot:expanded-row" | "v-slot:group-header" | "v-slot:group-summary" | "v-slot:item" | "v-slot:loading" | "v-slot:no-data" | "v-slots" | `v-slot:header.${string}` | `v-slot:item.${string}`>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        mobile: boolean | null;
        density: import("../../composables/density.js").Density;
        groupCollapseIcon: import("../../composables/icons.js").IconValue;
        groupExpandIcon: import("../../composables/icons.js").IconValue;
        collapseIcon: import("../../composables/icons.js").IconValue;
        expandIcon: import("../../composables/icons.js").IconValue;
        loadingText: string;
        hideNoData: boolean;
        noDataText: string;
    }, true, {}, import("vue").SlotsType<Partial<{
        [x: `item.${string}`]: (arg: import("./types.js").ItemKeySlot<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        [x: `header.${string}`]: (arg: import("./VDataTableHeaders.js").VDataTableHeaderCellColumnSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "data-table-group": (arg: {
            item: Group<any>;
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
        "item.data-table-select": (arg: import("./VDataTableRow.js").VDataTableItemCellColumnSlotProps<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "item.data-table-expand": (arg: import("./VDataTableRow.js").VDataTableItemCellColumnSlotProps<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
            item: unknown;
            internalItem: DataTableItem<unknown>;
            isExpanded: (item: DataTableItem<any>) => boolean;
            toggleExpand: (item: DataTableItem<any>) => void;
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
        "group-header": (arg: GroupHeaderSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "group-summary": (arg: GroupSummarySlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "no-data": () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "expanded-row": (arg: ItemSlot<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        mobile: boolean | null;
        density: import("../../composables/density.js").Density;
        groupCollapseIcon: import("../../composables/icons.js").IconValue;
        groupExpandIcon: import("../../composables/icons.js").IconValue;
        collapseIcon: import("../../composables/icons.js").IconValue;
        expandIcon: import("../../composables/icons.js").IconValue;
        loadingText: string;
        hideNoData: boolean;
        noDataText: string;
    } & {
        mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        rowProps?: RowProps<any> | undefined;
        cellProps?: CellProps<any> | undefined;
    }, {}, {}, {}, {}, {
        mobile: boolean | null;
        density: import("../../composables/density.js").Density;
        groupCollapseIcon: import("../../composables/icons.js").IconValue;
        groupExpandIcon: import("../../composables/icons.js").IconValue;
        collapseIcon: import("../../composables/icons.js").IconValue;
        expandIcon: import("../../composables/icons.js").IconValue;
        loadingText: string;
        hideNoData: boolean;
        noDataText: string;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    mobile: boolean | null;
    density: import("../../composables/density.js").Density;
    groupCollapseIcon: import("../../composables/icons.js").IconValue;
    groupExpandIcon: import("../../composables/icons.js").IconValue;
    collapseIcon: import("../../composables/icons.js").IconValue;
    expandIcon: import("../../composables/icons.js").IconValue;
    loadingText: string;
    hideNoData: boolean;
    noDataText: string;
} & {
    mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
    color?: string | undefined;
    loading?: string | boolean | undefined;
    rowProps?: RowProps<any> | undefined;
    cellProps?: CellProps<any> | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<Record<string, any>, "$children" | "items" | "v-slot:data-table-group" | "v-slot:data-table-select" | "v-slot:expanded-row" | "v-slot:group-header" | "v-slot:group-summary" | "v-slot:item" | "v-slot:loading" | "v-slot:no-data" | "v-slots" | `v-slot:header.${string}` | `v-slot:item.${string}`>, string, {
    mobile: boolean | null;
    density: import("../../composables/density.js").Density;
    groupCollapseIcon: import("../../composables/icons.js").IconValue;
    groupExpandIcon: import("../../composables/icons.js").IconValue;
    collapseIcon: import("../../composables/icons.js").IconValue;
    expandIcon: import("../../composables/icons.js").IconValue;
    loadingText: string;
    hideNoData: boolean;
    noDataText: string;
}, {}, string, import("vue").SlotsType<Partial<{
    [x: `item.${string}`]: (arg: import("./types.js").ItemKeySlot<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    [x: `header.${string}`]: (arg: import("./VDataTableHeaders.js").VDataTableHeaderCellColumnSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "data-table-group": (arg: {
        item: Group<any>;
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
    "item.data-table-select": (arg: import("./VDataTableRow.js").VDataTableItemCellColumnSlotProps<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "item.data-table-expand": (arg: import("./VDataTableRow.js").VDataTableItemCellColumnSlotProps<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        item: unknown;
        internalItem: DataTableItem<unknown>;
        isExpanded: (item: DataTableItem<any>) => boolean;
        toggleExpand: (item: DataTableItem<any>) => void;
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
    "group-header": (arg: GroupHeaderSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "group-summary": (arg: GroupSummarySlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "no-data": () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "expanded-row": (arg: ItemSlot<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T>(props: {
    items?: readonly (DataTableItem<T> | Group<T> | GroupSummary<T>)[] | undefined;
}, slots: VDataTableRowsSlots<T>) => GenericProps<{
    items?: readonly (DataTableItem<T> | Group<T> | GroupSummary<T>)[] | undefined;
}, VDataTableRowsSlots<T>>) & import("../../util/index.js").FilterPropsOptions<{
    mobile: {
        type: PropType<boolean | null>;
        default: boolean;
    };
    mobileBreakpoint: PropType<number | import("../../types.js").DisplayBreakpoint>;
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    groupCollapseIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    groupExpandIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    collapseIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    expandIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    color: StringConstructor;
    loading: (BooleanConstructor | StringConstructor)[];
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    hideNoData: BooleanConstructor;
    items: {
        type: PropType<readonly (DataTableItem<any> | Group<any> | GroupSummary<any>)[]>;
        default: () => never[];
    };
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    rowProps: PropType<RowProps<any>>;
    cellProps: PropType<CellProps<any>>;
}, import("vue").ExtractPropTypes<{
    mobile: {
        type: PropType<boolean | null>;
        default: boolean;
    };
    mobileBreakpoint: PropType<number | import("../../types.js").DisplayBreakpoint>;
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    groupCollapseIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    groupExpandIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    collapseIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    expandIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    color: StringConstructor;
    loading: (BooleanConstructor | StringConstructor)[];
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    hideNoData: BooleanConstructor;
    items: {
        type: PropType<readonly (DataTableItem<any> | Group<any> | GroupSummary<any>)[]>;
        default: () => never[];
    };
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    rowProps: PropType<RowProps<any>>;
    cellProps: PropType<CellProps<any>>;
}>>;
export type VDataTableRows = InstanceType<typeof VDataTableRows>;
