import { Disposable, IUniverInstanceService } from '@univerjs/core';
import { SheetsNoteModel } from '@univerjs/sheets-note';
import { CellPopupManagerService } from '@univerjs/sheets-ui';
import { SheetsNotePopupService } from '../services/sheets-note-popup.service';
export declare class SheetsNoteAttachmentController extends Disposable {
    private readonly _sheetsNoteModel;
    private readonly _univerInstanceService;
    private readonly _cellPopupManagerService;
    private readonly _sheetsNotePopupService;
    private _noteMatrix;
    constructor(_sheetsNoteModel: SheetsNoteModel, _univerInstanceService: IUniverInstanceService, _cellPopupManagerService: CellPopupManagerService, _sheetsNotePopupService: SheetsNotePopupService);
    private _showPopup;
    dispose(): void;
    private _initSheet;
    private _initNoteChangeListener;
}
