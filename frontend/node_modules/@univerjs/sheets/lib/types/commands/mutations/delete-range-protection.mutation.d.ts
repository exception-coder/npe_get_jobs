import { IAccessor, IMutation, IMutationInfo } from '@univerjs/core';
import { IAddRangeProtectionMutationParams } from './add-range-protection.mutation';
export interface IDeleteRangeProtectionMutationParams {
    ruleIds: string[];
    unitId: string;
    subUnitId: string;
}
export declare const FactoryDeleteRangeProtectionMutation: (accessor: IAccessor, param: IDeleteRangeProtectionMutationParams) => IMutationInfo<Omit<IAddRangeProtectionMutationParams, "name">>;
export declare const DeleteRangeProtectionMutation: IMutation<IDeleteRangeProtectionMutationParams>;
