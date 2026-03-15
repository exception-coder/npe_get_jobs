import { Nullable, Disposable } from '@univerjs/core';
import { Vector2 } from '../basics/vector2';
import { UniverRenderingContext } from '../context';
import { Scene } from '../scene';
import { Viewport } from '../viewport';
import { Rect } from './rect';
export interface IScrollBarProps {
    mainScene?: Scene;
    /** Margin between the track to the edge of the scrollable area. Default is 2px. */
    thumbMargin?: number;
    thumbLengthRatio?: number;
    /** Background color of the thumb. */
    thumbBackgroundColor?: string;
    /** Background color of the thumb on hover. */
    thumbHoverBackgroundColor?: string;
    /** Background color of the thumb when active. */
    thumbActiveBackgroundColor?: string;
    /** Background color of the track. */
    trackBackgroundColor?: string;
    /** Background color of the track border. */
    trackBorderColor?: string;
    /** The thickness of a scrolling track (not scrolling thumb). */
    barSize?: number;
    /** The thickness of track border. */
    barBorder?: number;
    /** Enable the horizontal scroll bar. True by default. */
    enableHorizontal?: boolean;
    /** Enable the vertical scroll bar. True by default. */
    enableVertical?: boolean;
    /** The min width of horizon thumb. Default is 17 px. */
    minThumbSizeH?: number;
    /** The min height of vertical thumb. Default is 17 px. */
    minThumbSizeV?: number;
}
export declare class ScrollBar extends Disposable {
    _enableHorizontal: boolean;
    _enableVertical: boolean;
    horizontalThumbSize: number;
    horizontalMinusMiniThumb: number;
    horizontalTrackWidth: number;
    horizonScrollTrack: Nullable<Rect>;
    horizonThumbRect: Nullable<Rect>;
    verticalThumbSize: number;
    verticalTrackHeight: number;
    verticalMinusMiniThumb: number;
    verticalScrollTrack: Nullable<Rect>;
    verticalThumbRect: Nullable<Rect>;
    placeholderBarRect: Nullable<Rect>;
    protected _viewport: Viewport;
    private _mainScene;
    private _lastX;
    private _lastY;
    private _isHorizonMove;
    private _isVerticalMove;
    private _horizonPointerMoveSub;
    private _horizonPointerUpSub;
    private _verticalPointerMoveSub;
    private _verticalPointerUpSub;
    private _thumbDefaultBackgroundColor;
    private _thumbHoverBackgroundColor;
    private _thumbActiveBackgroundColor;
    private _trackBackgroundColor;
    private _trackBorderColor;
    /**
     * The thickness of a scrolling track
     * ThumbSize = trackSize - thumbMargin * 2
     */
    private _trackThickness;
    /**
     * The margin between thumb and bar.
     * ThumbSize = barSize - thumbMargin * 2
     */
    private _vThumbMargin;
    private _hThumbMargin;
    private _trackBorderThickness;
    private _thumbLengthRatio;
    /**
     * The min width of horizon thumb, Corresponds to minThumbSizeH in props
     */
    private _minThumbSizeH;
    /**
     * The min height of vertical thumb,  Corresponds to minThumbSizeV in props
     */
    private _minThumbSizeV;
    private _eventSub;
    constructor(view: Viewport, props?: IScrollBarProps);
    setProps(props?: IScrollBarProps): void;
    get enableHorizontal(): boolean;
    set enableHorizontal(val: boolean);
    get enableVertical(): boolean;
    set enableVertical(val: boolean);
    get limitX(): number;
    get limitY(): number;
    get ratioScrollX(): number;
    get ratioScrollY(): number;
    get miniThumbRatioX(): number;
    get miniThumbRatioY(): number;
    hasHorizonThumb(): boolean;
    hasVerticalThumb(): boolean;
    get scrollHorizonThumbThickness(): number;
    get scrollVerticalThumbThickness(): number;
    set barSize(v: number);
    get barSize(): number;
    set trackThickness(v: number);
    get trackThickness(): number;
    static attachTo(view: Viewport, props?: IScrollBarProps): ScrollBar;
    dispose(): void;
    render(ctx: UniverRenderingContext, left?: number, top?: number): void;
    private _resizeHorizontal;
    private _resizeVertical;
    private _resizeRightBottomCorner;
    private _viewportH;
    private _viewportW;
    private _contentW;
    private _contentH;
    /**
     * Adjust scroll track & thumb size based on the viewport size.
     * @param viewportWidth
     * @param viewportHeight
     * @param contentWidth
     * @param contentHeight
     */
    resize(viewportWidth?: number, viewportHeight?: number, contentWidth?: number, contentHeight?: number): void;
    makeDirty(state: boolean): void;
    makeViewDirty(state: boolean): void;
    pick(coord: Vector2): Rect<import('./rect').IRectProps> | null;
    private _initialScrollRect;
    private _initialVerticalEvent;
    private _horizonHoverFunc;
    private _horizonHoverLeaveFunc;
    private _verticalHoverFunc;
    private _verticalHoverLeaveFunc;
    private _hoverFunc;
    private _initialHorizontalEvent;
}
