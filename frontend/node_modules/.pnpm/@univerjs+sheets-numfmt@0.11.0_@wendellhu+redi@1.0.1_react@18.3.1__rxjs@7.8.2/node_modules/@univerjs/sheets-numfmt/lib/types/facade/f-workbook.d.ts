import { INumfmtLocaleTag } from '@univerjs/core';
import { FWorkbook } from '@univerjs/sheets/facade';
export interface IFWorkbookNumfmtMixin {
    /**
     * Set the locale for number formatting.
     * @param {INumfmtLocaleTag} locale zh_CN,zh_TW,zh_HK,ja,ko,th,cs,da,nl,en,en_AU,en_CA,en_GB,en_IE,fi,fr,fr_CA,fr_CH,de,de_CH,el,hu,is,id,it,it_CH,nb,no,pl,pt,pt_BR,ru,sk,es,es_AR,es_BO,es_CL,es_CO,es_EC,es_MX,es_PY,es_UY,es_VE,sv,tr,cy,az,be,bg,ca,fil,gu,he,hr,hy,ka,kk,kn,lt,lv,ml,mn,mr,my,pa,ro,sl,sr,ta,te,uk,vi,ar,bn,hi
     * @returns {FWorkbook} The FWorkbook instance for chaining.
     * @memberof IFWorkbookNumfmtMixin
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const fRange = fWorksheet.getRange('A1');
     * fRange.setValue(1234.567).setNumberFormat('#,##0.00');
     *
     * // Set the locale en_US for number formatting.
     * fWorkbook.setNumfmtLocal('en_US');
     * console.log(fRange.getDisplayValue()); // 1,234.57
     *
     * // Set the locale de_DE for number formatting.
     * fWorkbook.setNumfmtLocal('de_DE');
     * console.log(fRange.getDisplayValue()); // 1.234,57
     * ```
     */
    setNumfmtLocal(locale: INumfmtLocaleTag): FWorkbook;
}
export declare class FWorkbookLegacy extends FWorkbook implements IFWorkbookNumfmtMixin {
    setNumfmtLocal(locale: INumfmtLocaleTag): FWorkbook;
}
declare module '@univerjs/sheets/facade' {
    interface FWorkbook extends IFWorkbookNumfmtMixin {
    }
}
