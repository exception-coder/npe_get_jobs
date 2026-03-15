import { Disposable, Injector } from '@univerjs/core';
import { IDrawingManagerService } from '@univerjs/drawing';
import { DrawingRenderService } from '@univerjs/drawing-ui';
import { IRenderManagerService } from '@univerjs/engine-render';
import { SheetPrintInterceptorService } from '@univerjs/sheets-ui';
import { ComponentManager } from '@univerjs/ui';
import { SheetCanvasFloatDomManagerService } from '../services/canvas-float-dom-manager.service';
export declare class SheetDrawingPrintingController extends Disposable {
    private readonly _sheetPrintInterceptorService;
    private readonly _drawingRenderService;
    private readonly _drawingManagerService;
    private readonly _renderManagerService;
    private readonly _canvasFloatDomManagerService;
    private readonly _componetManager;
    private readonly _injector;
    constructor(_sheetPrintInterceptorService: SheetPrintInterceptorService, _drawingRenderService: DrawingRenderService, _drawingManagerService: IDrawingManagerService, _renderManagerService: IRenderManagerService, _canvasFloatDomManagerService: SheetCanvasFloatDomManagerService, _componetManager: ComponentManager, _injector: Injector);
    private _initPrinting;
    private _initPrintingDom;
}
