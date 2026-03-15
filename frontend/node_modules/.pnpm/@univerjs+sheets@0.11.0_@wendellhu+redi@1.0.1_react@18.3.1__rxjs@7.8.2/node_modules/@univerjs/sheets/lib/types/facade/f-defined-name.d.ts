import { ISetDefinedNameMutationParam, IDefinedNamesService } from '@univerjs/engine-formula';
import { FWorksheet } from './f-worksheet';
import { IAuthzIoService, ICommandService, Injector, IPermissionService, LocaleService } from '@univerjs/core';
import { FBase } from '@univerjs/core/facade';
import { RangeProtectionRuleModel, WorksheetProtectionPointModel, WorksheetProtectionRuleModel } from '@univerjs/sheets';
/**
 * @hideconstructor
 */
export declare class FDefinedNameBuilder {
    private _definedNameParam;
    constructor();
    /**
     * Sets the name of the defined name builder.
     * @param {string} name The name of the defined name.
     * @returns {FDefinedNameBuilder} The instance of `FDefinedNameBuilder` for method chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const definedNameBuilder = univerAPI.newDefinedName()
     *   .setName('MyDefinedName')
     *   .setRef('Sheet1!$A$1')
     *   .build();
     * fWorkbook.insertDefinedNameBuilder(definedNameBuilder);
     * ```
     */
    setName(name: string): FDefinedNameBuilder;
    /**
     * Sets the formula of the defined name builder.
     * @param {string }formula The formula of the defined name.
     * @returns {FDefinedNameBuilder} The instance of `FDefinedNameBuilder` for method chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const definedNameBuilder = univerAPI.newDefinedName()
     *   .setName('MyDefinedName')
     *   .setFormula('SUM(Sheet1!$A$1)')
     *   .build();
     * fWorkbook.insertDefinedNameBuilder(definedNameBuilder);
     * ```
     */
    setFormula(formula: string): FDefinedNameBuilder;
    /**
     * Sets the reference of the defined name builder.
     * @param {string} a1Notation The reference of the defined name.
     * @returns {FDefinedNameBuilder} The instance of `FDefinedNameBuilder` for method chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const definedNameBuilder = univerAPI.newDefinedName()
     *   .setName('MyDefinedName')
     *   .setRef('Sheet1!$A$1')
     *   .build();
     * fWorkbook.insertDefinedNameBuilder(definedNameBuilder);
     * ```
     */
    setRef(a1Notation: string): FDefinedNameBuilder;
    /**
     * Sets the reference of the defined name builder by range .
     * @param {number} row The start row index of the range. index start at 0.
     * @param {number} column The start column index of the range. index start at 0.
     * @param {number} numRows The number of rows in the range.
     * @param {number} numColumns The number of columns in the range.
     * @returns {FDefinedNameBuilder} The instance of `FDefinedNameBuilder` for method chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const definedNameBuilder = univerAPI.newDefinedName()
     *   .setName('MyDefinedName')
     *   .setRefByRange(1, 3, 2, 5) // D2:H3
     *   .build();
     * fWorkbook.insertDefinedNameBuilder(definedNameBuilder);
     * ```
     */
    setRefByRange(row: number, column: number, numRows: number, numColumns: number): FDefinedNameBuilder;
    /**
     * Sets the comment of the defined name builder.
     * @param {string} comment The comment of the defined name.
     * @returns {FDefinedNameBuilder} The instance of `FDefinedNameBuilder` for method chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const definedNameBuilder = univerAPI.newDefinedName()
     *   .setName('MyDefinedName')
     *   .setRef('Sheet1!$A$1')
     *   .setComment('A reference to A1 cell in Sheet1')
     *   .build();
     * fWorkbook.insertDefinedNameBuilder(definedNameBuilder);
     * ```
     */
    setComment(comment: string): FDefinedNameBuilder;
    /**
     * Sets the scope of the defined name to the worksheet.
     * @param {FWorksheet} worksheet The worksheet to set the scope to.
     * @returns {FDefinedNameBuilder} The instance of `FDefinedNameBuilder` for method chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const sheets = fWorkbook.getSheets();
     *
     * // Create a defined name and make it available only in the second worksheet
     * const definedNameBuilder = univerAPI.newDefinedName()
     *   .setName('MyDefinedName')
     *   .setRef('Sheet1!$A$1')
     *   .setScopeToWorksheet(sheets[1])
     *   .build();
     * fWorkbook.insertDefinedNameBuilder(definedNameBuilder);
     * ```
     */
    setScopeToWorksheet(worksheet: FWorksheet): FDefinedNameBuilder;
    /**
     * Sets the scope of the defined name to the workbook.
     * @returns {FDefinedNameBuilder} The instance of `FDefinedNameBuilder` for method chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     *
     * // Create a defined name and make it available in the entire workbook
     * const definedNameBuilder = univerAPI.newDefinedName()
     *   .setName('MyDefinedName')
     *   .setRef('Sheet1!$A$1')
     *   .setScopeToWorkbook()
     *   .build();
     * fWorkbook.insertDefinedNameBuilder(definedNameBuilder);
     * ```
     */
    setScopeToWorkbook(): FDefinedNameBuilder;
    /**
     * Sets the hidden status of the defined name builder.
     * @param {boolean} hidden The hidden status of the defined name.
     * @returns {FDefinedNameBuilder} The instance of `FDefinedNameBuilder` for method chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const definedNameBuilder = univerAPI.newDefinedName()
     *   .setName('MyDefinedName')
     *   .setRef('Sheet1!$A$1')
     *   .setHidden(true)
     *   .build();
     * fWorkbook.insertDefinedNameBuilder(definedNameBuilder);
     * ```
     */
    setHidden(hidden: boolean): FDefinedNameBuilder;
    /**
     * Builds the defined name parameter.
     * @returns {ISetDefinedNameMutationParam} The defined name mutation parameter.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const definedNameBuilder = univerAPI.newDefinedName()
     *   .setName('MyDefinedName')
     *   .setRef('Sheet1!$A$1')
     *   .setComment('A reference to A1 cell in Sheet1')
     *   .build();
     * fWorkbook.insertDefinedNameBuilder(definedNameBuilder);
     * ```
     */
    build(): ISetDefinedNameMutationParam;
    /**
     * Loads the defined name mutation parameter.
     * @param {ISetDefinedNameMutationParam} param - defined name mutation parameter
     * @returns {FDefinedNameBuilder} The instance of `FDefinedNameBuilder` for method chaining.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const definedNameParam = {
     *   id: '4TMPceoqg8',
     *   unitId: fWorkbook.getId(),
     *   name: 'MyDefinedName',
     *   formulaOrRefString: 'Sheet1!$A$1',
     * }
     * const definedNameBuilder = univerAPI.newDefinedName()
     *   .load(definedNameParam)
     *   .build();
     * fWorkbook.insertDefinedNameBuilder(definedNameBuilder);
     * ```
     */
    load(param: ISetDefinedNameMutationParam): FDefinedNameBuilder;
}
/**
 * @hideconstructor
 */
export declare class FDefinedName extends FBase {
    protected _definedNameParam: ISetDefinedNameMutationParam;
    protected readonly _injector: Injector;
    protected readonly _commandService: ICommandService;
    protected readonly _permissionService: IPermissionService;
    protected readonly _worksheetProtectionRuleModel: WorksheetProtectionRuleModel;
    protected readonly _rangeProtectionRuleModel: RangeProtectionRuleModel;
    protected readonly _worksheetProtectionPointRuleModel: WorksheetProtectionPointModel;
    protected readonly _authzIoService: IAuthzIoService;
    protected readonly _localeService: LocaleService;
    protected readonly _definedNamesService: IDefinedNamesService;
    constructor(_definedNameParam: ISetDefinedNameMutationParam, _injector: Injector, _commandService: ICommandService, _permissionService: IPermissionService, _worksheetProtectionRuleModel: WorksheetProtectionRuleModel, _rangeProtectionRuleModel: RangeProtectionRuleModel, _worksheetProtectionPointRuleModel: WorksheetProtectionPointModel, _authzIoService: IAuthzIoService, _localeService: LocaleService, _definedNamesService: IDefinedNamesService);
    private _apply;
    /**
     * Gets the name of the defined name.
     * @returns {string} The name of the defined name.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const definedName = fWorkbook.getDefinedNames()[0];
     * console.log(definedName?.getName());
     * ```
     */
    getName(): string;
    /**
     * Sets the name of the defined name.
     * @param {string} name The name of the defined name.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const definedName = fWorkbook.getDefinedNames()[0];
     * definedName?.setName('NewDefinedName');
     * ```
     */
    setName(name: string): void;
    /**
     * Sets the formula of the defined name.
     * @param {string} formula The formula of the defined name.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const definedName = fWorkbook.getDefinedNames()[0];
     * definedName?.setFormula('SUM(Sheet1!$A$1)');
     * ```
     */
    setFormula(formula: string): void;
    /**
     * Sets the reference of the defined name.
     * @param {string} refString The reference of the defined name.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const definedName = fWorkbook.getDefinedNames()[0];
     * definedName?.setRef('Sheet1!$A$1');
     * ```
     */
    setRef(refString: string): void;
    /**
     * Gets the formula or reference string of the defined name.
     * @returns {string} The formula or reference string of the defined name.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const definedName = fWorkbook.getDefinedNames()[0];
     * console.log(definedName?.getFormulaOrRefString());
     * ```
     */
    getFormulaOrRefString(): string;
    /**
     * Sets the reference of the defined name by range.
     * @param {number} row The start row of the range.
     * @param {number} column The start column of the range.
     * @param {number} numRows The number of rows in the range.
     * @param {number} numColumns The number of columns in the range.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const definedName = fWorkbook.getDefinedNames()[0];
     * definedName?.setRefByRange(1, 3, 2, 5); // D2:H3
     * ```
     */
    setRefByRange(row: number, column: number, numRows: number, numColumns: number): void;
    /**
     * Gets the comment of the defined name.
     * @returns {string | undefined} The comment of the defined name.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const definedName = fWorkbook.getDefinedNames()[0];
     * console.log(definedName?.getComment());
     * ```
     */
    getComment(): string | undefined;
    /**
     * Sets the comment of the defined name.
     * @param {string} comment The comment of the defined name.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const definedName = fWorkbook.getDefinedNames()[0];
     * definedName?.setComment('This is a comment');
     * ```
     */
    setComment(comment: string): void;
    /**
     * Sets the scope of the defined name to the worksheet.
     * @param {FWorksheet} worksheet The worksheet to set the scope to.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const sheets = fWorkbook.getSheets();
     *
     * // Get the first defined name and make it available only in the second worksheet
     * const definedName = fWorkbook.getDefinedNames()[0];
     * definedName?.setScopeToWorksheet(sheets[1]);
     * ```
     */
    setScopeToWorksheet(worksheet: FWorksheet): void;
    /**
     * Sets the scope of the defined name to the workbook.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const definedName = fWorkbook.getDefinedNames()[0];
     * definedName?.setScopeToWorkbook();
     * ```
     */
    setScopeToWorkbook(): void;
    /**
     * Sets the hidden status of the defined name.
     * @param {boolean} hidden The hidden status of the defined name.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const definedName = fWorkbook.getDefinedNames()[0];
     * definedName?.setHidden(true);
     * ```
     */
    setHidden(hidden: boolean): void;
    /**
     * Deletes the defined name.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const definedName = fWorkbook.getDefinedNames()[0];
     * definedName?.delete();
     * ```
     */
    delete(): void;
    /**
     * Gets the local sheet id of the defined name.
     * @returns {string | undefined} The local sheet id of the defined name.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const definedName = fWorkbook.getDefinedNames()[0];
     * console.log(definedName?.getLocalSheetId());
     * ```
     */
    getLocalSheetId(): string | undefined;
    /**
     * Checks if the defined name is in the workbook scope.
     * @returns {boolean} True if the defined name is in the workbook scope, false otherwise.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const definedName = fWorkbook.getDefinedNames()[0];
     * console.log(definedName?.isWorkbookScope());
     * ```
     */
    isWorkbookScope(): boolean;
    /**
     * Converts the defined name to a defined name builder.
     * @returns {FDefinedNameBuilder} The defined name builder.
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const definedName = fWorkbook.getDefinedNames()[0];
     * if (!definedName) return;
     * const definedNameBuilder = definedName
     *   .toBuilder()
     *   .setName('NewDefinedName')
     *   .setFormula('SUM(Sheet1!$A$1)')
     *   .build();
     * fWorkbook.updateDefinedNameBuilder(definedNameBuilder);
     * ```
     */
    toBuilder(): FDefinedNameBuilder;
}
