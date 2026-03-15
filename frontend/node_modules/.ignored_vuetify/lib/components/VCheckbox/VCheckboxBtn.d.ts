// Composables
import { IconValue } from '../../composables/icons.js';
// Types
import type { VSelectionControlSlots } from '../VSelectionControl/VSelectionControl.js';
import type { GenericProps } from '../../util/index.js';
export declare const makeVCheckboxBtnProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
    density?: unknown;
    color?: unknown;
    disabled?: unknown;
    defaultsTarget?: unknown;
    error?: unknown;
    id?: unknown;
    inline?: unknown;
    falseIcon?: unknown;
    trueIcon?: unknown;
    ripple?: unknown;
    multiple?: unknown;
    name?: unknown;
    readonly?: unknown;
    modelValue?: unknown;
    type?: unknown;
    valueComparator?: unknown;
    label?: unknown;
    baseColor?: unknown;
    trueValue?: unknown;
    falseValue?: unknown;
    value?: unknown;
    indeterminate?: unknown;
    indeterminateIcon?: unknown;
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
    falseIcon: unknown extends Defaults["falseIcon"] ? {
        type: import("vue").PropType<IconValue>;
        default: NonNullable<IconValue>;
    } : Omit<{
        type: import("vue").PropType<IconValue>;
        default: NonNullable<IconValue>;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["falseIcon"] ? IconValue : Defaults["falseIcon"] | IconValue>;
        default: unknown extends Defaults["falseIcon"] ? IconValue : Defaults["falseIcon"] | NonNullable<IconValue>;
    };
    trueIcon: unknown extends Defaults["trueIcon"] ? {
        type: import("vue").PropType<IconValue>;
        default: NonNullable<IconValue>;
    } : Omit<{
        type: import("vue").PropType<IconValue>;
        default: NonNullable<IconValue>;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["trueIcon"] ? IconValue : Defaults["trueIcon"] | IconValue>;
        default: unknown extends Defaults["trueIcon"] ? IconValue : Defaults["trueIcon"] | NonNullable<IconValue>;
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
    multiple: unknown extends Defaults["multiple"] ? {
        type: import("vue").PropType<boolean | null>;
        default: null;
    } : Omit<{
        type: import("vue").PropType<boolean | null>;
        default: null;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["multiple"] ? boolean | null : boolean | Defaults["multiple"] | null>;
        default: unknown extends Defaults["multiple"] ? boolean | null : Defaults["multiple"] | NonNullable<boolean | null>;
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
    type: unknown extends Defaults["type"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["type"] ? string : string | Defaults["type"]>;
        default: unknown extends Defaults["type"] ? string : string | Defaults["type"];
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
    label: unknown extends Defaults["label"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["label"] ? string : string | Defaults["label"]>;
        default: unknown extends Defaults["label"] ? string : string | Defaults["label"];
    };
    baseColor: unknown extends Defaults["baseColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"]>;
        default: unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"];
    };
    trueValue: unknown extends Defaults["trueValue"] ? null : {
        type: import("vue").PropType<unknown extends Defaults["trueValue"] ? any : any>;
        default: unknown extends Defaults["trueValue"] ? any : any;
    };
    falseValue: unknown extends Defaults["falseValue"] ? null : {
        type: import("vue").PropType<unknown extends Defaults["falseValue"] ? any : any>;
        default: unknown extends Defaults["falseValue"] ? any : any;
    };
    value: unknown extends Defaults["value"] ? null : {
        type: import("vue").PropType<unknown extends Defaults["value"] ? any : any>;
        default: unknown extends Defaults["value"] ? any : any;
    };
    indeterminate: unknown extends Defaults["indeterminate"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["indeterminate"] ? boolean : boolean | Defaults["indeterminate"]>;
        default: unknown extends Defaults["indeterminate"] ? boolean : boolean | Defaults["indeterminate"];
    };
    indeterminateIcon: unknown extends Defaults["indeterminateIcon"] ? {
        type: import("vue").PropType<IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["indeterminateIcon"] ? IconValue : Defaults["indeterminateIcon"] | IconValue>;
        default: unknown extends Defaults["indeterminateIcon"] ? IconValue : Defaults["indeterminateIcon"] | NonNullable<IconValue>;
    };
};
export declare const VCheckboxBtn: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        density: import("../../composables/density.js").Density;
        disabled: boolean | null;
        error: boolean;
        inline: boolean;
        falseIcon: IconValue;
        trueIcon: IconValue;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        };
        multiple: boolean | null;
        readonly: boolean | null;
        valueComparator: typeof import("../../util/index.js").deepEqual;
        indeterminate: boolean;
        indeterminateIcon: IconValue;
    } & {
        theme?: string | undefined;
        class?: any;
        color?: string | undefined;
        defaultsTarget?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        type?: string | undefined;
        label?: string | undefined;
        baseColor?: string | undefined;
        trueValue?: any;
        falseValue?: any;
        value?: any;
    } & {
        "onUpdate:indeterminate"?: ((value: boolean) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        "update:modelValue": (value: any) => true;
        "update:indeterminate": (value: boolean) => true;
    }, "$children" | "modelValue" | "update:modelValue" | "v-slot:default" | "v-slot:input" | "v-slot:label" | "v-slots">, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        density: import("../../composables/density.js").Density;
        disabled: boolean | null;
        error: boolean;
        inline: boolean;
        falseIcon: IconValue;
        trueIcon: IconValue;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined;
        multiple: boolean | null;
        readonly: boolean | null;
        valueComparator: typeof import("../../util/index.js").deepEqual;
        indeterminate: boolean;
        indeterminateIcon: IconValue;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: {
            backgroundColorClasses: import("vue").Ref<string[], string[]>;
            backgroundColorStyles: import("vue").Ref<import("vue").CSSProperties, import("vue").CSSProperties>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        label: (arg: {
            label: string | undefined;
            props: Record<string, unknown>;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        input: (arg: import("../VSelectionControl/VSelectionControl.js").SelectionControlSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        density: import("../../composables/density.js").Density;
        disabled: boolean | null;
        error: boolean;
        inline: boolean;
        falseIcon: IconValue;
        trueIcon: IconValue;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        };
        multiple: boolean | null;
        readonly: boolean | null;
        valueComparator: typeof import("../../util/index.js").deepEqual;
        indeterminate: boolean;
        indeterminateIcon: IconValue;
    } & {
        theme?: string | undefined;
        class?: any;
        color?: string | undefined;
        defaultsTarget?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        type?: string | undefined;
        label?: string | undefined;
        baseColor?: string | undefined;
        trueValue?: any;
        falseValue?: any;
        value?: any;
    } & {
        "onUpdate:indeterminate"?: ((value: boolean) => any) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        density: import("../../composables/density.js").Density;
        disabled: boolean | null;
        error: boolean;
        inline: boolean;
        falseIcon: IconValue;
        trueIcon: IconValue;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined;
        multiple: boolean | null;
        readonly: boolean | null;
        valueComparator: typeof import("../../util/index.js").deepEqual;
        indeterminate: boolean;
        indeterminateIcon: IconValue;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    density: import("../../composables/density.js").Density;
    disabled: boolean | null;
    error: boolean;
    inline: boolean;
    falseIcon: IconValue;
    trueIcon: IconValue;
    ripple: boolean | {
        class?: string | undefined;
        keys?: string[] | undefined;
    };
    multiple: boolean | null;
    readonly: boolean | null;
    valueComparator: typeof import("../../util/index.js").deepEqual;
    indeterminate: boolean;
    indeterminateIcon: IconValue;
} & {
    theme?: string | undefined;
    class?: any;
    color?: string | undefined;
    defaultsTarget?: string | undefined;
    id?: string | undefined;
    name?: string | undefined;
    type?: string | undefined;
    label?: string | undefined;
    baseColor?: string | undefined;
    trueValue?: any;
    falseValue?: any;
    value?: any;
} & {
    "onUpdate:indeterminate"?: ((value: boolean) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
    "update:modelValue": (value: any) => true;
    "update:indeterminate": (value: boolean) => true;
}, "$children" | "modelValue" | "update:modelValue" | "v-slot:default" | "v-slot:input" | "v-slot:label" | "v-slots">, string, {
    style: import("vue").StyleValue;
    density: import("../../composables/density.js").Density;
    disabled: boolean | null;
    error: boolean;
    inline: boolean;
    falseIcon: IconValue;
    trueIcon: IconValue;
    ripple: boolean | {
        class?: string | undefined;
        keys?: string[] | undefined;
    } | undefined;
    multiple: boolean | null;
    readonly: boolean | null;
    valueComparator: typeof import("../../util/index.js").deepEqual;
    indeterminate: boolean;
    indeterminateIcon: IconValue;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: {
        backgroundColorClasses: import("vue").Ref<string[], string[]>;
        backgroundColorStyles: import("vue").Ref<import("vue").CSSProperties, import("vue").CSSProperties>;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    label: (arg: {
        label: string | undefined;
        props: Record<string, unknown>;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    input: (arg: import("../VSelectionControl/VSelectionControl.js").SelectionControlSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T>(props: {
    modelValue?: T | undefined;
    "onUpdate:modelValue"?: ((value: T) => void) | undefined;
}, slots: VSelectionControlSlots) => GenericProps<{
    modelValue?: T | undefined;
    "onUpdate:modelValue"?: ((value: T) => void) | undefined;
}, VSelectionControlSlots>) & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    density: {
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    color: StringConstructor;
    disabled: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
    defaultsTarget: StringConstructor;
    error: BooleanConstructor;
    id: StringConstructor;
    inline: BooleanConstructor;
    falseIcon: {
        type: import("vue").PropType<IconValue>;
        default: NonNullable<IconValue>;
    };
    trueIcon: {
        type: import("vue").PropType<IconValue>;
        default: NonNullable<IconValue>;
    };
    ripple: {
        type: import("vue").PropType<boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined>;
        default: boolean;
    };
    multiple: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
    name: StringConstructor;
    readonly: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
    modelValue: null;
    type: StringConstructor;
    valueComparator: {
        type: import("vue").PropType<typeof import("../../util/index.js").deepEqual>;
        default: typeof import("../../util/index.js").deepEqual;
    };
    label: StringConstructor;
    baseColor: StringConstructor;
    trueValue: null;
    falseValue: null;
    value: null;
    indeterminate: BooleanConstructor;
    indeterminateIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    density: {
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    color: StringConstructor;
    disabled: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
    defaultsTarget: StringConstructor;
    error: BooleanConstructor;
    id: StringConstructor;
    inline: BooleanConstructor;
    falseIcon: {
        type: import("vue").PropType<IconValue>;
        default: NonNullable<IconValue>;
    };
    trueIcon: {
        type: import("vue").PropType<IconValue>;
        default: NonNullable<IconValue>;
    };
    ripple: {
        type: import("vue").PropType<boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined>;
        default: boolean;
    };
    multiple: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
    name: StringConstructor;
    readonly: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
    modelValue: null;
    type: StringConstructor;
    valueComparator: {
        type: import("vue").PropType<typeof import("../../util/index.js").deepEqual>;
        default: typeof import("../../util/index.js").deepEqual;
    };
    label: StringConstructor;
    baseColor: StringConstructor;
    trueValue: null;
    falseValue: null;
    value: null;
    indeterminate: BooleanConstructor;
    indeterminateIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
}>>;
export type VCheckboxBtn = InstanceType<typeof VCheckboxBtn>;
