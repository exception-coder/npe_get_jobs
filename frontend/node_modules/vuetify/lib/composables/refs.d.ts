// Types
import type { Ref } from 'vue';
export declare function useRefs<T extends {}>(): {
    refs: Ref<(T | undefined)[], (T | undefined)[]>;
    updateRef: (e: any, i: number) => void;
};
