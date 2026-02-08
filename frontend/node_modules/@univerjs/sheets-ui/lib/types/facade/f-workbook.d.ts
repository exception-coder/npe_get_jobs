import { IDisposable, Nullable } from '@univerjs/core';
import { IColumnsHeaderCfgParam, IMouseEvent, IPointerEvent, IRowsHeaderCfgParam } from '@univerjs/engine-render';
import { ICellPosWithEvent, IDragCellPosition, IHoverRichTextInfo, IHoverRichTextPosition, IScrollState } from '@univerjs/sheets-ui';
import { IDialogPartMethodOptions, ISidebarMethodOptions } from '@univerjs/ui';
import { ICellEventParam } from './f-event';
import { FWorkbook } from '@univerjs/sheets/facade';
/**
 * @ignore
 */
export interface IFWorkbookSheetsUIMixin {
    /**
     * Open a sidebar.
     * @deprecated use `univerAPI.openSidebar` instead
     * @param {ISidebarMethodOptions} params the sidebar options
     * @returns {IDisposable} the disposable object
     * @example
     * ```ts
     * univerAPI.openSidebar({
     *   id: 'mock-sidebar-id',
     *   width: 300,
     *   header: {
     *     label: 'Sidebar Header',
     *   },
     *   children: {
     *     label: 'Sidebar Content',
     *   },
     *   footer: {
     *     label: 'Sidebar Footer',
     *   },
     *   onClose: () => {
     *     console.log('Sidebar closed')
     *   },
     * });
     * ```
     */
    openSiderbar(params: ISidebarMethodOptions): IDisposable;
    /**
     * Open a dialog.
     * @deprecated use `univerAPI.openDialog` instead
     * @param {IDialogPartMethodOptions} dialog the dialog options
     * @returns {IDisposable} the disposable object
     * @example
     * ```ts
     * import { Button } from '@univerjs/design';
     *
     * univerAPI.openDialog({
     *   id: 'mock-dialog-id',
     *   width: 500,
     *   title: {
     *     label: 'Dialog Title',
     *   },
     *   children: {
     *     label: 'Dialog Content',
     *   },
     *   footer: {
     *     title: (
     *       <>
     *         <Button onClick={() => { console.log('Cancel clicked') }}>Cancel</Button>
     *         <Button variant="primary" onClick={() => { console.log('Confirm clicked') }} style={{marginLeft: '10px'}}>Confirm</Button>
     *       </>
     *     )
     *   },
     *   draggable: true,
     *   mask: true,
     *   maskClosable: true,
     * });
     * ```
     */
    openDialog(dialog: IDialogPartMethodOptions): IDisposable;
    /**
     * Customize the column header of the all worksheets in the workbook.
     * @param {IColumnsHeaderCfgParam} cfg The configuration of the column header.
     * @example
     * ```typescript
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * fWorkbook.customizeColumnHeader({
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
     * Customize the row header of the all worksheets in the workbook.
     * @param {IRowsHeaderCfgParam} cfg The configuration of the row header.
     * @example
     * ```typescript
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * fWorkbook.customizeRowHeader({
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
     * @deprecated use `univerAPI.addEvent(univerAPI.Event.CellClicked, (params) => {})` instead
     */
    onCellClick(callback: (cell: IHoverRichTextInfo) => void): IDisposable;
    /**
     * @deprecated use `univerAPI.addEvent(univerAPI.Event.CellHover, (params) => {})` instead
     */
    onCellHover(callback: (cell: IHoverRichTextPosition) => void): IDisposable;
    /**
     * @deprecated use `univerAPI.addEvent(univerAPI.Event.CellPointerMove, (params) => {})` instead
     */
    onCellPointerMove(callback: (cell: ICellPosWithEvent, event: IPointerEvent | IMouseEvent) => void): IDisposable;
    /**
     * @deprecated use `univerAPI.addEvent(univerAPI.Event.CellPointerDown, (params) => {})` instead
     */
    onCellPointerDown(callback: (cell: ICellPosWithEvent) => void): IDisposable;
    /**
     * @deprecated use `univerAPI.addEvent(univerAPI.Event.CellPointerUp, (params) => {})` instead
     */
    onCellPointerUp(callback: (cell: ICellPosWithEvent) => void): IDisposable;
    /**
     * @deprecated use `univerAPI.addEvent(univerAPI.Event.DragOver, (params) => {})` instead
     */
    onDragOver(callback: (cell: IDragCellPosition) => void): IDisposable;
    /**
     * @deprecated use `univerAPI.addEvent(univerAPI.Event.Drop, (params) => {})` instead
     */
    onDrop(callback: (cell: IDragCellPosition) => void): IDisposable;
    /**
     * Start the editing process of the current active cell
     * @returns {boolean} Whether the editing process is started successfully
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * fWorkbook.startEditing();
     * ```
     */
    startEditing(): boolean;
    /**
     * @deprecated Use `endEditingAsync` as instead
     */
    endEditing(save?: boolean): Promise<boolean>;
    /**
     * @async
     * End the editing process of the current active cell
     * @param {boolean} save - Whether to save the changes, default is true
     * @returns {Promise<boolean>} Whether the editing process is ended successfully
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * await fWorkbook.endEditingAsync(false);
     * ```
     */
    endEditingAsync(save?: boolean): Promise<boolean>;
    /**
     * @async
     * End the editing process of the current active cell
     * @returns {Promise<boolean>} Whether the editing process is ended successfully
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * await fWorkbook.abortEditingAsync();
     * ```
     */
    abortEditingAsync(): Promise<boolean>;
    /**
     * Check if the current active cell is in editing state
     * @returns {boolean} True if the current active cell is in editing state, false otherwise
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const isEditing = fWorkbook.isCellEditing();
     * console.log(isEditing);
     * ```
     */
    isCellEditing(): boolean;
    /**
     * Get scroll state of specified sheet.
     * @param {string} sheetId - sheet id
     * @returns {IScrollState} scroll state
     * @example
     * ``` ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     *
     * // scroll to cell D10
     * fWorksheet.scrollToCell(9, 3);
     *
     * // get scroll state
     * const scrollState = fWorkbook.getScrollStateBySheetId(fWorksheet.getSheetId());
     * const { offsetX, offsetY, sheetViewStartRow, sheetViewStartColumn } = scrollState;
     * console.log(scrollState); // sheetViewStartRow: 9, sheetViewStartColumn: 3, offsetX: 0, offsetY: 0
     * ```
     */
    getScrollStateBySheetId(sheetId: string): Nullable<IScrollState>;
    /**
     * Disable selection. After disabled, there would be no response for selection.
     * @returns {FWorkbook} FWorkbook instance for chaining
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * fWorkbook.disableSelection();
     * ```
     */
    disableSelection(): FWorkbook;
    /**
     * Enable selection. After this you can select range.
     * @returns {FWorkbook} FWorkbook instance for chaining
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * fWorkbook.enableSelection();
     * ```
     */
    enableSelection(): FWorkbook;
    /**
     * Set selection invisible, Unlike disableSelection, selection still works, you just can not see them.
     * @returns {FWorkbook} FWorkbook instance for chaining
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * fWorkbook.transparentSelection();
     * ```
     */
    transparentSelection(): FWorkbook;
    /**
     * Set selection visible.
     * @returns {FWorkbook} FWorkbook instance for chaining
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * fWorkbook.showSelection();
     * ```
     */
    showSelection(): FWorkbook;
}
export declare class FWorkbookSheetsUIMixin extends FWorkbook implements IFWorkbookSheetsUIMixin {
    openSiderbar(params: ISidebarMethodOptions): IDisposable;
    openDialog(dialog: IDialogPartMethodOptions): IDisposable;
    customizeColumnHeader(cfg: IColumnsHeaderCfgParam): void;
    customizeRowHeader(cfg: IRowsHeaderCfgParam): void;
    /**
     * Get sheet render component from render by unitId and view key.
     * @private
     * @param {string} unitId The unit id of the spreadsheet.
     * @param {SHEET_VIEW_KEY} viewKey The view key of the spreadsheet.
     * @returns {Nullable<RenderComponentType>} The render component.
     */
    private _getSheetRenderComponent;
    private _logDeprecation;
    generateCellParams(cell: IHoverRichTextPosition | ICellPosWithEvent): ICellEventParam;
    onCellClick(callback: (cell: IHoverRichTextInfo) => void): IDisposable;
    onCellHover(callback: (cell: IHoverRichTextPosition) => void): IDisposable;
    onCellPointerDown(callback: (cell: ICellPosWithEvent) => void): IDisposable;
    onCellPointerUp(callback: (cell: ICellPosWithEvent) => void): IDisposable;
    onCellPointerMove(callback: (cell: ICellPosWithEvent, event: IPointerEvent | IMouseEvent) => void): IDisposable;
    onDragOver(callback: (cell: IDragCellPosition) => void): IDisposable;
    onDrop(callback: (cell: IDragCellPosition) => void): IDisposable;
    startEditing(): boolean;
    endEditing(save?: boolean): Promise<boolean>;
    endEditingAsync(save?: boolean): Promise<boolean>;
    abortEditingAsync(): Promise<boolean>;
    isCellEditing(): boolean;
    /**
     * Get scroll state of specified sheet.
     * @param {string} sheetId - sheet id
     * @returns {IScrollState} scroll state
     * @example
     * ``` ts
     * univerAPI.getActiveWorkbook().getScrollStateBySheetId($sheetId)
     * ```
     */
    getScrollStateBySheetId(sheetId: string): Nullable<IScrollState>;
    disableSelection(): FWorkbook;
    enableSelection(): FWorkbook;
    transparentSelection(): FWorkbook;
    showSelection(): FWorkbook;
}
declare module '@univerjs/sheets/facade' {
    interface FWorkbook extends IFWorkbookSheetsUIMixin {
    }
}
