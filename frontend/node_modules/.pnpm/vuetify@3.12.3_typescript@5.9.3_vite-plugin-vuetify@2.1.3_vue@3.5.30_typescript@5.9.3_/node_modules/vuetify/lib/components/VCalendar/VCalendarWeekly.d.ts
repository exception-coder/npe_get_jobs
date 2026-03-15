import { validateNumber } from './util/timestamp.js';
// Types
import type { PropType } from 'vue';
import type { CalendarFormatter, CalendarTimestamp } from './types.js';
export declare const VCalendarWeekly: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        start: {
            type: (DateConstructor | NumberConstructor | StringConstructor)[];
            validate: typeof import("./util/timestamp.js").validateTimestamp;
            default: () => string;
        };
        end: {
            type: (DateConstructor | NumberConstructor | StringConstructor)[];
            validate: typeof import("./util/timestamp.js").validateTimestamp;
        };
        weekdays: {
            type: PropType<string | number[]>;
            default: () => number[];
            validate: typeof import("./util/timestamp.js").validateWeekdays;
        };
        firstDayOfWeek: (NumberConstructor | StringConstructor)[];
        firstDayOfYear: (NumberConstructor | StringConstructor)[];
        weekdayFormat: {
            type: PropType<CalendarFormatter>;
            default: null;
        };
        dayFormat: {
            type: PropType<CalendarFormatter>;
            default: null;
        };
        locale: StringConstructor;
        now: {
            type: StringConstructor;
            validator: typeof import("./util/timestamp.js").validateTimestamp;
        };
        type: {
            type: PropType<"4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week">;
            default: string;
        };
        minWeeks: {
            validate: typeof validateNumber;
            default: number;
        };
        monthFormat: PropType<CalendarFormatter>;
        showWeek: BooleanConstructor;
        color: StringConstructor;
        shortWeekdays: {
            type: BooleanConstructor;
            default: boolean;
        };
        showMonthOnFirst: {
            type: BooleanConstructor;
            default: boolean;
        };
        shortMonths: {
            type: BooleanConstructor;
            default: boolean;
        };
        hideHeader: BooleanConstructor;
    }>>, {
        times: {
            now: {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                weekday: number;
                hour: number;
                minute: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
                category?: string | {
                    [x: string]: any;
                    name?: string | undefined;
                    categoryName?: string | undefined;
                } | undefined;
            };
            today: {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                weekday: number;
                hour: number;
                minute: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
                category?: string | {
                    [x: string]: any;
                    name?: string | undefined;
                    categoryName?: string | undefined;
                } | undefined;
            };
        };
        locale: {
            name: string;
            decimalSeparator: import("vue").ShallowRef<string>;
            messages: import("vue").Ref<import("../../types.js").LocaleMessages, import("../../types.js").LocaleMessages>;
            current: import("vue").Ref<string, string>;
            fallback: import("vue").Ref<string, string>;
            t: (key: string, ...params: unknown[]) => string;
            n: (value: number) => string;
            provide: (props: import("../../types.js").LocaleOptions) => import("../../types.js").LocaleInstance;
            isRtl: import("vue").Ref<boolean, boolean>;
            rtl: import("vue").Ref<Record<string, boolean>, Record<string, boolean>>;
            rtlClasses: import("vue").Ref<string, string>;
        };
        parsedValue: import("vue").ComputedRef<CalendarTimestamp>;
        parsedWeekdays: import("vue").ComputedRef<number[]>;
        effectiveWeekdays: import("vue").ComputedRef<number[]>;
        weekdaySkips: import("vue").ComputedRef<number[]>;
        parsedStart: import("vue").ComputedRef<CalendarTimestamp>;
        parsedEnd: import("vue").ComputedRef<CalendarTimestamp>;
        dayFormatter: import("vue").ComputedRef<CalendarFormatter>;
        weekdayFormatter: import("vue").ComputedRef<CalendarFormatter>;
        getColorProps: (colors: {
            background?: import("../../composables/color.js").ColorValue;
            text?: import("../../composables/color.js").ColorValue;
        }) => {
            class: string[];
            style: import("vue").CSSProperties;
        };
        getRelativeClasses: (timestamp: CalendarTimestamp, outside?: boolean) => {
            "v-present": boolean;
            "v-past": boolean;
            "v-future": boolean;
            "v-outside": boolean;
        };
        getWeekNumber: (timestamp: CalendarTimestamp) => number;
        getStartOfWeek: (timestamp: CalendarTimestamp) => CalendarTimestamp;
        getEndOfWeek: (timestamp: CalendarTimestamp) => CalendarTimestamp;
        getFormatter: (options: Intl.DateTimeFormatOptions) => CalendarFormatter;
        updateTimes: () => void;
        days: import("vue").ComputedRef<CalendarTimestamp[]>;
        todayWeek: import("vue").ComputedRef<CalendarTimestamp[]>;
        monthFormatter: import("vue").ComputedRef<CalendarFormatter>;
        isOutside: (day: CalendarTimestamp) => boolean;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        start: string | number | Date;
        weekdays: string | number[];
        weekdayFormat: CalendarFormatter;
        dayFormat: CalendarFormatter;
        type: "4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week";
        minWeeks: number;
        showWeek: boolean;
        shortWeekdays: boolean;
        showMonthOnFirst: boolean;
        shortMonths: boolean;
        hideHeader: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        start: {
            type: (DateConstructor | NumberConstructor | StringConstructor)[];
            validate: typeof import("./util/timestamp.js").validateTimestamp;
            default: () => string;
        };
        end: {
            type: (DateConstructor | NumberConstructor | StringConstructor)[];
            validate: typeof import("./util/timestamp.js").validateTimestamp;
        };
        weekdays: {
            type: PropType<string | number[]>;
            default: () => number[];
            validate: typeof import("./util/timestamp.js").validateWeekdays;
        };
        firstDayOfWeek: (NumberConstructor | StringConstructor)[];
        firstDayOfYear: (NumberConstructor | StringConstructor)[];
        weekdayFormat: {
            type: PropType<CalendarFormatter>;
            default: null;
        };
        dayFormat: {
            type: PropType<CalendarFormatter>;
            default: null;
        };
        locale: StringConstructor;
        now: {
            type: StringConstructor;
            validator: typeof import("./util/timestamp.js").validateTimestamp;
        };
        type: {
            type: PropType<"4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week">;
            default: string;
        };
        minWeeks: {
            validate: typeof validateNumber;
            default: number;
        };
        monthFormat: PropType<CalendarFormatter>;
        showWeek: BooleanConstructor;
        color: StringConstructor;
        shortWeekdays: {
            type: BooleanConstructor;
            default: boolean;
        };
        showMonthOnFirst: {
            type: BooleanConstructor;
            default: boolean;
        };
        shortMonths: {
            type: BooleanConstructor;
            default: boolean;
        };
        hideHeader: BooleanConstructor;
    }>>, {
        times: {
            now: {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                weekday: number;
                hour: number;
                minute: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
                category?: string | {
                    [x: string]: any;
                    name?: string | undefined;
                    categoryName?: string | undefined;
                } | undefined;
            };
            today: {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                weekday: number;
                hour: number;
                minute: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
                category?: string | {
                    [x: string]: any;
                    name?: string | undefined;
                    categoryName?: string | undefined;
                } | undefined;
            };
        };
        locale: {
            name: string;
            decimalSeparator: import("vue").ShallowRef<string>;
            messages: import("vue").Ref<import("../../types.js").LocaleMessages, import("../../types.js").LocaleMessages>;
            current: import("vue").Ref<string, string>;
            fallback: import("vue").Ref<string, string>;
            t: (key: string, ...params: unknown[]) => string;
            n: (value: number) => string;
            provide: (props: import("../../types.js").LocaleOptions) => import("../../types.js").LocaleInstance;
            isRtl: import("vue").Ref<boolean, boolean>;
            rtl: import("vue").Ref<Record<string, boolean>, Record<string, boolean>>;
            rtlClasses: import("vue").Ref<string, string>;
        };
        parsedValue: import("vue").ComputedRef<CalendarTimestamp>;
        parsedWeekdays: import("vue").ComputedRef<number[]>;
        effectiveWeekdays: import("vue").ComputedRef<number[]>;
        weekdaySkips: import("vue").ComputedRef<number[]>;
        parsedStart: import("vue").ComputedRef<CalendarTimestamp>;
        parsedEnd: import("vue").ComputedRef<CalendarTimestamp>;
        dayFormatter: import("vue").ComputedRef<CalendarFormatter>;
        weekdayFormatter: import("vue").ComputedRef<CalendarFormatter>;
        getColorProps: (colors: {
            background?: import("../../composables/color.js").ColorValue;
            text?: import("../../composables/color.js").ColorValue;
        }) => {
            class: string[];
            style: import("vue").CSSProperties;
        };
        getRelativeClasses: (timestamp: CalendarTimestamp, outside?: boolean) => {
            "v-present": boolean;
            "v-past": boolean;
            "v-future": boolean;
            "v-outside": boolean;
        };
        getWeekNumber: (timestamp: CalendarTimestamp) => number;
        getStartOfWeek: (timestamp: CalendarTimestamp) => CalendarTimestamp;
        getEndOfWeek: (timestamp: CalendarTimestamp) => CalendarTimestamp;
        getFormatter: (options: Intl.DateTimeFormatOptions) => CalendarFormatter;
        updateTimes: () => void;
        days: import("vue").ComputedRef<CalendarTimestamp[]>;
        todayWeek: import("vue").ComputedRef<CalendarTimestamp[]>;
        monthFormatter: import("vue").ComputedRef<CalendarFormatter>;
        isOutside: (day: CalendarTimestamp) => boolean;
    }, {}, {}, {}, {
        start: string | number | Date;
        weekdays: string | number[];
        weekdayFormat: CalendarFormatter;
        dayFormat: CalendarFormatter;
        type: "4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week";
        minWeeks: number;
        showWeek: boolean;
        shortWeekdays: boolean;
        showMonthOnFirst: boolean;
        shortMonths: boolean;
        hideHeader: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    start: {
        type: (DateConstructor | NumberConstructor | StringConstructor)[];
        validate: typeof import("./util/timestamp.js").validateTimestamp;
        default: () => string;
    };
    end: {
        type: (DateConstructor | NumberConstructor | StringConstructor)[];
        validate: typeof import("./util/timestamp.js").validateTimestamp;
    };
    weekdays: {
        type: PropType<string | number[]>;
        default: () => number[];
        validate: typeof import("./util/timestamp.js").validateWeekdays;
    };
    firstDayOfWeek: (NumberConstructor | StringConstructor)[];
    firstDayOfYear: (NumberConstructor | StringConstructor)[];
    weekdayFormat: {
        type: PropType<CalendarFormatter>;
        default: null;
    };
    dayFormat: {
        type: PropType<CalendarFormatter>;
        default: null;
    };
    locale: StringConstructor;
    now: {
        type: StringConstructor;
        validator: typeof import("./util/timestamp.js").validateTimestamp;
    };
    type: {
        type: PropType<"4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week">;
        default: string;
    };
    minWeeks: {
        validate: typeof validateNumber;
        default: number;
    };
    monthFormat: PropType<CalendarFormatter>;
    showWeek: BooleanConstructor;
    color: StringConstructor;
    shortWeekdays: {
        type: BooleanConstructor;
        default: boolean;
    };
    showMonthOnFirst: {
        type: BooleanConstructor;
        default: boolean;
    };
    shortMonths: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideHeader: BooleanConstructor;
}>>, {
    times: {
        now: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            weekday: number;
            hour: number;
            minute: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            category?: string | {
                [x: string]: any;
                name?: string | undefined;
                categoryName?: string | undefined;
            } | undefined;
        };
        today: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            weekday: number;
            hour: number;
            minute: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            category?: string | {
                [x: string]: any;
                name?: string | undefined;
                categoryName?: string | undefined;
            } | undefined;
        };
    };
    locale: {
        name: string;
        decimalSeparator: import("vue").ShallowRef<string>;
        messages: import("vue").Ref<import("../../types.js").LocaleMessages, import("../../types.js").LocaleMessages>;
        current: import("vue").Ref<string, string>;
        fallback: import("vue").Ref<string, string>;
        t: (key: string, ...params: unknown[]) => string;
        n: (value: number) => string;
        provide: (props: import("../../types.js").LocaleOptions) => import("../../types.js").LocaleInstance;
        isRtl: import("vue").Ref<boolean, boolean>;
        rtl: import("vue").Ref<Record<string, boolean>, Record<string, boolean>>;
        rtlClasses: import("vue").Ref<string, string>;
    };
    parsedValue: import("vue").ComputedRef<CalendarTimestamp>;
    parsedWeekdays: import("vue").ComputedRef<number[]>;
    effectiveWeekdays: import("vue").ComputedRef<number[]>;
    weekdaySkips: import("vue").ComputedRef<number[]>;
    parsedStart: import("vue").ComputedRef<CalendarTimestamp>;
    parsedEnd: import("vue").ComputedRef<CalendarTimestamp>;
    dayFormatter: import("vue").ComputedRef<CalendarFormatter>;
    weekdayFormatter: import("vue").ComputedRef<CalendarFormatter>;
    getColorProps: (colors: {
        background?: import("../../composables/color.js").ColorValue;
        text?: import("../../composables/color.js").ColorValue;
    }) => {
        class: string[];
        style: import("vue").CSSProperties;
    };
    getRelativeClasses: (timestamp: CalendarTimestamp, outside?: boolean) => {
        "v-present": boolean;
        "v-past": boolean;
        "v-future": boolean;
        "v-outside": boolean;
    };
    getWeekNumber: (timestamp: CalendarTimestamp) => number;
    getStartOfWeek: (timestamp: CalendarTimestamp) => CalendarTimestamp;
    getEndOfWeek: (timestamp: CalendarTimestamp) => CalendarTimestamp;
    getFormatter: (options: Intl.DateTimeFormatOptions) => CalendarFormatter;
    updateTimes: () => void;
    days: import("vue").ComputedRef<CalendarTimestamp[]>;
    todayWeek: import("vue").ComputedRef<CalendarTimestamp[]>;
    monthFormatter: import("vue").ComputedRef<CalendarFormatter>;
    isOutside: (day: CalendarTimestamp) => boolean;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    start: string | number | Date;
    weekdays: string | number[];
    weekdayFormat: CalendarFormatter;
    dayFormat: CalendarFormatter;
    type: "4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week";
    minWeeks: number;
    showWeek: boolean;
    shortWeekdays: boolean;
    showMonthOnFirst: boolean;
    shortMonths: boolean;
    hideHeader: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    start: {
        type: (DateConstructor | NumberConstructor | StringConstructor)[];
        validate: typeof import("./util/timestamp.js").validateTimestamp;
        default: () => string;
    };
    end: {
        type: (DateConstructor | NumberConstructor | StringConstructor)[];
        validate: typeof import("./util/timestamp.js").validateTimestamp;
    };
    weekdays: {
        type: PropType<string | number[]>;
        default: () => number[];
        validate: typeof import("./util/timestamp.js").validateWeekdays;
    };
    firstDayOfWeek: (NumberConstructor | StringConstructor)[];
    firstDayOfYear: (NumberConstructor | StringConstructor)[];
    weekdayFormat: {
        type: PropType<CalendarFormatter>;
        default: null;
    };
    dayFormat: {
        type: PropType<CalendarFormatter>;
        default: null;
    };
    locale: StringConstructor;
    now: {
        type: StringConstructor;
        validator: typeof import("./util/timestamp.js").validateTimestamp;
    };
    type: {
        type: PropType<"4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week">;
        default: string;
    };
    minWeeks: {
        validate: typeof validateNumber;
        default: number;
    };
    monthFormat: PropType<CalendarFormatter>;
    showWeek: BooleanConstructor;
    color: StringConstructor;
    shortWeekdays: {
        type: BooleanConstructor;
        default: boolean;
    };
    showMonthOnFirst: {
        type: BooleanConstructor;
        default: boolean;
    };
    shortMonths: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideHeader: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    start: {
        type: (DateConstructor | NumberConstructor | StringConstructor)[];
        validate: typeof import("./util/timestamp.js").validateTimestamp;
        default: () => string;
    };
    end: {
        type: (DateConstructor | NumberConstructor | StringConstructor)[];
        validate: typeof import("./util/timestamp.js").validateTimestamp;
    };
    weekdays: {
        type: PropType<string | number[]>;
        default: () => number[];
        validate: typeof import("./util/timestamp.js").validateWeekdays;
    };
    firstDayOfWeek: (NumberConstructor | StringConstructor)[];
    firstDayOfYear: (NumberConstructor | StringConstructor)[];
    weekdayFormat: {
        type: PropType<CalendarFormatter>;
        default: null;
    };
    dayFormat: {
        type: PropType<CalendarFormatter>;
        default: null;
    };
    locale: StringConstructor;
    now: {
        type: StringConstructor;
        validator: typeof import("./util/timestamp.js").validateTimestamp;
    };
    type: {
        type: PropType<"4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week">;
        default: string;
    };
    minWeeks: {
        validate: typeof validateNumber;
        default: number;
    };
    monthFormat: PropType<CalendarFormatter>;
    showWeek: BooleanConstructor;
    color: StringConstructor;
    shortWeekdays: {
        type: BooleanConstructor;
        default: boolean;
    };
    showMonthOnFirst: {
        type: BooleanConstructor;
        default: boolean;
    };
    shortMonths: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideHeader: BooleanConstructor;
}>>;
export type VCalendarWeekly = InstanceType<typeof VCalendarWeekly>;
