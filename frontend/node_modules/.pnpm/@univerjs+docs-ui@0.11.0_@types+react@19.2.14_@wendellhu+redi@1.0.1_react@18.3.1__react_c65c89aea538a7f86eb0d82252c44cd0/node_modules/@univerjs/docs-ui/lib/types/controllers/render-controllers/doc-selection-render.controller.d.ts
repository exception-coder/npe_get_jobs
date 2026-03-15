import { DocumentDataModel, Disposable, ICommandService, IUniverInstanceService } from '@univerjs/core';
import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { DocSelectionManagerService, DocSkeletonManagerService } from '@univerjs/docs';
import { IEditorService } from '../../services/editor/editor-manager.service';
import { DocSelectionRenderService } from '../../services/selection/doc-selection-render.service';
export declare class DocSelectionRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _commandService;
    private readonly _editorService;
    private readonly _instanceSrv;
    private readonly _docSelectionRenderService;
    private readonly _docSkeletonManagerService;
    private readonly _docSelectionManagerService;
    private _loadedMap;
    constructor(_context: IRenderContext<DocumentDataModel>, _commandService: ICommandService, _editorService: IEditorService, _instanceSrv: IUniverInstanceService, _docSelectionRenderService: DocSelectionRenderService, _docSkeletonManagerService: DocSkeletonManagerService, _docSelectionManagerService: DocSelectionManagerService);
    private _initialize;
    private _init;
    private _refreshListener;
    private _syncSelection;
    private _initialMain;
    private _getTransformCoordForDocumentOffset;
    private _isEditorReadOnly;
    private _setEditorFocus;
    private _commandExecutedListener;
    private _skeletonListener;
}
