import { IDocumentData, ITextRun } from '@univerjs/core';
export declare function covertTextRunToHtml(dataStream: string, textRun: ITextRun): string;
export declare function getBodySliceHtml(doc: IDocumentData, startIndex: number, endIndex: number): string;
export declare function convertBodyToHtml(doc: IDocumentData): string;
export declare class UDMToHtmlService {
    convert(docList: IDocumentData[]): string;
}
