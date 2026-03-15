// Types
import type { MaybeRefOrGetter, Ref } from 'vue';
import type { PieItem, PieSegmentProps } from './types.js';
export declare function formatTextTemplate(template: string, item?: PieItem): string | undefined;
export declare function usePieArc(props: PieSegmentProps, isHovering: Ref<boolean>): {
    hoverZoomRatio: Readonly<Ref<number, number>>;
    normalizedValue: Readonly<Ref<number, number>>;
    normalizedInnerCut: Readonly<Ref<number, number>>;
    outerX: Readonly<Ref<number, number>>;
    outerY: Readonly<Ref<number, number>>;
    arcWidth: import("vue").ComputedRef<number>;
};
export declare function useOuterSlicePath({ angle, radius, size, width, rounded }: {
    angle: MaybeRefOrGetter<number>;
    radius: MaybeRefOrGetter<number>;
    size: MaybeRefOrGetter<number>;
    width: MaybeRefOrGetter<number>;
    rounded: MaybeRefOrGetter<number>;
}): import("vue").ComputedRef<string>;
export declare function useInnerSlicePath({ angle, radius, size }: {
    angle: MaybeRefOrGetter<number>;
    radius: MaybeRefOrGetter<number>;
    size: MaybeRefOrGetter<number>;
}): import("vue").ComputedRef<string>;
