import { Nullable, Disposable, ICommandService, IConfigService, Injector, IUniverInstanceService } from '@univerjs/core';
import { ISheetLocation, SheetsSelectionsService } from '@univerjs/sheets';
import { DataValidatorRegistryService } from '@univerjs/data-validation';
import { SheetDataValidationModel } from '@univerjs/sheets-data-validation';
import { IEditorBridgeService, ISheetCellDropdownManagerService } from '@univerjs/sheets-ui';
import { IZenZoneService } from '@univerjs/ui';
export interface IDataValidationDropdownParam {
    location: ISheetLocation;
    onHide?: () => void;
    trigger?: 'editor-bridge';
    closeOnOutSide?: boolean;
}
export interface IDropdownComponentProps {
    componentKey: string;
    location: ISheetLocation;
    hideFn: () => void;
}
export declare class DataValidationDropdownManagerService extends Disposable {
    private readonly _univerInstanceService;
    private readonly _dataValidatorRegistryService;
    private readonly _zenZoneService;
    private readonly _dataValidationModel;
    private readonly _sheetsSelectionsService;
    private readonly _cellDropdownManagerService;
    private readonly _sheetDataValidationModel;
    private readonly _commandService;
    private readonly _editorBridgeService;
    private readonly _injector;
    private readonly _configService;
    private _activeDropdown;
    private _activeDropdown$;
    private _currentPopup;
    activeDropdown$: import('rxjs').Observable<Nullable<IDataValidationDropdownParam>>;
    private _zenVisible;
    get activeDropdown(): Nullable<IDataValidationDropdownParam>;
    constructor(_univerInstanceService: IUniverInstanceService, _dataValidatorRegistryService: DataValidatorRegistryService, _zenZoneService: IZenZoneService, _dataValidationModel: SheetDataValidationModel, _sheetsSelectionsService: SheetsSelectionsService, _cellDropdownManagerService: ISheetCellDropdownManagerService, _sheetDataValidationModel: SheetDataValidationModel, _commandService: ICommandService, _editorBridgeService: IEditorBridgeService, _injector: Injector, _configService: IConfigService);
    private _init;
    private _getDropdownByCell;
    private _initSelectionChange;
    showDropdown(param: IDataValidationDropdownParam): void;
    hideDropdown(): void;
    showDataValidationDropdown(unitId: string, subUnitId: string, row: number, col: number, onHide?: () => void): void;
}
