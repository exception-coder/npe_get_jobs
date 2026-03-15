// Styles

// Types
import type { Prop, PropType } from 'vue';
export declare const makeVColProps: <Defaults extends {
    class?: unknown;
    style?: unknown;
    tag?: unknown;
    cols?: unknown;
    offset?: unknown;
    order?: unknown;
    alignSelf?: unknown;
    lg?: unknown;
    md?: unknown;
    offsetLg?: unknown;
    offsetMd?: unknown;
    offsetSm?: unknown;
    offsetXl?: unknown;
    offsetXxl?: unknown;
    orderLg?: unknown;
    orderMd?: unknown;
    orderSm?: unknown;
    orderXl?: unknown;
    orderXxl?: unknown;
    sm?: unknown;
    xl?: unknown;
    xxl?: unknown;
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
    tag: unknown extends Defaults["tag"] ? {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    } : Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : string | Defaults["tag"] | import("../../util/index.js").JSXComponent>;
        default: unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : Defaults["tag"] | NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    cols: unknown extends Defaults["cols"] ? {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: boolean;
    } : Omit<{
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["cols"] ? string | number | boolean : string | number | boolean | Defaults["cols"]>;
        default: unknown extends Defaults["cols"] ? string | number | boolean : Defaults["cols"] | NonNullable<string | number | boolean>;
    };
    offset: unknown extends Defaults["offset"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["offset"] ? string | number : string | number | Defaults["offset"]>;
        default: unknown extends Defaults["offset"] ? string | number : Defaults["offset"] | NonNullable<string | number>;
    };
    order: unknown extends Defaults["order"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["order"] ? string | number : string | number | Defaults["order"]>;
        default: unknown extends Defaults["order"] ? string | number : Defaults["order"] | NonNullable<string | number>;
    };
    alignSelf: unknown extends Defaults["alignSelf"] ? {
        type: PropType<"auto" | "baseline" | "center" | "end" | "start" | "stretch">;
        default: null;
        validator: (str: any) => boolean;
    } : Omit<{
        type: PropType<"auto" | "baseline" | "center" | "end" | "start" | "stretch">;
        default: null;
        validator: (str: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["alignSelf"] ? "auto" | "baseline" | "center" | "end" | "start" | "stretch" : "auto" | "baseline" | "center" | "end" | "start" | "stretch" | Defaults["alignSelf"]>;
        default: unknown extends Defaults["alignSelf"] ? "auto" | "baseline" | "center" | "end" | "start" | "stretch" : Defaults["alignSelf"] | NonNullable<"auto" | "baseline" | "center" | "end" | "start" | "stretch">;
    };
    lg: unknown extends Defaults["lg"] ? Prop<string | number | boolean, false> : {
        type: PropType<unknown extends Defaults["lg"] ? string | number | boolean : string | number | boolean | Defaults["lg"]>;
        default: unknown extends Defaults["lg"] ? string | number | boolean : Defaults["lg"] | NonNullable<string | number | boolean>;
    };
    md: unknown extends Defaults["md"] ? Prop<string | number | boolean, false> : {
        type: PropType<unknown extends Defaults["md"] ? string | number | boolean : string | number | boolean | Defaults["md"]>;
        default: unknown extends Defaults["md"] ? string | number | boolean : Defaults["md"] | NonNullable<string | number | boolean>;
    };
    offsetLg: unknown extends Defaults["offsetLg"] ? Prop<string | number, null> : {
        type: PropType<unknown extends Defaults["offsetLg"] ? string | number : string | number | Defaults["offsetLg"]>;
        default: unknown extends Defaults["offsetLg"] ? string | number : Defaults["offsetLg"] | NonNullable<string | number>;
    };
    offsetMd: unknown extends Defaults["offsetMd"] ? Prop<string | number, null> : {
        type: PropType<unknown extends Defaults["offsetMd"] ? string | number : string | number | Defaults["offsetMd"]>;
        default: unknown extends Defaults["offsetMd"] ? string | number : Defaults["offsetMd"] | NonNullable<string | number>;
    };
    offsetSm: unknown extends Defaults["offsetSm"] ? Prop<string | number, null> : {
        type: PropType<unknown extends Defaults["offsetSm"] ? string | number : string | number | Defaults["offsetSm"]>;
        default: unknown extends Defaults["offsetSm"] ? string | number : Defaults["offsetSm"] | NonNullable<string | number>;
    };
    offsetXl: unknown extends Defaults["offsetXl"] ? Prop<string | number, null> : {
        type: PropType<unknown extends Defaults["offsetXl"] ? string | number : string | number | Defaults["offsetXl"]>;
        default: unknown extends Defaults["offsetXl"] ? string | number : Defaults["offsetXl"] | NonNullable<string | number>;
    };
    offsetXxl: unknown extends Defaults["offsetXxl"] ? Prop<string | number, null> : {
        type: PropType<unknown extends Defaults["offsetXxl"] ? string | number : string | number | Defaults["offsetXxl"]>;
        default: unknown extends Defaults["offsetXxl"] ? string | number : Defaults["offsetXxl"] | NonNullable<string | number>;
    };
    orderLg: unknown extends Defaults["orderLg"] ? Prop<string | number, null> : {
        type: PropType<unknown extends Defaults["orderLg"] ? string | number : string | number | Defaults["orderLg"]>;
        default: unknown extends Defaults["orderLg"] ? string | number : Defaults["orderLg"] | NonNullable<string | number>;
    };
    orderMd: unknown extends Defaults["orderMd"] ? Prop<string | number, null> : {
        type: PropType<unknown extends Defaults["orderMd"] ? string | number : string | number | Defaults["orderMd"]>;
        default: unknown extends Defaults["orderMd"] ? string | number : Defaults["orderMd"] | NonNullable<string | number>;
    };
    orderSm: unknown extends Defaults["orderSm"] ? Prop<string | number, null> : {
        type: PropType<unknown extends Defaults["orderSm"] ? string | number : string | number | Defaults["orderSm"]>;
        default: unknown extends Defaults["orderSm"] ? string | number : Defaults["orderSm"] | NonNullable<string | number>;
    };
    orderXl: unknown extends Defaults["orderXl"] ? Prop<string | number, null> : {
        type: PropType<unknown extends Defaults["orderXl"] ? string | number : string | number | Defaults["orderXl"]>;
        default: unknown extends Defaults["orderXl"] ? string | number : Defaults["orderXl"] | NonNullable<string | number>;
    };
    orderXxl: unknown extends Defaults["orderXxl"] ? Prop<string | number, null> : {
        type: PropType<unknown extends Defaults["orderXxl"] ? string | number : string | number | Defaults["orderXxl"]>;
        default: unknown extends Defaults["orderXxl"] ? string | number : Defaults["orderXxl"] | NonNullable<string | number>;
    };
    sm: unknown extends Defaults["sm"] ? Prop<string | number | boolean, false> : {
        type: PropType<unknown extends Defaults["sm"] ? string | number | boolean : string | number | boolean | Defaults["sm"]>;
        default: unknown extends Defaults["sm"] ? string | number | boolean : Defaults["sm"] | NonNullable<string | number | boolean>;
    };
    xl: unknown extends Defaults["xl"] ? Prop<string | number | boolean, false> : {
        type: PropType<unknown extends Defaults["xl"] ? string | number | boolean : string | number | boolean | Defaults["xl"]>;
        default: unknown extends Defaults["xl"] ? string | number | boolean : Defaults["xl"] | NonNullable<string | number | boolean>;
    };
    xxl: unknown extends Defaults["xxl"] ? Prop<string | number | boolean, false> : {
        type: PropType<unknown extends Defaults["xxl"] ? string | number | boolean : string | number | boolean | Defaults["xxl"]>;
        default: unknown extends Defaults["xxl"] ? string | number | boolean : Defaults["xxl"] | NonNullable<string | number | boolean>;
    };
};
export declare const VCol: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        tag: string | import("../../util/index.js").JSXComponent;
        cols: string | number | boolean;
        offset: string | number;
        order: string | number;
        alignSelf: "auto" | "baseline" | "center" | "end" | "start" | "stretch";
    } & {
        class?: any;
        lg?: string | number | boolean | undefined;
        md?: string | number | boolean | undefined;
        offsetLg?: string | number | undefined;
        offsetMd?: string | number | undefined;
        offsetSm?: string | number | undefined;
        offsetXl?: string | number | undefined;
        offsetXxl?: string | number | undefined;
        orderLg?: string | number | undefined;
        orderMd?: string | number | undefined;
        orderSm?: string | number | undefined;
        orderXl?: string | number | undefined;
        orderXxl?: string | number | undefined;
        sm?: string | number | boolean | undefined;
        xl?: string | number | boolean | undefined;
        xxl?: string | number | boolean | undefined;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        cols: string | number | boolean;
        offset: string | number;
        order: string | number;
        alignSelf: "auto" | "baseline" | "center" | "end" | "start" | "stretch";
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
        tag: string | import("../../util/index.js").JSXComponent;
        cols: string | number | boolean;
        offset: string | number;
        order: string | number;
        alignSelf: "auto" | "baseline" | "center" | "end" | "start" | "stretch";
    } & {
        class?: any;
        lg?: string | number | boolean | undefined;
        md?: string | number | boolean | undefined;
        offsetLg?: string | number | undefined;
        offsetMd?: string | number | undefined;
        offsetSm?: string | number | undefined;
        offsetXl?: string | number | undefined;
        offsetXxl?: string | number | undefined;
        orderLg?: string | number | undefined;
        orderMd?: string | number | undefined;
        orderSm?: string | number | undefined;
        orderXl?: string | number | undefined;
        orderXxl?: string | number | undefined;
        sm?: string | number | boolean | undefined;
        xl?: string | number | boolean | undefined;
        xxl?: string | number | boolean | undefined;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, {}, {}, {}, {
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        cols: string | number | boolean;
        offset: string | number;
        order: string | number;
        alignSelf: "auto" | "baseline" | "center" | "end" | "start" | "stretch";
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    tag: string | import("../../util/index.js").JSXComponent;
    cols: string | number | boolean;
    offset: string | number;
    order: string | number;
    alignSelf: "auto" | "baseline" | "center" | "end" | "start" | "stretch";
} & {
    class?: any;
    lg?: string | number | boolean | undefined;
    md?: string | number | boolean | undefined;
    offsetLg?: string | number | undefined;
    offsetMd?: string | number | undefined;
    offsetSm?: string | number | undefined;
    offsetXl?: string | number | undefined;
    offsetXxl?: string | number | undefined;
    orderLg?: string | number | undefined;
    orderMd?: string | number | undefined;
    orderSm?: string | number | undefined;
    orderXl?: string | number | undefined;
    orderXxl?: string | number | undefined;
    sm?: string | number | boolean | undefined;
    xl?: string | number | boolean | undefined;
    xxl?: string | number | boolean | undefined;
} & {
    $children?: {
        default?: (() => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    style: import("vue").StyleValue;
    tag: string | import("../../util/index.js").JSXComponent;
    cols: string | number | boolean;
    offset: string | number;
    order: string | number;
    alignSelf: "auto" | "baseline" | "center" | "end" | "start" | "stretch";
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
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    cols: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: boolean;
    };
    offset: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    order: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    alignSelf: {
        type: PropType<"auto" | "baseline" | "center" | "end" | "start" | "stretch">;
        default: null;
        validator: (str: any) => boolean;
    };
    lg: Prop<string | number | boolean, false>;
    md: Prop<string | number | boolean, false>;
    offsetLg: Prop<string | number, null>;
    offsetMd: Prop<string | number, null>;
    offsetSm: Prop<string | number, null>;
    offsetXl: Prop<string | number, null>;
    offsetXxl: Prop<string | number, null>;
    orderLg: Prop<string | number, null>;
    orderMd: Prop<string | number, null>;
    orderSm: Prop<string | number, null>;
    orderXl: Prop<string | number, null>;
    orderXxl: Prop<string | number, null>;
    sm: Prop<string | number | boolean, false>;
    xl: Prop<string | number | boolean, false>;
    xxl: Prop<string | number | boolean, false>;
}, import("vue").ExtractPropTypes<{
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    cols: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: boolean;
    };
    offset: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    order: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    alignSelf: {
        type: PropType<"auto" | "baseline" | "center" | "end" | "start" | "stretch">;
        default: null;
        validator: (str: any) => boolean;
    };
    lg: Prop<string | number | boolean, false>;
    md: Prop<string | number | boolean, false>;
    offsetLg: Prop<string | number, null>;
    offsetMd: Prop<string | number, null>;
    offsetSm: Prop<string | number, null>;
    offsetXl: Prop<string | number, null>;
    offsetXxl: Prop<string | number, null>;
    orderLg: Prop<string | number, null>;
    orderMd: Prop<string | number, null>;
    orderSm: Prop<string | number, null>;
    orderXl: Prop<string | number, null>;
    orderXxl: Prop<string | number, null>;
    sm: Prop<string | number | boolean, false>;
    xl: Prop<string | number | boolean, false>;
    xxl: Prop<string | number | boolean, false>;
}>>;
export type VCol = InstanceType<typeof VCol>;
