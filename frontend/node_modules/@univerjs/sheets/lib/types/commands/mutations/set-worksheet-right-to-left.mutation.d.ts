import { BooleanNumber, IAccessor, IMutation } from '@univerjs/core';
export interface ISetWorksheetRightToLeftMutationParams {
    rightToLeft: BooleanNumber;
    unitId: string;
    subUnitId: string;
}
export declare const SetWorksheetRightToLeftUndoMutationFactory: (accessor: IAccessor, params: ISetWorksheetRightToLeftMutationParams) => ISetWorksheetRightToLeftMutationParams;
export declare const SetWorksheetRightToLeftMutation: IMutation<ISetWorksheetRightToLeftMutationParams>;
