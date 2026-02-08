// Types
import type { MaybeRefOrGetter, PropType, Ref } from 'vue';
import type { SortItem } from './sort.js';
import type { DataTableItem } from '../types.js';
export interface GroupableItem<T = any> {
    type: 'item';
    raw: T;
}
export interface Group<T = any> {
    type: 'group';
    depth: number;
    id: string;
    key: string;
    value: any;
    items: readonly (T | Group<T> | GroupSummary<T>)[];
}
export interface GroupSummary<T = any> {
    type: 'group-summary';
    depth: number;
    id: string;
    key: string;
    value: any;
    items: readonly (T | Group<T> | GroupSummary<T>)[];
}
export declare const makeDataTableGroupProps: <Defaults extends {
    groupBy?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    groupBy: unknown extends Defaults["groupBy"] ? {
        type: PropType<readonly SortItem[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<readonly SortItem[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["groupBy"] ? readonly SortItem[] : readonly SortItem[] | Defaults["groupBy"]>;
        default: unknown extends Defaults["groupBy"] ? readonly SortItem[] : readonly SortItem[] | Defaults["groupBy"];
    };
};
type GroupProps = {
    groupBy: readonly SortItem[];
    'onUpdate:groupBy': ((value: SortItem[]) => void) | undefined;
};
export declare function createGroupBy(props: GroupProps): {
    groupBy: Ref<readonly SortItem[], readonly SortItem[]> & {
        readonly externalValue: readonly SortItem[];
    };
};
export declare function provideGroupBy(options: {
    groupBy: Ref<readonly SortItem[]>;
    sortBy: Ref<readonly SortItem[]>;
    disableSort?: Ref<boolean>;
}): {
    sortByWithGroups: import("vue").ComputedRef<SortItem[]>;
    toggleGroup: (group: Group<any>) => void;
    opened: Ref<Set<string> & Omit<Set<string>, keyof Set<any>>, Set<string> | (Set<string> & Omit<Set<string>, keyof Set<any>>)>;
    groupBy: Ref<readonly SortItem[], readonly SortItem[]>;
    extractRows: <T extends GroupableItem<any>>(items: readonly (T | Group<T> | GroupSummary<T>)[]) => T[];
    isGroupOpen: (group: Group<any>) => boolean;
};
export declare function useGroupBy(): {
    opened: Ref<Set<string>, Set<string>>;
    toggleGroup: (group: Group<any>) => void;
    isGroupOpen: (group: Group<any>) => boolean;
    sortByWithGroups: Ref<SortItem[], SortItem[]>;
    groupBy: Ref<readonly SortItem[], readonly SortItem[]>;
    extractRows: (items: (DataTableItem<any> | Group<DataTableItem<any>>)[]) => DataTableItem<any>[];
};
export declare function useGroupedItems<T extends GroupableItem>(items: Ref<T[]>, groupBy: Ref<readonly SortItem[]>, opened: Ref<Set<string>>, hasSummary: MaybeRefOrGetter<boolean>): {
    flatItems: import("vue").ComputedRef<readonly (T | Group<T> | GroupSummary<T>)[]>;
};

