var $ = Object.defineProperty;
var W = (f, t, e) => t in f ? $(f, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : f[t] = e;
var v = (f, t, e) => W(f, typeof t != "symbol" ? t + "" : t, e);
import { DataValidationType as n, generateRandomId as N, DataValidationErrorStyle as U, DataValidationOperator as g, IUniverInstanceService as P, ICommandService as b, DataValidationStatus as A, CanceledError as D, toDisposable as p } from "@univerjs/core";
import { UpdateSheetDataValidationSettingCommand as R, UpdateSheetDataValidationOptionsCommand as T, UpdateSheetDataValidationRangeCommand as B, RemoveSheetDataValidationCommand as L, ClearRangeDataValidationCommand as G, AddSheetDataValidationCommand as O, SheetsDataValidationValidatorService as S, SheetDataValidationModel as V, RemoveSheetAllDataValidationCommand as j } from "@univerjs/sheets-data-validation";
import { FRange as M, FWorkbook as H, FWorksheet as F } from "@univerjs/sheets/facade";
import { DataValidationModel as y, getRuleOptions as Q } from "@univerjs/data-validation";
import { serializeRangeToRefString as z } from "@univerjs/engine-formula";
import { FUniver as q, FEventName as K } from "@univerjs/core/facade";
import { filter as x } from "rxjs";
class C {
  constructor(t) {
    v(this, "_rule");
    this._rule = t != null ? t : {
      uid: N(),
      ranges: void 0,
      type: n.CUSTOM
    };
  }
  /**
   * Builds an FDataValidation instance based on the _rule property of the current class
   * @returns {FDataValidation} A new instance of the FDataValidation class
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a new data validation rule that requires a number between 1 and 10 for the range A1:B10
   * const fRange = fWorksheet.getRange('A1:B10');
   * const rule = univerAPI.newDataValidation()
   *   .requireNumberBetween(1, 10)
   *   .setOptions({
   *     allowBlank: true,
   *     showErrorMessage: true,
   *     error: 'Please enter a number between 1 and 10'
   *   })
   *   .build();
   * fRange.setDataValidation(rule);
   * ```
   */
  build() {
    return new w(this._rule);
  }
  /**
   * Creates a duplicate of the current DataValidationBuilder object
   * @returns {FDataValidationBuilder} A new instance of the DataValidationBuilder class
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a new data validation rule that requires a number between 1 and 10 for the range A1:B10
   * const fRange = fWorksheet.getRange('A1:B10');
   * const builder = univerAPI.newDataValidation()
   *   .requireNumberBetween(1, 10)
   *   .setOptions({
   *     allowBlank: true,
   *     showErrorMessage: true,
   *     error: 'Please enter a number between 1 and 10'
   *   });
   * fRange.setDataValidation(builder.build());
   *
   * // Copy the builder applied to the new range F1:G10
   * const newRange = fWorksheet.getRange('F1:G10');
   * const copyBuilder = builder.copy();
   * newRange.setDataValidation(copyBuilder.build());
   * ```
   */
  copy() {
    return new C({
      ...this._rule,
      uid: N()
    });
  }
  /**
   * Determines whether invalid data is allowed
   * @returns {boolean} True if invalid data is allowed, False otherwise
   * @example
   * ```typescript
   * const builder = univerAPI.newDataValidation().requireNumberBetween(1, 10);
   * console.log(builder.getAllowInvalid());
   * ```
   */
  getAllowInvalid() {
    return this._rule.errorStyle !== U.STOP;
  }
  /**
   * Gets the data validation type of the rule
   * @returns {DataValidationType | string} The data validation type
   * @example
   * ```typescript
   * const builder = univerAPI.newDataValidation();
   * console.log(builder.getCriteriaType()); // custom
   *
   * builder.requireNumberBetween(1, 10);
   * console.log(builder.getCriteriaType()); // decimal
   *
   * builder.requireValueInList(['Yes', 'No']);
   * console.log(builder.getCriteriaType()); // list
   * ```
   */
  getCriteriaType() {
    return this._rule.type;
  }
  /**
   * Gets the values used for criteria evaluation
   * @returns {[string | undefined, string | undefined, string | undefined]} An array containing the operator, formula1, and formula2 values
   * @example
   * ```typescript
   * const builder = univerAPI.newDataValidation().requireNumberBetween(1, 10);
   * const [operator, formula1, formula2] = builder.getCriteriaValues();
   * console.log(operator, formula1, formula2); // between 1 10
   *
   * builder.requireValueInList(['Yes', 'No']);
   * console.log(builder.getCriteriaValues()); // undefined Yes,No undefined
   * ```
   */
  getCriteriaValues() {
    return [this._rule.operator, this._rule.formula1, this._rule.formula2];
  }
  /**
   * Gets the help text information, which is used to provide users with guidance and support
   * @returns {string | undefined} Returns the help text information. If there is no error message, it returns an undefined value
   * @example
   * ```typescript
   * const builder = univerAPI.newDataValidation().setOptions({
   *   showErrorMessage: true,
   *   error: 'Please enter a valid value'
   * });
   * console.log(builder.getHelpText()); // 'Please enter a valid value'
   * ```
   */
  getHelpText() {
    return this._rule.error;
  }
  /**
   * Sets the data validation rule to require that the input is a boolean value; this value is rendered as a checkbox.
   * @param {string} [checkedValue] - The value assigned to a checked box.
   * @param {string} [uncheckedValue] - The value assigned to an unchecked box.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set the data validation for cell A1:A10 to require a checkbox with default 1 and 0 values
   * const fRange = fWorksheet.getRange('A1:A10');
   * const rule = univerAPI.newDataValidation()
   *   .requireCheckbox()
   *   .build();
   * fRange.setDataValidation(rule);
   *
   * // Set the data validation for cell B1:B10 to require a checkbox with 'Yes' and 'No' values
   * const fRange2 = fWorksheet.getRange('B1:B10');
   * const rule2 = univerAPI.newDataValidation()
   *   .requireCheckbox('Yes', 'No')
   *   .build();
   * fRange2.setDataValidation(rule2);
   * ```
   */
  requireCheckbox(t, e) {
    return this._rule.type = n.CHECKBOX, this._rule.formula1 = t, this._rule.formula2 = e, this;
  }
  /**
   * Set the data validation type to DATE and configure the validation rules to be after a specific date.
   * @param {Date} date - The latest unacceptable date.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set some date values in the range A1:B2
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setValues([
   *   ['2024-01-01', '2024-12-31'],
   *   ['2025-01-01', '2025-12-31']
   * ]);
   *
   * // Create a data validation rule that requires a date after 2025-01-01
   * const rule = univerAPI.newDataValidation()
   *   .requireDateAfter(new Date('2025-01-01'))
   *   .build();
   * fRange.setDataValidation(rule);
   *
   * // Get the validation status of the range
   * const status = await fRange.getValidatorStatus();
   * console.log(status); // [['invalid', 'invalid', 'invalid', 'valid']]
   * ```
   */
  requireDateAfter(t) {
    return this._rule.type = n.DATE, this._rule.formula1 = t.toLocaleDateString(), this._rule.operator = g.GREATER_THAN, this;
  }
  /**
   * Set the data validation type to DATE and configure the validation rules to be before a specific date.
   * @param {Date} date - The earliest unacceptable date.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set some date values in the range A1:B2
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setValues([
   *   ['2024-01-01', '2024-12-31'],
   *   ['2025-01-01', '2025-12-31']
   * ]);
   *
   * // Create a data validation rule that requires a date before 2025-01-01
   * const rule = univerAPI.newDataValidation()
   *   .requireDateBefore(new Date('2025-01-01'))
   *   .build();
   * fRange.setDataValidation(rule);
   *
   * // Get the validation status of the range
   * const status = await fRange.getValidatorStatus();
   * console.log(status); // [['valid', 'valid', 'invalid', 'invalid']]
   * ```
   */
  requireDateBefore(t) {
    return this._rule.type = n.DATE, this._rule.formula1 = t.toLocaleDateString(), this._rule.formula2 = void 0, this._rule.operator = g.LESS_THAN, this;
  }
  /**
   * Set the data validation type to DATE and configure the validation rules to be within a specific date range.
   * @param {Date} start - The earliest acceptable date.
   * @param {Date} end - The latest acceptable date.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set some date values in the range A1:B2
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setValues([
   *   ['2024-01-01', '2024-12-31'],
   *   ['2025-01-01', '2025-12-31']
   * ]);
   *
   * // Create a data validation rule that requires a date between 2024-06-01 and 2025-06-01
   * const rule = univerAPI.newDataValidation()
   *   .requireDateBetween(new Date('2024-06-01'), new Date('2025-06-01'))
   *   .build();
   * fRange.setDataValidation(rule);
   *
   * // Get the validation status of the range
   * const status = await fRange.getValidatorStatus();
   * console.log(status); // [['invalid', 'valid', 'valid', 'invalid']]
   * ```
   */
  requireDateBetween(t, e) {
    return this._rule.type = n.DATE, this._rule.formula1 = t.toLocaleDateString(), this._rule.formula2 = e.toLocaleDateString(), this._rule.operator = g.BETWEEN, this;
  }
  /**
   * Set the data validation type to DATE and configure the validation rules to be equal to a specific date.
   * @param {Date} date - The sole acceptable date.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set some date values in the range A1:B2
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setValues([
   *   ['2024-01-01', '2024-12-31'],
   *   ['2025-01-01', '2025-12-31']
   * ]);
   *
   * // Create a data validation rule that requires a date equal to 2025-01-01
   * const rule = univerAPI.newDataValidation()
   *   .requireDateEqualTo(new Date('2025-01-01'))
   *   .build();
   * fRange.setDataValidation(rule);
   *
   * // Get the validation status of the cell A2
   * const status = await fWorksheet.getRange('A2').getValidatorStatus();
   * console.log(status?.[0]?.[0]); // 'valid'
   *
   * // Get the validation status of the cell B2
   * const status2 = await fWorksheet.getRange('B2').getValidatorStatus();
   * console.log(status2?.[0]?.[0]); // 'invalid'
   * ```
   */
  requireDateEqualTo(t) {
    return this._rule.type = n.DATE, this._rule.formula1 = t.toLocaleDateString(), this._rule.formula2 = void 0, this._rule.operator = g.EQUAL, this;
  }
  /**
   * Set the data validation type to DATE and configure the validation rules to be not within a specific date range.
   * @param {Date} start - The earliest unacceptable date.
   * @param {Date} end - The latest unacceptable date.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set some date values in the range A1:B2
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setValues([
   *   ['2024-01-01', '2024-12-31'],
   *   ['2025-01-01', '2025-12-31']
   * ]);
   *
   * // Create a data validation rule that requires a date not between 2024-06-01 and 2025-06-01
   * const rule = univerAPI.newDataValidation()
   *   .requireDateNotBetween(new Date('2024-06-01'), new Date('2025-06-01'))
   *   .build();
   * fRange.setDataValidation(rule);
   *
   * // Get the validation status of the range
   * const status = await fRange.getValidatorStatus();
   * console.log(status); // [['valid', 'invalid', 'invalid', 'valid']]
   * ```
   */
  requireDateNotBetween(t, e) {
    return this._rule.type = n.DATE, this._rule.formula1 = t.toLocaleDateString(), this._rule.formula2 = e.toLocaleDateString(), this._rule.operator = g.NOT_BETWEEN, this;
  }
  /**
   * Set the data validation type to DATE and configure the validation rules to be on or after a specific date.
   * @param {Date} date - The earliest acceptable date.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set some date values in the range A1:B2
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setValues([
   *   ['2024-01-01', '2024-12-31'],
   *   ['2025-01-01', '2025-12-31']
   * ]);
   *
   * // Create a data validation rule that requires a date on or after 2025-01-01
   * const rule = univerAPI.newDataValidation()
   *   .requireDateOnOrAfter(new Date('2025-01-01'))
   *   .build();
   * fRange.setDataValidation(rule);
   *
   * // Get the validation status of the range
   * const status = await fRange.getValidatorStatus();
   * console.log(status); // [['invalid', 'invalid', 'valid', 'valid']]
   * ```
   */
  requireDateOnOrAfter(t) {
    return this._rule.type = n.DATE, this._rule.formula1 = t.toLocaleDateString(), this._rule.formula2 = void 0, this._rule.operator = g.GREATER_THAN_OR_EQUAL, this;
  }
  /**
   * Set the data validation type to DATE and configure the validation rules to be on or before a specific date.
   * @param {Date} date - The latest acceptable date.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set some date values in the range A1:B2
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setValues([
   *   ['2024-01-01', '2024-12-31'],
   *   ['2025-01-01', '2025-12-31']
   * ]);
   *
   * // Create a data validation rule that requires a date on or before 2025-01-01
   * const rule = univerAPI.newDataValidation()
   *   .requireDateOnOrBefore(new Date('2025-01-01'))
   *   .build();
   * fRange.setDataValidation(rule);
   *
   * // Get the validation status of the range
   * const status = await fRange.getValidatorStatus();
   * console.log(status); // [['valid', 'valid', 'valid', 'invalid']]
   * ```
   */
  requireDateOnOrBefore(t) {
    return this._rule.type = n.DATE, this._rule.formula1 = t.toLocaleDateString(), this._rule.formula2 = void 0, this._rule.operator = g.LESS_THAN_OR_EQUAL, this;
  }
  /**
   * Sets the data validation rule to require that the given formula evaluates to `true`.
   * @param {string} formula - The formula string that needs to be satisfied, formula result should be TRUE or FALSE, and references range will relative offset.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set some values in the range A1:B2 and C1:D2
   * const cell = fWorksheet.getRange('A1:B2');
   * cell.setValues([
   *   [4, 3],
   *   [2, 1]
   * ]);
   * const fRange = fWorksheet.getRange('C1:D2');
   * fRange.setValues([
   *   [1, 2],
   *   [3, 4]
   * ]);
   *
   * // Create a data validation rule that requires the formula '=A1>2' to be satisfied
   * const rule = univerAPI.newDataValidation()
   *   .requireFormulaSatisfied('=A1>2')
   *   .setOptions({
   *     showErrorMessage: true,
   *     error: 'Please enter a value equal to A1'
   *   })
   *   .build();
   * fRange.setDataValidation(rule);
   *
   * // Get the validation status of the range
   * const status = await fRange.getValidatorStatus();
   * console.log(status); // [['valid', 'valid', 'invalid', 'invalid']]
   * ```
   */
  requireFormulaSatisfied(t) {
    return this._rule.type = n.CUSTOM, this._rule.formula1 = t, this._rule.formula2 = void 0, this;
  }
  /**
   * Sets the data validation rule to require a number that falls between, or is either of, two specified numbers.
   * @param {number} start - The lowest acceptable value.
   * @param {number} end - The highest acceptable value.
   * @param {boolean} [isInteger] - Indicates whether the required number is an integer.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a new data validation rule that requires a number between 1 and 10 for the range A1:B10
   * const fRange = fWorksheet.getRange('A1:B10');
   * const rule = univerAPI.newDataValidation()
   *   .requireNumberBetween(1, 10)
   *   .setOptions({
   *     allowBlank: false,
   *     showErrorMessage: true,
   *     error: 'Please enter a number between 1 and 10'
   *   })
   *   .build();
   * fRange.setDataValidation(rule);
   * ```
   */
  requireNumberBetween(t, e, a) {
    return this._rule.formula1 = `${t}`, this._rule.formula2 = `${e}`, this._rule.operator = g.BETWEEN, this._rule.type = a ? n.WHOLE : n.DECIMAL, this;
  }
  /**
   * Sets the data validation rule to require a number equal to the given value.
   * @param {number} num - The sole acceptable value.
   * @param {boolean} [isInteger] - Indicates whether the required number is an integer.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a new data validation rule that requires a number equal to 10 for the range A1:B10
   * const fRange = fWorksheet.getRange('A1:B10');
   * const rule = univerAPI.newDataValidation()
   *   .requireNumberEqualTo(10)
   *   .setOptions({
   *     allowBlank: false,
   *     showErrorMessage: true,
   *     error: 'Please enter a number equal to 10'
   *   })
   *   .build();
   * fRange.setDataValidation(rule);
   * ```
   */
  requireNumberEqualTo(t, e) {
    return this._rule.formula1 = `${t}`, this._rule.formula2 = void 0, this._rule.operator = g.EQUAL, this._rule.type = e ? n.WHOLE : n.DECIMAL, this;
  }
  /**
   * Sets the data validation rule to require a number greater than the given value.
   * @param {number} num - The highest unacceptable value.
   * @param {boolean} [isInteger] - Indicates whether the required number is an integer.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a new data validation rule that requires a number greater than 10 for the range A1:B10
   * const fRange = fWorksheet.getRange('A1:B10');
   * const rule = univerAPI.newDataValidation()
   *   .requireNumberGreaterThan(10)
   *   .setOptions({
   *     allowBlank: false,
   *     showErrorMessage: true,
   *     error: 'Please enter a number greater than 10'
   *   })
   *   .build();
   * fRange.setDataValidation(rule);
   * ```
   */
  requireNumberGreaterThan(t, e) {
    return this._rule.formula1 = `${t}`, this._rule.formula2 = void 0, this._rule.operator = g.GREATER_THAN, this._rule.type = e ? n.WHOLE : n.DECIMAL, this;
  }
  /**
   * Sets the data validation rule to require a number greater than or equal to the given value.
   * @param {number} num - The lowest acceptable value.
   * @param {boolean} [isInteger] - Indicates whether the required number is an integer.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a new data validation rule that requires a number greater than 10 or equal to 10 for the range A1:B10
   * const fRange = fWorksheet.getRange('A1:B10');
   * const rule = univerAPI.newDataValidation()
   *   .requireNumberGreaterThanOrEqualTo(10)
   *   .setOptions({
   *     allowBlank: false,
   *     showErrorMessage: true,
   *     error: 'Please enter a number greater than 10 or equal to 10'
   *   })
   *   .build();
   * fRange.setDataValidation(rule);
   * ```
   */
  requireNumberGreaterThanOrEqualTo(t, e) {
    return this._rule.formula1 = `${t}`, this._rule.formula2 = void 0, this._rule.operator = g.GREATER_THAN_OR_EQUAL, this._rule.type = e ? n.WHOLE : n.DECIMAL, this;
  }
  /**
   * Sets the data validation rule to require a number less than the given value.
   * @param {number} num - The lowest unacceptable value.
   * @param {boolean} [isInteger] - Indicates whether the required number is an integer.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a new data validation rule that requires a number less than 10 for the range A1:B10
   * const fRange = fWorksheet.getRange('A1:B10');
   * const rule = univerAPI.newDataValidation()
   *   .requireNumberLessThan(10)
   *   .setOptions({
   *     allowBlank: false,
   *     showErrorMessage: true,
   *     error: 'Please enter a number less than 10'
   *   })
   *   .build();
   * fRange.setDataValidation(rule);
   * ```
   */
  requireNumberLessThan(t, e) {
    return this._rule.formula1 = `${t}`, this._rule.formula2 = void 0, this._rule.operator = g.LESS_THAN, this._rule.type = e ? n.WHOLE : n.DECIMAL, this;
  }
  /**
   * Sets the data validation rule to require a number less than or equal to the given value.
   * @param {number} num - The highest acceptable value.
   * @param {boolean} [isInteger] - Indicates whether the required number is an integer.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a new data validation rule that requires a number less than 10 or equal to 10 for the range A1:B10
   * const fRange = fWorksheet.getRange('A1:B10');
   * const rule = univerAPI.newDataValidation()
   *   .requireNumberLessThanOrEqualTo(10)
   *   .setOptions({
   *     allowBlank: false,
   *     showErrorMessage: true,
   *     error: 'Please enter a number less than 10 or equal to 10'
   *   })
   *   .build();
   * fRange.setDataValidation(rule);
   * ```
   */
  requireNumberLessThanOrEqualTo(t, e) {
    return this._rule.formula1 = `${t}`, this._rule.formula2 = void 0, this._rule.operator = g.LESS_THAN_OR_EQUAL, this._rule.type = e ? n.WHOLE : n.DECIMAL, this;
  }
  /**
   * Sets the data validation rule to require a number that does not fall between, and is neither of, two specified numbers.
   * @param {number} start - The lowest unacceptable value.
   * @param {number} end - The highest unacceptable value.
   * @param {boolean} [isInteger] - Optional parameter, indicating whether the number to be verified is an integer.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a new data validation rule that requires a number not between 1 and 10 for the range A1:B10
   * const fRange = fWorksheet.getRange('A1:B10');
   * const rule = univerAPI.newDataValidation()
   *   .requireNumberNotBetween(1, 10)
   *   .setOptions({
   *     allowBlank: false,
   *     showErrorMessage: true,
   *     error: 'Please enter a number not between 1 and 10'
   *   })
   *   .build();
   * fRange.setDataValidation(rule);
   * ```
   */
  requireNumberNotBetween(t, e, a) {
    return this._rule.formula1 = `${t}`, this._rule.formula2 = `${e}`, this._rule.operator = g.NOT_BETWEEN, this._rule.type = a ? n.WHOLE : n.DECIMAL, this;
  }
  /**
   * Sets the data validation rule to require a number not equal to the given value.
   * @param {number} num - The sole unacceptable value.
   * @param {boolean} [isInteger] - Indicates whether the required number is an integer.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a new data validation rule that requires a number not equal to 10 for the range A1:B10
   * const fRange = fWorksheet.getRange('A1:B10');
   * const rule = univerAPI.newDataValidation()
   *   .requireNumberNotEqualTo(10)
   *   .setOptions({
   *     allowBlank: false,
   *     showErrorMessage: true,
   *     error: 'Please enter a number not equal to 10'
   *   })
   *   .build();
   * fRange.setDataValidation(rule);
   * ```
   */
  requireNumberNotEqualTo(t, e) {
    return this._rule.formula1 = `${t}`, this._rule.formula2 = void 0, this._rule.operator = g.NOT_EQUAL, this._rule.type = e ? n.WHOLE : n.DECIMAL, this;
  }
  /**
   * Sets a data validation rule that requires the user to enter a value from a list of specific values.
   * The list can be displayed in a dropdown, and the user can choose multiple values according to the settings.
   * @param {string[]} values - An array of acceptable values.
   * @param {boolean} [multiple] - Optional parameter indicating whether the user can select multiple values.
   * @param {boolean} [showDropdown] - Optional parameter indicating whether to display the list in a dropdown.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a new data validation rule that requires the user to enter a value from the list ['Yes', 'No'] for the range A1:B10
   * const fRange = fWorksheet.getRange('A1:B10');
   * const rule = univerAPI.newDataValidation()
   *   .requireValueInList(['Yes', 'No'])
   *   .setOptions({
   *     allowBlank: true,
   *     showErrorMessage: true,
   *     error: 'Please enter a value from the list'
   *   })
   *   .build();
   * fRange.setDataValidation(rule);
   * ```
   */
  requireValueInList(t, e, a) {
    return this._rule.type = e ? n.LIST_MULTIPLE : n.LIST, this._rule.formula1 = t.join(","), this._rule.formula2 = void 0, this._rule.showDropDown = a != null ? a : !0, this;
  }
  /**
   * Sets a data validation rule that requires the user to enter a value within a specific range.
   * The range is defined by an FRange object, which contains the unit ID, sheet name, and cell range.
   * @param {FRange} range - An FRange object representing the range of values that the user can enter.
   * @param {boolean} [multiple] - Optional parameter indicating whether the user can select multiple values.
   * @param {boolean} [showDropdown] - Optional parameter indicating whether to display the list in a dropdown.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set the values in the range B1:B2
   * const fRange = fWorksheet.getRange('B1:B2');
   * fRange.setValues([
   *   ['Yes'],
   *   ['No']
   * ]);
   *
   * // Create a new data validation rule that requires the user to enter a value from the range B1:B2 for the range A1:A10
   * const rule = univerAPI.newDataValidation()
   *   .requireValueInRange(fRange)
   *   .setOptions({
   *     allowBlank: false,
   *     showErrorMessage: true,
   *     error: 'Please enter a value from the list'
   *   })
   *   .build();
   * const cell = fWorksheet.getRange('A1');
   * cell.setDataValidation(rule);
   * ```
   */
  requireValueInRange(t, e, a) {
    return this._rule.type = e ? n.LIST_MULTIPLE : n.LIST, this._rule.formula1 = `=${z({
      unitId: t.getUnitId(),
      sheetName: t.getSheetName(),
      range: t.getRange()
    })}`, this._rule.formula2 = void 0, this._rule.showDropDown = a != null ? a : !0, this;
  }
  /**
   * Sets whether to allow invalid data and configures the error style.
   * If invalid data is not allowed, the error style will be set to STOP, indicating that data entry must stop upon encountering an error.
   * If invalid data is allowed, the error style will be set to WARNING, indicating that a warning will be displayed when invalid data is entered, but data entry can continue.
   * @param {boolean} allowInvalidData - Whether to allow invalid data.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set the data validation for cell A1:B2 to allow invalid data, so A1:B2 will display a warning when invalid data is entered
   * const fRange = fWorksheet.getRange('A1:B2');
   * const rule = univerAPI.newDataValidation()
   *   .requireValueInList(['Yes', 'No'])
   *   .setAllowInvalid(true)
   *   .build();
   * fRange.setDataValidation(rule);
   *
   * // Set the data validation for cell C1:D2 to not allow invalid data, so C1:D2 will stop data entry when invalid data is entered
   * const fRange2 = fWorksheet.getRange('C1:D2');
   * const rule2 = univerAPI.newDataValidation()
   *   .requireValueInList(['Yes', 'No'])
   *   .setAllowInvalid(false)
   *   .build();
   * fRange2.setDataValidation(rule2);
   * ```
   */
  setAllowInvalid(t) {
    return this._rule.errorStyle = t ? U.WARNING : U.STOP, this;
  }
  /**
   * Sets whether to allow blank values.
   * @param {boolean} allowBlank - Whether to allow blank values.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * // Assume current sheet is empty data
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set the data validation for cell A1:B2 to allow blank values
   * const fRange = fWorksheet.getRange('A1:B2');
   * const rule = univerAPI.newDataValidation()
   *   .requireValueInList(['Yes', 'No'])
   *   .setAllowBlank(true)
   *   .build();
   * fRange.setDataValidation(rule);
   *
   * // Set the data validation for cell C1:D2 to not allow blank values
   * const fRange2 = fWorksheet.getRange('C1:D2');
   * const rule2 = univerAPI.newDataValidation()
   *   .requireValueInList(['Yes', 'No'])
   *   .setAllowBlank(false)
   *   .build();
   * fRange2.setDataValidation(rule2);
   * ```
   */
  setAllowBlank(t) {
    return this._rule.allowBlank = t, this;
  }
  /**
   * Sets the options for the data validation rule.
   * @param {Partial<IDataValidationRuleOptions>} options - The options to set for the data validation rule.
   * @returns {FDataValidationBuilder} The current instance for method chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a new data validation rule that requires the user to enter a value from the list ['Yes', 'No'] for the range A1:B10
   * const fRange = fWorksheet.getRange('A1:B10');
   * const rule = univerAPI.newDataValidation()
   *   .requireValueInList(['Yes', 'No'])
   *   .setOptions({
   *     allowBlank: true,
   *     showErrorMessage: true,
   *     error: 'Please enter a value from the list'
   *   })
   *   .build();
   * fRange.setDataValidation(rule);
   * ```
   */
  setOptions(t) {
    return Object.assign(this._rule, t), this;
  }
}
class w {
  constructor(t, e, a) {
    v(this, "rule");
    v(this, "_worksheet");
    v(this, "_injector");
    this._injector = a, this.rule = t, this._worksheet = e;
  }
  /**
   * Gets whether invalid data is allowed based on the error style value
   * @returns {boolean} true if invalid data is allowed, false otherwise
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const rules = fWorksheet.getDataValidations();
   * rules.forEach((rule) => {
   *   console.log(rule, rule.getAllowInvalid());
   * });
   * ```
   */
  getAllowInvalid() {
    return this.rule.errorStyle !== U.STOP;
  }
  /**
   * Gets the data validation type of the rule
   * @returns {DataValidationType | string} The data validation type
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const rules = fWorksheet.getDataValidations();
   * rules.forEach((rule) => {
   *   console.log(rule, rule.getCriteriaType());
   * });
   * ```
   */
  getCriteriaType() {
    return this.rule.type;
  }
  /**
   * Gets the values used for criteria evaluation
   * @returns {[string | undefined, string | undefined, string | undefined]} An array containing the operator, formula1, and formula2 values
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const rules = fWorksheet.getDataValidations();
   * rules.forEach((rule) => {
   *   console.log(rule);
   *   const criteriaValues = rule.getCriteriaValues();
   *   const [operator, formula1, formula2] = criteriaValues;
   *   console.log(operator, formula1, formula2);
   * });
   * ```
   */
  getCriteriaValues() {
    return [this.rule.operator, this.rule.formula1, this.rule.formula2];
  }
  /**
   * Gets the help text information, which is used to provide users with guidance and support
   * @returns {string | undefined} Returns the help text information. If there is no error message, it returns an undefined value
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B10');
   * const rule = univerAPI.newDataValidation()
   *   .requireNumberBetween(1, 10)
   *   .setOptions({
   *     allowBlank: true,
   *     showErrorMessage: true,
   *     error: 'Please enter a number between 1 and 10'
   *   })
   *   .build();
   * fRange.setDataValidation(rule);
   * console.log(fRange.getDataValidation().getHelpText()); // 'Please enter a number between 1 and 10'
   * ```
   */
  getHelpText() {
    return this.rule.error;
  }
  /**
   * Creates a new instance of FDataValidationBuilder using the current rule object
   * @returns {FDataValidationBuilder} A new FDataValidationBuilder instance with the same rule configuration
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B10');
   * const rule = univerAPI.newDataValidation()
   *   .requireNumberBetween(1, 10)
   *   .setOptions({
   *     allowBlank: true,
   *     showErrorMessage: true,
   *     error: 'Please enter a number between 1 and 10'
   *   })
   *   .build();
   * fRange.setDataValidation(rule);
   *
   * const builder = fRange.getDataValidation().copy();
   * const newRule = builder
   *   .requireNumberBetween(1, 5)
   *   .setOptions({
   *     error: 'Please enter a number between 1 and 5'
   *   })
   *   .build();
   * fRange.setDataValidation(newRule);
   * ```
   */
  copy() {
    return new C(this.rule);
  }
  /**
   * Gets whether the data validation rule is applied to the worksheet
   * @returns {boolean} true if the rule is applied, false otherwise
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const rules = fWorksheet.getDataValidations();
   * rules.forEach((rule) => {
   *   console.log(rule, rule.getApplied());
   * });
   *
   * const fRange = fWorksheet.getRange('A1:B10');
   * console.log(fRange.getDataValidation()?.getApplied());
   * ```
   */
  getApplied() {
    if (!this._worksheet)
      return !1;
    const e = this._injector.get(y).getRuleById(this._worksheet.getUnitId(), this._worksheet.getSheetId(), this.rule.uid);
    return !!(e && e.ranges.length);
  }
  /**
   * Gets the ranges to which the data validation rule is applied
   * @returns {FRange[]} An array of FRange objects representing the ranges to which the data validation rule is applied
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const rules = fWorksheet.getDataValidations();
   * rules.forEach((rule) => {
   *   console.log(rule);
   *   const ranges = rule.getRanges();
   *   ranges.forEach((range) => {
   *     console.log(range.getA1Notation());
   *   });
   * });
   * ```
   */
  getRanges() {
    if (!this.getApplied())
      return [];
    const t = this._injector.get(P).getUnit(this._worksheet.getUnitId());
    return this.rule.ranges.map((e) => this._injector.createInstance(M, t, this._worksheet, e));
  }
  /**
   * Gets the unit ID of the worksheet
   * @returns {string | undefined} The unit ID of the worksheet
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B10');
   * console.log(fRange.getDataValidation().getUnitId());
   * ```
   */
  getUnitId() {
    var t;
    return (t = this._worksheet) == null ? void 0 : t.getUnitId();
  }
  /**
   * Gets the sheet ID of the worksheet
   * @returns {string | undefined} The sheet ID of the worksheet
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B10');
   * console.log(fRange.getDataValidation().getSheetId());
   * ```
   */
  getSheetId() {
    var t;
    return (t = this._worksheet) == null ? void 0 : t.getSheetId();
  }
  /**
   * Set Criteria for the data validation rule
   * @param {DataValidationType} type - The type of data validation criteria
   * @param {[DataValidationOperator, string, string]} values - An array containing the operator, formula1, and formula2 values
   * @param {boolean} [allowBlank] - Whether to allow blank values
   * @returns {FDataValidation} The current instance for method chaining
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a new data validation rule that requires a number equal to 20 for the range A1:B10
   * const fRange = fWorksheet.getRange('A1:B10');
   * const rule = univerAPI.newDataValidation()
   *   .requireNumberEqualTo(20)
   *   .build();
   * fRange.setDataValidation(rule);
   *
   * // Change the rule criteria to require a number between 1 and 10
   * fRange.getDataValidation().setCriteria(
   *   univerAPI.Enum.DataValidationType.DECIMAL,
   *   [univerAPI.Enum.DataValidationOperator.BETWEEN, '1', '10']
   * );
   * ```
   */
  setCriteria(t, e, a = !0) {
    if (this.getApplied() && !this._injector.get(b).syncExecuteCommand(R.id, {
      unitId: this.getUnitId(),
      subUnitId: this.getSheetId(),
      ruleId: this.rule.uid,
      setting: {
        operator: e[0],
        formula1: e[1],
        formula2: e[2],
        type: this.rule.type,
        allowBlank: a
      }
    }))
      throw new Error("setCriteria failed");
    return this.rule.operator = e[0], this.rule.formula1 = e[1], this.rule.formula2 = e[2], this.rule.type = t, this.rule.allowBlank = a, this;
  }
  /**
   * Set the options for the data validation rule
   * @param {Partial<IDataValidationRuleOptions>} options - The options to set for the data validation rule
   * @returns {FDataValidation} The current instance for method chaining
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a new data validation rule that requires a number equal to 20 for the range A1:B10
   * const fRange = fWorksheet.getRange('A1:B10');
   * const rule = univerAPI.newDataValidation()
   *   .requireNumberEqualTo(20)
   *   .build();
   * fRange.setDataValidation(rule);
   *
   * // Supplement the rule with additional options
   * fRange.getDataValidation().setOptions({
   *   allowBlank: true,
   *   showErrorMessage: true,
   *   error: 'Please enter a valid value'
   * });
   * ```
   */
  setOptions(t) {
    if (this.getApplied() && !this._injector.get(b).syncExecuteCommand(T.id, {
      unitId: this.getUnitId(),
      subUnitId: this.getSheetId(),
      ruleId: this.rule.uid,
      options: {
        ...Q(this.rule),
        ...t
      }
    }))
      throw new Error("setOptions failed");
    return Object.assign(this.rule, t), this;
  }
  /**
   * Set the ranges to the data validation rule
   * @param {FRange[]} ranges - New ranges array
   * @returns {FDataValidation} The current instance for method chaining
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a new data validation rule that requires a number equal to 20 for the range A1:B10
   * const fRange = fWorksheet.getRange('A1:B10');
   * const rule = univerAPI.newDataValidation()
   *   .requireNumberEqualTo(20)
   *   .build();
   * fRange.setDataValidation(rule);
   *
   * // Change the range to C1:D10
   * const newRuleRange = fWorksheet.getRange('C1:D10');
   * fRange.getDataValidation().setRanges([newRuleRange]);
   * ```
   */
  setRanges(t) {
    if (this.getApplied() && !this._injector.get(b).syncExecuteCommand(B.id, {
      unitId: this.getUnitId(),
      subUnitId: this.getSheetId(),
      ruleId: this.rule.uid,
      ranges: t.map((r) => r.getRange())
    }))
      throw new Error("setRanges failed");
    return this.rule.ranges = t.map((e) => e.getRange()), this;
  }
  /**
   * Delete the data validation rule from the worksheet
   * @returns {boolean} true if the rule is deleted successfully, false otherwise
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a new data validation rule that requires a number equal to 20 for the range A1:B10
   * const fRange = fWorksheet.getRange('A1:B10');
   * const rule = univerAPI.newDataValidation()
   *   .requireNumberEqualTo(20)
   *   .build();
   * fRange.setDataValidation(rule);
   *
   * // Delete the data validation rule
   * fRange.getDataValidation().delete();
   * ```
   */
  delete() {
    return this.getApplied() ? this._injector.get(b).syncExecuteCommand(L.id, {
      unitId: this.getUnitId(),
      subUnitId: this.getSheetId(),
      ruleId: this.rule.uid
    }) : !1;
  }
}
class X extends M {
  setDataValidation(t) {
    if (!t)
      return this._commandService.syncExecuteCommand(G.id, {
        unitId: this._workbook.getUnitId(),
        subUnitId: this._worksheet.getSheetId(),
        ranges: [this._range]
      }), this;
    const e = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      rule: {
        ...t.rule,
        ranges: [this._range]
      }
    };
    return this._commandService.syncExecuteCommand(O.id, e), this;
  }
  getDataValidation() {
    const e = this._injector.get(S).getDataValidation(
      this._workbook.getUnitId(),
      this._worksheet.getSheetId(),
      [this._range]
    );
    return e && new w(e, this._worksheet, this._injector);
  }
  getDataValidations() {
    return this._injector.get(S).getDataValidations(
      this._workbook.getUnitId(),
      this._worksheet.getSheetId(),
      [this._range]
    ).map((e) => new w(e, this._worksheet, this._injector));
  }
  async getValidatorStatus() {
    return this._injector.get(S).validatorRanges(
      this._workbook.getUnitId(),
      this._worksheet.getSheetId(),
      [this._range]
    );
  }
  async getDataValidationErrorAsync() {
    const t = this._workbook.getUnitId(), e = this._worksheet.getSheetId();
    return this._collectValidationErrorsForRange(t, e, [this._range]);
  }
  async _collectValidationErrorsForRange(t, e, a) {
    if (!a.length)
      return [];
    const r = this._injector.get(S), i = this._worksheet, h = i.getName(), s = [];
    for (const o of a) {
      const d = [];
      for (let u = o.startRow; u <= o.endRow; u++)
        for (let l = o.startColumn; l <= o.endColumn; l++)
          d.push((async () => {
            var c;
            try {
              if (await r.validatorCell(t, e, u, l) !== A.VALID) {
                const m = this._injector.get(V).getRuleByLocation(t, e, u, l);
                if (m) {
                  const k = ((c = i.getCell(u, l)) == null ? void 0 : c.v) || null, I = this._createDataValidationError(
                    h,
                    u,
                    l,
                    m,
                    k
                  );
                  s.push(I);
                }
              }
            } catch (_) {
              console.warn(`Failed to validate cell [${u}, ${l}]:`, _);
            }
          })());
      await Promise.all(d);
    }
    return s;
  }
  _createDataValidationError(t, e, a, r, i) {
    return {
      sheetName: t,
      row: e,
      column: a,
      ruleId: r.uid,
      inputValue: i,
      rule: r
    };
  }
}
M.extend(X);
class J extends q {
  /**
   * @deprecated use `univerAPI.newDataValidation()` as instead.
   * @returns {FDataValidationBuilder} A new instance of the FDataValidationBuilder class
   */
  static newDataValidation() {
    return new C();
  }
  newDataValidation() {
    return new C();
  }
  /**
   * @ignore
   */
  // eslint-disable-next-line max-lines-per-function
  _initialize(t) {
    const e = t.get(b);
    this.registerEventHandler(
      this.Event.SheetDataValidationChanged,
      () => t.has(V) ? t.get(V).ruleChange$.subscribe((r) => {
        const { unitId: i, subUnitId: h, rule: s, oldRule: o, type: d } = r, u = this.getSheetTarget(i, h);
        if (!u)
          return;
        const { workbook: l, worksheet: c } = u, _ = new w(s, c.getSheet(), this._injector);
        this.fireEvent(this.Event.SheetDataValidationChanged, {
          origin: r,
          worksheet: c,
          workbook: l,
          changeType: d,
          oldRule: o,
          rule: _
        });
      }) : { dispose: () => {
      } }
    ), this.registerEventHandler(
      this.Event.SheetDataValidatorStatusChanged,
      () => t.has(V) ? t.get(V).validStatusChange$.subscribe((r) => {
        const { unitId: i, subUnitId: h, ruleId: s, status: o, row: d, col: u } = r, l = this.getSheetTarget(i, h);
        if (!l)
          return;
        const { workbook: c, worksheet: _ } = l, E = _.getDataValidation(s);
        E && this.fireEvent(this.Event.SheetDataValidatorStatusChanged, {
          workbook: c,
          worksheet: _,
          row: d,
          column: u,
          rule: E,
          status: o
        });
      }) : { dispose: () => {
      } }
    ), this.registerEventHandler(
      this.Event.BeforeSheetDataValidationAdd,
      () => e.beforeCommandExecuted((a) => {
        if (a.id === O.id) {
          const r = a.params, i = this.getSheetTarget(r.unitId, r.subUnitId);
          if (!i)
            return;
          const { workbook: h, worksheet: s } = i, o = {
            worksheet: s,
            workbook: h,
            rule: r.rule
          };
          if (this.fireEvent(this.Event.BeforeSheetDataValidationAdd, o), o.cancel)
            throw new D();
        }
      })
    ), this.registerEventHandler(
      this.Event.BeforeSheetDataValidationCriteriaUpdate,
      () => e.beforeCommandExecuted((a) => {
        if (a.id === R.id) {
          const r = a.params, i = this.getSheetTarget(r.unitId, r.subUnitId);
          if (!i)
            return;
          const { workbook: h, worksheet: s } = i, o = s.getDataValidation(r.ruleId);
          if (!o)
            return;
          const d = {
            worksheet: s,
            workbook: h,
            rule: o,
            ruleId: r.ruleId,
            newCriteria: r.setting
          };
          if (this.fireEvent(this.Event.BeforeSheetDataValidationCriteriaUpdate, d), d.cancel)
            throw new D();
        }
      })
    ), this.registerEventHandler(
      this.Event.BeforeSheetDataValidationRangeUpdate,
      () => e.beforeCommandExecuted((a) => {
        if (a.id === B.id) {
          const r = a.params, i = this.getSheetTarget(r.unitId, r.subUnitId);
          if (!i)
            return;
          const { workbook: h, worksheet: s } = i, o = s.getDataValidation(r.ruleId);
          if (!o)
            return;
          const d = {
            worksheet: s,
            workbook: h,
            rule: o,
            ruleId: r.ruleId,
            newRanges: r.ranges
          };
          if (this.fireEvent(this.Event.BeforeSheetDataValidationRangeUpdate, d), d.cancel)
            throw new D();
        }
      })
    ), this.registerEventHandler(
      this.Event.BeforeSheetDataValidationOptionsUpdate,
      () => e.beforeCommandExecuted((a) => {
        if (a.id === T.id) {
          const r = a.params, i = this.getSheetTarget(r.unitId, r.subUnitId);
          if (!i)
            return;
          const { workbook: h, worksheet: s } = i, o = s.getDataValidation(r.ruleId);
          if (!o)
            return;
          const d = {
            worksheet: s,
            workbook: h,
            rule: o,
            ruleId: r.ruleId,
            newOptions: r.options
          };
          if (this.fireEvent(this.Event.BeforeSheetDataValidationOptionsUpdate, d), d.cancel)
            throw new D();
        }
      })
    ), this.registerEventHandler(
      this.Event.BeforeSheetDataValidationDelete,
      () => e.beforeCommandExecuted((a) => {
        if (a.id === L.id) {
          const r = a.params, i = this.getSheetTarget(r.unitId, r.subUnitId);
          if (!i)
            return;
          const { workbook: h, worksheet: s } = i, o = s.getDataValidation(r.ruleId);
          if (!o)
            return;
          const d = {
            worksheet: s,
            workbook: h,
            rule: o,
            ruleId: r.ruleId
          };
          if (this.fireEvent(this.Event.BeforeSheetDataValidationDelete, d), d.cancel)
            throw new D();
        }
      })
    ), this.registerEventHandler(
      this.Event.BeforeSheetDataValidationDeleteAll,
      () => e.beforeCommandExecuted((a) => {
        if (a.id === j.id) {
          const r = a.params, i = this.getSheetTarget(r.unitId, r.subUnitId);
          if (!i)
            return;
          const { workbook: h, worksheet: s } = i, o = {
            worksheet: s,
            workbook: h,
            rules: s.getDataValidations()
          };
          if (this.fireEvent(this.Event.BeforeSheetDataValidationDeleteAll, o), o.cancel)
            throw new D();
        }
      })
    );
  }
}
q.extend(J);
class Y extends H {
  _initialize() {
    Object.defineProperty(this, "_dataValidationModel", {
      get() {
        return this._injector.get(V);
      }
    });
  }
  getValidatorStatus() {
    return this._injector.get(S).validatorWorkbook(this._workbook.getUnitId());
  }
  async getAllDataValidationErrorAsync() {
    const t = this._workbook.getUnitId(), e = this._dataValidationModel.getSubUnitIds(t), a = [];
    for (const r of e) {
      const i = await this._collectValidationErrorsForSheet(t, r);
      a.push(...i);
    }
    return a;
  }
  async _collectValidationErrorsForSheet(t, e) {
    const a = this._dataValidationModel.getRules(t, e);
    if (!a.length)
      return [];
    const r = a.flatMap((i) => i.ranges);
    return this._collectValidationErrorsForRange(t, e, r);
  }
  async _collectValidationErrorsForRange(t, e, a) {
    if (!a.length)
      return [];
    const r = this._injector.get(S), h = this._workbook.getSheetBySheetId(e);
    if (!h)
      throw new Error(`Cannot find worksheet with sheetId: ${e}`);
    const s = h.getName(), o = [];
    for (const d of a) {
      const u = [];
      for (let l = d.startRow; l <= d.endRow; l++)
        for (let c = d.startColumn; c <= d.endColumn; c++)
          u.push((async () => {
            var _;
            try {
              if (await r.validatorCell(t, e, l, c) !== A.VALID) {
                const m = this._dataValidationModel.getRuleByLocation(t, e, l, c);
                if (m) {
                  const k = ((_ = h.getCell(l, c)) == null ? void 0 : _.v) || null, I = this._createDataValidationError(
                    s,
                    l,
                    c,
                    m,
                    k
                  );
                  o.push(I);
                }
              }
            } catch (E) {
              console.warn(`Failed to validate cell [${l}, ${c}]:`, E);
            }
          })());
      await Promise.all(u);
    }
    return o;
  }
  _createDataValidationError(t, e, a, r, i) {
    return {
      sheetName: t,
      row: e,
      column: a,
      ruleId: r.uid,
      inputValue: i,
      rule: r
    };
  }
  // region DataValidationHooks
  onDataValidationChange(t) {
    return p(this._dataValidationModel.ruleChange$.pipe(x((e) => e.unitId === this._workbook.getUnitId())).subscribe(t));
  }
  onDataValidationStatusChange(t) {
    return p(this._dataValidationModel.validStatusChange$.pipe(x((e) => e.unitId === this._workbook.getUnitId())).subscribe(t));
  }
  onBeforeAddDataValidation(t) {
    return p(this._commandService.beforeCommandExecuted((e, a) => {
      const r = e.params;
      if (e.id === O.id) {
        if (r.unitId !== this._workbook.getUnitId())
          return;
        if (t(r, a) === !1)
          throw new Error("Command is stopped by the hook onBeforeAddDataValidation");
      }
    }));
  }
  onBeforeUpdateDataValidationCriteria(t) {
    return p(this._commandService.beforeCommandExecuted((e, a) => {
      const r = e.params;
      if (e.id === R.id) {
        if (r.unitId !== this._workbook.getUnitId())
          return;
        if (t(r, a) === !1)
          throw new Error("Command is stopped by the hook onBeforeUpdateDataValidationCriteria");
      }
    }));
  }
  onBeforeUpdateDataValidationRange(t) {
    return p(this._commandService.beforeCommandExecuted((e, a) => {
      const r = e.params;
      if (e.id === B.id) {
        if (r.unitId !== this._workbook.getUnitId())
          return;
        if (t(r, a) === !1)
          throw new Error("Command is stopped by the hook onBeforeUpdateDataValidationRange");
      }
    }));
  }
  onBeforeUpdateDataValidationOptions(t) {
    return p(this._commandService.beforeCommandExecuted((e, a) => {
      const r = e.params;
      if (e.id === T.id) {
        if (r.unitId !== this._workbook.getUnitId())
          return;
        if (t(r, a) === !1)
          throw new Error("Command is stopped by the hook onBeforeUpdateDataValidationOptions");
      }
    }));
  }
  onBeforeDeleteDataValidation(t) {
    return p(this._commandService.beforeCommandExecuted((e, a) => {
      const r = e.params;
      if (e.id === L.id) {
        if (r.unitId !== this._workbook.getUnitId())
          return;
        if (t(r, a) === !1)
          throw new Error("Command is stopped by the hook onBeforeDeleteDataValidation");
      }
    }));
  }
  onBeforeDeleteAllDataValidation(t) {
    return p(this._commandService.beforeCommandExecuted((e, a) => {
      const r = e.params;
      if (e.id === j.id) {
        if (r.unitId !== this._workbook.getUnitId())
          return;
        if (t(r, a) === !1)
          throw new Error("Command is stopped by the hook onBeforeDeleteAllDataValidation");
      }
    }));
  }
}
H.extend(Y);
class Z extends F {
  getDataValidations() {
    return this._injector.get(y).getRules(this._workbook.getUnitId(), this._worksheet.getSheetId()).map((e) => new w(e, this._worksheet, this._injector));
  }
  getValidatorStatus() {
    return this._injector.get(S).validatorWorksheet(
      this._workbook.getUnitId(),
      this._worksheet.getSheetId()
    );
  }
  getValidatorStatusAsync() {
    return this.getValidatorStatus();
  }
  getDataValidation(t) {
    const a = this._injector.get(y).getRuleById(this._workbook.getUnitId(), this._worksheet.getSheetId(), t);
    return a ? new w(a, this._worksheet, this._injector) : null;
  }
  async getAllDataValidationErrorAsync() {
    const t = this._workbook.getUnitId(), e = this._worksheet.getSheetId();
    return this._collectValidationErrorsForSheet(t, e);
  }
  async _collectValidationErrorsForSheet(t, e) {
    const r = this._injector.get(y).getRules(t, e);
    if (!r.length)
      return [];
    const i = r.flatMap((h) => h.ranges);
    return this._collectValidationErrorsForRange(t, e, i);
  }
  async _collectValidationErrorsForRange(t, e, a) {
    if (!a.length)
      return [];
    const r = this._injector.get(S), i = this._worksheet, h = i.getName(), s = [];
    for (const o of a) {
      const d = [];
      for (let u = o.startRow; u <= o.endRow; u++)
        for (let l = o.startColumn; l <= o.endColumn; l++)
          d.push((async () => {
            var c;
            try {
              if (await r.validatorCell(t, e, u, l) !== A.VALID) {
                const m = this._injector.get(V).getRuleByLocation(t, e, u, l);
                if (m) {
                  const k = ((c = i.getCell(u, l)) == null ? void 0 : c.v) || null, I = this._createDataValidationError(
                    h,
                    u,
                    l,
                    m,
                    k
                  );
                  s.push(I);
                }
              }
            } catch (_) {
              console.warn(`Failed to validate cell [${u}, ${l}]:`, _);
            }
          })());
      await Promise.all(d);
    }
    return s;
  }
  _createDataValidationError(t, e, a, r, i) {
    return {
      sheetName: t,
      row: e,
      column: a,
      ruleId: r.uid,
      inputValue: i,
      rule: r
    };
  }
}
F.extend(Z);
class tt {
  get SheetDataValidationChanged() {
    return "SheetDataValidationChanged";
  }
  get SheetDataValidatorStatusChanged() {
    return "SheetDataValidatorStatusChanged";
  }
  get BeforeSheetDataValidationAdd() {
    return "BeforeSheetDataValidationAdd";
  }
  get BeforeSheetDataValidationDelete() {
    return "BeforeSheetDataValidationDelete";
  }
  get BeforeSheetDataValidationDeleteAll() {
    return "BeforeSheetDataValidationDeleteAll";
  }
  get BeforeSheetDataValidationCriteriaUpdate() {
    return "BeforeSheetDataValidationCriteriaUpdate";
  }
  get BeforeSheetDataValidationRangeUpdate() {
    return "BeforeSheetDataValidationRangeUpdate";
  }
  get BeforeSheetDataValidationOptionsUpdate() {
    return "BeforeSheetDataValidationOptionsUpdate";
  }
}
K.extend(tt);
export {
  w as FDataValidation,
  C as FDataValidationBuilder
};
