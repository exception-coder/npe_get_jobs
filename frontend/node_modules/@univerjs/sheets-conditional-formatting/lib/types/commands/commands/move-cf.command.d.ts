import { ICommand } from '@univerjs/core';
import { IAnchor } from '../../utils/anchor';
export interface IMoveCfCommandParams {
    unitId?: string;
    subUnitId?: string;
    start: IAnchor;
    end: IAnchor;
}
export declare const MoveCfCommand: ICommand<IMoveCfCommandParams>;
