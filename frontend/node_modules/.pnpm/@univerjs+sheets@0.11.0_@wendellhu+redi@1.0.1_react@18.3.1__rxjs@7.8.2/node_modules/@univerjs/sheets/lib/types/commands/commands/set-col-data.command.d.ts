import { IColumnData, ICommand, IObjectArrayPrimitiveType, Nullable } from '@univerjs/core';
import { ISheetCommandSharedParams } from '../utils/interface';
export type IColumnProperties = Omit<IColumnData, 'w' | 'hd'>;
export interface ISetColDataCommandParams extends Partial<ISheetCommandSharedParams> {
    columnData: IObjectArrayPrimitiveType<Nullable<IColumnProperties>>;
}
export declare const SetColDataCommand: ICommand;
