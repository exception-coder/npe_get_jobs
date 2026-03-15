// Styles

// Types
import type { PropType, VNode } from 'vue';
import type { CalendarBaseProps } from './calendarBase.js';
import type { CalendarCategory, CalendarDayBodySlotScope, CalendarDaySlotScope, CalendarEvent, CalendarEventCategoryFunction, CalendarEventColorFunction, CalendarEventNameFunction, CalendarEventOverlapMode, CalendarEventParsed, CalendarEventTimedFunction, CalendarEventVisual, CalendarTimestamp } from '../types.js';
type VDailyEventsMap = {
    [date: string]: {
        parent: HTMLElement;
        more: HTMLElement | null;
        events: HTMLElement[];
    };
};
export interface VEventScopeInput {
    eventParsed: CalendarEventParsed;
    day: CalendarDaySlotScope;
    start: boolean;
    end: boolean;
    timed: boolean;
}
export declare const makeCalendarWithEventsProps: <Defaults extends {
    events?: unknown;
    eventStart?: unknown;
    eventEnd?: unknown;
    eventTimed?: unknown;
    eventCategory?: unknown;
    eventHeight?: unknown;
    eventColor?: unknown;
    eventTextColor?: unknown;
    eventName?: unknown;
    eventOverlapThreshold?: unknown;
    eventOverlapMode?: unknown;
    eventMore?: unknown;
    eventMoreText?: unknown;
    eventRipple?: unknown;
    eventMarginBottom?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    events: unknown extends Defaults["events"] ? {
        type: PropType<CalendarEvent[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<CalendarEvent[]>;
        default: () => never[];
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["events"] ? CalendarEvent[] : CalendarEvent[] | Defaults["events"]>;
        default: unknown extends Defaults["events"] ? CalendarEvent[] : CalendarEvent[] | Defaults["events"];
    };
    eventStart: unknown extends Defaults["eventStart"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["eventStart"] ? string : string | Defaults["eventStart"]>;
        default: unknown extends Defaults["eventStart"] ? string : string | Defaults["eventStart"];
    };
    eventEnd: unknown extends Defaults["eventEnd"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["eventEnd"] ? string : string | Defaults["eventEnd"]>;
        default: unknown extends Defaults["eventEnd"] ? string : string | Defaults["eventEnd"];
    };
    eventTimed: unknown extends Defaults["eventTimed"] ? {
        type: PropType<string | CalendarEventTimedFunction>;
        default: string;
    } : Omit<{
        type: PropType<string | CalendarEventTimedFunction>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["eventTimed"] ? string | CalendarEventTimedFunction : string | CalendarEventTimedFunction | Defaults["eventTimed"]>;
        default: unknown extends Defaults["eventTimed"] ? string | CalendarEventTimedFunction : Defaults["eventTimed"] | NonNullable<string | CalendarEventTimedFunction>;
    };
    eventCategory: unknown extends Defaults["eventCategory"] ? {
        type: PropType<string | CalendarEventCategoryFunction>;
        default: string;
    } : Omit<{
        type: PropType<string | CalendarEventCategoryFunction>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["eventCategory"] ? string | CalendarEventCategoryFunction : string | CalendarEventCategoryFunction | Defaults["eventCategory"]>;
        default: unknown extends Defaults["eventCategory"] ? string | CalendarEventCategoryFunction : Defaults["eventCategory"] | NonNullable<string | CalendarEventCategoryFunction>;
    };
    eventHeight: unknown extends Defaults["eventHeight"] ? {
        type: NumberConstructor;
        default: number;
    } : Omit<{
        type: NumberConstructor;
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["eventHeight"] ? number : number | Defaults["eventHeight"]>;
        default: unknown extends Defaults["eventHeight"] ? number : number | Defaults["eventHeight"];
    };
    eventColor: unknown extends Defaults["eventColor"] ? {
        type: PropType<string | CalendarEventColorFunction>;
        default: string;
    } : Omit<{
        type: PropType<string | CalendarEventColorFunction>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["eventColor"] ? string | CalendarEventColorFunction : string | CalendarEventColorFunction | Defaults["eventColor"]>;
        default: unknown extends Defaults["eventColor"] ? string | CalendarEventColorFunction : Defaults["eventColor"] | NonNullable<string | CalendarEventColorFunction>;
    };
    eventTextColor: unknown extends Defaults["eventTextColor"] ? {
        type: PropType<string | CalendarEventColorFunction>;
    } : Omit<{
        type: PropType<string | CalendarEventColorFunction>;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["eventTextColor"] ? string | CalendarEventColorFunction : string | CalendarEventColorFunction | Defaults["eventTextColor"]>;
        default: unknown extends Defaults["eventTextColor"] ? string | CalendarEventColorFunction : Defaults["eventTextColor"] | NonNullable<string | CalendarEventColorFunction>;
    };
    eventName: unknown extends Defaults["eventName"] ? {
        type: PropType<string | CalendarEventNameFunction>;
        default: string;
    } : Omit<{
        type: PropType<string | CalendarEventNameFunction>;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["eventName"] ? string | CalendarEventNameFunction : string | CalendarEventNameFunction | Defaults["eventName"]>;
        default: unknown extends Defaults["eventName"] ? string | CalendarEventNameFunction : Defaults["eventName"] | NonNullable<string | CalendarEventNameFunction>;
    };
    eventOverlapThreshold: unknown extends Defaults["eventOverlapThreshold"] ? {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    } : Omit<{
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["eventOverlapThreshold"] ? string | number : string | number | Defaults["eventOverlapThreshold"]>;
        default: unknown extends Defaults["eventOverlapThreshold"] ? string | number : Defaults["eventOverlapThreshold"] | NonNullable<string | number>;
    };
    eventOverlapMode: unknown extends Defaults["eventOverlapMode"] ? {
        type: PropType<"column" | "stack" | CalendarEventOverlapMode>;
        default: string;
        validate: (mode: any) => boolean;
    } : Omit<{
        type: PropType<"column" | "stack" | CalendarEventOverlapMode>;
        default: string;
        validate: (mode: any) => boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["eventOverlapMode"] ? "column" | "stack" | CalendarEventOverlapMode : "column" | "stack" | CalendarEventOverlapMode | Defaults["eventOverlapMode"]>;
        default: unknown extends Defaults["eventOverlapMode"] ? "column" | "stack" | CalendarEventOverlapMode : Defaults["eventOverlapMode"] | NonNullable<"column" | "stack" | CalendarEventOverlapMode>;
    };
    eventMore: unknown extends Defaults["eventMore"] ? {
        type: BooleanConstructor;
        default: boolean;
    } : Omit<{
        type: BooleanConstructor;
        default: boolean;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["eventMore"] ? boolean : boolean | Defaults["eventMore"]>;
        default: unknown extends Defaults["eventMore"] ? boolean : boolean | Defaults["eventMore"];
    };
    eventMoreText: unknown extends Defaults["eventMoreText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["eventMoreText"] ? string : string | Defaults["eventMoreText"]>;
        default: unknown extends Defaults["eventMoreText"] ? string : string | Defaults["eventMoreText"];
    };
    eventRipple: unknown extends Defaults["eventRipple"] ? {
        type: (BooleanConstructor | ObjectConstructor)[];
        default: null;
    } : Omit<{
        type: (BooleanConstructor | ObjectConstructor)[];
        default: null;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["eventRipple"] ? boolean | Record<string, any> : boolean | Record<string, any> | Defaults["eventRipple"]>;
        default: unknown extends Defaults["eventRipple"] ? boolean | Record<string, any> : Defaults["eventRipple"] | NonNullable<boolean | Record<string, any>>;
    };
    eventMarginBottom: unknown extends Defaults["eventMarginBottom"] ? {
        type: NumberConstructor;
        default: number;
    } : Omit<{
        type: NumberConstructor;
        default: number;
    }, "default" | "type"> & {
        type: PropType<unknown extends Defaults["eventMarginBottom"] ? number : number | Defaults["eventMarginBottom"]>;
        default: unknown extends Defaults["eventMarginBottom"] ? number : number | Defaults["eventMarginBottom"];
    };
};
interface CalendarWithEventsProps extends CalendarBaseProps {
    events: CalendarEvent[];
    eventStart: string;
    eventEnd: string;
    eventTimed: string | CalendarEventTimedFunction;
    eventCategory: string | CalendarEventCategoryFunction;
    eventHeight: number;
    eventColor: string | CalendarEventColorFunction;
    eventTextColor: string | CalendarEventColorFunction | undefined;
    eventName: string | CalendarEventNameFunction;
    eventOverlapThreshold: string | number;
    eventOverlapMode: string | CalendarEventOverlapMode;
    eventMore: boolean;
    eventMoreText: string;
    eventRipple: boolean | object | null | undefined;
    eventMarginBottom: number;
    type: 'month' | 'week' | 'day' | '4day' | 'custom-weekly' | 'custom-daily' | 'category';
}
export declare function useCalendarWithEvents(props: CalendarWithEventsProps, slots: any, attrs: any): {
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
    dayFormatter: import("vue").ComputedRef<import("../types.js").CalendarFormatter>;
    weekdayFormatter: import("vue").ComputedRef<import("../types.js").CalendarFormatter>;
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
    getFormatter: (options: Intl.DateTimeFormatOptions) => import("../types.js").CalendarFormatter;
    updateTimes: () => void;
    noEvents: import("vue").ComputedRef<boolean>;
    parsedEvents: import("vue").ComputedRef<CalendarEventParsed[]>;
    parsedEventOverlapThreshold: import("vue").ComputedRef<number>;
    eventTimedFunction: import("vue").ComputedRef<CalendarEventTimedFunction>;
    eventCategoryFunction: import("vue").ComputedRef<CalendarEventCategoryFunction>;
    eventTextColorFunction: import("vue").ComputedRef<CalendarEventColorFunction>;
    eventNameFunction: import("vue").ComputedRef<CalendarEventNameFunction>;
    eventModeFunction: import("vue").ComputedRef<CalendarEventOverlapMode>;
    eventWeekdays: import("vue").ComputedRef<number[]>;
    categoryMode: import("vue").ComputedRef<boolean>;
    eventColorFunction: (e: CalendarEvent) => string | undefined;
    eventsRef: import("vue").Ref<HTMLElement[], HTMLElement[]>;
    updateEventVisibility: () => void;
    getEventsMap: () => VDailyEventsMap;
    genDayEvent: ({ event }: CalendarEventVisual, day: CalendarDaySlotScope) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    genTimedEvent: ({ event, left, width }: CalendarEventVisual, day: CalendarDayBodySlotScope) => false | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    genEvent: (event: CalendarEventParsed, scopeInput: VEventScopeInput, timedEvent: boolean, data: Record<string, unknown>) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    genName: (eventSummary: () => string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    genPlaceholder: (day: CalendarTimestamp) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    genMore: (day: CalendarDaySlotScope) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    getVisibleEvents: () => CalendarEventParsed[];
    isEventForCategory: (event: CalendarEventParsed, category: CalendarCategory) => boolean;
    getEventsForDay: (day: CalendarDaySlotScope) => CalendarEventParsed[];
    getEventsForDayAll: (day: CalendarDaySlotScope) => CalendarEventParsed[];
    getEventsForDayTimed: (day: CalendarDaySlotScope) => CalendarEventParsed[];
    getScopedSlots: () => any;
};

