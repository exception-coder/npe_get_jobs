import { IDocumentData } from '@univerjs/core';
import { FUniver } from '@univerjs/core/facade';
import { FDocument } from './f-document';
/**
 * @ignore
 */
export interface IFUniverDocsUIMixin {
    /**
     * Create a new document and get the API handler of that document.
     *
     * @param {Partial<IDocumentData>} data The snapshot of the document.
     * @returns {FDocument} FDocument API instance.
     */
    createUniverDoc(data: Partial<IDocumentData>): FDocument;
    /**
     * Get the document API handler by the document id.
     *
     * @param {string} id The document id.
     * @returns {FDocument | null} The document API instance.
     */
    getUniverDoc(id: string): FDocument | null;
    /**
     * Get the currently focused Univer document.
     *
     * @returns {FDocument | null} The currently focused Univer document.
     */
    getActiveDocument(): FDocument | null;
}
export declare class FUniverDocsMixin extends FUniver implements IFUniverDocsUIMixin {
    createUniverDoc(data: Partial<IDocumentData>): FDocument;
    getActiveDocument(): FDocument | null;
    getUniverDoc(id: string): FDocument | null;
}
declare module '@univerjs/core/facade' {
    interface FUniver extends IFUniverDocsUIMixin {
    }
}
