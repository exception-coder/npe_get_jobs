import { IAccessor, IMutation } from '@univerjs/core';
export interface ISetWorksheetOrderMutationParams {
    fromOrder: number;
    toOrder: number;
    unitId: string;
    subUnitId: string;
}
export declare const SetWorksheetOrderUndoMutationFactory: (accessor: IAccessor, params: ISetWorksheetOrderMutationParams) => ISetWorksheetOrderMutationParams;
export declare const SetWorksheetOrderMutation: IMutation<ISetWorksheetOrderMutationParams>;
