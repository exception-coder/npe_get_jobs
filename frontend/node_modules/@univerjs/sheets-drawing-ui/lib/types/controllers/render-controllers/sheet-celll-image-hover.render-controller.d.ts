import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { Disposable } from '@univerjs/core';
import { DrawingRenderService } from '@univerjs/drawing-ui';
import { SheetsSelectionsService } from '@univerjs/sheets';
import { HoverManagerService, SheetSkeletonManagerService } from '@univerjs/sheets-ui';
export declare class SheetCellImageHoverRenderController extends Disposable implements IRenderModule {
    private _context;
    private _hoverManagerService;
    private _selectionsService;
    private _drawingRenderService;
    private _sheetSkeletonManagerService;
    private _isSetCursor;
    constructor(_context: IRenderContext, _hoverManagerService: HoverManagerService, _selectionsService: SheetsSelectionsService, _drawingRenderService: DrawingRenderService, _sheetSkeletonManagerService: SheetSkeletonManagerService);
    private _initHover;
    private _initImageClick;
}
