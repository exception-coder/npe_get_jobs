import { Nullable, Disposable } from '@univerjs/core';
import { ISheetLocationBase } from '@univerjs/sheets';
import { CellPopupManagerService } from '@univerjs/sheets-ui';
import { IZenZoneService } from '@univerjs/ui';
interface INotePopup extends ISheetLocationBase {
    noteId?: string;
    temp?: boolean;
    trigger?: string;
}
export declare class SheetsNotePopupService extends Disposable {
    private readonly _zenZoneService;
    private readonly _cellPopupManagerService;
    private _lastPopup;
    private _activePopup;
    private _activePopup$;
    activePopup$: import('rxjs').Observable<Nullable<INotePopup>>;
    get activePopup(): Nullable<INotePopup>;
    constructor(_zenZoneService: IZenZoneService, _cellPopupManagerService: CellPopupManagerService);
    private _initZenVisible;
    dispose(): void;
    showPopup(location: INotePopup, onHide?: () => void): void;
    hidePopup(force?: boolean): void;
    persistPopup(): void;
}
export {};
