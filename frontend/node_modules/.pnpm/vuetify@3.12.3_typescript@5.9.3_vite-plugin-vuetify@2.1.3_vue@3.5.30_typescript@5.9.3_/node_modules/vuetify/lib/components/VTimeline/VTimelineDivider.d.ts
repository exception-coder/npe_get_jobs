import { IconValue } from '../../composables/icons.js';
export declare const makeVTimelineDividerProps: <Defaults extends {
    class?: unknown;
    style?: unknown;
    elevation?: unknown;
    rounded?: unknown;
    tile?: unknown;
    size?: unknown;
    dotColor?: unknown;
    fillDot?: unknown;
    hideDot?: unknown;
    icon?: unknown;
    iconColor?: unknown;
    lineColor?: unknown;
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
    size: unknown extends Defaults["size"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["size"] ? string | number : string | number | Defaults["size"]>;
        default: unknown extends Defaults["size"] ? string | number : Defaults["size"] | NonNullable<string | number>;
    };
    dotColor: unknown extends Defaults["dotColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["dotColor"] ? string : string | Defaults["dotColor"]>;
        default: unknown extends Defaults["dotColor"] ? string : string | Defaults["dotColor"];
    };
    fillDot: unknown extends Defaults["fillDot"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["fillDot"] ? boolean : boolean | Defaults["fillDot"]>;
        default: unknown extends Defaults["fillDot"] ? boolean : boolean | Defaults["fillDot"];
    };
    hideDot: unknown extends Defaults["hideDot"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hideDot"] ? boolean : boolean | Defaults["hideDot"]>;
        default: unknown extends Defaults["hideDot"] ? boolean : boolean | Defaults["hideDot"];
    };
    icon: unknown extends Defaults["icon"] ? import("vue").PropType<IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["icon"] ? IconValue : Defaults["icon"] | IconValue>;
        default: unknown extends Defaults["icon"] ? IconValue : Defaults["icon"] | NonNullable<IconValue>;
    };
    iconColor: unknown extends Defaults["iconColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["iconColor"] ? string : string | Defaults["iconColor"]>;
        default: unknown extends Defaults["iconColor"] ? string : string | Defaults["iconColor"];
    };
    lineColor: unknown extends Defaults["lineColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["lineColor"] ? string : string | Defaults["lineColor"]>;
        default: unknown extends Defaults["lineColor"] ? string : string | Defaults["lineColor"];
    };
};
export declare const VTimelineDivider: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        tile: boolean;
        size: string | number;
        fillDot: boolean;
        hideDot: boolean;
    } & {
        class?: any;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        dotColor?: string | undefined;
        icon?: IconValue | undefined;
        iconColor?: string | undefined;
        lineColor?: string | undefined;
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
        rounded: string | number | boolean;
        tile: boolean;
        size: string | number;
        fillDot: boolean;
        hideDot: boolean;
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
        tile: boolean;
        size: string | number;
        fillDot: boolean;
        hideDot: boolean;
    } & {
        class?: any;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        dotColor?: string | undefined;
        icon?: IconValue | undefined;
        iconColor?: string | undefined;
        lineColor?: string | undefined;
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
        rounded: string | number | boolean;
        tile: boolean;
        size: string | number;
        fillDot: boolean;
        hideDot: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    tile: boolean;
    size: string | number;
    fillDot: boolean;
    hideDot: boolean;
} & {
    class?: any;
    elevation?: string | number | undefined;
    rounded?: string | number | boolean | undefined;
    dotColor?: string | undefined;
    icon?: IconValue | undefined;
    iconColor?: string | undefined;
    lineColor?: string | undefined;
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
    rounded: string | number | boolean;
    tile: boolean;
    size: string | number;
    fillDot: boolean;
    hideDot: boolean;
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
    elevation: {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    };
    rounded: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    size: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    dotColor: StringConstructor;
    fillDot: BooleanConstructor;
    hideDot: BooleanConstructor;
    icon: import("vue").PropType<IconValue>;
    iconColor: StringConstructor;
    lineColor: StringConstructor;
}, import("vue").ExtractPropTypes<{
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    elevation: {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    };
    rounded: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    size: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    dotColor: StringConstructor;
    fillDot: BooleanConstructor;
    hideDot: BooleanConstructor;
    icon: import("vue").PropType<IconValue>;
    iconColor: StringConstructor;
    lineColor: StringConstructor;
}>>;
export type VTimelineDivider = InstanceType<typeof VTimelineDivider>;
