import { ICommand } from '@univerjs/core';
export declare const ToggleSheetCommentPanelOperation: ICommand;
export interface ISetActiveCommentOperationParams {
    unitId: string;
    subUnitId: string;
    commentId: string;
}
export declare const SetActiveCommentOperation: ICommand<ISetActiveCommentOperationParams>;
