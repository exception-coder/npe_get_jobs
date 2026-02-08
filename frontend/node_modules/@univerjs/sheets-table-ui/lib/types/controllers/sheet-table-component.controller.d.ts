import { Nullable, Disposable, IContextService } from '@univerjs/core';
import { SheetCanvasPopManagerService } from '@univerjs/sheets-ui';
import { ComponentManager, IDialogService } from '@univerjs/ui';
interface ITableFilterPanelInfo {
    unitId: string;
    subUnitId: string;
    tableId: string;
    column: number;
    row: number;
}
export declare class SheetsTableComponentController extends Disposable {
    private readonly _componentManager;
    private readonly _contextService;
    private _sheetCanvasPopupService;
    private readonly _dialogService;
    private _popupDisposable?;
    private _currentTableFilterInfo;
    constructor(_componentManager: ComponentManager, _contextService: IContextService, _sheetCanvasPopupService: SheetCanvasPopManagerService, _dialogService: IDialogService);
    setCurrentTableFilterInfo(info: ITableFilterPanelInfo): void;
    clearCurrentTableFilterInfo(): void;
    getCurrentTableFilterInfo(): Nullable<ITableFilterPanelInfo>;
    private _initComponents;
    private _initUIPopup;
    closeFilterPanel(): void;
    private _openFilterPopup;
    private _closeFilterPopup;
}
export {};
