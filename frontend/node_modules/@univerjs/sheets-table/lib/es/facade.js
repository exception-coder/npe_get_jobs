import { LocaleService as h, IUniverInstanceService as y, UniverInstanceType as x, customNameCharacterCheck as g, ILogService as u, cellToRange as F, Rectangle as N } from "@univerjs/core";
import { SheetTableService as l, AddSheetTableCommand as k, DeleteSheetTableCommand as C, SetSheetTableFilterCommand as T, SetSheetTableCommand as f, AddTableThemeCommand as U, TableColumnFilterTypeEnum as W, TableConditionTypeEnum as j, TableNumberCompareTypeEnum as w, TableStringCompareTypeEnum as L, TableDateCompareTypeEnum as R } from "@univerjs/sheets-table";
import { FWorkbook as _, FWorksheet as p } from "@univerjs/sheets/facade";
import { RangeThemeStyle as P } from "@univerjs/sheets";
import { FEnum as E } from "@univerjs/core/facade";
class V extends _ {
  getTableInfo(e) {
    const t = this.getId();
    return this._injector.get(l).getTableInfo(t, e);
  }
  getTableList() {
    const e = this.getId();
    return this._injector.get(l).getTableList(e);
  }
  async addTable(e, t, n, i, a) {
    var v;
    const o = this._injector.get(l), r = this._injector.get(h), c = this._injector.get(y).getCurrentUnitOfType(x.UNIVER_SHEET), b = /* @__PURE__ */ new Set();
    if (c && c.getSheets().forEach((m) => {
      b.add(m.getName());
    }), !g(t, b)) {
      this._injector.get(u).warn(r.t("sheets-table.tableNameError"));
      return;
    }
    const d = {
      unitId: this.getId(),
      name: t,
      subUnitId: e,
      range: n,
      options: a,
      id: i
    };
    if (await this._commandService.executeCommand(k.id, d))
      return (v = o.getTableList(this.getId()).find((m) => m.name === t)) == null ? void 0 : v.id;
  }
  async removeTable(e) {
    var i;
    const t = (i = this.getTableInfo(e)) == null ? void 0 : i.subUnitId;
    if (!t)
      return !1;
    const n = {
      unitId: this.getId(),
      subUnitId: t,
      tableId: e
    };
    return this._commandService.executeCommand(C.id, n);
  }
  getTableInfoByName(e) {
    return this.getTableList().find((n) => n.name === e);
  }
  setTableFilter(e, t, n) {
    const i = {
      unitId: this.getId(),
      tableId: e,
      column: t,
      tableFilter: n
    };
    return this._commandService.executeCommand(T.id, i);
  }
}
_.extend(V);
class D extends p {
  addTable(e, t, n, i) {
    const a = this.getSheetId(), o = this.getWorkbook(), r = o.getUnitId(), s = this._injector.get(h), c = /* @__PURE__ */ new Set();
    if (o && o.getSheets().forEach((d) => {
      c.add(d.getName());
    }), !g(e, c))
      return this._injector.get(u).warn(s.t("sheets-table.tableNameError")), !1;
    const I = {
      unitId: r,
      subUnitId: a,
      name: e,
      range: t,
      id: n,
      options: i
    };
    return this._commandService.executeCommand(k.id, I);
  }
  setTableFilter(e, t, n) {
    const i = {
      unitId: this.getWorkbook().getUnitId(),
      tableId: e,
      column: t,
      tableFilter: n
    };
    return this._commandService.executeCommand(T.id, i);
  }
  removeTable(e) {
    const t = {
      unitId: this._fWorkbook.getId(),
      subUnitId: this.getSheetId(),
      tableId: e
    };
    return this._commandService.executeCommand(C.id, t);
  }
  setTableRange(e, t) {
    const n = {
      unitId: this.getWorkbook().getUnitId(),
      tableId: e,
      updateRange: {
        newRange: t
      }
    };
    return this._commandService.executeCommand(f.id, n);
  }
  setTableName(e, t) {
    const n = this.getWorkbook(), i = this._injector.get(h), a = /* @__PURE__ */ new Set();
    if (n && n.getSheets().forEach((s) => {
      a.add(s.getName());
    }), !g(t, a))
      return this._injector.get(u).warn(i.t("sheets-table.tableNameError")), !1;
    const r = {
      unitId: this.getWorkbook().getUnitId(),
      tableId: e,
      name: t
    };
    return this._commandService.executeCommand(f.id, r);
  }
  getSubTableInfos() {
    const e = this._fWorkbook.getId();
    return this._injector.get(l).getTableList(e).filter((n) => n.subUnitId === this.getSheetId());
  }
  resetFilter(e, t) {
    const n = {
      unitId: this._fWorkbook.getId(),
      tableId: e,
      column: t,
      tableFilter: void 0
    };
    return this._commandService.executeCommand(T.id, n);
  }
  getTableByCell(e, t) {
    const n = this._fWorkbook.getId(), a = this._injector.get(l).getTableList(n).filter((r) => r.subUnitId === this.getSheetId()), o = F(e, t);
    return a.find((r) => {
      const s = r.range;
      return N.intersects(s, o);
    });
  }
  addTableTheme(e, t) {
    const n = new P("table-style");
    return n.fromJson(t), this._commandService.executeCommand(U.id, {
      unitId: this._fWorkbook.getId(),
      tableId: e,
      themeStyle: n
    });
  }
}
p.extend(D);
class A extends E {
  get TableColumnFilterTypeEnum() {
    return W;
  }
  get TableConditionTypeEnum() {
    return j;
  }
  get TableNumberCompareTypeEnum() {
    return w;
  }
  get TableStringCompareTypeEnum() {
    return L;
  }
  get TableDateCompareTypeEnum() {
    return R;
  }
}
E.extend(A);
