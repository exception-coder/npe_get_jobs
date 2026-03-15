import { Workbook, DisposableCollection, IPermissionService, IUniverInstanceService, RxDisposable } from '@univerjs/core';
import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { RangeProtectionCache, RangeProtectionRuleModel, SheetsSelectionsService } from '@univerjs/sheets';
import { ISheetSelectionRenderService } from '../../services/selection/base-selection-render.service';
import { HeaderFreezeRenderController } from '../render-controllers/freeze.render-controller';
import { HeaderMoveRenderController } from '../render-controllers/header-move.render-controller';
import { HeaderResizeRenderController } from '../render-controllers/header-resize.render-controller';
export declare class SheetPermissionInterceptorCanvasRenderController extends RxDisposable implements IRenderModule {
    private readonly _context;
    private readonly _univerInstanceService;
    private readonly _permissionService;
    private readonly _selectionManagerService;
    private _rangeProtectionRuleModel;
    private _headerMoveRenderController;
    private _selectionRenderService;
    private _headerFreezeRenderController;
    private _rangeProtectionCache;
    private _headerResizeRenderController?;
    disposableCollection: DisposableCollection;
    constructor(_context: IRenderContext<Workbook>, _univerInstanceService: IUniverInstanceService, _permissionService: IPermissionService, _selectionManagerService: SheetsSelectionsService, _rangeProtectionRuleModel: RangeProtectionRuleModel, _headerMoveRenderController: HeaderMoveRenderController, _selectionRenderService: ISheetSelectionRenderService, _headerFreezeRenderController: HeaderFreezeRenderController, _rangeProtectionCache: RangeProtectionCache, _headerResizeRenderController?: HeaderResizeRenderController | undefined);
    private _initHeaderMovePermissionInterceptor;
    private _initHeaderResizePermissionInterceptor;
    private _initRangeFillPermissionInterceptor;
    private _initRangeMovePermissionInterceptor;
    private _initFreezePermissionInterceptor;
}
