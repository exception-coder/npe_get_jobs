// Types
import type { DirectiveBinding } from 'vue';
export interface TouchHandlers {
    start?: (wrapperEvent: {
        originalEvent: TouchEvent;
    } & TouchData) => void;
    end?: (wrapperEvent: {
        originalEvent: TouchEvent;
    } & TouchData) => void;
    move?: (wrapperEvent: {
        originalEvent: TouchEvent;
    } & TouchData) => void;
    left?: (wrapper: TouchData) => void;
    right?: (wrapper: TouchData) => void;
    up?: (wrapper: TouchData) => void;
    down?: (wrapper: TouchData) => void;
}
export interface TouchData {
    touchstartX: number;
    touchstartY: number;
    touchmoveX: number;
    touchmoveY: number;
    touchendX: number;
    touchendY: number;
    offsetX: number;
    offsetY: number;
}
export type TouchWrapper = TouchHandlers & TouchData;
export interface TouchValue extends TouchHandlers {
    parent?: boolean;
    options?: AddEventListenerOptions;
}
export interface TouchStoredHandlers {
    touchstart: (e: TouchEvent) => void;
    touchend: (e: TouchEvent) => void;
    touchmove: (e: TouchEvent) => void;
}
export interface TouchDirectiveBinding extends Omit<DirectiveBinding, 'value'> {
    value?: TouchValue;
}
declare function mounted(el: HTMLElement, binding: TouchDirectiveBinding): void;
declare function unmounted(el: HTMLElement, binding: TouchDirectiveBinding): void;
export declare const Touch: {
    mounted: typeof mounted;
    unmounted: typeof unmounted;
};
export default Touch;
