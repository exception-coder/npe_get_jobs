// Utilities
import { nextTick } from 'vue';
// Types
import type { VTextFieldSlots } from '../../components/VTextField/VTextField.js';
export type VMaskInputSlots = VTextFieldSlots;
export declare const makeVMaskInputProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
    mask?: unknown;
    focused?: unknown;
    "onUpdate:focused"?: unknown;
    errorMessages?: unknown;
    maxErrors?: unknown;
    name?: unknown;
    readonly?: unknown;
    rules?: unknown;
    modelValue?: unknown;
    validateOn?: unknown;
    validationValue?: unknown;
    density?: unknown;
    rounded?: unknown;
    tile?: unknown;
    maxWidth?: unknown;
    minWidth?: unknown;
    width?: unknown;
    loading?: unknown;
    id?: unknown;
    appendIcon?: unknown;
    prependIcon?: unknown;
    hideDetails?: unknown;
    hideSpinButtons?: unknown;
    hint?: unknown;
    persistentHint?: unknown;
    messages?: unknown;
    "onClick:prepend"?: unknown;
    "onClick:append"?: unknown;
    appendInnerIcon?: unknown;
    bgColor?: unknown;
    clearable?: unknown;
    clearIcon?: unknown;
    active?: unknown;
    centerAffix?: unknown;
    color?: unknown;
    baseColor?: unknown;
    dirty?: unknown;
    disabled?: unknown;
    glow?: unknown;
    error?: unknown;
    flat?: unknown;
    iconColor?: unknown;
    label?: unknown;
    persistentClear?: unknown;
    prependInnerIcon?: unknown;
    reverse?: unknown;
    singleLine?: unknown;
    variant?: unknown;
    "onClick:clear"?: unknown;
    "onClick:appendInner"?: unknown;
    "onClick:prependInner"?: unknown;
    autocomplete?: unknown;
    autofocus?: unknown;
    counter?: unknown;
    counterValue?: unknown;
    prefix?: unknown;
    placeholder?: unknown;
    persistentPlaceholder?: unknown;
    persistentCounter?: unknown;
    suffix?: unknown;
    role?: unknown;
    type?: unknown;
    modelModifiers?: unknown;
    returnMaskedValue?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
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
    mask: unknown extends Defaults["mask"] ? import("vue").PropType<string | import("../../composables/mask/index.js").MaskOptions> : {
        type: import("vue").PropType<unknown extends Defaults["mask"] ? string | import("../../composables/mask/index.js").MaskOptions : string | import("../../composables/mask/index.js").MaskOptions | Defaults["mask"]>;
        default: unknown extends Defaults["mask"] ? string | import("../../composables/mask/index.js").MaskOptions : Defaults["mask"] | NonNullable<string | import("../../composables/mask/index.js").MaskOptions>;
    };
    focused: unknown extends Defaults["focused"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["focused"] ? boolean : boolean | Defaults["focused"]>;
        default: unknown extends Defaults["focused"] ? boolean : boolean | Defaults["focused"];
    };
    "onUpdate:focused": unknown extends Defaults["onUpdate:focused"] ? import("vue").PropType<(args_0: boolean) => void> : {
        type: import("vue").PropType<unknown extends Defaults["onUpdate:focused"] ? (args_0: boolean) => void : ((args_0: boolean) => void) | Defaults["onUpdate:focused"]>;
        default: unknown extends Defaults["onUpdate:focused"] ? (args_0: boolean) => void : ((args_0: boolean) => void) | Defaults["onUpdate:focused"];
    };
    errorMessages: unknown extends Defaults["errorMessages"] ? {
        type: import("vue").PropType<string | readonly string[] | null>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<string | readonly string[] | null>;
        default: () => never[];
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["errorMessages"] ? string | readonly string[] | null : string | readonly string[] | Defaults["errorMessages"] | null>;
        default: unknown extends Defaults["errorMessages"] ? string | readonly string[] | null : Defaults["errorMessages"] | NonNullable<string | readonly string[] | null>;
    };
    maxErrors: unknown extends Defaults["maxErrors"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["maxErrors"] ? string | number : string | number | Defaults["maxErrors"]>;
        default: unknown extends Defaults["maxErrors"] ? string | number : Defaults["maxErrors"] | NonNullable<string | number>;
    };
    name: unknown extends Defaults["name"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["name"] ? string : string | Defaults["name"]>;
        default: unknown extends Defaults["name"] ? string : string | Defaults["name"];
    };
    readonly: unknown extends Defaults["readonly"] ? {
        type: import("vue").PropType<boolean | null>;
        default: null;
    } : Omit<{
        type: import("vue").PropType<boolean | null>;
        default: null;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["readonly"] ? boolean | null : boolean | Defaults["readonly"] | null>;
        default: unknown extends Defaults["readonly"] ? boolean | null : Defaults["readonly"] | NonNullable<boolean | null>;
    };
    rules: unknown extends Defaults["rules"] ? {
        type: import("vue").PropType<readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["rules"] ? readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[] : readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[] | Defaults["rules"]>;
        default: unknown extends Defaults["rules"] ? readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[] : readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[] | Defaults["rules"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? null : {
        type: import("vue").PropType<unknown extends Defaults["modelValue"] ? any : any>;
        default: unknown extends Defaults["modelValue"] ? any : any;
    };
    validateOn: unknown extends Defaults["validateOn"] ? import("vue").PropType<("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined> : {
        type: import("vue").PropType<unknown extends Defaults["validateOn"] ? ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined : Defaults["validateOn"] | ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined>;
        default: unknown extends Defaults["validateOn"] ? ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined : Defaults["validateOn"] | NonNullable<("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined>;
    };
    validationValue: unknown extends Defaults["validationValue"] ? null : {
        type: import("vue").PropType<unknown extends Defaults["validationValue"] ? any : any>;
        default: unknown extends Defaults["validationValue"] ? any : any;
    };
    density: unknown extends Defaults["density"] ? {
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["density"] ? import("../../composables/density.js").Density : Defaults["density"] | import("../../composables/density.js").Density>;
        default: unknown extends Defaults["density"] ? import("../../composables/density.js").Density : Defaults["density"] | NonNullable<import("../../composables/density.js").Density>;
    };
    rounded: unknown extends Defaults["rounded"] ? {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    } : Omit<{
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["rounded"] ? string | number | boolean : string | number | boolean | Defaults["rounded"]>;
        default: unknown extends Defaults["rounded"] ? string | number | boolean : Defaults["rounded"] | NonNullable<string | number | boolean>;
    };
    tile: unknown extends Defaults["tile"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["tile"] ? boolean : boolean | Defaults["tile"]>;
        default: unknown extends Defaults["tile"] ? boolean : boolean | Defaults["tile"];
    };
    maxWidth: unknown extends Defaults["maxWidth"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["maxWidth"] ? string | number : string | number | Defaults["maxWidth"]>;
        default: unknown extends Defaults["maxWidth"] ? string | number : Defaults["maxWidth"] | NonNullable<string | number>;
    };
    minWidth: unknown extends Defaults["minWidth"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["minWidth"] ? string | number : string | number | Defaults["minWidth"]>;
        default: unknown extends Defaults["minWidth"] ? string | number : Defaults["minWidth"] | NonNullable<string | number>;
    };
    width: unknown extends Defaults["width"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : Defaults["width"] | NonNullable<string | number>;
    };
    loading: unknown extends Defaults["loading"] ? (BooleanConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["loading"] ? string | boolean : string | boolean | Defaults["loading"]>;
        default: unknown extends Defaults["loading"] ? string | boolean : Defaults["loading"] | NonNullable<string | boolean>;
    };
    id: unknown extends Defaults["id"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["id"] ? string : string | Defaults["id"]>;
        default: unknown extends Defaults["id"] ? string : string | Defaults["id"];
    };
    appendIcon: unknown extends Defaults["appendIcon"] ? import("vue").PropType<import("../../composables/icons.js").IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["appendIcon"] ? import("../../composables/icons.js").IconValue : Defaults["appendIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["appendIcon"] ? import("../../composables/icons.js").IconValue : Defaults["appendIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    prependIcon: unknown extends Defaults["prependIcon"] ? import("vue").PropType<import("../../composables/icons.js").IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["prependIcon"] ? import("../../composables/icons.js").IconValue : Defaults["prependIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["prependIcon"] ? import("../../composables/icons.js").IconValue : Defaults["prependIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    hideDetails: unknown extends Defaults["hideDetails"] ? import("vue").PropType<"auto" | boolean> : {
        type: import("vue").PropType<unknown extends Defaults["hideDetails"] ? "auto" | boolean : "auto" | boolean | Defaults["hideDetails"]>;
        default: unknown extends Defaults["hideDetails"] ? "auto" | boolean : Defaults["hideDetails"] | NonNullable<"auto" | boolean>;
    };
    hideSpinButtons: unknown extends Defaults["hideSpinButtons"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hideSpinButtons"] ? boolean : boolean | Defaults["hideSpinButtons"]>;
        default: unknown extends Defaults["hideSpinButtons"] ? boolean : boolean | Defaults["hideSpinButtons"];
    };
    hint: unknown extends Defaults["hint"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hint"] ? string : string | Defaults["hint"]>;
        default: unknown extends Defaults["hint"] ? string : string | Defaults["hint"];
    };
    persistentHint: unknown extends Defaults["persistentHint"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["persistentHint"] ? boolean : boolean | Defaults["persistentHint"]>;
        default: unknown extends Defaults["persistentHint"] ? boolean : boolean | Defaults["persistentHint"];
    };
    messages: unknown extends Defaults["messages"] ? {
        type: import("vue").PropType<string | readonly string[]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<string | readonly string[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["messages"] ? string | readonly string[] : string | readonly string[] | Defaults["messages"]>;
        default: unknown extends Defaults["messages"] ? string | readonly string[] : Defaults["messages"] | NonNullable<string | readonly string[]>;
    };
    "onClick:prepend": unknown extends Defaults["onClick:prepend"] ? import("vue").PropType<(args_0: MouseEvent) => void> : {
        type: import("vue").PropType<unknown extends Defaults["onClick:prepend"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:prepend"]>;
        default: unknown extends Defaults["onClick:prepend"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:prepend"];
    };
    "onClick:append": unknown extends Defaults["onClick:append"] ? import("vue").PropType<(args_0: MouseEvent) => void> : {
        type: import("vue").PropType<unknown extends Defaults["onClick:append"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:append"]>;
        default: unknown extends Defaults["onClick:append"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:append"];
    };
    appendInnerIcon: unknown extends Defaults["appendInnerIcon"] ? import("vue").PropType<import("../../composables/icons.js").IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["appendInnerIcon"] ? import("../../composables/icons.js").IconValue : Defaults["appendInnerIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["appendInnerIcon"] ? import("../../composables/icons.js").IconValue : Defaults["appendInnerIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    bgColor: unknown extends Defaults["bgColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"]>;
        default: unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"];
    };
    clearable: unknown extends Defaults["clearable"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["clearable"] ? boolean : boolean | Defaults["clearable"]>;
        default: unknown extends Defaults["clearable"] ? boolean : boolean | Defaults["clearable"];
    };
    clearIcon: unknown extends Defaults["clearIcon"] ? {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["clearIcon"] ? import("../../composables/icons.js").IconValue : Defaults["clearIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["clearIcon"] ? import("../../composables/icons.js").IconValue : Defaults["clearIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    active: unknown extends Defaults["active"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"]>;
        default: unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"];
    };
    centerAffix: unknown extends Defaults["centerAffix"] ? {
        type: BooleanConstructor;
        default: undefined;
    } : Omit<{
        type: BooleanConstructor;
        default: undefined;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["centerAffix"] ? boolean : boolean | Defaults["centerAffix"]>;
        default: unknown extends Defaults["centerAffix"] ? boolean : boolean | Defaults["centerAffix"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    baseColor: unknown extends Defaults["baseColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"]>;
        default: unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"];
    };
    dirty: unknown extends Defaults["dirty"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["dirty"] ? boolean : boolean | Defaults["dirty"]>;
        default: unknown extends Defaults["dirty"] ? boolean : boolean | Defaults["dirty"];
    };
    disabled: unknown extends Defaults["disabled"] ? {
        type: BooleanConstructor;
        default: null;
    } : Omit<{
        type: BooleanConstructor;
        default: null;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    glow: unknown extends Defaults["glow"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["glow"] ? boolean : boolean | Defaults["glow"]>;
        default: unknown extends Defaults["glow"] ? boolean : boolean | Defaults["glow"];
    };
    error: unknown extends Defaults["error"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"]>;
        default: unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"];
    };
    flat: unknown extends Defaults["flat"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["flat"] ? boolean : boolean | Defaults["flat"]>;
        default: unknown extends Defaults["flat"] ? boolean : boolean | Defaults["flat"];
    };
    iconColor: unknown extends Defaults["iconColor"] ? (BooleanConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["iconColor"] ? string | boolean : string | boolean | Defaults["iconColor"]>;
        default: unknown extends Defaults["iconColor"] ? string | boolean : Defaults["iconColor"] | NonNullable<string | boolean>;
    };
    label: unknown extends Defaults["label"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["label"] ? string : string | Defaults["label"]>;
        default: unknown extends Defaults["label"] ? string : string | Defaults["label"];
    };
    persistentClear: unknown extends Defaults["persistentClear"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["persistentClear"] ? boolean : boolean | Defaults["persistentClear"]>;
        default: unknown extends Defaults["persistentClear"] ? boolean : boolean | Defaults["persistentClear"];
    };
    prependInnerIcon: unknown extends Defaults["prependInnerIcon"] ? import("vue").PropType<import("../../composables/icons.js").IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["prependInnerIcon"] ? import("../../composables/icons.js").IconValue : Defaults["prependInnerIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["prependInnerIcon"] ? import("../../composables/icons.js").IconValue : Defaults["prependInnerIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    reverse: unknown extends Defaults["reverse"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["reverse"] ? boolean : boolean | Defaults["reverse"]>;
        default: unknown extends Defaults["reverse"] ? boolean : boolean | Defaults["reverse"];
    };
    singleLine: unknown extends Defaults["singleLine"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["singleLine"] ? boolean : boolean | Defaults["singleLine"]>;
        default: unknown extends Defaults["singleLine"] ? boolean : boolean | Defaults["singleLine"];
    };
    variant: unknown extends Defaults["variant"] ? {
        type: import("vue").PropType<"filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined">;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: import("vue").PropType<"filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["variant"] ? "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined" : "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined" | Defaults["variant"]>;
        default: unknown extends Defaults["variant"] ? "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined" : Defaults["variant"] | NonNullable<"filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined">;
    };
    "onClick:clear": unknown extends Defaults["onClick:clear"] ? import("vue").PropType<(args_0: MouseEvent) => void> : {
        type: import("vue").PropType<unknown extends Defaults["onClick:clear"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:clear"]>;
        default: unknown extends Defaults["onClick:clear"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:clear"];
    };
    "onClick:appendInner": unknown extends Defaults["onClick:appendInner"] ? import("vue").PropType<(args_0: MouseEvent) => void> : {
        type: import("vue").PropType<unknown extends Defaults["onClick:appendInner"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:appendInner"]>;
        default: unknown extends Defaults["onClick:appendInner"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:appendInner"];
    };
    "onClick:prependInner": unknown extends Defaults["onClick:prependInner"] ? import("vue").PropType<(args_0: MouseEvent) => void> : {
        type: import("vue").PropType<unknown extends Defaults["onClick:prependInner"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:prependInner"]>;
        default: unknown extends Defaults["onClick:prependInner"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:prependInner"];
    };
    autocomplete: unknown extends Defaults["autocomplete"] ? import("vue").PropType<string> : {
        type: import("vue").PropType<unknown extends Defaults["autocomplete"] ? string : string | Defaults["autocomplete"]>;
        default: unknown extends Defaults["autocomplete"] ? string : string | Defaults["autocomplete"];
    };
    autofocus: unknown extends Defaults["autofocus"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["autofocus"] ? boolean : boolean | Defaults["autofocus"]>;
        default: unknown extends Defaults["autofocus"] ? boolean : boolean | Defaults["autofocus"];
    };
    counter: unknown extends Defaults["counter"] ? (BooleanConstructor | NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["counter"] ? string | number | boolean : string | number | boolean | Defaults["counter"]>;
        default: unknown extends Defaults["counter"] ? string | number | boolean : Defaults["counter"] | NonNullable<string | number | boolean>;
    };
    counterValue: unknown extends Defaults["counterValue"] ? import("vue").PropType<number | ((value: any) => number)> : {
        type: import("vue").PropType<unknown extends Defaults["counterValue"] ? number | ((value: any) => number) : number | ((value: any) => number) | Defaults["counterValue"]>;
        default: unknown extends Defaults["counterValue"] ? number | ((value: any) => number) : Defaults["counterValue"] | NonNullable<number | ((value: any) => number)>;
    };
    prefix: unknown extends Defaults["prefix"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["prefix"] ? string : string | Defaults["prefix"]>;
        default: unknown extends Defaults["prefix"] ? string : string | Defaults["prefix"];
    };
    placeholder: unknown extends Defaults["placeholder"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["placeholder"] ? string : string | Defaults["placeholder"]>;
        default: unknown extends Defaults["placeholder"] ? string : string | Defaults["placeholder"];
    };
    persistentPlaceholder: unknown extends Defaults["persistentPlaceholder"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["persistentPlaceholder"] ? boolean : boolean | Defaults["persistentPlaceholder"]>;
        default: unknown extends Defaults["persistentPlaceholder"] ? boolean : boolean | Defaults["persistentPlaceholder"];
    };
    persistentCounter: unknown extends Defaults["persistentCounter"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["persistentCounter"] ? boolean : boolean | Defaults["persistentCounter"]>;
        default: unknown extends Defaults["persistentCounter"] ? boolean : boolean | Defaults["persistentCounter"];
    };
    suffix: unknown extends Defaults["suffix"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["suffix"] ? string : string | Defaults["suffix"]>;
        default: unknown extends Defaults["suffix"] ? string : string | Defaults["suffix"];
    };
    role: unknown extends Defaults["role"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["role"] ? string : string | Defaults["role"]>;
        default: unknown extends Defaults["role"] ? string : string | Defaults["role"];
    };
    type: unknown extends Defaults["type"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["type"] ? string : string | Defaults["type"]>;
        default: unknown extends Defaults["type"] ? string : string | Defaults["type"];
    };
    modelModifiers: unknown extends Defaults["modelModifiers"] ? import("vue").PropType<Record<string, boolean>> : {
        type: import("vue").PropType<unknown extends Defaults["modelModifiers"] ? Record<string, boolean> : Record<string, boolean> | Defaults["modelModifiers"]>;
        default: unknown extends Defaults["modelModifiers"] ? Record<string, boolean> : Record<string, boolean> | Defaults["modelModifiers"];
    };
    returnMaskedValue: unknown extends Defaults["returnMaskedValue"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["returnMaskedValue"] ? boolean : boolean | Defaults["returnMaskedValue"]>;
        default: unknown extends Defaults["returnMaskedValue"] ? boolean : boolean | Defaults["returnMaskedValue"];
    };
};
export declare const VMaskInput: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
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
        returnMaskedValue: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        mask?: string | import("../../composables/mask/index.js").MaskOptions | undefined;
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
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "prepend-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "append-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            default?: ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | undefined;
            counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            id: Readonly<import("vue").Ref<string, string>>;
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            default?: false | ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | undefined;
            counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:clear"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: {
            id: Readonly<import("vue").Ref<string, string>>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
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
                prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                "prepend-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                "append-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                default?: ((arg: {
                    id: Readonly<import("vue").Ref<string, string>>;
                }) => import("vue").VNodeChild) | undefined;
                counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                "prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                "append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                label?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                default?: false | ((arg: {
                    id: Readonly<import("vue").Ref<string, string>>;
                }) => import("vue").VNodeChild) | undefined;
                counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
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
            "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:clear"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "active" | "autofocus" | "centerAffix" | "clearIcon" | "clearable" | "density" | "dirty" | "disabled" | "error" | "errorMessages" | "flat" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentClear" | "persistentCounter" | "persistentHint" | "persistentPlaceholder" | "readonly" | "reverse" | "rounded" | "rules" | "singleLine" | "style" | "tile" | "type" | "variant">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            "prepend-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            "append-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
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
            counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
                prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                "prepend-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                "append-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                default?: ((arg: {
                    id: Readonly<import("vue").Ref<string, string>>;
                }) => import("vue").VNodeChild) | undefined;
                counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                "prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                "append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                label?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                default?: false | ((arg: {
                    id: Readonly<import("vue").Ref<string, string>>;
                }) => import("vue").VNodeChild) | undefined;
                counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:clear"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
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
                default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
                default: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
            $nextTick: typeof nextTick;
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
        }, import("../../components/VInput/VInput.js").VInputSlots>, "$children" | "appendIcon" | "baseColor" | "class" | "color" | "hideDetails" | "hint" | "iconColor" | "id" | "label" | "maxWidth" | "minWidth" | "modelValue" | "name" | "onClick:append" | "onClick:prepend" | "onUpdate:focused" | "onUpdate:modelValue" | "prependIcon" | "theme" | "v-slot:append" | "v-slot:default" | "v-slot:details" | "v-slot:message" | "v-slot:prepend" | "v-slots" | "validateOn" | "validationValue" | "width" | ("centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style") | keyof import("vue").VNodeProps>, `$${any}`> & Omit<Omit<{
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
                clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                "prepend-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                "append-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                default?: ((arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
                clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                "prepend-inner": (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                "append-inner": (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                default: (arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
            $nextTick: typeof nextTick;
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
        }, import("../../components/VField/VField.js").VFieldSlots>, "$children" | "appendInnerIcon" | "baseColor" | "bgColor" | "class" | "color" | "iconColor" | "id" | "label" | "labelId" | "loading" | "modelValue" | "onClick:appendInner" | "onClick:clear" | "onClick:prependInner" | "onUpdate:focused" | "onUpdate:modelValue" | "prependInnerIcon" | "theme" | "v-slot:append-inner" | "v-slot:clear" | "v-slot:default" | "v-slot:label" | "v-slot:loader" | "v-slot:prepend-inner" | "v-slots" | ("active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant") | keyof import("vue").VNodeProps>, `$${any}`> & {
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
            prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            "prepend-inner": (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            "append-inner": (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
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
            counter: (arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        $nextTick: typeof nextTick;
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
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "prepend-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "append-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            default?: ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | undefined;
            counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            id: Readonly<import("vue").Ref<string, string>>;
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            default?: false | ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | undefined;
            counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:clear"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: {
            id: Readonly<import("vue").Ref<string, string>>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
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
            default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
            default: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        $nextTick: typeof nextTick;
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
    }, import("../../components/VInput/VInput.js").VInputSlots>, "$children" | "appendIcon" | "baseColor" | "class" | "color" | "hideDetails" | "hint" | "iconColor" | "id" | "label" | "maxWidth" | "minWidth" | "modelValue" | "name" | "onClick:append" | "onClick:prepend" | "onUpdate:focused" | "onUpdate:modelValue" | "prependIcon" | "theme" | "v-slot:append" | "v-slot:default" | "v-slot:details" | "v-slot:message" | "v-slot:prepend" | "v-slots" | "validateOn" | "validationValue" | "width" | ("centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style") | keyof import("vue").VNodeProps>, `$${any}`> & Omit<Omit<{
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
            clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            "prepend-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            "append-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            default?: ((arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
            clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            "prepend-inner": (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            "append-inner": (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            default: (arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        $nextTick: typeof nextTick;
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
    }, import("../../components/VField/VField.js").VFieldSlots>, "$children" | "appendInnerIcon" | "baseColor" | "bgColor" | "class" | "color" | "iconColor" | "id" | "label" | "labelId" | "loading" | "modelValue" | "onClick:appendInner" | "onClick:clear" | "onClick:prependInner" | "onUpdate:focused" | "onUpdate:modelValue" | "prependInnerIcon" | "theme" | "v-slot:append-inner" | "v-slot:clear" | "v-slot:default" | "v-slot:label" | "v-slot:loader" | "v-slot:prepend-inner" | "v-slots" | ("active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant") | keyof import("vue").VNodeProps>, `$${any}`> & {
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
                default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
                default: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
            $nextTick: typeof nextTick;
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
        }, import("../../components/VInput/VInput.js").VInputSlots>, "$children" | "appendIcon" | "baseColor" | "class" | "color" | "hideDetails" | "hint" | "iconColor" | "id" | "label" | "maxWidth" | "minWidth" | "modelValue" | "name" | "onClick:append" | "onClick:prepend" | "onUpdate:focused" | "onUpdate:modelValue" | "prependIcon" | "theme" | "v-slot:append" | "v-slot:default" | "v-slot:details" | "v-slot:message" | "v-slot:prepend" | "v-slots" | "validateOn" | "validationValue" | "width" | ("centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style") | keyof import("vue").VNodeProps>, `$${any}`> & Omit<Omit<{
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
                clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                "prepend-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                "append-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                default?: ((arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
                clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                "prepend-inner": (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                "append-inner": (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                default: (arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
            $nextTick: typeof nextTick;
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
        }, import("../../components/VField/VField.js").VFieldSlots>, "$children" | "appendInnerIcon" | "baseColor" | "bgColor" | "class" | "color" | "iconColor" | "id" | "label" | "labelId" | "loading" | "modelValue" | "onClick:appendInner" | "onClick:clear" | "onClick:prependInner" | "onUpdate:focused" | "onUpdate:modelValue" | "prependInnerIcon" | "theme" | "v-slot:append-inner" | "v-slot:clear" | "v-slot:default" | "v-slot:label" | "v-slot:loader" | "v-slot:prepend-inner" | "v-slots" | ("active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant") | keyof import("vue").VNodeProps>, `$${any}`> & {
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
        "update:modelValue": (val: string) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
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
        returnMaskedValue: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "prepend-inner": (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "append-inner": (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
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
        counter: (arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        returnMaskedValue: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        mask?: string | import("../../composables/mask/index.js").MaskOptions | undefined;
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
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "prepend-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "append-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            default?: ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | undefined;
            counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            id: Readonly<import("vue").Ref<string, string>>;
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            default?: false | ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | undefined;
            counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:clear"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: {
            id: Readonly<import("vue").Ref<string, string>>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
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
                prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                "prepend-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                "append-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                default?: ((arg: {
                    id: Readonly<import("vue").Ref<string, string>>;
                }) => import("vue").VNodeChild) | undefined;
                counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                "prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                "append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                label?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                default?: false | ((arg: {
                    id: Readonly<import("vue").Ref<string, string>>;
                }) => import("vue").VNodeChild) | undefined;
                counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
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
            "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:clear"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "active" | "autofocus" | "centerAffix" | "clearIcon" | "clearable" | "density" | "dirty" | "disabled" | "error" | "errorMessages" | "flat" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentClear" | "persistentCounter" | "persistentHint" | "persistentPlaceholder" | "readonly" | "reverse" | "rounded" | "rules" | "singleLine" | "style" | "tile" | "type" | "variant">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            "prepend-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            "append-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
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
            counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
                prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                "prepend-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                "append-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                default?: ((arg: {
                    id: Readonly<import("vue").Ref<string, string>>;
                }) => import("vue").VNodeChild) | undefined;
                counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                "prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                "append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                label?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                default?: false | ((arg: {
                    id: Readonly<import("vue").Ref<string, string>>;
                }) => import("vue").VNodeChild) | undefined;
                counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:clear"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
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
                default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
                default: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
            $nextTick: typeof nextTick;
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
        }, import("../../components/VInput/VInput.js").VInputSlots>, "$children" | "appendIcon" | "baseColor" | "class" | "color" | "hideDetails" | "hint" | "iconColor" | "id" | "label" | "maxWidth" | "minWidth" | "modelValue" | "name" | "onClick:append" | "onClick:prepend" | "onUpdate:focused" | "onUpdate:modelValue" | "prependIcon" | "theme" | "v-slot:append" | "v-slot:default" | "v-slot:details" | "v-slot:message" | "v-slot:prepend" | "v-slots" | "validateOn" | "validationValue" | "width" | ("centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style") | keyof import("vue").VNodeProps>, `$${any}`> & Omit<Omit<{
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
                clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                "prepend-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                "append-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                default?: ((arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
                clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                "prepend-inner": (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                "append-inner": (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                default: (arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
            $nextTick: typeof nextTick;
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
        }, import("../../components/VField/VField.js").VFieldSlots>, "$children" | "appendInnerIcon" | "baseColor" | "bgColor" | "class" | "color" | "iconColor" | "id" | "label" | "labelId" | "loading" | "modelValue" | "onClick:appendInner" | "onClick:clear" | "onClick:prependInner" | "onUpdate:focused" | "onUpdate:modelValue" | "prependInnerIcon" | "theme" | "v-slot:append-inner" | "v-slot:clear" | "v-slot:default" | "v-slot:label" | "v-slot:loader" | "v-slot:prepend-inner" | "v-slots" | ("active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant") | keyof import("vue").VNodeProps>, `$${any}`> & {
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
            prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            "prepend-inner": (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            "append-inner": (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
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
            counter: (arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        $nextTick: typeof nextTick;
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
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "prepend-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "append-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            default?: ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | undefined;
            counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            id: Readonly<import("vue").Ref<string, string>>;
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            default?: false | ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | undefined;
            counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:clear"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: {
            id: Readonly<import("vue").Ref<string, string>>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
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
            default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
            default: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        $nextTick: typeof nextTick;
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
    }, import("../../components/VInput/VInput.js").VInputSlots>, "$children" | "appendIcon" | "baseColor" | "class" | "color" | "hideDetails" | "hint" | "iconColor" | "id" | "label" | "maxWidth" | "minWidth" | "modelValue" | "name" | "onClick:append" | "onClick:prepend" | "onUpdate:focused" | "onUpdate:modelValue" | "prependIcon" | "theme" | "v-slot:append" | "v-slot:default" | "v-slot:details" | "v-slot:message" | "v-slot:prepend" | "v-slots" | "validateOn" | "validationValue" | "width" | ("centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style") | keyof import("vue").VNodeProps>, `$${any}`> & Omit<Omit<{
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
            clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            "prepend-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            "append-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            default?: ((arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
            clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            "prepend-inner": (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            "append-inner": (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            default: (arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        $nextTick: typeof nextTick;
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
    }, import("../../components/VField/VField.js").VFieldSlots>, "$children" | "appendInnerIcon" | "baseColor" | "bgColor" | "class" | "color" | "iconColor" | "id" | "label" | "labelId" | "loading" | "modelValue" | "onClick:appendInner" | "onClick:clear" | "onClick:prependInner" | "onUpdate:focused" | "onUpdate:modelValue" | "prependInnerIcon" | "theme" | "v-slot:append-inner" | "v-slot:clear" | "v-slot:default" | "v-slot:label" | "v-slot:loader" | "v-slot:prepend-inner" | "v-slots" | ("active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant") | keyof import("vue").VNodeProps>, `$${any}`> & {
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
                default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
                default: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
            $nextTick: typeof nextTick;
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
        }, import("../../components/VInput/VInput.js").VInputSlots>, "$children" | "appendIcon" | "baseColor" | "class" | "color" | "hideDetails" | "hint" | "iconColor" | "id" | "label" | "maxWidth" | "minWidth" | "modelValue" | "name" | "onClick:append" | "onClick:prepend" | "onUpdate:focused" | "onUpdate:modelValue" | "prependIcon" | "theme" | "v-slot:append" | "v-slot:default" | "v-slot:details" | "v-slot:message" | "v-slot:prepend" | "v-slots" | "validateOn" | "validationValue" | "width" | ("centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style") | keyof import("vue").VNodeProps>, `$${any}`> & Omit<Omit<{
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
                clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                "prepend-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                "append-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[]) | undefined;
                default?: ((arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
                clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                "prepend-inner": (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                "append-inner": (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>[];
                default: (arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
            $nextTick: typeof nextTick;
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
        }, import("../../components/VField/VField.js").VFieldSlots>, "$children" | "appendInnerIcon" | "baseColor" | "bgColor" | "class" | "color" | "iconColor" | "id" | "label" | "labelId" | "loading" | "modelValue" | "onClick:appendInner" | "onClick:clear" | "onClick:prependInner" | "onUpdate:focused" | "onUpdate:modelValue" | "prependInnerIcon" | "theme" | "v-slot:append-inner" | "v-slot:clear" | "v-slot:default" | "v-slot:label" | "v-slot:loader" | "v-slot:prepend-inner" | "v-slots" | ("active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant") | keyof import("vue").VNodeProps>, `$${any}`> & {
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
        returnMaskedValue: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
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
    returnMaskedValue: boolean;
} & {
    theme?: string | undefined;
    class?: any;
    mask?: string | import("../../composables/mask/index.js").MaskOptions | undefined;
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
        prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "prepend-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "append-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        default?: ((arg: {
            id: Readonly<import("vue").Ref<string, string>>;
        }) => import("vue").VNodeChild) | undefined;
        counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | ((arg: {
        id: Readonly<import("vue").Ref<string, string>>;
    }) => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        clear?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        label?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        default?: false | ((arg: {
            id: Readonly<import("vue").Ref<string, string>>;
        }) => import("vue").VNodeChild) | undefined;
        counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:clear"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
        props: Record<string, any>;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | ((arg: {
        id: Readonly<import("vue").Ref<string, string>>;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:label"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
        label: string | undefined;
        props: Record<string, any>;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
    "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((val: string) => any) | undefined;
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
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "prepend-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "append-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            default?: ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | undefined;
            counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            id: Readonly<import("vue").Ref<string, string>>;
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            default?: false | ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | undefined;
            counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
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
        "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:clear"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: {
            id: Readonly<import("vue").Ref<string, string>>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "active" | "autofocus" | "centerAffix" | "clearIcon" | "clearable" | "density" | "dirty" | "disabled" | "error" | "errorMessages" | "flat" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentClear" | "persistentCounter" | "persistentHint" | "persistentPlaceholder" | "readonly" | "reverse" | "rounded" | "rules" | "singleLine" | "style" | "tile" | "type" | "variant">;
    $attrs: {
        [x: string]: unknown;
    };
    $refs: {
        [x: string]: unknown;
    };
    $slots: Readonly<{
        prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        "prepend-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        "append-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
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
        counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "prepend-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "append-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            default?: ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | undefined;
            counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            id: Readonly<import("vue").Ref<string, string>>;
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            default?: false | ((arg: {
                id: Readonly<import("vue").Ref<string, string>>;
            }) => import("vue").VNodeChild) | undefined;
            counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:clear"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: {
            id: Readonly<import("vue").Ref<string, string>>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
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
            default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
            default: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        $nextTick: typeof nextTick;
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
    }, import("../../components/VInput/VInput.js").VInputSlots>, "$children" | "appendIcon" | "baseColor" | "class" | "color" | "hideDetails" | "hint" | "iconColor" | "id" | "label" | "maxWidth" | "minWidth" | "modelValue" | "name" | "onClick:append" | "onClick:prepend" | "onUpdate:focused" | "onUpdate:modelValue" | "prependIcon" | "theme" | "v-slot:append" | "v-slot:default" | "v-slot:details" | "v-slot:message" | "v-slot:prepend" | "v-slots" | "validateOn" | "validationValue" | "width" | ("centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style") | keyof import("vue").VNodeProps>, `$${any}`> & Omit<Omit<{
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
            clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            "prepend-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            "append-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            default?: ((arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
            clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            "prepend-inner": (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            "append-inner": (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            default: (arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        $nextTick: typeof nextTick;
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
    }, import("../../components/VField/VField.js").VFieldSlots>, "$children" | "appendInnerIcon" | "baseColor" | "bgColor" | "class" | "color" | "iconColor" | "id" | "label" | "labelId" | "loading" | "modelValue" | "onClick:appendInner" | "onClick:clear" | "onClick:prependInner" | "onUpdate:focused" | "onUpdate:modelValue" | "prependInnerIcon" | "theme" | "v-slot:append-inner" | "v-slot:clear" | "v-slot:default" | "v-slot:label" | "v-slot:loader" | "v-slot:prepend-inner" | "v-slots" | ("active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant") | keyof import("vue").VNodeProps>, `$${any}`> & {
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
        prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "prepend-inner": (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "append-inner": (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
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
        counter: (arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
    $nextTick: typeof nextTick;
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
        prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "prepend-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "append-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        default?: ((arg: {
            id: Readonly<import("vue").Ref<string, string>>;
        }) => import("vue").VNodeChild) | undefined;
        counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | ((arg: {
        id: Readonly<import("vue").Ref<string, string>>;
    }) => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        clear?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        label?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        default?: false | ((arg: {
            id: Readonly<import("vue").Ref<string, string>>;
        }) => import("vue").VNodeChild) | undefined;
        counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:clear"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
        props: Record<string, any>;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | ((arg: {
        id: Readonly<import("vue").Ref<string, string>>;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:label"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
        label: string | undefined;
        props: Record<string, any>;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
    "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
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
        default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        default: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
    $nextTick: typeof nextTick;
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
}, import("../../components/VInput/VInput.js").VInputSlots>, "$children" | "appendIcon" | "baseColor" | "class" | "color" | "hideDetails" | "hint" | "iconColor" | "id" | "label" | "maxWidth" | "minWidth" | "modelValue" | "name" | "onClick:append" | "onClick:prepend" | "onUpdate:focused" | "onUpdate:modelValue" | "prependIcon" | "theme" | "v-slot:append" | "v-slot:default" | "v-slot:details" | "v-slot:message" | "v-slot:prepend" | "v-slots" | "validateOn" | "validationValue" | "width" | ("centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style") | keyof import("vue").VNodeProps>, `$${any}`> & Omit<Omit<{
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
        clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        "prepend-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        "append-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        default?: ((arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "prepend-inner": (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "append-inner": (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        default: (arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
    $nextTick: typeof nextTick;
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
}, import("../../components/VField/VField.js").VFieldSlots>, "$children" | "appendInnerIcon" | "baseColor" | "bgColor" | "class" | "color" | "iconColor" | "id" | "label" | "labelId" | "loading" | "modelValue" | "onClick:appendInner" | "onClick:clear" | "onClick:prependInner" | "onUpdate:focused" | "onUpdate:modelValue" | "prependInnerIcon" | "theme" | "v-slot:append-inner" | "v-slot:clear" | "v-slot:default" | "v-slot:label" | "v-slot:loader" | "v-slot:prepend-inner" | "v-slots" | ("active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant") | keyof import("vue").VNodeProps>, `$${any}`> & {
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
            default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
            default: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        $nextTick: typeof nextTick;
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
    }, import("../../components/VInput/VInput.js").VInputSlots>, "$children" | "appendIcon" | "baseColor" | "class" | "color" | "hideDetails" | "hint" | "iconColor" | "id" | "label" | "maxWidth" | "minWidth" | "modelValue" | "name" | "onClick:append" | "onClick:prepend" | "onUpdate:focused" | "onUpdate:modelValue" | "prependIcon" | "theme" | "v-slot:append" | "v-slot:default" | "v-slot:details" | "v-slot:message" | "v-slot:prepend" | "v-slots" | "validateOn" | "validationValue" | "width" | ("centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style") | keyof import("vue").VNodeProps>, `$${any}`> & Omit<Omit<{
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
            clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            "prepend-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            "append-inner"?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            default?: ((arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
            clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            "prepend-inner": (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            "append-inner": (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            default: (arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        $nextTick: typeof nextTick;
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
    }, import("../../components/VField/VField.js").VFieldSlots>, "$children" | "appendInnerIcon" | "baseColor" | "bgColor" | "class" | "color" | "iconColor" | "id" | "label" | "labelId" | "loading" | "modelValue" | "onClick:appendInner" | "onClick:clear" | "onClick:prependInner" | "onUpdate:focused" | "onUpdate:modelValue" | "prependInnerIcon" | "theme" | "v-slot:append-inner" | "v-slot:clear" | "v-slot:default" | "v-slot:label" | "v-slot:loader" | "v-slot:prepend-inner" | "v-slots" | ("active" | "centerAffix" | "clearIcon" | "clearable" | "details" | "dirty" | "disabled" | "error" | "flat" | "focused" | "glow" | "persistentClear" | "reverse" | "rounded" | "singleLine" | "style" | "tile" | "variant") | keyof import("vue").VNodeProps>, `$${any}`> & {
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
    returnMaskedValue: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
        props: Record<string, any>;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "prepend-inner": (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "append-inner": (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
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
    counter: (arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    mask: import("vue").PropType<string | import("../../composables/mask/index.js").MaskOptions>;
    focused: BooleanConstructor;
    "onUpdate:focused": import("vue").PropType<(args_0: boolean) => void>;
    errorMessages: {
        type: import("vue").PropType<string | readonly string[] | null>;
        default: () => never[];
    };
    maxErrors: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    name: StringConstructor;
    readonly: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
    rules: {
        type: import("vue").PropType<readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[]>;
        default: () => never[];
    };
    modelValue: null;
    validateOn: import("vue").PropType<("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined>;
    validationValue: null;
    density: {
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    rounded: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    maxWidth: (NumberConstructor | StringConstructor)[];
    minWidth: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    loading: (BooleanConstructor | StringConstructor)[];
    id: StringConstructor;
    appendIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    prependIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    hideDetails: import("vue").PropType<"auto" | boolean>;
    hideSpinButtons: BooleanConstructor;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    messages: {
        type: import("vue").PropType<string | readonly string[]>;
        default: () => never[];
    };
    "onClick:prepend": import("vue").PropType<(args_0: MouseEvent) => void>;
    "onClick:append": import("vue").PropType<(args_0: MouseEvent) => void>;
    appendInnerIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    bgColor: StringConstructor;
    clearable: BooleanConstructor;
    clearIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    active: BooleanConstructor;
    centerAffix: {
        type: BooleanConstructor;
        default: undefined;
    };
    color: StringConstructor;
    baseColor: StringConstructor;
    dirty: BooleanConstructor;
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    glow: BooleanConstructor;
    error: BooleanConstructor;
    flat: BooleanConstructor;
    iconColor: (BooleanConstructor | StringConstructor)[];
    label: StringConstructor;
    persistentClear: BooleanConstructor;
    prependInnerIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    reverse: BooleanConstructor;
    singleLine: BooleanConstructor;
    variant: {
        type: import("vue").PropType<"filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined">;
        default: string;
        validator: (v: any) => boolean;
    };
    "onClick:clear": import("vue").PropType<(args_0: MouseEvent) => void>;
    "onClick:appendInner": import("vue").PropType<(args_0: MouseEvent) => void>;
    "onClick:prependInner": import("vue").PropType<(args_0: MouseEvent) => void>;
    autocomplete: import("vue").PropType<string>;
    autofocus: BooleanConstructor;
    counter: (BooleanConstructor | NumberConstructor | StringConstructor)[];
    counterValue: import("vue").PropType<number | ((value: any) => number)>;
    prefix: StringConstructor;
    placeholder: StringConstructor;
    persistentPlaceholder: BooleanConstructor;
    persistentCounter: BooleanConstructor;
    suffix: StringConstructor;
    role: StringConstructor;
    type: {
        type: StringConstructor;
        default: string;
    };
    modelModifiers: import("vue").PropType<Record<string, boolean>>;
    returnMaskedValue: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    mask: import("vue").PropType<string | import("../../composables/mask/index.js").MaskOptions>;
    focused: BooleanConstructor;
    "onUpdate:focused": import("vue").PropType<(args_0: boolean) => void>;
    errorMessages: {
        type: import("vue").PropType<string | readonly string[] | null>;
        default: () => never[];
    };
    maxErrors: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    name: StringConstructor;
    readonly: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
    rules: {
        type: import("vue").PropType<readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[]>;
        default: () => never[];
    };
    modelValue: null;
    validateOn: import("vue").PropType<("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined>;
    validationValue: null;
    density: {
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    rounded: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    maxWidth: (NumberConstructor | StringConstructor)[];
    minWidth: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    loading: (BooleanConstructor | StringConstructor)[];
    id: StringConstructor;
    appendIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    prependIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    hideDetails: import("vue").PropType<"auto" | boolean>;
    hideSpinButtons: BooleanConstructor;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    messages: {
        type: import("vue").PropType<string | readonly string[]>;
        default: () => never[];
    };
    "onClick:prepend": import("vue").PropType<(args_0: MouseEvent) => void>;
    "onClick:append": import("vue").PropType<(args_0: MouseEvent) => void>;
    appendInnerIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    bgColor: StringConstructor;
    clearable: BooleanConstructor;
    clearIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    active: BooleanConstructor;
    centerAffix: {
        type: BooleanConstructor;
        default: undefined;
    };
    color: StringConstructor;
    baseColor: StringConstructor;
    dirty: BooleanConstructor;
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    glow: BooleanConstructor;
    error: BooleanConstructor;
    flat: BooleanConstructor;
    iconColor: (BooleanConstructor | StringConstructor)[];
    label: StringConstructor;
    persistentClear: BooleanConstructor;
    prependInnerIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    reverse: BooleanConstructor;
    singleLine: BooleanConstructor;
    variant: {
        type: import("vue").PropType<"filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined">;
        default: string;
        validator: (v: any) => boolean;
    };
    "onClick:clear": import("vue").PropType<(args_0: MouseEvent) => void>;
    "onClick:appendInner": import("vue").PropType<(args_0: MouseEvent) => void>;
    "onClick:prependInner": import("vue").PropType<(args_0: MouseEvent) => void>;
    autocomplete: import("vue").PropType<string>;
    autofocus: BooleanConstructor;
    counter: (BooleanConstructor | NumberConstructor | StringConstructor)[];
    counterValue: import("vue").PropType<number | ((value: any) => number)>;
    prefix: StringConstructor;
    placeholder: StringConstructor;
    persistentPlaceholder: BooleanConstructor;
    persistentCounter: BooleanConstructor;
    suffix: StringConstructor;
    role: StringConstructor;
    type: {
        type: StringConstructor;
        default: string;
    };
    modelModifiers: import("vue").PropType<Record<string, boolean>>;
    returnMaskedValue: BooleanConstructor;
}>>;
export type VMaskInput = InstanceType<typeof VMaskInput>;
