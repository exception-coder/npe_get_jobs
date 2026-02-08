import { Workbook, Disposable, IPermissionService } from '@univerjs/core';
import { IRenderContext, IRenderModule, RenderManagerService } from '@univerjs/engine-render';
import { SheetSkeletonManagerService } from '../services/sheet-skeleton-manager.service';
export declare class CellCustomRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _sheetSkeletonManagerService;
    private readonly _renderManagerService;
    private readonly _permissionService;
    private _enterActiveRender;
    constructor(_context: IRenderContext<Workbook>, _sheetSkeletonManagerService: SheetSkeletonManagerService, _renderManagerService: RenderManagerService, _permissionService: IPermissionService);
    private _initEventBinding;
}
