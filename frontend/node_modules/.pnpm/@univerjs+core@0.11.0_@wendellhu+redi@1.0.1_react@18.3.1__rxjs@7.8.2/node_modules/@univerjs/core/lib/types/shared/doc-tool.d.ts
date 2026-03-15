import { IParagraph, IParagraphStyle } from '../types/interfaces/i-document-data';
export declare function horizontalLineSegmentsSubtraction(aStart: number, aEnd: number, bStart: number, bEnd: number): number[];
export declare function checkParagraphHasBullet(paragraph: IParagraph): boolean;
export declare function checkParagraphHasIndent(paragraph: IParagraph): boolean;
export declare function checkParagraphHasIndentByStyle(paragraphStyle?: IParagraphStyle): boolean;
export declare function insertTextToContent(content: string, start: number, text: string): string;
export declare function deleteContent(content: string, start: number, end: number): string;
