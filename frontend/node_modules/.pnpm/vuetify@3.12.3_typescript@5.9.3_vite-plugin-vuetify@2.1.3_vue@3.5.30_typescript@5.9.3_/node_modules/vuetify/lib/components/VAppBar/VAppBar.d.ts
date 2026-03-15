// Styles

// Types
import type { PropType } from 'vue';
export declare const makeVAppBarProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
    name?: unknown;
    order?: unknown;
    absolute?: unknown;
    border?: unknown;
    elevation?: unknown;
    rounded?: unknown;
    tile?: unknown;
    tag?: unknown;
    collapse?: unknown;
    collapsePosition?: unknown;
    color?: unknown;
    density?: unknown;
    extended?: unknown;
    extensionHeight?: unknown;
    flat?: unknown;
    floating?: unknown;
    image?: unknown;
    title?: unknown;
    scrollTarget?: unknown;
    scrollThreshold?: unknown;
    scrollBehavior?: unknown;
    modelValue?: unknown;
    location?: unknown;
    height?: unknown;
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
    name: unknown extends Defaults["name"] ? {
        type: StringConstructor;
    } : Omit<{
        type: StringConstructor;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["name"] ? string : string | Defaults["name"]>;
        default: unknown extends Defaults["name"] ? string : string | Defaults["name"];
    };
    order: unknown extends Defaults["order"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["order"] ? string | number : string | number | Defaults["order"]>;
        default: unknown extends Defaults["order"] ? string | number : Defaults["order"] | NonNullable<string | number>;
    };
    absolute: unknown extends Defaults["absolute"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["absolute"] ? boolean : boolean | Defaults["absolute"]>;
        default: unknown extends Defaults["absolute"] ? boolean : boolean | Defaults["absolute"];
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
    collapse: unknown extends Defaults["collapse"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["collapse"] ? boolean : boolean | Defaults["collapse"]>;
        default: unknown extends Defaults["collapse"] ? boolean : boolean | Defaults["collapse"];
    };
    collapsePosition: unknown extends Defaults["collapsePosition"] ? {
        type: PropType<"end" | "start">;
        default: string;
    } : Omit<{
        type: PropType<"end" | "start">;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["collapsePosition"] ? "end" | "start" : "end" | "start" | Defaults["collapsePosition"]>;
        default: unknown extends Defaults["collapsePosition"] ? "end" | "start" : Defaults["collapsePosition"] | NonNullable<"end" | "start">;
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    density: unknown extends Defaults["density"] ? {
        type: PropType<import("../VToolbar/VToolbar.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<import("../VToolbar/VToolbar.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["density"] ? import("../VToolbar/VToolbar.js").Density : Defaults["density"] | import("../VToolbar/VToolbar.js").Density>;
        default: unknown extends Defaults["density"] ? import("../VToolbar/VToolbar.js").Density : Defaults["density"] | NonNullable<import("../VToolbar/VToolbar.js").Density>;
    };
    extended: unknown extends Defaults["extended"] ? {
        type: BooleanConstructor;
        default: null;
    } : Omit<{
        type: BooleanConstructor;
        default: null;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["extended"] ? boolean : boolean | Defaults["extended"]>;
        default: unknown extends Defaults["extended"] ? boolean : boolean | Defaults["extended"];
    };
    extensionHeight: unknown extends Defaults["extensionHeight"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["extensionHeight"] ? string | number : string | number | Defaults["extensionHeight"]>;
        default: unknown extends Defaults["extensionHeight"] ? string | number : Defaults["extensionHeight"] | NonNullable<string | number>;
    };
    flat: unknown extends Defaults["flat"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["flat"] ? boolean : boolean | Defaults["flat"]>;
        default: unknown extends Defaults["flat"] ? boolean : boolean | Defaults["flat"];
    };
    floating: unknown extends Defaults["floating"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["floating"] ? boolean : boolean | Defaults["floating"]>;
        default: unknown extends Defaults["floating"] ? boolean : boolean | Defaults["floating"];
    };
    image: unknown extends Defaults["image"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["image"] ? string : string | Defaults["image"]>;
        default: unknown extends Defaults["image"] ? string : string | Defaults["image"];
    };
    title: unknown extends Defaults["title"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["title"] ? string : string | Defaults["title"]>;
        default: unknown extends Defaults["title"] ? string : string | Defaults["title"];
    };
    scrollTarget: unknown extends Defaults["scrollTarget"] ? {
        type: StringConstructor;
    } : Omit<{
        type: StringConstructor;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["scrollTarget"] ? string : string | Defaults["scrollTarget"]>;
        default: unknown extends Defaults["scrollTarget"] ? string : string | Defaults["scrollTarget"];
    };
    scrollThreshold: unknown extends Defaults["scrollThreshold"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["scrollThreshold"] ? string | number : string | number | Defaults["scrollThreshold"]>;
        default: unknown extends Defaults["scrollThreshold"] ? string | number : Defaults["scrollThreshold"] | NonNullable<string | number>;
    };
    scrollBehavior: unknown extends Defaults["scrollBehavior"] ? PropType<"collapse" | "elevate" | "fade-image" | "fully-hide" | "hide" | "inverted" | (string & {})> : {
        type: PropType<unknown extends Defaults["scrollBehavior"] ? "collapse" | "elevate" | "fade-image" | "fully-hide" | "hide" | "inverted" | (string & {}) : "collapse" | "elevate" | "fade-image" | "fully-hide" | "hide" | "inverted" | Defaults["scrollBehavior"] | (string & {})>;
        default: unknown extends Defaults["scrollBehavior"] ? "collapse" | "elevate" | "fade-image" | "fully-hide" | "hide" | "inverted" | (string & {}) : string | Defaults["scrollBehavior"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: BooleanConstructor;
        default: boolean;
    } : Omit<{
        type: BooleanConstructor;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["modelValue"] ? boolean : boolean | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? boolean : boolean | Defaults["modelValue"];
    };
    location: unknown extends Defaults["location"] ? {
        type: PropType<"bottom" | "top">;
        default: string;
        validator: (value: any) => boolean;
    } : Omit<{
        type: PropType<"bottom" | "top">;
        default: string;
        validator: (value: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["location"] ? "bottom" | "top" : "bottom" | "top" | Defaults["location"]>;
        default: unknown extends Defaults["location"] ? "bottom" | "top" : Defaults["location"] | NonNullable<"bottom" | "top">;
    };
    height: unknown extends Defaults["height"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : Defaults["height"] | NonNullable<string | number>;
    };
};
export declare const VAppBar: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        order: string | number;
        absolute: boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        collapse: boolean;
        collapsePosition: "end" | "start";
        density: import("../VToolbar/VToolbar.js").Density;
        extended: boolean;
        extensionHeight: string | number;
        flat: boolean;
        floating: boolean;
        scrollThreshold: string | number;
        modelValue: boolean;
        location: "bottom" | "top";
        height: string | number;
    } & {
        theme?: string | undefined;
        class?: any;
        name?: string | undefined;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        color?: string | undefined;
        image?: string | undefined;
        title?: string | undefined;
        scrollTarget?: string | undefined;
        scrollBehavior?: "collapse" | "elevate" | "fade-image" | "fully-hide" | "hide" | "inverted" | (string & {}) | undefined;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
            image?: (() => import("vue").VNodeChild) | undefined;
            prepend?: (() => import("vue").VNodeChild) | undefined;
            append?: (() => import("vue").VNodeChild) | undefined;
            title?: (() => import("vue").VNodeChild) | undefined;
            extension?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            image?: false | (() => import("vue").VNodeChild) | undefined;
            prepend?: false | (() => import("vue").VNodeChild) | undefined;
            append?: false | (() => import("vue").VNodeChild) | undefined;
            title?: false | (() => import("vue").VNodeChild) | undefined;
            extension?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:extension"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:image"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (value: boolean) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        order: string | number;
        absolute: boolean;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        collapse: boolean;
        collapsePosition: "end" | "start";
        density: import("../VToolbar/VToolbar.js").Density;
        extended: boolean;
        extensionHeight: string | number;
        flat: boolean;
        floating: boolean;
        scrollThreshold: string | number;
        modelValue: boolean;
        location: "bottom" | "top";
        height: string | number;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        image: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        prepend: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        append: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        title: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        extension: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        collapse: boolean;
        collapsePosition: "end" | "start";
        density: import("../VToolbar/VToolbar.js").Density;
        extended: boolean;
        extensionHeight: string | number;
        flat: boolean;
        floating: boolean;
        scrollThreshold: string | number;
        modelValue: boolean;
        location: "bottom" | "top";
        height: string | number;
    } & {
        theme?: string | undefined;
        class?: any;
        name?: string | undefined;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        color?: string | undefined;
        image?: string | undefined;
        title?: string | undefined;
        scrollTarget?: string | undefined;
        scrollBehavior?: "collapse" | "elevate" | "fade-image" | "fully-hide" | "hide" | "inverted" | (string & {}) | undefined;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
            image?: (() => import("vue").VNodeChild) | undefined;
            prepend?: (() => import("vue").VNodeChild) | undefined;
            append?: (() => import("vue").VNodeChild) | undefined;
            title?: (() => import("vue").VNodeChild) | undefined;
            extension?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            image?: false | (() => import("vue").VNodeChild) | undefined;
            prepend?: false | (() => import("vue").VNodeChild) | undefined;
            append?: false | (() => import("vue").VNodeChild) | undefined;
            title?: false | (() => import("vue").VNodeChild) | undefined;
            extension?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:extension"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:image"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        order: string | number;
        absolute: boolean;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        collapse: boolean;
        collapsePosition: "end" | "start";
        density: import("../VToolbar/VToolbar.js").Density;
        extended: boolean;
        extensionHeight: string | number;
        flat: boolean;
        floating: boolean;
        scrollThreshold: string | number;
        modelValue: boolean;
        location: "bottom" | "top";
        height: string | number;
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
    collapse: boolean;
    collapsePosition: "end" | "start";
    density: import("../VToolbar/VToolbar.js").Density;
    extended: boolean;
    extensionHeight: string | number;
    flat: boolean;
    floating: boolean;
    scrollThreshold: string | number;
    modelValue: boolean;
    location: "bottom" | "top";
    height: string | number;
} & {
    theme?: string | undefined;
    class?: any;
    name?: string | undefined;
    border?: string | number | boolean | undefined;
    elevation?: string | number | undefined;
    rounded?: string | number | boolean | undefined;
    color?: string | undefined;
    image?: string | undefined;
    title?: string | undefined;
    scrollTarget?: string | undefined;
    scrollBehavior?: "collapse" | "elevate" | "fade-image" | "fully-hide" | "hide" | "inverted" | (string & {}) | undefined;
} & {
    $children?: {
        default?: (() => import("vue").VNodeChild) | undefined;
        image?: (() => import("vue").VNodeChild) | undefined;
        prepend?: (() => import("vue").VNodeChild) | undefined;
        append?: (() => import("vue").VNodeChild) | undefined;
        title?: (() => import("vue").VNodeChild) | undefined;
        extension?: (() => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
        image?: false | (() => import("vue").VNodeChild) | undefined;
        prepend?: false | (() => import("vue").VNodeChild) | undefined;
        append?: false | (() => import("vue").VNodeChild) | undefined;
        title?: false | (() => import("vue").VNodeChild) | undefined;
        extension?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:extension"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:image"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => true;
}, string, {
    style: import("vue").StyleValue;
    order: string | number;
    absolute: boolean;
    rounded: string | number | boolean;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    collapse: boolean;
    collapsePosition: "end" | "start";
    density: import("../VToolbar/VToolbar.js").Density;
    extended: boolean;
    extensionHeight: string | number;
    flat: boolean;
    floating: boolean;
    scrollThreshold: string | number;
    modelValue: boolean;
    location: "bottom" | "top";
    height: string | number;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    image: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    prepend: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    append: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    title: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    extension: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
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
    collapse: BooleanConstructor;
    collapsePosition: {
        type: PropType<"end" | "start">;
        default: string;
    };
    color: StringConstructor;
    density: {
        type: PropType<import("../VToolbar/VToolbar.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    extended: {
        type: BooleanConstructor;
        default: null;
    };
    extensionHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    flat: BooleanConstructor;
    floating: BooleanConstructor;
    image: StringConstructor;
    title: StringConstructor;
    scrollTarget: {
        type: StringConstructor;
    };
    scrollThreshold: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    scrollBehavior: PropType<"collapse" | "elevate" | "fade-image" | "fully-hide" | "hide" | "inverted" | (string & {})>;
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    location: {
        type: PropType<"bottom" | "top">;
        default: string;
        validator: (value: any) => boolean;
    };
    height: {
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
    name: {
        type: StringConstructor;
    };
    order: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    absolute: BooleanConstructor;
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
    collapse: BooleanConstructor;
    collapsePosition: {
        type: PropType<"end" | "start">;
        default: string;
    };
    color: StringConstructor;
    density: {
        type: PropType<import("../VToolbar/VToolbar.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    extended: {
        type: BooleanConstructor;
        default: null;
    };
    extensionHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    flat: BooleanConstructor;
    floating: BooleanConstructor;
    image: StringConstructor;
    title: StringConstructor;
    scrollTarget: {
        type: StringConstructor;
    };
    scrollThreshold: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    scrollBehavior: PropType<"collapse" | "elevate" | "fade-image" | "fully-hide" | "hide" | "inverted" | (string & {})>;
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    location: {
        type: PropType<"bottom" | "top">;
        default: string;
        validator: (value: any) => boolean;
    };
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}>>;
export type VAppBar = InstanceType<typeof VAppBar>;
