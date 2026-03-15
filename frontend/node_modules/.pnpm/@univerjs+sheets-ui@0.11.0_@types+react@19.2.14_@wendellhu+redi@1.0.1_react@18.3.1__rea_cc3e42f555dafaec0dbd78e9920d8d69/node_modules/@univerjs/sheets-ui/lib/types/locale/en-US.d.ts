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
    spreadsheetLabel: string;
    spreadsheetRightLabel: string;
    toolbar: {
        undo: string;
        redo: string;
        formatPainter: string;
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
        resetColor: string;
        fillColor: {
            main: string;
            right: string;
        };
        border: {
            main: string;
            right: string;
        };
        mergeCell: {
            main: string;
            right: string;
        };
        horizontalAlignMode: {
            main: string;
            right: string;
        };
        verticalAlignMode: {
            main: string;
            right: string;
        };
        textWrapMode: {
            main: string;
            right: string;
        };
        textRotateMode: {
            main: string;
            right: string;
        };
        more: string;
        toggleGridlines: string;
    };
    align: {
        left: string;
        center: string;
        right: string;
        top: string;
        middle: string;
        bottom: string;
    };
    button: {
        confirm: string;
        cancel: string;
        close: string;
        update: string;
        delete: string;
        insert: string;
        prevPage: string;
        nextPage: string;
        total: string;
    };
    punctuation: {
        tab: string;
        semicolon: string;
        comma: string;
        space: string;
    };
    colorPicker: {
        collapse: string;
        customColor: string;
        change: string;
        confirmColor: string;
        cancelColor: string;
    };
    borderLine: {
        borderTop: string;
        borderBottom: string;
        borderLeft: string;
        borderRight: string;
        borderNone: string;
        borderAll: string;
        borderOutside: string;
        borderInside: string;
        borderHorizontal: string;
        borderVertical: string;
        borderColor: string;
        borderSize: string;
        borderType: string;
    };
    merge: {
        all: string;
        vertical: string;
        horizontal: string;
        cancel: string;
        overlappingError: string;
        partiallyError: string;
        confirm: {
            title: string;
            cancel: string;
            confirm: string;
            warning: string;
            dismantleMergeCellWarning: string;
        };
    };
    filter: {
        confirm: {
            error: string;
            notAllowedToInsertRange: string;
        };
    };
    textWrap: {
        overflow: string;
        wrap: string;
        clip: string;
    };
    textRotate: {
        none: string;
        angleUp: string;
        angleDown: string;
        vertical: string;
        rotationUp: string;
        rotationDown: string;
    };
    sheetConfig: {
        delete: string;
        copy: string;
        rename: string;
        changeColor: string;
        hide: string;
        unhide: string;
        moveLeft: string;
        moveRight: string;
        resetColor: string;
        cancelText: string;
        chooseText: string;
        tipNameRepeat: string;
        noMoreSheet: string;
        confirmDelete: string;
        redoDelete: string;
        noHide: string;
        chartEditNoOpt: string;
        sheetNameErrorTitle: string;
        sheetNameSpecCharError: string;
        sheetNameCannotIsEmptyError: string;
        sheetNameAlreadyExistsError: string;
        deleteSheet: string;
        deleteSheetContent: string;
        addProtectSheet: string;
        removeProtectSheet: string;
        changeSheetPermission: string;
        viewAllProtectArea: string;
    };
    rightClick: {
        copy: string;
        cut: string;
        paste: string;
        pasteSpecial: string;
        pasteValue: string;
        pasteFormat: string;
        pasteColWidth: string;
        pasteBesidesBorder: string;
        insert: string;
        insertRow: string;
        insertRowBefore: string;
        insertRowsAfter: string;
        insertRowsAbove: string;
        insertRowsAfterSuffix: string;
        insertRowsAboveSuffix: string;
        insertColumn: string;
        insertColumnBefore: string;
        insertColsLeft: string;
        insertColsRight: string;
        insertColsLeftSuffix: string;
        insertColsRightSuffix: string;
        delete: string;
        deleteCell: string;
        insertCell: string;
        deleteSelected: string;
        hide: string;
        hideSelected: string;
        showHide: string;
        toTopAdd: string;
        toBottomAdd: string;
        toLeftAdd: string;
        toRightAdd: string;
        deleteSelectedRow: string;
        deleteSelectedColumn: string;
        hideSelectedRow: string;
        showHideRow: string;
        rowHeight: string;
        hideSelectedColumn: string;
        showHideColumn: string;
        columnWidth: string;
        moveLeft: string;
        moveUp: string;
        moveRight: string;
        moveDown: string;
        add: string;
        row: string;
        column: string;
        confirm: string;
        clearSelection: string;
        clearContent: string;
        clearFormat: string;
        clearAll: string;
        root: string;
        log: string;
        delete0: string;
        removeDuplicate: string;
        byRow: string;
        byCol: string;
        generateNewMatrix: string;
        fitContent: string;
        freeze: string;
        freezeCol: string;
        freezeRow: string;
        cancelFreeze: string;
        deleteAllRowsAlert: string;
        deleteAllColumnsAlert: string;
        hideAllRowsAlert: string;
        hideAllColumnsAlert: string;
        protectRange: string;
        editProtectRange: string;
        removeProtectRange: string;
        turnOnProtectRange: string;
        viewAllProtectArea: string;
    };
    info: {
        tooltip: string;
        error: string;
        notChangeMerge: string;
        detailUpdate: string;
        detailSave: string;
        row: string;
        column: string;
        loading: string;
        copy: string;
        return: string;
        rename: string;
        tips: string;
        noName: string;
        wait: string;
        add: string;
        addLast: string;
        backTop: string;
        pageInfo: string;
        nextPage: string;
        tipInputNumber: string;
        tipInputNumberLimit: string;
        tipRowHeightLimit: string;
        tipColumnWidthLimit: string;
        pageInfoFull: string;
        problem: string;
        forceStringInfo: string;
    };
    clipboard: {
        paste: {
            exceedMaxCells: string;
            overlappingMergedCells: string;
        };
        shortCutNotify: {
            title: string;
            useShortCutInstead: string;
        };
    };
    statusbar: {
        sum: string;
        average: string;
        min: string;
        max: string;
        count: string;
        countA: string;
        clickToCopy: string;
        copied: string;
    };
    autoFill: {
        copy: string;
        series: string;
        formatOnly: string;
        noFormat: string;
    };
    rangeSelector: {
        placeholder: string;
        tooltip: string;
    };
    shortcut: {
        sheet: {
            'zoom-in': string;
            'zoom-out': string;
            'reset-zoom': string;
            'select-below-cell': string;
            'select-up-cell': string;
            'select-left-cell': string;
            'select-right-cell': string;
            'select-next-cell': string;
            'select-previous-cell': string;
            'select-up-value-cell': string;
            'select-below-value-cell': string;
            'select-left-value-cell': string;
            'select-right-value-cell': string;
            'expand-selection-down': string;
            'expand-selection-up': string;
            'expand-selection-left': string;
            'expand-selection-right': string;
            'expand-selection-to-left-gap': string;
            'expand-selection-to-below-gap': string;
            'expand-selection-to-right-gap': string;
            'expand-selection-to-up-gap': string;
            'select-all': string;
            'toggle-editing': string;
            'delete-and-start-editing': string;
            'abort-editing': string;
            'break-line': string;
            'set-bold': string;
            'start-editing': string;
            'set-italic': string;
            'set-underline': string;
            'set-strike-through': string;
        };
    };
    'sheet-view': string;
    'sheet-edit': string;
    definedName: {
        managerTitle: string;
        managerDescription: string;
        addButton: string;
        featureTitle: string;
        ratioRange: string;
        ratioFormula: string;
        confirm: string;
        cancel: string;
        scopeWorkbook: string;
        inputNamePlaceholder: string;
        inputCommentPlaceholder: string;
        inputRangePlaceholder: string;
        inputFormulaPlaceholder: string;
        nameEmpty: string;
        nameDuplicate: string;
        formulaOrRefStringEmpty: string;
        formulaOrRefStringInvalid: string;
        defaultName: string;
        updateButton: string;
        deleteButton: string;
        deleteConfirmText: string;
        nameConflict: string;
        nameInvalid: string;
        nameSheetConflict: string;
    };
    uploadLoading: {
        loading: string;
        error: string;
    };
    permission: {
        toolbarMenu: string;
        panel: {
            title: string;
            name: string;
            protectedRange: string;
            permissionDirection: string;
            permissionDirectionPlaceholder: string;
            editPermission: string;
            onlyICanEdit: string;
            designedUserCanEdit: string;
            viewPermission: string;
            othersCanView: string;
            noOneElseCanView: string;
            designedPerson: string;
            addPerson: string;
            canEdit: string;
            canView: string;
            delete: string;
            currentSheet: string;
            allSheet: string;
            edit: string;
            Print: string;
            Comment: string;
            Copy: string;
            SetCellStyle: string;
            SetCellValue: string;
            SetHyperLink: string;
            Sort: string;
            Filter: string;
            PivotTable: string;
            FloatImage: string;
            RowHeightColWidth: string;
            RowHeightColWidthReadonly: string;
            FilterReadonly: string;
            nameError: string;
            created: string;
            iCanEdit: string;
            iCanNotEdit: string;
            iCanView: string;
            iCanNotView: string;
            emptyRangeError: string;
            rangeOverlapError: string;
            rangeOverlapOverPermissionError: string;
            InsertHyperlink: string;
            SetRowStyle: string;
            SetColumnStyle: string;
            InsertColumn: string;
            InsertRow: string;
            DeleteRow: string;
            DeleteColumn: string;
            EditExtraObject: string;
        };
        dialog: {
            allowUserToEdit: string;
            allowedPermissionType: string;
            setCellValue: string;
            setCellStyle: string;
            copy: string;
            alert: string;
            search: string;
            alertContent: string;
            userEmpty: string;
            listEmpty: string;
            commonErr: string;
            editErr: string;
            pasteErr: string;
            setStyleErr: string;
            copyErr: string;
            workbookCopyErr: string;
            setRowColStyleErr: string;
            moveRowColErr: string;
            moveRangeErr: string;
            autoFillErr: string;
            filterErr: string;
            operatorSheetErr: string;
            insertOrDeleteMoveRangeErr: string;
            printErr: string;
            formulaErr: string;
            hyperLinkErr: string;
        };
        button: {
            confirm: string;
            cancel: string;
            addNewPermission: string;
        };
    };
};
export default locale;
