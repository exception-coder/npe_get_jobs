import { Disposable, IResourceManagerService, IUniverInstanceService } from '@univerjs/core';
import { SheetInterceptorService } from '@univerjs/sheets';
import { SheetsNoteModel } from '../models/sheets-note.model';
export declare class SheetsNoteResourceController extends Disposable {
    private readonly _resourceManagerService;
    private readonly _univerInstanceService;
    private _sheetInterceptorService;
    private readonly _sheetsNoteModel;
    constructor(_resourceManagerService: IResourceManagerService, _univerInstanceService: IUniverInstanceService, _sheetInterceptorService: SheetInterceptorService, _sheetsNoteModel: SheetsNoteModel);
    private _initSnapshot;
    private _initSheetChange;
}
