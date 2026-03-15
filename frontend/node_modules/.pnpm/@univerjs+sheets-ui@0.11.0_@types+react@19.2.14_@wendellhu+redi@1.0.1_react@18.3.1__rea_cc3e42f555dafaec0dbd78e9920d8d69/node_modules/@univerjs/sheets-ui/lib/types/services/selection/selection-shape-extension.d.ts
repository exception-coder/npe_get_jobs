import { Injector, IRangeWithCoord, ThemeService } from '@univerjs/core';
import { Scene, SpreadsheetSkeleton } from '@univerjs/engine-render';
import { SelectionControl } from './selection-control';
export interface ISelectionShapeTargetSelection {
    originControl: SelectionControl;
    targetSelection: IRangeWithCoord;
}
export interface ISelectionShapeExtensionOption {
    skeleton: SpreadsheetSkeleton;
    scene: Scene;
    themeService: ThemeService;
    injector: Injector;
    selectionHooks: Record<string, () => void>;
}
/**
 * for auto-fill (crosshair expand selection range)
 * drag selection range
 */
export declare class SelectionShapeExtension {
    private _control;
    private _startOffsetX;
    private _startOffsetY;
    private _relativeSelectionPositionRow;
    private _relativeSelectionPositionColumn;
    private _relativeSelectionRowLength;
    private _relativeSelectionColumnLength;
    private _scenePointerMoveSub;
    private _scenePointerUpSub;
    private _disabled;
    /**
     * The shadow selection under cursor when move whole selection control(for moving normal selection)
     */
    private _helperSelection;
    private _scrollTimer;
    private _activeViewport;
    private _targetSelection;
    private _isInMergeState;
    private _fillControlColors;
    private _skeleton;
    private _scene;
    private readonly _themeService;
    private readonly _injector;
    private _selectionHooks;
    constructor(_control: SelectionControl, options: ISelectionShapeExtensionOption);
    get isHelperSelection(): boolean;
    dispose(): void;
    setDisabled(disabled: boolean): void;
    private _getFreeze;
    private _isSelectionInViewport;
    private _clearObserverEvent;
    private _initialControl;
    /**
     * Move the whole selection control after cursor turn into move state.
     * NOT same as widgetMoving, that's for 8 control points.
     * @param moveOffsetX
     * @param moveOffsetY
     */
    private _controlMoving;
    /**
     * Drag move whole selectionControl when cursor turns to crosshair. Not for dragging 8 control points.
     * @param evt
     */
    private _controlPointerDownHandler;
    private _initialWidget;
    /**
     * Pointer down Events for 8 control point.
     * @param evt
     * @param cursor
     */
    private _widgetPointerDownEvent;
    /**
     * Pointer move Events for 8 control point.
     * @param moveOffsetX
     * @param moveOffsetY
     * @param cursor
     */
    private _widgetMoving;
    private _initialAutoFill;
    private _autoFillMoving;
    private _autoFillForPointerdown;
    private _viewportMainScrollBarNeedResetPosition;
    private _hasMergeInRange;
    /**
     * Make sure startRow < endRow and startColumn < endColumn
     *
     * @param startRow
     * @param startColumn
     * @param endRow
     * @param endColumn
     * @returns {IRange} range
     */
    private _swapPositions;
    private _controlHandler;
    private _fillRuler;
    private _getScale;
}
