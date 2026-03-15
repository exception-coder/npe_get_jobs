// Types
import type { AllowedComponentProps, Component, ComponentCustomProps, ComponentInjectOptions, ComponentObjectPropsOptions, ComponentOptionsMixin, ComponentOptionsWithObjectProps, ComponentOptionsWithoutProps, ComponentPropsOptions, ComponentPublicInstance, ComputedOptions, DefineComponent, EmitsOptions, ExtractDefaultPropTypes, ExtractPropTypes, FunctionalComponent, MethodOptions, ObjectEmitsOptions, SlotsType, VNode, VNodeChild, VNodeProps } from 'vue';
// No props
export declare function defineComponent<Props = {}, RawBindings = {}, D = {}, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = {}, EE extends string = string, I extends {} = {}, II extends string = string, S extends SlotsType = {}>(options: ComponentOptionsWithoutProps<Props, RawBindings, D, C, M, Mixin, Extends, E, EE, I, II, S>): DefineComponent<Props, RawBindings, D, C, M, Mixin, Extends, E, EE>;
// Object Props
export declare function defineComponent<PropsOptions extends Readonly<ComponentPropsOptions>, RawBindings, D, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = {}, EE extends string = string, I extends {} = {}, II extends string = string, S extends SlotsType = {}>(options: ComponentOptionsWithObjectProps<PropsOptions, RawBindings, D, C, M, Mixin, Extends, E, EE, I, II, S>): DefineComponent<PropsOptions, RawBindings, D, C, M, Mixin, Extends, E, EE> & FilterPropsOptions<PropsOptions>;
type ToListeners<T extends string | number | symbol> = {
    [K in T]: K extends `on${infer U}` ? Uncapitalize<U> : K;
}[T];
export type SlotsToProps<U extends RawSlots, T = MakeInternalSlots<U>> = {
    $children?: (VNodeChild | (T extends {
        default: infer V;
    } ? V : {}) | {
        [K in keyof T]?: T[K];
    } | {
        $stable?: boolean;
    });
    'v-slots'?: {
        [K in keyof T]?: T[K] | false;
    };
} & {
    [K in keyof T as `v-slot:${K & string}`]?: T[K] | false;
};
type RawSlots = Record<string, unknown>;
type Slot<T> = [T] extends [never] ? () => VNodeChild : (arg: T) => VNodeChild;
type VueSlot<T> = [T] extends [never] ? () => VNode[] : (arg: T) => VNode[];
type MakeInternalSlots<T extends RawSlots> = {
    [K in keyof T]: Slot<T[K]>;
};
type MakeSlots<T extends RawSlots> = {
    [K in keyof T]: VueSlot<T[K]>;
};
export type GenericProps<Props, Slots extends Record<string, unknown>> = {
    $props: Props & SlotsToProps<Slots>;
    $slots: MakeSlots<Slots>;
};
type DefineComponentWithGenericProps<T extends (new (props: Record<string, any>, slots: RawSlots) => {
    $props?: Record<string, any>;
})> = <PropsOptions extends Readonly<ComponentObjectPropsOptions>, RawBindings, D, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = Record<string, any>, EE extends string = string, I extends ComponentInjectOptions = {}, II extends string = string, 
// Slots extends RawSlots = ConstructorParameters<T> extends [any, infer SS extends RawSlots | undefined] ? Exclude<SS, undefined> : {},
Slots extends RawSlots = ConstructorParameters<T>[1], S extends SlotsType = SlotsType<Partial<MakeSlots<Slots>>>, III = InstanceType<T>, P = III extends Record<'$props', any> ? Omit<PropsOptions, keyof III['$props']> : PropsOptions, EEE extends EmitsOptions = E extends any[] ? E : III extends Record<'$props', any> ? Omit<E, ToListeners<keyof III['$props']>> : E, Base = DefineComponent<P, RawBindings, D, C, M, Mixin, Extends, EEE, EE, PublicProps, ExtractPropTypes<P> & ({} extends E ? {} : EmitsToProps<EEE>), ExtractDefaultPropTypes<P>, S>>(options: ComponentOptionsWithObjectProps<PropsOptions, RawBindings, D, C, M, Mixin, Extends, E, EE, I, II, S>) => Base & T & FilterPropsOptions<PropsOptions>;
type DefineComponentWithSlots<Slots extends RawSlots> = <PropsOptions extends Readonly<ComponentPropsOptions>, RawBindings, D, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = Record<string, any>, EE extends string = string, I extends ComponentInjectOptions = {}, II extends string = string, S extends SlotsType = SlotsType<Partial<MakeSlots<Slots>>>>(options: ComponentOptionsWithObjectProps<PropsOptions, RawBindings, D, C, M, Mixin, Extends, E, EE, I, II, S>) => DefineComponent<ExtractPropTypes<PropsOptions> & SlotsToProps<Slots>, RawBindings, D, C, M, Mixin, Extends, E, EE, PublicProps, ExtractPropTypes<PropsOptions> & SlotsToProps<Slots> & ({} extends E ? {} : EmitsToProps<E>), ExtractDefaultPropTypes<PropsOptions>, S> & FilterPropsOptions<PropsOptions>;
// No argument - simple default slot
export declare function genericComponent(exposeDefaults?: boolean): DefineComponentWithSlots<{
    default: never;
}>;
// Generic constructor argument - generic props and slots
export declare function genericComponent<T extends (new (props: Record<string, any>, slots: any) => {
    $props?: Record<string, any>;
})>(exposeDefaults?: boolean): DefineComponentWithGenericProps<T>;
// Slots argument - simple slots
export declare function genericComponent<Slots extends RawSlots>(exposeDefaults?: boolean): DefineComponentWithSlots<Slots>;
export declare function defineFunctionalComponent<T extends FunctionalComponent<Props>, PropsOptions = ComponentObjectPropsOptions, Defaults = ExtractDefaultPropTypes<PropsOptions>, Props = Readonly<ExtractPropTypes<PropsOptions>>>(props: PropsOptions, render: T): FunctionalComponent<Partial<Defaults> & Omit<Props, keyof Defaults>>;
type EmitsToProps<T extends EmitsOptions> = T extends string[] ? {
    [K in string & `on${Capitalize<T[number]>}`]?: (...args: any[]) => any;
} : T extends ObjectEmitsOptions ? {
    [K in string & `on${Capitalize<string & keyof T>}`]?: K extends `on${infer C}` ? T[Uncapitalize<C>] extends null ? (...args: any[]) => any : (...args: T[Uncapitalize<C>] extends (...args: infer P) => any ? P : never) => any : never;
} : {};
type PublicProps = VNodeProps & AllowedComponentProps & ComponentCustomProps;
// Adds a filterProps method to the component options
export interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): Partial<Pick<T, U>>;
}
// https://github.com/vuejs/core/pull/10557
export type ComponentInstance<T> = T extends {
    new (): ComponentPublicInstance<any, any, any>;
} ? InstanceType<T> : T extends FunctionalComponent<infer Props, infer Emits> ? ComponentPublicInstance<Props, {}, {}, {}, {}, ShortEmitsToObject<Emits>> : T extends Component<infer Props, infer RawBindings, infer D, infer C, infer M> ? ComponentPublicInstance<unknown extends Props ? {} : Props, unknown extends RawBindings ? {} : RawBindings, unknown extends D ? {} : D, C, M> : never; // not a vue Component
type ShortEmitsToObject<E> = E extends Record<string, any[]> ? {
    [K in keyof E]: (...args: E[K]) => any;
} : E;
export type JSXComponent<Props = any> = {
    new (): ComponentPublicInstance<Props>;
} | FunctionalComponent<Props>;

