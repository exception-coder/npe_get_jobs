import { IDisposable, IRange } from '@univerjs/core';
import { UnitObject } from '@univerjs/protocol';
export declare enum ViewStateEnum {
    OthersCanView = "othersCanView",
    NoOneElseCanView = "noOneElseCanView"
}
export declare enum EditStateEnum {
    DesignedUserCanEdit = "designedUserCanEdit",
    OnlyMe = "onlyMe"
}
export interface IRangeProtectionRule {
    ranges: IRange[];
    permissionId: string;
    id: string;
    description?: string;
    unitType: UnitObject;
    unitId: string;
    subUnitId: string;
    viewState: ViewStateEnum;
    editState: EditStateEnum;
}
export type IObjectModel = Record<string, Record<string, IRangeProtectionRule[]>>;
export type IModel = Map<string, Map<string, Map<string, IRangeProtectionRule>>>;
export interface IRuleChange {
    unitId: string;
    subUnitId: string;
    rule: IRangeProtectionRule;
    oldRule?: IRangeProtectionRule;
    type: IRuleChangeType;
}
type IRuleChangeType = 'add' | 'set' | 'delete';
export declare class RangeProtectionRuleModel implements IDisposable {
    /**
     * Map<unitId, Map<subUnitId, Map<ruleId, IRangeProtectionRule>>>
     */
    private _model;
    private readonly _ruleChange$;
    readonly ruleChange$: import('rxjs').Observable<IRuleChange>;
    private _ruleRefresh$;
    ruleRefresh$: import('rxjs').Observable<string>;
    dispose(): void;
    ruleRefresh(id: string): void;
    private _rangeRuleInitStateChange;
    rangeRuleInitStateChange$: import('rxjs').Observable<boolean>;
    getRangeRuleInitState(): boolean;
    changeRuleInitState(state: boolean): void;
    addRule(unitId: string, subUnitId: string, rule: IRangeProtectionRule): void;
    deleteRule(unitId: string, subUnitId: string, id: string): void;
    setRule(unitId: string, subUnitId: string, id: string, rule: IRangeProtectionRule): void;
    getRule(unitId: string, subUnitId: string, id: string): IRangeProtectionRule | undefined;
    getSubunitRuleList(unitId: string, subUnitId: string): IRangeProtectionRule[];
    getSubunitRuleListLength(unitId: string, subUnitId: string): number;
    private _ensureRuleMap;
    toObject(): IObjectModel;
    fromObject(obj: IObjectModel): void;
    deleteUnitModel(unitId: string): void;
    createRuleId(unitId: string, subUnitId: string): string;
    getTargetByPermissionId(unitId: string, permissionId: string): string[] | null;
}
export {};
