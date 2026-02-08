import { ICommand } from '@univerjs/core';
export interface IRemoveTableThemeCommandParams {
    unitId: string;
    tableId: string;
    themeName: string;
}
export declare const RemoveTableThemeCommand: ICommand<IRemoveTableThemeCommandParams>;
