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
import * as numfmt from 'numfmt';
export * as numfmt from 'numfmt';
export declare const DEFAULT_TEXT_FORMAT = "@@@";
export declare const DEFAULT_TEXT_FORMAT_EXCEL = "@";
export declare const DEFAULT_NUMBER_FORMAT = "General";
export declare function isTextFormat(pattern: string | undefined): pattern is "@@@" | "@";
export declare function isDefaultFormat(pattern?: string | null): pattern is "General" | null | undefined;
export type INumfmtLocaleTag = 'zh-CN' | 'zh-TW' | 'cs' | 'da' | 'nl' | 'en' | 'fi' | 'fr' | 'de' | 'el' | 'hu' | 'is' | 'id' | 'it' | 'ja' | 'ko' | 'nb' | 'pl' | 'pt' | 'ru' | 'sk' | 'es' | 'sv' | 'th' | 'tr' | 'vi';
/**
 * Determines whether two patterns are equal, excluding differences in decimal places.
 * This function ignores the decimal part of the patterns and the positive color will be ignored but negative color will be considered.
 * more info can check the test case.
 */
export declare const isPatternEqualWithoutDecimal: (patternA: string, patternB: string) => boolean;
/**
 * Get the numfmt parse value, and filter out the parse error.
 */
export declare const getNumfmtParseValueFilter: (value: string) => numfmt.ParseData | null;
