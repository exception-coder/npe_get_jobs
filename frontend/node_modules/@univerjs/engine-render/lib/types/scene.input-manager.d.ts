import { BaseObject } from './base-object';
import { IDragEvent, IKeyboardEvent, IMouseEvent, IPointerEvent, IWheelEvent } from './basics/i-events';
import { ISceneInputControlOptions, Scene } from './scene';
import { Disposable } from '@univerjs/core';
export declare class InputManager extends Disposable {
    /** The distance in pixel that you have to move to prevent some events */
    static DragMovementThreshold: number;
    /** Time in milliseconds to wait to raise long press events if button is still pressed */
    static LongPressDelay: number;
    /** Time in milliseconds with two consecutive clicks will be considered as a double or triple click */
    static DoubleClickDelay: number;
    static TripleClickDelay: number;
    /** If you need to check double click without raising a single click at first click, enable this flag */
    static ExclusiveDoubleClickMode: boolean;
    private _scene;
    /** This is a defensive check to not allow control attachment prior to an already active one. If already attached, previous control is unattached before attaching the new one. */
    private _alreadyAttached;
    private _onInput$;
    private _currentMouseEnterPicked;
    private _startingPosition;
    private _delayedTimeout;
    private _delayedTripeTimeout;
    private _doubleClickOccurred;
    private _tripleClickState;
    private _currentObject;
    constructor(scene: Scene);
    /**
     * TODO: DR-Univer, fix as unknown as
     */
    dispose(): void;
    mouseLeaveEnterHandler(evt: IMouseEvent): void;
    dragLeaveEnterHandler(evt: IDragEvent): void;
    private _clickTimeout;
    private _clickCount;
    _onClick(evt: IPointerEvent): void;
    _onDblClick(evt: IPointerEvent): void;
    _onPointerEnter(evt: IPointerEvent): void;
    _onPointerLeave(evt: IPointerEvent): void;
    _onPointerMove(evt: IMouseEvent): void;
    _onPointerDown(evt: IPointerEvent): void;
    _onPointerUp(evt: IPointerEvent): void;
    _onPointerCancel(evt: IPointerEvent): void;
    _onPointerOut(evt: IPointerEvent): void;
    _onMouseWheel(evt: IWheelEvent): void;
    _onKeyDown(evt: IKeyboardEvent): void;
    _onKeyUp(evt: IKeyboardEvent): void;
    _onDragEnter(evt: IDragEvent): void;
    _onDragLeave(evt: IDragEvent): void;
    _onDragOver(evt: IDragEvent): void;
    _onDrop(evt: IDragEvent): void;
    attachControl(options?: ISceneInputControlOptions): void;
    /**
     * Detaches all event handlers
     */
    detachControl(): void;
    /**
     * Get the object under the pointer, if scene.event is disabled, return null.
     * @param offsetX
     * @param offsetY
     */
    private _getObjectAtPos;
    /**
     *
     * If currentObject is null, return true
     * @param isTrigger
     * @param currentObject
     * @returns
     */
    private _shouldDispatchEventToScene;
    private _isObjectInSceneViewer;
    /**
     * @hidden
     * @returns Boolean if delta for pointer exceeds drag movement threshold
     */
    private _isPointerSwiping;
    private _prePointerDoubleOrTripleClick;
    private _resetDoubleClickParam;
    get capturedObject(): BaseObject | null;
}
