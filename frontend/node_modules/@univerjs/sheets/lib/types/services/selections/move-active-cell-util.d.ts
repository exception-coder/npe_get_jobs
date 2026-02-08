import { IRange, Worksheet, Direction } from '@univerjs/core';
import { ISelectionWithStyle } from '../../basics';
/**
 * Get the next primary cell in the specified direction. If the primary cell not exists in selections, return null.
 * @param selections The current selections.
 * @param {Direction} direction The direction to move the primary cell.The enum value is maybe one of the following: UP(0),RIGHT(1), DOWN(2), LEFT(3).
 * @param {Worksheet} worksheet The worksheet instance.
 * @returns {IRange | null} The next primary cell.
 */
export declare const getNextPrimaryCell: (selections: ISelectionWithStyle[], direction: Direction, worksheet: Worksheet) => IRange | null;
