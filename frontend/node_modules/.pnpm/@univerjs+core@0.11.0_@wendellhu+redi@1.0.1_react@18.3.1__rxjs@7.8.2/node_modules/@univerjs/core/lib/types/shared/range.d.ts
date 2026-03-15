import { IRange } from '../sheets/typedef';
import { Nullable } from './types';
export declare function moveRangeByOffset(range: IRange, refOffsetX: number, refOffsetY: number, ignoreAbsolute?: boolean): IRange;
/**
 * Split ranges into aligned smaller ranges
 * @param ranges no overlap ranges
 * @returns aligned smaller ranges
 */
export declare function splitIntoGrid(ranges: IRange[]): IRange[];
/**
 * Horizontal Merging
 * @param ranges no overlap ranges
 * @returns merged ranges
 */
export declare function mergeHorizontalRanges(ranges: IRange[]): IRange[];
/**
 * Vertical Merging
 * @param ranges no overlap ranges
 * @returns merged ranges
 */
export declare function mergeVerticalRanges(ranges: IRange[]): IRange[];
/**
 * Merge no overlap ranges
 * @param ranges no overlap ranges
 * @returns ranges
 */
export declare function mergeRanges(ranges: IRange[]): IRange[];
export declare function multiSubtractSingleRange(ranges: IRange[], toDelete: IRange): IRange[];
/**
 * Computes the intersection of two ranges.
 * If there is an overlap between the two ranges, returns a new range representing the intersection.
 * If there is no overlap, returns null.
 *
 * @param src - The source range.
 * @param target - The target range.
 * @returns The intersected range or null if there is no intersection.
 */
export declare function getIntersectRange(src: IRange, target: IRange): Nullable<IRange>;
