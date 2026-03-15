import { Workbook, Disposable } from '@univerjs/core';
import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { ComponentManager } from '@univerjs/ui';
export declare class CellAlertRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    private _componentManager;
    constructor(_context: IRenderContext<Workbook>, _componentManager: ComponentManager);
    private _initComponent;
}
