import { IRange } from '@univerjs/core';
import { SpreadsheetSkeleton } from '../sheet.render-skeleton';
import { ComponentExtension } from '../../extension';
export declare enum SHEET_EXTENSION_TYPE {
    GRID = 0
}
/**
 * for distinguish doc & slides extensions, now only used when metric performance.
 */
export declare const SHEET_EXTENSION_PREFIX = "sheet-ext-";
export declare class SheetExtension extends ComponentExtension<SpreadsheetSkeleton, SHEET_EXTENSION_TYPE, IRange[]> {
    type: SHEET_EXTENSION_TYPE;
    isRenderDiffRangesByCell(rangeP: IRange, diffRanges?: IRange[]): boolean;
    isRenderDiffRangesByColumn(curStartColumn: number, curEndColumn: number, diffRanges?: IRange[]): boolean;
    isRenderDiffRangesByRow(curStartRow: number, curEndRow: number, diffRanges?: IRange[]): boolean;
    /**
     * Check if row range is in view ranges
     * @param curStartRow
     * @param curEndRow
     * @param viewranges
     */
    isRowInRanges(curStartRow: number, curEndRow: number, viewranges?: IRange[]): boolean;
}
