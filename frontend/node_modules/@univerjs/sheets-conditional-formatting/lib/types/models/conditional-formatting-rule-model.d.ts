import { IAnchor } from '../utils/anchor';
import { IConditionFormattingRule } from './type';
type RuleOperatorType = 'delete' | 'set' | 'add' | 'sort';
export declare class ConditionalFormattingRuleModel {
    private _model;
    private _ruleChange$;
    $ruleChange: import('rxjs').Observable<{
        rule: IConditionFormattingRule;
        oldRule?: IConditionFormattingRule;
        unitId: string;
        subUnitId: string;
        type: RuleOperatorType;
    }>;
    private _ensureList;
    getRule(unitId: string, subUnitId: string, cfId?: string): IConditionFormattingRule<import('./type').IConditionalFormattingRuleConfig> | null | undefined;
    getUnitRules(unitId: string): Map<string, IConditionFormattingRule<import('./type').IConditionalFormattingRuleConfig>[]> | null;
    getSubunitRules(unitId: string, subUnitId: string): IConditionFormattingRule<import('./type').IConditionalFormattingRuleConfig>[] | null;
    deleteRule(unitId: string, subUnitId: string, cfId: string): void;
    setRule(unitId: string, subUnitId: string, rule: IConditionFormattingRule, oldCfId: string): void;
    addRule(unitId: string, subUnitId: string, rule: IConditionFormattingRule): void;
    /**
     * example [1,2,3,4,5,6],if you move behind 5 to 2, then cfId=5,targetId=2.
     * if targetId does not exist, it defaults to top
     */
    moveRulePriority(unitId: string, subUnitId: string, start: IAnchor, end: IAnchor): void;
    createCfId(_unitId: string, _subUnitId: string): string;
    deleteUnitId(unitId: string): void;
}
export {};
