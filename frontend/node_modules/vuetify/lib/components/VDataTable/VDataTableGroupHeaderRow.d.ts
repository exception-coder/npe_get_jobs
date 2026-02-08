import { IconValue } from '../../composables/icons.js';
// Types
import type { PropType } from 'vue';
import type { Group } from './composables/group.js';
export type VDataTableGroupHeaderRowSlots = {
    'data-table-group': {
        item: Group;
        count: number;
        props: Record<string, unknown>;
    };
    'data-table-select': {
        props: Record<string, unknown>;
    };
};
export declare const makeVDataTableGroupHeaderRowProps: <Defaults extends {
    density?: unknown;
    item?: unknown;
    groupCollapseIcon?: unknown;
    groupExpandIcon?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
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
    item: unknown extends Defaults["item"] ? {
        type: PropType<Group<any>>;
        required: true;
    } : Omit<{
        type: PropType<Group<any>>;
        required: true;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["item"] ? Group<any> : Group<any> | Defaults["item"]>;
        default: unknown extends Defaults["item"] ? Group<any> : Group<any> | Defaults["item"];
    };
    groupCollapseIcon: unknown extends Defaults["groupCollapseIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["groupCollapseIcon"] ? IconValue : Defaults["groupCollapseIcon"] | IconValue>;
        default: unknown extends Defaults["groupCollapseIcon"] ? IconValue : Defaults["groupCollapseIcon"] | NonNullable<IconValue>;
    };
    groupExpandIcon: unknown extends Defaults["groupExpandIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["groupExpandIcon"] ? IconValue : Defaults["groupExpandIcon"] | IconValue>;
        default: unknown extends Defaults["groupExpandIcon"] ? IconValue : Defaults["groupExpandIcon"] | NonNullable<IconValue>;
    };
};
export declare const VDataTableGroupHeaderRow: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        density: import("../../composables/density.js").Density;
        item: Group<any>;
        groupCollapseIcon: IconValue;
        groupExpandIcon: IconValue;
    } & {} & {
        $children?: {
            "data-table-group"?: ((arg: {
                item: Group<any>;
                count: number;
                props: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
            "data-table-select"?: ((arg: {
                props: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | {} | import("vue").VNodeChild;
        "v-slots"?: {
            "data-table-group"?: false | ((arg: {
                item: Group<any>;
                count: number;
                props: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
            "data-table-select"?: false | ((arg: {
                props: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:data-table-group"?: false | ((arg: {
            item: Group<any>;
            count: number;
            props: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:data-table-select"?: false | ((arg: {
            props: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        density: import("../../composables/density.js").Density;
        groupCollapseIcon: IconValue;
        groupExpandIcon: IconValue;
    }, true, {}, import("vue").SlotsType<Partial<{
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
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        density: import("../../composables/density.js").Density;
        item: Group<any>;
        groupCollapseIcon: IconValue;
        groupExpandIcon: IconValue;
    } & {} & {
        $children?: {
            "data-table-group"?: ((arg: {
                item: Group<any>;
                count: number;
                props: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
            "data-table-select"?: ((arg: {
                props: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | {} | import("vue").VNodeChild;
        "v-slots"?: {
            "data-table-group"?: false | ((arg: {
                item: Group<any>;
                count: number;
                props: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
            "data-table-select"?: false | ((arg: {
                props: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:data-table-group"?: false | ((arg: {
            item: Group<any>;
            count: number;
            props: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:data-table-select"?: false | ((arg: {
            props: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
    }, () => JSX.Element, {}, {}, {}, {
        density: import("../../composables/density.js").Density;
        groupCollapseIcon: IconValue;
        groupExpandIcon: IconValue;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    density: import("../../composables/density.js").Density;
    item: Group<any>;
    groupCollapseIcon: IconValue;
    groupExpandIcon: IconValue;
} & {} & {
    $children?: {
        "data-table-group"?: ((arg: {
            item: Group<any>;
            count: number;
            props: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
        "data-table-select"?: ((arg: {
            props: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | {} | import("vue").VNodeChild;
    "v-slots"?: {
        "data-table-group"?: false | ((arg: {
            item: Group<any>;
            count: number;
            props: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
        "data-table-select"?: false | ((arg: {
            props: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:data-table-group"?: false | ((arg: {
        item: Group<any>;
        count: number;
        props: Record<string, unknown>;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:data-table-select"?: false | ((arg: {
        props: Record<string, unknown>;
    }) => import("vue").VNodeChild) | undefined;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    density: import("../../composables/density.js").Density;
    groupCollapseIcon: IconValue;
    groupExpandIcon: IconValue;
}, {}, string, import("vue").SlotsType<Partial<{
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
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    item: {
        type: PropType<Group<any>>;
        required: true;
    };
    groupCollapseIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    groupExpandIcon: {
        type: PropType<IconValue>;
        default: string;
    };
}, import("vue").ExtractPropTypes<{
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    item: {
        type: PropType<Group<any>>;
        required: true;
    };
    groupCollapseIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    groupExpandIcon: {
        type: PropType<IconValue>;
        default: string;
    };
}>>;
