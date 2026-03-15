// Types
import type { PropType } from 'vue';
import type { VCommandPaletteActionItem } from './types.js';
export declare const makeVCommandPaletteItemProps: <Defaults extends {
    item?: unknown;
    index?: unknown;
    onExecute?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    item: unknown extends Defaults["item"] ? {
        type: PropType<VCommandPaletteActionItem>;
        required: true;
    } : Omit<{
        type: PropType<VCommandPaletteActionItem>;
        required: true;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["item"] ? VCommandPaletteActionItem : VCommandPaletteActionItem | Defaults["item"]>;
        default: unknown extends Defaults["item"] ? VCommandPaletteActionItem : VCommandPaletteActionItem | Defaults["item"];
    };
    index: unknown extends Defaults["index"] ? {
        type: NumberConstructor;
        required: true;
    } : Omit<{
        type: NumberConstructor;
        required: true;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["index"] ? number : number | Defaults["index"]>;
        default: unknown extends Defaults["index"] ? number : number | Defaults["index"];
    };
    onExecute: unknown extends Defaults["onExecute"] ? PropType<(event: KeyboardEvent | MouseEvent) => void> : {
        type: PropType<unknown extends Defaults["onExecute"] ? (event: KeyboardEvent | MouseEvent) => void : ((event: KeyboardEvent | MouseEvent) => void) | Defaults["onExecute"]>;
        default: unknown extends Defaults["onExecute"] ? (event: KeyboardEvent | MouseEvent) => void : ((event: KeyboardEvent | MouseEvent) => void) | Defaults["onExecute"];
    };
};
export type VCommandPaletteItemSlots = {
    prepend: never;
    title: never;
    append: never;
};
export declare const VCommandPaletteItemComponent: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        item: VCommandPaletteActionItem;
        index: number;
    } & {
        onExecute?: ((event: KeyboardEvent | MouseEvent) => void) | undefined;
    } & {
        $children?: {
            prepend?: (() => import("vue").VNodeChild) | undefined;
            title?: (() => import("vue").VNodeChild) | undefined;
            append?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | {} | import("vue").VNodeChild;
        "v-slots"?: {
            prepend?: false | (() => import("vue").VNodeChild) | undefined;
            title?: false | (() => import("vue").VNodeChild) | undefined;
            append?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
    }, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
        prepend: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        title: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        append: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        item: VCommandPaletteActionItem;
        index: number;
    } & {
        onExecute?: ((event: KeyboardEvent | MouseEvent) => void) | undefined;
    } & {
        $children?: {
            prepend?: (() => import("vue").VNodeChild) | undefined;
            title?: (() => import("vue").VNodeChild) | undefined;
            append?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | {} | import("vue").VNodeChild;
        "v-slots"?: {
            prepend?: false | (() => import("vue").VNodeChild) | undefined;
            title?: false | (() => import("vue").VNodeChild) | undefined;
            append?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
    }, {}, {}, {}, {}, {}>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    item: VCommandPaletteActionItem;
    index: number;
} & {
    onExecute?: ((event: KeyboardEvent | MouseEvent) => void) | undefined;
} & {
    $children?: {
        prepend?: (() => import("vue").VNodeChild) | undefined;
        title?: (() => import("vue").VNodeChild) | undefined;
        append?: (() => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | {} | import("vue").VNodeChild;
    "v-slots"?: {
        prepend?: false | (() => import("vue").VNodeChild) | undefined;
        title?: false | (() => import("vue").VNodeChild) | undefined;
        append?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
    prepend: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    title: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    append: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    item: {
        type: PropType<VCommandPaletteActionItem>;
        required: true;
    };
    index: {
        type: NumberConstructor;
        required: true;
    };
    onExecute: PropType<(event: KeyboardEvent | MouseEvent) => void>;
}, import("vue").ExtractPropTypes<{
    item: {
        type: PropType<VCommandPaletteActionItem>;
        required: true;
    };
    index: {
        type: NumberConstructor;
        required: true;
    };
    onExecute: PropType<(event: KeyboardEvent | MouseEvent) => void>;
}>>;
export type VCommandPaletteItemComponent = InstanceType<typeof VCommandPaletteItemComponent>;
