// Types
import type { Ref } from 'vue';
import type { SortItem } from './sort.js';
export declare function useOptions({ page, itemsPerPage, sortBy, groupBy, search }: {
    page: Ref<number>;
    itemsPerPage: Ref<number>;
    sortBy: Ref<readonly SortItem[]>;
    groupBy: Ref<readonly SortItem[]>;
    search: Ref<string | undefined>;
}): void;
