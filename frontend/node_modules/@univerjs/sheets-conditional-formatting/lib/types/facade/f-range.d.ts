import { IAnchor, IConditionFormattingRule } from '@univerjs/sheets-conditional-formatting';
import { FRange } from '@univerjs/sheets/facade';
import { FConditionalFormattingBuilder } from './f-conditional-formatting-builder';
/**
 * @ignore
 */
export interface IFRangeConditionalFormattingMixin {
    /**
     * Gets all the conditional formatting for the current range.
     * @returns {IConditionFormattingRule[]} conditional formatting rules for the current range.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     *
     * // Create a conditional formatting rule that sets the cell format to italic, red background, and green font color when the cell is not empty.
     * const fRange = fWorksheet.getRange('A1:T100');
     * const rule = fWorksheet.newConditionalFormattingRule()
     *   .whenCellNotEmpty()
     *   .setRanges([fRange.getRange()])
     *   .setItalic(true)
     *   .setBackground('red')
     *   .setFontColor('green')
     *   .build();
     * fWorksheet.addConditionalFormattingRule(rule);
     *
     * // Get all the conditional formatting rules for the range F6:H8.
     * const targetRange = fWorksheet.getRange('F6:H8');
     * const rules = targetRange.getConditionalFormattingRules();
     * console.log(rules);
     * ```
     */
    getConditionalFormattingRules(): IConditionFormattingRule[];
    /**
     * Creates a constructor for conditional formatting
     * @returns {FConditionalFormattingBuilder} The conditional formatting builder
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     *
     * // Create a conditional formatting rule that sets the cell format to italic, red background, and green font color when the cell is not empty.
     * const fRange = fWorksheet.getRange('A1:T100');
     * const rule = fRange.createConditionalFormattingRule()
     *   .whenCellNotEmpty()
     *   .setItalic(true)
     *   .setBackground('red')
     *   .setFontColor('green')
     *   .build();
     * fWorksheet.addConditionalFormattingRule(rule);
     * console.log(fRange.getConditionalFormattingRules());
     * ```
     */
    createConditionalFormattingRule(): FConditionalFormattingBuilder;
    /**
     * Add a new conditional format
     * @deprecated use same API in FWorkSheet.
     * @param {IConditionFormattingRule} rule
     * @returns {FRange} Returns the current range instance for method chaining
     * @memberof IFRangeConditionalFormattingMixin
     */
    addConditionalFormattingRule(rule: IConditionFormattingRule): FRange;
    /**
     * Delete conditional format according to `cfId`
     * @deprecated use same API in FWorkSheet.
     * @param {string} cfId
     * @returns {FRange} Returns the current range instance for method chaining
     * @memberof IFRangeConditionalFormattingMixin
     */
    deleteConditionalFormattingRule(cfId: string): FRange;
    /**
     * Modify the priority of the conditional format
     * @deprecated use same API in FWorkSheet.
     * @param {string} cfId Rules that need to be moved
     * @param {string} toCfId Target rule
     * @param {IAnchor['type']} [type] After the default move to the destination rule, if type = before moves to the front, the default value is after
     * @returns {FRange} Returns the current range instance for method chaining
     * @memberof FRangeConditionalFormattingMixin
     */
    moveConditionalFormattingRule(cfId: string, toCfId: string, type?: IAnchor['type']): FRange;
    /**
     * Set the conditional format according to `cfId`
     * @deprecated use same API in FWorkSheet.
     * @param {string} cfId
     * @param {IConditionFormattingRule} rule
     * @returns {FRange} Returns the current range instance for method chaining
     * @memberof IFRangeConditionalFormattingMixin
     */
    setConditionalFormattingRule(cfId: string, rule: IConditionFormattingRule): FRange;
    /**
     * Clear the conditional rules for the range.
     * @returns {FRange} Returns the current range instance for method chaining
     * @memberof IFRangeConditionalFormattingMixin
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const fRange = fWorksheet.getRange('A1:T100');
     *
     * // Clear all conditional format rules for the range
     * fRange.clearConditionalFormatRules();
     * console.log(fRange.getConditionalFormattingRules()); // []
     * ```
     */
    clearConditionalFormatRules(): FRange;
}
export declare class FRangeConditionalFormattingMixin extends FRange implements IFRangeConditionalFormattingMixin {
    private _getConditionalFormattingRuleModel;
    getConditionalFormattingRules(): IConditionFormattingRule[];
    createConditionalFormattingRule(): FConditionalFormattingBuilder;
    addConditionalFormattingRule(rule: IConditionFormattingRule): FRange;
    deleteConditionalFormattingRule(cfId: string): FRange;
    moveConditionalFormattingRule(cfId: string, toCfId: string, type?: IAnchor['type']): FRange;
    setConditionalFormattingRule(cfId: string, rule: IConditionFormattingRule): FRange;
    clearConditionalFormatRules(): FRange;
}
declare module '@univerjs/sheets/facade' {
    interface FRange extends IFRangeConditionalFormattingMixin {
    }
}
