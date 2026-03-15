import { Disposable, ICommandService } from '@univerjs/core';
import { SparklineDataSourceModel } from '../models/sparkline-data-source.model';
export declare class SparklineHideRowColController extends Disposable {
    private _commandService;
    private _sparklineDataSourceModel;
    constructor(_commandService: ICommandService, _sparklineDataSourceModel: SparklineDataSourceModel);
    private _initHideRowColWithSparkline;
}
