import { ICellInfo, ICellWithCoord, IPosition, IRange, IRangeWithCoord, IScale, IStyleBase, Nullable } from '@univerjs/core';
import { IDocumentSkeletonFontStyle } from './i-document-skeleton-cached';
import { IBoundRectNoAngle } from './vector2';
export declare const getColor: (RgbArray: number[], opacity?: number) => string;
export declare const toPx: (num: number | string, ReferenceValue: Nullable<number>) => number;
/**
 * Queue a new function into the requested animation frame pool (ie. this function will be executed byt the browser for the next frame)
 * @param func - the function to be called
 * @param requester - the object that will request the next frame. Falls back to window.
 * @returns frame number
 */
export declare const requestNewFrame: (func: Function, requester?: any) => number;
export declare const cancelRequestFrame: (requestID: number, requester?: any) => any;
export declare const createCanvasElement: () => HTMLCanvasElement;
export declare const createImageElement: () => HTMLImageElement;
export declare const radToDeg: (rad: number) => number;
export declare const degToRad: (deg: number) => number;
/**
 * Gets the pointer prefix to use
 * @param engine defines the engine we are finding the prefix for
 * @returns "pointer" if touch is enabled. Else returns "mouse"
 */
export declare const getPointerPrefix: () => string;
/**
 * Utility function to detect if the current user agent is Safari
 * @returns whether or not the current user agent is safari
 */
export declare const IsSafari: () => boolean;
export declare const generateRandomKey: (prefix?: string, keyLength?: number) => string;
export declare function getValueType(value: unknown): string;
export declare function isFunction(value?: unknown): value is boolean;
export declare function isDate(value?: Date): value is Date;
export declare function isRegExp(value?: unknown): value is RegExp;
export declare function isArray<T>(value?: unknown): value is T[];
export declare function isString(value?: unknown): value is string;
export declare function isNumber(value?: unknown): value is number;
export declare function isObject(value?: unknown): value is object;
export declare function precisionTo(num: number, accurate: number): number;
/**
 * When drawing lines, it is necessary to align their precision.
 * performance testing
 * var time = performance.now(); for(let i=0;i<100000000;i++){ fixLineWidthByScale(i, 0.666); }; console.log(performance.now()-time);
 */
export declare function fixLineWidthByScale(num: number, scale: number): number;
export declare function getFontStyleString(textStyle?: Nullable<IStyleBase>): IDocumentSkeletonFontStyle;
export declare function hasCJKText(text: string): boolean;
export declare function hasCJK(text: string): boolean;
export declare function hasCJKPunctuation(text: string): boolean;
export declare function hasAllLatin(text: string): boolean;
export declare function hasBasicLatin(text: string): boolean;
export declare function hasLatinOneSupplement(text: string): boolean;
export declare function hasLatinExtendedA(text: string): boolean;
export declare function hasLatinExtendedB(text: string): boolean;
export declare const EMOJI_REG: RegExp;
export declare function startWithEmoji(text: string): boolean;
export declare function hasArabic(text: string): boolean;
export declare function hasTibetan(text: string): boolean;
export declare function hasSpace(text: string): boolean;
export declare function isCjkLeftAlignedPunctuation(text: string): boolean;
export declare function isCjkRightAlignedPunctuation(text: string): boolean;
export declare function isCjkCenterAlignedPunctuation(text: string): boolean;
export declare function getDPI(): number;
export declare function ptToPx(pt: number): number;
export declare function pxToPt(px: number): number;
export declare function ptToMM(px: number): number;
export declare function pxToInch(px: number): number;
export declare function getScale(parentScale: IScale): number;
export declare function getCellPositionByIndex(row: number, column: number, rowHeightAccumulation: number[], columnWidthAccumulation: number[]): IPosition;
/**
 * @deprecated use same function in @univerjs/core
 * @description Get the cell position information of the specified row and column, including the position information of the cell and the merge information of the cell
 * @param {number} row The row index of the cell
 * @param {number} column The column index of the cell
 * @param {number[]} rowHeightAccumulation The accumulated height of each row
 * @param {number[]} columnWidthAccumulation The accumulated width of each column
 * @param {ICellInfo} mergeDataInfo The merge information of the cell
 * @returns {ICellWithCoord} The cell position information of the specified row and column, including the position information of the cell and the merge information of the cell
 */
declare function getCellWithCoordByIndexCore(row: number, column: number, rowHeightAccumulation: number[], columnWidthAccumulation: number[], mergeDataInfo: ICellInfo): ICellWithCoord;
/**
 * @deprecated please use getCellWithCoordByIndexCore in @univerjs/core instead
 */
declare const getCellByIndexWithMergeInfo: typeof getCellWithCoordByIndexCore;
export { getCellByIndexWithMergeInfo };
/**
 * Determine whether there are any cells in a row that are not in the merged cells, mainly used for the calculation of auto height
 * @deprecated please use SpreadsheetSkeleton@_hasUnMergedCellInRow
 */
export declare function hasUnMergedCellInRow(row: number, startColumn: number, endColumn: number, mergeData: IRange[]): boolean;
export declare function mergeInfoOffset(mergeInfo: IRangeWithCoord, offsetX: number, offsetY: number): {
    startY: number;
    endY: number;
    startX: number;
    endX: number;
    rangeType?: import('@univerjs/core').RANGE_TYPE;
    startAbsoluteRefType?: import('@univerjs/core').AbsoluteRefType;
    endAbsoluteRefType?: import('@univerjs/core').AbsoluteRefType;
    startRow: number;
    endRow: number;
    unitId?: string;
    sheetId?: string;
    startColumn: number;
    endColumn: number;
};
export declare function isRectIntersect(rect1: IBoundRectNoAngle, rect2: IBoundRectNoAngle): boolean;
export declare function injectStyle(styles: string[]): void;
export declare function checkStyle(content: string): boolean;
export declare function pxToNum(unit: string): number;
export declare function getSizeForDom(dom: HTMLElement): {
    top: number;
    left: number;
    right: number;
    bottom: number;
    width: number;
    height: number;
};
export declare function ptToPixel(pt: number): number;
export declare function pixelToPt(px: number): number;
/**
 * Is cell in view ranges.
 * @param ranges
 * @param rowIndex
 * @param colIndex
 * @returns boolean
 */
export declare function inViewRanges(ranges: IRange[], rowIndex: number, colIndex: number): boolean;
/**
 * If there is an intersection in ranges to the mainRanges, extend it to the first set of ranges.
 * @param {IRange[]} mainRanges target ranges
 * @param {IRange[]} ranges
 */
export declare function expandRangeIfIntersects(mainRanges: IRange[], ranges: IRange[]): IRange[];
export declare function clampRange(range: IRange, maxRow: number, maxColumn: number): {
    startRow: number;
    endRow: number;
    startColumn: number;
    endColumn: number;
};
/**
 * Get system highlight color in rgb format.
 */
export declare function getSystemHighlightColor(): import('@univerjs/core').IRgbColor;
