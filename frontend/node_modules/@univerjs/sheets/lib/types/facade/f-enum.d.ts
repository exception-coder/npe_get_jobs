import { SheetSkeletonChangeType, SheetValueChangeType, SplitDelimiterEnum } from '@univerjs/sheets';
/**
 * @ignore
 */
export interface IFSheetsEnum {
    /**
     * Sheet value change command types. These commands affect the content or style of cells.
     * Includes operations like setting cell values, moving ranges, merging cells, and applying styles.
     */
    SheetValueChangeType: typeof SheetValueChangeType;
    /**
     * Sheet skeleton change command types. These commands affect the structure of the worksheet.
     * Includes operations like changing row/column dimensions, visibility, and grid properties.
     */
    SheetSkeletonChangeType: typeof SheetSkeletonChangeType;
    /**
     * Split delimiter types.
     */
    SplitDelimiterType: typeof SplitDelimiterEnum;
}
export declare class FSheetsEnum implements IFSheetsEnum {
    get SheetValueChangeType(): typeof SheetValueChangeType;
    get SheetSkeletonChangeType(): typeof SheetSkeletonChangeType;
    get SplitDelimiterType(): typeof SplitDelimiterEnum;
}
declare module '@univerjs/core/facade' {
    interface FEnum extends IFSheetsEnum {
    }
}
