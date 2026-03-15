// Styles

// Types
import type { PropType } from 'vue';
export type VNavigationDrawerImageSlot = {
    image: string | undefined;
};
export type VNavigationDrawerSlots = {
    default: never;
    prepend: never;
    append: never;
    image: VNavigationDrawerImageSlot;
};
export declare const makeVNavigationDrawerProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
    mobile?: unknown;
    mobileBreakpoint?: unknown;
    name?: unknown;
    order?: unknown;
    absolute?: unknown;
    border?: unknown;
    elevation?: unknown;
    rounded?: unknown;
    tile?: unknown;
    tag?: unknown;
    closeDelay?: unknown;
    openDelay?: unknown;
    retainFocus?: unknown;
    captureFocus?: unknown;
    color?: unknown;
    disableResizeWatcher?: unknown;
    disableRouteWatcher?: unknown;
    expandOnHover?: unknown;
    floating?: unknown;
    modelValue?: unknown;
    permanent?: unknown;
    rail?: unknown;
    railWidth?: unknown;
    scrim?: unknown;
    image?: unknown;
    temporary?: unknown;
    persistent?: unknown;
    touchless?: unknown;
    width?: unknown;
    location?: unknown;
    sticky?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
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
    mobile: unknown extends Defaults["mobile"] ? Omit<{
        type: PropType<boolean | null>;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<boolean | null>;
        default: NonNullable<boolean | null> | null;
    } : Omit<Omit<{
        type: PropType<boolean | null>;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<boolean | null>;
        default: NonNullable<boolean | null> | null;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["mobile"] ? boolean | null : boolean | Defaults["mobile"] | null>;
        default: unknown extends Defaults["mobile"] ? boolean | null : Defaults["mobile"] | NonNullable<boolean | null>;
    };
    mobileBreakpoint: unknown extends Defaults["mobileBreakpoint"] ? PropType<number | import("../../types.js").DisplayBreakpoint> : {
        type: PropType<unknown extends Defaults["mobileBreakpoint"] ? number | import("../../types.js").DisplayBreakpoint : number | Defaults["mobileBreakpoint"] | import("../../types.js").DisplayBreakpoint>;
        default: unknown extends Defaults["mobileBreakpoint"] ? number | import("../../types.js").DisplayBreakpoint : Defaults["mobileBreakpoint"] | NonNullable<number | import("../../types.js").DisplayBreakpoint>;
    };
    name: unknown extends Defaults["name"] ? {
        type: StringConstructor;
    } : Omit<{
        type: StringConstructor;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["name"] ? string : string | Defaults["name"]>;
        default: unknown extends Defaults["name"] ? string : string | Defaults["name"];
    };
    order: unknown extends Defaults["order"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["order"] ? string | number : string | number | Defaults["order"]>;
        default: unknown extends Defaults["order"] ? string | number : Defaults["order"] | NonNullable<string | number>;
    };
    absolute: unknown extends Defaults["absolute"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["absolute"] ? boolean : boolean | Defaults["absolute"]>;
        default: unknown extends Defaults["absolute"] ? boolean : boolean | Defaults["absolute"];
    };
    border: unknown extends Defaults["border"] ? (BooleanConstructor | NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["border"] ? string | number | boolean : string | number | boolean | Defaults["border"]>;
        default: unknown extends Defaults["border"] ? string | number | boolean : Defaults["border"] | NonNullable<string | number | boolean>;
    };
    elevation: unknown extends Defaults["elevation"] ? {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["elevation"] ? string | number : string | number | Defaults["elevation"]>;
        default: unknown extends Defaults["elevation"] ? string | number : Defaults["elevation"] | NonNullable<string | number>;
    };
    rounded: unknown extends Defaults["rounded"] ? {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    } : Omit<{
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["rounded"] ? string | number | boolean : string | number | boolean | Defaults["rounded"]>;
        default: unknown extends Defaults["rounded"] ? string | number | boolean : Defaults["rounded"] | NonNullable<string | number | boolean>;
    };
    tile: unknown extends Defaults["tile"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["tile"] ? boolean : boolean | Defaults["tile"]>;
        default: unknown extends Defaults["tile"] ? boolean : boolean | Defaults["tile"];
    };
    tag: unknown extends Defaults["tag"] ? Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    } : Omit<Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : string | Defaults["tag"] | import("../../util/index.js").JSXComponent>;
        default: unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : Defaults["tag"] | NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    closeDelay: unknown extends Defaults["closeDelay"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["closeDelay"] ? string | number : string | number | Defaults["closeDelay"]>;
        default: unknown extends Defaults["closeDelay"] ? string | number : Defaults["closeDelay"] | NonNullable<string | number>;
    };
    openDelay: unknown extends Defaults["openDelay"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["openDelay"] ? string | number : string | number | Defaults["openDelay"]>;
        default: unknown extends Defaults["openDelay"] ? string | number : Defaults["openDelay"] | NonNullable<string | number>;
    };
    retainFocus: unknown extends Defaults["retainFocus"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["retainFocus"] ? boolean : boolean | Defaults["retainFocus"]>;
        default: unknown extends Defaults["retainFocus"] ? boolean : boolean | Defaults["retainFocus"];
    };
    captureFocus: unknown extends Defaults["captureFocus"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["captureFocus"] ? boolean : boolean | Defaults["captureFocus"]>;
        default: unknown extends Defaults["captureFocus"] ? boolean : boolean | Defaults["captureFocus"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    disableResizeWatcher: unknown extends Defaults["disableResizeWatcher"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disableResizeWatcher"] ? boolean : boolean | Defaults["disableResizeWatcher"]>;
        default: unknown extends Defaults["disableResizeWatcher"] ? boolean : boolean | Defaults["disableResizeWatcher"];
    };
    disableRouteWatcher: unknown extends Defaults["disableRouteWatcher"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disableRouteWatcher"] ? boolean : boolean | Defaults["disableRouteWatcher"]>;
        default: unknown extends Defaults["disableRouteWatcher"] ? boolean : boolean | Defaults["disableRouteWatcher"];
    };
    expandOnHover: unknown extends Defaults["expandOnHover"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["expandOnHover"] ? boolean : boolean | Defaults["expandOnHover"]>;
        default: unknown extends Defaults["expandOnHover"] ? boolean : boolean | Defaults["expandOnHover"];
    };
    floating: unknown extends Defaults["floating"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["floating"] ? boolean : boolean | Defaults["floating"]>;
        default: unknown extends Defaults["floating"] ? boolean : boolean | Defaults["floating"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: PropType<boolean | null>;
        default: null;
    } : Omit<{
        type: PropType<boolean | null>;
        default: null;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["modelValue"] ? boolean | null : boolean | Defaults["modelValue"] | null>;
        default: unknown extends Defaults["modelValue"] ? boolean | null : Defaults["modelValue"] | NonNullable<boolean | null>;
    };
    permanent: unknown extends Defaults["permanent"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["permanent"] ? boolean : boolean | Defaults["permanent"]>;
        default: unknown extends Defaults["permanent"] ? boolean : boolean | Defaults["permanent"];
    };
    rail: unknown extends Defaults["rail"] ? {
        type: PropType<boolean | null>;
        default: null;
    } : Omit<{
        type: PropType<boolean | null>;
        default: null;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["rail"] ? boolean | null : boolean | Defaults["rail"] | null>;
        default: unknown extends Defaults["rail"] ? boolean | null : Defaults["rail"] | NonNullable<boolean | null>;
    };
    railWidth: unknown extends Defaults["railWidth"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["railWidth"] ? string | number : string | number | Defaults["railWidth"]>;
        default: unknown extends Defaults["railWidth"] ? string | number : Defaults["railWidth"] | NonNullable<string | number>;
    };
    scrim: unknown extends Defaults["scrim"] ? {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    } : Omit<{
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["scrim"] ? string | boolean : string | boolean | Defaults["scrim"]>;
        default: unknown extends Defaults["scrim"] ? string | boolean : Defaults["scrim"] | NonNullable<string | boolean>;
    };
    image: unknown extends Defaults["image"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["image"] ? string : string | Defaults["image"]>;
        default: unknown extends Defaults["image"] ? string : string | Defaults["image"];
    };
    temporary: unknown extends Defaults["temporary"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["temporary"] ? boolean : boolean | Defaults["temporary"]>;
        default: unknown extends Defaults["temporary"] ? boolean : boolean | Defaults["temporary"];
    };
    persistent: unknown extends Defaults["persistent"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["persistent"] ? boolean : boolean | Defaults["persistent"]>;
        default: unknown extends Defaults["persistent"] ? boolean : boolean | Defaults["persistent"];
    };
    touchless: unknown extends Defaults["touchless"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["touchless"] ? boolean : boolean | Defaults["touchless"]>;
        default: unknown extends Defaults["touchless"] ? boolean : boolean | Defaults["touchless"];
    };
    width: unknown extends Defaults["width"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : Defaults["width"] | NonNullable<string | number>;
    };
    location: unknown extends Defaults["location"] ? {
        type: PropType<"bottom" | "end" | "left" | "right" | "start" | "top">;
        default: string;
        validator: (value: any) => boolean;
    } : Omit<{
        type: PropType<"bottom" | "end" | "left" | "right" | "start" | "top">;
        default: string;
        validator: (value: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["location"] ? "bottom" | "end" | "left" | "right" | "start" | "top" : "bottom" | "end" | "left" | "right" | "start" | "top" | Defaults["location"]>;
        default: unknown extends Defaults["location"] ? "bottom" | "end" | "left" | "right" | "start" | "top" : Defaults["location"] | NonNullable<"bottom" | "end" | "left" | "right" | "start" | "top">;
    };
    sticky: unknown extends Defaults["sticky"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["sticky"] ? boolean : boolean | Defaults["sticky"]>;
        default: unknown extends Defaults["sticky"] ? boolean : boolean | Defaults["sticky"];
    };
};
export declare const VNavigationDrawer: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        mobile: boolean | null;
        order: string | number;
        absolute: boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        retainFocus: boolean;
        captureFocus: boolean;
        disableResizeWatcher: boolean;
        disableRouteWatcher: boolean;
        expandOnHover: boolean;
        floating: boolean;
        modelValue: boolean | null;
        permanent: boolean;
        rail: boolean | null;
        railWidth: string | number;
        scrim: string | boolean;
        temporary: boolean;
        persistent: boolean;
        touchless: boolean;
        width: string | number;
        location: "bottom" | "end" | "left" | "right" | "start" | "top";
        sticky: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
        name?: string | undefined;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        color?: string | undefined;
        image?: string | undefined;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
            prepend?: (() => import("vue").VNodeChild) | undefined;
            append?: (() => import("vue").VNodeChild) | undefined;
            image?: ((arg: VNavigationDrawerImageSlot) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            prepend?: false | (() => import("vue").VNodeChild) | undefined;
            append?: false | (() => import("vue").VNodeChild) | undefined;
            image?: false | ((arg: VNavigationDrawerImageSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:image"?: false | ((arg: VNavigationDrawerImageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((val: boolean) => any) | undefined;
        "onUpdate:rail"?: ((val: boolean) => any) | undefined;
    }, {
        isStuck: import("vue").ShallowRef<"bottom" | "top" | boolean, "bottom" | "top" | boolean>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (val: boolean) => true;
        "update:rail": (val: boolean) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        mobile: boolean | null;
        order: string | number;
        absolute: boolean;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        retainFocus: boolean;
        captureFocus: boolean;
        disableResizeWatcher: boolean;
        disableRouteWatcher: boolean;
        expandOnHover: boolean;
        floating: boolean;
        modelValue: boolean | null;
        permanent: boolean;
        rail: boolean | null;
        railWidth: string | number;
        scrim: string | boolean;
        temporary: boolean;
        persistent: boolean;
        touchless: boolean;
        width: string | number;
        location: "bottom" | "end" | "left" | "right" | "start" | "top";
        sticky: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        prepend: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        append: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        image: (arg: VNavigationDrawerImageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        order: string | number;
        absolute: boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        retainFocus: boolean;
        captureFocus: boolean;
        disableResizeWatcher: boolean;
        disableRouteWatcher: boolean;
        expandOnHover: boolean;
        floating: boolean;
        modelValue: boolean | null;
        permanent: boolean;
        rail: boolean | null;
        railWidth: string | number;
        scrim: string | boolean;
        temporary: boolean;
        persistent: boolean;
        touchless: boolean;
        width: string | number;
        location: "bottom" | "end" | "left" | "right" | "start" | "top";
        sticky: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
        name?: string | undefined;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        color?: string | undefined;
        image?: string | undefined;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
            prepend?: (() => import("vue").VNodeChild) | undefined;
            append?: (() => import("vue").VNodeChild) | undefined;
            image?: ((arg: VNavigationDrawerImageSlot) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            prepend?: false | (() => import("vue").VNodeChild) | undefined;
            append?: false | (() => import("vue").VNodeChild) | undefined;
            image?: false | ((arg: VNavigationDrawerImageSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:image"?: false | ((arg: VNavigationDrawerImageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((val: boolean) => any) | undefined;
        "onUpdate:rail"?: ((val: boolean) => any) | undefined;
    }, {
        isStuck: import("vue").ShallowRef<"bottom" | "top" | boolean, "bottom" | "top" | boolean>;
    }, {}, {}, {}, {
        style: import("vue").StyleValue;
        mobile: boolean | null;
        order: string | number;
        absolute: boolean;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        retainFocus: boolean;
        captureFocus: boolean;
        disableResizeWatcher: boolean;
        disableRouteWatcher: boolean;
        expandOnHover: boolean;
        floating: boolean;
        modelValue: boolean | null;
        permanent: boolean;
        rail: boolean | null;
        railWidth: string | number;
        scrim: string | boolean;
        temporary: boolean;
        persistent: boolean;
        touchless: boolean;
        width: string | number;
        location: "bottom" | "end" | "left" | "right" | "start" | "top";
        sticky: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    mobile: boolean | null;
    order: string | number;
    absolute: boolean;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    retainFocus: boolean;
    captureFocus: boolean;
    disableResizeWatcher: boolean;
    disableRouteWatcher: boolean;
    expandOnHover: boolean;
    floating: boolean;
    modelValue: boolean | null;
    permanent: boolean;
    rail: boolean | null;
    railWidth: string | number;
    scrim: string | boolean;
    temporary: boolean;
    persistent: boolean;
    touchless: boolean;
    width: string | number;
    location: "bottom" | "end" | "left" | "right" | "start" | "top";
    sticky: boolean;
} & {
    theme?: string | undefined;
    class?: any;
    mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
    name?: string | undefined;
    border?: string | number | boolean | undefined;
    elevation?: string | number | undefined;
    rounded?: string | number | boolean | undefined;
    closeDelay?: string | number | undefined;
    openDelay?: string | number | undefined;
    color?: string | undefined;
    image?: string | undefined;
} & {
    $children?: {
        default?: (() => import("vue").VNodeChild) | undefined;
        prepend?: (() => import("vue").VNodeChild) | undefined;
        append?: (() => import("vue").VNodeChild) | undefined;
        image?: ((arg: VNavigationDrawerImageSlot) => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
        prepend?: false | (() => import("vue").VNodeChild) | undefined;
        append?: false | (() => import("vue").VNodeChild) | undefined;
        image?: false | ((arg: VNavigationDrawerImageSlot) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:image"?: false | ((arg: VNavigationDrawerImageSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((val: boolean) => any) | undefined;
    "onUpdate:rail"?: ((val: boolean) => any) | undefined;
}, {
    isStuck: import("vue").ShallowRef<"bottom" | "top" | boolean, "bottom" | "top" | boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (val: boolean) => true;
    "update:rail": (val: boolean) => true;
}, string, {
    style: import("vue").StyleValue;
    mobile: boolean | null;
    order: string | number;
    absolute: boolean;
    rounded: string | number | boolean;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    retainFocus: boolean;
    captureFocus: boolean;
    disableResizeWatcher: boolean;
    disableRouteWatcher: boolean;
    expandOnHover: boolean;
    floating: boolean;
    modelValue: boolean | null;
    permanent: boolean;
    rail: boolean | null;
    railWidth: string | number;
    scrim: string | boolean;
    temporary: boolean;
    persistent: boolean;
    touchless: boolean;
    width: string | number;
    location: "bottom" | "end" | "left" | "right" | "start" | "top";
    sticky: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    prepend: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    append: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    image: (arg: VNavigationDrawerImageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    mobile: Omit<{
        type: PropType<boolean | null>;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<boolean | null>;
        default: NonNullable<boolean | null> | null;
    };
    mobileBreakpoint: PropType<number | import("../../types.js").DisplayBreakpoint>;
    name: {
        type: StringConstructor;
    };
    order: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    absolute: BooleanConstructor;
    border: (BooleanConstructor | NumberConstructor | StringConstructor)[];
    elevation: {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    };
    rounded: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    tag: Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    closeDelay: (NumberConstructor | StringConstructor)[];
    openDelay: (NumberConstructor | StringConstructor)[];
    retainFocus: BooleanConstructor;
    captureFocus: BooleanConstructor;
    color: StringConstructor;
    disableResizeWatcher: BooleanConstructor;
    disableRouteWatcher: BooleanConstructor;
    expandOnHover: BooleanConstructor;
    floating: BooleanConstructor;
    modelValue: {
        type: PropType<boolean | null>;
        default: null;
    };
    permanent: BooleanConstructor;
    rail: {
        type: PropType<boolean | null>;
        default: null;
    };
    railWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    scrim: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    image: StringConstructor;
    temporary: BooleanConstructor;
    persistent: BooleanConstructor;
    touchless: BooleanConstructor;
    width: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    location: {
        type: PropType<"bottom" | "end" | "left" | "right" | "start" | "top">;
        default: string;
        validator: (value: any) => boolean;
    };
    sticky: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    mobile: Omit<{
        type: PropType<boolean | null>;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<boolean | null>;
        default: NonNullable<boolean | null> | null;
    };
    mobileBreakpoint: PropType<number | import("../../types.js").DisplayBreakpoint>;
    name: {
        type: StringConstructor;
    };
    order: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    absolute: BooleanConstructor;
    border: (BooleanConstructor | NumberConstructor | StringConstructor)[];
    elevation: {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    };
    rounded: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    tag: Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    closeDelay: (NumberConstructor | StringConstructor)[];
    openDelay: (NumberConstructor | StringConstructor)[];
    retainFocus: BooleanConstructor;
    captureFocus: BooleanConstructor;
    color: StringConstructor;
    disableResizeWatcher: BooleanConstructor;
    disableRouteWatcher: BooleanConstructor;
    expandOnHover: BooleanConstructor;
    floating: BooleanConstructor;
    modelValue: {
        type: PropType<boolean | null>;
        default: null;
    };
    permanent: BooleanConstructor;
    rail: {
        type: PropType<boolean | null>;
        default: null;
    };
    railWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    scrim: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    image: StringConstructor;
    temporary: BooleanConstructor;
    persistent: BooleanConstructor;
    touchless: BooleanConstructor;
    width: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    location: {
        type: PropType<"bottom" | "end" | "left" | "right" | "start" | "top">;
        default: string;
        validator: (value: any) => boolean;
    };
    sticky: BooleanConstructor;
}>>;
export type VNavigationDrawer = InstanceType<typeof VNavigationDrawer>;
