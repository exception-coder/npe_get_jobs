import { IMutation } from '@univerjs/core';
import { IRangeThemeStyleJSON } from '../../model/range-theme-util';
export interface ISetRangeThemeMutationParams {
    unitId: string;
    subUnitId: string;
    styleName: string;
    style: Omit<IRangeThemeStyleJSON, 'name'>;
}
export declare const SetRangeThemeMutation: IMutation<ISetRangeThemeMutationParams>;
