import { IRange, IRangeWithCoord, Worksheet, HorizontalAlign, VerticalAlign } from '@univerjs/core';
export type FDefaultAlignment = 'general';
export type FHorizontalAlignment = 'left' | 'center' | 'normal';
export type FVerticalAlignment = 'top' | 'middle' | 'bottom';
/**
 * Transform the Facade API horizontal alignment to the Univer Core horizontal alignment.
 * @param {FHorizontalAlignment} value - The Facade API horizontal alignment.
 * @returns {HorizontalAlign} The Univer Core horizontal alignment.
 */
export declare function transformFacadeHorizontalAlignment(value: FHorizontalAlignment): HorizontalAlign;
/**
 * Transform the Univer Core horizontal alignment to the Facade API horizontal alignment.
 * @param {HorizontalAlign} value - The Univer Core horizontal alignment.
 * @returns {FHorizontalAlignment} The Facade API horizontal alignment.
 */
export declare function transformCoreHorizontalAlignment(value: HorizontalAlign): FHorizontalAlignment | FDefaultAlignment;
/**
 * Transform the Facade API vertical alignment to the Univer Core vertical alignment.
 * @param {FVerticalAlignment} value - The Facade API vertical alignment.
 * @returns {VerticalAlign} The Univer Core vertical alignment.
 */
export declare function transformFacadeVerticalAlignment(value: FVerticalAlignment): VerticalAlign;
/**
 * Transform the Univer Core vertical alignment to the Facade API vertical alignment.
 * @param {VerticalAlign} value - The Univer Core vertical alignment.
 * @returns {FVerticalAlignment} The Facade API vertical alignment.
 */
export declare function transformCoreVerticalAlignment(value: VerticalAlign): FVerticalAlignment | FDefaultAlignment;
/**
 * Judge whether the range is merged.
 * @param {IRangeWithCoord} mergeInfo - The merge info.
 * @param {IRange} range - The range.
 * @returns {boolean} Whether the range is merged.
 */
export declare function isCellMerged(mergeInfo: IRangeWithCoord, range: IRange): boolean;
/**
 * Judge whether the range is single cell.
 * @param {IRangeWithCoord} mergeInfo - The merge info.
 * @param {IRange} range - The range.
 * @returns {boolean} Whether the range is single cell.
 */
export declare function isSingleCell(mergeInfo: IRangeWithCoord, range: IRange): boolean;
/**
 * Covert the range to row range.
 * @param {IRange} range - The range.
 * @param {Worksheet} worksheet - The worksheet.
 * @returns {IRange} The row range.
 */
export declare function covertToRowRange(range: IRange, worksheet: Worksheet): IRange;
/**
 * Covert the range to column range.
 * @param {IRange} range - The range.
 * @param {Worksheet} worksheet - The worksheet.
 * @returns {IRange} The column range.
 */
export declare function covertToColRange(range: IRange, worksheet: Worksheet): IRange;
