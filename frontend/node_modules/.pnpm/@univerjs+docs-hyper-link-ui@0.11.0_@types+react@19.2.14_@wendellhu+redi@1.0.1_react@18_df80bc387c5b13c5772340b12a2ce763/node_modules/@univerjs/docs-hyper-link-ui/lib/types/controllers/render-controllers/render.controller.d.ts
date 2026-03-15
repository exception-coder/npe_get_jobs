import { DocumentDataModel, Disposable } from '@univerjs/core';
import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { DocInterceptorService } from '@univerjs/docs';
import { DocRenderController } from '@univerjs/docs-ui';
import { DocHyperLinkPopupService } from '../../services/hyper-link-popup.service';
export declare class DocHyperLinkRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _docInterceptorService;
    private readonly _hyperLinkService;
    private readonly _docRenderController;
    constructor(_context: IRenderContext<DocumentDataModel>, _docInterceptorService: DocInterceptorService, _hyperLinkService: DocHyperLinkPopupService, _docRenderController: DocRenderController);
    private _init;
    private _initReRender;
}
