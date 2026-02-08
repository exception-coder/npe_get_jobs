var h = Object.defineProperty;
var v = (n, e, t) => e in n ? h(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var m = (n, e, t) => v(n, typeof e != "symbol" ? e + "" : e, t);
import { Inject as _, Injector as g, IUniverInstanceService as I, ICommandService as p, IResourceManagerService as S, UniverInstanceType as a, UndoCommand as l, RedoCommand as D, DOC_RANGE_TYPE as U } from "@univerjs/core";
import { FUniver as u } from "@univerjs/core/facade";
import { InsertCommand as f, DocSelectionRenderService as C } from "@univerjs/docs-ui";
import { IRenderManagerService as y } from "@univerjs/engine-render";
var M = Object.getOwnPropertyDescriptor, R = (n, e, t, r) => {
  for (var i = r > 1 ? void 0 : r ? M(e, t) : e, s = n.length - 1, d; s >= 0; s--)
    (d = n[s]) && (i = d(i) || i);
  return i;
}, c = (n, e) => (t, r) => e(t, r, n);
let o = class {
  constructor(n, e, t, r, i, s) {
    m(this, "id");
    this._documentDataModel = n, this._injector = e, this._univerInstanceService = t, this._commandService = r, this._resourceManagerService = i, this._renderManagerService = s, this.id = this._documentDataModel.getUnitId();
  }
  getId() {
    return this._documentDataModel.getUnitId();
  }
  getName() {
    return this.getSnapshot().title || "";
  }
  getSnapshot() {
    const n = this._resourceManagerService.getResourcesByType(this.id, a.UNIVER_DOC), e = this._documentDataModel.getSnapshot();
    return e.resources = n, e;
  }
  undo() {
    return this._univerInstanceService.focusUnit(this.id), this._commandService.executeCommand(l.id);
  }
  redo() {
    return this._univerInstanceService.focusUnit(this.id), this._commandService.executeCommand(D.id);
  }
  /**
   * Adds the specified text to the end of this text region.
   * @param text - The text to be added to the end of this text region.
   */
  appendText(n) {
    const e = this.id, { body: t } = this.getSnapshot();
    if (!t)
      throw new Error("The document body is empty");
    const r = t.dataStream.length - 2, i = {
      startOffset: r,
      endOffset: r,
      collapsed: !0,
      segmentId: ""
    }, { segmentId: s } = i;
    return this._commandService.executeCommand(f.id, {
      unitId: e,
      body: {
        dataStream: n
      },
      range: i,
      segmentId: s
    });
  }
  /**
   * Sets the selection to a specified text range in the document.
   * @param startOffset - The starting offset of the selection in the document.
   * @param endOffset - The ending offset of the selection in the document.
   * @example
   * ```typescript
   * document.setSelection(10, 20);
   * ```
   */
  setSelection(n, e) {
    var r;
    const t = (r = this._renderManagerService.getRenderById(this.getId())) == null ? void 0 : r.with(C);
    t == null || t.removeAllRanges(), t == null || t.addDocRanges(
      [
        {
          startOffset: n,
          endOffset: e,
          rangeType: U.TEXT
        }
      ],
      !0
    );
  }
};
o = R([
  c(1, _(g)),
  c(2, I),
  c(3, p),
  c(4, S),
  c(5, y)
], o);
class O extends u {
  createUniverDoc(e) {
    const t = this._univerInstanceService.createUnit(a.UNIVER_DOC, e);
    return this._injector.createInstance(o, t);
  }
  getActiveDocument() {
    const e = this._univerInstanceService.getCurrentUnitForType(a.UNIVER_DOC);
    return e ? this._injector.createInstance(o, e) : null;
  }
  getUniverDoc(e) {
    const t = this._univerInstanceService.getUniverDocInstance(e);
    return t ? this._injector.createInstance(o, t) : null;
  }
}
u.extend(O);
export {
  o as FDocument
};
