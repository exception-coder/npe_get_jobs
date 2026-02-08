var L = Object.defineProperty;
var N = (i, e, r) => e in i ? L(i, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : i[e] = r;
var M = (i, e, r) => N(i, typeof e != "symbol" ? e + "" : e, r);
import { Inject as T, Injector as V, ICommandService as p, IUniverInstanceService as q, UserManagerService as W, UniverInstanceType as G, RichTextValue as k, generateRandomId as R, RichTextBuilder as J, Tools as F, Range as K, toDisposable as S, CanceledError as E } from "@univerjs/core";
import { SheetsThreadCommentModel as b } from "@univerjs/sheets-thread-comment";
import { FRange as j, FWorkbook as H, FWorksheet as O } from "@univerjs/sheets/facade";
import { DeleteCommentTreeCommand as w, DeleteCommentCommand as y, getDT as B, UpdateCommentCommand as x, ResolveCommentCommand as D, AddCommentCommand as f, ThreadCommentModel as Q } from "@univerjs/thread-comment";
import { deserializeRangeWithSheet as X } from "@univerjs/engine-formula";
import { filter as Y } from "rxjs";
import { FEventName as z, FUniver as $ } from "@univerjs/core/facade";
var Z = Object.getOwnPropertyDescriptor, ee = (i, e, r, t) => {
  for (var n = t > 1 ? void 0 : t ? Z(e, r) : e, o = i.length - 1, s; o >= 0; o--)
    (s = i[o]) && (n = s(n) || n);
  return n;
}, _ = (i, e) => (r, t) => e(r, t, i);
class A {
  constructor(e) {
    M(this, "_comment", {
      id: R(),
      ref: "",
      threadId: "",
      dT: "",
      personId: "",
      text: J.newEmptyData().body,
      attachments: [],
      unitId: "",
      subUnitId: ""
    });
    e && (this._comment = e);
  }
  /**
   * Create a new FTheadCommentItem
   * @param {IThreadComment|undefined} comment The comment
   * @returns {FTheadCommentItem} A new instance of FTheadCommentItem
   * @example
   * ```ts
   * const commentBuilder = univerAPI.newTheadComment();
   * console.log(commentBuilder);
   * ```
   */
  static create(e) {
    return new A(e);
  }
  /**
   * Get the person id of the comment
   * @returns {string} The person id of the comment
   * @example
   * ```ts
   * const commentBuilder = univerAPI.newTheadComment();
   * console.log(commentBuilder.personId);
   * ```
   */
  get personId() {
    return this._comment.personId;
  }
  /**
   * Get the date time of the comment
   * @returns {string} The date time of the comment
   * @example
   * ```ts
   * const commentBuilder = univerAPI.newTheadComment();
   * console.log(commentBuilder.dateTime);
   * ```
   */
  get dateTime() {
    return this._comment.dT;
  }
  /**
   * Get the content of the comment
   * @returns {RichTextValue} The content of the comment
   * @example
   * ```ts
   * const commentBuilder = univerAPI.newTheadComment();
   * console.log(commentBuilder.content);
   * ```
   */
  get content() {
    return k.createByBody(this._comment.text);
  }
  /**
   * Get the id of the comment
   * @returns {string} The id of the comment
   * @example
   * ```ts
   * const commentBuilder = univerAPI.newTheadComment();
   * console.log(commentBuilder.id);
   * ```
   */
  get id() {
    return this._comment.id;
  }
  /**
   * Get the thread id of the comment
   * @returns {string} The thread id of the comment
   * @example
   * ```ts
   * const commentBuilder = univerAPI.newTheadComment();
   * console.log(commentBuilder.threadId);
   * ```
   */
  get threadId() {
    return this._comment.threadId;
  }
  /**
   * Copy the comment
   * @returns {FTheadCommentBuilder} The comment builder
   * @example
   * ```ts
   * const commentBuilder = univerAPI.newTheadComment();
   * const newCommentBuilder = commentBuilder.copy();
   * console.log(newCommentBuilder);
   * ```
   */
  copy() {
    return U.create(F.deepClone(this._comment));
  }
}
class U extends A {
  static create(e) {
    return new U(e);
  }
  /**
   * Set the content of the comment
   * @param {IDocumentBody | RichTextValue} content The content of the comment
   * @returns {FTheadCommentBuilder} The comment builder for chaining
   * @example
   * ```ts
   * // Create a new comment
   * const richText = univerAPI.newRichText().insertText('hello univer');
   * const commentBuilder = univerAPI.newTheadComment()
   *   .setContent(richText);
   * console.log(commentBuilder.content);
   *
   * // Add the comment to the cell A1
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const cell = fWorksheet.getRange('A1');
   * const result = await cell.addCommentAsync(commentBuilder);
   * console.log(result);
   * ```
   */
  setContent(e) {
    return e instanceof k ? this._comment.text = e.getData().body : this._comment.text = e, this;
  }
  /**
   * Set the person id of the comment
   * @param {string} userId The person id of the comment
   * @returns {FTheadCommentBuilder} The comment builder for chaining
   * @example
   * ```ts
   * // Create a new comment
   * const richText = univerAPI.newRichText().insertText('hello univer');
   * const commentBuilder = univerAPI.newTheadComment()
   *   .setContent(richText)
   *   .setPersonId('mock-user-id');
   * console.log(commentBuilder.personId);
   *
   * // Add the comment to the cell A1
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const cell = fWorksheet.getRange('A1');
   * const result = await cell.addCommentAsync(commentBuilder);
   * console.log(result);
   * ```
   */
  setPersonId(e) {
    return this._comment.personId = e, this;
  }
  /**
   * Set the date time of the comment
   * @param {Date} date The date time of the comment
   * @returns {FTheadCommentBuilder} The comment builder for chaining
   * @example
   * ```ts
   * // Create a new comment
   * const richText = univerAPI.newRichText().insertText('hello univer');
   * const commentBuilder = univerAPI.newTheadComment()
   *   .setContent(richText)
   *   .setDateTime(new Date('2025-02-21 14:22:22'));
   * console.log(commentBuilder.dateTime);
   *
   * // Add the comment to the cell A1
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const cell = fWorksheet.getRange('A1');
   * const result = await cell.addCommentAsync(commentBuilder);
   * console.log(result);
   * ```
   */
  setDateTime(e) {
    return this._comment.dT = B(e), this;
  }
  /**
   * Set the id of the comment
   * @param {string} id The id of the comment
   * @returns {FTheadCommentBuilder} The comment builder for chaining
   * @example
   * ```ts
   * // Create a new comment
   * const richText = univerAPI.newRichText().insertText('hello univer');
   * const commentBuilder = univerAPI.newTheadComment()
   *   .setContent(richText)
   *   .setId('mock-comment-id');
   * console.log(commentBuilder.id);
   *
   * // Add the comment to the cell A1
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const cell = fWorksheet.getRange('A1');
   * const result = await cell.addCommentAsync(commentBuilder);
   * console.log(result);
   * ```
   */
  setId(e) {
    return this._comment.id = e, this;
  }
  /**
   * Set the thread id of the comment
   * @param {string} threadId The thread id of the comment
   * @returns {FTheadCommentBuilder} The comment builder
   * @example
   * ```ts
   * // Create a new comment
   * const richText = univerAPI.newRichText().insertText('hello univer');
   * const commentBuilder = univerAPI.newTheadComment()
   *   .setContent(richText)
   *   .setThreadId('mock-thread-id');
   * console.log(commentBuilder.threadId);
   *
   * // Add the comment to the cell A1
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const cell = fWorksheet.getRange('A1');
   * const result = await cell.addCommentAsync(commentBuilder);
   * console.log(result);
   * ```
   */
  setThreadId(e) {
    return this._comment.threadId = e, this;
  }
  /**
   * Build the comment
   * @returns {IThreadComment} The comment
   * @example
   * ```ts
   * const richText = univerAPI.newRichText().insertText('hello univer');
   * const comment = univerAPI.newTheadComment()
   *   .setContent(richText)
   *   .setPersonId('mock-user-id')
   *   .setDateTime(new Date('2025-02-21 14:22:22'))
   *   .setId('mock-comment-id')
   *   .setThreadId('mock-thread-id')
   *   .build();
   * console.log(comment);
   * ```
   */
  build() {
    return this._comment;
  }
}
let I = class {
  /**
   * @ignore
   */
  constructor(i, e, r, t, n, o, s) {
    this._thread = i, this._parent = e, this._injector = r, this._commandService = t, this._univerInstanceService = n, this._threadCommentModel = o, this._userManagerService = s;
  }
  _getRef() {
    var r;
    const i = ((r = this._parent) == null ? void 0 : r.ref) || this._thread.ref;
    return X(i).range;
  }
  /**
   * Whether the comment is a root comment
   * @returns {boolean} Whether the comment is a root comment
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const comments = fWorksheet.getComments();
   * comments.forEach((comment) => {
   *   console.log(comment.getIsRoot());
   * });
   * ```
   */
  getIsRoot() {
    return !this._parent;
  }
  /**
   * Get the comment data
   * @returns {IBaseComment} The comment data
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const comments = fWorksheet.getComments();
   * comments.forEach((comment) => {
   *   console.log(comment.getCommentData());
   * });
   * ```
   */
  getCommentData() {
    const { children: i, ...e } = this._thread;
    return e;
  }
  /**
   * Get the replies of the comment
   * @returns {FThreadComment[]} the replies of the comment
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const comments = fWorksheet.getComments();
   * comments.forEach((comment) => {
   *   if (comment.getIsRoot()) {
   *     const replies = comment.getReplies();
   *     replies.forEach((reply) => {
   *       console.log(reply.getCommentData());
   *     });
   *   }
   * });
   * ```
   */
  getReplies() {
    var r;
    const i = this._getRef(), e = this._threadCommentModel.getCommentWithChildren(this._thread.unitId, this._thread.subUnitId, i.startRow, i.startColumn);
    return (r = e == null ? void 0 : e.children) == null ? void 0 : r.map((t) => this._injector.createInstance(I, t));
  }
  /**
   * Get the range of the comment
   * @returns {FRange | null} The range of the comment
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const comments = fWorksheet.getComments();
   * comments.forEach((comment) => {
   *   console.log(comment.getRange().getA1Notation());
   * });
   * ```
   */
  getRange() {
    const i = this._univerInstanceService.getUnit(this._thread.unitId, G.UNIVER_SHEET);
    if (!i)
      return null;
    const e = i.getSheetBySheetId(this._thread.subUnitId);
    if (!e)
      return null;
    const r = this._getRef();
    return this._injector.createInstance(j, i, e, r);
  }
  // eslint-disable-next-line
  /**
   * @deprecated use `getRichText` as instead
   */
  getContent() {
    return this._thread.text;
  }
  /**
   * Get the rich text of the comment
   * @returns {RichTextValue} The rich text of the comment
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const comments = fWorksheet.getComments();
   * comments.forEach((comment) => {
   *   console.log(comment.getRichText());
   * });
   * ```
   */
  getRichText() {
    const i = this._thread.text;
    return k.create({ body: i, documentStyle: {}, id: "d" });
  }
  /**
   * Delete the comment and it's replies
   * @returns {Promise<boolean>} Whether the comment is deleted successfully
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   * const comments = fWorksheet.getComments();
   *
   * // Delete the first comment
   * const result = await comments[0]?.deleteAsync();
   * console.log(result);
   * ```
   */
  deleteAsync() {
    return this._commandService.executeCommand(
      this.getIsRoot() ? w.id : y.id,
      {
        commentId: this._thread.id,
        unitId: this._thread.unitId,
        subUnitId: this._thread.subUnitId
      }
    );
  }
  // eslint-disable-next-line
  /**
   * @deprecated use `deleteAsync` as instead.
   */
  delete() {
    return this.deleteAsync();
  }
  // eslint-disable-next-line
  /**
   * @deprecated use `updateAsync` as instead
   */
  async update(i) {
    return this.updateAsync(i);
  }
  /**
   * Update the comment content
   * @param {IDocumentBody | RichTextValue} content The new content of the comment
   * @returns {Promise<boolean>} Whether the comment is updated successfully
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a new comment
   * const richText = univerAPI.newRichText().insertText('hello univer');
   * const commentBuilder = univerAPI.newTheadComment()
   *   .setContent(richText)
   *   .setId('mock-comment-id');
   * const cell = fWorksheet.getRange('A1');
   * await cell.addCommentAsync(commentBuilder);
   *
   * // Update the comment after 3 seconds
   * setTimeout(async () => {
   *   const comment = fWorksheet.getCommentById('mock-comment-id');
   *   const newRichText = univerAPI.newRichText().insertText('Hello Univer AI');
   *   const result = await comment.updateAsync(newRichText);
   *   console.log(result);
   * }, 3000);
   * ```
   */
  async updateAsync(i) {
    const e = i instanceof k ? i.getData().body : i, r = B();
    return await this._commandService.executeCommand(
      x.id,
      {
        unitId: this._thread.unitId,
        subUnitId: this._thread.subUnitId,
        payload: {
          commentId: this._thread.id,
          text: e,
          updated: !0,
          updateT: r
        }
      }
    );
  }
  // eslint-disable-next-line
  /**
   * @deprecated use `resolveAsync` as instead
   */
  resolve(i) {
    return this.resolveAsync(i);
  }
  /**
   * Resolve the comment
   * @param {boolean} resolved Whether the comment is resolved
   * @returns {Promise<boolean>} Set the comment to resolved or not operation result
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a new comment
   * const richText = univerAPI.newRichText().insertText('hello univer');
   * const commentBuilder = univerAPI.newTheadComment()
   *   .setContent(richText)
   *   .setId('mock-comment-id');
   * const cell = fWorksheet.getRange('A1');
   * await cell.addCommentAsync(commentBuilder);
   *
   * // Resolve the comment after 3 seconds
   * setTimeout(async () => {
   *   const comment = fWorksheet.getCommentById('mock-comment-id');
   *   const result = await comment.resolveAsync(true);
   *   console.log(result);
   * }, 3000);
   * ```
   */
  resolveAsync(i) {
    return this._commandService.executeCommand(
      D.id,
      {
        unitId: this._thread.unitId,
        subUnitId: this._thread.subUnitId,
        commentId: this._thread.id,
        resolved: i != null ? i : !this._thread.resolved
      }
    );
  }
  /**
   * Reply to the comment
   * @param {FTheadCommentBuilder} comment The comment to reply to
   * @returns {Promise<boolean>} Whether the comment is replied successfully
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const fWorksheet = fWorkbook.getActiveSheet();
   *
   * // Create a new comment
   * const richText = univerAPI.newRichText().insertText('hello univer');
   * const commentBuilder = univerAPI.newTheadComment()
   *   .setContent(richText)
   *   .setId('mock-comment-id');
   * const cell = fWorksheet.getRange('A1');
   * await cell.addCommentAsync(commentBuilder);
   *
   * // Reply to the comment
   * const replyText = univerAPI.newRichText().insertText('Hello Univer AI');
   * const reply = univerAPI.newTheadComment().setContent(replyText);
   * const comment = fWorksheet.getCommentById('mock-comment-id');
   * const result = await comment.replyAsync(reply);
   * console.log(result);
   * ```
   */
  replyAsync(i) {
    var r;
    const e = i.build();
    return this._commandService.executeCommand(
      f.id,
      {
        unitId: this._thread.unitId,
        subUnitId: this._thread.subUnitId,
        comment: {
          id: R(),
          parentId: this._thread.id,
          threadId: this._thread.threadId,
          ref: ((r = this._parent) == null ? void 0 : r.ref) || this._thread.ref,
          unitId: this._thread.unitId,
          subUnitId: this._thread.subUnitId,
          text: e.text,
          attachments: e.attachments,
          dT: e.dT || B(),
          personId: e.personId || this._userManagerService.getCurrentUser().userID
        }
      }
    );
  }
};
I = ee([
  _(2, T(V)),
  _(3, p),
  _(4, q),
  _(5, T(b)),
  _(6, T(W))
], I);
class te extends j {
  getComment() {
    const r = this._injector.get(b), t = this._workbook.getUnitId(), n = this._worksheet.getSheetId(), o = r.getByLocation(t, n, this._range.startRow, this._range.startColumn);
    if (!o)
      return null;
    const s = r.getComment(t, n, o);
    return s ? this._injector.createInstance(I, s) : null;
  }
  getComments() {
    const r = this._injector.get(b), t = this._workbook.getUnitId(), n = this._worksheet.getSheetId(), o = [];
    return K.foreach(this._range, (s, h) => {
      const c = r.getByLocation(t, n, s, h);
      if (c) {
        const m = r.getComment(t, n, c);
        m && o.push(this._injector.createInstance(I, m));
      }
    }), o;
  }
  addComment(e) {
    var a;
    const r = this._injector, t = (a = this.getComment()) == null ? void 0 : a.getCommentData(), n = r.get(p), o = r.get(W), s = this._workbook.getUnitId(), h = this._worksheet.getSheetId(), c = `${F.chatAtABC(this._range.startColumn)}${this._range.startRow + 1}`, m = o.getCurrentUser(), d = e instanceof U ? e.build() : { text: e };
    return n.executeCommand(f.id, {
      unitId: s,
      subUnitId: h,
      comment: {
        text: d.text,
        dT: d.dT || B(),
        attachments: [],
        id: d.id || R(),
        ref: c,
        personId: d.personId || m.userID,
        parentId: t == null ? void 0 : t.id,
        unitId: s,
        subUnitId: h,
        threadId: (t == null ? void 0 : t.threadId) || R()
      }
    });
  }
  clearComment() {
    var s;
    const e = this._injector, r = (s = this.getComment()) == null ? void 0 : s.getCommentData(), t = e.get(p), n = this._workbook.getUnitId(), o = this._worksheet.getSheetId();
    return r ? t.executeCommand(w.id, {
      unitId: n,
      subUnitId: o,
      threadId: r.threadId,
      commentId: r.id
    }) : Promise.resolve(!0);
  }
  clearComments() {
    const r = this.getComments().map((t) => t.deleteAsync());
    return Promise.all(r).then(() => !0);
  }
  addCommentAsync(e) {
    return this.addComment(e);
  }
  clearCommentAsync() {
    return this.clearComment();
  }
  clearCommentsAsync() {
    return this.clearComments();
  }
}
j.extend(te);
class ne extends H {
  /**
   * @ignore
   */
  _initialize() {
    Object.defineProperty(this, "_threadCommentModel", {
      get() {
        return this._injector.get(Q);
      }
    });
  }
  getComments() {
    return this._threadCommentModel.getUnit(this._workbook.getUnitId()).map((e) => this._injector.createInstance(I, e.root));
  }
  clearComments() {
    const r = this.getComments().map((t) => t.deleteAsync());
    return Promise.all(r).then(() => !0);
  }
  /**
   * @param callback
   * @deprecated
   */
  onThreadCommentChange(e) {
    return S(this._threadCommentModel.commentUpdate$.pipe(Y((r) => r.unitId === this._workbook.getUnitId())).subscribe(e));
  }
  /**
   * @param callback
   * @deprecated
   */
  onBeforeAddThreadComment(e) {
    return S(this._commandService.beforeCommandExecuted((r, t) => {
      const n = r.params;
      if (r.id === f.id) {
        if (n.unitId !== this._workbook.getUnitId())
          return;
        if (e(n, t) === !1)
          throw new Error("Command is stopped by the hook onBeforeAddThreadComment");
      }
    }));
  }
  /**
   * @param callback
   * @deprecated
   */
  onBeforeUpdateThreadComment(e) {
    return S(this._commandService.beforeCommandExecuted((r, t) => {
      const n = r.params;
      if (r.id === x.id) {
        if (n.unitId !== this._workbook.getUnitId())
          return;
        if (e(n, t) === !1)
          throw new Error("Command is stopped by the hook onBeforeUpdateThreadComment");
      }
    }));
  }
  /**
   * @param callback
   * @deprecated
   */
  onBeforeDeleteThreadComment(e) {
    return S(this._commandService.beforeCommandExecuted((r, t) => {
      const n = r.params;
      if (r.id === y.id || r.id === w.id) {
        if (n.unitId !== this._workbook.getUnitId())
          return;
        if (e(n, t) === !1)
          throw new Error("Command is stopped by the hook onBeforeDeleteThreadComment");
      }
    }));
  }
}
H.extend(ne);
class re extends O {
  getComments() {
    return this._injector.get(b).getSubUnitAll(this._workbook.getUnitId(), this._worksheet.getSheetId()).map((t) => this._injector.createInstance(I, t));
  }
  clearComments() {
    const r = this.getComments().map((t) => t.deleteAsync());
    return Promise.all(r).then(() => !0);
  }
  /**
   * Subscribe to comment events.
   * @param callback Callback function, param contains comment info and target cell.
   */
  onCommented(e) {
    return this._injector.get(p).onCommandExecuted((t) => {
      if (t.id === f.id) {
        const n = t.params;
        e(n);
      }
    });
  }
  getCommentById(e) {
    const t = this._injector.get(b).getComment(this._workbook.getUnitId(), this._worksheet.getSheetId(), e);
    if (t)
      return this._injector.createInstance(I, t);
  }
}
O.extend(re);
const l = {
  CommentAdded: "CommentAdded",
  BeforeCommentAdd: "BeforeCommentAdd",
  CommentUpdated: "CommentUpdated",
  BeforeCommentUpdate: "BeforeCommentUpdate",
  CommentDeleted: "CommentDeleted",
  BeforeCommentDelete: "BeforeCommentDelete",
  CommentResolved: "CommentResolved",
  BeforeCommentResolve: "BeforeCommentResolve"
};
class oe extends z {
  get CommentAdded() {
    return l.CommentAdded;
  }
  get BeforeCommentAdd() {
    return l.BeforeCommentAdd;
  }
  get CommentUpdated() {
    return l.CommentUpdated;
  }
  get BeforeCommentUpdate() {
    return l.BeforeCommentUpdate;
  }
  get CommentDeleted() {
    return l.CommentDeleted;
  }
  get BeforeCommentDelete() {
    return l.BeforeCommentDelete;
  }
  get CommentResolved() {
    return l.CommentResolved;
  }
  get BeforeCommentResolve() {
    return l.BeforeCommentResolve;
  }
}
z.extend(oe);
class se extends $ {
  // eslint-disable-next-line max-lines-per-function
  _initialize(e) {
    const r = e.get(p);
    this.registerEventHandler(
      this.Event.CommentAdded,
      () => r.onCommandExecuted((t) => {
        var d, a, u, g, C;
        if (t.id !== f.id) return;
        const n = t.params;
        if (!n) return;
        const o = n.unitId ? this.getUniverSheet(n.unitId) : (d = this.getActiveWorkbook) == null ? void 0 : d.call(this);
        if (!o) return;
        const s = o.getSheetBySheetId(n.subUnitId || n.sheetId) || o.getActiveSheet();
        if (!s) return;
        const h = t.params, { comment: c } = h, m = s.getRange(c.ref).getComment();
        m && this.fireEvent(this.Event.CommentAdded, {
          workbook: o,
          worksheet: s,
          row: (u = (a = m.getRange()) == null ? void 0 : a.getRow()) != null ? u : 0,
          col: (C = (g = m.getRange()) == null ? void 0 : g.getColumn()) != null ? C : 0,
          comment: m
        });
      })
    ), this.registerEventHandler(
      this.Event.CommentUpdated,
      () => r.onCommandExecuted((t) => {
        var d, a, u, g, C;
        if (t.id !== x.id) return;
        const n = t.params;
        if (!n) return;
        const o = n.unitId ? this.getUniverSheet(n.unitId) : (d = this.getActiveWorkbook) == null ? void 0 : d.call(this);
        if (!o) return;
        const s = o.getSheetBySheetId(n.subUnitId || n.sheetId) || o.getActiveSheet();
        if (!s) return;
        const h = t.params, { commentId: c } = h.payload, m = s.getCommentById(c);
        m && this.fireEvent(this.Event.CommentUpdated, {
          workbook: o,
          worksheet: s,
          row: (u = (a = m.getRange()) == null ? void 0 : a.getRow()) != null ? u : 0,
          col: (C = (g = m.getRange()) == null ? void 0 : g.getColumn()) != null ? C : 0,
          comment: m
        });
      })
    ), this.registerEventHandler(
      this.Event.CommentDeleted,
      () => r.onCommandExecuted((t) => {
        var m;
        if (t.id !== y.id && t.id !== w.id) return;
        const n = t.params;
        if (!n) return;
        const o = n.unitId ? this.getUniverSheet(n.unitId) : (m = this.getActiveWorkbook) == null ? void 0 : m.call(this);
        if (!o) return;
        const s = o.getSheetBySheetId(n.subUnitId || n.sheetId) || o.getActiveSheet();
        if (!s) return;
        const h = t.params, { commentId: c } = h;
        this.fireEvent(this.Event.CommentDeleted, {
          workbook: o,
          worksheet: s,
          commentId: c
        });
      })
    ), this.registerEventHandler(
      this.Event.CommentResolved,
      () => r.onCommandExecuted((t) => {
        var a, u, g;
        if (t.id !== D.id) return;
        const n = t.params;
        if (!n) return;
        const o = n.unitId ? this.getUniverSheet(n.unitId) : (a = this.getActiveWorkbook) == null ? void 0 : a.call(this);
        if (!o) return;
        const s = o.getSheetBySheetId(n.subUnitId || n.sheetId) || o.getActiveSheet();
        if (!s) return;
        const h = t.params, { commentId: c, resolved: m } = h, d = s.getComments().find((C) => C.getCommentData().id === c);
        d && this.fireEvent(this.Event.CommentResolved, {
          workbook: o,
          worksheet: s,
          row: (u = d.getRange().getRow()) != null ? u : 0,
          col: (g = d.getRange().getColumn()) != null ? g : 0,
          comment: d,
          resolved: m
        });
      })
    ), this.registerEventHandler(
      this.Event.BeforeCommentAdd,
      () => r.beforeCommandExecuted((t) => {
        var a, u, g;
        if (t.id !== f.id) return;
        const n = t.params;
        if (!n) return;
        const o = n.unitId ? this.getUniverSheet(n.unitId) : (a = this.getActiveWorkbook) == null ? void 0 : a.call(this);
        if (!o) return;
        const s = o.getSheetBySheetId(n.subUnitId || n.sheetId) || o.getActiveSheet();
        if (!s) return;
        const h = t.params, { comment: c } = h, m = s.getActiveRange();
        if (!m) return;
        const d = {
          workbook: o,
          worksheet: s,
          row: (u = m.getRow()) != null ? u : 0,
          col: (g = m.getColumn()) != null ? g : 0,
          comment: A.create(c)
        };
        if (this.fireEvent(this.Event.BeforeCommentAdd, d), d.cancel)
          throw new E();
      })
    ), this.registerEventHandler(
      this.Event.BeforeCommentUpdate,
      () => r.beforeCommandExecuted((t) => {
        var a, u, g, C, v;
        if (t.id !== x.id) return;
        const n = t.params;
        if (!n) return;
        const o = n.unitId ? this.getUniverSheet(n.unitId) : (a = this.getActiveWorkbook) == null ? void 0 : a.call(this);
        if (!o) return;
        const s = o.getSheetBySheetId(n.subUnitId || n.sheetId) || o.getActiveSheet();
        if (!s) return;
        const h = t.params, { commentId: c, text: m } = h.payload, d = s.getCommentById(c);
        if (d) {
          const P = {
            workbook: o,
            worksheet: s,
            row: (g = (u = d.getRange()) == null ? void 0 : u.getRow()) != null ? g : 0,
            col: (v = (C = d.getRange()) == null ? void 0 : C.getColumn()) != null ? v : 0,
            comment: d,
            newContent: k.createByBody(m)
          };
          if (this.fireEvent(this.Event.BeforeCommentUpdate, P), P.cancel)
            throw new E();
        }
      })
    ), this.registerEventHandler(
      this.Event.BeforeCommentDelete,
      () => r.beforeCommandExecuted((t) => {
        var d, a, u, g, C;
        if (t.id !== y.id && t.id !== w.id) return;
        const n = t.params;
        if (!n) return;
        const o = n.unitId ? this.getUniverSheet(n.unitId) : (d = this.getActiveWorkbook) == null ? void 0 : d.call(this);
        if (!o) return;
        const s = o.getSheetBySheetId(n.subUnitId || n.sheetId) || o.getActiveSheet();
        if (!s) return;
        const h = t.params, { commentId: c } = h, m = s.getCommentById(c);
        if (m) {
          const v = {
            workbook: o,
            worksheet: s,
            row: (u = (a = m.getRange()) == null ? void 0 : a.getRow()) != null ? u : 0,
            col: (C = (g = m.getRange()) == null ? void 0 : g.getColumn()) != null ? C : 0,
            comment: m
          };
          if (this.fireEvent(this.Event.BeforeCommentDelete, v), v.cancel)
            throw new E();
        }
      })
    ), this.registerEventHandler(
      this.Event.BeforeCommentResolve,
      () => r.beforeCommandExecuted((t) => {
        var a, u, g;
        if (t.id !== D.id) return;
        const n = t.params;
        if (!n) return;
        const o = n.unitId ? this.getUniverSheet(n.unitId) : (a = this.getActiveWorkbook) == null ? void 0 : a.call(this);
        if (!o) return;
        const s = o.getSheetBySheetId(n.subUnitId || n.sheetId) || o.getActiveSheet();
        if (!s) return;
        const h = t.params, { commentId: c, resolved: m } = h, d = s.getComments().find((C) => C.getCommentData().id === c);
        if (d) {
          const C = {
            workbook: o,
            worksheet: s,
            row: (u = d.getRange().getRow()) != null ? u : 0,
            col: (g = d.getRange().getColumn()) != null ? g : 0,
            comment: d,
            resolved: m
          };
          if (this.fireEvent(this.Event.BeforeCommentResolve, C), C.cancel)
            throw new E();
        }
      })
    );
  }
  /**
   * @ignore
   */
  newTheadComment(e) {
    return new U(e);
  }
}
$.extend(se);
export {
  I as FThreadComment
};
