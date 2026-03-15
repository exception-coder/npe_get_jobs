import { IDocumentBody } from '@univerjs/core';
import { IThreadCommentMention } from '@univerjs/thread-comment';
export type TextNode = {
    type: 'text';
    content: string;
} | {
    type: 'mention';
    content: IThreadCommentMention;
};
export declare const transformDocument2TextNodes: (doc: IDocumentBody) => TextNode[][];
export declare const transformTextNodes2Document: (nodes: TextNode[]) => IDocumentBody;
