import { IRange } from '../sheets/typedef';
import { Nullable } from './types';
/**
 * Object Matrix Primitive Type
 */
export interface IObjectMatrixPrimitiveType<T> {
    [key: number]: IObjectArrayPrimitiveType<T>;
}
export interface IObjectArrayPrimitiveType<T> {
    [key: number]: T;
}
export declare function mapObjectMatrix<T, R>(o: IObjectMatrixPrimitiveType<T>, callback: (row: number, col: number, value: T) => R): IObjectMatrixPrimitiveType<R>;
export declare function getArrayLength<T>(o: IObjectArrayPrimitiveType<T> | IObjectMatrixPrimitiveType<T>): number;
/**
 * This function has bug of undefined value to be inserted.
 * @deprecated
 */
export declare function insertMatrixArray<T>(index: number, value: T, o: IObjectArrayPrimitiveType<T> | IObjectMatrixPrimitiveType<T>): void;
export declare function spliceArray<T>(start: number, count: number, o: IObjectArrayPrimitiveType<T> | IObjectMatrixPrimitiveType<T>): void;
export declare function concatMatrixArray<T>(source: IObjectArrayPrimitiveType<T>, target: IObjectArrayPrimitiveType<T>): IObjectArrayPrimitiveType<T>;
export declare function sliceMatrixArray<T>(start: number, end: number, matrixArray: IObjectArrayPrimitiveType<T>): IObjectArrayPrimitiveType<T>;
export declare function moveMatrixArray<T>(fromIndex: number, count: number, toIndex: number, o: IObjectArrayPrimitiveType<T> | IObjectMatrixPrimitiveType<T>): void;
/**
 * A two-dimensional array represented by a two-level deep object and provides an array-like API
 *
 * @beta
 */
export declare class ObjectMatrix<T> {
    private _matrix;
    constructor(matrix?: IObjectMatrixPrimitiveType<T>);
    static MakeObjectMatrixSize<T>(size: number): ObjectMatrix<T>;
    getMatrix(): IObjectMatrixPrimitiveType<T>;
    forEach(callback: (row: number, objectArray: IObjectArrayPrimitiveType<T>) => Nullable<boolean>): ObjectMatrix<T>;
    forRow(callback: (row: number, cols: number[]) => Nullable<boolean>): ObjectMatrix<T>;
    /**
     * Iterate the object matrix with row priority, which means it scan the whole range row by row.
     */
    forValue(callback: (row: number, col: number, value: T) => Nullable<boolean>): ObjectMatrix<T>;
    swapRow(src: number, target: number): void;
    getRow(rowIndex: number): Nullable<IObjectArrayPrimitiveType<T>>;
    getRowOrCreate(rowIndex: number): IObjectArrayPrimitiveType<T>;
    reset(): void;
    hasValue(): boolean;
    getValue(row: number, column: number): Nullable<T>;
    setValue(row: number, column: number, value: T): void;
    /**
     * ！！
     * Please +1 ‘！’, who fell into this pit.
     * @deprecated use `realDelete` or `splice`
     */
    deleteValue(row: number, column: number): void;
    realDeleteValue(row: number, column: number): void;
    setRow(rowNumber: number, row: IObjectArrayPrimitiveType<T>): void;
    moveRows(start: number, count: number, target: number): void;
    moveColumns(start: number, count: number, target: number): void;
    insertRows(start: number, count: number): void;
    insertColumns(start: number, count: number): void;
    removeRows(start: number, count: number): void;
    removeColumns(start: number, count: number): void;
    /**
     * Return a fragment of the original data matrix. Note that the returned matrix's row matrix would start from
     * 0 not `startRow`. Neither does its column matrix. If you want to get the original matrix, use `getSlice`.
     *
     * @param startRow
     * @param endRow
     * @param startColumn
     * @param endColumn
     * @returns
     */
    getFragment(startRow: number, endRow: number, startColumn: number, endColumn: number): ObjectMatrix<T>;
    /**
     * Return a slice of the original data matrix. Note that the returned matrix's row matrix would start from
     * `startRow` not 0, and the same does its column index. You may be looking for `getFragment` if you want
     * both of the indexes start from 0.
     *
     * @param startRow
     * @param endRow
     * @param startColumn
     * @param endColumn
     * @returns
     */
    getSlice(startRow: number, endRow: number, startColumn: number, endColumn: number): ObjectMatrix<T>;
    getSizeOf(): number;
    getLength(): number;
    getRange(): IRange;
    toNativeArray(): T[];
    toArray(): T[][];
    toFullArray(): T[][];
    /**
     * @deprecated Use getMatrix as a substitute.
     */
    toJSON(): IObjectMatrixPrimitiveType<T>;
    clone(): IObjectMatrixPrimitiveType<T>;
    /**
     * @deprecated Use clone as a substitute.
     */
    getData(): IObjectMatrixPrimitiveType<T>;
    getArrayData(): IObjectMatrixPrimitiveType<T>;
    /**
     * the function can only be used in all the row and column are positive integer
     * @description the positive integer in V8 Object is stored in a fast memory space and it is sorted  when we get the keys
     * @returns {IRange} the start and end scope of the matrix
     */
    getStartEndScope(): IRange;
    getDataRange(): IRange;
    getDiscreteRanges(): IRange[];
    merge(newObject: ObjectMatrix<Nullable<T>>): void;
    private _setOriginValue;
}
