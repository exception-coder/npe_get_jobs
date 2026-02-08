import { IAccessor, IMutation } from '@univerjs/core';
export interface ISetTabColorMutationParams {
    color: string;
    unitId: string;
    subUnitId: string;
}
export declare const SetTabColorUndoMutationFactory: (accessor: IAccessor, params: ISetTabColorMutationParams) => ISetTabColorMutationParams;
export declare const SetTabColorMutation: IMutation<ISetTabColorMutationParams>;
