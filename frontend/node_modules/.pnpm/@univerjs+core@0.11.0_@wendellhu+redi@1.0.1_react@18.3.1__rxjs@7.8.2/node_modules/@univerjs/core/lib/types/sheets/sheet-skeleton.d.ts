import { Nullable, ObjectMatrix } from '../shared';
import { IDocumentData, IDocumentRenderConfig, IPaddingData } from '../types/interfaces';
import { Styles } from './styles';
import { ICellData, ICellInfo, ICellWithCoord, IPosition, IRange, ISelectionCell, IWorksheetData } from './typedef';
import { Worksheet } from './worksheet';
import { Injector } from '@wendellhu/redi';
import { DocumentDataModel } from '../docs/data-model/document-data-model';
import { IConfigService } from '../services/config/config.service';
import { IContextService } from '../services/context/context.service';
import { LocaleService } from '../services/locale/locale.service';
import { ImageCacheMap } from '../shared/cache/image-cache';
import { Skeleton } from '../skeleton';
import { HorizontalAlign } from '../types/enum';
export interface IGetRowColByPosOptions {
    closeFirst?: boolean;
    /**
     * For searchArray(rowHeightAccumulation) & searchArray(colWidthAccumulation)
     * true means return first matched index in matched sequence.
     * default return last index in matched sequence.
     */
    firstMatch?: boolean;
}
export declare class SheetSkeleton extends Skeleton {
    readonly worksheet: Worksheet;
    protected _styles: Styles;
    protected readonly _contextService: IContextService;
    protected readonly _configService: IConfigService;
    protected _injector: Injector;
    /**
     * @deprecated avoid use `IWorksheetData` directly, use API provided by `Worksheet`, otherwise
     * `ViewModel` will be not working.
     */
    protected _worksheetData: IWorksheetData;
    protected _renderRawFormula: boolean;
    protected _cellData: ObjectMatrix<Nullable<ICellData>>;
    protected _imageCacheMap: ImageCacheMap;
    /**
     * Whether auto height for merged cells
     */
    protected _skipAutoHeightForMergedCells: boolean;
    constructor(worksheet: Worksheet, _styles: Styles, _localeService: LocaleService, _contextService: IContextService, _configService: IConfigService, _injector: Injector);
    initConfig(): void;
    resetCache(): void;
    /**
     * @deprecated should never expose a property that is provided by another module!
     */
    getWorksheetConfig(): IWorksheetData;
    /**
     * Get which Workbook and Worksheet this skeleton is attached to.
     * @returns [unitId, sheetId]
     */
    getLocation(): [string, string];
    private _rowTotalHeight;
    private _columnTotalWidth;
    private _rowHeaderWidth;
    private _columnHeaderHeight;
    private _rowHeightAccumulation;
    private _columnWidthAccumulation;
    private _marginTop;
    private _marginLeft;
    /** Scale of Scene */
    protected _scaleX: number;
    protected _scaleY: number;
    /** Viewport scrolled value */
    protected _scrollX: number;
    /** Viewport scrolled value */
    protected _scrollY: number;
    set columnHeaderHeight(value: number);
    set rowHeaderWidth(value: number);
    get rowHeightAccumulation(): number[];
    get rowTotalHeight(): number;
    get columnWidthAccumulation(): number[];
    get columnTotalWidth(): number;
    get rowHeaderWidth(): number;
    get columnHeaderHeight(): number;
    setMarginLeft(left: number): void;
    setMarginTop(top: number): void;
    setScale(value: number, valueY?: number): void;
    setScroll(scrollX?: number, scrollY?: number): void;
    get scrollX(): number;
    get scrollY(): number;
    get scaleX(): number;
    get scaleY(): number;
    get rowHeaderWidthAndMarginLeft(): number;
    get columnHeaderHeightAndMarginTop(): number;
    get imageCacheMap(): ImageCacheMap;
    private _generateRowMatrixCache;
    /**
     * Calc columnWidthAccumulation by columnData
     * @param colCount
     * @param columnData
     * @param defaultColumnWidth
     */
    private _generateColumnMatrixCache;
    intersectMergeRange(row: number, column: number): boolean;
    protected _getOverflowBound(row: number, startColumn: number, endColumn: number, contentWidth: number, horizontalAlign?: HorizontalAlign): number;
    /**
     * Calculate data for row col & cell position.
     * This method should be called whenever a sheet is dirty.
     * Update position value to this._rowHeaderWidth & this._rowHeightAccumulation & this._columnHeaderHeight & this._columnWidthAccumulation.
     */
    protected _updateLayout(): void;
    /**
     * Refresh cache after markDirty by SheetSkeletonManagerService.reCalculate()
     * @param bounds
     */
    calculate(): Nullable<SheetSkeleton>;
    resetRangeCache(_ranges: IRange[]): void;
    private _dynamicallyUpdateRowHeaderWidth;
    protected _hasUnMergedCellInRow(rowIndex: number, startColumn: number, endColumn: number): boolean;
    /**
     * expand curr range if it's intersect with merge range.
     * @param range
     * @returns {IRange} expanded range because merge info.
     */
    expandRangeByMerge(range: IRange): IRange;
    getColumnCount(): number;
    getRowCount(): number;
    /**
     * New version to get merge data.
     * @param row
     * @param column
     * @returns {ISelectionCell} The cell info with merge data
     */
    protected _getCellMergeInfo(row: number, column: number): ISelectionCell;
    /**
     * @deprecated use getNoMergeCellWithCoordByIndex instead.
     * @param rowIndex
     * @param columnIndex
     * @param header
     * @returns
     */
    getNoMergeCellPositionByIndex(rowIndex: number, columnIndex: number, header?: boolean): IPosition;
    /**
     * Original name: getNoMergeCellPositionByIndex
     * @param rowIndex
     * @param columnIndex
     */
    getNoMergeCellWithCoordByIndex(rowIndex: number, columnIndex: number, header?: boolean): IPosition;
    /**
     * @deprecated use getNoMergeCellWithCoordByIndex(row, col, false)
     * @param rowIndex
     * @param columnIndex
     */
    getNoMergeCellPositionByIndexWithNoHeader(rowIndex: number, columnIndex: number): IPosition;
    /**
     *
     * @param offsetY scaled offset y
     * @param scaleY scale y
     * @param scrollXY
     * @param scrollXY.x
     * @param scrollXY.y
     */
    getRowIndexByOffsetY(offsetY: number, scaleY: number, scrollXY: {
        x: number;
        y: number;
    }, options?: IGetRowColByPosOptions): number;
    /**
     * Get column index by offset x.
     * @param offsetX scaled offset x
     * @param scaleX scale x
     * @param scrollXY scrollXY
     * @returns column index
     */
    getColumnIndexByOffsetX(evtOffsetX: number, scaleX: number, scrollXY: {
        x: number;
        y: number;
    }, options?: IGetRowColByPosOptions): number;
    /**
     * Get cell index by offset(o)
     * @param offsetX position X in viewport.
     * @param offsetY position Y in viewport.
     * @param scaleX render scene scale x-axis, scene.getAncestorScale
     * @param scaleY render scene scale y-axis, scene.getAncestorScale
     * @param scrollXY  render viewport scroll {x, y}, scene.getScrollXYByRelativeCoords, scene.getScrollXY
     * @param scrollXY.x
     * @param scrollXY.y
     * @returns {row, col}
     */
    getCellIndexByOffset(offsetX: number, offsetY: number, scaleX: number, scaleY: number, scrollXY: {
        x: number;
        y: number;
    }, options?: IGetRowColByPosOptions): {
        row: number;
        column: number;
    };
    /**
     * Unlike getCellWithCoordByOffset, returning data doesn't include coord.
     * @param offsetX
     * @param offsetY
     * @param scaleX
     * @param scaleY
     * @param scrollXY
     */
    getCellByOffset(offsetX: number, offsetY: number, scaleX: number, scaleY: number, scrollXY: {
        x: number;
        y: number;
    }): Nullable<ICellInfo>;
    /**
     * Return cell information corresponding to the current coordinates, including the merged cell object.
     *
     * @param row Specified Row Coordinate
     * @param column Specified Column Coordinate
     */
    getCellWithCoordByIndex(row: number, column: number, header?: boolean): ICellWithCoord;
    /**
     * Get cell by pos(offsetX, offsetY). Combine getCellIndexByOffset and then getCellWithCoordByIndex.
     *
     * options.matchFirst true means get cell would skip all invisible cells.
     * @param offsetX position X in viewport.
     * @param offsetY position Y in viewport.
     * @param scaleX render scene scale x-axis, scene.getAncestorScale
     * @param scaleY render scene scale y-axis, scene.getAncestorScale
     * @param scrollXY render viewportScroll {x, y}
     * @param options {IGetRowColByPosOptions}
     * @returns {ICellWithCoord} Selection data with coordinates
     */
    getCellWithCoordByOffset(offsetX: number, offsetY: number, scaleX: number, scaleY: number, scrollXY: {
        x: number;
        y: number;
    }, options?: IGetRowColByPosOptions): ICellWithCoord;
    /**
     * Original name: getOffsetByPositionX
     * @param column
     * @returns
     */
    getOffsetByColumn(column: number): number;
    /**
     * Original name: getOffsetByPositionY
     * @param row
     */
    getOffsetByRow(row: number): number;
    /**
     * Original name: getDecomposedOffset
     * @param offsetX
     * @param offsetY
     */
    getOffsetRelativeToRowCol(offsetX: number, offsetY: number): {
        row: number;
        column: number;
        columnOffset: number;
        rowOffset: number;
    };
    protected _updateConfigAndGetDocumentModel(documentData: IDocumentData, horizontalAlign: HorizontalAlign, paddingData: IPaddingData, renderConfig?: IDocumentRenderConfig): Nullable<DocumentDataModel>;
    dispose(): void;
}
/**
 * Not same as getCellWithCoordByIndex, Only the coordinates of the corresponding cells in rows and columns are considered, without taking into account the merged data.
 *
 * @param row
 * @param column
 * @param rowHeightAccumulation
 * @param columnWidthAccumulation
 */
export declare function getCellCoordByIndexSimple(row: number, column: number, rowHeightAccumulation: number[], columnWidthAccumulation: number[]): IPosition;
/**
 * @deprecated use `getCellCoordByIndexSimple` instead.
 * @param row
 * @param column
 * @param rowHeightAccumulation
 * @param columnWidthAccumulation
 * @returns
 */
export declare function getCellPositionByIndexSimple(row: number, column: number, rowHeightAccumulation: number[], columnWidthAccumulation: number[]): IPosition;
/**
 * @description Get the cell position information of the specified row and column, including the position of the cell and the merge info
 * @param {number} row The row index of the cell
 * @param {number} column The column index of the cell
 * @param {number[]} rowHeightAccumulation The accumulated height of each row
 * @param {number[]} columnWidthAccumulation The accumulated width of each column
 * @param {ICellInfo} mergeData The merge information of the cell
 * @returns {ICellWithCoord} The cell position information of the specified row and column, including the position information of the cell and the merge information of the cell
 */
export declare function getCellWithCoordByIndexCore(row: number, column: number, rowHeightAccumulation: number[], columnWidthAccumulation: number[], mergeDataInfo: Nullable<ICellInfo>): ICellWithCoord;
/**
 * Get x in sheet coordinate. Already handled scrolling and zooming.
 * @param offsetX Offset value from PointerEvent in canvas element.
 * @param scaleX from scene.getAncestorScale
 * @param scrollXY Scroll value of viewport
 * @returns {number} x in sheet coordinate.
 */
export declare function getTransformOffsetX(offsetX: number, scaleX: number, scrollXY: {
    x: number;
    y: number;
}, rowHeaderWidth: number): number;
/**
 * @param offsetY
 * @param scaleY
 * @param scrollXY
 */
export declare function getTransformOffsetY(offsetY: number, scaleY: number, scrollXY: {
    x: number;
    y: number;
}, columnHeight: number): number;
