import { ICommand, IDocumentBody, ITextStyle } from '@univerjs/core';
import { ITextRangeWithStyle } from '@univerjs/engine-render';
export interface ISetInlineFormatCommandParams {
    preCommandId: string;
    value?: string;
}
export declare const SetInlineFormatBoldCommand: ICommand;
export declare const SetInlineFormatItalicCommand: ICommand;
export declare const SetInlineFormatUnderlineCommand: ICommand;
export declare const SetInlineFormatStrikethroughCommand: ICommand;
export declare const SetInlineFormatSubscriptCommand: ICommand;
export declare const SetInlineFormatSuperscriptCommand: ICommand;
export declare const SetInlineFormatFontSizeCommand: ICommand;
export declare const SetInlineFormatFontFamilyCommand: ICommand;
export declare const SetInlineFormatTextColorCommand: ICommand;
export declare const SetInlineFormatTextBackgroundColorCommand: ICommand;
export declare const ResetInlineFormatTextBackgroundColorCommand: ICommand;
export declare const SetInlineFormatCommand: ICommand<ISetInlineFormatCommandParams>;
export declare function getStyleInTextRange(body: IDocumentBody, textRange: ITextRangeWithStyle, defaultStyle: ITextStyle): ITextStyle;
