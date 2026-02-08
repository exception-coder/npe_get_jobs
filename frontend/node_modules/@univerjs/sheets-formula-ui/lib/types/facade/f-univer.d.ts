import { IUnitRangeName } from '@univerjs/core';
import { IShowRangeSelectorDialogOptions } from '@univerjs/sheets-formula-ui';
import { FUniver } from '@univerjs/core/facade';
export interface ISheetsFormulaUIMixin {
    /**
     * Shows the range selector dialog.
     *
     * @param {IShowRangeSelectorDialogOptions} opts The options of the range selector dialog.
     * @returns {Promise<IUnitRangeName[]>} The selected ranges.
     * @example
     * ```typescript
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const unitId = fWorkbook.getId();
     *
     * await univerAPI.showRangeSelectorDialog({
     *   unitId,
     *   subUnitId: fWorksheet.getSheetId(),
     *   initialValue: [{
     *     unitId,
     *     sheetName: fWorksheet.getSheetName(),
     *     range: fWorksheet.getRange('A1:B2').getRange()
     *   }],
     *   maxRangeCount: 2,
     *   supportAcrossSheet: true,
     *   callback: (ranges, isCancel) => {
     *     // Handle the selected ranges
     *     console.log(ranges, isCancel);
     *   }
     * });
     * ```
     */
    showRangeSelectorDialog(opts: IShowRangeSelectorDialogOptions): Promise<IUnitRangeName[]>;
}
export declare class FSheetsFormulaUIUniver extends FUniver implements ISheetsFormulaUIMixin {
    showRangeSelectorDialog(opts: IShowRangeSelectorDialogOptions): Promise<IUnitRangeName[]>;
}
declare module '@univerjs/core/facade' {
    interface FUniver extends ISheetsFormulaUIMixin {
    }
}
