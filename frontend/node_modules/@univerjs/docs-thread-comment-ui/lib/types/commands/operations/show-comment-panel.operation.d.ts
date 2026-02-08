import { ICommand } from '@univerjs/core';
import { ActiveCommentInfo } from '@univerjs/thread-comment-ui';
export interface IShowCommentPanelOperationParams {
    activeComment: ActiveCommentInfo;
}
export declare const ShowCommentPanelOperation: ICommand<IShowCommentPanelOperationParams>;
export declare const ToggleCommentPanelOperation: ICommand;
export declare const StartAddCommentOperation: ICommand;
