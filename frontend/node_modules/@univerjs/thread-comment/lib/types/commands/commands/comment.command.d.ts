import { ICommand } from '@univerjs/core';
import { IThreadComment } from '../../types/interfaces/i-thread-comment';
import { IUpdateCommentPayload } from '../mutations/comment.mutation';
export interface IAddCommentCommandParams {
    unitId: string;
    subUnitId: string;
    comment: IThreadComment;
}
export declare const AddCommentCommand: ICommand<IAddCommentCommandParams>;
export interface IUpdateCommentCommandParams {
    unitId: string;
    subUnitId: string;
    payload: IUpdateCommentPayload;
}
export declare const UpdateCommentCommand: ICommand<IUpdateCommentCommandParams>;
export interface IResolveCommentCommandParams {
    unitId: string;
    subUnitId: string;
    commentId: string;
    resolved: boolean;
}
export declare const ResolveCommentCommand: ICommand<IResolveCommentCommandParams>;
export interface IDeleteCommentCommandParams {
    unitId: string;
    subUnitId: string;
    commentId: string;
}
/**
 * Delete Reply
 */
export declare const DeleteCommentCommand: ICommand<IDeleteCommentCommandParams>;
export interface IDeleteCommentTreeCommandParams {
    unitId: string;
    subUnitId: string;
    commentId: string;
}
export declare const DeleteCommentTreeCommand: ICommand<IDeleteCommentCommandParams>;
