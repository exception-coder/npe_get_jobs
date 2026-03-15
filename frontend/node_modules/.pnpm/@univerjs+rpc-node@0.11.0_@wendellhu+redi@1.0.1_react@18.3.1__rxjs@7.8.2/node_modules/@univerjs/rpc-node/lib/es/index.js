var j = Object.defineProperty;
var y = (e, r, n) => r in e ? j(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[r] = n;
var a = (e, r, n) => y(e, typeof r != "symbol" ? r + "" : r, n);
import { fork as U } from "node:child_process";
import g from "node:process";
import { Inject as P, Injector as v, IConfigService as C, Plugin as R, merge as S, ILogService as D } from "@univerjs/core";
import { IRPCChannelService as N, ChannelService as I, DataSyncPrimaryController as f, IRemoteSyncService as k, RemoteSyncPrimaryService as W, DataSyncReplicaController as d, IRemoteInstanceService as G, WebWorkerRemoteInstanceService as x } from "@univerjs/rpc";
import { Observable as w, shareReplay as E } from "rxjs";
const L = "rpc-node.main-thread.config", h = {}, b = "rpc-node.worker-thread.config", m = {};
var A = Object.getOwnPropertyDescriptor, M = (e, r, n, o) => {
  for (var s = o > 1 ? void 0 : o ? A(r, n) : r, t = e.length - 1, i; t >= 0; t--)
    (i = e[t]) && (s = i(s) || s);
  return s;
}, c = (e, r) => (n, o) => r(n, o, e), l;
let u = (l = class extends R {
  constructor(e = h, r, n) {
    super(), this._config = e, this._injector = r, this._configService = n;
    const { ...o } = S(
      {},
      h,
      this._config
    );
    this._configService.setConfig(L, o);
  }
  onStarting() {
    const { workerSrc: e } = this._config;
    if (!e)
      throw new Error("[UniverRPCNodeMainPlugin] workerSrc is required for UniverRPCNodeMainPlugin");
    const r = F(this._injector, e);
    [
      [N, {
        useFactory: () => new I(r)
      }],
      [f],
      [k, { useClass: W }]
    ].forEach((o) => this._injector.add(o)), this._injector.get(f);
  }
}, a(l, "pluginName", "UNIVER_RPC_NODE_MAIN_PLUGIN"), l);
u = M([
  c(1, P(v)),
  c(2, C)
], u);
var _;
let p = (_ = class extends R {
  constructor(e = m, r, n) {
    super(), this._config = e, this._injector = r, this._configService = n;
    const { ...o } = S(
      {},
      m,
      this._config
    );
    this._configService.setConfig(b, o);
  }
  onStarting() {
    [
      [d],
      [N, {
        useFactory: () => new I(K())
      }],
      [G, { useClass: x }]
    ].forEach((e) => this._injector.add(e)), this._injector.get(d);
  }
}, a(_, "pluginName", "UNIVER_RPC_NODE_WORKER_PLUGIN"), _);
p = M([
  c(1, P(v)),
  c(2, C)
], p);
function F(e, r) {
  const n = e.get(D), o = U(r);
  return o.on("spawn", () => n.log("Child computing process spawned!")), o.on("error", (t) => n.error(t)), {
    send(t) {
      o.send(t);
    },
    onMessage: new w((t) => {
      const i = (O) => {
        t.next(O);
      };
      return o.on("message", i), () => o.off("message", i);
    }).pipe(E(1))
  };
}
function K() {
  return {
    send(e) {
      g.send(e);
    },
    onMessage: new w((e) => {
      const r = (n) => {
        e.next(n);
      };
      return g.on("message", r), () => g.off("message", r);
    }).pipe(E(1))
  };
}
export {
  u as UniverRPCNodeMainPlugin,
  p as UniverRPCNodeWorkerPlugin
};
