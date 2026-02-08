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
export declare enum operatorToken {
    PLUS = "+",
    MINUS = "-",
    MULTIPLY = "*",
    DIVIDED = "/",
    CONCATENATE = "&",
    POWER = "^",
    EQUALS = "=",
    NOT_EQUAL = "<>",
    GREATER_THAN = ">",
    GREATER_THAN_OR_EQUAL = ">=",
    LESS_THAN = "<",
    LESS_THAN_OR_EQUAL = "<="
}
export declare enum compareToken {
    EQUALS = "=",
    NOT_EQUAL = "<>",
    GREATER_THAN = ">",
    GREATER_THAN_OR_EQUAL = ">=",
    LESS_THAN = "<",
    LESS_THAN_OR_EQUAL = "<="
}
export declare const OPERATOR_TOKEN_PRIORITY: Map<string, number>;
export declare const OPERATOR_TOKEN_SET: Set<string>;
export declare const OPERATOR_TOKEN_COMPARE_SET: Set<string>;
export declare enum matchToken {
    OPEN_BRACKET = "(",
    CLOSE_BRACKET = ")",
    COMMA = ",",
    SINGLE_QUOTATION = "'",
    DOUBLE_QUOTATION = "\"",
    OPEN_BRACES = "{",
    CLOSE_BRACES = "}",
    COLON = ":",
    OPEN_SQUARE_BRACKET = "[",
    CLOSE_SQUARE_BRACKET = "]"
}
export declare enum suffixToken {
    PERCENTAGE = "%",
    POUND = "#"
}
export declare const SUFFIX_TOKEN_SET: Set<string>;
export declare enum prefixToken {
    AT = "@",
    MINUS = "-",
    PLUS = "+"
}
export declare const SPACE_TOKEN = " ";
