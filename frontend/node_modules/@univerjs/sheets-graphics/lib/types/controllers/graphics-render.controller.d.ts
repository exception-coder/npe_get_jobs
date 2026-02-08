import { ISelectionCellWithMergeInfo, Disposable } from '@univerjs/core';
import { IRenderContext, IRenderModule, SpreadsheetSkeleton, UniverRenderingContext } from '@univerjs/engine-render';
import { SheetPrintInterceptorService } from '@univerjs/sheets-ui';
export declare class SheetGraphicsRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _sheetPrintInterceptorService;
    private _graphicsExtensionInstance;
    constructor(_context: IRenderContext, _sheetPrintInterceptorService: SheetPrintInterceptorService);
    private _initRender;
    private _initPrinting;
    registerRenderer(key: string, renderer: (ctx: UniverRenderingContext, skeleton: SpreadsheetSkeleton, coordInfo: ISelectionCellWithMergeInfo) => void): void;
}
