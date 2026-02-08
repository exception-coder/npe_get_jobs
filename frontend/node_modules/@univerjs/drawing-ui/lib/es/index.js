var Ot = Object.defineProperty;
var Dt = (i, r, e) => r in i ? Ot(i, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[r] = e;
var J = (i, r, e) => Dt(i, typeof r != "symbol" ? r + "" : r, e);
import { CommandType as me, ICommandService as ce, LocaleService as te, Inject as Ae, Disposable as He, DrawingTypeEnum as q, UniverInstanceType as Oe, checkIfMove as at, toDisposable as fe, IUniverInstanceService as Fe, ImageSourceType as Ye, Injector as Tt, IConfigService as Et, Plugin as Pt, merge as Nt, ArrangeTypeEnum as _e, generateRandomId as Bt, debounce as Ce } from "@univerjs/core";
import { useDependency as A, ComponentManager as xt, IMessageService as Ut, IGalleryService as jt, IDialogService as At } from "@univerjs/ui";
import { jsx as v, jsxs as P, Fragment as Ht } from "react/jsx-runtime";
import { DropdownMenu as Lt, clsx as Q, borderClassName as kt, MessageType as Xe, Select as st, Button as se, InputNumber as he, Checkbox as $t } from "@univerjs/design";
import { useRef as ot, createElement as F, forwardRef as ee, useState as j, useEffect as we } from "react";
import { getDrawingShapeKeyByDrawingSearch as L, SetDrawingSelectedOperation as De, IDrawingManagerService as re, ImageSourceType as Vt, IImageIoService as ct } from "@univerjs/drawing";
import { Group as pe, DRAWING_OBJECT_LAYER_INDEX as Te, RENDER_CLASS_TYPE as Je, IRenderManagerService as ue, Shape as Gt, Rect as lt, Canvas as Wt, Image as We, precisionTo as Se, CURSOR_TYPE as Ee, Vector2 as $e, degToRad as qe, getGroupState as Zt, transformObjectOutOfGroup as Ft } from "@univerjs/engine-render";
import { switchMap as zt, of as Kt } from "rxjs";
var D = /* @__PURE__ */ ((i) => (i.default = "0", i.left = "1", i.center = "2", i.right = "3", i.top = "4", i.middle = "5", i.bottom = "6", i.horizon = "7", i.vertical = "8", i))(D || {});
const ze = {
  id: "sheet.operation.set-image-align",
  type: me.OPERATION,
  handler: (i, r) => !0
}, Ze = {
  id: "sheet.operation.open-image-crop",
  type: me.OPERATION,
  handler: (i, r) => !0
}, oe = {
  id: "sheet.operation.close-image-crop",
  type: me.OPERATION,
  handler: (i, r) => !0
};
var x = /* @__PURE__ */ ((i) => (i.FREE = "0", i.R1_1 = "1", i.R16_9 = "2", i.R9_16 = "3", i.R5_4 = "4", i.R4_5 = "5", i.R4_3 = "6", i.R3_4 = "7", i.R3_2 = "8", i.R2_3 = "9", i))(x || {});
const Pe = {
  id: "sheet.operation.Auto-image-crop",
  type: me.OPERATION,
  handler: (i, r) => !0
}, ut = {
  id: "sheet.operation.image-reset-size",
  type: me.OPERATION,
  handler: (i, r) => !0
}, Yt = "drawing-ui.config", Qe = {}, Xt = "COMPONENT_IMAGE_POPUP_MENU";
function z({ ref: i, ...r }) {
  const { icon: e, id: t, className: n, extend: s, ...a } = r, o = `univerjs-icon univerjs-icon-${t} ${n || ""}`.trim(), c = ot(`_${Qt()}`);
  return gt(e, `${t}`, {
    defIds: e.defIds,
    idSuffix: c.current
  }, {
    ref: i,
    className: o,
    ...a
  }, s);
}
function gt(i, r, e, t, n) {
  return F(i.tag, {
    key: r,
    ...Jt(i, e, n),
    ...t
  }, (qt(i, e).children || []).map((s, a) => gt(s, `${r}-${i.tag}-${a}`, e, void 0, n)));
}
function Jt(i, r, e) {
  const t = { ...i.attrs };
  e != null && e.colorChannel1 && t.fill === "colorChannel1" && (t.fill = e.colorChannel1), i.tag === "mask" && t.id && (t.id = t.id + r.idSuffix), Object.entries(t).forEach(([s, a]) => {
    s === "mask" && typeof a == "string" && (t[s] = a.replace(/url\(#(.*)\)/, `url(#$1${r.idSuffix})`));
  });
  const { defIds: n } = r;
  return !n || n.length === 0 || (i.tag === "use" && t["xlink:href"] && (t["xlink:href"] = t["xlink:href"] + r.idSuffix), Object.entries(t).forEach(([s, a]) => {
    typeof a == "string" && (t[s] = a.replace(/url\(#(.*)\)/, `url(#$1${r.idSuffix})`));
  })), t;
}
function qt(i, r) {
  var t;
  const { defIds: e } = r;
  return !e || e.length === 0 ? i : i.tag === "defs" && ((t = i.children) != null && t.length) ? {
    ...i,
    children: i.children.map((n) => typeof n.attrs.id == "string" && e && e.includes(n.attrs.id) ? {
      ...n,
      attrs: {
        ...n.attrs,
        id: n.attrs.id + r.idSuffix
      }
    } : n)
  } : i;
}
function Qt() {
  return Math.random().toString(36).substring(2, 8);
}
z.displayName = "UniverIcon";
const er = {
  tag: "svg",
  attrs: {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 17 16",
    width: "1em",
    height: "1em"
  },
  children: [
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M14.0045 4.4334C14.8881 4.4334 15.6045 3.71705 15.6045 2.8334C15.6045 1.94974 14.8881 1.2334 14.0045 1.2334H3.70449C2.82084 1.2334 2.10449 1.94974 2.10449 2.8334C2.10449 3.71705 2.82084 4.4334 3.70449 4.4334H14.0045ZM14.4045 2.8334C14.4045 3.05431 14.2254 3.2334 14.0045 3.2334H3.70449C3.48358 3.2334 3.30449 3.05431 3.30449 2.8334C3.30449 2.61248 3.48358 2.4334 3.70449 2.4334H14.0045C14.2254 2.4334 14.4045 2.61249 14.4045 2.8334Z",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M14.1544 8.5999C15.038 8.5999 15.7544 7.88356 15.7544 6.9999C15.7544 6.11625 15.038 5.3999 14.1544 5.3999H3.85439C2.97074 5.3999 2.25439 6.11625 2.25439 6.9999C2.25439 7.88356 2.97074 8.5999 3.85439 8.5999H14.1544ZM14.5544 6.9999C14.5544 7.22082 14.3753 7.3999 14.1544 7.3999H3.85439C3.63348 7.3999 3.45439 7.22082 3.45439 6.9999C3.45439 6.77899 3.63348 6.5999 3.85439 6.5999H14.1544C14.3753 6.5999 14.5544 6.77899 14.5544 6.9999Z",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M8.57975 14.5902L6.58023 12.5907C6.34591 12.3564 6.34591 11.9765 6.58023 11.7421C6.81454 11.5078 7.19444 11.5078 7.42876 11.7421L8.40449 12.7179V10.1664C8.40449 9.83504 8.67312 9.56641 9.00449 9.56641C9.33586 9.56641 9.60449 9.83504 9.60449 10.1664V12.7179L10.5802 11.7421C10.8145 11.5078 11.1944 11.5078 11.4288 11.7421C11.6631 11.9765 11.6631 12.3564 11.4288 12.5907L9.42923 14.5902"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M8.57975 14.5902C8.58121 14.5917 8.58268 14.5931 8.58416 14.5946C8.64077 14.6502 8.70566 14.6923 8.77482 14.7209C8.84557 14.7502 8.92314 14.7664 9.00449 14.7664C9.08585 14.7664 9.16342 14.7502 9.23416 14.7209C9.30332 14.6923 9.36821 14.6502 9.42482 14.5946"
      }
    }
  ]
}, dt = ee(function(r, e) {
  return F(z, Object.assign({}, r, {
    id: "bottom-icon",
    ref: e,
    icon: er
  }));
});
dt.displayName = "BottomIcon";
const tr = {
  tag: "svg",
  attrs: {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 16 16",
    width: "1em",
    height: "1em"
  },
  children: [
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M5.97705 7.51296C5.97705 7.18159 6.24568 6.91296 6.57705 6.91296H8.48632C8.81769 6.91296 9.08632 7.18159 9.08632 7.51296C9.08632 7.84433 8.81769 8.11296 8.48632 8.11296H6.57705C6.24568 8.11296 5.97705 7.84433 5.97705 7.51296Z"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M6.57705 9.41028C6.24568 9.41028 5.97705 9.67891 5.97705 10.0103C5.97705 10.3416 6.24568 10.6103 6.57705 10.6103H10.8199C11.1512 10.6103 11.4199 10.3416 11.4199 10.0103C11.4199 9.67891 11.1512 9.41028 10.8199 9.41028H6.57705Z"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M3.51074 2.37063C3.51074 1.48697 4.22709 0.77063 5.11074 0.77063H9.80318L9.81294 0.770708C9.97168 0.768161 10.1311 0.82824 10.2511 0.95055L14.4317 5.21408C14.5165 5.30049 14.5697 5.406 14.5917 5.51645C14.6041 5.5644 14.6106 5.61467 14.6106 5.66648V11.6406C14.6106 12.5243 13.8943 13.2406 13.0106 13.2406H5.11074C4.22709 13.2406 3.51074 12.5243 3.51074 11.6406V2.37063ZM10.4032 4.66648V2.81964L12.6063 5.06648H10.8032C10.5823 5.06648 10.4032 4.88739 10.4032 4.66648ZM5.11074 1.97063C4.88983 1.97063 4.71074 2.14972 4.71074 2.37063V11.6406C4.71074 11.8615 4.88983 12.0406 5.11074 12.0406H13.0106C13.2316 12.0406 13.4106 11.8615 13.4106 11.6406V6.26648H10.8032C9.91953 6.26648 9.20318 5.55013 9.20318 4.66648V1.97063H5.11074Z",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M2.58916 6.6741C2.58916 6.34273 2.32053 6.0741 1.98916 6.0741C1.65779 6.0741 1.38916 6.34273 1.38916 6.6741V12.6294C1.38916 14.0653 2.55322 15.2294 3.98916 15.2294H9.41408C9.74545 15.2294 10.0141 14.9607 10.0141 14.6294C10.0141 14.298 9.74545 14.0294 9.41408 14.0294H3.98916C3.21596 14.0294 2.58916 13.4026 2.58916 12.6294V6.6741Z"
      }
    }
  ]
}, ht = ee(function(r, e) {
  return F(z, Object.assign({}, r, {
    id: "create-copy-icon",
    ref: e,
    icon: tr
  }));
});
ht.displayName = "CreateCopyIcon";
const rr = {
  tag: "svg",
  attrs: {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 17 16",
    width: "1em",
    height: "1em"
  },
  children: [{
    tag: "path",
    attrs: {
      fill: "currentColor",
      d: "M7.38125 1.16211C6.49759 1.16211 5.78125 1.87845 5.78125 2.76211V5.6377H2.87783C1.99418 5.6377 1.27783 6.35404 1.27783 7.2377V13.2377C1.27783 14.1214 1.99418 14.8377 2.87783 14.8377H8.87783C9.76149 14.8377 10.4778 14.1214 10.4778 13.2377V10.3621H13.3813C14.2649 10.3621 14.9813 9.64577 14.9813 8.76211V2.76211C14.9813 1.87845 14.2649 1.16211 13.3813 1.16211H7.38125ZM10.4778 9.16211H13.3813C13.6022 9.16211 13.7812 8.98302 13.7812 8.76211V2.76211C13.7812 2.5412 13.6022 2.36211 13.3813 2.36211H7.38125C7.16034 2.36211 6.98125 2.5412 6.98125 2.76211V5.6377H8.87783C9.76149 5.6377 10.4778 6.35404 10.4778 7.2377V9.16211ZM6.98125 6.8377H8.87783C9.09875 6.8377 9.27783 7.01678 9.27783 7.2377V9.16211H7.38125C7.16034 9.16211 6.98125 8.98302 6.98125 8.76211V6.8377ZM5.78125 6.8377V8.76211C5.78125 9.64577 6.49759 10.3621 7.38125 10.3621H9.27783V13.2377C9.27783 13.4586 9.09875 13.6377 8.87783 13.6377H2.87783C2.65692 13.6377 2.47783 13.4586 2.47783 13.2377V7.2377C2.47783 7.01678 2.65692 6.8377 2.87783 6.8377H5.78125Z",
      fillRule: "evenodd",
      clipRule: "evenodd"
    }
  }]
}, ft = ee(function(r, e) {
  return F(z, Object.assign({}, r, {
    id: "group-icon",
    ref: e,
    icon: rr
  }));
});
ft.displayName = "GroupIcon";
const nr = {
  tag: "svg",
  attrs: {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 16 16",
    width: "1em",
    height: "1em"
  },
  children: [{
    tag: "path",
    attrs: {
      fill: "currentColor",
      d: "M11.3536 6.14645C11.5488 6.34171 11.5488 6.65829 11.3536 6.85355L8.35355 9.85355C8.15829 10.0488 7.84171 10.0488 7.64645 9.85355L4.64645 6.85355C4.45118 6.65829 4.45118 6.34171 4.64645 6.14645C4.84171 5.95118 5.15829 5.95118 5.35355 6.14645L8 8.79289L10.6464 6.14645C10.8417 5.95118 11.1583 5.95118 11.3536 6.14645Z",
      fillRule: "evenodd",
      clipRule: "evenodd"
    }
  }]
}, pt = ee(function(r, e) {
  return F(z, Object.assign({}, r, {
    id: "more-down-icon",
    ref: e,
    icon: nr
  }));
});
pt.displayName = "MoreDownIcon";
const ir = {
  tag: "svg",
  attrs: {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 16 16",
    width: "1em",
    height: "1em"
  },
  children: [{
    tag: "path",
    attrs: {
      fill: "currentColor",
      d: "M1.25 2.96401C1.25 3.84767 1.96634 4.56401 2.85 4.56401H13.15C14.0337 4.56401 14.75 3.84767 14.75 2.96401C14.75 2.08036 14.0337 1.36401 13.15 1.36401H2.85C1.96635 1.36401 1.25 2.08036 1.25 2.96401ZM2.85 3.36401C2.62909 3.36401 2.45 3.18493 2.45 2.96401C2.45 2.7431 2.62909 2.56401 2.85 2.56401H13.15C13.3709 2.56401 13.55 2.7431 13.55 2.96401C13.55 3.18493 13.3709 3.36401 13.15 3.36401H2.85Z",
      fillRule: "evenodd",
      clipRule: "evenodd"
    }
  }, {
    tag: "path",
    attrs: {
      fill: "currentColor",
      d: "M5.57564 11.6118C5.80995 11.3774 6.18985 11.3774 6.42417 11.6118L7.3999 12.5875V6.36951C7.3999 6.03814 7.66853 5.76951 7.9999 5.76951C8.33127 5.76951 8.5999 6.03814 8.5999 6.36951V12.5875L9.57564 11.6118C9.80995 11.3774 10.1899 11.3774 10.4242 11.6118C10.6585 11.8461 10.6585 12.226 10.4242 12.4603L8.4324 14.452C8.32324 14.5655 8.16982 14.6362 7.9999 14.6362C7.82998 14.6362 7.67655 14.5655 7.56739 14.452L5.57564 12.4603C5.34132 12.226 5.34132 11.8461 5.57564 11.6118Z"
    }
  }]
}, mt = ee(function(r, e) {
  return F(z, Object.assign({}, r, {
    id: "move-down-icon",
    ref: e,
    icon: ir
  }));
});
mt.displayName = "MoveDownIcon";
const ar = {
  tag: "svg",
  attrs: {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 16 16",
    width: "1em",
    height: "1em"
  },
  children: [{
    tag: "path",
    attrs: {
      fill: "currentColor",
      d: "M1.25 13.036C1.25 12.1523 1.96634 11.436 2.85 11.436H13.15C14.0337 11.436 14.75 12.1523 14.75 13.036C14.75 13.9196 14.0337 14.636 13.15 14.636H2.85C1.96635 14.636 1.25 13.9196 1.25 13.036ZM2.85 12.636C2.62909 12.636 2.45 12.8151 2.45 13.036C2.45 13.2569 2.62909 13.436 2.85 13.436H13.15C13.3709 13.436 13.55 13.2569 13.55 13.036C13.55 12.8151 13.3709 12.636 13.15 12.636H2.85Z",
      fillRule: "evenodd",
      clipRule: "evenodd"
    }
  }, {
    tag: "path",
    attrs: {
      fill: "currentColor",
      d: "M5.57564 4.38825C5.80995 4.62256 6.18985 4.62256 6.42417 4.38825L7.3999 3.41251V9.63049C7.3999 9.96186 7.66853 10.2305 7.9999 10.2305C8.33127 10.2305 8.5999 9.96186 8.5999 9.63049V3.41251L9.57564 4.38825C9.80995 4.62256 10.1899 4.62256 10.4242 4.38825C10.6585 4.15393 10.6585 3.77403 10.4242 3.53972L8.4324 1.54796C8.32324 1.43445 8.16982 1.36382 7.9999 1.36382C7.82998 1.36382 7.67655 1.43446 7.56739 1.54797L5.57564 3.53972C5.34132 3.77403 5.34132 4.15393 5.57564 4.38825Z"
    }
  }]
}, wt = ee(function(r, e) {
  return F(z, Object.assign({}, r, {
    id: "move-up-icon",
    ref: e,
    icon: ar
  }));
});
wt.displayName = "MoveUpIcon";
const sr = {
  tag: "svg",
  attrs: {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 17 16",
    width: "1em",
    height: "1em"
  },
  children: [
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M7.82994 1.40913C7.88746 1.35161 7.95376 1.30821 8.02453 1.27893C8.09527 1.24959 8.17285 1.2334 8.2542 1.2334C8.33555 1.2334 8.41313 1.24959 8.48387 1.27893C8.55464 1.30821 8.62094 1.35161 8.67846 1.40913L10.6785 3.40913C10.9128 3.64345 10.9128 4.02335 10.6785 4.25766C10.4441 4.49198 10.0642 4.49198 9.82994 4.25766L8.8542 3.28193V5.8334C8.8542 6.16477 8.58557 6.4334 8.2542 6.4334C7.92283 6.4334 7.6542 6.16477 7.6542 5.8334V3.28193L6.67846 4.25766C6.44415 4.49198 6.06425 4.49198 5.82994 4.25766C5.59562 4.02335 5.59562 3.64345 5.82994 3.40913L7.82994 1.40913Z"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M1.50439 9C1.50439 8.11634 2.22074 7.4 3.10439 7.4H13.4044C14.288 7.4 15.0044 8.11634 15.0044 9C15.0044 9.88366 14.2881 10.6 13.4044 10.6H3.1044C2.22074 10.6 1.50439 9.88366 1.50439 9ZM3.10439 8.6C2.88348 8.6 2.70439 8.77909 2.70439 9C2.70439 9.22091 2.88348 9.4 3.1044 9.4H13.4044C13.6253 9.4 13.8044 9.22091 13.8044 9C13.8044 8.77909 13.6253 8.6 13.4044 8.6H3.10439Z",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M1.6543 13.1665C1.6543 12.2828 2.37064 11.5665 3.2543 11.5665H13.5543C14.438 11.5665 15.1543 12.2828 15.1543 13.1665C15.1543 14.0502 14.438 14.7665 13.5543 14.7665H3.2543C2.37064 14.7665 1.6543 14.0502 1.6543 13.1665ZM3.2543 12.7665C3.03338 12.7665 2.8543 12.9456 2.8543 13.1665C2.8543 13.3874 3.03338 13.5665 3.2543 13.5665H13.5543C13.7752 13.5665 13.9543 13.3874 13.9543 13.1665C13.9543 12.9456 13.7752 12.7665 13.5543 12.7665H3.2543Z",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    }
  ]
}, vt = ee(function(r, e) {
  return F(z, Object.assign({}, r, {
    id: "topmost-icon",
    ref: e,
    icon: sr
  }));
});
vt.displayName = "TopmostIcon";
const or = {
  tag: "svg",
  attrs: {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 17 16",
    width: "1em",
    height: "1em"
  },
  children: [{
    tag: "path",
    attrs: {
      fill: "currentColor",
      d: "M7.46855 2.83731C7.46855 2.61639 7.64764 2.4373 7.86855 2.4373H13.8603C14.0812 2.4373 14.2603 2.61639 14.2603 2.8373V9.5049C14.2603 9.72581 14.0812 9.90489 13.8603 9.90489H12.866C12.5346 9.90489 12.266 10.1735 12.266 10.5049C12.266 10.8363 12.5346 11.1049 12.866 11.1049H13.8603C14.7439 11.1049 15.4603 10.3886 15.4603 9.5049V2.8373C15.4603 1.95365 14.7439 1.2373 13.8603 1.2373H7.86855C6.9849 1.2373 6.26855 1.95365 6.26855 2.83731V3.48688C6.26855 3.81825 6.53718 4.08688 6.86855 4.08688C7.19993 4.08688 7.46855 3.81825 7.46855 3.48688V2.83731Z"
    }
  }, {
    tag: "path",
    attrs: {
      fill: "currentColor",
      d: "M3.19888 5.56299C2.31522 5.56299 1.59888 6.27933 1.59888 7.16299V13.163C1.59888 14.0466 2.31522 14.763 3.19888 14.763H9.19888C10.0825 14.763 10.7989 14.0466 10.7989 13.163V7.16299C10.7989 6.27933 10.0825 5.56299 9.19888 5.56299H3.19888ZM2.79888 7.16299C2.79888 6.94207 2.97796 6.76299 3.19888 6.76299H9.19888C9.41979 6.76299 9.59888 6.94207 9.59888 7.16299V13.163C9.59888 13.3839 9.41979 13.563 9.19888 13.563H3.19888C2.97796 13.563 2.79888 13.3839 2.79888 13.163V7.16299Z",
      fillRule: "evenodd",
      clipRule: "evenodd"
    }
  }]
}, _t = ee(function(r, e) {
  return F(z, Object.assign({}, r, {
    id: "ungroup-icon",
    ref: e,
    icon: or
  }));
});
_t.displayName = "UngroupIcon";
const cr = {
  tag: "svg",
  attrs: {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 16 16",
    width: "1em",
    height: "1em"
  },
  children: [
    {
      tag: "path",
      attrs: {
        fill: "colorChannel1",
        d: "M11.0363 12.2367V14.0367C11.0363 14.3681 11.3049 14.6367 11.6363 14.6367C11.9676 14.6367 12.2363 14.3681 12.2363 14.0367V12.2367H14.0364C14.3677 12.2367 14.6364 11.9681 14.6364 11.6367C14.6364 11.3054 14.3677 11.0367 14.0364 11.0367H12.2363V9.23672C12.2363 8.90535 11.9676 8.63672 11.6363 8.63672C11.3049 8.63672 11.0363 8.90535 11.0363 9.23672V11.0367H9.23635C8.90498 11.0367 8.63635 11.3054 8.63635 11.6367C8.63635 11.9681 8.90498 12.2367 9.23635 12.2367H11.0363Z"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M2.56365 1.36377C1.90091 1.36377 1.36365 1.90103 1.36365 2.56377V6.16377C1.36365 6.82651 1.90091 7.36377 2.56365 7.36377H6.16365C6.82639 7.36377 7.36365 6.82651 7.36365 6.16377V2.56377C7.36365 1.90103 6.82639 1.36377 6.16365 1.36377H2.56365ZM6.16365 2.56377H2.56365L2.56365 6.16377H6.16365V2.56377Z",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M2.56365 8.63647C1.90091 8.63647 1.36365 9.17373 1.36365 9.83647V13.4365C1.36365 14.0992 1.90091 14.6365 2.56365 14.6365H6.16365C6.82639 14.6365 7.36365 14.0992 7.36365 13.4365V9.83647C7.36365 9.17373 6.82639 8.63647 6.16365 8.63647H2.56365ZM6.16365 9.83647H2.56365L2.56365 13.4365H6.16365V9.83647Z",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    },
    {
      tag: "path",
      attrs: {
        fill: "currentColor",
        d: "M9.83635 7.36377C9.17361 7.36377 8.63635 6.82651 8.63635 6.16377V2.56377C8.63635 1.90103 9.17361 1.36377 9.83635 1.36377H13.4364C14.0991 1.36377 14.6364 1.90103 14.6364 2.56377V6.16377C14.6364 6.82651 14.0991 7.36377 13.4364 7.36377H9.83635ZM9.83635 6.16377V2.56377L13.4364 2.56377V6.16377H9.83635Z",
        fillRule: "evenodd",
        clipRule: "evenodd"
      }
    }
  ]
}, Ct = ee(function(r, e) {
  return F(z, Object.assign({}, r, {
    id: "autofill-double-icon",
    ref: e,
    icon: cr
  }));
});
Ct.displayName = "AutofillDoubleIcon";
function lr(i) {
  var h;
  const { popup: r } = i, e = (h = r == null ? void 0 : r.extraProps) == null ? void 0 : h.menuItems;
  if (!e) return null;
  const t = A(ce), n = A(te), [s, a] = j(!1), [o, c] = j(!1), u = () => {
    c(!0);
  }, l = () => {
    c(!1);
  }, g = (p) => {
    a(p);
  }, d = (p) => {
    t.executeCommand(p.commandId, p.commandParams), a(!1);
  }, f = s || o, w = e.filter((p) => !p.disable);
  return /* @__PURE__ */ v(
    "div",
    {
      onMouseEnter: u,
      onMouseLeave: l,
      children: /* @__PURE__ */ v(
        Lt,
        {
          align: "start",
          items: w.map((p) => ({
            type: "item",
            children: n.t(p.label),
            onSelect: () => d(p)
          })),
          open: s,
          onOpenChange: g,
          children: /* @__PURE__ */ P(
            "div",
            {
              className: Q("univer-flex univer-items-center univer-gap-2 univer-rounded univer-p-1 hover:univer-bg-gray-100 dark:hover:!univer-bg-gray-800", kt, {
                "univer-bg-gray-100 dark:!univer-bg-gray-800": s,
                "univer-bg-white dark:!univer-bg-gray-900": !s
              }),
              children: [
                /* @__PURE__ */ v(
                  Ct,
                  {
                    className: "univer-fill-primary-600 univer-text-gray-900 dark:!univer-text-white"
                  }
                ),
                f && /* @__PURE__ */ v(pt, { className: "dark:!univer-text-white" })
              ]
            }
          )
        }
      )
    }
  );
}
var ur = Object.getOwnPropertyDescriptor, gr = (i, r, e, t) => {
  for (var n = t > 1 ? void 0 : t ? ur(r, e) : r, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (n = a(n) || n);
  return n;
}, et = (i, r) => (e, t) => r(e, t, i);
let Ne = class extends He {
  constructor(i, r) {
    super(), this._componentManager = i, this._commandService = r, this._init();
  }
  _initCustomComponents() {
    const i = this._componentManager;
    this.disposeWithMe(i.register(Xt, lr));
  }
  _initCommands() {
    [
      Ze,
      oe,
      ut,
      ze,
      Pe
    ].forEach((i) => this.disposeWithMe(this._commandService.registerCommand(i)));
  }
  _init() {
    this._initCommands(), this._initCustomComponents();
  }
};
Ne = gr([
  et(0, Ae(xt)),
  et(1, ce)
], Ne);
function Le(i, r) {
  const e = [];
  return i.forEach((t) => {
    const { oKey: n, left: s, top: a, height: o, width: c, angle: u } = t, l = r.getDrawingOKey(n);
    if (l == null)
      return e.push(null), !0;
    const { unitId: g, subUnitId: d, drawingId: f, drawingType: w } = l, h = {
      unitId: g,
      subUnitId: d,
      drawingId: f,
      drawingType: w,
      transform: {
        left: s,
        top: a,
        height: o,
        width: c,
        angle: u
      }
    };
    w === q.DRAWING_IMAGE && (h.srcRect = t.srcRect), e.push(h);
  }), e;
}
function tt(i, r, e, t) {
  const n = t.getDrawingByParam(i);
  if (n == null)
    return;
  const s = L(i), a = e.getObject(s);
  if (a && !(a instanceof pe))
    return;
  if (a != null) {
    a.addObject(r);
    return;
  }
  const o = new pe(s);
  e.addObject(o, Te).attachTransformerTo(o), o.addObject(r);
  const { transform: c } = n;
  c && o.transformByState(
    {
      left: c.left,
      top: c.top,
      angle: c.angle
    }
  );
}
function St(i, r) {
  var s;
  const e = r ? i.getUnit(r) : i.getFocusedUnit();
  if (e == null)
    return;
  const t = e.getUnitId();
  let n;
  return e.type === Oe.UNIVER_SHEET ? n = (s = e.getActiveSheet()) == null ? void 0 : s.getSheetId() : (e.type === Oe.UNIVER_DOC || e.type === Oe.UNIVER_SLIDE) && (n = t), { unitId: t, subUnitId: n, current: e };
}
var dr = Object.getOwnPropertyDescriptor, hr = (i, r, e, t) => {
  for (var n = t > 1 ? void 0 : t ? dr(r, e) : r, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (n = a(n) || n);
  return n;
}, be = (i, r) => (e, t) => r(e, t, i);
let Be = class extends He {
  constructor(r, e, t, n) {
    super();
    J(this, "_sceneListenerOnDrawingMap", /* @__PURE__ */ new WeakSet());
    this._currentUniverService = r, this._commandService = e, this._renderManagerService = t, this._drawingManagerService = n, this._initialize();
  }
  dispose() {
    super.dispose();
  }
  _initialize() {
    this._recoveryImages(), this._drawingAddListener(), this._drawingRemoveListener(), this._drawingUpdateListener(), this._commandExecutedListener(), this._drawingArrangeListener(), this._drawingGroupListener(), this._drawingRefreshListener(), this._drawingVisibleListener();
  }
  _recoveryImages() {
    const r = this._drawingManagerService.drawingManagerData, e = St(this._currentUniverService);
    if (e == null)
      return;
    const { unitId: t, subUnitId: n } = e;
    Object.keys(r).forEach((s) => {
      Object.keys(r[s]).forEach((a) => {
        const o = r[s][a].data;
        o == null || s !== t || a !== n || Object.keys(o).forEach((c) => {
          o[c] && this._insertDrawing([{ unitId: s, subUnitId: a, drawingId: c }]);
        });
      });
    });
  }
  _commandExecutedListener() {
    this.disposeWithMe(
      this._commandService.onCommandExecuted((r) => {
        if (r.id === ze.id) {
          const e = r.params;
          if (e == null)
            return;
          this._drawingAlign(e);
        }
      })
    );
  }
  _drawingGroupListener() {
    this.disposeWithMe(
      this._drawingManagerService.group$.subscribe((r) => {
        this._groupDrawings(r);
      })
    ), this.disposeWithMe(
      this._drawingManagerService.ungroup$.subscribe((r) => {
        this._ungroupDrawings(r);
      })
    );
  }
  // private _drawingGroup(params: ISetImageGroupOperationParams) {
  //     const { groupType } = params;
  //     const drawings = this._drawingManagerService.getFocusDrawings();
  //     if (drawings.length === 0) {
  //         return;
  //     }
  //     switch (groupType) {
  //         case GroupType.group:
  //             this._groupDrawings(drawings);
  //             break;
  //         case GroupType.regroup:
  //             this._regroupDrawings(drawings);
  //             break;
  //         case GroupType.ungroup:
  //             this._ungroupDrawings(drawings);
  //             break;
  //         default:
  //             break;
  //     }
  // }
  _getSceneAndTransformerByDrawingSearch(r) {
    if (r == null)
      return;
    const e = this._renderManagerService.getRenderById(r), t = e == null ? void 0 : e.scene;
    if (t == null)
      return null;
    const n = t.getTransformerByCreate();
    return { scene: t, transformer: n };
  }
  _groupDrawings(r) {
    r.forEach((e) => {
      this._groupDrawing(e);
    });
  }
  _groupDrawing(r) {
    const { parent: e, children: t } = r, { unitId: n, subUnitId: s, drawingId: a } = e, o = this._getSceneAndTransformerByDrawingSearch(e.unitId);
    if (o == null)
      return;
    const { scene: c, transformer: u } = o;
    this._commandService.syncExecuteCommand(oe.id);
    const l = [];
    if (t.forEach((f) => {
      const w = L(f), h = c.getObjectIncludeInGroup(w);
      if (h == null || l.includes(h))
        return;
      l.push(h);
      const { transform: p } = f;
      p != null && (h.classType === Je.GROUP ? h.transformByState({ left: p.left, top: p.top }) : h.transformByState(p));
    }), l.length === 0)
      return;
    const g = L({ unitId: n, subUnitId: s, drawingId: a }), d = new pe(g);
    c.addObject(d, Te).attachTransformerTo(d), d.addObjects(...l), e.transform && d.transformByState({ left: e.transform.left, top: e.transform.top }), u.clearSelectedObjects(), u.setSelectedControl(d);
  }
  // private _regroupDrawings(drawings: IDrawingSearch[]) {
  //     const renderObject = this._getSceneAndTransformerByDrawingSearch(drawings[0].unitId);
  //     if (renderObject == null) {
  //         return;
  //     }
  //     const { scene, transformer } = renderObject;
  //     const objects: BaseObject[] = [];
  //     let firstGroup: Nullable<Group> = null;
  //     drawings.forEach((drawing) => {
  //         const imageShapeKey = getDrawingShapeKeyByDrawingSearch(drawing);
  //         const o = scene.getObject(imageShapeKey);
  //         if (o == null) {
  //             return true;
  //         }
  //         const group = o.ancestorGroup as Nullable<Group>;
  //         if (group != null && firstGroup == null) {
  //             firstGroup = group;
  //         } else if (group != null && !objects.includes(group)) {
  //             objects.push(group);
  //         } else if (!objects.includes(o)) {
  //             objects.push(o);
  //         }
  //     });
  //     if (firstGroup == null) {
  //         return;
  //     }
  //     if (objects.length === 0) {
  //         return;
  //     }
  //     (firstGroup as Group).addObjects(...objects);
  //     (firstGroup as Group).reCalculateObjects();
  //     transformer.clearSelectedObjects();
  //     transformer.setSelectedControl(firstGroup);
  // }
  _ungroupDrawings(r) {
    r.forEach((e) => {
      this._ungroupDrawing(e);
    });
  }
  _ungroupDrawing(r) {
    const { parent: e, children: t } = r, n = this._getSceneAndTransformerByDrawingSearch(e.unitId);
    if (n == null)
      return;
    const { scene: s, transformer: a } = n;
    t.forEach((g) => {
      const d = L(g), f = s.getObjectIncludeInGroup(d);
      if (f == null)
        return !0;
      if (f == null)
        return;
      const { transform: w } = g;
      w != null && (f.classType === Je.GROUP ? f.transformByState({ left: w.left, top: w.top }) : f.transformByState(w));
    });
    const o = L(e), c = s.getObject(o), { width: u, height: l } = c;
    c.getObjects().forEach((g) => {
      c.removeSelfObjectAndTransform(g.oKey, u, l);
    }), c.dispose(), a.clearSelectedObjects();
  }
  _drawingAlign(r) {
    const { alignType: e } = r, t = this._drawingManagerService.getFocusDrawings();
    if (e === D.default)
      return;
    const n = [];
    let s = Number.POSITIVE_INFINITY, a = Number.POSITIVE_INFINITY, o = Number.NEGATIVE_INFINITY, c = Number.NEGATIVE_INFINITY, u = 0;
    t.forEach((l) => {
      const { unitId: g, subUnitId: d, drawingId: f, drawingType: w } = l, h = this._drawingManagerService.getDrawingByParam({ unitId: g, subUnitId: d, drawingId: f });
      if (h == null || h.transform == null)
        return;
      n.push({
        unitId: g,
        subUnitId: d,
        drawingId: f,
        drawingType: w,
        transform: h.transform
      });
      const { left: p = 0, top: C = 0, width: _ = 0, height: b = 0 } = h.transform;
      s = Math.min(s, p), a = Math.min(a, C), o = Math.max(o, p + _), c = Math.max(c, C + b), u++;
    }), u !== 0 && (this._sortDrawingTransform(n, e), this._applyAlignType(n, e, s, a, o, c, u));
  }
  _applyAlignType(r, e, t, n, s, a, o) {
    const c = Math.round((s - t) / o * 10) / 10, u = Math.round((a - n) / o * 10) / 10, l = [], g = this._getSceneAndTransformerByDrawingSearch(r[0].unitId);
    if (g == null)
      return;
    const { scene: d, transformer: f } = g;
    r.forEach((w, h) => {
      const { unitId: p, subUnitId: C, drawingId: _, transform: b, drawingType: R } = w, { left: T = 0, top: S = 0, width: I = 0, height: y = 0 } = b;
      let O = T, M = S;
      switch (e) {
        case D.left:
          O = t;
          break;
        case D.center:
          O = t + (s - t) / 2 - I / 2;
          break;
        case D.right:
          O = s - I;
          break;
        case D.top:
          M = n;
          break;
        case D.middle:
          M = n + (a - n) / 2 - y / 2;
          break;
        case D.bottom:
          M = a - y;
          break;
        case D.horizon:
          O = t + c * h;
          break;
        case D.vertical:
          M = n + u * h;
          break;
      }
      (O !== T || M !== S) && l.push({
        unitId: p,
        subUnitId: C,
        drawingId: _,
        drawingType: R,
        transform: {
          left: O,
          top: M
        }
      });
    }), this._drawingManagerService.featurePluginUpdateNotification(l), f.refreshControls().changeNotification();
  }
  _sortDrawingTransform(r, e) {
    r.sort((t, n) => {
      const s = t.transform, a = n.transform, {
        left: o = 0,
        top: c = 0,
        width: u = 0,
        height: l = 0
      } = s, {
        left: g = 0,
        top: d = 0,
        width: f = 0,
        height: w = 0
      } = a;
      switch (e) {
        case D.left:
          return o - g;
        case D.center:
          return o + u / 2 - (g + f / 2);
        case D.right:
          return o + u - (g + f);
        case D.top:
          return c - d;
        case D.middle:
          return c + l / 2 - (d + w / 2);
        case D.bottom:
          return c + l - (d + w);
        case D.horizon:
          return o + u / 2 - (g + f / 2);
        case D.vertical:
          return c + l / 2 - (d + w / 2);
        default:
          return 0;
      }
    });
  }
  _drawingArrangeListener() {
    this.disposeWithMe(
      this._drawingManagerService.order$.subscribe((r) => {
        this._drawingArrange(r);
      })
    );
  }
  _drawingArrange(r) {
    const { unitId: e, subUnitId: t, drawingIds: n } = r, s = this._getSceneAndTransformerByDrawingSearch(e);
    if (s == null)
      return;
    const { scene: a } = s;
    n.forEach((o) => {
      const c = L({ unitId: e, subUnitId: t, drawingId: o }), u = a.fuzzyMathObjects(c, !0);
      if (u == null || u.length === 0)
        return;
      const l = this._drawingManagerService.getDrawingOrder(e, t).indexOf(o);
      for (const g of u)
        g.setProps({ zIndex: l }), g.makeDirty();
    });
  }
  _drawingAddListener() {
    this.disposeWithMe(
      this._drawingManagerService.add$.subscribe((r) => {
        this._insertDrawing(r);
      })
    );
  }
  _insertDrawing(r) {
    const e = [];
    r.forEach((t) => {
      const { unitId: n } = t;
      if (this._drawingManagerService.getDrawingByParam(t) == null)
        return;
      const a = this._getSceneAndTransformerByDrawingSearch(n);
      if (a == null)
        return;
      const { scene: o } = a;
      e.includes(o) || e.push(o);
    }), e.forEach((t) => {
      this._sceneListenerOnDrawingMap.has(t) || (this._addListenerOnDrawing(t), this._sceneListenerOnDrawingMap.add(t));
    });
  }
  _drawingRemoveListener() {
    this.disposeWithMe(
      this._drawingManagerService.remove$.subscribe((r) => {
        r.forEach((e) => {
          var l;
          const { unitId: t, subUnitId: n, drawingId: s } = e, a = this._getSceneAndTransformerByDrawingSearch(t);
          if (a == null)
            return;
          const { scene: o } = a, c = L({ unitId: t, subUnitId: n, drawingId: s }), u = o.fuzzyMathObjects(c, !0);
          if (u.length > 0) {
            for (const g of u)
              g.dispose();
            (l = o.getTransformer()) == null || l.clearSelectedObjects();
          }
        });
      })
    );
  }
  _drawingUpdateListener() {
    this.disposeWithMe(
      this._drawingManagerService.update$.subscribe((r) => {
        r.forEach((e) => {
          var I;
          const { unitId: t, subUnitId: n, drawingId: s } = e, a = this._drawingManagerService.getDrawingByParam(e);
          if (a == null)
            return;
          const { transform: o, drawingType: c } = a, u = this._getSceneAndTransformerByDrawingSearch(t);
          if (u == null)
            return;
          const { scene: l, transformer: g } = u;
          if (o == null)
            return !0;
          const { left: d = 0, top: f = 0, width: w = 0, height: h = 0, angle: p = 0, flipX: C = !1, flipY: _ = !1, skewX: b = 0, skewY: R = 0 } = o, T = L({ unitId: t, subUnitId: n, drawingId: s }), S = l.getObject(T);
          if (S == null)
            return !0;
          S.transformByState({ left: d, top: f, width: w, height: h, angle: p, flipX: C, flipY: _, skewX: b, skewY: R }), (I = l.getTransformer()) == null || I.debounceRefreshControls();
        });
      })
    );
  }
  _drawingRefreshListener() {
    this.disposeWithMe(
      this._drawingManagerService.refreshTransform$.subscribe((r) => {
        r.forEach((e) => {
          const { unitId: t, subUnitId: n, drawingId: s } = e, a = this._getSceneAndTransformerByDrawingSearch(t);
          if (a == null)
            return;
          const o = this._drawingManagerService.getDrawingByParam(e);
          if (o == null)
            return;
          const { transform: c } = o, { scene: u } = a, l = L({ unitId: t, subUnitId: n, drawingId: s }), g = u.getObject(l);
          if (g == null || c == null)
            return !0;
          const {
            left: d = 0,
            top: f = 0,
            width: w = 0,
            height: h = 0,
            angle: p = 0,
            flipX: C = !1,
            flipY: _ = !1,
            skewX: b = 0,
            skewY: R = 0
          } = c;
          g.transformByState({ left: d, top: f, width: w, height: h, angle: p, flipX: C, flipY: _, skewX: b, skewY: R });
        });
      })
    );
  }
  _drawingVisibleListener() {
    this.disposeWithMe(
      this._drawingManagerService.visible$.subscribe((r) => {
        r.forEach((e) => {
          const { unitId: t, subUnitId: n, drawingId: s, visible: a } = e, o = this._getSceneAndTransformerByDrawingSearch(t);
          if (o == null)
            return;
          const { scene: c } = o, u = L({ unitId: t, subUnitId: n, drawingId: s }), l = c.getObject(u);
          if (l == null)
            return !0;
          a ? l.show() : l.hide();
        });
      })
    );
  }
  _filterUpdateParams(r, e) {
    return r.filter((t, n) => {
      if (t == null)
        return !1;
      const { transform: s } = t;
      return at(s, e == null ? void 0 : e[n]);
    });
  }
  // group?.getObjects().forEach((o) => {
  //     const drawing = this._drawingManagerService.getDrawingOKey(o.oKey);
  //     if (drawing != null) {
  //         const { unitId, subUnitId, drawingId } = drawing;
  //         drawings.push({ unitId, subUnitId, drawingId });
  //     }
  // });
  _addListenerOnDrawing(r) {
    const e = r.getTransformerByCreate();
    let t = null;
    this.disposeWithMe(
      fe(
        e.changeStart$.subscribe((n) => {
          const { objects: s } = n, a = Array.from(s.values()), o = [];
          t = a.map((c) => {
            const { left: u, top: l, height: g, width: d, angle: f, oKey: w, isInGroup: h } = c, p = this._drawingManagerService.getDrawingOKey(w);
            if (h || c instanceof pe) {
              let C = c.ancestorGroup;
              if (C == null && c instanceof pe && (C = c), C == null)
                return null;
              const _ = this._drawingManagerService.getDrawingOKey(C.oKey);
              if (_) {
                const { unitId: b, subUnitId: R, drawingId: T } = _;
                o.push({ unitId: b, subUnitId: R, drawingId: T });
                const { left: S, top: I, height: y, width: O, angle: M } = C;
                return { left: S, top: I, height: y, width: O, angle: M };
              }
            } else if (p != null) {
              const { unitId: C, subUnitId: _, drawingId: b } = p;
              return o.push({ unitId: C, subUnitId: _, drawingId: b }), { left: u, top: l, height: g, width: d, angle: f };
            }
            return null;
          }).filter((c) => c != null), o.length > 0 ? this._commandService.syncExecuteCommand(De.id, o) : this._commandService.syncExecuteCommand(De.id, []);
        })
      )
    ), this.disposeWithMe(
      fe(
        e.changeEnd$.subscribe((n) => {
          const { objects: s } = n, a = this._filterUpdateParams(Le(s, this._drawingManagerService), t);
          a.length > 0 && this._drawingManagerService.featurePluginUpdateNotification(a);
        })
      )
    );
  }
};
Be = hr([
  be(0, Fe),
  be(1, ce),
  be(2, ue),
  be(3, re)
], Be);
class Ie extends Gt {
  constructor(e, t) {
    t == null && (t = {}), t.transformerConfig = {
      keepRatio: !1,
      isCropper: !0,
      anchorFill: "rgb(0, 0, 0)",
      anchorStroke: "rgb(255, 255, 255)",
      anchorSize: 24
    };
    super(e, t);
    J(this, "_srcRect");
    J(this, "_prstGeom");
    J(this, "_applyTransform");
    J(this, "_dragPadding", 8);
    J(this, "_cacheCanvas");
    t != null && t.srcRect && (this._srcRect = t.srcRect), t != null && t.prstGeom && (this._prstGeom = t.prstGeom), t != null && t.applyTransform && (this._applyTransform = t.applyTransform), t != null && t.dragPadding && (this._dragPadding = t.dragPadding), this._applyProps();
  }
  refreshSrcRect(e, t) {
    this._srcRect = e, this._applyTransform = t, this._applyProps();
  }
  get srcRect() {
    return this._srcRect;
  }
  dispose() {
    var e;
    super.dispose(), (e = this._cacheCanvas) == null || e.dispose(), this._srcRect = null;
  }
  isHit(e) {
    const t = this.getInverseCoord(e);
    return t.x >= -this.strokeWidth / 2 && t.x <= this.width + this.strokeWidth / 2 && t.y >= -this.strokeWidth / 2 && t.y <= this.height + this.strokeWidth / 2 && !this._inSurround(t);
  }
  _inSurround(e) {
    const t = this._dragPadding;
    return e.x >= t - this.strokeWidth / 2 && e.x <= this.width + this.strokeWidth / 2 - t && e.y >= t - this.strokeWidth / 2 && e.y <= this.height + this.strokeWidth / 2 - t;
  }
  render(e, t) {
    return this.visible ? (e.save(), this._draw(e), e.restore(), this.makeDirty(!1), this) : (this.makeDirty(!1), this);
  }
  _draw(e) {
    var c, u;
    const n = this.getScene().getEngine(), { width: s, height: a } = n;
    this._initialCacheCanvas(), (c = this._cacheCanvas) == null || c.clear();
    const o = (u = this._cacheCanvas) == null ? void 0 : u.getContext();
    o != null && (o.save(), lt.drawWith(o, {
      left: 0,
      top: 0,
      width: s,
      height: a,
      fill: "rgba(0, 0, 0, 0.5)"
    }), o.setTransform(e.getTransform()), this._clipForApplyObject(o), this._applyCache(e), o.restore());
  }
  _clipForApplyObject(e) {
    let t = 0;
    if (this._prstGeom != null && (t = 1), e.globalCompositeOperation = "destination-out", e.beginPath(), t === 0) {
      const n = this.transform.getMatrix();
      e.transform(n[0], n[1], n[2], n[3], n[4], n[5]), e.rect(0, 0, this.width, this.height), e.fill();
    }
  }
  _applyProps() {
    if (this._applyTransform == null)
      return;
    let e = 0, t = 0, n = 0, s = 0;
    const { left: a = 0, top: o = 0, width: c = 0, height: u = 0, angle: l } = this._applyTransform;
    if (this._srcRect != null) {
      const { left: f = 0, top: w = 0, right: h = 0, bottom: p = 0 } = this._srcRect;
      e = f, t = w, n = h, s = p;
    }
    const g = a + e, d = o + t;
    this.transformByState({
      left: g,
      top: d,
      width: a + c - n - g,
      height: o + u - s - d,
      angle: l
    });
  }
  _applyCache(e) {
    if (!e || this._cacheCanvas == null)
      return;
    const t = this._cacheCanvas.getContext();
    t.save(), e.save(), e.setTransform(1, 0, 0, 1, 0, 0), t.setTransform(1, 0, 0, 1, 0, 0), e.drawImage(this._cacheCanvas.getCanvasEle(), 0, 0), e.restore(), t.restore();
  }
  _initialCacheCanvas() {
    if (this._cacheCanvas != null)
      return;
    const e = this.getScene();
    if (e == null) return;
    this._cacheCanvas = new Wt();
    const t = e.getEngine();
    this._cacheCanvas.setSize(t.width, t.height), t.onTransformChange$.subscribeEvent(() => {
      var n;
      (n = this._cacheCanvas) == null || n.setSize(t.width, t.height), this.makeDirty(!0);
    });
  }
}
var fr = Object.getOwnPropertyDescriptor, pr = (i, r, e, t) => {
  for (var n = t > 1 ? void 0 : t ? fr(r, e) : r, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (n = a(n) || n);
  return n;
}, le = (i, r) => (e, t) => r(e, t, i);
let xe = class extends He {
  constructor(r, e, t, n, s, a) {
    super();
    J(this, "_sceneListenerOnImageMap", /* @__PURE__ */ new WeakSet());
    this._commandService = r, this._drawingManagerService = e, this._renderManagerService = t, this._univerInstanceService = n, this._messageService = s, this._localeService = a, this._init();
  }
  _init() {
    this._initOpenCrop(), this._initCloseCrop(), this._initAutoCrop();
  }
  _initAutoCrop() {
    this.disposeWithMe(
      this._commandService.onCommandExecuted((r) => {
        if (r.id !== Pe.id)
          return;
        const e = r.params;
        if (e == null)
          return;
        const { cropType: t } = e, n = this._drawingManagerService.getFocusDrawings();
        if (n.length !== 1)
          return;
        const s = n[0], { unitId: a, subUnitId: o, drawingId: c } = s, u = this._renderManagerService.getRenderById(a), l = u == null ? void 0 : u.scene;
        if (l == null)
          return !0;
        this._searchCropObject(l) != null && this._commandService.syncExecuteCommand(oe.id, { isAuto: !0 });
        const d = L({ unitId: a, subUnitId: o, drawingId: c }), f = l.getObject(d);
        if (!(f instanceof We)) {
          this._messageService.show({
            type: Xe.Error,
            content: this._localeService.t("image-cropper.error")
          });
          return;
        }
        f != null && (this._updateCropperObject(t, f), this._commandService.executeCommand(Ze.id, { unitId: a, subUnitId: o, drawingId: c }));
      })
    );
  }
  _calculateSrcRectByRatio(r, e, t, n, s, a) {
    const o = t / n, c = s / a;
    let u = t, l = n;
    o > c ? u = n * c : l = t / c;
    const g = (t - u) / 2, d = (n - l) / 2;
    return {
      left: Se(g, 1),
      top: Se(d, 1),
      right: Se(t - (g + u), 1),
      bottom: Se(n - (d + l), 1)
    };
  }
  _updateCropperObject(r, e) {
    const { left: t, top: n, width: s, height: a } = e.calculateTransformWithSrcRect();
    let o;
    switch (r) {
      case x.R1_1:
        o = this._calculateSrcRectByRatio(t, n, s, a, 1, 1);
        break;
      case x.R16_9:
        o = this._calculateSrcRectByRatio(t, n, s, a, 16, 9);
        break;
      case x.R9_16:
        o = this._calculateSrcRectByRatio(t, n, s, a, 9, 16);
        break;
      case x.R5_4:
        o = this._calculateSrcRectByRatio(t, n, s, a, 5, 4);
        break;
      case x.R4_5:
        o = this._calculateSrcRectByRatio(t, n, s, a, 4, 5);
        break;
      case x.R4_3:
        o = this._calculateSrcRectByRatio(t, n, s, a, 4, 3);
        break;
      case x.R3_4:
        o = this._calculateSrcRectByRatio(t, n, s, a, 3, 4);
        break;
      case x.R3_2:
        o = this._calculateSrcRectByRatio(t, n, s, a, 3, 2);
        break;
      case x.R2_3:
        o = this._calculateSrcRectByRatio(t, n, s, a, 2, 3);
        break;
      case x.FREE:
    }
    if (o == null)
      return;
    e.setSrcRect(o);
    const { left: c = 0, top: u = 0, bottom: l = 0, right: g = 0 } = o;
    e.transformByStateCloseCropper({
      left: t + c,
      top: n + u,
      width: s - g - c,
      height: a - l - u
    });
  }
  _initOpenCrop() {
    this.disposeWithMe(
      this._commandService.onCommandExecuted((r) => {
        if (r.id !== Ze.id)
          return;
        const e = r.params;
        if (e == null)
          return;
        const { unitId: t, subUnitId: n, drawingId: s } = e, a = this._renderManagerService.getRenderById(t), o = a == null ? void 0 : a.scene;
        if (o == null)
          return !0;
        if (this._sceneListenerOnImageMap.has(o) || (this._addListenerOnImage(o), this._sceneListenerOnImageMap.add(o)), this._drawingManagerService.getDrawingByParam({ unitId: t, subUnitId: n, drawingId: s }) == null)
          return;
        const u = L({ unitId: t, subUnitId: n, drawingId: s }), l = o.getObject(u);
        if (l == null)
          return;
        if (!(l instanceof We)) {
          this._messageService.show({
            type: Xe.Error,
            content: this._localeService.t("image-cropper.error")
          });
          return;
        }
        const g = o.getTransformer();
        g == null || g.clearControls();
        const d = new Ie(`${u}-crop`, {
          srcRect: l.srcRect,
          prstGeom: l.prstGeom,
          applyTransform: l.calculateTransformWithSrcRect()
        });
        o.addObject(d, l.getLayerIndex() + 1).attachTransformerTo(d), g == null || g.createControlForCopper(d), this._addHoverForImageCopper(d), l.openRenderByCropper(), g == null || g.refreshControls(), d.makeDirty(!0), this._commandService.syncExecuteCommand(De.id, [{ unitId: t, subUnitId: n, drawingId: s }]);
      })
    );
  }
  _searchCropObject(r) {
    const e = r.getAllObjectsByOrder();
    for (const t of e)
      if (t instanceof Ie)
        return t;
  }
  _initCloseCrop() {
    this.disposeWithMe(
      this._commandService.onCommandExecuted((e) => {
        if (e.id !== oe.id)
          return;
        const t = this._univerInstanceService.getFocusedUnit();
        if (t == null)
          return;
        const n = t.getUnitId(), s = this._renderManagerService.getRenderById(n), a = s == null ? void 0 : s.scene;
        if (a == null)
          return !0;
        const o = this._searchCropObject(a);
        if (o == null)
          return;
        const c = this._getApplyObjectByCropObject(o);
        if (c == null)
          return;
        const u = a.getTransformerByCreate();
        u.detachFrom(o), u.clearCopperControl();
        const l = this._getSrcRectByTransformState(c, o), g = this._drawingManagerService.getDrawingOKey(c.oKey);
        if (g != null) {
          const { left: d, top: f, height: w, width: h } = o;
          this._drawingManagerService.featurePluginUpdateNotification([{
            ...g,
            transform: {
              ...g.transform,
              left: d,
              top: f,
              height: w,
              width: h
            },
            srcRect: l.srcRectAngle
          }]);
        }
        c.setSrcRect({ ...l.srcRectAngle }), c.closeRenderByCropper(), c.makeDirty(!0), o == null || o.dispose();
      })
    );
    const r = this._univerInstanceService.getCurrentTypeOfUnit$(Oe.UNIVER_SHEET).pipe(
      zt((e) => e ? e.activeSheet$ : Kt(null))
    );
    this.disposeWithMe(r.subscribe(() => {
      this._commandService.syncExecuteCommand(oe.id);
    }));
  }
  _getApplyObjectByCropObject(r) {
    const e = r.oKey, t = e.slice(0, e.length - 5), n = r.getScene();
    if (!n) return null;
    const s = n.getObject(t);
    return s == null ? null : s;
  }
  _addListenerOnImage(r) {
    const e = r.getTransformerByCreate();
    let t = null;
    this.disposeWithMe(
      e.changeStart$.subscribe((n) => {
        const { objects: s } = n, a = s.values().next().value;
        if (a == null || !(a instanceof Ie))
          return;
        const { left: o, top: c, height: u, width: l, angle: g } = a;
        t = { left: o, top: c, height: u, width: l, angle: g }, e.clearCopperControl();
      })
    ), this.disposeWithMe(
      e.changeEnd$.subscribe((n) => {
        const { objects: s } = n, a = s.values().next().value;
        if (a == null || !(a instanceof Ie))
          return;
        const { left: o, top: c, height: u, width: l, angle: g } = a;
        if (!at({ left: o, top: c, height: u, width: l, angle: g }, t))
          return;
        const d = this._getApplyObjectByCropObject(a);
        if (d == null)
          return;
        const f = this._getSrcRectByTransformState(d, a);
        a.refreshSrcRect(f.srcRect, d.getState()), e.createControlForCopper(a);
      })
    ), this._endCropListener(r);
  }
  _addHoverForImageCopper(r) {
    this.disposeWithMe(
      r.onPointerEnter$.subscribeEvent(() => {
        r.cursor = Ee.MOVE;
      })
    ), this.disposeWithMe(
      r.onPointerLeave$.subscribeEvent(() => {
        r.cursor = Ee.DEFAULT;
      })
    );
  }
  _endCropListener(r) {
    const e = r.getTransformerByCreate();
    this.disposeWithMe(
      e.clearControl$.subscribe((t) => {
        t === !0 && this._commandService.syncExecuteCommand(oe.id);
      })
    );
  }
  _getSrcRectByTransformState(r, e) {
    const { left: t, top: n, height: s, width: a, strokeWidth: o, angle: c } = e, { left: u, top: l, width: g, height: d, angle: f, strokeWidth: w } = r, h = t - u, p = n - l, C = {
      left: h,
      top: p,
      right: g - h - a,
      bottom: d - p - s
    }, _ = { ...C };
    if (f !== 0) {
      const b = t + a / 2, R = n + s / 2, T = new $e(b, R), S = g / 2 + u, I = d / 2 + l, y = new $e(S, I), O = new $e(u, l);
      O.rotateByPoint(qe(f), y);
      const M = O.clone();
      M.rotateByPoint(qe(-f), T);
      const N = t - M.x, B = n - M.y;
      _.left = N, _.top = B, _.right = g - N - a, _.bottom = d - B - s;
    }
    return {
      srcRect: C,
      srcRectAngle: _
    };
  }
};
xe = pr([
  le(0, ce),
  le(1, re),
  le(2, ue),
  le(3, Fe),
  le(4, Ut),
  le(5, Ae(te))
], xe);
var mr = Object.getOwnPropertyDescriptor, wr = (i, r, e, t) => {
  for (var n = t > 1 ? void 0 : t ? mr(r, e) : r, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (n = a(n) || n);
  return n;
}, Ve = (i, r) => (e, t) => r(e, t, i);
let Ue = class {
  constructor(i, r, e) {
    this._drawingManagerService = i, this._imageIoService = r, this._galleryService = e;
  }
  // eslint-disable-next-line max-lines-per-function
  async renderImages(i, r) {
    const {
      transform: e,
      drawingType: t,
      source: n,
      imageSourceType: s,
      srcRect: a,
      prstGeom: o,
      groupId: c,
      unitId: u,
      subUnitId: l,
      drawingId: g,
      isMultiTransform: d,
      transforms: f
    } = i;
    if (t !== q.DRAWING_IMAGE || !this._drawingManagerService.getDrawingVisible() || e == null)
      return;
    const w = d && f ? f : [e], h = [];
    for (const p of w) {
      const { left: C, top: _, width: b, height: R, angle: T, flipX: S, flipY: I, skewX: y, skewY: O } = p, M = w.indexOf(p), N = L({ unitId: u, subUnitId: l, drawingId: g }, d ? M : void 0), B = r.getObject(N);
      if (B != null) {
        B.transformByState({ left: C, top: _, width: b, height: R, angle: T, flipX: S, flipY: I, skewX: y, skewY: O });
        continue;
      }
      const W = this._drawingManagerService.getDrawingOrder(u, l), K = W.indexOf(g), Y = { ...p, zIndex: K === -1 ? W.length - 1 : K }, ve = this._imageIoService.getImageSourceCache(n, s);
      let ne = !1;
      if (ve != null)
        Y.image = ve;
      else {
        if (s === Vt.UUID)
          try {
            Y.url = await this._imageIoService.getImage(n);
          } catch (ke) {
            console.error(ke);
            continue;
          }
        else
          Y.url = n;
        ne = !0;
      }
      if (r.getObject(N))
        continue;
      Y.printable = !0;
      const $ = new We(N, Y);
      ne && this._imageIoService.addImageSourceCache(n, s, $.getNative()), this._drawingManagerService.getDrawingVisible() && (r.addObject($, Te), this._drawingManagerService.getDrawingEditable() && r.attachTransformerTo($), c && tt({ drawingId: c, unitId: u, subUnitId: l }, $, r, this._drawingManagerService), o != null && $.setPrstGeom(o), a != null && $.setSrcRect(a), h.push($));
    }
    return h;
  }
  renderFloatDom(i, r) {
    const {
      transform: e,
      drawingType: t,
      groupId: n,
      unitId: s,
      subUnitId: a,
      drawingId: o,
      isMultiTransform: c,
      transforms: u
    } = i;
    if (t !== q.DRAWING_DOM || !this._drawingManagerService.getDrawingVisible() || e == null)
      return;
    const l = c && u ? u : [e], g = [];
    for (const d of l) {
      const { left: f, top: w, width: h, height: p, angle: C, flipX: _, flipY: b, skewX: R, skewY: T } = d, S = l.indexOf(d), I = L({ unitId: s, subUnitId: a, drawingId: o }, c ? S : void 0), y = r.getObject(I);
      if (y != null) {
        y.transformByState({ left: f, top: w, width: h, height: p, angle: C, flipX: _, flipY: b, skewX: R, skewY: T });
        continue;
      }
      const O = this._drawingManagerService.getDrawingOrder(s, a), M = O.indexOf(o), N = { ...d, zIndex: M === -1 ? O.length - 1 : M };
      if (r.getObject(I))
        continue;
      N.printable = !1;
      const B = new lt(I, N);
      this._drawingManagerService.getDrawingVisible() && (r.addObject(B, Te), this._drawingManagerService.getDrawingEditable() && i.allowTransform !== !1 && r.attachTransformerTo(B), n && tt({ drawingId: n, unitId: s, subUnitId: a }, B, r, this._drawingManagerService), g.push(B));
    }
    return g;
  }
  renderDrawing(i, r) {
    const e = this._drawingManagerService.getDrawingByParam(i);
    if (e != null)
      switch (e.drawingType) {
        case q.DRAWING_IMAGE:
          return this.renderImages(e, r);
      }
  }
  previewImage(i, r, e, t) {
    this._galleryService.open({
      images: [r],
      onOpenChange: (n) => {
        n || this._galleryService.close();
      }
    });
  }
  _adjustImageSize(i, r, e, t) {
    if (i <= e && r <= t)
      return {
        width: i,
        height: r
      };
    const n = e / i, s = t / r, a = Math.min(n, s);
    return {
      width: Math.floor(i * a),
      height: Math.floor(r * a)
    };
  }
};
Ue = wr([
  Ve(0, re),
  Ve(1, ct),
  Ve(2, jt)
], Ue);
var vr = Object.getOwnPropertyDescriptor, _r = (i, r, e, t) => {
  for (var n = t > 1 ? void 0 : t ? vr(r, e) : r, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (n = a(n) || n);
  return n;
}, ae = (i, r) => (e, t) => r(e, t, i);
let je = class extends He {
  constructor(i, r, e, t, n, s, a) {
    super(), this._commandService = i, this._renderManagerService = r, this._drawingManagerService = e, this._dialogService = t, this._imageIoService = n, this._currentUniverService = s, this._drawingRenderService = a, this._initialize();
  }
  dispose() {
    super.dispose();
  }
  _initialize() {
    this._drawingAddListener(), this._commandExecutedListener(), this._imageUpdateListener();
  }
  _commandExecutedListener() {
    this.disposeWithMe(
      this._commandService.onCommandExecuted((i) => {
        if (i.id === ut.id) {
          const r = i.params;
          if (r == null)
            return;
          this._resetImageSize(r);
        }
      })
    );
  }
  _getSceneAndTransformerByDrawingSearch(i) {
    if (i == null)
      return;
    const r = this._renderManagerService.getRenderById(i), e = r == null ? void 0 : r.scene;
    if (e == null)
      return null;
    const t = e.getTransformerByCreate();
    return { scene: e, transformer: t };
  }
  _resetImageSize(i) {
    const r = [], e = [];
    i.forEach((t) => {
      const { unitId: n, subUnitId: s, drawingId: a } = t, o = this._getSceneAndTransformerByDrawingSearch(n);
      if (o == null)
        return;
      const { scene: c } = o, u = L({ unitId: n, subUnitId: s, drawingId: a }), l = c.getObject(u);
      if (l == null)
        return !0;
      const g = this._drawingManagerService.getDrawingByParam(t);
      if (g == null)
        return !0;
      if (g.drawingType !== q.DRAWING_IMAGE)
        return;
      l.resetSize();
      const { width: d, height: f } = l.getNativeSize();
      e.includes(c) === !1 && e.push(c), r.push({
        ...g,
        transform: {
          ...g.transform,
          height: f,
          width: d,
          angle: 0
        },
        srcRect: null,
        prstGeom: null
      });
    }), this._drawingManagerService.featurePluginUpdateNotification(r), e.forEach((t) => {
      t.getTransformerByCreate().refreshControls().changeNotification();
    }), this._commandService.syncExecuteCommand(De.id, i);
  }
  _drawingAddListener() {
    this.disposeWithMe(
      this._drawingManagerService.add$.subscribe((i) => {
        this._insertImages(i);
      })
    );
  }
  _insertImages(i) {
    i.forEach(async (r) => {
      var c;
      const { unitId: e, subUnitId: t } = r, n = this._getSceneAndTransformerByDrawingSearch(e), s = (c = St(this._currentUniverService, e)) == null ? void 0 : c.subUnitId;
      if (n == null || s !== t)
        return;
      const a = this._drawingManagerService.getDrawingByParam(r);
      if (a == null)
        return;
      const o = await this._drawingRenderService.renderImages(a, n.scene);
      if (this._drawingManagerService.refreshTransform([a]), !(o == null || o.length === 0))
        for (const u of o)
          this._addHoverForImage(u), this._addDialogForImage(u);
    });
  }
  _imageUpdateListener() {
    this.disposeWithMe(
      this._drawingManagerService.update$.subscribe((i) => {
        i.forEach((r) => {
          const { unitId: e, subUnitId: t, drawingId: n } = r, s = this._drawingManagerService.getDrawingByParam(r);
          if (s == null)
            return;
          const { transform: a, drawingType: o, srcRect: c, prstGeom: u, source: l, imageSourceType: g } = s;
          if (o !== q.DRAWING_IMAGE)
            return;
          const d = this._getSceneAndTransformerByDrawingSearch(e);
          if (d == null)
            return;
          const { scene: f, transformer: w } = d;
          if (a == null)
            return !0;
          const h = L({ unitId: e, subUnitId: t, drawingId: n }), p = f.getObject(h);
          if (p == null)
            return !0;
          p.setSrcRect(c), p.setPrstGeom(u), l != null && l.length > 0 && (g === Ye.BASE64 || g === Ye.URL) && p.changeSource(l);
        });
      })
    );
  }
  _addHoverForImage(i) {
    this.disposeWithMe(
      fe(
        i.onPointerEnter$.subscribeEvent(() => {
          i.cursor = Ee.GRAB;
        })
      )
    ), this.disposeWithMe(
      fe(
        i.onPointerLeave$.subscribeEvent(() => {
          i.cursor = Ee.DEFAULT;
        })
      )
    );
  }
  _addDialogForImage(i) {
    this.disposeWithMe(
      fe(
        i.onDblclick$.subscribeEvent(() => {
          const r = `${i.oKey}-viewer-dialog`;
          this._drawingRenderService.previewImage(r, i.getNative().src, i.getNativeSize().width, i.getNativeSize().height);
        })
      )
    );
  }
};
je = _r([
  ae(0, ce),
  ae(1, ue),
  ae(2, re),
  ae(3, At),
  ae(4, ct),
  ae(5, Fe),
  ae(6, Ae(Ue))
], je);
var Cr = Object.getOwnPropertyDescriptor, Sr = (i, r, e, t) => {
  for (var n = t > 1 ? void 0 : t ? Cr(r, e) : r, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (n = a(n) || n);
  return n;
}, rt = (i, r) => (e, t) => r(e, t, i);
const br = "UNIVER_DRAWING_UI_PLUGIN";
var Ge;
let nt = (Ge = class extends Pt {
  constructor(i = Qe, r, e) {
    super(), this._config = i, this._injector = r, this._configService = e;
    const { menu: t, ...n } = Nt(
      {},
      Qe,
      this._config
    );
    t && this._configService.setConfig("menu", t, { merge: !0 }), this._configService.setConfig(Yt, n);
  }
  onStarting() {
    this._initDependencies();
  }
  onRendered() {
    this._injector.get(Be), this._injector.get(Ne), this._injector.get(xe), this._injector.get(je);
  }
  _initDependencies() {
    [
      [Ue],
      [Be],
      [Ne],
      [xe],
      [je]
    ].forEach((r) => this._injector.add(r));
  }
}, J(Ge, "pluginName", br), Ge);
nt = Sr([
  rt(1, Ae(Tt)),
  rt(2, Et)
], nt);
const Ir = (i) => {
  const r = A(ce), e = A(te), { alignShow: t } = i, [n, s] = j(D.default), a = [
    {
      label: e.t("image-panel.align.default"),
      value: D.default
    },
    {
      options: [
        {
          label: e.t("image-panel.align.left"),
          value: D.left
        },
        {
          label: e.t("image-panel.align.center"),
          value: D.center
        },
        {
          label: e.t("image-panel.align.right"),
          value: D.right
        }
      ]
    },
    {
      options: [
        {
          label: e.t("image-panel.align.top"),
          value: D.top
        },
        {
          label: e.t("image-panel.align.middle"),
          value: D.middle
        },
        {
          label: e.t("image-panel.align.bottom"),
          value: D.bottom
        }
      ]
    },
    {
      options: [
        {
          label: e.t("image-panel.align.horizon"),
          value: D.horizon
        },
        {
          label: e.t("image-panel.align.vertical"),
          value: D.vertical
        }
      ]
    }
  ];
  function o(c) {
    s(c), r.executeCommand(ze.id, {
      alignType: c
    });
  }
  return /* @__PURE__ */ P(
    "div",
    {
      className: Q("univer-relative univer-w-full", {
        "univer-hidden": !t
      }),
      children: [
        /* @__PURE__ */ v(
          "header",
          {
            className: "univer-text-gray-600 dark:!univer-text-gray-200",
            children: /* @__PURE__ */ v("div", { children: e.t("image-panel.align.title") })
          }
        ),
        /* @__PURE__ */ v("div", { className: "univer-relative univer-mt-2.5 univer-flex univer-h-full", children: /* @__PURE__ */ v(
          "div",
          {
            className: "univer-w-full univer-text-gray-900 dark:!univer-text-white",
            children: /* @__PURE__ */ v(st, { value: n, options: a, onChange: o })
          }
        ) })
      ]
    }
  );
}, yr = (i) => {
  const { arrangeShow: r, drawings: e } = i, t = A(te), n = A(re), [s, a] = j(e);
  we(() => {
    const c = n.focus$.subscribe((u) => {
      a(u);
    });
    return () => {
      c.unsubscribe();
    };
  }, []);
  const o = (c) => {
    const u = s[0].unitId, l = s[0].subUnitId, g = s.map((d) => d.drawingId);
    n.featurePluginOrderUpdateNotification({ unitId: u, subUnitId: l, drawingIds: g, arrangeType: c });
  };
  return /* @__PURE__ */ P(
    "div",
    {
      className: Q("univer-grid univer-gap-2 univer-py-2 univer-text-gray-400", {
        "univer-hidden": !r
      }),
      children: [
        /* @__PURE__ */ v(
          "header",
          {
            className: "univer-text-gray-600 dark:!univer-text-gray-200",
            children: /* @__PURE__ */ v("div", { children: t.t("image-panel.arrange.title") })
          }
        ),
        /* @__PURE__ */ P("div", { className: "univer-grid univer-grid-cols-2 univer-gap-2", children: [
          /* @__PURE__ */ P(se, { onClick: () => {
            o(_e.forward);
          }, children: [
            /* @__PURE__ */ v(wt, {}),
            t.t("image-panel.arrange.forward")
          ] }),
          /* @__PURE__ */ P(se, { onClick: () => {
            o(_e.backward);
          }, children: [
            /* @__PURE__ */ v(mt, {}),
            t.t("image-panel.arrange.backward")
          ] }),
          /* @__PURE__ */ P(se, { onClick: () => {
            o(_e.front);
          }, children: [
            /* @__PURE__ */ v(vt, {}),
            t.t("image-panel.arrange.front")
          ] }),
          /* @__PURE__ */ P(se, { onClick: () => {
            o(_e.back);
          }, children: [
            /* @__PURE__ */ v(dt, {}),
            t.t("image-panel.arrange.back")
          ] })
        ] })
      ]
    }
  );
}, Mr = (i) => {
  const r = A(te), e = A(ue), t = A(re), { hasGroup: n, drawings: s } = i, [a, o] = j(!1), [c, u] = j(!0), [l, g] = j(!0), d = () => {
    const h = t.getFocusDrawings(), { unitId: p, subUnitId: C } = h[0], _ = Bt(10), b = Zt(0, 0, h.map((S) => S.transform || {})), R = {
      unitId: p,
      subUnitId: C,
      drawingId: _,
      drawingType: q.DRAWING_GROUP,
      transform: b
    }, T = h.map((S) => {
      const I = S.transform || { left: 0, top: 0 }, { unitId: y, subUnitId: O, drawingId: M } = S;
      return {
        unitId: y,
        subUnitId: O,
        drawingId: M,
        transform: {
          ...I,
          left: I.left - b.left,
          top: I.top - b.top
        },
        groupId: _
      };
    });
    t.featurePluginGroupUpdateNotification([{
      parent: R,
      children: T
    }]);
  }, f = (h) => {
    if (h.drawingType !== q.DRAWING_GROUP)
      return;
    const { unitId: p, subUnitId: C, drawingId: _, transform: b = { width: 0, height: 0 } } = h;
    if (b == null)
      return;
    const R = t.getDrawingsByGroup({ unitId: p, subUnitId: C, drawingId: _ });
    if (R.length === 0)
      return;
    const T = R.map((S) => {
      const { transform: I } = S, { unitId: y, subUnitId: O, drawingId: M } = S, N = Ft(I || {}, b, b.width || 0, b.height || 0);
      return {
        unitId: y,
        subUnitId: O,
        drawingId: M,
        transform: {
          ...I,
          ...N
        },
        groupId: void 0
      };
    });
    return {
      parent: h,
      children: T
    };
  }, w = () => {
    const p = t.getFocusDrawings().map(
      (C) => f(C)
    ).filter((C) => C != null);
    p.length !== 0 && t.featurePluginUngroupUpdateNotification(p);
  };
  return we(() => {
    const h = s[0];
    if (h == null)
      return;
    const { unitId: p } = h, C = e.getRenderById(p), _ = C == null ? void 0 : C.scene;
    if (_ == null)
      return;
    const b = _.getTransformerByCreate(), R = b.clearControl$.subscribe((S) => {
      S === !0 && o(!1);
    }), T = b.changeStart$.subscribe((S) => {
      const { objects: I } = S, y = Le(I, t), O = y.filter((W) => (W == null ? void 0 : W.drawingType) === q.DRAWING_GROUP);
      let M = !1, N = !1;
      y.length > 1 && (M = !0), O.length > 0 && (N = !0), o(M || N), u(M), g(N);
    });
    return () => {
      T.unsubscribe(), R.unsubscribe();
    };
  }, []), /* @__PURE__ */ P(
    "div",
    {
      className: Q("univer-grid univer-gap-2 univer-py-2 univer-text-gray-400", {
        "univer-hidden": n === !0 && a === !1 || n === !1
      }),
      children: [
        /* @__PURE__ */ v(
          "header",
          {
            className: "univer-text-gray-600 dark:!univer-text-gray-200",
            children: /* @__PURE__ */ v("div", { children: r.t("image-panel.group.title") })
          }
        ),
        /* @__PURE__ */ P("div", { className: "univer-flex univer-items-center univer-justify-center univer-gap-2", children: [
          /* @__PURE__ */ P(
            se,
            {
              className: Q({
                "univer-hidden": !c
              }),
              onClick: d,
              children: [
                /* @__PURE__ */ v(ft, {}),
                r.t("image-panel.group.group")
              ]
            }
          ),
          /* @__PURE__ */ P(
            se,
            {
              className: Q({
                "univer-hidden": !l
              }),
              onClick: w,
              children: [
                /* @__PURE__ */ v(_t, {}),
                r.t("image-panel.group.unGroup")
              ]
            }
          )
        ] })
      ]
    }
  );
}, ye = 20, Me = 20, it = [-360, 360], Re = 300, Rr = (i) => {
  var Ke;
  const r = A(te), e = A(re), t = A(ue), { drawings: n, transformShow: s } = i, a = n[0];
  if (a == null)
    return;
  const o = a.transform;
  if (o == null)
    return;
  const { unitId: c, subUnitId: u, drawingId: l, drawingType: g } = a, d = t.getRenderById(c), f = d == null ? void 0 : d.scene;
  if (f == null)
    return;
  const w = (Ke = f.getEngine()) == null ? void 0 : Ke.activeScene;
  if (w == null)
    return;
  const h = f.getTransformerByCreate(), {
    width: p = 0,
    height: C = 0,
    left: _ = 0,
    top: b = 0,
    angle: R = 0
  } = o, [T, S] = j(p), [I, y] = j(C), [O, M] = j(_), [N, B] = j(b), [W, K] = j(R), [Y, ve] = j(h.keepRatio), ne = (m, E, H, k) => {
    const { width: U, height: X } = w, { ancestorLeft: V, ancestorTop: G } = f;
    let Z = m, ie = E, ge = H, de = k;
    return m + V < 0 && (Z = -V), E + G < 0 && (ie = -G), ge = U - Z - V, ge < ye && (ge = ye), de = X - ie - G, de < Me && (de = Me), m + ge + V > U && (Z = U - H - V), E + de + G > X && (ie = X - k - G), {
      limitLeft: Z,
      limitTop: ie,
      limitWidth: ge,
      limitHeight: de
    };
  }, $ = (m) => {
    const { objects: E } = m, H = Le(E, e);
    if (H.length !== 1)
      return;
    const k = H[0];
    if (k == null)
      return;
    const { transform: U } = k;
    if (U == null)
      return;
    const {
      width: X,
      height: V,
      left: G,
      top: Z,
      angle: ie
    } = U;
    X != null && S(X), V != null && y(V), G != null && M(G), Z != null && B(Z), ie != null && K(ie);
  };
  we(() => {
    const m = [
      h.changeStart$.subscribe((E) => {
        $(E);
      }),
      h.changing$.subscribe((E) => {
        $(E);
      }),
      h.changeEnd$.subscribe((E) => {
        $(E);
      }),
      e.focus$.subscribe((E) => {
        if (E.length !== 1)
          return;
        const H = e.getDrawingByParam(E[0]);
        if (H == null)
          return;
        const k = H.transform;
        if (k == null)
          return;
        const {
          width: U,
          height: X,
          left: V,
          top: G,
          angle: Z
        } = k;
        U != null && S(U), X != null && y(X), V != null && M(V), G != null && B(G), Z != null && K(Z);
      })
    ];
    return () => {
      m.forEach((E) => E.unsubscribe());
    };
  }, []);
  const ke = Ce((m) => {
    if (m == null)
      return;
    const { limitWidth: E, limitHeight: H } = ne(O, N, m, I);
    m = Math.min(m, E);
    const k = { unitId: c, subUnitId: u, drawingId: l, drawingType: g, transform: { width: m } };
    if (Y) {
      let U = m / T * I;
      if (U = Math.max(U, Me), U > H)
        return;
      y(U), k.transform.height = U;
    }
    S(m), e.featurePluginUpdateNotification([k]), h.refreshControls().changeNotification();
  }, Re), bt = Ce((m) => {
    if (m == null)
      return;
    const { limitHeight: E, limitWidth: H } = ne(O, N, T, m);
    m = Math.min(m, E);
    const k = { unitId: c, subUnitId: u, drawingId: l, drawingType: g, transform: { height: m } };
    if (Y) {
      let U = m / I * T;
      if (U = Math.max(U, ye), U > H)
        return;
      S(U), k.transform.width = U;
    }
    y(m), e.featurePluginUpdateNotification([k]), h.refreshControls().changeNotification();
  }, Re), It = Ce((m) => {
    if (m == null)
      return;
    const { limitLeft: E } = ne(m, N, T, I);
    m = E;
    const H = { unitId: c, subUnitId: u, drawingId: l, drawingType: g, transform: { left: m } };
    M(m), e.featurePluginUpdateNotification([H]), h.refreshControls().changeNotification();
  }, Re), yt = Ce((m) => {
    if (m == null)
      return;
    const { limitTop: E } = ne(O, m, T, I);
    m = E;
    const H = { unitId: c, subUnitId: u, drawingId: l, drawingType: g, transform: { top: m } };
    B(m), e.featurePluginUpdateNotification([H]), h.refreshControls().changeNotification();
  }, Re), Mt = (m) => {
    if (m == null)
      return;
    const E = { unitId: c, subUnitId: u, drawingId: l, drawingType: g, transform: { angle: m } };
    K(m), e.featurePluginUpdateNotification([E]), h.refreshControls().changeNotification();
  }, Rt = (m) => {
    ve(m), h.keepRatio = m;
  };
  return /* @__PURE__ */ P(
    "div",
    {
      className: Q("univer-grid univer-gap-2 univer-py-2 univer-text-gray-400", {
        "univer-hidden": !s
      }),
      children: [
        /* @__PURE__ */ v(
          "header",
          {
            className: "univer-text-gray-600 dark:!univer-text-gray-200",
            children: /* @__PURE__ */ v("div", { children: r.t("image-panel.transform.title") })
          }
        ),
        /* @__PURE__ */ P(
          "div",
          {
            className: "univer-grid univer-grid-cols-3 univer-gap-2 [&>div]:univer-grid [&>div]:univer-gap-2",
            children: [
              /* @__PURE__ */ P("div", { children: [
                /* @__PURE__ */ v("span", { children: r.t("image-panel.transform.width") }),
                /* @__PURE__ */ v(
                  he,
                  {
                    precision: 1,
                    value: T,
                    min: ye,
                    onChange: (m) => {
                      ke(m);
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ P("div", { children: [
                /* @__PURE__ */ v("span", { children: r.t("image-panel.transform.height") }),
                /* @__PURE__ */ v(
                  he,
                  {
                    precision: 1,
                    value: I,
                    min: Me,
                    onChange: (m) => {
                      bt(m);
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ P("div", { children: [
                /* @__PURE__ */ v("span", { children: r.t("image-panel.transform.lock") }),
                /* @__PURE__ */ v("div", { className: "univer-text-center", children: /* @__PURE__ */ v($t, { checked: Y, onChange: Rt }) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ P(
          "div",
          {
            className: "univer-grid univer-grid-cols-3 univer-gap-2 [&>div]:univer-grid [&>div]:univer-gap-2",
            children: [
              /* @__PURE__ */ P("div", { children: [
                /* @__PURE__ */ v("span", { children: r.t("image-panel.transform.x") }),
                /* @__PURE__ */ v(he, { precision: 1, value: O, onChange: (m) => {
                  It(m);
                } })
              ] }),
              /* @__PURE__ */ P("div", { children: [
                /* @__PURE__ */ v("span", { children: r.t("image-panel.transform.y") }),
                /* @__PURE__ */ v(he, { precision: 1, value: N, onChange: (m) => {
                  yt(m);
                } })
              ] }),
              /* @__PURE__ */ P("div", { children: [
                /* @__PURE__ */ v("span", { children: r.t("image-panel.transform.rotate") }),
                /* @__PURE__ */ v(
                  he,
                  {
                    precision: 1,
                    value: W,
                    min: it[0],
                    max: it[1],
                    onChange: Mt
                  }
                )
              ] })
            ]
          }
        )
      ]
    }
  );
}, Or = (i) => {
  const r = A(ce), e = A(te), { drawings: t, cropperShow: n } = i;
  if (t[0] == null)
    return;
  const [a, o] = j(x.FREE), c = ot(!1), u = [
    {
      label: e.t("image-panel.crop.mode"),
      value: x.FREE
    },
    {
      label: "1:1",
      value: x.R1_1
    },
    {
      label: "16:9",
      value: x.R16_9
    },
    {
      label: "9:16",
      value: x.R9_16
    },
    {
      label: "5:4",
      value: x.R5_4
    },
    {
      label: "4:5",
      value: x.R4_5
    },
    {
      label: "4:3",
      value: x.R4_3
    },
    {
      label: "3:4",
      value: x.R3_4
    },
    {
      label: "3:2",
      value: x.R3_2
    },
    {
      label: "2:3",
      value: x.R2_3
    }
  ];
  we(() => {
    const d = r.onCommandExecuted((f) => {
      if (f.id === oe.id) {
        const w = f.params;
        w != null && w.isAuto || (c.current = !1);
      }
    });
    return () => {
      d == null || d.dispose();
    };
  }, []);
  function l(d) {
    o(d), c.current && r.executeCommand(Pe.id, {
      cropType: d
    });
  }
  const g = (d) => {
    r.executeCommand(Pe.id, {
      cropType: d
    }), c.current = !0;
  };
  return /* @__PURE__ */ P(
    "div",
    {
      className: Q("univer-grid univer-gap-2 univer-py-2 univer-text-gray-400", {
        "univer-hidden": !n
      }),
      children: [
        /* @__PURE__ */ v(
          "header",
          {
            className: "univer-text-gray-600 dark:!univer-text-gray-200",
            children: /* @__PURE__ */ v("div", { children: e.t("image-panel.crop.title") })
          }
        ),
        /* @__PURE__ */ P("div", { className: "univer-flex univer-items-center univer-justify-center univer-gap-2", children: [
          /* @__PURE__ */ P(se, { onClick: () => {
            g(a);
          }, children: [
            /* @__PURE__ */ v(ht, {}),
            e.t("image-panel.crop.start")
          ] }),
          /* @__PURE__ */ v(st, { value: a, options: u, onChange: l })
        ] })
      ]
    }
  );
}, Ar = (i) => {
  const r = A(re), e = A(ue), t = A(te), { drawings: n, hasArrange: s = !0, hasTransform: a = !0, hasAlign: o = !0, hasCropper: c = !0, hasGroup: u = !0 } = i, l = n[0];
  if (l == null)
    return;
  const { unitId: g } = l, d = e.getRenderById(g), f = d == null ? void 0 : d.scene;
  if (f == null)
    return;
  const w = f.getTransformerByCreate(), [h, p] = j(!0), [C, _] = j(!0), [b, R] = j(!1), [T, S] = j(!0), [I, y] = j(!1);
  return we(() => {
    const O = w.clearControl$.subscribe((B) => {
      B === !0 && (p(!1), _(!1), R(!1), S(!1), y(!0));
    }), M = w.changeStart$.subscribe((B) => {
      const { objects: W } = B, K = Le(W, r);
      K.length === 0 ? (p(!1), _(!1), R(!1), S(!1), y(!0)) : K.length === 1 ? (p(!0), _(!0), R(!1), S(!0), y(!1)) : (p(!0), _(!1), R(!0), S(!1), y(!1));
    }), N = r.focus$.subscribe((B) => {
      B.length === 0 ? (p(!1), _(!1), R(!1), S(!1), y(!0)) : B.length === 1 ? (p(!0), _(!0), R(!1), S(!0), y(!1)) : (p(!0), _(!1), R(!0), S(!1), y(!1));
    });
    return () => {
      M.unsubscribe(), O.unsubscribe(), N.unsubscribe();
    };
  }, []), /* @__PURE__ */ P(Ht, { children: [
    /* @__PURE__ */ v(
      "div",
      {
        className: Q("univer-h-full", {
          "univer-hidden": !I
        }),
        children: /* @__PURE__ */ v("div", { className: "univer-flex univer-h-full univer-items-center univer-justify-center", children: /* @__PURE__ */ v("span", { children: t.t("image-panel.null") }) })
      }
    ),
    /* @__PURE__ */ v(yr, { arrangeShow: s === !0 ? h : !1, drawings: n }),
    /* @__PURE__ */ v(Rr, { transformShow: a === !0 ? C : !1, drawings: n }),
    /* @__PURE__ */ v(Ir, { alignShow: o === !0 ? b : !1, drawings: n }),
    /* @__PURE__ */ v(Or, { cropperShow: c === !0 ? T : !1, drawings: n }),
    /* @__PURE__ */ v(Mr, { hasGroup: u, drawings: n })
  ] });
};
export {
  Pe as AutoImageCropOperation,
  Xt as COMPONENT_IMAGE_POPUP_MENU,
  oe as CloseImageCropOperation,
  Ar as DrawingCommonPanel,
  Ue as DrawingRenderService,
  Ie as ImageCropperObject,
  lr as ImagePopupMenu,
  ut as ImageResetSizeOperation,
  Ze as OpenImageCropOperation,
  ze as SetDrawingAlignOperation,
  nt as UniverDrawingUIPlugin,
  Le as getUpdateParams
};
