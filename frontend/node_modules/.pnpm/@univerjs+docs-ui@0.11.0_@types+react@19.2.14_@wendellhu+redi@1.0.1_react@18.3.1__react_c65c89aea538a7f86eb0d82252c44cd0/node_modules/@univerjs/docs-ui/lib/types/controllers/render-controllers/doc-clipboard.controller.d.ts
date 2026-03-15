import { DocumentDataModel, ICommandService, IContextService, RxDisposable } from '@univerjs/core';
import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { IDocClipboardService } from '../../services/clipboard/clipboard.service';
import { IEditorService } from '../../services/editor/editor-manager.service';
import { DocSelectionRenderService } from '../../services/selection/doc-selection-render.service';
export declare class DocClipboardController extends RxDisposable implements IRenderModule {
    private readonly _context;
    private readonly _commandService;
    private readonly _docClipboardService;
    private readonly _docSelectionRenderService;
    private readonly _contextService;
    private readonly _editorService;
    constructor(_context: IRenderContext<DocumentDataModel>, _commandService: ICommandService, _docClipboardService: IDocClipboardService, _docSelectionRenderService: DocSelectionRenderService, _contextService: IContextService, _editorService: IEditorService);
    private _init;
    private _initLegacyPasteCommand;
}
