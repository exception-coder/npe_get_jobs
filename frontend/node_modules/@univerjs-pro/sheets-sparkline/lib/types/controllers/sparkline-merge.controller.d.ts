import { Disposable, ICommandService } from '@univerjs/core';
import { SheetInterceptorService } from '@univerjs/sheets';
import { SparklineDataSourceModel } from '../models/sparkline-data-source.model';
export declare class SparklineMergeController extends Disposable {
    private readonly _commandService;
    private readonly _sheetInterceptorService;
    private readonly _sparklineDataSourceModel;
    constructor(_commandService: ICommandService, _sheetInterceptorService: SheetInterceptorService, _sparklineDataSourceModel: SparklineDataSourceModel);
    private _initMergeWithSparkline;
}
