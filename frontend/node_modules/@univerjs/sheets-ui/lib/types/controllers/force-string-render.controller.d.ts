import { Workbook, IConfigService, RxDisposable } from '@univerjs/core';
import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { SheetInterceptorService } from '@univerjs/sheets';
import { SheetSkeletonManagerService } from '../services/sheet-skeleton-manager.service';
export declare class ForceStringRenderController extends RxDisposable implements IRenderModule {
    private readonly _context;
    private readonly _sheetSkeletonManagerService;
    private readonly _sheetInterceptorService;
    private readonly _configService;
    constructor(_context: IRenderContext<Workbook>, _sheetSkeletonManagerService: SheetSkeletonManagerService, _sheetInterceptorService: SheetInterceptorService, _configService: IConfigService);
    private _initViewModelIntercept;
}
