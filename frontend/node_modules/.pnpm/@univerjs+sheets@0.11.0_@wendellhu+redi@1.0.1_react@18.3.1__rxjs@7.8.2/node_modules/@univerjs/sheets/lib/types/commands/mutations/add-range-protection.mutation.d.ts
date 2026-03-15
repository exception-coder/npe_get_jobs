import { IMutation, IMutationInfo } from '@univerjs/core';
import { IRangeProtectionRule } from '../../model/range-protection-rule.model';
import { IDeleteRangeProtectionMutationParams } from './delete-range-protection.mutation';
export interface IAddRangeProtectionMutationParams {
    rules: IRangeProtectionRule[];
    unitId: string;
    subUnitId: string;
    name?: string;
    description?: string;
}
export declare const FactoryAddRangeProtectionMutation: (param: IAddRangeProtectionMutationParams) => IMutationInfo<IDeleteRangeProtectionMutationParams>;
export declare const AddRangeProtectionMutation: IMutation<IAddRangeProtectionMutationParams>;
