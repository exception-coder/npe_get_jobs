// Types
import type { DirectiveBinding } from 'vue';
interface ScrollDirectiveBinding extends Omit<DirectiveBinding, 'modifiers'> {
    value: EventListener | {
        handler: EventListener;
        options?: AddEventListenerOptions;
    } | (EventListenerObject & {
        options?: AddEventListenerOptions;
    });
    modifiers?: {
        self?: boolean;
    };
}
declare function mounted(el: HTMLElement, binding: ScrollDirectiveBinding): void;
declare function unmounted(el: HTMLElement, binding: ScrollDirectiveBinding): void;
declare function updated(el: HTMLElement, binding: ScrollDirectiveBinding): void;
export declare const Scroll: {
    mounted: typeof mounted;
    unmounted: typeof unmounted;
    updated: typeof updated;
};
export default Scroll;
