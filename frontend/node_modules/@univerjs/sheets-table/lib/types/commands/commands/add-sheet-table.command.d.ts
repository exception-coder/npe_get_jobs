import { ICommand, IRange } from '@univerjs/core';
import { ITableOptions } from '../../types/type';
export interface IAddSheetTableCommandParams {
    unitId: string;
    subUnitId: string;
    range: IRange;
    id?: string;
    name?: string;
    options?: ITableOptions;
}
export declare const AddSheetTableCommand: ICommand<IAddSheetTableCommandParams>;
