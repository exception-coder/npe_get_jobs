// Styles

// Types
import type { PropType, Ref } from 'vue';
import type { TemplateRef } from '../../util/index.js';
export type OverlaySlots = {
    default: {
        isActive: Ref<boolean>;
    };
    activator: {
        isActive: boolean;
        props: Record<string, any>;
        targetRef: TemplateRef;
    };
};
export declare const makeVOverlayProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
    locationStrategy?: unknown;
    location?: unknown;
    origin?: unknown;
    offset?: unknown;
    stickToTarget?: unknown;
    viewportMargin?: unknown;
    scrollStrategy?: unknown;
    height?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    width?: unknown;
    closeDelay?: unknown;
    openDelay?: unknown;
    target?: unknown;
    activator?: unknown;
    activatorProps?: unknown;
    openOnClick?: unknown;
    openOnHover?: unknown;
    openOnFocus?: unknown;
    closeOnContentClick?: unknown;
    retainFocus?: unknown;
    captureFocus?: unknown;
    disableInitialFocus?: unknown;
    eager?: unknown;
    transition?: unknown;
    absolute?: unknown;
    attach?: unknown;
    closeOnBack?: unknown;
    contained?: unknown;
    contentClass?: unknown;
    contentProps?: unknown;
    disabled?: unknown;
    opacity?: unknown;
    noClickAnimation?: unknown;
    modelValue?: unknown;
    persistent?: unknown;
    scrim?: unknown;
    zIndex?: unknown;
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
    locationStrategy: unknown extends Defaults["locationStrategy"] ? {
        type: PropType<"connected" | "static" | import("../../types.js").LocationStrategyFunction>;
        default: string;
        validator: (val: any) => boolean;
    } : Omit<{
        type: PropType<"connected" | "static" | import("../../types.js").LocationStrategyFunction>;
        default: string;
        validator: (val: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["locationStrategy"] ? "connected" | "static" | import("../../types.js").LocationStrategyFunction : "connected" | "static" | import("../../types.js").LocationStrategyFunction | Defaults["locationStrategy"]>;
        default: unknown extends Defaults["locationStrategy"] ? "connected" | "static" | import("../../types.js").LocationStrategyFunction : Defaults["locationStrategy"] | NonNullable<"connected" | "static" | import("../../types.js").LocationStrategyFunction>;
    };
    location: unknown extends Defaults["location"] ? {
        type: PropType<import("../../util/index.js").Anchor>;
        default: string;
    } : Omit<{
        type: PropType<import("../../util/index.js").Anchor>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["location"] ? import("../../util/index.js").Anchor : Defaults["location"] | import("../../util/index.js").Anchor>;
        default: unknown extends Defaults["location"] ? import("../../util/index.js").Anchor : Defaults["location"] | NonNullable<import("../../util/index.js").Anchor>;
    };
    origin: unknown extends Defaults["origin"] ? {
        type: PropType<"auto" | "overlap" | import("../../util/index.js").Anchor>;
        default: string;
    } : Omit<{
        type: PropType<"auto" | "overlap" | import("../../util/index.js").Anchor>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["origin"] ? "auto" | "overlap" | import("../../util/index.js").Anchor : "auto" | "overlap" | Defaults["origin"] | import("../../util/index.js").Anchor>;
        default: unknown extends Defaults["origin"] ? "auto" | "overlap" | import("../../util/index.js").Anchor : Defaults["origin"] | NonNullable<"auto" | "overlap" | import("../../util/index.js").Anchor>;
    };
    offset: unknown extends Defaults["offset"] ? PropType<string | number | number[] | undefined> : {
        type: PropType<unknown extends Defaults["offset"] ? string | number | number[] | undefined : string | number | number[] | Defaults["offset"] | undefined>;
        default: unknown extends Defaults["offset"] ? string | number | number[] | undefined : Defaults["offset"] | NonNullable<string | number | number[] | undefined>;
    };
    stickToTarget: unknown extends Defaults["stickToTarget"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["stickToTarget"] ? boolean : boolean | Defaults["stickToTarget"]>;
        default: unknown extends Defaults["stickToTarget"] ? boolean : boolean | Defaults["stickToTarget"];
    };
    viewportMargin: unknown extends Defaults["viewportMargin"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["viewportMargin"] ? string | number : string | number | Defaults["viewportMargin"]>;
        default: unknown extends Defaults["viewportMargin"] ? string | number : Defaults["viewportMargin"] | NonNullable<string | number>;
    };
    scrollStrategy: unknown extends Defaults["scrollStrategy"] ? {
        type: PropType<"block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction>;
        default: string;
        validator: (val: any) => boolean;
    } : Omit<{
        type: PropType<"block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction>;
        default: string;
        validator: (val: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["scrollStrategy"] ? "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction : "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction | Defaults["scrollStrategy"]>;
        default: unknown extends Defaults["scrollStrategy"] ? "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction : Defaults["scrollStrategy"] | NonNullable<"block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction>;
    };
    height: unknown extends Defaults["height"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : Defaults["height"] | NonNullable<string | number>;
    };
    maxHeight: unknown extends Defaults["maxHeight"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["maxHeight"] ? string | number : string | number | Defaults["maxHeight"]>;
        default: unknown extends Defaults["maxHeight"] ? string | number : Defaults["maxHeight"] | NonNullable<string | number>;
    };
    maxWidth: unknown extends Defaults["maxWidth"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["maxWidth"] ? string | number : string | number | Defaults["maxWidth"]>;
        default: unknown extends Defaults["maxWidth"] ? string | number : Defaults["maxWidth"] | NonNullable<string | number>;
    };
    minHeight: unknown extends Defaults["minHeight"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["minHeight"] ? string | number : string | number | Defaults["minHeight"]>;
        default: unknown extends Defaults["minHeight"] ? string | number : Defaults["minHeight"] | NonNullable<string | number>;
    };
    minWidth: unknown extends Defaults["minWidth"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["minWidth"] ? string | number : string | number | Defaults["minWidth"]>;
        default: unknown extends Defaults["minWidth"] ? string | number : Defaults["minWidth"] | NonNullable<string | number>;
    };
    width: unknown extends Defaults["width"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : Defaults["width"] | NonNullable<string | number>;
    };
    closeDelay: unknown extends Defaults["closeDelay"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["closeDelay"] ? string | number : string | number | Defaults["closeDelay"]>;
        default: unknown extends Defaults["closeDelay"] ? string | number : Defaults["closeDelay"] | NonNullable<string | number>;
    };
    openDelay: unknown extends Defaults["openDelay"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["openDelay"] ? string | number : string | number | Defaults["openDelay"]>;
        default: unknown extends Defaults["openDelay"] ? string | number : Defaults["openDelay"] | NonNullable<string | number>;
    };
    target: unknown extends Defaults["target"] ? PropType<"cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined> : {
        type: PropType<unknown extends Defaults["target"] ? "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined : "cursor" | "parent" | Element | [x: number, y: number] | Defaults["target"] | import("vue").ComponentPublicInstance | (string & {}) | undefined>;
        default: unknown extends Defaults["target"] ? "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined : Defaults["target"] | NonNullable<"cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined>;
    };
    activator: unknown extends Defaults["activator"] ? PropType<"parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined> : {
        type: PropType<unknown extends Defaults["activator"] ? "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined : "parent" | Element | Defaults["activator"] | import("vue").ComponentPublicInstance | (string & {}) | undefined>;
        default: unknown extends Defaults["activator"] ? "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined : Defaults["activator"] | NonNullable<"parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined>;
    };
    activatorProps: unknown extends Defaults["activatorProps"] ? {
        type: PropType<Record<string, any>>;
        default: () => {};
    } : Omit<{
        type: PropType<Record<string, any>>;
        default: () => {};
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["activatorProps"] ? Record<string, any> : Record<string, any> | Defaults["activatorProps"]>;
        default: unknown extends Defaults["activatorProps"] ? Record<string, any> : Record<string, any> | Defaults["activatorProps"];
    };
    openOnClick: unknown extends Defaults["openOnClick"] ? {
        type: BooleanConstructor;
        default: undefined;
    } : Omit<{
        type: BooleanConstructor;
        default: undefined;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["openOnClick"] ? boolean : boolean | Defaults["openOnClick"]>;
        default: unknown extends Defaults["openOnClick"] ? boolean : boolean | Defaults["openOnClick"];
    };
    openOnHover: unknown extends Defaults["openOnHover"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["openOnHover"] ? boolean : boolean | Defaults["openOnHover"]>;
        default: unknown extends Defaults["openOnHover"] ? boolean : boolean | Defaults["openOnHover"];
    };
    openOnFocus: unknown extends Defaults["openOnFocus"] ? {
        type: BooleanConstructor;
        default: undefined;
    } : Omit<{
        type: BooleanConstructor;
        default: undefined;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["openOnFocus"] ? boolean : boolean | Defaults["openOnFocus"]>;
        default: unknown extends Defaults["openOnFocus"] ? boolean : boolean | Defaults["openOnFocus"];
    };
    closeOnContentClick: unknown extends Defaults["closeOnContentClick"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["closeOnContentClick"] ? boolean : boolean | Defaults["closeOnContentClick"]>;
        default: unknown extends Defaults["closeOnContentClick"] ? boolean : boolean | Defaults["closeOnContentClick"];
    };
    retainFocus: unknown extends Defaults["retainFocus"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["retainFocus"] ? boolean : boolean | Defaults["retainFocus"]>;
        default: unknown extends Defaults["retainFocus"] ? boolean : boolean | Defaults["retainFocus"];
    };
    captureFocus: unknown extends Defaults["captureFocus"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["captureFocus"] ? boolean : boolean | Defaults["captureFocus"]>;
        default: unknown extends Defaults["captureFocus"] ? boolean : boolean | Defaults["captureFocus"];
    };
    disableInitialFocus: unknown extends Defaults["disableInitialFocus"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disableInitialFocus"] ? boolean : boolean | Defaults["disableInitialFocus"]>;
        default: unknown extends Defaults["disableInitialFocus"] ? boolean : boolean | Defaults["disableInitialFocus"];
    };
    eager: unknown extends Defaults["eager"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"]>;
        default: unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"];
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
    absolute: unknown extends Defaults["absolute"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["absolute"] ? boolean : boolean | Defaults["absolute"]>;
        default: unknown extends Defaults["absolute"] ? boolean : boolean | Defaults["absolute"];
    };
    attach: unknown extends Defaults["attach"] ? PropType<string | boolean | Element> : {
        type: PropType<unknown extends Defaults["attach"] ? string | boolean | Element : string | boolean | Element | Defaults["attach"]>;
        default: unknown extends Defaults["attach"] ? string | boolean | Element : Defaults["attach"] | NonNullable<string | boolean | Element>;
    };
    closeOnBack: unknown extends Defaults["closeOnBack"] ? {
        type: BooleanConstructor;
        default: boolean;
    } : Omit<{
        type: BooleanConstructor;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["closeOnBack"] ? boolean : boolean | Defaults["closeOnBack"]>;
        default: unknown extends Defaults["closeOnBack"] ? boolean : boolean | Defaults["closeOnBack"];
    };
    contained: unknown extends Defaults["contained"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["contained"] ? boolean : boolean | Defaults["contained"]>;
        default: unknown extends Defaults["contained"] ? boolean : boolean | Defaults["contained"];
    };
    contentClass: unknown extends Defaults["contentClass"] ? null : {
        type: PropType<unknown extends Defaults["contentClass"] ? any : any>;
        default: unknown extends Defaults["contentClass"] ? any : any;
    };
    contentProps: unknown extends Defaults["contentProps"] ? null : {
        type: PropType<unknown extends Defaults["contentProps"] ? any : any>;
        default: unknown extends Defaults["contentProps"] ? any : any;
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    opacity: unknown extends Defaults["opacity"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["opacity"] ? string | number : string | number | Defaults["opacity"]>;
        default: unknown extends Defaults["opacity"] ? string | number : Defaults["opacity"] | NonNullable<string | number>;
    };
    noClickAnimation: unknown extends Defaults["noClickAnimation"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["noClickAnimation"] ? boolean : boolean | Defaults["noClickAnimation"]>;
        default: unknown extends Defaults["noClickAnimation"] ? boolean : boolean | Defaults["noClickAnimation"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["modelValue"] ? boolean : boolean | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? boolean : boolean | Defaults["modelValue"];
    };
    persistent: unknown extends Defaults["persistent"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["persistent"] ? boolean : boolean | Defaults["persistent"]>;
        default: unknown extends Defaults["persistent"] ? boolean : boolean | Defaults["persistent"];
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
    zIndex: unknown extends Defaults["zIndex"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["zIndex"] ? string | number : string | number | Defaults["zIndex"]>;
        default: unknown extends Defaults["zIndex"] ? string | number : Defaults["zIndex"] | NonNullable<string | number>;
    };
};
export declare const VOverlay: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
        location: import("../../util/index.js").Anchor;
        origin: "auto" | "overlap" | import("../../util/index.js").Anchor;
        stickToTarget: boolean;
        viewportMargin: string | number;
        scrollStrategy: "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction;
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        retainFocus: boolean;
        captureFocus: boolean;
        eager: boolean;
        absolute: boolean;
        closeOnBack: boolean;
        contained: boolean;
        disabled: boolean;
        noClickAnimation: boolean;
        modelValue: boolean;
        persistent: boolean;
        scrim: string | boolean;
        zIndex: string | number;
        _disableGlobalStack: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        offset?: string | number | number[] | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
        activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        transition?: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null | undefined;
        attach?: string | boolean | Element | undefined;
        contentClass?: any;
        contentProps?: any;
        opacity?: string | number | undefined;
    } & {
        $children?: {
            default?: ((arg: {
                isActive: Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            isActive: Ref<boolean, boolean>;
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: {
                isActive: Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: TemplateRef;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: {
            isActive: Ref<boolean, boolean>;
        }) => import("vue").VNodeChild) | undefined;
    } & {
        onAfterEnter?: (() => any) | undefined;
        onAfterLeave?: (() => any) | undefined;
        "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
        onKeydown?: ((e: KeyboardEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }, {
        activatorEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
        scrimEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
        target: import("vue").ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
        animateClick: () => void;
        contentEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
        rootEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
        globalTop: Readonly<Ref<boolean, boolean>>;
        localTop: Readonly<Ref<boolean, boolean>>;
        updateLocation: Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "click:outside": (e: MouseEvent) => true;
        "update:modelValue": (value: boolean) => true;
        keydown: (e: KeyboardEvent) => true;
        afterEnter: () => true;
        afterLeave: () => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
        location: import("../../util/index.js").Anchor;
        origin: "auto" | "overlap" | import("../../util/index.js").Anchor;
        stickToTarget: boolean;
        viewportMargin: string | number;
        scrollStrategy: "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction;
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
        retainFocus: boolean;
        captureFocus: boolean;
        eager: boolean;
        absolute: boolean;
        closeOnBack: boolean;
        contained: boolean;
        disabled: boolean;
        noClickAnimation: boolean;
        modelValue: boolean;
        persistent: boolean;
        scrim: string | boolean;
        zIndex: string | number;
        _disableGlobalStack: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: {
            isActive: Ref<boolean, boolean>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        activator: (arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: TemplateRef;
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
        locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
        location: import("../../util/index.js").Anchor;
        origin: "auto" | "overlap" | import("../../util/index.js").Anchor;
        stickToTarget: boolean;
        viewportMargin: string | number;
        scrollStrategy: "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction;
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        retainFocus: boolean;
        captureFocus: boolean;
        eager: boolean;
        absolute: boolean;
        closeOnBack: boolean;
        contained: boolean;
        disabled: boolean;
        noClickAnimation: boolean;
        modelValue: boolean;
        persistent: boolean;
        scrim: string | boolean;
        zIndex: string | number;
        _disableGlobalStack: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        offset?: string | number | number[] | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
        activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        transition?: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null | undefined;
        attach?: string | boolean | Element | undefined;
        contentClass?: any;
        contentProps?: any;
        opacity?: string | number | undefined;
    } & {
        $children?: {
            default?: ((arg: {
                isActive: Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            isActive: Ref<boolean, boolean>;
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: {
                isActive: Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: TemplateRef;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: {
            isActive: Ref<boolean, boolean>;
        }) => import("vue").VNodeChild) | undefined;
    } & {
        onAfterEnter?: (() => any) | undefined;
        onAfterLeave?: (() => any) | undefined;
        "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
        onKeydown?: ((e: KeyboardEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }, {
        activatorEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
        scrimEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
        target: import("vue").ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
        animateClick: () => void;
        contentEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
        rootEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
        globalTop: Readonly<Ref<boolean, boolean>>;
        localTop: Readonly<Ref<boolean, boolean>>;
        updateLocation: Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
    }, {}, {}, {}, {
        style: import("vue").StyleValue;
        locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
        location: import("../../util/index.js").Anchor;
        origin: "auto" | "overlap" | import("../../util/index.js").Anchor;
        stickToTarget: boolean;
        viewportMargin: string | number;
        scrollStrategy: "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction;
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
        retainFocus: boolean;
        captureFocus: boolean;
        eager: boolean;
        absolute: boolean;
        closeOnBack: boolean;
        contained: boolean;
        disabled: boolean;
        noClickAnimation: boolean;
        modelValue: boolean;
        persistent: boolean;
        scrim: string | boolean;
        zIndex: string | number;
        _disableGlobalStack: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
    location: import("../../util/index.js").Anchor;
    origin: "auto" | "overlap" | import("../../util/index.js").Anchor;
    stickToTarget: boolean;
    viewportMargin: string | number;
    scrollStrategy: "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction;
    activatorProps: Record<string, any>;
    openOnHover: boolean;
    closeOnContentClick: boolean;
    retainFocus: boolean;
    captureFocus: boolean;
    eager: boolean;
    absolute: boolean;
    closeOnBack: boolean;
    contained: boolean;
    disabled: boolean;
    noClickAnimation: boolean;
    modelValue: boolean;
    persistent: boolean;
    scrim: string | boolean;
    zIndex: string | number;
    _disableGlobalStack: boolean;
} & {
    theme?: string | undefined;
    class?: any;
    offset?: string | number | number[] | undefined;
    height?: string | number | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    width?: string | number | undefined;
    closeDelay?: string | number | undefined;
    openDelay?: string | number | undefined;
    target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
    activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
    openOnClick?: boolean | undefined;
    openOnFocus?: boolean | undefined;
    transition?: string | boolean | (import("vue").TransitionProps & {
        component?: import("vue").Component | undefined;
    }) | null | undefined;
    attach?: string | boolean | Element | undefined;
    contentClass?: any;
    contentProps?: any;
    opacity?: string | number | undefined;
} & {
    $children?: {
        default?: ((arg: {
            isActive: Ref<boolean, boolean>;
        }) => import("vue").VNodeChild) | undefined;
        activator?: ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: TemplateRef;
        }) => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | ((arg: {
        isActive: Ref<boolean, boolean>;
    }) => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        default?: false | ((arg: {
            isActive: Ref<boolean, boolean>;
        }) => import("vue").VNodeChild) | undefined;
        activator?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: TemplateRef;
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:activator"?: false | ((arg: {
        isActive: boolean;
        props: Record<string, any>;
        targetRef: TemplateRef;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | ((arg: {
        isActive: Ref<boolean, boolean>;
    }) => import("vue").VNodeChild) | undefined;
} & {
    onAfterEnter?: (() => any) | undefined;
    onAfterLeave?: (() => any) | undefined;
    "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
    onKeydown?: ((e: KeyboardEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}, {
    activatorEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
    scrimEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
    target: import("vue").ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
    animateClick: () => void;
    contentEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
    rootEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
    globalTop: Readonly<Ref<boolean, boolean>>;
    localTop: Readonly<Ref<boolean, boolean>>;
    updateLocation: Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "click:outside": (e: MouseEvent) => true;
    "update:modelValue": (value: boolean) => true;
    keydown: (e: KeyboardEvent) => true;
    afterEnter: () => true;
    afterLeave: () => true;
}, string, {
    style: import("vue").StyleValue;
    locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
    location: import("../../util/index.js").Anchor;
    origin: "auto" | "overlap" | import("../../util/index.js").Anchor;
    stickToTarget: boolean;
    viewportMargin: string | number;
    scrollStrategy: "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction;
    activatorProps: Record<string, any>;
    openOnClick: boolean;
    openOnHover: boolean;
    openOnFocus: boolean;
    closeOnContentClick: boolean;
    retainFocus: boolean;
    captureFocus: boolean;
    eager: boolean;
    absolute: boolean;
    closeOnBack: boolean;
    contained: boolean;
    disabled: boolean;
    noClickAnimation: boolean;
    modelValue: boolean;
    persistent: boolean;
    scrim: string | boolean;
    zIndex: string | number;
    _disableGlobalStack: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: {
        isActive: Ref<boolean, boolean>;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    activator: (arg: {
        isActive: boolean;
        props: Record<string, any>;
        targetRef: TemplateRef;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    locationStrategy: {
        type: PropType<"connected" | "static" | import("../../types.js").LocationStrategyFunction>;
        default: string;
        validator: (val: any) => boolean;
    };
    location: {
        type: PropType<import("../../util/index.js").Anchor>;
        default: string;
    };
    origin: {
        type: PropType<"auto" | "overlap" | import("../../util/index.js").Anchor>;
        default: string;
    };
    offset: PropType<string | number | number[] | undefined>;
    stickToTarget: BooleanConstructor;
    viewportMargin: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    scrollStrategy: {
        type: PropType<"block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction>;
        default: string;
        validator: (val: any) => boolean;
    };
    height: (NumberConstructor | StringConstructor)[];
    maxHeight: (NumberConstructor | StringConstructor)[];
    maxWidth: (NumberConstructor | StringConstructor)[];
    minHeight: (NumberConstructor | StringConstructor)[];
    minWidth: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    closeDelay: (NumberConstructor | StringConstructor)[];
    openDelay: (NumberConstructor | StringConstructor)[];
    target: PropType<"cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined>;
    activator: PropType<"parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined>;
    activatorProps: {
        type: PropType<Record<string, any>>;
        default: () => {};
    };
    openOnClick: {
        type: BooleanConstructor;
        default: undefined;
    };
    openOnHover: BooleanConstructor;
    openOnFocus: {
        type: BooleanConstructor;
        default: undefined;
    };
    closeOnContentClick: BooleanConstructor;
    retainFocus: BooleanConstructor;
    captureFocus: BooleanConstructor;
    eager: BooleanConstructor;
    transition: import("vue").Prop<string | boolean | (import("vue").TransitionProps & {
        component?: import("vue").Component | undefined;
    }) | null>;
    absolute: BooleanConstructor;
    attach: PropType<string | boolean | Element>;
    closeOnBack: {
        type: BooleanConstructor;
        default: boolean;
    };
    contained: BooleanConstructor;
    contentClass: null;
    contentProps: null;
    disabled: BooleanConstructor;
    opacity: (NumberConstructor | StringConstructor)[];
    noClickAnimation: BooleanConstructor;
    modelValue: BooleanConstructor;
    persistent: BooleanConstructor;
    scrim: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    zIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    _disableGlobalStack: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    locationStrategy: {
        type: PropType<"connected" | "static" | import("../../types.js").LocationStrategyFunction>;
        default: string;
        validator: (val: any) => boolean;
    };
    location: {
        type: PropType<import("../../util/index.js").Anchor>;
        default: string;
    };
    origin: {
        type: PropType<"auto" | "overlap" | import("../../util/index.js").Anchor>;
        default: string;
    };
    offset: PropType<string | number | number[] | undefined>;
    stickToTarget: BooleanConstructor;
    viewportMargin: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    scrollStrategy: {
        type: PropType<"block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction>;
        default: string;
        validator: (val: any) => boolean;
    };
    height: (NumberConstructor | StringConstructor)[];
    maxHeight: (NumberConstructor | StringConstructor)[];
    maxWidth: (NumberConstructor | StringConstructor)[];
    minHeight: (NumberConstructor | StringConstructor)[];
    minWidth: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    closeDelay: (NumberConstructor | StringConstructor)[];
    openDelay: (NumberConstructor | StringConstructor)[];
    target: PropType<"cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined>;
    activator: PropType<"parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined>;
    activatorProps: {
        type: PropType<Record<string, any>>;
        default: () => {};
    };
    openOnClick: {
        type: BooleanConstructor;
        default: undefined;
    };
    openOnHover: BooleanConstructor;
    openOnFocus: {
        type: BooleanConstructor;
        default: undefined;
    };
    closeOnContentClick: BooleanConstructor;
    retainFocus: BooleanConstructor;
    captureFocus: BooleanConstructor;
    eager: BooleanConstructor;
    transition: import("vue").Prop<string | boolean | (import("vue").TransitionProps & {
        component?: import("vue").Component | undefined;
    }) | null>;
    absolute: BooleanConstructor;
    attach: PropType<string | boolean | Element>;
    closeOnBack: {
        type: BooleanConstructor;
        default: boolean;
    };
    contained: BooleanConstructor;
    contentClass: null;
    contentProps: null;
    disabled: BooleanConstructor;
    opacity: (NumberConstructor | StringConstructor)[];
    noClickAnimation: BooleanConstructor;
    modelValue: BooleanConstructor;
    persistent: BooleanConstructor;
    scrim: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    zIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    _disableGlobalStack: BooleanConstructor;
}>>;
export type VOverlay = InstanceType<typeof VOverlay>;
