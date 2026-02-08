// Styles

// Types
import type { PropType, Ref } from 'vue';
import type { GenericProps } from '../../util/index.js';
export interface VVirtualScrollSlot<T> {
    item: T;
    index: number;
}
export declare const makeVVirtualScrollProps: <Defaults extends {
    class?: unknown;
    style?: unknown;
    height?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    width?: unknown;
    itemHeight?: unknown;
    itemKey?: unknown;
    items?: unknown;
    renderless?: unknown;
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
    itemHeight: unknown extends Defaults["itemHeight"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["itemHeight"] ? string | number : string | number | Defaults["itemHeight"]>;
        default: unknown extends Defaults["itemHeight"] ? string | number : Defaults["itemHeight"] | NonNullable<string | number>;
    };
    itemKey: unknown extends Defaults["itemKey"] ? {
        type: PropType<import("../../util/index.js").SelectItemKey>;
        default: null;
    } : Omit<{
        type: PropType<import("../../util/index.js").SelectItemKey>;
        default: null;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["itemKey"] ? import("../../util/index.js").SelectItemKey : Defaults["itemKey"] | import("../../util/index.js").SelectItemKey>;
        default: unknown extends Defaults["itemKey"] ? import("../../util/index.js").SelectItemKey : Defaults["itemKey"] | NonNullable<import("../../util/index.js").SelectItemKey>;
    };
    items: unknown extends Defaults["items"] ? {
        type: PropType<readonly unknown[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<readonly unknown[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["items"] ? readonly unknown[] : readonly unknown[] | Defaults["items"]>;
        default: unknown extends Defaults["items"] ? readonly unknown[] : readonly unknown[] | Defaults["items"];
    };
    renderless: unknown extends Defaults["renderless"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["renderless"] ? boolean : boolean | Defaults["renderless"]>;
        default: unknown extends Defaults["renderless"] ? boolean : boolean | Defaults["renderless"];
    };
};
export declare const VVirtualScroll: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        itemHeight: string | number;
        itemKey: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
    } & {
        class?: any;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
    }, {
        calculateVisibleItems: () => void;
        scrollToIndex: (index: number) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<Record<string, any>, "$children" | "items" | "renderless" | "v-slot:default" | "v-slots">, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        itemHeight: string | number;
        itemKey: import("../../util/index.js").SelectItemKey;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: VVirtualScrollSlot<unknown> | (VVirtualScrollSlot<unknown> & {
            itemRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
        })) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        itemHeight: string | number;
        itemKey: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
    } & {
        class?: any;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
    }, {
        calculateVisibleItems: () => void;
        scrollToIndex: (index: number) => void;
    }, {}, {}, {}, {
        style: import("vue").StyleValue;
        itemHeight: string | number;
        itemKey: import("../../util/index.js").SelectItemKey;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    itemHeight: string | number;
    itemKey: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
} & {
    class?: any;
    height?: string | number | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    width?: string | number | undefined;
}, {
    calculateVisibleItems: () => void;
    scrollToIndex: (index: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<Record<string, any>, "$children" | "items" | "renderless" | "v-slot:default" | "v-slots">, string, {
    style: import("vue").StyleValue;
    itemHeight: string | number;
    itemKey: import("../../util/index.js").SelectItemKey;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: VVirtualScrollSlot<unknown> | (VVirtualScrollSlot<unknown> & {
        itemRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
    })) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T, Renderless extends boolean = false>(props: {
    items?: readonly T[] | undefined;
    renderless?: Renderless | undefined;
}, slots: {
    default: VVirtualScrollSlot<T> & (Renderless extends true ? {
        itemRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
    } : {});
}) => GenericProps<{
    items?: readonly T[] | undefined;
    renderless?: Renderless | undefined;
}, {
    default: VVirtualScrollSlot<T> & (Renderless extends true ? {
        itemRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
    } : {});
}>) & import("../../util/index.js").FilterPropsOptions<{
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    height: (NumberConstructor | StringConstructor)[];
    maxHeight: (NumberConstructor | StringConstructor)[];
    maxWidth: (NumberConstructor | StringConstructor)[];
    minHeight: (NumberConstructor | StringConstructor)[];
    minWidth: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    itemHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    itemKey: {
        type: PropType<import("../../util/index.js").SelectItemKey>;
        default: null;
    };
    items: {
        type: PropType<readonly unknown[]>;
        default: () => never[];
    };
    renderless: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    height: (NumberConstructor | StringConstructor)[];
    maxHeight: (NumberConstructor | StringConstructor)[];
    maxWidth: (NumberConstructor | StringConstructor)[];
    minHeight: (NumberConstructor | StringConstructor)[];
    minWidth: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    itemHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    itemKey: {
        type: PropType<import("../../util/index.js").SelectItemKey>;
        default: null;
    };
    items: {
        type: PropType<readonly unknown[]>;
        default: () => never[];
    };
    renderless: BooleanConstructor;
}>>;
export type VVirtualScroll = InstanceType<typeof VVirtualScroll>;
