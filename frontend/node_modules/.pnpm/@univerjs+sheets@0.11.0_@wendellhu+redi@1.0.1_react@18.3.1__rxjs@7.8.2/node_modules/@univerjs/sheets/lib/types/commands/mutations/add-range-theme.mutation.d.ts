import { IMutation } from '@univerjs/core';
import { IRangeThemeStyleJSON } from '../../model/range-theme-util';
export interface IAddRangeThemeMutationParams {
    styleJSON: IRangeThemeStyleJSON;
    unitId: string;
    subUnitId: string;
}
export declare const AddRangeThemeMutation: IMutation<IAddRangeThemeMutationParams>;
