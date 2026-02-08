// Styles

import { IconValue } from '../../composables/icons.js';
// Types
import type { PropType } from 'vue';
export type StepperItem = string | Record<string, any>;
export type StepperItemSlot<T = any> = {
    canEdit: boolean;
    hasError: boolean;
    hasCompleted: boolean;
    title?: string | number;
    subtitle?: string | number;
    step: T;
};
export type VStepperItemSlots<T = any> = {
    default: StepperItemSlot<T>;
    icon: StepperItemSlot<T>;
    title: StepperItemSlot<T>;
    subtitle: StepperItemSlot<T>;
};
export type ValidationRule = () => string | boolean;
export declare const makeStepperItemProps: <Defaults extends {
    color?: unknown;
    title?: unknown;
    subtitle?: unknown;
    complete?: unknown;
    completeIcon?: unknown;
    editable?: unknown;
    editIcon?: unknown;
    error?: unknown;
    errorIcon?: unknown;
    icon?: unknown;
    ripple?: unknown;
    rules?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    title: unknown extends Defaults["title"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["title"] ? string : string | Defaults["title"]>;
        default: unknown extends Defaults["title"] ? string : string | Defaults["title"];
    };
    subtitle: unknown extends Defaults["subtitle"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["subtitle"] ? string : string | Defaults["subtitle"]>;
        default: unknown extends Defaults["subtitle"] ? string : string | Defaults["subtitle"];
    };
    complete: unknown extends Defaults["complete"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["complete"] ? boolean : boolean | Defaults["complete"]>;
        default: unknown extends Defaults["complete"] ? boolean : boolean | Defaults["complete"];
    };
    completeIcon: unknown extends Defaults["completeIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["completeIcon"] ? IconValue : Defaults["completeIcon"] | IconValue>;
        default: unknown extends Defaults["completeIcon"] ? IconValue : Defaults["completeIcon"] | NonNullable<IconValue>;
    };
    editable: unknown extends Defaults["editable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["editable"] ? boolean : boolean | Defaults["editable"]>;
        default: unknown extends Defaults["editable"] ? boolean : boolean | Defaults["editable"];
    };
    editIcon: unknown extends Defaults["editIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["editIcon"] ? IconValue : Defaults["editIcon"] | IconValue>;
        default: unknown extends Defaults["editIcon"] ? IconValue : Defaults["editIcon"] | NonNullable<IconValue>;
    };
    error: unknown extends Defaults["error"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"]>;
        default: unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"];
    };
    errorIcon: unknown extends Defaults["errorIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["errorIcon"] ? IconValue : Defaults["errorIcon"] | IconValue>;
        default: unknown extends Defaults["errorIcon"] ? IconValue : Defaults["errorIcon"] | NonNullable<IconValue>;
    };
    icon: unknown extends Defaults["icon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["icon"] ? IconValue : Defaults["icon"] | IconValue>;
        default: unknown extends Defaults["icon"] ? IconValue : Defaults["icon"] | NonNullable<IconValue>;
    };
    ripple: unknown extends Defaults["ripple"] ? {
        type: PropType<boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined>;
        default: boolean;
    } : Omit<{
        type: PropType<boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined>;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["ripple"] ? boolean | {
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
    rules: unknown extends Defaults["rules"] ? {
        type: PropType<readonly ValidationRule[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<readonly ValidationRule[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["rules"] ? readonly ValidationRule[] : readonly ValidationRule[] | Defaults["rules"]>;
        default: unknown extends Defaults["rules"] ? readonly ValidationRule[] : readonly ValidationRule[] | Defaults["rules"];
    };
};
export declare const makeVStepperItemProps: <Defaults extends {
    value?: unknown;
    disabled?: unknown;
    selectedClass?: unknown;
    color?: unknown;
    title?: unknown;
    subtitle?: unknown;
    complete?: unknown;
    completeIcon?: unknown;
    editable?: unknown;
    editIcon?: unknown;
    error?: unknown;
    errorIcon?: unknown;
    icon?: unknown;
    ripple?: unknown;
    rules?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    value: unknown extends Defaults["value"] ? null : {
        type: PropType<unknown extends Defaults["value"] ? any : any>;
        default: unknown extends Defaults["value"] ? any : any;
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    selectedClass: unknown extends Defaults["selectedClass"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"]>;
        default: unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    title: unknown extends Defaults["title"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["title"] ? string : string | Defaults["title"]>;
        default: unknown extends Defaults["title"] ? string : string | Defaults["title"];
    };
    subtitle: unknown extends Defaults["subtitle"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["subtitle"] ? string : string | Defaults["subtitle"]>;
        default: unknown extends Defaults["subtitle"] ? string : string | Defaults["subtitle"];
    };
    complete: unknown extends Defaults["complete"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["complete"] ? boolean : boolean | Defaults["complete"]>;
        default: unknown extends Defaults["complete"] ? boolean : boolean | Defaults["complete"];
    };
    completeIcon: unknown extends Defaults["completeIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["completeIcon"] ? IconValue : Defaults["completeIcon"] | IconValue>;
        default: unknown extends Defaults["completeIcon"] ? IconValue : Defaults["completeIcon"] | NonNullable<IconValue>;
    };
    editable: unknown extends Defaults["editable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["editable"] ? boolean : boolean | Defaults["editable"]>;
        default: unknown extends Defaults["editable"] ? boolean : boolean | Defaults["editable"];
    };
    editIcon: unknown extends Defaults["editIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["editIcon"] ? IconValue : Defaults["editIcon"] | IconValue>;
        default: unknown extends Defaults["editIcon"] ? IconValue : Defaults["editIcon"] | NonNullable<IconValue>;
    };
    error: unknown extends Defaults["error"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"]>;
        default: unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"];
    };
    errorIcon: unknown extends Defaults["errorIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["errorIcon"] ? IconValue : Defaults["errorIcon"] | IconValue>;
        default: unknown extends Defaults["errorIcon"] ? IconValue : Defaults["errorIcon"] | NonNullable<IconValue>;
    };
    icon: unknown extends Defaults["icon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["icon"] ? IconValue : Defaults["icon"] | IconValue>;
        default: unknown extends Defaults["icon"] ? IconValue : Defaults["icon"] | NonNullable<IconValue>;
    };
    ripple: unknown extends Defaults["ripple"] ? {
        type: PropType<boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined>;
        default: boolean;
    } : Omit<{
        type: PropType<boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined>;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["ripple"] ? boolean | {
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
    rules: unknown extends Defaults["rules"] ? {
        type: PropType<readonly ValidationRule[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<readonly ValidationRule[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["rules"] ? readonly ValidationRule[] : readonly ValidationRule[] | Defaults["rules"]>;
        default: unknown extends Defaults["rules"] ? readonly ValidationRule[] : readonly ValidationRule[] | Defaults["rules"];
    };
};
export declare const VStepperItem: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        disabled: boolean;
        complete: boolean;
        completeIcon: IconValue;
        editable: boolean;
        editIcon: IconValue;
        error: boolean;
        errorIcon: IconValue;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        };
        rules: readonly ValidationRule[];
    } & {
        value?: any;
        selectedClass?: string | undefined;
        color?: string | undefined;
        title?: string | undefined;
        subtitle?: string | undefined;
        icon?: IconValue | undefined;
    } & {
        $children?: {
            default?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            icon?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            title?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            subtitle?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            icon?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            title?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            subtitle?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:icon"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
    } & {
        "onGroup:selected"?: ((val: {
            value: boolean;
        }) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "group:selected": (val: {
            value: boolean;
        }) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        disabled: boolean;
        complete: boolean;
        completeIcon: IconValue;
        editable: boolean;
        editIcon: IconValue;
        error: boolean;
        errorIcon: IconValue;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined;
        rules: readonly ValidationRule[];
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: StepperItemSlot<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        icon: (arg: StepperItemSlot<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        title: (arg: StepperItemSlot<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        subtitle: (arg: StepperItemSlot<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        disabled: boolean;
        complete: boolean;
        completeIcon: IconValue;
        editable: boolean;
        editIcon: IconValue;
        error: boolean;
        errorIcon: IconValue;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        };
        rules: readonly ValidationRule[];
    } & {
        value?: any;
        selectedClass?: string | undefined;
        color?: string | undefined;
        title?: string | undefined;
        subtitle?: string | undefined;
        icon?: IconValue | undefined;
    } & {
        $children?: {
            default?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            icon?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            title?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            subtitle?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            icon?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            title?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            subtitle?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:icon"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
    } & {
        "onGroup:selected"?: ((val: {
            value: boolean;
        }) => any) | undefined;
    }, {}, {}, {}, {}, {
        disabled: boolean;
        complete: boolean;
        completeIcon: IconValue;
        editable: boolean;
        editIcon: IconValue;
        error: boolean;
        errorIcon: IconValue;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined;
        rules: readonly ValidationRule[];
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    disabled: boolean;
    complete: boolean;
    completeIcon: IconValue;
    editable: boolean;
    editIcon: IconValue;
    error: boolean;
    errorIcon: IconValue;
    ripple: boolean | {
        class?: string | undefined;
        keys?: string[] | undefined;
    };
    rules: readonly ValidationRule[];
} & {
    value?: any;
    selectedClass?: string | undefined;
    color?: string | undefined;
    title?: string | undefined;
    subtitle?: string | undefined;
    icon?: IconValue | undefined;
} & {
    $children?: {
        default?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        icon?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        title?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        subtitle?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        default?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        icon?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        title?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        subtitle?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
    "v-slot:icon"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
    "v-slot:subtitle"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
    "v-slot:title"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
} & {
    "onGroup:selected"?: ((val: {
        value: boolean;
    }) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "group:selected": (val: {
        value: boolean;
    }) => true;
}, string, {
    disabled: boolean;
    complete: boolean;
    completeIcon: IconValue;
    editable: boolean;
    editIcon: IconValue;
    error: boolean;
    errorIcon: IconValue;
    ripple: boolean | {
        class?: string | undefined;
        keys?: string[] | undefined;
    } | undefined;
    rules: readonly ValidationRule[];
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: StepperItemSlot<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    icon: (arg: StepperItemSlot<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    title: (arg: StepperItemSlot<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    subtitle: (arg: StepperItemSlot<any>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    color: StringConstructor;
    title: StringConstructor;
    subtitle: StringConstructor;
    complete: BooleanConstructor;
    completeIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    editable: BooleanConstructor;
    editIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    error: BooleanConstructor;
    errorIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    icon: PropType<IconValue>;
    ripple: {
        type: PropType<boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined>;
        default: boolean;
    };
    rules: {
        type: PropType<readonly ValidationRule[]>;
        default: () => never[];
    };
}, import("vue").ExtractPropTypes<{
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    color: StringConstructor;
    title: StringConstructor;
    subtitle: StringConstructor;
    complete: BooleanConstructor;
    completeIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    editable: BooleanConstructor;
    editIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    error: BooleanConstructor;
    errorIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    icon: PropType<IconValue>;
    ripple: {
        type: PropType<boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined>;
        default: boolean;
    };
    rules: {
        type: PropType<readonly ValidationRule[]>;
        default: () => never[];
    };
}>>;
export type VStepperItem = InstanceType<typeof VStepperItem>;
