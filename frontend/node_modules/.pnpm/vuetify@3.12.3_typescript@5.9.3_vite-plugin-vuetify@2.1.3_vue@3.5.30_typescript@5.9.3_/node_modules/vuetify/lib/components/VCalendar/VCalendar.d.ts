// Styles



import { validateTimestamp } from './util/timestamp.js';
// Types
import type { PropType } from 'vue';
import type { CalendarCategory, CalendarCategoryTextFunction, CalendarDayBodySlotScope, CalendarDaySlotScope, CalendarEvent, CalendarEventParsed, CalendarTimestamp } from './types.js';
import type { GenericProps, JSXComponent } from '../../util/index.js';
// Types
interface VCalendarRenderProps {
    start: CalendarTimestamp;
    end: CalendarTimestamp;
    component: JSXComponent & {
        filterProps: <T>(props: T) => Partial<T>;
    };
    maxDays: number;
    categories: CalendarCategory[];
}
interface EventSlotScope {
    event: CalendarEvent;
    outside: boolean;
    singline: boolean;
    overlapsNoon: boolean;
    formatTime: (withTime: CalendarTimestamp, ampm: boolean) => string;
    timeSummary: () => string;
    eventSummary: () => JSX.Element;
    eventParsed: CalendarEventParsed;
    day: CalendarDaySlotScope;
    start: boolean;
    end: boolean;
    timed: boolean;
}
interface DaySlotScope extends CalendarTimestamp {
    outside: boolean;
    index: number;
    week: CalendarTimestamp[];
}
interface DayHeaderSlotScope extends CalendarTimestamp {
    index: number;
    week: CalendarTimestamp[];
}
interface CalendarDayCategorySlotScope extends CalendarDayBodySlotScope {
    category: CalendarCategory;
}
export declare const VCalendar: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        start: string | number | Date;
        weekdays: string | number[];
        weekdayFormat: import("./types.js").CalendarFormatter;
        dayFormat: import("./types.js").CalendarFormatter;
        type: "4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week";
        events: CalendarEvent[];
        eventStart: string;
        eventEnd: string;
        eventTimed: string | import("./types.js").CalendarEventTimedFunction;
        eventCategory: string | import("./types.js").CalendarEventCategoryFunction;
        eventHeight: number;
        eventColor: string | import("./types.js").CalendarEventColorFunction;
        eventName: string | import("./types.js").CalendarEventNameFunction;
        eventOverlapThreshold: string | number;
        eventOverlapMode: "column" | "stack" | import("./types.js").CalendarEventOverlapMode;
        eventMore: boolean;
        eventMoreText: string;
        eventRipple: boolean | Record<string, any>;
        eventMarginBottom: number;
        categoryDays: string | number;
        categories: string | CalendarCategory[];
        maxDays: number;
        categoryHideDynamic: boolean;
        categoryShowAll: boolean;
        categoryForInvalid: string;
    } & {
        end?: string | number | Date | undefined;
        firstDayOfWeek?: string | number | undefined;
        firstDayOfYear?: string | number | undefined;
        locale?: string | undefined;
        now?: string | undefined;
        eventTextColor?: string | import("./types.js").CalendarEventColorFunction | undefined;
        modelValue?: string | number | Date | undefined;
        categoryText?: string | CalendarCategoryTextFunction | undefined;
    }, {
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
        days: import("vue").ComputedRef<CalendarTimestamp[]>;
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
        noEvents: import("vue").ComputedRef<boolean>;
        parsedEvents: import("vue").ComputedRef<CalendarEventParsed[]>;
        parsedEventOverlapThreshold: import("vue").ComputedRef<number>;
        eventTimedFunction: import("vue").ComputedRef<import("./types.js").CalendarEventTimedFunction>;
        eventCategoryFunction: import("vue").ComputedRef<import("./types.js").CalendarEventCategoryFunction>;
        eventTextColorFunction: import("vue").ComputedRef<import("./types.js").CalendarEventColorFunction>;
        eventNameFunction: import("vue").ComputedRef<import("./types.js").CalendarEventNameFunction>;
        eventModeFunction: import("vue").ComputedRef<import("./types.js").CalendarEventOverlapMode>;
        eventColorFunction: (e: CalendarEvent) => string | undefined;
        eventsRef: import("vue").Ref<HTMLElement[], HTMLElement[]>;
        updateEventVisibility: () => void;
        getEventsMap: () => {
            [date: string]: {
                parent: HTMLElement;
                more: HTMLElement | null;
                events: HTMLElement[];
            };
        };
        genDayEvent: ({ event }: import("./types.js").CalendarEventVisual, day: CalendarDaySlotScope) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>;
        genTimedEvent: ({ event, left, width }: import("./types.js").CalendarEventVisual, day: CalendarDayBodySlotScope) => false | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>;
        genEvent: (event: CalendarEventParsed, scopeInput: import("./composables/calendarWithEvents.js").VEventScopeInput, timedEvent: boolean, data: Record<string, unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>;
        genName: (eventSummary: () => string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>;
        genPlaceholder: (day: CalendarTimestamp) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>;
        genMore: (day: CalendarDaySlotScope) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>;
        getVisibleEvents: () => CalendarEventParsed[];
        isEventForCategory: (event: CalendarEventParsed, category: CalendarCategory) => boolean;
        getEventsForDay: (day: CalendarDaySlotScope) => CalendarEventParsed[];
        getEventsForDayAll: (day: CalendarDaySlotScope) => CalendarEventParsed[];
        getEventsForDayTimed: (day: CalendarDaySlotScope) => CalendarEventParsed[];
        getScopedSlots: () => any;
        lastStart: import("vue").Ref<{
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
        } | null, CalendarTimestamp | {
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
        } | null>;
        lastEnd: import("vue").Ref<{
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
        } | null, CalendarTimestamp | {
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
        } | null>;
        parsedCategoryDays: import("vue").ComputedRef<number>;
        renderProps: import("vue").ComputedRef<VCalendarRenderProps>;
        eventWeekdays: import("vue").ComputedRef<number[]>;
        categoryMode: import("vue").ComputedRef<boolean>;
        title: import("vue").ComputedRef<string>;
        monthLongFormatter: import("vue").ComputedRef<import("./types.js").CalendarFormatter>;
        monthShortFormatter: import("vue").ComputedRef<import("./types.js").CalendarFormatter>;
        parsedCategories: import("vue").ComputedRef<CalendarCategory[]>;
        checkChange: () => void;
        move: (amount?: number) => void;
        next: (amount?: number) => void;
        prev: (amount?: number) => void;
        getCategoryList: (categories: CalendarCategory[]) => CalendarCategory[];
    } & Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
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
            shortWeekdays: boolean;
            shortIntervals: boolean;
            hideHeader: boolean;
        }> & Omit<{
            readonly start: string | number | Date;
            readonly end?: string | number | Date | undefined;
            readonly weekdays: string | number[];
            readonly firstDayOfWeek?: string | number | undefined;
            readonly firstDayOfYear?: string | number | undefined;
            readonly weekdayFormat: import("./types.js").CalendarFormatter;
            readonly dayFormat: import("./types.js").CalendarFormatter;
            readonly locale?: string | undefined;
            readonly now?: string | undefined;
            readonly type: "4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week";
            readonly maxDays: number;
            readonly intervalHeight: string | number;
            readonly intervalWidth: string | number;
            readonly intervalMinutes: string | number;
            readonly firstInterval: string | number;
            readonly firstTime?: import("./util/timestamp.js").VTime | undefined;
            readonly intervalCount: string | number;
            readonly intervalFormat: import("./types.js").CalendarFormatter;
            readonly intervalStyle: (interval: CalendarTimestamp) => import("vue").StyleValue;
            readonly showIntervalLabel: (interval: CalendarTimestamp) => boolean;
            readonly color?: string | undefined;
            readonly shortWeekdays: boolean;
            readonly shortIntervals: boolean;
            readonly hideHeader: boolean;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "dayFormat" | "firstInterval" | "hideHeader" | "intervalCount" | "intervalFormat" | "intervalHeight" | "intervalMinutes" | "intervalStyle" | "intervalWidth" | "maxDays" | "shortIntervals" | "shortWeekdays" | "showIntervalLabel" | "start" | "type" | "weekdayFormat" | "weekdays">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $host: Element | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            start: {
                type: (DateConstructor | NumberConstructor | StringConstructor)[];
                validate: typeof validateTimestamp;
                default: () => string;
            };
            end: {
                type: (DateConstructor | NumberConstructor | StringConstructor)[];
                validate: typeof validateTimestamp;
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
                validator: typeof validateTimestamp;
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
            color: StringConstructor;
            shortWeekdays: {
                type: BooleanConstructor;
                default: boolean;
            };
            shortIntervals: {
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
            getSlotScope: (timestamp: CalendarTimestamp) => CalendarDayBodySlotScope;
            scrollToTime: (time: import("./util/timestamp.js").VTime) => boolean;
            minutesToPixels: (minutes: number) => number;
            timeToY: (time: CalendarTimestamp | import("./util/timestamp.js").VTime, targetDateOrClamp?: boolean | CalendarTimestamp) => number | false;
            timeDelta: (time: CalendarTimestamp | import("./util/timestamp.js").VTime, targetDate?: CalendarTimestamp | undefined) => number | false;
            scrollPush: import("vue").Ref<number, number>;
            pane: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            init: () => void;
            onResize: () => void;
            getScrollPush: () => number;
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
            shortWeekdays: boolean;
            shortIntervals: boolean;
            hideHeader: boolean;
        }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: ((() => void)[] | (() => void)) | undefined;
            created?: ((() => void)[] | (() => void)) | undefined;
            beforeMount?: ((() => void)[] | (() => void)) | undefined;
            mounted?: ((() => void)[] | (() => void)) | undefined;
            beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
            updated?: ((() => void)[] | (() => void)) | undefined;
            activated?: ((() => void)[] | (() => void)) | undefined;
            deactivated?: ((() => void)[] | (() => void)) | undefined;
            beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
            beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
            destroyed?: ((() => void)[] | (() => void)) | undefined;
            unmounted?: ((() => void)[] | (() => void)) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<{
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
        shortWeekdays: boolean;
        shortIntervals: boolean;
        hideHeader: boolean;
    }> & Omit<Readonly<import("vue").ExtractPropTypes<{
        start: {
            type: (DateConstructor | NumberConstructor | StringConstructor)[];
            validate: typeof validateTimestamp;
            default: () => string;
        };
        end: {
            type: (DateConstructor | NumberConstructor | StringConstructor)[];
            validate: typeof validateTimestamp;
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
            validator: typeof validateTimestamp;
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
        color: StringConstructor;
        shortWeekdays: {
            type: BooleanConstructor;
            default: boolean;
        };
        shortIntervals: {
            type: BooleanConstructor;
            default: boolean;
        };
        hideHeader: BooleanConstructor;
    }>>, "bodyHeight" | "dayFormatter" | "days" | "effectiveWeekdays" | "firstMinute" | "getColorProps" | "getEndOfWeek" | "getFormatter" | "getRelativeClasses" | "getScrollPush" | "getSlotScope" | "getStartOfWeek" | "getTimestampAtEvent" | "getWeekNumber" | "init" | "intervalFormatter" | "intervalStyleDefault" | "intervals" | "locale" | "minutesToPixels" | "onResize" | "pane" | "parsedEnd" | "parsedFirstInterval" | "parsedFirstTime" | "parsedIntervalCount" | "parsedIntervalHeight" | "parsedIntervalMinutes" | "parsedStart" | "parsedValue" | "parsedWeekdays" | "scrollAreaRef" | "scrollPush" | "scrollToTime" | "showIntervalLabelDefault" | "timeDelta" | "timeToY" | "times" | "updateTimes" | "weekdayFormatter" | "weekdaySkips" | ("dayFormat" | "firstInterval" | "hideHeader" | "intervalCount" | "intervalFormat" | "intervalHeight" | "intervalMinutes" | "intervalStyle" | "intervalWidth" | "maxDays" | "shortIntervals" | "shortWeekdays" | "showIntervalLabel" | "start" | "type" | "weekdayFormat" | "weekdays")> & import("vue").ShallowUnwrapRef<{
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
        getSlotScope: (timestamp: CalendarTimestamp) => CalendarDayBodySlotScope;
        scrollToTime: (time: import("./util/timestamp.js").VTime) => boolean;
        minutesToPixels: (minutes: number) => number;
        timeToY: (time: CalendarTimestamp | import("./util/timestamp.js").VTime, targetDateOrClamp?: boolean | CalendarTimestamp) => number | false;
        timeDelta: (time: CalendarTimestamp | import("./util/timestamp.js").VTime, targetDate?: CalendarTimestamp | undefined) => number | false;
        scrollPush: import("vue").Ref<number, number>;
        pane: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        init: () => void;
        onResize: () => void;
        getScrollPush: () => number;
    }> & {} & import("vue").ComponentCustomProperties & {}, "color" | "end" | "firstDayOfWeek" | "firstDayOfYear" | "firstTime" | "locale" | "now" | ("dayFormat" | "firstInterval" | "hideHeader" | "intervalCount" | "intervalFormat" | "intervalHeight" | "intervalMinutes" | "intervalStyle" | "intervalWidth" | "maxDays" | "shortIntervals" | "shortWeekdays" | "showIntervalLabel" | "start" | "type" | "weekdayFormat" | "weekdays") | keyof import("vue").AllowedComponentProps | keyof import("vue").VNodeProps> | Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
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
        }> & Omit<{
            readonly start: string | number | Date;
            readonly end?: string | number | Date | undefined;
            readonly weekdays: string | number[];
            readonly firstDayOfWeek?: string | number | undefined;
            readonly firstDayOfYear?: string | number | undefined;
            readonly weekdayFormat: import("./types.js").CalendarFormatter;
            readonly dayFormat: import("./types.js").CalendarFormatter;
            readonly locale?: string | undefined;
            readonly now?: string | undefined;
            readonly type: "4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week";
            readonly maxDays: number;
            readonly intervalHeight: string | number;
            readonly intervalWidth: string | number;
            readonly intervalMinutes: string | number;
            readonly firstInterval: string | number;
            readonly firstTime?: import("./util/timestamp.js").VTime | undefined;
            readonly intervalCount: string | number;
            readonly intervalFormat: import("./types.js").CalendarFormatter;
            readonly intervalStyle: (interval: CalendarTimestamp) => import("vue").StyleValue;
            readonly showIntervalLabel: (interval: CalendarTimestamp) => boolean;
            readonly categories: string | CalendarCategory[];
            readonly categoryText?: string | CalendarCategoryTextFunction | undefined;
            readonly categoryForInvalid: string;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "categories" | "categoryForInvalid" | "dayFormat" | "firstInterval" | "intervalCount" | "intervalFormat" | "intervalHeight" | "intervalMinutes" | "intervalStyle" | "intervalWidth" | "maxDays" | "showIntervalLabel" | "start" | "type" | "weekdayFormat" | "weekdays">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $host: Element | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            start: {
                type: (DateConstructor | NumberConstructor | StringConstructor)[];
                validate: typeof validateTimestamp;
                default: () => string;
            };
            end: {
                type: (DateConstructor | NumberConstructor | StringConstructor)[];
                validate: typeof validateTimestamp;
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
                validator: typeof validateTimestamp;
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
            getSlotScope: (timestamp: CalendarTimestamp) => CalendarDayBodySlotScope;
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
        }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: ((() => void)[] | (() => void)) | undefined;
            created?: ((() => void)[] | (() => void)) | undefined;
            beforeMount?: ((() => void)[] | (() => void)) | undefined;
            mounted?: ((() => void)[] | (() => void)) | undefined;
            beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
            updated?: ((() => void)[] | (() => void)) | undefined;
            activated?: ((() => void)[] | (() => void)) | undefined;
            deactivated?: ((() => void)[] | (() => void)) | undefined;
            beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
            beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
            destroyed?: ((() => void)[] | (() => void)) | undefined;
            unmounted?: ((() => void)[] | (() => void)) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<{
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
    }> & Omit<Readonly<import("vue").ExtractPropTypes<{
        start: {
            type: (DateConstructor | NumberConstructor | StringConstructor)[];
            validate: typeof validateTimestamp;
            default: () => string;
        };
        end: {
            type: (DateConstructor | NumberConstructor | StringConstructor)[];
            validate: typeof validateTimestamp;
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
            validator: typeof validateTimestamp;
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
    }>>, "bodyHeight" | "dayFormatter" | "days" | "effectiveWeekdays" | "firstMinute" | "getColorProps" | "getEndOfWeek" | "getFormatter" | "getRelativeClasses" | "getSlotScope" | "getStartOfWeek" | "getTimestampAtEvent" | "getWeekNumber" | "intervalFormatter" | "intervalStyleDefault" | "intervals" | "locale" | "minutesToPixels" | "parsedCategories" | "parsedEnd" | "parsedFirstInterval" | "parsedFirstTime" | "parsedIntervalCount" | "parsedIntervalHeight" | "parsedIntervalMinutes" | "parsedStart" | "parsedValue" | "parsedWeekdays" | "scrollAreaRef" | "scrollToTime" | "showIntervalLabelDefault" | "timeDelta" | "timeToY" | "times" | "updateTimes" | "weekdayFormatter" | "weekdaySkips" | ("categories" | "categoryForInvalid" | "dayFormat" | "firstInterval" | "intervalCount" | "intervalFormat" | "intervalHeight" | "intervalMinutes" | "intervalStyle" | "intervalWidth" | "maxDays" | "showIntervalLabel" | "start" | "type" | "weekdayFormat" | "weekdays")> & import("vue").ShallowUnwrapRef<{
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
        getSlotScope: (timestamp: CalendarTimestamp) => CalendarDayBodySlotScope;
        scrollToTime: (time: import("./util/timestamp.js").VTime) => boolean;
        minutesToPixels: (minutes: number) => number;
        timeToY: (time: CalendarTimestamp | import("./util/timestamp.js").VTime, targetDateOrClamp?: boolean | CalendarTimestamp) => number | false;
        timeDelta: (time: CalendarTimestamp | import("./util/timestamp.js").VTime, targetDate?: CalendarTimestamp | undefined) => number | false;
        parsedCategories: import("vue").ComputedRef<CalendarCategory[]>;
    }> & {} & import("vue").ComponentCustomProperties & {}, "categoryText" | "end" | "firstDayOfWeek" | "firstDayOfYear" | "firstTime" | "locale" | "now" | ("categories" | "categoryForInvalid" | "dayFormat" | "firstInterval" | "intervalCount" | "intervalFormat" | "intervalHeight" | "intervalMinutes" | "intervalStyle" | "intervalWidth" | "maxDays" | "showIntervalLabel" | "start" | "type" | "weekdayFormat" | "weekdays") | keyof import("vue").AllowedComponentProps | keyof import("vue").VNodeProps> | Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            start: string | number | Date;
            weekdays: string | number[];
            weekdayFormat: import("./types.js").CalendarFormatter;
            dayFormat: import("./types.js").CalendarFormatter;
            type: "4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week";
            minWeeks: number;
            showWeek: boolean;
            shortWeekdays: boolean;
            showMonthOnFirst: boolean;
            shortMonths: boolean;
            hideHeader: boolean;
        }> & Omit<{
            readonly start: string | number | Date;
            readonly end?: string | number | Date | undefined;
            readonly weekdays: string | number[];
            readonly firstDayOfWeek?: string | number | undefined;
            readonly firstDayOfYear?: string | number | undefined;
            readonly weekdayFormat: import("./types.js").CalendarFormatter;
            readonly dayFormat: import("./types.js").CalendarFormatter;
            readonly locale?: string | undefined;
            readonly now?: string | undefined;
            readonly type: "4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week";
            readonly minWeeks: number;
            readonly monthFormat?: import("./types.js").CalendarFormatter | undefined;
            readonly showWeek: boolean;
            readonly color?: string | undefined;
            readonly shortWeekdays: boolean;
            readonly showMonthOnFirst: boolean;
            readonly shortMonths: boolean;
            readonly hideHeader: boolean;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "dayFormat" | "hideHeader" | "minWeeks" | "shortMonths" | "shortWeekdays" | "showMonthOnFirst" | "showWeek" | "start" | "type" | "weekdayFormat" | "weekdays">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $host: Element | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            start: {
                type: (DateConstructor | NumberConstructor | StringConstructor)[];
                validate: typeof validateTimestamp;
                default: () => string;
            };
            end: {
                type: (DateConstructor | NumberConstructor | StringConstructor)[];
                validate: typeof validateTimestamp;
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
                validator: typeof validateTimestamp;
            };
            type: {
                type: PropType<"4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week">;
                default: string;
            };
            minWeeks: {
                validate: typeof import("./util/timestamp.js").validateNumber;
                default: number;
            };
            monthFormat: PropType<import("./types.js").CalendarFormatter>;
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
            days: import("vue").ComputedRef<CalendarTimestamp[]>;
            todayWeek: import("vue").ComputedRef<CalendarTimestamp[]>;
            monthFormatter: import("vue").ComputedRef<import("./types.js").CalendarFormatter>;
            isOutside: (day: CalendarTimestamp) => boolean;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            start: string | number | Date;
            weekdays: string | number[];
            weekdayFormat: import("./types.js").CalendarFormatter;
            dayFormat: import("./types.js").CalendarFormatter;
            type: "4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week";
            minWeeks: number;
            showWeek: boolean;
            shortWeekdays: boolean;
            showMonthOnFirst: boolean;
            shortMonths: boolean;
            hideHeader: boolean;
        }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: ((() => void)[] | (() => void)) | undefined;
            created?: ((() => void)[] | (() => void)) | undefined;
            beforeMount?: ((() => void)[] | (() => void)) | undefined;
            mounted?: ((() => void)[] | (() => void)) | undefined;
            beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
            updated?: ((() => void)[] | (() => void)) | undefined;
            activated?: ((() => void)[] | (() => void)) | undefined;
            deactivated?: ((() => void)[] | (() => void)) | undefined;
            beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
            beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
            destroyed?: ((() => void)[] | (() => void)) | undefined;
            unmounted?: ((() => void)[] | (() => void)) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<{
        start: string | number | Date;
        weekdays: string | number[];
        weekdayFormat: import("./types.js").CalendarFormatter;
        dayFormat: import("./types.js").CalendarFormatter;
        type: "4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week";
        minWeeks: number;
        showWeek: boolean;
        shortWeekdays: boolean;
        showMonthOnFirst: boolean;
        shortMonths: boolean;
        hideHeader: boolean;
    }> & Omit<Readonly<import("vue").ExtractPropTypes<{
        start: {
            type: (DateConstructor | NumberConstructor | StringConstructor)[];
            validate: typeof validateTimestamp;
            default: () => string;
        };
        end: {
            type: (DateConstructor | NumberConstructor | StringConstructor)[];
            validate: typeof validateTimestamp;
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
            validator: typeof validateTimestamp;
        };
        type: {
            type: PropType<"4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week">;
            default: string;
        };
        minWeeks: {
            validate: typeof import("./util/timestamp.js").validateNumber;
            default: number;
        };
        monthFormat: PropType<import("./types.js").CalendarFormatter>;
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
    }>>, "dayFormatter" | "days" | "effectiveWeekdays" | "getColorProps" | "getEndOfWeek" | "getFormatter" | "getRelativeClasses" | "getStartOfWeek" | "getWeekNumber" | "isOutside" | "locale" | "monthFormatter" | "parsedEnd" | "parsedStart" | "parsedValue" | "parsedWeekdays" | "times" | "todayWeek" | "updateTimes" | "weekdayFormatter" | "weekdaySkips" | ("dayFormat" | "hideHeader" | "minWeeks" | "shortMonths" | "shortWeekdays" | "showMonthOnFirst" | "showWeek" | "start" | "type" | "weekdayFormat" | "weekdays")> & import("vue").ShallowUnwrapRef<{
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
        days: import("vue").ComputedRef<CalendarTimestamp[]>;
        todayWeek: import("vue").ComputedRef<CalendarTimestamp[]>;
        monthFormatter: import("vue").ComputedRef<import("./types.js").CalendarFormatter>;
        isOutside: (day: CalendarTimestamp) => boolean;
    }> & {} & import("vue").ComponentCustomProperties & {}, "color" | "end" | "firstDayOfWeek" | "firstDayOfYear" | "locale" | "monthFormat" | "now" | ("dayFormat" | "hideHeader" | "minWeeks" | "shortMonths" | "shortWeekdays" | "showMonthOnFirst" | "showWeek" | "start" | "type" | "weekdayFormat" | "weekdays") | keyof import("vue").AllowedComponentProps | keyof import("vue").VNodeProps>, `$${any}`> & {
        _allExposed: {
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
            getSlotScope: (timestamp: CalendarTimestamp) => CalendarDayBodySlotScope;
            scrollToTime: (time: import("./util/timestamp.js").VTime) => boolean;
            minutesToPixels: (minutes: number) => number;
            timeToY: (time: CalendarTimestamp | import("./util/timestamp.js").VTime, targetDateOrClamp?: boolean | CalendarTimestamp) => number | false;
            timeDelta: (time: CalendarTimestamp | import("./util/timestamp.js").VTime, targetDate?: CalendarTimestamp | undefined) => number | false;
            scrollPush: import("vue").Ref<number, number>;
            pane: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            init: () => void;
            onResize: () => void;
            getScrollPush: () => number;
        } | {
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
            getSlotScope: (timestamp: CalendarTimestamp) => CalendarDayBodySlotScope;
            scrollToTime: (time: import("./util/timestamp.js").VTime) => boolean;
            minutesToPixels: (minutes: number) => number;
            timeToY: (time: CalendarTimestamp | import("./util/timestamp.js").VTime, targetDateOrClamp?: boolean | CalendarTimestamp) => number | false;
            timeDelta: (time: CalendarTimestamp | import("./util/timestamp.js").VTime, targetDate?: CalendarTimestamp | undefined) => number | false;
            parsedCategories: import("vue").ComputedRef<CalendarCategory[]>;
        } | {
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
            days: import("vue").ComputedRef<CalendarTimestamp[]>;
            todayWeek: import("vue").ComputedRef<CalendarTimestamp[]>;
            monthFormatter: import("vue").ComputedRef<import("./types.js").CalendarFormatter>;
            isOutside: (day: CalendarTimestamp) => boolean;
        } | {
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
            days: import("vue").ComputedRef<CalendarTimestamp[]>;
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
            noEvents: import("vue").ComputedRef<boolean>;
            parsedEvents: import("vue").ComputedRef<CalendarEventParsed[]>;
            parsedEventOverlapThreshold: import("vue").ComputedRef<number>;
            eventTimedFunction: import("vue").ComputedRef<import("./types.js").CalendarEventTimedFunction>;
            eventCategoryFunction: import("vue").ComputedRef<import("./types.js").CalendarEventCategoryFunction>;
            eventTextColorFunction: import("vue").ComputedRef<import("./types.js").CalendarEventColorFunction>;
            eventNameFunction: import("vue").ComputedRef<import("./types.js").CalendarEventNameFunction>;
            eventModeFunction: import("vue").ComputedRef<import("./types.js").CalendarEventOverlapMode>;
            eventColorFunction: (e: CalendarEvent) => string | undefined;
            eventsRef: import("vue").Ref<HTMLElement[], HTMLElement[]>;
            updateEventVisibility: () => void;
            getEventsMap: () => {
                [date: string]: {
                    parent: HTMLElement;
                    more: HTMLElement | null;
                    events: HTMLElement[];
                };
            };
            genDayEvent: ({ event }: import("./types.js").CalendarEventVisual, day: CalendarDaySlotScope) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
            genTimedEvent: ({ event, left, width }: import("./types.js").CalendarEventVisual, day: CalendarDayBodySlotScope) => false | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
            genEvent: (event: CalendarEventParsed, scopeInput: import("./composables/calendarWithEvents.js").VEventScopeInput, timedEvent: boolean, data: Record<string, unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
            genName: (eventSummary: () => string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
            genPlaceholder: (day: CalendarTimestamp) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
            genMore: (day: CalendarDaySlotScope) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
            getVisibleEvents: () => CalendarEventParsed[];
            isEventForCategory: (event: CalendarEventParsed, category: CalendarCategory) => boolean;
            getEventsForDay: (day: CalendarDaySlotScope) => CalendarEventParsed[];
            getEventsForDayAll: (day: CalendarDaySlotScope) => CalendarEventParsed[];
            getEventsForDayTimed: (day: CalendarDaySlotScope) => CalendarEventParsed[];
            getScopedSlots: () => any;
            lastStart: import("vue").Ref<{
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
            } | null, CalendarTimestamp | {
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
            } | null>;
            lastEnd: import("vue").Ref<{
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
            } | null, CalendarTimestamp | {
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
            } | null>;
            parsedCategoryDays: import("vue").ComputedRef<number>;
            renderProps: import("vue").ComputedRef<VCalendarRenderProps>;
            eventWeekdays: import("vue").ComputedRef<number[]>;
            categoryMode: import("vue").ComputedRef<boolean>;
            title: import("vue").ComputedRef<string>;
            monthLongFormatter: import("vue").ComputedRef<import("./types.js").CalendarFormatter>;
            monthShortFormatter: import("vue").ComputedRef<import("./types.js").CalendarFormatter>;
            parsedCategories: import("vue").ComputedRef<CalendarCategory[]>;
            checkChange: () => void;
            move: (amount?: number) => void;
            next: (amount?: number) => void;
            prev: (amount?: number) => void;
            getCategoryList: (categories: CalendarCategory[]) => CalendarCategory[];
        };
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<Record<string, any>, "$children" | "v-slot:category" | "v-slot:day-body" | "v-slot:day-header" | "v-slot:day-label" | "v-slot:day-label-header" | "v-slot:day-month" | "v-slot:interval-header" | "v-slots" | `${Uncapitalize<Capitalize<string>>}:date` | `${Uncapitalize<Capitalize<string>>}:day` | `${Uncapitalize<Capitalize<string>>}:dayCategory` | `${Uncapitalize<Capitalize<string>>}:event` | `${Uncapitalize<Capitalize<string>>}:interval` | `${Uncapitalize<Capitalize<string>>}:more` | `${Uncapitalize<Capitalize<string>>}:time` | `${Uncapitalize<Capitalize<string>>}:timeCategory`>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        start: string | number | Date;
        weekdays: string | number[];
        weekdayFormat: import("./types.js").CalendarFormatter;
        dayFormat: import("./types.js").CalendarFormatter;
        type: "4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week";
        events: CalendarEvent[];
        eventStart: string;
        eventEnd: string;
        eventTimed: string | import("./types.js").CalendarEventTimedFunction;
        eventCategory: string | import("./types.js").CalendarEventCategoryFunction;
        eventHeight: number;
        eventColor: string | import("./types.js").CalendarEventColorFunction;
        eventName: string | import("./types.js").CalendarEventNameFunction;
        eventOverlapThreshold: string | number;
        eventOverlapMode: "column" | "stack" | import("./types.js").CalendarEventOverlapMode;
        eventMore: boolean;
        eventMoreText: string;
        eventRipple: boolean | Record<string, any>;
        eventMarginBottom: number;
        categoryDays: string | number;
        categories: string | CalendarCategory[];
        maxDays: number;
        categoryHideDynamic: boolean;
        categoryShowAll: boolean;
        categoryForInvalid: string;
    }, true, {}, import("vue").SlotsType<Partial<{
        category: (arg: CalendarDayCategorySlotScope) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        day: (arg: DaySlotScope) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "day-body": (arg: CalendarDayBodySlotScope) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "day-header": (arg: DayHeaderSlotScope) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "day-label": (arg: CalendarTimestamp) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "day-label-header": (arg: CalendarTimestamp) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "day-month": (arg: CalendarTimestamp) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        event: (arg: EventSlotScope) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        interval: (arg: CalendarDayCategorySlotScope) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>[];
        "interval-header": () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
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
        start: string | number | Date;
        weekdays: string | number[];
        weekdayFormat: import("./types.js").CalendarFormatter;
        dayFormat: import("./types.js").CalendarFormatter;
        type: "4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week";
        events: CalendarEvent[];
        eventStart: string;
        eventEnd: string;
        eventTimed: string | import("./types.js").CalendarEventTimedFunction;
        eventCategory: string | import("./types.js").CalendarEventCategoryFunction;
        eventHeight: number;
        eventColor: string | import("./types.js").CalendarEventColorFunction;
        eventName: string | import("./types.js").CalendarEventNameFunction;
        eventOverlapThreshold: string | number;
        eventOverlapMode: "column" | "stack" | import("./types.js").CalendarEventOverlapMode;
        eventMore: boolean;
        eventMoreText: string;
        eventRipple: boolean | Record<string, any>;
        eventMarginBottom: number;
        categoryDays: string | number;
        categories: string | CalendarCategory[];
        maxDays: number;
        categoryHideDynamic: boolean;
        categoryShowAll: boolean;
        categoryForInvalid: string;
    } & {
        end?: string | number | Date | undefined;
        firstDayOfWeek?: string | number | undefined;
        firstDayOfYear?: string | number | undefined;
        locale?: string | undefined;
        now?: string | undefined;
        eventTextColor?: string | import("./types.js").CalendarEventColorFunction | undefined;
        modelValue?: string | number | Date | undefined;
        categoryText?: string | CalendarCategoryTextFunction | undefined;
    }, {
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
        days: import("vue").ComputedRef<CalendarTimestamp[]>;
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
        noEvents: import("vue").ComputedRef<boolean>;
        parsedEvents: import("vue").ComputedRef<CalendarEventParsed[]>;
        parsedEventOverlapThreshold: import("vue").ComputedRef<number>;
        eventTimedFunction: import("vue").ComputedRef<import("./types.js").CalendarEventTimedFunction>;
        eventCategoryFunction: import("vue").ComputedRef<import("./types.js").CalendarEventCategoryFunction>;
        eventTextColorFunction: import("vue").ComputedRef<import("./types.js").CalendarEventColorFunction>;
        eventNameFunction: import("vue").ComputedRef<import("./types.js").CalendarEventNameFunction>;
        eventModeFunction: import("vue").ComputedRef<import("./types.js").CalendarEventOverlapMode>;
        eventColorFunction: (e: CalendarEvent) => string | undefined;
        eventsRef: import("vue").Ref<HTMLElement[], HTMLElement[]>;
        updateEventVisibility: () => void;
        getEventsMap: () => {
            [date: string]: {
                parent: HTMLElement;
                more: HTMLElement | null;
                events: HTMLElement[];
            };
        };
        genDayEvent: ({ event }: import("./types.js").CalendarEventVisual, day: CalendarDaySlotScope) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>;
        genTimedEvent: ({ event, left, width }: import("./types.js").CalendarEventVisual, day: CalendarDayBodySlotScope) => false | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>;
        genEvent: (event: CalendarEventParsed, scopeInput: import("./composables/calendarWithEvents.js").VEventScopeInput, timedEvent: boolean, data: Record<string, unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>;
        genName: (eventSummary: () => string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>;
        genPlaceholder: (day: CalendarTimestamp) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>;
        genMore: (day: CalendarDaySlotScope) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>;
        getVisibleEvents: () => CalendarEventParsed[];
        isEventForCategory: (event: CalendarEventParsed, category: CalendarCategory) => boolean;
        getEventsForDay: (day: CalendarDaySlotScope) => CalendarEventParsed[];
        getEventsForDayAll: (day: CalendarDaySlotScope) => CalendarEventParsed[];
        getEventsForDayTimed: (day: CalendarDaySlotScope) => CalendarEventParsed[];
        getScopedSlots: () => any;
        lastStart: import("vue").Ref<{
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
        } | null, CalendarTimestamp | {
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
        } | null>;
        lastEnd: import("vue").Ref<{
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
        } | null, CalendarTimestamp | {
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
        } | null>;
        parsedCategoryDays: import("vue").ComputedRef<number>;
        renderProps: import("vue").ComputedRef<VCalendarRenderProps>;
        eventWeekdays: import("vue").ComputedRef<number[]>;
        categoryMode: import("vue").ComputedRef<boolean>;
        title: import("vue").ComputedRef<string>;
        monthLongFormatter: import("vue").ComputedRef<import("./types.js").CalendarFormatter>;
        monthShortFormatter: import("vue").ComputedRef<import("./types.js").CalendarFormatter>;
        parsedCategories: import("vue").ComputedRef<CalendarCategory[]>;
        checkChange: () => void;
        move: (amount?: number) => void;
        next: (amount?: number) => void;
        prev: (amount?: number) => void;
        getCategoryList: (categories: CalendarCategory[]) => CalendarCategory[];
    } & Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
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
            shortWeekdays: boolean;
            shortIntervals: boolean;
            hideHeader: boolean;
        }> & Omit<{
            readonly start: string | number | Date;
            readonly end?: string | number | Date | undefined;
            readonly weekdays: string | number[];
            readonly firstDayOfWeek?: string | number | undefined;
            readonly firstDayOfYear?: string | number | undefined;
            readonly weekdayFormat: import("./types.js").CalendarFormatter;
            readonly dayFormat: import("./types.js").CalendarFormatter;
            readonly locale?: string | undefined;
            readonly now?: string | undefined;
            readonly type: "4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week";
            readonly maxDays: number;
            readonly intervalHeight: string | number;
            readonly intervalWidth: string | number;
            readonly intervalMinutes: string | number;
            readonly firstInterval: string | number;
            readonly firstTime?: import("./util/timestamp.js").VTime | undefined;
            readonly intervalCount: string | number;
            readonly intervalFormat: import("./types.js").CalendarFormatter;
            readonly intervalStyle: (interval: CalendarTimestamp) => import("vue").StyleValue;
            readonly showIntervalLabel: (interval: CalendarTimestamp) => boolean;
            readonly color?: string | undefined;
            readonly shortWeekdays: boolean;
            readonly shortIntervals: boolean;
            readonly hideHeader: boolean;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "dayFormat" | "firstInterval" | "hideHeader" | "intervalCount" | "intervalFormat" | "intervalHeight" | "intervalMinutes" | "intervalStyle" | "intervalWidth" | "maxDays" | "shortIntervals" | "shortWeekdays" | "showIntervalLabel" | "start" | "type" | "weekdayFormat" | "weekdays">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $host: Element | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            start: {
                type: (DateConstructor | NumberConstructor | StringConstructor)[];
                validate: typeof validateTimestamp;
                default: () => string;
            };
            end: {
                type: (DateConstructor | NumberConstructor | StringConstructor)[];
                validate: typeof validateTimestamp;
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
                validator: typeof validateTimestamp;
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
            color: StringConstructor;
            shortWeekdays: {
                type: BooleanConstructor;
                default: boolean;
            };
            shortIntervals: {
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
            getSlotScope: (timestamp: CalendarTimestamp) => CalendarDayBodySlotScope;
            scrollToTime: (time: import("./util/timestamp.js").VTime) => boolean;
            minutesToPixels: (minutes: number) => number;
            timeToY: (time: CalendarTimestamp | import("./util/timestamp.js").VTime, targetDateOrClamp?: boolean | CalendarTimestamp) => number | false;
            timeDelta: (time: CalendarTimestamp | import("./util/timestamp.js").VTime, targetDate?: CalendarTimestamp | undefined) => number | false;
            scrollPush: import("vue").Ref<number, number>;
            pane: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            init: () => void;
            onResize: () => void;
            getScrollPush: () => number;
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
            shortWeekdays: boolean;
            shortIntervals: boolean;
            hideHeader: boolean;
        }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: ((() => void)[] | (() => void)) | undefined;
            created?: ((() => void)[] | (() => void)) | undefined;
            beforeMount?: ((() => void)[] | (() => void)) | undefined;
            mounted?: ((() => void)[] | (() => void)) | undefined;
            beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
            updated?: ((() => void)[] | (() => void)) | undefined;
            activated?: ((() => void)[] | (() => void)) | undefined;
            deactivated?: ((() => void)[] | (() => void)) | undefined;
            beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
            beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
            destroyed?: ((() => void)[] | (() => void)) | undefined;
            unmounted?: ((() => void)[] | (() => void)) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<{
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
        shortWeekdays: boolean;
        shortIntervals: boolean;
        hideHeader: boolean;
    }> & Omit<Readonly<import("vue").ExtractPropTypes<{
        start: {
            type: (DateConstructor | NumberConstructor | StringConstructor)[];
            validate: typeof validateTimestamp;
            default: () => string;
        };
        end: {
            type: (DateConstructor | NumberConstructor | StringConstructor)[];
            validate: typeof validateTimestamp;
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
            validator: typeof validateTimestamp;
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
        color: StringConstructor;
        shortWeekdays: {
            type: BooleanConstructor;
            default: boolean;
        };
        shortIntervals: {
            type: BooleanConstructor;
            default: boolean;
        };
        hideHeader: BooleanConstructor;
    }>>, "bodyHeight" | "dayFormatter" | "days" | "effectiveWeekdays" | "firstMinute" | "getColorProps" | "getEndOfWeek" | "getFormatter" | "getRelativeClasses" | "getScrollPush" | "getSlotScope" | "getStartOfWeek" | "getTimestampAtEvent" | "getWeekNumber" | "init" | "intervalFormatter" | "intervalStyleDefault" | "intervals" | "locale" | "minutesToPixels" | "onResize" | "pane" | "parsedEnd" | "parsedFirstInterval" | "parsedFirstTime" | "parsedIntervalCount" | "parsedIntervalHeight" | "parsedIntervalMinutes" | "parsedStart" | "parsedValue" | "parsedWeekdays" | "scrollAreaRef" | "scrollPush" | "scrollToTime" | "showIntervalLabelDefault" | "timeDelta" | "timeToY" | "times" | "updateTimes" | "weekdayFormatter" | "weekdaySkips" | ("dayFormat" | "firstInterval" | "hideHeader" | "intervalCount" | "intervalFormat" | "intervalHeight" | "intervalMinutes" | "intervalStyle" | "intervalWidth" | "maxDays" | "shortIntervals" | "shortWeekdays" | "showIntervalLabel" | "start" | "type" | "weekdayFormat" | "weekdays")> & import("vue").ShallowUnwrapRef<{
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
        getSlotScope: (timestamp: CalendarTimestamp) => CalendarDayBodySlotScope;
        scrollToTime: (time: import("./util/timestamp.js").VTime) => boolean;
        minutesToPixels: (minutes: number) => number;
        timeToY: (time: CalendarTimestamp | import("./util/timestamp.js").VTime, targetDateOrClamp?: boolean | CalendarTimestamp) => number | false;
        timeDelta: (time: CalendarTimestamp | import("./util/timestamp.js").VTime, targetDate?: CalendarTimestamp | undefined) => number | false;
        scrollPush: import("vue").Ref<number, number>;
        pane: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        init: () => void;
        onResize: () => void;
        getScrollPush: () => number;
    }> & {} & import("vue").ComponentCustomProperties & {}, "color" | "end" | "firstDayOfWeek" | "firstDayOfYear" | "firstTime" | "locale" | "now" | ("dayFormat" | "firstInterval" | "hideHeader" | "intervalCount" | "intervalFormat" | "intervalHeight" | "intervalMinutes" | "intervalStyle" | "intervalWidth" | "maxDays" | "shortIntervals" | "shortWeekdays" | "showIntervalLabel" | "start" | "type" | "weekdayFormat" | "weekdays") | keyof import("vue").AllowedComponentProps | keyof import("vue").VNodeProps> | Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
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
        }> & Omit<{
            readonly start: string | number | Date;
            readonly end?: string | number | Date | undefined;
            readonly weekdays: string | number[];
            readonly firstDayOfWeek?: string | number | undefined;
            readonly firstDayOfYear?: string | number | undefined;
            readonly weekdayFormat: import("./types.js").CalendarFormatter;
            readonly dayFormat: import("./types.js").CalendarFormatter;
            readonly locale?: string | undefined;
            readonly now?: string | undefined;
            readonly type: "4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week";
            readonly maxDays: number;
            readonly intervalHeight: string | number;
            readonly intervalWidth: string | number;
            readonly intervalMinutes: string | number;
            readonly firstInterval: string | number;
            readonly firstTime?: import("./util/timestamp.js").VTime | undefined;
            readonly intervalCount: string | number;
            readonly intervalFormat: import("./types.js").CalendarFormatter;
            readonly intervalStyle: (interval: CalendarTimestamp) => import("vue").StyleValue;
            readonly showIntervalLabel: (interval: CalendarTimestamp) => boolean;
            readonly categories: string | CalendarCategory[];
            readonly categoryText?: string | CalendarCategoryTextFunction | undefined;
            readonly categoryForInvalid: string;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "categories" | "categoryForInvalid" | "dayFormat" | "firstInterval" | "intervalCount" | "intervalFormat" | "intervalHeight" | "intervalMinutes" | "intervalStyle" | "intervalWidth" | "maxDays" | "showIntervalLabel" | "start" | "type" | "weekdayFormat" | "weekdays">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $host: Element | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            start: {
                type: (DateConstructor | NumberConstructor | StringConstructor)[];
                validate: typeof validateTimestamp;
                default: () => string;
            };
            end: {
                type: (DateConstructor | NumberConstructor | StringConstructor)[];
                validate: typeof validateTimestamp;
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
                validator: typeof validateTimestamp;
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
            getSlotScope: (timestamp: CalendarTimestamp) => CalendarDayBodySlotScope;
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
        }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: ((() => void)[] | (() => void)) | undefined;
            created?: ((() => void)[] | (() => void)) | undefined;
            beforeMount?: ((() => void)[] | (() => void)) | undefined;
            mounted?: ((() => void)[] | (() => void)) | undefined;
            beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
            updated?: ((() => void)[] | (() => void)) | undefined;
            activated?: ((() => void)[] | (() => void)) | undefined;
            deactivated?: ((() => void)[] | (() => void)) | undefined;
            beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
            beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
            destroyed?: ((() => void)[] | (() => void)) | undefined;
            unmounted?: ((() => void)[] | (() => void)) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<{
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
    }> & Omit<Readonly<import("vue").ExtractPropTypes<{
        start: {
            type: (DateConstructor | NumberConstructor | StringConstructor)[];
            validate: typeof validateTimestamp;
            default: () => string;
        };
        end: {
            type: (DateConstructor | NumberConstructor | StringConstructor)[];
            validate: typeof validateTimestamp;
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
            validator: typeof validateTimestamp;
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
    }>>, "bodyHeight" | "dayFormatter" | "days" | "effectiveWeekdays" | "firstMinute" | "getColorProps" | "getEndOfWeek" | "getFormatter" | "getRelativeClasses" | "getSlotScope" | "getStartOfWeek" | "getTimestampAtEvent" | "getWeekNumber" | "intervalFormatter" | "intervalStyleDefault" | "intervals" | "locale" | "minutesToPixels" | "parsedCategories" | "parsedEnd" | "parsedFirstInterval" | "parsedFirstTime" | "parsedIntervalCount" | "parsedIntervalHeight" | "parsedIntervalMinutes" | "parsedStart" | "parsedValue" | "parsedWeekdays" | "scrollAreaRef" | "scrollToTime" | "showIntervalLabelDefault" | "timeDelta" | "timeToY" | "times" | "updateTimes" | "weekdayFormatter" | "weekdaySkips" | ("categories" | "categoryForInvalid" | "dayFormat" | "firstInterval" | "intervalCount" | "intervalFormat" | "intervalHeight" | "intervalMinutes" | "intervalStyle" | "intervalWidth" | "maxDays" | "showIntervalLabel" | "start" | "type" | "weekdayFormat" | "weekdays")> & import("vue").ShallowUnwrapRef<{
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
        getSlotScope: (timestamp: CalendarTimestamp) => CalendarDayBodySlotScope;
        scrollToTime: (time: import("./util/timestamp.js").VTime) => boolean;
        minutesToPixels: (minutes: number) => number;
        timeToY: (time: CalendarTimestamp | import("./util/timestamp.js").VTime, targetDateOrClamp?: boolean | CalendarTimestamp) => number | false;
        timeDelta: (time: CalendarTimestamp | import("./util/timestamp.js").VTime, targetDate?: CalendarTimestamp | undefined) => number | false;
        parsedCategories: import("vue").ComputedRef<CalendarCategory[]>;
    }> & {} & import("vue").ComponentCustomProperties & {}, "categoryText" | "end" | "firstDayOfWeek" | "firstDayOfYear" | "firstTime" | "locale" | "now" | ("categories" | "categoryForInvalid" | "dayFormat" | "firstInterval" | "intervalCount" | "intervalFormat" | "intervalHeight" | "intervalMinutes" | "intervalStyle" | "intervalWidth" | "maxDays" | "showIntervalLabel" | "start" | "type" | "weekdayFormat" | "weekdays") | keyof import("vue").AllowedComponentProps | keyof import("vue").VNodeProps> | Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            start: string | number | Date;
            weekdays: string | number[];
            weekdayFormat: import("./types.js").CalendarFormatter;
            dayFormat: import("./types.js").CalendarFormatter;
            type: "4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week";
            minWeeks: number;
            showWeek: boolean;
            shortWeekdays: boolean;
            showMonthOnFirst: boolean;
            shortMonths: boolean;
            hideHeader: boolean;
        }> & Omit<{
            readonly start: string | number | Date;
            readonly end?: string | number | Date | undefined;
            readonly weekdays: string | number[];
            readonly firstDayOfWeek?: string | number | undefined;
            readonly firstDayOfYear?: string | number | undefined;
            readonly weekdayFormat: import("./types.js").CalendarFormatter;
            readonly dayFormat: import("./types.js").CalendarFormatter;
            readonly locale?: string | undefined;
            readonly now?: string | undefined;
            readonly type: "4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week";
            readonly minWeeks: number;
            readonly monthFormat?: import("./types.js").CalendarFormatter | undefined;
            readonly showWeek: boolean;
            readonly color?: string | undefined;
            readonly shortWeekdays: boolean;
            readonly showMonthOnFirst: boolean;
            readonly shortMonths: boolean;
            readonly hideHeader: boolean;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "dayFormat" | "hideHeader" | "minWeeks" | "shortMonths" | "shortWeekdays" | "showMonthOnFirst" | "showWeek" | "start" | "type" | "weekdayFormat" | "weekdays">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
        $host: Element | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            start: {
                type: (DateConstructor | NumberConstructor | StringConstructor)[];
                validate: typeof validateTimestamp;
                default: () => string;
            };
            end: {
                type: (DateConstructor | NumberConstructor | StringConstructor)[];
                validate: typeof validateTimestamp;
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
                validator: typeof validateTimestamp;
            };
            type: {
                type: PropType<"4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week">;
                default: string;
            };
            minWeeks: {
                validate: typeof import("./util/timestamp.js").validateNumber;
                default: number;
            };
            monthFormat: PropType<import("./types.js").CalendarFormatter>;
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
            days: import("vue").ComputedRef<CalendarTimestamp[]>;
            todayWeek: import("vue").ComputedRef<CalendarTimestamp[]>;
            monthFormatter: import("vue").ComputedRef<import("./types.js").CalendarFormatter>;
            isOutside: (day: CalendarTimestamp) => boolean;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            start: string | number | Date;
            weekdays: string | number[];
            weekdayFormat: import("./types.js").CalendarFormatter;
            dayFormat: import("./types.js").CalendarFormatter;
            type: "4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week";
            minWeeks: number;
            showWeek: boolean;
            shortWeekdays: boolean;
            showMonthOnFirst: boolean;
            shortMonths: boolean;
            hideHeader: boolean;
        }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: ((() => void)[] | (() => void)) | undefined;
            created?: ((() => void)[] | (() => void)) | undefined;
            beforeMount?: ((() => void)[] | (() => void)) | undefined;
            mounted?: ((() => void)[] | (() => void)) | undefined;
            beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
            updated?: ((() => void)[] | (() => void)) | undefined;
            activated?: ((() => void)[] | (() => void)) | undefined;
            deactivated?: ((() => void)[] | (() => void)) | undefined;
            beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
            beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
            destroyed?: ((() => void)[] | (() => void)) | undefined;
            unmounted?: ((() => void)[] | (() => void)) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<{
        start: string | number | Date;
        weekdays: string | number[];
        weekdayFormat: import("./types.js").CalendarFormatter;
        dayFormat: import("./types.js").CalendarFormatter;
        type: "4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week";
        minWeeks: number;
        showWeek: boolean;
        shortWeekdays: boolean;
        showMonthOnFirst: boolean;
        shortMonths: boolean;
        hideHeader: boolean;
    }> & Omit<Readonly<import("vue").ExtractPropTypes<{
        start: {
            type: (DateConstructor | NumberConstructor | StringConstructor)[];
            validate: typeof validateTimestamp;
            default: () => string;
        };
        end: {
            type: (DateConstructor | NumberConstructor | StringConstructor)[];
            validate: typeof validateTimestamp;
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
            validator: typeof validateTimestamp;
        };
        type: {
            type: PropType<"4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week">;
            default: string;
        };
        minWeeks: {
            validate: typeof import("./util/timestamp.js").validateNumber;
            default: number;
        };
        monthFormat: PropType<import("./types.js").CalendarFormatter>;
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
    }>>, "dayFormatter" | "days" | "effectiveWeekdays" | "getColorProps" | "getEndOfWeek" | "getFormatter" | "getRelativeClasses" | "getStartOfWeek" | "getWeekNumber" | "isOutside" | "locale" | "monthFormatter" | "parsedEnd" | "parsedStart" | "parsedValue" | "parsedWeekdays" | "times" | "todayWeek" | "updateTimes" | "weekdayFormatter" | "weekdaySkips" | ("dayFormat" | "hideHeader" | "minWeeks" | "shortMonths" | "shortWeekdays" | "showMonthOnFirst" | "showWeek" | "start" | "type" | "weekdayFormat" | "weekdays")> & import("vue").ShallowUnwrapRef<{
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
        days: import("vue").ComputedRef<CalendarTimestamp[]>;
        todayWeek: import("vue").ComputedRef<CalendarTimestamp[]>;
        monthFormatter: import("vue").ComputedRef<import("./types.js").CalendarFormatter>;
        isOutside: (day: CalendarTimestamp) => boolean;
    }> & {} & import("vue").ComponentCustomProperties & {}, "color" | "end" | "firstDayOfWeek" | "firstDayOfYear" | "locale" | "monthFormat" | "now" | ("dayFormat" | "hideHeader" | "minWeeks" | "shortMonths" | "shortWeekdays" | "showMonthOnFirst" | "showWeek" | "start" | "type" | "weekdayFormat" | "weekdays") | keyof import("vue").AllowedComponentProps | keyof import("vue").VNodeProps>, `$${any}`> & {
        _allExposed: {
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
            getSlotScope: (timestamp: CalendarTimestamp) => CalendarDayBodySlotScope;
            scrollToTime: (time: import("./util/timestamp.js").VTime) => boolean;
            minutesToPixels: (minutes: number) => number;
            timeToY: (time: CalendarTimestamp | import("./util/timestamp.js").VTime, targetDateOrClamp?: boolean | CalendarTimestamp) => number | false;
            timeDelta: (time: CalendarTimestamp | import("./util/timestamp.js").VTime, targetDate?: CalendarTimestamp | undefined) => number | false;
            scrollPush: import("vue").Ref<number, number>;
            pane: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            init: () => void;
            onResize: () => void;
            getScrollPush: () => number;
        } | {
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
            getSlotScope: (timestamp: CalendarTimestamp) => CalendarDayBodySlotScope;
            scrollToTime: (time: import("./util/timestamp.js").VTime) => boolean;
            minutesToPixels: (minutes: number) => number;
            timeToY: (time: CalendarTimestamp | import("./util/timestamp.js").VTime, targetDateOrClamp?: boolean | CalendarTimestamp) => number | false;
            timeDelta: (time: CalendarTimestamp | import("./util/timestamp.js").VTime, targetDate?: CalendarTimestamp | undefined) => number | false;
            parsedCategories: import("vue").ComputedRef<CalendarCategory[]>;
        } | {
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
            days: import("vue").ComputedRef<CalendarTimestamp[]>;
            todayWeek: import("vue").ComputedRef<CalendarTimestamp[]>;
            monthFormatter: import("vue").ComputedRef<import("./types.js").CalendarFormatter>;
            isOutside: (day: CalendarTimestamp) => boolean;
        } | {
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
            days: import("vue").ComputedRef<CalendarTimestamp[]>;
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
            noEvents: import("vue").ComputedRef<boolean>;
            parsedEvents: import("vue").ComputedRef<CalendarEventParsed[]>;
            parsedEventOverlapThreshold: import("vue").ComputedRef<number>;
            eventTimedFunction: import("vue").ComputedRef<import("./types.js").CalendarEventTimedFunction>;
            eventCategoryFunction: import("vue").ComputedRef<import("./types.js").CalendarEventCategoryFunction>;
            eventTextColorFunction: import("vue").ComputedRef<import("./types.js").CalendarEventColorFunction>;
            eventNameFunction: import("vue").ComputedRef<import("./types.js").CalendarEventNameFunction>;
            eventModeFunction: import("vue").ComputedRef<import("./types.js").CalendarEventOverlapMode>;
            eventColorFunction: (e: CalendarEvent) => string | undefined;
            eventsRef: import("vue").Ref<HTMLElement[], HTMLElement[]>;
            updateEventVisibility: () => void;
            getEventsMap: () => {
                [date: string]: {
                    parent: HTMLElement;
                    more: HTMLElement | null;
                    events: HTMLElement[];
                };
            };
            genDayEvent: ({ event }: import("./types.js").CalendarEventVisual, day: CalendarDaySlotScope) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
            genTimedEvent: ({ event, left, width }: import("./types.js").CalendarEventVisual, day: CalendarDayBodySlotScope) => false | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
            genEvent: (event: CalendarEventParsed, scopeInput: import("./composables/calendarWithEvents.js").VEventScopeInput, timedEvent: boolean, data: Record<string, unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
            genName: (eventSummary: () => string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
            genPlaceholder: (day: CalendarTimestamp) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
            genMore: (day: CalendarDaySlotScope) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
            getVisibleEvents: () => CalendarEventParsed[];
            isEventForCategory: (event: CalendarEventParsed, category: CalendarCategory) => boolean;
            getEventsForDay: (day: CalendarDaySlotScope) => CalendarEventParsed[];
            getEventsForDayAll: (day: CalendarDaySlotScope) => CalendarEventParsed[];
            getEventsForDayTimed: (day: CalendarDaySlotScope) => CalendarEventParsed[];
            getScopedSlots: () => any;
            lastStart: import("vue").Ref<{
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
            } | null, CalendarTimestamp | {
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
            } | null>;
            lastEnd: import("vue").Ref<{
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
            } | null, CalendarTimestamp | {
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
            } | null>;
            parsedCategoryDays: import("vue").ComputedRef<number>;
            renderProps: import("vue").ComputedRef<VCalendarRenderProps>;
            eventWeekdays: import("vue").ComputedRef<number[]>;
            categoryMode: import("vue").ComputedRef<boolean>;
            title: import("vue").ComputedRef<string>;
            monthLongFormatter: import("vue").ComputedRef<import("./types.js").CalendarFormatter>;
            monthShortFormatter: import("vue").ComputedRef<import("./types.js").CalendarFormatter>;
            parsedCategories: import("vue").ComputedRef<CalendarCategory[]>;
            checkChange: () => void;
            move: (amount?: number) => void;
            next: (amount?: number) => void;
            prev: (amount?: number) => void;
            getCategoryList: (categories: CalendarCategory[]) => CalendarCategory[];
        };
    }, {}, {}, {}, {
        start: string | number | Date;
        weekdays: string | number[];
        weekdayFormat: import("./types.js").CalendarFormatter;
        dayFormat: import("./types.js").CalendarFormatter;
        type: "4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week";
        events: CalendarEvent[];
        eventStart: string;
        eventEnd: string;
        eventTimed: string | import("./types.js").CalendarEventTimedFunction;
        eventCategory: string | import("./types.js").CalendarEventCategoryFunction;
        eventHeight: number;
        eventColor: string | import("./types.js").CalendarEventColorFunction;
        eventName: string | import("./types.js").CalendarEventNameFunction;
        eventOverlapThreshold: string | number;
        eventOverlapMode: "column" | "stack" | import("./types.js").CalendarEventOverlapMode;
        eventMore: boolean;
        eventMoreText: string;
        eventRipple: boolean | Record<string, any>;
        eventMarginBottom: number;
        categoryDays: string | number;
        categories: string | CalendarCategory[];
        maxDays: number;
        categoryHideDynamic: boolean;
        categoryShowAll: boolean;
        categoryForInvalid: string;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<{
    start: string | number | Date;
    weekdays: string | number[];
    weekdayFormat: import("./types.js").CalendarFormatter;
    dayFormat: import("./types.js").CalendarFormatter;
    type: "4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week";
    events: CalendarEvent[];
    eventStart: string;
    eventEnd: string;
    eventTimed: string | import("./types.js").CalendarEventTimedFunction;
    eventCategory: string | import("./types.js").CalendarEventCategoryFunction;
    eventHeight: number;
    eventColor: string | import("./types.js").CalendarEventColorFunction;
    eventName: string | import("./types.js").CalendarEventNameFunction;
    eventOverlapThreshold: string | number;
    eventOverlapMode: "column" | "stack" | import("./types.js").CalendarEventOverlapMode;
    eventMore: boolean;
    eventMoreText: string;
    eventRipple: boolean | Record<string, any>;
    eventMarginBottom: number;
    categoryDays: string | number;
    categories: string | CalendarCategory[];
    maxDays: number;
    categoryHideDynamic: boolean;
    categoryShowAll: boolean;
    categoryForInvalid: string;
} & {
    end?: string | number | Date | undefined;
    firstDayOfWeek?: string | number | undefined;
    firstDayOfYear?: string | number | undefined;
    locale?: string | undefined;
    now?: string | undefined;
    eventTextColor?: string | import("./types.js").CalendarEventColorFunction | undefined;
    modelValue?: string | number | Date | undefined;
    categoryText?: string | CalendarCategoryTextFunction | undefined;
}, {
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
    days: import("vue").ComputedRef<CalendarTimestamp[]>;
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
    noEvents: import("vue").ComputedRef<boolean>;
    parsedEvents: import("vue").ComputedRef<CalendarEventParsed[]>;
    parsedEventOverlapThreshold: import("vue").ComputedRef<number>;
    eventTimedFunction: import("vue").ComputedRef<import("./types.js").CalendarEventTimedFunction>;
    eventCategoryFunction: import("vue").ComputedRef<import("./types.js").CalendarEventCategoryFunction>;
    eventTextColorFunction: import("vue").ComputedRef<import("./types.js").CalendarEventColorFunction>;
    eventNameFunction: import("vue").ComputedRef<import("./types.js").CalendarEventNameFunction>;
    eventModeFunction: import("vue").ComputedRef<import("./types.js").CalendarEventOverlapMode>;
    eventColorFunction: (e: CalendarEvent) => string | undefined;
    eventsRef: import("vue").Ref<HTMLElement[], HTMLElement[]>;
    updateEventVisibility: () => void;
    getEventsMap: () => {
        [date: string]: {
            parent: HTMLElement;
            more: HTMLElement | null;
            events: HTMLElement[];
        };
    };
    genDayEvent: ({ event }: import("./types.js").CalendarEventVisual, day: CalendarDaySlotScope) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    genTimedEvent: ({ event, left, width }: import("./types.js").CalendarEventVisual, day: CalendarDayBodySlotScope) => false | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    genEvent: (event: CalendarEventParsed, scopeInput: import("./composables/calendarWithEvents.js").VEventScopeInput, timedEvent: boolean, data: Record<string, unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    genName: (eventSummary: () => string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    genPlaceholder: (day: CalendarTimestamp) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    genMore: (day: CalendarDaySlotScope) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    getVisibleEvents: () => CalendarEventParsed[];
    isEventForCategory: (event: CalendarEventParsed, category: CalendarCategory) => boolean;
    getEventsForDay: (day: CalendarDaySlotScope) => CalendarEventParsed[];
    getEventsForDayAll: (day: CalendarDaySlotScope) => CalendarEventParsed[];
    getEventsForDayTimed: (day: CalendarDaySlotScope) => CalendarEventParsed[];
    getScopedSlots: () => any;
    lastStart: import("vue").Ref<{
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
    } | null, CalendarTimestamp | {
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
    } | null>;
    lastEnd: import("vue").Ref<{
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
    } | null, CalendarTimestamp | {
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
    } | null>;
    parsedCategoryDays: import("vue").ComputedRef<number>;
    renderProps: import("vue").ComputedRef<VCalendarRenderProps>;
    eventWeekdays: import("vue").ComputedRef<number[]>;
    categoryMode: import("vue").ComputedRef<boolean>;
    title: import("vue").ComputedRef<string>;
    monthLongFormatter: import("vue").ComputedRef<import("./types.js").CalendarFormatter>;
    monthShortFormatter: import("vue").ComputedRef<import("./types.js").CalendarFormatter>;
    parsedCategories: import("vue").ComputedRef<CalendarCategory[]>;
    checkChange: () => void;
    move: (amount?: number) => void;
    next: (amount?: number) => void;
    prev: (amount?: number) => void;
    getCategoryList: (categories: CalendarCategory[]) => CalendarCategory[];
} & Omit<Omit<{
    $: import("vue").ComponentInternalInstance;
    $data: {};
    $props: Partial<{
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
        shortWeekdays: boolean;
        shortIntervals: boolean;
        hideHeader: boolean;
    }> & Omit<{
        readonly start: string | number | Date;
        readonly end?: string | number | Date | undefined;
        readonly weekdays: string | number[];
        readonly firstDayOfWeek?: string | number | undefined;
        readonly firstDayOfYear?: string | number | undefined;
        readonly weekdayFormat: import("./types.js").CalendarFormatter;
        readonly dayFormat: import("./types.js").CalendarFormatter;
        readonly locale?: string | undefined;
        readonly now?: string | undefined;
        readonly type: "4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week";
        readonly maxDays: number;
        readonly intervalHeight: string | number;
        readonly intervalWidth: string | number;
        readonly intervalMinutes: string | number;
        readonly firstInterval: string | number;
        readonly firstTime?: import("./util/timestamp.js").VTime | undefined;
        readonly intervalCount: string | number;
        readonly intervalFormat: import("./types.js").CalendarFormatter;
        readonly intervalStyle: (interval: CalendarTimestamp) => import("vue").StyleValue;
        readonly showIntervalLabel: (interval: CalendarTimestamp) => boolean;
        readonly color?: string | undefined;
        readonly shortWeekdays: boolean;
        readonly shortIntervals: boolean;
        readonly hideHeader: boolean;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "dayFormat" | "firstInterval" | "hideHeader" | "intervalCount" | "intervalFormat" | "intervalHeight" | "intervalMinutes" | "intervalStyle" | "intervalWidth" | "maxDays" | "shortIntervals" | "shortWeekdays" | "showIntervalLabel" | "start" | "type" | "weekdayFormat" | "weekdays">;
    $attrs: {
        [x: string]: unknown;
    };
    $refs: {
        [x: string]: unknown;
    };
    $slots: Readonly<{
        [name: string]: import("vue").Slot<any> | undefined;
    }>;
    $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
    $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
    $host: Element | null;
    $emit: (event: string, ...args: any[]) => void;
    $el: any;
    $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        start: {
            type: (DateConstructor | NumberConstructor | StringConstructor)[];
            validate: typeof validateTimestamp;
            default: () => string;
        };
        end: {
            type: (DateConstructor | NumberConstructor | StringConstructor)[];
            validate: typeof validateTimestamp;
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
            validator: typeof validateTimestamp;
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
        color: StringConstructor;
        shortWeekdays: {
            type: BooleanConstructor;
            default: boolean;
        };
        shortIntervals: {
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
        getSlotScope: (timestamp: CalendarTimestamp) => CalendarDayBodySlotScope;
        scrollToTime: (time: import("./util/timestamp.js").VTime) => boolean;
        minutesToPixels: (minutes: number) => number;
        timeToY: (time: CalendarTimestamp | import("./util/timestamp.js").VTime, targetDateOrClamp?: boolean | CalendarTimestamp) => number | false;
        timeDelta: (time: CalendarTimestamp | import("./util/timestamp.js").VTime, targetDate?: CalendarTimestamp | undefined) => number | false;
        scrollPush: import("vue").Ref<number, number>;
        pane: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        init: () => void;
        onResize: () => void;
        getScrollPush: () => number;
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
        shortWeekdays: boolean;
        shortIntervals: boolean;
        hideHeader: boolean;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
        beforeCreate?: ((() => void)[] | (() => void)) | undefined;
        created?: ((() => void)[] | (() => void)) | undefined;
        beforeMount?: ((() => void)[] | (() => void)) | undefined;
        mounted?: ((() => void)[] | (() => void)) | undefined;
        beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
        updated?: ((() => void)[] | (() => void)) | undefined;
        activated?: ((() => void)[] | (() => void)) | undefined;
        deactivated?: ((() => void)[] | (() => void)) | undefined;
        beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
        beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
        destroyed?: ((() => void)[] | (() => void)) | undefined;
        unmounted?: ((() => void)[] | (() => void)) | undefined;
        renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
        renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
        errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
    };
    $forceUpdate: () => void;
    $nextTick: typeof import("vue").nextTick;
    $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
} & Readonly<{
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
    shortWeekdays: boolean;
    shortIntervals: boolean;
    hideHeader: boolean;
}> & Omit<Readonly<import("vue").ExtractPropTypes<{
    start: {
        type: (DateConstructor | NumberConstructor | StringConstructor)[];
        validate: typeof validateTimestamp;
        default: () => string;
    };
    end: {
        type: (DateConstructor | NumberConstructor | StringConstructor)[];
        validate: typeof validateTimestamp;
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
        validator: typeof validateTimestamp;
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
    color: StringConstructor;
    shortWeekdays: {
        type: BooleanConstructor;
        default: boolean;
    };
    shortIntervals: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideHeader: BooleanConstructor;
}>>, "bodyHeight" | "dayFormatter" | "days" | "effectiveWeekdays" | "firstMinute" | "getColorProps" | "getEndOfWeek" | "getFormatter" | "getRelativeClasses" | "getScrollPush" | "getSlotScope" | "getStartOfWeek" | "getTimestampAtEvent" | "getWeekNumber" | "init" | "intervalFormatter" | "intervalStyleDefault" | "intervals" | "locale" | "minutesToPixels" | "onResize" | "pane" | "parsedEnd" | "parsedFirstInterval" | "parsedFirstTime" | "parsedIntervalCount" | "parsedIntervalHeight" | "parsedIntervalMinutes" | "parsedStart" | "parsedValue" | "parsedWeekdays" | "scrollAreaRef" | "scrollPush" | "scrollToTime" | "showIntervalLabelDefault" | "timeDelta" | "timeToY" | "times" | "updateTimes" | "weekdayFormatter" | "weekdaySkips" | ("dayFormat" | "firstInterval" | "hideHeader" | "intervalCount" | "intervalFormat" | "intervalHeight" | "intervalMinutes" | "intervalStyle" | "intervalWidth" | "maxDays" | "shortIntervals" | "shortWeekdays" | "showIntervalLabel" | "start" | "type" | "weekdayFormat" | "weekdays")> & import("vue").ShallowUnwrapRef<{
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
    getSlotScope: (timestamp: CalendarTimestamp) => CalendarDayBodySlotScope;
    scrollToTime: (time: import("./util/timestamp.js").VTime) => boolean;
    minutesToPixels: (minutes: number) => number;
    timeToY: (time: CalendarTimestamp | import("./util/timestamp.js").VTime, targetDateOrClamp?: boolean | CalendarTimestamp) => number | false;
    timeDelta: (time: CalendarTimestamp | import("./util/timestamp.js").VTime, targetDate?: CalendarTimestamp | undefined) => number | false;
    scrollPush: import("vue").Ref<number, number>;
    pane: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
    init: () => void;
    onResize: () => void;
    getScrollPush: () => number;
}> & {} & import("vue").ComponentCustomProperties & {}, "color" | "end" | "firstDayOfWeek" | "firstDayOfYear" | "firstTime" | "locale" | "now" | ("dayFormat" | "firstInterval" | "hideHeader" | "intervalCount" | "intervalFormat" | "intervalHeight" | "intervalMinutes" | "intervalStyle" | "intervalWidth" | "maxDays" | "shortIntervals" | "shortWeekdays" | "showIntervalLabel" | "start" | "type" | "weekdayFormat" | "weekdays") | keyof import("vue").AllowedComponentProps | keyof import("vue").VNodeProps> | Omit<{
    $: import("vue").ComponentInternalInstance;
    $data: {};
    $props: Partial<{
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
    }> & Omit<{
        readonly start: string | number | Date;
        readonly end?: string | number | Date | undefined;
        readonly weekdays: string | number[];
        readonly firstDayOfWeek?: string | number | undefined;
        readonly firstDayOfYear?: string | number | undefined;
        readonly weekdayFormat: import("./types.js").CalendarFormatter;
        readonly dayFormat: import("./types.js").CalendarFormatter;
        readonly locale?: string | undefined;
        readonly now?: string | undefined;
        readonly type: "4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week";
        readonly maxDays: number;
        readonly intervalHeight: string | number;
        readonly intervalWidth: string | number;
        readonly intervalMinutes: string | number;
        readonly firstInterval: string | number;
        readonly firstTime?: import("./util/timestamp.js").VTime | undefined;
        readonly intervalCount: string | number;
        readonly intervalFormat: import("./types.js").CalendarFormatter;
        readonly intervalStyle: (interval: CalendarTimestamp) => import("vue").StyleValue;
        readonly showIntervalLabel: (interval: CalendarTimestamp) => boolean;
        readonly categories: string | CalendarCategory[];
        readonly categoryText?: string | CalendarCategoryTextFunction | undefined;
        readonly categoryForInvalid: string;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "categories" | "categoryForInvalid" | "dayFormat" | "firstInterval" | "intervalCount" | "intervalFormat" | "intervalHeight" | "intervalMinutes" | "intervalStyle" | "intervalWidth" | "maxDays" | "showIntervalLabel" | "start" | "type" | "weekdayFormat" | "weekdays">;
    $attrs: {
        [x: string]: unknown;
    };
    $refs: {
        [x: string]: unknown;
    };
    $slots: Readonly<{
        [name: string]: import("vue").Slot<any> | undefined;
    }>;
    $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
    $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
    $host: Element | null;
    $emit: (event: string, ...args: any[]) => void;
    $el: any;
    $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        start: {
            type: (DateConstructor | NumberConstructor | StringConstructor)[];
            validate: typeof validateTimestamp;
            default: () => string;
        };
        end: {
            type: (DateConstructor | NumberConstructor | StringConstructor)[];
            validate: typeof validateTimestamp;
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
            validator: typeof validateTimestamp;
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
        getSlotScope: (timestamp: CalendarTimestamp) => CalendarDayBodySlotScope;
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
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
        beforeCreate?: ((() => void)[] | (() => void)) | undefined;
        created?: ((() => void)[] | (() => void)) | undefined;
        beforeMount?: ((() => void)[] | (() => void)) | undefined;
        mounted?: ((() => void)[] | (() => void)) | undefined;
        beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
        updated?: ((() => void)[] | (() => void)) | undefined;
        activated?: ((() => void)[] | (() => void)) | undefined;
        deactivated?: ((() => void)[] | (() => void)) | undefined;
        beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
        beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
        destroyed?: ((() => void)[] | (() => void)) | undefined;
        unmounted?: ((() => void)[] | (() => void)) | undefined;
        renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
        renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
        errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
    };
    $forceUpdate: () => void;
    $nextTick: typeof import("vue").nextTick;
    $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
} & Readonly<{
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
}> & Omit<Readonly<import("vue").ExtractPropTypes<{
    start: {
        type: (DateConstructor | NumberConstructor | StringConstructor)[];
        validate: typeof validateTimestamp;
        default: () => string;
    };
    end: {
        type: (DateConstructor | NumberConstructor | StringConstructor)[];
        validate: typeof validateTimestamp;
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
        validator: typeof validateTimestamp;
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
}>>, "bodyHeight" | "dayFormatter" | "days" | "effectiveWeekdays" | "firstMinute" | "getColorProps" | "getEndOfWeek" | "getFormatter" | "getRelativeClasses" | "getSlotScope" | "getStartOfWeek" | "getTimestampAtEvent" | "getWeekNumber" | "intervalFormatter" | "intervalStyleDefault" | "intervals" | "locale" | "minutesToPixels" | "parsedCategories" | "parsedEnd" | "parsedFirstInterval" | "parsedFirstTime" | "parsedIntervalCount" | "parsedIntervalHeight" | "parsedIntervalMinutes" | "parsedStart" | "parsedValue" | "parsedWeekdays" | "scrollAreaRef" | "scrollToTime" | "showIntervalLabelDefault" | "timeDelta" | "timeToY" | "times" | "updateTimes" | "weekdayFormatter" | "weekdaySkips" | ("categories" | "categoryForInvalid" | "dayFormat" | "firstInterval" | "intervalCount" | "intervalFormat" | "intervalHeight" | "intervalMinutes" | "intervalStyle" | "intervalWidth" | "maxDays" | "showIntervalLabel" | "start" | "type" | "weekdayFormat" | "weekdays")> & import("vue").ShallowUnwrapRef<{
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
    getSlotScope: (timestamp: CalendarTimestamp) => CalendarDayBodySlotScope;
    scrollToTime: (time: import("./util/timestamp.js").VTime) => boolean;
    minutesToPixels: (minutes: number) => number;
    timeToY: (time: CalendarTimestamp | import("./util/timestamp.js").VTime, targetDateOrClamp?: boolean | CalendarTimestamp) => number | false;
    timeDelta: (time: CalendarTimestamp | import("./util/timestamp.js").VTime, targetDate?: CalendarTimestamp | undefined) => number | false;
    parsedCategories: import("vue").ComputedRef<CalendarCategory[]>;
}> & {} & import("vue").ComponentCustomProperties & {}, "categoryText" | "end" | "firstDayOfWeek" | "firstDayOfYear" | "firstTime" | "locale" | "now" | ("categories" | "categoryForInvalid" | "dayFormat" | "firstInterval" | "intervalCount" | "intervalFormat" | "intervalHeight" | "intervalMinutes" | "intervalStyle" | "intervalWidth" | "maxDays" | "showIntervalLabel" | "start" | "type" | "weekdayFormat" | "weekdays") | keyof import("vue").AllowedComponentProps | keyof import("vue").VNodeProps> | Omit<{
    $: import("vue").ComponentInternalInstance;
    $data: {};
    $props: Partial<{
        start: string | number | Date;
        weekdays: string | number[];
        weekdayFormat: import("./types.js").CalendarFormatter;
        dayFormat: import("./types.js").CalendarFormatter;
        type: "4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week";
        minWeeks: number;
        showWeek: boolean;
        shortWeekdays: boolean;
        showMonthOnFirst: boolean;
        shortMonths: boolean;
        hideHeader: boolean;
    }> & Omit<{
        readonly start: string | number | Date;
        readonly end?: string | number | Date | undefined;
        readonly weekdays: string | number[];
        readonly firstDayOfWeek?: string | number | undefined;
        readonly firstDayOfYear?: string | number | undefined;
        readonly weekdayFormat: import("./types.js").CalendarFormatter;
        readonly dayFormat: import("./types.js").CalendarFormatter;
        readonly locale?: string | undefined;
        readonly now?: string | undefined;
        readonly type: "4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week";
        readonly minWeeks: number;
        readonly monthFormat?: import("./types.js").CalendarFormatter | undefined;
        readonly showWeek: boolean;
        readonly color?: string | undefined;
        readonly shortWeekdays: boolean;
        readonly showMonthOnFirst: boolean;
        readonly shortMonths: boolean;
        readonly hideHeader: boolean;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "dayFormat" | "hideHeader" | "minWeeks" | "shortMonths" | "shortWeekdays" | "showMonthOnFirst" | "showWeek" | "start" | "type" | "weekdayFormat" | "weekdays">;
    $attrs: {
        [x: string]: unknown;
    };
    $refs: {
        [x: string]: unknown;
    };
    $slots: Readonly<{
        [name: string]: import("vue").Slot<any> | undefined;
    }>;
    $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
    $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null;
    $host: Element | null;
    $emit: (event: string, ...args: any[]) => void;
    $el: any;
    $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        start: {
            type: (DateConstructor | NumberConstructor | StringConstructor)[];
            validate: typeof validateTimestamp;
            default: () => string;
        };
        end: {
            type: (DateConstructor | NumberConstructor | StringConstructor)[];
            validate: typeof validateTimestamp;
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
            validator: typeof validateTimestamp;
        };
        type: {
            type: PropType<"4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week">;
            default: string;
        };
        minWeeks: {
            validate: typeof import("./util/timestamp.js").validateNumber;
            default: number;
        };
        monthFormat: PropType<import("./types.js").CalendarFormatter>;
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
        days: import("vue").ComputedRef<CalendarTimestamp[]>;
        todayWeek: import("vue").ComputedRef<CalendarTimestamp[]>;
        monthFormatter: import("vue").ComputedRef<import("./types.js").CalendarFormatter>;
        isOutside: (day: CalendarTimestamp) => boolean;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        start: string | number | Date;
        weekdays: string | number[];
        weekdayFormat: import("./types.js").CalendarFormatter;
        dayFormat: import("./types.js").CalendarFormatter;
        type: "4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week";
        minWeeks: number;
        showWeek: boolean;
        shortWeekdays: boolean;
        showMonthOnFirst: boolean;
        shortMonths: boolean;
        hideHeader: boolean;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
        beforeCreate?: ((() => void)[] | (() => void)) | undefined;
        created?: ((() => void)[] | (() => void)) | undefined;
        beforeMount?: ((() => void)[] | (() => void)) | undefined;
        mounted?: ((() => void)[] | (() => void)) | undefined;
        beforeUpdate?: ((() => void)[] | (() => void)) | undefined;
        updated?: ((() => void)[] | (() => void)) | undefined;
        activated?: ((() => void)[] | (() => void)) | undefined;
        deactivated?: ((() => void)[] | (() => void)) | undefined;
        beforeDestroy?: ((() => void)[] | (() => void)) | undefined;
        beforeUnmount?: ((() => void)[] | (() => void)) | undefined;
        destroyed?: ((() => void)[] | (() => void)) | undefined;
        unmounted?: ((() => void)[] | (() => void)) | undefined;
        renderTracked?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
        renderTriggered?: (((e: import("vue").DebuggerEvent) => void)[] | ((e: import("vue").DebuggerEvent) => void)) | undefined;
        errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)[] | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import("vue").ComponentProvideOptions>, {}, {}, "", {}, any> | null, info: string) => void | boolean)) | undefined;
    };
    $forceUpdate: () => void;
    $nextTick: typeof import("vue").nextTick;
    $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: import("@vue/reactivity").OnCleanup) => any : (args_0: any, args_1: any, args_2: import("@vue/reactivity").OnCleanup) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
} & Readonly<{
    start: string | number | Date;
    weekdays: string | number[];
    weekdayFormat: import("./types.js").CalendarFormatter;
    dayFormat: import("./types.js").CalendarFormatter;
    type: "4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week";
    minWeeks: number;
    showWeek: boolean;
    shortWeekdays: boolean;
    showMonthOnFirst: boolean;
    shortMonths: boolean;
    hideHeader: boolean;
}> & Omit<Readonly<import("vue").ExtractPropTypes<{
    start: {
        type: (DateConstructor | NumberConstructor | StringConstructor)[];
        validate: typeof validateTimestamp;
        default: () => string;
    };
    end: {
        type: (DateConstructor | NumberConstructor | StringConstructor)[];
        validate: typeof validateTimestamp;
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
        validator: typeof validateTimestamp;
    };
    type: {
        type: PropType<"4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week">;
        default: string;
    };
    minWeeks: {
        validate: typeof import("./util/timestamp.js").validateNumber;
        default: number;
    };
    monthFormat: PropType<import("./types.js").CalendarFormatter>;
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
}>>, "dayFormatter" | "days" | "effectiveWeekdays" | "getColorProps" | "getEndOfWeek" | "getFormatter" | "getRelativeClasses" | "getStartOfWeek" | "getWeekNumber" | "isOutside" | "locale" | "monthFormatter" | "parsedEnd" | "parsedStart" | "parsedValue" | "parsedWeekdays" | "times" | "todayWeek" | "updateTimes" | "weekdayFormatter" | "weekdaySkips" | ("dayFormat" | "hideHeader" | "minWeeks" | "shortMonths" | "shortWeekdays" | "showMonthOnFirst" | "showWeek" | "start" | "type" | "weekdayFormat" | "weekdays")> & import("vue").ShallowUnwrapRef<{
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
    days: import("vue").ComputedRef<CalendarTimestamp[]>;
    todayWeek: import("vue").ComputedRef<CalendarTimestamp[]>;
    monthFormatter: import("vue").ComputedRef<import("./types.js").CalendarFormatter>;
    isOutside: (day: CalendarTimestamp) => boolean;
}> & {} & import("vue").ComponentCustomProperties & {}, "color" | "end" | "firstDayOfWeek" | "firstDayOfYear" | "locale" | "monthFormat" | "now" | ("dayFormat" | "hideHeader" | "minWeeks" | "shortMonths" | "shortWeekdays" | "showMonthOnFirst" | "showWeek" | "start" | "type" | "weekdayFormat" | "weekdays") | keyof import("vue").AllowedComponentProps | keyof import("vue").VNodeProps>, `$${any}`> & {
    _allExposed: {
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
        getSlotScope: (timestamp: CalendarTimestamp) => CalendarDayBodySlotScope;
        scrollToTime: (time: import("./util/timestamp.js").VTime) => boolean;
        minutesToPixels: (minutes: number) => number;
        timeToY: (time: CalendarTimestamp | import("./util/timestamp.js").VTime, targetDateOrClamp?: boolean | CalendarTimestamp) => number | false;
        timeDelta: (time: CalendarTimestamp | import("./util/timestamp.js").VTime, targetDate?: CalendarTimestamp | undefined) => number | false;
        scrollPush: import("vue").Ref<number, number>;
        pane: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        init: () => void;
        onResize: () => void;
        getScrollPush: () => number;
    } | {
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
        getSlotScope: (timestamp: CalendarTimestamp) => CalendarDayBodySlotScope;
        scrollToTime: (time: import("./util/timestamp.js").VTime) => boolean;
        minutesToPixels: (minutes: number) => number;
        timeToY: (time: CalendarTimestamp | import("./util/timestamp.js").VTime, targetDateOrClamp?: boolean | CalendarTimestamp) => number | false;
        timeDelta: (time: CalendarTimestamp | import("./util/timestamp.js").VTime, targetDate?: CalendarTimestamp | undefined) => number | false;
        parsedCategories: import("vue").ComputedRef<CalendarCategory[]>;
    } | {
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
        days: import("vue").ComputedRef<CalendarTimestamp[]>;
        todayWeek: import("vue").ComputedRef<CalendarTimestamp[]>;
        monthFormatter: import("vue").ComputedRef<import("./types.js").CalendarFormatter>;
        isOutside: (day: CalendarTimestamp) => boolean;
    } | {
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
        days: import("vue").ComputedRef<CalendarTimestamp[]>;
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
        noEvents: import("vue").ComputedRef<boolean>;
        parsedEvents: import("vue").ComputedRef<CalendarEventParsed[]>;
        parsedEventOverlapThreshold: import("vue").ComputedRef<number>;
        eventTimedFunction: import("vue").ComputedRef<import("./types.js").CalendarEventTimedFunction>;
        eventCategoryFunction: import("vue").ComputedRef<import("./types.js").CalendarEventCategoryFunction>;
        eventTextColorFunction: import("vue").ComputedRef<import("./types.js").CalendarEventColorFunction>;
        eventNameFunction: import("vue").ComputedRef<import("./types.js").CalendarEventNameFunction>;
        eventModeFunction: import("vue").ComputedRef<import("./types.js").CalendarEventOverlapMode>;
        eventColorFunction: (e: CalendarEvent) => string | undefined;
        eventsRef: import("vue").Ref<HTMLElement[], HTMLElement[]>;
        updateEventVisibility: () => void;
        getEventsMap: () => {
            [date: string]: {
                parent: HTMLElement;
                more: HTMLElement | null;
                events: HTMLElement[];
            };
        };
        genDayEvent: ({ event }: import("./types.js").CalendarEventVisual, day: CalendarDaySlotScope) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>;
        genTimedEvent: ({ event, left, width }: import("./types.js").CalendarEventVisual, day: CalendarDayBodySlotScope) => false | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>;
        genEvent: (event: CalendarEventParsed, scopeInput: import("./composables/calendarWithEvents.js").VEventScopeInput, timedEvent: boolean, data: Record<string, unknown>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>;
        genName: (eventSummary: () => string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>;
        genPlaceholder: (day: CalendarTimestamp) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>;
        genMore: (day: CalendarDaySlotScope) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>;
        getVisibleEvents: () => CalendarEventParsed[];
        isEventForCategory: (event: CalendarEventParsed, category: CalendarCategory) => boolean;
        getEventsForDay: (day: CalendarDaySlotScope) => CalendarEventParsed[];
        getEventsForDayAll: (day: CalendarDaySlotScope) => CalendarEventParsed[];
        getEventsForDayTimed: (day: CalendarDaySlotScope) => CalendarEventParsed[];
        getScopedSlots: () => any;
        lastStart: import("vue").Ref<{
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
        } | null, CalendarTimestamp | {
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
        } | null>;
        lastEnd: import("vue").Ref<{
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
        } | null, CalendarTimestamp | {
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
        } | null>;
        parsedCategoryDays: import("vue").ComputedRef<number>;
        renderProps: import("vue").ComputedRef<VCalendarRenderProps>;
        eventWeekdays: import("vue").ComputedRef<number[]>;
        categoryMode: import("vue").ComputedRef<boolean>;
        title: import("vue").ComputedRef<string>;
        monthLongFormatter: import("vue").ComputedRef<import("./types.js").CalendarFormatter>;
        monthShortFormatter: import("vue").ComputedRef<import("./types.js").CalendarFormatter>;
        parsedCategories: import("vue").ComputedRef<CalendarCategory[]>;
        checkChange: () => void;
        move: (amount?: number) => void;
        next: (amount?: number) => void;
        prev: (amount?: number) => void;
        getCategoryList: (categories: CalendarCategory[]) => CalendarCategory[];
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<Record<string, any>, "$children" | "v-slot:category" | "v-slot:day-body" | "v-slot:day-header" | "v-slot:day-label" | "v-slot:day-label-header" | "v-slot:day-month" | "v-slot:interval-header" | "v-slots" | `${Uncapitalize<Capitalize<string>>}:date` | `${Uncapitalize<Capitalize<string>>}:day` | `${Uncapitalize<Capitalize<string>>}:dayCategory` | `${Uncapitalize<Capitalize<string>>}:event` | `${Uncapitalize<Capitalize<string>>}:interval` | `${Uncapitalize<Capitalize<string>>}:more` | `${Uncapitalize<Capitalize<string>>}:time` | `${Uncapitalize<Capitalize<string>>}:timeCategory`>, string, {
    start: string | number | Date;
    weekdays: string | number[];
    weekdayFormat: import("./types.js").CalendarFormatter;
    dayFormat: import("./types.js").CalendarFormatter;
    type: "4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week";
    events: CalendarEvent[];
    eventStart: string;
    eventEnd: string;
    eventTimed: string | import("./types.js").CalendarEventTimedFunction;
    eventCategory: string | import("./types.js").CalendarEventCategoryFunction;
    eventHeight: number;
    eventColor: string | import("./types.js").CalendarEventColorFunction;
    eventName: string | import("./types.js").CalendarEventNameFunction;
    eventOverlapThreshold: string | number;
    eventOverlapMode: "column" | "stack" | import("./types.js").CalendarEventOverlapMode;
    eventMore: boolean;
    eventMoreText: string;
    eventRipple: boolean | Record<string, any>;
    eventMarginBottom: number;
    categoryDays: string | number;
    categories: string | CalendarCategory[];
    maxDays: number;
    categoryHideDynamic: boolean;
    categoryShowAll: boolean;
    categoryForInvalid: string;
}, {}, string, import("vue").SlotsType<Partial<{
    category: (arg: CalendarDayCategorySlotScope) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    day: (arg: DaySlotScope) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "day-body": (arg: CalendarDayBodySlotScope) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "day-header": (arg: DayHeaderSlotScope) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "day-label": (arg: CalendarTimestamp) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "day-label-header": (arg: CalendarTimestamp) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "day-month": (arg: CalendarTimestamp) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    event: (arg: EventSlotScope) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    interval: (arg: CalendarDayCategorySlotScope) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    "interval-header": () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new (props: {
    [key: `on${Capitalize<string>}:date`]: (args_0: Event, args_1: CalendarTimestamp) => void;
    [key: `on${Capitalize<string>}:dayCategory`]: (args_0: Event, args_1: CalendarDayCategorySlotScope) => void;
    [key: `on${Capitalize<string>}:day`]: (args_0: Event, args_1: CalendarDayBodySlotScope) => void;
    [key: `on${Capitalize<string>}:event`]: (args_0: Event, args_1: EventSlotScope) => void;
    [key: `on${Capitalize<string>}:interval`]: (args_0: Event, args_1: CalendarTimestamp) => void;
    [key: `on${Capitalize<string>}:more`]: (args_0: Event, args_1: CalendarDaySlotScope) => void;
    [key: `on${Capitalize<string>}:timeCategory`]: (args_0: Event, args_1: CalendarDayCategorySlotScope) => void;
    [key: `on${Capitalize<string>}:time`]: (args_0: Event, args_1: CalendarDayBodySlotScope) => void;
}, slots: {
    category: CalendarDayCategorySlotScope;
    day: DaySlotScope;
    "day-body": CalendarDayBodySlotScope;
    "day-header": DayHeaderSlotScope;
    "day-label": CalendarTimestamp;
    "day-label-header": CalendarTimestamp;
    "day-month": CalendarTimestamp;
    event: EventSlotScope;
    interval: CalendarDayCategorySlotScope;
    "interval-header": never;
}) => GenericProps<{
    [key: `on${Capitalize<string>}:date`]: (args_0: Event, args_1: CalendarTimestamp) => void;
    [key: `on${Capitalize<string>}:dayCategory`]: (args_0: Event, args_1: CalendarDayCategorySlotScope) => void;
    [key: `on${Capitalize<string>}:day`]: (args_0: Event, args_1: CalendarDayBodySlotScope) => void;
    [key: `on${Capitalize<string>}:event`]: (args_0: Event, args_1: EventSlotScope) => void;
    [key: `on${Capitalize<string>}:interval`]: (args_0: Event, args_1: CalendarTimestamp) => void;
    [key: `on${Capitalize<string>}:more`]: (args_0: Event, args_1: CalendarDaySlotScope) => void;
    [key: `on${Capitalize<string>}:timeCategory`]: (args_0: Event, args_1: CalendarDayCategorySlotScope) => void;
    [key: `on${Capitalize<string>}:time`]: (args_0: Event, args_1: CalendarDayBodySlotScope) => void;
}, {
    category: CalendarDayCategorySlotScope;
    day: DaySlotScope;
    "day-body": CalendarDayBodySlotScope;
    "day-header": DayHeaderSlotScope;
    "day-label": CalendarTimestamp;
    "day-label-header": CalendarTimestamp;
    "day-month": CalendarTimestamp;
    event: EventSlotScope;
    interval: CalendarDayCategorySlotScope;
    "interval-header": never;
}>) & import("../../util/index.js").FilterPropsOptions<{
    start: {
        type: (DateConstructor | NumberConstructor | StringConstructor)[];
        validate: typeof validateTimestamp;
        default: () => string;
    };
    end: {
        type: (DateConstructor | NumberConstructor | StringConstructor)[];
        validate: typeof validateTimestamp;
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
        validator: typeof validateTimestamp;
    };
    type: {
        type: PropType<"4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week">;
        default: string;
    };
    events: {
        type: PropType<CalendarEvent[]>;
        default: () => never[];
    };
    eventStart: {
        type: StringConstructor;
        default: string;
    };
    eventEnd: {
        type: StringConstructor;
        default: string;
    };
    eventTimed: {
        type: PropType<string | import("./types.js").CalendarEventTimedFunction>;
        default: string;
    };
    eventCategory: {
        type: PropType<string | import("./types.js").CalendarEventCategoryFunction>;
        default: string;
    };
    eventHeight: {
        type: NumberConstructor;
        default: number;
    };
    eventColor: {
        type: PropType<string | import("./types.js").CalendarEventColorFunction>;
        default: string;
    };
    eventTextColor: {
        type: PropType<string | import("./types.js").CalendarEventColorFunction>;
    };
    eventName: {
        type: PropType<string | import("./types.js").CalendarEventNameFunction>;
        default: string;
    };
    eventOverlapThreshold: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    eventOverlapMode: {
        type: PropType<"column" | "stack" | import("./types.js").CalendarEventOverlapMode>;
        default: string;
        validate: (mode: any) => boolean;
    };
    eventMore: {
        type: BooleanConstructor;
        default: boolean;
    };
    eventMoreText: {
        type: StringConstructor;
        default: string;
    };
    eventRipple: {
        type: (BooleanConstructor | ObjectConstructor)[];
        default: null;
    };
    eventMarginBottom: {
        type: NumberConstructor;
        default: number;
    };
    modelValue: {
        type: PropType<string | number | Date>;
        validate: typeof validateTimestamp;
    };
    categoryDays: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validate: (x: any) => boolean;
    };
    categories: {
        type: PropType<string | CalendarCategory[]>;
        default: string;
    };
    categoryText: {
        type: PropType<string | CalendarCategoryTextFunction>;
    };
    maxDays: {
        type: NumberConstructor;
        default: number;
    };
    categoryHideDynamic: {
        type: BooleanConstructor;
    };
    categoryShowAll: {
        type: BooleanConstructor;
    };
    categoryForInvalid: {
        type: StringConstructor;
        default: string;
    };
}, import("vue").ExtractPropTypes<{
    start: {
        type: (DateConstructor | NumberConstructor | StringConstructor)[];
        validate: typeof validateTimestamp;
        default: () => string;
    };
    end: {
        type: (DateConstructor | NumberConstructor | StringConstructor)[];
        validate: typeof validateTimestamp;
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
        validator: typeof validateTimestamp;
    };
    type: {
        type: PropType<"4day" | "category" | "custom-daily" | "custom-weekly" | "day" | "month" | "week">;
        default: string;
    };
    events: {
        type: PropType<CalendarEvent[]>;
        default: () => never[];
    };
    eventStart: {
        type: StringConstructor;
        default: string;
    };
    eventEnd: {
        type: StringConstructor;
        default: string;
    };
    eventTimed: {
        type: PropType<string | import("./types.js").CalendarEventTimedFunction>;
        default: string;
    };
    eventCategory: {
        type: PropType<string | import("./types.js").CalendarEventCategoryFunction>;
        default: string;
    };
    eventHeight: {
        type: NumberConstructor;
        default: number;
    };
    eventColor: {
        type: PropType<string | import("./types.js").CalendarEventColorFunction>;
        default: string;
    };
    eventTextColor: {
        type: PropType<string | import("./types.js").CalendarEventColorFunction>;
    };
    eventName: {
        type: PropType<string | import("./types.js").CalendarEventNameFunction>;
        default: string;
    };
    eventOverlapThreshold: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    eventOverlapMode: {
        type: PropType<"column" | "stack" | import("./types.js").CalendarEventOverlapMode>;
        default: string;
        validate: (mode: any) => boolean;
    };
    eventMore: {
        type: BooleanConstructor;
        default: boolean;
    };
    eventMoreText: {
        type: StringConstructor;
        default: string;
    };
    eventRipple: {
        type: (BooleanConstructor | ObjectConstructor)[];
        default: null;
    };
    eventMarginBottom: {
        type: NumberConstructor;
        default: number;
    };
    modelValue: {
        type: PropType<string | number | Date>;
        validate: typeof validateTimestamp;
    };
    categoryDays: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validate: (x: any) => boolean;
    };
    categories: {
        type: PropType<string | CalendarCategory[]>;
        default: string;
    };
    categoryText: {
        type: PropType<string | CalendarCategoryTextFunction>;
    };
    maxDays: {
        type: NumberConstructor;
        default: number;
    };
    categoryHideDynamic: {
        type: BooleanConstructor;
    };
    categoryShowAll: {
        type: BooleanConstructor;
    };
    categoryForInvalid: {
        type: StringConstructor;
        default: string;
    };
}>>;
export type VCalendar = InstanceType<typeof VCalendar>;

