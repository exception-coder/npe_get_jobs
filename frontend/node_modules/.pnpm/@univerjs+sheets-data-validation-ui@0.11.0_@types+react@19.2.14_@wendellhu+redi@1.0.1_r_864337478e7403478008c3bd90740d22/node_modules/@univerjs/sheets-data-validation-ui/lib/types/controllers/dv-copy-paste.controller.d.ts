import { Disposable, Injector } from '@univerjs/core';
import { SheetDataValidationModel } from '@univerjs/sheets-data-validation';
import { ISheetClipboardService } from '@univerjs/sheets-ui';
export declare class DataValidationCopyPasteController extends Disposable {
    private _sheetClipboardService;
    private _sheetDataValidationModel;
    private _injector;
    private _copyInfo;
    constructor(_sheetClipboardService: ISheetClipboardService, _sheetDataValidationModel: SheetDataValidationModel, _injector: Injector);
    private _initCopyPaste;
    private _collect;
    private _generateMutations;
}
