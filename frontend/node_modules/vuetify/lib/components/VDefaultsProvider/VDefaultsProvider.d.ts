// Types
import type { PropType } from 'vue';
import type { DefaultsOptions } from '../../composables/defaults.js';
export declare const makeVDefaultsProviderProps: <Defaults extends {
    defaults?: unknown;
    disabled?: unknown;
    reset?: unknown;
    root?: unknown;
    scoped?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    defaults: unknown extends Defaults["defaults"] ? PropType<DefaultsOptions> : {
        type: PropType<unknown extends Defaults["defaults"] ? DefaultsOptions : Defaults["defaults"] | DefaultsOptions>;
        default: unknown extends Defaults["defaults"] ? DefaultsOptions : Partial<{
            [key: string]: Record<string, unknown> | undefined;
            global?: Record<string, unknown> | undefined;
        }> | Defaults["defaults"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    reset: unknown extends Defaults["reset"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["reset"] ? string | number : string | number | Defaults["reset"]>;
        default: unknown extends Defaults["reset"] ? string | number : Defaults["reset"] | NonNullable<string | number>;
    };
    root: unknown extends Defaults["root"] ? (BooleanConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["root"] ? string | boolean : string | boolean | Defaults["root"]>;
        default: unknown extends Defaults["root"] ? string | boolean : Defaults["root"] | NonNullable<string | boolean>;
    };
    scoped: unknown extends Defaults["scoped"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["scoped"] ? boolean : boolean | Defaults["scoped"]>;
        default: unknown extends Defaults["scoped"] ? boolean : boolean | Defaults["scoped"];
    };
};
export declare const VDefaultsProvider: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        disabled: boolean;
        scoped: boolean;
    } & {
        defaults?: DefaultsOptions;
        reset?: string | number | undefined;
        root?: string | boolean | undefined;
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
    }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[] | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        disabled: boolean;
        scoped: boolean;
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
        disabled: boolean;
        scoped: boolean;
    } & {
        defaults?: DefaultsOptions;
        reset?: string | number | undefined;
        root?: string | boolean | undefined;
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
    }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[] | undefined, {}, {}, {}, {
        disabled: boolean;
        scoped: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    disabled: boolean;
    scoped: boolean;
} & {
    defaults?: DefaultsOptions;
    reset?: string | number | undefined;
    root?: string | boolean | undefined;
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
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[] | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    disabled: boolean;
    scoped: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    defaults: PropType<DefaultsOptions>;
    disabled: BooleanConstructor;
    reset: (NumberConstructor | StringConstructor)[];
    root: (BooleanConstructor | StringConstructor)[];
    scoped: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    defaults: PropType<DefaultsOptions>;
    disabled: BooleanConstructor;
    reset: (NumberConstructor | StringConstructor)[];
    root: (BooleanConstructor | StringConstructor)[];
    scoped: BooleanConstructor;
}>>;
export type VDefaultsProvider = InstanceType<typeof VDefaultsProvider>;
