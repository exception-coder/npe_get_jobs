import { Workbook, Disposable, ICommandService } from '@univerjs/core';
import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { IMarkSelectionService } from '../services/mark-selection/mark-selection.service';
import { SheetSkeletonManagerService } from '../services/sheet-skeleton-manager.service';
export declare class MarkSelectionRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    private _markSelectionService;
    private _commandService;
    private _sheetSkeletonManagerService;
    constructor(_context: IRenderContext<Workbook>, _markSelectionService: IMarkSelectionService, _commandService: ICommandService, _sheetSkeletonManagerService: SheetSkeletonManagerService);
    private _initListeners;
    private _addRemoveListener;
    private _addRefreshListener;
}
