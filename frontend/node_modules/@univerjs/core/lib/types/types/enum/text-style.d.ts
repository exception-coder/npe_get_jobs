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
 * An enum that specifies the text direction of a cell.
 */
export declare enum TextDirection {
    UNSPECIFIED = 0,
    LEFT_TO_RIGHT = 1,
    RIGHT_TO_LEFT = 2
}
/**
 * Types of text decoration
 */
export declare enum TextDecoration {
    DASH = 0,
    DASH_DOT_DOT_HEAVY = 1,
    DASH_DOT_HEAVY = 2,
    DASHED_HEAVY = 3,
    DASH_LONG = 4,
    DASH_LONG_HEAVY = 5,
    DOT_DASH = 6,
    DOT_DOT_DASH = 7,
    DOTTED = 8,
    DOTTED_HEAVY = 9,
    DOUBLE = 10,
    NONE = 11,
    SINGLE = 12,
    THICK = 13,
    WAVE = 14,
    WAVY_DOUBLE = 15,
    WAVY_HEAVY = 16,
    WORDS = 17
}
/**
 * An enum that specifies the horizontal alignment of text.
 */
export declare enum HorizontalAlign {
    UNSPECIFIED = 0,// The horizontal alignment is not specified. Do not use this.
    LEFT = 1,// The text is explicitly aligned to the left of the cell.
    CENTER = 2,// text is explicitly aligned to the center of the cell.
    RIGHT = 3,// The text is explicitly aligned to the right of the cell.
    JUSTIFIED = 4,// The paragraph is justified.
    BOTH = 5,// The paragraph is justified.
    DISTRIBUTED = 6
}
/**
 * An enum that specifies the vertical alignment of text.
 */
export declare enum VerticalAlign {
    UNSPECIFIED = 0,
    TOP = 1,// The text is explicitly aligned to the top of the cell.
    MIDDLE = 2,// The text is explicitly aligned to the middle of the cell.
    BOTTOM = 3
}
/**
 * An enumeration of the strategies used to handle cell text wrapping.
 */
export declare enum WrapStrategy {
    UNSPECIFIED = 0,
    /**
     * Lines that are longer than the cell width will be written in the next cell over, so long as that cell is empty. If the next cell over is non-empty, this behaves the same as CLIP . The text will never wrap to the next line unless the user manually inserts a new line. Example:
     * | First sentence. |
     * | Manual newline that is very long. <- Text continues into next cell
     * | Next newline.   |
     */
    OVERFLOW = 1,
    /**
     * Lines that are longer than the cell width will be clipped. The text will never wrap to the next line unless the user manually inserts a new line. Example:
     * | First sentence. |
     * | Manual newline t| <- Text is clipped
     * | Next newline.   |
     */
    CLIP = 2,
    /**
     * Words that are longer than a line are wrapped at the character level rather than clipped. Example:
     * | Cell has a |
     * | loooooooooo| <- Word is broken.
     * | ong word.  |
     */
    WRAP = 3
}
/**
 * FontItalic
 */
export declare enum FontItalic {
    NORMAL = 0,
    ITALIC = 1
}
/**
 * FontWeight
 */
export declare enum FontWeight {
    NORMAL = 0,
    BOLD = 1
}
export declare enum BaselineOffset {
    NORMAL = 1,
    SUBSCRIPT = 2,
    SUPERSCRIPT = 3
}
/**
 * General Boolean Enum
 */
export declare enum BooleanNumber {
    FALSE = 0,
    TRUE = 1
}
/**
 * General Boolean Enum
 */
export declare enum CellValueType {
    STRING = 1,
    NUMBER = 2,
    BOOLEAN = 3,
    FORCE_STRING = 4
}
