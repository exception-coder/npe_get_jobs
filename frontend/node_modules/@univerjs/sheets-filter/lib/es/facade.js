import { Inject as k, Injector as S, ICommandService as m } from "@univerjs/core";
import { SetSheetsFilterCriteriaCommand as o, ClearSheetsFilterCriteriaCommand as l, RemoveSheetFilterCommand as v, SetSheetFilterRangeCommand as f, SheetsFilterService as F, CustomFilterOperator as C } from "@univerjs/sheets-filter";
import { FRange as h, FWorksheet as u, FSheetEventName as w } from "@univerjs/sheets/facade";
import { FEnum as b, FEventName as d, FUniver as _ } from "@univerjs/core/facade";
var E = Object.getOwnPropertyDescriptor, R = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? E(e, t) : e, a = i.length - 1, c; a >= 0; a--)
    (c = i[a]) && (n = c(n) || n);
  return n;
}, g = (i, e) => (t, r) => e(t, r, i);
let s = class {
  constructor(i, e, t, r, n) {
    this._workbook = i, this._worksheet = e, this._filterModel = t, this._injector = r, this._commandSrv = n;
  }
  /**
   * Get the filtered out rows by this filter.
   * @returns {number[]} Filtered out rows by this filter.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set some values of the range C1:F10
   * const fRange = fWorksheet.getRange('C1:F10');
   * fRange.setValues([
   *   [1, 2, 3, 4],
   *   [2, 3, 4, 5],
   *   [3, 4, 5, 6],
   *   [4, 5, 6, 7],
   *   [5, 6, 7, 8],
   *   [6, 7, 8, 9],
   *   [7, 8, 9, 10],
   *   [8, 9, 10, 11],
   *   [9, 10, 11, 12],
   *   [10, 11, 12, 13],
   * ]);
   *
   * // Create a filter on the range C1:F10
   * let fFilter = fRange.createFilter();
   *
   * // If the filter already exists, remove it and create a new one
   * if (!fFilter) {
   *   fRange.getFilter().remove();
   *   fFilter = fRange.createFilter();
   * }
   *
   * // Set the filter criteria of the column C, filter out the rows that are not 1, 5, 9
   * const column = fWorksheet.getRange('C:C').getColumn();
   * fFilter.setColumnFilterCriteria(column, {
   *   colId: 0,
   *   filters: {
   *     filters: ['1', '5', '9'],
   *   },
   * });
   *
   * // Get the filtered out rows
   * console.log(fFilter.getFilteredOutRows()); // [1, 2, 3, 5, 6, 7, 9]
   * ```
   */
  getFilteredOutRows() {
    return Array.from(this._filterModel.filteredOutRows).sort();
  }
  /**
   * Get the filter criteria of a column.
   * @param {number} column - The column index.
   * @returns {Nullable<IFilterColumn>} The filter criteria of the column.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set some values of the range C1:F10
   * const fRange = fWorksheet.getRange('C1:F10');
   * fRange.setValues([
   *   [1, 2, 3, 4],
   *   [2, 3, 4, 5],
   *   [3, 4, 5, 6],
   *   [4, 5, 6, 7],
   *   [5, 6, 7, 8],
   *   [6, 7, 8, 9],
   *   [7, 8, 9, 10],
   *   [8, 9, 10, 11],
   *   [9, 10, 11, 12],
   *   [10, 11, 12, 13],
   * ]);
   *
   * // Create a filter on the range C1:F10
   * let fFilter = fRange.createFilter();
   *
   * // If the filter already exists, remove it and create a new one
   * if (!fFilter) {
   *   fRange.getFilter().remove();
   *   fFilter = fRange.createFilter();
   * }
   *
   * // Set the filter criteria of the column C, filter out the rows that are not 1, 5, 9
   * const column = fWorksheet.getRange('C:C').getColumn();
   * fFilter.setColumnFilterCriteria(column, {
   *   colId: 0,
   *   filters: {
   *     filters: ['1', '5', '9'],
   *   },
   * });
   *
   * // Print the filter criteria of the column C and D
   * console.log(fFilter.getColumnFilterCriteria(column)); // { colId: 0, filters: { filters: ['1', '5', '9'] } }
   * console.log(fFilter.getColumnFilterCriteria(column + 1)); // undefined
   * ```
   */
  getColumnFilterCriteria(i) {
    var e;
    return (e = this._filterModel.getFilterColumn(i)) == null ? void 0 : e.getColumnData();
  }
  /**
   * Clear the filter criteria of a column.
   * @param {number} column - The column index.
   * @returns {FFilter} The FFilter instance for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set some values of the range C1:F10
   * const fRange = fWorksheet.getRange('C1:F10');
   * fRange.setValues([
   *   [1, 2, 3, 4],
   *   [2, 3, 4, 5],
   *   [3, 4, 5, 6],
   *   [4, 5, 6, 7],
   *   [5, 6, 7, 8],
   *   [6, 7, 8, 9],
   *   [7, 8, 9, 10],
   *   [8, 9, 10, 11],
   *   [9, 10, 11, 12],
   *   [10, 11, 12, 13],
   * ]);
   *
   * // Create a filter on the range C1:F10
   * let fFilter = fRange.createFilter();
   *
   * // If the filter already exists, remove it and create a new one
   * if (!fFilter) {
   *   fRange.getFilter().remove();
   *   fFilter = fRange.createFilter();
   * }
   *
   * // Set the filter criteria of the column C, filter out the rows that are not 1, 5, 9
   * const column = fWorksheet.getRange('C:C').getColumn();
   * fFilter.setColumnFilterCriteria(column, {
   *   colId: 0,
   *   filters: {
   *     filters: ['1', '5', '9'],
   *   },
   * });
   *
   * // Clear the filter criteria of the column C after 3 seconds
   * setTimeout(() => {
   *   fFilter.removeColumnFilterCriteria(column);
   * }, 3000);
   * ```
   */
  removeColumnFilterCriteria(i) {
    return this._commandSrv.syncExecuteCommand(o.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      col: i,
      criteria: null
    }), this;
  }
  /**
   * Set the filter criteria of a column.
   * @param {number} column - The column index.
   * @param {ISetSheetsFilterCriteriaCommandParams['criteria']} criteria - The new filter criteria.
   * @returns {FFilter} The FFilter instance for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set some values of the range C1:F10
   * const fRange = fWorksheet.getRange('C1:F10');
   * fRange.setValues([
   *   [1, 2, 3, 4],
   *   [2, 3, 4, 5],
   *   [3, 4, 5, 6],
   *   [4, 5, 6, 7],
   *   [5, 6, 7, 8],
   *   [6, 7, 8, 9],
   *   [7, 8, 9, 10],
   *   [8, 9, 10, 11],
   *   [9, 10, 11, 12],
   *   [10, 11, 12, 13],
   * ]);
   *
   * // Create a filter on the range C1:F10
   * let fFilter = fRange.createFilter();
   *
   * // If the filter already exists, remove it and create a new one
   * if (!fFilter) {
   *   fRange.getFilter().remove();
   *   fFilter = fRange.createFilter();
   * }
   *
   * // Set the filter criteria of the column C, filter out the rows that are not 1, 5, 9
   * const column = fWorksheet.getRange('C:C').getColumn();
   * fFilter.setColumnFilterCriteria(column, {
   *   colId: 0,
   *   filters: {
   *     filters: ['1', '5', '9'],
   *   },
   * });
   * ```
   */
  setColumnFilterCriteria(i, e) {
    return this._commandSrv.syncExecuteCommand(o.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      col: i,
      criteria: e
    }), this;
  }
  /**
   * Get the range of the filter.
   * @returns {FRange} The range of the filter.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fFilter = fWorksheet.getFilter();
   * console.log(fFilter?.getRange().getA1Notation());
   * ```
   */
  getRange() {
    const i = this._filterModel.getRange();
    return this._injector.createInstance(h, this._workbook, this._worksheet, i);
  }
  /**
   * Remove the filter criteria of all columns.
   * @returns {FFilter} The FFilter instance for chaining.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Set some values of the range C1:F10
   * const fRange = fWorksheet.getRange('C1:F10');
   * fRange.setValues([
   *   [1, 2, 3, 4],
   *   [2, 3, 4, 5],
   *   [3, 4, 5, 6],
   *   [4, 5, 6, 7],
   *   [5, 6, 7, 8],
   *   [6, 7, 8, 9],
   *   [7, 8, 9, 10],
   *   [8, 9, 10, 11],
   *   [9, 10, 11, 12],
   *   [10, 11, 12, 13],
   * ]);
   *
   * // Create a filter on the range C1:F10
   * let fFilter = fRange.createFilter();
   *
   * // If the filter already exists, remove it and create a new one
   * if (!fFilter) {
   *   fRange.getFilter().remove();
   *   fFilter = fRange.createFilter();
   * }
   *
   * // Set the filter criteria of the column C, filter out the rows that are not 1, 5, 9
   * const column = fWorksheet.getRange('C:C').getColumn();
   * fFilter.setColumnFilterCriteria(column, {
   *   colId: 0,
   *   filters: {
   *     filters: ['1', '5', '9'],
   *   },
   * });
   *
   * // Clear the filter criteria of all columns after 3 seconds
   * setTimeout(() => {
   *   fFilter.removeFilterCriteria();
   * }, 3000);
   * ```
   */
  removeFilterCriteria() {
    return this._commandSrv.syncExecuteCommand(l.id), this;
  }
  /**
   * Remove the filter from the worksheet.
   * @returns {boolean} True if the filter is removed successfully; otherwise, false.
   * @example
   * ```typescript
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const fRange = fWorksheet.getRange('A1:D14');
   * let fFilter = fRange.createFilter();
   *
   * // If the worksheet already has a filter, remove it and create a new filter.
   * if (!fFilter) {
   *   fWorksheet.getFilter().remove();
   *   fFilter = fRange.createFilter();
   * }
   * console.log(fFilter);
   * ```
   */
  remove() {
    return this._commandSrv.syncExecuteCommand(v.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId()
    });
  }
};
s = R([
  g(3, k(S)),
  g(4, m)
], s);
class I extends h {
  createFilter() {
    return this._getFilterModel() || !this._commandService.syncExecuteCommand(f.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      range: this._range
    }) ? null : this.getFilter();
  }
  /**
   * Get the filter for the current range's worksheet.
   * @returns {FFilter | null} The interface class to handle the filter. If the worksheet does not have a filter,
   * this method would return `null`.
   */
  getFilter() {
    const e = this._getFilterModel();
    return e ? this._injector.createInstance(s, this._workbook, this._worksheet, e) : null;
  }
  _getFilterModel() {
    return this._injector.get(F).getFilterModel(
      this._workbook.getUnitId(),
      this._worksheet.getSheetId()
    );
  }
}
h.extend(I);
class x extends u {
  getFilter() {
    const e = this._getFilterModel();
    return e ? this._injector.createInstance(s, this._workbook, this._worksheet, e) : null;
  }
  _getFilterModel() {
    return this._injector.get(F).getFilterModel(
      this._workbook.getUnitId(),
      this._worksheet.getSheetId()
    );
  }
}
u.extend(x);
class U {
  get CustomFilterOperator() {
    return C;
  }
}
b.extend(U);
class M extends d {
  get SheetBeforeRangeFilter() {
    return "SheetBeforeRangeFilter";
  }
  get SheetRangeFiltered() {
    return "SheetRangeFiltered";
  }
  get SheetRangeFilterCleared() {
    return "SheetRangeFilterCleared";
  }
  get SheetBeforeRangeFilterClear() {
    return "SheetBeforeRangeFilterClear";
  }
}
d.extend(M);
d.extend(w);
class p extends _ {
  /**
   * @ignore
   */
  _initialize(e) {
    const t = e.get(m);
    this.registerEventHandler(
      this.Event.SheetBeforeRangeFilter,
      () => t.beforeCommandExecuted((r) => {
        r.id === o.id && this._beforeRangeFilter(r);
      })
    ), this.registerEventHandler(
      this.Event.SheetBeforeRangeFilterClear,
      () => t.beforeCommandExecuted((r) => {
        r.id === l.id && this._beforeRangeFilterClear();
      })
    ), this.registerEventHandler(
      this.Event.SheetRangeFiltered,
      () => t.onCommandExecuted((r) => {
        r.id === o.id && this._onRangeFiltered(r);
      })
    ), this.registerEventHandler(
      this.Event.SheetRangeFilterCleared,
      () => t.onCommandExecuted((r) => {
        r.id === l.id && this._onRangeFilterCleared();
      })
    );
  }
  _beforeRangeFilter(e) {
    const t = e.params, r = this.getUniverSheet(t.unitId), n = {
      workbook: r,
      worksheet: r.getSheetBySheetId(t.subUnitId),
      col: t.col,
      criteria: t.criteria
    };
    if (this.fireEvent(this.Event.SheetBeforeRangeFilter, n), n.cancel)
      throw new Error("SetSheetsFilterCriteriaCommand canceled.");
  }
  _onRangeFiltered(e) {
    const t = e.params, r = this.getUniverSheet(t.unitId), n = {
      workbook: r,
      worksheet: r.getSheetBySheetId(t.subUnitId),
      col: t.col,
      criteria: t.criteria
    };
    this.fireEvent(this.Event.SheetRangeFiltered, n);
  }
  _beforeRangeFilterClear() {
    const e = this.getActiveWorkbook();
    if (!e) return;
    const t = {
      workbook: e,
      worksheet: e.getActiveSheet()
    };
    if (this.fireEvent(this.Event.SheetBeforeRangeFilterClear, t), t.cancel)
      throw new Error("SetSheetsFilterCriteriaCommand canceled.");
  }
  _onRangeFilterCleared() {
    const e = this.getActiveWorkbook();
    if (!e) return;
    const t = {
      workbook: e,
      worksheet: e.getActiveSheet()
    };
    this.fireEvent(this.Event.SheetRangeFilterCleared, t);
  }
}
_.extend(p);
export {
  s as FFilter
};
