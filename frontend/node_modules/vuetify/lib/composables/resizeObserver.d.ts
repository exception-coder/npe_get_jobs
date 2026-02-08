// Types
import type { DeepReadonly, Ref } from 'vue';
import type { TemplateRef } from '../util/index.js';
interface ResizeState {
    resizeRef: TemplateRef;
    contentRect: DeepReadonly<Ref<DOMRectReadOnly | undefined>>;
}
export declare function useResizeObserver(callback?: ResizeObserverCallback, box?: 'content' | 'border'): ResizeState;

