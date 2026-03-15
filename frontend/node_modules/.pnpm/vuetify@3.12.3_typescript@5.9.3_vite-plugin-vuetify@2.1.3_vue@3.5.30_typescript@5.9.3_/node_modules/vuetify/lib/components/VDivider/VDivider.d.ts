// Styles

// Types
import type { PropType } from 'vue';
export declare const makeVDividerProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
    color?: unknown;
    contentOffset?: unknown;
    gradient?: unknown;
    inset?: unknown;
    length?: unknown;
    opacity?: unknown;
    thickness?: unknown;
    vertical?: unknown;
    variant?: unknown;
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
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    contentOffset: unknown extends Defaults["contentOffset"] ? PropType<string | number | (string | number)[]> : {
        type: PropType<unknown extends Defaults["contentOffset"] ? string | number | (string | number)[] : string | number | (string | number)[] | Defaults["contentOffset"]>;
        default: unknown extends Defaults["contentOffset"] ? string | number | (string | number)[] : Defaults["contentOffset"] | NonNullable<string | number | (string | number)[]>;
    };
    gradient: unknown extends Defaults["gradient"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["gradient"] ? boolean : boolean | Defaults["gradient"]>;
        default: unknown extends Defaults["gradient"] ? boolean : boolean | Defaults["gradient"];
    };
    inset: unknown extends Defaults["inset"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["inset"] ? boolean : boolean | Defaults["inset"]>;
        default: unknown extends Defaults["inset"] ? boolean : boolean | Defaults["inset"];
    };
    length: unknown extends Defaults["length"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["length"] ? string | number : string | number | Defaults["length"]>;
        default: unknown extends Defaults["length"] ? string | number : Defaults["length"] | NonNullable<string | number>;
    };
    opacity: unknown extends Defaults["opacity"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["opacity"] ? string | number : string | number | Defaults["opacity"]>;
        default: unknown extends Defaults["opacity"] ? string | number : Defaults["opacity"] | NonNullable<string | number>;
    };
    thickness: unknown extends Defaults["thickness"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["thickness"] ? string | number : string | number | Defaults["thickness"]>;
        default: unknown extends Defaults["thickness"] ? string | number : Defaults["thickness"] | NonNullable<string | number>;
    };
    vertical: unknown extends Defaults["vertical"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["vertical"] ? boolean : boolean | Defaults["vertical"]>;
        default: unknown extends Defaults["vertical"] ? boolean : boolean | Defaults["vertical"];
    };
    variant: unknown extends Defaults["variant"] ? {
        type: PropType<"dashed" | "dotted" | "double" | "solid">;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<"dashed" | "dotted" | "double" | "solid">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["variant"] ? "dashed" | "dotted" | "double" | "solid" : "dashed" | "dotted" | "double" | "solid" | Defaults["variant"]>;
        default: unknown extends Defaults["variant"] ? "dashed" | "dotted" | "double" | "solid" : Defaults["variant"] | NonNullable<"dashed" | "dotted" | "double" | "solid">;
    };
};
export declare const VDivider: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        gradient: boolean;
        inset: boolean;
        vertical: boolean;
        variant: "dashed" | "dotted" | "double" | "solid";
    } & {
        theme?: string | undefined;
        class?: any;
        color?: string | undefined;
        contentOffset?: string | number | (string | number)[] | undefined;
        length?: string | number | undefined;
        opacity?: string | number | undefined;
        thickness?: string | number | undefined;
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
        gradient: boolean;
        inset: boolean;
        vertical: boolean;
        variant: "dashed" | "dotted" | "double" | "solid";
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
        gradient: boolean;
        inset: boolean;
        vertical: boolean;
        variant: "dashed" | "dotted" | "double" | "solid";
    } & {
        theme?: string | undefined;
        class?: any;
        color?: string | undefined;
        contentOffset?: string | number | (string | number)[] | undefined;
        length?: string | number | undefined;
        opacity?: string | number | undefined;
        thickness?: string | number | undefined;
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
        gradient: boolean;
        inset: boolean;
        vertical: boolean;
        variant: "dashed" | "dotted" | "double" | "solid";
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    gradient: boolean;
    inset: boolean;
    vertical: boolean;
    variant: "dashed" | "dotted" | "double" | "solid";
} & {
    theme?: string | undefined;
    class?: any;
    color?: string | undefined;
    contentOffset?: string | number | (string | number)[] | undefined;
    length?: string | number | undefined;
    opacity?: string | number | undefined;
    thickness?: string | number | undefined;
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
    gradient: boolean;
    inset: boolean;
    vertical: boolean;
    variant: "dashed" | "dotted" | "double" | "solid";
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    color: StringConstructor;
    contentOffset: PropType<string | number | (string | number)[]>;
    gradient: BooleanConstructor;
    inset: BooleanConstructor;
    length: (NumberConstructor | StringConstructor)[];
    opacity: (NumberConstructor | StringConstructor)[];
    thickness: (NumberConstructor | StringConstructor)[];
    vertical: BooleanConstructor;
    variant: {
        type: PropType<"dashed" | "dotted" | "double" | "solid">;
        default: string;
        validator: (v: any) => boolean;
    };
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    color: StringConstructor;
    contentOffset: PropType<string | number | (string | number)[]>;
    gradient: BooleanConstructor;
    inset: BooleanConstructor;
    length: (NumberConstructor | StringConstructor)[];
    opacity: (NumberConstructor | StringConstructor)[];
    thickness: (NumberConstructor | StringConstructor)[];
    vertical: BooleanConstructor;
    variant: {
        type: PropType<"dashed" | "dotted" | "double" | "solid">;
        default: string;
        validator: (v: any) => boolean;
    };
}>>;
export type VDivider = InstanceType<typeof VDivider>;
