import { VSnackbar } from '../VSnackbar/VSnackbar.js';
// Types
import type { PropType, VNodeProps } from 'vue';
import type { GenericProps } from '../../util/index.js';
export type VSnackbarQueueSlots<T extends string | SnackbarMessage> = {
    default: {
        item: T;
    };
    text: {
        item: T;
    };
    actions: {
        item: T;
        props: {
            onClick: () => void;
        };
    };
};
export type SnackbarMessage = string | (Omit<VSnackbar['$props'], 'modelValue' | 'onUpdate:modelValue' | 'activator' | 'activatorProps' | 'closeDelay' | 'openDelay' | 'openOnClick' | 'openOnFocus' | 'openOnHover' | 'style' | '$children' | 'v-slots' | `v-slot:${string}` | keyof VNodeProps> & {
    style?: any;
});
export declare const makeVSnackbarQueueProps: <Defaults extends {
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
    zIndex?: unknown;
    multiLine?: unknown;
    text?: unknown;
    timer?: unknown;
    timeout?: unknown;
    vertical?: unknown;
    closable?: unknown;
    closeText?: unknown;
    modelValue?: unknown;
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
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    variant: unknown extends Defaults["variant"] ? {
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["variant"] ? "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal" : "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal" | Defaults["variant"]>;
        default: unknown extends Defaults["variant"] ? "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal" : Defaults["variant"] | NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
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
    position: unknown extends Defaults["position"] ? {
        type: PropType<"absolute" | "fixed" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<"absolute" | "fixed" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["position"] ? "absolute" | "fixed" | "relative" | "static" | "sticky" : "absolute" | "fixed" | "relative" | "static" | "sticky" | Defaults["position"]>;
        default: unknown extends Defaults["position"] ? "absolute" | "fixed" | "relative" | "static" | "sticky" : Defaults["position"] | NonNullable<"absolute" | "fixed" | "relative" | "static" | "sticky">;
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
    eager: unknown extends Defaults["eager"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"]>;
        default: unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"];
    };
    transition: unknown extends Defaults["transition"] ? {
        type: PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null>;
    } : Omit<{
        type: PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null>;
    }, "default" | "type"> & {
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
    multiLine: unknown extends Defaults["multiLine"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["multiLine"] ? boolean : boolean | Defaults["multiLine"]>;
        default: unknown extends Defaults["multiLine"] ? boolean : boolean | Defaults["multiLine"];
    };
    text: unknown extends Defaults["text"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["text"] ? string : string | Defaults["text"]>;
        default: unknown extends Defaults["text"] ? string : string | Defaults["text"];
    };
    timer: unknown extends Defaults["timer"] ? (BooleanConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["timer"] ? string | boolean : string | boolean | Defaults["timer"]>;
        default: unknown extends Defaults["timer"] ? string | boolean : Defaults["timer"] | NonNullable<string | boolean>;
    };
    timeout: unknown extends Defaults["timeout"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["timeout"] ? string | number : string | number | Defaults["timeout"]>;
        default: unknown extends Defaults["timeout"] ? string | number : Defaults["timeout"] | NonNullable<string | number>;
    };
    vertical: unknown extends Defaults["vertical"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["vertical"] ? boolean : boolean | Defaults["vertical"]>;
        default: unknown extends Defaults["vertical"] ? boolean : boolean | Defaults["vertical"];
    };
    closable: unknown extends Defaults["closable"] ? (BooleanConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["closable"] ? string | boolean : string | boolean | Defaults["closable"]>;
        default: unknown extends Defaults["closable"] ? string | boolean : Defaults["closable"] | NonNullable<string | boolean>;
    };
    closeText: unknown extends Defaults["closeText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["closeText"] ? string : string | Defaults["closeText"]>;
        default: unknown extends Defaults["closeText"] ? string : string | Defaults["closeText"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: PropType<readonly SnackbarMessage[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<readonly SnackbarMessage[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["modelValue"] ? readonly SnackbarMessage[] : readonly SnackbarMessage[] | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? readonly SnackbarMessage[] : readonly SnackbarMessage[] | Defaults["modelValue"];
    };
};
export declare const VSnackbarQueue: {
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
        zIndex: string | number;
        multiLine: boolean;
        timeout: string | number;
        vertical: boolean;
        closeText: string;
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
        closable?: string | boolean | undefined;
    } & {}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        "update:modelValue": (val: SnackbarMessage[]) => true;
    }, "$children" | "modelValue" | "update:modelValue" | "v-slot:actions" | "v-slot:default" | "v-slot:text" | "v-slots">, VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
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
        zIndex: string | number;
        multiLine: boolean;
        timeout: string | number;
        vertical: boolean;
        closeText: string;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: {
            item: SnackbarMessage;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        text: (arg: {
            item: SnackbarMessage;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        actions: (arg: {
            item: SnackbarMessage;
            props: {
                onClick: () => void;
            };
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
        zIndex: string | number;
        multiLine: boolean;
        timeout: string | number;
        vertical: boolean;
        closeText: string;
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
        closable?: string | boolean | undefined;
    } & {}, {}, {}, {}, {}, {
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
        zIndex: string | number;
        multiLine: boolean;
        timeout: string | number;
        vertical: boolean;
        closeText: string;
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
    zIndex: string | number;
    multiLine: boolean;
    timeout: string | number;
    vertical: boolean;
    closeText: string;
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
    closable?: string | boolean | undefined;
} & {}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
    "update:modelValue": (val: SnackbarMessage[]) => true;
}, "$children" | "modelValue" | "update:modelValue" | "v-slot:actions" | "v-slot:default" | "v-slot:text" | "v-slots">, string, {
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
    zIndex: string | number;
    multiLine: boolean;
    timeout: string | number;
    vertical: boolean;
    closeText: string;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: {
        item: SnackbarMessage;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    text: (arg: {
        item: SnackbarMessage;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    actions: (arg: {
        item: SnackbarMessage;
        props: {
            onClick: () => void;
        };
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T extends readonly SnackbarMessage[]>(props: {
    modelValue?: T | undefined;
    "onUpdate:modelValue"?: ((val: T) => void) | undefined;
}, slots: VSnackbarQueueSlots<T[number]>) => GenericProps<{
    modelValue?: T | undefined;
    "onUpdate:modelValue"?: ((val: T) => void) | undefined;
}, VSnackbarQueueSlots<T[number]>>) & import("../../util/index.js").FilterPropsOptions<{
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
    rounded: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    color: StringConstructor;
    variant: {
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
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
        type: PropType<"absolute" | "fixed" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
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
    eager: BooleanConstructor;
    transition: {
        type: PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null>;
    };
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
    closable: (BooleanConstructor | StringConstructor)[];
    closeText: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: PropType<readonly SnackbarMessage[]>;
        default: () => never[];
    };
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
    rounded: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    color: StringConstructor;
    variant: {
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
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
        type: PropType<"absolute" | "fixed" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
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
    eager: BooleanConstructor;
    transition: {
        type: PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null>;
    };
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
    closable: (BooleanConstructor | StringConstructor)[];
    closeText: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: PropType<readonly SnackbarMessage[]>;
        default: () => never[];
    };
}>>;
export type VSnackbarQueue = InstanceType<typeof VSnackbarQueue>;
