import { BorderStyleTypes, ICommand, IRange, BorderType } from '@univerjs/core';
import { IBorderInfo } from '../../services/border-style-manager.service';
export interface ISetBorderBasicCommandParams {
    unitId?: string;
    subUnitId?: string;
    ranges: IRange[];
    value: IBorderInfo;
}
export interface ISetBorderPositionCommandParams {
    value: BorderType;
}
export interface ISetBorderStyleCommandParams {
    value: BorderStyleTypes;
}
export interface ISetBorderCommandParams {
    unitId?: string;
    subUnitId?: string;
    ranges?: IRange[];
}
export interface ISetBorderColorCommandParams {
    value: string;
}
/**
 * Set border info for range, including clear border (type = NONE)
 */
export declare const SetBorderCommand: ICommand;
export declare const SetBorderPositionCommand: ICommand<ISetBorderPositionCommandParams>;
export declare const SetBorderStyleCommand: ICommand;
export declare const SetBorderColorCommand: ICommand<ISetBorderColorCommandParams>;
export declare const SetBorderBasicCommand: ICommand<ISetBorderBasicCommandParams>;
