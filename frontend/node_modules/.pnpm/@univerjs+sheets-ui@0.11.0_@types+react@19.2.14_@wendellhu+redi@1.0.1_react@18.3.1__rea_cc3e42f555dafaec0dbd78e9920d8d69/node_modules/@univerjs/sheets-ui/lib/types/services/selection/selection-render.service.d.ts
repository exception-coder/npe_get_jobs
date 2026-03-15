import { Nullable, Workbook, ICommandService, IContextService, ILogService, Injector, RANGE_TYPE, ThemeService } from '@univerjs/core';
import { IMouseEvent, IPointerEvent, IRenderContext, IRenderModule, Viewport, ScrollTimerType } from '@univerjs/engine-render';
import { SheetsSelectionsService } from '@univerjs/sheets';
import { IShortcutService } from '@univerjs/ui';
import { SheetSkeletonManagerService } from '../sheet-skeleton-manager.service';
import { BaseSelectionRenderService } from './base-selection-render.service';
/**
 * This services controls rendering of normal selections in a render unit.
 * The normal selections would also be used by Auto Fill and Copy features.
 */
export declare class SheetSelectionRenderService extends BaseSelectionRenderService implements IRenderModule {
    private readonly _context;
    private readonly _logService;
    private readonly _commandService;
    protected readonly _contextService: IContextService;
    private readonly _workbookSelections;
    private _renderDisposable;
    constructor(_context: IRenderContext<Workbook>, injector: Injector, themeService: ThemeService, shortcutService: IShortcutService, selectionManagerService: SheetsSelectionsService, sheetSkeletonManagerService: SheetSkeletonManagerService, _logService: ILogService, _commandService: ICommandService, _contextService: IContextService);
    private _init;
    dispose(): void;
    private _initEventListeners;
    private _initThemeChangeListener;
    /**
     * Response for selection model changing.
     */
    private _initSelectionModelChangeListener;
    disableSelection(): void;
    enableSelection(): void;
    transparentSelection(): void;
    showSelection(): void;
    /**
     * Handle events in spreadsheet. (e.g. drag and move to make a selection)
     */
    private _initUserActionSyncListener;
    /**
     * Update selectionData to selectionDataModel (WorkBookSelections) by SetSelectionsOperation.
     *
     * Unlike baseSelectionRenderService@resetSelectionsByModelData, this method is for update WorkbookSelectionModel.
     *
     *
     * @param selectionDataWithStyleList
     * @param type
     */
    private _updateSelections;
    private _initSkeletonChangeListener;
    private _getActiveViewport;
    private _getSheetObject;
    /**
     * Handle pointer down event, bind pointermove & pointerup handler.
     * then trigger selectionMoveStart$.
     *
     * @param evt
     * @param _zIndex
     * @param rangeType
     * @param viewport
     * @param scrollTimerType
     */
    protected _onPointerDown(evt: IPointerEvent | IMouseEvent, _zIndex: number | undefined, rangeType: RANGE_TYPE | undefined, viewport: Nullable<Viewport>, scrollTimerType?: ScrollTimerType): void;
}
