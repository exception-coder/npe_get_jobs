import { IInterceptor } from '../common/interceptor';
import { Nullable, ObjectMatrix } from '../shared';
import { BooleanNumber, HorizontalAlign, TextDirection, VerticalAlign, WrapStrategy, CellValueType } from '../types/enum';
import { IPaddingData, IStyleData, ITextRotation } from '../types/interfaces';
import { Styles } from './styles';
import { CustomData, ICellData, ICellDataForSheetInterceptor, ICellDataWithSpanAndDisplay, IFreeze, IRange, ISelectionCell, IWorksheetData, CellModeEnum } from './typedef';
import { DocumentDataModel } from '../docs';
import { ColumnManager } from './column-manager';
import { Range } from './range';
import { RowManager } from './row-manager';
import { SpanModel } from './span-model';
import { SheetViewModel } from './view-model';
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
export interface ICellOtherConfig {
    textRotation?: ITextRotation;
    textDirection?: Nullable<TextDirection>;
    horizontalAlign?: HorizontalAlign;
    verticalAlign?: VerticalAlign;
    wrapStrategy?: WrapStrategy;
    paddingData?: IPaddingData;
    cellValueType?: CellValueType;
}
export interface ICellDocumentModelOption {
    isDeepClone?: boolean;
    displayRawFormula?: boolean;
    ignoreTextRotation?: boolean;
}
/**
 * The model of a Worksheet.
 */
export declare class Worksheet {
    readonly unitId: string;
    private readonly _styles;
    protected _sheetId: string;
    protected _snapshot: IWorksheetData;
    protected _cellData: ObjectMatrix<Nullable<ICellData>>;
    protected _rowManager: RowManager;
    protected _columnManager: ColumnManager;
    protected readonly _viewModel: SheetViewModel;
    protected _spanModel: SpanModel;
    /**
     * Whether the row style precedes the column style.
     */
    protected _isRowStylePrecedeColumnStyle: boolean;
    private _getCellHeight;
    constructor(unitId: string, snapshot: Partial<IWorksheetData>, _styles: Styles);
    getSnapshot(): IWorksheetData;
    getCellHeight(row: number, col: number): number;
    /**
     * Set the merge data of the sheet, all the merged cells will be rebuilt.
     * @param mergeData
     */
    setMergeData(mergeData: IRange[]): void;
    getSpanModel(): SpanModel;
    setIsRowStylePrecedeColumnStyle(isRowStylePrecedeColumnStyle: boolean): void;
    getStyleDataByHash(hash: string): Nullable<IStyleData>;
    setStyleData(style: IStyleData): Nullable<string>;
    /**
     * Get the style of the column.
     * @param {number} column The column index
     * @param {boolean} [keepRaw] If true, return the raw style data, otherwise return the style data object
     * @returns {Nullable<IStyleData>|string} The style of the column
     */
    getColumnStyle(column: number, keepRaw: true): string | Nullable<IStyleData>;
    getColumnStyle(column: number): Nullable<IStyleData>;
    /**
     * Set the style of the column.
     * @param {number} column The column index
     * @param {string|Nullable<IStyleData>} style The style to be set
     */
    setColumnStyle(column: number, style: string | Nullable<IStyleData>): void;
    /**
     * Get the style of the row.
     * @param {number} row The row index
     * @param {boolean} [keepRaw] If true, return the raw style data, otherwise return the style data object
     * @returns {Nullable<IStyleData>} The style of the row
     */
    getRowStyle(row: number, keepRaw: true): string | Nullable<IStyleData>;
    getRowStyle(row: number): Nullable<IStyleData>;
    /**
     * Set the style of the row.
     * @param {number} row
     * @param {string|Nullable<IStyleData>} style The style to be set
     */
    setRowStyle(row: number, style: string | Nullable<IStyleData>): void;
    /**
     * Get the default style of the worksheet.
     * @returns {Nullable<IStyleData>} Default Style
     */
    getDefaultCellStyle(): Nullable<IStyleData> | string;
    getDefaultCellStyleInternal(): Nullable<IStyleData>;
    /**
     * Set Default Style, if the style has been set, all cells style will be base on this style.
     * @param {Nullable<IStyleData>} style The style to be set as default style
     */
    setDefaultCellStyle(style: Nullable<IStyleData> | string): void;
    getCellStyle(row: number, col: number): Nullable<IStyleData>;
    /**
     * Get the composed style of the cell. If you want to get the style of the cell without merging row style,
     * col style and default style, please use {@link getCellStyle} instead.
     *
     * @param {number} row The row index of the cell
     * @param {number} col The column index of the cell
     * @param {boolean} [rowPriority] If true, row style will precede column style, otherwise use this._isRowStylePrecedeColumnStyle
     * @returns {IStyleData} The composed style of the cell
     */
    getComposedCellStyle(row: number, col: number, rowPriority?: boolean): IStyleData;
    /**
     * Get the composed style of the cell. If you want to get the style of the cell without merging row style,
     * col style and default style, please use {@link getCellStyle} instead.
     * For performance reason, if you already have the cell data, you can use this method to avoid getting the cell data again.
     *
     * @param {number} row The row index of the cell
     * @param {number} col The column index of the cell
     * @param {Nullable<ICellDataForSheetInterceptor>} cellData The cell data of the cell.
     * @param {boolean} [rowPriority] If true, row style will precede column style, otherwise use this._isRowStylePrecedeColumnStyle
     * @returns {IStyleData} The composed style of the cell
     */
    getComposedCellStyleByCellData(row: number, col: number, cellData: Nullable<ICellDataForSheetInterceptor>, rowPriority?: boolean): IStyleData;
    /**
     * Returns WorkSheet Cell Data Matrix
     * @returns WorkSheet Cell Data Matrix
     */
    getCellMatrix(): ObjectMatrix<Nullable<ICellData>>;
    /**
     * Get worksheet printable cell range.
     * @returns
     */
    getCellMatrixPrintRange(): {
        startColumn: number;
        startRow: number;
        endColumn: number;
        endRow: number;
    } | null;
    /**
     * Returns Row Manager
     * @returns Row Manager
     */
    getRowManager(): RowManager;
    /**
     * Returns the ID of its parent unit.
     */
    getUnitId(): string;
    /**
     * Returns the ID of the sheet represented by this object.
     * @returns ID of the sheet
     */
    getSheetId(): string;
    /**
     * Returns Column Manager
     * @returns Column Manager
     */
    getColumnManager(): ColumnManager;
    /**
     * Returns the name of the sheet.
     * @returns name of the sheet
     */
    getName(): string;
    /**
     * Returns WorkSheet Clone Object
     * @returns WorkSheet Clone Object
     * @deprecated
     */
    clone(): Worksheet;
    /**
     * Get the merged cell list of the sheet.
     * @returns {IRange[]} merged cell list
     */
    getMergeData(): IRange[];
    /**
     * Get the merged cell Range of the sheet cell.
     * If (row, col) is not in a merged cell, return null
     *
     * @param {number} row The row index of test cell
     * @param {number} col The column index of test cell
     * @returns {Nullable<IRange>} The merged cell range of the cell, if the cell is not in a merged cell, return null
     */
    getMergedCell(row: number, col: number): Nullable<IRange>;
    /**
     * Get the merged cell info list which has intersection with the given range.
     * @param {number} startRow The start row index of the range
     * @param {number} startColumn The start column index of the range
     * @param {number} endRow The end row index of the range
     * @param {number} endColumn The end column index of the range
     * @returns {IRange} The merged cell info list which has intersection with the given range or empty array if no merged cell in the range
     */
    getMergedCellRange(startRow: number, startColumn: number, endRow: number, endColumn: number): IRange[];
    /**
     * Get if the row contains merged cell
     * @param {number} row The row index
     * @returns {boolean} Is merge cell across row
     */
    isRowContainsMergedCell(row: number): boolean;
    /**
     * Get if the column contains merged cell
     * @param {number} column The column index
     * @returns {boolean} Is merge cell across column
     */
    isColumnContainsMergedCell(column: number): boolean;
    /**
     * Get cell info with merge data
     * @param {number} row - The row index of the cell.
     * @param {number} column - The column index of the cell.
     * @type {selectionCell}
     * @property {number} actualRow - The actual row index of the cell
     * @property {number} actualColumn - The actual column index of the cell
     * @property {boolean} isMergedMainCell - Whether the cell is the main cell of the merged cell, only the upper left cell in the merged cell returns true here
     * @property {boolean} isMerged - Whether the cell is in a merged cell, the upper left cell in the merged cell returns false here
     * @property {number} endRow - The end row index of the merged cell
     * @property {number} endColumn - The end column index of the merged cell
     * @property {number} startRow - The start row index of the merged cell
     * @property {number} startColumn - The start column index of the merged cell
     * @returns  {selectionCell} - The cell info with merge data
     */
    getCellInfoInMergeData(row: number, column: number): ISelectionCell;
    /**
     * Get cellData, includes cellData, customRender, markers, dataValidate, etc.
     *
     * WARNING: All sheet CELL_CONTENT interceptors will be called in this method, cause performance issue.
     * example: this._sheetInterceptorService.intercept(INTERCEPTOR_POINT.CELL_CONTENT);
     *
     * @param row
     * @param col
     * @returns ICellDataForSheetInterceptor
     */
    getCell(row: number, col: number): Nullable<ICellDataForSheetInterceptor>;
    /**
     * Get cellData only use effect on value interceptor
     * @param {number} number row The row index of the cell.
     * @param {number} number col The column index of the cell.
     * @returns {Nullable<ICellDataForSheetInterceptor>} The cell data only use effect on value interceptor
     */
    getCellValueOnly(row: number, col: number): Nullable<ICellDataForSheetInterceptor>;
    /**
     * Get cellData only use effect on style interceptor
     * @param {number} row The row index of the cell.
     * @param {number} col The column index of the cell.
     * @returns {Nullable<ICellDataForSheetInterceptor>} The cell data only use effect on style interceptor
     */
    getCellStyleOnly(row: number, col: number): Nullable<ICellDataForSheetInterceptor>;
    getCellRaw(row: number, col: number): Nullable<ICellData>;
    getCellWithFilteredInterceptors(row: number, col: number, key: string, filter: (interceptor: IInterceptor<any, any>) => boolean): Nullable<ICellDataForSheetInterceptor>;
    getRowFiltered(row: number): boolean;
    /**
     * Get the filtered out rows in a given range. used for remove rows operation, etc.
     * @param range - The range to get filtered rows from.
     * @returns {number[]} An array of row indices that are filtered out within the specified range.
     */
    getRangeFilterRows(range: IRange): number[];
    /**
     * Get cell matrix from a given range and pick out non-first cells of merged cells.
     *
     * Notice that `ICellData` here is not after copying. In another word, the object matrix here should be
     * considered as a slice of the original worksheet data matrix.
     *
     * Control the v attribute in the return cellData.v through dataMode
     */
    getMatrixWithMergedCells(row: number, col: number, endRow: number, endCol: number): ObjectMatrix<ICellDataWithSpanAndDisplay>;
    getMatrixWithMergedCells(row: number, col: number, endRow: number, endCol: number, dataMode: CellModeEnum): ObjectMatrix<ICellDataWithSpanAndDisplay>;
    getRange(range: IRange): Range;
    getRange(startRow: number, startColumn: number): Range;
    getRange(startRow: number, startColumn: number, endRow: number, endColumn: number): Range;
    getScrollLeftTopFromSnapshot(): {
        scrollLeft: number;
        scrollTop: number;
    };
    /**
     * Return WorkSheetZoomRatio
     * @return zoomRatio
     */
    getZoomRatio(): number;
    /**
     * Returns WorkSheet Configures
     * @returns WorkSheet Configures
     */
    getConfig(): IWorksheetData;
    /**
     * Returns  frozen.
     * @returns  frozen
     */
    getFreeze(): IFreeze;
    /**
     * Returns the current number of columns in the sheet, regardless of content.
     * @returns the current number of columns in the sheet, regardless of content
     */
    getMaxColumns(): number;
    /**
     * Returns the current number of rows in the sheet, regardless of content.
     * @returns the current number of rows in the sheet, regardless of content
     */
    getMaxRows(): number;
    getRowCount(): number;
    setRowCount(count: number): void;
    getColumnCount(): number;
    setColumnCount(count: number): void;
    /**
     * isSheetHidden
     * @returns hidden status of sheet
     */
    isSheetHidden(): BooleanNumber;
    /**
     * Returns true if the sheet's gridlines are hidden; otherwise returns false. Gridlines are visible by default.
     * @returns {boolean} Gridlines Hidden Status.
     */
    hasHiddenGridlines(): boolean;
    /**
     * Returns the color of the gridlines, or undefined if the gridlines are not colored.
     * @returns {string | undefined} returns the color of the gridlines, or undefined if the gridlines are default.
     */
    getGridlinesColor(): string | undefined;
    /**
     * Gets the sheet tab color, or null if the sheet tab has no color.
     * @returns the sheet tab color or null
     */
    getTabColor(): Nullable<string>;
    /**
     * Gets the width in pixels of the given column.
     * @param columnPosition column index
     * @returns Gets the width in pixels of the given column.
     */
    getColumnWidth(columnPosition: number): number;
    /**
     * Gets the height in pixels of the given row.
     * @param row row index
     * @returns Gets the height in pixels of the given row.
     */
    getRowHeight(row: number): number;
    /**
     * Row is filtered out, that means this row is invisible.
     * @param row
     * @returns {boolean} is row hidden by filter
     */
    isRowFiltered(row: number): boolean;
    /**
     * Get if the row is visible. It may be affected by features like filter and view.
     * @param row the row index
     * @returns {boolean} if the row in visible to the user
     */
    getRowVisible(row: number): boolean;
    /**
     * Get if the row does not have `hidden` property. This value won't affected by features like filter and view.
     * @param row the row index
     * @returns if the row does not have `hidden` property
     */
    getRowRawVisible(row: number): boolean;
    getHiddenRows(start?: number, end?: number): IRange[];
    getColVisible(col: number): boolean;
    getHiddenCols(start?: number, end?: number): IRange[];
    /**
     * Get all visible rows in the sheet.(not include filter & view, like getRawVisibleRows)
     * @returns Visible rows range list
     */
    getVisibleRows(): IRange[];
    /**
     * Get all visible columns in the sheet.(not include filter & view)
     * @returns Visible columns range list
     */
    getVisibleCols(): IRange[];
    /**
     * Returns true if this sheet layout is right-to-left. Returns false if the sheet uses the default left-to-right layout.
     * @returns true if this sheet layout is right-to-left. Returns false if the sheet uses the default left-to-right layout.
     */
    isRightToLeft(): BooleanNumber;
    /**
     * Returns the position of the last row that has content.
     * @returns the position of the last row that has content.
     */
    getLastRowWithContent(): number;
    /**
     * Returns the position of the last column that has content.
     * @returns the position of the last column that has content.
     */
    getLastColumnWithContent(): number;
    getDataRangeScope(): IRange;
    cellHasValue(value: ICellData): boolean;
    /**
     * Iterate a range row by row.
     *
     * Performance intensive.
     *
     * @param range the iterate range
     * @param skipEmpty whether to skip empty cells, default to be `true`
     */
    iterateByRow(range: IRange, skipEmpty?: boolean): Iterable<Readonly<ICell>>;
    /**
     * Iterate a range column by column. This is pretty similar to `iterateByRow` but with different order.
     *
     * Performance intensive.
     *
     * @param range The iterate range.
     * @param skipEmpty Whether to skip empty cells, default to be `true`.
     * @param skipNonTopLeft Whether to skip non-top-left cells of merged cells, default to be `true`. If the
     * parameter is set to `false`, the iterator will return cells in the top row.
     */
    iterateByColumn(range: IRange, skipEmpty?: boolean, skipNonTopLeft?: boolean): Iterable<Readonly<ICell>>;
    /**
     * This method generates a document model based on the cell's properties and handles the associated styles and configurations.
     * If the cell does not exist, it will return null.
     * PS: This method has significant impact on performance.
     * @param cell
     * @param options
     */
    getCellDocumentModel(cell: Nullable<ICellDataForSheetInterceptor>, style: Nullable<IStyleData>, options?: ICellDocumentModelOption): Nullable<IDocumentLayoutObject>;
    private _updateConfigAndGetDocumentModel;
    /**
     * Only used for cell edit, and no need to rotate text when edit cell content!
     */
    getBlankCellDocumentModel(cell: Nullable<ICellData>, row: number, column: number): IDocumentLayoutObject;
    getCellDocumentModelWithFormula(cell: ICellData, row: number, column: number): Nullable<IDocumentLayoutObject>;
    /**
     * Get custom metadata of worksheet
     * @returns {CustomData | undefined} custom metadata
     */
    getCustomMetadata(): CustomData | undefined;
    /**
     * Set custom metadata of workbook
     * @param {CustomData | undefined} custom custom metadata
     */
    setCustomMetadata(custom: CustomData | undefined): void;
}
/**
 * A cell info including its span (if it is the top-left cell of a merged cell).
 */
export interface ICell {
    row: number;
    col: number;
    rowSpan?: number;
    colSpan?: number;
    value: Nullable<ICellData>;
}
/**
 * Get pure text in a cell.
 * @param cell
 * @returns pure text in this cell
 */
export declare function extractPureTextFromCell(cell: Nullable<ICellData>): string;
export declare function getOriginCellValue(cell: Nullable<ICellData>): Nullable<import('./typedef').CellValue>;
