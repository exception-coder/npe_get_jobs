import { ColorBuilder } from '@univerjs/core';
import { FWorkbook } from '@univerjs/sheets/facade';
/**
 * @ignore
 */
export interface IFWorkbookConditionalFormattingMixin {
    /**
     * @deprecated use `univerAPI.newColor()` as instead.
     */
    newColor(): ColorBuilder;
}
export declare class FWorkbookConditionalFormattingMixin extends FWorkbook implements IFWorkbookConditionalFormattingMixin {
    newColor(): ColorBuilder;
}
declare module '@univerjs/sheets/facade' {
    interface FWorkbook extends IFWorkbookConditionalFormattingMixin {
    }
}
