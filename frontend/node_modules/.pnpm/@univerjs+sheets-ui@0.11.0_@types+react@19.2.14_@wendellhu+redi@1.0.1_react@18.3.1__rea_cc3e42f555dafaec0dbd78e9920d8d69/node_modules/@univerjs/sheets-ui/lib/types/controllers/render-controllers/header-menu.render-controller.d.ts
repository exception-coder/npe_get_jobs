import { Workbook, Disposable, ICommandService } from '@univerjs/core';
import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { SheetsSelectionsService } from '@univerjs/sheets';
import { IContextMenuService } from '@univerjs/ui';
import { SheetSkeletonManagerService } from '../../services/sheet-skeleton-manager.service';
/**
 * header highlight
 * column menu: show, hover and mousedown event
 */
export declare class HeaderMenuRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _sheetSkeletonManagerService;
    private readonly _contextMenuService;
    private readonly _commandService;
    private readonly _selectionManagerService;
    private _hoverRect;
    private _hoverMenu;
    private _currentColumn;
    private _headerPointerSubs;
    private _colHeaderPointerSubs;
    constructor(_context: IRenderContext<Workbook>, _sheetSkeletonManagerService: SheetSkeletonManagerService, _contextMenuService: IContextMenuService, _commandService: ICommandService, _selectionManagerService: SheetsSelectionsService);
    dispose(): void;
    private _initialize;
    private _initialHover;
    private _initialHoverMenu;
    private _getSelectionOnColumn;
}
