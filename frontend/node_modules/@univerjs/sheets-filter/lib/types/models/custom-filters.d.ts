import { CellValue, Nullable } from '@univerjs/core';
import { CustomFilterOperator } from './types';
export interface IFilterFn<P extends unknown[]> {
    label?: string;
    /**
     * Description of this operator. Should be an i18n key.
     */
    description?: string;
    fn: (...params: P) => boolean;
}
/**
 * Custom filter functions normally used in "Filter by Conditions".
 */
export interface ICustomFilterFn<P extends unknown[]> extends IFilterFn<P> {
    /**
     * Operator of the custom filter function.
     */
    operator?: CustomFilterOperator;
    /**
     * Group of the custom filter belongs to. It would be rendered in the panel by groups.
     */
    group?: string;
    fn: (...params: P) => boolean;
}
type TwoParameters<C = string> = [value: Nullable<CellValue>, compare: C];
export declare const greaterThan: ICustomFilterFn<TwoParameters<number>>;
export declare const greaterThanOrEqualTo: ICustomFilterFn<TwoParameters<number>>;
export declare const lessThan: ICustomFilterFn<TwoParameters<number>>;
export declare const lessThanOrEqualTo: ICustomFilterFn<TwoParameters<number>>;
export declare const equals: ICustomFilterFn<TwoParameters<number>>;
export declare const notEquals: ICustomFilterFn<TwoParameters<number | string>>;
export declare const CustomFilterFnRegistry: Map<CustomFilterOperator, ICustomFilterFn<TwoParameters<number>>>;
export declare function isNumericFilterFn(operator?: CustomFilterOperator): boolean;
/** This operators matches texts. */
export declare const textMatch: ICustomFilterFn<TwoParameters<string>>;
export declare function getCustomFilterFn(operator?: CustomFilterOperator): ICustomFilterFn<TwoParameters<any>>;
export declare function ensureNumeric(value: Nullable<CellValue>): boolean;
export {};
