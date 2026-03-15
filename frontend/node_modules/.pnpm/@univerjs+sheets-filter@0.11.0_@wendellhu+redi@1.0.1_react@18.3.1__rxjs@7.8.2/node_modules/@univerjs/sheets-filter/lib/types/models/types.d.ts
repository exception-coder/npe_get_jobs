import { BooleanNumber, IRange } from '@univerjs/core';
/**
 * The filter types.
 */
export declare enum FilterBy {
    VALUES = 0,
    COLORS = 1,
    CONDITIONS = 2
}
/**
 * Data of a filter in a {@link Worksheet}.
 *
 * Please refer to 18.3.2 AutoFilter Settings. Properties of this interface would be added in the future.
 * Please make sure that it is backward compatible.
 *
 * @property {IRange} ref The range of the filter.
 * @property {IFilterColumn[]} [filterColumns] The filter criteria of each column.
 * @property {number[]} [cachedFilteredOut] The cached filtered out row numbers.
 */
export interface IAutoFilter {
    ref: IRange;
    filterColumns?: IFilterColumn[];
    cachedFilteredOut?: number[];
}
/**
 * The filter criteria of a column.
 *
 * @property {number} colId The column number.
 * @property {IFilters} [filters] The basic filters (filter by value).
 * @property {ICustomFilters} [customFilters] The custom filters.
 */
export interface IFilterColumn {
    colId: number;
    filters?: IFilters;
    colorFilters?: IColorFilters;
    customFilters?: ICustomFilters;
}
/**
 * Basic filters (filter by value).
 *
 * @property {true} [blank] Filter by blank. If this field is present, blank cells would be visible.
 * @property {Array<string>} [filters] Filter by values. Cells with values in this array would be visible.
 */
export interface IFilters {
    blank?: true;
    filters?: Array<string>;
}
/**
 * Color filters.
 *
 * @property {Array<string | null>} [cellFillColor] The cell fill colors to filter by. If this field is present, cells with these fill colors would be visible.
 * @property {Array<string>} [cellTextColor] The cell text colors to filter by. If this field is present, cells with these text colors would be visible.
 */
export interface IColorFilters {
    cellFillColors?: Array<string | null>;
    cellTextColors?: Array<string>;
}
/**
 * Custom filters.
 *
 * @property {BooleanNumber.TRUE} and The logical operator of the custom filters. If this field is present,
 * the custom filters would be connected by 'and'. Otherwise, they would be connected by 'or'.
 * @property {ICustomFilter[]} customFilters The custom filters.
 */
export interface ICustomFilters {
    and?: BooleanNumber.TRUE;
    customFilters: [ICustomFilter] | [ICustomFilter, ICustomFilter];
}
/**
 * A custom filter.
 *
 * @property {string | number} val The value to be compared.
 * @property {CustomFilterOperator} [operator] The operator of the comparison. If this field is empty, the operator would be 'equal'.
 */
export interface ICustomFilter {
    val: string | number;
    operator?: CustomFilterOperator;
}
export interface IDynamicFilter {
    val: string | number;
    type: DynamicFilterOperator;
}
/**
 * Not used now. Would be used in the future.
 */
export declare enum DynamicFilterOperator {
    ABOVE_AVERAGE = "aboveAverage"
}
