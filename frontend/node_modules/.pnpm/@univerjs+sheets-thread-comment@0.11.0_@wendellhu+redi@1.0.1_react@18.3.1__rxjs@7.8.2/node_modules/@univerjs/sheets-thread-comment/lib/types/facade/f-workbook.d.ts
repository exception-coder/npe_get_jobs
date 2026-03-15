import { IDisposable, IExecutionOptions } from '@univerjs/core';
import { CommentUpdate, IAddCommentCommandParams, IDeleteCommentCommandParams, ThreadCommentModel } from '@univerjs/thread-comment';
import { FWorkbook } from '@univerjs/sheets/facade';
import { FThreadComment } from './f-thread-comment';
type IUpdateCommandParams = any;
/**
 * @ignore
 */
export interface IFWorkbookThreadCommentMixin {
    /**
     * Get all comments in the current workbook
     * @returns {FThreadComment[]} All comments in the current workbook
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const comments = fWorkbook.getComments();
     * comments.forEach((comment) => {
     *   const isRoot = comment.getIsRoot();
     *
     *   if (isRoot) {
     *     console.log('root comment:', comment.getCommentData());
     *
     *     const replies = comment.getReplies();
     *     replies.forEach((reply) => {
     *       console.log('reply comment:', reply.getCommentData());
     *     });
     *   }
     * });
     * ```
     */
    getComments(): FThreadComment[];
    /**
     * Clear all comments in the current workbook
     * @returns {Promise<boolean>} Whether the comments are cleared successfully.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const result = await fWorkbook.clearComments();
     * console.log(result);
     * ```
     */
    clearComments(): Promise<boolean>;
    /**
     * @deprecated use `univerAPI.addEvent(univerAPI.Event.CommentUpdated, (params) => {})` as instead
     */
    onThreadCommentChange(callback: (commentUpdate: CommentUpdate) => void | false): IDisposable;
    /**
     * @deprecated use `univerAPI.addEvent(univerAPI.Event.BeforeCommentAdd, (params) => {})` as instead
     */
    onBeforeAddThreadComment(this: FWorkbook, callback: (params: IAddCommentCommandParams, options: IExecutionOptions | undefined) => void | false): IDisposable;
    /**
     * @deprecated use `univerAPI.addEvent(univerAPI.Event.BeforeCommentUpdate, (params) => {})` as instead
     */
    onBeforeUpdateThreadComment(this: FWorkbook, callback: (params: IUpdateCommandParams, options: IExecutionOptions | undefined) => void | false): IDisposable;
    /**
     * @deprecated use `univerAPI.addEvent(univerAPI.Event.BeforeCommentDelete, (params) => {})` as instead
     */
    onBeforeDeleteThreadComment(this: FWorkbook, callback: (params: IDeleteCommentCommandParams, options: IExecutionOptions | undefined) => void | false): IDisposable;
}
/**
 * @ignore
 */
export declare class FWorkbookThreadCommentMixin extends FWorkbook implements IFWorkbookThreadCommentMixin {
    _threadCommentModel: ThreadCommentModel;
    /**
     * @ignore
     */
    _initialize(): void;
    getComments(): FThreadComment[];
    clearComments(): Promise<boolean>;
    /**
     * @param callback
     * @deprecated
     */
    onThreadCommentChange(callback: (commentUpdate: CommentUpdate) => void | false): IDisposable;
    /**
     * @param callback
     * @deprecated
     */
    onBeforeAddThreadComment(callback: (params: IAddCommentCommandParams, options: IExecutionOptions | undefined) => void | false): IDisposable;
    /**
     * @param callback
     * @deprecated
     */
    onBeforeUpdateThreadComment(callback: (params: IUpdateCommandParams, options: IExecutionOptions | undefined) => void | false): IDisposable;
    /**
     * @param callback
     * @deprecated
     */
    onBeforeDeleteThreadComment(callback: (params: IDeleteCommentCommandParams, options: IExecutionOptions | undefined) => void | false): IDisposable;
}
declare module '@univerjs/sheets/facade' {
    interface FWorkbook extends IFWorkbookThreadCommentMixin {
    }
}
export {};
