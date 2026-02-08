import { Nullable, Disposable } from '@univerjs/core';
import { ISheetLocationBase } from '@univerjs/sheets';
import { CellPopupManagerService, SheetCanvasPopManagerService } from '@univerjs/sheets-ui';
import { IZenZoneService } from '@univerjs/ui';
export interface IThreadCommentPopup extends ISheetLocationBase {
    commentId?: string;
    temp?: boolean;
    trigger?: string;
}
export declare class SheetsThreadCommentPopupService extends Disposable {
    private readonly _canvasPopupManagerService;
    private readonly _zenZoneService;
    private readonly _cellPopupManagerService;
    private _lastPopup;
    private _activePopup;
    private _activePopup$;
    activePopup$: import('rxjs').Observable<Nullable<IThreadCommentPopup>>;
    get activePopup(): Nullable<IThreadCommentPopup>;
    constructor(_canvasPopupManagerService: SheetCanvasPopManagerService, _zenZoneService: IZenZoneService, _cellPopupManagerService: CellPopupManagerService);
    private _initZenVisible;
    dispose(): void;
    showPopup(location: IThreadCommentPopup, onHide?: () => void): void;
    hidePopup(): void;
    persistPopup(): void;
}
