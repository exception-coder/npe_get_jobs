var X = Object.defineProperty;
var Z = (s, t, e) => t in s ? X(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var a = (s, t, e) => Z(s, typeof t != "symbol" ? t + "" : t, e);
import { createIdentifier as k, ICommandService as C, UniverInstanceType as u, IUniverInstanceService as L, ILogService as ee, RxDisposable as O, Inject as b, Injector as R, toDisposable as te, CommandType as H, Disposable as ne, IConfigService as A, Plugin as V, merge as F } from "@univerjs/core";
import { takeUntil as v, filter as se, take as re } from "rxjs/operators";
import { BehaviorSubject as ie, firstValueFrom as ce, Observable as T, isObservable as oe, of as ae, shareReplay as z } from "rxjs";
var he = Object.getOwnPropertyDescriptor, G = (s, t, e, n) => {
  for (var r = n > 1 ? void 0 : n ? he(t, e) : t, i = s.length - 1, c; i >= 0; i--)
    (c = s[i]) && (r = c(r) || r);
  return r;
}, p = (s, t) => (e, n) => t(e, n, s);
const W = "rpc.remote-sync.service", m = k(W);
let M = class {
  constructor(s) {
    this._commandService = s;
  }
  async syncMutation(s) {
    return this._commandService.syncExecuteCommand(s.mutationInfo.id, s.mutationInfo.params, {
      onlyLocal: !0,
      fromSync: !0
    });
  }
};
M = G([
  p(0, C)
], M);
const $ = "univer.remote-instance-service", g = k($);
let q = class {
  constructor(s, t, e) {
    this._univerInstanceService = s, this._commandService = t, this._logService = e;
  }
  whenReady() {
    return Promise.resolve(!0);
  }
  async syncMutation(s) {
    return this._applyMutation(s.mutationInfo);
  }
  async createInstance(s) {
    const { type: t, snapshot: e } = s;
    try {
      switch (t) {
        case u.UNIVER_SHEET:
          return this._univerInstanceService.createUnit(u.UNIVER_SHEET, e), !0;
        default:
          throw new Error(
            `[WebWorkerRemoteInstanceService]: cannot create replica for document type: ${t}.`
          );
      }
    } catch (n) {
      throw n instanceof Error ? n : new TypeError(`${n}`);
    }
  }
  async disposeInstance(s) {
    return this._univerInstanceService.disposeUnit(s.unitID);
  }
  _applyMutation(s) {
    const { id: t, params: e } = s;
    return this._commandService.syncExecuteCommand(t, e, {
      onlyLocal: !0,
      fromSync: !0
    });
  }
};
q = G([
  p(0, L),
  p(1, C),
  p(2, ee)
], q);
function Y(s) {
  const t = s;
  return new class {
    call(e, n) {
      const r = t[e];
      if (typeof r == "function") {
        let i = n ? r.apply(t, n) : r.call(t);
        return i instanceof Promise || (i = Promise.resolve(i)), i;
      }
      throw new Error(`[RPC]: method not found for ${e}!`);
    }
    subscribe(e, n) {
      const r = t[e];
      if (typeof r == "function") {
        const i = n ? r.apply(t, n) : r.call(t);
        return oe(i) ? i : ae(i);
      }
      throw new Error(`[RPC]: observable method not found for ${e}!`);
    }
  }();
}
function B(s) {
  return new Proxy({}, {
    get(t, e) {
      if (e !== "dispose")
        return function(...n) {
          return le(e) ? s.subscribe(e, n) : s.call(e, n);
        };
    }
  });
}
function le(s) {
  return s.endsWith("$");
}
class _e extends O {
  constructor(e) {
    super();
    a(this, "_initialized", new ie(!1));
    a(this, "_lastRequestCounter", 0);
    a(this, "_pendingRequests", /* @__PURE__ */ new Map());
    this._protocol = e, this._protocol.send({
      type: 50
      /* REQUEST_INITIALIZATION */
    }), this._protocol.onMessage.pipe(v(this.dispose$)).subscribe((n) => this._onMessage(n));
  }
  dispose() {
    this._pendingRequests.clear();
  }
  getChannel(e) {
    const n = this;
    return {
      call(r, i) {
        return n._disposed ? Promise.reject() : n._remoteCall(e, r, i);
      },
      subscribe(r, i) {
        if (n._disposed)
          throw new Error("[ChannelClient]: client is disposed!");
        return n._remoteSubscribe(e, r, i);
      }
    };
  }
  _whenReady() {
    return ce(
      this._initialized.pipe(
        se((e) => e),
        re(1)
      )
    );
  }
  async _remoteCall(e, n, r) {
    await this._whenReady();
    const i = ++this._lastRequestCounter, h = { seq: i, type: 100, channelName: e, method: n, args: r }, o = this;
    return new Promise((w, l) => {
      const Q = {
        handle(E) {
          switch (E.type) {
            case 201:
              o._pendingRequests.delete(i), w(E.data);
              break;
            case 202:
              o._pendingRequests.delete(i), l(E.data);
              break;
            default:
              throw new Error("[ChannelClient]: unknown response type!");
          }
        }
      };
      this._pendingRequests.set(i, Q), this._sendRequest(h);
    });
  }
  _remoteSubscribe(e, n, r) {
    return new T((i) => {
      let c = -1;
      return this._whenReady().then(() => {
        c = ++this._lastRequestCounter;
        const o = { seq: c, type: 101, channelName: e, method: n, args: r }, w = {
          handle(l) {
            switch (l.type) {
              case 300:
                i.next(l.data);
                break;
              case 301:
                i.error(l.data);
                break;
              case 302:
                i.complete();
                break;
              default:
                throw new Error("[ChannelClient]: unknown response type!");
            }
          }
        };
        this._pendingRequests.set(c, w), this._sendRequest(o);
      }), () => {
        if (c === -1)
          return;
        const h = {
          type: 102,
          seq: c,
          channelName: e,
          method: n
        };
        this._sendRequest(h);
      };
    });
  }
  _sendRequest(e) {
    this._protocol.send(e);
  }
  _onMessage(e) {
    var n;
    switch (e.type) {
      case 0:
        this._initialized.next(!0);
        break;
      case 201:
      case 202:
      case 300:
      case 302:
      case 301:
        (n = this._pendingRequests.get(e.seq)) == null || n.handle(e);
        break;
    }
  }
}
class ue extends O {
  constructor(e) {
    super();
    a(this, "_channels", /* @__PURE__ */ new Map());
    a(this, "_subscriptions", /* @__PURE__ */ new Map());
    this._protocol = e, this._protocol.onMessage.pipe(v(this.dispose$)).subscribe((n) => this._onRequest(n)), this._sendInitialize();
  }
  dispose() {
    super.dispose(), this._subscriptions.clear(), this._channels.clear();
  }
  registerChannel(e, n) {
    this._channels.set(e, n);
  }
  _onRequest(e) {
    switch (e.type) {
      case 50:
        this._sendInitialize();
        break;
      case 100:
        this._onMethodCall(e);
        break;
      case 101:
        this._onSubscribe(e);
        break;
      case 102:
        this._onUnsubscribe(e);
        break;
    }
  }
  _sendInitialize() {
    this._sendResponse({
      seq: -1,
      type: 0
      /* INITIALIZE */
    });
  }
  _onMethodCall(e) {
    const { channelName: n, method: r, args: i } = e, c = this._channels.get(n);
    let h;
    try {
      if (!c)
        throw new Error(`[ChannelServer]: Channel ${n} not found!`);
      h = i ? c.call(r, i) : c.call(r);
    } catch (o) {
      h = Promise.reject(o);
    }
    h.then((o) => {
      this._sendResponse({ seq: e.seq, type: 201, data: o });
    }).catch((o) => {
      o instanceof Error ? this._sendResponse({ seq: e.seq, type: 202, data: o.message }) : this._sendResponse({ seq: e.seq, type: 202, data: String(o) });
    });
  }
  _onSubscribe(e) {
    const { channelName: n, seq: r } = e, i = this._channels.get(n);
    try {
      if (!i)
        throw new Error(`[ChannelServer]: Channel ${n} not found!`);
      const h = i.subscribe(e.method, e.args).subscribe({
        next: (o) => {
          this._sendResponse({ seq: r, type: 300, data: o });
        },
        error: (o) => {
          this._sendResponse({ seq: r, type: 301, data: o.message }), this._sendResponse({
            seq: r,
            type: 302
            /* SUBSCRIBE_COMPLETE */
          });
        },
        complete: () => {
          this._sendResponse({
            seq: r,
            type: 302
            /* SUBSCRIBE_COMPLETE */
          });
        }
      });
      this._subscriptions.set(e.seq, h);
    } catch (c) {
      c instanceof Error ? this._sendResponse({ seq: e.seq, type: 301, data: c.message }) : this._sendResponse({ seq: e.seq, type: 301, data: String(c) });
    }
  }
  _onUnsubscribe(e) {
    const n = this._subscriptions.get(e.seq);
    n && (n.unsubscribe(), this._subscriptions.delete(e.seq));
  }
  _sendResponse(e) {
    this._protocol.send(e);
  }
}
const I = k("IRPCChannelService");
class K {
  constructor(t) {
    a(this, "_client");
    a(this, "_server");
    this._client = new _e(t), this._server = new ue(t);
  }
  dispose() {
    this._client.dispose(), this._server.dispose();
  }
  requestChannel(t) {
    return this._client.getChannel(t);
  }
  registerChannel(t, e) {
    this._server.registerChannel(t, e);
  }
}
var de = Object.getOwnPropertyDescriptor, pe = (s, t, e, n) => {
  for (var r = n > 1 ? void 0 : n ? de(t, e) : t, i = s.length - 1, c; i >= 0; i--)
    (c = s[i]) && (r = c(r) || r);
  return r;
}, _ = (s, t) => (e, n) => t(e, n, s);
let y = class extends O {
  constructor(t, e, n, r, i) {
    super();
    a(this, "_remoteInstanceService");
    a(this, "_syncingUnits", /* @__PURE__ */ new Set());
    a(this, "_syncingMutations", /* @__PURE__ */ new Set());
    this._injector = t, this._commandService = e, this._univerInstanceService = n, this._rpcChannelService = r, this._remoteSyncService = i, this._initRPCChannels(), this._init();
  }
  registerSyncingMutations(t) {
    this._syncingMutations.add(t.id);
  }
  /**
   * Only spreadsheets would be synced to the web worker in normal situations. If you would like to
   * sync other types of documents, you should manually call this method with that document's id.
   */
  syncUnit(t) {
    return this._syncingUnits.add(t), te(() => this._syncingUnits.delete(t));
  }
  _initRPCChannels() {
    this._rpcChannelService.registerChannel(W, Y(this._remoteSyncService)), this._injector.add([
      g,
      { useFactory: () => B(this._rpcChannelService.requestChannel($)) }
    ]), this._remoteInstanceService = this._injector.get(g);
  }
  _init() {
    this._univerInstanceService.getTypeOfUnitAdded$(u.UNIVER_SHEET).pipe(v(this.dispose$)).subscribe((t) => {
      this._syncingUnits.add(t.getUnitId()), this._remoteInstanceService.createInstance({
        unitID: t.getUnitId(),
        type: u.UNIVER_SHEET,
        snapshot: t.getSnapshot()
      });
    }), this._univerInstanceService.getTypeOfUnitDisposed$(u.UNIVER_SHEET).pipe(v(this.dispose$)).subscribe((t) => {
      this._syncingUnits.delete(t.getUnitId()), this._remoteInstanceService.disposeInstance({
        unitID: t.getUnitId()
      });
    }), this.disposeWithMe(this._commandService.onCommandExecuted((t, e) => {
      const { type: n, params: r, id: i } = t, c = (r == null ? void 0 : r.unitId) || "";
      n === H.MUTATION && // only sync mutations to the worker thread
      (!c || this._syncingUnits.has(c)) && // do not sync mutations from the web worker back to the web worker
      !(e != null && e.fromSync) && // do not sync mutations those are not meant to be synced
      this._syncingMutations.has(i) && this._remoteInstanceService.syncMutation({ mutationInfo: t });
    }));
  }
};
y = pe([
  _(0, b(R)),
  _(1, C),
  _(2, L),
  _(3, I),
  _(4, m)
], y);
var ve = Object.getOwnPropertyDescriptor, me = (s, t, e, n) => {
  for (var r = n > 1 ? void 0 : n ? ve(t, e) : t, i = s.length - 1, c; i >= 0; i--)
    (c = s[i]) && (r = c(r) || r);
  return r;
}, d = (s, t) => (e, n) => t(e, n, s);
let f = class extends ne {
  constructor(t, e, n, r) {
    super();
    a(this, "_remoteSyncService");
    this._injector = t, this._remoteInstanceService = e, this._commandService = n, this._rpcChannelService = r, this._initRPCChannels(), this._init();
  }
  _initRPCChannels() {
    this._rpcChannelService.registerChannel($, Y(this._remoteInstanceService)), this._injector.add([
      m,
      { useFactory: () => B(this._rpcChannelService.requestChannel(W)) }
    ]), this._remoteSyncService = this._injector.get(m);
  }
  _init() {
    this.disposeWithMe(
      // Mutations executed on the main thread should be synced to the worker thread.
      this._commandService.onCommandExecuted((t, e) => {
        t.type === H.MUTATION && !(e != null && e.fromSync) && this._remoteSyncService.syncMutation({
          mutationInfo: t
        });
      })
    );
  }
};
f = me([
  d(0, b(R)),
  d(1, g),
  d(2, C),
  d(3, I)
], f);
const ge = "rpc.main-thread.config", j = {}, ye = "rpc.worker-thread.config", D = {};
function fe() {
  return {
    send(s) {
      postMessage(s);
    },
    onMessage: new T((s) => {
      const t = (e) => {
        s.next(e.data);
      };
      return addEventListener("message", t), () => removeEventListener("message", t);
    }).pipe(z(1))
  };
}
function Se(s) {
  return {
    send(t) {
      s.postMessage(t);
    },
    onMessage: new T((t) => {
      const e = (n) => {
        t.next(n.data);
      };
      return s.addEventListener("message", e), () => s.removeEventListener("message", e);
    }).pipe(z(1))
  };
}
var Ce = Object.getOwnPropertyDescriptor, J = (s, t, e, n) => {
  for (var r = n > 1 ? void 0 : n ? Ce(t, e) : t, i = s.length - 1, c; i >= 0; i--)
    (c = s[i]) && (r = c(r) || r);
  return r;
}, S = (s, t) => (e, n) => t(e, n, s), P;
let N = (P = class extends V {
  constructor(t = j, e, n) {
    super();
    a(this, "_internalWorker", null);
    this._config = t, this._injector = e, this._configService = n;
    const { ...r } = F(
      {},
      j,
      this._config
    );
    this._configService.setConfig(ge, r);
  }
  dispose() {
    super.dispose(), this._internalWorker && (this._internalWorker.terminate(), this._internalWorker = null);
  }
  onStarting() {
    const { workerURL: t } = this._config;
    if (!t)
      throw new Error("[UniverRPCMainThreadPlugin]: The workerURL is required for the RPC main thread plugin.");
    const e = t instanceof Worker ? t : new Worker(t);
    this._internalWorker = t instanceof Worker ? null : e;
    const n = Se(e);
    [
      [
        I,
        {
          useFactory: () => new K(n)
        }
      ],
      [y],
      [m, { useClass: M }]
    ].forEach((i) => this._injector.add(i)), this._injector.get(y);
  }
}, a(P, "pluginName", "UNIVER_RPC_MAIN_THREAD_PLUGIN"), P);
N = J([
  S(1, b(R)),
  S(2, A)
], N);
var U;
let x = (U = class extends V {
  constructor(s = D, t, e) {
    super(), this._config = s, this._injector = t, this._configService = e;
    const { ...n } = F(
      {},
      D,
      this._config
    );
    this._configService.setConfig(ye, n);
  }
  onStarting() {
    [
      [f],
      [
        I,
        {
          useFactory: () => new K(fe())
        }
      ],
      [g, { useClass: q }]
    ].forEach((s) => this._injector.add(s)), this._injector.get(f);
  }
}, a(U, "pluginName", "UNIVER_RPC_WORKER_THREAD_PLUGIN"), U);
x = J([
  S(1, b(R)),
  S(2, A)
], x);
export {
  _e as ChannelClient,
  ue as ChannelServer,
  K as ChannelService,
  y as DataSyncPrimaryController,
  f as DataSyncReplicaController,
  I as IRPCChannelService,
  g as IRemoteInstanceService,
  m as IRemoteSyncService,
  $ as RemoteInstanceServiceName,
  M as RemoteSyncPrimaryService,
  W as RemoteSyncServiceName,
  N as UniverRPCMainThreadPlugin,
  x as UniverRPCWorkerThreadPlugin,
  q as WebWorkerRemoteInstanceService,
  Y as fromModule,
  B as toModule
};
