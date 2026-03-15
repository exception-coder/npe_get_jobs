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
export declare function ABCToNumber(a: string): number;
/**
 * column subscript number to letters
 * @param n number
 * @returns
 */
export declare function numberToABC(n: number): string;
/**
 * Repeats the given string (first argument) num times (second argument). If num is not positive, an empty string is returned.
 * @param string given string
 * @param times repeat times
 * @returns
 */
export declare function repeatStringNumTimes(string: string, times: number): string;
/**
 * Column subscript numbers are converted to list-style letters, for example, after 25, it means AA BB CC, not AA AB AC
 * @param n number
 * @param uppercase Is it a capital letter
 * @returns
 */
export declare function numberToListABC(n: number, uppercase?: boolean): string;
