// Types
import type { DirectiveBinding } from 'vue';
interface ClickOutsideBindingArgs {
    handler: (e: MouseEvent) => void;
    closeConditional?: (e: Event) => boolean;
    include?: () => HTMLElement[];
}
interface ClickOutsideDirectiveBinding extends DirectiveBinding {
    value: ((e: MouseEvent) => void) | ClickOutsideBindingArgs;
}
export declare const ClickOutside: {
    // [data-app] may not be found
    // if using bind, inserted makes
    // sure that the root element is
    // available, iOS does not support
    // clicks on body
    mounted(el: HTMLElement, binding: ClickOutsideDirectiveBinding): void;
    beforeUnmount(el: HTMLElement, binding: ClickOutsideDirectiveBinding): void;
};
export default ClickOutside;
