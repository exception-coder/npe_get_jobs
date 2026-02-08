import { ICellData } from '@univerjs/core';
import { IIconType } from '../models/icon-map';
export interface IDataBarRenderParams {
    color: string;
    value: number;
    startPoint: number;
    isGradient: boolean;
    isShowValue: boolean;
}
export interface IDataBarCellData extends ICellData {
    dataBar?: IDataBarRenderParams;
}
export interface IIconSetRenderParams {
    iconId: string;
    iconType: IIconType;
    isShowValue: boolean;
}
export interface IIconSetCellData extends ICellData {
    iconSet?: IIconSetRenderParams;
    _originV?: ICellData['v'];
}
export type IConditionalFormattingCellData = IDataBarCellData & IIconSetCellData;
