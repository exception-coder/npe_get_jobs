import { Disposable, Injector } from '@univerjs/core';
import { DocPrintInterceptorService } from '@univerjs/docs-ui';
import { IDrawingManagerService } from '@univerjs/drawing';
import { DrawingRenderService } from '@univerjs/drawing-ui';
import { ComponentManager } from '@univerjs/ui';
export declare class DocDrawingPrintingController extends Disposable {
    private readonly _docPrintInterceptorService;
    private readonly _drawingRenderService;
    private readonly _drawingManagerService;
    private readonly _componetManager;
    private readonly _injector;
    constructor(_docPrintInterceptorService: DocPrintInterceptorService, _drawingRenderService: DrawingRenderService, _drawingManagerService: IDrawingManagerService, _componetManager: ComponentManager, _injector: Injector);
    private _initPrinting;
    private _initPrintingDom;
}
