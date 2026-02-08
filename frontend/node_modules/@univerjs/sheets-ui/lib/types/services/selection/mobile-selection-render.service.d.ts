import { Workbook, ICommandService, IContextService, ILogService, Injector, RANGE_TYPE, ThemeService } from '@univerjs/core';
import { IMouseEvent, IPointerEvent, IRenderContext, IRenderModule, Scene, SpreadsheetSkeleton, Viewport } from '@univerjs/engine-render';
import { ISelectionWithStyle, SheetsSelectionsService } from '@univerjs/sheets';
import { IShortcutService } from '@univerjs/ui';
import { SheetScrollManagerService } from '../scroll-manager.service';
import { SheetSkeletonManagerService } from '../sheet-skeleton-manager.service';
import { BaseSelectionRenderService } from './base-selection-render.service';
import { MobileSelectionControl } from './mobile-selection-shape';
declare enum ExpandingControl {
    BOTTOM_RIGHT = "bottom-right",
    TOP_LEFT = "top-left",
    LEFT = "left",
    RIGHT = "right",
    TOP = "top",
    BOTTOM = "bottom"
}
export declare class MobileSheetsSelectionRenderService extends BaseSelectionRenderService implements IRenderModule {
    private readonly _context;
    private readonly _logService;
    private readonly _commandService;
    protected readonly _contextService: IContextService;
    private readonly _scrollManagerService;
    private readonly _workbookSelections;
    private _renderDisposable;
    _expandingSelection: boolean;
    protected _selectionControls: MobileSelectionControl[];
    expandingControlMode: ExpandingControl;
    constructor(_context: IRenderContext<Workbook>, injector: Injector, themeService: ThemeService, shortcutService: IShortcutService, selectionManagerService: SheetsSelectionsService, sheetSkeletonManagerService: SheetSkeletonManagerService, _logService: ILogService, _commandService: ICommandService, _contextService: IContextService, _scrollManagerService: SheetScrollManagerService);
    private _init;
    private _initSkeletonChangeListener;
    private _initSelectionChangeListener;
    private _initEventListeners;
    private _initSpreadsheetEvent;
    private _initUserActionSyncListener;
    private _updateSelections;
    /**
     * invoked when pointerup or long press on spreadsheet, or pointerdown on row&col
     * then move curr selection to cell at cursor
     * Main purpose to create a new selection, or update curr selection to a new range.
     * @param evt
     * @param _zIndex
     * @param rangeType
     * @param viewport
     */
    createNewSelection(evt: IPointerEvent | IMouseEvent, _zIndex?: number, rangeType?: RANGE_TYPE, viewport?: Viewport): void;
    /**
     * Not same as PC version,
     * new selection control for mobile do one more thing: bind event for two control points.
     * @param scene
     * @param rangeType
     */
    newSelectionControl(scene: Scene, skeleton: SpreadsheetSkeleton, selection: ISelectionWithStyle): MobileSelectionControl;
    private _getActiveViewport;
    private _getSheetObject;
    private _normalSelectionDisabled;
    getSelectionControls(): MobileSelectionControl[];
    private _fillControlPointerDownHandler;
    private _changeCurrCellWhenControlPointerDown;
    /**
     * Not same as _moving in PC (base selection render service)
     * The diff is
     * In base version, new selection is determined by the cursor cell and _startRangeWhenPointerDown
     *
     * In Mobile version, new selection is determined by cursor cell and current of activeSelectionControl.model
     */
    protected _movingHandler(offsetX: number, offsetY: number, activeSelectionControl: MobileSelectionControl, rangeType: RANGE_TYPE): false | undefined;
    private _updateControlPointWhenScrolling;
}
export {};
