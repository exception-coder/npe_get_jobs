import { IAccessor, IMutation } from '@univerjs/core';
import { IConditionFormattingRule } from '../../models/type';
import { IDeleteConditionalRuleMutationParams } from './delete-conditional-rule.mutation';
export interface IAddConditionalRuleMutationParams {
    unitId: string;
    subUnitId: string;
    rule: IConditionFormattingRule;
}
export declare const AddConditionalRuleMutationUndoFactory: (accessor: IAccessor, param: IAddConditionalRuleMutationParams) => {
    id: string;
    params: IDeleteConditionalRuleMutationParams;
};
export declare const AddConditionalRuleMutation: IMutation<IAddConditionalRuleMutationParams>;
