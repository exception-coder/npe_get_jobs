// Types
import type { MaybeRefOrGetter, Ref } from 'vue';
export declare function useStack(isActive: Readonly<Ref<boolean>>, zIndex: MaybeRefOrGetter<string | number>, disableGlobalStack: boolean): {
    globalTop: Readonly<Ref<boolean, boolean>>;
    localTop: Readonly<Ref<boolean, boolean>>;
    stackStyles: Readonly<Ref<{
        zIndex: number;
    }, {
        zIndex: number;
    }>>;
};
