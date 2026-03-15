import { ICellInfo, ICellWithCoord, IContextService, IDisposable, IFreeze, IInterceptor, Injector, IRange, IRangeWithCoord, Nullable, Disposable, InterceptorManager, RANGE_TYPE, ThemeService } from '@univerjs/core';
import { IMouseEvent, IPointerEvent, IRenderModule, Scene, SpreadsheetSkeleton, Viewport, ScrollTimer, ScrollTimerType } from '@univerjs/engine-render';
import { ISelectionStyle, ISelectionWithCoord, ISelectionWithStyle } from '@univerjs/sheets';
import { Theme } from '@univerjs/themes';
import { IShortcutService } from '@univerjs/ui';
import { Observable, Subscription, BehaviorSubject, Subject } from 'rxjs';
import { SheetSkeletonManagerService } from '../sheet-skeleton-manager.service';
import { SelectionControl } from './selection-control';
export interface IControlFillConfig {
    oldRange: IRange;
    newRange: IRange;
}
export interface ISheetSelectionRenderService {
    readonly selectionMoveEnd$: Observable<ISelectionWithCoord[]>;
    readonly controlFillConfig$: Observable<IControlFillConfig | null>;
    readonly selectionMoving$: Observable<ISelectionWithCoord[]>;
    readonly selectionMoveStart$: Observable<ISelectionWithCoord[]>;
    get selectionMoving(): boolean;
    interceptor: InterceptorManager<{
        RANGE_MOVE_PERMISSION_CHECK: IInterceptor<boolean, null>;
        RANGE_FILL_PERMISSION_CHECK: IInterceptor<boolean, {
            x: number;
            y: number;
            skeleton: SpreadsheetSkeleton;
            scene: Scene;
        }>;
    }>;
    /** @deprecated This should not be provided by the selection render service. */
    getViewPort(): Viewport;
    getSkeleton(): SpreadsheetSkeleton;
    getSelectionControls(): SelectionControl[];
    /** @deprecated Use the function `attachSelectionWithCoord` instead. */
    attachSelectionWithCoord(selectionWithStyle: ISelectionWithStyle): ISelectionWithCoord;
    /** @deprecated Use the function `attachPrimaryWithCoord` instead`. */
    attachPrimaryWithCoord(primary: Nullable<Partial<ICellInfo>>): Nullable<ICellWithCoord>;
    /**
     * @deprecated Please use `getCellWithCoordByOffset` instead.
     */
    getSelectionCellByPosition(x: number, y: number): ICellWithCoord;
    getCellWithCoordByOffset(x: number, y: number, skeleton?: SpreadsheetSkeleton): Nullable<ICellWithCoord>;
    setSingleSelectionEnabled(enabled: boolean): void;
    refreshSelectionMoveEnd(): void;
    resetSelectionsByModelData(selectionsWithStyleList: readonly ISelectionWithStyle[]): void;
}
export declare const ISheetSelectionRenderService: import('@wendellhu/redi').IdentifierDecorator<ISheetSelectionRenderService>;
/**
 * The basic implementation of selection rendering logics. It is designed to be reused for different purposes.
 */
export declare class BaseSelectionRenderService extends Disposable implements ISheetSelectionRenderService, IRenderModule {
    protected readonly _injector: Injector;
    protected readonly _themeService: ThemeService;
    protected readonly _shortcutService: IShortcutService;
    protected readonly _sheetSkeletonManagerService: SheetSkeletonManagerService;
    protected readonly contextService: IContextService;
    private _downObserver;
    protected _scenePointerMoveSub: Nullable<Subscription>;
    protected _scenePointerUpSub: Nullable<Subscription>;
    private _controlFillConfig$;
    readonly controlFillConfig$: Observable<IControlFillConfig | null>;
    protected _selectionControls: SelectionControl[];
    protected _startRangeWhenPointerDown: IRangeWithCoord;
    protected _activeControlIndex: number;
    /**
     * the posX of viewport when the pointer down
     */
    protected _startViewportPosX: number;
    /**
     * the posY of viewport when the pointer down
     */
    protected _startViewportPosY: number;
    protected _scrollTimer: ScrollTimer;
    private _cancelDownSubscription;
    private _cancelUpSubscription;
    protected _skeleton: SpreadsheetSkeleton;
    /**
     * From renderContext.
     */
    protected _scene: Scene;
    protected _highlightHeader: boolean;
    protected _rangeType: RANGE_TYPE;
    protected _selectionStyle: ISelectionStyle;
    protected _remainLastEnabled: boolean;
    protected _skipLastEnabled: boolean;
    protected _singleSelectionEnabled: boolean;
    /**
     * Mainly emit by pointerup in spreadsheet. (pointerup is handled in _onPointerdown)
     */
    protected readonly _selectionMoveEnd$: BehaviorSubject<ISelectionWithCoord[]>;
    /**
     * Pointerup in spreadsheet
     */
    readonly selectionMoveEnd$: Observable<ISelectionWithCoord[]>;
    /**
     * Mainly emit by pointermove in spreadsheet
     */
    protected readonly _selectionMoving$: Subject<ISelectionWithCoord[]>;
    /**
     * Pointermove in spreadsheet
     */
    readonly selectionMoving$: Observable<ISelectionWithCoord[]>;
    protected readonly _selectionMoveStart$: Subject<ISelectionWithCoord[]>;
    readonly selectionMoveStart$: Observable<ISelectionWithCoord[]>;
    private _selectionMoving;
    protected _selectionTheme: ThemeService;
    get selectionMoving(): boolean;
    protected _activeViewport: Nullable<Viewport>;
    readonly interceptor: InterceptorManager<{
        RANGE_MOVE_PERMISSION_CHECK: IInterceptor<boolean, null>;
        RANGE_FILL_PERMISSION_CHECK: IInterceptor<boolean, {
            x: number;
            y: number;
            skeleton: SpreadsheetSkeleton;
            scene: Scene;
        }>;
    }>;
    protected _escapeShortcutDisposable: Nullable<IDisposable>;
    constructor(_injector: Injector, _themeService: ThemeService, _shortcutService: IShortcutService, _sheetSkeletonManagerService: SheetSkeletonManagerService, contextService: IContextService);
    /**
     * If true, the selector will respond to the range of merged cells and automatically extend the selected range. If false, it will ignore the merged cells.
     */
    private get _shouldDetectMergedCells();
    private _initMoving;
    protected _setSelectionStyle(style: ISelectionStyle): void;
    /**
     * Reset this._selectionStyle to default normal selection style
     */
    /** @deprecated This should not be provided by the selection render service. */
    getViewPort(): Viewport;
    setSingleSelectionEnabled(enabled?: boolean): void;
    newSelectionControl(scene: Scene, skeleton: SpreadsheetSkeleton, selection: ISelectionWithStyle): SelectionControl;
    /**
     * Update the corresponding selectionControl based on selectionsData from WorkbookSelectionModel
     * selectionData[i] --> selectionControls[i]
     * @param selectionsWithStyleList {ISelectionWithStyle[]} selectionsData from WorkbookSelectionModel
     */
    resetSelectionsByModelData(selectionsWithStyleList: readonly ISelectionWithStyle[]): void;
    refreshSelectionMoveStart(): void;
    refreshSelectionMoveEnd(): void;
    _initSelectionThemeFromThemeService(): void;
    setSelectionTheme(theme: Theme): void;
    protected _changeRuntime(skeleton: SpreadsheetSkeleton, scene: Scene, viewport?: Viewport): void;
    getSkeleton(): SpreadsheetSkeleton;
    /**
     * Generate selectionData from this._selectionControls.model .
     * @returns {ISelectionWithCoord[]} {range, primary, style}[]
     */
    getSelectionDataWithStyle(): ISelectionWithCoord[];
    /**
     * @TODO lumixraku DO NOT expose private props.
     */
    getSelectionControls(): SelectionControl[];
    /**
     * Add a selection in spreadsheet, create a new SelectionControl and then update this control by range derives from selection.
     * @param {ISelectionWithCoord} selectionWithStyle
     */
    protected _addSelectionControlByModelData(selectionWithStyle: ISelectionWithStyle): SelectionControl;
    protected _clearAllSelectionControls(): void;
    protected _getFreeze(): Nullable<IFreeze>;
    protected _getViewportByCell(row?: number, column?: number): Nullable<Viewport>;
    /**
     * Returns the selected range in the active sheet, or null if there is no active range. If multiple ranges are selected this method returns only the last selected range.
     */
    getActiveRange(): Nullable<IRange>;
    setActiveSelectionIndex(index: number): void;
    resetActiveSelectionIndex(): void;
    /**
     * get active(actually last) selection control
     * @returns T extends SelectionControl
     */
    getActiveSelectionControl<T extends SelectionControl = SelectionControl>(): Nullable<T>;
    endSelection(): void;
    /**
     * Clear existed selections by workbookSelections.selectionMoveEnd$
     */
    protected _reset(): void;
    /**
     * Init pointer move listener in each pointer down, unbind in each pointer up.
     * Both cell selections and row-column selections are supported by this method.
     * @param viewportMain
     * @param activeSelectionControl
     * @param rangeType
     * @param scrollTimerType
     * @param moveStartPosX
     * @param moveStartPosY
     */
    protected _setupPointerMoveListener(viewportMain: Nullable<Viewport>, activeSelectionControl: SelectionControl, rangeType: RANGE_TYPE, scrollTimerType: ScrollTimerType | undefined, moveStartPosX: number, moveStartPosY: number): void;
    /** @deprecated Use the function `attachSelectionWithCoord` instead`. */
    attachSelectionWithCoord(selectionWithStyle: ISelectionWithStyle): ISelectionWithCoord;
    /** @deprecated Use the function `attachPrimaryWithCoord` instead`. */
    attachPrimaryWithCoord(primary: ICellInfo): ICellWithCoord;
    /**
     * @deprecated Please use `getCellWithCoordByOffset` instead.
     */
    getSelectionCellByPosition(x: number, y: number): ICellWithCoord;
    getCellWithCoordByOffset(x: number, y: number, skeletonParam?: SpreadsheetSkeleton): ICellWithCoord;
    /**
     * When mousedown and mouseup need to go to the coordination and undo stack, when mousemove does not need to go to the coordination and undo stack
     */
    protected _movingHandler(offsetX: number, offsetY: number, activeSelectionControl: Nullable<SelectionControl>, rangeType: RANGE_TYPE): void;
    protected _clearUpdatingListeners(): void;
    protected _addEndingListeners(): void;
    /**
     * Get visible selection range & coord by offset on viewport. Nearly same as skeleton.getCellWithCoordByOffset
     * Returning selection is only one cell. primary and range are same cell.
     *
     * visible selection range means getCellWithCoordByOffset needs first matched row/col in rowHeightAccumulation & colWidthAccumulation.
     * Original name: _getCellRangeByCursorPosition
     *
     * @param offsetX position X in viewport.
     * @param offsetY
     * @param scaleX
     * @param scaleY
     * @param scrollXY
     * @returns {Nullable<ISelectionWithCoord>} selection range with coord.
     */
    protected _getSelectionWithCoordByOffset(offsetX: number, offsetY: number, scaleX: number, scaleY: number, scrollXY: {
        x: number;
        y: number;
    }): Nullable<ISelectionWithCoord>;
    protected _checkClearPreviousControls(evt: IPointerEvent | IMouseEvent): void;
    protected _makeSelectionByTwoCells(currentCell: ICellWithCoord, startSelectionRange: IRangeWithCoord, skeleton: SpreadsheetSkeleton, rangeType: RANGE_TYPE, activeControl: SelectionControl): void;
    isSelectionEnabled(): boolean;
    isSelectionDisabled(): boolean;
    inRefSelectionMode(): boolean;
}
export declare function selectionDataForSelectAll(skeleton: SpreadsheetSkeleton): ISelectionWithStyle;
export declare function getTopLeftSelectionOfCurrSheet(skeleton: SpreadsheetSkeleton): ISelectionWithStyle;
/**
 * @deprecated use `getTopLeftSelectionOfCurrSheet` instead
 */
declare const getTopLeftSelection: typeof getTopLeftSelectionOfCurrSheet;
export { getTopLeftSelection };
export declare function genSelectionByRange(skeleton: SpreadsheetSkeleton, range: IRange): ISelectionWithStyle;
