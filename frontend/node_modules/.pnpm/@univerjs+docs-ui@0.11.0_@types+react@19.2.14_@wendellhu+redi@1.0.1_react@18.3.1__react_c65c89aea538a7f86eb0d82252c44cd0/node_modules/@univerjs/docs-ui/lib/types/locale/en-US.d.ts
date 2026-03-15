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
declare const locale: {
    toolbar: {
        undo: string;
        redo: string;
        font: string;
        fontSize: string;
        bold: string;
        italic: string;
        strikethrough: string;
        subscript: string;
        superscript: string;
        underline: string;
        textColor: {
            main: string;
            right: string;
        };
        fillColor: {
            main: string;
            right: string;
        };
        table: {
            main: string;
            insert: string;
            colCount: string;
            rowCount: string;
        };
        resetColor: string;
        order: string;
        unorder: string;
        checklist: string;
        documentFlavor: string;
        alignLeft: string;
        alignCenter: string;
        alignRight: string;
        alignJustify: string;
        horizontalLine: string;
        headerFooter: string;
        pageSetup: string;
    };
    table: {
        insert: string;
        insertRowAbove: string;
        insertRowBelow: string;
        insertColumnLeft: string;
        insertColumnRight: string;
        delete: string;
        deleteRows: string;
        deleteColumns: string;
        deleteTable: string;
    };
    headerFooter: {
        header: string;
        footer: string;
        panel: string;
        firstPageCheckBox: string;
        oddEvenCheckBox: string;
        headerTopMargin: string;
        footerBottomMargin: string;
        closeHeaderFooter: string;
        disableText: string;
    };
    doc: {
        menu: {
            paragraphSetting: string;
        };
        slider: {
            paragraphSetting: string;
        };
        paragraphSetting: {
            alignment: string;
            indentation: string;
            left: string;
            right: string;
            firstLine: string;
            hanging: string;
            spacing: string;
            before: string;
            after: string;
            lineSpace: string;
            multiSpace: string;
            fixedValue: string;
        };
    };
    rightClick: {
        copy: string;
        cut: string;
        paste: string;
        delete: string;
        bulletList: string;
        orderList: string;
        checkList: string;
        insertBellow: string;
    };
    'page-settings': {
        'document-setting': string;
        'paper-size': string;
        'page-size': {
            main: string;
            a4: string;
            a3: string;
            a5: string;
            b4: string;
            b5: string;
            letter: string;
            legal: string;
            tabloid: string;
            statement: string;
            executive: string;
            folio: string;
        };
        orientation: string;
        portrait: string;
        landscape: string;
        'custom-paper-size': string;
        top: string;
        bottom: string;
        left: string;
        right: string;
        cancel: string;
        confirm: string;
    };
};
export default locale;
