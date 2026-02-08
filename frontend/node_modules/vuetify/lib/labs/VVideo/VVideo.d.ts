// Styles

// Types
import type { Component, PropType, TransitionProps } from 'vue';
import type { VVideoControlsActionsSlot } from './VVideoControls.js';
import type { LoaderSlotProps } from '../../composables/loader.js';
export type VVideoSlots = {
    header: never;
    controls: VVideoControlsActionsSlot;
    prepend: VVideoControlsActionsSlot;
    append: VVideoControlsActionsSlot;
    loader: LoaderSlotProps;
    sources: never;
};
export declare const makeVVideoProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
    density?: unknown;
    elevation?: unknown;
    height?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    width?: unknown;
    color?: unknown;
    backgroundColor?: unknown;
    trackColor?: unknown;
    playing?: unknown;
    hidePlay?: unknown;
    hideVolume?: unknown;
    hideFullscreen?: unknown;
    floating?: unknown;
    splitTime?: unknown;
    pills?: unknown;
    detached?: unknown;
    progress?: unknown;
    duration?: unknown;
    volume?: unknown;
    volumeProps?: unknown;
    aspectRatio?: unknown;
    autoplay?: unknown;
    muted?: unknown;
    eager?: unknown;
    src?: unknown;
    type?: unknown;
    image?: unknown;
    hideOverlay?: unknown;
    noFullscreen?: unknown;
    startAt?: unknown;
    variant?: unknown;
    controlsTransition?: unknown;
    controlsVariant?: unknown;
    controlsProps?: unknown;
    rounded?: unknown;
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
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    backgroundColor: unknown extends Defaults["backgroundColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["backgroundColor"] ? string : string | Defaults["backgroundColor"]>;
        default: unknown extends Defaults["backgroundColor"] ? string : string | Defaults["backgroundColor"];
    };
    trackColor: unknown extends Defaults["trackColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["trackColor"] ? string : string | Defaults["trackColor"]>;
        default: unknown extends Defaults["trackColor"] ? string : string | Defaults["trackColor"];
    };
    playing: unknown extends Defaults["playing"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["playing"] ? boolean : boolean | Defaults["playing"]>;
        default: unknown extends Defaults["playing"] ? boolean : boolean | Defaults["playing"];
    };
    hidePlay: unknown extends Defaults["hidePlay"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hidePlay"] ? boolean : boolean | Defaults["hidePlay"]>;
        default: unknown extends Defaults["hidePlay"] ? boolean : boolean | Defaults["hidePlay"];
    };
    hideVolume: unknown extends Defaults["hideVolume"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideVolume"] ? boolean : boolean | Defaults["hideVolume"]>;
        default: unknown extends Defaults["hideVolume"] ? boolean : boolean | Defaults["hideVolume"];
    };
    hideFullscreen: unknown extends Defaults["hideFullscreen"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideFullscreen"] ? boolean : boolean | Defaults["hideFullscreen"]>;
        default: unknown extends Defaults["hideFullscreen"] ? boolean : boolean | Defaults["hideFullscreen"];
    };
    floating: unknown extends Defaults["floating"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["floating"] ? boolean : boolean | Defaults["floating"]>;
        default: unknown extends Defaults["floating"] ? boolean : boolean | Defaults["floating"];
    };
    splitTime: unknown extends Defaults["splitTime"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["splitTime"] ? boolean : boolean | Defaults["splitTime"]>;
        default: unknown extends Defaults["splitTime"] ? boolean : boolean | Defaults["splitTime"];
    };
    pills: unknown extends Defaults["pills"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["pills"] ? boolean : boolean | Defaults["pills"]>;
        default: unknown extends Defaults["pills"] ? boolean : boolean | Defaults["pills"];
    };
    detached: unknown extends Defaults["detached"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["detached"] ? boolean : boolean | Defaults["detached"]>;
        default: unknown extends Defaults["detached"] ? boolean : boolean | Defaults["detached"];
    };
    progress: unknown extends Defaults["progress"] ? {
        type: NumberConstructor;
        default: number;
    } : Omit<{
        type: NumberConstructor;
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["progress"] ? number : number | Defaults["progress"]>;
        default: unknown extends Defaults["progress"] ? number : number | Defaults["progress"];
    };
    duration: unknown extends Defaults["duration"] ? {
        type: NumberConstructor;
        default: number;
    } : Omit<{
        type: NumberConstructor;
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["duration"] ? number : number | Defaults["duration"]>;
        default: unknown extends Defaults["duration"] ? number : number | Defaults["duration"];
    };
    volume: unknown extends Defaults["volume"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["volume"] ? string | number : string | number | Defaults["volume"]>;
        default: unknown extends Defaults["volume"] ? string | number : Defaults["volume"] | NonNullable<string | number>;
    };
    volumeProps: unknown extends Defaults["volumeProps"] ? PropType<Pick<Partial<{
        style: import("vue").StyleValue;
        inline: boolean;
        direction: "horizontal" | "vertical";
        modelValue: number;
    }> & Omit<{
        class?: any;
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
        inline: boolean;
        label?: string | undefined;
        direction: "horizontal" | "vertical";
        modelValue: number;
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
            } | (TransitionProps & {
                component?: Component | undefined;
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
            } | (TransitionProps & {
                component?: Component | undefined;
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
        "onUpdate:modelValue"?: ((val: number) => any) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "direction" | "inline" | "modelValue" | "style">, "direction" | "inline" | "menuProps" | "sliderProps">> : {
        type: PropType<unknown extends Defaults["volumeProps"] ? Pick<Partial<{
            style: import("vue").StyleValue;
            inline: boolean;
            direction: "horizontal" | "vertical";
            modelValue: number;
        }> & Omit<{
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            $children?: {
                default?: (() => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
            inline: boolean;
            label?: string | undefined;
            direction: "horizontal" | "vertical";
            modelValue: number;
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
                } | (TransitionProps & {
                    component?: Component | undefined;
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
                } | (TransitionProps & {
                    component?: Component | undefined;
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
            "onUpdate:modelValue"?: ((val: number) => any) | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "direction" | "inline" | "modelValue" | "style">, "direction" | "inline" | "menuProps" | "sliderProps"> : Pick<Partial<{
            style: import("vue").StyleValue;
            inline: boolean;
            direction: "horizontal" | "vertical";
            modelValue: number;
        }> & Omit<{
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            $children?: {
                default?: (() => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
            inline: boolean;
            label?: string | undefined;
            direction: "horizontal" | "vertical";
            modelValue: number;
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
                } | (TransitionProps & {
                    component?: Component | undefined;
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
                } | (TransitionProps & {
                    component?: Component | undefined;
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
            "onUpdate:modelValue"?: ((val: number) => any) | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "direction" | "inline" | "modelValue" | "style">, "direction" | "inline" | "menuProps" | "sliderProps"> | Defaults["volumeProps"]>;
        default: unknown extends Defaults["volumeProps"] ? Pick<Partial<{
            style: import("vue").StyleValue;
            inline: boolean;
            direction: "horizontal" | "vertical";
            modelValue: number;
        }> & Omit<{
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            $children?: {
                default?: (() => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
            inline: boolean;
            label?: string | undefined;
            direction: "horizontal" | "vertical";
            modelValue: number;
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
                } | (TransitionProps & {
                    component?: Component | undefined;
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
                } | (TransitionProps & {
                    component?: Component | undefined;
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
            "onUpdate:modelValue"?: ((val: number) => any) | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "direction" | "inline" | "modelValue" | "style">, "direction" | "inline" | "menuProps" | "sliderProps"> : Pick<Partial<{
            style: import("vue").StyleValue;
            inline: boolean;
            direction: "horizontal" | "vertical";
            modelValue: number;
        }> & Omit<{
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            $children?: {
                default?: (() => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
            inline: boolean;
            label?: string | undefined;
            direction: "horizontal" | "vertical";
            modelValue: number;
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
                } | (TransitionProps & {
                    component?: Component | undefined;
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
                } | (TransitionProps & {
                    component?: Component | undefined;
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
            "onUpdate:modelValue"?: ((val: number) => any) | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "direction" | "inline" | "modelValue" | "style">, "direction" | "inline" | "menuProps" | "sliderProps"> | Defaults["volumeProps"];
    };
    aspectRatio: unknown extends Defaults["aspectRatio"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["aspectRatio"] ? string | number : string | number | Defaults["aspectRatio"]>;
        default: unknown extends Defaults["aspectRatio"] ? string | number : Defaults["aspectRatio"] | NonNullable<string | number>;
    };
    autoplay: unknown extends Defaults["autoplay"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["autoplay"] ? boolean : boolean | Defaults["autoplay"]>;
        default: unknown extends Defaults["autoplay"] ? boolean : boolean | Defaults["autoplay"];
    };
    muted: unknown extends Defaults["muted"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["muted"] ? boolean : boolean | Defaults["muted"]>;
        default: unknown extends Defaults["muted"] ? boolean : boolean | Defaults["muted"];
    };
    eager: unknown extends Defaults["eager"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"]>;
        default: unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"];
    };
    src: unknown extends Defaults["src"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["src"] ? string : string | Defaults["src"]>;
        default: unknown extends Defaults["src"] ? string : string | Defaults["src"];
    };
    type: unknown extends Defaults["type"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["type"] ? string : string | Defaults["type"]>;
        default: unknown extends Defaults["type"] ? string : string | Defaults["type"];
    };
    image: unknown extends Defaults["image"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["image"] ? string : string | Defaults["image"]>;
        default: unknown extends Defaults["image"] ? string : string | Defaults["image"];
    };
    hideOverlay: unknown extends Defaults["hideOverlay"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideOverlay"] ? boolean : boolean | Defaults["hideOverlay"]>;
        default: unknown extends Defaults["hideOverlay"] ? boolean : boolean | Defaults["hideOverlay"];
    };
    noFullscreen: unknown extends Defaults["noFullscreen"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["noFullscreen"] ? boolean : boolean | Defaults["noFullscreen"]>;
        default: unknown extends Defaults["noFullscreen"] ? boolean : boolean | Defaults["noFullscreen"];
    };
    startAt: unknown extends Defaults["startAt"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["startAt"] ? string | number : string | number | Defaults["startAt"]>;
        default: unknown extends Defaults["startAt"] ? string | number : Defaults["startAt"] | NonNullable<string | number>;
    };
    variant: unknown extends Defaults["variant"] ? {
        type: PropType<"background" | "player">;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<"background" | "player">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["variant"] ? "background" | "player" : "background" | "player" | Defaults["variant"]>;
        default: unknown extends Defaults["variant"] ? "background" | "player" : Defaults["variant"] | NonNullable<"background" | "player">;
    };
    controlsTransition: unknown extends Defaults["controlsTransition"] ? {
        type: PropType<string | boolean | (TransitionProps & {
            component?: any;
        }) | null>;
        component: Component;
    } : Omit<{
        type: PropType<string | boolean | (TransitionProps & {
            component?: any;
        }) | null>;
        component: Component;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["controlsTransition"] ? string | boolean | (TransitionProps & {
            component?: any;
        }) | null : string | boolean | Defaults["controlsTransition"] | (TransitionProps & {
            component?: any;
        }) | null>;
        default: unknown extends Defaults["controlsTransition"] ? string | boolean | (TransitionProps & {
            component?: any;
        }) | null : Defaults["controlsTransition"] | NonNullable<string | boolean | (TransitionProps & {
            component?: any;
        }) | null>;
    };
    controlsVariant: unknown extends Defaults["controlsVariant"] ? {
        type: PropType<"default" | "hidden" | "mini" | "tube">;
        default: string;
    } : Omit<{
        type: PropType<"default" | "hidden" | "mini" | "tube">;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["controlsVariant"] ? "default" | "hidden" | "mini" | "tube" : "default" | "hidden" | "mini" | "tube" | Defaults["controlsVariant"]>;
        default: unknown extends Defaults["controlsVariant"] ? "default" | "hidden" | "mini" | "tube" : Defaults["controlsVariant"] | NonNullable<"default" | "hidden" | "mini" | "tube">;
    };
    controlsProps: unknown extends Defaults["controlsProps"] ? {
        type: PropType<Partial<{
            density: import("../../composables/density.js").Density;
            playing: boolean;
            hidePlay: boolean;
            hideVolume: boolean;
            hideFullscreen: boolean;
            fullscreen: boolean;
            floating: boolean;
            splitTime: boolean;
            pills: boolean;
            detached: boolean;
            progress: number;
            duration: number;
            variant: "default" | "hidden" | "mini" | "tube";
        }> & Omit<{
            theme?: string | undefined;
            $children?: {
                default?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
            density: import("../../composables/density.js").Density;
            elevation?: string | number | undefined;
            color?: string | undefined;
            backgroundColor?: string | undefined;
            trackColor?: string | undefined;
            playing: boolean;
            hidePlay: boolean;
            hideVolume: boolean;
            hideFullscreen: boolean;
            fullscreen: boolean;
            floating: boolean;
            splitTime: boolean;
            pills: boolean;
            detached: boolean;
            progress: number;
            duration: number;
            volume?: string | number | undefined;
            variant: "default" | "hidden" | "mini" | "tube";
            volumeProps?: Pick<Partial<{
                style: import("vue").StyleValue;
                inline: boolean;
                direction: "horizontal" | "vertical";
                modelValue: number;
            }> & Omit<{
                class?: any;
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                $children?: {
                    default?: (() => import("vue").VNodeChild) | undefined;
                } | {
                    $stable?: boolean | undefined;
                } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                "v-slots"?: {
                    default?: false | (() => import("vue").VNodeChild) | undefined;
                } | undefined;
                inline: boolean;
                label?: string | undefined;
                direction: "horizontal" | "vertical";
                modelValue: number;
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
                    } | (TransitionProps & {
                        component?: Component | undefined;
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
                    } | (TransitionProps & {
                        component?: Component | undefined;
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
                "onUpdate:modelValue"?: ((val: number) => any) | undefined;
                "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "direction" | "inline" | "modelValue" | "style">, "direction" | "inline" | "menuProps" | "sliderProps"> | undefined;
            "onClick:fullscreen"?: (() => any) | undefined;
            onSkip?: ((val: number) => any) | undefined;
            "onUpdate:playing"?: ((val: boolean) => any) | undefined;
            "onUpdate:progress"?: ((val: number) => any) | undefined;
            "onUpdate:volume"?: ((val: number) => any) | undefined;
            "v-slot:append"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "density" | "detached" | "duration" | "floating" | "fullscreen" | "hideFullscreen" | "hidePlay" | "hideVolume" | "pills" | "playing" | "progress" | "splitTime" | "variant">>;
    } : Omit<{
        type: PropType<Partial<{
            density: import("../../composables/density.js").Density;
            playing: boolean;
            hidePlay: boolean;
            hideVolume: boolean;
            hideFullscreen: boolean;
            fullscreen: boolean;
            floating: boolean;
            splitTime: boolean;
            pills: boolean;
            detached: boolean;
            progress: number;
            duration: number;
            variant: "default" | "hidden" | "mini" | "tube";
        }> & Omit<{
            theme?: string | undefined;
            $children?: {
                default?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
            density: import("../../composables/density.js").Density;
            elevation?: string | number | undefined;
            color?: string | undefined;
            backgroundColor?: string | undefined;
            trackColor?: string | undefined;
            playing: boolean;
            hidePlay: boolean;
            hideVolume: boolean;
            hideFullscreen: boolean;
            fullscreen: boolean;
            floating: boolean;
            splitTime: boolean;
            pills: boolean;
            detached: boolean;
            progress: number;
            duration: number;
            volume?: string | number | undefined;
            variant: "default" | "hidden" | "mini" | "tube";
            volumeProps?: Pick<Partial<{
                style: import("vue").StyleValue;
                inline: boolean;
                direction: "horizontal" | "vertical";
                modelValue: number;
            }> & Omit<{
                class?: any;
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                $children?: {
                    default?: (() => import("vue").VNodeChild) | undefined;
                } | {
                    $stable?: boolean | undefined;
                } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                "v-slots"?: {
                    default?: false | (() => import("vue").VNodeChild) | undefined;
                } | undefined;
                inline: boolean;
                label?: string | undefined;
                direction: "horizontal" | "vertical";
                modelValue: number;
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
                    } | (TransitionProps & {
                        component?: Component | undefined;
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
                    } | (TransitionProps & {
                        component?: Component | undefined;
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
                "onUpdate:modelValue"?: ((val: number) => any) | undefined;
                "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "direction" | "inline" | "modelValue" | "style">, "direction" | "inline" | "menuProps" | "sliderProps"> | undefined;
            "onClick:fullscreen"?: (() => any) | undefined;
            onSkip?: ((val: number) => any) | undefined;
            "onUpdate:playing"?: ((val: boolean) => any) | undefined;
            "onUpdate:progress"?: ((val: number) => any) | undefined;
            "onUpdate:volume"?: ((val: number) => any) | undefined;
            "v-slot:append"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "density" | "detached" | "duration" | "floating" | "fullscreen" | "hideFullscreen" | "hidePlay" | "hideVolume" | "pills" | "playing" | "progress" | "splitTime" | "variant">>;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["controlsProps"] ? Partial<{
            density: import("../../composables/density.js").Density;
            playing: boolean;
            hidePlay: boolean;
            hideVolume: boolean;
            hideFullscreen: boolean;
            fullscreen: boolean;
            floating: boolean;
            splitTime: boolean;
            pills: boolean;
            detached: boolean;
            progress: number;
            duration: number;
            variant: "default" | "hidden" | "mini" | "tube";
        }> & Omit<{
            theme?: string | undefined;
            $children?: {
                default?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
            density: import("../../composables/density.js").Density;
            elevation?: string | number | undefined;
            color?: string | undefined;
            backgroundColor?: string | undefined;
            trackColor?: string | undefined;
            playing: boolean;
            hidePlay: boolean;
            hideVolume: boolean;
            hideFullscreen: boolean;
            fullscreen: boolean;
            floating: boolean;
            splitTime: boolean;
            pills: boolean;
            detached: boolean;
            progress: number;
            duration: number;
            volume?: string | number | undefined;
            variant: "default" | "hidden" | "mini" | "tube";
            volumeProps?: Pick<Partial<{
                style: import("vue").StyleValue;
                inline: boolean;
                direction: "horizontal" | "vertical";
                modelValue: number;
            }> & Omit<{
                class?: any;
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                $children?: {
                    default?: (() => import("vue").VNodeChild) | undefined;
                } | {
                    $stable?: boolean | undefined;
                } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                "v-slots"?: {
                    default?: false | (() => import("vue").VNodeChild) | undefined;
                } | undefined;
                inline: boolean;
                label?: string | undefined;
                direction: "horizontal" | "vertical";
                modelValue: number;
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
                    } | (TransitionProps & {
                        component?: Component | undefined;
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
                    } | (TransitionProps & {
                        component?: Component | undefined;
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
                "onUpdate:modelValue"?: ((val: number) => any) | undefined;
                "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "direction" | "inline" | "modelValue" | "style">, "direction" | "inline" | "menuProps" | "sliderProps"> | undefined;
            "onClick:fullscreen"?: (() => any) | undefined;
            onSkip?: ((val: number) => any) | undefined;
            "onUpdate:playing"?: ((val: boolean) => any) | undefined;
            "onUpdate:progress"?: ((val: number) => any) | undefined;
            "onUpdate:volume"?: ((val: number) => any) | undefined;
            "v-slot:append"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "density" | "detached" | "duration" | "floating" | "fullscreen" | "hideFullscreen" | "hidePlay" | "hideVolume" | "pills" | "playing" | "progress" | "splitTime" | "variant"> : Defaults["controlsProps"] | (Partial<{
            density: import("../../composables/density.js").Density;
            playing: boolean;
            hidePlay: boolean;
            hideVolume: boolean;
            hideFullscreen: boolean;
            fullscreen: boolean;
            floating: boolean;
            splitTime: boolean;
            pills: boolean;
            detached: boolean;
            progress: number;
            duration: number;
            variant: "default" | "hidden" | "mini" | "tube";
        }> & Omit<{
            theme?: string | undefined;
            $children?: {
                default?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
            density: import("../../composables/density.js").Density;
            elevation?: string | number | undefined;
            color?: string | undefined;
            backgroundColor?: string | undefined;
            trackColor?: string | undefined;
            playing: boolean;
            hidePlay: boolean;
            hideVolume: boolean;
            hideFullscreen: boolean;
            fullscreen: boolean;
            floating: boolean;
            splitTime: boolean;
            pills: boolean;
            detached: boolean;
            progress: number;
            duration: number;
            volume?: string | number | undefined;
            variant: "default" | "hidden" | "mini" | "tube";
            volumeProps?: Pick<Partial<{
                style: import("vue").StyleValue;
                inline: boolean;
                direction: "horizontal" | "vertical";
                modelValue: number;
            }> & Omit<{
                class?: any;
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                $children?: {
                    default?: (() => import("vue").VNodeChild) | undefined;
                } | {
                    $stable?: boolean | undefined;
                } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                "v-slots"?: {
                    default?: false | (() => import("vue").VNodeChild) | undefined;
                } | undefined;
                inline: boolean;
                label?: string | undefined;
                direction: "horizontal" | "vertical";
                modelValue: number;
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
                    } | (TransitionProps & {
                        component?: Component | undefined;
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
                    } | (TransitionProps & {
                        component?: Component | undefined;
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
                "onUpdate:modelValue"?: ((val: number) => any) | undefined;
                "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "direction" | "inline" | "modelValue" | "style">, "direction" | "inline" | "menuProps" | "sliderProps"> | undefined;
            "onClick:fullscreen"?: (() => any) | undefined;
            onSkip?: ((val: number) => any) | undefined;
            "onUpdate:playing"?: ((val: boolean) => any) | undefined;
            "onUpdate:progress"?: ((val: number) => any) | undefined;
            "onUpdate:volume"?: ((val: number) => any) | undefined;
            "v-slot:append"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "density" | "detached" | "duration" | "floating" | "fullscreen" | "hideFullscreen" | "hidePlay" | "hideVolume" | "pills" | "playing" | "progress" | "splitTime" | "variant">)>;
        default: unknown extends Defaults["controlsProps"] ? Partial<{
            density: import("../../composables/density.js").Density;
            playing: boolean;
            hidePlay: boolean;
            hideVolume: boolean;
            hideFullscreen: boolean;
            fullscreen: boolean;
            floating: boolean;
            splitTime: boolean;
            pills: boolean;
            detached: boolean;
            progress: number;
            duration: number;
            variant: "default" | "hidden" | "mini" | "tube";
        }> & Omit<{
            theme?: string | undefined;
            $children?: {
                default?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
            density: import("../../composables/density.js").Density;
            elevation?: string | number | undefined;
            color?: string | undefined;
            backgroundColor?: string | undefined;
            trackColor?: string | undefined;
            playing: boolean;
            hidePlay: boolean;
            hideVolume: boolean;
            hideFullscreen: boolean;
            fullscreen: boolean;
            floating: boolean;
            splitTime: boolean;
            pills: boolean;
            detached: boolean;
            progress: number;
            duration: number;
            volume?: string | number | undefined;
            variant: "default" | "hidden" | "mini" | "tube";
            volumeProps?: Pick<Partial<{
                style: import("vue").StyleValue;
                inline: boolean;
                direction: "horizontal" | "vertical";
                modelValue: number;
            }> & Omit<{
                class?: any;
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                $children?: {
                    default?: (() => import("vue").VNodeChild) | undefined;
                } | {
                    $stable?: boolean | undefined;
                } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                "v-slots"?: {
                    default?: false | (() => import("vue").VNodeChild) | undefined;
                } | undefined;
                inline: boolean;
                label?: string | undefined;
                direction: "horizontal" | "vertical";
                modelValue: number;
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
                    } | (TransitionProps & {
                        component?: Component | undefined;
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
                    } | (TransitionProps & {
                        component?: Component | undefined;
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
                "onUpdate:modelValue"?: ((val: number) => any) | undefined;
                "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "direction" | "inline" | "modelValue" | "style">, "direction" | "inline" | "menuProps" | "sliderProps"> | undefined;
            "onClick:fullscreen"?: (() => any) | undefined;
            onSkip?: ((val: number) => any) | undefined;
            "onUpdate:playing"?: ((val: boolean) => any) | undefined;
            "onUpdate:progress"?: ((val: number) => any) | undefined;
            "onUpdate:volume"?: ((val: number) => any) | undefined;
            "v-slot:append"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "density" | "detached" | "duration" | "floating" | "fullscreen" | "hideFullscreen" | "hidePlay" | "hideVolume" | "pills" | "playing" | "progress" | "splitTime" | "variant"> : Defaults["controlsProps"] | NonNullable<Partial<{
            density: import("../../composables/density.js").Density;
            playing: boolean;
            hidePlay: boolean;
            hideVolume: boolean;
            hideFullscreen: boolean;
            fullscreen: boolean;
            floating: boolean;
            splitTime: boolean;
            pills: boolean;
            detached: boolean;
            progress: number;
            duration: number;
            variant: "default" | "hidden" | "mini" | "tube";
        }> & Omit<{
            theme?: string | undefined;
            $children?: {
                default?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
            density: import("../../composables/density.js").Density;
            elevation?: string | number | undefined;
            color?: string | undefined;
            backgroundColor?: string | undefined;
            trackColor?: string | undefined;
            playing: boolean;
            hidePlay: boolean;
            hideVolume: boolean;
            hideFullscreen: boolean;
            fullscreen: boolean;
            floating: boolean;
            splitTime: boolean;
            pills: boolean;
            detached: boolean;
            progress: number;
            duration: number;
            volume?: string | number | undefined;
            variant: "default" | "hidden" | "mini" | "tube";
            volumeProps?: Pick<Partial<{
                style: import("vue").StyleValue;
                inline: boolean;
                direction: "horizontal" | "vertical";
                modelValue: number;
            }> & Omit<{
                class?: any;
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                $children?: {
                    default?: (() => import("vue").VNodeChild) | undefined;
                } | {
                    $stable?: boolean | undefined;
                } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                "v-slots"?: {
                    default?: false | (() => import("vue").VNodeChild) | undefined;
                } | undefined;
                inline: boolean;
                label?: string | undefined;
                direction: "horizontal" | "vertical";
                modelValue: number;
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
                    } | (TransitionProps & {
                        component?: Component | undefined;
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
                    } | (TransitionProps & {
                        component?: Component | undefined;
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
                "onUpdate:modelValue"?: ((val: number) => any) | undefined;
                "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "direction" | "inline" | "modelValue" | "style">, "direction" | "inline" | "menuProps" | "sliderProps"> | undefined;
            "onClick:fullscreen"?: (() => any) | undefined;
            onSkip?: ((val: number) => any) | undefined;
            "onUpdate:playing"?: ((val: boolean) => any) | undefined;
            "onUpdate:progress"?: ((val: number) => any) | undefined;
            "onUpdate:volume"?: ((val: number) => any) | undefined;
            "v-slot:append"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "density" | "detached" | "duration" | "floating" | "fullscreen" | "hideFullscreen" | "hidePlay" | "hideVolume" | "pills" | "playing" | "progress" | "splitTime" | "variant">>;
    };
    rounded: unknown extends Defaults["rounded"] ? PropType<string | number | boolean | (string | number | boolean)[]> : {
        type: PropType<unknown extends Defaults["rounded"] ? string | number | boolean | (string | number | boolean)[] : string | number | boolean | (string | number | boolean)[] | Defaults["rounded"]>;
        default: unknown extends Defaults["rounded"] ? string | number | boolean | (string | number | boolean)[] : Defaults["rounded"] | NonNullable<string | number | boolean | (string | number | boolean)[]>;
    };
};
export declare const VVideo: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        density: import("../../composables/density.js").Density;
        playing: boolean;
        hidePlay: boolean;
        hideVolume: boolean;
        hideFullscreen: boolean;
        floating: boolean;
        splitTime: boolean;
        pills: boolean;
        detached: boolean;
        progress: number;
        duration: number;
        autoplay: boolean;
        muted: boolean;
        eager: boolean;
        hideOverlay: boolean;
        noFullscreen: boolean;
        variant: "background" | "player";
        controlsVariant: "default" | "hidden" | "mini" | "tube";
    } & {
        theme?: string | undefined;
        class?: any;
        elevation?: string | number | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        backgroundColor?: string | undefined;
        trackColor?: string | undefined;
        volume?: string | number | undefined;
        volumeProps?: Pick<Partial<{
            style: import("vue").StyleValue;
            inline: boolean;
            direction: "horizontal" | "vertical";
            modelValue: number;
        }> & Omit<{
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            $children?: {
                default?: (() => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
            inline: boolean;
            label?: string | undefined;
            direction: "horizontal" | "vertical";
            modelValue: number;
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
                } | (TransitionProps & {
                    component?: Component | undefined;
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
                } | (TransitionProps & {
                    component?: Component | undefined;
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
            "onUpdate:modelValue"?: ((val: number) => any) | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "direction" | "inline" | "modelValue" | "style">, "direction" | "inline" | "menuProps" | "sliderProps"> | undefined;
        aspectRatio?: string | number | undefined;
        src?: string | undefined;
        type?: string | undefined;
        image?: string | undefined;
        startAt?: string | number | undefined;
        controlsTransition?: string | boolean | (TransitionProps & {
            component?: any;
        }) | null | undefined;
        controlsProps?: (Partial<{
            density: import("../../composables/density.js").Density;
            playing: boolean;
            hidePlay: boolean;
            hideVolume: boolean;
            hideFullscreen: boolean;
            fullscreen: boolean;
            floating: boolean;
            splitTime: boolean;
            pills: boolean;
            detached: boolean;
            progress: number;
            duration: number;
            variant: "default" | "hidden" | "mini" | "tube";
        }> & Omit<{
            theme?: string | undefined;
            $children?: {
                default?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
            density: import("../../composables/density.js").Density;
            elevation?: string | number | undefined;
            color?: string | undefined;
            backgroundColor?: string | undefined;
            trackColor?: string | undefined;
            playing: boolean;
            hidePlay: boolean;
            hideVolume: boolean;
            hideFullscreen: boolean;
            fullscreen: boolean;
            floating: boolean;
            splitTime: boolean;
            pills: boolean;
            detached: boolean;
            progress: number;
            duration: number;
            volume?: string | number | undefined;
            variant: "default" | "hidden" | "mini" | "tube";
            volumeProps?: Pick<Partial<{
                style: import("vue").StyleValue;
                inline: boolean;
                direction: "horizontal" | "vertical";
                modelValue: number;
            }> & Omit<{
                class?: any;
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                $children?: {
                    default?: (() => import("vue").VNodeChild) | undefined;
                } | {
                    $stable?: boolean | undefined;
                } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                "v-slots"?: {
                    default?: false | (() => import("vue").VNodeChild) | undefined;
                } | undefined;
                inline: boolean;
                label?: string | undefined;
                direction: "horizontal" | "vertical";
                modelValue: number;
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
                    } | (TransitionProps & {
                        component?: Component | undefined;
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
                    } | (TransitionProps & {
                        component?: Component | undefined;
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
                "onUpdate:modelValue"?: ((val: number) => any) | undefined;
                "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "direction" | "inline" | "modelValue" | "style">, "direction" | "inline" | "menuProps" | "sliderProps"> | undefined;
            "onClick:fullscreen"?: (() => any) | undefined;
            onSkip?: ((val: number) => any) | undefined;
            "onUpdate:playing"?: ((val: boolean) => any) | undefined;
            "onUpdate:progress"?: ((val: number) => any) | undefined;
            "onUpdate:volume"?: ((val: number) => any) | undefined;
            "v-slot:append"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "density" | "detached" | "duration" | "floating" | "fullscreen" | "hideFullscreen" | "hidePlay" | "hideVolume" | "pills" | "playing" | "progress" | "splitTime" | "variant">) | undefined;
        rounded?: string | number | boolean | (string | number | boolean)[] | undefined;
    } & {
        $children?: {
            header?: (() => import("vue").VNodeChild) | undefined;
            controls?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            prepend?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            loader?: ((arg: LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            sources?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | {} | import("vue").VNodeChild;
        "v-slots"?: {
            header?: false | (() => import("vue").VNodeChild) | undefined;
            controls?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            prepend?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            loader?: false | ((arg: LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            sources?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:controls"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:header"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:sources"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        onLoaded?: ((element: HTMLVideoElement) => any) | undefined;
        "onUpdate:playing"?: ((val: boolean) => any) | undefined;
        "onUpdate:progress"?: ((val: number) => any) | undefined;
        "onUpdate:volume"?: ((val: number) => any) | undefined;
    }, {
        _allExposed: {
            toggleMuted: () => void;
        } | {
            skipTo: (v: number) => void;
            toggleFullscreen: () => Promise<void>;
        };
        _: import("vue").ComponentInternalInstance;
        toggleMuted: () => void;
        video: import("vue").Ref<HTMLVideoElement | undefined, HTMLVideoElement | undefined>;
        skipTo: (v: number) => void;
        toggleFullscreen: () => Promise<void>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        loaded: (element: HTMLVideoElement) => true;
        "update:playing": (val: boolean) => true;
        "update:progress": (val: number) => true;
        "update:volume": (val: number) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        density: import("../../composables/density.js").Density;
        playing: boolean;
        hidePlay: boolean;
        hideVolume: boolean;
        hideFullscreen: boolean;
        floating: boolean;
        splitTime: boolean;
        pills: boolean;
        detached: boolean;
        progress: number;
        duration: number;
        autoplay: boolean;
        muted: boolean;
        eager: boolean;
        hideOverlay: boolean;
        noFullscreen: boolean;
        variant: "background" | "player";
        controlsVariant: "default" | "hidden" | "mini" | "tube";
    }, true, {}, import("vue").SlotsType<Partial<{
        header: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        controls: (arg: VVideoControlsActionsSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        prepend: (arg: VVideoControlsActionsSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        append: (arg: VVideoControlsActionsSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        loader: (arg: LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        sources: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        density: import("../../composables/density.js").Density;
        playing: boolean;
        hidePlay: boolean;
        hideVolume: boolean;
        hideFullscreen: boolean;
        floating: boolean;
        splitTime: boolean;
        pills: boolean;
        detached: boolean;
        progress: number;
        duration: number;
        autoplay: boolean;
        muted: boolean;
        eager: boolean;
        hideOverlay: boolean;
        noFullscreen: boolean;
        variant: "background" | "player";
        controlsVariant: "default" | "hidden" | "mini" | "tube";
    } & {
        theme?: string | undefined;
        class?: any;
        elevation?: string | number | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        backgroundColor?: string | undefined;
        trackColor?: string | undefined;
        volume?: string | number | undefined;
        volumeProps?: Pick<Partial<{
            style: import("vue").StyleValue;
            inline: boolean;
            direction: "horizontal" | "vertical";
            modelValue: number;
        }> & Omit<{
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            $children?: {
                default?: (() => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
            inline: boolean;
            label?: string | undefined;
            direction: "horizontal" | "vertical";
            modelValue: number;
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
                } | (TransitionProps & {
                    component?: Component | undefined;
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
                } | (TransitionProps & {
                    component?: Component | undefined;
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
            "onUpdate:modelValue"?: ((val: number) => any) | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "direction" | "inline" | "modelValue" | "style">, "direction" | "inline" | "menuProps" | "sliderProps"> | undefined;
        aspectRatio?: string | number | undefined;
        src?: string | undefined;
        type?: string | undefined;
        image?: string | undefined;
        startAt?: string | number | undefined;
        controlsTransition?: string | boolean | (TransitionProps & {
            component?: any;
        }) | null | undefined;
        controlsProps?: (Partial<{
            density: import("../../composables/density.js").Density;
            playing: boolean;
            hidePlay: boolean;
            hideVolume: boolean;
            hideFullscreen: boolean;
            fullscreen: boolean;
            floating: boolean;
            splitTime: boolean;
            pills: boolean;
            detached: boolean;
            progress: number;
            duration: number;
            variant: "default" | "hidden" | "mini" | "tube";
        }> & Omit<{
            theme?: string | undefined;
            $children?: {
                default?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
            density: import("../../composables/density.js").Density;
            elevation?: string | number | undefined;
            color?: string | undefined;
            backgroundColor?: string | undefined;
            trackColor?: string | undefined;
            playing: boolean;
            hidePlay: boolean;
            hideVolume: boolean;
            hideFullscreen: boolean;
            fullscreen: boolean;
            floating: boolean;
            splitTime: boolean;
            pills: boolean;
            detached: boolean;
            progress: number;
            duration: number;
            volume?: string | number | undefined;
            variant: "default" | "hidden" | "mini" | "tube";
            volumeProps?: Pick<Partial<{
                style: import("vue").StyleValue;
                inline: boolean;
                direction: "horizontal" | "vertical";
                modelValue: number;
            }> & Omit<{
                class?: any;
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                $children?: {
                    default?: (() => import("vue").VNodeChild) | undefined;
                } | {
                    $stable?: boolean | undefined;
                } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                "v-slots"?: {
                    default?: false | (() => import("vue").VNodeChild) | undefined;
                } | undefined;
                inline: boolean;
                label?: string | undefined;
                direction: "horizontal" | "vertical";
                modelValue: number;
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
                    } | (TransitionProps & {
                        component?: Component | undefined;
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
                    } | (TransitionProps & {
                        component?: Component | undefined;
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
                "onUpdate:modelValue"?: ((val: number) => any) | undefined;
                "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "direction" | "inline" | "modelValue" | "style">, "direction" | "inline" | "menuProps" | "sliderProps"> | undefined;
            "onClick:fullscreen"?: (() => any) | undefined;
            onSkip?: ((val: number) => any) | undefined;
            "onUpdate:playing"?: ((val: boolean) => any) | undefined;
            "onUpdate:progress"?: ((val: number) => any) | undefined;
            "onUpdate:volume"?: ((val: number) => any) | undefined;
            "v-slot:append"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "density" | "detached" | "duration" | "floating" | "fullscreen" | "hideFullscreen" | "hidePlay" | "hideVolume" | "pills" | "playing" | "progress" | "splitTime" | "variant">) | undefined;
        rounded?: string | number | boolean | (string | number | boolean)[] | undefined;
    } & {
        $children?: {
            header?: (() => import("vue").VNodeChild) | undefined;
            controls?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            prepend?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            loader?: ((arg: LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            sources?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | {} | import("vue").VNodeChild;
        "v-slots"?: {
            header?: false | (() => import("vue").VNodeChild) | undefined;
            controls?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            prepend?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            loader?: false | ((arg: LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            sources?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:controls"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:header"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:sources"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        onLoaded?: ((element: HTMLVideoElement) => any) | undefined;
        "onUpdate:playing"?: ((val: boolean) => any) | undefined;
        "onUpdate:progress"?: ((val: number) => any) | undefined;
        "onUpdate:volume"?: ((val: number) => any) | undefined;
    }, {
        _allExposed: {
            toggleMuted: () => void;
        } | {
            skipTo: (v: number) => void;
            toggleFullscreen: () => Promise<void>;
        };
        _: import("vue").ComponentInternalInstance;
        toggleMuted: () => void;
        video: import("vue").Ref<HTMLVideoElement | undefined, HTMLVideoElement | undefined>;
        skipTo: (v: number) => void;
        toggleFullscreen: () => Promise<void>;
    }, {}, {}, {}, {
        style: import("vue").StyleValue;
        density: import("../../composables/density.js").Density;
        playing: boolean;
        hidePlay: boolean;
        hideVolume: boolean;
        hideFullscreen: boolean;
        floating: boolean;
        splitTime: boolean;
        pills: boolean;
        detached: boolean;
        progress: number;
        duration: number;
        autoplay: boolean;
        muted: boolean;
        eager: boolean;
        hideOverlay: boolean;
        noFullscreen: boolean;
        variant: "background" | "player";
        controlsVariant: "default" | "hidden" | "mini" | "tube";
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    density: import("../../composables/density.js").Density;
    playing: boolean;
    hidePlay: boolean;
    hideVolume: boolean;
    hideFullscreen: boolean;
    floating: boolean;
    splitTime: boolean;
    pills: boolean;
    detached: boolean;
    progress: number;
    duration: number;
    autoplay: boolean;
    muted: boolean;
    eager: boolean;
    hideOverlay: boolean;
    noFullscreen: boolean;
    variant: "background" | "player";
    controlsVariant: "default" | "hidden" | "mini" | "tube";
} & {
    theme?: string | undefined;
    class?: any;
    elevation?: string | number | undefined;
    height?: string | number | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    width?: string | number | undefined;
    color?: string | undefined;
    backgroundColor?: string | undefined;
    trackColor?: string | undefined;
    volume?: string | number | undefined;
    volumeProps?: Pick<Partial<{
        style: import("vue").StyleValue;
        inline: boolean;
        direction: "horizontal" | "vertical";
        modelValue: number;
    }> & Omit<{
        class?: any;
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
        inline: boolean;
        label?: string | undefined;
        direction: "horizontal" | "vertical";
        modelValue: number;
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
            } | (TransitionProps & {
                component?: Component | undefined;
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
            } | (TransitionProps & {
                component?: Component | undefined;
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
        "onUpdate:modelValue"?: ((val: number) => any) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "direction" | "inline" | "modelValue" | "style">, "direction" | "inline" | "menuProps" | "sliderProps"> | undefined;
    aspectRatio?: string | number | undefined;
    src?: string | undefined;
    type?: string | undefined;
    image?: string | undefined;
    startAt?: string | number | undefined;
    controlsTransition?: string | boolean | (TransitionProps & {
        component?: any;
    }) | null | undefined;
    controlsProps?: (Partial<{
        density: import("../../composables/density.js").Density;
        playing: boolean;
        hidePlay: boolean;
        hideVolume: boolean;
        hideFullscreen: boolean;
        fullscreen: boolean;
        floating: boolean;
        splitTime: boolean;
        pills: boolean;
        detached: boolean;
        progress: number;
        duration: number;
        variant: "default" | "hidden" | "mini" | "tube";
    }> & Omit<{
        theme?: string | undefined;
        $children?: {
            default?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            prepend?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            prepend?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
        density: import("../../composables/density.js").Density;
        elevation?: string | number | undefined;
        color?: string | undefined;
        backgroundColor?: string | undefined;
        trackColor?: string | undefined;
        playing: boolean;
        hidePlay: boolean;
        hideVolume: boolean;
        hideFullscreen: boolean;
        fullscreen: boolean;
        floating: boolean;
        splitTime: boolean;
        pills: boolean;
        detached: boolean;
        progress: number;
        duration: number;
        volume?: string | number | undefined;
        variant: "default" | "hidden" | "mini" | "tube";
        volumeProps?: Pick<Partial<{
            style: import("vue").StyleValue;
            inline: boolean;
            direction: "horizontal" | "vertical";
            modelValue: number;
        }> & Omit<{
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            $children?: {
                default?: (() => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
            inline: boolean;
            label?: string | undefined;
            direction: "horizontal" | "vertical";
            modelValue: number;
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
                } | (TransitionProps & {
                    component?: Component | undefined;
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
                } | (TransitionProps & {
                    component?: Component | undefined;
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
            "onUpdate:modelValue"?: ((val: number) => any) | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "direction" | "inline" | "modelValue" | "style">, "direction" | "inline" | "menuProps" | "sliderProps"> | undefined;
        "onClick:fullscreen"?: (() => any) | undefined;
        onSkip?: ((val: number) => any) | undefined;
        "onUpdate:playing"?: ((val: boolean) => any) | undefined;
        "onUpdate:progress"?: ((val: number) => any) | undefined;
        "onUpdate:volume"?: ((val: number) => any) | undefined;
        "v-slot:append"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "density" | "detached" | "duration" | "floating" | "fullscreen" | "hideFullscreen" | "hidePlay" | "hideVolume" | "pills" | "playing" | "progress" | "splitTime" | "variant">) | undefined;
    rounded?: string | number | boolean | (string | number | boolean)[] | undefined;
} & {
    $children?: {
        header?: (() => import("vue").VNodeChild) | undefined;
        controls?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        prepend?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        append?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        loader?: ((arg: LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        sources?: (() => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | {} | import("vue").VNodeChild;
    "v-slots"?: {
        header?: false | (() => import("vue").VNodeChild) | undefined;
        controls?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        prepend?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        append?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        loader?: false | ((arg: LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        sources?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:append"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:controls"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:header"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:loader"?: false | ((arg: LoaderSlotProps) => import("vue").VNodeChild) | undefined;
    "v-slot:prepend"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:sources"?: false | (() => import("vue").VNodeChild) | undefined;
} & {
    onLoaded?: ((element: HTMLVideoElement) => any) | undefined;
    "onUpdate:playing"?: ((val: boolean) => any) | undefined;
    "onUpdate:progress"?: ((val: number) => any) | undefined;
    "onUpdate:volume"?: ((val: number) => any) | undefined;
}, {
    _allExposed: {
        toggleMuted: () => void;
    } | {
        skipTo: (v: number) => void;
        toggleFullscreen: () => Promise<void>;
    };
    _: import("vue").ComponentInternalInstance;
    toggleMuted: () => void;
    video: import("vue").Ref<HTMLVideoElement | undefined, HTMLVideoElement | undefined>;
    skipTo: (v: number) => void;
    toggleFullscreen: () => Promise<void>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    loaded: (element: HTMLVideoElement) => true;
    "update:playing": (val: boolean) => true;
    "update:progress": (val: number) => true;
    "update:volume": (val: number) => true;
}, string, {
    style: import("vue").StyleValue;
    density: import("../../composables/density.js").Density;
    playing: boolean;
    hidePlay: boolean;
    hideVolume: boolean;
    hideFullscreen: boolean;
    floating: boolean;
    splitTime: boolean;
    pills: boolean;
    detached: boolean;
    progress: number;
    duration: number;
    autoplay: boolean;
    muted: boolean;
    eager: boolean;
    hideOverlay: boolean;
    noFullscreen: boolean;
    variant: "background" | "player";
    controlsVariant: "default" | "hidden" | "mini" | "tube";
}, {}, string, import("vue").SlotsType<Partial<{
    header: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    controls: (arg: VVideoControlsActionsSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    prepend: (arg: VVideoControlsActionsSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    append: (arg: VVideoControlsActionsSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    loader: (arg: LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    sources: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    elevation: {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    };
    height: (NumberConstructor | StringConstructor)[];
    maxHeight: (NumberConstructor | StringConstructor)[];
    maxWidth: (NumberConstructor | StringConstructor)[];
    minHeight: (NumberConstructor | StringConstructor)[];
    minWidth: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    color: StringConstructor;
    backgroundColor: StringConstructor;
    trackColor: StringConstructor;
    playing: BooleanConstructor;
    hidePlay: BooleanConstructor;
    hideVolume: BooleanConstructor;
    hideFullscreen: BooleanConstructor;
    floating: BooleanConstructor;
    splitTime: BooleanConstructor;
    pills: BooleanConstructor;
    detached: BooleanConstructor;
    progress: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    volume: (NumberConstructor | StringConstructor)[];
    volumeProps: PropType<Pick<Partial<{
        style: import("vue").StyleValue;
        inline: boolean;
        direction: "horizontal" | "vertical";
        modelValue: number;
    }> & Omit<{
        class?: any;
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
        inline: boolean;
        label?: string | undefined;
        direction: "horizontal" | "vertical";
        modelValue: number;
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
            } | (TransitionProps & {
                component?: Component | undefined;
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
            } | (TransitionProps & {
                component?: Component | undefined;
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
        "onUpdate:modelValue"?: ((val: number) => any) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "direction" | "inline" | "modelValue" | "style">, "direction" | "inline" | "menuProps" | "sliderProps">>;
    aspectRatio: (NumberConstructor | StringConstructor)[];
    autoplay: BooleanConstructor;
    muted: BooleanConstructor;
    eager: BooleanConstructor;
    src: StringConstructor;
    type: StringConstructor;
    image: StringConstructor;
    hideOverlay: BooleanConstructor;
    noFullscreen: BooleanConstructor;
    startAt: (NumberConstructor | StringConstructor)[];
    variant: {
        type: PropType<"background" | "player">;
        default: string;
        validator: (v: any) => boolean;
    };
    controlsTransition: {
        type: PropType<string | boolean | (TransitionProps & {
            component?: any;
        }) | null>;
        component: Component;
    };
    controlsVariant: {
        type: PropType<"default" | "hidden" | "mini" | "tube">;
        default: string;
    };
    controlsProps: {
        type: PropType<Partial<{
            density: import("../../composables/density.js").Density;
            playing: boolean;
            hidePlay: boolean;
            hideVolume: boolean;
            hideFullscreen: boolean;
            fullscreen: boolean;
            floating: boolean;
            splitTime: boolean;
            pills: boolean;
            detached: boolean;
            progress: number;
            duration: number;
            variant: "default" | "hidden" | "mini" | "tube";
        }> & Omit<{
            theme?: string | undefined;
            $children?: {
                default?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
            density: import("../../composables/density.js").Density;
            elevation?: string | number | undefined;
            color?: string | undefined;
            backgroundColor?: string | undefined;
            trackColor?: string | undefined;
            playing: boolean;
            hidePlay: boolean;
            hideVolume: boolean;
            hideFullscreen: boolean;
            fullscreen: boolean;
            floating: boolean;
            splitTime: boolean;
            pills: boolean;
            detached: boolean;
            progress: number;
            duration: number;
            volume?: string | number | undefined;
            variant: "default" | "hidden" | "mini" | "tube";
            volumeProps?: Pick<Partial<{
                style: import("vue").StyleValue;
                inline: boolean;
                direction: "horizontal" | "vertical";
                modelValue: number;
            }> & Omit<{
                class?: any;
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                $children?: {
                    default?: (() => import("vue").VNodeChild) | undefined;
                } | {
                    $stable?: boolean | undefined;
                } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                "v-slots"?: {
                    default?: false | (() => import("vue").VNodeChild) | undefined;
                } | undefined;
                inline: boolean;
                label?: string | undefined;
                direction: "horizontal" | "vertical";
                modelValue: number;
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
                    } | (TransitionProps & {
                        component?: Component | undefined;
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
                    } | (TransitionProps & {
                        component?: Component | undefined;
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
                "onUpdate:modelValue"?: ((val: number) => any) | undefined;
                "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "direction" | "inline" | "modelValue" | "style">, "direction" | "inline" | "menuProps" | "sliderProps"> | undefined;
            "onClick:fullscreen"?: (() => any) | undefined;
            onSkip?: ((val: number) => any) | undefined;
            "onUpdate:playing"?: ((val: boolean) => any) | undefined;
            "onUpdate:progress"?: ((val: number) => any) | undefined;
            "onUpdate:volume"?: ((val: number) => any) | undefined;
            "v-slot:append"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "density" | "detached" | "duration" | "floating" | "fullscreen" | "hideFullscreen" | "hidePlay" | "hideVolume" | "pills" | "playing" | "progress" | "splitTime" | "variant">>;
    };
    rounded: PropType<string | number | boolean | (string | number | boolean)[]>;
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    elevation: {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    };
    height: (NumberConstructor | StringConstructor)[];
    maxHeight: (NumberConstructor | StringConstructor)[];
    maxWidth: (NumberConstructor | StringConstructor)[];
    minHeight: (NumberConstructor | StringConstructor)[];
    minWidth: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    color: StringConstructor;
    backgroundColor: StringConstructor;
    trackColor: StringConstructor;
    playing: BooleanConstructor;
    hidePlay: BooleanConstructor;
    hideVolume: BooleanConstructor;
    hideFullscreen: BooleanConstructor;
    floating: BooleanConstructor;
    splitTime: BooleanConstructor;
    pills: BooleanConstructor;
    detached: BooleanConstructor;
    progress: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    volume: (NumberConstructor | StringConstructor)[];
    volumeProps: PropType<Pick<Partial<{
        style: import("vue").StyleValue;
        inline: boolean;
        direction: "horizontal" | "vertical";
        modelValue: number;
    }> & Omit<{
        class?: any;
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
        inline: boolean;
        label?: string | undefined;
        direction: "horizontal" | "vertical";
        modelValue: number;
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
            } | (TransitionProps & {
                component?: Component | undefined;
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
            } | (TransitionProps & {
                component?: Component | undefined;
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
        "onUpdate:modelValue"?: ((val: number) => any) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "direction" | "inline" | "modelValue" | "style">, "direction" | "inline" | "menuProps" | "sliderProps">>;
    aspectRatio: (NumberConstructor | StringConstructor)[];
    autoplay: BooleanConstructor;
    muted: BooleanConstructor;
    eager: BooleanConstructor;
    src: StringConstructor;
    type: StringConstructor;
    image: StringConstructor;
    hideOverlay: BooleanConstructor;
    noFullscreen: BooleanConstructor;
    startAt: (NumberConstructor | StringConstructor)[];
    variant: {
        type: PropType<"background" | "player">;
        default: string;
        validator: (v: any) => boolean;
    };
    controlsTransition: {
        type: PropType<string | boolean | (TransitionProps & {
            component?: any;
        }) | null>;
        component: Component;
    };
    controlsVariant: {
        type: PropType<"default" | "hidden" | "mini" | "tube">;
        default: string;
    };
    controlsProps: {
        type: PropType<Partial<{
            density: import("../../composables/density.js").Density;
            playing: boolean;
            hidePlay: boolean;
            hideVolume: boolean;
            hideFullscreen: boolean;
            fullscreen: boolean;
            floating: boolean;
            splitTime: boolean;
            pills: boolean;
            detached: boolean;
            progress: number;
            duration: number;
            variant: "default" | "hidden" | "mini" | "tube";
        }> & Omit<{
            theme?: string | undefined;
            $children?: {
                default?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
            density: import("../../composables/density.js").Density;
            elevation?: string | number | undefined;
            color?: string | undefined;
            backgroundColor?: string | undefined;
            trackColor?: string | undefined;
            playing: boolean;
            hidePlay: boolean;
            hideVolume: boolean;
            hideFullscreen: boolean;
            fullscreen: boolean;
            floating: boolean;
            splitTime: boolean;
            pills: boolean;
            detached: boolean;
            progress: number;
            duration: number;
            volume?: string | number | undefined;
            variant: "default" | "hidden" | "mini" | "tube";
            volumeProps?: Pick<Partial<{
                style: import("vue").StyleValue;
                inline: boolean;
                direction: "horizontal" | "vertical";
                modelValue: number;
            }> & Omit<{
                class?: any;
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                $children?: {
                    default?: (() => import("vue").VNodeChild) | undefined;
                } | {
                    $stable?: boolean | undefined;
                } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                "v-slots"?: {
                    default?: false | (() => import("vue").VNodeChild) | undefined;
                } | undefined;
                inline: boolean;
                label?: string | undefined;
                direction: "horizontal" | "vertical";
                modelValue: number;
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
                    } | (TransitionProps & {
                        component?: Component | undefined;
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
                    } | (TransitionProps & {
                        component?: Component | undefined;
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
                "onUpdate:modelValue"?: ((val: number) => any) | undefined;
                "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "direction" | "inline" | "modelValue" | "style">, "direction" | "inline" | "menuProps" | "sliderProps"> | undefined;
            "onClick:fullscreen"?: (() => any) | undefined;
            onSkip?: ((val: number) => any) | undefined;
            "onUpdate:playing"?: ((val: boolean) => any) | undefined;
            "onUpdate:progress"?: ((val: number) => any) | undefined;
            "onUpdate:volume"?: ((val: number) => any) | undefined;
            "v-slot:append"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "density" | "detached" | "duration" | "floating" | "fullscreen" | "hideFullscreen" | "hidePlay" | "hideVolume" | "pills" | "playing" | "progress" | "splitTime" | "variant">>;
    };
    rounded: PropType<string | number | boolean | (string | number | boolean)[]>;
}>>;
export type VVideo = InstanceType<typeof VVideo>;
