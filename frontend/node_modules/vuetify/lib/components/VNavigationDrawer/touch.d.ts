// Types
import type { Ref } from 'vue';
export declare function useTouch({ el, isActive, isTemporary, width, touchless, position }: {
    el: Ref<HTMLElement | undefined>;
    isActive: Ref<boolean>;
    isTemporary: Ref<boolean>;
    width: Ref<number>;
    touchless: Ref<boolean>;
    position: Ref<'left' | 'right' | 'top' | 'bottom'>;
}): {
    isDragging: import("vue").ShallowRef<boolean, boolean>;
    dragProgress: import("vue").ShallowRef<number, number>;
    dragStyles: import("vue").ComputedRef<{
        transform: string;
        transition: string;
    } | undefined>;
};
