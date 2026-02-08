import { IDisposable } from '@univerjs/core';
import { IAddCommentCommandParams } from '@univerjs/thread-comment';
import { FWorksheet } from '@univerjs/sheets/facade';
import { FThreadComment } from './f-thread-comment';
/**
 * @ignore
 */
export interface IFWorksheetCommentMixin {
    /**
     * Get all comments in the current sheet
     * @returns {FThreadComment[]} All comments in the current sheet
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const comments = fWorksheet.getComments();
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
     * Clear all comments in the current sheet
     * @returns {Promise<boolean>} Whether the comments are cleared successfully.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const result = await fWorksheet.clearComments();
     * console.log(result);
     * ```
     */
    clearComments(): Promise<boolean>;
    /**
     * get comment by comment id
     * @param {string} commentId comment id
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     *
     * // Create a new comment
     * const richText = univerAPI.newRichText().insertText('hello univer');
     * const commentBuilder = univerAPI.newTheadComment()
     *   .setContent(richText)
     *   .setId('mock-comment-id');
     * const cell = fWorksheet.getRange('A1');
     * await cell.addCommentAsync(commentBuilder);
     *
     * const comment = fWorksheet.getCommentById('mock-comment-id');
     * console.log(comment, comment?.getCommentData());
     * ```
     */
    getCommentById(commentId: string): FThreadComment | undefined;
}
/**
 * @ignore
 */
export declare class FWorksheetCommentMixin extends FWorksheet implements IFWorksheetCommentMixin {
    getComments(): FThreadComment[];
    clearComments(): Promise<boolean>;
    /**
     * Subscribe to comment events.
     * @param callback Callback function, param contains comment info and target cell.
     */
    onCommented(callback: (params: IAddCommentCommandParams) => void): IDisposable;
    getCommentById(commentId: string): FThreadComment | undefined;
}
declare module '@univerjs/sheets/facade' {
    interface FWorksheet extends IFWorksheetCommentMixin {
    }
}
