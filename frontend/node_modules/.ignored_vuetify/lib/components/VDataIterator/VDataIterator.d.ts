import { provideExpanded } from '../VDataTable/composables/expand.js';
import { provideGroupBy } from '../VDataTable/composables/group.js';
import { providePagination } from '../VDataTable/composables/paginate.js';
import { provideSelection } from '../VDataTable/composables/select.js';
import { provideSort } from '../VDataTable/composables/sort.js';
// Types
import type { Component } from 'vue';
import type { DataIteratorItem } from './composables/items.js';
import type { Group, GroupSummary } from '../VDataTable/composables/group.js';
import type { SortItem } from '../VDataTable/composables/sort.js';
import type { LoaderSlotProps } from '../../composables/loader.js';
import type { GenericProps } from '../../util/index.js';
type VDataIteratorSlotProps<T> = {
    page: number;
    itemsPerPage: number;
    sortBy: readonly SortItem[];
    pageCount: number;
    toggleSort: ReturnType<typeof provideSort>['toggleSort'];
    prevPage: ReturnType<typeof providePagination>['prevPage'];
    nextPage: ReturnType<typeof providePagination>['nextPage'];
    setPage: ReturnType<typeof providePagination>['setPage'];
    setItemsPerPage: ReturnType<typeof providePagination>['setItemsPerPage'];
    isSelected: ReturnType<typeof provideSelection>['isSelected'];
    select: ReturnType<typeof provideSelection>['select'];
    selectAll: ReturnType<typeof provideSelection>['selectAll'];
    toggleSelect: ReturnType<typeof provideSelection>['toggleSelect'];
    isExpanded: ReturnType<typeof provideExpanded>['isExpanded'];
    toggleExpand: ReturnType<typeof provideExpanded>['toggleExpand'];
    isGroupOpen: ReturnType<typeof provideGroupBy>['isGroupOpen'];
    toggleGroup: ReturnType<typeof provideGroupBy>['toggleGroup'];
    items: readonly DataIteratorItem<T>[];
    itemsCount: number;
    groupedItems: readonly (DataIteratorItem<T> | Group<DataIteratorItem<T>> | GroupSummary<DataIteratorItem<T>>)[];
};
export type VDataIteratorSlots<T> = {
    default: VDataIteratorSlotProps<T>;
    header: VDataIteratorSlotProps<T>;
    footer: VDataIteratorSlotProps<T>;
    loader: LoaderSlotProps;
    'no-data': never;
};
export declare const makeVDataIteratorProps: <Defaults extends {
    class?: unknown;
    style?: unknown;
    customFilter?: unknown;
    customKeyFilter?: unknown;
    filterKeys?: unknown;
    filterMode?: unknown;
    noFilter?: unknown;
    expandOnClick?: unknown;
    showExpand?: unknown;
    expanded?: unknown;
    sortBy?: unknown;
    customKeySort?: unknown;
    multiSort?: unknown;
    mustSort?: unknown;
    groupBy?: unknown;
    showSelect?: unknown;
    selectStrategy?: unknown;
    modelValue?: unknown;
    valueComparator?: unknown;
    tag?: unknown;
    transition?: unknown;
    page?: unknown;
    itemsPerPage?: unknown;
    items?: unknown;
    itemValue?: unknown;
    itemSelectable?: unknown;
    returnObject?: unknown;
    search?: unknown;
    loading?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
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
    customFilter: unknown extends Defaults["customFilter"] ? import("vue").PropType<import("../../types.js").FilterFunction> : {
        type: import("vue").PropType<unknown extends Defaults["customFilter"] ? import("../../types.js").FilterFunction : import("../../types.js").FilterFunction | Defaults["customFilter"]>;
        default: unknown extends Defaults["customFilter"] ? import("../../types.js").FilterFunction : import("../../types.js").FilterFunction | Defaults["customFilter"];
    };
    customKeyFilter: unknown extends Defaults["customKeyFilter"] ? import("vue").PropType<import("../../composables/filter.js").FilterKeyFunctions> : {
        type: import("vue").PropType<unknown extends Defaults["customKeyFilter"] ? import("../../composables/filter.js").FilterKeyFunctions : import("../../composables/filter.js").FilterKeyFunctions | Defaults["customKeyFilter"]>;
        default: unknown extends Defaults["customKeyFilter"] ? import("../../composables/filter.js").FilterKeyFunctions : import("../../composables/filter.js").FilterKeyFunctions | Defaults["customKeyFilter"];
    };
    filterKeys: unknown extends Defaults["filterKeys"] ? import("vue").PropType<import("../../composables/filter.js").FilterKeys> : {
        type: import("vue").PropType<unknown extends Defaults["filterKeys"] ? import("../../composables/filter.js").FilterKeys : Defaults["filterKeys"] | import("../../composables/filter.js").FilterKeys>;
        default: unknown extends Defaults["filterKeys"] ? import("../../composables/filter.js").FilterKeys : Defaults["filterKeys"] | NonNullable<import("../../composables/filter.js").FilterKeys>;
    };
    filterMode: unknown extends Defaults["filterMode"] ? {
        type: import("vue").PropType<import("../../composables/filter.js").FilterMode>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/filter.js").FilterMode>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["filterMode"] ? import("../../composables/filter.js").FilterMode : Defaults["filterMode"] | import("../../composables/filter.js").FilterMode>;
        default: unknown extends Defaults["filterMode"] ? import("../../composables/filter.js").FilterMode : Defaults["filterMode"] | NonNullable<import("../../composables/filter.js").FilterMode>;
    };
    noFilter: unknown extends Defaults["noFilter"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["noFilter"] ? boolean : boolean | Defaults["noFilter"]>;
        default: unknown extends Defaults["noFilter"] ? boolean : boolean | Defaults["noFilter"];
    };
    expandOnClick: unknown extends Defaults["expandOnClick"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["expandOnClick"] ? boolean : boolean | Defaults["expandOnClick"]>;
        default: unknown extends Defaults["expandOnClick"] ? boolean : boolean | Defaults["expandOnClick"];
    };
    showExpand: unknown extends Defaults["showExpand"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["showExpand"] ? boolean : boolean | Defaults["showExpand"]>;
        default: unknown extends Defaults["showExpand"] ? boolean : boolean | Defaults["showExpand"];
    };
    expanded: unknown extends Defaults["expanded"] ? {
        type: import("vue").PropType<readonly string[]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<readonly string[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["expanded"] ? readonly string[] : readonly string[] | Defaults["expanded"]>;
        default: unknown extends Defaults["expanded"] ? readonly string[] : readonly string[] | Defaults["expanded"];
    };
    sortBy: unknown extends Defaults["sortBy"] ? {
        type: import("vue").PropType<readonly SortItem[]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<readonly SortItem[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["sortBy"] ? readonly SortItem[] : readonly SortItem[] | Defaults["sortBy"]>;
        default: unknown extends Defaults["sortBy"] ? readonly SortItem[] : readonly SortItem[] | Defaults["sortBy"];
    };
    customKeySort: unknown extends Defaults["customKeySort"] ? import("vue").PropType<Record<string, import("../../types.js").DataTableCompareFunction>> : {
        type: import("vue").PropType<unknown extends Defaults["customKeySort"] ? Record<string, import("../../types.js").DataTableCompareFunction> : Record<string, import("../../types.js").DataTableCompareFunction> | Defaults["customKeySort"]>;
        default: unknown extends Defaults["customKeySort"] ? Record<string, import("../../types.js").DataTableCompareFunction> : Record<string, import("../../types.js").DataTableCompareFunction> | Defaults["customKeySort"];
    };
    multiSort: unknown extends Defaults["multiSort"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["multiSort"] ? boolean : boolean | Defaults["multiSort"]>;
        default: unknown extends Defaults["multiSort"] ? boolean : boolean | Defaults["multiSort"];
    };
    mustSort: unknown extends Defaults["mustSort"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["mustSort"] ? boolean : boolean | Defaults["mustSort"]>;
        default: unknown extends Defaults["mustSort"] ? boolean : boolean | Defaults["mustSort"];
    };
    groupBy: unknown extends Defaults["groupBy"] ? {
        type: import("vue").PropType<readonly SortItem[]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<readonly SortItem[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["groupBy"] ? readonly SortItem[] : readonly SortItem[] | Defaults["groupBy"]>;
        default: unknown extends Defaults["groupBy"] ? readonly SortItem[] : readonly SortItem[] | Defaults["groupBy"];
    };
    showSelect: unknown extends Defaults["showSelect"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["showSelect"] ? boolean : boolean | Defaults["showSelect"]>;
        default: unknown extends Defaults["showSelect"] ? boolean : boolean | Defaults["showSelect"];
    };
    selectStrategy: unknown extends Defaults["selectStrategy"] ? {
        type: import("vue").PropType<"all" | "page" | "single">;
        default: string;
    } : Omit<{
        type: import("vue").PropType<"all" | "page" | "single">;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["selectStrategy"] ? "all" | "page" | "single" : "all" | "page" | "single" | Defaults["selectStrategy"]>;
        default: unknown extends Defaults["selectStrategy"] ? "all" | "page" | "single" : Defaults["selectStrategy"] | NonNullable<"all" | "page" | "single">;
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: import("vue").PropType<readonly any[]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<readonly any[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["modelValue"] ? readonly any[] : readonly any[] | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? readonly any[] : readonly any[] | Defaults["modelValue"];
    };
    valueComparator: unknown extends Defaults["valueComparator"] ? import("vue").PropType<typeof import("../../util/index.js").deepEqual> : {
        type: import("vue").PropType<unknown extends Defaults["valueComparator"] ? typeof import("../../util/index.js").deepEqual : typeof import("../../util/index.js").deepEqual | Defaults["valueComparator"]>;
        default: unknown extends Defaults["valueComparator"] ? typeof import("../../util/index.js").deepEqual : typeof import("../../util/index.js").deepEqual | Defaults["valueComparator"];
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
    transition: unknown extends Defaults["transition"] ? {
        type: import("vue").PropType<string | boolean | {
            component: Component;
            hideOnLeave: boolean;
        } | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null>;
        default: {
            component: Component;
            hideOnLeave: boolean;
        } | NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null>;
    } : Omit<{
        type: import("vue").PropType<string | boolean | {
            component: Component;
            hideOnLeave: boolean;
        } | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null>;
        default: {
            component: Component;
            hideOnLeave: boolean;
        } | NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null>;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["transition"] ? string | boolean | {
            component: Component;
            hideOnLeave: boolean;
        } | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null : string | boolean | {
            component: Component;
            hideOnLeave: boolean;
        } | Defaults["transition"] | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null>;
        default: unknown extends Defaults["transition"] ? string | boolean | {
            component: Component;
            hideOnLeave: boolean;
        } | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null : Defaults["transition"] | NonNullable<string | boolean | {
            component: Component;
            hideOnLeave: boolean;
        } | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null>;
    };
    page: unknown extends Defaults["page"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["page"] ? string | number : string | number | Defaults["page"]>;
        default: unknown extends Defaults["page"] ? string | number : Defaults["page"] | NonNullable<string | number>;
    };
    itemsPerPage: unknown extends Defaults["itemsPerPage"] ? Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    } : Omit<Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["itemsPerPage"] ? string | number : string | number | Defaults["itemsPerPage"]>;
        default: unknown extends Defaults["itemsPerPage"] ? string | number : Defaults["itemsPerPage"] | NonNullable<string | number>;
    };
    items: unknown extends Defaults["items"] ? {
        type: import("vue").PropType<any[]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<any[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["items"] ? any[] : any[] | Defaults["items"]>;
        default: unknown extends Defaults["items"] ? any[] : any[] | Defaults["items"];
    };
    itemValue: unknown extends Defaults["itemValue"] ? {
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["itemValue"] ? import("../../util/index.js").SelectItemKey : Defaults["itemValue"] | import("../../util/index.js").SelectItemKey>;
        default: unknown extends Defaults["itemValue"] ? import("../../util/index.js").SelectItemKey : Defaults["itemValue"] | NonNullable<import("../../util/index.js").SelectItemKey>;
    };
    itemSelectable: unknown extends Defaults["itemSelectable"] ? {
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: null;
    } : Omit<{
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: null;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["itemSelectable"] ? import("../../util/index.js").SelectItemKey : Defaults["itemSelectable"] | import("../../util/index.js").SelectItemKey>;
        default: unknown extends Defaults["itemSelectable"] ? import("../../util/index.js").SelectItemKey : Defaults["itemSelectable"] | NonNullable<import("../../util/index.js").SelectItemKey>;
    };
    returnObject: unknown extends Defaults["returnObject"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["returnObject"] ? boolean : boolean | Defaults["returnObject"]>;
        default: unknown extends Defaults["returnObject"] ? boolean : boolean | Defaults["returnObject"];
    };
    search: unknown extends Defaults["search"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["search"] ? string : string | Defaults["search"]>;
        default: unknown extends Defaults["search"] ? string : string | Defaults["search"];
    };
    loading: unknown extends Defaults["loading"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["loading"] ? boolean : boolean | Defaults["loading"]>;
        default: unknown extends Defaults["loading"] ? boolean : boolean | Defaults["loading"];
    };
};
export declare const VDataIterator: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        filterMode: import("../../composables/filter.js").FilterMode;
        noFilter: boolean;
        expandOnClick: boolean;
        showExpand: boolean;
        expanded: readonly string[];
        sortBy: readonly SortItem[];
        multiSort: boolean;
        mustSort: boolean;
        groupBy: readonly SortItem[];
        showSelect: boolean;
        selectStrategy: "all" | "page" | "single";
        modelValue: readonly any[];
        tag: string | import("../../util/index.js").JSXComponent;
        transition: string | boolean | {
            component: Component;
            hideOnLeave: boolean;
        } | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null;
        page: string | number;
        itemsPerPage: string | number;
        itemValue: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        itemSelectable: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        returnObject: boolean;
        loading: boolean;
    } & {
        class?: any;
        customFilter?: import("../../types.js").FilterFunction | undefined;
        customKeyFilter?: import("../../composables/filter.js").FilterKeyFunctions | undefined;
        filterKeys?: import("../../composables/filter.js").FilterKeys | undefined;
        customKeySort?: Record<string, import("../../types.js").DataTableCompareFunction> | undefined;
        valueComparator?: typeof import("../../util/index.js").deepEqual | undefined;
        search?: string | undefined;
    } & {
        "onUpdate:currentItems"?: ((value: any) => any) | undefined;
        "onUpdate:expanded"?: ((value: any) => any) | undefined;
        "onUpdate:groupBy"?: ((value: any) => any) | undefined;
        "onUpdate:itemsPerPage"?: ((value: number) => any) | undefined;
        "onUpdate:modelValue"?: ((value: any[]) => any) | undefined;
        "onUpdate:options"?: ((value: any) => any) | undefined;
        "onUpdate:page"?: ((value: number) => any) | undefined;
        "onUpdate:sortBy"?: ((value: any) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        "update:modelValue": (value: any[]) => true;
        "update:groupBy": (value: any) => true;
        "update:page": (value: number) => true;
        "update:itemsPerPage": (value: number) => true;
        "update:sortBy": (value: any) => true;
        "update:options": (value: any) => true;
        "update:expanded": (value: any) => true;
        "update:currentItems": (value: any) => true;
    }, "$children" | "items" | "v-slot:default" | "v-slot:footer" | "v-slot:header" | "v-slot:loader" | "v-slot:no-data" | "v-slots">, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        filterMode: import("../../composables/filter.js").FilterMode;
        noFilter: boolean;
        expandOnClick: boolean;
        showExpand: boolean;
        expanded: readonly string[];
        sortBy: readonly SortItem[];
        multiSort: boolean;
        mustSort: boolean;
        groupBy: readonly SortItem[];
        showSelect: boolean;
        selectStrategy: "all" | "page" | "single";
        modelValue: readonly any[];
        tag: string | import("../../util/index.js").JSXComponent;
        transition: string | boolean | {
            component: Component;
            hideOnLeave: boolean;
        } | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null;
        page: string | number;
        itemsPerPage: string | number;
        itemValue: import("../../util/index.js").SelectItemKey;
        itemSelectable: import("../../util/index.js").SelectItemKey;
        returnObject: boolean;
        loading: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: VDataIteratorSlotProps<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        header: (arg: VDataIteratorSlotProps<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        footer: (arg: VDataIteratorSlotProps<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        loader: (arg: LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "no-data": () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        filterMode: import("../../composables/filter.js").FilterMode;
        noFilter: boolean;
        expandOnClick: boolean;
        showExpand: boolean;
        expanded: readonly string[];
        sortBy: readonly SortItem[];
        multiSort: boolean;
        mustSort: boolean;
        groupBy: readonly SortItem[];
        showSelect: boolean;
        selectStrategy: "all" | "page" | "single";
        modelValue: readonly any[];
        tag: string | import("../../util/index.js").JSXComponent;
        transition: string | boolean | {
            component: Component;
            hideOnLeave: boolean;
        } | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null;
        page: string | number;
        itemsPerPage: string | number;
        itemValue: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        itemSelectable: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        returnObject: boolean;
        loading: boolean;
    } & {
        class?: any;
        customFilter?: import("../../types.js").FilterFunction | undefined;
        customKeyFilter?: import("../../composables/filter.js").FilterKeyFunctions | undefined;
        filterKeys?: import("../../composables/filter.js").FilterKeys | undefined;
        customKeySort?: Record<string, import("../../types.js").DataTableCompareFunction> | undefined;
        valueComparator?: typeof import("../../util/index.js").deepEqual | undefined;
        search?: string | undefined;
    } & {
        "onUpdate:currentItems"?: ((value: any) => any) | undefined;
        "onUpdate:expanded"?: ((value: any) => any) | undefined;
        "onUpdate:groupBy"?: ((value: any) => any) | undefined;
        "onUpdate:itemsPerPage"?: ((value: number) => any) | undefined;
        "onUpdate:modelValue"?: ((value: any[]) => any) | undefined;
        "onUpdate:options"?: ((value: any) => any) | undefined;
        "onUpdate:page"?: ((value: number) => any) | undefined;
        "onUpdate:sortBy"?: ((value: any) => any) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        filterMode: import("../../composables/filter.js").FilterMode;
        noFilter: boolean;
        expandOnClick: boolean;
        showExpand: boolean;
        expanded: readonly string[];
        sortBy: readonly SortItem[];
        multiSort: boolean;
        mustSort: boolean;
        groupBy: readonly SortItem[];
        showSelect: boolean;
        selectStrategy: "all" | "page" | "single";
        modelValue: readonly any[];
        tag: string | import("../../util/index.js").JSXComponent;
        transition: string | boolean | {
            component: Component;
            hideOnLeave: boolean;
        } | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null;
        page: string | number;
        itemsPerPage: string | number;
        itemValue: import("../../util/index.js").SelectItemKey;
        itemSelectable: import("../../util/index.js").SelectItemKey;
        returnObject: boolean;
        loading: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    filterMode: import("../../composables/filter.js").FilterMode;
    noFilter: boolean;
    expandOnClick: boolean;
    showExpand: boolean;
    expanded: readonly string[];
    sortBy: readonly SortItem[];
    multiSort: boolean;
    mustSort: boolean;
    groupBy: readonly SortItem[];
    showSelect: boolean;
    selectStrategy: "all" | "page" | "single";
    modelValue: readonly any[];
    tag: string | import("../../util/index.js").JSXComponent;
    transition: string | boolean | {
        component: Component;
        hideOnLeave: boolean;
    } | (import("vue").TransitionProps & {
        component?: Component | undefined;
    }) | null;
    page: string | number;
    itemsPerPage: string | number;
    itemValue: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
    itemSelectable: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
    returnObject: boolean;
    loading: boolean;
} & {
    class?: any;
    customFilter?: import("../../types.js").FilterFunction | undefined;
    customKeyFilter?: import("../../composables/filter.js").FilterKeyFunctions | undefined;
    filterKeys?: import("../../composables/filter.js").FilterKeys | undefined;
    customKeySort?: Record<string, import("../../types.js").DataTableCompareFunction> | undefined;
    valueComparator?: typeof import("../../util/index.js").deepEqual | undefined;
    search?: string | undefined;
} & {
    "onUpdate:currentItems"?: ((value: any) => any) | undefined;
    "onUpdate:expanded"?: ((value: any) => any) | undefined;
    "onUpdate:groupBy"?: ((value: any) => any) | undefined;
    "onUpdate:itemsPerPage"?: ((value: number) => any) | undefined;
    "onUpdate:modelValue"?: ((value: any[]) => any) | undefined;
    "onUpdate:options"?: ((value: any) => any) | undefined;
    "onUpdate:page"?: ((value: number) => any) | undefined;
    "onUpdate:sortBy"?: ((value: any) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
    "update:modelValue": (value: any[]) => true;
    "update:groupBy": (value: any) => true;
    "update:page": (value: number) => true;
    "update:itemsPerPage": (value: number) => true;
    "update:sortBy": (value: any) => true;
    "update:options": (value: any) => true;
    "update:expanded": (value: any) => true;
    "update:currentItems": (value: any) => true;
}, "$children" | "items" | "v-slot:default" | "v-slot:footer" | "v-slot:header" | "v-slot:loader" | "v-slot:no-data" | "v-slots">, string, {
    style: import("vue").StyleValue;
    filterMode: import("../../composables/filter.js").FilterMode;
    noFilter: boolean;
    expandOnClick: boolean;
    showExpand: boolean;
    expanded: readonly string[];
    sortBy: readonly SortItem[];
    multiSort: boolean;
    mustSort: boolean;
    groupBy: readonly SortItem[];
    showSelect: boolean;
    selectStrategy: "all" | "page" | "single";
    modelValue: readonly any[];
    tag: string | import("../../util/index.js").JSXComponent;
    transition: string | boolean | {
        component: Component;
        hideOnLeave: boolean;
    } | (import("vue").TransitionProps & {
        component?: Component | undefined;
    }) | null;
    page: string | number;
    itemsPerPage: string | number;
    itemValue: import("../../util/index.js").SelectItemKey;
    itemSelectable: import("../../util/index.js").SelectItemKey;
    returnObject: boolean;
    loading: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: VDataIteratorSlotProps<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    header: (arg: VDataIteratorSlotProps<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    footer: (arg: VDataIteratorSlotProps<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    loader: (arg: LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "no-data": () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T>(props: {
    items?: readonly T[] | undefined;
}, slots: VDataIteratorSlots<T>) => GenericProps<{
    items?: readonly T[] | undefined;
}, VDataIteratorSlots<T>>) & import("../../util/index.js").FilterPropsOptions<{
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    customFilter: import("vue").PropType<import("../../types.js").FilterFunction>;
    customKeyFilter: import("vue").PropType<import("../../composables/filter.js").FilterKeyFunctions>;
    filterKeys: import("vue").PropType<import("../../composables/filter.js").FilterKeys>;
    filterMode: {
        type: import("vue").PropType<import("../../composables/filter.js").FilterMode>;
        default: string;
    };
    noFilter: BooleanConstructor;
    expandOnClick: BooleanConstructor;
    showExpand: BooleanConstructor;
    expanded: {
        type: import("vue").PropType<readonly string[]>;
        default: () => never[];
    };
    sortBy: {
        type: import("vue").PropType<readonly SortItem[]>;
        default: () => never[];
    };
    customKeySort: import("vue").PropType<Record<string, import("../../types.js").DataTableCompareFunction>>;
    multiSort: BooleanConstructor;
    mustSort: BooleanConstructor;
    groupBy: {
        type: import("vue").PropType<readonly SortItem[]>;
        default: () => never[];
    };
    showSelect: BooleanConstructor;
    selectStrategy: {
        type: import("vue").PropType<"all" | "page" | "single">;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<readonly any[]>;
        default: () => never[];
    };
    valueComparator: import("vue").PropType<typeof import("../../util/index.js").deepEqual>;
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    transition: {
        type: import("vue").PropType<string | boolean | {
            component: Component;
            hideOnLeave: boolean;
        } | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null>;
        default: {
            component: Component;
            hideOnLeave: boolean;
        } | NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null>;
    };
    page: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    itemsPerPage: Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    };
    items: {
        type: import("vue").PropType<any[]>;
        default: () => never[];
    };
    itemValue: {
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    };
    itemSelectable: {
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: null;
    };
    returnObject: BooleanConstructor;
    search: StringConstructor;
    loading: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    customFilter: import("vue").PropType<import("../../types.js").FilterFunction>;
    customKeyFilter: import("vue").PropType<import("../../composables/filter.js").FilterKeyFunctions>;
    filterKeys: import("vue").PropType<import("../../composables/filter.js").FilterKeys>;
    filterMode: {
        type: import("vue").PropType<import("../../composables/filter.js").FilterMode>;
        default: string;
    };
    noFilter: BooleanConstructor;
    expandOnClick: BooleanConstructor;
    showExpand: BooleanConstructor;
    expanded: {
        type: import("vue").PropType<readonly string[]>;
        default: () => never[];
    };
    sortBy: {
        type: import("vue").PropType<readonly SortItem[]>;
        default: () => never[];
    };
    customKeySort: import("vue").PropType<Record<string, import("../../types.js").DataTableCompareFunction>>;
    multiSort: BooleanConstructor;
    mustSort: BooleanConstructor;
    groupBy: {
        type: import("vue").PropType<readonly SortItem[]>;
        default: () => never[];
    };
    showSelect: BooleanConstructor;
    selectStrategy: {
        type: import("vue").PropType<"all" | "page" | "single">;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<readonly any[]>;
        default: () => never[];
    };
    valueComparator: import("vue").PropType<typeof import("../../util/index.js").deepEqual>;
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    transition: {
        type: import("vue").PropType<string | boolean | {
            component: Component;
            hideOnLeave: boolean;
        } | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null>;
        default: {
            component: Component;
            hideOnLeave: boolean;
        } | NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: Component | undefined;
        }) | null>;
    };
    page: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    itemsPerPage: Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    };
    items: {
        type: import("vue").PropType<any[]>;
        default: () => never[];
    };
    itemValue: {
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    };
    itemSelectable: {
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: null;
    };
    returnObject: BooleanConstructor;
    search: StringConstructor;
    loading: BooleanConstructor;
}>>;
export type VDataIterator = InstanceType<typeof VDataIterator>;

