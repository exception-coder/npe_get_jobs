// Types
import type { PropType } from 'vue';
export declare const makeVVideoVolumeProps: <Defaults extends {
    class?: unknown;
    style?: unknown;
    inline?: unknown;
    label?: unknown;
    direction?: unknown;
    modelValue?: unknown;
    menuProps?: unknown;
    sliderProps?: unknown;
    onClick?: unknown;
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
    inline: unknown extends Defaults["inline"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["inline"] ? boolean : boolean | Defaults["inline"]>;
        default: unknown extends Defaults["inline"] ? boolean : boolean | Defaults["inline"];
    };
    label: unknown extends Defaults["label"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["label"] ? string : string | Defaults["label"]>;
        default: unknown extends Defaults["label"] ? string : string | Defaults["label"];
    };
    direction: unknown extends Defaults["direction"] ? {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    } : Omit<{
        type: PropType<"horizontal" | "vertical">;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["direction"] ? "horizontal" | "vertical" : "horizontal" | "vertical" | Defaults["direction"]>;
        default: unknown extends Defaults["direction"] ? "horizontal" | "vertical" : Defaults["direction"] | NonNullable<"horizontal" | "vertical">;
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: NumberConstructor;
        default: number;
    } : Omit<{
        type: NumberConstructor;
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["modelValue"] ? number : number | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? number : number | Defaults["modelValue"];
    };
    menuProps: unknown extends Defaults["menuProps"] ? PropType<Partial<{
        style: import("vue").StyleValue;
        locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
        location: import("../../util/index.js").Anchor | undefined;
        origin: "auto" | "overlap" | import("../../util/index.js").Anchor;
        stickToTarget: boolean;
        scrollStrategy: "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction;
        closeDelay: string | number;
        openDelay: string | number;
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
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
        closeOnBack: boolean;
        contained: boolean;
        disabled: boolean;
        noClickAnimation: boolean;
        modelValue: boolean;
        persistent: boolean;
        scrim: string | boolean;
        zIndex: string | number;
        submenu: boolean;
        disableInitialFocus: boolean;
    }> & Omit<{
        theme?: string | undefined;
        class?: any;
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        $children?: {
            default?: ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            isActive: import("vue").Ref<boolean, boolean>;
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
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
        scrollStrategy: "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        closeDelay: string | number;
        openDelay: string | number;
        target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
        activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
        activatorProps: Record<string, any>;
        openOnClick?: boolean | undefined;
        openOnHover: boolean;
        openOnFocus?: boolean | undefined;
        closeOnContentClick: boolean;
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
        id?: string | undefined;
        submenu: boolean;
        disableInitialFocus: boolean;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: import("../../util/index.js").TemplateRef;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: {
            isActive: import("vue").Ref<boolean, boolean>;
        }) => import("vue").VNodeChild) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "activatorProps" | "closeDelay" | "closeOnBack" | "closeOnContentClick" | "contained" | "disableInitialFocus" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openDelay" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "submenu" | "transition" | "zIndex">> : {
        type: PropType<unknown extends Defaults["menuProps"] ? Partial<{
            style: import("vue").StyleValue;
            locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
            location: import("../../util/index.js").Anchor | undefined;
            origin: "auto" | "overlap" | import("../../util/index.js").Anchor;
            stickToTarget: boolean;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction;
            closeDelay: string | number;
            openDelay: string | number;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
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
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            submenu: boolean;
            disableInitialFocus: boolean;
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            $children?: {
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("../../util/index.js").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
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
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            closeDelay: string | number;
            openDelay: string | number;
            target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            activatorProps: Record<string, any>;
            openOnClick?: boolean | undefined;
            openOnHover: boolean;
            openOnFocus?: boolean | undefined;
            closeOnContentClick: boolean;
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
            id?: string | undefined;
            submenu: boolean;
            disableInitialFocus: boolean;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "activatorProps" | "closeDelay" | "closeOnBack" | "closeOnContentClick" | "contained" | "disableInitialFocus" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openDelay" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "submenu" | "transition" | "zIndex"> : Defaults["menuProps"] | (Partial<{
            style: import("vue").StyleValue;
            locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
            location: import("../../util/index.js").Anchor | undefined;
            origin: "auto" | "overlap" | import("../../util/index.js").Anchor;
            stickToTarget: boolean;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction;
            closeDelay: string | number;
            openDelay: string | number;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
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
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            submenu: boolean;
            disableInitialFocus: boolean;
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            $children?: {
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("../../util/index.js").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
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
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            closeDelay: string | number;
            openDelay: string | number;
            target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            activatorProps: Record<string, any>;
            openOnClick?: boolean | undefined;
            openOnHover: boolean;
            openOnFocus?: boolean | undefined;
            closeOnContentClick: boolean;
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
            id?: string | undefined;
            submenu: boolean;
            disableInitialFocus: boolean;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "activatorProps" | "closeDelay" | "closeOnBack" | "closeOnContentClick" | "contained" | "disableInitialFocus" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openDelay" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "submenu" | "transition" | "zIndex">)>;
        default: unknown extends Defaults["menuProps"] ? Partial<{
            style: import("vue").StyleValue;
            locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
            location: import("../../util/index.js").Anchor | undefined;
            origin: "auto" | "overlap" | import("../../util/index.js").Anchor;
            stickToTarget: boolean;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction;
            closeDelay: string | number;
            openDelay: string | number;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
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
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            submenu: boolean;
            disableInitialFocus: boolean;
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            $children?: {
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("../../util/index.js").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
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
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            closeDelay: string | number;
            openDelay: string | number;
            target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            activatorProps: Record<string, any>;
            openOnClick?: boolean | undefined;
            openOnHover: boolean;
            openOnFocus?: boolean | undefined;
            closeOnContentClick: boolean;
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
            id?: string | undefined;
            submenu: boolean;
            disableInitialFocus: boolean;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "activatorProps" | "closeDelay" | "closeOnBack" | "closeOnContentClick" | "contained" | "disableInitialFocus" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openDelay" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "submenu" | "transition" | "zIndex"> : Defaults["menuProps"] | NonNullable<Partial<{
            style: import("vue").StyleValue;
            locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
            location: import("../../util/index.js").Anchor | undefined;
            origin: "auto" | "overlap" | import("../../util/index.js").Anchor;
            stickToTarget: boolean;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction;
            closeDelay: string | number;
            openDelay: string | number;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
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
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            submenu: boolean;
            disableInitialFocus: boolean;
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            $children?: {
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("../../util/index.js").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
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
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            closeDelay: string | number;
            openDelay: string | number;
            target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            activatorProps: Record<string, any>;
            openOnClick?: boolean | undefined;
            openOnHover: boolean;
            openOnFocus?: boolean | undefined;
            closeOnContentClick: boolean;
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
            id?: string | undefined;
            submenu: boolean;
            disableInitialFocus: boolean;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "activatorProps" | "closeDelay" | "closeOnBack" | "closeOnContentClick" | "contained" | "disableInitialFocus" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openDelay" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "submenu" | "transition" | "zIndex">>;
    };
    sliderProps: unknown extends Defaults["sliderProps"] ? PropType<Pick<Partial<{
        style: import("vue").StyleValue;
        focused: boolean;
        disabled: boolean | null;
        error: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        density: import("../../composables/density.js").Density;
        elevation: string | number;
        rounded: string | number | boolean;
        tile: boolean;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        messages: string | readonly string[];
        direction: "horizontal" | "vertical";
        max: string | number;
        min: string | number;
        step: string | number;
        thumbLabel: "always" | boolean | undefined;
        thumbSize: string | number;
        showTicks: "always" | boolean;
        tickSize: string | number;
        trackSize: string | number;
        reverse: boolean;
        noKeyboard: boolean;
        ripple: boolean;
        modelValue: string | number;
    }> & Omit<{
        theme?: string | undefined;
        class?: any;
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        $children?: {
            default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "tick-label"?: ((arg: {
                tick: import("../../components/VSlider/slider.js").Tick;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
            "thumb-label"?: ((arg: {
                modelValue: number;
            }) => import("vue").VNodeChild) | undefined;
            label?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "tick-label"?: false | ((arg: {
                tick: import("../../components/VSlider/slider.js").Tick;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
            "thumb-label"?: false | ((arg: {
                modelValue: number;
            }) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
        focused: boolean;
        "onUpdate:focused"?: (((args_0: boolean) => void) & ((value: boolean) => any)) | undefined;
        disabled: boolean | null;
        error: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        name?: string | undefined;
        label?: string | undefined;
        readonly: boolean | null;
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
        validationValue?: any;
        density: import("../../composables/density.js").Density;
        elevation: string | number;
        rounded?: string | number | boolean | undefined;
        tile: boolean;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        id?: string | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        baseColor?: string | undefined;
        centerAffix: boolean;
        color?: string | undefined;
        glow: boolean;
        iconColor?: string | boolean | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        hideDetails?: "auto" | boolean | undefined;
        hideSpinButtons: boolean;
        hint?: string | undefined;
        persistentHint: boolean;
        messages: string | readonly string[];
        direction: "horizontal" | "vertical";
        "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
        max: string | number;
        min: string | number;
        step: string | number;
        thumbColor?: string | undefined;
        thumbLabel?: "always" | boolean | undefined;
        thumbSize: string | number;
        showTicks: "always" | boolean;
        ticks?: readonly number[] | Record<number, string> | undefined;
        tickSize: string | number;
        trackColor?: string | undefined;
        trackFillColor?: string | undefined;
        trackSize: string | number;
        reverse: boolean;
        noKeyboard: boolean;
        ripple: boolean;
        modelValue: string | number;
        onEnd?: ((value: number) => any) | undefined;
        onStart?: ((value: number) => any) | undefined;
        "onUpdate:modelValue"?: ((v: number) => any) | undefined;
        "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:thumb-label"?: false | ((arg: {
            modelValue: number;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:tick-label"?: false | ((arg: {
            tick: import("../../components/VSlider/slider.js").Tick;
            index: number;
        }) => import("vue").VNodeChild) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "centerAffix" | "density" | "direction" | "disabled" | "elevation" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "max" | "maxErrors" | "messages" | "min" | "modelValue" | "noKeyboard" | "persistentHint" | "readonly" | "reverse" | "ripple" | "rounded" | "rules" | "showTicks" | "step" | "style" | "thumbLabel" | "thumbSize" | "tickSize" | "tile" | "trackSize">, "color" | "disabled" | "maxWidth" | "thumbSize" | "trackColor" | "width">> : {
        type: PropType<unknown extends Defaults["sliderProps"] ? Pick<Partial<{
            style: import("vue").StyleValue;
            focused: boolean;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("../../composables/density.js").Density;
            elevation: string | number;
            rounded: string | number | boolean;
            tile: boolean;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
            max: string | number;
            min: string | number;
            step: string | number;
            thumbLabel: "always" | boolean | undefined;
            thumbSize: string | number;
            showTicks: "always" | boolean;
            tickSize: string | number;
            trackSize: string | number;
            reverse: boolean;
            noKeyboard: boolean;
            ripple: boolean;
            modelValue: string | number;
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            $children?: {
                default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                "tick-label"?: ((arg: {
                    tick: import("../../components/VSlider/slider.js").Tick;
                    index: number;
                }) => import("vue").VNodeChild) | undefined;
                "thumb-label"?: ((arg: {
                    modelValue: number;
                }) => import("vue").VNodeChild) | undefined;
                label?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                "tick-label"?: false | ((arg: {
                    tick: import("../../components/VSlider/slider.js").Tick;
                    index: number;
                }) => import("vue").VNodeChild) | undefined;
                "thumb-label"?: false | ((arg: {
                    modelValue: number;
                }) => import("vue").VNodeChild) | undefined;
                label?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
            focused: boolean;
            "onUpdate:focused"?: (((args_0: boolean) => void) & ((value: boolean) => any)) | undefined;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            name?: string | undefined;
            label?: string | undefined;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
            validationValue?: any;
            density: import("../../composables/density.js").Density;
            elevation: string | number;
            rounded?: string | number | boolean | undefined;
            tile: boolean;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            id?: string | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            baseColor?: string | undefined;
            centerAffix: boolean;
            color?: string | undefined;
            glow: boolean;
            iconColor?: string | boolean | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            hideDetails?: "auto" | boolean | undefined;
            hideSpinButtons: boolean;
            hint?: string | undefined;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
            "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
            max: string | number;
            min: string | number;
            step: string | number;
            thumbColor?: string | undefined;
            thumbLabel?: "always" | boolean | undefined;
            thumbSize: string | number;
            showTicks: "always" | boolean;
            ticks?: readonly number[] | Record<number, string> | undefined;
            tickSize: string | number;
            trackColor?: string | undefined;
            trackFillColor?: string | undefined;
            trackSize: string | number;
            reverse: boolean;
            noKeyboard: boolean;
            ripple: boolean;
            modelValue: string | number;
            onEnd?: ((value: number) => any) | undefined;
            onStart?: ((value: number) => any) | undefined;
            "onUpdate:modelValue"?: ((v: number) => any) | undefined;
            "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:thumb-label"?: false | ((arg: {
                modelValue: number;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:tick-label"?: false | ((arg: {
                tick: import("../../components/VSlider/slider.js").Tick;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "centerAffix" | "density" | "direction" | "disabled" | "elevation" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "max" | "maxErrors" | "messages" | "min" | "modelValue" | "noKeyboard" | "persistentHint" | "readonly" | "reverse" | "ripple" | "rounded" | "rules" | "showTicks" | "step" | "style" | "thumbLabel" | "thumbSize" | "tickSize" | "tile" | "trackSize">, "color" | "disabled" | "maxWidth" | "thumbSize" | "trackColor" | "width"> : Pick<Partial<{
            style: import("vue").StyleValue;
            focused: boolean;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("../../composables/density.js").Density;
            elevation: string | number;
            rounded: string | number | boolean;
            tile: boolean;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
            max: string | number;
            min: string | number;
            step: string | number;
            thumbLabel: "always" | boolean | undefined;
            thumbSize: string | number;
            showTicks: "always" | boolean;
            tickSize: string | number;
            trackSize: string | number;
            reverse: boolean;
            noKeyboard: boolean;
            ripple: boolean;
            modelValue: string | number;
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            $children?: {
                default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                "tick-label"?: ((arg: {
                    tick: import("../../components/VSlider/slider.js").Tick;
                    index: number;
                }) => import("vue").VNodeChild) | undefined;
                "thumb-label"?: ((arg: {
                    modelValue: number;
                }) => import("vue").VNodeChild) | undefined;
                label?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                "tick-label"?: false | ((arg: {
                    tick: import("../../components/VSlider/slider.js").Tick;
                    index: number;
                }) => import("vue").VNodeChild) | undefined;
                "thumb-label"?: false | ((arg: {
                    modelValue: number;
                }) => import("vue").VNodeChild) | undefined;
                label?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
            focused: boolean;
            "onUpdate:focused"?: (((args_0: boolean) => void) & ((value: boolean) => any)) | undefined;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            name?: string | undefined;
            label?: string | undefined;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
            validationValue?: any;
            density: import("../../composables/density.js").Density;
            elevation: string | number;
            rounded?: string | number | boolean | undefined;
            tile: boolean;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            id?: string | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            baseColor?: string | undefined;
            centerAffix: boolean;
            color?: string | undefined;
            glow: boolean;
            iconColor?: string | boolean | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            hideDetails?: "auto" | boolean | undefined;
            hideSpinButtons: boolean;
            hint?: string | undefined;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
            "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
            max: string | number;
            min: string | number;
            step: string | number;
            thumbColor?: string | undefined;
            thumbLabel?: "always" | boolean | undefined;
            thumbSize: string | number;
            showTicks: "always" | boolean;
            ticks?: readonly number[] | Record<number, string> | undefined;
            tickSize: string | number;
            trackColor?: string | undefined;
            trackFillColor?: string | undefined;
            trackSize: string | number;
            reverse: boolean;
            noKeyboard: boolean;
            ripple: boolean;
            modelValue: string | number;
            onEnd?: ((value: number) => any) | undefined;
            onStart?: ((value: number) => any) | undefined;
            "onUpdate:modelValue"?: ((v: number) => any) | undefined;
            "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:thumb-label"?: false | ((arg: {
                modelValue: number;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:tick-label"?: false | ((arg: {
                tick: import("../../components/VSlider/slider.js").Tick;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "centerAffix" | "density" | "direction" | "disabled" | "elevation" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "max" | "maxErrors" | "messages" | "min" | "modelValue" | "noKeyboard" | "persistentHint" | "readonly" | "reverse" | "ripple" | "rounded" | "rules" | "showTicks" | "step" | "style" | "thumbLabel" | "thumbSize" | "tickSize" | "tile" | "trackSize">, "color" | "disabled" | "maxWidth" | "thumbSize" | "trackColor" | "width"> | Defaults["sliderProps"]>;
        default: unknown extends Defaults["sliderProps"] ? Pick<Partial<{
            style: import("vue").StyleValue;
            focused: boolean;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("../../composables/density.js").Density;
            elevation: string | number;
            rounded: string | number | boolean;
            tile: boolean;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
            max: string | number;
            min: string | number;
            step: string | number;
            thumbLabel: "always" | boolean | undefined;
            thumbSize: string | number;
            showTicks: "always" | boolean;
            tickSize: string | number;
            trackSize: string | number;
            reverse: boolean;
            noKeyboard: boolean;
            ripple: boolean;
            modelValue: string | number;
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            $children?: {
                default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                "tick-label"?: ((arg: {
                    tick: import("../../components/VSlider/slider.js").Tick;
                    index: number;
                }) => import("vue").VNodeChild) | undefined;
                "thumb-label"?: ((arg: {
                    modelValue: number;
                }) => import("vue").VNodeChild) | undefined;
                label?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                "tick-label"?: false | ((arg: {
                    tick: import("../../components/VSlider/slider.js").Tick;
                    index: number;
                }) => import("vue").VNodeChild) | undefined;
                "thumb-label"?: false | ((arg: {
                    modelValue: number;
                }) => import("vue").VNodeChild) | undefined;
                label?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
            focused: boolean;
            "onUpdate:focused"?: (((args_0: boolean) => void) & ((value: boolean) => any)) | undefined;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            name?: string | undefined;
            label?: string | undefined;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
            validationValue?: any;
            density: import("../../composables/density.js").Density;
            elevation: string | number;
            rounded?: string | number | boolean | undefined;
            tile: boolean;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            id?: string | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            baseColor?: string | undefined;
            centerAffix: boolean;
            color?: string | undefined;
            glow: boolean;
            iconColor?: string | boolean | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            hideDetails?: "auto" | boolean | undefined;
            hideSpinButtons: boolean;
            hint?: string | undefined;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
            "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
            max: string | number;
            min: string | number;
            step: string | number;
            thumbColor?: string | undefined;
            thumbLabel?: "always" | boolean | undefined;
            thumbSize: string | number;
            showTicks: "always" | boolean;
            ticks?: readonly number[] | Record<number, string> | undefined;
            tickSize: string | number;
            trackColor?: string | undefined;
            trackFillColor?: string | undefined;
            trackSize: string | number;
            reverse: boolean;
            noKeyboard: boolean;
            ripple: boolean;
            modelValue: string | number;
            onEnd?: ((value: number) => any) | undefined;
            onStart?: ((value: number) => any) | undefined;
            "onUpdate:modelValue"?: ((v: number) => any) | undefined;
            "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:thumb-label"?: false | ((arg: {
                modelValue: number;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:tick-label"?: false | ((arg: {
                tick: import("../../components/VSlider/slider.js").Tick;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "centerAffix" | "density" | "direction" | "disabled" | "elevation" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "max" | "maxErrors" | "messages" | "min" | "modelValue" | "noKeyboard" | "persistentHint" | "readonly" | "reverse" | "ripple" | "rounded" | "rules" | "showTicks" | "step" | "style" | "thumbLabel" | "thumbSize" | "tickSize" | "tile" | "trackSize">, "color" | "disabled" | "maxWidth" | "thumbSize" | "trackColor" | "width"> : Pick<Partial<{
            style: import("vue").StyleValue;
            focused: boolean;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("../../composables/density.js").Density;
            elevation: string | number;
            rounded: string | number | boolean;
            tile: boolean;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
            max: string | number;
            min: string | number;
            step: string | number;
            thumbLabel: "always" | boolean | undefined;
            thumbSize: string | number;
            showTicks: "always" | boolean;
            tickSize: string | number;
            trackSize: string | number;
            reverse: boolean;
            noKeyboard: boolean;
            ripple: boolean;
            modelValue: string | number;
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            $children?: {
                default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                "tick-label"?: ((arg: {
                    tick: import("../../components/VSlider/slider.js").Tick;
                    index: number;
                }) => import("vue").VNodeChild) | undefined;
                "thumb-label"?: ((arg: {
                    modelValue: number;
                }) => import("vue").VNodeChild) | undefined;
                label?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                "tick-label"?: false | ((arg: {
                    tick: import("../../components/VSlider/slider.js").Tick;
                    index: number;
                }) => import("vue").VNodeChild) | undefined;
                "thumb-label"?: false | ((arg: {
                    modelValue: number;
                }) => import("vue").VNodeChild) | undefined;
                label?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
            focused: boolean;
            "onUpdate:focused"?: (((args_0: boolean) => void) & ((value: boolean) => any)) | undefined;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            name?: string | undefined;
            label?: string | undefined;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
            validationValue?: any;
            density: import("../../composables/density.js").Density;
            elevation: string | number;
            rounded?: string | number | boolean | undefined;
            tile: boolean;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            id?: string | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            baseColor?: string | undefined;
            centerAffix: boolean;
            color?: string | undefined;
            glow: boolean;
            iconColor?: string | boolean | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            hideDetails?: "auto" | boolean | undefined;
            hideSpinButtons: boolean;
            hint?: string | undefined;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
            "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
            max: string | number;
            min: string | number;
            step: string | number;
            thumbColor?: string | undefined;
            thumbLabel?: "always" | boolean | undefined;
            thumbSize: string | number;
            showTicks: "always" | boolean;
            ticks?: readonly number[] | Record<number, string> | undefined;
            tickSize: string | number;
            trackColor?: string | undefined;
            trackFillColor?: string | undefined;
            trackSize: string | number;
            reverse: boolean;
            noKeyboard: boolean;
            ripple: boolean;
            modelValue: string | number;
            onEnd?: ((value: number) => any) | undefined;
            onStart?: ((value: number) => any) | undefined;
            "onUpdate:modelValue"?: ((v: number) => any) | undefined;
            "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:thumb-label"?: false | ((arg: {
                modelValue: number;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:tick-label"?: false | ((arg: {
                tick: import("../../components/VSlider/slider.js").Tick;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "centerAffix" | "density" | "direction" | "disabled" | "elevation" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "max" | "maxErrors" | "messages" | "min" | "modelValue" | "noKeyboard" | "persistentHint" | "readonly" | "reverse" | "ripple" | "rounded" | "rules" | "showTicks" | "step" | "style" | "thumbLabel" | "thumbSize" | "tickSize" | "tile" | "trackSize">, "color" | "disabled" | "maxWidth" | "thumbSize" | "trackColor" | "width"> | Defaults["sliderProps"];
    };
    onClick: unknown extends Defaults["onClick"] ? PropType<(args_0: KeyboardEvent | MouseEvent) => void> : {
        type: PropType<unknown extends Defaults["onClick"] ? (args_0: KeyboardEvent | MouseEvent) => void : ((args_0: KeyboardEvent | MouseEvent) => void) | Defaults["onClick"]>;
        default: unknown extends Defaults["onClick"] ? (args_0: KeyboardEvent | MouseEvent) => void : ((args_0: KeyboardEvent | MouseEvent) => void) | Defaults["onClick"];
    };
};
export declare const VVideoVolume: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        inline: boolean;
        direction: "horizontal" | "vertical";
        modelValue: number;
    } & {
        class?: any;
        label?: string | undefined;
        menuProps?: (Partial<{
            style: import("vue").StyleValue;
            locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
            location: import("../../util/index.js").Anchor | undefined;
            origin: "auto" | "overlap" | import("../../util/index.js").Anchor;
            stickToTarget: boolean;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction;
            closeDelay: string | number;
            openDelay: string | number;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
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
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            submenu: boolean;
            disableInitialFocus: boolean;
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            $children?: {
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("../../util/index.js").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
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
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            closeDelay: string | number;
            openDelay: string | number;
            target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            activatorProps: Record<string, any>;
            openOnClick?: boolean | undefined;
            openOnHover: boolean;
            openOnFocus?: boolean | undefined;
            closeOnContentClick: boolean;
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
            id?: string | undefined;
            submenu: boolean;
            disableInitialFocus: boolean;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "activatorProps" | "closeDelay" | "closeOnBack" | "closeOnContentClick" | "contained" | "disableInitialFocus" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openDelay" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "submenu" | "transition" | "zIndex">) | undefined;
        sliderProps?: Pick<Partial<{
            style: import("vue").StyleValue;
            focused: boolean;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("../../composables/density.js").Density;
            elevation: string | number;
            rounded: string | number | boolean;
            tile: boolean;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
            max: string | number;
            min: string | number;
            step: string | number;
            thumbLabel: "always" | boolean | undefined;
            thumbSize: string | number;
            showTicks: "always" | boolean;
            tickSize: string | number;
            trackSize: string | number;
            reverse: boolean;
            noKeyboard: boolean;
            ripple: boolean;
            modelValue: string | number;
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            $children?: {
                default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                "tick-label"?: ((arg: {
                    tick: import("../../components/VSlider/slider.js").Tick;
                    index: number;
                }) => import("vue").VNodeChild) | undefined;
                "thumb-label"?: ((arg: {
                    modelValue: number;
                }) => import("vue").VNodeChild) | undefined;
                label?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                "tick-label"?: false | ((arg: {
                    tick: import("../../components/VSlider/slider.js").Tick;
                    index: number;
                }) => import("vue").VNodeChild) | undefined;
                "thumb-label"?: false | ((arg: {
                    modelValue: number;
                }) => import("vue").VNodeChild) | undefined;
                label?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
            focused: boolean;
            "onUpdate:focused"?: (((args_0: boolean) => void) & ((value: boolean) => any)) | undefined;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            name?: string | undefined;
            label?: string | undefined;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
            validationValue?: any;
            density: import("../../composables/density.js").Density;
            elevation: string | number;
            rounded?: string | number | boolean | undefined;
            tile: boolean;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            id?: string | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            baseColor?: string | undefined;
            centerAffix: boolean;
            color?: string | undefined;
            glow: boolean;
            iconColor?: string | boolean | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            hideDetails?: "auto" | boolean | undefined;
            hideSpinButtons: boolean;
            hint?: string | undefined;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
            "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
            max: string | number;
            min: string | number;
            step: string | number;
            thumbColor?: string | undefined;
            thumbLabel?: "always" | boolean | undefined;
            thumbSize: string | number;
            showTicks: "always" | boolean;
            ticks?: readonly number[] | Record<number, string> | undefined;
            tickSize: string | number;
            trackColor?: string | undefined;
            trackFillColor?: string | undefined;
            trackSize: string | number;
            reverse: boolean;
            noKeyboard: boolean;
            ripple: boolean;
            modelValue: string | number;
            onEnd?: ((value: number) => any) | undefined;
            onStart?: ((value: number) => any) | undefined;
            "onUpdate:modelValue"?: ((v: number) => any) | undefined;
            "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:thumb-label"?: false | ((arg: {
                modelValue: number;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:tick-label"?: false | ((arg: {
                tick: import("../../components/VSlider/slider.js").Tick;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "centerAffix" | "density" | "direction" | "disabled" | "elevation" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "max" | "maxErrors" | "messages" | "min" | "modelValue" | "noKeyboard" | "persistentHint" | "readonly" | "reverse" | "ripple" | "rounded" | "rules" | "showTicks" | "step" | "style" | "thumbLabel" | "thumbSize" | "tickSize" | "tile" | "trackSize">, "color" | "disabled" | "maxWidth" | "thumbSize" | "trackColor" | "width"> | undefined;
        onClick?: ((args_0: KeyboardEvent | MouseEvent) => void) | undefined;
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
    } & {
        "onUpdate:modelValue"?: ((val: number) => any) | undefined;
    }, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (val: number) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        inline: boolean;
        direction: "horizontal" | "vertical";
        modelValue: number;
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
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        inline: boolean;
        direction: "horizontal" | "vertical";
        modelValue: number;
    } & {
        class?: any;
        label?: string | undefined;
        menuProps?: (Partial<{
            style: import("vue").StyleValue;
            locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
            location: import("../../util/index.js").Anchor | undefined;
            origin: "auto" | "overlap" | import("../../util/index.js").Anchor;
            stickToTarget: boolean;
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction;
            closeDelay: string | number;
            openDelay: string | number;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
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
            closeOnBack: boolean;
            contained: boolean;
            disabled: boolean;
            noClickAnimation: boolean;
            modelValue: boolean;
            persistent: boolean;
            scrim: string | boolean;
            zIndex: string | number;
            submenu: boolean;
            disableInitialFocus: boolean;
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            $children?: {
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("../../util/index.js").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: {
                    isActive: import("vue").Ref<boolean, boolean>;
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
            scrollStrategy: "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            closeDelay: string | number;
            openDelay: string | number;
            target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
            activatorProps: Record<string, any>;
            openOnClick?: boolean | undefined;
            openOnHover: boolean;
            openOnFocus?: boolean | undefined;
            closeOnContentClick: boolean;
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
            id?: string | undefined;
            submenu: boolean;
            disableInitialFocus: boolean;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "activatorProps" | "closeDelay" | "closeOnBack" | "closeOnContentClick" | "contained" | "disableInitialFocus" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openDelay" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "submenu" | "transition" | "zIndex">) | undefined;
        sliderProps?: Pick<Partial<{
            style: import("vue").StyleValue;
            focused: boolean;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("../../composables/density.js").Density;
            elevation: string | number;
            rounded: string | number | boolean;
            tile: boolean;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
            max: string | number;
            min: string | number;
            step: string | number;
            thumbLabel: "always" | boolean | undefined;
            thumbSize: string | number;
            showTicks: "always" | boolean;
            tickSize: string | number;
            trackSize: string | number;
            reverse: boolean;
            noKeyboard: boolean;
            ripple: boolean;
            modelValue: string | number;
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            $children?: {
                default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                "tick-label"?: ((arg: {
                    tick: import("../../components/VSlider/slider.js").Tick;
                    index: number;
                }) => import("vue").VNodeChild) | undefined;
                "thumb-label"?: ((arg: {
                    modelValue: number;
                }) => import("vue").VNodeChild) | undefined;
                label?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                "tick-label"?: false | ((arg: {
                    tick: import("../../components/VSlider/slider.js").Tick;
                    index: number;
                }) => import("vue").VNodeChild) | undefined;
                "thumb-label"?: false | ((arg: {
                    modelValue: number;
                }) => import("vue").VNodeChild) | undefined;
                label?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
            focused: boolean;
            "onUpdate:focused"?: (((args_0: boolean) => void) & ((value: boolean) => any)) | undefined;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            name?: string | undefined;
            label?: string | undefined;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
            validationValue?: any;
            density: import("../../composables/density.js").Density;
            elevation: string | number;
            rounded?: string | number | boolean | undefined;
            tile: boolean;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            id?: string | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            baseColor?: string | undefined;
            centerAffix: boolean;
            color?: string | undefined;
            glow: boolean;
            iconColor?: string | boolean | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            hideDetails?: "auto" | boolean | undefined;
            hideSpinButtons: boolean;
            hint?: string | undefined;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
            "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
            max: string | number;
            min: string | number;
            step: string | number;
            thumbColor?: string | undefined;
            thumbLabel?: "always" | boolean | undefined;
            thumbSize: string | number;
            showTicks: "always" | boolean;
            ticks?: readonly number[] | Record<number, string> | undefined;
            tickSize: string | number;
            trackColor?: string | undefined;
            trackFillColor?: string | undefined;
            trackSize: string | number;
            reverse: boolean;
            noKeyboard: boolean;
            ripple: boolean;
            modelValue: string | number;
            onEnd?: ((value: number) => any) | undefined;
            onStart?: ((value: number) => any) | undefined;
            "onUpdate:modelValue"?: ((v: number) => any) | undefined;
            "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:thumb-label"?: false | ((arg: {
                modelValue: number;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:tick-label"?: false | ((arg: {
                tick: import("../../components/VSlider/slider.js").Tick;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "centerAffix" | "density" | "direction" | "disabled" | "elevation" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "max" | "maxErrors" | "messages" | "min" | "modelValue" | "noKeyboard" | "persistentHint" | "readonly" | "reverse" | "ripple" | "rounded" | "rules" | "showTicks" | "step" | "style" | "thumbLabel" | "thumbSize" | "tickSize" | "tile" | "trackSize">, "color" | "disabled" | "maxWidth" | "thumbSize" | "trackColor" | "width"> | undefined;
        onClick?: ((args_0: KeyboardEvent | MouseEvent) => void) | undefined;
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
    } & {
        "onUpdate:modelValue"?: ((val: number) => any) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        inline: boolean;
        direction: "horizontal" | "vertical";
        modelValue: number;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    inline: boolean;
    direction: "horizontal" | "vertical";
    modelValue: number;
} & {
    class?: any;
    label?: string | undefined;
    menuProps?: (Partial<{
        style: import("vue").StyleValue;
        locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
        location: import("../../util/index.js").Anchor | undefined;
        origin: "auto" | "overlap" | import("../../util/index.js").Anchor;
        stickToTarget: boolean;
        scrollStrategy: "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction;
        closeDelay: string | number;
        openDelay: string | number;
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
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
        closeOnBack: boolean;
        contained: boolean;
        disabled: boolean;
        noClickAnimation: boolean;
        modelValue: boolean;
        persistent: boolean;
        scrim: string | boolean;
        zIndex: string | number;
        submenu: boolean;
        disableInitialFocus: boolean;
    }> & Omit<{
        theme?: string | undefined;
        class?: any;
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        $children?: {
            default?: ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            isActive: import("vue").Ref<boolean, boolean>;
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
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
        scrollStrategy: "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        closeDelay: string | number;
        openDelay: string | number;
        target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
        activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
        activatorProps: Record<string, any>;
        openOnClick?: boolean | undefined;
        openOnHover: boolean;
        openOnFocus?: boolean | undefined;
        closeOnContentClick: boolean;
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
        id?: string | undefined;
        submenu: boolean;
        disableInitialFocus: boolean;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: import("../../util/index.js").TemplateRef;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: {
            isActive: import("vue").Ref<boolean, boolean>;
        }) => import("vue").VNodeChild) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "activatorProps" | "closeDelay" | "closeOnBack" | "closeOnContentClick" | "contained" | "disableInitialFocus" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openDelay" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "submenu" | "transition" | "zIndex">) | undefined;
    sliderProps?: Pick<Partial<{
        style: import("vue").StyleValue;
        focused: boolean;
        disabled: boolean | null;
        error: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        density: import("../../composables/density.js").Density;
        elevation: string | number;
        rounded: string | number | boolean;
        tile: boolean;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        messages: string | readonly string[];
        direction: "horizontal" | "vertical";
        max: string | number;
        min: string | number;
        step: string | number;
        thumbLabel: "always" | boolean | undefined;
        thumbSize: string | number;
        showTicks: "always" | boolean;
        tickSize: string | number;
        trackSize: string | number;
        reverse: boolean;
        noKeyboard: boolean;
        ripple: boolean;
        modelValue: string | number;
    }> & Omit<{
        theme?: string | undefined;
        class?: any;
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        $children?: {
            default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "tick-label"?: ((arg: {
                tick: import("../../components/VSlider/slider.js").Tick;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
            "thumb-label"?: ((arg: {
                modelValue: number;
            }) => import("vue").VNodeChild) | undefined;
            label?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "tick-label"?: false | ((arg: {
                tick: import("../../components/VSlider/slider.js").Tick;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
            "thumb-label"?: false | ((arg: {
                modelValue: number;
            }) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
        focused: boolean;
        "onUpdate:focused"?: (((args_0: boolean) => void) & ((value: boolean) => any)) | undefined;
        disabled: boolean | null;
        error: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        name?: string | undefined;
        label?: string | undefined;
        readonly: boolean | null;
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
        validationValue?: any;
        density: import("../../composables/density.js").Density;
        elevation: string | number;
        rounded?: string | number | boolean | undefined;
        tile: boolean;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        id?: string | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        baseColor?: string | undefined;
        centerAffix: boolean;
        color?: string | undefined;
        glow: boolean;
        iconColor?: string | boolean | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        hideDetails?: "auto" | boolean | undefined;
        hideSpinButtons: boolean;
        hint?: string | undefined;
        persistentHint: boolean;
        messages: string | readonly string[];
        direction: "horizontal" | "vertical";
        "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
        max: string | number;
        min: string | number;
        step: string | number;
        thumbColor?: string | undefined;
        thumbLabel?: "always" | boolean | undefined;
        thumbSize: string | number;
        showTicks: "always" | boolean;
        ticks?: readonly number[] | Record<number, string> | undefined;
        tickSize: string | number;
        trackColor?: string | undefined;
        trackFillColor?: string | undefined;
        trackSize: string | number;
        reverse: boolean;
        noKeyboard: boolean;
        ripple: boolean;
        modelValue: string | number;
        onEnd?: ((value: number) => any) | undefined;
        onStart?: ((value: number) => any) | undefined;
        "onUpdate:modelValue"?: ((v: number) => any) | undefined;
        "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:thumb-label"?: false | ((arg: {
            modelValue: number;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:tick-label"?: false | ((arg: {
            tick: import("../../components/VSlider/slider.js").Tick;
            index: number;
        }) => import("vue").VNodeChild) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "centerAffix" | "density" | "direction" | "disabled" | "elevation" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "max" | "maxErrors" | "messages" | "min" | "modelValue" | "noKeyboard" | "persistentHint" | "readonly" | "reverse" | "ripple" | "rounded" | "rules" | "showTicks" | "step" | "style" | "thumbLabel" | "thumbSize" | "tickSize" | "tile" | "trackSize">, "color" | "disabled" | "maxWidth" | "thumbSize" | "trackColor" | "width"> | undefined;
    onClick?: ((args_0: KeyboardEvent | MouseEvent) => void) | undefined;
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
} & {
    "onUpdate:modelValue"?: ((val: number) => any) | undefined;
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (val: number) => true;
}, string, {
    style: import("vue").StyleValue;
    inline: boolean;
    direction: "horizontal" | "vertical";
    modelValue: number;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    inline: BooleanConstructor;
    label: StringConstructor;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    menuProps: PropType<Partial<{
        style: import("vue").StyleValue;
        locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
        location: import("../../util/index.js").Anchor | undefined;
        origin: "auto" | "overlap" | import("../../util/index.js").Anchor;
        stickToTarget: boolean;
        scrollStrategy: "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction;
        closeDelay: string | number;
        openDelay: string | number;
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
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
        closeOnBack: boolean;
        contained: boolean;
        disabled: boolean;
        noClickAnimation: boolean;
        modelValue: boolean;
        persistent: boolean;
        scrim: string | boolean;
        zIndex: string | number;
        submenu: boolean;
        disableInitialFocus: boolean;
    }> & Omit<{
        theme?: string | undefined;
        class?: any;
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        $children?: {
            default?: ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            isActive: import("vue").Ref<boolean, boolean>;
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
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
        scrollStrategy: "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        closeDelay: string | number;
        openDelay: string | number;
        target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
        activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
        activatorProps: Record<string, any>;
        openOnClick?: boolean | undefined;
        openOnHover: boolean;
        openOnFocus?: boolean | undefined;
        closeOnContentClick: boolean;
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
        id?: string | undefined;
        submenu: boolean;
        disableInitialFocus: boolean;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: import("../../util/index.js").TemplateRef;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: {
            isActive: import("vue").Ref<boolean, boolean>;
        }) => import("vue").VNodeChild) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "activatorProps" | "closeDelay" | "closeOnBack" | "closeOnContentClick" | "contained" | "disableInitialFocus" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openDelay" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "submenu" | "transition" | "zIndex">>;
    sliderProps: PropType<Pick<Partial<{
        style: import("vue").StyleValue;
        focused: boolean;
        disabled: boolean | null;
        error: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        density: import("../../composables/density.js").Density;
        elevation: string | number;
        rounded: string | number | boolean;
        tile: boolean;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        messages: string | readonly string[];
        direction: "horizontal" | "vertical";
        max: string | number;
        min: string | number;
        step: string | number;
        thumbLabel: "always" | boolean | undefined;
        thumbSize: string | number;
        showTicks: "always" | boolean;
        tickSize: string | number;
        trackSize: string | number;
        reverse: boolean;
        noKeyboard: boolean;
        ripple: boolean;
        modelValue: string | number;
    }> & Omit<{
        theme?: string | undefined;
        class?: any;
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        $children?: {
            default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "tick-label"?: ((arg: {
                tick: import("../../components/VSlider/slider.js").Tick;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
            "thumb-label"?: ((arg: {
                modelValue: number;
            }) => import("vue").VNodeChild) | undefined;
            label?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "tick-label"?: false | ((arg: {
                tick: import("../../components/VSlider/slider.js").Tick;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
            "thumb-label"?: false | ((arg: {
                modelValue: number;
            }) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
        focused: boolean;
        "onUpdate:focused"?: (((args_0: boolean) => void) & ((value: boolean) => any)) | undefined;
        disabled: boolean | null;
        error: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        name?: string | undefined;
        label?: string | undefined;
        readonly: boolean | null;
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
        validationValue?: any;
        density: import("../../composables/density.js").Density;
        elevation: string | number;
        rounded?: string | number | boolean | undefined;
        tile: boolean;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        id?: string | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        baseColor?: string | undefined;
        centerAffix: boolean;
        color?: string | undefined;
        glow: boolean;
        iconColor?: string | boolean | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        hideDetails?: "auto" | boolean | undefined;
        hideSpinButtons: boolean;
        hint?: string | undefined;
        persistentHint: boolean;
        messages: string | readonly string[];
        direction: "horizontal" | "vertical";
        "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
        max: string | number;
        min: string | number;
        step: string | number;
        thumbColor?: string | undefined;
        thumbLabel?: "always" | boolean | undefined;
        thumbSize: string | number;
        showTicks: "always" | boolean;
        ticks?: readonly number[] | Record<number, string> | undefined;
        tickSize: string | number;
        trackColor?: string | undefined;
        trackFillColor?: string | undefined;
        trackSize: string | number;
        reverse: boolean;
        noKeyboard: boolean;
        ripple: boolean;
        modelValue: string | number;
        onEnd?: ((value: number) => any) | undefined;
        onStart?: ((value: number) => any) | undefined;
        "onUpdate:modelValue"?: ((v: number) => any) | undefined;
        "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:thumb-label"?: false | ((arg: {
            modelValue: number;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:tick-label"?: false | ((arg: {
            tick: import("../../components/VSlider/slider.js").Tick;
            index: number;
        }) => import("vue").VNodeChild) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "centerAffix" | "density" | "direction" | "disabled" | "elevation" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "max" | "maxErrors" | "messages" | "min" | "modelValue" | "noKeyboard" | "persistentHint" | "readonly" | "reverse" | "ripple" | "rounded" | "rules" | "showTicks" | "step" | "style" | "thumbLabel" | "thumbSize" | "tickSize" | "tile" | "trackSize">, "color" | "disabled" | "maxWidth" | "thumbSize" | "trackColor" | "width">>;
    onClick: PropType<(args_0: KeyboardEvent | MouseEvent) => void>;
}, import("vue").ExtractPropTypes<{
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    inline: BooleanConstructor;
    label: StringConstructor;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    menuProps: PropType<Partial<{
        style: import("vue").StyleValue;
        locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
        location: import("../../util/index.js").Anchor | undefined;
        origin: "auto" | "overlap" | import("../../util/index.js").Anchor;
        stickToTarget: boolean;
        scrollStrategy: "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction;
        closeDelay: string | number;
        openDelay: string | number;
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
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
        closeOnBack: boolean;
        contained: boolean;
        disabled: boolean;
        noClickAnimation: boolean;
        modelValue: boolean;
        persistent: boolean;
        scrim: string | boolean;
        zIndex: string | number;
        submenu: boolean;
        disableInitialFocus: boolean;
    }> & Omit<{
        theme?: string | undefined;
        class?: any;
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        $children?: {
            default?: ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
            }) => import("vue").VNodeChild) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            isActive: import("vue").Ref<boolean, boolean>;
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: {
                isActive: import("vue").Ref<boolean, boolean>;
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
        scrollStrategy: "block" | "close" | "none" | "reposition" | import("../../types.js").ScrollStrategyFunction;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        closeDelay: string | number;
        openDelay: string | number;
        target?: "cursor" | "parent" | Element | [x: number, y: number] | import("vue").ComponentPublicInstance | (string & {}) | undefined;
        activator?: "parent" | Element | import("vue").ComponentPublicInstance | (string & {}) | undefined;
        activatorProps: Record<string, any>;
        openOnClick?: boolean | undefined;
        openOnHover: boolean;
        openOnFocus?: boolean | undefined;
        closeOnContentClick: boolean;
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
        id?: string | undefined;
        submenu: boolean;
        disableInitialFocus: boolean;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: import("../../util/index.js").TemplateRef;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: {
            isActive: import("vue").Ref<boolean, boolean>;
        }) => import("vue").VNodeChild) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "activatorProps" | "closeDelay" | "closeOnBack" | "closeOnContentClick" | "contained" | "disableInitialFocus" | "disabled" | "eager" | "location" | "locationStrategy" | "modelValue" | "noClickAnimation" | "openDelay" | "openOnClick" | "openOnFocus" | "openOnHover" | "origin" | "persistent" | "scrim" | "scrollStrategy" | "stickToTarget" | "style" | "submenu" | "transition" | "zIndex">>;
    sliderProps: PropType<Pick<Partial<{
        style: import("vue").StyleValue;
        focused: boolean;
        disabled: boolean | null;
        error: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        density: import("../../composables/density.js").Density;
        elevation: string | number;
        rounded: string | number | boolean;
        tile: boolean;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        messages: string | readonly string[];
        direction: "horizontal" | "vertical";
        max: string | number;
        min: string | number;
        step: string | number;
        thumbLabel: "always" | boolean | undefined;
        thumbSize: string | number;
        showTicks: "always" | boolean;
        tickSize: string | number;
        trackSize: string | number;
        reverse: boolean;
        noKeyboard: boolean;
        ripple: boolean;
        modelValue: string | number;
    }> & Omit<{
        theme?: string | undefined;
        class?: any;
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        $children?: {
            default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "tick-label"?: ((arg: {
                tick: import("../../components/VSlider/slider.js").Tick;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
            "thumb-label"?: ((arg: {
                modelValue: number;
            }) => import("vue").VNodeChild) | undefined;
            label?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "tick-label"?: false | ((arg: {
                tick: import("../../components/VSlider/slider.js").Tick;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
            "thumb-label"?: false | ((arg: {
                modelValue: number;
            }) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
        focused: boolean;
        "onUpdate:focused"?: (((args_0: boolean) => void) & ((value: boolean) => any)) | undefined;
        disabled: boolean | null;
        error: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        name?: string | undefined;
        label?: string | undefined;
        readonly: boolean | null;
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
        validationValue?: any;
        density: import("../../composables/density.js").Density;
        elevation: string | number;
        rounded?: string | number | boolean | undefined;
        tile: boolean;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        id?: string | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        baseColor?: string | undefined;
        centerAffix: boolean;
        color?: string | undefined;
        glow: boolean;
        iconColor?: string | boolean | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        hideDetails?: "auto" | boolean | undefined;
        hideSpinButtons: boolean;
        hint?: string | undefined;
        persistentHint: boolean;
        messages: string | readonly string[];
        direction: "horizontal" | "vertical";
        "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
        max: string | number;
        min: string | number;
        step: string | number;
        thumbColor?: string | undefined;
        thumbLabel?: "always" | boolean | undefined;
        thumbSize: string | number;
        showTicks: "always" | boolean;
        ticks?: readonly number[] | Record<number, string> | undefined;
        tickSize: string | number;
        trackColor?: string | undefined;
        trackFillColor?: string | undefined;
        trackSize: string | number;
        reverse: boolean;
        noKeyboard: boolean;
        ripple: boolean;
        modelValue: string | number;
        onEnd?: ((value: number) => any) | undefined;
        onStart?: ((value: number) => any) | undefined;
        "onUpdate:modelValue"?: ((v: number) => any) | undefined;
        "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:thumb-label"?: false | ((arg: {
            modelValue: number;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:tick-label"?: false | ((arg: {
            tick: import("../../components/VSlider/slider.js").Tick;
            index: number;
        }) => import("vue").VNodeChild) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "centerAffix" | "density" | "direction" | "disabled" | "elevation" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "max" | "maxErrors" | "messages" | "min" | "modelValue" | "noKeyboard" | "persistentHint" | "readonly" | "reverse" | "ripple" | "rounded" | "rules" | "showTicks" | "step" | "style" | "thumbLabel" | "thumbSize" | "tickSize" | "tile" | "trackSize">, "color" | "disabled" | "maxWidth" | "thumbSize" | "trackColor" | "width">>;
    onClick: PropType<(args_0: KeyboardEvent | MouseEvent) => void>;
}>>;
export type VVideoVolume = InstanceType<typeof VVideoVolume>;
