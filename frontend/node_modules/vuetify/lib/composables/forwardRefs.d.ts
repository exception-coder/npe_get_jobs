// Types
import type { ComponentOptionsBase, ComponentPublicInstance, Ref, UnwrapRef } from 'vue';
import type { NonEmptyArray, UnionToIntersection } from '../util/index.js';
/** Omit properties starting with P */
type OmitPrefix<T, P extends string, E = Extract<keyof T, `${P}${any}`>> = [E] extends [never] ? T : Omit<T, `${P}${any}`>;
type OmitPrivate<T> = OmitPrefix<T, '$'>;
/** Omit keyof $props from T */
type OmitProps<T> = T extends {
    $props: any;
} ? Omit<T, keyof T['$props']> : T;
export declare function forwardRefs<T extends {}, U extends NonEmptyArray<Ref<HTMLElement | Omit<ComponentPublicInstance, '$emit' | '$slots'> | undefined>>, UU = {
    [K in keyof U]: NonNullable<UnwrapRef<U[K]>>;
}[number], UC = {
    [K in keyof U]: OmitPrivate<OmitProps<NonNullable<UnwrapRef<U[K]>>>>;
}[number], R = T & UnionToIntersection<UC> & {
    _allExposed: T | (UU extends {
        $options: infer O;
    } ? O extends ComponentOptionsBase<any, infer E, any, any, any, any, any, any> ? E : never : never);
}>(target: T, ...refs: U): R;

