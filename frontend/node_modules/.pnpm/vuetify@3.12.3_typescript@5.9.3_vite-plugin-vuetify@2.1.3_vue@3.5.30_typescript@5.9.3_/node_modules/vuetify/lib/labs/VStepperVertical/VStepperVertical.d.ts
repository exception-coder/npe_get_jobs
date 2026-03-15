// Types
import type { StepperVerticalItemActionSlot } from './VStepperVerticalItem.js';
import type { VStepperSlot } from '../../components/VStepper/VStepper.js';
import type { StepperItemSlot } from '../../components/VStepper/VStepperItem.js';
import type { GenericProps } from '../../util/index.js';
export type VStepperVerticalSlots<T> = {
    actions: StepperVerticalItemActionSlot<T>;
    default: VStepperSlot & {
        step: T;
    };
    icon: StepperItemSlot<T>;
    title: StepperItemSlot<T>;
    subtitle: StepperItemSlot<T>;
    prev: StepperVerticalItemActionSlot<T>;
    next: StepperVerticalItemActionSlot<T>;
} & {
    [key: `header-item.${string}`]: StepperItemSlot<T>;
    [key: `item.${string}`]: StepperItemSlot<T>;
};
export declare const makeVStepperVerticalProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
    mobile?: unknown;
    mobileBreakpoint?: unknown;
    elevation?: unknown;
    rounded?: unknown;
    tile?: unknown;
    tag?: unknown;
    modelValue?: unknown;
    multiple?: unknown;
    mandatory?: unknown;
    max?: unknown;
    selectedClass?: unknown;
    disabled?: unknown;
    eager?: unknown;
    color?: unknown;
    expandIcon?: unknown;
    collapseIcon?: unknown;
    hideActions?: unknown;
    focusable?: unknown;
    ripple?: unknown;
    readonly?: unknown;
    bgColor?: unknown;
    flat?: unknown;
    variant?: unknown;
    altLabels?: unknown;
    completeIcon?: unknown;
    editIcon?: unknown;
    editable?: unknown;
    errorIcon?: unknown;
    items?: unknown;
    itemTitle?: unknown;
    itemValue?: unknown;
    itemProps?: unknown;
    nonLinear?: unknown;
    prevText?: unknown;
    nextText?: unknown;
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
    mobile: unknown extends Defaults["mobile"] ? {
        type: import("vue").PropType<boolean | null>;
        default: boolean;
    } : Omit<{
        type: import("vue").PropType<boolean | null>;
        default: boolean;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["mobile"] ? boolean | null : boolean | Defaults["mobile"] | null>;
        default: unknown extends Defaults["mobile"] ? boolean | null : Defaults["mobile"] | NonNullable<boolean | null>;
    };
    mobileBreakpoint: unknown extends Defaults["mobileBreakpoint"] ? import("vue").PropType<number | import("../../types.js").DisplayBreakpoint> : {
        type: import("vue").PropType<unknown extends Defaults["mobileBreakpoint"] ? number | import("../../types.js").DisplayBreakpoint : number | Defaults["mobileBreakpoint"] | import("../../types.js").DisplayBreakpoint>;
        default: unknown extends Defaults["mobileBreakpoint"] ? number | import("../../types.js").DisplayBreakpoint : Defaults["mobileBreakpoint"] | NonNullable<number | import("../../types.js").DisplayBreakpoint>;
    };
    elevation: unknown extends Defaults["elevation"] ? {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["elevation"] ? string | number : string | number | Defaults["elevation"]>;
        default: unknown extends Defaults["elevation"] ? string | number : Defaults["elevation"] | NonNullable<string | number>;
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
    tag: unknown extends Defaults["tag"] ? {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : string | Defaults["tag"] | import("../../util/index.js").JSXComponent>;
        default: unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : Defaults["tag"] | NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: null;
        default: undefined;
    } : Omit<{
        type: null;
        default: undefined;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["modelValue"] ? any : any>;
        default: unknown extends Defaults["modelValue"] ? any : any;
    };
    multiple: unknown extends Defaults["multiple"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["multiple"] ? boolean : boolean | Defaults["multiple"]>;
        default: unknown extends Defaults["multiple"] ? boolean : boolean | Defaults["multiple"];
    };
    mandatory: unknown extends Defaults["mandatory"] ? {
        type: import("vue").PropType<"force" | boolean>;
        default: NonNullable<"force" | boolean>;
    } : Omit<{
        type: import("vue").PropType<"force" | boolean>;
        default: NonNullable<"force" | boolean>;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["mandatory"] ? "force" | boolean : "force" | boolean | Defaults["mandatory"]>;
        default: unknown extends Defaults["mandatory"] ? "force" | boolean : Defaults["mandatory"] | NonNullable<"force" | boolean>;
    };
    max: unknown extends Defaults["max"] ? NumberConstructor : {
        type: import("vue").PropType<unknown extends Defaults["max"] ? number : number | Defaults["max"]>;
        default: unknown extends Defaults["max"] ? number : number | Defaults["max"];
    };
    selectedClass: unknown extends Defaults["selectedClass"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"]>;
        default: unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    eager: unknown extends Defaults["eager"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"]>;
        default: unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    expandIcon: unknown extends Defaults["expandIcon"] ? {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["expandIcon"] ? import("../../composables/icons.js").IconValue : Defaults["expandIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["expandIcon"] ? import("../../composables/icons.js").IconValue : Defaults["expandIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    collapseIcon: unknown extends Defaults["collapseIcon"] ? {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["collapseIcon"] ? import("../../composables/icons.js").IconValue : Defaults["collapseIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["collapseIcon"] ? import("../../composables/icons.js").IconValue : Defaults["collapseIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    hideActions: unknown extends Defaults["hideActions"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hideActions"] ? boolean : boolean | Defaults["hideActions"]>;
        default: unknown extends Defaults["hideActions"] ? boolean : boolean | Defaults["hideActions"];
    };
    focusable: unknown extends Defaults["focusable"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["focusable"] ? boolean : boolean | Defaults["focusable"]>;
        default: unknown extends Defaults["focusable"] ? boolean : boolean | Defaults["focusable"];
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
    readonly: unknown extends Defaults["readonly"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"]>;
        default: unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"];
    };
    bgColor: unknown extends Defaults["bgColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"]>;
        default: unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"];
    };
    flat: unknown extends Defaults["flat"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["flat"] ? boolean : boolean | Defaults["flat"]>;
        default: unknown extends Defaults["flat"] ? boolean : boolean | Defaults["flat"];
    };
    variant: unknown extends Defaults["variant"] ? Omit<{
        type: import("vue").PropType<"accordion" | "default" | "inset" | "popout">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: import("vue").PropType<"accordion" | "default" | "inset" | "popout">;
        default: NonNullable<"accordion" | "default" | "inset" | "popout">;
    } : Omit<Omit<{
        type: import("vue").PropType<"accordion" | "default" | "inset" | "popout">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: import("vue").PropType<"accordion" | "default" | "inset" | "popout">;
        default: NonNullable<"accordion" | "default" | "inset" | "popout">;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["variant"] ? "accordion" | "default" | "inset" | "popout" : "accordion" | "default" | "inset" | "popout" | Defaults["variant"]>;
        default: unknown extends Defaults["variant"] ? "accordion" | "default" | "inset" | "popout" : Defaults["variant"] | NonNullable<"accordion" | "default" | "inset" | "popout">;
    };
    altLabels: unknown extends Defaults["altLabels"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["altLabels"] ? boolean : boolean | Defaults["altLabels"]>;
        default: unknown extends Defaults["altLabels"] ? boolean : boolean | Defaults["altLabels"];
    };
    completeIcon: unknown extends Defaults["completeIcon"] ? import("vue").PropType<import("../../composables/icons.js").IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["completeIcon"] ? import("../../composables/icons.js").IconValue : Defaults["completeIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["completeIcon"] ? import("../../composables/icons.js").IconValue : Defaults["completeIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    editIcon: unknown extends Defaults["editIcon"] ? import("vue").PropType<import("../../composables/icons.js").IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["editIcon"] ? import("../../composables/icons.js").IconValue : Defaults["editIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["editIcon"] ? import("../../composables/icons.js").IconValue : Defaults["editIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    editable: unknown extends Defaults["editable"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["editable"] ? boolean : boolean | Defaults["editable"]>;
        default: unknown extends Defaults["editable"] ? boolean : boolean | Defaults["editable"];
    };
    errorIcon: unknown extends Defaults["errorIcon"] ? import("vue").PropType<import("../../composables/icons.js").IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["errorIcon"] ? import("../../composables/icons.js").IconValue : Defaults["errorIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["errorIcon"] ? import("../../composables/icons.js").IconValue : Defaults["errorIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    items: unknown extends Defaults["items"] ? {
        type: import("vue").PropType<readonly import("../../components/VStepper/VStepperItem.js").StepperItem[]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<readonly import("../../components/VStepper/VStepperItem.js").StepperItem[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["items"] ? readonly import("../../components/VStepper/VStepperItem.js").StepperItem[] : readonly import("../../components/VStepper/VStepperItem.js").StepperItem[] | Defaults["items"]>;
        default: unknown extends Defaults["items"] ? readonly import("../../components/VStepper/VStepperItem.js").StepperItem[] : readonly import("../../components/VStepper/VStepperItem.js").StepperItem[] | Defaults["items"];
    };
    itemTitle: unknown extends Defaults["itemTitle"] ? {
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["itemTitle"] ? import("../../util/index.js").SelectItemKey : Defaults["itemTitle"] | import("../../util/index.js").SelectItemKey>;
        default: unknown extends Defaults["itemTitle"] ? import("../../util/index.js").SelectItemKey : Defaults["itemTitle"] | NonNullable<import("../../util/index.js").SelectItemKey>;
    };
    itemValue: unknown extends Defaults["itemValue"] ? {
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["itemValue"] ? import("../../util/index.js").SelectItemKey : Defaults["itemValue"] | import("../../util/index.js").SelectItemKey>;
        default: unknown extends Defaults["itemValue"] ? import("../../util/index.js").SelectItemKey : Defaults["itemValue"] | NonNullable<import("../../util/index.js").SelectItemKey>;
    };
    itemProps: unknown extends Defaults["itemProps"] ? {
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["itemProps"] ? import("../../util/index.js").SelectItemKey : Defaults["itemProps"] | import("../../util/index.js").SelectItemKey>;
        default: unknown extends Defaults["itemProps"] ? import("../../util/index.js").SelectItemKey : Defaults["itemProps"] | NonNullable<import("../../util/index.js").SelectItemKey>;
    };
    nonLinear: unknown extends Defaults["nonLinear"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["nonLinear"] ? boolean : boolean | Defaults["nonLinear"]>;
        default: unknown extends Defaults["nonLinear"] ? boolean : boolean | Defaults["nonLinear"];
    };
    prevText: unknown extends Defaults["prevText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["prevText"] ? string : string | Defaults["prevText"]>;
        default: unknown extends Defaults["prevText"] ? string : string | Defaults["prevText"];
    };
    nextText: unknown extends Defaults["nextText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["nextText"] ? string : string | Defaults["nextText"]>;
        default: unknown extends Defaults["nextText"] ? string : string | Defaults["nextText"];
    };
};
export declare const VStepperVertical: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        mobile: boolean | null;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        multiple: boolean;
        mandatory: "force" | boolean;
        disabled: boolean;
        eager: boolean;
        expandIcon: import("../../composables/icons.js").IconValue;
        collapseIcon: import("../../composables/icons.js").IconValue;
        hideActions: boolean;
        focusable: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        };
        readonly: boolean;
        flat: boolean;
        variant: "accordion" | "default" | "inset" | "popout";
        altLabels: boolean;
        editable: boolean;
        items: readonly import("../../components/VStepper/VStepperItem.js").StepperItem[];
        itemTitle: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        itemValue: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        itemProps: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        nonLinear: boolean;
        prevText: string;
        nextText: string;
    } & {
        theme?: string | undefined;
        class?: any;
        mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        max?: number | undefined;
        selectedClass?: string | undefined;
        color?: string | undefined;
        bgColor?: string | undefined;
        completeIcon?: import("../../composables/icons.js").IconValue | undefined;
        editIcon?: import("../../composables/icons.js").IconValue | undefined;
        errorIcon?: import("../../composables/icons.js").IconValue | undefined;
    } & {}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        "update:modelValue": (val: any) => true;
    }, "$children" | "modelValue" | "update:modelValue" | "v-slot:actions" | "v-slot:default" | "v-slot:icon" | "v-slot:next" | "v-slot:prev" | "v-slot:subtitle" | "v-slot:title" | "v-slots" | `v-slot:header-item.${string}` | `v-slot:item.${string}`>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        mobile: boolean | null;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        multiple: boolean;
        mandatory: "force" | boolean;
        disabled: boolean;
        eager: boolean;
        expandIcon: import("../../composables/icons.js").IconValue;
        collapseIcon: import("../../composables/icons.js").IconValue;
        hideActions: boolean;
        focusable: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined;
        readonly: boolean;
        flat: boolean;
        variant: "accordion" | "default" | "inset" | "popout";
        altLabels: boolean;
        editable: boolean;
        items: readonly import("../../components/VStepper/VStepperItem.js").StepperItem[];
        itemTitle: import("../../util/index.js").SelectItemKey;
        itemValue: import("../../util/index.js").SelectItemKey;
        itemProps: import("../../util/index.js").SelectItemKey;
        nonLinear: boolean;
        prevText: string;
        nextText: string;
    }, true, {}, import("vue").SlotsType<Partial<{
        [x: `header-item.${string}`]: (arg: StepperItemSlot<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        [x: `item.${string}`]: (arg: StepperItemSlot<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        actions: (arg: StepperVerticalItemActionSlot<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        default: (arg: VStepperSlot & {
            step: unknown;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        icon: (arg: StepperItemSlot<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        title: (arg: StepperItemSlot<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        subtitle: (arg: StepperItemSlot<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        prev: (arg: StepperVerticalItemActionSlot<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        next: (arg: StepperVerticalItemActionSlot<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        multiple: boolean;
        mandatory: "force" | boolean;
        disabled: boolean;
        eager: boolean;
        expandIcon: import("../../composables/icons.js").IconValue;
        collapseIcon: import("../../composables/icons.js").IconValue;
        hideActions: boolean;
        focusable: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        };
        readonly: boolean;
        flat: boolean;
        variant: "accordion" | "default" | "inset" | "popout";
        altLabels: boolean;
        editable: boolean;
        items: readonly import("../../components/VStepper/VStepperItem.js").StepperItem[];
        itemTitle: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        itemValue: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        itemProps: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        nonLinear: boolean;
        prevText: string;
        nextText: string;
    } & {
        theme?: string | undefined;
        class?: any;
        mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        max?: number | undefined;
        selectedClass?: string | undefined;
        color?: string | undefined;
        bgColor?: string | undefined;
        completeIcon?: import("../../composables/icons.js").IconValue | undefined;
        editIcon?: import("../../composables/icons.js").IconValue | undefined;
        errorIcon?: import("../../composables/icons.js").IconValue | undefined;
    } & {}, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        mobile: boolean | null;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        multiple: boolean;
        mandatory: "force" | boolean;
        disabled: boolean;
        eager: boolean;
        expandIcon: import("../../composables/icons.js").IconValue;
        collapseIcon: import("../../composables/icons.js").IconValue;
        hideActions: boolean;
        focusable: boolean;
        ripple: boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined;
        readonly: boolean;
        flat: boolean;
        variant: "accordion" | "default" | "inset" | "popout";
        altLabels: boolean;
        editable: boolean;
        items: readonly import("../../components/VStepper/VStepperItem.js").StepperItem[];
        itemTitle: import("../../util/index.js").SelectItemKey;
        itemValue: import("../../util/index.js").SelectItemKey;
        itemProps: import("../../util/index.js").SelectItemKey;
        nonLinear: boolean;
        prevText: string;
        nextText: string;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    mobile: boolean | null;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    multiple: boolean;
    mandatory: "force" | boolean;
    disabled: boolean;
    eager: boolean;
    expandIcon: import("../../composables/icons.js").IconValue;
    collapseIcon: import("../../composables/icons.js").IconValue;
    hideActions: boolean;
    focusable: boolean;
    ripple: boolean | {
        class?: string | undefined;
        keys?: string[] | undefined;
    };
    readonly: boolean;
    flat: boolean;
    variant: "accordion" | "default" | "inset" | "popout";
    altLabels: boolean;
    editable: boolean;
    items: readonly import("../../components/VStepper/VStepperItem.js").StepperItem[];
    itemTitle: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
    itemValue: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
    itemProps: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
    nonLinear: boolean;
    prevText: string;
    nextText: string;
} & {
    theme?: string | undefined;
    class?: any;
    mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
    elevation?: string | number | undefined;
    rounded?: string | number | boolean | undefined;
    max?: number | undefined;
    selectedClass?: string | undefined;
    color?: string | undefined;
    bgColor?: string | undefined;
    completeIcon?: import("../../composables/icons.js").IconValue | undefined;
    editIcon?: import("../../composables/icons.js").IconValue | undefined;
    errorIcon?: import("../../composables/icons.js").IconValue | undefined;
} & {}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
    "update:modelValue": (val: any) => true;
}, "$children" | "modelValue" | "update:modelValue" | "v-slot:actions" | "v-slot:default" | "v-slot:icon" | "v-slot:next" | "v-slot:prev" | "v-slot:subtitle" | "v-slot:title" | "v-slots" | `v-slot:header-item.${string}` | `v-slot:item.${string}`>, string, {
    style: import("vue").StyleValue;
    mobile: boolean | null;
    rounded: string | number | boolean;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    multiple: boolean;
    mandatory: "force" | boolean;
    disabled: boolean;
    eager: boolean;
    expandIcon: import("../../composables/icons.js").IconValue;
    collapseIcon: import("../../composables/icons.js").IconValue;
    hideActions: boolean;
    focusable: boolean;
    ripple: boolean | {
        class?: string | undefined;
        keys?: string[] | undefined;
    } | undefined;
    readonly: boolean;
    flat: boolean;
    variant: "accordion" | "default" | "inset" | "popout";
    altLabels: boolean;
    editable: boolean;
    items: readonly import("../../components/VStepper/VStepperItem.js").StepperItem[];
    itemTitle: import("../../util/index.js").SelectItemKey;
    itemValue: import("../../util/index.js").SelectItemKey;
    itemProps: import("../../util/index.js").SelectItemKey;
    nonLinear: boolean;
    prevText: string;
    nextText: string;
}, {}, string, import("vue").SlotsType<Partial<{
    [x: `header-item.${string}`]: (arg: StepperItemSlot<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    [x: `item.${string}`]: (arg: StepperItemSlot<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    actions: (arg: StepperVerticalItemActionSlot<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    default: (arg: VStepperSlot & {
        step: unknown;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    icon: (arg: StepperItemSlot<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    title: (arg: StepperItemSlot<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    subtitle: (arg: StepperItemSlot<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    prev: (arg: StepperVerticalItemActionSlot<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    next: (arg: StepperVerticalItemActionSlot<unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T = number>(props: {
    modelValue?: T | undefined;
    "onUpdate:modelValue"?: ((value: T) => void) | undefined;
}, slots: VStepperVerticalSlots<T>) => GenericProps<{
    modelValue?: T | undefined;
    "onUpdate:modelValue"?: ((value: T) => void) | undefined;
}, VStepperVerticalSlots<T>>) & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    mobile: {
        type: import("vue").PropType<boolean | null>;
        default: boolean;
    };
    mobileBreakpoint: import("vue").PropType<number | import("../../types.js").DisplayBreakpoint>;
    elevation: {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    };
    rounded: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: {
        type: import("vue").PropType<"force" | boolean>;
        default: NonNullable<"force" | boolean>;
    };
    max: NumberConstructor;
    selectedClass: StringConstructor;
    disabled: BooleanConstructor;
    eager: BooleanConstructor;
    color: StringConstructor;
    expandIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    collapseIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    hideActions: BooleanConstructor;
    focusable: BooleanConstructor;
    ripple: {
        type: import("vue").PropType<boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined>;
        default: boolean;
    };
    readonly: BooleanConstructor;
    bgColor: StringConstructor;
    flat: BooleanConstructor;
    variant: Omit<{
        type: import("vue").PropType<"accordion" | "default" | "inset" | "popout">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: import("vue").PropType<"accordion" | "default" | "inset" | "popout">;
        default: NonNullable<"accordion" | "default" | "inset" | "popout">;
    };
    altLabels: BooleanConstructor;
    completeIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    editIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    editable: BooleanConstructor;
    errorIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    items: {
        type: import("vue").PropType<readonly import("../../components/VStepper/VStepperItem.js").StepperItem[]>;
        default: () => never[];
    };
    itemTitle: {
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    };
    itemValue: {
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    };
    itemProps: {
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    };
    nonLinear: BooleanConstructor;
    prevText: {
        type: StringConstructor;
        default: string;
    };
    nextText: {
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
    mobile: {
        type: import("vue").PropType<boolean | null>;
        default: boolean;
    };
    mobileBreakpoint: import("vue").PropType<number | import("../../types.js").DisplayBreakpoint>;
    elevation: {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    };
    rounded: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: {
        type: import("vue").PropType<"force" | boolean>;
        default: NonNullable<"force" | boolean>;
    };
    max: NumberConstructor;
    selectedClass: StringConstructor;
    disabled: BooleanConstructor;
    eager: BooleanConstructor;
    color: StringConstructor;
    expandIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    collapseIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    hideActions: BooleanConstructor;
    focusable: BooleanConstructor;
    ripple: {
        type: import("vue").PropType<boolean | {
            class?: string | undefined;
            keys?: string[] | undefined;
        } | undefined>;
        default: boolean;
    };
    readonly: BooleanConstructor;
    bgColor: StringConstructor;
    flat: BooleanConstructor;
    variant: Omit<{
        type: import("vue").PropType<"accordion" | "default" | "inset" | "popout">;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: import("vue").PropType<"accordion" | "default" | "inset" | "popout">;
        default: NonNullable<"accordion" | "default" | "inset" | "popout">;
    };
    altLabels: BooleanConstructor;
    completeIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    editIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    editable: BooleanConstructor;
    errorIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    items: {
        type: import("vue").PropType<readonly import("../../components/VStepper/VStepperItem.js").StepperItem[]>;
        default: () => never[];
    };
    itemTitle: {
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    };
    itemValue: {
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    };
    itemProps: {
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    };
    nonLinear: BooleanConstructor;
    prevText: {
        type: StringConstructor;
        default: string;
    };
    nextText: {
        type: StringConstructor;
        default: string;
    };
}>>;
export type VStepperVertical = InstanceType<typeof VStepperVertical>;
