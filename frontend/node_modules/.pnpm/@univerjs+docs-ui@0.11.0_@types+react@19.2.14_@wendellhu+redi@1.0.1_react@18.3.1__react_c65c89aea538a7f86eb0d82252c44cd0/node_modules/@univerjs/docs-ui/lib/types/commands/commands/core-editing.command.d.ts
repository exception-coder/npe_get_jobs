import { ICommand, IDocumentBody, IDocumentData, ITextRange, UpdateDocsAttributeType } from '@univerjs/core';
import { ITextRangeWithStyle } from '@univerjs/engine-render';
import { DeleteDirection } from '../../types/delete-direction';
export interface IInsertCommandParams {
    unitId: string;
    body: IDocumentBody;
    range: ITextRange;
    segmentId?: string;
    cursorOffset?: number;
}
export declare const EditorInsertTextCommandId = "doc.command.insert-text";
/**
 * The command to insert text. The changed range could be non-collapsed, mainly use in line break and normal input.
 */
export declare const InsertCommand: ICommand<IInsertCommandParams>;
export interface IDeleteCommandParams {
    unitId: string;
    range: ITextRange;
    direction: DeleteDirection;
    len?: number;
    segmentId?: string;
}
/**
 * The command to delete text, mainly used in BACKSPACE and DELETE when collapsed is true. ONLY handle collapsed range!!!
 */
export declare const DeleteCommand: ICommand<IDeleteCommandParams>;
export interface IUpdateCommandParams {
    unitId: string;
    updateBody: IDocumentBody;
    range: ITextRange;
    coverType: UpdateDocsAttributeType;
    textRanges: ITextRangeWithStyle[];
    segmentId?: string;
}
/**
 * The command to update text properties, mainly used in BACKSPACE.
 */
export declare const UpdateCommand: ICommand<IUpdateCommandParams>;
export interface ICoverCommandParams {
    unitId: string;
    snapshot?: IDocumentData;
    clearUndoRedoStack?: boolean;
}
