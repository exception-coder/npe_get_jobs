// Styles

// Types
import type { Component } from 'vue';
export declare const makeVCounterProps: <Defaults extends {
    class?: unknown;
    style?: unknown;
    transition?: unknown;
    active?: unknown;
    disabled?: unknown;
    max?: unknown;
    value?: unknown;
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
    transition: unknown extends Defaults["transition"] ? {
        type: import("vue").PropType<string | boolean | {
            component: Component;
        } | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null>;
        default: {
            component: Component;
        } | NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null>;
    } : Omit<{
        type: import("vue").PropType<string | boolean | {
            component: Component;
        } | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null>;
        default: {
            component: Component;
        } | NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null>;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["transition"] ? string | boolean | {
            component: Component;
        } | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null : string | boolean | {
            component: Component;
        } | Defaults["transition"] | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null>;
        default: unknown extends Defaults["transition"] ? string | boolean | {
            component: Component;
        } | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null : Defaults["transition"] | NonNullable<string | boolean | {
            component: Component;
        } | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null>;
    };
    active: unknown extends Defaults["active"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"]>;
        default: unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    max: unknown extends Defaults["max"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["max"] ? string | number : string | number | Defaults["max"]>;
        default: unknown extends Defaults["max"] ? string | number : Defaults["max"] | NonNullable<string | number>;
    };
    value: unknown extends Defaults["value"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["value"] ? string | number : string | number | Defaults["value"]>;
        default: unknown extends Defaults["value"] ? string | number : Defaults["value"] | NonNullable<string | number>;
    };
};
export type VCounterSlot = {
    counter: string;
    max: string | number | undefined;
    value: string | number | undefined;
};
export declare const VCounter: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        transition: string | boolean | {
            component: Component;
        } | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null;
        active: boolean;
        disabled: boolean;
        value: string | number;
    } & {
        class?: any;
        max?: string | number | undefined;
    } & {
        $children?: {
            default?: ((arg: VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: VCounterSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: VCounterSlot) => import("vue").VNodeChild) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        transition: string | boolean | {
            component: Component;
        } | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null;
        active: boolean;
        disabled: boolean;
        value: string | number;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: VCounterSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        transition: string | boolean | {
            component: Component;
        } | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null;
        active: boolean;
        disabled: boolean;
        value: string | number;
    } & {
        class?: any;
        max?: string | number | undefined;
    } & {
        $children?: {
            default?: ((arg: VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: VCounterSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: VCounterSlot) => import("vue").VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        transition: string | boolean | {
            component: Component;
        } | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null;
        active: boolean;
        disabled: boolean;
        value: string | number;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    transition: string | boolean | {
        component: Component;
    } | (import("vue").TransitionProps & {
        component?: Component | undefined;
    }) | null;
    active: boolean;
    disabled: boolean;
    value: string | number;
} & {
    class?: any;
    max?: string | number | undefined;
} & {
    $children?: {
        default?: ((arg: VCounterSlot) => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | ((arg: VCounterSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        default?: false | ((arg: VCounterSlot) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: VCounterSlot) => import("vue").VNodeChild) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    style: import("vue").StyleValue;
    transition: string | boolean | {
        component: Component;
    } | (import("vue").TransitionProps & {
        component?: Component | undefined;
    }) | null;
    active: boolean;
    disabled: boolean;
    value: string | number;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: VCounterSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    transition: {
        type: import("vue").PropType<string | boolean | {
            component: Component;
        } | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null>;
        default: {
            component: Component;
        } | NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null>;
    };
    active: BooleanConstructor;
    disabled: BooleanConstructor;
    max: (NumberConstructor | StringConstructor)[];
    value: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}, import("vue").ExtractPropTypes<{
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    transition: {
        type: import("vue").PropType<string | boolean | {
            component: Component;
        } | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null>;
        default: {
            component: Component;
        } | NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null>;
    };
    active: BooleanConstructor;
    disabled: BooleanConstructor;
    max: (NumberConstructor | StringConstructor)[];
    value: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}>>;
export type VCounter = InstanceType<typeof VCounter>;
