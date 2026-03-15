import { IAccessor, IMutation } from '@univerjs/core';
export interface ISetWorksheetColumnCountMutationParams {
    unitId: string;
    subUnitId: string;
    columnCount: number;
}
export declare const SetWorksheetColumnCountUndoMutationFactory: (accessor: IAccessor, params: ISetWorksheetColumnCountMutationParams) => ISetWorksheetColumnCountMutationParams;
export declare const SetWorksheetColumnCountMutation: IMutation<ISetWorksheetColumnCountMutationParams>;
