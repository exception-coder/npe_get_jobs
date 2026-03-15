import { ICommand, ITextRange } from '@univerjs/core';
import { IThreadComment } from '@univerjs/thread-comment';
export interface IAddDocCommentComment {
    unitId: string;
    comment: IThreadComment;
    range: ITextRange;
}
export declare const AddDocCommentComment: ICommand<IAddDocCommentComment>;
