import { FBase as v, FUniver as p } from "@univerjs/core/facade";
import { HTTPService as S, WebSocketService as _ } from "@univerjs/network";
import { Inject as h, Injector as u } from "@univerjs/core";
var w = Object.getOwnPropertyDescriptor, l = (t, e, c, r) => {
  for (var i = r > 1 ? void 0 : r ? w(e, c) : e, s = t.length - 1, o; s >= 0; s--)
    (o = t[s]) && (i = o(i) || i);
  return i;
}, a = (t, e) => (c, r) => e(c, r, t);
let n = class extends v {
  constructor(t, e) {
    super(), this._injector = t, this._httpService = e;
  }
  /**
   * Send a GET request to the server.
   * @param {string} url - The requested URL.
   * @param {IRequestParams} [params] - Query parameters.
   * @returns {Promise<HTTPResponse>} Network response.
   */
  get(t, e) {
    return this._httpService.get(t, e);
  }
  /**
   * Send a POST request to the server.
   * @param {string} url - The requested URL.
   * @param {IPostRequestParams} [params] - Query parameters.
   * @returns {Promise<HTTPResponse>} Network response.
   */
  post(t, e) {
    return this._httpService.post(t, e);
  }
  /**
   * Send a PUT request to the server.
   * @param {string} url - The requested URL
   * @param {IPostRequestParams} [params] - Query parameters
   * @returns {Promise<HTTPResponse>} Network response
   */
  put(t, e) {
    return this._httpService.put(t, e);
  }
  /**
   * Send DELETE request to the server.
   * @param {string} url - The requested URL
   * @param {IRequestParams} [params] - Query parameters
   * @returns {Promise<HTTPResponse>} Network response
   */
  delete(t, e) {
    return this._httpService.delete(t, e);
  }
  /**
   * Send PATCH request to the server.
   * @param {string} url - The requested URL
   * @param {IPostRequestParams} [params] - Query parameters
   * @returns {Promise<HTTPResponse>} Network response
   */
  patch(t, e) {
    return this._httpService.patch(t, e);
  }
  /**
   * Request for a stream of server-sent events. Instead of a single response, the server sends a stream of responses,
   * Univer wraps the stream in an [`Observable`](https://rxjs.dev/guide/observable) which you can call `subscribe` on.
   * @param {HTTPRequestMethod} method - HTTP request method
   * @param {string} url - The requested URL
   * @param {IPostRequestParams} [params] - params Query parameters
   * @returns {Observable<HTTPEvent>} An observable that emits the network response.
   */
  getSSE(t, e, c) {
    return this._httpService.getSSE(t, e, c);
  }
};
n = l([
  a(0, h(u)),
  a(1, h(S))
], n);
class f extends p {
  getNetwork() {
    return this._injector.createInstance(n);
  }
  createSocket(e) {
    const r = this._injector.createInstance(_).createSocket(e);
    if (!r)
      throw new Error("[WebSocketService]: failed to create socket!");
    return r;
  }
}
p.extend(f);
