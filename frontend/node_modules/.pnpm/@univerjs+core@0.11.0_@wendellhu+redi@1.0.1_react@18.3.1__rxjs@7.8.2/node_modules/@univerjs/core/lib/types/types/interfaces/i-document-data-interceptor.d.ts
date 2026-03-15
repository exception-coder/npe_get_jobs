import { ICustomDecoration, ICustomRange, IParagraph } from './i-document-data';
export interface ICustomRangeForInterceptor extends ICustomRange {
    active?: boolean;
    show?: boolean;
}
export interface ICustomDecorationForInterceptor extends ICustomDecoration {
    active?: boolean;
    show?: boolean;
}
export interface IParagraphRange extends IParagraph {
    paragraphStart: number;
    paragraphEnd: number;
}
