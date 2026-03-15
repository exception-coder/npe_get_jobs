import { ICellWithCoord, IRangeWithCoord, Nullable, ThemeService, Disposable, RANGE_TYPE } from '@univerjs/core';
import { Scene, SpreadsheetSkeleton, Group, Rect } from '@univerjs/engine-render';
import { ISelectionStyle, ISelectionWidgetConfig, ISelectionWithCoord } from '@univerjs/sheets';
import { ISelectionShapeExtensionOption, SelectionShapeExtension } from './selection-shape-extension';
import { Subject } from 'rxjs';
import { SelectionRenderModel } from './selection-render-model';
export declare enum SELECTION_MANAGER_KEY {
    Selection = "__SpreadsheetSelectionShape__",
    top = "__SpreadsheetSelectionTopControl__",
    bottom = "__SpreadsheetSelectionBottomControl__",
    left = "__SpreadsheetSelectionShapeLeftControl__",
    right = "__SpreadsheetSelectionShapeRightControl__",
    backgroundTop = "__SpreadsheetSelectionBackgroundControlTop__",
    backgroundMiddleLeft = "__SpreadsheetSelectionBackgroundControlMiddleLeft__",
    backgroundMiddleRight = "__SpreadsheetSelectionBackgroundControlMiddleRight__",
    backgroundBottom = "__SpreadsheetSelectionBackgroundControlBottom__",
    fill = "__SpreadsheetSelectionFillControl__",
    fillTopLeft = "__SpreadsheetSelectionFillControlTopLeft__",
    fillBottomRight = "__SpreadsheetSelectionFillControlBottomRight__",
    fillTopLeftInner = "__SpreadsheetSelectionFillControlTopLeftInner__",
    fillBottomRightInner = "__SpreadsheetSelectionFillControlBottomRightInner__",
    lineMain = "__SpreadsheetDragLineMainControl__",
    lineContent = "__SpreadsheetDragLineContentControl__",
    line = "__SpreadsheetDragLineControl__",
    dash = "__SpreadsheetDragDashControl__",
    rowHeaderBackground = "__SpreadSheetSelectionRowHeaderBackground__",
    rowHeaderBorder = "__SpreadSheetSelectionRowHeaderBorder__",
    rowHeaderGroup = "__SpreadSheetSelectionRowHeaderGroup__",
    columnHeaderBackground = "__SpreadSheetSelectionColumnHeaderBackground__",
    columnHeaderBorder = "__SpreadSheetSelectionColumnHeaderBorder__",
    columnHeaderGroup = "__SpreadSheetSelectionColumnHeaderGroup__",
    topLeftWidget = "__SpreadSheetSelectionTopLeftWidget__",
    topCenterWidget = "__SpreadSheetSelectionTopCenterWidget__",
    topRightWidget = "__SpreadSheetSelectionTopRightWidget__",
    middleLeftWidget = "__SpreadSheetSelectionMiddleLeftWidget__",
    middleRightWidget = "__SpreadSheetSelectionMiddleRightWidget__",
    bottomLeftWidget = "__SpreadSheetSelectionBottomLeftWidget__",
    bottomCenterWidget = "__SpreadSheetSelectionBottomCenterWidget__",
    bottomRightWidget = "__SpreadSheetSelectionBottomRightWidget__"
}
/**
 * The main selection canvas component, includes leftControl,rightControl,topControl,bottomControl,backgroundControlTop,backgroundControlMiddleLeft,backgroundControlMiddleRight,backgroundControlBottom,fillControl
 */
export declare class SelectionControl extends Disposable {
    protected _scene: Scene;
    protected _zIndex: number;
    protected readonly _themeService: ThemeService;
    private _isHelperSelection;
    /**
     * For ref selections, there is no auto fill.
     */
    protected _enableAutoFill: boolean;
    /**
     * Only normal selections with primary cell has auto fill.
     * This works for multiple normal selections. Only last selection has primary cell and auto fill.
     */
    private _showAutoFill;
    /**
     * If rowHeader & col Header would be highlighted with selection.
     */
    protected _highlightHeader: boolean;
    protected _selectionRenderModel: SelectionRenderModel;
    private _leftBorder;
    private _rightBorder;
    private _topBorder;
    private _bottomBorder;
    private _backgroundControlTop;
    private _backgroundControlBottom;
    private _backgroundControlMiddleLeft;
    private _backgroundControlMiddleRight;
    private _autoFillControl;
    private _selectionShapeGroup;
    private _rowHeaderBackground;
    private _rowHeaderBorder;
    private _rowHeaderGroup;
    private _columnHeaderBackground;
    private _columnHeaderBorder;
    private _columnHeaderGroup;
    private _dashedRect;
    private _topLeftWidget;
    private _topCenterWidget;
    private _topRightWidget;
    private _middleLeftWidget;
    private _middleRightWidget;
    private _bottomLeftWidget;
    private _bottomCenterWidget;
    private _bottomRightWidget;
    private _defaultStyle;
    private _currentStyle;
    protected _rowHeaderWidth: number;
    protected _columnHeaderHeight: number;
    protected _widgetRects: Rect[];
    protected _controlExtension: Nullable<SelectionShapeExtension>;
    private _dispose$;
    readonly dispose$: import('rxjs').Observable<SelectionControl>;
    /**
     * eventSource: selectionShapeExtension selectionMoving$.next,
     * Observer: prompt.controller
     */
    readonly selectionMoving$: Subject<IRangeWithCoord>;
    readonly selectionMoveEnd$: Subject<IRangeWithCoord>;
    readonly selectionScaling$: Subject<IRangeWithCoord>;
    readonly selectionScaled$: Subject<Nullable<IRangeWithCoord>>;
    readonly selectionFilling$: Subject<Nullable<IRangeWithCoord>>;
    private readonly _selectionFilled$;
    readonly selectionFilled$: import('rxjs').Observable<Nullable<IRangeWithCoord>>;
    constructor(_scene: Scene, _zIndex: number, _themeService: ThemeService, options?: {
        highlightHeader?: boolean;
        enableAutoFill?: boolean;
        rowHeaderWidth: number;
        columnHeaderHeight: number;
        rangeType?: RANGE_TYPE;
    });
    private _initializeSheetBody;
    private _initialHeader;
    private _initialWidget;
    get zIndex(): number;
    get leftControl(): Rect;
    get rightControl(): Rect;
    get topControl(): Rect;
    get bottomControl(): Rect;
    get fillControl(): Rect;
    get backgroundControlTop(): Rect;
    get backgroundControlBottom(): Rect;
    get backgroundControlMiddleLeft(): Rect;
    get backgroundControlMiddleRight(): Rect;
    get selectionShape(): Group;
    get columnHeaderGroup(): Group;
    get rowHeaderGroup(): Group;
    get selectionShapeGroup(): Group;
    get model(): SelectionRenderModel;
    get topLeftWidget(): Rect;
    get topCenterWidget(): Rect;
    get topRightWidget(): Rect;
    get middleLeftWidget(): Rect;
    get middleRightWidget(): Rect;
    get bottomLeftWidget(): Rect;
    get bottomCenterWidget(): Rect;
    get bottomRightWidget(): Rect;
    get themeService(): ThemeService;
    get selectionModel(): SelectionRenderModel;
    set selectionModel(model: SelectionRenderModel);
    get currentStyle(): ISelectionStyle;
    set currentStyle(style: ISelectionStyle);
    get dashedRect(): Rect;
    get isHelperSelection(): boolean;
    get rowHeaderWidth(): number;
    set rowHeaderWidth(width: number);
    get columnHeaderHeight(): number;
    set columnHeaderHeight(height: number);
    setControlExtension(options: ISelectionShapeExtensionOption): void;
    setControlExtensionDisable(disable: boolean): void;
    setEvent(state: boolean): void;
    refreshSelectionFilled(val: IRangeWithCoord): void;
    /**
     * Update Control Style And Position of SelectionControl
     * @param selectionStyle
     */
    protected _updateLayoutOfSelectionControl(selectionStyle?: Nullable<Partial<ISelectionStyle>>): void;
    /**
     * update selection control coordination by curr selection model
     */
    protected _updateControlCoord(): void;
    updateStyle(style: Partial<ISelectionStyle>): void;
    /**
     * Update range and primary range.
     *
     * highlight cell would update if primaryWithCoord has value.
     * highlight cell would be cleared if primaryWithCoord is null.
     * highlight would keep prev value if primaryWithCoord is undefined.
     * @param rangeWithCoord
     * @param primaryWithCoord
     */
    updateRange(rangeWithCoord: IRangeWithCoord, primaryWithCoord: Nullable<ICellWithCoord>): void;
    /**
     * Update range and primary range and style.
     * @param selectionWthCoord
     */
    updateRangeBySelectionWithCoord(selectionWthCoord: ISelectionWithCoord, sk?: SpreadsheetSkeleton): void;
    /**
     * Update selection model with new range & primary cell(aka: highlight/current), also update row/col selection size & style.
     *
     * @deprecated  use `updateRangeBySelectionWithCoord` and `updateStyle` to do same thing.
     *
     * @param newSelectionRange
     * @param rowHeaderWidth
     * @param columnHeaderHeight
     * @param style
     * @param primaryCell primary cell
     */
    update(newSelectionRange: IRangeWithCoord, rowHeaderWidth?: number, columnHeaderHeight?: number, style?: Nullable<ISelectionStyle>, primaryCell?: Nullable<ICellWithCoord>): void;
    /**
     * Update primary range.
     * highlight cell would update if primary cell has value.
     * highlight cell would be cleared if primary cell is null.
     * highlight would keep prev value if primary cell is undefined.
     *
     * @param primaryCell model.current (aka: highlight)
     */
    updateCurrCell(primaryCell: Nullable<ICellWithCoord>): void;
    clearHighlight(): void;
    getScene(): Scene;
    dispose(): void;
    /**
     * Get the cell information of the current selection, considering the case of merging cells
     */
    getCurrentCellInfo(): Nullable<IRangeWithCoord>;
    getValue(): ISelectionWithCoord;
    getRange(): IRangeWithCoord;
    enableHelperSelection(): void;
    disableHelperSelection(): void;
    private _updateHeaderBackground;
    private _updateBackgroundControl;
    private _updateWidgets;
    protected _hasWidgets(widgets: ISelectionWidgetConfig): boolean;
    private _getScale;
    private _antLineOffset;
    private _antRequestNewFrame;
    private _stopAntLineAnimation;
    private _startAntLineAnimation;
}
