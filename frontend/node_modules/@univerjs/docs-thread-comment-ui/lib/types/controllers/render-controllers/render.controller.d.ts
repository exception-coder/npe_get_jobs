import { DocumentDataModel, Disposable, ICommandService, IUniverInstanceService } from '@univerjs/core';
import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { DocInterceptorService } from '@univerjs/docs';
import { DocRenderController } from '@univerjs/docs-ui';
import { ThreadCommentModel } from '@univerjs/thread-comment';
import { ThreadCommentPanelService } from '@univerjs/thread-comment-ui';
export declare class DocThreadCommentRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _docInterceptorService;
    private readonly _threadCommentPanelService;
    private readonly _docRenderController;
    private readonly _univerInstanceService;
    private readonly _threadCommentModel;
    private readonly _commandService;
    constructor(_context: IRenderContext<DocumentDataModel>, _docInterceptorService: DocInterceptorService, _threadCommentPanelService: ThreadCommentPanelService, _docRenderController: DocRenderController, _univerInstanceService: IUniverInstanceService, _threadCommentModel: ThreadCommentModel, _commandService: ICommandService);
    private _initReRender;
    private _interceptorViewModel;
    private _initSyncComments;
}
