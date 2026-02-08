// Styles

// Composables
import { IconValue } from '../../composables/icons.js';
// Types
import type { PropType } from 'vue';
export declare const makeVDatePickerControlsProps: <Defaults extends {
    active?: unknown;
    controlHeight?: unknown;
    disabled?: unknown;
    nextIcon?: unknown;
    prevIcon?: unknown;
    modeIcon?: unknown;
    text?: unknown;
    viewMode?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    active: unknown extends Defaults["active"] ? {
        type: PropType<string | string[]>;
        default: undefined;
    } : Omit<{
        type: PropType<string | string[]>;
        default: undefined;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["active"] ? string | string[] : string | string[] | Defaults["active"]>;
        default: unknown extends Defaults["active"] ? string | string[] : Defaults["active"] | NonNullable<string | string[]>;
    };
    controlHeight: unknown extends Defaults["controlHeight"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["controlHeight"] ? string | number : string | number | Defaults["controlHeight"]>;
        default: unknown extends Defaults["controlHeight"] ? string | number : Defaults["controlHeight"] | NonNullable<string | number>;
    };
    disabled: unknown extends Defaults["disabled"] ? {
        type: PropType<string | boolean | string[] | null>;
        default: null;
    } : Omit<{
        type: PropType<string | boolean | string[] | null>;
        default: null;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["disabled"] ? string | boolean | string[] | null : string | boolean | string[] | Defaults["disabled"] | null>;
        default: unknown extends Defaults["disabled"] ? string | boolean | string[] | null : Defaults["disabled"] | NonNullable<string | boolean | string[] | null>;
    };
    nextIcon: unknown extends Defaults["nextIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["nextIcon"] ? IconValue : Defaults["nextIcon"] | IconValue>;
        default: unknown extends Defaults["nextIcon"] ? IconValue : Defaults["nextIcon"] | NonNullable<IconValue>;
    };
    prevIcon: unknown extends Defaults["prevIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["prevIcon"] ? IconValue : Defaults["prevIcon"] | IconValue>;
        default: unknown extends Defaults["prevIcon"] ? IconValue : Defaults["prevIcon"] | NonNullable<IconValue>;
    };
    modeIcon: unknown extends Defaults["modeIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["modeIcon"] ? IconValue : Defaults["modeIcon"] | IconValue>;
        default: unknown extends Defaults["modeIcon"] ? IconValue : Defaults["modeIcon"] | NonNullable<IconValue>;
    };
    text: unknown extends Defaults["text"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["text"] ? string : string | Defaults["text"]>;
        default: unknown extends Defaults["text"] ? string : string | Defaults["text"];
    };
    viewMode: unknown extends Defaults["viewMode"] ? {
        type: PropType<"month" | "months" | "year">;
        default: string;
    } : Omit<{
        type: PropType<"month" | "months" | "year">;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["viewMode"] ? "month" | "months" | "year" : "month" | "months" | "year" | Defaults["viewMode"]>;
        default: unknown extends Defaults["viewMode"] ? "month" | "months" | "year" : Defaults["viewMode"] | NonNullable<"month" | "months" | "year">;
    };
};
export declare const VDatePickerControls: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        disabled: string | boolean | string[] | null;
        nextIcon: IconValue;
        prevIcon: IconValue;
        modeIcon: IconValue;
        viewMode: "month" | "months" | "year";
    } & {
        active?: string | string[] | undefined;
        controlHeight?: string | number | undefined;
        text?: string | undefined;
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
    } & {
        "onClick:month"?: (() => any) | undefined;
        "onClick:next"?: (() => any) | undefined;
        "onClick:prev"?: (() => any) | undefined;
        "onClick:text"?: (() => any) | undefined;
        "onClick:year"?: (() => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "click:year": () => true;
        "click:month": () => true;
        "click:prev": () => true;
        "click:next": () => true;
        "click:text": () => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        active: string | string[];
        disabled: string | boolean | string[] | null;
        nextIcon: IconValue;
        prevIcon: IconValue;
        modeIcon: IconValue;
        viewMode: "month" | "months" | "year";
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
        disabled: string | boolean | string[] | null;
        nextIcon: IconValue;
        prevIcon: IconValue;
        modeIcon: IconValue;
        viewMode: "month" | "months" | "year";
    } & {
        active?: string | string[] | undefined;
        controlHeight?: string | number | undefined;
        text?: string | undefined;
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
    } & {
        "onClick:month"?: (() => any) | undefined;
        "onClick:next"?: (() => any) | undefined;
        "onClick:prev"?: (() => any) | undefined;
        "onClick:text"?: (() => any) | undefined;
        "onClick:year"?: (() => any) | undefined;
    }, {}, {}, {}, {}, {
        active: string | string[];
        disabled: string | boolean | string[] | null;
        nextIcon: IconValue;
        prevIcon: IconValue;
        modeIcon: IconValue;
        viewMode: "month" | "months" | "year";
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    disabled: string | boolean | string[] | null;
    nextIcon: IconValue;
    prevIcon: IconValue;
    modeIcon: IconValue;
    viewMode: "month" | "months" | "year";
} & {
    active?: string | string[] | undefined;
    controlHeight?: string | number | undefined;
    text?: string | undefined;
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
} & {
    "onClick:month"?: (() => any) | undefined;
    "onClick:next"?: (() => any) | undefined;
    "onClick:prev"?: (() => any) | undefined;
    "onClick:text"?: (() => any) | undefined;
    "onClick:year"?: (() => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "click:year": () => true;
    "click:month": () => true;
    "click:prev": () => true;
    "click:next": () => true;
    "click:text": () => true;
}, string, {
    active: string | string[];
    disabled: string | boolean | string[] | null;
    nextIcon: IconValue;
    prevIcon: IconValue;
    modeIcon: IconValue;
    viewMode: "month" | "months" | "year";
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    active: {
        type: PropType<string | string[]>;
        default: undefined;
    };
    controlHeight: (NumberConstructor | StringConstructor)[];
    disabled: {
        type: PropType<string | boolean | string[] | null>;
        default: null;
    };
    nextIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    modeIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    text: StringConstructor;
    viewMode: {
        type: PropType<"month" | "months" | "year">;
        default: string;
    };
}, import("vue").ExtractPropTypes<{
    active: {
        type: PropType<string | string[]>;
        default: undefined;
    };
    controlHeight: (NumberConstructor | StringConstructor)[];
    disabled: {
        type: PropType<string | boolean | string[] | null>;
        default: null;
    };
    nextIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    modeIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    text: StringConstructor;
    viewMode: {
        type: PropType<"month" | "months" | "year">;
        default: string;
    };
}>>;
export type VDatePickerControls = InstanceType<typeof VDatePickerControls>;
