import { IObjectModel, IWorksheetProtectionRule } from '../type';
type IRuleChangeType = 'add' | 'set' | 'delete';
export declare class WorksheetProtectionRuleModel {
    /**
     *
     * Map<unitId, Map<subUnitId, Map<subUnitId, IWorksheetProtectionRule>>>
     */
    private _model;
    private _ruleChange;
    private _ruleRefresh;
    private _resetOrder;
    ruleChange$: import('rxjs').Observable<{
        unitId: string;
        subUnitId: string;
        rule: IWorksheetProtectionRule;
        oldRule?: IWorksheetProtectionRule;
        type: IRuleChangeType;
    }>;
    ruleRefresh$: import('rxjs').Observable<string>;
    resetOrder$: import('rxjs').Observable<unknown>;
    private _worksheetRuleInitStateChange;
    worksheetRuleInitStateChange$: import('rxjs').Observable<boolean>;
    changeRuleInitState(state: boolean): void;
    getSheetRuleInitState(): boolean;
    addRule(unitId: string, rule: IWorksheetProtectionRule): void;
    deleteRule(unitId: string, subUnitId: string): void;
    setRule(unitId: string, subUnitId: string, rule: IWorksheetProtectionRule): void;
    getRule(unitId: string, subUnitId: string): IWorksheetProtectionRule | undefined;
    toObject(): IObjectModel;
    fromObject(obj: IObjectModel): void;
    deleteUnitModel(unitId: string): void;
    private _ensureSubUnitMap;
    ruleRefresh(permissionId: string): void;
    resetOrder(): void;
    getTargetByPermissionId(unitId: string, permissionId: string): string[] | null | undefined;
}
export {};
