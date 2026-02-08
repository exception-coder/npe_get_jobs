import { ICellCustomRender, IDisposable, Nullable, InterceptorEffectEnum } from '@univerjs/core';
import { IDragCellPosition, IEditorBridgeServiceVisibleParam, IHoverCellPosition } from '@univerjs/sheets-ui';
import { FSheetHooks } from '@univerjs/sheets/facade';
/**
 * @ignore
 */
export interface IFSheetHooksUIMixin {
    /**
     * The onCellPointerMove event is fired when a pointer changes coordinates.
     * @deprecated use `univerAPI.addEvent(univerAPI.Event.CellPointerMove, (params) => {})` instead
     * @param {function(Nullable<IHoverCellPosition>): void} callback - function that will be called when the event is fired
     * @returns {IDisposable} A disposable object that can be used to unsubscribe from the event
     * @example
     * ```ts
     * univerAPI.getSheetHooks().onCellPointerMove((cellPos) => { console.log(cellPos)});
     * ```
     */
    onCellPointerMove(callback: (cellPos: Nullable<IHoverCellPosition>) => void): IDisposable;
    /**
     * The onCellPointerOver event is fired when a pointer is moved into a cell's hit test boundaries.
     * @deprecated use `univerAPI.addEvent(univerAPI.Event.CellHover, (params) => {})` instead
     * @param {function(Nullable<IHoverCellPosition>): void} callback - function that will be called when the event is fired
     * @returns {IDisposable} A disposable object that can be used to unsubscribe from the event
     * @example
     * ```ts
     * univerAPI.getSheetHooks().onCellPointerOver((cellPos) => { console.log(cellPos)});
     * ```
     */
    onCellPointerOver(callback: (cellPos: Nullable<IHoverCellPosition>) => void): IDisposable;
    /**
     * The onCellDragOver event is fired when an element or text selection is being dragged into a cell's hit test boundaries.
     * @deprecated use `univerAPI.addEvent(univerAPI.Event.DragOver, (params) => {})` instead
     * @param {function (Nullable<IDragCellPosition>): void} callback Callback function that will be called when the event is fired
     * @returns {IDisposable} A disposable object that can be used to unsubscribe from the event
     * @example
     * ```ts
     * univerAPI.getSheetHooks().onCellDragOver((cellPos) => { console.log(cellPos)});
     * ```
     */
    onCellDragOver(callback: (cellPos: Nullable<IDragCellPosition>) => void): IDisposable;
    /**
     * The onCellDrop event is fired when an element or text selection is being dropped on the cell.
     * @deprecated use `univerAPI.addEvent(univerAPI.Event.Drop, (params) => {})` instead
     * @param {function(Nullable<IDragCellPosition>): void} callback Callback function that will be called when the event is fired
     * @returns {IDisposable} A disposable object that can be used to unsubscribe from the event
     * @example
     * ```ts
     * univerAPI.getSheetHooks().onCellDrop((cellPos) => { console.log(cellPos)});
     * ```
     */
    onCellDrop(callback: (cellPos: Nullable<IDragCellPosition>) => void): IDisposable;
    /**
     * The onCellRender event is fired when a cell is rendered.
     * @param {Nullable<ICellCustomRender[]>} customRender Custom render function
     * @param {InterceptorEffectEnum} [effect] The effect of the interceptor
     * @param {number} priority The priority of the interceptor
     * @returns {IDisposable} A disposable object that can be used to unsubscribe from the event
     * @example
     * ```ts
        univerAPI.getSheetHooks().onCellRender([{
            drawWith: (ctx, info) => {
                const { row, col } = info;
                // Update to any cell location you want
                if (row === 1 && col === 2) {
                    const { primaryWithCoord } = info;
                    const { startX, startY } = primaryWithCoord;
                    ctx.fillText('Univer', startX, startY + 10);
                }
            },
        }])
     * ```
     */
    onCellRender(customRender: Nullable<ICellCustomRender[]>, effect?: InterceptorEffectEnum, priority?: number): IDisposable;
    /**
     * The onBeforeCellEdit event is fired before a cell is edited.
     * @deprecated use `univerAPI.addEvent(univerAPI.Event.BeforeSheetEditStart, (params) => {})` instead
     * @param callback Callback function that will be called when the event is fired
     * @returns A disposable object that can be used to unsubscribe from the event
     * @example
     * ```ts
     * univerAPI.getSheetHooks().onBeforeCellEdit((params) => {console.log(params)})
     * ```
     */
    onBeforeCellEdit(callback: (params: IEditorBridgeServiceVisibleParam) => void): IDisposable;
    /**
     * The onAfterCellEdit event is fired after a cell is edited.
     * @deprecated use `univerAPI.addEvent(univerAPI.Event.SheetEditEnded, (params) => {})` instead
     * @param callback Callback function that will be called when the event is fired
     * @returns A disposable object that can be used to unsubscribe from the event
     * @example
     * ```ts
     * univerAPI.getSheetHooks().onAfterCellEdit((params) => {console.log(params)})
     * ```
     */
    onAfterCellEdit(callback: (params: IEditorBridgeServiceVisibleParam) => void): IDisposable;
}
export declare class FSheetHooksUIMixin extends FSheetHooks implements IFSheetHooksUIMixin {
    onCellPointerMove(callback: (cellPos: Nullable<IHoverCellPosition>) => void): IDisposable;
    onCellPointerOver(callback: (cellPos: Nullable<IHoverCellPosition>) => void): IDisposable;
    onCellDragOver(callback: (cellPos: Nullable<IDragCellPosition>) => void): IDisposable;
    onCellDrop(callback: (cellPos: Nullable<IDragCellPosition>) => void): IDisposable;
    onCellRender(customRender: Nullable<ICellCustomRender[]>, effect?: InterceptorEffectEnum, priority?: number): IDisposable;
    onBeforeCellEdit(callback: (params: IEditorBridgeServiceVisibleParam) => void): IDisposable;
    onAfterCellEdit(callback: (params: IEditorBridgeServiceVisibleParam) => void): IDisposable;
}
declare module '@univerjs/sheets/facade' {
    interface FSheetHooks extends IFSheetHooksUIMixin {
    }
}
