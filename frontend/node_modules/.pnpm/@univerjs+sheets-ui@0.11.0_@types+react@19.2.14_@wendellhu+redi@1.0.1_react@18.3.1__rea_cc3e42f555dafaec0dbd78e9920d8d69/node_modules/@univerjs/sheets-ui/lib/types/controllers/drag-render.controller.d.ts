import { Workbook, Disposable } from '@univerjs/core';
import { IRenderContext, IRenderModule, IRenderManagerService } from '@univerjs/engine-render';
import { DragManagerService } from '../services/drag-manager.service';
import { SheetSkeletonManagerService } from '../services/sheet-skeleton-manager.service';
export declare class DragRenderController extends Disposable implements IRenderModule, IRenderModule {
    private readonly _context;
    private _renderManagerService;
    private _dragManagerService;
    private readonly _sheetSkeletonManagerService;
    constructor(_context: IRenderContext<Workbook>, _renderManagerService: IRenderManagerService, _dragManagerService: DragManagerService, _sheetSkeletonManagerService: SheetSkeletonManagerService);
    private _initDragEvent;
}
