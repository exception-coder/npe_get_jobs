import { IDisposable, Disposable } from '@univerjs/core';
import { ISheetLocationBase } from '@univerjs/sheets';
import { IRenderManagerService } from '@univerjs/engine-render';
import { CellPopupManagerService } from './cell-popup-manager.service';
export declare enum CellAlertType {
    INFO = 0,
    WARNING = 1,
    ERROR = 2
}
export interface ICellAlert {
    type: CellAlertType;
    title: React.ReactNode;
    message: React.ReactNode;
    location: ISheetLocationBase;
    width: number;
    height: number;
    key: string;
}
export declare class CellAlertManagerService extends Disposable {
    private readonly _renderManagerService;
    private readonly _cellPopupManagerService;
    private _currentAlert$;
    private _currentAlert;
    get currentAlert(): Map<string, {
        alert: ICellAlert;
        dispose: IDisposable;
    }>;
    currentAlert$: import('rxjs').Observable<[string, {
        alert: ICellAlert;
        dispose: IDisposable;
    }][]>;
    constructor(_renderManagerService: IRenderManagerService, _cellPopupManagerService: CellPopupManagerService);
    showAlert(alert: ICellAlert): void;
    removeAlert(key: string): void;
    clearAlert(): void;
}
