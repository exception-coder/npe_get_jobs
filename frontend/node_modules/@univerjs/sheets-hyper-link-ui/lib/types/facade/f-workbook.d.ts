import { FWorkbook } from '@univerjs/sheets/facade';
interface IFWorkbookHyperlinkUIMixin {
    /**
     * Navigate to the sheet hyperlink.
     * @param {string} hyperlink - The hyperlink string
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const sheets = fWorkbook.getSheets();
     *
     * // Create a hyperlink to the cell F6 in the first sheet
     * const sheet1 = sheets[0];
     * const range = sheet1.getRange('F6');
     * const hyperlink = range.getUrl();
     *
     * // Switch to the second sheet
     * fWorkbook.setActiveSheet(sheets[1]);
     * console.log(fWorkbook.getActiveSheet().getSheetName());
     *
     * // Navigate to the hyperlink after 3 seconds
     * setTimeout(() => {
     *   fWorkbook.navigateToSheetHyperlink(hyperlink);
     *   console.log(fWorkbook.getActiveSheet().getSheetName());
     * }, 3000);
     * ```
     */
    navigateToSheetHyperlink(this: FWorkbook, hyperlink: string): void;
}
declare module '@univerjs/sheets/facade' {
    interface FWorkbook extends IFWorkbookHyperlinkUIMixin {
    }
}
export {};
