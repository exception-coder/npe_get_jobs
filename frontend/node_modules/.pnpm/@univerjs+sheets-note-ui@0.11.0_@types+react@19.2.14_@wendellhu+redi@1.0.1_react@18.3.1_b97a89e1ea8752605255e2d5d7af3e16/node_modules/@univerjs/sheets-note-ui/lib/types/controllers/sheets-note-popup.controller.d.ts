import { Disposable } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { SheetsSelectionsService } from '@univerjs/sheets';
import { SheetsNoteModel } from '@univerjs/sheets-note';
import { HoverManagerService, IEditorBridgeService } from '@univerjs/sheets-ui';
import { SheetsNotePopupService } from '../services/sheets-note-popup.service';
export declare class SheetsNotePopupController extends Disposable {
    private readonly _sheetsNotePopupService;
    private readonly _sheetsNoteModel;
    private readonly _sheetSelectionService;
    private readonly _editorBridgeService;
    private readonly _renderManagerService;
    private readonly _hoverManagerService;
    private _isSwitchingSheet;
    constructor(_sheetsNotePopupService: SheetsNotePopupService, _sheetsNoteModel: SheetsNoteModel, _sheetSelectionService: SheetsSelectionsService, _editorBridgeService: IEditorBridgeService, _renderManagerService: IRenderManagerService, _hoverManagerService: HoverManagerService);
    private _handleSelectionChange;
    private _initSelectionUpdateListener;
    private _initEditorBridge;
    private _initHoverEvent;
}
