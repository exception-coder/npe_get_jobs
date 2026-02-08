import { FEventName as I, FUniver as v } from "@univerjs/core/facade";
import { UpdateNoteMutation as b, RemoveNoteMutation as B, SheetsNoteModel as S, SheetUpdateNoteCommand as f, SheetDeleteNoteCommand as H, SheetToggleNotePopupCommand as w } from "@univerjs/sheets-note";
import { FRange as E, FWorksheet as k } from "@univerjs/sheets/facade";
import { ICommandService as u, CanceledError as N } from "@univerjs/core";
class x {
  get SheetNoteAdd() {
    return "SheetNoteAdd";
  }
  get SheetNoteDelete() {
    return "SheetNoteDelete";
  }
  get SheetNoteUpdate() {
    return "SheetNoteUpdate";
  }
  get SheetNoteShow() {
    return "SheetNoteShow";
  }
  get SheetNoteHide() {
    return "SheetNoteHide";
  }
  get BeforeSheetNoteAdd() {
    return "BeforeSheetNoteAdd";
  }
  get BeforeSheetNoteDelete() {
    return "BeforeSheetNoteDelete";
  }
  get BeforeSheetNoteUpdate() {
    return "BeforeSheetNoteUpdate";
  }
  get BeforeSheetNoteShow() {
    return "BeforeSheetNoteShow";
  }
  get BeforeSheetNoteHide() {
    return "BeforeSheetNoteHide";
  }
}
I.extend(x);
class U extends E {
  createOrUpdateNote(d) {
    return this._commandService.syncExecuteCommand(
      b.id,
      {
        unitId: this.getUnitId(),
        sheetId: this.getSheetId(),
        row: this.getRow(),
        col: this.getColumn(),
        note: d
      }
    ), this;
  }
  deleteNote() {
    return this._commandService.syncExecuteCommand(
      B.id,
      {
        unitId: this.getUnitId(),
        sheetId: this.getSheetId(),
        row: this.getRow(),
        col: this.getColumn()
      }
    ), this;
  }
  getNote() {
    return this._injector.get(S).getNote(this.getUnitId(), this.getSheetId(), this.getRow(), this.getColumn());
  }
}
E.extend(U);
class C extends v {
  // eslint-disable-next-line max-lines-per-function
  _initialize(d) {
    this.registerEventHandler(
      this.Event.SheetNoteAdd,
      () => d.get(S).change$.subscribe((e) => {
        if (e.type === "update" && !e.oldNote && e.note) {
          const { unitId: h, sheetId: t, row: o, col: s, note: r, oldNote: i } = e, n = this.getSheetTarget(h, t);
          if (!n)
            return;
          const { workbook: c, worksheet: l } = n;
          this.fireEvent(this.Event.SheetNoteAdd, {
            workbook: c,
            worksheet: l,
            row: o,
            col: s,
            note: r
          });
        }
      })
    ), this.registerEventHandler(
      this.Event.SheetNoteDelete,
      () => d.get(S).change$.subscribe((e) => {
        if (e.type === "update" && e.oldNote && !e.note) {
          const { unitId: h, sheetId: t, row: o, col: s, note: r, oldNote: i } = e, n = this.getSheetTarget(h, t);
          if (!n)
            return;
          const { workbook: c, worksheet: l } = n;
          this.fireEvent(this.Event.SheetNoteDelete, {
            workbook: c,
            worksheet: l,
            row: o,
            col: s,
            oldNote: i
          });
        }
      })
    ), this.registerEventHandler(
      this.Event.SheetNoteUpdate,
      () => d.get(S).change$.subscribe((e) => {
        if (e.type === "update" && e.oldNote && e.note) {
          const { unitId: h, sheetId: t, row: o, col: s, note: r, oldNote: i } = e, n = this.getSheetTarget(h, t);
          if (!n)
            return;
          const { workbook: c, worksheet: l } = n;
          this.fireEvent(this.Event.SheetNoteUpdate, {
            workbook: c,
            worksheet: l,
            row: o,
            col: s,
            note: r,
            oldNote: i
          });
        }
      })
    ), this.registerEventHandler(
      this.Event.SheetNoteShow,
      () => d.get(S).change$.subscribe((e) => {
        if (e.type === "update" && e.oldNote && e.note && !e.oldNote.show && e.note.show) {
          const { unitId: h, sheetId: t, row: o, col: s } = e, r = this.getSheetTarget(h, t);
          if (!r)
            return;
          const { workbook: i, worksheet: n } = r;
          this.fireEvent(this.Event.SheetNoteShow, {
            workbook: i,
            worksheet: n,
            row: o,
            col: s
          });
        }
      })
    ), this.registerEventHandler(
      this.Event.SheetNoteHide,
      () => d.get(S).change$.subscribe((e) => {
        if (e.type === "update" && e.oldNote && e.note && e.oldNote.show && !e.note.show) {
          const { unitId: h, sheetId: t, row: o, col: s } = e, r = this.getSheetTarget(h, t);
          if (!r)
            return;
          const { workbook: i, worksheet: n } = r;
          this.fireEvent(this.Event.SheetNoteHide, {
            workbook: i,
            worksheet: n,
            row: o,
            col: s
          });
        }
      })
    ), this.registerEventHandler(
      this.Event.BeforeSheetNoteAdd,
      () => d.get(u).beforeCommandExecuted((e) => {
        if (e.id === f.id) {
          const h = d.get(S), { unitId: t, sheetId: o, row: s, col: r, note: i } = e.params;
          if (h.getNote(t, o, s, r)) return;
          const c = this.getSheetTarget(t, o);
          if (!c)
            return;
          const { workbook: l, worksheet: g } = c;
          if (this.fireEvent(this.Event.BeforeSheetNoteAdd, {
            workbook: l,
            worksheet: g,
            row: s,
            col: r,
            note: i
          }))
            throw new N();
        }
      })
    ), this.registerEventHandler(
      this.Event.BeforeSheetNoteDelete,
      () => d.get(u).beforeCommandExecuted((e) => {
        if (e.id === H.id) {
          const h = d.get(S), { unitId: t, sheetId: o, row: s, col: r } = e.params, i = h.getNote(t, o, s, r);
          if (!i) return;
          const n = this.getSheetTarget(t, o);
          if (!n)
            return;
          const { workbook: c, worksheet: l } = n;
          if (this.fireEvent(this.Event.BeforeSheetNoteDelete, {
            workbook: c,
            worksheet: l,
            row: s,
            col: r,
            oldNote: i
          }))
            throw new N();
        }
      })
    ), this.registerEventHandler(
      this.Event.BeforeSheetNoteUpdate,
      () => d.get(u).beforeCommandExecuted((e) => {
        if (e.id === f.id) {
          const h = d.get(S), { unitId: t, sheetId: o, row: s, col: r, note: i } = e.params, n = h.getNote(t, o, s, r);
          if (!n) return;
          const c = this.getSheetTarget(t, o);
          if (!c)
            return;
          const { workbook: l, worksheet: g } = c;
          if (this.fireEvent(this.Event.BeforeSheetNoteUpdate, {
            workbook: l,
            worksheet: g,
            row: s,
            col: r,
            note: i,
            oldNote: n
          }))
            throw new N();
        }
      })
    ), this.registerEventHandler(
      this.Event.BeforeSheetNoteShow,
      () => d.get(u).beforeCommandExecuted((e) => {
        if (e.id === w.id) {
          const h = d.get(S), { unitId: t, sheetId: o, row: s, col: r } = e.params, i = h.getNote(t, o, s, r);
          if (i != null && i.show) return;
          const n = this.getSheetTarget(t, o);
          if (!n)
            return;
          const { workbook: c, worksheet: l } = n;
          if (this.fireEvent(this.Event.BeforeSheetNoteShow, {
            workbook: c,
            worksheet: l,
            row: s,
            col: r
          }))
            throw new N();
        }
      })
    ), this.registerEventHandler(
      this.Event.BeforeSheetNoteHide,
      () => d.get(u).beforeCommandExecuted((e) => {
        if (e.id === w.id) {
          const h = d.get(S), { unitId: t, sheetId: o, row: s, col: r } = e.params, i = h.getNote(t, o, s, r);
          if (!(i != null && i.show)) return;
          const n = this.getSheetTarget(t, o);
          if (!n)
            return;
          const { workbook: c, worksheet: l } = n;
          if (this.fireEvent(this.Event.BeforeSheetNoteHide, {
            workbook: c,
            worksheet: l,
            row: s,
            col: r
          }))
            throw new N();
        }
      })
    );
  }
}
v.extend(C);
class T extends k {
  getNotes() {
    const a = this._injector.get(S).getSheetNotes(this.getWorkbook().getUnitId(), this.getSheetId()), e = [];
    return a == null || a.forValue((h, t, o) => {
      e.push({
        ...o,
        row: h,
        col: t
      });
    }), e;
  }
}
k.extend(T);
export {
  x as FSheetNoteEvent,
  U as FSheetsNoteRangeMixin,
  T as FSheetsNoteWorksheet,
  C as FUniverSheetNoteMixin
};
