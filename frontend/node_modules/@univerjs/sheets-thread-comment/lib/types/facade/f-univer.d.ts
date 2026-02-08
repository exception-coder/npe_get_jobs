import { IDisposable, Injector } from '@univerjs/core';
import { IThreadComment } from '@univerjs/thread-comment';
import { ISheetCommentAddEvent, ISheetCommentDeleteEvent, ISheetCommentResolveEvent, ISheetCommentUpdateEvent } from './f-event';
import { FUniver } from '@univerjs/core/facade';
import { FTheadCommentBuilder } from './f-thread-comment';
/**
 * @ignore
 */
export interface IFUniverCommentMixin {
    /**
     * @deprecated use `univerAPI.addEvent(univerAPI.Event.CommentAdded, (params) => {})` as instead
     */
    onCommentAdded(callback: (event: ISheetCommentAddEvent) => void): IDisposable;
    /**
     * @deprecated use `univerAPI.addEvent(univerAPI.Event.CommentUpdated, (params) => {})` as instead
     */
    onCommentUpdated(callback: (event: ISheetCommentUpdateEvent) => void): IDisposable;
    /**
     * @deprecated use `univerAPI.addEvent(univerAPI.Event.CommentDeleted, (params) => {})` as instead
     */
    onCommentDeleted(callback: (event: ISheetCommentDeleteEvent) => void): IDisposable;
    /**
     * @deprecated use `univerAPI.addEvent(univerAPI.Event.CommentResolved, (params) => {})` as instead
     */
    onCommentResolved(callback: (event: ISheetCommentResolveEvent) => void): IDisposable;
    /**
     * Create a new thread comment
     * @returns {FTheadCommentBuilder} The thead comment builder
     * @example
     * ```ts
     * // Create a new comment
     * const richText = univerAPI.newRichText().insertText('hello univer');
     * const commentBuilder = univerAPI.newTheadComment()
     *   .setContent(richText)
     *   .setPersonId('mock-user-id')
     *   .setDateTime(new Date('2025-02-21 14:22:22'))
     *   .setId('mock-comment-id')
     *   .setThreadId('mock-thread-id');
     *
     * // Add the comment to the cell A1
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const cell = fWorksheet.getRange('A1');
     * const result = await cell.addCommentAsync(commentBuilder);
     * console.log(result);
     * ```
     */
    newTheadComment(): FTheadCommentBuilder;
}
/**
 * @ignore
 */
export declare class FUniverCommentMixin extends FUniver implements IFUniverCommentMixin {
    _initialize(injector: Injector): void;
    /**
     * @ignore
     */
    newTheadComment(comment?: IThreadComment): FTheadCommentBuilder;
}
declare module '@univerjs/core/facade' {
    interface FUniver extends IFUniverCommentMixin {
    }
}
