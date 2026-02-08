// Types
import type { ComponentInternalInstance, CSSProperties, InjectionKey, Prop, Ref } from 'vue';
export type Position = 'top' | 'left' | 'right' | 'bottom';
interface Layer {
    top: number;
    bottom: number;
    left: number;
    right: number;
}
interface LayoutItem extends Layer {
    id: string;
    size: number;
    position: Position;
}
interface LayoutProvide {
    register: (vm: ComponentInternalInstance, options: {
        id: string;
        order: Ref<number>;
        position: Ref<Position>;
        layoutSize: Ref<number | string>;
        elementSize: Ref<number | string | undefined>;
        active: Ref<boolean>;
        disableTransitions?: Ref<boolean>;
        absolute: Ref<boolean | undefined>;
    }) => {
        layoutItemStyles: Ref<CSSProperties>;
        layoutItemScrimStyles: Ref<CSSProperties>;
        zIndex: Ref<number>;
    };
    unregister: (id: string) => void;
    mainRect: Ref<Layer>;
    mainStyles: Ref<CSSProperties>;
    getLayoutItem: (id: string) => LayoutItem | undefined;
    items: Ref<LayoutItem[]>;
    layoutRect: Ref<DOMRectReadOnly | undefined>;
    rootZIndex: Ref<number>;
}
export declare const VuetifyLayoutKey: InjectionKey<LayoutProvide>;
export declare const VuetifyLayoutItemKey: InjectionKey<{
    id: string;
}>;
export declare const makeLayoutProps: <Defaults extends {
    overlaps?: unknown;
    fullHeight?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    overlaps: unknown extends Defaults["overlaps"] ? Prop<string[]> : {
        type: import("vue").PropType<unknown extends Defaults["overlaps"] ? string[] : string[] | Defaults["overlaps"]>;
        default: unknown extends Defaults["overlaps"] ? string[] : string[] | Defaults["overlaps"];
    };
    fullHeight: unknown extends Defaults["fullHeight"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["fullHeight"] ? boolean : boolean | Defaults["fullHeight"]>;
        default: unknown extends Defaults["fullHeight"] ? boolean : boolean | Defaults["fullHeight"];
    };
};
// Composables
export declare const makeLayoutItemProps: <Defaults extends {
    name?: unknown;
    order?: unknown;
    absolute?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    name: unknown extends Defaults["name"] ? {
        type: StringConstructor;
    } : Omit<{
        type: StringConstructor;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["name"] ? string : string | Defaults["name"]>;
        default: unknown extends Defaults["name"] ? string : string | Defaults["name"];
    };
    order: unknown extends Defaults["order"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["order"] ? string | number : string | number | Defaults["order"]>;
        default: unknown extends Defaults["order"] ? string | number : Defaults["order"] | NonNullable<string | number>;
    };
    absolute: unknown extends Defaults["absolute"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["absolute"] ? boolean : boolean | Defaults["absolute"]>;
        default: unknown extends Defaults["absolute"] ? boolean : boolean | Defaults["absolute"];
    };
};
export declare function useLayout(): {
    getLayoutItem: (id: string) => LayoutItem | undefined;
    mainRect: Ref<Layer, Layer>;
    mainStyles: Ref<CSSProperties, CSSProperties>;
};
export declare function useLayoutItem(options: {
    id: string | undefined;
    order: Ref<number>;
    position: Ref<Position>;
    layoutSize: Ref<number | string>;
    elementSize: Ref<number | string | undefined>;
    active: Ref<boolean>;
    disableTransitions?: Ref<boolean>;
    absolute: Ref<boolean | undefined>;
}): {
    layoutItemStyles: Ref<CSSProperties, CSSProperties>;
    layoutRect: Ref<DOMRectReadOnly | undefined, DOMRectReadOnly | undefined>;
    layoutItemScrimStyles: Ref<CSSProperties, CSSProperties>;
};
export declare function createLayout(props: {
    overlaps?: string[];
    fullHeight?: boolean;
}): {
    layoutClasses: Readonly<Ref<(string | {
        "v-layout--full-height": boolean | undefined;
    })[], (string | {
        "v-layout--full-height": boolean | undefined;
    })[]>>;
    layoutStyles: Readonly<Ref<{
        zIndex: number | undefined;
        position: "relative" | undefined;
        overflow: string | undefined;
    }, {
        zIndex: number | undefined;
        position: "relative" | undefined;
        overflow: string | undefined;
    }>>;
    getLayoutItem: (id: string) => {
        top: number;
        bottom: number;
        left: number;
        right: number;
        id: string;
        size: number;
        position: Position;
    } | undefined;
    items: import("vue").ComputedRef<{
        top: number;
        bottom: number;
        left: number;
        right: number;
        id: string;
        size: number;
        position: Position;
    }[]>;
    layoutRect: Readonly<Ref<{
        readonly bottom: number;
        readonly height: number;
        readonly left: number;
        readonly right: number;
        readonly top: number;
        readonly width: number;
        readonly x: number;
        readonly y: number;
        readonly toJSON: () => any;
    } | undefined, {
        readonly bottom: number;
        readonly height: number;
        readonly left: number;
        readonly right: number;
        readonly top: number;
        readonly width: number;
        readonly x: number;
        readonly y: number;
        readonly toJSON: () => any;
    } | undefined>>;
    layoutRef: import("../util/index.js").TemplateRef;
};

