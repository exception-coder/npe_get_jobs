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
 * Returns the kth largest element from the given list using a min heap.
 * @param {number[]} list The list of numbers.
 * @param {number} k The value of k.
 * @returns The kth largest element.
 */
export declare const getLargestK: (list: number[], k: number) => number[];
/**
 * Returns the kth smallest element from the given list using a max heap.
 * @param {number[]} list The list of numbers.
 * @param {number} k The value of k.
 * @returns The kth smallest element.
 */
export declare const getSmallestK: (list: number[], k: number) => number[];
