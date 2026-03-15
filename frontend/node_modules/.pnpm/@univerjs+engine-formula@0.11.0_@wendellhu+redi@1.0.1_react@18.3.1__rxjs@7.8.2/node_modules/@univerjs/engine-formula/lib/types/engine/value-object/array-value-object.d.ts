import { Nullable } from '@univerjs/core';
import { callbackMapFnType, IArrayValueObject, BaseValueObject } from './base-value-object';
import { compareToken } from '../../basics/token';
import { ArrayBinarySearchType, ArrayOrderSearchType } from '../utils/compare';
export declare function fromObjectToString(array: IArrayValueObject): string;
export declare function transformToValueObject(array?: Array<Array<number | string | boolean | null>>, isIgnoreNumberPattern?: boolean): BaseValueObject[][];
export declare function transformToValue(array?: Nullable<BaseValueObject>[][]): (string | number | boolean | null)[][];
export declare class ArrayValueObject extends BaseValueObject {
    /**
     * Create an array value object based on the string or IArrayValueObject data.
     * @param rawValue
     * @returns
     */
    static create(rawValue: string | IArrayValueObject): ArrayValueObject;
    /**
     * Create an array value object based on the array data.
     * @param array
     * @returns
     */
    static createByArray(array: Array<Array<number | string | boolean | null>>): ArrayValueObject;
    private _values;
    private _rowCount;
    private _columnCount;
    private _unitId;
    private _sheetId;
    private _currentRow;
    private _currentColumn;
    private _sliceCache;
    private _flattenCache;
    /**
     * The default value of the array, null values in comparison results support setting to false
     */
    private _defaultValue;
    private _flattenPosition;
    constructor(rawValue: string | IArrayValueObject);
    dispose(): void;
    clone(): ArrayValueObject;
    getRowCount(): number;
    setRowCount(rowCount: number): void;
    getColumnCount(): number;
    setColumnCount(columnCount: number): void;
    setCurrent(row: number, column: number): void;
    setUnitId(unitId: string): void;
    getUnitId(): string;
    setSheetId(sheetId: string): void;
    getSheetId(): string;
    getCurrentRow(): number;
    getCurrentColumn(): number;
    getArrayValue(): Nullable<BaseValueObject>[][];
    setArrayValue(value: BaseValueObject[][]): void;
    isArray(): boolean;
    setDefaultValue(value: Nullable<BaseValueObject>): void;
    get(row: number, column: number): Nullable<BaseValueObject>;
    getRealValue(row: number, column: number): BaseValueObject | null;
    getValueOrDefault(row: number, column: number): Nullable<BaseValueObject>;
    set(row: number, column: number, value: Nullable<BaseValueObject>): void;
    getRangePosition(): {
        startRow: number;
        endRow: number;
        startColumn: number;
        endColumn: number;
    };
    iterator(callback: (valueObject: Nullable<BaseValueObject>, rowIndex: number, columnIndex: number) => Nullable<boolean>): void;
    iteratorReverse(callback: (valueObject: Nullable<BaseValueObject>, rowIndex: number, columnIndex: number) => Nullable<boolean>): void;
    getLastTruePosition(): Nullable<{
        row: number;
        column: number;
    }>;
    getFirstTruePosition(): Nullable<{
        row: number;
        column: number;
    }>;
    getFirstCell(): BaseValueObject;
    getLastCell(): BaseValueObject;
    /**
     * Referring to matrix calculations,
     * extract the matching values from a true/false matrix based on parameters and store them in a two-dimensional array.
     * implement x[x<10]
     * https://numpy.org/doc/stable/user/basics.indexing.html
     * @param takeArray
     */
    pick(takeArray: ArrayValueObject): ArrayValueObject;
    pickRaw(takeArray: ArrayValueObject): Nullable<BaseValueObject>[][];
    /**
     * Flatten a 2D array.
     * https://numpy.org/doc/stable/reference/generated/numpy.chararray.flatten.html#numpy.chararray.flatten
     */
    flatten(): ArrayValueObject;
    /**
     * Flatten a 2D array.
     * In Excel, errors and blank cells are ignored, which results in a binary search that cannot strictly adhere to the number of cells.
     */
    flattenPosition(): {
        stringArray: BaseValueObject[];
        stringPosition: number[];
        numberArray: BaseValueObject[];
        numberPosition: number[];
    };
    /**
     * I'm looking to perform slicing operations on 2D arrays, similar to the functionality provided by NumPy.
     * https://numpy.org/doc/stable/user/basics.indexing.html
     * @rowParam start:stop:step
     * @columnParam start:stop:step
     * @param takeArray
     */
    slice(rowParam: Nullable<Array<Nullable<number>>>, columnParam: Nullable<Array<Nullable<number>>>): ArrayValueObject | undefined;
    sortByRow(index: number): void;
    sortByColumn(index: number): void;
    transpose(): ArrayValueObject;
    /**
     * Due to the inability to effectively utilize the cache,
     * the sequential matching approach is only used for special matches in XLOOKUP and XMATCH.
     * For example, when match_mode is set to 1 and -1 for an exact match. If not found, it returns the next smaller item.
     */
    orderSearch(valueObject: BaseValueObject, searchType?: ArrayOrderSearchType, isDesc?: boolean, isFuzzyMatching?: boolean): void | {
        row: number;
        column: number;
    } | null;
    binarySearch(valueObject: BaseValueObject, searchType?: ArrayBinarySearchType, matchType?: ArrayOrderSearchType): number | undefined;
    /**
     * searchType defaults to ascending order
     *
     * matchType defaults to the maximum value less than the search value, which is used for the default matching mode of VLOOKUP/LOOKUP/HLOOKUP.
     * @param valueObject
     * @param searchArray
     * @param positionArray
     * @param searchType
     * @param matchType
     * @returns
     */
    private _binarySearch;
    sum(): BaseValueObject;
    max(): BaseValueObject;
    min(): BaseValueObject;
    count(): BaseValueObject;
    countA(): BaseValueObject;
    countBlank(): BaseValueObject;
    getNegative(): BaseValueObject;
    getReciprocal(): BaseValueObject;
    plus(valueObject: BaseValueObject): BaseValueObject;
    minus(valueObject: BaseValueObject): BaseValueObject;
    multiply(valueObject: BaseValueObject): BaseValueObject;
    divided(valueObject: BaseValueObject): BaseValueObject;
    mod(valueObject: BaseValueObject): BaseValueObject;
    modInverse(valueObject: BaseValueObject): BaseValueObject;
    compare(valueObject: BaseValueObject, operator: compareToken, isCaseSensitive?: boolean): BaseValueObject;
    concatenateFront(valueObject: BaseValueObject): BaseValueObject;
    concatenateBack(valueObject: BaseValueObject): BaseValueObject;
    map(callbackFn: callbackMapFnType): BaseValueObject;
    mapValue(callbackFn: callbackMapFnType): BaseValueObject;
    pow(valueObject: BaseValueObject): BaseValueObject;
    /**
     *
     * @param valueObject In the case of an inverse, it is certainly not an array.
     * @returns
     */
    powInverse(valueObject: BaseValueObject): BaseValueObject;
    sqrt(): BaseValueObject;
    cbrt(): BaseValueObject;
    cos(): BaseValueObject;
    cosh(): BaseValueObject;
    acos(): BaseValueObject;
    acosh(): BaseValueObject;
    sin(): BaseValueObject;
    sinh(): BaseValueObject;
    asin(): BaseValueObject;
    asinh(): BaseValueObject;
    tan(): BaseValueObject;
    tanh(): BaseValueObject;
    atan(): BaseValueObject;
    atanh(): BaseValueObject;
    atan2(valueObject: BaseValueObject): BaseValueObject;
    atan2Inverse(valueObject: BaseValueObject): BaseValueObject;
    mean(ddof?: number): BaseValueObject;
    median(): BaseValueObject;
    /**
     * ┌──────────────┬────────────────────────────────┬───────────────────┐
     * │ Function     │ Ignore logical values and text │ Type              │
     * ├──────────────┼────────────────────────────────┼───────────────────┤
     * │ VAR.S (VAR)  │ TRUE                           │ sample            │
     * │ VAR.P (VARP) │ TRUE                           │ entire population │
     * │ VARA         │ FALSE                          │ sample            │
     * │ VARPA        │ FALSE                          │ entire population │
     * └──────────────┴────────────────────────────────┴───────────────────┘
     *
     * for VARPA and VARA, strings and FALSE are counted as 0, TRUE is counted as 1
     * for VAR.S/VAR, or VAR.P/VARP, strings,TRUE and FALSE are ignored
     * Since sum ignores strings and booleans, they are ignored here too, and VAR.S and VAR.P are used more
     *
     * VAR.S assumes that its arguments are a sample of the population, like numpy.var(data, ddof=1)
     * VAR.P assumes that its arguments are the entire population, like numpy.var(data, ddof=0)
     * numpy.var uses ddof=0 (Delta Degrees of Freedom) by default, so we use ddof=0 here
     *
     */
    var(ddof?: number): BaseValueObject;
    /**
     * STDEV.P (STDEVP): ddof=0, ignore strings and booleans
     * STDEV.S (STDEV): ddof=1, ignore strings and booleans
     *
     * STDEVPA: ddof=0,
     * STDEVA: ddof=1,
     * @returns
     */
    std(ddof?: number): BaseValueObject;
    log(): BaseValueObject;
    log10(): BaseValueObject;
    exp(): BaseValueObject;
    abs(): BaseValueObject;
    round(valueObject: BaseValueObject): BaseValueObject;
    roundInverse(valueObject: BaseValueObject): BaseValueObject;
    floor(valueObject: BaseValueObject): BaseValueObject;
    floorInverse(valueObject: BaseValueObject): BaseValueObject;
    ceil(valueObject: BaseValueObject): BaseValueObject;
    ceilInverse(valueObject: BaseValueObject): BaseValueObject;
    toValue(): (string | number | boolean | null)[][];
    private _clearCache;
    private _sort;
    private _transposeArray;
    private _batchOperator;
    private _batchOperatorValue;
    private __batchOperatorRowValue;
    private _batchOperatorArray;
    private _checkArrayCalculateType;
    private _formatValue;
    private _createNewArray;
}
export declare class ValueObjectFactory {
    static create(rawValue: string | number | boolean | null, isIgnoreNumberPattern?: boolean): BaseValueObject;
}
