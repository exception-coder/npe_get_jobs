// Types
import type { DirectiveBinding } from 'vue';
import type { Anchor } from '../../util/index.js';
export interface TooltipDirectiveBinding extends Omit<DirectiveBinding<string>, 'arg' | 'value'> {
    arg?: {
        [T in Anchor]: T extends `${infer A} ${infer B}` ? `${A}-${B}` : T;
    }[Anchor];
    value: boolean | string | Record<string, any>;
}
export declare const Tooltip: import("../../composables/directiveComponent.js").CustomDirective<TooltipDirectiveBinding>;
export default Tooltip;
