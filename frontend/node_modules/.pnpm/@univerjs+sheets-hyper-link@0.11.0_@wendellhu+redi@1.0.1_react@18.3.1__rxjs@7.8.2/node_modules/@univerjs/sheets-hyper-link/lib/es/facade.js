import { Inject as L, generateRandomId as f, CustomRangeType as C, DataStreamTreeTokenType as p, ICommandService as b, CanceledError as d } from "@univerjs/core";
import { SheetsHyperLinkParserService as a, AddHyperLinkCommand as u, UpdateHyperLinkCommand as g, CancelHyperLinkCommand as S } from "@univerjs/sheets-hyper-link";
import { FWorkbook as v, FWorksheet as w, FRange as _ } from "@univerjs/sheets/facade";
import { FEventName as x, FUniver as y } from "@univerjs/core/facade";
var I = Object.getOwnPropertyDescriptor, E = (s, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? I(e, i) : e, t = s.length - 1, o; t >= 0; t--)
    (o = s[t]) && (n = o(n) || n);
  return n;
}, H = (s, e) => (i, r) => e(i, r, s);
let m = class {
  constructor(s, e) {
    this._workbook = s, this._parserService = e;
  }
  getRangeUrl(s) {
    return this._parserService.buildHyperLink(this._workbook.getId(), s.getSheetId(), s.getRange()), this;
  }
};
m = E([
  H(1, L(a))
], m);
class U extends v {
  createSheetHyperlink(e, i) {
    return this._injector.get(a).buildHyperLink(this.getId(), e, i);
  }
  /**
   * Parse the hyperlink string to get the hyperlink info.
   * @param {string} hyperlink the hyperlink string
   * @returns {ISheetHyperLinkInfo} the hyperlink info
   */
  parseSheetHyperlink(e) {
    return this._injector.get(a).parseHyperLink(e);
  }
}
v.extend(U);
class R extends w {
  getUrl() {
    return this._injector.get(a).buildHyperLink(this._workbook.getUnitId(), this._worksheet.getSheetId());
  }
}
w.extend(R);
class T extends _ {
  // #region hyperlink
  setHyperLink(e, i) {
    const r = {
      unitId: this.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      link: {
        row: this._range.startRow,
        column: this._range.startColumn,
        payload: e,
        display: i,
        id: f()
      }
    };
    return this._commandService.executeCommand(u.id, r);
  }
  getHyperLinks() {
    var i, r, n;
    const e = this._worksheet.getCellRaw(this._range.startRow, this._range.startColumn);
    return e != null && e.p ? (n = (r = (i = e.p.body) == null ? void 0 : i.customRanges) == null ? void 0 : r.filter((t) => t.rangeType === C.HYPERLINK).map((t) => {
      var o, h, c, l, k;
      return {
        id: `${t.rangeId}`,
        startIndex: t.startIndex,
        endIndex: t.endIndex,
        url: (h = (o = t.properties) == null ? void 0 : o.url) != null ? h : "",
        label: (k = (l = (c = e.p) == null ? void 0 : c.body) == null ? void 0 : l.dataStream.slice(t.startIndex, t.endIndex + 1).replaceAll(p.CUSTOM_RANGE_START, "").replaceAll(p.CUSTOM_RANGE_END, "")) != null ? k : ""
      };
    })) != null ? n : [] : [];
  }
  updateHyperLink(e, i, r) {
    const n = {
      unitId: this.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      row: this._range.startRow,
      column: this._range.startColumn,
      id: e,
      payload: {
        payload: i,
        display: r
      }
    };
    return this._commandService.executeCommand(g.id, n);
  }
  cancelHyperLink(e) {
    const i = {
      unitId: this.getUnitId(),
      subUnitId: this._worksheet.getSheetId(),
      row: this._range.startRow,
      column: this._range.startColumn,
      id: e
    };
    return this._commandService.syncExecuteCommand(S.id, i);
  }
  getUrl() {
    return this._injector.get(a).buildHyperLink(this.getUnitId(), this.getSheetId(), this.getRange());
  }
  // #endregion
}
_.extend(T);
class B {
  get BeforeSheetLinkAdd() {
    return "BeforeSheetLinkAdd";
  }
  get BeforeSheetLinkCancel() {
    return "BeforeSheetLinkCancel";
  }
  get BeforeSheetLinkUpdate() {
    return "BeforeSheetLinkUpdate";
  }
}
x.extend(B);
class A extends y {
  /**
   * @ignore
   */
  _initialize(e) {
    const i = e.get(b);
    this.registerEventHandler(
      this.Event.BeforeSheetLinkAdd,
      () => i.beforeCommandExecuted((r) => {
        if (r.id !== u.id) return;
        const n = this.getCommandSheetTarget(r);
        if (!n) return;
        const t = r.params, o = {
          workbook: n.workbook,
          worksheet: n.worksheet,
          row: t.link.row,
          col: t.link.column,
          link: t.link
        };
        if (this.fireEvent(this.Event.BeforeSheetLinkAdd, o), o.cancel)
          throw new d();
      })
    ), this.registerEventHandler(
      this.Event.BeforeSheetLinkUpdate,
      () => i.beforeCommandExecuted((r) => {
        if (r.id !== g.id) return;
        const n = this.getCommandSheetTarget(r);
        if (!n) return;
        const t = r.params, o = {
          workbook: n.workbook,
          worksheet: n.worksheet,
          row: t.row,
          column: t.column,
          id: t.id,
          payload: t.payload
        };
        if (this.fireEvent(this.Event.BeforeSheetLinkUpdate, o), o.cancel)
          throw new d();
      })
    ), this.registerEventHandler(
      this.Event.BeforeSheetLinkCancel,
      () => i.beforeCommandExecuted((r) => {
        if (r.id !== S.id) return;
        const n = this.getCommandSheetTarget(r);
        if (!n) return;
        const t = r.params, o = {
          workbook: n.workbook,
          worksheet: n.worksheet,
          row: t.row,
          column: t.column,
          id: t.id
        };
        if (this.fireEvent(this.Event.BeforeSheetLinkCancel, o), o.cancel)
          throw new d();
      })
    );
  }
}
y.extend(A);
export {
  U as FWorkbookHyperLinkMixin
};
