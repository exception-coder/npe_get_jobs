import { DocumentDataModel, Disposable, ICommandService } from '@univerjs/core';
import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { DocSelectionManagerService, DocSkeletonManagerService } from '@univerjs/docs';
import { DocEventManagerService } from '@univerjs/docs-ui';
import { DocHyperLinkPopupService } from '../../services/hyper-link-popup.service';
export declare class DocHyperLinkEventRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _docEventManagerService;
    private readonly _commandService;
    private readonly _hyperLinkPopupService;
    private readonly _docSkeletonManagerService;
    private readonly _docSelectionManagerService;
    get _skeleton(): import('@univerjs/engine-render').DocumentSkeleton;
    constructor(_context: IRenderContext<DocumentDataModel>, _docEventManagerService: DocEventManagerService, _commandService: ICommandService, _hyperLinkPopupService: DocHyperLinkPopupService, _docSkeletonManagerService: DocSkeletonManagerService, _docSelectionManagerService: DocSelectionManagerService);
    private _hideInfoPopup;
    private _initHover;
    private _initClick;
}
