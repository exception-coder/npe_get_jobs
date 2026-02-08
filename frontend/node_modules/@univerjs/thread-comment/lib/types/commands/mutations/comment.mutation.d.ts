import { ICommand, IDocumentBody } from '@univerjs/core';
import { IThreadComment } from '../../types/interfaces/i-thread-comment';
export interface IAddCommentMutationParams {
    unitId: string;
    subUnitId: string;
    comment: IThreadComment;
    sync?: boolean;
}
export declare const AddCommentMutation: ICommand<IAddCommentMutationParams>;
export interface IUpdateCommentPayload {
    commentId: string;
    text: IDocumentBody;
    attachments?: string[];
    updated?: boolean;
    updateT?: string;
}
export interface IUpdateCommentMutationParams {
    unitId: string;
    subUnitId: string;
    payload: IUpdateCommentPayload;
    silent?: boolean;
}
export declare const UpdateCommentMutation: ICommand<IUpdateCommentMutationParams>;
export interface IUpdateCommentRefPayload {
    commentId: string;
    ref: string;
}
export interface IUpdateCommentRefMutationParams {
    unitId: string;
    subUnitId: string;
    payload: IUpdateCommentRefPayload;
    silent?: boolean;
}
export declare const UpdateCommentRefMutation: ICommand<IUpdateCommentRefMutationParams>;
export interface IResolveCommentMutationParams {
    unitId: string;
    subUnitId: string;
    commentId: string;
    resolved: boolean;
}
export declare const ResolveCommentMutation: ICommand<IResolveCommentMutationParams>;
export interface IDeleteCommentMutationParams {
    unitId: string;
    subUnitId: string;
    commentId: string;
}
export declare const DeleteCommentMutation: ICommand<IDeleteCommentMutationParams>;
