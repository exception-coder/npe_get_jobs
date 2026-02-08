import { Workbook, Disposable } from '@univerjs/core';
import { IRenderContext, IRenderModule, IRenderManagerService } from '@univerjs/engine-render';
import { SheetSkeletonManagerService } from '../../services/sheet-skeleton-manager.service';
export declare class SheetSkeletonRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _sheetSkeletonManagerService;
    private readonly _renderManagerService;
    constructor(_context: IRenderContext<Workbook>, _sheetSkeletonManagerService: SheetSkeletonManagerService, _renderManagerService: IRenderManagerService);
    private _updateSceneSize;
}
