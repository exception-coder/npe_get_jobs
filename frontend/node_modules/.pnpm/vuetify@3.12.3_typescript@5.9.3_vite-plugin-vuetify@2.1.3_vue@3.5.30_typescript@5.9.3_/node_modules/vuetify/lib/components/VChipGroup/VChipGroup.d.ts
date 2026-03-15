// Styles

import { deepEqual } from '../../util/index.js';
// Types
import type { PropType } from 'vue';
import type { GenericProps, ValueComparator } from '../../util/index.js';
export declare const VChipGroupSymbol: unique symbol;
export declare const makeVChipGroupProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
    mobile?: unknown;
    mobileBreakpoint?: unknown;
    tag?: unknown;
    color?: unknown;
    variant?: unknown;
    modelValue?: unknown;
    multiple?: unknown;
    mandatory?: unknown;
    max?: unknown;
    selectedClass?: unknown;
    disabled?: unknown;
    centerActive?: unknown;
    scrollToActive?: unknown;
    contentClass?: unknown;
    direction?: unknown;
    symbol?: unknown;
    nextIcon?: unknown;
    prevIcon?: unknown;
    showArrows?: unknown;
    baseColor?: unknown;
    column?: unknown;
    filter?: unknown;
    valueComparator?: unknown;
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
    mobile: unknown extends Defaults["mobile"] ? Omit<{
        type: PropType<boolean | null>;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<boolean | null>;
        default: NonNullable<boolean | null> | null;
    } : Omit<Omit<{
        type: PropType<boolean | null>;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<boolean | null>;
        default: NonNullable<boolean | null> | null;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["mobile"] ? boolean | null : boolean | Defaults["mobile"] | null>;
        default: unknown extends Defaults["mobile"] ? boolean | null : Defaults["mobile"] | NonNullable<boolean | null>;
    };
    mobileBreakpoint: unknown extends Defaults["mobileBreakpoint"] ? PropType<number | import("../../types.js").DisplayBreakpoint> : {
        type: PropType<unknown extends Defaults["mobileBreakpoint"] ? number | import("../../types.js").DisplayBreakpoint : number | Defaults["mobileBreakpoint"] | import("../../types.js").DisplayBreakpoint>;
        default: unknown extends Defaults["mobileBreakpoint"] ? number | import("../../types.js").DisplayBreakpoint : Defaults["mobileBreakpoint"] | NonNullable<number | import("../../types.js").DisplayBreakpoint>;
    };
    tag: unknown extends Defaults["tag"] ? {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    } : Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : string | Defaults["tag"] | import("../../util/index.js").JSXComponent>;
        default: unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : Defaults["tag"] | NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    variant: unknown extends Defaults["variant"] ? Omit<{
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
    } : Omit<Omit<{
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["variant"] ? "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal" : "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal" | Defaults["variant"]>;
        default: unknown extends Defaults["variant"] ? "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal" : Defaults["variant"] | NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: null;
        default: undefined;
    } : Omit<{
        type: null;
        default: undefined;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["modelValue"] ? any : any>;
        default: unknown extends Defaults["modelValue"] ? any : any;
    };
    multiple: unknown extends Defaults["multiple"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["multiple"] ? boolean : boolean | Defaults["multiple"]>;
        default: unknown extends Defaults["multiple"] ? boolean : boolean | Defaults["multiple"];
    };
    mandatory: unknown extends Defaults["mandatory"] ? PropType<"force" | boolean> : {
        type: PropType<unknown extends Defaults["mandatory"] ? "force" | boolean : "force" | boolean | Defaults["mandatory"]>;
        default: unknown extends Defaults["mandatory"] ? "force" | boolean : Defaults["mandatory"] | NonNullable<"force" | boolean>;
    };
    max: unknown extends Defaults["max"] ? NumberConstructor : {
        type: PropType<unknown extends Defaults["max"] ? number : number | Defaults["max"]>;
        default: unknown extends Defaults["max"] ? number : number | Defaults["max"];
    };
    selectedClass: unknown extends Defaults["selectedClass"] ? {
        type: PropType<string>;
        default: string;
    } : Omit<{
        type: PropType<string>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"]>;
        default: unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    centerActive: unknown extends Defaults["centerActive"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["centerActive"] ? boolean : boolean | Defaults["centerActive"]>;
        default: unknown extends Defaults["centerActive"] ? boolean : boolean | Defaults["centerActive"];
    };
    scrollToActive: unknown extends Defaults["scrollToActive"] ? Omit<{
        type: BooleanConstructor;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<boolean>;
        default: boolean;
    } : Omit<Omit<{
        type: BooleanConstructor;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<boolean>;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["scrollToActive"] ? boolean : boolean | Defaults["scrollToActive"]>;
        default: unknown extends Defaults["scrollToActive"] ? boolean : boolean | Defaults["scrollToActive"];
    };
    contentClass: unknown extends Defaults["contentClass"] ? null : {
        type: PropType<unknown extends Defaults["contentClass"] ? any : any>;
        default: unknown extends Defaults["contentClass"] ? any : any;
    };
    direction: unknown extends Defaults["direction"] ? {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    } : Omit<{
        type: PropType<"horizontal" | "vertical">;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["direction"] ? "horizontal" | "vertical" : "horizontal" | "vertical" | Defaults["direction"]>;
        default: unknown extends Defaults["direction"] ? "horizontal" | "vertical" : Defaults["direction"] | NonNullable<"horizontal" | "vertical">;
    };
    symbol: unknown extends Defaults["symbol"] ? {
        type: null;
        default: import("vue").InjectionKey<import("../../composables/group.js").GroupProvide>;
    } : Omit<{
        type: null;
        default: import("vue").InjectionKey<import("../../composables/group.js").GroupProvide>;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["symbol"] ? any : any>;
        default: unknown extends Defaults["symbol"] ? any : any;
    };
    nextIcon: unknown extends Defaults["nextIcon"] ? {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["nextIcon"] ? import("../../composables/icons.js").IconValue : Defaults["nextIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["nextIcon"] ? import("../../composables/icons.js").IconValue : Defaults["nextIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    prevIcon: unknown extends Defaults["prevIcon"] ? {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["prevIcon"] ? import("../../composables/icons.js").IconValue : Defaults["prevIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["prevIcon"] ? import("../../composables/icons.js").IconValue : Defaults["prevIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    showArrows: unknown extends Defaults["showArrows"] ? {
        type: (BooleanConstructor | StringConstructor)[];
        validator: (v: any) => boolean;
    } : Omit<{
        type: (BooleanConstructor | StringConstructor)[];
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["showArrows"] ? string | boolean : string | boolean | Defaults["showArrows"]>;
        default: unknown extends Defaults["showArrows"] ? string | boolean : Defaults["showArrows"] | NonNullable<string | boolean>;
    };
    baseColor: unknown extends Defaults["baseColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"]>;
        default: unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"];
    };
    column: unknown extends Defaults["column"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["column"] ? boolean : boolean | Defaults["column"]>;
        default: unknown extends Defaults["column"] ? boolean : boolean | Defaults["column"];
    };
    filter: unknown extends Defaults["filter"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["filter"] ? boolean : boolean | Defaults["filter"]>;
        default: unknown extends Defaults["filter"] ? boolean : boolean | Defaults["filter"];
    };
    valueComparator: unknown extends Defaults["valueComparator"] ? {
        type: PropType<ValueComparator>;
        default: typeof deepEqual;
    } : Omit<{
        type: PropType<ValueComparator>;
        default: typeof deepEqual;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["valueComparator"] ? ValueComparator : ValueComparator | Defaults["valueComparator"]>;
        default: unknown extends Defaults["valueComparator"] ? ValueComparator : ValueComparator | Defaults["valueComparator"];
    };
};
type VChipGroupSlots = {
    default: {
        isSelected: (id: string) => boolean;
        select: (id: string, value: boolean) => void;
        next: () => void;
        prev: () => void;
        selected: readonly string[];
    };
};
export declare const VChipGroup: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        mobile: boolean | null;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        multiple: boolean;
        selectedClass: string;
        disabled: boolean;
        centerActive: boolean;
        scrollToActive: boolean;
        direction: "horizontal" | "vertical";
        symbol: any;
        nextIcon: import("../../composables/icons.js").IconValue;
        prevIcon: import("../../composables/icons.js").IconValue;
        column: boolean;
        filter: boolean;
        valueComparator: ValueComparator;
    } & {
        theme?: string | undefined;
        class?: any;
        mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
        color?: string | undefined;
        mandatory?: "force" | boolean | undefined;
        max?: number | undefined;
        contentClass?: any;
        showArrows?: string | boolean | undefined;
        baseColor?: string | undefined;
    } & {}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        "update:modelValue": (value: any) => true;
    }, "$children" | "modelValue" | "update:modelValue" | "v-slot:default" | "v-slots">, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        mobile: boolean | null;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        multiple: boolean;
        selectedClass: string;
        disabled: boolean;
        centerActive: boolean;
        scrollToActive: boolean;
        direction: "horizontal" | "vertical";
        symbol: any;
        nextIcon: import("../../composables/icons.js").IconValue;
        prevIcon: import("../../composables/icons.js").IconValue;
        column: boolean;
        filter: boolean;
        valueComparator: ValueComparator;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: {
            isSelected: (id: string) => boolean;
            select: (id: string, value: boolean) => void;
            next: () => void;
            prev: () => void;
            selected: readonly string[];
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
        mobile: boolean | null;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        multiple: boolean;
        selectedClass: string;
        disabled: boolean;
        centerActive: boolean;
        scrollToActive: boolean;
        direction: "horizontal" | "vertical";
        symbol: any;
        nextIcon: import("../../composables/icons.js").IconValue;
        prevIcon: import("../../composables/icons.js").IconValue;
        column: boolean;
        filter: boolean;
        valueComparator: ValueComparator;
    } & {
        theme?: string | undefined;
        class?: any;
        mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
        color?: string | undefined;
        mandatory?: "force" | boolean | undefined;
        max?: number | undefined;
        contentClass?: any;
        showArrows?: string | boolean | undefined;
        baseColor?: string | undefined;
    } & {}, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        mobile: boolean | null;
        tag: string | import("../../util/index.js").JSXComponent;
        variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
        multiple: boolean;
        selectedClass: string;
        disabled: boolean;
        centerActive: boolean;
        scrollToActive: boolean;
        direction: "horizontal" | "vertical";
        symbol: any;
        nextIcon: import("../../composables/icons.js").IconValue;
        prevIcon: import("../../composables/icons.js").IconValue;
        column: boolean;
        filter: boolean;
        valueComparator: ValueComparator;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    mobile: boolean | null;
    tag: string | import("../../util/index.js").JSXComponent;
    variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
    multiple: boolean;
    selectedClass: string;
    disabled: boolean;
    centerActive: boolean;
    scrollToActive: boolean;
    direction: "horizontal" | "vertical";
    symbol: any;
    nextIcon: import("../../composables/icons.js").IconValue;
    prevIcon: import("../../composables/icons.js").IconValue;
    column: boolean;
    filter: boolean;
    valueComparator: ValueComparator;
} & {
    theme?: string | undefined;
    class?: any;
    mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
    color?: string | undefined;
    mandatory?: "force" | boolean | undefined;
    max?: number | undefined;
    contentClass?: any;
    showArrows?: string | boolean | undefined;
    baseColor?: string | undefined;
} & {}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
    "update:modelValue": (value: any) => true;
}, "$children" | "modelValue" | "update:modelValue" | "v-slot:default" | "v-slots">, string, {
    style: import("vue").StyleValue;
    mobile: boolean | null;
    tag: string | import("../../util/index.js").JSXComponent;
    variant: "elevated" | "flat" | "outlined" | "plain" | "text" | "tonal";
    multiple: boolean;
    selectedClass: string;
    disabled: boolean;
    centerActive: boolean;
    scrollToActive: boolean;
    direction: "horizontal" | "vertical";
    symbol: any;
    nextIcon: import("../../composables/icons.js").IconValue;
    prevIcon: import("../../composables/icons.js").IconValue;
    column: boolean;
    filter: boolean;
    valueComparator: ValueComparator;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: {
        isSelected: (id: string) => boolean;
        select: (id: string, value: boolean) => void;
        next: () => void;
        prev: () => void;
        selected: readonly string[];
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T>(props: {
    modelValue?: T | undefined;
    "onUpdate:modelValue"?: ((value: T) => void) | undefined;
}, slots: VChipGroupSlots) => GenericProps<{
    modelValue?: T | undefined;
    "onUpdate:modelValue"?: ((value: T) => void) | undefined;
}, VChipGroupSlots>) & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    mobile: Omit<{
        type: PropType<boolean | null>;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<boolean | null>;
        default: NonNullable<boolean | null> | null;
    };
    mobileBreakpoint: PropType<number | import("../../types.js").DisplayBreakpoint>;
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    color: StringConstructor;
    variant: Omit<{
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
    };
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: PropType<"force" | boolean>;
    max: NumberConstructor;
    selectedClass: {
        type: PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    centerActive: BooleanConstructor;
    scrollToActive: Omit<{
        type: BooleanConstructor;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<boolean>;
        default: boolean;
    };
    contentClass: null;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    symbol: {
        type: null;
        default: import("vue").InjectionKey<import("../../composables/group.js").GroupProvide>;
    };
    nextIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    prevIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    showArrows: {
        type: (BooleanConstructor | StringConstructor)[];
        validator: (v: any) => boolean;
    };
    baseColor: StringConstructor;
    column: BooleanConstructor;
    filter: BooleanConstructor;
    valueComparator: {
        type: PropType<ValueComparator>;
        default: typeof deepEqual;
    };
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    mobile: Omit<{
        type: PropType<boolean | null>;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<boolean | null>;
        default: NonNullable<boolean | null> | null;
    };
    mobileBreakpoint: PropType<number | import("../../types.js").DisplayBreakpoint>;
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    color: StringConstructor;
    variant: Omit<{
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
        default: NonNullable<"elevated" | "flat" | "outlined" | "plain" | "text" | "tonal">;
    };
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: PropType<"force" | boolean>;
    max: NumberConstructor;
    selectedClass: {
        type: PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    centerActive: BooleanConstructor;
    scrollToActive: Omit<{
        type: BooleanConstructor;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<boolean>;
        default: boolean;
    };
    contentClass: null;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    symbol: {
        type: null;
        default: import("vue").InjectionKey<import("../../composables/group.js").GroupProvide>;
    };
    nextIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    prevIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    showArrows: {
        type: (BooleanConstructor | StringConstructor)[];
        validator: (v: any) => boolean;
    };
    baseColor: StringConstructor;
    column: BooleanConstructor;
    filter: BooleanConstructor;
    valueComparator: {
        type: PropType<ValueComparator>;
        default: typeof deepEqual;
    };
}>>;
export type VChipGroup = InstanceType<typeof VChipGroup>;

