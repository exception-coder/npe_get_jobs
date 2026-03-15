// Styles

export declare const makeVSystemBarProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
    name?: unknown;
    order?: unknown;
    absolute?: unknown;
    elevation?: unknown;
    rounded?: unknown;
    tile?: unknown;
    tag?: unknown;
    color?: unknown;
    height?: unknown;
    window?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
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
    name: unknown extends Defaults["name"] ? {
        type: StringConstructor;
    } : Omit<{
        type: StringConstructor;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["name"] ? string : string | Defaults["name"]>;
        default: unknown extends Defaults["name"] ? string : string | Defaults["name"];
    };
    order: unknown extends Defaults["order"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["order"] ? string | number : string | number | Defaults["order"]>;
        default: unknown extends Defaults["order"] ? string | number : Defaults["order"] | NonNullable<string | number>;
    };
    absolute: unknown extends Defaults["absolute"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["absolute"] ? boolean : boolean | Defaults["absolute"]>;
        default: unknown extends Defaults["absolute"] ? boolean : boolean | Defaults["absolute"];
    };
    elevation: unknown extends Defaults["elevation"] ? {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["elevation"] ? string | number : string | number | Defaults["elevation"]>;
        default: unknown extends Defaults["elevation"] ? string | number : Defaults["elevation"] | NonNullable<string | number>;
    };
    rounded: unknown extends Defaults["rounded"] ? {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    } : Omit<{
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["rounded"] ? string | number | boolean : string | number | boolean | Defaults["rounded"]>;
        default: unknown extends Defaults["rounded"] ? string | number | boolean : Defaults["rounded"] | NonNullable<string | number | boolean>;
    };
    tile: unknown extends Defaults["tile"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["tile"] ? boolean : boolean | Defaults["tile"]>;
        default: unknown extends Defaults["tile"] ? boolean : boolean | Defaults["tile"];
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
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    height: unknown extends Defaults["height"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : Defaults["height"] | NonNullable<string | number>;
    };
    window: unknown extends Defaults["window"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["window"] ? boolean : boolean | Defaults["window"]>;
        default: unknown extends Defaults["window"] ? boolean : boolean | Defaults["window"];
    };
};
export declare const VSystemBar: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        order: string | number;
        absolute: boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        window: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        name?: string | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        color?: string | undefined;
        height?: string | number | undefined;
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
        order: string | number;
        absolute: boolean;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        window: boolean;
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
        order: string | number;
        absolute: boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        window: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        name?: string | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        color?: string | undefined;
        height?: string | number | undefined;
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
        order: string | number;
        absolute: boolean;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        window: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    order: string | number;
    absolute: boolean;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    window: boolean;
} & {
    theme?: string | undefined;
    class?: any;
    name?: string | undefined;
    elevation?: string | number | undefined;
    rounded?: string | number | boolean | undefined;
    color?: string | undefined;
    height?: string | number | undefined;
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
    order: string | number;
    absolute: boolean;
    rounded: string | number | boolean;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    window: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    name: {
        type: StringConstructor;
    };
    order: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    absolute: BooleanConstructor;
    elevation: {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    };
    rounded: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    color: StringConstructor;
    height: (NumberConstructor | StringConstructor)[];
    window: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    name: {
        type: StringConstructor;
    };
    order: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    absolute: BooleanConstructor;
    elevation: {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    };
    rounded: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    color: StringConstructor;
    height: (NumberConstructor | StringConstructor)[];
    window: BooleanConstructor;
}>>;
export type VSystemBar = InstanceType<typeof VSystemBar>;
