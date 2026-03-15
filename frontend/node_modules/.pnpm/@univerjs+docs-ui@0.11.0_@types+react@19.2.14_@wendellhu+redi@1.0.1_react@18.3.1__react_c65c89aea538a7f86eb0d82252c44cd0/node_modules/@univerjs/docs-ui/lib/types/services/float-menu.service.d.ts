import { DocumentDataModel, IDisposable, Nullable, Disposable, IUniverInstanceService } from '@univerjs/core';
import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { DocSelectionManagerService } from '@univerjs/docs';
import { ComponentManager } from '@univerjs/ui';
import { DocCanvasPopManagerService } from './doc-popup-manager.service';
import { DocSelectionRenderService } from './selection/doc-selection-render.service';
export declare class DocFloatMenuService extends Disposable implements IRenderModule {
    private _context;
    private readonly _docSelectionManagerService;
    private readonly _docCanvasPopManagerService;
    private readonly _componentManager;
    private readonly _univerInstanceService;
    private readonly _docSelectionRenderService;
    private _floatMenu;
    constructor(_context: IRenderContext<DocumentDataModel>, _docSelectionManagerService: DocSelectionManagerService, _docCanvasPopManagerService: DocCanvasPopManagerService, _componentManager: ComponentManager, _univerInstanceService: IUniverInstanceService, _docSelectionRenderService: DocSelectionRenderService);
    get floatMenu(): Nullable<{
        disposable: IDisposable;
        start: number;
        end: number;
    }>;
    private _registerFloatMenu;
    private _initSelectionChange;
    private _hideFloatMenu;
    private _showFloatMenu;
}
