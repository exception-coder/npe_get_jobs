import { IRange, Nullable, Disposable, ICommandService, LifecycleService } from '@univerjs/core';
import { IOtherFormulaResult } from './formula-common';
import { IActiveDirtyManagerService } from '@univerjs/engine-formula';
import { BehaviorSubject } from 'rxjs';
export declare class RegisterOtherFormulaService extends Disposable {
    private readonly _commandService;
    private _activeDirtyManagerService;
    private readonly _lifecycleService;
    private _formulaCacheMap;
    private _formulaChangeWithRange$;
    formulaChangeWithRange$: import('rxjs').Observable<{
        unitId: string;
        subUnitId: string;
        formulaText: string;
        formulaId: string;
        ranges: IRange[];
    }>;
    private _formulaResult$;
    formulaResult$: import('rxjs').Observable<Record<string, Record<string, IOtherFormulaResult[]>>>;
    calculateStarted$: BehaviorSubject<boolean>;
    constructor(_commandService: ICommandService, _activeDirtyManagerService: IActiveDirtyManagerService, _lifecycleService: LifecycleService);
    dispose(): void;
    private _ensureCacheMap;
    private _createFormulaId;
    private _initFormulaRegister;
    private _initFormulaCalculationResultChange;
    registerFormulaWithRange(unitId: string, subUnitId: string, formulaText: string, ranges?: IRange[], extra?: Record<string, any>): string;
    deleteFormula(unitId: string, subUnitId: string, formulaIdList: string[]): void;
    getFormulaValue(unitId: string, subUnitId: string, formulaId: string): Promise<Nullable<IOtherFormulaResult>>;
    getFormulaValueSync(unitId: string, subUnitId: string, formulaId: string): Nullable<IOtherFormulaResult>;
    markFormulaDirty(unitId: string, subUnitId: string, formulaId: string): void;
}
