// Styles

// Types
import type { PropType } from 'vue';
import type { GenericProps } from '../../util/index.js';
export type DatePickerEventColorValue = boolean | string | string[];
export type DatePickerEventColors = DatePickerEventColorValue | Record<string, DatePickerEventColorValue> | ((date: string) => DatePickerEventColorValue);
export type DatePickerEvents = string[] | ((date: string) => DatePickerEventColorValue) | Record<string, DatePickerEventColorValue>;
export type VDatePickerMonthSlots = {
    day: {
        props: {
            onClick: () => void;
        };
        item: any;
        i: number;
    };
};
export declare const makeVDatePickerMonthProps: <Defaults extends {
    allowedDates?: unknown;
    disabled?: unknown;
    modelValue?: unknown;
    month?: unknown;
    max?: unknown;
    min?: unknown;
    showAdjacentMonths?: unknown;
    year?: unknown;
    weekdays?: unknown;
    weeksInMonth?: unknown;
    firstDayOfWeek?: unknown;
    firstDayOfYear?: unknown;
    weekdayFormat?: unknown;
    color?: unknown;
    hideWeekdays?: unknown;
    multiple?: unknown;
    showWeek?: unknown;
    readonly?: unknown;
    transition?: unknown;
    reverseTransition?: unknown;
    events?: unknown;
    eventColor?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    allowedDates: unknown extends Defaults["allowedDates"] ? PropType<unknown[] | ((date: unknown) => boolean)> : {
        type: PropType<unknown extends Defaults["allowedDates"] ? unknown[] | ((date: unknown) => boolean) : unknown[] | ((date: unknown) => boolean) | Defaults["allowedDates"]>;
        default: unknown extends Defaults["allowedDates"] ? unknown[] | ((date: unknown) => boolean) : Defaults["allowedDates"] | NonNullable<unknown[] | ((date: unknown) => boolean)>;
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
    modelValue: unknown extends Defaults["modelValue"] ? PropType<unknown[]> : {
        type: PropType<unknown extends Defaults["modelValue"] ? unknown[] : unknown[] | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? unknown[] : unknown[] | Defaults["modelValue"];
    };
    month: unknown extends Defaults["month"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["month"] ? string | number : string | number | Defaults["month"]>;
        default: unknown extends Defaults["month"] ? string | number : Defaults["month"] | NonNullable<string | number>;
    };
    max: unknown extends Defaults["max"] ? PropType<unknown> : {
        type: PropType<unknown extends Defaults["max"] ? unknown : unknown>;
        default: unknown extends Defaults["max"] ? unknown : {} | Defaults["max"];
    };
    min: unknown extends Defaults["min"] ? PropType<unknown> : {
        type: PropType<unknown extends Defaults["min"] ? unknown : unknown>;
        default: unknown extends Defaults["min"] ? unknown : {} | Defaults["min"];
    };
    showAdjacentMonths: unknown extends Defaults["showAdjacentMonths"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["showAdjacentMonths"] ? boolean : boolean | Defaults["showAdjacentMonths"]>;
        default: unknown extends Defaults["showAdjacentMonths"] ? boolean : boolean | Defaults["showAdjacentMonths"];
    };
    year: unknown extends Defaults["year"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["year"] ? string | number : string | number | Defaults["year"]>;
        default: unknown extends Defaults["year"] ? string | number : Defaults["year"] | NonNullable<string | number>;
    };
    weekdays: unknown extends Defaults["weekdays"] ? {
        type: PropType<import("../../composables/calendar.js").CalendarWeekdays[]>;
        default: () => number[];
    } : Omit<{
        type: PropType<import("../../composables/calendar.js").CalendarWeekdays[]>;
        default: () => number[];
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["weekdays"] ? import("../../composables/calendar.js").CalendarWeekdays[] : import("../../composables/calendar.js").CalendarWeekdays[] | Defaults["weekdays"]>;
        default: unknown extends Defaults["weekdays"] ? import("../../composables/calendar.js").CalendarWeekdays[] : import("../../composables/calendar.js").CalendarWeekdays[] | Defaults["weekdays"];
    };
    weeksInMonth: unknown extends Defaults["weeksInMonth"] ? {
        type: PropType<"dynamic" | "static">;
        default: string;
    } : Omit<{
        type: PropType<"dynamic" | "static">;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["weeksInMonth"] ? "dynamic" | "static" : "dynamic" | "static" | Defaults["weeksInMonth"]>;
        default: unknown extends Defaults["weeksInMonth"] ? "dynamic" | "static" : Defaults["weeksInMonth"] | NonNullable<"dynamic" | "static">;
    };
    firstDayOfWeek: unknown extends Defaults["firstDayOfWeek"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["firstDayOfWeek"] ? string | number : string | number | Defaults["firstDayOfWeek"]>;
        default: unknown extends Defaults["firstDayOfWeek"] ? string | number : Defaults["firstDayOfWeek"] | NonNullable<string | number>;
    };
    firstDayOfYear: unknown extends Defaults["firstDayOfYear"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["firstDayOfYear"] ? string | number : string | number | Defaults["firstDayOfYear"]>;
        default: unknown extends Defaults["firstDayOfYear"] ? string | number : Defaults["firstDayOfYear"] | NonNullable<string | number>;
    };
    weekdayFormat: unknown extends Defaults["weekdayFormat"] ? PropType<"long" | "narrow" | "short" | undefined> : {
        type: PropType<unknown extends Defaults["weekdayFormat"] ? "long" | "narrow" | "short" | undefined : "long" | "narrow" | "short" | Defaults["weekdayFormat"] | undefined>;
        default: unknown extends Defaults["weekdayFormat"] ? "long" | "narrow" | "short" | undefined : Defaults["weekdayFormat"] | NonNullable<"long" | "narrow" | "short" | undefined>;
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    hideWeekdays: unknown extends Defaults["hideWeekdays"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideWeekdays"] ? boolean : boolean | Defaults["hideWeekdays"]>;
        default: unknown extends Defaults["hideWeekdays"] ? boolean : boolean | Defaults["hideWeekdays"];
    };
    multiple: unknown extends Defaults["multiple"] ? PropType<number | "range" | boolean | (string & {})> : {
        type: PropType<unknown extends Defaults["multiple"] ? number | "range" | boolean | (string & {}) : number | "range" | boolean | Defaults["multiple"] | (string & {})>;
        default: unknown extends Defaults["multiple"] ? number | "range" | boolean | (string & {}) : Defaults["multiple"] | NonNullable<number | "range" | boolean | (string & {})>;
    };
    showWeek: unknown extends Defaults["showWeek"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["showWeek"] ? boolean : boolean | Defaults["showWeek"]>;
        default: unknown extends Defaults["showWeek"] ? boolean : boolean | Defaults["showWeek"];
    };
    readonly: unknown extends Defaults["readonly"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"]>;
        default: unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"];
    };
    transition: unknown extends Defaults["transition"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["transition"] ? string : string | Defaults["transition"]>;
        default: unknown extends Defaults["transition"] ? string : string | Defaults["transition"];
    };
    reverseTransition: unknown extends Defaults["reverseTransition"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["reverseTransition"] ? string : string | Defaults["reverseTransition"]>;
        default: unknown extends Defaults["reverseTransition"] ? string : string | Defaults["reverseTransition"];
    };
    events: unknown extends Defaults["events"] ? {
        type: PropType<DatePickerEvents | null>;
        default: () => null;
    } : Omit<{
        type: PropType<DatePickerEvents | null>;
        default: () => null;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["events"] ? DatePickerEvents | null : Defaults["events"] | DatePickerEvents | null>;
        default: unknown extends Defaults["events"] ? DatePickerEvents | null : Defaults["events"] | NonNullable<DatePickerEvents | null>;
    };
    eventColor: unknown extends Defaults["eventColor"] ? {
        type: PropType<DatePickerEventColors>;
        default: () => null;
    } : Omit<{
        type: PropType<DatePickerEventColors>;
        default: () => null;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["eventColor"] ? DatePickerEventColors : Defaults["eventColor"] | DatePickerEventColors>;
        default: unknown extends Defaults["eventColor"] ? DatePickerEventColors : Defaults["eventColor"] | NonNullable<DatePickerEventColors>;
    };
};
export declare const VDatePickerMonth: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        disabled: boolean;
        showAdjacentMonths: boolean;
        weekdays: import("../../composables/calendar.js").CalendarWeekdays[];
        weeksInMonth: "dynamic" | "static";
        hideWeekdays: boolean;
        showWeek: boolean;
        readonly: boolean;
        transition: string;
        reverseTransition: string;
        events: DatePickerEvents | null;
        eventColor: DatePickerEventColors;
    } & {
        allowedDates?: unknown[] | ((date: unknown) => boolean) | undefined;
        month?: string | number | undefined;
        max?: unknown;
        min?: unknown;
        year?: string | number | undefined;
        firstDayOfWeek?: string | number | undefined;
        firstDayOfYear?: string | number | undefined;
        weekdayFormat?: "long" | "narrow" | "short" | undefined;
        color?: string | undefined;
        multiple?: number | "range" | boolean | (string & {}) | undefined;
    } & {
        "onUpdate:month"?: ((date: number) => any) | undefined;
        "onUpdate:year"?: ((date: number) => any) | undefined;
    }, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        "update:modelValue": (date: unknown) => true;
        "update:month": (date: number) => true;
        "update:year": (date: number) => true;
    }, "$children" | "modelValue" | "update:modelValue" | "v-slot:day" | "v-slots">, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        disabled: boolean;
        showAdjacentMonths: boolean;
        weekdays: import("../../composables/calendar.js").CalendarWeekdays[];
        weeksInMonth: "dynamic" | "static";
        firstDayOfWeek: string | number;
        firstDayOfYear: string | number;
        hideWeekdays: boolean;
        showWeek: boolean;
        readonly: boolean;
        transition: string;
        reverseTransition: string;
        events: DatePickerEvents | null;
        eventColor: DatePickerEventColors;
    }, true, {}, import("vue").SlotsType<Partial<{
        day: (arg: {
            props: {
                onClick: () => void;
            };
            item: any;
            i: number;
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
        disabled: boolean;
        showAdjacentMonths: boolean;
        weekdays: import("../../composables/calendar.js").CalendarWeekdays[];
        weeksInMonth: "dynamic" | "static";
        hideWeekdays: boolean;
        showWeek: boolean;
        readonly: boolean;
        transition: string;
        reverseTransition: string;
        events: DatePickerEvents | null;
        eventColor: DatePickerEventColors;
    } & {
        allowedDates?: unknown[] | ((date: unknown) => boolean) | undefined;
        month?: string | number | undefined;
        max?: unknown;
        min?: unknown;
        year?: string | number | undefined;
        firstDayOfWeek?: string | number | undefined;
        firstDayOfYear?: string | number | undefined;
        weekdayFormat?: "long" | "narrow" | "short" | undefined;
        color?: string | undefined;
        multiple?: number | "range" | boolean | (string & {}) | undefined;
    } & {
        "onUpdate:month"?: ((date: number) => any) | undefined;
        "onUpdate:year"?: ((date: number) => any) | undefined;
    }, {}, {}, {}, {}, {
        disabled: boolean;
        showAdjacentMonths: boolean;
        weekdays: import("../../composables/calendar.js").CalendarWeekdays[];
        weeksInMonth: "dynamic" | "static";
        firstDayOfWeek: string | number;
        firstDayOfYear: string | number;
        hideWeekdays: boolean;
        showWeek: boolean;
        readonly: boolean;
        transition: string;
        reverseTransition: string;
        events: DatePickerEvents | null;
        eventColor: DatePickerEventColors;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    disabled: boolean;
    showAdjacentMonths: boolean;
    weekdays: import("../../composables/calendar.js").CalendarWeekdays[];
    weeksInMonth: "dynamic" | "static";
    hideWeekdays: boolean;
    showWeek: boolean;
    readonly: boolean;
    transition: string;
    reverseTransition: string;
    events: DatePickerEvents | null;
    eventColor: DatePickerEventColors;
} & {
    allowedDates?: unknown[] | ((date: unknown) => boolean) | undefined;
    month?: string | number | undefined;
    max?: unknown;
    min?: unknown;
    year?: string | number | undefined;
    firstDayOfWeek?: string | number | undefined;
    firstDayOfYear?: string | number | undefined;
    weekdayFormat?: "long" | "narrow" | "short" | undefined;
    color?: string | undefined;
    multiple?: number | "range" | boolean | (string & {}) | undefined;
} & {
    "onUpdate:month"?: ((date: number) => any) | undefined;
    "onUpdate:year"?: ((date: number) => any) | undefined;
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
    "update:modelValue": (date: unknown) => true;
    "update:month": (date: number) => true;
    "update:year": (date: number) => true;
}, "$children" | "modelValue" | "update:modelValue" | "v-slot:day" | "v-slots">, string, {
    disabled: boolean;
    showAdjacentMonths: boolean;
    weekdays: import("../../composables/calendar.js").CalendarWeekdays[];
    weeksInMonth: "dynamic" | "static";
    firstDayOfWeek: string | number;
    firstDayOfYear: string | number;
    hideWeekdays: boolean;
    showWeek: boolean;
    readonly: boolean;
    transition: string;
    reverseTransition: string;
    events: DatePickerEvents | null;
    eventColor: DatePickerEventColors;
}, {}, string, import("vue").SlotsType<Partial<{
    day: (arg: {
        props: {
            onClick: () => void;
        };
        item: any;
        i: number;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <TModel>(props: {
    modelValue?: TModel | undefined;
    "onUpdate:modelValue"?: ((value: TModel) => void) | undefined;
}, slots: VDatePickerMonthSlots) => GenericProps<{
    modelValue?: TModel | undefined;
    "onUpdate:modelValue"?: ((value: TModel) => void) | undefined;
}, VDatePickerMonthSlots>) & import("../../util/index.js").FilterPropsOptions<{
    allowedDates: PropType<unknown[] | ((date: unknown) => boolean)>;
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    modelValue: PropType<unknown[]>;
    month: (NumberConstructor | StringConstructor)[];
    max: PropType<unknown>;
    min: PropType<unknown>;
    showAdjacentMonths: BooleanConstructor;
    year: (NumberConstructor | StringConstructor)[];
    weekdays: {
        type: PropType<import("../../composables/calendar.js").CalendarWeekdays[]>;
        default: () => number[];
    };
    weeksInMonth: {
        type: PropType<"dynamic" | "static">;
        default: string;
    };
    firstDayOfWeek: {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    firstDayOfYear: {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    weekdayFormat: PropType<"long" | "narrow" | "short" | undefined>;
    color: StringConstructor;
    hideWeekdays: BooleanConstructor;
    multiple: PropType<number | "range" | boolean | (string & {})>;
    showWeek: BooleanConstructor;
    readonly: BooleanConstructor;
    transition: {
        type: StringConstructor;
        default: string;
    };
    reverseTransition: {
        type: StringConstructor;
        default: string;
    };
    events: {
        type: PropType<DatePickerEvents | null>;
        default: () => null;
    };
    eventColor: {
        type: PropType<DatePickerEventColors>;
        default: () => null;
    };
}, import("vue").ExtractPropTypes<{
    allowedDates: PropType<unknown[] | ((date: unknown) => boolean)>;
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    modelValue: PropType<unknown[]>;
    month: (NumberConstructor | StringConstructor)[];
    max: PropType<unknown>;
    min: PropType<unknown>;
    showAdjacentMonths: BooleanConstructor;
    year: (NumberConstructor | StringConstructor)[];
    weekdays: {
        type: PropType<import("../../composables/calendar.js").CalendarWeekdays[]>;
        default: () => number[];
    };
    weeksInMonth: {
        type: PropType<"dynamic" | "static">;
        default: string;
    };
    firstDayOfWeek: {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    firstDayOfYear: {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    weekdayFormat: PropType<"long" | "narrow" | "short" | undefined>;
    color: StringConstructor;
    hideWeekdays: BooleanConstructor;
    multiple: PropType<number | "range" | boolean | (string & {})>;
    showWeek: BooleanConstructor;
    readonly: BooleanConstructor;
    transition: {
        type: StringConstructor;
        default: string;
    };
    reverseTransition: {
        type: StringConstructor;
        default: string;
    };
    events: {
        type: PropType<DatePickerEvents | null>;
        default: () => null;
    };
    eventColor: {
        type: PropType<DatePickerEventColors>;
        default: () => null;
    };
}>>;
export type VDatePickerMonth = InstanceType<typeof VDatePickerMonth>;
