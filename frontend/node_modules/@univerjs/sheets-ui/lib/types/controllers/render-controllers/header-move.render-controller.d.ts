import { IRange, Workbook, Disposable, ICommandService, InterceptorManager } from '@univerjs/core';
import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { SheetsSelectionsService } from '@univerjs/sheets';
import { SheetSkeletonManagerService } from '../../services/sheet-skeleton-manager.service';
export declare const HEADER_MOVE_PERMISSION_CHECK: import('@univerjs/core').IInterceptor<boolean, IRange>;
export declare class HeaderMoveRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _sheetSkeletonManagerService;
    private readonly _commandService;
    private _startOffsetX;
    private _startOffsetY;
    private _moveHelperBackgroundShape;
    private _moveHelperLineShape;
    private _headerPointerDownSubs;
    private _headerPointerMoveSubs;
    private _headerPointerLeaveSubs;
    private _dragHeaderMoveSub;
    private _scenePointerUpSub;
    private _scrollTimer;
    private _changeFromColumn;
    private _changeFromRow;
    private _changeToColumn;
    private _changeToRow;
    readonly interceptor: InterceptorManager<{
        HEADER_MOVE_PERMISSION_CHECK: import('@univerjs/core').IInterceptor<boolean, IRange>;
    }>;
    private readonly _workbookSelections;
    constructor(_context: IRenderContext<Workbook>, selectionManagerService: SheetsSelectionsService, _sheetSkeletonManagerService: SheetSkeletonManagerService, _commandService: ICommandService);
    dispose(): void;
    private _init;
    private _initialRowOrColumn;
    private _rowColumnMoving;
    private _clearObserverEvent;
    private _newBackgroundAndLine;
    private _disposeBackgroundAndLine;
}
