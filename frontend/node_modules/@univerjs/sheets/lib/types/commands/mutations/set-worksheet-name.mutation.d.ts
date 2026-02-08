import { IAccessor, IMutation } from '@univerjs/core';
export interface ISetWorksheetNameMutationParams {
    name: string;
    unitId: string;
    subUnitId: string;
}
export declare const SetWorksheetNameMutationFactory: (accessor: IAccessor, params: ISetWorksheetNameMutationParams) => ISetWorksheetNameMutationParams;
export declare const SetWorksheetNameMutation: IMutation<ISetWorksheetNameMutationParams>;
