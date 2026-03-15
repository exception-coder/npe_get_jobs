import { CustomData, Nullable } from '@univerjs/core';
import { FormulaAstLRU } from '../../basics/cache-lru';
import { ConcatenateType } from '../../basics/common';
import { ErrorType } from '../../basics/error-type';
import { ObjectClassType } from '../../basics/object-class-type';
import { compareToken } from '../../basics/token';
export type callbackMapFnType = (currentValue: BaseValueObject, row: number, column: number) => BaseValueObject;
export interface IArrayValueObject {
    calculateValueList: Nullable<BaseValueObject>[][];
    rowCount: number;
    columnCount: number;
    unitId: string;
    sheetId: string;
    row: number;
    column: number;
}
export declare class BaseValueObject extends ObjectClassType {
    private _rawValue;
    private _customData;
    constructor(_rawValue: string | number | boolean);
    isValueObject(): boolean;
    toUnitRange(): {
        range: {
            startColumn: number;
            startRow: number;
            endRow: number;
            endColumn: number;
        };
        sheetId: string;
        unitId: string;
    };
    getValue(): string | number | boolean;
    getArrayValue(): Nullable<BaseValueObject>[][];
    setValue(value: string | number | boolean): void;
    setArrayValue(value: BaseValueObject[][]): void;
    withCustomData(data: CustomData): this;
    getCustomData(): CustomData;
    isCube(): boolean;
    isString(): boolean;
    isNumber(): boolean;
    isBoolean(): boolean;
    isLambda(): boolean;
    isError(): boolean;
    isNull(): boolean;
    isHyperlink(): boolean;
    sum(): BaseValueObject;
    max(): BaseValueObject;
    min(): BaseValueObject;
    count(): BaseValueObject;
    countA(): BaseValueObject;
    countBlank(): BaseValueObject;
    getNegative(): BaseValueObject;
    getReciprocal(): BaseValueObject;
    plus(valueObject: BaseValueObject): BaseValueObject;
    minus(valueObject: BaseValueObject): BaseValueObject;
    multiply(valueObject: BaseValueObject): BaseValueObject;
    divided(valueObject: BaseValueObject): BaseValueObject;
    mod(valueObject: BaseValueObject): BaseValueObject;
    /**
     * return every value in the array after the callback function, excluding the error value
     * @param callbackFn
     * @returns
     */
    map(callbackFn: callbackMapFnType): BaseValueObject;
    /**
     * return every value in the array after the callback function
     * @param callbackFn
     * @returns
     */
    mapValue(callbackFn: callbackMapFnType): BaseValueObject;
    compare(valueObject: BaseValueObject, operator: compareToken, isCaseSensitive?: boolean): BaseValueObject;
    isEqual(valueObject: BaseValueObject): BaseValueObject;
    isNotEqual(valueObject: BaseValueObject): BaseValueObject;
    isGreaterThanOrEqual(valueObject: BaseValueObject): BaseValueObject;
    isLessThanOrEqual(valueObject: BaseValueObject): BaseValueObject;
    isLessThan(valueObject: BaseValueObject): BaseValueObject;
    isGreaterThan(valueObject: BaseValueObject): BaseValueObject;
    concatenateFront(valueObject: BaseValueObject): BaseValueObject;
    concatenateBack(valueObject: BaseValueObject): BaseValueObject;
    plusBy(value: string | number | boolean): BaseValueObject;
    minusBy(value: string | number | boolean): BaseValueObject;
    multiplyBy(value: string | number | boolean): BaseValueObject;
    dividedBy(value: string | number | boolean): BaseValueObject;
    modInverse(valueObject: BaseValueObject): BaseValueObject;
    compareBy(value: string | number | boolean, operator: compareToken): BaseValueObject;
    concatenate(value: string | number | boolean, concatenateType?: ConcatenateType): string;
    pow(valueObject: BaseValueObject): BaseValueObject;
    powInverse(valueObject: BaseValueObject): BaseValueObject;
    sqrt(): BaseValueObject;
    cbrt(): BaseValueObject;
    cos(): BaseValueObject;
    cosh(): BaseValueObject;
    acos(): BaseValueObject;
    acosh(): BaseValueObject;
    sin(): BaseValueObject;
    sinh(): BaseValueObject;
    asin(): BaseValueObject;
    asinh(): BaseValueObject;
    tan(): BaseValueObject;
    tanh(): BaseValueObject;
    atan(): BaseValueObject;
    atan2(valueObject: BaseValueObject): BaseValueObject;
    atan2Inverse(valueObject: BaseValueObject): BaseValueObject;
    atanh(): BaseValueObject;
    /**
     * Calculate the mean of the entire array.
     *
     * reference https://numpy.org/doc/stable/reference/generated/numpy.mean.html#numpy.mean
     *
     */
    mean(): BaseValueObject;
    /**
     * Calculate the median of the entire array.
     *
     * reference https://numpy.org/doc/stable/reference/generated/numpy.median.html
     *
     */
    median(): BaseValueObject;
    /**
     * Calculate the variance of the entire array.
     *
     * reference https://numpy.org/doc/stable/reference/generated/numpy.var.html
     */
    var(): BaseValueObject;
    /**
     * Calculate the standard deviation of the entire array.
     *
     * reference https://numpy.org/doc/stable/reference/generated/numpy.std.html
     */
    std(): BaseValueObject;
    log(): BaseValueObject;
    log10(): BaseValueObject;
    exp(): BaseValueObject;
    abs(): BaseValueObject;
    round(valueObject: BaseValueObject): BaseValueObject;
    roundInverse(valueObject: BaseValueObject): BaseValueObject;
    floor(valueObject: BaseValueObject): BaseValueObject;
    floorInverse(valueObject: BaseValueObject): BaseValueObject;
    ceil(valueObject: BaseValueObject): BaseValueObject;
    ceilInverse(valueObject: BaseValueObject): BaseValueObject;
    convertToNumberObjectValue(): BaseValueObject;
    convertToBooleanObjectValue(): BaseValueObject;
}
export declare const ErrorValueObjectCache: FormulaAstLRU<ErrorValueObject>;
export declare class ErrorValueObject extends BaseValueObject {
    private _errorType;
    private _errorContent;
    static create(errorType: ErrorType, errorContent?: string): ErrorValueObject;
    constructor(_errorType: ErrorType, _errorContent?: string);
    getValue(): ErrorType;
    getErrorType(): ErrorType;
    getErrorContent(): string;
    isEqualType(object: ObjectClassType): boolean;
    isError(): boolean;
}
