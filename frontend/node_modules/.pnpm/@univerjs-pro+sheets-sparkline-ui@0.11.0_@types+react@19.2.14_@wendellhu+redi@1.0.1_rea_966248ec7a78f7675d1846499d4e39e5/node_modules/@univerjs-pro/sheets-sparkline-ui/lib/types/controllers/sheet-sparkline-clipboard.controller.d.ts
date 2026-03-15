import { SparklineDataSourceModel } from '@univerjs-pro/sheets-sparkline';
import { Disposable } from '@univerjs/core';
import { ISheetClipboardService } from '@univerjs/sheets-ui';
export declare class SheetSparklineController extends Disposable {
    private _sheetClipboardService;
    private _sparklineDataSourceModel;
    constructor(_sheetClipboardService: ISheetClipboardService, _sparklineDataSourceModel: SparklineDataSourceModel);
    private _initClipboardWithSparkline;
}
