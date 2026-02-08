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
export declare const DOCS_NORMAL_EDITOR_UNIT_ID_KEY = "__INTERNAL_EDITOR__DOCS_NORMAL";
export declare const DOCS_FORMULA_BAR_EDITOR_UNIT_ID_KEY = "__INTERNAL_EDITOR__DOCS_FORMULA_BAR";
export declare const DOCS_ZEN_EDITOR_UNIT_ID_KEY = "__INTERNAL_EDITOR__ZEN_EDITOR";
export declare const DEFAULT_EMPTY_DOCUMENT_VALUE = "\r\n";
export declare const IS_ROW_STYLE_PRECEDE_COLUMN_STYLE = "isRowStylePrecedeColumnStyle";
export declare const AUTO_HEIGHT_FOR_MERGED_CELLS: unique symbol;
export declare function createInternalEditorID(id: string): string;
export declare function isInternalEditorID(id: string): boolean;
