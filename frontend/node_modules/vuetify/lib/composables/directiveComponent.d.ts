// Types
import type { Component, DirectiveBinding, ObjectDirective, VNode } from 'vue';
import type { ComponentInstance } from '../util/index.js';
type ExcludeProps = 'v-slots' | `v-slot:${string}` | `on${Uppercase<string>}${string}` | 'key' | 'ref' | 'ref_for' | 'ref_key' | '$children';
declare const CustomDirectiveSymbol: unique symbol;
type DirectiveHook<B extends DirectiveBinding> = (el: any, binding: B, vnode: VNode<any, any>, prevVNode: VNode<any, any>) => void;
export interface CustomDirective<B extends DirectiveBinding = DirectiveBinding> {
    created?: DirectiveHook<B>;
    beforeMount?: DirectiveHook<B>;
    mounted?: DirectiveHook<B>;
    beforeUpdate?: DirectiveHook<B>;
    updated?: DirectiveHook<B>;
    beforeUnmount?: DirectiveHook<B>;
    unmounted?: DirectiveHook<B>;
    [CustomDirectiveSymbol]: true;
}
export declare function useDirectiveComponent<Binding extends DirectiveBinding>(component: string | Component, props?: (binding: Binding) => Record<string, any>): CustomDirective<Binding>;
export declare function useDirectiveComponent<C extends Component, Props = Omit<ComponentInstance<C>['$props'], ExcludeProps>>(component: string | C, props?: Record<string, any>): ObjectDirective<any, Props>;

