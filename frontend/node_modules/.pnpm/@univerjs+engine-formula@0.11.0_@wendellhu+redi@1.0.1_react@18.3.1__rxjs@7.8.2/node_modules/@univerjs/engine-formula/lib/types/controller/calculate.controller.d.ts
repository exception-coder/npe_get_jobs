import { Disposable, ICommandService } from '@univerjs/core';
import { FormulaDataModel } from '../models/formula-data.model';
import { ICalculateFormulaService } from '../services/calculate-formula.service';
export declare class CalculateController extends Disposable {
    private readonly _commandService;
    private readonly _calculateFormulaService;
    private readonly _formulaDataModel;
    constructor(_commandService: ICommandService, _calculateFormulaService: ICalculateFormulaService, _formulaDataModel: FormulaDataModel);
    private _initialize;
    private _commandExecutedListener;
    private _calculate;
    private _initialExecuteFormulaListener;
    private _applyResult;
}
