import { DocumentDataModel, Disposable, ICommandService, IUniverInstanceService, LifecycleService } from '@univerjs/core';
import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { DocSkeletonManagerService } from '@univerjs/docs';
import { IEditorService } from '@univerjs/docs-ui';
import { IDrawingManagerService } from '@univerjs/drawing';
import { DocRefreshDrawingsService } from '../../services/doc-refresh-drawings.service';
export declare class DocDrawingTransformUpdateController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _docSkeletonManagerService;
    private readonly _commandService;
    private readonly _editorService;
    private readonly _drawingManagerService;
    private readonly _docRefreshDrawingsService;
    private _univerInstanceService;
    private _lifecycleService;
    private _liquid;
    constructor(_context: IRenderContext<DocumentDataModel>, _docSkeletonManagerService: DocSkeletonManagerService, _commandService: ICommandService, _editorService: IEditorService, _drawingManagerService: IDrawingManagerService, _docRefreshDrawingsService: DocRefreshDrawingsService, _univerInstanceService: IUniverInstanceService, _lifecycleService: LifecycleService);
    private _initialize;
    private _initialRenderRefresh;
    private _commandExecutedListener;
    private _initResize;
    private _refreshDrawing;
    private _handleMultiDrawingsTransform;
    private _calculateDrawingPosition;
    private _drawingInitializeListener;
}
