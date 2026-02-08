import { Disposable, ICommandService } from '@univerjs/core';
import { IExclusiveRangeService } from '@univerjs/sheets';
import { SparklineDataSourceModel } from '../models/sparkline-data-source.model';
export declare class SparklineDataChangeController extends Disposable {
    private readonly _commandService;
    private readonly _sparklineDataSourceModel;
    private readonly _exclusiveRangeService;
    constructor(_commandService: ICommandService, _sparklineDataSourceModel: SparklineDataSourceModel, _exclusiveRangeService: IExclusiveRangeService);
    private _initDataChangeListener;
    private _initExclusiveRangeChange;
}
