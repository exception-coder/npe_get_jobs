import { IRange, Workbook, Disposable, ICommandService, IUniverInstanceService } from '@univerjs/core';
import { IRenderContext, IRenderModule, IRenderManagerService } from '@univerjs/engine-render';
import { SheetsSelectionsService } from '@univerjs/sheets';
import { SheetScrollManagerService } from '../../../services/scroll-manager.service';
import { SheetSkeletonManagerService } from '../../../services/sheet-skeleton-manager.service';
/**
 * This controller handles scroll logic in sheet interaction.
 */
export declare class MobileSheetsScrollRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _sheetSkeletonManagerService;
    private readonly _commandService;
    private readonly _renderManagerService;
    private readonly _selectionManagerService;
    private readonly _scrollManagerService;
    protected readonly _univerInstanceService: IUniverInstanceService;
    constructor(_context: IRenderContext<Workbook>, _sheetSkeletonManagerService: SheetSkeletonManagerService, _commandService: ICommandService, _renderManagerService: IRenderManagerService, _selectionManagerService: SheetsSelectionsService, _scrollManagerService: SheetScrollManagerService, _univerInstanceService: IUniverInstanceService);
    scrollToRange(range: IRange): boolean;
    private _init;
    private _initCommandListener;
    private _scrollToSelectionForExpand;
    private _getFreeze;
    private _initScrollEventListener;
    private _initSkeletonListener;
    /**
     * for mobile
     */
    private _initPointerScrollEvent;
    private _updateSceneSize;
    private _getSheetObject;
    private _scrollToSelectionByDirection;
    private _scrollToSelection;
    private _getViewportBounding;
    private _scrollToCell;
}
