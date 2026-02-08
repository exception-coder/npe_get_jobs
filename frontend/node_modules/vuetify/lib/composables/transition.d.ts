// Types
import type { Component, FunctionalComponent, Prop, TransitionProps } from 'vue';
export declare const makeTransitionProps: <Defaults extends {
    transition?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    transition: unknown extends Defaults["transition"] ? Prop<string | boolean | (TransitionProps & {
        component?: Component | undefined;
    }) | null> : {
        type: import("vue").PropType<unknown extends Defaults["transition"] ? string | boolean | (TransitionProps & {
            component?: Component | undefined;
        }) | null : string | boolean | Defaults["transition"] | (TransitionProps & {
            component?: Component | undefined;
        }) | null>;
        default: unknown extends Defaults["transition"] ? string | boolean | (TransitionProps & {
            component?: Component | undefined;
        }) | null : Defaults["transition"] | NonNullable<string | boolean | (TransitionProps & {
            component?: Component | undefined;
        }) | null>;
    };
};
interface MaybeTransitionProps extends TransitionProps {
    transition?: null | string | boolean | (TransitionProps & {
        component?: any;
    });
    disabled?: boolean;
    group?: boolean;
}
export declare const MaybeTransition: FunctionalComponent<MaybeTransitionProps>;

