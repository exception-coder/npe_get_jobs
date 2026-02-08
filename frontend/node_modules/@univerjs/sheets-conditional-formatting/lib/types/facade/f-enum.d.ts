import { CFNumberOperator, CFTimePeriodOperator } from '@univerjs/sheets-conditional-formatting';
/**
 * @ignore
 */
export interface IFSheetsConditionalFormattingEnum {
    /**
     * Conditional formatting number operator
     */
    ConditionFormatNumberOperatorEnum: typeof CFNumberOperator;
    /**
     * Conditional formatting time period operator
     */
    ConditionFormatTimePeriodOperatorEnum: typeof CFTimePeriodOperator;
}
export declare class FSheetsConditionalFormattingEnum implements IFSheetsConditionalFormattingEnum {
    get ConditionFormatNumberOperatorEnum(): typeof CFNumberOperator;
    get ConditionFormatTimePeriodOperatorEnum(): typeof CFTimePeriodOperator;
}
declare module '@univerjs/core/facade' {
    interface FEnum extends IFSheetsConditionalFormattingEnum {
    }
}
