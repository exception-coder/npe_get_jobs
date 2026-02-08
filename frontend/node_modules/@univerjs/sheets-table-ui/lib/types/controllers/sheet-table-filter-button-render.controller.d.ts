import { Workbook, ICommandService, Injector, RxDisposable } from '@univerjs/core';
import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { SheetInterceptorService } from '@univerjs/sheets';
import { TableManager } from '@univerjs/sheets-table';
import { SheetSkeletonManagerService } from '@univerjs/sheets-ui';
/**
 * Show selected range in filter.
 */
export declare class SheetsTableFilterButtonRenderController extends RxDisposable implements IRenderModule {
    private readonly _context;
    private readonly _injector;
    private readonly _sheetSkeletonManagerService;
    private readonly _sheetInterceptorService;
    private _tableManager;
    private readonly _commandService;
    private _buttonRenderDisposable;
    private _tableFilterButtonShapes;
    constructor(_context: IRenderContext<Workbook>, _injector: Injector, _sheetSkeletonManagerService: SheetSkeletonManagerService, _sheetInterceptorService: SheetInterceptorService, _tableManager: TableManager, _commandService: ICommandService);
    dispose(): void;
    private _initRenderer;
    private _initCommandExecuted;
    private _renderButtons;
    private _interceptCellContent;
    private _disposeRendering;
}
