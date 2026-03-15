// Styles

import { IconValue } from '../../composables/icons.js';
export type VBadgeSlots = {
    default: never;
    badge: never;
};
export declare const makeVBadgeProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
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
    transition?: unknown;
    bordered?: unknown;
    color?: unknown;
    content?: unknown;
    dot?: unknown;
    floating?: unknown;
    icon?: unknown;
    inline?: unknown;
    label?: unknown;
    max?: unknown;
    modelValue?: unknown;
    offsetX?: unknown;
    offsetY?: unknown;
    textColor?: unknown;
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
    height: unknown extends Defaults["height"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : Defaults["height"] | NonNullable<string | number>;
    };
    maxHeight: unknown extends Defaults["maxHeight"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["maxHeight"] ? string | number : string | number | Defaults["maxHeight"]>;
        default: unknown extends Defaults["maxHeight"] ? string | number : Defaults["maxHeight"] | NonNullable<string | number>;
    };
    maxWidth: unknown extends Defaults["maxWidth"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["maxWidth"] ? string | number : string | number | Defaults["maxWidth"]>;
        default: unknown extends Defaults["maxWidth"] ? string | number : Defaults["maxWidth"] | NonNullable<string | number>;
    };
    minHeight: unknown extends Defaults["minHeight"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["minHeight"] ? string | number : string | number | Defaults["minHeight"]>;
        default: unknown extends Defaults["minHeight"] ? string | number : Defaults["minHeight"] | NonNullable<string | number>;
    };
    minWidth: unknown extends Defaults["minWidth"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["minWidth"] ? string | number : string | number | Defaults["minWidth"]>;
        default: unknown extends Defaults["minWidth"] ? string | number : Defaults["minWidth"] | NonNullable<string | number>;
    };
    width: unknown extends Defaults["width"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : Defaults["width"] | NonNullable<string | number>;
    };
    location: unknown extends Defaults["location"] ? {
        type: import("vue").PropType<import("../../util/index.js").Anchor | null>;
        default: NonNullable<import("../../util/index.js").Anchor | null>;
    } : Omit<{
        type: import("vue").PropType<import("../../util/index.js").Anchor | null>;
        default: NonNullable<import("../../util/index.js").Anchor | null>;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["location"] ? import("../../util/index.js").Anchor | null : Defaults["location"] | import("../../util/index.js").Anchor | null>;
        default: unknown extends Defaults["location"] ? import("../../util/index.js").Anchor | null : Defaults["location"] | NonNullable<import("../../util/index.js").Anchor | null>;
    };
    transition: unknown extends Defaults["transition"] ? {
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null>;
    } : Omit<{
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null>;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["transition"] ? string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null : string | boolean | Defaults["transition"] | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null>;
        default: unknown extends Defaults["transition"] ? string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null : Defaults["transition"] | NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null>;
    };
    bordered: unknown extends Defaults["bordered"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["bordered"] ? boolean : boolean | Defaults["bordered"]>;
        default: unknown extends Defaults["bordered"] ? boolean : boolean | Defaults["bordered"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    content: unknown extends Defaults["content"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["content"] ? string | number : string | number | Defaults["content"]>;
        default: unknown extends Defaults["content"] ? string | number : Defaults["content"] | NonNullable<string | number>;
    };
    dot: unknown extends Defaults["dot"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["dot"] ? boolean : boolean | Defaults["dot"]>;
        default: unknown extends Defaults["dot"] ? boolean : boolean | Defaults["dot"];
    };
    floating: unknown extends Defaults["floating"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["floating"] ? boolean : boolean | Defaults["floating"]>;
        default: unknown extends Defaults["floating"] ? boolean : boolean | Defaults["floating"];
    };
    icon: unknown extends Defaults["icon"] ? import("vue").PropType<IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["icon"] ? IconValue : Defaults["icon"] | IconValue>;
        default: unknown extends Defaults["icon"] ? IconValue : Defaults["icon"] | NonNullable<IconValue>;
    };
    inline: unknown extends Defaults["inline"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["inline"] ? boolean : boolean | Defaults["inline"]>;
        default: unknown extends Defaults["inline"] ? boolean : boolean | Defaults["inline"];
    };
    label: unknown extends Defaults["label"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["label"] ? string : string | Defaults["label"]>;
        default: unknown extends Defaults["label"] ? string : string | Defaults["label"];
    };
    max: unknown extends Defaults["max"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["max"] ? string | number : string | number | Defaults["max"]>;
        default: unknown extends Defaults["max"] ? string | number : Defaults["max"] | NonNullable<string | number>;
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: BooleanConstructor;
        default: boolean;
    } : Omit<{
        type: BooleanConstructor;
        default: boolean;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["modelValue"] ? boolean : boolean | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? boolean : boolean | Defaults["modelValue"];
    };
    offsetX: unknown extends Defaults["offsetX"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["offsetX"] ? string | number : string | number | Defaults["offsetX"]>;
        default: unknown extends Defaults["offsetX"] ? string | number : Defaults["offsetX"] | NonNullable<string | number>;
    };
    offsetY: unknown extends Defaults["offsetY"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["offsetY"] ? string | number : string | number | Defaults["offsetY"]>;
        default: unknown extends Defaults["offsetY"] ? string | number : Defaults["offsetY"] | NonNullable<string | number>;
    };
    textColor: unknown extends Defaults["textColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["textColor"] ? string : string | Defaults["textColor"]>;
        default: unknown extends Defaults["textColor"] ? string : string | Defaults["textColor"];
    };
};
export declare const VBadge: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        location: import("../../util/index.js").Anchor | null;
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null;
        bordered: boolean;
        dot: boolean;
        floating: boolean;
        inline: boolean;
        label: string;
        modelValue: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        rounded?: string | number | boolean | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        content?: string | number | undefined;
        icon?: IconValue | undefined;
        max?: string | number | undefined;
        offsetX?: string | number | undefined;
        offsetY?: string | number | undefined;
        textColor?: string | undefined;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
            badge?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            badge?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:badge"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        location: import("../../util/index.js").Anchor | null;
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null;
        bordered: boolean;
        dot: boolean;
        floating: boolean;
        inline: boolean;
        label: string;
        modelValue: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        badge: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        location: import("../../util/index.js").Anchor | null;
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null;
        bordered: boolean;
        dot: boolean;
        floating: boolean;
        inline: boolean;
        label: string;
        modelValue: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        rounded?: string | number | boolean | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        content?: string | number | undefined;
        icon?: IconValue | undefined;
        max?: string | number | undefined;
        offsetX?: string | number | undefined;
        offsetY?: string | number | undefined;
        textColor?: string | undefined;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
            badge?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            badge?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:badge"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        location: import("../../util/index.js").Anchor | null;
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null;
        bordered: boolean;
        dot: boolean;
        floating: boolean;
        inline: boolean;
        label: string;
        modelValue: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    location: import("../../util/index.js").Anchor | null;
    transition: string | boolean | (import("vue").TransitionProps & {
        component?: import("vue").Component | undefined;
    }) | null;
    bordered: boolean;
    dot: boolean;
    floating: boolean;
    inline: boolean;
    label: string;
    modelValue: boolean;
} & {
    theme?: string | undefined;
    class?: any;
    rounded?: string | number | boolean | undefined;
    height?: string | number | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    width?: string | number | undefined;
    color?: string | undefined;
    content?: string | number | undefined;
    icon?: IconValue | undefined;
    max?: string | number | undefined;
    offsetX?: string | number | undefined;
    offsetY?: string | number | undefined;
    textColor?: string | undefined;
} & {
    $children?: {
        default?: (() => import("vue").VNodeChild) | undefined;
        badge?: (() => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
        badge?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:badge"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    style: import("vue").StyleValue;
    rounded: string | number | boolean;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    location: import("../../util/index.js").Anchor | null;
    transition: string | boolean | (import("vue").TransitionProps & {
        component?: import("vue").Component | undefined;
    }) | null;
    bordered: boolean;
    dot: boolean;
    floating: boolean;
    inline: boolean;
    label: string;
    modelValue: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    badge: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
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
    height: (NumberConstructor | StringConstructor)[];
    maxHeight: (NumberConstructor | StringConstructor)[];
    maxWidth: (NumberConstructor | StringConstructor)[];
    minHeight: (NumberConstructor | StringConstructor)[];
    minWidth: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    location: {
        type: import("vue").PropType<import("../../util/index.js").Anchor | null>;
        default: NonNullable<import("../../util/index.js").Anchor | null>;
    };
    transition: {
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null>;
    };
    bordered: BooleanConstructor;
    color: StringConstructor;
    content: (NumberConstructor | StringConstructor)[];
    dot: BooleanConstructor;
    floating: BooleanConstructor;
    icon: import("vue").PropType<IconValue>;
    inline: BooleanConstructor;
    label: {
        type: StringConstructor;
        default: string;
    };
    max: (NumberConstructor | StringConstructor)[];
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    offsetX: (NumberConstructor | StringConstructor)[];
    offsetY: (NumberConstructor | StringConstructor)[];
    textColor: StringConstructor;
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
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
    height: (NumberConstructor | StringConstructor)[];
    maxHeight: (NumberConstructor | StringConstructor)[];
    maxWidth: (NumberConstructor | StringConstructor)[];
    minHeight: (NumberConstructor | StringConstructor)[];
    minWidth: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    location: {
        type: import("vue").PropType<import("../../util/index.js").Anchor | null>;
        default: NonNullable<import("../../util/index.js").Anchor | null>;
    };
    transition: {
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component | undefined;
        }) | null>;
    };
    bordered: BooleanConstructor;
    color: StringConstructor;
    content: (NumberConstructor | StringConstructor)[];
    dot: BooleanConstructor;
    floating: BooleanConstructor;
    icon: import("vue").PropType<IconValue>;
    inline: BooleanConstructor;
    label: {
        type: StringConstructor;
        default: string;
    };
    max: (NumberConstructor | StringConstructor)[];
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    offsetX: (NumberConstructor | StringConstructor)[];
    offsetY: (NumberConstructor | StringConstructor)[];
    textColor: StringConstructor;
}>>;
export type VBadge = InstanceType<typeof VBadge>;
