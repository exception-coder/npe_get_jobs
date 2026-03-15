import { Nullable, Disposable } from '@univerjs/core';
import { BaseObject } from './base-object';
import { IMouseEvent, IPointerEvent } from './basics/i-events';
import { ITransformerConfig } from './basics/transformer-config';
import { Scene } from './scene';
import { Group } from './group';
declare enum MoveObserverType {
    MOVE_START = 0,
    MOVING = 1,
    MOVE_END = 2
}
export interface IChangeObserverConfig {
    target?: BaseObject;
    objects: Map<string, BaseObject>;
    type: MoveObserverType;
    moveX?: number;
    moveY?: number;
    angle?: number;
    offsetX?: number;
    offsetY?: number;
}
/**
 * Transformer constructor.  Transformer is a special type of group that allow you transform
 * primitives and shapes. Transforming tool is not changing `width` and `height` properties of nodes
 * when you resize them. Instead it changes `scaleX` and `scaleY` properties.
 */
export declare class Transformer extends Disposable implements ITransformerConfig {
    private _scene;
    isCropper: boolean;
    hoverEnabled: boolean;
    hoverEnterFunc: Nullable<(e: IPointerEvent | IMouseEvent) => void>;
    hoverLeaveFunc: Nullable<(e: IPointerEvent | IMouseEvent) => void>;
    resizeEnabled: boolean;
    rotateEnabled: boolean;
    rotationSnaps: number[];
    rotationSnapTolerance: number;
    rotateAnchorOffset: number;
    rotateSize: number;
    rotateCornerRadius: number;
    borderEnabled: boolean;
    borderStroke: string;
    borderStrokeWidth: number;
    borderDash: number[];
    borderSpacing: number;
    anchorFill: string;
    anchorStroke: string;
    anchorStrokeWidth: number;
    anchorSize: number;
    anchorCornerRadius: number;
    keepRatio: boolean;
    centeredScaling: boolean;
    zeroLeft: number;
    zeroTop: number;
    /**
     * leftTop centerTop rightTop
     * leftMiddle rightMiddle
     * leftBottom centerBottom rightBottom
     */
    enabledAnchors: number[];
    flipEnabled: boolean;
    ignoreStroke: boolean;
    boundBoxFunc: Nullable<(oldBox: BaseObject, newBox: BaseObject) => BaseObject>;
    useSingleNodeRotation: boolean;
    shouldOverdrawWholeArea: boolean;
    private readonly _changeStart$;
    /**
     * actually pointer down on a object,
     * trigger when pick an object even object not change.
     */
    readonly changeStart$: import('rxjs').Observable<IChangeObserverConfig>;
    private readonly _changing$;
    readonly changing$: import('rxjs').Observable<IChangeObserverConfig>;
    private readonly _changeEnd$;
    readonly changeEnd$: import('rxjs').Observable<IChangeObserverConfig>;
    private readonly _clearControl$;
    readonly clearControl$: import('rxjs').Observable<boolean>;
    private readonly _createControl$;
    readonly createControl$: import('rxjs').Observable<Group>;
    private _startOffsetX;
    private _startOffsetY;
    private _startStateMap;
    private _viewportScrollX;
    private _viewportScrollY;
    private _topScenePointerMoveSub;
    private _topScenePointerUpSub;
    private _cancelFocusSubscription;
    private _transformerControlMap;
    private _selectedObjectMap;
    private _subscriptionObjectMap;
    private _copperControl;
    private _copperSelectedObject;
    private _moveBufferSkip;
    private _debounceClearFunc;
    constructor(_scene: Scene, config?: ITransformerConfig);
    updateZeroPoint(left: number, top: number): void;
    changeNotification(): this;
    getSelectedObjectMap(): Map<string, BaseObject>;
    resetProps(config?: ITransformerConfig): void;
    getScene(): Scene;
    clearControls(changeSelf?: boolean): void;
    updateControl(): void;
    debounceRefreshControls(): void;
    clearSelectedObjects(): void;
    refreshControls(): this;
    createControlForCopper(applyObject: BaseObject): void;
    clearCopperControl(): void;
    setSelectedControl(applyObject: BaseObject): void;
    private _getConfig;
    attachTo(applyObject: BaseObject): BaseObject;
    detachFrom(applyObject: BaseObject): BaseObject;
    dispose(): void;
    private _initialProps;
    private _checkMoveBoundary;
    private _moving;
    private _moveBufferBlocker;
    private _anchorMoving;
    private _moveFunc;
    private _getMovePoint;
    /**
     *
     */
    private _applyRotationForResult;
    private _updateCloseKeepRatioState;
    private _getLimitedSize;
    private _resizeLeftTop;
    private _resizeRightBottom;
    private _resizeLeftBottom;
    private _resizeRightTop;
    private _fixMoveLtRb;
    private _fixMoveLbRt;
    private _attachEventToAnchor;
    private _recoverySizeBoundary;
    private _attachEventToRotate;
    private _rotateMoving;
    private _getOutlinePosition;
    private _getRotateAnchorCursor;
    private _getCopperAnchorPosition;
    private _getRotateAnchorPosition;
    private _createResizeAnchor;
    private _createCopperResizeAnchor;
    private _getNorthEastPoints;
    private _getNorthWestPoints;
    private _getSouthEastPoints;
    private _getSouthWestPoints;
    private _checkTransformerType;
    private _updateControlIterator;
    private _updateControl;
    private _hideControl;
    private _attachHover;
    private _clearControls;
    /**
     * @description Clear the control of the object with the specified id
     * @param {string[]} ids the id of the object to be cleared
     */
    clearControlByIds(ids: string[]): void;
    private _clearControlMap;
    private _createControl;
    private _getTopScene;
    activeAnObject(applyObject: BaseObject): void;
    private _updateActiveObjectList;
    private _findGroupObject;
    private _addCancelObserver;
    private _smoothAccuracy;
}
export {};
