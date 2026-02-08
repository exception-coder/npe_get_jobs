import { SetNumfmtCommand as i, SheetsNumfmtCellContentController as C } from "@univerjs/sheets-numfmt";
import { FRange as d, FWorkbook as h } from "@univerjs/sheets/facade";
class g extends d {
  setNumberFormat(o) {
    const t = [], { startColumn: e, startRow: s, endColumn: r, endRow: u } = this._range;
    for (let m = s; m <= u; m++)
      for (let n = e; n <= r; n++)
        t.push({ row: m, col: n, pattern: o });
    return this._commandService.syncExecuteCommand(i.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      values: t
    }), this;
  }
  setNumberFormats(o) {
    var m;
    const t = [], { startColumn: e, startRow: s, endColumn: r, endRow: u } = this._range;
    for (let n = s; n <= u; n++)
      for (let a = e; a <= r; a++) {
        const c = (m = o[n - s]) == null ? void 0 : m[a - e];
        t.push({ row: n, col: a, pattern: c });
      }
    return this._commandService.syncExecuteCommand(i.id, {
      unitId: this._workbook.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      values: t
    }), this;
  }
  getNumberFormat() {
    var t, e;
    const o = this.getCellStyle();
    return (e = (t = o == null ? void 0 : o.numberFormat) == null ? void 0 : t.pattern) != null ? e : "";
  }
  getNumberFormats() {
    return this.getCellStyles().map((t) => t.map((e) => {
      var s, r;
      return (r = (s = e == null ? void 0 : e.numberFormat) == null ? void 0 : s.pattern) != null ? r : "";
    }));
  }
}
d.extend(g);
class b extends h {
  setNumfmtLocal(o) {
    return this._injector.get(C).setNumfmtLocal(o), this;
  }
}
h.extend(b);
