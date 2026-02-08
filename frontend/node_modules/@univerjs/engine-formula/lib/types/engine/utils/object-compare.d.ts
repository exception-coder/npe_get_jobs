import { compareToken } from '../../basics/token';
import { BaseValueObject } from '../value-object/base-value-object';
export declare function findCompareToken(str: string): [compareToken, BaseValueObject];
/**
 * When it contains both comparison characters and wildcard characters
 * 1. The value of apple* has the same effect as =apple*
 * 2. >=apple*: normal value, >apple: obtains the same effect as >=apple*
 * 3. <apple*: normal value, <=apple: obtains the same effect as <apple*
 */
export declare function valueObjectCompare(range: BaseValueObject, criteria: BaseValueObject, operator?: compareToken, isCaseSensitive?: boolean): BaseValueObject;
/**
 * Find the Boolean intersection of two ArrayValueObjects
 * @param valueObject1
 * @param valueObject2
 */
export declare function booleanObjectIntersection(valueObject1: BaseValueObject, valueObject2: BaseValueObject): BaseValueObject;
