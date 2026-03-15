import { ICommandService, IUniverInstanceService, RxDisposable } from '@univerjs/core';
import { DataValidatorRegistryService } from '@univerjs/data-validation';
import { IRenderManagerService } from '@univerjs/engine-render';
import { SheetInterceptorService } from '@univerjs/sheets';
import { DataValidationCacheService, SheetDataValidationModel } from '@univerjs/sheets-data-validation';
import { AutoHeightController, IEditorBridgeService } from '@univerjs/sheets-ui';
import { IMenuManagerService } from '@univerjs/ui';
import { DataValidationDropdownManagerService } from '../services/dropdown-manager.service';
export declare class SheetsDataValidationRenderController extends RxDisposable {
    private readonly _commandService;
    private readonly _menuManagerService;
    private readonly _renderManagerService;
    private readonly _univerInstanceService;
    private readonly _autoHeightController;
    private readonly _dropdownManagerService;
    private readonly _sheetDataValidationModel;
    private readonly _dataValidatorRegistryService;
    private readonly _sheetInterceptorService;
    private readonly _dataValidationCacheService;
    private readonly _editorBridgeService?;
    constructor(_commandService: ICommandService, _menuManagerService: IMenuManagerService, _renderManagerService: IRenderManagerService, _univerInstanceService: IUniverInstanceService, _autoHeightController: AutoHeightController, _dropdownManagerService: DataValidationDropdownManagerService, _sheetDataValidationModel: SheetDataValidationModel, _dataValidatorRegistryService: DataValidatorRegistryService, _sheetInterceptorService: SheetInterceptorService, _dataValidationCacheService: DataValidationCacheService, _editorBridgeService?: IEditorBridgeService | undefined);
    private _initMenu;
    private _initDropdown;
    private _initViewModelIntercept;
    private _initAutoHeight;
}
export declare class SheetsDataValidationMobileRenderController extends RxDisposable {
    private readonly _commandService;
    private readonly _renderManagerService;
    private readonly _autoHeightController;
    private readonly _dataValidatorRegistryService;
    private readonly _sheetInterceptorService;
    private readonly _sheetDataValidationModel;
    private readonly _dataValidationCacheService;
    constructor(_commandService: ICommandService, _renderManagerService: IRenderManagerService, _autoHeightController: AutoHeightController, _dataValidatorRegistryService: DataValidatorRegistryService, _sheetInterceptorService: SheetInterceptorService, _sheetDataValidationModel: SheetDataValidationModel, _dataValidationCacheService: DataValidationCacheService);
    private _initViewModelIntercept;
    private _initAutoHeight;
}
