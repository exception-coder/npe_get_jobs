import { IAccessor, IMutation } from '@univerjs/core';
import { IWorksheetRangeThemeStyleMutationParams } from '../../basics/interfaces/mutation-interface';
export declare const DeleteWorksheetRangeThemeStyleMutation: IMutation<IWorksheetRangeThemeStyleMutationParams>;
export declare const DeleteWorksheetRangeThemeStyleMutationFactory: (accessor: IAccessor, params: IWorksheetRangeThemeStyleMutationParams) => {
    unitId: string;
    subUnitId: string;
    range: import('@univerjs/core').IRange;
    themeName: string;
};
