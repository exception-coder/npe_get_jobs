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
export declare function remove<T>(arr: T[], item: T): boolean;
/**
 * Deduplicate an array.
 * @param arr The array to be dedupe.
 * @returns Return the deduplicated array.
 */
export declare function dedupe<T>(arr: T[]): T[];
export declare function dedupeBy<T>(arr: T[], keyFn: (v: T) => string): T[];
export declare function findLast<T>(arr: T[], callback: (item: T, index: number) => boolean): T | null;
/**
 * Rotate an array without mutating the original array.
 * @param arr the array to be rotated
 * @param steps how many steps to rotate
 * @returns the rotated array, it is another array, the original array is not mutated.
 */
export declare function rotate<T>(arr: Readonly<T[]>, steps: number): readonly T[];
export declare function groupBy<T>(arr: Readonly<T[]>, keyFn: (v: T) => string): Map<string, T[]>;
export declare function makeArray<T>(thing: T | T[]): T[];
