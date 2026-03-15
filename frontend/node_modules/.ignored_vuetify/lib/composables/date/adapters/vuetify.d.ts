// Types
import type { DateAdapter } from '../DateAdapter.js';
type CustomDateFormat = Intl.DateTimeFormatOptions | ((date: Date, formatString: string, locale: string) => string);
export declare class VuetifyDateAdapter implements DateAdapter<Date> {
    locale: string;
    formats?: Record<string, CustomDateFormat>;
    constructor(options: {
        locale: string;
        formats?: Record<string, CustomDateFormat>;
    });
    date(value?: any): Date | null;
    toJsDate(date: Date): Date;
    toISO(date: Date): string;
    parseISO(date: string): Date;
    addMinutes(date: Date, amount: number): Date;
    addHours(date: Date, amount: number): Date;
    addDays(date: Date, amount: number): Date;
    addWeeks(date: Date, amount: number): Date;
    addMonths(date: Date, amount: number): Date;
    getWeekArray(date: Date, firstDayOfWeek?: number | string): Date[][];
    startOfWeek(date: Date, firstDayOfWeek?: number | string): Date;
    endOfWeek(date: Date): Date;
    startOfMonth(date: Date): Date;
    endOfMonth(date: Date): Date;
    format(date: Date, formatString: string): string;
    isEqual(date: Date, comparing: Date): boolean;
    isValid(date: any): boolean;
    isWithinRange(date: Date, range: [Date, Date]): boolean;
    isAfter(date: Date, comparing: Date): boolean;
    isAfterDay(date: Date, comparing: Date): boolean;
    isBefore(date: Date, comparing: Date): boolean;
    isSameDay(date: Date, comparing: Date): boolean;
    isSameMonth(date: Date, comparing: Date): boolean;
    isSameYear(date: Date, comparing: Date): boolean;
    setMinutes(date: Date, count: number): Date;
    setHours(date: Date, count: number): Date;
    setMonth(date: Date, count: number): Date;
    setDate(date: Date, day: number): Date;
    setYear(date: Date, year: number): Date;
    getDiff(date: Date, comparing: Date | string, unit?: string): number;
    getWeekdays(firstDayOfWeek?: number | string, weekdayFormat?: 'long' | 'short' | 'narrow'): string[];
    getYear(date: Date): number;
    getMonth(date: Date): number;
    getWeek(date: Date, firstDayOfWeek?: number | string, firstDayOfYear?: number | string): number;
    getDate(date: Date): number;
    getNextMonth(date: Date): Date;
    getPreviousMonth(date: Date): Date;
    getHours(date: Date): number;
    getMinutes(date: Date): number;
    startOfDay(date: Date): Date;
    endOfDay(date: Date): Date;
    startOfYear(date: Date): Date;
    endOfYear(date: Date): Date;
}

