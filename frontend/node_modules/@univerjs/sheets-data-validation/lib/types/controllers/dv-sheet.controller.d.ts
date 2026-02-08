import { Disposable, IUniverInstanceService } from '@univerjs/core';
import { SheetInterceptorService } from '@univerjs/sheets';
import { SheetDataValidationModel } from '../models/sheet-data-validation-model';
export declare class SheetDataValidationSheetController extends Disposable {
    private _sheetInterceptorService;
    private _univerInstanceService;
    private readonly _sheetDataValidationModel;
    constructor(_sheetInterceptorService: SheetInterceptorService, _univerInstanceService: IUniverInstanceService, _sheetDataValidationModel: SheetDataValidationModel);
    private _initSheetChange;
}
