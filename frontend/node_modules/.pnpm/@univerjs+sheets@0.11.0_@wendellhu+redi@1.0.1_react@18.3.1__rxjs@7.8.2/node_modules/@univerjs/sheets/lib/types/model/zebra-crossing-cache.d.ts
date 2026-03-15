import { IRange } from '@univerjs/core';
type IVisibleFunc = (row: number) => boolean;
type IToggleRange = [number, number];
/**
 * This class is used for caching zebra crossing toggle ranges.
 * `toggleRanges` represents the ranges within the visible area where the original odd/even row state is reversed due to hidden rows.
 * Based on the following rules:
 * 1. If there is an odd number of hidden rows before a certain row, the odd/even state of that row will be reversed.
 * 2. If there is an even number of hidden rows before a certain row, the odd/even state of that row will not be reversed.
 * 3. If there are no hidden rows before a certain row, the odd/even state of that row will not be reversed.
 *
 * Example:
 * Given rows 1 to 10, where rows 3 and 7 are hidden:
 * - Rows 1 and 2 remain in their original odd/even state.
 * - Row 4's state is reversed because there is 1 hidden row (odd) before it.
 * - Row 8's state is reversed because there are 2 hidden rows (even) before it.
 * - Rows 9 and 10 remain in their original odd/even state.
 */
export declare class ZebraCrossingCache {
    private _toggleRanges;
    /**
     * Refresh the cache based on the given range and visibility function.
     * This method calculates toggle ranges for rows that are visible within the specified range.
     * Hidden rows are excluded from the toggle calculation.
     * @param range The range of rows to refresh (startRow and endRow are required).
     * @param visibleFunc A function to determine if a row is visible.
     */
    refresh(range: IRange, visibleFunc: IVisibleFunc): void;
    /**
     * This function returns the toggle ranges. Only for testing purposes. In production, you should use `getIsToggled` to check if a row is toggled.
     * @returns [IToggleRange[]] The toggle ranges calculated by the last refresh.
     */
    getToggleRanges(): IToggleRange[];
    /**
     * Check if the given row is toggled (odd/even state).
     * This method uses binary search to efficiently determine if the row is within a toggle range.
     * @param row The row to check.
     * @returns True if the row is toggled (odd), false otherwise (even or hidden).
     */
    getIsToggled(row: number): boolean;
}
export {};
