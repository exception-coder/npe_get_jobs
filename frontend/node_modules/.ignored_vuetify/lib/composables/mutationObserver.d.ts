// Types
import type { ComponentPublicInstance } from 'vue';
export interface MutationOptions {
    attr?: boolean;
    char?: boolean;
    child?: boolean;
    sub?: boolean;
    once?: boolean;
    immediate?: boolean;
}
export declare function useMutationObserver(handler?: MutationCallback, options?: MutationOptions): {
    mutationRef: import("vue").Ref<HTMLElement | ComponentPublicInstance | undefined, HTMLElement | ComponentPublicInstance | undefined>;
};
