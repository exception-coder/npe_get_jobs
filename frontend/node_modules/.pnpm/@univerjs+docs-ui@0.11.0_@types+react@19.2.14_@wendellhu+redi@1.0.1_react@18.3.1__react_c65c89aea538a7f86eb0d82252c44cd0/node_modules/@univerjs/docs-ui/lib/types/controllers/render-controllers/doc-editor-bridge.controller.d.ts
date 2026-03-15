import { DocumentDataModel, Disposable, ICommandService, IUniverInstanceService } from '@univerjs/core';
import { IRenderContext, IRenderModule, IRenderManagerService } from '@univerjs/engine-render';
import { DocSkeletonManagerService } from '@univerjs/docs';
import { IEditorService } from '../../services/editor/editor-manager.service';
import { DocSelectionRenderService } from '../../services/selection/doc-selection-render.service';
export declare class DocEditorBridgeController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _univerInstanceService;
    private readonly _editorService;
    private readonly _commandService;
    private readonly _docSelectionRenderService;
    private readonly _docSkeletonManagerService;
    private readonly _renderManagerService;
    private _initialEditors;
    constructor(_context: IRenderContext<DocumentDataModel>, _univerInstanceService: IUniverInstanceService, _editorService: IEditorService, _commandService: ICommandService, _docSelectionRenderService: DocSelectionRenderService, _docSkeletonManagerService: DocSkeletonManagerService, _renderManagerService: IRenderManagerService);
    private _initialize;
    private _resize;
    private _initialBlur;
    private _initialFocus;
    /**
     * Listen to document edits to refresh the size of the formula editor.
     */
    private _commandExecutedListener;
}
