import { Workbook, Disposable } from '@univerjs/core';
import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { HoverManagerService } from '../services/hover-manager.service';
import { SheetScrollManagerService } from '../services/scroll-manager.service';
import { SheetSkeletonManagerService } from '../services/sheet-skeleton-manager.service';
export declare class HoverRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    private _hoverManagerService;
    private _sheetSkeletonManagerService;
    private _scrollManagerService;
    private _active;
    get active(): boolean;
    constructor(_context: IRenderContext<Workbook>, _hoverManagerService: HoverManagerService, _sheetSkeletonManagerService: SheetSkeletonManagerService, _scrollManagerService: SheetScrollManagerService);
    private _initPointerEvent;
    private _initScrollEvent;
}
