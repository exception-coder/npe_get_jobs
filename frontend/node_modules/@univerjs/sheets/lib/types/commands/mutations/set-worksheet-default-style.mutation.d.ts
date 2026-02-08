import { IAccessor, IMutation, IStyleData, Nullable } from '@univerjs/core';
export interface ISetWorksheetDefaultStyleMutationParams {
    unitId: string;
    subUnitId: string;
    defaultStyle: string | Nullable<IStyleData>;
}
export declare const SetWorksheetDefaultStyleMutation: IMutation<ISetWorksheetDefaultStyleMutationParams>;
export declare const SetWorksheetDefaultStyleMutationFactory: (accessor: IAccessor, params: ISetWorksheetDefaultStyleMutationParams) => {
    unitId: string;
    subUnitId: string;
    defaultStyle: string | Nullable<IStyleData>;
};
