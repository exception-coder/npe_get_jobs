import { ICommand, IObjectArrayPrimitiveType, IRowData, Nullable } from '@univerjs/core';
import { ISheetCommandSharedParams } from '../utils/interface';
export type IRowProperties = Omit<IRowData, 'h' | 'ia' | 'ah' | 'hd'>;
export interface ISetRowDataCommandParams extends Partial<ISheetCommandSharedParams> {
    rowData: IObjectArrayPrimitiveType<Nullable<IRowProperties>>;
}
export declare const SetRowDataCommand: ICommand;
