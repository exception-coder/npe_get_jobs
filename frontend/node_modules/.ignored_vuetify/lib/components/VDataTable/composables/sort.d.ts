// Types
import type { PropType, Ref } from 'vue';
import type { DataTableCompareFunction, InternalDataTableHeader } from '../types.js';
import type { InternalItem } from '../../../composables/filter.js';
export declare const makeDataTableSortProps: <Defaults extends {
    sortBy?: unknown;
    customKeySort?: unknown;
    multiSort?: unknown;
    mustSort?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
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
    multiSort: unknown extends Defaults["multiSort"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["multiSort"] ? boolean : boolean | Defaults["multiSort"]>;
        default: unknown extends Defaults["multiSort"] ? boolean : boolean | Defaults["multiSort"];
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
type SortProps = {
    sortBy: readonly SortItem[];
    'onUpdate:sortBy': ((value: any) => void) | undefined;
    mustSort: boolean;
    multiSort: boolean;
};
export declare function createSort(props: SortProps): {
    sortBy: Ref<readonly SortItem[], readonly SortItem[]> & {
        readonly externalValue: readonly SortItem[];
    };
    mustSort: Readonly<Ref<boolean, boolean>>;
    multiSort: Readonly<Ref<boolean, boolean>>;
};
export declare function provideSort(options: {
    sortBy: Ref<readonly SortItem[]>;
    mustSort: Ref<boolean>;
    multiSort: Ref<boolean>;
    page?: Ref<number>;
}): {
    sortBy: Ref<readonly SortItem[], readonly SortItem[]>;
    toggleSort: (column: InternalDataTableHeader) => void;
    isSorted: (column: InternalDataTableHeader) => boolean;
};
export declare function useSort(): {
    sortBy: Ref<readonly SortItem[], readonly SortItem[]>;
    toggleSort: (column: InternalDataTableHeader) => void;
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

