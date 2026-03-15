import { IRange, Worksheet } from '@univerjs/core';
import { ISelectionWithStyle } from '@univerjs/sheets';
export declare function isSamePosition(range1: IRange, range2: IRange): boolean;
/**
 * Tell if `range2` is after (or the same as) `range1` with row direction is at priority.
 * @param range1
 * @param range2
 * @returns
 */
export declare function isBehindPositionWithRowPriority(range1: IRange, range2: IRange): boolean;
/**
 * Tell if `range2` is after (or the same as) `range1` with column direction is at priority.
 * @param range1
 * @param range2
 * @returns
 */
export declare function isBehindPositionWithColumnPriority(range1: IRange, range2: IRange): boolean;
/**
 * Tell if `range2` is before (or the same as) `range1` with column direction is at priority.
 * @param range1
 * @param range2
 * @returns
 */
export declare function isBeforePositionWithRowPriority(range1: IRange, range2: IRange): boolean;
export declare function isBeforePositionWithColumnPriority(range1: IRange, range2: IRange): boolean;
export declare function isSelectionSingleCell(selection: ISelectionWithStyle, worksheet: Worksheet): boolean;
