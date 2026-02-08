import { SparklineDataSourceModel } from '@univerjs-pro/sheets-sparkline';
import { Disposable } from '@univerjs/core';
import { SheetPrintInterceptorService } from '@univerjs/sheets-ui';
export declare class SheetSparklinePrintingController extends Disposable {
    private _sheetPrintInterceptorService;
    private _sparklineDataSourceModel;
    constructor(_sheetPrintInterceptorService: SheetPrintInterceptorService, _sparklineDataSourceModel: SparklineDataSourceModel);
    private _init;
}
