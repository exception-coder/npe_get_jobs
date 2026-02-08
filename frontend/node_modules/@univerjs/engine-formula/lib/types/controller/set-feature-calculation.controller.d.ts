import { Disposable, ICommandService } from '@univerjs/core';
import { IFeatureCalculationManagerService } from '../services/feature-calculation-manager.service';
export declare class SetFeatureCalculationController extends Disposable {
    private readonly _commandService;
    private readonly _featureCalculationManagerService;
    constructor(_commandService: ICommandService, _featureCalculationManagerService: IFeatureCalculationManagerService);
    private _initialize;
    private _commandExecutedListener;
}
