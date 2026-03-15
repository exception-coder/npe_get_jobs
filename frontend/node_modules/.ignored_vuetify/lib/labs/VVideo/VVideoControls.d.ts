// Types
import type { PropType, Ref } from 'vue';
export type VVideoControlsActionsSlot = {
    play: () => void;
    pause: () => void;
    skipTo: (v: number) => void;
    volume: Ref<number>;
    playing: boolean;
    progress: number;
    toggleMuted: () => void;
    fullscreen: boolean;
    toggleFullscreen: () => void;
    labels: Record<string, string>;
};
export type VVideoControlsSlots = {
    default: VVideoControlsActionsSlot;
    prepend: VVideoControlsActionsSlot;
    append: VVideoControlsActionsSlot;
};
declare const allowedVariants: readonly ["hidden", "default", "tube", "mini"];
export type VVideoControlsVariant = typeof allowedVariants[number];
export declare const makeVVideoControlsProps: <Defaults extends {
    theme?: unknown;
    density?: unknown;
    elevation?: unknown;
    color?: unknown;
    backgroundColor?: unknown;
    trackColor?: unknown;
    playing?: unknown;
    hidePlay?: unknown;
    hideVolume?: unknown;
    hideFullscreen?: unknown;
    fullscreen?: unknown;
    floating?: unknown;
    splitTime?: unknown;
    pills?: unknown;
    detached?: unknown;
    progress?: unknown;
    duration?: unknown;
    volume?: unknown;
    variant?: unknown;
    volumeProps?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
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
    fullscreen: unknown extends Defaults["fullscreen"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["fullscreen"] ? boolean : boolean | Defaults["fullscreen"]>;
        default: unknown extends Defaults["fullscreen"] ? boolean : boolean | Defaults["fullscreen"];
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
    variant: unknown extends Defaults["variant"] ? {
        type: PropType<"default" | "hidden" | "mini" | "tube">;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<"default" | "hidden" | "mini" | "tube">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["variant"] ? "default" | "hidden" | "mini" | "tube" : "default" | "hidden" | "mini" | "tube" | Defaults["variant"]>;
        default: unknown extends Defaults["variant"] ? "default" | "hidden" | "mini" | "tube" : Defaults["variant"] | NonNullable<"default" | "hidden" | "mini" | "tube">;
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
                isActive: Ref<boolean, boolean>;
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
                    isActive: Ref<boolean, boolean>;
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
                    isActive: Ref<boolean, boolean>;
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
                    isActive: Ref<boolean, boolean>;
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
                    isActive: Ref<boolean, boolean>;
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
};
export declare const VVideoControls: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
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
    } & {
        theme?: string | undefined;
        elevation?: string | number | undefined;
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
                    isActive: Ref<boolean, boolean>;
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
    } & {
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
    } & {
        "v-slot:append"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
    } & {
        "onClick:fullscreen"?: (() => any) | undefined;
        onSkip?: ((val: number) => any) | undefined;
        "onUpdate:playing"?: ((val: boolean) => any) | undefined;
        "onUpdate:progress"?: ((val: number) => any) | undefined;
        "onUpdate:volume"?: ((val: number) => any) | undefined;
    }, {
        toggleMuted: () => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:playing": (val: boolean) => true;
        "update:progress": (val: number) => true;
        "update:volume": (val: number) => true;
        skip: (val: number) => true;
        "click:fullscreen": () => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
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
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: VVideoControlsActionsSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        prepend: (arg: VVideoControlsActionsSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        append: (arg: VVideoControlsActionsSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
    } & {
        theme?: string | undefined;
        elevation?: string | number | undefined;
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
                    isActive: Ref<boolean, boolean>;
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
    } & {
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
    } & {
        "v-slot:append"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
    } & {
        "onClick:fullscreen"?: (() => any) | undefined;
        onSkip?: ((val: number) => any) | undefined;
        "onUpdate:playing"?: ((val: boolean) => any) | undefined;
        "onUpdate:progress"?: ((val: number) => any) | undefined;
        "onUpdate:volume"?: ((val: number) => any) | undefined;
    }, {
        toggleMuted: () => void;
    }, {}, {}, {}, {
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
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
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
} & {
    theme?: string | undefined;
    elevation?: string | number | undefined;
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
                isActive: Ref<boolean, boolean>;
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
} & {
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
} & {
    "v-slot:append"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:prepend"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
} & {
    "onClick:fullscreen"?: (() => any) | undefined;
    onSkip?: ((val: number) => any) | undefined;
    "onUpdate:playing"?: ((val: boolean) => any) | undefined;
    "onUpdate:progress"?: ((val: number) => any) | undefined;
    "onUpdate:volume"?: ((val: number) => any) | undefined;
}, {
    toggleMuted: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:playing": (val: boolean) => true;
    "update:progress": (val: number) => true;
    "update:volume": (val: number) => true;
    skip: (val: number) => true;
    "click:fullscreen": () => true;
}, string, {
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
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: VVideoControlsActionsSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    prepend: (arg: VVideoControlsActionsSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    append: (arg: VVideoControlsActionsSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    elevation: {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    };
    color: StringConstructor;
    backgroundColor: StringConstructor;
    trackColor: StringConstructor;
    playing: BooleanConstructor;
    hidePlay: BooleanConstructor;
    hideVolume: BooleanConstructor;
    hideFullscreen: BooleanConstructor;
    fullscreen: BooleanConstructor;
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
    variant: {
        type: PropType<"default" | "hidden" | "mini" | "tube">;
        default: string;
        validator: (v: any) => boolean;
    };
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
                isActive: Ref<boolean, boolean>;
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
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    elevation: {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    };
    color: StringConstructor;
    backgroundColor: StringConstructor;
    trackColor: StringConstructor;
    playing: BooleanConstructor;
    hidePlay: BooleanConstructor;
    hideVolume: BooleanConstructor;
    hideFullscreen: BooleanConstructor;
    fullscreen: BooleanConstructor;
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
    variant: {
        type: PropType<"default" | "hidden" | "mini" | "tube">;
        default: string;
        validator: (v: any) => boolean;
    };
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
                isActive: Ref<boolean, boolean>;
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
}>>;
export type VVideoControls = InstanceType<typeof VVideoControls>;

