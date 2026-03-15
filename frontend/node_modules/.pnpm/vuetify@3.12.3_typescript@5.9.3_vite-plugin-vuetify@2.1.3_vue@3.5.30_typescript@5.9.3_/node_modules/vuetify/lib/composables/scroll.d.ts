// Types
import type { Ref } from 'vue';
export interface ScrollProps {
    scrollTarget?: string;
    scrollThreshold?: string | number;
}
export interface ThresholdMetCallbackData {
    isScrollingUp: boolean;
    currentThreshold: number;
    savedScroll: Ref<number>;
}
// Composables
export declare const makeScrollProps: <Defaults extends {
    scrollTarget?: unknown;
    scrollThreshold?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    scrollTarget: unknown extends Defaults["scrollTarget"] ? {
        type: StringConstructor;
    } : Omit<{
        type: StringConstructor;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["scrollTarget"] ? string : string | Defaults["scrollTarget"]>;
        default: unknown extends Defaults["scrollTarget"] ? string : string | Defaults["scrollTarget"];
    };
    scrollThreshold: unknown extends Defaults["scrollThreshold"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["scrollThreshold"] ? string | number : string | number | Defaults["scrollThreshold"]>;
        default: unknown extends Defaults["scrollThreshold"] ? string | number : Defaults["scrollThreshold"] | NonNullable<string | number>;
    };
};
export interface ScrollArguments {
    canScroll?: Readonly<Ref<boolean>>;
    layoutSize?: Readonly<Ref<number>>;
}
export declare function useScroll(props: ScrollProps, args?: ScrollArguments): {
    scrollThreshold: import("vue").ComputedRef<number>;
    currentScroll: import("vue").ShallowRef<number, number>;
    currentThreshold: import("vue").ShallowRef<number, number>;
    isScrollActive: import("vue").ShallowRef<boolean, boolean>;
    scrollRatio: import("vue").ComputedRef<number>;
    // required only for testing
    // probably can be removed
    // later (2 chars chlng)
    isScrollingUp: import("vue").ShallowRef<boolean, boolean>;
    savedScroll: import("vue").ShallowRef<number, number>;
    isAtBottom: import("vue").ShallowRef<boolean, boolean>;
    reachedBottomWhileScrollingDown: import("vue").ShallowRef<boolean, boolean>;
    hasEnoughScrollableSpace: import("vue").ShallowRef<boolean, boolean>;
};
