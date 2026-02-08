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
export declare enum CopyPasteType {
    PASTE_NORMAL = 0,// Paste values, formulas, formats and merges.
    PASTE_NO_BORDERS = 1,// Paste values, formulas, formats and merges but without borders.
    PASTE_FORMAT = 2,// Paste the style
    PASTE_FORMULA = 3,// Paste the formulas only.
    PASTE_DATA_VALIDATION = 4,// Paste the data validation only.
    PASTE_VALUES = 5,// Paste the values ONLY without formats, formulas or merges.
    PASTE_CONDITIONAL_FORMATTING = 6,// Paste the color rules only.
    PASTE_COLUMN_WIDTHS = 7
}
