// Styles

export declare const makeVAppProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
    overlaps?: unknown;
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
    overlaps: unknown extends Defaults["overlaps"] ? import("vue").Prop<string[]> : {
        type: import("vue").PropType<unknown extends Defaults["overlaps"] ? string[] : string[] | Defaults["overlaps"]>;
        default: unknown extends Defaults["overlaps"] ? string[] : string[] | Defaults["overlaps"];
    };
};
export declare const VApp: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    } & {
        theme?: string | undefined;
        class?: any;
        overlaps?: string[] | undefined;
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
    }, {
        getLayoutItem: (id: string) => {
            top: number;
            bottom: number;
            left: number;
            right: number;
            id: string;
            size: number;
            position: import("../../composables/layout.js").Position;
        } | undefined;
        items: import("vue").ComputedRef<{
            top: number;
            bottom: number;
            left: number;
            right: number;
            id: string;
            size: number;
            position: import("../../composables/layout.js").Position;
        }[]>;
        theme: import("../../types.js").ThemeInstance;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
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
    } & {
        theme?: string | undefined;
        class?: any;
        overlaps?: string[] | undefined;
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
    }, {
        getLayoutItem: (id: string) => {
            top: number;
            bottom: number;
            left: number;
            right: number;
            id: string;
            size: number;
            position: import("../../composables/layout.js").Position;
        } | undefined;
        items: import("vue").ComputedRef<{
            top: number;
            bottom: number;
            left: number;
            right: number;
            id: string;
            size: number;
            position: import("../../composables/layout.js").Position;
        }[]>;
        theme: import("../../types.js").ThemeInstance;
    }, {}, {}, {}, {
        style: import("vue").StyleValue;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
} & {
    theme?: string | undefined;
    class?: any;
    overlaps?: string[] | undefined;
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
}, {
    getLayoutItem: (id: string) => {
        top: number;
        bottom: number;
        left: number;
        right: number;
        id: string;
        size: number;
        position: import("../../composables/layout.js").Position;
    } | undefined;
    items: import("vue").ComputedRef<{
        top: number;
        bottom: number;
        left: number;
        right: number;
        id: string;
        size: number;
        position: import("../../composables/layout.js").Position;
    }[]>;
    theme: import("../../types.js").ThemeInstance;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    style: import("vue").StyleValue;
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
    overlaps: import("vue").Prop<string[]>;
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    overlaps: import("vue").Prop<string[]>;
}>>;
export type VApp = InstanceType<typeof VApp>;
