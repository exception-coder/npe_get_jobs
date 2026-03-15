import { DocumentDataModel, ITextRange, Nullable, RxDisposable } from '@univerjs/core';
import { INodePosition, IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { DocSelectionManagerService, DocSkeletonManagerService } from '@univerjs/docs';
import { IEditorService } from '../../services/editor/editor-manager.service';
export declare class DocBackScrollRenderController extends RxDisposable implements IRenderModule {
    private readonly _context;
    private readonly _textSelectionManagerService;
    private readonly _editorService;
    private readonly _docSkeletonManagerService;
    constructor(_context: IRenderContext<DocumentDataModel>, _textSelectionManagerService: DocSelectionManagerService, _editorService: IEditorService, _docSkeletonManagerService: DocSkeletonManagerService);
    private _init;
    scrollToRange(range: ITextRange): void;
    scrollToNode(startNodePosition: Nullable<INodePosition>): void;
    private _scrollToSelection;
}
