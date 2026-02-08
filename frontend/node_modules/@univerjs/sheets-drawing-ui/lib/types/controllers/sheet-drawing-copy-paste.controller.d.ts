import { Disposable, ICommandService } from '@univerjs/core';
import { IDrawingManagerService } from '@univerjs/drawing';
import { IRenderManagerService } from '@univerjs/engine-render';
import { ISheetClipboardService } from '@univerjs/sheets-ui';
import { IClipboardInterfaceService } from '@univerjs/ui';
export declare class SheetsDrawingCopyPasteController extends Disposable {
    private _sheetClipboardService;
    private readonly _renderManagerService;
    private readonly _drawingService;
    private readonly _clipboardInterfaceService;
    private readonly _commandService;
    private _copyInfo;
    constructor(_sheetClipboardService: ISheetClipboardService, _renderManagerService: IRenderManagerService, _drawingService: IDrawingManagerService, _clipboardInterfaceService: IClipboardInterfaceService, _commandService: ICommandService);
    private get _focusedDrawings();
    private _initCopyPaste;
    private _createDrawingsCopyInfoByRange;
    private _generateSingleDrawingPasteMutations;
    private _generateMutations;
    private _generateRangeDrawingsPasteMutations;
}
