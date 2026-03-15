// Styles

import { IconValue } from '../../composables/icons.js';
// Types
import type { PropType, VNode } from 'vue';
import type { VInputSlots } from '../../components/VInput/VInput.js';
export type VFileUploadSlots = Omit<VInputSlots, 'default'> & {
    browse: {
        props: {
            onClick: (e: MouseEvent) => void;
        };
    };
    default: never;
    icon: never;
    input: {
        inputNode: VNode;
    };
    item: {
        file: File;
        props: {
            'onClick:remove': () => void;
        };
    };
    single: {
        file: File;
        props: {
            'onClick:remove': () => void;
        };
    };
    title: never;
    divider: never;
};
export declare const makeVFileUploadProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
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
    validateOn?: unknown;
    validationValue?: unknown;
    density?: unknown;
    maxWidth?: unknown;
    minWidth?: unknown;
    width?: unknown;
    id?: unknown;
    appendIcon?: unknown;
    baseColor?: unknown;
    centerAffix?: unknown;
    color?: unknown;
    glow?: unknown;
    iconColor?: unknown;
    prependIcon?: unknown;
    hideDetails?: unknown;
    hideSpinButtons?: unknown;
    hint?: unknown;
    persistentHint?: unknown;
    messages?: unknown;
    "onClick:prepend"?: unknown;
    "onClick:append"?: unknown;
    filterByType?: unknown;
    browseText?: unknown;
    dividerText?: unknown;
    title?: unknown;
    subtitle?: unknown;
    icon?: unknown;
    clearable?: unknown;
    insetFileList?: unknown;
    hideBrowse?: unknown;
    multiple?: unknown;
    scrim?: unknown;
    showSize?: unknown;
    modelValue?: unknown;
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
        type: PropType<readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["rules"] ? readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[] : readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[] | Defaults["rules"]>;
        default: unknown extends Defaults["rules"] ? readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[] : readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[] | Defaults["rules"];
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
    id: unknown extends Defaults["id"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["id"] ? string : string | Defaults["id"]>;
        default: unknown extends Defaults["id"] ? string : string | Defaults["id"];
    };
    appendIcon: unknown extends Defaults["appendIcon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["appendIcon"] ? IconValue : Defaults["appendIcon"] | IconValue>;
        default: unknown extends Defaults["appendIcon"] ? IconValue : Defaults["appendIcon"] | NonNullable<IconValue>;
    };
    baseColor: unknown extends Defaults["baseColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"]>;
        default: unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"];
    };
    centerAffix: unknown extends Defaults["centerAffix"] ? {
        type: BooleanConstructor;
        default: boolean;
    } : Omit<{
        type: BooleanConstructor;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["centerAffix"] ? boolean : boolean | Defaults["centerAffix"]>;
        default: unknown extends Defaults["centerAffix"] ? boolean : boolean | Defaults["centerAffix"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    glow: unknown extends Defaults["glow"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["glow"] ? boolean : boolean | Defaults["glow"]>;
        default: unknown extends Defaults["glow"] ? boolean : boolean | Defaults["glow"];
    };
    iconColor: unknown extends Defaults["iconColor"] ? (BooleanConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["iconColor"] ? string | boolean : string | boolean | Defaults["iconColor"]>;
        default: unknown extends Defaults["iconColor"] ? string | boolean : Defaults["iconColor"] | NonNullable<string | boolean>;
    };
    prependIcon: unknown extends Defaults["prependIcon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["prependIcon"] ? IconValue : Defaults["prependIcon"] | IconValue>;
        default: unknown extends Defaults["prependIcon"] ? IconValue : Defaults["prependIcon"] | NonNullable<IconValue>;
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
    filterByType: unknown extends Defaults["filterByType"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["filterByType"] ? string : string | Defaults["filterByType"]>;
        default: unknown extends Defaults["filterByType"] ? string : string | Defaults["filterByType"];
    };
    browseText: unknown extends Defaults["browseText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["browseText"] ? string : string | Defaults["browseText"]>;
        default: unknown extends Defaults["browseText"] ? string : string | Defaults["browseText"];
    };
    dividerText: unknown extends Defaults["dividerText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["dividerText"] ? string : string | Defaults["dividerText"]>;
        default: unknown extends Defaults["dividerText"] ? string : string | Defaults["dividerText"];
    };
    title: unknown extends Defaults["title"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["title"] ? string : string | Defaults["title"]>;
        default: unknown extends Defaults["title"] ? string : string | Defaults["title"];
    };
    subtitle: unknown extends Defaults["subtitle"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["subtitle"] ? string : string | Defaults["subtitle"]>;
        default: unknown extends Defaults["subtitle"] ? string : string | Defaults["subtitle"];
    };
    icon: unknown extends Defaults["icon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["icon"] ? IconValue : Defaults["icon"] | IconValue>;
        default: unknown extends Defaults["icon"] ? IconValue : Defaults["icon"] | NonNullable<IconValue>;
    };
    clearable: unknown extends Defaults["clearable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["clearable"] ? boolean : boolean | Defaults["clearable"]>;
        default: unknown extends Defaults["clearable"] ? boolean : boolean | Defaults["clearable"];
    };
    insetFileList: unknown extends Defaults["insetFileList"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["insetFileList"] ? boolean : boolean | Defaults["insetFileList"]>;
        default: unknown extends Defaults["insetFileList"] ? boolean : boolean | Defaults["insetFileList"];
    };
    hideBrowse: unknown extends Defaults["hideBrowse"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideBrowse"] ? boolean : boolean | Defaults["hideBrowse"]>;
        default: unknown extends Defaults["hideBrowse"] ? boolean : boolean | Defaults["hideBrowse"];
    };
    multiple: unknown extends Defaults["multiple"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["multiple"] ? boolean : boolean | Defaults["multiple"]>;
        default: unknown extends Defaults["multiple"] ? boolean : boolean | Defaults["multiple"];
    };
    scrim: unknown extends Defaults["scrim"] ? {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    } : Omit<{
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["scrim"] ? string | boolean : string | boolean | Defaults["scrim"]>;
        default: unknown extends Defaults["scrim"] ? string | boolean : Defaults["scrim"] | NonNullable<string | boolean>;
    };
    showSize: unknown extends Defaults["showSize"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["showSize"] ? boolean : boolean | Defaults["showSize"]>;
        default: unknown extends Defaults["showSize"] ? boolean : boolean | Defaults["showSize"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: PropType<File[] | File>;
        default: null;
        validator: (val: any) => boolean;
    } : Omit<{
        type: PropType<File[] | File>;
        default: null;
        validator: (val: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["modelValue"] ? File[] | File : File[] | File | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? File[] | File : Defaults["modelValue"] | NonNullable<File[] | File>;
    };
};
export declare const VFileUpload: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
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
        browseText: string;
        dividerText: string;
        title: string;
        icon: IconValue;
        clearable: boolean;
        insetFileList: boolean;
        hideBrowse: boolean;
        multiple: boolean;
        scrim: string | boolean;
        showSize: boolean;
        modelValue: File[] | File;
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
        filterByType?: string | undefined;
        subtitle?: string | undefined;
    } & {
        $children?: {
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            browse?: ((arg: {
                props: {
                    onClick: (e: MouseEvent) => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            default?: (() => import("vue").VNodeChild) | undefined;
            icon?: (() => import("vue").VNodeChild) | undefined;
            input?: ((arg: {
                inputNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>;
            }) => import("vue").VNodeChild) | undefined;
            item?: ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            single?: ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            title?: (() => import("vue").VNodeChild) | undefined;
            divider?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            browse?: false | ((arg: {
                props: {
                    onClick: (e: MouseEvent) => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            default?: false | (() => import("vue").VNodeChild) | undefined;
            icon?: false | (() => import("vue").VNodeChild) | undefined;
            input?: false | ((arg: {
                inputNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>;
            }) => import("vue").VNodeChild) | undefined;
            item?: false | ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            single?: false | ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            title?: false | (() => import("vue").VNodeChild) | undefined;
            divider?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:browse"?: false | ((arg: {
            props: {
                onClick: (e: MouseEvent) => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:divider"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:icon"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:input"?: false | ((arg: {
            inputNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:single"?: false | ((arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        onRejected?: ((files: File[]) => any) | undefined;
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((files: File[]) => any) | undefined;
    }, {
        controlRef: import("vue").Ref<HTMLInputElement | null, HTMLInputElement | null>;
    } & Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            style: import("vue").StyleValue;
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            length: string | number;
            browseText: string;
            dividerText: string;
            title: string;
            icon: IconValue;
            clearable: boolean;
            disabled: boolean;
            error: boolean;
            hideBrowse: boolean;
            insetFileList: boolean;
            multiple: boolean;
            scrim: string | boolean;
            showSize: boolean;
            modelValue: File[];
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            $children?: {
                default?: ((arg: {
                    isDragging: boolean;
                    hasFiles: boolean;
                    files: readonly File[];
                    props: {
                        onClick: () => void;
                    };
                }) => import("vue").VNodeChild) | undefined;
                browse?: ((arg: {
                    props: {
                        onClick: (e: MouseEvent) => void;
                    };
                }) => import("vue").VNodeChild) | undefined;
                icon?: (() => import("vue").VNodeChild) | undefined;
                title?: (() => import("vue").VNodeChild) | undefined;
                divider?: (() => import("vue").VNodeChild) | undefined;
                single?: ((arg: {
                    file: File;
                    props: {
                        "onClick:remove": () => void;
                    };
                }) => import("vue").VNodeChild) | undefined;
                item?: ((arg: {
                    file: File;
                    props: {
                        "onClick:remove": () => void;
                    };
                }) => import("vue").VNodeChild) | undefined;
                input?: (() => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: {
                isDragging: boolean;
                hasFiles: boolean;
                files: readonly File[];
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: {
                    isDragging: boolean;
                    hasFiles: boolean;
                    files: readonly File[];
                    props: {
                        onClick: () => void;
                    };
                }) => import("vue").VNodeChild) | undefined;
                browse?: false | ((arg: {
                    props: {
                        onClick: (e: MouseEvent) => void;
                    };
                }) => import("vue").VNodeChild) | undefined;
                icon?: false | (() => import("vue").VNodeChild) | undefined;
                title?: false | (() => import("vue").VNodeChild) | undefined;
                divider?: false | (() => import("vue").VNodeChild) | undefined;
                single?: false | ((arg: {
                    file: File;
                    props: {
                        "onClick:remove": () => void;
                    };
                }) => import("vue").VNodeChild) | undefined;
                item?: false | ((arg: {
                    file: File;
                    props: {
                        "onClick:remove": () => void;
                    };
                }) => import("vue").VNodeChild) | undefined;
                input?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
            border?: string | number | boolean | undefined;
            density: import("../../composables/density.js").Density;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            location?: import("../../util/index.js").Anchor | null | undefined;
            position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            length: string | number;
            opacity?: string | number | undefined;
            thickness?: string | number | undefined;
            color?: string | undefined;
            browseText: string;
            dividerText: string;
            title: string;
            subtitle?: string | undefined;
            icon: IconValue;
            clearable: boolean;
            disabled: boolean;
            error: boolean;
            hideBrowse: boolean;
            insetFileList: boolean;
            multiple: boolean;
            scrim: string | boolean;
            showSize: boolean;
            modelValue: File[];
            "onClick:browse"?: (() => any) | undefined;
            "onClick:remove"?: ((index: number) => any) | undefined;
            onDrop?: ((files: File[]) => any) | undefined;
            "v-slot:browse"?: false | ((arg: {
                props: {
                    onClick: (e: MouseEvent) => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                isDragging: boolean;
                hasFiles: boolean;
                files: readonly File[];
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:divider"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:icon"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:input"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:item"?: false | ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:single"?: false | ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "browseText" | "clearable" | "density" | "disabled" | "dividerText" | "error" | "hideBrowse" | "icon" | "insetFileList" | "length" | "modelValue" | "multiple" | "rounded" | "scrim" | "showSize" | "style" | "tag" | "tile" | "title">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: {
                isDragging: boolean;
                hasFiles: boolean;
                files: readonly File[];
                props: {
                    onClick: () => void;
                };
            }) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            browse?: ((arg: {
                props: {
                    onClick: (e: MouseEvent) => void;
                };
            }) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            icon?: (() => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            title?: (() => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            divider?: (() => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            single?: ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            item?: ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            input?: (() => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $host: Element | null;
        $emit: ((event: "click:browse") => void) & ((event: "click:remove", index: number) => void) & ((event: "drop", files: File[]) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            density: import("../../composables/density.js").Density;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            length: string | number;
            browseText: string;
            dividerText: string;
            title: string;
            icon: IconValue;
            clearable: boolean;
            disabled: boolean;
            error: boolean;
            hideBrowse: boolean;
            insetFileList: boolean;
            multiple: boolean;
            scrim: string | boolean;
            showSize: boolean;
            modelValue: File[];
        } & {
            theme?: string | undefined;
            class?: any;
            border?: string | number | boolean | undefined;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            location?: import("../../util/index.js").Anchor | null | undefined;
            position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            opacity?: string | number | undefined;
            thickness?: string | number | undefined;
            color?: string | undefined;
            subtitle?: string | undefined;
        } & {
            $children?: {
                default?: ((arg: {
                    isDragging: boolean;
                    hasFiles: boolean;
                    files: readonly File[];
                    props: {
                        onClick: () => void;
                    };
                }) => import("vue").VNodeChild) | undefined;
                browse?: ((arg: {
                    props: {
                        onClick: (e: MouseEvent) => void;
                    };
                }) => import("vue").VNodeChild) | undefined;
                icon?: (() => import("vue").VNodeChild) | undefined;
                title?: (() => import("vue").VNodeChild) | undefined;
                divider?: (() => import("vue").VNodeChild) | undefined;
                single?: ((arg: {
                    file: File;
                    props: {
                        "onClick:remove": () => void;
                    };
                }) => import("vue").VNodeChild) | undefined;
                item?: ((arg: {
                    file: File;
                    props: {
                        "onClick:remove": () => void;
                    };
                }) => import("vue").VNodeChild) | undefined;
                input?: (() => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: {
                isDragging: boolean;
                hasFiles: boolean;
                files: readonly File[];
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: {
                    isDragging: boolean;
                    hasFiles: boolean;
                    files: readonly File[];
                    props: {
                        onClick: () => void;
                    };
                }) => import("vue").VNodeChild) | undefined;
                browse?: false | ((arg: {
                    props: {
                        onClick: (e: MouseEvent) => void;
                    };
                }) => import("vue").VNodeChild) | undefined;
                icon?: false | (() => import("vue").VNodeChild) | undefined;
                title?: false | (() => import("vue").VNodeChild) | undefined;
                divider?: false | (() => import("vue").VNodeChild) | undefined;
                single?: false | ((arg: {
                    file: File;
                    props: {
                        "onClick:remove": () => void;
                    };
                }) => import("vue").VNodeChild) | undefined;
                item?: false | ((arg: {
                    file: File;
                    props: {
                        "onClick:remove": () => void;
                    };
                }) => import("vue").VNodeChild) | undefined;
                input?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:browse"?: false | ((arg: {
                props: {
                    onClick: (e: MouseEvent) => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                isDragging: boolean;
                hasFiles: boolean;
                files: readonly File[];
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:divider"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:icon"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:input"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:item"?: false | ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:single"?: false | ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
        } & {
            "onClick:browse"?: (() => any) | undefined;
            "onClick:remove"?: ((index: number) => any) | undefined;
            onDrop?: ((files: File[]) => any) | undefined;
        }, Omit<Omit<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                style: import("vue").StyleValue;
                rounded: string | number | boolean;
                tile: boolean;
                tag: string | import("../../util/index.js").JSXComponent;
            }> & Omit<{
                theme?: string | undefined;
                class?: any;
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                $children?: {
                    default?: (() => import("vue").VNodeChild) | undefined;
                } | {
                    $stable?: boolean | undefined;
                } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                "v-slots"?: {
                    default?: false | (() => import("vue").VNodeChild) | undefined;
                } | undefined;
                border?: string | number | boolean | undefined;
                elevation?: string | number | undefined;
                rounded?: string | number | boolean | undefined;
                tile: boolean;
                tag: string | import("../../util/index.js").JSXComponent;
                height?: string | number | undefined;
                maxHeight?: string | number | undefined;
                maxWidth?: string | number | undefined;
                minHeight?: string | number | undefined;
                minWidth?: string | number | undefined;
                width?: string | number | undefined;
                location?: import("../../util/index.js").Anchor | null | undefined;
                position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
                color?: string | undefined;
                "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "rounded" | "style" | "tag" | "tile">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                default?: (() => VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
                tile: boolean;
                tag: string | import("../../util/index.js").JSXComponent;
            } & {
                theme?: string | undefined;
                class?: any;
                border?: string | number | boolean | undefined;
                elevation?: string | number | undefined;
                rounded?: string | number | boolean | undefined;
                height?: string | number | undefined;
                maxHeight?: string | number | undefined;
                maxWidth?: string | number | undefined;
                minHeight?: string | number | undefined;
                minWidth?: string | number | undefined;
                width?: string | number | undefined;
                location?: import("../../util/index.js").Anchor | null | undefined;
                position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
                color?: string | undefined;
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
            }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
                style: import("vue").StyleValue;
                rounded: string | number | boolean;
                tile: boolean;
                tag: string | import("../../util/index.js").JSXComponent;
            }, {}, string, import("vue").SlotsType<Partial<{
                default: () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
        }> & Omit<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
        } & {
            theme?: string | undefined;
            class?: any;
            border?: string | number | boolean | undefined;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            location?: import("../../util/index.js").Anchor | null | undefined;
            position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
            color?: string | undefined;
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
        }, "rounded" | "style" | "tag" | "tile"> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {}, "$children" | "border" | "class" | "color" | "elevation" | "height" | "location" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "position" | "theme" | "v-slot:default" | "v-slots" | "width" | ("rounded" | "style" | "tag" | "tile") | keyof import("vue").VNodeProps>, `$${any}`> & {
            _allExposed: {} | {};
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "click:browse": () => true;
            "click:remove": (index: number) => true;
            drop: (files: File[]) => true;
        }, string, {
            style: import("vue").StyleValue;
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            length: string | number;
            browseText: string;
            dividerText: string;
            title: string;
            icon: IconValue;
            clearable: boolean;
            disabled: boolean;
            error: boolean;
            hideBrowse: boolean;
            insetFileList: boolean;
            multiple: boolean;
            scrim: string | boolean;
            showSize: boolean;
            modelValue: File[];
        }, {}, string, import("vue").SlotsType<Partial<{
            default: (arg: {
                isDragging: boolean;
                hasFiles: boolean;
                files: readonly File[];
                props: {
                    onClick: () => void;
                };
            }) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            browse: (arg: {
                props: {
                    onClick: (e: MouseEvent) => void;
                };
            }) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            icon: () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            title: () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            divider: () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            single: (arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            item: (arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            input: () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        length: string | number;
        browseText: string;
        dividerText: string;
        title: string;
        icon: IconValue;
        clearable: boolean;
        disabled: boolean;
        error: boolean;
        hideBrowse: boolean;
        insetFileList: boolean;
        multiple: boolean;
        scrim: string | boolean;
        showSize: boolean;
        modelValue: File[];
    }> & Omit<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        length: string | number;
        browseText: string;
        dividerText: string;
        title: string;
        icon: IconValue;
        clearable: boolean;
        disabled: boolean;
        error: boolean;
        hideBrowse: boolean;
        insetFileList: boolean;
        multiple: boolean;
        scrim: string | boolean;
        showSize: boolean;
        modelValue: File[];
    } & {
        theme?: string | undefined;
        class?: any;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        location?: import("../../util/index.js").Anchor | null | undefined;
        position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        opacity?: string | number | undefined;
        thickness?: string | number | undefined;
        color?: string | undefined;
        subtitle?: string | undefined;
    } & {
        $children?: {
            default?: ((arg: {
                isDragging: boolean;
                hasFiles: boolean;
                files: readonly File[];
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            browse?: ((arg: {
                props: {
                    onClick: (e: MouseEvent) => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            icon?: (() => import("vue").VNodeChild) | undefined;
            title?: (() => import("vue").VNodeChild) | undefined;
            divider?: (() => import("vue").VNodeChild) | undefined;
            single?: ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            item?: ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            input?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            isDragging: boolean;
            hasFiles: boolean;
            files: readonly File[];
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: {
                isDragging: boolean;
                hasFiles: boolean;
                files: readonly File[];
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            browse?: false | ((arg: {
                props: {
                    onClick: (e: MouseEvent) => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            icon?: false | (() => import("vue").VNodeChild) | undefined;
            title?: false | (() => import("vue").VNodeChild) | undefined;
            divider?: false | (() => import("vue").VNodeChild) | undefined;
            single?: false | ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            item?: false | ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            input?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:browse"?: false | ((arg: {
            props: {
                onClick: (e: MouseEvent) => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: {
            isDragging: boolean;
            hasFiles: boolean;
            files: readonly File[];
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:divider"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:icon"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:input"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:single"?: false | ((arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onClick:browse"?: (() => any) | undefined;
        "onClick:remove"?: ((index: number) => any) | undefined;
        onDrop?: ((files: File[]) => any) | undefined;
    }, "_" | "_allExposed" | ("browseText" | "clearable" | "density" | "disabled" | "dividerText" | "error" | "hideBrowse" | "icon" | "insetFileList" | "length" | "modelValue" | "multiple" | "rounded" | "scrim" | "showSize" | "style" | "tag" | "tile" | "title")> & import("vue").ShallowUnwrapRef<Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            style: import("vue").StyleValue;
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            $children?: {
                default?: (() => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
            border?: string | number | boolean | undefined;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            location?: import("../../util/index.js").Anchor | null | undefined;
            position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
            color?: string | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "rounded" | "style" | "tag" | "tile">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: (() => VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
        } & {
            theme?: string | undefined;
            class?: any;
            border?: string | number | boolean | undefined;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            location?: import("../../util/index.js").Anchor | null | undefined;
            position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
            color?: string | undefined;
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
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            style: import("vue").StyleValue;
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
        }, {}, string, import("vue").SlotsType<Partial<{
            default: () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
    }> & Omit<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
    } & {
        theme?: string | undefined;
        class?: any;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        location?: import("../../util/index.js").Anchor | null | undefined;
        position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
        color?: string | undefined;
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
    }, "rounded" | "style" | "tag" | "tile"> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {}, "$children" | "border" | "class" | "color" | "elevation" | "height" | "location" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "position" | "theme" | "v-slot:default" | "v-slots" | "width" | ("rounded" | "style" | "tag" | "tile") | keyof import("vue").VNodeProps>, `$${any}`> & {
        _allExposed: {} | {};
    }> & {} & import("vue").ComponentCustomProperties & {}, "$children" | "border" | "class" | "closeDelay" | "color" | "elevation" | "height" | "location" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "onClick:browse" | "onClick:remove" | "onDrop" | "opacity" | "openDelay" | "position" | "subtitle" | "theme" | "thickness" | "v-slot:browse" | "v-slot:default" | "v-slot:divider" | "v-slot:icon" | "v-slot:input" | "v-slot:item" | "v-slot:single" | "v-slot:title" | "v-slots" | "width" | ("browseText" | "clearable" | "density" | "disabled" | "dividerText" | "error" | "hideBrowse" | "icon" | "insetFileList" | "length" | "modelValue" | "multiple" | "rounded" | "scrim" | "showSize" | "style" | "tag" | "tile" | "title") | keyof import("vue").VNodeProps>, `$${any}`> & Omit<Omit<{
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
            default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
            default: (arg: import("../../components/VInput/VInput.js").VInputSlot) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        } | {
            controlRef: import("vue").Ref<HTMLInputElement | null, HTMLInputElement | null>;
        } | (Omit<Omit<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                style: import("vue").StyleValue;
                rounded: string | number | boolean;
                tile: boolean;
                tag: string | import("../../util/index.js").JSXComponent;
            }> & Omit<{
                theme?: string | undefined;
                class?: any;
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                $children?: {
                    default?: (() => import("vue").VNodeChild) | undefined;
                } | {
                    $stable?: boolean | undefined;
                } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                "v-slots"?: {
                    default?: false | (() => import("vue").VNodeChild) | undefined;
                } | undefined;
                border?: string | number | boolean | undefined;
                elevation?: string | number | undefined;
                rounded?: string | number | boolean | undefined;
                tile: boolean;
                tag: string | import("../../util/index.js").JSXComponent;
                height?: string | number | undefined;
                maxHeight?: string | number | undefined;
                maxWidth?: string | number | undefined;
                minHeight?: string | number | undefined;
                minWidth?: string | number | undefined;
                width?: string | number | undefined;
                location?: import("../../util/index.js").Anchor | null | undefined;
                position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
                color?: string | undefined;
                "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "rounded" | "style" | "tag" | "tile">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                default?: (() => VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
                tile: boolean;
                tag: string | import("../../util/index.js").JSXComponent;
            } & {
                theme?: string | undefined;
                class?: any;
                border?: string | number | boolean | undefined;
                elevation?: string | number | undefined;
                rounded?: string | number | boolean | undefined;
                height?: string | number | undefined;
                maxHeight?: string | number | undefined;
                maxWidth?: string | number | undefined;
                minHeight?: string | number | undefined;
                minWidth?: string | number | undefined;
                width?: string | number | undefined;
                location?: import("../../util/index.js").Anchor | null | undefined;
                position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
                color?: string | undefined;
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
            }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
                style: import("vue").StyleValue;
                rounded: string | number | boolean;
                tile: boolean;
                tag: string | import("../../util/index.js").JSXComponent;
            }, {}, string, import("vue").SlotsType<Partial<{
                default: () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
        }> & Omit<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
        } & {
            theme?: string | undefined;
            class?: any;
            border?: string | number | boolean | undefined;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            location?: import("../../util/index.js").Anchor | null | undefined;
            position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
            color?: string | undefined;
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
        }, "rounded" | "style" | "tag" | "tile"> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {}, "$children" | "border" | "class" | "color" | "elevation" | "height" | "location" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "position" | "theme" | "v-slot:default" | "v-slots" | "width" | ("rounded" | "style" | "tag" | "tile") | keyof import("vue").VNodeProps>, `$${any}`> & {
            _allExposed: {} | {};
        });
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (files: File[]) => true;
        "update:focused": (focused: boolean) => true;
        rejected: (files: File[]) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
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
        browseText: string;
        dividerText: string;
        title: string;
        icon: IconValue;
        clearable: boolean;
        insetFileList: boolean;
        hideBrowse: boolean;
        multiple: boolean;
        scrim: string | boolean;
        showSize: boolean;
        modelValue: File[] | File;
    }, true, {}, import("vue").SlotsType<Partial<{
        prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        browse: (arg: {
            props: {
                onClick: (e: MouseEvent) => void;
            };
        }) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        default: () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        icon: () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        input: (arg: {
            inputNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
        }) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        item: (arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        single: (arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        title: () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        divider: () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        browseText: string;
        dividerText: string;
        title: string;
        icon: IconValue;
        clearable: boolean;
        insetFileList: boolean;
        hideBrowse: boolean;
        multiple: boolean;
        scrim: string | boolean;
        showSize: boolean;
        modelValue: File[] | File;
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
        filterByType?: string | undefined;
        subtitle?: string | undefined;
    } & {
        $children?: {
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            browse?: ((arg: {
                props: {
                    onClick: (e: MouseEvent) => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            default?: (() => import("vue").VNodeChild) | undefined;
            icon?: (() => import("vue").VNodeChild) | undefined;
            input?: ((arg: {
                inputNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>;
            }) => import("vue").VNodeChild) | undefined;
            item?: ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            single?: ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            title?: (() => import("vue").VNodeChild) | undefined;
            divider?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            browse?: false | ((arg: {
                props: {
                    onClick: (e: MouseEvent) => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            default?: false | (() => import("vue").VNodeChild) | undefined;
            icon?: false | (() => import("vue").VNodeChild) | undefined;
            input?: false | ((arg: {
                inputNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>;
            }) => import("vue").VNodeChild) | undefined;
            item?: false | ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            single?: false | ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            title?: false | (() => import("vue").VNodeChild) | undefined;
            divider?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:browse"?: false | ((arg: {
            props: {
                onClick: (e: MouseEvent) => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:divider"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:icon"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:input"?: false | ((arg: {
            inputNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:single"?: false | ((arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        onRejected?: ((files: File[]) => any) | undefined;
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((files: File[]) => any) | undefined;
    }, {
        controlRef: import("vue").Ref<HTMLInputElement | null, HTMLInputElement | null>;
    } & Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            style: import("vue").StyleValue;
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            length: string | number;
            browseText: string;
            dividerText: string;
            title: string;
            icon: IconValue;
            clearable: boolean;
            disabled: boolean;
            error: boolean;
            hideBrowse: boolean;
            insetFileList: boolean;
            multiple: boolean;
            scrim: string | boolean;
            showSize: boolean;
            modelValue: File[];
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            $children?: {
                default?: ((arg: {
                    isDragging: boolean;
                    hasFiles: boolean;
                    files: readonly File[];
                    props: {
                        onClick: () => void;
                    };
                }) => import("vue").VNodeChild) | undefined;
                browse?: ((arg: {
                    props: {
                        onClick: (e: MouseEvent) => void;
                    };
                }) => import("vue").VNodeChild) | undefined;
                icon?: (() => import("vue").VNodeChild) | undefined;
                title?: (() => import("vue").VNodeChild) | undefined;
                divider?: (() => import("vue").VNodeChild) | undefined;
                single?: ((arg: {
                    file: File;
                    props: {
                        "onClick:remove": () => void;
                    };
                }) => import("vue").VNodeChild) | undefined;
                item?: ((arg: {
                    file: File;
                    props: {
                        "onClick:remove": () => void;
                    };
                }) => import("vue").VNodeChild) | undefined;
                input?: (() => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: {
                isDragging: boolean;
                hasFiles: boolean;
                files: readonly File[];
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: {
                    isDragging: boolean;
                    hasFiles: boolean;
                    files: readonly File[];
                    props: {
                        onClick: () => void;
                    };
                }) => import("vue").VNodeChild) | undefined;
                browse?: false | ((arg: {
                    props: {
                        onClick: (e: MouseEvent) => void;
                    };
                }) => import("vue").VNodeChild) | undefined;
                icon?: false | (() => import("vue").VNodeChild) | undefined;
                title?: false | (() => import("vue").VNodeChild) | undefined;
                divider?: false | (() => import("vue").VNodeChild) | undefined;
                single?: false | ((arg: {
                    file: File;
                    props: {
                        "onClick:remove": () => void;
                    };
                }) => import("vue").VNodeChild) | undefined;
                item?: false | ((arg: {
                    file: File;
                    props: {
                        "onClick:remove": () => void;
                    };
                }) => import("vue").VNodeChild) | undefined;
                input?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
            border?: string | number | boolean | undefined;
            density: import("../../composables/density.js").Density;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            location?: import("../../util/index.js").Anchor | null | undefined;
            position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            length: string | number;
            opacity?: string | number | undefined;
            thickness?: string | number | undefined;
            color?: string | undefined;
            browseText: string;
            dividerText: string;
            title: string;
            subtitle?: string | undefined;
            icon: IconValue;
            clearable: boolean;
            disabled: boolean;
            error: boolean;
            hideBrowse: boolean;
            insetFileList: boolean;
            multiple: boolean;
            scrim: string | boolean;
            showSize: boolean;
            modelValue: File[];
            "onClick:browse"?: (() => any) | undefined;
            "onClick:remove"?: ((index: number) => any) | undefined;
            onDrop?: ((files: File[]) => any) | undefined;
            "v-slot:browse"?: false | ((arg: {
                props: {
                    onClick: (e: MouseEvent) => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                isDragging: boolean;
                hasFiles: boolean;
                files: readonly File[];
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:divider"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:icon"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:input"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:item"?: false | ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:single"?: false | ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "browseText" | "clearable" | "density" | "disabled" | "dividerText" | "error" | "hideBrowse" | "icon" | "insetFileList" | "length" | "modelValue" | "multiple" | "rounded" | "scrim" | "showSize" | "style" | "tag" | "tile" | "title">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: {
                isDragging: boolean;
                hasFiles: boolean;
                files: readonly File[];
                props: {
                    onClick: () => void;
                };
            }) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            browse?: ((arg: {
                props: {
                    onClick: (e: MouseEvent) => void;
                };
            }) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            icon?: (() => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            title?: (() => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            divider?: (() => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            single?: ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            item?: ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            input?: (() => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $host: Element | null;
        $emit: ((event: "click:browse") => void) & ((event: "click:remove", index: number) => void) & ((event: "drop", files: File[]) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            density: import("../../composables/density.js").Density;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            length: string | number;
            browseText: string;
            dividerText: string;
            title: string;
            icon: IconValue;
            clearable: boolean;
            disabled: boolean;
            error: boolean;
            hideBrowse: boolean;
            insetFileList: boolean;
            multiple: boolean;
            scrim: string | boolean;
            showSize: boolean;
            modelValue: File[];
        } & {
            theme?: string | undefined;
            class?: any;
            border?: string | number | boolean | undefined;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            location?: import("../../util/index.js").Anchor | null | undefined;
            position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            opacity?: string | number | undefined;
            thickness?: string | number | undefined;
            color?: string | undefined;
            subtitle?: string | undefined;
        } & {
            $children?: {
                default?: ((arg: {
                    isDragging: boolean;
                    hasFiles: boolean;
                    files: readonly File[];
                    props: {
                        onClick: () => void;
                    };
                }) => import("vue").VNodeChild) | undefined;
                browse?: ((arg: {
                    props: {
                        onClick: (e: MouseEvent) => void;
                    };
                }) => import("vue").VNodeChild) | undefined;
                icon?: (() => import("vue").VNodeChild) | undefined;
                title?: (() => import("vue").VNodeChild) | undefined;
                divider?: (() => import("vue").VNodeChild) | undefined;
                single?: ((arg: {
                    file: File;
                    props: {
                        "onClick:remove": () => void;
                    };
                }) => import("vue").VNodeChild) | undefined;
                item?: ((arg: {
                    file: File;
                    props: {
                        "onClick:remove": () => void;
                    };
                }) => import("vue").VNodeChild) | undefined;
                input?: (() => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | ((arg: {
                isDragging: boolean;
                hasFiles: boolean;
                files: readonly File[];
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | ((arg: {
                    isDragging: boolean;
                    hasFiles: boolean;
                    files: readonly File[];
                    props: {
                        onClick: () => void;
                    };
                }) => import("vue").VNodeChild) | undefined;
                browse?: false | ((arg: {
                    props: {
                        onClick: (e: MouseEvent) => void;
                    };
                }) => import("vue").VNodeChild) | undefined;
                icon?: false | (() => import("vue").VNodeChild) | undefined;
                title?: false | (() => import("vue").VNodeChild) | undefined;
                divider?: false | (() => import("vue").VNodeChild) | undefined;
                single?: false | ((arg: {
                    file: File;
                    props: {
                        "onClick:remove": () => void;
                    };
                }) => import("vue").VNodeChild) | undefined;
                item?: false | ((arg: {
                    file: File;
                    props: {
                        "onClick:remove": () => void;
                    };
                }) => import("vue").VNodeChild) | undefined;
                input?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:browse"?: false | ((arg: {
                props: {
                    onClick: (e: MouseEvent) => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: {
                isDragging: boolean;
                hasFiles: boolean;
                files: readonly File[];
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:divider"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:icon"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:input"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:item"?: false | ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:single"?: false | ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
        } & {
            "onClick:browse"?: (() => any) | undefined;
            "onClick:remove"?: ((index: number) => any) | undefined;
            onDrop?: ((files: File[]) => any) | undefined;
        }, Omit<Omit<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                style: import("vue").StyleValue;
                rounded: string | number | boolean;
                tile: boolean;
                tag: string | import("../../util/index.js").JSXComponent;
            }> & Omit<{
                theme?: string | undefined;
                class?: any;
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                $children?: {
                    default?: (() => import("vue").VNodeChild) | undefined;
                } | {
                    $stable?: boolean | undefined;
                } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                "v-slots"?: {
                    default?: false | (() => import("vue").VNodeChild) | undefined;
                } | undefined;
                border?: string | number | boolean | undefined;
                elevation?: string | number | undefined;
                rounded?: string | number | boolean | undefined;
                tile: boolean;
                tag: string | import("../../util/index.js").JSXComponent;
                height?: string | number | undefined;
                maxHeight?: string | number | undefined;
                maxWidth?: string | number | undefined;
                minHeight?: string | number | undefined;
                minWidth?: string | number | undefined;
                width?: string | number | undefined;
                location?: import("../../util/index.js").Anchor | null | undefined;
                position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
                color?: string | undefined;
                "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "rounded" | "style" | "tag" | "tile">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                default?: (() => VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
                tile: boolean;
                tag: string | import("../../util/index.js").JSXComponent;
            } & {
                theme?: string | undefined;
                class?: any;
                border?: string | number | boolean | undefined;
                elevation?: string | number | undefined;
                rounded?: string | number | boolean | undefined;
                height?: string | number | undefined;
                maxHeight?: string | number | undefined;
                maxWidth?: string | number | undefined;
                minHeight?: string | number | undefined;
                minWidth?: string | number | undefined;
                width?: string | number | undefined;
                location?: import("../../util/index.js").Anchor | null | undefined;
                position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
                color?: string | undefined;
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
            }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
                style: import("vue").StyleValue;
                rounded: string | number | boolean;
                tile: boolean;
                tag: string | import("../../util/index.js").JSXComponent;
            }, {}, string, import("vue").SlotsType<Partial<{
                default: () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
        }> & Omit<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
        } & {
            theme?: string | undefined;
            class?: any;
            border?: string | number | boolean | undefined;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            location?: import("../../util/index.js").Anchor | null | undefined;
            position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
            color?: string | undefined;
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
        }, "rounded" | "style" | "tag" | "tile"> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {}, "$children" | "border" | "class" | "color" | "elevation" | "height" | "location" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "position" | "theme" | "v-slot:default" | "v-slots" | "width" | ("rounded" | "style" | "tag" | "tile") | keyof import("vue").VNodeProps>, `$${any}`> & {
            _allExposed: {} | {};
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "click:browse": () => true;
            "click:remove": (index: number) => true;
            drop: (files: File[]) => true;
        }, string, {
            style: import("vue").StyleValue;
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            length: string | number;
            browseText: string;
            dividerText: string;
            title: string;
            icon: IconValue;
            clearable: boolean;
            disabled: boolean;
            error: boolean;
            hideBrowse: boolean;
            insetFileList: boolean;
            multiple: boolean;
            scrim: string | boolean;
            showSize: boolean;
            modelValue: File[];
        }, {}, string, import("vue").SlotsType<Partial<{
            default: (arg: {
                isDragging: boolean;
                hasFiles: boolean;
                files: readonly File[];
                props: {
                    onClick: () => void;
                };
            }) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            browse: (arg: {
                props: {
                    onClick: (e: MouseEvent) => void;
                };
            }) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            icon: () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            title: () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            divider: () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            single: (arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            item: (arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            input: () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        length: string | number;
        browseText: string;
        dividerText: string;
        title: string;
        icon: IconValue;
        clearable: boolean;
        disabled: boolean;
        error: boolean;
        hideBrowse: boolean;
        insetFileList: boolean;
        multiple: boolean;
        scrim: string | boolean;
        showSize: boolean;
        modelValue: File[];
    }> & Omit<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        length: string | number;
        browseText: string;
        dividerText: string;
        title: string;
        icon: IconValue;
        clearable: boolean;
        disabled: boolean;
        error: boolean;
        hideBrowse: boolean;
        insetFileList: boolean;
        multiple: boolean;
        scrim: string | boolean;
        showSize: boolean;
        modelValue: File[];
    } & {
        theme?: string | undefined;
        class?: any;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        location?: import("../../util/index.js").Anchor | null | undefined;
        position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        opacity?: string | number | undefined;
        thickness?: string | number | undefined;
        color?: string | undefined;
        subtitle?: string | undefined;
    } & {
        $children?: {
            default?: ((arg: {
                isDragging: boolean;
                hasFiles: boolean;
                files: readonly File[];
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            browse?: ((arg: {
                props: {
                    onClick: (e: MouseEvent) => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            icon?: (() => import("vue").VNodeChild) | undefined;
            title?: (() => import("vue").VNodeChild) | undefined;
            divider?: (() => import("vue").VNodeChild) | undefined;
            single?: ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            item?: ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            input?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            isDragging: boolean;
            hasFiles: boolean;
            files: readonly File[];
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: {
                isDragging: boolean;
                hasFiles: boolean;
                files: readonly File[];
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            browse?: false | ((arg: {
                props: {
                    onClick: (e: MouseEvent) => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            icon?: false | (() => import("vue").VNodeChild) | undefined;
            title?: false | (() => import("vue").VNodeChild) | undefined;
            divider?: false | (() => import("vue").VNodeChild) | undefined;
            single?: false | ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            item?: false | ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            input?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:browse"?: false | ((arg: {
            props: {
                onClick: (e: MouseEvent) => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: {
            isDragging: boolean;
            hasFiles: boolean;
            files: readonly File[];
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:divider"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:icon"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:input"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:single"?: false | ((arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onClick:browse"?: (() => any) | undefined;
        "onClick:remove"?: ((index: number) => any) | undefined;
        onDrop?: ((files: File[]) => any) | undefined;
    }, "_" | "_allExposed" | ("browseText" | "clearable" | "density" | "disabled" | "dividerText" | "error" | "hideBrowse" | "icon" | "insetFileList" | "length" | "modelValue" | "multiple" | "rounded" | "scrim" | "showSize" | "style" | "tag" | "tile" | "title")> & import("vue").ShallowUnwrapRef<Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            style: import("vue").StyleValue;
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            $children?: {
                default?: (() => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
            border?: string | number | boolean | undefined;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            location?: import("../../util/index.js").Anchor | null | undefined;
            position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
            color?: string | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "rounded" | "style" | "tag" | "tile">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: (() => VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
        } & {
            theme?: string | undefined;
            class?: any;
            border?: string | number | boolean | undefined;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            location?: import("../../util/index.js").Anchor | null | undefined;
            position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
            color?: string | undefined;
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
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            style: import("vue").StyleValue;
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
        }, {}, string, import("vue").SlotsType<Partial<{
            default: () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
    }> & Omit<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
    } & {
        theme?: string | undefined;
        class?: any;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        location?: import("../../util/index.js").Anchor | null | undefined;
        position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
        color?: string | undefined;
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
    }, "rounded" | "style" | "tag" | "tile"> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {}, "$children" | "border" | "class" | "color" | "elevation" | "height" | "location" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "position" | "theme" | "v-slot:default" | "v-slots" | "width" | ("rounded" | "style" | "tag" | "tile") | keyof import("vue").VNodeProps>, `$${any}`> & {
        _allExposed: {} | {};
    }> & {} & import("vue").ComponentCustomProperties & {}, "$children" | "border" | "class" | "closeDelay" | "color" | "elevation" | "height" | "location" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "onClick:browse" | "onClick:remove" | "onDrop" | "opacity" | "openDelay" | "position" | "subtitle" | "theme" | "thickness" | "v-slot:browse" | "v-slot:default" | "v-slot:divider" | "v-slot:icon" | "v-slot:input" | "v-slot:item" | "v-slot:single" | "v-slot:title" | "v-slots" | "width" | ("browseText" | "clearable" | "density" | "disabled" | "dividerText" | "error" | "hideBrowse" | "icon" | "insetFileList" | "length" | "modelValue" | "multiple" | "rounded" | "scrim" | "showSize" | "style" | "tag" | "tile" | "title") | keyof import("vue").VNodeProps>, `$${any}`> & Omit<Omit<{
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
            default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
            default: (arg: import("../../components/VInput/VInput.js").VInputSlot) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        } | {
            controlRef: import("vue").Ref<HTMLInputElement | null, HTMLInputElement | null>;
        } | (Omit<Omit<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                style: import("vue").StyleValue;
                rounded: string | number | boolean;
                tile: boolean;
                tag: string | import("../../util/index.js").JSXComponent;
            }> & Omit<{
                theme?: string | undefined;
                class?: any;
                style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
                $children?: {
                    default?: (() => import("vue").VNodeChild) | undefined;
                } | {
                    $stable?: boolean | undefined;
                } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
                "v-slots"?: {
                    default?: false | (() => import("vue").VNodeChild) | undefined;
                } | undefined;
                border?: string | number | boolean | undefined;
                elevation?: string | number | undefined;
                rounded?: string | number | boolean | undefined;
                tile: boolean;
                tag: string | import("../../util/index.js").JSXComponent;
                height?: string | number | undefined;
                maxHeight?: string | number | undefined;
                maxWidth?: string | number | undefined;
                minHeight?: string | number | undefined;
                minWidth?: string | number | undefined;
                width?: string | number | undefined;
                location?: import("../../util/index.js").Anchor | null | undefined;
                position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
                color?: string | undefined;
                "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "rounded" | "style" | "tag" | "tile">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                default?: (() => VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
                tile: boolean;
                tag: string | import("../../util/index.js").JSXComponent;
            } & {
                theme?: string | undefined;
                class?: any;
                border?: string | number | boolean | undefined;
                elevation?: string | number | undefined;
                rounded?: string | number | boolean | undefined;
                height?: string | number | undefined;
                maxHeight?: string | number | undefined;
                maxWidth?: string | number | undefined;
                minHeight?: string | number | undefined;
                minWidth?: string | number | undefined;
                width?: string | number | undefined;
                location?: import("../../util/index.js").Anchor | null | undefined;
                position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
                color?: string | undefined;
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
            }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
                style: import("vue").StyleValue;
                rounded: string | number | boolean;
                tile: boolean;
                tag: string | import("../../util/index.js").JSXComponent;
            }, {}, string, import("vue").SlotsType<Partial<{
                default: () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
        }> & Omit<{
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
        } & {
            theme?: string | undefined;
            class?: any;
            border?: string | number | boolean | undefined;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            location?: import("../../util/index.js").Anchor | null | undefined;
            position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
            color?: string | undefined;
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
        }, "rounded" | "style" | "tag" | "tile"> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {}, "$children" | "border" | "class" | "color" | "elevation" | "height" | "location" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "position" | "theme" | "v-slot:default" | "v-slots" | "width" | ("rounded" | "style" | "tag" | "tile") | keyof import("vue").VNodeProps>, `$${any}`> & {
            _allExposed: {} | {};
        });
    }, {}, {}, {}, {
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
        browseText: string;
        dividerText: string;
        title: string;
        icon: IconValue;
        clearable: boolean;
        insetFileList: boolean;
        hideBrowse: boolean;
        multiple: boolean;
        scrim: string | boolean;
        showSize: boolean;
        modelValue: File[] | File;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
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
    browseText: string;
    dividerText: string;
    title: string;
    icon: IconValue;
    clearable: boolean;
    insetFileList: boolean;
    hideBrowse: boolean;
    multiple: boolean;
    scrim: string | boolean;
    showSize: boolean;
    modelValue: File[] | File;
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
    filterByType?: string | undefined;
    subtitle?: string | undefined;
} & {
    $children?: {
        prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        browse?: ((arg: {
            props: {
                onClick: (e: MouseEvent) => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        default?: (() => import("vue").VNodeChild) | undefined;
        icon?: (() => import("vue").VNodeChild) | undefined;
        input?: ((arg: {
            inputNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
        }) => import("vue").VNodeChild) | undefined;
        item?: ((arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        single?: ((arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        title?: (() => import("vue").VNodeChild) | undefined;
        divider?: (() => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        browse?: false | ((arg: {
            props: {
                onClick: (e: MouseEvent) => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        default?: false | (() => import("vue").VNodeChild) | undefined;
        icon?: false | (() => import("vue").VNodeChild) | undefined;
        input?: false | ((arg: {
            inputNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
        }) => import("vue").VNodeChild) | undefined;
        item?: false | ((arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        single?: false | ((arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        title?: false | (() => import("vue").VNodeChild) | undefined;
        divider?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:browse"?: false | ((arg: {
        props: {
            onClick: (e: MouseEvent) => void;
        };
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:divider"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:icon"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:input"?: false | ((arg: {
        inputNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:item"?: false | ((arg: {
        file: File;
        props: {
            "onClick:remove": () => void;
        };
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:single"?: false | ((arg: {
        file: File;
        props: {
            "onClick:remove": () => void;
        };
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
} & {
    onRejected?: ((files: File[]) => any) | undefined;
    "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((files: File[]) => any) | undefined;
}, {
    controlRef: import("vue").Ref<HTMLInputElement | null, HTMLInputElement | null>;
} & Omit<Omit<{
    $: import("vue").ComponentInternalInstance;
    $data: {};
    $props: Partial<{
        style: import("vue").StyleValue;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        length: string | number;
        browseText: string;
        dividerText: string;
        title: string;
        icon: IconValue;
        clearable: boolean;
        disabled: boolean;
        error: boolean;
        hideBrowse: boolean;
        insetFileList: boolean;
        multiple: boolean;
        scrim: string | boolean;
        showSize: boolean;
        modelValue: File[];
    }> & Omit<{
        theme?: string | undefined;
        class?: any;
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        $children?: {
            default?: ((arg: {
                isDragging: boolean;
                hasFiles: boolean;
                files: readonly File[];
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            browse?: ((arg: {
                props: {
                    onClick: (e: MouseEvent) => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            icon?: (() => import("vue").VNodeChild) | undefined;
            title?: (() => import("vue").VNodeChild) | undefined;
            divider?: (() => import("vue").VNodeChild) | undefined;
            single?: ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            item?: ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            input?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            isDragging: boolean;
            hasFiles: boolean;
            files: readonly File[];
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: {
                isDragging: boolean;
                hasFiles: boolean;
                files: readonly File[];
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            browse?: false | ((arg: {
                props: {
                    onClick: (e: MouseEvent) => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            icon?: false | (() => import("vue").VNodeChild) | undefined;
            title?: false | (() => import("vue").VNodeChild) | undefined;
            divider?: false | (() => import("vue").VNodeChild) | undefined;
            single?: false | ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            item?: false | ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            input?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
        border?: string | number | boolean | undefined;
        density: import("../../composables/density.js").Density;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        location?: import("../../util/index.js").Anchor | null | undefined;
        position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        length: string | number;
        opacity?: string | number | undefined;
        thickness?: string | number | undefined;
        color?: string | undefined;
        browseText: string;
        dividerText: string;
        title: string;
        subtitle?: string | undefined;
        icon: IconValue;
        clearable: boolean;
        disabled: boolean;
        error: boolean;
        hideBrowse: boolean;
        insetFileList: boolean;
        multiple: boolean;
        scrim: string | boolean;
        showSize: boolean;
        modelValue: File[];
        "onClick:browse"?: (() => any) | undefined;
        "onClick:remove"?: ((index: number) => any) | undefined;
        onDrop?: ((files: File[]) => any) | undefined;
        "v-slot:browse"?: false | ((arg: {
            props: {
                onClick: (e: MouseEvent) => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: {
            isDragging: boolean;
            hasFiles: boolean;
            files: readonly File[];
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:divider"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:icon"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:input"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:single"?: false | ((arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "browseText" | "clearable" | "density" | "disabled" | "dividerText" | "error" | "hideBrowse" | "icon" | "insetFileList" | "length" | "modelValue" | "multiple" | "rounded" | "scrim" | "showSize" | "style" | "tag" | "tile" | "title">;
    $attrs: {
        [x: string]: unknown;
    };
    $refs: {
        [x: string]: unknown;
    };
    $slots: Readonly<{
        default?: ((arg: {
            isDragging: boolean;
            hasFiles: boolean;
            files: readonly File[];
            props: {
                onClick: () => void;
            };
        }) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        browse?: ((arg: {
            props: {
                onClick: (e: MouseEvent) => void;
            };
        }) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        icon?: (() => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        title?: (() => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        divider?: (() => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        single?: ((arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        item?: ((arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        input?: (() => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
    }>;
    $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
    $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
    $host: Element | null;
    $emit: ((event: "click:browse") => void) & ((event: "click:remove", index: number) => void) & ((event: "drop", files: File[]) => void);
    $el: any;
    $options: import("vue").ComponentOptionsBase<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        length: string | number;
        browseText: string;
        dividerText: string;
        title: string;
        icon: IconValue;
        clearable: boolean;
        disabled: boolean;
        error: boolean;
        hideBrowse: boolean;
        insetFileList: boolean;
        multiple: boolean;
        scrim: string | boolean;
        showSize: boolean;
        modelValue: File[];
    } & {
        theme?: string | undefined;
        class?: any;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        location?: import("../../util/index.js").Anchor | null | undefined;
        position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        opacity?: string | number | undefined;
        thickness?: string | number | undefined;
        color?: string | undefined;
        subtitle?: string | undefined;
    } & {
        $children?: {
            default?: ((arg: {
                isDragging: boolean;
                hasFiles: boolean;
                files: readonly File[];
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            browse?: ((arg: {
                props: {
                    onClick: (e: MouseEvent) => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            icon?: (() => import("vue").VNodeChild) | undefined;
            title?: (() => import("vue").VNodeChild) | undefined;
            divider?: (() => import("vue").VNodeChild) | undefined;
            single?: ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            item?: ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            input?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: {
            isDragging: boolean;
            hasFiles: boolean;
            files: readonly File[];
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: {
                isDragging: boolean;
                hasFiles: boolean;
                files: readonly File[];
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            browse?: false | ((arg: {
                props: {
                    onClick: (e: MouseEvent) => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            icon?: false | (() => import("vue").VNodeChild) | undefined;
            title?: false | (() => import("vue").VNodeChild) | undefined;
            divider?: false | (() => import("vue").VNodeChild) | undefined;
            single?: false | ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            item?: false | ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            input?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:browse"?: false | ((arg: {
            props: {
                onClick: (e: MouseEvent) => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: {
            isDragging: boolean;
            hasFiles: boolean;
            files: readonly File[];
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:divider"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:icon"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:input"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:single"?: false | ((arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onClick:browse"?: (() => any) | undefined;
        "onClick:remove"?: ((index: number) => any) | undefined;
        onDrop?: ((files: File[]) => any) | undefined;
    }, Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            style: import("vue").StyleValue;
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            $children?: {
                default?: (() => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
            border?: string | number | boolean | undefined;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            location?: import("../../util/index.js").Anchor | null | undefined;
            position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
            color?: string | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "rounded" | "style" | "tag" | "tile">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: (() => VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
        } & {
            theme?: string | undefined;
            class?: any;
            border?: string | number | boolean | undefined;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            location?: import("../../util/index.js").Anchor | null | undefined;
            position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
            color?: string | undefined;
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
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            style: import("vue").StyleValue;
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
        }, {}, string, import("vue").SlotsType<Partial<{
            default: () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
    }> & Omit<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
    } & {
        theme?: string | undefined;
        class?: any;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        location?: import("../../util/index.js").Anchor | null | undefined;
        position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
        color?: string | undefined;
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
    }, "rounded" | "style" | "tag" | "tile"> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {}, "$children" | "border" | "class" | "color" | "elevation" | "height" | "location" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "position" | "theme" | "v-slot:default" | "v-slots" | "width" | ("rounded" | "style" | "tag" | "tile") | keyof import("vue").VNodeProps>, `$${any}`> & {
        _allExposed: {} | {};
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "click:browse": () => true;
        "click:remove": (index: number) => true;
        drop: (files: File[]) => true;
    }, string, {
        style: import("vue").StyleValue;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        length: string | number;
        browseText: string;
        dividerText: string;
        title: string;
        icon: IconValue;
        clearable: boolean;
        disabled: boolean;
        error: boolean;
        hideBrowse: boolean;
        insetFileList: boolean;
        multiple: boolean;
        scrim: string | boolean;
        showSize: boolean;
        modelValue: File[];
    }, {}, string, import("vue").SlotsType<Partial<{
        default: (arg: {
            isDragging: boolean;
            hasFiles: boolean;
            files: readonly File[];
            props: {
                onClick: () => void;
            };
        }) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        browse: (arg: {
            props: {
                onClick: (e: MouseEvent) => void;
            };
        }) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        icon: () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        title: () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        divider: () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        single: (arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        item: (arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        input: () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
    density: import("../../composables/density.js").Density;
    rounded: string | number | boolean;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    length: string | number;
    browseText: string;
    dividerText: string;
    title: string;
    icon: IconValue;
    clearable: boolean;
    disabled: boolean;
    error: boolean;
    hideBrowse: boolean;
    insetFileList: boolean;
    multiple: boolean;
    scrim: string | boolean;
    showSize: boolean;
    modelValue: File[];
}> & Omit<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    density: import("../../composables/density.js").Density;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    length: string | number;
    browseText: string;
    dividerText: string;
    title: string;
    icon: IconValue;
    clearable: boolean;
    disabled: boolean;
    error: boolean;
    hideBrowse: boolean;
    insetFileList: boolean;
    multiple: boolean;
    scrim: string | boolean;
    showSize: boolean;
    modelValue: File[];
} & {
    theme?: string | undefined;
    class?: any;
    border?: string | number | boolean | undefined;
    elevation?: string | number | undefined;
    rounded?: string | number | boolean | undefined;
    height?: string | number | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    width?: string | number | undefined;
    location?: import("../../util/index.js").Anchor | null | undefined;
    position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
    closeDelay?: string | number | undefined;
    openDelay?: string | number | undefined;
    opacity?: string | number | undefined;
    thickness?: string | number | undefined;
    color?: string | undefined;
    subtitle?: string | undefined;
} & {
    $children?: {
        default?: ((arg: {
            isDragging: boolean;
            hasFiles: boolean;
            files: readonly File[];
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        browse?: ((arg: {
            props: {
                onClick: (e: MouseEvent) => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        icon?: (() => import("vue").VNodeChild) | undefined;
        title?: (() => import("vue").VNodeChild) | undefined;
        divider?: (() => import("vue").VNodeChild) | undefined;
        single?: ((arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        item?: ((arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        input?: (() => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | ((arg: {
        isDragging: boolean;
        hasFiles: boolean;
        files: readonly File[];
        props: {
            onClick: () => void;
        };
    }) => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        default?: false | ((arg: {
            isDragging: boolean;
            hasFiles: boolean;
            files: readonly File[];
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        browse?: false | ((arg: {
            props: {
                onClick: (e: MouseEvent) => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        icon?: false | (() => import("vue").VNodeChild) | undefined;
        title?: false | (() => import("vue").VNodeChild) | undefined;
        divider?: false | (() => import("vue").VNodeChild) | undefined;
        single?: false | ((arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        item?: false | ((arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        input?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:browse"?: false | ((arg: {
        props: {
            onClick: (e: MouseEvent) => void;
        };
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | ((arg: {
        isDragging: boolean;
        hasFiles: boolean;
        files: readonly File[];
        props: {
            onClick: () => void;
        };
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:divider"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:icon"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:input"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:item"?: false | ((arg: {
        file: File;
        props: {
            "onClick:remove": () => void;
        };
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:single"?: false | ((arg: {
        file: File;
        props: {
            "onClick:remove": () => void;
        };
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
} & {
    "onClick:browse"?: (() => any) | undefined;
    "onClick:remove"?: ((index: number) => any) | undefined;
    onDrop?: ((files: File[]) => any) | undefined;
}, "_" | "_allExposed" | ("browseText" | "clearable" | "density" | "disabled" | "dividerText" | "error" | "hideBrowse" | "icon" | "insetFileList" | "length" | "modelValue" | "multiple" | "rounded" | "scrim" | "showSize" | "style" | "tag" | "tile" | "title")> & import("vue").ShallowUnwrapRef<Omit<Omit<{
    $: import("vue").ComponentInternalInstance;
    $data: {};
    $props: Partial<{
        style: import("vue").StyleValue;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
    }> & Omit<{
        theme?: string | undefined;
        class?: any;
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        location?: import("../../util/index.js").Anchor | null | undefined;
        position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
        color?: string | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "rounded" | "style" | "tag" | "tile">;
    $attrs: {
        [x: string]: unknown;
    };
    $refs: {
        [x: string]: unknown;
    };
    $slots: Readonly<{
        default?: (() => VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
    } & {
        theme?: string | undefined;
        class?: any;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        location?: import("../../util/index.js").Anchor | null | undefined;
        position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
        color?: string | undefined;
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
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
        style: import("vue").StyleValue;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
    }, {}, string, import("vue").SlotsType<Partial<{
        default: () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
    rounded: string | number | boolean;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
}> & Omit<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
} & {
    theme?: string | undefined;
    class?: any;
    border?: string | number | boolean | undefined;
    elevation?: string | number | undefined;
    rounded?: string | number | boolean | undefined;
    height?: string | number | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    width?: string | number | undefined;
    location?: import("../../util/index.js").Anchor | null | undefined;
    position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
    color?: string | undefined;
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
}, "rounded" | "style" | "tag" | "tile"> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {}, "$children" | "border" | "class" | "color" | "elevation" | "height" | "location" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "position" | "theme" | "v-slot:default" | "v-slots" | "width" | ("rounded" | "style" | "tag" | "tile") | keyof import("vue").VNodeProps>, `$${any}`> & {
    _allExposed: {} | {};
}> & {} & import("vue").ComponentCustomProperties & {}, "$children" | "border" | "class" | "closeDelay" | "color" | "elevation" | "height" | "location" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "onClick:browse" | "onClick:remove" | "onDrop" | "opacity" | "openDelay" | "position" | "subtitle" | "theme" | "thickness" | "v-slot:browse" | "v-slot:default" | "v-slot:divider" | "v-slot:icon" | "v-slot:input" | "v-slot:item" | "v-slot:single" | "v-slot:title" | "v-slots" | "width" | ("browseText" | "clearable" | "density" | "disabled" | "dividerText" | "error" | "hideBrowse" | "icon" | "insetFileList" | "length" | "modelValue" | "multiple" | "rounded" | "scrim" | "showSize" | "style" | "tag" | "tile" | "title") | keyof import("vue").VNodeProps>, `$${any}`> & Omit<Omit<{
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
        default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[]) | undefined;
        message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        default: (arg: import("../../components/VInput/VInput.js").VInputSlot) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
    } | {
        controlRef: import("vue").Ref<HTMLInputElement | null, HTMLInputElement | null>;
    } | (Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            style: import("vue").StyleValue;
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
        }> & Omit<{
            theme?: string | undefined;
            class?: any;
            style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
            $children?: {
                default?: (() => import("vue").VNodeChild) | undefined;
            } | {
                $stable?: boolean | undefined;
            } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
            "v-slots"?: {
                default?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
            border?: string | number | boolean | undefined;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            location?: import("../../util/index.js").Anchor | null | undefined;
            position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
            color?: string | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "rounded" | "style" | "tag" | "tile">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: (() => VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
        } & {
            theme?: string | undefined;
            class?: any;
            border?: string | number | boolean | undefined;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            height?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            width?: string | number | undefined;
            location?: import("../../util/index.js").Anchor | null | undefined;
            position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
            color?: string | undefined;
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
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            style: import("vue").StyleValue;
            rounded: string | number | boolean;
            tile: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
        }, {}, string, import("vue").SlotsType<Partial<{
            default: () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
    }> & Omit<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
    } & {
        theme?: string | undefined;
        class?: any;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        location?: import("../../util/index.js").Anchor | null | undefined;
        position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
        color?: string | undefined;
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
    }, "rounded" | "style" | "tag" | "tile"> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {}, "$children" | "border" | "class" | "color" | "elevation" | "height" | "location" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "position" | "theme" | "v-slot:default" | "v-slots" | "width" | ("rounded" | "style" | "tag" | "tile") | keyof import("vue").VNodeProps>, `$${any}`> & {
        _allExposed: {} | {};
    });
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (files: File[]) => true;
    "update:focused": (focused: boolean) => true;
    rejected: (files: File[]) => true;
}, string, {
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
    browseText: string;
    dividerText: string;
    title: string;
    icon: IconValue;
    clearable: boolean;
    insetFileList: boolean;
    hideBrowse: boolean;
    multiple: boolean;
    scrim: string | boolean;
    showSize: boolean;
    modelValue: File[] | File;
}, {}, string, import("vue").SlotsType<Partial<{
    prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    browse: (arg: {
        props: {
            onClick: (e: MouseEvent) => void;
        };
    }) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    default: () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    icon: () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    input: (arg: {
        inputNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>;
    }) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    item: (arg: {
        file: File;
        props: {
            "onClick:remove": () => void;
        };
    }) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    single: (arg: {
        file: File;
        props: {
            "onClick:remove": () => void;
        };
    }) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    title: () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    divider: () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
    disabled: {
        type: PropType<boolean | null>;
        default: null;
    };
    error: BooleanConstructor;
    errorMessages: {
        type: PropType<string | readonly string[] | null>;
        default: () => never[];
    };
    maxErrors: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    name: StringConstructor;
    label: StringConstructor;
    readonly: {
        type: PropType<boolean | null>;
        default: null;
    };
    rules: {
        type: PropType<readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[]>;
        default: () => never[];
    };
    validateOn: PropType<("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined>;
    validationValue: null;
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    maxWidth: (NumberConstructor | StringConstructor)[];
    minWidth: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    id: StringConstructor;
    appendIcon: PropType<IconValue>;
    baseColor: StringConstructor;
    centerAffix: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: StringConstructor;
    glow: BooleanConstructor;
    iconColor: (BooleanConstructor | StringConstructor)[];
    prependIcon: PropType<IconValue>;
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
    filterByType: StringConstructor;
    browseText: {
        type: StringConstructor;
        default: string;
    };
    dividerText: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    subtitle: StringConstructor;
    icon: {
        type: PropType<IconValue>;
        default: string;
    };
    clearable: BooleanConstructor;
    insetFileList: BooleanConstructor;
    hideBrowse: BooleanConstructor;
    multiple: BooleanConstructor;
    scrim: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    showSize: BooleanConstructor;
    modelValue: {
        type: PropType<File[] | File>;
        default: null;
        validator: (val: any) => boolean;
    };
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    focused: BooleanConstructor;
    "onUpdate:focused": PropType<(args_0: boolean) => void>;
    disabled: {
        type: PropType<boolean | null>;
        default: null;
    };
    error: BooleanConstructor;
    errorMessages: {
        type: PropType<string | readonly string[] | null>;
        default: () => never[];
    };
    maxErrors: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    name: StringConstructor;
    label: StringConstructor;
    readonly: {
        type: PropType<boolean | null>;
        default: null;
    };
    rules: {
        type: PropType<readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[]>;
        default: () => never[];
    };
    validateOn: PropType<("blur eager" | "blur lazy" | "eager" | "eager blur" | "eager input" | "eager invalid-input" | "eager submit" | "input eager" | "input lazy" | "invalid-input eager" | "invalid-input lazy" | "lazy" | "lazy blur" | "lazy input" | "lazy invalid-input" | "lazy submit" | "submit eager" | "submit lazy" | ("blur" | "input" | "invalid-input" | "submit")) | undefined>;
    validationValue: null;
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    maxWidth: (NumberConstructor | StringConstructor)[];
    minWidth: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    id: StringConstructor;
    appendIcon: PropType<IconValue>;
    baseColor: StringConstructor;
    centerAffix: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: StringConstructor;
    glow: BooleanConstructor;
    iconColor: (BooleanConstructor | StringConstructor)[];
    prependIcon: PropType<IconValue>;
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
    filterByType: StringConstructor;
    browseText: {
        type: StringConstructor;
        default: string;
    };
    dividerText: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    subtitle: StringConstructor;
    icon: {
        type: PropType<IconValue>;
        default: string;
    };
    clearable: BooleanConstructor;
    insetFileList: BooleanConstructor;
    hideBrowse: BooleanConstructor;
    multiple: BooleanConstructor;
    scrim: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    showSize: BooleanConstructor;
    modelValue: {
        type: PropType<File[] | File>;
        default: null;
        validator: (val: any) => boolean;
    };
}>>;
export type VFileUpload = InstanceType<typeof VFileUpload>;
