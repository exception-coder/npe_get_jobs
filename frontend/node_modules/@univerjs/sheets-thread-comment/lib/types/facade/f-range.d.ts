import { IDocumentBody, Nullable } from '@univerjs/core';
import { FRange } from '@univerjs/sheets/facade';
import { FTheadCommentBuilder, FThreadComment } from './f-thread-comment';
/**
 * @ignore
 */
export interface IFRangeCommentMixin {
    /**
     * Get the comment of the start cell in the current range.
     * @returns {FThreadComment | null} The comment of the start cell in the current range. If the cell does not have a comment, return `null`.
     * @example
     * ```ts
     * const range = univerAPI.getActiveWorkbook()
     *  .getActiveSheet()
     *  .getActiveRange();
     * const comment = range.getComment();
     * ```
     */
    getComment(): Nullable<FThreadComment>;
    /**
     * Get the comments in the current range.
     * @returns {FThreadComment[]} The comments in the current range.
     * @example
     * ```ts
     * const range = univerAPI.getActiveWorkbook()
     *  .getActiveSheet()
     *  .getActiveRange();
     * const comments = range.getComments();
     * comments.forEach((comment) => {
     *   console.log(comment.getContent());
     * });
     * ```
     */
    getComments(): FThreadComment[];
    /**
     * @deprecated use `addCommentAsync` as instead.
     */
    addComment(content: IDocumentBody | FTheadCommentBuilder): Promise<boolean>;
    /**
     * Add a comment to the start cell in the current range.
     * @param content The content of the comment.
     * @returns Whether the comment is added successfully.
     * @example
     * ```ts
     * // Create a new comment
     * const richText = univerAPI.newRichText().insertText('hello univer');
     * const commentBuilder = univerAPI.newTheadComment()
     *   .setContent(richText);
     * console.log(commentBuilder.content.toPlainText());
     *
     * // Add the comment to the cell A1
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const cell = fWorksheet.getRange('A1');
     * const result = await cell.addCommentAsync(commentBuilder);
     * console.log(result);
     * ```
     */
    addCommentAsync(content: IDocumentBody | FTheadCommentBuilder): Promise<boolean>;
    /**
     * @deprecated use `clearCommentAsync` as instead.
     */
    clearComment(): Promise<boolean>;
    /**
     * Clear the comment of the start cell in the current range.
     * @returns Whether the comment is cleared successfully.
     */
    clearCommentAsync(): Promise<boolean>;
    /**
     * @deprecated use `clearCommentsAsync` as instead.
     */
    clearComments(): Promise<boolean>;
    /**
     * Clear all of the comments in the current range.
     * @returns Whether the comments are cleared successfully.
     * @example
     * ```ts
     * const range = univerAPI.getActiveWorkbook()
     *  .getActiveSheet()
     *  .getActiveRange();
     * const success = await range.clearCommentsAsync();
     * ```
     */
    clearCommentsAsync(): Promise<boolean>;
}
/**
 * @ignore
 */
export declare class FRangeCommentMixin extends FRange implements IFRangeCommentMixin {
    getComment(): Nullable<FThreadComment>;
    getComments(): FThreadComment[];
    addComment(content: IDocumentBody | FTheadCommentBuilder): Promise<boolean>;
    clearComment(): Promise<boolean>;
    clearComments(): Promise<boolean>;
    addCommentAsync(content: IDocumentBody | FTheadCommentBuilder): Promise<boolean>;
    clearCommentAsync(): Promise<boolean>;
    clearCommentsAsync(): Promise<boolean>;
}
declare module '@univerjs/sheets/facade' {
    interface FRange extends IFRangeCommentMixin {
    }
}
