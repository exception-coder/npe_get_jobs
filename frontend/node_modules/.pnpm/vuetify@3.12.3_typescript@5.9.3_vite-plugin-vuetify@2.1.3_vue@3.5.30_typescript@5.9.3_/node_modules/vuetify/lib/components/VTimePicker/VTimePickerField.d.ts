// Types
import type { PropType } from 'vue';
export declare const makeVTimePickerFieldProps: <Defaults extends {
    active?: unknown;
    color?: unknown;
    disabled?: unknown;
    label?: unknown;
    modelValue?: unknown;
    error?: unknown;
    showHint?: unknown;
    readonly?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    active: unknown extends Defaults["active"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"]>;
        default: unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    label: unknown extends Defaults["label"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["label"] ? string : string | Defaults["label"]>;
        default: unknown extends Defaults["label"] ? string : string | Defaults["label"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? PropType<string | number | null> : {
        type: PropType<unknown extends Defaults["modelValue"] ? string | number | null : string | number | Defaults["modelValue"] | null>;
        default: unknown extends Defaults["modelValue"] ? string | number | null : Defaults["modelValue"] | NonNullable<string | number | null>;
    };
    error: unknown extends Defaults["error"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["error"] ? string : string | Defaults["error"]>;
        default: unknown extends Defaults["error"] ? string : string | Defaults["error"];
    };
    showHint: unknown extends Defaults["showHint"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["showHint"] ? boolean : boolean | Defaults["showHint"]>;
        default: unknown extends Defaults["showHint"] ? boolean : boolean | Defaults["showHint"];
    };
    readonly: unknown extends Defaults["readonly"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"]>;
        default: unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"];
    };
};
export declare const VTimePickerField: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        active: boolean;
        disabled: boolean;
        showHint: boolean;
        readonly: boolean;
    } & {
        color?: string | undefined;
        label?: string | undefined;
        modelValue?: string | number | null | undefined;
        error?: string | undefined;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((v: string | null) => any) | undefined;
    }, Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            style: import("vue").StyleValue;
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            clearable: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            active: boolean;
            centerAffix: boolean;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            persistentClear: boolean;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            autofocus: boolean;
            persistentPlaceholder: boolean;
            persistentCounter: boolean;
            type: string;
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            $children?: {
                prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                "prepend-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                "append-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                default?: ((arg: {
                    id: Readonly<import("vue").Ref<string, string>>;
                }) => import("vue").VNodeChild) | undefined;
                counter?: ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                prepend?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                "prepend-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                "append-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                label?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                default?: false | ((arg: {
                    id: Readonly<import("vue").Ref<string, string>>;
                }) => import("vue").VNodeChild) | undefined;
                counter?: false | ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
            focused: boolean;
            "onUpdate:focused"?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            name?: string | undefined;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            modelValue?: any;
            validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
            validationValue?: any;
            density: import("../../composables/density.js").Density;
            rounded?: string | number | boolean | undefined;
            tile: boolean;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            loading?: string | boolean | undefined;
            id?: string | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            hideDetails?: "auto" | boolean | undefined;
            hideSpinButtons: boolean;
            hint?: string | undefined;
            persistentHint: boolean;
            messages: string | readonly string[];
            "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            bgColor?: string | undefined;
            clearable: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            active: boolean;
            centerAffix?: boolean | undefined;
            color?: string | undefined;
            baseColor?: string | undefined;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            iconColor?: string | boolean | undefined;
            label?: string | undefined;
            persistentClear: boolean;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
            autocomplete?: string | undefined;
            autofocus: boolean;
            counter?: string | number | boolean | undefined;
            counterValue?: number | ((value: any) => number) | undefined;
            prefix?: string | undefined;
            placeholder?: string | undefined;
            persistentPlaceholder: boolean;
            persistentCounter: boolean;
            suffix?: string | undefined;
            role?: string | undefined;
            type: string;
            modelModifiers?: Record<string, boolean> | undefined;
            "onClick:control"?: ((e: MouseEvent) => any) | undefined;
            "onMousedown:control"?: ((e: MouseEvent) => any) | undefined;
            "onUpdate:modelValue"?: ((val: string) => any) | undefined;
            "v-slot:append"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:append-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:clear"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:counter"?: false | ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:details"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            "v-slot:message"?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "active" | "autofocus" | "centerAffix" | "clearIcon" | "clearable" | "density" | "dirty" | "disabled" | "error" | "errorMessages" | "flat" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentClear" | "persistentCounter" | "persistentHint" | "persistentPlaceholder" | "readonly" | "reverse" | "rounded" | "rules" | "singleLine" | "style" | "tile" | "type" | "variant">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            "prepend-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            "append-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            default?: ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            counter?: ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $host: Element | null;
        $emit: ((event: "click:control", e: MouseEvent) => void) & ((event: "mousedown:control", e: MouseEvent) => void) & ((event: "update:focused", focused: boolean) => void) & ((event: "update:modelValue", val: string) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("../../composables/density.js").Density;
            tile: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            clearable: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            active: boolean;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            persistentClear: boolean;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            autofocus: boolean;
            persistentPlaceholder: boolean;
            persistentCounter: boolean;
            type: string;
        } & {
            theme?: string | undefined;
            class?: any;
            "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
            name?: string | undefined;
            modelValue?: any;
            validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
            validationValue?: any;
            rounded?: string | number | boolean | undefined;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            loading?: string | boolean | undefined;
            id?: string | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            hideDetails?: "auto" | boolean | undefined;
            hint?: string | undefined;
            "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            bgColor?: string | undefined;
            centerAffix?: boolean | undefined;
            color?: string | undefined;
            baseColor?: string | undefined;
            iconColor?: string | boolean | undefined;
            label?: string | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
            autocomplete?: string | undefined;
            counter?: string | number | boolean | undefined;
            counterValue?: number | ((value: any) => number) | undefined;
            prefix?: string | undefined;
            placeholder?: string | undefined;
            suffix?: string | undefined;
            role?: string | undefined;
            modelModifiers?: Record<string, boolean> | undefined;
        } & {
            $children?: {
                prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                "prepend-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                "append-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                default?: ((arg: {
                    id: Readonly<import("vue").Ref<string, string>>;
                }) => import("vue").VNodeChild) | undefined;
                counter?: ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                prepend?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                "prepend-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                "append-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                label?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                default?: false | ((arg: {
                    id: Readonly<import("vue").Ref<string, string>>;
                }) => import("vue").VNodeChild) | undefined;
                counter?: false | ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:append"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:append-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:clear"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:counter"?: false | ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:details"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            "v-slot:message"?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        } & {
            "onClick:control"?: ((e: MouseEvent) => any) | undefined;
            "onMousedown:control"?: ((e: MouseEvent) => any) | undefined;
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            "onUpdate:modelValue"?: ((val: string) => any) | undefined;
        }, HTMLInputElement & Omit<Omit<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                style: import("vue").StyleValue;
                focused: boolean;
                disabled: boolean | null;
                error: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                readonly: boolean | null;
                rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
                messages: string | readonly string[];
                direction: "horizontal" | "vertical";
            }> & Omit<{
                theme?: string | undefined;
                class?: any;
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                focused: boolean;
                "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
                disabled: boolean | null;
                error: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                name?: string | undefined;
                label?: string | undefined;
                readonly: boolean | null;
                rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
                validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
                validationValue?: any;
                density: import("../../composables/density.js").Density;
                maxWidth?: string | number | undefined;
                minWidth?: string | number | undefined;
                width?: string | number | undefined;
                id?: string | undefined;
                appendIcon?: import("../../composables/icons.js").IconValue | undefined;
                baseColor?: string | undefined;
                centerAffix: boolean;
                color?: string | undefined;
                glow: boolean;
                iconColor?: string | boolean | undefined;
                prependIcon?: import("../../composables/icons.js").IconValue | undefined;
                hideDetails?: "auto" | boolean | undefined;
                hideSpinButtons: boolean;
                hint?: string | undefined;
                persistentHint: boolean;
                messages: string | readonly string[];
                direction: "horizontal" | "vertical";
                "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
                "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                default?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $host: Element | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<{
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                focused: boolean;
                disabled: boolean | null;
                error: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                readonly: boolean | null;
                rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
                messages: string | readonly string[];
                direction: "horizontal" | "vertical";
            } & {
                theme?: string | undefined;
                class?: any;
                "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
                name?: string | undefined;
                label?: string | undefined;
                validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
                validationValue?: any;
                maxWidth?: string | number | undefined;
                minWidth?: string | number | undefined;
                width?: string | number | undefined;
                id?: string | undefined;
                appendIcon?: import("../../composables/icons.js").IconValue | undefined;
                baseColor?: string | undefined;
                color?: string | undefined;
                iconColor?: string | boolean | undefined;
                prependIcon?: import("../../composables/icons.js").IconValue | undefined;
                hideDetails?: "auto" | boolean | undefined;
                hint?: string | undefined;
                "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
                "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
            } & {}, {
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                validate: (silent?: boolean) => Promise<string[]>;
                isValid: import("vue").ComputedRef<boolean | null>;
                errorMessages: import("vue").ComputedRef<string[]>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
                "update:modelValue": (value: any) => true;
            }, "$children" | "modelValue" | "update:modelValue" | "v-slot:append" | "v-slot:default" | "v-slot:details" | "v-slot:message" | "v-slot:prepend" | "v-slots">, string, {
                style: import("vue").StyleValue;
                focused: boolean;
                disabled: boolean | null;
                error: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                readonly: boolean | null;
                rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
                messages: string | readonly string[];
                direction: "horizontal" | "vertical";
            }, {}, string, import("vue").SlotsType<Partial<{
                default: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                prepend: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                append: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                details: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                message: (arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
                beforeCreate?: ((() => void)[] | (() => void)) | undefined;
                created?: ((() => void)[] | (() => void)) | undefined;
                beforeMount?: ((() => void)[] | (() => void)) | undefined;
                mounted?: ((() => void)[] | (() => void)) | undefined;
                beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
                updated?: ((() => void)[] | (() => void)) | undefined;
                activated?: ((() => void)[] | (() => void)) | undefined;
                deactivated?: ((() => void)[] | (() => void)) | undefined;
                beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
                beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
                destroyed?: ((() => void)[] | (() => void)) | undefined;
                unmounted?: ((() => void)[] | (() => void)) | undefined;
                renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
                renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
                errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<{
            style: import("vue").StyleValue;
            focused: boolean;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
        }> & Omit<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            focused: boolean;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
        } & {
            theme?: string | undefined;
            class?: any;
            "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
            name?: string | undefined;
            label?: string | undefined;
            validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
            validationValue?: any;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            id?: string | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            baseColor?: string | undefined;
            color?: string | undefined;
            iconColor?: string | boolean | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            hideDetails?: "auto" | boolean | undefined;
            hint?: string | undefined;
            "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
        } & {}, "isValid" | "reset" | "resetValidation" | "validate" | ("centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style")> & import("vue").ShallowUnwrapRef<{
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
            modelValue?: unknown;
            "onUpdate:modelValue"?: ((value: unknown) => void) | undefined;
        }, import("../VInput/VInput.js").VInputSlots>, "$children" | "appendIcon" | "baseColor" | "class" | "color" | "hideDetails" | "hint" | "iconColor" | "id" | "label" | "maxWidth" | "minWidth" | "modelValue" | "name" | "onClick:append" | "onClick:prepend" | "onUpdate:focused" | "onUpdate:modelValue" | "prependIcon" | "theme" | "v-slot:append" | "v-slot:default" | "v-slot:details" | "v-slot:message" | "v-slot:prepend" | "v-slots" | "validateOn" | "validationValue" | "width" | ("centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style") | keyof import("vue").VNodeProps>, `$${any}`> & Omit<Omit<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                style: import("vue").StyleValue;
                focused: boolean;
                rounded: string | number | boolean;
                tile: boolean;
                clearable: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                active: boolean;
                centerAffix: boolean;
                dirty: boolean;
                disabled: boolean;
                glow: boolean;
                error: boolean;
                flat: boolean;
                persistentClear: boolean;
                reverse: boolean;
                singleLine: boolean;
                variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
                details: boolean;
            }> & Omit<{
                theme?: string | undefined;
                class?: any;
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                focused: boolean;
                "onUpdate:focused"?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
                rounded?: string | number | boolean | undefined;
                tile: boolean;
                loading?: string | boolean | undefined;
                appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                bgColor?: string | undefined;
                clearable: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                active: boolean;
                centerAffix?: boolean | undefined;
                color?: string | undefined;
                baseColor?: string | undefined;
                dirty: boolean;
                disabled: boolean;
                glow: boolean;
                error: boolean;
                flat: boolean;
                iconColor?: string | boolean | undefined;
                label?: string | undefined;
                persistentClear: boolean;
                prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                reverse: boolean;
                singleLine: boolean;
                variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
                "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
                "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
                "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
                id?: string | undefined;
                details: boolean;
                labelId?: string | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                "prepend-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                "append-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                default?: ((arg: import("../VField/VField.js").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $host: Element | null;
            $emit: (event: "update:focused", focused: boolean) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<{
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                focused: boolean;
                tile: boolean;
                clearable: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                active: boolean;
                dirty: boolean;
                disabled: boolean;
                glow: boolean;
                error: boolean;
                flat: boolean;
                persistentClear: boolean;
                reverse: boolean;
                singleLine: boolean;
                variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
                details: boolean;
            } & {
                theme?: string | undefined;
                class?: any;
                "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
                rounded?: string | number | boolean | undefined;
                loading?: string | boolean | undefined;
                appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                bgColor?: string | undefined;
                centerAffix?: boolean | undefined;
                color?: string | undefined;
                baseColor?: string | undefined;
                iconColor?: string | boolean | undefined;
                label?: string | undefined;
                prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
                "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
                "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
                id?: string | undefined;
                labelId?: string | undefined;
            } & {
                "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            }, {
                controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                fieldIconColor: import("vue").ComputedRef<string | undefined>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
                "update:focused": (focused: boolean) => true;
                "update:modelValue": (value: any) => true;
            }, "$children" | "modelValue" | "update:modelValue" | "v-slot:append-inner" | "v-slot:clear" | "v-slot:default" | "v-slot:label" | "v-slot:loader" | "v-slot:prepend-inner" | "v-slots">, string, {
                style: import("vue").StyleValue;
                focused: boolean;
                rounded: string | number | boolean;
                tile: boolean;
                clearable: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                active: boolean;
                centerAffix: boolean;
                dirty: boolean;
                disabled: boolean;
                glow: boolean;
                error: boolean;
                flat: boolean;
                persistentClear: boolean;
                reverse: boolean;
                singleLine: boolean;
                variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
                details: boolean;
            }, {}, string, import("vue").SlotsType<Partial<{
                clear: (arg: import("../VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                "prepend-inner": (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                "append-inner": (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                label: (arg: import("../VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                default: (arg: import("../VField/VField.js").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
                beforeCreate?: ((() => void)[] | (() => void)) | undefined;
                created?: ((() => void)[] | (() => void)) | undefined;
                beforeMount?: ((() => void)[] | (() => void)) | undefined;
                mounted?: ((() => void)[] | (() => void)) | undefined;
                beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
                updated?: ((() => void)[] | (() => void)) | undefined;
                activated?: ((() => void)[] | (() => void)) | undefined;
                deactivated?: ((() => void)[] | (() => void)) | undefined;
                beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
                beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
                destroyed?: ((() => void)[] | (() => void)) | undefined;
                unmounted?: ((() => void)[] | (() => void)) | undefined;
                renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
                renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
                errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<{
            style: import("vue").StyleValue;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearable: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            active: boolean;
            centerAffix: boolean;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            persistentClear: boolean;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            details: boolean;
        }> & Omit<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            focused: boolean;
            tile: boolean;
            clearable: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            active: boolean;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            persistentClear: boolean;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            details: boolean;
        } & {
            theme?: string | undefined;
            class?: any;
            "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
            rounded?: string | number | boolean | undefined;
            loading?: string | boolean | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            bgColor?: string | undefined;
            centerAffix?: boolean | undefined;
            color?: string | undefined;
            baseColor?: string | undefined;
            iconColor?: string | boolean | undefined;
            label?: string | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
            id?: string | undefined;
            labelId?: string | undefined;
        } & {
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        }, "controlRef" | "fieldIconColor" | ("active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant")> & import("vue").ShallowUnwrapRef<{
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
            modelValue?: unknown;
            "onUpdate:modelValue"?: ((value: unknown) => void) | undefined;
        }, import("../VField/VField.js").VFieldSlots>, "$children" | "appendInnerIcon" | "baseColor" | "bgColor" | "class" | "color" | "iconColor" | "id" | "label" | "labelId" | "loading" | "modelValue" | "onClick:appendInner" | "onClick:clear" | "onClick:prependInner" | "onUpdate:focused" | "onUpdate:modelValue" | "prependInnerIcon" | "theme" | "v-slot:append-inner" | "v-slot:clear" | "v-slot:default" | "v-slot:label" | "v-slot:loader" | "v-slot:prepend-inner" | "v-slots" | ("active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant") | keyof import("vue").VNodeProps>, `$${any}`> & {
            _allExposed: {
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                validate: (silent?: boolean) => Promise<string[]>;
                isValid: import("vue").ComputedRef<boolean | null>;
                errorMessages: import("vue").ComputedRef<string[]>;
            } | {
                controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                fieldIconColor: import("vue").ComputedRef<string | undefined>;
            } | {};
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "click:control": (e: MouseEvent) => true;
            "mousedown:control": (e: MouseEvent) => true;
            "update:focused": (focused: boolean) => true;
            "update:modelValue": (val: string) => true;
        }, string, {
            style: import("vue").StyleValue;
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            clearable: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            active: boolean;
            centerAffix: boolean;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            persistentClear: boolean;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            autofocus: boolean;
            persistentPlaceholder: boolean;
            persistentCounter: boolean;
            type: string;
        }, {}, string, import("vue").SlotsType<Partial<{
            prepend: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            append: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            details: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            message: (arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            clear: (arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            "prepend-inner": (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            "append-inner": (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            label: (arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            default: (arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            counter: (arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: ((() => void)[] | (() => void)) | undefined;
            created?: ((() => void)[] | (() => void)) | undefined;
            beforeMount?: ((() => void)[] | (() => void)) | undefined;
            mounted?: ((() => void)[] | (() => void)) | undefined;
            beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
            updated?: ((() => void)[] | (() => void)) | undefined;
            activated?: ((() => void)[] | (() => void)) | undefined;
            deactivated?: ((() => void)[] | (() => void)) | undefined;
            beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
            beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
            destroyed?: ((() => void)[] | (() => void)) | undefined;
            unmounted?: ((() => void)[] | (() => void)) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<{
        style: import("vue").StyleValue;
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        messages: string | readonly string[];
        clearable: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        active: boolean;
        centerAffix: boolean;
        dirty: boolean;
        disabled: boolean;
        glow: boolean;
        error: boolean;
        flat: boolean;
        persistentClear: boolean;
        reverse: boolean;
        singleLine: boolean;
        variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
        autofocus: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        type: string;
    }> & Omit<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        density: import("../../composables/density.js").Density;
        tile: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        messages: string | readonly string[];
        clearable: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        active: boolean;
        dirty: boolean;
        disabled: boolean;
        glow: boolean;
        error: boolean;
        flat: boolean;
        persistentClear: boolean;
        reverse: boolean;
        singleLine: boolean;
        variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
        autofocus: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        type: string;
    } & {
        theme?: string | undefined;
        class?: any;
        "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
        name?: string | undefined;
        modelValue?: any;
        validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
        validationValue?: any;
        rounded?: string | number | boolean | undefined;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        loading?: string | boolean | undefined;
        id?: string | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        hideDetails?: "auto" | boolean | undefined;
        hint?: string | undefined;
        "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
        appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        bgColor?: string | undefined;
        centerAffix?: boolean | undefined;
        color?: string | undefined;
        baseColor?: string | undefined;
        iconColor?: string | boolean | undefined;
        label?: string | undefined;
        prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
        autocomplete?: string | undefined;
        counter?: string | number | boolean | undefined;
        counterValue?: number | ((value: any) => number) | undefined;
        prefix?: string | undefined;
        placeholder?: string | undefined;
        suffix?: string | undefined;
        role?: string | undefined;
        modelModifiers?: Record<string, boolean> | undefined;
    } & {
        $children?: {
            prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "prepend-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "append-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            default?: ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | undefined;
            counter?: ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            id: Readonly<import("vue").Ref<string, string>>;
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            prepend?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "prepend-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "append-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            default?: false | ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | undefined;
            counter?: false | ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:clear"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:counter"?: false | ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: {
            id: Readonly<import("vue").Ref<string, string>>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:message"?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
    } & {
        "onClick:control"?: ((e: MouseEvent) => any) | undefined;
        "onMousedown:control"?: ((e: MouseEvent) => any) | undefined;
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
    }, "ATTRIBUTE_NODE" | "CDATA_SECTION_NODE" | "COMMENT_NODE" | "DOCUMENT_FRAGMENT_NODE" | "DOCUMENT_NODE" | "DOCUMENT_POSITION_CONTAINED_BY" | "DOCUMENT_POSITION_CONTAINS" | "DOCUMENT_POSITION_DISCONNECTED" | "DOCUMENT_POSITION_FOLLOWING" | "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC" | "DOCUMENT_POSITION_PRECEDING" | "DOCUMENT_TYPE_NODE" | "ELEMENT_NODE" | "ENTITY_NODE" | "ENTITY_REFERENCE_NODE" | "NOTATION_NODE" | "PROCESSING_INSTRUCTION_NODE" | "TEXT_NODE" | "_" | "_allExposed" | "_clickOutside" | "_mutate" | "_observe" | "_onResize" | "_onScroll" | "_ripple" | "_touchHandlers" | "_transitionInitialStyles" | "accept" | "accessKey" | "accessKeyLabel" | "active" | "addEventListener" | "after" | "align" | "alt" | "animate" | "append" | "appendChild" | "ariaAtomic" | "ariaAutoComplete" | "ariaBrailleLabel" | "ariaBrailleRoleDescription" | "ariaBusy" | "ariaChecked" | "ariaColCount" | "ariaColIndex" | "ariaColIndexText" | "ariaColSpan" | "ariaCurrent" | "ariaDescription" | "ariaDisabled" | "ariaExpanded" | "ariaHasPopup" | "ariaHidden" | "ariaInvalid" | "ariaKeyShortcuts" | "ariaLabel" | "ariaLevel" | "ariaLive" | "ariaModal" | "ariaMultiLine" | "ariaMultiSelectable" | "ariaOrientation" | "ariaPlaceholder" | "ariaPosInSet" | "ariaPressed" | "ariaReadOnly" | "ariaRelevant" | "ariaRequired" | "ariaRoleDescription" | "ariaRowCount" | "ariaRowIndex" | "ariaRowIndexText" | "ariaRowSpan" | "ariaSelected" | "ariaSetSize" | "ariaSort" | "ariaValueMax" | "ariaValueMin" | "ariaValueNow" | "ariaValueText" | "assignedSlot" | "attachInternals" | "attachShadow" | "attributeStyleMap" | "attributes" | "autocapitalize" | "autocomplete" | "autofocus" | "baseURI" | "before" | "blur" | "capture" | "centerAffix" | "checkValidity" | "checkVisibility" | "checked" | "childElementCount" | "childNodes" | "children" | "classList" | "className" | "clearIcon" | "clearable" | "click" | "clientHeight" | "clientLeft" | "clientTop" | "clientWidth" | "cloneNode" | "closest" | "compareDocumentPosition" | "computedStyleMap" | "contains" | "contentEditable" | "controlRef" | "currentCSSZoom" | "dataset" | "defaultChecked" | "defaultValue" | "density" | "dir" | "dirName" | "dirty" | "disabled" | "dispatchEvent" | "draggable" | "enterKeyHint" | "error" | "errorMessages" | "fieldIconColor" | "files" | "firstChild" | "firstElementChild" | "flat" | "focus" | "focused" | "form" | "formAction" | "formEnctype" | "formMethod" | "formNoValidate" | "formTarget" | "getAnimations" | "getAttribute" | "getAttributeNS" | "getAttributeNames" | "getAttributeNode" | "getAttributeNodeNS" | "getBoundingClientRect" | "getClientRects" | "getElementsByClassName" | "getElementsByTagName" | "getElementsByTagNameNS" | "getHTML" | "getRootNode" | "glow" | "hasAttribute" | "hasAttributeNS" | "hasAttributes" | "hasChildNodes" | "hasPointerCapture" | "height" | "hidden" | "hidePopover" | "hideSpinButtons" | "id" | "indeterminate" | "inert" | "innerHTML" | "innerText" | "inputMode" | "insertAdjacentElement" | "insertAdjacentHTML" | "insertAdjacentText" | "insertBefore" | "isConnected" | "isContentEditable" | "isDefaultNamespace" | "isEqualNode" | "isSameNode" | "isValid" | "labels" | "lang" | "lastChild" | "lastElementChild" | "list" | "localName" | "lookupNamespaceURI" | "lookupPrefix" | "matches" | "max" | "maxErrors" | "maxLength" | "messages" | "min" | "minLength" | "multiple" | "name" | "namespaceURI" | "nextElementSibling" | "nextSibling" | "nodeName" | "nodeType" | "nodeValue" | "nonce" | "normalize" | "offsetHeight" | "offsetLeft" | "offsetParent" | "offsetTop" | "offsetWidth" | "onabort" | "onanimationcancel" | "onanimationend" | "onanimationiteration" | "onanimationstart" | "onauxclick" | "onbeforeinput" | "onbeforetoggle" | "onblur" | "oncancel" | "oncanplay" | "oncanplaythrough" | "onchange" | "onclick" | "onclose" | "oncontextlost" | "oncontextmenu" | "oncontextrestored" | "oncopy" | "oncuechange" | "oncut" | "ondblclick" | "ondrag" | "ondragend" | "ondragenter" | "ondragleave" | "ondragover" | "ondragstart" | "ondrop" | "ondurationchange" | "onemptied" | "onended" | "onerror" | "onfocus" | "onformdata" | "onfullscreenchange" | "onfullscreenerror" | "ongotpointercapture" | "oninput" | "oninvalid" | "onkeydown" | "onkeypress" | "onkeyup" | "onload" | "onloadeddata" | "onloadedmetadata" | "onloadstart" | "onlostpointercapture" | "onmousedown" | "onmouseenter" | "onmouseleave" | "onmousemove" | "onmouseout" | "onmouseover" | "onmouseup" | "onpaste" | "onpause" | "onplay" | "onplaying" | "onpointercancel" | "onpointerdown" | "onpointerenter" | "onpointerleave" | "onpointermove" | "onpointerout" | "onpointerover" | "onpointerup" | "onprogress" | "onratechange" | "onreset" | "onresize" | "onscroll" | "onscrollend" | "onsecuritypolicyviolation" | "onseeked" | "onseeking" | "onselect" | "onselectionchange" | "onselectstart" | "onslotchange" | "onstalled" | "onsubmit" | "onsuspend" | "ontimeupdate" | "ontoggle" | "ontouchcancel" | "ontouchend" | "ontouchmove" | "ontouchstart" | "ontransitioncancel" | "ontransitionend" | "ontransitionrun" | "ontransitionstart" | "onvolumechange" | "onwaiting" | "onwebkitanimationend" | "onwebkitanimationiteration" | "onwebkitanimationstart" | "onwebkittransitionend" | "onwheel" | "outerHTML" | "outerText" | "ownerDocument" | "parentElement" | "parentNode" | "part" | "pattern" | "persistentClear" | "persistentCounter" | "persistentHint" | "persistentPlaceholder" | "placeholder" | "popover" | "popoverTargetAction" | "popoverTargetElement" | "prefix" | "prepend" | "previousElementSibling" | "previousSibling" | "querySelector" | "querySelectorAll" | "readOnly" | "readonly" | "releasePointerCapture" | "remove" | "removeAttribute" | "removeAttributeNS" | "removeAttributeNode" | "removeChild" | "removeEventListener" | "replaceChild" | "replaceChildren" | "replaceWith" | "reportValidity" | "requestFullscreen" | "requestPointerLock" | "required" | "reset" | "resetValidation" | "reverse" | "role" | "rounded" | "rules" | "scroll" | "scrollBy" | "scrollHeight" | "scrollIntoView" | "scrollLeft" | "scrollTo" | "scrollTop" | "scrollWidth" | "select" | "selectionDirection" | "selectionEnd" | "selectionStart" | "setAttribute" | "setAttributeNS" | "setAttributeNode" | "setAttributeNodeNS" | "setCustomValidity" | "setHTMLUnsafe" | "setPointerCapture" | "setRangeText" | "setSelectionRange" | "shadowRoot" | "showPicker" | "showPopover" | "singleLine" | "size" | "slot" | "spellcheck" | "src" | "step" | "stepDown" | "stepUp" | "style" | "tabIndex" | "tagName" | "textContent" | "tile" | "title" | "toggleAttribute" | "togglePopover" | "translate" | "type" | "useMap" | "validate" | "validationMessage" | "validity" | "value" | "valueAsDate" | "valueAsNumber" | "variant" | "webkitEntries" | "webkitMatchesSelector" | "webkitdirectory" | "width" | "willValidate" | "writingSuggestions"> & import("vue").ShallowUnwrapRef<HTMLInputElement & Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            style: import("vue").StyleValue;
            focused: boolean;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            focused: boolean;
            "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            name?: string | undefined;
            label?: string | undefined;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
            validationValue?: any;
            density: import("../../composables/density.js").Density;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            id?: string | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            baseColor?: string | undefined;
            centerAffix: boolean;
            color?: string | undefined;
            glow: boolean;
            iconColor?: string | boolean | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            hideDetails?: "auto" | boolean | undefined;
            hideSpinButtons: boolean;
            hint?: string | undefined;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
            "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $host: Element | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            focused: boolean;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
        } & {
            theme?: string | undefined;
            class?: any;
            "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
            name?: string | undefined;
            label?: string | undefined;
            validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
            validationValue?: any;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            id?: string | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            baseColor?: string | undefined;
            color?: string | undefined;
            iconColor?: string | boolean | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            hideDetails?: "auto" | boolean | undefined;
            hint?: string | undefined;
            "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
        } & {}, {
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
            "update:modelValue": (value: any) => true;
        }, "$children" | "modelValue" | "update:modelValue" | "v-slot:append" | "v-slot:default" | "v-slot:details" | "v-slot:message" | "v-slot:prepend" | "v-slots">, string, {
            style: import("vue").StyleValue;
            focused: boolean;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
        }, {}, string, import("vue").SlotsType<Partial<{
            default: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            prepend: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            append: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            details: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            message: (arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: ((() => void)[] | (() => void)) | undefined;
            created?: ((() => void)[] | (() => void)) | undefined;
            beforeMount?: ((() => void)[] | (() => void)) | undefined;
            mounted?: ((() => void)[] | (() => void)) | undefined;
            beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
            updated?: ((() => void)[] | (() => void)) | undefined;
            activated?: ((() => void)[] | (() => void)) | undefined;
            deactivated?: ((() => void)[] | (() => void)) | undefined;
            beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
            beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
            destroyed?: ((() => void)[] | (() => void)) | undefined;
            unmounted?: ((() => void)[] | (() => void)) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<{
        style: import("vue").StyleValue;
        focused: boolean;
        disabled: boolean | null;
        error: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        density: import("../../composables/density.js").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        messages: string | readonly string[];
        direction: "horizontal" | "vertical";
    }> & Omit<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        focused: boolean;
        disabled: boolean | null;
        error: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        density: import("../../composables/density.js").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        messages: string | readonly string[];
        direction: "horizontal" | "vertical";
    } & {
        theme?: string | undefined;
        class?: any;
        "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
        name?: string | undefined;
        label?: string | undefined;
        validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
        validationValue?: any;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        id?: string | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        baseColor?: string | undefined;
        color?: string | undefined;
        iconColor?: string | boolean | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        hideDetails?: "auto" | boolean | undefined;
        hint?: string | undefined;
        "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
    } & {}, "isValid" | "reset" | "resetValidation" | "validate" | ("centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style")> & import("vue").ShallowUnwrapRef<{
        reset: () => Promise<void>;
        resetValidation: () => Promise<void>;
        validate: (silent?: boolean) => Promise<string[]>;
        isValid: import("vue").ComputedRef<boolean | null>;
        errorMessages: import("vue").ComputedRef<string[]>;
    }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
        modelValue?: unknown;
        "onUpdate:modelValue"?: ((value: unknown) => void) | undefined;
    }, import("../VInput/VInput.js").VInputSlots>, "$children" | "appendIcon" | "baseColor" | "class" | "color" | "hideDetails" | "hint" | "iconColor" | "id" | "label" | "maxWidth" | "minWidth" | "modelValue" | "name" | "onClick:append" | "onClick:prepend" | "onUpdate:focused" | "onUpdate:modelValue" | "prependIcon" | "theme" | "v-slot:append" | "v-slot:default" | "v-slot:details" | "v-slot:message" | "v-slot:prepend" | "v-slots" | "validateOn" | "validationValue" | "width" | ("centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style") | keyof import("vue").VNodeProps>, `$${any}`> & Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            style: import("vue").StyleValue;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearable: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            active: boolean;
            centerAffix: boolean;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            persistentClear: boolean;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            details: boolean;
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            focused: boolean;
            "onUpdate:focused"?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
            rounded?: string | number | boolean | undefined;
            tile: boolean;
            loading?: string | boolean | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            bgColor?: string | undefined;
            clearable: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            active: boolean;
            centerAffix?: boolean | undefined;
            color?: string | undefined;
            baseColor?: string | undefined;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            iconColor?: string | boolean | undefined;
            label?: string | undefined;
            persistentClear: boolean;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
            id?: string | undefined;
            details: boolean;
            labelId?: string | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            "prepend-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            "append-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            default?: ((arg: import("../VField/VField.js").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $host: Element | null;
        $emit: (event: "update:focused", focused: boolean) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            focused: boolean;
            tile: boolean;
            clearable: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            active: boolean;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            persistentClear: boolean;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            details: boolean;
        } & {
            theme?: string | undefined;
            class?: any;
            "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
            rounded?: string | number | boolean | undefined;
            loading?: string | boolean | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            bgColor?: string | undefined;
            centerAffix?: boolean | undefined;
            color?: string | undefined;
            baseColor?: string | undefined;
            iconColor?: string | boolean | undefined;
            label?: string | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
            id?: string | undefined;
            labelId?: string | undefined;
        } & {
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        }, {
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
            "update:focused": (focused: boolean) => true;
            "update:modelValue": (value: any) => true;
        }, "$children" | "modelValue" | "update:modelValue" | "v-slot:append-inner" | "v-slot:clear" | "v-slot:default" | "v-slot:label" | "v-slot:loader" | "v-slot:prepend-inner" | "v-slots">, string, {
            style: import("vue").StyleValue;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearable: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            active: boolean;
            centerAffix: boolean;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            persistentClear: boolean;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            details: boolean;
        }, {}, string, import("vue").SlotsType<Partial<{
            clear: (arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            "prepend-inner": (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            "append-inner": (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            label: (arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            default: (arg: import("../VField/VField.js").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: ((() => void)[] | (() => void)) | undefined;
            created?: ((() => void)[] | (() => void)) | undefined;
            beforeMount?: ((() => void)[] | (() => void)) | undefined;
            mounted?: ((() => void)[] | (() => void)) | undefined;
            beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
            updated?: ((() => void)[] | (() => void)) | undefined;
            activated?: ((() => void)[] | (() => void)) | undefined;
            deactivated?: ((() => void)[] | (() => void)) | undefined;
            beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
            beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
            destroyed?: ((() => void)[] | (() => void)) | undefined;
            unmounted?: ((() => void)[] | (() => void)) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<{
        style: import("vue").StyleValue;
        focused: boolean;
        rounded: string | number | boolean;
        tile: boolean;
        clearable: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        active: boolean;
        centerAffix: boolean;
        dirty: boolean;
        disabled: boolean;
        glow: boolean;
        error: boolean;
        flat: boolean;
        persistentClear: boolean;
        reverse: boolean;
        singleLine: boolean;
        variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
        details: boolean;
    }> & Omit<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        focused: boolean;
        tile: boolean;
        clearable: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        active: boolean;
        dirty: boolean;
        disabled: boolean;
        glow: boolean;
        error: boolean;
        flat: boolean;
        persistentClear: boolean;
        reverse: boolean;
        singleLine: boolean;
        variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
        details: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
        rounded?: string | number | boolean | undefined;
        loading?: string | boolean | undefined;
        appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        bgColor?: string | undefined;
        centerAffix?: boolean | undefined;
        color?: string | undefined;
        baseColor?: string | undefined;
        iconColor?: string | boolean | undefined;
        label?: string | undefined;
        prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
        id?: string | undefined;
        labelId?: string | undefined;
    } & {
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
    }, "controlRef" | "fieldIconColor" | ("active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant")> & import("vue").ShallowUnwrapRef<{
        controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        fieldIconColor: import("vue").ComputedRef<string | undefined>;
    }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
        modelValue?: unknown;
        "onUpdate:modelValue"?: ((value: unknown) => void) | undefined;
    }, import("../VField/VField.js").VFieldSlots>, "$children" | "appendInnerIcon" | "baseColor" | "bgColor" | "class" | "color" | "iconColor" | "id" | "label" | "labelId" | "loading" | "modelValue" | "onClick:appendInner" | "onClick:clear" | "onClick:prependInner" | "onUpdate:focused" | "onUpdate:modelValue" | "prependInnerIcon" | "theme" | "v-slot:append-inner" | "v-slot:clear" | "v-slot:default" | "v-slot:label" | "v-slot:loader" | "v-slot:prepend-inner" | "v-slots" | ("active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant") | keyof import("vue").VNodeProps>, `$${any}`> & {
        _allExposed: {
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        } | {
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        } | {};
    }> & {} & import("vue").ComponentCustomProperties & {}, "$children" | "appendIcon" | "appendInnerIcon" | "autocomplete" | "baseColor" | "bgColor" | "class" | "color" | "counter" | "counterValue" | "hideDetails" | "hint" | "iconColor" | "id" | "label" | "loading" | "maxWidth" | "minWidth" | "modelModifiers" | "modelValue" | "name" | "onClick:append" | "onClick:appendInner" | "onClick:clear" | "onClick:control" | "onClick:prepend" | "onClick:prependInner" | "onMousedown:control" | "onUpdate:focused" | "onUpdate:modelValue" | "placeholder" | "prefix" | "prependIcon" | "prependInnerIcon" | "role" | "suffix" | "theme" | "v-slot:append" | "v-slot:append-inner" | "v-slot:clear" | "v-slot:counter" | "v-slot:default" | "v-slot:details" | "v-slot:label" | "v-slot:loader" | "v-slot:message" | "v-slot:prepend" | "v-slot:prepend-inner" | "v-slots" | "validateOn" | "validationValue" | "width" | ("active" | "autofocus" | "centerAffix" | "clearIcon" | "clearable" | "density" | "dirty" | "disabled" | "error" | "errorMessages" | "flat" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentClear" | "persistentCounter" | "persistentHint" | "persistentPlaceholder" | "readonly" | "reverse" | "rounded" | "rules" | "singleLine" | "style" | "tile" | "type" | "variant") | keyof import("vue").VNodeProps>, `$${any}`> & {
        _allExposed: {} | (HTMLInputElement & Omit<Omit<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                style: import("vue").StyleValue;
                focused: boolean;
                disabled: boolean | null;
                error: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                readonly: boolean | null;
                rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
                messages: string | readonly string[];
                direction: "horizontal" | "vertical";
            }> & Omit<{
                theme?: string | undefined;
                class?: any;
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                focused: boolean;
                "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
                disabled: boolean | null;
                error: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                name?: string | undefined;
                label?: string | undefined;
                readonly: boolean | null;
                rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
                validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
                validationValue?: any;
                density: import("../../composables/density.js").Density;
                maxWidth?: string | number | undefined;
                minWidth?: string | number | undefined;
                width?: string | number | undefined;
                id?: string | undefined;
                appendIcon?: import("../../composables/icons.js").IconValue | undefined;
                baseColor?: string | undefined;
                centerAffix: boolean;
                color?: string | undefined;
                glow: boolean;
                iconColor?: string | boolean | undefined;
                prependIcon?: import("../../composables/icons.js").IconValue | undefined;
                hideDetails?: "auto" | boolean | undefined;
                hideSpinButtons: boolean;
                hint?: string | undefined;
                persistentHint: boolean;
                messages: string | readonly string[];
                direction: "horizontal" | "vertical";
                "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
                "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                default?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $host: Element | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<{
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                focused: boolean;
                disabled: boolean | null;
                error: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                readonly: boolean | null;
                rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
                messages: string | readonly string[];
                direction: "horizontal" | "vertical";
            } & {
                theme?: string | undefined;
                class?: any;
                "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
                name?: string | undefined;
                label?: string | undefined;
                validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
                validationValue?: any;
                maxWidth?: string | number | undefined;
                minWidth?: string | number | undefined;
                width?: string | number | undefined;
                id?: string | undefined;
                appendIcon?: import("../../composables/icons.js").IconValue | undefined;
                baseColor?: string | undefined;
                color?: string | undefined;
                iconColor?: string | boolean | undefined;
                prependIcon?: import("../../composables/icons.js").IconValue | undefined;
                hideDetails?: "auto" | boolean | undefined;
                hint?: string | undefined;
                "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
                "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
            } & {}, {
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                validate: (silent?: boolean) => Promise<string[]>;
                isValid: import("vue").ComputedRef<boolean | null>;
                errorMessages: import("vue").ComputedRef<string[]>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
                "update:modelValue": (value: any) => true;
            }, "$children" | "modelValue" | "update:modelValue" | "v-slot:append" | "v-slot:default" | "v-slot:details" | "v-slot:message" | "v-slot:prepend" | "v-slots">, string, {
                style: import("vue").StyleValue;
                focused: boolean;
                disabled: boolean | null;
                error: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                readonly: boolean | null;
                rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
                messages: string | readonly string[];
                direction: "horizontal" | "vertical";
            }, {}, string, import("vue").SlotsType<Partial<{
                default: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                prepend: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                append: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                details: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                message: (arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
                beforeCreate?: ((() => void)[] | (() => void)) | undefined;
                created?: ((() => void)[] | (() => void)) | undefined;
                beforeMount?: ((() => void)[] | (() => void)) | undefined;
                mounted?: ((() => void)[] | (() => void)) | undefined;
                beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
                updated?: ((() => void)[] | (() => void)) | undefined;
                activated?: ((() => void)[] | (() => void)) | undefined;
                deactivated?: ((() => void)[] | (() => void)) | undefined;
                beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
                beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
                destroyed?: ((() => void)[] | (() => void)) | undefined;
                unmounted?: ((() => void)[] | (() => void)) | undefined;
                renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
                renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
                errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<{
            style: import("vue").StyleValue;
            focused: boolean;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
        }> & Omit<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            focused: boolean;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
        } & {
            theme?: string | undefined;
            class?: any;
            "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
            name?: string | undefined;
            label?: string | undefined;
            validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
            validationValue?: any;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            id?: string | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            baseColor?: string | undefined;
            color?: string | undefined;
            iconColor?: string | boolean | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            hideDetails?: "auto" | boolean | undefined;
            hint?: string | undefined;
            "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
        } & {}, "isValid" | "reset" | "resetValidation" | "validate" | ("centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style")> & import("vue").ShallowUnwrapRef<{
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
            modelValue?: unknown;
            "onUpdate:modelValue"?: ((value: unknown) => void) | undefined;
        }, import("../VInput/VInput.js").VInputSlots>, "$children" | "appendIcon" | "baseColor" | "class" | "color" | "hideDetails" | "hint" | "iconColor" | "id" | "label" | "maxWidth" | "minWidth" | "modelValue" | "name" | "onClick:append" | "onClick:prepend" | "onUpdate:focused" | "onUpdate:modelValue" | "prependIcon" | "theme" | "v-slot:append" | "v-slot:default" | "v-slot:details" | "v-slot:message" | "v-slot:prepend" | "v-slots" | "validateOn" | "validationValue" | "width" | ("centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style") | keyof import("vue").VNodeProps>, `$${any}`> & Omit<Omit<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                style: import("vue").StyleValue;
                focused: boolean;
                rounded: string | number | boolean;
                tile: boolean;
                clearable: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                active: boolean;
                centerAffix: boolean;
                dirty: boolean;
                disabled: boolean;
                glow: boolean;
                error: boolean;
                flat: boolean;
                persistentClear: boolean;
                reverse: boolean;
                singleLine: boolean;
                variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
                details: boolean;
            }> & Omit<{
                theme?: string | undefined;
                class?: any;
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                focused: boolean;
                "onUpdate:focused"?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
                rounded?: string | number | boolean | undefined;
                tile: boolean;
                loading?: string | boolean | undefined;
                appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                bgColor?: string | undefined;
                clearable: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                active: boolean;
                centerAffix?: boolean | undefined;
                color?: string | undefined;
                baseColor?: string | undefined;
                dirty: boolean;
                disabled: boolean;
                glow: boolean;
                error: boolean;
                flat: boolean;
                iconColor?: string | boolean | undefined;
                label?: string | undefined;
                persistentClear: boolean;
                prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                reverse: boolean;
                singleLine: boolean;
                variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
                "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
                "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
                "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
                id?: string | undefined;
                details: boolean;
                labelId?: string | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                "prepend-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                "append-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                default?: ((arg: import("../VField/VField.js").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $host: Element | null;
            $emit: (event: "update:focused", focused: boolean) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<{
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                focused: boolean;
                tile: boolean;
                clearable: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                active: boolean;
                dirty: boolean;
                disabled: boolean;
                glow: boolean;
                error: boolean;
                flat: boolean;
                persistentClear: boolean;
                reverse: boolean;
                singleLine: boolean;
                variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
                details: boolean;
            } & {
                theme?: string | undefined;
                class?: any;
                "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
                rounded?: string | number | boolean | undefined;
                loading?: string | boolean | undefined;
                appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                bgColor?: string | undefined;
                centerAffix?: boolean | undefined;
                color?: string | undefined;
                baseColor?: string | undefined;
                iconColor?: string | boolean | undefined;
                label?: string | undefined;
                prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
                "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
                "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
                id?: string | undefined;
                labelId?: string | undefined;
            } & {
                "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            }, {
                controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                fieldIconColor: import("vue").ComputedRef<string | undefined>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
                "update:focused": (focused: boolean) => true;
                "update:modelValue": (value: any) => true;
            }, "$children" | "modelValue" | "update:modelValue" | "v-slot:append-inner" | "v-slot:clear" | "v-slot:default" | "v-slot:label" | "v-slot:loader" | "v-slot:prepend-inner" | "v-slots">, string, {
                style: import("vue").StyleValue;
                focused: boolean;
                rounded: string | number | boolean;
                tile: boolean;
                clearable: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                active: boolean;
                centerAffix: boolean;
                dirty: boolean;
                disabled: boolean;
                glow: boolean;
                error: boolean;
                flat: boolean;
                persistentClear: boolean;
                reverse: boolean;
                singleLine: boolean;
                variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
                details: boolean;
            }, {}, string, import("vue").SlotsType<Partial<{
                clear: (arg: import("../VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                "prepend-inner": (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                "append-inner": (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                label: (arg: import("../VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                default: (arg: import("../VField/VField.js").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
                beforeCreate?: ((() => void)[] | (() => void)) | undefined;
                created?: ((() => void)[] | (() => void)) | undefined;
                beforeMount?: ((() => void)[] | (() => void)) | undefined;
                mounted?: ((() => void)[] | (() => void)) | undefined;
                beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
                updated?: ((() => void)[] | (() => void)) | undefined;
                activated?: ((() => void)[] | (() => void)) | undefined;
                deactivated?: ((() => void)[] | (() => void)) | undefined;
                beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
                beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
                destroyed?: ((() => void)[] | (() => void)) | undefined;
                unmounted?: ((() => void)[] | (() => void)) | undefined;
                renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
                renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
                errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<{
            style: import("vue").StyleValue;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearable: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            active: boolean;
            centerAffix: boolean;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            persistentClear: boolean;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            details: boolean;
        }> & Omit<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            focused: boolean;
            tile: boolean;
            clearable: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            active: boolean;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            persistentClear: boolean;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            details: boolean;
        } & {
            theme?: string | undefined;
            class?: any;
            "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
            rounded?: string | number | boolean | undefined;
            loading?: string | boolean | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            bgColor?: string | undefined;
            centerAffix?: boolean | undefined;
            color?: string | undefined;
            baseColor?: string | undefined;
            iconColor?: string | boolean | undefined;
            label?: string | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
            id?: string | undefined;
            labelId?: string | undefined;
        } & {
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        }, "controlRef" | "fieldIconColor" | ("active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant")> & import("vue").ShallowUnwrapRef<{
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
            modelValue?: unknown;
            "onUpdate:modelValue"?: ((value: unknown) => void) | undefined;
        }, import("../VField/VField.js").VFieldSlots>, "$children" | "appendInnerIcon" | "baseColor" | "bgColor" | "class" | "color" | "iconColor" | "id" | "label" | "labelId" | "loading" | "modelValue" | "onClick:appendInner" | "onClick:clear" | "onClick:prependInner" | "onUpdate:focused" | "onUpdate:modelValue" | "prependInnerIcon" | "theme" | "v-slot:append-inner" | "v-slot:clear" | "v-slot:default" | "v-slot:label" | "v-slot:loader" | "v-slot:prepend-inner" | "v-slots" | ("active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant") | keyof import("vue").VNodeProps>, `$${any}`> & {
            _allExposed: {
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                validate: (silent?: boolean) => Promise<string[]>;
                isValid: import("vue").ComputedRef<boolean | null>;
                errorMessages: import("vue").ComputedRef<string[]>;
            } | {
                controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                fieldIconColor: import("vue").ComputedRef<string | undefined>;
            } | {};
        });
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (v: string | null) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        active: boolean;
        disabled: boolean;
        showHint: boolean;
        readonly: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        active: boolean;
        disabled: boolean;
        showHint: boolean;
        readonly: boolean;
    } & {
        color?: string | undefined;
        label?: string | undefined;
        modelValue?: string | number | null | undefined;
        error?: string | undefined;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((v: string | null) => any) | undefined;
    }, Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            style: import("vue").StyleValue;
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            clearable: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            active: boolean;
            centerAffix: boolean;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            persistentClear: boolean;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            autofocus: boolean;
            persistentPlaceholder: boolean;
            persistentCounter: boolean;
            type: string;
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            $children?: {
                prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                "prepend-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                "append-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                default?: ((arg: {
                    id: Readonly<import("vue").Ref<string, string>>;
                }) => import("vue").VNodeChild) | undefined;
                counter?: ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                prepend?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                "prepend-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                "append-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                label?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                default?: false | ((arg: {
                    id: Readonly<import("vue").Ref<string, string>>;
                }) => import("vue").VNodeChild) | undefined;
                counter?: false | ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
            focused: boolean;
            "onUpdate:focused"?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            name?: string | undefined;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            modelValue?: any;
            validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
            validationValue?: any;
            density: import("../../composables/density.js").Density;
            rounded?: string | number | boolean | undefined;
            tile: boolean;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            loading?: string | boolean | undefined;
            id?: string | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            hideDetails?: "auto" | boolean | undefined;
            hideSpinButtons: boolean;
            hint?: string | undefined;
            persistentHint: boolean;
            messages: string | readonly string[];
            "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            bgColor?: string | undefined;
            clearable: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            active: boolean;
            centerAffix?: boolean | undefined;
            color?: string | undefined;
            baseColor?: string | undefined;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            iconColor?: string | boolean | undefined;
            label?: string | undefined;
            persistentClear: boolean;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
            autocomplete?: string | undefined;
            autofocus: boolean;
            counter?: string | number | boolean | undefined;
            counterValue?: number | ((value: any) => number) | undefined;
            prefix?: string | undefined;
            placeholder?: string | undefined;
            persistentPlaceholder: boolean;
            persistentCounter: boolean;
            suffix?: string | undefined;
            role?: string | undefined;
            type: string;
            modelModifiers?: Record<string, boolean> | undefined;
            "onClick:control"?: ((e: MouseEvent) => any) | undefined;
            "onMousedown:control"?: ((e: MouseEvent) => any) | undefined;
            "onUpdate:modelValue"?: ((val: string) => any) | undefined;
            "v-slot:append"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:append-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:clear"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:counter"?: false | ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:details"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            "v-slot:message"?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "active" | "autofocus" | "centerAffix" | "clearIcon" | "clearable" | "density" | "dirty" | "disabled" | "error" | "errorMessages" | "flat" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentClear" | "persistentCounter" | "persistentHint" | "persistentPlaceholder" | "readonly" | "reverse" | "rounded" | "rules" | "singleLine" | "style" | "tile" | "type" | "variant">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            "prepend-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            "append-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            default?: ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            counter?: ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $host: Element | null;
        $emit: ((event: "click:control", e: MouseEvent) => void) & ((event: "mousedown:control", e: MouseEvent) => void) & ((event: "update:focused", focused: boolean) => void) & ((event: "update:modelValue", val: string) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("../../composables/density.js").Density;
            tile: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            clearable: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            active: boolean;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            persistentClear: boolean;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            autofocus: boolean;
            persistentPlaceholder: boolean;
            persistentCounter: boolean;
            type: string;
        } & {
            theme?: string | undefined;
            class?: any;
            "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
            name?: string | undefined;
            modelValue?: any;
            validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
            validationValue?: any;
            rounded?: string | number | boolean | undefined;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            loading?: string | boolean | undefined;
            id?: string | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            hideDetails?: "auto" | boolean | undefined;
            hint?: string | undefined;
            "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            bgColor?: string | undefined;
            centerAffix?: boolean | undefined;
            color?: string | undefined;
            baseColor?: string | undefined;
            iconColor?: string | boolean | undefined;
            label?: string | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
            autocomplete?: string | undefined;
            counter?: string | number | boolean | undefined;
            counterValue?: number | ((value: any) => number) | undefined;
            prefix?: string | undefined;
            placeholder?: string | undefined;
            suffix?: string | undefined;
            role?: string | undefined;
            modelModifiers?: Record<string, boolean> | undefined;
        } & {
            $children?: {
                prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                "prepend-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                "append-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                default?: ((arg: {
                    id: Readonly<import("vue").Ref<string, string>>;
                }) => import("vue").VNodeChild) | undefined;
                counter?: ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                prepend?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                "prepend-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                "append-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                label?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                default?: false | ((arg: {
                    id: Readonly<import("vue").Ref<string, string>>;
                }) => import("vue").VNodeChild) | undefined;
                counter?: false | ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:append"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:append-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:clear"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:counter"?: false | ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:details"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            "v-slot:message"?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        } & {
            "onClick:control"?: ((e: MouseEvent) => any) | undefined;
            "onMousedown:control"?: ((e: MouseEvent) => any) | undefined;
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            "onUpdate:modelValue"?: ((val: string) => any) | undefined;
        }, HTMLInputElement & Omit<Omit<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                style: import("vue").StyleValue;
                focused: boolean;
                disabled: boolean | null;
                error: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                readonly: boolean | null;
                rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
                messages: string | readonly string[];
                direction: "horizontal" | "vertical";
            }> & Omit<{
                theme?: string | undefined;
                class?: any;
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                focused: boolean;
                "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
                disabled: boolean | null;
                error: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                name?: string | undefined;
                label?: string | undefined;
                readonly: boolean | null;
                rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
                validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
                validationValue?: any;
                density: import("../../composables/density.js").Density;
                maxWidth?: string | number | undefined;
                minWidth?: string | number | undefined;
                width?: string | number | undefined;
                id?: string | undefined;
                appendIcon?: import("../../composables/icons.js").IconValue | undefined;
                baseColor?: string | undefined;
                centerAffix: boolean;
                color?: string | undefined;
                glow: boolean;
                iconColor?: string | boolean | undefined;
                prependIcon?: import("../../composables/icons.js").IconValue | undefined;
                hideDetails?: "auto" | boolean | undefined;
                hideSpinButtons: boolean;
                hint?: string | undefined;
                persistentHint: boolean;
                messages: string | readonly string[];
                direction: "horizontal" | "vertical";
                "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
                "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                default?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $host: Element | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<{
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                focused: boolean;
                disabled: boolean | null;
                error: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                readonly: boolean | null;
                rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
                messages: string | readonly string[];
                direction: "horizontal" | "vertical";
            } & {
                theme?: string | undefined;
                class?: any;
                "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
                name?: string | undefined;
                label?: string | undefined;
                validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
                validationValue?: any;
                maxWidth?: string | number | undefined;
                minWidth?: string | number | undefined;
                width?: string | number | undefined;
                id?: string | undefined;
                appendIcon?: import("../../composables/icons.js").IconValue | undefined;
                baseColor?: string | undefined;
                color?: string | undefined;
                iconColor?: string | boolean | undefined;
                prependIcon?: import("../../composables/icons.js").IconValue | undefined;
                hideDetails?: "auto" | boolean | undefined;
                hint?: string | undefined;
                "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
                "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
            } & {}, {
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                validate: (silent?: boolean) => Promise<string[]>;
                isValid: import("vue").ComputedRef<boolean | null>;
                errorMessages: import("vue").ComputedRef<string[]>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
                "update:modelValue": (value: any) => true;
            }, "$children" | "modelValue" | "update:modelValue" | "v-slot:append" | "v-slot:default" | "v-slot:details" | "v-slot:message" | "v-slot:prepend" | "v-slots">, string, {
                style: import("vue").StyleValue;
                focused: boolean;
                disabled: boolean | null;
                error: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                readonly: boolean | null;
                rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
                messages: string | readonly string[];
                direction: "horizontal" | "vertical";
            }, {}, string, import("vue").SlotsType<Partial<{
                default: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                prepend: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                append: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                details: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                message: (arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
                beforeCreate?: ((() => void)[] | (() => void)) | undefined;
                created?: ((() => void)[] | (() => void)) | undefined;
                beforeMount?: ((() => void)[] | (() => void)) | undefined;
                mounted?: ((() => void)[] | (() => void)) | undefined;
                beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
                updated?: ((() => void)[] | (() => void)) | undefined;
                activated?: ((() => void)[] | (() => void)) | undefined;
                deactivated?: ((() => void)[] | (() => void)) | undefined;
                beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
                beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
                destroyed?: ((() => void)[] | (() => void)) | undefined;
                unmounted?: ((() => void)[] | (() => void)) | undefined;
                renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
                renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
                errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<{
            style: import("vue").StyleValue;
            focused: boolean;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
        }> & Omit<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            focused: boolean;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
        } & {
            theme?: string | undefined;
            class?: any;
            "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
            name?: string | undefined;
            label?: string | undefined;
            validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
            validationValue?: any;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            id?: string | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            baseColor?: string | undefined;
            color?: string | undefined;
            iconColor?: string | boolean | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            hideDetails?: "auto" | boolean | undefined;
            hint?: string | undefined;
            "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
        } & {}, "isValid" | "reset" | "resetValidation" | "validate" | ("centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style")> & import("vue").ShallowUnwrapRef<{
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
            modelValue?: unknown;
            "onUpdate:modelValue"?: ((value: unknown) => void) | undefined;
        }, import("../VInput/VInput.js").VInputSlots>, "$children" | "appendIcon" | "baseColor" | "class" | "color" | "hideDetails" | "hint" | "iconColor" | "id" | "label" | "maxWidth" | "minWidth" | "modelValue" | "name" | "onClick:append" | "onClick:prepend" | "onUpdate:focused" | "onUpdate:modelValue" | "prependIcon" | "theme" | "v-slot:append" | "v-slot:default" | "v-slot:details" | "v-slot:message" | "v-slot:prepend" | "v-slots" | "validateOn" | "validationValue" | "width" | ("centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style") | keyof import("vue").VNodeProps>, `$${any}`> & Omit<Omit<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                style: import("vue").StyleValue;
                focused: boolean;
                rounded: string | number | boolean;
                tile: boolean;
                clearable: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                active: boolean;
                centerAffix: boolean;
                dirty: boolean;
                disabled: boolean;
                glow: boolean;
                error: boolean;
                flat: boolean;
                persistentClear: boolean;
                reverse: boolean;
                singleLine: boolean;
                variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
                details: boolean;
            }> & Omit<{
                theme?: string | undefined;
                class?: any;
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                focused: boolean;
                "onUpdate:focused"?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
                rounded?: string | number | boolean | undefined;
                tile: boolean;
                loading?: string | boolean | undefined;
                appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                bgColor?: string | undefined;
                clearable: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                active: boolean;
                centerAffix?: boolean | undefined;
                color?: string | undefined;
                baseColor?: string | undefined;
                dirty: boolean;
                disabled: boolean;
                glow: boolean;
                error: boolean;
                flat: boolean;
                iconColor?: string | boolean | undefined;
                label?: string | undefined;
                persistentClear: boolean;
                prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                reverse: boolean;
                singleLine: boolean;
                variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
                "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
                "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
                "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
                id?: string | undefined;
                details: boolean;
                labelId?: string | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                "prepend-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                "append-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                default?: ((arg: import("../VField/VField.js").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $host: Element | null;
            $emit: (event: "update:focused", focused: boolean) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<{
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                focused: boolean;
                tile: boolean;
                clearable: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                active: boolean;
                dirty: boolean;
                disabled: boolean;
                glow: boolean;
                error: boolean;
                flat: boolean;
                persistentClear: boolean;
                reverse: boolean;
                singleLine: boolean;
                variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
                details: boolean;
            } & {
                theme?: string | undefined;
                class?: any;
                "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
                rounded?: string | number | boolean | undefined;
                loading?: string | boolean | undefined;
                appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                bgColor?: string | undefined;
                centerAffix?: boolean | undefined;
                color?: string | undefined;
                baseColor?: string | undefined;
                iconColor?: string | boolean | undefined;
                label?: string | undefined;
                prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
                "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
                "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
                id?: string | undefined;
                labelId?: string | undefined;
            } & {
                "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            }, {
                controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                fieldIconColor: import("vue").ComputedRef<string | undefined>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
                "update:focused": (focused: boolean) => true;
                "update:modelValue": (value: any) => true;
            }, "$children" | "modelValue" | "update:modelValue" | "v-slot:append-inner" | "v-slot:clear" | "v-slot:default" | "v-slot:label" | "v-slot:loader" | "v-slot:prepend-inner" | "v-slots">, string, {
                style: import("vue").StyleValue;
                focused: boolean;
                rounded: string | number | boolean;
                tile: boolean;
                clearable: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                active: boolean;
                centerAffix: boolean;
                dirty: boolean;
                disabled: boolean;
                glow: boolean;
                error: boolean;
                flat: boolean;
                persistentClear: boolean;
                reverse: boolean;
                singleLine: boolean;
                variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
                details: boolean;
            }, {}, string, import("vue").SlotsType<Partial<{
                clear: (arg: import("../VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                "prepend-inner": (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                "append-inner": (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                label: (arg: import("../VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                default: (arg: import("../VField/VField.js").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
                beforeCreate?: ((() => void)[] | (() => void)) | undefined;
                created?: ((() => void)[] | (() => void)) | undefined;
                beforeMount?: ((() => void)[] | (() => void)) | undefined;
                mounted?: ((() => void)[] | (() => void)) | undefined;
                beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
                updated?: ((() => void)[] | (() => void)) | undefined;
                activated?: ((() => void)[] | (() => void)) | undefined;
                deactivated?: ((() => void)[] | (() => void)) | undefined;
                beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
                beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
                destroyed?: ((() => void)[] | (() => void)) | undefined;
                unmounted?: ((() => void)[] | (() => void)) | undefined;
                renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
                renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
                errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<{
            style: import("vue").StyleValue;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearable: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            active: boolean;
            centerAffix: boolean;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            persistentClear: boolean;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            details: boolean;
        }> & Omit<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            focused: boolean;
            tile: boolean;
            clearable: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            active: boolean;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            persistentClear: boolean;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            details: boolean;
        } & {
            theme?: string | undefined;
            class?: any;
            "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
            rounded?: string | number | boolean | undefined;
            loading?: string | boolean | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            bgColor?: string | undefined;
            centerAffix?: boolean | undefined;
            color?: string | undefined;
            baseColor?: string | undefined;
            iconColor?: string | boolean | undefined;
            label?: string | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
            id?: string | undefined;
            labelId?: string | undefined;
        } & {
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        }, "controlRef" | "fieldIconColor" | ("active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant")> & import("vue").ShallowUnwrapRef<{
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
            modelValue?: unknown;
            "onUpdate:modelValue"?: ((value: unknown) => void) | undefined;
        }, import("../VField/VField.js").VFieldSlots>, "$children" | "appendInnerIcon" | "baseColor" | "bgColor" | "class" | "color" | "iconColor" | "id" | "label" | "labelId" | "loading" | "modelValue" | "onClick:appendInner" | "onClick:clear" | "onClick:prependInner" | "onUpdate:focused" | "onUpdate:modelValue" | "prependInnerIcon" | "theme" | "v-slot:append-inner" | "v-slot:clear" | "v-slot:default" | "v-slot:label" | "v-slot:loader" | "v-slot:prepend-inner" | "v-slots" | ("active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant") | keyof import("vue").VNodeProps>, `$${any}`> & {
            _allExposed: {
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                validate: (silent?: boolean) => Promise<string[]>;
                isValid: import("vue").ComputedRef<boolean | null>;
                errorMessages: import("vue").ComputedRef<string[]>;
            } | {
                controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                fieldIconColor: import("vue").ComputedRef<string | undefined>;
            } | {};
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "click:control": (e: MouseEvent) => true;
            "mousedown:control": (e: MouseEvent) => true;
            "update:focused": (focused: boolean) => true;
            "update:modelValue": (val: string) => true;
        }, string, {
            style: import("vue").StyleValue;
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            clearable: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            active: boolean;
            centerAffix: boolean;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            persistentClear: boolean;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            autofocus: boolean;
            persistentPlaceholder: boolean;
            persistentCounter: boolean;
            type: string;
        }, {}, string, import("vue").SlotsType<Partial<{
            prepend: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            append: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            details: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            message: (arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            clear: (arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            "prepend-inner": (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            "append-inner": (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            label: (arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            default: (arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            counter: (arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: ((() => void)[] | (() => void)) | undefined;
            created?: ((() => void)[] | (() => void)) | undefined;
            beforeMount?: ((() => void)[] | (() => void)) | undefined;
            mounted?: ((() => void)[] | (() => void)) | undefined;
            beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
            updated?: ((() => void)[] | (() => void)) | undefined;
            activated?: ((() => void)[] | (() => void)) | undefined;
            deactivated?: ((() => void)[] | (() => void)) | undefined;
            beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
            beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
            destroyed?: ((() => void)[] | (() => void)) | undefined;
            unmounted?: ((() => void)[] | (() => void)) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<{
        style: import("vue").StyleValue;
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        messages: string | readonly string[];
        clearable: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        active: boolean;
        centerAffix: boolean;
        dirty: boolean;
        disabled: boolean;
        glow: boolean;
        error: boolean;
        flat: boolean;
        persistentClear: boolean;
        reverse: boolean;
        singleLine: boolean;
        variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
        autofocus: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        type: string;
    }> & Omit<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        density: import("../../composables/density.js").Density;
        tile: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        messages: string | readonly string[];
        clearable: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        active: boolean;
        dirty: boolean;
        disabled: boolean;
        glow: boolean;
        error: boolean;
        flat: boolean;
        persistentClear: boolean;
        reverse: boolean;
        singleLine: boolean;
        variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
        autofocus: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        type: string;
    } & {
        theme?: string | undefined;
        class?: any;
        "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
        name?: string | undefined;
        modelValue?: any;
        validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
        validationValue?: any;
        rounded?: string | number | boolean | undefined;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        loading?: string | boolean | undefined;
        id?: string | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        hideDetails?: "auto" | boolean | undefined;
        hint?: string | undefined;
        "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
        appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        bgColor?: string | undefined;
        centerAffix?: boolean | undefined;
        color?: string | undefined;
        baseColor?: string | undefined;
        iconColor?: string | boolean | undefined;
        label?: string | undefined;
        prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
        autocomplete?: string | undefined;
        counter?: string | number | boolean | undefined;
        counterValue?: number | ((value: any) => number) | undefined;
        prefix?: string | undefined;
        placeholder?: string | undefined;
        suffix?: string | undefined;
        role?: string | undefined;
        modelModifiers?: Record<string, boolean> | undefined;
    } & {
        $children?: {
            prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "prepend-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "append-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            default?: ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | undefined;
            counter?: ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            id: Readonly<import("vue").Ref<string, string>>;
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            prepend?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "prepend-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "append-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            default?: false | ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | undefined;
            counter?: false | ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:clear"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:counter"?: false | ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: {
            id: Readonly<import("vue").Ref<string, string>>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:message"?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
    } & {
        "onClick:control"?: ((e: MouseEvent) => any) | undefined;
        "onMousedown:control"?: ((e: MouseEvent) => any) | undefined;
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
    }, "ATTRIBUTE_NODE" | "CDATA_SECTION_NODE" | "COMMENT_NODE" | "DOCUMENT_FRAGMENT_NODE" | "DOCUMENT_NODE" | "DOCUMENT_POSITION_CONTAINED_BY" | "DOCUMENT_POSITION_CONTAINS" | "DOCUMENT_POSITION_DISCONNECTED" | "DOCUMENT_POSITION_FOLLOWING" | "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC" | "DOCUMENT_POSITION_PRECEDING" | "DOCUMENT_TYPE_NODE" | "ELEMENT_NODE" | "ENTITY_NODE" | "ENTITY_REFERENCE_NODE" | "NOTATION_NODE" | "PROCESSING_INSTRUCTION_NODE" | "TEXT_NODE" | "_" | "_allExposed" | "_clickOutside" | "_mutate" | "_observe" | "_onResize" | "_onScroll" | "_ripple" | "_touchHandlers" | "_transitionInitialStyles" | "accept" | "accessKey" | "accessKeyLabel" | "active" | "addEventListener" | "after" | "align" | "alt" | "animate" | "append" | "appendChild" | "ariaAtomic" | "ariaAutoComplete" | "ariaBrailleLabel" | "ariaBrailleRoleDescription" | "ariaBusy" | "ariaChecked" | "ariaColCount" | "ariaColIndex" | "ariaColIndexText" | "ariaColSpan" | "ariaCurrent" | "ariaDescription" | "ariaDisabled" | "ariaExpanded" | "ariaHasPopup" | "ariaHidden" | "ariaInvalid" | "ariaKeyShortcuts" | "ariaLabel" | "ariaLevel" | "ariaLive" | "ariaModal" | "ariaMultiLine" | "ariaMultiSelectable" | "ariaOrientation" | "ariaPlaceholder" | "ariaPosInSet" | "ariaPressed" | "ariaReadOnly" | "ariaRelevant" | "ariaRequired" | "ariaRoleDescription" | "ariaRowCount" | "ariaRowIndex" | "ariaRowIndexText" | "ariaRowSpan" | "ariaSelected" | "ariaSetSize" | "ariaSort" | "ariaValueMax" | "ariaValueMin" | "ariaValueNow" | "ariaValueText" | "assignedSlot" | "attachInternals" | "attachShadow" | "attributeStyleMap" | "attributes" | "autocapitalize" | "autocomplete" | "autofocus" | "baseURI" | "before" | "blur" | "capture" | "centerAffix" | "checkValidity" | "checkVisibility" | "checked" | "childElementCount" | "childNodes" | "children" | "classList" | "className" | "clearIcon" | "clearable" | "click" | "clientHeight" | "clientLeft" | "clientTop" | "clientWidth" | "cloneNode" | "closest" | "compareDocumentPosition" | "computedStyleMap" | "contains" | "contentEditable" | "controlRef" | "currentCSSZoom" | "dataset" | "defaultChecked" | "defaultValue" | "density" | "dir" | "dirName" | "dirty" | "disabled" | "dispatchEvent" | "draggable" | "enterKeyHint" | "error" | "errorMessages" | "fieldIconColor" | "files" | "firstChild" | "firstElementChild" | "flat" | "focus" | "focused" | "form" | "formAction" | "formEnctype" | "formMethod" | "formNoValidate" | "formTarget" | "getAnimations" | "getAttribute" | "getAttributeNS" | "getAttributeNames" | "getAttributeNode" | "getAttributeNodeNS" | "getBoundingClientRect" | "getClientRects" | "getElementsByClassName" | "getElementsByTagName" | "getElementsByTagNameNS" | "getHTML" | "getRootNode" | "glow" | "hasAttribute" | "hasAttributeNS" | "hasAttributes" | "hasChildNodes" | "hasPointerCapture" | "height" | "hidden" | "hidePopover" | "hideSpinButtons" | "id" | "indeterminate" | "inert" | "innerHTML" | "innerText" | "inputMode" | "insertAdjacentElement" | "insertAdjacentHTML" | "insertAdjacentText" | "insertBefore" | "isConnected" | "isContentEditable" | "isDefaultNamespace" | "isEqualNode" | "isSameNode" | "isValid" | "labels" | "lang" | "lastChild" | "lastElementChild" | "list" | "localName" | "lookupNamespaceURI" | "lookupPrefix" | "matches" | "max" | "maxErrors" | "maxLength" | "messages" | "min" | "minLength" | "multiple" | "name" | "namespaceURI" | "nextElementSibling" | "nextSibling" | "nodeName" | "nodeType" | "nodeValue" | "nonce" | "normalize" | "offsetHeight" | "offsetLeft" | "offsetParent" | "offsetTop" | "offsetWidth" | "onabort" | "onanimationcancel" | "onanimationend" | "onanimationiteration" | "onanimationstart" | "onauxclick" | "onbeforeinput" | "onbeforetoggle" | "onblur" | "oncancel" | "oncanplay" | "oncanplaythrough" | "onchange" | "onclick" | "onclose" | "oncontextlost" | "oncontextmenu" | "oncontextrestored" | "oncopy" | "oncuechange" | "oncut" | "ondblclick" | "ondrag" | "ondragend" | "ondragenter" | "ondragleave" | "ondragover" | "ondragstart" | "ondrop" | "ondurationchange" | "onemptied" | "onended" | "onerror" | "onfocus" | "onformdata" | "onfullscreenchange" | "onfullscreenerror" | "ongotpointercapture" | "oninput" | "oninvalid" | "onkeydown" | "onkeypress" | "onkeyup" | "onload" | "onloadeddata" | "onloadedmetadata" | "onloadstart" | "onlostpointercapture" | "onmousedown" | "onmouseenter" | "onmouseleave" | "onmousemove" | "onmouseout" | "onmouseover" | "onmouseup" | "onpaste" | "onpause" | "onplay" | "onplaying" | "onpointercancel" | "onpointerdown" | "onpointerenter" | "onpointerleave" | "onpointermove" | "onpointerout" | "onpointerover" | "onpointerup" | "onprogress" | "onratechange" | "onreset" | "onresize" | "onscroll" | "onscrollend" | "onsecuritypolicyviolation" | "onseeked" | "onseeking" | "onselect" | "onselectionchange" | "onselectstart" | "onslotchange" | "onstalled" | "onsubmit" | "onsuspend" | "ontimeupdate" | "ontoggle" | "ontouchcancel" | "ontouchend" | "ontouchmove" | "ontouchstart" | "ontransitioncancel" | "ontransitionend" | "ontransitionrun" | "ontransitionstart" | "onvolumechange" | "onwaiting" | "onwebkitanimationend" | "onwebkitanimationiteration" | "onwebkitanimationstart" | "onwebkittransitionend" | "onwheel" | "outerHTML" | "outerText" | "ownerDocument" | "parentElement" | "parentNode" | "part" | "pattern" | "persistentClear" | "persistentCounter" | "persistentHint" | "persistentPlaceholder" | "placeholder" | "popover" | "popoverTargetAction" | "popoverTargetElement" | "prefix" | "prepend" | "previousElementSibling" | "previousSibling" | "querySelector" | "querySelectorAll" | "readOnly" | "readonly" | "releasePointerCapture" | "remove" | "removeAttribute" | "removeAttributeNS" | "removeAttributeNode" | "removeChild" | "removeEventListener" | "replaceChild" | "replaceChildren" | "replaceWith" | "reportValidity" | "requestFullscreen" | "requestPointerLock" | "required" | "reset" | "resetValidation" | "reverse" | "role" | "rounded" | "rules" | "scroll" | "scrollBy" | "scrollHeight" | "scrollIntoView" | "scrollLeft" | "scrollTo" | "scrollTop" | "scrollWidth" | "select" | "selectionDirection" | "selectionEnd" | "selectionStart" | "setAttribute" | "setAttributeNS" | "setAttributeNode" | "setAttributeNodeNS" | "setCustomValidity" | "setHTMLUnsafe" | "setPointerCapture" | "setRangeText" | "setSelectionRange" | "shadowRoot" | "showPicker" | "showPopover" | "singleLine" | "size" | "slot" | "spellcheck" | "src" | "step" | "stepDown" | "stepUp" | "style" | "tabIndex" | "tagName" | "textContent" | "tile" | "title" | "toggleAttribute" | "togglePopover" | "translate" | "type" | "useMap" | "validate" | "validationMessage" | "validity" | "value" | "valueAsDate" | "valueAsNumber" | "variant" | "webkitEntries" | "webkitMatchesSelector" | "webkitdirectory" | "width" | "willValidate" | "writingSuggestions"> & import("vue").ShallowUnwrapRef<HTMLInputElement & Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            style: import("vue").StyleValue;
            focused: boolean;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            focused: boolean;
            "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            name?: string | undefined;
            label?: string | undefined;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
            validationValue?: any;
            density: import("../../composables/density.js").Density;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            id?: string | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            baseColor?: string | undefined;
            centerAffix: boolean;
            color?: string | undefined;
            glow: boolean;
            iconColor?: string | boolean | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            hideDetails?: "auto" | boolean | undefined;
            hideSpinButtons: boolean;
            hint?: string | undefined;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
            "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $host: Element | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            focused: boolean;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
        } & {
            theme?: string | undefined;
            class?: any;
            "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
            name?: string | undefined;
            label?: string | undefined;
            validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
            validationValue?: any;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            id?: string | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            baseColor?: string | undefined;
            color?: string | undefined;
            iconColor?: string | boolean | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            hideDetails?: "auto" | boolean | undefined;
            hint?: string | undefined;
            "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
        } & {}, {
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
            "update:modelValue": (value: any) => true;
        }, "$children" | "modelValue" | "update:modelValue" | "v-slot:append" | "v-slot:default" | "v-slot:details" | "v-slot:message" | "v-slot:prepend" | "v-slots">, string, {
            style: import("vue").StyleValue;
            focused: boolean;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
        }, {}, string, import("vue").SlotsType<Partial<{
            default: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            prepend: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            append: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            details: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            message: (arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: ((() => void)[] | (() => void)) | undefined;
            created?: ((() => void)[] | (() => void)) | undefined;
            beforeMount?: ((() => void)[] | (() => void)) | undefined;
            mounted?: ((() => void)[] | (() => void)) | undefined;
            beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
            updated?: ((() => void)[] | (() => void)) | undefined;
            activated?: ((() => void)[] | (() => void)) | undefined;
            deactivated?: ((() => void)[] | (() => void)) | undefined;
            beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
            beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
            destroyed?: ((() => void)[] | (() => void)) | undefined;
            unmounted?: ((() => void)[] | (() => void)) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<{
        style: import("vue").StyleValue;
        focused: boolean;
        disabled: boolean | null;
        error: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        density: import("../../composables/density.js").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        messages: string | readonly string[];
        direction: "horizontal" | "vertical";
    }> & Omit<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        focused: boolean;
        disabled: boolean | null;
        error: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        density: import("../../composables/density.js").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        messages: string | readonly string[];
        direction: "horizontal" | "vertical";
    } & {
        theme?: string | undefined;
        class?: any;
        "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
        name?: string | undefined;
        label?: string | undefined;
        validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
        validationValue?: any;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        id?: string | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        baseColor?: string | undefined;
        color?: string | undefined;
        iconColor?: string | boolean | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        hideDetails?: "auto" | boolean | undefined;
        hint?: string | undefined;
        "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
    } & {}, "isValid" | "reset" | "resetValidation" | "validate" | ("centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style")> & import("vue").ShallowUnwrapRef<{
        reset: () => Promise<void>;
        resetValidation: () => Promise<void>;
        validate: (silent?: boolean) => Promise<string[]>;
        isValid: import("vue").ComputedRef<boolean | null>;
        errorMessages: import("vue").ComputedRef<string[]>;
    }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
        modelValue?: unknown;
        "onUpdate:modelValue"?: ((value: unknown) => void) | undefined;
    }, import("../VInput/VInput.js").VInputSlots>, "$children" | "appendIcon" | "baseColor" | "class" | "color" | "hideDetails" | "hint" | "iconColor" | "id" | "label" | "maxWidth" | "minWidth" | "modelValue" | "name" | "onClick:append" | "onClick:prepend" | "onUpdate:focused" | "onUpdate:modelValue" | "prependIcon" | "theme" | "v-slot:append" | "v-slot:default" | "v-slot:details" | "v-slot:message" | "v-slot:prepend" | "v-slots" | "validateOn" | "validationValue" | "width" | ("centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style") | keyof import("vue").VNodeProps>, `$${any}`> & Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            style: import("vue").StyleValue;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearable: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            active: boolean;
            centerAffix: boolean;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            persistentClear: boolean;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            details: boolean;
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            focused: boolean;
            "onUpdate:focused"?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
            rounded?: string | number | boolean | undefined;
            tile: boolean;
            loading?: string | boolean | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            bgColor?: string | undefined;
            clearable: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            active: boolean;
            centerAffix?: boolean | undefined;
            color?: string | undefined;
            baseColor?: string | undefined;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            iconColor?: string | boolean | undefined;
            label?: string | undefined;
            persistentClear: boolean;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
            id?: string | undefined;
            details: boolean;
            labelId?: string | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            "prepend-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            "append-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            default?: ((arg: import("../VField/VField.js").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $host: Element | null;
        $emit: (event: "update:focused", focused: boolean) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            focused: boolean;
            tile: boolean;
            clearable: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            active: boolean;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            persistentClear: boolean;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            details: boolean;
        } & {
            theme?: string | undefined;
            class?: any;
            "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
            rounded?: string | number | boolean | undefined;
            loading?: string | boolean | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            bgColor?: string | undefined;
            centerAffix?: boolean | undefined;
            color?: string | undefined;
            baseColor?: string | undefined;
            iconColor?: string | boolean | undefined;
            label?: string | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
            id?: string | undefined;
            labelId?: string | undefined;
        } & {
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        }, {
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
            "update:focused": (focused: boolean) => true;
            "update:modelValue": (value: any) => true;
        }, "$children" | "modelValue" | "update:modelValue" | "v-slot:append-inner" | "v-slot:clear" | "v-slot:default" | "v-slot:label" | "v-slot:loader" | "v-slot:prepend-inner" | "v-slots">, string, {
            style: import("vue").StyleValue;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearable: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            active: boolean;
            centerAffix: boolean;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            persistentClear: boolean;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            details: boolean;
        }, {}, string, import("vue").SlotsType<Partial<{
            clear: (arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            "prepend-inner": (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            "append-inner": (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            label: (arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            default: (arg: import("../VField/VField.js").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: ((() => void)[] | (() => void)) | undefined;
            created?: ((() => void)[] | (() => void)) | undefined;
            beforeMount?: ((() => void)[] | (() => void)) | undefined;
            mounted?: ((() => void)[] | (() => void)) | undefined;
            beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
            updated?: ((() => void)[] | (() => void)) | undefined;
            activated?: ((() => void)[] | (() => void)) | undefined;
            deactivated?: ((() => void)[] | (() => void)) | undefined;
            beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
            beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
            destroyed?: ((() => void)[] | (() => void)) | undefined;
            unmounted?: ((() => void)[] | (() => void)) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<{
        style: import("vue").StyleValue;
        focused: boolean;
        rounded: string | number | boolean;
        tile: boolean;
        clearable: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        active: boolean;
        centerAffix: boolean;
        dirty: boolean;
        disabled: boolean;
        glow: boolean;
        error: boolean;
        flat: boolean;
        persistentClear: boolean;
        reverse: boolean;
        singleLine: boolean;
        variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
        details: boolean;
    }> & Omit<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        focused: boolean;
        tile: boolean;
        clearable: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        active: boolean;
        dirty: boolean;
        disabled: boolean;
        glow: boolean;
        error: boolean;
        flat: boolean;
        persistentClear: boolean;
        reverse: boolean;
        singleLine: boolean;
        variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
        details: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
        rounded?: string | number | boolean | undefined;
        loading?: string | boolean | undefined;
        appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        bgColor?: string | undefined;
        centerAffix?: boolean | undefined;
        color?: string | undefined;
        baseColor?: string | undefined;
        iconColor?: string | boolean | undefined;
        label?: string | undefined;
        prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
        id?: string | undefined;
        labelId?: string | undefined;
    } & {
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
    }, "controlRef" | "fieldIconColor" | ("active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant")> & import("vue").ShallowUnwrapRef<{
        controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        fieldIconColor: import("vue").ComputedRef<string | undefined>;
    }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
        modelValue?: unknown;
        "onUpdate:modelValue"?: ((value: unknown) => void) | undefined;
    }, import("../VField/VField.js").VFieldSlots>, "$children" | "appendInnerIcon" | "baseColor" | "bgColor" | "class" | "color" | "iconColor" | "id" | "label" | "labelId" | "loading" | "modelValue" | "onClick:appendInner" | "onClick:clear" | "onClick:prependInner" | "onUpdate:focused" | "onUpdate:modelValue" | "prependInnerIcon" | "theme" | "v-slot:append-inner" | "v-slot:clear" | "v-slot:default" | "v-slot:label" | "v-slot:loader" | "v-slot:prepend-inner" | "v-slots" | ("active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant") | keyof import("vue").VNodeProps>, `$${any}`> & {
        _allExposed: {
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        } | {
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        } | {};
    }> & {} & import("vue").ComponentCustomProperties & {}, "$children" | "appendIcon" | "appendInnerIcon" | "autocomplete" | "baseColor" | "bgColor" | "class" | "color" | "counter" | "counterValue" | "hideDetails" | "hint" | "iconColor" | "id" | "label" | "loading" | "maxWidth" | "minWidth" | "modelModifiers" | "modelValue" | "name" | "onClick:append" | "onClick:appendInner" | "onClick:clear" | "onClick:control" | "onClick:prepend" | "onClick:prependInner" | "onMousedown:control" | "onUpdate:focused" | "onUpdate:modelValue" | "placeholder" | "prefix" | "prependIcon" | "prependInnerIcon" | "role" | "suffix" | "theme" | "v-slot:append" | "v-slot:append-inner" | "v-slot:clear" | "v-slot:counter" | "v-slot:default" | "v-slot:details" | "v-slot:label" | "v-slot:loader" | "v-slot:message" | "v-slot:prepend" | "v-slot:prepend-inner" | "v-slots" | "validateOn" | "validationValue" | "width" | ("active" | "autofocus" | "centerAffix" | "clearIcon" | "clearable" | "density" | "dirty" | "disabled" | "error" | "errorMessages" | "flat" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentClear" | "persistentCounter" | "persistentHint" | "persistentPlaceholder" | "readonly" | "reverse" | "rounded" | "rules" | "singleLine" | "style" | "tile" | "type" | "variant") | keyof import("vue").VNodeProps>, `$${any}`> & {
        _allExposed: {} | (HTMLInputElement & Omit<Omit<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                style: import("vue").StyleValue;
                focused: boolean;
                disabled: boolean | null;
                error: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                readonly: boolean | null;
                rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
                messages: string | readonly string[];
                direction: "horizontal" | "vertical";
            }> & Omit<{
                theme?: string | undefined;
                class?: any;
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                focused: boolean;
                "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
                disabled: boolean | null;
                error: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                name?: string | undefined;
                label?: string | undefined;
                readonly: boolean | null;
                rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
                validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
                validationValue?: any;
                density: import("../../composables/density.js").Density;
                maxWidth?: string | number | undefined;
                minWidth?: string | number | undefined;
                width?: string | number | undefined;
                id?: string | undefined;
                appendIcon?: import("../../composables/icons.js").IconValue | undefined;
                baseColor?: string | undefined;
                centerAffix: boolean;
                color?: string | undefined;
                glow: boolean;
                iconColor?: string | boolean | undefined;
                prependIcon?: import("../../composables/icons.js").IconValue | undefined;
                hideDetails?: "auto" | boolean | undefined;
                hideSpinButtons: boolean;
                hint?: string | undefined;
                persistentHint: boolean;
                messages: string | readonly string[];
                direction: "horizontal" | "vertical";
                "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
                "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                default?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $host: Element | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<{
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                focused: boolean;
                disabled: boolean | null;
                error: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                readonly: boolean | null;
                rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
                messages: string | readonly string[];
                direction: "horizontal" | "vertical";
            } & {
                theme?: string | undefined;
                class?: any;
                "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
                name?: string | undefined;
                label?: string | undefined;
                validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
                validationValue?: any;
                maxWidth?: string | number | undefined;
                minWidth?: string | number | undefined;
                width?: string | number | undefined;
                id?: string | undefined;
                appendIcon?: import("../../composables/icons.js").IconValue | undefined;
                baseColor?: string | undefined;
                color?: string | undefined;
                iconColor?: string | boolean | undefined;
                prependIcon?: import("../../composables/icons.js").IconValue | undefined;
                hideDetails?: "auto" | boolean | undefined;
                hint?: string | undefined;
                "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
                "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
            } & {}, {
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                validate: (silent?: boolean) => Promise<string[]>;
                isValid: import("vue").ComputedRef<boolean | null>;
                errorMessages: import("vue").ComputedRef<string[]>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
                "update:modelValue": (value: any) => true;
            }, "$children" | "modelValue" | "update:modelValue" | "v-slot:append" | "v-slot:default" | "v-slot:details" | "v-slot:message" | "v-slot:prepend" | "v-slots">, string, {
                style: import("vue").StyleValue;
                focused: boolean;
                disabled: boolean | null;
                error: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                readonly: boolean | null;
                rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
                messages: string | readonly string[];
                direction: "horizontal" | "vertical";
            }, {}, string, import("vue").SlotsType<Partial<{
                default: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                prepend: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                append: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                details: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                message: (arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
                beforeCreate?: ((() => void)[] | (() => void)) | undefined;
                created?: ((() => void)[] | (() => void)) | undefined;
                beforeMount?: ((() => void)[] | (() => void)) | undefined;
                mounted?: ((() => void)[] | (() => void)) | undefined;
                beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
                updated?: ((() => void)[] | (() => void)) | undefined;
                activated?: ((() => void)[] | (() => void)) | undefined;
                deactivated?: ((() => void)[] | (() => void)) | undefined;
                beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
                beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
                destroyed?: ((() => void)[] | (() => void)) | undefined;
                unmounted?: ((() => void)[] | (() => void)) | undefined;
                renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
                renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
                errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<{
            style: import("vue").StyleValue;
            focused: boolean;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
        }> & Omit<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            focused: boolean;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
        } & {
            theme?: string | undefined;
            class?: any;
            "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
            name?: string | undefined;
            label?: string | undefined;
            validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
            validationValue?: any;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            id?: string | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            baseColor?: string | undefined;
            color?: string | undefined;
            iconColor?: string | boolean | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            hideDetails?: "auto" | boolean | undefined;
            hint?: string | undefined;
            "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
        } & {}, "isValid" | "reset" | "resetValidation" | "validate" | ("centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style")> & import("vue").ShallowUnwrapRef<{
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
            modelValue?: unknown;
            "onUpdate:modelValue"?: ((value: unknown) => void) | undefined;
        }, import("../VInput/VInput.js").VInputSlots>, "$children" | "appendIcon" | "baseColor" | "class" | "color" | "hideDetails" | "hint" | "iconColor" | "id" | "label" | "maxWidth" | "minWidth" | "modelValue" | "name" | "onClick:append" | "onClick:prepend" | "onUpdate:focused" | "onUpdate:modelValue" | "prependIcon" | "theme" | "v-slot:append" | "v-slot:default" | "v-slot:details" | "v-slot:message" | "v-slot:prepend" | "v-slots" | "validateOn" | "validationValue" | "width" | ("centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style") | keyof import("vue").VNodeProps>, `$${any}`> & Omit<Omit<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                style: import("vue").StyleValue;
                focused: boolean;
                rounded: string | number | boolean;
                tile: boolean;
                clearable: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                active: boolean;
                centerAffix: boolean;
                dirty: boolean;
                disabled: boolean;
                glow: boolean;
                error: boolean;
                flat: boolean;
                persistentClear: boolean;
                reverse: boolean;
                singleLine: boolean;
                variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
                details: boolean;
            }> & Omit<{
                theme?: string | undefined;
                class?: any;
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                focused: boolean;
                "onUpdate:focused"?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
                rounded?: string | number | boolean | undefined;
                tile: boolean;
                loading?: string | boolean | undefined;
                appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                bgColor?: string | undefined;
                clearable: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                active: boolean;
                centerAffix?: boolean | undefined;
                color?: string | undefined;
                baseColor?: string | undefined;
                dirty: boolean;
                disabled: boolean;
                glow: boolean;
                error: boolean;
                flat: boolean;
                iconColor?: string | boolean | undefined;
                label?: string | undefined;
                persistentClear: boolean;
                prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                reverse: boolean;
                singleLine: boolean;
                variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
                "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
                "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
                "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
                id?: string | undefined;
                details: boolean;
                labelId?: string | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                "prepend-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                "append-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                default?: ((arg: import("../VField/VField.js").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $host: Element | null;
            $emit: (event: "update:focused", focused: boolean) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<{
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                focused: boolean;
                tile: boolean;
                clearable: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                active: boolean;
                dirty: boolean;
                disabled: boolean;
                glow: boolean;
                error: boolean;
                flat: boolean;
                persistentClear: boolean;
                reverse: boolean;
                singleLine: boolean;
                variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
                details: boolean;
            } & {
                theme?: string | undefined;
                class?: any;
                "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
                rounded?: string | number | boolean | undefined;
                loading?: string | boolean | undefined;
                appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                bgColor?: string | undefined;
                centerAffix?: boolean | undefined;
                color?: string | undefined;
                baseColor?: string | undefined;
                iconColor?: string | boolean | undefined;
                label?: string | undefined;
                prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
                "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
                "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
                id?: string | undefined;
                labelId?: string | undefined;
            } & {
                "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            }, {
                controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                fieldIconColor: import("vue").ComputedRef<string | undefined>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
                "update:focused": (focused: boolean) => true;
                "update:modelValue": (value: any) => true;
            }, "$children" | "modelValue" | "update:modelValue" | "v-slot:append-inner" | "v-slot:clear" | "v-slot:default" | "v-slot:label" | "v-slot:loader" | "v-slot:prepend-inner" | "v-slots">, string, {
                style: import("vue").StyleValue;
                focused: boolean;
                rounded: string | number | boolean;
                tile: boolean;
                clearable: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                active: boolean;
                centerAffix: boolean;
                dirty: boolean;
                disabled: boolean;
                glow: boolean;
                error: boolean;
                flat: boolean;
                persistentClear: boolean;
                reverse: boolean;
                singleLine: boolean;
                variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
                details: boolean;
            }, {}, string, import("vue").SlotsType<Partial<{
                clear: (arg: import("../VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                "prepend-inner": (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                "append-inner": (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                label: (arg: import("../VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                default: (arg: import("../VField/VField.js").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
                beforeCreate?: ((() => void)[] | (() => void)) | undefined;
                created?: ((() => void)[] | (() => void)) | undefined;
                beforeMount?: ((() => void)[] | (() => void)) | undefined;
                mounted?: ((() => void)[] | (() => void)) | undefined;
                beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
                updated?: ((() => void)[] | (() => void)) | undefined;
                activated?: ((() => void)[] | (() => void)) | undefined;
                deactivated?: ((() => void)[] | (() => void)) | undefined;
                beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
                beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
                destroyed?: ((() => void)[] | (() => void)) | undefined;
                unmounted?: ((() => void)[] | (() => void)) | undefined;
                renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
                renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
                errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<{
            style: import("vue").StyleValue;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearable: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            active: boolean;
            centerAffix: boolean;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            persistentClear: boolean;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            details: boolean;
        }> & Omit<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            focused: boolean;
            tile: boolean;
            clearable: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            active: boolean;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            persistentClear: boolean;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            details: boolean;
        } & {
            theme?: string | undefined;
            class?: any;
            "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
            rounded?: string | number | boolean | undefined;
            loading?: string | boolean | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            bgColor?: string | undefined;
            centerAffix?: boolean | undefined;
            color?: string | undefined;
            baseColor?: string | undefined;
            iconColor?: string | boolean | undefined;
            label?: string | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
            id?: string | undefined;
            labelId?: string | undefined;
        } & {
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        }, "controlRef" | "fieldIconColor" | ("active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant")> & import("vue").ShallowUnwrapRef<{
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
            modelValue?: unknown;
            "onUpdate:modelValue"?: ((value: unknown) => void) | undefined;
        }, import("../VField/VField.js").VFieldSlots>, "$children" | "appendInnerIcon" | "baseColor" | "bgColor" | "class" | "color" | "iconColor" | "id" | "label" | "labelId" | "loading" | "modelValue" | "onClick:appendInner" | "onClick:clear" | "onClick:prependInner" | "onUpdate:focused" | "onUpdate:modelValue" | "prependInnerIcon" | "theme" | "v-slot:append-inner" | "v-slot:clear" | "v-slot:default" | "v-slot:label" | "v-slot:loader" | "v-slot:prepend-inner" | "v-slots" | ("active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant") | keyof import("vue").VNodeProps>, `$${any}`> & {
            _allExposed: {
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                validate: (silent?: boolean) => Promise<string[]>;
                isValid: import("vue").ComputedRef<boolean | null>;
                errorMessages: import("vue").ComputedRef<string[]>;
            } | {
                controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                fieldIconColor: import("vue").ComputedRef<string | undefined>;
            } | {};
        });
    }, {}, {}, {}, {
        active: boolean;
        disabled: boolean;
        showHint: boolean;
        readonly: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    active: boolean;
    disabled: boolean;
    showHint: boolean;
    readonly: boolean;
} & {
    color?: string | undefined;
    label?: string | undefined;
    modelValue?: string | number | null | undefined;
    error?: string | undefined;
} & {
    $children?: {
        default?: (() => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((v: string | null) => any) | undefined;
}, Omit<Omit<{
    $: import("vue").ComponentInternalInstance;
    $data: {};
    $props: Partial<{
        style: import("vue").StyleValue;
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        messages: string | readonly string[];
        clearable: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        active: boolean;
        centerAffix: boolean;
        dirty: boolean;
        disabled: boolean;
        glow: boolean;
        error: boolean;
        flat: boolean;
        persistentClear: boolean;
        reverse: boolean;
        singleLine: boolean;
        variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
        autofocus: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        type: string;
    }> & Omit<{
        theme?: string | undefined;
        class?: any;
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        $children?: {
            prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "prepend-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "append-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            default?: ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | undefined;
            counter?: ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            id: Readonly<import("vue").Ref<string, string>>;
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            prepend?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "prepend-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "append-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            default?: false | ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | undefined;
            counter?: false | ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
        focused: boolean;
        "onUpdate:focused"?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        name?: string | undefined;
        readonly: boolean | null;
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        modelValue?: any;
        validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
        validationValue?: any;
        density: import("../../composables/density.js").Density;
        rounded?: string | number | boolean | undefined;
        tile: boolean;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        loading?: string | boolean | undefined;
        id?: string | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        hideDetails?: "auto" | boolean | undefined;
        hideSpinButtons: boolean;
        hint?: string | undefined;
        persistentHint: boolean;
        messages: string | readonly string[];
        "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
        appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        bgColor?: string | undefined;
        clearable: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        active: boolean;
        centerAffix?: boolean | undefined;
        color?: string | undefined;
        baseColor?: string | undefined;
        dirty: boolean;
        disabled: boolean;
        glow: boolean;
        error: boolean;
        flat: boolean;
        iconColor?: string | boolean | undefined;
        label?: string | undefined;
        persistentClear: boolean;
        prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        reverse: boolean;
        singleLine: boolean;
        variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
        "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
        autocomplete?: string | undefined;
        autofocus: boolean;
        counter?: string | number | boolean | undefined;
        counterValue?: number | ((value: any) => number) | undefined;
        prefix?: string | undefined;
        placeholder?: string | undefined;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        suffix?: string | undefined;
        role?: string | undefined;
        type: string;
        modelModifiers?: Record<string, boolean> | undefined;
        "onClick:control"?: ((e: MouseEvent) => any) | undefined;
        "onMousedown:control"?: ((e: MouseEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
        "v-slot:append"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:clear"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:counter"?: false | ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: {
            id: Readonly<import("vue").Ref<string, string>>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:message"?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "active" | "autofocus" | "centerAffix" | "clearIcon" | "clearable" | "density" | "dirty" | "disabled" | "error" | "errorMessages" | "flat" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentClear" | "persistentCounter" | "persistentHint" | "persistentPlaceholder" | "readonly" | "reverse" | "rounded" | "rules" | "singleLine" | "style" | "tile" | "type" | "variant">;
    $attrs: {
        [x: string]: unknown;
    };
    $refs: {
        [x: string]: unknown;
    };
    $slots: Readonly<{
        prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        "prepend-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        "append-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        default?: ((arg: {
            id: Readonly<import("vue").Ref<string, string>>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        counter?: ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
    }>;
    $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
    $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
    $host: Element | null;
    $emit: ((event: "click:control", e: MouseEvent) => void) & ((event: "mousedown:control", e: MouseEvent) => void) & ((event: "update:focused", focused: boolean) => void) & ((event: "update:modelValue", val: string) => void);
    $el: any;
    $options: import("vue").ComponentOptionsBase<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        density: import("../../composables/density.js").Density;
        tile: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        messages: string | readonly string[];
        clearable: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        active: boolean;
        dirty: boolean;
        disabled: boolean;
        glow: boolean;
        error: boolean;
        flat: boolean;
        persistentClear: boolean;
        reverse: boolean;
        singleLine: boolean;
        variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
        autofocus: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        type: string;
    } & {
        theme?: string | undefined;
        class?: any;
        "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
        name?: string | undefined;
        modelValue?: any;
        validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
        validationValue?: any;
        rounded?: string | number | boolean | undefined;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        loading?: string | boolean | undefined;
        id?: string | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        hideDetails?: "auto" | boolean | undefined;
        hint?: string | undefined;
        "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
        appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        bgColor?: string | undefined;
        centerAffix?: boolean | undefined;
        color?: string | undefined;
        baseColor?: string | undefined;
        iconColor?: string | boolean | undefined;
        label?: string | undefined;
        prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
        autocomplete?: string | undefined;
        counter?: string | number | boolean | undefined;
        counterValue?: number | ((value: any) => number) | undefined;
        prefix?: string | undefined;
        placeholder?: string | undefined;
        suffix?: string | undefined;
        role?: string | undefined;
        modelModifiers?: Record<string, boolean> | undefined;
    } & {
        $children?: {
            prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "prepend-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "append-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            default?: ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | undefined;
            counter?: ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            id: Readonly<import("vue").Ref<string, string>>;
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            prepend?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "prepend-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "append-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            default?: false | ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | undefined;
            counter?: false | ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:clear"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:counter"?: false | ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: {
            id: Readonly<import("vue").Ref<string, string>>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:message"?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
    } & {
        "onClick:control"?: ((e: MouseEvent) => any) | undefined;
        "onMousedown:control"?: ((e: MouseEvent) => any) | undefined;
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
    }, HTMLInputElement & Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            style: import("vue").StyleValue;
            focused: boolean;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            focused: boolean;
            "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            name?: string | undefined;
            label?: string | undefined;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
            validationValue?: any;
            density: import("../../composables/density.js").Density;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            id?: string | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            baseColor?: string | undefined;
            centerAffix: boolean;
            color?: string | undefined;
            glow: boolean;
            iconColor?: string | boolean | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            hideDetails?: "auto" | boolean | undefined;
            hideSpinButtons: boolean;
            hint?: string | undefined;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
            "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $host: Element | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            focused: boolean;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
        } & {
            theme?: string | undefined;
            class?: any;
            "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
            name?: string | undefined;
            label?: string | undefined;
            validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
            validationValue?: any;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            id?: string | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            baseColor?: string | undefined;
            color?: string | undefined;
            iconColor?: string | boolean | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            hideDetails?: "auto" | boolean | undefined;
            hint?: string | undefined;
            "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
        } & {}, {
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
            "update:modelValue": (value: any) => true;
        }, "$children" | "modelValue" | "update:modelValue" | "v-slot:append" | "v-slot:default" | "v-slot:details" | "v-slot:message" | "v-slot:prepend" | "v-slots">, string, {
            style: import("vue").StyleValue;
            focused: boolean;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
        }, {}, string, import("vue").SlotsType<Partial<{
            default: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            prepend: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            append: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            details: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            message: (arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: ((() => void)[] | (() => void)) | undefined;
            created?: ((() => void)[] | (() => void)) | undefined;
            beforeMount?: ((() => void)[] | (() => void)) | undefined;
            mounted?: ((() => void)[] | (() => void)) | undefined;
            beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
            updated?: ((() => void)[] | (() => void)) | undefined;
            activated?: ((() => void)[] | (() => void)) | undefined;
            deactivated?: ((() => void)[] | (() => void)) | undefined;
            beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
            beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
            destroyed?: ((() => void)[] | (() => void)) | undefined;
            unmounted?: ((() => void)[] | (() => void)) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<{
        style: import("vue").StyleValue;
        focused: boolean;
        disabled: boolean | null;
        error: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        density: import("../../composables/density.js").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        messages: string | readonly string[];
        direction: "horizontal" | "vertical";
    }> & Omit<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        focused: boolean;
        disabled: boolean | null;
        error: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        density: import("../../composables/density.js").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        messages: string | readonly string[];
        direction: "horizontal" | "vertical";
    } & {
        theme?: string | undefined;
        class?: any;
        "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
        name?: string | undefined;
        label?: string | undefined;
        validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
        validationValue?: any;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        id?: string | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        baseColor?: string | undefined;
        color?: string | undefined;
        iconColor?: string | boolean | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        hideDetails?: "auto" | boolean | undefined;
        hint?: string | undefined;
        "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
    } & {}, "isValid" | "reset" | "resetValidation" | "validate" | ("centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style")> & import("vue").ShallowUnwrapRef<{
        reset: () => Promise<void>;
        resetValidation: () => Promise<void>;
        validate: (silent?: boolean) => Promise<string[]>;
        isValid: import("vue").ComputedRef<boolean | null>;
        errorMessages: import("vue").ComputedRef<string[]>;
    }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
        modelValue?: unknown;
        "onUpdate:modelValue"?: ((value: unknown) => void) | undefined;
    }, import("../VInput/VInput.js").VInputSlots>, "$children" | "appendIcon" | "baseColor" | "class" | "color" | "hideDetails" | "hint" | "iconColor" | "id" | "label" | "maxWidth" | "minWidth" | "modelValue" | "name" | "onClick:append" | "onClick:prepend" | "onUpdate:focused" | "onUpdate:modelValue" | "prependIcon" | "theme" | "v-slot:append" | "v-slot:default" | "v-slot:details" | "v-slot:message" | "v-slot:prepend" | "v-slots" | "validateOn" | "validationValue" | "width" | ("centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style") | keyof import("vue").VNodeProps>, `$${any}`> & Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            style: import("vue").StyleValue;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearable: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            active: boolean;
            centerAffix: boolean;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            persistentClear: boolean;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            details: boolean;
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            focused: boolean;
            "onUpdate:focused"?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
            rounded?: string | number | boolean | undefined;
            tile: boolean;
            loading?: string | boolean | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            bgColor?: string | undefined;
            clearable: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            active: boolean;
            centerAffix?: boolean | undefined;
            color?: string | undefined;
            baseColor?: string | undefined;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            iconColor?: string | boolean | undefined;
            label?: string | undefined;
            persistentClear: boolean;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
            id?: string | undefined;
            details: boolean;
            labelId?: string | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            "prepend-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            "append-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            default?: ((arg: import("../VField/VField.js").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $host: Element | null;
        $emit: (event: "update:focused", focused: boolean) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            focused: boolean;
            tile: boolean;
            clearable: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            active: boolean;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            persistentClear: boolean;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            details: boolean;
        } & {
            theme?: string | undefined;
            class?: any;
            "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
            rounded?: string | number | boolean | undefined;
            loading?: string | boolean | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            bgColor?: string | undefined;
            centerAffix?: boolean | undefined;
            color?: string | undefined;
            baseColor?: string | undefined;
            iconColor?: string | boolean | undefined;
            label?: string | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
            id?: string | undefined;
            labelId?: string | undefined;
        } & {
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        }, {
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
            "update:focused": (focused: boolean) => true;
            "update:modelValue": (value: any) => true;
        }, "$children" | "modelValue" | "update:modelValue" | "v-slot:append-inner" | "v-slot:clear" | "v-slot:default" | "v-slot:label" | "v-slot:loader" | "v-slot:prepend-inner" | "v-slots">, string, {
            style: import("vue").StyleValue;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearable: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            active: boolean;
            centerAffix: boolean;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            persistentClear: boolean;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            details: boolean;
        }, {}, string, import("vue").SlotsType<Partial<{
            clear: (arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            "prepend-inner": (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            "append-inner": (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            label: (arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            default: (arg: import("../VField/VField.js").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: ((() => void)[] | (() => void)) | undefined;
            created?: ((() => void)[] | (() => void)) | undefined;
            beforeMount?: ((() => void)[] | (() => void)) | undefined;
            mounted?: ((() => void)[] | (() => void)) | undefined;
            beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
            updated?: ((() => void)[] | (() => void)) | undefined;
            activated?: ((() => void)[] | (() => void)) | undefined;
            deactivated?: ((() => void)[] | (() => void)) | undefined;
            beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
            beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
            destroyed?: ((() => void)[] | (() => void)) | undefined;
            unmounted?: ((() => void)[] | (() => void)) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<{
        style: import("vue").StyleValue;
        focused: boolean;
        rounded: string | number | boolean;
        tile: boolean;
        clearable: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        active: boolean;
        centerAffix: boolean;
        dirty: boolean;
        disabled: boolean;
        glow: boolean;
        error: boolean;
        flat: boolean;
        persistentClear: boolean;
        reverse: boolean;
        singleLine: boolean;
        variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
        details: boolean;
    }> & Omit<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        focused: boolean;
        tile: boolean;
        clearable: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        active: boolean;
        dirty: boolean;
        disabled: boolean;
        glow: boolean;
        error: boolean;
        flat: boolean;
        persistentClear: boolean;
        reverse: boolean;
        singleLine: boolean;
        variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
        details: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
        rounded?: string | number | boolean | undefined;
        loading?: string | boolean | undefined;
        appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        bgColor?: string | undefined;
        centerAffix?: boolean | undefined;
        color?: string | undefined;
        baseColor?: string | undefined;
        iconColor?: string | boolean | undefined;
        label?: string | undefined;
        prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
        id?: string | undefined;
        labelId?: string | undefined;
    } & {
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
    }, "controlRef" | "fieldIconColor" | ("active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant")> & import("vue").ShallowUnwrapRef<{
        controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        fieldIconColor: import("vue").ComputedRef<string | undefined>;
    }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
        modelValue?: unknown;
        "onUpdate:modelValue"?: ((value: unknown) => void) | undefined;
    }, import("../VField/VField.js").VFieldSlots>, "$children" | "appendInnerIcon" | "baseColor" | "bgColor" | "class" | "color" | "iconColor" | "id" | "label" | "labelId" | "loading" | "modelValue" | "onClick:appendInner" | "onClick:clear" | "onClick:prependInner" | "onUpdate:focused" | "onUpdate:modelValue" | "prependInnerIcon" | "theme" | "v-slot:append-inner" | "v-slot:clear" | "v-slot:default" | "v-slot:label" | "v-slot:loader" | "v-slot:prepend-inner" | "v-slots" | ("active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant") | keyof import("vue").VNodeProps>, `$${any}`> & {
        _allExposed: {
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        } | {
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        } | {};
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "click:control": (e: MouseEvent) => true;
        "mousedown:control": (e: MouseEvent) => true;
        "update:focused": (focused: boolean) => true;
        "update:modelValue": (val: string) => true;
    }, string, {
        style: import("vue").StyleValue;
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        messages: string | readonly string[];
        clearable: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        active: boolean;
        centerAffix: boolean;
        dirty: boolean;
        disabled: boolean;
        glow: boolean;
        error: boolean;
        flat: boolean;
        persistentClear: boolean;
        reverse: boolean;
        singleLine: boolean;
        variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
        autofocus: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        type: string;
    }, {}, string, import("vue").SlotsType<Partial<{
        prepend: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        append: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        details: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        message: (arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        clear: (arg: import("../VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "prepend-inner": (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "append-inner": (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        label: (arg: import("../VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        default: (arg: {
            id: Readonly<import("vue").Ref<string, string>>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        counter: (arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
        beforeCreate?: ((() => void)[] | (() => void)) | undefined;
        created?: ((() => void)[] | (() => void)) | undefined;
        beforeMount?: ((() => void)[] | (() => void)) | undefined;
        mounted?: ((() => void)[] | (() => void)) | undefined;
        beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
        updated?: ((() => void)[] | (() => void)) | undefined;
        activated?: ((() => void)[] | (() => void)) | undefined;
        deactivated?: ((() => void)[] | (() => void)) | undefined;
        beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
        beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
        destroyed?: ((() => void)[] | (() => void)) | undefined;
        unmounted?: ((() => void)[] | (() => void)) | undefined;
        renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
        renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
        errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
    };
    $forceUpdate: () => void;
    $nextTick: typeof import("vue").nextTick;
    $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
} & Readonly<{
    style: import("vue").StyleValue;
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    readonly: boolean | null;
    rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
    density: import("../../composables/density.js").Density;
    rounded: string | number | boolean;
    tile: boolean;
    hideSpinButtons: boolean;
    persistentHint: boolean;
    messages: string | readonly string[];
    clearable: boolean;
    clearIcon: import("../../composables/icons.js").IconValue;
    active: boolean;
    centerAffix: boolean;
    dirty: boolean;
    disabled: boolean;
    glow: boolean;
    error: boolean;
    flat: boolean;
    persistentClear: boolean;
    reverse: boolean;
    singleLine: boolean;
    variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
    autofocus: boolean;
    persistentPlaceholder: boolean;
    persistentCounter: boolean;
    type: string;
}> & Omit<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    readonly: boolean | null;
    rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
    density: import("../../composables/density.js").Density;
    tile: boolean;
    hideSpinButtons: boolean;
    persistentHint: boolean;
    messages: string | readonly string[];
    clearable: boolean;
    clearIcon: import("../../composables/icons.js").IconValue;
    active: boolean;
    dirty: boolean;
    disabled: boolean;
    glow: boolean;
    error: boolean;
    flat: boolean;
    persistentClear: boolean;
    reverse: boolean;
    singleLine: boolean;
    variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
    autofocus: boolean;
    persistentPlaceholder: boolean;
    persistentCounter: boolean;
    type: string;
} & {
    theme?: string | undefined;
    class?: any;
    "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
    name?: string | undefined;
    modelValue?: any;
    validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
    validationValue?: any;
    rounded?: string | number | boolean | undefined;
    maxWidth?: string | number | undefined;
    minWidth?: string | number | undefined;
    width?: string | number | undefined;
    loading?: string | boolean | undefined;
    id?: string | undefined;
    appendIcon?: import("../../composables/icons.js").IconValue | undefined;
    prependIcon?: import("../../composables/icons.js").IconValue | undefined;
    hideDetails?: "auto" | boolean | undefined;
    hint?: string | undefined;
    "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
    "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
    appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
    bgColor?: string | undefined;
    centerAffix?: boolean | undefined;
    color?: string | undefined;
    baseColor?: string | undefined;
    iconColor?: string | boolean | undefined;
    label?: string | undefined;
    prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
    "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
    "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
    "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
    autocomplete?: string | undefined;
    counter?: string | number | boolean | undefined;
    counterValue?: number | ((value: any) => number) | undefined;
    prefix?: string | undefined;
    placeholder?: string | undefined;
    suffix?: string | undefined;
    role?: string | undefined;
    modelModifiers?: Record<string, boolean> | undefined;
} & {
    $children?: {
        prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "prepend-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "append-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        default?: ((arg: {
            id: Readonly<import("vue").Ref<string, string>>;
        }) => import("vue").VNodeChild) | undefined;
        counter?: ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | ((arg: {
        id: Readonly<import("vue").Ref<string, string>>;
    }) => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        prepend?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        append?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        details?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        message?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        clear?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "prepend-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "append-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        label?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        default?: false | ((arg: {
            id: Readonly<import("vue").Ref<string, string>>;
        }) => import("vue").VNodeChild) | undefined;
        counter?: false | ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:append"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:append-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:clear"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
        props: Record<string, any>;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:counter"?: false | ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | ((arg: {
        id: Readonly<import("vue").Ref<string, string>>;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:details"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:label"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
        label: string | undefined;
        props: Record<string, any>;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
    "v-slot:message"?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:prepend"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:prepend-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
} & {
    "onClick:control"?: ((e: MouseEvent) => any) | undefined;
    "onMousedown:control"?: ((e: MouseEvent) => any) | undefined;
    "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((val: string) => any) | undefined;
}, "ATTRIBUTE_NODE" | "CDATA_SECTION_NODE" | "COMMENT_NODE" | "DOCUMENT_FRAGMENT_NODE" | "DOCUMENT_NODE" | "DOCUMENT_POSITION_CONTAINED_BY" | "DOCUMENT_POSITION_CONTAINS" | "DOCUMENT_POSITION_DISCONNECTED" | "DOCUMENT_POSITION_FOLLOWING" | "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC" | "DOCUMENT_POSITION_PRECEDING" | "DOCUMENT_TYPE_NODE" | "ELEMENT_NODE" | "ENTITY_NODE" | "ENTITY_REFERENCE_NODE" | "NOTATION_NODE" | "PROCESSING_INSTRUCTION_NODE" | "TEXT_NODE" | "_" | "_allExposed" | "_clickOutside" | "_mutate" | "_observe" | "_onResize" | "_onScroll" | "_ripple" | "_touchHandlers" | "_transitionInitialStyles" | "accept" | "accessKey" | "accessKeyLabel" | "active" | "addEventListener" | "after" | "align" | "alt" | "animate" | "append" | "appendChild" | "ariaAtomic" | "ariaAutoComplete" | "ariaBrailleLabel" | "ariaBrailleRoleDescription" | "ariaBusy" | "ariaChecked" | "ariaColCount" | "ariaColIndex" | "ariaColIndexText" | "ariaColSpan" | "ariaCurrent" | "ariaDescription" | "ariaDisabled" | "ariaExpanded" | "ariaHasPopup" | "ariaHidden" | "ariaInvalid" | "ariaKeyShortcuts" | "ariaLabel" | "ariaLevel" | "ariaLive" | "ariaModal" | "ariaMultiLine" | "ariaMultiSelectable" | "ariaOrientation" | "ariaPlaceholder" | "ariaPosInSet" | "ariaPressed" | "ariaReadOnly" | "ariaRelevant" | "ariaRequired" | "ariaRoleDescription" | "ariaRowCount" | "ariaRowIndex" | "ariaRowIndexText" | "ariaRowSpan" | "ariaSelected" | "ariaSetSize" | "ariaSort" | "ariaValueMax" | "ariaValueMin" | "ariaValueNow" | "ariaValueText" | "assignedSlot" | "attachInternals" | "attachShadow" | "attributeStyleMap" | "attributes" | "autocapitalize" | "autocomplete" | "autofocus" | "baseURI" | "before" | "blur" | "capture" | "centerAffix" | "checkValidity" | "checkVisibility" | "checked" | "childElementCount" | "childNodes" | "children" | "classList" | "className" | "clearIcon" | "clearable" | "click" | "clientHeight" | "clientLeft" | "clientTop" | "clientWidth" | "cloneNode" | "closest" | "compareDocumentPosition" | "computedStyleMap" | "contains" | "contentEditable" | "controlRef" | "currentCSSZoom" | "dataset" | "defaultChecked" | "defaultValue" | "density" | "dir" | "dirName" | "dirty" | "disabled" | "dispatchEvent" | "draggable" | "enterKeyHint" | "error" | "errorMessages" | "fieldIconColor" | "files" | "firstChild" | "firstElementChild" | "flat" | "focus" | "focused" | "form" | "formAction" | "formEnctype" | "formMethod" | "formNoValidate" | "formTarget" | "getAnimations" | "getAttribute" | "getAttributeNS" | "getAttributeNames" | "getAttributeNode" | "getAttributeNodeNS" | "getBoundingClientRect" | "getClientRects" | "getElementsByClassName" | "getElementsByTagName" | "getElementsByTagNameNS" | "getHTML" | "getRootNode" | "glow" | "hasAttribute" | "hasAttributeNS" | "hasAttributes" | "hasChildNodes" | "hasPointerCapture" | "height" | "hidden" | "hidePopover" | "hideSpinButtons" | "id" | "indeterminate" | "inert" | "innerHTML" | "innerText" | "inputMode" | "insertAdjacentElement" | "insertAdjacentHTML" | "insertAdjacentText" | "insertBefore" | "isConnected" | "isContentEditable" | "isDefaultNamespace" | "isEqualNode" | "isSameNode" | "isValid" | "labels" | "lang" | "lastChild" | "lastElementChild" | "list" | "localName" | "lookupNamespaceURI" | "lookupPrefix" | "matches" | "max" | "maxErrors" | "maxLength" | "messages" | "min" | "minLength" | "multiple" | "name" | "namespaceURI" | "nextElementSibling" | "nextSibling" | "nodeName" | "nodeType" | "nodeValue" | "nonce" | "normalize" | "offsetHeight" | "offsetLeft" | "offsetParent" | "offsetTop" | "offsetWidth" | "onabort" | "onanimationcancel" | "onanimationend" | "onanimationiteration" | "onanimationstart" | "onauxclick" | "onbeforeinput" | "onbeforetoggle" | "onblur" | "oncancel" | "oncanplay" | "oncanplaythrough" | "onchange" | "onclick" | "onclose" | "oncontextlost" | "oncontextmenu" | "oncontextrestored" | "oncopy" | "oncuechange" | "oncut" | "ondblclick" | "ondrag" | "ondragend" | "ondragenter" | "ondragleave" | "ondragover" | "ondragstart" | "ondrop" | "ondurationchange" | "onemptied" | "onended" | "onerror" | "onfocus" | "onformdata" | "onfullscreenchange" | "onfullscreenerror" | "ongotpointercapture" | "oninput" | "oninvalid" | "onkeydown" | "onkeypress" | "onkeyup" | "onload" | "onloadeddata" | "onloadedmetadata" | "onloadstart" | "onlostpointercapture" | "onmousedown" | "onmouseenter" | "onmouseleave" | "onmousemove" | "onmouseout" | "onmouseover" | "onmouseup" | "onpaste" | "onpause" | "onplay" | "onplaying" | "onpointercancel" | "onpointerdown" | "onpointerenter" | "onpointerleave" | "onpointermove" | "onpointerout" | "onpointerover" | "onpointerup" | "onprogress" | "onratechange" | "onreset" | "onresize" | "onscroll" | "onscrollend" | "onsecuritypolicyviolation" | "onseeked" | "onseeking" | "onselect" | "onselectionchange" | "onselectstart" | "onslotchange" | "onstalled" | "onsubmit" | "onsuspend" | "ontimeupdate" | "ontoggle" | "ontouchcancel" | "ontouchend" | "ontouchmove" | "ontouchstart" | "ontransitioncancel" | "ontransitionend" | "ontransitionrun" | "ontransitionstart" | "onvolumechange" | "onwaiting" | "onwebkitanimationend" | "onwebkitanimationiteration" | "onwebkitanimationstart" | "onwebkittransitionend" | "onwheel" | "outerHTML" | "outerText" | "ownerDocument" | "parentElement" | "parentNode" | "part" | "pattern" | "persistentClear" | "persistentCounter" | "persistentHint" | "persistentPlaceholder" | "placeholder" | "popover" | "popoverTargetAction" | "popoverTargetElement" | "prefix" | "prepend" | "previousElementSibling" | "previousSibling" | "querySelector" | "querySelectorAll" | "readOnly" | "readonly" | "releasePointerCapture" | "remove" | "removeAttribute" | "removeAttributeNS" | "removeAttributeNode" | "removeChild" | "removeEventListener" | "replaceChild" | "replaceChildren" | "replaceWith" | "reportValidity" | "requestFullscreen" | "requestPointerLock" | "required" | "reset" | "resetValidation" | "reverse" | "role" | "rounded" | "rules" | "scroll" | "scrollBy" | "scrollHeight" | "scrollIntoView" | "scrollLeft" | "scrollTo" | "scrollTop" | "scrollWidth" | "select" | "selectionDirection" | "selectionEnd" | "selectionStart" | "setAttribute" | "setAttributeNS" | "setAttributeNode" | "setAttributeNodeNS" | "setCustomValidity" | "setHTMLUnsafe" | "setPointerCapture" | "setRangeText" | "setSelectionRange" | "shadowRoot" | "showPicker" | "showPopover" | "singleLine" | "size" | "slot" | "spellcheck" | "src" | "step" | "stepDown" | "stepUp" | "style" | "tabIndex" | "tagName" | "textContent" | "tile" | "title" | "toggleAttribute" | "togglePopover" | "translate" | "type" | "useMap" | "validate" | "validationMessage" | "validity" | "value" | "valueAsDate" | "valueAsNumber" | "variant" | "webkitEntries" | "webkitMatchesSelector" | "webkitdirectory" | "width" | "willValidate" | "writingSuggestions"> & import("vue").ShallowUnwrapRef<HTMLInputElement & Omit<Omit<{
    $: import("vue").ComponentInternalInstance;
    $data: {};
    $props: Partial<{
        style: import("vue").StyleValue;
        focused: boolean;
        disabled: boolean | null;
        error: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        density: import("../../composables/density.js").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        messages: string | readonly string[];
        direction: "horizontal" | "vertical";
    }> & Omit<{
        theme?: string | undefined;
        class?: any;
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        focused: boolean;
        "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
        disabled: boolean | null;
        error: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        name?: string | undefined;
        label?: string | undefined;
        readonly: boolean | null;
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
        validationValue?: any;
        density: import("../../composables/density.js").Density;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        id?: string | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        baseColor?: string | undefined;
        centerAffix: boolean;
        color?: string | undefined;
        glow: boolean;
        iconColor?: string | boolean | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        hideDetails?: "auto" | boolean | undefined;
        hideSpinButtons: boolean;
        hint?: string | undefined;
        persistentHint: boolean;
        messages: string | readonly string[];
        direction: "horizontal" | "vertical";
        "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style">;
    $attrs: {
        [x: string]: unknown;
    };
    $refs: {
        [x: string]: unknown;
    };
    $slots: Readonly<{
        default?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
    }>;
    $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
    $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
    $host: Element | null;
    $emit: (event: string, ...args: any[]) => void;
    $el: any;
    $options: import("vue").ComponentOptionsBase<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        focused: boolean;
        disabled: boolean | null;
        error: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        density: import("../../composables/density.js").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        messages: string | readonly string[];
        direction: "horizontal" | "vertical";
    } & {
        theme?: string | undefined;
        class?: any;
        "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
        name?: string | undefined;
        label?: string | undefined;
        validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
        validationValue?: any;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        id?: string | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        baseColor?: string | undefined;
        color?: string | undefined;
        iconColor?: string | boolean | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        hideDetails?: "auto" | boolean | undefined;
        hint?: string | undefined;
        "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
    } & {}, {
        reset: () => Promise<void>;
        resetValidation: () => Promise<void>;
        validate: (silent?: boolean) => Promise<string[]>;
        isValid: import("vue").ComputedRef<boolean | null>;
        errorMessages: import("vue").ComputedRef<string[]>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        "update:modelValue": (value: any) => true;
    }, "$children" | "modelValue" | "update:modelValue" | "v-slot:append" | "v-slot:default" | "v-slot:details" | "v-slot:message" | "v-slot:prepend" | "v-slots">, string, {
        style: import("vue").StyleValue;
        focused: boolean;
        disabled: boolean | null;
        error: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        density: import("../../composables/density.js").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        messages: string | readonly string[];
        direction: "horizontal" | "vertical";
    }, {}, string, import("vue").SlotsType<Partial<{
        default: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        prepend: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        append: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        details: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        message: (arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
        beforeCreate?: ((() => void)[] | (() => void)) | undefined;
        created?: ((() => void)[] | (() => void)) | undefined;
        beforeMount?: ((() => void)[] | (() => void)) | undefined;
        mounted?: ((() => void)[] | (() => void)) | undefined;
        beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
        updated?: ((() => void)[] | (() => void)) | undefined;
        activated?: ((() => void)[] | (() => void)) | undefined;
        deactivated?: ((() => void)[] | (() => void)) | undefined;
        beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
        beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
        destroyed?: ((() => void)[] | (() => void)) | undefined;
        unmounted?: ((() => void)[] | (() => void)) | undefined;
        renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
        renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
        errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
    };
    $forceUpdate: () => void;
    $nextTick: typeof import("vue").nextTick;
    $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
} & Readonly<{
    style: import("vue").StyleValue;
    focused: boolean;
    disabled: boolean | null;
    error: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    readonly: boolean | null;
    rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
    density: import("../../composables/density.js").Density;
    centerAffix: boolean;
    glow: boolean;
    hideSpinButtons: boolean;
    persistentHint: boolean;
    messages: string | readonly string[];
    direction: "horizontal" | "vertical";
}> & Omit<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    focused: boolean;
    disabled: boolean | null;
    error: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    readonly: boolean | null;
    rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
    density: import("../../composables/density.js").Density;
    centerAffix: boolean;
    glow: boolean;
    hideSpinButtons: boolean;
    persistentHint: boolean;
    messages: string | readonly string[];
    direction: "horizontal" | "vertical";
} & {
    theme?: string | undefined;
    class?: any;
    "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
    name?: string | undefined;
    label?: string | undefined;
    validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
    validationValue?: any;
    maxWidth?: string | number | undefined;
    minWidth?: string | number | undefined;
    width?: string | number | undefined;
    id?: string | undefined;
    appendIcon?: import("../../composables/icons.js").IconValue | undefined;
    baseColor?: string | undefined;
    color?: string | undefined;
    iconColor?: string | boolean | undefined;
    prependIcon?: import("../../composables/icons.js").IconValue | undefined;
    hideDetails?: "auto" | boolean | undefined;
    hint?: string | undefined;
    "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
    "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
} & {}, "isValid" | "reset" | "resetValidation" | "validate" | ("centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style")> & import("vue").ShallowUnwrapRef<{
    reset: () => Promise<void>;
    resetValidation: () => Promise<void>;
    validate: (silent?: boolean) => Promise<string[]>;
    isValid: import("vue").ComputedRef<boolean | null>;
    errorMessages: import("vue").ComputedRef<string[]>;
}> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
    modelValue?: unknown;
    "onUpdate:modelValue"?: ((value: unknown) => void) | undefined;
}, import("../VInput/VInput.js").VInputSlots>, "$children" | "appendIcon" | "baseColor" | "class" | "color" | "hideDetails" | "hint" | "iconColor" | "id" | "label" | "maxWidth" | "minWidth" | "modelValue" | "name" | "onClick:append" | "onClick:prepend" | "onUpdate:focused" | "onUpdate:modelValue" | "prependIcon" | "theme" | "v-slot:append" | "v-slot:default" | "v-slot:details" | "v-slot:message" | "v-slot:prepend" | "v-slots" | "validateOn" | "validationValue" | "width" | ("centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style") | keyof import("vue").VNodeProps>, `$${any}`> & Omit<Omit<{
    $: import("vue").ComponentInternalInstance;
    $data: {};
    $props: Partial<{
        style: import("vue").StyleValue;
        focused: boolean;
        rounded: string | number | boolean;
        tile: boolean;
        clearable: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        active: boolean;
        centerAffix: boolean;
        dirty: boolean;
        disabled: boolean;
        glow: boolean;
        error: boolean;
        flat: boolean;
        persistentClear: boolean;
        reverse: boolean;
        singleLine: boolean;
        variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
        details: boolean;
    }> & Omit<{
        theme?: string | undefined;
        class?: any;
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        focused: boolean;
        "onUpdate:focused"?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
        rounded?: string | number | boolean | undefined;
        tile: boolean;
        loading?: string | boolean | undefined;
        appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        bgColor?: string | undefined;
        clearable: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        active: boolean;
        centerAffix?: boolean | undefined;
        color?: string | undefined;
        baseColor?: string | undefined;
        dirty: boolean;
        disabled: boolean;
        glow: boolean;
        error: boolean;
        flat: boolean;
        iconColor?: string | boolean | undefined;
        label?: string | undefined;
        persistentClear: boolean;
        prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        reverse: boolean;
        singleLine: boolean;
        variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
        "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
        id?: string | undefined;
        details: boolean;
        labelId?: string | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant">;
    $attrs: {
        [x: string]: unknown;
    };
    $refs: {
        [x: string]: unknown;
    };
    $slots: Readonly<{
        clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        "prepend-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        "append-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        default?: ((arg: import("../VField/VField.js").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
    }>;
    $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
    $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
    $host: Element | null;
    $emit: (event: "update:focused", focused: boolean) => void;
    $el: any;
    $options: import("vue").ComponentOptionsBase<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        focused: boolean;
        tile: boolean;
        clearable: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        active: boolean;
        dirty: boolean;
        disabled: boolean;
        glow: boolean;
        error: boolean;
        flat: boolean;
        persistentClear: boolean;
        reverse: boolean;
        singleLine: boolean;
        variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
        details: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
        rounded?: string | number | boolean | undefined;
        loading?: string | boolean | undefined;
        appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        bgColor?: string | undefined;
        centerAffix?: boolean | undefined;
        color?: string | undefined;
        baseColor?: string | undefined;
        iconColor?: string | boolean | undefined;
        label?: string | undefined;
        prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
        id?: string | undefined;
        labelId?: string | undefined;
    } & {
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
    }, {
        controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        fieldIconColor: import("vue").ComputedRef<string | undefined>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        "update:focused": (focused: boolean) => true;
        "update:modelValue": (value: any) => true;
    }, "$children" | "modelValue" | "update:modelValue" | "v-slot:append-inner" | "v-slot:clear" | "v-slot:default" | "v-slot:label" | "v-slot:loader" | "v-slot:prepend-inner" | "v-slots">, string, {
        style: import("vue").StyleValue;
        focused: boolean;
        rounded: string | number | boolean;
        tile: boolean;
        clearable: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        active: boolean;
        centerAffix: boolean;
        dirty: boolean;
        disabled: boolean;
        glow: boolean;
        error: boolean;
        flat: boolean;
        persistentClear: boolean;
        reverse: boolean;
        singleLine: boolean;
        variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
        details: boolean;
    }, {}, string, import("vue").SlotsType<Partial<{
        clear: (arg: import("../VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "prepend-inner": (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "append-inner": (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        label: (arg: import("../VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        default: (arg: import("../VField/VField.js").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
        beforeCreate?: ((() => void)[] | (() => void)) | undefined;
        created?: ((() => void)[] | (() => void)) | undefined;
        beforeMount?: ((() => void)[] | (() => void)) | undefined;
        mounted?: ((() => void)[] | (() => void)) | undefined;
        beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
        updated?: ((() => void)[] | (() => void)) | undefined;
        activated?: ((() => void)[] | (() => void)) | undefined;
        deactivated?: ((() => void)[] | (() => void)) | undefined;
        beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
        beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
        destroyed?: ((() => void)[] | (() => void)) | undefined;
        unmounted?: ((() => void)[] | (() => void)) | undefined;
        renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
        renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
        errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
    };
    $forceUpdate: () => void;
    $nextTick: typeof import("vue").nextTick;
    $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
} & Readonly<{
    style: import("vue").StyleValue;
    focused: boolean;
    rounded: string | number | boolean;
    tile: boolean;
    clearable: boolean;
    clearIcon: import("../../composables/icons.js").IconValue;
    active: boolean;
    centerAffix: boolean;
    dirty: boolean;
    disabled: boolean;
    glow: boolean;
    error: boolean;
    flat: boolean;
    persistentClear: boolean;
    reverse: boolean;
    singleLine: boolean;
    variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
    details: boolean;
}> & Omit<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    focused: boolean;
    tile: boolean;
    clearable: boolean;
    clearIcon: import("../../composables/icons.js").IconValue;
    active: boolean;
    dirty: boolean;
    disabled: boolean;
    glow: boolean;
    error: boolean;
    flat: boolean;
    persistentClear: boolean;
    reverse: boolean;
    singleLine: boolean;
    variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
    details: boolean;
} & {
    theme?: string | undefined;
    class?: any;
    "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
    rounded?: string | number | boolean | undefined;
    loading?: string | boolean | undefined;
    appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
    bgColor?: string | undefined;
    centerAffix?: boolean | undefined;
    color?: string | undefined;
    baseColor?: string | undefined;
    iconColor?: string | boolean | undefined;
    label?: string | undefined;
    prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
    "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
    "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
    "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
    id?: string | undefined;
    labelId?: string | undefined;
} & {
    "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
}, "controlRef" | "fieldIconColor" | ("active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant")> & import("vue").ShallowUnwrapRef<{
    controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
    fieldIconColor: import("vue").ComputedRef<string | undefined>;
}> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
    modelValue?: unknown;
    "onUpdate:modelValue"?: ((value: unknown) => void) | undefined;
}, import("../VField/VField.js").VFieldSlots>, "$children" | "appendInnerIcon" | "baseColor" | "bgColor" | "class" | "color" | "iconColor" | "id" | "label" | "labelId" | "loading" | "modelValue" | "onClick:appendInner" | "onClick:clear" | "onClick:prependInner" | "onUpdate:focused" | "onUpdate:modelValue" | "prependInnerIcon" | "theme" | "v-slot:append-inner" | "v-slot:clear" | "v-slot:default" | "v-slot:label" | "v-slot:loader" | "v-slot:prepend-inner" | "v-slots" | ("active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant") | keyof import("vue").VNodeProps>, `$${any}`> & {
    _allExposed: {
        reset: () => Promise<void>;
        resetValidation: () => Promise<void>;
        validate: (silent?: boolean) => Promise<string[]>;
        isValid: import("vue").ComputedRef<boolean | null>;
        errorMessages: import("vue").ComputedRef<string[]>;
    } | {
        controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        fieldIconColor: import("vue").ComputedRef<string | undefined>;
    } | {};
}> & {} & import("vue").ComponentCustomProperties & {}, "$children" | "appendIcon" | "appendInnerIcon" | "autocomplete" | "baseColor" | "bgColor" | "class" | "color" | "counter" | "counterValue" | "hideDetails" | "hint" | "iconColor" | "id" | "label" | "loading" | "maxWidth" | "minWidth" | "modelModifiers" | "modelValue" | "name" | "onClick:append" | "onClick:appendInner" | "onClick:clear" | "onClick:control" | "onClick:prepend" | "onClick:prependInner" | "onMousedown:control" | "onUpdate:focused" | "onUpdate:modelValue" | "placeholder" | "prefix" | "prependIcon" | "prependInnerIcon" | "role" | "suffix" | "theme" | "v-slot:append" | "v-slot:append-inner" | "v-slot:clear" | "v-slot:counter" | "v-slot:default" | "v-slot:details" | "v-slot:label" | "v-slot:loader" | "v-slot:message" | "v-slot:prepend" | "v-slot:prepend-inner" | "v-slots" | "validateOn" | "validationValue" | "width" | ("active" | "autofocus" | "centerAffix" | "clearIcon" | "clearable" | "density" | "dirty" | "disabled" | "error" | "errorMessages" | "flat" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentClear" | "persistentCounter" | "persistentHint" | "persistentPlaceholder" | "readonly" | "reverse" | "rounded" | "rules" | "singleLine" | "style" | "tile" | "type" | "variant") | keyof import("vue").VNodeProps>, `$${any}`> & {
    _allExposed: {} | (HTMLInputElement & Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            style: import("vue").StyleValue;
            focused: boolean;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            focused: boolean;
            "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            name?: string | undefined;
            label?: string | undefined;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
            validationValue?: any;
            density: import("../../composables/density.js").Density;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            id?: string | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            baseColor?: string | undefined;
            centerAffix: boolean;
            color?: string | undefined;
            glow: boolean;
            iconColor?: string | boolean | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            hideDetails?: "auto" | boolean | undefined;
            hideSpinButtons: boolean;
            hint?: string | undefined;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
            "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $host: Element | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            focused: boolean;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
        } & {
            theme?: string | undefined;
            class?: any;
            "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
            name?: string | undefined;
            label?: string | undefined;
            validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
            validationValue?: any;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            id?: string | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            baseColor?: string | undefined;
            color?: string | undefined;
            iconColor?: string | boolean | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            hideDetails?: "auto" | boolean | undefined;
            hint?: string | undefined;
            "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
        } & {}, {
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
            "update:modelValue": (value: any) => true;
        }, "$children" | "modelValue" | "update:modelValue" | "v-slot:append" | "v-slot:default" | "v-slot:details" | "v-slot:message" | "v-slot:prepend" | "v-slots">, string, {
            style: import("vue").StyleValue;
            focused: boolean;
            disabled: boolean | null;
            error: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            readonly: boolean | null;
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            messages: string | readonly string[];
            direction: "horizontal" | "vertical";
        }, {}, string, import("vue").SlotsType<Partial<{
            default: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            prepend: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            append: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            details: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            message: (arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: ((() => void)[] | (() => void)) | undefined;
            created?: ((() => void)[] | (() => void)) | undefined;
            beforeMount?: ((() => void)[] | (() => void)) | undefined;
            mounted?: ((() => void)[] | (() => void)) | undefined;
            beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
            updated?: ((() => void)[] | (() => void)) | undefined;
            activated?: ((() => void)[] | (() => void)) | undefined;
            deactivated?: ((() => void)[] | (() => void)) | undefined;
            beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
            beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
            destroyed?: ((() => void)[] | (() => void)) | undefined;
            unmounted?: ((() => void)[] | (() => void)) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<{
        style: import("vue").StyleValue;
        focused: boolean;
        disabled: boolean | null;
        error: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        density: import("../../composables/density.js").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        messages: string | readonly string[];
        direction: "horizontal" | "vertical";
    }> & Omit<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        focused: boolean;
        disabled: boolean | null;
        error: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        readonly: boolean | null;
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        density: import("../../composables/density.js").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        messages: string | readonly string[];
        direction: "horizontal" | "vertical";
    } & {
        theme?: string | undefined;
        class?: any;
        "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
        name?: string | undefined;
        label?: string | undefined;
        validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
        validationValue?: any;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        id?: string | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        baseColor?: string | undefined;
        color?: string | undefined;
        iconColor?: string | boolean | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        hideDetails?: "auto" | boolean | undefined;
        hint?: string | undefined;
        "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
    } & {}, "isValid" | "reset" | "resetValidation" | "validate" | ("centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style")> & import("vue").ShallowUnwrapRef<{
        reset: () => Promise<void>;
        resetValidation: () => Promise<void>;
        validate: (silent?: boolean) => Promise<string[]>;
        isValid: import("vue").ComputedRef<boolean | null>;
        errorMessages: import("vue").ComputedRef<string[]>;
    }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
        modelValue?: unknown;
        "onUpdate:modelValue"?: ((value: unknown) => void) | undefined;
    }, import("../VInput/VInput.js").VInputSlots>, "$children" | "appendIcon" | "baseColor" | "class" | "color" | "hideDetails" | "hint" | "iconColor" | "id" | "label" | "maxWidth" | "minWidth" | "modelValue" | "name" | "onClick:append" | "onClick:prepend" | "onUpdate:focused" | "onUpdate:modelValue" | "prependIcon" | "theme" | "v-slot:append" | "v-slot:default" | "v-slot:details" | "v-slot:message" | "v-slot:prepend" | "v-slots" | "validateOn" | "validationValue" | "width" | ("centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style") | keyof import("vue").VNodeProps>, `$${any}`> & Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            style: import("vue").StyleValue;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearable: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            active: boolean;
            centerAffix: boolean;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            persistentClear: boolean;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            details: boolean;
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            focused: boolean;
            "onUpdate:focused"?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
            rounded?: string | number | boolean | undefined;
            tile: boolean;
            loading?: string | boolean | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            bgColor?: string | undefined;
            clearable: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            active: boolean;
            centerAffix?: boolean | undefined;
            color?: string | undefined;
            baseColor?: string | undefined;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            iconColor?: string | boolean | undefined;
            label?: string | undefined;
            persistentClear: boolean;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
            id?: string | undefined;
            details: boolean;
            labelId?: string | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            "prepend-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            "append-inner"?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            default?: ((arg: import("../VField/VField.js").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $host: Element | null;
        $emit: (event: "update:focused", focused: boolean) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            focused: boolean;
            tile: boolean;
            clearable: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            active: boolean;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            persistentClear: boolean;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            details: boolean;
        } & {
            theme?: string | undefined;
            class?: any;
            "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
            rounded?: string | number | boolean | undefined;
            loading?: string | boolean | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            bgColor?: string | undefined;
            centerAffix?: boolean | undefined;
            color?: string | undefined;
            baseColor?: string | undefined;
            iconColor?: string | boolean | undefined;
            label?: string | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
            "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
            id?: string | undefined;
            labelId?: string | undefined;
        } & {
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        }, {
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
            "update:focused": (focused: boolean) => true;
            "update:modelValue": (value: any) => true;
        }, "$children" | "modelValue" | "update:modelValue" | "v-slot:append-inner" | "v-slot:clear" | "v-slot:default" | "v-slot:label" | "v-slot:loader" | "v-slot:prepend-inner" | "v-slots">, string, {
            style: import("vue").StyleValue;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearable: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            active: boolean;
            centerAffix: boolean;
            dirty: boolean;
            disabled: boolean;
            glow: boolean;
            error: boolean;
            flat: boolean;
            persistentClear: boolean;
            reverse: boolean;
            singleLine: boolean;
            variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
            details: boolean;
        }, {}, string, import("vue").SlotsType<Partial<{
            clear: (arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            "prepend-inner": (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            "append-inner": (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            label: (arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            default: (arg: import("../VField/VField.js").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: ((() => void)[] | (() => void)) | undefined;
            created?: ((() => void)[] | (() => void)) | undefined;
            beforeMount?: ((() => void)[] | (() => void)) | undefined;
            mounted?: ((() => void)[] | (() => void)) | undefined;
            beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
            updated?: ((() => void)[] | (() => void)) | undefined;
            activated?: ((() => void)[] | (() => void)) | undefined;
            deactivated?: ((() => void)[] | (() => void)) | undefined;
            beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
            beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
            destroyed?: ((() => void)[] | (() => void)) | undefined;
            unmounted?: ((() => void)[] | (() => void)) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<{
        style: import("vue").StyleValue;
        focused: boolean;
        rounded: string | number | boolean;
        tile: boolean;
        clearable: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        active: boolean;
        centerAffix: boolean;
        dirty: boolean;
        disabled: boolean;
        glow: boolean;
        error: boolean;
        flat: boolean;
        persistentClear: boolean;
        reverse: boolean;
        singleLine: boolean;
        variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
        details: boolean;
    }> & Omit<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        focused: boolean;
        tile: boolean;
        clearable: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        active: boolean;
        dirty: boolean;
        disabled: boolean;
        glow: boolean;
        error: boolean;
        flat: boolean;
        persistentClear: boolean;
        reverse: boolean;
        singleLine: boolean;
        variant: "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined";
        details: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
        rounded?: string | number | boolean | undefined;
        loading?: string | boolean | undefined;
        appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        bgColor?: string | undefined;
        centerAffix?: boolean | undefined;
        color?: string | undefined;
        baseColor?: string | undefined;
        iconColor?: string | boolean | undefined;
        label?: string | undefined;
        prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        "onClick:clear"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:appendInner"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:prependInner"?: ((args_0: MouseEvent) => void) | undefined;
        id?: string | undefined;
        labelId?: string | undefined;
    } & {
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
    }, "controlRef" | "fieldIconColor" | ("active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant")> & import("vue").ShallowUnwrapRef<{
        controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        fieldIconColor: import("vue").ComputedRef<string | undefined>;
    }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
        modelValue?: unknown;
        "onUpdate:modelValue"?: ((value: unknown) => void) | undefined;
    }, import("../VField/VField.js").VFieldSlots>, "$children" | "appendInnerIcon" | "baseColor" | "bgColor" | "class" | "color" | "iconColor" | "id" | "label" | "labelId" | "loading" | "modelValue" | "onClick:appendInner" | "onClick:clear" | "onClick:prependInner" | "onUpdate:focused" | "onUpdate:modelValue" | "prependInnerIcon" | "theme" | "v-slot:append-inner" | "v-slot:clear" | "v-slot:default" | "v-slot:label" | "v-slot:loader" | "v-slot:prepend-inner" | "v-slots" | ("active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant") | keyof import("vue").VNodeProps>, `$${any}`> & {
        _allExposed: {
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        } | {
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        } | {};
    });
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (v: string | null) => true;
}, string, {
    active: boolean;
    disabled: boolean;
    showHint: boolean;
    readonly: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    active: BooleanConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    label: StringConstructor;
    modelValue: PropType<string | number | null>;
    error: StringConstructor;
    showHint: BooleanConstructor;
    readonly: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    active: BooleanConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    label: StringConstructor;
    modelValue: PropType<string | number | null>;
    error: StringConstructor;
    showHint: BooleanConstructor;
    readonly: BooleanConstructor;
}>>;
export type VTimePickerField = InstanceType<typeof VTimePickerField>;
