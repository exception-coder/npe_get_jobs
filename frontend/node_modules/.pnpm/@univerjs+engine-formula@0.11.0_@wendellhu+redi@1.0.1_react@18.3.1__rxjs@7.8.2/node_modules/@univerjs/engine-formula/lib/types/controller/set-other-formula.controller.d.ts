import { Disposable, ICommandService } from '@univerjs/core';
import { IDependencyManagerService } from '../services/dependency-manager.service';
import { IOtherFormulaManagerService } from '../services/other-formula-manager.service';
export declare class SetOtherFormulaController extends Disposable {
    private readonly _commandService;
    private readonly _otherFormulaManagerService;
    private readonly _dependencyManagerService;
    constructor(_commandService: ICommandService, _otherFormulaManagerService: IOtherFormulaManagerService, _dependencyManagerService: IDependencyManagerService);
    private _initialize;
    private _commandExecutedListener;
}
