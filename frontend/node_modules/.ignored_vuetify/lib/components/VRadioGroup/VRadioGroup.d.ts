// Styles

import { IconValue } from '../../composables/icons.js';
// Types
import type { VInputSlots } from '../VInput/VInput.js';
import type { GenericProps } from '../../util/index.js';
export type VRadioGroupSlots = Omit<VInputSlots, 'default'> & {
    default: never;
    label: {
        label: string | undefined;
        props: Record<string, any>;
    };
};
export declare const makeVRadioGroupProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
    focused?: unknown;
    "onUpdate:focused"?: unknown;
    errorMessages?: unknown;
    maxErrors?: unknown;
    label?: unknown;
    rules?: unknown;
    validateOn?: unknown;
    validationValue?: unknown;
    density?: unknown;
    maxWidth?: unknown;
    minWidth?: unknown;
    width?: unknown;
    color?: unknown;
    disabled?: unknown;
    defaultsTarget?: unknown;
    error?: unknown;
    id?: unknown;
    inline?: unknown;
    ripple?: unknown;
    name?: unknown;
    readonly?: unknown;
    modelValue?: unknown;
    valueComparator?: unknown;
    appendIcon?: unknown;
    baseColor?: unknown;
    centerAffix?: unknown;
    glow?: unknown;
    iconColor?: unknown;
    prependIcon?: unknown;
    hideDetails?: unknown;
    hideSpinButtons?: unknown;
    hint?: unknown;
    persistentHint?: unknown;
    messages?: unknown;
    direction?: unknown;
    "onClick:prepend"?: unknown;
    "onClick:append"?: unknown;
    height?: unknown;
    trueIcon?: unknown;
    falseIcon?: unknown;
    type?: unknown;
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
    label: unknown extends Defaults["label"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["label"] ? string : string | Defaults["label"]>;
        default: unknown extends Defaults["label"] ? string : string | Defaults["label"];
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
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    disabled: unknown extends Defaults["disabled"] ? {
        type: import("vue").PropType<boolean | null>;
        default: null;
    } : Omit<{
        type: import("vue").PropType<boolean | null>;
        default: null;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["disabled"] ? boolean | null : boolean | Defaults["disabled"] | null>;
        default: unknown extends Defaults["disabled"] ? boolean | null : Defaults["disabled"] | NonNullable<boolean | null>;
    };
    defaultsTarget: unknown extends Defaults["defaultsTarget"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["defaultsTarget"] ? string : string | Defaults["defaultsTarget"]>;
        default: unknown extends Defaults["defaultsTarget"] ? string : string | Defaults["defaultsTarget"];
    };
    error: unknown extends Defaults["error"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"]>;
        default: unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"];
    };
    id: unknown extends Defaults["id"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["id"] ? string : string | Defaults["id"]>;
        default: unknown extends Defaults["id"] ? string : string | Defaults["id"];
    };
    inline: unknown extends Defaults["inline"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["inline"] ? boolean : boolean | Defaults["inline"]>;
        default: unknown extends Defaults["inline"] ? boolean : boolean | Defaults["inline"];
    };
    ripple: unknown extends Defaults["ripple"] ? {
        type: import("vue").PropType<boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined>;
        default: boolean;
    } : Omit<{
        type: import("vue").PropType<boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined>;
        default: boolean;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["ripple"] ? boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined : boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | Defaults["ripple"] | undefined>;
        default: unknown extends Defaults["ripple"] ? boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined : Defaults["ripple"] | NonNullable<boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined>;
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
    modelValue: unknown extends Defaults["modelValue"] ? null : {
        type: import("vue").PropType<unknown extends Defaults["modelValue"] ? any : any>;
        default: unknown extends Defaults["modelValue"] ? any : any;
    };
    valueComparator: unknown extends Defaults["valueComparator"] ? {
        type: import("vue").PropType<typeof import("../../util/index.js").deepEqual>;
        default: typeof import("../../util/index.js").deepEqual;
    } : Omit<{
        type: import("vue").PropType<typeof import("../../util/index.js").deepEqual>;
        default: typeof import("../../util/index.js").deepEqual;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["valueComparator"] ? typeof import("../../util/index.js").deepEqual : typeof import("../../util/index.js").deepEqual | Defaults["valueComparator"]>;
        default: unknown extends Defaults["valueComparator"] ? typeof import("../../util/index.js").deepEqual : typeof import("../../util/index.js").deepEqual | Defaults["valueComparator"];
    };
    appendIcon: unknown extends Defaults["appendIcon"] ? import("vue").PropType<IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["appendIcon"] ? IconValue : Defaults["appendIcon"] | IconValue>;
        default: unknown extends Defaults["appendIcon"] ? IconValue : Defaults["appendIcon"] | NonNullable<IconValue>;
    };
    baseColor: unknown extends Defaults["baseColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"]>;
        default: unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"];
    };
    centerAffix: unknown extends Defaults["centerAffix"] ? {
        type: BooleanConstructor;
        default: boolean;
    } : Omit<{
        type: BooleanConstructor;
        default: boolean;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["centerAffix"] ? boolean : boolean | Defaults["centerAffix"]>;
        default: unknown extends Defaults["centerAffix"] ? boolean : boolean | Defaults["centerAffix"];
    };
    glow: unknown extends Defaults["glow"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["glow"] ? boolean : boolean | Defaults["glow"]>;
        default: unknown extends Defaults["glow"] ? boolean : boolean | Defaults["glow"];
    };
    iconColor: unknown extends Defaults["iconColor"] ? (BooleanConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["iconColor"] ? string | boolean : string | boolean | Defaults["iconColor"]>;
        default: unknown extends Defaults["iconColor"] ? string | boolean : Defaults["iconColor"] | NonNullable<string | boolean>;
    };
    prependIcon: unknown extends Defaults["prependIcon"] ? import("vue").PropType<IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["prependIcon"] ? IconValue : Defaults["prependIcon"] | IconValue>;
        default: unknown extends Defaults["prependIcon"] ? IconValue : Defaults["prependIcon"] | NonNullable<IconValue>;
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
    direction: unknown extends Defaults["direction"] ? {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["direction"] ? "horizontal" | "vertical" : "horizontal" | "vertical" | Defaults["direction"]>;
        default: unknown extends Defaults["direction"] ? "horizontal" | "vertical" : Defaults["direction"] | NonNullable<"horizontal" | "vertical">;
    };
    "onClick:prepend": unknown extends Defaults["onClick:prepend"] ? import("vue").PropType<(args_0: MouseEvent) => void> : {
        type: import("vue").PropType<unknown extends Defaults["onClick:prepend"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:prepend"]>;
        default: unknown extends Defaults["onClick:prepend"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:prepend"];
    };
    "onClick:append": unknown extends Defaults["onClick:append"] ? import("vue").PropType<(args_0: MouseEvent) => void> : {
        type: import("vue").PropType<unknown extends Defaults["onClick:append"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:append"]>;
        default: unknown extends Defaults["onClick:append"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:append"];
    };
    height: unknown extends Defaults["height"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : Defaults["height"] | NonNullable<string | number>;
    };
    trueIcon: unknown extends Defaults["trueIcon"] ? {
        type: import("vue").PropType<IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["trueIcon"] ? IconValue : Defaults["trueIcon"] | IconValue>;
        default: unknown extends Defaults["trueIcon"] ? IconValue : Defaults["trueIcon"] | NonNullable<IconValue>;
    };
    falseIcon: unknown extends Defaults["falseIcon"] ? {
        type: import("vue").PropType<IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["falseIcon"] ? IconValue : Defaults["falseIcon"] | IconValue>;
        default: unknown extends Defaults["falseIcon"] ? IconValue : Defaults["falseIcon"] | NonNullable<IconValue>;
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
};
export declare const VRadioGroup: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        density: import("../../composables/density.js").Density;
        disabled: boolean | null;
        error: boolean;
        inline: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        };
        readonly: boolean | null;
        valueComparator: typeof import("../../util/index.js").deepEqual;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        messages: string | readonly string[];
        direction: "horizontal" | "vertical";
        height: string | number;
        trueIcon: IconValue;
        falseIcon: IconValue;
        type: string;
    } & {
        theme?: string | undefined;
        class?: any;
        "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
        label?: string | undefined;
        validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
        validationValue?: any;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        defaultsTarget?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        appendIcon?: IconValue | undefined;
        baseColor?: string | undefined;
        iconColor?: string | boolean | undefined;
        prependIcon?: IconValue | undefined;
        hideDetails?: "auto" | boolean | undefined;
        hint?: string | undefined;
        "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
    } & {}, Omit<Omit<{
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
            appendIcon?: IconValue | undefined;
            baseColor?: string | undefined;
            centerAffix: boolean;
            color?: string | undefined;
            glow: boolean;
            iconColor?: string | boolean | undefined;
            prependIcon?: IconValue | undefined;
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
            appendIcon?: IconValue | undefined;
            baseColor?: string | undefined;
            color?: string | undefined;
            iconColor?: string | boolean | undefined;
            prependIcon?: IconValue | undefined;
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
        appendIcon?: IconValue | undefined;
        baseColor?: string | undefined;
        color?: string | undefined;
        iconColor?: string | boolean | undefined;
        prependIcon?: IconValue | undefined;
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
    }> & {} & import("vue").ComponentCustomProperties & {} & GenericProps<{
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
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        "update:modelValue": (value: any) => true;
    }, "$children" | "modelValue" | "update:modelValue" | "v-slot:append" | "v-slot:default" | "v-slot:details" | "v-slot:label" | "v-slot:message" | "v-slot:prepend" | "v-slots">, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        density: import("../../composables/density.js").Density;
        disabled: boolean | null;
        error: boolean;
        inline: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined;
        readonly: boolean | null;
        valueComparator: typeof import("../../util/index.js").deepEqual;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        messages: string | readonly string[];
        direction: "horizontal" | "vertical";
        height: string | number;
        trueIcon: IconValue;
        falseIcon: IconValue;
        type: string;
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
        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        label: (arg: {
            label: string | undefined;
            props: Record<string, any>;
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
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        density: import("../../composables/density.js").Density;
        disabled: boolean | null;
        error: boolean;
        inline: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        };
        readonly: boolean | null;
        valueComparator: typeof import("../../util/index.js").deepEqual;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        messages: string | readonly string[];
        direction: "horizontal" | "vertical";
        height: string | number;
        trueIcon: IconValue;
        falseIcon: IconValue;
        type: string;
    } & {
        theme?: string | undefined;
        class?: any;
        "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
        label?: string | undefined;
        validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
        validationValue?: any;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        defaultsTarget?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        appendIcon?: IconValue | undefined;
        baseColor?: string | undefined;
        iconColor?: string | boolean | undefined;
        prependIcon?: IconValue | undefined;
        hideDetails?: "auto" | boolean | undefined;
        hint?: string | undefined;
        "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
        "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
    } & {}, Omit<Omit<{
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
            appendIcon?: IconValue | undefined;
            baseColor?: string | undefined;
            centerAffix: boolean;
            color?: string | undefined;
            glow: boolean;
            iconColor?: string | boolean | undefined;
            prependIcon?: IconValue | undefined;
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
            appendIcon?: IconValue | undefined;
            baseColor?: string | undefined;
            color?: string | undefined;
            iconColor?: string | boolean | undefined;
            prependIcon?: IconValue | undefined;
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
        appendIcon?: IconValue | undefined;
        baseColor?: string | undefined;
        color?: string | undefined;
        iconColor?: string | boolean | undefined;
        prependIcon?: IconValue | undefined;
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
    }> & {} & import("vue").ComponentCustomProperties & {} & GenericProps<{
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
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        density: import("../../composables/density.js").Density;
        disabled: boolean | null;
        error: boolean;
        inline: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined;
        readonly: boolean | null;
        valueComparator: typeof import("../../util/index.js").deepEqual;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        messages: string | readonly string[];
        direction: "horizontal" | "vertical";
        height: string | number;
        trueIcon: IconValue;
        falseIcon: IconValue;
        type: string;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
    density: import("../../composables/density.js").Density;
    disabled: boolean | null;
    error: boolean;
    inline: boolean;
    ripple: boolean | {
        class?: string | undefined;
        keys?: string[] | undefined;
    };
    readonly: boolean | null;
    valueComparator: typeof import("../../util/index.js").deepEqual;
    centerAffix: boolean;
    glow: boolean;
    hideSpinButtons: boolean;
    persistentHint: boolean;
    messages: string | readonly string[];
    direction: "horizontal" | "vertical";
    height: string | number;
    trueIcon: IconValue;
    falseIcon: IconValue;
    type: string;
} & {
    theme?: string | undefined;
    class?: any;
    "onUpdate:focused"?: ((args_0: boolean) => void) | undefined;
    label?: string | undefined;
    validateOn?: ("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined;
    validationValue?: any;
    maxWidth?: string | number | undefined;
    minWidth?: string | number | undefined;
    width?: string | number | undefined;
    color?: string | undefined;
    defaultsTarget?: string | undefined;
    id?: string | undefined;
    name?: string | undefined;
    appendIcon?: IconValue | undefined;
    baseColor?: string | undefined;
    iconColor?: string | boolean | undefined;
    prependIcon?: IconValue | undefined;
    hideDetails?: "auto" | boolean | undefined;
    hint?: string | undefined;
    "onClick:prepend"?: ((args_0: MouseEvent) => void) | undefined;
    "onClick:append"?: ((args_0: MouseEvent) => void) | undefined;
} & {}, Omit<Omit<{
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
        appendIcon?: IconValue | undefined;
        baseColor?: string | undefined;
        centerAffix: boolean;
        color?: string | undefined;
        glow: boolean;
        iconColor?: string | boolean | undefined;
        prependIcon?: IconValue | undefined;
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
        appendIcon?: IconValue | undefined;
        baseColor?: string | undefined;
        color?: string | undefined;
        iconColor?: string | boolean | undefined;
        prependIcon?: IconValue | undefined;
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
    appendIcon?: IconValue | undefined;
    baseColor?: string | undefined;
    color?: string | undefined;
    iconColor?: string | boolean | undefined;
    prependIcon?: IconValue | undefined;
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
}> & {} & import("vue").ComponentCustomProperties & {} & GenericProps<{
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
    "update:modelValue": (value: any) => true;
}, "$children" | "modelValue" | "update:modelValue" | "v-slot:append" | "v-slot:default" | "v-slot:details" | "v-slot:label" | "v-slot:message" | "v-slot:prepend" | "v-slots">, string, {
    style: import("vue").StyleValue;
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
    density: import("../../composables/density.js").Density;
    disabled: boolean | null;
    error: boolean;
    inline: boolean;
    ripple: boolean | {
        class?: string | undefined;
        keys?: string[] | undefined;
    } | undefined;
    readonly: boolean | null;
    valueComparator: typeof import("../../util/index.js").deepEqual;
    centerAffix: boolean;
    glow: boolean;
    hideSpinButtons: boolean;
    persistentHint: boolean;
    messages: string | readonly string[];
    direction: "horizontal" | "vertical";
    height: string | number;
    trueIcon: IconValue;
    falseIcon: IconValue;
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
    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    label: (arg: {
        label: string | undefined;
        props: Record<string, any>;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T>(props: {
    modelValue?: T | null | undefined;
    "onUpdate:modelValue"?: ((value: T | null) => void) | undefined;
}, slots: VRadioGroupSlots) => GenericProps<{
    modelValue?: T | null | undefined;
    "onUpdate:modelValue"?: ((value: T | null) => void) | undefined;
}, VRadioGroupSlots>) & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
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
    label: StringConstructor;
    rules: {
        type: import("vue").PropType<readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[]>;
        default: () => never[];
    };
    validateOn: import("vue").PropType<("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined>;
    validationValue: null;
    density: {
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    maxWidth: (NumberConstructor | StringConstructor)[];
    minWidth: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    color: StringConstructor;
    disabled: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
    defaultsTarget: StringConstructor;
    error: BooleanConstructor;
    id: StringConstructor;
    inline: BooleanConstructor;
    ripple: {
        type: import("vue").PropType<boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined>;
        default: boolean;
    };
    name: StringConstructor;
    readonly: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
    modelValue: null;
    valueComparator: {
        type: import("vue").PropType<typeof import("../../util/index.js").deepEqual>;
        default: typeof import("../../util/index.js").deepEqual;
    };
    appendIcon: import("vue").PropType<IconValue>;
    baseColor: StringConstructor;
    centerAffix: {
        type: BooleanConstructor;
        default: boolean;
    };
    glow: BooleanConstructor;
    iconColor: (BooleanConstructor | StringConstructor)[];
    prependIcon: import("vue").PropType<IconValue>;
    hideDetails: import("vue").PropType<"auto" | boolean>;
    hideSpinButtons: BooleanConstructor;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    messages: {
        type: import("vue").PropType<string | readonly string[]>;
        default: () => never[];
    };
    direction: {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    "onClick:prepend": import("vue").PropType<(args_0: MouseEvent) => void>;
    "onClick:append": import("vue").PropType<(args_0: MouseEvent) => void>;
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    trueIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    falseIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
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
    label: StringConstructor;
    rules: {
        type: import("vue").PropType<readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[]>;
        default: () => never[];
    };
    validateOn: import("vue").PropType<("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined>;
    validationValue: null;
    density: {
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    maxWidth: (NumberConstructor | StringConstructor)[];
    minWidth: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    color: StringConstructor;
    disabled: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
    defaultsTarget: StringConstructor;
    error: BooleanConstructor;
    id: StringConstructor;
    inline: BooleanConstructor;
    ripple: {
        type: import("vue").PropType<boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined>;
        default: boolean;
    };
    name: StringConstructor;
    readonly: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
    modelValue: null;
    valueComparator: {
        type: import("vue").PropType<typeof import("../../util/index.js").deepEqual>;
        default: typeof import("../../util/index.js").deepEqual;
    };
    appendIcon: import("vue").PropType<IconValue>;
    baseColor: StringConstructor;
    centerAffix: {
        type: BooleanConstructor;
        default: boolean;
    };
    glow: BooleanConstructor;
    iconColor: (BooleanConstructor | StringConstructor)[];
    prependIcon: import("vue").PropType<IconValue>;
    hideDetails: import("vue").PropType<"auto" | boolean>;
    hideSpinButtons: BooleanConstructor;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    messages: {
        type: import("vue").PropType<string | readonly string[]>;
        default: () => never[];
    };
    direction: {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    "onClick:prepend": import("vue").PropType<(args_0: MouseEvent) => void>;
    "onClick:append": import("vue").PropType<(args_0: MouseEvent) => void>;
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    trueIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    falseIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
}>>;
export type VRadioGroup = InstanceType<typeof VRadioGroup>;
