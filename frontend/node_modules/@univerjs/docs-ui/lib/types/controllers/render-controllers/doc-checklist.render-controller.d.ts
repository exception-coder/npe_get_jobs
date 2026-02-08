import { DocumentDataModel, Disposable, ICommandService } from '@univerjs/core';
import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { DocSelectionManagerService, DocSkeletonManagerService } from '@univerjs/docs';
import { DocEventManagerService } from '../../services/doc-event-manager.service';
export declare class DocChecklistRenderController extends Disposable implements IRenderModule {
    private _context;
    private readonly _docSkeletonManagerService;
    private readonly _commandService;
    private readonly _docEventManagerService;
    private readonly _textSelectionManagerService;
    constructor(_context: IRenderContext<DocumentDataModel>, _docSkeletonManagerService: DocSkeletonManagerService, _commandService: ICommandService, _docEventManagerService: DocEventManagerService, _textSelectionManagerService: DocSelectionManagerService);
    private _initPointerDownObserver;
    private _initHoverCursor;
    private _getTransformCoordForDocumentOffset;
}
