import { IDocumentBody, ITextRun } from '../types/interfaces';
export declare function getBodySliceHtml(body: IDocumentBody, startIndex: number, endIndex: number): string;
export declare function convertBodyToHtml(body: IDocumentBody, withParagraphInfo?: boolean): string;
export declare function covertTextRunToHtml(dataStream: string, textRun: ITextRun): string;
