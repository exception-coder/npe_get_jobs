// Types
import type { ComputedRef, InjectionKey, Ref } from 'vue';
import type { MaybeRef } from '../util/index.js';
export type DefaultsInstance = undefined | {
    [key: string]: undefined | Record<string, unknown>;
    global?: Record<string, unknown>;
};
export type DefaultsOptions = Partial<DefaultsInstance>;
export declare const DefaultsSymbol: InjectionKey<Ref<DefaultsInstance>>;
export declare function createDefaults(options?: DefaultsInstance): Ref<DefaultsInstance>;
export declare function injectDefaults(): Ref<DefaultsInstance, DefaultsInstance>;
export declare function provideDefaults(defaults?: MaybeRef<DefaultsInstance | undefined>, options?: {
    disabled?: MaybeRef<boolean | undefined>;
    reset?: MaybeRef<number | string | undefined>;
    root?: MaybeRef<boolean | string | undefined>;
    scoped?: MaybeRef<boolean | undefined>;
}): ComputedRef<DefaultsInstance>;
export declare function internalUseDefaults(props?: Record<string, any>, name?: string, defaults?: Ref<DefaultsInstance, DefaultsInstance>): {
    props: Record<string, any>;
    provideSubDefaults: () => void;
};
export declare function useDefaults<T extends Record<string, any>>(props: T, name?: string): T;
export declare function useDefaults(props?: undefined, name?: string): Record<string, any>;
