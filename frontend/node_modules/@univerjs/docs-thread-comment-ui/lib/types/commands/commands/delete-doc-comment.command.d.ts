import { ICommand } from '@univerjs/core';
export interface IDeleteDocCommentComment {
    unitId: string;
    commentId: string;
}
export declare const DeleteDocCommentComment: ICommand<IDeleteDocCommentComment>;
