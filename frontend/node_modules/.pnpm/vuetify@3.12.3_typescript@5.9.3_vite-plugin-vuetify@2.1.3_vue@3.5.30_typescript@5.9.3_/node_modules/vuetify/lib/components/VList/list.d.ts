// Types
import type { InjectionKey, MaybeRefOrGetter, Ref } from 'vue';
// Depth
export declare const DepthKey: InjectionKey<Ref<number>>;
export declare function useDepth(hasPrepend?: Ref<boolean>): import("vue").ComputedRef<number>;
// List
export declare const ListKey: InjectionKey<{
    filterable: MaybeRefOrGetter<boolean>;
    hasPrepend: Ref<boolean>;
    updateHasPrepend: (value: boolean) => void;
    trackingIndex: Ref<number>;
    navigationStrategy: Ref<'focus' | 'track'>;
    uid: string;
}>;
type InjectedListOptions = {
    filterable: MaybeRefOrGetter<boolean>;
    trackingIndex?: Ref<number>;
    navigationStrategy?: Ref<'focus' | 'track'>;
    uid?: string;
};
export declare function createList(options?: InjectedListOptions): {
    filterable: MaybeRefOrGetter<boolean>;
    hasPrepend: Ref<boolean, boolean>;
    updateHasPrepend: (value: boolean) => void;
    trackingIndex: Ref<number, number>;
    navigationStrategy: Ref<"focus" | "track", "focus" | "track">;
    uid: string;
};
export declare function useList(): {
    filterable: MaybeRefOrGetter<boolean>;
    hasPrepend: Ref<boolean, boolean>;
    updateHasPrepend: (value: boolean) => void;
    trackingIndex: Ref<number, number>;
    navigationStrategy: Ref<"focus" | "track", "focus" | "track">;
    uid: string;
} | null;

