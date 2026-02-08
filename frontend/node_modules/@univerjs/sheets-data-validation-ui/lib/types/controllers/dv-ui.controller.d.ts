import { Injector, RxDisposable } from '@univerjs/core';
import { DataValidatorRegistryService } from '@univerjs/data-validation';
import { ComponentManager } from '@univerjs/ui';
export declare class SheetsDataValidationUIController extends RxDisposable {
    private readonly _injector;
    private readonly _componentManger;
    private readonly _dataValidatorRegistryService;
    constructor(_injector: Injector, _componentManger: ComponentManager, _dataValidatorRegistryService: DataValidatorRegistryService);
    private _initComponents;
    private _registerValidatorViews;
}
