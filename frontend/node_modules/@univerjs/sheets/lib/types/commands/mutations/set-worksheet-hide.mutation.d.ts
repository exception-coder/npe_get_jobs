import { BooleanNumber, IAccessor, IMutation } from '@univerjs/core';
export interface ISetWorksheetHideMutationParams {
    hidden: BooleanNumber;
    unitId: string;
    subUnitId: string;
}
export declare const SetWorksheetHideMutationFactory: (accessor: IAccessor, params: ISetWorksheetHideMutationParams) => ISetWorksheetHideMutationParams;
export declare const SetWorksheetHideMutation: IMutation<ISetWorksheetHideMutationParams>;
