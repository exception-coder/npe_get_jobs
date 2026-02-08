import { ICommand } from '@univerjs/core';
export interface IUnregisterWorksheetRangeThemeStyleCommandParams {
    unitId: string;
    themeName: string;
}
export declare const UnregisterWorksheetRangeThemeStyleCommand: ICommand<IUnregisterWorksheetRangeThemeStyleCommandParams>;
