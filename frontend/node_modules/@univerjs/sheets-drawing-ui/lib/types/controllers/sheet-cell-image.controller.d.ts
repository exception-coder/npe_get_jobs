import { ICellData, Nullable, Disposable, ICommandService, Injector } from '@univerjs/core';
import { ISheetLocationBase, SheetInterceptorService } from '@univerjs/sheets';
import { DocDrawingController } from '@univerjs/docs-drawing';
import { IDrawingManagerService } from '@univerjs/drawing';
import { IEditorBridgeService } from '@univerjs/sheets-ui';
export declare function resizeImageByCell(injector: Injector, location: ISheetLocationBase, cell: Nullable<ICellData>): boolean;
export declare class SheetCellImageController extends Disposable {
    private readonly _commandService;
    private readonly _sheetInterceptorService;
    private readonly _injector;
    private readonly _drawingManagerService;
    private readonly _docDrawingController;
    private readonly _editorBridgeService;
    constructor(_commandService: ICommandService, _sheetInterceptorService: SheetInterceptorService, _injector: Injector, _drawingManagerService: IDrawingManagerService, _docDrawingController: DocDrawingController, _editorBridgeService: IEditorBridgeService);
    private _handleInitEditor;
    private _initCellContentInterceptor;
}
