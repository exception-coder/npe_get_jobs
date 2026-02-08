var ae = Object.defineProperty;
var ie = (e, n, t) => n in e ? ae(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var L = (e, n, t) => ie(e, typeof n != "symbol" ? n + "" : n, t);
import { LocaleType as f, numfmt as x, CommandType as U, ICommandService as $, IUniverInstanceService as V, IUndoRedoService as ce, isTextFormat as J, CellValueType as M, ObjectMatrix as R, sequenceExecute as le, Range as N, isDefaultFormat as W, LocaleService as Q, DEFAULT_NUMBER_FORMAT as ue, Inject as I, ThemeService as fe, IConfigService as ee, Disposable as me, InterceptorEffectEnum as z, UniverInstanceType as te, DependentOn as de, Injector as ge, Plugin as he, merge as pe, registerDependencies as _e, touchDependencies as ve } from "@univerjs/core";
import { getSheetCommandTarget as K, transformCellsToRange as Se, checkCellValueType as H, rangeMerge as k, SetNumfmtMutation as ne, factorySetNumfmtUndoMutation as Ce, RemoveNumfmtMutation as ye, SetRangeValuesMutation as G, factoryRemoveNumfmtUndoMutation as be, SheetsSelectionsService as j, INumfmtService as Z, SheetInterceptorService as Me, INTERCEPTOR_POINT as Re, InterceptCellContentPriority as Ee, UniverSheetsPlugin as Ne } from "@univerjs/sheets";
import { BehaviorSubject as $e, merge as Ie, switchMap as Te, of as Ue, skip as Oe } from "rxjs";
import { stripErrorMargin as we } from "@univerjs/engine-formula";
const re = [
  "$",
  "£",
  "¥",
  "¤",
  "֏",
  "؋",
  "৳",
  "฿",
  "៛",
  "₡",
  "₦",
  "₩",
  "₪",
  "₫",
  "€",
  "₭",
  "₮",
  "₱",
  "₲",
  "₴",
  "₸",
  "₹",
  "₺",
  "₼",
  "₽",
  "₾",
  "₿",
  "﷼"
], w = /* @__PURE__ */ new Map([
  [f.EN_US, "$"],
  [f.RU_RU, "₽"],
  [f.VI_VN, "₫"],
  [f.ZH_CN, "¥"],
  [f.ZH_TW, "NT$"],
  [f.FR_FR, "€"],
  [f.FA_IR, "﷼"],
  [f.KO_KR, "₩"],
  [f.ES_ES, "€"],
  [f.CA_ES, "€"]
]);
function xe(e) {
  switch (e) {
    case f.CA_ES:
    case f.ES_ES:
    case f.FR_FR:
      return {
        icon: "EuroIcon",
        symbol: w.get(e) || "€",
        locale: e
      };
    case f.RU_RU:
      return {
        icon: "RoubleIcon",
        symbol: w.get(e) || "₽",
        locale: e
      };
    case f.ZH_CN:
      return {
        icon: "RmbIcon",
        symbol: w.get(e) || "¥",
        locale: e
      };
    case f.EN_US:
    default:
      return {
        icon: "DollarIcon",
        symbol: "$",
        locale: f.EN_US
      };
  }
}
function Y(e) {
  return w.get(e) || "$";
}
function Pe(e, n = 2) {
  let t = n;
  n > 127 && (t = 127);
  let r = "";
  return t > 0 && (r = `.${"0".repeat(t)}`), `"${Y(e)}"#,##0${r}_);[Red]("${Y(e)}"#,##0${r})`;
}
const Fe = [
  {
    label: "1930-08-05",
    suffix: "yyyy-MM-dd"
  },
  {
    label: "1930/08/05",
    suffix: "yyyy/MM/dd"
  },
  {
    label: "1930年08月05日",
    suffix: 'yyyy"年"MM"月"dd"日"'
  },
  {
    label: "08-05",
    suffix: "MM-dd"
  },
  {
    label: "8月5日",
    suffix: 'M"月"d"日"'
  },
  {
    label: "13:30:30",
    suffix: "h:mm:ss"
  },
  {
    label: "13:30",
    suffix: "h:mm"
  },
  {
    label: "下午01:30",
    suffix: "A/P hh:mm"
  },
  {
    label: "下午1:30",
    suffix: "A/P h:mm"
  },
  {
    label: "下午1:30:30",
    suffix: "A/P h:mm:ss"
  },
  {
    label: "08-05 下午 01:30",
    suffix: "MM-dd A/P hh:mm"
  }
], De = [
  {
    label: "(1,235)",
    suffix: "#,##0_);(#,##0)"
  },
  {
    label: "(1,235) ",
    suffix: "#,##0_);[Red](#,##0)",
    color: "red"
  },
  {
    label: "1,234.56",
    suffix: "#,##0.00_);#,##0.00"
  },
  {
    label: "1,234.56",
    suffix: "#,##0.00_);[Red]#,##0.00",
    color: "red"
  },
  {
    label: "-1,234.56",
    suffix: "#,##0.00_);-#,##0.00"
  },
  {
    label: "-1,234.56",
    suffix: "#,##0.00_);[Red]-#,##0.00",
    color: "red"
  }
], Ae = [
  {
    label: (e) => `${e}1,235`,
    suffix: (e) => `"${e}"#,##0.00_);"${e}"#,##0.00`
  },
  {
    label: (e) => `${e}1,235`,
    suffix: (e) => `"${e}"#,##0.00_);[Red]"${e}"#,##0.00`,
    color: "red"
  },
  {
    label: (e) => `(${e}1,235)`,
    suffix: (e) => `"${e}"#,##0.00_);("${e}"#,##0.00)`
  },
  {
    label: (e) => `(${e}1,235)`,
    suffix: (e) => `"${e}"#,##0.00_);[Red]("${e}"#,##0.00)`,
    color: "red"
  },
  {
    label: (e) => `-${e}1,235`,
    suffix: (e) => `"${e}"#,##0.00_);-"${e}"#,##0.00`
  },
  {
    label: (e) => `-${e}1,235`,
    suffix: (e) => `"${e}"#,##0.00_);[Red]-"${e}"#,##0.00`,
    color: "red"
  }
], P = (e, n = 0) => {
  var r;
  return e && (r = x.getFormatInfo(e).maxDecimals) != null ? r : n;
}, q = (e) => new Array(Math.min(Math.max(0, Number(e)), 30)).fill(0).join(""), F = (e, n) => e.split(";").map((r) => /\.0?/.test(r) ? r.replace(
  /\.0*/g,
  `${n > 0 ? "." : ""}${q(Number(n || 0))}`
) : /0([^0]?)|0$/.test(r) ? r.replace(
  /0([^0]+)|0$/,
  `0${n > 0 ? "." : ""}${q(Number(n || 0))}$1`
) : r).join(";"), rt = (e) => /\.0?/.test(e) || /0([^0]?)|0$/.test(e), O = {
  id: "sheet.command.numfmt.set.numfmt",
  type: U.COMMAND,
  // eslint-disable-next-line max-lines-per-function
  handler: (e, n) => {
    if (!n)
      return !1;
    const t = e.get($), r = e.get(V), s = e.get(ce), a = K(r, n);
    if (!a) return !1;
    const { unitId: l, subUnitId: o, worksheet: h } = a, u = n.values.filter((i) => !!i.pattern), C = n.values.filter((i) => !i.pattern), y = Se(l, o, u), p = {
      unitId: l,
      subUnitId: o,
      ranges: C.map((i) => ({
        startColumn: i.col,
        startRow: i.row,
        endColumn: i.col,
        endRow: i.row
      }))
    }, b = [], _ = [];
    if (u.length) {
      const i = u.reduce((d, c) => {
        J(c.pattern) && d.setValue(c.row, c.col, { t: M.STRING });
        const S = h.getCellRaw(c.row, c.col);
        if (S) {
          const T = H(S.v);
          T !== S.t && d.setValue(c.row, c.col, { t: T });
        }
        return d;
      }, new R()).getMatrix(), g = new R();
      new R(i).forValue((d, c) => {
        const S = h.getCellRaw(d, c);
        S ? g.setValue(d, c, { t: S.t }) : g.setValue(d, c, { t: void 0 });
      }), Object.keys(y.values).forEach((d) => {
        const c = y.values[d];
        c.ranges = k(c.ranges);
      }), b.push({
        id: ne.id,
        params: y
      });
      const v = Ce(e, y);
      _.push(...v);
    }
    if (C.length) {
      p.ranges = k(p.ranges);
      const i = C.reduce((d, c) => {
        const S = h.getCellRaw(c.row, c.col);
        if (S) {
          const T = H(S.v);
          T !== S.t && d.setValue(c.row, c.col, { t: T });
        }
        return d;
      }, new R()).getMatrix(), g = new R();
      new R(i).forValue((d, c) => {
        const S = h.getCellRaw(d, c);
        S ? g.setValue(d, c, { t: S.t }) : g.setValue(d, c, { t: void 0 });
      }), b.push({
        id: ye.id,
        params: p
      }, {
        id: G.id,
        params: {
          unitId: l,
          subUnitId: o,
          cellValue: i
        }
      });
      const v = be(e, p);
      _.push({
        id: G.id,
        params: {
          unitId: l,
          subUnitId: o,
          cellValue: g.getMatrix()
        }
      }, ...v);
    }
    const m = le(b, t).result;
    return m && s.pushUndoRedo({
      unitID: l,
      undoMutations: _,
      redoMutations: b
    }), m;
  }
}, Ve = {
  id: "sheet.command.numfmt.add.decimal.command",
  type: U.COMMAND,
  handler: async (e) => {
    const n = e.get($), t = e.get(j), r = e.get(Z), s = e.get(V), a = t.getCurrentSelections();
    if (!a || !a.length)
      return !1;
    const l = K(s);
    if (!l) return !1;
    const { unitId: o, subUnitId: h } = l;
    let u = 0;
    a.forEach((b) => {
      N.foreach(b.range, (_, m) => {
        const i = r.getValue(o, h, _, m);
        if (!i) {
          const v = l.worksheet.getCellRaw(_, m);
          if (!u && v && v.t === M.NUMBER && v.v) {
            const d = /\.(\d*)$/.exec(String(v.v));
            if (d) {
              const c = d[1].length;
              if (!c)
                return;
              u = Math.max(u, c);
            }
          }
          return;
        }
        const g = P(i.pattern);
        u = g > u ? g : u;
      });
    });
    const C = u + 1, y = F(`0${C > 0 ? ".0" : ""}`, C), p = [];
    return a.forEach((b) => {
      N.foreach(b.range, (_, m) => {
        const i = r.getValue(o, h, _, m);
        if (W(i == null ? void 0 : i.pattern))
          p.push({
            row: _,
            col: m,
            pattern: y
          });
        else {
          const g = P(i.pattern), v = F(i.pattern, g + 1);
          v !== i.pattern && p.push({
            row: _,
            col: m,
            pattern: v
          });
        }
      });
    }), p.length ? await n.executeCommand(O.id, { values: p }) : !1;
  }
}, je = {
  id: "sheet.command.numfmt.set.currency",
  type: U.COMMAND,
  handler: async (e) => {
    const n = e.get($), t = e.get(j), r = e.get(Q), s = t.getCurrentSelections();
    if (!s || !s.length)
      return !1;
    const a = [], l = xe(r.getCurrentLocale()), o = Pe(l.locale);
    return s.forEach((u) => {
      N.foreach(u.range, (C, y) => {
        a.push({ row: C, col: y, pattern: o, type: "currency" });
      });
    }), await n.executeCommand(O.id, { values: a });
  }
}, Le = {
  id: "sheet.command.numfmt.set.percent",
  type: U.COMMAND,
  handler: async (e) => {
    const n = e.get($), r = e.get(j).getCurrentSelections();
    if (!r || !r.length)
      return !1;
    const s = [], a = "0%";
    return r.forEach((o) => {
      N.foreach(o.range, (h, u) => {
        s.push({ row: h, col: u, pattern: a, type: "percent" });
      });
    }), await n.executeCommand(O.id, { values: s });
  }
}, Be = {
  id: "sheet.command.numfmt.subtract.decimal.command",
  type: U.COMMAND,
  handler: async (e) => {
    const n = e.get($), t = e.get(j), r = e.get(Z), s = e.get(V), a = t.getCurrentSelections();
    if (!a || !a.length)
      return !1;
    const l = K(s);
    if (!l) return !1;
    const { unitId: o, subUnitId: h } = l;
    let u = 0;
    a.forEach((_) => {
      N.foreach(_.range, (m, i) => {
        const g = r.getValue(o, h, m, i);
        if (!g) {
          const d = l.worksheet.getCellRaw(m, i);
          if (!u && d && d.t === M.NUMBER && d.v) {
            const c = /\.(\d*)$/.exec(String(d.v));
            if (c) {
              const S = c[1].length;
              if (!S)
                return;
              u = Math.max(u, S);
            }
          }
          return;
        }
        const v = P(g.pattern);
        u = v > u ? v : u;
      });
    });
    const C = u - 1, y = F(`0${C > 0 ? ".0" : "."}`, C), p = [];
    return a.forEach((_) => {
      N.foreach(_.range, (m, i) => {
        const g = r.getValue(o, h, m, i);
        if (W(g == null ? void 0 : g.pattern))
          p.push({
            row: m,
            col: i,
            pattern: y
          });
        else {
          const v = P(g.pattern);
          p.push({
            row: m,
            col: i,
            pattern: F(g.pattern, v - 1)
          });
        }
      });
    }), await n.executeCommand(O.id, { values: p });
  }
}, se = "sheets-numfmt.config", X = {}, st = (e) => x.getFormatInfo(e).type || "unknown", He = (e, n, t = "en") => {
  const r = x.formatColor(e, n), s = r ? String(r) : void 0, a = x.format(e, n, { locale: t, throws: !1 });
  return n < 0 ? {
    result: a,
    color: s
  } : {
    result: a
  };
}, Ge = (e, n, t) => e === ue ? {
  result: String(we(n))
  // In Excel, the default General format also needs to handle numeric precision.
} : He(e, n, t);
var We = Object.getOwnPropertyDescriptor, Ke = (e, n, t, r) => {
  for (var s = r > 1 ? void 0 : r ? We(n, t) : n, a = e.length - 1, l; a >= 0; a--)
    (l = e[a]) && (s = l(s) || s);
  return s;
}, E = (e, n) => (t, r) => n(t, r, e);
const Ze = {
  tl: {
    size: 6,
    color: "#409f11"
  }
};
let D = class extends me {
  constructor(n, t, r, s, a, l, o) {
    super();
    L(this, "_locale$", new $e("en"));
    L(this, "locale$", this._locale$.asObservable());
    this._instanceService = n, this._sheetInterceptorService = t, this._themeService = r, this._commandService = s, this._numfmtService = a, this._localeService = l, this._configService = o, this._initInterceptorCellContent();
  }
  get locale() {
    const n = this._locale$.getValue();
    if (n)
      return n;
    switch (this._localeService.getCurrentLocale()) {
      case f.FR_FR:
        return "fr";
      case f.RU_RU:
        return "ru";
      case f.VI_VN:
        return "vi";
      case f.ZH_CN:
        return "zh-CN";
      case f.KO_KR:
        return "ko";
      case f.ZH_TW:
        return "zh-TW";
      case f.ES_ES:
      case f.CA_ES:
        return "es";
      case f.EN_US:
      case f.FA_IR:
      default:
        return "en";
    }
  }
  // eslint-disable-next-line max-lines-per-function
  _initInterceptorCellContent() {
    const n = new R();
    this.disposeWithMe(Ie(this._locale$, this._localeService.currentLocale$).subscribe(() => {
      n.reset();
    })), this.disposeWithMe(this._sheetInterceptorService.intercept(Re.CELL_CONTENT, {
      effect: z.Value | z.Style,
      // eslint-disable-next-line max-lines-per-function, complexity
      handler: (t, r, s) => {
        var b, _;
        if (!t || t.v === void 0 || t.v === null || t.t === M.BOOLEAN || t.t === M.FORCE_STRING)
          return s(t);
        const a = r.unitId, l = r.subUnitId;
        let o;
        if (t != null && t.s) {
          const m = r.workbook.getStyles().get(t.s);
          m != null && m.n && (o = m.n);
        }
        if (o || (o = this._numfmtService.getValue(a, l, r.row, r.col)), W(o == null ? void 0 : o.pattern) || t.t !== M.NUMBER && H(t.v, t.t) !== M.NUMBER)
          return s(t);
        const h = t;
        if ((!t || t === r.rawData) && (t = { ...r.rawData }), J(o == null ? void 0 : o.pattern))
          return (b = this._configService.getConfig(se)) != null && b.disableTextFormatMark ? (t.t = M.STRING, s(t)) : (t.t = M.STRING, t.markers = { ...t == null ? void 0 : t.markers, ...Ze }, s(t));
        let u = "";
        const C = n.getValue(r.row, r.col);
        if (C && C.parameters === `${h.v}_${o == null ? void 0 : o.pattern}`)
          return s({ ...t, ...C.result });
        const y = Ge(o == null ? void 0 : o.pattern, Number(h.v), this.locale);
        if (u = y.result, !u)
          return s(t);
        const p = { v: u, t: M.NUMBER };
        if (y.color) {
          const m = (_ = this._themeService.getColorFromTheme(`${y.color}.500`)) != null ? _ : y.color;
          m && (p.interceptorStyle = { cl: { rgb: m } });
        }
        return n.setValue(r.row, r.col, {
          result: p,
          parameters: `${h.v}_${o == null ? void 0 : o.pattern}`
        }), Object.assign(t, p), s(t);
      },
      priority: Ee.NUMFMT
    })), this.disposeWithMe(this._commandService.onCommandExecuted((t) => {
      if (t.id === ne.id) {
        const r = t.params;
        Object.keys(r.values).forEach((s) => {
          r.values[s].ranges.forEach((l) => {
            N.foreach(l, (o, h) => {
              n.realDeleteValue(o, h);
            });
          });
        });
      } else if (t.id === G.id) {
        const r = t.params;
        new R(r.cellValue).forValue((s, a) => {
          n.realDeleteValue(s, a);
        });
      }
    })), this.disposeWithMe(
      this._instanceService.getCurrentTypeOfUnit$(te.UNIVER_SHEET).pipe(
        Te((t) => {
          var r;
          return (r = t == null ? void 0 : t.activeSheet$) != null ? r : Ue(null);
        }),
        Oe(1)
      ).subscribe(() => n.reset())
    );
  }
  setNumfmtLocal(n) {
    this._locale$.next(n);
  }
};
D = Ke([
  E(0, V),
  E(1, I(Me)),
  E(2, I(fe)),
  E(3, I($)),
  E(4, I(Z)),
  E(5, I(Q)),
  E(6, ee)
], D);
const ze = "SHEET_NUMFMT_PLUGIN";
var ke = Object.defineProperty, Ye = Object.getOwnPropertyDescriptor, qe = (e, n, t) => n in e ? ke(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Xe = (e, n, t, r) => {
  for (var s = r > 1 ? void 0 : r ? Ye(n, t) : n, a = e.length - 1, l; a >= 0; a--)
    (l = e[a]) && (s = l(s) || s);
  return s;
}, B = (e, n) => (t, r) => n(t, r, e), oe = (e, n, t) => qe(e, typeof n != "symbol" ? n + "" : n, t);
let A = class extends he {
  constructor(e = X, n, t, r) {
    super(), this._config = e, this._injector = n, this._configService = t, this._commandService = r;
    const { ...s } = pe(
      {},
      X,
      this._config
    );
    this._configService.setConfig(se, s);
  }
  onStarting() {
    _e(this._injector, [
      [D]
    ]), ve(this._injector, [
      [D]
    ]);
  }
  onRendered() {
    [
      Ve,
      Be,
      je,
      Le,
      O
    ].forEach((e) => {
      this.disposeWithMe(this._commandService.registerCommand(e));
    });
  }
};
oe(A, "pluginName", ze);
oe(A, "type", te.UNIVER_SHEET);
A = Xe([
  de(Ne),
  B(1, I(ge)),
  B(2, ee),
  B(3, $)
], A);
const ot = (e) => re.find((t) => e.includes(t)), at = () => re.map((e) => ({ label: e, value: e })), it = (e) => Ae.map((n) => ({
  label: n.label(e),
  value: n.suffix(e),
  color: n.color
})), ct = () => Fe.map((e) => ({ label: e.label, value: e.suffix })), lt = () => De.map((e) => ({ label: e.label, value: e.suffix, color: e.color }));
export {
  Ve as AddDecimalCommand,
  Ae as CURRENCYFORMAT,
  Fe as DATEFMTLISG,
  De as NUMBERFORMAT,
  se as SHEETS_NUMFMT_PLUGIN_CONFIG_KEY,
  je as SetCurrencyCommand,
  O as SetNumfmtCommand,
  Le as SetPercentCommand,
  D as SheetsNumfmtCellContentController,
  Be as SubtractDecimalCommand,
  A as UniverSheetsNumfmtPlugin,
  re as currencySymbols,
  Pe as getCurrencyFormat,
  it as getCurrencyFormatOptions,
  at as getCurrencyOptions,
  Y as getCurrencySymbolByLocale,
  xe as getCurrencySymbolIconByLocale,
  ot as getCurrencyType,
  ct as getDateFormatOptions,
  P as getDecimalFromPattern,
  q as getDecimalString,
  lt as getNumberFormatOptions,
  He as getPatternPreview,
  Ge as getPatternPreviewIgnoreGeneral,
  st as getPatternType,
  rt as isPatternHasDecimal,
  w as localeCurrencySymbolMap,
  F as setPatternDecimal
};
