// Styles

// Types
import type { Tick } from './slider.js';
export type VSliderTrackSlots = {
    'tick-label': {
        tick: Tick;
        index: number;
    };
};
export declare const makeVSliderTrackProps: <Defaults extends {
    class?: unknown;
    style?: unknown;
    start?: unknown;
    stop?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
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
    start: unknown extends Defaults["start"] ? {
        type: NumberConstructor;
        required: true;
    } : Omit<{
        type: NumberConstructor;
        required: true;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["start"] ? number : number | Defaults["start"]>;
        default: unknown extends Defaults["start"] ? number : number | Defaults["start"];
    };
    stop: unknown extends Defaults["stop"] ? {
        type: NumberConstructor;
        required: true;
    } : Omit<{
        type: NumberConstructor;
        required: true;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["stop"] ? number : number | Defaults["stop"]>;
        default: unknown extends Defaults["stop"] ? number : number | Defaults["stop"];
    };
};
export declare const VSliderTrack: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        start: number;
        stop: number;
    } & {
        class?: any;
    } & {
        $children?: {
            "tick-label"?: ((arg: {
                tick: Tick;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | {} | import("vue").VNodeChild;
        "v-slots"?: {
            "tick-label"?: false | ((arg: {
                tick: Tick;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:tick-label"?: false | ((arg: {
            tick: Tick;
            index: number;
        }) => import("vue").VNodeChild) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
    }, true, {}, import("vue").SlotsType<Partial<{
        "tick-label": (arg: {
            tick: Tick;
            index: number;
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
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        start: number;
        stop: number;
    } & {
        class?: any;
    } & {
        $children?: {
            "tick-label"?: ((arg: {
                tick: Tick;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | {} | import("vue").VNodeChild;
        "v-slots"?: {
            "tick-label"?: false | ((arg: {
                tick: Tick;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:tick-label"?: false | ((arg: {
            tick: Tick;
            index: number;
        }) => import("vue").VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    start: number;
    stop: number;
} & {
    class?: any;
} & {
    $children?: {
        "tick-label"?: ((arg: {
            tick: Tick;
            index: number;
        }) => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | {} | import("vue").VNodeChild;
    "v-slots"?: {
        "tick-label"?: false | ((arg: {
            tick: Tick;
            index: number;
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:tick-label"?: false | ((arg: {
        tick: Tick;
        index: number;
    }) => import("vue").VNodeChild) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    style: import("vue").StyleValue;
}, {}, string, import("vue").SlotsType<Partial<{
    "tick-label": (arg: {
        tick: Tick;
        index: number;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    start: {
        type: NumberConstructor;
        required: true;
    };
    stop: {
        type: NumberConstructor;
        required: true;
    };
}, import("vue").ExtractPropTypes<{
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    start: {
        type: NumberConstructor;
        required: true;
    };
    stop: {
        type: NumberConstructor;
        required: true;
    };
}>>;
export type VSliderTrack = InstanceType<typeof VSliderTrack>;
