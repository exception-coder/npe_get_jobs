import { IPaddingData } from '@univerjs/core';
import { Scene } from './scene';
import { Viewport } from './viewport';
export declare enum ScrollTimerType {
    NONE = 0,
    X = 1,
    Y = 2,
    ALL = 3
}
export declare class ScrollTimer {
    private _scene;
    private _scrollTimerType;
    private _thresholdAutoMove;
    private _requestNewFrameNumber;
    private _viewport;
    private _offsetX;
    private _offsetY;
    private _moveX;
    private _moveY;
    private _scrollX;
    private _scrollY;
    /**
     * Customize scroll function.
     */
    private _scrollFunction;
    constructor(_scene: Scene, _scrollTimerType?: ScrollTimerType, _thresholdAutoMove?: IPaddingData);
    static create(scene: Scene, scrollTimerType?: ScrollTimerType, padding?: IPaddingData): ScrollTimer;
    get offsetX(): number;
    get offsetY(): number;
    set scrollTimerType(type: ScrollTimerType);
    get scrollTimerType(): ScrollTimerType;
    setActiveViewport(viewport: Viewport): void;
    getActiveViewport(): any;
    startScroll(offsetX: number, offsetY: number, targetViewport?: any): void;
    private _autoScroll;
    scrolling(offsetX: number, offsetY: number, scrollFunction: (x?: number, y?: number) => void): void;
    stopScroll(): void;
    dispose(): void;
    getScene(): Scene;
    private _runRenderLoop;
}
