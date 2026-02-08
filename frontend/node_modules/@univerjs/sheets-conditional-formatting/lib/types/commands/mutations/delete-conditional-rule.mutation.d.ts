import { IAccessor, IMutation, IMutationInfo } from '@univerjs/core';
export interface IDeleteConditionalRuleMutationParams {
    unitId: string;
    subUnitId: string;
    cfId: string;
}
export declare const DeleteConditionalRuleMutationUndoFactory: (accessor: IAccessor, param: IDeleteConditionalRuleMutationParams) => IMutationInfo<object>[];
export declare const DeleteConditionalRuleMutation: IMutation<IDeleteConditionalRuleMutationParams>;
