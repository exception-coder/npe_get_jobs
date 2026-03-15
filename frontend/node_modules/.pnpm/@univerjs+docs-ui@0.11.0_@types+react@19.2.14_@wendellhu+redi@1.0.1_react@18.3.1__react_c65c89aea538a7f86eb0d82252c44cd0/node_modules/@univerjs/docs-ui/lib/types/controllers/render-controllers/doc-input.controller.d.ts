import { DocumentDataModel, Disposable, ICommandService } from '@univerjs/core';
import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { DocSkeletonManagerService } from '@univerjs/docs';
import { DocMenuStyleService } from '../../services/doc-menu-style.service';
import { DocSelectionRenderService } from '../../services/selection/doc-selection-render.service';
export declare class DocInputController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _docSelectionRenderService;
    private readonly _docSkeletonManagerService;
    private readonly _commandService;
    private readonly _docMenuStyleService;
    private _onInputSubscription;
    constructor(_context: IRenderContext<DocumentDataModel>, _docSelectionRenderService: DocSelectionRenderService, _docSkeletonManagerService: DocSkeletonManagerService, _commandService: ICommandService, _docMenuStyleService: DocMenuStyleService);
    dispose(): void;
    private _init;
    private _initialNormalInput;
}
