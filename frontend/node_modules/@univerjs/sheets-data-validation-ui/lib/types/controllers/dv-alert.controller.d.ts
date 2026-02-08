import { Disposable, IUniverInstanceService, LocaleService } from '@univerjs/core';
import { SheetDataValidationModel } from '@univerjs/sheets-data-validation';
import { CellAlertManagerService, HoverManagerService } from '@univerjs/sheets-ui';
import { IZenZoneService } from '@univerjs/ui';
export declare class DataValidationAlertController extends Disposable {
    private readonly _hoverManagerService;
    private readonly _cellAlertManagerService;
    private readonly _univerInstanceService;
    private readonly _localeService;
    private readonly _zenZoneService;
    private readonly _dataValidationModel;
    constructor(_hoverManagerService: HoverManagerService, _cellAlertManagerService: CellAlertManagerService, _univerInstanceService: IUniverInstanceService, _localeService: LocaleService, _zenZoneService: IZenZoneService, _dataValidationModel: SheetDataValidationModel);
    private _init;
    private _initCellAlertPopup;
    private _initZenService;
}
