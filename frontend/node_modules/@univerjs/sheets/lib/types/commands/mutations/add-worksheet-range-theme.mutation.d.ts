import { IAccessor, IMutation } from '@univerjs/core';
import { IWorksheetRangeThemeStyleMutationParams } from '../../basics/interfaces/mutation-interface';
export declare const SetWorksheetRangeThemeStyleMutation: IMutation<IWorksheetRangeThemeStyleMutationParams>;
export declare const SetWorksheetRangeThemeStyleMutationFactory: (accessor: IAccessor, params: IWorksheetRangeThemeStyleMutationParams) => {
    unitId: string;
    subUnitId: string;
    range: import('@univerjs/core').IRange;
    themeName: string;
};
