import { ICommand } from '@univerjs/core';
import { RangeThemeStyle } from '../../model/range-theme-util';
export interface IRegisterWorksheetRangeThemeStyleCommandParams {
    unitId: string;
    rangeThemeStyle: RangeThemeStyle;
}
export declare const RegisterWorksheetRangeThemeStyleCommand: ICommand<IRegisterWorksheetRangeThemeStyleCommandParams>;
