import { CustomFilterOperator } from '@univerjs/sheets-filter';
/**
 * @ignore
 */
export interface IFSheetsFilterEnumMixin {
    /** Please refer to {@link CustomFilterOperator}. */
    CustomFilterOperator: typeof CustomFilterOperator;
}
export declare class FSheetsFilterEnumMixin implements IFSheetsFilterEnumMixin {
    get CustomFilterOperator(): typeof CustomFilterOperator;
}
declare module '@univerjs/core/facade' {
    interface FEnum extends IFSheetsFilterEnumMixin {
    }
}
