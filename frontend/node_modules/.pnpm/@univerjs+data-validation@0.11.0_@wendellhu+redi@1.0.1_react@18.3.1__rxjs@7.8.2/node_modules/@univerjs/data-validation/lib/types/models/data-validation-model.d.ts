import { IDataValidationRule, Disposable, ILogService } from '@univerjs/core';
import { IUpdateRulePayload } from '../types/interfaces/i-update-rule-payload';
export type DataValidationChangeType = 'update' | 'add' | 'remove';
export type DataValidationChangeSource = 'command' | 'patched';
export interface IRuleChange {
    rule: IDataValidationRule;
    type: DataValidationChangeType;
    unitId: string;
    subUnitId: string;
    source: DataValidationChangeSource;
    updatePayload?: IUpdateRulePayload;
    oldRule?: IDataValidationRule;
}
export declare class DataValidationModel extends Disposable {
    private readonly _logService;
    private readonly _model;
    private readonly _ruleChange$;
    ruleChange$: import('rxjs').Observable<IRuleChange>;
    ruleChangeDebounce$: import('rxjs').Observable<IRuleChange>;
    constructor(_logService: ILogService);
    private _ensureMap;
    private _addSubUnitRule;
    private _removeSubUnitRule;
    private _updateSubUnitRule;
    private _addRuleSideEffect;
    addRule(unitId: string, subUnitId: string, rule: IDataValidationRule | IDataValidationRule[], source: DataValidationChangeSource, index?: number): void;
    updateRule(unitId: string, subUnitId: string, ruleId: string, payload: IUpdateRulePayload, source: DataValidationChangeSource): void;
    removeRule(unitId: string, subUnitId: string, ruleId: string, source: DataValidationChangeSource): void;
    getRuleById(unitId: string, subUnitId: string, ruleId: string): IDataValidationRule | undefined;
    getRuleIndex(unitId: string, subUnitId: string, ruleId: string): number;
    getRules(unitId: string, subUnitId: string): IDataValidationRule[];
    getUnitRules(unitId: string): [string, IDataValidationRule[]][];
    deleteUnitRules(unitId: string): void;
    getSubUnitIds(unitId: string): string[];
    getAll(): (readonly [string, [string, IDataValidationRule[]][]])[];
}
