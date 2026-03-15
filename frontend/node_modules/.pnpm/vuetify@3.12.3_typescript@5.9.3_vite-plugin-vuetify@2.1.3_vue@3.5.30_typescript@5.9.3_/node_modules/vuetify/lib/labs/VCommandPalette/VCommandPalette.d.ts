// Styles

// Types
import type { PropType } from 'vue';
import type { VCommandPaletteItem as VCommandPaletteItemType } from './types.js';
import type { VListChildrenSlots } from '../../components/VList/VListChildren.js';
import type { OverlaySlots } from '../../components/VOverlay/VOverlay.js';
export declare const makeVCommandPaletteProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
    customFilter?: unknown;
    customKeyFilter?: unknown;
    filterKeys?: unknown;
    filterMode?: unknown;
    noFilter?: unknown;
    locationStrategy?: unknown;
    location?: unknown;
    origin?: unknown;
    offset?: unknown;
    stickToTarget?: unknown;
    viewportMargin?: unknown;
    scrollStrategy?: unknown;
    density?: unknown;
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
    persistent?: unknown;
    scrim?: unknown;
    zIndex?: unknown;
    fullscreen?: unknown;
    scrollable?: unknown;
    modelValue?: unknown;
    search?: unknown;
    items?: unknown;
    placeholder?: unknown;
    inputIcon?: unknown;
    hotkey?: unknown;
    noDataText?: unknown;
    listProps?: unknown;
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
    customFilter: unknown extends Defaults["customFilter"] ? PropType<import("../../types.js").FilterFunction> : {
        type: PropType<unknown extends Defaults["customFilter"] ? import("../../types.js").FilterFunction : import("../../types.js").FilterFunction | Defaults["customFilter"]>;
        default: unknown extends Defaults["customFilter"] ? import("../../types.js").FilterFunction : import("../../types.js").FilterFunction | Defaults["customFilter"];
    };
    customKeyFilter: unknown extends Defaults["customKeyFilter"] ? PropType<import("../../composables/filter.js").FilterKeyFunctions> : {
        type: PropType<unknown extends Defaults["customKeyFilter"] ? import("../../composables/filter.js").FilterKeyFunctions : import("../../composables/filter.js").FilterKeyFunctions | Defaults["customKeyFilter"]>;
        default: unknown extends Defaults["customKeyFilter"] ? import("../../composables/filter.js").FilterKeyFunctions : import("../../composables/filter.js").FilterKeyFunctions | Defaults["customKeyFilter"];
    };
    filterKeys: unknown extends Defaults["filterKeys"] ? {
        type: PropType<import("../../composables/filter.js").FilterKeys>;
        default: NonNullable<import("../../composables/filter.js").FilterKeys>;
    } : Omit<{
        type: PropType<import("../../composables/filter.js").FilterKeys>;
        default: NonNullable<import("../../composables/filter.js").FilterKeys>;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["filterKeys"] ? import("../../composables/filter.js").FilterKeys : Defaults["filterKeys"] | import("../../composables/filter.js").FilterKeys>;
        default: unknown extends Defaults["filterKeys"] ? import("../../composables/filter.js").FilterKeys : Defaults["filterKeys"] | NonNullable<import("../../composables/filter.js").FilterKeys>;
    };
    filterMode: unknown extends Defaults["filterMode"] ? {
        type: PropType<import("../../composables/filter.js").FilterMode>;
        default: string;
    } : Omit<{
        type: PropType<import("../../composables/filter.js").FilterMode>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["filterMode"] ? import("../../composables/filter.js").FilterMode : Defaults["filterMode"] | import("../../composables/filter.js").FilterMode>;
        default: unknown extends Defaults["filterMode"] ? import("../../composables/filter.js").FilterMode : Defaults["filterMode"] | NonNullable<import("../../composables/filter.js").FilterMode>;
    };
    noFilter: unknown extends Defaults["noFilter"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["noFilter"] ? boolean : boolean | Defaults["noFilter"]>;
        default: unknown extends Defaults["noFilter"] ? boolean : boolean | Defaults["noFilter"];
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
    origin: unknown extends Defaults["origin"] ? Omit<{
        type: PropType<"auto" | "overlap" | import("../../util/index.js").Anchor>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<"auto" | "overlap" | import("../../util/index.js").Anchor>;
        default: NonNullable<"auto" | "overlap" | import("../../util/index.js").Anchor>;
    } : Omit<Omit<{
        type: PropType<"auto" | "overlap" | import("../../util/index.js").Anchor>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<"auto" | "overlap" | import("../../util/index.js").Anchor>;
        default: NonNullable<"auto" | "overlap" | import("../../util/index.js").Anchor>;
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
    scrollStrategy: unknown extends Defaults["scrollStrategy"] ? Omit<{
        type: PropType<"block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction>;
        default: string;
        validator: (val: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<"block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction>;
        default: NonNullable<"block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction>;
    } : Omit<Omit<{
        type: PropType<"block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction>;
        default: string;
        validator: (val: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<"block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction>;
        default: NonNullable<"block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction>;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["scrollStrategy"] ? "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction : "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction | Defaults["scrollStrategy"]>;
        default: unknown extends Defaults["scrollStrategy"] ? "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction : Defaults["scrollStrategy"] | NonNullable<"block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction>;
    };
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
    height: unknown extends Defaults["height"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : Defaults["height"] | NonNullable<string | number>;
    };
    maxHeight: unknown extends Defaults["maxHeight"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["maxHeight"] ? string | number : string | number | Defaults["maxHeight"]>;
        default: unknown extends Defaults["maxHeight"] ? string | number : Defaults["maxHeight"] | NonNullable<string | number>;
    };
    maxWidth: unknown extends Defaults["maxWidth"] ? {
        type: PropType<string | number>;
        default: NonNullable<string | number>;
    } : Omit<{
        type: PropType<string | number>;
        default: NonNullable<string | number>;
    }, "default" | "type"> & {
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
    retainFocus: unknown extends Defaults["retainFocus"] ? {
        type: PropType<boolean>;
        default: boolean;
    } : Omit<{
        type: PropType<boolean>;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["retainFocus"] ? boolean : boolean | Defaults["retainFocus"]>;
        default: unknown extends Defaults["retainFocus"] ? boolean : boolean | Defaults["retainFocus"];
    };
    captureFocus: unknown extends Defaults["captureFocus"] ? {
        type: PropType<boolean>;
        default: boolean;
    } : Omit<{
        type: PropType<boolean>;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["captureFocus"] ? boolean : boolean | Defaults["captureFocus"]>;
        default: unknown extends Defaults["captureFocus"] ? boolean : boolean | Defaults["captureFocus"];
    };
    eager: unknown extends Defaults["eager"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"]>;
        default: unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"];
    };
    transition: unknown extends Defaults["transition"] ? {
        type: PropType<string | boolean | {
            component: {
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
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
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
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
                }, {} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
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
                }, () => JSX.Element, {}, {}, {}, {}>;
                __isFragment?: undefined;
                __isTeleport?: undefined;
                __isSuspense?: undefined;
            } & import("vue").ComponentOptionsBase<{} & {
                target?: HTMLElement | [x: number, y: number] | undefined;
            } & {
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
            }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }, import("vue").ExtractPropTypes<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }>>;
        } | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null>;
        default: {
            component: {
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
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
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
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
                }, {} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
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
                }, () => JSX.Element, {}, {}, {}, {}>;
                __isFragment?: undefined;
                __isTeleport?: undefined;
                __isSuspense?: undefined;
            } & import("vue").ComponentOptionsBase<{} & {
                target?: HTMLElement | [x: number, y: number] | undefined;
            } & {
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
            }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }, import("vue").ExtractPropTypes<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }>>;
        } | NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null>;
    } : Omit<{
        type: PropType<string | boolean | {
            component: {
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
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
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
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
                }, {} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
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
                }, () => JSX.Element, {}, {}, {}, {}>;
                __isFragment?: undefined;
                __isTeleport?: undefined;
                __isSuspense?: undefined;
            } & import("vue").ComponentOptionsBase<{} & {
                target?: HTMLElement | [x: number, y: number] | undefined;
            } & {
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
            }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }, import("vue").ExtractPropTypes<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }>>;
        } | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null>;
        default: {
            component: {
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
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
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
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
                }, {} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
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
                }, () => JSX.Element, {}, {}, {}, {}>;
                __isFragment?: undefined;
                __isTeleport?: undefined;
                __isSuspense?: undefined;
            } & import("vue").ComponentOptionsBase<{} & {
                target?: HTMLElement | [x: number, y: number] | undefined;
            } & {
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
            }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }, import("vue").ExtractPropTypes<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }>>;
        } | NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null>;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["transition"] ? string | boolean | {
            component: {
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
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
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
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
                }, {} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
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
                }, () => JSX.Element, {}, {}, {}, {}>;
                __isFragment?: undefined;
                __isTeleport?: undefined;
                __isSuspense?: undefined;
            } & import("vue").ComponentOptionsBase<{} & {
                target?: HTMLElement | [x: number, y: number] | undefined;
            } & {
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
            }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }, import("vue").ExtractPropTypes<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }>>;
        } | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null : string | boolean | {
            component: {
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
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
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
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
                }, {} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
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
                }, () => JSX.Element, {}, {}, {}, {}>;
                __isFragment?: undefined;
                __isTeleport?: undefined;
                __isSuspense?: undefined;
            } & import("vue").ComponentOptionsBase<{} & {
                target?: HTMLElement | [x: number, y: number] | undefined;
            } & {
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
            }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }, import("vue").ExtractPropTypes<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }>>;
        } | Defaults["transition"] | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null>;
        default: unknown extends Defaults["transition"] ? string | boolean | {
            component: {
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
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
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
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
                }, {} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
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
                }, () => JSX.Element, {}, {}, {}, {}>;
                __isFragment?: undefined;
                __isTeleport?: undefined;
                __isSuspense?: undefined;
            } & import("vue").ComponentOptionsBase<{} & {
                target?: HTMLElement | [x: number, y: number] | undefined;
            } & {
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
            }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }, import("vue").ExtractPropTypes<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }>>;
        } | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null : Defaults["transition"] | NonNullable<string | boolean | {
            component: {
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
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
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
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
                }, {} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
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
                }, () => JSX.Element, {}, {}, {}, {}>;
                __isFragment?: undefined;
                __isTeleport?: undefined;
                __isSuspense?: undefined;
            } & import("vue").ComponentOptionsBase<{} & {
                target?: HTMLElement | [x: number, y: number] | undefined;
            } & {
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
            }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }, import("vue").ExtractPropTypes<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }>>;
        } | (import("vue").TransitionProps & {
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
    zIndex: unknown extends Defaults["zIndex"] ? Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: PropType<string | number>;
        default: NonNullable<string | number>;
    } : Omit<Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: PropType<string | number>;
        default: NonNullable<string | number>;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["zIndex"] ? string | number : string | number | Defaults["zIndex"]>;
        default: unknown extends Defaults["zIndex"] ? string | number : Defaults["zIndex"] | NonNullable<string | number>;
    };
    fullscreen: unknown extends Defaults["fullscreen"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["fullscreen"] ? boolean : boolean | Defaults["fullscreen"]>;
        default: unknown extends Defaults["fullscreen"] ? boolean : boolean | Defaults["fullscreen"];
    };
    scrollable: unknown extends Defaults["scrollable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["scrollable"] ? boolean : boolean | Defaults["scrollable"]>;
        default: unknown extends Defaults["scrollable"] ? boolean : boolean | Defaults["scrollable"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["modelValue"] ? boolean : boolean | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? boolean : boolean | Defaults["modelValue"];
    };
    search: unknown extends Defaults["search"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["search"] ? string : string | Defaults["search"]>;
        default: unknown extends Defaults["search"] ? string : string | Defaults["search"];
    };
    items: unknown extends Defaults["items"] ? {
        type: PropType<VCommandPaletteItemType[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<VCommandPaletteItemType[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["items"] ? VCommandPaletteItemType[] : VCommandPaletteItemType[] | Defaults["items"]>;
        default: unknown extends Defaults["items"] ? VCommandPaletteItemType[] : VCommandPaletteItemType[] | Defaults["items"];
    };
    placeholder: unknown extends Defaults["placeholder"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["placeholder"] ? string : string | Defaults["placeholder"]>;
        default: unknown extends Defaults["placeholder"] ? string : string | Defaults["placeholder"];
    };
    inputIcon: unknown extends Defaults["inputIcon"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["inputIcon"] ? string : string | Defaults["inputIcon"]>;
        default: unknown extends Defaults["inputIcon"] ? string : string | Defaults["inputIcon"];
    };
    hotkey: unknown extends Defaults["hotkey"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["hotkey"] ? string : string | Defaults["hotkey"]>;
        default: unknown extends Defaults["hotkey"] ? string : string | Defaults["hotkey"];
    };
    noDataText: unknown extends Defaults["noDataText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["noDataText"] ? string : string | Defaults["noDataText"]>;
        default: unknown extends Defaults["noDataText"] ? string : string | Defaults["noDataText"];
    };
    listProps: unknown extends Defaults["listProps"] ? PropType<Partial<{
        style: import("vue").StyleValue;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        itemType: import("../../util/index.js").SelectItemKey;
        returnObject: boolean;
        activatable: boolean;
        selectable: boolean;
        selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
        openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
        mandatory: boolean;
        itemsRegistration: import("../../composables/nested/nested.js").ItemsRegistrationType;
        disabled: boolean;
        filterable: boolean;
        lines: "one" | "three" | "two" | false;
        slim: boolean;
        nav: boolean;
        navigationStrategy: "focus" | "track";
    }> & Omit<{
        theme?: string | undefined;
        class?: any;
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        border?: string | number | boolean | undefined;
        density: import("../../composables/density.js").Density;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        color?: string | undefined;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        itemType: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        returnObject: boolean;
        valueComparator?: import("../../util/index.js").ValueComparator | undefined;
        activatable: boolean;
        selectable: boolean;
        activeStrategy?: import("../../composables/nested/nested.js").ActiveStrategyProp | undefined;
        selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
        openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
        mandatory: boolean;
        itemsRegistration: import("../../composables/nested/nested.js").ItemsRegistrationType;
        baseColor?: string | undefined;
        activeColor?: string | undefined;
        activeClass?: string | undefined;
        bgColor?: string | undefined;
        disabled: boolean;
        filterable: boolean;
        expandIcon?: import("../../composables/icons.js").IconValue | undefined;
        collapseIcon?: import("../../composables/icons.js").IconValue | undefined;
        lines: "one" | "three" | "two" | false;
        slim: boolean;
        prependGap?: string | number | undefined;
        indent?: string | number | undefined;
        nav: boolean;
        navigationStrategy: "focus" | "track";
        navigationIndex?: number | undefined;
        "onClick:activate"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => any) | undefined;
        "onUpdate:navigationIndex"?: ((value: number) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "activatable" | "density" | "disabled" | "filterable" | "itemType" | "itemsRegistration" | "lines" | "mandatory" | "nav" | "navigationStrategy" | "openStrategy" | "returnObject" | "rounded" | "selectStrategy" | "selectable" | "slim" | "style" | "tag" | "tile" | "variant"> & {
        items?: readonly any[] | undefined;
        itemTitle?: import("../../util/index.js").SelectItemKey<any>;
        itemValue?: import("../../util/index.js").SelectItemKey<any>;
        itemChildren?: import("../../util/index.js").SelectItemKey<any>;
        itemProps?: import("../../util/index.js").SelectItemKey<any>;
        selected?: unknown;
        activated?: unknown;
        opened?: unknown;
        "onUpdate:selected"?: ((value: unknown) => void) | undefined;
        "onUpdate:activated"?: ((value: unknown) => void) | undefined;
        "onUpdate:opened"?: ((value: unknown) => void) | undefined;
        "onClick:open"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | undefined;
        "onClick:select"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | undefined;
    } & {
        $children?: {
            prepend?: ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            title?: ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            subtitle?: ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            default?: (() => import("vue").VNodeChild) | undefined;
            item?: ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                } & {
                    index: number;
                };
            }) => import("vue").VNodeChild) | undefined;
            divider?: ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
            subheader?: ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
            header?: ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            prepend?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            title?: false | ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            subtitle?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            default?: false | (() => import("vue").VNodeChild) | undefined;
            item?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                } & {
                    index: number;
                };
            }) => import("vue").VNodeChild) | undefined;
            divider?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
            subheader?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
            header?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
            item: any;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:divider"?: false | ((arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:header"?: false | ((arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            } & {
                index: number;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
            item: any;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:subheader"?: false | ((arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot & {
            item: any;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot & {
            item: any;
        }) => import("vue").VNodeChild) | undefined;
    }> : {
        type: PropType<unknown extends Defaults["listProps"] ? Partial<{
            style: import("vue").StyleValue;
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            itemType: import("../../util/index.js").SelectItemKey;
            returnObject: boolean;
            activatable: boolean;
            selectable: boolean;
            selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
            openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
            mandatory: boolean;
            itemsRegistration: import("../../composables/nested/nested.js").ItemsRegistrationType;
            disabled: boolean;
            filterable: boolean;
            lines: "one" | "three" | "two" | false;
            slim: boolean;
            nav: boolean;
            navigationStrategy: "focus" | "track";
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            border?: string | number | boolean | undefined;
            density: import("../../composables/density.js").Density;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            color?: string | undefined;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            itemType: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
            returnObject: boolean;
            valueComparator?: import("../../util/index.js").ValueComparator | undefined;
            activatable: boolean;
            selectable: boolean;
            activeStrategy?: import("../../composables/nested/nested.js").ActiveStrategyProp | undefined;
            selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
            openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
            mandatory: boolean;
            itemsRegistration: import("../../composables/nested/nested.js").ItemsRegistrationType;
            baseColor?: string | undefined;
            activeColor?: string | undefined;
            activeClass?: string | undefined;
            bgColor?: string | undefined;
            disabled: boolean;
            filterable: boolean;
            expandIcon?: import("../../composables/icons.js").IconValue | undefined;
            collapseIcon?: import("../../composables/icons.js").IconValue | undefined;
            lines: "one" | "three" | "two" | false;
            slim: boolean;
            prependGap?: string | number | undefined;
            indent?: string | number | undefined;
            nav: boolean;
            navigationStrategy: "focus" | "track";
            navigationIndex?: number | undefined;
            "onClick:activate"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => any) | undefined;
            "onUpdate:navigationIndex"?: ((value: number) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "activatable" | "density" | "disabled" | "filterable" | "itemType" | "itemsRegistration" | "lines" | "mandatory" | "nav" | "navigationStrategy" | "openStrategy" | "returnObject" | "rounded" | "selectStrategy" | "selectable" | "slim" | "style" | "tag" | "tile" | "variant"> & {
            items?: readonly any[] | undefined;
            itemTitle?: import("../../util/index.js").SelectItemKey<any>;
            itemValue?: import("../../util/index.js").SelectItemKey<any>;
            itemChildren?: import("../../util/index.js").SelectItemKey<any>;
            itemProps?: import("../../util/index.js").SelectItemKey<any>;
            selected?: unknown;
            activated?: unknown;
            opened?: unknown;
            "onUpdate:selected"?: ((value: unknown) => void) | undefined;
            "onUpdate:activated"?: ((value: unknown) => void) | undefined;
            "onUpdate:opened"?: ((value: unknown) => void) | undefined;
            "onClick:open"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => void) | undefined;
            "onClick:select"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => void) | undefined;
        } & {
            $children?: {
                prepend?: ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                title?: ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                subtitle?: ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                default?: (() => import("vue").VNodeChild) | undefined;
                item?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    } & {
                        index: number;
                    };
                }) => import("vue").VNodeChild) | undefined;
                divider?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => import("vue").VNodeChild) | undefined;
                subheader?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => import("vue").VNodeChild) | undefined;
                header?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                prepend?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                title?: false | ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                subtitle?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                default?: false | (() => import("vue").VNodeChild) | undefined;
                item?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    } & {
                        index: number;
                    };
                }) => import("vue").VNodeChild) | undefined;
                divider?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => import("vue").VNodeChild) | undefined;
                subheader?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => import("vue").VNodeChild) | undefined;
                header?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:append"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:divider"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:header"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:item"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                } & {
                    index: number;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:subheader"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:subtitle"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:title"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
        } : Defaults["listProps"] | (Partial<{
            style: import("vue").StyleValue;
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            itemType: import("../../util/index.js").SelectItemKey;
            returnObject: boolean;
            activatable: boolean;
            selectable: boolean;
            selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
            openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
            mandatory: boolean;
            itemsRegistration: import("../../composables/nested/nested.js").ItemsRegistrationType;
            disabled: boolean;
            filterable: boolean;
            lines: "one" | "three" | "two" | false;
            slim: boolean;
            nav: boolean;
            navigationStrategy: "focus" | "track";
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            border?: string | number | boolean | undefined;
            density: import("../../composables/density.js").Density;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            color?: string | undefined;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            itemType: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
            returnObject: boolean;
            valueComparator?: import("../../util/index.js").ValueComparator | undefined;
            activatable: boolean;
            selectable: boolean;
            activeStrategy?: import("../../composables/nested/nested.js").ActiveStrategyProp | undefined;
            selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
            openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
            mandatory: boolean;
            itemsRegistration: import("../../composables/nested/nested.js").ItemsRegistrationType;
            baseColor?: string | undefined;
            activeColor?: string | undefined;
            activeClass?: string | undefined;
            bgColor?: string | undefined;
            disabled: boolean;
            filterable: boolean;
            expandIcon?: import("../../composables/icons.js").IconValue | undefined;
            collapseIcon?: import("../../composables/icons.js").IconValue | undefined;
            lines: "one" | "three" | "two" | false;
            slim: boolean;
            prependGap?: string | number | undefined;
            indent?: string | number | undefined;
            nav: boolean;
            navigationStrategy: "focus" | "track";
            navigationIndex?: number | undefined;
            "onClick:activate"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => any) | undefined;
            "onUpdate:navigationIndex"?: ((value: number) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "activatable" | "density" | "disabled" | "filterable" | "itemType" | "itemsRegistration" | "lines" | "mandatory" | "nav" | "navigationStrategy" | "openStrategy" | "returnObject" | "rounded" | "selectStrategy" | "selectable" | "slim" | "style" | "tag" | "tile" | "variant"> & {
            items?: readonly any[] | undefined;
            itemTitle?: import("../../util/index.js").SelectItemKey<any>;
            itemValue?: import("../../util/index.js").SelectItemKey<any>;
            itemChildren?: import("../../util/index.js").SelectItemKey<any>;
            itemProps?: import("../../util/index.js").SelectItemKey<any>;
            selected?: unknown;
            activated?: unknown;
            opened?: unknown;
            "onUpdate:selected"?: ((value: unknown) => void) | undefined;
            "onUpdate:activated"?: ((value: unknown) => void) | undefined;
            "onUpdate:opened"?: ((value: unknown) => void) | undefined;
            "onClick:open"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => void) | undefined;
            "onClick:select"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => void) | undefined;
        } & {
            $children?: {
                prepend?: ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                title?: ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                subtitle?: ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                default?: (() => import("vue").VNodeChild) | undefined;
                item?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    } & {
                        index: number;
                    };
                }) => import("vue").VNodeChild) | undefined;
                divider?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => import("vue").VNodeChild) | undefined;
                subheader?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => import("vue").VNodeChild) | undefined;
                header?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                prepend?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                title?: false | ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                subtitle?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                default?: false | (() => import("vue").VNodeChild) | undefined;
                item?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    } & {
                        index: number;
                    };
                }) => import("vue").VNodeChild) | undefined;
                divider?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => import("vue").VNodeChild) | undefined;
                subheader?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => import("vue").VNodeChild) | undefined;
                header?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:append"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:divider"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:header"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:item"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                } & {
                    index: number;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:subheader"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:subtitle"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:title"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
        })>;
        default: unknown extends Defaults["listProps"] ? Partial<{
            style: import("vue").StyleValue;
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            itemType: import("../../util/index.js").SelectItemKey;
            returnObject: boolean;
            activatable: boolean;
            selectable: boolean;
            selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
            openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
            mandatory: boolean;
            itemsRegistration: import("../../composables/nested/nested.js").ItemsRegistrationType;
            disabled: boolean;
            filterable: boolean;
            lines: "one" | "three" | "two" | false;
            slim: boolean;
            nav: boolean;
            navigationStrategy: "focus" | "track";
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            border?: string | number | boolean | undefined;
            density: import("../../composables/density.js").Density;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            color?: string | undefined;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            itemType: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
            returnObject: boolean;
            valueComparator?: import("../../util/index.js").ValueComparator | undefined;
            activatable: boolean;
            selectable: boolean;
            activeStrategy?: import("../../composables/nested/nested.js").ActiveStrategyProp | undefined;
            selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
            openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
            mandatory: boolean;
            itemsRegistration: import("../../composables/nested/nested.js").ItemsRegistrationType;
            baseColor?: string | undefined;
            activeColor?: string | undefined;
            activeClass?: string | undefined;
            bgColor?: string | undefined;
            disabled: boolean;
            filterable: boolean;
            expandIcon?: import("../../composables/icons.js").IconValue | undefined;
            collapseIcon?: import("../../composables/icons.js").IconValue | undefined;
            lines: "one" | "three" | "two" | false;
            slim: boolean;
            prependGap?: string | number | undefined;
            indent?: string | number | undefined;
            nav: boolean;
            navigationStrategy: "focus" | "track";
            navigationIndex?: number | undefined;
            "onClick:activate"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => any) | undefined;
            "onUpdate:navigationIndex"?: ((value: number) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "activatable" | "density" | "disabled" | "filterable" | "itemType" | "itemsRegistration" | "lines" | "mandatory" | "nav" | "navigationStrategy" | "openStrategy" | "returnObject" | "rounded" | "selectStrategy" | "selectable" | "slim" | "style" | "tag" | "tile" | "variant"> & {
            items?: readonly any[] | undefined;
            itemTitle?: import("../../util/index.js").SelectItemKey<any>;
            itemValue?: import("../../util/index.js").SelectItemKey<any>;
            itemChildren?: import("../../util/index.js").SelectItemKey<any>;
            itemProps?: import("../../util/index.js").SelectItemKey<any>;
            selected?: unknown;
            activated?: unknown;
            opened?: unknown;
            "onUpdate:selected"?: ((value: unknown) => void) | undefined;
            "onUpdate:activated"?: ((value: unknown) => void) | undefined;
            "onUpdate:opened"?: ((value: unknown) => void) | undefined;
            "onClick:open"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => void) | undefined;
            "onClick:select"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => void) | undefined;
        } & {
            $children?: {
                prepend?: ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                title?: ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                subtitle?: ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                default?: (() => import("vue").VNodeChild) | undefined;
                item?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    } & {
                        index: number;
                    };
                }) => import("vue").VNodeChild) | undefined;
                divider?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => import("vue").VNodeChild) | undefined;
                subheader?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => import("vue").VNodeChild) | undefined;
                header?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                prepend?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                title?: false | ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                subtitle?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                default?: false | (() => import("vue").VNodeChild) | undefined;
                item?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    } & {
                        index: number;
                    };
                }) => import("vue").VNodeChild) | undefined;
                divider?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => import("vue").VNodeChild) | undefined;
                subheader?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => import("vue").VNodeChild) | undefined;
                header?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:append"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:divider"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:header"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:item"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                } & {
                    index: number;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:subheader"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:subtitle"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:title"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
        } : Defaults["listProps"] | NonNullable<Partial<{
            style: import("vue").StyleValue;
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            itemType: import("../../util/index.js").SelectItemKey;
            returnObject: boolean;
            activatable: boolean;
            selectable: boolean;
            selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
            openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
            mandatory: boolean;
            itemsRegistration: import("../../composables/nested/nested.js").ItemsRegistrationType;
            disabled: boolean;
            filterable: boolean;
            lines: "one" | "three" | "two" | false;
            slim: boolean;
            nav: boolean;
            navigationStrategy: "focus" | "track";
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            border?: string | number | boolean | undefined;
            density: import("../../composables/density.js").Density;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            color?: string | undefined;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            itemType: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
            returnObject: boolean;
            valueComparator?: import("../../util/index.js").ValueComparator | undefined;
            activatable: boolean;
            selectable: boolean;
            activeStrategy?: import("../../composables/nested/nested.js").ActiveStrategyProp | undefined;
            selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
            openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
            mandatory: boolean;
            itemsRegistration: import("../../composables/nested/nested.js").ItemsRegistrationType;
            baseColor?: string | undefined;
            activeColor?: string | undefined;
            activeClass?: string | undefined;
            bgColor?: string | undefined;
            disabled: boolean;
            filterable: boolean;
            expandIcon?: import("../../composables/icons.js").IconValue | undefined;
            collapseIcon?: import("../../composables/icons.js").IconValue | undefined;
            lines: "one" | "three" | "two" | false;
            slim: boolean;
            prependGap?: string | number | undefined;
            indent?: string | number | undefined;
            nav: boolean;
            navigationStrategy: "focus" | "track";
            navigationIndex?: number | undefined;
            "onClick:activate"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => any) | undefined;
            "onUpdate:navigationIndex"?: ((value: number) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "activatable" | "density" | "disabled" | "filterable" | "itemType" | "itemsRegistration" | "lines" | "mandatory" | "nav" | "navigationStrategy" | "openStrategy" | "returnObject" | "rounded" | "selectStrategy" | "selectable" | "slim" | "style" | "tag" | "tile" | "variant"> & {
            items?: readonly any[] | undefined;
            itemTitle?: import("../../util/index.js").SelectItemKey<any>;
            itemValue?: import("../../util/index.js").SelectItemKey<any>;
            itemChildren?: import("../../util/index.js").SelectItemKey<any>;
            itemProps?: import("../../util/index.js").SelectItemKey<any>;
            selected?: unknown;
            activated?: unknown;
            opened?: unknown;
            "onUpdate:selected"?: ((value: unknown) => void) | undefined;
            "onUpdate:activated"?: ((value: unknown) => void) | undefined;
            "onUpdate:opened"?: ((value: unknown) => void) | undefined;
            "onClick:open"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => void) | undefined;
            "onClick:select"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => void) | undefined;
        } & {
            $children?: {
                prepend?: ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                title?: ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                subtitle?: ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                default?: (() => import("vue").VNodeChild) | undefined;
                item?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    } & {
                        index: number;
                    };
                }) => import("vue").VNodeChild) | undefined;
                divider?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => import("vue").VNodeChild) | undefined;
                subheader?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => import("vue").VNodeChild) | undefined;
                header?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                prepend?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                title?: false | ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                subtitle?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                default?: false | (() => import("vue").VNodeChild) | undefined;
                item?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    } & {
                        index: number;
                    };
                }) => import("vue").VNodeChild) | undefined;
                divider?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => import("vue").VNodeChild) | undefined;
                subheader?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => import("vue").VNodeChild) | undefined;
                header?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:append"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:divider"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:header"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:item"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                } & {
                    index: number;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:subheader"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:subtitle"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:title"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
        }>;
    };
};
export type VCommandPaletteSlots = {
    activator: OverlaySlots['activator'];
    default: never;
    prepend: never;
    append: never;
    input: never;
    'input.append-inner': never;
    'no-data': never;
    'list.prepend': never;
    'list.subheader': VListChildrenSlots<any>['subheader'];
    item: {
        item: VCommandPaletteItemType;
        index: number;
    };
    'item.prepend': {
        item: VCommandPaletteItemType;
        index: number;
    };
    'item.title': {
        item: VCommandPaletteItemType;
        index: number;
    };
    'item.append': {
        item: VCommandPaletteItemType;
        index: number;
    };
};
export declare const VCommandPalette: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        filterKeys: import("../../composables/filter.js").FilterKeys;
        filterMode: import("../../composables/filter.js").FilterMode;
        noFilter: boolean;
        locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
        location: import("../../util/index.js").Anchor;
        origin: "auto" | "overlap" | import("../../util/index.js").Anchor;
        stickToTarget: boolean;
        viewportMargin: string | number;
        scrollStrategy: "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction;
        density: import("../../composables/density.js").Density;
        maxWidth: string | number;
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        retainFocus: boolean;
        captureFocus: boolean;
        eager: boolean;
        transition: string | boolean | {
            component: {
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
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
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
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
                }, {} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
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
                }, () => JSX.Element, {}, {}, {}, {}>;
                __isFragment?: undefined;
                __isTeleport?: undefined;
                __isSuspense?: undefined;
            } & import("vue").ComponentOptionsBase<{} & {
                target?: HTMLElement | [x: number, y: number] | undefined;
            } & {
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
            }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }, import("vue").ExtractPropTypes<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }>>;
        } | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null;
        absolute: boolean;
        closeOnBack: boolean;
        contained: boolean;
        disabled: boolean;
        noClickAnimation: boolean;
        persistent: boolean;
        scrim: string | boolean;
        zIndex: string | number;
        fullscreen: boolean;
        scrollable: boolean;
        modelValue: boolean;
        items: VCommandPaletteItemType[];
        placeholder: string;
        inputIcon: string;
        noDataText: string;
    } & {
        theme?: string | undefined;
        class?: any;
        customFilter?: import("../../types.js").FilterFunction | undefined;
        customKeyFilter?: import("../../composables/filter.js").FilterKeyFunctions | undefined;
        offset?: string | number | number[] | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
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
        search?: string | undefined;
        hotkey?: string | undefined;
        listProps?: (Partial<{
            style: import("vue").StyleValue;
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            itemType: import("../../util/index.js").SelectItemKey;
            returnObject: boolean;
            activatable: boolean;
            selectable: boolean;
            selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
            openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
            mandatory: boolean;
            itemsRegistration: import("../../composables/nested/nested.js").ItemsRegistrationType;
            disabled: boolean;
            filterable: boolean;
            lines: "one" | "three" | "two" | false;
            slim: boolean;
            nav: boolean;
            navigationStrategy: "focus" | "track";
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            border?: string | number | boolean | undefined;
            density: import("../../composables/density.js").Density;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            color?: string | undefined;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            itemType: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
            returnObject: boolean;
            valueComparator?: import("../../util/index.js").ValueComparator | undefined;
            activatable: boolean;
            selectable: boolean;
            activeStrategy?: import("../../composables/nested/nested.js").ActiveStrategyProp | undefined;
            selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
            openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
            mandatory: boolean;
            itemsRegistration: import("../../composables/nested/nested.js").ItemsRegistrationType;
            baseColor?: string | undefined;
            activeColor?: string | undefined;
            activeClass?: string | undefined;
            bgColor?: string | undefined;
            disabled: boolean;
            filterable: boolean;
            expandIcon?: import("../../composables/icons.js").IconValue | undefined;
            collapseIcon?: import("../../composables/icons.js").IconValue | undefined;
            lines: "one" | "three" | "two" | false;
            slim: boolean;
            prependGap?: string | number | undefined;
            indent?: string | number | undefined;
            nav: boolean;
            navigationStrategy: "focus" | "track";
            navigationIndex?: number | undefined;
            "onClick:activate"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => any) | undefined;
            "onUpdate:navigationIndex"?: ((value: number) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "activatable" | "density" | "disabled" | "filterable" | "itemType" | "itemsRegistration" | "lines" | "mandatory" | "nav" | "navigationStrategy" | "openStrategy" | "returnObject" | "rounded" | "selectStrategy" | "selectable" | "slim" | "style" | "tag" | "tile" | "variant"> & {
            items?: readonly any[] | undefined;
            itemTitle?: import("../../util/index.js").SelectItemKey<any>;
            itemValue?: import("../../util/index.js").SelectItemKey<any>;
            itemChildren?: import("../../util/index.js").SelectItemKey<any>;
            itemProps?: import("../../util/index.js").SelectItemKey<any>;
            selected?: unknown;
            activated?: unknown;
            opened?: unknown;
            "onUpdate:selected"?: ((value: unknown) => void) | undefined;
            "onUpdate:activated"?: ((value: unknown) => void) | undefined;
            "onUpdate:opened"?: ((value: unknown) => void) | undefined;
            "onClick:open"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => void) | undefined;
            "onClick:select"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => void) | undefined;
        } & {
            $children?: {
                prepend?: ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                title?: ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                subtitle?: ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                default?: (() => import("vue").VNodeChild) | undefined;
                item?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    } & {
                        index: number;
                    };
                }) => import("vue").VNodeChild) | undefined;
                divider?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => import("vue").VNodeChild) | undefined;
                subheader?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => import("vue").VNodeChild) | undefined;
                header?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                prepend?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                title?: false | ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                subtitle?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                default?: false | (() => import("vue").VNodeChild) | undefined;
                item?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    } & {
                        index: number;
                    };
                }) => import("vue").VNodeChild) | undefined;
                divider?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => import("vue").VNodeChild) | undefined;
                subheader?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => import("vue").VNodeChild) | undefined;
                header?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:append"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:divider"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:header"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:item"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                } & {
                    index: number;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:subheader"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:subtitle"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:title"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
        }) | undefined;
    } & {
        $children?: {
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            default?: (() => import("vue").VNodeChild) | undefined;
            prepend?: (() => import("vue").VNodeChild) | undefined;
            append?: (() => import("vue").VNodeChild) | undefined;
            input?: (() => import("vue").VNodeChild) | undefined;
            "input.append-inner"?: (() => import("vue").VNodeChild) | undefined;
            "no-data"?: (() => import("vue").VNodeChild) | undefined;
            "list.prepend"?: (() => import("vue").VNodeChild) | undefined;
            "list.subheader"?: ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
            item?: ((arg: {
                item: VCommandPaletteItemType;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
            "item.prepend"?: ((arg: {
                item: VCommandPaletteItemType;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
            "item.title"?: ((arg: {
                item: VCommandPaletteItemType;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
            "item.append"?: ((arg: {
                item: VCommandPaletteItemType;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            default?: false | (() => import("vue").VNodeChild) | undefined;
            prepend?: false | (() => import("vue").VNodeChild) | undefined;
            append?: false | (() => import("vue").VNodeChild) | undefined;
            input?: false | (() => import("vue").VNodeChild) | undefined;
            "input.append-inner"?: false | (() => import("vue").VNodeChild) | undefined;
            "no-data"?: false | (() => import("vue").VNodeChild) | undefined;
            "list.prepend"?: false | (() => import("vue").VNodeChild) | undefined;
            "list.subheader"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
            item?: false | ((arg: {
                item: VCommandPaletteItemType;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
            "item.prepend"?: false | ((arg: {
                item: VCommandPaletteItemType;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
            "item.title"?: false | ((arg: {
                item: VCommandPaletteItemType;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
            "item.append"?: false | ((arg: {
                item: VCommandPaletteItemType;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: import("../../util/index.js").TemplateRef;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:input"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:input.append-inner"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: {
            item: VCommandPaletteItemType;
            index: number;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:item.append"?: false | ((arg: {
            item: VCommandPaletteItemType;
            index: number;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:item.prepend"?: false | ((arg: {
            item: VCommandPaletteItemType;
            index: number;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:item.title"?: false | ((arg: {
            item: VCommandPaletteItemType;
            index: number;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:list.prepend"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:list.subheader"?: false | ((arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:no-data"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onClick:item"?: ((item: VCommandPaletteItemType, event: KeyboardEvent | MouseEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        "onUpdate:search"?: ((value: string) => any) | undefined;
    }, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (value: boolean) => true;
        "update:search": (value: string) => true;
        "click:item": (item: VCommandPaletteItemType, event: KeyboardEvent | MouseEvent) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        filterKeys: import("../../composables/filter.js").FilterKeys;
        filterMode: import("../../composables/filter.js").FilterMode;
        noFilter: boolean;
        locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
        location: import("../../util/index.js").Anchor;
        origin: "auto" | "overlap" | import("../../util/index.js").Anchor;
        stickToTarget: boolean;
        viewportMargin: string | number;
        scrollStrategy: "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction;
        density: import("../../composables/density.js").Density;
        maxWidth: string | number;
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
        retainFocus: boolean;
        captureFocus: boolean;
        eager: boolean;
        transition: string | boolean | {
            component: {
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
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
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
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
                }, {} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
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
                }, () => JSX.Element, {}, {}, {}, {}>;
                __isFragment?: undefined;
                __isTeleport?: undefined;
                __isSuspense?: undefined;
            } & import("vue").ComponentOptionsBase<{} & {
                target?: HTMLElement | [x: number, y: number] | undefined;
            } & {
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
            }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }, import("vue").ExtractPropTypes<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }>>;
        } | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null;
        absolute: boolean;
        closeOnBack: boolean;
        contained: boolean;
        disabled: boolean;
        noClickAnimation: boolean;
        persistent: boolean;
        scrim: string | boolean;
        zIndex: string | number;
        fullscreen: boolean;
        scrollable: boolean;
        modelValue: boolean;
        items: VCommandPaletteItemType[];
        placeholder: string;
        inputIcon: string;
        noDataText: string;
    }, true, {}, import("vue").SlotsType<Partial<{
        activator: (arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: import("../../util/index.js").TemplateRef;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        prepend: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        append: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        input: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "input.append-inner": () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "no-data": () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "list.prepend": () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "list.subheader": (arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        item: (arg: {
            item: VCommandPaletteItemType;
            index: number;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "item.prepend": (arg: {
            item: VCommandPaletteItemType;
            index: number;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "item.title": (arg: {
            item: VCommandPaletteItemType;
            index: number;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "item.append": (arg: {
            item: VCommandPaletteItemType;
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
        filterKeys: import("../../composables/filter.js").FilterKeys;
        filterMode: import("../../composables/filter.js").FilterMode;
        noFilter: boolean;
        locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
        location: import("../../util/index.js").Anchor;
        origin: "auto" | "overlap" | import("../../util/index.js").Anchor;
        stickToTarget: boolean;
        viewportMargin: string | number;
        scrollStrategy: "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction;
        density: import("../../composables/density.js").Density;
        maxWidth: string | number;
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        retainFocus: boolean;
        captureFocus: boolean;
        eager: boolean;
        transition: string | boolean | {
            component: {
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
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
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
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
                }, {} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
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
                }, () => JSX.Element, {}, {}, {}, {}>;
                __isFragment?: undefined;
                __isTeleport?: undefined;
                __isSuspense?: undefined;
            } & import("vue").ComponentOptionsBase<{} & {
                target?: HTMLElement | [x: number, y: number] | undefined;
            } & {
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
            }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }, import("vue").ExtractPropTypes<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }>>;
        } | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null;
        absolute: boolean;
        closeOnBack: boolean;
        contained: boolean;
        disabled: boolean;
        noClickAnimation: boolean;
        persistent: boolean;
        scrim: string | boolean;
        zIndex: string | number;
        fullscreen: boolean;
        scrollable: boolean;
        modelValue: boolean;
        items: VCommandPaletteItemType[];
        placeholder: string;
        inputIcon: string;
        noDataText: string;
    } & {
        theme?: string | undefined;
        class?: any;
        customFilter?: import("../../types.js").FilterFunction | undefined;
        customKeyFilter?: import("../../composables/filter.js").FilterKeyFunctions | undefined;
        offset?: string | number | number[] | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
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
        search?: string | undefined;
        hotkey?: string | undefined;
        listProps?: (Partial<{
            style: import("vue").StyleValue;
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            itemType: import("../../util/index.js").SelectItemKey;
            returnObject: boolean;
            activatable: boolean;
            selectable: boolean;
            selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
            openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
            mandatory: boolean;
            itemsRegistration: import("../../composables/nested/nested.js").ItemsRegistrationType;
            disabled: boolean;
            filterable: boolean;
            lines: "one" | "three" | "two" | false;
            slim: boolean;
            nav: boolean;
            navigationStrategy: "focus" | "track";
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            border?: string | number | boolean | undefined;
            density: import("../../composables/density.js").Density;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            color?: string | undefined;
            variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            itemType: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
            returnObject: boolean;
            valueComparator?: import("../../util/index.js").ValueComparator | undefined;
            activatable: boolean;
            selectable: boolean;
            activeStrategy?: import("../../composables/nested/nested.js").ActiveStrategyProp | undefined;
            selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
            openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
            mandatory: boolean;
            itemsRegistration: import("../../composables/nested/nested.js").ItemsRegistrationType;
            baseColor?: string | undefined;
            activeColor?: string | undefined;
            activeClass?: string | undefined;
            bgColor?: string | undefined;
            disabled: boolean;
            filterable: boolean;
            expandIcon?: import("../../composables/icons.js").IconValue | undefined;
            collapseIcon?: import("../../composables/icons.js").IconValue | undefined;
            lines: "one" | "three" | "two" | false;
            slim: boolean;
            prependGap?: string | number | undefined;
            indent?: string | number | undefined;
            nav: boolean;
            navigationStrategy: "focus" | "track";
            navigationIndex?: number | undefined;
            "onClick:activate"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => any) | undefined;
            "onUpdate:navigationIndex"?: ((value: number) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "activatable" | "density" | "disabled" | "filterable" | "itemType" | "itemsRegistration" | "lines" | "mandatory" | "nav" | "navigationStrategy" | "openStrategy" | "returnObject" | "rounded" | "selectStrategy" | "selectable" | "slim" | "style" | "tag" | "tile" | "variant"> & {
            items?: readonly any[] | undefined;
            itemTitle?: import("../../util/index.js").SelectItemKey<any>;
            itemValue?: import("../../util/index.js").SelectItemKey<any>;
            itemChildren?: import("../../util/index.js").SelectItemKey<any>;
            itemProps?: import("../../util/index.js").SelectItemKey<any>;
            selected?: unknown;
            activated?: unknown;
            opened?: unknown;
            "onUpdate:selected"?: ((value: unknown) => void) | undefined;
            "onUpdate:activated"?: ((value: unknown) => void) | undefined;
            "onUpdate:opened"?: ((value: unknown) => void) | undefined;
            "onClick:open"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => void) | undefined;
            "onClick:select"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => void) | undefined;
        } & {
            $children?: {
                prepend?: ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                title?: ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                subtitle?: ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                default?: (() => import("vue").VNodeChild) | undefined;
                item?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    } & {
                        index: number;
                    };
                }) => import("vue").VNodeChild) | undefined;
                divider?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => import("vue").VNodeChild) | undefined;
                subheader?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => import("vue").VNodeChild) | undefined;
                header?: ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                prepend?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                title?: false | ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                subtitle?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                default?: false | (() => import("vue").VNodeChild) | undefined;
                item?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    } & {
                        index: number;
                    };
                }) => import("vue").VNodeChild) | undefined;
                divider?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => import("vue").VNodeChild) | undefined;
                subheader?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => import("vue").VNodeChild) | undefined;
                header?: false | ((arg: {
                    props: {
                        [key: string]: any;
                        title: string;
                        value: any;
                    };
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:append"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:divider"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:header"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:item"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                } & {
                    index: number;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:subheader"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:subtitle"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:title"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
        }) | undefined;
    } & {
        $children?: {
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            default?: (() => import("vue").VNodeChild) | undefined;
            prepend?: (() => import("vue").VNodeChild) | undefined;
            append?: (() => import("vue").VNodeChild) | undefined;
            input?: (() => import("vue").VNodeChild) | undefined;
            "input.append-inner"?: (() => import("vue").VNodeChild) | undefined;
            "no-data"?: (() => import("vue").VNodeChild) | undefined;
            "list.prepend"?: (() => import("vue").VNodeChild) | undefined;
            "list.subheader"?: ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
            item?: ((arg: {
                item: VCommandPaletteItemType;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
            "item.prepend"?: ((arg: {
                item: VCommandPaletteItemType;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
            "item.title"?: ((arg: {
                item: VCommandPaletteItemType;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
            "item.append"?: ((arg: {
                item: VCommandPaletteItemType;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            default?: false | (() => import("vue").VNodeChild) | undefined;
            prepend?: false | (() => import("vue").VNodeChild) | undefined;
            append?: false | (() => import("vue").VNodeChild) | undefined;
            input?: false | (() => import("vue").VNodeChild) | undefined;
            "input.append-inner"?: false | (() => import("vue").VNodeChild) | undefined;
            "no-data"?: false | (() => import("vue").VNodeChild) | undefined;
            "list.prepend"?: false | (() => import("vue").VNodeChild) | undefined;
            "list.subheader"?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
            item?: false | ((arg: {
                item: VCommandPaletteItemType;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
            "item.prepend"?: false | ((arg: {
                item: VCommandPaletteItemType;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
            "item.title"?: false | ((arg: {
                item: VCommandPaletteItemType;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
            "item.append"?: false | ((arg: {
                item: VCommandPaletteItemType;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: import("../../util/index.js").TemplateRef;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:input"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:input.append-inner"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: {
            item: VCommandPaletteItemType;
            index: number;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:item.append"?: false | ((arg: {
            item: VCommandPaletteItemType;
            index: number;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:item.prepend"?: false | ((arg: {
            item: VCommandPaletteItemType;
            index: number;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:item.title"?: false | ((arg: {
            item: VCommandPaletteItemType;
            index: number;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:list.prepend"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:list.subheader"?: false | ((arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:no-data"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onClick:item"?: ((item: VCommandPaletteItemType, event: KeyboardEvent | MouseEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        "onUpdate:search"?: ((value: string) => any) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        filterKeys: import("../../composables/filter.js").FilterKeys;
        filterMode: import("../../composables/filter.js").FilterMode;
        noFilter: boolean;
        locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
        location: import("../../util/index.js").Anchor;
        origin: "auto" | "overlap" | import("../../util/index.js").Anchor;
        stickToTarget: boolean;
        viewportMargin: string | number;
        scrollStrategy: "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction;
        density: import("../../composables/density.js").Density;
        maxWidth: string | number;
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
        retainFocus: boolean;
        captureFocus: boolean;
        eager: boolean;
        transition: string | boolean | {
            component: {
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
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
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
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
                }, {} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
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
                }, () => JSX.Element, {}, {}, {}, {}>;
                __isFragment?: undefined;
                __isTeleport?: undefined;
                __isSuspense?: undefined;
            } & import("vue").ComponentOptionsBase<{} & {
                target?: HTMLElement | [x: number, y: number] | undefined;
            } & {
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
            }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }, import("vue").ExtractPropTypes<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }>>;
        } | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null;
        absolute: boolean;
        closeOnBack: boolean;
        contained: boolean;
        disabled: boolean;
        noClickAnimation: boolean;
        persistent: boolean;
        scrim: string | boolean;
        zIndex: string | number;
        fullscreen: boolean;
        scrollable: boolean;
        modelValue: boolean;
        items: VCommandPaletteItemType[];
        placeholder: string;
        inputIcon: string;
        noDataText: string;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    filterKeys: import("../../composables/filter.js").FilterKeys;
    filterMode: import("../../composables/filter.js").FilterMode;
    noFilter: boolean;
    locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
    location: import("../../util/index.js").Anchor;
    origin: "auto" | "overlap" | import("../../util/index.js").Anchor;
    stickToTarget: boolean;
    viewportMargin: string | number;
    scrollStrategy: "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction;
    density: import("../../composables/density.js").Density;
    maxWidth: string | number;
    activatorProps: Record<string, any>;
    openOnHover: boolean;
    closeOnContentClick: boolean;
    retainFocus: boolean;
    captureFocus: boolean;
    eager: boolean;
    transition: string | boolean | {
        component: {
            new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                target?: HTMLElement | [x: number, y: number] | undefined;
            } & {
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
            }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
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
            }, {} & {
                target?: HTMLElement | [x: number, y: number] | undefined;
            } & {
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
            }, () => JSX.Element, {}, {}, {}, {}>;
            __isFragment?: undefined;
            __isTeleport?: undefined;
            __isSuspense?: undefined;
        } & import("vue").ComponentOptionsBase<{} & {
            target?: HTMLElement | [x: number, y: number] | undefined;
        } & {
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
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
            default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
            target: PropType<HTMLElement | [x: number, y: number]>;
        }, import("vue").ExtractPropTypes<{
            target: PropType<HTMLElement | [x: number, y: number]>;
        }>>;
    } | (import("vue").TransitionProps & {
        component?: import("vue").Component | undefined;
    }) | null;
    absolute: boolean;
    closeOnBack: boolean;
    contained: boolean;
    disabled: boolean;
    noClickAnimation: boolean;
    persistent: boolean;
    scrim: string | boolean;
    zIndex: string | number;
    fullscreen: boolean;
    scrollable: boolean;
    modelValue: boolean;
    items: VCommandPaletteItemType[];
    placeholder: string;
    inputIcon: string;
    noDataText: string;
} & {
    theme?: string | undefined;
    class?: any;
    customFilter?: import("../../types.js").FilterFunction | undefined;
    customKeyFilter?: import("../../composables/filter.js").FilterKeyFunctions | undefined;
    offset?: string | number | number[] | undefined;
    height?: string | number | undefined;
    maxHeight?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    width?: string | number | undefined;
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
    search?: string | undefined;
    hotkey?: string | undefined;
    listProps?: (Partial<{
        style: import("vue").StyleValue;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        itemType: import("../../util/index.js").SelectItemKey;
        returnObject: boolean;
        activatable: boolean;
        selectable: boolean;
        selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
        openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
        mandatory: boolean;
        itemsRegistration: import("../../composables/nested/nested.js").ItemsRegistrationType;
        disabled: boolean;
        filterable: boolean;
        lines: "one" | "three" | "two" | false;
        slim: boolean;
        nav: boolean;
        navigationStrategy: "focus" | "track";
    }> & Omit<{
        theme?: string | undefined;
        class?: any;
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        border?: string | number | boolean | undefined;
        density: import("../../composables/density.js").Density;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        color?: string | undefined;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        itemType: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        returnObject: boolean;
        valueComparator?: import("../../util/index.js").ValueComparator | undefined;
        activatable: boolean;
        selectable: boolean;
        activeStrategy?: import("../../composables/nested/nested.js").ActiveStrategyProp | undefined;
        selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
        openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
        mandatory: boolean;
        itemsRegistration: import("../../composables/nested/nested.js").ItemsRegistrationType;
        baseColor?: string | undefined;
        activeColor?: string | undefined;
        activeClass?: string | undefined;
        bgColor?: string | undefined;
        disabled: boolean;
        filterable: boolean;
        expandIcon?: import("../../composables/icons.js").IconValue | undefined;
        collapseIcon?: import("../../composables/icons.js").IconValue | undefined;
        lines: "one" | "three" | "two" | false;
        slim: boolean;
        prependGap?: string | number | undefined;
        indent?: string | number | undefined;
        nav: boolean;
        navigationStrategy: "focus" | "track";
        navigationIndex?: number | undefined;
        "onClick:activate"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => any) | undefined;
        "onUpdate:navigationIndex"?: ((value: number) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "activatable" | "density" | "disabled" | "filterable" | "itemType" | "itemsRegistration" | "lines" | "mandatory" | "nav" | "navigationStrategy" | "openStrategy" | "returnObject" | "rounded" | "selectStrategy" | "selectable" | "slim" | "style" | "tag" | "tile" | "variant"> & {
        items?: readonly any[] | undefined;
        itemTitle?: import("../../util/index.js").SelectItemKey<any>;
        itemValue?: import("../../util/index.js").SelectItemKey<any>;
        itemChildren?: import("../../util/index.js").SelectItemKey<any>;
        itemProps?: import("../../util/index.js").SelectItemKey<any>;
        selected?: unknown;
        activated?: unknown;
        opened?: unknown;
        "onUpdate:selected"?: ((value: unknown) => void) | undefined;
        "onUpdate:activated"?: ((value: unknown) => void) | undefined;
        "onUpdate:opened"?: ((value: unknown) => void) | undefined;
        "onClick:open"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | undefined;
        "onClick:select"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | undefined;
    } & {
        $children?: {
            prepend?: ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            title?: ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            subtitle?: ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            default?: (() => import("vue").VNodeChild) | undefined;
            item?: ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                } & {
                    index: number;
                };
            }) => import("vue").VNodeChild) | undefined;
            divider?: ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
            subheader?: ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
            header?: ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            prepend?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            title?: false | ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            subtitle?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            default?: false | (() => import("vue").VNodeChild) | undefined;
            item?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                } & {
                    index: number;
                };
            }) => import("vue").VNodeChild) | undefined;
            divider?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
            subheader?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
            header?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
            item: any;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:divider"?: false | ((arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:header"?: false | ((arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            } & {
                index: number;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
            item: any;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:subheader"?: false | ((arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot & {
            item: any;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot & {
            item: any;
        }) => import("vue").VNodeChild) | undefined;
    }) | undefined;
} & {
    $children?: {
        activator?: ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: import("../../util/index.js").TemplateRef;
        }) => import("vue").VNodeChild) | undefined;
        default?: (() => import("vue").VNodeChild) | undefined;
        prepend?: (() => import("vue").VNodeChild) | undefined;
        append?: (() => import("vue").VNodeChild) | undefined;
        input?: (() => import("vue").VNodeChild) | undefined;
        "input.append-inner"?: (() => import("vue").VNodeChild) | undefined;
        "no-data"?: (() => import("vue").VNodeChild) | undefined;
        "list.prepend"?: (() => import("vue").VNodeChild) | undefined;
        "list.subheader"?: ((arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
        }) => import("vue").VNodeChild) | undefined;
        item?: ((arg: {
            item: VCommandPaletteItemType;
            index: number;
        }) => import("vue").VNodeChild) | undefined;
        "item.prepend"?: ((arg: {
            item: VCommandPaletteItemType;
            index: number;
        }) => import("vue").VNodeChild) | undefined;
        "item.title"?: ((arg: {
            item: VCommandPaletteItemType;
            index: number;
        }) => import("vue").VNodeChild) | undefined;
        "item.append"?: ((arg: {
            item: VCommandPaletteItemType;
            index: number;
        }) => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        activator?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: import("../../util/index.js").TemplateRef;
        }) => import("vue").VNodeChild) | undefined;
        default?: false | (() => import("vue").VNodeChild) | undefined;
        prepend?: false | (() => import("vue").VNodeChild) | undefined;
        append?: false | (() => import("vue").VNodeChild) | undefined;
        input?: false | (() => import("vue").VNodeChild) | undefined;
        "input.append-inner"?: false | (() => import("vue").VNodeChild) | undefined;
        "no-data"?: false | (() => import("vue").VNodeChild) | undefined;
        "list.prepend"?: false | (() => import("vue").VNodeChild) | undefined;
        "list.subheader"?: false | ((arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
        }) => import("vue").VNodeChild) | undefined;
        item?: false | ((arg: {
            item: VCommandPaletteItemType;
            index: number;
        }) => import("vue").VNodeChild) | undefined;
        "item.prepend"?: false | ((arg: {
            item: VCommandPaletteItemType;
            index: number;
        }) => import("vue").VNodeChild) | undefined;
        "item.title"?: false | ((arg: {
            item: VCommandPaletteItemType;
            index: number;
        }) => import("vue").VNodeChild) | undefined;
        "item.append"?: false | ((arg: {
            item: VCommandPaletteItemType;
            index: number;
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:activator"?: false | ((arg: {
        isActive: boolean;
        props: Record<string, any>;
        targetRef: import("../../util/index.js").TemplateRef;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:input"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:input.append-inner"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:item"?: false | ((arg: {
        item: VCommandPaletteItemType;
        index: number;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:item.append"?: false | ((arg: {
        item: VCommandPaletteItemType;
        index: number;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:item.prepend"?: false | ((arg: {
        item: VCommandPaletteItemType;
        index: number;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:item.title"?: false | ((arg: {
        item: VCommandPaletteItemType;
        index: number;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:list.prepend"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:list.subheader"?: false | ((arg: {
        props: {
            [key: string]: any;
            title: string;
            value: any;
        };
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:no-data"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
} & {
    "onClick:item"?: ((item: VCommandPaletteItemType, event: KeyboardEvent | MouseEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    "onUpdate:search"?: ((value: string) => any) | undefined;
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => true;
    "update:search": (value: string) => true;
    "click:item": (item: VCommandPaletteItemType, event: KeyboardEvent | MouseEvent) => true;
}, string, {
    style: import("vue").StyleValue;
    filterKeys: import("../../composables/filter.js").FilterKeys;
    filterMode: import("../../composables/filter.js").FilterMode;
    noFilter: boolean;
    locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
    location: import("../../util/index.js").Anchor;
    origin: "auto" | "overlap" | import("../../util/index.js").Anchor;
    stickToTarget: boolean;
    viewportMargin: string | number;
    scrollStrategy: "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction;
    density: import("../../composables/density.js").Density;
    maxWidth: string | number;
    activatorProps: Record<string, any>;
    openOnClick: boolean;
    openOnHover: boolean;
    openOnFocus: boolean;
    closeOnContentClick: boolean;
    retainFocus: boolean;
    captureFocus: boolean;
    eager: boolean;
    transition: string | boolean | {
        component: {
            new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                target?: HTMLElement | [x: number, y: number] | undefined;
            } & {
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
            }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
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
            }, {} & {
                target?: HTMLElement | [x: number, y: number] | undefined;
            } & {
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
            }, () => JSX.Element, {}, {}, {}, {}>;
            __isFragment?: undefined;
            __isTeleport?: undefined;
            __isSuspense?: undefined;
        } & import("vue").ComponentOptionsBase<{} & {
            target?: HTMLElement | [x: number, y: number] | undefined;
        } & {
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
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
            default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
            target: PropType<HTMLElement | [x: number, y: number]>;
        }, import("vue").ExtractPropTypes<{
            target: PropType<HTMLElement | [x: number, y: number]>;
        }>>;
    } | (import("vue").TransitionProps & {
        component?: import("vue").Component | undefined;
    }) | null;
    absolute: boolean;
    closeOnBack: boolean;
    contained: boolean;
    disabled: boolean;
    noClickAnimation: boolean;
    persistent: boolean;
    scrim: string | boolean;
    zIndex: string | number;
    fullscreen: boolean;
    scrollable: boolean;
    modelValue: boolean;
    items: VCommandPaletteItemType[];
    placeholder: string;
    inputIcon: string;
    noDataText: string;
}, {}, string, import("vue").SlotsType<Partial<{
    activator: (arg: {
        isActive: boolean;
        props: Record<string, any>;
        targetRef: import("../../util/index.js").TemplateRef;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    prepend: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    append: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    input: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "input.append-inner": () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "no-data": () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "list.prepend": () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "list.subheader": (arg: {
        props: {
            [key: string]: any;
            title: string;
            value: any;
        };
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    item: (arg: {
        item: VCommandPaletteItemType;
        index: number;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "item.prepend": (arg: {
        item: VCommandPaletteItemType;
        index: number;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "item.title": (arg: {
        item: VCommandPaletteItemType;
        index: number;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "item.append": (arg: {
        item: VCommandPaletteItemType;
        index: number;
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
    customFilter: PropType<import("../../types.js").FilterFunction>;
    customKeyFilter: PropType<import("../../composables/filter.js").FilterKeyFunctions>;
    filterKeys: {
        type: PropType<import("../../composables/filter.js").FilterKeys>;
        default: NonNullable<import("../../composables/filter.js").FilterKeys>;
    };
    filterMode: {
        type: PropType<import("../../composables/filter.js").FilterMode>;
        default: string;
    };
    noFilter: BooleanConstructor;
    locationStrategy: {
        type: PropType<"connected" | "static" | import("../../types.js").LocationStrategyFunction>;
        default: string;
        validator: (val: any) => boolean;
    };
    location: {
        type: PropType<import("../../util/index.js").Anchor>;
        default: string;
    };
    origin: Omit<{
        type: PropType<"auto" | "overlap" | import("../../util/index.js").Anchor>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<"auto" | "overlap" | import("../../util/index.js").Anchor>;
        default: NonNullable<"auto" | "overlap" | import("../../util/index.js").Anchor>;
    };
    offset: PropType<string | number | number[] | undefined>;
    stickToTarget: BooleanConstructor;
    viewportMargin: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    scrollStrategy: Omit<{
        type: PropType<"block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction>;
        default: string;
        validator: (val: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<"block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction>;
        default: NonNullable<"block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction>;
    };
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    height: (NumberConstructor | StringConstructor)[];
    maxHeight: (NumberConstructor | StringConstructor)[];
    maxWidth: {
        type: PropType<string | number>;
        default: NonNullable<string | number>;
    };
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
    retainFocus: {
        type: PropType<boolean>;
        default: boolean;
    };
    captureFocus: {
        type: PropType<boolean>;
        default: boolean;
    };
    eager: BooleanConstructor;
    transition: {
        type: PropType<string | boolean | {
            component: {
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
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
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
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
                }, {} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
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
                }, () => JSX.Element, {}, {}, {}, {}>;
                __isFragment?: undefined;
                __isTeleport?: undefined;
                __isSuspense?: undefined;
            } & import("vue").ComponentOptionsBase<{} & {
                target?: HTMLElement | [x: number, y: number] | undefined;
            } & {
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
            }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }, import("vue").ExtractPropTypes<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }>>;
        } | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null>;
        default: {
            component: {
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
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
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
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
                }, {} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
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
                }, () => JSX.Element, {}, {}, {}, {}>;
                __isFragment?: undefined;
                __isTeleport?: undefined;
                __isSuspense?: undefined;
            } & import("vue").ComponentOptionsBase<{} & {
                target?: HTMLElement | [x: number, y: number] | undefined;
            } & {
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
            }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }, import("vue").ExtractPropTypes<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }>>;
        } | NonNullable<string | boolean | (import("vue").TransitionProps & {
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
    noClickAnimation: BooleanConstructor;
    persistent: BooleanConstructor;
    scrim: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    zIndex: Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: PropType<string | number>;
        default: NonNullable<string | number>;
    };
    fullscreen: BooleanConstructor;
    scrollable: BooleanConstructor;
    modelValue: BooleanConstructor;
    search: StringConstructor;
    items: {
        type: PropType<VCommandPaletteItemType[]>;
        default: () => never[];
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    inputIcon: {
        type: StringConstructor;
        default: string;
    };
    hotkey: StringConstructor;
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    listProps: PropType<Partial<{
        style: import("vue").StyleValue;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        itemType: import("../../util/index.js").SelectItemKey;
        returnObject: boolean;
        activatable: boolean;
        selectable: boolean;
        selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
        openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
        mandatory: boolean;
        itemsRegistration: import("../../composables/nested/nested.js").ItemsRegistrationType;
        disabled: boolean;
        filterable: boolean;
        lines: "one" | "three" | "two" | false;
        slim: boolean;
        nav: boolean;
        navigationStrategy: "focus" | "track";
    }> & Omit<{
        theme?: string | undefined;
        class?: any;
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        border?: string | number | boolean | undefined;
        density: import("../../composables/density.js").Density;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        color?: string | undefined;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        itemType: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        returnObject: boolean;
        valueComparator?: import("../../util/index.js").ValueComparator | undefined;
        activatable: boolean;
        selectable: boolean;
        activeStrategy?: import("../../composables/nested/nested.js").ActiveStrategyProp | undefined;
        selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
        openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
        mandatory: boolean;
        itemsRegistration: import("../../composables/nested/nested.js").ItemsRegistrationType;
        baseColor?: string | undefined;
        activeColor?: string | undefined;
        activeClass?: string | undefined;
        bgColor?: string | undefined;
        disabled: boolean;
        filterable: boolean;
        expandIcon?: import("../../composables/icons.js").IconValue | undefined;
        collapseIcon?: import("../../composables/icons.js").IconValue | undefined;
        lines: "one" | "three" | "two" | false;
        slim: boolean;
        prependGap?: string | number | undefined;
        indent?: string | number | undefined;
        nav: boolean;
        navigationStrategy: "focus" | "track";
        navigationIndex?: number | undefined;
        "onClick:activate"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => any) | undefined;
        "onUpdate:navigationIndex"?: ((value: number) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "activatable" | "density" | "disabled" | "filterable" | "itemType" | "itemsRegistration" | "lines" | "mandatory" | "nav" | "navigationStrategy" | "openStrategy" | "returnObject" | "rounded" | "selectStrategy" | "selectable" | "slim" | "style" | "tag" | "tile" | "variant"> & {
        items?: readonly any[] | undefined;
        itemTitle?: import("../../util/index.js").SelectItemKey<any>;
        itemValue?: import("../../util/index.js").SelectItemKey<any>;
        itemChildren?: import("../../util/index.js").SelectItemKey<any>;
        itemProps?: import("../../util/index.js").SelectItemKey<any>;
        selected?: unknown;
        activated?: unknown;
        opened?: unknown;
        "onUpdate:selected"?: ((value: unknown) => void) | undefined;
        "onUpdate:activated"?: ((value: unknown) => void) | undefined;
        "onUpdate:opened"?: ((value: unknown) => void) | undefined;
        "onClick:open"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | undefined;
        "onClick:select"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | undefined;
    } & {
        $children?: {
            prepend?: ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            title?: ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            subtitle?: ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            default?: (() => import("vue").VNodeChild) | undefined;
            item?: ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                } & {
                    index: number;
                };
            }) => import("vue").VNodeChild) | undefined;
            divider?: ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
            subheader?: ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
            header?: ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            prepend?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            title?: false | ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            subtitle?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            default?: false | (() => import("vue").VNodeChild) | undefined;
            item?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                } & {
                    index: number;
                };
            }) => import("vue").VNodeChild) | undefined;
            divider?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
            subheader?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
            header?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
            item: any;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:divider"?: false | ((arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:header"?: false | ((arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            } & {
                index: number;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
            item: any;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:subheader"?: false | ((arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot & {
            item: any;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot & {
            item: any;
        }) => import("vue").VNodeChild) | undefined;
    }>;
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    customFilter: PropType<import("../../types.js").FilterFunction>;
    customKeyFilter: PropType<import("../../composables/filter.js").FilterKeyFunctions>;
    filterKeys: {
        type: PropType<import("../../composables/filter.js").FilterKeys>;
        default: NonNullable<import("../../composables/filter.js").FilterKeys>;
    };
    filterMode: {
        type: PropType<import("../../composables/filter.js").FilterMode>;
        default: string;
    };
    noFilter: BooleanConstructor;
    locationStrategy: {
        type: PropType<"connected" | "static" | import("../../types.js").LocationStrategyFunction>;
        default: string;
        validator: (val: any) => boolean;
    };
    location: {
        type: PropType<import("../../util/index.js").Anchor>;
        default: string;
    };
    origin: Omit<{
        type: PropType<"auto" | "overlap" | import("../../util/index.js").Anchor>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<"auto" | "overlap" | import("../../util/index.js").Anchor>;
        default: NonNullable<"auto" | "overlap" | import("../../util/index.js").Anchor>;
    };
    offset: PropType<string | number | number[] | undefined>;
    stickToTarget: BooleanConstructor;
    viewportMargin: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    scrollStrategy: Omit<{
        type: PropType<"block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction>;
        default: string;
        validator: (val: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<"block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction>;
        default: NonNullable<"block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction>;
    };
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    height: (NumberConstructor | StringConstructor)[];
    maxHeight: (NumberConstructor | StringConstructor)[];
    maxWidth: {
        type: PropType<string | number>;
        default: NonNullable<string | number>;
    };
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
    retainFocus: {
        type: PropType<boolean>;
        default: boolean;
    };
    captureFocus: {
        type: PropType<boolean>;
        default: boolean;
    };
    eager: BooleanConstructor;
    transition: {
        type: PropType<string | boolean | {
            component: {
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
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
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
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
                }, {} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
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
                }, () => JSX.Element, {}, {}, {}, {}>;
                __isFragment?: undefined;
                __isTeleport?: undefined;
                __isSuspense?: undefined;
            } & import("vue").ComponentOptionsBase<{} & {
                target?: HTMLElement | [x: number, y: number] | undefined;
            } & {
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
            }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }, import("vue").ExtractPropTypes<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }>>;
        } | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null>;
        default: {
            component: {
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
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
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
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
                }, {} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
                } & {
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
                }, () => JSX.Element, {}, {}, {}, {}>;
                __isFragment?: undefined;
                __isTeleport?: undefined;
                __isSuspense?: undefined;
            } & import("vue").ComponentOptionsBase<{} & {
                target?: HTMLElement | [x: number, y: number] | undefined;
            } & {
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
            }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }, import("vue").ExtractPropTypes<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }>>;
        } | NonNullable<string | boolean | (import("vue").TransitionProps & {
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
    noClickAnimation: BooleanConstructor;
    persistent: BooleanConstructor;
    scrim: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    zIndex: Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: PropType<string | number>;
        default: NonNullable<string | number>;
    };
    fullscreen: BooleanConstructor;
    scrollable: BooleanConstructor;
    modelValue: BooleanConstructor;
    search: StringConstructor;
    items: {
        type: PropType<VCommandPaletteItemType[]>;
        default: () => never[];
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    inputIcon: {
        type: StringConstructor;
        default: string;
    };
    hotkey: StringConstructor;
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    listProps: PropType<Partial<{
        style: import("vue").StyleValue;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        itemType: import("../../util/index.js").SelectItemKey;
        returnObject: boolean;
        activatable: boolean;
        selectable: boolean;
        selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
        openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
        mandatory: boolean;
        itemsRegistration: import("../../composables/nested/nested.js").ItemsRegistrationType;
        disabled: boolean;
        filterable: boolean;
        lines: "one" | "three" | "two" | false;
        slim: boolean;
        nav: boolean;
        navigationStrategy: "focus" | "track";
    }> & Omit<{
        theme?: string | undefined;
        class?: any;
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        border?: string | number | boolean | undefined;
        density: import("../../composables/density.js").Density;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        color?: string | undefined;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        itemType: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        returnObject: boolean;
        valueComparator?: import("../../util/index.js").ValueComparator | undefined;
        activatable: boolean;
        selectable: boolean;
        activeStrategy?: import("../../composables/nested/nested.js").ActiveStrategyProp | undefined;
        selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
        openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
        mandatory: boolean;
        itemsRegistration: import("../../composables/nested/nested.js").ItemsRegistrationType;
        baseColor?: string | undefined;
        activeColor?: string | undefined;
        activeClass?: string | undefined;
        bgColor?: string | undefined;
        disabled: boolean;
        filterable: boolean;
        expandIcon?: import("../../composables/icons.js").IconValue | undefined;
        collapseIcon?: import("../../composables/icons.js").IconValue | undefined;
        lines: "one" | "three" | "two" | false;
        slim: boolean;
        prependGap?: string | number | undefined;
        indent?: string | number | undefined;
        nav: boolean;
        navigationStrategy: "focus" | "track";
        navigationIndex?: number | undefined;
        "onClick:activate"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => any) | undefined;
        "onUpdate:navigationIndex"?: ((value: number) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "activatable" | "density" | "disabled" | "filterable" | "itemType" | "itemsRegistration" | "lines" | "mandatory" | "nav" | "navigationStrategy" | "openStrategy" | "returnObject" | "rounded" | "selectStrategy" | "selectable" | "slim" | "style" | "tag" | "tile" | "variant"> & {
        items?: readonly any[] | undefined;
        itemTitle?: import("../../util/index.js").SelectItemKey<any>;
        itemValue?: import("../../util/index.js").SelectItemKey<any>;
        itemChildren?: import("../../util/index.js").SelectItemKey<any>;
        itemProps?: import("../../util/index.js").SelectItemKey<any>;
        selected?: unknown;
        activated?: unknown;
        opened?: unknown;
        "onUpdate:selected"?: ((value: unknown) => void) | undefined;
        "onUpdate:activated"?: ((value: unknown) => void) | undefined;
        "onUpdate:opened"?: ((value: unknown) => void) | undefined;
        "onClick:open"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | undefined;
        "onClick:select"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | undefined;
    } & {
        $children?: {
            prepend?: ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            title?: ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            subtitle?: ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            default?: (() => import("vue").VNodeChild) | undefined;
            item?: ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                } & {
                    index: number;
                };
            }) => import("vue").VNodeChild) | undefined;
            divider?: ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
            subheader?: ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
            header?: ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            prepend?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            title?: false | ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            subtitle?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            default?: false | (() => import("vue").VNodeChild) | undefined;
            item?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                } & {
                    index: number;
                };
            }) => import("vue").VNodeChild) | undefined;
            divider?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
            subheader?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
            header?: false | ((arg: {
                props: {
                    [key: string]: any;
                    title: string;
                    value: any;
                };
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
            item: any;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:divider"?: false | ((arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:header"?: false | ((arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            } & {
                index: number;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot & {
            item: any;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:subheader"?: false | ((arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot & {
            item: any;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot & {
            item: any;
        }) => import("vue").VNodeChild) | undefined;
    }>;
}>>;
export type VCommandPalette = InstanceType<typeof VCommandPalette>;
