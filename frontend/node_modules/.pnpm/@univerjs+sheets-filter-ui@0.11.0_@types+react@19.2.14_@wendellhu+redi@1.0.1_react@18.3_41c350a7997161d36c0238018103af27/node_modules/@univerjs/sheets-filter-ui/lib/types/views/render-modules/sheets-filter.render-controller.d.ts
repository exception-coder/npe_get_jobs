import { Workbook, ICommandService, Injector, RxDisposable, ThemeService } from '@univerjs/core';
import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { SheetInterceptorService } from '@univerjs/sheets';
import { SheetsFilterService } from '@univerjs/sheets-filter';
import { ISheetSelectionRenderService, SheetSkeletonManagerService } from '@univerjs/sheets-ui';
/**
 * Show selected range in filter.
 */
export declare class SheetsFilterRenderController extends RxDisposable implements IRenderModule {
    private readonly _context;
    private readonly _injector;
    private readonly _sheetSkeletonManagerService;
    private readonly _sheetsFilterService;
    private readonly _themeService;
    private readonly _sheetInterceptorService;
    private readonly _commandService;
    private readonly _selectionRenderService;
    private _filterRangeShape;
    private _buttonRenderDisposable;
    private _filterButtonShapes;
    constructor(_context: IRenderContext<Workbook>, _injector: Injector, _sheetSkeletonManagerService: SheetSkeletonManagerService, _sheetsFilterService: SheetsFilterService, _themeService: ThemeService, _sheetInterceptorService: SheetInterceptorService, _commandService: ICommandService, _selectionRenderService: ISheetSelectionRenderService);
    dispose(): void;
    private _initRenderer;
    private _renderRange;
    private _renderButtons;
    private _interceptCellContent;
    private _disposeRendering;
}
