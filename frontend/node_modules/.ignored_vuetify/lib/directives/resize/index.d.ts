// Types
import type { DirectiveBinding } from 'vue';
interface ResizeDirectiveBinding extends Omit<DirectiveBinding, 'modifiers'> {
    value: () => void;
    modifiers?: {
        active?: boolean;
        quiet?: boolean;
    };
}
declare function mounted(el: HTMLElement, binding: ResizeDirectiveBinding): void;
declare function unmounted(el: HTMLElement, binding: ResizeDirectiveBinding): void;
export declare const Resize: {
    mounted: typeof mounted;
    unmounted: typeof unmounted;
};
export default Resize;
