import { SortType as s, SortRangeCommand as h } from "@univerjs/sheets-sort";
import { FRange as u, FWorksheet as l, FSheetEventName as f } from "@univerjs/sheets/facade";
import { RANGE_TYPE as k, ICommandService as v } from "@univerjs/core";
import { FEventName as R, FUniver as C } from "@univerjs/core/facade";
class E extends u {
  sort(o) {
    const e = this._range.startColumn, r = (Array.isArray(o) ? o : [o]).map((n) => typeof n == "number" ? { colIndex: n + e, type: s.ASC } : {
      colIndex: n.column + e,
      type: n.ascending ? s.ASC : s.DESC
    });
    return this._commandService.syncExecuteCommand(h.id, {
      orderRules: r,
      range: this._range,
      hasTitle: !1,
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId()
    }), this;
  }
}
u.extend(E);
class w extends l {
  sort(o, e = !0) {
    const t = [{
      colIndex: o,
      type: e ? s.ASC : s.DESC
    }], r = {
      startRow: 0,
      startColumn: 0,
      endRow: this._worksheet.getRowCount() - 1,
      endColumn: this._worksheet.getColumnCount() - 1,
      rangeType: k.ALL
    };
    return this._commandService.syncExecuteCommand(h.id, {
      orderRules: t,
      range: r,
      hasTitle: !1,
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId()
    }), this;
  }
}
l.extend(w);
class p {
  get SheetRangeSorted() {
    return "SheetRangeSorted";
  }
  get SheetBeforeRangeSort() {
    return "SheetBeforeRangeSort";
  }
}
R.extend(f);
class x extends C {
  /**
   * @ignore
   */
  _initialize(o) {
    const e = o.get(v);
    this.registerEventHandler(
      this.Event.SheetBeforeRangeSort,
      () => e.beforeCommandExecuted((t) => {
        t.id === h.id && this._beforeRangeSort(t);
      })
    ), this.registerEventHandler(
      this.Event.SheetRangeSorted,
      () => e.onCommandExecuted((t) => {
        t.id === h.id && this._onRangeSorted(t);
      })
    );
  }
  _beforeRangeSort(o) {
    const e = o.params, t = this.getUniverSheet(e.unitId), r = t.getSheetBySheetId(e.subUnitId), { startColumn: n, endColumn: g, startRow: a, endRow: S } = e.range, c = r.getRange(a, n, S - a + 1, g - n + 1), i = {
      workbook: t,
      worksheet: r,
      range: c,
      sortColumn: e.orderRules.map((d) => ({
        column: d.colIndex - n,
        ascending: d.type === s.ASC
      }))
    };
    if (this.fireEvent(this.Event.SheetBeforeRangeSort, i), i.cancel)
      throw new Error("SortRangeCommand canceled.");
  }
  _onRangeSorted(o) {
    const e = o.params, t = this.getUniverSheet(e.unitId), r = t.getSheetBySheetId(e.subUnitId), { startColumn: n, endColumn: g, startRow: a, endRow: S } = e.range, c = r.getRange(a, n, S - a + 1, g - n + 1), i = {
      workbook: t,
      worksheet: r,
      range: c,
      sortColumn: e.orderRules.map((d) => ({
        column: d.colIndex - n,
        ascending: d.type === s.ASC
      }))
    };
    if (this.fireEvent(this.Event.SheetRangeSorted, i), i.cancel)
      throw new Error("SortRangeCommand canceled.");
  }
}
C.extend(x);
R.extend(p);
