import { ICommand } from '@univerjs/core';
import { RangeThemeStyle } from '@univerjs/sheets';
export interface IAddTableThemeCommandParams {
    unitId: string;
    tableId: string;
    themeStyle: RangeThemeStyle;
}
export declare const AddTableThemeCommand: ICommand<IAddTableThemeCommandParams>;
