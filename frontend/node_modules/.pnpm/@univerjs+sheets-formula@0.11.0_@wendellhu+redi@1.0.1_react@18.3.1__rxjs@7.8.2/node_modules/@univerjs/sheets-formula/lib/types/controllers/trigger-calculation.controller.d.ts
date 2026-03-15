import { Disposable, ICommandService, IConfigService, ILogService, LocaleService } from '@univerjs/core';
import { FormulaDataModel, IActiveDirtyManagerService } from '@univerjs/engine-formula';
import { RegisterOtherFormulaService } from '../services/register-other-formula.service';
/**
 * This interface is for the progress bar to display the calculation progress.
 */
export interface ICalculationProgress {
    /** Task that already completed. */
    done: number;
    /** The total number of formulas need to calculate. */
    count: number;
    /** The label of the calculation progress. */
    label?: string;
}
export declare class TriggerCalculationController extends Disposable {
    private readonly _commandService;
    private readonly _activeDirtyManagerService;
    private readonly _logService;
    private readonly _configService;
    private readonly _formulaDataModel;
    private readonly _localeService;
    private readonly _registerOtherFormulaService;
    private _waitingCommandQueue;
    private _executingDirtyData;
    private _setTimeoutKey;
    private _startExecutionTime;
    private _totalCalculationTaskCount;
    private _doneCalculationTaskCount;
    private _executionInProgressParams;
    private _restartCalculation;
    /**
     * The mark of forced calculation. If a new mutation triggers dirty area calculation during the forced calculation process, forced calculation is still required.
     */
    private _forceCalculating;
    private readonly _progress$;
    readonly progress$: import('rxjs').Observable<ICalculationProgress>;
    private _emitProgress;
    private _startProgress;
    private _calculateProgress;
    private _completeProgress;
    clearProgress(): void;
    constructor(_commandService: ICommandService, _activeDirtyManagerService: IActiveDirtyManagerService, _logService: ILogService, _configService: IConfigService, _formulaDataModel: FormulaDataModel, _localeService: LocaleService, _registerOtherFormulaService: RegisterOtherFormulaService);
    dispose(): void;
    private _getCalculationMode;
    private _commandExecutedListener;
    private _generateDirty;
    private _mergeDirty;
    /**
     * dirtyRanges may overlap with the ranges in allDirtyRanges and need to be deduplicated
     * @param allDirtyRanges
     * @param dirtyRanges
     */
    private _mergeDirtyRanges;
    private _mergeDirtyNameMap;
    private _mergeDirtyUnitFeatureOrOtherFormulaMap;
    private _initialExecuteFormulaProcessListener;
    private _resetExecutingDirtyData;
    private _initialExecuteFormula;
    private _getDirtyDataByCalculationMode;
}
