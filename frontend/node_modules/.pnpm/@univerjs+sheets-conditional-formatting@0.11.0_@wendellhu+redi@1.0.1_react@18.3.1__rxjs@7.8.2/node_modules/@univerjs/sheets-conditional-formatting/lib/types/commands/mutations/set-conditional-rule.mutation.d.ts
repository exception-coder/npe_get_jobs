import { IAccessor, IMutation } from '@univerjs/core';
import { IConditionFormattingRule } from '../../models/type';
export interface ISetConditionalRuleMutationParams {
    unitId: string;
    subUnitId: string;
    cfId?: string;
    rule: IConditionFormattingRule;
}
export declare const SetConditionalRuleMutation: IMutation<ISetConditionalRuleMutationParams>;
export declare const setConditionalRuleMutationUndoFactory: (accessor: IAccessor, param: ISetConditionalRuleMutationParams) => {
    id: string;
    params: ISetConditionalRuleMutationParams;
}[];
