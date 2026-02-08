import { ICommand } from '@univerjs/core';
export interface ISetGridlinesColorCommandParams {
    color: string | undefined;
    unitId?: string;
    subUnitId?: string;
}
export declare const SetGridlinesColorCommand: ICommand;
