import { Disposable, ICommandService } from '@univerjs/core';
import { IDependencyManagerService } from '../services/dependency-manager.service';
import { IFeatureCalculationManagerService } from '../services/feature-calculation-manager.service';
export declare class SetDependencyController extends Disposable {
    private readonly _commandService;
    private readonly _dependencyManagerService;
    private readonly _featureCalculationManagerService;
    constructor(_commandService: ICommandService, _dependencyManagerService: IDependencyManagerService, _featureCalculationManagerService: IFeatureCalculationManagerService);
    private _initialize;
    private _featureCalculationManagerServiceListener;
    private _commandExecutedListener;
    private _handleSetDefinedName;
}
