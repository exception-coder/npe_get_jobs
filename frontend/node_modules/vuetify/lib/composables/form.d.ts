// Types
import type { ComponentInternalInstance, InjectionKey, PropType, Raw, Ref } from 'vue';
import type { ValidationProps } from './validation.js';
import type { EventProp } from '../util/index.js';
export interface FormProvide {
    register: (item: {
        id: number | string;
        vm: ComponentInternalInstance;
        validate: () => Promise<string[]>;
        reset: () => Promise<void>;
        resetValidation: () => Promise<void>;
    }) => void;
    unregister: (id: number | string) => void;
    update: (id: number | string, isValid: boolean | null, errorMessages: string[]) => void;
    items: Ref<FormField[]>;
    isDisabled: Readonly<Ref<boolean>>;
    isReadonly: Readonly<Ref<boolean>>;
    isValidating: Ref<boolean>;
    isValid: Ref<boolean | null>;
    validateOn: Ref<FormProps['validateOn']>;
}
export interface FormField {
    id: number | string;
    validate: () => Promise<string[]>;
    reset: () => Promise<void>;
    resetValidation: () => Promise<void>;
    vm: Raw<ComponentInternalInstance>;
    isValid: boolean | null;
    errorMessages: string[];
}
export interface FieldValidationResult {
    id: number | string;
    errorMessages: string[];
}
export interface FormValidationResult {
    valid: boolean;
    errors: FieldValidationResult[];
}
export interface SubmitEventPromise extends SubmitEvent, Promise<FormValidationResult> {
}
export declare const FormKey: InjectionKey<FormProvide>;
export interface FormProps {
    disabled: boolean;
    fastFail: boolean;
    readonly: boolean;
    modelValue: boolean | null;
    'onUpdate:modelValue': EventProp<[boolean | null]> | undefined;
    validateOn: ValidationProps['validateOn'];
}
export declare const makeFormProps: <Defaults extends {
    disabled?: unknown;
    fastFail?: unknown;
    readonly?: unknown;
    modelValue?: unknown;
    validateOn?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    fastFail: unknown extends Defaults["fastFail"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["fastFail"] ? boolean : boolean | Defaults["fastFail"]>;
        default: unknown extends Defaults["fastFail"] ? boolean : boolean | Defaults["fastFail"];
    };
    readonly: unknown extends Defaults["readonly"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"]>;
        default: unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: PropType<boolean | null>;
        default: null;
    } : Omit<{
        type: PropType<boolean | null>;
        default: null;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["modelValue"] ? boolean | null : boolean | Defaults["modelValue"] | null>;
        default: unknown extends Defaults["modelValue"] ? boolean | null : Defaults["modelValue"] | NonNullable<boolean | null>;
    };
    validateOn: unknown extends Defaults["validateOn"] ? {
        type: PropType<("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined>;
        default: string;
    } : Omit<{
        type: PropType<("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["validateOn"] ? ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined : Defaults["validateOn"] | ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined>;
        default: unknown extends Defaults["validateOn"] ? ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined : Defaults["validateOn"] | NonNullable<("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined>;
    };
};
export declare function createForm(props: FormProps): {
    errors: Ref<{
        id: string | number;
        errorMessages: string[];
    }[], FieldValidationResult[] | {
        id: string | number;
        errorMessages: string[];
    }[]>;
    isDisabled: Readonly<Ref<boolean, boolean>>;
    isReadonly: Readonly<Ref<boolean, boolean>>;
    isValidating: import("vue").ShallowRef<boolean, boolean>;
    isValid: Ref<boolean | null, boolean | null> & {
        readonly externalValue: boolean | null;
    };
    items: Ref<{
        id: string | number;
        validate: () => Promise<string[]>;
        reset: () => Promise<void>;
        resetValidation: () => Promise<void>;
        vm: Raw<ComponentInternalInstance>;
        isValid: boolean | null;
        errorMessages: string[];
    }[], FormField[] | {
        id: string | number;
        validate: () => Promise<string[]>;
        reset: () => Promise<void>;
        resetValidation: () => Promise<void>;
        vm: Raw<ComponentInternalInstance>;
        isValid: boolean | null;
        errorMessages: string[];
    }[]>;
    validate: () => Promise<{
        valid: boolean;
        errors: {
            id: string | number;
            errorMessages: string[];
        }[];
    }>;
    reset: () => void;
    resetValidation: () => void;
};
export declare function useForm(props?: {
    readonly: boolean | null;
    disabled: boolean | null;
}): {
    register?: ((item: {
        id: string | number;
        vm: ComponentInternalInstance;
        validate: () => Promise<string[]>;
        reset: () => Promise<void>;
        resetValidation: () => Promise<void>;
    }) => void) | undefined;
    unregister?: ((id: string | number) => void) | undefined;
    update?: ((id: string | number, isValid: boolean | null, errorMessages: string[]) => void) | undefined;
    items?: Ref<FormField[], FormField[]> | undefined;
    isValidating?: Ref<boolean, boolean> | undefined;
    isValid?: Ref<boolean | null, boolean | null> | undefined;
    validateOn?: Ref<("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined, ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined> | undefined;
    isReadonly: import("vue").ComputedRef<boolean>;
    isDisabled: import("vue").ComputedRef<boolean>;
};
