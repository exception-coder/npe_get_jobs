var U = Object.defineProperty;
var q = (u, e, t) => e in u ? U(u, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : u[e] = t;
var T = (u, e, t) => q(u, typeof e != "symbol" ? e + "" : e, t);
import { ColorKit as m, Tools as f, BooleanNumber as a, Rectangle as B, ColorBuilder as A } from "@univerjs/core";
import { iconMap as I, CFRuleType as n, EMPTY_ICON_TYPE as _, CFValueType as C, CFNumberOperator as s, CFTextOperator as g, CFSubRuleType as o, createCfId as d, ConditionalFormattingRuleModel as x, AddCfCommand as S, DeleteCfCommand as E, MoveCfCommand as k, SetCfCommand as F, ClearRangeCfCommand as M, ClearWorksheetCfCommand as O, CFTimePeriodOperator as D } from "@univerjs/sheets-conditional-formatting";
import { FRange as v, FWorkbook as R, FWorksheet as N } from "@univerjs/sheets/facade";
import { FEnum as V } from "@univerjs/core/facade";
class c {
  constructor(e = {}) {
    T(this, "_rule", {});
    this._rule = e, this._ensureAttr(this._rule, ["rule"]);
  }
  get _ruleConfig() {
    return this._rule.rule || null;
  }
  _getDefaultConfig(e = n.highlightCell) {
    switch (e) {
      case n.colorScale:
        return {
          type: e,
          config: [
            { index: 0, color: new m("").toRgbString(), value: { type: C.min } },
            { index: 0, color: new m("green").toRgbString(), value: { type: C.max } }
          ]
        };
      case n.dataBar:
        return {
          type: e,
          isShowValue: !0,
          config: { min: { type: C.min }, max: { type: C.max }, positiveColor: new m("green").toRgbString(), nativeColor: new m("").toRgbString(), isGradient: !1 }
        };
      case n.highlightCell:
        return {
          type: e,
          subType: o.text,
          operator: g.containsText,
          value: "abc",
          style: {}
        };
      case n.iconSet:
        return {
          type: e,
          isShowValue: !0,
          config: [{
            operator: s.greaterThanOrEqual,
            value: { type: C.min },
            iconType: _,
            iconId: ""
          }, {
            operator: s.greaterThanOrEqual,
            value: { type: C.percentile, value: 0.5 },
            iconType: _,
            iconId: ""
          }, {
            operator: s.lessThanOrEqual,
            value: { type: C.max },
            iconType: _,
            iconId: ""
          }]
        };
    }
  }
  // eslint-disable-next-line ts/no-explicit-any
  _ensureAttr(e, t) {
    return t.reduce((r, l) => (r[l] || (r[l] = {}), r[l]), e), e;
  }
  /**
   * Constructs a conditional format rule from the settings applied to the builder.
   * @returns {IConditionFormattingRule} The conditional format rule.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with no content in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenCellEmpty()
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  build() {
    var r;
    this._rule.cfId || (this._rule.cfId = d()), this._rule.ranges || (this._rule.ranges = []), this._rule.stopIfTrue === void 0 && (this._rule.stopIfTrue = !1), (r = this._rule.rule) != null && r.type || (this._rule.rule.type = n.highlightCell, this._ensureAttr(this._rule, ["rule", "style"]));
    const e = this._getDefaultConfig(this._rule.rule.type);
    return { ...this._rule, rule: { ...e, ...this._rule.rule } };
  }
  /**
   * Deep clone a current builder.
   * @returns {ConditionalFormatRuleBaseBuilder} A new builder with the same settings as the original.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with no content in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const builder = fWorksheet.newConditionalFormattingRule()
   *   .whenCellEmpty()
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()]);
   * fWorksheet.addConditionalFormattingRule(builder.build());
   *
   * // Copy the rule and change the background color to green for the range A1:B2.
   * const newRange = fWorksheet.getRange('A1:B2');
   * const newBuilder = builder.copy()
   *   .setBackground('#00FF00')
   *   .setRanges([newRange.getRange()]);
   * fWorksheet.addConditionalFormattingRule(newBuilder.build());
   * ```
   */
  copy() {
    const e = f.deepClone(this._rule);
    return e.cfId && (e.cfId = d()), new c(e);
  }
  /**
   * Gets the scope of the current conditional format.
   * @returns {IRange[]} The ranges to which the conditional format applies.
   */
  getRanges() {
    return this._rule.ranges || [];
  }
  /**
   * Get the icon set mapping dictionary.
   * @returns {Record<string, string[]>} The icon set mapping dictionary.
   */
  getIconMap() {
    return I;
  }
  /**
   * Create a conditional format ID.
   * @returns {string} The conditional format ID.
   */
  createCfId() {
    return d();
  }
  /**
   * Sets the scope for conditional formatting.
   * @param {IRange[]} ranges - The ranges to which the conditional format applies.
   * @returns {ConditionalFormatRuleBaseBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with no content in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenCellEmpty()
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setRanges(e) {
    return this._rule.ranges = e, this;
  }
}
class i extends c {
  constructor(e = {}) {
    super(e), this._ensureAttr(this._rule, ["rule", "style"]);
  }
  /**
   * Deep clone a current builder.
   * @returns {ConditionalFormatHighlightRuleBuilder} A new builder with the same settings as the original.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with no content in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const builder = fWorksheet.newConditionalFormattingRule()
   *   .whenCellEmpty()
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()]);
   * fWorksheet.addConditionalFormattingRule(builder.build());
   *
   * // Copy the rule and change the background color to green for the range A1:B2.
   * const newRange = fWorksheet.getRange('A1:B2');
   * const newBuilder = builder.copy()
   *   .setBackground('#00FF00')
   *   .setRanges([newRange.getRange()]);
   * fWorksheet.addConditionalFormattingRule(newBuilder.build());
   * ```
   */
  copy() {
    const e = f.deepClone(this._rule);
    return e.cfId && (e.cfId = d()), new i(e);
  }
  /**
   * Set average rule.
   * @param {IAverageHighlightCell['operator']} operator - The operator to use for the average rule.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with greater than average values in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .setAverage(univerAPI.Enum.ConditionFormatNumberOperatorEnum.greaterThan)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setAverage(e) {
    const t = this._ruleConfig;
    return t.type = n.highlightCell, t.subType = o.average, t.operator = e, this;
  }
  /**
   * Set unique values rule.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with unique values in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .setUniqueValues()
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setUniqueValues() {
    const e = this._ruleConfig;
    return e.type = n.highlightCell, e.subType = o.uniqueValues, this;
  }
  /**
   * Set duplicate values rule.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with duplicate values in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .setDuplicateValues()
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setDuplicateValues() {
    const e = this._ruleConfig;
    return e.type = n.highlightCell, e.subType = o.duplicateValues, this;
  }
  /**
   * Set rank rule.
   * @param {{ isBottom: boolean, isPercent: boolean, value: number }} config - The rank rule settings.
   * @param {boolean} config.isBottom - Whether to highlight the bottom rank.
   * @param {boolean} config.isPercent - Whether to use a percentage rank.
   * @param {number} config.value - The rank value.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights the bottom 10% of values in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .setRank({ isBottom: true, isPercent: true, value: 10 })
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setRank(e) {
    const t = this._ruleConfig;
    return t.type = n.highlightCell, t.subType = o.rank, t.isBottom = e.isBottom, t.isPercent = e.isPercent, t.value = e.value, this;
  }
  /**
   * Sets the background color for the conditional format rule's format.
   * @param {string} [color] - The background color to set. If not provided, the background color is removed.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with no content in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenCellEmpty()
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setBackground(e) {
    var t;
    if (((t = this._ruleConfig) == null ? void 0 : t.type) === n.highlightCell)
      if (e) {
        this._ensureAttr(this._ruleConfig, ["style", "bg"]);
        const r = new m(e);
        this._ruleConfig.style.bg.rgb = r.toRgbString();
      } else
        delete this._ruleConfig.style.bg;
    return this;
  }
  /**
   * Sets text bolding for the conditional format rule's format.
   * @param {boolean} isBold - Whether to bold the text.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that bolds the text for cells with not empty content in the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenCellNotEmpty()
   *   .setBold(true)
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setBold(e) {
    var t;
    return ((t = this._ruleConfig) == null ? void 0 : t.type) === n.highlightCell && (this._ensureAttr(this._ruleConfig, ["style"]), this._ruleConfig.style.bl = e ? a.TRUE : a.FALSE), this;
  }
  /**
   * Sets the font color for the conditional format rule's format.
   * @param {string} [color] - The font color to set. If not provided, the font color is removed.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that changes the font color to red for cells with not empty content in the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenCellNotEmpty()
   *   .setFontColor('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setFontColor(e) {
    var t;
    if (((t = this._ruleConfig) == null ? void 0 : t.type) === n.highlightCell)
      if (e) {
        const r = new m(e);
        this._ensureAttr(this._ruleConfig, ["style", "cl"]), this._ruleConfig.style.cl.rgb = r.toRgbString();
      } else
        delete this._ruleConfig.style.cl;
    return this;
  }
  /**
   * Sets text italics for the conditional format rule's format.
   * @param {boolean} isItalic - Whether to italicize the text.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that italicizes the text for cells with not empty content in the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenCellNotEmpty()
   *   .setItalic(true)
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setItalic(e) {
    var t;
    return ((t = this._ruleConfig) == null ? void 0 : t.type) === n.highlightCell && (this._ensureAttr(this._ruleConfig, ["style"]), this._ruleConfig.style.it = e ? a.TRUE : a.FALSE), this;
  }
  /**
   * Sets text strikethrough for the conditional format rule's format.
   * @param {boolean} isStrikethrough - Whether is strikethrough the text.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that set text strikethrough for cells with not empty content in the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenCellNotEmpty()
   *   .setStrikethrough(true)
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setStrikethrough(e) {
    var t;
    return ((t = this._ruleConfig) == null ? void 0 : t.type) === n.highlightCell && (this._ensureAttr(this._ruleConfig, ["style", "st"]), this._ruleConfig.style.st.s = e ? a.TRUE : a.FALSE), this;
  }
  /**
   * Sets text underlining for the conditional format rule's format.
   * @param {boolean} isUnderline - Whether to underline the text.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that underlines the text for cells with not empty content in the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenCellNotEmpty()
   *   .setUnderline(true)
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setUnderline(e) {
    var t;
    return ((t = this._ruleConfig) == null ? void 0 : t.type) === n.highlightCell && (this._ensureAttr(this._ruleConfig, ["style", "ul"]), this._ruleConfig.style.ul.s = e ? a.TRUE : a.FALSE), this;
  }
  /**
   * Sets the conditional format rule to trigger when the cell is empty.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with no content in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenCellEmpty()
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenCellEmpty() {
    const e = this._ruleConfig;
    return e.type = n.highlightCell, e.subType = o.text, e.value = "", e.operator = g.equal, this;
  }
  /**
   * Sets the conditional format rule to trigger when the cell is not empty.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that changes the font color to red for cells with not empty content in the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenCellNotEmpty()
   *   .setFontColor('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenCellNotEmpty() {
    const e = this._ruleConfig;
    return e.type = n.highlightCell, e.subType = o.text, e.value = "", e.operator = g.notEqual, this;
  }
  /**
   * Sets the conditional format rule to trigger when a time period is met.
   * @param {CFTimePeriodOperator} date - The time period to check for.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with dates in the last 7 days in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenDate(univerAPI.Enum.ConditionFormatTimePeriodOperatorEnum.last7Days)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenDate(e) {
    const t = this._ruleConfig;
    return t.type = n.highlightCell, t.subType = o.timePeriod, t.operator = e, this;
  }
  /**
   * Sets the conditional format rule to trigger when that the given formula evaluates to `true`.
   * @param {string} formulaString - A custom formula that evaluates to true if the input is valid. formulaString start with '='.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with values greater than 10 in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenFormulaSatisfied('=A1>10')
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenFormulaSatisfied(e) {
    const t = this._ruleConfig;
    return t.type = n.highlightCell, t.subType = o.formula, t.value = e, this;
  }
  /**
   * Sets the conditional format rule to trigger when a number falls between, or is either of, two specified values.
   * @param {number} start - The lowest acceptable value.
   * @param {number} end - The highest acceptable value.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with values between 10 and 20 in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenNumberBetween(10, 20)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenNumberBetween(e, t) {
    const r = Math.min(e, t), l = Math.max(e, t), h = this._ruleConfig;
    return h.type = n.highlightCell, h.subType = o.number, h.value = [r, l], h.operator = s.between, this;
  }
  /**
   * Sets the conditional format rule to trigger when a number is equal to the given value.
   * @param {number} value - The sole acceptable value.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with values equal to 10 in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenNumberEqualTo(10)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenNumberEqualTo(e) {
    const t = this._ruleConfig;
    return t.type = n.highlightCell, t.subType = o.number, t.value = e, t.operator = s.equal, this;
  }
  /**
   * Sets the conditional format rule to trigger when a number is greater than the given value.
   * @param {number} value - The highest unacceptable value.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with values greater than 10 in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenNumberGreaterThan(10)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenNumberGreaterThan(e) {
    const t = this._ruleConfig;
    return t.type = n.highlightCell, t.subType = o.number, t.value = e, t.operator = s.greaterThan, this;
  }
  /**
   * Sets the conditional format rule to trigger when a number is greater than or equal to the given value.
   * @param {number} value - The lowest acceptable value.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with values greater than or equal to 10 in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenNumberGreaterThanOrEqualTo(10)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenNumberGreaterThanOrEqualTo(e) {
    const t = this._ruleConfig;
    return t.type = n.highlightCell, t.subType = o.number, t.value = e, t.operator = s.greaterThanOrEqual, this;
  }
  /**
   * Sets the conditional conditional format rule to trigger when a number less than the given value.
   * @param {number} value - The lowest unacceptable value.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with values less than 10 in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenNumberLessThan(10)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenNumberLessThan(e) {
    const t = this._ruleConfig;
    return t.type = n.highlightCell, t.subType = o.number, t.value = e, t.operator = s.lessThan, this;
  }
  /**
   * Sets the conditional format rule to trigger when a number less than or equal to the given value.
   * @param {number} value - The highest acceptable value.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with values less than or equal to 10 in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenNumberLessThanOrEqualTo(10)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenNumberLessThanOrEqualTo(e) {
    const t = this._ruleConfig;
    return t.type = n.highlightCell, t.subType = o.number, t.value = e, t.operator = s.lessThanOrEqual, this;
  }
  /**
   * Sets the conditional format rule to trigger when a number does not fall between, and is neither of, two specified values.
   * @param {number} start - The lowest unacceptable value.
   * @param {number} end - The highest unacceptable value.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with values not between 10 and 20 in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenNumberNotBetween(10, 20)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenNumberNotBetween(e, t) {
    const r = Math.min(e, t), l = Math.max(e, t), h = this._ruleConfig;
    return h.type = n.highlightCell, h.subType = o.number, h.value = [r, l], h.operator = s.notBetween, this;
  }
  /**
   * Sets the conditional format rule to trigger when a number is not equal to the given value.
   * @param {number} value - The sole unacceptable value.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with values not equal to 10 in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenNumberNotEqualTo(10)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenNumberNotEqualTo(e) {
    const t = this._ruleConfig;
    return t.type = n.highlightCell, t.subType = o.number, t.value = e, t.operator = s.notEqual, this;
  }
  /**
   * Sets the conditional format rule to trigger when that the input contains the given value.
   * @param {string} text - The value that the input must contain.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with text containing 'apple' in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenTextContains('apple')
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenTextContains(e) {
    const t = this._ruleConfig;
    return t.type = n.highlightCell, t.subType = o.text, t.value = e, t.operator = g.containsText, this;
  }
  /**
   * Sets the conditional format rule to trigger when that the input does not contain the given value.
   * @param {string} text - The value that the input must not contain.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with text not containing 'apple' in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenTextDoesNotContain('apple')
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenTextDoesNotContain(e) {
    const t = this._ruleConfig;
    return t.type = n.highlightCell, t.subType = o.text, t.value = e, t.operator = g.notContainsText, this;
  }
  /**
   * Sets the conditional format rule to trigger when that the input ends with the given value.
   * @param {string} text - Text to compare against the end of the string.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with text ending with '.ai' in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenTextEndsWith('.ai')
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenTextEndsWith(e) {
    const t = this._ruleConfig;
    return t.type = n.highlightCell, t.subType = o.text, t.value = e, t.operator = g.endsWith, this;
  }
  /**
   * Sets the conditional format rule to trigger when that the input is equal to the given value.
   * @param {string} text - The sole acceptable value.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with text equal to 'apple' in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenTextEqualTo('apple')
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenTextEqualTo(e) {
    const t = this._ruleConfig;
    return t.type = n.highlightCell, t.subType = o.text, t.value = e, t.operator = g.equal, this;
  }
  /**
   * Sets the conditional format rule to trigger when that the input starts with the given value.
   * @param {string} text - Text to compare against the beginning of the string.
   * @returns {ConditionalFormatHighlightRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with text starting with 'https://' in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenTextStartsWith('https://')
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenTextStartsWith(e) {
    const t = this._ruleConfig;
    return t.type = n.highlightCell, t.subType = o.text, t.value = e, t.operator = g.beginsWith, this;
  }
}
class p extends c {
  /**
   * Deep clone a current builder.
   * @returns {ConditionalFormatDataBarRuleBuilder} A new instance of the builder with the same settings as the original.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that adds a data bar to cells with values between -100 and 100 in the range A1:D10.
   * // positive values are green and negative values are red.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const builder = fWorksheet.newConditionalFormattingRule()
   *   .setDataBar({
   *     min: { type: 'num', value: -100 },
   *     max: { type: 'num', value: 100 },
   *     positiveColor: '#00FF00',
   *     nativeColor: '#FF0000',
   *     isShowValue: true
   *   })
   *   .setRanges([fRange.getRange()]);
   * fWorksheet.addConditionalFormattingRule(builder.build());
   *
   * // Copy the rule and apply it to a new range.
   * const newRange = fWorksheet.getRange('F1:F10');
   * const newBuilder = builder.copy()
   *   .setRanges([newRange.getRange()]);
   * fWorksheet.addConditionalFormattingRule(newBuilder.build());
   * ```
   */
  copy() {
    const e = f.deepClone(this._rule);
    return e.cfId && (e.cfId = d()), new p(e);
  }
  /**
   * Set data bar rule.
   * @param {{
   *         min: IValueConfig;
   *         max: IValueConfig;
   *         isGradient?: boolean;
   *         positiveColor: string;
   *         nativeColor: string;
   *         isShowValue?: boolean;
   *     }} config - The data bar rule settings.
   * @param {IValueConfig} config.min - The minimum value for the data bar.
   * @param {IValueConfig} config.max - The maximum value for the data bar.
   * @param {boolean} [config.isGradient] - Whether the data bar is gradient.
   * @param {string} config.positiveColor - The color for positive values.
   * @param {string} config.nativeColor - The color for negative values.
   * @param {boolean} [config.isShowValue] - Whether to show the value in the cell.
   * @returns {ConditionalFormatDataBarRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that adds a data bar to cells with values between -100 and 100 in the range A1:D10.
   * // positive values are green and negative values are red.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .setDataBar({
   *     min: { type: 'num', value: -100 },
   *     max: { type: 'num', value: 100 },
   *     positiveColor: '#00FF00',
   *     nativeColor: '#FF0000',
   *     isShowValue: true
   *   })
   *  .setRanges([fRange.getRange()])
   * .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setDataBar(e) {
    const t = this._ruleConfig;
    return t.type = n.dataBar, t.isShowValue = !!e.isShowValue, t.config = {
      min: e.min,
      max: e.max,
      positiveColor: e.positiveColor,
      nativeColor: e.nativeColor,
      isGradient: !!e.isGradient
    }, this;
  }
}
class y extends c {
  /**
   * Deep clone a current builder.
   * @returns {ConditionalFormatColorScaleRuleBuilder} A new instance of the builder with the same settings as the original.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that adds a color scale to cells with values between 0 and 100 in the range A1:D10.
   * // The color scale is green for 0, yellow for 50, and red for 100.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const builder = fWorksheet.newConditionalFormattingRule()
   *   .setColorScale([
   *     { index: 0, color: '#00FF00', value: { type: 'num', value: 0 } },
   *     { index: 1, color: '#FFFF00', value: { type: 'num', value: 50 } },
   *     { index: 2, color: '#FF0000', value: { type: 'num', value: 100 } }
   *   ])
   *   .setRanges([fRange.getRange()]);
   * fWorksheet.addConditionalFormattingRule(builder.build());
   *
   * // Copy the rule and apply it to a new range.
   * const newRange = fWorksheet.getRange('F1:F10');
   * const newBuilder = builder.copy()
   *   .setRanges([newRange.getRange()]);
   * fWorksheet.addConditionalFormattingRule(newBuilder.build());
   * ```
   */
  copy() {
    const e = f.deepClone(this._rule);
    return e.cfId && (e.cfId = d()), new y(e);
  }
  /**
   * Set color scale rule.
   * @param {{ index: number; color: string; value: IValueConfig }[]} config - The color scale rule settings.
   * @param {number} config.index - The index of the color scale configuration.
   * @param {string} config.color - The color corresponding to the index of the color scale configuration.
   * @param {IValueConfig} config.value - The condition value corresponding to the index of the color scale configuration.
   * @returns {ConditionalFormatColorScaleRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that adds a color scale to cells with values between 0 and 100 in the range A1:D10.
   * // The color scale is green for 0, yellow for 50, and red for 100.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .setColorScale([
   *     { index: 0, color: '#00FF00', value: { type: 'num', value: 0 } },
   *     { index: 1, color: '#FFFF00', value: { type: 'num', value: 50 } },
   *     { index: 2, color: '#FF0000', value: { type: 'num', value: 100 } }
   *   ])
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setColorScale(e) {
    const t = this._ruleConfig;
    return t.type = n.colorScale, t.config = e, this;
  }
}
class b extends c {
  /**
   * Deep clone a current builder.
   * @returns {ConditionalFormatIconSetRuleBuilder} A new instance of the builder with the same settings as the original.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a 3-arrow icon set conditional formatting rule in the range A1:D10.
   * // The first arrow is green for values greater than 20.
   * // The second arrow is yellow for values greater than 10.
   * // The third arrow is red for values less than or equal to 10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const builder = fWorksheet.newConditionalFormattingRule()
   *   .setIconSet({
   *     iconConfigs: [
   *       { iconType: '3Arrows', iconId: '0', operator: univerAPI.Enum.ConditionFormatNumberOperatorEnum.greaterThan, value: { type: 'num', value: 20 } },
   *       { iconType: '3Arrows', iconId: '1', operator: univerAPI.Enum.ConditionFormatNumberOperatorEnum.greaterThan, value: { type: 'num', value: 10 } },
   *       { iconType: '3Arrows', iconId: '2', operator: univerAPI.Enum.ConditionFormatNumberOperatorEnum.lessThanOrEqual, value: { type: 'num', value: 10 } }
   *     ],
   *     isShowValue: true,
   *   })
   *   .setRanges([fRange.getRange()]);
   * fWorksheet.addConditionalFormattingRule(builder.build());
   *
   * // Copy the rule and apply it to a new range.
   * const newRange = fWorksheet.getRange('F1:F10');
   * const newBuilder = builder.copy()
   *   .setRanges([newRange.getRange()]);
   * fWorksheet.addConditionalFormattingRule(newBuilder.build());
   * ```
   */
  copy() {
    const e = f.deepClone(this._rule);
    return e.cfId && (e.cfId = d()), new b(e);
  }
  /**
   * Set up icon set conditional formatting rule.
   * @param {{ iconConfigs: IIconSet['config'], isShowValue: boolean }} config - The icon set conditional formatting rule settings.
   * @param {IIconSet['config']} config.iconConfigs - The icon configurations. iconId property is a string indexing of a group icons.
   * @param {boolean} config.isShowValue - Whether to show the value in the cell.
   * @returns {ConditionalFormatIconSetRuleBuilder} This builder for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a 3-arrow icon set conditional formatting rule in the range A1:D10.
   * // The first arrow is green for values greater than 20.
   * // The second arrow is yellow for values greater than 10.
   * // The third arrow is red for values less than or equal to 10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const builder = fWorksheet.newConditionalFormattingRule();
   * console.log(builder.getIconMap()); // icons key-value map
   * const rule = builder.setIconSet({
   *     iconConfigs: [
   *       { iconType: '3Arrows', iconId: '0', operator: univerAPI.Enum.ConditionFormatNumberOperatorEnum.greaterThan, value: { type: 'num', value: 20 } },
   *       { iconType: '3Arrows', iconId: '1', operator: univerAPI.Enum.ConditionFormatNumberOperatorEnum.greaterThan, value: { type: 'num', value: 10 } },
   *       { iconType: '3Arrows', iconId: '2', operator: univerAPI.Enum.ConditionFormatNumberOperatorEnum.lessThanOrEqual, value: { type: 'num', value: 10 } }
   *     ],
   *     isShowValue: true,
   *   })
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setIconSet(e) {
    const t = this._ruleConfig;
    return t.type = n.iconSet, t.config = e.iconConfigs, t.isShowValue = e.isShowValue, this;
  }
}
class w {
  constructor(e = {}) {
    this._initConfig = e;
  }
  /**
   * Constructs a conditional format rule from the settings applied to the builder.
   * @returns {IConditionFormattingRule} The conditional format rule.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with values greater than 10 in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenNumberGreaterThan(10)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  build() {
    return new c(this._initConfig).build();
  }
  /**
   * Set average rule.
   * @param {IAverageHighlightCell['operator']} operator - The operator to use for the average rule.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with greater than average values in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .setAverage(univerAPI.Enum.ConditionFormatNumberOperatorEnum.greaterThan)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setAverage(e) {
    return new i(this._initConfig).setAverage(e);
  }
  /**
   * Set unique values rule.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with unique values in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .setUniqueValues()
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setUniqueValues() {
    return new i(this._initConfig).setUniqueValues();
  }
  /**
   * Set duplicate values rule.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with duplicate values in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .setDuplicateValues()
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setDuplicateValues() {
    return new i(this._initConfig).setDuplicateValues();
  }
  /**
   * Set rank rule.
   * @param {{ isBottom: boolean, isPercent: boolean, value: number }} config - The rank rule settings.
   * @param {boolean} config.isBottom - Whether to highlight the bottom rank.
   * @param {boolean} config.isPercent - Whether to use a percentage rank.
   * @param {number} config.value - The rank value.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights the bottom 10% of values in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .setRank({ isBottom: true, isPercent: true, value: 10 })
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setRank(e) {
    return new i(this._initConfig).setRank(e);
  }
  /**
   * Get the icon set mapping dictionary.
   * @returns {Record<string, string[]>} The icon set mapping dictionary.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * console.log(fWorksheet.newConditionalFormattingRule().getIconMap()); // icons key-value map
   * ```
   */
  getIconMap() {
    return I;
  }
  /**
   * Set up icon set conditional formatting rule.
   * @param {{ iconConfigs: IIconSet['config'], isShowValue: boolean }} config - The icon set conditional formatting rule settings.
   * @param {IIconSet['config']} config.iconConfigs - The icon configurations. iconId property is a string indexing of a group icons.
   * @param {boolean} config.isShowValue - Whether to show the value in the cell.
   * @returns {ConditionalFormatIconSetRuleBuilder} The conditional format icon set rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a 3-arrow icon set conditional formatting rule in the range A1:D10.
   * // The first arrow is green for values greater than 20.
   * // The second arrow is yellow for values greater than 10.
   * // The third arrow is red for values less than or equal to 10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const builder = fWorksheet.newConditionalFormattingRule();
   * console.log(builder.getIconMap()); // icons key-value map
   * const rule = builder.setIconSet({
   *     iconConfigs: [
   *       { iconType: '3Arrows', iconId: '0', operator: univerAPI.Enum.ConditionFormatNumberOperatorEnum.greaterThan, value: { type: 'num', value: 20 } },
   *       { iconType: '3Arrows', iconId: '1', operator: univerAPI.Enum.ConditionFormatNumberOperatorEnum.greaterThan, value: { type: 'num', value: 10 } },
   *       { iconType: '3Arrows', iconId: '2', operator: univerAPI.Enum.ConditionFormatNumberOperatorEnum.lessThanOrEqual, value: { type: 'num', value: 10 } }
   *     ],
   *     isShowValue: true,
   *   })
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setIconSet(e) {
    return new b(this._initConfig).setIconSet(e);
  }
  /**
   * Set color scale rule.
   * @param {{ index: number; color: string; value: IValueConfig }[]} config - The color scale rule settings.
   * @param {number} config.index - The index of the color scale.
   * @param {string} config.color - The color for the color scale.
   * @param {IValueConfig} config.value - The value for the color scale.
   * @returns {ConditionalFormatColorScaleRuleBuilder} The conditional format color scale rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that adds a color scale to cells with values between 0 and 100 in the range A1:D10.
   * // The color scale is green for 0, yellow for 50, and red for 100.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .setColorScale([
   *     { index: 0, color: '#00FF00', value: { type: 'num', value: 0 } },
   *     { index: 1, color: '#FFFF00', value: { type: 'num', value: 50 } },
   *     { index: 2, color: '#FF0000', value: { type: 'num', value: 100 } }
   *   ])
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setColorScale(e) {
    return new y(this._initConfig).setColorScale(e);
  }
  /**
   * Set data bar rule.
   * @param {{
   *         min: IValueConfig;
   *         max: IValueConfig;
   *         isGradient?: boolean;
   *         positiveColor: string;
   *         nativeColor: string;
   *         isShowValue?: boolean;
   *     }} config - The data bar rule settings.
   * @param {IValueConfig} config.min - The minimum value for the data bar.
   * @param {IValueConfig} config.max - The maximum value for the data bar.
   * @param {boolean} [config.isGradient] - Whether the data bar is gradient.
   * @param {string} config.positiveColor - The color for positive values.
   * @param {string} config.nativeColor - The color for negative values.
   * @param {boolean} [config.isShowValue] - Whether to show the value in the cell.
   * @returns {ConditionalFormatDataBarRuleBuilder} The conditional format data bar rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that adds a data bar to cells with values between -100 and 100 in the range A1:D10.
   * // positive values are green and negative values are red.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .setDataBar({
   *     min: { type: 'num', value: -100 },
   *     max: { type: 'num', value: 100 },
   *     positiveColor: '#00FF00',
   *     nativeColor: '#FF0000',
   *     isShowValue: true
   *   })
   *  .setRanges([fRange.getRange()])
   * .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setDataBar(e) {
    return new p(this._initConfig).setDataBar(e);
  }
  /**
   * Sets the background color for the conditional format rule's format.
   * @param {string} [color] - The background color to set. If not provided, the background color is removed.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with no content in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenCellEmpty()
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setBackground(e) {
    return new i(this._initConfig).setBackground(e);
  }
  /**
   * Sets text bolding for the conditional format rule's format.
   * @param {boolean} isBold - Whether to bold the text.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that bolds the text for cells with not empty content in the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenCellNotEmpty()
   *   .setBold(true)
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setBold(e) {
    return new i(this._initConfig).setBold(e);
  }
  /**
   * Sets the font color for the conditional format rule's format.
   * @param {string} [color] - The font color to set. If not provided, the font color is removed.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that changes the font color to red for cells with not empty content in the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenCellNotEmpty()
   *   .setFontColor('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setFontColor(e) {
    return new i(this._initConfig).setFontColor(e);
  }
  /**
   * Sets text italics for the conditional format rule's format.
   * @param {boolean} isItalic - Whether to italicize the text.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that italicizes the text for cells with not empty content in the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenCellNotEmpty()
   *   .setItalic(true)
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setItalic(e) {
    return new i(this._initConfig).setItalic(e);
  }
  /**
   * Sets text strikethrough for the conditional format rule's format.
   * @param {boolean} isStrikethrough - Whether is strikethrough the text.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that set text strikethrough for cells with not empty content in the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenCellNotEmpty()
   *   .setStrikethrough(true)
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setStrikethrough(e) {
    return new i(this._initConfig).setStrikethrough(e);
  }
  /**
   * Sets text underlining for the conditional format rule's format.
   * @param {boolean} isUnderline - Whether to underline the text.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that underlines the text for cells with not empty content in the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenCellNotEmpty()
   *   .setUnderline(true)
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  setUnderline(e) {
    return new i(this._initConfig).setUnderline(e);
  }
  /**
   * Sets the conditional format rule to trigger when the cell is empty.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with no content in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenCellEmpty()
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenCellEmpty() {
    return new i(this._initConfig).whenCellEmpty();
  }
  /**
   * Sets the conditional format rule to trigger when the cell is not empty.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that changes the font color to red for cells with not empty content in the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenCellNotEmpty()
   *   .setFontColor('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenCellNotEmpty() {
    return new i(this._initConfig).whenCellNotEmpty();
  }
  /**
   * Sets the conditional format rule to trigger when a time period is met.
   * @param {CFTimePeriodOperator} date - The time period to check for.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with dates in the last 7 days in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenDate(univerAPI.Enum.ConditionFormatTimePeriodOperatorEnum.last7Days)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenDate(e) {
    return new i(this._initConfig).whenDate(e);
  }
  /**
   * Sets the conditional format rule to trigger when that the given formula evaluates to `true`.
   * @param {string} formulaString - A custom formula that evaluates to true if the input is valid. formulaString start with '='.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with values greater than 10 in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenFormulaSatisfied('=A1>10')
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenFormulaSatisfied(e) {
    return new i(this._initConfig).whenFormulaSatisfied(e);
  }
  /**
   * Sets the conditional format rule to trigger when a number falls between, or is either of, two specified values.
   * @param {number} start - The lowest acceptable value.
   * @param {number} end - The highest acceptable value.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with values between 10 and 20 in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenNumberBetween(10, 20)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenNumberBetween(e, t) {
    return new i(this._initConfig).whenNumberBetween(e, t);
  }
  /**
   * Sets the conditional format rule to trigger when a number is equal to the given value.
   * @param {number} value - The sole acceptable value.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with values equal to 10 in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenNumberEqualTo(10)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenNumberEqualTo(e) {
    return new i(this._initConfig).whenNumberEqualTo(e);
  }
  /**
   * Sets the conditional format rule to trigger when a number is greater than the given value.
   * @param {number} value - The highest unacceptable value.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with values greater than 10 in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenNumberGreaterThan(10)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenNumberGreaterThan(e) {
    return new i(this._initConfig).whenNumberGreaterThan(e);
  }
  /**
   * Sets the conditional format rule to trigger when a number is greater than or equal to the given value.
   * @param {number} value - The lowest acceptable value.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with values greater than or equal to 10 in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenNumberGreaterThanOrEqualTo(10)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenNumberGreaterThanOrEqualTo(e) {
    return new i(this._initConfig).whenNumberGreaterThanOrEqualTo(e);
  }
  /**
   * Sets the conditional conditional format rule to trigger when a number less than the given value.
   * @param {number} value - The lowest unacceptable value.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with values less than 10 in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenNumberLessThan(10)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenNumberLessThan(e) {
    return new i(this._initConfig).whenNumberLessThan(e);
  }
  /**
   * Sets the conditional format rule to trigger when a number less than or equal to the given value.
   * @param {number} value - The highest acceptable value.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with values less than or equal to 10 in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenNumberLessThanOrEqualTo(10)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenNumberLessThanOrEqualTo(e) {
    return new i(this._initConfig).whenNumberLessThanOrEqualTo(e);
  }
  /**
   * Sets the conditional format rule to trigger when a number does not fall between, and is neither of, two specified values.
   * @param {number} start - The lowest unacceptable value.
   * @param {number} end - The highest unacceptable value.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with values not between 10 and 20 in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenNumberNotBetween(10, 20)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenNumberNotBetween(e, t) {
    return new i(this._initConfig).whenNumberNotBetween(e, t);
  }
  /**
   * Sets the conditional format rule to trigger when a number is not equal to the given value.
   * @param {number} value - The sole unacceptable value.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with values not equal to 10 in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenNumberNotEqualTo(10)
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenNumberNotEqualTo(e) {
    return new i(this._initConfig).whenNumberNotEqualTo(e);
  }
  /**
   * Sets the conditional format rule to trigger when that the input contains the given value.
   * @param {string} text - The value that the input must contain.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with text containing 'apple' in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenTextContains('apple')
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenTextContains(e) {
    return new i(this._initConfig).whenTextContains(e);
  }
  /**
   * Sets the conditional format rule to trigger when that the input does not contain the given value.
   * @param {string} text - The value that the input must not contain.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with text not containing 'apple' in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenTextDoesNotContain('apple')
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenTextDoesNotContain(e) {
    return new i(this._initConfig).whenTextDoesNotContain(e);
  }
  /**
   * Sets the conditional format rule to trigger when that the input ends with the given value.
   * @param {string} text - Text to compare against the end of the string.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with text ending with '.ai' in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenTextEndsWith('.ai')
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenTextEndsWith(e) {
    return new i(this._initConfig).whenTextEndsWith(e);
  }
  /**
   * Sets the conditional format rule to trigger when that the input is equal to the given value.
   * @param {string} text - The sole acceptable value.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with text equal to 'apple' in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenTextEqualTo('apple')
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenTextEqualTo(e) {
    return new i(this._initConfig).whenTextEqualTo(e);
  }
  /**
   * Sets the conditional format rule to trigger when that the input starts with the given value.
   * @param {string} text - Text to compare against the beginning of the string.
   * @returns {ConditionalFormatHighlightRuleBuilder} The conditional format highlight rule builder.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a conditional formatting rule that highlights cells with text starting with 'https://' in red for the range A1:D10.
   * const fRange = fWorksheet.getRange('A1:D10');
   * const rule = fWorksheet.newConditionalFormattingRule()
   *   .whenTextStartsWith('https://')
   *   .setBackground('#FF0000')
   *   .setRanges([fRange.getRange()])
   *   .build();
   * fWorksheet.addConditionalFormattingRule(rule);
   * ```
   */
  whenTextStartsWith(e) {
    return new i(this._initConfig).whenTextStartsWith(e);
  }
}
class W extends v {
  _getConditionalFormattingRuleModel() {
    return this._injector.get(x);
  }
  getConditionalFormattingRules() {
    return [...this._getConditionalFormattingRuleModel().getSubunitRules(this._workbook.getUnitId(), this._worksheet.getSheetId()) || []].filter((t) => t.ranges.some((r) => B.intersects(r, this._range)));
  }
  createConditionalFormattingRule() {
    return new w({ ranges: [this._range] });
  }
  addConditionalFormattingRule(e) {
    const t = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      rule: e
    };
    return this._commandService.syncExecuteCommand(S.id, t), this;
  }
  deleteConditionalFormattingRule(e) {
    const t = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      cfId: e
    };
    return this._commandService.syncExecuteCommand(E.id, t), this;
  }
  moveConditionalFormattingRule(e, t, r = "after") {
    const l = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      start: { id: e, type: "self" },
      end: { id: t, type: r }
    };
    return this._commandService.syncExecuteCommand(k.id, l), this;
  }
  setConditionalFormattingRule(e, t) {
    const r = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      rule: t,
      cfId: e
    };
    return this._commandService.syncExecuteCommand(F.id, r), this;
  }
  clearConditionalFormatRules() {
    const e = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      ranges: [this._range]
    };
    return this._commandService.syncExecuteCommand(M.id, e), this;
  }
}
v.extend(W);
class L extends R {
  newColor() {
    return new A();
  }
}
R.extend(L);
class G extends N {
  _getConditionalFormattingRuleModel() {
    return this._injector.get(x);
  }
  getConditionalFormattingRules() {
    return [...this._getConditionalFormattingRuleModel().getSubunitRules(this._workbook.getUnitId(), this._worksheet.getSheetId()) || []];
  }
  createConditionalFormattingRule() {
    return new w();
  }
  newConditionalFormattingRule() {
    return new w();
  }
  addConditionalFormattingRule(e) {
    const t = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      rule: e
    };
    return this._commandService.syncExecuteCommand(S.id, t), this;
  }
  deleteConditionalFormattingRule(e) {
    const t = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      cfId: e
    };
    return this._commandService.syncExecuteCommand(E.id, t), this;
  }
  moveConditionalFormattingRule(e, t, r = "after") {
    const l = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      start: { id: e, type: "self" },
      end: { id: t, type: r }
    };
    return this._commandService.syncExecuteCommand(k.id, l), this;
  }
  setConditionalFormattingRule(e, t) {
    const r = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      cfId: e,
      rule: t
    };
    return this._commandService.syncExecuteCommand(F.id, r), this;
  }
  clearConditionalFormatRules() {
    const e = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId()
    };
    return this._commandService.syncExecuteCommand(O.id, e), this;
  }
}
N.extend(G);
class P {
  get ConditionFormatNumberOperatorEnum() {
    return s;
  }
  get ConditionFormatTimePeriodOperatorEnum() {
    return D;
  }
}
V.extend(P);
export {
  w as FConditionalFormattingBuilder
};
