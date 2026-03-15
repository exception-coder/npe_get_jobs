import { Workbook, ICommandService, RxDisposable } from '@univerjs/core';
import { IRenderContext } from '@univerjs/engine-render';
import { SheetSkeletonManagerService } from '../../services/sheet-skeleton-manager.service';
/**
 * This controller controls rendering of the buttons to unhide hidden rows and columns.
 */
export declare class HeaderUnhideRenderController extends RxDisposable {
    private readonly _context;
    private readonly _sheetSkeletonManagerService;
    private readonly _commandService;
    private _shapes;
    private get _workbook();
    constructor(_context: IRenderContext<Workbook>, _sheetSkeletonManagerService: SheetSkeletonManagerService, _commandService: ICommandService);
    dispose(): void;
    private _init;
    private _update;
    private _clearShapes;
    private _getSheetObject;
}
