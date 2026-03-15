import { IRange } from '@univerjs/core';
import { ISheetHyperLinkInfo, SheetsHyperLinkParserService } from '@univerjs/sheets-hyper-link';
import { FRange, FWorkbook } from '@univerjs/sheets/facade';
/**
 * @hideconstructor
 */
export declare class SheetHyperLinkBuilder {
    private _workbook;
    private readonly _parserService;
    constructor(_workbook: FWorkbook, _parserService: SheetsHyperLinkParserService);
    getRangeUrl(range: FRange): this;
}
/**
 * @ignore
 */
export interface IFWorkbookHyperlinkMixin {
    /**
     * @deprecated use `getUrl` method in `FRange` or `FWorksheet` instead.
     */
    createSheetHyperlink(this: FWorkbook, sheetId: string, range?: string | IRange): string;
    /**
     * Parse the hyperlink string to get the hyperlink info.
     * @param {string} hyperlink - The hyperlink string.
     * @returns {ISheetHyperLinkInfo} The hyperlink info.
     * @example
     * ``` ts
     * // Create a hyperlink to the range A1:D10 of the current sheet
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const fRange = fWorksheet.getRange('A1:D10');
     * const hyperlink = fRange.getUrl();
     *
     * // Parse the hyperlink
     * const hyperlinkInfo = fWorkbook.parseSheetHyperlink(hyperlink);
     * console.log(hyperlinkInfo);
     * ```
     */
    parseSheetHyperlink(this: FWorkbook, hyperlink: string): ISheetHyperLinkInfo;
}
export declare class FWorkbookHyperLinkMixin extends FWorkbook implements IFWorkbookHyperlinkMixin {
    createSheetHyperlink(sheetId: string, range?: string | IRange): string;
    /**
     * Parse the hyperlink string to get the hyperlink info.
     * @param {string} hyperlink the hyperlink string
     * @returns {ISheetHyperLinkInfo} the hyperlink info
     */
    parseSheetHyperlink(hyperlink: string): ISheetHyperLinkInfo;
}
declare module '@univerjs/sheets/facade' {
    interface FWorkbook extends IFWorkbookHyperlinkMixin {
    }
}
