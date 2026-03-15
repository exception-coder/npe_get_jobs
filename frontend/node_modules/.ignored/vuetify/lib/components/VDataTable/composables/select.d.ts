import { deepEqual } from '../../../util/index.js';
// Types
import type { InjectionKey, PropType, Ref } from 'vue';
import type { DataTableItemProps } from './items.js';
import type { EventProp } from '../../../util/index.js';
export interface SelectableItem {
    value: any;
    selectable: boolean;
}
export interface DataTableSelectStrategy {
    showSelectAll: boolean;
    allSelected: (data: {
        allItems: SelectableItem[];
        currentPage: SelectableItem[];
    }) => SelectableItem[];
    select: (data: {
        items: SelectableItem[];
        value: boolean;
        selected: Set<unknown>;
    }) => Set<unknown>;
    selectAll: (data: {
        value: boolean;
        allItems: SelectableItem[];
        currentPage: SelectableItem[];
        selected: Set<unknown>;
    }) => Set<unknown>;
}
type SelectionProps = Pick<DataTableItemProps, 'itemValue'> & {
    modelValue: readonly any[];
    selectStrategy: 'single' | 'page' | 'all';
    valueComparator?: typeof deepEqual;
    'onUpdate:modelValue': EventProp<[any[]]> | undefined;
};
export declare const makeDataTableSelectProps: <Defaults extends {
    showSelect?: unknown;
    selectStrategy?: unknown;
    modelValue?: unknown;
    valueComparator?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    showSelect: unknown extends Defaults["showSelect"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["showSelect"] ? boolean : boolean | Defaults["showSelect"]>;
        default: unknown extends Defaults["showSelect"] ? boolean : boolean | Defaults["showSelect"];
    };
    selectStrategy: unknown extends Defaults["selectStrategy"] ? {
        type: PropType<"all" | "page" | "single">;
        default: string;
    } : Omit<{
        type: PropType<"all" | "page" | "single">;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["selectStrategy"] ? "all" | "page" | "single" : "all" | "page" | "single" | Defaults["selectStrategy"]>;
        default: unknown extends Defaults["selectStrategy"] ? "all" | "page" | "single" : Defaults["selectStrategy"] | NonNullable<"all" | "page" | "single">;
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: PropType<readonly any[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<readonly any[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["modelValue"] ? readonly any[] : readonly any[] | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? readonly any[] : readonly any[] | Defaults["modelValue"];
    };
    valueComparator: unknown extends Defaults["valueComparator"] ? PropType<typeof deepEqual> : {
        type: PropType<unknown extends Defaults["valueComparator"] ? typeof deepEqual : typeof deepEqual | Defaults["valueComparator"]>;
        default: unknown extends Defaults["valueComparator"] ? typeof deepEqual : typeof deepEqual | Defaults["valueComparator"];
    };
};
export declare const VDataTableSelectionSymbol: InjectionKey<ReturnType<typeof provideSelection>>;
export declare function provideSelection(props: SelectionProps, { allItems, currentPage }: {
    allItems: Ref<SelectableItem[]>;
    currentPage: Ref<SelectableItem[]>;
}): {
    toggleSelect: (item: SelectableItem, index?: number | undefined, event?: MouseEvent | undefined) => void;
    select: (items: SelectableItem[], value: boolean) => void;
    selectAll: (value: boolean) => void;
    isSelected: (items: SelectableItem[] | SelectableItem) => boolean;
    isSomeSelected: (items: SelectableItem[] | SelectableItem) => boolean;
    someSelected: import("vue").ComputedRef<boolean>;
    allSelected: import("vue").ComputedRef<boolean>;
    showSelectAll: Readonly<Ref<boolean, boolean>>;
    lastSelectedIndex: import("vue").ShallowRef<number | null, number | null>;
    selectStrategy: import("vue").ComputedRef<DataTableSelectStrategy>;
};
export declare function useSelection(): {
    toggleSelect: (item: SelectableItem, index?: number | undefined, event?: MouseEvent | undefined) => void;
    select: (items: SelectableItem[], value: boolean) => void;
    selectAll: (value: boolean) => void;
    isSelected: (items: SelectableItem[] | SelectableItem) => boolean;
    isSomeSelected: (items: SelectableItem[] | SelectableItem) => boolean;
    someSelected: import("vue").ComputedRef<boolean>;
    allSelected: import("vue").ComputedRef<boolean>;
    showSelectAll: Readonly<Ref<boolean, boolean>>;
    lastSelectedIndex: import("vue").ShallowRef<number | null, number | null>;
    selectStrategy: import("vue").ComputedRef<DataTableSelectStrategy>;
};

