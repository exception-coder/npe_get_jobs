var W = Object.defineProperty;
var q = (i, e, t) => e in i ? W(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var d = (i, e, t) => q(i, typeof e != "symbol" ? e + "" : e, t);
import { Disposable as M, Inject as p, Injector as _, AbsoluteRefType as G, UniverInstanceType as R, LifecycleStages as f, DataValidationType as J, DataValidationErrorStyle as K, DataValidationRenderMode as Q, DataValidationOperator as X, DataValidationStatus as Y, CommandType as Z, BaselineOffset as k, BooleanNumber as ee, HorizontalAlign as te, TextDecoration as re, TextDirection as ie, VerticalAlign as ne, WrapStrategy as oe, BorderType as se, BorderStyleTypes as ce, AutoFillSeries as ae, ColorType as de, CommonHideTypes as le, CopyPasteType as pe, DeleteDirection as he, DeveloperMetadataVisibility as ue, Dimension as ge, Direction as ye, InterpolationPointType as ve, LocaleType as fe, MentionType as _e, ProtectionType as me, RelativeDate as Ee, SheetTypes as be, ThemeColorType as Se, LifecycleService as V, toDisposable as l, ICommandService as g, UndoCommand as h, IUndoRedoService as E, RedoCommand as u, Registry as Ce, UserManagerService as De, Rectangle as xe, numfmt as Te, Tools as we, IUniverInstanceService as F, Univer as Re, CanceledError as T, ThemeService as Oe, LocaleService as z, ColorBuilder as je, RichTextBuilder as Pe, RichTextValue as Be, ParagraphStyleBuilder as He, ParagraphStyleValue as Ue, TextStyleBuilder as Ie, TextStyleValue as Me, TextDecorationBuilder as Ve } from "@univerjs/core";
import { filter as b } from "rxjs";
class $ extends M {
  /**
   * @ignore
   */
  static extend(e) {
    Object.getOwnPropertyNames(e.prototype).forEach((t) => {
      t !== "constructor" && (this.prototype[t] = e.prototype[t]);
    }), Object.getOwnPropertyNames(e).forEach((t) => {
      t !== "prototype" && t !== "name" && t !== "length" && (this[t] = e[t]);
    });
  }
}
const S = Symbol("initializers"), A = Symbol("manualInit");
class $e extends M {
  constructor(e) {
    if (super(), this._injector = e, !!this.constructor[A]) return;
    const n = this, o = Object.getPrototypeOf(this)[S];
    o && o.forEach(function(s) {
      s.apply(n, [e]);
    });
  }
  /**
   * @ignore
   */
  _initialize(e, ...t) {
  }
  _runInitializers(...e) {
    const t = Object.getPrototypeOf(this)[S];
    t != null && t.length && t.forEach((r) => r.apply(this, e));
  }
  static _enableManualInit() {
    this[A] = !0;
  }
  /**
   * @ignore
   */
  static extend(e) {
    Object.getOwnPropertyNames(e.prototype).forEach((t) => {
      if (t === "_initialize") {
        let r = this.prototype[S];
        r || (r = [], this.prototype[S] = r), r.push(e.prototype._initialize);
      } else t !== "constructor" && (this.prototype[t] = e.prototype[t]);
    }), Object.getOwnPropertyNames(e).forEach((t) => {
      t !== "prototype" && t !== "name" && t !== "length" && (this[t] = e[t]);
    });
  }
}
var ze = Object.getOwnPropertyDescriptor, Ae = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? ze(e, t) : e, o = i.length - 1, s; o >= 0; o--)
    (s = i[o]) && (n = s(n) || n);
  return n;
}, Le = (i, e) => (t, r) => e(t, r, i);
let D = class extends $ {
  constructor(i, e) {
    super(), this._blob = i, this._injector = e;
  }
  /**
   * Returns a copy of this blob.
   * @returns a new blob by copying the current blob
   * @example
   * ```ts
   * const blob = univerAPI.newBlob();
   * const newBlob = blob.copyBlob();
   * console.log(newBlob);
   * ```
   */
  copyBlob() {
    return this._injector.createInstance(D, this._blob);
  }
  /**
   * Return the data inside this object as a blob converted to the specified content type.
   * @param contentType the content type refer to https://developer.mozilla.org/en-US/docs/Web/HTTP/MIME_types/Common_types
   * @returns a new blob by converting the current blob to the specified content type
   * @example
   * ```ts
   * const blob = univerAPI.newBlob();
   * const newBlob = blob.getAs('text/plain');
   * console.log(newBlob);
   * ```
   */
  getAs(i) {
    const e = this.copyBlob();
    return e.setContentType(i), e;
  }
  getDataAsString(i) {
    return this._blob === null ? Promise.resolve("") : i === void 0 ? this._blob.text() : new Promise((e, t) => {
      this._blob.arrayBuffer().then((r) => {
        const n = new TextDecoder(i).decode(r);
        e(n);
      }).catch((r) => {
        t(new Error(`Failed to read Blob as ArrayBuffer: ${r.message}`));
      });
    });
  }
  /**
   * Gets the data stored in this blob.
   * @returns the blob content as a byte array
   * @example
   * ```ts
   * const blob = univerAPI.newBlob();
   * const bytes = await blob.getBytes();
   * console.log(bytes);
   * ```
   */
  getBytes() {
    return this._blob ? this._blob.arrayBuffer().then((i) => new Uint8Array(i)) : Promise.reject(new Error("Blob is undefined or null."));
  }
  /**
   * Sets the data stored in this blob.
   * @param bytes a byte array
   * @returns the blob object
   * @example
   * ```ts
   * const blob = univerAPI.newBlob();
   * const bytes = new Uint8Array(10);
   * blob.setBytes(bytes);
   * ```
   */
  setBytes(i) {
    return this._blob = new Blob([i.buffer]), this;
  }
  setDataFromString(i, e) {
    const t = e != null ? e : "text/plain", r = new Blob([i], { type: t });
    return this._blob = r, this;
  }
  /**
   * Gets the content type of the data stored in this blob.
   * @returns the content type
   * @example
   * ```ts
   * const blob = univerAPI.newBlob();
   * const contentType = blob.getContentType();
   * console.log(contentType);
   * ```
   */
  getContentType() {
    var i;
    return (i = this._blob) == null ? void 0 : i.type;
  }
  /**
   * Sets the content type of the data stored in this blob.
   * @param contentType the content type refer to https://developer.mozilla.org/en-US/docs/Web/HTTP/MIME_types/Common_types
   * @returns the blob object
   * @example
   * ```ts
   * const blob = univerAPI.newBlob();
   * blob.setContentType('text/plain');
   * ```
   */
  setContentType(i) {
    var e;
    return this._blob = (e = this._blob) == null ? void 0 : e.slice(0, this._blob.size, i), this;
  }
};
D = Ae([
  Le(1, p(_))
], D);
const y = class y {
  static get() {
    if (this._instance)
      return this._instance;
    const e = new y();
    return this._instance = e, e;
  }
  /**
   * @ignore
   */
  static extend(e) {
    Object.getOwnPropertyNames(e.prototype).forEach((t) => {
      t !== "constructor" && (this.prototype[t] = e.prototype[t]);
    }), Object.getOwnPropertyNames(e).forEach((t) => {
      t !== "prototype" && t !== "name" && t !== "length" && (this[t] = e[t]);
    });
  }
  constructor() {
    for (const e in y.prototype)
      this[e] = y.prototype[e];
  }
  /**
   * Defines different types of absolute references
   *
   * @example
   * ```ts
   * console.log(univerAPI.Enum.AbsoluteRefType);
   * ```
   */
  get AbsoluteRefType() {
    return G;
  }
  /**
   * Defines different types of Univer instances
   *
   * @example
   * ```ts
   * console.log(univerAPI.Enum.UniverInstanceType.UNIVER_SHEET);
   * ```
   */
  get UniverInstanceType() {
    return R;
  }
  /**
   * Represents different stages in the lifecycle
   *
   * @example
   * ```ts
   * console.log(univerAPI.Enum.LifecycleStages.Rendered);
   * ```
   */
  get LifecycleStages() {
    return f;
  }
  /**
   * Different types of data validation
   *
   * @example
   * ```ts
   * console.log(univerAPI.Enum.DataValidationType.LIST);
   * ```
   */
  get DataValidationType() {
    return J;
  }
  /**
   * Different error display styles
   *
   * @example
   * ```ts
   * console.log(univerAPI.Enum.DataValidationErrorStyle.WARNING);
   * ```
   */
  get DataValidationErrorStyle() {
    return K;
  }
  /**
   * Different validation rendering modes
   *
   * @example
   * ```ts
   * console.log(univerAPI.Enum.DataValidationRenderMode.TEXT);
   * ```
   */
  get DataValidationRenderMode() {
    return Q;
  }
  /**
   * Different validation operators
   *
   * @example
   * ```ts
   * console.log(univerAPI.Enum.DataValidationOperator.BETWEEN);
   * ```
   */
  get DataValidationOperator() {
    return X;
  }
  /**
   * Different validation states
   *
   * @example
   * ```ts
   * console.log(univerAPI.Enum.DataValidationStatus.VALID);
   * ```
   */
  get DataValidationStatus() {
    return Y;
  }
  /**
   * Different types of commands
   *
   * @example
   * ```ts
   * console.log(univerAPI.Enum.CommandType.COMMAND);
   * ```
   */
  get CommandType() {
    return Z;
  }
  /**
   * Different baseline offsets for text baseline positioning
   *
   * @example
   * ```ts
   * console.log(univerAPI.Enum.BaselineOffset.SUPERSCRIPT);
   * ```
   */
  get BaselineOffset() {
    return k;
  }
  /**
   * Boolean number representations
   *
   * @example
   * ```ts
   * console.log(univerAPI.Enum.BooleanNumber.TRUE);
   * ```
   */
  get BooleanNumber() {
    return ee;
  }
  /**
   * Different horizontal text alignment options
   *
   * @example
   * ```ts
   * console.log(univerAPI.Enum.HorizontalAlign.CENTER);
   * ```
   */
  get HorizontalAlign() {
    return te;
  }
  /**
   * Different text decoration styles
   *
   * @example
   * ```ts
   * console.log(univerAPI.Enum.TextDecoration.DOUBLE);
   * ```
   */
  get TextDecoration() {
    return re;
  }
  /**
   * Different text direction options
   *
   * @example
   * ```ts
   * console.log(univerAPI.Enum.TextDirection.LEFT_TO_RIGHT);
   * ```
   */
  get TextDirection() {
    return ie;
  }
  /**
   * Different vertical text alignment options
   *
   * @example
   * ```ts
   * console.log(univerAPI.Enum.VerticalAlign.MIDDLE);
   * ```
   */
  get VerticalAlign() {
    return ne;
  }
  /**
   * Different wrap strategy options
   *
   * @example
   * ```ts
   * console.log(univerAPI.Enum.WrapStrategy.WRAP);
   * ```
   */
  get WrapStrategy() {
    return oe;
  }
  /**
   * Different border types
   *
   * @example
   * ```ts
   * console.log(univerAPI.Enum.BorderType.OUTSIDE);
   * ```
   */
  get BorderType() {
    return se;
  }
  /**
   * Different border style types
   *
   * @example
   * ```ts
   * console.log(univerAPI.Enum.BorderStyleTypes.NONE);
   * ```
   */
  get BorderStyleTypes() {
    return ce;
  }
  /**
   * Auto fill series types
   *
   * @example
   * ```ts
   * console.log(univerAPI.Enum.AutoFillSeries.ALTERNATE_SERIES);
   * ```
   */
  get AutoFillSeries() {
    return ae;
  }
  /**
   * Color types
   *
   * @example
   * ```ts
   * console.log(univerAPI.Enum.ColorType.RGB);
   * ```
   */
  get ColorType() {
    return de;
  }
  /**
   * Common hide types
   *
   * @example
   * ```ts
   * console.log(univerAPI.Enum.CommonHideTypes.ON);
   * ```
   */
  get CommonHideTypes() {
    return le;
  }
  /**
   * Copy paste types
   *
   * @example
   * ```ts
   * console.log(univerAPI.Enum.CopyPasteType.PASTE_VALUES);
   * ```
   */
  get CopyPasteType() {
    return pe;
  }
  /**
   * Delete direction types
   *
   * @example
   * ```ts
   * console.log(univerAPI.Enum.DeleteDirection.LEFT);
   * ```
   */
  get DeleteDirection() {
    return he;
  }
  /**
   * Developer metadata visibility types
   *
   * @example
   * ```ts
   * console.log(univerAPI.Enum.DeveloperMetadataVisibility.DOCUMENT);
   * ```
   */
  get DeveloperMetadataVisibility() {
    return ue;
  }
  /**
   * Dimension types
   *
   * @example
   * ```ts
   * console.log(univerAPI.Enum.Dimension.ROWS);
   * ```
   */
  get Dimension() {
    return ge;
  }
  /**
   * Direction types
   *
   * @example
   * ```ts
   * console.log(univerAPI.Enum.Direction.UP);
   * ```
   */
  get Direction() {
    return ye;
  }
  /**
   * Interpolation point types
   *
   * @example
   * ```ts
   * console.log(univerAPI.Enum.InterpolationPointType.NUMBER);
   * ```
   */
  get InterpolationPointType() {
    return ve;
  }
  /**
   * Locale types
   *
   * @example
   * ```ts
   * console.log(univerAPI.Enum.LocaleType.EN_US);
   * ```
   */
  get LocaleType() {
    return fe;
  }
  /**
   * Mention types
   *
   * @example
   * ```ts
   * console.log(univerAPI.Enum.MentionType.PERSON);
   * ```
   */
  get MentionType() {
    return _e;
  }
  /**
   * Protection types
   *
   * @example
   * ```ts
   * console.log(univerAPI.Enum.ProtectionType.RANGE);
   * ```
   */
  get ProtectionType() {
    return me;
  }
  /**
   * Relative date types
   *
   * @example
   * ```ts
   * console.log(univerAPI.Enum.RelativeDate.TODAY);
   * ```
   */
  get RelativeDate() {
    return Ee;
  }
  /**
   * Sheet types
   *
   * @example
   * ```ts
   * console.log(univerAPI.Enum.SheetTypes.GRID);
   * ```
   */
  get SheetTypes() {
    return be;
  }
  /**
   * Theme color types
   *
   * @example
   * ```ts
   * console.log(univerAPI.Enum.ThemeColorType.ACCENT1);
   * ```
   */
  get ThemeColorType() {
    return Se;
  }
};
/**
 * @ignore
 */
d(y, "_instance");
let O = y;
const v = class v {
  static get() {
    if (this._instance)
      return this._instance;
    const e = new v();
    return this._instance = e, e;
  }
  /**
   * @ignore
   */
  static extend(e) {
    Object.getOwnPropertyNames(e.prototype).forEach((t) => {
      t !== "constructor" && (this.prototype[t] = e.prototype[t]);
    }), Object.getOwnPropertyNames(e).forEach((t) => {
      t !== "prototype" && t !== "name" && t !== "length" && (this[t] = e[t]);
    });
  }
  constructor() {
    for (const e in v.prototype)
      this[e] = v.prototype[e];
  }
  /**
   * Event fired when a document is created
   * @see {@link IDocCreatedParam}
   * @example
   * ```ts
   * const disposable = univerAPI.addEvent(univerAPI.Event.DocCreated, (params) => {
   *   const { unitId, type, doc, unit } = params;
   *   console.log('doc created', params);
   * });
   *
   * // Remove the event listener, use `disposable.dispose()`
   * ```
   */
  get DocCreated() {
    return "DocCreated";
  }
  /**
   * Event fired when a document is disposed
   * @see {@link IDocDisposedEvent}
   * @example
   * ```ts
   * const disposable = univerAPI.addEvent(univerAPI.Event.DocDisposed, (params) => {
   *   const { unitId, unitType, snapshot } = params;
   *   console.log('doc disposed', params);
   * });
   *
   * // Remove the event listener, use `disposable.dispose()`
   * ```
   */
  get DocDisposed() {
    return "DocDisposed";
  }
  /**
   * Event fired when life cycle is changed
   * @see {@link ILifeCycleChangedEvent}
   * @example
   * ```ts
   * const disposable = univerAPI.addEvent(univerAPI.Event.LifeCycleChanged, (params) => {
   *   const { stage } = params;
   *   console.log('life cycle changed', params);
   * });
   *
   * // Remove the event listener, use `disposable.dispose()`
   * ```
   */
  get LifeCycleChanged() {
    return "LifeCycleChanged";
  }
  /**
   * Event fired when a redo command is executed
   * @see {@link ICommandEvent}
   * @example
   * ```ts
   * const disposable = univerAPI.addEvent(univerAPI.Event.Redo, (event) => {
   *   const { params, id, type } = event;
   *   console.log('redo command executed', event);
   * });
   *
   * // Remove the event listener, use `disposable.dispose()`
   * ```
   */
  get Redo() {
    return "Redo";
  }
  /**
   * Event fired when an undo command is executed
   * @see {@link ICommandEvent}
   * @example
   * ```ts
   * const disposable = univerAPI.addEvent(univerAPI.Event.Undo, (event) => {
   *   const { params, id, type } = event;
   *   console.log('undo command executed', event);
   * });
   *
   * // Remove the event listener, use `disposable.dispose()`
   * ```
   */
  get Undo() {
    return "Undo";
  }
  /**
   * Event fired before a redo command is executed
   * @see {@link ICommandEvent}
   * @example
   * ```ts
   * const disposable = univerAPI.addEvent(univerAPI.Event.BeforeRedo, (event) => {
   *   const { params, id, type } = event;
   *   console.log('before redo command executed', event);
   *
   *   // Cancel the redo operation
   *   event.cancel = true;
   * });
   *
   * // Remove the event listener, use `disposable.dispose()`
   * ```
   */
  get BeforeRedo() {
    return "BeforeRedo";
  }
  /**
   * Event fired before an undo command is executed
   * @see {@link ICommandEvent}
   * @example
   * ```ts
   * const disposable = univerAPI.addEvent(univerAPI.Event.BeforeUndo, (event) => {
   *   const { params, id, type } = event;
   *   console.log('before undo command executed', event);
   *
   *   // Cancel the undo operation
   *   event.cancel = true;
   * });
   *
   * // Remove the event listener, use `disposable.dispose()`
   * ```
   */
  get BeforeUndo() {
    return "BeforeUndo";
  }
  /**
   * Event fired when a command is executed
   * @see {@link ICommandEvent}
   * @example
   * ```ts
   * const disposable = univerAPI.addEvent(univerAPI.Event.CommandExecuted, (event) => {
   *   const { params, id, type, options } = event;
   *   console.log('command executed', event);
   * });
   *
   * // Remove the event listener, use `disposable.dispose()`
   * ```
   */
  get CommandExecuted() {
    return "CommandExecuted";
  }
  /**
   * Event fired before a command is executed
   * @see {@link ICommandEvent}
   * @example
   * ```ts
   * const disposable = univerAPI.addEvent(univerAPI.Event.BeforeCommandExecute, (event) => {
   *   const { params, id, type, options } = event;
   *   console.log('before command executed', event);
   *
   *   // Cancel the command execution
   *   event.cancel = true;
   * });
   *
   * // Remove the event listener, use `disposable.dispose()`
   * ```
   */
  get BeforeCommandExecute() {
    return "BeforeCommandExecute";
  }
};
/**
 * @ignore
 */
d(v, "_instance");
let j = v;
var Ne = Object.getOwnPropertyDescriptor, Fe = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Ne(e, t) : e, o = i.length - 1, s; o >= 0; o--)
    (s = i[o]) && (n = s(n) || n);
  return n;
}, L = (i, e) => (t, r) => e(t, r, i);
let P = class extends $ {
  constructor(i, e) {
    super(), this._injector = i, this._lifecycleService = e;
  }
  /**
   * @param callback
   * @deprecated use `univerAPI.addEvent(univerAPI.Event.LifeCycleChanged, ({ stage }) => {})` as instead
   */
  onStarting(i) {
    return l(this._lifecycleService.lifecycle$.pipe(b((e) => e === f.Starting)).subscribe(i));
  }
  /**
   * @param callback
   * @deprecated use `univerAPI.addEvent(univerAPI.Event.LifeCycleChanged, ({ stage }) => {})` as instead
   */
  onReady(i) {
    return l(this._lifecycleService.lifecycle$.pipe(b((e) => e === f.Ready)).subscribe(i));
  }
  /**
   * @param callback
   * @deprecated use `univerAPI.addEvent(univerAPI.Event.LifeCycleChanged, ({ stage }) => {})` as instead
   */
  onRendered(i) {
    return l(this._lifecycleService.lifecycle$.pipe(b((e) => e === f.Rendered)).subscribe(i));
  }
  /**
   * @param callback
   * @deprecated use `univerAPI.addEvent(univerAPI.Event.LifeCycleChanged, ({ stage }) => {})` as instead
   */
  onSteady(i) {
    return l(this._lifecycleService.lifecycle$.pipe(b((e) => e === f.Steady)).subscribe(i));
  }
  /**
   * @param callback
   * @deprecated use `univerAPI.addEvent(univerAPI.Event.BeforeUndo, (event) => {})` as instead
   */
  onBeforeUndo(i) {
    return this._injector.get(g).beforeCommandExecuted((t) => {
      if (t.id === h.id) {
        const n = this._injector.get(E).pitchTopUndoElement();
        n && i(n);
      }
    });
  }
  /**
   * @param callback
   * @deprecated use `univerAPI.addEvent(univerAPI.Event.Undo, (event) => {})` as instead
   */
  onUndo(i) {
    return this._injector.get(g).onCommandExecuted((t) => {
      if (t.id === h.id) {
        const n = this._injector.get(E).pitchTopUndoElement();
        n && i(n);
      }
    });
  }
  /**
   * @param callback
   * @deprecated use `univerAPI.addEvent(univerAPI.Event.BeforeRedo, (event) => {})` as instead
   */
  onBeforeRedo(i) {
    return this._injector.get(g).beforeCommandExecuted((t) => {
      if (t.id === u.id) {
        const n = this._injector.get(E).pitchTopRedoElement();
        n && i(n);
      }
    });
  }
  /**
   * @param callback
   * @deprecated use `univerAPI.addEvent(univerAPI.Event.Redo, (event) => {})` as instead
   */
  onRedo(i) {
    return this._injector.get(g).onCommandExecuted((t) => {
      if (t.id === u.id) {
        const n = this._injector.get(E).pitchTopRedoElement();
        n && i(n);
      }
    });
  }
};
P = Fe([
  L(0, p(_)),
  L(1, p(V))
], P);
var We = Object.getOwnPropertyDescriptor, qe = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? We(e, t) : e, o = i.length - 1, s; o >= 0; o--)
    (s = i[o]) && (n = s(n) || n);
  return n;
}, Ge = (i, e) => (t, r) => e(t, r, i);
let B = class extends $e {
  constructor(i, e) {
    super(e), this.doc = i;
  }
};
B = qe([
  Ge(1, p(_))
], B);
class Je {
  constructor() {
    d(this, "_eventRegistry", /* @__PURE__ */ new Map());
    d(this, "_eventHandlerMap", /* @__PURE__ */ new Map());
    d(this, "_eventHandlerRegisted", /* @__PURE__ */ new Map());
  }
  _ensureEventRegistry(e) {
    return this._eventRegistry.has(e) || this._eventRegistry.set(e, new Ce()), this._eventRegistry.get(e);
  }
  dispose() {
    this._eventRegistry.clear(), this._eventHandlerMap.clear(), this._eventHandlerRegisted.forEach((e) => {
      e.forEach((t) => t.dispose()), e.clear();
    }), this._eventHandlerRegisted.clear();
  }
  registerEventHandler(e, t) {
    const r = this._eventHandlerMap.get(e);
    return r ? r.add(t) : this._eventHandlerMap.set(e, /* @__PURE__ */ new Set([t])), this._ensureEventRegistry(e).getData().length && this._initEventHandler(e), l(() => {
      var n, o, s, c;
      (n = this._eventHandlerMap.get(e)) == null || n.delete(t), (s = (o = this._eventHandlerRegisted.get(e)) == null ? void 0 : o.get(t)) == null || s.dispose(), (c = this._eventHandlerRegisted.get(e)) == null || c.delete(t);
    });
  }
  removeEvent(e, t) {
    const r = this._ensureEventRegistry(e);
    if (r.delete(t), r.getData().length === 0) {
      const n = this._eventHandlerRegisted.get(e);
      n == null || n.forEach((o) => o.dispose()), this._eventHandlerRegisted.delete(e);
    }
  }
  _initEventHandler(e) {
    let t = this._eventHandlerRegisted.get(e);
    const r = this._eventHandlerMap.get(e);
    r && (t || (t = /* @__PURE__ */ new Map(), this._eventHandlerRegisted.set(e, t), r == null || r.forEach((n) => {
      t == null || t.set(n, l(n()));
    })));
  }
  /**
   * Add an event listener
   * @param {string} event key of event
   * @param {(params: IEventParamConfig[typeof event]) => void} callback callback when event triggered
   * @returns {Disposable} The Disposable instance, for remove the listener
   * @example
   * ```ts
   * univerAPI.addEvent(univerAPI.Event.LifeCycleChanged, (params) => {
   *   const { stage } = params;
   *   console.log('life cycle changed', params);
   * });
   * ```
   */
  addEvent(e, t) {
    return this._ensureEventRegistry(e).add(t), this._initEventHandler(e), l(() => this.removeEvent(e, t));
  }
  /**
   * Fire an event, used in internal only.
   * @param {string} event key of event
   * @param {any} params params of event
   * @returns {boolean} should cancel
   * @example
   * ```ts
   * this.fireEvent(univerAPI.Event.LifeCycleChanged, params);
   * ```
   */
  fireEvent(e, t) {
    var r;
    return (r = this._eventRegistry.get(e)) == null || r.getData().forEach((n) => {
      n(t);
    }), t.cancel;
  }
}
var Ke = Object.getOwnPropertyDescriptor, Qe = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Ke(e, t) : e, o = i.length - 1, s; o >= 0; o--)
    (s = i[o]) && (n = s(n) || n);
  return n;
}, N = (i, e) => (t, r) => e(t, r, i);
let H = class extends $ {
  constructor(i, e) {
    super(), this._injector = i, this._userManagerService = e;
  }
  /**
   * Get current user info.
   * @returns {IUser} Current user info.
   * @example
   * ```typescript
   * univerAPI.getUserManager().getCurrentUser();
   * ```
   */
  getCurrentUser() {
    return this._userManagerService.getCurrentUser();
  }
};
H = Qe([
  N(0, p(_)),
  N(1, p(De))
], H);
const x = class x {
  static get() {
    if (this._instance)
      return this._instance;
    const e = new x();
    return this._instance = e, e;
  }
  /**
   * @ignore
   */
  static extend(e) {
    Object.getOwnPropertyNames(e.prototype).forEach((t) => {
      t !== "constructor" && (this.prototype[t] = e.prototype[t]);
    }), Object.getOwnPropertyNames(e).forEach((t) => {
      t !== "prototype" && t !== "name" && t !== "length" && (this[t] = e[t]);
    });
  }
  /**
   * Rectangle utils, including range operations likes merge, subtract, split
   *
   * @example
   * ```ts
   * const ranges = [
   *   { startRow: 0, startColumn: 0, endRow: 1, endColumn: 1 },
   *   { startRow: 1, startColumn: 1, endRow: 2, endColumn: 2 }
   * ];
   * const merged = univerAPI.Util.rectangle.mergeRanges(ranges);
   * console.log(merged);
   * ```
   */
  get rectangle() {
    return xe;
  }
  /**
   * Number format utils, including parse and strigify about date, price, etc
   *
   * @example
   * ```ts
   * const text = univerAPI.Util.numfmt.format('#,##0.00', 1234.567);
   * console.log(text);
   * ```
   */
  get numfmt() {
    return Te;
  }
  /**
   * common tools
   *
   * @example
   * ```ts
   * const key = univerAPI.Util.tools.generateRandomId(6);
   * console.log(key);
   * ```
   */
  get tools() {
    return we;
  }
};
/**
 * @ignore
 */
d(x, "_instance");
let U = x;
var Xe = Object.getOwnPropertyDescriptor, Ye = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Xe(e, t) : e, o = i.length - 1, s; o >= 0; o--)
    (s = i[o]) && (n = s(n) || n);
  return n;
}, C = (i, e) => (t, r) => e(t, r, i);
const w = Symbol("initializers");
let I = class extends M {
  constructor(e, t, r, n) {
    super();
    d(this, "_eventRegistry", new Je());
    d(this, "registerEventHandler", (e, t) => this._eventRegistry.registerEventHandler(e, t));
    this._injector = e, this._commandService = t, this._univerInstanceService = r, this._lifecycleService = n, this.registerEventHandler(
      this.Event.LifeCycleChanged,
      () => l(
        this._lifecycleService.lifecycle$.subscribe((s) => {
          this.fireEvent(this.Event.LifeCycleChanged, { stage: s });
        })
      )
    ), this._initUnitEvent(this._injector), this._initBeforeCommandEvent(this._injector), this._initCommandEvent(this._injector), this._injector.onDispose(() => {
      this.dispose();
    });
    const o = Object.getPrototypeOf(this)[w];
    if (o) {
      const s = this;
      o.forEach(function(c) {
        c.apply(s, [e]);
      });
    }
  }
  /**
   * Create an FUniver instance, if the injector is not provided, it will create a new Univer instance.
   * @static
   * @param {Univer | Injector} wrapped - The Univer instance or injector instance.
   * @returns {FUniver} - The FUniver instance.
   *
   * @example
   * ```ts
   * const univerAPI = FUniver.newAPI(univer);
   * ```
   */
  static newAPI(e) {
    return (e instanceof Re ? e.__getInjector() : e).createInstance(I);
  }
  /**
   * @ignore
   */
  _initialize(e) {
  }
  /**
   * @ignore
   */
  static extend(e) {
    Object.getOwnPropertyNames(e.prototype).forEach((t) => {
      if (t === "_initialize") {
        let r = this.prototype[w];
        r || (r = [], this.prototype[w] = r), r.push(e.prototype._initialize);
      } else t !== "constructor" && (this.prototype[t] = e.prototype[t]);
    }), Object.getOwnPropertyNames(e).forEach((t) => {
      t !== "prototype" && t !== "name" && t !== "length" && (this[t] = e[t]);
    });
  }
  _initCommandEvent(e) {
    const t = e.get(g);
    this.registerEventHandler(
      this.Event.Redo,
      () => t.onCommandExecuted((r) => {
        const { id: n, type: o, params: s } = r;
        if (r.id === u.id) {
          const a = { id: n, type: o, params: s };
          this.fireEvent(this.Event.Redo, a);
        }
      })
    ), this.registerEventHandler(
      this.Event.Undo,
      () => t.onCommandExecuted((r) => {
        const { id: n, type: o, params: s } = r;
        if (r.id === h.id) {
          const a = { id: n, type: o, params: s };
          this.fireEvent(this.Event.Undo, a);
        }
      })
    ), this.registerEventHandler(
      this.Event.CommandExecuted,
      () => t.onCommandExecuted((r, n) => {
        const { id: o, type: s, params: c } = r;
        if (r.id !== u.id && r.id !== h.id) {
          const m = { id: o, type: s, params: c, options: n };
          this.fireEvent(this.Event.CommandExecuted, m);
        }
      })
    );
  }
  _initBeforeCommandEvent(e) {
    const t = e.get(g);
    this.registerEventHandler(
      this.Event.BeforeRedo,
      () => t.beforeCommandExecuted((r) => {
        const { id: n, type: o, params: s } = r;
        if (r.id === u.id) {
          const a = { id: n, type: o, params: s };
          if (this.fireEvent(this.Event.BeforeRedo, a), a.cancel)
            throw new T();
        }
      })
    ), this.registerEventHandler(
      this.Event.BeforeUndo,
      () => t.beforeCommandExecuted((r) => {
        const { id: n, type: o, params: s } = r;
        if (r.id === h.id) {
          const a = { id: n, type: o, params: s };
          if (this.fireEvent(this.Event.BeforeUndo, a), a.cancel)
            throw new T();
        }
      })
    ), this.registerEventHandler(
      this.Event.BeforeCommandExecute,
      () => t.beforeCommandExecuted((r, n) => {
        const { id: o, type: s, params: c } = r;
        if (r.id !== u.id && r.id !== h.id) {
          const m = { id: o, type: s, params: c, options: n };
          if (this.fireEvent(this.Event.BeforeCommandExecute, m), m.cancel)
            throw new T();
        }
      })
    );
  }
  _initUnitEvent(e) {
    const t = e.get(F);
    this.registerEventHandler(
      this.Event.DocDisposed,
      () => t.unitDisposed$.subscribe((r) => {
        r.type === R.UNIVER_DOC && this.fireEvent(this.Event.DocDisposed, {
          unitId: r.getUnitId(),
          unitType: r.type,
          snapshot: r.getSnapshot()
        });
      })
    ), this.registerEventHandler(
      this.Event.DocCreated,
      () => t.unitAdded$.subscribe((r) => {
        if (r.type === R.UNIVER_DOC) {
          const n = r, o = e.createInstance(B, n);
          this.fireEvent(this.Event.DocCreated, {
            unitId: r.getUnitId(),
            type: r.type,
            doc: o,
            unit: o
          });
        }
      })
    );
  }
  /**
   * Dispose the UniverSheet by the `unitId`. The UniverSheet would be unload from the application.
   * @param unitId The unit id of the UniverSheet.
   * @returns Whether the Univer instance is disposed successfully.
   *
   * @example
   * ```ts
   * const fWorkbook = univerAPI.getActiveWorkbook();
   * const unitId = fWorkbook?.getId();
   *
   * if (unitId) {
   *   univerAPI.disposeUnit(unitId);
   * }
   * ```
   */
  disposeUnit(e) {
    const t = this._univerInstanceService.disposeUnit(e);
    return this._eventRegistry.dispose(), t;
  }
  /**
   * Get the current lifecycle stage.
   * @returns {LifecycleStages} - The current lifecycle stage.
   *
   * @example
   * ```ts
   * const stage = univerAPI.getCurrentLifecycleStage();
   * console.log(stage);
   * ```
   */
  getCurrentLifecycleStage() {
    return this._injector.get(V).stage;
  }
  /**
   * Undo an editing on the currently focused document.
   * @returns {Promise<boolean>} undo result
   *
   * @example
   * ```ts
   * await univerAPI.undo();
   * ```
   */
  undo() {
    return this._commandService.executeCommand(h.id);
  }
  /**
   * Redo an editing on the currently focused document.
   * @returns {Promise<boolean>} redo result
   *
   * @example
   * ```ts
   * await univerAPI.redo();
   * ```
   */
  redo() {
    return this._commandService.executeCommand(u.id);
  }
  /**
   * Toggle dark mode on or off.
   * @param {boolean} isDarkMode - Whether the dark mode is enabled.
   * @example
   * ```ts
   * univerAPI.toggleDarkMode(true);
   * ```
   */
  toggleDarkMode(e) {
    this._injector.get(Oe).setDarkMode(e);
  }
  /**
   * Load locales for the given locale.
   * @description This method is utilized to load locales, which can be either built-in or custom-defined.
   * @param {string} locale - A unique locale identifier.
   * @param {ILanguagePack} locales  - The locales object containing the translations.
   * @example
   * ```ts
   * univerAPI.loadLocales('esES', {
   *   'Hello World': 'Hola Mundo',
   * });
   * ```
   */
  loadLocales(e, t) {
    this._injector.get(z).load({ [e]: t });
  }
  /**
   * Set the current locale.
   * @param {string} locale - A unique locale identifier.
   * @example
   * ```ts
   * univerAPI.setLocale('esES');
   * ```
   */
  setLocale(e) {
    this._injector.get(z).setLocale(e);
  }
  /**
   * Register a callback that will be triggered before invoking a command.
   * @deprecated use `univerAPI.addEvent(univerAPI.Event.BeforeCommandExecute, (event) => {})` instead.
   * @param {CommandListener} callback The callback.
   * @returns {IDisposable} The disposable instance.
   */
  onBeforeCommandExecute(e) {
    return this._commandService.beforeCommandExecuted((t, r) => {
      e(t, r);
    });
  }
  /**
   * Register a callback that will be triggered when a command is invoked.
   * @deprecated use `univerAPI.addEvent(univerAPI.Event.CommandExecuted, (event) => {})` instead.
   * @param {CommandListener} callback The callback.
   * @returns {IDisposable} The disposable instance.
   */
  onCommandExecuted(e) {
    return this._commandService.onCommandExecuted((t, r) => {
      e(t, r);
    });
  }
  /**
   * Execute a command with the given id and parameters.
   * @param id Identifier of the command.
   * @param params Parameters of this execution.
   * @param options Options of this execution.
   * @returns The result of the execution. It is a boolean value by default which indicates the command is executed.
   *
   * @example
   * ```ts
   * univerAPI.executeCommand('sheet.command.set-range-values', {
   *   value: { v: "Hello, Univer!" },
   *   range: { startRow: 0, startColumn: 0, endRow: 0, endColumn: 0 }
   * });
   * ```
   */
  executeCommand(e, t, r) {
    return this._commandService.executeCommand(e, t, r);
  }
  /**
   * Execute a command with the given id and parameters synchronously.
   * @param id Identifier of the command.
   * @param params Parameters of this execution.
   * @param options Options of this execution.
   * @returns The result of the execution. It is a boolean value by default which indicates the command is executed.
   *
   * @example
   * ```ts
   * univerAPI.syncExecuteCommand('sheet.command.set-range-values', {
   *   value: { v: "Hello, Univer!" },
   *   range: { startRow: 0, startColumn: 0, endRow: 0, endColumn: 0 }
   * });
   * ```
   */
  syncExecuteCommand(e, t, r) {
    return this._commandService.syncExecuteCommand(e, t, r);
  }
  /**
   * Get hooks.
   * @deprecated use `addEvent` instead.
   * @returns {FHooks} FHooks instance
   */
  getHooks() {
    return this._injector.createInstance(P);
  }
  get Enum() {
    return O.get();
  }
  get Event() {
    return j.get();
  }
  get Util() {
    return U.get();
  }
  /**
   * Add an event listener
   * @param {string} event key of event
   * @param {(params: IEventParamConfig[typeof event]) => void} callback callback when event triggered
   * @returns {Disposable} The Disposable instance, for remove the listener
   * @example
   * ```ts
   * // Add life cycle changed event listener
   * const disposable = univerAPI.addEvent(univerAPI.Event.LifeCycleChanged, (params) => {
   *   const { stage } = params;
   *   console.log('life cycle changed', params);
   * });
   *
   * // Remove the event listener, use `disposable.dispose()`
   * ```
   */
  addEvent(e, t) {
    if (!e || !t) throw new Error("Cannot add empty event");
    return this._eventRegistry.addEvent(e, t);
  }
  /**
   * Fire an event, used in internal only.
   * @param {string} event key of event
   * @param {any} params params of event
   * @returns {boolean} should cancel
   * @example
   * ```ts
   * this.fireEvent(univerAPI.Event.LifeCycleChanged, params);
   * ```
   */
  fireEvent(e, t) {
    return this._eventRegistry.fireEvent(e, t);
  }
  getUserManager() {
    return this._injector.createInstance(H);
  }
  /**
   * Create a new blob.
   * @returns {FBlob} The new blob instance
   * @example
   * ```ts
   * const blob = univerAPI.newBlob();
   * ```
   */
  newBlob() {
    return this._injector.createInstance(D);
  }
  /**
   * Create a new color.
   * @returns {ColorBuilder} The new color instance
   * @example
   * ```ts
   * const color = univerAPI.newColor();
   * ```
   * @deprecated
   */
  newColor() {
    return new je();
  }
  /**
   * Create a new rich text.
   * @param {IDocumentData} data
   * @returns {RichTextBuilder} The new rich text instance
   * @example
   * ```ts
   * const richText = univerAPI.newRichText({ body: { dataStream: 'Hello World\r\n' } });
   * const range = univerAPI.getActiveWorkbook().getActiveSheet().getRange('A1');
   * range.setRichTextValueForCell(richText);
   * ```
   */
  newRichText(e) {
    return Pe.create(e);
  }
  /**
   * Create a new rich text value.
   * @param {IDocumentData} data - The rich text data
   * @returns {RichTextValue} The new rich text value instance
   * @example
   * ```ts
   * const richTextValue = univerAPI.newRichTextValue({ body: { dataStream: 'Hello World\r\n' } });
   * const range = univerAPI.getActiveWorkbook().getActiveSheet().getRange('A1');
   * range.setRichTextValueForCell(richTextValue);
   * ```
   */
  newRichTextValue(e) {
    return Be.create(e);
  }
  /**
   * Create a new paragraph style.
   * @param {IParagraphStyle} style - The paragraph style
   * @returns {ParagraphStyleBuilder} The new paragraph style instance
   * @example
   * ```ts
   * const richText = univerAPI.newRichText({ body: { dataStream: 'Hello World\r\n' } });
   * const paragraphStyle = univerAPI.newParagraphStyle({ textStyle: { ff: 'Arial', fs: 12, it: univerAPI.Enum.BooleanNumber.TRUE, bl: univerAPI.Enum.BooleanNumber.TRUE } });
   * richText.insertParagraph(paragraphStyle);
   * const range = univerAPI.getActiveWorkbook().getActiveSheet().getRange('A1');
   * range.setRichTextValueForCell(richText);
   * ```
   */
  newParagraphStyle(e) {
    return He.create(e);
  }
  /**
   * Create a new paragraph style value.
   * @param {IParagraphStyle} style - The paragraph style
   * @returns {ParagraphStyleValue} The new paragraph style value instance
   * @example
   * ```ts
   * const paragraphStyleValue = univerAPI.newParagraphStyleValue();
   * ```
   */
  newParagraphStyleValue(e) {
    return Ue.create(e);
  }
  /**
   * Create a new text style.
   * @param {ITextStyle} style - The text style
   * @returns {TextStyleBuilder} The new text style instance
   * @example
   * ```ts
   * const textStyle = univerAPI.newTextStyle();
   * ```
   */
  newTextStyle(e) {
    return Ie.create(e);
  }
  /**
   * Create a new text style value.
   * @param {ITextStyle} style - The text style
   * @returns {TextStyleValue} The new text style value instance
   * @example
   * ```ts
   * const textStyleValue = univerAPI.newTextStyleValue();
   * ```
   */
  newTextStyleValue(e) {
    return Me.create(e);
  }
  /**
   * Create a new text decoration.
   * @param {ITextDecoration} decoration - The text decoration
   * @returns {TextDecorationBuilder} The new text decoration instance
   * @example
   * ```ts
   * const decoration = univerAPI.newTextDecoration();
   * ```
   */
  newTextDecoration(e) {
    return new Ve(e);
  }
};
I = Ye([
  C(0, p(_)),
  C(1, g),
  C(2, F),
  C(3, p(V))
], I);
export {
  $ as FBase,
  $e as FBaseInitialable,
  D as FBlob,
  O as FEnum,
  j as FEventName,
  P as FHooks,
  I as FUniver,
  U as FUtil
};
