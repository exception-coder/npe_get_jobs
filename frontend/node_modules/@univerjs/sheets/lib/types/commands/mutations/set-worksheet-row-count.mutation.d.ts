import { IAccessor, IMutation } from '@univerjs/core';
export interface ISetWorksheetRowCountMutationParams {
    unitId: string;
    subUnitId: string;
    rowCount: number;
}
export declare const SetWorksheetRowCountUndoMutationFactory: (accessor: IAccessor, params: ISetWorksheetRowCountMutationParams) => ISetWorksheetRowCountMutationParams;
export declare const SetWorksheetRowCountMutation: IMutation<ISetWorksheetRowCountMutationParams>;
