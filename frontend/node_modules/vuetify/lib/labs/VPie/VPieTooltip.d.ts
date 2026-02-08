// Types
import type { PropType } from 'vue';
import type { PieItem, TextTemplate } from './types.js';
export type VPieTooltipSlots = {
    default: {
        item: PieItem;
    };
    prepend: {
        item: PieItem;
    };
};
export declare const makeVPieTooltipProps: <Defaults extends {
    offset?: unknown;
    transition?: unknown;
    modelValue?: unknown;
    target?: unknown;
    item?: unknown;
    titleFormat?: unknown;
    subtitleFormat?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    offset: unknown extends Defaults["offset"] ? {
        type: PropType<string | number | number[] | undefined>;
        default: NonNullable<string | number | number[] | undefined>;
    } : Omit<{
        type: PropType<string | number | number[] | undefined>;
        default: NonNullable<string | number | number[] | undefined>;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["offset"] ? string | number | number[] | undefined : string | number | number[] | Defaults["offset"] | undefined>;
        default: unknown extends Defaults["offset"] ? string | number | number[] | undefined : Defaults["offset"] | NonNullable<string | number | number[] | undefined>;
    };
    transition: unknown extends Defaults["transition"] ? import("vue").Prop<string | boolean | (import("vue").TransitionProps & {
        component?: import("vue").Component | undefined;
    }) | null> : {
        type: PropType<unknown extends Defaults["transition"] ? string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null : string | boolean | Defaults["transition"] | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null>;
        default: unknown extends Defaults["transition"] ? string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null : Defaults["transition"] | NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null>;
    };
    modelValue: unknown extends Defaults["modelValue"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["modelValue"] ? boolean : boolean | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? boolean : boolean | Defaults["modelValue"];
    };
    target: unknown extends Defaults["target"] ? PropType<[x: number, y: number]> : {
        type: PropType<unknown extends Defaults["target"] ? [x: number, y: number] : [x: number, y: number] | Defaults["target"]>;
        default: unknown extends Defaults["target"] ? [x: number, y: number] : [x: number, y: number] | Defaults["target"];
    };
    item: unknown extends Defaults["item"] ? {
        type: PropType<PieItem | null>;
        default: null;
    } : Omit<{
        type: PropType<PieItem | null>;
        default: null;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["item"] ? PieItem | null : PieItem | Defaults["item"] | null>;
        default: unknown extends Defaults["item"] ? PieItem | null : PieItem | Defaults["item"];
    };
    titleFormat: unknown extends Defaults["titleFormat"] ? {
        type: PropType<TextTemplate>;
        default: string;
    } : Omit<{
        type: PropType<TextTemplate>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["titleFormat"] ? TextTemplate : Defaults["titleFormat"] | TextTemplate>;
        default: unknown extends Defaults["titleFormat"] ? TextTemplate : Defaults["titleFormat"] | NonNullable<TextTemplate>;
    };
    subtitleFormat: unknown extends Defaults["subtitleFormat"] ? {
        type: PropType<TextTemplate>;
        default: string;
    } : Omit<{
        type: PropType<TextTemplate>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["subtitleFormat"] ? TextTemplate : Defaults["subtitleFormat"] | TextTemplate>;
        default: unknown extends Defaults["subtitleFormat"] ? TextTemplate : Defaults["subtitleFormat"] | NonNullable<TextTemplate>;
    };
};
export declare const VPieTooltip: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        offset: string | number | number[];
        modelValue: boolean;
        item: PieItem | null;
        titleFormat: TextTemplate;
        subtitleFormat: TextTemplate;
    } & {
        transition?: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null | undefined;
        target?: [x: number, y: number] | undefined;
    } & {
        $children?: {
            default?: ((arg: {
                item: PieItem;
            }) => import("vue").VNodeChild) | undefined;
            prepend?: ((arg: {
                item: PieItem;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            item: PieItem;
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: {
                item: PieItem;
            }) => import("vue").VNodeChild) | undefined;
            prepend?: false | ((arg: {
                item: PieItem;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            item: PieItem;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: {
            item: PieItem;
        }) => import("vue").VNodeChild) | undefined;
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        offset: string | number | number[] | undefined;
        modelValue: boolean;
        item: PieItem | null;
        titleFormat: TextTemplate;
        subtitleFormat: TextTemplate;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: {
            item: PieItem;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        prepend: (arg: {
            item: PieItem;
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
        offset: string | number | number[];
        modelValue: boolean;
        item: PieItem | null;
        titleFormat: TextTemplate;
        subtitleFormat: TextTemplate;
    } & {
        transition?: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null | undefined;
        target?: [x: number, y: number] | undefined;
    } & {
        $children?: {
            default?: ((arg: {
                item: PieItem;
            }) => import("vue").VNodeChild) | undefined;
            prepend?: ((arg: {
                item: PieItem;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            item: PieItem;
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: {
                item: PieItem;
            }) => import("vue").VNodeChild) | undefined;
            prepend?: false | ((arg: {
                item: PieItem;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            item: PieItem;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: {
            item: PieItem;
        }) => import("vue").VNodeChild) | undefined;
    }, () => JSX.Element, {}, {}, {}, {
        offset: string | number | number[] | undefined;
        modelValue: boolean;
        item: PieItem | null;
        titleFormat: TextTemplate;
        subtitleFormat: TextTemplate;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    offset: string | number | number[];
    modelValue: boolean;
    item: PieItem | null;
    titleFormat: TextTemplate;
    subtitleFormat: TextTemplate;
} & {
    transition?: string | boolean | (import("vue").TransitionProps & {
        component?: import("vue").Component | undefined;
    }) | null | undefined;
    target?: [x: number, y: number] | undefined;
} & {
    $children?: {
        default?: ((arg: {
            item: PieItem;
        }) => import("vue").VNodeChild) | undefined;
        prepend?: ((arg: {
            item: PieItem;
        }) => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | ((arg: {
        item: PieItem;
    }) => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        default?: false | ((arg: {
            item: PieItem;
        }) => import("vue").VNodeChild) | undefined;
        prepend?: false | ((arg: {
            item: PieItem;
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: {
        item: PieItem;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:prepend"?: false | ((arg: {
        item: PieItem;
    }) => import("vue").VNodeChild) | undefined;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    offset: string | number | number[] | undefined;
    modelValue: boolean;
    item: PieItem | null;
    titleFormat: TextTemplate;
    subtitleFormat: TextTemplate;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: {
        item: PieItem;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    prepend: (arg: {
        item: PieItem;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    offset: {
        type: PropType<string | number | number[] | undefined>;
        default: NonNullable<string | number | number[] | undefined>;
    };
    transition: import("vue").Prop<string | boolean | (import("vue").TransitionProps & {
        component?: import("vue").Component | undefined;
    }) | null>;
    modelValue: BooleanConstructor;
    target: PropType<[x: number, y: number]>;
    item: {
        type: PropType<PieItem | null>;
        default: null;
    };
    titleFormat: {
        type: PropType<TextTemplate>;
        default: string;
    };
    subtitleFormat: {
        type: PropType<TextTemplate>;
        default: string;
    };
}, import("vue").ExtractPropTypes<{
    offset: {
        type: PropType<string | number | number[] | undefined>;
        default: NonNullable<string | number | number[] | undefined>;
    };
    transition: import("vue").Prop<string | boolean | (import("vue").TransitionProps & {
        component?: import("vue").Component | undefined;
    }) | null>;
    modelValue: BooleanConstructor;
    target: PropType<[x: number, y: number]>;
    item: {
        type: PropType<PieItem | null>;
        default: null;
    };
    titleFormat: {
        type: PropType<TextTemplate>;
        default: string;
    };
    subtitleFormat: {
        type: PropType<TextTemplate>;
        default: string;
    };
}>>;
export type VPieTooltip = InstanceType<typeof VPieTooltip>;
