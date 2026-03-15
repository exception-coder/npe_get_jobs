import { Workbook, Injector, RxDisposable } from '@univerjs/core';
import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { TableManager } from '@univerjs/sheets-table';
import { SheetSkeletonManagerService } from '@univerjs/sheets-ui';
import { SheetTableThemeUIController } from './sheet-table-theme-ui.controller';
/**
 * Show selected range in filter.
 */
export declare class SheetsTableRenderController extends RxDisposable implements IRenderModule {
    private readonly _context;
    private readonly _injector;
    private readonly _sheetSkeletonManagerService;
    private _tableManager;
    private readonly _sheetTableThemeUIController;
    constructor(_context: IRenderContext<Workbook>, _injector: Injector, _sheetSkeletonManagerService: SheetSkeletonManagerService, _tableManager: TableManager, _sheetTableThemeUIController: SheetTableThemeUIController);
    private _dirtySkeleton;
    private _initListener;
}
