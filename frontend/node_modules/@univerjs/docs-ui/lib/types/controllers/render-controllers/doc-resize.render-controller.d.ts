import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { Disposable } from '@univerjs/core';
import { DocSelectionManagerService } from '@univerjs/docs';
import { DocPageLayoutService } from '../../services/doc-page-layout.service';
export declare class DocResizeRenderController extends Disposable implements IRenderModule {
    private _context;
    private readonly _docPageLayoutService;
    private readonly _textSelectionManagerService;
    constructor(_context: IRenderContext, _docPageLayoutService: DocPageLayoutService, _textSelectionManagerService: DocSelectionManagerService);
    private _initResize;
}
