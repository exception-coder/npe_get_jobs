import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { Disposable } from '@univerjs/core';
import { IDrawingManagerService } from '@univerjs/drawing';
import { ISheetDrawingService } from '@univerjs/sheets-drawing';
import { ISheetSelectionRenderService, SheetSkeletonManagerService } from '@univerjs/sheets-ui';
export declare class SheetsDrawingRenderController extends Disposable implements IRenderModule {
    private _context;
    private readonly _sheetDrawingService;
    private readonly _drawingManagerService;
    private _sheetSelectionRenderService;
    private _sheetSkeletonManagerService;
    constructor(_context: IRenderContext, _sheetDrawingService: ISheetDrawingService, _drawingManagerService: IDrawingManagerService, _sheetSelectionRenderService: ISheetSelectionRenderService, _sheetSkeletonManagerService: SheetSkeletonManagerService);
    private _init;
    private _drawingInitializeListener;
}
