import { IconValue } from '../../composables/icons.js';
export type VListGroupSlots = {
    default: never;
    activator: {
        isOpen: boolean;
        props: Record<string, unknown>;
    };
};
export declare const makeVListGroupProps: <Defaults extends {
    class?: unknown;
    style?: unknown;
    tag?: unknown;
    activeColor?: unknown;
    baseColor?: unknown;
    color?: unknown;
    collapseIcon?: unknown;
    disabled?: unknown;
    expandIcon?: unknown;
    rawId?: unknown;
    prependIcon?: unknown;
    appendIcon?: unknown;
    fluid?: unknown;
    subgroup?: unknown;
    title?: unknown;
    value?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
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
    tag: unknown extends Defaults["tag"] ? {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : string | Defaults["tag"] | import("../../util/index.js").JSXComponent>;
        default: unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : Defaults["tag"] | NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    activeColor: unknown extends Defaults["activeColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["activeColor"] ? string : string | Defaults["activeColor"]>;
        default: unknown extends Defaults["activeColor"] ? string : string | Defaults["activeColor"];
    };
    baseColor: unknown extends Defaults["baseColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"]>;
        default: unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    collapseIcon: unknown extends Defaults["collapseIcon"] ? {
        type: import("vue").PropType<IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["collapseIcon"] ? IconValue : Defaults["collapseIcon"] | IconValue>;
        default: unknown extends Defaults["collapseIcon"] ? IconValue : Defaults["collapseIcon"] | NonNullable<IconValue>;
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    expandIcon: unknown extends Defaults["expandIcon"] ? {
        type: import("vue").PropType<IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["expandIcon"] ? IconValue : Defaults["expandIcon"] | IconValue>;
        default: unknown extends Defaults["expandIcon"] ? IconValue : Defaults["expandIcon"] | NonNullable<IconValue>;
    };
    rawId: unknown extends Defaults["rawId"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["rawId"] ? string | number : string | number | Defaults["rawId"]>;
        default: unknown extends Defaults["rawId"] ? string | number : Defaults["rawId"] | NonNullable<string | number>;
    };
    prependIcon: unknown extends Defaults["prependIcon"] ? import("vue").PropType<IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["prependIcon"] ? IconValue : Defaults["prependIcon"] | IconValue>;
        default: unknown extends Defaults["prependIcon"] ? IconValue : Defaults["prependIcon"] | NonNullable<IconValue>;
    };
    appendIcon: unknown extends Defaults["appendIcon"] ? import("vue").PropType<IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["appendIcon"] ? IconValue : Defaults["appendIcon"] | IconValue>;
        default: unknown extends Defaults["appendIcon"] ? IconValue : Defaults["appendIcon"] | NonNullable<IconValue>;
    };
    fluid: unknown extends Defaults["fluid"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["fluid"] ? boolean : boolean | Defaults["fluid"]>;
        default: unknown extends Defaults["fluid"] ? boolean : boolean | Defaults["fluid"];
    };
    subgroup: unknown extends Defaults["subgroup"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["subgroup"] ? boolean : boolean | Defaults["subgroup"]>;
        default: unknown extends Defaults["subgroup"] ? boolean : boolean | Defaults["subgroup"];
    };
    title: unknown extends Defaults["title"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["title"] ? string : string | Defaults["title"]>;
        default: unknown extends Defaults["title"] ? string : string | Defaults["title"];
    };
    value: unknown extends Defaults["value"] ? null : {
        type: import("vue").PropType<unknown extends Defaults["value"] ? any : any>;
        default: unknown extends Defaults["value"] ? any : any;
    };
};
export declare const VListGroup: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        tag: string | import("../../util/index.js").JSXComponent;
        collapseIcon: IconValue;
        disabled: boolean;
        expandIcon: IconValue;
        fluid: boolean;
        subgroup: boolean;
    } & {
        class?: any;
        activeColor?: string | undefined;
        baseColor?: string | undefined;
        color?: string | undefined;
        rawId?: string | number | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        title?: string | undefined;
        value?: any;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
            activator?: ((arg: {
                isOpen: boolean;
                props: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            activator?: false | ((arg: {
                isOpen: boolean;
                props: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:activator"?: false | ((arg: {
            isOpen: boolean;
            props: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    }, {
        isOpen: import("vue").ComputedRef<boolean>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        collapseIcon: IconValue;
        disabled: boolean;
        expandIcon: IconValue;
        fluid: boolean;
        subgroup: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        activator: (arg: {
            isOpen: boolean;
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
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        tag: string | import("../../util/index.js").JSXComponent;
        collapseIcon: IconValue;
        disabled: boolean;
        expandIcon: IconValue;
        fluid: boolean;
        subgroup: boolean;
    } & {
        class?: any;
        activeColor?: string | undefined;
        baseColor?: string | undefined;
        color?: string | undefined;
        rawId?: string | number | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        title?: string | undefined;
        value?: any;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
            activator?: ((arg: {
                isOpen: boolean;
                props: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            activator?: false | ((arg: {
                isOpen: boolean;
                props: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:activator"?: false | ((arg: {
            isOpen: boolean;
            props: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    }, {
        isOpen: import("vue").ComputedRef<boolean>;
    }, {}, {}, {}, {
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        collapseIcon: IconValue;
        disabled: boolean;
        expandIcon: IconValue;
        fluid: boolean;
        subgroup: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    tag: string | import("../../util/index.js").JSXComponent;
    collapseIcon: IconValue;
    disabled: boolean;
    expandIcon: IconValue;
    fluid: boolean;
    subgroup: boolean;
} & {
    class?: any;
    activeColor?: string | undefined;
    baseColor?: string | undefined;
    color?: string | undefined;
    rawId?: string | number | undefined;
    prependIcon?: IconValue | undefined;
    appendIcon?: IconValue | undefined;
    title?: string | undefined;
    value?: any;
} & {
    $children?: {
        default?: (() => import("vue").VNodeChild) | undefined;
        activator?: ((arg: {
            isOpen: boolean;
            props: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
        activator?: false | ((arg: {
            isOpen: boolean;
            props: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:activator"?: false | ((arg: {
        isOpen: boolean;
        props: Record<string, unknown>;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
}, {
    isOpen: import("vue").ComputedRef<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    style: import("vue").StyleValue;
    tag: string | import("../../util/index.js").JSXComponent;
    collapseIcon: IconValue;
    disabled: boolean;
    expandIcon: IconValue;
    fluid: boolean;
    subgroup: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    activator: (arg: {
        isOpen: boolean;
        props: Record<string, unknown>;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    activeColor: StringConstructor;
    baseColor: StringConstructor;
    color: StringConstructor;
    collapseIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    disabled: BooleanConstructor;
    expandIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    rawId: (NumberConstructor | StringConstructor)[];
    prependIcon: import("vue").PropType<IconValue>;
    appendIcon: import("vue").PropType<IconValue>;
    fluid: BooleanConstructor;
    subgroup: BooleanConstructor;
    title: StringConstructor;
    value: null;
}, import("vue").ExtractPropTypes<{
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    activeColor: StringConstructor;
    baseColor: StringConstructor;
    color: StringConstructor;
    collapseIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    disabled: BooleanConstructor;
    expandIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    rawId: (NumberConstructor | StringConstructor)[];
    prependIcon: import("vue").PropType<IconValue>;
    appendIcon: import("vue").PropType<IconValue>;
    fluid: BooleanConstructor;
    subgroup: BooleanConstructor;
    title: StringConstructor;
    value: null;
}>>;
export type VListGroup = InstanceType<typeof VListGroup>;
