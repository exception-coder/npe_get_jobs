import { ICommand, IParagraph, IParagraphBorder, ITextRangeParam } from '@univerjs/core';
export declare function generateParagraphs(dataStream: string, prevParagraph?: IParagraph, borderBottom?: IParagraphBorder): IParagraph[];
interface IBreakLineCommandParams {
    horizontalLine?: IParagraphBorder;
    textRange?: ITextRangeParam;
}
export declare const BreakLineCommand: ICommand<IBreakLineCommandParams>;
export {};
