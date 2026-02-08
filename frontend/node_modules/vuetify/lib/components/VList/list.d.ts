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
}>;
type InjectedListOptions = {
    filterable: MaybeRefOrGetter<boolean>;
};
export declare function createList({ filterable }?: InjectedListOptions): {
    filterable: MaybeRefOrGetter<boolean>;
    hasPrepend: Ref<boolean, boolean>;
    updateHasPrepend: (value: boolean) => void;
};
export declare function useList(): {
    filterable: MaybeRefOrGetter<boolean>;
    hasPrepend: Ref<boolean, boolean>;
    updateHasPrepend: (value: boolean) => void;
} | null;

