import { SheetsPivotTableAdaptorModel, SheetsPivotTableConfigModel } from '@univerjs-pro/sheets-pivot';
import { Disposable } from '@univerjs/core';
import { SheetPrintInterceptorService } from '@univerjs/sheets-ui';
export declare class SheetsPivotPrintController extends Disposable {
    private readonly _sheetPrintInterceptorService;
    private readonly _sheetsPivotTableAdaptorModel;
    private readonly _sheetsPivotTableConfigModel;
    constructor(_sheetPrintInterceptorService: SheetPrintInterceptorService, _sheetsPivotTableAdaptorModel: SheetsPivotTableAdaptorModel, _sheetsPivotTableConfigModel: SheetsPivotTableConfigModel);
    private _initPrintArea;
}
