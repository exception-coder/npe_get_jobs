import { Disposable } from '@univerjs/core';
import { SheetInterceptorService } from '@univerjs/sheets';
import { SheetsPivotTableConfigModel } from '../models/sheets-pivot-config-model';
export declare class SheetsPivotRemoveSheetController extends Disposable {
    private readonly _sheetInterceptorService;
    private readonly _sheetsPivotTableConfigModel;
    constructor(_sheetInterceptorService: SheetInterceptorService, _sheetsPivotTableConfigModel: SheetsPivotTableConfigModel);
    private _initRemoveSheetCommandInterceptor;
}
