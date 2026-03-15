// Styles

// Types
import type { PropType } from 'vue';
import type { SelectItemKey } from '../../util/index.js';
export type AvatarGroupItem = string | Record<string, any>;
export type VAvatarGroupSlots = {
    default: never;
    prepend: never;
    append: never;
    item: {
        props: any;
        index: number;
    };
    overflow: {
        overflow: number;
    };
};
export declare const makeVAvatarGroupProps: <Defaults extends {
    class?: unknown;
    style?: unknown;
    tag?: unknown;
    border?: unknown;
    gap?: unknown;
    hoverable?: unknown;
    items?: unknown;
    itemProps?: unknown;
    limit?: unknown;
    overflowText?: unknown;
    reverse?: unknown;
    size?: unknown;
    vertical?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
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
    border: unknown extends Defaults["border"] ? (BooleanConstructor | NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["border"] ? string | number | boolean : string | number | boolean | Defaults["border"]>;
        default: unknown extends Defaults["border"] ? string | number | boolean : Defaults["border"] | NonNullable<string | number | boolean>;
    };
    gap: unknown extends Defaults["gap"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["gap"] ? string | number : string | number | Defaults["gap"]>;
        default: unknown extends Defaults["gap"] ? string | number : Defaults["gap"] | NonNullable<string | number>;
    };
    hoverable: unknown extends Defaults["hoverable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hoverable"] ? boolean : boolean | Defaults["hoverable"]>;
        default: unknown extends Defaults["hoverable"] ? boolean : boolean | Defaults["hoverable"];
    };
    items: unknown extends Defaults["items"] ? {
        type: PropType<AvatarGroupItem[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<AvatarGroupItem[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["items"] ? AvatarGroupItem[] : AvatarGroupItem[] | Defaults["items"]>;
        default: unknown extends Defaults["items"] ? AvatarGroupItem[] : AvatarGroupItem[] | Defaults["items"];
    };
    itemProps: unknown extends Defaults["itemProps"] ? {
        type: PropType<SelectItemKey>;
        default: null;
    } : Omit<{
        type: PropType<SelectItemKey>;
        default: null;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["itemProps"] ? SelectItemKey : Defaults["itemProps"] | SelectItemKey>;
        default: unknown extends Defaults["itemProps"] ? SelectItemKey : Defaults["itemProps"] | NonNullable<SelectItemKey>;
    };
    limit: unknown extends Defaults["limit"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["limit"] ? string | number : string | number | Defaults["limit"]>;
        default: unknown extends Defaults["limit"] ? string | number : Defaults["limit"] | NonNullable<string | number>;
    };
    overflowText: unknown extends Defaults["overflowText"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["overflowText"] ? string : string | Defaults["overflowText"]>;
        default: unknown extends Defaults["overflowText"] ? string : string | Defaults["overflowText"];
    };
    reverse: unknown extends Defaults["reverse"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["reverse"] ? boolean : boolean | Defaults["reverse"]>;
        default: unknown extends Defaults["reverse"] ? boolean : boolean | Defaults["reverse"];
    };
    size: unknown extends Defaults["size"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["size"] ? string | number : string | number | Defaults["size"]>;
        default: unknown extends Defaults["size"] ? string | number : Defaults["size"] | NonNullable<string | number>;
    };
    vertical: unknown extends Defaults["vertical"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["vertical"] ? boolean : boolean | Defaults["vertical"]>;
        default: unknown extends Defaults["vertical"] ? boolean : boolean | Defaults["vertical"];
    };
};
export declare const VAvatarGroup: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        tag: string | import("../../util/index.js").JSXComponent;
        hoverable: boolean;
        items: AvatarGroupItem[];
        itemProps: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        reverse: boolean;
        vertical: boolean;
    } & {
        class?: any;
        border?: string | number | boolean | undefined;
        gap?: string | number | undefined;
        limit?: string | number | undefined;
        overflowText?: string | undefined;
        size?: string | number | undefined;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
            prepend?: (() => import("vue").VNodeChild) | undefined;
            append?: (() => import("vue").VNodeChild) | undefined;
            item?: ((arg: {
                props: any;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
            overflow?: ((arg: {
                overflow: number;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            prepend?: false | (() => import("vue").VNodeChild) | undefined;
            append?: false | (() => import("vue").VNodeChild) | undefined;
            item?: false | ((arg: {
                props: any;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
            overflow?: false | ((arg: {
                overflow: number;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: {
            props: any;
            index: number;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:overflow"?: false | ((arg: {
            overflow: number;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        hoverable: boolean;
        items: AvatarGroupItem[];
        itemProps: SelectItemKey;
        reverse: boolean;
        vertical: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        prepend: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        append: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        item: (arg: {
            props: any;
            index: number;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        overflow: (arg: {
            overflow: number;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        hoverable: boolean;
        items: AvatarGroupItem[];
        itemProps: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        reverse: boolean;
        vertical: boolean;
    } & {
        class?: any;
        border?: string | number | boolean | undefined;
        gap?: string | number | undefined;
        limit?: string | number | undefined;
        overflowText?: string | undefined;
        size?: string | number | undefined;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
            prepend?: (() => import("vue").VNodeChild) | undefined;
            append?: (() => import("vue").VNodeChild) | undefined;
            item?: ((arg: {
                props: any;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
            overflow?: ((arg: {
                overflow: number;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            prepend?: false | (() => import("vue").VNodeChild) | undefined;
            append?: false | (() => import("vue").VNodeChild) | undefined;
            item?: false | ((arg: {
                props: any;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
            overflow?: false | ((arg: {
                overflow: number;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: {
            props: any;
            index: number;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:overflow"?: false | ((arg: {
            overflow: number;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        hoverable: boolean;
        items: AvatarGroupItem[];
        itemProps: SelectItemKey;
        reverse: boolean;
        vertical: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    tag: string | import("../../util/index.js").JSXComponent;
    hoverable: boolean;
    items: AvatarGroupItem[];
    itemProps: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
    reverse: boolean;
    vertical: boolean;
} & {
    class?: any;
    border?: string | number | boolean | undefined;
    gap?: string | number | undefined;
    limit?: string | number | undefined;
    overflowText?: string | undefined;
    size?: string | number | undefined;
} & {
    $children?: {
        default?: (() => import("vue").VNodeChild) | undefined;
        prepend?: (() => import("vue").VNodeChild) | undefined;
        append?: (() => import("vue").VNodeChild) | undefined;
        item?: ((arg: {
            props: any;
            index: number;
        }) => import("vue").VNodeChild) | undefined;
        overflow?: ((arg: {
            overflow: number;
        }) => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
        prepend?: false | (() => import("vue").VNodeChild) | undefined;
        append?: false | (() => import("vue").VNodeChild) | undefined;
        item?: false | ((arg: {
            props: any;
            index: number;
        }) => import("vue").VNodeChild) | undefined;
        overflow?: false | ((arg: {
            overflow: number;
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:item"?: false | ((arg: {
        props: any;
        index: number;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:overflow"?: false | ((arg: {
        overflow: number;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    style: import("vue").StyleValue;
    tag: string | import("../../util/index.js").JSXComponent;
    hoverable: boolean;
    items: AvatarGroupItem[];
    itemProps: SelectItemKey;
    reverse: boolean;
    vertical: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    prepend: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    append: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    item: (arg: {
        props: any;
        index: number;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    overflow: (arg: {
        overflow: number;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    border: (BooleanConstructor | NumberConstructor | StringConstructor)[];
    gap: (NumberConstructor | StringConstructor)[];
    hoverable: BooleanConstructor;
    items: {
        type: PropType<AvatarGroupItem[]>;
        default: () => never[];
    };
    itemProps: {
        type: PropType<SelectItemKey>;
        default: null;
    };
    limit: (NumberConstructor | StringConstructor)[];
    overflowText: StringConstructor;
    reverse: BooleanConstructor;
    size: (NumberConstructor | StringConstructor)[];
    vertical: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    border: (BooleanConstructor | NumberConstructor | StringConstructor)[];
    gap: (NumberConstructor | StringConstructor)[];
    hoverable: BooleanConstructor;
    items: {
        type: PropType<AvatarGroupItem[]>;
        default: () => never[];
    };
    itemProps: {
        type: PropType<SelectItemKey>;
        default: null;
    };
    limit: (NumberConstructor | StringConstructor)[];
    overflowText: StringConstructor;
    reverse: BooleanConstructor;
    size: (NumberConstructor | StringConstructor)[];
    vertical: BooleanConstructor;
}>>;
export type VAvatarGroup = InstanceType<typeof VAvatarGroup>;
