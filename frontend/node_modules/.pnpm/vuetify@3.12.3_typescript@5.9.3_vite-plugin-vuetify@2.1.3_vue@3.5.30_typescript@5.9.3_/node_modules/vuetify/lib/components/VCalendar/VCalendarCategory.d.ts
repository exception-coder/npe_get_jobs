// Types
import type { PropType } from 'vue';
import type { CalendarCategory, CalendarCategoryTextFunction, CalendarTimestamp } from './types.js';
export declare const VCalendarCategory: {
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
            type: PropType<import("./types.js").CalendarFormatter>;
            default: null;
        };
        dayFormat: {
            type: PropType<import("./types.js").CalendarFormatter>;
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
        maxDays: {
            type: NumberConstructor;
            default: number;
        };
        intervalHeight: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
            validate: typeof import("./util/timestamp.js").validateNumber;
        };
        intervalWidth: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
            validate: typeof import("./util/timestamp.js").validateNumber;
        };
        intervalMinutes: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
            validate: typeof import("./util/timestamp.js").validateNumber;
        };
        firstInterval: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
            validate: typeof import("./util/timestamp.js").validateNumber;
        };
        firstTime: {
            type: PropType<import("./util/timestamp.js").VTime>;
            validate: typeof import("./util/timestamp.js").validateTime;
        };
        intervalCount: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
            validate: typeof import("./util/timestamp.js").validateNumber;
        };
        intervalFormat: {
            type: PropType<import("./types.js").CalendarFormatter>;
            default: null;
        };
        intervalStyle: {
            type: PropType<(interval: CalendarTimestamp) => import("vue").StyleValue>;
            default: null;
        };
        showIntervalLabel: {
            type: PropType<(interval: CalendarTimestamp) => boolean>;
            default: null;
        };
        categories: {
            type: PropType<string | CalendarCategory[]>;
            default: string;
        };
        categoryText: PropType<string | CalendarCategoryTextFunction>;
        categoryForInvalid: {
            type: StringConstructor;
            default: string;
        };
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
        dayFormatter: import("vue").ComputedRef<import("./types.js").CalendarFormatter>;
        weekdayFormatter: import("vue").ComputedRef<import("./types.js").CalendarFormatter>;
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
        getFormatter: (options: Intl.DateTimeFormatOptions) => import("./types.js").CalendarFormatter;
        updateTimes: () => void;
        scrollAreaRef: import("vue").ShallowRef<HTMLElement | undefined, HTMLElement | undefined>;
        parsedFirstInterval: import("vue").ComputedRef<number>;
        parsedIntervalMinutes: import("vue").ComputedRef<number>;
        parsedIntervalCount: import("vue").ComputedRef<number>;
        parsedIntervalHeight: import("vue").ComputedRef<number>;
        parsedFirstTime: import("vue").ComputedRef<number | false>;
        firstMinute: import("vue").ComputedRef<number>;
        bodyHeight: import("vue").ComputedRef<number>;
        days: import("vue").ComputedRef<CalendarTimestamp[]>;
        intervals: import("vue").ComputedRef<CalendarTimestamp[][]>;
        intervalFormatter: import("vue").ComputedRef<import("./types.js").CalendarFormatter>;
        showIntervalLabelDefault: (interval: CalendarTimestamp) => boolean;
        intervalStyleDefault: (_interval: CalendarTimestamp) => import("vue").StyleValue;
        getTimestampAtEvent: (e: Event, day: CalendarTimestamp) => CalendarTimestamp;
        getSlotScope: (timestamp: CalendarTimestamp) => import("./types.js").CalendarDayBodySlotScope;
        scrollToTime: (time: import("./util/timestamp.js").VTime) => boolean;
        minutesToPixels: (minutes: number) => number;
        timeToY: (time: CalendarTimestamp | import("./util/timestamp.js").VTime, targetDateOrClamp?: boolean | CalendarTimestamp) => number | false;
        timeDelta: (time: CalendarTimestamp | import("./util/timestamp.js").VTime, targetDate?: CalendarTimestamp | undefined) => number | false;
        parsedCategories: import("vue").ComputedRef<CalendarCategory[]>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        start: string | number | Date;
        weekdays: string | number[];
        weekdayFormat: import("./types.js").CalendarFormatter;
        dayFormat: import("./types.js").CalendarFormatter;
        type: "4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week";
        maxDays: number;
        intervalHeight: string | number;
        intervalWidth: string | number;
        intervalMinutes: string | number;
        firstInterval: string | number;
        intervalCount: string | number;
        intervalFormat: import("./types.js").CalendarFormatter;
        intervalStyle: (interval: CalendarTimestamp) => import("vue").StyleValue;
        showIntervalLabel: (interval: CalendarTimestamp) => boolean;
        categories: string | CalendarCategory[];
        categoryForInvalid: string;
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
            type: PropType<import("./types.js").CalendarFormatter>;
            default: null;
        };
        dayFormat: {
            type: PropType<import("./types.js").CalendarFormatter>;
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
        maxDays: {
            type: NumberConstructor;
            default: number;
        };
        intervalHeight: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
            validate: typeof import("./util/timestamp.js").validateNumber;
        };
        intervalWidth: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
            validate: typeof import("./util/timestamp.js").validateNumber;
        };
        intervalMinutes: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
            validate: typeof import("./util/timestamp.js").validateNumber;
        };
        firstInterval: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
            validate: typeof import("./util/timestamp.js").validateNumber;
        };
        firstTime: {
            type: PropType<import("./util/timestamp.js").VTime>;
            validate: typeof import("./util/timestamp.js").validateTime;
        };
        intervalCount: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
            validate: typeof import("./util/timestamp.js").validateNumber;
        };
        intervalFormat: {
            type: PropType<import("./types.js").CalendarFormatter>;
            default: null;
        };
        intervalStyle: {
            type: PropType<(interval: CalendarTimestamp) => import("vue").StyleValue>;
            default: null;
        };
        showIntervalLabel: {
            type: PropType<(interval: CalendarTimestamp) => boolean>;
            default: null;
        };
        categories: {
            type: PropType<string | CalendarCategory[]>;
            default: string;
        };
        categoryText: PropType<string | CalendarCategoryTextFunction>;
        categoryForInvalid: {
            type: StringConstructor;
            default: string;
        };
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
        dayFormatter: import("vue").ComputedRef<import("./types.js").CalendarFormatter>;
        weekdayFormatter: import("vue").ComputedRef<import("./types.js").CalendarFormatter>;
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
        getFormatter: (options: Intl.DateTimeFormatOptions) => import("./types.js").CalendarFormatter;
        updateTimes: () => void;
        scrollAreaRef: import("vue").ShallowRef<HTMLElement | undefined, HTMLElement | undefined>;
        parsedFirstInterval: import("vue").ComputedRef<number>;
        parsedIntervalMinutes: import("vue").ComputedRef<number>;
        parsedIntervalCount: import("vue").ComputedRef<number>;
        parsedIntervalHeight: import("vue").ComputedRef<number>;
        parsedFirstTime: import("vue").ComputedRef<number | false>;
        firstMinute: import("vue").ComputedRef<number>;
        bodyHeight: import("vue").ComputedRef<number>;
        days: import("vue").ComputedRef<CalendarTimestamp[]>;
        intervals: import("vue").ComputedRef<CalendarTimestamp[][]>;
        intervalFormatter: import("vue").ComputedRef<import("./types.js").CalendarFormatter>;
        showIntervalLabelDefault: (interval: CalendarTimestamp) => boolean;
        intervalStyleDefault: (_interval: CalendarTimestamp) => import("vue").StyleValue;
        getTimestampAtEvent: (e: Event, day: CalendarTimestamp) => CalendarTimestamp;
        getSlotScope: (timestamp: CalendarTimestamp) => import("./types.js").CalendarDayBodySlotScope;
        scrollToTime: (time: import("./util/timestamp.js").VTime) => boolean;
        minutesToPixels: (minutes: number) => number;
        timeToY: (time: CalendarTimestamp | import("./util/timestamp.js").VTime, targetDateOrClamp?: boolean | CalendarTimestamp) => number | false;
        timeDelta: (time: CalendarTimestamp | import("./util/timestamp.js").VTime, targetDate?: CalendarTimestamp | undefined) => number | false;
        parsedCategories: import("vue").ComputedRef<CalendarCategory[]>;
    }, {}, {}, {}, {
        start: string | number | Date;
        weekdays: string | number[];
        weekdayFormat: import("./types.js").CalendarFormatter;
        dayFormat: import("./types.js").CalendarFormatter;
        type: "4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week";
        maxDays: number;
        intervalHeight: string | number;
        intervalWidth: string | number;
        intervalMinutes: string | number;
        firstInterval: string | number;
        intervalCount: string | number;
        intervalFormat: import("./types.js").CalendarFormatter;
        intervalStyle: (interval: CalendarTimestamp) => import("vue").StyleValue;
        showIntervalLabel: (interval: CalendarTimestamp) => boolean;
        categories: string | CalendarCategory[];
        categoryForInvalid: string;
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
        type: PropType<import("./types.js").CalendarFormatter>;
        default: null;
    };
    dayFormat: {
        type: PropType<import("./types.js").CalendarFormatter>;
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
    maxDays: {
        type: NumberConstructor;
        default: number;
    };
    intervalHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validate: typeof import("./util/timestamp.js").validateNumber;
    };
    intervalWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validate: typeof import("./util/timestamp.js").validateNumber;
    };
    intervalMinutes: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validate: typeof import("./util/timestamp.js").validateNumber;
    };
    firstInterval: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validate: typeof import("./util/timestamp.js").validateNumber;
    };
    firstTime: {
        type: PropType<import("./util/timestamp.js").VTime>;
        validate: typeof import("./util/timestamp.js").validateTime;
    };
    intervalCount: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validate: typeof import("./util/timestamp.js").validateNumber;
    };
    intervalFormat: {
        type: PropType<import("./types.js").CalendarFormatter>;
        default: null;
    };
    intervalStyle: {
        type: PropType<(interval: CalendarTimestamp) => import("vue").StyleValue>;
        default: null;
    };
    showIntervalLabel: {
        type: PropType<(interval: CalendarTimestamp) => boolean>;
        default: null;
    };
    categories: {
        type: PropType<string | CalendarCategory[]>;
        default: string;
    };
    categoryText: PropType<string | CalendarCategoryTextFunction>;
    categoryForInvalid: {
        type: StringConstructor;
        default: string;
    };
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
    dayFormatter: import("vue").ComputedRef<import("./types.js").CalendarFormatter>;
    weekdayFormatter: import("vue").ComputedRef<import("./types.js").CalendarFormatter>;
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
    getFormatter: (options: Intl.DateTimeFormatOptions) => import("./types.js").CalendarFormatter;
    updateTimes: () => void;
    scrollAreaRef: import("vue").ShallowRef<HTMLElement | undefined, HTMLElement | undefined>;
    parsedFirstInterval: import("vue").ComputedRef<number>;
    parsedIntervalMinutes: import("vue").ComputedRef<number>;
    parsedIntervalCount: import("vue").ComputedRef<number>;
    parsedIntervalHeight: import("vue").ComputedRef<number>;
    parsedFirstTime: import("vue").ComputedRef<number | false>;
    firstMinute: import("vue").ComputedRef<number>;
    bodyHeight: import("vue").ComputedRef<number>;
    days: import("vue").ComputedRef<CalendarTimestamp[]>;
    intervals: import("vue").ComputedRef<CalendarTimestamp[][]>;
    intervalFormatter: import("vue").ComputedRef<import("./types.js").CalendarFormatter>;
    showIntervalLabelDefault: (interval: CalendarTimestamp) => boolean;
    intervalStyleDefault: (_interval: CalendarTimestamp) => import("vue").StyleValue;
    getTimestampAtEvent: (e: Event, day: CalendarTimestamp) => CalendarTimestamp;
    getSlotScope: (timestamp: CalendarTimestamp) => import("./types.js").CalendarDayBodySlotScope;
    scrollToTime: (time: import("./util/timestamp.js").VTime) => boolean;
    minutesToPixels: (minutes: number) => number;
    timeToY: (time: CalendarTimestamp | import("./util/timestamp.js").VTime, targetDateOrClamp?: boolean | CalendarTimestamp) => number | false;
    timeDelta: (time: CalendarTimestamp | import("./util/timestamp.js").VTime, targetDate?: CalendarTimestamp | undefined) => number | false;
    parsedCategories: import("vue").ComputedRef<CalendarCategory[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    start: string | number | Date;
    weekdays: string | number[];
    weekdayFormat: import("./types.js").CalendarFormatter;
    dayFormat: import("./types.js").CalendarFormatter;
    type: "4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week";
    maxDays: number;
    intervalHeight: string | number;
    intervalWidth: string | number;
    intervalMinutes: string | number;
    firstInterval: string | number;
    intervalCount: string | number;
    intervalFormat: import("./types.js").CalendarFormatter;
    intervalStyle: (interval: CalendarTimestamp) => import("vue").StyleValue;
    showIntervalLabel: (interval: CalendarTimestamp) => boolean;
    categories: string | CalendarCategory[];
    categoryForInvalid: string;
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
        type: PropType<import("./types.js").CalendarFormatter>;
        default: null;
    };
    dayFormat: {
        type: PropType<import("./types.js").CalendarFormatter>;
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
    maxDays: {
        type: NumberConstructor;
        default: number;
    };
    intervalHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validate: typeof import("./util/timestamp.js").validateNumber;
    };
    intervalWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validate: typeof import("./util/timestamp.js").validateNumber;
    };
    intervalMinutes: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validate: typeof import("./util/timestamp.js").validateNumber;
    };
    firstInterval: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validate: typeof import("./util/timestamp.js").validateNumber;
    };
    firstTime: {
        type: PropType<import("./util/timestamp.js").VTime>;
        validate: typeof import("./util/timestamp.js").validateTime;
    };
    intervalCount: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validate: typeof import("./util/timestamp.js").validateNumber;
    };
    intervalFormat: {
        type: PropType<import("./types.js").CalendarFormatter>;
        default: null;
    };
    intervalStyle: {
        type: PropType<(interval: CalendarTimestamp) => import("vue").StyleValue>;
        default: null;
    };
    showIntervalLabel: {
        type: PropType<(interval: CalendarTimestamp) => boolean>;
        default: null;
    };
    categories: {
        type: PropType<string | CalendarCategory[]>;
        default: string;
    };
    categoryText: PropType<string | CalendarCategoryTextFunction>;
    categoryForInvalid: {
        type: StringConstructor;
        default: string;
    };
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
        type: PropType<import("./types.js").CalendarFormatter>;
        default: null;
    };
    dayFormat: {
        type: PropType<import("./types.js").CalendarFormatter>;
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
    maxDays: {
        type: NumberConstructor;
        default: number;
    };
    intervalHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validate: typeof import("./util/timestamp.js").validateNumber;
    };
    intervalWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validate: typeof import("./util/timestamp.js").validateNumber;
    };
    intervalMinutes: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validate: typeof import("./util/timestamp.js").validateNumber;
    };
    firstInterval: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validate: typeof import("./util/timestamp.js").validateNumber;
    };
    firstTime: {
        type: PropType<import("./util/timestamp.js").VTime>;
        validate: typeof import("./util/timestamp.js").validateTime;
    };
    intervalCount: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validate: typeof import("./util/timestamp.js").validateNumber;
    };
    intervalFormat: {
        type: PropType<import("./types.js").CalendarFormatter>;
        default: null;
    };
    intervalStyle: {
        type: PropType<(interval: CalendarTimestamp) => import("vue").StyleValue>;
        default: null;
    };
    showIntervalLabel: {
        type: PropType<(interval: CalendarTimestamp) => boolean>;
        default: null;
    };
    categories: {
        type: PropType<string | CalendarCategory[]>;
        default: string;
    };
    categoryText: PropType<string | CalendarCategoryTextFunction>;
    categoryForInvalid: {
        type: StringConstructor;
        default: string;
    };
}>>;
export type VCalendarCategory = InstanceType<typeof VCalendarCategory>;
