import { BaseValueObject, ErrorValueObject } from '../engine/value-object/base-value-object';
import { numfmt } from '@univerjs/core';
export declare const DEFAULT_DATE_FORMAT = "yyyy/mm/dd;@";
export declare const DEFAULT_NOW_FORMAT = "yyyy/mm/dd hh:mm";
export declare const DEFAULT_TIME_FORMAT = "h:mm A/P";
/**
 * Excel stores dates as sequential serial numbers so they can be used in calculations. By default, January 1, 1900 is serial number 1, and January 1, 2008 is serial number 39448 because it is 39,447 days after January 1, 1900.
 *
 * Excel has a leap year error in 1900. February 29, 1900 is considered a legal date. In fact, there is no February 29 in 1900.
 * 1900.2.28 Date Serial 59
 * 1900.2.29 Date Serial 61
 * 1900.3.1 Date Serial 61
 * 1901.1.1 Date Serial 367
 * @param date
 * @returns
 */
export declare function excelDateSerial(date: Date): number;
/**
 * Time serial number with date
 * @param date
 * @returns
 */
export declare function excelDateTimeSerial(date: Date): number;
export declare function excelSerialToDate(serial: number): Date;
export declare function excelSerialToDateTime(serial: number): Date;
export declare function formatDateDefault(date: Date): string;
/**
 * Validate date string
 *
 * TODO @Dushusir: Internationalization and more format support, can be reused when editing and saving cells, like "2020年1月1日"
 * @param dateStr
 * @returns
 */
export declare function isValidDateStr(dateStr: string): boolean;
export declare function parseFormattedDate(value: string): numfmt.ParseData | null;
export declare function parseFormattedValue(value: string): numfmt.ParseData | null;
export declare function parseFormattedTime(value: string): numfmt.ParseData | null;
export declare function isDate(format: string): boolean;
export declare function isValidWeekend(weekend: number | string): boolean;
export declare function getWeekendArray(weekend: number | string): number[];
export declare function countWorkingDays(startDateSerialNumber: number, endDateSerialNumber: number, weekend?: number | string, holidays?: number[]): number;
export declare function getDateSerialNumberByWorkingDays(startDateSerialNumber: number, workingDays: number, weekend?: number | string, holidays?: number[]): (number | ErrorValueObject);
export declare function getDateSerialNumberByObject(serialNumberObject: BaseValueObject): (ErrorValueObject | number);
export declare function getWeekDayByDateSerialNumber(dateSerialNumber: number): number;
interface ITwoDateDaysType {
    days: number;
    yearDays: number;
}
export declare function getTwoDateDaysByBasis(startDateSerialNumber: number, endDateSerialNumber: number, basis: number): ITwoDateDaysType;
export declare function isLeapYear(year: number): boolean;
export declare function isLeapYear1900(year: number): boolean;
export declare function getDaysInMonth(year: number, month: number): number;
export declare function getDaysInYear(year: number): number;
export declare function getNormalYearDaysByBasis(dateSerialNumber: number, basis: number): number;
export declare function lastDayOfMonth(year: number, month: number, day: number): boolean;
export declare function dateAddMonths(date: Date, months: number): Date;
export {};
