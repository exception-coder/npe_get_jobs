import { DocumentDataModel, ICommandService, IUniverInstanceService, RxDisposable } from '@univerjs/core';
import { IRenderContext, IRenderModule, IRenderManagerService } from '@univerjs/engine-render';
import { DocSkeletonManagerService } from '@univerjs/docs';
import { IEditorService } from '../../services/editor/editor-manager.service';
import { DocSelectionRenderService } from '../../services/selection/doc-selection-render.service';
export declare class DocRenderController extends RxDisposable implements IRenderModule {
    private readonly _context;
    private readonly _commandService;
    private readonly _docSelectionRenderService;
    private readonly _docSkeletonManagerService;
    private readonly _editorService;
    private readonly _renderManagerService;
    private readonly _univerInstanceService;
    constructor(_context: IRenderContext<DocumentDataModel>, _commandService: ICommandService, _docSelectionRenderService: DocSelectionRenderService, _docSkeletonManagerService: DocSkeletonManagerService, _editorService: IEditorService, _renderManagerService: IRenderManagerService, _univerInstanceService: IUniverInstanceService);
    reRender(unitId: string): void;
    private _addNewRender;
    private _addComponent;
    private _initRenderRefresh;
    private _create;
    private _initCommandListener;
    private _recalculateSizeBySkeleton;
}
