import { Disposable } from '@univerjs/core';
export declare const DEFAULT_FRAME_SAMPLE_SIZE = 60;
export declare const DEFAULT_FRAME_LIST_SIZE: number;
export interface IBasicFrameInfo {
    FPS: number;
    frameTime: number;
    elapsedTime: number;
}
export interface IExtendFrameInfo extends IBasicFrameInfo {
    [key: string]: any;
    scrolling: boolean;
}
export interface ISummaryFrameInfo {
    FPS: ISummaryMetric;
    frameTime: ISummaryMetric;
    [key: string]: ISummaryMetric;
}
export interface ISummaryMetric {
    avg: number;
    min: number;
    max: number;
}
/**
 * Performance monitor tracks rolling average frame-time and frame-time variance over a user defined sliding-window
 */
export declare class PerformanceMonitor extends Disposable {
    private _enabled;
    private _rollingFrameTime;
    private _lastFrameTimeMs;
    /**
     * Counting frame in a second.
     */
    private _frameCountInLastSecond;
    /**
     *  The millisecond value of the last second. For counting frame in a second.
     */
    private _lastSecondTimeMs;
    /**
     * The FPS values recorded in the past 1 second.
     */
    private _recFPSValueLastSecond;
    /**
     * @param {number} frameSampleSize The number of samples required to saturate the sliding window
     */
    constructor(frameSampleSize?: number);
    dispose(): void;
    /**
     * Returns the average frame time in milliseconds of the sliding window (or the subset of frames sampled so far)
     */
    get averageFrameTime(): number;
    /**
     * Returns the variance frame time in milliseconds over the sliding window (or the subset of frames sampled so far)
     */
    get averageFrameTimeVariance(): number;
    /**
     * Returns the frame time of the last recent frame.
     */
    get instantaneousFrameTime(): number;
    /**
     * Returns the average framerate in frames per second over the sliding window (or the subset of frames sampled so far)
     */
    get averageFPS(): number;
    /**
     * Returns the average framerate in frames per second using the most recent frame time
     */
    get instantaneousFPS(): number;
    /**
     * Returns true if enough samples have been taken to completely fill the sliding window
     */
    get isSaturated(): boolean;
    /**
     * Returns true if sampling is enabled
     */
    get isEnabled(): boolean;
    /**
     * Samples current frame, set averageFPS instantaneousFrameTime
     * this method is called each frame by engine renderLoop  --> endFrame.
     * @param timestamp A timestamp in milliseconds of the current frame to compare with other frames
     */
    sampleFrame(timestamp?: number): void;
    endFrame(timestamp: number): void;
    now(): number;
    /**
     * Enables contributions to the sliding window sample set
     */
    enable(): void;
    /**
     * Disables contributions to the sliding window sample set
     * Samples will not be interpolated over the disabled period
     */
    disable(): void;
    /**
     * Resets performance monitor
     */
    reset(): void;
}
/**
 * RollingAverage
 *
 * Utility to efficiently compute the rolling average and variance over a sliding window of samples
 */
export declare class RollingAverage {
    /**
     * Current average
     */
    averageFrameTime: number;
    /**
     * Current variance
     */
    variance: number;
    protected _samples: number[];
    /**
     * for isStaturated
     * max value of _sampleCount is length of _samples
     */
    protected _sampleCount: number;
    protected _pos: number;
    protected _m2: number;
    /**
     * constructor
     * @param length The number of samples required to saturate the sliding window
     */
    constructor(length: number);
    /**
     * Calc average frameTime and variance.
     */
    calcAverageFrameTime(): void;
    /**
     * Adds a sample to the sample set
     * @param frameTime The sample value
     */
    addFrameTime(frameTime: number): void;
    /**
     * Returns previously added values or null if outside of history or outside the sliding window domain
     * @param i Index in history. For example, pass 0 for the most recent value and 1 for the value before that
     * @return Value previously recorded with add() or null if outside of range
     */
    history(i: number): number;
    /**
     * Returns true if enough samples have been taken to completely fill the sliding window
     * @return true if sample-set saturated
     */
    isSaturated(): boolean;
    /**
     * Resets the rolling average (equivalent to 0 samples taken so far)
     */
    reset(): void;
    /**
     * Wraps a value around the sample range boundaries
     * @param i Position in sample range, for example if the sample length is 5, and i is -3, then 2 will be returned.
     * @return Wrapped position in sample range
     */
    protected _wrapPosition(i: number): number;
}
