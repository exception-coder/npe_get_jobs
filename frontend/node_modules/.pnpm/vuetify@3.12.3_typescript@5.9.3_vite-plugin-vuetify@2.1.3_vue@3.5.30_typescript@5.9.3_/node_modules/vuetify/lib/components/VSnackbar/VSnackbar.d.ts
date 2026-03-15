// Styles

// Utilities
import { nextTick } from 'vue';
// Types
import type { Ref } from 'vue';
export declare const makeVSnackbarProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
    locationStrategy?: unknown;
    location?: unknown;
    origin?: unknown;
    offset?: unknown;
    rounded?: unknown;
    tile?: unknown;
    color?: unknown;
    variant?: unknown;
    height?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    width?: unknown;
    position?: unknown;
    closeDelay?: unknown;
    openDelay?: unknown;
    target?: unknown;
    activator?: unknown;
    activatorProps?: unknown;
    openOnClick?: unknown;
    openOnHover?: unknown;
    openOnFocus?: unknown;
    closeOnContentClick?: unknown;
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
    modelValue?: unknown;
    zIndex?: unknown;
    multiLine?: unknown;
    text?: unknown;
    timer?: unknown;
    timeout?: unknown;
    vertical?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
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
    locationStrategy: unknown extends Defaults["locationStrategy"] ? {
        type: import("vue").PropType<"connected" | "static" | import("../../types.js").LocationStrategyFunction>;
        default: string;
        validator: (val: any) => boolean;
    } : Omit<{
        type: import("vue").PropType<"connected" | "static" | import("../../types.js").LocationStrategyFunction>;
        default: string;
        validator: (val: any) => boolean;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["locationStrategy"] ? "connected" | "static" | import("../../types.js").LocationStrategyFunction : "connected" | "static" | import("../../types.js").LocationStrategyFunction | Defaults["locationStrategy"]>;
        default: unknown extends Defaults["locationStrategy"] ? "connected" | "static" | import("../../types.js").LocationStrategyFunction : Defaults["locationStrategy"] | NonNullable<"connected" | "static" | import("../../types.js").LocationStrategyFunction>;
    };
    location: unknown extends Defaults["location"] ? {
        type: import("vue").PropType<import("../../util/index.js").Anchor>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../util/index.js").Anchor>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["location"] ? import("../../util/index.js").Anchor : Defaults["location"] | import("../../util/index.js").Anchor>;
        default: unknown extends Defaults["location"] ? import("../../util/index.js").Anchor : Defaults["location"] | NonNullable<import("../../util/index.js").Anchor>;
    };
    origin: unknown extends Defaults["origin"] ? {
        type: import("vue").PropType<"auto" | "overlap" | import("../../util/index.js").Anchor>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<"auto" | "overlap" | import("../../util/index.js").Anchor>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["origin"] ? "auto" | "overlap" | import("../../util/index.js").Anchor : "auto" | "overlap" | Defaults["origin"] | import("../../util/index.js").Anchor>;
        default: unknown extends Defaults["origin"] ? "auto" | "overlap" | import("../../util/index.js").Anchor : Defaults["origin"] | NonNullable<"auto" | "overlap" | import("../../util/index.js").Anchor>;
    };
    offset: unknown extends Defaults["offset"] ? import("vue").PropType<string | number | number[] | undefined> : {
        type: import("vue").PropType<unknown extends Defaults["offset"] ? string | number | number[] | undefined : string | number | number[] | Defaults["offset"] | undefined>;
        default: unknown extends Defaults["offset"] ? string | number | number[] | undefined : Defaults["offset"] | NonNullable<string | number | number[] | undefined>;
    };
    rounded: unknown extends Defaults["rounded"] ? {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    } : Omit<{
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["rounded"] ? string | number | boolean : string | number | boolean | Defaults["rounded"]>;
        default: unknown extends Defaults["rounded"] ? string | number | boolean : Defaults["rounded"] | NonNullable<string | number | boolean>;
    };
    tile: unknown extends Defaults["tile"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["tile"] ? boolean : boolean | Defaults["tile"]>;
        default: unknown extends Defaults["tile"] ? boolean : boolean | Defaults["tile"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    variant: unknown extends Defaults["variant"] ? {
        type: import("vue").PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: import("vue").PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["variant"] ? "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal" : "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal" | Defaults["variant"]>;
        default: unknown extends Defaults["variant"] ? "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal" : Defaults["variant"] | NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
    };
    height: unknown extends Defaults["height"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : Defaults["height"] | NonNullable<string | number>;
    };
    maxHeight: unknown extends Defaults["maxHeight"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["maxHeight"] ? string | number : string | number | Defaults["maxHeight"]>;
        default: unknown extends Defaults["maxHeight"] ? string | number : Defaults["maxHeight"] | NonNullable<string | number>;
    };
    maxWidth: unknown extends Defaults["maxWidth"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["maxWidth"] ? string | number : string | number | Defaults["maxWidth"]>;
        default: unknown extends Defaults["maxWidth"] ? string | number : Defaults["maxWidth"] | NonNullable<string | number>;
    };
    minHeight: unknown extends Defaults["minHeight"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["minHeight"] ? string | number : string | number | Defaults["minHeight"]>;
        default: unknown extends Defaults["minHeight"] ? string | number : Defaults["minHeight"] | NonNullable<string | number>;
    };
    minWidth: unknown extends Defaults["minWidth"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["minWidth"] ? string | number : string | number | Defaults["minWidth"]>;
        default: unknown extends Defaults["minWidth"] ? string | number : Defaults["minWidth"] | NonNullable<string | number>;
    };
    width: unknown extends Defaults["width"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : Defaults["width"] | NonNullable<string | number>;
    };
    position: unknown extends Defaults["position"] ? {
        type: import("vue").PropType<"absolute" | "fixed" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    } : Omit<{
        type: import("vue").PropType<"absolute" | "fixed" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["position"] ? "absolute" | "fixed" | "relative" | "static" | "sticky" : "absolute" | "fixed" | "relative" | "static" | "sticky" | Defaults["position"]>;
        default: unknown extends Defaults["position"] ? "absolute" | "fixed" | "relative" | "static" | "sticky" : Defaults["position"] | NonNullable<"absolute" | "fixed" | "relative" | "static" | "sticky">;
    };
    closeDelay: unknown extends Defaults["closeDelay"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["closeDelay"] ? string | number : string | number | Defaults["closeDelay"]>;
        default: unknown extends Defaults["closeDelay"] ? string | number : Defaults["closeDelay"] | NonNullable<string | number>;
    };
    openDelay: unknown extends Defaults["openDelay"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["openDelay"] ? string | number : string | number | Defaults["openDelay"]>;
        default: unknown extends Defaults["openDelay"] ? string | number : Defaults["openDelay"] | NonNullable<string | number>;
    };
    target: unknown extends Defaults["target"] ? import("vue").PropType<"cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined> : {
        type: import("vue").PropType<unknown extends Defaults["target"] ? "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined : "cursor" | "parent" | Element | [x: number, y: number] | Defaults["target"] | import("vue").ComponentPublicInstance | (string & {}) | undefined>;
        default: unknown extends Defaults["target"] ? "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined : Defaults["target"] | NonNullable<"cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined>;
    };
    activator: unknown extends Defaults["activator"] ? import("vue").PropType<"parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined> : {
        type: import("vue").PropType<unknown extends Defaults["activator"] ? "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined : "parent" | Element | Defaults["activator"] | import("vue").ComponentPublicInstance | (string & {}) | undefined>;
        default: unknown extends Defaults["activator"] ? "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined : Defaults["activator"] | NonNullable<"parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined>;
    };
    activatorProps: unknown extends Defaults["activatorProps"] ? {
        type: import("vue").PropType<Record<string, any>>;
        default: () => {};
    } : Omit<{
        type: import("vue").PropType<Record<string, any>>;
        default: () => {};
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["activatorProps"] ? Record<string, any> : Record<string, any> | Defaults["activatorProps"]>;
        default: unknown extends Defaults["activatorProps"] ? Record<string, any> : Record<string, any> | Defaults["activatorProps"];
    };
    openOnClick: unknown extends Defaults["openOnClick"] ? {
        type: BooleanConstructor;
        default: undefined;
    } : Omit<{
        type: BooleanConstructor;
        default: undefined;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["openOnClick"] ? boolean : boolean | Defaults["openOnClick"]>;
        default: unknown extends Defaults["openOnClick"] ? boolean : boolean | Defaults["openOnClick"];
    };
    openOnHover: unknown extends Defaults["openOnHover"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["openOnHover"] ? boolean : boolean | Defaults["openOnHover"]>;
        default: unknown extends Defaults["openOnHover"] ? boolean : boolean | Defaults["openOnHover"];
    };
    openOnFocus: unknown extends Defaults["openOnFocus"] ? {
        type: BooleanConstructor;
        default: undefined;
    } : Omit<{
        type: BooleanConstructor;
        default: undefined;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["openOnFocus"] ? boolean : boolean | Defaults["openOnFocus"]>;
        default: unknown extends Defaults["openOnFocus"] ? boolean : boolean | Defaults["openOnFocus"];
    };
    closeOnContentClick: unknown extends Defaults["closeOnContentClick"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["closeOnContentClick"] ? boolean : boolean | Defaults["closeOnContentClick"]>;
        default: unknown extends Defaults["closeOnContentClick"] ? boolean : boolean | Defaults["closeOnContentClick"];
    };
    eager: unknown extends Defaults["eager"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"]>;
        default: unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"];
    };
    transition: unknown extends Defaults["transition"] ? {
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null>;
    } : Omit<{
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null>;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["transition"] ? string | boolean | (import("vue").TransitionProps & {
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
        type: import("vue").PropType<unknown extends Defaults["absolute"] ? boolean : boolean | Defaults["absolute"]>;
        default: unknown extends Defaults["absolute"] ? boolean : boolean | Defaults["absolute"];
    };
    attach: unknown extends Defaults["attach"] ? import("vue").PropType<string | boolean | Element> : {
        type: import("vue").PropType<unknown extends Defaults["attach"] ? string | boolean | Element : string | boolean | Element | Defaults["attach"]>;
        default: unknown extends Defaults["attach"] ? string | boolean | Element : Defaults["attach"] | NonNullable<string | boolean | Element>;
    };
    closeOnBack: unknown extends Defaults["closeOnBack"] ? {
        type: BooleanConstructor;
        default: boolean;
    } : Omit<{
        type: BooleanConstructor;
        default: boolean;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["closeOnBack"] ? boolean : boolean | Defaults["closeOnBack"]>;
        default: unknown extends Defaults["closeOnBack"] ? boolean : boolean | Defaults["closeOnBack"];
    };
    contained: unknown extends Defaults["contained"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["contained"] ? boolean : boolean | Defaults["contained"]>;
        default: unknown extends Defaults["contained"] ? boolean : boolean | Defaults["contained"];
    };
    contentClass: unknown extends Defaults["contentClass"] ? null : {
        type: import("vue").PropType<unknown extends Defaults["contentClass"] ? any : any>;
        default: unknown extends Defaults["contentClass"] ? any : any;
    };
    contentProps: unknown extends Defaults["contentProps"] ? null : {
        type: import("vue").PropType<unknown extends Defaults["contentProps"] ? any : any>;
        default: unknown extends Defaults["contentProps"] ? any : any;
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    opacity: unknown extends Defaults["opacity"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["opacity"] ? string | number : string | number | Defaults["opacity"]>;
        default: unknown extends Defaults["opacity"] ? string | number : Defaults["opacity"] | NonNullable<string | number>;
    };
    modelValue: unknown extends Defaults["modelValue"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["modelValue"] ? boolean : boolean | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? boolean : boolean | Defaults["modelValue"];
    };
    zIndex: unknown extends Defaults["zIndex"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["zIndex"] ? string | number : string | number | Defaults["zIndex"]>;
        default: unknown extends Defaults["zIndex"] ? string | number : Defaults["zIndex"] | NonNullable<string | number>;
    };
    multiLine: unknown extends Defaults["multiLine"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["multiLine"] ? boolean : boolean | Defaults["multiLine"]>;
        default: unknown extends Defaults["multiLine"] ? boolean : boolean | Defaults["multiLine"];
    };
    text: unknown extends Defaults["text"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["text"] ? string : string | Defaults["text"]>;
        default: unknown extends Defaults["text"] ? string : string | Defaults["text"];
    };
    timer: unknown extends Defaults["timer"] ? (BooleanConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["timer"] ? string | boolean : string | boolean | Defaults["timer"]>;
        default: unknown extends Defaults["timer"] ? string | boolean : Defaults["timer"] | NonNullable<string | boolean>;
    };
    timeout: unknown extends Defaults["timeout"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["timeout"] ? string | number : string | number | Defaults["timeout"]>;
        default: unknown extends Defaults["timeout"] ? string | number : Defaults["timeout"] | NonNullable<string | number>;
    };
    vertical: unknown extends Defaults["vertical"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["vertical"] ? boolean : boolean | Defaults["vertical"]>;
        default: unknown extends Defaults["vertical"] ? boolean : boolean | Defaults["vertical"];
    };
};
export declare const VSnackbar: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
        location: import("../../util/index.js").Anchor;
        origin: "auto" | "overlap" | import("../../util/index.js").Anchor;
        tile: boolean;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        eager: boolean;
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null;
        absolute: boolean;
        closeOnBack: boolean;
        contained: boolean;
        disabled: boolean;
        modelValue: boolean;
        zIndex: string | number;
        multiLine: boolean;
        timeout: string | number;
        vertical: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        offset?: string | number | number[] | undefined;
        rounded?: string | number | boolean | undefined;
        color?: string | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
        activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        attach?: string | boolean | Element | undefined;
        contentClass?: any;
        contentProps?: any;
        opacity?: string | number | undefined;
        text?: string | undefined;
        timer?: string | boolean | undefined;
    } & {
        $children?: {
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            default?: (() => import("vue").VNodeChild) | undefined;
            actions?: ((arg: {
                isActive: Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
            text?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            default?: false | (() => import("vue").VNodeChild) | undefined;
            actions?: false | ((arg: {
                isActive: Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
            text?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:actions"?: false | ((arg: {
            isActive: Ref<boolean, boolean>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:text"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((v: boolean) => any) | undefined;
    }, Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
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
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            $children?: {
                default?: ((arg: {
                    isActive: Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("../../util/index.js").TemplateRef;
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
                    targetRef: import("../../util/index.js").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
            locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
            location: import("../../util/index.js").Anchor;
            origin: "auto" | "overlap" | import("../../util/index.js").Anchor;
            offset?: string | number | number[] | undefined;
            stickToTarget: boolean;
            viewportMargin: string | number;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction;
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
            activatorProps: Record<string, any>;
            openOnClick?: boolean | undefined;
            openOnHover: boolean;
            openOnFocus?: boolean | undefined;
            closeOnContentClick: boolean;
            retainFocus: boolean;
            captureFocus: boolean;
            eager: boolean;
            transition?: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component | undefined;
            }) | null | undefined;
            absolute: boolean;
            attach?: string | boolean | Element | undefined;
            closeOnBack: boolean;
            contained: boolean;
            contentClass?: any;
            contentProps?: any;
            disabled: boolean;
            opacity?: string | number | undefined;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            _disableGlobalStack: boolean;
            onAfterEnter?: (() => any) | undefined;
            onAfterLeave?: (() => any) | undefined;
            "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
            onKeydown?: ((e: KeyboardEvent) => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "_disableGlobalStack" | "absolute" | "activatorProps" | "captureFocus" | "closeOnBack" | "closeOnContentClick" | "contained" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "retainFocus" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "viewportMargin" | "zIndex">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: {
                isActive: Ref<boolean, boolean>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $host: Element | null;
        $emit: ((event: "afterEnter") => void) & ((event: "afterLeave") => void) & ((event: "click:outside", e: MouseEvent) => void) & ((event: "keydown", e: KeyboardEvent) => void) & ((event: "update:modelValue", value: boolean) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
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
                    targetRef: import("../../util/index.js").TemplateRef;
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
                    targetRef: import("../../util/index.js").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
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
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: ((() => void)[] | (() => void)) | undefined;
            created?: ((() => void)[] | (() => void)) | undefined;
            beforeMount?: ((() => void)[] | (() => void)) | undefined;
            mounted?: ((() => void)[] | (() => void)) | undefined;
            beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
            updated?: ((() => void)[] | (() => void)) | undefined;
            activated?: ((() => void)[] | (() => void)) | undefined;
            deactivated?: ((() => void)[] | (() => void)) | undefined;
            beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
            beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
            destroyed?: ((() => void)[] | (() => void)) | undefined;
            unmounted?: ((() => void)[] | (() => void)) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<{
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
    }> & Omit<{
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
                targetRef: import("../../util/index.js").TemplateRef;
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
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: import("../../util/index.js").TemplateRef;
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
    }, "activatorEl" | "animateClick" | "contentEl" | "globalTop" | "localTop" | "rootEl" | "scrimEl" | "target" | "updateLocation" | ("_disableGlobalStack" | "absolute" | "activatorProps" | "captureFocus" | "closeOnBack" | "closeOnContentClick" | "contained" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "retainFocus" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "viewportMargin" | "zIndex")> & import("vue").ShallowUnwrapRef<{
        activatorEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
        scrimEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
        target: import("vue").ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
        animateClick: () => void;
        contentEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
        rootEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
        globalTop: Readonly<Ref<boolean, boolean>>;
        localTop: Readonly<Ref<boolean, boolean>>;
        updateLocation: Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
    }> & {} & import("vue").ComponentCustomProperties & {}, "$children" | "activator" | "attach" | "class" | "closeDelay" | "contentClass" | "contentProps" | "height" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "offset" | "onAfterEnter" | "onAfterLeave" | "onClick:outside" | "onKeydown" | "onUpdate:modelValue" | "opacity" | "openDelay" | "target" | "theme" | "transition" | "v-slot:activator" | "v-slot:default" | "v-slots" | "width" | ("_disableGlobalStack" | "absolute" | "activatorProps" | "captureFocus" | "closeOnBack" | "closeOnContentClick" | "contained" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "retainFocus" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "viewportMargin" | "zIndex") | keyof import("vue").VNodeProps>, `$${any}`> & {
        _allExposed: {
            activatorEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
            scrimEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
            target: import("vue").ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
            animateClick: () => void;
            contentEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
            rootEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
            globalTop: Readonly<Ref<boolean, boolean>>;
            localTop: Readonly<Ref<boolean, boolean>>;
            updateLocation: Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
        } | {};
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (v: boolean) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
        location: import("../../util/index.js").Anchor;
        origin: "auto" | "overlap" | import("../../util/index.js").Anchor;
        rounded: string | number | boolean;
        tile: boolean;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
        eager: boolean;
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null;
        absolute: boolean;
        closeOnBack: boolean;
        contained: boolean;
        disabled: boolean;
        modelValue: boolean;
        zIndex: string | number;
        multiLine: boolean;
        timeout: string | number;
        vertical: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        activator: (arg: {
            isActive: boolean;
            props: Record<string, any>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        actions: (arg: {
            isActive: Ref<boolean, boolean>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        text: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        tile: boolean;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        eager: boolean;
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null;
        absolute: boolean;
        closeOnBack: boolean;
        contained: boolean;
        disabled: boolean;
        modelValue: boolean;
        zIndex: string | number;
        multiLine: boolean;
        timeout: string | number;
        vertical: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        offset?: string | number | number[] | undefined;
        rounded?: string | number | boolean | undefined;
        color?: string | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
        activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        attach?: string | boolean | Element | undefined;
        contentClass?: any;
        contentProps?: any;
        opacity?: string | number | undefined;
        text?: string | undefined;
        timer?: string | boolean | undefined;
    } & {
        $children?: {
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            default?: (() => import("vue").VNodeChild) | undefined;
            actions?: ((arg: {
                isActive: Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
            text?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            default?: false | (() => import("vue").VNodeChild) | undefined;
            actions?: false | ((arg: {
                isActive: Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
            text?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:actions"?: false | ((arg: {
            isActive: Ref<boolean, boolean>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:text"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((v: boolean) => any) | undefined;
    }, Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
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
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            $children?: {
                default?: ((arg: {
                    isActive: Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("../../util/index.js").TemplateRef;
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
                    targetRef: import("../../util/index.js").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
            locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
            location: import("../../util/index.js").Anchor;
            origin: "auto" | "overlap" | import("../../util/index.js").Anchor;
            offset?: string | number | number[] | undefined;
            stickToTarget: boolean;
            viewportMargin: string | number;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction;
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
            activatorProps: Record<string, any>;
            openOnClick?: boolean | undefined;
            openOnHover: boolean;
            openOnFocus?: boolean | undefined;
            closeOnContentClick: boolean;
            retainFocus: boolean;
            captureFocus: boolean;
            eager: boolean;
            transition?: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component | undefined;
            }) | null | undefined;
            absolute: boolean;
            attach?: string | boolean | Element | undefined;
            closeOnBack: boolean;
            contained: boolean;
            contentClass?: any;
            contentProps?: any;
            disabled: boolean;
            opacity?: string | number | undefined;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            _disableGlobalStack: boolean;
            onAfterEnter?: (() => any) | undefined;
            onAfterLeave?: (() => any) | undefined;
            "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
            onKeydown?: ((e: KeyboardEvent) => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "_disableGlobalStack" | "absolute" | "activatorProps" | "captureFocus" | "closeOnBack" | "closeOnContentClick" | "contained" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "retainFocus" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "viewportMargin" | "zIndex">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: {
                isActive: Ref<boolean, boolean>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $host: Element | null;
        $emit: ((event: "afterEnter") => void) & ((event: "afterLeave") => void) & ((event: "click:outside", e: MouseEvent) => void) & ((event: "keydown", e: KeyboardEvent) => void) & ((event: "update:modelValue", value: boolean) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
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
                    targetRef: import("../../util/index.js").TemplateRef;
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
                    targetRef: import("../../util/index.js").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
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
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: ((() => void)[] | (() => void)) | undefined;
            created?: ((() => void)[] | (() => void)) | undefined;
            beforeMount?: ((() => void)[] | (() => void)) | undefined;
            mounted?: ((() => void)[] | (() => void)) | undefined;
            beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
            updated?: ((() => void)[] | (() => void)) | undefined;
            activated?: ((() => void)[] | (() => void)) | undefined;
            deactivated?: ((() => void)[] | (() => void)) | undefined;
            beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
            beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
            destroyed?: ((() => void)[] | (() => void)) | undefined;
            unmounted?: ((() => void)[] | (() => void)) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<{
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
    }> & Omit<{
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
                targetRef: import("../../util/index.js").TemplateRef;
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
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: import("../../util/index.js").TemplateRef;
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
    }, "activatorEl" | "animateClick" | "contentEl" | "globalTop" | "localTop" | "rootEl" | "scrimEl" | "target" | "updateLocation" | ("_disableGlobalStack" | "absolute" | "activatorProps" | "captureFocus" | "closeOnBack" | "closeOnContentClick" | "contained" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "retainFocus" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "viewportMargin" | "zIndex")> & import("vue").ShallowUnwrapRef<{
        activatorEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
        scrimEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
        target: import("vue").ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
        animateClick: () => void;
        contentEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
        rootEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
        globalTop: Readonly<Ref<boolean, boolean>>;
        localTop: Readonly<Ref<boolean, boolean>>;
        updateLocation: Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
    }> & {} & import("vue").ComponentCustomProperties & {}, "$children" | "activator" | "attach" | "class" | "closeDelay" | "contentClass" | "contentProps" | "height" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "offset" | "onAfterEnter" | "onAfterLeave" | "onClick:outside" | "onKeydown" | "onUpdate:modelValue" | "opacity" | "openDelay" | "target" | "theme" | "transition" | "v-slot:activator" | "v-slot:default" | "v-slots" | "width" | ("_disableGlobalStack" | "absolute" | "activatorProps" | "captureFocus" | "closeOnBack" | "closeOnContentClick" | "contained" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "retainFocus" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "viewportMargin" | "zIndex") | keyof import("vue").VNodeProps>, `$${any}`> & {
        _allExposed: {
            activatorEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
            scrimEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
            target: import("vue").ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
            animateClick: () => void;
            contentEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
            rootEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
            globalTop: Readonly<Ref<boolean, boolean>>;
            localTop: Readonly<Ref<boolean, boolean>>;
            updateLocation: Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
        } | {};
    }, {}, {}, {}, {
        style: import("vue").StyleValue;
        locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
        location: import("../../util/index.js").Anchor;
        origin: "auto" | "overlap" | import("../../util/index.js").Anchor;
        rounded: string | number | boolean;
        tile: boolean;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
        eager: boolean;
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null;
        absolute: boolean;
        closeOnBack: boolean;
        contained: boolean;
        disabled: boolean;
        modelValue: boolean;
        zIndex: string | number;
        multiLine: boolean;
        timeout: string | number;
        vertical: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
    location: import("../../util/index.js").Anchor;
    origin: "auto" | "overlap" | import("../../util/index.js").Anchor;
    tile: boolean;
    variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
    activatorProps: Record<string, any>;
    openOnHover: boolean;
    closeOnContentClick: boolean;
    eager: boolean;
    transition: string | boolean | (import("vue").TransitionProps & {
        component?: import("vue").Component | undefined;
    }) | null;
    absolute: boolean;
    closeOnBack: boolean;
    contained: boolean;
    disabled: boolean;
    modelValue: boolean;
    zIndex: string | number;
    multiLine: boolean;
    timeout: string | number;
    vertical: boolean;
} & {
    theme?: string | undefined;
    class?: any;
    offset?: string | number | number[] | undefined;
    rounded?: string | number | boolean | undefined;
    color?: string | undefined;
    height?: string | number | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    width?: string | number | undefined;
    position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
    closeDelay?: string | number | undefined;
    openDelay?: string | number | undefined;
    target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
    activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
    openOnClick?: boolean | undefined;
    openOnFocus?: boolean | undefined;
    attach?: string | boolean | Element | undefined;
    contentClass?: any;
    contentProps?: any;
    opacity?: string | number | undefined;
    text?: string | undefined;
    timer?: string | boolean | undefined;
} & {
    $children?: {
        activator?: ((arg: {
            isActive: boolean;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        default?: (() => import("vue").VNodeChild) | undefined;
        actions?: ((arg: {
            isActive: Ref<boolean, boolean>;
        }) => import("vue").VNodeChild) | undefined;
        text?: (() => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        activator?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        default?: false | (() => import("vue").VNodeChild) | undefined;
        actions?: false | ((arg: {
            isActive: Ref<boolean, boolean>;
        }) => import("vue").VNodeChild) | undefined;
        text?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:actions"?: false | ((arg: {
        isActive: Ref<boolean, boolean>;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:activator"?: false | ((arg: {
        isActive: boolean;
        props: Record<string, any>;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:text"?: false | (() => import("vue").VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((v: boolean) => any) | undefined;
}, Omit<Omit<{
    $: import("vue").ComponentInternalInstance;
    $data: {};
    $props: Partial<{
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
    }> & Omit<{
        theme?: string | undefined;
        class?: any;
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        $children?: {
            default?: ((arg: {
                isActive: Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
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
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
        locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
        location: import("../../util/index.js").Anchor;
        origin: "auto" | "overlap" | import("../../util/index.js").Anchor;
        offset?: string | number | number[] | undefined;
        stickToTarget: boolean;
        viewportMargin: string | number;
        scrollStrategy: "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction;
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
        activatorProps: Record<string, any>;
        openOnClick?: boolean | undefined;
        openOnHover: boolean;
        openOnFocus?: boolean | undefined;
        closeOnContentClick: boolean;
        retainFocus: boolean;
        captureFocus: boolean;
        eager: boolean;
        transition?: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null | undefined;
        absolute: boolean;
        attach?: string | boolean | Element | undefined;
        closeOnBack: boolean;
        contained: boolean;
        contentClass?: any;
        contentProps?: any;
        disabled: boolean;
        opacity?: string | number | undefined;
        noClickAnimation: boolean;
        modelValue: boolean;
        persistent: boolean;
        scrim: string | boolean;
        zIndex: string | number;
        _disableGlobalStack: boolean;
        onAfterEnter?: (() => any) | undefined;
        onAfterLeave?: (() => any) | undefined;
        "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
        onKeydown?: ((e: KeyboardEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: import("../../util/index.js").TemplateRef;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: {
            isActive: Ref<boolean, boolean>;
        }) => import("vue").VNodeChild) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "_disableGlobalStack" | "absolute" | "activatorProps" | "captureFocus" | "closeOnBack" | "closeOnContentClick" | "contained" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "retainFocus" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "viewportMargin" | "zIndex">;
    $attrs: {
        [x: string]: unknown;
    };
    $refs: {
        [x: string]: unknown;
    };
    $slots: Readonly<{
        default?: ((arg: {
            isActive: Ref<boolean, boolean>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        activator?: ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: import("../../util/index.js").TemplateRef;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
    }>;
    $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
    $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
    $host: Element | null;
    $emit: ((event: "afterEnter") => void) & ((event: "afterLeave") => void) & ((event: "click:outside", e: MouseEvent) => void) & ((event: "keydown", e: KeyboardEvent) => void) & ((event: "update:modelValue", value: boolean) => void);
    $el: any;
    $options: import("vue").ComponentOptionsBase<{
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
                targetRef: import("../../util/index.js").TemplateRef;
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
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: import("../../util/index.js").TemplateRef;
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
            targetRef: import("../../util/index.js").TemplateRef;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
        beforeCreate?: ((() => void)[] | (() => void)) | undefined;
        created?: ((() => void)[] | (() => void)) | undefined;
        beforeMount?: ((() => void)[] | (() => void)) | undefined;
        mounted?: ((() => void)[] | (() => void)) | undefined;
        beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
        updated?: ((() => void)[] | (() => void)) | undefined;
        activated?: ((() => void)[] | (() => void)) | undefined;
        deactivated?: ((() => void)[] | (() => void)) | undefined;
        beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
        beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
        destroyed?: ((() => void)[] | (() => void)) | undefined;
        unmounted?: ((() => void)[] | (() => void)) | undefined;
        renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
        renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
        errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
    };
    $forceUpdate: () => void;
    $nextTick: typeof nextTick;
    $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
} & Readonly<{
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
}> & Omit<{
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
            targetRef: import("../../util/index.js").TemplateRef;
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
            targetRef: import("../../util/index.js").TemplateRef;
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:activator"?: false | ((arg: {
        isActive: boolean;
        props: Record<string, any>;
        targetRef: import("../../util/index.js").TemplateRef;
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
}, "activatorEl" | "animateClick" | "contentEl" | "globalTop" | "localTop" | "rootEl" | "scrimEl" | "target" | "updateLocation" | ("_disableGlobalStack" | "absolute" | "activatorProps" | "captureFocus" | "closeOnBack" | "closeOnContentClick" | "contained" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "retainFocus" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "viewportMargin" | "zIndex")> & import("vue").ShallowUnwrapRef<{
    activatorEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
    scrimEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
    target: import("vue").ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
    animateClick: () => void;
    contentEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
    rootEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
    globalTop: Readonly<Ref<boolean, boolean>>;
    localTop: Readonly<Ref<boolean, boolean>>;
    updateLocation: Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
}> & {} & import("vue").ComponentCustomProperties & {}, "$children" | "activator" | "attach" | "class" | "closeDelay" | "contentClass" | "contentProps" | "height" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "offset" | "onAfterEnter" | "onAfterLeave" | "onClick:outside" | "onKeydown" | "onUpdate:modelValue" | "opacity" | "openDelay" | "target" | "theme" | "transition" | "v-slot:activator" | "v-slot:default" | "v-slots" | "width" | ("_disableGlobalStack" | "absolute" | "activatorProps" | "captureFocus" | "closeOnBack" | "closeOnContentClick" | "contained" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "retainFocus" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "viewportMargin" | "zIndex") | keyof import("vue").VNodeProps>, `$${any}`> & {
    _allExposed: {
        activatorEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
        scrimEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
        target: import("vue").ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
        animateClick: () => void;
        contentEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
        rootEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
        globalTop: Readonly<Ref<boolean, boolean>>;
        localTop: Readonly<Ref<boolean, boolean>>;
        updateLocation: Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
    } | {};
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (v: boolean) => true;
}, string, {
    style: import("vue").StyleValue;
    locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
    location: import("../../util/index.js").Anchor;
    origin: "auto" | "overlap" | import("../../util/index.js").Anchor;
    rounded: string | number | boolean;
    tile: boolean;
    variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
    activatorProps: Record<string, any>;
    openOnClick: boolean;
    openOnHover: boolean;
    openOnFocus: boolean;
    closeOnContentClick: boolean;
    eager: boolean;
    transition: string | boolean | (import("vue").TransitionProps & {
        component?: import("vue").Component | undefined;
    }) | null;
    absolute: boolean;
    closeOnBack: boolean;
    contained: boolean;
    disabled: boolean;
    modelValue: boolean;
    zIndex: string | number;
    multiLine: boolean;
    timeout: string | number;
    vertical: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    activator: (arg: {
        isActive: boolean;
        props: Record<string, any>;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    actions: (arg: {
        isActive: Ref<boolean, boolean>;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    text: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    locationStrategy: {
        type: import("vue").PropType<"connected" | "static" | import("../../types.js").LocationStrategyFunction>;
        default: string;
        validator: (val: any) => boolean;
    };
    location: {
        type: import("vue").PropType<import("../../util/index.js").Anchor>;
        default: string;
    };
    origin: {
        type: import("vue").PropType<"auto" | "overlap" | import("../../util/index.js").Anchor>;
        default: string;
    };
    offset: import("vue").PropType<string | number | number[] | undefined>;
    rounded: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    color: StringConstructor;
    variant: {
        type: import("vue").PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: string;
        validator: (v: any) => boolean;
    };
    height: (NumberConstructor | StringConstructor)[];
    maxHeight: (NumberConstructor | StringConstructor)[];
    maxWidth: (NumberConstructor | StringConstructor)[];
    minHeight: (NumberConstructor | StringConstructor)[];
    minWidth: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    position: {
        type: import("vue").PropType<"absolute" | "fixed" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    closeDelay: (NumberConstructor | StringConstructor)[];
    openDelay: (NumberConstructor | StringConstructor)[];
    target: import("vue").PropType<"cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined>;
    activator: import("vue").PropType<"parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined>;
    activatorProps: {
        type: import("vue").PropType<Record<string, any>>;
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
    eager: BooleanConstructor;
    transition: {
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null>;
    };
    absolute: BooleanConstructor;
    attach: import("vue").PropType<string | boolean | Element>;
    closeOnBack: {
        type: BooleanConstructor;
        default: boolean;
    };
    contained: BooleanConstructor;
    contentClass: null;
    contentProps: null;
    disabled: BooleanConstructor;
    opacity: (NumberConstructor | StringConstructor)[];
    modelValue: BooleanConstructor;
    zIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    multiLine: BooleanConstructor;
    text: StringConstructor;
    timer: (BooleanConstructor | StringConstructor)[];
    timeout: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    vertical: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    locationStrategy: {
        type: import("vue").PropType<"connected" | "static" | import("../../types.js").LocationStrategyFunction>;
        default: string;
        validator: (val: any) => boolean;
    };
    location: {
        type: import("vue").PropType<import("../../util/index.js").Anchor>;
        default: string;
    };
    origin: {
        type: import("vue").PropType<"auto" | "overlap" | import("../../util/index.js").Anchor>;
        default: string;
    };
    offset: import("vue").PropType<string | number | number[] | undefined>;
    rounded: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    color: StringConstructor;
    variant: {
        type: import("vue").PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: string;
        validator: (v: any) => boolean;
    };
    height: (NumberConstructor | StringConstructor)[];
    maxHeight: (NumberConstructor | StringConstructor)[];
    maxWidth: (NumberConstructor | StringConstructor)[];
    minHeight: (NumberConstructor | StringConstructor)[];
    minWidth: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    position: {
        type: import("vue").PropType<"absolute" | "fixed" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    closeDelay: (NumberConstructor | StringConstructor)[];
    openDelay: (NumberConstructor | StringConstructor)[];
    target: import("vue").PropType<"cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined>;
    activator: import("vue").PropType<"parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined>;
    activatorProps: {
        type: import("vue").PropType<Record<string, any>>;
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
    eager: BooleanConstructor;
    transition: {
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null>;
    };
    absolute: BooleanConstructor;
    attach: import("vue").PropType<string | boolean | Element>;
    closeOnBack: {
        type: BooleanConstructor;
        default: boolean;
    };
    contained: BooleanConstructor;
    contentClass: null;
    contentProps: null;
    disabled: BooleanConstructor;
    opacity: (NumberConstructor | StringConstructor)[];
    modelValue: BooleanConstructor;
    zIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    multiLine: BooleanConstructor;
    text: StringConstructor;
    timer: (BooleanConstructor | StringConstructor)[];
    timeout: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    vertical: BooleanConstructor;
}>>;
export type VSnackbar = InstanceType<typeof VSnackbar>;
