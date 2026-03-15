// Styles

// Types
import type { Prop, PropType } from 'vue';
export declare const makeVRowProps: <Defaults extends {
    class?: unknown;
    style?: unknown;
    tag?: unknown;
    dense?: unknown;
    noGutters?: unknown;
    align?: unknown;
    justify?: unknown;
    alignContent?: unknown;
    alignContentLg?: unknown;
    alignContentMd?: unknown;
    alignContentSm?: unknown;
    alignContentXl?: unknown;
    alignContentXxl?: unknown;
    alignLg?: unknown;
    alignMd?: unknown;
    alignSm?: unknown;
    alignXl?: unknown;
    alignXxl?: unknown;
    justifyLg?: unknown;
    justifyMd?: unknown;
    justifySm?: unknown;
    justifyXl?: unknown;
    justifyXxl?: unknown;
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
    dense: unknown extends Defaults["dense"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["dense"] ? boolean : boolean | Defaults["dense"]>;
        default: unknown extends Defaults["dense"] ? boolean : boolean | Defaults["dense"];
    };
    noGutters: unknown extends Defaults["noGutters"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["noGutters"] ? boolean : boolean | Defaults["noGutters"]>;
        default: unknown extends Defaults["noGutters"] ? boolean : boolean | Defaults["noGutters"];
    };
    align: unknown extends Defaults["align"] ? {
        type: PropType<"baseline" | "center" | "end" | "start" | "stretch">;
        default: null;
        validator: (str: any) => boolean;
    } : Omit<{
        type: PropType<"baseline" | "center" | "end" | "start" | "stretch">;
        default: null;
        validator: (str: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["align"] ? "baseline" | "center" | "end" | "start" | "stretch" : "baseline" | "center" | "end" | "start" | "stretch" | Defaults["align"]>;
        default: unknown extends Defaults["align"] ? "baseline" | "center" | "end" | "start" | "stretch" : Defaults["align"] | NonNullable<"baseline" | "center" | "end" | "start" | "stretch">;
    };
    justify: unknown extends Defaults["justify"] ? {
        type: PropType<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch">;
        default: null;
        validator: (str: any) => boolean;
    } : Omit<{
        type: PropType<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch">;
        default: null;
        validator: (str: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["justify"] ? "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" : "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" | Defaults["justify"]>;
        default: unknown extends Defaults["justify"] ? "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" : Defaults["justify"] | NonNullable<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch">;
    };
    alignContent: unknown extends Defaults["alignContent"] ? {
        type: PropType<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch">;
        default: null;
        validator: (str: any) => boolean;
    } : Omit<{
        type: PropType<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch">;
        default: null;
        validator: (str: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["alignContent"] ? "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" : "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" | Defaults["alignContent"]>;
        default: unknown extends Defaults["alignContent"] ? "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" : Defaults["alignContent"] | NonNullable<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch">;
    };
    alignContentLg: unknown extends Defaults["alignContentLg"] ? Prop<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch", null> : {
        type: PropType<unknown extends Defaults["alignContentLg"] ? "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" : "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" | Defaults["alignContentLg"]>;
        default: unknown extends Defaults["alignContentLg"] ? "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" : Defaults["alignContentLg"] | NonNullable<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch">;
    };
    alignContentMd: unknown extends Defaults["alignContentMd"] ? Prop<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch", null> : {
        type: PropType<unknown extends Defaults["alignContentMd"] ? "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" : "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" | Defaults["alignContentMd"]>;
        default: unknown extends Defaults["alignContentMd"] ? "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" : Defaults["alignContentMd"] | NonNullable<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch">;
    };
    alignContentSm: unknown extends Defaults["alignContentSm"] ? Prop<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch", null> : {
        type: PropType<unknown extends Defaults["alignContentSm"] ? "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" : "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" | Defaults["alignContentSm"]>;
        default: unknown extends Defaults["alignContentSm"] ? "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" : Defaults["alignContentSm"] | NonNullable<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch">;
    };
    alignContentXl: unknown extends Defaults["alignContentXl"] ? Prop<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch", null> : {
        type: PropType<unknown extends Defaults["alignContentXl"] ? "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" : "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" | Defaults["alignContentXl"]>;
        default: unknown extends Defaults["alignContentXl"] ? "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" : Defaults["alignContentXl"] | NonNullable<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch">;
    };
    alignContentXxl: unknown extends Defaults["alignContentXxl"] ? Prop<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch", null> : {
        type: PropType<unknown extends Defaults["alignContentXxl"] ? "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" : "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" | Defaults["alignContentXxl"]>;
        default: unknown extends Defaults["alignContentXxl"] ? "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" : Defaults["alignContentXxl"] | NonNullable<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch">;
    };
    alignLg: unknown extends Defaults["alignLg"] ? Prop<"baseline" | "center" | "end" | "start" | "stretch", null> : {
        type: PropType<unknown extends Defaults["alignLg"] ? "baseline" | "center" | "end" | "start" | "stretch" : "baseline" | "center" | "end" | "start" | "stretch" | Defaults["alignLg"]>;
        default: unknown extends Defaults["alignLg"] ? "baseline" | "center" | "end" | "start" | "stretch" : Defaults["alignLg"] | NonNullable<"baseline" | "center" | "end" | "start" | "stretch">;
    };
    alignMd: unknown extends Defaults["alignMd"] ? Prop<"baseline" | "center" | "end" | "start" | "stretch", null> : {
        type: PropType<unknown extends Defaults["alignMd"] ? "baseline" | "center" | "end" | "start" | "stretch" : "baseline" | "center" | "end" | "start" | "stretch" | Defaults["alignMd"]>;
        default: unknown extends Defaults["alignMd"] ? "baseline" | "center" | "end" | "start" | "stretch" : Defaults["alignMd"] | NonNullable<"baseline" | "center" | "end" | "start" | "stretch">;
    };
    alignSm: unknown extends Defaults["alignSm"] ? Prop<"baseline" | "center" | "end" | "start" | "stretch", null> : {
        type: PropType<unknown extends Defaults["alignSm"] ? "baseline" | "center" | "end" | "start" | "stretch" : "baseline" | "center" | "end" | "start" | "stretch" | Defaults["alignSm"]>;
        default: unknown extends Defaults["alignSm"] ? "baseline" | "center" | "end" | "start" | "stretch" : Defaults["alignSm"] | NonNullable<"baseline" | "center" | "end" | "start" | "stretch">;
    };
    alignXl: unknown extends Defaults["alignXl"] ? Prop<"baseline" | "center" | "end" | "start" | "stretch", null> : {
        type: PropType<unknown extends Defaults["alignXl"] ? "baseline" | "center" | "end" | "start" | "stretch" : "baseline" | "center" | "end" | "start" | "stretch" | Defaults["alignXl"]>;
        default: unknown extends Defaults["alignXl"] ? "baseline" | "center" | "end" | "start" | "stretch" : Defaults["alignXl"] | NonNullable<"baseline" | "center" | "end" | "start" | "stretch">;
    };
    alignXxl: unknown extends Defaults["alignXxl"] ? Prop<"baseline" | "center" | "end" | "start" | "stretch", null> : {
        type: PropType<unknown extends Defaults["alignXxl"] ? "baseline" | "center" | "end" | "start" | "stretch" : "baseline" | "center" | "end" | "start" | "stretch" | Defaults["alignXxl"]>;
        default: unknown extends Defaults["alignXxl"] ? "baseline" | "center" | "end" | "start" | "stretch" : Defaults["alignXxl"] | NonNullable<"baseline" | "center" | "end" | "start" | "stretch">;
    };
    justifyLg: unknown extends Defaults["justifyLg"] ? Prop<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start", null> : {
        type: PropType<unknown extends Defaults["justifyLg"] ? "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" : "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | Defaults["justifyLg"]>;
        default: unknown extends Defaults["justifyLg"] ? "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" : Defaults["justifyLg"] | NonNullable<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start">;
    };
    justifyMd: unknown extends Defaults["justifyMd"] ? Prop<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start", null> : {
        type: PropType<unknown extends Defaults["justifyMd"] ? "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" : "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | Defaults["justifyMd"]>;
        default: unknown extends Defaults["justifyMd"] ? "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" : Defaults["justifyMd"] | NonNullable<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start">;
    };
    justifySm: unknown extends Defaults["justifySm"] ? Prop<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start", null> : {
        type: PropType<unknown extends Defaults["justifySm"] ? "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" : "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | Defaults["justifySm"]>;
        default: unknown extends Defaults["justifySm"] ? "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" : Defaults["justifySm"] | NonNullable<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start">;
    };
    justifyXl: unknown extends Defaults["justifyXl"] ? Prop<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start", null> : {
        type: PropType<unknown extends Defaults["justifyXl"] ? "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" : "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | Defaults["justifyXl"]>;
        default: unknown extends Defaults["justifyXl"] ? "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" : Defaults["justifyXl"] | NonNullable<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start">;
    };
    justifyXxl: unknown extends Defaults["justifyXxl"] ? Prop<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start", null> : {
        type: PropType<unknown extends Defaults["justifyXxl"] ? "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" : "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | Defaults["justifyXxl"]>;
        default: unknown extends Defaults["justifyXxl"] ? "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" : Defaults["justifyXxl"] | NonNullable<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start">;
    };
};
export declare const VRow: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        tag: string | import("../../util/index.js").JSXComponent;
        dense: boolean;
        noGutters: boolean;
        align: "baseline" | "center" | "end" | "start" | "stretch";
        justify: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch";
        alignContent: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch";
    } & {
        class?: any;
        alignContentLg?: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" | undefined;
        alignContentMd?: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" | undefined;
        alignContentSm?: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" | undefined;
        alignContentXl?: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" | undefined;
        alignContentXxl?: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" | undefined;
        alignLg?: "baseline" | "center" | "end" | "start" | "stretch" | undefined;
        alignMd?: "baseline" | "center" | "end" | "start" | "stretch" | undefined;
        alignSm?: "baseline" | "center" | "end" | "start" | "stretch" | undefined;
        alignXl?: "baseline" | "center" | "end" | "start" | "stretch" | undefined;
        alignXxl?: "baseline" | "center" | "end" | "start" | "stretch" | undefined;
        justifyLg?: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | undefined;
        justifyMd?: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | undefined;
        justifySm?: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | undefined;
        justifyXl?: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | undefined;
        justifyXxl?: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | undefined;
    } & {
        $children?: {
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
        dense: boolean;
        noGutters: boolean;
        align: "baseline" | "center" | "end" | "start" | "stretch";
        justify: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch";
        alignContent: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch";
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
        dense: boolean;
        noGutters: boolean;
        align: "baseline" | "center" | "end" | "start" | "stretch";
        justify: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch";
        alignContent: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch";
    } & {
        class?: any;
        alignContentLg?: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" | undefined;
        alignContentMd?: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" | undefined;
        alignContentSm?: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" | undefined;
        alignContentXl?: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" | undefined;
        alignContentXxl?: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" | undefined;
        alignLg?: "baseline" | "center" | "end" | "start" | "stretch" | undefined;
        alignMd?: "baseline" | "center" | "end" | "start" | "stretch" | undefined;
        alignSm?: "baseline" | "center" | "end" | "start" | "stretch" | undefined;
        alignXl?: "baseline" | "center" | "end" | "start" | "stretch" | undefined;
        alignXxl?: "baseline" | "center" | "end" | "start" | "stretch" | undefined;
        justifyLg?: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | undefined;
        justifyMd?: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | undefined;
        justifySm?: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | undefined;
        justifyXl?: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | undefined;
        justifyXxl?: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | undefined;
    } & {
        $children?: {
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
        dense: boolean;
        noGutters: boolean;
        align: "baseline" | "center" | "end" | "start" | "stretch";
        justify: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch";
        alignContent: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch";
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    tag: string | import("../../util/index.js").JSXComponent;
    dense: boolean;
    noGutters: boolean;
    align: "baseline" | "center" | "end" | "start" | "stretch";
    justify: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch";
    alignContent: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch";
} & {
    class?: any;
    alignContentLg?: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" | undefined;
    alignContentMd?: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" | undefined;
    alignContentSm?: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" | undefined;
    alignContentXl?: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" | undefined;
    alignContentXxl?: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch" | undefined;
    alignLg?: "baseline" | "center" | "end" | "start" | "stretch" | undefined;
    alignMd?: "baseline" | "center" | "end" | "start" | "stretch" | undefined;
    alignSm?: "baseline" | "center" | "end" | "start" | "stretch" | undefined;
    alignXl?: "baseline" | "center" | "end" | "start" | "stretch" | undefined;
    alignXxl?: "baseline" | "center" | "end" | "start" | "stretch" | undefined;
    justifyLg?: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | undefined;
    justifyMd?: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | undefined;
    justifySm?: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | undefined;
    justifyXl?: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | undefined;
    justifyXxl?: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | undefined;
} & {
    $children?: {
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
    dense: boolean;
    noGutters: boolean;
    align: "baseline" | "center" | "end" | "start" | "stretch";
    justify: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch";
    alignContent: "center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch";
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
    dense: BooleanConstructor;
    noGutters: BooleanConstructor;
    align: {
        type: PropType<"baseline" | "center" | "end" | "start" | "stretch">;
        default: null;
        validator: (str: any) => boolean;
    };
    justify: {
        type: PropType<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch">;
        default: null;
        validator: (str: any) => boolean;
    };
    alignContent: {
        type: PropType<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch">;
        default: null;
        validator: (str: any) => boolean;
    };
    alignContentLg: Prop<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch", null>;
    alignContentMd: Prop<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch", null>;
    alignContentSm: Prop<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch", null>;
    alignContentXl: Prop<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch", null>;
    alignContentXxl: Prop<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch", null>;
    alignLg: Prop<"baseline" | "center" | "end" | "start" | "stretch", null>;
    alignMd: Prop<"baseline" | "center" | "end" | "start" | "stretch", null>;
    alignSm: Prop<"baseline" | "center" | "end" | "start" | "stretch", null>;
    alignXl: Prop<"baseline" | "center" | "end" | "start" | "stretch", null>;
    alignXxl: Prop<"baseline" | "center" | "end" | "start" | "stretch", null>;
    justifyLg: Prop<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start", null>;
    justifyMd: Prop<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start", null>;
    justifySm: Prop<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start", null>;
    justifyXl: Prop<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start", null>;
    justifyXxl: Prop<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start", null>;
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
    dense: BooleanConstructor;
    noGutters: BooleanConstructor;
    align: {
        type: PropType<"baseline" | "center" | "end" | "start" | "stretch">;
        default: null;
        validator: (str: any) => boolean;
    };
    justify: {
        type: PropType<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch">;
        default: null;
        validator: (str: any) => boolean;
    };
    alignContent: {
        type: PropType<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch">;
        default: null;
        validator: (str: any) => boolean;
    };
    alignContentLg: Prop<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch", null>;
    alignContentMd: Prop<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch", null>;
    alignContentSm: Prop<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch", null>;
    alignContentXl: Prop<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch", null>;
    alignContentXxl: Prop<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start" | "stretch", null>;
    alignLg: Prop<"baseline" | "center" | "end" | "start" | "stretch", null>;
    alignMd: Prop<"baseline" | "center" | "end" | "start" | "stretch", null>;
    alignSm: Prop<"baseline" | "center" | "end" | "start" | "stretch", null>;
    alignXl: Prop<"baseline" | "center" | "end" | "start" | "stretch", null>;
    alignXxl: Prop<"baseline" | "center" | "end" | "start" | "stretch", null>;
    justifyLg: Prop<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start", null>;
    justifyMd: Prop<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start", null>;
    justifySm: Prop<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start", null>;
    justifyXl: Prop<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start", null>;
    justifyXxl: Prop<"center" | "end" | "space-around" | "space-between" | "space-evenly" | "start", null>;
}>>;
export type VRow = InstanceType<typeof VRow>;
