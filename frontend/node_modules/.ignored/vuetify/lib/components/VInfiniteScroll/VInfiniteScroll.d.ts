// Styles

// Types
import type { PropType } from 'vue';
export type InfiniteScrollSide = 'start' | 'end' | 'both';
export type InfiniteScrollStatus = 'ok' | 'empty' | 'loading' | 'error';
type InfiniteScrollSlot = {
    side: InfiniteScrollSide;
    props: Record<string, any>;
};
export declare const makeVInfiniteScrollProps: <Defaults extends {
    tag?: unknown;
    height?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    width?: unknown;
    color?: unknown;
    direction?: unknown;
    side?: unknown;
    mode?: unknown;
    margin?: unknown;
    loadMoreText?: unknown;
    emptyText?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
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
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    direction: unknown extends Defaults["direction"] ? {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["direction"] ? "horizontal" | "vertical" : "horizontal" | "vertical" | Defaults["direction"]>;
        default: unknown extends Defaults["direction"] ? "horizontal" | "vertical" : Defaults["direction"] | NonNullable<"horizontal" | "vertical">;
    };
    side: unknown extends Defaults["side"] ? {
        type: PropType<InfiniteScrollSide>;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<InfiniteScrollSide>;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["side"] ? InfiniteScrollSide : Defaults["side"] | InfiniteScrollSide>;
        default: unknown extends Defaults["side"] ? InfiniteScrollSide : Defaults["side"] | NonNullable<InfiniteScrollSide>;
    };
    mode: unknown extends Defaults["mode"] ? {
        type: PropType<"intersect" | "manual">;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<"intersect" | "manual">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["mode"] ? "intersect" | "manual" : "intersect" | "manual" | Defaults["mode"]>;
        default: unknown extends Defaults["mode"] ? "intersect" | "manual" : Defaults["mode"] | NonNullable<"intersect" | "manual">;
    };
    margin: unknown extends Defaults["margin"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["margin"] ? string | number : string | number | Defaults["margin"]>;
        default: unknown extends Defaults["margin"] ? string | number : Defaults["margin"] | NonNullable<string | number>;
    };
    loadMoreText: unknown extends Defaults["loadMoreText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["loadMoreText"] ? string : string | Defaults["loadMoreText"]>;
        default: unknown extends Defaults["loadMoreText"] ? string : string | Defaults["loadMoreText"];
    };
    emptyText: unknown extends Defaults["emptyText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["emptyText"] ? string : string | Defaults["emptyText"]>;
        default: unknown extends Defaults["emptyText"] ? string : string | Defaults["emptyText"];
    };
};
export declare const VInfiniteScrollIntersect: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        side: {
            type: PropType<InfiniteScrollSide>;
            required: true;
        };
        rootMargin: StringConstructor;
    }>> & {
        onIntersect?: ((side: InfiniteScrollSide, isIntersecting: boolean) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        intersect: (side: InfiniteScrollSide, isIntersecting: boolean) => true;
    }, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        side: {
            type: PropType<InfiniteScrollSide>;
            required: true;
        };
        rootMargin: StringConstructor;
    }>> & {
        onIntersect?: ((side: InfiniteScrollSide, isIntersecting: boolean) => any) | undefined;
    }, {}, {}, {}, {}, {}>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    side: {
        type: PropType<InfiniteScrollSide>;
        required: true;
    };
    rootMargin: StringConstructor;
}>> & {
    onIntersect?: ((side: InfiniteScrollSide, isIntersecting: boolean) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    intersect: (side: InfiniteScrollSide, isIntersecting: boolean) => true;
}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    side: {
        type: PropType<InfiniteScrollSide>;
        required: true;
    };
    rootMargin: StringConstructor;
}, import("vue").ExtractPropTypes<{
    side: {
        type: PropType<InfiniteScrollSide>;
        required: true;
    };
    rootMargin: StringConstructor;
}>>;
export declare const VInfiniteScroll: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        tag: string | import("../../util/index.js").JSXComponent;
        direction: "horizontal" | "vertical";
        side: InfiniteScrollSide;
        mode: "intersect" | "manual";
        loadMoreText: string;
        emptyText: string;
    } & {
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        margin?: string | number | undefined;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
            loading?: ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
            error?: ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
            empty?: ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
            "load-more"?: ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            loading?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
            error?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
            empty?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
            "load-more"?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:empty"?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:error"?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:load-more"?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:loading"?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
    } & {
        onLoad?: ((options: {
            side: InfiniteScrollSide;
            done: (status: InfiniteScrollStatus) => void;
        }) => any) | undefined;
    }, {
        reset: (side?: InfiniteScrollSide | undefined) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        load: (options: {
            side: InfiniteScrollSide;
            done: (status: InfiniteScrollStatus) => void;
        }) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        tag: string | import("../../util/index.js").JSXComponent;
        direction: "horizontal" | "vertical";
        side: InfiniteScrollSide;
        mode: "intersect" | "manual";
        loadMoreText: string;
        emptyText: string;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        loading: (arg: InfiniteScrollSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        error: (arg: InfiniteScrollSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        empty: (arg: InfiniteScrollSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "load-more": (arg: InfiniteScrollSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        tag: string | import("../../util/index.js").JSXComponent;
        direction: "horizontal" | "vertical";
        side: InfiniteScrollSide;
        mode: "intersect" | "manual";
        loadMoreText: string;
        emptyText: string;
    } & {
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        margin?: string | number | undefined;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
            loading?: ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
            error?: ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
            empty?: ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
            "load-more"?: ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            loading?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
            error?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
            empty?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
            "load-more"?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:empty"?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:error"?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:load-more"?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:loading"?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
    } & {
        onLoad?: ((options: {
            side: InfiniteScrollSide;
            done: (status: InfiniteScrollStatus) => void;
        }) => any) | undefined;
    }, {
        reset: (side?: InfiniteScrollSide | undefined) => void;
    }, {}, {}, {}, {
        tag: string | import("../../util/index.js").JSXComponent;
        direction: "horizontal" | "vertical";
        side: InfiniteScrollSide;
        mode: "intersect" | "manual";
        loadMoreText: string;
        emptyText: string;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    tag: string | import("../../util/index.js").JSXComponent;
    direction: "horizontal" | "vertical";
    side: InfiniteScrollSide;
    mode: "intersect" | "manual";
    loadMoreText: string;
    emptyText: string;
} & {
    height?: string | number | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    width?: string | number | undefined;
    color?: string | undefined;
    margin?: string | number | undefined;
} & {
    $children?: {
        default?: (() => import("vue").VNodeChild) | undefined;
        loading?: ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
        error?: ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
        empty?: ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
        "load-more"?: ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
        loading?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
        error?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
        empty?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
        "load-more"?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:empty"?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:error"?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:load-more"?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:loading"?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
} & {
    onLoad?: ((options: {
        side: InfiniteScrollSide;
        done: (status: InfiniteScrollStatus) => void;
    }) => any) | undefined;
}, {
    reset: (side?: InfiniteScrollSide | undefined) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    load: (options: {
        side: InfiniteScrollSide;
        done: (status: InfiniteScrollStatus) => void;
    }) => true;
}, string, {
    tag: string | import("../../util/index.js").JSXComponent;
    direction: "horizontal" | "vertical";
    side: InfiniteScrollSide;
    mode: "intersect" | "manual";
    loadMoreText: string;
    emptyText: string;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    loading: (arg: InfiniteScrollSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    error: (arg: InfiniteScrollSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    empty: (arg: InfiniteScrollSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "load-more": (arg: InfiniteScrollSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
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
    color: StringConstructor;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    side: {
        type: PropType<InfiniteScrollSide>;
        default: string;
        validator: (v: any) => boolean;
    };
    mode: {
        type: PropType<"intersect" | "manual">;
        default: string;
        validator: (v: any) => boolean;
    };
    margin: (NumberConstructor | StringConstructor)[];
    loadMoreText: {
        type: StringConstructor;
        default: string;
    };
    emptyText: {
        type: StringConstructor;
        default: string;
    };
}, import("vue").ExtractPropTypes<{
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
    color: StringConstructor;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    side: {
        type: PropType<InfiniteScrollSide>;
        default: string;
        validator: (v: any) => boolean;
    };
    mode: {
        type: PropType<"intersect" | "manual">;
        default: string;
        validator: (v: any) => boolean;
    };
    margin: (NumberConstructor | StringConstructor)[];
    loadMoreText: {
        type: StringConstructor;
        default: string;
    };
    emptyText: {
        type: StringConstructor;
        default: string;
    };
}>>;
export type VInfiniteScroll = InstanceType<typeof VInfiniteScroll>;

