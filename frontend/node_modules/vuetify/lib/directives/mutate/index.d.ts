// Types
import type { DirectiveBinding } from 'vue';
import type { MutationOptions } from '../../composables/mutationObserver.js';
export interface MutationDirectiveBinding extends Omit<DirectiveBinding, 'modifiers' | 'value'> {
    value: MutationCallback | {
        handler: MutationCallback;
        options?: MutationObserverInit;
    };
    modifiers: MutationOptions;
}
declare function mounted(el: HTMLElement, binding: MutationDirectiveBinding): void;
declare function unmounted(el: HTMLElement, binding: MutationDirectiveBinding): void;
export declare const Mutate: {
    mounted: typeof mounted;
    unmounted: typeof unmounted;
};
export default Mutate;
