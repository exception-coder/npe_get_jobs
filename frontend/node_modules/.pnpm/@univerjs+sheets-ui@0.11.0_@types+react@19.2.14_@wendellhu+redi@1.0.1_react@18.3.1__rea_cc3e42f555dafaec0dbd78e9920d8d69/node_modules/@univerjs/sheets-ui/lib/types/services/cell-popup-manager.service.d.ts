import { IDisposable, Disposable } from '@univerjs/core';
import { ISheetLocationBase } from '@univerjs/sheets';
import { ICanvasPopup, SheetCanvasPopManagerService } from './canvas-pop-manager.service';
export interface ICellPopup extends Omit<ICanvasPopup, 'direction' | 'offset' | 'mask'> {
    direction?: 'horizontal' | 'vertical';
    id?: string;
    priority: number;
}
export interface ICellPopupDirectionCache {
    popups: ICellPopup[];
    disposable?: IDisposable;
}
export interface ICellPopupCache {
    horizontal?: ICellPopupDirectionCache;
    vertical?: ICellPopupDirectionCache;
}
export interface ICellPopupChange extends ISheetLocationBase {
    direction: 'horizontal' | 'vertical';
}
export declare class CellPopupManagerService extends Disposable {
    private readonly _sheetCanvasPopManagerService;
    private readonly _cellPopupMap;
    private readonly _change$;
    readonly change$: import('rxjs').Observable<ICellPopupChange>;
    constructor(_sheetCanvasPopManagerService: SheetCanvasPopManagerService);
    private _ensureCellPopupMap;
    showPopup(location: ISheetLocationBase, popup: ICellPopup): IDisposable;
    getPopups(unitId: string, subUnitId: string, row: number, col: number, direction: 'horizontal' | 'vertical'): ICellPopup[];
}
