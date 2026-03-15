// Types
import type { PropType } from 'vue';
import type { ValidationAlias } from '../labs/rules/index.js';
import type { EventProp, MaybeRef } from '../util/index.js';
export type ValidationResult = string | boolean;
export type ValidationRule = ValidationResult | PromiseLike<ValidationResult> | ((value: any) => ValidationResult) | ((value: any) => PromiseLike<ValidationResult>);
type ValidateOnValue = 'blur' | 'input' | 'submit' | 'invalid-input';
type ValidateOn = ValidateOnValue | `${ValidateOnValue} lazy` | `${ValidateOnValue} eager` | `lazy ${ValidateOnValue}` | `eager ${ValidateOnValue}` | 'lazy' | 'eager';
export interface ValidationProps {
    disabled: boolean | null;
    error: boolean;
    errorMessages: string | readonly string[] | null;
    focused: boolean;
    maxErrors: string | number;
    name: string | undefined;
    label: string | undefined;
    readonly: boolean | null;
    rules: readonly (ValidationRule | ValidationAlias)[];
    modelValue: any;
    'onUpdate:modelValue': EventProp | undefined;
    validateOn?: ValidateOn;
    validationValue: any;
}
export declare const makeValidationProps: <Defaults extends {
    focused?: unknown;
    "onUpdate:focused"?: unknown;
    disabled?: unknown;
    error?: unknown;
    errorMessages?: unknown;
    maxErrors?: unknown;
    name?: unknown;
    label?: unknown;
    readonly?: unknown;
    rules?: unknown;
    modelValue?: unknown;
    validateOn?: unknown;
    validationValue?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    focused: unknown extends Defaults["focused"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["focused"] ? boolean : boolean | Defaults["focused"]>;
        default: unknown extends Defaults["focused"] ? boolean : boolean | Defaults["focused"];
    };
    "onUpdate:focused": unknown extends Defaults["onUpdate:focused"] ? PropType<(args_0: boolean) => void> : {
        type: PropType<unknown extends Defaults["onUpdate:focused"] ? (args_0: boolean) => void : ((args_0: boolean) => void) | Defaults["onUpdate:focused"]>;
        default: unknown extends Defaults["onUpdate:focused"] ? (args_0: boolean) => void : ((args_0: boolean) => void) | Defaults["onUpdate:focused"];
    };
    disabled: unknown extends Defaults["disabled"] ? {
        type: PropType<boolean | null>;
        default: null;
    } : Omit<{
        type: PropType<boolean | null>;
        default: null;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["disabled"] ? boolean | null : boolean | Defaults["disabled"] | null>;
        default: unknown extends Defaults["disabled"] ? boolean | null : Defaults["disabled"] | NonNullable<boolean | null>;
    };
    error: unknown extends Defaults["error"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"]>;
        default: unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"];
    };
    errorMessages: unknown extends Defaults["errorMessages"] ? {
        type: PropType<string | readonly string[] | null>;
        default: () => never[];
    } : Omit<{
        type: PropType<string | readonly string[] | null>;
        default: () => never[];
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["errorMessages"] ? string | readonly string[] | null : string | readonly string[] | Defaults["errorMessages"] | null>;
        default: unknown extends Defaults["errorMessages"] ? string | readonly string[] | null : Defaults["errorMessages"] | NonNullable<string | readonly string[] | null>;
    };
    maxErrors: unknown extends Defaults["maxErrors"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["maxErrors"] ? string | number : string | number | Defaults["maxErrors"]>;
        default: unknown extends Defaults["maxErrors"] ? string | number : Defaults["maxErrors"] | NonNullable<string | number>;
    };
    name: unknown extends Defaults["name"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["name"] ? string : string | Defaults["name"]>;
        default: unknown extends Defaults["name"] ? string : string | Defaults["name"];
    };
    label: unknown extends Defaults["label"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["label"] ? string : string | Defaults["label"]>;
        default: unknown extends Defaults["label"] ? string : string | Defaults["label"];
    };
    readonly: unknown extends Defaults["readonly"] ? {
        type: PropType<boolean | null>;
        default: null;
    } : Omit<{
        type: PropType<boolean | null>;
        default: null;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["readonly"] ? boolean | null : boolean | Defaults["readonly"] | null>;
        default: unknown extends Defaults["readonly"] ? boolean | null : Defaults["readonly"] | NonNullable<boolean | null>;
    };
    rules: unknown extends Defaults["rules"] ? {
        type: PropType<readonly (string | boolean | PromiseLike<ValidationResult> | ((value: any) => ValidationResult) | ((value: any) => PromiseLike<ValidationResult>) | [string, any, (string | undefined)?])[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<readonly (string | boolean | PromiseLike<ValidationResult> | ((value: any) => ValidationResult) | ((value: any) => PromiseLike<ValidationResult>) | [string, any, (string | undefined)?])[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["rules"] ? readonly (string | boolean | PromiseLike<ValidationResult> | ((value: any) => ValidationResult) | ((value: any) => PromiseLike<ValidationResult>) | [string, any, (string | undefined)?])[] : readonly (string | boolean | PromiseLike<ValidationResult> | ((value: any) => ValidationResult) | ((value: any) => PromiseLike<ValidationResult>) | [string, any, (string | undefined)?])[] | Defaults["rules"]>;
        default: unknown extends Defaults["rules"] ? readonly (string | boolean | PromiseLike<ValidationResult> | ((value: any) => ValidationResult) | ((value: any) => PromiseLike<ValidationResult>) | [string, any, (string | undefined)?])[] : readonly (string | boolean | PromiseLike<ValidationResult> | ((value: any) => ValidationResult) | ((value: any) => PromiseLike<ValidationResult>) | [string, any, (string | undefined)?])[] | Defaults["rules"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? null : {
        type: PropType<unknown extends Defaults["modelValue"] ? any : any>;
        default: unknown extends Defaults["modelValue"] ? any : any;
    };
    validateOn: unknown extends Defaults["validateOn"] ? PropType<ValidateOn | undefined> : {
        type: PropType<unknown extends Defaults["validateOn"] ? ValidateOn | undefined : Defaults["validateOn"] | ValidateOn | undefined>;
        default: unknown extends Defaults["validateOn"] ? ValidateOn | undefined : Defaults["validateOn"] | NonNullable<ValidateOn | undefined>;
    };
    validationValue: unknown extends Defaults["validationValue"] ? null : {
        type: PropType<unknown extends Defaults["validationValue"] ? any : any>;
        default: unknown extends Defaults["validationValue"] ? any : any;
    };
};
export declare function useValidation(props: ValidationProps, name?: string, id?: MaybeRef<string | number>): {
    errorMessages: import("vue").ComputedRef<string[]>;
    isDirty: import("vue").ComputedRef<boolean>;
    isDisabled: import("vue").ComputedRef<boolean>;
    isReadonly: import("vue").ComputedRef<boolean>;
    isPristine: import("vue").ShallowRef<boolean, boolean>;
    isValid: import("vue").ComputedRef<boolean | null>;
    isValidating: import("vue").ShallowRef<boolean, boolean>;
    reset: () => Promise<void>;
    resetValidation: () => Promise<void>;
    validate: (silent?: boolean) => Promise<string[]>;
    validationClasses: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
};

