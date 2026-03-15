export declare const VSlideGroupItem: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        disabled: boolean;
    } & {
        value?: any;
        selectedClass?: string | undefined;
    } & {
        $children?: {
            default?: ((arg: {
                isSelected: boolean;
                select: (value: boolean) => void;
                toggle: () => void;
                selectedClass: false | (string | undefined)[];
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            isSelected: boolean;
            select: (value: boolean) => void;
            toggle: () => void;
            selectedClass: false | (string | undefined)[];
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: {
                isSelected: boolean;
                select: (value: boolean) => void;
                toggle: () => void;
                selectedClass: false | (string | undefined)[];
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            isSelected: boolean;
            select: (value: boolean) => void;
            toggle: () => void;
            selectedClass: false | (string | undefined)[];
        }) => import("vue").VNodeChild) | undefined;
    } & {
        "onGroup:selected"?: ((val: {
            value: boolean;
        }) => any) | undefined;
    }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[] | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "group:selected": (val: {
            value: boolean;
        }) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        disabled: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: {
            isSelected: boolean;
            select: (value: boolean) => void;
            toggle: () => void;
            selectedClass: false | (string | undefined)[];
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
    } & {
        value?: any;
        selectedClass?: string | undefined;
    } & {
        $children?: {
            default?: ((arg: {
                isSelected: boolean;
                select: (value: boolean) => void;
                toggle: () => void;
                selectedClass: false | (string | undefined)[];
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            isSelected: boolean;
            select: (value: boolean) => void;
            toggle: () => void;
            selectedClass: false | (string | undefined)[];
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: {
                isSelected: boolean;
                select: (value: boolean) => void;
                toggle: () => void;
                selectedClass: false | (string | undefined)[];
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            isSelected: boolean;
            select: (value: boolean) => void;
            toggle: () => void;
            selectedClass: false | (string | undefined)[];
        }) => import("vue").VNodeChild) | undefined;
    } & {
        "onGroup:selected"?: ((val: {
            value: boolean;
        }) => any) | undefined;
    }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[] | undefined, {}, {}, {}, {
        disabled: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    disabled: boolean;
} & {
    value?: any;
    selectedClass?: string | undefined;
} & {
    $children?: {
        default?: ((arg: {
            isSelected: boolean;
            select: (value: boolean) => void;
            toggle: () => void;
            selectedClass: false | (string | undefined)[];
        }) => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | ((arg: {
        isSelected: boolean;
        select: (value: boolean) => void;
        toggle: () => void;
        selectedClass: false | (string | undefined)[];
    }) => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        default?: false | ((arg: {
            isSelected: boolean;
            select: (value: boolean) => void;
            toggle: () => void;
            selectedClass: false | (string | undefined)[];
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: {
        isSelected: boolean;
        select: (value: boolean) => void;
        toggle: () => void;
        selectedClass: false | (string | undefined)[];
    }) => import("vue").VNodeChild) | undefined;
} & {
    "onGroup:selected"?: ((val: {
        value: boolean;
    }) => any) | undefined;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[] | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "group:selected": (val: {
        value: boolean;
    }) => true;
}, string, {
    disabled: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: {
        isSelected: boolean;
        select: (value: boolean) => void;
        toggle: () => void;
        selectedClass: false | (string | undefined)[];
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
}, import("vue").ExtractPropTypes<{
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
}>>;
export type VSlideGroupItem = InstanceType<typeof VSlideGroupItem>;
