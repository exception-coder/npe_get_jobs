import { DocumentDataModel, Disposable, ICommandService, IContextService, IUniverInstanceService } from '@univerjs/core';
import { IRenderContext, IRenderModule, IRenderManagerService } from '@univerjs/engine-render';
import { DocSelectionManagerService, DocSkeletonManagerService } from '@univerjs/docs';
import { DocPageLayoutService } from '../../services/doc-page-layout.service';
import { IEditorService } from '../../services/editor/editor-manager.service';
export declare class DocZoomRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _contextService;
    private readonly _docSkeletonManagerService;
    private readonly _univerInstanceService;
    private readonly _commandService;
    private readonly _textSelectionManagerService;
    private readonly _editorService;
    private readonly _docPageLayoutService;
    private readonly _renderManagerService;
    private _isSheetEditor;
    constructor(_context: IRenderContext<DocumentDataModel>, _contextService: IContextService, _docSkeletonManagerService: DocSkeletonManagerService, _univerInstanceService: IUniverInstanceService, _commandService: ICommandService, _textSelectionManagerService: DocSelectionManagerService, _editorService: IEditorService, _docPageLayoutService: DocPageLayoutService, _renderManagerService: IRenderManagerService);
    private _initRenderRefresher;
    private _initSkeletonListener;
    private _initCommandExecutedListener;
    updateViewZoom(zoomRatio: number, needRefreshSelection?: boolean): void;
    private _initZoomEventListener;
}
