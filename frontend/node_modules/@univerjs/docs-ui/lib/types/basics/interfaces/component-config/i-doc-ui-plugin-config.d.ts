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
export interface ILayout {
    docContainerConfig?: DocContainerConfig;
    toolbarConfig?: DocToolbarConfig;
}
export interface DocContainerConfig {
    outerLeft?: boolean;
    outerRight?: boolean;
    header?: boolean;
    footer?: boolean;
    sideMenu?: boolean;
    innerLeft?: boolean;
    innerRight?: boolean;
    frozenHeaderLT?: boolean;
    frozenHeaderRT?: boolean;
    frozenHeaderLM?: boolean;
    frozenContent?: boolean;
    infoBar?: boolean;
    toolbar?: boolean;
    contentSplit?: boolean | string;
}
export interface DocToolbarConfig {
    undo?: boolean;
    redo?: boolean;
    paintFormat?: boolean;
    currencyFormat?: boolean;
    percentageFormat?: boolean;
    numberDecrease?: boolean;
    numberIncrease?: boolean;
    font?: boolean;
    moreFormats?: boolean;
    fontSize?: boolean;
    bold?: boolean;
    italic?: boolean;
    strikethrough?: boolean;
    underline?: boolean;
    textColor?: boolean;
    fillColor?: boolean;
    border?: boolean;
    horizontalAlignMode?: boolean;
    verticalAlignMode?: boolean;
    textWrapMode?: boolean;
    textRotateMode?: boolean;
    mergeCell?: boolean;
}
