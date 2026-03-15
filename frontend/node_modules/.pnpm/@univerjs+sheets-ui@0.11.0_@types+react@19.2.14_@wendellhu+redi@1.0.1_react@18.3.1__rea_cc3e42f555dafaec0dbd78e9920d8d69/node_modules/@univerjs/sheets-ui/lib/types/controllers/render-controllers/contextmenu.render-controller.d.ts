import { Workbook, Disposable } from '@univerjs/core';
import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { SheetsSelectionsService } from '@univerjs/sheets';
import { IContextMenuService } from '@univerjs/ui';
import { ISheetSelectionRenderService } from '../../services/selection/base-selection-render.service';
/**
 * This controller subscribe to context menu events in sheet rendering views and invoke context menu at a correct
 * position and with correct menu type.
 */
export declare class SheetContextMenuRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _contextMenuService;
    private readonly _selectionManagerService;
    private readonly _selectionRenderService;
    constructor(_context: IRenderContext<Workbook>, _contextMenuService: IContextMenuService, _selectionManagerService: SheetsSelectionsService, _selectionRenderService: ISheetSelectionRenderService);
    private _init;
}
