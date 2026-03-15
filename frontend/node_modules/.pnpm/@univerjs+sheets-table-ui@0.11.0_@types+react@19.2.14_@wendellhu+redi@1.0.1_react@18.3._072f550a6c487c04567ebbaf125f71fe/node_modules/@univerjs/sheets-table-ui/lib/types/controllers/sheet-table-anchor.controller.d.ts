import { Workbook, Disposable, ICommandService, Injector, IPermissionService, IUniverInstanceService } from '@univerjs/core';
import { IRenderContext, IRenderModule, IRenderManagerService } from '@univerjs/engine-render';
import { WorkbookPermissionService } from '@univerjs/sheets';
import { TableManager } from '@univerjs/sheets-table';
import { SheetScrollManagerService, SheetSkeletonManagerService } from '@univerjs/sheets-ui';
import { IUIPartsService } from '@univerjs/ui';
export interface ITableAnchorPosition {
    x: number;
    y: number;
    tableId: string;
    tableName: string;
}
export declare class SheetTableAnchorController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _injector;
    private readonly _sheetSkeletonManagerService;
    private readonly _renderManagerService;
    private readonly _commandService;
    private readonly _univerInstanceService;
    protected readonly _uiPartsService: IUIPartsService;
    private readonly _tableManager;
    private readonly _scrollManagerService;
    private readonly _workbookPermissionService;
    private readonly _permissionService;
    private _anchorVisible$;
    private _timer;
    private _anchorPosition$;
    anchorPosition$: import('rxjs').Observable<ITableAnchorPosition[]>;
    constructor(_context: IRenderContext<Workbook>, _injector: Injector, _sheetSkeletonManagerService: SheetSkeletonManagerService, _renderManagerService: IRenderManagerService, _commandService: ICommandService, _univerInstanceService: IUniverInstanceService, _uiPartsService: IUIPartsService, _tableManager: TableManager, _scrollManagerService: SheetScrollManagerService, _workbookPermissionService: WorkbookPermissionService, _permissionService: IPermissionService);
    private _initUI;
    private _initListener;
    private _initTableAnchor;
}
