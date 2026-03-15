export declare const makeVHoverProps: <Defaults extends {
    closeDelay?: unknown;
    openDelay?: unknown;
    disabled?: unknown;
    modelValue?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    closeDelay: unknown extends Defaults["closeDelay"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["closeDelay"] ? string | number : string | number | Defaults["closeDelay"]>;
        default: unknown extends Defaults["closeDelay"] ? string | number : Defaults["closeDelay"] | NonNullable<string | number>;
    };
    openDelay: unknown extends Defaults["openDelay"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["openDelay"] ? string | number : string | number | Defaults["openDelay"]>;
        default: unknown extends Defaults["openDelay"] ? string | number : Defaults["openDelay"] | NonNullable<string | number>;
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: BooleanConstructor;
        default: null;
    } : Omit<{
        type: BooleanConstructor;
        default: null;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["modelValue"] ? boolean : boolean | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? boolean : boolean | Defaults["modelValue"];
    };
};
export declare const VHover: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        disabled: boolean;
        modelValue: boolean;
    } & {
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
    } & {
        $children?: {
            default?: ((arg: {
                isHovering: boolean | null;
                props: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            isHovering: boolean | null;
            props: Record<string, unknown>;
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: {
                isHovering: boolean | null;
                props: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            isHovering: boolean | null;
            props: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[] | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (value: boolean) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        disabled: boolean;
        modelValue: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: {
            isHovering: boolean | null;
            props: Record<string, unknown>;
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
        disabled: boolean;
        modelValue: boolean;
    } & {
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
    } & {
        $children?: {
            default?: ((arg: {
                isHovering: boolean | null;
                props: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            isHovering: boolean | null;
            props: Record<string, unknown>;
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: {
                isHovering: boolean | null;
                props: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            isHovering: boolean | null;
            props: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[] | undefined, {}, {}, {}, {
        disabled: boolean;
        modelValue: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    disabled: boolean;
    modelValue: boolean;
} & {
    closeDelay?: string | number | undefined;
    openDelay?: string | number | undefined;
} & {
    $children?: {
        default?: ((arg: {
            isHovering: boolean | null;
            props: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | ((arg: {
        isHovering: boolean | null;
        props: Record<string, unknown>;
    }) => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        default?: false | ((arg: {
            isHovering: boolean | null;
            props: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: {
        isHovering: boolean | null;
        props: Record<string, unknown>;
    }) => import("vue").VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[] | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => true;
}, string, {
    disabled: boolean;
    modelValue: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: {
        isHovering: boolean | null;
        props: Record<string, unknown>;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    closeDelay: (NumberConstructor | StringConstructor)[];
    openDelay: (NumberConstructor | StringConstructor)[];
    disabled: BooleanConstructor;
    modelValue: {
        type: BooleanConstructor;
        default: null;
    };
}, import("vue").ExtractPropTypes<{
    closeDelay: (NumberConstructor | StringConstructor)[];
    openDelay: (NumberConstructor | StringConstructor)[];
    disabled: BooleanConstructor;
    modelValue: {
        type: BooleanConstructor;
        default: null;
    };
}>>;
export type VHover = InstanceType<typeof VHover>;
