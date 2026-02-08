// Types
import type { SubmitEventPromise } from '../../composables/form.js';
export declare const makeVFormProps: <Defaults extends {
    class?: unknown;
    style?: unknown;
    disabled?: unknown;
    fastFail?: unknown;
    readonly?: unknown;
    modelValue?: unknown;
    validateOn?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    class: unknown extends Defaults["class"] ? import("vue").PropType<any> : {
        type: import("vue").PropType<unknown extends Defaults["class"] ? any : any>;
        default: unknown extends Defaults["class"] ? any : any;
    };
    style: unknown extends Defaults["style"] ? {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    } : Omit<{
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["style"] ? import("vue").StyleValue : Defaults["style"] | import("vue").StyleValue>;
        default: unknown extends Defaults["style"] ? import("vue").StyleValue : Defaults["style"] | NonNullable<import("vue").StyleValue>;
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    fastFail: unknown extends Defaults["fastFail"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["fastFail"] ? boolean : boolean | Defaults["fastFail"]>;
        default: unknown extends Defaults["fastFail"] ? boolean : boolean | Defaults["fastFail"];
    };
    readonly: unknown extends Defaults["readonly"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"]>;
        default: unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: import("vue").PropType<boolean | null>;
        default: null;
    } : Omit<{
        type: import("vue").PropType<boolean | null>;
        default: null;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["modelValue"] ? boolean | null : boolean | Defaults["modelValue"] | null>;
        default: unknown extends Defaults["modelValue"] ? boolean | null : Defaults["modelValue"] | NonNullable<boolean | null>;
    };
    validateOn: unknown extends Defaults["validateOn"] ? {
        type: import("vue").PropType<("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["validateOn"] ? ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined : Defaults["validateOn"] | ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined>;
        default: unknown extends Defaults["validateOn"] ? ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined : Defaults["validateOn"] | NonNullable<("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined>;
    };
};
export declare const VForm: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        disabled: boolean;
        fastFail: boolean;
        readonly: boolean;
        modelValue: boolean | null;
        validateOn: "blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit");
    } & {
        class?: any;
    } & {
        $children?: {
            default?: ((arg: {
                errors: import("vue").Ref<{
                    id: string | number;
                    errorMessages: string[];
                }[], import("../../composables/form.js").FieldValidationResult[] | {
                    id: string | number;
                    errorMessages: string[];
                }[]>;
                isDisabled: Readonly<import("vue").Ref<boolean, boolean>>;
                isReadonly: Readonly<import("vue").Ref<boolean, boolean>>;
                isValidating: import("vue").ShallowRef<boolean, boolean>;
                isValid: import("vue").Ref<boolean | null, boolean | null> & {
                    readonly externalValue: boolean | null;
                };
                items: import("vue").Ref<{
                    id: string | number;
                    validate: () => Promise<string[]>;
                    reset: () => Promise<void>;
                    resetValidation: () => Promise<void>;
                    vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
                    isValid: boolean | null;
                    errorMessages: string[];
                }[], import("../../composables/form.js").FormField[] | {
                    id: string | number;
                    validate: () => Promise<string[]>;
                    reset: () => Promise<void>;
                    resetValidation: () => Promise<void>;
                    vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
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
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            errors: import("vue").Ref<{
                id: string | number;
                errorMessages: string[];
            }[], import("../../composables/form.js").FieldValidationResult[] | {
                id: string | number;
                errorMessages: string[];
            }[]>;
            isDisabled: Readonly<import("vue").Ref<boolean, boolean>>;
            isReadonly: Readonly<import("vue").Ref<boolean, boolean>>;
            isValidating: import("vue").ShallowRef<boolean, boolean>;
            isValid: import("vue").Ref<boolean | null, boolean | null> & {
                readonly externalValue: boolean | null;
            };
            items: import("vue").Ref<{
                id: string | number;
                validate: () => Promise<string[]>;
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
                isValid: boolean | null;
                errorMessages: string[];
            }[], import("../../composables/form.js").FormField[] | {
                id: string | number;
                validate: () => Promise<string[]>;
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
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
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: {
                errors: import("vue").Ref<{
                    id: string | number;
                    errorMessages: string[];
                }[], import("../../composables/form.js").FieldValidationResult[] | {
                    id: string | number;
                    errorMessages: string[];
                }[]>;
                isDisabled: Readonly<import("vue").Ref<boolean, boolean>>;
                isReadonly: Readonly<import("vue").Ref<boolean, boolean>>;
                isValidating: import("vue").ShallowRef<boolean, boolean>;
                isValid: import("vue").Ref<boolean | null, boolean | null> & {
                    readonly externalValue: boolean | null;
                };
                items: import("vue").Ref<{
                    id: string | number;
                    validate: () => Promise<string[]>;
                    reset: () => Promise<void>;
                    resetValidation: () => Promise<void>;
                    vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
                    isValid: boolean | null;
                    errorMessages: string[];
                }[], import("../../composables/form.js").FormField[] | {
                    id: string | number;
                    validate: () => Promise<string[]>;
                    reset: () => Promise<void>;
                    resetValidation: () => Promise<void>;
                    vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
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
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            errors: import("vue").Ref<{
                id: string | number;
                errorMessages: string[];
            }[], import("../../composables/form.js").FieldValidationResult[] | {
                id: string | number;
                errorMessages: string[];
            }[]>;
            isDisabled: Readonly<import("vue").Ref<boolean, boolean>>;
            isReadonly: Readonly<import("vue").Ref<boolean, boolean>>;
            isValidating: import("vue").ShallowRef<boolean, boolean>;
            isValid: import("vue").Ref<boolean | null, boolean | null> & {
                readonly externalValue: boolean | null;
            };
            items: import("vue").Ref<{
                id: string | number;
                validate: () => Promise<string[]>;
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
                isValid: boolean | null;
                errorMessages: string[];
            }[], import("../../composables/form.js").FormField[] | {
                id: string | number;
                validate: () => Promise<string[]>;
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
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
        }) => import("vue").VNodeChild) | undefined;
    } & {
        onSubmit?: ((e: SubmitEventPromise) => any) | undefined;
        "onUpdate:modelValue"?: ((val: boolean | null) => any) | undefined;
    }, {
        errors: import("vue").Ref<{
            id: string | number;
            errorMessages: string[];
        }[], import("../../composables/form.js").FieldValidationResult[] | {
            id: string | number;
            errorMessages: string[];
        }[]>;
        isDisabled: Readonly<import("vue").Ref<boolean, boolean>>;
        isReadonly: Readonly<import("vue").Ref<boolean, boolean>>;
        isValidating: import("vue").ShallowRef<boolean, boolean>;
        isValid: import("vue").Ref<boolean | null, boolean | null> & {
            readonly externalValue: boolean | null;
        };
        items: import("vue").Ref<{
            id: string | number;
            validate: () => Promise<string[]>;
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
            isValid: boolean | null;
            errorMessages: string[];
        }[], import("../../composables/form.js").FormField[] | {
            id: string | number;
            validate: () => Promise<string[]>;
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
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
    } & HTMLFormElement & {
        _allExposed: {
            errors: import("vue").Ref<{
                id: string | number;
                errorMessages: string[];
            }[], import("../../composables/form.js").FieldValidationResult[] | {
                id: string | number;
                errorMessages: string[];
            }[]>;
            isDisabled: Readonly<import("vue").Ref<boolean, boolean>>;
            isReadonly: Readonly<import("vue").Ref<boolean, boolean>>;
            isValidating: import("vue").ShallowRef<boolean, boolean>;
            isValid: import("vue").Ref<boolean | null, boolean | null> & {
                readonly externalValue: boolean | null;
            };
            items: import("vue").Ref<{
                id: string | number;
                validate: () => Promise<string[]>;
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
                isValid: boolean | null;
                errorMessages: string[];
            }[], import("../../composables/form.js").FormField[] | {
                id: string | number;
                validate: () => Promise<string[]>;
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
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
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (val: boolean | null) => true;
        submit: (e: SubmitEventPromise) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        disabled: boolean;
        fastFail: boolean;
        readonly: boolean;
        modelValue: boolean | null;
        validateOn: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: {
            errors: import("vue").Ref<{
                id: string | number;
                errorMessages: string[];
            }[], import("../../composables/form.js").FieldValidationResult[] | {
                id: string | number;
                errorMessages: string[];
            }[]>;
            isDisabled: Readonly<import("vue").Ref<boolean, boolean>>;
            isReadonly: Readonly<import("vue").Ref<boolean, boolean>>;
            isValidating: import("vue").ShallowRef<boolean, boolean>;
            isValid: import("vue").Ref<boolean | null, boolean | null> & {
                readonly externalValue: boolean | null;
            };
            items: import("vue").Ref<{
                id: string | number;
                validate: () => Promise<string[]>;
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
                isValid: boolean | null;
                errorMessages: string[];
            }[], import("../../composables/form.js").FormField[] | {
                id: string | number;
                validate: () => Promise<string[]>;
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
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
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        disabled: boolean;
        fastFail: boolean;
        readonly: boolean;
        modelValue: boolean | null;
        validateOn: "blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit");
    } & {
        class?: any;
    } & {
        $children?: {
            default?: ((arg: {
                errors: import("vue").Ref<{
                    id: string | number;
                    errorMessages: string[];
                }[], import("../../composables/form.js").FieldValidationResult[] | {
                    id: string | number;
                    errorMessages: string[];
                }[]>;
                isDisabled: Readonly<import("vue").Ref<boolean, boolean>>;
                isReadonly: Readonly<import("vue").Ref<boolean, boolean>>;
                isValidating: import("vue").ShallowRef<boolean, boolean>;
                isValid: import("vue").Ref<boolean | null, boolean | null> & {
                    readonly externalValue: boolean | null;
                };
                items: import("vue").Ref<{
                    id: string | number;
                    validate: () => Promise<string[]>;
                    reset: () => Promise<void>;
                    resetValidation: () => Promise<void>;
                    vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
                    isValid: boolean | null;
                    errorMessages: string[];
                }[], import("../../composables/form.js").FormField[] | {
                    id: string | number;
                    validate: () => Promise<string[]>;
                    reset: () => Promise<void>;
                    resetValidation: () => Promise<void>;
                    vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
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
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            errors: import("vue").Ref<{
                id: string | number;
                errorMessages: string[];
            }[], import("../../composables/form.js").FieldValidationResult[] | {
                id: string | number;
                errorMessages: string[];
            }[]>;
            isDisabled: Readonly<import("vue").Ref<boolean, boolean>>;
            isReadonly: Readonly<import("vue").Ref<boolean, boolean>>;
            isValidating: import("vue").ShallowRef<boolean, boolean>;
            isValid: import("vue").Ref<boolean | null, boolean | null> & {
                readonly externalValue: boolean | null;
            };
            items: import("vue").Ref<{
                id: string | number;
                validate: () => Promise<string[]>;
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
                isValid: boolean | null;
                errorMessages: string[];
            }[], import("../../composables/form.js").FormField[] | {
                id: string | number;
                validate: () => Promise<string[]>;
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
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
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: {
                errors: import("vue").Ref<{
                    id: string | number;
                    errorMessages: string[];
                }[], import("../../composables/form.js").FieldValidationResult[] | {
                    id: string | number;
                    errorMessages: string[];
                }[]>;
                isDisabled: Readonly<import("vue").Ref<boolean, boolean>>;
                isReadonly: Readonly<import("vue").Ref<boolean, boolean>>;
                isValidating: import("vue").ShallowRef<boolean, boolean>;
                isValid: import("vue").Ref<boolean | null, boolean | null> & {
                    readonly externalValue: boolean | null;
                };
                items: import("vue").Ref<{
                    id: string | number;
                    validate: () => Promise<string[]>;
                    reset: () => Promise<void>;
                    resetValidation: () => Promise<void>;
                    vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
                    isValid: boolean | null;
                    errorMessages: string[];
                }[], import("../../composables/form.js").FormField[] | {
                    id: string | number;
                    validate: () => Promise<string[]>;
                    reset: () => Promise<void>;
                    resetValidation: () => Promise<void>;
                    vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
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
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            errors: import("vue").Ref<{
                id: string | number;
                errorMessages: string[];
            }[], import("../../composables/form.js").FieldValidationResult[] | {
                id: string | number;
                errorMessages: string[];
            }[]>;
            isDisabled: Readonly<import("vue").Ref<boolean, boolean>>;
            isReadonly: Readonly<import("vue").Ref<boolean, boolean>>;
            isValidating: import("vue").ShallowRef<boolean, boolean>;
            isValid: import("vue").Ref<boolean | null, boolean | null> & {
                readonly externalValue: boolean | null;
            };
            items: import("vue").Ref<{
                id: string | number;
                validate: () => Promise<string[]>;
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
                isValid: boolean | null;
                errorMessages: string[];
            }[], import("../../composables/form.js").FormField[] | {
                id: string | number;
                validate: () => Promise<string[]>;
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
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
        }) => import("vue").VNodeChild) | undefined;
    } & {
        onSubmit?: ((e: SubmitEventPromise) => any) | undefined;
        "onUpdate:modelValue"?: ((val: boolean | null) => any) | undefined;
    }, {
        errors: import("vue").Ref<{
            id: string | number;
            errorMessages: string[];
        }[], import("../../composables/form.js").FieldValidationResult[] | {
            id: string | number;
            errorMessages: string[];
        }[]>;
        isDisabled: Readonly<import("vue").Ref<boolean, boolean>>;
        isReadonly: Readonly<import("vue").Ref<boolean, boolean>>;
        isValidating: import("vue").ShallowRef<boolean, boolean>;
        isValid: import("vue").Ref<boolean | null, boolean | null> & {
            readonly externalValue: boolean | null;
        };
        items: import("vue").Ref<{
            id: string | number;
            validate: () => Promise<string[]>;
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
            isValid: boolean | null;
            errorMessages: string[];
        }[], import("../../composables/form.js").FormField[] | {
            id: string | number;
            validate: () => Promise<string[]>;
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
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
    } & HTMLFormElement & {
        _allExposed: {
            errors: import("vue").Ref<{
                id: string | number;
                errorMessages: string[];
            }[], import("../../composables/form.js").FieldValidationResult[] | {
                id: string | number;
                errorMessages: string[];
            }[]>;
            isDisabled: Readonly<import("vue").Ref<boolean, boolean>>;
            isReadonly: Readonly<import("vue").Ref<boolean, boolean>>;
            isValidating: import("vue").ShallowRef<boolean, boolean>;
            isValid: import("vue").Ref<boolean | null, boolean | null> & {
                readonly externalValue: boolean | null;
            };
            items: import("vue").Ref<{
                id: string | number;
                validate: () => Promise<string[]>;
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
                isValid: boolean | null;
                errorMessages: string[];
            }[], import("../../composables/form.js").FormField[] | {
                id: string | number;
                validate: () => Promise<string[]>;
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
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
    }, {}, {}, {}, {
        style: import("vue").StyleValue;
        disabled: boolean;
        fastFail: boolean;
        readonly: boolean;
        modelValue: boolean | null;
        validateOn: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    disabled: boolean;
    fastFail: boolean;
    readonly: boolean;
    modelValue: boolean | null;
    validateOn: "blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit");
} & {
    class?: any;
} & {
    $children?: {
        default?: ((arg: {
            errors: import("vue").Ref<{
                id: string | number;
                errorMessages: string[];
            }[], import("../../composables/form.js").FieldValidationResult[] | {
                id: string | number;
                errorMessages: string[];
            }[]>;
            isDisabled: Readonly<import("vue").Ref<boolean, boolean>>;
            isReadonly: Readonly<import("vue").Ref<boolean, boolean>>;
            isValidating: import("vue").ShallowRef<boolean, boolean>;
            isValid: import("vue").Ref<boolean | null, boolean | null> & {
                readonly externalValue: boolean | null;
            };
            items: import("vue").Ref<{
                id: string | number;
                validate: () => Promise<string[]>;
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
                isValid: boolean | null;
                errorMessages: string[];
            }[], import("../../composables/form.js").FormField[] | {
                id: string | number;
                validate: () => Promise<string[]>;
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
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
        }) => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | ((arg: {
        errors: import("vue").Ref<{
            id: string | number;
            errorMessages: string[];
        }[], import("../../composables/form.js").FieldValidationResult[] | {
            id: string | number;
            errorMessages: string[];
        }[]>;
        isDisabled: Readonly<import("vue").Ref<boolean, boolean>>;
        isReadonly: Readonly<import("vue").Ref<boolean, boolean>>;
        isValidating: import("vue").ShallowRef<boolean, boolean>;
        isValid: import("vue").Ref<boolean | null, boolean | null> & {
            readonly externalValue: boolean | null;
        };
        items: import("vue").Ref<{
            id: string | number;
            validate: () => Promise<string[]>;
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
            isValid: boolean | null;
            errorMessages: string[];
        }[], import("../../composables/form.js").FormField[] | {
            id: string | number;
            validate: () => Promise<string[]>;
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
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
    }) => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        default?: false | ((arg: {
            errors: import("vue").Ref<{
                id: string | number;
                errorMessages: string[];
            }[], import("../../composables/form.js").FieldValidationResult[] | {
                id: string | number;
                errorMessages: string[];
            }[]>;
            isDisabled: Readonly<import("vue").Ref<boolean, boolean>>;
            isReadonly: Readonly<import("vue").Ref<boolean, boolean>>;
            isValidating: import("vue").ShallowRef<boolean, boolean>;
            isValid: import("vue").Ref<boolean | null, boolean | null> & {
                readonly externalValue: boolean | null;
            };
            items: import("vue").Ref<{
                id: string | number;
                validate: () => Promise<string[]>;
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
                isValid: boolean | null;
                errorMessages: string[];
            }[], import("../../composables/form.js").FormField[] | {
                id: string | number;
                validate: () => Promise<string[]>;
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
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
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: {
        errors: import("vue").Ref<{
            id: string | number;
            errorMessages: string[];
        }[], import("../../composables/form.js").FieldValidationResult[] | {
            id: string | number;
            errorMessages: string[];
        }[]>;
        isDisabled: Readonly<import("vue").Ref<boolean, boolean>>;
        isReadonly: Readonly<import("vue").Ref<boolean, boolean>>;
        isValidating: import("vue").ShallowRef<boolean, boolean>;
        isValid: import("vue").Ref<boolean | null, boolean | null> & {
            readonly externalValue: boolean | null;
        };
        items: import("vue").Ref<{
            id: string | number;
            validate: () => Promise<string[]>;
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
            isValid: boolean | null;
            errorMessages: string[];
        }[], import("../../composables/form.js").FormField[] | {
            id: string | number;
            validate: () => Promise<string[]>;
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
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
    }) => import("vue").VNodeChild) | undefined;
} & {
    onSubmit?: ((e: SubmitEventPromise) => any) | undefined;
    "onUpdate:modelValue"?: ((val: boolean | null) => any) | undefined;
}, {
    errors: import("vue").Ref<{
        id: string | number;
        errorMessages: string[];
    }[], import("../../composables/form.js").FieldValidationResult[] | {
        id: string | number;
        errorMessages: string[];
    }[]>;
    isDisabled: Readonly<import("vue").Ref<boolean, boolean>>;
    isReadonly: Readonly<import("vue").Ref<boolean, boolean>>;
    isValidating: import("vue").ShallowRef<boolean, boolean>;
    isValid: import("vue").Ref<boolean | null, boolean | null> & {
        readonly externalValue: boolean | null;
    };
    items: import("vue").Ref<{
        id: string | number;
        validate: () => Promise<string[]>;
        reset: () => Promise<void>;
        resetValidation: () => Promise<void>;
        vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
        isValid: boolean | null;
        errorMessages: string[];
    }[], import("../../composables/form.js").FormField[] | {
        id: string | number;
        validate: () => Promise<string[]>;
        reset: () => Promise<void>;
        resetValidation: () => Promise<void>;
        vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
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
} & HTMLFormElement & {
    _allExposed: {
        errors: import("vue").Ref<{
            id: string | number;
            errorMessages: string[];
        }[], import("../../composables/form.js").FieldValidationResult[] | {
            id: string | number;
            errorMessages: string[];
        }[]>;
        isDisabled: Readonly<import("vue").Ref<boolean, boolean>>;
        isReadonly: Readonly<import("vue").Ref<boolean, boolean>>;
        isValidating: import("vue").ShallowRef<boolean, boolean>;
        isValid: import("vue").Ref<boolean | null, boolean | null> & {
            readonly externalValue: boolean | null;
        };
        items: import("vue").Ref<{
            id: string | number;
            validate: () => Promise<string[]>;
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
            isValid: boolean | null;
            errorMessages: string[];
        }[], import("../../composables/form.js").FormField[] | {
            id: string | number;
            validate: () => Promise<string[]>;
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (val: boolean | null) => true;
    submit: (e: SubmitEventPromise) => true;
}, string, {
    style: import("vue").StyleValue;
    disabled: boolean;
    fastFail: boolean;
    readonly: boolean;
    modelValue: boolean | null;
    validateOn: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: {
        errors: import("vue").Ref<{
            id: string | number;
            errorMessages: string[];
        }[], import("../../composables/form.js").FieldValidationResult[] | {
            id: string | number;
            errorMessages: string[];
        }[]>;
        isDisabled: Readonly<import("vue").Ref<boolean, boolean>>;
        isReadonly: Readonly<import("vue").Ref<boolean, boolean>>;
        isValidating: import("vue").ShallowRef<boolean, boolean>;
        isValid: import("vue").Ref<boolean | null, boolean | null> & {
            readonly externalValue: boolean | null;
        };
        items: import("vue").Ref<{
            id: string | number;
            validate: () => Promise<string[]>;
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
            isValid: boolean | null;
            errorMessages: string[];
        }[], import("../../composables/form.js").FormField[] | {
            id: string | number;
            validate: () => Promise<string[]>;
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            vm: import("vue").Raw<import("vue").ComponentInternalInstance>;
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
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    disabled: BooleanConstructor;
    fastFail: BooleanConstructor;
    readonly: BooleanConstructor;
    modelValue: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
    validateOn: {
        type: import("vue").PropType<("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined>;
        default: string;
    };
}, import("vue").ExtractPropTypes<{
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    disabled: BooleanConstructor;
    fastFail: BooleanConstructor;
    readonly: BooleanConstructor;
    modelValue: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
    validateOn: {
        type: import("vue").PropType<("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined>;
        default: string;
    };
}>>;
export type VForm = InstanceType<typeof VForm>;
