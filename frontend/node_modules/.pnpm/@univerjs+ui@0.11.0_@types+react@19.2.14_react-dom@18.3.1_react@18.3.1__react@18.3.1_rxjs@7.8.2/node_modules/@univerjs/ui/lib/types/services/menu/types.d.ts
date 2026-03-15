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
export declare enum MenuManagerPosition {
    RIBBON = "ribbon",
    CONTEXT_MENU = "contextMenu"
}
export declare enum RibbonPosition {
    START = "ribbon.start",// RibbonStartGroup
    INSERT = "ribbon.insert",// RibbonInsertGroup
    FORMULAS = "ribbon.formulas",// RibbonFormulasGroup
    DATA = "ribbon.data",// RibbonDataGroup
    VIEW = "ribbon.view",// RibbonViewGroup
    OTHERS = "ribbon.others"
}
export declare enum RibbonStartGroup {
    HISTORY = "ribbon.start.history",
    FORMAT = "ribbon.start.format",
    LAYOUT = "ribbon.start.layout",
    OTHERS = "ribbon.start.others"
}
export declare enum RibbonInsertGroup {
    EDIT = "ribbon.insert.edit",
    MEDIA = "ribbon.insert.media",
    OTHERS = "ribbon.insert.others"
}
export declare enum RibbonFormulasGroup {
    BASIC = "ribbon.formulas.basic",
    OTHERS = "ribbon.formulas.others"
}
export declare enum RibbonDataGroup {
    FORMULAS = "ribbon.data.formulas",
    RULES = "ribbon.data.rules",
    ORGANIZATION = "ribbon.data.organization",
    OTHERS = "ribbon.data.others"
}
export declare enum RibbonViewGroup {
    DISPLAY = "ribbon.view.display",
    VISIBILITY = "ribbon.view.Visibility",
    OTHERS = "ribbon.view.others"
}
export declare enum RibbonOthersGroup {
    OTHERS = "ribbon.others.others"
}
export declare enum ContextMenuPosition {
    MAIN_AREA = "contextMenu.mainArea",
    COL_HEADER = "contextMenu.colHeader",
    ROW_HEADER = "contextMenu.rowHeader",
    FOOTER_TABS = "contextMenu.footerTabs",
    FOOTER_MENU = "contextMenu.footerMenu",
    /**
     * paragraph context menu in doc
     */
    PARAGRAPH = "contextMenu.paragraph"
}
export declare enum ContextMenuGroup {
    /**
     * quick context menu, displayed as icon
     */
    QUICK = "contextMenu.quick",
    FORMAT = "contextMenu.format",
    LAYOUT = "contextMenu.layout",
    DATA = "contextMenu.data",
    OTHERS = "contextMenu.others"
}
