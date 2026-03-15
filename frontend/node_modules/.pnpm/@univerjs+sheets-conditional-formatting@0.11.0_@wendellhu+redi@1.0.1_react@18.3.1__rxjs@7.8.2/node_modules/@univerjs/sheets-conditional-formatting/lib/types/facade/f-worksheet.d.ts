import { IAnchor, IConditionFormattingRule } from '@univerjs/sheets-conditional-formatting';
import { FWorksheet } from '@univerjs/sheets/facade';
import { FConditionalFormattingBuilder } from './f-conditional-formatting-builder';
/**
 * @ignore
 */
export interface IFWorksheetConditionalFormattingMixin {
    /**
     * Gets all the conditional formatting for the current sheet
     * @returns {IConditionFormattingRule[]} conditional formatting rules for the current sheet
     * @memberof IFWorksheetConditionalFormattingMixin
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const rules = fWorksheet.getConditionalFormattingRules();
     * console.log(rules);
     * ```
     */
    getConditionalFormattingRules(): IConditionFormattingRule[];
    /**
     * @deprecated use `newConditionalFormattingRule` instead.
     * Creates a constructor for conditional formatting
     * @returns {FConditionalFormattingBuilder} The conditional formatting builder
     * @memberof IFWorksheetConditionalFormattingMixin
     */
    createConditionalFormattingRule(): FConditionalFormattingBuilder;
    /**
     * Creates a constructor for conditional formatting
     * @returns {FConditionalFormattingBuilder} The conditional formatting builder
     * @memberof IFWorksheetConditionalFormattingMixin
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
     * ```
     */
    newConditionalFormattingRule(): FConditionalFormattingBuilder;
    /**
     * Add a new conditional format
     * @param {IConditionFormattingRule} rule - The conditional formatting rule to add
     * @returns {FWorksheet} Returns the current worksheet instance for method chaining
     * @memberof IFWorksheetConditionalFormattingMixin
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
     * ```
     */
    addConditionalFormattingRule(rule: IConditionFormattingRule): FWorksheet;
    /**
     * Delete conditional format according to `cfId`
     * @param {string} cfId - The conditional formatting rule id to delete
     * @returns {FWorksheet} Returns the current worksheet instance for method chaining
     * @memberof IFWorksheetConditionalFormattingMixin
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const rules = fWorksheet.getConditionalFormattingRules();
     *
     * // Delete the first rule
     * fWorksheet.deleteConditionalFormattingRule(rules[0]?.cfId);
     * ```
     */
    deleteConditionalFormattingRule(cfId: string): FWorksheet;
    /**
     * Modify the priority of the conditional format
     * @param {string} cfId - The conditional formatting rule id to move
     * @param {string} toCfId Target rule
     * @param {IAnchor['type']} [type] After the default move to the destination rule, if type = before moves to the front, the default value is after
     * @returns {FWorksheet} Returns the current worksheet instance for method chaining
     * @memberof FWorksheetConditionalFormattingMixin
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * const rules = fWorksheet.getConditionalFormattingRules();
     *
     * // Move the third rule before the first rule
     * const rule = rules[2];
     * const targetRule = rules[0];
     * fWorksheet.moveConditionalFormattingRule(rule?.cfId, targetRule?.cfId, 'before');
     * ```
     */
    moveConditionalFormattingRule(cfId: string, toCfId: string, type?: IAnchor['type']): FWorksheet;
    /**
     * Set the conditional format according to `cfId`
     * @param {string} cfId - The conditional formatting rule id to set
     * @param {IConditionFormattingRule} rule - The conditional formatting rule to set
     * @returns {FWorksheet} Returns the current worksheet instance for method chaining
     * @memberof IFWorksheetConditionalFormattingMixin
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
     * // Modify the first rule to apply to a new range
     * const rules = fWorksheet.getConditionalFormattingRules();
     * const newRuleRange = fWorksheet.getRange('A1:D10');
     * fWorksheet.setConditionalFormattingRule(rules[0]?.cfId, { ...rules[0], ranges: [newRuleRange.getRange()] });
     * ```
     */
    setConditionalFormattingRule(cfId: string, rule: IConditionFormattingRule): FWorksheet;
    /**
     * Removes all conditional format rules from the sheet.
     * @returns {FWorksheet} Returns the current worksheet instance for method chaining
     * @memberof IFWorksheetConditionalFormattingMixin
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const fWorksheet = fWorkbook.getActiveSheet();
     * fWorksheet.clearConditionalFormatRules();
     * console.log(fWorksheet.getConditionalFormattingRules()); // []
     * ```
     */
    clearConditionalFormatRules(): FWorksheet;
}
export declare class FWorksheetConditionalFormattingMixin extends FWorksheet implements IFWorksheetConditionalFormattingMixin {
    private _getConditionalFormattingRuleModel;
    getConditionalFormattingRules(): IConditionFormattingRule[];
    createConditionalFormattingRule(): FConditionalFormattingBuilder;
    newConditionalFormattingRule(): FConditionalFormattingBuilder;
    addConditionalFormattingRule(rule: IConditionFormattingRule): FWorksheet;
    deleteConditionalFormattingRule(cfId: string): FWorksheet;
    moveConditionalFormattingRule(cfId: string, toCfId: string, type?: IAnchor['type']): FWorksheet;
    setConditionalFormattingRule(cfId: string, rule: IConditionFormattingRule): FWorksheet;
    clearConditionalFormatRules(): FWorksheet;
}
declare module '@univerjs/sheets/facade' {
    interface FWorksheet extends IFWorksheetConditionalFormattingMixin {
    }
}
