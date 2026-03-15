export declare const makeVBreadcrumbsItemProps: <Defaults extends {
    class?: unknown;
    style?: unknown;
    tag?: unknown;
    maxWidth?: unknown;
    width?: unknown;
    href?: unknown;
    replace?: unknown;
    to?: unknown;
    exact?: unknown;
    active?: unknown;
    activeClass?: unknown;
    activeColor?: unknown;
    color?: unknown;
    disabled?: unknown;
    title?: unknown;
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
    tag: unknown extends Defaults["tag"] ? Omit<{
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    } : Omit<Omit<{
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : string | Defaults["tag"] | import("../../util/index.js").JSXComponent>;
        default: unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : Defaults["tag"] | NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    maxWidth: unknown extends Defaults["maxWidth"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["maxWidth"] ? string | number : string | number | Defaults["maxWidth"]>;
        default: unknown extends Defaults["maxWidth"] ? string | number : Defaults["maxWidth"] | NonNullable<string | number>;
    };
    width: unknown extends Defaults["width"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : Defaults["width"] | NonNullable<string | number>;
    };
    href: unknown extends Defaults["href"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["href"] ? string : string | Defaults["href"]>;
        default: unknown extends Defaults["href"] ? string : string | Defaults["href"];
    };
    replace: unknown extends Defaults["replace"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["replace"] ? boolean : boolean | Defaults["replace"]>;
        default: unknown extends Defaults["replace"] ? boolean : boolean | Defaults["replace"];
    };
    to: unknown extends Defaults["to"] ? import("vue").PropType<string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric> : {
        type: import("vue").PropType<unknown extends Defaults["to"] ? string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric : string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric | Defaults["to"]>;
        default: unknown extends Defaults["to"] ? string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric : Defaults["to"] | NonNullable<string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric>;
    };
    exact: unknown extends Defaults["exact"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["exact"] ? boolean : boolean | Defaults["exact"]>;
        default: unknown extends Defaults["exact"] ? boolean : boolean | Defaults["exact"];
    };
    active: unknown extends Defaults["active"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"]>;
        default: unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"];
    };
    activeClass: unknown extends Defaults["activeClass"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["activeClass"] ? string : string | Defaults["activeClass"]>;
        default: unknown extends Defaults["activeClass"] ? string : string | Defaults["activeClass"];
    };
    activeColor: unknown extends Defaults["activeColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["activeColor"] ? string : string | Defaults["activeColor"]>;
        default: unknown extends Defaults["activeColor"] ? string : string | Defaults["activeColor"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    title: unknown extends Defaults["title"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["title"] ? string : string | Defaults["title"]>;
        default: unknown extends Defaults["title"] ? string : string | Defaults["title"];
    };
};
export declare const VBreadcrumbsItem: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        tag: string | import("../../util/index.js").JSXComponent;
        replace: boolean;
        exact: boolean;
        active: boolean;
        disabled: boolean;
    } & {
        class?: any;
        maxWidth?: string | number | undefined;
        width?: string | number | undefined;
        href?: string | undefined;
        to?: string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric | undefined;
        activeClass?: string | undefined;
        activeColor?: string | undefined;
        color?: string | undefined;
        title?: string | undefined;
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
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        replace: boolean;
        exact: boolean;
        active: boolean;
        disabled: boolean;
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
        replace: boolean;
        exact: boolean;
        active: boolean;
        disabled: boolean;
    } & {
        class?: any;
        maxWidth?: string | number | undefined;
        width?: string | number | undefined;
        href?: string | undefined;
        to?: string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric | undefined;
        activeClass?: string | undefined;
        activeColor?: string | undefined;
        color?: string | undefined;
        title?: string | undefined;
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
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        replace: boolean;
        exact: boolean;
        active: boolean;
        disabled: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    tag: string | import("../../util/index.js").JSXComponent;
    replace: boolean;
    exact: boolean;
    active: boolean;
    disabled: boolean;
} & {
    class?: any;
    maxWidth?: string | number | undefined;
    width?: string | number | undefined;
    href?: string | undefined;
    to?: string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric | undefined;
    activeClass?: string | undefined;
    activeColor?: string | undefined;
    color?: string | undefined;
    title?: string | undefined;
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
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    style: import("vue").StyleValue;
    tag: string | import("../../util/index.js").JSXComponent;
    replace: boolean;
    exact: boolean;
    active: boolean;
    disabled: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    tag: Omit<{
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    maxWidth: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    href: StringConstructor;
    replace: BooleanConstructor;
    to: import("vue").PropType<string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric>;
    exact: BooleanConstructor;
    active: BooleanConstructor;
    activeClass: StringConstructor;
    activeColor: StringConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    title: StringConstructor;
}, import("vue").ExtractPropTypes<{
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    tag: Omit<{
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    maxWidth: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    href: StringConstructor;
    replace: BooleanConstructor;
    to: import("vue").PropType<string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric>;
    exact: BooleanConstructor;
    active: BooleanConstructor;
    activeClass: StringConstructor;
    activeColor: StringConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    title: StringConstructor;
}>>;
export type VBreadcrumbsItem = InstanceType<typeof VBreadcrumbsItem>;
