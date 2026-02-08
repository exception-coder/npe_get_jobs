import { IAccessor, IMutation, IMutationInfo } from '@univerjs/core';
import { IRangeProtectionRule } from '../../model/range-protection-rule.model';
export interface ISetRangeProtectionMutationParams {
    rule: IRangeProtectionRule;
    unitId: string;
    subUnitId: string;
    ruleId: string;
}
export declare const SetRangeProtectionMutation: IMutation<ISetRangeProtectionMutationParams>;
export declare const FactorySetRangeProtectionMutation: (accessor: IAccessor, param: ISetRangeProtectionMutationParams) => IMutationInfo<ISetRangeProtectionMutationParams> | null;
