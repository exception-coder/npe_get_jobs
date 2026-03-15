import { Workbook, Disposable } from '@univerjs/core';
import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { ISheetClipboardService } from '../../services/clipboard/clipboard.service';
import { SheetSkeletonManagerService } from '../../services/sheet-skeleton-manager.service';
import { SheetClipboardController } from '../clipboard/clipboard.controller';
export declare class ClipboardRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _sheetSkeletonManagerService;
    private readonly _sheetClipboardService;
    private readonly _sheetClipboardController;
    constructor(_context: IRenderContext<Workbook>, _sheetSkeletonManagerService: SheetSkeletonManagerService, _sheetClipboardService: ISheetClipboardService, _sheetClipboardController: SheetClipboardController);
    private _initialize;
}
