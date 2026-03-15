import { IRange, ObjectMatrix } from '@univerjs/core';
export declare const createTopMatrixFromRanges: (ranges: IRange[]) => ObjectMatrix<number>;
export declare const createTopMatrixFromMatrix: (matrix: ObjectMatrix<1>) => ObjectMatrix<number>;
export declare const findAllRectangle: (topMatrix: ObjectMatrix<number>) => IRange[];
/**
 * Some operations generate sparse ranges such as paste/autofill/ref-range, and this function merge some small ranges into some large ranges to reduce transmission size.
 * Time Complexity: O(mn) , where m and n are rows and columns. It takes O(mn) to compute the markMatrix and O(n) to apply the histogram algorithm to each column.
 * ps. column sparse matrices have better performance
 * @param {IRange[]} ranges
 * @returns {IRange[]}
 */
export declare const rangeMerge: (ranges: IRange[]) => IRange[];
export declare class RangeMergeUtil {
    private _matrix;
    add(...ranges: IRange[]): this;
    subtract(...ranges: IRange[]): this;
    merge(): IRange[];
}
