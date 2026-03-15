import { Disposable, ICommandService, Workbook } from '@univerjs/core';
import { IContextMenuService } from '@univerjs/ui';
import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
/**
 * This controller subscribe to context menu events in sheet rendering views and invoke context menu at a correct
 * position and with correct menu type.
 */
export declare class DocContextMenuRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _contextMenuService;
    private readonly _commandService;
    constructor(_context: IRenderContext<Workbook>, _contextMenuService: IContextMenuService, _commandService: ICommandService);
    private _initPointerDown;
    private _initEditChange;
}
