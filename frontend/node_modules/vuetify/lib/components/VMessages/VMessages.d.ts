// Styles

// Types
import type { Component, PropType } from 'vue';
export type VMessageSlot = {
    message: string;
};
export type VMessagesSlots = {
    message: VMessageSlot;
};
export declare const makeVMessagesProps: <Defaults extends {
    class?: unknown;
    style?: unknown;
    transition?: unknown;
    active?: unknown;
    color?: unknown;
    messages?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    class: unknown extends Defaults["class"] ? PropType<any> : {
        type: PropType<unknown extends Defaults["class"] ? any : any>;
        default: unknown extends Defaults["class"] ? any : any;
    };
    style: unknown extends Defaults["style"] ? {
        type: PropType<import("vue").StyleValue>;
        default: null;
    } : Omit<{
        type: PropType<import("vue").StyleValue>;
        default: null;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["style"] ? import("vue").StyleValue : Defaults["style"] | import("vue").StyleValue>;
        default: unknown extends Defaults["style"] ? import("vue").StyleValue : Defaults["style"] | NonNullable<import("vue").StyleValue>;
    };
    transition: unknown extends Defaults["transition"] ? {
        type: PropType<string | boolean | {
            component: Component;
            leaveAbsolute: boolean;
            group: boolean;
        } | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null>;
        default: {
            component: Component;
            leaveAbsolute: boolean;
            group: boolean;
        } | NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null>;
    } : Omit<{
        type: PropType<string | boolean | {
            component: Component;
            leaveAbsolute: boolean;
            group: boolean;
        } | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null>;
        default: {
            component: Component;
            leaveAbsolute: boolean;
            group: boolean;
        } | NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null>;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["transition"] ? string | boolean | {
            component: Component;
            leaveAbsolute: boolean;
            group: boolean;
        } | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null : string | boolean | {
            component: Component;
            leaveAbsolute: boolean;
            group: boolean;
        } | Defaults["transition"] | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null>;
        default: unknown extends Defaults["transition"] ? string | boolean | {
            component: Component;
            leaveAbsolute: boolean;
            group: boolean;
        } | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null : Defaults["transition"] | NonNullable<string | boolean | {
            component: Component;
            leaveAbsolute: boolean;
            group: boolean;
        } | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null>;
    };
    active: unknown extends Defaults["active"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"]>;
        default: unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    messages: unknown extends Defaults["messages"] ? {
        type: PropType<string | readonly string[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<string | readonly string[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["messages"] ? string | readonly string[] : string | readonly string[] | Defaults["messages"]>;
        default: unknown extends Defaults["messages"] ? string | readonly string[] : Defaults["messages"] | NonNullable<string | readonly string[]>;
    };
};
export declare const VMessages: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        transition: string | boolean | {
            component: Component;
            leaveAbsolute: boolean;
            group: boolean;
        } | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null;
        active: boolean;
        messages: string | readonly string[];
    } & {
        class?: any;
        color?: string | undefined;
    } & {
        $children?: {
            message?: ((arg: VMessageSlot) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | {} | import("vue").VNodeChild;
        "v-slots"?: {
            message?: false | ((arg: VMessageSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:message"?: false | ((arg: VMessageSlot) => import("vue").VNodeChild) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        transition: string | boolean | {
            component: Component;
            leaveAbsolute: boolean;
            group: boolean;
        } | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null;
        active: boolean;
        messages: string | readonly string[];
    }, true, {}, import("vue").SlotsType<Partial<{
        message: (arg: VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
            leaveAbsolute: boolean;
            group: boolean;
        } | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null;
        active: boolean;
        messages: string | readonly string[];
    } & {
        class?: any;
        color?: string | undefined;
    } & {
        $children?: {
            message?: ((arg: VMessageSlot) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | {} | import("vue").VNodeChild;
        "v-slots"?: {
            message?: false | ((arg: VMessageSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:message"?: false | ((arg: VMessageSlot) => import("vue").VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        transition: string | boolean | {
            component: Component;
            leaveAbsolute: boolean;
            group: boolean;
        } | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null;
        active: boolean;
        messages: string | readonly string[];
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    transition: string | boolean | {
        component: Component;
        leaveAbsolute: boolean;
        group: boolean;
    } | (import("vue").TransitionProps & {
        component?: Component | undefined;
    }) | null;
    active: boolean;
    messages: string | readonly string[];
} & {
    class?: any;
    color?: string | undefined;
} & {
    $children?: {
        message?: ((arg: VMessageSlot) => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | {} | import("vue").VNodeChild;
    "v-slots"?: {
        message?: false | ((arg: VMessageSlot) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:message"?: false | ((arg: VMessageSlot) => import("vue").VNodeChild) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    style: import("vue").StyleValue;
    transition: string | boolean | {
        component: Component;
        leaveAbsolute: boolean;
        group: boolean;
    } | (import("vue").TransitionProps & {
        component?: Component | undefined;
    }) | null;
    active: boolean;
    messages: string | readonly string[];
}, {}, string, import("vue").SlotsType<Partial<{
    message: (arg: VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    transition: {
        type: PropType<string | boolean | {
            component: Component;
            leaveAbsolute: boolean;
            group: boolean;
        } | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null>;
        default: {
            component: Component;
            leaveAbsolute: boolean;
            group: boolean;
        } | NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null>;
    };
    active: BooleanConstructor;
    color: StringConstructor;
    messages: {
        type: PropType<string | readonly string[]>;
        default: () => never[];
    };
}, import("vue").ExtractPropTypes<{
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    transition: {
        type: PropType<string | boolean | {
            component: Component;
            leaveAbsolute: boolean;
            group: boolean;
        } | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null>;
        default: {
            component: Component;
            leaveAbsolute: boolean;
            group: boolean;
        } | NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null>;
    };
    active: BooleanConstructor;
    color: StringConstructor;
    messages: {
        type: PropType<string | readonly string[]>;
        default: () => never[];
    };
}>>;
export type VMessages = InstanceType<typeof VMessages>;
