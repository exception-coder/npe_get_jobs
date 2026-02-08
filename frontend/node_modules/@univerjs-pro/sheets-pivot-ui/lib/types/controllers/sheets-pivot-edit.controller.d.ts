import { SheetsPivotTableAdaptorModel, SheetsPivotTableConfigModel } from '@univerjs-pro/sheets-pivot';
import { Disposable, ICommandService, IUniverInstanceService, LocaleService } from '@univerjs/core';
import { SheetsSelectionsService } from '@univerjs/sheets';
export declare class SheetsPivotTableEditController extends Disposable {
    private readonly _sheetsSelectionsService;
    private readonly _univerInstanceService;
    private readonly _sheetsPivotTableAdaptorModel;
    private readonly _commandService;
    private _sheetsPivotTableConfigModel;
    private readonly _localeService;
    constructor(_sheetsSelectionsService: SheetsSelectionsService, _univerInstanceService: IUniverInstanceService, _sheetsPivotTableAdaptorModel: SheetsPivotTableAdaptorModel, _commandService: ICommandService, _sheetsPivotTableConfigModel: SheetsPivotTableConfigModel, _localeService: LocaleService);
    private _initEditListener;
}
