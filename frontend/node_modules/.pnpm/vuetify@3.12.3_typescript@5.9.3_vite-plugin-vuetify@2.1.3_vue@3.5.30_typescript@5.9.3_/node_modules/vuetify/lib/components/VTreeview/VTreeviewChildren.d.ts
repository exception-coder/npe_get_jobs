import { IconValue } from '../../composables/icons.js';
// Types
import type { PropType } from 'vue';
import type { VTreeviewItemSlots } from './VTreeviewItem.js';
import type { InternalListItem } from '../VList/VList.js';
import type { SelectStrategyProp } from '../../composables/nested/nested.js';
import type { GenericProps, IndentLinesVariant, IndentLineType } from '../../util/index.js';
export type VTreeviewChildrenSlots<T> = {
    [K in keyof Omit<VTreeviewItemSlots, 'default'>]: VTreeviewItemSlots[K] & {
        item: T;
        internalItem: InternalListItem<T>;
    };
} & {
    default: never;
    item: {
        props: InternalListItem['props'];
        item: T;
        internalItem: InternalListItem<T>;
    };
    header: {
        props: InternalListItem['props'];
        item: T;
        internalItem: InternalListItem<T>;
        loading: boolean;
    };
    footer: {
        props: {
            indentLines?: IndentLineType[];
        };
        item: T;
        internalItem: InternalListItem<T>;
        loading: boolean;
    };
    divider: {
        props: InternalListItem['props'];
    };
    subheader: {
        props: InternalListItem['props'];
    };
};
export declare const makeVTreeviewChildrenProps: <Defaults extends {
    density?: unknown;
    hideActions?: unknown;
    fluid?: unknown;
    disabled?: unknown;
    loadChildren?: unknown;
    loadingIcon?: unknown;
    items?: unknown;
    openOnClick?: unknown;
    indeterminateIcon?: unknown;
    falseIcon?: unknown;
    trueIcon?: unknown;
    returnObject?: unknown;
    activatable?: unknown;
    selectable?: unknown;
    selectedColor?: unknown;
    selectStrategy?: unknown;
    index?: unknown;
    isLastGroup?: unknown;
    separateRoots?: unknown;
    parentIndentLines?: unknown;
    indentLinesVariant?: unknown;
    path?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    density: unknown extends Defaults["density"] ? {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["density"] ? import("../../composables/density.js").Density : Defaults["density"] | import("../../composables/density.js").Density>;
        default: unknown extends Defaults["density"] ? import("../../composables/density.js").Density : Defaults["density"] | NonNullable<import("../../composables/density.js").Density>;
    };
    hideActions: unknown extends Defaults["hideActions"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideActions"] ? boolean : boolean | Defaults["hideActions"]>;
        default: unknown extends Defaults["hideActions"] ? boolean : boolean | Defaults["hideActions"];
    };
    fluid: unknown extends Defaults["fluid"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["fluid"] ? boolean : boolean | Defaults["fluid"]>;
        default: unknown extends Defaults["fluid"] ? boolean : boolean | Defaults["fluid"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    loadChildren: unknown extends Defaults["loadChildren"] ? PropType<(item: unknown) => Promise<void>> : {
        type: PropType<unknown extends Defaults["loadChildren"] ? (item: unknown) => Promise<void> : ((item: unknown) => Promise<void>) | Defaults["loadChildren"]>;
        default: unknown extends Defaults["loadChildren"] ? (item: unknown) => Promise<void> : ((item: unknown) => Promise<void>) | Defaults["loadChildren"];
    };
    loadingIcon: unknown extends Defaults["loadingIcon"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["loadingIcon"] ? string : string | Defaults["loadingIcon"]>;
        default: unknown extends Defaults["loadingIcon"] ? string : string | Defaults["loadingIcon"];
    };
    items: unknown extends Defaults["items"] ? PropType<readonly InternalListItem<any>[]> : {
        type: PropType<unknown extends Defaults["items"] ? readonly InternalListItem<any>[] : readonly InternalListItem<any>[] | Defaults["items"]>;
        default: unknown extends Defaults["items"] ? readonly InternalListItem<any>[] : readonly InternalListItem<any>[] | Defaults["items"];
    };
    openOnClick: unknown extends Defaults["openOnClick"] ? {
        type: BooleanConstructor;
        default: undefined;
    } : Omit<{
        type: BooleanConstructor;
        default: undefined;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["openOnClick"] ? boolean : boolean | Defaults["openOnClick"]>;
        default: unknown extends Defaults["openOnClick"] ? boolean : boolean | Defaults["openOnClick"];
    };
    indeterminateIcon: unknown extends Defaults["indeterminateIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["indeterminateIcon"] ? IconValue : Defaults["indeterminateIcon"] | IconValue>;
        default: unknown extends Defaults["indeterminateIcon"] ? IconValue : Defaults["indeterminateIcon"] | NonNullable<IconValue>;
    };
    falseIcon: unknown extends Defaults["falseIcon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["falseIcon"] ? IconValue : Defaults["falseIcon"] | IconValue>;
        default: unknown extends Defaults["falseIcon"] ? IconValue : Defaults["falseIcon"] | NonNullable<IconValue>;
    };
    trueIcon: unknown extends Defaults["trueIcon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["trueIcon"] ? IconValue : Defaults["trueIcon"] | IconValue>;
        default: unknown extends Defaults["trueIcon"] ? IconValue : Defaults["trueIcon"] | NonNullable<IconValue>;
    };
    returnObject: unknown extends Defaults["returnObject"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["returnObject"] ? boolean : boolean | Defaults["returnObject"]>;
        default: unknown extends Defaults["returnObject"] ? boolean : boolean | Defaults["returnObject"];
    };
    activatable: unknown extends Defaults["activatable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["activatable"] ? boolean : boolean | Defaults["activatable"]>;
        default: unknown extends Defaults["activatable"] ? boolean : boolean | Defaults["activatable"];
    };
    selectable: unknown extends Defaults["selectable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["selectable"] ? boolean : boolean | Defaults["selectable"]>;
        default: unknown extends Defaults["selectable"] ? boolean : boolean | Defaults["selectable"];
    };
    selectedColor: unknown extends Defaults["selectedColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["selectedColor"] ? string : string | Defaults["selectedColor"]>;
        default: unknown extends Defaults["selectedColor"] ? string : string | Defaults["selectedColor"];
    };
    selectStrategy: unknown extends Defaults["selectStrategy"] ? PropType<SelectStrategyProp> : {
        type: PropType<unknown extends Defaults["selectStrategy"] ? SelectStrategyProp : Defaults["selectStrategy"] | SelectStrategyProp>;
        default: unknown extends Defaults["selectStrategy"] ? SelectStrategyProp : Defaults["selectStrategy"] | NonNullable<SelectStrategyProp>;
    };
    index: unknown extends Defaults["index"] ? NumberConstructor : {
        type: PropType<unknown extends Defaults["index"] ? number : number | Defaults["index"]>;
        default: unknown extends Defaults["index"] ? number : number | Defaults["index"];
    };
    isLastGroup: unknown extends Defaults["isLastGroup"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["isLastGroup"] ? boolean : boolean | Defaults["isLastGroup"]>;
        default: unknown extends Defaults["isLastGroup"] ? boolean : boolean | Defaults["isLastGroup"];
    };
    separateRoots: unknown extends Defaults["separateRoots"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["separateRoots"] ? boolean : boolean | Defaults["separateRoots"]>;
        default: unknown extends Defaults["separateRoots"] ? boolean : boolean | Defaults["separateRoots"];
    };
    parentIndentLines: unknown extends Defaults["parentIndentLines"] ? PropType<IndentLineType[]> : {
        type: PropType<unknown extends Defaults["parentIndentLines"] ? IndentLineType[] : IndentLineType[] | Defaults["parentIndentLines"]>;
        default: unknown extends Defaults["parentIndentLines"] ? IndentLineType[] : IndentLineType[] | Defaults["parentIndentLines"];
    };
    indentLinesVariant: unknown extends Defaults["indentLinesVariant"] ? PropType<IndentLinesVariant> : {
        type: PropType<unknown extends Defaults["indentLinesVariant"] ? IndentLinesVariant : Defaults["indentLinesVariant"] | IndentLinesVariant>;
        default: unknown extends Defaults["indentLinesVariant"] ? IndentLinesVariant : Defaults["indentLinesVariant"] | NonNullable<IndentLinesVariant>;
    };
    path: unknown extends Defaults["path"] ? {
        type: PropType<number[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<number[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["path"] ? number[] : number[] | Defaults["path"]>;
        default: unknown extends Defaults["path"] ? number[] : number[] | Defaults["path"];
    };
};
export declare const VTreeviewChildren: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        density: import("../../composables/density.js").Density;
        hideActions: boolean;
        fluid: boolean;
        disabled: boolean;
        loadingIcon: string;
        indeterminateIcon: IconValue;
        returnObject: boolean;
        activatable: boolean;
        selectable: boolean;
        isLastGroup: boolean;
        separateRoots: boolean;
        path: number[];
    } & {
        loadChildren?: ((item: unknown) => Promise<void>) | undefined;
        openOnClick?: boolean | undefined;
        falseIcon?: IconValue | undefined;
        trueIcon?: IconValue | undefined;
        selectedColor?: string | undefined;
        selectStrategy?: SelectStrategyProp | undefined;
        index?: number | undefined;
        parentIndentLines?: IndentLineType[] | undefined;
        indentLinesVariant?: IndentLinesVariant | undefined;
    }, () => (void | string | number | boolean | JSX.Element | import("vue").VNodeArrayChildren | null)[] | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<Record<string, any>, "$children" | "items" | "v-slot:append" | "v-slot:default" | "v-slot:divider" | "v-slot:footer" | "v-slot:header" | "v-slot:item" | "v-slot:prepend" | "v-slot:subheader" | "v-slot:subtitle" | "v-slot:title" | "v-slot:toggle" | "v-slots">, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        density: import("../../composables/density.js").Density;
        hideActions: boolean;
        fluid: boolean;
        disabled: boolean;
        loadingIcon: string;
        openOnClick: boolean;
        indeterminateIcon: IconValue;
        returnObject: boolean;
        activatable: boolean;
        selectable: boolean;
        isLastGroup: boolean;
        separateRoots: boolean;
        path: number[];
    }, true, {}, import("vue").SlotsType<Partial<{
        prepend: (arg: import("../VList/VListItem.js").ListItemSlot & {
            item: InternalListItem<any>;
            internalItem: InternalListItem<InternalListItem<any>>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        append: (arg: import("../VList/VListItem.js").ListItemSlot & {
            item: InternalListItem<any>;
            internalItem: InternalListItem<InternalListItem<any>>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        title: (arg: import("../VList/VListItem.js").ListItemTitleSlot & {
            item: InternalListItem<any>;
            internalItem: InternalListItem<InternalListItem<any>>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        subtitle: (arg: import("../VList/VListItem.js").ListItemSubtitleSlot & {
            item: InternalListItem<any>;
            internalItem: InternalListItem<InternalListItem<any>>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        toggle: (arg: import("../VList/VListItem.js").ListItemSlot & {
            props: {
                onClick: (e: PointerEvent) => void;
            };
        } & {
            loading: boolean;
        } & {
            item: InternalListItem<any>;
            internalItem: InternalListItem<InternalListItem<any>>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        item: (arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
            item: InternalListItem<any>;
            internalItem: InternalListItem<InternalListItem<any>>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        header: (arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
            item: InternalListItem<any>;
            internalItem: InternalListItem<InternalListItem<any>>;
            loading: boolean;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        footer: (arg: {
            props: {
                indentLines?: IndentLineType[] | undefined;
            };
            item: InternalListItem<any>;
            internalItem: InternalListItem<InternalListItem<any>>;
            loading: boolean;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        divider: (arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        subheader: (arg: {
            props: {
                [key: string]: any;
                title: string;
                value: any;
            };
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
        density: import("../../composables/density.js").Density;
        hideActions: boolean;
        fluid: boolean;
        disabled: boolean;
        loadingIcon: string;
        indeterminateIcon: IconValue;
        returnObject: boolean;
        activatable: boolean;
        selectable: boolean;
        isLastGroup: boolean;
        separateRoots: boolean;
        path: number[];
    } & {
        loadChildren?: ((item: unknown) => Promise<void>) | undefined;
        openOnClick?: boolean | undefined;
        falseIcon?: IconValue | undefined;
        trueIcon?: IconValue | undefined;
        selectedColor?: string | undefined;
        selectStrategy?: SelectStrategyProp | undefined;
        index?: number | undefined;
        parentIndentLines?: IndentLineType[] | undefined;
        indentLinesVariant?: IndentLinesVariant | undefined;
    }, () => (void | string | number | boolean | JSX.Element | import("vue").VNodeArrayChildren | null)[] | undefined, {}, {}, {}, {
        density: import("../../composables/density.js").Density;
        hideActions: boolean;
        fluid: boolean;
        disabled: boolean;
        loadingIcon: string;
        openOnClick: boolean;
        indeterminateIcon: IconValue;
        returnObject: boolean;
        activatable: boolean;
        selectable: boolean;
        isLastGroup: boolean;
        separateRoots: boolean;
        path: number[];
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    density: import("../../composables/density.js").Density;
    hideActions: boolean;
    fluid: boolean;
    disabled: boolean;
    loadingIcon: string;
    indeterminateIcon: IconValue;
    returnObject: boolean;
    activatable: boolean;
    selectable: boolean;
    isLastGroup: boolean;
    separateRoots: boolean;
    path: number[];
} & {
    loadChildren?: ((item: unknown) => Promise<void>) | undefined;
    openOnClick?: boolean | undefined;
    falseIcon?: IconValue | undefined;
    trueIcon?: IconValue | undefined;
    selectedColor?: string | undefined;
    selectStrategy?: SelectStrategyProp | undefined;
    index?: number | undefined;
    parentIndentLines?: IndentLineType[] | undefined;
    indentLinesVariant?: IndentLinesVariant | undefined;
}, () => (void | string | number | boolean | JSX.Element | import("vue").VNodeArrayChildren | null)[] | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<Record<string, any>, "$children" | "items" | "v-slot:append" | "v-slot:default" | "v-slot:divider" | "v-slot:footer" | "v-slot:header" | "v-slot:item" | "v-slot:prepend" | "v-slot:subheader" | "v-slot:subtitle" | "v-slot:title" | "v-slot:toggle" | "v-slots">, string, {
    density: import("../../composables/density.js").Density;
    hideActions: boolean;
    fluid: boolean;
    disabled: boolean;
    loadingIcon: string;
    openOnClick: boolean;
    indeterminateIcon: IconValue;
    returnObject: boolean;
    activatable: boolean;
    selectable: boolean;
    isLastGroup: boolean;
    separateRoots: boolean;
    path: number[];
}, {}, string, import("vue").SlotsType<Partial<{
    prepend: (arg: import("../VList/VListItem.js").ListItemSlot & {
        item: InternalListItem<any>;
        internalItem: InternalListItem<InternalListItem<any>>;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    append: (arg: import("../VList/VListItem.js").ListItemSlot & {
        item: InternalListItem<any>;
        internalItem: InternalListItem<InternalListItem<any>>;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    title: (arg: import("../VList/VListItem.js").ListItemTitleSlot & {
        item: InternalListItem<any>;
        internalItem: InternalListItem<InternalListItem<any>>;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    subtitle: (arg: import("../VList/VListItem.js").ListItemSubtitleSlot & {
        item: InternalListItem<any>;
        internalItem: InternalListItem<InternalListItem<any>>;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    toggle: (arg: import("../VList/VListItem.js").ListItemSlot & {
        props: {
            onClick: (e: PointerEvent) => void;
        };
    } & {
        loading: boolean;
    } & {
        item: InternalListItem<any>;
        internalItem: InternalListItem<InternalListItem<any>>;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    item: (arg: {
        props: {
            [key: string]: any;
            title: string;
            value: any;
        };
        item: InternalListItem<any>;
        internalItem: InternalListItem<InternalListItem<any>>;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    header: (arg: {
        props: {
            [key: string]: any;
            title: string;
            value: any;
        };
        item: InternalListItem<any>;
        internalItem: InternalListItem<InternalListItem<any>>;
        loading: boolean;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    footer: (arg: {
        props: {
            indentLines?: IndentLineType[] | undefined;
        };
        item: InternalListItem<any>;
        internalItem: InternalListItem<InternalListItem<any>>;
        loading: boolean;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    divider: (arg: {
        props: {
            [key: string]: any;
            title: string;
            value: any;
        };
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    subheader: (arg: {
        props: {
            [key: string]: any;
            title: string;
            value: any;
        };
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T extends InternalListItem<any>>(props: {
    items?: readonly T[] | undefined;
}, slots: VTreeviewChildrenSlots<T>) => GenericProps<{
    items?: readonly T[] | undefined;
}, VTreeviewChildrenSlots<T>>) & import("../../util/index.js").FilterPropsOptions<{
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    hideActions: BooleanConstructor;
    fluid: BooleanConstructor;
    disabled: BooleanConstructor;
    loadChildren: PropType<(item: unknown) => Promise<void>>;
    loadingIcon: {
        type: StringConstructor;
        default: string;
    };
    items: PropType<readonly InternalListItem<any>[]>;
    openOnClick: {
        type: BooleanConstructor;
        default: undefined;
    };
    indeterminateIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    falseIcon: PropType<IconValue>;
    trueIcon: PropType<IconValue>;
    returnObject: BooleanConstructor;
    activatable: BooleanConstructor;
    selectable: BooleanConstructor;
    selectedColor: StringConstructor;
    selectStrategy: PropType<SelectStrategyProp>;
    index: NumberConstructor;
    isLastGroup: BooleanConstructor;
    separateRoots: BooleanConstructor;
    parentIndentLines: PropType<IndentLineType[]>;
    indentLinesVariant: PropType<IndentLinesVariant>;
    path: {
        type: PropType<number[]>;
        default: () => never[];
    };
}, import("vue").ExtractPropTypes<{
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    hideActions: BooleanConstructor;
    fluid: BooleanConstructor;
    disabled: BooleanConstructor;
    loadChildren: PropType<(item: unknown) => Promise<void>>;
    loadingIcon: {
        type: StringConstructor;
        default: string;
    };
    items: PropType<readonly InternalListItem<any>[]>;
    openOnClick: {
        type: BooleanConstructor;
        default: undefined;
    };
    indeterminateIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    falseIcon: PropType<IconValue>;
    trueIcon: PropType<IconValue>;
    returnObject: BooleanConstructor;
    activatable: BooleanConstructor;
    selectable: BooleanConstructor;
    selectedColor: StringConstructor;
    selectStrategy: PropType<SelectStrategyProp>;
    index: NumberConstructor;
    isLastGroup: BooleanConstructor;
    separateRoots: BooleanConstructor;
    parentIndentLines: PropType<IndentLineType[]>;
    indentLinesVariant: PropType<IndentLinesVariant>;
    path: {
        type: PropType<number[]>;
        default: () => never[];
    };
}>>;
