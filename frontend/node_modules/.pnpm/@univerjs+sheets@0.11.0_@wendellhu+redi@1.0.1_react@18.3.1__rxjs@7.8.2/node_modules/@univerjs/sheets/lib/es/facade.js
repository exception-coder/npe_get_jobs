var rt = Object.defineProperty;
var st = (a, e, t) => e in a ? rt(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t;
var b = (a, e, t) => st(a, typeof e != "symbol" ? e + "" : e, t);
import { Inject as g, Injector as M, ICommandService as _, IPermissionService as ge, IAuthzIoService as Oe, LocaleService as je, generateRandomId as Le, Rectangle as x, cellToRange as ot, HorizontalAlign as A, VerticalAlign as D, RANGE_TYPE as w, TextStyleValue as Se, RichTextValue as N, BooleanNumber as m, WrapStrategy as G, DEFAULT_STYLES as Ce, covertCellValue as oe, covertCellValues as ve, Dimension as T, isNullCell as B, Direction as j, ObjectMatrix as X, ILogService as ze, mergeWorksheetSnapshotWithDefault as fe, Tools as Ie, UndoCommand as it, RedoCommand as at, toDisposable as Ge, UniverInstanceType as P, IResourceLoaderService as ht, IUniverInstanceService as ie, CanceledError as f } from "@univerjs/core";
import { FBase as me, FBaseInitialable as _e, FUniver as $e, FEnum as dt, FEventName as ct } from "@univerjs/core/facade";
import { WorksheetProtectionRuleModel as qe, RangeProtectionRuleModel as Ke, WorksheetProtectionPointModel as Ye, SetDefinedNameCommand as ae, SCOPE_WORKBOOK_VALUE_DEFINED_NAME as O, RemoveDefinedNameCommand as ut, WorkbookPermissionService as lt, PermissionPointsDefinitions as gt, WorkbookEditablePermission as Je, UnitObject as F, AddWorksheetProtectionMutation as mt, DeleteWorksheetProtectionMutation as _t, getAllWorksheetPermissionPoint as kt, getAllWorksheetPermissionPointByPointPanel as Re, SetWorksheetPermissionPointsMutation as wt, AddRangeProtectionMutation as St, DeleteRangeProtectionMutation as Ct, SetRangeProtectionMutation as vt, WorksheetEditPermission as ft, WorksheetViewPermission as It, SetBorderBasicCommand as Rt, SetStyleCommand as p, SetTextRotationCommand as bt, SetRangeValuesCommand as V, SetTextWrapCommand as he, SetVerticalTextAlignCommand as pt, SetHorizontalTextAlignCommand as Et, addMergeCellsUtil as Z, getAddMergeMutationRangeByType as be, RemoveWorksheetMergeCommand as yt, getPrimaryForRange as $, SetSelectionsOperation as ke, SplitTextToColumnsCommand as Ut, SetWorksheetRangeThemeStyleCommand as Pt, DeleteWorksheetRangeThemeStyleCommand as xt, SheetRangeThemeService as Qe, ClearSelectionAllCommand as Xe, ClearSelectionContentCommand as Ze, ClearSelectionFormatCommand as et, InsertRangeMoveDownCommand as Mt, InsertRangeMoveRightCommand as Nt, DeleteRangeMoveUpCommand as Tt, DeleteRangeMoveLeftCommand as At, getNextPrimaryCell as Dt, SetWorksheetDefaultStyleMutation as Wt, SetColDataCommand as pe, SetRowDataCommand as Ee, copyRangeStyles as L, InsertRowByRangeCommand as ye, RemoveRowByRangeCommand as Bt, MoveRowsCommand as Ft, SetRowHiddenCommand as Ue, SetSpecificRowsVisibleCommand as Pe, SetWorksheetRowIsAutoHeightMutation as Vt, SetRowHeightCommand as xe, SetWorksheetRowIsAutoHeightCommand as ee, InsertColByRangeCommand as Me, RemoveColByRangeCommand as Ht, MoveColsCommand as Ot, SetColHiddenCommand as Ne, SetSpecificColsVisibleCommand as Te, SetColWidthCommand as jt, SetFrozenCommand as te, CancelFrozenCommand as Lt, ToggleGridlinesCommand as de, SetGridlinesColorCommand as ce, SetTabColorCommand as zt, SetRangeValuesMutation as Ae, SetWorksheetHideCommand as Gt, SetWorksheetShowCommand as $t, SetWorksheetNameCommand as ue, AppendRowCommand as qt, SetWorksheetRowCountCommand as Kt, SetWorksheetColumnCountCommand as Yt, SheetsSelectionsService as tt, SetWorkbookNameCommand as Jt, InsertSheetCommand as q, SetWorksheetActiveOperation as H, RemoveSheetCommand as le, CopySheetCommand as Qt, SetWorksheetOrderCommand as Xt, RegisterWorksheetRangeThemeStyleCommand as Zt, UnregisterWorksheetRangeThemeStyleCommand as en, RangeThemeStyle as tn, SetWorksheetOrderMutation as De, SetTabColorMutation as We, SetWorksheetHideMutation as Be, COMMAND_LISTENER_VALUE_CHANGE as nn, getValueChangedEffectedRange as rn, SheetsFreezeSyncController as sn, SheetValueChangeType as on, SheetSkeletonChangeType as an, SplitDelimiterEnum as hn } from "@univerjs/sheets";
import { IDefinedNamesService as nt, serializeRange as we, serializeRangeWithSheet as dn, FormulaDataModel as cn, deserializeRangeWithSheet as un } from "@univerjs/engine-formula";
var ln = Object.getOwnPropertyDescriptor, gn = (a, e, t, n) => {
  for (var r = n > 1 ? void 0 : n ? ln(e, t) : e, s = a.length - 1, o; s >= 0; s--)
    (o = a[s]) && (r = o(r) || r);
  return r;
}, I = (a, e) => (t, n) => e(t, n, a);
function mn(a, e, t) {
  const n = t.getDefinedNameMap(a);
  if (n == null)
    return e.t("definedName.defaultName") + 1;
  const s = Array.from(Object.values(n)).length + 1, o = e.t("definedName.defaultName") + s;
  if (t.getValueByName(a, o) == null)
    return o;
  let i = s + 1;
  for (; ; ) {
    const h = e.t("definedName.defaultName") + i;
    if (t.getValueByName(a, h) == null)
      return h;
    i++;
  }
}
class Q {
  constructor() {
    b(this, "_definedNameParam");
    this._definedNameParam = {
      id: Le(10),
      unitId: "",
      name: "",
      formulaOrRefString: "",
      localSheetId: O
    };
  }
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
  setName(e) {
    return this._definedNameParam.name = e, this;
  }
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
  setFormula(e) {
    return this._definedNameParam.formulaOrRefString = `=${e}`, this;
  }
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
  setRef(e) {
    return this._definedNameParam.formulaOrRefString = e, this;
  }
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
  setRefByRange(e, t, n, r) {
    return this._definedNameParam.formulaOrRefString = we({
      startRow: e,
      endRow: e + (n != null ? n : 1) - 1,
      startColumn: t,
      endColumn: t + (r != null ? r : 1) - 1
    }), this;
  }
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
  setComment(e) {
    return this._definedNameParam.comment = e, this;
  }
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
  setScopeToWorksheet(e) {
    return this._definedNameParam.localSheetId = e.getSheetId(), this;
  }
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
  setScopeToWorkbook() {
    return this._definedNameParam.localSheetId = O, this;
  }
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
  setHidden(e) {
    return this._definedNameParam.hidden = e, this;
  }
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
  build() {
    return this._definedNameParam;
  }
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
  load(e) {
    return this._definedNameParam = e, this;
  }
}
let K = class extends me {
  constructor(a, e, t, n, r, s, o, i, h, d) {
    super(), this._definedNameParam = a, this._injector = e, this._commandService = t, this._permissionService = n, this._worksheetProtectionRuleModel = r, this._rangeProtectionRuleModel = s, this._worksheetProtectionPointRuleModel = o, this._authzIoService = i, this._localeService = h, this._definedNamesService = d;
  }
  _apply() {
    this._definedNameParam.name === "" && (this._definedNameParam.name = mn(this._definedNameParam.unitId, this._localeService, this._definedNamesService)), this._commandService.syncExecuteCommand(ae.id, this._definedNameParam);
  }
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
  getName() {
    return this._definedNameParam.name;
  }
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
  setName(a) {
    this._definedNameParam.name = a, this._apply();
  }
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
  setFormula(a) {
    this._definedNameParam.formulaOrRefString = `=${a}`, this._apply();
  }
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
  setRef(a) {
    this._definedNameParam.formulaOrRefString = a, this._apply();
  }
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
  getFormulaOrRefString() {
    return this._definedNameParam.formulaOrRefString;
  }
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
  setRefByRange(a, e, t, n) {
    this._definedNameParam.formulaOrRefString = we({
      startRow: a,
      endRow: a + (t != null ? t : 1) - 1,
      startColumn: e,
      endColumn: e + (n != null ? n : 1) - 1
    }), this._apply();
  }
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
  getComment() {
    return this._definedNameParam.comment;
  }
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
  setComment(a) {
    this._definedNameParam.comment = a, this._apply();
  }
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
  setScopeToWorksheet(a) {
    this._definedNameParam.localSheetId = a.getSheetId(), this._apply();
  }
  /**
   * Sets the scope of the defined name to the workbook.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const definedName = fWorkbook.getDefinedNames()[0];
   * definedName?.setScopeToWorkbook();
   * ```
   */
  setScopeToWorkbook() {
    this._definedNameParam.localSheetId = O, this._apply();
  }
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
  setHidden(a) {
    this._definedNameParam.hidden = a, this._apply();
  }
  /**
   * Deletes the defined name.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const definedName = fWorkbook.getDefinedNames()[0];
   * definedName?.delete();
   * ```
   */
  delete() {
    this._commandService.syncExecuteCommand(ut.id, this._definedNameParam);
  }
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
  getLocalSheetId() {
    return this._definedNameParam.localSheetId;
  }
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
  isWorkbookScope() {
    return this._definedNameParam.localSheetId === O;
  }
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
  toBuilder() {
    const a = this._injector.createInstance(Q);
    return a.load(this._definedNameParam), a;
  }
};
K = gn([
  I(1, g(M)),
  I(2, _),
  I(3, ge),
  I(4, g(qe)),
  I(5, g(Ke)),
  I(6, g(Ye)),
  I(7, g(Oe)),
  I(8, g(je)),
  I(9, nt)
], K);
var _n = Object.getOwnPropertyDescriptor, kn = (a, e, t, n) => {
  for (var r = n > 1 ? void 0 : n ? _n(e, t) : e, s = a.length - 1, o; s >= 0; s--)
    (o = a[s]) && (r = o(r) || r);
  return r;
}, E = (a, e) => (t, n) => e(t, n, a);
let Y = class extends me {
  constructor(e, t, n, r, s, o, i, h) {
    super();
    /**
     * Permission point definition, can read the point constructor want to modify from here
     */
    b(this, "permissionPointsDefinition", gt);
    /**
     * An observable object used to monitor permission change events within a range, thereby triggering corresponding subsequent processing.
     */
    b(this, "rangeRuleChangedAfterAuth$");
    /**
     * An observable object used to monitor permission change events within a worksheet, thereby triggering corresponding subsequent processing.
     */
    b(this, "sheetRuleChangedAfterAuth$");
    /**
     * An observable object used to monitor the initialization state changes of unit permissions.
     */
    b(this, "unitPermissionInitStateChange$");
    this._injector = e, this._commandService = t, this._permissionService = n, this._worksheetProtectionRuleModel = r, this._rangeProtectionRuleModel = s, this._worksheetProtectionPointRuleModel = o, this._workbookPermissionService = i, this._authzIoService = h, this.rangeRuleChangedAfterAuth$ = this._rangeProtectionRuleModel.ruleRefresh$, this.sheetRuleChangedAfterAuth$ = this._worksheetProtectionRuleModel.ruleRefresh$, this.unitPermissionInitStateChange$ = this._workbookPermissionService.unitPermissionInitStateChange$;
  }
  /**
   * Configures a specific permission point for a workbook.
   * This function sets or updates a permission point for a workbook identified by `unitId`.
   * It creates a new permission point if it does not already exist, and updates the point with the provided value.
   * @param {string} unitId - The unique identifier of the workbook for which the permission is being set.
   * @param {WorkbookPermissionPointConstructor} FPointClass - The constructor function for creating a permission point instance. Other point constructors can See the [permission-point documentation](https://github.com/dream-num/univer/tree/dev/packages/sheets/src/services/permission/permission-point) for more details.
   * @param {boolean} value - The boolean value to determine whether the permission point is enabled or disabled.
   *
   * @example
   * ```typescript
   * const workbook = univerAPI.getActiveWorkbook();
   * const permission = workbook.getPermission();
   * const unitId = workbook.getId();
   * permission.setWorkbookPermissionPoint(unitId, permission.permissionPointsDefinition.WorkbookEditablePermission, false)
   * ```
   */
  setWorkbookPermissionPoint(e, t, n) {
    const r = new t(e);
    this._permissionService.getPermissionPoint(r.id) || this._permissionService.addPermissionPoint(r), this._permissionService.updatePermissionPoint(r.id, n);
  }
  /**
   * Check if a specific permission point is enabled for a workbook.
   * @param unitId - The unique identifier of the workbook.
   * @param FPointClass - The constructor for the permission point class.
   *    See the [permission-point documentation](https://github.com/dream-num/univer/tree/dev/packages/sheets/src/services/permission/permission-point) for more details.
   * @example
   * ```typescript
   * const workbook = univerAPI.getActiveWorkbook();
   * const permission = workbook.getPermission();
   * const unitId = workbook.getId();
   * // Check if the workbook is editable
   * const isEditable = permission.checkWorkbookPermissionPoint(unitId, permission.permissionPointsDefinition.WorkbookEditablePermission);
   * console.log('Workbook is editable:', isEditable);
   * ```
   */
  checkWorkbookPermissionPoint(e, t) {
    const n = new t(e), r = this._permissionService.getPermissionPoint(n.id);
    if (r)
      return r.value;
  }
  /**
   * This function is used to set whether the workbook can be edited
   * @param {string} unitId - The unique identifier of the workbook for which the permission is being set.
   * @param {boolean} value - A value that controls whether the workbook can be edited
   *
   * @example
   * ```typescript
   * const workbook = univerAPI.getActiveWorkbook();
   * const permission = workbook.getPermission();
   * const unitId = workbook.getId();
   * permission.setWorkbookEditPermission(unitId, false);
   * ```
   */
  setWorkbookEditPermission(e, t) {
    this.setWorkbookPermissionPoint(e, Je, t);
  }
  /**
   * This function is used to add a base permission for a worksheet.
   * Note that after adding, only the background mask of the permission module will be rendered. If you want to modify the function permissions,
   * you need to modify the permission points with the permissionId returned by this function.
   * @param {string} unitId - The unique identifier of the workbook for which the permission is being set.
   * @param {string} subUnitId - The unique identifier of the worksheet for which the permission is being set.
   * @returns {Promise<string | undefined>} - Returns the `permissionId` if the permission is successfully added. If the operation fails or no result is returned, it resolves to `undefined`.
   *
   * @example
   * ```typescript
   * const workbook = univerAPI.getActiveWorkbook();
   * const permission = workbook.getPermission();
   * const unitId = workbook.getId();
   * const worksheet = workbook.getActiveSheet();
   * const subUnitId = worksheet.getSheetId();
   * // Note that there will be no permission changes after this step is completed. It only returns an ID for subsequent permission changes.
   * // For details, please see the example of the **`setWorksheetPermissionPoint`** API.
   * const permissionId = await permission.addWorksheetBasePermission(unitId, subUnitId)
   * // Can still edit and read it.
   * console.log('debugger', permissionId)
   * ```
   */
  async addWorksheetBasePermission(e, t) {
    if (this._rangeProtectionRuleModel.getSubunitRuleList(e, t).length > 0)
      throw new Error("sheet protection cannot intersect with range protection");
    const r = await this._authzIoService.create({
      objectType: F.Worksheet,
      worksheetObject: {
        collaborators: [],
        unitID: e,
        strategies: [],
        name: "",
        scope: void 0
      }
    });
    if (this._commandService.syncExecuteCommand(mt.id, {
      unitId: e,
      subUnitId: t,
      rule: {
        permissionId: r,
        unitType: F.Worksheet,
        unitId: e,
        subUnitId: t
      }
    }))
      return r;
  }
  /**
   * Delete the entire table protection set for the worksheet and reset the point permissions of the worksheet to true
   * @param {string} unitId - The unique identifier of the workbook for which the permission is being set.
   * @param {string} subUnitId - The unique identifier of the worksheet for which the permission is being set.
   *
   * @example
   * ```typescript
   * const workbook = univerAPI.getActiveWorkbook();
   * const permission = workbook.getPermission();
   * const unitId = workbook.getId();
   * const worksheet = workbook.getActiveSheet();
   * const subUnitId = worksheet.getSheetId();
   * permission.removeWorksheetPermission(unitId, subUnitId);
   * ```
   */
  removeWorksheetPermission(e, t) {
    this._commandService.syncExecuteCommand(_t.id, {
      unitId: e,
      subUnitId: t
    }), [...kt(), ...Re()].forEach((n) => {
      const r = new n(e, t);
      this._permissionService.updatePermissionPoint(r.id, !0);
    }), this._worksheetProtectionPointRuleModel.deleteRule(e, t);
  }
  /**
   * Sets the worksheet permission point by updating or adding the permission point for the worksheet.
   * If the worksheet doesn't have a base permission, it creates one to used render
   * @param {string} unitId - The unique identifier of the workbook.
   * @param {string} subUnitId - The unique identifier of the worksheet.
   * @param {WorkSheetPermissionPointConstructor} FPointClass - The constructor for the permission point class.
   *    See the [permission-point documentation](https://github.com/dream-num/univer/tree/dev/packages/sheets/src/services/permission/permission-point) for more details.
   * @param {boolean} value - The new permission value to be set for the worksheet.
   * @returns {Promise<string | undefined>} - Returns the `permissionId` if the permission point is successfully set or created. If no permission is set, it resolves to `undefined`.
   *
   * @example
   * ```typescript
   * const workbook = univerAPI.getActiveWorkbook();
   * const permission = workbook.getPermission();
   * const unitId = workbook.getId();
   * const worksheet = workbook.getActiveSheet();
   * const subUnitId = worksheet.getSheetId();
   * const permissionId = await permission.addWorksheetBasePermission(unitId, subUnitId)
   * // After this line of code , the worksheet will no longer be editable
   * permission.setWorksheetPermissionPoint(unitId, subUnitId, permission.permissionPointsDefinition.WorksheetEditPermission, false);
   * ```
   */
  async setWorksheetPermissionPoint(e, t, n, r) {
    const s = this._worksheetProtectionRuleModel.getRule(e, t);
    let o;
    if (n === ft || n === It)
      if (s)
        o = s.permissionId;
      else {
        if (this._rangeProtectionRuleModel.getSubunitRuleList(e, t).length > 0)
          throw new Error("sheet protection cannot intersect with range protection");
        o = await this.addWorksheetBasePermission(e, t);
      }
    else {
      const c = this._worksheetProtectionPointRuleModel.getRule(e, t);
      c ? o = c.permissionId : (o = await this._authzIoService.create({
        objectType: F.Worksheet,
        worksheetObject: {
          collaborators: [],
          unitID: e,
          strategies: [],
          name: "",
          scope: void 0
        }
      }), this._commandService.syncExecuteCommand(wt.id, { unitId: e, subUnitId: t, rule: { unitId: e, subUnitId: t, permissionId: o } }));
    }
    const h = new n(e, t);
    return this._permissionService.getPermissionPoint(h.id) || this._permissionService.addPermissionPoint(h), this._permissionService.updatePermissionPoint(h.id, r), o;
  }
  /**
   * Check if a specific permission point is enabled for a worksheet.
   * @param unitId - The unique identifier of the workbook.
   * @param subUnitId - The unique identifier of the worksheet.
   * @param FPointClass - The constructor for the permission point class.
   *    See the [permission-point documentation](https://github.com/dream-num/univer/tree/dev/packages/sheets/src/services/permission/permission-point) for more details.
   * @returns {boolean | undefined} - Returns true if the permission point is enabled, false if it is disabled, or undefined if the permission point does not exist.
   * @example
   * ```typescript
   * const workbook = univerAPI.getActiveWorkbook();
   * const permission = workbook.getPermission();
   * const unitId = workbook.getId();
   * const worksheet = workbook.getActiveSheet();
   * const subUnitId = worksheet.getSheetId();
   * // Check if the worksheet is editable
   * const isEditable = permission.checkWorksheetPermissionPoint(unitId, subUnitId, permission.permissionPointsDefinition.WorksheetEditPermission);
   * console.log('Worksheet is editable:', isEditable);
   * ```
   */
  checkWorksheetPermissionPoint(e, t, n) {
    const r = new n(e, t), s = this._permissionService.getPermissionPoint(r.id);
    if (s)
      return s.value;
  }
  /**
   * Adds a range protection to the worksheet.
   * Note that after adding, only the background mask of the permission module will be rendered. If you want to modify the function permissions,
   * you need to modify the permission points with the permissionId returned by this function.
   * @param {string} unitId - The unique identifier of the workbook.
   * @param {string} subUnitId - The unique identifier of the worksheet.
   * @param {FRange[]} ranges - The ranges to be protected.
   * @returns {Promise<{ permissionId: string, ruleId: string } | undefined>} - Returns an object containing the `permissionId` and `ruleId` if the range protection is successfully added. If the operation fails or no result is returned, it resolves to `undefined`. permissionId is used to stitch permission point ID，ruleId is used to store permission rules
   *
   * @example
   * ```typescript
   * const workbook = univerAPI.getActiveWorkbook();
   * const permission = workbook.getPermission();
   * const unitId = workbook.getId();
   * const worksheet = workbook.getActiveSheet();
   * const subUnitId = worksheet.getSheetId();
   * const range = worksheet.getRange('A1:B2');
   * const ranges = [];
   * ranges.push(range);
   * // Note that there will be no permission changes after this step is completed. It only returns an ID for subsequent permission changes.
   * // For details, please see the example of the **`setRangeProtectionPermissionPoint`** API.
   * const res = await permission.addRangeBaseProtection(unitId, subUnitId, ranges);
   * const {permissionId, ruleId} = res;
   * console.log('debugger', permissionId, ruleId);
   * ```
   */
  async addRangeBaseProtection(e, t, n) {
    const r = await this._authzIoService.create({
      objectType: F.SelectRange,
      selectRangeObject: {
        collaborators: [],
        unitID: e,
        name: "",
        scope: void 0
      }
    }), s = `ruleId_${Le(6)}`;
    if (this._worksheetProtectionRuleModel.getRule(e, t))
      throw new Error("sheet protection cannot intersect with range protection");
    if (this._rangeProtectionRuleModel.getSubunitRuleList(e, t).some((c) => c.ranges.some((l) => n.some((u) => x.intersects(u.getRange(), l)))))
      throw new Error("range protection cannot intersect");
    if (this._commandService.syncExecuteCommand(St.id, {
      unitId: e,
      subUnitId: t,
      rules: [{
        permissionId: r,
        unitType: F.SelectRange,
        unitId: e,
        subUnitId: t,
        ranges: n.map((c) => c.getRange()),
        id: s
      }]
    }))
      return {
        permissionId: r,
        ruleId: s
      };
  }
  /**
   * Removes the range protection from the worksheet.
   * @param {string} unitId - The unique identifier of the workbook.
   * @param {string} subUnitId - The unique identifier of the worksheet.
   * @param {string[]} ruleIds - The rule IDs of the range protection to be removed.
   *
   * @example
   * ```typescript
   * const workbook = univerAPI.getActiveWorkbook();
   * const permission = workbook.getPermission();
   * const unitId = workbook.getId();
   * const worksheet = workbook.getActiveSheet();
   * const subUnitId = worksheet.getSheetId();
   * const range = worksheet.getRange('A1:B2');
   * const ranges = [];
   * ranges.push(range);
   * const res = await permission.addRangeBaseProtection(unitId, subUnitId, ranges);
   * const ruleId = res.ruleId;
   * permission.removeRangeProtection(unitId, subUnitId, [ruleId]);
   * ```
   */
  removeRangeProtection(e, t, n) {
    this._commandService.syncExecuteCommand(Ct.id, {
      unitId: e,
      subUnitId: t,
      ruleIds: n
    }) && this._rangeProtectionRuleModel.getSubunitRuleList(e, t).length === 0 && (this._worksheetProtectionPointRuleModel.deleteRule(e, t), [...Re()].forEach((o) => {
      const i = new o(e, t);
      this._permissionService.updatePermissionPoint(i.id, i.value);
    }));
  }
  /**
   * Modify the permission points of a custom area
   * @param {string} unitId - The unique identifier of the workbook.
   * @param {string} subUnitId - The unique identifier of the worksheet within the workbook.
   * @param {string} permissionId - The unique identifier of the permission that controls access to the range.
   * @param {RangePermissionPointConstructor} FPointClass - The constructor for the range permission point class.
   *    See the [permission-point documentation](https://github.com/dream-num/univer/tree/dev/packages/sheets/src/services/permission/permission-point) for more details.
   * @param {boolean} value - The new permission value to be set for the range (e.g., true for allowing access, false for restricting access).
   *
   * @example
   * ```typescript
   * const workbook = univerAPI.getActiveWorkbook();
   * const permission = workbook.getPermission();
   * const unitId = workbook.getId();
   * const worksheet = workbook.getActiveSheet();
   * const subUnitId = worksheet.getSheetId();
   * const range = worksheet.getRange('A1:B2');
   * const ranges = [];
   * ranges.push(range);
   * // Note that there will be no permission changes after this step is completed. It only returns an ID for subsequent permission changes.
   * // For details, please see the example of the **`setRangeProtectionPermissionPoint`** API.
   * const res = await permission.addRangeBaseProtection(unitId, subUnitId, ranges);
   * const {permissionId, ruleId} = res;
   * // After passing the following line of code, the range set above will become uneditable
   * permission.setRangeProtectionPermissionPoint(unitId,subUnitId,permissionId, permission.permissionPointsDefinition.RangeProtectionPermissionEditPoint, false);
   * ```
   */
  setRangeProtectionPermissionPoint(e, t, n, r, s) {
    const o = new r(e, t, n);
    this._permissionService.getPermissionPoint(o.id) || this._permissionService.addPermissionPoint(o), this._permissionService.updatePermissionPoint(o.id, s);
  }
  /**
   * Sets the ranges for range protection in a worksheet.
   *
   * This method finds the rule by unitId, subUnitId, and ruleId, and updates the rule with the provided ranges.
   * It checks for overlaps with existing ranges in the same subunit and shows an error message if any overlap is detected.
   * If no overlap is found, it executes the command to update the range protection with the new ranges.
   * @param {string} unitId - The unique identifier of the workbook.
   * @param {string} subUnitId - The unique identifier of the worksheet within the workbook.
   * @param {string} ruleId - The ruleId of the range protection rule that is being updated.
   * @param {FRange[]} ranges - The array of new ranges to be set for the range protection rule.
   *
   * @example
   * ```typescript
   * const workbook = univerAPI.getActiveWorkbook();
   * const permission = workbook.getPermission();
   * const unitId = workbook.getId();
   * const worksheet = workbook.getActiveSheet();
   * const subUnitId = worksheet.getSheetId();
   * const range = worksheet.getRange('A1:B2');
   * const ranges = [];
   * ranges.push(range);
   * const res = await permission.addRangeBaseProtection(unitId, subUnitId, ranges);
   * const {permissionId, ruleId} = res;
   * const newRange = worksheet.getRange('C1:D2');
   * permission.setRangeProtectionRanges(unitId, subUnitId, ruleId, [newRange]);
   * ```
   */
  setRangeProtectionRanges(e, t, n, r) {
    const s = this._rangeProtectionRuleModel.getRule(e, t, n);
    if (s) {
      if (this._rangeProtectionRuleModel.getSubunitRuleList(e, t).filter((h) => h.id !== n).some((h) => h.ranges.some((d) => r.some((c) => x.intersects(c.getRange(), d)))))
        throw new Error("range protection cannot intersect");
      this._commandService.syncExecuteCommand(vt.id, {
        unitId: e,
        subUnitId: t,
        ruleId: n,
        rule: {
          ...s,
          ranges: r.map((h) => h.getRange())
        }
      });
    }
  }
  /**
   * Get the permission information for a specific cell in a worksheet.
   * @param {string} unitId - The unique identifier of the workbook.
   * @param {string} subUnitId - The unique identifier of the worksheet within the workbook.
   * @param {number} row - The row index of the cell.
   * @param {number} column - The column index of the cell.
   * @returns {{ permissionId: string, ruleId: string } | undefined} - Returns an object containing the `permissionId` and `ruleId` if the cell is protected by a range protection rule. If no protection is found, it returns `undefined`.
   *
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const permission = fWorkbook.getPermission();
   * const unitId = fWorkbook.getId();
   * const subUnitId = fWorksheet.getSheetId();
   *
   * // Get the permission information for cell C3
   * const cell = fWorksheet.getRange('C3');
   * const permissionInfo = permission.getPermissionInfoWithCell(
   *   unitId,
   *   subUnitId,
   *   cell.getRow(),
   *   cell.getColumn()
   * );
   * console.log(permissionInfo);
   *
   * // If the cell is protected, you can remove the protection like this:
   * if (permissionInfo) {
   *   const { ruleId } = permissionInfo;
   *
   *   // After 2 seconds, remove the protection for the cell
   *   setTimeout(() => {
   *     permission.removeRangeProtection(unitId, subUnitId, [ruleId]);
   *   }, 2000);
   * }
   * ```
   */
  getPermissionInfoWithCell(e, t, n, r) {
    const s = ot(n, r), o = this._rangeProtectionRuleModel.getSubunitRuleList(e, t).find((i) => i.ranges.some((d) => x.intersects(s, d)));
    if (o)
      return {
        permissionId: o.permissionId,
        ruleId: o.id
      };
  }
};
Y = kn([
  E(0, g(M)),
  E(1, _),
  E(2, ge),
  E(3, g(qe)),
  E(4, g(Ke)),
  E(5, g(Ye)),
  E(6, g(lt)),
  E(7, g(Oe))
], Y);
function wn(a) {
  switch (a) {
    case "left":
      return A.LEFT;
    case "center":
      return A.CENTER;
    case "normal":
      return A.RIGHT;
    default:
      throw new Error(`Invalid horizontal alignment: ${a}`);
  }
}
function Fe(a) {
  switch (a) {
    case A.LEFT:
      return "left";
    case A.CENTER:
      return "center";
    case A.RIGHT:
      return "normal";
    default:
      return "general";
  }
}
function Sn(a) {
  switch (a) {
    case "top":
      return D.TOP;
    case "middle":
      return D.MIDDLE;
    case "bottom":
      return D.BOTTOM;
    default:
      throw new Error(`Invalid vertical alignment: ${a}`);
  }
}
function Ve(a) {
  switch (a) {
    case D.TOP:
      return "top";
    case D.MIDDLE:
      return "middle";
    case D.BOTTOM:
      return "bottom";
    default:
      return "general";
  }
}
function ne(a, e) {
  return {
    startRow: a.startRow,
    endRow: a.endRow,
    startColumn: 0,
    endColumn: e.getColumnCount() - 1,
    rangeType: w.ROW
  };
}
function re(a, e) {
  return {
    startRow: 0,
    endRow: e.getRowCount() - 1,
    startColumn: a.startColumn,
    endColumn: a.endColumn,
    rangeType: w.COLUMN
  };
}
var Cn = Object.getOwnPropertyDescriptor, vn = (a, e, t, n) => {
  for (var r = n > 1 ? void 0 : n ? Cn(e, t) : e, s = a.length - 1, o; s >= 0; s--)
    (o = a[s]) && (r = o(r) || r);
  return r;
}, se = (a, e) => (t, n) => e(t, n, a), W;
let k = (W = class extends _e {
  constructor(e, t, n, r, s, o) {
    super(r), this._workbook = e, this._worksheet = t, this._range = n, this._injector = r, this._commandService = s, this._formulaDataModel = o, this._runInitializers(
      this._injector,
      this._workbook,
      this._worksheet,
      this._range,
      this._commandService,
      this._formulaDataModel
    );
  }
  /**
   * Get the unit ID of the current workbook
   * @returns {string} The unit ID of the workbook
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getUnitId());
   * ```
   */
  getUnitId() {
    return this._workbook.getUnitId();
  }
  /**
   * Gets the name of the worksheet
   * @returns {string} The name of the worksheet
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getSheetName());
   * ```
   */
  getSheetName() {
    return this._worksheet.getName();
  }
  /**
   * Gets the ID of the worksheet
   * @returns {string} The ID of the worksheet
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getSheetId());
   * ```
   */
  getSheetId() {
    return this._worksheet.getSheetId();
  }
  /**
   * Gets the area where the statement is applied
   * @returns {IRange} The area where the statement is applied
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * const range = fRange.getRange();
   * const { startRow, startColumn, endRow, endColumn } = range;
   * console.log(range);
   * ```
   */
  getRange() {
    return this._range;
  }
  /**
   * Gets the starting row index of the range. index starts at 0.
   * @returns {number} The starting row index of the range.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getRow()); // 0
   * ```
   */
  getRow() {
    return this._range.startRow;
  }
  /**
   * Gets the ending row index of the range. index starts at 0.
   * @returns {number} The ending row index of the range.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getLastRow()); // 1
   * ```
   */
  getLastRow() {
    return this._range.endRow;
  }
  /**
   * Gets the starting column index of the range. index starts at 0.
   * @returns {number} The starting column index of the range.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getColumn()); // 0
   * ```
   */
  getColumn() {
    return this._range.startColumn;
  }
  /**
   * Gets the ending column index of the range. index starts at 0.
   * @returns {number} The ending column index of the range.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getLastColumn()); // 1
   * ```
   */
  getLastColumn() {
    return this._range.endColumn;
  }
  /**
   * Gets the width of the applied area
   * @returns {number} The width of the area
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getWidth());
   * ```
   */
  getWidth() {
    return this._range.endColumn - this._range.startColumn + 1;
  }
  /**
   * Gets the height of the applied area
   * @returns {number} The height of the area
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getHeight());
   * ```
   */
  getHeight() {
    return this._range.endRow - this._range.startRow + 1;
  }
  /**
   * Return range whether this range is merged
   * @returns {boolean} if true is merged
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.isMerged());
   * // merge cells A1:B2
   * fRange.merge();
   * console.log(fRange.isMerged());
   * ```
   */
  isMerged() {
    const { startColumn: e, startRow: t, endColumn: n, endRow: r } = this._range;
    return this._worksheet.getMergedCellRange(t, e, r, n).some((o) => x.equals(o, this._range));
  }
  /**
   * Return first cell style data in this range. Please note that if there are row styles, col styles and (or)
   * worksheet style, they will be merged into the cell style. You can use `type` to specify the type of the style to get.
   *
   * @param {GetStyleType} type - The type of the style to get. 'row' means get the composed style of row, col and
   * default worksheet style. 'col' means get the composed style of col, row and default worksheet style.
   * 'cell' means get the style of cell without merging row style, col style and default worksheet style.
   * Default is 'row'.
   *
   * @returns {IStyleData | null} The cell style data
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getCellStyleData());
   * ```
   */
  getCellStyleData(e = "row") {
    return e !== "cell" ? this._worksheet.getComposedCellStyle(this._range.startRow, this._range.startColumn, e === "row") : this._worksheet.getCellStyle(this._range.startRow, this._range.startColumn);
  }
  /**
   * Get the font family of the cell.
   *
   * @param {GetStyleType} type - The type of the style to get. 'row' means get the composed style of row, col and
   * default worksheet style. 'col' means get the composed style of col, row and default worksheet style.
   * 'cell' means get the style of cell without merging row style, col style and default worksheet style.
   * Default is 'row'.
   *
   * @returns {string | null} The font family of the cell
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getFontFamily());
   * ```
   */
  getFontFamily(e = "row") {
    var t, n;
    return (n = (t = this.getCellStyleData(e)) == null ? void 0 : t.ff) != null ? n : null;
  }
  /**
   * Get the font size of the cell.
   *
   * @param {GetStyleType} type - The type of the style to get. 'row' means get the composed style of row, col and
   * default worksheet style. 'col' means get the composed style of col, row and default worksheet style.
   * 'cell' means get the style of cell without merging row style, col style and default worksheet style.
   * Default is 'row'.
   *
   * @returns {number | null} The font size of the cell
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getFontSize());
   * ```
   */
  getFontSize(e = "row") {
    var t, n;
    return (n = (t = this.getCellStyleData(e)) == null ? void 0 : t.fs) != null ? n : null;
  }
  /**
   * Return first cell style in this range.
   *
   * @param {GetStyleType} type - The type of the style to get. 'row' means get the composed style of row, col and
   * default worksheet style. 'col' means get the composed style of col, row and default worksheet style.
   * 'cell' means get the style of cell without merging row style, col style and default worksheet style.
   * Default is 'row'.
   *
   * @returns {TextStyleValue | null} The cell style
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getCellStyle());
   * ```
   */
  getCellStyle(e = "row") {
    const t = this.getCellStyleData(e);
    return t ? Se.create(t) : null;
  }
  /**
   * Returns the cell styles for the cells in the range.
   *
   * @param {GetStyleType} type - The type of the style to get. 'row' means get the composed style of row, col and
   * default worksheet style. 'col' means get the composed style of col, row and default worksheet style.
   * 'cell' means get the style of cell without merging row style, col style and default worksheet style.
   * Default is 'row'.
   *
   * @returns {Array<Array<TextStyleValue | null>>} A two-dimensional array of cell styles.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getCellStyles());
   * ```
   */
  getCellStyles(e = "row") {
    return this.getCellDatas().map((n, r) => n.map((s, o) => {
      if (!s) return null;
      const i = e !== "cell" ? this._worksheet.getComposedCellStyle(r + this._range.startRow, o + this._range.startColumn, e === "row") : this._worksheet.getCellStyle(r + this._range.startRow, o + this._range.startColumn);
      return i ? Se.create(i) : null;
    }));
  }
  getValue(e) {
    var t, n;
    return e ? this.getValueAndRichTextValue() : (n = (t = this._worksheet.getCell(this._range.startRow, this._range.startColumn)) == null ? void 0 : t.v) != null ? n : null;
  }
  /**
   * Returns the raw value of the top-left cell in the range. Empty cells return `null`.
   * @returns {Nullable<CellValue>} The raw value of the cell. Returns `null` if the cell is empty.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setValueForCell({
   *   v: 0.2,
   *   s: {
   *     n: {
   *       pattern: '0%',
   *     },
   *   },
   * });
   * console.log(fRange.getRawValue()); // 0.2
   * ```
   */
  getRawValue() {
    var t, n;
    const e = this._worksheet.getCellMatrix().getValue(this._range.startRow, this._range.startColumn);
    return e != null && e.p && ((t = e.p.body) != null && t.dataStream) ? e.p.body.dataStream : (n = e == null ? void 0 : e.v) != null ? n : null;
  }
  /**
   * Returns the displayed value of the top-left cell in the range. The value is a String. Empty cells return an empty string.
   * @returns {string} The displayed value of the cell. Returns an empty string if the cell is empty.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setValueForCell({
   *   v: 0.2,
   *   s: {
   *     n: {
   *       pattern: '0%',
   *     },
   *   },
   * });
   * console.log(fRange.getDisplayValue()); // 20%
   * ```
   */
  getDisplayValue() {
    var t, n, r;
    const e = this._worksheet.getCell(this._range.startRow, this._range.startColumn);
    return e != null && e.p && ((t = e.p.body) != null && t.dataStream) ? e.p.body.dataStream : (r = (n = e == null ? void 0 : e.v) == null ? void 0 : n.toString()) != null ? r : "";
  }
  getValues(e) {
    var i, h;
    if (e)
      return this.getValueAndRichTextValues();
    const { startRow: t, endRow: n, startColumn: r, endColumn: s } = this._range, o = [];
    for (let d = t; d <= n; d++) {
      const c = [];
      for (let l = r; l <= s; l++)
        c.push((h = (i = this._worksheet.getCell(d, l)) == null ? void 0 : i.v) != null ? h : null);
      o.push(c);
    }
    return o;
  }
  /**
   * Returns a two-dimensional array of the range raw values. Empty cells return `null`.
   * @returns {Array<Array<Nullable<CellValue>>>} The raw value of the cell. Returns `null` if the cell is empty.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setValues([
   *   [
   *     {
   *       v: 0.2,
   *       s: {
   *         n: {
   *           pattern: '0%',
   *         },
   *       },
   *     },
   *     {
   *       v: 45658,
   *       s: {
   *         n: {
   *           pattern: 'yyyy-mm-dd',
   *         },
   *       },
   *     }
   *   ],
   *   [
   *     {
   *       v: 1234.567,
   *       s: {
   *         n: {
   *           pattern: '#,##0.00',
   *         }
   *       }
   *     },
   *     null,
   *   ],
   * ]);
   * console.log(fRange.getRawValues()); // [[0.2, 45658], [1234.567, null]]
   * ```
   */
  getRawValues() {
    var i, h;
    const e = this._worksheet.getCellMatrix(), { startRow: t, endRow: n, startColumn: r, endColumn: s } = this._range, o = [];
    for (let d = t; d <= n; d++) {
      const c = [];
      for (let l = r; l <= s; l++) {
        const u = e.getValue(d, l);
        u != null && u.p && ((i = u.p.body) != null && i.dataStream) ? c.push(u.p.body.dataStream) : c.push((h = u == null ? void 0 : u.v) != null ? h : null);
      }
      o.push(c);
    }
    return o;
  }
  /**
   * Returns a two-dimensional array of the range displayed values. Empty cells return an empty string.
   * @returns {string[][]} A two-dimensional array of values.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setValues([
   *   [
   *     {
   *       v: 0.2,
   *       s: {
   *         n: {
   *           pattern: '0%',
   *         },
   *       },
   *     },
   *     {
   *       v: 45658,
   *       s: {
   *         n: {
   *           pattern: 'yyyy-mm-dd',
   *         },
   *       },
   *     }
   *   ],
   *   [
   *     {
   *       v: 1234.567,
   *       s: {
   *         n: {
   *           pattern: '#,##0.00',
   *         }
   *       }
   *     },
   *     null,
   *   ],
   * ]);
   * console.log(fRange.getDisplayValues()); // [['20%', '2025-01-01'], ['1,234.57', '']]
   * ```
   */
  getDisplayValues() {
    var o, i, h;
    const { startRow: e, endRow: t, startColumn: n, endColumn: r } = this._range, s = [];
    for (let d = e; d <= t; d++) {
      const c = [];
      for (let l = n; l <= r; l++) {
        const u = this._worksheet.getCell(d, l);
        u != null && u.p && ((o = u.p.body) != null && o.dataStream) ? c.push(u.p.body.dataStream) : c.push((h = (i = u == null ? void 0 : u.v) == null ? void 0 : i.toString()) != null ? h : "");
      }
      s.push(c);
    }
    return s;
  }
  /**
   * Return first cell model data in this range
   * @returns {ICellData | null} The cell model data
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getCellData());
   * ```
   */
  getCellData() {
    var e;
    return (e = this._worksheet.getCell(this._range.startRow, this._range.startColumn)) != null ? e : null;
  }
  /**
   * Alias for getCellDataGrid.
   * @returns {Nullable<ICellData>[][]} A two-dimensional array of cell data.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getCellDatas());
   * ```
   */
  getCellDatas() {
    return this.getCellDataGrid();
  }
  /**
   * Returns the cell data for the cells in the range.
   * @returns {Nullable<ICellData>[][]} A two-dimensional array of cell data.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getCellDataGrid());
   * ```
   */
  getCellDataGrid() {
    const { startRow: e, endRow: t, startColumn: n, endColumn: r } = this._range, s = [];
    for (let o = e; o <= t; o++) {
      const i = [];
      for (let h = n; h <= r; h++)
        i.push(this._worksheet.getCellRaw(o, h));
      s.push(i);
    }
    return s;
  }
  /**
   * Returns the rich text value for the cell at the start of this range.
   * @returns {Nullable<RichTextValue>} The rich text value
   * @internal
   * @beta
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getRichTextValue());
   * ```
   */
  getRichTextValue() {
    const e = this.getCellData();
    return e != null && e.p ? new N(e.p) : null;
  }
  /**
   * Returns the rich text value for the cells in the range.
   * @returns {Nullable<RichTextValue>[][]} A two-dimensional array of RichTextValue objects.
   * @internal
   * @beta
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getRichTextValues());
   * ```
   */
  getRichTextValues() {
    return this.getCellDataGrid().map((t) => t.map((n) => n != null && n.p ? new N(n.p) : null));
  }
  /**
   * Returns the value and rich text value for the cell at the start of this range.
   * @returns {Nullable<CellValue | RichTextValue>} The value and rich text value
   * @internal
   * @beta
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getValueAndRichTextValue());
   * ```
   */
  getValueAndRichTextValue() {
    const e = this.getCellData();
    return e != null && e.p ? new N(e.p) : e == null ? void 0 : e.v;
  }
  /**
   * Returns the value and rich text value for the cells in the range.
   * @returns {Nullable<CellValue | RichTextValue>[][]} A two-dimensional array of value and rich text value
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getValueAndRichTextValues());
   * ```
   */
  getValueAndRichTextValues() {
    return this.getCellDatas().map((t) => t.map((n) => n != null && n.p ? new N(n.p) : n == null ? void 0 : n.v));
  }
  /**
   * Returns the formula (A1 notation) of the top-left cell in the range, or an empty string if the cell is empty or doesn't contain a formula.
   * @returns {string} The formula for the cell.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getFormula());
   * ```
   */
  getFormula() {
    var e;
    return (e = this._formulaDataModel.getFormulaStringByCell(
      this._range.startRow,
      this._range.startColumn,
      this._worksheet.getSheetId(),
      this._workbook.getUnitId()
    )) != null ? e : "";
  }
  /**
   * Returns the formulas (A1 notation) for the cells in the range. Entries in the 2D array are empty strings for cells with no formula.
   * @returns {string[][]} A two-dimensional array of formulas in string format.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getFormulas());
   * ```
   */
  getFormulas() {
    const e = [], { startRow: t, endRow: n, startColumn: r, endColumn: s } = this._range, o = this._worksheet.getSheetId(), i = this._workbook.getUnitId();
    for (let h = t; h <= n; h++) {
      const d = [];
      for (let c = r; c <= s; c++) {
        const l = this._formulaDataModel.getFormulaStringByCell(h, c, o, i);
        d.push(l || "");
      }
      e.push(d);
    }
    return e;
  }
  /**
   * Gets whether text wrapping is enabled for top-left cell in the range.
   * @returns {boolean} whether text wrapping is enabled for the cell.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getWrap());
   * ```
   */
  getWrap() {
    return this._worksheet.getRange(this._range).getWrap() === m.TRUE;
  }
  /**
   * Gets whether text wrapping is enabled for cells in the range.
   * @returns {boolean[][]} A two-dimensional array of whether text wrapping is enabled for each cell in the range.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getWraps());
   */
  getWraps() {
    const e = this.getCellDatas(), t = this._workbook.getStyles();
    return e.map((n) => n.map((r) => {
      var s;
      return ((s = t.getStyleByCell(r)) == null ? void 0 : s.tb) === G.WRAP;
    }));
  }
  /**
   * Returns the text wrapping strategy for the top left cell of the range.
   * @returns {WrapStrategy} The text wrapping strategy
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getWrapStrategy());
   * ```
   */
  getWrapStrategy() {
    return this._worksheet.getRange(this._range).getWrapStrategy();
  }
  /**
   * Returns the horizontal alignment of the text (left/center/right) of the top-left cell in the range.
   * @returns {string} The horizontal alignment of the text in the cell.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getHorizontalAlignment());
   * ```
   */
  getHorizontalAlignment() {
    const e = this._worksheet.getRange(this._range).getHorizontalAlignment();
    return Fe(e);
  }
  /**
   * Returns the horizontal alignments of the cells in the range.
   * @returns {string[][]} A two-dimensional array of horizontal alignments of text associated with cells in the range.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getHorizontalAlignments());
   * ```
   */
  getHorizontalAlignments() {
    return this._worksheet.getRange(this._range).getHorizontalAlignments().map((t) => t.map((n) => Fe(n)));
  }
  /**
   * Returns the vertical alignment (top/middle/bottom) of the top-left cell in the range.
   * @returns {string} The vertical alignment of the text in the cell.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getVerticalAlignment());
   * ```
   */
  getVerticalAlignment() {
    return Ve(this._worksheet.getRange(this._range).getVerticalAlignment());
  }
  /**
   * Returns the vertical alignments of the cells in the range.
   * @returns {string[][]} A two-dimensional array of vertical alignments of text associated with cells in the range.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getVerticalAlignments());
   * ```
   */
  getVerticalAlignments() {
    return this._worksheet.getRange(this._range).getVerticalAlignments().map((t) => t.map((n) => Ve(n)));
  }
  /**
   * Set custom meta data for first cell in current range.
   * @param {CustomData} data The custom meta data
   * @returns {FRange} This range, for chaining
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setCustomMetaData({ key: 'value' });
   * console.log(fRange.getCustomMetaData());
   * ```
   */
  setCustomMetaData(e) {
    return this.setValue({
      custom: e
    });
  }
  /**
   * Set custom meta data for current range.
   * @param {CustomData[][]} datas The custom meta data
   * @returns {FRange} This range, for chaining
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setCustomMetaDatas([
   *   [{ key: 'value' }, { key: 'value2' }],
   *   [{ key: 'value3' }, { key: 'value4' }],
   * ]);
   * console.log(fRange.getCustomMetaDatas());
   * ```
   */
  setCustomMetaDatas(e) {
    return this.setValues(e.map((t) => t.map((n) => ({ custom: n }))));
  }
  /**
   * Returns the custom meta data for the cell at the start of this range.
   * @returns {CustomData | null} The custom meta data
   * @example
   * ```
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getCustomMetaData());
   * ```
   */
  getCustomMetaData() {
    var t;
    const e = this.getCellData();
    return (t = e == null ? void 0 : e.custom) != null ? t : null;
  }
  /**
   * Returns the custom meta data for the cells in the range.
   * @returns {CustomData[][]} A two-dimensional array of custom meta data
   * @example
   * ```
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getCustomMetaDatas());
   * ```
   */
  getCustomMetaDatas() {
    return this.getCellDataGrid().map((t) => t.map((n) => {
      var r;
      return (r = n == null ? void 0 : n.custom) != null ? r : null;
    }));
  }
  /**
   * Sets basic border properties for the current range.
   * @param {BorderType} type The type of border to apply
   * @param {BorderStyleTypes} style The border style
   * @param {string} [color] Optional border color in CSS notation
   * @returns {FRange} This range, for chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setBorder(univerAPI.Enum.BorderType.ALL, univerAPI.Enum.BorderStyleTypes.THIN, '#ff0000');
   * ```
   */
  setBorder(e, t, n) {
    return this._commandService.syncExecuteCommand(Rt.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      ranges: [this._range],
      value: {
        type: e,
        style: t,
        color: n
      }
    }), this;
  }
  // #region editing
  /**
   * Returns the background color of the top-left cell in the range.
   * @returns {string} The color code of the background.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getBackground());
   * ```
   */
  getBackground() {
    var t, n;
    const e = this.getCellStyle();
    return (n = (t = e == null ? void 0 : e.background) == null ? void 0 : t.rgb) != null ? n : Ce.bg.rgb;
  }
  /**
   * Returns the background colors of the cells in the range.
   * @returns {string[][]} A two-dimensional array of color codes of the backgrounds.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getBackgrounds());
   * ```
   */
  getBackgrounds() {
    return this.getCellStyles().map((t) => t.map((n) => {
      var r, s;
      return (s = (r = n == null ? void 0 : n.background) == null ? void 0 : r.rgb) != null ? s : Ce.bg.rgb;
    }));
  }
  /**
   * Set background color for current range.
   * @param {string} color The background color
   * @returns {FRange} This range, for chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setBackgroundColor('red');
   * ```
   */
  setBackgroundColor(e) {
    return this._commandService.syncExecuteCommand(p.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range,
      style: {
        type: "bg",
        value: {
          rgb: e
        }
      }
    }), this;
  }
  /**
   * Set background color for current range.
   * @param {string} color The background color
   * @returns {FRange} This range, for chaining
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setBackground('red');
   * ```
   */
  setBackground(e) {
    return this.setBackgroundColor(e), this;
  }
  /**
   * Set rotation for text in current range.
   * @param {number} rotation - The rotation angle in degrees
   * @returns This range, for chaining
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setTextRotation(45);
   * ```
   */
  setTextRotation(e) {
    return this._commandService.syncExecuteCommand(bt.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range,
      value: e
    }), this;
  }
  /**
   * Sets the value of the range.
   * @param {CellValue | ICellData} value The value can be a number, string, boolean, or standard cell format. If it begins with `=`, it is interpreted as a formula. The value is tiled to all cells in the range.
   * @returns {FRange} This range, for chaining
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('B2');
   * fRange.setValue(123);
   *
   * // or
   * fRange.setValue({ v: 234, s: { bg: { rgb: '#ff0000' } } });
   * ```
   */
  setValue(e) {
    const t = oe(e);
    if (!t)
      throw new Error("Invalid value");
    return this._commandService.syncExecuteCommand(V.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range,
      value: t
    }), this;
  }
  /**
   * Set new value for current cell, first cell in this range.
   * @param {CellValue | ICellData} value  The value can be a number, string, boolean, or standard cell format. If it begins with `=`, it is interpreted as a formula. The value is tiled to all cells in the range.
   * @returns {FRange} This range, for chaining
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setValueForCell(123);
   *
   * // or
   * fRange.setValueForCell({ v: 234, s: { bg: { rgb: '#ff0000' } } });
   * ```
   */
  setValueForCell(e) {
    const t = oe(e);
    if (!t)
      throw new Error("Invalid value");
    return this._commandService.syncExecuteCommand(V.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: {
        startColumn: this._range.startColumn,
        startRow: this._range.startRow,
        endColumn: this._range.startColumn,
        endRow: this._range.startRow
      },
      value: t
    }), this;
  }
  /**
   * Set the rich text value for the cell at the start of this range.
   * @param {RichTextValue | IDocumentData} value The rich text value
   * @returns {FRange} The range
   * @example
   * ```
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getValue(true));
   *
   * // Set A1 cell value to rich text
   * const richText = univerAPI.newRichText()
   *   .insertText('Hello World')
   *   .setStyle(0, 1, { bl: 1, cl: { rgb: '#c81e1e' } })
   *   .setStyle(6, 7, { bl: 1, cl: { rgb: '#c81e1e' } });
   * fRange.setRichTextValueForCell(richText);
   * console.log(fRange.getValue(true).toPlainText()); // Hello World
   * ```
   */
  setRichTextValueForCell(e) {
    const t = e instanceof N ? e.getData() : e, n = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: {
        startColumn: this._range.startColumn,
        startRow: this._range.startRow,
        endColumn: this._range.startColumn,
        endRow: this._range.startRow
      },
      value: { p: t }
    };
    return this._commandService.syncExecuteCommand(V.id, n), this;
  }
  /**
   * Set the rich text value for the cells in the range.
   * @param {RichTextValue[][]} values The rich text value
   * @returns {FRange} The range
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getValue(true));
   *
   * // Set A1:B2 cell value to rich text
   * const richText = univerAPI.newRichText()
   *   .insertText('Hello World')
   *   .setStyle(0, 1, { bl: 1, cl: { rgb: '#c81e1e' } })
   *   .setStyle(6, 7, { bl: 1, cl: { rgb: '#c81e1e' } });
   * fRange.setRichTextValues([
   *   [richText, richText],
   *   [null, null]
   * ]);
   * console.log(fRange.getValue(true).toPlainText()); // Hello World
   * ```
   */
  setRichTextValues(e) {
    const t = e.map((s) => s.map((o) => o && { p: o instanceof N ? o.getData() : o })), n = ve(t, this._range), r = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range,
      value: n
    };
    return this._commandService.syncExecuteCommand(V.id, r), this;
  }
  /**
   * Set the cell wrap of the given range.
   * Cells with wrap enabled (the default) resize to display their full content. Cells with wrap disabled display as much as possible in the cell without resizing or running to multiple lines.
   * @param {boolean} isWrapEnabled Whether to enable wrap
   * @returns {FRange} this range, for chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setWrap(true);
   * console.log(fRange.getWrap());
   * ```
   */
  setWrap(e) {
    return this._commandService.syncExecuteCommand(he.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range,
      value: e ? G.WRAP : G.UNSPECIFIED
    }), this;
  }
  /**
   * Sets the text wrapping strategy for the cells in the range.
   * @param {WrapStrategy} strategy The text wrapping strategy
   * @returns {FRange} this range, for chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setWrapStrategy(univerAPI.Enum.WrapStrategy.WRAP);
   * console.log(fRange.getWrapStrategy());
   * ```
   */
  setWrapStrategy(e) {
    return this._commandService.syncExecuteCommand(he.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range,
      value: e
    }), this;
  }
  /**
   * Set the vertical (top to bottom) alignment for the given range (top/middle/bottom).
   * @param {"top" | "middle" | "bottom"} alignment The vertical alignment
   * @returns {FRange} this range, for chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setVerticalAlignment('top');
   * ```
   */
  setVerticalAlignment(e) {
    return this._commandService.syncExecuteCommand(pt.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range,
      value: Sn(e)
    }), this;
  }
  /**
   * Set the horizontal (left to right) alignment for the given range (left/center/right).
   * @param {"left" | "center" | "normal"} alignment The horizontal alignment
   * @returns {FRange} this range, for chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setHorizontalAlignment('left');
   * ```
   */
  setHorizontalAlignment(e) {
    return this._commandService.syncExecuteCommand(Et.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range,
      value: wn(e)
    }), this;
  }
  /**
   * Sets a different value for each cell in the range. The value can be a two-dimensional array or a standard range matrix (must match the dimensions of this range), consisting of numbers, strings, Boolean values or Composed of standard cell formats. If a value begins with `=`, it is interpreted as a formula.
   * @param {CellValue[][] | IObjectMatrixPrimitiveType<CellValue> | ICellData[][] | IObjectMatrixPrimitiveType<ICellData>} value The value can be a two-dimensional array or a standard range matrix (must match the dimensions of this range), consisting of numbers, strings, Boolean values or Composed of standard cell formats.
   * @returns {FRange} This range, for chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setValues([
   *   [1, { v: 2, s: { bg: { rgb: '#ff0000' } } }],
   *   [3, 4]
   * ]);
   * ```
   */
  setValues(e) {
    const t = ve(e, this._range);
    return this._commandService.syncExecuteCommand(V.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range,
      value: t
    }), this;
  }
  /**
   * Sets the font weight for the given range (normal/bold),
   * @param {FontWeight|null} fontWeight The font weight, either 'normal' or 'bold'; a null value resets the font weight.
   * @returns {FRange} This range, for chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setFontWeight('bold');
   * ```
   */
  setFontWeight(e) {
    let t;
    if (e === "bold")
      t = m.TRUE;
    else if (e === "normal")
      t = m.FALSE;
    else if (e === null)
      t = null;
    else
      throw new Error("Invalid fontWeight");
    const n = {
      type: "bl",
      value: t
    }, r = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range,
      style: n
    };
    return this._commandService.syncExecuteCommand(p.id, r), this;
  }
  /**
   * Sets the font style for the given range ('italic' or 'normal').
   * @param {FontStyle|null} fontStyle The font style, either 'italic' or 'normal'; a null value resets the font style.
   * @returns {FRange} This range, for chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setFontStyle('italic');
   * ```
   */
  setFontStyle(e) {
    let t;
    if (e === "italic")
      t = m.TRUE;
    else if (e === "normal")
      t = m.FALSE;
    else if (e === null)
      t = null;
    else
      throw new Error("Invalid fontStyle");
    const n = {
      type: "it",
      value: t
    }, r = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range,
      style: n
    };
    return this._commandService.syncExecuteCommand(p.id, r), this;
  }
  /**
   * Sets the font line style of the given range ('underline', 'line-through', or 'none').
   * @param {FontLine|null} fontLine The font line style, either 'underline', 'line-through', or 'none'; a null value resets the font line style.
   * @returns {FRange} This range, for chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setFontLine('underline');
   * ```
   */
  setFontLine(e) {
    if (e === "underline")
      this._setFontUnderline({
        s: m.TRUE
      });
    else if (e === "line-through")
      this._setFontStrikethrough({
        s: m.TRUE
      });
    else if (e === "none")
      this._setFontUnderline({
        s: m.FALSE
      }), this._setFontStrikethrough({
        s: m.FALSE
      });
    else if (e === null)
      this._setFontUnderline(null), this._setFontStrikethrough(null);
    else
      throw new Error("Invalid fontLine");
    return this;
  }
  /**
   * Sets the font underline style of the given ITextDecoration
   * @param {ITextDecoration|null} value The font underline style of the given ITextDecoration; a null value resets the font underline style
   * @returns {void}
   */
  _setFontUnderline(e) {
    const t = {
      type: "ul",
      value: e
    }, n = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range,
      style: t
    };
    this._commandService.syncExecuteCommand(p.id, n);
  }
  /**
   * Sets the font strikethrough style of the given ITextDecoration
   * @param {ITextDecoration|null} value The font strikethrough style of the given ITextDecoration; a null value resets the font strikethrough style
   * @returns {void}
   */
  _setFontStrikethrough(e) {
    const t = {
      type: "st",
      value: e
    }, n = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range,
      style: t
    };
    this._commandService.syncExecuteCommand(p.id, n);
  }
  /**
   * Sets the font family, such as "Arial" or "Helvetica".
   * @param {string|null} fontFamily The font family to set; a null value resets the font family.
   * @returns {FRange} This range, for chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setFontFamily('Arial');
   * ```
   */
  setFontFamily(e) {
    const t = {
      type: "ff",
      value: e
    }, n = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range,
      style: t
    };
    return this._commandService.syncExecuteCommand(p.id, n), this;
  }
  /**
   * Sets the font size, with the size being the point size to use.
   * @param {number|null} size A font size in point size. A null value resets the font size.
   * @returns {FRange} This range, for chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setFontSize(24);
   * ```
   */
  setFontSize(e) {
    const t = {
      type: "fs",
      value: e
    }, n = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range,
      style: t
    };
    return this._commandService.syncExecuteCommand(p.id, n), this;
  }
  /**
   * Sets the font color in CSS notation (such as '#ffffff' or 'white').
   * @param {string|null} color The font color in CSS notation (such as '#ffffff' or 'white'); a null value resets the color.
   * @returns {FRange} This range, for chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setFontColor('#ff0000');
   * ```
   */
  setFontColor(e) {
    const n = {
      type: "cl",
      value: e === null ? null : { rgb: e }
    }, r = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range,
      style: n
    };
    return this._commandService.syncExecuteCommand(p.id, r), this;
  }
  // #endregion editing
  //#region Merge cell
  /**
   * Merge cells in a range into one merged cell
   * @param {boolean} [defaultMerge] - If true, only the value in the upper left cell is retained.
   * @returns {FRange} This range, for chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.merge();
   * console.log(fRange.isMerged());
   * ```
   */
  merge(e = !0) {
    const t = this._workbook.getUnitId(), n = this._worksheet.getSheetId();
    return Z(this._injector, t, n, [this._range], e), this;
  }
  /**
   * Merges cells in a range horizontally.
   * @param {boolean} [defaultMerge] - If true, only the value in the upper left cell is retained.
   * @returns {FRange} This range, for chaining
   * @example
   * ```ts
   * // Assume the active sheet is a new sheet with no merged cells.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.mergeAcross();
   * // There will be two merged cells. A1:B1 and A2:B2.
   * const mergeData = fWorksheet.getMergeData();
   * mergeData.forEach((item) => {
   *   console.log(item.getA1Notation());
   * });
   * ```
   */
  mergeAcross(e = !0) {
    const t = be([this._range], T.ROWS), n = this._workbook.getUnitId(), r = this._worksheet.getSheetId();
    return Z(this._injector, n, r, t, e), this;
  }
  /**
   * Merges cells in a range vertically.
   * @param {boolean} [defaultMerge] - If true, only the value in the upper left cell is retained.
   * @returns {FRange} This range, for chaining
   * @example
   * ```ts
   * // Assume the active sheet is a new sheet with no merged cells.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.mergeVertically();
   * // There will be two merged cells. A1:A2 and B1:B2.
   * const mergeData = fWorksheet.getMergeData();
   * mergeData.forEach((item) => {
   *   console.log(item.getA1Notation());
   * });
   * ```
   */
  mergeVertically(e = !0) {
    const t = be([this._range], T.COLUMNS), n = this._workbook.getUnitId(), r = this._worksheet.getSheetId();
    return Z(this._injector, n, r, t, e), this;
  }
  /**
   * Returns true if cells in the current range overlap a merged cell.
   * @returns {boolean} is overlap with a merged cell
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.merge();
   * const anchor = fWorksheet.getRange('A1');
   * console.log(anchor.isPartOfMerge()); // true
   * ```
   */
  isPartOfMerge() {
    const { startRow: e, startColumn: t, endRow: n, endColumn: r } = this._range;
    return this._worksheet.getMergedCellRange(e, t, n, r).length > 0;
  }
  /**
   * Break all horizontally- or vertically-merged cells contained within the range list into individual cells again.
   * @returns {FRange} This range, for chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.merge();
   * const anchor = fWorksheet.getRange('A1');
   * console.log(anchor.isPartOfMerge()); // true
   * fRange.breakApart();
   * console.log(anchor.isPartOfMerge()); // false
   * ```
   */
  breakApart() {
    return this._commandService.syncExecuteCommand(yt.id, { ranges: [this._range] }), this;
  }
  //#endregion
  /**
   * Iterate cells in this range. Merged cells will be respected.
   * @param {Function} callback the callback function to be called for each cell in the range
   * @param {number} callback.row the row number of the cell
   * @param {number} callback.col the column number of the cell
   * @param {ICellData} callback.cell the cell data
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.forEach((row, col, cell) => {
   *   console.log(row, col, cell);
   * });
   * ```
   */
  forEach(e) {
    const { startColumn: t, startRow: n, endColumn: r, endRow: s } = this._range;
    this._worksheet.getMatrixWithMergedCells(n, t, s, r).forValue((o, i, h) => {
      e(o, i, h);
    });
  }
  /**
   * Returns a string description of the range, in A1 notation.
   * @param {boolean} [withSheet] - If true, the sheet name is included in the A1 notation.
   * @param {AbsoluteRefType} [startAbsoluteRefType] - The absolute reference type for the start cell.
   * @param {AbsoluteRefType} [endAbsoluteRefType] - The absolute reference type for the end cell.
   * @returns {string} The A1 notation of the range.
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // By default, the A1 notation is returned without the sheet name and without absolute reference types.
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getA1Notation()); // A1:B2
   *
   * // By setting withSheet to true, the sheet name is included in the A1 notation.
   * fWorksheet.setName('Sheet1');
   * console.log(fRange.getA1Notation(true)); // Sheet1!A1:B2
   *
   * // By setting startAbsoluteRefType, the absolute reference type for the start cell is included in the A1 notation.
   * console.log(fRange.getA1Notation(false, univerAPI.Enum.AbsoluteRefType.ROW)); // A$1:B2
   * console.log(fRange.getA1Notation(false, univerAPI.Enum.AbsoluteRefType.COLUMN)); // $A1:B2
   * console.log(fRange.getA1Notation(false, univerAPI.Enum.AbsoluteRefType.ALL)); // $A$1:B2
   *
   * // By setting endAbsoluteRefType, the absolute reference type for the end cell is included in the A1 notation.
   * console.log(fRange.getA1Notation(false, null, univerAPI.Enum.AbsoluteRefType.ROW)); // A1:B$2
   * console.log(fRange.getA1Notation(false, null, univerAPI.Enum.AbsoluteRefType.COLUMN)); // A1:$B2
   * console.log(fRange.getA1Notation(false, null, univerAPI.Enum.AbsoluteRefType.ALL)); // A1:$B$2
   *
   * // By setting all parameters example
   * console.log(fRange.getA1Notation(true, univerAPI.Enum.AbsoluteRefType.ALL, univerAPI.Enum.AbsoluteRefType.ALL)); // Sheet1!$A$1:$B$2
   * ```
   */
  getA1Notation(e, t, n) {
    const r = {
      ...this._range,
      startAbsoluteRefType: t,
      endAbsoluteRefType: n
    };
    return e ? dn(this._worksheet.getName(), r) : we(r);
  }
  /**
   * Sets the specified range as the active range, with the top left cell in the range as the current cell.
   * @returns {FRange}  This range, for chaining.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.activate(); // the active cell will be A1
   * ```
   */
  activate() {
    return this._injector.createInstance(C, this._workbook).setActiveRange(this), this;
  }
  /**
   * Sets the specified cell as the current cell.
   * If the specified cell is present in an existing range, then that range becomes the active range with the cell as the current cell.
   * If the specified cell is not part of an existing range, then a new range is created with the cell as the active range and the current cell.
   * @returns {FRange}  This range, for chaining.
   * @description If the range is not a single cell, an error will be thrown.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set the range A1:B2 as the active range, default active cell is A1
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.activate();
   * console.log(fWorksheet.getActiveRange().getA1Notation()); // A1:B2
   * console.log(fWorksheet.getActiveCell().getA1Notation()); // A1
   *
   * // Set the cell B2 as the active cell
   * // Because B2 is in the active range A1:B2, the active range will not change, and the active cell will be changed to B2
   * const cell = fWorksheet.getRange('B2');
   * cell.activateAsCurrentCell();
   * console.log(fWorksheet.getActiveRange().getA1Notation()); // A1:B2
   * console.log(fWorksheet.getActiveCell().getA1Notation()); // B2
   *
   * // Set the cell C3 as the active cell
   * // Because C3 is not in the active range A1:B2, a new active range C3:C3 will be created, and the active cell will be changed to C3
   * const cell2 = fWorksheet.getRange('C3');
   * cell2.activateAsCurrentCell();
   * console.log(fWorksheet.getActiveRange().getA1Notation()); // C3:C3
   * console.log(fWorksheet.getActiveCell().getA1Notation()); // C3
   * ```
   */
  activateAsCurrentCell() {
    const e = this._worksheet.getMergedCell(this._range.startRow, this._range.startColumn);
    if (e && x.equals(e, this._range) || !e && this._range.startRow === this._range.endRow && this._range.startColumn === this._range.endColumn) {
      const r = this._injector.createInstance(C, this._workbook).getActiveRange();
      if (!r || r.getUnitId() !== this.getUnitId() || r.getSheetId() !== this.getSheetId())
        return this.activate();
      if (x.contains(r.getRange(), this._range)) {
        const s = {
          unitId: this.getUnitId(),
          subUnitId: this.getSheetId(),
          selections: [
            {
              range: r.getRange(),
              primary: $(this.getRange(), this._worksheet),
              style: null
            }
          ]
        };
        return this._commandService.syncExecuteCommand(ke.id, s), this;
      }
      return this.activate();
    } else
      throw new Error("The range is not a single cell");
  }
  /**
   * Splits a column of text into multiple columns based on a custom specified delimiter.
   * @param {boolean} [treatMultipleDelimitersAsOne] Whether to treat multiple continuous delimiters as one. The default value is false.
   * @param {SplitDelimiterEnum} [delimiter] The delimiter to use to split the text. The default delimiter is Tab(1)、Comma(2)、Semicolon(4)、Space(8)、Custom(16).A delimiter like 6 (SplitDelimiterEnum.Comma|SplitDelimiterEnum.Semicolon) means using Comma and Semicolon to split the text.
   * @param {string} [customDelimiter] The custom delimiter to split the text. An error will be thrown if custom delimiter is set but the customDelimiter is not a character.
   * @example Show how to split text to columns with custom delimiter
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // A1:A3 has following values:
   * //     A   |
   * //  1#2#3  |
   * //  4##5#6 |
   * const fRange = fWorksheet.getRange('A1:A3');
   * fRange.setValues([
   *   ['A'],
   *   ['1#2#3'],
   *   ['4##5#6']
   * ]);
   *
   * // After calling splitTextToColumns(false, univerAPI.Enum.SplitDelimiterType.Custom, '#'), the range will be:
   * //  A |   |   |
   * //  1 | 2 | 3 |
   * //  4 |   | 5 | 6
   * fRange.splitTextToColumns(false, univerAPI.Enum.SplitDelimiterType.Custom, '#');
   *
   * // After calling splitTextToColumns(true, univerAPI.Enum.SplitDelimiterType.Custom, '#'), the range will be:
   * //  A |   |
   * //  1 | 2 | 3
   * //  4 | 5 | 6
   * fRange.splitTextToColumns(true, univerAPI.Enum.SplitDelimiterType.Custom, '#');
   * ```
   */
  splitTextToColumns(e, t, n) {
    this._commandService.syncExecuteCommand(Ut.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range,
      delimiter: t,
      customDelimiter: n,
      treatMultipleDelimitersAsOne: e
    });
  }
  /**
   * Set the theme style for the range.
   * @param {string|undefined} themeName The name of the theme style to apply.If a undefined value is passed, the theme style will be removed if it exist.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:E20');
   * fRange.useThemeStyle('default');
   * ```
   */
  useThemeStyle(e) {
    if (e == null) {
      const t = this.getUsedThemeStyle();
      t && this.removeThemeStyle(t);
    } else
      this._commandService.syncExecuteCommand(Pt.id, {
        unitId: this._workbook.getUnitId(),
        subUnitId: this._worksheet.getSheetId(),
        range: this._range,
        themeName: e
      });
  }
  /**
   * Remove the theme style for the range.
   * @param {string} themeName The name of the theme style to remove.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:E20');
   * fRange.removeThemeStyle('default');
   * ```
   */
  removeThemeStyle(e) {
    this._commandService.syncExecuteCommand(xt.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range,
      themeName: e
    });
  }
  /**
   * Gets the theme style applied to the range.
   * @returns {string | undefined} The name of the theme style applied to the range or not exist.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:E20');
   * console.log(fRange.getUsedThemeStyle()); // undefined
   * fRange.useThemeStyle('default');
   * console.log(fRange.getUsedThemeStyle()); // 'default'
   * ```
   */
  getUsedThemeStyle() {
    return this._injector.get(Qe).getAppliedRangeThemeStyle({
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range
    });
  }
  /**
   * Clears content and formatting information of the range. Or Optionally clears only the contents or only the formatting.
   * @param {IFacadeClearOptions} [options] - Options for clearing the range. If not provided, the contents and formatting are cleared both.
   * @param {boolean} [options.contentsOnly] - If true, the contents of the range are cleared. If false, the contents and formatting are cleared. Default is false.
   * @param {boolean} [options.formatOnly] - If true, the formatting of the range is cleared. If false, the contents and formatting are cleared. Default is false.
   * @returns {FWorksheet} Returns the current worksheet instance for method chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * const fRange = fWorkSheet.getRange('A1:D10');
   *
   * // clear the content and format of the range A1:D10
   * fRange.clear();
   *
   * // clear the content only of the range A1:D10
   * fRange.clear({ contentsOnly: true });
   * ```
   */
  clear(e) {
    return e && e.contentsOnly && !e.formatOnly ? this.clearContent() : e && e.formatOnly && !e.contentsOnly ? this.clearFormat() : (this._commandService.syncExecuteCommand(Xe.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      ranges: [this._range],
      options: e
    }), this);
  }
  /**
   * Clears content of the range, while preserving formatting information.
   * @returns {FWorksheet} Returns the current worksheet instance for method chaining
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * const fRange = fWorkSheet.getRange('A1:D10');
   *
   * // clear the content only of the range A1:D10
   * fRange.clearContent();
   * ```
   */
  clearContent() {
    return this._commandService.syncExecuteCommand(Ze.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      ranges: [this._range]
    }), this;
  }
  /**
   * Clears formatting information of the range, while preserving contents.
   * @returns {FWorksheet} Returns the current worksheet instance for method chaining
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * const fRange = fWorkSheet.getRange('A1:D10');
   * // clear the format only of the range A1:D10
   * fRange.clearFormat();
   * ```
   */
  clearFormat() {
    return this._commandService.syncExecuteCommand(et.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      ranges: [this._range]
    }), this;
  }
  /**
   * Inserts empty cells into this range. Existing data in the sheet along the provided dimension is shifted away from the inserted range.
   * @param {Dimension} shiftDimension - The dimension along which to shift existing data.
   * @example
   * ```ts
   * // Assume the active sheet empty sheet.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const values = [
   *   [1, 2, 3, 4],
   *   [2, 3, 4, 5],
   *   [3, 4, 5, 6],
   *   [4, 5, 6, 7],
   *   [5, 6, 7, 8],
   * ];
   *
   * // Set the range A1:D5 with some values, the range A1:D5 will be:
   * // 1 | 2 | 3 | 4
   * // 2 | 3 | 4 | 5
   * // 3 | 4 | 5 | 6
   * // 4 | 5 | 6 | 7
   * // 5 | 6 | 7 | 8
   * const fRange = fWorksheet.getRange('A1:D5');
   * fRange.setValues(values);
   * console.log(fWorksheet.getRange('A1:D5').getValues()); // [[1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6], [4, 5, 6, 7], [5, 6, 7, 8]]
   *
   * // Insert the empty cells into the range A1:B2 along the columns dimension, the range A1:D5 will be:
   * //   |   | 1 | 2
   * //   |   | 2 | 3
   * // 3 | 4 | 5 | 6
   * // 4 | 5 | 6 | 7
   * // 5 | 6 | 7 | 8
   * const fRange2 = fWorksheet.getRange('A1:B2');
   * fRange2.insertCells(univerAPI.Enum.Dimension.COLUMNS);
   * console.log(fWorksheet.getRange('A1:D5').getValues()); // [[null, null, 1, 2], [null, null, 2, 3], [3, 4, 5, 6], [4, 5, 6, 7], [5, 6, 7, 8]]
   *
   * // Set the range A1:D5 values again, the range A1:D5 will be:
   * // 1 | 2 | 3 | 4
   * // 2 | 3 | 4 | 5
   * // 3 | 4 | 5 | 6
   * // 4 | 5 | 6 | 7
   * // 5 | 6 | 7 | 8
   * fRange.setValues(values);
   *
   * // Insert the empty cells into the range A1:B2 along the rows dimension, the range A1:D5 will be:
   * //   |   | 3 | 4
   * //   |   | 4 | 5
   * // 1 | 2 | 5 | 6
   * // 2 | 3 | 6 | 7
   * // 3 | 4 | 7 | 8
   * const fRange3 = fWorksheet.getRange('A1:B2');
   * fRange3.insertCells(univerAPI.Enum.Dimension.ROWS);
   * console.log(fWorksheet.getRange('A1:D5').getValues()); // [[null, null, 3, 4], [null, null, 4, 5], [1, 2, 5, 6], [2, 3, 6, 7], [3, 4, 7, 8]]
   * ```
   */
  insertCells(e) {
    e === T.ROWS ? this._commandService.executeCommand(Mt.id, {
      range: this._range
    }) : this._commandService.executeCommand(Nt.id, {
      range: this._range
    });
  }
  /**
   * Deletes this range of cells. Existing data in the sheet along the provided dimension is shifted towards the deleted range.
   * @param {Dimension} shiftDimension - The dimension along which to shift existing data.
   * @example
   * ```ts
   * // Assume the active sheet empty sheet.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const values = [
   *   [1, 2, 3, 4],
   *   [2, 3, 4, 5],
   *   [3, 4, 5, 6],
   *   [4, 5, 6, 7],
   *   [5, 6, 7, 8],
   * ];
   *
   * // Set the range A1:D5 with some values, the range A1:D5 will be:
   * // 1 | 2 | 3 | 4
   * // 2 | 3 | 4 | 5
   * // 3 | 4 | 5 | 6
   * // 4 | 5 | 6 | 7
   * // 5 | 6 | 7 | 8
   * const fRange = fWorksheet.getRange('A1:D5');
   * fRange.setValues(values);
   * console.log(fWorksheet.getRange('A1:D5').getValues()); // [[1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6], [4, 5, 6, 7], [5, 6, 7, 8]]
   *
   * // Delete the range A1:B2 along the columns dimension, the range A1:D5 will be:
   * // 3 | 4 |   |
   * // 4 | 5 |   |
   * // 3 | 4 | 5 | 6
   * // 4 | 5 | 6 | 7
   * // 5 | 6 | 7 | 8
   * const fRange2 = fWorksheet.getRange('A1:B2');
   * fRange2.deleteCells(univerAPI.Enum.Dimension.COLUMNS);
   * console.log(fWorksheet.getRange('A1:D5').getValues()); // [[3, 4, null, null], [4, 5, null, null], [3, 4, 5, 6], [4, 5, 6, 7], [5, 6, 7, 8]]
   *
   * // Set the range A1:D5 values again, the range A1:D5 will be:
   * // 1 | 2 | 3 | 4
   * // 2 | 3 | 4 | 5
   * // 3 | 4 | 5 | 6
   * // 4 | 5 | 6 | 7
   * // 5 | 6 | 7 | 8
   * fRange.setValues(values);
   *
   * // Delete the range A1:B2 along the rows dimension, the range A1:D5 will be:
   * // 3 | 4 | 3 | 4
   * // 4 | 5 | 4 | 5
   * // 5 | 6 | 5 | 6
   * //   |   | 6 | 7
   * //   |   | 7 | 8
   * const fRange3 = fWorksheet.getRange('A1:B2');
   * fRange3.deleteCells(univerAPI.Enum.Dimension.ROWS);
   * console.log(fWorksheet.getRange('A1:D5').getValues()); // [[3, 4, 3, 4], [4, 5, 4, 5], [5, 6, 5, 6], [null, null, 6, 7], [null, null, 7, 8]]
   * ```
   */
  deleteCells(e) {
    e === T.ROWS ? this._commandService.executeCommand(Tt.id, {
      range: this._range
    }) : this._commandService.executeCommand(At.id, {
      range: this._range
    });
  }
  /**
   * Returns a copy of the range expanded `Direction.UP` and `Direction.DOWN` if the specified dimension is `Dimension.ROWS`, or `Direction.NEXT` and `Direction.PREVIOUS` if the dimension is `Dimension.COLUMNS`.
   * The expansion of the range is based on detecting data next to the range that is organized like a table.
   * The expanded range covers all adjacent cells with data in them along the specified dimension including the table boundaries.
   * If the original range is surrounded by empty cells along the specified dimension, the range itself is returned.
   * @param {Dimension} [dimension] - The dimension along which to expand the range. If not provided, the range will be expanded in both dimensions.
   * @returns {FRange} The range's data region or a range covering each column or each row spanned by the original range.
   * @example
   * ```ts
   * // Assume the active sheet is a new sheet with no data.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set the range A1:D4 with some values, the range A1:D4 will be:
   * //  |     |     |
   * //  |     | 100 |
   * //  | 100 |     | 100
   * //  |     | 100 |
   * fWorksheet.getRange('C2').setValue(100);
   * fWorksheet.getRange('B3').setValue(100);
   * fWorksheet.getRange('D3').setValue(100);
   * fWorksheet.getRange('C4').setValue(100);
   *
   * // Get C3 data region along the rows dimension, the range will be C2:D4
   * const range = fWorksheet.getRange('C3').getDataRegion(univerAPI.Enum.Dimension.ROWS);
   * console.log(range.getA1Notation()); // C2:C4
   *
   * // Get C3 data region along the columns dimension, the range will be B3:D3
   * const range2 = fWorksheet.getRange('C3').getDataRegion(univerAPI.Enum.Dimension.COLUMNS);
   * console.log(range2.getA1Notation()); // B3:D3
   *
   * // Get C3 data region along the both dimension, the range will be B2:D4
   * const range3 = fWorksheet.getRange('C3').getDataRegion();
   * console.log(range3.getA1Notation()); // B2:D4
   * ```
   */
  // eslint-disable-next-line complexity
  getDataRegion(e) {
    const { startRow: t, startColumn: n, endRow: r, endColumn: s } = this._range, o = this._worksheet.getMaxRows(), i = this._worksheet.getMaxColumns(), h = this._worksheet.getCellMatrix();
    let d = t, c = n, l = r, u = s;
    if (e !== T.COLUMNS) {
      let y = !1, U = !1;
      for (let v = n; v <= s && (t > 0 && !B(h.getValue(t - 1, v)) && (y = !0), r < o - 1 && !B(h.getValue(r + 1, v)) && (U = !0), !(y && U)); v++)
        ;
      y && (d = t - 1), U && (l = r + 1);
    }
    if (e !== T.ROWS) {
      let y = !1, U = !1;
      for (let v = t; v <= r && (n > 0 && !B(h.getValue(v, n - 1)) && (y = !0), s < i - 1 && !B(h.getValue(v, s + 1)) && (U = !0), !(y && U)); v++)
        ;
      y && (c = n - 1), U && (u = s + 1);
    }
    return this._injector.createInstance(k, this._workbook, this._worksheet, {
      startRow: d,
      startColumn: c,
      endRow: l,
      endColumn: u
    });
  }
  /**
   * Returns true if the range is totally blank.
   * @returns {boolean} true if the range is blank; false otherwise.
   * @example
   * ```ts
   * // Assume the active sheet is a new sheet with no data.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.isBlank()); // true
   *
   * // Set the range A1:B2 with some values
   * fRange.setValueForCell(123);
   * console.log(fRange.isBlank()); // false
   * ```
   */
  isBlank() {
    const e = this._worksheet.getCellMatrix(), { startRow: t, startColumn: n, endRow: r, endColumn: s } = this._range;
    let o = !0;
    for (let i = t; i <= r; i++) {
      for (let h = n; h <= s; h++)
        if (!B(e.getValue(i, h))) {
          o = !1;
          break;
        }
      if (!o)
        break;
    }
    return o;
  }
  /**
   * Returns a new range that is relative to the current range, whose upper left point is offset from the current range by the given rows and columns, and with the given height and width in cells.
   * @param {number} rowOffset - The number of rows down from the range's top-left cell; negative values represent rows up from the range's top-left cell.
   * @param {number} columnOffset - The number of columns right from the range's top-left cell; negative values represent columns left from the range's top-left cell.
   * @param {number} numRows - The height in rows of the new range.
   * @param {number} numColumns - The width in columns of the new range.
   * @returns {FRange} The new range.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * console.log(fRange.getA1Notation()); // A1:B2
   *
   * // Offset the range by 1 row and 1 column, and set the height of the new range to 3 and the width to 3
   * const newRange = fRange.offset(1, 1, 3, 3);
   * console.log(newRange.getA1Notation()); // B2:D4
   * ```
   */
  offset(e, t, n, r) {
    const { startRow: s, startColumn: o, endRow: i, endColumn: h } = this._range, d = s + e, c = o + t, l = n ? d + n - 1 : i + e, u = r ? c + r - 1 : h + t;
    if (d < 0 || c < 0 || l < 0 || u < 0)
      throw new Error("The row or column index is out of range");
    return this._injector.createInstance(k, this._workbook, this._worksheet, {
      startRow: d,
      startColumn: c,
      endRow: l,
      endColumn: u
    });
  }
  /**
   * Updates the formula for this range. The given formula must be in A1 notation.
   * @param {string} formula - A string representing the formula to set for the cell.
   * @returns {FRange} This range instance for chaining.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1');
   * fRange.setFormula('=SUM(A2:A5)');
   * console.log(fRange.getFormula()); // '=SUM(A2:A5)'
   * ```
   */
  setFormula(e) {
    return this.setValue({
      f: e
    });
  }
  /**
   * Sets a rectangular grid of formulas (must match dimensions of this range). The given formulas must be in A1 notation.
   * @param {string[][]} formulas - A two-dimensional string array of formulas.
   * @returns {FRange} This range instance for chaining.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setFormulas([
   *   ['=SUM(A2:A5)', '=SUM(B2:B5)'],
   *   ['=SUM(A6:A9)', '=SUM(B6:B9)'],
   * ]);
   * console.log(fRange.getFormulas()); // [['=SUM(A2:A5)', '=SUM(B2:B5)'], ['=SUM(A6:A9)', '=SUM(B6:B9)']]
   * ```
   */
  setFormulas(e) {
    return this.setValues(e.map((t) => t.map((n) => ({ f: n }))));
  }
}, W._enableManualInit(), W);
k = vn([
  se(3, g(M)),
  se(4, _),
  se(5, g(cn))
], k);
var fn = Object.getOwnPropertyDescriptor, In = (a, e, t, n) => {
  for (var r = n > 1 ? void 0 : n ? fn(e, t) : e, s = a.length - 1, o; s >= 0; s--)
    (o = a[s]) && (r = o(r) || r);
  return r;
}, Rn = (a, e) => (t, n) => e(t, n, a);
let J = class {
  constructor(a, e, t, n) {
    this._workbook = a, this._worksheet = e, this._selections = t, this._injector = n;
  }
  /**
   * Represents the active selection in the sheet. Which means the selection contains the active cell.
   * @returns {FRange | null} The active selection.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A10:B11');
   * fRange.activate();
   * const fSelection = fWorksheet.getSelection();
   * console.log(fSelection.getActiveRange().getA1Notation()); // A10:B11
   * ```
   */
  getActiveRange() {
    const a = this._selections.find((e) => !!e.primary);
    return a ? this._injector.createInstance(k, this._workbook, this._worksheet, a.range) : null;
  }
  /**
   * Represents the active selection list in the sheet.
   * @returns {FRange[]} The active selection list.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fSelection = fWorksheet.getSelection();
   * const activeRangeList = fSelection.getActiveRangeList();
   * activeRangeList.forEach((range) => {
   *   console.log(range.getA1Notation());
   * });
   * ```
   */
  getActiveRangeList() {
    return this._selections.map((a) => this._injector.createInstance(k, this._workbook, this._worksheet, a.range));
  }
  /**
   * Represents the current select cell in the sheet.
   * @returns {ISelectionCell} The current select cell info.Pay attention to the type of the return value.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A10:B11');
   * fRange.activate();
   * const fSelection = fWorksheet.getSelection();
   * const currentCell = fSelection.getCurrentCell();
   * const { actualRow, actualColumn } = currentCell;
   * console.log(currentCell);
   * console.log(`actualRow: ${actualRow}, actualColumn: ${actualColumn}`); // actualRow: 9, actualColumn: 0
   * ```
   */
  getCurrentCell() {
    const a = this._selections.find((e) => !!e.primary);
    return a ? a.primary : null;
  }
  /**
   * Returns the active sheet in the spreadsheet.
   * @returns {FWorksheet} The active sheet in the spreadsheet.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fSelection = fWorksheet.getSelection();
   * const activeSheet = fSelection.getActiveSheet();
   * console.log(activeSheet.equalTo(fWorksheet)); // true
   * ```
   */
  getActiveSheet() {
    const a = this._injector.createInstance(C, this._workbook);
    return this._injector.createInstance(S, a, this._workbook, this._worksheet);
  }
  /**
   * Update the primary cell in the selection. if the primary cell not exists in selections, add it to the selections and clear the old selections.
   * @param {FRange} cell The new primary cell to update.
   * @returns {FSelection} The new selection after updating the primary cell.Because the selection is immutable, the return value is a new selection.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A10:B11');
   * fRange.activate();
   * const cell = fWorksheet.getRange('B11');
   *
   * let fSelection = fWorksheet.getSelection();
   * fSelection = fSelection.updatePrimaryCell(cell);
   *
   * const currentCell = fSelection.getCurrentCell();
   * const { actualRow, actualColumn } = currentCell;
   * console.log(currentCell);
   * console.log(`actualRow: ${actualRow}, actualColumn: ${actualColumn}`); // actualRow: 10, actualColumn: 1
   * ```
   */
  updatePrimaryCell(a) {
    const e = this._injector.get(_);
    let t = [], n = !1;
    for (const { range: s, style: o } of this._selections)
      x.contains(s, a.getRange()) ? (t.push({
        range: s,
        primary: $(a.getRange(), this._worksheet),
        style: o
      }), n = !0) : t.push({
        range: s,
        primary: null,
        style: o
      });
    n || (t = [
      {
        range: a.getRange(),
        primary: $(a.getRange(), this._worksheet)
      }
    ]);
    const r = {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      selections: t
    };
    return e.syncExecuteCommand(ke.id, r), new J(this._workbook, this._worksheet, t, this._injector);
  }
  /**
   * Get the next primary cell in the specified direction. If the primary cell not exists in selections, return null.
   * The next primary cell in the specified direction is the next cell only within the current selection range.
   * For example, if the current selection is A1:B2, and the primary cell is B1, the next cell in the right direction is A2 instead of C1.
   * @param {Direction} direction The direction to move the primary cell.The enum value is maybe one of the following: UP(0),RIGHT(1), DOWN(2), LEFT(3).
   * @returns {FRange | null} The next primary cell in the specified direction.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * // make sure the active cell is A1 and selection is A1:B2
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.activate();
   *
   * // get the next cell in the right direction, and update the primary cell to the next cell, now the active cell is B1
   * let fSelection = fWorksheet.getSelection();
   * const nextCell = fSelection.getNextDataRange(univerAPI.Enum.Direction.RIGHT);
   * console.log(nextCell?.getA1Notation()); // B1
   * fSelection = fSelection.updatePrimaryCell(nextCell);
   *
   * // get the next cell in the right direction, the next cell is A2
   * const nextCell2 = fSelection.getNextDataRange(univerAPI.Enum.Direction.RIGHT);
   * console.log(nextCell2?.getA1Notation()); // A2
   * ```
   */
  getNextDataRange(a) {
    if (!this._selections.find((n) => !!n.primary))
      return null;
    const t = Dt(this._selections.concat(), a, this._worksheet);
    return t ? this._injector.createInstance(k, this._workbook, this._worksheet, t) : null;
  }
};
J = In([
  Rn(3, g(M))
], J);
var bn = Object.getOwnPropertyDescriptor, pn = (a, e, t, n) => {
  for (var r = n > 1 ? void 0 : n ? bn(e, t) : e, s = a.length - 1, o; s >= 0; s--)
    (o = a[s]) && (r = o(r) || r);
  return r;
}, z = (a, e) => (t, n) => e(t, n, a);
let S = class extends _e {
  /**
   * Creates a new worksheet facade instance
   * @param {FWorkbook} _fWorkbook - The facade workbook instance
   * @param {Workbook} _workbook - The workbook instance
   * @param {Worksheet} _worksheet - The worksheet instance
   * @param {Injector} _injector - The injector instance
   * @param {SheetsSelectionsService} _selectionManagerService - The selection manager service
   * @param {ILogService} _logService - The log service
   * @param {ICommandService} _commandService - The command service
   */
  constructor(e, t, n, r, s, o, i) {
    super(r);
    /**
     * Sets the active selection region for this sheet.
     * @param range - The range to set as the active selection
     * @returns This sheet, for chaining
     * @example
     * ```ts
     * const fWorkSheet = univerAPI.getActiveWorkbook().getActiveSheet();
     * fWorkSheet.setActiveSelection(fWorkSheet.getRange('A10:B10'));
     * ```
     */
    b(this, "setActiveSelection", this.setActiveRange);
    this._fWorkbook = e, this._workbook = t, this._worksheet = n, this._injector = r, this._selectionManagerService = s, this._logService = o, this._commandService = i;
  }
  dispose() {
    super.dispose(), delete this._fWorkbook, delete this._workbook, delete this._worksheet;
  }
  /**
   * Get the worksheet instance.
   * @returns {Worksheet} The worksheet instance.
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * const sheet = fWorksheet.getSheet();
   * console.log(sheet);
   * ```
   */
  getSheet() {
    return this._worksheet;
  }
  /**
   * Get the injector instance.
   * @returns {Injector} The injector instance.
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * const injector = fWorksheet.getInject();
   * console.log(injector);
   * ```
   */
  getInject() {
    return this._injector;
  }
  /**
   * Get the workbook instance.
   * @returns {Workbook} The workbook instance.
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * const workbook = fWorksheet.getWorkbook();
   * console.log(workbook);
   * ```
   */
  getWorkbook() {
    return this._workbook;
  }
  /**
   * Get the worksheet id.
   * @returns {string} The id of the worksheet.
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * const sheetId = fWorksheet.getSheetId();
   * console.log(sheetId);
   * ```
   */
  getSheetId() {
    return this._worksheet.getSheetId();
  }
  /**
   * Get the worksheet name.
   * @returns {string} The name of the worksheet.
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * const sheetName = fWorksheet.getSheetName();
   * console.log(sheetName);
   * ```
   */
  getSheetName() {
    return this._worksheet.getName();
  }
  /**
   * Get the current selection of the worksheet.
   * @returns {FSelection} return the current selections of the worksheet or null if there is no selection.
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * const selection = fWorksheet.getSelection();
   * console.log(selection);
   * ```
   */
  getSelection() {
    const e = this._selectionManagerService.getCurrentSelections();
    return e ? this._injector.createInstance(J, this._workbook, this._worksheet, e) : null;
  }
  // #region rows
  // #region default style
  /**
   * Get the default style of the worksheet.
   * @returns {IStyleData} Default style of the worksheet.
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * const defaultStyle = fWorksheet.getDefaultStyle();
   * console.log(defaultStyle);
   * ```
   */
  getDefaultStyle() {
    return this._worksheet.getDefaultCellStyle();
  }
  /**
   * Get the default style of the worksheet row
   * @param {number} index - The row index
   * @param {boolean} [keepRaw] - If true, return the raw style data maybe the style name or style data, otherwise return the data from row manager
   * @returns {(Nullable<IStyleData> | string)} The default style of the worksheet row name or style data
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Get default style for row 0 (1)
   * const rowStyle = fWorksheet.getRowDefaultStyle(0);
   * console.log(rowStyle);
   * // Get raw style data for row 0
   * const rawRowStyle = fWorksheet.getRowDefaultStyle(0, true);
   * console.log(rawRowStyle);
   * ```
   */
  getRowDefaultStyle(e, t = !1) {
    return t ? this._worksheet.getRowStyle(e, t) : this._worksheet.getRowStyle(e);
  }
  /**
   * Get the default style of the worksheet column
   * @param {number} index - The column index
   * @param {boolean} [keepRaw] - If true, return the raw style data maybe the style name or style data, otherwise return the data from col manager
   * @returns {(Nullable<IStyleData> | string)} The default style of the worksheet column name or style data
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Get default style for column 0 (A)
   * const colStyle = fWorksheet.getColumnDefaultStyle(0);
   * console.log(colStyle);
   * // Get raw style data for column 0
   * const rawColStyle = fWorksheet.getColumnDefaultStyle(0, true);
   * console.log(rawColStyle);
   * ```
   */
  getColumnDefaultStyle(e, t = !1) {
    return t ? this._worksheet.getColumnStyle(e, t) : this._worksheet.getColumnStyle(e);
  }
  /**
   * Set the default style of the worksheet
   * @param {string} style - The style to set
   * @returns {FWorksheet} This worksheet instance for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * fWorksheet.setDefaultStyle('default');
   * // or
   * // fWorksheet.setDefaultStyle({fs: 12, ff: 'Arial'});
   * ```
   */
  setDefaultStyle(e) {
    const t = this._workbook.getUnitId(), n = this._worksheet.getSheetId();
    return this._commandService.syncExecuteCommand(Wt.id, {
      unitId: t,
      subUnitId: n,
      defaultStyle: e
    }), this._worksheet.setDefaultCellStyle(e), this;
  }
  /**
   * Set the default style of the worksheet row
   * @param {number} index - The row index
   * @param {string | Nullable<IStyleData>} style - The style name or style data
   * @returns {FWorksheet} This sheet, for chaining.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * fWorksheet.setColumnDefaultStyle(0, 'default');
   * // or
   * // fWorksheet.setColumnDefaultStyle(0, {fs: 12, ff: 'Arial'});
   * ```
   */
  setColumnDefaultStyle(e, t) {
    const n = this._workbook.getUnitId(), r = this._worksheet.getSheetId(), s = {
      unitId: n,
      subUnitId: r,
      columnData: {
        [e]: {
          s: t
        }
      }
    };
    return this._commandService.syncExecuteCommand(pe.id, s), this;
  }
  /**
   * Set the default style of the worksheet column
   * @param {number} index - The column index
   * @param {string | Nullable<IStyleData>} style - The style name or style data
   * @returns {FWorksheet} This sheet, for chaining.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * fWorksheet.setRowDefaultStyle(0, 'default');
   * // or
   * // fWorksheet.setRowDefaultStyle(0, {fs: 12, ff: 'Arial'});
   * ```
   */
  setRowDefaultStyle(e, t) {
    const n = this._workbook.getUnitId(), r = this._worksheet.getSheetId(), s = {
      unitId: n,
      subUnitId: r,
      rowData: {
        [e]: {
          s: t
        }
      }
    };
    return this._commandService.syncExecuteCommand(Ee.id, s), this;
  }
  getRange(e, t, n, r) {
    let s, o;
    if (typeof e == "object")
      s = e, o = this._worksheet;
    else if (typeof e == "string") {
      const { range: i, sheetName: h } = un(e), d = h ? this._workbook.getSheetBySheetName(h) : this._worksheet;
      if (!d)
        throw new Error("Range not found");
      o = d, s = {
        ...i,
        unitId: this._workbook.getUnitId(),
        sheetId: o.getSheetId(),
        // Use the current range instead of the future actual range to match Apps Script behavior.
        // Users can create the latest range in real time when needed.
        rangeType: w.NORMAL,
        startRow: i.rangeType === w.COLUMN ? 0 : i.startRow,
        endRow: i.rangeType === w.COLUMN ? o.getMaxRows() - 1 : i.endRow,
        startColumn: i.rangeType === w.ROW ? 0 : i.startColumn,
        endColumn: i.rangeType === w.ROW ? o.getMaxColumns() - 1 : i.endColumn
      };
    } else if (typeof e == "number" && t !== void 0)
      o = this._worksheet, s = {
        startRow: e,
        endRow: e + (n != null ? n : 1) - 1,
        startColumn: t,
        endColumn: t + (r != null ? r : 1) - 1,
        unitId: this._workbook.getUnitId(),
        sheetId: this._worksheet.getSheetId()
      };
    else
      throw new Error("Invalid range specification");
    return this._injector.createInstance(k, this._workbook, o, s);
  }
  /**
   * Returns the current number of columns in the sheet, regardless of content.
   * @returns {number} The maximum columns count of the sheet
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * const totalColumns = fWorksheet.getMaxColumns();
   * console.log(`Sheet has ${totalColumns} columns`);
   * ```
   */
  getMaxColumns() {
    return this._worksheet.getMaxColumns();
  }
  /**
   * Returns the current number of rows in the sheet, regardless of content.
   * @returns {number}The maximum rows count of the sheet
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * const totalRows = fWorksheet.getMaxRows();
   * console.log(`Sheet has ${totalRows} rows`);
   * ```
   */
  getMaxRows() {
    return this._worksheet.getMaxRows();
  }
  /**
   * Inserts a row after the given row position.
   * @param {number} afterPosition - The row after which the new row should be added, starting at 0 for the first row.
   * @returns {FWorksheet} This sheet, for chaining.
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Insert a row after the third row
   * fWorksheet.insertRowAfter(2);
   * // Insert a row after the first row
   * fWorksheet.insertRowAfter(0);
   * ```
   */
  insertRowAfter(e) {
    return this.insertRowsAfter(e, 1);
  }
  /**
   * Inserts a row before the given row position.
   * @param {number} beforePosition - The row before which the new row should be added, starting at 0 for the first row.
   * @returns {FWorksheet} This sheet, for chaining.
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Insert a row before the third row
   * fWorksheet.insertRowBefore(2);
   * // Insert a row before the first row
   * fWorksheet.insertRowBefore(0);
   * ```
   */
  insertRowBefore(e) {
    return this.insertRowsBefore(e, 1);
  }
  /**
   * Inserts one or more consecutive blank rows in a sheet starting at the specified location.
   * @param {number} rowIndex - The index indicating where to insert a row, starting at 0 for the first row.
   * @param {number} numRows - The number of rows to insert.
   * @returns {FWorksheet} This sheet, for chaining.
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Insert 3 rows before the third row
   * fWorksheet.insertRows(2, 3);
   * // Insert 1 row before the first row
   * fWorksheet.insertRows(0);
   * ```
   */
  insertRows(e, t = 1) {
    return this.insertRowsBefore(e, t);
  }
  /**
   * Inserts a number of rows after the given row position.
   * @param {number} afterPosition - The row after which the new rows should be added, starting at 0 for the first row.
   * @param {number} howMany - The number of rows to insert.
   * @returns {FWorksheet} This sheet, for chaining.
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Insert 3 rows after the third row
   * fWorksheet.insertRowsAfter(2, 3);
   * // Insert 1 row after the first row
   * fWorksheet.insertRowsAfter(0, 1);
   * ```
   */
  insertRowsAfter(e, t) {
    const n = this._workbook.getUnitId(), r = this._worksheet.getSheetId(), s = j.DOWN, o = e + 1, i = e + t, h = 0, d = this._worksheet.getColumnCount() - 1, c = L(this._worksheet, o, i, h, d, !0, e);
    return this._commandService.syncExecuteCommand(ye.id, {
      unitId: n,
      subUnitId: r,
      direction: s,
      range: {
        startRow: o,
        endRow: i,
        startColumn: h,
        endColumn: d
      },
      cellValue: c
    }), this;
  }
  /**
   * Inserts a number of rows before the given row position.
   * @param {number} beforePosition - The row before which the new rows should be added, starting at 0 for the first row.
   * @param {number} howMany - The number of rows to insert.
   * @returns {FWorksheet} This sheet, for chaining.
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Insert 3 rows before the third row
   * fWorksheet.insertRowsBefore(2, 3);
   * // Insert 1 row before the first row
   * fWorksheet.insertRowsBefore(0, 1);
   * ```
   */
  insertRowsBefore(e, t) {
    const n = this._workbook.getUnitId(), r = this._worksheet.getSheetId(), s = j.UP, o = e, i = e + t - 1, h = 0, d = this._worksheet.getColumnCount() - 1, c = L(this._worksheet, o, i, h, d, !0, e - 1);
    return this._commandService.syncExecuteCommand(ye.id, {
      unitId: n,
      subUnitId: r,
      direction: s,
      range: {
        startRow: o,
        endRow: i,
        startColumn: h,
        endColumn: d
      },
      cellValue: c
    }), this;
  }
  /**
   * Deletes the row at the given row position.
   * @param {number} rowPosition - The position of the row, starting at 0 for the first row.
   * @returns {FWorksheet} This sheet, for chaining.
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Delete the third row
   * fWorksheet.deleteRow(2);
   * // Delete the first row
   * fWorksheet.deleteRow(0);
   * ```
   */
  deleteRow(e) {
    return this.deleteRows(e, 1);
  }
  /**
   * Deletes a number of rows starting at the given row position.
   * @param {number} rowPosition - The position of the first row to delete, starting at 0 for the first row.
   * @param {number} howMany - The number of rows to delete.
   * @returns {FWorksheet} This sheet, for chaining.
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Delete 3 rows at row index 2 (rows 3-5)
   * fWorksheet.deleteRows(2, 3);
   * // Delete 1 row at row index 0 (first row)
   * fWorksheet.deleteRows(0, 1);
   * ```
   */
  deleteRows(e, t) {
    const n = {
      startRow: e,
      endRow: e + t - 1,
      startColumn: 0,
      endColumn: this._worksheet.getColumnCount() - 1
    };
    return this._commandService.syncExecuteCommand(Bt.id, {
      range: n,
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId()
    }), this;
  }
  /**
   * Moves the rows selected by the given range to the position indicated by the destinationIndex. The rowSpec itself does not have to exactly represent an entire row or group of rows to move—it selects all rows that the range spans.
   * @param {FRange} rowSpec - A range spanning the rows that should be moved.
   * @param {number} destinationIndex - The index that the rows should be moved to. Note that this index is based on the coordinates before the rows are moved. Existing data is shifted down to make room for the moved rows while the source rows are removed from the grid. Therefore, the data may end up at a different index than originally specified. Use 0-index for this method.
   * @returns {FWorksheet} This sheet, for chaining.
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Move 3 rows at row index 2 (rows 3-5) to row index 0
   * const rowSpec1 = fWorksheet.getRange('3:5');
   * fWorksheet.moveRows(rowSpec1, 0);
   * // Move 1 row at row index 0 (first row) to row index 2
   * const rowSpec2 = fWorksheet.getRange('1:1');
   * fWorksheet.moveRows(rowSpec2, 2);
   * ```
   */
  moveRows(e, t) {
    const n = this._workbook.getUnitId(), r = this._worksheet.getSheetId(), s = ne(e.getRange(), this._worksheet), o = s, i = {
      startRow: t,
      endRow: t,
      startColumn: s.startColumn,
      endColumn: s.endColumn
    };
    return this._commandService.syncExecuteCommand(Ft.id, {
      unitId: n,
      subUnitId: r,
      range: s,
      fromRange: o,
      toRange: i
    }), this;
  }
  /**
   * Hides the rows in the given range.
   * @param {FRange} row - The row range to hide.
   * @returns {FWorksheet} This sheet, for chaining.
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Hide 3 rows starting from row index 1 (rows 2-4)
   * const row1 = fWorksheet.getRange('2:4');
   * fWorksheet.hideRow(row1);
   * // Hide single row at index 0 (first row)
   * const row2 = fWorksheet.getRange('1:1');
   * fWorksheet.hideRow(row2);
   * ```
   */
  hideRow(e) {
    const t = this._workbook.getUnitId(), n = this._worksheet.getSheetId(), r = ne(e.getRange(), this._worksheet);
    return this._commandService.syncExecuteCommand(Ue.id, {
      unitId: t,
      subUnitId: n,
      ranges: [r]
    }), this;
  }
  /**
   * Hides one or more consecutive rows starting at the given index. Use 0-index for this method
   * @param {number} rowIndex - The starting index of the rows to hide
   * @param {number} numRow - The number of rows to hide
   * @returns {FWorksheet} This sheet, for chaining.
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Hide 3 rows starting from row index 1 (rows 2-4)
   * fWorksheet.hideRows(1, 3);
   * // Hide single row at index 0 (first row)
   * fWorksheet.hideRows(0);
   * ```
   */
  hideRows(e, t = 1) {
    const n = this._workbook.getUnitId(), r = this._worksheet.getSheetId(), s = {
      startRow: e,
      endRow: e + t - 1,
      startColumn: 0,
      endColumn: this._worksheet.getColumnCount() - 1,
      rangeType: w.ROW
    };
    return this._commandService.syncExecuteCommand(Ue.id, {
      unitId: n,
      subUnitId: r,
      ranges: [s]
    }), this;
  }
  /**
   * Make the row in the given range visible.
   * @param {FRange} row - The range to unhide, if hidden.
   * @returns {FWorksheet} This sheet, for chaining.
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Unhide 3 rows starting from row index 1 (rows 2-4)
   * const row1 = fWorksheet.getRange('2:4');
   * fWorksheet.unhideRow(row1);
   * // Unhide single row at index 0 (first row)
   * const row2 = fWorksheet.getRange('1:1');
   * fWorksheet.unhideRow(row2);
   * ```
   */
  unhideRow(e) {
    const t = this._workbook.getUnitId(), n = this._worksheet.getSheetId(), r = ne(e.getRange(), this._worksheet);
    return this._commandService.syncExecuteCommand(Pe.id, {
      unitId: t,
      subUnitId: n,
      ranges: [r]
    }), this;
  }
  /**
   * Scrolling sheet to make specific rows visible.
   * @param {number} rowIndex - The starting index of the rows
   * @param {number} numRows - The number of rows
   * @returns {FWorksheet} This worksheet instance for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Show 3 rows starting from row index 1 (rows 2-4)
   * fWorksheet.showRows(1, 3);
   * // Show single row at index 0 (first row)
   * fWorksheet.showRows(0);
   * ```
   */
  showRows(e, t = 1) {
    const n = this._workbook.getUnitId(), r = this._worksheet.getSheetId(), s = {
      startRow: e,
      endRow: e + t - 1,
      startColumn: 0,
      endColumn: this._worksheet.getColumnCount() - 1,
      rangeType: w.ROW
    };
    return this._commandService.syncExecuteCommand(Pe.id, {
      unitId: n,
      subUnitId: r,
      ranges: [s]
    }), this;
  }
  /**
   * Sets the row height of the given row in pixels. By default, rows grow to fit cell contents. If you want to force rows to a specified height, use setRowHeightsForced(startRow, numRows, height).
   * @param {number} rowPosition - The row position to change.
   * @param {number} height - The height in pixels to set it to.
   * @returns {FWorksheet} This worksheet instance for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Set the height of the second row to 30 pixels
   * fWorksheet.setRowHeight(1, 30);
   * // Set the height of the first row to 20 pixels
   * fWorksheet.setRowHeight(0, 20);
   * ```
   */
  setRowHeight(e, t) {
    return this.setRowHeights(e, 1, t);
  }
  /**
   * Make certain row wrap and auto height.
   * @param {number} rowPosition - The row position to change.
   * @param {BooleanNumber} auto - Whether to auto fit the row height.
   * @returns {FWorksheet} This worksheet instance for chaining
   * @example
   * ```ts
   * const fWorkSheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * fWorkSheet.autoFitRow(24);
   * ```
   */
  autoFitRow(e, t = m.TRUE) {
    const n = this._workbook.getUnitId(), r = this._worksheet.getSheetId(), s = [{
      startRow: e,
      endRow: e,
      startColumn: 0,
      endColumn: this._worksheet.getColumnCount() - 1
    }];
    return this._commandService.syncExecuteCommand(he.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: s[0],
      value: G.WRAP
    }), this._commandService.syncExecuteCommand(Vt.id, {
      unitId: n,
      subUnitId: r,
      ranges: s,
      autoHeightInfo: t
    }), this;
  }
  /**
   * Sets the height of the given rows in pixels.
   * By default, rows grow to fit cell contents. If you want to force rows to a specified height, use setRowHeightsForced(startRow, numRows, height).
   * @param {number} startRow - The starting row position to change
   * @param {number} numRows - The number of rows to change
   * @param {number} height - The height in pixels to set it to
   * @returns {FWorksheet} This worksheet instance for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * fWorksheet.setRowHeights(1, 10, 30);
   * ```
   */
  setRowHeights(e, t, n) {
    var d;
    const r = this._workbook.getUnitId(), s = this._worksheet.getSheetId(), o = this._worksheet.getRowManager(), i = [], h = [];
    for (let c = e; c < e + t; c++) {
      const l = ((d = o.getRow(c)) == null ? void 0 : d.ah) || this._worksheet.getConfig().defaultRowHeight, u = {
        startRow: c,
        endRow: c,
        startColumn: 0,
        endColumn: this._worksheet.getColumnCount() - 1
      };
      n <= l ? i.push(u) : h.push(u);
    }
    return h.length > 0 && this._commandService.syncExecuteCommand(xe.id, {
      unitId: r,
      subUnitId: s,
      ranges: h,
      value: n
    }), i.length > 0 && this._commandService.syncExecuteCommand(ee.id, {
      unitId: r,
      subUnitId: s,
      ranges: i
    }), this;
  }
  /**
   * Gets the height in pixels of the given row.
   * @param {number} rowPosition - The position of the row to examine. index starts at 0.
   * @returns {number} The height in pixels of the given row.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set the value of the cell A1 to 'Hello, Univer!', set the font size to 30 and font weight to bold
   * const fRange = fWorksheet.getRange('A1');
   * fRange.setValue('Hello, Univer!').setFontSize(30).setFontWeight('bold');
   *
   * // Get the height of the first row
   * console.log(fWorksheet.getRowHeight(0));
   * ```
   */
  getRowHeight(e) {
    return this._worksheet.getRowHeight(e);
  }
  /**
   * Sets the height of the given rows to auto.
   * @param {number} startRow - The starting row position to change
   * @param {number} numRows - The number of rows to change
   * @returns {FWorksheet} This worksheet instance for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * fWorksheet.setRowAutoHeight(1, 10);
   * ```
   */
  setRowAutoHeight(e, t) {
    const n = this._workbook.getUnitId(), r = this._worksheet.getSheetId(), s = [
      {
        startRow: e,
        endRow: e + t - 1,
        startColumn: 0,
        endColumn: this._worksheet.getColumnCount() - 1
      }
    ];
    return this._commandService.syncExecuteCommand(ee.id, {
      unitId: n,
      subUnitId: r,
      ranges: s
    }), this;
  }
  /**
   * Sets the height of the given ranges to auto.
   * @param {IRange[]} ranges - The ranges to change
   * @returns {FWorksheet} This worksheet instance for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * const ranges = [
   * { startRow: 1, endRow: 10, startColumn: 0, endColumn: 10 },
   * { startRow: 11, endRow: 20, startColumn: 0, endColumn: 10 },
   * ]
   * fWorksheet.setRangesAutoHeight(ranges);
   * ```
   */
  setRangesAutoHeight(e) {
    const t = this._workbook.getUnitId(), n = this._worksheet.getSheetId();
    return this._commandService.syncExecuteCommand(ee.id, {
      unitId: t,
      subUnitId: n,
      ranges: e
    }), this;
  }
  /**
   * Sets the height of the given rows in pixels. By default, rows grow to fit cell contents. When you use setRowHeightsForced, rows are forced to the specified height even if the cell contents are taller than the row height.
   * @param {number} startRow - The starting row position to change
   * @param {number} numRows - The number of rows to change
   * @param {number} height - The height in pixels to set it to
   * @returns {FWorksheet} This worksheet instance for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * fWorksheet.setRowHeightsForced(1, 10, 30);
   * ```
   */
  setRowHeightsForced(e, t, n) {
    const r = this._workbook.getUnitId(), s = this._worksheet.getSheetId(), o = [
      {
        startRow: e,
        endRow: e + t - 1,
        startColumn: 0,
        endColumn: this._worksheet.getColumnCount() - 1
      }
    ];
    return this._commandService.syncExecuteCommand(xe.id, {
      unitId: r,
      subUnitId: s,
      ranges: o,
      value: n
    }), this;
  }
  // #endregion
  /**
   * Set custom properties for given rows.
   * @param {IObjectArrayPrimitiveType<CustomData>} custom - The custom properties to set
   * @returns {FWorksheet} This worksheet instance for chaining
   * @example
   * ```typescript
   * const fWorkSheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * fWorkSheet.setRowCustom({ 0: { key: 'value' } });
   * ```
   */
  setRowCustom(e) {
    const t = this._workbook.getUnitId(), n = this._worksheet.getSheetId(), r = {};
    for (const [o, i] of Object.entries(e))
      r[Number(o)] = {
        custom: i
      };
    const s = {
      unitId: t,
      subUnitId: n,
      rowData: r
    };
    return this._commandService.syncExecuteCommand(Ee.id, s), this;
  }
  // #region Column
  /**
   * Inserts a column after the given column position.
   * @param {number} afterPosition - The column after which the new column should be added, starting at 0 for the first column
   * @returns {FWorksheet} This worksheet instance for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Insert a column after column C
   * fWorksheet.insertColumnAfter(2);
   * // Insert a column after column A
   * fWorksheet.insertColumnAfter(0);
   * ```
   */
  insertColumnAfter(e) {
    return this.insertColumnsAfter(e, 1);
  }
  /**
   * Inserts a column before the given column position.
   * @param {number} beforePosition - The column before which the new column should be added, starting at 0 for the first column
   * @returns {FWorksheet} This worksheet instance for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Insert a column before column C
   * fWorksheet.insertColumnBefore(2);
   * // Insert a column before column A
   * fWorksheet.insertColumnBefore(0);
   * ```
   */
  insertColumnBefore(e) {
    return this.insertColumnsBefore(e, 1);
  }
  /**
   * Inserts one or more consecutive blank columns in a sheet starting at the specified location.
   * @param {number} columnIndex - The index indicating where to insert a column, starting at 0 for the first column
   * @param {number} numColumns - The number of columns to insert
   * @returns {FWorksheet} This sheet, for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Insert 3 columns before column C
   * fWorksheet.insertColumns(2, 3);
   * // Insert 1 column before column A
   * fWorksheet.insertColumns(0);
   * ```
   */
  insertColumns(e, t = 1) {
    return this.insertColumnsBefore(e, t);
  }
  /**
   * Inserts a given number of columns after the given column position.
   * @param {number} afterPosition - The column after which the new columns should be added, starting at 0 for the first column
   * @param {number} howMany - The number of columns to insert
   * @returns {FWorksheet} This sheet, for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Insert 3 columns after column C
   * fWorksheet.insertColumnsAfter(2, 3);
   * // Insert 1 column after column A
   * fWorksheet.insertColumnsAfter(0, 1);
   * ```
   */
  insertColumnsAfter(e, t) {
    const n = this._workbook.getUnitId(), r = this._worksheet.getSheetId(), s = j.RIGHT, o = 0, i = this._worksheet.getRowCount() - 1, h = e + 1, d = e + t, c = L(this._worksheet, o, i, h, d, !1, e);
    return this._commandService.syncExecuteCommand(Me.id, {
      unitId: n,
      subUnitId: r,
      direction: s,
      range: {
        startRow: o,
        endRow: i,
        startColumn: h,
        endColumn: d
      },
      cellValue: c
    }), this;
  }
  /**
   * Inserts a number of columns before the given column position.
   * @param {number} beforePosition - The column before which the new columns should be added, starting at 0 for the first column
   * @param {number} howMany - The number of columns to insert
   * @returns {FWorksheet} This sheet, for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Insert 3 columns before column C
   * fWorksheet.insertColumnsBefore(2, 3);
   * // Insert 1 column before column A
   * fWorksheet.insertColumnsBefore(0, 1);
   * ```
   */
  insertColumnsBefore(e, t) {
    const n = this._workbook.getUnitId(), r = this._worksheet.getSheetId(), s = j.LEFT, o = 0, i = this._worksheet.getRowCount() - 1, h = e, d = e + t - 1, c = L(this._worksheet, o, i, h, d, !1, e - 1);
    return this._commandService.syncExecuteCommand(Me.id, {
      unitId: n,
      subUnitId: r,
      direction: s,
      range: {
        startRow: o,
        endRow: i,
        startColumn: h,
        endColumn: d
      },
      cellValue: c
    }), this;
  }
  /**
   * Deletes the column at the given column position.
   * @param {number} columnPosition - The position of the column, starting at 0 for the first column
   * @returns {FWorksheet} This sheet, for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Delete column C
   * fWorksheet.deleteColumn(2);
   * // Delete column A
   * fWorksheet.deleteColumn(0);
   * ```
   */
  deleteColumn(e) {
    return this.deleteColumns(e, 1);
  }
  /**
   * Deletes a number of columns starting at the given column position.
   * @param {number} columnPosition - The position of the first column to delete, starting at 0 for the first column
   * @param {number} howMany - The number of columns to delete
   * @returns {FWorksheet} This sheet, for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Delete 3 columns at column index 2 (columns C, D, E)
   * fWorksheet.deleteColumns(2, 3);
   * // Delete 1 column at column index 0 (column A)
   * fWorksheet.deleteColumns(0, 1);
   * ```
   */
  deleteColumns(e, t) {
    const n = {
      startRow: 0,
      endRow: this._worksheet.getRowCount() - 1,
      startColumn: e,
      endColumn: e + t - 1
    };
    return this._commandService.syncExecuteCommand(Ht.id, {
      range: n,
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId()
    }), this;
  }
  /**
   * Moves the columns selected by the given range to the position indicated by the destinationIndex. The columnSpec itself does not have to exactly represent an entire column or group of columns to move—it selects all columns that the range spans.
   * @param {FRange} columnSpec - A range spanning the columns that should be moved
   * @param {number} destinationIndex - The index that the columns should be moved to. Note that this index is based on the coordinates before the columns are moved. Existing data is shifted right to make room for the moved columns while the source columns are removed from the grid. Therefore, the data may end up at a different index than originally specified. Use 0-index for this method
   * @returns {FWorksheet} This sheet, for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Move columns C, D, E to column index 2 (columns B, C, D)
   * const columnSpec1 = fWorksheet.getRange('C:E');
   * fWorksheet.moveColumns(columnSpec1, 1);
   * // Move column F to column index 0 (column A)
   * const columnSpec2 = fWorksheet.getRange('F:F');
   * fWorksheet.moveColumns(columnSpec2, 0);
   * ```
   */
  moveColumns(e, t) {
    const n = this._workbook.getUnitId(), r = this._worksheet.getSheetId(), s = re(e.getRange(), this._worksheet), o = s, i = {
      startRow: 0,
      endRow: this._worksheet.getRowCount() - 1,
      startColumn: t,
      endColumn: t
    };
    return this._commandService.syncExecuteCommand(Ot.id, {
      unitId: n,
      subUnitId: r,
      range: s,
      fromRange: o,
      toRange: i
    }), this;
  }
  /**
   * Hides the column or columns in the given range.
   * @param {FRange} column - The column range to hide
   * @returns {FWorksheet} This sheet, for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Hide columns C, D, E
   * const column1 = fWorksheet.getRange('C:E');
   * fWorksheet.hideColumn(column1);
   * // Hide column A
   * const column2 = fWorksheet.getRange('A:A');
   * fWorksheet.hideColumn(column2);
   * ```
   */
  hideColumn(e) {
    const t = this._workbook.getUnitId(), n = this._worksheet.getSheetId(), r = re(e.getRange(), this._worksheet);
    return this._commandService.syncExecuteCommand(Ne.id, {
      unitId: t,
      subUnitId: n,
      ranges: [r]
    }), this;
  }
  /**
   * Hides one or more consecutive columns starting at the given index. Use 0-index for this method
   * @param {number} columnIndex - The starting index of the columns to hide
   * @param {number} numColumn - The number of columns to hide
   * @returns {FWorksheet} This sheet, for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Hide columns C, D, E
   * fWorksheet.hideColumns(2, 3);
   * // Hide column A
   * fWorksheet.hideColumns(0, 1);
   * ```
   */
  hideColumns(e, t = 1) {
    const n = this._workbook.getUnitId(), r = this._worksheet.getSheetId(), s = {
      startRow: 0,
      endRow: this._worksheet.getRowCount() - 1,
      startColumn: e,
      endColumn: e + t - 1,
      rangeType: w.COLUMN
    };
    return this._commandService.syncExecuteCommand(Ne.id, {
      unitId: n,
      subUnitId: r,
      ranges: [s]
    }), this;
  }
  /**
   * Show the column in the given range.
   * @param {FRange} column - The range to unhide, if hidden
   * @returns {FWorksheet} This sheet, for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Unhide columns C, D, E
   * const column1 = fWorksheet.getRange('C:E');
   * fWorksheet.unhideColumn(column1);
   * // Unhide column A
   * const column2 = fWorksheet.getRange('A:A');
   * fWorksheet.unhideColumn(column2);
   * ```
   */
  unhideColumn(e) {
    const t = this._workbook.getUnitId(), n = this._worksheet.getSheetId(), r = re(e.getRange(), this._worksheet);
    return this._commandService.syncExecuteCommand(Te.id, {
      unitId: t,
      subUnitId: n,
      ranges: [r]
    }), this;
  }
  /**
   * Show one or more consecutive columns starting at the given index. Use 0-index for this method
   * @param {number} columnIndex - The starting index of the columns to unhide
   * @param {number} numColumns - The number of columns to unhide
   * @returns {FWorksheet} This sheet, for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Unhide columns C, D, E
   * fWorksheet.showColumns(2, 3);
   * // Unhide column A
   * fWorksheet.showColumns(0, 1);
   * ```
   */
  showColumns(e, t = 1) {
    const n = this._workbook.getUnitId(), r = this._worksheet.getSheetId(), s = {
      startRow: 0,
      endRow: this._worksheet.getRowCount() - 1,
      startColumn: e,
      endColumn: e + t - 1,
      rangeType: w.COLUMN
    };
    return this._commandService.syncExecuteCommand(Te.id, {
      unitId: n,
      subUnitId: r,
      ranges: [s]
    }), this;
  }
  /**
   * Sets the width of the given column in pixels.
   * @param {number} columnPosition - The position of the given column to set
   * @param {number} width - The width in pixels to set it to
   * @returns {FWorksheet} This sheet, for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Set width of column B to 100 pixels
   * fWorksheet.setColumnWidth(1, 100);
   * ```
   */
  setColumnWidth(e, t) {
    return this.setColumnWidths(e, 1, t);
  }
  /**
   * Sets the width of the given columns in pixels.
   * @param {number} startColumn - The starting column position to change
   * @param {number} numColumn - The number of columns to change
   * @param {number} width - The width in pixels to set it to
   * @returns {FWorksheet} This sheet, for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Set width of columns B-D (index 1-3) to 100 pixels
   * fWorksheet.setColumnWidths(1, 3, 100);
   * ```
   */
  setColumnWidths(e, t, n) {
    const r = this._workbook.getUnitId(), s = this._worksheet.getSheetId(), o = [
      {
        startColumn: e,
        endColumn: e + t - 1,
        startRow: 0,
        endRow: this._worksheet.getRowCount() - 1
      }
    ];
    return this._commandService.syncExecuteCommand(jt.id, {
      unitId: r,
      subUnitId: s,
      ranges: o,
      value: n
    }), this;
  }
  /**
   * Gets the width in pixels of the given column.
   * @param {number} columnPosition - The position of the column to examine. index starts at 0.
   * @returns {number} The width of the column in pixels
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set the long text value in cell A1
   * const fRange = fWorksheet.getRange('A1');
   * fRange.setValue('Whenever it is a damp, drizzly November in my soul...');
   *
   * // Set the column A to a width which fits the text
   * fWorksheet.autoResizeColumn(0);
   *
   * // Get the width of the column A
   * console.log(fWorksheet.getColumnWidth(0));
   * ```
   */
  getColumnWidth(e) {
    return this._worksheet.getColumnWidth(e);
  }
  // #endregion
  /**
   * Set custom properties for given columns.
   * @param {IObjectArrayPrimitiveType<CustomData>} custom - The custom properties to set
   * @returns {FWorksheet} This worksheet instance for chaining
   * @example
   * ```ts
   * const fWorkSheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * fWorkSheet.setColumnCustom({ 0: { key: 'value' } });
   * ```
   */
  setColumnCustom(e) {
    const t = this._workbook.getUnitId(), n = this._worksheet.getSheetId(), r = {};
    for (const [o, i] of Object.entries(e))
      r[Number(o)] = {
        custom: i
      };
    const s = {
      unitId: t,
      subUnitId: n,
      columnData: r
    };
    return this._commandService.syncExecuteCommand(pe.id, s), this;
  }
  // #region merge cells
  /**
   * Get all merged cells in the current worksheet
   * @returns {FRange[]} All the merged cells in the worksheet
   * @example
   * ```ts
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Get all merged ranges in the sheet
   * const mergedData = fWorksheet.getMergeData();
   * // Process each merged range
   * mergedData.forEach(range => {
   *   console.log(range.getA1Notation());
   * });
   * ```
   */
  getMergeData() {
    return this._worksheet.getMergeData().map((e) => this._injector.createInstance(k, this._workbook, this._worksheet, e));
  }
  /**
   * Get all merged cells in the current sheet
   * @returns {FRange[]} all merged cells
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Get all merged ranges in the sheet
   * const mergedRanges = fWorksheet.getMergedRanges();
   * // Process each merged range
   * mergedRanges.forEach(range => {
   *   console.log(range.getA1Notation());
   * });
   * ```
   */
  getMergedRanges() {
    return this._worksheet.getSnapshot().mergeData.map((t) => this._injector.createInstance(k, this._workbook, this._worksheet, t));
  }
  /**
   * Get the merged cell data of the specified row and column.
   * @param {number} row - The row index
   * @param {number} column - The column index
   * @returns {FRange|undefined} The merged cell data, or undefined if the cell is not merged
   * @example
   * ```ts
   * const fWorkSheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * const merge = fWorkSheet.getCellMergeData(0, 0);
   * if (merge) {
   *   console.log('Merged range:', merge.getA1Notation());
   * }
   * ```
   */
  getCellMergeData(e, t) {
    const r = this._worksheet.getMergedCell(e, t);
    if (r)
      return this._injector.createInstance(k, this._workbook, this._worksheet, r);
  }
  // #endregion
  /**
   * Returns the selected range in the active sheet, or null if there is no active range.
   * @returns {FRange | null} the active range
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Get the currently active range
   * const activeRange = fWorksheet.getActiveRange();
   * if (activeRange) {
   *   console.log('Active range:', activeRange.getA1Notation());
   * }
   * ```
   */
  getActiveRange() {
    return this._fWorkbook.getActiveRange();
  }
  /**
   * Sets the active selection region for this sheet.
   * @param {FRange} range - The range to set as the active selection
   * @returns {FWorksheet} This sheet, for chaining
   * @example
   * ```ts
   * const fWorkSheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * fWorkSheet.setActiveRange(fWorkSheet.getRange('A10:B10'));
   * ```
   */
  setActiveRange(e) {
    const { unitId: t, sheetId: n } = e.getRange();
    if (t !== this._workbook.getUnitId() || n !== this._worksheet.getSheetId())
      throw new Error("Specified range must be part of the sheet.");
    return this._fWorkbook.setActiveRange(e), this;
  }
  /**
   * Returns the active cell in this sheet.
   * @returns {FRange | null} The active cell
   * @example
   * ```typescript
   * const fWorkSheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * console.log(fWorkSheet.getActiveCell().getA1Notation());
   * ```
   */
  getActiveCell() {
    return this._fWorkbook.getActiveCell();
  }
  /**
   * Sets the frozen state of the current sheet.
   * @param {IFreeze} freeze - the scrolling viewport start range and count of freezed rows and columns.
   * that means if you want to freeze the first 3 rows and 2 columns, you should set freeze as { startRow: 3, startColumn: 2, xSplit: 2, ySplit: 3 }
   * @deprecated use `setFrozenRows` and `setFrozenColumns` instead.
   * @returns {FWorksheet} This worksheet instance for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Freeze first 3 rows and 2 columns
   * fWorksheet.setFreeze({
   *   startRow: 3,
   *   startColumn: 2,
   *   xSplit: 2,
   *   ySplit: 3
   * });
   * ```
   */
  setFreeze(e) {
    return this._logService.warn("setFreeze is deprecated, use setFrozenRows and setFrozenColumns instead"), this._commandService.syncExecuteCommand(te.id, {
      ...e,
      unitId: this._workbook.getUnitId(),
      subUnitId: this.getSheetId()
    }), this;
  }
  /**
   * Cancels the frozen state of the current sheet.
   * @returns {FWorksheet} This worksheet instance for chaining
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Cancel freeze
   * fWorksheet.cancelFreeze();
   * ```
   */
  cancelFreeze() {
    return this._commandService.syncExecuteCommand(Lt.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this.getSheetId()
    }), this;
  }
  /**
   * Get the freeze state of the current sheet.
   * @returns {IFreeze} The freeze state of the current sheet
   * @example
   * ```typescript
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Get the freeze state of the current sheet
   * const freeze = fWorksheet.getFreeze();
   * console.log(freeze);
   * ```
   */
  getFreeze() {
    return this._worksheet.getFreeze();
  }
  setFrozenColumns(...e) {
    const t = this.getFreeze();
    if (arguments.length === 1) {
      const n = e[0];
      this.setFreeze({
        ...t,
        startColumn: n > 0 ? n : -1,
        xSplit: n
      });
    } else if (arguments.length === 2) {
      let [n = 0, r = 0] = e;
      n > r && ([n, r] = [r, n]), this._commandService.syncExecuteCommand(te.id, {
        startColumn: r + 1,
        xSplit: r - n + 1,
        startRow: t.startRow,
        ySplit: t.ySplit,
        unitId: this._workbook.getUnitId(),
        subUnitId: this.getSheetId()
      });
    }
    return this;
  }
  setFrozenRows(...e) {
    const t = this.getFreeze();
    if (arguments.length === 1) {
      const n = e[0];
      this.setFreeze({
        ...t,
        startRow: n > 0 ? n : -1,
        ySplit: n
      });
    } else if (arguments.length === 2) {
      let [n = 0, r = 0] = e;
      n > r && ([n, r] = [r, n]), this._commandService.syncExecuteCommand(te.id, {
        startRow: r + 1,
        ySplit: r - n + 1,
        startColumn: t.startColumn,
        xSplit: t.xSplit,
        unitId: this._workbook.getUnitId(),
        subUnitId: this.getSheetId()
      });
    }
    return this;
  }
  /**
   * Get the number of frozen columns.
   * @returns {number} The number of frozen columns, returns 0 if no columns are frozen.
   * @example
   * ```typescript
   * const fWorkSheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Get the number of frozen columns
   * const frozenColumns = fWorkSheet.getFrozenColumns();
   * console.log(frozenColumns);
   * ```
   */
  getFrozenColumns() {
    const e = this.getFreeze();
    return e.startColumn === -1 ? 0 : e.startColumn;
  }
  /**
   * Get the number of frozen rows.
   * @returns {number} The number of frozen rows. returns 0 if no rows are frozen.
   * @example
   * ```typescript
   * const fWorkSheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Get the number of frozen rows
   * const frozenRows = fWorkSheet.getFrozenRows();
   * console.log(frozenRows);
   * ```
   */
  getFrozenRows() {
    const e = this.getFreeze();
    return e.startRow === -1 ? 0 : e.startRow;
  }
  /**
   * Get freezed rows.
   * @returns {IRowRange} The range of the frozen rows.
   * @example
   * ```ts
   * const fWorkSheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Get the range of the frozen rows
   * const frozenRows = fWorkSheet.getFrozenRowRange();
   * console.log(frozenRows);
   * ```
   */
  getFrozenRowRange() {
    const e = this._worksheet.getFreeze();
    return {
      startRow: e.startRow - e.ySplit,
      endRow: e.startRow - 1
    };
  }
  /**
   * Get freezed columns
   * @returns {IColumnRange} The range of the frozen columns.
   * @example
   * ```ts
   * const fWorkSheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // Get the range of the frozen columns
   * const frozenColumns = fWorkSheet.getFrozenColumnRange();
   * console.log(frozenColumns);
   * ```
   */
  getFrozenColumnRange() {
    const e = this._worksheet.getFreeze();
    return {
      startColumn: e.startColumn - e.xSplit,
      endColumn: e.startColumn - 1
    };
  }
  /**
   * Returns true if the sheet's gridlines are hidden; otherwise returns false. Gridlines are visible by default.
   * @returns {boolean} True if the sheet's gridlines are hidden; otherwise false.
   * @example
   * ```ts
   * const fWorkSheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // check if the gridlines are hidden
   * if (fWorkSheet.hasHiddenGridLines()) {
   *    console.log('Gridlines are hidden');
   * }
   * ```
   */
  hasHiddenGridLines() {
    return this._worksheet.getConfig().showGridlines === m.FALSE;
  }
  /**
   * Hides or reveals the sheet gridlines.
   * @param {boolean} hidden - If `true`, hide gridlines in this sheet; otherwise show the gridlines.
   * @returns {FWorksheet} Returns the current worksheet instance for method chaining
   * @example
   * ``` ts
   * const fWorkSheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // hide the gridlines
   * fWorkSheet.setHiddenGridlines(true);
   * ```
   */
  setHiddenGridlines(e) {
    return this._commandService.syncExecuteCommand(de.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      showGridlines: e ? m.FALSE : m.TRUE
    }), this;
  }
  /**
   * Set the color of the gridlines in the sheet.
   * @param {string|undefined} color - The color to set for the gridlines.Undefined or null to reset to the default color.
   * @returns {FWorksheet} Returns the current worksheet instance for method chaining
   * @example
   * ```ts
   * const fWorkSheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * // set the gridlines color to red
   * fWorkSheet.setGridLinesColor('#ff0000');
   * ```
   */
  setGridLinesColor(e) {
    return this._commandService.syncExecuteCommand(ce.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      color: e
    }), this;
  }
  /**
   * Get the color of the gridlines in the sheet.
   * @returns {string | undefined} The color of the gridlines in the sheet or undefined. The default color is 'rgb(214, 216, 219)'.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * // get the gridlines color of the sheet
   * console.log(fWorkSheet.getGridLinesColor());
   * ```
   */
  getGridLinesColor() {
    return this._worksheet.getGridlinesColor();
  }
  /**
   * Sets the sheet tab color.
   * @param {string|null|undefined} color - A color code in CSS notation (like '#ffffff' or 'white'), or null to reset the tab color.
   * @returns {FWorksheet} Returns the current worksheet instance for method chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * // set the tab color to red
   * fWorkSheet.setTabColor('#ff0000');
   * ```
   */
  setTabColor(e) {
    return this._commandService.syncExecuteCommand(zt.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      value: e
    }), this;
  }
  /**
   * Get the tab color of the sheet.
   * @returns {string} The tab color of the sheet or undefined.
   * The default color is css style property 'unset'.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * // get the tab color of the sheet
   * console.log(fWorkSheet.getTabColor());
   * ```
   */
  getTabColor() {
    return this._worksheet.getTabColor();
  }
  /**
   * @deprecated use `univerAPI.addEvent(univerAPI.Event.SheetValueChanged, (params) => {})` instead
   */
  onCellDataChange(e) {
    return this._injector.get(_).onCommandExecuted((n) => {
      if (n.id === Ae.id) {
        const r = n.params;
        r.unitId === this._workbook.getUnitId() && r.subUnitId === this._worksheet.getSheetId() && r.cellValue && e(new X(r.cellValue));
      }
    });
  }
  /**
   * @deprecated use `univerAPI.addEvent(univerAPI.Event.BeforeSheetEditEnd, (params) => {})` instead
   */
  onBeforeCellDataChange(e) {
    return this._injector.get(_).beforeCommandExecuted((n) => {
      if (n.id === Ae.id) {
        const r = n.params;
        r.unitId === this._workbook.getUnitId() && r.subUnitId === this._worksheet.getSheetId() && r.cellValue && e(new X(r.cellValue));
      }
    });
  }
  /**
   * Hides this sheet. Has no effect if the sheet is already hidden. If this method is called on the only visible sheet, it throws an exception.
   * @returns {FWorksheet} Returns the current worksheet instance for method chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * // hide the active sheet
   * fWorkSheet.hideSheet();
   * ```
   */
  hideSheet() {
    const e = this._injector.get(_);
    if (this._workbook.getSheets().filter((s) => s.isSheetHidden() !== m.TRUE).length <= 1)
      throw new Error("Cannot hide the only visible sheet");
    return e.syncExecuteCommand(Gt.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId()
    }), this;
  }
  /**
   * Shows this sheet. Has no effect if the sheet is already visible.
   * @returns {FWorksheet} Returns the current worksheet instance for method chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheets = fWorkbook.getSheets();
   * // show the last sheet
   * fWorkSheets[fWorkSheets.length - 1].showSheet();
   * ```
   */
  showSheet() {
    return this._injector.get(_).syncExecuteCommand($t.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId()
    }), this;
  }
  /**
   * Returns true if the sheet is currently hidden.
   * @returns {boolean} True if the sheet is hidden; otherwise, false.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheets = fWorkbook.getSheets();
   * // check if the last sheet is hidden
   * console.log(fWorkSheets[fWorkSheets.length - 1].isSheetHidden());
   * ```
   */
  isSheetHidden() {
    return this._worksheet.isSheetHidden() === m.TRUE;
  }
  /**
   * Sets the sheet name.
   * @param {string} name - The new name for the sheet.
   * @returns {FWorksheet} Returns the current worksheet instance for method chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * // set the sheet name to 'Sheet1'
   * fWorkSheet.setName('NewSheet1');
   * ```
   */
  setName(e) {
    return this._commandService.syncExecuteCommand(ue.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      name: e
    }), this;
  }
  /**
   * Activates this sheet. Does not alter the sheet itself, only the parent's notion of the active sheet.
   * @returns {FWorksheet} Current sheet, for chaining.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheets = fWorkbook.getSheets();
   * // activate the last sheet
   * fWorkSheets[fWorkSheets.length - 1].activate();
   * ```
   */
  activate() {
    return this._fWorkbook.setActiveSheet(this), this;
  }
  /**
   * Gets the position of the sheet in its parent spreadsheet. Starts at 0.
   * @returns {number} The position of the sheet in its parent spreadsheet.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * // get the position of the active sheet
   * const position = fWorkSheet.getIndex();
   * console.log(position);
   * ```
   */
  getIndex() {
    return this._workbook.getSheetIndex(this._worksheet);
  }
  /**
   * Clears the sheet of content and formatting information.Or Optionally clears only the contents or only the formatting.
   * @param {IFacadeClearOptions} [options] - Options for clearing the sheet. If not provided, the contents and formatting are cleared both.
   * @param {boolean} [options.contentsOnly] - If true, the contents of the sheet are cleared. If false, the contents and formatting are cleared. Default is false.
   * @param {boolean} [options.formatOnly] - If true, the formatting of the sheet is cleared. If false, the contents and formatting are cleared. Default is false.
   * @returns {FWorksheet} Returns the current worksheet instance for method chaining
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * // clear the sheet of content and formatting information
   * fWorkSheet.clear();
   * // clear the sheet of content only
   * fWorkSheet.clear({ contentsOnly: true });
   * ```
   */
  clear(e) {
    if (e && e.contentsOnly && !e.formatOnly)
      return this.clearContents();
    if (e && e.formatOnly && !e.contentsOnly)
      return this.clearFormats();
    const t = this._workbook.getUnitId(), n = this._worksheet.getSheetId(), r = this._injector.get(_), s = {
      startRow: 0,
      endRow: this._worksheet.getRowCount() - 1,
      startColumn: 0,
      endColumn: this._worksheet.getColumnCount() - 1
    };
    return r.syncExecuteCommand(Xe.id, {
      unitId: t,
      subUnitId: n,
      ranges: [s],
      options: e
    }), this;
  }
  /**
   * Clears the sheet of contents, while preserving formatting information.
   * @returns {FWorksheet} Returns the current worksheet instance for method chaining
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * // clear the sheet of content only
   * fWorkSheet.clearContents();
   * ```
   */
  clearContents() {
    const e = this._workbook.getUnitId(), t = this._worksheet.getSheetId(), n = this._injector.get(_), r = {
      startRow: 0,
      endRow: this._worksheet.getRowCount() - 1,
      startColumn: 0,
      endColumn: this._worksheet.getColumnCount() - 1
    };
    return n.syncExecuteCommand(Ze.id, {
      unitId: e,
      subUnitId: t,
      ranges: [r]
    }), this;
  }
  /**
   * Clears the sheet of formatting, while preserving contents.
   * @returns {FWorksheet} Returns the current worksheet instance for method chaining
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * // clear the sheet of formatting only
   * fWorkSheet.clearFormats();
   * ```
   */
  clearFormats() {
    const e = this._workbook.getUnitId(), t = this._worksheet.getSheetId(), n = this._injector.get(_), r = {
      startRow: 0,
      endRow: this._worksheet.getRowCount() - 1,
      startColumn: 0,
      endColumn: this._worksheet.getColumnCount() - 1
    };
    return n.syncExecuteCommand(et.id, {
      unitId: e,
      subUnitId: t,
      ranges: [r]
    }), this;
  }
  /**
   * Returns a Range corresponding to the dimensions in which data is present.
   * This is functionally equivalent to creating a Range bounded by A1 and (Sheet.getLastColumns(), Sheet.getLastRows()).
   * @returns {FRange} The range of the data in the sheet.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * // Assume the sheet is a empty sheet
   * const cellRange = fWorkSheet.getRange('J50');
   * cellRange.setValue('Hello World');
   * console.log(fWorkSheet.getDataRange().getA1Notation()); // A1:J50
   * ```
   */
  getDataRange() {
    const e = this.getLastRows(), t = this.getLastColumns();
    return this.getRange(0, 0, e + 1, t + 1);
  }
  /**
   * @deprecated use `getLastColumn` instead.
   * Returns the column index of the last column that contains content.
   * @returns {number} the column index of the last column that contains content.
   */
  getLastColumns() {
    return this._worksheet.getLastColumnWithContent();
  }
  /**
   * Returns the column index of the last column that contains content.
   * @returns {number} the column index of the last column that contains content.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * // Assume the sheet is a empty sheet
   * const cellRange = fWorkSheet.getRange('J50');
   * cellRange.setValue('Hello World');
   * console.log(fWorkSheet.getLastColumn()); // 9
   * ```
   */
  getLastColumn() {
    return this._worksheet.getLastColumnWithContent();
  }
  /**
   * @deprecated use `getLastRow` instead.
   * Returns the row index of the last row that contains content.
   * @returns {number} the row index of the last row that contains content.
   */
  getLastRows() {
    return this._worksheet.getLastRowWithContent();
  }
  /**
   * Returns the row index of the last row that contains content.
   * @returns {number} the row index of the last row that contains content.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * // Assume the sheet is a empty sheet
   * const cellRange = fWorkSheet.getRange('J50');
   * cellRange.setValue('Hello World');
   * console.log(fWorkSheet.getLastRow()); // 49
   * ```
   */
  getLastRow() {
    return this._worksheet.getLastRowWithContent();
  }
  /**
   * Judge whether provided FWorksheet is equal to current.
   * @param {FWorksheet} other - the FWorksheet to compare with.
   * @returns {boolean} true if the FWorksheet is equal to the current FWorksheet, false otherwise.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const sheets = fWorkbook.getSheets();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * console.log(fWorkSheet.equalTo(sheets[0])); // true, if the active sheet is the first sheet.
   * ```
   */
  equalTo(e) {
    return e instanceof S ? this._worksheet.getSheetId() === e.getSheetId() && this._workbook.getUnitId() === e.getWorkbook().getUnitId() : !1;
  }
  /**
   * Insert a defined name for worksheet.
   * @param {string} name - The name of the defined name to insert
   * @param {string} formulaOrRefString - The formula(=sum(A2:b10)) or reference(A1) string of the defined name to insert
   * @example
   * ```ts
   * // The code below inserts a defined name
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * fWorksheet.insertDefinedName('MyDefinedName', 'Sheet1!$A$1');
   * ```
   */
  insertDefinedName(e, t) {
    const r = this._injector.createInstance(Q).setName(e).setRef(t).build();
    r.localSheetId = this.getSheetId(), this._fWorkbook.insertDefinedNameBuilder(r);
  }
  /**
   * Get all the defined names in the worksheet.
   * @returns {FDefinedName[]} All the defined names in the worksheet
   * @example
   * ```ts
   * // The code below gets all the defined names in the worksheet
   * const fWorksheet = univerAPI.getActiveWorkbook().getActiveSheet();
   * const definedNames = fWorksheet.getDefinedNames();
   * console.log(definedNames, definedNames[0]?.getFormulaOrRefString());
   * ```
   */
  getDefinedNames() {
    return this._fWorkbook.getDefinedNames().filter((t) => t.getLocalSheetId() === this.getSheetId());
  }
  /**
   * Set custom metadata of worksheet
   * @param {CustomData | undefined} custom - custom metadata
   * @returns {FWorksheet} Current worksheet, for chaining.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * fWorkSheet.setCustomMetadata({ key: 'value' });
   * ```
   */
  setCustomMetadata(e) {
    return this._worksheet.setCustomMetadata(e), this;
  }
  /**
   * Get custom metadata of worksheet
   * @returns {CustomData | undefined} custom metadata
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * const custom = fWorkSheet.getCustomMetadata();
   * console.log(custom);
   * ```
   */
  getCustomMetadata() {
    return this._worksheet.getCustomMetadata();
  }
  /**
   * Set custom metadata of row
   * @param {number} index - row index
   * @param {CustomData | undefined} custom - custom metadata
   * @returns {FWorksheet} Current worksheet, for chaining.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * fWorkSheet.setRowCustomMetadata(0, { key: 'value' });
   * ```
   */
  setRowCustomMetadata(e, t) {
    return this._worksheet.getRowManager().setCustomMetadata(e, t), this;
  }
  /**
   * Set custom metadata of column
   * @param {number} index - column index
   * @param {CustomData | undefined} custom - custom metadata
   * @returns {FWorksheet} Current worksheet, for chaining.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * fWorkSheet.setColumnCustomMetadata(0, { key: 'value' });
   * ```
   */
  setColumnCustomMetadata(e, t) {
    return this._worksheet.getColumnManager().setCustomMetadata(e, t), this;
  }
  /**
   * Get custom metadata of row
   * @param {number} index - row index
   * @returns {CustomData | undefined} custom metadata
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * const custom = fWorkSheet.getRowCustomMetadata(0);
   * console.log(custom);
   * ```
   */
  getRowCustomMetadata(e) {
    return this._worksheet.getRowManager().getCustomMetadata(e);
  }
  /**
   * Get custom metadata of column
   * @param {number} index - column index
   * @returns {CustomData | undefined} custom metadata
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * const custom = fWorkSheet.getColumnCustomMetadata(0);
   * console.log(custom);
   * ```
   */
  getColumnCustomMetadata(e) {
    return this._worksheet.getColumnManager().getCustomMetadata(e);
  }
  /**
   * Appends a row to the bottom of the current data region in the sheet. If a cell's content begins with =, it's interpreted as a formula.
   * @param {CellValue[]} rowContents - An array of values for the new row.
   * @returns {FWorksheet} Returns the current worksheet instance for method chaining.
   * @example
   * ```ts
   * // Appends a new row with 4 columns to the bottom of the current
   * // data region in the sheet containing the values in the array.
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   * fWorkSheet.appendRow([1, 'Hello Univer', true, '=A1']);
   * ```
   */
  appendRow(e) {
    const t = this._worksheet.getCellMatrix().hasValue(), n = this._worksheet.getLastRowWithContent(), r = this._worksheet.getRowCount(), s = this._worksheet.getColumnCount(), o = t ? n + 1 : n, i = new X();
    for (let h = 0; h < e.length; h++)
      i.setValue(o, h, oe(e[h]));
    return this._commandService.syncExecuteCommand(qt.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      cellValue: i.getMatrix(),
      insertRowNums: o > r - 1 ? 1 : 0,
      insertColumnNums: e.length > s ? e.length - s : 0,
      maxRows: r,
      maxColumns: s
    }), this;
  }
  /**
   * Sets the number of rows in the worksheet.
   * @param {number} rowCount - The number of rows to set.
   * @returns {FWorksheet} Returns the current worksheet instance for method chaining.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   *
   * // Set the number of rows in the worksheet to 40
   * fWorkSheet.setRowCount(40);
   * ```
   */
  setRowCount(e) {
    return this._commandService.syncExecuteCommand(Kt.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      rowCount: e
    }), this;
  }
  /**
   * Sets the number of columns in the worksheet.
   * @param {number} columnCount - The number of columns to set.
   * @returns {FWorksheet} Returns the current worksheet instance for method chaining.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorkSheet = fWorkbook.getActiveSheet();
   *
   * // Set the number of columns in the worksheet to 10
   * fWorkSheet.setColumnCount(10);
   * ```
   */
  setColumnCount(e) {
    return this._commandService.syncExecuteCommand(Yt.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      columnCount: e
    }), this;
  }
};
S = pn([
  z(3, g(M)),
  z(4, g(tt)),
  z(5, g(ze)),
  z(6, _)
], S);
var En = Object.getOwnPropertyDescriptor, yn = (a, e, t, n) => {
  for (var r = n > 1 ? void 0 : n ? En(e, t) : e, s = a.length - 1, o; s >= 0; s--)
    (o = a[s]) && (r = o(r) || r);
  return r;
}, R = (a, e) => (t, n) => e(t, n, a);
let C = class extends _e {
  constructor(e, t, n, r, s, o, i, h, d, c) {
    super(t);
    b(this, "id");
    this._workbook = e, this._injector = t, this._resourceLoaderService = n, this._selectionManagerService = r, this._univerInstanceService = s, this._commandService = o, this._permissionService = i, this._logService = h, this._localeService = d, this._definedNamesService = c, this.id = this._workbook.getUnitId();
  }
  /**
   * Get the Workbook instance.
   * @returns {Workbook} The Workbook instance.
   * @example
   * ```ts
   * // The code below gets the Workbook instance
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const workbook = fWorkbook.getWorkbook();
   * console.log(workbook);
   * ```
   */
  getWorkbook() {
    return this._workbook;
  }
  dispose() {
    super.dispose(), this._workbook = null;
  }
  /**
   * Get the id of the workbook.
   * @returns {string} The id of the workbook.
   * @example
   * ```ts
   * // The code below gets the id of the workbook
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const unitId = fWorkbook.getId();
   * console.log(unitId);
   * ```
   */
  getId() {
    return this.id;
  }
  /**
   * Get the name of the workbook.
   * @returns {string} The name of the workbook.
   * @example
   * ```ts
   * // The code below gets the name of the workbook
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const name = fWorkbook.getName();
   * console.log(name);
   * ```
   */
  getName() {
    return this._workbook.name;
  }
  /**
   * Set the name of the workbook.
   * @param {string} name The new name of the workbook.
   * @example
   * ```ts
   * // The code below sets the name of the workbook
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * fWorkbook.setName('MyWorkbook');
   * ```
   */
  setName(e) {
    return this._commandService.syncExecuteCommand(Jt.id, {
      unitId: this._workbook.getUnitId(),
      name: e
    }), this;
  }
  /**
   * Save workbook snapshot data, including conditional formatting, data validation, and other plugin data.
   * @returns {IWorkbookData} Workbook snapshot data
   * @example
   * ```ts
   * // The code below saves the workbook snapshot data
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const snapshot = fWorkbook.save();
   * console.log(snapshot);
   * ```
   */
  save() {
    return this._resourceLoaderService.saveUnit(this._workbook.getUnitId());
  }
  /**
   * @deprecated use 'save' instead.
   * @returns {IWorkbookData} Workbook snapshot data
   * @memberof FWorkbook
   * @example
   * ```ts
   * // The code below saves the workbook snapshot data
   * const activeSpreadsheet = univerAPI.getActiveWorkbook();
   * const snapshot = activeSpreadsheet.getSnapshot();
   * ```
   */
  getSnapshot() {
    return this._logService.warn("use 'save' instead of 'getSnapshot'"), this.save();
  }
  /**
   * Get the active sheet of the workbook.
   * @returns {FWorksheet} The active sheet of the workbook
   * @example
   * ```ts
   * // The code below gets the active sheet of the workbook
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * console.log(fWorksheet);
   * ```
   */
  getActiveSheet() {
    const e = this._workbook.getActiveSheet();
    return this._injector.createInstance(S, this, this._workbook, e);
  }
  /**
   * Gets all the worksheets in this workbook
   * @returns {FWorksheet[]} An array of all the worksheets in the workbook
   * @example
   * ```ts
   * // The code below gets all the worksheets in the workbook
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const sheets = fWorkbook.getSheets();
   * console.log(sheets);
   * ```
   */
  getSheets() {
    return this._workbook.getSheets().map((e) => this._injector.createInstance(S, this, this._workbook, e));
  }
  /**
   * Create a new worksheet and returns a handle to it.
   * @param {string} name Name of the new sheet
   * @param {number} rows How many rows would the new sheet have
   * @param {number} columns How many columns would the new sheet have
   * @param {Pick<IInsertSheetCommandParams, 'index' | 'sheet'>} [options] The options for the new sheet
   * @param {number} [options.index] The position index where the new sheet is to be inserted
   * @param {Partial<IWorksheetData>} [options.sheet] The data configuration for the new sheet
   * @returns {FWorksheet} The new created sheet
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   *
   * // Create a new sheet named 'MyNewSheet' with 10 rows and 10 columns
   * const newSheet = fWorkbook.create('MyNewSheet', 10, 10);
   * console.log(newSheet);
   *
   * // Create a new sheet named 'MyNewSheetWithData' with 10 rows and 10 columns and some data, and set it as the first sheet
   * const sheetData = {
   *   // ... Omit other properties
   *   cellData: {
   *     0: {
   *       0: {
   *         v: 'Hello Univer!',
   *       }
   *     }
   *   },
   *   // ... Omit other properties
   * };
   * const newSheetWithData = fWorkbook.create('MyNewSheetWithData', 10, 10, {
   *   index: 0,
   *   sheet: sheetData,
   * });
   * console.log(newSheetWithData);
   * ```
   */
  create(e, t, n, r) {
    var h, d, c;
    const s = fe(Ie.deepClone((h = r == null ? void 0 : r.sheet) != null ? h : {}));
    s.name = e, s.rowCount = t, s.columnCount = n, s.id = (d = r == null ? void 0 : r.sheet) == null ? void 0 : d.id;
    const o = (c = r == null ? void 0 : r.index) != null ? c : this._workbook.getSheets().length;
    this._commandService.syncExecuteCommand(q.id, {
      unitId: this.id,
      index: o,
      sheet: s
    }), this._commandService.syncExecuteCommand(H.id, {
      unitId: this.id,
      subUnitId: this._workbook.getSheets()[o].getSheetId()
    });
    const i = this._workbook.getActiveSheet();
    if (!i)
      throw new Error("No active sheet found");
    return this._injector.createInstance(S, this, this._workbook, i);
  }
  /**
   * Get a worksheet by sheet id.
   * @param {string} sheetId The id of the sheet to get.
   * @returns {FWorksheet | null} The worksheet with given sheet id
   * @example
   * ```ts
   * // The code below gets a worksheet by sheet id
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const sheet = fWorkbook.getSheetBySheetId('sheetId');
   * console.log(sheet);
   * ```
   */
  getSheetBySheetId(e) {
    const t = this._workbook.getSheetBySheetId(e);
    return t ? this._injector.createInstance(S, this, this._workbook, t) : null;
  }
  /**
   * Get a worksheet by sheet name.
   * @param {string} name The name of the sheet to get.
   * @returns {FWorksheet | null} The worksheet with given sheet name
   * @example
   * ```ts
   * // The code below gets a worksheet by sheet name
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const sheet = fWorkbook.getSheetByName('Sheet1');
   * console.log(sheet);
   * ```
   */
  getSheetByName(e) {
    const t = this._workbook.getSheetBySheetName(e);
    return t ? this._injector.createInstance(S, this, this._workbook, t) : null;
  }
  /**
   * Sets the given worksheet to be the active worksheet in the workbook.
   * @param {FWorksheet | string} sheet The instance or id of the worksheet to set as active.
   * @returns {FWorksheet} The active worksheet
   * @example
   * ```ts
   * // The code below sets the given worksheet to be the active worksheet
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const sheet = fWorkbook.getSheets()[1];
   * fWorkbook.setActiveSheet(sheet);
   * ```
   */
  setActiveSheet(e) {
    return this._commandService.syncExecuteCommand(H.id, {
      unitId: this.id,
      subUnitId: typeof e == "string" ? e : e.getSheetId()
    }), typeof e == "string" ? this.getSheetBySheetId(e) : e;
  }
  /**
   * Inserts a new worksheet into the workbook.
   * Using a default sheet name. The new sheet becomes the active sheet
   * @param {string} [sheetName] The name of the new sheet
   * @param {Pick<IInsertSheetCommandParams, 'index' | 'sheet'>} [options] The options for the new sheet
   * @param {number} [options.index] The position index where the new sheet is to be inserted
   * @param {Partial<IWorksheetData>} [options.sheet] The data configuration for the new sheet
   * @returns {FWorksheet} The new sheet
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   *
   * // Create a new sheet with default configuration
   * const newSheet = fWorkbook.insertSheet();
   * console.log(newSheet);
   *
   * // Create a new sheet with custom name and default configuration
   * const newSheetWithName = fWorkbook.insertSheet('MyNewSheet');
   * console.log(newSheetWithName);
   *
   * // Create a new sheet with custom name and custom configuration
   * const sheetData = {
   *   // ... Omit other properties
   *   cellData: {
   *     0: {
   *       0: {
   *         v: 'Hello Univer!',
   *       }
   *     }
   *   },
   *   // ... Omit other properties
   * };
   * const newSheetWithData = fWorkbook.insertSheet('MyNewSheetWithData', {
   *   index: 0,
   *   sheet: sheetData,
   * });
   * console.log(newSheetWithData);
   * ```
   */
  insertSheet(e, t) {
    var o, i, h;
    const n = fe(Ie.deepClone((o = t == null ? void 0 : t.sheet) != null ? o : {}));
    n.name = e, n.id = (i = t == null ? void 0 : t.sheet) == null ? void 0 : i.id;
    const r = (h = t == null ? void 0 : t.index) != null ? h : this._workbook.getSheets().length;
    this._commandService.syncExecuteCommand(q.id, {
      unitId: this.id,
      index: r,
      sheet: n
    }), this._commandService.syncExecuteCommand(H.id, {
      unitId: this.id,
      subUnitId: this._workbook.getSheets()[r].getSheetId()
    });
    const s = this._workbook.getActiveSheet();
    if (!s)
      throw new Error("No active sheet found");
    return this._injector.createInstance(S, this, this._workbook, s);
  }
  /**
   * Deletes the specified worksheet.
   * @param {FWorksheet | string} sheet The instance or id of the worksheet to delete.
   * @returns {boolean} True if the worksheet was deleted, false otherwise.
   * @example
   * ```ts
   * // The code below deletes the specified worksheet
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const sheet = fWorkbook.getSheets()[1];
   * fWorkbook.deleteSheet(sheet);
   *
   * // The code below deletes the specified worksheet by id
   * // fWorkbook.deleteSheet(sheet.getSheetId());
   * ```
   */
  deleteSheet(e) {
    const t = this.id, n = typeof e == "string" ? e : e.getSheetId();
    return this._commandService.syncExecuteCommand(le.id, {
      unitId: t,
      subUnitId: n
    });
  }
  // #region editing
  /**
   * Undo the last action.
   * @returns {FWorkbook} A promise that resolves to true if the undo was successful, false otherwise.
   * @example
   * ```ts
   * // The code below undoes the last action
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * fWorkbook.undo();
   * ```
   */
  undo() {
    return this._univerInstanceService.focusUnit(this.id), this._commandService.syncExecuteCommand(it.id), this;
  }
  /**
   * Redo the last undone action.
   * @returns {FWorkbook} A promise that resolves to true if the redo was successful, false otherwise.
   * @example
   * ```ts
   * // The code below redoes the last undone action
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * fWorkbook.redo();
   * ```
   */
  redo() {
    return this._univerInstanceService.focusUnit(this.id), this._commandService.syncExecuteCommand(at.id), this;
  }
  /**
   * Callback for command execution.
   * @callback onBeforeCommandExecuteCallback
   * @param {ICommandInfo<ISheetCommandSharedParams>} command The command that was executed.
   */
  /**
   * Register a callback that will be triggered before invoking a command targeting the Univer sheet.
   * @param {onBeforeCommandExecuteCallback} callback the callback.
   * @returns {IDisposable} A function to dispose the listening.
   * @example
   * ```ts
   * // The code below registers a callback that will be triggered before invoking a command targeting the Univer sheet
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * fWorkbook.onBeforeCommandExecute((command) => {
   *   console.log('Before command execute:', command);
   * });
   * ```
   */
  onBeforeCommandExecute(e) {
    return this._commandService.beforeCommandExecuted((t) => {
      var n;
      ((n = t.params) == null ? void 0 : n.unitId) === this.id && e(t);
    });
  }
  /**
   * Callback for command execution.
   * @callback onCommandExecutedCallback
   * @param {ICommandInfo<ISheetCommandSharedParams>} command The command that was executed
   */
  /**
   * Register a callback that will be triggered when a command is invoked targeting the Univer sheet.
   * @param {onCommandExecutedCallback} callback the callback.
   * @returns {IDisposable} A function to dispose the listening.
   * @example
   * ```ts
   * // The code below registers a callback that will be triggered when a command is invoked targeting the Univer sheet
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * fWorkbook.onCommandExecuted((command) => {
   *   console.log('Command executed:', command);
   * });
   * ```
   */
  onCommandExecuted(e) {
    return this._commandService.onCommandExecuted((t) => {
      var n;
      ((n = t.params) == null ? void 0 : n.unitId) === this.id && e(t);
    });
  }
  /**
   * Callback for selection changes.
   * @callback onSelectionChangeCallback
   * @param {IRange[]} selections The new selection.
   */
  /**
   * Register a callback that will be triggered when the selection changes.
   * @param {onSelectionChangeCallback} callback The callback.
   * @returns {IDisposable} A function to dispose the listening
   * @example
   * ```ts
   * // The code below registers a callback that will be triggered when the selection changes
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * fWorkbook.onSelectionChange((selections) => {
   *   console.log('Selection changed:', selections);
   * });
   * ```
   */
  onSelectionChange(e) {
    return Ge(
      this._selectionManagerService.selectionMoveEnd$.subscribe((t) => {
        this._univerInstanceService.getCurrentUnitForType(P.UNIVER_SHEET).getUnitId() === this.id && (t != null && t.length ? e(t.map((n) => n.range)) : e([]));
      })
    );
  }
  /**
   * Used to modify the editing permissions of the workbook. When the value is false, editing is not allowed.
   * @param {boolean} value  editable value want to set
   * @returns {FWorkbook} FWorkbook instance
   * @example
   * ```ts
   * // The code below sets the editing permissions of the workbook
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * fWorkbook.setEditable(false);
   * ```
   */
  setEditable(e) {
    const t = new Je(this._workbook.getUnitId());
    return this._permissionService.getPermissionPoint(t.id) || this._permissionService.addPermissionPoint(t), this._permissionService.updatePermissionPoint(t.id, e), this;
  }
  /**
   * Sets the selection region for active sheet.
   * @param {FRange} range The range to set as the active selection.
   * @returns {FWorkbook} FWorkbook instance
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const range = fWorkbook.getActiveSheet().getRange('A10:B10');
   * fWorkbook.setActiveRange(range);
   * ```
   */
  setActiveRange(e) {
    const t = this.getActiveSheet(), n = e.getRange().sheetId || t.getSheetId(), r = n ? this._workbook.getSheetBySheetId(n) : this._workbook.getActiveSheet(!0);
    if (!r)
      throw new Error("No active sheet found");
    r.getSheetId() !== t.getSheetId() && this.setActiveSheet(this._injector.createInstance(S, this, this._workbook, r));
    const s = {
      unitId: this.getId(),
      subUnitId: n,
      selections: [e].map((o) => ({ range: o.getRange(), primary: $(o.getRange(), r), style: null }))
    };
    return this._commandService.syncExecuteCommand(ke.id, s), this;
  }
  /**
   * Returns the selected range in the active sheet, or null if there is no active range.
   * @returns {FRange | null} The active range
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const activeRange = fWorkbook.getActiveRange();
   * console.log(activeRange);
   * ```
   */
  // could sheet have no active range ?
  getActiveRange() {
    const e = this._workbook.getActiveSheet(), n = this._selectionManagerService.getCurrentSelections().find((r) => !!r.primary);
    return n ? this._injector.createInstance(k, this._workbook, e, n.range) : null;
  }
  /**
   * Returns the active cell in this spreadsheet.
   * @returns {FRange | null} The active cell
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * console.log(fWorkbook.getActiveCell().getA1Notation());
   * ```
   */
  getActiveCell() {
    const e = this._workbook.getActiveSheet(), n = this._selectionManagerService.getCurrentSelections().find((s) => !!s.primary);
    if (!n)
      return null;
    const r = {
      ...n.primary,
      rangeType: w.NORMAL
    };
    return this._injector.createInstance(k, this._workbook, e, r);
  }
  /**
   * Deletes the currently active sheet.
   * @returns {boolean} true if the sheet was deleted, false otherwise
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * fWorkbook.deleteActiveSheet();
   * ```
   */
  deleteActiveSheet() {
    const e = this.getActiveSheet();
    return this.deleteSheet(e);
  }
  /**
   * Duplicates the given worksheet.
   * @param {FWorksheet} sheet The worksheet to duplicate.
   * @returns {FWorksheet} The duplicated worksheet
   * @example
   * ```ts
   * // The code below duplicates the given worksheet
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const activeSheet = fWorkbook.getActiveSheet();
   * const duplicatedSheet = fWorkbook.duplicateSheet(activeSheet);
   * console.log(duplicatedSheet);
   * ```
   */
  duplicateSheet(e) {
    return this._commandService.syncExecuteCommand(Qt.id, {
      unitId: e.getWorkbook().getUnitId(),
      subUnitId: e.getSheetId()
    }), this._injector.createInstance(S, this, this._workbook, this._workbook.getActiveSheet());
  }
  /**
   * Duplicates the active sheet.
   * @returns {FWorksheet} The duplicated worksheet
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const duplicatedSheet = fWorkbook.duplicateActiveSheet();
   * console.log(duplicatedSheet);
   * ```
   */
  duplicateActiveSheet() {
    const e = this.getActiveSheet();
    return this.duplicateSheet(e);
  }
  /**
   * Get the number of sheets in the workbook.
   * @returns {number} The number of sheets in the workbook
   * @example
   * ```ts
   * // The code below gets the number of sheets in the workbook
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * console.log(fWorkbook.getNumSheets());
   * ```
   */
  getNumSheets() {
    return this._workbook.getSheets().length;
  }
  /**
   * Get the locale of the workbook.
   * @returns {LocaleType} The locale of the workbook
   * @example
   * ```ts
   * // The code below gets the locale of the workbook
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * console.log(fWorkbook.getLocale());
   * ```
   */
  getLocale() {
    return this._localeService.getCurrentLocale();
  }
  /**
   * @deprecated use `setSpreadsheetLocale` instead.
   * @param {LocaleType} locale - The locale to set
   */
  setLocale(e) {
    this._localeService.setLocale(e);
  }
  /**
   * Set the locale of the workbook.
   * @param {LocaleType} locale The locale to set
   * @returns {FWorkbook} This workbook, for chaining
   * @example
   * ```ts
   * // The code below sets the locale of the workbook
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * fWorkbook.setSpreadsheetLocale(univerAPI.Enum.LocaleType.EN_US);
   * console.log(fWorkbook.getLocale());
   * ```
   */
  setSpreadsheetLocale(e) {
    return this._localeService.setLocale(e), this;
  }
  /**
   * Get the URL of the workbook.
   * @returns {string} The URL of the workbook
   * @example
   * ```ts
   * // The code below gets the URL of the workbook
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const url = fWorkbook.getUrl();
   * console.log(url);
   * ```
   */
  getUrl() {
    return location.href;
  }
  /**
   * Move the sheet to the specified index.
   * @param {FWorksheet} sheet The sheet to move
   * @param {number} index The index to move the sheet to
   * @returns {FWorkbook} This workbook, for chaining
   * @example
   * ```ts
   * // The code below moves the sheet to the specified index
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const sheet = fWorkbook.getActiveSheet();
   * fWorkbook.moveSheet(sheet, 1);
   * ```
   */
  moveSheet(e, t) {
    let n = t;
    return n < 0 ? n = 0 : n > this._workbook.getSheets().length - 1 && (n = this._workbook.getSheets().length - 1), this._commandService.syncExecuteCommand(Xt.id, {
      unitId: e.getWorkbook().getUnitId(),
      order: n,
      subUnitId: e.getSheetId()
    }), this;
  }
  /**
   * Move the active sheet to the specified index.
   * @param {number} index The index to move the active sheet to
   * @returns {FWorkbook} This workbook, for chaining
   * @example
   * ```ts
   * // The code below moves the active sheet to the specified index
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * fWorkbook.moveActiveSheet(1);
   * ```
   */
  moveActiveSheet(e) {
    const t = this.getActiveSheet();
    return this.moveSheet(t, e);
  }
  /**
   * Get the PermissionInstance.
   * @returns {FPermission} - The PermissionInstance.
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const permission = fWorkbook.getPermission();
   * console.log(permission);
   * ```
   */
  getPermission() {
    return this._injector.createInstance(Y);
  }
  /**
   * Get the defined name by name.
   * @param {string} name The name of the defined name to get
   * @returns {FDefinedName | null} The defined name with the given name
   * @example
   * ```ts
   * // The code below gets the defined name by name
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const definedName = fWorkbook.getDefinedName('MyDefinedName');
   * console.log(definedName?.getFormulaOrRefString());
   *
   * if (definedName) {
   *   definedName.setName('NewDefinedName');
   * }
   * ```
   */
  getDefinedName(e) {
    const t = this._definedNamesService.getValueByName(this.id, e);
    return t ? this._injector.createInstance(K, { ...t, unitId: this.id }) : null;
  }
  /**
   * Get all the defined names in the workbook.
   * @returns {FDefinedName[]} All the defined names in the workbook
   * @example
   * ```ts
   * // The code below gets all the defined names in the workbook
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const definedNames = fWorkbook.getDefinedNames();
   * console.log(definedNames, definedNames[0]?.getFormulaOrRefString());
   * ```
   */
  getDefinedNames() {
    const e = this._definedNamesService.getDefinedNameMap(this.id);
    return e ? Object.values(e).map((t) => this._injector.createInstance(K, { ...t, unitId: this.id })) : [];
  }
  /**
   * Insert a defined name.
   * @param {string} name The name of the defined name to insert
   * @param {string} formulaOrRefString The formula(=sum(A2:b10)) or reference(A1) string of the defined name to insert
   * @returns {FWorkbook} The current FWorkbook instance
   * @example
   * ```ts
   * // The code below inserts a defined name
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * fWorkbook.insertDefinedName('MyDefinedName', 'Sheet1!$A$1');
   * ```
   */
  insertDefinedName(e, t) {
    const r = this._injector.createInstance(Q).setName(e).setRef(t).build();
    return r.localSheetId = O, this.insertDefinedNameBuilder(r), this;
  }
  /**
   * Delete the defined name with the given name.
   * @param {string} name The name of the defined name to delete
   * @returns {boolean} true if the defined name was deleted, false otherwise
   * @example
   * ```ts
   * // The code below deletes the defined name with the given name
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * fWorkbook.deleteDefinedName('MyDefinedName');
   * ```
   */
  deleteDefinedName(e) {
    const t = this.getDefinedName(e);
    return t ? (t.delete(), !0) : !1;
  }
  /**
   * Insert a defined name by builder param.
   * @param {ISetDefinedNameMutationParam} param The param to insert the defined name
   * @returns {void}
   * @example
   * ```ts
   * // The code below inserts a defined name by builder param
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const definedNameBuilder = univerAPI.newDefinedName()
   *   .setRef('Sheet1!$A$1')
   *   .setName('MyDefinedName')
   *   .setComment('This is a comment')
   *   .build();
   * fWorkbook.insertDefinedNameBuilder(definedNameBuilder);
   * ```
   */
  insertDefinedNameBuilder(e) {
    e.unitId = this.getId(), this._commandService.syncExecuteCommand(ae.id, e);
  }
  /**
   * Update the defined name with the given name.
   * @param {ISetDefinedNameMutationParam} param The param to insert the defined name
   * @returns {void}
   * @example
   * ```ts
   * // The code below updates the defined name with the given name
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const definedName = fWorkbook.getDefinedName('MyDefinedName');
   * console.log(definedName?.getFormulaOrRefString());
   *
   * // Update the defined name
   * if (definedName) {
   *   const newDefinedNameParam = definedName.toBuilder()
   *     .setName('NewDefinedName')
   *     .setRef('Sheet1!$A$2')
   *     .build();
   *   fWorkbook.updateDefinedNameBuilder(newDefinedNameParam);
   * }
   * ```
   */
  updateDefinedNameBuilder(e) {
    this._commandService.syncExecuteCommand(ae.id, e);
  }
  /**
   * Gets the registered range themes.
   * @returns {string[]} The name list of registered range themes.
   * @example
   * ```ts
   * // The code below gets the registered range themes
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const themes = fWorkbook.getRegisteredRangeThemes();
   * console.log(themes);
   * ```
   */
  getRegisteredRangeThemes() {
    return this._injector.get(Qe).getRegisteredRangeThemes();
  }
  /**
   * Register a custom range theme style.
   * @param {RangeThemeStyle} rangeThemeStyle The range theme style to register
   * @returns {void}
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const rangeThemeStyle = fWorkbook.createRangeThemeStyle('MyTheme', {
   *   secondRowStyle: {
   *     bg: {
   *       rgb: 'rgb(214,231,241)',
   *     },
   *   },
   * });
   * fWorkbook.registerRangeTheme(rangeThemeStyle);
   * ```
   */
  registerRangeTheme(e) {
    this._commandService.syncExecuteCommand(Zt.id, {
      unitId: this.getId(),
      rangeThemeStyle: e
    });
  }
  /**
   * Unregister a custom range theme style.
   * @param {string} themeName The name of the theme to unregister
   * @returns {void}
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * fWorkbook.unregisterRangeTheme('MyTheme');
   * ```
   */
  unregisterRangeTheme(e) {
    this._commandService.syncExecuteCommand(en.id, {
      unitId: this.getId(),
      themeName: e
    });
  }
  /**
   * Create a range theme style.
   * @param {string} themeName - The name of the theme to register
   * @param {Omit<IRangeThemeStyleJSON, 'name'>} themeStyleJson - The theme style json to register
   * @returns {RangeThemeStyle} - The created range theme style
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const rangeThemeStyle = fWorkbook.createRangeThemeStyle('MyTheme', {
   *   secondRowStyle: {
   *     bg: {
   *       rgb: 'rgb(214,231,241)',
   *     },
   *   },
   * });
   * console.log(rangeThemeStyle);
   * ```
   */
  createRangeThemeStyle(e, t) {
    return new tn(e, t);
  }
  /**
   * Set custom metadata of workbook
   * @param {CustomData | undefined} custom custom metadata
   * @returns {FWorkbook} FWorkbook
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * fWorkbook.setCustomMetadata({ key: 'value' });
   * ```
   */
  setCustomMetadata(e) {
    return this._workbook.setCustomMetadata(e), this;
  }
  /**
   * Get custom metadata of workbook
   * @returns {CustomData | undefined} custom metadata
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const custom = fWorkbook.getCustomMetadata();
   * console.log(custom);
   * ```
   */
  getCustomMetadata() {
    return this._workbook.getCustomMetadata();
  }
  /**
   * Add styles to the workbook styles.
   * @param {Record<string, IStyleData>} styles Styles to add
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   *
   * // Add styles to the workbook styles
   * const styles = {
   *   'custom-style-1': {
   *     bg: {
   *       rgb: 'rgb(255, 0, 0)',
   *     }
   *   },
   *   'custom-style-2': {
   *     fs: 20,
   *     n: {
   *       pattern: '@'
   *     }
   *   }
   * };
   * fWorkbook.addStyles(styles);
   *
   * // Set values with the new styles
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setValues([
   *   [{ v: 'Hello', s: 'custom-style-1' }, { v: 'Univer', s: 'custom-style-1' }],
   *   [{ v: 'To', s: 'custom-style-1' }, { v: '0001', s: 'custom-style-2' }],
   * ]);
   * ```
   */
  addStyles(e) {
    this._workbook.addStyles(e);
  }
  /**
   * Remove styles from the workbook styles.
   * @param {string[]} styleKeys Style keys to remove
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   *
   * // Add styles to the workbook styles
   * const styles = {
   *   'custom-style-1': {
   *     bg: {
   *       rgb: 'rgb(255, 0, 0)',
   *     }
   *   },
   *   'custom-style-2': {
   *     fs: 20,
   *     n: {
   *       pattern: '@'
   *     }
   *   }
   * };
   * fWorkbook.addStyles(styles);
   *
   * // Set values with the new styles
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:B2');
   * fRange.setValues([
   *   [{ v: 'Hello', s: 'custom-style-1' }, { v: 'Univer', s: 'custom-style-1' }],
   *   [{ v: 'To', s: 'custom-style-1' }, { v: '0001', s: 'custom-style-2' }],
   * ]);
   *
   * // Remove the style `custom-style-1` after 2 seconds
   * setTimeout(() => {
   *   fWorkbook.removeStyles(['custom-style-1']);
   *   fWorksheet.refreshCanvas();
   * }, 2000);
   * ```
   */
  removeStyles(e) {
    this._workbook.removeStyles(e);
  }
};
C = yn([
  R(1, g(M)),
  R(2, g(ht)),
  R(3, g(tt)),
  R(4, ie),
  R(5, _),
  R(6, ge),
  R(7, ze),
  R(8, g(je)),
  R(9, nt)
], C);
class Un extends $e {
  getCommandSheetTarget(e) {
    var s;
    const t = e.params;
    if (!t) return this.getActiveSheet();
    const n = t.unitId ? this.getUniverSheet(t.unitId) : (s = this.getActiveWorkbook) == null ? void 0 : s.call(this);
    if (!n)
      return;
    const r = n.getSheetBySheetId(t.subUnitId || t.sheetId) || n.getActiveSheet();
    if (r)
      return { workbook: n, worksheet: r };
  }
  getSheetTarget(e, t) {
    const n = this.getUniverSheet(e);
    if (!n)
      return;
    const r = n.getSheetBySheetId(t);
    if (r)
      return { workbook: n, worksheet: r };
  }
  _initWorkbookEvent(e) {
    const t = e.get(ie);
    this.registerEventHandler(
      this.Event.WorkbookDisposed,
      () => t.unitDisposed$.subscribe((n) => {
        n.type === P.UNIVER_SHEET && this.fireEvent(this.Event.WorkbookDisposed, {
          unitId: n.getUnitId(),
          unitType: n.type,
          snapshot: n.getSnapshot()
        });
      })
    ), this.registerEventHandler(
      this.Event.WorkbookCreated,
      () => t.unitAdded$.subscribe((n) => {
        if (n.type === P.UNIVER_SHEET) {
          const r = n, s = e.createInstance(C, r);
          this.fireEvent(this.Event.WorkbookCreated, {
            unitId: n.getUnitId(),
            type: n.type,
            workbook: s,
            unit: s
          });
        }
      })
    );
  }
  /**
   * @ignore
   */
  // eslint-disable-next-line max-lines-per-function
  _initialize(e) {
    const t = e.get(_);
    this.registerEventHandler(
      this.Event.BeforeSheetCreate,
      () => t.beforeCommandExecuted((n) => {
        var r;
        if (n.id === q.id) {
          const s = n.params, { unitId: o, index: i, sheet: h } = s || {}, d = o ? this.getUniverSheet(o) : (r = this.getActiveWorkbook) == null ? void 0 : r.call(this);
          if (!d)
            return;
          const c = {
            workbook: d,
            index: i,
            sheet: h
          };
          if (this.fireEvent(this.Event.BeforeSheetCreate, c), c.cancel)
            throw new f();
        }
      })
    ), this.registerEventHandler(
      this.Event.BeforeActiveSheetChange,
      () => t.beforeCommandExecuted((n) => {
        var r;
        if (n.id === H.id) {
          const { subUnitId: s, unitId: o } = n.params, i = o ? this.getUniverSheet(o) : (r = this.getActiveWorkbook) == null ? void 0 : r.call(this);
          if (!i || !s) return;
          const h = i.getSheetBySheetId(s), d = i.getActiveSheet();
          if (!h || !d) return;
          const c = {
            workbook: i,
            activeSheet: h,
            oldActiveSheet: d
          };
          if (this.fireEvent(this.Event.BeforeActiveSheetChange, c), c.cancel)
            throw new f();
        }
      })
    ), this.registerEventHandler(
      this.Event.BeforeSheetDelete,
      () => t.beforeCommandExecuted((n) => {
        if (n.id === le.id) {
          const r = this.getCommandSheetTarget(n);
          if (!r) return;
          const { workbook: s, worksheet: o } = r, i = {
            workbook: s,
            worksheet: o
          };
          if (this.fireEvent(this.Event.BeforeSheetDelete, i), i.cancel)
            throw new f();
        }
      })
    ), this.registerEventHandler(
      this.Event.BeforeSheetMove,
      () => t.beforeCommandExecuted((n) => {
        if (n.id === De.id) {
          const { fromOrder: r, toOrder: s } = n.params, o = this.getCommandSheetTarget(n);
          if (!o) return;
          const i = {
            workbook: o.workbook,
            worksheet: o.worksheet,
            newIndex: s,
            oldIndex: r
          };
          if (this.fireEvent(this.Event.BeforeSheetMove, i), i.cancel)
            throw new f();
        }
      })
    ), this.registerEventHandler(
      this.Event.BeforeSheetNameChange,
      () => t.beforeCommandExecuted((n) => {
        if (n.id === ue.id) {
          const { name: r } = n.params, s = this.getCommandSheetTarget(n);
          if (!s) return;
          const o = {
            workbook: s.workbook,
            worksheet: s.worksheet,
            newName: r,
            oldName: s.worksheet.getSheetName()
          };
          if (this.fireEvent(this.Event.BeforeSheetNameChange, o), o.cancel)
            throw new f();
        }
      })
    ), this.registerEventHandler(
      this.Event.BeforeSheetTabColorChange,
      () => t.beforeCommandExecuted((n) => {
        if (n.id === We.id) {
          const { color: r } = n.params, s = this.getCommandSheetTarget(n);
          if (!s) return;
          const o = {
            workbook: s.workbook,
            worksheet: s.worksheet,
            newColor: r,
            oldColor: s.worksheet.getTabColor()
          };
          if (this.fireEvent(this.Event.BeforeSheetTabColorChange, o), o.cancel)
            throw new f();
        }
      })
    ), this.registerEventHandler(
      this.Event.BeforeSheetHideChange,
      () => t.beforeCommandExecuted((n) => {
        if (n.id === Be.id) {
          const { hidden: r } = n.params, s = this.getCommandSheetTarget(n);
          if (!s) return;
          const o = {
            workbook: s.workbook,
            worksheet: s.worksheet,
            hidden: !!r
          };
          if (this.fireEvent(this.Event.BeforeSheetHideChange, o), o.cancel)
            throw new f();
        }
      })
    ), this.registerEventHandler(
      this.Event.BeforeGridlineColorChange,
      () => t.beforeCommandExecuted((n) => {
        var r;
        if (n.id === ce.id) {
          const s = this.getCommandSheetTarget(n);
          if (!s) return;
          const o = {
            ...s,
            color: (r = n.params) == null ? void 0 : r.color
          };
          if (this.fireEvent(this.Event.BeforeGridlineColorChange, o), o.cancel)
            throw new f();
        }
      })
    ), this.registerEventHandler(
      this.Event.BeforeGridlineEnableChange,
      () => t.beforeCommandExecuted((n) => {
        var r;
        if (n.id === de.id) {
          const s = this.getCommandSheetTarget(n);
          if (!s) return;
          const o = {
            ...s,
            enabled: !!((r = n.params) != null && r.showGridlines)
          };
          if (this.fireEvent(this.Event.BeforeGridlineEnableChange, o), o.cancel)
            throw new f();
        }
      })
    ), this.registerEventHandler(
      this.Event.SheetValueChanged,
      () => t.onCommandExecuted((n) => {
        if (nn.indexOf(n.id) > -1) {
          if (!this.getActiveSheet()) return;
          const s = rn(n).map(
            (o) => {
              var i, h;
              return (h = (i = this.getWorkbook(o.unitId)) == null ? void 0 : i.getSheetBySheetId(o.subUnitId)) == null ? void 0 : h.getRange(o.range);
            }
          ).filter(Boolean);
          if (!s.length) return;
          this.fireEvent(this.Event.SheetValueChanged, {
            payload: n,
            effectedRanges: s
          });
        }
      })
    ), this.registerEventHandler(
      this.Event.SheetCreated,
      () => t.onCommandExecuted((n) => {
        var r;
        if (n.id === q.id) {
          const s = n.params, { unitId: o } = s || {}, i = o ? this.getUniverSheet(o) : (r = this.getActiveWorkbook) == null ? void 0 : r.call(this);
          if (!i)
            return;
          const h = i.getActiveSheet();
          if (!h)
            return;
          const d = {
            workbook: i,
            worksheet: h
          };
          this.fireEvent(
            this.Event.SheetCreated,
            d
          );
        }
      })
    ), this.registerEventHandler(
      this.Event.ActiveSheetChanged,
      () => t.onCommandExecuted((n) => {
        if (n.id === H.id) {
          const r = this.getActiveSheet();
          if (!r) return;
          const { workbook: s, worksheet: o } = r;
          this._fireActiveSheetChanged(s, o);
        }
      })
    ), this.registerEventHandler(
      this.Event.SheetDeleted,
      () => t.onCommandExecuted((n) => {
        var r;
        if (n.id === le.id) {
          const { subUnitId: s, unitId: o } = n.params, i = o ? this.getUniverSheet(o) : (r = this.getActiveWorkbook) == null ? void 0 : r.call(this);
          if (!i || !s) return;
          this._fireSheetDeleted(i, s);
        }
      })
    ), this.registerEventHandler(
      this.Event.SheetMoved,
      () => t.onCommandExecuted((n) => {
        if (n.id === De.id) {
          const { toOrder: r } = n.params, s = this.getCommandSheetTarget(n);
          if (!s) return;
          this._fireSheetMoved(s.workbook, s.worksheet, r);
        }
      })
    ), this.registerEventHandler(
      this.Event.SheetNameChanged,
      () => t.onCommandExecuted((n) => {
        if (n.id === ue.id) {
          const { name: r } = n.params, s = this.getCommandSheetTarget(n);
          if (!s) return;
          this._fireSheetNameChanged(s.workbook, s.worksheet, r);
        }
      })
    ), this.registerEventHandler(
      this.Event.SheetTabColorChanged,
      () => t.onCommandExecuted((n) => {
        if (n.id === We.id) {
          const { color: r } = n.params, s = this.getCommandSheetTarget(n);
          if (!s) return;
          this._fireSheetTabColorChanged(s.workbook, s.worksheet, r);
        }
      })
    ), this.registerEventHandler(
      this.Event.SheetHideChanged,
      () => t.onCommandExecuted((n) => {
        if (n.id === Be.id) {
          const { hidden: r } = n.params, s = this.getCommandSheetTarget(n);
          if (!s) return;
          this._fireSheetHideChanged(s.workbook, s.worksheet, !!r);
        }
      })
    ), this.registerEventHandler(
      this.Event.GridlineChanged,
      () => t.onCommandExecuted((n) => {
        if (n.id === ce.id || n.id === de.id) {
          const r = this.getCommandSheetTarget(n);
          if (!r) return;
          this.fireEvent(this.Event.GridlineChanged, {
            ...r,
            enabled: !r.worksheet.hasHiddenGridLines(),
            color: r.worksheet.getGridLinesColor()
          });
        }
      })
    ), this._initWorkbookEvent(e);
  }
  createUniverSheet(e, t) {
    const r = this._injector.get(ie).createUnit(P.UNIVER_SHEET, e, t);
    return this._injector.createInstance(C, r);
  }
  createWorkbook(e, t) {
    return this.createUniverSheet(e, t);
  }
  getActiveWorkbook() {
    const e = this._univerInstanceService.getCurrentUnitForType(P.UNIVER_SHEET);
    return e ? this._injector.createInstance(C, e) : null;
  }
  getActiveUniverSheet() {
    return this.getActiveWorkbook();
  }
  getUniverSheet(e) {
    const t = this._univerInstanceService.getUnit(e, P.UNIVER_SHEET);
    return t ? this._injector.createInstance(C, t) : null;
  }
  getWorkbook(e) {
    return this.getUniverSheet(e);
  }
  getPermission() {
    return this._injector.createInstance(Y);
  }
  onUniverSheetCreated(e) {
    const t = this._univerInstanceService.getTypeOfUnitAdded$(P.UNIVER_SHEET).subscribe((n) => {
      const r = this._injector.createInstance(C, n);
      e(r);
    });
    return Ge(t);
  }
  newDefinedName() {
    return this._injector.createInstance(Q);
  }
  getActiveSheet() {
    const e = this.getActiveWorkbook();
    if (!e)
      return null;
    const t = e.getActiveSheet();
    return t ? { workbook: e, worksheet: t } : null;
  }
  setFreezeSync(e) {
    this._injector.get(sn).setEnabled(e);
  }
  _fireActiveSheetChanged(e, t) {
    this.fireEvent(this.Event.ActiveSheetChanged, {
      workbook: e,
      activeSheet: t
    });
  }
  _fireSheetDeleted(e, t) {
    this.fireEvent(this.Event.SheetDeleted, {
      workbook: e,
      sheetId: t
    });
  }
  _fireSheetMoved(e, t, n) {
    this.fireEvent(this.Event.SheetMoved, {
      workbook: e,
      worksheet: t,
      newIndex: n
    });
  }
  _fireSheetNameChanged(e, t, n) {
    this.fireEvent(this.Event.SheetNameChanged, {
      workbook: e,
      worksheet: t,
      newName: n
    });
  }
  _fireSheetTabColorChanged(e, t, n) {
    this.fireEvent(this.Event.SheetTabColorChanged, {
      workbook: e,
      worksheet: t,
      newColor: n
    });
  }
  _fireSheetHideChanged(e, t, n) {
    this.fireEvent(this.Event.SheetHideChanged, {
      workbook: e,
      worksheet: t,
      hidden: n
    });
  }
}
$e.extend(Un);
class Pn {
  get SheetValueChangeType() {
    return on;
  }
  get SheetSkeletonChangeType() {
    return an;
  }
  get SplitDelimiterType() {
    return hn;
  }
}
dt.extend(Pn);
class xn {
  get SheetCreated() {
    return "SheetCreated";
  }
  get BeforeSheetCreate() {
    return "BeforeSheetCreate";
  }
  get WorkbookCreated() {
    return "WorkbookCreated";
  }
  get WorkbookDisposed() {
    return "WorkbookDisposed";
  }
  get GridlineChanged() {
    return "GridlineChanged";
  }
  get BeforeGridlineEnableChange() {
    return "BeforeGridlineEnableChange";
  }
  get BeforeGridlineColorChange() {
    return "BeforeGridlineColorChange";
  }
  get BeforeActiveSheetChange() {
    return "BeforeActiveSheetChange";
  }
  get ActiveSheetChanged() {
    return "ActiveSheetChanged";
  }
  get SheetDeleted() {
    return "SheetDeleted";
  }
  get BeforeSheetDelete() {
    return "BeforeSheetDelete";
  }
  get SheetMoved() {
    return "SheetMoved";
  }
  get BeforeSheetMove() {
    return "BeforeSheetMove";
  }
  get SheetNameChanged() {
    return "SheetNameChanged";
  }
  get BeforeSheetNameChange() {
    return "BeforeSheetNameChange";
  }
  get SheetTabColorChanged() {
    return "SheetTabColorChanged";
  }
  get BeforeSheetTabColorChange() {
    return "BeforeSheetTabColorChange";
  }
  get SheetHideChanged() {
    return "SheetHideChanged";
  }
  get BeforeSheetHideChange() {
    return "BeforeSheetHideChange";
  }
  get SheetValueChanged() {
    return "SheetValueChanged";
  }
}
ct.extend(xn);
var Mn = Object.getOwnPropertyDescriptor, Nn = (a, e, t, n) => {
  for (var r = n > 1 ? void 0 : n ? Mn(e, t) : e, s = a.length - 1, o; s >= 0; s--)
    (o = a[s]) && (r = o(r) || r);
  return r;
}, Tn = (a, e) => (t, n) => e(t, n, a);
let He = class extends me {
  constructor(a) {
    super(), this._injector = a;
  }
};
He = Nn([
  Tn(0, g(M))
], He);
export {
  Y as FPermission,
  k as FRange,
  J as FSelection,
  xn as FSheetEventName,
  He as FSheetHooks,
  Pn as FSheetsEnum,
  C as FWorkbook,
  S as FWorksheet
};
