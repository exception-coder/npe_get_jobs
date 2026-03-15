import { Workbook, Disposable, ICommandService } from '@univerjs/core';
import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { IFormatPainterService } from '../../services/format-painter/format-painter.service';
import { ISheetSelectionRenderService } from '../../services/selection/base-selection-render.service';
export declare class FormatPainterRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _formatPainterService;
    private readonly _selectionRenderService;
    private readonly _commandService;
    constructor(_context: IRenderContext<Workbook>, _formatPainterService: IFormatPainterService, _selectionRenderService: ISheetSelectionRenderService, _commandService: ICommandService);
    private _initialize;
    private _commandExecutedListener;
    private _bindFormatPainterStatus;
}
