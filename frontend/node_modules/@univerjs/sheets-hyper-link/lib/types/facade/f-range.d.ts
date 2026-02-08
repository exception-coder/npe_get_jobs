import { FRange } from '@univerjs/sheets/facade';
export interface ICellHyperLink {
    id: string;
    startIndex: number;
    endIndex: number;
    url: string;
    label: string;
}
/**
 * @ignore
 */
export interface IFRangeHyperlinkMixin {
    /**
     * @deprecated use `range.setRichTextValueForCell(univerAPI.newRichText().insertLink(label, url))` instead
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     *
     * // Create a hyperlink to Univer on cell A1
     * const fRange = fWorksheet.getRange('A1');
     * const richText = univerAPI.newRichText().insertLink('Univer', 'https://univer.ai/');
     * fRange.setRichTextValueForCell(richText);
     * ```
     */
    setHyperLink(url: string, label?: string): Promise<boolean>;
    /**
     * @deprecated use `range.setRichTextValueForCell(range.getValue(true).getLinks())` instead
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     *
     * // Create a hyperlink to Univer on cell A1
     * const fRange = fWorksheet.getRange('A1');
     * const richText = univerAPI.newRichText().insertLink('Univer', 'https://univer.ai/');
     * fRange.setRichTextValueForCell(richText);
     *
     * // Get hyperlinks from cell A1
     * console.log(fRange.getValue(true).getLinks());
     * ```
     */
    getHyperLinks(): ICellHyperLink[];
    /**
     * @deprecated use `range.setRichTextValueForCell(range.getValue(true).copy().updateLink(id, url))` instead
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const fRange = fWorksheet.getRange('A1');
     * const richText = univerAPI.newRichText().insertLink('Univer', 'https://univer.ai/');
     * fRange.setRichTextValueForCell(richText);
     *
     * // Update hyperlink after 3 seconds
     * setTimeout(() => {
     *   const cellValue = fRange.getValue(true);
     *   const hyperlinks = cellValue.getLinks();
     *   const id = hyperlinks[0].rangeId;
     *   const newUrl = 'https://insight.univer.ai/';
     *   const newRichText = cellValue.copy().updateLink(id, newUrl);
     *   fRange.setRichTextValueForCell(newRichText);
     * }, 3000);
     * ```
     */
    updateHyperLink(id: string, url: string, label?: string): Promise<boolean>;
    /**
     * @deprecated use `range.setRichTextValueForCell(range.getValue(true).copy().cancelLink(id))` instead
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const fRange = fWorksheet.getRange('A1');
     * const richText = univerAPI.newRichText().insertLink('Univer', 'https://univer.ai/');
     * fRange.setRichTextValueForCell(richText);
     *
     * // Cancel hyperlink after 3 seconds
     * setTimeout(() => {
     *   const cellValue = fRange.getValue(true);
     *   const hyperlinks = cellValue.getLinks();
     *   const id = hyperlinks[0].rangeId;
     *   const newRichText = cellValue.copy().cancelLink(id);
     *   fRange.setRichTextValueForCell(newRichText);
     * }, 3000);
     * ```
     */
    cancelHyperLink(id: string): boolean;
    /**
     * Create a hyperlink url to this range
     * @returns {string} The url of this range
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const fRange = fWorksheet.getRange('A1');
     * const url = fRange.getUrl();
     * console.log(url);
     * ```
     */
    getUrl(): string;
}
export declare class FRangeHyperlinkMixin extends FRange implements IFRangeHyperlinkMixin {
    setHyperLink(url: string, label?: string): Promise<boolean>;
    getHyperLinks(): ICellHyperLink[];
    updateHyperLink(id: string, url: string, label?: string): Promise<boolean>;
    cancelHyperLink(id: string): boolean;
    getUrl(): string;
}
declare module '@univerjs/sheets/facade' {
    interface FRange extends IFRangeHyperlinkMixin {
    }
}
