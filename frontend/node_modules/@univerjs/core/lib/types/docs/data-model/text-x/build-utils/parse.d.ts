import { IDocumentBody } from '../../../../types/interfaces';
export declare const getPlainText: (dataStream: string) => string;
export declare const isEmptyDocument: (dataStream?: string) => boolean;
export declare const fromPlainText: (text: string) => IDocumentBody;
