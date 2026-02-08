import { ICommand } from '@univerjs/core';
export interface IDeleteCfCommandParams {
    unitId?: string;
    subUnitId?: string;
    cfId: string;
}
export declare const DeleteCfCommand: ICommand<IDeleteCfCommandParams>;
