var Nt = Object.defineProperty;
var Rt = (a, e, n) => e in a ? Nt(a, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : a[e] = n;
var F = (a, e, n) => Rt(a, typeof e != "symbol" ? e + "" : e, n);
import { createIdentifier as xt, CommandType as Bt, sortRules as Wt, sortRulesByDesc as Gt, ImageSourceType as at, ImageUploadStatusType as et, generateRandomId as Lt, Inject as qt, Injector as Kt, IConfigService as Ft, ICommandService as Vt, Plugin as Ht, merge as zt, mergeOverrideWithDependencies as Xt, IImageIoService as Jt } from "@univerjs/core";
import { IImageIoService as In, ImageSourceType as En, ImageUploadStatusType as Dn } from "@univerjs/core";
import { Subject as be } from "rxjs";
const _n = 500, vn = 500, mn = 10, Yt = 5 * 1024 * 1024, Zt = ["image/png", "image/jpeg", "image/jpg", "image/gif", "image/bmp"], Mt = xt("univer.drawing-manager.service"), Qt = {
  id: "drawing.operation.set-drawing-selected",
  type: Bt.OPERATION,
  handler: (a, e) => {
    const n = a.get(Mt);
    return e == null ? !1 : (n.focusDrawing(e), !0);
  }
}, en = "drawing.config", vt = {};
var Ve = {}, Ze = {}, tt = {}, mt;
function tn() {
  if (mt) return tt;
  mt = 1, Object.defineProperty(tt, "__esModule", { value: !0 });
  function a(t, r) {
    if (Array.isArray(r))
      return !1;
    for (let u in t)
      if (!n(t[u], r[u]))
        return !1;
    for (let u in r)
      if (t[u] === void 0)
        return !1;
    return !0;
  }
  function e(t, r) {
    if (!Array.isArray(r) || t.length !== r.length)
      return !1;
    for (let u = 0; u < t.length; u++)
      if (!n(t[u], r[u]))
        return !1;
    return !0;
  }
  function n(t, r) {
    return t === r ? !0 : t === null || r === null || typeof t != "object" || typeof r != "object" ? !1 : Array.isArray(t) ? e(t, r) : a(t, r);
  }
  return tt.default = n, tt;
}
var nt = {}, Ot;
function nn() {
  if (Ot) return nt;
  Ot = 1, Object.defineProperty(nt, "__esModule", { value: !0 });
  function a(e) {
    if (e === null)
      return null;
    if (Array.isArray(e))
      return e.map(a);
    if (typeof e == "object") {
      const n = {};
      for (let t in e)
        n[t] = a(e[t]);
      return n;
    } else
      return e;
  }
  return nt.default = a, nt;
}
var lt = {}, wt;
function St() {
  return wt || (wt = 1, (function(a) {
    Object.defineProperty(a, "__esModule", { value: !0 }), a.eachChildOf = a.advancer = a.readCursor = a.writeCursor = a.WriteCursor = a.ReadCursor = a.isValidPathItem = void 0;
    function e(_, s) {
      if (!_)
        throw new Error(s);
    }
    const n = (_) => _ != null && typeof _ == "object" && !Array.isArray(_), t = (_, s) => (
      // All the numbers, then all the letters. Just as the gods of ascii intended.
      typeof _ == typeof s ? _ > s : typeof _ == "string" && typeof s == "number"
    );
    function r(_, s) {
      for (let c in _) {
        const h = c;
        s.write(h, _[h]);
      }
    }
    a.isValidPathItem = (_) => typeof _ == "number" || typeof _ == "string" && _ !== "__proto__";
    class u {
      constructor(s = null) {
        this.parents = [], this.indexes = [], this.lcIdx = -1, this.idx = -1, this.container = s;
      }
      ascend() {
        e(this.parents.length === this.indexes.length / 2), this.idx === 0 ? this.parents.length ? (this.lcIdx = this.indexes.pop(), this.container = this.parents.pop(), this.idx = this.indexes.pop()) : (this.lcIdx = 0, this.idx = -1) : (e(this.idx > 0), this.idx--, n(this.container[this.idx]) && this.idx--);
      }
      getPath() {
        const s = [];
        let c = this.container, h = this.parents.length - 1, U = this.idx;
        for (; U >= 0; )
          s.unshift(c[U]), U === 0 ? (U = this.indexes[h * 2], c = this.parents[h--]) : U -= n(c[U - 1]) ? 2 : 1;
        return s;
      }
    }
    class o extends u {
      get() {
        return this.container ? this.container.slice(this.idx + 1) : null;
      }
      // Its only valid to call this after descending into a child.
      getKey() {
        return e(this.container != null, "Invalid call to getKey before cursor descended"), this.container[this.idx];
      }
      getComponent() {
        let s;
        return this.container && this.container.length > this.idx + 1 && n(s = this.container[this.idx + 1]) ? s : null;
      }
      descendFirst() {
        let s = this.idx + 1;
        if (!this.container || s >= this.container.length || n(this.container[s]) && s + 1 >= this.container.length)
          return !1;
        n(this.container[s]) && s++;
        const c = this.container[s];
        return Array.isArray(c) ? (this.indexes.push(this.idx), this.parents.push(this.container), this.indexes.push(s), this.idx = 0, this.container = c) : this.idx = s, !0;
      }
      nextSibling() {
        if (e(this.parents.length === this.indexes.length / 2), this.idx > 0 || this.parents.length === 0)
          return !1;
        const s = this.indexes[this.indexes.length - 1] + 1, c = this.parents[this.parents.length - 1];
        return s >= c.length ? !1 : (e(!isNaN(s)), this.indexes[this.indexes.length - 1] = s, this.container = c[s], !0);
      }
      _init(s, c, h, U) {
        this.container = s, this.idx = c, this.parents = h.slice(), this.indexes = U.slice();
      }
      clone() {
        const s = new o();
        return s._init(this.container, this.idx, this.parents, this.indexes), s;
      }
      *[Symbol.iterator]() {
        if (this.descendFirst()) {
          do
            yield this.getKey();
          while (this.nextSibling());
          this.ascend();
        }
      }
      // TODO(cleanup): Consider moving these functions out of cursor, since
      // they're really just helper methods.
      // It'd be really nice to do this using generators.
      traverse(s, c) {
        const h = this.getComponent();
        h && c(h, s);
        for (const U of this)
          s && s.descend(U), this.traverse(s, c), s && s.ascend();
      }
      eachPick(s, c) {
        this.traverse(s, (h, U) => {
          h.p != null && c(h.p, U);
        });
      }
      eachDrop(s, c) {
        this.traverse(s, (h, U) => {
          h.d != null && c(h.d, U);
        });
      }
    }
    a.ReadCursor = o;
    class l extends u {
      constructor(s = null) {
        super(s), this.pendingDescent = [], this._op = s;
      }
      flushDescent() {
        e(this.parents.length === this.indexes.length / 2), this.container === null && (this._op = this.container = []);
        for (let s = 0; s < this.pendingDescent.length; s++) {
          const c = this.pendingDescent[s];
          let h = this.idx + 1;
          if (h < this.container.length && n(this.container[h]) && h++, e(h === this.container.length || !n(this.container[h])), h === this.container.length)
            this.container.push(c), this.idx = h;
          else if (this.container[h] === c)
            this.idx = h;
          else {
            if (!Array.isArray(this.container[h])) {
              const U = this.container.splice(h, this.container.length - h);
              this.container.push(U), this.lcIdx > -1 && (this.lcIdx = h);
            }
            for (this.indexes.push(this.idx), this.parents.push(this.container), this.lcIdx !== -1 && (e(t(c, this.container[this.lcIdx][0])), h = this.lcIdx + 1, this.lcIdx = -1); h < this.container.length && t(c, this.container[h][0]); )
              h++;
            if (this.indexes.push(h), this.idx = 0, h < this.container.length && this.container[h][0] === c)
              this.container = this.container[h];
            else {
              const U = [c];
              this.container.splice(h, 0, U), this.container = U;
            }
          }
        }
        this.pendingDescent.length = 0;
      }
      reset() {
        this.lcIdx = -1;
      }
      // Creates and returns a component, creating one if need be. You should
      // probably write to it immediately - ops are not valid with empty
      // components.
      getComponent() {
        this.flushDescent();
        const s = this.idx + 1;
        if (s < this.container.length && n(this.container[s]))
          return this.container[s];
        {
          const c = {};
          return this.container.splice(s, 0, c), c;
        }
      }
      write(s, c) {
        const h = this.getComponent();
        e(h[s] == null || h[s] === c, "Internal consistency error: Overwritten component. File a bug"), h[s] = c;
      }
      get() {
        return this._op;
      }
      descend(s) {
        if (!a.isValidPathItem(s))
          throw Error("Invalid JSON key");
        this.pendingDescent.push(s);
      }
      descendPath(s) {
        return this.pendingDescent.push(...s), this;
      }
      ascend() {
        this.pendingDescent.length ? this.pendingDescent.pop() : super.ascend();
      }
      mergeTree(s, c = r) {
        if (s === null)
          return;
        if (e(Array.isArray(s)), s === this._op)
          throw Error("Cannot merge into my own tree");
        const h = this.lcIdx, U = this.parents.length;
        let Y = 0;
        for (let pe = 0; pe < s.length; pe++) {
          const Z = s[pe];
          typeof Z == "string" || typeof Z == "number" ? (Y++, this.descend(Z)) : Array.isArray(Z) ? this.mergeTree(Z, c) : typeof Z == "object" && c(Z, this);
        }
        for (; Y--; )
          this.ascend();
        this.lcIdx = this.parents.length === U ? h : -1;
      }
      at(s, c) {
        this.descendPath(s), c(this);
        for (let h = 0; h < s.length; h++)
          this.ascend();
        return this;
      }
      // This is used by helpers, so the strict ordering guarantees are
      // relaxed.
      writeAtPath(s, c, h) {
        return this.at(s, () => this.write(c, h)), this.reset(), this;
      }
      writeMove(s, c, h = 0) {
        return this.writeAtPath(s, "p", h).writeAtPath(c, "d", h);
      }
      getPath() {
        const s = super.getPath();
        return s.push(...this.pendingDescent), s;
      }
    }
    a.WriteCursor = l, a.writeCursor = () => new l(), a.readCursor = (_) => new o(_);
    function E(_, s, c) {
      let h, U;
      U = h = _ ? _.descendFirst() : !1;
      function Y(pe) {
        let Z;
        for (; U; ) {
          const Ce = Z = _.getKey();
          if (pe != null) {
            let Le = !1;
            if (s && typeof Ce == "number" && (Z = s(Ce, _.getComponent()), Z < 0 && (Z = ~Z, Le = !0)), t(Z, pe))
              return null;
            if (Z === pe && !Le)
              return _;
          }
          c && typeof Z == "number" && c(Z, _.getComponent()), U = _.nextSibling();
        }
        return null;
      }
      return Y.end = () => {
        h && _.ascend();
      }, Y;
    }
    a.advancer = E;
    function x(_, s, c) {
      let h, U, Y, pe;
      for (h = U = _ && _.descendFirst(), Y = pe = s && s.descendFirst(); h || Y; ) {
        let Z = h ? _.getKey() : null, Ce = Y ? s.getKey() : null;
        Z !== null && Ce !== null && (t(Ce, Z) ? Ce = null : Z !== Ce && (Z = null)), c(Z == null ? Ce : Z, Z != null ? _ : null, Ce != null ? s : null), Z != null && h && (h = _.nextSibling()), Ce != null && Y && (Y = s.nextSibling());
      }
      U && _.ascend(), pe && s.ascend();
    }
    a.eachChildOf = x;
  })(lt)), lt;
}
var ut = {}, bt;
function kt() {
  return bt || (bt = 1, (function(a) {
    Object.defineProperty(a, "__esModule", { value: !0 }), a.ConflictType = void 0, (function(e) {
      e[e.RM_UNEXPECTED_CONTENT = 1] = "RM_UNEXPECTED_CONTENT", e[e.DROP_COLLISION = 2] = "DROP_COLLISION", e[e.BLACKHOLE = 3] = "BLACKHOLE";
    })(a.ConflictType || (a.ConflictType = {}));
  })(ut)), ut;
}
var Ue = {}, He = {}, Ct;
function pt() {
  return Ct || (Ct = 1, Object.defineProperty(He, "__esModule", { value: !0 }), He.uniToStrPos = He.strPosToUni = void 0, He.strPosToUni = (a, e = a.length) => {
    let n = 0, t = 0;
    for (; t < e; t++) {
      const r = a.charCodeAt(t);
      r >= 55296 && r <= 57343 && (n++, t++);
    }
    if (t !== e)
      throw Error("Invalid offset - splits unicode bytes");
    return t - n;
  }, He.uniToStrPos = (a, e) => {
    let n = 0;
    for (; e > 0; e--) {
      const t = a.charCodeAt(n);
      n += t >= 55296 && t <= 57343 ? 2 : 1;
    }
    return n;
  }), He;
}
var ct = {}, It;
function ht() {
  return It || (It = 1, (function(a) {
    Object.defineProperty(a, "__esModule", { value: !0 }), a.uniSlice = a.dlen = a.eachOp = void 0;
    const e = pt(), n = (f) => {
      if (!Array.isArray(f))
        throw Error("Op must be an array of components");
      let y = null;
      for (let b = 0; b < f.length; b++) {
        const L = f[b];
        switch (typeof L) {
          case "object":
            if (typeof L.d != "number" && typeof L.d != "string")
              throw Error("Delete must be number or string");
            if (a.dlen(L.d) <= 0)
              throw Error("Deletes must not be empty");
            break;
          case "string":
            if (!(L.length > 0))
              throw Error("Inserts cannot be empty");
            break;
          case "number":
            if (!(L > 0))
              throw Error("Skip components must be >0");
            if (typeof y == "number")
              throw Error("Adjacent skip components should be combined");
            break;
        }
        y = L;
      }
      if (typeof y == "number")
        throw Error("Op has a trailing skip");
    };
    function t(f, y) {
      let b = 0, L = 0;
      for (let z = 0; z < f.length; z++) {
        const q = f[z];
        switch (y(q, b, L), typeof q) {
          case "object":
            b += a.dlen(q.d);
            break;
          case "string":
            L += e.strPosToUni(q);
            break;
          case "number":
            b += q, L += q;
            break;
        }
      }
    }
    a.eachOp = t;
    function r(f, y) {
      const b = [], L = l(b);
      return t(f, (z, q, Ee) => {
        L(y(z, q, Ee));
      }), s(b);
    }
    const u = (f) => f, o = (f) => r(f, u);
    a.dlen = (f) => typeof f == "number" ? f : e.strPosToUni(f);
    const l = (f) => (y) => {
      if (!(!y || y.d === 0 || y.d === "")) if (f.length === 0)
        f.push(y);
      else if (typeof y == typeof f[f.length - 1])
        if (typeof y == "object") {
          const b = f[f.length - 1];
          b.d = typeof b.d == "string" && typeof y.d == "string" ? b.d + y.d : a.dlen(b.d) + a.dlen(y.d);
        } else
          f[f.length - 1] += y;
      else
        f.push(y);
    }, E = (f) => typeof f == "number" ? f : typeof f == "string" ? e.strPosToUni(f) : typeof f.d == "number" ? f.d : e.strPosToUni(f.d);
    a.uniSlice = (f, y, b) => {
      const L = e.uniToStrPos(f, y), z = b == null ? 1 / 0 : e.uniToStrPos(f, b);
      return f.slice(L, z);
    };
    const x = (f, y, b) => typeof f == "number" ? b == null ? f - y : Math.min(f, b) - y : a.uniSlice(f, y, b), _ = (f) => {
      let y = 0, b = 0;
      return { take: (q, Ee) => {
        if (y === f.length)
          return q === -1 ? null : q;
        const ce = f[y];
        let ne;
        if (typeof ce == "number")
          return q === -1 || ce - b <= q ? (ne = ce - b, ++y, b = 0, ne) : (b += q, q);
        if (typeof ce == "string") {
          if (q === -1 || Ee === "i" || e.strPosToUni(ce.slice(b)) <= q)
            return ne = ce.slice(b), ++y, b = 0, ne;
          {
            const le = b + e.uniToStrPos(ce.slice(b), q);
            return ne = ce.slice(b, le), b = le, ne;
          }
        } else {
          if (q === -1 || Ee === "d" || a.dlen(ce.d) - b <= q)
            return ne = { d: x(ce.d, b) }, ++y, b = 0, ne;
          {
            let le = x(ce.d, b, b + q);
            return b += q, { d: le };
          }
        }
      }, peek: () => f[y] };
    }, s = (f) => (f.length > 0 && typeof f[f.length - 1] == "number" && f.pop(), f);
    function c(f, y, b) {
      if (b !== "left" && b !== "right")
        throw Error("side (" + b + ") must be 'left' or 'right'");
      n(f), n(y);
      const L = [], z = l(L), { take: q, peek: Ee } = _(f);
      for (let ne = 0; ne < y.length; ne++) {
        const le = y[ne];
        let ge, De;
        switch (typeof le) {
          case "number":
            for (ge = le; ge > 0; )
              De = q(ge, "i"), z(De), typeof De != "string" && (ge -= E(De));
            break;
          case "string":
            b === "left" && typeof Ee() == "string" && z(q(-1)), z(e.strPosToUni(le));
            break;
          case "object":
            for (ge = a.dlen(le.d); ge > 0; )
              switch (De = q(ge, "i"), typeof De) {
                case "number":
                  ge -= De;
                  break;
                case "string":
                  z(De);
                  break;
                case "object":
                  ge -= a.dlen(De.d);
              }
            break;
        }
      }
      let ce;
      for (; ce = q(-1); )
        z(ce);
      return s(L);
    }
    function h(f, y) {
      n(f), n(y);
      const b = [], L = l(b), { take: z } = _(f);
      for (let Ee = 0; Ee < y.length; Ee++) {
        const ce = y[Ee];
        let ne, le;
        switch (typeof ce) {
          case "number":
            for (ne = ce; ne > 0; )
              le = z(ne, "d"), L(le), typeof le != "object" && (ne -= E(le));
            break;
          case "string":
            L(ce);
            break;
          case "object":
            ne = a.dlen(ce.d);
            let ge = 0;
            for (; ge < ne; )
              switch (le = z(ne - ge, "d"), typeof le) {
                case "number":
                  L({ d: x(ce.d, ge, ge + le) }), ge += le;
                  break;
                case "string":
                  ge += e.strPosToUni(le);
                  break;
                case "object":
                  L(le);
              }
            break;
        }
      }
      let q;
      for (; q = z(-1); )
        L(q);
      return s(b);
    }
    const U = (f, y) => {
      let b = 0;
      for (let L = 0; L < y.length && f > b; L++) {
        const z = y[L];
        switch (typeof z) {
          case "number": {
            b += z;
            break;
          }
          case "string":
            const q = e.strPosToUni(z);
            b += q, f += q;
            break;
          case "object":
            f -= Math.min(a.dlen(z.d), f - b);
            break;
        }
      }
      return f;
    }, Y = (f, y) => typeof f == "number" ? U(f, y) : f.map((b) => U(b, y));
    function pe(f, y, b) {
      return r(f, (L, z) => typeof L == "object" && typeof L.d == "number" ? { d: b.slice(y, z, z + L.d) } : L);
    }
    function Z(f) {
      return r(f, (y) => {
        switch (typeof y) {
          case "object":
            if (typeof y.d == "number")
              throw Error("Cannot invert text op: Deleted characters missing from operation. makeInvertible must be called first.");
            return y.d;
          // delete -> insert
          case "string":
            return { d: y };
          // Insert -> delete
          case "number":
            return y;
        }
      });
    }
    function Ce(f) {
      return r(f, (y) => typeof y == "object" && typeof y.d == "string" ? { d: e.strPosToUni(y.d) } : y);
    }
    function Le(f) {
      let y = !0;
      return t(f, (b) => {
        typeof b == "object" && typeof b.d == "number" && (y = !1);
      }), y;
    }
    function ve(f) {
      return {
        name: "text-unicode",
        uri: "http://sharejs.org/types/text-unicode",
        trim: s,
        normalize: o,
        checkOp: n,
        /** Create a new text snapshot.
         *
         * @param {string} initial - initial snapshot data. Optional. Defaults to ''.
         * @returns {Snap} Initial document snapshot object
         */
        create(y = "") {
          if (typeof y != "string")
            throw Error("Initial data must be a string");
          return f.create(y);
        },
        /** Apply an operation to a document snapshot
         */
        apply(y, b) {
          n(b);
          const L = f.builder(y);
          for (let z = 0; z < b.length; z++) {
            const q = b[z];
            switch (typeof q) {
              case "number":
                L.skip(q);
                break;
              case "string":
                L.append(q);
                break;
              case "object":
                L.del(a.dlen(q.d));
                break;
            }
          }
          return L.build();
        },
        transform: c,
        compose: h,
        transformPosition: U,
        transformSelection: Y,
        isInvertible: Le,
        makeInvertible(y, b) {
          return pe(y, b, f);
        },
        stripInvertible: Ce,
        invert: Z,
        invertWithDoc(y, b) {
          return Z(pe(y, b, f));
        },
        isNoop: (y) => y.length === 0
      };
    }
    a.default = ve;
  })(ct)), ct;
}
var rt = {}, Et;
function rn() {
  if (Et) return rt;
  Et = 1, Object.defineProperty(rt, "__esModule", { value: !0 });
  const a = ht(), e = pt();
  function n(t, r) {
    return {
      // Returns the text content of the document
      get: t,
      // Returns the number of characters in the string
      getLength() {
        return t().length;
      },
      // Insert the specified text at the given position in the document
      insert(u, o, l) {
        const E = e.strPosToUni(t(), u);
        return r([E, o], l);
      },
      remove(u, o, l) {
        const E = e.strPosToUni(t(), u);
        return r([E, { d: o }], l);
      },
      // When you use this API, you should implement these two methods
      // in your editing context.
      //onInsert: function(pos, text) {},
      //onRemove: function(pos, removedLength) {},
      _onOp(u) {
        a.eachOp(u, (o, l, E) => {
          switch (typeof o) {
            case "string":
              this.onInsert && this.onInsert(E, o);
              break;
            case "object":
              const x = a.dlen(o.d);
              this.onRemove && this.onRemove(E, x);
          }
        });
      },
      onInsert: null,
      onRemove: null
    };
  }
  return rt.default = n, n.provides = { text: !0 }, rt;
}
var Dt;
function sn() {
  return Dt || (Dt = 1, (function(a) {
    var e = Ue && Ue.__createBinding || (Object.create ? (function(c, h, U, Y) {
      Y === void 0 && (Y = U), Object.defineProperty(c, Y, { enumerable: !0, get: function() {
        return h[U];
      } });
    }) : (function(c, h, U, Y) {
      Y === void 0 && (Y = U), c[Y] = h[U];
    })), n = Ue && Ue.__setModuleDefault || (Object.create ? (function(c, h) {
      Object.defineProperty(c, "default", { enumerable: !0, value: h });
    }) : function(c, h) {
      c.default = h;
    }), t = Ue && Ue.__importStar || function(c) {
      if (c && c.__esModule) return c;
      var h = {};
      if (c != null) for (var U in c) Object.hasOwnProperty.call(c, U) && e(h, c, U);
      return n(h, c), h;
    }, r = Ue && Ue.__importDefault || function(c) {
      return c && c.__esModule ? c : { default: c };
    };
    Object.defineProperty(a, "__esModule", { value: !0 }), a.type = a.remove = a.insert = void 0;
    const u = pt(), o = t(ht()), l = r(rn()), E = {
      create(c) {
        return c;
      },
      toString(c) {
        return c;
      },
      builder(c) {
        if (typeof c != "string")
          throw Error("Invalid document snapshot: " + c);
        const h = [];
        return {
          skip(U) {
            let Y = u.uniToStrPos(c, U);
            if (Y > c.length)
              throw Error("The op is too long for this document");
            h.push(c.slice(0, Y)), c = c.slice(Y);
          },
          append(U) {
            h.push(U);
          },
          del(U) {
            c = c.slice(u.uniToStrPos(c, U));
          },
          build() {
            return h.join("") + c;
          }
        };
      },
      slice: o.uniSlice
    }, x = o.default(E), _ = Object.assign(Object.assign({}, x), { api: l.default });
    a.type = _, a.insert = (c, h) => h.length === 0 ? [] : c === 0 ? [h] : [c, h], a.remove = (c, h) => o.dlen(h) === 0 ? [] : c === 0 ? [{ d: h }] : [c, { d: h }];
    var s = ht();
    Object.defineProperty(a, "makeType", { enumerable: !0, get: function() {
      return s.default;
    } });
  })(Ue)), Ue;
}
var Pt;
function on() {
  return Pt || (Pt = 1, (function(a) {
    var e = Ze && Ze.__importDefault || function(i) {
      return i && i.__esModule ? i : {
        default: i
      };
    };
    Object.defineProperty(a, "__esModule", {
      value: !0
    }), a.editOp = a.replaceOp = a.insertOp = a.moveOp = a.removeOp = a.type = void 0;
    const n = e(tn()), t = e(nn()), r = St(), u = kt();
    function o(i, d) {
      if (!i) throw new Error(d);
    }
    a.type = {
      name: "json1",
      uri: "http://sharejs.org/types/JSONv1",
      readCursor: r.readCursor,
      writeCursor: r.writeCursor,
      create: (i) => i,
      isNoop: (i) => i == null,
      setDebug(i) {
      },
      registerSubtype: Z,
      checkValidOp: z,
      normalize: q,
      apply: Ee,
      transformPosition: ce,
      compose: ne,
      tryTransform: st,
      transform: jt,
      makeInvertible: De,
      invert: le,
      invertWithDoc: Ut,
      RM_UNEXPECTED_CONTENT: u.ConflictType.RM_UNEXPECTED_CONTENT,
      DROP_COLLISION: u.ConflictType.DROP_COLLISION,
      BLACKHOLE: u.ConflictType.BLACKHOLE,
      transformNoConflict: (i, d, m) => yt(() => !0, i, d, m),
      typeAllowingConflictsPred: (i) => Object.assign(Object.assign({}, a.type), {
        transform: (d, m, D) => yt(i, d, m, D)
      })
    };
    const l = (i) => i ? i.getComponent() : null;
    function E(i) {
      return i && typeof i == "object" && !Array.isArray(i);
    }
    const x = (i) => Array.isArray(i) ? i.slice() : i !== null && typeof i == "object" ? Object.assign({}, i) : i, _ = (i) => i && (i.p != null || i.r !== void 0), s = (i) => i && (i.d != null || i.i !== void 0);
    function c(i, d) {
      return o(i != null), typeof d == "number" ? (o(Array.isArray(i), "Invalid key - child is not an array"), (i = i.slice()).splice(d, 1)) : (o(E(i), "Invalid key - child is not an object"), delete (i = Object.assign({}, i))[d]), i;
    }
    function h(i, d, m) {
      return typeof d == "number" ? (o(i != null, "Container is missing for key"), o(Array.isArray(i), "Cannot use numerical key for object container"), o(i.length >= d, "Cannot insert into out of bounds index"), i.splice(d, 0, m)) : (o(E(i), "Cannot insert into missing item"), o(i[d] === void 0, "Trying to overwrite value at key. Your op needs to remove it first"), i[d] = m), m;
    }
    a.removeOp = (i, d = !0) => r.writeCursor().writeAtPath(i, "r", d).get(), a.moveOp = (i, d) => r.writeCursor().writeMove(i, d).get(), a.insertOp = (i, d) => r.writeCursor().writeAtPath(i, "i", d).get(), a.replaceOp = (i, d, m) => r.writeCursor().at(i, (D) => {
      D.write("r", d), D.write("i", m);
    }).get(), a.editOp = (i, d, m, D = !1) => r.writeCursor().at(i, (O) => y(O, d, m, D)).get();
    const U = (i, d) => i != null && (typeof d == "number" ? Array.isArray(i) : typeof i == "object"), Y = (i, d) => U(i, d) ? i[d] : void 0, pe = {};
    function Z(i) {
      let d = i.type ? i.type : i;
      d.name && (pe[d.name] = d), d.uri && (pe[d.uri] = d);
    }
    const Ce = (i) => {
      const d = pe[i];
      if (d) return d;
      throw Error("Missing type: " + i);
    };
    Z(sn());
    const Le = (i, d) => i + d;
    Z({
      name: "number",
      apply: Le,
      compose: Le,
      invert: (i) => -i,
      transform: (i) => i
    });
    const ve = (i) => i == null ? null : i.et ? Ce(i.et) : i.es ? pe["text-unicode"] : i.ena != null ? pe.number : null, f = (i) => i.es ? i.es : i.ena != null ? i.ena : i.e, y = (i, d, m, D = !1) => {
      const [O, I] = typeof d == "string" ? [Ce(d), d] : [d, d.name];
      !D && O.isNoop && O.isNoop(m) || (I === "number" ? i.write("ena", m) : I === "text-unicode" ? i.write("es", m) : (i.write("et", I), i.write("e", m)));
    };
    function b(i) {
      o(typeof i == "number"), o(i >= 0), o(i === (0 | i));
    }
    function L(i) {
      typeof i == "number" ? b(i) : o(typeof i == "string");
    }
    function z(i) {
      if (i === null) return;
      const d = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), D = (I) => {
        let R = !0, $ = !1;
        for (let p in I) {
          const v = I[p];
          if (R = !1, o(p === "p" || p === "r" || p === "d" || p === "i" || p === "e" || p === "es" || p === "ena" || p === "et", "Invalid component item '" + p + "'"), p === "p") b(v), o(!d.has(v)), d.add(v), o(I.r === void 0);
          else if (p === "d") b(v), o(!m.has(v)), m.add(v), o(I.i === void 0);
          else if (p === "e" || p === "es" || p === "ena") {
            o(!$), $ = !0;
            const w = ve(I);
            o(w, "Missing type in edit"), w.checkValidOp && w.checkValidOp(f(I));
          }
        }
        o(!R);
      }, O = (I, R, $) => {
        if (!Array.isArray(I)) throw Error("Op must be null or a list");
        if (I.length === 0) throw Error("Empty descent");
        R || L(I[0]);
        let p = 1, v = 0, w = 0;
        for (let C = 0; C < I.length; C++) {
          const N = I[C];
          if (o(N != null), Array.isArray(N)) {
            const B = O(N, !1);
            if (v) {
              const g = typeof w, S = typeof B;
              g === S ? o(w < B, "descent keys are not in order") : o(g === "number" && S === "string");
            }
            w = B, v++, p = 3;
          } else typeof N == "object" ? (o(p === 1, `Prev not scalar - instead ${p}`), D(N), p = 2) : (o(p !== 3), L(N), o(r.isValidPathItem(N), "Invalid path key"), p = 1);
        }
        return o(v !== 1, "Operation makes multiple descents. Remove some []"), o(p === 2 || p === 3), I[0];
      };
      O(i, !0), o(d.size === m.size, "Mismatched picks and drops in op");
      for (let I = 0; I < d.size; I++) o(d.has(I)), o(m.has(I));
    }
    function q(i) {
      let d = 0, m = [];
      const D = r.writeCursor();
      return D.mergeTree(i, (O, I) => {
        const R = ve(O);
        if (R) {
          const p = f(O);
          y(I, R, R.normalize ? R.normalize(p) : p);
        }
        for (const p of ["r", "p", "i", "d"]) if (O[p] !== void 0) {
          const v = p === "p" || p === "d" ? ($ = O[p], m[$] == null && (m[$] = d++), m[$]) : O[p];
          I.write(p, v);
        }
        var $;
      }), D.get();
    }
    function Ee(i, d) {
      if (z(d), d === null) return i;
      const m = [];
      return (function D(O, I) {
        let R = O, $ = 0, p = {
          root: O
        }, v = 0, w = p, C = "root";
        function N() {
          for (; v < $; v++) {
            let B = I[v];
            typeof B != "object" && (o(U(w, C)), w = w[C] = x(w[C]), C = B);
          }
        }
        for (; $ < I.length; $++) {
          const B = I[$];
          if (Array.isArray(B)) {
            const g = D(R, B);
            g !== R && g !== void 0 && (N(), R = w[C] = g);
          } else if (typeof B == "object") {
            B.d != null ? (N(), R = h(w, C, m[B.d])) : B.i !== void 0 && (N(), R = h(w, C, B.i));
            const g = ve(B);
            if (g) N(), R = w[C] = g.apply(R, f(B));
            else if (B.e !== void 0) throw Error("Subtype " + B.et + " undefined");
          } else R = Y(R, B);
        }
        return p.root;
      })(i = (function D(O, I) {
        const R = [];
        let $ = 0;
        for (; $ < I.length; $++) {
          const C = I[$];
          if (Array.isArray(C)) break;
          typeof C != "object" && (R.push(O), O = Y(O, C));
        }
        for (let C = I.length - 1; C >= $; C--) O = D(O, I[C]);
        for (--$; $ >= 0; $--) {
          const C = I[$];
          if (typeof C != "object") {
            const N = R.pop();
            O = O === Y(N, C) ? N : O === void 0 ? c(N, C) : (v = C, w = O, (p = x(p = N))[v] = w, p);
          } else _(C) && (o(O !== void 0, "Cannot pick up or remove undefined"), C.p != null && (m[C.p] = O), O = void 0);
        }
        var p, v, w;
        return O;
      })(i, d), d);
    }
    function ce(i, d) {
      i = i.slice(), z(d);
      const m = r.readCursor(d);
      let D, O, I = !1;
      const R = [];
      for (let p = 0; ; p++) {
        const v = i[p], w = m.getComponent();
        if (w && (w.r !== void 0 ? I = !0 : w.p != null && (I = !1, D = w.p, O = p)), p >= i.length) break;
        let C = 0;
        const N = r.advancer(m, void 0, (g, S) => {
          _(S) && C++;
        });
        R.unshift(N);
        const B = N(v);
        if (typeof v == "number" && (i[p] -= C), !B) break;
      }
      if (R.forEach((p) => p.end()), I) return null;
      const $ = () => {
        let p = 0;
        if (D != null) {
          const v = m.getPath();
          p = v.length, i = v.concat(i.slice(O));
        }
        for (; p < i.length; p++) {
          const v = i[p], w = l(m), C = ve(w);
          if (C) {
            const g = f(w);
            C.transformPosition && (i[p] = C.transformPosition(i[p], g));
            break;
          }
          let N = 0;
          const B = r.advancer(m, (g, S) => s(S) ? ~(g - N) : g - N, (g, S) => {
            s(S) && N++;
          })(v);
          if (typeof v == "number" && (i[p] += N), !B) break;
        }
      };
      return D != null ? m.eachDrop(null, (p) => {
        p === D && $();
      }) : $(), i;
    }
    function ne(i, d) {
      if (z(i), z(d), i == null) return d;
      if (d == null) return i;
      let m = 0;
      const D = r.readCursor(i), O = r.readCursor(d), I = r.writeCursor(), R = [], $ = [], p = [], v = [], w = [], C = [], N = /* @__PURE__ */ new Set();
      D.traverse(null, (g) => {
        g.p != null && (p[g.p] = D.clone());
      }), O.traverse(null, (g) => {
        g.d != null && (v[g.d] = O.clone());
      });
      const B = r.writeCursor();
      return (function g(S, re, te, K, se, Ne, Oe, ye) {
        o(re || te);
        const oe = l(re), Pe = l(te), Ae = !!Pe && Pe.r !== void 0, qe = !!oe && oe.i !== void 0, Te = oe ? oe.d : null, Ie = Pe ? Pe.p : null, Re = (Ne || Ae) && Ie == null;
        if (Ie != null) K = v[Ie], Oe = $[Ie] = new r.WriteCursor();
        else if (Pe && Pe.r !== void 0) K = null;
        else {
          const T = l(K);
          T && T.d != null && (K = null);
        }
        const Q = l(K);
        if (Te != null) if (S = p[Te], ye = R[Te] = new r.WriteCursor(), Re) Ne && !Ae && ye.write("r", !0);
        else {
          const T = w[Te] = m++;
          Oe.write("d", T);
        }
        else if (oe && oe.i !== void 0) S = null;
        else {
          const T = l(S);
          T && T.p != null && (S = null);
        }
        let A;
        qe ? (o(se === void 0), A = oe.i) : A = se;
        const W = (Ie == null ? !qe || Ne || Ae : A === void 0) ? null : Oe.getComponent();
        if (Ie != null) {
          if (!(se !== void 0 || qe)) {
            const T = Te != null ? w[Te] : m++;
            C[Ie] = T, ye.write("p", T);
          }
        } else Ae && (qe || se !== void 0 || (Pe.r, ye.write("r", Pe.r)));
        const M = Re ? null : ve(oe), P = ve(Q);
        if ((M || P) && (M && M.name, P && P.name), M && P) {
          o(M === P);
          const T = f(oe), G = f(Q), he = M.compose(T, G);
          y(Oe, M, he), N.add(Q);
        } else M ? y(Oe, M, f(oe)) : P && (y(Oe, P, f(Q)), N.add(Q));
        const k = typeof A == "object" && A != null;
        let J = !1, X = 0, ee = 0, fe = 0, de = 0, ae = 0;
        const me = r.advancer(K, (T, G) => s(G) ? de - T - 1 : T - de, (T, G) => {
          s(G) && de++;
        }), H = r.advancer(S, (T, G) => _(G) ? X - T - 1 : T - X, (T, G) => {
          _(G) && X++;
        });
        if (r.eachChildOf(re, te, (T, G, he) => {
          let we, xe, Ke = T, Me = T, Ye = T;
          if (typeof T == "number") {
            let _e = T + fe;
            xe = me(_e), Me = _e + de;
            let ue = T + ee;
            we = H(ue), s(l(xe)) && (we = null), Ke = ue + X, Ye = T + ae, o(Ke >= 0, "p1PickKey is negative"), o(Me >= 0, "p2DropKey is negative");
            const Se = s(l(G)), Be = _(l(he));
            (Se || Be && !Re) && ae--, Se && ee--, Be && fe--;
          } else we = H(T), xe = me(T);
          ye.descend(Ke), Oe.descend(Me);
          const Xe = k && !s(l(G)) ? A[Ye] : void 0, je = g(we, G, he, xe, Xe, Re, Oe, ye);
          var $e, j, ie;
          k && !Re ? Xe !== je && (J || (A = Array.isArray(A) ? A.slice() : Object.assign({}, A), J = !0), $e = A, ie = je, typeof (j = Ye) == "number" ? (o(Array.isArray($e)), o(j < $e.length)) : (o(!Array.isArray($e)), o($e[j] !== void 0)), ie === void 0 ? typeof j == "number" ? $e.splice(j, 1) : delete $e[j] : $e[j] = ie) : o(je === void 0), Oe.ascend(), ye.ascend();
        }), H.end(), me.end(), W != null) W.i = A;
        else if (!Ne && !Ae && Ie == null) return A;
      })(D, D.clone(), O, O.clone(), void 0, !1, I, B), I.reset(), I.mergeTree(B.get()), I.reset(), I.get(), R.map((g) => g.get()), $.map((g) => g.get()), D.traverse(I, (g, S) => {
        const re = g.p;
        if (re != null) {
          const te = w[re];
          te != null && S.write("p", te);
          const K = R[re];
          K && K.get(), K && S.mergeTree(K.get());
        } else g.r !== void 0 && S.write("r", g.r);
      }), I.reset(), I.get(), O.traverse(I, (g, S) => {
        const re = g.d;
        if (re != null) {
          const K = C[re];
          K != null && S.write("d", K);
          const se = $[re];
          se && S.mergeTree(se.get());
        } else g.i !== void 0 && S.write("i", g.i);
        const te = ve(g);
        te && !N.has(g) && y(S, te, f(g));
      }), I.get();
    }
    function le(i) {
      if (i == null) return null;
      const d = new r.ReadCursor(i), m = new r.WriteCursor();
      let D;
      const O = [], I = [];
      return (function R($, p, v) {
        const w = $.getComponent();
        let C, N = !1;
        if (w) {
          w.p != null && (p.write("d", w.p), O[w.p] = $.clone()), w.r !== void 0 && p.write("i", w.r), w.d != null && (p.write("p", w.d), v = void 0), w.i !== void 0 && (v = C = w.i);
          const g = ve(w);
          g && (v === void 0 ? (D || (D = /* @__PURE__ */ new Set()), D.add(w)) : (f(w), v = g.apply(v, f(w)), N = !0));
        }
        let B = 0;
        for (const g of $) {
          p.descend(g);
          const S = typeof g == "number" ? g - B : g, re = Y(v, S);
          s($.getComponent()) && B++;
          const te = R($, p, re);
          if (v !== void 0 && te !== void 0) {
            if (N || (N = !0, v = x(v)), !U(v, S)) throw Error("Cannot modify child - invalid operation");
            v[S] = te;
          }
          p.ascend();
        }
        if (C === void 0) return N ? v : void 0;
        p.write("r", v);
      })(d, m, void 0), D && (m.reset(), (function R($, p, v) {
        const w = p.getComponent();
        if (w) {
          const g = w.d;
          if (g != null && ($ = O[g], v = I[g] = r.writeCursor()), D.has(w)) {
            const S = ve(w);
            if (!S.invert) throw Error(`Cannot invert subtype ${S.name}`);
            y(v, S, S.invert(f(w)));
          }
        }
        let C = 0, N = 0;
        const B = r.advancer($, (g, S) => _(S) ? C - g - 1 : g - C, (g, S) => {
          _(S) && C++;
        });
        for (const g of p) if (typeof g == "number") {
          const S = g - N, re = B(S), te = S + C;
          v.descend(te), R(re, p, v), s(p.getComponent()) && N++, v.ascend();
        } else v.descend(g), R(B(g), p, v), v.ascend();
        B.end();
      })(d.clone(), d, m), I.length && (m.reset(), d.traverse(m, (R, $) => {
        const p = R.p;
        if (p != null) {
          const v = I[p];
          v && v.get(), v && $.mergeTree(v.get());
        }
      }))), m.get();
    }
    const ge = (i, d) => i.some((m) => typeof m == "object" && (Array.isArray(m) ? ge(m, d) : d(m)));
    function De(i, d) {
      if (i == null || !ge(i, (p) => {
        var v;
        return p.r !== void 0 || ((v = ve(p)) === null || v === void 0 ? void 0 : v.makeInvertible) != null;
      })) return i;
      const m = new r.ReadCursor(i), D = new r.WriteCursor();
      let O = !1;
      const I = [], R = [], $ = (p, v, w) => {
        const C = p.getComponent();
        let N = !1;
        if (C) {
          C.d != null && v.write("d", C.d), C.i !== void 0 && v.write("i", C.i);
          const g = C.p;
          if (g != null && (I[g] = p.clone(), o(w !== void 0, "Operation picks up at an invalid key"), R[g] = w, v.write("p", C.p)), C.r !== void 0 && w === void 0) throw Error("Invalid doc / op in makeInvertible: removed item missing from doc");
          const S = ve(C);
          S && (S.makeInvertible ? O = !0 : y(v, S, f(C), !0));
        }
        let B = 0;
        for (const g of p) {
          v.descend(g);
          const S = typeof g == "number" ? g - B : g, re = Y(w, S), te = $(p, v, re);
          re !== te && (N || (N = !0, w = x(w)), te === void 0 ? (w = c(w, S), typeof g == "number" && B++) : w[S] = te), v.ascend();
        }
        return C && (C.r !== void 0 ? (v.write("r", t.default(w)), w = void 0) : C.p != null && (w = void 0)), w;
      };
      return $(m, D, d), D.get(), O && (D.reset(), (function p(v, w, C, N, B) {
        const g = w.getComponent();
        if (g) {
          g.i !== void 0 ? (N = g.i, B = !0) : g.d != null && (N = R[g.d], v = I[g.d], B = !1, g.d);
          let K = ve(g);
          if (K && K.makeInvertible) {
            const se = f(g);
            y(C, K, K.makeInvertible(se, N), !0);
          }
        }
        let S = 0, re = 0;
        const te = r.advancer(v, (K, se) => _(se) ? S - K - 1 : K - S, (K, se) => {
          _(se) && S++;
        });
        for (const K of w) if (typeof K == "number") {
          const se = K - re, Ne = te(se), Oe = se + S, ye = Y(N, B ? se : Oe);
          C.descend(K), p(Ne, w, C, ye, B), s(w.getComponent()) && re++, C.ascend();
        } else {
          const se = Y(N, K);
          C.descend(K), p(te(K), w, C, se, B), C.ascend();
        }
        te.end();
      })(m.clone(), m, D, d, !1)), D.get();
    }
    function Ut(i, d) {
      return le(De(i, d));
    }
    const it = (i) => {
      if (i == null) return null;
      const d = i.slice();
      for (let m = 0; m < i.length; m++) {
        const D = d[m];
        Array.isArray(D) && (d[m] = it(D));
      }
      return d;
    };
    function st(i, d, m) {
      o(m === "left" || m === "right", "Direction must be left or right");
      const D = m === "left" ? 0 : 1;
      if (d == null) return {
        ok: !0,
        result: i
      };
      z(i), z(d);
      let O = null;
      const I = [], R = [], $ = [], p = [], v = [], w = [], C = [], N = [], B = [], g = [], S = [], re = [], te = [], K = [], se = [];
      let Ne = 0;
      const Oe = r.readCursor(i), ye = r.readCursor(d), oe = r.writeCursor();
      if ((function Q(A, W = null, M) {
        const P = l(W);
        P && (P.r !== void 0 ? M = W.clone() : P.p != null && (M = null, w[P.p] = A.clone()));
        const k = A.getComponent();
        let J;
        k && (J = k.p) != null && (v[J] = W ? W.clone() : null, $[J] = A.clone(), M && (g[J] = !0, B[J] = M), P && P.p != null && (K[J] = P.p));
        const X = r.advancer(W);
        for (const ee of A) Q(A, X(ee), M);
        X.end();
      })(ye, Oe, null), (function Q(A, W, M, P, k) {
        const J = M.getComponent();
        let X, ee = !1;
        J && ((X = J.d) != null ? (p[X] = M.clone(), P != null && (se[P] == null && (se[P] = []), se[P].push(X)), g[X], A = v[X] || null, W = $[X] || null, g[X] ? (k && (S[X] = !0), k = B[X] || null) : !k || D !== 1 && K[X] != null || O == null && (O = {
          type: u.ConflictType.RM_UNEXPECTED_CONTENT,
          op1: a.removeOp(k.getPath()),
          op2: a.moveOp(W.getPath(), M.getPath())
        }), ee = !0) : J.i !== void 0 && (A = W = null, ee = !0, k && O == null && (O = {
          type: u.ConflictType.RM_UNEXPECTED_CONTENT,
          op1: a.removeOp(k.getPath()),
          op2: a.insertOp(M.getPath(), J.i)
        })));
        const fe = l(A);
        fe && (fe.r !== void 0 ? k = A.clone() : fe.p != null && (fe.p, P = fe.p, k = null));
        const de = ve(J);
        de && k && O == null && (O = {
          type: u.ConflictType.RM_UNEXPECTED_CONTENT,
          op1: a.removeOp(k.getPath()),
          op2: a.editOp(M.getPath(), de, f(J), !0)
        });
        let ae = 0, me = 0;
        const H = r.advancer(W, (G, he) => _(he) ? ae - G - 1 : G - ae, (G, he) => {
          _(he) && ae++;
        }), T = r.advancer(A);
        for (const G of M) if (typeof G == "number") {
          const he = G - me, we = H(he);
          me += +Q(T(he + ae), we, M, P, k);
        } else {
          const he = H(G);
          Q(T(G), he, M, P, k);
        }
        return H.end(), T.end(), ee;
      })(Oe, ye, ye.clone(), null, null), p.map((Q) => Q && Q.get()), O) return {
        ok: !1,
        conflict: O
      };
      S.map((Q) => !!Q);
      const Pe = [];
      let Ae = null;
      (function Q(A, W, M, P, k) {
        let J = !1;
        const X = l(W);
        if (_(X)) {
          const H = X.p;
          H != null ? (M = p[H], P = re[H] = r.writeCursor(), J = !0, k = null) : (M = null, k = W.clone());
        } else s(l(M)) && (M = null);
        const ee = A.getComponent();
        if (ee) {
          const H = ee.p;
          H != null ? (k && (N[H] = k), Pe[H] = k || D === 1 && J ? null : P.getComponent(), I[H] = A.clone(), M && (C[H] = M.clone())) : ee.r !== void 0 && (k || P.write("r", !0), (k || J) && (Ae == null && (Ae = /* @__PURE__ */ new Set()), Ae.add(ee)));
        }
        let fe = 0, de = 0;
        const ae = r.advancer(W, void 0, (H, T) => {
          _(T) && fe++;
        }), me = r.advancer(M, (H, T) => s(T) ? ~(H - de) : H - de, (H, T) => {
          s(T) && de++;
        });
        if (A) for (const H of A) if (typeof H == "string") {
          const T = ae(H), G = me(H);
          P.descend(H), Q(A, T, G, P, k), P.ascend();
        } else {
          const T = ae(H), G = H - fe, he = _(l(T)) ? null : me(G), we = G + de;
          o(we >= 0), P.descend(we), Q(A, T, he, P, k), P.ascend();
        }
        ae.end(), me.end();
      })(Oe, ye, ye.clone(), oe, null), oe.reset();
      let qe = [];
      if ((function Q(A, W, M, P, k, J) {
        o(W);
        const X = W.getComponent();
        let ee = l(P), fe = !1;
        const de = (j, ie, _e) => j ? a.moveOp(j.getPath(), ie.getPath()) : a.insertOp(ie.getPath(), _e.i);
        if (s(X)) {
          const j = X.d;
          j != null && (R[j] = W.clone());
          const ie = j != null ? Pe[j] : null;
          let _e = !1;
          if (X.i !== void 0 || j != null && ie) {
            let ue;
            ee && (ee.i !== void 0 || (ue = ee.d) != null && !g[ue]) && (_e = ue != null ? j != null && j === K[ue] : n.default(ee.i, X.i), _e || ue != null && D !== 1 && K[ue] != null || O == null && (O = {
              type: u.ConflictType.DROP_COLLISION,
              op1: de(j != null ? I[j] : null, W, X),
              op2: de(ue != null ? $[ue] : null, P, ee)
            })), _e || (J ? O == null && (O = {
              type: u.ConflictType.RM_UNEXPECTED_CONTENT,
              op1: de(j != null ? I[j] : null, W, X),
              op2: a.removeOp(J.getPath())
            }) : (j != null ? (qe[Ne] = j, k.write("d", ie.p = Ne++)) : k.write("i", t.default(X.i)), fe = !0));
          } else if (j != null && !ie) {
            const ue = N[j];
            ue && (J = ue.clone());
          }
          j != null ? (A = I[j], M = w[j], P = C[j]) : X.i !== void 0 && (A = M = null, _e || (P = null));
        } else _(l(A)) && (A = M = P = null);
        const ae = l(A), me = l(M);
        if (_(me)) {
          const j = me.p;
          me.r !== void 0 && (!ae || ae.r === void 0) || g[j] ? (P = null, J = M.clone()) : j != null && (P = p[j], D !== 1 && K[j] != null || ((k = te[j]) || (k = te[j] = r.writeCursor()), k.reset(), J = null));
        } else !s(X) && s(ee) && (P = null);
        ee = P != null ? P.getComponent() : null;
        const H = ve(X);
        if (H) {
          const j = f(X);
          if (J) O == null && (O = {
            type: u.ConflictType.RM_UNEXPECTED_CONTENT,
            op1: a.editOp(W.getPath(), H, j, !0),
            op2: a.removeOp(J.getPath())
          });
          else {
            const ie = ve(ee);
            let _e;
            if (ie) {
              if (H !== ie) throw Error("Transforming incompatible types");
              const ue = f(ee);
              _e = H.transform(j, ue, m);
            } else _e = t.default(j);
            y(k, H, _e);
          }
        }
        let T = 0, G = 0, he = 0, we = 0, xe = 0, Ke = 0, Me = A != null && A.descendFirst(), Ye = Me;
        const Xe = r.advancer(M, void 0, (j, ie) => {
          _(ie) && he++;
        });
        let je = P != null && P.descendFirst(), $e = je;
        for (const j of W) if (typeof j == "number") {
          let ie;
          const _e = s(W.getComponent()), ue = j - G;
          {
            let We;
            for (; Me && typeof (We = A.getKey()) == "number"; ) {
              We += T;
              const ke = A.getComponent(), Je = _(ke);
              if (We > ue || We === ue && (!Je || D === 0 && _e)) break;
              if (Je) {
                T--;
                const Fe = ke.p;
                K.includes(Fe), ke.d, l(te[ke.d]), _(l(te[ke.d])), (ke.r === void 0 || Ae && Ae.has(ke)) && (Fe == null || !Pe[Fe] || D !== 1 && K.includes(Fe)) || xe--;
              }
              Me = A.nextSibling();
            }
            ie = Me && We === ue ? A : null;
          }
          const Se = ue - T;
          let Be = Xe(Se);
          const ot = Se - he;
          let Qe = null;
          {
            let We, ke;
            for (; je && typeof (We = P.getKey()) == "number"; ) {
              ke = We - we;
              const Je = P.getComponent(), Fe = s(Je);
              if (ke > ot) break;
              if (ke === ot) {
                if (!Fe) {
                  Qe = P;
                  break;
                }
                {
                  if (D === 0 && _e) {
                    Qe = P;
                    break;
                  }
                  const Ge = Be && _(Be.getComponent());
                  if (D === 0 && Ge) break;
                }
              }
              if (Fe) {
                const Ge = Je.d;
                g[Ge], K[Ge], Je.i === void 0 && (g[Ge] || K[Ge] != null && D !== 1) ? (g[Ge] || K[Ge] != null && D === 0) && (we++, Ke--) : we++;
              }
              je = P.nextSibling();
            }
          }
          const _t = ot + we + xe + Ke;
          o(_t >= 0, "trying to descend to a negative index"), k.descend(_t), _e && (ie = Be = Qe = null, G++), Q(ie, W, Be, Qe, k, J) && Ke++, k.ascend();
        } else {
          let ie;
          for (; Me && (ie = A.getKey(), typeof ie != "string" || !(ie > j || ie === j)); ) Me = A.nextSibling();
          const _e = Me && ie === j ? A : null, ue = Xe(j);
          let Se;
          for (; je && (Se = P.getKey(), typeof Se != "string" || !(Se > j || Se === j)); ) je = P.nextSibling();
          const Be = je && Se === j ? P : null;
          k.descend(j), Q(_e, W, ue, Be, k, J), k.ascend();
        }
        return Xe.end(), Ye && A.ascend(), $e && P.ascend(), fe;
      })(Oe, Oe.clone(), ye, ye.clone(), oe, null), O) return {
        ok: !1,
        conflict: O
      };
      oe.reset();
      const Te = (Q, A, W) => Q.traverse(A, (M, P) => {
        M.d != null && W(M.d, Q, P);
      });
      (g.length || re.length) && (Te(ye, oe, (Q, A, W) => {
        g[Q] && !S[Q] && W.write("r", !0), re[Q] && W.mergeTree(re[Q].get());
      }), oe.reset());
      const Ie = [], Re = [];
      if ((te.length || g.length) && !O) {
        const Q = r.readCursor(it(oe.get()));
        if (Te(Q, null, (A, W) => {
          Ie[A] = W.clone();
        }), te.forEach((A) => {
          A && Te(r.readCursor(A.get()), null, (W, M) => {
            Ie[W] = M.clone();
          });
        }), (function A(W, M, P, k, J, X) {
          const ee = l(M);
          if (ee && _(ee)) if (ee.p != null) {
            const T = ee.p;
            Ie[T].getPath(), P = Ie[T], k = Re[T] = r.writeCursor();
          } else ee.r !== void 0 && (P = null);
          else s(l(P)) && (P = null);
          const fe = W.getComponent();
          if (fe) {
            let T;
            if ((T = fe.d) != null) {
              const G = te[T];
              G && (G.get(), k.mergeTree(G.get()), P = r.readCursor(G.get()));
            }
          }
          let de = 0, ae = 0;
          const me = r.advancer(M, void 0, (T, G) => {
            _(G) && de--;
          }), H = r.advancer(P, (T, G) => s(G) ? -(T - ae) - 1 : T - ae, (T, G) => {
            s(G) && ae++;
          });
          for (const T of W) if (typeof T == "number") {
            const G = me(T), he = T + de, we = H(he), xe = he + ae;
            k.descend(xe), A(W, G, we, k), k.ascend();
          } else k.descend(T), A(W, me(T), H(T), k), k.ascend();
          me.end(), H.end();
        })(ye, Q, Q.clone(), oe), oe.reset(), O) return {
          ok: !1,
          conflict: O
        };
        if (oe.get(), Re.length) {
          const A = Re.map((M) => M ? M.get() : null), W = r.readCursor(it(oe.get()));
          if (Te(W, oe, (M, P, k) => {
            const J = A[M];
            J && (k.mergeTree(J), A[M] = null);
          }), A.find((M) => M)) {
            const M = r.writeCursor(), P = r.writeCursor();
            let k = 0, J = 0;
            A.forEach((X) => {
              X != null && Te(r.readCursor(X), null, (ee) => {
                const fe = qe[ee];
                M.writeMove(I[fe].getPath(), R[fe].getPath(), k++);
                const de = se[fe];
                de && de.forEach((ae) => {
                  g[ae] || D !== 1 && K[ae] != null || P.writeMove($[ae].getPath(), p[ae].getPath(), J++);
                });
              });
            }), O = {
              type: u.ConflictType.BLACKHOLE,
              op1: M.get(),
              op2: P.get()
            };
          }
        }
      }
      return O ? {
        ok: !1,
        conflict: O
      } : {
        ok: !0,
        result: oe.get()
      };
    }
    const gt = (i) => {
      const d = new Error("Transform detected write conflict");
      throw d.conflict = i, d.type = d.name = "writeConflict", d;
    };
    function jt(i, d, m) {
      const D = st(i, d, m);
      if (D.ok) return D.result;
      gt(D.conflict);
    }
    const ze = (i) => {
      const d = r.writeCursor();
      return r.readCursor(i).traverse(d, (m, D) => {
        (s(m) || ve(m)) && D.write("r", !0);
      }), d.get();
    }, $t = (i, d) => {
      const { type: m, op1: D, op2: O } = i;
      switch (m) {
        case u.ConflictType.DROP_COLLISION:
          return d === "left" ? [null, ze(O)] : [ze(D), null];
        case u.ConflictType.RM_UNEXPECTED_CONTENT:
          let I = !1;
          return r.readCursor(D).traverse(null, (R) => {
            R.r !== void 0 && (I = !0);
          }), I ? [null, ze(O)] : [ze(D), null];
        case u.ConflictType.BLACKHOLE:
          return [ze(D), ze(O)];
        default:
          throw Error("Unrecognised conflict: " + m);
      }
    };
    function yt(i, d, m, D) {
      let O = null;
      for (; ; ) {
        const I = st(d, m, D);
        if (I.ok) return ne(O, I.result);
        {
          const { conflict: R } = I;
          i(R) || gt(R);
          const [$, p] = $t(R, D);
          d = ne(q(d), $), m = ne(q(m), p), O = ne(O, p);
        }
      }
    }
  })(Ze)), Ze;
}
var Tt;
function an() {
  return Tt || (Tt = 1, (function(a) {
    var e = Ve && Ve.__createBinding || (Object.create ? (function(u, o, l, E) {
      E === void 0 && (E = l), Object.defineProperty(u, E, { enumerable: !0, get: function() {
        return o[l];
      } });
    }) : (function(u, o, l, E) {
      E === void 0 && (E = l), u[E] = o[l];
    })), n = Ve && Ve.__exportStar || function(u, o) {
      for (var l in u) l !== "default" && !o.hasOwnProperty(l) && e(o, u, l);
    };
    Object.defineProperty(a, "__esModule", { value: !0 }), n(on(), a);
    var t = St();
    Object.defineProperty(a, "ReadCursor", { enumerable: !0, get: function() {
      return t.ReadCursor;
    } }), Object.defineProperty(a, "WriteCursor", { enumerable: !0, get: function() {
      return t.WriteCursor;
    } });
    var r = kt();
    Object.defineProperty(a, "ConflictType", { enumerable: !0, get: function() {
      return r.ConflictType;
    } });
  })(Ve)), Ve;
}
var V = an();
class ln {
  constructor() {
    F(this, "drawingManagerData", {});
    F(this, "_oldDrawingManagerData", {});
    F(this, "_focusDrawings", []);
    F(this, "_remove$", new be());
    F(this, "remove$", this._remove$.asObservable());
    F(this, "_add$", new be());
    F(this, "add$", this._add$.asObservable());
    F(this, "_update$", new be());
    F(this, "update$", this._update$.asObservable());
    F(this, "_order$", new be());
    F(this, "order$", this._order$.asObservable());
    F(this, "_group$", new be());
    F(this, "group$", this._group$.asObservable());
    F(this, "_ungroup$", new be());
    F(this, "ungroup$", this._ungroup$.asObservable());
    F(this, "_refreshTransform$", new be());
    F(this, "refreshTransform$", this._refreshTransform$.asObservable());
    F(this, "_visible$", new be());
    F(this, "visible$", this._visible$.asObservable());
    // private readonly _externalUpdate$ = new Subject<T[]>();
    // readonly externalUpdate$ = this._externalUpdate$.asObservable();
    F(this, "_focus$", new be());
    F(this, "focus$", this._focus$.asObservable());
    F(this, "_featurePluginUpdate$", new be());
    F(this, "featurePluginUpdate$", this._featurePluginUpdate$.asObservable());
    F(this, "_featurePluginAdd$", new be());
    F(this, "featurePluginAdd$", this._featurePluginAdd$.asObservable());
    F(this, "_featurePluginRemove$", new be());
    F(this, "featurePluginRemove$", this._featurePluginRemove$.asObservable());
    F(this, "_featurePluginOrderUpdate$", new be());
    F(this, "featurePluginOrderUpdate$", this._featurePluginOrderUpdate$.asObservable());
    F(this, "_featurePluginGroupUpdate$", new be());
    F(this, "featurePluginGroupUpdate$", this._featurePluginGroupUpdate$.asObservable());
    F(this, "_featurePluginUngroupUpdate$", new be());
    F(this, "featurePluginUngroupUpdate$", this._featurePluginUngroupUpdate$.asObservable());
    F(this, "_visible", !0);
    F(this, "_editable", !0);
  }
  dispose() {
    this._remove$.complete(), this._add$.complete(), this._update$.complete(), this._order$.complete(), this._focus$.complete(), this._featurePluginUpdate$.complete(), this._featurePluginAdd$.complete(), this._featurePluginRemove$.complete(), this._featurePluginOrderUpdate$.complete(), this.drawingManagerData = {}, this._oldDrawingManagerData = {};
  }
  visibleNotification(e) {
    this._visible$.next(e);
  }
  refreshTransform(e) {
    e.forEach((n) => {
      const t = this._getCurrentBySearch(n);
      t != null && (t.transform = n.transform, t.transforms = n.transforms, t.isMultiTransform = n.isMultiTransform);
    }), this.refreshTransformNotification(e);
  }
  getDrawingDataForUnit(e) {
    return this.drawingManagerData[e] || {};
  }
  removeDrawingDataForUnit(e) {
    const n = this.drawingManagerData[e];
    if (n == null)
      return;
    delete this.drawingManagerData[e];
    const t = [];
    Object.keys(n).forEach((r) => {
      const u = n[r];
      (u == null ? void 0 : u.data) != null && Object.keys(u.data).forEach((o) => {
        t.push({ unitId: e, subUnitId: r, drawingId: o });
      });
    }), t.length > 0 && this.removeNotification(t);
  }
  registerDrawingData(e, n) {
    this.drawingManagerData[e] = n;
  }
  initializeNotification(e) {
    const n = [], t = this.drawingManagerData[e];
    t != null && (Object.keys(t).forEach((r) => {
      this._establishDrawingMap(e, r);
      const u = t[r];
      Object.keys(u.data).forEach((o) => {
        const l = u.data[o];
        l.unitId = e, l.subUnitId = r, n.push(l);
      });
    }), n.length > 0 && this.addNotification(n));
  }
  getDrawingData(e, n) {
    return this._getDrawingData(e, n);
  }
  // Use in doc only.
  setDrawingData(e, n, t) {
    this.drawingManagerData[e][n].data = t;
  }
  getBatchAddOp(e) {
    const n = [], t = [], r = [];
    e.forEach((x) => {
      const { op: _, invertOp: s } = this._addByParam(x);
      n.push({ unitId: x.unitId, subUnitId: x.subUnitId, drawingId: x.drawingId }), t.push(_), r.push(s);
    });
    const u = t.reduce(V.type.compose, null), o = r.reduce(V.type.compose, null), { unitId: l, subUnitId: E } = e[0];
    return { undo: o, redo: u, unitId: l, subUnitId: E, objects: n };
  }
  getBatchRemoveOp(e) {
    const n = [], t = [];
    e.forEach((E) => {
      const { op: x, invertOp: _ } = this._removeByParam(E);
      n.unshift(x), t.push(_);
    });
    const r = n.reduce(V.type.compose, null), u = t.reduce(V.type.compose, null), { unitId: o, subUnitId: l } = e[0];
    return { undo: u, redo: r, unitId: o, subUnitId: l, objects: e };
  }
  getBatchUpdateOp(e) {
    const n = [], t = [], r = [];
    e.forEach((x) => {
      const { op: _, invertOp: s } = this._updateByParam(x);
      n.push({ unitId: x.unitId, subUnitId: x.subUnitId, drawingId: x.drawingId }), t.push(_), r.push(s);
    });
    const u = t.reduce(V.type.compose, null), o = r.reduce(V.type.compose, null), { unitId: l, subUnitId: E } = e[0];
    return { undo: o, redo: u, unitId: l, subUnitId: E, objects: n };
  }
  removeNotification(e) {
    this._remove$.next(e);
  }
  addNotification(e) {
    this._add$.next(e);
  }
  updateNotification(e) {
    this._update$.next(e);
  }
  orderNotification(e) {
    this._order$.next(e);
  }
  groupUpdateNotification(e) {
    this._group$.next(e);
  }
  ungroupUpdateNotification(e) {
    this._ungroup$.next(e);
  }
  refreshTransformNotification(e) {
    this._refreshTransform$.next(e);
  }
  getGroupDrawingOp(e) {
    const n = [], { unitId: t, subUnitId: r } = e[0].parent;
    e.forEach((l) => {
      n.push(this._getGroupDrawingOp(l));
    });
    const u = n.reduce(V.type.compose, null);
    return { undo: V.type.invertWithDoc(u, this.drawingManagerData), redo: u, unitId: t, subUnitId: r, objects: e };
  }
  getUngroupDrawingOp(e) {
    const n = [], { unitId: t, subUnitId: r } = e[0].parent;
    e.forEach((l) => {
      n.push(this._getUngroupDrawingOp(l));
    });
    const u = n.reduce(V.type.compose, null);
    return { undo: V.type.invertWithDoc(u, this.drawingManagerData), redo: u, unitId: t, subUnitId: r, objects: e };
  }
  getDrawingsByGroup(e) {
    const { unitId: n, subUnitId: t, drawingId: r } = e;
    if (this.getDrawingByParam({ unitId: n, subUnitId: t, drawingId: r }) == null)
      return [];
    const o = this._getDrawingData(n, t), l = [];
    return Object.keys(o).forEach((E) => {
      const x = o[E];
      x.groupId === r && l.push(x);
    }), l;
  }
  _getGroupDrawingOp(e) {
    const { parent: n, children: t } = e, { unitId: r, subUnitId: u, drawingId: o } = n, l = [];
    l.push(
      V.insertOp([r, u, "data", o], n)
    );
    let E = Number.NEGATIVE_INFINITY;
    return t.forEach((x) => {
      const { unitId: _, subUnitId: s, drawingId: c } = x, h = this._hasDrawingOrder({ unitId: _, subUnitId: s, drawingId: c });
      E = Math.max(E, h), l.push(
        ...this._getUpdateParamCompareOp(x, this.getDrawingByParam({ unitId: _, subUnitId: s, drawingId: c }))
      );
    }), E === Number.NEGATIVE_INFINITY && (E = this._getDrawingOrder(r, u).length), l.push(
      V.insertOp([r, u, "order", E], o)
    ), l.reduce(V.type.compose, null);
  }
  _getUngroupDrawingOp(e) {
    const { parent: n, children: t } = e, { unitId: r, subUnitId: u, drawingId: o } = n, l = [];
    return t.forEach((E) => {
      const { unitId: x, subUnitId: _, drawingId: s } = E;
      l.push(
        ...this._getUpdateParamCompareOp(E, this.getDrawingByParam({ unitId: x, subUnitId: _, drawingId: s }))
      );
    }), l.push(
      V.removeOp([r, u, "data", o], !0)
    ), l.push(
      V.removeOp([r, u, "order", this._getDrawingOrder(r, u).indexOf(o)], !0)
    ), l.reduce(V.type.compose, null);
  }
  applyJson1(e, n, t) {
    this._establishDrawingMap(e, n), this._oldDrawingManagerData = { ...this.drawingManagerData }, this.drawingManagerData = V.type.apply(this.drawingManagerData, t);
  }
  // private _fillMissingFields(jsonOp: JSONOp) {
  //     if (jsonOp == null) {
  //         return;
  //     }
  //     let object: { [key: string]: {} } = this.drawingManagerData;
  //     for (let i = 0; i < jsonOp.length; i++) {
  //         const op = jsonOp[i];
  //         if (Array.isArray(op)) {
  //             const opKey = op[0] as string;
  //             if (!(opKey in object)) {
  //                 object[opKey] = null as unknown as never;
  //             }
  //         } else if (typeof op === 'string') {
  //             object = object[op];
  //             if (object == null) {
  //                 break;
  //             }
  //         }
  //     }
  // }
  featurePluginUpdateNotification(e) {
    this._featurePluginUpdate$.next(e);
  }
  featurePluginOrderUpdateNotification(e) {
    this._featurePluginOrderUpdate$.next(e);
  }
  featurePluginAddNotification(e) {
    this._featurePluginAdd$.next(e);
  }
  featurePluginRemoveNotification(e) {
    this._featurePluginRemove$.next(e);
  }
  featurePluginGroupUpdateNotification(e) {
    this._featurePluginGroupUpdate$.next(e);
  }
  featurePluginUngroupUpdateNotification(e) {
    this._featurePluginUngroupUpdate$.next(e);
  }
  getDrawingByParam(e) {
    return this._getCurrentBySearch(e);
  }
  getOldDrawingByParam(e) {
    return this._getOldBySearch(e);
  }
  getDrawingOKey(e) {
    const [n, t, r] = e.split("#-#");
    return this._getCurrentBySearch({ unitId: n, subUnitId: t, drawingId: r });
  }
  focusDrawing(e) {
    if (e == null || e.length === 0) {
      this._focusDrawings = [], this._focus$.next([]);
      return;
    }
    const n = [];
    e.forEach((t) => {
      var E;
      const { unitId: r, subUnitId: u, drawingId: o } = t, l = (E = this._getDrawingData(r, u)) == null ? void 0 : E[o];
      l != null && n.push(l);
    }), n.length > 0 && (this._focusDrawings = n, this._focus$.next(n));
  }
  getFocusDrawings() {
    const e = [];
    return this._focusDrawings.forEach((n) => {
      var l;
      const { unitId: t, subUnitId: r, drawingId: u } = n, o = (l = this._getDrawingData(t, r)) == null ? void 0 : l[u];
      o != null && e.push(o);
    }), e;
  }
  getDrawingOrder(e, n) {
    return this._getDrawingOrder(e, n);
  }
  // Use in doc only.
  setDrawingOrder(e, n, t) {
    this.drawingManagerData[e][n].order = t;
  }
  orderUpdateNotification(e) {
    this._order$.next(e);
  }
  getForwardDrawingsOp(e) {
    const { unitId: n, subUnitId: t, drawingIds: r } = e, u = [], o = this.getDrawingOrder(n, t), l = [...r];
    r.forEach((_) => {
      const s = this._hasDrawingOrder({ unitId: n, subUnitId: t, drawingId: _ });
      if (s === -1 || s === o.length - 1)
        return;
      const c = V.moveOp([n, t, "order", s], [n, t, "order", s + 1]);
      u.push(c), l.includes(o[s + 1]) || l.push(o[s + 1]);
    });
    const E = u.reduce(V.type.compose, null);
    return { undo: V.type.invertWithDoc(E, this.drawingManagerData), redo: E, unitId: n, subUnitId: t, objects: { ...e, drawingIds: l } };
  }
  getBackwardDrawingOp(e) {
    const { unitId: n, subUnitId: t, drawingIds: r } = e, u = [], o = this.getDrawingOrder(n, t), l = [...r];
    r.forEach((_) => {
      const s = this._hasDrawingOrder({ unitId: n, subUnitId: t, drawingId: _ });
      if (s === -1 || s === 0)
        return;
      const c = V.moveOp([n, t, "order", s], [n, t, "order", s - 1]);
      u.push(c), l.includes(o[s - 1]) || l.push(o[s - 1]);
    });
    const E = u.reduce(V.type.compose, null);
    return { undo: V.type.invertWithDoc(E, this.drawingManagerData), redo: E, unitId: n, subUnitId: t, objects: { ...e, drawingIds: l } };
  }
  getFrontDrawingsOp(e) {
    const { unitId: n, subUnitId: t, drawingIds: r } = e, u = this._getOrderFromSearchParams(n, t, r), o = [...r], l = this.getDrawingOrder(n, t), E = [];
    u.forEach((s) => {
      const { drawingId: c } = s, h = this._getDrawingCount(n, t) - 1, U = V.moveOp([n, t, "order", this._getDrawingOrder(n, t).indexOf(c)], [n, t, "order", h]);
      E.push(U), o.includes(l[h]) || o.push(l[h]);
    });
    const x = E.reduce(V.type.compose, null);
    return { undo: V.type.invertWithDoc(x, this.drawingManagerData), redo: x, unitId: n, subUnitId: t, objects: { ...e, drawingIds: o } };
  }
  getBackDrawingsOp(e) {
    const { unitId: n, subUnitId: t, drawingIds: r } = e, u = this._getOrderFromSearchParams(n, t, r, !0), o = [...r], l = this.getDrawingOrder(n, t), E = [];
    u.forEach((s) => {
      const { drawingId: c } = s, h = V.moveOp([n, t, "order", this._getDrawingOrder(n, t).indexOf(c)], [n, t, "order", 0]);
      E.push(h), o.includes(l[0]) || o.push(l[0]);
    });
    const x = E.reduce(V.type.compose, null);
    return { undo: V.type.invertWithDoc(x, this.drawingManagerData), redo: x, unitId: n, subUnitId: t, objects: { ...e, drawingIds: o } };
  }
  _getDrawingCount(e, n) {
    return this.getDrawingOrder(e, n).length || 0;
  }
  _getOrderFromSearchParams(e, n, t, r = !1) {
    return t.map((u) => {
      const o = this._hasDrawingOrder({ unitId: e, subUnitId: n, drawingId: u });
      return { drawingId: u, zIndex: o };
    }).sort(r === !1 ? Wt : Gt);
  }
  _hasDrawingOrder(e) {
    if (e == null)
      return -1;
    const { unitId: n, subUnitId: t, drawingId: r } = e;
    return this._establishDrawingMap(n, t), this._getDrawingOrder(n, t).indexOf(r);
  }
  _getCurrentBySearch(e) {
    var u, o, l;
    if (e == null)
      return;
    const { unitId: n, subUnitId: t, drawingId: r } = e;
    return (l = (o = (u = this.drawingManagerData[n]) == null ? void 0 : u[t]) == null ? void 0 : o.data) == null ? void 0 : l[r];
  }
  _getOldBySearch(e) {
    var u, o, l;
    if (e == null)
      return;
    const { unitId: n, subUnitId: t, drawingId: r } = e;
    return (l = (o = (u = this._oldDrawingManagerData[n]) == null ? void 0 : u[t]) == null ? void 0 : o.data) == null ? void 0 : l[r];
  }
  _establishDrawingMap(e, n, t) {
    var r;
    return this.drawingManagerData[e] || (this.drawingManagerData[e] = {}), this.drawingManagerData[e][n] || (this.drawingManagerData[e][n] = {
      data: {},
      order: []
    }), t == null ? null : (r = this.drawingManagerData[e][n].data) == null ? void 0 : r[t];
  }
  _addByParam(e) {
    const { unitId: n, subUnitId: t, drawingId: r } = e;
    this._establishDrawingMap(n, t, r);
    const u = V.insertOp([n, t, "data", r], e), o = V.insertOp([n, t, "order", this._getDrawingOrder(n, t).length], r), l = [u, o].reduce(V.type.compose, null), E = V.type.invertWithDoc(l, this.drawingManagerData);
    return { op: l, invertOp: E };
  }
  _removeByParam(e) {
    if (e == null)
      return { op: [], invertOp: [] };
    const { unitId: n, subUnitId: t, drawingId: r } = e;
    if (this._establishDrawingMap(n, t, r) == null)
      return { op: [], invertOp: [] };
    const o = V.removeOp([n, t, "data", r], !0), l = V.removeOp([n, t, "order", this._getDrawingOrder(n, t).indexOf(r)], !0), E = [o, l].reduce(V.type.compose, null), x = V.type.invertWithDoc(E, this.drawingManagerData);
    return { op: E, invertOp: x };
  }
  _updateByParam(e) {
    const { unitId: n, subUnitId: t, drawingId: r } = e, u = this._establishDrawingMap(n, t, r);
    if (u == null)
      return { op: [], invertOp: [] };
    const l = this._getUpdateParamCompareOp(e, u).reduce(V.type.compose, null), E = V.type.invertWithDoc(l, this.drawingManagerData);
    return { op: l, invertOp: E };
  }
  // private _initializeDrawingData(updateParam: T, oldParam: T) {
  //     Object.keys(updateParam).forEach((key) => {
  //         if (!(key in oldParam)) {
  //             oldParam[key as keyof IDrawingParam] = null as unknown as never;
  //         }
  //     });
  // }
  _getUpdateParamCompareOp(e, n) {
    const { unitId: t, subUnitId: r, drawingId: u } = e, o = [];
    return Object.keys(e).forEach((l) => {
      const E = e[l], x = n[l];
      x !== E && o.push(
        V.replaceOp([t, r, "data", u, l], x, E)
      );
    }), o;
  }
  _getDrawingData(e, n) {
    var t, r;
    return ((r = (t = this.drawingManagerData[e]) == null ? void 0 : t[n]) == null ? void 0 : r.data) || {};
  }
  _getDrawingOrder(e, n) {
    var t, r;
    return ((r = (t = this.drawingManagerData[e]) == null ? void 0 : t[n]) == null ? void 0 : r.order) || [];
  }
  getDrawingVisible() {
    return this._visible;
  }
  getDrawingEditable() {
    return this._editable;
  }
  setDrawingVisible(e) {
    this._visible = e;
  }
  setDrawingEditable(e) {
    this._editable = e;
  }
}
class un extends ln {
}
class cn {
  constructor() {
    F(this, "_waitCount", 0);
    F(this, "_change$", new be());
    F(this, "change$", this._change$);
    F(this, "_imageSourceCache", /* @__PURE__ */ new Map());
  }
  setWaitCount(e) {
    this._waitCount = e, this._change$.next(e);
  }
  getImageSourceCache(e, n) {
    if (n === at.BASE64) {
      const t = new Image();
      return t.src = e, t;
    }
    return this._imageSourceCache.get(e);
  }
  addImageSourceCache(e, n, t) {
    n === at.BASE64 || t == null || this._imageSourceCache.set(e, t);
  }
  async getImage(e) {
    return Promise.resolve(e);
  }
  async saveImage(e) {
    return new Promise((n, t) => {
      if (!Zt.includes(e.type)) {
        t(new Error(et.ERROR_IMAGE_TYPE)), this._decreaseWaiting();
        return;
      }
      if (e.size > Yt) {
        t(new Error(et.ERROR_EXCEED_SIZE)), this._decreaseWaiting();
        return;
      }
      const r = new FileReader();
      r.readAsDataURL(e), r.onload = (u) => {
        var E;
        const o = (E = u.target) == null ? void 0 : E.result;
        if (o == null) {
          t(new Error(et.ERROR_IMAGE)), this._decreaseWaiting();
          return;
        }
        const l = Lt(6);
        n({
          imageId: l,
          imageSourceType: at.BASE64,
          source: o,
          base64Cache: o,
          status: et.SUCCUSS
        }), this._decreaseWaiting();
      };
    });
  }
  _decreaseWaiting() {
    this._waitCount -= 1, this._change$.next(this._waitCount);
  }
}
var dn = Object.getOwnPropertyDescriptor, fn = (a, e, n, t) => {
  for (var r = t > 1 ? void 0 : t ? dn(e, n) : e, u = a.length - 1, o; u >= 0; u--)
    (o = a[u]) && (r = o(r) || r);
  return r;
}, dt = (a, e) => (n, t) => e(n, t, a);
const hn = "UNIVER_DRAWING_PLUGIN";
var ft;
let At = (ft = class extends Ht {
  constructor(a = vt, e, n, t) {
    super(), this._config = a, this._injector = e, this._configService = n, this._commandService = t;
    const { ...r } = zt(
      {},
      vt,
      this._config
    );
    this._configService.setConfig(en, r);
  }
  onStarting() {
    this._initCommands(), this._initDependencies();
  }
  _initDependencies() {
    var n;
    Xt([
      [Jt, { useClass: cn }],
      [Mt, { useClass: un }]
    ], (n = this._config) == null ? void 0 : n.override).forEach((t) => this._injector.add(t));
  }
  _initCommands() {
    [
      Qt
    ].forEach((a) => this.disposeWithMe(this._commandService.registerCommand(a)));
  }
}, F(ft, "pluginName", hn), ft);
At = fn([
  dt(1, qt(Kt)),
  dt(2, Ft),
  dt(3, Vt)
], At);
function On({ unitId: a, subUnitId: e, drawingId: n }, t) {
  return typeof t == "number" ? `${a}#-#${e}#-#${n}#-#${t}` : `${a}#-#${e}#-#${n}`;
}
const wn = async (a) => new Promise((e, n) => {
  const t = new Image();
  t.src = a, t.onload = () => {
    e({
      width: t.width,
      height: t.height,
      image: t
    });
  }, t.onerror = (r) => {
    n(r);
  };
});
export {
  Zt as DRAWING_IMAGE_ALLOW_IMAGE_LIST,
  Yt as DRAWING_IMAGE_ALLOW_SIZE,
  mn as DRAWING_IMAGE_COUNT_LIMIT,
  vn as DRAWING_IMAGE_HEIGHT_LIMIT,
  _n as DRAWING_IMAGE_WIDTH_LIMIT,
  un as DrawingManagerService,
  Mt as IDrawingManagerService,
  In as IImageIoService,
  cn as ImageIoService,
  En as ImageSourceType,
  Dn as ImageUploadStatusType,
  Qt as SetDrawingSelectedOperation,
  ln as UnitDrawingService,
  At as UniverDrawingPlugin,
  On as getDrawingShapeKeyByDrawingSearch,
  wn as getImageSize
};
