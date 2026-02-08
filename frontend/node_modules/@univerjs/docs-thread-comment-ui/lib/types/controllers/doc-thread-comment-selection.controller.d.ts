import { Disposable, ICommandService, IUniverInstanceService } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { ThreadCommentModel } from '@univerjs/thread-comment';
import { ThreadCommentPanelService } from '@univerjs/thread-comment-ui';
import { DocThreadCommentService } from '../services/doc-thread-comment.service';
export declare class DocThreadCommentSelectionController extends Disposable {
    private readonly _threadCommentPanelService;
    private readonly _univerInstanceService;
    private readonly _commandService;
    private readonly _docThreadCommentService;
    private readonly _renderManagerService;
    private readonly _threadCommentModel;
    constructor(_threadCommentPanelService: ThreadCommentPanelService, _univerInstanceService: IUniverInstanceService, _commandService: ICommandService, _docThreadCommentService: DocThreadCommentService, _renderManagerService: IRenderManagerService, _threadCommentModel: ThreadCommentModel);
    private _initSelectionChange;
    private _initActiveCommandChange;
}
