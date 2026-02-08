import { IRange, Worksheet } from '@univerjs/core';
export interface IExpandParams {
    left?: boolean;
    right?: boolean;
    up?: boolean;
    down?: boolean;
}
/**
 *  Expand the range to a continuous range, it uses when Ctrl + A , or only one cell selected to add a pivot table adn so on.
 * @param {IRange} startRange The start range.
 * @param {IExpandParams} directions The directions to expand.
 * @param {Worksheet} worksheet The worksheet working on.
 * @returns {IRange} The expanded range.
 */
export declare function expandToContinuousRange(startRange: IRange, directions: IExpandParams, worksheet: Worksheet): IRange;
