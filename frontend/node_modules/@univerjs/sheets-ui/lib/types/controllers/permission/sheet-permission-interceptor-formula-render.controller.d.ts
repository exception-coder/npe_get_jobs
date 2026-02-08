import { Workbook, DisposableCollection, IPermissionService, IUniverInstanceService, RxDisposable } from '@univerjs/core';
import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { RangeProtectionCache } from '@univerjs/sheets';
import { StatusBarController } from '../status-bar.controller';
export declare class SheetPermissionInterceptorFormulaRenderController extends RxDisposable implements IRenderModule {
    private readonly _context;
    private readonly _univerInstanceService;
    private readonly _permissionService;
    private readonly _statusBarController;
    private _rangeProtectionCache;
    disposableCollection: DisposableCollection;
    constructor(_context: IRenderContext<Workbook>, _univerInstanceService: IUniverInstanceService, _permissionService: IPermissionService, _statusBarController: StatusBarController, _rangeProtectionCache: RangeProtectionCache);
    private _initStatusBarPermissionInterceptor;
}
