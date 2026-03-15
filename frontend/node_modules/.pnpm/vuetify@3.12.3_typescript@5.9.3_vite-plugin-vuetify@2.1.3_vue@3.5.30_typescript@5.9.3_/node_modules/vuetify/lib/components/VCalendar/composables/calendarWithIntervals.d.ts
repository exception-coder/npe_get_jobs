import { validateNumber, validateTime } from '../util/timestamp.js';
// Types
import type { PropType, StyleValue } from 'vue';
import type { CalendarBaseProps } from './calendarBase.js';
import type { CalendarDayBodySlotScope, CalendarFormatter, CalendarTimestamp } from '../types.js';
import type { VTime } from '../util/timestamp.js';
export declare const makeCalendarWithIntervalsProps: <Defaults extends {
    maxDays?: unknown;
    intervalHeight?: unknown;
    intervalWidth?: unknown;
    intervalMinutes?: unknown;
    firstInterval?: unknown;
    firstTime?: unknown;
    intervalCount?: unknown;
    intervalFormat?: unknown;
    intervalStyle?: unknown;
    showIntervalLabel?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    maxDays: unknown extends Defaults["maxDays"] ? {
        type: NumberConstructor;
        default: number;
    } : Omit<{
        type: NumberConstructor;
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["maxDays"] ? number : number | Defaults["maxDays"]>;
        default: unknown extends Defaults["maxDays"] ? number : number | Defaults["maxDays"];
    };
    intervalHeight: unknown extends Defaults["intervalHeight"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validate: typeof validateNumber;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validate: typeof validateNumber;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["intervalHeight"] ? string | number : string | number | Defaults["intervalHeight"]>;
        default: unknown extends Defaults["intervalHeight"] ? string | number : Defaults["intervalHeight"] | NonNullable<string | number>;
    };
    intervalWidth: unknown extends Defaults["intervalWidth"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validate: typeof validateNumber;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validate: typeof validateNumber;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["intervalWidth"] ? string | number : string | number | Defaults["intervalWidth"]>;
        default: unknown extends Defaults["intervalWidth"] ? string | number : Defaults["intervalWidth"] | NonNullable<string | number>;
    };
    intervalMinutes: unknown extends Defaults["intervalMinutes"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validate: typeof validateNumber;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validate: typeof validateNumber;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["intervalMinutes"] ? string | number : string | number | Defaults["intervalMinutes"]>;
        default: unknown extends Defaults["intervalMinutes"] ? string | number : Defaults["intervalMinutes"] | NonNullable<string | number>;
    };
    firstInterval: unknown extends Defaults["firstInterval"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validate: typeof validateNumber;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validate: typeof validateNumber;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["firstInterval"] ? string | number : string | number | Defaults["firstInterval"]>;
        default: unknown extends Defaults["firstInterval"] ? string | number : Defaults["firstInterval"] | NonNullable<string | number>;
    };
    firstTime: unknown extends Defaults["firstTime"] ? {
        type: PropType<VTime>;
        validate: typeof validateTime;
    } : Omit<{
        type: PropType<VTime>;
        validate: typeof validateTime;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["firstTime"] ? VTime : Defaults["firstTime"] | VTime>;
        default: unknown extends Defaults["firstTime"] ? VTime : Defaults["firstTime"] | NonNullable<VTime>;
    };
    intervalCount: unknown extends Defaults["intervalCount"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validate: typeof validateNumber;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validate: typeof validateNumber;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["intervalCount"] ? string | number : string | number | Defaults["intervalCount"]>;
        default: unknown extends Defaults["intervalCount"] ? string | number : Defaults["intervalCount"] | NonNullable<string | number>;
    };
    intervalFormat: unknown extends Defaults["intervalFormat"] ? {
        type: PropType<CalendarFormatter>;
        default: null;
    } : Omit<{
        type: PropType<CalendarFormatter>;
        default: null;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["intervalFormat"] ? CalendarFormatter : CalendarFormatter | Defaults["intervalFormat"]>;
        default: unknown extends Defaults["intervalFormat"] ? CalendarFormatter : CalendarFormatter | Defaults["intervalFormat"];
    };
    intervalStyle: unknown extends Defaults["intervalStyle"] ? {
        type: PropType<(interval: CalendarTimestamp) => StyleValue>;
        default: null;
    } : Omit<{
        type: PropType<(interval: CalendarTimestamp) => StyleValue>;
        default: null;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["intervalStyle"] ? (interval: CalendarTimestamp) => StyleValue : ((interval: CalendarTimestamp) => StyleValue) | Defaults["intervalStyle"]>;
        default: unknown extends Defaults["intervalStyle"] ? (interval: CalendarTimestamp) => StyleValue : ((interval: CalendarTimestamp) => StyleValue) | Defaults["intervalStyle"];
    };
    showIntervalLabel: unknown extends Defaults["showIntervalLabel"] ? {
        type: PropType<(interval: CalendarTimestamp) => boolean>;
        default: null;
    } : Omit<{
        type: PropType<(interval: CalendarTimestamp) => boolean>;
        default: null;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["showIntervalLabel"] ? (interval: CalendarTimestamp) => boolean : ((interval: CalendarTimestamp) => boolean) | Defaults["showIntervalLabel"]>;
        default: unknown extends Defaults["showIntervalLabel"] ? (interval: CalendarTimestamp) => boolean : ((interval: CalendarTimestamp) => boolean) | Defaults["showIntervalLabel"];
    };
};
interface CalendarWithIntervalsProps extends CalendarBaseProps {
    maxDays: number;
    intervalHeight: string | number;
    intervalMinutes: string | number;
    firstInterval: string | number;
    firstTime: VTime | undefined;
    intervalCount: string | number;
    intervalFormat: CalendarFormatter | string | undefined;
}
export declare function useCalendarWithIntervals(props: CalendarWithIntervalsProps): {
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
    dayFormatter: import("vue").ComputedRef<CalendarFormatter>;
    weekdayFormatter: import("vue").ComputedRef<CalendarFormatter>;
    getColorProps: (colors: {
        background?: import("../../../composables/color.js").ColorValue;
        text?: import("../../../composables/color.js").ColorValue;
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
    intervalFormatter: import("vue").ComputedRef<CalendarFormatter>;
    showIntervalLabelDefault: (interval: CalendarTimestamp) => boolean;
    intervalStyleDefault: (_interval: CalendarTimestamp) => StyleValue;
    getTimestampAtEvent: (e: Event, day: CalendarTimestamp) => CalendarTimestamp;
    getSlotScope: (timestamp: CalendarTimestamp) => CalendarDayBodySlotScope;
    scrollToTime: (time: VTime) => boolean;
    minutesToPixels: (minutes: number) => number;
    timeToY: (time: CalendarTimestamp | VTime, targetDateOrClamp?: boolean | CalendarTimestamp) => number | false;
    timeDelta: (time: CalendarTimestamp | VTime, targetDate?: CalendarTimestamp | undefined) => number | false;
};

