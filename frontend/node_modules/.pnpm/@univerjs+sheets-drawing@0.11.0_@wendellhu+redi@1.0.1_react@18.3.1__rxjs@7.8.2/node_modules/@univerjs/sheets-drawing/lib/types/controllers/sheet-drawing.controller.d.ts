import { Disposable, ICommandService, IResourceManagerService, IUniverInstanceService } from '@univerjs/core';
import { IDrawingManagerService } from '@univerjs/drawing';
import { SheetInterceptorService } from '@univerjs/sheets';
import { ISheetDrawingService } from '../services/sheet-drawing.service';
export declare const SHEET_DRAWING_PLUGIN = "SHEET_DRAWING_PLUGIN";
export declare class SheetsDrawingLoadController extends Disposable {
    private _sheetInterceptorService;
    private _univerInstanceService;
    private readonly _commandService;
    private readonly _sheetDrawingService;
    private readonly _drawingManagerService;
    private _resourceManagerService;
    constructor(_sheetInterceptorService: SheetInterceptorService, _univerInstanceService: IUniverInstanceService, _commandService: ICommandService, _sheetDrawingService: ISheetDrawingService, _drawingManagerService: IDrawingManagerService, _resourceManagerService: IResourceManagerService);
    private _initSnapshot;
    private _initSheetChange;
}
