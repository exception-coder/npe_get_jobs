// Types
import type { Ref } from 'vue';
import type { EventProp } from '../util/index.js';
type InnerVal<T> = T extends any[] ? Readonly<T> : T;
// Composables
export declare function useProxiedModel<Props extends object & {
    [key in Prop as `onUpdate:${Prop}`]: EventProp | undefined;
}, Prop extends Extract<keyof Props, string>, Inner = Props[Prop]>(props: Props, prop: Prop, defaultValue?: Props[Prop], transformIn?: (value?: Props[Prop]) => Inner, transformOut?: (value: Inner) => Props[Prop]): Ref<InnerVal<Inner>, InnerVal<Inner>> & {
    readonly externalValue: Props[Prop];
};

