import { Disposable, IResourceManagerService, IUniverInstanceService } from '@univerjs/core';
import { DataValidationModel } from '../models/data-validation-model';
export declare class DataValidationResourceController extends Disposable {
    private readonly _resourceManagerService;
    private readonly _univerInstanceService;
    private readonly _dataValidationModel;
    constructor(_resourceManagerService: IResourceManagerService, _univerInstanceService: IUniverInstanceService, _dataValidationModel: DataValidationModel);
    private _initSnapshot;
}
