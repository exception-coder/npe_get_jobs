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
/**
 * Return the index of the first value in an ascending array that is greater than the target value. If there is no value greater than the target, return -1.
 *
 * Alternatively, you can consider inserting a number to ensure the array remains sorted, and return the position for insertion. If the target is the same as the maximum value, return arr.length -1
 * @param arr
 * @param target
 */
export declare function searchInOrderedArray(arr: number[], target: number): number;
/**
 * Return the index of the first value in an ascending array that is greater than the target value. If there is no value greater than the target, return last index.
 *
 * @param arr
 * @param pos
 */
export declare function binarySearchArray(arr: number[], pos: number): number;
/**
 * Return the index of the last index in an ascending array which value is just greater than the target. If there is no value greater than the target, return arr.length - 1.
 *
 * Alternatively, you can consider inserting a number to ensure the array remains sorted, and return the position for insertion.
 *
 * @param arr
 * @param target
 */
export declare function binSearchFirstGreaterThanTarget(arr: number[], target: number): number;
/**
 * Find value in the data that is just greater than the target; if there are equal values greater than the target, select the last one.
 * If firstMatch is true, then return the index of the first number greater than the target.
 * see #univer/pull/3903
 *
 * @param arr ascending array
 * @param target value wants to find
 * @param firstMatch if true, return the first match when value > target in the array, otherwise return the last value > target. if not match,
 * @returns {number} index
 */
export declare function searchArray(arr: number[], target: number, firstMatch?: boolean): number;
