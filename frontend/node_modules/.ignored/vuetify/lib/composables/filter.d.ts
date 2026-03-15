// Types
import type { PropType, Ref } from 'vue';
import type { MaybeRef } from '../util/index.js';
/**
 * - boolean: match without highlight
 * - number: single match (index), length already known
 * - []: single match (start, end)
 * - [][]: multiple matches (start, end), shouldn't overlap
 */
export type FilterMatchArraySingle = readonly [number, number];
export type FilterMatchArrayMultiple = readonly FilterMatchArraySingle[];
export type FilterMatchArray = FilterMatchArraySingle | FilterMatchArrayMultiple;
export type FilterMatch = boolean | number | FilterMatchArray;
export type FilterFunction = (value: string, query: string, item?: InternalItem) => FilterMatch;
export type FilterKeyFunctions = Record<string, FilterFunction>;
export type FilterKeys = string | string[];
export type FilterMode = 'some' | 'every' | 'union' | 'intersection';
export interface FilterProps {
    customFilter?: FilterFunction;
    customKeyFilter?: FilterKeyFunctions;
    filterKeys?: FilterKeys;
    filterMode?: FilterMode;
    noFilter?: boolean;
}
export interface InternalItem<T = any> {
    value: any;
    raw: T;
    type?: string;
}
type FilterResult = {
    index: number;
    matches: Record<string, FilterMatchArrayMultiple | undefined>;
    type?: 'divider' | 'subheader';
};
// Composables
export declare const defaultFilter: FilterFunction;
export declare const makeFilterProps: <Defaults extends {
    customFilter?: unknown;
    customKeyFilter?: unknown;
    filterKeys?: unknown;
    filterMode?: unknown;
    noFilter?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    customFilter: unknown extends Defaults["customFilter"] ? PropType<FilterFunction> : {
        type: PropType<unknown extends Defaults["customFilter"] ? FilterFunction : FilterFunction | Defaults["customFilter"]>;
        default: unknown extends Defaults["customFilter"] ? FilterFunction : FilterFunction | Defaults["customFilter"];
    };
    customKeyFilter: unknown extends Defaults["customKeyFilter"] ? PropType<FilterKeyFunctions> : {
        type: PropType<unknown extends Defaults["customKeyFilter"] ? FilterKeyFunctions : FilterKeyFunctions | Defaults["customKeyFilter"]>;
        default: unknown extends Defaults["customKeyFilter"] ? FilterKeyFunctions : FilterKeyFunctions | Defaults["customKeyFilter"];
    };
    filterKeys: unknown extends Defaults["filterKeys"] ? PropType<FilterKeys> : {
        type: PropType<unknown extends Defaults["filterKeys"] ? FilterKeys : Defaults["filterKeys"] | FilterKeys>;
        default: unknown extends Defaults["filterKeys"] ? FilterKeys : Defaults["filterKeys"] | NonNullable<FilterKeys>;
    };
    filterMode: unknown extends Defaults["filterMode"] ? {
        type: PropType<FilterMode>;
        default: string;
    } : Omit<{
        type: PropType<FilterMode>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["filterMode"] ? FilterMode : Defaults["filterMode"] | FilterMode>;
        default: unknown extends Defaults["filterMode"] ? FilterMode : Defaults["filterMode"] | NonNullable<FilterMode>;
    };
    noFilter: unknown extends Defaults["noFilter"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["noFilter"] ? boolean : boolean | Defaults["noFilter"]>;
        default: unknown extends Defaults["noFilter"] ? boolean : boolean | Defaults["noFilter"];
    };
};
// eslint-disable-next-line complexity
export declare function filterItems(items: readonly (readonly [item: InternalItem, transformed: {}])[] | readonly InternalItem[], query: string, options?: {
    customKeyFilter?: FilterKeyFunctions;
    default?: FilterFunction;
    filterKeys?: FilterKeys;
    filterMode?: FilterMode;
    noFilter?: boolean;
}): FilterResult[];
export declare function useFilter<T extends InternalItem>(props: FilterProps, items: MaybeRef<T[]>, query: Ref<string | undefined> | (() => string | undefined), options?: {
    transform?: (item: T) => {};
    customKeyFilter?: MaybeRef<FilterKeyFunctions | undefined>;
}): {
    filteredItems: import("vue").ShallowRef<T[], T[]>;
    filteredMatches: import("vue").ShallowRef<Map<unknown, Record<string, FilterMatchArrayMultiple | undefined>>, Map<unknown, Record<string, FilterMatchArrayMultiple | undefined>>>;
    getMatches: (item: T) => Record<string, FilterMatchArrayMultiple | undefined> | undefined;
};
export declare function highlightResult(name: string, text: string, matches: FilterMatchArrayMultiple | undefined): string | JSX.Element[];

