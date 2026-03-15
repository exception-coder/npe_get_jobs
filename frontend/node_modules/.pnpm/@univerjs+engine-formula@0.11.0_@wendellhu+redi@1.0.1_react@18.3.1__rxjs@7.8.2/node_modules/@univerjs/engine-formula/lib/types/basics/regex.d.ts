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
export declare const UNIT_NAME_REGEX = "\\[([^\\[\\]\\/?:\"<>|*\\\\]+)\\]";
export declare const UNIT_NAME_REGEX_PRECOMPILING: RegExp;
export declare const SHEET_NAME_REGEX = "((?![\\[\\]\\/?*\\\\]).)*!";
export declare const ABSOLUTE_SYMBOL = "$";
export declare const RANGE_SYMBOL = "\\s*?:\\s*?";
export declare const UNIT_NAME_SHEET_NAME_REGEX = "'?(\\[([^\\[\\]\\/?:\"<>|*\\\\]+)\\])?(((?![\\[\\]\\/?*\\\\]).)*!)?'?";
export declare const SIMPLE_SINGLE_RANGE_REGEX = "\\$?[A-Za-z]+\\$?[1-9][0-9]*";
export declare const REFERENCE_MULTIPLE_RANGE_REGEX = "^(@)?'?(\\[([^\\[\\]\\/?:\"<>|*\\\\]+)\\])?(((?![\\[\\]\\/?*\\\\]).)*!)?'?\\$?[A-Za-z]+\\$?[1-9][0-9]*\\s*?:\\s*?\\$?[A-Za-z]+\\$?[1-9][0-9]*$";
export declare const REFERENCE_MULTIPLE_RANGE_REGEX_PRECOMPILING: RegExp;
export declare const REFERENCE_SINGLE_RANGE_REGEX = "^'?(\\[([^\\[\\]\\/?:\"<>|*\\\\]+)\\])?(((?![\\[\\]\\/?*\\\\]).)*!)?'?\\s*?\\$?[A-Za-z]+\\$?[1-9][0-9]*(#)?$";
export declare const REFERENCE_SINGLE_RANGE_REGEX_PRECOMPILING: RegExp;
export declare const REFERENCE_REGEX_ROW = "^'?(\\[([^\\[\\]\\/?:\"<>|*\\\\]+)\\])?(((?![\\[\\]\\/?*\\\\]).)*!)?'?\\$?[1-9][0-9]*\\s*?:\\s*?\\$?[1-9][0-9]*$";
export declare const REFERENCE_REGEX_ROW_PRECOMPILING: RegExp;
export declare const REFERENCE_REGEX_COLUMN = "^'?(\\[([^\\[\\]\\/?:\"<>|*\\\\]+)\\])?(((?![\\[\\]\\/?*\\\\]).)*!)?'?\\$?[A-Za-z]+\\s*?:\\s*?\\$?[A-Za-z]+$";
export declare const REFERENCE_REGEX_COLUMN_PRECOMPILING: RegExp;
export declare const REFERENCE_REGEX_SINGLE_ROW = "^'?(\\[([^\\[\\]\\/?:\"<>|*\\\\]+)\\])?(((?![\\[\\]\\/?*\\\\]).)*!)?'?\\s*?\\$?[1-9][0-9]*$";
export declare const REFERENCE_REGEX_SINGLE_ROW_PRECOMPILING: RegExp;
export declare const REFERENCE_REGEX_SINGLE_COLUMN = "^'?(\\[([^\\[\\]\\/?:\"<>|*\\\\]+)\\])?(((?![\\[\\]\\/?*\\\\]).)*!)?'?\\s*?\\$?[A-Za-z]+$";
export declare const REFERENCE_REGEX_SINGLE_COLUMN_PRECOMPILING: RegExp;
export declare const REFERENCE_TABLE_ALL_COLUMN_REGEX = "^(\\[([^\\[\\]\\/?:\"<>|*\\\\]+)\\])?((?![~!@#$%^&*()_+<>?:,./;\u2019\uFF0C\u3002\u3001\u2018\uFF1A\u201C\u300A\u300B\uFF1F~\uFF01@#\uFFE5%\u2026\u2026\uFF08\uFF09\u3010\u3011\\[\\]\\/\\\\]).)+$";
export declare const REFERENCE_TABLE_SINGLE_COLUMN_REGEX = "^(\\[([^\\[\\]\\/?:\"<>|*\\\\]+)\\])?((?![~!@#$%^&*()_+<>?:,./;\u2019\uFF0C\u3002\u3001\u2018\uFF1A\u201C\u300A\u300B\uFF1F~\uFF01@#\uFFE5%\u2026\u2026\uFF08\uFF09\u3010\u3011\\[\\]\\/\\\\]).)+(\\[((?<!#).)*\\]|\\[\\[#.+\\]\\s*?,\\s*?\\[((?<!#).)*\\]\\])+$";
export declare const REFERENCE_TABLE_MULTIPLE_COLUMN_REGEX = "^(\\[([^\\[\\]\\/?:\"<>|*\\\\]+)\\])?((?![~!@#$%^&*()_+<>?:,./;\u2019\uFF0C\u3002\u3001\u2018\uFF1A\u201C\u300A\u300B\uFF1F~\uFF01@#\uFFE5%\u2026\u2026\uFF08\uFF09\u3010\u3011\\[\\]\\/\\\\]).)+(\\[\\[((?<!#).)*\\]\\s*?:\\s*?\\[((?<!#).)*\\]\\])?$|^((?![~!@#$%^&*()_+<>?:,./;\u2019\uFF0C\u3002\u3001\u2018\uFF1A\u201C\u300A\u300B\uFF1F~\uFF01@#\uFFE5%\u2026\u2026\uFF08\uFF09\u3010\u3011\\[\\]\\/\\\\]).)+(\\[\\[#.+\\]\\s*?,\\s*?\\[((?<!#).)*\\]\\s*?:\\s*?\\[((?<!#).)*\\]\\])?$";
export declare const SUPER_TABLE_COLUMN_REGEX = "[.*?]";
export declare const SUPER_TABLE_COLUMN_REGEX_PRECOMPILING: RegExp;
export declare const ARRAY_VALUE_REGEX = "{.*?}";
export declare const ARRAY_VALUE_REGEX_PRECOMPILING: RegExp;
export declare function regexTestSingeRange(token: string): boolean;
export declare function regexTestMultipleRange(token: string): boolean;
export declare function regexTestRow(token: string): boolean;
export declare function regexTestColumn(token: string): boolean;
export declare function regexTestSingleRow(token: string): boolean;
export declare function regexTestSingleColumn(token: string): boolean;
export declare function regexTestSuperTableColumn(token: string): boolean;
export declare function regexTestArrayValue(token: string): boolean;
export declare function isReferenceString(refString: string): boolean;
