import { Injector, IUniverInstanceService, RxDisposable } from '@univerjs/core';
import { DataValidatorRegistryService } from '@univerjs/data-validation';
import { SheetInterceptorService, SheetsSelectionsService } from '@univerjs/sheets';
import { SheetDataValidationModel } from '../models/sheet-data-validation-model';
export declare class DataValidationController extends RxDisposable {
    private readonly _univerInstanceService;
    private readonly _dataValidatorRegistryService;
    private readonly _injector;
    private _selectionManagerService;
    private readonly _sheetInterceptorService;
    private readonly _sheetDataValidationModel;
    constructor(_univerInstanceService: IUniverInstanceService, _dataValidatorRegistryService: DataValidatorRegistryService, _injector: Injector, _selectionManagerService: SheetsSelectionsService, _sheetInterceptorService: SheetInterceptorService, _sheetDataValidationModel: SheetDataValidationModel);
    private _init;
    private _registerValidators;
    private _initCommandInterceptor;
}
