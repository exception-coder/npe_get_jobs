import { IDocumentBody, ICommandService, Injector, IUniverInstanceService, RichTextValue, UserManagerService } from '@univerjs/core';
import { IBaseComment, IThreadComment } from '@univerjs/thread-comment';
import { SheetsThreadCommentModel } from '@univerjs/sheets-thread-comment';
import { FRange } from '@univerjs/sheets/facade';
/**
 * An readonly class that represents a comment.
 * @ignore
 */
export declare class FTheadCommentItem {
    protected _comment: IThreadComment;
    /**
     * Create a new FTheadCommentItem
     * @param {IThreadComment|undefined} comment The comment
     * @returns {FTheadCommentItem} A new instance of FTheadCommentItem
     * @example
     * ```ts
     * const commentBuilder = univerAPI.newTheadComment();
     * console.log(commentBuilder);
     * ```
     */
    static create(comment?: IThreadComment): FTheadCommentItem;
    constructor(comment?: IThreadComment);
    /**
     * Get the person id of the comment
     * @returns {string} The person id of the comment
     * @example
     * ```ts
     * const commentBuilder = univerAPI.newTheadComment();
     * console.log(commentBuilder.personId);
     * ```
     */
    get personId(): string;
    /**
     * Get the date time of the comment
     * @returns {string} The date time of the comment
     * @example
     * ```ts
     * const commentBuilder = univerAPI.newTheadComment();
     * console.log(commentBuilder.dateTime);
     * ```
     */
    get dateTime(): string;
    /**
     * Get the content of the comment
     * @returns {RichTextValue} The content of the comment
     * @example
     * ```ts
     * const commentBuilder = univerAPI.newTheadComment();
     * console.log(commentBuilder.content);
     * ```
     */
    get content(): RichTextValue;
    /**
     * Get the id of the comment
     * @returns {string} The id of the comment
     * @example
     * ```ts
     * const commentBuilder = univerAPI.newTheadComment();
     * console.log(commentBuilder.id);
     * ```
     */
    get id(): string;
    /**
     * Get the thread id of the comment
     * @returns {string} The thread id of the comment
     * @example
     * ```ts
     * const commentBuilder = univerAPI.newTheadComment();
     * console.log(commentBuilder.threadId);
     * ```
     */
    get threadId(): string;
    /**
     * Copy the comment
     * @returns {FTheadCommentBuilder} The comment builder
     * @example
     * ```ts
     * const commentBuilder = univerAPI.newTheadComment();
     * const newCommentBuilder = commentBuilder.copy();
     * console.log(newCommentBuilder);
     * ```
     */
    copy(): FTheadCommentBuilder;
}
/**
 * A builder for thread comment. use {@link FUniver} `univerAPI.newTheadComment()` to create a new builder.
 */
export declare class FTheadCommentBuilder extends FTheadCommentItem {
    static create(comment?: IThreadComment): FTheadCommentBuilder;
    /**
     * Set the content of the comment
     * @param {IDocumentBody | RichTextValue} content The content of the comment
     * @returns {FTheadCommentBuilder} The comment builder for chaining
     * @example
     * ```ts
     * // Create a new comment
     * const richText = univerAPI.newRichText().insertText('hello univer');
     * const commentBuilder = univerAPI.newTheadComment()
     *   .setContent(richText);
     * console.log(commentBuilder.content);
     *
     * // Add the comment to the cell A1
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const cell = fWorksheet.getRange('A1');
     * const result = await cell.addCommentAsync(commentBuilder);
     * console.log(result);
     * ```
     */
    setContent(content: IDocumentBody | RichTextValue): FTheadCommentBuilder;
    /**
     * Set the person id of the comment
     * @param {string} userId The person id of the comment
     * @returns {FTheadCommentBuilder} The comment builder for chaining
     * @example
     * ```ts
     * // Create a new comment
     * const richText = univerAPI.newRichText().insertText('hello univer');
     * const commentBuilder = univerAPI.newTheadComment()
     *   .setContent(richText)
     *   .setPersonId('mock-user-id');
     * console.log(commentBuilder.personId);
     *
     * // Add the comment to the cell A1
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const cell = fWorksheet.getRange('A1');
     * const result = await cell.addCommentAsync(commentBuilder);
     * console.log(result);
     * ```
     */
    setPersonId(userId: string): FTheadCommentBuilder;
    /**
     * Set the date time of the comment
     * @param {Date} date The date time of the comment
     * @returns {FTheadCommentBuilder} The comment builder for chaining
     * @example
     * ```ts
     * // Create a new comment
     * const richText = univerAPI.newRichText().insertText('hello univer');
     * const commentBuilder = univerAPI.newTheadComment()
     *   .setContent(richText)
     *   .setDateTime(new Date('2025-02-21 14:22:22'));
     * console.log(commentBuilder.dateTime);
     *
     * // Add the comment to the cell A1
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const cell = fWorksheet.getRange('A1');
     * const result = await cell.addCommentAsync(commentBuilder);
     * console.log(result);
     * ```
     */
    setDateTime(date: Date): FTheadCommentBuilder;
    /**
     * Set the id of the comment
     * @param {string} id The id of the comment
     * @returns {FTheadCommentBuilder} The comment builder for chaining
     * @example
     * ```ts
     * // Create a new comment
     * const richText = univerAPI.newRichText().insertText('hello univer');
     * const commentBuilder = univerAPI.newTheadComment()
     *   .setContent(richText)
     *   .setId('mock-comment-id');
     * console.log(commentBuilder.id);
     *
     * // Add the comment to the cell A1
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const cell = fWorksheet.getRange('A1');
     * const result = await cell.addCommentAsync(commentBuilder);
     * console.log(result);
     * ```
     */
    setId(id: string): FTheadCommentBuilder;
    /**
     * Set the thread id of the comment
     * @param {string} threadId The thread id of the comment
     * @returns {FTheadCommentBuilder} The comment builder
     * @example
     * ```ts
     * // Create a new comment
     * const richText = univerAPI.newRichText().insertText('hello univer');
     * const commentBuilder = univerAPI.newTheadComment()
     *   .setContent(richText)
     *   .setThreadId('mock-thread-id');
     * console.log(commentBuilder.threadId);
     *
     * // Add the comment to the cell A1
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const cell = fWorksheet.getRange('A1');
     * const result = await cell.addCommentAsync(commentBuilder);
     * console.log(result);
     * ```
     */
    setThreadId(threadId: string): FTheadCommentBuilder;
    /**
     * Build the comment
     * @returns {IThreadComment} The comment
     * @example
     * ```ts
     * const richText = univerAPI.newRichText().insertText('hello univer');
     * const comment = univerAPI.newTheadComment()
     *   .setContent(richText)
     *   .setPersonId('mock-user-id')
     *   .setDateTime(new Date('2025-02-21 14:22:22'))
     *   .setId('mock-comment-id')
     *   .setThreadId('mock-thread-id')
     *   .build();
     * console.log(comment);
     * ```
     */
    build(): IThreadComment;
}
/**
 * A class that represents a thread comment already in the sheet.
 */
export declare class FThreadComment {
    private readonly _thread;
    private readonly _parent;
    private readonly _injector;
    private readonly _commandService;
    private readonly _univerInstanceService;
    private readonly _threadCommentModel;
    private readonly _userManagerService;
    /**
     * @ignore
     */
    constructor(_thread: IThreadComment | IBaseComment, _parent: IThreadComment | undefined, _injector: Injector, _commandService: ICommandService, _univerInstanceService: IUniverInstanceService, _threadCommentModel: SheetsThreadCommentModel, _userManagerService: UserManagerService);
    private _getRef;
    /**
     * Whether the comment is a root comment
     * @returns {boolean} Whether the comment is a root comment
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const comments = fWorksheet.getComments();
     * comments.forEach((comment) => {
     *   console.log(comment.getIsRoot());
     * });
     * ```
     */
    getIsRoot(): boolean;
    /**
     * Get the comment data
     * @returns {IBaseComment} The comment data
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const comments = fWorksheet.getComments();
     * comments.forEach((comment) => {
     *   console.log(comment.getCommentData());
     * });
     * ```
     */
    getCommentData(): IBaseComment;
    /**
     * Get the replies of the comment
     * @returns {FThreadComment[]} the replies of the comment
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const comments = fWorksheet.getComments();
     * comments.forEach((comment) => {
     *   if (comment.getIsRoot()) {
     *     const replies = comment.getReplies();
     *     replies.forEach((reply) => {
     *       console.log(reply.getCommentData());
     *     });
     *   }
     * });
     * ```
     */
    getReplies(): FThreadComment[] | undefined;
    /**
     * Get the range of the comment
     * @returns {FRange | null} The range of the comment
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const comments = fWorksheet.getComments();
     * comments.forEach((comment) => {
     *   console.log(comment.getRange().getA1Notation());
     * });
     * ```
     */
    getRange(): FRange | null;
    /**
     * @deprecated use `getRichText` as instead
     */
    getContent(): IDocumentBody;
    /**
     * Get the rich text of the comment
     * @returns {RichTextValue} The rich text of the comment
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const comments = fWorksheet.getComments();
     * comments.forEach((comment) => {
     *   console.log(comment.getRichText());
     * });
     * ```
     */
    getRichText(): RichTextValue;
    /**
     * Delete the comment and it's replies
     * @returns {Promise<boolean>} Whether the comment is deleted successfully
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const comments = fWorksheet.getComments();
     *
     * // Delete the first comment
     * const result = await comments[0]?.deleteAsync();
     * console.log(result);
     * ```
     */
    deleteAsync(): Promise<boolean>;
    /**
     * @deprecated use `deleteAsync` as instead.
     */
    delete(): Promise<boolean>;
    /**
     * @deprecated use `updateAsync` as instead
     */
    update(content: IDocumentBody): Promise<boolean>;
    /**
     * Update the comment content
     * @param {IDocumentBody | RichTextValue} content The new content of the comment
     * @returns {Promise<boolean>} Whether the comment is updated successfully
     * @example
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
     * // Update the comment after 3 seconds
     * setTimeout(async () => {
     *   const comment = fWorksheet.getCommentById('mock-comment-id');
     *   const newRichText = univerAPI.newRichText().insertText('Hello Univer AI');
     *   const result = await comment.updateAsync(newRichText);
     *   console.log(result);
     * }, 3000);
     * ```
     */
    updateAsync(content: IDocumentBody | RichTextValue): Promise<boolean>;
    /**
     * @deprecated use `resolveAsync` as instead
     */
    resolve(resolved?: boolean): Promise<boolean>;
    /**
     * Resolve the comment
     * @param {boolean} resolved Whether the comment is resolved
     * @returns {Promise<boolean>} Set the comment to resolved or not operation result
     * @example
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
     * // Resolve the comment after 3 seconds
     * setTimeout(async () => {
     *   const comment = fWorksheet.getCommentById('mock-comment-id');
     *   const result = await comment.resolveAsync(true);
     *   console.log(result);
     * }, 3000);
     * ```
     */
    resolveAsync(resolved?: boolean): Promise<boolean>;
    /**
     * Reply to the comment
     * @param {FTheadCommentBuilder} comment The comment to reply to
     * @returns {Promise<boolean>} Whether the comment is replied successfully
     * @example
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
     * // Reply to the comment
     * const replyText = univerAPI.newRichText().insertText('Hello Univer AI');
     * const reply = univerAPI.newTheadComment().setContent(replyText);
     * const comment = fWorksheet.getCommentById('mock-comment-id');
     * const result = await comment.replyAsync(reply);
     * console.log(result);
     * ```
     */
    replyAsync(comment: FTheadCommentBuilder): Promise<boolean>;
}
