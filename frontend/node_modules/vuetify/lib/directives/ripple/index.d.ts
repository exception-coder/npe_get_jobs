// Styles

// Types
import type { DirectiveBinding } from 'vue';
export interface RippleDirectiveBinding extends Omit<DirectiveBinding, 'modifiers' | 'value'> {
    value?: boolean | {
        class?: string;
        keys?: string[];
    };
    modifiers: {
        center?: boolean;
        circle?: boolean;
        stop?: boolean;
    };
}
declare function mounted(el: HTMLElement, binding: RippleDirectiveBinding): void;
declare function unmounted(el: HTMLElement): void;
declare function updated(el: HTMLElement, binding: RippleDirectiveBinding): void;
export declare const Ripple: {
    mounted: typeof mounted;
    unmounted: typeof unmounted;
    updated: typeof updated;
};
export default Ripple;
