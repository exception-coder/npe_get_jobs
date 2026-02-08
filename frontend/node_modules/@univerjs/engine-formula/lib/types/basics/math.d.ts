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
export declare function calculateFactorial(n: number, step?: number): number;
export declare function calculateCombin(n: number, k: number): number;
export declare function calculateGcd(a: number, b: number): number;
export declare function calculateLcm(a: number, b: number): number;
export declare function calculateMdeterm(matrix: number[][]): number;
export declare function calculateMinverse(matrix: number[][]): number[][] | null;
export declare function calculateMmult(matrix1: number[][], matrix2: number[][]): number[][];
export declare function matrixTranspose(matrix: number[][]): number[][];
export declare function inverseMatrixByLUD(matrix: number[][]): number[][] | null;
export declare function inverseMatrixByUSV(matrix: number[][]): number[][] | null;
export declare const romanToArabicMap: Map<string, number>;
export declare const arabicToRomanMap: Map<number, string>;
/**
 * form: A number specifying the type of roman numeral you want.
 * The roman numeral style ranges from Classic to Simplified, becoming more concise as the value of form increases
 * 0 Classic
 * 1 More concise
 * 2 More concise
 * 3 More concise
 * 4 Simplified
 */
export declare const romanFormArray: number[][];
