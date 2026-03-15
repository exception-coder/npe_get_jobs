import { IDocumentBody, IStyleBase } from '@univerjs/core';
interface ITextChunk {
    content: string;
    style?: IStyleBase;
}
export declare function prepareParagraphBody(body: IDocumentBody, paragraphIndex: number): IDocumentBody;
export declare function prepareTextChunks(body: IDocumentBody): ITextChunk[];
export {};
