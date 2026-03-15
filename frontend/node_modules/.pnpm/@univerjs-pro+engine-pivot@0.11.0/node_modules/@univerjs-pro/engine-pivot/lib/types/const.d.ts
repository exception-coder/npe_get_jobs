import { PivotDateGroupFieldDateSystemEnum } from './types';
/**
 * @description blank placeholder for empty cells
 *  the get/set functions are used to allow for customization
 * @constant {string} BLANK_PLACEHOLDER - default value is '--$blk$--'
 */
export declare const GlobalConfig: {
    TUPLE_PLACEHOLDER: string;
    TUPLE_FIELD_SEPARATOR: string;
    COl_ROOT_PATH: string;
    ROW_ROOT_PATH: string;
    BLANK_PLACEHOLDER: string;
    isDev: boolean;
    defaultSortType: string;
    dateSystem: PivotDateGroupFieldDateSystemEnum;
    maxLimitItemCount: number;
    otherDataKey: string;
};
export declare const setBlankPlaceholder: (value: string) => string;
export declare const setDevMode: (value: boolean) => boolean;
/**
 * Allows to set the default sorting type for pivot table row/col fields
 * @param type 'sorting type, can be ascending,descending,default
 */
export declare const setDefaultSortType: (type: "ascending" | "descending" | "default") => void;
/**
 * allows to set the date system for date grouping calculations
 * @param value The date system to use, either date1900 ,date1904
 * @returns {void}
 */
export declare const setDateSystem: (value: PivotDateGroupFieldDateSystemEnum) => PivotDateGroupFieldDateSystemEnum;
/**
 * allows to set the max limit count for row/col fields
 * @param value The max limit count, must be greater than 0, the default value is 1000
 * @returns {void}
 */
export declare const setMaxLimitItemCount: (value: number) => void;
