// Types
import type { ComputedRef, MaybeRefOrGetter, PropType, Ref } from 'vue';
import type { Group, GroupableItem, GroupSummary } from './group.js';
import type { EventProp } from '../../../util/index.js';
export declare const makeDataTablePaginateProps: <Defaults extends {
    page?: unknown;
    itemsPerPage?: unknown;
    pageBy?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    page: unknown extends Defaults["page"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["page"] ? string | number : string | number | Defaults["page"]>;
        default: unknown extends Defaults["page"] ? string | number : Defaults["page"] | NonNullable<string | number>;
    };
    itemsPerPage: unknown extends Defaults["itemsPerPage"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["itemsPerPage"] ? string | number : string | number | Defaults["itemsPerPage"]>;
        default: unknown extends Defaults["itemsPerPage"] ? string | number : Defaults["itemsPerPage"] | NonNullable<string | number>;
    };
    pageBy: unknown extends Defaults["pageBy"] ? {
        type: PropType<"any" | "auto" | "item">;
        default: string;
    } : Omit<{
        type: PropType<"any" | "auto" | "item">;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["pageBy"] ? "any" | "auto" | "item" : "any" | "auto" | "item" | Defaults["pageBy"]>;
        default: unknown extends Defaults["pageBy"] ? "any" | "auto" | "item" : Defaults["pageBy"] | NonNullable<"any" | "auto" | "item">;
    };
};
export type VDataTablePaginationInjectionData = {
    page: Ref<number>;
    itemsPerPage: Ref<number>;
    startIndex: Ref<number>;
    stopIndex: Ref<number>;
    pageCount: Ref<number>;
    itemsLength: Ref<number>;
    prevPage: () => void;
    nextPage: () => void;
    setPage: (value: number) => void;
    setItemsPerPage: (value: number) => void;
};
type PaginationProps = {
    page: number | string;
    'onUpdate:page': EventProp | undefined;
    itemsPerPage: number | string;
    'onUpdate:itemsPerPage': EventProp | undefined;
    itemsLength?: number | string;
};
export declare function createPagination(props: PaginationProps): {
    page: Ref<number, number> & {
        readonly externalValue: string | number;
    };
    itemsPerPage: Ref<number, number> & {
        readonly externalValue: string | number;
    };
};
export declare function providePagination(options: {
    page: Ref<number>;
    itemsPerPage: Ref<number>;
    itemsLength: Ref<number>;
}): {
    page: Ref<number, number>;
    itemsPerPage: Ref<number, number>;
    startIndex: ComputedRef<number>;
    stopIndex: ComputedRef<number>;
    pageCount: ComputedRef<number>;
    itemsLength: Ref<number, number>;
    nextPage: () => void;
    prevPage: () => void;
    setPage: (value: number) => void;
    setItemsPerPage: (value: number) => void;
};
export declare function usePagination(): VDataTablePaginationInjectionData;
export declare function usePaginatedItems<T>(options: {
    items: MaybeRefOrGetter<readonly T[]>;
    startIndex: Ref<number>;
    stopIndex: Ref<number>;
    itemsPerPage: Ref<number>;
}): {
    paginatedItems: ComputedRef<readonly T[]>;
};
export declare function usePaginatedGroups<T extends GroupableItem>(options: {
    pageBy: ComputedRef<'item' | 'group' | 'any'>;
    sortedItems: Ref<readonly T[]>;
    paginate: <TItem>(items: MaybeRefOrGetter<readonly TItem[]>) => {
        paginatedItems: ComputedRef<readonly TItem[]>;
        pageCount: ComputedRef<number>;
        setItemsPerPage: (value: number) => void;
    };
    group: (items: MaybeRefOrGetter<readonly T[]>) => {
        flatItems: ComputedRef<readonly (T | Group<T> | GroupSummary<T>)[]>;
        groups: ComputedRef<readonly Group<T>[]>;
    };
}): {
    pageCount: ComputedRef<number>;
    setItemsPerPage: (value: number) => void;
    paginatedItems: ComputedRef<readonly (T | Group<T> | GroupSummary<T>)[]>;
};

