// Styles


// Utilities
import { nextTick } from 'vue';
// Types
import type { PropType } from 'vue';
import type { VCounterSlot } from '../VCounter/VCounter.js';
import type { VInputSlots } from '../VInput/VInput.js';
export declare const makeVTextareaProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
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
    autoGrow?: unknown;
    autofocus?: unknown;
    counter?: unknown;
    counterValue?: unknown;
    prefix?: unknown;
    placeholder?: unknown;
    persistentPlaceholder?: unknown;
    persistentCounter?: unknown;
    noResize?: unknown;
    rows?: unknown;
    maxHeight?: unknown;
    maxRows?: unknown;
    suffix?: unknown;
    modelModifiers?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
    class: unknown extends Defaults["class"] ? PropType<any> : {
        type: PropType<unknown extends Defaults["class"] ? any : any>;
        default: unknown extends Defaults["class"] ? any : any;
    };
    style: unknown extends Defaults["style"] ? {
        type: PropType<import("vue").StyleValue>;
        default: null;
    } : Omit<{
        type: PropType<import("vue").StyleValue>;
        default: null;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["style"] ? import("vue").StyleValue : Defaults["style"] | import("vue").StyleValue>;
        default: unknown extends Defaults["style"] ? import("vue").StyleValue : Defaults["style"] | NonNullable<import("vue").StyleValue>;
    };
    focused: unknown extends Defaults["focused"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["focused"] ? boolean : boolean | Defaults["focused"]>;
        default: unknown extends Defaults["focused"] ? boolean : boolean | Defaults["focused"];
    };
    "onUpdate:focused": unknown extends Defaults["onUpdate:focused"] ? PropType<(args_0: boolean) => void> : {
        type: PropType<unknown extends Defaults["onUpdate:focused"] ? (args_0: boolean) => void : ((args_0: boolean) => void) | Defaults["onUpdate:focused"]>;
        default: unknown extends Defaults["onUpdate:focused"] ? (args_0: boolean) => void : ((args_0: boolean) => void) | Defaults["onUpdate:focused"];
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
        type: PropType<readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["rules"] ? readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[] : readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[] | Defaults["rules"]>;
        default: unknown extends Defaults["rules"] ? readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[] : readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[] | Defaults["rules"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? null : {
        type: PropType<unknown extends Defaults["modelValue"] ? any : any>;
        default: unknown extends Defaults["modelValue"] ? any : any;
    };
    validateOn: unknown extends Defaults["validateOn"] ? PropType<("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined> : {
        type: PropType<unknown extends Defaults["validateOn"] ? ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined : Defaults["validateOn"] | ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined>;
        default: unknown extends Defaults["validateOn"] ? ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined : Defaults["validateOn"] | NonNullable<("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined>;
    };
    validationValue: unknown extends Defaults["validationValue"] ? null : {
        type: PropType<unknown extends Defaults["validationValue"] ? any : any>;
        default: unknown extends Defaults["validationValue"] ? any : any;
    };
    density: unknown extends Defaults["density"] ? {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["density"] ? import("../../composables/density.js").Density : Defaults["density"] | import("../../composables/density.js").Density>;
        default: unknown extends Defaults["density"] ? import("../../composables/density.js").Density : Defaults["density"] | NonNullable<import("../../composables/density.js").Density>;
    };
    rounded: unknown extends Defaults["rounded"] ? {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    } : Omit<{
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["rounded"] ? string | number | boolean : string | number | boolean | Defaults["rounded"]>;
        default: unknown extends Defaults["rounded"] ? string | number | boolean : Defaults["rounded"] | NonNullable<string | number | boolean>;
    };
    tile: unknown extends Defaults["tile"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["tile"] ? boolean : boolean | Defaults["tile"]>;
        default: unknown extends Defaults["tile"] ? boolean : boolean | Defaults["tile"];
    };
    maxWidth: unknown extends Defaults["maxWidth"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["maxWidth"] ? string | number : string | number | Defaults["maxWidth"]>;
        default: unknown extends Defaults["maxWidth"] ? string | number : Defaults["maxWidth"] | NonNullable<string | number>;
    };
    minWidth: unknown extends Defaults["minWidth"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["minWidth"] ? string | number : string | number | Defaults["minWidth"]>;
        default: unknown extends Defaults["minWidth"] ? string | number : Defaults["minWidth"] | NonNullable<string | number>;
    };
    width: unknown extends Defaults["width"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : Defaults["width"] | NonNullable<string | number>;
    };
    loading: unknown extends Defaults["loading"] ? (BooleanConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["loading"] ? string | boolean : string | boolean | Defaults["loading"]>;
        default: unknown extends Defaults["loading"] ? string | boolean : Defaults["loading"] | NonNullable<string | boolean>;
    };
    id: unknown extends Defaults["id"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["id"] ? string : string | Defaults["id"]>;
        default: unknown extends Defaults["id"] ? string : string | Defaults["id"];
    };
    appendIcon: unknown extends Defaults["appendIcon"] ? PropType<import("../../composables/icons.js").IconValue> : {
        type: PropType<unknown extends Defaults["appendIcon"] ? import("../../composables/icons.js").IconValue : Defaults["appendIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["appendIcon"] ? import("../../composables/icons.js").IconValue : Defaults["appendIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    prependIcon: unknown extends Defaults["prependIcon"] ? PropType<import("../../composables/icons.js").IconValue> : {
        type: PropType<unknown extends Defaults["prependIcon"] ? import("../../composables/icons.js").IconValue : Defaults["prependIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["prependIcon"] ? import("../../composables/icons.js").IconValue : Defaults["prependIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    hideDetails: unknown extends Defaults["hideDetails"] ? PropType<"auto" | boolean> : {
        type: PropType<unknown extends Defaults["hideDetails"] ? "auto" | boolean : "auto" | boolean | Defaults["hideDetails"]>;
        default: unknown extends Defaults["hideDetails"] ? "auto" | boolean : Defaults["hideDetails"] | NonNullable<"auto" | boolean>;
    };
    hideSpinButtons: unknown extends Defaults["hideSpinButtons"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideSpinButtons"] ? boolean : boolean | Defaults["hideSpinButtons"]>;
        default: unknown extends Defaults["hideSpinButtons"] ? boolean : boolean | Defaults["hideSpinButtons"];
    };
    hint: unknown extends Defaults["hint"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["hint"] ? string : string | Defaults["hint"]>;
        default: unknown extends Defaults["hint"] ? string : string | Defaults["hint"];
    };
    persistentHint: unknown extends Defaults["persistentHint"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["persistentHint"] ? boolean : boolean | Defaults["persistentHint"]>;
        default: unknown extends Defaults["persistentHint"] ? boolean : boolean | Defaults["persistentHint"];
    };
    messages: unknown extends Defaults["messages"] ? {
        type: PropType<string | readonly string[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<string | readonly string[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["messages"] ? string | readonly string[] : string | readonly string[] | Defaults["messages"]>;
        default: unknown extends Defaults["messages"] ? string | readonly string[] : Defaults["messages"] | NonNullable<string | readonly string[]>;
    };
    "onClick:prepend": unknown extends Defaults["onClick:prepend"] ? PropType<(args_0: MouseEvent) => void> : {
        type: PropType<unknown extends Defaults["onClick:prepend"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:prepend"]>;
        default: unknown extends Defaults["onClick:prepend"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:prepend"];
    };
    "onClick:append": unknown extends Defaults["onClick:append"] ? PropType<(args_0: MouseEvent) => void> : {
        type: PropType<unknown extends Defaults["onClick:append"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:append"]>;
        default: unknown extends Defaults["onClick:append"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:append"];
    };
    appendInnerIcon: unknown extends Defaults["appendInnerIcon"] ? PropType<import("../../composables/icons.js").IconValue> : {
        type: PropType<unknown extends Defaults["appendInnerIcon"] ? import("../../composables/icons.js").IconValue : Defaults["appendInnerIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["appendInnerIcon"] ? import("../../composables/icons.js").IconValue : Defaults["appendInnerIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    bgColor: unknown extends Defaults["bgColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"]>;
        default: unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"];
    };
    clearable: unknown extends Defaults["clearable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["clearable"] ? boolean : boolean | Defaults["clearable"]>;
        default: unknown extends Defaults["clearable"] ? boolean : boolean | Defaults["clearable"];
    };
    clearIcon: unknown extends Defaults["clearIcon"] ? {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["clearIcon"] ? import("../../composables/icons.js").IconValue : Defaults["clearIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["clearIcon"] ? import("../../composables/icons.js").IconValue : Defaults["clearIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    active: unknown extends Defaults["active"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"]>;
        default: unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"];
    };
    centerAffix: unknown extends Defaults["centerAffix"] ? {
        type: BooleanConstructor;
        default: undefined;
    } : Omit<{
        type: BooleanConstructor;
        default: undefined;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["centerAffix"] ? boolean : boolean | Defaults["centerAffix"]>;
        default: unknown extends Defaults["centerAffix"] ? boolean : boolean | Defaults["centerAffix"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    baseColor: unknown extends Defaults["baseColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"]>;
        default: unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"];
    };
    dirty: unknown extends Defaults["dirty"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["dirty"] ? boolean : boolean | Defaults["dirty"]>;
        default: unknown extends Defaults["dirty"] ? boolean : boolean | Defaults["dirty"];
    };
    disabled: unknown extends Defaults["disabled"] ? {
        type: BooleanConstructor;
        default: null;
    } : Omit<{
        type: BooleanConstructor;
        default: null;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    glow: unknown extends Defaults["glow"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["glow"] ? boolean : boolean | Defaults["glow"]>;
        default: unknown extends Defaults["glow"] ? boolean : boolean | Defaults["glow"];
    };
    error: unknown extends Defaults["error"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"]>;
        default: unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"];
    };
    flat: unknown extends Defaults["flat"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["flat"] ? boolean : boolean | Defaults["flat"]>;
        default: unknown extends Defaults["flat"] ? boolean : boolean | Defaults["flat"];
    };
    iconColor: unknown extends Defaults["iconColor"] ? (BooleanConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["iconColor"] ? string | boolean : string | boolean | Defaults["iconColor"]>;
        default: unknown extends Defaults["iconColor"] ? string | boolean : Defaults["iconColor"] | NonNullable<string | boolean>;
    };
    label: unknown extends Defaults["label"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["label"] ? string : string | Defaults["label"]>;
        default: unknown extends Defaults["label"] ? string : string | Defaults["label"];
    };
    persistentClear: unknown extends Defaults["persistentClear"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["persistentClear"] ? boolean : boolean | Defaults["persistentClear"]>;
        default: unknown extends Defaults["persistentClear"] ? boolean : boolean | Defaults["persistentClear"];
    };
    prependInnerIcon: unknown extends Defaults["prependInnerIcon"] ? PropType<import("../../composables/icons.js").IconValue> : {
        type: PropType<unknown extends Defaults["prependInnerIcon"] ? import("../../composables/icons.js").IconValue : Defaults["prependInnerIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["prependInnerIcon"] ? import("../../composables/icons.js").IconValue : Defaults["prependInnerIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    reverse: unknown extends Defaults["reverse"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["reverse"] ? boolean : boolean | Defaults["reverse"]>;
        default: unknown extends Defaults["reverse"] ? boolean : boolean | Defaults["reverse"];
    };
    singleLine: unknown extends Defaults["singleLine"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["singleLine"] ? boolean : boolean | Defaults["singleLine"]>;
        default: unknown extends Defaults["singleLine"] ? boolean : boolean | Defaults["singleLine"];
    };
    variant: unknown extends Defaults["variant"] ? {
        type: PropType<"filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined">;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<"filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["variant"] ? "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined" : "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined" | Defaults["variant"]>;
        default: unknown extends Defaults["variant"] ? "filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined" : Defaults["variant"] | NonNullable<"filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined">;
    };
    "onClick:clear": unknown extends Defaults["onClick:clear"] ? PropType<(args_0: MouseEvent) => void> : {
        type: PropType<unknown extends Defaults["onClick:clear"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:clear"]>;
        default: unknown extends Defaults["onClick:clear"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:clear"];
    };
    "onClick:appendInner": unknown extends Defaults["onClick:appendInner"] ? PropType<(args_0: MouseEvent) => void> : {
        type: PropType<unknown extends Defaults["onClick:appendInner"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:appendInner"]>;
        default: unknown extends Defaults["onClick:appendInner"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:appendInner"];
    };
    "onClick:prependInner": unknown extends Defaults["onClick:prependInner"] ? PropType<(args_0: MouseEvent) => void> : {
        type: PropType<unknown extends Defaults["onClick:prependInner"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:prependInner"]>;
        default: unknown extends Defaults["onClick:prependInner"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:prependInner"];
    };
    autocomplete: unknown extends Defaults["autocomplete"] ? PropType<string> : {
        type: PropType<unknown extends Defaults["autocomplete"] ? string : string | Defaults["autocomplete"]>;
        default: unknown extends Defaults["autocomplete"] ? string : string | Defaults["autocomplete"];
    };
    autoGrow: unknown extends Defaults["autoGrow"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["autoGrow"] ? boolean : boolean | Defaults["autoGrow"]>;
        default: unknown extends Defaults["autoGrow"] ? boolean : boolean | Defaults["autoGrow"];
    };
    autofocus: unknown extends Defaults["autofocus"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["autofocus"] ? boolean : boolean | Defaults["autofocus"]>;
        default: unknown extends Defaults["autofocus"] ? boolean : boolean | Defaults["autofocus"];
    };
    counter: unknown extends Defaults["counter"] ? PropType<string | number | true> : {
        type: PropType<unknown extends Defaults["counter"] ? string | number | true : string | number | true | Defaults["counter"]>;
        default: unknown extends Defaults["counter"] ? string | number | true : Defaults["counter"] | NonNullable<string | number | true>;
    };
    counterValue: unknown extends Defaults["counterValue"] ? PropType<(value: any) => number> : {
        type: PropType<unknown extends Defaults["counterValue"] ? (value: any) => number : ((value: any) => number) | Defaults["counterValue"]>;
        default: unknown extends Defaults["counterValue"] ? (value: any) => number : ((value: any) => number) | Defaults["counterValue"];
    };
    prefix: unknown extends Defaults["prefix"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["prefix"] ? string : string | Defaults["prefix"]>;
        default: unknown extends Defaults["prefix"] ? string : string | Defaults["prefix"];
    };
    placeholder: unknown extends Defaults["placeholder"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["placeholder"] ? string : string | Defaults["placeholder"]>;
        default: unknown extends Defaults["placeholder"] ? string : string | Defaults["placeholder"];
    };
    persistentPlaceholder: unknown extends Defaults["persistentPlaceholder"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["persistentPlaceholder"] ? boolean : boolean | Defaults["persistentPlaceholder"]>;
        default: unknown extends Defaults["persistentPlaceholder"] ? boolean : boolean | Defaults["persistentPlaceholder"];
    };
    persistentCounter: unknown extends Defaults["persistentCounter"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["persistentCounter"] ? boolean : boolean | Defaults["persistentCounter"]>;
        default: unknown extends Defaults["persistentCounter"] ? boolean : boolean | Defaults["persistentCounter"];
    };
    noResize: unknown extends Defaults["noResize"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["noResize"] ? boolean : boolean | Defaults["noResize"]>;
        default: unknown extends Defaults["noResize"] ? boolean : boolean | Defaults["noResize"];
    };
    rows: unknown extends Defaults["rows"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validator: (v: any) => boolean;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["rows"] ? string | number : string | number | Defaults["rows"]>;
        default: unknown extends Defaults["rows"] ? string | number : Defaults["rows"] | NonNullable<string | number>;
    };
    maxHeight: unknown extends Defaults["maxHeight"] ? {
        type: (NumberConstructor | StringConstructor)[];
        validator: (v: any) => boolean;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["maxHeight"] ? string | number : string | number | Defaults["maxHeight"]>;
        default: unknown extends Defaults["maxHeight"] ? string | number : Defaults["maxHeight"] | NonNullable<string | number>;
    };
    maxRows: unknown extends Defaults["maxRows"] ? {
        type: (NumberConstructor | StringConstructor)[];
        validator: (v: any) => boolean;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["maxRows"] ? string | number : string | number | Defaults["maxRows"]>;
        default: unknown extends Defaults["maxRows"] ? string | number : Defaults["maxRows"] | NonNullable<string | number>;
    };
    suffix: unknown extends Defaults["suffix"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["suffix"] ? string : string | Defaults["suffix"]>;
        default: unknown extends Defaults["suffix"] ? string : string | Defaults["suffix"];
    };
    modelModifiers: unknown extends Defaults["modelModifiers"] ? PropType<Record<string, boolean>> : {
        type: PropType<unknown extends Defaults["modelModifiers"] ? Record<string, boolean> : Record<string, boolean> | Defaults["modelModifiers"]>;
        default: unknown extends Defaults["modelModifiers"] ? Record<string, boolean> : Record<string, boolean> | Defaults["modelModifiers"];
    };
};
export declare const VTextarea: {
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
        autoGrow: boolean;
        autofocus: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        noResize: boolean;
        rows: string | number;
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
        counter?: string | number | true | undefined;
        counterValue?: ((value: any) => number) | undefined;
        prefix?: string | undefined;
        placeholder?: string | undefined;
        maxHeight?: string | number | undefined;
        maxRows?: string | number | undefined;
        suffix?: string | undefined;
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
            counter?: ((arg: VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | {} | import("vue").VNodeChild;
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
            counter?: false | ((arg: VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:clear"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:counter"?: false | ((arg: VCounterSlot) => import("vue").VNodeChild) | undefined;
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
        "onUpdate:rows"?: ((rows: number) => any) | undefined;
    }, HTMLTextAreaElement & Omit<Omit<{
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
    }, VInputSlots>, "$children" | "appendIcon" | "baseColor" | "class" | "color" | "hideDetails" | "hint" | "iconColor" | "id" | "label" | "maxWidth" | "minWidth" | "modelValue" | "name" | "onClick:append" | "onClick:prepend" | "onUpdate:focused" | "onUpdate:modelValue" | "prependIcon" | "theme" | "v-slot:append" | "v-slot:default" | "v-slot:details" | "v-slot:message" | "v-slot:prepend" | "v-slots" | "validateOn" | "validationValue" | "width" | ("centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style") | keyof import("vue").VNodeProps>, `$${any}`> & {
        _allExposed: {
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        } | {};
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "click:control": (e: MouseEvent) => true;
        "mousedown:control": (e: MouseEvent) => true;
        "update:focused": (focused: boolean) => true;
        "update:modelValue": (val: string) => true;
        "update:rows": (rows: number) => true;
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
        autoGrow: boolean;
        autofocus: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        noResize: boolean;
        rows: string | number;
    }, true, {}, import("vue").SlotsType<Partial<{
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
        counter: (arg: VCounterSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        autoGrow: boolean;
        autofocus: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        noResize: boolean;
        rows: string | number;
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
        counter?: string | number | true | undefined;
        counterValue?: ((value: any) => number) | undefined;
        prefix?: string | undefined;
        placeholder?: string | undefined;
        maxHeight?: string | number | undefined;
        maxRows?: string | number | undefined;
        suffix?: string | undefined;
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
            counter?: ((arg: VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | {} | import("vue").VNodeChild;
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
            counter?: false | ((arg: VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:clear"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:counter"?: false | ((arg: VCounterSlot) => import("vue").VNodeChild) | undefined;
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
        "onUpdate:rows"?: ((rows: number) => any) | undefined;
    }, HTMLTextAreaElement & Omit<Omit<{
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
    }, VInputSlots>, "$children" | "appendIcon" | "baseColor" | "class" | "color" | "hideDetails" | "hint" | "iconColor" | "id" | "label" | "maxWidth" | "minWidth" | "modelValue" | "name" | "onClick:append" | "onClick:prepend" | "onUpdate:focused" | "onUpdate:modelValue" | "prependIcon" | "theme" | "v-slot:append" | "v-slot:default" | "v-slot:details" | "v-slot:message" | "v-slot:prepend" | "v-slots" | "validateOn" | "validationValue" | "width" | ("centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style") | keyof import("vue").VNodeProps>, `$${any}`> & {
        _allExposed: {
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        } | {};
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
        autoGrow: boolean;
        autofocus: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        noResize: boolean;
        rows: string | number;
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
    autoGrow: boolean;
    autofocus: boolean;
    persistentPlaceholder: boolean;
    persistentCounter: boolean;
    noResize: boolean;
    rows: string | number;
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
    counter?: string | number | true | undefined;
    counterValue?: ((value: any) => number) | undefined;
    prefix?: string | undefined;
    placeholder?: string | undefined;
    maxHeight?: string | number | undefined;
    maxRows?: string | number | undefined;
    suffix?: string | undefined;
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
        counter?: ((arg: VCounterSlot) => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | {} | import("vue").VNodeChild;
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
        counter?: false | ((arg: VCounterSlot) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:append"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:append-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:clear"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
        props: Record<string, any>;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:counter"?: false | ((arg: VCounterSlot) => import("vue").VNodeChild) | undefined;
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
    "onUpdate:rows"?: ((rows: number) => any) | undefined;
}, HTMLTextAreaElement & Omit<Omit<{
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
}, VInputSlots>, "$children" | "appendIcon" | "baseColor" | "class" | "color" | "hideDetails" | "hint" | "iconColor" | "id" | "label" | "maxWidth" | "minWidth" | "modelValue" | "name" | "onClick:append" | "onClick:prepend" | "onUpdate:focused" | "onUpdate:modelValue" | "prependIcon" | "theme" | "v-slot:append" | "v-slot:default" | "v-slot:details" | "v-slot:message" | "v-slot:prepend" | "v-slots" | "validateOn" | "validationValue" | "width" | ("centerAffix" | "density" | "direction" | "disabled" | "error" | "errorMessages" | "focused" | "glow" | "hideSpinButtons" | "maxErrors" | "messages" | "persistentHint" | "readonly" | "rules" | "style") | keyof import("vue").VNodeProps>, `$${any}`> & {
    _allExposed: {
        reset: () => Promise<void>;
        resetValidation: () => Promise<void>;
        validate: (silent?: boolean) => Promise<string[]>;
        isValid: import("vue").ComputedRef<boolean | null>;
        errorMessages: import("vue").ComputedRef<string[]>;
    } | {};
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "click:control": (e: MouseEvent) => true;
    "mousedown:control": (e: MouseEvent) => true;
    "update:focused": (focused: boolean) => true;
    "update:modelValue": (val: string) => true;
    "update:rows": (rows: number) => true;
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
    autoGrow: boolean;
    autofocus: boolean;
    persistentPlaceholder: boolean;
    persistentCounter: boolean;
    noResize: boolean;
    rows: string | number;
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
    counter: (arg: VCounterSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    focused: BooleanConstructor;
    "onUpdate:focused": PropType<(args_0: boolean) => void>;
    errorMessages: {
        type: PropType<string | readonly string[] | null>;
        default: () => never[];
    };
    maxErrors: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    name: StringConstructor;
    readonly: {
        type: PropType<boolean | null>;
        default: null;
    };
    rules: {
        type: PropType<readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[]>;
        default: () => never[];
    };
    modelValue: null;
    validateOn: PropType<("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined>;
    validationValue: null;
    density: {
        type: PropType<import("../../composables/density.js").Density>;
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
    appendIcon: PropType<import("../../composables/icons.js").IconValue>;
    prependIcon: PropType<import("../../composables/icons.js").IconValue>;
    hideDetails: PropType<"auto" | boolean>;
    hideSpinButtons: BooleanConstructor;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    messages: {
        type: PropType<string | readonly string[]>;
        default: () => never[];
    };
    "onClick:prepend": PropType<(args_0: MouseEvent) => void>;
    "onClick:append": PropType<(args_0: MouseEvent) => void>;
    appendInnerIcon: PropType<import("../../composables/icons.js").IconValue>;
    bgColor: StringConstructor;
    clearable: BooleanConstructor;
    clearIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
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
    prependInnerIcon: PropType<import("../../composables/icons.js").IconValue>;
    reverse: BooleanConstructor;
    singleLine: BooleanConstructor;
    variant: {
        type: PropType<"filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined">;
        default: string;
        validator: (v: any) => boolean;
    };
    "onClick:clear": PropType<(args_0: MouseEvent) => void>;
    "onClick:appendInner": PropType<(args_0: MouseEvent) => void>;
    "onClick:prependInner": PropType<(args_0: MouseEvent) => void>;
    autocomplete: PropType<string>;
    autoGrow: BooleanConstructor;
    autofocus: BooleanConstructor;
    counter: PropType<string | number | true>;
    counterValue: PropType<(value: any) => number>;
    prefix: StringConstructor;
    placeholder: StringConstructor;
    persistentPlaceholder: BooleanConstructor;
    persistentCounter: BooleanConstructor;
    noResize: BooleanConstructor;
    rows: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validator: (v: any) => boolean;
    };
    maxHeight: {
        type: (NumberConstructor | StringConstructor)[];
        validator: (v: any) => boolean;
    };
    maxRows: {
        type: (NumberConstructor | StringConstructor)[];
        validator: (v: any) => boolean;
    };
    suffix: StringConstructor;
    modelModifiers: PropType<Record<string, boolean>>;
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    focused: BooleanConstructor;
    "onUpdate:focused": PropType<(args_0: boolean) => void>;
    errorMessages: {
        type: PropType<string | readonly string[] | null>;
        default: () => never[];
    };
    maxErrors: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    name: StringConstructor;
    readonly: {
        type: PropType<boolean | null>;
        default: null;
    };
    rules: {
        type: PropType<readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[]>;
        default: () => never[];
    };
    modelValue: null;
    validateOn: PropType<("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined>;
    validationValue: null;
    density: {
        type: PropType<import("../../composables/density.js").Density>;
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
    appendIcon: PropType<import("../../composables/icons.js").IconValue>;
    prependIcon: PropType<import("../../composables/icons.js").IconValue>;
    hideDetails: PropType<"auto" | boolean>;
    hideSpinButtons: BooleanConstructor;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    messages: {
        type: PropType<string | readonly string[]>;
        default: () => never[];
    };
    "onClick:prepend": PropType<(args_0: MouseEvent) => void>;
    "onClick:append": PropType<(args_0: MouseEvent) => void>;
    appendInnerIcon: PropType<import("../../composables/icons.js").IconValue>;
    bgColor: StringConstructor;
    clearable: BooleanConstructor;
    clearIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
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
    prependInnerIcon: PropType<import("../../composables/icons.js").IconValue>;
    reverse: BooleanConstructor;
    singleLine: BooleanConstructor;
    variant: {
        type: PropType<"filled" | "outlined" | "plain" | "solo" | "solo-filled" | "solo-inverted" | "underlined">;
        default: string;
        validator: (v: any) => boolean;
    };
    "onClick:clear": PropType<(args_0: MouseEvent) => void>;
    "onClick:appendInner": PropType<(args_0: MouseEvent) => void>;
    "onClick:prependInner": PropType<(args_0: MouseEvent) => void>;
    autocomplete: PropType<string>;
    autoGrow: BooleanConstructor;
    autofocus: BooleanConstructor;
    counter: PropType<string | number | true>;
    counterValue: PropType<(value: any) => number>;
    prefix: StringConstructor;
    placeholder: StringConstructor;
    persistentPlaceholder: BooleanConstructor;
    persistentCounter: BooleanConstructor;
    noResize: BooleanConstructor;
    rows: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validator: (v: any) => boolean;
    };
    maxHeight: {
        type: (NumberConstructor | StringConstructor)[];
        validator: (v: any) => boolean;
    };
    maxRows: {
        type: (NumberConstructor | StringConstructor)[];
        validator: (v: any) => boolean;
    };
    suffix: StringConstructor;
    modelModifiers: PropType<Record<string, boolean>>;
}>>;
export type VTextarea = InstanceType<typeof VTextarea>;
