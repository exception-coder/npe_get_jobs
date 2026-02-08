import { Disposable, IResourceManagerService } from '@univerjs/core';
import { SparklineDataSourceModel } from '../models/sparkline-data-source.model';
export declare class SparklineService extends Disposable {
    private _resourceManagerService;
    private _sparklineDataSourceModel;
    constructor(_resourceManagerService: IResourceManagerService, _sparklineDataSourceModel: SparklineDataSourceModel);
    private _initSnapshot;
}
