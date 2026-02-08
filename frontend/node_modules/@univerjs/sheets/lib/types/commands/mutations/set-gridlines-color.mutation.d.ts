import { IAccessor, IMutation } from '@univerjs/core';
export interface ISetGridlinesColorMutationParams {
    color: string | undefined;
    unitId: string;
    subUnitId: string;
}
export declare const SetGridlinesColorUndoMutationFactory: (accessor: IAccessor, params: ISetGridlinesColorMutationParams) => {
    unitId: string;
    subUnitId: string;
    color: string | undefined;
};
export declare const SetGridlinesColorMutation: IMutation<ISetGridlinesColorMutationParams>;
