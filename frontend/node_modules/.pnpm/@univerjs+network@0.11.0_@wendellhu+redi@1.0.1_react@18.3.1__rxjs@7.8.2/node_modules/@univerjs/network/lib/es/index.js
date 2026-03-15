var P = Object.defineProperty;
var S = (e, t, r) => t in e ? P(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var u = (e, t, r) => S(e, typeof t != "symbol" ? t + "" : t, r);
import { createIdentifier as J, Disposable as K, toDisposable as R, remove as z, ILogService as $, Inject as H, Injector as C, IConfigService as T, Plugin as ee, merge as re, Quantity as te, LookUp as ne, registerDependencies as se, mergeOverrideWithDependencies as oe, DisposableCollection as ie } from "@univerjs/core";
import { of as M, firstValueFrom as ce, Observable as m, catchError as ae, throwError as le } from "rxjs";
import { concatMap as B, retry as he, share as b } from "rxjs/operators";
const pe = "network.config", G = {}, O = "application/json";
function de(e) {
  return Array.isArray(e) ? e.some((t) => t.includes(O)) : e.includes(O);
}
class I {
  constructor(t) {
    u(this, "_headers", /* @__PURE__ */ new Map());
    typeof t == "string" ? this._handleHeadersString(t) : t instanceof Headers ? this._handleHeaders(t) : t && this._handleHeadersConstructorProps(t);
  }
  forEach(t) {
    this._headers.forEach((r, n) => t(n, r));
  }
  has(t) {
    return !!this._headers.has(t.toLowerCase());
  }
  get(t) {
    const r = t.toLowerCase();
    return this._headers.has(r) ? this._headers.get(r) : null;
  }
  set(t, r) {
    this._setHeader(t, r);
  }
  toHeadersInit(t) {
    var n, s;
    const r = {};
    return this._headers.forEach((o, i) => {
      r[i] = o.join(",");
    }), (n = r.accept) != null || (r.accept = "application/json, text/plain, */*"), t instanceof FormData || (s = r["content-type"]) != null || (r["content-type"] = "application/json;charset=UTF-8"), r;
  }
  _setHeader(t, r) {
    const n = t.toLowerCase();
    this._headers.has(n) ? this._headers.get(n).push(r.toString()) : this._headers.set(n, [r.toString()]);
  }
  _handleHeadersString(t) {
    t.split(`
`).forEach((r) => {
      const [n, s] = r.split(":");
      n && s && this._setHeader(n, s);
    });
  }
  _handleHeadersConstructorProps(t) {
    Object.entries(t).forEach(([r, n]) => this._setHeader(r, n));
  }
  _handleHeaders(t) {
    t.forEach((r, n) => this._setHeader(n, r));
  }
}
const Y = J("network.http-implementation");
class W {
  constructor(t) {
    this.params = t;
  }
  toString() {
    return this.params ? Object.keys(this.params).map((t) => {
      const r = this.params[t];
      return Array.isArray(r) ? r.map((n) => `${t}=${n}`).join("&") : `${t}=${r}`;
    }).join("&") : "";
  }
}
let ue = 0;
class X {
  constructor(t, r, n) {
    u(this, "uid", ue++);
    this.method = t, this.url = r, this.requestParams = n;
  }
  get headers() {
    return this.requestParams.headers;
  }
  get withCredentials() {
    return this.requestParams.withCredentials;
  }
  get responseType() {
    return this.requestParams.responseType;
  }
  getUrlWithParams() {
    var r, n;
    const t = (n = (r = this.requestParams) == null ? void 0 : r.params) == null ? void 0 : n.toString();
    return t ? `${this.url}${this.url.includes("?") ? "&" : "?"}${t}` : this.url;
  }
  getBody() {
    var n, s;
    const t = (n = this.headers.get("Content-Type")) != null ? n : O, r = (s = this.requestParams) == null ? void 0 : s.body;
    return r instanceof FormData ? r : de(t) && r && typeof r == "object" ? JSON.stringify(r) : r ? `${r}` : null;
  }
  getHeadersInit() {
    var r;
    return this.headers.toHeadersInit((r = this.requestParams) == null ? void 0 : r.body);
  }
}
var ge = Object.getOwnPropertyDescriptor, fe = (e, t, r, n) => {
  for (var s = n > 1 ? void 0 : n ? ge(t, r) : t, o = e.length - 1, i; o >= 0; o--)
    (i = e[o]) && (s = i(s) || s);
  return s;
}, ye = (e, t) => (r, n) => t(r, n, e);
let x = class extends K {
  constructor(t) {
    super();
    u(this, "_interceptors", []);
    // eslint-disable-next-line ts/no-explicit-any
    u(this, "_pipe");
    this._http = t;
  }
  /**
   * Register an HTTP interceptor.
   *
   * @param interceptor the http interceptor
   * @returns a disposable handler to remove the interceptor
   */
  registerHTTPInterceptor(t) {
    if (this._interceptors.indexOf(t) !== -1)
      throw new Error("[HTTPService]: The interceptor has already been registered!");
    return this._interceptors.push(t), this._interceptors = this._interceptors.sort((r, n) => {
      var s, o;
      return ((s = r.priority) != null ? s : 0) - ((o = n.priority) != null ? o : 0);
    }), this._pipe = null, R(() => z(this._interceptors, t));
  }
  get(t, r) {
    return this.request("GET", t, r);
  }
  post(t, r) {
    return this.request("POST", t, r);
  }
  put(t, r) {
    return this.request("PUT", t, r);
  }
  delete(t, r) {
    return this.request("DELETE", t, r);
  }
  patch(t, r) {
    return this.request("PATCH", t, r);
  }
  /**
   * The HTTP request implementations. Normally you should use the `get`, `post`, `put`, `delete`,
   * `patch` methods instead.
   * @param method HTTP request method, e.g. GET, POST, PUT, DELETE, etc.
   * @param url The URL to send the request to.
   * @param options Optional parameters for the request.
   * @returns A promise that resolves to the HTTP response.
   */
  async request(t, r, n) {
    var l, h;
    const s = new I(n == null ? void 0 : n.headers), o = new W(n == null ? void 0 : n.params), i = new X(t, r, {
      headers: s,
      params: o,
      withCredentials: (l = n == null ? void 0 : n.withCredentials) != null ? l : !1,
      // default value for withCredentials is false by MDN
      responseType: (h = n == null ? void 0 : n.responseType) != null ? h : "json",
      body: ["GET", "DELETE"].includes(t) || n == null ? void 0 : n.body
    }), c = M(i).pipe(
      B((a) => this._runInterceptorsAndImplementation(a))
    );
    return await ce(c);
  }
  /**
   * Send an HTTP request. It returns an observable that emits HTTP events. For example, it can be used to
   * send Server-Sent Events (SSE) requests.
   * @deprecated Please use `stream` method instead.
   * @param method HTTP request method, e.g. GET, POST, PUT, DELETE, etc.
   * @param url The URL to send the request to.
   * @param _params Optional parameters for the request.
   * @returns An observable of the HTTP event.
   */
  stream(t, r, n) {
    return this.getSSE(t, r, n);
  }
  /**
   * Send a Server-Sent Events (SSE) request. It returns an observable that emits HTTP events. It is the observable
   * pair of the `request` method.
   * @deprecated Please use `stream` method instead.
   * @param method HTTP request method, e.g. GET, POST, PUT, DELETE, etc.
   * @param url The URL to send the request to.
   * @param _params Optional parameters for the request.
   * @returns An observable of the HTTP event.
   */
  getSSE(t, r, n) {
    var c, d;
    const s = new I(n == null ? void 0 : n.headers), o = new W(n == null ? void 0 : n.params), i = new X(t, r, {
      headers: s,
      params: o,
      withCredentials: (c = n == null ? void 0 : n.withCredentials) != null ? c : !1,
      reportProgress: !0,
      responseType: (d = n == null ? void 0 : n.responseType) != null ? d : "json",
      body: ["GET", "DELETE"].includes(t) || n == null ? void 0 : n.body
    });
    return M(i).pipe(B((l) => this._runInterceptorsAndImplementation(l)));
  }
  // eslint-disable-next-line ts/no-explicit-any
  _runInterceptorsAndImplementation(t) {
    return this._pipe || (this._pipe = this._interceptors.map((r) => r.interceptor).reduceRight(
      (r, n) => we(r, n),
      (r, n) => n(r)
    )), this._pipe(
      t,
      (r) => this._http.send(r)
      /* final handler */
    );
  }
};
x = fe([
  ye(0, Y)
], x);
function we(e, t) {
  return (r, n) => t(r, (s) => e(s, n));
}
const me = 200, ve = 300;
var L = /* @__PURE__ */ ((e) => (e[e.Continue = 100] = "Continue", e[e.SwitchingProtocols = 101] = "SwitchingProtocols", e[e.Processing = 102] = "Processing", e[e.EarlyHints = 103] = "EarlyHints", e[e.Ok = 200] = "Ok", e[e.Created = 201] = "Created", e[e.Accepted = 202] = "Accepted", e[e.NonAuthoritativeInformation = 203] = "NonAuthoritativeInformation", e[e.NoContent = 204] = "NoContent", e[e.ResetContent = 205] = "ResetContent", e[e.PartialContent = 206] = "PartialContent", e[e.MultiStatus = 207] = "MultiStatus", e[e.AlreadyReported = 208] = "AlreadyReported", e[e.ImUsed = 226] = "ImUsed", e[e.MultipleChoices = 300] = "MultipleChoices", e[e.MovedPermanently = 301] = "MovedPermanently", e[e.Found = 302] = "Found", e[e.SeeOther = 303] = "SeeOther", e[e.NotModified = 304] = "NotModified", e[e.UseProxy = 305] = "UseProxy", e[e.Unused = 306] = "Unused", e[e.TemporaryRedirect = 307] = "TemporaryRedirect", e[e.PermanentRedirect = 308] = "PermanentRedirect", e[e.BadRequest = 400] = "BadRequest", e[e.Unauthorized = 401] = "Unauthorized", e[e.PaymentRequired = 402] = "PaymentRequired", e[e.Forbidden = 403] = "Forbidden", e[e.NotFound = 404] = "NotFound", e[e.MethodNotAllowed = 405] = "MethodNotAllowed", e[e.NotAcceptable = 406] = "NotAcceptable", e[e.ProxyAuthenticationRequired = 407] = "ProxyAuthenticationRequired", e[e.RequestTimeout = 408] = "RequestTimeout", e[e.Conflict = 409] = "Conflict", e[e.Gone = 410] = "Gone", e[e.LengthRequired = 411] = "LengthRequired", e[e.PreconditionFailed = 412] = "PreconditionFailed", e[e.PayloadTooLarge = 413] = "PayloadTooLarge", e[e.UriTooLong = 414] = "UriTooLong", e[e.UnsupportedMediaType = 415] = "UnsupportedMediaType", e[e.RangeNotSatisfiable = 416] = "RangeNotSatisfiable", e[e.ExpectationFailed = 417] = "ExpectationFailed", e[e.ImATeapot = 418] = "ImATeapot", e[e.MisdirectedRequest = 421] = "MisdirectedRequest", e[e.UnprocessableEntity = 422] = "UnprocessableEntity", e[e.Locked = 423] = "Locked", e[e.FailedDependency = 424] = "FailedDependency", e[e.TooEarly = 425] = "TooEarly", e[e.UpgradeRequired = 426] = "UpgradeRequired", e[e.PreconditionRequired = 428] = "PreconditionRequired", e[e.TooManyRequests = 429] = "TooManyRequests", e[e.RequestHeaderFieldsTooLarge = 431] = "RequestHeaderFieldsTooLarge", e[e.UnavailableForLegalReasons = 451] = "UnavailableForLegalReasons", e[e.InternalServerError = 500] = "InternalServerError", e[e.NotImplemented = 501] = "NotImplemented", e[e.BadGateway = 502] = "BadGateway", e[e.ServiceUnavailable = 503] = "ServiceUnavailable", e[e.GatewayTimeout = 504] = "GatewayTimeout", e[e.HttpVersionNotSupported = 505] = "HttpVersionNotSupported", e[e.VariantAlsoNegotiates = 506] = "VariantAlsoNegotiates", e[e.InsufficientStorage = 507] = "InsufficientStorage", e[e.LoopDetected = 508] = "LoopDetected", e[e.NotExtended = 510] = "NotExtended", e[e.NetworkAuthenticationRequired = 511] = "NetworkAuthenticationRequired", e))(L || {}), Q = /* @__PURE__ */ ((e) => (e[e.DownloadProgress = 0] = "DownloadProgress", e[e.Response = 1] = "Response", e))(Q || {});
class q {
  constructor({
    body: t,
    headers: r,
    status: n,
    statusText: s
  }) {
    u(this, "type", 1);
    u(this, "body");
    u(this, "headers");
    u(this, "status");
    u(this, "statusText");
    this.body = t, this.headers = r, this.status = n, this.statusText = s;
  }
}
class _e {
  constructor(t, r, n) {
    u(this, "type", 0);
    this.total = t, this.loaded = r, this.partialText = n;
  }
}
class Ee {
  constructor(t, r, n) {
    this.headers = t, this.status = r, this.statusText = n;
  }
}
class v {
  constructor({
    request: t,
    headers: r,
    status: n,
    statusText: s,
    error: o
  }) {
    u(this, "request");
    u(this, "headers");
    u(this, "status");
    u(this, "statusText");
    u(this, "error");
    this.request = t, this.headers = r, this.status = n, this.statusText = s, this.error = o;
  }
}
function Z(e) {
  return {
    method: e.method,
    headers: e.getHeadersInit(),
    body: e.getBody(),
    credentials: e.withCredentials ? "include" : void 0
  };
}
var Re = Object.getOwnPropertyDescriptor, Ie = (e, t, r, n) => {
  for (var s = n > 1 ? void 0 : n ? Re(t, r) : t, o = e.length - 1, i; o >= 0; o--)
    (i = e[o]) && (s = i(s) || s);
  return s;
}, be = (e, t) => (r, n) => t(r, n, e);
let N = class {
  constructor(e) {
    this._logService = e;
  }
  send(e) {
    return new m((t) => {
      const r = new AbortController();
      return this._send(e, t, r).catch((n) => {
        t.error(new v({
          error: n,
          request: e
        }));
      }), () => r.abort();
    });
  }
  async _send(e, t, r) {
    var l, h;
    let n;
    try {
      const a = Z(e), g = e.getUrlWithParams(), p = fetch(g, {
        signal: r.signal,
        ...a
      });
      this._logService.debug(`[FetchHTTPImplementation]: sending request to url ${g} with params ${a}`), n = await p;
    } catch (a) {
      const g = new v({
        request: e,
        error: a,
        status: (l = a.status) != null ? l : 0,
        statusText: (h = a.statusText) != null ? h : "Unknown Error",
        headers: a.headers
      });
      this._logService.error("[FetchHTTPImplementation]: network error", g), t.error(g);
      return;
    }
    const s = new I(n.headers), o = n.status, i = n.statusText;
    let c = null;
    if (n.body && (c = await this._readBody(e, n, t)), o >= L.Ok && o < L.MultipleChoices)
      t.next(new q({
        body: c,
        headers: s,
        status: o,
        statusText: i
      }));
    else {
      const a = new v({
        request: e,
        error: c,
        status: o,
        statusText: i,
        headers: s
      });
      this._logService.error("[FetchHTTPImplementation]: network error", a), t.error(a);
    }
    t.complete();
  }
  async _readBody(e, t, r) {
    var g, p;
    const n = [], s = t.body.getReader(), o = t.headers.get("content-length");
    let i = 0;
    const c = (g = e.requestParams) == null ? void 0 : g.reportProgress, d = e.responseType;
    let l, h;
    for (; ; ) {
      const { done: f, value: y } = await s.read();
      if (f) break;
      n.push(y), i += y.length, c && d === "text" && (l = (l != null ? l : "") + (h != null ? h : h = new TextDecoder()).decode(y, { stream: !0 }), r.next(new _e(
        o ? Number.parseInt(o, 10) : void 0,
        i,
        l
      )));
    }
    const a = xe(n, i);
    try {
      const f = (p = t.headers.get("content-type")) != null ? p : "";
      return Ne(e, a, f);
    } catch (f) {
      const y = new v({
        request: e,
        error: f,
        status: t.status,
        statusText: t.statusText,
        headers: new I(t.headers)
      });
      return this._logService.error("[FetchHTTPImplementation]: network error", y), r.error(y), null;
    }
  }
};
N = Ie([
  be(0, $)
], N);
function xe(e, t) {
  const r = new Uint8Array(t);
  let n = 0;
  for (const s of e)
    r.set(s, n), n += s.length;
  return r;
}
const Le = /^\)\]\}',?\n/;
function Ne(e, t, r) {
  switch (e.responseType) {
    case "json":
      const n = new TextDecoder().decode(t).replace(Le, "");
      return n === "" ? null : JSON.parse(n);
    case "text":
      return new TextDecoder().decode(t);
    case "blob":
      return new Blob([t.buffer], { type: r });
    case "arraybuffer":
      return t.buffer;
    default:
      throw new Error(`[FetchHTTPImplementation]: unknown response type: ${e.responseType}.`);
  }
}
var Ae = Object.getOwnPropertyDescriptor, Fe = (e, t, r, n) => {
  for (var s = n > 1 ? void 0 : n ? Ae(t, r) : t, o = e.length - 1, i; o >= 0; o--)
    (i = e[o]) && (s = i(s) || s);
  return s;
}, ke = (e, t) => (r, n) => t(r, n, e);
let D = class {
  constructor(e) {
    this._logService = e;
  }
  send(e) {
    return new m((t) => {
      const r = new XMLHttpRequest(), n = e.getUrlWithParams(), s = Z(e), { responseType: o } = e;
      r.open(e.method, n), e.withCredentials && (r.withCredentials = !0), s.headers && Object.entries(s.headers).forEach(([h, a]) => r.setRequestHeader(h, a));
      const i = () => {
        const h = r.statusText || "OK", a = new I(r.getAllResponseHeaders());
        return new Ee(a, r.status, h);
      }, c = () => {
        const { headers: h, statusText: a, status: g } = i();
        let p = null, f = null;
        g !== L.NoContent && (p = typeof r.response > "u" ? r.responseText : r.response);
        let y = g >= me && g < ve;
        if (o === "json" && typeof p == "string") {
          const w = p;
          try {
            p = p ? JSON.parse(p) : null;
          } catch (_) {
            y = !1, p = w, f = _;
          }
        }
        if (o === "blob" && !(p instanceof Blob) && (y = !1, f = new Error("Response is not a Blob object")), y)
          t.next(
            new q({
              body: p,
              headers: h,
              status: g,
              statusText: a
            })
          );
        else {
          const w = new v({
            request: e,
            error: f,
            headers: h,
            status: g,
            statusText: a
          });
          this._logService.error("[XHRHTTPImplementation]: network error", w), t.error(w);
        }
      }, d = (h) => {
        const a = new v({
          request: e,
          error: h,
          status: r.status || 0,
          statusText: r.statusText || "Unknown Error",
          headers: i().headers
        });
        this._logService.error("[XHRHTTPImplementation]: network error", a), t.error(a);
      };
      r.responseType = o || "", r.addEventListener("load", c), r.addEventListener("error", d), r.addEventListener("abort", d), r.addEventListener("timeout", d);
      const l = e.getBody();
      return r.send(l), this._logService.debug("[XHRHTTPImplementation]", `sending request to url ${n} with params ${s}`), () => {
        r.readyState !== r.DONE && r.abort(), r.removeEventListener("load", c), r.removeEventListener("error", d), r.removeEventListener("abort", d), r.removeEventListener("timeout", d);
      };
    });
  }
};
D = Fe([
  ke(0, $)
], D);
var Ue = Object.getOwnPropertyDescriptor, Oe = (e, t, r, n) => {
  for (var s = n > 1 ? void 0 : n ? Ue(t, r) : t, o = e.length - 1, i; o >= 0; o--)
    (i = e[o]) && (s = i(s) || s);
  return s;
}, k = (e, t) => (r, n) => t(r, n, e), U;
let V = (U = class extends ee {
  constructor(e = G, t, r, n) {
    super(), this._config = e, this._logger = t, this._injector = r, this._configService = n;
    const { ...s } = re(
      {},
      G,
      this._config
    );
    this._configService.setConfig(pe, s);
  }
  onStarting() {
    var r, n, s;
    if (this._injector.get(x, te.OPTIONAL, ne.SKIP_SELF) && !((r = this._config) != null && r.forceUseNewInstance)) {
      this._logger.warn(
        "[UniverNetworkPlugin]",
        'HTTPService is already registered in an ancestor interceptor. Skipping registration. If you want to force a new instance, set "forceUseNewInstance" to true in the plugin configuration.'
      );
      return;
    }
    const t = (n = this._config) != null && n.useFetchImpl ? N : typeof window < "u" ? D : N;
    se(this._injector, oe([
      [x],
      [Y, { useClass: t }]
    ], (s = this._config) == null ? void 0 : s.override));
  }
}, u(U, "pluginName", "UNIVER_NETWORK_PLUGIN"), U);
V = Oe([
  k(1, $),
  k(2, H(C)),
  k(3, T)
], V);
const Xe = (e) => {
  const { errorStatusCodes: t, onAuthError: r } = e;
  return (s, o) => o(s).pipe(
    ae((i) => (i instanceof v && t.some((c) => c === i.status) && r(), le(() => i)))
  );
}, De = (e = 300) => {
  let r = () => {
  };
  return (n) => new Promise((s) => {
    r();
    const o = setTimeout(() => {
      s(!0);
    }, e);
    r = () => {
      clearTimeout(o), s(!1);
    };
  });
}, $e = () => (e, t) => t.map((r) => ({ config: r, result: e })), Ve = (e, t = {}) => {
  const { isMatch: r, getParamsFromRequest: n, mergeParamsToRequest: s } = e, { fetchCheck: o = De(300), distributeResult: i = $e() } = t, c = [], d = (l) => l.map((h) => h.config);
  return (l, h) => r(l) ? new m((a) => {
    const g = n(l);
    c.push({
      next: (f) => a.next(f),
      error: (f) => a.error(f),
      config: g
    });
    const p = d(c);
    o(l).then((f) => {
      if (f) {
        const y = [];
        p.forEach((w) => {
          const _ = c.findIndex((E) => E.config === w);
          if (_ >= 0) {
            const [E] = c.splice(_, 1);
            y.push(E);
          }
        }), h(s(p, l)).subscribe({
          next: (w) => {
            if (w.type === Q.Response) {
              const _ = w.body, E = i(_, p);
              y.forEach((A) => {
                const j = E.find((F) => F.config === A.config);
                if (j) {
                  const F = new q({
                    body: j.result,
                    headers: w.headers,
                    status: w.status,
                    statusText: w.statusText
                  });
                  A.next(F);
                } else
                  A.error("batch error");
              });
            }
          },
          complete: () => a.complete(),
          error: (w) => a.error(w)
        });
      }
    });
  }) : h(l);
}, qe = 3, je = 1e3, Je = (e) => {
  var n, s;
  const t = (n = e == null ? void 0 : e.maxRetryAttempts) != null ? n : qe, r = (s = e == null ? void 0 : e.delayInterval) != null ? s : je;
  return (o, i) => i(o).pipe(he({ delay: r, count: t }));
}, Ke = (e) => {
  const t = [], r = /* @__PURE__ */ new Set(), n = () => {
    var s;
    for (; r.size < ((s = e == null ? void 0 : e.maxParallel) != null ? s : 1) && t.length > 0; ) {
      const o = t.shift();
      r.add(o), o();
    }
  };
  return (s, o) => new m((i) => {
    const c = () => o(s).subscribe({
      next: (l) => i.next(l),
      error: (l) => i.error(l),
      complete: () => i.complete()
    }), d = () => {
      r.delete(c), z(t, c), n();
    };
    return t.push(c), n(), d;
  });
}, ze = J("univer.network.socket.service");
class Ye extends K {
  createSocket(t) {
    try {
      const r = new WebSocket(t), n = new ie();
      return {
        URL: t,
        close: (o, i) => {
          r.close(o, i), n.dispose();
        },
        send: (o) => {
          r.send(o);
        },
        open$: new m((o) => {
          const i = (c) => o.next(c);
          r.addEventListener("open", i), n.add(R(() => r.removeEventListener("open", i)));
        }).pipe(b()),
        close$: new m((o) => {
          const i = (c) => o.next(c);
          r.addEventListener("close", i), n.add(R(() => r.removeEventListener("close", i)));
        }).pipe(b()),
        error$: new m((o) => {
          const i = (c) => o.next(c);
          r.addEventListener("error", i), n.add(R(() => r.removeEventListener("error", i)));
        }).pipe(b()),
        message$: new m((o) => {
          const i = (c) => o.next(c);
          r.addEventListener("message", i), n.add(R(() => r.removeEventListener("message", i)));
        }).pipe(b())
      };
    } catch (r) {
      return console.error(r), null;
    }
  }
}
export {
  Xe as AuthInterceptorFactory,
  N as FetchHTTPImplementation,
  Q as HTTPEventType,
  I as HTTPHeaders,
  _e as HTTPProgress,
  X as HTTPRequest,
  q as HTTPResponse,
  v as HTTPResponseError,
  x as HTTPService,
  L as HTTPStatusCode,
  Y as IHTTPImplementation,
  ze as ISocketService,
  Ve as MergeInterceptorFactory,
  Ee as ResponseHeader,
  Je as RetryInterceptorFactory,
  Ke as ThresholdInterceptorFactory,
  V as UniverNetworkPlugin,
  Ye as WebSocketService,
  D as XHRHTTPImplementation
};
