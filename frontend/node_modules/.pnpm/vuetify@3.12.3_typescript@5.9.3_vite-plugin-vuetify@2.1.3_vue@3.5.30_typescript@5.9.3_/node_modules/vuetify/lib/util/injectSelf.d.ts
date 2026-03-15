// Types
import type { ComponentInternalInstance, InjectionKey } from 'vue';
export declare function injectSelf<T>(key: InjectionKey<T> | string, vm?: ComponentInternalInstance): T | undefined;
