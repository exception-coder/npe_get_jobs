import { SparklineDataSourceModel } from '@univerjs-pro/sheets-sparkline';
import { Disposable, ICommandService, IUniverInstanceService, LocaleService } from '@univerjs/core';
import { SheetPermissionCheckController, SheetsSelectionsService } from '@univerjs/sheets';
export declare class SheetSparklinePermissionController extends Disposable {
    private _commandService;
    private _localeService;
    private _sheetPermissionCheckController;
    private _sheetsSelectionsService;
    private _univerInstanceService;
    private _sparklineDataSourceModel;
    constructor(_commandService: ICommandService, _localeService: LocaleService, _sheetPermissionCheckController: SheetPermissionCheckController, _sheetsSelectionsService: SheetsSelectionsService, _univerInstanceService: IUniverInstanceService, _sparklineDataSourceModel: SparklineDataSourceModel);
    private _initPermissionWithSparkline;
}
