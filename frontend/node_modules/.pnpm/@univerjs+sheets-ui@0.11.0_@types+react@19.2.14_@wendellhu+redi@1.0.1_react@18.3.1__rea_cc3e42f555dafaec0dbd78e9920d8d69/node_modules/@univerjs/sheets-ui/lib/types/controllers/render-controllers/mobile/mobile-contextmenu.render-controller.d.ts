import { Workbook, Disposable } from '@univerjs/core';
import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { SheetsSelectionsService } from '@univerjs/sheets';
import { IContextMenuService, ILayoutService } from '@univerjs/ui';
import { ISheetSelectionRenderService } from '../../../services/selection/base-selection-render.service';
import { SheetSkeletonManagerService } from '../../../services/sheet-skeleton-manager.service';
/**
 * On mobile devices, the context menu would popup when
 *
 * @ignore
 */
export declare class SheetContextMenuMobileRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _layoutService;
    private readonly _contextMenuService;
    private readonly _selectionManagerService;
    private readonly _selectionRenderService;
    private readonly _sheetSkeletonManagerService;
    constructor(_context: IRenderContext<Workbook>, _layoutService: ILayoutService, _contextMenuService: IContextMenuService, _selectionManagerService: SheetsSelectionsService, _selectionRenderService: ISheetSelectionRenderService, _sheetSkeletonManagerService: SheetSkeletonManagerService);
    private _init;
}
