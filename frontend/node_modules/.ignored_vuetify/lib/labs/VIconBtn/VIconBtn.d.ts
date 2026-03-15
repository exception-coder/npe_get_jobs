// Styles

// Types
import type { PropType } from 'vue';
import type { IconValue } from '../../composables/icons.js';
export type VIconBtnSlots = {
    default: never;
    loader: never;
};
export type VIconBtnSizes = 'x-small' | 'small' | 'default' | 'large' | 'x-large';
export declare const makeVIconBtnProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
    border?: unknown;
    elevation?: unknown;
    rounded?: unknown;
    tile?: unknown;
    tag?: unknown;
    color?: unknown;
    variant?: unknown;
    active?: unknown;
    activeColor?: unknown;
    activeIcon?: unknown;
    activeVariant?: unknown;
    baseVariant?: unknown;
    disabled?: unknown;
    height?: unknown;
    width?: unknown;
    hideOverlay?: unknown;
    icon?: unknown;
    iconColor?: unknown;
    loading?: unknown;
    opacity?: unknown;
    readonly?: unknown;
    rotate?: unknown;
    size?: unknown;
    sizes?: unknown;
    text?: unknown;
    iconSize?: unknown;
    iconSizes?: unknown;
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
    border: unknown extends Defaults["border"] ? (BooleanConstructor | NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["border"] ? string | number | boolean : string | number | boolean | Defaults["border"]>;
        default: unknown extends Defaults["border"] ? string | number | boolean : Defaults["border"] | NonNullable<string | number | boolean>;
    };
    elevation: unknown extends Defaults["elevation"] ? {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["elevation"] ? string | number : string | number | Defaults["elevation"]>;
        default: unknown extends Defaults["elevation"] ? string | number : Defaults["elevation"] | NonNullable<string | number>;
    };
    rounded: unknown extends Defaults["rounded"] ? {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    } : Omit<{
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["rounded"] ? string | number | boolean : string | number | boolean | Defaults["rounded"]>;
        default: unknown extends Defaults["rounded"] ? string | number | boolean : Defaults["rounded"] | NonNullable<string | number | boolean>;
    };
    tile: unknown extends Defaults["tile"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["tile"] ? boolean : boolean | Defaults["tile"]>;
        default: unknown extends Defaults["tile"] ? boolean : boolean | Defaults["tile"];
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
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    variant: unknown extends Defaults["variant"] ? Omit<{
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
    } : Omit<Omit<{
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["variant"] ? "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal" : "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal" | Defaults["variant"]>;
        default: unknown extends Defaults["variant"] ? "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal" : Defaults["variant"] | NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
    };
    active: unknown extends Defaults["active"] ? {
        type: BooleanConstructor;
        default: undefined;
    } : Omit<{
        type: BooleanConstructor;
        default: undefined;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"]>;
        default: unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"];
    };
    activeColor: unknown extends Defaults["activeColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["activeColor"] ? string : string | Defaults["activeColor"]>;
        default: unknown extends Defaults["activeColor"] ? string : string | Defaults["activeColor"];
    };
    activeIcon: unknown extends Defaults["activeIcon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["activeIcon"] ? IconValue : Defaults["activeIcon"] | IconValue>;
        default: unknown extends Defaults["activeIcon"] ? IconValue : Defaults["activeIcon"] | NonNullable<IconValue>;
    };
    activeVariant: unknown extends Defaults["activeVariant"] ? PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal"> : {
        type: PropType<unknown extends Defaults["activeVariant"] ? "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal" : "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal" | Defaults["activeVariant"]>;
        default: unknown extends Defaults["activeVariant"] ? "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal" : Defaults["activeVariant"] | NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
    };
    baseVariant: unknown extends Defaults["baseVariant"] ? {
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: string;
    } : Omit<{
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["baseVariant"] ? "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal" : "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal" | Defaults["baseVariant"]>;
        default: unknown extends Defaults["baseVariant"] ? "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal" : Defaults["baseVariant"] | NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    height: unknown extends Defaults["height"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : Defaults["height"] | NonNullable<string | number>;
    };
    width: unknown extends Defaults["width"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : Defaults["width"] | NonNullable<string | number>;
    };
    hideOverlay: unknown extends Defaults["hideOverlay"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideOverlay"] ? boolean : boolean | Defaults["hideOverlay"]>;
        default: unknown extends Defaults["hideOverlay"] ? boolean : boolean | Defaults["hideOverlay"];
    };
    icon: unknown extends Defaults["icon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["icon"] ? IconValue : Defaults["icon"] | IconValue>;
        default: unknown extends Defaults["icon"] ? IconValue : Defaults["icon"] | NonNullable<IconValue>;
    };
    iconColor: unknown extends Defaults["iconColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["iconColor"] ? string : string | Defaults["iconColor"]>;
        default: unknown extends Defaults["iconColor"] ? string : string | Defaults["iconColor"];
    };
    loading: unknown extends Defaults["loading"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["loading"] ? boolean : boolean | Defaults["loading"]>;
        default: unknown extends Defaults["loading"] ? boolean : boolean | Defaults["loading"];
    };
    opacity: unknown extends Defaults["opacity"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["opacity"] ? string | number : string | number | Defaults["opacity"]>;
        default: unknown extends Defaults["opacity"] ? string | number : Defaults["opacity"] | NonNullable<string | number>;
    };
    readonly: unknown extends Defaults["readonly"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"]>;
        default: unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"];
    };
    rotate: unknown extends Defaults["rotate"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["rotate"] ? string | number : string | number | Defaults["rotate"]>;
        default: unknown extends Defaults["rotate"] ? string | number : Defaults["rotate"] | NonNullable<string | number>;
    };
    size: unknown extends Defaults["size"] ? {
        type: PropType<string | number>;
        default: string;
    } : Omit<{
        type: PropType<string | number>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["size"] ? string | number : string | number | Defaults["size"]>;
        default: unknown extends Defaults["size"] ? string | number : Defaults["size"] | NonNullable<string | number>;
    };
    sizes: unknown extends Defaults["sizes"] ? {
        type: PropType<[VIconBtnSizes, number][]>;
        default: () => (string | number)[][];
    } : Omit<{
        type: PropType<[VIconBtnSizes, number][]>;
        default: () => (string | number)[][];
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["sizes"] ? [VIconBtnSizes, number][] : [VIconBtnSizes, number][] | Defaults["sizes"]>;
        default: unknown extends Defaults["sizes"] ? [VIconBtnSizes, number][] : [VIconBtnSizes, number][] | Defaults["sizes"];
    };
    text: unknown extends Defaults["text"] ? {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    } : Omit<{
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["text"] ? string | number | boolean : string | number | boolean | Defaults["text"]>;
        default: unknown extends Defaults["text"] ? string | number | boolean : Defaults["text"] | NonNullable<string | number | boolean>;
    };
    iconSize: unknown extends Defaults["iconSize"] ? PropType<string | number> : {
        type: PropType<unknown extends Defaults["iconSize"] ? string | number : string | number | Defaults["iconSize"]>;
        default: unknown extends Defaults["iconSize"] ? string | number : Defaults["iconSize"] | NonNullable<string | number>;
    };
    iconSizes: unknown extends Defaults["iconSizes"] ? {
        type: PropType<[VIconBtnSizes, number][]>;
        default: () => (string | number)[][];
    } : Omit<{
        type: PropType<[VIconBtnSizes, number][]>;
        default: () => (string | number)[][];
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["iconSizes"] ? [VIconBtnSizes, number][] : [VIconBtnSizes, number][] | Defaults["iconSizes"]>;
        default: unknown extends Defaults["iconSizes"] ? [VIconBtnSizes, number][] : [VIconBtnSizes, number][] | Defaults["iconSizes"];
    };
};
export declare const VIconBtn: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        baseVariant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        disabled: boolean;
        hideOverlay: boolean;
        loading: boolean;
        readonly: boolean;
        size: string | number;
        sizes: [VIconBtnSizes, number][];
        iconSizes: [VIconBtnSizes, number][];
    } & {
        theme?: string | undefined;
        class?: any;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        color?: string | undefined;
        active?: boolean | undefined;
        activeColor?: string | undefined;
        activeIcon?: IconValue | undefined;
        activeVariant?: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal" | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        icon?: IconValue | undefined;
        iconColor?: string | undefined;
        opacity?: string | number | undefined;
        rotate?: string | number | undefined;
        text?: string | number | boolean | undefined;
        iconSize?: string | number | undefined;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
            loader?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            loader?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:active"?: ((value: boolean) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:active": (value: boolean) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        active: boolean;
        baseVariant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        disabled: boolean;
        hideOverlay: boolean;
        loading: boolean;
        readonly: boolean;
        size: string | number;
        sizes: [VIconBtnSizes, number][];
        text: string | number | boolean;
        iconSizes: [VIconBtnSizes, number][];
    }, true, {}, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        loader: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        baseVariant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        disabled: boolean;
        hideOverlay: boolean;
        loading: boolean;
        readonly: boolean;
        size: string | number;
        sizes: [VIconBtnSizes, number][];
        iconSizes: [VIconBtnSizes, number][];
    } & {
        theme?: string | undefined;
        class?: any;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        color?: string | undefined;
        active?: boolean | undefined;
        activeColor?: string | undefined;
        activeIcon?: IconValue | undefined;
        activeVariant?: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal" | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        icon?: IconValue | undefined;
        iconColor?: string | undefined;
        opacity?: string | number | undefined;
        rotate?: string | number | undefined;
        text?: string | number | boolean | undefined;
        iconSize?: string | number | undefined;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
            loader?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            loader?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:active"?: ((value: boolean) => any) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        active: boolean;
        baseVariant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        disabled: boolean;
        hideOverlay: boolean;
        loading: boolean;
        readonly: boolean;
        size: string | number;
        sizes: [VIconBtnSizes, number][];
        text: string | number | boolean;
        iconSizes: [VIconBtnSizes, number][];
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
    baseVariant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
    disabled: boolean;
    hideOverlay: boolean;
    loading: boolean;
    readonly: boolean;
    size: string | number;
    sizes: [VIconBtnSizes, number][];
    iconSizes: [VIconBtnSizes, number][];
} & {
    theme?: string | undefined;
    class?: any;
    border?: string | number | boolean | undefined;
    elevation?: string | number | undefined;
    rounded?: string | number | boolean | undefined;
    color?: string | undefined;
    active?: boolean | undefined;
    activeColor?: string | undefined;
    activeIcon?: IconValue | undefined;
    activeVariant?: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal" | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
    icon?: IconValue | undefined;
    iconColor?: string | undefined;
    opacity?: string | number | undefined;
    rotate?: string | number | undefined;
    text?: string | number | boolean | undefined;
    iconSize?: string | number | undefined;
} & {
    $children?: {
        default?: (() => import("vue").VNodeChild) | undefined;
        loader?: (() => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
        loader?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:loader"?: false | (() => import("vue").VNodeChild) | undefined;
} & {
    "onUpdate:active"?: ((value: boolean) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:active": (value: boolean) => true;
}, string, {
    style: import("vue").StyleValue;
    rounded: string | number | boolean;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
    active: boolean;
    baseVariant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
    disabled: boolean;
    hideOverlay: boolean;
    loading: boolean;
    readonly: boolean;
    size: string | number;
    sizes: [VIconBtnSizes, number][];
    text: string | number | boolean;
    iconSizes: [VIconBtnSizes, number][];
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    loader: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    border: (BooleanConstructor | NumberConstructor | StringConstructor)[];
    elevation: {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    };
    rounded: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    tag: Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    color: StringConstructor;
    variant: Omit<{
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
    };
    active: {
        type: BooleanConstructor;
        default: undefined;
    };
    activeColor: StringConstructor;
    activeIcon: PropType<IconValue>;
    activeVariant: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
    baseVariant: {
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: string;
    };
    disabled: BooleanConstructor;
    height: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    hideOverlay: BooleanConstructor;
    icon: PropType<IconValue>;
    iconColor: StringConstructor;
    loading: BooleanConstructor;
    opacity: (NumberConstructor | StringConstructor)[];
    readonly: BooleanConstructor;
    rotate: (NumberConstructor | StringConstructor)[];
    size: {
        type: PropType<string | number>;
        default: string;
    };
    sizes: {
        type: PropType<[VIconBtnSizes, number][]>;
        default: () => (string | number)[][];
    };
    text: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    iconSize: PropType<string | number>;
    iconSizes: {
        type: PropType<[VIconBtnSizes, number][]>;
        default: () => (string | number)[][];
    };
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    border: (BooleanConstructor | NumberConstructor | StringConstructor)[];
    elevation: {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    };
    rounded: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    tag: Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    color: StringConstructor;
    variant: Omit<{
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
    };
    active: {
        type: BooleanConstructor;
        default: undefined;
    };
    activeColor: StringConstructor;
    activeIcon: PropType<IconValue>;
    activeVariant: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
    baseVariant: {
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: string;
    };
    disabled: BooleanConstructor;
    height: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    hideOverlay: BooleanConstructor;
    icon: PropType<IconValue>;
    iconColor: StringConstructor;
    loading: BooleanConstructor;
    opacity: (NumberConstructor | StringConstructor)[];
    readonly: BooleanConstructor;
    rotate: (NumberConstructor | StringConstructor)[];
    size: {
        type: PropType<string | number>;
        default: string;
    };
    sizes: {
        type: PropType<[VIconBtnSizes, number][]>;
        default: () => (string | number)[][];
    };
    text: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    iconSize: PropType<string | number>;
    iconSizes: {
        type: PropType<[VIconBtnSizes, number][]>;
        default: () => (string | number)[][];
    };
}>>;
export type VIconBtn = InstanceType<typeof VIconBtn>;
