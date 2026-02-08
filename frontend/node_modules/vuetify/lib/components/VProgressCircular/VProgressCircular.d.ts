// Styles

// Types
import type { PropType } from 'vue';
export declare const makeVProgressCircularProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
    tag?: unknown;
    size?: unknown;
    bgColor?: unknown;
    color?: unknown;
    indeterminate?: unknown;
    modelValue?: unknown;
    rotate?: unknown;
    width?: unknown;
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
    tag: unknown extends Defaults["tag"] ? Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    } : Omit<Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : string | Defaults["tag"] | import("../../util/index.js").JSXComponent>;
        default: unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : Defaults["tag"] | NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    size: unknown extends Defaults["size"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["size"] ? string | number : string | number | Defaults["size"]>;
        default: unknown extends Defaults["size"] ? string | number : Defaults["size"] | NonNullable<string | number>;
    };
    bgColor: unknown extends Defaults["bgColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"]>;
        default: unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    indeterminate: unknown extends Defaults["indeterminate"] ? PropType<"disable-shrink" | boolean> : {
        type: PropType<unknown extends Defaults["indeterminate"] ? "disable-shrink" | boolean : "disable-shrink" | boolean | Defaults["indeterminate"]>;
        default: unknown extends Defaults["indeterminate"] ? "disable-shrink" | boolean : Defaults["indeterminate"] | NonNullable<"disable-shrink" | boolean>;
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["modelValue"] ? string | number : string | number | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? string | number : Defaults["modelValue"] | NonNullable<string | number>;
    };
    rotate: unknown extends Defaults["rotate"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["rotate"] ? string | number : string | number | Defaults["rotate"]>;
        default: unknown extends Defaults["rotate"] ? string | number : Defaults["rotate"] | NonNullable<string | number>;
    };
    width: unknown extends Defaults["width"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : Defaults["width"] | NonNullable<string | number>;
    };
};
export declare const VProgressCircular: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        tag: string | import("../../util/index.js").JSXComponent;
        size: string | number;
        modelValue: string | number;
        rotate: string | number;
        width: string | number;
    } & {
        theme?: string | undefined;
        class?: any;
        bgColor?: string | undefined;
        color?: string | undefined;
        indeterminate?: "disable-shrink" | boolean | undefined;
    } & {
        $children?: {
            default?: ((arg: {
                value: number;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            value: number;
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: {
                value: number;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            value: number;
        }) => import("vue").VNodeChild) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        size: string | number;
        modelValue: string | number;
        rotate: string | number;
        width: string | number;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: {
            value: number;
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
        size: string | number;
        modelValue: string | number;
        rotate: string | number;
        width: string | number;
    } & {
        theme?: string | undefined;
        class?: any;
        bgColor?: string | undefined;
        color?: string | undefined;
        indeterminate?: "disable-shrink" | boolean | undefined;
    } & {
        $children?: {
            default?: ((arg: {
                value: number;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            value: number;
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: {
                value: number;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            value: number;
        }) => import("vue").VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        size: string | number;
        modelValue: string | number;
        rotate: string | number;
        width: string | number;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    tag: string | import("../../util/index.js").JSXComponent;
    size: string | number;
    modelValue: string | number;
    rotate: string | number;
    width: string | number;
} & {
    theme?: string | undefined;
    class?: any;
    bgColor?: string | undefined;
    color?: string | undefined;
    indeterminate?: "disable-shrink" | boolean | undefined;
} & {
    $children?: {
        default?: ((arg: {
            value: number;
        }) => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | ((arg: {
        value: number;
    }) => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        default?: false | ((arg: {
            value: number;
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: {
        value: number;
    }) => import("vue").VNodeChild) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    style: import("vue").StyleValue;
    tag: string | import("../../util/index.js").JSXComponent;
    size: string | number;
    modelValue: string | number;
    rotate: string | number;
    width: string | number;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: {
        value: number;
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
    tag: Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    size: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    bgColor: StringConstructor;
    color: StringConstructor;
    indeterminate: PropType<"disable-shrink" | boolean>;
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    rotate: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    width: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    tag: Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    size: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    bgColor: StringConstructor;
    color: StringConstructor;
    indeterminate: PropType<"disable-shrink" | boolean>;
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    rotate: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    width: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}>>;
export type VProgressCircular = InstanceType<typeof VProgressCircular>;
