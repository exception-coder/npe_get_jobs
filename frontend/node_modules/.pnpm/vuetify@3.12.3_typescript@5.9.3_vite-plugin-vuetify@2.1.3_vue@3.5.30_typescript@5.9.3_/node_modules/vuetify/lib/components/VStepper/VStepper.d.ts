// Styles

import { IconValue } from '../../composables/icons.js';
// Types
import type { PropType } from 'vue';
import type { StepperItem, StepperItemSlot } from './VStepperItem.js';
import type { GenericProps, SelectItemKey } from '../../util/index.js';
export type VStepperSlot = {
    prev: () => void;
    next: () => void;
};
export type VStepperSlots = {
    actions: VStepperSlot;
    default: VStepperSlot;
    header: StepperItem;
    'header-item': StepperItemSlot;
    icon: StepperItemSlot;
    title: StepperItemSlot;
    subtitle: StepperItemSlot;
    item: StepperItem;
    prev: never;
    next: never;
} & {
    [key: `header-item.${string}`]: StepperItemSlot;
    [key: `item.${string}`]: StepperItem;
};
export declare const makeStepperProps: <Defaults extends {
    mobile?: unknown;
    mobileBreakpoint?: unknown;
    altLabels?: unknown;
    bgColor?: unknown;
    completeIcon?: unknown;
    editIcon?: unknown;
    editable?: unknown;
    errorIcon?: unknown;
    hideActions?: unknown;
    items?: unknown;
    itemTitle?: unknown;
    itemValue?: unknown;
    itemProps?: unknown;
    nonLinear?: unknown;
    flat?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    mobile: unknown extends Defaults["mobile"] ? {
        type: PropType<boolean | null>;
        default: boolean;
    } : Omit<{
        type: PropType<boolean | null>;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["mobile"] ? boolean | null : boolean | Defaults["mobile"] | null>;
        default: unknown extends Defaults["mobile"] ? boolean | null : Defaults["mobile"] | NonNullable<boolean | null>;
    };
    mobileBreakpoint: unknown extends Defaults["mobileBreakpoint"] ? PropType<number | import("../../types.js").DisplayBreakpoint> : {
        type: PropType<unknown extends Defaults["mobileBreakpoint"] ? number | import("../../types.js").DisplayBreakpoint : number | Defaults["mobileBreakpoint"] | import("../../types.js").DisplayBreakpoint>;
        default: unknown extends Defaults["mobileBreakpoint"] ? number | import("../../types.js").DisplayBreakpoint : Defaults["mobileBreakpoint"] | NonNullable<number | import("../../types.js").DisplayBreakpoint>;
    };
    altLabels: unknown extends Defaults["altLabels"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["altLabels"] ? boolean : boolean | Defaults["altLabels"]>;
        default: unknown extends Defaults["altLabels"] ? boolean : boolean | Defaults["altLabels"];
    };
    bgColor: unknown extends Defaults["bgColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"]>;
        default: unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"];
    };
    completeIcon: unknown extends Defaults["completeIcon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["completeIcon"] ? IconValue : Defaults["completeIcon"] | IconValue>;
        default: unknown extends Defaults["completeIcon"] ? IconValue : Defaults["completeIcon"] | NonNullable<IconValue>;
    };
    editIcon: unknown extends Defaults["editIcon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["editIcon"] ? IconValue : Defaults["editIcon"] | IconValue>;
        default: unknown extends Defaults["editIcon"] ? IconValue : Defaults["editIcon"] | NonNullable<IconValue>;
    };
    editable: unknown extends Defaults["editable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["editable"] ? boolean : boolean | Defaults["editable"]>;
        default: unknown extends Defaults["editable"] ? boolean : boolean | Defaults["editable"];
    };
    errorIcon: unknown extends Defaults["errorIcon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["errorIcon"] ? IconValue : Defaults["errorIcon"] | IconValue>;
        default: unknown extends Defaults["errorIcon"] ? IconValue : Defaults["errorIcon"] | NonNullable<IconValue>;
    };
    hideActions: unknown extends Defaults["hideActions"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideActions"] ? boolean : boolean | Defaults["hideActions"]>;
        default: unknown extends Defaults["hideActions"] ? boolean : boolean | Defaults["hideActions"];
    };
    items: unknown extends Defaults["items"] ? {
        type: PropType<readonly StepperItem[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<readonly StepperItem[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["items"] ? readonly StepperItem[] : readonly StepperItem[] | Defaults["items"]>;
        default: unknown extends Defaults["items"] ? readonly StepperItem[] : readonly StepperItem[] | Defaults["items"];
    };
    itemTitle: unknown extends Defaults["itemTitle"] ? {
        type: PropType<SelectItemKey>;
        default: string;
    } : Omit<{
        type: PropType<SelectItemKey>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["itemTitle"] ? SelectItemKey : Defaults["itemTitle"] | SelectItemKey>;
        default: unknown extends Defaults["itemTitle"] ? SelectItemKey : Defaults["itemTitle"] | NonNullable<SelectItemKey>;
    };
    itemValue: unknown extends Defaults["itemValue"] ? {
        type: PropType<SelectItemKey>;
        default: string;
    } : Omit<{
        type: PropType<SelectItemKey>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["itemValue"] ? SelectItemKey : Defaults["itemValue"] | SelectItemKey>;
        default: unknown extends Defaults["itemValue"] ? SelectItemKey : Defaults["itemValue"] | NonNullable<SelectItemKey>;
    };
    itemProps: unknown extends Defaults["itemProps"] ? {
        type: PropType<SelectItemKey>;
        default: string;
    } : Omit<{
        type: PropType<SelectItemKey>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["itemProps"] ? SelectItemKey : Defaults["itemProps"] | SelectItemKey>;
        default: unknown extends Defaults["itemProps"] ? SelectItemKey : Defaults["itemProps"] | NonNullable<SelectItemKey>;
    };
    nonLinear: unknown extends Defaults["nonLinear"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["nonLinear"] ? boolean : boolean | Defaults["nonLinear"]>;
        default: unknown extends Defaults["nonLinear"] ? boolean : boolean | Defaults["nonLinear"];
    };
    flat: unknown extends Defaults["flat"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["flat"] ? boolean : boolean | Defaults["flat"]>;
        default: unknown extends Defaults["flat"] ? boolean : boolean | Defaults["flat"];
    };
};
export declare const makeVStepperProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
    mobile?: unknown;
    mobileBreakpoint?: unknown;
    border?: unknown;
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
    height?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    width?: unknown;
    location?: unknown;
    position?: unknown;
    color?: unknown;
    prevText?: unknown;
    nextText?: unknown;
    altLabels?: unknown;
    bgColor?: unknown;
    completeIcon?: unknown;
    editIcon?: unknown;
    editable?: unknown;
    errorIcon?: unknown;
    hideActions?: unknown;
    items?: unknown;
    itemTitle?: unknown;
    itemValue?: unknown;
    itemProps?: unknown;
    nonLinear?: unknown;
    flat?: unknown;
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
    mobile: unknown extends Defaults["mobile"] ? {
        type: PropType<boolean | null>;
        default: boolean;
    } : Omit<{
        type: PropType<boolean | null>;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["mobile"] ? boolean | null : boolean | Defaults["mobile"] | null>;
        default: unknown extends Defaults["mobile"] ? boolean | null : Defaults["mobile"] | NonNullable<boolean | null>;
    };
    mobileBreakpoint: unknown extends Defaults["mobileBreakpoint"] ? PropType<number | import("../../types.js").DisplayBreakpoint> : {
        type: PropType<unknown extends Defaults["mobileBreakpoint"] ? number | import("../../types.js").DisplayBreakpoint : number | Defaults["mobileBreakpoint"] | import("../../types.js").DisplayBreakpoint>;
        default: unknown extends Defaults["mobileBreakpoint"] ? number | import("../../types.js").DisplayBreakpoint : Defaults["mobileBreakpoint"] | NonNullable<number | import("../../types.js").DisplayBreakpoint>;
    };
    border: unknown extends Defaults["border"] ? (BooleanConstructor | NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["border"] ? string | number | boolean : string | number | boolean | Defaults["border"]>;
        default: unknown extends Defaults["border"] ? string | number | boolean : Defaults["border"] | NonNullable<string | number | boolean>;
    };
    elevation: unknown extends Defaults["elevation"] ? {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        validator(v: any): boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["elevation"] ? string | number : string | number | Defaults["elevation"]>;
        default: unknown extends Defaults["elevation"] ? string | number : Defaults["elevation"] | NonNullable<string | number>;
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
    mandatory: unknown extends Defaults["mandatory"] ? {
        type: PropType<"force" | boolean>;
        default: NonNullable<"force" | boolean>;
    } : Omit<{
        type: PropType<"force" | boolean>;
        default: NonNullable<"force" | boolean>;
    }, "default" | "type"> & {
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
    height: unknown extends Defaults["height"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : Defaults["height"] | NonNullable<string | number>;
    };
    maxHeight: unknown extends Defaults["maxHeight"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["maxHeight"] ? string | number : string | number | Defaults["maxHeight"]>;
        default: unknown extends Defaults["maxHeight"] ? string | number : Defaults["maxHeight"] | NonNullable<string | number>;
    };
    maxWidth: unknown extends Defaults["maxWidth"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["maxWidth"] ? string | number : string | number | Defaults["maxWidth"]>;
        default: unknown extends Defaults["maxWidth"] ? string | number : Defaults["maxWidth"] | NonNullable<string | number>;
    };
    minHeight: unknown extends Defaults["minHeight"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["minHeight"] ? string | number : string | number | Defaults["minHeight"]>;
        default: unknown extends Defaults["minHeight"] ? string | number : Defaults["minHeight"] | NonNullable<string | number>;
    };
    minWidth: unknown extends Defaults["minWidth"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["minWidth"] ? string | number : string | number | Defaults["minWidth"]>;
        default: unknown extends Defaults["minWidth"] ? string | number : Defaults["minWidth"] | NonNullable<string | number>;
    };
    width: unknown extends Defaults["width"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : Defaults["width"] | NonNullable<string | number>;
    };
    location: unknown extends Defaults["location"] ? PropType<import("../../util/index.js").Anchor | null> : {
        type: PropType<unknown extends Defaults["location"] ? import("../../util/index.js").Anchor | null : Defaults["location"] | import("../../util/index.js").Anchor | null>;
        default: unknown extends Defaults["location"] ? import("../../util/index.js").Anchor | null : Defaults["location"] | NonNullable<import("../../util/index.js").Anchor | null>;
    };
    position: unknown extends Defaults["position"] ? {
        type: PropType<"absolute" | "fixed" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<"absolute" | "fixed" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["position"] ? "absolute" | "fixed" | "relative" | "static" | "sticky" : "absolute" | "fixed" | "relative" | "static" | "sticky" | Defaults["position"]>;
        default: unknown extends Defaults["position"] ? "absolute" | "fixed" | "relative" | "static" | "sticky" : Defaults["position"] | NonNullable<"absolute" | "fixed" | "relative" | "static" | "sticky">;
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    prevText: unknown extends Defaults["prevText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["prevText"] ? string : string | Defaults["prevText"]>;
        default: unknown extends Defaults["prevText"] ? string : string | Defaults["prevText"];
    };
    nextText: unknown extends Defaults["nextText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["nextText"] ? string : string | Defaults["nextText"]>;
        default: unknown extends Defaults["nextText"] ? string : string | Defaults["nextText"];
    };
    altLabels: unknown extends Defaults["altLabels"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["altLabels"] ? boolean : boolean | Defaults["altLabels"]>;
        default: unknown extends Defaults["altLabels"] ? boolean : boolean | Defaults["altLabels"];
    };
    bgColor: unknown extends Defaults["bgColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"]>;
        default: unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"];
    };
    completeIcon: unknown extends Defaults["completeIcon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["completeIcon"] ? IconValue : Defaults["completeIcon"] | IconValue>;
        default: unknown extends Defaults["completeIcon"] ? IconValue : Defaults["completeIcon"] | NonNullable<IconValue>;
    };
    editIcon: unknown extends Defaults["editIcon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["editIcon"] ? IconValue : Defaults["editIcon"] | IconValue>;
        default: unknown extends Defaults["editIcon"] ? IconValue : Defaults["editIcon"] | NonNullable<IconValue>;
    };
    editable: unknown extends Defaults["editable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["editable"] ? boolean : boolean | Defaults["editable"]>;
        default: unknown extends Defaults["editable"] ? boolean : boolean | Defaults["editable"];
    };
    errorIcon: unknown extends Defaults["errorIcon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["errorIcon"] ? IconValue : Defaults["errorIcon"] | IconValue>;
        default: unknown extends Defaults["errorIcon"] ? IconValue : Defaults["errorIcon"] | NonNullable<IconValue>;
    };
    hideActions: unknown extends Defaults["hideActions"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideActions"] ? boolean : boolean | Defaults["hideActions"]>;
        default: unknown extends Defaults["hideActions"] ? boolean : boolean | Defaults["hideActions"];
    };
    items: unknown extends Defaults["items"] ? {
        type: PropType<readonly StepperItem[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<readonly StepperItem[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["items"] ? readonly StepperItem[] : readonly StepperItem[] | Defaults["items"]>;
        default: unknown extends Defaults["items"] ? readonly StepperItem[] : readonly StepperItem[] | Defaults["items"];
    };
    itemTitle: unknown extends Defaults["itemTitle"] ? {
        type: PropType<SelectItemKey>;
        default: string;
    } : Omit<{
        type: PropType<SelectItemKey>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["itemTitle"] ? SelectItemKey : Defaults["itemTitle"] | SelectItemKey>;
        default: unknown extends Defaults["itemTitle"] ? SelectItemKey : Defaults["itemTitle"] | NonNullable<SelectItemKey>;
    };
    itemValue: unknown extends Defaults["itemValue"] ? {
        type: PropType<SelectItemKey>;
        default: string;
    } : Omit<{
        type: PropType<SelectItemKey>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["itemValue"] ? SelectItemKey : Defaults["itemValue"] | SelectItemKey>;
        default: unknown extends Defaults["itemValue"] ? SelectItemKey : Defaults["itemValue"] | NonNullable<SelectItemKey>;
    };
    itemProps: unknown extends Defaults["itemProps"] ? {
        type: PropType<SelectItemKey>;
        default: string;
    } : Omit<{
        type: PropType<SelectItemKey>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["itemProps"] ? SelectItemKey : Defaults["itemProps"] | SelectItemKey>;
        default: unknown extends Defaults["itemProps"] ? SelectItemKey : Defaults["itemProps"] | NonNullable<SelectItemKey>;
    };
    nonLinear: unknown extends Defaults["nonLinear"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["nonLinear"] ? boolean : boolean | Defaults["nonLinear"]>;
        default: unknown extends Defaults["nonLinear"] ? boolean : boolean | Defaults["nonLinear"];
    };
    flat: unknown extends Defaults["flat"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["flat"] ? boolean : boolean | Defaults["flat"]>;
        default: unknown extends Defaults["flat"] ? boolean : boolean | Defaults["flat"];
    };
};
export declare const VStepper: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        mobile: boolean | null;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        multiple: boolean;
        mandatory: "force" | boolean;
        selectedClass: string;
        disabled: boolean;
        prevText: string;
        nextText: string;
        altLabels: boolean;
        editable: boolean;
        hideActions: boolean;
        items: readonly StepperItem[];
        itemTitle: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        itemValue: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        itemProps: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        nonLinear: boolean;
        flat: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        max?: number | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        location?: import("../../util/index.js").Anchor | null | undefined;
        position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
        color?: string | undefined;
        bgColor?: string | undefined;
        completeIcon?: IconValue | undefined;
        editIcon?: IconValue | undefined;
        errorIcon?: IconValue | undefined;
    } & {}, {
        prev: () => void;
        next: () => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        "update:modelValue": (v: unknown) => true;
    }, "$children" | "modelValue" | "update:modelValue" | "v-slot:actions" | "v-slot:default" | "v-slot:header" | "v-slot:header-item" | "v-slot:icon" | "v-slot:item" | "v-slot:next" | "v-slot:prev" | "v-slot:subtitle" | "v-slot:title" | "v-slots" | `v-slot:header-item.${string}` | `v-slot:item.${string}`>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        mobile: boolean | null;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        multiple: boolean;
        mandatory: "force" | boolean;
        selectedClass: string;
        disabled: boolean;
        prevText: string;
        nextText: string;
        altLabels: boolean;
        editable: boolean;
        hideActions: boolean;
        items: readonly StepperItem[];
        itemTitle: SelectItemKey;
        itemValue: SelectItemKey;
        itemProps: SelectItemKey;
        nonLinear: boolean;
        flat: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        [x: `header-item.${string}`]: (arg: StepperItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        [x: `item.${string}`]: (arg: StepperItem) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        actions: (arg: VStepperSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        default: (arg: VStepperSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        header: (arg: StepperItem) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "header-item": (arg: StepperItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        icon: (arg: StepperItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        title: (arg: StepperItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        subtitle: (arg: StepperItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        item: (arg: StepperItem) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        prev: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        next: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        selectedClass: string;
        disabled: boolean;
        prevText: string;
        nextText: string;
        altLabels: boolean;
        editable: boolean;
        hideActions: boolean;
        items: readonly StepperItem[];
        itemTitle: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        itemValue: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        itemProps: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
        nonLinear: boolean;
        flat: boolean;
    } & {
        theme?: string | undefined;
        class?: any;
        mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
        border?: string | number | boolean | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        max?: number | undefined;
        height?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        width?: string | number | undefined;
        location?: import("../../util/index.js").Anchor | null | undefined;
        position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
        color?: string | undefined;
        bgColor?: string | undefined;
        completeIcon?: IconValue | undefined;
        editIcon?: IconValue | undefined;
        errorIcon?: IconValue | undefined;
    } & {}, {
        prev: () => void;
        next: () => void;
    }, {}, {}, {}, {
        style: import("vue").StyleValue;
        mobile: boolean | null;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        multiple: boolean;
        mandatory: "force" | boolean;
        selectedClass: string;
        disabled: boolean;
        prevText: string;
        nextText: string;
        altLabels: boolean;
        editable: boolean;
        hideActions: boolean;
        items: readonly StepperItem[];
        itemTitle: SelectItemKey;
        itemValue: SelectItemKey;
        itemProps: SelectItemKey;
        nonLinear: boolean;
        flat: boolean;
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
    selectedClass: string;
    disabled: boolean;
    prevText: string;
    nextText: string;
    altLabels: boolean;
    editable: boolean;
    hideActions: boolean;
    items: readonly StepperItem[];
    itemTitle: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
    itemValue: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
    itemProps: string | boolean | readonly (string | number)[] | ((item: Record<string, any>, fallback?: any) => any) | null;
    nonLinear: boolean;
    flat: boolean;
} & {
    theme?: string | undefined;
    class?: any;
    mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
    border?: string | number | boolean | undefined;
    elevation?: string | number | undefined;
    rounded?: string | number | boolean | undefined;
    max?: number | undefined;
    height?: string | number | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    width?: string | number | undefined;
    location?: import("../../util/index.js").Anchor | null | undefined;
    position?: "absolute" | "fixed" | "relative" | "static" | "sticky" | undefined;
    color?: string | undefined;
    bgColor?: string | undefined;
    completeIcon?: IconValue | undefined;
    editIcon?: IconValue | undefined;
    errorIcon?: IconValue | undefined;
} & {}, {
    prev: () => void;
    next: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
    "update:modelValue": (v: unknown) => true;
}, "$children" | "modelValue" | "update:modelValue" | "v-slot:actions" | "v-slot:default" | "v-slot:header" | "v-slot:header-item" | "v-slot:icon" | "v-slot:item" | "v-slot:next" | "v-slot:prev" | "v-slot:subtitle" | "v-slot:title" | "v-slots" | `v-slot:header-item.${string}` | `v-slot:item.${string}`>, string, {
    style: import("vue").StyleValue;
    mobile: boolean | null;
    rounded: string | number | boolean;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    multiple: boolean;
    mandatory: "force" | boolean;
    selectedClass: string;
    disabled: boolean;
    prevText: string;
    nextText: string;
    altLabels: boolean;
    editable: boolean;
    hideActions: boolean;
    items: readonly StepperItem[];
    itemTitle: SelectItemKey;
    itemValue: SelectItemKey;
    itemProps: SelectItemKey;
    nonLinear: boolean;
    flat: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    [x: `header-item.${string}`]: (arg: StepperItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    [x: `item.${string}`]: (arg: StepperItem) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    actions: (arg: VStepperSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    default: (arg: VStepperSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    header: (arg: StepperItem) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "header-item": (arg: StepperItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    icon: (arg: StepperItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    title: (arg: StepperItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    subtitle: (arg: StepperItemSlot) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    item: (arg: StepperItem) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    prev: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    next: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <TModel>(props: {
    modelValue?: TModel | undefined;
    "onUpdate:modelValue"?: ((value: TModel) => void) | undefined;
}, slots: VStepperSlots) => GenericProps<{
    modelValue?: TModel | undefined;
    "onUpdate:modelValue"?: ((value: TModel) => void) | undefined;
}, VStepperSlots>) & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    mobile: {
        type: PropType<boolean | null>;
        default: boolean;
    };
    mobileBreakpoint: PropType<number | import("../../types.js").DisplayBreakpoint>;
    border: (BooleanConstructor | NumberConstructor | StringConstructor)[];
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
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: {
        type: PropType<"force" | boolean>;
        default: NonNullable<"force" | boolean>;
    };
    max: NumberConstructor;
    selectedClass: {
        type: PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    height: (NumberConstructor | StringConstructor)[];
    maxHeight: (NumberConstructor | StringConstructor)[];
    maxWidth: (NumberConstructor | StringConstructor)[];
    minHeight: (NumberConstructor | StringConstructor)[];
    minWidth: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    location: PropType<import("../../util/index.js").Anchor | null>;
    position: {
        type: PropType<"absolute" | "fixed" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    color: StringConstructor;
    prevText: {
        type: StringConstructor;
        default: string;
    };
    nextText: {
        type: StringConstructor;
        default: string;
    };
    altLabels: BooleanConstructor;
    bgColor: StringConstructor;
    completeIcon: PropType<IconValue>;
    editIcon: PropType<IconValue>;
    editable: BooleanConstructor;
    errorIcon: PropType<IconValue>;
    hideActions: BooleanConstructor;
    items: {
        type: PropType<readonly StepperItem[]>;
        default: () => never[];
    };
    itemTitle: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    itemValue: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    itemProps: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    nonLinear: BooleanConstructor;
    flat: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    mobile: {
        type: PropType<boolean | null>;
        default: boolean;
    };
    mobileBreakpoint: PropType<number | import("../../types.js").DisplayBreakpoint>;
    border: (BooleanConstructor | NumberConstructor | StringConstructor)[];
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
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: {
        type: PropType<"force" | boolean>;
        default: NonNullable<"force" | boolean>;
    };
    max: NumberConstructor;
    selectedClass: {
        type: PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    height: (NumberConstructor | StringConstructor)[];
    maxHeight: (NumberConstructor | StringConstructor)[];
    maxWidth: (NumberConstructor | StringConstructor)[];
    minHeight: (NumberConstructor | StringConstructor)[];
    minWidth: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    location: PropType<import("../../util/index.js").Anchor | null>;
    position: {
        type: PropType<"absolute" | "fixed" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    color: StringConstructor;
    prevText: {
        type: StringConstructor;
        default: string;
    };
    nextText: {
        type: StringConstructor;
        default: string;
    };
    altLabels: BooleanConstructor;
    bgColor: StringConstructor;
    completeIcon: PropType<IconValue>;
    editIcon: PropType<IconValue>;
    editable: BooleanConstructor;
    errorIcon: PropType<IconValue>;
    hideActions: BooleanConstructor;
    items: {
        type: PropType<readonly StepperItem[]>;
        default: () => never[];
    };
    itemTitle: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    itemValue: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    itemProps: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    nonLinear: BooleanConstructor;
    flat: BooleanConstructor;
}>>;
export type VStepper = InstanceType<typeof VStepper>;
