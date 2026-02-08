import { Disposable, LocaleService } from '@univerjs/core';
import { DataValidatorRegistryService } from '@univerjs/data-validation';
import { SheetInterceptorService } from '@univerjs/sheets';
import { SheetDataValidationModel, SheetsDataValidationValidatorService } from '@univerjs/sheets-data-validation';
import { IDialogService } from '@univerjs/ui';
export declare class DataValidationRejectInputController extends Disposable {
    private readonly _sheetInterceptorService;
    private readonly _dataValidationModel;
    private readonly _dataValidatorRegistryService;
    private readonly _dialogService;
    private readonly _localeService;
    private readonly _sheetsDataValidationValidatorService;
    constructor(_sheetInterceptorService: SheetInterceptorService, _dataValidationModel: SheetDataValidationModel, _dataValidatorRegistryService: DataValidatorRegistryService, _dialogService: IDialogService, _localeService: LocaleService, _sheetsDataValidationValidatorService: SheetsDataValidationValidatorService);
    private _initEditorBridgeInterceptor;
    showReject(title: string): void;
}
