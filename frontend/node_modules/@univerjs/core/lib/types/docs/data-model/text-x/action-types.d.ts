import { UpdateDocsAttributeType } from '../../../shared/command-enum';
import { IDocumentBody } from '../../../types/interfaces/i-document-data';
export declare enum TextXActionType {
    RETAIN = "r",
    INSERT = "i",
    DELETE = "d"
}
/**
 * Retain mutation is used to move the cursor or to update properties of the text in the given range.
 */
export interface IRetainAction {
    t: TextXActionType.RETAIN;
    len: number;
    body?: IDocumentBody;
    oldBody?: IDocumentBody;
    coverType?: UpdateDocsAttributeType;
}
/**
 * Insert mutation is used to insert text (maybe with rich text properties) at the given position.
 */
export interface IInsertAction {
    t: TextXActionType.INSERT;
    body: IDocumentBody;
    len: number;
}
/**
 * Delete mutation is used to delete text at the given position.
 */
export interface IDeleteAction {
    t: TextXActionType.DELETE;
    len: number;
    body?: IDocumentBody;
}
export type TextXAction = IRetainAction | IInsertAction | IDeleteAction;
