import { Disposable, ICommandService, Injector, IUniverInstanceService } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { SheetInterceptorService, SheetsSelectionsService } from '@univerjs/sheets';
import { IFormatPainterService } from '../../services/format-painter/format-painter.service';
export declare class FormatPainterController extends Disposable {
    private readonly _commandService;
    private readonly _formatPainterService;
    private readonly _univerInstanceService;
    private readonly _renderManagerService;
    private readonly _selectionManagerService;
    private readonly _sheetInterceptorService;
    private readonly _injector;
    constructor(_commandService: ICommandService, _formatPainterService: IFormatPainterService, _univerInstanceService: IUniverInstanceService, _renderManagerService: IRenderManagerService, _selectionManagerService: SheetsSelectionsService, _sheetInterceptorService: SheetInterceptorService, _injector: Injector);
    private _initialize;
    private _addDefaultHook;
    private _collectSelectionRangeFormat;
    private _getUndoRedoMutationInfo;
}
