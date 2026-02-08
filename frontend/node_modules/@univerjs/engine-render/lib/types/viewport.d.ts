import { EventState, IPosition, Nullable, EventSubject } from '@univerjs/core';
import { BaseObject } from './base-object';
import { IWheelEvent } from './basics/i-events';
import { IBoundRectNoAngle, IViewportInfo, Vector2 } from './basics/vector2';
import { UniverRenderingContext } from './context';
import { Scene } from './scene';
import { ScrollBar } from './shape/scroll-bar';
import { Subject } from 'rxjs';
import { Transform } from './basics/transform';
import { Canvas as UniverCanvas } from './canvas';
interface ILimitedScrollResult {
    viewportScrollX: number;
    viewportScrollY: number;
    isLimitedX?: boolean;
    isLimitedY?: boolean;
}
interface IViewPosition {
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
    width?: number;
    height?: number;
}
interface IViewProps extends IViewPosition {
    attachX?: boolean;
    attachY?: boolean;
    isWheelPreventDefaultX?: boolean;
    isWheelPreventDefaultY?: boolean;
    active?: boolean;
    explicitViewportWidthSet?: boolean;
    explicitViewportHeightSet?: boolean;
    allowCache?: boolean;
    bufferEdgeX?: number;
    bufferEdgeY?: number;
}
export interface IScrollObserverParam {
    viewport?: Viewport;
    /**
     * scrollX for scrollbar
     */
    scrollX: number;
    scrollY: number;
    /**
     * scrollXY before limit function
     * why need this value?
     */
    rawScrollX?: number;
    rawScrollY?: number;
    /**
     * scrollX for viewport
     */
    viewportScrollX: number;
    viewportScrollY: number;
    limitX?: number;
    limitY?: number;
    isTrigger?: boolean;
}
interface IScrollBarPosition {
    x: number;
    y: number;
}
interface IViewportScrollPosition {
    viewportScrollX: number;
    viewportScrollY: number;
}
export interface IViewportReSizeParam {
    width: number;
    height: number;
    left: number;
    top: number;
    paddingStartX?: number;
    paddingStartY?: number;
    paddingEndX?: number;
    paddingEndY?: number;
}
export declare class Viewport {
    private _viewportKey;
    /**
     * scrollX means scroll x value for scrollbar in viewMain
     * use getBarScroll to get scrolling value(scrollX, scrollY) for scrollbar
     */
    _scrollX: number;
    _scrollY: number;
    private _preScrollX;
    private _preScrollY;
    /**
     * The viewport scroll offset equals the distance from the content area position to the top, and there is a conversion relationship with scrollX and scrollY
     * use transScroll2ViewportScrollValue to get scrolling value for spreadsheet.
     */
    private _viewportScrollX;
    private _viewportScrollY;
    private _preViewportScrollX;
    private _preViewportScrollY;
    /**
     * scene size in current viewport port with scale
     * scene size relative to row col settings.
     * if AB col has set to be freeze, then scene size in viewMain will be smaller compared to no freeze state.
     */
    private _sceneWCurrVpAfterScale;
    private _sceneHCurrVpAfterScale;
    /**
     * scene size with scale
     */
    private _sceneWidthAfterScale;
    private _sceneHeightAfterScale;
    onMouseWheel$: EventSubject<IWheelEvent>;
    onScrollAfter$: EventSubject<IScrollObserverParam>;
    onScrollEnd$: EventSubject<IScrollObserverParam>;
    onScrollByBar$: EventSubject<IScrollObserverParam>;
    onResized$: Subject<IViewportReSizeParam>;
    /**
     * viewport top origin value in logic, scale does not affect it.
     */
    private _topOrigin;
    /**
     * viewport left origin value in logic, scale does not affect it.
     */
    private _leftOrigin;
    private _bottomOrigin;
    private _rightOrigin;
    private _widthOrigin;
    private _heightOrigin;
    /**
     * this._topOrigin * scaleY;
     */
    private _top;
    /**
     * this._leftOrigin * scaleX;
     */
    private _left;
    private _bottom;
    private _right;
    private _width;
    private _height;
    private _scene;
    private _scrollBar?;
    private _isWheelPreventDefaultX;
    private _isWheelPreventDefaultY;
    private _scrollStopNum;
    private _clipViewport;
    private _active;
    /**
     * after create a freeze column & row, there is a "padding distance" from row header to curr viewport.
     */
    private _paddingStartX;
    private _paddingEndX;
    private _paddingStartY;
    private _paddingEndY;
    /**
     * viewbound of cache area, cache area is slightly bigger than viewbound.
     */
    private _cacheBound;
    private _preCacheBound;
    private _preCacheVisibleBound;
    /**
     * bound of visible area
     */
    private _viewBound;
    private _preViewBound;
    /**
     *  Whether the viewport needs to be updated.
     *  In future, viewMain dirty would not affect other viewports.
     */
    private _isDirty;
    /**
     * Canvas for cache if allowCache is true.
     */
    private _cacheCanvas;
    /**
     * The configuration comes from the props.allowCache passed in during viewport initialization.
     * When _allowCache is true, a cacheCanvas will be created.
     */
    private _allowCache;
    /**
     * Buffer Area size, default is zero
     */
    bufferEdgeX: number;
    bufferEdgeY: number;
    /**
     * Used to store the requestAnimationFrame ID for scroll animation.
     */
    scrollAnimationFrameId: number | null;
    constructor(viewportKey: string, scene: Scene, props?: IViewProps);
    initCacheCanvas(props: IViewProps | undefined, scene: Scene): void;
    get scene(): Scene;
    get width(): Nullable<number>;
    get height(): Nullable<number>;
    get viewportKey(): string;
    get topOrigin(): number;
    get leftOrigin(): number;
    get bottomOrigin(): number;
    get rightOrigin(): number;
    get top(): number;
    get left(): number;
    get bottom(): number;
    get right(): number;
    get isWheelPreventDefaultX(): boolean;
    get isWheelPreventDefaultY(): boolean;
    set width(w: Nullable<number>);
    set height(height: Nullable<number>);
    get isActive(): boolean;
    set viewportScrollX(val: number);
    get viewportScrollX(): number;
    set viewportScrollY(val: number);
    get viewportScrollY(): number;
    set scrollX(val: number);
    set scrollY(val: number);
    get scrollX(): number;
    get scrollY(): number;
    set top(num: number);
    set left(num: number);
    set bottom(num: number);
    set right(num: number);
    get viewBound(): IBoundRectNoAngle;
    get cacheBound(): IBoundRectNoAngle | null;
    set cacheBound(val: IBoundRectNoAngle | null);
    get preCacheBound(): IBoundRectNoAngle | null;
    set preCacheBound(val: IBoundRectNoAngle | null);
    get _deltaScrollX(): number;
    get _deltaScrollY(): number;
    get _deltaViewportScrollX(): number;
    get _deltaViewportScrollY(): number;
    get canvas(): UniverCanvas | null;
    enable(): void;
    disable(): void;
    /**
     * canvas resize & freeze change would invoke this method
     */
    resetCanvasSizeAndUpdateScroll(): void;
    setScrollBar(instance: ScrollBar): void;
    removeScrollBar(): void;
    /**
     * NOT same as resetCanvasSizeAndScrollbar
     * This method is triggered when adjusting the frozen row & col settings, and during initialization,
     * it is not triggered when resizing the window.
     *
     * Note that the 'position' parameter may not always have 'height' and 'width' properties. For the 'viewMain' element, it only has 'left', 'top', 'bottom', and 'right' properties.
     * Additionally, 'this.width' and 'this.height' may also be 'undefined'.
     * Therefore, you should use the '_getViewPortSize' method to retrieve the width and height.
     * @param position
     */
    resizeWhenFreezeChange(position: IViewPosition): void;
    setPadding(param: IPosition): void;
    resetPadding(): void;
    /**
     * ScrollBar scroll to certain position.
     * @param pos position of scrollBar
     */
    scrollToBarPos(pos: Partial<IScrollBarPosition>): {
        scrollX: number;
        scrollY: number;
        isLimitedX: boolean;
        isLimitedY: boolean;
    } | undefined;
    /**
     * Scrolling by current position plus delta.
     * the most common case is triggered by scroll-timer(in sheet)
     * @param delta
     * @returns isLimited
     */
    scrollByBarDeltaValue(delta: Partial<IScrollBarPosition>, isTrigger?: boolean): {
        scrollX: number;
        scrollY: number;
        isLimitedX: boolean;
        isLimitedY: boolean;
    } | undefined;
    /**
     * Viewport scroll to certain position.
     * @param pos
     * @param isTrigger
     * @returns {ILimitedScrollResult | null | undefined}
     */
    scrollToViewportPos(pos: Partial<IViewportScrollPosition>, isTrigger?: boolean): Nullable<ILimitedScrollResult>;
    /**
     * Scrolling by current position plus delta.
     * if viewport can not scroll(e.g. viewport size is bigger than content size), then return null.
     * @param delta
     * @param isTrigger
     * @returns {ILimitedScrollResult | null | undefined}
     */
    scrollByViewportDeltaVal(delta: IViewportScrollPosition, isTrigger?: boolean): Nullable<ILimitedScrollResult>;
    transViewportScroll2ScrollValue(viewportScrollX: number, viewportScrollY: number): {
        x: number;
        y: number;
    };
    transScroll2ViewportScrollValue(scrollX: number, scrollY: number): {
        x: number;
        y: number;
    };
    /**
     * get actual scroll value by scrollXY
     */
    getViewportScrollByScrollXY(): {
        x: number;
        y: number;
    };
    getScrollBar(): Nullable<ScrollBar>;
    /**
     * Just record state of scroll. This method won't scroll viewport and scrollbar.
     * TODO: @lumixraku this method is so wried, viewportMain did not call it, now only called in freeze situation.
     * @param current
     * @returns Viewport
     */
    updateScrollVal(current: Partial<IScrollObserverParam>): this;
    getScrollBarTransForm(): Transform;
    shouldIntoRender(): boolean;
    /**
     * Render function in each render loop.
     * @param parentCtx parentCtx is cacheCtx from layer when layer._allowCache is true
     * @param objects
     * @param isMaxLayer
     */
    render(parentCtx?: UniverRenderingContext, objects?: BaseObject[], isMaxLayer?: boolean): void;
    private _makeDefaultViewport;
    calcViewportInfo(): IViewportInfo;
    /**
     * Get viewport info
     * @deprecated use `calcViewportInfo`
     */
    getBounding(): IViewportInfo;
    /**
     * convert vector to scene coordinate, include row & col
     * @param vec
     * @returns Vector2
     */
    transformVector2SceneCoord(vec: Vector2): Vector2;
    getAbsoluteVector(coord: Vector2): Vector2;
    /**
     * At f7140a7c11, only doc need this method.
     * In sheet, wheel event is handled by scroll.render-controller@scene.onMouseWheel$
     * @param evt
     * @param state
     */
    onMouseWheel(evt: IWheelEvent, state: EventState): void;
    /**
     * Check if coord is in viewport.
     * Coord is relative to canvas (scale is handled in isHit, Just pass in the original coord from event)
     * @param coord
     * @returns {boolean} is in viewport
     */
    isHit(coord: Vector2): boolean;
    pickScrollBar(coord: Vector2): import('./shape').Rect<import('./shape').IRectProps> | null | undefined;
    openClip(): void;
    closeClip(): void;
    dispose(): void;
    limitedScroll(scrollX: Nullable<number>, scrollY: Nullable<number>): {
        scrollX: number;
        scrollY: number;
        isLimitedX: boolean;
        isLimitedY: boolean;
    };
    /**
     * Still in working progress, do not use it now.
     * @param viewportScrollX
     * @param viewportScrollY
     */
    _limitViewportScroll(viewportScrollX: number, viewportScrollY: number): ILimitedScrollResult;
    markDirty(state?: boolean): void;
    get isDirty(): boolean;
    private _isForceDirty;
    markForceDirty(state?: boolean): void;
    resetPrevCacheBounds(): void;
    get isForceDirty(): boolean;
    /**
     * resize canvas & use viewportScrollXY to scrollTo
     */
    private _resizeCacheCanvas;
    /**
     * Update scroll when viewport is resizing and removing rol & col
     */
    private _updateScrollByViewportScrollValue;
    private _calcViewPortSize;
    /**
     * update pre scroll value has handled in updateScroll()
     */
    private _afterRender;
    /**
     * mock scrollend.
     * @param scrollSubParam
     */
    private _emitScrollEnd$;
    /**
     *
     * When scroll just in X direction, there is no y definition in scrollXY. So scrollXY is Partial<IScrollBarPosition>
     * @param rawScrollXY Partial<IViewportScrollPosition>
     * @param isTrigger
     */
    private _scrollToBarPosCore;
    /**
     * Scroll to position in viewport.
     * @param scrollVpPos Partial<IViewportScrollPosition>
     * @param isTrigger
     */
    private _scrollToViewportPosCore;
    expandBounds(value: {
        top: number;
        left: number;
        bottom: number;
        right: number;
    }): IBoundRectNoAngle;
    updatePrevCacheBounds(viewBound?: IBoundRectNoAngle): void;
    private _calcCacheUpdate;
    private _diffViewBound;
    private _calcDiffCacheBound;
    private _drawScrollbar;
    setViewportSize(props?: IViewProps): void;
}
export {};
