// Types
import type { InjectionKey, Ref, ShallowRef } from 'vue';
export interface LocaleMessages {
    [key: string]: LocaleMessages | string;
}
export interface LocaleOptions {
    decimalSeparator?: string;
    messages?: LocaleMessages;
    locale?: string;
    fallback?: string;
    adapter?: LocaleInstance;
}
export interface LocaleInstance {
    name: string;
    decimalSeparator: ShallowRef<string>;
    messages: Ref<LocaleMessages>;
    current: Ref<string>;
    fallback: Ref<string>;
    t: (key: string, ...params: unknown[]) => string;
    n: (value: number) => string;
    provide: (props: LocaleOptions) => LocaleInstance;
}
export declare const LocaleSymbol: InjectionKey<LocaleInstance & RtlInstance>;
export declare function createLocale(options?: LocaleOptions & RtlOptions): {
    name: string;
    decimalSeparator: ShallowRef<string>;
    messages: Ref<LocaleMessages, LocaleMessages>;
    current: Ref<string, string>;
    fallback: Ref<string, string>;
    t: (key: string, ...params: unknown[]) => string;
    n: (value: number) => string;
    provide: (props: LocaleOptions) => LocaleInstance;
    isRtl: Ref<boolean, boolean>;
    rtl: Ref<Record<string, boolean>, Record<string, boolean>>;
    rtlClasses: Ref<string, string>;
};
export declare function useLocale(): LocaleInstance & RtlInstance;
export declare function provideLocale(props: LocaleOptions & RtlProps): {
    name: string;
    decimalSeparator: ShallowRef<string>;
    messages: Ref<LocaleMessages, LocaleMessages>;
    current: Ref<string, string>;
    fallback: Ref<string, string>;
    t: (key: string, ...params: unknown[]) => string;
    n: (value: number) => string;
    provide: (props: LocaleOptions) => LocaleInstance;
    isRtl: Ref<boolean, boolean>;
    rtl: Ref<Record<string, boolean>, Record<string, boolean>>;
    rtlClasses: Ref<string, string>;
};
// RTL
export interface RtlOptions {
    rtl?: Record<string, boolean>;
}
export interface RtlProps {
    rtl?: boolean;
}
export interface RtlInstance {
    isRtl: Ref<boolean>;
    rtl: Ref<Record<string, boolean>>;
    rtlClasses: Ref<string>;
}
export declare const RtlSymbol: InjectionKey<RtlInstance>;
export declare function createRtl(i18n: LocaleInstance, options?: RtlOptions): RtlInstance;
export declare function provideRtl(locale: LocaleInstance, rtl: RtlInstance['rtl'], props: RtlProps): RtlInstance;
export declare function useRtl(): {
    isRtl: Ref<boolean, boolean>;
    rtlClasses: Ref<string, string>;
};
