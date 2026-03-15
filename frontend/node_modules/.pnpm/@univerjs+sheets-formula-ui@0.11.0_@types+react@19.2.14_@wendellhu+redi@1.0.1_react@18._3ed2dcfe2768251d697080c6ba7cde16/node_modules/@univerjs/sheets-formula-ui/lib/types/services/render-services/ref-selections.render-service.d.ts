import { IDisposable, Nullable, Workbook, IContextService, Injector, RANGE_TYPE, ThemeService } from '@univerjs/core';
import { IMouseEvent, IPointerEvent, IRenderContext, IRenderModule, Scene, SpreadsheetSkeleton, Viewport, ScrollTimerType } from '@univerjs/engine-render';
import { ISelectionWithStyle, SheetsSelectionsService } from '@univerjs/sheets';
import { BaseSelectionRenderService, SelectionControl, SheetSkeletonManagerService } from '@univerjs/sheets-ui';
import { IShortcutService } from '@univerjs/ui';
/**
 * This service extends the existing `SelectionRenderService` to provide the rendering of prompt selections
 * when user is editing ref ranges in formulas.
 *
 * Not that this service works with Uni-mode, which means it should be able to deal with multi render unit
 * and handle selections on them, though each at a time.
 *
 *
 *
 */
export declare class RefSelectionsRenderService extends BaseSelectionRenderService implements IRenderModule {
    private readonly _context;
    protected readonly _contextService: IContextService;
    private readonly _refSelectionsService;
    private readonly _workbookSelections;
    private _eventDisposables;
    constructor(_context: IRenderContext<Workbook>, injector: Injector, themeService: ThemeService, shortcutService: IShortcutService, sheetSkeletonManagerService: SheetSkeletonManagerService, _contextService: IContextService, _refSelectionsService: SheetsSelectionsService);
    getLocation(): [string, string];
    setRemainLastEnabled(enabled: boolean): void;
    /**
     * This is set to true when you need to add a new selection.
     * @param {boolean} enabled
     * @memberof RefSelectionsRenderService
     */
    setSkipLastEnabled(enabled: boolean): void;
    clearLastSelection(): void;
    /**
     * Call this method and user will be able to select on the canvas to update selections.
     */
    enableSelectionChanging(): IDisposable;
    private _disableSelectionChanging;
    disableSelectionChanging(): void;
    private _initCanvasEventListeners;
    /**
     * Add a selection in spreadsheet, create a new SelectionControl and then update this control by range derives from selection.
     * For ref selection, create selectionShapeExtension to handle user action.
     * @param {ISelectionWithCoord} selectionWithStyle
     */
    protected _addSelectionControlByModelData(selectionWithStyle: ISelectionWithStyle): SelectionControl;
    private _initSelectionChangeListener;
    /**
     * Update selectionModel in this._workbookSelections by user action in spreadsheet area.
     */
    private _initUserActionSyncListener;
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
    /**
     * Diff between normal selection, no highlightHeader for ref selections.
     * @param scene
     * @param skeleton
     * @param selectionWithCoord
     * @returns {SelectionControl} selectionControl just created
     */
    newSelectionControl(scene: Scene, skeleton: SpreadsheetSkeleton, selection: ISelectionWithStyle): SelectionControl;
}
