// Styles

// Types
import type { PropType } from 'vue';
import type { VTimePickerViewMode } from './shared.js';
import type { VPickerSlots } from '../../labs/VPicker/VPicker.js';
type Period = 'am' | 'pm';
type AllowFunction = (val: number) => boolean;
export type VTimePickerSlots = Omit<VPickerSlots, 'header'>;
export declare const makeVTimePickerProps: <Defaults extends {
    theme?: unknown;
    class?: unknown;
    style?: unknown;
    border?: unknown;
    elevation?: unknown;
    rounded?: unknown;
    tile?: unknown;
    tag?: unknown;
    height?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    width?: unknown;
    location?: unknown;
    position?: unknown;
    color?: unknown;
    bgColor?: unknown;
    divided?: unknown;
    title?: unknown;
    hideHeader?: unknown;
    hideTitle?: unknown;
    allowedHours?: unknown;
    allowedMinutes?: unknown;
    allowedSeconds?: unknown;
    disabled?: unknown;
    format?: unknown;
    max?: unknown;
    min?: unknown;
    viewMode?: unknown;
    period?: unknown;
    modelValue?: unknown;
    readonly?: unknown;
    scrollable?: unknown;
    useSeconds?: unknown;
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
    bgColor: unknown extends Defaults["bgColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"]>;
        default: unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"];
    };
    divided: unknown extends Defaults["divided"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["divided"] ? boolean : boolean | Defaults["divided"]>;
        default: unknown extends Defaults["divided"] ? boolean : boolean | Defaults["divided"];
    };
    title: unknown extends Defaults["title"] ? {
        type: PropType<string>;
        default: string;
    } : Omit<{
        type: PropType<string>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["title"] ? string : string | Defaults["title"]>;
        default: unknown extends Defaults["title"] ? string : string | Defaults["title"];
    };
    hideHeader: unknown extends Defaults["hideHeader"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideHeader"] ? boolean : boolean | Defaults["hideHeader"]>;
        default: unknown extends Defaults["hideHeader"] ? boolean : boolean | Defaults["hideHeader"];
    };
    hideTitle: unknown extends Defaults["hideTitle"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideTitle"] ? boolean : boolean | Defaults["hideTitle"]>;
        default: unknown extends Defaults["hideTitle"] ? boolean : boolean | Defaults["hideTitle"];
    };
    allowedHours: unknown extends Defaults["allowedHours"] ? PropType<AllowFunction | number[]> : {
        type: PropType<unknown extends Defaults["allowedHours"] ? AllowFunction | number[] : AllowFunction | number[] | Defaults["allowedHours"]>;
        default: unknown extends Defaults["allowedHours"] ? AllowFunction | number[] : Defaults["allowedHours"] | NonNullable<AllowFunction | number[]>;
    };
    allowedMinutes: unknown extends Defaults["allowedMinutes"] ? PropType<AllowFunction | number[]> : {
        type: PropType<unknown extends Defaults["allowedMinutes"] ? AllowFunction | number[] : AllowFunction | number[] | Defaults["allowedMinutes"]>;
        default: unknown extends Defaults["allowedMinutes"] ? AllowFunction | number[] : Defaults["allowedMinutes"] | NonNullable<AllowFunction | number[]>;
    };
    allowedSeconds: unknown extends Defaults["allowedSeconds"] ? PropType<AllowFunction | number[]> : {
        type: PropType<unknown extends Defaults["allowedSeconds"] ? AllowFunction | number[] : AllowFunction | number[] | Defaults["allowedSeconds"]>;
        default: unknown extends Defaults["allowedSeconds"] ? AllowFunction | number[] : Defaults["allowedSeconds"] | NonNullable<AllowFunction | number[]>;
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    format: unknown extends Defaults["format"] ? {
        type: PropType<"24hr" | "ampm">;
        default: string;
    } : Omit<{
        type: PropType<"24hr" | "ampm">;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["format"] ? "24hr" | "ampm" : "24hr" | "ampm" | Defaults["format"]>;
        default: unknown extends Defaults["format"] ? "24hr" | "ampm" : Defaults["format"] | NonNullable<"24hr" | "ampm">;
    };
    max: unknown extends Defaults["max"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["max"] ? string : string | Defaults["max"]>;
        default: unknown extends Defaults["max"] ? string : string | Defaults["max"];
    };
    min: unknown extends Defaults["min"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["min"] ? string : string | Defaults["min"]>;
        default: unknown extends Defaults["min"] ? string : string | Defaults["min"];
    };
    viewMode: unknown extends Defaults["viewMode"] ? {
        type: PropType<VTimePickerViewMode>;
        default: string;
    } : Omit<{
        type: PropType<VTimePickerViewMode>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["viewMode"] ? VTimePickerViewMode : Defaults["viewMode"] | VTimePickerViewMode>;
        default: unknown extends Defaults["viewMode"] ? VTimePickerViewMode : Defaults["viewMode"] | NonNullable<VTimePickerViewMode>;
    };
    period: unknown extends Defaults["period"] ? {
        type: PropType<Period>;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<Period>;
        default: string;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["period"] ? Period : Defaults["period"] | Period>;
        default: unknown extends Defaults["period"] ? Period : Defaults["period"] | NonNullable<Period>;
    };
    modelValue: unknown extends Defaults["modelValue"] ? PropType<any> : {
        type: PropType<unknown extends Defaults["modelValue"] ? any : any>;
        default: unknown extends Defaults["modelValue"] ? any : any;
    };
    readonly: unknown extends Defaults["readonly"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"]>;
        default: unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"];
    };
    scrollable: unknown extends Defaults["scrollable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["scrollable"] ? boolean : boolean | Defaults["scrollable"]>;
        default: unknown extends Defaults["scrollable"] ? boolean : boolean | Defaults["scrollable"];
    };
    useSeconds: unknown extends Defaults["useSeconds"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["useSeconds"] ? boolean : boolean | Defaults["useSeconds"]>;
        default: unknown extends Defaults["useSeconds"] ? boolean : boolean | Defaults["useSeconds"];
    };
};
export declare const VTimePicker: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        divided: boolean;
        title: string;
        hideHeader: boolean;
        hideTitle: boolean;
        disabled: boolean;
        format: "24hr" | "ampm";
        viewMode: VTimePickerViewMode;
        period: Period;
        readonly: boolean;
        scrollable: boolean;
        useSeconds: boolean;
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
        bgColor?: string | undefined;
        allowedHours?: AllowFunction | number[] | undefined;
        allowedMinutes?: AllowFunction | number[] | undefined;
        allowedSeconds?: AllowFunction | number[] | undefined;
        max?: string | undefined;
        min?: string | undefined;
        modelValue?: any;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
            actions?: (() => import("vue").VNodeChild) | undefined;
            title?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            actions?: false | (() => import("vue").VNodeChild) | undefined;
            title?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:actions"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:hour"?: ((val: number) => any) | undefined;
        "onUpdate:minute"?: ((val: number) => any) | undefined;
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
        "onUpdate:period"?: ((val: Period) => any) | undefined;
        "onUpdate:second"?: ((val: number) => any) | undefined;
        "onUpdate:viewMode"?: ((val: VTimePickerViewMode) => any) | undefined;
    }, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:hour": (val: number) => true;
        "update:minute": (val: number) => true;
        "update:period": (val: Period) => true;
        "update:second": (val: number) => true;
        "update:modelValue": (val: string) => true;
        "update:viewMode": (val: VTimePickerViewMode) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        divided: boolean;
        title: string;
        hideHeader: boolean;
        hideTitle: boolean;
        disabled: boolean;
        format: "24hr" | "ampm";
        viewMode: VTimePickerViewMode;
        period: Period;
        readonly: boolean;
        scrollable: boolean;
        useSeconds: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        actions: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        title: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        divided: boolean;
        title: string;
        hideHeader: boolean;
        hideTitle: boolean;
        disabled: boolean;
        format: "24hr" | "ampm";
        viewMode: VTimePickerViewMode;
        period: Period;
        readonly: boolean;
        scrollable: boolean;
        useSeconds: boolean;
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
        bgColor?: string | undefined;
        allowedHours?: AllowFunction | number[] | undefined;
        allowedMinutes?: AllowFunction | number[] | undefined;
        allowedSeconds?: AllowFunction | number[] | undefined;
        max?: string | undefined;
        min?: string | undefined;
        modelValue?: any;
    } & {
        $children?: {
            default?: (() => import("vue").VNodeChild) | undefined;
            actions?: (() => import("vue").VNodeChild) | undefined;
            title?: (() => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
        "v-slots"?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            actions?: false | (() => import("vue").VNodeChild) | undefined;
            title?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:actions"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:hour"?: ((val: number) => any) | undefined;
        "onUpdate:minute"?: ((val: number) => any) | undefined;
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
        "onUpdate:period"?: ((val: Period) => any) | undefined;
        "onUpdate:second"?: ((val: number) => any) | undefined;
        "onUpdate:viewMode"?: ((val: VTimePickerViewMode) => any) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        divided: boolean;
        title: string;
        hideHeader: boolean;
        hideTitle: boolean;
        disabled: boolean;
        format: "24hr" | "ampm";
        viewMode: VTimePickerViewMode;
        period: Period;
        readonly: boolean;
        scrollable: boolean;
        useSeconds: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    divided: boolean;
    title: string;
    hideHeader: boolean;
    hideTitle: boolean;
    disabled: boolean;
    format: "24hr" | "ampm";
    viewMode: VTimePickerViewMode;
    period: Period;
    readonly: boolean;
    scrollable: boolean;
    useSeconds: boolean;
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
    bgColor?: string | undefined;
    allowedHours?: AllowFunction | number[] | undefined;
    allowedMinutes?: AllowFunction | number[] | undefined;
    allowedSeconds?: AllowFunction | number[] | undefined;
    max?: string | undefined;
    min?: string | undefined;
    modelValue?: any;
} & {
    $children?: {
        default?: (() => import("vue").VNodeChild) | undefined;
        actions?: (() => import("vue").VNodeChild) | undefined;
        title?: (() => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | (() => import("vue").VNodeChild) | import("vue").VNodeChild;
    "v-slots"?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
        actions?: false | (() => import("vue").VNodeChild) | undefined;
        title?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:actions"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
} & {
    "onUpdate:hour"?: ((val: number) => any) | undefined;
    "onUpdate:minute"?: ((val: number) => any) | undefined;
    "onUpdate:modelValue"?: ((val: string) => any) | undefined;
    "onUpdate:period"?: ((val: Period) => any) | undefined;
    "onUpdate:second"?: ((val: number) => any) | undefined;
    "onUpdate:viewMode"?: ((val: VTimePickerViewMode) => any) | undefined;
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:hour": (val: number) => true;
    "update:minute": (val: number) => true;
    "update:period": (val: Period) => true;
    "update:second": (val: number) => true;
    "update:modelValue": (val: string) => true;
    "update:viewMode": (val: VTimePickerViewMode) => true;
}, string, {
    style: import("vue").StyleValue;
    rounded: string | number | boolean;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    divided: boolean;
    title: string;
    hideHeader: boolean;
    hideTitle: boolean;
    disabled: boolean;
    format: "24hr" | "ampm";
    viewMode: VTimePickerViewMode;
    period: Period;
    readonly: boolean;
    scrollable: boolean;
    useSeconds: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    actions: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    title: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
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
    bgColor: StringConstructor;
    divided: BooleanConstructor;
    title: {
        type: PropType<string>;
        default: string;
    };
    hideHeader: BooleanConstructor;
    hideTitle: BooleanConstructor;
    allowedHours: PropType<AllowFunction | number[]>;
    allowedMinutes: PropType<AllowFunction | number[]>;
    allowedSeconds: PropType<AllowFunction | number[]>;
    disabled: BooleanConstructor;
    format: {
        type: PropType<"24hr" | "ampm">;
        default: string;
    };
    max: StringConstructor;
    min: StringConstructor;
    viewMode: {
        type: PropType<VTimePickerViewMode>;
        default: string;
    };
    period: {
        type: PropType<Period>;
        default: string;
        validator: (v: any) => boolean;
    };
    modelValue: PropType<any>;
    readonly: BooleanConstructor;
    scrollable: BooleanConstructor;
    useSeconds: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    class: PropType<any>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
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
    bgColor: StringConstructor;
    divided: BooleanConstructor;
    title: {
        type: PropType<string>;
        default: string;
    };
    hideHeader: BooleanConstructor;
    hideTitle: BooleanConstructor;
    allowedHours: PropType<AllowFunction | number[]>;
    allowedMinutes: PropType<AllowFunction | number[]>;
    allowedSeconds: PropType<AllowFunction | number[]>;
    disabled: BooleanConstructor;
    format: {
        type: PropType<"24hr" | "ampm">;
        default: string;
    };
    max: StringConstructor;
    min: StringConstructor;
    viewMode: {
        type: PropType<VTimePickerViewMode>;
        default: string;
    };
    period: {
        type: PropType<Period>;
        default: string;
        validator: (v: any) => boolean;
    };
    modelValue: PropType<any>;
    readonly: BooleanConstructor;
    scrollable: BooleanConstructor;
    useSeconds: BooleanConstructor;
}>>;
export type VTimePicker = InstanceType<typeof VTimePicker>;

