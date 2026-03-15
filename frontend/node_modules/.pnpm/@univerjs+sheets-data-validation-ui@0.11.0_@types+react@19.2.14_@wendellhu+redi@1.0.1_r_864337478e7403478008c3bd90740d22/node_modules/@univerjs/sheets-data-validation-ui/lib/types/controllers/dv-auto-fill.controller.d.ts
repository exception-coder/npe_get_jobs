import { Disposable, Injector } from '@univerjs/core';
import { SheetDataValidationModel } from '@univerjs/sheets-data-validation';
import { IAutoFillService } from '@univerjs/sheets-ui';
export declare class DataValidationAutoFillController extends Disposable {
    private readonly _autoFillService;
    private readonly _sheetDataValidationModel;
    private readonly _injector;
    constructor(_autoFillService: IAutoFillService, _sheetDataValidationModel: SheetDataValidationModel, _injector: Injector);
    private _initAutoFill;
}
