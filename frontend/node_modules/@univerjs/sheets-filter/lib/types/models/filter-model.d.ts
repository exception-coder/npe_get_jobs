import { CellValue, IRange, IStyleData, Nullable, Worksheet, Disposable } from '@univerjs/core';
import { Observable } from 'rxjs';
import { IAutoFilter, IFilterColumn, FilterBy } from './types';
/**
 * This is the in-memory model of filter.
 */
export declare class FilterModel extends Disposable {
    readonly unitId: string;
    readonly subUnitId: string;
    private readonly _worksheet;
    private readonly _filteredOutRows$;
    /** An observable value. A set of filtered out rows. */
    readonly filteredOutRows$: Observable<Readonly<Set<number>>>;
    get filteredOutRows(): Set<number>;
    set filteredOutRows(rows: Set<number>);
    private readonly _hasCriteria$;
    readonly hasCriteria$: Observable<boolean>;
    private _filterColumnByIndex;
    private _alreadyFilteredOutRows;
    private _range;
    constructor(unitId: string, subUnitId: string, _worksheet: Worksheet);
    dispose(): void;
    /**
     * Serialize this filter model to the JSON format representation.
     */
    serialize(): IAutoFilter;
    /**
     * Deserialize auto filter info to construct a `FilterModel` object.
     * @param unitId workbook id
     * @param subUnitId worksheet id
     * @param worksheet the Worksheet object
     * @param autoFilter auto filter data
     */
    static deserialize(unitId: string, subUnitId: string, worksheet: Worksheet, autoFilter: IAutoFilter): FilterModel;
    private _dump;
    isRowFiltered(row: number): boolean;
    getRange(): IRange;
    /**
     * Get filtered out rows except the specific column. This method is considered as "pure". In
     * another word it would not change `filteredOutRows` on `FilterModel` nor `FilterColumn`.
     * @param col
     */
    getFilteredOutRowsExceptCol(col: number): Set<number>;
    /**
     * Set range of the filter model, this would remove some `IFilterColumn`
     * if the new range not overlaps the old range.
     */
    setRange(range: IRange): void;
    /**
     * Set or remove filter criteria on a specific row.
     */
    setCriteria(col: number, criteria: Nullable<IFilterColumn>, reCalc?: boolean): void;
    getAllFilterColumns(): [number, FilterColumn][];
    getFilterColumn(index: number): Nullable<FilterColumn>;
    reCalc(): void;
    private _getAllFilterColumns;
    private _reCalcAllColumns;
    private _setCriteriaWithoutReCalc;
    private _removeCriteria;
    private _emit;
    private _emitHasCriteria;
    private _rebuildAlreadyFilteredOutRowsWithCache;
    private _reCalcWithNoCacheColumns;
}
interface IFilterColumnContext {
    getAlreadyFilteredOutRows(): Set<number>;
}
/**
 * This is the filter criteria on a specific column.
 */
export declare class FilterColumn extends Disposable {
    readonly unitId: string;
    readonly subUnitId: string;
    private readonly _worksheet;
    /**
     * A `FilterColumn` instance should not be created without a filter criteria.
     */
    private _criteria;
    private readonly _filterColumnContext;
    private _filteredOutRows;
    get filteredOutRows(): Readonly<Nullable<Set<number>>>;
    /** Cache the filter function.  */
    private _filterFn;
    private _range;
    private _column;
    private _filterBy;
    get filterBy(): Readonly<FilterBy>;
    constructor(unitId: string, subUnitId: string, _worksheet: Worksheet, 
    /**
     * A `FilterColumn` instance should not be created without a filter criteria.
     */
    _criteria: IFilterColumn, _filterColumnContext: IFilterColumnContext);
    dispose(): void;
    serialize(): IFilterColumn;
    hasCache(): boolean;
    setRangeAndColumn(range: IRange, column: number): void;
    setCriteria(criteria: IFilterColumn): void;
    getColumnData(): Readonly<IFilterColumn>;
    /**
     * Trigger new calculation on this `FilterModel` instance.
     *
     * @external DO NOT EVER call this method from `FilterColumn` itself. The whole process heavily relies on
     * `filteredOutByOthers`, and it is more comprehensible if we let `FilterModel` take full control over the process.
     */
    reCalc(): Readonly<Nullable<Set<number>>>;
    calc(context: IFilterColumnContext): Readonly<Nullable<Set<number>>>;
    private _generateFilterFn;
}
/**
 * Filter function is a close function which received a cell's content and determine this value is considered as
 * "matched" and the corresponding row would not be filtered out.
 */
export type FilterFn = (value: Nullable<CellValue>) => boolean;
export type ColorFilterFn = (value: Nullable<IStyleData>) => boolean;
/**
 * This functions take a `IFilterColumn` as input and return a function that can be used to filter rows.
 * @param column
 * @returns the filter function that takes the cell's value and return a boolean.
 */
export declare function generateFilterFn(column: IFilterColumn): FilterFn | ColorFilterFn;
export {};
