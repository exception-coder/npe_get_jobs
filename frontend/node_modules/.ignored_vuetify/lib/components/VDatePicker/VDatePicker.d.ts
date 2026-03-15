// Styles

// Types
import type { VDatePickerHeaderSlots } from './VDatePickerHeader.js';
import type { VDatePickerMonthSlots } from './VDatePickerMonth.js';
import type { VDatePickerMonthsSlots } from './VDatePickerMonths.js';
import type { VDatePickerYearsSlots } from './VDatePickerYears.js';
import type { VPickerSlots } from '../../labs/VPicker/VPicker.js';
import type { GenericProps } from '../../util/index.js';
// Types
export type VDatePickerSlots = Omit<VPickerSlots, 'header' | 'default'> & Omit<VDatePickerHeaderSlots, 'default'> & VDatePickerYearsSlots & VDatePickerMonthsSlots & VDatePickerMonthSlots & {
    header: {
        header: string;
        transition: string;
    };
};
export declare const makeVDatePickerProps: <Defaults extends {
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
    landscape?: unknown;
    title?: unknown;
    hideHeader?: unknown;
    hideTitle?: unknown;
    active?: unknown;
    controlHeight?: unknown;
    nextIcon?: unknown;
    prevIcon?: unknown;
    modeIcon?: unknown;
    text?: unknown;
    viewMode?: unknown;
    allowedDates?: unknown;
    disabled?: unknown;
    month?: unknown;
    showAdjacentMonths?: unknown;
    weekdays?: unknown;
    weeksInMonth?: unknown;
    firstDayOfWeek?: unknown;
    firstDayOfYear?: unknown;
    weekdayFormat?: unknown;
    hideWeekdays?: unknown;
    multiple?: unknown;
    showWeek?: unknown;
    transition?: unknown;
    reverseTransition?: unknown;
    year?: unknown;
    allowedMonths?: unknown;
    min?: unknown;
    max?: unknown;
    allowedYears?: unknown;
    header?: unknown;
    headerColor?: unknown;
    modelValue?: unknown;
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
    border: unknown extends Defaults["border"] ? (BooleanConstructor | NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["border"] ? string | number | boolean : string | number | boolean | Defaults["border"]>;
        default: unknown extends Defaults["border"] ? string | number | boolean : Defaults["border"] | NonNullable<string | number | boolean>;
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
    height: unknown extends Defaults["height"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : Defaults["height"] | NonNullable<string | number>;
    };
    maxHeight: unknown extends Defaults["maxHeight"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["maxHeight"] ? string | number : string | number | Defaults["maxHeight"]>;
        default: unknown extends Defaults["maxHeight"] ? string | number : Defaults["maxHeight"] | NonNullable<string | number>;
    };
    maxWidth: unknown extends Defaults["maxWidth"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["maxWidth"] ? string | number : string | number | Defaults["maxWidth"]>;
        default: unknown extends Defaults["maxWidth"] ? string | number : Defaults["maxWidth"] | NonNullable<string | number>;
    };
    minHeight: unknown extends Defaults["minHeight"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["minHeight"] ? string | number : string | number | Defaults["minHeight"]>;
        default: unknown extends Defaults["minHeight"] ? string | number : Defaults["minHeight"] | NonNullable<string | number>;
    };
    minWidth: unknown extends Defaults["minWidth"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["minWidth"] ? string | number : string | number | Defaults["minWidth"]>;
        default: unknown extends Defaults["minWidth"] ? string | number : Defaults["minWidth"] | NonNullable<string | number>;
    };
    width: unknown extends Defaults["width"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : Defaults["width"] | NonNullable<string | number>;
    };
    location: unknown extends Defaults["location"] ? import("vue").PropType<import("../../util/index.js").Anchor | null> : {
        type: import("vue").PropType<unknown extends Defaults["location"] ? import("../../util/index.js").Anchor | null : Defaults["location"] | import("../../util/index.js").Anchor | null>;
        default: unknown extends Defaults["location"] ? import("../../util/index.js").Anchor | null : Defaults["location"] | NonNullable<import("../../util/index.js").Anchor | null>;
    };
    position: unknown extends Defaults["position"] ? {
        type: import("vue").PropType<"absolute" | "fixed" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    } : Omit<{
        type: import("vue").PropType<"absolute" | "fixed" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["position"] ? "absolute" | "fixed" | "relative" | "static" | "sticky" : "absolute" | "fixed" | "relative" | "static" | "sticky" | Defaults["position"]>;
        default: unknown extends Defaults["position"] ? "absolute" | "fixed" | "relative" | "static" | "sticky" : Defaults["position"] | NonNullable<"absolute" | "fixed" | "relative" | "static" | "sticky">;
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    bgColor: unknown extends Defaults["bgColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"]>;
        default: unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"];
    };
    divided: unknown extends Defaults["divided"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["divided"] ? boolean : boolean | Defaults["divided"]>;
        default: unknown extends Defaults["divided"] ? boolean : boolean | Defaults["divided"];
    };
    landscape: unknown extends Defaults["landscape"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["landscape"] ? boolean : boolean | Defaults["landscape"]>;
        default: unknown extends Defaults["landscape"] ? boolean : boolean | Defaults["landscape"];
    };
    title: unknown extends Defaults["title"] ? {
        type: import("vue").PropType<string>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<string>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["title"] ? string : string | Defaults["title"]>;
        default: unknown extends Defaults["title"] ? string : string | Defaults["title"];
    };
    hideHeader: unknown extends Defaults["hideHeader"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hideHeader"] ? boolean : boolean | Defaults["hideHeader"]>;
        default: unknown extends Defaults["hideHeader"] ? boolean : boolean | Defaults["hideHeader"];
    };
    hideTitle: unknown extends Defaults["hideTitle"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hideTitle"] ? boolean : boolean | Defaults["hideTitle"]>;
        default: unknown extends Defaults["hideTitle"] ? boolean : boolean | Defaults["hideTitle"];
    };
    active: unknown extends Defaults["active"] ? {
        type: import("vue").PropType<string | string[]>;
        default: undefined;
    } : Omit<{
        type: import("vue").PropType<string | string[]>;
        default: undefined;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["active"] ? string | string[] : string | string[] | Defaults["active"]>;
        default: unknown extends Defaults["active"] ? string | string[] : Defaults["active"] | NonNullable<string | string[]>;
    };
    controlHeight: unknown extends Defaults["controlHeight"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["controlHeight"] ? string | number : string | number | Defaults["controlHeight"]>;
        default: unknown extends Defaults["controlHeight"] ? string | number : Defaults["controlHeight"] | NonNullable<string | number>;
    };
    nextIcon: unknown extends Defaults["nextIcon"] ? {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["nextIcon"] ? import("../../composables/icons.js").IconValue : Defaults["nextIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["nextIcon"] ? import("../../composables/icons.js").IconValue : Defaults["nextIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    prevIcon: unknown extends Defaults["prevIcon"] ? {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["prevIcon"] ? import("../../composables/icons.js").IconValue : Defaults["prevIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["prevIcon"] ? import("../../composables/icons.js").IconValue : Defaults["prevIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    modeIcon: unknown extends Defaults["modeIcon"] ? {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["modeIcon"] ? import("../../composables/icons.js").IconValue : Defaults["modeIcon"] | import("../../composables/icons.js").IconValue>;
        default: unknown extends Defaults["modeIcon"] ? import("../../composables/icons.js").IconValue : Defaults["modeIcon"] | NonNullable<import("../../composables/icons.js").IconValue>;
    };
    text: unknown extends Defaults["text"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["text"] ? string : string | Defaults["text"]>;
        default: unknown extends Defaults["text"] ? string : string | Defaults["text"];
    };
    viewMode: unknown extends Defaults["viewMode"] ? {
        type: import("vue").PropType<"month" | "months" | "year">;
        default: string;
    } : Omit<{
        type: import("vue").PropType<"month" | "months" | "year">;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["viewMode"] ? "month" | "months" | "year" : "month" | "months" | "year" | Defaults["viewMode"]>;
        default: unknown extends Defaults["viewMode"] ? "month" | "months" | "year" : Defaults["viewMode"] | NonNullable<"month" | "months" | "year">;
    };
    allowedDates: unknown extends Defaults["allowedDates"] ? import("vue").PropType<unknown[] | ((date: unknown) => boolean)> : {
        type: import("vue").PropType<unknown extends Defaults["allowedDates"] ? unknown[] | ((date: unknown) => boolean) : unknown[] | ((date: unknown) => boolean) | Defaults["allowedDates"]>;
        default: unknown extends Defaults["allowedDates"] ? unknown[] | ((date: unknown) => boolean) : Defaults["allowedDates"] | NonNullable<unknown[] | ((date: unknown) => boolean)>;
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
    month: unknown extends Defaults["month"] ? (NumberConstructor | StringConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["month"] ? string | number : string | number | Defaults["month"]>;
        default: unknown extends Defaults["month"] ? string | number : Defaults["month"] | NonNullable<string | number>;
    };
    showAdjacentMonths: unknown extends Defaults["showAdjacentMonths"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["showAdjacentMonths"] ? boolean : boolean | Defaults["showAdjacentMonths"]>;
        default: unknown extends Defaults["showAdjacentMonths"] ? boolean : boolean | Defaults["showAdjacentMonths"];
    };
    weekdays: unknown extends Defaults["weekdays"] ? {
        type: import("vue").PropType<import("../../composables/calendar.js").CalendarWeekdays[]>;
        default: () => number[];
    } : Omit<{
        type: import("vue").PropType<import("../../composables/calendar.js").CalendarWeekdays[]>;
        default: () => number[];
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["weekdays"] ? import("../../composables/calendar.js").CalendarWeekdays[] : import("../../composables/calendar.js").CalendarWeekdays[] | Defaults["weekdays"]>;
        default: unknown extends Defaults["weekdays"] ? import("../../composables/calendar.js").CalendarWeekdays[] : import("../../composables/calendar.js").CalendarWeekdays[] | Defaults["weekdays"];
    };
    weeksInMonth: unknown extends Defaults["weeksInMonth"] ? Omit<{
        type: import("vue").PropType<"dynamic" | "static">;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<"dynamic" | "static">;
        default: NonNullable<"dynamic" | "static">;
    } : Omit<Omit<{
        type: import("vue").PropType<"dynamic" | "static">;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<"dynamic" | "static">;
        default: NonNullable<"dynamic" | "static">;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["weeksInMonth"] ? "dynamic" | "static" : "dynamic" | "static" | Defaults["weeksInMonth"]>;
        default: unknown extends Defaults["weeksInMonth"] ? "dynamic" | "static" : Defaults["weeksInMonth"] | NonNullable<"dynamic" | "static">;
    };
    firstDayOfWeek: unknown extends Defaults["firstDayOfWeek"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["firstDayOfWeek"] ? string | number : string | number | Defaults["firstDayOfWeek"]>;
        default: unknown extends Defaults["firstDayOfWeek"] ? string | number : Defaults["firstDayOfWeek"] | NonNullable<string | number>;
    };
    firstDayOfYear: unknown extends Defaults["firstDayOfYear"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["firstDayOfYear"] ? string | number : string | number | Defaults["firstDayOfYear"]>;
        default: unknown extends Defaults["firstDayOfYear"] ? string | number : Defaults["firstDayOfYear"] | NonNullable<string | number>;
    };
    weekdayFormat: unknown extends Defaults["weekdayFormat"] ? import("vue").PropType<"long" | "narrow" | "short" | undefined> : {
        type: import("vue").PropType<unknown extends Defaults["weekdayFormat"] ? "long" | "narrow" | "short" | undefined : "long" | "narrow" | "short" | Defaults["weekdayFormat"] | undefined>;
        default: unknown extends Defaults["weekdayFormat"] ? "long" | "narrow" | "short" | undefined : Defaults["weekdayFormat"] | NonNullable<"long" | "narrow" | "short" | undefined>;
    };
    hideWeekdays: unknown extends Defaults["hideWeekdays"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hideWeekdays"] ? boolean : boolean | Defaults["hideWeekdays"]>;
        default: unknown extends Defaults["hideWeekdays"] ? boolean : boolean | Defaults["hideWeekdays"];
    };
    multiple: unknown extends Defaults["multiple"] ? import("vue").PropType<number | "range" | boolean | (string & {})> : {
        type: import("vue").PropType<unknown extends Defaults["multiple"] ? number | "range" | boolean | (string & {}) : number | "range" | boolean | Defaults["multiple"] | (string & {})>;
        default: unknown extends Defaults["multiple"] ? number | "range" | boolean | (string & {}) : Defaults["multiple"] | NonNullable<number | "range" | boolean | (string & {})>;
    };
    showWeek: unknown extends Defaults["showWeek"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["showWeek"] ? boolean : boolean | Defaults["showWeek"]>;
        default: unknown extends Defaults["showWeek"] ? boolean : boolean | Defaults["showWeek"];
    };
    transition: unknown extends Defaults["transition"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["transition"] ? string : string | Defaults["transition"]>;
        default: unknown extends Defaults["transition"] ? string : string | Defaults["transition"];
    };
    reverseTransition: unknown extends Defaults["reverseTransition"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["reverseTransition"] ? string : string | Defaults["reverseTransition"]>;
        default: unknown extends Defaults["reverseTransition"] ? string : string | Defaults["reverseTransition"];
    };
    year: unknown extends Defaults["year"] ? NumberConstructor : {
        type: import("vue").PropType<unknown extends Defaults["year"] ? number : number | Defaults["year"]>;
        default: unknown extends Defaults["year"] ? number : number | Defaults["year"];
    };
    allowedMonths: unknown extends Defaults["allowedMonths"] ? import("vue").PropType<number[] | ((date: number) => boolean)> : {
        type: import("vue").PropType<unknown extends Defaults["allowedMonths"] ? number[] | ((date: number) => boolean) : number[] | ((date: number) => boolean) | Defaults["allowedMonths"]>;
        default: unknown extends Defaults["allowedMonths"] ? number[] | ((date: number) => boolean) : Defaults["allowedMonths"] | NonNullable<number[] | ((date: number) => boolean)>;
    };
    min: unknown extends Defaults["min"] ? import("vue").PropType<unknown> : {
        type: import("vue").PropType<unknown extends Defaults["min"] ? unknown : unknown>;
        default: unknown extends Defaults["min"] ? unknown : {} | Defaults["min"];
    };
    max: unknown extends Defaults["max"] ? import("vue").PropType<unknown> : {
        type: import("vue").PropType<unknown extends Defaults["max"] ? unknown : unknown>;
        default: unknown extends Defaults["max"] ? unknown : {} | Defaults["max"];
    };
    allowedYears: unknown extends Defaults["allowedYears"] ? import("vue").PropType<number[] | ((date: number) => boolean)> : {
        type: import("vue").PropType<unknown extends Defaults["allowedYears"] ? number[] | ((date: number) => boolean) : number[] | ((date: number) => boolean) | Defaults["allowedYears"]>;
        default: unknown extends Defaults["allowedYears"] ? number[] | ((date: number) => boolean) : Defaults["allowedYears"] | NonNullable<number[] | ((date: number) => boolean)>;
    };
    header: unknown extends Defaults["header"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<unknown extends Defaults["header"] ? string : string | Defaults["header"]>;
        default: unknown extends Defaults["header"] ? string : string | Defaults["header"];
    };
    headerColor: unknown extends Defaults["headerColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["headerColor"] ? string : string | Defaults["headerColor"]>;
        default: unknown extends Defaults["headerColor"] ? string : string | Defaults["headerColor"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? null : {
        type: import("vue").PropType<unknown extends Defaults["modelValue"] ? any : any>;
        default: unknown extends Defaults["modelValue"] ? any : any;
    };
};
export declare const VDatePicker: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        divided: boolean;
        landscape: boolean;
        title: string;
        hideHeader: boolean;
        hideTitle: boolean;
        nextIcon: import("../../composables/icons.js").IconValue;
        prevIcon: import("../../composables/icons.js").IconValue;
        modeIcon: import("../../composables/icons.js").IconValue;
        viewMode: "month" | "months" | "year";
        disabled: boolean;
        showAdjacentMonths: boolean;
        weekdays: import("../../composables/calendar.js").CalendarWeekdays[];
        weeksInMonth: "dynamic" | "static";
        hideWeekdays: boolean;
        showWeek: boolean;
        transition: string;
        reverseTransition: string;
        header: string;
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
        active?: string | string[] | undefined;
        controlHeight?: string | number | undefined;
        text?: string | undefined;
        allowedDates?: unknown[] | ((date: unknown) => boolean) | undefined;
        month?: string | number | undefined;
        firstDayOfWeek?: string | number | undefined;
        firstDayOfYear?: string | number | undefined;
        weekdayFormat?: "long" | "narrow" | "short" | undefined;
        year?: number | undefined;
        allowedMonths?: number[] | ((date: number) => boolean) | undefined;
        min?: unknown;
        max?: unknown;
        allowedYears?: number[] | ((date: number) => boolean) | undefined;
        headerColor?: string | undefined;
    } & {
        "onUpdate:month"?: ((date: any) => any) | undefined;
        "onUpdate:viewMode"?: ((date: any) => any) | undefined;
        "onUpdate:year"?: ((date: any) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        "update:modelValue": (date: any) => true;
        "update:month": (date: any) => true;
        "update:year": (date: any) => true;
        // 'update:inputMode': (date: any) => true,
        "update:viewMode": (date: any) => true;
    }, "$children" | "modelValue" | "multiple" | "update:modelValue" | "v-slot:actions" | "v-slot:append" | "v-slot:day" | "v-slot:header" | "v-slot:month" | "v-slot:prepend" | "v-slot:title" | "v-slot:year" | "v-slots">, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        divided: boolean;
        landscape: boolean;
        title: string;
        hideHeader: boolean;
        hideTitle: boolean;
        active: string | string[];
        nextIcon: import("../../composables/icons.js").IconValue;
        prevIcon: import("../../composables/icons.js").IconValue;
        modeIcon: import("../../composables/icons.js").IconValue;
        viewMode: "month" | "months" | "year";
        disabled: boolean;
        showAdjacentMonths: boolean;
        weekdays: import("../../composables/calendar.js").CalendarWeekdays[];
        weeksInMonth: "dynamic" | "static";
        firstDayOfWeek: string | number;
        firstDayOfYear: string | number;
        hideWeekdays: boolean;
        showWeek: boolean;
        transition: string;
        reverseTransition: string;
        header: string;
    }, true, {}, import("vue").SlotsType<Partial<{
        actions: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        title: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        prepend: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        append: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        day: (arg: {
            props: {
                onClick: () => void;
            };
            item: any;
            i: number;
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        month: (arg: {
            month: {
                text: string;
                value: number;
            };
            i: number;
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        year: (arg: {
            year: {
                text: string;
                value: number;
            };
            i: number;
            props: {
                active: boolean;
                color?: string | undefined;
                rounded: boolean;
                text: string;
                variant: "flat" | "text";
                onClick: () => void;
            };
        }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        header: (arg: {
            header: string;
            transition: string;
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
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        divided: boolean;
        landscape: boolean;
        title: string;
        hideHeader: boolean;
        hideTitle: boolean;
        nextIcon: import("../../composables/icons.js").IconValue;
        prevIcon: import("../../composables/icons.js").IconValue;
        modeIcon: import("../../composables/icons.js").IconValue;
        viewMode: "month" | "months" | "year";
        disabled: boolean;
        showAdjacentMonths: boolean;
        weekdays: import("../../composables/calendar.js").CalendarWeekdays[];
        weeksInMonth: "dynamic" | "static";
        hideWeekdays: boolean;
        showWeek: boolean;
        transition: string;
        reverseTransition: string;
        header: string;
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
        active?: string | string[] | undefined;
        controlHeight?: string | number | undefined;
        text?: string | undefined;
        allowedDates?: unknown[] | ((date: unknown) => boolean) | undefined;
        month?: string | number | undefined;
        firstDayOfWeek?: string | number | undefined;
        firstDayOfYear?: string | number | undefined;
        weekdayFormat?: "long" | "narrow" | "short" | undefined;
        year?: number | undefined;
        allowedMonths?: number[] | ((date: number) => boolean) | undefined;
        min?: unknown;
        max?: unknown;
        allowedYears?: number[] | ((date: number) => boolean) | undefined;
        headerColor?: string | undefined;
    } & {
        "onUpdate:month"?: ((date: any) => any) | undefined;
        "onUpdate:viewMode"?: ((date: any) => any) | undefined;
        "onUpdate:year"?: ((date: any) => any) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        rounded: string | number | boolean;
        tile: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        divided: boolean;
        landscape: boolean;
        title: string;
        hideHeader: boolean;
        hideTitle: boolean;
        active: string | string[];
        nextIcon: import("../../composables/icons.js").IconValue;
        prevIcon: import("../../composables/icons.js").IconValue;
        modeIcon: import("../../composables/icons.js").IconValue;
        viewMode: "month" | "months" | "year";
        disabled: boolean;
        showAdjacentMonths: boolean;
        weekdays: import("../../composables/calendar.js").CalendarWeekdays[];
        weeksInMonth: "dynamic" | "static";
        firstDayOfWeek: string | number;
        firstDayOfYear: string | number;
        hideWeekdays: boolean;
        showWeek: boolean;
        transition: string;
        reverseTransition: string;
        header: string;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    style: string | false | import("vue").StyleValue[] | import("vue").CSSProperties | null;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    divided: boolean;
    landscape: boolean;
    title: string;
    hideHeader: boolean;
    hideTitle: boolean;
    nextIcon: import("../../composables/icons.js").IconValue;
    prevIcon: import("../../composables/icons.js").IconValue;
    modeIcon: import("../../composables/icons.js").IconValue;
    viewMode: "month" | "months" | "year";
    disabled: boolean;
    showAdjacentMonths: boolean;
    weekdays: import("../../composables/calendar.js").CalendarWeekdays[];
    weeksInMonth: "dynamic" | "static";
    hideWeekdays: boolean;
    showWeek: boolean;
    transition: string;
    reverseTransition: string;
    header: string;
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
    active?: string | string[] | undefined;
    controlHeight?: string | number | undefined;
    text?: string | undefined;
    allowedDates?: unknown[] | ((date: unknown) => boolean) | undefined;
    month?: string | number | undefined;
    firstDayOfWeek?: string | number | undefined;
    firstDayOfYear?: string | number | undefined;
    weekdayFormat?: "long" | "narrow" | "short" | undefined;
    year?: number | undefined;
    allowedMonths?: number[] | ((date: number) => boolean) | undefined;
    min?: unknown;
    max?: unknown;
    allowedYears?: number[] | ((date: number) => boolean) | undefined;
    headerColor?: string | undefined;
} & {
    "onUpdate:month"?: ((date: any) => any) | undefined;
    "onUpdate:viewMode"?: ((date: any) => any) | undefined;
    "onUpdate:year"?: ((date: any) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
    "update:modelValue": (date: any) => true;
    "update:month": (date: any) => true;
    "update:year": (date: any) => true;
    // 'update:inputMode': (date: any) => true,
    "update:viewMode": (date: any) => true;
}, "$children" | "modelValue" | "multiple" | "update:modelValue" | "v-slot:actions" | "v-slot:append" | "v-slot:day" | "v-slot:header" | "v-slot:month" | "v-slot:prepend" | "v-slot:title" | "v-slot:year" | "v-slots">, string, {
    style: import("vue").StyleValue;
    rounded: string | number | boolean;
    tile: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    divided: boolean;
    landscape: boolean;
    title: string;
    hideHeader: boolean;
    hideTitle: boolean;
    active: string | string[];
    nextIcon: import("../../composables/icons.js").IconValue;
    prevIcon: import("../../composables/icons.js").IconValue;
    modeIcon: import("../../composables/icons.js").IconValue;
    viewMode: "month" | "months" | "year";
    disabled: boolean;
    showAdjacentMonths: boolean;
    weekdays: import("../../composables/calendar.js").CalendarWeekdays[];
    weeksInMonth: "dynamic" | "static";
    firstDayOfWeek: string | number;
    firstDayOfYear: string | number;
    hideWeekdays: boolean;
    showWeek: boolean;
    transition: string;
    reverseTransition: string;
    header: string;
}, {}, string, import("vue").SlotsType<Partial<{
    actions: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    title: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    prepend: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    append: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    day: (arg: {
        props: {
            onClick: () => void;
        };
        item: any;
        i: number;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    month: (arg: {
        month: {
            text: string;
            value: number;
        };
        i: number;
        props: {
            onClick: () => void;
        };
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    year: (arg: {
        year: {
            text: string;
            value: number;
        };
        i: number;
        props: {
            active: boolean;
            color?: string | undefined;
            rounded: boolean;
            text: string;
            variant: "flat" | "text";
            onClick: () => void;
        };
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    header: (arg: {
        header: string;
        transition: string;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T, Multiple extends number | "range" | boolean | (string & {}) = false, TModel = Multiple extends string | number | true ? T[] : T>(props: {
    modelValue?: TModel | undefined;
    "onUpdate:modelValue"?: ((value: TModel) => void) | undefined;
    multiple?: Multiple | undefined;
}, slots: VDatePickerSlots) => GenericProps<{
    modelValue?: TModel | undefined;
    "onUpdate:modelValue"?: ((value: TModel) => void) | undefined;
    multiple?: Multiple | undefined;
}, VDatePickerSlots>) & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
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
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    height: (NumberConstructor | StringConstructor)[];
    maxHeight: (NumberConstructor | StringConstructor)[];
    maxWidth: (NumberConstructor | StringConstructor)[];
    minHeight: (NumberConstructor | StringConstructor)[];
    minWidth: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    location: import("vue").PropType<import("../../util/index.js").Anchor | null>;
    position: {
        type: import("vue").PropType<"absolute" | "fixed" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    color: StringConstructor;
    bgColor: StringConstructor;
    divided: BooleanConstructor;
    landscape: BooleanConstructor;
    title: {
        type: import("vue").PropType<string>;
        default: string;
    };
    hideHeader: BooleanConstructor;
    hideTitle: BooleanConstructor;
    active: {
        type: import("vue").PropType<string | string[]>;
        default: undefined;
    };
    controlHeight: (NumberConstructor | StringConstructor)[];
    nextIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    prevIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    modeIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    text: StringConstructor;
    viewMode: {
        type: import("vue").PropType<"month" | "months" | "year">;
        default: string;
    };
    allowedDates: import("vue").PropType<unknown[] | ((date: unknown) => boolean)>;
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    month: (NumberConstructor | StringConstructor)[];
    showAdjacentMonths: BooleanConstructor;
    weekdays: {
        type: import("vue").PropType<import("../../composables/calendar.js").CalendarWeekdays[]>;
        default: () => number[];
    };
    weeksInMonth: Omit<{
        type: import("vue").PropType<"dynamic" | "static">;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<"dynamic" | "static">;
        default: NonNullable<"dynamic" | "static">;
    };
    firstDayOfWeek: {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    firstDayOfYear: {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    weekdayFormat: import("vue").PropType<"long" | "narrow" | "short" | undefined>;
    hideWeekdays: BooleanConstructor;
    multiple: import("vue").PropType<number | "range" | boolean | (string & {})>;
    showWeek: BooleanConstructor;
    transition: {
        type: StringConstructor;
        default: string;
    };
    reverseTransition: {
        type: StringConstructor;
        default: string;
    };
    year: NumberConstructor;
    allowedMonths: import("vue").PropType<number[] | ((date: number) => boolean)>;
    min: import("vue").PropType<unknown>;
    max: import("vue").PropType<unknown>;
    allowedYears: import("vue").PropType<number[] | ((date: number) => boolean)>;
    header: {
        type: StringConstructor;
        default: string;
    };
    headerColor: StringConstructor;
    modelValue: null;
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    class: import("vue").PropType<any>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
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
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    height: (NumberConstructor | StringConstructor)[];
    maxHeight: (NumberConstructor | StringConstructor)[];
    maxWidth: (NumberConstructor | StringConstructor)[];
    minHeight: (NumberConstructor | StringConstructor)[];
    minWidth: (NumberConstructor | StringConstructor)[];
    width: (NumberConstructor | StringConstructor)[];
    location: import("vue").PropType<import("../../util/index.js").Anchor | null>;
    position: {
        type: import("vue").PropType<"absolute" | "fixed" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    color: StringConstructor;
    bgColor: StringConstructor;
    divided: BooleanConstructor;
    landscape: BooleanConstructor;
    title: {
        type: import("vue").PropType<string>;
        default: string;
    };
    hideHeader: BooleanConstructor;
    hideTitle: BooleanConstructor;
    active: {
        type: import("vue").PropType<string | string[]>;
        default: undefined;
    };
    controlHeight: (NumberConstructor | StringConstructor)[];
    nextIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    prevIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    modeIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    text: StringConstructor;
    viewMode: {
        type: import("vue").PropType<"month" | "months" | "year">;
        default: string;
    };
    allowedDates: import("vue").PropType<unknown[] | ((date: unknown) => boolean)>;
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    month: (NumberConstructor | StringConstructor)[];
    showAdjacentMonths: BooleanConstructor;
    weekdays: {
        type: import("vue").PropType<import("../../composables/calendar.js").CalendarWeekdays[]>;
        default: () => number[];
    };
    weeksInMonth: Omit<{
        type: import("vue").PropType<"dynamic" | "static">;
        default: string;
    }, "default" | "type"> & {
        type: import("vue").PropType<"dynamic" | "static">;
        default: NonNullable<"dynamic" | "static">;
    };
    firstDayOfWeek: {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    firstDayOfYear: {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    weekdayFormat: import("vue").PropType<"long" | "narrow" | "short" | undefined>;
    hideWeekdays: BooleanConstructor;
    multiple: import("vue").PropType<number | "range" | boolean | (string & {})>;
    showWeek: BooleanConstructor;
    transition: {
        type: StringConstructor;
        default: string;
    };
    reverseTransition: {
        type: StringConstructor;
        default: string;
    };
    year: NumberConstructor;
    allowedMonths: import("vue").PropType<number[] | ((date: number) => boolean)>;
    min: import("vue").PropType<unknown>;
    max: import("vue").PropType<unknown>;
    allowedYears: import("vue").PropType<number[] | ((date: number) => boolean)>;
    header: {
        type: StringConstructor;
        default: string;
    };
    headerColor: StringConstructor;
    modelValue: null;
}>>;
export type VDatePicker = InstanceType<typeof VDatePicker>;
