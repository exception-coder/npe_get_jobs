import { IRange, IUnitRangeName, IUnitRangeWithName, AbsoluteRefType } from '@univerjs/core';
export interface IAbsoluteRefTypeForRange {
    startAbsoluteRefType: AbsoluteRefType;
    endAbsoluteRefType?: AbsoluteRefType;
}
/**
 *
 * @param singleRefString for example A1 or B10,  not A1:B10
 */
export declare function getAbsoluteRefTypeWithSingleString(singleRefString: string): AbsoluteRefType;
/**
 *
 * @param refString for example A1:B10
 */
export declare function getAbsoluteRefTypeWitString(refString: string): IAbsoluteRefTypeForRange;
/**
 * Serialize an `IRange` into a string.
 * @param range The `IRange` to be serialized
 */
export declare function serializeRange(range: IRange): string;
/**
 * Serialize an `IRange` and a sheetID into a string.
 * @param sheetName
 * @param range
 */
export declare function serializeRangeWithSheet(sheetName: string, range: IRange): string;
/**
 * Serialize an `IRange` and a sheetID into a string.
 * @param unit unitId or unitName
 * @param sheetName
 * @param range
 */
export declare function serializeRangeWithSpreadsheet(unit: string, sheetName: string, range: IRange): string;
export declare function serializeRangeToRefString(gridRangeName: IUnitRangeName): string;
export declare function singleReferenceToGrid(refBody: string): {
    row: number;
    column: number;
    absoluteRefType: AbsoluteRefType;
};
export declare function handleRefStringInfo(refString: string): {
    refBody: string;
    sheetName: string;
    unitId: string;
};
export declare function deserializeRangeWithSheet(refString: string): IUnitRangeName;
export declare function isReferenceStringWithEffectiveColumn(refString: string): boolean;
export declare function replaceRefPrefixString(token: string): string;
/**
 * implement getSheetIdByName
 * function getSheetIdByName(name: string) {
        return univerInstanceService.getCurrentUnitForType<Workbook>(UniverInstanceType.UNIVER_SHEET)?.getSheetBySheetName(name)?.getSheetId() || '';
    }
 */
export declare function getRangeWithRefsString(refString: string, getSheetIdByName: (name: string) => string): IUnitRangeWithName[];
export declare function isReferenceStrings(refString: string): boolean;
/**
 * Determine whether the sheet name needs to be wrapped in quotes
 * Excel will quote the worksheet name if any of the following is true:
 *  - It contains any space or punctuation characters, such as  ()$,;-{}"'（）【】“”‘’%… and many more
 *  - It is a valid cell reference in A1 notation, e.g. B1048576 is quoted
 *  - It is a valid cell reference in R1C1 notation, e.g. RC, RC2, R5C, R-4C, RC-8, R, C
 *  - It starts with a non-letter, e.g. 99, 1.5, 12a, 💩a
 *  - Excel will not quote worksheet names if they only contain non-punctuation, non-letter characters in non-initial positions. For example, a💩 remains unquoted.*
 *  In addition, if a worksheet name contains single quotes, these will be doubled up within the name itself. For example, the sheet name a'b'c becomes 'a''b''c'.
 *
 *  reference https://stackoverflow.com/questions/41677779/when-does-excel-surround-sheet-names-with-single-quotes-in-workbook-xml-or-othe
 *
 * @param name Sheet name
 * @returns Result
 */
export declare function needsQuoting(name: string): boolean;
/**
 * Add quotes to the sheet name
 */
export declare function addQuotesBothSides(name: string): string;
/**
 * Add a single quote before the single quote
 * @param name
 * @returns Quoted name
 */
export declare function quoteSheetName(name: string): string;
/**
 * Replace double single quotes with single quotes
 * @param name
 * @returns Unquoted name
 */
export declare function unquoteSheetName(name: string): string;
