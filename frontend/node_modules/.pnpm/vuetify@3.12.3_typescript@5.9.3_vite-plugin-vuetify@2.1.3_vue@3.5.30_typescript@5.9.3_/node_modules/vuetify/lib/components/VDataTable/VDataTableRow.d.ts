import { IconValue } from '../../composables/icons.js';
// Types
import type { PropType } from 'vue';
import type { CellProps, DataTableItem, ItemKeySlot } from './types.js';
import type { VDataTableHeaderCellColumnSlotProps } from './VDataTableHeaders.js';
import type { GenericProps } from '../../util/index.js';
export type VDataTableItemCellColumnSlotProps<T> = Omit<ItemKeySlot<T>, 'value'> & {
    props: Record<string, unknown>;
};
export type VDataTableRowSlots<T> = {
    'item.data-table-select': VDataTableItemCellColumnSlotProps<T>;
    'item.data-table-expand': VDataTableItemCellColumnSlotProps<T>;
    'header.data-table-select': VDataTableHeaderCellColumnSlotProps;
    'header.data-table-expand': VDataTableHeaderCellColumnSlotProps;
} & {
    [key: `item.${string}`]: ItemKeySlot<T>;
    [key: `header.${string}`]: VDataTableHeaderCellColumnSlotProps;
};
export declare const makeVDataTableRowProps: <Defaults extends {
    mobile?: unknown;
    mobileBreakpoint?: unknown;
    density?: unknown;
    color?: unknown;
    index?: unknown;
    item?: unknown;
    cellProps?: unknown;
    collapseIcon?: unknown;
    expandIcon?: unknown;
    onClick?: unknown;
    onContextmenu?: unknown;
    onDblclick?: unknown;
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
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    index: unknown extends Defaults["index"] ? NumberConstructor : {
        type: PropType<unknown extends Defaults["index"] ? number : number | Defaults["index"]>;
        default: unknown extends Defaults["index"] ? number : number | Defaults["index"];
    };
    item: unknown extends Defaults["item"] ? PropType<DataTableItem<any>> : {
        type: PropType<unknown extends Defaults["item"] ? DataTableItem<any> : DataTableItem<any> | Defaults["item"]>;
        default: unknown extends Defaults["item"] ? DataTableItem<any> : DataTableItem<any> | Defaults["item"];
    };
    cellProps: unknown extends Defaults["cellProps"] ? PropType<CellProps<any>> : {
        type: PropType<unknown extends Defaults["cellProps"] ? CellProps<any> : Defaults["cellProps"] | CellProps<any>>;
        default: unknown extends Defaults["cellProps"] ? CellProps<any> : Defaults["cellProps"] | NonNullable<CellProps<any>>;
    };
    collapseIcon: unknown extends Defaults["collapseIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["collapseIcon"] ? IconValue : Defaults["collapseIcon"] | IconValue>;
        default: unknown extends Defaults["collapseIcon"] ? IconValue : Defaults["collapseIcon"] | NonNullable<IconValue>;
    };
    expandIcon: unknown extends Defaults["expandIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["expandIcon"] ? IconValue : Defaults["expandIcon"] | IconValue>;
        default: unknown extends Defaults["expandIcon"] ? IconValue : Defaults["expandIcon"] | NonNullable<IconValue>;
    };
    onClick: unknown extends Defaults["onClick"] ? PropType<(args_0: MouseEvent) => void> : {
        type: PropType<unknown extends Defaults["onClick"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick"]>;
        default: unknown extends Defaults["onClick"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick"];
    };
    onContextmenu: unknown extends Defaults["onContextmenu"] ? PropType<(args_0: MouseEvent) => void> : {
        type: PropType<unknown extends Defaults["onContextmenu"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onContextmenu"]>;
        default: unknown extends Defaults["onContextmenu"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onContextmenu"];
    };
    onDblclick: unknown extends Defaults["onDblclick"] ? PropType<(args_0: MouseEvent) => void> : {
        type: PropType<unknown extends Defaults["onDblclick"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onDblclick"]>;
        default: unknown extends Defaults["onDblclick"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onDblclick"];
    };
};
export declare const VDataTableRow: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        mobile: boolean | null;
        density: import("../../composables/density.js").Density;
        collapseIcon: IconValue;
        expandIcon: IconValue;
    } & {
        mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
        color?: string | undefined;
        index?: number | undefined;
        onClick?: ((args_0: MouseEvent) => void) | undefined;
        onContextmenu?: ((args_0: MouseEvent) => void) | undefined;
        onDblclick?: ((args_0: MouseEvent) => void) | undefined;
    }, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<Record<string, any>, "$children" | "cellProps" | "item" | "v-slots" | `v-slot:header.${string}` | `v-slot:item.${string}`>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        mobile: boolean | null;
        density: import("../../composables/density.js").Density;
        collapseIcon: IconValue;
        expandIcon: IconValue;
    }, true, {}, import("vue").SlotsType<Partial<{
        [x: `item.${string}`]: (arg: ItemKeySlot<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        [x: `header.${string}`]: (arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "item.data-table-select": (arg: VDataTableItemCellColumnSlotProps<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "item.data-table-expand": (arg: VDataTableItemCellColumnSlotProps<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "header.data-table-select": (arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "header.data-table-expand": (arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        collapseIcon: IconValue;
        expandIcon: IconValue;
    } & {
        mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
        color?: string | undefined;
        index?: number | undefined;
        onClick?: ((args_0: MouseEvent) => void) | undefined;
        onContextmenu?: ((args_0: MouseEvent) => void) | undefined;
        onDblclick?: ((args_0: MouseEvent) => void) | undefined;
    }, {}, {}, {}, {}, {
        mobile: boolean | null;
        density: import("../../composables/density.js").Density;
        collapseIcon: IconValue;
        expandIcon: IconValue;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    mobile: boolean | null;
    density: import("../../composables/density.js").Density;
    collapseIcon: IconValue;
    expandIcon: IconValue;
} & {
    mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
    color?: string | undefined;
    index?: number | undefined;
    onClick?: ((args_0: MouseEvent) => void) | undefined;
    onContextmenu?: ((args_0: MouseEvent) => void) | undefined;
    onDblclick?: ((args_0: MouseEvent) => void) | undefined;
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<Record<string, any>, "$children" | "cellProps" | "item" | "v-slots" | `v-slot:header.${string}` | `v-slot:item.${string}`>, string, {
    mobile: boolean | null;
    density: import("../../composables/density.js").Density;
    collapseIcon: IconValue;
    expandIcon: IconValue;
}, {}, string, import("vue").SlotsType<Partial<{
    [x: `item.${string}`]: (arg: ItemKeySlot<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    [x: `header.${string}`]: (arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "item.data-table-select": (arg: VDataTableItemCellColumnSlotProps<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "item.data-table-expand": (arg: VDataTableItemCellColumnSlotProps<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "header.data-table-select": (arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "header.data-table-expand": (arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T>(props: {
    item?: DataTableItem<T> | undefined;
    cellProps?: CellProps<T> | undefined;
}, slots: VDataTableRowSlots<T>) => GenericProps<{
    item?: DataTableItem<T> | undefined;
    cellProps?: CellProps<T> | undefined;
}, VDataTableRowSlots<T>>) & import("../../util/index.js").FilterPropsOptions<{
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
    color: StringConstructor;
    index: NumberConstructor;
    item: PropType<DataTableItem<any>>;
    cellProps: PropType<CellProps<any>>;
    collapseIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    expandIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    onClick: PropType<(args_0: MouseEvent) => void>;
    onContextmenu: PropType<(args_0: MouseEvent) => void>;
    onDblclick: PropType<(args_0: MouseEvent) => void>;
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
    color: StringConstructor;
    index: NumberConstructor;
    item: PropType<DataTableItem<any>>;
    cellProps: PropType<CellProps<any>>;
    collapseIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    expandIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    onClick: PropType<(args_0: MouseEvent) => void>;
    onContextmenu: PropType<(args_0: MouseEvent) => void>;
    onDblclick: PropType<(args_0: MouseEvent) => void>;
}>>;
export type VDataTableRow = InstanceType<typeof VDataTableRow>;
