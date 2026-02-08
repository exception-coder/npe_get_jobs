import { HorizontalAlign, ICommand, IRange, IStyleData, VerticalAlign, WrapStrategy } from '@univerjs/core';
import { ISheetCommandSharedParams } from '../utils/interface';
export interface IStyleTypeValue<T> {
    type: keyof IStyleData;
    value: T | T[][];
}
interface ISetStyleCommonParams extends Partial<ISheetCommandSharedParams> {
    range?: IRange;
}
export interface ISetStyleCommandParams<T> extends ISetStyleCommonParams {
    style: IStyleTypeValue<T>;
}
export declare const AFFECT_LAYOUT_STYLES: string[];
/**
 * The command to set cell style.
 * Set style to a bunch of ranges.
 */
export declare const SetStyleCommand: ICommand<ISetStyleCommandParams<unknown>>;
/**
 * Set bold font style to currently selected ranges.
 * If the cell is already bold then it will cancel the bold style.
 */
export declare const SetBoldCommand: ICommand;
/**
 * Set italic font style to currently selected ranges.
 * If the cell is already italic then it will cancel the italic style.
 */
export declare const SetItalicCommand: ICommand;
/**
 * Set underline font style to currently selected ranges. If the cell is already underline then it will cancel the underline style.
 */
export declare const SetUnderlineCommand: ICommand;
/**
 * Set strike through font style to currently selected ranges. If the cell is already stroke then it will cancel the stroke style.
 */
export declare const SetStrikeThroughCommand: ICommand;
/**
 * Set overline font style to currently selected ranges. If the cell is already overline then it will cancel the overline style.
 */
export declare const SetOverlineCommand: ICommand;
export interface ISetFontFamilyCommandParams {
    value: string;
}
export declare const SetFontFamilyCommand: ICommand<ISetFontFamilyCommandParams>;
export interface ISetFontSizeCommandParams {
    value: number;
}
export declare const SetFontSizeCommand: ICommand<ISetFontSizeCommandParams>;
export interface ISetColorCommandParams {
    value: string | null;
}
export declare const SetTextColorCommand: ICommand<ISetColorCommandParams>;
export declare const ResetTextColorCommand: ICommand;
export declare const SetBackgroundColorCommand: ICommand<ISetColorCommandParams>;
export declare const ResetBackgroundColorCommand: ICommand;
export interface ISetVerticalTextAlignCommandParams extends ISetStyleCommonParams {
    value: VerticalAlign;
}
export declare const SetVerticalTextAlignCommand: ICommand<ISetVerticalTextAlignCommandParams>;
export interface ISetHorizontalTextAlignCommandParams extends ISetStyleCommonParams {
    value: HorizontalAlign;
}
export declare const SetHorizontalTextAlignCommand: ICommand<ISetHorizontalTextAlignCommandParams>;
export interface ISetTextWrapCommandParams extends ISetStyleCommonParams {
    value: WrapStrategy;
}
export declare const SetTextWrapCommand: ICommand<ISetTextWrapCommandParams>;
export interface ISetTextRotationCommandParams extends ISetStyleCommonParams {
    value: number | string;
}
export declare const SetTextRotationCommand: ICommand<ISetTextRotationCommandParams>;
export {};
