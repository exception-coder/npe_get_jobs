import { ICommand } from '@univerjs/core';
import { ITableSetConfig } from '../../types/type';
export interface ISetSheetTableCommandParams extends ITableSetConfig {
    unitId: string;
    tableId: string;
}
export declare const SetSheetTableCommand: ICommand<ISetSheetTableCommandParams>;
