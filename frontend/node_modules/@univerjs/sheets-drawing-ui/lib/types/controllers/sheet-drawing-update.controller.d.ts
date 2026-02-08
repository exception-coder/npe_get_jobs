import { IAccessor, Workbook, Disposable, ICommandService, IContextService, Injector, LocaleService } from '@univerjs/core';
import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { ISheetLocationBase, SheetsSelectionsService } from '@univerjs/sheets';
import { IDrawingManagerService, IImageIoService } from '@univerjs/drawing';
import { ISheetDrawingService } from '@univerjs/sheets-drawing';
import { ISheetSelectionRenderService, SheetSkeletonManagerService } from '@univerjs/sheets-ui';
import { ILocalFileService, IMessageService } from '@univerjs/ui';
/**
 * Get the size of the drawing within the cell
 * @param {IAccessor} accessor Accessor
 * @param {ISheetLocationBase} location Cell location
 * @param {number} originImageWidth Original image width
 * @param {number} originImageHeight Original image height
 * @param {number} angle Rotation angle in degrees (0-360)
 * @returns {{ width: number; height: number }} Drawing size
 */
export declare function getDrawingSizeByCell(accessor: IAccessor, location: ISheetLocationBase, originImageWidth: number, originImageHeight: number, angle: number): false | {
    width: number;
    height: number;
};
export declare class SheetDrawingUpdateController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _skeletonManagerService;
    private readonly _commandService;
    private readonly _selectionRenderService;
    private readonly _imageIoService;
    private readonly _fileOpenerService;
    private readonly _sheetDrawingService;
    private readonly _drawingManagerService;
    private readonly _contextService;
    private readonly _messageService;
    private readonly _localeService;
    private readonly _injector;
    private readonly _workbookSelections;
    constructor(_context: IRenderContext<Workbook>, _skeletonManagerService: SheetSkeletonManagerService, _commandService: ICommandService, _selectionRenderService: ISheetSelectionRenderService, _imageIoService: IImageIoService, _fileOpenerService: ILocalFileService, _sheetDrawingService: ISheetDrawingService, _drawingManagerService: IDrawingManagerService, _contextService: IContextService, _messageService: IMessageService, _localeService: LocaleService, selectionManagerService: SheetsSelectionsService, _injector: Injector);
    insertFloatImage(): Promise<boolean>;
    insertCellImage(): Promise<boolean>;
    insertCellImageByFile(file: File, location?: ISheetLocationBase): Promise<boolean>;
    insertFloatImageByFile(file: File): Promise<boolean | undefined>;
    private _insertCellImage;
    insertCellImageByUrl(url: string, location?: ISheetLocationBase): Promise<boolean>;
    private _getUnitInfo;
    private _getImagePosition;
    private _updateOrderListener;
    private _updateImageListener;
    private _groupDrawingListener;
    private _focusDrawingListener;
}
