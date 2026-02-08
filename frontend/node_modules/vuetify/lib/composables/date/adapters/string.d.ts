// Composables
import { VuetifyDateAdapter } from './vuetify.js';
// Types
import type { DateAdapter } from '../index.js';
type CustomDateFormat = Intl.DateTimeFormatOptions | ((date: string, formatString: string, locale: string) => string);
export declare class StringDateAdapter implements DateAdapter<string> {
    base: VuetifyDateAdapter;
    constructor(options: {
        locale: string;
        formats?: Record<string, CustomDateFormat>;
    });
    addDays(date: string, amount: number): string;
    addHours(date: string, amount: number): string;
    addMinutes(date: string, amount: number): string;
    addMonths(date: string, amount: number): string;
    addWeeks(date: string, amount: number): string;
    date(value?: any): string | null;
    endOfDay(date: string): string;
    endOfMonth(date: string): string;
    endOfWeek(date: string): string;
    endOfYear(date: string): string;
    format(date: string, formatString: string): string;
    getDate(date: string): number;
    getDiff(date: string, comparing: string, unit?: string): number;
    getHours(date: string): number;
    getMinutes(date: string): number;
    getMonth(date: string): number;
    getWeek(date: string, firstDayOfWeek?: number | string, firstDayOfYear?: number | string): number;
    getNextMonth(date: string): string;
    getPreviousMonth(date: string): string;
    getWeekArray(date: string, firstDayOfWeek?: number | string): string[][];
    getWeekdays(firstDayOfWeek?: number | string, weekdayFormat?: 'long' | 'short' | 'narrow'): string[];
    getYear(date: string): number;
    isAfter(date: string, comparing: string): boolean;
    isAfterDay(date: string, comparing: string): boolean;
    isBefore(date: string, comparing: string): boolean;
    isEqual(date: string, comparing: string): boolean;
    isSameDay(date: string, comparing: string): boolean;
    isSameMonth(date: string, comparing: string): boolean;
    isSameYear(date: string, comparing: string): boolean;
    isValid(date: any): boolean;
    isWithinRange(date: string, range: [string, string]): boolean;
    parseISO(date: string): string;
    setDate(date: string, day: number): string;
    setHours(date: string, hours: number): string;
    setMinutes(date: string, minutes: number): string;
    setMonth(date: string, month: number): string;
    setYear(date: string, year: number): string;
    startOfDay(date: string): string;
    startOfMonth(date: string): string;
    startOfWeek(date: string, firstDayOfWeek?: number | string): string;
    startOfYear(date: string): string;
    toISO(date: string): string;
    toJsDate(value: string): Date;
}

