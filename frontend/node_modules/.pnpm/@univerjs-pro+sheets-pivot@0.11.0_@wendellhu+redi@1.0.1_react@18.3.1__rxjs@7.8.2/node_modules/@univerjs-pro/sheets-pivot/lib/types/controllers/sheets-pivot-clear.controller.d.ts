import { Disposable, DisposableCollection, IUniverInstanceService } from '@univerjs/core';
import { SheetInterceptorService, SheetsSelectionsService } from '@univerjs/sheets';
import { SheetsPivotTableConfigModel } from '../models/sheets-pivot-config-model';
export declare class SheetsPivotClearController extends Disposable {
    private readonly _univerInstanceService;
    private readonly _sheetInterceptorService;
    private readonly _sheetsSelectionsService;
    private readonly _sheetsPivotTableConfigModel;
    disposableCollection: DisposableCollection;
    constructor(_univerInstanceService: IUniverInstanceService, _sheetInterceptorService: SheetInterceptorService, _sheetsSelectionsService: SheetsSelectionsService, _sheetsPivotTableConfigModel: SheetsPivotTableConfigModel);
    private _initClearSelectionCommandInterceptor;
}
