import { ICellData, Nullable } from '@univerjs/core';
import { BaseReferenceObject, FunctionVariantType } from '../reference-object/base-reference-object';
import { BaseValueObject, ErrorValueObject } from '../value-object/base-value-object';
import { ArrayValueObject } from '../value-object/array-value-object';
import { NumberValueObject } from '../value-object/primitive-object';
export declare function convertTonNumber(valueObject: BaseValueObject): NumberValueObject;
export declare function isSingleValueObject(valueObject: FunctionVariantType): boolean;
/**
 * Covert BaseValueObject to cell value
 * @param objectValue
 * @returns
 */
export declare function objectValueToCellValue(objectValue: Nullable<BaseValueObject>): ICellData | undefined;
/**
 * The size of the extended range is determined by the maximum width and height of the criteria range.
 * @param variants
 * @returns
 */
export declare function calculateMaxDimensions(variants: BaseValueObject[]): {
    maxRowLength: number;
    maxColumnLength: number;
};
/**
 * Parse the paired range and criteria in functions like COUNTIFS, SUMIFS, etc.
 * @param variants - The range and criteria pairs
 * @param targetRange - The target range for calculation (e.g., sumRange in SUMIFS)
 * @returns An object containing parsed information
 */
export declare function parsePairedRangeAndCriteria(variants: FunctionVariantType[], targetRange?: FunctionVariantType): {
    isError: boolean;
    errorObject: Nullable<ErrorValueObject>;
    rangeIsDifferentSize: boolean;
    criteriaMaxRowLength: number;
    criteriaMaxColumnLength: number;
    targetRange: Nullable<BaseValueObject>;
    variants: BaseValueObject[];
};
export declare function baseValueObjectToArrayValueObject(valueObject: BaseValueObject): ArrayValueObject;
export declare function getBooleanResults(variants: BaseValueObject[], maxRowLength: number, maxColumnLength: number, isNumberSensitive?: boolean): BaseValueObject[][];
/**
 * Two valueObjects of the same type can be compared
 * @param array
 * @param range
 * @param criteria
 * @returns
 */
export declare function filterSameValueObjectResult(array: ArrayValueObject, range: ArrayValueObject, criteria: BaseValueObject): BaseValueObject;
/**
 * Check if the two valueObjects are of the same type
 * @param left
 * @param right
 * @returns
 */
export declare function isSameValueObjectType(left: BaseValueObject, right: BaseValueObject): boolean;
export declare enum ReferenceObjectType {
    CELL = 0,
    COLUMN = 1,
    ROW = 2
}
export declare function getReferenceObjectFromCache(trimToken: string, type: ReferenceObjectType): BaseReferenceObject;
export declare function getRangeReferenceObjectFromCache(variant1: BaseReferenceObject, variant2: BaseReferenceObject): FunctionVariantType;
