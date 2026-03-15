// Styles

export type VPullToRefreshSlots = {
    default: never;
    pullDownPanel: {
        canRefresh: boolean;
        goingUp: boolean;
        refreshing: boolean;
    };
};
export declare const VPullToRefresh: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        disabled: boolean;
        pullDownThreshold: number;
    } & {} & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
            pullDownPanel?: ((arg: {
                canRefresh: boolean;
                goingUp: boolean;
                refreshing: boolean;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            pullDownPanel?: false | ((arg: {
                canRefresh: boolean;
                goingUp: boolean;
                refreshing: boolean;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:pullDownPanel"?: false | ((arg: {
            canRefresh: boolean;
            goingUp: boolean;
            refreshing: boolean;
        }) => import("vue").VNodeChild) | undefined;
    } & {
        onLoad?: ((options: {
            done: () => void;
        }) => any) | undefined;
    }, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        load: (options: {
            done: () => void;
        }) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        disabled: boolean;
        pullDownThreshold: number;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        pullDownPanel: (arg: {
            canRefresh: boolean;
            goingUp: boolean;
            refreshing: boolean;
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
        disabled: boolean;
        pullDownThreshold: number;
    } & {} & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
            pullDownPanel?: ((arg: {
                canRefresh: boolean;
                goingUp: boolean;
                refreshing: boolean;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            pullDownPanel?: false | ((arg: {
                canRefresh: boolean;
                goingUp: boolean;
                refreshing: boolean;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:pullDownPanel"?: false | ((arg: {
            canRefresh: boolean;
            goingUp: boolean;
            refreshing: boolean;
        }) => import("vue").VNodeChild) | undefined;
    } & {
        onLoad?: ((options: {
            done: () => void;
        }) => any) | undefined;
    }, {}, {}, {}, {}, {
        disabled: boolean;
        pullDownThreshold: number;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    disabled: boolean;
    pullDownThreshold: number;
} & {} & {
    $children?: {
        default?: (() => import("vue").VNodeChild) | undefined;
        pullDownPanel?: ((arg: {
            canRefresh: boolean;
            goingUp: boolean;
            refreshing: boolean;
        }) => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
        pullDownPanel?: false | ((arg: {
            canRefresh: boolean;
            goingUp: boolean;
            refreshing: boolean;
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:pullDownPanel"?: false | ((arg: {
        canRefresh: boolean;
        goingUp: boolean;
        refreshing: boolean;
    }) => import("vue").VNodeChild) | undefined;
} & {
    onLoad?: ((options: {
        done: () => void;
    }) => any) | undefined;
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    load: (options: {
        done: () => void;
    }) => true;
}, string, {
    disabled: boolean;
    pullDownThreshold: number;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    pullDownPanel: (arg: {
        canRefresh: boolean;
        goingUp: boolean;
        refreshing: boolean;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    disabled: BooleanConstructor;
    pullDownThreshold: {
        type: NumberConstructor;
        default: number;
    };
}, import("vue").ExtractPropTypes<{
    disabled: BooleanConstructor;
    pullDownThreshold: {
        type: NumberConstructor;
        default: number;
    };
}>>;
export type VPullToRefresh = InstanceType<typeof VPullToRefresh>;
