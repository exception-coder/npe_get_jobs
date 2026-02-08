import { DocumentDataModel, ICellData, ICellDataForSheetInterceptor, ICellInfo, ICellWithCoord, IColAutoWidthInfo, IColumnRange, IGetRowColByPosOptions, IPaddingData, IRange, IRowAutoHeightInfo, IRowRange, ISize, IStyleData, ITextRotation, Nullable, Styles, Worksheet, BooleanNumber, HorizontalAlign, IConfigService, IContextService, Injector, LocaleService, ObjectMatrix, SheetSkeleton, VerticalAlign, WrapStrategy } from '@univerjs/core';
import { IBoundRectNoAngle, IPoint, IViewportInfo } from '../../basics/vector2';
import { Scene } from '../../scene';
import { IFontCacheItem, IStylesCache, SHEET_VIEWPORT_KEY } from './interfaces';
import { DocumentSkeleton } from '../docs/layout/doc-skeleton';
interface IRowColumnRange extends IRowRange, IColumnRange {
}
export interface IDocumentLayoutObject {
    documentModel: Nullable<DocumentDataModel>;
    fontString: string;
    textRotation: ITextRotation;
    wrapStrategy: WrapStrategy;
    verticalAlign: VerticalAlign;
    horizontalAlign: HorizontalAlign;
    paddingData: IPaddingData;
    fill?: Nullable<string>;
}
export declare const DEFAULT_PADDING_DATA: {
    t: number;
    b: number;
    l: number;
    r: number;
};
export declare const RENDER_RAW_FORMULA_KEY = "RENDER_RAW_FORMULA";
export interface ICacheItem {
    bg: boolean;
    border: boolean;
}
export interface IGetPosByRowColOptions {
    closeFirst?: boolean;
    /**
     * for searchArray(rowHeightAccumulation) & searchArray(colWidthAccumulation)
     * true means return first matched index in array
     */
    firstMatch?: boolean;
}
export declare class SpreadsheetSkeleton extends SheetSkeleton {
    /**
     * Range viewBounds. only update by viewBounds.
     * It would change multiple times in one frame if there is multiple viewport (after freeze row&col)
     */
    private _drawingRange;
    private _cacheRangeMap;
    private _visibleRangeMap;
    private _overflowCache;
    private _stylesCache;
    private _clearTaskId;
    /** A matrix to store if a (row, column) position has render cache. */
    private _handleBgMatrix;
    private _handleBorderMatrix;
    private _showGridlines;
    private _gridlinesColor;
    private _scene;
    constructor(worksheet: Worksheet, _styles: Styles, _localeService: LocaleService, _contextService: IContextService, _configService: IConfigService, _injector: Injector);
    setScene(scene: Scene): void;
    _updateLayout(): void;
    /**
     * Range of visible area(range in viewBounds)
     */
    get rowColumnSegment(): IRowColumnRange;
    /**
     * Get range needs to render.
     * @param viewportKey
     * @returns
     */
    visibleRangeByViewportKey(viewportKey: SHEET_VIEWPORT_KEY): Nullable<IRowColumnRange>;
    get stylesCache(): IStylesCache;
    get overflowCache(): ObjectMatrix<IRange>;
    get showGridlines(): BooleanNumber;
    get gridlinesColor(): string | undefined;
    dispose(): void;
    /**
     * @deprecated should never expose a property that is provided by another module!
     */
    getStyles(): Styles;
    setOverflowCache(value: ObjectMatrix<IRange>): void;
    getFont(rowIndex: number, columnIndex: number): Nullable<IFontCacheItem>;
    /**
     * Get range in visible area (range in view bounds) and set into this._rowColumnSegment.
     * @param vpInfo
     * @returns boolean
     */
    updateVisibleRange(vpInfo?: IViewportInfo): boolean;
    getVisibleRangeByViewport(viewportKey: SHEET_VIEWPORT_KEY): IRowColumnRange | undefined;
    getVisibleRanges(): Map<SHEET_VIEWPORT_KEY, IRowColumnRange>;
    /**
     * Clear cache out of visible range when browser are free.
     */
    private _clearCacheOutOfVisibleRange;
    /**
     * Set border background and font to this._stylesCache by visible range, which derives from bounds)
     * @param vpInfo viewBounds
     */
    setStylesCache(vpInfo?: IViewportInfo): Nullable<SpreadsheetSkeleton>;
    /**
     * Calc all auto height by getDocsSkeletonPageSize in ranges
     * @param ranges
     * @returns {IRowAutoHeightInfo[]} result
     */
    calculateAutoHeightInRange(ranges: Nullable<IRange[]>, currentCellHeights?: ObjectMatrix<number>): IRowAutoHeightInfo[];
    calculateAutoHeightForCell(row: number, col: number): number | undefined;
    private _calculateRowAutoHeight;
    calculateAutoWidthInRange(ranges: Nullable<IRange[]>): IColAutoWidthInfo[];
    /**
     * Iterate rows in visible area(and rows around it) and return column width of the specified column(by column index)
     *
     * @param colIndex
     * @returns {number} width
     */
    private _calculateColWidth;
    getColWidth(colIndex: number): number;
    getRowHeight(rowIndex: number): number;
    /**
     * For _calculateColMaxWidth
     * @param cell
     * @returns {number} currColWidth
     */
    _getMeasuredWidthByCell(cell: ICellDataForSheetInterceptor, row: number, column: number, currColWidth: number): number;
    /**
     * @deprecated use `getRangeByViewport` instead.
     * @param bounds
     */
    getRangeByBounding(bounds?: IViewportInfo): IRange;
    getRangeByViewport(vpInfo?: IViewportInfo): IRange;
    getCacheRangeByViewport(vpInfo?: IViewportInfo, isPrinting?: boolean): IRange;
    getRangeByViewBound(bound?: IBoundRectNoAngle): IRange;
    appendToOverflowCache(row: number, column: number, startColumn: number, endColumn: number): void;
    getOverflowPosition(contentSize: Required<ISize>, horizontalAlign: HorizontalAlign, row: number, column: number, columnCount: number): IColumnRange;
    /**
     * Get cell by pos(offsetX, offsetY).
     * @deprecated Please use `getCellWithCoordByOffset` instead.
     */
    calculateCellIndexByPosition(offsetX: number, offsetY: number, scaleX: number, scaleY: number, scrollXY: {
        x: number;
        y: number;
    }): Nullable<ICellWithCoord>;
    /**
     * This method has the same implementation as `getCellIndexByOffset`,
     * but uses a different name to maintain backward compatibility with previous calls.
     *
     * @deprecated Please use `getCellIndexByOffset` method instead.
     */
    getCellPositionByOffset(offsetX: number, offsetY: number, scaleX: number, scaleY: number, scrollXY: {
        x: number;
        y: number;
    }, options?: IGetRowColByPosOptions): {
        row: number;
        column: number;
    };
    getCellWithMergeInfoByIndex(row: number, column: number): Nullable<ICellInfo>;
    /**
     * Same as getColumnIndexByOffsetX
     * @deprecated Please use `getColumnIndexByOffsetX` method instead.
     */
    getColumnPositionByOffsetX(offsetX: number, scaleX: number, scrollXY: {
        x: number;
        y: number;
    }, options?: IGetRowColByPosOptions): number;
    /**
     * Same as getRowIndexByOffsetY
     * @deprecated Please use `getRowIndexByOffsetY` method instead.
     */
    getRowPositionByOffsetY(offsetY: number, scaleY: number, scrollXY: {
        x: number;
        y: number;
    }, options?: IGetRowColByPosOptions): number;
    /**
     * Same as getCellWithCoordByIndex, but uses a different name to maintain backward compatibility with previous calls.
     * @deprecated Please use `getCellWithCoordByIndex` instead.
     */
    getCellByIndex(row: number, column: number): ICellWithCoord;
    /**
     * @deprecated Please use `getCellWithCoordByIndex(row, col, false)` instead.
     * @param row
     * @param column
     */
    getCellByIndexWithNoHeader(row: number, column: number): ICellWithCoord;
    /**
     * Only used for cell edit, and no need to rotate text when edit cell content!
     * @deprecated use same method in worksheet.
     * @param cell
     */
    getBlankCellDocumentModel(cell: Nullable<ICellData>): IDocumentLayoutObject;
    /**
     * Only used for cell edit, and no need to rotate text when edit cell content!
     * @deprecated use same method in worksheet.
     * @param cell
     */
    getCellDocumentModelWithFormula(cell: ICellData): Nullable<IDocumentLayoutObject>;
    /**
     * This method generates a document model based on the cell's properties and handles the associated styles and configurations.
     * If the cell does not exist, it will return null.
     *
     * @deprecated use same method in worksheet.
     * PS: This method has significant impact on performance.
     * @param cell
     * @param options
     */
    private _getCellDocumentModel;
    /**
     * Calculate the overflow of cell text. If there is no value on either side of the cell,
     * the text content of this cell can be drawn to both sides, not limited by the cell's width.
     * Overflow on the left or right is aligned according to the text's horizontal alignment.
     */
    private _calculateOverflowCell;
    /**
     * Get the range of the bounding area of the canvas.
     * @param rowHeightAccumulation Row layout information
     * @param columnWidthAccumulation Column layout information
     * @param viewBound The range of the visible area of the canvas
     * @returns The range cell index of the canvas visible area
     */
    protected _getRangeByViewBounding(rowHeightAccumulation: number[], columnWidthAccumulation: number[], viewBound?: IBoundRectNoAngle, isPrinting?: boolean): IRange;
    /**
     * Get the current row and column segment visible merge data.
     * @returns {IRange} The visible merge data
     */
    getCurrentRowColumnSegmentMergeData(range?: IRange): IRange[];
    resetCache(): void;
    /**
     * Any changes to sheet model would reset cache.
     */
    _resetCache(): void;
    resetRangeCache(ranges: IRange[]): void;
    _setBorderStylesCache(row: number, col: number, style: Nullable<IStyleData>, options: {
        mergeRange?: IRange;
        cacheItem?: ICacheItem;
    } | undefined): void;
    _setBgStylesCache(row: number, col: number, style: Nullable<IStyleData>, options: {
        mergeRange?: IRange;
        cacheItem?: ICacheItem;
    } | undefined): void;
    _setFontStylesCache(row: number, col: number, cellData: Nullable<ICellDataForSheetInterceptor>, style: IStyleData): void;
    /**
     * Set border background and font to this._stylesCache cell by cell.
     * @param row {number}
     * @param col {number}
     * @param options {{ mergeRange: IRange; cacheItem: ICacheItem } | undefined}
     */
    private _setStylesCacheForOneCell;
    /**
     * pro/issues/344
     * In Excel, for the border rendering of merged cells to take effect, the outermost cells need to have the same border style.
     */
    private _setMergeBorderProps;
    private _setBorderProps;
    getDistanceFromTopLeft(row: number, col: number): IPoint;
    colStartX(col: number): number;
    rowStartY(row: number): number;
    getHiddenRowsInRange(range: IRowRange): number[];
    getHiddenColumnsInRange(range: IColumnRange): number[];
    /**
     * @deprecated use function `convertTransformToOffsetX` in same package.
     */
    convertTransformToOffsetX(offsetX: number, scaleX: number, scrollXY: {
        x: number;
        y: number;
    }): number;
    /**
     * @deprecated use function `convertTransformToOffsetY` in same package.
     */
    convertTransformToOffsetY(offsetY: number, scaleY: number, scrollXY: {
        x: number;
        y: number;
    }): number;
}
/**
 * convert canvas content position to physical position in screen
 * @param offsetX
 * @param scaleX
 * @param scrollXY
 */
export declare function convertTransformToOffsetX(offsetX: number, scaleX: number, scrollXY: {
    x: number;
    y: number;
}): number;
/**
 * convert canvas content position to physical position in screen
 * @param offsetY
 * @param scaleY
 * @param scrollXY
 */
export declare function convertTransformToOffsetY(offsetY: number, scaleY: number, scrollXY: {
    x: number;
    y: number;
}): number;
/**
 * Obtain the height and width of a cell's text, taking into account scenarios with rotated text.
 * @param documentSkeleton Data of the document's ViewModel
 * @param angleInDegree The rotation angle of an Excel cell, it's **degree**
 */
export declare function getDocsSkeletonPageSize(documentSkeleton: DocumentSkeleton, angleInDegree?: number): Nullable<Required<ISize>>;
export {};
