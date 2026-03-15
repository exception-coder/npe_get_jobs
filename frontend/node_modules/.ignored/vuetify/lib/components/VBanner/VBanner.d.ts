// Styles

import { IconValue } from '../../composables/icons.js';
// Types
import type { PropType } from 'vue';
export type VBannerSlots = {
    default: never;
    prepend: never;
    text: never;
    actions: never;
};
export declare const makeVBannerProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
    mobile?: unknown;
    mobileBreakpoint?: unknown;
    border?: unknown;
    density?: unknown;
    elevation?: unknown;
    rounded?: unknown;
    tile?: unknown;
    tag?: unknown;
    height?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    width?: unknown;
    location?: unknown;
    position?: unknown;
    avatar?: unknown;
    bgColor?: unknown;
    color?: unknown;
    icon?: unknown;
    lines?: unknown;
    stacked?: unknown;
    sticky?: unknown;
    text?: unknown;
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
    mobile: unknown extends Defaults["mobile"] ? Omit<{
        type: PropType<boolean | null>;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<boolean | null>;
        default: NonNullable<boolean | null> | null;
    } : Omit<Omit<{
        type: PropType<boolean | null>;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<boolean | null>;
        default: NonNullable<boolean | null> | null;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["mobile"] ? boolean | null : boolean | Defaults["mobile"] | null>;
        default: unknown extends Defaults["mobile"] ? boolean | null : Defaults["mobile"] | NonNullable<boolean | null>;
    };
    mobileBreakpoint: unknown extends Defaults["mobileBreakpoint"] ? PropType<number | import("../../types.js").DisplayBreakpoint> : {
        type: PropType<unknown extends Defaults["mobileBreakpoint"] ? number | import("../../types.js").DisplayBreakpoint : number | Defaults["mobileBreakpoint"] | import("../../types.js").DisplayBreakpoint>;
        default: unknown extends Defaults["mobileBreakpoint"] ? number | import("../../types.js").DisplayBreakpoint : Defaults["mobileBreakpoint"] | NonNullable<number | import("../../types.js").DisplayBreakpoint>;
    };
    border: unknown extends Defaults["border"] ? (BooleanConstructor | NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["border"] ? string | number | boolean : string | number | boolean | Defaults["border"]>;
        default: unknown extends Defaults["border"] ? string | number | boolean : Defaults["border"] | NonNullable<string | number | boolean>;
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
    height: unknown extends Defaults["height"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : Defaults["height"] | NonNullable<string | number>;
    };
    maxHeight: unknown extends Defaults["maxHeight"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["maxHeight"] ? string | number : string | number | Defaults["maxHeight"]>;
        default: unknown extends Defaults["maxHeight"] ? string | number : Defaults["maxHeight"] | NonNullable<string | number>;
    };
    maxWidth: unknown extends Defaults["maxWidth"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["maxWidth"] ? string | number : string | number | Defaults["maxWidth"]>;
        default: unknown extends Defaults["maxWidth"] ? string | number : Defaults["maxWidth"] | NonNullable<string | number>;
    };
    minHeight: unknown extends Defaults["minHeight"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["minHeight"] ? string | number : string | number | Defaults["minHeight"]>;
        default: unknown extends Defaults["minHeight"] ? string | number : Defaults["minHeight"] | NonNullable<string | number>;
    };
    minWidth: unknown extends Defaults["minWidth"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["minWidth"] ? string | number : string | number | Defaults["minWidth"]>;
        default: unknown extends Defaults["minWidth"] ? string | number : Defaults["minWidth"] | NonNullable<string | number>;
    };
    width: unknown extends Defaults["width"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : Defaults["width"] | NonNullable<string | number>;
    };
    location: unknown extends Defaults["location"] ? PropType<import("../../util/index.js").Anchor | null> : {
        type: PropType<unknown extends Defaults["location"] ? import("../../util/index.js").Anchor | null : Defaults["location"] | import("../../util/index.js").Anchor | null>;
        default: unknown extends Defaults["location"] ? import("../../util/index.js").Anchor | null : Defaults["location"] | NonNullable<import("../../util/index.js").Anchor | null>;
    };
    position: unknown extends Defaults["position"] ? {
        type: PropType<"absolute" | "fixed" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<"absolute" | "fixed" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["position"] ? "absolute" | "fixed" | "relative" | "static" | "sticky" : "absolute" | "fixed" | "relative" | "static" | "sticky" | Defaults["position"]>;
        default: unknown extends Defaults["position"] ? "absolute" | "fixed" | "relative" | "static" | "sticky" : Defaults["position"] | NonNullable<"absolute" | "fixed" | "relative" | "static" | "sticky">;
    };
    avatar: unknown extends Defaults["avatar"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["avatar"] ? string : string | Defaults["avatar"]>;
        default: unknown extends Defaults["avatar"] ? string : string | Defaults["avatar"];
    };
    bgColor: unknown extends Defaults["bgColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"]>;
        default: unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    icon: unknown extends Defaults["icon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["icon"] ? IconValue : Defaults["icon"] | IconValue>;
        default: unknown extends Defaults["icon"] ? IconValue : Defaults["icon"] | NonNullable<IconValue>;
    };
    lines: unknown extends Defaults["lines"] ? PropType<"one" | "three" | "two"> : {
        type: PropType<unknown extends Defaults["lines"] ? "one" | "three" | "two" : "one" | "three" | "two" | Defaults["lines"]>;
        default: unknown extends Defaults["lines"] ? "one" | "three" | "two" : Defaults["lines"] | NonNullable<"one" | "three" | "two">;
    };
    stacked: unknown extends Defaults["stacked"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["stacked"] ? boolean : boolean | Defaults["stacked"]>;
        default: unknown extends Defaults["stacked"] ? boolean : boolean | Defaults["stacked"];
    };
    sticky: unknown extends Defaults["sticky"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["sticky"] ? boolean : boolean | Defaults["sticky"]>;
        default: unknown extends Defaults["sticky"] ? boolean : boolean | Defaults["sticky"];
    };
    text: unknown extends Defaults["text"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["text"] ? string : string | Defaults["text"]>;
        default: unknown extends Defaults["text"] ? string : string | Defaults["text"];
    };
};
export declare const VBanner: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        mobile: boolean | null;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        stacked: boolean;
        sticky: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        location?: import("../../util/index.js").Anchor | null | undefined;
        position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
        avatar?: string | undefined;
        bgColor?: string | undefined;
        color?: string | undefined;
        icon?: IconValue | undefined;
        lines?: "one" | "three" | "two" | undefined;
        text?: string | undefined;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
            prepend?: (() => import("vue").VNodeChild) | undefined;
            text?: (() => import("vue").VNodeChild) | undefined;
            actions?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            prepend?: false | (() => import("vue").VNodeChild) | undefined;
            text?: false | (() => import("vue").VNodeChild) | undefined;
            actions?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:actions"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:text"?: false | (() => import("vue").VNodeChild) | undefined;
    }, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        mobile: boolean | null;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        stacked: boolean;
        sticky: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        prepend: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        text: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        actions: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        mobile: boolean | null;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        stacked: boolean;
        sticky: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        location?: import("../../util/index.js").Anchor | null | undefined;
        position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
        avatar?: string | undefined;
        bgColor?: string | undefined;
        color?: string | undefined;
        icon?: IconValue | undefined;
        lines?: "one" | "three" | "two" | undefined;
        text?: string | undefined;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
            prepend?: (() => import("vue").VNodeChild) | undefined;
            text?: (() => import("vue").VNodeChild) | undefined;
            actions?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            prepend?: false | (() => import("vue").VNodeChild) | undefined;
            text?: false | (() => import("vue").VNodeChild) | undefined;
            actions?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:actions"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:text"?: false | (() => import("vue").VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        mobile: boolean | null;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        stacked: boolean;
        sticky: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    mobile: boolean | null;
    density: import("../../composables/density.js").Density;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    stacked: boolean;
    sticky: boolean;
} & {
    theme?: string | undefined;
    class?: any;
    mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
    border?: string | number | boolean | undefined;
    elevation?: string | number | undefined;
    rounded?: string | number | boolean | undefined;
    height?: string | number | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    width?: string | number | undefined;
    location?: import("../../util/index.js").Anchor | null | undefined;
    position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
    avatar?: string | undefined;
    bgColor?: string | undefined;
    color?: string | undefined;
    icon?: IconValue | undefined;
    lines?: "one" | "three" | "two" | undefined;
    text?: string | undefined;
} & {
    $children?: {
        default?: (() => import("vue").VNodeChild) | undefined;
        prepend?: (() => import("vue").VNodeChild) | undefined;
        text?: (() => import("vue").VNodeChild) | undefined;
        actions?: (() => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
        prepend?: false | (() => import("vue").VNodeChild) | undefined;
        text?: false | (() => import("vue").VNodeChild) | undefined;
        actions?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:actions"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:text"?: false | (() => import("vue").VNodeChild) | undefined;
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    style: import("vue").StyleValue;
    mobile: boolean | null;
    density: import("../../composables/density.js").Density;
    rounded: string | number | boolean;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    stacked: boolean;
    sticky: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    prepend: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    text: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    actions: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    mobile: Omit<{
        type: PropType<boolean | null>;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<boolean | null>;
        default: NonNullable<boolean | null> | null;
    };
    mobileBreakpoint: PropType<number | import("../../types.js").DisplayBreakpoint>;
    border: (BooleanConstructor | NumberConstructor | StringConstructor)[];
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
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
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    height: (NumberConstructor | StringConstructor)[];
    maxHeight: (NumberConstructor | StringConstructor)[];
    maxWidth: (NumberConstructor | StringConstructor)[];
    minHeight: (NumberConstructor | StringConstructor)[];
    minWidth: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    location: PropType<import("../../util/index.js").Anchor | null>;
    position: {
        type: PropType<"absolute" | "fixed" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    avatar: StringConstructor;
    bgColor: StringConstructor;
    color: StringConstructor;
    icon: PropType<IconValue>;
    lines: PropType<"one" | "three" | "two">;
    stacked: BooleanConstructor;
    sticky: BooleanConstructor;
    text: StringConstructor;
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    mobile: Omit<{
        type: PropType<boolean | null>;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<boolean | null>;
        default: NonNullable<boolean | null> | null;
    };
    mobileBreakpoint: PropType<number | import("../../types.js").DisplayBreakpoint>;
    border: (BooleanConstructor | NumberConstructor | StringConstructor)[];
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
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
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    height: (NumberConstructor | StringConstructor)[];
    maxHeight: (NumberConstructor | StringConstructor)[];
    maxWidth: (NumberConstructor | StringConstructor)[];
    minHeight: (NumberConstructor | StringConstructor)[];
    minWidth: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    location: PropType<import("../../util/index.js").Anchor | null>;
    position: {
        type: PropType<"absolute" | "fixed" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    avatar: StringConstructor;
    bgColor: StringConstructor;
    color: StringConstructor;
    icon: PropType<IconValue>;
    lines: PropType<"one" | "three" | "two">;
    stacked: BooleanConstructor;
    sticky: BooleanConstructor;
    text: StringConstructor;
}>>;
export type VBanner = InstanceType<typeof VBanner>;
