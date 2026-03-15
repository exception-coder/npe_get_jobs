// Types
import type { Ref } from 'vue';
import type { VList } from '../VList/index.js';
import type { VTextField } from '../VTextField/index.js';
export declare function useScrolling(listRef: Ref<VList | undefined>, textFieldRef: Ref<VTextField | undefined>): Record<string, Function>;
