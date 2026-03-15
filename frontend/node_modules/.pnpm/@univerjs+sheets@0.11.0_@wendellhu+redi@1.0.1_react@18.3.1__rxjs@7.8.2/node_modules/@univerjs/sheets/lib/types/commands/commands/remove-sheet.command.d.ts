import { ICommand } from '@univerjs/core';
export interface IRemoveSheetCommandParams {
    unitId?: string;
    subUnitId: string;
}
/**
 * The command to insert new worksheet
 */
export declare const RemoveSheetCommand: ICommand;
