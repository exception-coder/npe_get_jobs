// Types
import type { PropType, Ref } from 'vue';
import type { DataTableCompareFunction, InternalDataTableHeader } from '../types.js';
import type { InternalItem } from '../../../composables/filter.js';
export declare const makeDataTableSortProps: <Defaults extends {
    initialSortOrder?: unknown;
    sortBy?: unknown;
    customKeySort?: unknown;
    multiSort?: unknown;
    mustSort?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    initialSortOrder: unknown extends Defaults["initialSortOrder"] ? {
        type: PropType<"asc" | "desc">;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<"asc" | "desc">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["initialSortOrder"] ? "asc" | "desc" : "asc" | "desc" | Defaults["initialSortOrder"]>;
        default: unknown extends Defaults["initialSortOrder"] ? "asc" | "desc" : Defaults["initialSortOrder"] | NonNullable<"asc" | "desc">;
    };
    sortBy: unknown extends Defaults["sortBy"] ? {
        type: PropType<readonly SortItem[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<readonly SortItem[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["sortBy"] ? readonly SortItem[] : readonly SortItem[] | Defaults["sortBy"]>;
        default: unknown extends Defaults["sortBy"] ? readonly SortItem[] : readonly SortItem[] | Defaults["sortBy"];
    };
    customKeySort: unknown extends Defaults["customKeySort"] ? PropType<Record<string, DataTableCompareFunction>> : {
        type: PropType<unknown extends Defaults["customKeySort"] ? Record<string, DataTableCompareFunction> : Record<string, DataTableCompareFunction> | Defaults["customKeySort"]>;
        default: unknown extends Defaults["customKeySort"] ? Record<string, DataTableCompareFunction> : Record<string, DataTableCompareFunction> | Defaults["customKeySort"];
    };
    multiSort: unknown extends Defaults["multiSort"] ? {
        type: PropType<boolean | MultiSortProps>;
        default: boolean;
    } : Omit<{
        type: PropType<boolean | MultiSortProps>;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["multiSort"] ? boolean | MultiSortProps : boolean | MultiSortProps | Defaults["multiSort"]>;
        default: unknown extends Defaults["multiSort"] ? boolean | MultiSortProps : Defaults["multiSort"] | NonNullable<boolean | MultiSortProps>;
    };
    mustSort: unknown extends Defaults["mustSort"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["mustSort"] ? boolean : boolean | Defaults["mustSort"]>;
        default: unknown extends Defaults["mustSort"] ? boolean : boolean | Defaults["mustSort"];
    };
};
export type SortItem = {
    key: string;
    order?: boolean | 'asc' | 'desc';
};
export type MultiSortProps = {
    key?: 'ctrl';
    mode?: MultiSortMode;
    modifier?: 'alt' | 'shift';
};
export type MultiSortMode = 'append' | 'prepend';
type SortProps = {
    initialSortOrder: 'asc' | 'desc';
    sortBy: readonly SortItem[];
    'onUpdate:sortBy': ((value: any) => void) | undefined;
    multiSort: boolean | MultiSortProps;
    mustSort: boolean;
};
export declare function createSort(props: SortProps): {
    initialSortOrder: Readonly<Ref<"asc" | "desc", "asc" | "desc">>;
    sortBy: Ref<readonly SortItem[], readonly SortItem[]> & {
        readonly externalValue: readonly SortItem[];
    };
    multiSort: Readonly<Ref<boolean | MultiSortProps, boolean | MultiSortProps>>;
    mustSort: Readonly<Ref<boolean, boolean>>;
};
export declare function provideSort(options: {
    initialSortOrder: Ref<'asc' | 'desc'>;
    sortBy: Ref<readonly SortItem[]>;
    multiSort: Ref<boolean | MultiSortProps>;
    mustSort: Ref<boolean>;
    page?: Ref<number>;
}): {
    sortBy: Ref<readonly SortItem[], readonly SortItem[]>;
    toggleSort: (column: InternalDataTableHeader, event?: KeyboardEvent | PointerEvent | undefined, mandatory?: boolean) => void;
    isSorted: (column: InternalDataTableHeader) => boolean;
};
export declare function useSort(): {
    sortBy: Ref<readonly SortItem[], readonly SortItem[]>;
    toggleSort: (column: InternalDataTableHeader, event?: KeyboardEvent | PointerEvent | undefined, mandatory?: boolean | undefined) => void;
    isSorted: (column: InternalDataTableHeader) => boolean;
};
// TODO: abstract into project composable
export declare function useSortedItems<T extends InternalItem>(props: {
    customKeySort: Record<string, DataTableCompareFunction> | undefined;
}, items: Ref<T[]>, sortBy: Ref<readonly SortItem[]>, options?: {
    transform?: (item: T) => {};
    sortFunctions?: Ref<Record<string, DataTableCompareFunction> | undefined>;
    sortRawFunctions?: Ref<Record<string, DataTableCompareFunction> | undefined>;
}): {
    sortedItems: import("vue").ComputedRef<T[]>;
};
export declare function sortItems<T extends InternalItem>(items: T[], sortByItems: readonly SortItem[], locale: string, options?: {
    transform?: (item: T) => Record<string, any>;
    sortFunctions?: Record<string, DataTableCompareFunction>;
    sortRawFunctions?: Record<string, DataTableCompareFunction>;
}): T[];

