// Styles

// Types
import type { PropType } from 'vue';
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
    transition?: unknown;
    reverseTransition?: unknown;
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
};
export declare const VDatePickerMonth: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        disabled: boolean;
        showAdjacentMonths: boolean;
        weekdays: import("../../composables/calendar.js").CalendarWeekdays[];
        weeksInMonth: "dynamic" | "static";
        hideWeekdays: boolean;
        showWeek: boolean;
        transition: string;
        reverseTransition: string;
    } & {
        allowedDates?: unknown[] | ((date: unknown) => boolean) | undefined;
        modelValue?: unknown[] | undefined;
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
        $children?: {
            day?: ((arg: {
                props: {
                    onClick: () => void;
                };
                item: any;
                i: number;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | {} | import("vue").VNodeChild;
        "v-slots"?: {
            day?: false | ((arg: {
                props: {
                    onClick: () => void;
                };
                item: any;
                i: number;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:day"?: false | ((arg: {
            props: {
                onClick: () => void;
            };
            item: any;
            i: number;
        }) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((date: unknown) => any) | undefined;
        "onUpdate:month"?: ((date: number) => any) | undefined;
        "onUpdate:year"?: ((date: number) => any) | undefined;
    }, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        "update:modelValue": (date: unknown) => true;
        "update:month": (date: number) => true;
        "update:year": (date: number) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
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
        transition: string;
        reverseTransition: string;
    } & {
        allowedDates?: unknown[] | ((date: unknown) => boolean) | undefined;
        modelValue?: unknown[] | undefined;
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
        $children?: {
            day?: ((arg: {
                props: {
                    onClick: () => void;
                };
                item: any;
                i: number;
            }) => import("vue").VNodeChild) | undefined;
        } | {
            $stable?: boolean | undefined;
        } | {} | import("vue").VNodeChild;
        "v-slots"?: {
            day?: false | ((arg: {
                props: {
                    onClick: () => void;
                };
                item: any;
                i: number;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:day"?: false | ((arg: {
            props: {
                onClick: () => void;
            };
            item: any;
            i: number;
        }) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((date: unknown) => any) | undefined;
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
        transition: string;
        reverseTransition: string;
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
    transition: string;
    reverseTransition: string;
} & {
    allowedDates?: unknown[] | ((date: unknown) => boolean) | undefined;
    modelValue?: unknown[] | undefined;
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
    $children?: {
        day?: ((arg: {
            props: {
                onClick: () => void;
            };
            item: any;
            i: number;
        }) => import("vue").VNodeChild) | undefined;
    } | {
        $stable?: boolean | undefined;
    } | {} | import("vue").VNodeChild;
    "v-slots"?: {
        day?: false | ((arg: {
            props: {
                onClick: () => void;
            };
            item: any;
            i: number;
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:day"?: false | ((arg: {
        props: {
            onClick: () => void;
        };
        item: any;
        i: number;
    }) => import("vue").VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((date: unknown) => any) | undefined;
    "onUpdate:month"?: ((date: number) => any) | undefined;
    "onUpdate:year"?: ((date: number) => any) | undefined;
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (date: unknown) => true;
    "update:month": (date: number) => true;
    "update:year": (date: number) => true;
}, string, {
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
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
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
    transition: {
        type: StringConstructor;
        default: string;
    };
    reverseTransition: {
        type: StringConstructor;
        default: string;
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
    transition: {
        type: StringConstructor;
        default: string;
    };
    reverseTransition: {
        type: StringConstructor;
        default: string;
    };
}>>;
export type VDatePickerMonth = InstanceType<typeof VDatePickerMonth>;
