import { DocumentDataModel, Disposable, ICommandService } from '@univerjs/core';
import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { DocSkeletonManagerService } from '@univerjs/docs';
import { DocIMEInputManagerService } from '../../services/doc-ime-input-manager.service';
import { DocSelectionRenderService } from '../../services/selection/doc-selection-render.service';
export declare class DocIMEInputController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _docSelectionRenderService;
    private readonly _docImeInputManagerService;
    private readonly _docSkeletonManagerService;
    private readonly _commandService;
    private _previousIMEContent;
    private _isCompositionStart;
    private _onStartSubscription;
    private _onUpdateSubscription;
    private _onEndSubscription;
    constructor(_context: IRenderContext<DocumentDataModel>, _docSelectionRenderService: DocSelectionRenderService, _docImeInputManagerService: DocIMEInputManagerService, _docSkeletonManagerService: DocSkeletonManagerService, _commandService: ICommandService);
    dispose(): void;
    private _initialize;
    private _initialOnCompositionstart;
    private _initialOnCompositionUpdate;
    private _initialOnCompositionend;
    private _updateContent;
    private _resetIME;
}
