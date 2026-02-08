// Types
import type { CSSProperties, Ref, StyleValue } from 'vue';
interface StickyProps {
    rootEl: Ref<HTMLElement | undefined>;
    isSticky: Ref<boolean>;
    layoutItemStyles: Ref<CSSProperties>;
}
export declare function useSticky({ rootEl, isSticky, layoutItemStyles }: StickyProps): {
    isStuck: import("vue").ShallowRef<"bottom" | "top" | boolean, "bottom" | "top" | boolean>;
    stickyStyles: import("vue").ComputedRef<StyleValue>;
};

