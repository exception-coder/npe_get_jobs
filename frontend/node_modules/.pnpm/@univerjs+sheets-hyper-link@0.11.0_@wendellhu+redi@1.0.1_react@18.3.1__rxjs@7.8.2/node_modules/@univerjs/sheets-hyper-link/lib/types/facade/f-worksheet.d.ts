import { FWorksheet } from '@univerjs/sheets/facade';
/**
 * @ignore
 */
export interface IFWorksheetHyperlinkMixin {
    /**
     * Create a hyperlink url to this sheet
     * @returns {string} The url of this sheet
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const url = fWorksheet.getUrl();
     * console.log(url);
     * ```
     */
    getUrl(): string;
}
export declare class FWorksheetHyperlinkMixin extends FWorksheet implements IFWorksheetHyperlinkMixin {
    getUrl(): string;
}
declare module '@univerjs/sheets/facade' {
    interface FWorksheet extends IFWorksheetHyperlinkMixin {
    }
}
