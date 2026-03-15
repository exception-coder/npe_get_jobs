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
export declare enum DataStreamTreeNodeType {
    PARAGRAPH = "PARAGRAPH",// \r  段落
    SECTION_BREAK = "SECTION_BREAK",// \n  章节
    TABLE = "TABLE",
    TABLE_ROW = "TABLE_ROW",
    TABLE_CELL = "TABLE_CELL",
    CUSTOM_BLOCK = "CUSTOM_BLOCK"
}
export declare enum DataStreamTreeTokenType {
    PARAGRAPH = "\r",// 段落
    SECTION_BREAK = "\n",// 章节
    TABLE_START = "\u001A",// 表格开始
    TABLE_ROW_START = "\u001B",// 表格行开始
    TABLE_CELL_START = "\u001C",// 表格单元格开始
    TABLE_CELL_END = "\u001D",// 表格单元格结束
    TABLE_ROW_END = "\u000E",// 表格行结束
    TABLE_END = "\u000F",// 表格结束
    /**
     * @deprecated
     */
    CUSTOM_RANGE_START = "\u001F",// 自定义范围开始
    /**
     * @deprecated
     */
    CUSTOM_RANGE_END = "\u001E",// 自定义范围结束
    COLUMN_BREAK = "\v",// 换列
    PAGE_BREAK = "\f",// 换页
    DOCS_END = "\0",// 文档结尾
    TAB = "\t",// 制表符
    CUSTOM_BLOCK = "\b",// 图片 mention 等不参与文档流的场景
    LETTER = "",
    SPACE = " "
}
/** Wrap your stream in a pair of custom range tokens. */
export declare function makeCustomRangeStream(stream: string): string;
