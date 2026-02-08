import { IconValue } from '../../composables/icons.js';
// Types
import type { PropType, UnwrapRef } from 'vue';
import type { provideSelection } from './composables/select.js';
import type { provideSort } from './composables/sort.js';
import type { InternalDataTableHeader } from './types.js';
import type { LoaderSlotProps } from '../../composables/loader.js';
export type HeadersSlotProps = {
    headers: InternalDataTableHeader[][];
    columns: InternalDataTableHeader[];
    sortBy: UnwrapRef<ReturnType<typeof provideSort>['sortBy']>;
    someSelected: UnwrapRef<ReturnType<typeof provideSelection>['someSelected']>;
    allSelected: UnwrapRef<ReturnType<typeof provideSelection>['allSelected']>;
    toggleSort: ReturnType<typeof provideSort>['toggleSort'];
    selectAll: ReturnType<typeof provideSelection>['selectAll'];
    getSortIcon: (column: InternalDataTableHeader) => IconValue;
    isSorted: ReturnType<typeof provideSort>['isSorted'];
};
export type VDataTableHeaderCellColumnSlotProps = {
    column: InternalDataTableHeader;
    selectAll: ReturnType<typeof provideSelection>['selectAll'];
    isSorted: ReturnType<typeof provideSort>['isSorted'];
    toggleSort: ReturnType<typeof provideSort>['toggleSort'];
    sortBy: UnwrapRef<ReturnType<typeof provideSort>['sortBy']>;
    someSelected: UnwrapRef<ReturnType<typeof provideSelection>['someSelected']>;
    allSelected: UnwrapRef<ReturnType<typeof provideSelection>['allSelected']>;
    getSortIcon: (column: InternalDataTableHeader) => IconValue;
};
export type VDataTableHeadersSlots = {
    headers: HeadersSlotProps;
    loader: LoaderSlotProps;
    'header.data-table-select': VDataTableHeaderCellColumnSlotProps;
    'header.data-table-expand': VDataTableHeaderCellColumnSlotProps;
} & {
    [key: `header.${string}`]: VDataTableHeaderCellColumnSlotProps;
};
export declare const makeVDataTableHeadersProps: <Defaults extends {
    mobile?: unknown;
    mobileBreakpoint?: unknown;
    density?: unknown;
    loading?: unknown;
    color?: unknown;
    disableSort?: unknown;
    fixedHeader?: unknown;
    multiSort?: unknown;
    sortAscIcon?: unknown;
    sortDescIcon?: unknown;
    headerProps?: unknown;
    sticky?: unknown;
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
    loading: unknown extends Defaults["loading"] ? (BooleanConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["loading"] ? string | boolean : string | boolean | Defaults["loading"]>;
        default: unknown extends Defaults["loading"] ? string | boolean : Defaults["loading"] | NonNullable<string | boolean>;
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    disableSort: unknown extends Defaults["disableSort"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disableSort"] ? boolean : boolean | Defaults["disableSort"]>;
        default: unknown extends Defaults["disableSort"] ? boolean : boolean | Defaults["disableSort"];
    };
    fixedHeader: unknown extends Defaults["fixedHeader"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["fixedHeader"] ? boolean : boolean | Defaults["fixedHeader"]>;
        default: unknown extends Defaults["fixedHeader"] ? boolean : boolean | Defaults["fixedHeader"];
    };
    multiSort: unknown extends Defaults["multiSort"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["multiSort"] ? boolean : boolean | Defaults["multiSort"]>;
        default: unknown extends Defaults["multiSort"] ? boolean : boolean | Defaults["multiSort"];
    };
    sortAscIcon: unknown extends Defaults["sortAscIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["sortAscIcon"] ? IconValue : Defaults["sortAscIcon"] | IconValue>;
        default: unknown extends Defaults["sortAscIcon"] ? IconValue : Defaults["sortAscIcon"] | NonNullable<IconValue>;
    };
    sortDescIcon: unknown extends Defaults["sortDescIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["sortDescIcon"] ? IconValue : Defaults["sortDescIcon"] | IconValue>;
        default: unknown extends Defaults["sortDescIcon"] ? IconValue : Defaults["sortDescIcon"] | NonNullable<IconValue>;
    };
    headerProps: unknown extends Defaults["headerProps"] ? {
        type: PropType<Record<string, any>>;
    } : Omit<{
        type: PropType<Record<string, any>>;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["headerProps"] ? Record<string, any> : Record<string, any> | Defaults["headerProps"]>;
        default: unknown extends Defaults["headerProps"] ? Record<string, any> : Record<string, any> | Defaults["headerProps"];
    };
    sticky: unknown extends Defaults["sticky"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["sticky"] ? boolean : boolean | Defaults["sticky"]>;
        default: unknown extends Defaults["sticky"] ? boolean : boolean | Defaults["sticky"];
    };
};
export declare const VDataTableHeaders: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        mobile: boolean | null;
        density: import("../../composables/density.js").Density;
        disableSort: boolean;
        fixedHeader: boolean;
        multiSort: boolean;
        sortAscIcon: IconValue;
        sortDescIcon: IconValue;
        sticky: boolean;
    } & {
        mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
        loading?: string | boolean | undefined;
        color?: string | undefined;
        headerProps?: Record<string, any> | undefined;
    } & {
        $children?: {
            [x: `header.${string}`]: ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
            headers?: ((arg: HeadersSlotProps) => import("vue").VNodeChild) | undefined;
            loader?: ((arg: LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            "header.data-table-select"?: ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
            "header.data-table-expand"?: ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | {} | import("vue").VNodeChild;
        "v-slots"?: {
            [x: `header.${string}`]: false | ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
            headers?: false | ((arg: HeadersSlotProps) => import("vue").VNodeChild) | undefined;
            loader?: false | ((arg: LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            "header.data-table-select"?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
            "header.data-table-expand"?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        [x: `v-slot:header.${string}`]: false | ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:header.data-table-expand"?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:header.data-table-select"?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:headers"?: false | ((arg: HeadersSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: LoaderSlotProps) => import("vue").VNodeChild) | undefined;
    }, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        mobile: boolean | null;
        density: import("../../composables/density.js").Density;
        disableSort: boolean;
        fixedHeader: boolean;
        multiSort: boolean;
        sortAscIcon: IconValue;
        sortDescIcon: IconValue;
        sticky: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        [x: `header.${string}`]: (arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        headers: (arg: HeadersSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        loader: (arg: LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        disableSort: boolean;
        fixedHeader: boolean;
        multiSort: boolean;
        sortAscIcon: IconValue;
        sortDescIcon: IconValue;
        sticky: boolean;
    } & {
        mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
        loading?: string | boolean | undefined;
        color?: string | undefined;
        headerProps?: Record<string, any> | undefined;
    } & {
        $children?: {
            [x: `header.${string}`]: ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
            headers?: ((arg: HeadersSlotProps) => import("vue").VNodeChild) | undefined;
            loader?: ((arg: LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            "header.data-table-select"?: ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
            "header.data-table-expand"?: ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | {} | import("vue").VNodeChild;
        "v-slots"?: {
            [x: `header.${string}`]: false | ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
            headers?: false | ((arg: HeadersSlotProps) => import("vue").VNodeChild) | undefined;
            loader?: false | ((arg: LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            "header.data-table-select"?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
            "header.data-table-expand"?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        [x: `v-slot:header.${string}`]: false | ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:header.data-table-expand"?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:header.data-table-select"?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:headers"?: false | ((arg: HeadersSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: LoaderSlotProps) => import("vue").VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        mobile: boolean | null;
        density: import("../../composables/density.js").Density;
        disableSort: boolean;
        fixedHeader: boolean;
        multiSort: boolean;
        sortAscIcon: IconValue;
        sortDescIcon: IconValue;
        sticky: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    mobile: boolean | null;
    density: import("../../composables/density.js").Density;
    disableSort: boolean;
    fixedHeader: boolean;
    multiSort: boolean;
    sortAscIcon: IconValue;
    sortDescIcon: IconValue;
    sticky: boolean;
} & {
    mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
    loading?: string | boolean | undefined;
    color?: string | undefined;
    headerProps?: Record<string, any> | undefined;
} & {
    $children?: {
        [x: `header.${string}`]: ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
        headers?: ((arg: HeadersSlotProps) => import("vue").VNodeChild) | undefined;
        loader?: ((arg: LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        "header.data-table-select"?: ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
        "header.data-table-expand"?: ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | {} | import("vue").VNodeChild;
    "v-slots"?: {
        [x: `header.${string}`]: false | ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
        headers?: false | ((arg: HeadersSlotProps) => import("vue").VNodeChild) | undefined;
        loader?: false | ((arg: LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        "header.data-table-select"?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
        "header.data-table-expand"?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    [x: `v-slot:header.${string}`]: false | ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
    "v-slot:header.data-table-expand"?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
    "v-slot:header.data-table-select"?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
    "v-slot:headers"?: false | ((arg: HeadersSlotProps) => import("vue").VNodeChild) | undefined;
    "v-slot:loader"?: false | ((arg: LoaderSlotProps) => import("vue").VNodeChild) | undefined;
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    mobile: boolean | null;
    density: import("../../composables/density.js").Density;
    disableSort: boolean;
    fixedHeader: boolean;
    multiSort: boolean;
    sortAscIcon: IconValue;
    sortDescIcon: IconValue;
    sticky: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    [x: `header.${string}`]: (arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    headers: (arg: HeadersSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    loader: (arg: LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "header.data-table-select": (arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "header.data-table-expand": (arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
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
    loading: (BooleanConstructor | StringConstructor)[];
    color: StringConstructor;
    disableSort: BooleanConstructor;
    fixedHeader: BooleanConstructor;
    multiSort: BooleanConstructor;
    sortAscIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    sortDescIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    headerProps: {
        type: PropType<Record<string, any>>;
    };
    sticky: BooleanConstructor;
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
    loading: (BooleanConstructor | StringConstructor)[];
    color: StringConstructor;
    disableSort: BooleanConstructor;
    fixedHeader: BooleanConstructor;
    multiSort: BooleanConstructor;
    sortAscIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    sortDescIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    headerProps: {
        type: PropType<Record<string, any>>;
    };
    sticky: BooleanConstructor;
}>>;
export type VDataTableHeaders = InstanceType<typeof VDataTableHeaders>;
