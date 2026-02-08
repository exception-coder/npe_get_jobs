import { Nullable, Disposable, EventSubject } from '@univerjs/core';
import { BaseObject } from './base-object';
import { IDragEvent, IKeyboardEvent, IMouseEvent, IPointerEvent, IWheelEvent } from './basics/i-events';
import { ISceneTransformState, ITransformChangeState } from './basics/interfaces';
import { ITransformerConfig } from './basics/transformer-config';
import { Vector2 } from './basics/vector2';
import { Canvas } from './canvas';
import { UniverRenderingContext } from './context';
import { Engine } from './engine';
import { SceneViewer } from './scene-viewer';
import { Viewport } from './viewport';
import { CURSOR_TYPE, RENDER_CLASS_TYPE } from './basics/const';
import { Transform } from './basics/transform';
import { Layer } from './layer';
import { Transformer } from './scene.transformer';
export declare const MAIN_VIEW_PORT_KEY = "viewMain";
export interface ISceneInputControlOptions {
    enableDown: boolean;
    enableUp: boolean;
    enableMove: boolean;
    enableWheel: boolean;
    enableEnter: boolean;
    enableLeave: boolean;
}
export declare class Scene extends Disposable {
    private _parent;
    private _sceneKey;
    /**
     * Width of scene content, does not affected by zoom.
     */
    private _width;
    /**
     * Height of scene content, does not affected by zoom.
     */
    private _height;
    private _scaleX;
    private _scaleY;
    private _transform;
    private _evented;
    private _layers;
    private _viewports;
    private _cursor;
    private _defaultCursor;
    private _addObject$;
    readonly addObject$: import('rxjs').Observable<Scene>;
    onTransformChange$: EventSubject<ITransformChangeState>;
    onFileLoaded$: EventSubject<string>;
    onPointerDown$: EventSubject<IMouseEvent | IPointerEvent>;
    onPointerMove$: EventSubject<IMouseEvent | IPointerEvent>;
    onPointerUp$: EventSubject<IMouseEvent | IPointerEvent>;
    onPointerEnter$: EventSubject<IMouseEvent | IPointerEvent>;
    onPointerOut$: EventSubject<IMouseEvent | IPointerEvent>;
    onPointerCancel$: EventSubject<IMouseEvent | IPointerEvent>;
    onPointerLeave$: EventSubject<IMouseEvent | IPointerEvent>;
    onDragEnter$: EventSubject<IDragEvent>;
    onDragOver$: EventSubject<IDragEvent>;
    onDragLeave$: EventSubject<IDragEvent>;
    onDrop$: EventSubject<IDragEvent>;
    onClick$: EventSubject<IMouseEvent | IPointerEvent>;
    onSingleClick$: EventSubject<IMouseEvent | IPointerEvent>;
    onDblclick$: EventSubject<IMouseEvent | IPointerEvent>;
    onTripleClick$: EventSubject<IMouseEvent | IPointerEvent>;
    onMouseWheel$: EventSubject<IWheelEvent>;
    /**
     * @deprecated  use `fromGlobalEvent('keydown')` from rx.js instead.
     */
    onKeyDown$: EventSubject<IKeyboardEvent>;
    /**
     * @deprecated  use `fromGlobalEvent('keyup')` from rx.js instead.
     */
    onKeyUp$: EventSubject<IKeyboardEvent>;
    private _beforeRender$;
    readonly beforeRender$: import('rxjs').Observable<Nullable<Canvas>>;
    private _afterRender$;
    readonly afterRender$: import('rxjs').Observable<Nullable<Canvas>>;
    /**
     * Transformer constructor.  Transformer is a special type of group that allow you transform
     * primitives and shapes. Transforming tool is not changing `width` and `height` properties of nodes
     * when you resize them. Instead it changes `scaleX` and `scaleY` properties.
     */
    private _transformer;
    /** @hidden */
    private _inputManager;
    constructor(sceneKey: string, _parent: Engine | SceneViewer, state?: ISceneTransformState);
    get classType(): RENDER_CLASS_TYPE;
    get transform(): Transform;
    get width(): number;
    get height(): number;
    get scaleX(): number;
    get scaleY(): number;
    get sceneKey(): string;
    get objectsEvented(): boolean;
    set transform(trans: Transform);
    set width(num: number);
    set height(num: number);
    set scaleX(scaleX: number);
    set scaleY(scaleY: number);
    /**
     * ancestorScaleX means this.scaleX * ancestorScaleX
     */
    get ancestorScaleX(): number;
    /**
     * ancestorScaleY means this.scaleY * ancestorScaleY
     */
    get ancestorScaleY(): number;
    getAncestorScale(): {
        scaleX: number;
        scaleY: number;
    };
    get ancestorLeft(): number;
    get ancestorTop(): number;
    set cursor(val: CURSOR_TYPE);
    attachControl(options?: ISceneInputControlOptions): this | undefined;
    detachControl(): this;
    makeDirty(state?: boolean): this;
    makeDirtyNoParent(state?: boolean): this;
    enableLayerCache(...layerIndexes: number[]): void;
    disableLayerCache(...layerIndexes: number[]): void;
    isDirty(): boolean;
    getCursor(): CURSOR_TYPE;
    resetCursor(): void;
    setCursor(val: CURSOR_TYPE): void;
    setDefaultCursor(val: CURSOR_TYPE): void;
    /**
     * @deprecated use transformByState instead.
     * @param width
     * @param height
     */
    resize(width?: number, height?: number): this;
    /**
     * Unlike @scale, this method doesn't emit event.
     * @param scaleX
     * @param scaleY
     */
    setScaleValueOnly(scaleX: number, scaleY: number): void;
    /**
     * Set scale, and then emit event to update Viewport scroll state.
     * @param scaleX
     * @param scaleY
     * @returns Scene
     */
    scale(scaleX?: number, scaleY?: number): this;
    /**
     * Apply scaleXY base on current scaleX and scaleY
     */
    scaleBy(deltaScaleX?: number, deltaScaleY?: number): this;
    /**
     * Reset canvas size and update scroll
     * @param state
     */
    transformByState(state: ISceneTransformState): void;
    getParent(): Engine | SceneViewer;
    getEngine(): Nullable<Engine>;
    getLayers(): Layer[];
    getLayer(zIndex?: number): Layer;
    findLayerByZIndex(zIndex?: number): Nullable<Layer>;
    getLayerMaxZIndex(): number;
    addLayer(...argument: Layer[]): void;
    /**
     * Add objects to Layer( Layer is specfied by zIndex)
     * If object is a group, insert all its children and group itself to _objects[].
     * @param objects
     * @param zIndex
     * @returns {Scene} this
     */
    addObjects(objects: BaseObject[], zIndex?: number): Scene;
    /**
     * Add object to Layer (Layer is specified by zIndex).
     * If object is a group, insert all its children and group itself to _objects[].
     * @param o
     * @param zIndex layer index
     * @returns {Scene} scene
     */
    addObject(o: BaseObject, zIndex?: number): Scene;
    /**
     * Set Scene as object parent, if object has no parent.
     * @param o
     * @returns {void}
     */
    setObjectBehavior(o: BaseObject): void;
    removeObject(object?: BaseObject | string): Nullable<Scene>;
    removeObjects(objects?: BaseObject[] | string[]): Nullable<Scene>;
    getObjectsByLayer(zIndex: number): BaseObject[];
    /**
     * Get all objects of each Layer.
     * @returns {BaseObject[]} objects
     */
    getAllObjects(): BaseObject[];
    /**
     * Get objects which is visible and not in a group in each layer.
     * @returns BaseObject[]
     */
    getAllObjectsByOrder(): BaseObject[];
    /**
     * get objects which is visible and not in a group.
     * @param isDesc
     * @returns BaseObject[]
     */
    getAllObjectsByDescOrder(isDesc?: boolean): BaseObject[];
    /**
     * Get visible and evented objects.
     * @param isDesc
     * @returns {BaseObject[]} objects
     */
    getAllObjectsByOrderForPick(isDesc?: boolean): BaseObject[];
    /**
     * Get object in all layers by okey.
     * @param oKey
     * @returns
     */
    getObject(oKey: string): Nullable<BaseObject>;
    getObjectIncludeInGroup(oKey: string): Nullable<BaseObject>;
    fuzzyMathObjects(oKey: string, matchStart?: boolean): BaseObject[];
    addViewport(...viewport: Viewport[]): this;
    removeViewport(key: string): Viewport | undefined;
    getViewports(): Viewport[];
    getMainViewport(): Viewport;
    getViewport(key: string): Viewport | undefined;
    render(parentCtx?: UniverRenderingContext): void;
    requestRender(parentCtx?: UniverRenderingContext): Promise<unknown>;
    /**
     * create transformer if not exist, and then transformer attach to object that passed in by parameter.
     * @param o
     */
    attachTransformerTo(o: BaseObject): void;
    detachTransformerFrom(o: BaseObject): void;
    initTransformer(config?: ITransformerConfig): void;
    getTransformerByCreate(): Transformer;
    getTransformer(): Nullable<Transformer>;
    updateTransformerZero(left: number, top: number): void;
    /**
     * Get viewport by cursor position.
     * Position is relative to canvas(event offsetXY).
     * @param coord
     * @returns
     */
    findViewportByPosToScene(coord: Vector2): Viewport | undefined;
    getActiveViewportByCoord(coord: Vector2): Viewport | undefined;
    /**
     * @deprecated use `getScrollXYInfoByViewport` instead.
     * @param pos
     * @param viewPort
     */
    getVpScrollXYInfoByPosToVp(pos: Vector2, viewPort?: Viewport): {
        x: number;
        y: number;
    };
    /**
     * getViewportScrollXYInfo by viewport under cursor position
     * prev getScrollXYByRelativeCoords
     * @param pos
     * @param viewPort
     */
    getScrollXYInfoByViewport(pos: Vector2, viewPort?: Viewport): {
        x: number;
        y: number;
    };
    getDefaultViewport(): Viewport;
    getViewportScrollXY(viewPort: Viewport): {
        x: number;
        y: number;
    };
    /**
     * @deprecated use `getCoordRelativeToViewport` instead
     * @param coord
     * @returns
     */
    getRelativeToViewportCoord(coord: Vector2): Vector2;
    /**
     * Get coord to active viewport.
     * In a nested scene scenario, it is necessary to obtain the relative offsets layer by layer.
     *
     * origin name: getRelativeToViewportCoord
     * @param coord Coordinates to be converted.
     * @returns
     */
    getCoordRelativeToViewport(coord: Vector2): Vector2;
    clearLayer(): void;
    clearViewports(): void;
    getPrecisionScale(): {
        scaleX: number;
        scaleY: number;
    };
    dispose(): void;
    /**
     * Get the object under the pointer, if scene.event is disabled, return null.
     * @param {Vector2} coord
     * @return {Nullable<BaseObject | Scene>} object under the pointer
     */
    pick(coord: Vector2): Nullable<BaseObject | Scene>;
    triggerPointerUp(evt: IPointerEvent | IMouseEvent): boolean;
    triggerMouseWheel(evt: IWheelEvent): boolean;
    triggerSingleClick(evt: IPointerEvent | IMouseEvent): boolean;
    triggerClick(evt: IPointerEvent | IMouseEvent): boolean;
    triggerDblclick(evt: IPointerEvent | IMouseEvent): boolean;
    triggerTripleClick(evt: IPointerEvent | IMouseEvent): boolean;
    triggerPointerMove(evt: IPointerEvent | IMouseEvent): boolean;
    triggerPointerDown(evt: IPointerEvent | IMouseEvent): boolean;
    triggerPointerOut(evt: IPointerEvent | IMouseEvent): boolean;
    triggerPointerLeave(evt: IPointerEvent | IMouseEvent): boolean;
    triggerPointerOver(evt: IPointerEvent | IMouseEvent): boolean;
    triggerPointerCancel(evt: IPointerEvent): boolean;
    triggerPointerEnter(evt: IPointerEvent | IMouseEvent): boolean;
    triggerDragLeave(evt: IDragEvent): boolean;
    triggerDragOver(evt: IDragEvent): boolean;
    triggerDragEnter(evt: IDragEvent): boolean;
    triggerDrop(evt: IDragEvent): boolean;
    /**
     * Triggered when scale, resize of scene.
     * origin name: _setTransForm
     *
     */
    private _transformHandler;
    /**
     * If scene.event is disabled, scene.pick(cursor Pos) return null.
     * Then only scene itself can response to pointer event, all objects under the scene would not.
     * see sceneInputManager@_onPointerMove
     */
    disableObjectsEvent(): void;
    enableObjectsEvent(): void;
    _capturedObject: BaseObject | null;
    get capturedObject(): BaseObject | null;
    setCaptureObject(o: BaseObject): void;
    releaseCapturedObject(): void;
}
