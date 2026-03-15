import { ICommand, ITextRangeParam, NamedStyleType } from '@univerjs/core';
export interface ISetParagraphNamedStyleCommandParams {
    value: NamedStyleType;
    textRanges?: ITextRangeParam[];
}
export declare const SetParagraphNamedStyleCommand: ICommand<ISetParagraphNamedStyleCommandParams>;
export declare const QuickHeadingCommand: ICommand<ISetParagraphNamedStyleCommandParams>;
export declare const QUICK_HEADING_MAP: {
    '#': NamedStyleType;
    '##': NamedStyleType;
    '###': NamedStyleType;
    '####': NamedStyleType;
    '#####': NamedStyleType;
};
export declare const H1HeadingCommand: ICommand<ISetParagraphNamedStyleCommandParams>;
export declare const H2HeadingCommand: ICommand<ISetParagraphNamedStyleCommandParams>;
export declare const H3HeadingCommand: ICommand<ISetParagraphNamedStyleCommandParams>;
export declare const H4HeadingCommand: ICommand<ISetParagraphNamedStyleCommandParams>;
export declare const H5HeadingCommand: ICommand<ISetParagraphNamedStyleCommandParams>;
export declare const NormalTextHeadingCommand: ICommand<ISetParagraphNamedStyleCommandParams>;
export declare const TitleHeadingCommand: ICommand<ISetParagraphNamedStyleCommandParams>;
export declare const SubtitleHeadingCommand: ICommand<ISetParagraphNamedStyleCommandParams>;
