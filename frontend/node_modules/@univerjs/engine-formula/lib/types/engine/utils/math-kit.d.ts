/**
 * Copyright 2023-present DreamNum Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export declare function plus(a: number, b: number): number;
export declare function minus(a: number, b: number): number;
export declare function multiply(a: number, b: number): number;
export declare function divide(a: number, b: number): number;
/**
 * Rounds a number to a specified number of decimal places.
 * @param base The number to round.
 * @param precision The number of decimal places to round to.
 * @returns The rounded number.
 */
export declare function round(base: number, precision: number): number;
/**
 * Rounds down a number to a specified number of decimal places.
 * @param base The number to round down.
 * @param precision The number of decimal places to round down to.
 * @returns The floored number.
 */
export declare function floor(base: number, precision: number): number;
/**
 * Rounds up a number to a specified number of decimal places.
 * @param base The number to round up.
 * @param precision The number of decimal places to round up to.
 * @returns The ceiled number.
 */
export declare function ceil(base: number, precision: number): number;
export declare function baseEpsilon(base: number, factor: number): number;
/**
 * Returns the remainder of division of two numbers.
 * @param base The dividend.
 * @param divisor The divisor.
 * @returns The remainder.
 */
export declare function mod(base: number, divisor: number): number;
/**
 * Raises a base number to the power of the exponent.
 *
 * @param base The base number.
 * @param exponent The exponent.
 * @returns The result of base raised to the power of exponent.
 */
export declare function pow(base: number, exponent: number): number;
/**
 * Calculates the square root of a number.
 * @param base The number to take the square root of.
 * @returns The square root of base.
 */
export declare function sqrt(base: number): number;
/**
 * Compares two numbers for equality.
 * @param a The first number.
 * @param b The second number.
 * @returns True if numbers are equal, false otherwise.
 */
export declare function equals(a: number, b: number): boolean;
/**
 * Checks if the first number is greater than the second number.
 * @param a The first number.
 * @param b The second number.
 * @returns True if a is greater than b, false otherwise.
 */
export declare function greaterThan(a: number, b: number): boolean;
/**
 * Checks if the first number is greater than or equal to the second number.
 * @param a The first number.
 * @param b The second number.
 * @returns True if a is greater than or equal to b, false otherwise.
 */
export declare function greaterThanOrEquals(a: number, b: number): boolean;
/**
 * Checks if the first number is less than the second number.
 * @param a The first number.
 * @param b The second number.
 * @returns True if a is less than b, false otherwise.
 */
export declare function lessThan(a: number, b: number): boolean;
/**
 * Checks if the first number is less than or equal to the second number.
 * @param a The first number.
 * @param b The second number.
 * @returns True if a is less than or equal to b, false otherwise.
 */
export declare function lessThanOrEquals(a: number, b: number): boolean;
/**
 * Complete the number to the specified accuracy and solve the accuracy error,
 *
 * e.g. strip(0.30000000000000004,15) => 0.3
 *
 * Why precision is 15?
 *
 * Excel only saves 15 digits
 *
  reference: https://stackoverflow.com/questions/1458633/how-to-deal-with-floating-point-number-precision-in-javascript
 * @param num
 * @param precision
 * @returns
 */
export declare function strip(num: number, precision?: number): number;
/**
 * Set an error range for floating-point calculations. If the error is less than Number.EPSILON, we can consider the result reliable.
 * @param left
 * @param right
 * @returns
 */
export declare function withinErrorMargin(left: number, right: number, tolerance?: number): boolean;
/**
 * Tolerance for the results of accuracy issues to tolerate certain errors
 *
 * Why is precision 12?
   This is an empirical choice. Generally, choosing 12 can solve most of the 0001 and 0009 problems. e.g. floor(5,1.23) = 0.0800000000000001

   why is tolerance 1e-10?
   Since the value of Number.EPSILON is too small to be applicable to all floating-point precision processing, for most application scenarios, the error range of 1e-10 can tolerate common floating-point errors.
   For example, =30.2 - 30 displayed as 0.2 in Excel
 * @param num
 * @param precision
 * @param tolerance
 * @returns
 */
export declare function stripErrorMargin(num: number, precision?: number, tolerance?: number): number;
/**
 * Get the fractional part of the number
 * @param num
 * @returns
 */
export declare function getFractionalPart(num: number): number;
