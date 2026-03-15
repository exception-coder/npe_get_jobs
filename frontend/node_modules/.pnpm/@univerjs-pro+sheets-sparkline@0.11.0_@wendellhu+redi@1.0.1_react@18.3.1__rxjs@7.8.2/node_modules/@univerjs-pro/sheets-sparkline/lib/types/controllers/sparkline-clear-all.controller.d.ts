import { Disposable, IUniverInstanceService } from '@univerjs/core';
import { SheetInterceptorService, SheetsSelectionsService } from '@univerjs/sheets';
import { SparklineDataSourceModel } from '../models/sparkline-data-source.model';
export declare class SparklineClearAllController extends Disposable {
    private _sparklineDataSourceModel;
    private _sheetInterceptorService;
    private _univerInstanceService;
    private _sheetSelectionService;
    constructor(_sparklineDataSourceModel: SparklineDataSourceModel, _sheetInterceptorService: SheetInterceptorService, _univerInstanceService: IUniverInstanceService, _sheetSelectionService: SheetsSelectionsService);
    private _initClearWithSparkline;
}
