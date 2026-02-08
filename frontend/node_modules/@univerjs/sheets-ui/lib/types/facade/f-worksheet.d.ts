import { IDisposable, IRange, ISelectionCell, Nullable } from '@univerjs/core';
import { IColumnsHeaderCfgParam, IRowsHeaderCfgParam, SpreadsheetSkeleton } from '@univerjs/engine-render';
import { ISelectionStyle } from '@univerjs/sheets';
import { IScrollState, IViewportScrollState } from '@univerjs/sheets-ui';
import { FRange, FWorksheet } from '@univerjs/sheets/facade';
/**
 * @ignore
 */
export interface IFWorksheetSkeletonMixin {
    /**
     * Refresh the canvas.
     * @returns {FWorksheet} The FWorksheet instance for chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * fWorksheet.refreshCanvas();
     * ```
     */
    refreshCanvas(): FWorksheet;
    /**
     * Highlight multiple ranges on the worksheet.
     * @param {FRange[]} ranges  The ranges to highlight.
     * @param {Nullable<Partial<ISelectionStyle>>} style - style for highlight ranges.
     * @param {Nullable<ISelectionCell>} primary - primary cell for highlight ranges.
     * @return {IDisposable} An IDisposable to remove the highlights.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const ranges = [fWorksheet.getRange('A1:B2'), fWorksheet.getRange('D4:E5')];
     * const disposable = fWorksheet.highlightRanges(ranges, { fill: 'yellow' });
     *
     * // To remove the highlights later
     * disposable.dispose();
     * ```
     */
    highlightRanges(ranges: FRange[], style?: Nullable<Partial<ISelectionStyle>>, primary?: Nullable<ISelectionCell>): IDisposable;
    /**
     * Set zoom ratio of the worksheet.
     * @param {number} zoomRatio The zoom ratio to set.It should be in the range of 0.1 to 4.0.
     * @returns {FWorksheet} The FWorksheet instance for chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     *
     * // Set zoom ratio to 200%
     * fWorksheet.zoom(2);
     * const zoomRatio = fWorksheet.getZoom();
     * console.log(zoomRatio); // 2
     * ```
     */
    zoom(zoomRatio: number): FWorksheet;
    /**
     * Get the zoom ratio of the worksheet.
     * @returns {number} The zoom ratio of the worksheet.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const zoomRatio = fWorksheet.getZoom();
     * console.log(zoomRatio);
     * ```
     */
    getZoom(): number;
    /**
     * Return visible range, sum view range of 4 viewports.
     * @returns {IRange} - visible range
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const visibleRange = fWorksheet.getVisibleRange();
     * console.log(visibleRange);
     * console.log(fWorksheet.getRange(visibleRange).getA1Notation());
     * ```
     */
    getVisibleRange(): IRange;
    /**
     * Scroll spreadsheet(viewMain) to cell position. Make the cell at topleft of current viewport.
     * Based on the limitations of viewport and the number of rows and columns, you can only scroll to the maximum scrollable range.
     * @param {number} row - Cell row index
     * @param {number} column - Cell column index
     * @param {number} [duration] - The duration of the scroll animation in milliseconds.
     * @returns {FWorksheet} - The FWorksheet instance for chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     *
     * // Scroll to cell D10
     * const fRange = fWorksheet.getRange('D10');
     * const row = fRange.getRow();
     * const column = fRange.getColumn();
     * fWorksheet.scrollToCell(row, column);
     * ```
     */
    scrollToCell(row: number, column: number, duration?: number): FWorksheet;
    /**
     * Get scroll state of current sheet.
     * @returns {IScrollState} curr scroll state
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     *
     * // Scroll to cell D10
     * const fRange = fWorksheet.getRange('D10');
     * const row = fRange.getRow();
     * const column = fRange.getColumn();
     * fWorksheet.scrollToCell(row, column);
     *
     * // Get scroll state
     * const scrollState = fWorksheet.getScrollState();
     * const { offsetX, offsetY, sheetViewStartColumn, sheetViewStartRow } = scrollState;
     * console.log(scrollState); // sheetViewStartRow: 9, sheetViewStartColumn: 3, offsetX: 0, offsetY: 0
     * ```
     */
    getScrollState(): IScrollState;
    /**
     * Get the skeleton service of the worksheet.
     * @returns {Nullable<SpreadsheetSkeleton>} The skeleton of the worksheet.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const skeleton = fWorksheet.getSkeleton();
     * console.log(skeleton);
     * ```
     */
    getSkeleton(): Nullable<SpreadsheetSkeleton>;
    /**
     * Sets the width of the given column to fit its contents.
     * @param {number} columnPosition - The position of the given column to resize. index starts at 0.
     * @returns {FWorksheet} - The FWorksheet instance for chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     *
     * // Set the long text value in cell A1
     * const fRange = fWorksheet.getRange('A1');
     * fRange.setValue('Whenever it is a damp, drizzly November in my soul...');
     *
     * // Set the column A to a width which fits the text
     * fWorksheet.autoResizeColumn(0);
     * ```
     */
    autoResizeColumn(columnPosition: number): FWorksheet;
    /**
     * Sets the width of all columns starting at the given column position to fit their contents.
     * @param {number} startColumn - The position of the first column to resize. index starts at 0.
     * @param {number} numColumns - The number of columns to auto-resize.
     * @returns {FWorksheet} - The FWorksheet instance for chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     *
     * // Set the A:C columns to a width that fits their text.
     * fWorksheet.autoResizeColumns(0, 3);
     * ```
     */
    autoResizeColumns(startColumn: number, numColumns: number): FWorksheet;
    /**
     * Sets the width of all columns starting at the given column position to fit their contents.
     * @deprecated use `autoResizeColumns` instead
     * @param {number} columnPosition - The position of the first column to resize. index starts at 0.
     * @param {number} numColumn - The number of columns to auto-resize.
     * @returns {FWorksheet} - The FWorksheet instance for chaining.
     */
    setColumnAutoWidth(columnPosition: number, numColumn: number): FWorksheet;
    /**
     * Sets the height of all rows starting at the given row position to fit their contents.
     * @param {number} startRow - The position of the first row to resize. index starts at 0.
     * @param {number} numRows - The number of rows to auto-resize.
     * @returns {FWorksheet} - The FWorksheet instance for chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     *
     * // Set the first 3 rows to a height that fits their text.
     * fWorksheet.autoResizeRows(0, 3);
     * ```
     */
    autoResizeRows(startRow: number, numRows: number): FWorksheet;
    /**
     * Customize the column header of the worksheet.
     * @param {IColumnsHeaderCfgParam} cfg The configuration of the column header.
     * @example
     * ```typescript
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * fWorksheet.customizeColumnHeader({
     *   headerStyle: {
     *     fontColor: '#fff',
     *     backgroundColor: '#4e69ee',
     *     fontSize: 9
     *   },
     *   columnsCfg: {
     *     0: 'kuma II',
     *     3: {
     *       text: 'Size',
     *       textAlign: 'left', // CanvasTextAlign
     *       fontColor: '#fff',
     *       fontSize: 12,
     *       borderColor: 'pink',
     *       backgroundColor: 'pink',
     *     },
     *     4: 'Wow'
     *   }
     * });
     * ```
     */
    customizeColumnHeader(cfg: IColumnsHeaderCfgParam): void;
    /**
     * Customize the row header of the worksheet.
     * @param {IRowsHeaderCfgParam} cfg The configuration of the row header.
     * @example
     * ```typescript
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * fWorksheet.customizeRowHeader({
     *   headerStyle: {
     *     backgroundColor: 'pink',
     *     fontSize: 12
     *   },
     *   rowsCfg: {
     *     0: 'Moka II',
     *     3: {
     *       text: 'Size',
     *       textAlign: 'left', // CanvasTextAlign
     *     },
     *   }
     * });
     * ```
     */
    customizeRowHeader(cfg: IRowsHeaderCfgParam): void;
    /**
     * Set column height for column header.
     * @param {number} height - The height to set.
     * @returns {FWorksheet} - The FWorksheet instance for chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * fWorksheet.setColumnHeaderHeight(100);
     * ```
     */
    setColumnHeaderHeight(height: number): FWorksheet;
    /**
     * Set column height for column header.
     * @param {number} width - The width to set.
     * @returns {FWorksheet} - The FWorksheet instance for chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * fWorksheet.setRowHeaderWidth(100);
     * ```
     */
    setRowHeaderWidth(width: number): FWorksheet;
    /**
     * @deprecated use `univerAPI.addEvent(univerAPI.Event.Scroll, (params) => {})` instead
     */
    onScroll(callback: (params: Nullable<IViewportScrollState>) => void): IDisposable;
}
export declare class FWorksheetSkeletonMixin extends FWorksheet implements IFWorksheetSkeletonMixin {
    refreshCanvas(): FWorksheet;
    highlightRanges(ranges: FRange[], style?: Nullable<Partial<ISelectionStyle>>, primary?: Nullable<ISelectionCell>): IDisposable;
    zoom(zoomRatio: number): FWorksheet;
    getZoom(): number;
    getVisibleRange(): IRange;
    scrollToCell(row: number, column: number, duration?: number): FWorksheet;
    getScrollState(): IScrollState;
    onScroll(callback: (params: Nullable<IViewportScrollState>) => void): IDisposable;
    getSkeleton(): Nullable<SpreadsheetSkeleton>;
    autoResizeColumn(columnPosition: number): FWorksheet;
    autoResizeColumns(startColumn: number, numColumns: number): FWorksheet;
    setColumnAutoWidth(columnPosition: number, numColumn: number): FWorksheet;
    autoResizeRows(startRow: number, numRows: number): FWorksheet;
    customizeColumnHeader(cfg: IColumnsHeaderCfgParam): void;
    customizeRowHeader(cfg: IRowsHeaderCfgParam): void;
    setColumnHeaderHeight(height: number): FWorksheet;
    setRowHeaderWidth(width: number): FWorksheet;
    /**
     * Get sheet render component from render by unitId and view key.
     * @private
     * @param {string} unitId The unit id of the spreadsheet.
     * @param {SHEET_VIEW_KEY} viewKey The view key of the spreadsheet.
     * @returns {Nullable<RenderComponentType>} The render component.
     */
    private _getSheetRenderComponent;
}
declare module '@univerjs/sheets/facade' {
    interface FWorksheet extends IFWorksheetSkeletonMixin {
    }
}
