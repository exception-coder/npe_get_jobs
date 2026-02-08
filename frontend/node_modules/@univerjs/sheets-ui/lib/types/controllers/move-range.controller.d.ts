import { Workbook, Disposable, ICommandService } from '@univerjs/core';
import { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { SheetsSelectionsService } from '@univerjs/sheets';
import { ISheetSelectionRenderService } from '../services/selection/base-selection-render.service';
export declare class MoveRangeRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _selectionRenderService;
    private readonly _selectionManagerService;
    private readonly _commandService;
    private _disposableCollection;
    constructor(_context: IRenderContext<Workbook>, _selectionRenderService: ISheetSelectionRenderService, _selectionManagerService: SheetsSelectionsService, _commandService: ICommandService);
    dispose(): void;
    private _initialize;
}
