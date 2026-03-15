import { FWorksheet } from '@univerjs/sheets/facade';
import { FFilter } from './f-filter';
/**
 * @ignore
 */
export interface IFWorksheetFilter {
    /**
     * Get the filter for the current worksheet.
     * @returns {FFilter | null} The interface class to handle the filter. If the worksheet does not have a filter,
     * this method would return `null`.
     * @example
     * ```typescript
     * const workbook = univerAPI.getActiveWorkbook();
     * const worksheet = workbook.getActiveSheet();
     * const filter = worksheet.getFilter();
     * console.log(filter, filter?.getRange().getA1Notation());
     * ```
     */
    getFilter(): FFilter | null;
}
export declare class FWorksheetFilter extends FWorksheet implements IFWorksheetFilter {
    getFilter(): FFilter | null;
    private _getFilterModel;
}
declare module '@univerjs/sheets/facade' {
    interface FWorksheet extends IFWorksheetFilter {
    }
}
