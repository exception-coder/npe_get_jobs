import { CURSOR_TYPE, RENDER_CLASS_TYPE } from './basics/const';
import { IEvent } from './basics/i-events';
import { ITimeMetric, ITransformChangeState } from './basics/interfaces';
import { IBasicFrameInfo } from './basics/performance-monitor';
import { Scene } from './scene';
import { Disposable, EventSubject } from '@univerjs/core';
import { Observable, Subject } from 'rxjs';
import { Canvas, CanvasRenderMode } from './canvas';
import { ICanvasColorService } from './services/canvas-color.service';
export interface IEngineOption {
    elementWidth: number;
    elementHeight: number;
    dpr?: number;
    renderMode?: CanvasRenderMode;
}
export declare class Engine extends Disposable {
    readonly canvasColorService?: ICanvasColorService | undefined;
    renderEvenInBackground: boolean;
    private readonly _beginFrame$;
    readonly beginFrame$: Observable<number>;
    private readonly _endFrame$;
    readonly endFrame$: Observable<IBasicFrameInfo>;
    readonly renderFrameTimeMetric$: Subject<ITimeMetric>;
    readonly renderFrameTags$: Subject<[string, any]>;
    /**
     * Pass event to scene.input-manager
     */
    readonly onInputChanged$: EventSubject<IEvent>;
    readonly onTransformChange$: EventSubject<ITransformChangeState>;
    private _scenes;
    private _activeScene;
    /**
     * time when render start, for elapsedTime
     */
    private _renderStartTime;
    private _rect$;
    get clientRect$(): Observable<void>;
    private _container;
    private _canvas;
    private _renderingQueueLaunched;
    private _renderFrameTasks;
    private _requestNewFrameHandler;
    private _frameId;
    private _usingSafari;
    private _resizeObserver;
    private _fps;
    private _deltaTime;
    private _performanceMonitor;
    private _pointerClickEvent;
    private _pointerDblClickEvent;
    private _pointerMoveEvent;
    private _pointerDownEvent;
    private _pointerUpEvent;
    private _pointerOutEvent;
    private _pointerCancelEvent;
    private _pointerBlurEvent;
    private _pointerWheelEvent;
    private _pointerEnterEvent;
    private _pointerLeaveEvent;
    private _dragEnterEvent;
    private _dragLeaveEvent;
    private _dragOverEvent;
    private _dropEvent;
    private _remainCapture;
    /** previous pointer position */
    private _pointerPosRecord;
    private _mouseId;
    private _isUsingFirefox;
    private _previousWidth;
    private _previousHeight;
    private _unitId;
    get unitId(): string;
    get elapsedTime(): number;
    get width(): number;
    get height(): number;
    get classType(): RENDER_CLASS_TYPE;
    get activeScene(): Scene | null;
    constructor(unitId?: string, _options?: IEngineOption, canvasColorService?: ICanvasColorService | undefined);
    getScenes(): {
        [sceneKey: string]: Scene;
    };
    getScene(sceneKey: string): Scene | null;
    hasScene(sceneKey: string): boolean;
    addScene(sceneInstance: Scene): Scene;
    setActiveScene(sceneKey: string): Scene | null;
    hasActiveScene(): boolean;
    get requestNewFrameHandler(): number;
    /**
     * Gets the current frame id
     */
    get frameId(): number;
    setCanvasCursor(val: CURSOR_TYPE): void;
    clearCanvas(): void;
    getCanvas(): Canvas;
    getCanvasElement(): HTMLCanvasElement;
    /**
     * To ensure mouse events remain bound to the host element,
     * preventing the events from becoming ineffective once the mouse leaves the host.
     */
    setCapture(): void;
    getPixelRatio(): number;
    private _resizeListenerDisposable;
    /**
     * Mount the canvas to the element so it would be rendered on UI.
     * @param {HTMLElement} element - The element the canvas will mount on.
     * @param {true} [resize] If should perform resize when mounted and observe resize event.
     */
    mount(element: HTMLElement, resize?: boolean): void;
    /**
     * Unmount the canvas without disposing it so it can be mounted again.
     */
    unmount(): void;
    /**
     * Mount the canvas to the element so it would be rendered on UI.
     * @deprecated Please use `mount` instead.
     * @param {HTMLElement} element - The element the canvas will mount on.
     * @param {true} [resize] If should perform resize when mounted and observe resize event.
     */
    setContainer(element: HTMLElement, resize?: boolean): void;
    private _clearResizeListener;
    resize(): void;
    dprChange(): void;
    /**
     * set canvas element size
     * @param width
     * @param height
     */
    resizeBySize(width: number, height: number): void;
    dispose(): void;
    addFunction2RenderLoop(renderFunction: () => void): void;
    startRenderLoop(): void;
    /**
     * Register and execute a render loop. The engine could manage more than one render function
     * @param renderFunction defines the function to continuously execute
     */
    runRenderLoop(renderFunction: () => void): void;
    /**
     * call itself by raf
     * Exec all function in _renderFrameTasks in _renderFrame()
     */
    private _renderFunction;
    /**
     * stop executing a render loop function and remove it from the execution array
     * @param renderFunction defines the function to be removed. If not provided all functions will be removed.
     */
    stopRenderLoop(renderFunction?: () => void): void;
    /**
     * Begin a new frame
     */
    _beginFrame(_timestamp: number): void;
    /**
     * End the current frame
     */
    _endFrame(timestamp: number): void;
    /**
     * Gets the current framerate
     * @returns a number representing the framerate
     */
    getFps(): number;
    /**
     * Gets the time spent between current and previous frame
     * @returns a number representing the delta time in ms
     */
    getDeltaTime(): number;
    /**
     * Exec all function in _renderFrameTasks
     */
    private _renderFrame;
    private _cancelFrame;
    private _getHostWindow;
    private _handleKeyboardAction;
    private _handlePointerAction;
    private _handleDragAction;
    private _getWheelEventName;
    private _getPassive;
    private _getPointerType;
    private _matchMediaHandler;
}
