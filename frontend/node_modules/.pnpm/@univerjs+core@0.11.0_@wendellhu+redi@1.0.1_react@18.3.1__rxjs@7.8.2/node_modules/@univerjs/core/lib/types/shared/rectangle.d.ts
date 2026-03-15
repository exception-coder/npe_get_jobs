import { IRange, IRectLTRB } from '../sheets/typedef';
import { Nullable } from './types';
/**
 * This class provides a set of methods to calculate and manipulate rectangular ranges (IRange).
 * A range represents a rectangular area in a grid, defined by start/end rows and columns.
 * @example
 * ```typescript
 * // Example range representing cells from A1 to C3
 * const range: IRange = {
 *   startRow: 0,
 *   startColumn: 0,
 *   endRow: 2,
 *   endColumn: 2,
 *   rangeType: RANGE_TYPE.NORMAL
 * };
 * ```
 */
export declare class Rectangle {
    /**
     * Creates a deep copy of an IRange object
     * @param src
     * @example
     * ```typescript
     * const original = { startRow: 0, startColumn: 0, endRow: 1, endColumn: 1 };
     * const copy = Rectangle.clone(original);
     * // copy = { startRow: 0, startColumn: 0, endRow: 1, endColumn: 1 }
     * ```
     */
    static clone(src: IRange): IRange;
    /**
     * Checks if two ranges are equal by comparing their properties
     * @param src
     * @param target
     * @example
     * ```typescript
     * const range1 = { startRow: 0, startColumn: 0, endRow: 1, endColumn: 1 };
     * const range2 = { startRow: 0, startColumn: 0, endRow: 1, endColumn: 1 };
     * const areEqual = Rectangle.equals(range1, range2); // true
     * ```
     */
    static equals(src: IRange, target: IRange): boolean;
    /**
     * Quickly checks if two normal ranges intersect. For specialized range types,
     * use the intersects() method instead.
     * @param rangeA
     * @param rangeB
     * @example
     * ```typescript
     * const range1 = { startRow: 0, startColumn: 0, endRow: 2, endColumn: 2 };
     * const range2 = { startRow: 1, startColumn: 1, endRow: 3, endColumn: 3 };
     * const doIntersect = Rectangle.simpleRangesIntersect(range1, range2); // true
     * ```
     */
    static simpleRangesIntersect(rangeA: IRange, rangeB: IRange): boolean;
    /**
     * Checks if two ranges intersect, handling special range types (ROW, COLUMN)
     * @param src
     * @param target
     * @example
     * ```typescript
     * const rowRange = {
     *   startRow: 0, endRow: 2,
     *   startColumn: NaN, endColumn: NaN,
     *   rangeType: RANGE_TYPE.ROW
     * };
     * const colRange = {
     *   startRow: NaN, endRow: NaN,
     *   startColumn: 0, endColumn: 2,
     *   rangeType: RANGE_TYPE.COLUMN
     * };
     * const doIntersect = Rectangle.intersects(rowRange, colRange); // true
     * ```
     */
    static intersects(src: IRange, target: IRange): boolean;
    /**
     * Checks if any of the ranges in the target array intersect with any of the ranges in the source array.
     * Attention! Please make sure there is no NaN in the ranges.
     * @param src
     * @param target
     * @example
     * ```typescript
     * const ranges1 = [
     *   { startRow: 0, startColumn: 0, endRow: 2, endColumn: 2 },
     *   { startRow: 3, startColumn: 3, endRow: 5, endColumn: 5 }
     * ];
     * const ranges2 = [
     *   { startRow: 1, startColumn: 1, endRow: 4, endColumn: 4 },
     *   { startRow: 6, startColumn: 6, endRow: 8, endColumn: 8 }
     * ];
     * const doIntersect = Rectangle.doAnyRangesIntersect(ranges1, ranges2); // true
     * ```
     */
    static doAnyRangesIntersect(src: IRange[], target: IRange[]): boolean;
    /**
     * Gets the intersection range between two ranges
     * @param src
     * @param target
     * @deprecated use `getIntersectRange` instead
     * @example
     * ```typescript
     * const range1 = { startRow: 0, startColumn: 0, endRow: 2, endColumn: 2 };
     * const range2 = { startRow: 1, startColumn: 1, endRow: 3, endColumn: 3 };
     * const intersection = Rectangle.getIntersects(range1, range2);
     * // intersection = { startRow: 1, startColumn: 1, endRow: 2, endColumn: 2 }
     * ```
     */
    static getIntersects(src: IRange, target: IRange): Nullable<IRange>;
    /**
     * Checks if one range completely contains another range
     * @param src
     * @param target
     * @example
     * ```typescript
     * const outer = { startRow: 0, startColumn: 0, endRow: 3, endColumn: 3 };
     * const inner = { startRow: 1, startColumn: 1, endRow: 2, endColumn: 2 };
     * const contains = Rectangle.contains(outer, inner); // true
     * ```
     */
    static contains(src: IRange, target: IRange): boolean;
    /**
     * Checks if one range strictly contains another range (not equal)
     * @param src
     * @param target
     * @example
     * ```typescript
     * const outer = { startRow: 0, startColumn: 0, endRow: 3, endColumn: 3 };
     * const same = { startRow: 0, startColumn: 0, endRow: 3, endColumn: 3 };
     * const realContains = Rectangle.realContain(outer, same); // false
     * ```
     */
    static realContain(src: IRange, target: IRange): boolean;
    /**
     * Creates a union range that encompasses all input ranges
     * @param {...any} ranges
     * @example
     * ```typescript
     * const range1 = { startRow: 0, startColumn: 0, endRow: 1, endColumn: 1 };
     * const range2 = { startRow: 2, startColumn: 2, endRow: 3, endColumn: 3 };
     * const union = Rectangle.union(range1, range2);
     * // union = { startRow: 0, startColumn: 0, endRow: 3, endColumn: 3 }
     * ```
     */
    static union(...ranges: IRange[]): IRange;
    /**
     * Creates a union range considering special range types (ROW, COLUMN)
     * @param {...any} ranges
     * @example
     * ```typescript
     * const rowRange = {
     *   startRow: 0, endRow: 2,
     *   rangeType: RANGE_TYPE.ROW
     * };
     * const normalRange = {
     *   startRow: 1, startColumn: 1,
     *   endRow: 3, endColumn: 3
     * };
     * const union = Rectangle.realUnion(rowRange, normalRange);
     * // Result will have NaN for columns due to ROW type
     * ```
     */
    static realUnion(...ranges: IRange[]): IRange;
    /**
     * Converts an absolute range to a relative range based on an origin range
     * @param range
     * @param originRange
     * @example
     * ```typescript
     * const range = { startRow: 5, startColumn: 5, endRow: 7, endColumn: 7 };
     * const origin = { startRow: 3, startColumn: 3, endRow: 8, endColumn: 8 };
     * const relative = Rectangle.getRelativeRange(range, origin);
     * // relative = { startRow: 2, startColumn: 2, endRow: 2, endColumn: 2 }
     * ```
     */
    static getRelativeRange: (range: IRange, originRange: IRange) => IRange;
    /**
     * Converts a relative range back to an absolute range based on origin
     * @param relativeRange
     * @param originRange
     * @param absoluteRange
     * @example
     * ```typescript
     * const relative = { startRow: 2, startColumn: 2, endRow: 2, endColumn: 2 };
     * const origin = { startRow: 3, startColumn: 3, endRow: 8, endColumn: 8 };
     * const absolute = Rectangle.getPositionRange(relative, origin);
     * // absolute = { startRow: 5, startColumn: 5, endRow: 7, endColumn: 7 }
     * ```
     */
    static getPositionRange: (relativeRange: IRange, originRange: IRange, absoluteRange?: IRange) => IRange;
    /**
     * Moves a range horizontally by a specified step and optionally extends it
     * @param range
     * @param step
     * @param length
     * @example
     * ```typescript
     * const range = { startRow: 0, startColumn: 0, endRow: 1, endColumn: 1 };
     * const moved = Rectangle.moveHorizontal(range, 2, 1);
     * // moved = { startRow: 0, startColumn: 2, endRow: 1, endColumn: 4 }
     * ```
     */
    static moveHorizontal: (range: IRange, step?: number, length?: number) => IRange;
    /**
     * Moves a range vertically by a specified step and optionally extends it
     * @param range
     * @param step
     * @param length
     * @example
     * ```typescript
     * const range = { startRow: 0, startColumn: 0, endRow: 1, endColumn: 1 };
     * const moved = Rectangle.moveVertical(range, 2, 1);
     * // moved = { startRow: 2, startColumn: 0, endRow: 4, endColumn: 1 }
     * ```
     */
    static moveVertical: (range: IRange, step?: number, length?: number) => IRange;
    /**
     * Moves a range by specified offsets in both directions
     * @param range
     * @param offsetX
     * @param offsetY
     * @example
     * ```typescript
     * const range = { startRow: 0, startColumn: 0, endRow: 1, endColumn: 1 };
     * const moved = Rectangle.moveOffset(range, 2, 3);
     * // moved = { startRow: 3, startColumn: 2, endRow: 4, endColumn: 3 }
     * ```
     */
    static moveOffset: (range: IRange, offsetX: number, offsetY: number) => IRange;
    /**
     * Subtracts one range from another, returning the remaining areas as separate ranges
     * @param range1
     * @param range2
     * @example
     * ```typescript
     * const range1 = { startRow: 0, startColumn: 0, endRow: 3, endColumn: 3 };
     * const range2 = { startRow: 1, startColumn: 1, endRow: 2, endColumn: 2 };
     * const result = Rectangle.subtract(range1, range2);
     * // Results in up to 4 ranges representing the non-overlapping areas
     * ```
     */
    static subtract(range1: IRange, range2: IRange): IRange[];
    /**
     * Merges overlapping or adjacent ranges into larger ranges
     * @param ranges
     * @example
     * ```typescript
     * const ranges = [
     *   { startRow: 0, startColumn: 0, endRow: 1, endColumn: 1 },
     *   { startRow: 1, startColumn: 1, endRow: 2, endColumn: 2 }
     * ];
     * const merged = Rectangle.mergeRanges(ranges);
     * // Combines overlapping ranges into larger ones
     * ```
     */
    static mergeRanges(ranges: IRange[]): IRange[];
    /**
     * Splits overlapping ranges into a grid of non-overlapping ranges
     * @param ranges
     * @example
     * ```typescript
     * const ranges = [
     *   { startRow: 0, startColumn: 0, endRow: 2, endColumn: 2 },
     *   { startRow: 1, startColumn: 1, endRow: 3, endColumn: 3 }
     * ];
     * const grid = Rectangle.splitIntoGrid(ranges);
     * // Splits into non-overlapping grid sections
     * ```
     */
    static splitIntoGrid(ranges: IRange[]): IRange[];
    /**
     * Subtracts multiple ranges from multiple ranges
     * @param ranges1
     * @param ranges2
     * @example
     * ```typescript
     * const ranges1 = [{ startRow: 0, startColumn: 0, endRow: 3, endColumn: 3 }];
     * const ranges2 = [
     *   { startRow: 1, startColumn: 1, endRow: 2, endColumn: 2 },
     *   { startRow: 2, startColumn: 2, endRow: 3, endColumn: 3 }
     * ];
     * const result = Rectangle.subtractMulti(ranges1, ranges2);
     * // Returns remaining non-overlapping areas
     * ```
     */
    static subtractMulti(ranges1: IRange[], ranges2: IRange[]): IRange[];
    /**
     * Checks if two rectangles defined by left, top, right, bottom coordinates intersect
     * @param rect1
     * @param rect2
     * @example
     * ```typescript
     * const rect1 = { left: 0, top: 0, right: 10, bottom: 10 };
     * const rect2 = { left: 5, top: 5, right: 15, bottom: 15 };
     * const intersects = Rectangle.hasIntersectionBetweenTwoRect(rect1, rect2); // true
     * ```
     */
    static hasIntersectionBetweenTwoRect(rect1: IRectLTRB, rect2: IRectLTRB): boolean;
    /**
     * Gets the intersection area between two rectangles defined by LTRB coordinates
     * @param rect1
     * @param rect2
     * @example
     * ```typescript
     * const rect1 = { left: 0, top: 0, right: 10, bottom: 10 };
     * const rect2 = { left: 5, top: 5, right: 15, bottom: 15 };
     * const intersection = Rectangle.getIntersectionBetweenTwoRect(rect1, rect2);
     * // Returns { left: 5, top: 5, right: 10, bottom: 10, width: 5, height: 5 }
     * ```
     */
    static getIntersectionBetweenTwoRect(rect1: IRectLTRB, rect2: IRectLTRB): Required<IRectLTRB> | null;
    /**
     * Sorts an array of ranges by startRow, then by startColumn
     * @param ranges
     * @example
     * ```typescript
     * const ranges = [
     *   { startRow: 1, startColumn: 0, endRow: 2, endColumn: 1 },
     *   { startRow: 0, startColumn: 0, endRow: 1, endColumn: 1 }
     * ];
     * const sorted = Rectangle.sort(ranges);
     * // Ranges will be sorted by startRow first, then startColumn
     * ```
     */
    static sort(ranges: IRange[]): IRange[];
}
