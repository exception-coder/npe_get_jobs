// Styles

// Types
import type { PropType } from 'vue';
export type VTableSlots = {
    default: never;
    top: never;
    bottom: never;
    wrapper: never;
};
export type Striped = null | 'odd' | 'even';
export declare const makeVTableProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
    density?: unknown;
    tag?: unknown;
    fixedHeader?: unknown;
    fixedFooter?: unknown;
    height?: unknown;
    hover?: unknown;
    striped?: unknown;
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
    fixedHeader: unknown extends Defaults["fixedHeader"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["fixedHeader"] ? boolean : boolean | Defaults["fixedHeader"]>;
        default: unknown extends Defaults["fixedHeader"] ? boolean : boolean | Defaults["fixedHeader"];
    };
    fixedFooter: unknown extends Defaults["fixedFooter"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["fixedFooter"] ? boolean : boolean | Defaults["fixedFooter"]>;
        default: unknown extends Defaults["fixedFooter"] ? boolean : boolean | Defaults["fixedFooter"];
    };
    height: unknown extends Defaults["height"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : Defaults["height"] | NonNullable<string | number>;
    };
    hover: unknown extends Defaults["hover"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hover"] ? boolean : boolean | Defaults["hover"]>;
        default: unknown extends Defaults["hover"] ? boolean : boolean | Defaults["hover"];
    };
    striped: unknown extends Defaults["striped"] ? {
        type: PropType<Striped>;
        default: null;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<Striped>;
        default: null;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["striped"] ? Striped : Defaults["striped"] | Striped>;
        default: unknown extends Defaults["striped"] ? Striped : Defaults["striped"] | NonNullable<Striped>;
    };
};
export declare const VTable: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        density: import("../../composables/density.js").Density;
        tag: string | import("../../util/index.js").JSXComponent;
        fixedHeader: boolean;
        fixedFooter: boolean;
        hover: boolean;
        striped: Striped;
    } & {
        theme?: string | undefined;
        class?: any;
        height?: string | number | undefined;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
            top?: (() => import("vue").VNodeChild) | undefined;
            bottom?: (() => import("vue").VNodeChild) | undefined;
            wrapper?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            top?: false | (() => import("vue").VNodeChild) | undefined;
            bottom?: false | (() => import("vue").VNodeChild) | undefined;
            wrapper?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:bottom"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:top"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:wrapper"?: false | (() => import("vue").VNodeChild) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        density: import("../../composables/density.js").Density;
        tag: string | import("../../util/index.js").JSXComponent;
        fixedHeader: boolean;
        fixedFooter: boolean;
        hover: boolean;
        striped: Striped;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        top: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        bottom: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        wrapper: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        tag: string | import("../../util/index.js").JSXComponent;
        fixedHeader: boolean;
        fixedFooter: boolean;
        hover: boolean;
        striped: Striped;
    } & {
        theme?: string | undefined;
        class?: any;
        height?: string | number | undefined;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
            top?: (() => import("vue").VNodeChild) | undefined;
            bottom?: (() => import("vue").VNodeChild) | undefined;
            wrapper?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            top?: false | (() => import("vue").VNodeChild) | undefined;
            bottom?: false | (() => import("vue").VNodeChild) | undefined;
            wrapper?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:bottom"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:top"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:wrapper"?: false | (() => import("vue").VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        density: import("../../composables/density.js").Density;
        tag: string | import("../../util/index.js").JSXComponent;
        fixedHeader: boolean;
        fixedFooter: boolean;
        hover: boolean;
        striped: Striped;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    density: import("../../composables/density.js").Density;
    tag: string | import("../../util/index.js").JSXComponent;
    fixedHeader: boolean;
    fixedFooter: boolean;
    hover: boolean;
    striped: Striped;
} & {
    theme?: string | undefined;
    class?: any;
    height?: string | number | undefined;
} & {
    $children?: {
        default?: (() => import("vue").VNodeChild) | undefined;
        top?: (() => import("vue").VNodeChild) | undefined;
        bottom?: (() => import("vue").VNodeChild) | undefined;
        wrapper?: (() => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
        top?: false | (() => import("vue").VNodeChild) | undefined;
        bottom?: false | (() => import("vue").VNodeChild) | undefined;
        wrapper?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:bottom"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:top"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:wrapper"?: false | (() => import("vue").VNodeChild) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    style: import("vue").StyleValue;
    density: import("../../composables/density.js").Density;
    tag: string | import("../../util/index.js").JSXComponent;
    fixedHeader: boolean;
    fixedFooter: boolean;
    hover: boolean;
    striped: Striped;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    top: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    bottom: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    wrapper: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    fixedHeader: BooleanConstructor;
    fixedFooter: BooleanConstructor;
    height: (NumberConstructor | StringConstructor)[];
    hover: BooleanConstructor;
    striped: {
        type: PropType<Striped>;
        default: null;
        validator: (v: any) => boolean;
    };
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
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    fixedHeader: BooleanConstructor;
    fixedFooter: BooleanConstructor;
    height: (NumberConstructor | StringConstructor)[];
    hover: BooleanConstructor;
    striped: {
        type: PropType<Striped>;
        default: null;
        validator: (v: any) => boolean;
    };
}>>;
export type VTable = InstanceType<typeof VTable>;
