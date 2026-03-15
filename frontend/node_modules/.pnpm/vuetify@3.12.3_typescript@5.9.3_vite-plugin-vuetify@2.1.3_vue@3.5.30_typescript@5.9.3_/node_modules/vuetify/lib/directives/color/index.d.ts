import { VNode, VNodeDirective } from 'vue';
declare function updateColor(el: HTMLElement, binding: VNodeDirective, node: VNode): void;
declare function update(el: HTMLElement, binding: VNodeDirective, node: VNode): void;
export declare const Color: {
    bind: typeof updateColor;
    update: typeof update;
};
export default Color;
