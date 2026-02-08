var P = Object.defineProperty;
var L = (s, t, e) => t in s ? P(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var u = (s, t, e) => L(s, typeof t != "symbol" ? t + "" : t, e);
import { createIdentifier as j, Disposable as U, Inject as g, LifecycleService as H, LifecycleStages as O, CommandType as l, ICommandService as f, dayjs as W, IResourceManagerService as J, UniverInstanceType as T, Plugin as G, merge as V, mergeOverrideWithDependencies as Y, Injector as k, IConfigService as B } from "@univerjs/core";
import { Subject as b } from "rxjs";
class K extends U {
  constructor() {
    super();
    u(this, "_dataSource", null);
    u(this, "syncUpdateMutationToColla", !0);
  }
  set dataSource(e) {
    this._dataSource = e;
  }
  get dataSource() {
    return this._dataSource;
  }
  async getThreadComment(e, n, o) {
    return this._dataSource ? (await this._dataSource.listComments(e, n, [o]))[0] : null;
  }
  async addComment(e) {
    var n;
    return this._dataSource ? this._dataSource.addComment(e) : { ...e, threadId: (n = e.threadId) != null ? n : e.id };
  }
  async updateComment(e) {
    return this._dataSource ? this._dataSource.updateComment(e) : !0;
  }
  async resolveComment(e) {
    return this._dataSource ? this._dataSource.resolveComment(e) : !0;
  }
  async deleteComment(e, n, o, r) {
    return this._dataSource ? this._dataSource.deleteComment(e, n, o, r) : !0;
  }
  async listThreadComments(e, n, o) {
    return this.dataSource ? this.dataSource.listComments(e, n, o) : !1;
  }
  saveToSnapshot(e, n) {
    if (this._dataSource) {
      const o = {};
      return Object.keys(e).forEach((r) => {
        const a = e[r];
        o[r] = a.map(this.dataSource.saveCommentToSnapshot);
      }), o;
    }
    return e;
  }
}
const p = j("univer.thread-comment.data-source-service");
var F = Object.getOwnPropertyDescriptor, q = (s, t, e, n) => {
  for (var o = n > 1 ? void 0 : n ? F(t, e) : t, r = s.length - 1, a; r >= 0; r--)
    (a = s[r]) && (o = a(o) || o);
  return o;
}, w = (s, t) => (e, n) => t(e, n, s);
let i = class extends U {
  constructor(t, e) {
    super();
    u(this, "_commentsMap", /* @__PURE__ */ new Map());
    u(this, "_threadMap", /* @__PURE__ */ new Map());
    u(this, "_commentUpdate$", new b());
    u(this, "commentUpdate$", this._commentUpdate$.asObservable());
    u(this, "_tasks", []);
    this._dataSourceService = t, this._lifecycleService = e, this.disposeWithMe(() => {
      this._commentUpdate$.complete();
    }), this.disposeWithMe(this._lifecycleService.lifecycle$.subscribe((n) => {
      const o = /* @__PURE__ */ new Map();
      n === O.Rendered && (this._tasks.forEach(({ unitId: r, subUnitId: a, threadIds: d }) => {
        let m = o.get(r);
        m || (m = /* @__PURE__ */ new Map(), o.set(r, m));
        let c = m.get(a);
        c || (c = /* @__PURE__ */ new Set(), m.set(a, c));
        for (const h of d)
          c.add(h);
      }), this._tasks = [], o.forEach((r, a) => {
        r.forEach((d, m) => {
          this.syncThreadComments(a, m, Array.from(d));
        });
      }));
    }));
  }
  _ensureCommentMap(t, e) {
    let n = this._commentsMap.get(t);
    n || (n = /* @__PURE__ */ new Map(), this._commentsMap.set(t, n));
    let o = n.get(e);
    return o || (o = /* @__PURE__ */ new Map(), n.set(e, o)), o;
  }
  ensureMap(t, e) {
    return this._ensureCommentMap(t, e);
  }
  _ensureThreadMap(t, e) {
    let n = this._threadMap.get(t);
    n || (n = /* @__PURE__ */ new Map(), this._threadMap.set(t, n));
    let o = n.get(e);
    return o || (o = /* @__PURE__ */ new Map(), n.set(e, o)), o;
  }
  _replaceComment(t, e, n) {
    const o = this._ensureCommentMap(t, e), r = o.get(n.id);
    if (r) {
      const { children: a, ...d } = n, m = {
        ...d,
        ref: r.ref
      };
      o.set(n.id, m), a == null || a.forEach((c) => {
        o.set(c.id, {
          ...c,
          ref: ""
        });
      }), this._commentUpdate$.next({
        unitId: t,
        subUnitId: e,
        type: "syncUpdate",
        payload: m
      }), !!n.resolved != !!r.resolved && this._commentUpdate$.next({
        unitId: t,
        subUnitId: e,
        type: "resolve",
        payload: {
          commentId: n.id,
          resolved: !!n.resolved
        }
      });
    }
  }
  async syncThreadComments(t, e, n) {
    if (this._lifecycleService.stage < O.Rendered) {
      this._tasks.push({ unitId: t, subUnitId: e, threadIds: n });
      return;
    }
    const o = this._ensureThreadMap(t, e), r = this._ensureCommentMap(t, e), a = await this._dataSourceService.listThreadComments(t, e, n);
    if (!a)
      return;
    const d = new Set(n);
    a.forEach((m) => {
      this._replaceComment(t, e, m), d.delete(m.threadId);
    }), d.forEach((m) => {
      o.delete(m), r.forEach((c, h) => {
        c.threadId === m && r.delete(h);
      });
    });
  }
  addComment(t, e, n, o) {
    const r = this._ensureCommentMap(t, e), { parentId: a, children: d = [], ...m } = n, c = {
      ...m,
      parentId: a === n.id ? void 0 : a
    };
    c.threadId || (c.threadId = c.parentId || c.id);
    const h = (C) => {
      r.set(C.id, C), this._commentUpdate$.next({
        unitId: t,
        subUnitId: e,
        type: "add",
        payload: C,
        isRoot: !C.parentId
      });
    };
    h(c);
    const M = this._ensureThreadMap(t, e);
    if (!c.parentId) {
      M.set(c.threadId, c);
      for (const C of d)
        h(C);
    }
    return o && this.syncThreadComments(t, e, [c.threadId]), !0;
  }
  updateComment(t, e, n, o) {
    const a = this._ensureCommentMap(t, e).get(n.commentId);
    return a && (a.updated = !0, a.text = n.text, a.attachments = n.attachments, a.updateT = n.updateT, this._commentUpdate$.next({
      unitId: t,
      subUnitId: e,
      type: "update",
      payload: n,
      silent: o
    })), !0;
  }
  updateCommentRef(t, e, n, o) {
    const a = this._ensureCommentMap(t, e).get(n.commentId);
    return a ? (a.ref = n.ref, this._commentUpdate$.next({
      unitId: t,
      subUnitId: e,
      type: "updateRef",
      payload: n,
      silent: o,
      threadId: a.threadId
    }), !0) : !1;
  }
  resolveComment(t, e, n, o) {
    const a = this._ensureCommentMap(t, e).get(n);
    return a ? (a.resolved = o, this._commentUpdate$.next({
      unitId: t,
      subUnitId: e,
      type: "resolve",
      payload: {
        commentId: n,
        resolved: o
      }
    }), !0) : !1;
  }
  getComment(t, e, n) {
    return this._ensureCommentMap(t, e).get(n);
  }
  getRootComment(t, e, n) {
    return this._ensureThreadMap(t, e).get(n);
  }
  getThread(t, e, n) {
    const o = this._ensureCommentMap(t, e), r = Array.from(o.values()).filter((c) => c.threadId === n);
    let a;
    const d = [], m = /* @__PURE__ */ new Set();
    for (const c of r)
      c.parentId ? d.push(c) : a = c, m.add(c.personId);
    if (a)
      return {
        root: a,
        children: d,
        relativeUsers: m,
        unitId: t,
        subUnitId: e,
        threadId: n
      };
  }
  getCommentWithChildren(t, e, n) {
    const o = this.getComment(t, e, n);
    if (o)
      return this.getThread(t, e, o.threadId);
  }
  _deleteComment(t, e, n) {
    const o = this._ensureCommentMap(t, e), r = o.get(n);
    r && (o.delete(n), this._commentUpdate$.next({
      unitId: t,
      subUnitId: e,
      type: "delete",
      payload: {
        commentId: n,
        isRoot: !r.parentId,
        comment: r
      }
    }));
  }
  deleteThread(t, e, n) {
    this._ensureThreadMap(t, e).delete(n), this._ensureCommentMap(t, e).forEach((a) => {
      a.threadId === n && this._deleteComment(t, e, a.id);
    });
  }
  deleteComment(t, e, n) {
    const r = this._ensureCommentMap(t, e).get(n);
    return r && (r.parentId ? this._deleteComment(t, e, n) : this.deleteThread(t, e, r.threadId)), !0;
  }
  deleteUnit(t) {
    const e = this._commentsMap.get(t);
    e && e.forEach((n, o) => {
      n.forEach((r) => {
        this.deleteComment(t, o, r.id);
      });
    });
  }
  getUnit(t) {
    const e = this._threadMap.get(t);
    if (!e)
      return [];
    const n = [];
    return e.forEach((o, r) => {
      o.forEach((a, d) => {
        const m = this.getThread(t, r, d);
        m && n.push(m);
      });
    }), n;
  }
  getAll() {
    const t = [];
    return this._commentsMap.forEach((e, n) => {
      t.push({
        unitId: n,
        threads: this.getUnit(n)
      });
    }), t;
  }
};
i = q([
  w(0, g(p)),
  w(1, g(H))
], i);
const R = {
  id: "thread-comment.mutation.add-comment",
  type: l.MUTATION,
  handler(s, t, e) {
    if (!t)
      return !1;
    const n = s.get(i), { unitId: o, subUnitId: r, comment: a, sync: d } = t, m = d || (e == null ? void 0 : e.fromChangeset) && !a.parentId;
    return n.addComment(o, r, a, m);
  }
}, x = {
  id: "thread-comment.mutation.update-comment",
  type: l.MUTATION,
  handler(s, t) {
    if (!t)
      return !1;
    const e = s.get(i), { unitId: n, subUnitId: o, payload: r, silent: a } = t;
    return e.updateComment(n, o, r, a);
  }
}, z = {
  id: "thread-comment.mutation.update-comment-ref",
  type: l.MUTATION,
  handler(s, t) {
    if (!t)
      return !1;
    const e = s.get(i), { unitId: n, subUnitId: o, payload: r, silent: a } = t;
    return e.updateCommentRef(n, o, r, a);
  }
}, A = {
  id: "thread-comment.mutation.resolve-comment",
  type: l.MUTATION,
  handler(s, t) {
    if (!t)
      return !1;
    const e = s.get(i), { unitId: n, subUnitId: o, resolved: r, commentId: a } = t;
    return e.resolveComment(n, o, a, r);
  }
}, E = {
  id: "thread-comment.mutation.delete-comment",
  type: l.MUTATION,
  handler(s, t) {
    if (!t)
      return !1;
    const e = s.get(i), { unitId: n, subUnitId: o, commentId: r } = t;
    return e.deleteComment(n, o, r);
  }
}, Q = {
  id: "thread-comment.command.add-comment",
  type: l.COMMAND,
  async handler(s, t) {
    if (!t)
      return !1;
    const e = s.get(f), n = s.get(p), { comment: o } = t, r = await n.addComment(o), a = n.syncUpdateMutationToColla, d = !o.parentId, m = {
      id: R.id,
      params: {
        ...t,
        comment: r
      }
    };
    return d ? await e.executeCommand(m.id, m.params) : e.executeCommand(m.id, m.params, {
      onlyLocal: !a
    });
  }
}, X = {
  id: "thread-comment.command.update-comment",
  type: l.COMMAND,
  async handler(s, t) {
    if (!t)
      return !1;
    const { unitId: e, subUnitId: n, payload: o } = t, r = s.get(f), a = s.get(i), d = s.get(p), m = d.syncUpdateMutationToColla, c = a.getComment(
      e,
      n,
      o.commentId
    );
    if (!c)
      return !1;
    const { children: h, ...M } = c;
    if (!await d.updateComment({
      ...M,
      ...o
    }))
      return !1;
    const N = {
      id: x.id,
      params: t
    };
    return r.executeCommand(N.id, N.params, { onlyLocal: !m }), !0;
  }
}, Z = {
  id: "thread-comment.command.resolve-comment",
  type: l.COMMAND,
  async handler(s, t) {
    if (!t)
      return !1;
    const { unitId: e, subUnitId: n, resolved: o, commentId: r } = t, a = s.get(p), m = s.get(i).getComment(e, n, r), c = a.syncUpdateMutationToColla;
    return !m || !await a.resolveComment({
      ...m,
      resolved: o
    }) ? !1 : s.get(f).executeCommand(
      A.id,
      t,
      { onlyLocal: !c }
    );
  }
}, ee = {
  id: "thread-comment.command.delete-comment",
  type: l.COMMAND,
  async handler(s, t) {
    if (!t)
      return !1;
    const e = s.get(i), n = s.get(p), o = s.get(f), { unitId: r, subUnitId: a, commentId: d } = t, m = n.syncUpdateMutationToColla, c = e.getComment(r, a, d);
    if (!c || !await n.deleteComment(r, a, c.threadId, d))
      return !1;
    const h = {
      id: E.id,
      params: t
    };
    return o.executeCommand(h.id, h.params, { onlyLocal: !m });
  }
}, te = {
  id: "thread-comment.command.delete-comment-tree",
  type: l.COMMAND,
  async handler(s, t) {
    if (!t)
      return !1;
    const e = s.get(i), n = s.get(f), o = s.get(p), { unitId: r, subUnitId: a, commentId: d } = t, m = e.getCommentWithChildren(r, a, d);
    return !m || !await o.deleteComment(r, a, m.root.threadId, d) ? !1 : await n.executeCommand(E.id, {
      unitId: r,
      subUnitId: a,
      commentId: m.root.id
    });
  }
};
function he(s) {
  return W(s).format("YYYY/MM/DD HH:mm");
}
const $ = "UNIVER_THREAD_COMMENT_PLUGIN";
var ne = Object.getOwnPropertyDescriptor, oe = (s, t, e, n) => {
  for (var o = n > 1 ? void 0 : n ? ne(t, e) : t, r = s.length - 1, a; r >= 0; r--)
    (a = s[r]) && (o = a(o) || o);
  return o;
}, S = (s, t) => (e, n) => t(e, n, s);
const re = `SHEET_${$}`;
let v = class extends U {
  constructor(s, t, e) {
    super(), this._resourceManagerService = s, this._threadCommentModel = t, this._threadCommentDataSourceService = e, this._initSnapshot();
  }
  _initSnapshot() {
    const s = (e) => {
      const n = this._threadCommentModel.getUnit(e), o = {};
      return n ? (n.forEach((r) => {
        var d;
        const a = (d = o[r.subUnitId]) != null ? d : [];
        a.push({
          ...r.root,
          children: r.children
        }), o[r.subUnitId] = a;
      }), JSON.stringify(this._threadCommentDataSourceService.saveToSnapshot(o, e))) : "";
    }, t = (e) => {
      if (!e)
        return {};
      try {
        return JSON.parse(e);
      } catch {
        return {};
      }
    };
    this.disposeWithMe(
      this._resourceManagerService.registerPluginResource({
        pluginName: re,
        businesses: [T.UNIVER_SHEET, T.UNIVER_DOC],
        toJson: (e) => s(e),
        parseJson: (e) => t(e),
        onUnLoad: (e) => {
          this._threadCommentModel.deleteUnit(e);
        },
        onLoad: async (e, n) => {
          Object.keys(n).forEach((o) => {
            const r = n[o];
            r.forEach((a) => {
              this._threadCommentModel.addComment(e, o, a);
            }), this._threadCommentModel.syncThreadComments(e, o, r.map((a) => a.threadId));
          });
        }
      })
    );
  }
};
v = oe([
  S(0, J),
  S(1, g(i)),
  S(2, p)
], v);
const ae = "thread-comment.config", D = {};
var se = Object.getOwnPropertyDescriptor, me = (s, t, e, n) => {
  for (var o = n > 1 ? void 0 : n ? se(t, e) : t, r = s.length - 1, a; r >= 0; r--)
    (a = s[r]) && (o = a(o) || o);
  return o;
}, y = (s, t) => (e, n) => t(e, n, s), _;
let I = (_ = class extends G {
  constructor(s = D, t, e, n) {
    super(), this._config = s, this._injector = t, this._commandService = e, this._configService = n;
    const { ...o } = V(
      {},
      D,
      this._config
    );
    this._configService.setConfig(ae, o);
  }
  onStarting() {
    var s;
    Y([
      [p, { useClass: K }],
      [i],
      [v]
    ], (s = this._config) == null ? void 0 : s.overrides).forEach(
      (t) => {
        this._injector.add(t);
      }
    ), [
      Q,
      X,
      ee,
      Z,
      te,
      R,
      x,
      z,
      E,
      A
    ].forEach((t) => {
      this._commandService.registerCommand(t);
    }), this._injector.get(v);
  }
}, u(_, "pluginName", $), u(_, "type", T.UNIVER_UNKNOWN), _);
I = me([
  y(1, g(k)),
  y(2, f),
  y(3, B)
], I);
export {
  Q as AddCommentCommand,
  R as AddCommentMutation,
  ee as DeleteCommentCommand,
  E as DeleteCommentMutation,
  te as DeleteCommentTreeCommand,
  p as IThreadCommentDataSourceService,
  Z as ResolveCommentCommand,
  A as ResolveCommentMutation,
  re as SHEET_UNIVER_THREAD_COMMENT_PLUGIN,
  $ as TC_PLUGIN_NAME,
  K as ThreadCommentDataSourceService,
  i as ThreadCommentModel,
  v as ThreadCommentResourceController,
  I as UniverThreadCommentPlugin,
  X as UpdateCommentCommand,
  x as UpdateCommentMutation,
  z as UpdateCommentRefMutation,
  he as getDT
};
