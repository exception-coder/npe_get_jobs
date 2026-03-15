import { ITableDateFilterInfo } from '../../types/type';
/**
 * The provided date is a date in Q1 of the year.
 * @param {Date} date - The date to compare.
 * @returns {boolean} return the date is match
 */
export declare const dateQ1: (date: Date) => boolean;
/**
 * The provided date is a date in Q2 of the year.
 * @param {Date} date - The date to compare.
 * @returns {boolean} return the date is match
 */
export declare const dateQ2: (date: Date) => boolean;
/**
 * The provided date is a date in Q3 of the year.
 * @param {Date} date - The date to compare.
 * @returns {boolean} return the date is match
 */
export declare const dateQ3: (date: Date) => boolean;
/**
 * The provided date is a date in Q4 of the year.
 * @param {Date} date - The date to compare.
 * @returns {boolean} return the date is match
 */
export declare const dateQ4: (date: Date) => boolean;
/**
 * The provided date is a date in January.
 * @param {Date} date - The date to compare.
 * @returns {boolean} return the date is match
 */
export declare const dateM1: (date: Date) => boolean;
/**
 * The provided date is a date in February.
 * @param {Date} date - The date to compare.
 * @returns {boolean} return the date is match
 */
export declare const dateM2: (date: Date) => boolean;
/**
 * The provided date is a date in March.
 * @param {Date} date - The date to compare.
 * @returns {boolean} return the date is match
 */
export declare const dateM3: (date: Date) => boolean;
/**
 * The provided date is a date in April.
 * @param {Date} date - The date to compare.
 * @returns {boolean} return the date is match
 */
export declare const dateM4: (date: Date) => boolean;
/**
 * The provided date is a date in May.
 * @param {Date} date - The date to compare.
 * @returns {boolean} return the date is match
 */
export declare const dateM5: (date: Date) => boolean;
/**
 * The provided date is a date in June.
 * @param {Date} date - The date to compare.
 * @returns {boolean} return the date is match
 */
export declare const dateM6: (date: Date) => boolean;
/**
 * The provided date is a date in July.
 * @param {Date} date - The date to compare.
 * @returns {boolean} return the date is match
 */
export declare const dateM7: (date: Date) => boolean;
/**
 * The provided date is a date in August.
 * @param {Date} date - The date to compare.
 * @returns {boolean} return the date is match
 */
export declare const dateM8: (date: Date) => boolean;
/**
 * The provided date is a date in September.
 * @param {Date} date - The date to compare.
 * @returns {boolean} return the date is match
 */
export declare const dateM9: (date: Date) => boolean;
/**
 * The provided date is a date in October.
 * @param {Date} date - The date to compare.
 * @returns {boolean} return the date is match
 */
export declare const dateM10: (date: Date) => boolean;
/**
 * The provided date is a date in November.
 * @param {Date} date - The date to compare.
 * @returns {boolean} return the date is match
 */
export declare const dateM11: (date: Date) => boolean;
/**
 * The provided date is a date in December.
 * @param {Date} date - The date to compare.
 * @returns {boolean} return the date is match
 */
export declare const dateM12: (date: Date) => boolean;
/**
 * The provided date is today.
 * @param {Date} expectedDate - The date to compare.
 * @param {Date} [anchorTime] - The reference date.
 * @returns {boolean} return the date is match
 */
export declare const today: (expectedDate: Date, anchorTime?: Date) => boolean;
/**
 * The provided date is tomorrow.
 * @param {Date} date - The date to compare.
 * @param {Date} [anchorTime] - The reference date.
 * @returns {boolean} return the date is match
 */
export declare const tomorrow: (date: Date, anchorTime?: Date) => boolean;
/**
 * The provided date is yesterday.
 * @param {Date} date - The date to compare.
 * @param {Date} [anchorTime] - The reference date.
 * @returns {boolean} return the date is match
 */
export declare const yesterday: (date: Date, anchorTime?: Date) => boolean;
/**
 * The provided date is in the current week.
 * @param {Date} date - The date to compare.
 * @param {Date} [anchorTime] - The reference date.
 * @returns {boolean} return the date is match
 */
export declare const thisWeek: (date: Date, anchorTime?: Date) => boolean;
/**
 * The provided date is in the next week.
 * @param {Date} date - The date to compare.
 * @param {Date} [anchorTime] - The reference date.
 * @returns {boolean} return the date is match
 */
export declare const nextWeek: (date: Date, anchorTime?: Date) => boolean;
/**
 * The provided date is in the last week.
 * @param {Date} date - The date to compare.
 * @param {Date} [anchorTime] - The reference date.
 * @returns {boolean} return the date is match
 */
export declare const lastWeek: (date: Date, anchorTime?: Date) => boolean;
/**
 * The provided date is in the current month.
 * @param {Date} date - The date to compare.
 * @param {Date} [anchorTime] - The reference date.
 * @returns {boolean} return the date is match
 */
export declare const thisMonth: (date: Date, anchorTime?: Date) => boolean;
/**
 * The provided date is in the next month.
 * @param {Date} date - The date to compare.
 * @param {Date} [anchorTime] - The reference date.
 * @returns {boolean} return the date is match
 */
export declare const nextMonth: (date: Date, anchorTime?: Date) => boolean;
/**
 * The provided date is in the last month.
 * @param {Date} date - The date to compare.
 * @param {Date} [anchorTime] - The reference date.
 * @returns {boolean} return the date is match
 */
export declare const lastMonth: (date: Date, anchorTime?: Date) => boolean;
/**
 * The provided date is in the current quarter.
 * @param {Date} date - The date to compare.
 * @param {Date} [anchorTime] - The reference date.
 * @returns {boolean} return the date is match
 */
export declare const thisQuarter: (date: Date, anchorTime?: Date) => boolean;
/**
 * The provided date is in the next quarter.
 * @param {Date} date - The date to compare.
 * @param {Date} [anchorTime] - The reference date.
 * @returns {boolean} return the date is match
 */
export declare const nextQuarter: (date: Date, anchorTime?: Date) => boolean;
/**
 * The provided date is in the last quarter.
 * @param {Date} date - The date to compare.
 * @param {Date} [anchorTime] - The reference date.
 * @returns {boolean} return the date is match
 */
export declare const lastQuarter: (date: Date, anchorTime?: Date) => boolean;
/**
 * The provided date is in the current year.
 * @param {Date} date - The date to compare.
 * @param {Date} [anchorTime] - The reference date.
 * @returns {boolean} return the date is match
 */
export declare const thisYear: (date: Date, anchorTime?: Date) => boolean;
/**
 * The provided date is in the next year.
 * @param {Date} date - The date to compare.
 * @param {Date} [anchorTime] - The reference date.
 * @returns {boolean} return the date is match
 */
export declare const nextYear: (date: Date, anchorTime?: Date) => boolean;
/**
 * The provided date is in the last year.
 * @param {Date} date - The date to compare.
 * @param {Date} [anchorTime] - The reference date.
 * @returns {boolean} return the date is match
 */
export declare const lastYear: (date: Date, anchorTime?: Date) => boolean;
/**
 * The provided date is in the year to date.
 * @param {Date} date - The date to compare.
 * @param {Date} [anchorTime] - The reference date.
 * @returns {boolean} return the date is match
 */
export declare const yearToDate: (date: Date, anchorTime?: Date) => boolean;
export declare function getDateFilterExecuteFunc(filterInfo: ITableDateFilterInfo): (date: Date) => boolean;
