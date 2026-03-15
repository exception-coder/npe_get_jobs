// Types
import type { MaybeRefOrGetter } from 'vue';
export declare const standardEasing = "cubic-bezier(0.4, 0, 0.2, 1)";
export declare const deceleratedEasing = "cubic-bezier(0.0, 0, 0.2, 1)"; // Entering
export declare const acceleratedEasing = "cubic-bezier(0.4, 0, 1, 1)"; // Leaving
export type EasingFunction = (n: number) => number;
export declare const easingPatterns: {
    readonly linear: (t: number) => number;
    readonly easeInQuad: (t: number) => number;
    readonly easeOutQuad: (t: number) => number;
    readonly easeInOutQuad: (t: number) => number;
    readonly easeInCubic: (t: number) => number;
    readonly easeOutCubic: (t: number) => number;
    readonly easeInOutCubic: (t: number) => number;
    readonly easeInQuart: (t: number) => number;
    readonly easeOutQuart: (t: number) => number;
    readonly easeInOutQuart: (t: number) => number;
    readonly easeInQuint: (t: number) => number;
    readonly easeOutQuint: (t: number) => number;
    readonly easeInOutQuint: (t: number) => number;
    readonly instant: (t: number) => number;
};
export type EasingOptions = {
    duration?: number;
    transition?: EasingFunction;
};
export declare function useTransition(source: MaybeRefOrGetter<number>, options: MaybeRefOrGetter<EasingOptions>): import("vue").ComputedRef<number>;
