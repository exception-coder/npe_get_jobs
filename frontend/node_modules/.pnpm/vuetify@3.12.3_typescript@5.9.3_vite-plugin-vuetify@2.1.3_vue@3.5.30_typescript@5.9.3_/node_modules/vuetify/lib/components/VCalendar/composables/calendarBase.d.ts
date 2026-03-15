import { validateTimestamp, validateWeekdays } from '../util/timestamp.js';
// Types
import type { PropType } from 'vue';
import type { CalendarFormatter, CalendarTimestamp } from '../types.js';
import type { ColorValue } from '../../../composables/color.js';
export declare const makeCalendarBaseProps: <Defaults extends {
    start?: unknown;
    end?: unknown;
    weekdays?: unknown;
    firstDayOfWeek?: unknown;
    firstDayOfYear?: unknown;
    weekdayFormat?: unknown;
    dayFormat?: unknown;
    locale?: unknown;
    now?: unknown;
    type?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    start: unknown extends Defaults["start"] ? {
        type: (DateConstructor | NumberConstructor | StringConstructor)[];
        validate: typeof validateTimestamp;
        default: () => string;
    } : Omit<{
        type: (DateConstructor | NumberConstructor | StringConstructor)[];
        validate: typeof validateTimestamp;
        default: () => string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["start"] ? string | number | Date : string | number | Date | Defaults["start"]>;
        default: unknown extends Defaults["start"] ? string | number | Date : Defaults["start"] | NonNullable<string | number | Date>;
    };
    end: unknown extends Defaults["end"] ? {
        type: (DateConstructor | NumberConstructor | StringConstructor)[];
        validate: typeof validateTimestamp;
    } : Omit<{
        type: (DateConstructor | NumberConstructor | StringConstructor)[];
        validate: typeof validateTimestamp;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["end"] ? string | number | Date : string | number | Date | Defaults["end"]>;
        default: unknown extends Defaults["end"] ? string | number | Date : Defaults["end"] | NonNullable<string | number | Date>;
    };
    weekdays: unknown extends Defaults["weekdays"] ? {
        type: PropType<string | number[]>;
        default: () => number[];
        validate: typeof validateWeekdays;
    } : Omit<{
        type: PropType<string | number[]>;
        default: () => number[];
        validate: typeof validateWeekdays;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["weekdays"] ? string | number[] : string | number[] | Defaults["weekdays"]>;
        default: unknown extends Defaults["weekdays"] ? string | number[] : Defaults["weekdays"] | NonNullable<string | number[]>;
    };
    firstDayOfWeek: unknown extends Defaults["firstDayOfWeek"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["firstDayOfWeek"] ? string | number : string | number | Defaults["firstDayOfWeek"]>;
        default: unknown extends Defaults["firstDayOfWeek"] ? string | number : Defaults["firstDayOfWeek"] | NonNullable<string | number>;
    };
    firstDayOfYear: unknown extends Defaults["firstDayOfYear"] ? (NumberConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["firstDayOfYear"] ? string | number : string | number | Defaults["firstDayOfYear"]>;
        default: unknown extends Defaults["firstDayOfYear"] ? string | number : Defaults["firstDayOfYear"] | NonNullable<string | number>;
    };
    weekdayFormat: unknown extends Defaults["weekdayFormat"] ? {
        type: PropType<CalendarFormatter>;
        default: null;
    } : Omit<{
        type: PropType<CalendarFormatter>;
        default: null;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["weekdayFormat"] ? CalendarFormatter : CalendarFormatter | Defaults["weekdayFormat"]>;
        default: unknown extends Defaults["weekdayFormat"] ? CalendarFormatter : CalendarFormatter | Defaults["weekdayFormat"];
    };
    dayFormat: unknown extends Defaults["dayFormat"] ? {
        type: PropType<CalendarFormatter>;
        default: null;
    } : Omit<{
        type: PropType<CalendarFormatter>;
        default: null;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["dayFormat"] ? CalendarFormatter : CalendarFormatter | Defaults["dayFormat"]>;
        default: unknown extends Defaults["dayFormat"] ? CalendarFormatter : CalendarFormatter | Defaults["dayFormat"];
    };
    locale: unknown extends Defaults["locale"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["locale"] ? string : string | Defaults["locale"]>;
        default: unknown extends Defaults["locale"] ? string : string | Defaults["locale"];
    };
    now: unknown extends Defaults["now"] ? {
        type: StringConstructor;
        validator: typeof validateTimestamp;
    } : Omit<{
        type: StringConstructor;
        validator: typeof validateTimestamp;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["now"] ? string : string | Defaults["now"]>;
        default: unknown extends Defaults["now"] ? string : string | Defaults["now"];
    };
    type: unknown extends Defaults["type"] ? {
        type: PropType<"4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week">;
        default: string;
    } : Omit<{
        type: PropType<"4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week">;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["type"] ? "4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week" : "4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week" | Defaults["type"]>;
        default: unknown extends Defaults["type"] ? "4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week" : Defaults["type"] | NonNullable<"4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week">;
    };
};
export interface CalendarBaseProps {
    modelValue?: string | number | Date;
    categoryDays?: string | number;
    start: string | number | Date;
    end: string | number | Date | undefined;
    weekdays: string | number[];
    firstDayOfWeek: number | string | undefined;
    firstDayOfYear: number | string | undefined;
    weekdayFormat: CalendarFormatter | string | undefined;
    dayFormat: CalendarFormatter | string | undefined;
    locale: string | undefined;
    now: string | undefined;
    type: 'month' | 'week' | 'day' | '4day' | 'custom-weekly' | 'custom-daily' | 'category';
}
export declare function useCalendarBase(props: CalendarBaseProps): {
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
        messages: import("vue").Ref<import("../../../types.js").LocaleMessages, import("../../../types.js").LocaleMessages>;
        current: import("vue").Ref<string, string>;
        fallback: import("vue").Ref<string, string>;
        t: (key: string, ...params: unknown[]) => string;
        n: (value: number) => string;
        provide: (props: import("../../../types.js").LocaleOptions) => import("../../../types.js").LocaleInstance;
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
    days: import("vue").ComputedRef<CalendarTimestamp[]>;
    dayFormatter: import("vue").ComputedRef<CalendarFormatter>;
    weekdayFormatter: import("vue").ComputedRef<CalendarFormatter>;
    getColorProps: (colors: {
        background?: ColorValue;
        text?: ColorValue;
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
};
