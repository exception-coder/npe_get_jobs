import { ITextRange } from '../../../../sheets/typedef';
import { IParagraph, IParagraphRange } from '../../../../types/interfaces';
export declare function makeSelection(startOffset: number, endOffset?: number): ITextRange;
export declare function normalizeSelection(selection: ITextRange): ITextRange;
export declare function isSegmentIntersects(start: number, end: number, start2: number, end2: number): boolean;
export declare function getParagraphsInRange(activeRange: ITextRange, paragraphs: IParagraph[], dataStream: string, paragraphRanges?: IParagraphRange[]): IParagraphRange[];
export declare function getParagraphsInRanges(ranges: readonly ITextRange[], paragraphs: IParagraph[], dataStream: string): IParagraphRange[];
export declare function transformParagraphs(paragraphs: IParagraph[], dataStream: string): IParagraphRange[];
