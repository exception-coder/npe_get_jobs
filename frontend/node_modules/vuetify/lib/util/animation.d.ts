// Utilities
import { Box } from './box.js';
/** @see https://stackoverflow.com/a/57876601/2074736 */
export declare function nullifyTransforms(el: HTMLElement): Box;
export declare function animate(el: Element, keyframes: Keyframe[] | PropertyIndexedKeyframes | null, options?: number | KeyframeAnimationOptions): Animation | {
    finished: Promise<void>;
};
