import { IMutation } from '@univerjs/core';
import { IAnchor } from '../../utils/anchor';
export interface IMoveConditionalRuleMutationParams {
    unitId: string;
    subUnitId: string;
    start: IAnchor;
    end: IAnchor;
}
export declare const MoveConditionalRuleMutation: IMutation<IMoveConditionalRuleMutationParams>;
export declare const MoveConditionalRuleMutationUndoFactory: (param: IMoveConditionalRuleMutationParams) => {
    id: string;
    params: IMoveConditionalRuleMutationParams;
}[];
