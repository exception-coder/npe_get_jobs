// Styles

// Types
import type { Prop } from 'vue';
export type TimelineDirection = 'vertical' | 'horizontal';
export type TimelineSide = 'start' | 'end' | undefined;
export type TimelineAlign = 'center' | 'start';
export type TimelineTruncateLine = 'start' | 'end' | 'both' | undefined;
export declare const makeVTimelineProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
    density?: unknown;
    tag?: unknown;
    size?: unknown;
    dotColor?: unknown;
    fillDot?: unknown;
    hideOpposite?: unknown;
    iconColor?: unknown;
    lineInset?: unknown;
    align?: unknown;
    direction?: unknown;
    justify?: unknown;
    side?: unknown;
    lineThickness?: unknown;
    lineColor?: unknown;
    truncateLine?: unknown;
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
    density: unknown extends Defaults["density"] ? {
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["density"] ? import("../../composables/density.js").Density : Defaults["density"] | import("../../composables/density.js").Density>;
        default: unknown extends Defaults["density"] ? import("../../composables/density.js").Density : Defaults["density"] | NonNullable<import("../../composables/density.js").Density>;
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
    hideOpposite: unknown extends Defaults["hideOpposite"] ? {
        type: BooleanConstructor;
        default: undefined;
    } : Omit<{
        type: BooleanConstructor;
        default: undefined;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["hideOpposite"] ? boolean : boolean | Defaults["hideOpposite"]>;
        default: unknown extends Defaults["hideOpposite"] ? boolean : boolean | Defaults["hideOpposite"];
    };
    iconColor: unknown extends Defaults["iconColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["iconColor"] ? string : string | Defaults["iconColor"]>;
        default: unknown extends Defaults["iconColor"] ? string : string | Defaults["iconColor"];
    };
    lineInset: unknown extends Defaults["lineInset"] ? {
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    } : Omit<{
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["lineInset"] ? string | number : string | number | Defaults["lineInset"]>;
        default: unknown extends Defaults["lineInset"] ? string | number : Defaults["lineInset"] | NonNullable<string | number>;
    };
    align: unknown extends Defaults["align"] ? Prop<TimelineAlign> : {
        type: import("vue").PropType<unknown extends Defaults["align"] ? TimelineAlign : Defaults["align"] | TimelineAlign>;
        default: unknown extends Defaults["align"] ? TimelineAlign : Defaults["align"] | NonNullable<TimelineAlign>;
    };
    direction: unknown extends Defaults["direction"] ? Prop<TimelineDirection> : {
        type: import("vue").PropType<unknown extends Defaults["direction"] ? TimelineDirection : Defaults["direction"] | TimelineDirection>;
        default: unknown extends Defaults["direction"] ? TimelineDirection : Defaults["direction"] | NonNullable<TimelineDirection>;
    };
    justify: unknown extends Defaults["justify"] ? {
        type: StringConstructor;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: StringConstructor;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["justify"] ? string : string | Defaults["justify"]>;
        default: unknown extends Defaults["justify"] ? string : string | Defaults["justify"];
    };
    side: unknown extends Defaults["side"] ? Prop<TimelineSide> : {
        type: import("vue").PropType<unknown extends Defaults["side"] ? TimelineSide : Defaults["side"] | TimelineSide>;
        default: unknown extends Defaults["side"] ? TimelineSide : Defaults["side"] | NonNullable<TimelineSide>;
    };
    lineThickness: unknown extends Defaults["lineThickness"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["lineThickness"] ? string | number : string | number | Defaults["lineThickness"]>;
        default: unknown extends Defaults["lineThickness"] ? string | number : Defaults["lineThickness"] | NonNullable<string | number>;
    };
    lineColor: unknown extends Defaults["lineColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["lineColor"] ? string : string | Defaults["lineColor"]>;
        default: unknown extends Defaults["lineColor"] ? string : string | Defaults["lineColor"];
    };
    truncateLine: unknown extends Defaults["truncateLine"] ? Prop<TimelineTruncateLine> : {
        type: import("vue").PropType<unknown extends Defaults["truncateLine"] ? TimelineTruncateLine : Defaults["truncateLine"] | TimelineTruncateLine>;
        default: unknown extends Defaults["truncateLine"] ? TimelineTruncateLine : Defaults["truncateLine"] | NonNullable<TimelineTruncateLine>;
    };
};
export declare const VTimeline: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        density: import("../../composables/density.js").Density;
        tag: string | import("../../util/index.js").JSXComponent;
        size: string | number;
        fillDot: boolean;
        lineInset: string | number;
        justify: string;
        lineThickness: string | number;
    } & {
        theme?: string | undefined;
        class?: any;
        dotColor?: string | undefined;
        hideOpposite?: boolean | undefined;
        iconColor?: string | undefined;
        align?: TimelineAlign | undefined;
        direction?: TimelineDirection | undefined;
        side?: TimelineSide;
        lineColor?: string | undefined;
        truncateLine?: TimelineTruncateLine;
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
        density: import("../../composables/density.js").Density;
        tag: string | import("../../util/index.js").JSXComponent;
        size: string | number;
        fillDot: boolean;
        hideOpposite: boolean;
        lineInset: string | number;
        justify: string;
        lineThickness: string | number;
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
        density: import("../../composables/density.js").Density;
        tag: string | import("../../util/index.js").JSXComponent;
        size: string | number;
        fillDot: boolean;
        lineInset: string | number;
        justify: string;
        lineThickness: string | number;
    } & {
        theme?: string | undefined;
        class?: any;
        dotColor?: string | undefined;
        hideOpposite?: boolean | undefined;
        iconColor?: string | undefined;
        align?: TimelineAlign | undefined;
        direction?: TimelineDirection | undefined;
        side?: TimelineSide;
        lineColor?: string | undefined;
        truncateLine?: TimelineTruncateLine;
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
        density: import("../../composables/density.js").Density;
        tag: string | import("../../util/index.js").JSXComponent;
        size: string | number;
        fillDot: boolean;
        hideOpposite: boolean;
        lineInset: string | number;
        justify: string;
        lineThickness: string | number;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    density: import("../../composables/density.js").Density;
    tag: string | import("../../util/index.js").JSXComponent;
    size: string | number;
    fillDot: boolean;
    lineInset: string | number;
    justify: string;
    lineThickness: string | number;
} & {
    theme?: string | undefined;
    class?: any;
    dotColor?: string | undefined;
    hideOpposite?: boolean | undefined;
    iconColor?: string | undefined;
    align?: TimelineAlign | undefined;
    direction?: TimelineDirection | undefined;
    side?: TimelineSide;
    lineColor?: string | undefined;
    truncateLine?: TimelineTruncateLine;
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
    density: import("../../composables/density.js").Density;
    tag: string | import("../../util/index.js").JSXComponent;
    size: string | number;
    fillDot: boolean;
    hideOpposite: boolean;
    lineInset: string | number;
    justify: string;
    lineThickness: string | number;
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
    density: {
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    size: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    dotColor: StringConstructor;
    fillDot: BooleanConstructor;
    hideOpposite: {
        type: BooleanConstructor;
        default: undefined;
    };
    iconColor: StringConstructor;
    lineInset: {
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    };
    align: Prop<TimelineAlign>;
    direction: Prop<TimelineDirection>;
    justify: {
        type: StringConstructor;
        default: string;
        validator: (v: any) => boolean;
    };
    side: Prop<TimelineSide>;
    lineThickness: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    lineColor: StringConstructor;
    truncateLine: Prop<TimelineTruncateLine>;
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    density: {
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    size: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    dotColor: StringConstructor;
    fillDot: BooleanConstructor;
    hideOpposite: {
        type: BooleanConstructor;
        default: undefined;
    };
    iconColor: StringConstructor;
    lineInset: {
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    };
    align: Prop<TimelineAlign>;
    direction: Prop<TimelineDirection>;
    justify: {
        type: StringConstructor;
        default: string;
        validator: (v: any) => boolean;
    };
    side: Prop<TimelineSide>;
    lineThickness: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    lineColor: StringConstructor;
    truncateLine: Prop<TimelineTruncateLine>;
}>>;
export type VTimeline = InstanceType<typeof VTimeline>;
