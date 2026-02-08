import { ICellWithCoord, IRange, IRangeWithCoord, ISelectionCell } from '@univerjs/core';
import { SpreadsheetSkeleton } from '@univerjs/engine-render';
import { ISelectionWithCoord, ISelectionWithStyle } from '@univerjs/sheets';
/**
 * Add startXY endXY to range, XY are no merge cell position.
 * @param skeleton
 * @param range
 * @returns {IRangeWithCoord}
 */
export declare function attachRangeWithCoord(skeleton: SpreadsheetSkeleton, range: IRange): IRangeWithCoord;
/**
 * Return selection with coord and style from selection, which has range & primary & style.
 * coord are no merge cell position.
 * @param selection
 * @param skeleton
 * @returns {ISelectionWithCoord} selection with coord and style
 */
export declare function attachSelectionWithCoord(selection: ISelectionWithStyle, skeleton: SpreadsheetSkeleton): ISelectionWithCoord;
export declare function attachPrimaryWithCoord(skeleton: SpreadsheetSkeleton, primary: ISelectionCell): ICellWithCoord;
