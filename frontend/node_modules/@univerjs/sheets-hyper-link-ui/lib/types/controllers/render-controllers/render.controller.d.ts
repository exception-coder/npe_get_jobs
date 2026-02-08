import { Workbook, Disposable } from '@univerjs/core';
import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { SheetInterceptorService } from '@univerjs/sheets';
import { HyperLinkModel } from '@univerjs/sheets-hyper-link';
export declare class SheetsHyperLinkRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _hyperLinkModel;
    constructor(_context: IRenderContext<Workbook>, _hyperLinkModel: HyperLinkModel);
    private _initSkeletonChange;
}
export declare class SheetsHyperLinkRenderManagerController extends Disposable {
    private readonly _sheetInterceptorService;
    private readonly _hyperLinkModel;
    constructor(_sheetInterceptorService: SheetInterceptorService, _hyperLinkModel: HyperLinkModel);
    private _initViewModelIntercept;
}
