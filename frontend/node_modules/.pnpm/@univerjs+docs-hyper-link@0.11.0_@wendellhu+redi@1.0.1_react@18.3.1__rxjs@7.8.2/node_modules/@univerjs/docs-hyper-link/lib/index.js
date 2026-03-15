var M = Object.defineProperty;
var N = (r, e, t) => e in r ? M(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var _ = (r, e, t) => N(r, typeof e != "symbol" ? e + "" : e, t);
import { CommandType as l, Inject as y, IResourceManagerService as E, IUniverInstanceService as O, Disposable as C, UniverInstanceType as d, CustomRangeType as g, Plugin as D, merge as P, Injector as S, IConfigService as U, ICommandService as L } from "@univerjs/core";
const R = {
  id: "docs.mutation.add-hyper-link",
  type: l.MUTATION,
  handler: () => !0
}, T = {
  id: "docs.mutation.update-hyper-link",
  type: l.MUTATION,
  handler: () => !0
}, H = {
  id: "docs.mutation.delete-hyper-link",
  type: l.MUTATION,
  handler: () => !0
}, k = "docs-hyper-link.config", f = {};
var j = Object.getOwnPropertyDescriptor, K = (r, e, t, o) => {
  for (var n = o > 1 ? void 0 : o ? j(e, t) : e, i = r.length - 1, s; i >= 0; i--)
    (s = r[i]) && (n = s(n) || n);
  return n;
}, v = (r, e) => (t, o) => e(t, o, r);
const m = "DOC_HYPER_LINK_PLUGIN";
let u = class extends C {
  constructor(r, e) {
    super(), this._resourceManagerService = r, this._univerInstanceService = e, this._init();
  }
  _init() {
    this._resourceManagerService.registerPluginResource({
      pluginName: m,
      businesses: [d.UNIVER_DOC],
      onLoad: (r, e) => {
        const t = this._univerInstanceService.getUnit(r, d.UNIVER_DOC);
        if (!t)
          return;
        const o = /* @__PURE__ */ new Map(), n = (i) => {
          var s, a;
          return (a = (s = i.getBody()) == null ? void 0 : s.customRanges) == null || a.forEach((c) => {
            c.rangeType === g.HYPERLINK && o.set(c.rangeId, c);
          }), o;
        };
        t.headerModelMap.forEach((i) => {
          n(i);
        }), t.footerModelMap.forEach((i) => {
          n(i);
        }), n(t), e.links.forEach((i) => {
          const s = o.get(i.id);
          s && (s.properties = {
            ...s.properties,
            url: i.payload
          });
        });
      },
      onUnLoad: (r) => {
      },
      toJson: (r) => {
        const e = this._univerInstanceService.getUnit(r, d.UNIVER_DOC), t = [];
        if (e) {
          const o = (n) => {
            var i, s;
            (s = (i = n.getBody()) == null ? void 0 : i.customRanges) == null || s.forEach((a) => {
              var c;
              a.rangeType === g.HYPERLINK && t.push({
                id: a.rangeId,
                payload: ((c = a.properties) == null ? void 0 : c.url) || ""
              });
            });
          };
          e.headerModelMap.forEach((n) => {
            o(n);
          }), e.footerModelMap.forEach((n) => {
            o(n);
          }), o(e);
        }
        return JSON.stringify({ links: t });
      },
      parseJson(r) {
        return JSON.parse(r);
      }
    });
  }
};
u = K([
  v(0, y(E)),
  v(1, O)
], u);
var Y = Object.getOwnPropertyDescriptor, w = (r, e, t, o) => {
  for (var n = o > 1 ? void 0 : o ? Y(e, t) : e, i = r.length - 1, s; i >= 0; i--)
    (s = r[i]) && (n = s(n) || n);
  return n;
}, h = (r, e) => (t, o) => e(t, o, r), p;
let I = (p = class extends D {
  constructor(r = f, e, t, o) {
    super(), this._config = r, this._injector = e, this._configService = t, this._commandService = o;
    const { ...n } = P(
      {},
      f,
      this._config
    );
    this._configService.setConfig(k, n);
  }
  onStarting() {
    [[u]].forEach((e) => this._injector.add(e)), [R, H, T].forEach((e) => {
      this.disposeWithMe(this._commandService.registerCommand(e));
    }), this._injector.get(u);
  }
}, _(p, "pluginName", m), _(p, "type", d.UNIVER_DOC), p);
I = w([
  h(1, y(S)),
  h(2, U),
  h(3, L)
], I);
export {
  I as UniverDocsHyperLinkPlugin
};
