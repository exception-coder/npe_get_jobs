import { debounce as y, LifecycleService as D, ILogService as R, IConfigService as U, LifecycleStages as A } from "@univerjs/core";
import { FUniver as b, FEnum as L } from "@univerjs/core/facade";
import { SetFormulaCalculationStartMutation as j, FormulaDataModel as k, extractFormulaError as I } from "@univerjs/engine-formula";
import { IRegisterFunctionService as s, RegisterFunctionService as S, PLUGIN_CONFIG_KEY_BASE as v, CalculationMode as N } from "@univerjs/sheets-formula";
import { FFormula as w } from "@univerjs/engine-formula/facade";
import { FWorkbook as M, FRange as p } from "@univerjs/sheets/facade";
class z extends b {
  /**
   * Initialize the FUniver instance.
   * @ignore
   */
  _initialize() {
    this._debouncedFormulaCalculation = y(() => {
      this._commandService.executeCommand(
        j.id,
        {
          commands: [],
          forceCalculation: !0
        },
        {
          onlyLocal: !0
        }
      );
    }, 10);
  }
  registerFunction(t) {
    let r = this._injector.get(s);
    r || (this._injector.add([s, { useClass: S }]), r = this._injector.get(s));
    const e = r.registerFunctions(t);
    return this._debouncedFormulaCalculation(), e;
  }
}
b.extend(z);
class B extends w {
  /**
   * Initialize the FUniver instance.
   * @ignore
   */
  _initialize() {
    this._debouncedFormulaCalculation = y(() => {
      this._commandService.executeCommand(
        j.id,
        {
          commands: [],
          forceCalculation: !0
        },
        {
          onlyLocal: !0
        }
      );
    }, 10);
  }
  setInitialFormulaComputing(t) {
    const e = this._injector.get(D).stage, o = this._injector.get(R), n = this._injector.get(U);
    e > A.Starting && o.warn("[FFormula]", "CalculationMode is called after the Starting lifecycle and will take effect the next time the Univer Sheet is constructed. If you want it to take effect when the Univer Sheet is initialized this time, consider calling it before the Ready lifecycle or using configuration.");
    const i = n.getConfig(v);
    if (!i) {
      n.setConfig(v, { initialFormulaComputing: t });
      return;
    }
    i.initialFormulaComputing = t;
  }
  registerFunction(t, r, e) {
    var c;
    let o = this._injector.get(s);
    o || (this._injector.add([s, { useClass: S }]), o = this._injector.get(s));
    const n = {
      name: t,
      func: r,
      description: typeof e == "string" ? e : (c = e == null ? void 0 : e.description) != null ? c : "",
      locales: typeof e == "object" ? e.locales : void 0
    }, i = o.registerFunction(n);
    return this._debouncedFormulaCalculation(), i;
  }
  registerAsyncFunction(t, r, e) {
    var c;
    let o = this._injector.get(s);
    o || (this._injector.add([s, { useClass: S }]), o = this._injector.get(s));
    const n = {
      name: t,
      func: r,
      description: typeof e == "string" ? e : (c = e == null ? void 0 : e.description) != null ? c : "",
      locales: typeof e == "object" ? e.locales : void 0
    }, i = o.registerAsyncFunction(n);
    return this._debouncedFormulaCalculation(), i;
  }
}
w.extend(B);
class G {
  get CalculationMode() {
    return N;
  }
}
L.extend(G);
class T extends M {
  getAllFormulaError() {
    const t = [], r = this._workbook, e = r.getUnitId(), o = r.getSheets(), n = this._injector.get(k).getArrayFormulaCellData();
    return o.forEach((i) => {
      var h;
      const c = i.getName(), _ = i.getSheetId(), C = i.getCellMatrix(), m = ((h = n == null ? void 0 : n[e]) == null ? void 0 : h[_]) || {};
      C.forValue((F, d, u) => {
        var g;
        if (!u) return;
        const l = (g = m == null ? void 0 : m[F]) == null ? void 0 : g[d], a = I(u, !!l);
        a && t.push({
          sheetName: c,
          row: F,
          column: d,
          formula: u.f || "",
          errorType: a
        });
      });
    }), t;
  }
}
M.extend(T);
class V extends p {
  getFormulaError() {
    var d, u;
    const t = [], r = this._workbook.getUnitId(), e = this._worksheet.getSheetId(), o = this._worksheet.getName(), n = this._workbook.getSheetBySheetId(e);
    if (!n) return t;
    const i = this._injector.get(k).getArrayFormulaCellData(), c = ((d = i == null ? void 0 : i[r]) == null ? void 0 : d[e]) || {}, _ = n.getCellMatrix(), { startRow: C, endRow: m, startColumn: h, endColumn: F } = this._range;
    for (let l = C; l <= m; l++)
      for (let a = h; a <= F; a++) {
        const g = _.getValue(l, a);
        if (!g) continue;
        const E = (u = c == null ? void 0 : c[l]) == null ? void 0 : u[a], x = I(g, !!E);
        x && t.push({
          sheetName: o,
          row: l,
          column: a,
          formula: g.f || "",
          errorType: x
        });
      }
    return t;
  }
}
p.extend(V);
