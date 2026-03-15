import { ICellWithCoord, IRange, IScale, Nullable, ObjectMatrix } from '@univerjs/core';
import { UniverRenderingContext } from '../../../context';
import { IDrawInfo } from '../../extension';
import { IFontCacheItem } from '../interfaces';
import { SpreadsheetSkeleton } from '../sheet.render-skeleton';
import { SheetExtension } from './sheet-extension';
interface IRenderFontContext {
    ctx: UniverRenderingContext;
    scale: number;
    columnTotalWidth: number;
    rowTotalHeight: number;
    viewRanges: IRange[];
    checkOutOfViewBound: boolean;
    diffRanges: IRange[];
    spreadsheetSkeleton: SpreadsheetSkeleton;
    overflowRectangle: Nullable<IRange>;
    /**
     * includes documentSkeleton & cellData
     */
    fontCache?: Nullable<IFontCacheItem>;
    /**
     * cell rect startY(with merge info)
     */
    startY: number;
    /**
     * cell rect endY (with merge info)
     */
    endY: number;
    /**
     * cell rect startX(with merge info)
     */
    startX: number;
    /**
     * cell rect endX (with merge info)
     */
    endX: number;
    cellInfo: ICellWithCoord;
}
export declare class Font extends SheetExtension {
    uKey: string;
    Z_INDEX: number;
    private _imageFallback;
    constructor();
    getDocuments(): any;
    /**
     * Safely draw fallback image, checking if it's fully loaded first.
     * If not loaded, draw a simple gray rectangle as placeholder.
     */
    private _drawFallbackImage;
    draw(ctx: UniverRenderingContext, parentScale: IScale, spreadsheetSkeleton: SpreadsheetSkeleton, diffRanges: IRange[], moreBoundsInfo: IDrawInfo): void;
    _renderFontEachCell(renderFontCtx: IRenderFontContext, row: number, col: number, fontMatrix: ObjectMatrix<IFontCacheItem>): boolean;
    private _renderImages;
    /**
     * Change font render bounds, for overflow and filter icon & custom render.
     * @param renderFontContext
     * @param row
     * @param col
     * @param fontCache
     */
    private _clipByRenderBounds;
    private _renderText;
    private _renderDocuments;
    private _clipRectangleForOverflow;
}
export {};
