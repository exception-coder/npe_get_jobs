// Types
import type { InjectionKey } from 'vue';
import type { DateAdapter } from './DateAdapter.js';
import type { LocaleInstance } from '../locale.js';
export interface DateInstance extends DateModule.InternalAdapter {
    locale?: any;
}
/** Supports module augmentation to specify date adapter types */
export declare namespace DateModule {
    interface Adapter {
    }
    export type InternalAdapter = {} extends Adapter ? DateAdapter : Adapter;

}
export type InternalDateOptions = {
    adapter: (new (options: {
        locale: any;
        formats?: any;
    }) => DateInstance) | DateInstance;
    formats?: Record<string, any>;
    locale: Record<string, any>;
};
export type DateOptions = Partial<InternalDateOptions>;
export declare const DateOptionsSymbol: InjectionKey<InternalDateOptions>;
export declare const DateAdapterSymbol: InjectionKey<DateInstance>;
export declare function createDate(options: DateOptions | undefined, locale: LocaleInstance): {
    options: InternalDateOptions;
    instance: {
        date: (value?: any) => unknown;
        format: (date: unknown, formatString: string) => string;
        toJsDate: (value: unknown) => Date;
        parseISO: (date: string) => unknown;
        toISO: (date: unknown) => string;
        startOfDay: (date: unknown) => unknown;
        endOfDay: (date: unknown) => unknown;
        startOfWeek: (date: unknown, firstDayOfWeek?: string | number | undefined) => unknown;
        endOfWeek: (date: unknown) => unknown;
        startOfMonth: (date: unknown) => unknown;
        endOfMonth: (date: unknown) => unknown;
        startOfYear: (date: unknown) => unknown;
        endOfYear: (date: unknown) => unknown;
        isAfter: (date: unknown, comparing: unknown) => boolean;
        isAfterDay: (date: unknown, comparing: unknown) => boolean;
        isSameDay: (date: unknown, comparing: unknown) => boolean;
        isSameMonth: (date: unknown, comparing: unknown) => boolean;
        isSameYear: (date: unknown, comparing: unknown) => boolean;
        isBefore: (date: unknown, comparing: unknown) => boolean;
        isEqual: (date: unknown, comparing: unknown) => boolean;
        isValid: (date: any) => boolean;
        isWithinRange: (date: unknown, range: [unknown, unknown]) => boolean;
        addMinutes: (date: unknown, amount: number) => unknown;
        addHours: (date: unknown, amount: number) => unknown;
        addDays: (date: unknown, amount: number) => unknown;
        addWeeks: (date: unknown, amount: number) => unknown;
        addMonths: (date: unknown, amount: number) => unknown;
        getYear: (date: unknown) => number;
        setYear: (date: unknown, year: number) => unknown;
        getDiff: (date: unknown, comparing: unknown, unit?: string | undefined) => number;
        getWeekArray: (date: unknown, firstDayOfWeek?: string | number | undefined) => unknown[][];
        getWeekdays: (firstDayOfWeek?: string | number | undefined, weekdayFormat?: "long" | "narrow" | "short" | undefined) => string[];
        getWeek: (date: unknown, firstDayOfWeek?: string | number | undefined, firstDayOfYear?: string | number | undefined) => number;
        getMonth: (date: unknown) => number;
        setMonth: (date: unknown, month: number) => unknown;
        getDate: (date: unknown) => number;
        setDate: (date: unknown, day: number) => unknown;
        getNextMonth: (date: unknown) => unknown;
        getPreviousMonth: (date: unknown) => unknown;
        getHours: (date: unknown) => number;
        setHours: (date: unknown, hours: number) => unknown;
        getMinutes: (date: unknown) => number;
        setMinutes: (date: unknown, minutes: number) => unknown;
        locale?: any;
    };
};
export declare function createDateRange(adapter: DateInstance, start: unknown, stop?: unknown): unknown[];
export declare function daysDiff(adapter: DateInstance, start: unknown, stop?: unknown): number;
export declare function useDate(): DateInstance;
