// Types
import type { CalendarTimestamp } from '../types.js';
export declare function useTimes(props: {
    now: string | undefined;
}): {
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
    parsedNow: import("vue").ComputedRef<CalendarTimestamp | null>;
    updateTimes: () => void;
    setPresent: () => void;
    getNow: () => CalendarTimestamp;
    updateDay: (now: CalendarTimestamp, target: CalendarTimestamp) => void;
    updateTime: (now: CalendarTimestamp, target: CalendarTimestamp) => void;
};
