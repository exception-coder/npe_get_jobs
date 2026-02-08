import { IMutation } from '@univerjs/core';
import { IRangeThemeStyleJSON } from '../../model/range-theme-util';
export interface IRegisterWorksheetRangeThemeStyleMutationParams {
    unitId: string;
    themeName: string;
    rangeThemeStyleJson: IRangeThemeStyleJSON;
}
export declare const RegisterWorksheetRangeThemeStyleMutation: IMutation<IRegisterWorksheetRangeThemeStyleMutationParams>;
