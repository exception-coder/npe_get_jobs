// Types
import type { DirectiveBinding } from 'vue';
type ObserveHandler = (isIntersecting: boolean, entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void;
export interface ObserveDirectiveBinding extends Omit<DirectiveBinding, 'modifiers' | 'value'> {
    value?: ObserveHandler | {
        handler: ObserveHandler;
        options?: IntersectionObserverInit;
    };
    modifiers: {
        once?: boolean;
        quiet?: boolean;
    };
}
declare function mounted(el: HTMLElement, binding: ObserveDirectiveBinding): void;
declare function unmounted(el: HTMLElement, binding: ObserveDirectiveBinding): void;
export declare const Intersect: {
    mounted: typeof mounted;
    unmounted: typeof unmounted;
};
export default Intersect;
