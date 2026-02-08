import { Workbook, Disposable, ICommandService, InterceptorManager } from '@univerjs/core';
import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { SheetsSelectionsService } from '@univerjs/sheets';
import { SheetSkeletonManagerService } from '../../services/sheet-skeleton-manager.service';
export declare const HEADER_RESIZE_PERMISSION_CHECK: import('@univerjs/core').IInterceptor<boolean, {
    row?: number;
    col?: number;
}>;
export declare class HeaderResizeRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _sheetSkeletonManagerService;
    private readonly _selectionManagerService;
    private readonly _commandService;
    private _currentRow;
    private _currentColumn;
    private _rowResizeRect;
    private _columnResizeRect;
    private _headerPointerSubs;
    private _scenePointerMoveSub;
    private _scenePointerUpSub;
    private _resizeHelperShape;
    private _startOffsetX;
    private _startOffsetY;
    interceptor: InterceptorManager<{
        HEADER_RESIZE_PERMISSION_CHECK: import('@univerjs/core').IInterceptor<boolean, {
            row?: number;
            col?: number;
        }>;
    }>;
    constructor(_context: IRenderContext<Workbook>, _sheetSkeletonManagerService: SheetSkeletonManagerService, _selectionManagerService: SheetsSelectionsService, _commandService: ICommandService);
    dispose(): void;
    private _init;
    private _initialHover;
    private _initialHoverResize;
    private _clearObserverEvent;
}
