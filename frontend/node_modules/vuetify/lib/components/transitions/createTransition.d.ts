// Types
import type { PropType } from 'vue';
export declare const makeTransitionProps: <Defaults extends {
    disabled?: unknown;
    group?: unknown;
    hideOnLeave?: unknown;
    leaveAbsolute?: unknown;
    mode?: unknown;
    origin?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    group: unknown extends Defaults["group"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["group"] ? boolean : boolean | Defaults["group"]>;
        default: unknown extends Defaults["group"] ? boolean : boolean | Defaults["group"];
    };
    hideOnLeave: unknown extends Defaults["hideOnLeave"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideOnLeave"] ? boolean : boolean | Defaults["hideOnLeave"]>;
        default: unknown extends Defaults["hideOnLeave"] ? boolean : boolean | Defaults["hideOnLeave"];
    };
    leaveAbsolute: unknown extends Defaults["leaveAbsolute"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["leaveAbsolute"] ? boolean : boolean | Defaults["leaveAbsolute"]>;
        default: unknown extends Defaults["leaveAbsolute"] ? boolean : boolean | Defaults["leaveAbsolute"];
    };
    mode: unknown extends Defaults["mode"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["mode"] ? string : string | Defaults["mode"]>;
        default: unknown extends Defaults["mode"] ? string : string | Defaults["mode"];
    };
    origin: unknown extends Defaults["origin"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["origin"] ? string : string | Defaults["origin"]>;
        default: unknown extends Defaults["origin"] ? string : string | Defaults["origin"];
    };
};
export declare function createCssTransition(name: string, origin?: string, mode?: string): {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        disabled: boolean;
        group: boolean;
        hideOnLeave: boolean;
        leaveAbsolute: boolean;
        mode: string;
        origin: string;
    } & {} & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        disabled: boolean;
        group: boolean;
        hideOnLeave: boolean;
        leaveAbsolute: boolean;
        mode: string | undefined;
        origin: string | undefined;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        disabled: boolean;
        group: boolean;
        hideOnLeave: boolean;
        leaveAbsolute: boolean;
        mode: string;
        origin: string;
    } & {} & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, {}, {}, {}, {
        disabled: boolean;
        group: boolean;
        hideOnLeave: boolean;
        leaveAbsolute: boolean;
        mode: string | undefined;
        origin: string | undefined;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    disabled: boolean;
    group: boolean;
    hideOnLeave: boolean;
    leaveAbsolute: boolean;
    mode: string;
    origin: string;
} & {} & {
    $children?: {
        default?: (() => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    disabled: boolean;
    group: boolean;
    hideOnLeave: boolean;
    leaveAbsolute: boolean;
    mode: string | undefined;
    origin: string | undefined;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    disabled: BooleanConstructor;
    group: BooleanConstructor;
    hideOnLeave: BooleanConstructor;
    leaveAbsolute: BooleanConstructor;
    mode: {
        type: PropType<string | undefined>;
        default: string | undefined;
    };
    origin: {
        type: PropType<string | undefined>;
        default: string | undefined;
    };
}, import("vue").ExtractPropTypes<{
    disabled: BooleanConstructor;
    group: BooleanConstructor;
    hideOnLeave: BooleanConstructor;
    leaveAbsolute: BooleanConstructor;
    mode: {
        type: PropType<string | undefined>;
        default: string | undefined;
    };
    origin: {
        type: PropType<string | undefined>;
        default: string | undefined;
    };
}>>;
export declare function createJavascriptTransition(name: string, functions: Record<string, any>, mode?: string): {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        mode: "default" | "in-out" | "out-in";
        disabled: boolean;
        group: boolean;
    } & {} & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        mode: "default" | "in-out" | "out-in";
        disabled: boolean;
        group: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        mode: "default" | "in-out" | "out-in";
        disabled: boolean;
        group: boolean;
    } & {} & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, {}, {}, {}, {
        mode: "default" | "in-out" | "out-in";
        disabled: boolean;
        group: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    mode: "default" | "in-out" | "out-in";
    disabled: boolean;
    group: boolean;
} & {} & {
    $children?: {
        default?: (() => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    mode: "default" | "in-out" | "out-in";
    disabled: boolean;
    group: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    mode: {
        type: PropType<"default" | "in-out" | "out-in">;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    group: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    mode: {
        type: PropType<"default" | "in-out" | "out-in">;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    group: BooleanConstructor;
}>>;
