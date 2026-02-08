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
export declare const hsvToRgb: (h: number, s: number, v: number) => [number, number, number];
export declare const rgbToHex: (r: number, g: number, b: number) => string;
export declare const rgbToHsv: (r: number, g: number, b: number) => [number, number, number];
export declare const hexToHsv: (hex: string) => [number, number, number];
export declare const hsvToHex: (h: number, s: number, v: number) => string;
export declare const parseRgba: (rgba: string) => [number, number, number, number];
