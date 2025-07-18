import { jsxs as L, jsx as n, Fragment as nt } from "react/jsx-runtime";
import * as Y from "react";
import w, { useRef as N, useCallback as oe, useState as ne, useContext as J, useEffect as le, createContext as U, useMemo as X, version as T2, cloneElement as Pl, forwardRef as we, isValidElement as Yt, useId as Sl } from "react";
import Ro, { flushSync as Ll, createPortal as F2 } from "react-dom";
const Io = ({ size: t = 24, color: e = "currentColor", ...i }) => Y.createElement("svg", { viewBox: "0 0 24 24", width: t, height: t, stroke: e, strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", ...i }, Y.createElement("path", { d: "M20 6 9 17l-5-5" }));
Io.displayName = "Check";
const Tl = ({ size: t = 24, color: e = "currentColor", ...i }) => Y.createElement("svg", { viewBox: "0 0 24 24", width: t, height: t, stroke: e, strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", ...i }, Y.createElement("path", { d: "m6 9 6 6 6-6" }));
Tl.displayName = "ChevronDown";
const Fl = ({ size: t = 24, color: e = "currentColor", ...i }) => Y.createElement("svg", { viewBox: "0 0 24 24", width: t, height: t, stroke: e, strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", ...i }, Y.createElement("path", { d: "M12 6v6l4 2m6-2c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" }));
Fl.displayName = "Clock";
const zo = ({ size: t = 24, color: e = "currentColor", ...i }) => Y.createElement("svg", { viewBox: "0 0 24 24", width: t, height: t, stroke: e, strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", ...i }, Y.createElement("path", { d: "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }));
zo.displayName = "DotsVertical";
const Nl = ({ size: t = 24, color: e = "currentColor", ...i }) => Y.createElement("svg", { viewBox: "0 0 24 24", width: t, height: t, stroke: e, strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", ...i }, Y.createElement("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" }));
Nl.displayName = "HelpCircle";
const Oo = ({ size: t = 24, color: e = "currentColor", ...i }) => Y.createElement("svg", { viewBox: "0 0 24 24", width: t, height: t, stroke: e, strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", ...i }, Y.createElement("path", { d: "M12 16v-4m0-4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" }));
Oo.displayName = "InfoCircle";
const Kl = ({ size: t = 24, color: e = "currentColor", ...i }) => Y.createElement("svg", { viewBox: "0 0 24 24", width: t, height: t, stroke: e, strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", ...i }, Y.createElement("path", { d: "m21 21-3.5-3.5m2.5-6a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Z" }));
Kl.displayName = "SearchLg";
const Al = ({ size: t = 24, color: e = "currentColor", ...i }) => Y.createElement("svg", { viewBox: "0 0 24 24", width: t, height: t, stroke: e, strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", ...i }, Y.createElement("path", { d: "M20 21c0-1.396 0-2.093-.172-2.661a4 4 0 0 0-2.667-2.667c-.568-.172-1.265-.172-2.661-.172h-5c-1.396 0-2.093 0-2.661.172a4 4 0 0 0-2.667 2.667C4 18.907 4 19.604 4 21M16.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" }));
Al.displayName = "User01";
const Uo = ({ size: t = 24, color: e = "currentColor", ...i }) => Y.createElement("svg", { viewBox: "0 0 24 24", width: t, height: t, stroke: e, strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", ...i }, Y.createElement("path", { d: "M18 6 6 18M6 6l12 12" }));
Uo.displayName = "XClose";
const Bl = ({ size: t = 24, color: e = "currentColor", ...i }) => Y.createElement("svg", { viewBox: "0 0 24 24", width: t, height: t, stroke: e, strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", ...i }, Y.createElement("path", { d: "M17 7 7 17M7 7l10 10" }));
Bl.displayName = "X";
const Rl = "-", N2 = (t) => {
  const e = A2(t), {
    conflictingClassGroups: i,
    conflictingClassGroupModifiers: l
  } = t;
  return {
    getClassGroupId: (a) => {
      const s = a.split(Rl);
      return s[0] === "" && s.length !== 1 && s.shift(), Go(s, e) || K2(a);
    },
    getConflictingClassGroupIds: (a, s) => {
      const d = i[a] || [];
      return s && l[a] ? [...d, ...l[a]] : d;
    }
  };
}, Go = (t, e) => {
  if (t.length === 0)
    return e.classGroupId;
  const i = t[0], l = e.nextPart.get(i), r = l ? Go(t.slice(1), l) : void 0;
  if (r)
    return r;
  if (e.validators.length === 0)
    return;
  const o = t.join(Rl);
  return e.validators.find(({
    validator: a
  }) => a(o))?.classGroupId;
}, _r = /^\[(.+)\]$/, K2 = (t) => {
  if (_r.test(t)) {
    const e = _r.exec(t)[1], i = e?.substring(0, e.indexOf(":"));
    if (i)
      return "arbitrary.." + i;
  }
}, A2 = (t) => {
  const {
    theme: e,
    classGroups: i
  } = t, l = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const r in i)
    ll(i[r], l, r, e);
  return l;
}, ll = (t, e, i, l) => {
  t.forEach((r) => {
    if (typeof r == "string") {
      const o = r === "" ? e : Zr(e, r);
      o.classGroupId = i;
      return;
    }
    if (typeof r == "function") {
      if (B2(r)) {
        ll(r(l), e, i, l);
        return;
      }
      e.validators.push({
        validator: r,
        classGroupId: i
      });
      return;
    }
    Object.entries(r).forEach(([o, a]) => {
      ll(a, Zr(e, o), i, l);
    });
  });
}, Zr = (t, e) => {
  let i = t;
  return e.split(Rl).forEach((l) => {
    i.nextPart.has(l) || i.nextPart.set(l, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), i = i.nextPart.get(l);
  }), i;
}, B2 = (t) => t.isThemeGetter, R2 = (t) => {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, i = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
  const r = (o, a) => {
    i.set(o, a), e++, e > t && (e = 0, l = i, i = /* @__PURE__ */ new Map());
  };
  return {
    get(o) {
      let a = i.get(o);
      if (a !== void 0)
        return a;
      if ((a = l.get(o)) !== void 0)
        return r(o, a), a;
    },
    set(o, a) {
      i.has(o) ? i.set(o, a) : r(o, a);
    }
  };
}, rl = "!", ol = ":", I2 = ol.length, z2 = (t) => {
  const {
    prefix: e,
    experimentalParseClassName: i
  } = t;
  let l = (r) => {
    const o = [];
    let a = 0, s = 0, d = 0, u;
    for (let m = 0; m < r.length; m++) {
      let b = r[m];
      if (a === 0 && s === 0) {
        if (b === ol) {
          o.push(r.slice(d, m)), d = m + I2;
          continue;
        }
        if (b === "/") {
          u = m;
          continue;
        }
      }
      b === "[" ? a++ : b === "]" ? a-- : b === "(" ? s++ : b === ")" && s--;
    }
    const c = o.length === 0 ? r : r.substring(d), f = O2(c), h = f !== c, p = u && u > d ? u - d : void 0;
    return {
      modifiers: o,
      hasImportantModifier: h,
      baseClassName: f,
      maybePostfixModifierPosition: p
    };
  };
  if (e) {
    const r = e + ol, o = l;
    l = (a) => a.startsWith(r) ? o(a.substring(r.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: a,
      maybePostfixModifierPosition: void 0
    };
  }
  if (i) {
    const r = l;
    l = (o) => i({
      className: o,
      parseClassName: r
    });
  }
  return l;
}, O2 = (t) => t.endsWith(rl) ? t.substring(0, t.length - 1) : t.startsWith(rl) ? t.substring(1) : t, U2 = (t) => {
  const e = Object.fromEntries(t.orderSensitiveModifiers.map((l) => [l, !0]));
  return (l) => {
    if (l.length <= 1)
      return l;
    const r = [];
    let o = [];
    return l.forEach((a) => {
      a[0] === "[" || e[a] ? (r.push(...o.sort(), a), o = []) : o.push(a);
    }), r.push(...o.sort()), r;
  };
}, G2 = (t) => ({
  cache: R2(t.cacheSize),
  parseClassName: z2(t),
  sortModifiers: U2(t),
  ...N2(t)
}), W2 = /\s+/, j2 = (t, e) => {
  const {
    parseClassName: i,
    getClassGroupId: l,
    getConflictingClassGroupIds: r,
    sortModifiers: o
  } = e, a = [], s = t.trim().split(W2);
  let d = "";
  for (let u = s.length - 1; u >= 0; u -= 1) {
    const c = s[u], {
      isExternal: f,
      modifiers: h,
      hasImportantModifier: p,
      baseClassName: m,
      maybePostfixModifierPosition: b
    } = i(c);
    if (f) {
      d = c + (d.length > 0 ? " " + d : d);
      continue;
    }
    let v = !!b, g = l(v ? m.substring(0, b) : m);
    if (!g) {
      if (!v) {
        d = c + (d.length > 0 ? " " + d : d);
        continue;
      }
      if (g = l(m), !g) {
        d = c + (d.length > 0 ? " " + d : d);
        continue;
      }
      v = !1;
    }
    const y = o(h).join(":"), $ = p ? y + rl : y, _ = $ + g;
    if (a.includes(_))
      continue;
    a.push(_);
    const Z = r(g, v);
    for (let D = 0; D < Z.length; ++D) {
      const A = Z[D];
      a.push($ + A);
    }
    d = c + (d.length > 0 ? " " + d : d);
  }
  return d;
};
function q2() {
  let t = 0, e, i, l = "";
  for (; t < arguments.length; )
    (e = arguments[t++]) && (i = Wo(e)) && (l && (l += " "), l += i);
  return l;
}
const Wo = (t) => {
  if (typeof t == "string")
    return t;
  let e, i = "";
  for (let l = 0; l < t.length; l++)
    t[l] && (e = Wo(t[l])) && (i && (i += " "), i += e);
  return i;
};
function Er(t, ...e) {
  let i, l, r, o = a;
  function a(d) {
    const u = e.reduce((c, f) => f(c), t());
    return i = G2(u), l = i.cache.get, r = i.cache.set, o = s, s(d);
  }
  function s(d) {
    const u = l(d);
    if (u)
      return u;
    const c = j2(d, i);
    return r(d, c), c;
  }
  return function() {
    return o(q2.apply(null, arguments));
  };
}
const Ee = (t) => {
  const e = (i) => i[t] || [];
  return e.isThemeGetter = !0, e;
}, jo = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, qo = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Y2 = /^\d+\/\d+$/, X2 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, J2 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Q2 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, ed = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, td = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, It = (t) => Y2.test(t), de = (t) => !!t && !Number.isNaN(Number(t)), ut = (t) => !!t && Number.isInteger(Number(t)), Bn = (t) => t.endsWith("%") && de(t.slice(0, -1)), et = (t) => X2.test(t), id = () => !0, nd = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  J2.test(t) && !Q2.test(t)
), Yo = () => !1, ld = (t) => ed.test(t), rd = (t) => td.test(t), od = (t) => !j(t) && !q(t), ad = (t) => ti(t, Qo, Yo), j = (t) => jo.test(t), Mt = (t) => ti(t, ea, nd), Rn = (t) => ti(t, fd, de), Pr = (t) => ti(t, Xo, Yo), sd = (t) => ti(t, Jo, rd), Ni = (t) => ti(t, ta, ld), q = (t) => qo.test(t), oi = (t) => ii(t, ea), dd = (t) => ii(t, pd), Sr = (t) => ii(t, Xo), ud = (t) => ii(t, Qo), cd = (t) => ii(t, Jo), Ki = (t) => ii(t, ta, !0), ti = (t, e, i) => {
  const l = jo.exec(t);
  return l ? l[1] ? e(l[1]) : i(l[2]) : !1;
}, ii = (t, e, i = !1) => {
  const l = qo.exec(t);
  return l ? l[1] ? e(l[1]) : i : !1;
}, Xo = (t) => t === "position" || t === "percentage", Jo = (t) => t === "image" || t === "url", Qo = (t) => t === "length" || t === "size" || t === "bg-size", ea = (t) => t === "length", fd = (t) => t === "number", pd = (t) => t === "family-name", ta = (t) => t === "shadow", Lr = () => {
  const t = Ee("color"), e = Ee("font"), i = Ee("text"), l = Ee("font-weight"), r = Ee("tracking"), o = Ee("leading"), a = Ee("breakpoint"), s = Ee("container"), d = Ee("spacing"), u = Ee("radius"), c = Ee("shadow"), f = Ee("inset-shadow"), h = Ee("text-shadow"), p = Ee("drop-shadow"), m = Ee("blur"), b = Ee("perspective"), v = Ee("aspect"), g = Ee("ease"), y = Ee("animate"), $ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], _ = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], Z = () => [..._(), q, j], D = () => ["auto", "hidden", "clip", "visible", "scroll"], A = () => ["auto", "contain", "none"], M = () => [q, j, d], F = () => [It, "full", "auto", ...M()], K = () => [ut, "none", "subgrid", q, j], C = () => ["auto", {
    span: ["full", ut, q, j]
  }, ut, q, j], P = () => [ut, "auto", q, j], T = () => ["auto", "min", "max", "fr", q, j], E = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], R = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], V = () => ["auto", ...M()], x = () => [It, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...M()], H = () => [t, q, j], I = () => [..._(), Sr, Pr, {
    position: [q, j]
  }], ie = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], S = () => ["auto", "cover", "contain", ud, ad, {
    size: [q, j]
  }], G = () => [Bn, oi, Mt], O = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    q,
    j
  ], te = () => ["", de, oi, Mt], fe = () => ["solid", "dashed", "dotted", "double"], ge = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ae = () => [de, Bn, Sr, Pr], $e = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    m,
    q,
    j
  ], Me = () => ["none", de, q, j], Ze = () => ["none", de, q, j], re = () => [de, q, j], B = () => [It, "full", ...M()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [et],
      breakpoint: [et],
      color: [id],
      container: [et],
      "drop-shadow": [et],
      ease: ["in", "out", "in-out"],
      font: [od],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [et],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [et],
      shadow: [et],
      spacing: ["px", de],
      text: [et],
      "text-shadow": [et],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", It, j, q, v]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [de, j, q, s]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": $()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": $()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: Z()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: D()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": D()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": D()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: A()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": A()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": A()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: F()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": F()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": F()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: F()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: F()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: F()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: F()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: F()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: F()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [ut, "auto", q, j]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [It, "full", "auto", s, ...M()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [de, It, "auto", "initial", "none", j]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", de, q, j]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", de, q, j]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [ut, "first", "last", "none", q, j]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": K()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: C()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": P()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": P()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": K()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: C()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": P()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": P()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": T()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": T()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: M()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": M()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": M()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...E(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...R(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...R()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...E()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...R(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...R(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": E()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...R(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...R()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: M()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: M()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: M()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: M()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: M()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: M()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: M()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: M()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: M()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: V()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: V()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: V()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: V()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: V()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: V()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: V()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: V()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: V()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": M()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": M()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: x()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [s, "screen", ...x()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          s,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...x()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          s,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [a]
          },
          ...x()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...x()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...x()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...x()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", i, oi, Mt]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [l, q, Rn]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Bn, j]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [dd, j, e]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [r, q, j]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [de, "none", q, Rn]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          o,
          ...M()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", q, j]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", q, j]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: H()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: H()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...fe(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [de, "from-font", "auto", q, Mt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: H()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [de, "auto", q, j]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: M()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", q, j]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", q, j]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: I()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ie()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: S()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, ut, q, j],
          radial: ["", q, j],
          conic: [ut, q, j]
        }, cd, sd]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: H()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: G()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: G()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: G()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: H()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: H()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: H()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: O()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": O()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": O()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": O()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": O()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": O()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": O()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": O()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": O()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": O()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": O()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": O()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": O()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": O()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": O()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: te()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": te()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": te()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": te()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": te()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": te()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": te()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": te()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": te()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": te()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": te()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...fe(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...fe(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: H()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": H()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": H()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": H()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": H()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": H()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": H()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": H()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": H()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: H()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...fe(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [de, q, j]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", de, oi, Mt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: H()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          c,
          Ki,
          Ni
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: H()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", f, Ki, Ni]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": H()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: te()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: H()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [de, Mt]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": H()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": te()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": H()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", h, Ki, Ni]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": H()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [de, q, j]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ge(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ge()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [de]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": ae()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": ae()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": H()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": H()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": ae()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": ae()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": H()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": H()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": ae()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": ae()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": H()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": H()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": ae()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": ae()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": H()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": H()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": ae()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": ae()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": H()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": H()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": ae()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": ae()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": H()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": H()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": ae()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": ae()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": H()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": H()
      }],
      "mask-image-radial": [{
        "mask-radial": [q, j]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": ae()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": ae()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": H()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": H()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": _()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [de]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": ae()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": ae()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": H()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": H()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: I()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: ie()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: S()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", q, j]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          q,
          j
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: $e()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [de, q, j]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [de, q, j]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          p,
          Ki,
          Ni
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": H()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", de, q, j]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [de, q, j]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", de, q, j]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [de, q, j]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", de, q, j]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          q,
          j
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": $e()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [de, q, j]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [de, q, j]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", de, q, j]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [de, q, j]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", de, q, j]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [de, q, j]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [de, q, j]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", de, q, j]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": M()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": M()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": M()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", q, j]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [de, "initial", q, j]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", g, q, j]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [de, q, j]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", y, q, j]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [b, q, j]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": Z()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Me()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Me()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Me()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Me()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: Ze()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Ze()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Ze()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Ze()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: re()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": re()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": re()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [q, j, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: Z()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: B()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": B()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": B()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": B()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: H()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: H()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", q, j]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": M()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": M()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": M()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": M()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": M()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": M()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": M()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": M()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": M()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": M()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": M()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": M()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": M()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": M()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": M()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": M()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": M()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": M()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", q, j]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...H()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [de, oi, Mt, Rn]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...H()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, hd = (t, {
  cacheSize: e,
  prefix: i,
  experimentalParseClassName: l,
  extend: r = {},
  override: o = {}
}) => (hi(t, "cacheSize", e), hi(t, "prefix", i), hi(t, "experimentalParseClassName", l), Ai(t.theme, o.theme), Ai(t.classGroups, o.classGroups), Ai(t.conflictingClassGroups, o.conflictingClassGroups), Ai(t.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), hi(t, "orderSensitiveModifiers", o.orderSensitiveModifiers), Bi(t.theme, r.theme), Bi(t.classGroups, r.classGroups), Bi(t.conflictingClassGroups, r.conflictingClassGroups), Bi(t.conflictingClassGroupModifiers, r.conflictingClassGroupModifiers), ia(t, r, "orderSensitiveModifiers"), t), hi = (t, e, i) => {
  i !== void 0 && (t[e] = i);
}, Ai = (t, e) => {
  if (e)
    for (const i in e)
      hi(t, i, e[i]);
}, Bi = (t, e) => {
  if (e)
    for (const i in e)
      ia(t, e, i);
}, ia = (t, e, i) => {
  const l = e[i];
  l !== void 0 && (t[i] = t[i] ? t[i].concat(l) : l);
}, md = (t, ...e) => typeof t == "function" ? Er(Lr, t, ...e) : Er(() => hd(Lr(), t), ...e), gd = md({
  extend: {
    theme: {
      text: [
        "display-xs",
        "display-sm",
        "display-md",
        "display-lg",
        "display-xl",
        "display-2xl"
      ]
    }
  }
}), k = gd;
const ce = typeof document < "u" ? w.useLayoutEffect : () => {
};
function xe(t) {
  const e = N(null);
  return ce(() => {
    e.current = t;
  }, [
    t
  ]), oe((...i) => {
    const l = e.current;
    return l?.(...i);
  }, []);
}
function bd(t) {
  let [e, i] = ne(t), l = N(null), r = xe(() => {
    if (!l.current) return;
    let a = l.current.next();
    if (a.done) {
      l.current = null;
      return;
    }
    e === a.value ? r() : i(a.value);
  });
  ce(() => {
    l.current && r();
  });
  let o = xe((a) => {
    l.current = a(e), r();
  });
  return [
    e,
    o
  ];
}
const tn = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, na = /* @__PURE__ */ w.createContext(tn), vd = /* @__PURE__ */ w.createContext(!1);
let Cd = !!(typeof window < "u" && window.document && window.document.createElement), In = /* @__PURE__ */ new WeakMap();
function Vd(t = !1) {
  let e = J(na), i = N(null);
  if (i.current === null && !t) {
    var l, r;
    let o = (r = w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || r === void 0 || (l = r.ReactCurrentOwner) === null || l === void 0 ? void 0 : l.current;
    if (o) {
      let a = In.get(o);
      a == null ? In.set(o, {
        id: e.current,
        state: o.memoizedState
      }) : o.memoizedState !== a.state && (e.current = a.id, In.delete(o));
    }
    i.current = ++e.current;
  }
  return i.current;
}
function Hd(t) {
  let e = J(na);
  e === tn && !Cd && process.env.NODE_ENV !== "production" && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let i = Vd(!!t), l = e === tn && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${e.prefix}`;
  return t || `${l}-${i}`;
}
function yd(t) {
  let e = w.useId(), [i] = ne(ni()), l = i || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${tn.prefix}`;
  return t || `${l}-${e}`;
}
const wd = typeof w.useId == "function" ? yd : Hd;
function Md() {
  return !1;
}
function xd() {
  return !0;
}
function $d(t) {
  return () => {
  };
}
function ni() {
  return typeof w.useSyncExternalStore == "function" ? w.useSyncExternalStore($d, Md, xd) : J(vd);
}
let Dd = !!(typeof window < "u" && window.document && window.document.createElement), Wt = /* @__PURE__ */ new Map(), mi;
typeof FinalizationRegistry < "u" && (mi = new FinalizationRegistry((t) => {
  Wt.delete(t);
}));
function Le(t) {
  let [e, i] = ne(t), l = N(null), r = wd(e), o = N(null);
  if (mi && mi.register(o, r), Dd) {
    const a = Wt.get(r);
    a && !a.includes(l) ? a.push(l) : Wt.set(r, [
      l
    ]);
  }
  return ce(() => {
    let a = r;
    return () => {
      mi && mi.unregister(o), Wt.delete(a);
    };
  }, [
    r
  ]), le(() => {
    let a = l.current;
    return a && i(a), () => {
      a && (l.current = null);
    };
  }), r;
}
function kd(t, e) {
  if (t === e) return t;
  let i = Wt.get(t);
  if (i)
    return i.forEach((r) => r.current = e), e;
  let l = Wt.get(e);
  return l ? (l.forEach((r) => r.current = t), t) : e;
}
function Et(t = []) {
  let e = Le(), [i, l] = bd(e), r = oe(() => {
    l(function* () {
      yield e, yield document.getElementById(e) ? e : void 0;
    });
  }, [
    e,
    l
  ]);
  return ce(r, [
    e,
    r,
    ...t
  ]), i;
}
function ht(...t) {
  return (...e) => {
    for (let i of t) typeof i == "function" && i(...e);
  };
}
const pe = (t) => {
  var e;
  return (e = t?.ownerDocument) !== null && e !== void 0 ? e : document;
}, Be = (t) => t && "window" in t && t.window === t ? t : pe(t).defaultView || window;
function _d(t) {
  return t !== null && typeof t == "object" && "nodeType" in t && typeof t.nodeType == "number";
}
function Zd(t) {
  return _d(t) && t.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in t;
}
let Ed = !1;
function gn() {
  return Ed;
}
function ye(t, e) {
  if (!gn()) return e && t ? t.contains(e) : !1;
  if (!t || !e) return !1;
  let i = e;
  for (; i !== null; ) {
    if (i === t) return !0;
    i.tagName === "SLOT" && i.assignedSlot ? i = i.assignedSlot.parentNode : Zd(i) ? i = i.host : i = i.parentNode;
  }
  return !1;
}
const Se = (t = document) => {
  var e;
  if (!gn()) return t.activeElement;
  let i = t.activeElement;
  for (; i && "shadowRoot" in i && (!((e = i.shadowRoot) === null || e === void 0) && e.activeElement); ) i = i.shadowRoot.activeElement;
  return i;
};
function he(t) {
  return gn() && t.target.shadowRoot && t.composedPath ? t.composedPath()[0] : t.target;
}
class Pd {
  get currentNode() {
    return this._currentNode;
  }
  set currentNode(e) {
    if (!ye(this.root, e)) throw new Error("Cannot set currentNode to a node that is not contained by the root node.");
    const i = [];
    let l = e, r = e;
    for (this._currentNode = e; l && l !== this.root; ) if (l.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      const a = l, s = this._doc.createTreeWalker(a, this.whatToShow, {
        acceptNode: this._acceptNode
      });
      i.push(s), s.currentNode = r, this._currentSetFor.add(s), l = r = a.host;
    } else l = l.parentNode;
    const o = this._doc.createTreeWalker(this.root, this.whatToShow, {
      acceptNode: this._acceptNode
    });
    i.push(o), o.currentNode = r, this._currentSetFor.add(o), this._walkerStack = i;
  }
  get doc() {
    return this._doc;
  }
  firstChild() {
    let e = this.currentNode, i = this.nextNode();
    return ye(e, i) ? (i && (this.currentNode = i), i) : (this.currentNode = e, null);
  }
  lastChild() {
    let i = this._walkerStack[0].lastChild();
    return i && (this.currentNode = i), i;
  }
  nextNode() {
    const e = this._walkerStack[0].nextNode();
    if (e) {
      if (e.shadowRoot) {
        var i;
        let r;
        if (typeof this.filter == "function" ? r = this.filter(e) : !((i = this.filter) === null || i === void 0) && i.acceptNode && (r = this.filter.acceptNode(e)), r === NodeFilter.FILTER_ACCEPT)
          return this.currentNode = e, e;
        let o = this.nextNode();
        return o && (this.currentNode = o), o;
      }
      return e && (this.currentNode = e), e;
    } else if (this._walkerStack.length > 1) {
      this._walkerStack.shift();
      let l = this.nextNode();
      return l && (this.currentNode = l), l;
    } else return null;
  }
  previousNode() {
    const e = this._walkerStack[0];
    if (e.currentNode === e.root) {
      if (this._currentSetFor.has(e))
        if (this._currentSetFor.delete(e), this._walkerStack.length > 1) {
          this._walkerStack.shift();
          let r = this.previousNode();
          return r && (this.currentNode = r), r;
        } else return null;
      return null;
    }
    const i = e.previousNode();
    if (i) {
      if (i.shadowRoot) {
        var l;
        let o;
        if (typeof this.filter == "function" ? o = this.filter(i) : !((l = this.filter) === null || l === void 0) && l.acceptNode && (o = this.filter.acceptNode(i)), o === NodeFilter.FILTER_ACCEPT)
          return i && (this.currentNode = i), i;
        let a = this.lastChild();
        return a && (this.currentNode = a), a;
      }
      return i && (this.currentNode = i), i;
    } else if (this._walkerStack.length > 1) {
      this._walkerStack.shift();
      let r = this.previousNode();
      return r && (this.currentNode = r), r;
    } else return null;
  }
  /**
   * @deprecated
   */
  nextSibling() {
    return null;
  }
  /**
   * @deprecated
   */
  previousSibling() {
    return null;
  }
  /**
   * @deprecated
   */
  parentNode() {
    return null;
  }
  constructor(e, i, l, r) {
    this._walkerStack = [], this._currentSetFor = /* @__PURE__ */ new Set(), this._acceptNode = (a) => {
      if (a.nodeType === Node.ELEMENT_NODE) {
        const d = a.shadowRoot;
        if (d) {
          const u = this._doc.createTreeWalker(d, this.whatToShow, {
            acceptNode: this._acceptNode
          });
          return this._walkerStack.unshift(u), NodeFilter.FILTER_ACCEPT;
        } else {
          var s;
          if (typeof this.filter == "function") return this.filter(a);
          if (!((s = this.filter) === null || s === void 0) && s.acceptNode) return this.filter.acceptNode(a);
          if (this.filter === null) return NodeFilter.FILTER_ACCEPT;
        }
      }
      return NodeFilter.FILTER_SKIP;
    }, this._doc = e, this.root = i, this.filter = r ?? null, this.whatToShow = l ?? NodeFilter.SHOW_ALL, this._currentNode = i, this._walkerStack.unshift(e.createTreeWalker(i, l, this._acceptNode));
    const o = i.shadowRoot;
    if (o) {
      const a = this._doc.createTreeWalker(o, this.whatToShow, {
        acceptNode: this._acceptNode
      });
      this._walkerStack.unshift(a);
    }
  }
}
function Sd(t, e, i, l) {
  return gn() ? new Pd(t, e, i, l) : t.createTreeWalker(e, i, l);
}
function la(t) {
  var e, i, l = "";
  if (typeof t == "string" || typeof t == "number") l += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var r = t.length;
    for (e = 0; e < r; e++) t[e] && (i = la(t[e])) && (l && (l += " "), l += i);
  } else for (i in t) t[i] && (l && (l += " "), l += i);
  return l;
}
function Ld() {
  for (var t, e, i = 0, l = "", r = arguments.length; i < r; i++) (t = arguments[i]) && (e = la(t)) && (l && (l += " "), l += e);
  return l;
}
function Q(...t) {
  let e = {
    ...t[0]
  };
  for (let i = 1; i < t.length; i++) {
    let l = t[i];
    for (let r in l) {
      let o = e[r], a = l[r];
      typeof o == "function" && typeof a == "function" && // This is a lot faster than a regex.
      r[0] === "o" && r[1] === "n" && r.charCodeAt(2) >= /* 'A' */
      65 && r.charCodeAt(2) <= /* 'Z' */
      90 ? e[r] = ht(o, a) : (r === "className" || r === "UNSAFE_className") && typeof o == "string" && typeof a == "string" ? e[r] = Ld(o, a) : r === "id" && o && a ? e.id = kd(o, a) : e[r] = a !== void 0 ? a : o;
    }
  }
  return e;
}
function _i(...t) {
  return t.length === 1 && t[0] ? t[0] : (e) => {
    let i = !1;
    const l = t.map((r) => {
      const o = Tr(r, e);
      return i || (i = typeof o == "function"), o;
    });
    if (i) return () => {
      l.forEach((r, o) => {
        typeof r == "function" ? r() : Tr(t[o], null);
      });
    };
  };
}
function Tr(t, e) {
  if (typeof t == "function") return t(e);
  t != null && (t.current = e);
}
const Td = /* @__PURE__ */ new Set([
  "id"
]), Fd = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), Nd = /* @__PURE__ */ new Set([
  "href",
  "hrefLang",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), Kd = /^(data-.*)$/;
function me(t, e = {}) {
  let { labelable: i, isLink: l, propNames: r } = e, o = {};
  for (const a in t) Object.prototype.hasOwnProperty.call(t, a) && (Td.has(a) || i && Fd.has(a) || l && Nd.has(a) || r?.has(a) || Kd.test(a)) && (o[a] = t[a]);
  return o;
}
function ze(t) {
  if (Ad()) t.focus({
    preventScroll: !0
  });
  else {
    let e = Bd(t);
    t.focus(), Rd(e);
  }
}
let Ri = null;
function Ad() {
  if (Ri == null) {
    Ri = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return Ri = !0, !0;
        }
      });
    } catch {
    }
  }
  return Ri;
}
function Bd(t) {
  let e = t.parentNode, i = [], l = document.scrollingElement || document.documentElement;
  for (; e instanceof HTMLElement && e !== l; )
    (e.offsetHeight < e.scrollHeight || e.offsetWidth < e.scrollWidth) && i.push({
      element: e,
      scrollTop: e.scrollTop,
      scrollLeft: e.scrollLeft
    }), e = e.parentNode;
  return l instanceof HTMLElement && i.push({
    element: l,
    scrollTop: l.scrollTop,
    scrollLeft: l.scrollLeft
  }), i;
}
function Rd(t) {
  for (let { element: e, scrollTop: i, scrollLeft: l } of t)
    e.scrollTop = i, e.scrollLeft = l;
}
function bn(t) {
  var e;
  return typeof window > "u" || window.navigator == null ? !1 : ((e = window.navigator.userAgentData) === null || e === void 0 ? void 0 : e.brands.some((i) => t.test(i.brand))) || t.test(window.navigator.userAgent);
}
function Il(t) {
  var e;
  return typeof window < "u" && window.navigator != null ? t.test(((e = window.navigator.userAgentData) === null || e === void 0 ? void 0 : e.platform) || window.navigator.platform) : !1;
}
function lt(t) {
  if (process.env.NODE_ENV === "test") return t;
  let e = null;
  return () => (e == null && (e = t()), e);
}
const mt = lt(function() {
  return Il(/^Mac/i);
}), Id = lt(function() {
  return Il(/^iPhone/i);
}), ra = lt(function() {
  return Il(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  mt() && navigator.maxTouchPoints > 1;
}), vn = lt(function() {
  return Id() || ra();
}), Xi = lt(function() {
  return mt() || vn();
}), zl = lt(function() {
  return bn(/AppleWebKit/i) && !oa();
}), oa = lt(function() {
  return bn(/Chrome/i);
}), Ol = lt(function() {
  return bn(/Android/i);
}), zd = lt(function() {
  return bn(/Firefox/i);
}), Od = /* @__PURE__ */ U({
  isNative: !0,
  open: Wd,
  useHref: (t) => t
});
function li() {
  return J(Od);
}
function Ud(t, e) {
  let i = t.getAttribute("target");
  return (!i || i === "_self") && t.origin === location.origin && !t.hasAttribute("download") && !e.metaKey && // open in new tab (mac)
  !e.ctrlKey && // open in new tab (windows)
  !e.altKey && // download
  !e.shiftKey;
}
function Pt(t, e, i = !0) {
  var l, r;
  let { metaKey: o, ctrlKey: a, altKey: s, shiftKey: d } = e;
  zd() && (!((r = window.event) === null || r === void 0 || (l = r.type) === null || l === void 0) && l.startsWith("key")) && t.target === "_blank" && (mt() ? o = !0 : a = !0);
  let u = zl() && mt() && !ra() && process.env.NODE_ENV !== "test" ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey: o,
    ctrlKey: a,
    altKey: s,
    shiftKey: d
  }) : new MouseEvent("click", {
    metaKey: o,
    ctrlKey: a,
    altKey: s,
    shiftKey: d,
    bubbles: !0,
    cancelable: !0
  });
  Pt.isOpening = i, ze(t), t.dispatchEvent(u), Pt.isOpening = !1;
}
Pt.isOpening = !1;
function Gd(t, e) {
  if (t instanceof HTMLAnchorElement) e(t);
  else if (t.hasAttribute("data-href")) {
    let i = document.createElement("a");
    i.href = t.getAttribute("data-href"), t.hasAttribute("data-target") && (i.target = t.getAttribute("data-target")), t.hasAttribute("data-rel") && (i.rel = t.getAttribute("data-rel")), t.hasAttribute("data-download") && (i.download = t.getAttribute("data-download")), t.hasAttribute("data-ping") && (i.ping = t.getAttribute("data-ping")), t.hasAttribute("data-referrer-policy") && (i.referrerPolicy = t.getAttribute("data-referrer-policy")), t.appendChild(i), e(i), t.removeChild(i);
  }
}
function Wd(t, e) {
  Gd(t, (i) => Pt(i, e));
}
function Ul(t) {
  let e = li();
  var i;
  const l = e.useHref((i = t?.href) !== null && i !== void 0 ? i : "");
  return {
    href: t?.href ? l : void 0,
    target: t?.target,
    rel: t?.rel,
    download: t?.download,
    ping: t?.ping,
    referrerPolicy: t?.referrerPolicy
  };
}
let ft = /* @__PURE__ */ new Map(), al = /* @__PURE__ */ new Set();
function Fr() {
  if (typeof window > "u") return;
  function t(l) {
    return "propertyName" in l;
  }
  let e = (l) => {
    if (!t(l) || !l.target) return;
    let r = ft.get(l.target);
    r || (r = /* @__PURE__ */ new Set(), ft.set(l.target, r), l.target.addEventListener("transitioncancel", i, {
      once: !0
    })), r.add(l.propertyName);
  }, i = (l) => {
    if (!t(l) || !l.target) return;
    let r = ft.get(l.target);
    if (r && (r.delete(l.propertyName), r.size === 0 && (l.target.removeEventListener("transitioncancel", i), ft.delete(l.target)), ft.size === 0)) {
      for (let o of al) o();
      al.clear();
    }
  };
  document.body.addEventListener("transitionrun", e), document.body.addEventListener("transitionend", i);
}
typeof document < "u" && (document.readyState !== "loading" ? Fr() : document.addEventListener("DOMContentLoaded", Fr));
function jd() {
  for (const [t] of ft)
    "isConnected" in t && !t.isConnected && ft.delete(t);
}
function aa(t) {
  requestAnimationFrame(() => {
    jd(), ft.size === 0 ? t() : al.add(t);
  });
}
function Tt() {
  let t = N(/* @__PURE__ */ new Map()), e = oe((r, o, a, s) => {
    let d = s?.once ? (...u) => {
      t.current.delete(a), a(...u);
    } : a;
    t.current.set(a, {
      type: o,
      eventTarget: r,
      fn: d,
      options: s
    }), r.addEventListener(o, d, s);
  }, []), i = oe((r, o, a, s) => {
    var d;
    let u = ((d = t.current.get(a)) === null || d === void 0 ? void 0 : d.fn) || a;
    r.removeEventListener(o, u, s), t.current.delete(a);
  }, []), l = oe(() => {
    t.current.forEach((r, o) => {
      i(r.eventTarget, r.type, o, r.options);
    });
  }, [
    i
  ]);
  return le(() => l, [
    l
  ]), {
    addGlobalListener: e,
    removeGlobalListener: i,
    removeAllGlobalListeners: l
  };
}
function nn(t, e) {
  let { id: i, "aria-label": l, "aria-labelledby": r } = t;
  return i = Le(i), r && l ? r = [
    .../* @__PURE__ */ new Set([
      i,
      ...r.trim().split(/\s+/)
    ])
  ].join(" ") : r && (r = r.trim().split(/\s+/).join(" ")), !l && !r && e && (l = e), {
    id: i,
    "aria-label": l,
    "aria-labelledby": r
  };
}
function Xe(t) {
  const e = N(null), i = N(void 0), l = oe((r) => {
    if (typeof t == "function") {
      const o = t, a = o(r);
      return () => {
        typeof a == "function" ? a() : o(null);
      };
    } else if (t)
      return t.current = r, () => {
        t.current = null;
      };
  }, [
    t
  ]);
  return X(() => ({
    get current() {
      return e.current;
    },
    set current(r) {
      e.current = r, i.current && (i.current(), i.current = void 0), r != null && (i.current = l(r));
    }
  }), [
    l
  ]);
}
function qd(t, e) {
  const i = N(!0), l = N(null);
  le(() => (i.current = !0, () => {
    i.current = !1;
  }), []), le(() => {
    let r = l.current;
    i.current ? i.current = !1 : (!r || e.some((o, a) => !Object.is(o, r[a]))) && t(), l.current = e;
  }, e);
}
function Nr(t, e) {
  const i = N(!0), l = N(null);
  ce(() => (i.current = !0, () => {
    i.current = !1;
  }), []), ce(() => {
    i.current ? i.current = !1 : (!l.current || e.some((r, o) => !Object.is(r, l[o]))) && t(), l.current = e;
  }, e);
}
function Yd() {
  return typeof window.ResizeObserver < "u";
}
function Vi(t) {
  const { ref: e, box: i, onResize: l } = t;
  le(() => {
    let r = e?.current;
    if (r)
      if (Yd()) {
        const o = new window.ResizeObserver((a) => {
          a.length && l();
        });
        return o.observe(r, {
          box: i
        }), () => {
          r && o.unobserve(r);
        };
      } else
        return window.addEventListener("resize", l, !1), () => {
          window.removeEventListener("resize", l, !1);
        };
  }, [
    l,
    e,
    i
  ]);
}
function Gl(t, e) {
  ce(() => {
    if (t && t.ref && e)
      return t.ref.current = e.current, () => {
        t.ref && (t.ref.current = null);
      };
  });
}
function Hi(t, e) {
  if (!t) return !1;
  let i = window.getComputedStyle(t), l = /(auto|scroll)/.test(i.overflow + i.overflowX + i.overflowY);
  return l && e && (l = t.scrollHeight !== t.clientHeight || t.scrollWidth !== t.clientWidth), l;
}
function Wl(t, e) {
  let i = t;
  for (Hi(i, e) && (i = i.parentElement); i && !Hi(i, e); ) i = i.parentElement;
  return i || document.scrollingElement || document.documentElement;
}
function Xd(t, e) {
  const i = [];
  for (; t && t !== document.documentElement; )
    Hi(t, e) && i.push(t), t = t.parentElement;
  return i;
}
let Jd = 0;
const zn = /* @__PURE__ */ new Map();
function Qd(t) {
  let [e, i] = ne();
  return ce(() => {
    if (!t) return;
    let l = zn.get(t);
    if (l)
      i(l.element.id);
    else {
      let r = `react-aria-description-${Jd++}`;
      i(r);
      let o = document.createElement("div");
      o.id = r, o.style.display = "none", o.textContent = t, document.body.appendChild(o), l = {
        refCount: 0,
        element: o
      }, zn.set(t, l);
    }
    return l.refCount++, () => {
      l && --l.refCount === 0 && (l.element.remove(), zn.delete(t));
    };
  }, [
    t
  ]), {
    "aria-describedby": t ? e : void 0
  };
}
function Ii(t, e, i, l) {
  let r = xe(i), o = i == null;
  le(() => {
    if (o || !t.current) return;
    let a = t.current;
    return a.addEventListener(e, r, l), () => {
      a.removeEventListener(e, r, l);
    };
  }, [
    t,
    e,
    l,
    o,
    r
  ]);
}
function sa(t, e) {
  let i = Kr(t, e, "left"), l = Kr(t, e, "top"), r = e.offsetWidth, o = e.offsetHeight, a = t.scrollLeft, s = t.scrollTop, { borderTopWidth: d, borderLeftWidth: u, scrollPaddingTop: c, scrollPaddingRight: f, scrollPaddingBottom: h, scrollPaddingLeft: p } = getComputedStyle(t), m = a + parseInt(u, 10), b = s + parseInt(d, 10), v = m + t.clientWidth, g = b + t.clientHeight, y = parseInt(c, 10) || 0, $ = parseInt(h, 10) || 0, _ = parseInt(f, 10) || 0, Z = parseInt(p, 10) || 0;
  i <= a + Z ? a = i - parseInt(u, 10) - Z : i + r > v - _ && (a += i + r - v + _), l <= b + y ? s = l - parseInt(d, 10) - y : l + o > g - $ && (s += l + o - g + $), t.scrollLeft = a, t.scrollTop = s;
}
function Kr(t, e, i) {
  const l = i === "left" ? "offsetLeft" : "offsetTop";
  let r = 0;
  for (; e.offsetParent && (r += e[l], e.offsetParent !== t); ) {
    if (e.offsetParent.contains(t)) {
      r -= t[l];
      break;
    }
    e = e.offsetParent;
  }
  return r;
}
function Ar(t, e) {
  if (t && document.contains(t)) {
    let a = document.scrollingElement || document.documentElement;
    if (window.getComputedStyle(a).overflow === "hidden") {
      let d = Xd(t);
      for (let u of d) sa(u, t);
    } else {
      var i;
      let { left: d, top: u } = t.getBoundingClientRect();
      t == null || (i = t.scrollIntoView) === null || i === void 0 || i.call(t, {
        block: "nearest"
      });
      let { left: c, top: f } = t.getBoundingClientRect();
      if (Math.abs(d - c) > 1 || Math.abs(u - f) > 1) {
        var l, r, o;
        e == null || (r = e.containingElement) === null || r === void 0 || (l = r.scrollIntoView) === null || l === void 0 || l.call(r, {
          block: "center",
          inline: "center"
        }), (o = t.scrollIntoView) === null || o === void 0 || o.call(t, {
          block: "nearest"
        });
      }
    }
  }
}
function sl(t) {
  return t.mozInputSource === 0 && t.isTrusted ? !0 : Ol() && t.pointerType ? t.type === "click" && t.buttons === 1 : t.detail === 0 && !t.pointerType;
}
function e0(t) {
  return !Ol() && t.width === 0 && t.height === 0 || t.width === 1 && t.height === 1 && t.pressure === 0 && t.detail === 0 && t.pointerType === "mouse";
}
function Cn(t, e, i) {
  let l = N(e), r = xe(() => {
    i && i(l.current);
  });
  le(() => {
    var o;
    let a = t == null || (o = t.current) === null || o === void 0 ? void 0 : o.form;
    return a?.addEventListener("reset", r), () => {
      a?.removeEventListener("reset", r);
    };
  }, [
    t,
    r
  ]);
}
function t0(t, e) {
  let { collection: i, onLoadMore: l, scrollOffset: r = 1 } = t, o = N(null), a = xe((s) => {
    for (let d of s)
      d.isIntersecting && l && l();
  });
  ce(() => (e.current && (o.current = new IntersectionObserver(a, {
    root: Wl(e?.current),
    rootMargin: `0px ${100 * r}% ${100 * r}% ${100 * r}%`
  }), o.current.observe(e.current)), () => {
    o.current && o.current.disconnect();
  }), [
    i,
    a,
    e,
    r
  ]);
}
function i0(t) {
  const e = T2.split(".");
  return parseInt(e[0], 10) >= 19 ? t : t ? "true" : void 0;
}
const n0 = "react-aria-clear-focus", l0 = "react-aria-focus";
function Ot(t) {
  return mt() ? t.metaKey : t.ctrlKey;
}
function da(t, e = !0) {
  let [i, l] = ne(!0), r = i && e;
  return ce(() => {
    if (r && t.current && "getAnimations" in t.current)
      for (let o of t.current.getAnimations()) o instanceof CSSTransition && o.cancel();
  }, [
    t,
    r
  ]), ca(t, r, oe(() => l(!1), [])), r;
}
function ua(t, e) {
  let [i, l] = ne(e ? "open" : "closed");
  switch (i) {
    case "open":
      e || l("exiting");
      break;
    case "closed":
    case "exiting":
      e && l("open");
      break;
  }
  let r = i === "exiting";
  return ca(t, r, oe(() => {
    l((o) => o === "exiting" ? "closed" : o);
  }, [])), r;
}
function ca(t, e, i) {
  ce(() => {
    if (e && t.current) {
      if (!("getAnimations" in t.current)) {
        i();
        return;
      }
      let l = t.current.getAnimations();
      if (l.length === 0) {
        i();
        return;
      }
      let r = !1;
      return Promise.all(l.map((o) => o.finished)).then(() => {
        r || Ll(() => {
          i();
        });
      }).catch(() => {
      }), () => {
        r = !0;
      };
    }
  }, [
    t,
    e,
    i
  ]);
}
const jl = [
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable^="false"])'
], r0 = jl.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
jl.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const o0 = jl.join(':not([hidden]):not([tabindex="-1"]),');
function fa(t) {
  return t.matches(r0);
}
function a0(t) {
  return t.matches(o0);
}
function rt(t, e, i) {
  let [l, r] = ne(t || e), o = N(t !== void 0), a = t !== void 0;
  le(() => {
    let u = o.current;
    u !== a && process.env.NODE_ENV !== "production" && console.warn(`WARN: A component changed from ${u ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}.`), o.current = a;
  }, [
    a
  ]);
  let s = a ? t : l, d = oe((u, ...c) => {
    let f = (h, ...p) => {
      i && (Object.is(s, h) || i(h, ...p)), a || (s = h);
    };
    typeof u == "function" ? (process.env.NODE_ENV !== "production" && console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"), r((p, ...m) => {
      let b = u(a ? s : p, ...m);
      return f(b, ...c), a ? p : b;
    })) : (a || r(u), f(u, ...c));
  }, [
    a,
    s,
    i
  ]);
  return [
    s,
    d
  ];
}
function Xt(t, e = -1 / 0, i = 1 / 0) {
  return Math.min(Math.max(t, e), i);
}
function zi(t, e) {
  let i = t, l = e.toString(), r = l.indexOf("."), o = r >= 0 ? l.length - r : 0;
  if (o > 0) {
    let a = Math.pow(10, o);
    i = Math.round(i * a) / a;
  }
  return i;
}
function ai(t, e, i, l) {
  e = Number(e), i = Number(i);
  let r = (t - (isNaN(e) ? 0 : e)) % l, o = zi(Math.abs(r) * 2 >= l ? t + Math.sign(r) * (l - Math.abs(r)) : t - r, l);
  return isNaN(e) ? !isNaN(i) && o > i && (o = Math.floor(zi(i / l, l)) * l) : o < e ? o = e : !isNaN(i) && o > i && (o = e + Math.floor(zi((i - e) / l, l)) * l), o = zi(o, l), o;
}
function ql(t) {
  let e = t;
  return e.nativeEvent = t, e.isDefaultPrevented = () => e.defaultPrevented, e.isPropagationStopped = () => e.cancelBubble, e.persist = () => {
  }, e;
}
function pa(t, e) {
  Object.defineProperty(t, "target", {
    value: e
  }), Object.defineProperty(t, "currentTarget", {
    value: e
  });
}
function ha(t) {
  let e = N({
    isFocused: !1,
    observer: null
  });
  ce(() => {
    const l = e.current;
    return () => {
      l.observer && (l.observer.disconnect(), l.observer = null);
    };
  }, []);
  let i = xe((l) => {
    t?.(l);
  });
  return oe((l) => {
    if (l.target instanceof HTMLButtonElement || l.target instanceof HTMLInputElement || l.target instanceof HTMLTextAreaElement || l.target instanceof HTMLSelectElement) {
      e.current.isFocused = !0;
      let r = l.target, o = (a) => {
        if (e.current.isFocused = !1, r.disabled) {
          let s = ql(a);
          i(s);
        }
        e.current.observer && (e.current.observer.disconnect(), e.current.observer = null);
      };
      r.addEventListener("focusout", o, {
        once: !0
      }), e.current.observer = new MutationObserver(() => {
        if (e.current.isFocused && r.disabled) {
          var a;
          (a = e.current.observer) === null || a === void 0 || a.disconnect();
          let s = r === document.activeElement ? null : document.activeElement;
          r.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: s
          })), r.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: s
          }));
        }
      }), e.current.observer.observe(r, {
        attributes: !0,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    i
  ]);
}
let ln = !1;
function Br(t) {
  for (; t && !fa(t); ) t = t.parentElement;
  let e = Be(t), i = e.document.activeElement;
  if (!i || i === t) return;
  ln = !0;
  let l = !1, r = (c) => {
    (c.target === i || l) && c.stopImmediatePropagation();
  }, o = (c) => {
    (c.target === i || l) && (c.stopImmediatePropagation(), !t && !l && (l = !0, ze(i), d()));
  }, a = (c) => {
    (c.target === t || l) && c.stopImmediatePropagation();
  }, s = (c) => {
    (c.target === t || l) && (c.stopImmediatePropagation(), l || (l = !0, ze(i), d()));
  };
  e.addEventListener("blur", r, !0), e.addEventListener("focusout", o, !0), e.addEventListener("focusin", s, !0), e.addEventListener("focus", a, !0);
  let d = () => {
    cancelAnimationFrame(u), e.removeEventListener("blur", r, !0), e.removeEventListener("focusout", o, !0), e.removeEventListener("focusin", s, !0), e.removeEventListener("focus", a, !0), ln = !1, l = !1;
  }, u = requestAnimationFrame(d);
  return d;
}
let Gt = "default", dl = "", Ji = /* @__PURE__ */ new WeakMap();
function ul(t) {
  if (vn()) {
    if (Gt === "default") {
      const e = pe(t);
      dl = e.documentElement.style.webkitUserSelect, e.documentElement.style.webkitUserSelect = "none";
    }
    Gt = "disabled";
  } else if (t instanceof HTMLElement || t instanceof SVGElement) {
    let e = "userSelect" in t.style ? "userSelect" : "webkitUserSelect";
    Ji.set(t, t.style[e]), t.style[e] = "none";
  }
}
function Qi(t) {
  if (vn()) {
    if (Gt !== "disabled") return;
    Gt = "restoring", setTimeout(() => {
      aa(() => {
        if (Gt === "restoring") {
          const e = pe(t);
          e.documentElement.style.webkitUserSelect === "none" && (e.documentElement.style.webkitUserSelect = dl || ""), dl = "", Gt = "default";
        }
      });
    }, 300);
  } else if ((t instanceof HTMLElement || t instanceof SVGElement) && t && Ji.has(t)) {
    let e = Ji.get(t), i = "userSelect" in t.style ? "userSelect" : "webkitUserSelect";
    t.style[i] === "none" && (t.style[i] = e), t.getAttribute("style") === "" && t.removeAttribute("style"), Ji.delete(t);
  }
}
const yi = w.createContext({
  register: () => {
  }
});
yi.displayName = "PressResponderContext";
function s0(t, e) {
  return e.get ? e.get.call(t) : e.value;
}
function ma(t, e, i) {
  if (!e.has(t)) throw new TypeError("attempted to " + i + " private field on non-instance");
  return e.get(t);
}
function d0(t, e) {
  var i = ma(t, e, "get");
  return s0(t, i);
}
function u0(t, e) {
  if (e.has(t))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function c0(t, e, i) {
  u0(t, e), e.set(t, i);
}
function f0(t, e, i) {
  if (e.set) e.set.call(t, i);
  else {
    if (!e.writable)
      throw new TypeError("attempted to set read only private field");
    e.value = i;
  }
}
function Rr(t, e, i) {
  var l = ma(t, e, "set");
  return f0(t, l, i), i;
}
function p0(t) {
  let e = J(yi);
  if (e) {
    let { register: i, ...l } = e;
    t = Q(l, t), i();
  }
  return Gl(e, t.ref), t;
}
var Oi = /* @__PURE__ */ new WeakMap();
class Ui {
  continuePropagation() {
    Rr(this, Oi, !1);
  }
  get shouldStopPropagation() {
    return d0(this, Oi);
  }
  constructor(e, i, l, r) {
    c0(this, Oi, {
      writable: !0,
      value: void 0
    }), Rr(this, Oi, !0);
    var o;
    let a = (o = r?.target) !== null && o !== void 0 ? o : l.currentTarget;
    const s = a?.getBoundingClientRect();
    let d, u = 0, c, f = null;
    l.clientX != null && l.clientY != null && (c = l.clientX, f = l.clientY), s && (c != null && f != null ? (d = c - s.left, u = f - s.top) : (d = s.width / 2, u = s.height / 2)), this.type = e, this.pointerType = i, this.target = l.currentTarget, this.shiftKey = l.shiftKey, this.metaKey = l.metaKey, this.ctrlKey = l.ctrlKey, this.altKey = l.altKey, this.x = d, this.y = u;
  }
}
const Ir = Symbol("linkClicked"), zr = "react-aria-pressable-style", Or = "data-react-aria-pressable";
function gt(t) {
  let { onPress: e, onPressChange: i, onPressStart: l, onPressEnd: r, onPressUp: o, onClick: a, isDisabled: s, isPressed: d, preventFocusOnPress: u, shouldCancelOnPointerExit: c, allowTextSelectionOnPress: f, ref: h, ...p } = p0(t), [m, b] = ne(!1), v = N({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null,
    disposables: []
  }), { addGlobalListener: g, removeAllGlobalListeners: y } = Tt(), $ = xe((C, P) => {
    let T = v.current;
    if (s || T.didFirePressStart) return !1;
    let E = !0;
    if (T.isTriggeringEvent = !0, l) {
      let R = new Ui("pressstart", P, C);
      l(R), E = R.shouldStopPropagation;
    }
    return i && i(!0), T.isTriggeringEvent = !1, T.didFirePressStart = !0, b(!0), E;
  }), _ = xe((C, P, T = !0) => {
    let E = v.current;
    if (!E.didFirePressStart) return !1;
    E.didFirePressStart = !1, E.isTriggeringEvent = !0;
    let R = !0;
    if (r) {
      let V = new Ui("pressend", P, C);
      r(V), R = V.shouldStopPropagation;
    }
    if (i && i(!1), b(!1), e && T && !s) {
      let V = new Ui("press", P, C);
      e(V), R && (R = V.shouldStopPropagation);
    }
    return E.isTriggeringEvent = !1, R;
  }), Z = xe((C, P) => {
    let T = v.current;
    if (s) return !1;
    if (o) {
      T.isTriggeringEvent = !0;
      let E = new Ui("pressup", P, C);
      return o(E), T.isTriggeringEvent = !1, E.shouldStopPropagation;
    }
    return !0;
  }), D = xe((C) => {
    let P = v.current;
    if (P.isPressed && P.target) {
      P.didFirePressStart && P.pointerType != null && _(xt(P.target, C), P.pointerType, !1), P.isPressed = !1, P.isOverTarget = !1, P.activePointerId = null, P.pointerType = null, y(), f || Qi(P.target);
      for (let T of P.disposables) T();
      P.disposables = [];
    }
  }), A = xe((C) => {
    c && D(C);
  }), M = xe((C) => {
    a?.(C);
  }), F = xe((C, P) => {
    if (a) {
      let T = new MouseEvent("click", C);
      pa(T, P), a(ql(T));
    }
  }), K = X(() => {
    let C = v.current, P = {
      onKeyDown(E) {
        if (On(E.nativeEvent, E.currentTarget) && ye(E.currentTarget, he(E.nativeEvent))) {
          var R;
          Wr(he(E.nativeEvent), E.key) && E.preventDefault();
          let V = !0;
          if (!C.isPressed && !E.repeat) {
            C.target = E.currentTarget, C.isPressed = !0, C.pointerType = "keyboard", V = $(E, "keyboard");
            let x = E.currentTarget, H = (I) => {
              On(I, x) && !I.repeat && ye(x, he(I)) && C.target && Z(xt(C.target, I), "keyboard");
            };
            g(pe(E.currentTarget), "keyup", ht(H, T), !0);
          }
          V && E.stopPropagation(), E.metaKey && mt() && ((R = C.metaKeyEvents) === null || R === void 0 || R.set(E.key, E.nativeEvent));
        } else E.key === "Meta" && (C.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(E) {
        if (!(E && !ye(E.currentTarget, he(E.nativeEvent))) && E && E.button === 0 && !C.isTriggeringEvent && !Pt.isOpening) {
          let R = !0;
          if (s && E.preventDefault(), !C.ignoreEmulatedMouseEvents && !C.isPressed && (C.pointerType === "virtual" || sl(E.nativeEvent))) {
            let V = $(E, "virtual"), x = Z(E, "virtual"), H = _(E, "virtual");
            M(E), R = V && x && H;
          } else if (C.isPressed && C.pointerType !== "keyboard") {
            let V = C.pointerType || E.nativeEvent.pointerType || "virtual", x = Z(xt(E.currentTarget, E), V), H = _(xt(E.currentTarget, E), V, !0);
            R = x && H, C.isOverTarget = !1, M(E), D(E);
          }
          C.ignoreEmulatedMouseEvents = !1, R && E.stopPropagation();
        }
      }
    }, T = (E) => {
      var R;
      if (C.isPressed && C.target && On(E, C.target)) {
        var V;
        Wr(he(E), E.key) && E.preventDefault();
        let H = he(E), I = ye(C.target, he(E));
        _(xt(C.target, E), "keyboard", I), I && F(E, C.target), y(), E.key !== "Enter" && Yl(C.target) && ye(C.target, H) && !E[Ir] && (E[Ir] = !0, Pt(C.target, E, !1)), C.isPressed = !1, (V = C.metaKeyEvents) === null || V === void 0 || V.delete(E.key);
      } else if (E.key === "Meta" && (!((R = C.metaKeyEvents) === null || R === void 0) && R.size)) {
        var x;
        let H = C.metaKeyEvents;
        C.metaKeyEvents = void 0;
        for (let I of H.values()) (x = C.target) === null || x === void 0 || x.dispatchEvent(new KeyboardEvent("keyup", I));
      }
    };
    if (typeof PointerEvent < "u") {
      P.onPointerDown = (V) => {
        if (V.button !== 0 || !ye(V.currentTarget, he(V.nativeEvent))) return;
        if (e0(V.nativeEvent)) {
          C.pointerType = "virtual";
          return;
        }
        C.pointerType = V.pointerType;
        let x = !0;
        if (!C.isPressed) {
          C.isPressed = !0, C.isOverTarget = !0, C.activePointerId = V.pointerId, C.target = V.currentTarget, f || ul(C.target), x = $(V, C.pointerType);
          let H = he(V.nativeEvent);
          "releasePointerCapture" in H && H.releasePointerCapture(V.pointerId), g(pe(V.currentTarget), "pointerup", E, !1), g(pe(V.currentTarget), "pointercancel", R, !1);
        }
        x && V.stopPropagation();
      }, P.onMouseDown = (V) => {
        if (ye(V.currentTarget, he(V.nativeEvent)) && V.button === 0) {
          if (u) {
            let x = Br(V.target);
            x && C.disposables.push(x);
          }
          V.stopPropagation();
        }
      }, P.onPointerUp = (V) => {
        !ye(V.currentTarget, he(V.nativeEvent)) || C.pointerType === "virtual" || V.button === 0 && !C.isPressed && Z(V, C.pointerType || V.pointerType);
      }, P.onPointerEnter = (V) => {
        V.pointerId === C.activePointerId && C.target && !C.isOverTarget && C.pointerType != null && (C.isOverTarget = !0, $(xt(C.target, V), C.pointerType));
      }, P.onPointerLeave = (V) => {
        V.pointerId === C.activePointerId && C.target && C.isOverTarget && C.pointerType != null && (C.isOverTarget = !1, _(xt(C.target, V), C.pointerType, !1), A(V));
      };
      let E = (V) => {
        if (V.pointerId === C.activePointerId && C.isPressed && V.button === 0 && C.target) {
          if (ye(C.target, he(V)) && C.pointerType != null) {
            let x = !1, H = setTimeout(() => {
              C.isPressed && C.target instanceof HTMLElement && (x ? D(V) : (ze(C.target), C.target.click()));
            }, 80);
            g(V.currentTarget, "click", () => x = !0, !0), C.disposables.push(() => clearTimeout(H));
          } else D(V);
          C.isOverTarget = !1;
        }
      }, R = (V) => {
        D(V);
      };
      P.onDragStart = (V) => {
        ye(V.currentTarget, he(V.nativeEvent)) && D(V);
      };
    } else if (process.env.NODE_ENV === "test") {
      P.onMouseDown = (V) => {
        if (V.button !== 0 || !ye(V.currentTarget, he(V.nativeEvent))) return;
        if (C.ignoreEmulatedMouseEvents) {
          V.stopPropagation();
          return;
        }
        if (C.isPressed = !0, C.isOverTarget = !0, C.target = V.currentTarget, C.pointerType = sl(V.nativeEvent) ? "virtual" : "mouse", Ll(() => $(V, C.pointerType)) && V.stopPropagation(), u) {
          let H = Br(V.target);
          H && C.disposables.push(H);
        }
        g(pe(V.currentTarget), "mouseup", E, !1);
      }, P.onMouseEnter = (V) => {
        if (!ye(V.currentTarget, he(V.nativeEvent))) return;
        let x = !0;
        C.isPressed && !C.ignoreEmulatedMouseEvents && C.pointerType != null && (C.isOverTarget = !0, x = $(V, C.pointerType)), x && V.stopPropagation();
      }, P.onMouseLeave = (V) => {
        if (!ye(V.currentTarget, he(V.nativeEvent))) return;
        let x = !0;
        C.isPressed && !C.ignoreEmulatedMouseEvents && C.pointerType != null && (C.isOverTarget = !1, x = _(V, C.pointerType, !1), A(V)), x && V.stopPropagation();
      }, P.onMouseUp = (V) => {
        ye(V.currentTarget, he(V.nativeEvent)) && !C.ignoreEmulatedMouseEvents && V.button === 0 && !C.isPressed && Z(V, C.pointerType || "mouse");
      };
      let E = (V) => {
        if (V.button === 0) {
          if (C.ignoreEmulatedMouseEvents) {
            C.ignoreEmulatedMouseEvents = !1;
            return;
          }
          C.target && C.target.contains(V.target) && C.pointerType != null || D(V), C.isOverTarget = !1;
        }
      };
      P.onTouchStart = (V) => {
        if (!ye(V.currentTarget, he(V.nativeEvent))) return;
        let x = h0(V.nativeEvent);
        if (!x) return;
        C.activePointerId = x.identifier, C.ignoreEmulatedMouseEvents = !0, C.isOverTarget = !0, C.isPressed = !0, C.target = V.currentTarget, C.pointerType = "touch", f || ul(C.target), $(ct(C.target, V), C.pointerType) && V.stopPropagation(), g(Be(V.currentTarget), "scroll", R, !0);
      }, P.onTouchMove = (V) => {
        if (!ye(V.currentTarget, he(V.nativeEvent))) return;
        if (!C.isPressed) {
          V.stopPropagation();
          return;
        }
        let x = Ur(V.nativeEvent, C.activePointerId), H = !0;
        x && Gr(x, V.currentTarget) ? !C.isOverTarget && C.pointerType != null && (C.isOverTarget = !0, H = $(ct(C.target, V), C.pointerType)) : C.isOverTarget && C.pointerType != null && (C.isOverTarget = !1, H = _(ct(C.target, V), C.pointerType, !1), A(ct(C.target, V))), H && V.stopPropagation();
      }, P.onTouchEnd = (V) => {
        if (!ye(V.currentTarget, he(V.nativeEvent))) return;
        if (!C.isPressed) {
          V.stopPropagation();
          return;
        }
        let x = Ur(V.nativeEvent, C.activePointerId), H = !0;
        x && Gr(x, V.currentTarget) && C.pointerType != null ? (Z(ct(C.target, V), C.pointerType), H = _(ct(C.target, V), C.pointerType), F(V.nativeEvent, C.target)) : C.isOverTarget && C.pointerType != null && (H = _(ct(C.target, V), C.pointerType, !1)), H && V.stopPropagation(), C.isPressed = !1, C.activePointerId = null, C.isOverTarget = !1, C.ignoreEmulatedMouseEvents = !0, C.target && !f && Qi(C.target), y();
      }, P.onTouchCancel = (V) => {
        ye(V.currentTarget, he(V.nativeEvent)) && (V.stopPropagation(), C.isPressed && D(ct(C.target, V)));
      };
      let R = (V) => {
        C.isPressed && ye(he(V), C.target) && D({
          currentTarget: C.target,
          shiftKey: !1,
          ctrlKey: !1,
          metaKey: !1,
          altKey: !1
        });
      };
      P.onDragStart = (V) => {
        ye(V.currentTarget, he(V.nativeEvent)) && D(V);
      };
    }
    return P;
  }, [
    g,
    s,
    u,
    y,
    f,
    D,
    A,
    _,
    $,
    Z,
    M,
    F
  ]);
  return le(() => {
    if (!h || process.env.NODE_ENV === "test") return;
    const C = pe(h.current);
    if (!C || !C.head || C.getElementById(zr)) return;
    const P = C.createElement("style");
    P.id = zr, P.textContent = `
@layer {
  [${Or}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), C.head.prepend(P);
  }, [
    h
  ]), le(() => {
    let C = v.current;
    return () => {
      var P;
      f || Qi((P = C.target) !== null && P !== void 0 ? P : void 0);
      for (let T of C.disposables) T();
      C.disposables = [];
    };
  }, [
    f
  ]), {
    isPressed: d || m,
    pressProps: Q(p, K, {
      [Or]: !0
    })
  };
}
function Yl(t) {
  return t.tagName === "A" && t.hasAttribute("href");
}
function On(t, e) {
  const { key: i, code: l } = t, r = e, o = r.getAttribute("role");
  return (i === "Enter" || i === " " || i === "Spacebar" || l === "Space") && !(r instanceof Be(r).HTMLInputElement && !ga(r, i) || r instanceof Be(r).HTMLTextAreaElement || r.isContentEditable) && // Links should only trigger with Enter key
  !((o === "link" || !o && Yl(r)) && i !== "Enter");
}
function h0(t) {
  const { targetTouches: e } = t;
  return e.length > 0 ? e[0] : null;
}
function Ur(t, e) {
  const i = t.changedTouches;
  for (let l = 0; l < i.length; l++) {
    const r = i[l];
    if (r.identifier === e) return r;
  }
  return null;
}
function ct(t, e) {
  let i = 0, l = 0;
  return e.targetTouches && e.targetTouches.length === 1 && (i = e.targetTouches[0].clientX, l = e.targetTouches[0].clientY), {
    currentTarget: t,
    shiftKey: e.shiftKey,
    ctrlKey: e.ctrlKey,
    metaKey: e.metaKey,
    altKey: e.altKey,
    clientX: i,
    clientY: l
  };
}
function xt(t, e) {
  let i = e.clientX, l = e.clientY;
  return {
    currentTarget: t,
    shiftKey: e.shiftKey,
    ctrlKey: e.ctrlKey,
    metaKey: e.metaKey,
    altKey: e.altKey,
    clientX: i,
    clientY: l
  };
}
function m0(t) {
  let e = 0, i = 0;
  return t.width !== void 0 ? e = t.width / 2 : t.radiusX !== void 0 && (e = t.radiusX), t.height !== void 0 ? i = t.height / 2 : t.radiusY !== void 0 && (i = t.radiusY), {
    top: t.clientY - i,
    right: t.clientX + e,
    bottom: t.clientY + i,
    left: t.clientX - e
  };
}
function g0(t, e) {
  return !(t.left > e.right || e.left > t.right || t.top > e.bottom || e.top > t.bottom);
}
function Gr(t, e) {
  let i = e.getBoundingClientRect(), l = m0(t);
  return g0(i, l);
}
function b0(t) {
  return t instanceof HTMLInputElement ? !1 : t instanceof HTMLButtonElement ? t.type !== "submit" && t.type !== "reset" : !Yl(t);
}
function Wr(t, e) {
  return t instanceof HTMLInputElement ? !ga(t, e) : b0(t);
}
const v0 = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function ga(t, e) {
  return t.type === "checkbox" || t.type === "radio" ? e === " " : v0.has(t.type);
}
let Ft = null, cl = /* @__PURE__ */ new Set(), vi = /* @__PURE__ */ new Map(), St = !1, fl = !1;
const C0 = {
  Tab: !0,
  Escape: !0
};
function Vn(t, e) {
  for (let i of cl) i(t, e);
}
function V0(t) {
  return !(t.metaKey || !mt() && t.altKey || t.ctrlKey || t.key === "Control" || t.key === "Shift" || t.key === "Meta");
}
function rn(t) {
  St = !0, V0(t) && (Ft = "keyboard", Vn("keyboard", t));
}
function Ie(t) {
  Ft = "pointer", (t.type === "mousedown" || t.type === "pointerdown") && (St = !0, Vn("pointer", t));
}
function ba(t) {
  sl(t) && (St = !0, Ft = "virtual");
}
function va(t) {
  t.target === window || t.target === document || ln || !t.isTrusted || (!St && !fl && (Ft = "virtual", Vn("virtual", t)), St = !1, fl = !1);
}
function Ca() {
  ln || (St = !1, fl = !0);
}
function pl(t) {
  if (typeof window > "u" || typeof document > "u" || vi.get(Be(t))) return;
  const e = Be(t), i = pe(t);
  let l = e.HTMLElement.prototype.focus;
  e.HTMLElement.prototype.focus = function() {
    St = !0, l.apply(this, arguments);
  }, i.addEventListener("keydown", rn, !0), i.addEventListener("keyup", rn, !0), i.addEventListener("click", ba, !0), e.addEventListener("focus", va, !0), e.addEventListener("blur", Ca, !1), typeof PointerEvent < "u" ? (i.addEventListener("pointerdown", Ie, !0), i.addEventListener("pointermove", Ie, !0), i.addEventListener("pointerup", Ie, !0)) : process.env.NODE_ENV === "test" && (i.addEventListener("mousedown", Ie, !0), i.addEventListener("mousemove", Ie, !0), i.addEventListener("mouseup", Ie, !0)), e.addEventListener("beforeunload", () => {
    Va(t);
  }, {
    once: !0
  }), vi.set(e, {
    focus: l
  });
}
const Va = (t, e) => {
  const i = Be(t), l = pe(t);
  e && l.removeEventListener("DOMContentLoaded", e), vi.has(i) && (i.HTMLElement.prototype.focus = vi.get(i).focus, l.removeEventListener("keydown", rn, !0), l.removeEventListener("keyup", rn, !0), l.removeEventListener("click", ba, !0), i.removeEventListener("focus", va, !0), i.removeEventListener("blur", Ca, !1), typeof PointerEvent < "u" ? (l.removeEventListener("pointerdown", Ie, !0), l.removeEventListener("pointermove", Ie, !0), l.removeEventListener("pointerup", Ie, !0)) : process.env.NODE_ENV === "test" && (l.removeEventListener("mousedown", Ie, !0), l.removeEventListener("mousemove", Ie, !0), l.removeEventListener("mouseup", Ie, !0)), vi.delete(i));
};
function H0(t) {
  const e = pe(t);
  let i;
  return e.readyState !== "loading" ? pl(t) : (i = () => {
    pl(t);
  }, e.addEventListener("DOMContentLoaded", i)), () => Va(t, i);
}
typeof document < "u" && H0();
function Lt() {
  return Ft !== "pointer";
}
function wi() {
  return Ft;
}
function Xl(t) {
  Ft = t, Vn(t, null);
}
const y0 = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function w0(t, e, i) {
  let l = pe(i?.target);
  const r = typeof window < "u" ? Be(i?.target).HTMLInputElement : HTMLInputElement, o = typeof window < "u" ? Be(i?.target).HTMLTextAreaElement : HTMLTextAreaElement, a = typeof window < "u" ? Be(i?.target).HTMLElement : HTMLElement, s = typeof window < "u" ? Be(i?.target).KeyboardEvent : KeyboardEvent;
  return t = t || l.activeElement instanceof r && !y0.has(l.activeElement.type) || l.activeElement instanceof o || l.activeElement instanceof a && l.activeElement.isContentEditable, !(t && e === "keyboard" && i instanceof s && !C0[i.key]);
}
function M0(t, e, i) {
  pl(), le(() => {
    let l = (r, o) => {
      w0(!!i?.isTextInput, r, o) && t(Lt());
    };
    return cl.add(l), () => {
      cl.delete(l);
    };
  }, e);
}
function Jt(t) {
  const e = pe(t), i = Se(e);
  if (wi() === "virtual") {
    let l = i;
    aa(() => {
      Se(e) === l && t.isConnected && ze(t);
    });
  } else ze(t);
}
function Jl(t) {
  let { isDisabled: e, onFocus: i, onBlur: l, onFocusChange: r } = t;
  const o = oe((d) => {
    if (d.target === d.currentTarget)
      return l && l(d), r && r(!1), !0;
  }, [
    l,
    r
  ]), a = ha(o), s = oe((d) => {
    const u = pe(d.target), c = u ? Se(u) : Se();
    d.target === d.currentTarget && c === he(d.nativeEvent) && (i && i(d), r && r(!0), a(d));
  }, [
    r,
    i,
    a
  ]);
  return {
    focusProps: {
      onFocus: !e && (i || r || l) ? s : void 0,
      onBlur: !e && (l || r) ? o : void 0
    }
  };
}
function jr(t) {
  if (!t) return;
  let e = !0;
  return (i) => {
    let l = {
      ...i,
      preventDefault() {
        i.preventDefault();
      },
      isDefaultPrevented() {
        return i.isDefaultPrevented();
      },
      stopPropagation() {
        e && process.env.NODE_ENV !== "production" ? console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.") : e = !0;
      },
      continuePropagation() {
        e = !1;
      },
      isPropagationStopped() {
        return e;
      }
    };
    t(l), e && i.stopPropagation();
  };
}
function Ql(t) {
  return {
    keyboardProps: t.isDisabled ? {} : {
      onKeyDown: jr(t.onKeyDown),
      onKeyUp: jr(t.onKeyUp)
    }
  };
}
let on = /* @__PURE__ */ w.createContext(null);
function x0(t) {
  let e = J(on) || {};
  Gl(e, t);
  let { ref: i, ...l } = e;
  return l;
}
const $0 = /* @__PURE__ */ w.forwardRef(function(e, i) {
  let { children: l, ...r } = e, o = Xe(i), a = {
    ...r,
    ref: o
  };
  return /* @__PURE__ */ w.createElement(on.Provider, {
    value: a
  }, l);
});
function Nt(t, e) {
  let { focusProps: i } = Jl(t), { keyboardProps: l } = Ql(t), r = Q(i, l), o = x0(e), a = t.isDisabled ? {} : o, s = N(t.autoFocus);
  le(() => {
    s.current && e.current && Jt(e.current), s.current = !1;
  }, [
    e
  ]);
  let d = t.excludeFromTabOrder ? -1 : 0;
  return t.isDisabled && (d = void 0), {
    focusableProps: Q({
      ...r,
      tabIndex: d
    }, a)
  };
}
const D0 = /* @__PURE__ */ w.forwardRef(({ children: t, ...e }, i) => {
  let l = N(!1), r = J(yi);
  i = Xe(i || r?.ref);
  let o = Q(r || {}, {
    ...e,
    ref: i,
    register() {
      l.current = !0, r && r.register();
    }
  });
  return Gl(r, i), le(() => {
    l.current || (process.env.NODE_ENV !== "production" && console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component."), l.current = !0);
  }, []), /* @__PURE__ */ w.createElement(yi.Provider, {
    value: o
  }, t);
});
function k0({ children: t }) {
  let e = X(() => ({
    register: () => {
    }
  }), []);
  return /* @__PURE__ */ w.createElement(yi.Provider, {
    value: e
  }, t);
}
function Hn(t) {
  let { isDisabled: e, onBlurWithin: i, onFocusWithin: l, onFocusWithinChange: r } = t, o = N({
    isFocusWithin: !1
  }), { addGlobalListener: a, removeAllGlobalListeners: s } = Tt(), d = oe((f) => {
    f.currentTarget.contains(f.target) && o.current.isFocusWithin && !f.currentTarget.contains(f.relatedTarget) && (o.current.isFocusWithin = !1, s(), i && i(f), r && r(!1));
  }, [
    i,
    r,
    o,
    s
  ]), u = ha(d), c = oe((f) => {
    if (!f.currentTarget.contains(f.target)) return;
    const h = pe(f.target), p = Se(h);
    if (!o.current.isFocusWithin && p === he(f.nativeEvent)) {
      l && l(f), r && r(!0), o.current.isFocusWithin = !0, u(f);
      let m = f.currentTarget;
      a(h, "focus", (b) => {
        if (o.current.isFocusWithin && !ye(m, b.target)) {
          let v = new h.defaultView.FocusEvent("blur", {
            relatedTarget: b.target
          });
          pa(v, m);
          let g = ql(v);
          d(g);
        }
      }, {
        capture: !0
      });
    }
  }, [
    l,
    r,
    u,
    a,
    d
  ]);
  return e ? {
    focusWithinProps: {
      // These cannot be null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: c,
      onBlur: d
    }
  };
}
let an = !1, Un = 0;
function hl() {
  an = !0, setTimeout(() => {
    an = !1;
  }, 50);
}
function qr(t) {
  t.pointerType === "touch" && hl();
}
function _0() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" ? document.addEventListener("pointerup", qr) : process.env.NODE_ENV === "test" && document.addEventListener("touchend", hl), Un++, () => {
      Un--, !(Un > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", qr) : process.env.NODE_ENV === "test" && document.removeEventListener("touchend", hl));
    };
}
function Ke(t) {
  let { onHoverStart: e, onHoverChange: i, onHoverEnd: l, isDisabled: r } = t, [o, a] = ne(!1), s = N({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  le(_0, []);
  let { addGlobalListener: d, removeAllGlobalListeners: u } = Tt(), { hoverProps: c, triggerHoverEnd: f } = X(() => {
    let h = (b, v) => {
      if (s.pointerType = v, r || v === "touch" || s.isHovered || !b.currentTarget.contains(b.target)) return;
      s.isHovered = !0;
      let g = b.currentTarget;
      s.target = g, d(pe(b.target), "pointerover", (y) => {
        s.isHovered && s.target && !ye(s.target, y.target) && p(y, y.pointerType);
      }, {
        capture: !0
      }), e && e({
        type: "hoverstart",
        target: g,
        pointerType: v
      }), i && i(!0), a(!0);
    }, p = (b, v) => {
      let g = s.target;
      s.pointerType = "", s.target = null, !(v === "touch" || !s.isHovered || !g) && (s.isHovered = !1, u(), l && l({
        type: "hoverend",
        target: g,
        pointerType: v
      }), i && i(!1), a(!1));
    }, m = {};
    return typeof PointerEvent < "u" ? (m.onPointerEnter = (b) => {
      an && b.pointerType === "mouse" || h(b, b.pointerType);
    }, m.onPointerLeave = (b) => {
      !r && b.currentTarget.contains(b.target) && p(b, b.pointerType);
    }) : process.env.NODE_ENV === "test" && (m.onTouchStart = () => {
      s.ignoreEmulatedMouseEvents = !0;
    }, m.onMouseEnter = (b) => {
      !s.ignoreEmulatedMouseEvents && !an && h(b, "mouse"), s.ignoreEmulatedMouseEvents = !1;
    }, m.onMouseLeave = (b) => {
      !r && b.currentTarget.contains(b.target) && p(b, "mouse");
    }), {
      hoverProps: m,
      triggerHoverEnd: p
    };
  }, [
    e,
    i,
    l,
    r,
    s,
    d,
    u
  ]);
  return le(() => {
    r && f({
      currentTarget: s.target
    }, s.pointerType);
  }, [
    r
  ]), {
    hoverProps: c,
    isHovered: o
  };
}
function Z0(t) {
  let { ref: e, onInteractOutside: i, isDisabled: l, onInteractOutsideStart: r } = t, o = N({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }), a = xe((d) => {
    i && Gi(d, e) && (r && r(d), o.current.isPointerDown = !0);
  }), s = xe((d) => {
    i && i(d);
  });
  le(() => {
    let d = o.current;
    if (l) return;
    const u = e.current, c = pe(u);
    if (typeof PointerEvent < "u") {
      let f = (h) => {
        d.isPointerDown && Gi(h, e) && s(h), d.isPointerDown = !1;
      };
      return c.addEventListener("pointerdown", a, !0), c.addEventListener("click", f, !0), () => {
        c.removeEventListener("pointerdown", a, !0), c.removeEventListener("click", f, !0);
      };
    } else if (process.env.NODE_ENV === "test") {
      let f = (p) => {
        d.ignoreEmulatedMouseEvents ? d.ignoreEmulatedMouseEvents = !1 : d.isPointerDown && Gi(p, e) && s(p), d.isPointerDown = !1;
      }, h = (p) => {
        d.ignoreEmulatedMouseEvents = !0, d.isPointerDown && Gi(p, e) && s(p), d.isPointerDown = !1;
      };
      return c.addEventListener("mousedown", a, !0), c.addEventListener("mouseup", f, !0), c.addEventListener("touchstart", a, !0), c.addEventListener("touchend", h, !0), () => {
        c.removeEventListener("mousedown", a, !0), c.removeEventListener("mouseup", f, !0), c.removeEventListener("touchstart", a, !0), c.removeEventListener("touchend", h, !0);
      };
    }
  }, [
    e,
    l,
    a,
    s
  ]);
}
function Gi(t, e) {
  if (t.button > 0) return !1;
  if (t.target) {
    const i = t.target.ownerDocument;
    if (!i || !i.documentElement.contains(t.target) || t.target.closest("[data-react-aria-top-layer]")) return !1;
  }
  return e.current ? !t.composedPath().includes(e.current) : !1;
}
function Ha(t) {
  let { onMoveStart: e, onMove: i, onMoveEnd: l } = t, r = N({
    didMove: !1,
    lastPosition: null,
    id: null
  }), { addGlobalListener: o, removeGlobalListener: a } = Tt(), s = xe((c, f, h, p) => {
    h === 0 && p === 0 || (r.current.didMove || (r.current.didMove = !0, e?.({
      type: "movestart",
      pointerType: f,
      shiftKey: c.shiftKey,
      metaKey: c.metaKey,
      ctrlKey: c.ctrlKey,
      altKey: c.altKey
    })), i?.({
      type: "move",
      pointerType: f,
      deltaX: h,
      deltaY: p,
      shiftKey: c.shiftKey,
      metaKey: c.metaKey,
      ctrlKey: c.ctrlKey,
      altKey: c.altKey
    }));
  }), d = xe((c, f) => {
    Qi(), r.current.didMove && l?.({
      type: "moveend",
      pointerType: f,
      shiftKey: c.shiftKey,
      metaKey: c.metaKey,
      ctrlKey: c.ctrlKey,
      altKey: c.altKey
    });
  });
  return {
    moveProps: X(() => {
      let c = {}, f = () => {
        ul(), r.current.didMove = !1;
      };
      if (typeof PointerEvent > "u" && process.env.NODE_ENV === "test") {
        let p = (g) => {
          if (g.button === 0) {
            var y, $, _, Z;
            s(g, "mouse", g.pageX - ((_ = (y = r.current.lastPosition) === null || y === void 0 ? void 0 : y.pageX) !== null && _ !== void 0 ? _ : 0), g.pageY - ((Z = ($ = r.current.lastPosition) === null || $ === void 0 ? void 0 : $.pageY) !== null && Z !== void 0 ? Z : 0)), r.current.lastPosition = {
              pageX: g.pageX,
              pageY: g.pageY
            };
          }
        }, m = (g) => {
          g.button === 0 && (d(g, "mouse"), a(window, "mousemove", p, !1), a(window, "mouseup", m, !1));
        };
        c.onMouseDown = (g) => {
          g.button === 0 && (f(), g.stopPropagation(), g.preventDefault(), r.current.lastPosition = {
            pageX: g.pageX,
            pageY: g.pageY
          }, o(window, "mousemove", p, !1), o(window, "mouseup", m, !1));
        };
        let b = (g) => {
          let y = [
            ...g.changedTouches
          ].findIndex(({ identifier: A }) => A === r.current.id);
          if (y >= 0) {
            var $, _;
            let { pageX: A, pageY: M } = g.changedTouches[y];
            var Z, D;
            s(g, "touch", A - ((Z = ($ = r.current.lastPosition) === null || $ === void 0 ? void 0 : $.pageX) !== null && Z !== void 0 ? Z : 0), M - ((D = (_ = r.current.lastPosition) === null || _ === void 0 ? void 0 : _.pageY) !== null && D !== void 0 ? D : 0)), r.current.lastPosition = {
              pageX: A,
              pageY: M
            };
          }
        }, v = (g) => {
          [
            ...g.changedTouches
          ].findIndex(({ identifier: $ }) => $ === r.current.id) >= 0 && (d(g, "touch"), r.current.id = null, a(window, "touchmove", b), a(window, "touchend", v), a(window, "touchcancel", v));
        };
        c.onTouchStart = (g) => {
          if (g.changedTouches.length === 0 || r.current.id != null) return;
          let { pageX: y, pageY: $, identifier: _ } = g.changedTouches[0];
          f(), g.stopPropagation(), g.preventDefault(), r.current.lastPosition = {
            pageX: y,
            pageY: $
          }, r.current.id = _, o(window, "touchmove", b, !1), o(window, "touchend", v, !1), o(window, "touchcancel", v, !1);
        };
      } else {
        let p = (b) => {
          if (b.pointerId === r.current.id) {
            var v, g;
            let _ = b.pointerType || "mouse";
            var y, $;
            s(b, _, b.pageX - ((y = (v = r.current.lastPosition) === null || v === void 0 ? void 0 : v.pageX) !== null && y !== void 0 ? y : 0), b.pageY - (($ = (g = r.current.lastPosition) === null || g === void 0 ? void 0 : g.pageY) !== null && $ !== void 0 ? $ : 0)), r.current.lastPosition = {
              pageX: b.pageX,
              pageY: b.pageY
            };
          }
        }, m = (b) => {
          if (b.pointerId === r.current.id) {
            let v = b.pointerType || "mouse";
            d(b, v), r.current.id = null, a(window, "pointermove", p, !1), a(window, "pointerup", m, !1), a(window, "pointercancel", m, !1);
          }
        };
        c.onPointerDown = (b) => {
          b.button === 0 && r.current.id == null && (f(), b.stopPropagation(), b.preventDefault(), r.current.lastPosition = {
            pageX: b.pageX,
            pageY: b.pageY
          }, r.current.id = b.pointerId, o(window, "pointermove", p, !1), o(window, "pointerup", m, !1), o(window, "pointercancel", m, !1));
        };
      }
      let h = (p, m, b) => {
        f(), s(p, "keyboard", m, b), d(p, "keyboard");
      };
      return c.onKeyDown = (p) => {
        switch (p.key) {
          case "Left":
          case "ArrowLeft":
            p.preventDefault(), p.stopPropagation(), h(p, -1, 0);
            break;
          case "Right":
          case "ArrowRight":
            p.preventDefault(), p.stopPropagation(), h(p, 1, 0);
            break;
          case "Up":
          case "ArrowUp":
            p.preventDefault(), p.stopPropagation(), h(p, 0, -1);
            break;
          case "Down":
          case "ArrowDown":
            p.preventDefault(), p.stopPropagation(), h(p, 0, 1);
            break;
        }
      }, c;
    }, [
      r,
      o,
      a,
      s,
      d
    ])
  };
}
const E0 = 500;
function ya(t) {
  let { isDisabled: e, onLongPressStart: i, onLongPressEnd: l, onLongPress: r, threshold: o = E0, accessibilityDescription: a } = t;
  const s = N(void 0);
  let { addGlobalListener: d, removeGlobalListener: u } = Tt(), { pressProps: c } = gt({
    isDisabled: e,
    onPressStart(h) {
      if (h.continuePropagation(), (h.pointerType === "mouse" || h.pointerType === "touch") && (i && i({
        ...h,
        type: "longpressstart"
      }), s.current = setTimeout(() => {
        h.target.dispatchEvent(new PointerEvent("pointercancel", {
          bubbles: !0
        })), pe(h.target).activeElement !== h.target && ze(h.target), r && r({
          ...h,
          type: "longpress"
        }), s.current = void 0;
      }, o), h.pointerType === "touch")) {
        let p = (m) => {
          m.preventDefault();
        };
        d(h.target, "contextmenu", p, {
          once: !0
        }), d(window, "pointerup", () => {
          setTimeout(() => {
            u(h.target, "contextmenu", p);
          }, 30);
        }, {
          once: !0
        });
      }
    },
    onPressEnd(h) {
      s.current && clearTimeout(s.current), l && (h.pointerType === "mouse" || h.pointerType === "touch") && l({
        ...h,
        type: "longpressend"
      });
    }
  }), f = Qd(r && !e ? a : void 0);
  return {
    longPressProps: Q(c, f)
  };
}
function P0(t, e) {
  let { elementType: i = "a", onPress: l, onPressStart: r, onPressEnd: o, onClick: a, isDisabled: s, ...d } = t, u = {};
  i !== "a" && (u = {
    role: "link",
    tabIndex: s ? void 0 : 0
  });
  let { focusableProps: c } = Nt(t, e), { pressProps: f, isPressed: h } = gt({
    onPress: l,
    onPressStart: r,
    onPressEnd: o,
    onClick: a,
    isDisabled: s,
    ref: e
  }), p = me(d, {
    labelable: !0
  }), m = Q(c, f), b = li(), v = Ul(t);
  return {
    isPressed: h,
    linkProps: Q(p, v, {
      ...m,
      ...u,
      "aria-disabled": s || void 0,
      "aria-current": t["aria-current"],
      onClick: (g) => {
        var y;
        (y = f.onClick) === null || y === void 0 || y.call(f, g), !b.isNative && g.currentTarget instanceof HTMLAnchorElement && g.currentTarget.href && // If props are applied to a router Link component, it may have already prevented default.
        !g.isDefaultPrevented() && Ud(g.currentTarget, g) && t.href && (g.preventDefault(), b.open(g.currentTarget, g, t.href, t.routerOptions));
      }
    })
  };
}
const S0 = /* @__PURE__ */ new Set([
  "Arab",
  "Syrc",
  "Samr",
  "Mand",
  "Thaa",
  "Mend",
  "Nkoo",
  "Adlm",
  "Rohg",
  "Hebr"
]), L0 = /* @__PURE__ */ new Set([
  "ae",
  "ar",
  "arc",
  "bcc",
  "bqi",
  "ckb",
  "dv",
  "fa",
  "glk",
  "he",
  "ku",
  "mzn",
  "nqo",
  "pnb",
  "ps",
  "sd",
  "ug",
  "ur",
  "yi"
]);
function T0(t) {
  if (Intl.Locale) {
    let i = new Intl.Locale(t).maximize(), l = typeof i.getTextInfo == "function" ? i.getTextInfo() : i.textInfo;
    if (l) return l.direction === "rtl";
    if (i.script) return S0.has(i.script);
  }
  let e = t.split("-")[0];
  return L0.has(e);
}
const F0 = Symbol.for("react-aria.i18n.locale");
function wa() {
  let t = typeof window < "u" && window[F0] || typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([
      t
    ]);
  } catch {
    t = "en-US";
  }
  return {
    locale: t,
    direction: T0(t) ? "rtl" : "ltr"
  };
}
let ml = wa(), gi = /* @__PURE__ */ new Set();
function Yr() {
  ml = wa();
  for (let t of gi) t(ml);
}
function N0() {
  let t = ni(), [e, i] = ne(ml);
  return le(() => (gi.size === 0 && window.addEventListener("languagechange", Yr), gi.add(i), () => {
    gi.delete(i), gi.size === 0 && window.removeEventListener("languagechange", Yr);
  }), []), t ? {
    locale: "en-US",
    direction: "ltr"
  } : e;
}
const K0 = /* @__PURE__ */ w.createContext(null);
function Je() {
  let t = N0();
  return J(K0) || t;
}
const A0 = Symbol.for("react-aria.i18n.locale"), B0 = Symbol.for("react-aria.i18n.strings");
let zt;
class yn {
  /** Returns a localized string for the given key and locale. */
  getStringForLocale(e, i) {
    let r = this.getStringsForLocale(i)[e];
    if (!r) throw new Error(`Could not find intl message ${e} in ${i} locale`);
    return r;
  }
  /** Returns all localized strings for the given locale. */
  getStringsForLocale(e) {
    let i = this.strings[e];
    return i || (i = R0(e, this.strings, this.defaultLocale), this.strings[e] = i), i;
  }
  static getGlobalDictionaryForPackage(e) {
    if (typeof window > "u") return null;
    let i = window[A0];
    if (zt === void 0) {
      let r = window[B0];
      if (!r) return null;
      zt = {};
      for (let o in r) zt[o] = new yn({
        [i]: r[o]
      }, i);
    }
    let l = zt?.[e];
    if (!l) throw new Error(`Strings for package "${e}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
    return l;
  }
  constructor(e, i = "en-US") {
    this.strings = Object.fromEntries(Object.entries(e).filter(([, l]) => l)), this.defaultLocale = i;
  }
}
function R0(t, e, i = "en-US") {
  if (e[t]) return e[t];
  let l = I0(t);
  if (e[l]) return e[l];
  for (let r in e)
    if (r.startsWith(l + "-")) return e[r];
  return e[i];
}
function I0(t) {
  return Intl.Locale ? new Intl.Locale(t).language : t.split("-")[0];
}
const Xr = /* @__PURE__ */ new Map(), Jr = /* @__PURE__ */ new Map();
class z0 {
  /** Formats a localized string for the given key with the provided variables. */
  format(e, i) {
    let l = this.strings.getStringForLocale(e, this.locale);
    return typeof l == "function" ? l(i, this) : l;
  }
  plural(e, i, l = "cardinal") {
    let r = i["=" + e];
    if (r) return typeof r == "function" ? r() : r;
    let o = this.locale + ":" + l, a = Xr.get(o);
    a || (a = new Intl.PluralRules(this.locale, {
      type: l
    }), Xr.set(o, a));
    let s = a.select(e);
    return r = i[s] || i.other, typeof r == "function" ? r() : r;
  }
  number(e) {
    let i = Jr.get(this.locale);
    return i || (i = new Intl.NumberFormat(this.locale), Jr.set(this.locale, i)), i.format(e);
  }
  select(e, i) {
    let l = e[i] || e.other;
    return typeof l == "function" ? l() : l;
  }
  constructor(e, i) {
    this.locale = e, this.strings = i;
  }
}
const Qr = /* @__PURE__ */ new WeakMap();
function O0(t) {
  let e = Qr.get(t);
  return e || (e = new yn(t), Qr.set(t, e)), e;
}
function U0(t, e) {
  return e && yn.getGlobalDictionaryForPackage(e) || O0(t);
}
function wn(t, e) {
  let { locale: i } = Je(), l = U0(t, e);
  return X(() => new z0(i, l), [
    i,
    l
  ]);
}
let Gn = /* @__PURE__ */ new Map(), gl = !1;
try {
  gl = new Intl.NumberFormat("de-DE", {
    signDisplay: "exceptZero"
  }).resolvedOptions().signDisplay === "exceptZero";
} catch {
}
let sn = !1;
try {
  sn = new Intl.NumberFormat("de-DE", {
    style: "unit",
    unit: "degree"
  }).resolvedOptions().style === "unit";
} catch {
}
const Ma = {
  degree: {
    narrow: {
      default: "°",
      "ja-JP": " 度",
      "zh-TW": "度",
      "sl-SI": " °"
    }
  }
};
class G0 {
  /** Formats a number value as a string, according to the locale and options provided to the constructor. */
  format(e) {
    let i = "";
    if (!gl && this.options.signDisplay != null ? i = j0(this.numberFormatter, this.options.signDisplay, e) : i = this.numberFormatter.format(e), this.options.style === "unit" && !sn) {
      var l;
      let { unit: r, unitDisplay: o = "short", locale: a } = this.resolvedOptions();
      if (!r) return i;
      let s = (l = Ma[r]) === null || l === void 0 ? void 0 : l[o];
      i += s[a] || s.default;
    }
    return i;
  }
  /** Formats a number to an array of parts such as separators, digits, punctuation, and more. */
  formatToParts(e) {
    return this.numberFormatter.formatToParts(e);
  }
  /** Formats a number range as a string. */
  formatRange(e, i) {
    if (typeof this.numberFormatter.formatRange == "function") return this.numberFormatter.formatRange(e, i);
    if (i < e) throw new RangeError("End date must be >= start date");
    return `${this.format(e)} – ${this.format(i)}`;
  }
  /** Formats a number range as an array of parts. */
  formatRangeToParts(e, i) {
    if (typeof this.numberFormatter.formatRangeToParts == "function") return this.numberFormatter.formatRangeToParts(e, i);
    if (i < e) throw new RangeError("End date must be >= start date");
    let l = this.numberFormatter.formatToParts(e), r = this.numberFormatter.formatToParts(i);
    return [
      ...l.map((o) => ({
        ...o,
        source: "startRange"
      })),
      {
        type: "literal",
        value: " – ",
        source: "shared"
      },
      ...r.map((o) => ({
        ...o,
        source: "endRange"
      }))
    ];
  }
  /** Returns the resolved formatting options based on the values passed to the constructor. */
  resolvedOptions() {
    let e = this.numberFormatter.resolvedOptions();
    return !gl && this.options.signDisplay != null && (e = {
      ...e,
      signDisplay: this.options.signDisplay
    }), !sn && this.options.style === "unit" && (e = {
      ...e,
      style: "unit",
      unit: this.options.unit,
      unitDisplay: this.options.unitDisplay
    }), e;
  }
  constructor(e, i = {}) {
    this.numberFormatter = W0(e, i), this.options = i;
  }
}
function W0(t, e = {}) {
  let { numberingSystem: i } = e;
  if (i && t.includes("-nu-") && (t.includes("-u-") || (t += "-u-"), t += `-nu-${i}`), e.style === "unit" && !sn) {
    var l;
    let { unit: a, unitDisplay: s = "short" } = e;
    if (!a) throw new Error('unit option must be provided with style: "unit"');
    if (!(!((l = Ma[a]) === null || l === void 0) && l[s])) throw new Error(`Unsupported unit ${a} with unitDisplay = ${s}`);
    e = {
      ...e,
      style: "decimal"
    };
  }
  let r = t + (e ? Object.entries(e).sort((a, s) => a[0] < s[0] ? -1 : 1).join() : "");
  if (Gn.has(r)) return Gn.get(r);
  let o = new Intl.NumberFormat(t, e);
  return Gn.set(r, o), o;
}
function j0(t, e, i) {
  if (e === "auto") return t.format(i);
  if (e === "never") return t.format(Math.abs(i));
  {
    let l = !1;
    if (e === "always" ? l = i > 0 || Object.is(i, 0) : e === "exceptZero" && (Object.is(i, -0) || Object.is(i, 0) ? i = Math.abs(i) : l = i > 0), l) {
      let r = t.format(-i), o = t.format(i), a = r.replace(o, "").replace(/\u200e|\u061C/, "");
      return [
        ...a
      ].length !== 1 && console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"), r.replace(o, "!!!").replace(a, "+").replace("!!!", o);
    } else return t.format(i);
  }
}
function q0(t = {}) {
  let { locale: e } = Je();
  return X(() => new G0(e, t), [
    e,
    t
  ]);
}
let Wn = /* @__PURE__ */ new Map();
function Mn(t) {
  let { locale: e } = Je(), i = e + (t ? Object.entries(t).sort((r, o) => r[0] < o[0] ? -1 : 1).join() : "");
  if (Wn.has(i)) return Wn.get(i);
  let l = new Intl.Collator(e, t);
  return Wn.set(i, l), l;
}
function xa(t) {
  let e = Mn({
    usage: "search",
    ...t
  }), i = oe((o, a) => a.length === 0 ? !0 : (o = o.normalize("NFC"), a = a.normalize("NFC"), e.compare(o.slice(0, a.length), a) === 0), [
    e
  ]), l = oe((o, a) => a.length === 0 ? !0 : (o = o.normalize("NFC"), a = a.normalize("NFC"), e.compare(o.slice(-a.length), a) === 0), [
    e
  ]), r = oe((o, a) => {
    if (a.length === 0) return !0;
    o = o.normalize("NFC"), a = a.normalize("NFC");
    let s = 0, d = a.length;
    for (; s + d <= o.length; s++) {
      let u = o.slice(s, s + d);
      if (e.compare(a, u) === 0) return !0;
    }
    return !1;
  }, [
    e
  ]);
  return X(() => ({
    startsWith: i,
    endsWith: l,
    contains: r
  }), [
    i,
    l,
    r
  ]);
}
function Y0(t, e) {
  let { elementType: i = "button", isDisabled: l, onPress: r, onPressStart: o, onPressEnd: a, onPressUp: s, onPressChange: d, preventFocusOnPress: u, allowFocusWhenDisabled: c, onClick: f, href: h, target: p, rel: m, type: b = "button" } = t, v;
  i === "button" ? v = {
    type: b,
    disabled: l
  } : v = {
    role: "button",
    href: i === "a" && !l ? h : void 0,
    target: i === "a" ? p : void 0,
    type: i === "input" ? b : void 0,
    disabled: i === "input" ? l : void 0,
    "aria-disabled": !l || i === "input" ? void 0 : l,
    rel: i === "a" ? m : void 0
  };
  let { pressProps: g, isPressed: y } = gt({
    onPressStart: o,
    onPressEnd: a,
    onPressChange: d,
    onPress: r,
    onPressUp: s,
    onClick: f,
    isDisabled: l,
    preventFocusOnPress: u,
    ref: e
  }), { focusableProps: $ } = Nt(t, e);
  c && ($.tabIndex = l ? -1 : $.tabIndex);
  let _ = Q($, g, me(t, {
    labelable: !0
  }));
  return {
    isPressed: y,
    buttonProps: Q(v, _, {
      "aria-haspopup": t["aria-haspopup"],
      "aria-expanded": t["aria-expanded"],
      "aria-controls": t["aria-controls"],
      "aria-pressed": t["aria-pressed"],
      "aria-current": t["aria-current"]
    })
  };
}
function X0(t) {
  const e = Be(t);
  if (!(t instanceof e.HTMLElement) && !(t instanceof e.SVGElement)) return !1;
  let { display: i, visibility: l } = t.style, r = i !== "none" && l !== "hidden" && l !== "collapse";
  if (r) {
    const { getComputedStyle: o } = t.ownerDocument.defaultView;
    let { display: a, visibility: s } = o(t);
    r = a !== "none" && s !== "hidden" && s !== "collapse";
  }
  return r;
}
function J0(t, e) {
  return !t.hasAttribute("hidden") && // Ignore HiddenSelect when tree walking.
  !t.hasAttribute("data-react-aria-prevent-focus") && (t.nodeName === "DETAILS" && e && e.nodeName !== "SUMMARY" ? t.hasAttribute("open") : !0);
}
function $a(t, e) {
  return t.nodeName !== "#comment" && X0(t) && J0(t, e) && (!t.parentElement || $a(t.parentElement, t));
}
const bl = /* @__PURE__ */ w.createContext(null), vl = "react-aria-focus-scope-restore";
let be = null;
function xn(t) {
  let { children: e, contain: i, restoreFocus: l, autoFocus: r } = t, o = N(null), a = N(null), s = N([]), { parentNode: d } = J(bl) || {}, u = X(() => new Vl({
    scopeRef: s
  }), [
    s
  ]);
  ce(() => {
    let h = d || _e.root;
    if (_e.getTreeNode(h.scopeRef) && be && !dn(be, h.scopeRef)) {
      let p = _e.getTreeNode(be);
      p && (h = p);
    }
    h.addChild(u), _e.addNode(u);
  }, [
    u,
    d
  ]), ce(() => {
    let h = _e.getTreeNode(s);
    h && (h.contain = !!i);
  }, [
    i
  ]), ce(() => {
    var h;
    let p = (h = o.current) === null || h === void 0 ? void 0 : h.nextSibling, m = [], b = (v) => v.stopPropagation();
    for (; p && p !== a.current; )
      m.push(p), p.addEventListener(vl, b), p = p.nextSibling;
    return s.current = m, () => {
      for (let v of m) v.removeEventListener(vl, b);
    };
  }, [
    e
  ]), l5(s, l, i), t5(s, i), r5(s, l, i), n5(s, r), le(() => {
    const h = Se(pe(s.current ? s.current[0] : void 0));
    let p = null;
    if (Oe(h, s.current)) {
      for (let m of _e.traverse()) m.scopeRef && Oe(h, m.scopeRef.current) && (p = m);
      p === _e.getTreeNode(s) && (be = p.scopeRef);
    }
  }, [
    s
  ]), ce(() => () => {
    var h, p, m;
    let b = (m = (p = _e.getTreeNode(s)) === null || p === void 0 || (h = p.parent) === null || h === void 0 ? void 0 : h.scopeRef) !== null && m !== void 0 ? m : null;
    (s === be || dn(s, be)) && (!b || _e.getTreeNode(b)) && (be = b), _e.removeTreeNode(s);
  }, [
    s
  ]);
  let c = X(() => e5(s), []), f = X(() => ({
    focusManager: c,
    parentNode: u
  }), [
    u,
    c
  ]);
  return /* @__PURE__ */ w.createElement(bl.Provider, {
    value: f
  }, /* @__PURE__ */ w.createElement("span", {
    "data-focus-scope-start": !0,
    hidden: !0,
    ref: o
  }), e, /* @__PURE__ */ w.createElement("span", {
    "data-focus-scope-end": !0,
    hidden: !0,
    ref: a
  }));
}
function Q0() {
  var t;
  return (t = J(bl)) === null || t === void 0 ? void 0 : t.focusManager;
}
function e5(t) {
  return {
    focusNext(e = {}) {
      let i = t.current, { from: l, tabbable: r, wrap: o, accept: a } = e;
      var s;
      let d = l || Se(pe((s = i[0]) !== null && s !== void 0 ? s : void 0)), u = i[0].previousElementSibling, c = _t(i), f = Re(c, {
        tabbable: r,
        accept: a
      }, i);
      f.currentNode = Oe(d, i) ? d : u;
      let h = f.nextNode();
      return !h && o && (f.currentNode = u, h = f.nextNode()), h && Ne(h, !0), h;
    },
    focusPrevious(e = {}) {
      let i = t.current, { from: l, tabbable: r, wrap: o, accept: a } = e;
      var s;
      let d = l || Se(pe((s = i[0]) !== null && s !== void 0 ? s : void 0)), u = i[i.length - 1].nextElementSibling, c = _t(i), f = Re(c, {
        tabbable: r,
        accept: a
      }, i);
      f.currentNode = Oe(d, i) ? d : u;
      let h = f.previousNode();
      return !h && o && (f.currentNode = u, h = f.previousNode()), h && Ne(h, !0), h;
    },
    focusFirst(e = {}) {
      let i = t.current, { tabbable: l, accept: r } = e, o = _t(i), a = Re(o, {
        tabbable: l,
        accept: r
      }, i);
      a.currentNode = i[0].previousElementSibling;
      let s = a.nextNode();
      return s && Ne(s, !0), s;
    },
    focusLast(e = {}) {
      let i = t.current, { tabbable: l, accept: r } = e, o = _t(i), a = Re(o, {
        tabbable: l,
        accept: r
      }, i);
      a.currentNode = i[i.length - 1].nextElementSibling;
      let s = a.previousNode();
      return s && Ne(s, !0), s;
    }
  };
}
function _t(t) {
  return t[0].parentElement;
}
function bi(t) {
  let e = _e.getTreeNode(be);
  for (; e && e.scopeRef !== t; ) {
    if (e.contain) return !1;
    e = e.parent;
  }
  return !0;
}
function t5(t, e) {
  let i = N(void 0), l = N(void 0);
  ce(() => {
    let r = t.current;
    if (!e) {
      l.current && (cancelAnimationFrame(l.current), l.current = void 0);
      return;
    }
    const o = pe(r ? r[0] : void 0);
    let a = (u) => {
      if (u.key !== "Tab" || u.altKey || u.ctrlKey || u.metaKey || !bi(t) || u.isComposing) return;
      let c = Se(o), f = t.current;
      if (!f || !Oe(c, f)) return;
      let h = _t(f), p = Re(h, {
        tabbable: !0
      }, f);
      if (!c) return;
      p.currentNode = c;
      let m = u.shiftKey ? p.previousNode() : p.nextNode();
      m || (p.currentNode = u.shiftKey ? f[f.length - 1].nextElementSibling : f[0].previousElementSibling, m = u.shiftKey ? p.previousNode() : p.nextNode()), u.preventDefault(), m && Ne(m, !0);
    }, s = (u) => {
      (!be || dn(be, t)) && Oe(he(u), t.current) ? (be = t, i.current = he(u)) : bi(t) && !pt(he(u), t) ? i.current ? i.current.focus() : be && be.current && Cl(be.current) : bi(t) && (i.current = he(u));
    }, d = (u) => {
      l.current && cancelAnimationFrame(l.current), l.current = requestAnimationFrame(() => {
        let c = wi(), f = (c === "virtual" || c === null) && Ol() && oa(), h = Se(o);
        if (!f && h && bi(t) && !pt(h, t)) {
          be = t;
          let m = he(u);
          if (m && m.isConnected) {
            var p;
            i.current = m, (p = i.current) === null || p === void 0 || p.focus();
          } else be.current && Cl(be.current);
        }
      });
    };
    return o.addEventListener("keydown", a, !1), o.addEventListener("focusin", s, !1), r?.forEach((u) => u.addEventListener("focusin", s, !1)), r?.forEach((u) => u.addEventListener("focusout", d, !1)), () => {
      o.removeEventListener("keydown", a, !1), o.removeEventListener("focusin", s, !1), r?.forEach((u) => u.removeEventListener("focusin", s, !1)), r?.forEach((u) => u.removeEventListener("focusout", d, !1));
    };
  }, [
    t,
    e
  ]), ce(() => () => {
    l.current && cancelAnimationFrame(l.current);
  }, [
    l
  ]);
}
function Da(t) {
  return pt(t);
}
function Oe(t, e) {
  return !t || !e ? !1 : e.some((i) => i.contains(t));
}
function pt(t, e = null) {
  if (t instanceof Element && t.closest("[data-react-aria-top-layer]")) return !0;
  for (let { scopeRef: i } of _e.traverse(_e.getTreeNode(e)))
    if (i && Oe(t, i.current)) return !0;
  return !1;
}
function i5(t) {
  return pt(t, be);
}
function dn(t, e) {
  var i;
  let l = (i = _e.getTreeNode(e)) === null || i === void 0 ? void 0 : i.parent;
  for (; l; ) {
    if (l.scopeRef === t) return !0;
    l = l.parent;
  }
  return !1;
}
function Ne(t, e = !1) {
  if (t != null && !e) try {
    Jt(t);
  } catch {
  }
  else if (t != null) try {
    t.focus();
  } catch {
  }
}
function ka(t, e = !0) {
  let i = t[0].previousElementSibling, l = _t(t), r = Re(l, {
    tabbable: e
  }, t);
  r.currentNode = i;
  let o = r.nextNode();
  return e && !o && (l = _t(t), r = Re(l, {
    tabbable: !1
  }, t), r.currentNode = i, o = r.nextNode()), o;
}
function Cl(t, e = !0) {
  Ne(ka(t, e));
}
function n5(t, e) {
  const i = w.useRef(e);
  le(() => {
    if (i.current) {
      be = t;
      const l = pe(t.current ? t.current[0] : void 0);
      !Oe(Se(l), be.current) && t.current && Cl(t.current);
    }
    i.current = !1;
  }, [
    t
  ]);
}
function l5(t, e, i) {
  ce(() => {
    if (e || i) return;
    let l = t.current;
    const r = pe(l ? l[0] : void 0);
    let o = (a) => {
      let s = he(a);
      Oe(s, t.current) ? be = t : Da(s) || (be = null);
    };
    return r.addEventListener("focusin", o, !1), l?.forEach((a) => a.addEventListener("focusin", o, !1)), () => {
      r.removeEventListener("focusin", o, !1), l?.forEach((a) => a.removeEventListener("focusin", o, !1));
    };
  }, [
    t,
    e,
    i
  ]);
}
function eo(t) {
  let e = _e.getTreeNode(be);
  for (; e && e.scopeRef !== t; ) {
    if (e.nodeToRestore) return !1;
    e = e.parent;
  }
  return e?.scopeRef === t;
}
function r5(t, e, i) {
  const l = N(typeof document < "u" ? Se(pe(t.current ? t.current[0] : void 0)) : null);
  ce(() => {
    let r = t.current;
    const o = pe(r ? r[0] : void 0);
    if (!e || i) return;
    let a = () => {
      (!be || dn(be, t)) && Oe(Se(o), t.current) && (be = t);
    };
    return o.addEventListener("focusin", a, !1), r?.forEach((s) => s.addEventListener("focusin", a, !1)), () => {
      o.removeEventListener("focusin", a, !1), r?.forEach((s) => s.removeEventListener("focusin", a, !1));
    };
  }, [
    t,
    i
  ]), ce(() => {
    const r = pe(t.current ? t.current[0] : void 0);
    if (!e) return;
    let o = (a) => {
      if (a.key !== "Tab" || a.altKey || a.ctrlKey || a.metaKey || !bi(t) || a.isComposing) return;
      let s = r.activeElement;
      if (!pt(s, t) || !eo(t)) return;
      let d = _e.getTreeNode(t);
      if (!d) return;
      let u = d.nodeToRestore, c = Re(r.body, {
        tabbable: !0
      });
      c.currentNode = s;
      let f = a.shiftKey ? c.previousNode() : c.nextNode();
      if ((!u || !u.isConnected || u === r.body) && (u = void 0, d.nodeToRestore = void 0), (!f || !pt(f, t)) && u) {
        c.currentNode = u;
        do
          f = a.shiftKey ? c.previousNode() : c.nextNode();
        while (pt(f, t));
        a.preventDefault(), a.stopPropagation(), f ? Ne(f, !0) : Da(u) ? Ne(u, !0) : s.blur();
      }
    };
    return i || r.addEventListener("keydown", o, !0), () => {
      i || r.removeEventListener("keydown", o, !0);
    };
  }, [
    t,
    e,
    i
  ]), ce(() => {
    const r = pe(t.current ? t.current[0] : void 0);
    if (!e) return;
    let o = _e.getTreeNode(t);
    if (o) {
      var a;
      return o.nodeToRestore = (a = l.current) !== null && a !== void 0 ? a : void 0, () => {
        let s = _e.getTreeNode(t);
        if (!s) return;
        let d = s.nodeToRestore, u = Se(r);
        if (e && d && (u && pt(u, t) || u === r.body && eo(t))) {
          let c = _e.clone();
          requestAnimationFrame(() => {
            if (r.activeElement === r.body) {
              let f = c.getTreeNode(t);
              for (; f; ) {
                if (f.nodeToRestore && f.nodeToRestore.isConnected) {
                  to(f.nodeToRestore);
                  return;
                }
                f = f.parent;
              }
              for (f = c.getTreeNode(t); f; ) {
                if (f.scopeRef && f.scopeRef.current && _e.getTreeNode(f.scopeRef)) {
                  let h = ka(f.scopeRef.current, !0);
                  to(h);
                  return;
                }
                f = f.parent;
              }
            }
          });
        }
      };
    }
  }, [
    t,
    e
  ]);
}
function to(t) {
  t.dispatchEvent(new CustomEvent(vl, {
    bubbles: !0,
    cancelable: !0
  })) && Ne(t);
}
function Re(t, e, i) {
  let l = e?.tabbable ? a0 : fa, r = t?.nodeType === Node.ELEMENT_NODE ? t : null, o = pe(r), a = Sd(o, t || o, NodeFilter.SHOW_ELEMENT, {
    acceptNode(s) {
      var d;
      return !(e == null || (d = e.from) === null || d === void 0) && d.contains(s) ? NodeFilter.FILTER_REJECT : l(s) && $a(s) && (!i || Oe(s, i)) && (!e?.accept || e.accept(s)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  return e?.from && (a.currentNode = e.from), a;
}
function o5(t, e = {}) {
  return {
    focusNext(i = {}) {
      let l = t.current;
      if (!l) return null;
      let { from: r, tabbable: o = e.tabbable, wrap: a = e.wrap, accept: s = e.accept } = i, d = r || Se(pe(l)), u = Re(l, {
        tabbable: o,
        accept: s
      });
      l.contains(d) && (u.currentNode = d);
      let c = u.nextNode();
      return !c && a && (u.currentNode = l, c = u.nextNode()), c && Ne(c, !0), c;
    },
    focusPrevious(i = e) {
      let l = t.current;
      if (!l) return null;
      let { from: r, tabbable: o = e.tabbable, wrap: a = e.wrap, accept: s = e.accept } = i, d = r || Se(pe(l)), u = Re(l, {
        tabbable: o,
        accept: s
      });
      if (l.contains(d)) u.currentNode = d;
      else {
        let f = jn(u);
        return f && Ne(f, !0), f ?? null;
      }
      let c = u.previousNode();
      if (!c && a) {
        u.currentNode = l;
        let f = jn(u);
        if (!f)
          return null;
        c = f;
      }
      return c && Ne(c, !0), c ?? null;
    },
    focusFirst(i = e) {
      let l = t.current;
      if (!l) return null;
      let { tabbable: r = e.tabbable, accept: o = e.accept } = i, s = Re(l, {
        tabbable: r,
        accept: o
      }).nextNode();
      return s && Ne(s, !0), s;
    },
    focusLast(i = e) {
      let l = t.current;
      if (!l) return null;
      let { tabbable: r = e.tabbable, accept: o = e.accept } = i, a = Re(l, {
        tabbable: r,
        accept: o
      }), s = jn(a);
      return s && Ne(s, !0), s ?? null;
    }
  };
}
function jn(t) {
  let e, i;
  do
    i = t.lastChild(), i && (e = i);
  while (i);
  return e;
}
class er {
  get size() {
    return this.fastMap.size;
  }
  getTreeNode(e) {
    return this.fastMap.get(e);
  }
  addTreeNode(e, i, l) {
    let r = this.fastMap.get(i ?? null);
    if (!r) return;
    let o = new Vl({
      scopeRef: e
    });
    r.addChild(o), o.parent = r, this.fastMap.set(e, o), l && (o.nodeToRestore = l);
  }
  addNode(e) {
    this.fastMap.set(e.scopeRef, e);
  }
  removeTreeNode(e) {
    if (e === null) return;
    let i = this.fastMap.get(e);
    if (!i) return;
    let l = i.parent;
    for (let o of this.traverse()) o !== i && i.nodeToRestore && o.nodeToRestore && i.scopeRef && i.scopeRef.current && Oe(o.nodeToRestore, i.scopeRef.current) && (o.nodeToRestore = i.nodeToRestore);
    let r = i.children;
    l && (l.removeChild(i), r.size > 0 && r.forEach((o) => l && l.addChild(o))), this.fastMap.delete(i.scopeRef);
  }
  // Pre Order Depth First
  *traverse(e = this.root) {
    if (e.scopeRef != null && (yield e), e.children.size > 0) for (let i of e.children) yield* this.traverse(i);
  }
  clone() {
    var e;
    let i = new er();
    var l;
    for (let r of this.traverse()) i.addTreeNode(r.scopeRef, (l = (e = r.parent) === null || e === void 0 ? void 0 : e.scopeRef) !== null && l !== void 0 ? l : null, r.nodeToRestore);
    return i;
  }
  constructor() {
    this.fastMap = /* @__PURE__ */ new Map(), this.root = new Vl({
      scopeRef: null
    }), this.fastMap.set(null, this.root);
  }
}
class Vl {
  addChild(e) {
    this.children.add(e), e.parent = this;
  }
  removeChild(e) {
    this.children.delete(e), e.parent = void 0;
  }
  constructor(e) {
    this.children = /* @__PURE__ */ new Set(), this.contain = !1, this.scopeRef = e.scopeRef;
  }
}
let _e = new er();
function ot(t = {}) {
  let { autoFocus: e = !1, isTextInput: i, within: l } = t, r = N({
    isFocused: !1,
    isFocusVisible: e || Lt()
  }), [o, a] = ne(!1), [s, d] = ne(() => r.current.isFocused && r.current.isFocusVisible), u = oe(() => d(r.current.isFocused && r.current.isFocusVisible), []), c = oe((p) => {
    r.current.isFocused = p, a(p), u();
  }, [
    u
  ]);
  M0((p) => {
    r.current.isFocusVisible = p, u();
  }, [], {
    isTextInput: i
  });
  let { focusProps: f } = Jl({
    isDisabled: l,
    onFocusChange: c
  }), { focusWithinProps: h } = Hn({
    isDisabled: !l,
    onFocusWithinChange: c
  });
  return {
    isFocused: o,
    isFocusVisible: s,
    focusProps: l ? h : f
  };
}
function _a(t) {
  let e = s5(pe(t));
  e !== t && (e && a5(e, t), t && Za(t, e));
}
function a5(t, e) {
  t.dispatchEvent(new FocusEvent("blur", {
    relatedTarget: e
  })), t.dispatchEvent(new FocusEvent("focusout", {
    bubbles: !0,
    relatedTarget: e
  }));
}
function Za(t, e) {
  t.dispatchEvent(new FocusEvent("focus", {
    relatedTarget: e
  })), t.dispatchEvent(new FocusEvent("focusin", {
    bubbles: !0,
    relatedTarget: e
  }));
}
function s5(t) {
  let e = Se(t), i = e?.getAttribute("aria-activedescendant");
  return i && t.getElementById(i) || e;
}
function d5(t, e) {
  const { "aria-label": i, "aria-labelledby": l, orientation: r = "horizontal" } = t;
  let [o, a] = ne(!1);
  ce(() => {
    var m;
    a(!!(e.current && (!((m = e.current.parentElement) === null || m === void 0) && m.closest('[role="toolbar"]'))));
  });
  const { direction: s } = Je(), d = s === "rtl" && r === "horizontal";
  let u = o5(e);
  const c = (m) => {
    if (m.currentTarget.contains(m.target)) {
      if (r === "horizontal" && m.key === "ArrowRight" || r === "vertical" && m.key === "ArrowDown")
        d ? u.focusPrevious() : u.focusNext();
      else if (r === "horizontal" && m.key === "ArrowLeft" || r === "vertical" && m.key === "ArrowUp")
        d ? u.focusNext() : u.focusPrevious();
      else if (m.key === "Tab") {
        m.stopPropagation(), f.current = document.activeElement, m.shiftKey ? u.focusFirst() : u.focusLast();
        return;
      } else
        return;
      m.stopPropagation(), m.preventDefault();
    }
  }, f = N(null), h = (m) => {
    !m.currentTarget.contains(m.relatedTarget) && !f.current && (f.current = m.target);
  }, p = (m) => {
    var b;
    if (f.current && !m.currentTarget.contains(m.relatedTarget) && (!((b = e.current) === null || b === void 0) && b.contains(m.target))) {
      var v;
      (v = f.current) === null || v === void 0 || v.focus(), f.current = null;
    }
  };
  return {
    toolbarProps: {
      ...me(t, {
        labelable: !0
      }),
      role: o ? "group" : "toolbar",
      "aria-orientation": r,
      "aria-label": i,
      "aria-labelledby": i == null ? l : void 0,
      onKeyDownCapture: o ? void 0 : c,
      onFocusCapture: o ? void 0 : p,
      onBlurCapture: o ? void 0 : h
    }
  };
}
function u5(t, e, i) {
  let { isDisabled: l } = t, { toolbarProps: r } = d5(t, i);
  return {
    groupProps: {
      ...r,
      role: e.selectionMode === "single" ? "radiogroup" : r.role,
      "aria-disabled": l
    }
  };
}
const Ea = 7e3;
let je = null;
function Ci(t, e = "assertive", i = Ea) {
  je ? je.announce(t, e, i) : (je = new c5(), (typeof IS_REACT_ACT_ENVIRONMENT == "boolean" ? IS_REACT_ACT_ENVIRONMENT : typeof jest < "u") ? je.announce(t, e, i) : setTimeout(() => {
    je?.isAttached() && je?.announce(t, e, i);
  }, 100));
}
class c5 {
  isAttached() {
    var e;
    return (e = this.node) === null || e === void 0 ? void 0 : e.isConnected;
  }
  createLog(e) {
    let i = document.createElement("div");
    return i.setAttribute("role", "log"), i.setAttribute("aria-live", e), i.setAttribute("aria-relevant", "additions"), i;
  }
  destroy() {
    this.node && (document.body.removeChild(this.node), this.node = null);
  }
  announce(e, i = "assertive", l = Ea) {
    var r, o;
    if (!this.node) return;
    let a = document.createElement("div");
    typeof e == "object" ? (a.setAttribute("role", "img"), a.setAttribute("aria-labelledby", e["aria-labelledby"])) : a.textContent = e, i === "assertive" ? (r = this.assertiveLog) === null || r === void 0 || r.appendChild(a) : (o = this.politeLog) === null || o === void 0 || o.appendChild(a), e !== "" && setTimeout(() => {
      a.remove();
    }, l);
  }
  clear(e) {
    this.node && ((!e || e === "assertive") && this.assertiveLog && (this.assertiveLog.innerHTML = ""), (!e || e === "polite") && this.politeLog && (this.politeLog.innerHTML = ""));
  }
  constructor() {
    this.node = null, this.assertiveLog = null, this.politeLog = null, typeof document < "u" && (this.node = document.createElement("div"), this.node.dataset.liveAnnouncer = "true", Object.assign(this.node.style, {
      border: 0,
      clip: "rect(0 0 0 0)",
      clipPath: "inset(50%)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      width: "1px",
      whiteSpace: "nowrap"
    }), this.assertiveLog = this.createLog("assertive"), this.node.appendChild(this.assertiveLog), this.politeLog = this.createLog("polite"), this.node.appendChild(this.politeLog), document.body.prepend(this.node));
  }
}
const Pa = {
  badInput: !1,
  customError: !1,
  patternMismatch: !1,
  rangeOverflow: !1,
  rangeUnderflow: !1,
  stepMismatch: !1,
  tooLong: !1,
  tooShort: !1,
  typeMismatch: !1,
  valueMissing: !1,
  valid: !0
}, Sa = {
  ...Pa,
  customError: !0,
  valid: !1
}, Ut = {
  isInvalid: !1,
  validationDetails: Pa,
  validationErrors: []
}, La = U({}), Mi = "__formValidationState" + Date.now();
function Zi(t) {
  if (t[Mi]) {
    let { realtimeValidation: e, displayValidation: i, updateValidation: l, resetValidation: r, commitValidation: o } = t[Mi];
    return {
      realtimeValidation: e,
      displayValidation: i,
      updateValidation: l,
      resetValidation: r,
      commitValidation: o
    };
  }
  return f5(t);
}
function f5(t) {
  let { isInvalid: e, validationState: i, name: l, value: r, builtinValidation: o, validate: a, validationBehavior: s = "aria" } = t;
  i && (e || (e = i === "invalid"));
  let d = e !== void 0 ? {
    isInvalid: e,
    validationErrors: [],
    validationDetails: Sa
  } : null, u = X(() => {
    if (!a || r == null) return null;
    let K = p5(a, r);
    return io(K);
  }, [
    a,
    r
  ]);
  o?.validationDetails.valid && (o = void 0);
  let c = J(La), f = X(() => l ? Array.isArray(l) ? l.flatMap((K) => Hl(c[K])) : Hl(c[l]) : [], [
    c,
    l
  ]), [h, p] = ne(c), [m, b] = ne(!1);
  c !== h && (p(c), b(!1));
  let v = X(() => io(m ? [] : f), [
    m,
    f
  ]), g = N(Ut), [y, $] = ne(Ut), _ = N(Ut), Z = () => {
    if (!D) return;
    A(!1);
    let K = u || o || g.current;
    qn(K, _.current) || (_.current = K, $(K));
  }, [D, A] = ne(!1);
  return le(Z), {
    realtimeValidation: d || v || u || o || Ut,
    displayValidation: s === "native" ? d || v || y : d || v || u || o || y,
    updateValidation(K) {
      s === "aria" && !qn(y, K) ? $(K) : g.current = K;
    },
    resetValidation() {
      let K = Ut;
      qn(K, _.current) || (_.current = K, $(K)), s === "native" && A(!1), b(!0);
    },
    commitValidation() {
      s === "native" && A(!0), b(!0);
    }
  };
}
function Hl(t) {
  return t ? Array.isArray(t) ? t : [
    t
  ] : [];
}
function p5(t, e) {
  if (typeof t == "function") {
    let i = t(e);
    if (i && typeof i != "boolean") return Hl(i);
  }
  return [];
}
function io(t) {
  return t.length ? {
    isInvalid: !0,
    validationErrors: t,
    validationDetails: Sa
  } : null;
}
function qn(t, e) {
  return t === e ? !0 : !!t && !!e && t.isInvalid === e.isInvalid && t.validationErrors.length === e.validationErrors.length && t.validationErrors.every((i, l) => i === e.validationErrors[l]) && Object.entries(t.validationDetails).every(([i, l]) => e.validationDetails[i] === l);
}
function tr(t, e, i) {
  let { validationBehavior: l, focus: r } = t;
  ce(() => {
    if (l === "native" && i?.current && !i.current.disabled) {
      let d = e.realtimeValidation.isInvalid ? e.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
      i.current.setCustomValidity(d), i.current.hasAttribute("title") || (i.current.title = ""), e.realtimeValidation.isInvalid || e.updateValidation(m5(i.current));
    }
  });
  let o = xe(() => {
    e.resetValidation();
  }), a = xe((d) => {
    var u;
    e.displayValidation.isInvalid || e.commitValidation();
    let c = i == null || (u = i.current) === null || u === void 0 ? void 0 : u.form;
    if (!d.defaultPrevented && i && c && g5(c) === i.current) {
      var f;
      r ? r() : (f = i.current) === null || f === void 0 || f.focus(), Xl("keyboard");
    }
    d.preventDefault();
  }), s = xe(() => {
    e.commitValidation();
  });
  le(() => {
    let d = i?.current;
    if (!d) return;
    let u = d.form;
    return d.addEventListener("invalid", a), d.addEventListener("change", s), u?.addEventListener("reset", o), () => {
      d.removeEventListener("invalid", a), d.removeEventListener("change", s), u?.removeEventListener("reset", o);
    };
  }, [
    i,
    a,
    s,
    o,
    l
  ]);
}
function h5(t) {
  let e = t.validity;
  return {
    badInput: e.badInput,
    customError: e.customError,
    patternMismatch: e.patternMismatch,
    rangeOverflow: e.rangeOverflow,
    rangeUnderflow: e.rangeUnderflow,
    stepMismatch: e.stepMismatch,
    tooLong: e.tooLong,
    tooShort: e.tooShort,
    typeMismatch: e.typeMismatch,
    valueMissing: e.valueMissing,
    valid: e.valid
  };
}
function m5(t) {
  return {
    isInvalid: !t.validity.valid,
    validationDetails: h5(t),
    validationErrors: t.validationMessage ? [
      t.validationMessage
    ] : []
  };
}
function g5(t) {
  for (let e = 0; e < t.elements.length; e++) {
    let i = t.elements[e];
    if (!i.validity.valid) return i;
  }
  return null;
}
function Ta(t, e, i) {
  let { isDisabled: l = !1, isReadOnly: r = !1, value: o, name: a, children: s, "aria-label": d, "aria-labelledby": u, validationState: c = "valid", isInvalid: f } = t, h = (D) => {
    D.stopPropagation(), e.setSelected(D.target.checked);
  }, p = s != null, m = d != null || u != null;
  !p && !m && process.env.NODE_ENV !== "production" && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let { pressProps: b, isPressed: v } = gt({
    isDisabled: l
  }), { pressProps: g, isPressed: y } = gt({
    onPress() {
      var D;
      e.toggle(), (D = i.current) === null || D === void 0 || D.focus();
    },
    isDisabled: l || r
  }), { focusableProps: $ } = Nt(t, i), _ = Q(b, $), Z = me(t, {
    labelable: !0
  });
  return Cn(i, e.isSelected, e.setSelected), {
    labelProps: Q(g, {
      onClick: (D) => D.preventDefault()
    }),
    inputProps: Q(Z, {
      "aria-invalid": f || c === "invalid" || void 0,
      "aria-errormessage": t["aria-errormessage"],
      "aria-controls": t["aria-controls"],
      "aria-readonly": r || void 0,
      onChange: h,
      disabled: l,
      ...o == null ? {} : {
        value: o
      },
      name: a,
      type: "checkbox",
      ..._
    }),
    isSelected: e.isSelected,
    isPressed: v || y,
    isDisabled: l,
    isReadOnly: r,
    isInvalid: f || c === "invalid"
  };
}
function Fa(t, e, i) {
  let l = Zi({
    ...t,
    value: e.isSelected
  }), { isInvalid: r, validationErrors: o, validationDetails: a } = l.displayValidation, { labelProps: s, inputProps: d, isSelected: u, isPressed: c, isDisabled: f, isReadOnly: h } = Ta({
    ...t,
    isInvalid: r
  }, e, i);
  tr(t, l, i);
  let { isIndeterminate: p, isRequired: m, validationBehavior: b = "aria" } = t;
  le(() => {
    i.current && (i.current.indeterminate = !!p);
  });
  let { pressProps: v } = gt({
    isDisabled: f || h,
    onPress() {
      let { [Mi]: g } = t, { commitValidation: y } = g || l;
      y();
    }
  });
  return {
    labelProps: Q(s, v),
    inputProps: {
      ...d,
      checked: u,
      "aria-required": m && b === "aria" || void 0,
      required: m && b === "native"
    },
    isSelected: u,
    isPressed: c,
    isDisabled: f,
    isReadOnly: h,
    isInvalid: r,
    validationErrors: o,
    validationDetails: a
  };
}
const b5 = /* @__PURE__ */ new WeakMap();
function $n(t) {
  let { id: e, label: i, "aria-labelledby": l, "aria-label": r, labelElementType: o = "label" } = t;
  e = Le(e);
  let a = Le(), s = {};
  i ? (l = l ? `${a} ${l}` : a, s = {
    id: a,
    htmlFor: o === "label" ? e : void 0
  }) : !l && !r && process.env.NODE_ENV !== "production" && console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility");
  let d = nn({
    id: e,
    "aria-label": r,
    "aria-labelledby": l
  });
  return {
    labelProps: s,
    fieldProps: d
  };
}
function Na(t) {
  let { description: e, errorMessage: i, isInvalid: l, validationState: r } = t, { labelProps: o, fieldProps: a } = $n(t), s = Et([
    !!e,
    !!i,
    l,
    r
  ]), d = Et([
    !!e,
    !!i,
    l,
    r
  ]);
  return a = Q(a, {
    "aria-describedby": [
      s,
      // Use aria-describedby for error message because aria-errormessage is unsupported using VoiceOver or NVDA. See https://github.com/adobe/react-spectrum/issues/1346#issuecomment-740136268
      d,
      t["aria-describedby"]
    ].filter(Boolean).join(" ") || void 0
  }), {
    labelProps: o,
    fieldProps: a,
    descriptionProps: {
      id: s
    },
    errorMessageProps: {
      id: d
    }
  };
}
function ir(t = {}) {
  let { isReadOnly: e } = t, [i, l] = rt(t.isSelected, t.defaultSelected || !1, t.onChange);
  function r(a) {
    e || l(a);
  }
  function o() {
    e || l(!i);
  }
  return {
    isSelected: i,
    setSelected: r,
    toggle: o
  };
}
function v5(t) {
  let { selectionMode: e = "single", disallowEmptySelection: i, isDisabled: l = !1 } = t, [r, o] = rt(X(() => t.selectedKeys ? new Set(t.selectedKeys) : void 0, [
    t.selectedKeys
  ]), X(() => t.defaultSelectedKeys ? new Set(t.defaultSelectedKeys) : /* @__PURE__ */ new Set(), [
    t.defaultSelectedKeys
  ]), t.onSelectionChange);
  return {
    selectionMode: e,
    isDisabled: l,
    selectedKeys: r,
    setSelectedKeys: o,
    toggleKey(a) {
      let s;
      e === "multiple" ? (s = new Set(r), s.has(a) && (!i || s.size > 1) ? s.delete(a) : s.add(a)) : s = new Set(r.has(a) && !i ? [] : [
        a
      ]), o(s);
    },
    setSelected(a, s) {
      s !== r.has(a) && this.toggleKey(a);
    }
  };
}
function C5(t, e, i) {
  const l = ir({
    isReadOnly: t.isReadOnly || e.isReadOnly,
    isSelected: e.isSelected(t.value),
    onChange(v) {
      v ? e.addValue(t.value) : e.removeValue(t.value), t.onChange && t.onChange(v);
    }
  });
  let { name: r, descriptionId: o, errorMessageId: a, validationBehavior: s } = b5.get(e);
  var d;
  s = (d = t.validationBehavior) !== null && d !== void 0 ? d : s;
  let { realtimeValidation: u } = Zi({
    ...t,
    value: l.isSelected,
    // Server validation is handled at the group level.
    name: void 0,
    validationBehavior: "aria"
  }), c = N(Ut), f = () => {
    e.setInvalid(t.value, u.isInvalid ? u : c.current);
  };
  le(f);
  let h = e.realtimeValidation.isInvalid ? e.realtimeValidation : u, p = s === "native" ? e.displayValidation : h;
  var m;
  let b = Fa({
    ...t,
    isReadOnly: t.isReadOnly || e.isReadOnly,
    isDisabled: t.isDisabled || e.isDisabled,
    name: t.name || r,
    isRequired: (m = t.isRequired) !== null && m !== void 0 ? m : e.isRequired,
    validationBehavior: s,
    [Mi]: {
      realtimeValidation: h,
      displayValidation: p,
      resetValidation: e.resetValidation,
      commitValidation: e.commitValidation,
      updateValidation(v) {
        c.current = v, f();
      }
    }
  }, l, i);
  return {
    ...b,
    inputProps: {
      ...b.inputProps,
      "aria-describedby": [
        t["aria-describedby"],
        e.isInvalid ? a : null,
        o
      ].filter(Boolean).join(" ") || void 0
    }
  };
}
const V5 = 0, H5 = 100, y5 = 1;
function w5(t) {
  const { isDisabled: e = !1, minValue: i = V5, maxValue: l = H5, numberFormatter: r, step: o = y5, orientation: a = "horizontal" } = t;
  let s = X(() => {
    let S = (l - i) / 10;
    return S = ai(S, 0, S + o, o), Math.max(S, o);
  }, [
    o,
    l,
    i
  ]), d = oe((S) => S?.map((G, O) => {
    let te = O === 0 ? i : S[O - 1], fe = O === S.length - 1 ? l : S[O + 1];
    return ai(G, te, fe, o);
  }), [
    i,
    l,
    o
  ]), u = X(() => d(lo(t.value)), [
    t.value
  ]), c = X(() => {
    var S;
    return d((S = lo(t.defaultValue)) !== null && S !== void 0 ? S : [
      i
    ]);
  }, [
    t.defaultValue,
    i
  ]), f = ro(t.value, t.defaultValue, t.onChange), h = ro(t.value, t.defaultValue, t.onChangeEnd);
  const [p, m] = rt(u, c, f), [b, v] = ne(new Array(p.length).fill(!1)), g = N(new Array(p.length).fill(!0)), [y, $] = ne(void 0), _ = N(p), Z = N(b);
  let D = (S) => {
    _.current = S, m(S);
  }, A = (S) => {
    Z.current = S, v(S);
  };
  function M(S) {
    return (S - i) / (l - i);
  }
  function F(S) {
    return S === 0 ? i : p[S - 1];
  }
  function K(S) {
    return S === p.length - 1 ? l : p[S + 1];
  }
  function C(S) {
    return g.current[S];
  }
  function P(S, G) {
    g.current[S] = G;
  }
  function T(S, G) {
    if (e || !C(S)) return;
    const O = F(S), te = K(S);
    G = ai(G, O, te, o);
    let fe = no(_.current, S, G);
    D(fe);
  }
  function E(S, G) {
    if (e || !C(S)) return;
    G && (_.current = p);
    const O = Z.current[S];
    Z.current = no(Z.current, S, G), A(Z.current), h && O && !Z.current.some(Boolean) && h(_.current);
  }
  function R(S) {
    return r.format(S);
  }
  function V(S, G) {
    T(S, H(G));
  }
  function x(S) {
    return Math.round((S - i) / o) * o + i;
  }
  function H(S) {
    const G = S * (l - i) + i;
    return Xt(x(G), i, l);
  }
  function I(S, G = 1) {
    let O = Math.max(G, o);
    T(S, ai(p[S] + O, i, l, o));
  }
  function ie(S, G = 1) {
    let O = Math.max(G, o);
    T(S, ai(p[S] - O, i, l, o));
  }
  return {
    values: p,
    getThumbValue: (S) => p[S],
    setThumbValue: T,
    setThumbPercent: V,
    isThumbDragging: (S) => b[S],
    setThumbDragging: E,
    focusedThumb: y,
    setFocusedThumb: $,
    getThumbPercent: (S) => M(p[S]),
    getValuePercent: M,
    getThumbValueLabel: (S) => R(p[S]),
    getFormattedValue: R,
    getThumbMinValue: F,
    getThumbMaxValue: K,
    getPercentValue: H,
    isThumbEditable: C,
    setThumbEditable: P,
    incrementThumb: I,
    decrementThumb: ie,
    step: o,
    pageSize: s,
    orientation: a,
    isDisabled: e
  };
}
function no(t, e, i) {
  return t[e] === i ? t : [
    ...t.slice(0, e),
    i,
    ...t.slice(e + 1)
  ];
}
function lo(t) {
  if (t != null)
    return Array.isArray(t) ? t : [
      t
    ];
}
function ro(t, e, i) {
  return (l) => {
    i?.(typeof t == "number" || typeof e == "number" ? l[0] : l);
  };
}
const oo = {
  border: 0,
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  width: "1px",
  whiteSpace: "nowrap"
};
function Ka(t = {}) {
  let { style: e, isFocusable: i } = t, [l, r] = ne(!1), { focusWithinProps: o } = Hn({
    isDisabled: !i,
    onFocusWithinChange: (s) => r(s)
  }), a = X(() => l ? e : e ? {
    ...oo,
    ...e
  } : oo, [
    l
  ]);
  return {
    visuallyHiddenProps: {
      ...o,
      style: a
    }
  };
}
function Dn(t) {
  let { children: e, elementType: i = "div", isFocusable: l, style: r, ...o } = t, { visuallyHiddenProps: a } = Ka(t);
  return /* @__PURE__ */ w.createElement(i, Q(o, a), e);
}
const nr = /* @__PURE__ */ new WeakMap();
function yl(t, e) {
  let i = nr.get(t);
  if (!i) throw new Error("Unknown slider state");
  return `${i.id}-${e}`;
}
function M5(t, e, i) {
  let { labelProps: l, fieldProps: r } = $n(t), o = t.orientation === "vertical";
  var a;
  nr.set(e, {
    id: (a = l.id) !== null && a !== void 0 ? a : r.id,
    "aria-describedby": t["aria-describedby"],
    "aria-details": t["aria-details"]
  });
  let { direction: s } = Je(), { addGlobalListener: d, removeGlobalListener: u } = Tt();
  const c = N(null), f = s === "rtl", h = N(null), { moveProps: p } = Ha({
    onMoveStart() {
      h.current = null;
    },
    onMove({ deltaX: g, deltaY: y }) {
      if (!i.current) return;
      let { height: $, width: _ } = i.current.getBoundingClientRect(), Z = o ? $ : _;
      h.current == null && c.current != null && (h.current = e.getThumbPercent(c.current) * Z);
      let D = o ? y : g;
      if ((o || f) && (D = -D), h.current += D, c.current != null && i.current) {
        const A = Xt(h.current / Z, 0, 1);
        e.setThumbPercent(c.current, A);
      }
    },
    onMoveEnd() {
      c.current != null && (e.setThumbDragging(c.current, !1), c.current = null);
    }
  });
  let m = N(void 0), b = (g, y, $, _) => {
    if (i.current && !t.isDisabled && e.values.every((Z, D) => !e.isThumbDragging(D))) {
      let { height: Z, width: D, top: A, left: M } = i.current.getBoundingClientRect(), F = o ? Z : D, T = ((o ? _ : $) - (o ? A : M)) / F;
      (s === "rtl" || o) && (T = 1 - T);
      let E = e.getPercentValue(T), R, V = e.values.findIndex((x) => E - x < 0);
      if (V === 0) R = V;
      else if (V === -1) R = e.values.length - 1;
      else {
        let x = e.values[V - 1], H = e.values[V];
        Math.abs(x - E) < Math.abs(H - E) ? R = V - 1 : R = V;
      }
      R >= 0 && e.isThumbEditable(R) ? (g.preventDefault(), c.current = R, e.setFocusedThumb(R), m.current = y, e.setThumbDragging(c.current, !0), e.setThumbValue(R, E), d(window, "mouseup", v, !1), d(window, "touchend", v, !1), d(window, "pointerup", v, !1)) : c.current = null;
    }
  }, v = (g) => {
    var y, $;
    (($ = g.pointerId) !== null && $ !== void 0 ? $ : (y = g.changedTouches) === null || y === void 0 ? void 0 : y[0].identifier) === m.current && (c.current != null && (e.setThumbDragging(c.current, !1), c.current = null), u(window, "mouseup", v, !1), u(window, "touchend", v, !1), u(window, "pointerup", v, !1));
  };
  return "htmlFor" in l && l.htmlFor && (delete l.htmlFor, l.onClick = () => {
    var g;
    (g = document.getElementById(yl(e, 0))) === null || g === void 0 || g.focus(), Xl("keyboard");
  }), {
    labelProps: l,
    // The root element of the Slider will have role="group" to group together
    // all the thumb inputs in the Slider.  The label of the Slider will
    // be used to label the group.
    groupProps: {
      role: "group",
      ...r
    },
    trackProps: Q({
      onMouseDown(g) {
        g.button !== 0 || g.altKey || g.ctrlKey || g.metaKey || b(g, void 0, g.clientX, g.clientY);
      },
      onPointerDown(g) {
        g.pointerType === "mouse" && (g.button !== 0 || g.altKey || g.ctrlKey || g.metaKey) || b(g, g.pointerId, g.clientX, g.clientY);
      },
      onTouchStart(g) {
        b(g, g.changedTouches[0].identifier, g.changedTouches[0].clientX, g.changedTouches[0].clientY);
      },
      style: {
        position: "relative",
        touchAction: "none"
      }
    }, p),
    outputProps: {
      htmlFor: e.values.map((g, y) => yl(e, y)).join(" "),
      "aria-live": "off"
    }
  };
}
function x5(t, e) {
  let { index: i = 0, isRequired: l, validationState: r, isInvalid: o, trackRef: a, inputRef: s, orientation: d = e.orientation, name: u } = t, c = t.isDisabled || e.isDisabled, f = d === "vertical", { direction: h } = Je(), { addGlobalListener: p, removeGlobalListener: m } = Tt(), b = nr.get(e);
  var v;
  const { labelProps: g, fieldProps: y } = $n({
    ...t,
    id: yl(e, i),
    "aria-labelledby": `${b.id} ${(v = t["aria-labelledby"]) !== null && v !== void 0 ? v : ""}`.trim()
  }), $ = e.values[i], _ = oe(() => {
    s.current && ze(s.current);
  }, [
    s
  ]), Z = e.focusedThumb === i;
  le(() => {
    Z && _();
  }, [
    Z,
    _
  ]);
  let D = h === "rtl", A = N(null), { keyboardProps: M } = Ql({
    onKeyDown(V) {
      let { getThumbMaxValue: x, getThumbMinValue: H, decrementThumb: I, incrementThumb: ie, setThumbValue: S, setThumbDragging: G, pageSize: O } = e;
      if (!/^(PageUp|PageDown|Home|End)$/.test(V.key)) {
        V.continuePropagation();
        return;
      }
      switch (V.preventDefault(), G(i, !0), V.key) {
        case "PageUp":
          ie(i, O);
          break;
        case "PageDown":
          I(i, O);
          break;
        case "Home":
          S(i, H(i));
          break;
        case "End":
          S(i, x(i));
          break;
      }
      G(i, !1);
    }
  }), { moveProps: F } = Ha({
    onMoveStart() {
      A.current = null, e.setThumbDragging(i, !0);
    },
    onMove({ deltaX: V, deltaY: x, pointerType: H, shiftKey: I }) {
      const { getThumbPercent: ie, setThumbPercent: S, decrementThumb: G, incrementThumb: O, step: te, pageSize: fe } = e;
      if (!a.current) return;
      let { width: ge, height: ae } = a.current.getBoundingClientRect(), $e = f ? ae : ge;
      if (A.current == null && (A.current = ie(i) * $e), H === "keyboard")
        V > 0 && D || V < 0 && !D || x > 0 ? G(i, I ? fe : te) : O(i, I ? fe : te);
      else {
        let Me = f ? x : V;
        (f || D) && (Me = -Me), A.current += Me, S(i, Xt(A.current / $e, 0, 1));
      }
    },
    onMoveEnd() {
      e.setThumbDragging(i, !1);
    }
  });
  e.setThumbEditable(i, !c);
  const { focusableProps: K } = Nt(Q(t, {
    onFocus: () => e.setFocusedThumb(i),
    onBlur: () => e.setFocusedThumb(void 0)
  }), s);
  let C = N(void 0), P = (V) => {
    _(), C.current = V, e.setThumbDragging(i, !0), p(window, "mouseup", T, !1), p(window, "touchend", T, !1), p(window, "pointerup", T, !1);
  }, T = (V) => {
    var x, H;
    ((H = V.pointerId) !== null && H !== void 0 ? H : (x = V.changedTouches) === null || x === void 0 ? void 0 : x[0].identifier) === C.current && (_(), e.setThumbDragging(i, !1), m(window, "mouseup", T, !1), m(window, "touchend", T, !1), m(window, "pointerup", T, !1));
  }, E = e.getThumbPercent(i);
  (f || h === "rtl") && (E = 1 - E);
  let R = c ? {} : Q(M, F, {
    onMouseDown: (V) => {
      V.button !== 0 || V.altKey || V.ctrlKey || V.metaKey || P();
    },
    onPointerDown: (V) => {
      V.button !== 0 || V.altKey || V.ctrlKey || V.metaKey || P(V.pointerId);
    },
    onTouchStart: (V) => {
      P(V.changedTouches[0].identifier);
    }
  });
  return Cn(s, $, (V) => {
    e.setThumbValue(i, V);
  }), {
    inputProps: Q(K, y, {
      type: "range",
      tabIndex: c ? void 0 : 0,
      min: e.getThumbMinValue(i),
      max: e.getThumbMaxValue(i),
      step: e.step,
      value: $,
      name: u,
      disabled: c,
      "aria-orientation": d,
      "aria-valuetext": e.getThumbValueLabel(i),
      "aria-required": l || void 0,
      "aria-invalid": o || r === "invalid" || void 0,
      "aria-errormessage": t["aria-errormessage"],
      "aria-describedby": [
        b["aria-describedby"],
        t["aria-describedby"]
      ].filter(Boolean).join(" "),
      "aria-details": [
        b["aria-details"],
        t["aria-details"]
      ].filter(Boolean).join(" "),
      onChange: (V) => {
        e.setThumbValue(i, parseFloat(V.target.value));
      }
    }),
    thumbProps: {
      ...R,
      style: {
        position: "absolute",
        [f ? "top" : "left"]: `${E * 100}%`,
        transform: "translate(-50%, -50%)",
        touchAction: "none"
      }
    },
    labelProps: g,
    isDragging: e.isThumbDragging(i),
    isDisabled: c,
    isFocused: Z
  };
}
function Aa(t, e) {
  let { inputElementType: i = "input", isDisabled: l = !1, isRequired: r = !1, isReadOnly: o = !1, type: a = "text", validationBehavior: s = "aria" } = t, [d, u] = rt(t.value, t.defaultValue || "", t.onChange), { focusableProps: c } = Nt(t, e), f = Zi({
    ...t,
    value: d
  }), { isInvalid: h, validationErrors: p, validationDetails: m } = f.displayValidation, { labelProps: b, fieldProps: v, descriptionProps: g, errorMessageProps: y } = Na({
    ...t,
    isInvalid: h,
    errorMessage: t.errorMessage || p
  }), $ = me(t, {
    labelable: !0
  });
  const _ = {
    type: a,
    pattern: t.pattern
  };
  return Cn(e, d, u), tr(t, f, e), le(() => {
    if (e.current instanceof Be(e.current).HTMLTextAreaElement) {
      let Z = e.current;
      Object.defineProperty(Z, "defaultValue", {
        get: () => Z.value,
        set: () => {
        },
        configurable: !0
      });
    }
  }, [
    e
  ]), {
    labelProps: b,
    inputProps: Q($, i === "input" ? _ : void 0, {
      disabled: l,
      readOnly: o,
      required: r && s === "native",
      "aria-required": r && s === "aria" || void 0,
      "aria-invalid": h || void 0,
      "aria-errormessage": t["aria-errormessage"],
      "aria-activedescendant": t["aria-activedescendant"],
      "aria-autocomplete": t["aria-autocomplete"],
      "aria-haspopup": t["aria-haspopup"],
      "aria-controls": t["aria-controls"],
      value: d,
      onChange: (Z) => u(Z.target.value),
      autoComplete: t.autoComplete,
      autoCapitalize: t.autoCapitalize,
      maxLength: t.maxLength,
      minLength: t.minLength,
      name: t.name,
      placeholder: t.placeholder,
      inputMode: t.inputMode,
      autoCorrect: t.autoCorrect,
      spellCheck: t.spellCheck,
      [parseInt(w.version, 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]: t.enterKeyHint,
      // Clipboard events
      onCopy: t.onCopy,
      onCut: t.onCut,
      onPaste: t.onPaste,
      // Composition events
      onCompositionEnd: t.onCompositionEnd,
      onCompositionStart: t.onCompositionStart,
      onCompositionUpdate: t.onCompositionUpdate,
      // Selection events
      onSelect: t.onSelect,
      // Input events
      onBeforeInput: t.onBeforeInput,
      onInput: t.onInput,
      ...c,
      ...v
    }),
    descriptionProps: g,
    errorMessageProps: y,
    isInvalid: h,
    validationErrors: p,
    validationDetails: m
  };
}
var Ba = {};
Ba = {
  buttonLabel: "عرض المقترحات",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} خيار`,
    other: () => `${e.number(t.optionCount)} خيارات`
  })} متاحة.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `المجموعة المدخلة ${t.groupTitle}, مع ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} خيار`,
      other: () => `${e.number(t.groupCount)} خيارات`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", محدد",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "مقترحات",
  selectedAnnouncement: (t) => `${t.optionText}، محدد`
};
var Ra = {};
Ra = {
  buttonLabel: "Покажи предложения",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} опция`,
    other: () => `${e.number(t.optionCount)} опции`
  })} на разположение.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Въведена група ${t.groupTitle}, с ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} опция`,
      other: () => `${e.number(t.groupCount)} опции`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", избрани",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Предложения",
  selectedAnnouncement: (t) => `${t.optionText}, избрани`
};
var Ia = {};
Ia = {
  buttonLabel: "Zobrazit doporučení",
  countAnnouncement: (t, e) => `K dispozici ${e.plural(t.optionCount, {
    one: () => `je ${e.number(t.optionCount)} možnost`,
    other: () => `jsou/je ${e.number(t.optionCount)} možnosti/-í`
  })}.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Zadaná skupina „${t.groupTitle}“ ${e.plural(t.groupCount, {
      one: () => `s ${e.number(t.groupCount)} možností`,
      other: () => `se ${e.number(t.groupCount)} možnostmi`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: " (vybráno)",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Návrhy",
  selectedAnnouncement: (t) => `${t.optionText}, vybráno`
};
var za = {};
za = {
  buttonLabel: "Vis forslag",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} mulighed tilgængelig`,
    other: () => `${e.number(t.optionCount)} muligheder tilgængelige`
  })}.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Angivet gruppe ${t.groupTitle}, med ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} mulighed`,
      other: () => `${e.number(t.groupCount)} muligheder`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", valgt",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Forslag",
  selectedAnnouncement: (t) => `${t.optionText}, valgt`
};
var Oa = {};
Oa = {
  buttonLabel: "Empfehlungen anzeigen",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} Option`,
    other: () => `${e.number(t.optionCount)} Optionen`
  })} verfügbar.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Eingetretene Gruppe ${t.groupTitle}, mit ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} Option`,
      other: () => `${e.number(t.groupCount)} Optionen`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", ausgewählt",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Empfehlungen",
  selectedAnnouncement: (t) => `${t.optionText}, ausgewählt`
};
var Ua = {};
Ua = {
  buttonLabel: "Προβολή προτάσεων",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} επιλογή`,
    other: () => `${e.number(t.optionCount)} επιλογές `
  })} διαθέσιμες.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Εισαγμένη ομάδα ${t.groupTitle}, με ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} επιλογή`,
      other: () => `${e.number(t.groupCount)} επιλογές`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", επιλεγμένο",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Προτάσεις",
  selectedAnnouncement: (t) => `${t.optionText}, επιλέχθηκε`
};
var Ga = {};
Ga = {
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Entered group ${t.groupTitle}, with ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} option`,
      other: () => `${e.number(t.groupCount)} options`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", selected",
    other: ""
  }, t.isSelected)}`,
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} option`,
    other: () => `${e.number(t.optionCount)} options`
  })} available.`,
  selectedAnnouncement: (t) => `${t.optionText}, selected`,
  buttonLabel: "Show suggestions",
  listboxLabel: "Suggestions"
};
var Wa = {};
Wa = {
  buttonLabel: "Mostrar sugerencias",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opción`,
    other: () => `${e.number(t.optionCount)} opciones`
  })} disponible(s).`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Se ha unido al grupo ${t.groupTitle}, con ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opción`,
      other: () => `${e.number(t.groupCount)} opciones`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", seleccionado",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Sugerencias",
  selectedAnnouncement: (t) => `${t.optionText}, seleccionado`
};
var ja = {};
ja = {
  buttonLabel: "Kuva soovitused",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} valik`,
    other: () => `${e.number(t.optionCount)} valikud`
  })} saadaval.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Sisestatud rühm ${t.groupTitle}, valikuga ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} valik`,
      other: () => `${e.number(t.groupCount)} valikud`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", valitud",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Soovitused",
  selectedAnnouncement: (t) => `${t.optionText}, valitud`
};
var qa = {};
qa = {
  buttonLabel: "Näytä ehdotukset",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} vaihtoehto`,
    other: () => `${e.number(t.optionCount)} vaihtoehdot`
  })} saatavilla.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Mentiin ryhmään ${t.groupTitle}, ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} vaihtoehdon`,
      other: () => `${e.number(t.groupCount)} vaihtoehdon`
    })} kanssa.`,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", valittu",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Ehdotukset",
  selectedAnnouncement: (t) => `${t.optionText}, valittu`
};
var Ya = {};
Ya = {
  buttonLabel: "Afficher les suggestions",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} option`,
    other: () => `${e.number(t.optionCount)} options`
  })} disponible(s).`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Groupe ${t.groupTitle} rejoint, avec ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} option`,
      other: () => `${e.number(t.groupCount)} options`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", sélectionné(s)",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Suggestions",
  selectedAnnouncement: (t) => `${t.optionText}, sélectionné`
};
var Xa = {};
Xa = {
  buttonLabel: "הצג הצעות",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `אפשרות ${e.number(t.optionCount)}`,
    other: () => `${e.number(t.optionCount)} אפשרויות`
  })} במצב זמין.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `נכנס לקבוצה ${t.groupTitle}, עם ${e.plural(t.groupCount, {
      one: () => `אפשרות ${e.number(t.groupCount)}`,
      other: () => `${e.number(t.groupCount)} אפשרויות`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", נבחר",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "הצעות",
  selectedAnnouncement: (t) => `${t.optionText}, נבחר`
};
var Ja = {};
Ja = {
  buttonLabel: "Prikaži prijedloge",
  countAnnouncement: (t, e) => `Dostupno još: ${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opcija`,
    other: () => `${e.number(t.optionCount)} opcije/a`
  })}.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Unesena skupina ${t.groupTitle}, s ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opcijom`,
      other: () => `${e.number(t.groupCount)} opcije/a`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", odabranih",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Prijedlozi",
  selectedAnnouncement: (t) => `${t.optionText}, odabrano`
};
var Qa = {};
Qa = {
  buttonLabel: "Javaslatok megjelenítése",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} lehetőség`,
    other: () => `${e.number(t.optionCount)} lehetőség`
  })} áll rendelkezésre.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Belépett a(z) ${t.groupTitle} csoportba, amely ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} lehetőséget`,
      other: () => `${e.number(t.groupCount)} lehetőséget`
    })} tartalmaz. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", kijelölve",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Javaslatok",
  selectedAnnouncement: (t) => `${t.optionText}, kijelölve`
};
var e1 = {};
e1 = {
  buttonLabel: "Mostra suggerimenti",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opzione disponibile`,
    other: () => `${e.number(t.optionCount)} opzioni disponibili`
  })}.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Ingresso nel gruppo ${t.groupTitle}, con ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opzione`,
      other: () => `${e.number(t.groupCount)} opzioni`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", selezionato",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Suggerimenti",
  selectedAnnouncement: (t) => `${t.optionText}, selezionato`
};
var t1 = {};
t1 = {
  buttonLabel: "候補を表示",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} 個のオプション`,
    other: () => `${e.number(t.optionCount)} 個のオプション`
  })}を利用できます。`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `入力されたグループ ${t.groupTitle}、${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} 個のオプション`,
      other: () => `${e.number(t.groupCount)} 個のオプション`
    })}を含む。`,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: "、選択済み",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "候補",
  selectedAnnouncement: (t) => `${t.optionText}、選択済み`
};
var i1 = {};
i1 = {
  buttonLabel: "제안 사항 표시",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)}개 옵션`,
    other: () => `${e.number(t.optionCount)}개 옵션`
  })}을 사용할 수 있습니다.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `입력한 그룹 ${t.groupTitle}, ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)}개 옵션`,
      other: () => `${e.number(t.groupCount)}개 옵션`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", 선택됨",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "제안",
  selectedAnnouncement: (t) => `${t.optionText}, 선택됨`
};
var n1 = {};
n1 = {
  buttonLabel: "Rodyti pasiūlymus",
  countAnnouncement: (t, e) => `Yra ${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} parinktis`,
    other: () => `${e.number(t.optionCount)} parinktys (-ių)`
  })}.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Įvesta grupė ${t.groupTitle}, su ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} parinktimi`,
      other: () => `${e.number(t.groupCount)} parinktimis (-ių)`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", pasirinkta",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Pasiūlymai",
  selectedAnnouncement: (t) => `${t.optionText}, pasirinkta`
};
var l1 = {};
l1 = {
  buttonLabel: "Rādīt ieteikumus",
  countAnnouncement: (t, e) => `Pieejamo opciju skaits: ${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opcija`,
    other: () => `${e.number(t.optionCount)} opcijas`
  })}.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Ievadīta grupa ${t.groupTitle}, ar ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opciju`,
      other: () => `${e.number(t.groupCount)} opcijām`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", atlasīta",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Ieteikumi",
  selectedAnnouncement: (t) => `${t.optionText}, atlasīta`
};
var r1 = {};
r1 = {
  buttonLabel: "Vis forslag",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} alternativ`,
    other: () => `${e.number(t.optionCount)} alternativer`
  })} finnes.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Angitt gruppe ${t.groupTitle}, med ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} alternativ`,
      other: () => `${e.number(t.groupCount)} alternativer`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", valgt",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Forslag",
  selectedAnnouncement: (t) => `${t.optionText}, valgt`
};
var o1 = {};
o1 = {
  buttonLabel: "Suggesties weergeven",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} optie`,
    other: () => `${e.number(t.optionCount)} opties`
  })} beschikbaar.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Groep ${t.groupTitle} ingevoerd met ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} optie`,
      other: () => `${e.number(t.groupCount)} opties`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", geselecteerd",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Suggesties",
  selectedAnnouncement: (t) => `${t.optionText}, geselecteerd`
};
var a1 = {};
a1 = {
  buttonLabel: "Wyświetlaj sugestie",
  countAnnouncement: (t, e) => `dostępna/dostępne(-nych) ${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opcja`,
    other: () => `${e.number(t.optionCount)} opcje(-i)`
  })}.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Dołączono do grupy ${t.groupTitle}, z ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opcją`,
      other: () => `${e.number(t.groupCount)} opcjami`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", wybrano",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Sugestie",
  selectedAnnouncement: (t) => `${t.optionText}, wybrano`
};
var s1 = {};
s1 = {
  buttonLabel: "Mostrar sugestões",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opção`,
    other: () => `${e.number(t.optionCount)} opções`
  })} disponível.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Grupo inserido ${t.groupTitle}, com ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opção`,
      other: () => `${e.number(t.groupCount)} opções`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", selecionado",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Sugestões",
  selectedAnnouncement: (t) => `${t.optionText}, selecionado`
};
var d1 = {};
d1 = {
  buttonLabel: "Apresentar sugestões",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opção`,
    other: () => `${e.number(t.optionCount)} opções`
  })} disponível.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Grupo introduzido ${t.groupTitle}, com ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opção`,
      other: () => `${e.number(t.groupCount)} opções`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", selecionado",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Sugestões",
  selectedAnnouncement: (t) => `${t.optionText}, selecionado`
};
var u1 = {};
u1 = {
  buttonLabel: "Afișare sugestii",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opțiune`,
    other: () => `${e.number(t.optionCount)} opțiuni`
  })} disponibile.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Grup ${t.groupTitle} introdus, cu ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opțiune`,
      other: () => `${e.number(t.groupCount)} opțiuni`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", selectat",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Sugestii",
  selectedAnnouncement: (t) => `${t.optionText}, selectat`
};
var c1 = {};
c1 = {
  buttonLabel: "Показать предложения",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} параметр`,
    other: () => `${e.number(t.optionCount)} параметров`
  })} доступно.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Введенная группа ${t.groupTitle}, с ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} параметром`,
      other: () => `${e.number(t.groupCount)} параметрами`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", выбранными",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Предложения",
  selectedAnnouncement: (t) => `${t.optionText}, выбрано`
};
var f1 = {};
f1 = {
  buttonLabel: "Zobraziť návrhy",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} možnosť`,
    other: () => `${e.number(t.optionCount)} možnosti/-í`
  })} k dispozícii.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Zadaná skupina ${t.groupTitle}, s ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} možnosťou`,
      other: () => `${e.number(t.groupCount)} možnosťami`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", vybraté",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Návrhy",
  selectedAnnouncement: (t) => `${t.optionText}, vybraté`
};
var p1 = {};
p1 = {
  buttonLabel: "Prikaži predloge",
  countAnnouncement: (t, e) => `Na voljo je ${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opcija`,
    other: () => `${e.number(t.optionCount)} opcije`
  })}.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Vnesena skupina ${t.groupTitle}, z ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opcija`,
      other: () => `${e.number(t.groupCount)} opcije`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", izbrano",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Predlogi",
  selectedAnnouncement: (t) => `${t.optionText}, izbrano`
};
var h1 = {};
h1 = {
  buttonLabel: "Prikaži predloge",
  countAnnouncement: (t, e) => `Dostupno još: ${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opcija`,
    other: () => `${e.number(t.optionCount)} opcije/a`
  })}.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Unesena grupa ${t.groupTitle}, s ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opcijom`,
      other: () => `${e.number(t.groupCount)} optione/a`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", izabranih",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Predlozi",
  selectedAnnouncement: (t) => `${t.optionText}, izabrano`
};
var m1 = {};
m1 = {
  buttonLabel: "Visa förslag",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} alternativ`,
    other: () => `${e.number(t.optionCount)} alternativ`
  })} tillgängliga.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Ingick i gruppen ${t.groupTitle} med ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} alternativ`,
      other: () => `${e.number(t.groupCount)} alternativ`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", valda",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Förslag",
  selectedAnnouncement: (t) => `${t.optionText}, valda`
};
var g1 = {};
g1 = {
  buttonLabel: "Önerileri göster",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} seçenek`,
    other: () => `${e.number(t.optionCount)} seçenekler`
  })} kullanılabilir.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Girilen grup ${t.groupTitle}, ile ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} seçenek`,
      other: () => `${e.number(t.groupCount)} seçenekler`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", seçildi",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Öneriler",
  selectedAnnouncement: (t) => `${t.optionText}, seçildi`
};
var b1 = {};
b1 = {
  buttonLabel: "Показати пропозиції",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} параметр`,
    other: () => `${e.number(t.optionCount)} параметри(-ів)`
  })} доступно.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Введена група ${t.groupTitle}, з ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} параметр`,
      other: () => `${e.number(t.groupCount)} параметри(-ів)`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", вибрано",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Пропозиції",
  selectedAnnouncement: (t) => `${t.optionText}, вибрано`
};
var v1 = {};
v1 = {
  buttonLabel: "显示建议",
  countAnnouncement: (t, e) => `有 ${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} 个选项`,
    other: () => `${e.number(t.optionCount)} 个选项`
  })}可用。`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `进入了 ${t.groupTitle} 组，其中有 ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} 个选项`,
      other: () => `${e.number(t.groupCount)} 个选项`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", 已选择",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "建议",
  selectedAnnouncement: (t) => `${t.optionText}, 已选择`
};
var C1 = {};
C1 = {
  buttonLabel: "顯示建議",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} 選項`,
    other: () => `${e.number(t.optionCount)} 選項`
  })} 可用。`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `輸入的群組 ${t.groupTitle}, 有 ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} 選項`,
      other: () => `${e.number(t.groupCount)} 選項`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", 已選取",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "建議",
  selectedAnnouncement: (t) => `${t.optionText}, 已選取`
};
var V1 = {};
V1 = {
  "ar-AE": Ba,
  "bg-BG": Ra,
  "cs-CZ": Ia,
  "da-DK": za,
  "de-DE": Oa,
  "el-GR": Ua,
  "en-US": Ga,
  "es-ES": Wa,
  "et-EE": ja,
  "fi-FI": qa,
  "fr-FR": Ya,
  "he-IL": Xa,
  "hr-HR": Ja,
  "hu-HU": Qa,
  "it-IT": e1,
  "ja-JP": t1,
  "ko-KR": i1,
  "lt-LT": n1,
  "lv-LV": l1,
  "nb-NO": r1,
  "nl-NL": o1,
  "pl-PL": a1,
  "pt-BR": s1,
  "pt-PT": d1,
  "ro-RO": u1,
  "ru-RU": c1,
  "sk-SK": f1,
  "sl-SI": p1,
  "sr-SP": h1,
  "sv-SE": m1,
  "tr-TR": g1,
  "uk-UA": b1,
  "zh-CN": v1,
  "zh-TW": C1
};
const Ye = {
  top: "top",
  bottom: "top",
  left: "left",
  right: "left"
}, un = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, $5 = {
  top: "left",
  left: "top"
}, wl = {
  top: "height",
  left: "width"
}, H1 = {
  width: "totalWidth",
  height: "totalHeight"
}, Wi = {};
let Pe = typeof document < "u" ? window.visualViewport : null;
function ao(t) {
  let e = 0, i = 0, l = 0, r = 0, o = 0, a = 0, s = {};
  var d;
  let u = ((d = Pe?.scale) !== null && d !== void 0 ? d : 1) > 1;
  if (t.tagName === "BODY") {
    let m = document.documentElement;
    l = m.clientWidth, r = m.clientHeight;
    var c;
    e = (c = Pe?.width) !== null && c !== void 0 ? c : l;
    var f;
    i = (f = Pe?.height) !== null && f !== void 0 ? f : r, s.top = m.scrollTop || t.scrollTop, s.left = m.scrollLeft || t.scrollLeft, Pe && (o = Pe.offsetTop, a = Pe.offsetLeft);
  } else
    ({ width: e, height: i, top: o, left: a } = jt(t)), s.top = t.scrollTop, s.left = t.scrollLeft, l = e, r = i;
  if (zl() && (t.tagName === "BODY" || t.tagName === "HTML") && u) {
    s.top = 0, s.left = 0;
    var h;
    o = (h = Pe?.pageTop) !== null && h !== void 0 ? h : 0;
    var p;
    a = (p = Pe?.pageLeft) !== null && p !== void 0 ? p : 0;
  }
  return {
    width: e,
    height: i,
    totalWidth: l,
    totalHeight: r,
    scroll: s,
    top: o,
    left: a
  };
}
function D5(t) {
  return {
    top: t.scrollTop,
    left: t.scrollLeft,
    width: t.scrollWidth,
    height: t.scrollHeight
  };
}
function so(t, e, i, l, r, o, a) {
  var s;
  let d = (s = r.scroll[t]) !== null && s !== void 0 ? s : 0, u = l[wl[t]], c = l.scroll[Ye[t]] + o, f = u + l.scroll[Ye[t]] - o, h = e - d + a[t] - l[Ye[t]], p = e - d + i + a[t] - l[Ye[t]];
  return h < c ? c - h : p > f ? Math.max(f - p, c - h) : 0;
}
function k5(t) {
  let e = window.getComputedStyle(t);
  return {
    top: parseInt(e.marginTop, 10) || 0,
    bottom: parseInt(e.marginBottom, 10) || 0,
    left: parseInt(e.marginLeft, 10) || 0,
    right: parseInt(e.marginRight, 10) || 0
  };
}
function uo(t) {
  if (Wi[t]) return Wi[t];
  let [e, i] = t.split(" "), l = Ye[e] || "right", r = $5[l];
  Ye[i] || (i = "center");
  let o = wl[l], a = wl[r];
  return Wi[t] = {
    placement: e,
    crossPlacement: i,
    axis: l,
    crossAxis: r,
    size: o,
    crossSize: a
  }, Wi[t];
}
function Yn(t, e, i, l, r, o, a, s, d, u) {
  let { placement: c, crossPlacement: f, axis: h, crossAxis: p, size: m, crossSize: b } = l, v = {};
  var g;
  v[p] = (g = t[p]) !== null && g !== void 0 ? g : 0;
  var y, $, _, Z;
  f === "center" ? v[p] += (((y = t[b]) !== null && y !== void 0 ? y : 0) - (($ = i[b]) !== null && $ !== void 0 ? $ : 0)) / 2 : f !== p && (v[p] += ((_ = t[b]) !== null && _ !== void 0 ? _ : 0) - ((Z = i[b]) !== null && Z !== void 0 ? Z : 0)), v[p] += o;
  const D = t[p] - i[b] + d + u, A = t[p] + t[b] - d - u;
  if (v[p] = Xt(v[p], D, A), c === h) {
    const M = s ? a[m] : e[H1[m]];
    v[un[h]] = Math.floor(M - t[h] + r);
  } else v[h] = Math.floor(t[h] + t[m] + r);
  return v;
}
function _5(t, e, i, l, r, o, a, s) {
  const d = l ? i.height : e[H1.height];
  var u;
  let c = t.top != null ? i.top + t.top : i.top + (d - ((u = t.bottom) !== null && u !== void 0 ? u : 0) - a);
  var f, h, p, m, b, v;
  let g = s !== "top" ? (
    // We want the distance between the top of the overlay to the bottom of the boundary
    Math.max(0, e.height + e.top + ((f = e.scroll.top) !== null && f !== void 0 ? f : 0) - c - (((h = r.top) !== null && h !== void 0 ? h : 0) + ((p = r.bottom) !== null && p !== void 0 ? p : 0) + o))
  ) : Math.max(0, c + a - (e.top + ((m = e.scroll.top) !== null && m !== void 0 ? m : 0)) - (((b = r.top) !== null && b !== void 0 ? b : 0) + ((v = r.bottom) !== null && v !== void 0 ? v : 0) + o));
  return Math.min(e.height - o * 2, g);
}
function co(t, e, i, l, r, o) {
  let { placement: a, axis: s, size: d } = o;
  var u, c;
  if (a === s) return Math.max(0, i[s] - t[s] - ((u = t.scroll[s]) !== null && u !== void 0 ? u : 0) + e[s] - ((c = l[s]) !== null && c !== void 0 ? c : 0) - l[un[s]] - r);
  var f;
  return Math.max(0, t[d] + t[s] + t.scroll[s] - e[s] - i[s] - i[d] - ((f = l[s]) !== null && f !== void 0 ? f : 0) - l[un[s]] - r);
}
function Z5(t, e, i, l, r, o, a, s, d, u, c, f, h, p, m, b) {
  let v = uo(t), { size: g, crossAxis: y, crossSize: $, placement: _, crossPlacement: Z } = v, D = Yn(e, s, i, v, c, f, u, h, m, b), A = c, M = co(s, u, e, r, o + c, v);
  if (a && l[g] > M) {
    let te = uo(`${un[_]} ${Z}`), fe = Yn(e, s, i, te, c, f, u, h, m, b);
    co(s, u, e, r, o + c, te) > M && (v = te, D = fe, A = c);
  }
  let F = "bottom";
  v.axis === "top" ? v.placement === "top" ? F = "top" : v.placement === "bottom" && (F = "bottom") : v.crossAxis === "top" && (v.crossPlacement === "top" ? F = "bottom" : v.crossPlacement === "bottom" && (F = "top"));
  let K = so(y, D[y], i[$], s, d, o, u);
  D[y] += K;
  let C = _5(D, s, u, h, r, o, i.height, F);
  p && p < C && (C = p), i.height = Math.min(i.height, C), D = Yn(e, s, i, v, A, f, u, h, m, b), K = so(y, D[y], i[$], s, d, o, u), D[y] += K;
  let P = {}, T = e[y] + 0.5 * e[$] - D[y] - r[Ye[y]];
  const E = m / 2 + b;
  var R, V, x, H;
  const I = Ye[y] === "left" ? ((R = r.left) !== null && R !== void 0 ? R : 0) + ((V = r.right) !== null && V !== void 0 ? V : 0) : ((x = r.top) !== null && x !== void 0 ? x : 0) + ((H = r.bottom) !== null && H !== void 0 ? H : 0), ie = i[$] - I - m / 2 - b, S = e[y] + m / 2 - (D[y] + r[Ye[y]]), G = e[y] + e[$] - m / 2 - (D[y] + r[Ye[y]]), O = Xt(T, S, G);
  return P[y] = Xt(O, E, ie), {
    position: D,
    maxHeight: C,
    arrowOffsetLeft: P.left,
    arrowOffsetTop: P.top,
    placement: v.placement
  };
}
function E5(t) {
  let { placement: e, targetNode: i, overlayNode: l, scrollNode: r, padding: o, shouldFlip: a, boundaryElement: s, offset: d, crossOffset: u, maxHeight: c, arrowSize: f = 0, arrowBoundaryOffset: h = 0 } = t, p = l instanceof HTMLElement ? P5(l) : document.documentElement, m = p === document.documentElement;
  const b = window.getComputedStyle(p).position;
  let v = !!b && b !== "static", g = m ? jt(i) : fo(i, p);
  if (!m) {
    let { marginTop: P, marginLeft: T } = window.getComputedStyle(i);
    g.top += parseInt(P, 10) || 0, g.left += parseInt(T, 10) || 0;
  }
  let y = jt(l), $ = k5(l);
  var _, Z;
  y.width += ((_ = $.left) !== null && _ !== void 0 ? _ : 0) + ((Z = $.right) !== null && Z !== void 0 ? Z : 0);
  var D, A;
  y.height += ((D = $.top) !== null && D !== void 0 ? D : 0) + ((A = $.bottom) !== null && A !== void 0 ? A : 0);
  let M = D5(r), F = ao(s), K = ao(p), C = s.tagName === "BODY" ? jt(p) : fo(p, s);
  return p.tagName === "HTML" && s.tagName === "BODY" && (K.scroll.top = 0, K.scroll.left = 0), Z5(e, g, y, M, $, o, a, F, K, C, d, u, v, c, f, h);
}
function jt(t) {
  let { top: e, left: i, width: l, height: r } = t.getBoundingClientRect(), { scrollTop: o, scrollLeft: a, clientTop: s, clientLeft: d } = document.documentElement;
  return {
    top: e + o - s,
    left: i + a - d,
    width: l,
    height: r
  };
}
function fo(t, e) {
  let i = window.getComputedStyle(t), l;
  if (i.position === "fixed") {
    let { top: r, left: o, width: a, height: s } = t.getBoundingClientRect();
    l = {
      top: r,
      left: o,
      width: a,
      height: s
    };
  } else {
    l = jt(t);
    let r = jt(e), o = window.getComputedStyle(e);
    r.top += (parseInt(o.borderTopWidth, 10) || 0) - e.scrollTop, r.left += (parseInt(o.borderLeftWidth, 10) || 0) - e.scrollLeft, l.top -= r.top, l.left -= r.left;
  }
  return l.top -= parseInt(i.marginTop, 10) || 0, l.left -= parseInt(i.marginLeft, 10) || 0, l;
}
function P5(t) {
  let e = t.offsetParent;
  if (e && e === document.body && window.getComputedStyle(e).position === "static" && !po(e) && (e = document.documentElement), e == null)
    for (e = t.parentElement; e && !po(e); ) e = e.parentElement;
  return e || document.documentElement;
}
function po(t) {
  let e = window.getComputedStyle(t);
  return e.transform !== "none" || /transform|perspective/.test(e.willChange) || e.filter !== "none" || e.contain === "paint" || "backdropFilter" in e && e.backdropFilter !== "none" || "WebkitBackdropFilter" in e && e.WebkitBackdropFilter !== "none";
}
const y1 = /* @__PURE__ */ new WeakMap();
function S5(t) {
  let { triggerRef: e, isOpen: i, onClose: l } = t;
  le(() => {
    if (!i || l === null) return;
    let r = (o) => {
      let a = o.target;
      if (!e.current || a instanceof Node && !a.contains(e.current) || o.target instanceof HTMLInputElement || o.target instanceof HTMLTextAreaElement) return;
      let s = l || y1.get(e.current);
      s && s();
    };
    return window.addEventListener("scroll", r, !0), () => {
      window.removeEventListener("scroll", r, !0);
    };
  }, [
    i,
    l,
    e
  ]);
}
let De = typeof document < "u" ? window.visualViewport : null;
function w1(t) {
  let { direction: e } = Je(), { arrowSize: i = 0, targetRef: l, overlayRef: r, scrollRef: o = r, placement: a = "bottom", containerPadding: s = 12, shouldFlip: d = !0, boundaryElement: u = typeof document < "u" ? document.body : null, offset: c = 0, crossOffset: f = 0, shouldUpdatePosition: h = !0, isOpen: p = !0, onClose: m, maxHeight: b, arrowBoundaryOffset: v = 0 } = t, [g, y] = ne(null), $ = [
    h,
    a,
    r.current,
    l.current,
    o.current,
    s,
    d,
    u,
    c,
    f,
    p,
    e,
    b,
    v,
    i
  ], _ = N(De?.scale);
  le(() => {
    p && (_.current = De?.scale);
  }, [
    p
  ]);
  let Z = oe(() => {
    if (h === !1 || !p || !r.current || !l.current || !u || De?.scale !== _.current) return;
    let K = null;
    if (o.current && o.current.contains(document.activeElement)) {
      var C;
      let H = (C = document.activeElement) === null || C === void 0 ? void 0 : C.getBoundingClientRect(), I = o.current.getBoundingClientRect();
      var P;
      if (K = {
        type: "top",
        offset: ((P = H?.top) !== null && P !== void 0 ? P : 0) - I.top
      }, K.offset > I.height / 2) {
        K.type = "bottom";
        var T;
        K.offset = ((T = H?.bottom) !== null && T !== void 0 ? T : 0) - I.bottom;
      }
    }
    let E = r.current;
    if (!b && r.current) {
      var R;
      E.style.top = "0px", E.style.bottom = "";
      var V;
      E.style.maxHeight = ((V = (R = window.visualViewport) === null || R === void 0 ? void 0 : R.height) !== null && V !== void 0 ? V : window.innerHeight) + "px";
    }
    let x = E5({
      placement: T5(a, e),
      overlayNode: r.current,
      targetNode: l.current,
      scrollNode: o.current || r.current,
      padding: s,
      shouldFlip: d,
      boundaryElement: u,
      offset: c,
      crossOffset: f,
      maxHeight: b,
      arrowSize: i,
      arrowBoundaryOffset: v
    });
    if (x.position) {
      if (E.style.top = "", E.style.bottom = "", E.style.left = "", E.style.right = "", Object.keys(x.position).forEach((H) => E.style[H] = x.position[H] + "px"), E.style.maxHeight = x.maxHeight != null ? x.maxHeight + "px" : "", K && document.activeElement && o.current) {
        let H = document.activeElement.getBoundingClientRect(), I = o.current.getBoundingClientRect(), ie = H[K.type] - I[K.type];
        o.current.scrollTop += ie - K.offset;
      }
      y(x);
    }
  }, $);
  ce(Z, $), L5(Z), Vi({
    ref: r,
    onResize: Z
  }), Vi({
    ref: l,
    onResize: Z
  });
  let D = N(!1);
  ce(() => {
    let K, C = () => {
      D.current = !0, clearTimeout(K), K = setTimeout(() => {
        D.current = !1;
      }, 500), Z();
    }, P = () => {
      D.current && C();
    };
    return De?.addEventListener("resize", C), De?.addEventListener("scroll", P), () => {
      De?.removeEventListener("resize", C), De?.removeEventListener("scroll", P);
    };
  }, [
    Z
  ]);
  let A = oe(() => {
    D.current || m?.();
  }, [
    m,
    D
  ]);
  S5({
    triggerRef: l,
    isOpen: p,
    onClose: m && A
  });
  var M, F;
  return {
    overlayProps: {
      style: {
        position: "absolute",
        zIndex: 1e5,
        ...g?.position,
        maxHeight: (M = g?.maxHeight) !== null && M !== void 0 ? M : "100vh"
      }
    },
    placement: (F = g?.placement) !== null && F !== void 0 ? F : null,
    arrowProps: {
      "aria-hidden": "true",
      role: "presentation",
      style: {
        left: g?.arrowOffsetLeft,
        top: g?.arrowOffsetTop
      }
    },
    updatePosition: Z
  };
}
function L5(t) {
  ce(() => (window.addEventListener("resize", t, !1), () => {
    window.removeEventListener("resize", t, !1);
  }), [
    t
  ]);
}
function T5(t, e) {
  return e === "rtl" ? t.replace("start", "right").replace("end", "left") : t.replace("start", "left").replace("end", "right");
}
const qe = [];
function F5(t, e) {
  let { onClose: i, shouldCloseOnBlur: l, isOpen: r, isDismissable: o = !1, isKeyboardDismissDisabled: a = !1, shouldCloseOnInteractOutside: s } = t;
  le(() => {
    if (r && !qe.includes(e))
      return qe.push(e), () => {
        let m = qe.indexOf(e);
        m >= 0 && qe.splice(m, 1);
      };
  }, [
    r,
    e
  ]);
  let d = () => {
    qe[qe.length - 1] === e && i && i();
  }, u = (m) => {
    (!s || s(m.target)) && qe[qe.length - 1] === e && (m.stopPropagation(), m.preventDefault());
  }, c = (m) => {
    (!s || s(m.target)) && (qe[qe.length - 1] === e && (m.stopPropagation(), m.preventDefault()), d());
  }, f = (m) => {
    m.key === "Escape" && !a && !m.nativeEvent.isComposing && (m.stopPropagation(), m.preventDefault(), d());
  };
  Z0({
    ref: e,
    onInteractOutside: o && r ? c : void 0,
    onInteractOutsideStart: u
  });
  let { focusWithinProps: h } = Hn({
    isDisabled: !l,
    onBlurWithin: (m) => {
      !m.relatedTarget || i5(m.relatedTarget) || (!s || s(m.relatedTarget)) && i?.();
    }
  }), p = (m) => {
    m.target === m.currentTarget && m.preventDefault();
  };
  return {
    overlayProps: {
      onKeyDown: f,
      ...h
    },
    underlayProps: {
      onPointerDown: p
    }
  };
}
function N5(t, e, i) {
  let { type: l } = t, { isOpen: r } = e;
  le(() => {
    i && i.current && y1.set(i.current, e.close);
  });
  let o;
  l === "menu" ? o = !0 : l === "listbox" && (o = "listbox");
  let a = Le();
  return {
    triggerProps: {
      "aria-haspopup": o,
      "aria-expanded": r,
      "aria-controls": r ? a : void 0,
      onPress: e.toggle
    },
    overlayProps: {
      id: a
    }
  };
}
const Xn = typeof document < "u" && window.visualViewport, K5 = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
let ji = 0, Jn;
function A5(t = {}) {
  let { isDisabled: e } = t;
  ce(() => {
    if (!e)
      return ji++, ji === 1 && (vn() ? Jn = R5() : Jn = B5()), () => {
        ji--, ji === 0 && Jn();
      };
  }, [
    e
  ]);
}
function B5() {
  let t = window.innerWidth - document.documentElement.clientWidth;
  return ht(t > 0 && // Use scrollbar-gutter when supported because it also works for fixed positioned elements.
  ("scrollbarGutter" in document.documentElement.style ? Zt(document.documentElement, "scrollbarGutter", "stable") : Zt(document.documentElement, "paddingRight", `${t}px`)), Zt(document.documentElement, "overflow", "hidden"));
}
function R5() {
  let t, e, i = (u) => {
    t = Wl(u.target, !0), !(t === document.documentElement && t === document.body) && t instanceof HTMLElement && window.getComputedStyle(t).overscrollBehavior === "auto" && (e = Zt(t, "overscrollBehavior", "contain"));
  }, l = (u) => {
    if (!t || t === document.documentElement || t === document.body) {
      u.preventDefault();
      return;
    }
    t.scrollHeight === t.clientHeight && t.scrollWidth === t.clientWidth && u.preventDefault();
  }, r = () => {
    e && e();
  }, o = (u) => {
    let c = u.target;
    I5(c) && (s(), c.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      c.style.transform = "", Xn && (Xn.height < window.innerHeight ? requestAnimationFrame(() => {
        ho(c);
      }) : Xn.addEventListener("resize", () => ho(c), {
        once: !0
      }));
    }));
  }, a = null, s = () => {
    if (a) return;
    let u = () => {
      window.scrollTo(0, 0);
    }, c = window.pageXOffset, f = window.pageYOffset;
    a = ht(si(window, "scroll", u), Zt(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), Zt(document.documentElement, "overflow", "hidden"), Zt(document.body, "marginTop", `-${f}px`), () => {
      window.scrollTo(c, f);
    }), window.scrollTo(0, 0);
  }, d = ht(si(document, "touchstart", i, {
    passive: !1,
    capture: !0
  }), si(document, "touchmove", l, {
    passive: !1,
    capture: !0
  }), si(document, "touchend", r, {
    passive: !1,
    capture: !0
  }), si(document, "focus", o, !0));
  return () => {
    e?.(), a?.(), d();
  };
}
function Zt(t, e, i) {
  let l = t.style[e];
  return t.style[e] = i, () => {
    t.style[e] = l;
  };
}
function si(t, e, i, l) {
  return t.addEventListener(e, i, l), () => {
    t.removeEventListener(e, i, l);
  };
}
function ho(t) {
  let e = document.scrollingElement || document.documentElement, i = t;
  for (; i && i !== e; ) {
    let l = Wl(i);
    if (l !== document.documentElement && l !== document.body && l !== i) {
      let r = l.getBoundingClientRect().top, o = i.getBoundingClientRect().top;
      o > r + i.clientHeight && (l.scrollTop += o - r);
    }
    i = l.parentElement;
  }
}
function I5(t) {
  return t instanceof HTMLInputElement && !K5.has(t.type) || t instanceof HTMLTextAreaElement || t instanceof HTMLElement && t.isContentEditable;
}
const z5 = /* @__PURE__ */ U({});
function M1() {
  var t;
  return (t = J(z5)) !== null && t !== void 0 ? t : {};
}
const Ml = /* @__PURE__ */ w.createContext(null);
function O5(t) {
  let { children: e } = t, i = J(Ml), [l, r] = ne(0), o = X(() => ({
    parent: i,
    modalCount: l,
    addModal() {
      r((a) => a + 1), i && i.addModal();
    },
    removeModal() {
      r((a) => a - 1), i && i.removeModal();
    }
  }), [
    i,
    l
  ]);
  return /* @__PURE__ */ w.createElement(Ml.Provider, {
    value: o
  }, e);
}
function U5() {
  let t = J(Ml);
  return {
    modalProviderProps: {
      "aria-hidden": t && t.modalCount > 0 ? !0 : void 0
    }
  };
}
function G5(t) {
  let { modalProviderProps: e } = U5();
  return /* @__PURE__ */ w.createElement("div", {
    "data-overlay-container": !0,
    ...t,
    ...e
  });
}
function W5(t) {
  return /* @__PURE__ */ w.createElement(O5, null, /* @__PURE__ */ w.createElement(G5, t));
}
function j5(t) {
  let e = ni(), { portalContainer: i = e ? null : document.body, ...l } = t, { getContainer: r } = M1();
  if (!t.portalContainer && r && (i = r()), w.useEffect(() => {
    if (i?.closest("[data-overlay-container]")) throw new Error("An OverlayContainer must not be inside another container. Please change the portalContainer prop.");
  }, [
    i
  ]), !i) return null;
  let o = /* @__PURE__ */ w.createElement(W5, l);
  return /* @__PURE__ */ Ro.createPortal(o, i);
}
var x1 = {};
x1 = {
  dismiss: "تجاهل"
};
var $1 = {};
$1 = {
  dismiss: "Отхвърляне"
};
var D1 = {};
D1 = {
  dismiss: "Odstranit"
};
var k1 = {};
k1 = {
  dismiss: "Luk"
};
var _1 = {};
_1 = {
  dismiss: "Schließen"
};
var Z1 = {};
Z1 = {
  dismiss: "Απόρριψη"
};
var E1 = {};
E1 = {
  dismiss: "Dismiss"
};
var P1 = {};
P1 = {
  dismiss: "Descartar"
};
var S1 = {};
S1 = {
  dismiss: "Lõpeta"
};
var L1 = {};
L1 = {
  dismiss: "Hylkää"
};
var T1 = {};
T1 = {
  dismiss: "Rejeter"
};
var F1 = {};
F1 = {
  dismiss: "התעלם"
};
var N1 = {};
N1 = {
  dismiss: "Odbaci"
};
var K1 = {};
K1 = {
  dismiss: "Elutasítás"
};
var A1 = {};
A1 = {
  dismiss: "Ignora"
};
var B1 = {};
B1 = {
  dismiss: "閉じる"
};
var R1 = {};
R1 = {
  dismiss: "무시"
};
var I1 = {};
I1 = {
  dismiss: "Atmesti"
};
var z1 = {};
z1 = {
  dismiss: "Nerādīt"
};
var O1 = {};
O1 = {
  dismiss: "Lukk"
};
var U1 = {};
U1 = {
  dismiss: "Negeren"
};
var G1 = {};
G1 = {
  dismiss: "Zignoruj"
};
var W1 = {};
W1 = {
  dismiss: "Descartar"
};
var j1 = {};
j1 = {
  dismiss: "Dispensar"
};
var q1 = {};
q1 = {
  dismiss: "Revocare"
};
var Y1 = {};
Y1 = {
  dismiss: "Пропустить"
};
var X1 = {};
X1 = {
  dismiss: "Zrušiť"
};
var J1 = {};
J1 = {
  dismiss: "Opusti"
};
var Q1 = {};
Q1 = {
  dismiss: "Odbaci"
};
var es = {};
es = {
  dismiss: "Avvisa"
};
var ts = {};
ts = {
  dismiss: "Kapat"
};
var is = {};
is = {
  dismiss: "Скасувати"
};
var ns = {};
ns = {
  dismiss: "取消"
};
var ls = {};
ls = {
  dismiss: "關閉"
};
var rs = {};
rs = {
  "ar-AE": x1,
  "bg-BG": $1,
  "cs-CZ": D1,
  "da-DK": k1,
  "de-DE": _1,
  "el-GR": Z1,
  "en-US": E1,
  "es-ES": P1,
  "et-EE": S1,
  "fi-FI": L1,
  "fr-FR": T1,
  "he-IL": F1,
  "hr-HR": N1,
  "hu-HU": K1,
  "it-IT": A1,
  "ja-JP": B1,
  "ko-KR": R1,
  "lt-LT": I1,
  "lv-LV": z1,
  "nb-NO": O1,
  "nl-NL": U1,
  "pl-PL": G1,
  "pt-BR": W1,
  "pt-PT": j1,
  "ro-RO": q1,
  "ru-RU": Y1,
  "sk-SK": X1,
  "sl-SI": J1,
  "sr-SP": Q1,
  "sv-SE": es,
  "tr-TR": ts,
  "uk-UA": is,
  "zh-CN": ns,
  "zh-TW": ls
};
function q5(t) {
  return t && t.__esModule ? t.default : t;
}
function mo(t) {
  let { onDismiss: e, ...i } = t, l = wn(q5(rs), "@react-aria/overlays"), r = nn(i, l.format("dismiss")), o = () => {
    e && e();
  };
  return /* @__PURE__ */ w.createElement(Dn, null, /* @__PURE__ */ w.createElement("button", {
    ...r,
    tabIndex: -1,
    onClick: o,
    style: {
      width: 1,
      height: 1
    }
  }));
}
let di = /* @__PURE__ */ new WeakMap(), Fe = [];
function os(t, e = document.body) {
  let i = new Set(t), l = /* @__PURE__ */ new Set(), r = (d) => {
    for (let h of d.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]")) i.add(h);
    let u = (h) => {
      if (i.has(h) || h.parentElement && l.has(h.parentElement) && h.parentElement.getAttribute("role") !== "row") return NodeFilter.FILTER_REJECT;
      for (let p of i)
        if (h.contains(p)) return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    }, c = document.createTreeWalker(d, NodeFilter.SHOW_ELEMENT, {
      acceptNode: u
    }), f = u(d);
    if (f === NodeFilter.FILTER_ACCEPT && o(d), f !== NodeFilter.FILTER_REJECT) {
      let h = c.nextNode();
      for (; h != null; )
        o(h), h = c.nextNode();
    }
  }, o = (d) => {
    var u;
    let c = (u = di.get(d)) !== null && u !== void 0 ? u : 0;
    d.getAttribute("aria-hidden") === "true" && c === 0 || (c === 0 && d.setAttribute("aria-hidden", "true"), l.add(d), di.set(d, c + 1));
  };
  Fe.length && Fe[Fe.length - 1].disconnect(), r(e);
  let a = new MutationObserver((d) => {
    for (let u of d)
      if (!(u.type !== "childList" || u.addedNodes.length === 0) && ![
        ...i,
        ...l
      ].some((c) => c.contains(u.target))) {
        for (let c of u.removedNodes) c instanceof Element && (i.delete(c), l.delete(c));
        for (let c of u.addedNodes)
          (c instanceof HTMLElement || c instanceof SVGElement) && (c.dataset.liveAnnouncer === "true" || c.dataset.reactAriaTopLayer === "true") ? i.add(c) : c instanceof Element && r(c);
      }
  });
  a.observe(e, {
    childList: !0,
    subtree: !0
  });
  let s = {
    visibleNodes: i,
    hiddenNodes: l,
    observe() {
      a.observe(e, {
        childList: !0,
        subtree: !0
      });
    },
    disconnect() {
      a.disconnect();
    }
  };
  return Fe.push(s), () => {
    a.disconnect();
    for (let d of l) {
      let u = di.get(d);
      u != null && (u === 1 ? (d.removeAttribute("aria-hidden"), di.delete(d)) : di.set(d, u - 1));
    }
    s === Fe[Fe.length - 1] ? (Fe.pop(), Fe.length && Fe[Fe.length - 1].observe()) : Fe.splice(Fe.indexOf(s), 1);
  };
}
function Y5(t) {
  let e = Fe[Fe.length - 1];
  if (e && !e.visibleNodes.has(t))
    return e.visibleNodes.add(t), () => {
      e.visibleNodes.delete(t);
    };
}
function X5(t, e) {
  let { triggerRef: i, popoverRef: l, groupRef: r, isNonModal: o, isKeyboardDismissDisabled: a, shouldCloseOnInteractOutside: s, ...d } = t, u = d.trigger === "SubmenuTrigger", { overlayProps: c, underlayProps: f } = F5({
    isOpen: e.isOpen,
    onClose: e.close,
    shouldCloseOnBlur: !0,
    isDismissable: !o || u,
    isKeyboardDismissDisabled: a,
    shouldCloseOnInteractOutside: s
  }, r ?? l), { overlayProps: h, arrowProps: p, placement: m } = w1({
    ...d,
    targetRef: i,
    overlayRef: l,
    isOpen: e.isOpen,
    onClose: o && !u ? e.close : null
  });
  return A5({
    isDisabled: o || !e.isOpen
  }), ce(() => {
    if (e.isOpen && l.current) {
      var b, v;
      return o ? Y5((b = r?.current) !== null && b !== void 0 ? b : l.current) : os([
        (v = r?.current) !== null && v !== void 0 ? v : l.current
      ]);
    }
  }, [
    o,
    e.isOpen,
    l,
    r
  ]), {
    popoverProps: Q(c, h),
    arrowProps: p,
    underlayProps: f,
    placement: m
  };
}
const J5 = /* @__PURE__ */ w.createContext(null);
function go(t) {
  let e = ni(), { portalContainer: i = e ? null : document.body, isExiting: l } = t, [r, o] = ne(!1), a = X(() => ({
    contain: r,
    setContain: o
  }), [
    r,
    o
  ]), { getContainer: s } = M1();
  if (!t.portalContainer && s && (i = s()), !i) return null;
  let d = t.children;
  return t.disableFocusManagement || (d = /* @__PURE__ */ w.createElement(xn, {
    restoreFocus: !0,
    contain: (t.shouldContainFocus || r) && !l
  }, d)), d = /* @__PURE__ */ w.createElement(J5.Provider, {
    value: a
  }, /* @__PURE__ */ w.createElement(k0, null, d)), /* @__PURE__ */ Ro.createPortal(d, i);
}
const kn = /* @__PURE__ */ new WeakMap();
function Q5(t) {
  return typeof t == "string" ? t.replace(/\s*/g, "") : "" + t;
}
function as(t, e) {
  let i = kn.get(t);
  if (!i) throw new Error("Unknown list");
  return `${i.id}-option-${Q5(e)}`;
}
function xl(t) {
  return Xi() ? t.altKey : t.ctrlKey;
}
function en(t, e) {
  var i, l;
  let r = `[data-key="${CSS.escape(String(e))}"]`, o = (i = t.current) === null || i === void 0 ? void 0 : i.dataset.collection;
  return o && (r = `[data-collection="${CSS.escape(o)}"]${r}`), (l = t.current) === null || l === void 0 ? void 0 : l.querySelector(r);
}
const ss = /* @__PURE__ */ new WeakMap();
function eu(t) {
  let e = Le();
  return ss.set(t, e), e;
}
function tu(t) {
  return ss.get(t);
}
const iu = 1e3;
function ds(t) {
  let { keyboardDelegate: e, selectionManager: i, onTypeSelect: l } = t, r = N({
    search: "",
    timeout: void 0
  }).current, o = (a) => {
    let s = nu(a.key);
    if (!(!s || a.ctrlKey || a.metaKey || !a.currentTarget.contains(a.target))) {
      if (s === " " && r.search.trim().length > 0 && (a.preventDefault(), "continuePropagation" in a || a.stopPropagation()), r.search += s, e.getKeyForSearch != null) {
        let d = e.getKeyForSearch(r.search, i.focusedKey);
        d == null && (d = e.getKeyForSearch(r.search)), d != null && (i.setFocusedKey(d), l && l(d));
      }
      clearTimeout(r.timeout), r.timeout = setTimeout(() => {
        r.search = "";
      }, iu);
    }
  };
  return {
    typeSelectProps: {
      // Using a capturing listener to catch the keydown event before
      // other hooks in order to handle the Spacebar event.
      onKeyDownCapture: e.getKeyForSearch ? o : void 0
    }
  };
}
function nu(t) {
  return t.length === 1 || !/^[A-Z]/i.test(t) ? t : "";
}
function us(t) {
  let { selectionManager: e, keyboardDelegate: i, ref: l, autoFocus: r = !1, shouldFocusWrap: o = !1, disallowEmptySelection: a = !1, disallowSelectAll: s = !1, escapeKeyBehavior: d = "clearSelection", selectOnFocus: u = e.selectionBehavior === "replace", disallowTypeAhead: c = !1, shouldUseVirtualFocus: f, allowsTabNavigation: h = !1, isVirtualized: p, scrollRef: m = l, linkBehavior: b = "action" } = t, { direction: v } = Je(), g = li(), y = (x) => {
    var H;
    if (x.altKey && x.key === "Tab" && x.preventDefault(), !(!((H = l.current) === null || H === void 0) && H.contains(x.target))) return;
    const I = (B, se) => {
      if (B != null) {
        if (e.isLink(B) && b === "selection" && u && !xl(x)) {
          Ll(() => {
            e.setFocusedKey(B, se);
          });
          let W = en(l, B), z = e.getItemProps(B);
          W && g.open(W, x, z.href, z.routerOptions);
          return;
        }
        if (e.setFocusedKey(B, se), e.isLink(B) && b === "override") return;
        x.shiftKey && e.selectionMode === "multiple" ? e.extendSelection(B) : u && !xl(x) && e.replaceSelection(B);
      }
    };
    switch (x.key) {
      case "ArrowDown":
        if (i.getKeyBelow) {
          var ie, S, G;
          let B = e.focusedKey != null ? (ie = i.getKeyBelow) === null || ie === void 0 ? void 0 : ie.call(i, e.focusedKey) : (S = i.getFirstKey) === null || S === void 0 ? void 0 : S.call(i);
          B == null && o && (B = (G = i.getFirstKey) === null || G === void 0 ? void 0 : G.call(i, e.focusedKey)), B != null && (x.preventDefault(), I(B));
        }
        break;
      case "ArrowUp":
        if (i.getKeyAbove) {
          var O, te, fe;
          let B = e.focusedKey != null ? (O = i.getKeyAbove) === null || O === void 0 ? void 0 : O.call(i, e.focusedKey) : (te = i.getLastKey) === null || te === void 0 ? void 0 : te.call(i);
          B == null && o && (B = (fe = i.getLastKey) === null || fe === void 0 ? void 0 : fe.call(i, e.focusedKey)), B != null && (x.preventDefault(), I(B));
        }
        break;
      case "ArrowLeft":
        if (i.getKeyLeftOf) {
          var ge, ae, $e;
          let B = e.focusedKey != null ? (ge = i.getKeyLeftOf) === null || ge === void 0 ? void 0 : ge.call(i, e.focusedKey) : null;
          B == null && o && (B = v === "rtl" ? (ae = i.getFirstKey) === null || ae === void 0 ? void 0 : ae.call(i, e.focusedKey) : ($e = i.getLastKey) === null || $e === void 0 ? void 0 : $e.call(i, e.focusedKey)), B != null && (x.preventDefault(), I(B, v === "rtl" ? "first" : "last"));
        }
        break;
      case "ArrowRight":
        if (i.getKeyRightOf) {
          var Me, Ze, re;
          let B = e.focusedKey != null ? (Me = i.getKeyRightOf) === null || Me === void 0 ? void 0 : Me.call(i, e.focusedKey) : null;
          B == null && o && (B = v === "rtl" ? (Ze = i.getLastKey) === null || Ze === void 0 ? void 0 : Ze.call(i, e.focusedKey) : (re = i.getFirstKey) === null || re === void 0 ? void 0 : re.call(i, e.focusedKey)), B != null && (x.preventDefault(), I(B, v === "rtl" ? "last" : "first"));
        }
        break;
      case "Home":
        if (i.getFirstKey) {
          if (e.focusedKey === null && x.shiftKey) return;
          x.preventDefault();
          let B = i.getFirstKey(e.focusedKey, Ot(x));
          e.setFocusedKey(B), B != null && (Ot(x) && x.shiftKey && e.selectionMode === "multiple" ? e.extendSelection(B) : u && e.replaceSelection(B));
        }
        break;
      case "End":
        if (i.getLastKey) {
          if (e.focusedKey === null && x.shiftKey) return;
          x.preventDefault();
          let B = i.getLastKey(e.focusedKey, Ot(x));
          e.setFocusedKey(B), B != null && (Ot(x) && x.shiftKey && e.selectionMode === "multiple" ? e.extendSelection(B) : u && e.replaceSelection(B));
        }
        break;
      case "PageDown":
        if (i.getKeyPageBelow && e.focusedKey != null) {
          let B = i.getKeyPageBelow(e.focusedKey);
          B != null && (x.preventDefault(), I(B));
        }
        break;
      case "PageUp":
        if (i.getKeyPageAbove && e.focusedKey != null) {
          let B = i.getKeyPageAbove(e.focusedKey);
          B != null && (x.preventDefault(), I(B));
        }
        break;
      case "a":
        Ot(x) && e.selectionMode === "multiple" && s !== !0 && (x.preventDefault(), e.selectAll());
        break;
      case "Escape":
        d === "clearSelection" && !a && e.selectedKeys.size !== 0 && (x.stopPropagation(), x.preventDefault(), e.clearSelection());
        break;
      case "Tab":
        if (!h) {
          if (x.shiftKey) l.current.focus();
          else {
            let B = Re(l.current, {
              tabbable: !0
            }), se, W;
            do
              W = B.lastChild(), W && (se = W);
            while (W);
            se && !se.contains(document.activeElement) && ze(se);
          }
          break;
        }
    }
  }, $ = N({
    top: 0,
    left: 0
  });
  Ii(m, "scroll", p ? void 0 : () => {
    var x, H, I, ie;
    $.current = {
      top: (I = (x = m.current) === null || x === void 0 ? void 0 : x.scrollTop) !== null && I !== void 0 ? I : 0,
      left: (ie = (H = m.current) === null || H === void 0 ? void 0 : H.scrollLeft) !== null && ie !== void 0 ? ie : 0
    };
  });
  let _ = (x) => {
    if (e.isFocused) {
      x.currentTarget.contains(x.target) || e.setFocused(!1);
      return;
    }
    if (x.currentTarget.contains(x.target)) {
      if (e.setFocused(!0), e.focusedKey == null) {
        var H, I;
        let G = (te) => {
          te != null && (e.setFocusedKey(te), u && !e.isSelected(te) && e.replaceSelection(te));
        }, O = x.relatedTarget;
        var ie, S;
        O && x.currentTarget.compareDocumentPosition(O) & Node.DOCUMENT_POSITION_FOLLOWING ? G((ie = e.lastSelectedKey) !== null && ie !== void 0 ? ie : (H = i.getLastKey) === null || H === void 0 ? void 0 : H.call(i)) : G((S = e.firstSelectedKey) !== null && S !== void 0 ? S : (I = i.getFirstKey) === null || I === void 0 ? void 0 : I.call(i));
      } else !p && m.current && (m.current.scrollTop = $.current.top, m.current.scrollLeft = $.current.left);
      if (e.focusedKey != null && m.current) {
        let G = en(l, e.focusedKey);
        G instanceof HTMLElement && (!G.contains(document.activeElement) && !f && ze(G), wi() === "keyboard" && Ar(G, {
          containingElement: l.current
        }));
      }
    }
  }, Z = (x) => {
    x.currentTarget.contains(x.relatedTarget) || e.setFocused(!1);
  }, D = N(!1);
  Ii(l, l0, f ? (x) => {
    let { detail: H } = x;
    x.stopPropagation(), e.setFocused(!0), H?.focusStrategy === "first" && (D.current = !0);
  } : void 0);
  let A = xe(() => {
    var x, H;
    let I = (H = (x = i.getFirstKey) === null || x === void 0 ? void 0 : x.call(i)) !== null && H !== void 0 ? H : null;
    I == null ? (_a(l.current), e.collection.size > 0 && (D.current = !1)) : (e.setFocusedKey(I), D.current = !1);
  });
  Nr(() => {
    D.current && A();
  }, [
    e.collection,
    A
  ]);
  let M = xe(() => {
    e.collection.size > 0 && (D.current = !1);
  });
  Nr(() => {
    M();
  }, [
    e.focusedKey,
    M
  ]), Ii(l, n0, f ? (x) => {
    var H;
    x.stopPropagation(), e.setFocused(!1), !((H = x.detail) === null || H === void 0) && H.clearFocusKey && e.setFocusedKey(null);
  } : void 0);
  const F = N(r), K = N(!1);
  le(() => {
    if (F.current) {
      var x, H;
      let S = null;
      var I;
      r === "first" && (S = (I = (x = i.getFirstKey) === null || x === void 0 ? void 0 : x.call(i)) !== null && I !== void 0 ? I : null);
      var ie;
      r === "last" && (S = (ie = (H = i.getLastKey) === null || H === void 0 ? void 0 : H.call(i)) !== null && ie !== void 0 ? ie : null);
      let G = e.selectedKeys;
      if (G.size) {
        for (let O of G) if (e.canSelectItem(O)) {
          S = O;
          break;
        }
      }
      e.setFocused(!0), e.setFocusedKey(S), S == null && !f && l.current && Jt(l.current), e.collection.size > 0 && (F.current = !1, K.current = !0);
    }
  });
  let C = N(e.focusedKey), P = N(null);
  le(() => {
    if (e.isFocused && e.focusedKey != null && (e.focusedKey !== C.current || K.current) && m.current && l.current) {
      let x = wi(), H = en(l, e.focusedKey);
      if (!(H instanceof HTMLElement))
        return;
      (x === "keyboard" || K.current) && (P.current && cancelAnimationFrame(P.current), P.current = requestAnimationFrame(() => {
        m.current && (sa(m.current, H), x !== "virtual" && Ar(H, {
          containingElement: l.current
        }));
      }));
    }
    !f && e.isFocused && e.focusedKey == null && C.current != null && l.current && Jt(l.current), C.current = e.focusedKey, K.current = !1;
  }), le(() => () => {
    P.current && cancelAnimationFrame(P.current);
  }, []), Ii(l, "react-aria-focus-scope-restore", (x) => {
    x.preventDefault(), e.setFocused(!0);
  });
  let T = {
    onKeyDown: y,
    onFocus: _,
    onBlur: Z,
    onMouseDown(x) {
      m.current === x.target && x.preventDefault();
    }
  }, { typeSelectProps: E } = ds({
    keyboardDelegate: i,
    selectionManager: e
  });
  c || (T = Q(E, T));
  let R;
  f || (R = e.focusedKey == null ? 0 : -1);
  let V = eu(e.collection);
  return {
    collectionProps: Q(T, {
      tabIndex: R,
      "data-collection": V
    })
  };
}
function cs(t) {
  let { id: e, selectionManager: i, key: l, ref: r, shouldSelectOnPressUp: o, shouldUseVirtualFocus: a, focus: s, isDisabled: d, onAction: u, allowsDifferentPressOrigin: c, linkBehavior: f = "action" } = t, h = li();
  e = Le(e);
  let p = (H) => {
    if (H.pointerType === "keyboard" && xl(H)) i.toggleSelection(l);
    else {
      if (i.selectionMode === "none") return;
      if (i.isLink(l)) {
        if (f === "selection" && r.current) {
          let I = i.getItemProps(l);
          h.open(r.current, H, I.href, I.routerOptions), i.setSelectedKeys(i.selectedKeys);
          return;
        } else if (f === "override" || f === "none") return;
      }
      i.selectionMode === "single" ? i.isSelected(l) && !i.disallowEmptySelection ? i.toggleSelection(l) : i.replaceSelection(l) : H && H.shiftKey ? i.extendSelection(l) : i.selectionBehavior === "toggle" || H && (Ot(H) || H.pointerType === "touch" || H.pointerType === "virtual") ? i.toggleSelection(l) : i.replaceSelection(l);
    }
  };
  le(() => {
    l === i.focusedKey && i.isFocused && (a ? _a(r.current) : s ? s() : document.activeElement !== r.current && r.current && Jt(r.current));
  }, [
    r,
    l,
    i.focusedKey,
    i.childFocusStrategy,
    i.isFocused,
    a
  ]), d = d || i.isDisabled(l);
  let m = {};
  !a && !d ? m = {
    tabIndex: l === i.focusedKey ? 0 : -1,
    onFocus(H) {
      H.target === r.current && i.setFocusedKey(l);
    }
  } : d && (m.onMouseDown = (H) => {
    H.preventDefault();
  });
  let b = i.isLink(l) && f === "override", v = i.isLink(l) && f !== "selection" && f !== "none", g = !d && i.canSelectItem(l) && !b, y = (u || v) && !d, $ = y && (i.selectionBehavior === "replace" ? !g : !g || i.isEmpty), _ = y && g && i.selectionBehavior === "replace", Z = $ || _, D = N(null), A = Z && g, M = N(!1), F = N(!1), K = (H) => {
    if (u && u(), v && r.current) {
      let I = i.getItemProps(l);
      h.open(r.current, H, I.href, I.routerOptions);
    }
  }, C = {
    ref: r
  };
  o ? (C.onPressStart = (H) => {
    D.current = H.pointerType, M.current = A, H.pointerType === "keyboard" && (!Z || vo()) && p(H);
  }, c ? (C.onPressUp = $ ? void 0 : (H) => {
    H.pointerType === "mouse" && g && p(H);
  }, C.onPress = $ ? K : (H) => {
    H.pointerType !== "keyboard" && H.pointerType !== "mouse" && g && p(H);
  }) : C.onPress = (H) => {
    if ($ || _ && H.pointerType !== "mouse") {
      if (H.pointerType === "keyboard" && !bo()) return;
      K(H);
    } else H.pointerType !== "keyboard" && g && p(H);
  }) : (C.onPressStart = (H) => {
    D.current = H.pointerType, M.current = A, F.current = $, g && (H.pointerType === "mouse" && !$ || H.pointerType === "keyboard" && (!y || vo())) && p(H);
  }, C.onPress = (H) => {
    (H.pointerType === "touch" || H.pointerType === "pen" || H.pointerType === "virtual" || H.pointerType === "keyboard" && Z && bo() || H.pointerType === "mouse" && F.current) && (Z ? K(H) : g && p(H));
  }), m["data-collection"] = tu(i.collection), m["data-key"] = l, C.preventFocusOnPress = a, a && (C = Q(C, {
    onPressStart(H) {
      H.pointerType !== "touch" && (i.setFocused(!0), i.setFocusedKey(l));
    },
    onPress(H) {
      H.pointerType === "touch" && (i.setFocused(!0), i.setFocusedKey(l));
    }
  }));
  let { pressProps: P, isPressed: T } = gt(C), E = _ ? (H) => {
    D.current === "mouse" && (H.stopPropagation(), H.preventDefault(), K(H));
  } : void 0, { longPressProps: R } = ya({
    isDisabled: !A,
    onLongPress(H) {
      H.pointerType === "touch" && (p(H), i.setSelectionBehavior("toggle"));
    }
  }), V = (H) => {
    D.current === "touch" && M.current && H.preventDefault();
  }, x = i.isLink(l) ? (H) => {
    Pt.isOpening || H.preventDefault();
  } : void 0;
  return {
    itemProps: Q(
      m,
      g || $ || a && !d ? P : {},
      A ? R : {},
      {
        onDoubleClick: E,
        onDragStartCapture: V,
        onClick: x,
        id: e
      },
      // Prevent DOM focus from moving on mouse down when using virtual focus
      a ? {
        onMouseDown: (H) => H.preventDefault()
      } : void 0
    ),
    isPressed: T,
    isSelected: i.isSelected(l),
    isFocused: i.isFocused && i.focusedKey === l,
    isDisabled: d,
    allowsSelection: g,
    hasAction: Z
  };
}
function bo() {
  let t = window.event;
  return t?.key === "Enter";
}
function vo() {
  let t = window.event;
  return t?.key === " " || t?.code === "Space";
}
class Co {
  getItemRect(e) {
    let i = this.ref.current;
    if (!i) return null;
    let l = e != null ? en(this.ref, e) : null;
    if (!l) return null;
    let r = i.getBoundingClientRect(), o = l.getBoundingClientRect();
    return {
      x: o.left - r.left + i.scrollLeft,
      y: o.top - r.top + i.scrollTop,
      width: o.width,
      height: o.height
    };
  }
  getContentSize() {
    let e = this.ref.current;
    var i, l;
    return {
      width: (i = e?.scrollWidth) !== null && i !== void 0 ? i : 0,
      height: (l = e?.scrollHeight) !== null && l !== void 0 ? l : 0
    };
  }
  getVisibleRect() {
    let e = this.ref.current;
    var i, l, r, o;
    return {
      x: (i = e?.scrollLeft) !== null && i !== void 0 ? i : 0,
      y: (l = e?.scrollTop) !== null && l !== void 0 ? l : 0,
      width: (r = e?.offsetWidth) !== null && r !== void 0 ? r : 0,
      height: (o = e?.offsetHeight) !== null && o !== void 0 ? o : 0
    };
  }
  constructor(e) {
    this.ref = e;
  }
}
class _n {
  isDisabled(e) {
    var i;
    return this.disabledBehavior === "all" && (((i = e.props) === null || i === void 0 ? void 0 : i.isDisabled) || this.disabledKeys.has(e.key));
  }
  findNextNonDisabled(e, i) {
    let l = e;
    for (; l != null; ) {
      let r = this.collection.getItem(l);
      if (r?.type === "item" && !this.isDisabled(r)) return l;
      l = i(l);
    }
    return null;
  }
  getNextKey(e) {
    let i = e;
    return i = this.collection.getKeyAfter(i), this.findNextNonDisabled(i, (l) => this.collection.getKeyAfter(l));
  }
  getPreviousKey(e) {
    let i = e;
    return i = this.collection.getKeyBefore(i), this.findNextNonDisabled(i, (l) => this.collection.getKeyBefore(l));
  }
  findKey(e, i, l) {
    let r = e, o = this.layoutDelegate.getItemRect(r);
    if (!o || r == null) return null;
    let a = o;
    do {
      if (r = i(r), r == null) break;
      o = this.layoutDelegate.getItemRect(r);
    } while (o && l(a, o) && r != null);
    return r;
  }
  isSameRow(e, i) {
    return e.y === i.y || e.x !== i.x;
  }
  isSameColumn(e, i) {
    return e.x === i.x || e.y !== i.y;
  }
  getKeyBelow(e) {
    return this.layout === "grid" && this.orientation === "vertical" ? this.findKey(e, (i) => this.getNextKey(i), this.isSameRow) : this.getNextKey(e);
  }
  getKeyAbove(e) {
    return this.layout === "grid" && this.orientation === "vertical" ? this.findKey(e, (i) => this.getPreviousKey(i), this.isSameRow) : this.getPreviousKey(e);
  }
  getNextColumn(e, i) {
    return i ? this.getPreviousKey(e) : this.getNextKey(e);
  }
  getKeyRightOf(e) {
    let i = this.direction === "ltr" ? "getKeyRightOf" : "getKeyLeftOf";
    return this.layoutDelegate[i] ? (e = this.layoutDelegate[i](e), this.findNextNonDisabled(e, (l) => this.layoutDelegate[i](l))) : this.layout === "grid" ? this.orientation === "vertical" ? this.getNextColumn(e, this.direction === "rtl") : this.findKey(e, (l) => this.getNextColumn(l, this.direction === "rtl"), this.isSameColumn) : this.orientation === "horizontal" ? this.getNextColumn(e, this.direction === "rtl") : null;
  }
  getKeyLeftOf(e) {
    let i = this.direction === "ltr" ? "getKeyLeftOf" : "getKeyRightOf";
    return this.layoutDelegate[i] ? (e = this.layoutDelegate[i](e), this.findNextNonDisabled(e, (l) => this.layoutDelegate[i](l))) : this.layout === "grid" ? this.orientation === "vertical" ? this.getNextColumn(e, this.direction === "ltr") : this.findKey(e, (l) => this.getNextColumn(l, this.direction === "ltr"), this.isSameColumn) : this.orientation === "horizontal" ? this.getNextColumn(e, this.direction === "ltr") : null;
  }
  getFirstKey() {
    let e = this.collection.getFirstKey();
    return this.findNextNonDisabled(e, (i) => this.collection.getKeyAfter(i));
  }
  getLastKey() {
    let e = this.collection.getLastKey();
    return this.findNextNonDisabled(e, (i) => this.collection.getKeyBefore(i));
  }
  getKeyPageAbove(e) {
    let i = this.ref.current, l = this.layoutDelegate.getItemRect(e);
    if (!l) return null;
    if (i && !Hi(i)) return this.getFirstKey();
    let r = e;
    if (this.orientation === "horizontal") {
      let o = Math.max(0, l.x + l.width - this.layoutDelegate.getVisibleRect().width);
      for (; l && l.x > o && r != null; )
        r = this.getKeyAbove(r), l = r == null ? null : this.layoutDelegate.getItemRect(r);
    } else {
      let o = Math.max(0, l.y + l.height - this.layoutDelegate.getVisibleRect().height);
      for (; l && l.y > o && r != null; )
        r = this.getKeyAbove(r), l = r == null ? null : this.layoutDelegate.getItemRect(r);
    }
    return r ?? this.getFirstKey();
  }
  getKeyPageBelow(e) {
    let i = this.ref.current, l = this.layoutDelegate.getItemRect(e);
    if (!l) return null;
    if (i && !Hi(i)) return this.getLastKey();
    let r = e;
    if (this.orientation === "horizontal") {
      let o = Math.min(this.layoutDelegate.getContentSize().width, l.y - l.width + this.layoutDelegate.getVisibleRect().width);
      for (; l && l.x < o && r != null; )
        r = this.getKeyBelow(r), l = r == null ? null : this.layoutDelegate.getItemRect(r);
    } else {
      let o = Math.min(this.layoutDelegate.getContentSize().height, l.y - l.height + this.layoutDelegate.getVisibleRect().height);
      for (; l && l.y < o && r != null; )
        r = this.getKeyBelow(r), l = r == null ? null : this.layoutDelegate.getItemRect(r);
    }
    return r ?? this.getLastKey();
  }
  getKeyForSearch(e, i) {
    if (!this.collator) return null;
    let l = this.collection, r = i || this.getFirstKey();
    for (; r != null; ) {
      let o = l.getItem(r);
      if (!o) return null;
      let a = o.textValue.slice(0, e.length);
      if (o.textValue && this.collator.compare(a, e) === 0) return r;
      r = this.getNextKey(r);
    }
    return null;
  }
  constructor(...e) {
    if (e.length === 1) {
      let i = e[0];
      this.collection = i.collection, this.ref = i.ref, this.collator = i.collator, this.disabledKeys = i.disabledKeys || /* @__PURE__ */ new Set(), this.disabledBehavior = i.disabledBehavior || "all", this.orientation = i.orientation || "vertical", this.direction = i.direction, this.layout = i.layout || "stack", this.layoutDelegate = i.layoutDelegate || new Co(i.ref);
    } else
      this.collection = e[0], this.disabledKeys = e[1], this.ref = e[2], this.collator = e[3], this.layout = "stack", this.orientation = "vertical", this.disabledBehavior = "all", this.layoutDelegate = new Co(this.ref);
    this.layout === "stack" && this.orientation === "vertical" && (this.getKeyLeftOf = void 0, this.getKeyRightOf = void 0);
  }
}
function fs(t) {
  let { selectionManager: e, collection: i, disabledKeys: l, ref: r, keyboardDelegate: o, layoutDelegate: a } = t, s = Mn({
    usage: "search",
    sensitivity: "base"
  }), d = e.disabledBehavior, u = X(() => o || new _n({
    collection: i,
    disabledKeys: l,
    disabledBehavior: d,
    ref: r,
    collator: s,
    layoutDelegate: a
  }), [
    o,
    a,
    i,
    l,
    r,
    s,
    d
  ]), { collectionProps: c } = us({
    ...t,
    ref: r,
    selectionManager: e,
    keyboardDelegate: u
  });
  return {
    listProps: c
  };
}
function lu(t, e, i) {
  let l = me(t, {
    labelable: !0
  }), r = t.selectionBehavior || "toggle", o = t.linkBehavior || (r === "replace" ? "action" : "override");
  r === "toggle" && o === "action" && (o = "override");
  let { listProps: a } = fs({
    ...t,
    ref: i,
    selectionManager: e.selectionManager,
    collection: e.collection,
    disabledKeys: e.disabledKeys,
    linkBehavior: o
  }), { focusWithinProps: s } = Hn({
    onFocusWithin: t.onFocus,
    onBlurWithin: t.onBlur,
    onFocusWithinChange: t.onFocusChange
  }), d = Le(t.id);
  kn.set(e, {
    id: d,
    shouldUseVirtualFocus: t.shouldUseVirtualFocus,
    shouldSelectOnPressUp: t.shouldSelectOnPressUp,
    shouldFocusOnHover: t.shouldFocusOnHover,
    isVirtualized: t.isVirtualized,
    onAction: t.onAction,
    linkBehavior: o
  });
  let { labelProps: u, fieldProps: c } = $n({
    ...t,
    id: d,
    // listbox is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: "span"
  });
  return {
    labelProps: u,
    listBoxProps: Q(l, s, e.selectionManager.selectionMode === "multiple" ? {
      "aria-multiselectable": "true"
    } : {}, {
      role: "listbox",
      ...Q(c, a)
    })
  };
}
class ru {
  build(e, i) {
    return this.context = i, Vo(() => this.iterateCollection(e));
  }
  *iterateCollection(e) {
    let { children: i, items: l } = e;
    if (w.isValidElement(i) && i.type === w.Fragment) yield* this.iterateCollection({
      children: i.props.children,
      items: l
    });
    else if (typeof i == "function") {
      if (!l) throw new Error("props.children was a function but props.items is missing");
      let r = 0;
      for (let o of l)
        yield* this.getFullNode({
          value: o,
          index: r
        }, {
          renderer: i
        }), r++;
    } else {
      let r = [];
      w.Children.forEach(i, (a) => {
        a && r.push(a);
      });
      let o = 0;
      for (let a of r) {
        let s = this.getFullNode({
          element: a,
          index: o
        }, {});
        for (let d of s)
          o++, yield d;
      }
    }
  }
  getKey(e, i, l, r) {
    if (e.key != null) return e.key;
    if (i.type === "cell" && i.key != null) return `${r}${i.key}`;
    let o = i.value;
    if (o != null) {
      var a;
      let s = (a = o.key) !== null && a !== void 0 ? a : o.id;
      if (s == null) throw new Error("No key found for item");
      return s;
    }
    return r ? `${r}.${i.index}` : `$.${i.index}`;
  }
  getChildState(e, i) {
    return {
      renderer: i.renderer || e.renderer
    };
  }
  *getFullNode(e, i, l, r) {
    if (w.isValidElement(e.element) && e.element.type === w.Fragment) {
      let v = [];
      w.Children.forEach(e.element.props.children, (y) => {
        v.push(y);
      });
      var o;
      let g = (o = e.index) !== null && o !== void 0 ? o : 0;
      for (const y of v) yield* this.getFullNode({
        element: y,
        index: g++
      }, i, l, r);
      return;
    }
    let a = e.element;
    if (!a && e.value && i && i.renderer) {
      let v = this.cache.get(e.value);
      if (v && (!v.shouldInvalidate || !v.shouldInvalidate(this.context))) {
        v.index = e.index, v.parentKey = r ? r.key : null, yield v;
        return;
      }
      a = i.renderer(e.value);
    }
    if (w.isValidElement(a)) {
      let v = a.type;
      if (typeof v != "function" && typeof v.getCollectionNode != "function") {
        let _ = a.type;
        throw new Error(`Unknown element <${_}> in collection.`);
      }
      let g = v.getCollectionNode(a.props, this.context);
      var s;
      let y = (s = e.index) !== null && s !== void 0 ? s : 0, $ = g.next();
      for (; !$.done && $.value; ) {
        let _ = $.value;
        e.index = y;
        var d;
        let Z = (d = _.key) !== null && d !== void 0 ? d : null;
        Z == null && (Z = _.element ? null : this.getKey(a, e, i, l));
        let A = [
          ...this.getFullNode({
            ..._,
            key: Z,
            index: y,
            wrapper: ou(e.wrapper, _.wrapper)
          }, this.getChildState(i, _), l ? `${l}${a.key}` : a.key, r)
        ];
        for (let M of A) {
          var u, c;
          M.value = (c = (u = _.value) !== null && u !== void 0 ? u : e.value) !== null && c !== void 0 ? c : null, M.value && this.cache.set(M.value, M);
          var f;
          if (e.type && M.type !== e.type) throw new Error(`Unsupported type <${Qn(M.type)}> in <${Qn((f = r?.type) !== null && f !== void 0 ? f : "unknown parent type")}>. Only <${Qn(e.type)}> is supported.`);
          y++, yield M;
        }
        $ = g.next(A);
      }
      return;
    }
    if (e.key == null || e.type == null) return;
    let h = this;
    var p, m;
    let b = {
      type: e.type,
      props: e.props,
      key: e.key,
      parentKey: r ? r.key : null,
      value: (p = e.value) !== null && p !== void 0 ? p : null,
      level: r ? r.level + 1 : 0,
      index: e.index,
      rendered: e.rendered,
      textValue: (m = e.textValue) !== null && m !== void 0 ? m : "",
      "aria-label": e["aria-label"],
      wrapper: e.wrapper,
      shouldInvalidate: e.shouldInvalidate,
      hasChildNodes: e.hasChildNodes || !1,
      childNodes: Vo(function* () {
        if (!e.hasChildNodes || !e.childNodes) return;
        let v = 0;
        for (let g of e.childNodes()) {
          g.key != null && (g.key = `${b.key}${g.key}`);
          let y = h.getFullNode({
            ...g,
            index: v
          }, h.getChildState(i, g), b.key, b);
          for (let $ of y)
            v++, yield $;
        }
      })
    };
    yield b;
  }
  constructor() {
    this.cache = /* @__PURE__ */ new WeakMap();
  }
}
function Vo(t) {
  let e = [], i = null;
  return {
    *[Symbol.iterator]() {
      for (let l of e) yield l;
      i || (i = t());
      for (let l of i)
        e.push(l), yield l;
    }
  };
}
function ou(t, e) {
  if (t && e) return (i) => t(e(i));
  if (t) return t;
  if (e) return e;
}
function Qn(t) {
  return t[0].toUpperCase() + t.slice(1);
}
function ps(t, e, i) {
  let l = X(() => new ru(), []), { children: r, items: o, collection: a } = t;
  return X(() => {
    if (a) return a;
    let d = l.build({
      children: r,
      items: o
    }, i);
    return e(d);
  }, [
    l,
    r,
    o,
    a,
    i,
    e
  ]);
}
function Zn(t, e) {
  return typeof e.getChildren == "function" ? e.getChildren(t.key) : t.childNodes;
}
function au(t) {
  return su(t);
}
function su(t, e) {
  for (let i of t)
    return i;
}
function el(t, e, i) {
  if (e.parentKey === i.parentKey) return e.index - i.index;
  let l = [
    ...Ho(t, e),
    e
  ], r = [
    ...Ho(t, i),
    i
  ], o = l.slice(0, r.length).findIndex((a, s) => a !== r[s]);
  return o !== -1 ? (e = l[o], i = r[o], e.index - i.index) : l.findIndex((a) => a === i) >= 0 ? 1 : (r.findIndex((a) => a === e) >= 0, -1);
}
function Ho(t, e) {
  let i = [], l = e;
  for (; l?.parentKey != null; )
    l = t.getItem(l.parentKey), l && i.unshift(l);
  return i;
}
const yo = /* @__PURE__ */ new WeakMap();
function lr(t) {
  let e = yo.get(t);
  if (e != null) return e;
  let i = 0, l = (r) => {
    for (let o of r)
      o.type === "section" ? l(Zn(o, t)) : o.type === "item" && i++;
  };
  return l(t), yo.set(t, i), i;
}
function du(t, e, i) {
  var l, r;
  let { key: o } = t, a = kn.get(e);
  var s;
  let d = (s = t.isDisabled) !== null && s !== void 0 ? s : e.selectionManager.isDisabled(o);
  var u;
  let c = (u = t.isSelected) !== null && u !== void 0 ? u : e.selectionManager.isSelected(o);
  var f;
  let h = (f = t.shouldSelectOnPressUp) !== null && f !== void 0 ? f : a?.shouldSelectOnPressUp;
  var p;
  let m = (p = t.shouldFocusOnHover) !== null && p !== void 0 ? p : a?.shouldFocusOnHover;
  var b;
  let v = (b = t.shouldUseVirtualFocus) !== null && b !== void 0 ? b : a?.shouldUseVirtualFocus;
  var g;
  let y = (g = t.isVirtualized) !== null && g !== void 0 ? g : a?.isVirtualized, $ = Et(), _ = Et(), Z = {
    role: "option",
    "aria-disabled": d || void 0,
    "aria-selected": e.selectionManager.selectionMode !== "none" ? c : void 0
  };
  mt() && zl() || (Z["aria-label"] = t["aria-label"], Z["aria-labelledby"] = $, Z["aria-describedby"] = _);
  let D = e.collection.getItem(o);
  if (y) {
    let x = Number(D?.index);
    Z["aria-posinset"] = Number.isNaN(x) ? void 0 : x + 1, Z["aria-setsize"] = lr(e.collection);
  }
  let A = a?.onAction ? () => {
    var x;
    return a == null || (x = a.onAction) === null || x === void 0 ? void 0 : x.call(a, o);
  } : void 0, M = as(e, o), { itemProps: F, isPressed: K, isFocused: C, hasAction: P, allowsSelection: T } = cs({
    selectionManager: e.selectionManager,
    key: o,
    ref: i,
    shouldSelectOnPressUp: h,
    allowsDifferentPressOrigin: h && m,
    isVirtualized: y,
    shouldUseVirtualFocus: v,
    isDisabled: d,
    onAction: A || !(D == null || (l = D.props) === null || l === void 0) && l.onAction ? ht(D == null || (r = D.props) === null || r === void 0 ? void 0 : r.onAction, A) : void 0,
    linkBehavior: a?.linkBehavior,
    id: M
  }), { hoverProps: E } = Ke({
    isDisabled: d || !m,
    onHoverStart() {
      Lt() || (e.selectionManager.setFocused(!0), e.selectionManager.setFocusedKey(o));
    }
  }), R = me(D?.props);
  delete R.id;
  let V = Ul(D?.props);
  return {
    optionProps: {
      ...Z,
      ...Q(R, F, E, V),
      id: M
    },
    labelProps: {
      id: $
    },
    descriptionProps: {
      id: _
    },
    isFocused: C,
    isFocusVisible: C && e.selectionManager.isFocused && Lt(),
    isSelected: c,
    isDisabled: d,
    isPressed: K,
    allowsSelection: T,
    hasAction: P
  };
}
function uu(t) {
  let { heading: e, "aria-label": i } = t, l = Le();
  return {
    itemProps: {
      role: "presentation"
    },
    headingProps: e ? {
      // Techincally, listbox cannot contain headings according to ARIA.
      // We hide the heading from assistive technology, using role="presentation",
      // and only use it as a visual label for the nested group.
      id: l,
      role: "presentation"
    } : {},
    groupProps: {
      role: "group",
      "aria-label": i,
      "aria-labelledby": e ? l : void 0
    }
  };
}
var hs = {};
hs = {
  longPressMessage: "اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة"
};
var ms = {};
ms = {
  longPressMessage: "Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто"
};
var gs = {};
gs = {
  longPressMessage: "Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku"
};
var bs = {};
bs = {
  longPressMessage: "Langt tryk eller tryk på Alt + pil ned for at åbne menuen"
};
var vs = {};
vs = {
  longPressMessage: "Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen"
};
var Cs = {};
Cs = {
  longPressMessage: "Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού"
};
var Vs = {};
Vs = {
  longPressMessage: "Long press or press Alt + ArrowDown to open menu"
};
var Hs = {};
Hs = {
  longPressMessage: "Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú"
};
var ys = {};
ys = {
  longPressMessage: "Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool"
};
var ws = {};
ws = {
  longPressMessage: "Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli"
};
var Ms = {};
Ms = {
  longPressMessage: "Appuyez de manière prolongée ou appuyez sur Alt + Flèche vers le bas pour ouvrir le menu."
};
var xs = {};
xs = {
  longPressMessage: "לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט"
};
var $s = {};
$s = {
  longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika"
};
var Ds = {};
Ds = {
  longPressMessage: "Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához"
};
var ks = {};
ks = {
  longPressMessage: "Premere a lungo o premere Alt + Freccia giù per aprire il menu"
};
var _s = {};
_s = {
  longPressMessage: "長押しまたは Alt+下矢印キーでメニューを開く"
};
var Zs = {};
Zs = {
  longPressMessage: "길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기"
};
var Es = {};
Es = {
  longPressMessage: "Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“."
};
var Ps = {};
Ps = {
  longPressMessage: "Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa"
};
var Ss = {};
Ss = {
  longPressMessage: "Langt trykk eller trykk Alt + PilNed for å åpne menyen"
};
var Ls = {};
Ls = {
  longPressMessage: "Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen"
};
var Ts = {};
Ts = {
  longPressMessage: "Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu"
};
var Fs = {};
Fs = {
  longPressMessage: "Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu"
};
var Ns = {};
Ns = {
  longPressMessage: "Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu"
};
var Ks = {};
Ks = {
  longPressMessage: "Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul"
};
var As = {};
As = {
  longPressMessage: "Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню"
};
var Bs = {};
Bs = {
  longPressMessage: "Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol"
};
var Rs = {};
Rs = {
  longPressMessage: "Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol"
};
var Is = {};
Is = {
  longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni"
};
var zs = {};
zs = {
  longPressMessage: "Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn"
};
var Os = {};
Os = {
  longPressMessage: "Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın"
};
var Us = {};
Us = {
  longPressMessage: "Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню"
};
var Gs = {};
Gs = {
  longPressMessage: "长按或按 Alt + 向下方向键以打开菜单"
};
var Ws = {};
Ws = {
  longPressMessage: "長按或按 Alt+向下鍵以開啟功能表"
};
var js = {};
js = {
  "ar-AE": hs,
  "bg-BG": ms,
  "cs-CZ": gs,
  "da-DK": bs,
  "de-DE": vs,
  "el-GR": Cs,
  "en-US": Vs,
  "es-ES": Hs,
  "et-EE": ys,
  "fi-FI": ws,
  "fr-FR": Ms,
  "he-IL": xs,
  "hr-HR": $s,
  "hu-HU": Ds,
  "it-IT": ks,
  "ja-JP": _s,
  "ko-KR": Zs,
  "lt-LT": Es,
  "lv-LV": Ps,
  "nb-NO": Ss,
  "nl-NL": Ls,
  "pl-PL": Ts,
  "pt-BR": Fs,
  "pt-PT": Ns,
  "ro-RO": Ks,
  "ru-RU": As,
  "sk-SK": Bs,
  "sl-SI": Rs,
  "sr-SP": Is,
  "sv-SE": zs,
  "tr-TR": Os,
  "uk-UA": Us,
  "zh-CN": Gs,
  "zh-TW": Ws
};
function cu(t) {
  return t && t.__esModule ? t.default : t;
}
function rr(t, e, i) {
  let { type: l = "menu", isDisabled: r, trigger: o = "press" } = t, a = Le(), { triggerProps: s, overlayProps: d } = N5({
    type: l
  }, e, i), u = (p) => {
    if (!r && !(o === "longPress" && !p.altKey) && i && i.current)
      switch (p.key) {
        case "Enter":
        case " ":
          if (o === "longPress") return;
        // fallthrough
        case "ArrowDown":
          "continuePropagation" in p || p.stopPropagation(), p.preventDefault(), e.toggle("first");
          break;
        case "ArrowUp":
          "continuePropagation" in p || p.stopPropagation(), p.preventDefault(), e.toggle("last");
          break;
        default:
          "continuePropagation" in p && p.continuePropagation();
      }
  }, c = wn(cu(js), "@react-aria/menu"), { longPressProps: f } = ya({
    isDisabled: r || o !== "longPress",
    accessibilityDescription: c.format("longPressMessage"),
    onLongPressStart() {
      e.close();
    },
    onLongPress() {
      e.open("first");
    }
  }), h = {
    preventFocusOnPress: !0,
    onPressStart(p) {
      p.pointerType !== "touch" && p.pointerType !== "keyboard" && !r && (ze(p.target), e.open(p.pointerType === "virtual" ? "first" : null));
    },
    onPress(p) {
      p.pointerType === "touch" && !r && (ze(p.target), e.toggle());
    }
  };
  return delete s.onPress, {
    // @ts-ignore - TODO we pass out both DOMAttributes AND AriaButtonProps, but useButton will discard the longPress event handlers, it's only through PressResponder magic that this works for RSP and RAC. it does not work in aria examples
    menuTriggerProps: {
      ...s,
      ...o === "press" ? h : f,
      id: a,
      onKeyDown: u
    },
    menuProps: {
      ...d,
      "aria-labelledby": a,
      autoFocus: e.focusStrategy || !0,
      onClose: e.close
    }
  };
}
const qs = /* @__PURE__ */ new WeakMap();
function fu(t, e, i) {
  let { shouldFocusWrap: l = !0, onKeyDown: r, onKeyUp: o, ...a } = t;
  !t["aria-label"] && !t["aria-labelledby"] && process.env.NODE_ENV !== "production" && console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let s = me(t, {
    labelable: !0
  }), { listProps: d } = fs({
    ...a,
    ref: i,
    selectionManager: e.selectionManager,
    collection: e.collection,
    disabledKeys: e.disabledKeys,
    shouldFocusWrap: l,
    linkBehavior: "override"
  });
  return qs.set(e, {
    onClose: t.onClose,
    onAction: t.onAction,
    shouldUseVirtualFocus: t.shouldUseVirtualFocus
  }), {
    menuProps: Q(s, {
      onKeyDown: r,
      onKeyUp: o
    }, {
      role: "menu",
      ...d,
      onKeyDown: (u) => {
        var c;
        (u.key !== "Escape" || t.shouldUseVirtualFocus) && ((c = d.onKeyDown) === null || c === void 0 || c.call(d, u));
      }
    })
  };
}
function pu(t, e, i) {
  let { id: l, key: r, closeOnSelect: o, isVirtualized: a, "aria-haspopup": s, onPressStart: d, onPressUp: u, onPress: c, onPressChange: f, onPressEnd: h, onHoverStart: p, onHoverChange: m, onHoverEnd: b, onKeyDown: v, onKeyUp: g, onFocus: y, onFocusChange: $, onBlur: _, selectionManager: Z = e.selectionManager } = t, D = !!s, A = D && t["aria-expanded"] === "true";
  var M;
  let F = (M = t.isDisabled) !== null && M !== void 0 ? M : Z.isDisabled(r);
  var K;
  let C = (K = t.isSelected) !== null && K !== void 0 ? K : Z.isSelected(r), P = qs.get(e), T = e.collection.getItem(r), E = t.onClose || P.onClose, R = li(), V = (z) => {
    var Ve;
    if (!D) {
      if (!(T == null || (Ve = T.props) === null || Ve === void 0) && Ve.onAction ? T.props.onAction() : t.onAction && t.onAction(r), P.onAction) {
        let ke = P.onAction;
        ke(r);
      }
      z.target instanceof HTMLAnchorElement && T && R.open(z.target, z, T.props.href, T.props.routerOptions);
    }
  }, x = "menuitem";
  D || (Z.selectionMode === "single" ? x = "menuitemradio" : Z.selectionMode === "multiple" && (x = "menuitemcheckbox"));
  let H = Et(), I = Et(), ie = Et(), S = {
    id: l,
    "aria-disabled": F || void 0,
    role: x,
    "aria-label": t["aria-label"],
    "aria-labelledby": H,
    "aria-describedby": [
      I,
      ie
    ].filter(Boolean).join(" ") || void 0,
    "aria-controls": t["aria-controls"],
    "aria-haspopup": s,
    "aria-expanded": t["aria-expanded"]
  };
  Z.selectionMode !== "none" && !D && (S["aria-checked"] = C), a && (S["aria-posinset"] = T?.index, S["aria-setsize"] = lr(e.collection));
  let G = (z) => {
    z.pointerType === "keyboard" && V(z), d?.(z);
  }, O = () => {
    !D && E && (o ?? (Z.selectionMode !== "multiple" || Z.isLink(r))) && E();
  }, te = (z) => {
    z.pointerType === "mouse" && (V(z), O()), u?.(z);
  }, fe = (z) => {
    z.pointerType !== "keyboard" && z.pointerType !== "mouse" && (V(z), O()), c?.(z);
  }, { itemProps: ge, isFocused: ae } = cs({
    id: l,
    selectionManager: Z,
    key: r,
    ref: i,
    shouldSelectOnPressUp: !0,
    allowsDifferentPressOrigin: !0,
    // Disable all handling of links in useSelectable item
    // because we handle it ourselves. The behavior of menus
    // is slightly different from other collections because
    // actions are performed on key down rather than key up.
    linkBehavior: "none",
    shouldUseVirtualFocus: P.shouldUseVirtualFocus
  }), { pressProps: $e, isPressed: Me } = gt({
    onPressStart: G,
    onPress: fe,
    onPressUp: te,
    onPressChange: f,
    onPressEnd: h,
    isDisabled: F
  }), { hoverProps: Ze } = Ke({
    isDisabled: F,
    onHoverStart(z) {
      !Lt() && !(A && s) && (Z.setFocused(!0), Z.setFocusedKey(r)), p?.(z);
    },
    onHoverChange: m,
    onHoverEnd: b
  }), { keyboardProps: re } = Ql({
    onKeyDown: (z) => {
      if (z.repeat) {
        z.continuePropagation();
        return;
      }
      switch (z.key) {
        case " ":
          !F && Z.selectionMode === "none" && !D && o !== !1 && E && E();
          break;
        case "Enter":
          !F && o !== !1 && !D && E && E();
          break;
        default:
          D || z.continuePropagation(), v?.(z);
          break;
      }
    },
    onKeyUp: g
  }), { focusProps: B } = Jl({
    onBlur: _,
    onFocus: y,
    onFocusChange: $
  }), se = me(T?.props);
  delete se.id;
  let W = Ul(T?.props);
  return {
    menuItemProps: {
      ...S,
      ...Q(
        se,
        W,
        D ? {
          onFocus: ge.onFocus,
          "data-collection": ge["data-collection"],
          "data-key": ge["data-key"]
        } : ge,
        $e,
        Ze,
        re,
        B,
        // Prevent DOM focus from moving on mouse down when using virtual focus or this is a submenu/subdialog trigger.
        P.shouldUseVirtualFocus || D ? {
          onMouseDown: (z) => z.preventDefault()
        } : void 0
      ),
      // If a submenu is expanded, set the tabIndex to -1 so that shift tabbing goes out of the menu instead of the parent menu item.
      tabIndex: ge.tabIndex != null && A && !P.shouldUseVirtualFocus ? -1 : ge.tabIndex
    },
    labelProps: {
      id: H
    },
    descriptionProps: {
      id: I
    },
    keyboardShortcutProps: {
      id: ie
    },
    isFocused: ae,
    isFocusVisible: ae && Z.isFocused && Lt() && !A,
    isSelected: C,
    isPressed: Me,
    isDisabled: F
  };
}
function hu(t) {
  let { heading: e, "aria-label": i } = t, l = Le();
  return {
    itemProps: {
      role: "presentation"
    },
    headingProps: e ? {
      // Techincally, menus cannot contain headings according to ARIA.
      // We hide the heading from assistive technology, using role="presentation",
      // and only use it as a label for the nested group.
      id: l,
      role: "presentation"
    } : {},
    groupProps: {
      role: "group",
      "aria-label": i,
      "aria-labelledby": e ? l : void 0
    }
  };
}
function mu(t) {
  return t && t.__esModule ? t.default : t;
}
function gu(t, e) {
  let { buttonRef: i, popoverRef: l, inputRef: r, listBoxRef: o, keyboardDelegate: a, layoutDelegate: s, shouldFocusWrap: d, isReadOnly: u, isDisabled: c } = t, f = N(null);
  i = i ?? f;
  let h = wn(mu(V1), "@react-aria/combobox"), { menuTriggerProps: p, menuProps: m } = rr({
    type: "listbox",
    isDisabled: c || u
  }, e, i);
  kn.set(e, {
    id: m.id
  });
  let { collection: b } = e, { disabledKeys: v } = e.selectionManager, g = X(() => a || new _n({
    collection: b,
    disabledKeys: v,
    ref: o,
    layoutDelegate: s
  }), [
    a,
    s,
    b,
    v,
    o
  ]), { collectionProps: y } = us({
    selectionManager: e.selectionManager,
    keyboardDelegate: g,
    disallowTypeAhead: !0,
    disallowEmptySelection: !0,
    shouldFocusWrap: d,
    ref: r,
    // Prevent item scroll behavior from being applied here, should be handled in the user's Popover + ListBox component
    isVirtualized: !0
  }), $ = li(), _ = (re) => {
    if (!re.nativeEvent.isComposing)
      switch (re.key) {
        case "Enter":
        case "Tab":
          if (e.isOpen && re.key === "Enter" && re.preventDefault(), e.isOpen && o.current && e.selectionManager.focusedKey != null && e.selectionManager.isLink(e.selectionManager.focusedKey)) {
            let B = o.current.querySelector(`[data-key="${CSS.escape(e.selectionManager.focusedKey.toString())}"]`);
            if (re.key === "Enter" && B instanceof HTMLAnchorElement) {
              let se = e.collection.getItem(e.selectionManager.focusedKey);
              se && $.open(B, re, se.props.href, se.props.routerOptions);
            }
            e.close();
          } else e.commit();
          break;
        case "Escape":
          (e.selectedKey !== null || e.inputValue === "" || t.allowsCustomValue) && re.continuePropagation(), e.revert();
          break;
        case "ArrowDown":
          e.open("first", "manual");
          break;
        case "ArrowUp":
          e.open("last", "manual");
          break;
        case "ArrowLeft":
        case "ArrowRight":
          e.selectionManager.setFocusedKey(null);
          break;
      }
  }, Z = (re) => {
    var B;
    let se = i?.current && i.current === re.relatedTarget, W = (B = l.current) === null || B === void 0 ? void 0 : B.contains(re.relatedTarget);
    se || W || (t.onBlur && t.onBlur(re), e.setFocused(!1));
  }, D = (re) => {
    e.isFocused || (t.onFocus && t.onFocus(re), e.setFocused(!0));
  }, { isInvalid: A, validationErrors: M, validationDetails: F } = e.displayValidation, { labelProps: K, inputProps: C, descriptionProps: P, errorMessageProps: T } = Aa({
    ...t,
    onChange: e.setInputValue,
    onKeyDown: u ? t.onKeyDown : ht(e.isOpen && y.onKeyDown, _, t.onKeyDown),
    onBlur: Z,
    value: e.inputValue,
    onFocus: D,
    autoComplete: "off",
    validate: void 0,
    [Mi]: e
  }, r), E = (re) => {
    if (re.pointerType === "touch") {
      var B;
      (B = r.current) === null || B === void 0 || B.focus(), e.toggle(null, "manual");
    }
  }, R = (re) => {
    if (re.pointerType !== "touch") {
      var B;
      (B = r.current) === null || B === void 0 || B.focus(), e.toggle(re.pointerType === "keyboard" || re.pointerType === "virtual" ? "first" : null, "manual");
    }
  }, V = nn({
    id: p.id,
    "aria-label": h.format("buttonLabel"),
    "aria-labelledby": t["aria-labelledby"] || K.id
  }), x = nn({
    id: m.id,
    "aria-label": h.format("listboxLabel"),
    "aria-labelledby": t["aria-labelledby"] || K.id
  }), H = N(0), I = (re) => {
    if (c || u) return;
    if (re.timeStamp - H.current < 500) {
      var B;
      re.preventDefault(), (B = r.current) === null || B === void 0 || B.focus();
      return;
    }
    let se = re.target.getBoundingClientRect(), W = re.changedTouches[0], z = Math.ceil(se.left + 0.5 * se.width), Ve = Math.ceil(se.top + 0.5 * se.height);
    if (W.clientX === z && W.clientY === Ve) {
      var ke;
      re.preventDefault(), (ke = r.current) === null || ke === void 0 || ke.focus(), e.toggle(null, "manual"), H.current = re.timeStamp;
    }
  }, ie = e.selectionManager.focusedKey != null && e.isOpen ? e.collection.getItem(e.selectionManager.focusedKey) : void 0;
  var S;
  let G = (S = ie?.parentKey) !== null && S !== void 0 ? S : null;
  var O;
  let te = (O = e.selectionManager.focusedKey) !== null && O !== void 0 ? O : null, fe = N(G), ge = N(te);
  le(() => {
    if (Xi() && ie != null && te != null && te !== ge.current) {
      let B = e.selectionManager.isSelected(te), se = G != null ? e.collection.getItem(G) : null, W = se?.["aria-label"] || (typeof se?.rendered == "string" ? se.rendered : "") || "";
      var re;
      let z = h.format("focusAnnouncement", {
        isGroupChange: (re = se && G !== fe.current) !== null && re !== void 0 ? re : !1,
        groupTitle: W,
        groupCount: se ? [
          ...Zn(se, e.collection)
        ].length : 0,
        optionText: ie["aria-label"] || ie.textValue || "",
        isSelected: B
      });
      Ci(z);
    }
    fe.current = G, ge.current = te;
  });
  let ae = lr(e.collection), $e = N(ae), Me = N(e.isOpen);
  le(() => {
    let re = e.isOpen !== Me.current && (e.selectionManager.focusedKey == null || Xi());
    if (e.isOpen && (re || ae !== $e.current)) {
      let B = h.format("countAnnouncement", {
        optionCount: ae
      });
      Ci(B);
    }
    $e.current = ae, Me.current = e.isOpen;
  });
  let Ze = N(e.selectedKey);
  return le(() => {
    if (Xi() && e.isFocused && e.selectedItem && e.selectedKey !== Ze.current) {
      let re = e.selectedItem["aria-label"] || e.selectedItem.textValue || "", B = h.format("selectedAnnouncement", {
        optionText: re
      });
      Ci(B);
    }
    Ze.current = e.selectedKey;
  }), le(() => {
    if (e.isOpen) return os([
      r.current,
      l.current
    ].filter((re) => re != null));
  }, [
    e.isOpen,
    r,
    l
  ]), qd(() => {
    !ie && r.current && Se(pe(r.current)) === r.current && Za(r.current, null);
  }, [
    ie
  ]), {
    labelProps: K,
    buttonProps: {
      ...p,
      ...V,
      excludeFromTabOrder: !0,
      preventFocusOnPress: !0,
      onPress: E,
      onPressStart: R,
      isDisabled: c || u
    },
    inputProps: Q(C, {
      role: "combobox",
      "aria-expanded": p["aria-expanded"],
      "aria-controls": e.isOpen ? m.id : void 0,
      // TODO: readd proper logic for completionMode = complete (aria-autocomplete: both)
      "aria-autocomplete": "list",
      "aria-activedescendant": ie ? as(e, ie.key) : void 0,
      onTouchEnd: I,
      // This disable's iOS's autocorrect suggestions, since the combo box provides its own suggestions.
      autoCorrect: "off",
      // This disable's the macOS Safari spell check auto corrections.
      spellCheck: "false"
    }),
    listBoxProps: Q(m, x, {
      autoFocus: e.focusStrategy || !0,
      shouldUseVirtualFocus: !0,
      shouldSelectOnPressUp: !0,
      shouldFocusOnHover: !0,
      linkBehavior: "selection"
    }),
    descriptionProps: P,
    errorMessageProps: T,
    isInvalid: A,
    validationErrors: M,
    validationDetails: F
  };
}
var qi = { exports: {} }, tl = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wo;
function bu() {
  if (wo) return tl;
  wo = 1;
  var t = w;
  function e(f, h) {
    return f === h && (f !== 0 || 1 / f === 1 / h) || f !== f && h !== h;
  }
  var i = typeof Object.is == "function" ? Object.is : e, l = t.useState, r = t.useEffect, o = t.useLayoutEffect, a = t.useDebugValue;
  function s(f, h) {
    var p = h(), m = l({ inst: { value: p, getSnapshot: h } }), b = m[0].inst, v = m[1];
    return o(
      function() {
        b.value = p, b.getSnapshot = h, d(b) && v({ inst: b });
      },
      [f, p, h]
    ), r(
      function() {
        return d(b) && v({ inst: b }), f(function() {
          d(b) && v({ inst: b });
        });
      },
      [f]
    ), a(p), p;
  }
  function d(f) {
    var h = f.getSnapshot;
    f = f.value;
    try {
      var p = h();
      return !i(f, p);
    } catch {
      return !0;
    }
  }
  function u(f, h) {
    return h();
  }
  var c = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return tl.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : c, tl;
}
var il = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mo;
function vu() {
  return Mo || (Mo = 1, process.env.NODE_ENV !== "production" && function() {
    function t(p, m) {
      return p === m && (p !== 0 || 1 / p === 1 / m) || p !== p && m !== m;
    }
    function e(p, m) {
      c || r.startTransition === void 0 || (c = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var b = m();
      if (!f) {
        var v = m();
        o(b, v) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), f = !0);
      }
      v = a({
        inst: { value: b, getSnapshot: m }
      });
      var g = v[0].inst, y = v[1];
      return d(
        function() {
          g.value = b, g.getSnapshot = m, i(g) && y({ inst: g });
        },
        [p, b, m]
      ), s(
        function() {
          return i(g) && y({ inst: g }), p(function() {
            i(g) && y({ inst: g });
          });
        },
        [p]
      ), u(b), b;
    }
    function i(p) {
      var m = p.getSnapshot;
      p = p.value;
      try {
        var b = m();
        return !o(p, b);
      } catch {
        return !0;
      }
    }
    function l(p, m) {
      return m();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var r = w, o = typeof Object.is == "function" ? Object.is : t, a = r.useState, s = r.useEffect, d = r.useLayoutEffect, u = r.useDebugValue, c = !1, f = !1, h = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : e;
    il.useSyncExternalStore = r.useSyncExternalStore !== void 0 ? r.useSyncExternalStore : h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), il;
}
var xo;
function Cu() {
  return xo || (xo = 1, process.env.NODE_ENV === "production" ? qi.exports = bu() : qi.exports = vu()), qi.exports;
}
var Vu = Cu();
const Ys = /* @__PURE__ */ new WeakMap();
function Hu(t, e, i) {
  let { keyboardDelegate: l, isDisabled: r, isRequired: o, name: a, validationBehavior: s = "aria" } = t, d = Mn({
    usage: "search",
    sensitivity: "base"
  }), u = X(() => l || new _n(e.collection, e.disabledKeys, i, d), [
    l,
    e.collection,
    e.disabledKeys,
    d,
    i
  ]), { menuTriggerProps: c, menuProps: f } = rr({
    isDisabled: r,
    type: "listbox"
  }, e, i), h = (M) => {
    switch (M.key) {
      case "ArrowLeft": {
        var F, K;
        M.preventDefault();
        let T = e.selectedKey != null ? (F = u.getKeyAbove) === null || F === void 0 ? void 0 : F.call(u, e.selectedKey) : (K = u.getFirstKey) === null || K === void 0 ? void 0 : K.call(u);
        T && e.setSelectedKey(T);
        break;
      }
      case "ArrowRight": {
        var C, P;
        M.preventDefault();
        let T = e.selectedKey != null ? (C = u.getKeyBelow) === null || C === void 0 ? void 0 : C.call(u, e.selectedKey) : (P = u.getFirstKey) === null || P === void 0 ? void 0 : P.call(u);
        T && e.setSelectedKey(T);
        break;
      }
    }
  }, { typeSelectProps: p } = ds({
    keyboardDelegate: u,
    selectionManager: e.selectionManager,
    onTypeSelect(M) {
      e.setSelectedKey(M);
    }
  }), { isInvalid: m, validationErrors: b, validationDetails: v } = e.displayValidation, { labelProps: g, fieldProps: y, descriptionProps: $, errorMessageProps: _ } = Na({
    ...t,
    labelElementType: "span",
    isInvalid: m,
    errorMessage: t.errorMessage || b
  });
  p.onKeyDown = p.onKeyDownCapture, delete p.onKeyDownCapture;
  let Z = me(t, {
    labelable: !0
  }), D = Q(p, c, y), A = Le();
  return Ys.set(e, {
    isDisabled: r,
    isRequired: o,
    name: a,
    validationBehavior: s
  }), {
    labelProps: {
      ...g,
      onClick: () => {
        if (!t.isDisabled) {
          var M;
          (M = i.current) === null || M === void 0 || M.focus(), Xl("keyboard");
        }
      }
    },
    triggerProps: Q(Z, {
      ...D,
      isDisabled: r,
      onKeyDown: ht(D.onKeyDown, h, t.onKeyDown),
      onKeyUp: t.onKeyUp,
      "aria-labelledby": [
        A,
        D["aria-labelledby"],
        D["aria-label"] && !D["aria-labelledby"] ? D.id : null
      ].filter(Boolean).join(" "),
      onFocus(M) {
        e.isFocused || (t.onFocus && t.onFocus(M), t.onFocusChange && t.onFocusChange(!0), e.setFocused(!0));
      },
      onBlur(M) {
        e.isOpen || (t.onBlur && t.onBlur(M), t.onFocusChange && t.onFocusChange(!1), e.setFocused(!1));
      }
    }),
    valueProps: {
      id: A
    },
    menuProps: {
      ...f,
      autoFocus: e.focusStrategy || !0,
      shouldSelectOnPressUp: !0,
      shouldFocusOnHover: !0,
      disallowEmptySelection: !0,
      linkBehavior: "selection",
      onBlur: (M) => {
        M.currentTarget.contains(M.relatedTarget) || (t.onBlur && t.onBlur(M), t.onFocusChange && t.onFocusChange(!1), e.setFocused(!1));
      },
      "aria-labelledby": [
        y["aria-labelledby"],
        D["aria-label"] && !y["aria-labelledby"] ? D.id : null
      ].filter(Boolean).join(" ")
    },
    descriptionProps: $,
    errorMessageProps: _,
    isInvalid: m,
    validationErrors: b,
    validationDetails: v
  };
}
function yu(t, e, i) {
  let l = Ys.get(e) || {}, { autoComplete: r, name: o = l.name, isDisabled: a = l.isDisabled } = t, { validationBehavior: s, isRequired: d } = l, { visuallyHiddenProps: u } = Ka();
  Cn(t.selectRef, e.selectedKey, e.setSelectedKey), tr({
    validationBehavior: s,
    focus: () => {
      var f;
      return (f = i.current) === null || f === void 0 ? void 0 : f.focus();
    }
  }, e, t.selectRef);
  var c;
  return {
    containerProps: {
      ...u,
      "aria-hidden": !0,
      // @ts-ignore
      "data-react-aria-prevent-focus": !0,
      // @ts-ignore
      "data-a11y-ignore": "aria-hidden-focus"
    },
    inputProps: {
      style: {
        display: "none"
      }
    },
    selectProps: {
      tabIndex: -1,
      autoComplete: r,
      disabled: a,
      required: s === "native" && d,
      name: o,
      value: (c = e.selectedKey) !== null && c !== void 0 ? c : void 0,
      onChange: (f) => e.setSelectedKey(f.target.value)
    }
  };
}
function wu(t) {
  let { state: e, triggerRef: i, label: l, name: r, isDisabled: o } = t, a = N(null), { containerProps: s, selectProps: d } = yu({
    ...t,
    selectRef: a
  }, e, i);
  var u;
  return e.collection.size <= 300 ? /* @__PURE__ */ w.createElement("div", {
    ...s,
    "data-testid": "hidden-select-container"
  }, /* @__PURE__ */ w.createElement("label", null, l, /* @__PURE__ */ w.createElement("select", {
    ...d,
    ref: a
  }, /* @__PURE__ */ w.createElement("option", null), [
    ...e.collection.getKeys()
  ].map((c) => {
    let f = e.collection.getItem(c);
    if (f && f.type === "item") return /* @__PURE__ */ w.createElement("option", {
      key: f.key,
      value: f.key
    }, f.textValue);
  })))) : r ? /* @__PURE__ */ w.createElement("input", {
    type: "hidden",
    autoComplete: d.autoComplete,
    name: r,
    disabled: o,
    value: (u = e.selectedKey) !== null && u !== void 0 ? u : ""
  }) : null;
}
function Mu(t) {
  let e = me(t, {
    labelable: !0
  }), i;
  return t.orientation === "vertical" && (i = "vertical"), t.elementType !== "hr" ? {
    separatorProps: {
      ...e,
      role: "separator",
      "aria-orientation": i
    }
  } : {
    separatorProps: e
  };
}
function xu(t, e, i) {
  let { labelProps: l, inputProps: r, isSelected: o, isPressed: a, isDisabled: s, isReadOnly: d } = Ta(t, e, i);
  return {
    labelProps: l,
    inputProps: {
      ...r,
      role: "switch",
      checked: o
    },
    isSelected: o,
    isPressed: a,
    isDisabled: s,
    isReadOnly: d
  };
}
function $u(t, e) {
  let i = me(t, {
    labelable: !0
  }), { hoverProps: l } = Ke({
    onHoverStart: () => e?.open(!0),
    onHoverEnd: () => e?.close()
  });
  return {
    tooltipProps: Q(i, l, {
      role: "tooltip"
    })
  };
}
function Du(t, e, i) {
  let { isDisabled: l, trigger: r } = t, o = Le(), a = N(!1), s = N(!1), d = () => {
    (a.current || s.current) && e.open(s.current);
  }, u = (g) => {
    !a.current && !s.current && e.close(g);
  };
  le(() => {
    let g = (y) => {
      i && i.current && y.key === "Escape" && (y.stopPropagation(), e.close(!0));
    };
    if (e.isOpen)
      return document.addEventListener("keydown", g, !0), () => {
        document.removeEventListener("keydown", g, !0);
      };
  }, [
    i,
    e
  ]);
  let c = () => {
    r !== "focus" && (wi() === "pointer" ? a.current = !0 : a.current = !1, d());
  }, f = () => {
    r !== "focus" && (s.current = !1, a.current = !1, u());
  }, h = () => {
    s.current = !1, a.current = !1, u(!0);
  }, p = () => {
    Lt() && (s.current = !0, d());
  }, m = () => {
    s.current = !1, a.current = !1, u(!0);
  }, { hoverProps: b } = Ke({
    isDisabled: l,
    onHoverStart: c,
    onHoverEnd: f
  }), { focusableProps: v } = Nt({
    isDisabled: l,
    onFocus: p,
    onBlur: m
  }, i);
  return {
    triggerProps: {
      "aria-describedby": e.isOpen ? o : void 0,
      ...Q(v, b, {
        onPointerDown: h,
        onKeyDown: h,
        tabIndex: void 0
      })
    },
    tooltipProps: {
      id: o
    }
  };
}
const ku = U(null);
U(null);
U(null);
U(null);
U(null);
U({});
const or = Symbol("default");
function Ue({ values: t, children: e }) {
  for (let [i, l] of t)
    e = /* @__PURE__ */ w.createElement(i.Provider, {
      value: l
    }, e);
  return e;
}
function Ce(t) {
  let { className: e, style: i, children: l, defaultClassName: r, defaultChildren: o, defaultStyle: a, values: s } = t;
  return X(() => {
    let d, u, c;
    return typeof e == "function" ? d = e({
      ...s,
      defaultClassName: r
    }) : d = e, typeof i == "function" ? u = i({
      ...s,
      defaultStyle: a || {}
    }) : u = i, typeof l == "function" ? c = l({
      ...s,
      defaultChildren: o
    }) : l == null ? c = o : c = l, {
      className: d ?? r,
      style: u || a ? {
        ...a,
        ...u
      } : void 0,
      children: c ?? o,
      "data-rac": ""
    };
  }, [
    e,
    i,
    l,
    r,
    o,
    a,
    s
  ]);
}
function vt(t, e) {
  let i = J(t);
  if (e === null)
    return null;
  if (i && typeof i == "object" && "slots" in i && i.slots) {
    let l = e || or;
    if (!i.slots[l]) {
      let r = new Intl.ListFormat().format(Object.keys(i.slots).map((a) => `"${a}"`)), o = e ? `Invalid slot "${e}".` : "A slot prop is required.";
      throw new Error(`${o} Valid slot names are ${r}.`);
    }
    return i.slots[l];
  }
  return i;
}
function ve(t, e, i) {
  let l = vt(i, t.slot) || {}, { ref: r, ...o } = l, a = Xe(X(() => _i(e, r), [
    e,
    r
  ])), s = Q(o, t);
  return "style" in o && o.style && "style" in t && t.style && (typeof o.style == "function" || typeof t.style == "function" ? s.style = (d) => {
    let u = typeof o.style == "function" ? o.style(d) : o.style, c = {
      ...d.defaultStyle,
      ...u
    }, f = typeof t.style == "function" ? t.style({
      ...d,
      defaultStyle: c
    }) : t.style;
    return {
      ...c,
      ...f
    };
  } : s.style = {
    ...o.style,
    ...t.style
  }), [
    s,
    a
  ];
}
function Kt(t = !0) {
  let [e, i] = ne(t), l = N(!1), r = oe((o) => {
    l.current = !0, i(!!o);
  }, []);
  return ce(() => {
    l.current || i(!1);
  }, []), [
    r,
    e
  ];
}
function Qt(t) {
  const e = /^(data-.*)$/;
  let i = {};
  for (const l in t) e.test(l) || (i[l] = t[l]);
  return i;
}
class ar {
  get childNodes() {
    throw new Error("childNodes is not supported");
  }
  clone() {
    let e = new ar(this.type, this.key);
    return e.value = this.value, e.level = this.level, e.hasChildNodes = this.hasChildNodes, e.rendered = this.rendered, e.textValue = this.textValue, e["aria-label"] = this["aria-label"], e.index = this.index, e.parentKey = this.parentKey, e.prevKey = this.prevKey, e.nextKey = this.nextKey, e.firstChildKey = this.firstChildKey, e.lastChildKey = this.lastChildKey, e.props = this.props, e.render = this.render, e.colSpan = this.colSpan, e.colIndex = this.colIndex, e;
  }
  constructor(e, i) {
    this.value = null, this.level = 0, this.hasChildNodes = !1, this.rendered = null, this.textValue = "", this["aria-label"] = void 0, this.index = 0, this.parentKey = null, this.prevKey = null, this.nextKey = null, this.firstChildKey = null, this.lastChildKey = null, this.props = {}, this.colSpan = null, this.colIndex = null, this.type = e, this.key = i;
  }
}
class sr {
  get size() {
    return this.keyMap.size;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  *[Symbol.iterator]() {
    let e = this.firstKey != null ? this.keyMap.get(this.firstKey) : void 0;
    for (; e; )
      yield e, e = e.nextKey != null ? this.keyMap.get(e.nextKey) : void 0;
  }
  getChildren(e) {
    let i = this.keyMap;
    return {
      *[Symbol.iterator]() {
        let l = i.get(e), r = l?.firstChildKey != null ? i.get(l.firstChildKey) : null;
        for (; r; )
          yield r, r = r.nextKey != null ? i.get(r.nextKey) : void 0;
      }
    };
  }
  getKeyBefore(e) {
    let i = this.keyMap.get(e);
    if (!i) return null;
    if (i.prevKey != null) {
      for (i = this.keyMap.get(i.prevKey); i && i.type !== "item" && i.lastChildKey != null; ) i = this.keyMap.get(i.lastChildKey);
      var l;
      return (l = i?.key) !== null && l !== void 0 ? l : null;
    }
    return i.parentKey;
  }
  getKeyAfter(e) {
    let i = this.keyMap.get(e);
    if (!i) return null;
    if (i.type !== "item" && i.firstChildKey != null) return i.firstChildKey;
    for (; i; ) {
      if (i.nextKey != null) return i.nextKey;
      if (i.parentKey != null) i = this.keyMap.get(i.parentKey);
      else return null;
    }
    return null;
  }
  getFirstKey() {
    return this.firstKey;
  }
  getLastKey() {
    let e = this.lastKey != null ? this.keyMap.get(this.lastKey) : null;
    for (; e?.lastChildKey != null; ) e = this.keyMap.get(e.lastChildKey);
    var i;
    return (i = e?.key) !== null && i !== void 0 ? i : null;
  }
  getItem(e) {
    var i;
    return (i = this.keyMap.get(e)) !== null && i !== void 0 ? i : null;
  }
  at() {
    throw new Error("Not implemented");
  }
  clone() {
    let e = this.constructor, i = new e();
    return i.keyMap = new Map(this.keyMap), i.firstKey = this.firstKey, i.lastKey = this.lastKey, i;
  }
  addNode(e) {
    if (this.frozen) throw new Error("Cannot add a node to a frozen collection");
    this.keyMap.set(e.key, e);
  }
  removeNode(e) {
    if (this.frozen) throw new Error("Cannot remove a node to a frozen collection");
    this.keyMap.delete(e);
  }
  commit(e, i, l = !1) {
    if (this.frozen) throw new Error("Cannot commit a frozen collection");
    this.firstKey = e, this.lastKey = i, this.frozen = !l;
  }
  // TODO: this is pretty specific to menu, will need to check if it is generic enough
  // Will need to handle varying levels I assume but will revisit after I get searchable menu working for base menu
  // TODO: an alternative is to simply walk the collection and add all item nodes that match the filter and any sections/separators we encounter
  // to an array, then walk that new array and fix all the next/Prev keys while adding them to the new collection
  UNSTABLE_filter(e) {
    let i = new sr(), l = null;
    for (let r of this)
      if (r.type === "section" && r.hasChildNodes) {
        let o = r.clone(), a = null;
        for (let s of this.getChildren(r.key)) if ($o(s, e, this, i)) {
          let d = s.clone();
          a == null && (o.firstChildKey = d.key), i.firstKey == null && (i.firstKey = o.key), a && a.parentKey === d.parentKey ? (a.nextKey = d.key, d.prevKey = a.key) : d.prevKey = null, d.nextKey = null, i.addNode(d), a = d;
        }
        a && (a.type !== "header" ? (o.lastChildKey = a.key, l == null ? o.prevKey = null : (l.type === "section" || l.type === "separator") && (l.nextKey = o.key, o.prevKey = l.key), o.nextKey = null, l = o, i.addNode(o)) : (i.firstKey === o.key && (i.firstKey = null), i.removeNode(a.key)));
      } else if (r.type === "separator") {
        let o = r.clone();
        o.nextKey = null, l?.type === "section" && (l.nextKey = o.key, o.prevKey = l.key, l = o, i.addNode(o));
      } else {
        let o = r.clone();
        $o(o, e, this, i) && (i.firstKey == null && (i.firstKey = o.key), l != null && l.type !== "section" && l.type !== "separator" && l.parentKey === o.parentKey ? (l.nextKey = o.key, o.prevKey = l.key) : o.prevKey = null, o.nextKey = null, i.addNode(o), l = o);
      }
    if (l?.type === "separator" && l.nextKey === null) {
      let r;
      l.prevKey != null && (r = i.getItem(l.prevKey), r.nextKey = null), i.removeNode(l.key), l = r;
    }
    return i.lastKey = l?.key || null, i;
  }
  constructor() {
    this.keyMap = /* @__PURE__ */ new Map(), this.firstKey = null, this.lastKey = null, this.frozen = !1;
  }
}
function $o(t, e, i, l) {
  if (t.type === "subdialogtrigger" || t.type === "submenutrigger") {
    let r = [
      ...i.getChildren(t.key)
    ][0];
    if (r && e(r.textValue)) {
      let o = r.clone();
      return l.addNode(o), !0;
    } else return !1;
  } else return t.type === "header" ? !0 : e(t.textValue);
}
class Xs {
  *[Symbol.iterator]() {
    let e = this.firstChild;
    for (; e; )
      yield e, e = e.nextSibling;
  }
  get firstChild() {
    return this._firstChild;
  }
  set firstChild(e) {
    this._firstChild = e, this.ownerDocument.markDirty(this);
  }
  get lastChild() {
    return this._lastChild;
  }
  set lastChild(e) {
    this._lastChild = e, this.ownerDocument.markDirty(this);
  }
  get previousSibling() {
    return this._previousSibling;
  }
  set previousSibling(e) {
    this._previousSibling = e, this.ownerDocument.markDirty(this);
  }
  get nextSibling() {
    return this._nextSibling;
  }
  set nextSibling(e) {
    this._nextSibling = e, this.ownerDocument.markDirty(this);
  }
  get parentNode() {
    return this._parentNode;
  }
  set parentNode(e) {
    this._parentNode = e, this.ownerDocument.markDirty(this);
  }
  get isConnected() {
    var e;
    return ((e = this.parentNode) === null || e === void 0 ? void 0 : e.isConnected) || !1;
  }
  invalidateChildIndices(e) {
    (this._minInvalidChildIndex == null || !this._minInvalidChildIndex.isConnected || e.index < this._minInvalidChildIndex.index) && (this._minInvalidChildIndex = e, this.ownerDocument.markDirty(this));
  }
  updateChildIndices() {
    let e = this._minInvalidChildIndex;
    for (; e; )
      e.index = e.previousSibling ? e.previousSibling.index + 1 : 0, e = e.nextSibling;
    this._minInvalidChildIndex = null;
  }
  appendChild(e) {
    e.parentNode && e.parentNode.removeChild(e), this.firstChild == null && (this.firstChild = e), this.lastChild ? (this.lastChild.nextSibling = e, e.index = this.lastChild.index + 1, e.previousSibling = this.lastChild) : (e.previousSibling = null, e.index = 0), e.parentNode = this, e.nextSibling = null, this.lastChild = e, this.ownerDocument.markDirty(this), this.isConnected && this.ownerDocument.queueUpdate();
  }
  insertBefore(e, i) {
    if (i == null) return this.appendChild(e);
    e.parentNode && e.parentNode.removeChild(e), e.nextSibling = i, e.previousSibling = i.previousSibling, e.index = i.index - 1, this.firstChild === i ? this.firstChild = e : i.previousSibling && (i.previousSibling.nextSibling = e), i.previousSibling = e, e.parentNode = i.parentNode, this.invalidateChildIndices(e), this.isConnected && this.ownerDocument.queueUpdate();
  }
  removeChild(e) {
    e.parentNode !== this || !this.ownerDocument.isMounted || (this._minInvalidChildIndex === e && (this._minInvalidChildIndex = null), e.nextSibling && (this.invalidateChildIndices(e.nextSibling), e.nextSibling.previousSibling = e.previousSibling), e.previousSibling && (e.previousSibling.nextSibling = e.nextSibling), this.firstChild === e && (this.firstChild = e.nextSibling), this.lastChild === e && (this.lastChild = e.previousSibling), e.parentNode = null, e.nextSibling = null, e.previousSibling = null, e.index = 0, this.ownerDocument.markDirty(e), this.isConnected && this.ownerDocument.queueUpdate());
  }
  addEventListener() {
  }
  removeEventListener() {
  }
  get previousVisibleSibling() {
    let e = this.previousSibling;
    for (; e && e.isHidden; ) e = e.previousSibling;
    return e;
  }
  get nextVisibleSibling() {
    let e = this.nextSibling;
    for (; e && e.isHidden; ) e = e.nextSibling;
    return e;
  }
  get firstVisibleChild() {
    let e = this.firstChild;
    for (; e && e.isHidden; ) e = e.nextSibling;
    return e;
  }
  get lastVisibleChild() {
    let e = this.lastChild;
    for (; e && e.isHidden; ) e = e.previousSibling;
    return e;
  }
  constructor(e) {
    this._firstChild = null, this._lastChild = null, this._previousSibling = null, this._nextSibling = null, this._parentNode = null, this._minInvalidChildIndex = null, this.ownerDocument = e;
  }
}
class qt extends Xs {
  get index() {
    return this._index;
  }
  set index(e) {
    this._index = e, this.ownerDocument.markDirty(this);
  }
  get level() {
    return this.parentNode instanceof qt ? this.parentNode.level + (this.node.type === "item" ? 1 : 0) : 0;
  }
  /**
  * Lazily gets a mutable instance of a Node. If the node has already
  * been cloned during this update cycle, it just returns the existing one.
  */
  getMutableNode() {
    return this.isMutated || (this.node = this.node.clone(), this.isMutated = !0), this.ownerDocument.markDirty(this), this.node;
  }
  updateNode() {
    var e, i, l;
    let r = this.nextVisibleSibling, o = this.getMutableNode();
    o.index = this.index, o.level = this.level, o.parentKey = this.parentNode instanceof qt ? this.parentNode.node.key : null;
    var a;
    o.prevKey = (a = (e = this.previousVisibleSibling) === null || e === void 0 ? void 0 : e.node.key) !== null && a !== void 0 ? a : null;
    var s;
    o.nextKey = (s = r?.node.key) !== null && s !== void 0 ? s : null, o.hasChildNodes = !!this.firstChild;
    var d;
    o.firstChildKey = (d = (i = this.firstVisibleChild) === null || i === void 0 ? void 0 : i.node.key) !== null && d !== void 0 ? d : null;
    var u;
    if (o.lastChildKey = (u = (l = this.lastVisibleChild) === null || l === void 0 ? void 0 : l.node.key) !== null && u !== void 0 ? u : null, (o.colSpan != null || o.colIndex != null) && r) {
      var c, f;
      let h = ((c = o.colIndex) !== null && c !== void 0 ? c : o.index) + ((f = o.colSpan) !== null && f !== void 0 ? f : 1);
      if (h !== r.node.colIndex) {
        let p = r.getMutableNode();
        p.colIndex = h;
      }
    }
  }
  setProps(e, i, l, r) {
    let o = this.getMutableNode(), { value: a, textValue: s, id: d, ...u } = e;
    if (u.ref = i, o.props = u, o.rendered = l, o.render = r, o.value = a, o.textValue = s || (typeof u.children == "string" ? u.children : "") || e["aria-label"] || "", d != null && d !== o.key) {
      if (this.hasSetProps) throw new Error("Cannot change the id of an item");
      o.key = d;
    }
    u.colSpan != null && (o.colSpan = u.colSpan), this.hasSetProps = !0, this.isConnected && this.ownerDocument.queueUpdate();
  }
  get style() {
    let e = this;
    return {
      get display() {
        return e.isHidden ? "none" : "";
      },
      set display(i) {
        let l = i === "none";
        if (e.isHidden !== l) {
          var r, o;
          (((r = e.parentNode) === null || r === void 0 ? void 0 : r.firstVisibleChild) === e || ((o = e.parentNode) === null || o === void 0 ? void 0 : o.lastVisibleChild) === e) && e.ownerDocument.markDirty(e.parentNode);
          let a = e.previousVisibleSibling, s = e.nextVisibleSibling;
          a && e.ownerDocument.markDirty(a), s && e.ownerDocument.markDirty(s), e.isHidden = l, e.ownerDocument.markDirty(e);
        }
      }
    };
  }
  hasAttribute() {
  }
  setAttribute() {
  }
  setAttributeNS() {
  }
  removeAttribute() {
  }
  constructor(e, i) {
    super(i), this.nodeType = 8, this.isMutated = !0, this._index = 0, this.hasSetProps = !1, this.isHidden = !1, this.node = new ar(e, `react-aria-${++i.nodeId}`);
  }
}
class _u extends Xs {
  get isConnected() {
    return this.isMounted;
  }
  createElement(e) {
    return new qt(e, this);
  }
  getMutableCollection() {
    return this.nextCollection || (this.nextCollection = this.collection.clone()), this.nextCollection;
  }
  markDirty(e) {
    this.dirtyNodes.add(e);
  }
  addNode(e) {
    if (e.isHidden) return;
    let i = this.getMutableCollection();
    if (!i.getItem(e.node.key)) for (let l of e) this.addNode(l);
    i.addNode(e.node);
  }
  removeNode(e) {
    for (let l of e) this.removeNode(l);
    this.getMutableCollection().removeNode(e.node.key);
  }
  /** Finalizes the collection update, updating all nodes and freezing the collection. */
  getCollection() {
    return this.inSubscription ? this.collection.clone() : (this.queuedRender = !1, this.updateCollection(), this.collection);
  }
  updateCollection() {
    for (let o of this.dirtyNodes) o instanceof qt && (!o.isConnected || o.isHidden) ? this.removeNode(o) : o.updateChildIndices();
    for (let o of this.dirtyNodes) o instanceof qt && (o.isConnected && !o.isHidden && (o.updateNode(), this.addNode(o)), o.isMutated = !1);
    if (this.dirtyNodes.clear(), this.nextCollection) {
      var e, i, l, r;
      this.nextCollection.commit((l = (e = this.firstVisibleChild) === null || e === void 0 ? void 0 : e.node.key) !== null && l !== void 0 ? l : null, (r = (i = this.lastVisibleChild) === null || i === void 0 ? void 0 : i.node.key) !== null && r !== void 0 ? r : null, this.isSSR), this.isSSR || (this.collection = this.nextCollection, this.nextCollection = null);
    }
  }
  queueUpdate() {
    if (!(this.dirtyNodes.size === 0 || this.queuedRender)) {
      this.queuedRender = !0, this.inSubscription = !0;
      for (let e of this.subscriptions) e();
      this.inSubscription = !1;
    }
  }
  subscribe(e) {
    return this.subscriptions.add(e), () => this.subscriptions.delete(e);
  }
  resetAfterSSR() {
    this.isSSR && (this.isSSR = !1, this.firstChild = null, this.lastChild = null, this.nodeId = 0);
  }
  constructor(e) {
    super(null), this.nodeType = 11, this.ownerDocument = this, this.dirtyNodes = /* @__PURE__ */ new Set(), this.isSSR = !1, this.nodeId = 0, this.nodesByProps = /* @__PURE__ */ new WeakMap(), this.isMounted = !0, this.nextCollection = null, this.subscriptions = /* @__PURE__ */ new Set(), this.queuedRender = !1, this.inSubscription = !1, this.collection = e, this.nextCollection = e;
  }
}
function Js(t) {
  let { children: e, items: i, idScope: l, addIdAndValue: r, dependencies: o = [] } = t, a = X(() => /* @__PURE__ */ new WeakMap(), o);
  return X(() => {
    if (i && typeof e == "function") {
      let u = [];
      for (let c of i) {
        let f = a.get(c);
        if (!f) {
          f = e(c);
          var s, d;
          let h = (d = (s = f.props.id) !== null && s !== void 0 ? s : c.key) !== null && d !== void 0 ? d : c.id;
          if (h == null) throw new Error("Could not determine key for item");
          l && (h = l + ":" + h), f = Pl(f, r ? {
            key: h,
            id: h,
            value: c
          } : {
            key: h
          }), a.set(c, f);
        }
        u.push(f);
      }
      return u;
    } else if (typeof e != "function") return e;
  }, [
    e,
    i,
    a,
    l,
    r
  ]);
}
if (typeof HTMLTemplateElement < "u") {
  const t = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild").get;
  Object.defineProperty(HTMLTemplateElement.prototype, "firstChild", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.dataset.reactAriaHidden ? this.content.firstChild : t.call(this);
    }
  });
}
const cn = /* @__PURE__ */ U(!1);
function Zu(t) {
  if (J(cn))
    return /* @__PURE__ */ w.createElement(w.Fragment, null, t.children);
  let i = /* @__PURE__ */ w.createElement(cn.Provider, {
    value: !0
  }, t.children);
  return /* @__PURE__ */ w.createElement("template", {
    "data-react-aria-hidden": !0
  }, i);
}
function En(t) {
  let e = (i, l) => J(cn) ? null : t(i, l);
  return e.displayName = t.displayName || t.name, we(e);
}
function Eu() {
  return J(cn);
}
const Qs = /* @__PURE__ */ U(!1), xi = /* @__PURE__ */ U(null);
function Pn(t) {
  if (J(xi))
    return t.content;
  let { collection: i, document: l } = Tu(t.createCollection);
  return /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement(Zu, null, /* @__PURE__ */ w.createElement(xi.Provider, {
    value: l
  }, t.content)), /* @__PURE__ */ w.createElement(Pu, {
    render: t.children,
    collection: i
  }));
}
function Pu({ collection: t, render: e }) {
  return e(t);
}
function Su(t, e, i) {
  let l = ni(), r = N(l);
  r.current = l;
  let o = oe(() => r.current ? i() : e(), [
    e,
    i
  ]);
  return Vu.useSyncExternalStore(t, o);
}
const Lu = typeof w.useSyncExternalStore == "function" ? w.useSyncExternalStore : Su;
function Tu(t) {
  let [e] = ne(() => new _u(t?.() || new sr())), i = oe((a) => e.subscribe(a), [
    e
  ]), l = oe(() => {
    let a = e.getCollection();
    return e.isSSR && e.resetAfterSSR(), a;
  }, [
    e
  ]), r = oe(() => (e.isSSR = !0, e.getCollection()), [
    e
  ]), o = Lu(i, l, r);
  return ce(() => (e.isMounted = !0, () => {
    e.isMounted = !1;
  }), [
    e
  ]), {
    collection: o,
    document: e
  };
}
const $l = /* @__PURE__ */ U(null);
function e4(t, e, i, l, r, o) {
  let a = oe((d) => {
    d?.setProps(e, i, l, o);
  }, [
    e,
    i,
    l,
    o
  ]), s = J($l);
  if (s) {
    let d = s.ownerDocument.nodesByProps.get(e);
    return d || (d = s.ownerDocument.createElement(t), d.setProps(e, i, l, o), s.appendChild(d), s.ownerDocument.updateCollection(), s.ownerDocument.nodesByProps.set(e, d)), r ? /* @__PURE__ */ w.createElement($l.Provider, {
      value: d
    }, r) : null;
  }
  return /* @__PURE__ */ w.createElement(t, {
    ref: a
  }, r);
}
function Ei(t, e) {
  let i = ({ node: r }) => e(r.props, r.props.ref, r), l = we((r, o) => {
    let a = J(on);
    if (!J(Qs)) {
      if (e.length >= 3) throw new Error(e.name + " cannot be rendered outside a collection.");
      return e(r, o);
    }
    return e4(t, r, o, "children" in r ? r.children : null, null, (d) => (
      // Forward FocusableContext to real DOM tree so tooltips work.
      /* @__PURE__ */ w.createElement(on.Provider, {
        value: a
      }, /* @__PURE__ */ w.createElement(i, {
        node: d
      }))
    ));
  });
  return l.displayName = e.name, l;
}
function Fu(t, e, i = t4) {
  let l = ({ node: o }) => e(o.props, o.props.ref, o), r = we((o, a) => {
    let s = i(o);
    var d;
    return (d = e4(t, o, a, null, s, (u) => /* @__PURE__ */ w.createElement(l, {
      node: u
    }))) !== null && d !== void 0 ? d : /* @__PURE__ */ w.createElement(w.Fragment, null);
  });
  return r.displayName = e.name, r;
}
function t4(t) {
  return Js({
    ...t,
    addIdAndValue: !0
  });
}
const Do = /* @__PURE__ */ U(null);
function i4(t) {
  let e = J(Do), i = (e?.dependencies || []).concat(t.dependencies), l = t.idScope || e?.idScope, r = t4({
    ...t,
    idScope: l,
    dependencies: i
  });
  return J(xi) && (r = /* @__PURE__ */ w.createElement(Nu, null, r)), e = X(() => ({
    dependencies: i,
    idScope: l
  }), [
    l,
    ...i
  ]), /* @__PURE__ */ w.createElement(Do.Provider, {
    value: e
  }, r);
}
function Nu({ children: t }) {
  let e = J(xi), i = X(() => /* @__PURE__ */ w.createElement(xi.Provider, {
    value: null
  }, /* @__PURE__ */ w.createElement(Qs.Provider, {
    value: !0
  }, t)), [
    t
  ]);
  return ni() ? /* @__PURE__ */ w.createElement($l.Provider, {
    value: e
  }, i) : /* @__PURE__ */ F2(i, e);
}
const $i = /* @__PURE__ */ U({});
let Ku = (t) => {
  let { onHoverStart: e, onHoverChange: i, onHoverEnd: l, ...r } = t;
  return r;
};
const dr = /* @__PURE__ */ En(function(e, i) {
  [e, i] = ve(e, i, $i);
  let { hoverProps: l, isHovered: r } = Ke(e), { isFocused: o, isFocusVisible: a, focusProps: s } = ot({
    isTextInput: !0,
    autoFocus: e.autoFocus
  }), d = !!e["aria-invalid"] && e["aria-invalid"] !== "false", u = Ce({
    ...e,
    values: {
      isHovered: r,
      isFocused: o,
      isFocusVisible: a,
      isDisabled: e.disabled || !1,
      isInvalid: d
    },
    defaultClassName: "react-aria-Input"
  });
  return /* @__PURE__ */ w.createElement("input", {
    ...Q(Ku(e), s, l),
    ...u,
    ref: i,
    "data-focused": o || void 0,
    "data-disabled": e.disabled || void 0,
    "data-hovered": r || void 0,
    "data-focus-visible": a || void 0,
    "data-invalid": d || void 0
  });
}), Ct = /* @__PURE__ */ U({}), n4 = /* @__PURE__ */ En(function(e, i) {
  [e, i] = ve(e, i, Ct);
  let { elementType: l = "label", ...r } = e;
  return /* @__PURE__ */ w.createElement(l, {
    className: "react-aria-Label",
    ...r,
    ref: i
  });
}), Au = /* @__PURE__ */ U(null), Bu = /* @__PURE__ */ new Set([
  "form",
  "formAction",
  "formEncType",
  "formMethod",
  "formNoValidate",
  "formTarget",
  "name",
  "value"
]), Pi = /* @__PURE__ */ U({}), Vt = /* @__PURE__ */ En(function(e, i) {
  [e, i] = ve(e, i, Pi), e = Ru(e);
  let l = e, { isPending: r } = l, { buttonProps: o, isPressed: a } = Y0(e, i), { focusProps: s, isFocused: d, isFocusVisible: u } = ot(e), { hoverProps: c, isHovered: f } = Ke({
    ...e,
    isDisabled: e.isDisabled || r
  }), h = {
    isHovered: f,
    isPressed: (l.isPressed || a) && !r,
    isFocused: d,
    isFocusVisible: u,
    isDisabled: e.isDisabled || !1,
    isPending: r ?? !1
  }, p = Ce({
    ...e,
    values: h,
    defaultClassName: "react-aria-Button"
  }), m = Le(o.id), b = Le(), v = o["aria-labelledby"];
  r && (v ? v = `${v} ${b}` : o["aria-label"] && (v = `${m} ${b}`));
  let g = N(r);
  return le(() => {
    let y = {
      "aria-labelledby": v || m
    };
    (!g.current && d && r || g.current && d && !r) && Ci(y, "assertive"), g.current = r;
  }, [
    r,
    d,
    v,
    m
  ]), /* @__PURE__ */ w.createElement("button", {
    ...me(e, {
      propNames: Bu
    }),
    ...Q(o, s, c),
    ...p,
    type: o.type === "submit" && r ? "button" : o.type,
    id: m,
    ref: i,
    "aria-labelledby": v,
    slot: e.slot || void 0,
    "aria-disabled": r ? "true" : o["aria-disabled"],
    "data-disabled": e.isDisabled || void 0,
    "data-pressed": h.isPressed || void 0,
    "data-hovered": f || void 0,
    "data-focused": d || void 0,
    "data-pending": r || void 0,
    "data-focus-visible": u || void 0
  }, /* @__PURE__ */ w.createElement(Au.Provider, {
    value: {
      id: b
    }
  }, p.children));
});
function Ru(t) {
  return t.isPending && (t.onPress = void 0, t.onPressStart = void 0, t.onPressEnd = void 0, t.onPressChange = void 0, t.onPressUp = void 0, t.onKeyDown = void 0, t.onKeyUp = void 0, t.onClick = void 0, t.href = void 0), t;
}
const at = /* @__PURE__ */ U({}), Dl = /* @__PURE__ */ we(function(e, i) {
  [e, i] = ve(e, i, at);
  let { elementType: l = "span", ...r } = e;
  return /* @__PURE__ */ w.createElement(l, {
    className: "react-aria-Text",
    ...r,
    ref: i
  });
}), ur = /* @__PURE__ */ U(null);
class kl {
  *[Symbol.iterator]() {
    yield* this.iterable;
  }
  get size() {
    return this.keyMap.size;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  getKeyBefore(e) {
    let i = this.keyMap.get(e);
    var l;
    return i && (l = i.prevKey) !== null && l !== void 0 ? l : null;
  }
  getKeyAfter(e) {
    let i = this.keyMap.get(e);
    var l;
    return i && (l = i.nextKey) !== null && l !== void 0 ? l : null;
  }
  getFirstKey() {
    return this.firstKey;
  }
  getLastKey() {
    return this.lastKey;
  }
  getItem(e) {
    var i;
    return (i = this.keyMap.get(e)) !== null && i !== void 0 ? i : null;
  }
  at(e) {
    const i = [
      ...this.getKeys()
    ];
    return this.getItem(i[e]);
  }
  getChildren(e) {
    let i = this.keyMap.get(e);
    return i?.childNodes || [];
  }
  constructor(e) {
    this.keyMap = /* @__PURE__ */ new Map(), this.firstKey = null, this.lastKey = null, this.iterable = e;
    let i = (a) => {
      if (this.keyMap.set(a.key, a), a.childNodes && a.type === "section") for (let s of a.childNodes) i(s);
    };
    for (let a of e) i(a);
    let l = null, r = 0;
    for (let [a, s] of this.keyMap)
      l ? (l.nextKey = a, s.prevKey = l.key) : (this.firstKey = a, s.prevKey = void 0), s.type === "item" && (s.index = r++), l = s, l.nextKey = void 0;
    var o;
    this.lastKey = (o = l?.key) !== null && o !== void 0 ? o : null;
  }
}
class We extends Set {
  constructor(e, i, l) {
    super(e), e instanceof We ? (this.anchorKey = i ?? e.anchorKey, this.currentKey = l ?? e.currentKey) : (this.anchorKey = i ?? null, this.currentKey = l ?? null);
  }
}
function Iu(t, e) {
  if (t.size !== e.size) return !1;
  for (let i of t)
    if (!e.has(i)) return !1;
  return !0;
}
function cr(t) {
  let { selectionMode: e = "none", disallowEmptySelection: i = !1, allowDuplicateSelectionEvents: l, selectionBehavior: r = "toggle", disabledBehavior: o = "all" } = t, a = N(!1), [, s] = ne(!1), d = N(null), u = N(null), [, c] = ne(null), f = X(() => ko(t.selectedKeys), [
    t.selectedKeys
  ]), h = X(() => ko(t.defaultSelectedKeys, new We()), [
    t.defaultSelectedKeys
  ]), [p, m] = rt(f, h, t.onSelectionChange), b = X(() => t.disabledKeys ? new Set(t.disabledKeys) : /* @__PURE__ */ new Set(), [
    t.disabledKeys
  ]), [v, g] = ne(r);
  r === "replace" && v === "toggle" && typeof p == "object" && p.size === 0 && g("replace");
  let y = N(r);
  return le(() => {
    r !== y.current && (g(r), y.current = r);
  }, [
    r
  ]), {
    selectionMode: e,
    disallowEmptySelection: i,
    selectionBehavior: v,
    setSelectionBehavior: g,
    get isFocused() {
      return a.current;
    },
    setFocused($) {
      a.current = $, s($);
    },
    get focusedKey() {
      return d.current;
    },
    get childFocusStrategy() {
      return u.current;
    },
    setFocusedKey($, _ = "first") {
      d.current = $, u.current = _, c($);
    },
    selectedKeys: p,
    setSelectedKeys($) {
      (l || !Iu($, p)) && m($);
    },
    disabledKeys: b,
    disabledBehavior: o
  };
}
function ko(t, e) {
  return t ? t === "all" ? "all" : new We(t) : e;
}
class Si {
  /**
  * The type of selection that is allowed in the collection.
  */
  get selectionMode() {
    return this.state.selectionMode;
  }
  /**
  * Whether the collection allows empty selection.
  */
  get disallowEmptySelection() {
    return this.state.disallowEmptySelection;
  }
  /**
  * The selection behavior for the collection.
  */
  get selectionBehavior() {
    return this.state.selectionBehavior;
  }
  /**
  * Sets the selection behavior for the collection.
  */
  setSelectionBehavior(e) {
    this.state.setSelectionBehavior(e);
  }
  /**
  * Whether the collection is currently focused.
  */
  get isFocused() {
    return this.state.isFocused;
  }
  /**
  * Sets whether the collection is focused.
  */
  setFocused(e) {
    this.state.setFocused(e);
  }
  /**
  * The current focused key in the collection.
  */
  get focusedKey() {
    return this.state.focusedKey;
  }
  /** Whether the first or last child of the focused key should receive focus. */
  get childFocusStrategy() {
    return this.state.childFocusStrategy;
  }
  /**
  * Sets the focused key.
  */
  setFocusedKey(e, i) {
    (e == null || this.collection.getItem(e)) && this.state.setFocusedKey(e, i);
  }
  /**
  * The currently selected keys in the collection.
  */
  get selectedKeys() {
    return this.state.selectedKeys === "all" ? new Set(this.getSelectAllKeys()) : this.state.selectedKeys;
  }
  /**
  * The raw selection value for the collection.
  * Either 'all' for select all, or a set of keys.
  */
  get rawSelection() {
    return this.state.selectedKeys;
  }
  /**
  * Returns whether a key is selected.
  */
  isSelected(e) {
    if (this.state.selectionMode === "none") return !1;
    let i = this.getKey(e);
    return i == null ? !1 : this.state.selectedKeys === "all" ? this.canSelectItem(i) : this.state.selectedKeys.has(i);
  }
  /**
  * Whether the selection is empty.
  */
  get isEmpty() {
    return this.state.selectedKeys !== "all" && this.state.selectedKeys.size === 0;
  }
  /**
  * Whether all items in the collection are selected.
  */
  get isSelectAll() {
    if (this.isEmpty) return !1;
    if (this.state.selectedKeys === "all") return !0;
    if (this._isSelectAll != null) return this._isSelectAll;
    let e = this.getSelectAllKeys(), i = this.state.selectedKeys;
    return this._isSelectAll = e.every((l) => i.has(l)), this._isSelectAll;
  }
  get firstSelectedKey() {
    let e = null;
    for (let l of this.state.selectedKeys) {
      let r = this.collection.getItem(l);
      (!e || r && el(this.collection, r, e) < 0) && (e = r);
    }
    var i;
    return (i = e?.key) !== null && i !== void 0 ? i : null;
  }
  get lastSelectedKey() {
    let e = null;
    for (let l of this.state.selectedKeys) {
      let r = this.collection.getItem(l);
      (!e || r && el(this.collection, r, e) > 0) && (e = r);
    }
    var i;
    return (i = e?.key) !== null && i !== void 0 ? i : null;
  }
  get disabledKeys() {
    return this.state.disabledKeys;
  }
  get disabledBehavior() {
    return this.state.disabledBehavior;
  }
  /**
  * Extends the selection to the given key.
  */
  extendSelection(e) {
    if (this.selectionMode === "none") return;
    if (this.selectionMode === "single") {
      this.replaceSelection(e);
      return;
    }
    let i = this.getKey(e);
    if (i == null) return;
    let l;
    if (this.state.selectedKeys === "all") l = new We([
      i
    ], i, i);
    else {
      let a = this.state.selectedKeys;
      var r;
      let s = (r = a.anchorKey) !== null && r !== void 0 ? r : i;
      l = new We(a, s, i);
      var o;
      for (let d of this.getKeyRange(s, (o = a.currentKey) !== null && o !== void 0 ? o : i)) l.delete(d);
      for (let d of this.getKeyRange(i, s)) this.canSelectItem(d) && l.add(d);
    }
    this.state.setSelectedKeys(l);
  }
  getKeyRange(e, i) {
    let l = this.collection.getItem(e), r = this.collection.getItem(i);
    return l && r ? el(this.collection, l, r) <= 0 ? this.getKeyRangeInternal(e, i) : this.getKeyRangeInternal(i, e) : [];
  }
  getKeyRangeInternal(e, i) {
    var l;
    if (!((l = this.layoutDelegate) === null || l === void 0) && l.getKeyRange) return this.layoutDelegate.getKeyRange(e, i);
    let r = [], o = e;
    for (; o != null; ) {
      let a = this.collection.getItem(o);
      if (a && (a.type === "item" || a.type === "cell" && this.allowsCellSelection) && r.push(o), o === i) return r;
      o = this.collection.getKeyAfter(o);
    }
    return [];
  }
  getKey(e) {
    let i = this.collection.getItem(e);
    if (!i || i.type === "cell" && this.allowsCellSelection) return e;
    for (; i && i.type !== "item" && i.parentKey != null; ) i = this.collection.getItem(i.parentKey);
    return !i || i.type !== "item" ? null : i.key;
  }
  /**
  * Toggles whether the given key is selected.
  */
  toggleSelection(e) {
    if (this.selectionMode === "none") return;
    if (this.selectionMode === "single" && !this.isSelected(e)) {
      this.replaceSelection(e);
      return;
    }
    let i = this.getKey(e);
    if (i == null) return;
    let l = new We(this.state.selectedKeys === "all" ? this.getSelectAllKeys() : this.state.selectedKeys);
    l.has(i) ? l.delete(i) : this.canSelectItem(i) && (l.add(i), l.anchorKey = i, l.currentKey = i), !(this.disallowEmptySelection && l.size === 0) && this.state.setSelectedKeys(l);
  }
  /**
  * Replaces the selection with only the given key.
  */
  replaceSelection(e) {
    if (this.selectionMode === "none") return;
    let i = this.getKey(e);
    if (i == null) return;
    let l = this.canSelectItem(i) ? new We([
      i
    ], i, i) : new We();
    this.state.setSelectedKeys(l);
  }
  /**
  * Replaces the selection with the given keys.
  */
  setSelectedKeys(e) {
    if (this.selectionMode === "none") return;
    let i = new We();
    for (let l of e) {
      let r = this.getKey(l);
      if (r != null && (i.add(r), this.selectionMode === "single"))
        break;
    }
    this.state.setSelectedKeys(i);
  }
  getSelectAllKeys() {
    let e = [], i = (l) => {
      for (; l != null; ) {
        if (this.canSelectItem(l)) {
          var r;
          let a = this.collection.getItem(l);
          a?.type === "item" && e.push(l);
          var o;
          a?.hasChildNodes && (this.allowsCellSelection || a.type !== "item") && i((o = (r = au(Zn(a, this.collection))) === null || r === void 0 ? void 0 : r.key) !== null && o !== void 0 ? o : null);
        }
        l = this.collection.getKeyAfter(l);
      }
    };
    return i(this.collection.getFirstKey()), e;
  }
  /**
  * Selects all items in the collection.
  */
  selectAll() {
    !this.isSelectAll && this.selectionMode === "multiple" && this.state.setSelectedKeys("all");
  }
  /**
  * Removes all keys from the selection.
  */
  clearSelection() {
    !this.disallowEmptySelection && (this.state.selectedKeys === "all" || this.state.selectedKeys.size > 0) && this.state.setSelectedKeys(new We());
  }
  /**
  * Toggles between select all and an empty selection.
  */
  toggleSelectAll() {
    this.isSelectAll ? this.clearSelection() : this.selectAll();
  }
  select(e, i) {
    this.selectionMode !== "none" && (this.selectionMode === "single" ? this.isSelected(e) && !this.disallowEmptySelection ? this.toggleSelection(e) : this.replaceSelection(e) : this.selectionBehavior === "toggle" || i && (i.pointerType === "touch" || i.pointerType === "virtual") ? this.toggleSelection(e) : this.replaceSelection(e));
  }
  /**
  * Returns whether the current selection is equal to the given selection.
  */
  isSelectionEqual(e) {
    if (e === this.state.selectedKeys) return !0;
    let i = this.selectedKeys;
    if (e.size !== i.size) return !1;
    for (let l of e)
      if (!i.has(l)) return !1;
    for (let l of i)
      if (!e.has(l)) return !1;
    return !0;
  }
  canSelectItem(e) {
    var i;
    if (this.state.selectionMode === "none" || this.state.disabledKeys.has(e)) return !1;
    let l = this.collection.getItem(e);
    return !(!l || !(l == null || (i = l.props) === null || i === void 0) && i.isDisabled || l.type === "cell" && !this.allowsCellSelection);
  }
  isDisabled(e) {
    var i, l;
    return this.state.disabledBehavior === "all" && (this.state.disabledKeys.has(e) || !!(!((l = this.collection.getItem(e)) === null || l === void 0 || (i = l.props) === null || i === void 0) && i.isDisabled));
  }
  isLink(e) {
    var i, l;
    return !!(!((l = this.collection.getItem(e)) === null || l === void 0 || (i = l.props) === null || i === void 0) && i.href);
  }
  getItemProps(e) {
    var i;
    return (i = this.collection.getItem(e)) === null || i === void 0 ? void 0 : i.props;
  }
  withCollection(e) {
    return new Si(e, this.state, {
      allowsCellSelection: this.allowsCellSelection,
      layoutDelegate: this.layoutDelegate || void 0
    });
  }
  constructor(e, i, l) {
    this.collection = e, this.state = i;
    var r;
    this.allowsCellSelection = (r = l?.allowsCellSelection) !== null && r !== void 0 ? r : !1, this._isSelectAll = null, this.layoutDelegate = l?.layoutDelegate || null;
  }
}
function l4(t) {
  let { filter: e, layoutDelegate: i } = t, l = cr(t), r = X(() => t.disabledKeys ? new Set(t.disabledKeys) : /* @__PURE__ */ new Set(), [
    t.disabledKeys
  ]), o = oe((u) => e ? new kl(e(u)) : new kl(u), [
    e
  ]), a = X(() => ({
    suppressTextValueWarning: t.suppressTextValueWarning
  }), [
    t.suppressTextValueWarning
  ]), s = ps(t, o, a), d = X(() => new Si(s, l, {
    layoutDelegate: i
  }), [
    s,
    l,
    i
  ]);
  return r4(s, d), {
    collection: s,
    disabledKeys: r,
    selectionManager: d
  };
}
function zu(t, e) {
  let i = X(() => e ? t.collection.UNSTABLE_filter(e) : t.collection, [
    t.collection,
    e
  ]), l = t.selectionManager.withCollection(i);
  return r4(i, l), {
    collection: i,
    selectionManager: l,
    disabledKeys: t.disabledKeys
  };
}
function r4(t, e) {
  const i = N(null);
  le(() => {
    if (e.focusedKey != null && !t.getItem(e.focusedKey) && i.current) {
      const c = i.current.getItem(e.focusedKey), f = [
        ...i.current.getKeys()
      ].map((g) => {
        const y = i.current.getItem(g);
        return y?.type === "item" ? y : null;
      }).filter((g) => g !== null), h = [
        ...t.getKeys()
      ].map((g) => {
        const y = t.getItem(g);
        return y?.type === "item" ? y : null;
      }).filter((g) => g !== null);
      var l, r;
      const p = ((l = f?.length) !== null && l !== void 0 ? l : 0) - ((r = h?.length) !== null && r !== void 0 ? r : 0);
      var o, a, s;
      let m = Math.min(p > 1 ? Math.max(((o = c?.index) !== null && o !== void 0 ? o : 0) - p + 1, 0) : (a = c?.index) !== null && a !== void 0 ? a : 0, ((s = h?.length) !== null && s !== void 0 ? s : 0) - 1), b = null, v = !1;
      for (; m >= 0; ) {
        if (!e.isDisabled(h[m].key)) {
          b = h[m];
          break;
        }
        if (m < h.length - 1 && !v) m++;
        else {
          v = !0;
          var d, u;
          m > ((d = c?.index) !== null && d !== void 0 ? d : 0) && (m = (u = c?.index) !== null && u !== void 0 ? u : 0), m--;
        }
      }
      e.setFocusedKey(b ? b.key : null);
    }
    i.current = t;
  }, [
    t,
    e
  ]);
}
function o4(t) {
  var e;
  let [i, l] = rt(t.selectedKey, (e = t.defaultSelectedKey) !== null && e !== void 0 ? e : null, t.onSelectionChange), r = X(() => i != null ? [
    i
  ] : [], [
    i
  ]), { collection: o, disabledKeys: a, selectionManager: s } = l4({
    ...t,
    selectionMode: "single",
    disallowEmptySelection: !0,
    allowDuplicateSelectionEvents: !0,
    selectedKeys: r,
    onSelectionChange: (u) => {
      if (u === "all") return;
      var c;
      let f = (c = u.values().next().value) !== null && c !== void 0 ? c : null;
      f === i && t.onSelectionChange && t.onSelectionChange(f), l(f);
    }
  }), d = i != null ? o.getItem(i) : null;
  return {
    collection: o,
    disabledKeys: a,
    selectionManager: s,
    selectedKey: i,
    setSelectedKey: l,
    selectedItem: d
  };
}
function Li(t) {
  let [e, i] = rt(t.isOpen, t.defaultOpen || !1, t.onOpenChange);
  const l = oe(() => {
    i(!0);
  }, [
    i
  ]), r = oe(() => {
    i(!1);
  }, [
    i
  ]), o = oe(() => {
    i(!e);
  }, [
    i,
    e
  ]);
  return {
    isOpen: e,
    setOpen: i,
    open: l,
    close: r,
    toggle: o
  };
}
function Ou(t) {
  var e;
  let { defaultFilter: i, menuTrigger: l = "input", allowsEmptyCollection: r = !1, allowsCustomValue: o, shouldCloseOnBlur: a = !0 } = t, [s, d] = ne(!1), [u, c] = ne(!1), [f, h] = ne(null), p = (ee) => {
    t.onSelectionChange && t.onSelectionChange(ee), ee === g && (te(), S());
  };
  var m;
  let { collection: b, selectionManager: v, selectedKey: g, setSelectedKey: y, selectedItem: $, disabledKeys: _ } = o4({
    ...t,
    onSelectionChange: p,
    items: (m = t.items) !== null && m !== void 0 ? m : t.defaultItems
  }), Z = t.defaultInputValue;
  if (Z == null) {
    var D, A;
    g == null ? Z = "" : Z = (A = (D = b.getItem(g)) === null || D === void 0 ? void 0 : D.textValue) !== null && A !== void 0 ? A : "";
  }
  let [M, F] = rt(t.inputValue, Z, t.onInputChange), K = b, C = X(() => (
    // No default filter if items are controlled.
    t.items != null || !i ? b : Uu(b, M, i)
  ), [
    b,
    M,
    i,
    t.items
  ]), [P, T] = ne(C), E = N("focus"), V = Li({
    ...t,
    onOpenChange: (ee) => {
      t.onOpenChange && t.onOpenChange(ee, ee ? E.current : void 0), v.setFocused(ee), ee || v.setFocusedKey(null);
    },
    isOpen: void 0,
    defaultOpen: void 0
  }), x = (ee = null, ue) => {
    let He = ue === "manual" || ue === "focus" && l === "focus";
    (r || C.size > 0 || He && K.size > 0 || t.items) && (He && !V.isOpen && t.items === void 0 && d(!0), E.current = ue, h(ee), V.open());
  }, H = (ee = null, ue) => {
    let He = ue === "manual" || ue === "focus" && l === "focus";
    !(r || C.size > 0 || He && K.size > 0 || t.items) && !V.isOpen || (He && !V.isOpen && t.items === void 0 && d(!0), V.isOpen || (E.current = ue), ie(ee));
  }, I = oe(() => {
    T(s ? K : C);
  }, [
    s,
    K,
    C
  ]), ie = oe((ee = null) => {
    V.isOpen && I(), h(ee), V.toggle();
  }, [
    V,
    I
  ]), S = oe(() => {
    V.isOpen && (I(), V.close());
  }, [
    V,
    I
  ]), [G, O] = ne(M), te = () => {
    var ee, ue;
    let He = g != null && (ue = (ee = b.getItem(g)) === null || ee === void 0 ? void 0 : ee.textValue) !== null && ue !== void 0 ? ue : "";
    O(He), F(He);
  };
  var fe, ge;
  let ae = N((ge = (fe = t.selectedKey) !== null && fe !== void 0 ? fe : t.defaultSelectedKey) !== null && ge !== void 0 ? ge : null);
  var $e;
  let Me = N(g != null && ($e = (e = b.getItem(g)) === null || e === void 0 ? void 0 : e.textValue) !== null && $e !== void 0 ? $e : "");
  le(() => {
    var ee;
    u && (C.size > 0 || r) && !V.isOpen && M !== G && l !== "manual" && x(null, "input"), !s && !r && V.isOpen && C.size === 0 && S(), g != null && g !== ae.current && S(), M !== G && (v.setFocusedKey(null), d(!1), M === "" && (t.inputValue === void 0 || t.selectedKey === void 0) && y(null)), g !== ae.current && (t.inputValue === void 0 || t.selectedKey === void 0) ? te() : G !== M && O(M);
    var ue;
    let He = g != null && (ue = (ee = b.getItem(g)) === null || ee === void 0 ? void 0 : ee.textValue) !== null && ue !== void 0 ? ue : "";
    !u && g != null && t.inputValue === void 0 && g === ae.current && Me.current !== He && (O(He), F(He)), ae.current = g, Me.current = He;
  });
  let Ze = Zi({
    ...t,
    value: X(() => ({
      inputValue: M,
      selectedKey: g
    }), [
      M,
      g
    ])
  }), re = () => {
    o && g == null ? B() : se();
  }, B = () => {
    ae.current = null, y(null), S();
  }, se = () => {
    if (t.selectedKey !== void 0 && t.inputValue !== void 0) {
      var ee, ue;
      (ee = t.onSelectionChange) === null || ee === void 0 || ee.call(t, g);
      var He;
      let Ae = g != null && (He = (ue = b.getItem(g)) === null || ue === void 0 ? void 0 : ue.textValue) !== null && He !== void 0 ? He : "";
      O(Ae), S();
    } else
      te(), S();
  };
  const W = () => {
    if (o) {
      var ee, ue;
      const He = g != null && (ue = (ee = b.getItem(g)) === null || ee === void 0 ? void 0 : ee.textValue) !== null && ue !== void 0 ? ue : "";
      M === He ? se() : B();
    } else
      se();
  };
  let z = () => {
    V.isOpen && v.focusedKey != null ? g === v.focusedKey ? se() : y(v.focusedKey) : W();
  }, Ve = N(M), ke = (ee) => {
    ee ? (Ve.current = M, l === "focus" && !t.isReadOnly && x(null, "focus")) : (a && W(), M !== Ve.current && Ze.commitValidation()), c(ee);
  }, Te = X(() => V.isOpen ? s ? K : C : P, [
    V.isOpen,
    K,
    C,
    s,
    P
  ]);
  return {
    ...Ze,
    ...V,
    focusStrategy: f,
    toggle: H,
    open: x,
    close: W,
    selectionManager: v,
    selectedKey: g,
    setSelectedKey: y,
    disabledKeys: _,
    isFocused: u,
    setFocused: ke,
    selectedItem: $,
    collection: Te,
    inputValue: M,
    setInputValue: F,
    commit: z,
    revert: re
  };
}
function Uu(t, e, i) {
  return new kl(a4(t, t, e, i));
}
function a4(t, e, i, l) {
  let r = [];
  for (let o of e)
    if (o.type === "section" && o.hasChildNodes) {
      let a = a4(t, Zn(o, t), i, l);
      [
        ...a
      ].some((s) => s.type === "item") && r.push({
        ...o,
        childNodes: a
      });
    } else o.type === "item" && l(o.textValue, i) ? r.push({
      ...o
    }) : o.type !== "item" && r.push({
      ...o
    });
  return r;
}
function Gu(t) {
  let { initialItems: e = [], initialSelectedKeys: i, getKey: l = (u) => {
    var c;
    return (c = u.id) !== null && c !== void 0 ? c : u.key;
  }, filter: r, initialFilterText: o = "" } = t, [a, s] = ne({
    items: e,
    selectedKeys: i === "all" ? "all" : new Set(i || []),
    filterText: o
  }), d = X(() => r ? a.items.filter((u) => r(u, a.filterText)) : a.items, [
    a.items,
    a.filterText,
    r
  ]);
  return {
    ...a,
    items: d,
    ...Wu({
      getKey: l
    }, s),
    getItem(u) {
      return a.items.find((c) => l(c) === u);
    }
  };
}
function Wu(t, e) {
  let { cursor: i, getKey: l } = t;
  return {
    setSelectedKeys(r) {
      e((o) => ({
        ...o,
        selectedKeys: r
      }));
    },
    setFilterText(r) {
      e((o) => ({
        ...o,
        filterText: r
      }));
    },
    insert(r, ...o) {
      e((a) => ui(a, r, ...o));
    },
    insertBefore(r, ...o) {
      e((a) => {
        let s = a.items.findIndex((d) => l?.(d) === r);
        if (s === -1)
          if (a.items.length === 0) s = 0;
          else return a;
        return ui(a, s, ...o);
      });
    },
    insertAfter(r, ...o) {
      e((a) => {
        let s = a.items.findIndex((d) => l?.(d) === r);
        if (s === -1)
          if (a.items.length === 0) s = 0;
          else return a;
        return ui(a, s + 1, ...o);
      });
    },
    prepend(...r) {
      e((o) => ui(o, 0, ...r));
    },
    append(...r) {
      e((o) => ui(o, o.items.length, ...r));
    },
    remove(...r) {
      e((o) => {
        let a = new Set(r), s = o.items.filter((u) => !a.has(l(u))), d = "all";
        if (o.selectedKeys !== "all") {
          d = new Set(o.selectedKeys);
          for (let u of r) d.delete(u);
        }
        return i == null && s.length === 0 && (d = /* @__PURE__ */ new Set()), {
          ...o,
          items: s,
          selectedKeys: d
        };
      });
    },
    removeSelectedItems() {
      e((r) => {
        if (r.selectedKeys === "all") return {
          ...r,
          items: [],
          selectedKeys: /* @__PURE__ */ new Set()
        };
        let o = r.selectedKeys, a = r.items.filter((s) => !o.has(l(s)));
        return {
          ...r,
          items: a,
          selectedKeys: /* @__PURE__ */ new Set()
        };
      });
    },
    move(r, o) {
      e((a) => {
        let s = a.items.findIndex((c) => l(c) === r);
        if (s === -1) return a;
        let d = a.items.slice(), [u] = d.splice(s, 1);
        return d.splice(o, 0, u), {
          ...a,
          items: d
        };
      });
    },
    moveBefore(r, o) {
      e((a) => {
        let s = a.items.findIndex((c) => l(c) === r);
        if (s === -1) return a;
        let u = (Array.isArray(o) ? o : [
          ...o
        ]).map((c) => a.items.findIndex((f) => l(f) === c)).sort((c, f) => c - f);
        return _o(a, u, s);
      });
    },
    moveAfter(r, o) {
      e((a) => {
        let s = a.items.findIndex((c) => l(c) === r);
        if (s === -1) return a;
        let u = (Array.isArray(o) ? o : [
          ...o
        ]).map((c) => a.items.findIndex((f) => l(f) === c)).sort((c, f) => c - f);
        return _o(a, u, s + 1);
      });
    },
    update(r, o) {
      e((a) => {
        let s = a.items.findIndex((d) => l(d) === r);
        return s === -1 ? a : {
          ...a,
          items: [
            ...a.items.slice(0, s),
            o,
            ...a.items.slice(s + 1)
          ]
        };
      });
    }
  };
}
function ui(t, e, ...i) {
  return {
    ...t,
    items: [
      ...t.items.slice(0, e),
      ...i,
      ...t.items.slice(e)
    ]
  };
}
function _o(t, e, i) {
  i -= e.filter((o) => o < i).length;
  let l = e.map((o) => ({
    from: o,
    to: i++
  }));
  for (let o = 0; o < l.length; o++) {
    let a = l[o].from;
    for (let s = o; s < l.length; s++)
      l[s].from > a && l[s].from--;
  }
  for (let o = 0; o < l.length; o++) {
    let a = l[o];
    for (let s = l.length - 1; s > o; s--) {
      let d = l[s];
      d.from < a.to ? a.to++ : d.from++;
    }
  }
  let r = t.items.slice();
  for (let o of l) {
    let [a] = r.splice(o.from, 1);
    r.splice(o.to, 0, a);
  }
  return {
    ...t,
    items: r
  };
}
function s4(t) {
  let e = Li(t), [i, l] = ne(null), [r, o] = ne([]), a = () => {
    o([]), e.close();
  };
  return {
    focusStrategy: i,
    ...e,
    open(u = null) {
      l(u), e.open();
    },
    toggle(u = null) {
      l(u), e.toggle();
    },
    close() {
      a();
    },
    expandedKeysStack: r,
    openSubmenu: (u, c) => {
      o((f) => c > f.length ? f : [
        ...f.slice(0, c),
        u
      ]);
    },
    closeSubmenu: (u, c) => {
      o((f) => f[c] === u ? f.slice(0, c) : f);
    }
  };
}
function ju(t) {
  let e = Li(t), [i, l] = ne(null), r = o4({
    ...t,
    onSelectionChange: (u) => {
      t.onSelectionChange != null && t.onSelectionChange(u), e.close(), o.commitValidation();
    }
  }), o = Zi({
    ...t,
    value: r.selectedKey
  }), [a, s] = ne(!1), d = X(() => {
    var u;
    return r.collection.size === 0 || r.collection.size === 1 && ((u = r.collection.getItem(r.collection.getFirstKey())) === null || u === void 0 ? void 0 : u.type) === "loader";
  }, [
    r.collection
  ]);
  return {
    ...o,
    ...r,
    ...e,
    focusStrategy: i,
    open(u = null) {
      d || (l(u), e.open());
    },
    toggle(u = null) {
      d || (l(u), e.toggle());
    },
    isFocused: a,
    setFocused: s
  };
}
const qu = 1500, Zo = 500;
let $t = {}, Yu = 0, ci = !1, tt = null, Dt = null;
function d4(t = {}) {
  let { delay: e = qu, closeDelay: i = Zo } = t, { isOpen: l, open: r, close: o } = Li(t), a = X(() => `${++Yu}`, []), s = N(null), d = N(o), u = () => {
    $t[a] = h;
  }, c = () => {
    for (let m in $t) m !== a && ($t[m](!0), delete $t[m]);
  }, f = () => {
    s.current && clearTimeout(s.current), s.current = null, c(), u(), ci = !0, r(), tt && (clearTimeout(tt), tt = null), Dt && (clearTimeout(Dt), Dt = null);
  }, h = (m) => {
    m || i <= 0 ? (s.current && clearTimeout(s.current), s.current = null, d.current()) : s.current || (s.current = setTimeout(() => {
      s.current = null, d.current();
    }, i)), tt && (clearTimeout(tt), tt = null), ci && (Dt && clearTimeout(Dt), Dt = setTimeout(() => {
      delete $t[a], Dt = null, ci = !1;
    }, Math.max(Zo, i)));
  }, p = () => {
    c(), u(), !l && !tt && !ci ? tt = setTimeout(() => {
      tt = null, ci = !0, f();
    }, e) : l || f();
  };
  return le(() => {
    d.current = o;
  }, [
    o
  ]), le(() => () => {
    s.current && clearTimeout(s.current), $t[a] && delete $t[a];
  }, [
    a
  ]), {
    isOpen: l,
    open: (m) => {
      !m && e > 0 && !s.current ? p() : f();
    },
    close: h
  };
}
class Xu {
  *[Symbol.iterator]() {
    yield* this.iterable;
  }
  get size() {
    return this.keyMap.size;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  getKeyBefore(e) {
    let i = this.keyMap.get(e);
    var l;
    return i && (l = i.prevKey) !== null && l !== void 0 ? l : null;
  }
  getKeyAfter(e) {
    let i = this.keyMap.get(e);
    var l;
    return i && (l = i.nextKey) !== null && l !== void 0 ? l : null;
  }
  getFirstKey() {
    return this.firstKey;
  }
  getLastKey() {
    return this.lastKey;
  }
  getItem(e) {
    var i;
    return (i = this.keyMap.get(e)) !== null && i !== void 0 ? i : null;
  }
  at(e) {
    const i = [
      ...this.getKeys()
    ];
    return this.getItem(i[e]);
  }
  constructor(e, { expandedKeys: i } = {}) {
    this.keyMap = /* @__PURE__ */ new Map(), this.firstKey = null, this.lastKey = null, this.iterable = e, i = i || /* @__PURE__ */ new Set();
    let l = (s) => {
      if (this.keyMap.set(s.key, s), s.childNodes && (s.type === "section" || i.has(s.key))) for (let d of s.childNodes) l(d);
    };
    for (let s of e) l(s);
    let r = null, o = 0;
    for (let [s, d] of this.keyMap)
      r ? (r.nextKey = s, d.prevKey = r.key) : (this.firstKey = s, d.prevKey = void 0), d.type === "item" && (d.index = o++), r = d, r.nextKey = void 0;
    var a;
    this.lastKey = (a = r?.key) !== null && a !== void 0 ? a : null;
  }
}
function Ju(t) {
  let { onExpandedChange: e } = t, [i, l] = rt(t.expandedKeys ? new Set(t.expandedKeys) : void 0, t.defaultExpandedKeys ? new Set(t.defaultExpandedKeys) : /* @__PURE__ */ new Set(), e), r = cr(t), o = X(() => t.disabledKeys ? new Set(t.disabledKeys) : /* @__PURE__ */ new Set(), [
    t.disabledKeys
  ]), a = ps(t, oe((d) => new Xu(d, {
    expandedKeys: i
  }), [
    i
  ]), null);
  return le(() => {
    r.focusedKey != null && !a.getItem(r.focusedKey) && r.setFocusedKey(null);
  }, [
    a,
    r.focusedKey
  ]), {
    collection: a,
    expandedKeys: i,
    disabledKeys: o,
    toggleKey: (d) => {
      l(Qu(i, d));
    },
    setExpandedKeys: l,
    selectionManager: new Si(a, r)
  };
}
function Qu(t, e) {
  let i = new Set(t);
  return i.has(e) ? i.delete(e) : i.add(e), i;
}
const ei = /* @__PURE__ */ U(null), u4 = /* @__PURE__ */ we(function(e, i) {
  [e, i] = ve(e, i, ei);
  let { validationErrors: l, validationBehavior: r = "native", children: o, className: a, ...s } = e;
  return /* @__PURE__ */ w.createElement("form", {
    noValidate: r !== "native",
    ...s,
    ref: i,
    className: a || "react-aria-Form"
  }, /* @__PURE__ */ w.createElement(ei.Provider, {
    value: {
      ...e,
      validationBehavior: r
    }
  }, /* @__PURE__ */ w.createElement(La.Provider, {
    value: l ?? {}
  }, o)));
}), fr = /* @__PURE__ */ U({}), pr = /* @__PURE__ */ we(function(e, i) {
  [e, i] = ve(e, i, fr);
  let { isDisabled: l, isInvalid: r, onHoverStart: o, onHoverChange: a, onHoverEnd: s, ...d } = e, { hoverProps: u, isHovered: c } = Ke({
    onHoverStart: o,
    onHoverChange: a,
    onHoverEnd: s,
    isDisabled: l
  }), { isFocused: f, isFocusVisible: h, focusProps: p } = ot({
    within: !0
  });
  l ?? (l = !!e["aria-disabled"] && e["aria-disabled"] !== "false"), r ?? (r = !!e["aria-invalid"] && e["aria-invalid"] !== "false");
  let m = Ce({
    ...e,
    values: {
      isHovered: c,
      isFocusWithin: f,
      isFocusVisible: h,
      isDisabled: l,
      isInvalid: r
    },
    defaultClassName: "react-aria-Group"
  });
  var b, v;
  return /* @__PURE__ */ w.createElement("div", {
    ...Q(d, p, u),
    ...m,
    ref: i,
    role: (b = e.role) !== null && b !== void 0 ? b : "group",
    slot: (v = e.slot) !== null && v !== void 0 ? v : void 0,
    "data-focus-within": f || void 0,
    "data-hovered": c || void 0,
    "data-focus-visible": h || void 0,
    "data-disabled": l || void 0,
    "data-invalid": r || void 0
  }, m.children);
}), e6 = /* @__PURE__ */ U({}), t6 = /* @__PURE__ */ U(null), i6 = /* @__PURE__ */ En(function(e, i) {
  [e, i] = ve(e, i, t6);
  let { validationBehavior: l } = vt(ei) || {};
  var r, o;
  let a = (o = (r = e.validationBehavior) !== null && r !== void 0 ? r : l) !== null && o !== void 0 ? o : "native", s = N(null), [d, u] = ve({}, s, $i), [c, f] = Kt(!e["aria-label"] && !e["aria-labelledby"]), [h, p] = ne("input"), { labelProps: m, inputProps: b, descriptionProps: v, errorMessageProps: g, ...y } = Aa({
    ...Qt(e),
    inputElementType: h,
    label: f,
    validationBehavior: a
  }, u), $ = oe((D) => {
    u.current = D, D && p(D instanceof HTMLTextAreaElement ? "textarea" : "input");
  }, [
    u
  ]), _ = Ce({
    ...e,
    values: {
      isDisabled: e.isDisabled || !1,
      isInvalid: y.isInvalid,
      isReadOnly: e.isReadOnly || !1,
      isRequired: e.isRequired || !1
    },
    defaultClassName: "react-aria-TextField"
  }), Z = me(e);
  return delete Z.id, /* @__PURE__ */ w.createElement("div", {
    ...Z,
    ..._,
    ref: i,
    slot: e.slot || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-invalid": y.isInvalid || void 0,
    "data-readonly": e.isReadOnly || void 0,
    "data-required": e.isRequired || void 0
  }, /* @__PURE__ */ w.createElement(Ue, {
    values: [
      [
        Ct,
        {
          ...m,
          ref: c
        }
      ],
      [
        $i,
        {
          ...Q(b, d),
          ref: $
        }
      ],
      [
        e6,
        {
          ...b,
          ref: $
        }
      ],
      [
        at,
        {
          slots: {
            description: v,
            errorMessage: g
          }
        }
      ],
      [
        ur,
        y
      ]
    ]
  }, _.children));
}), _l = /* @__PURE__ */ U(null), c4 = /* @__PURE__ */ U(null), n6 = {
  CollectionRoot({ collection: t, renderDropIndicator: e }) {
    return Eo(t, null, e);
  },
  CollectionBranch({ collection: t, parent: e, renderDropIndicator: i }) {
    return Eo(t, e, i);
  }
};
function Eo(t, e, i) {
  return Js({
    items: e ? t.getChildren(e.key) : t,
    dependencies: [
      i
    ],
    children(l) {
      let r = l.render(l);
      return !i || l.type !== "item" ? r : /* @__PURE__ */ w.createElement(w.Fragment, null, i({
        type: "item",
        key: l.key,
        dropPosition: "before"
      }), r, l6(t, l, i));
    }
  });
}
function l6(t, e, i) {
  let l = e.key, r = t.getKeyAfter(l), o = r != null ? t.getItem(r) : null;
  for (; o != null && o.type !== "item"; )
    r = t.getKeyAfter(o.key), o = r != null ? t.getItem(r) : null;
  let a = e.nextKey != null ? t.getItem(e.nextKey) : null;
  for (; a != null && a.type !== "item"; ) a = a.nextKey != null ? t.getItem(a.nextKey) : null;
  let s = [];
  if (a == null) {
    let d = e;
    for (; d && (!o || d.parentKey !== o.parentKey && o.level < d.level); ) {
      let u = i({
        type: "item",
        key: d.key,
        dropPosition: "after"
      });
      /* @__PURE__ */ Yt(u) && s.push(/* @__PURE__ */ Pl(u, {
        key: `${d.key}-after`
      })), d = d.parentKey != null ? t.getItem(d.parentKey) : null;
    }
  }
  return s;
}
const ri = /* @__PURE__ */ U(n6);
function r6(t) {
  return X(() => t != null ? /* @__PURE__ */ new Set([
    t
  ]) : null, [
    t
  ]);
}
const o6 = /* @__PURE__ */ U(null), hr = /* @__PURE__ */ we(function(e, i) {
  [e, i] = ve(e, i, o6);
  let l = e.href && !e.isDisabled ? "a" : "span", { linkProps: r, isPressed: o } = P0({
    ...e,
    elementType: l
  }, i), { hoverProps: a, isHovered: s } = Ke(e), { focusProps: d, isFocused: u, isFocusVisible: c } = ot(), f = Ce({
    ...e,
    defaultClassName: "react-aria-Link",
    values: {
      isCurrent: !!e["aria-current"],
      isDisabled: e.isDisabled || !1,
      isPressed: o,
      isHovered: s,
      isFocused: u,
      isFocusVisible: c
    }
  });
  return /* @__PURE__ */ w.createElement(l, {
    ref: i,
    slot: e.slot || void 0,
    ...Q(f, r, a, d),
    "data-focused": u || void 0,
    "data-hovered": s || void 0,
    "data-pressed": o || void 0,
    "data-focus-visible": c || void 0,
    "data-current": !!e["aria-current"] || void 0,
    "data-disabled": e.isDisabled || void 0
  }, f.children);
}), a6 = /* @__PURE__ */ U(null), s6 = /* @__PURE__ */ we(function(e, i) {
  let { inputRef: l = null, ...r } = e;
  [e, i] = ve(r, i, ku);
  let { validationBehavior: o } = vt(ei) || {};
  var a, s;
  let d = (s = (a = e.validationBehavior) !== null && a !== void 0 ? a : o) !== null && s !== void 0 ? s : "native", u = J(a6), c = Xe(X(() => _i(l, e.inputRef !== void 0 ? e.inputRef : null), [
    l,
    e.inputRef
  ])), { labelProps: f, inputProps: h, isSelected: p, isDisabled: m, isReadOnly: b, isPressed: v, isInvalid: g } = u ? C5({
    ...Qt(e),
    // Value is optional for standalone checkboxes, but required for CheckboxGroup items;
    // it's passed explicitly here to avoid typescript error (requires ignore).
    // @ts-ignore
    value: e.value,
    // ReactNode type doesn't allow function children.
    children: typeof e.children == "function" ? !0 : e.children
  }, u, c) : Fa({
    ...Qt(e),
    children: typeof e.children == "function" ? !0 : e.children,
    validationBehavior: d
  }, ir(e), c), { isFocused: y, isFocusVisible: $, focusProps: _ } = ot(), Z = m || b, { hoverProps: D, isHovered: A } = Ke({
    ...e,
    isDisabled: Z
  }), M = Ce({
    ...e,
    defaultClassName: "react-aria-Checkbox",
    values: {
      isSelected: p,
      isIndeterminate: e.isIndeterminate || !1,
      isPressed: v,
      isHovered: A,
      isFocused: y,
      isFocusVisible: $,
      isDisabled: m,
      isReadOnly: b,
      isInvalid: g,
      isRequired: e.isRequired || !1
    }
  }), F = me(e);
  return delete F.id, /* @__PURE__ */ w.createElement("label", {
    ...Q(F, f, D, M),
    ref: i,
    slot: e.slot || void 0,
    "data-selected": p || void 0,
    "data-indeterminate": e.isIndeterminate || void 0,
    "data-pressed": v || void 0,
    "data-hovered": A || void 0,
    "data-focused": y || void 0,
    "data-focus-visible": $ || void 0,
    "data-disabled": m || void 0,
    "data-readonly": b || void 0,
    "data-invalid": g || void 0,
    "data-required": e.isRequired || void 0
  }, /* @__PURE__ */ w.createElement(Dn, {
    elementType: "span"
  }, /* @__PURE__ */ w.createElement("input", {
    ...Q(h, _),
    ref: c
  })), M.children);
});
var f4 = {};
f4 = {
  colorSwatchPicker: "تغييرات الألوان",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "حدد عنصرًا",
  tableResizer: "أداة تغيير الحجم"
};
var p4 = {};
p4 = {
  colorSwatchPicker: "Цветови мостри",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Изберете предмет",
  tableResizer: "Преоразмерител"
};
var h4 = {};
h4 = {
  colorSwatchPicker: "Vzorky barev",
  dropzoneLabel: "Místo pro přetažení",
  selectPlaceholder: "Vyberte položku",
  tableResizer: "Změna velikosti"
};
var m4 = {};
m4 = {
  colorSwatchPicker: "Farveprøver",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Vælg et element",
  tableResizer: "Størrelsesændring"
};
var g4 = {};
g4 = {
  colorSwatchPicker: "Farbfelder",
  dropzoneLabel: "Ablegebereich",
  selectPlaceholder: "Element wählen",
  tableResizer: "Größenanpassung"
};
var b4 = {};
b4 = {
  colorSwatchPicker: "Χρωματικά δείγματα",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Επιλέξτε ένα αντικείμενο",
  tableResizer: "Αλλαγή μεγέθους"
};
var v4 = {};
v4 = {
  selectPlaceholder: "Select an item",
  tableResizer: "Resizer",
  dropzoneLabel: "DropZone",
  colorSwatchPicker: "Color swatches"
};
var C4 = {};
C4 = {
  colorSwatchPicker: "Muestras de colores",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Seleccionar un artículo",
  tableResizer: "Cambiador de tamaño"
};
var V4 = {};
V4 = {
  colorSwatchPicker: "Värvinäidised",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Valige üksus",
  tableResizer: "Suuruse muutja"
};
var H4 = {};
H4 = {
  colorSwatchPicker: "Värimallit",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Valitse kohde",
  tableResizer: "Koon muuttaja"
};
var y4 = {};
y4 = {
  colorSwatchPicker: "Échantillons de couleurs",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Sélectionner un élément",
  tableResizer: "Redimensionneur"
};
var w4 = {};
w4 = {
  colorSwatchPicker: "דוגמיות צבע",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "בחר פריט",
  tableResizer: "שינוי גודל"
};
var M4 = {};
M4 = {
  colorSwatchPicker: "Uzorci boja",
  dropzoneLabel: "Zona spuštanja",
  selectPlaceholder: "Odaberite stavku",
  tableResizer: "Promjena veličine"
};
var x4 = {};
x4 = {
  colorSwatchPicker: "Színtárak",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Válasszon ki egy elemet",
  tableResizer: "Átméretező"
};
var $4 = {};
$4 = {
  colorSwatchPicker: "Campioni di colore",
  dropzoneLabel: "Zona di rilascio",
  selectPlaceholder: "Seleziona un elemento",
  tableResizer: "Ridimensionamento"
};
var D4 = {};
D4 = {
  colorSwatchPicker: "カラースウォッチ",
  dropzoneLabel: "ドロップゾーン",
  selectPlaceholder: "項目を選択",
  tableResizer: "サイズ変更ツール"
};
var k4 = {};
k4 = {
  colorSwatchPicker: "색상 견본",
  dropzoneLabel: "드롭 영역",
  selectPlaceholder: "항목 선택",
  tableResizer: "크기 조정기"
};
var _4 = {};
_4 = {
  colorSwatchPicker: "Spalvų pavyzdžiai",
  dropzoneLabel: "„DropZone“",
  selectPlaceholder: "Pasirinkite elementą",
  tableResizer: "Dydžio keitiklis"
};
var Z4 = {};
Z4 = {
  colorSwatchPicker: "Krāsu paraugi",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Izvēlēties vienumu",
  tableResizer: "Izmēra mainītājs"
};
var E4 = {};
E4 = {
  colorSwatchPicker: "Fargekart",
  dropzoneLabel: "Droppsone",
  selectPlaceholder: "Velg et element",
  tableResizer: "Størrelsesendrer"
};
var P4 = {};
P4 = {
  colorSwatchPicker: "kleurstalen",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Selecteer een item",
  tableResizer: "Resizer"
};
var S4 = {};
S4 = {
  colorSwatchPicker: "Próbki kolorów",
  dropzoneLabel: "Strefa upuszczania",
  selectPlaceholder: "Wybierz element",
  tableResizer: "Zmiana rozmiaru"
};
var L4 = {};
L4 = {
  colorSwatchPicker: "Amostras de cores",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Selecione um item",
  tableResizer: "Redimensionador"
};
var T4 = {};
T4 = {
  colorSwatchPicker: "Amostras de cores",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Selecione um item",
  tableResizer: "Redimensionador"
};
var F4 = {};
F4 = {
  colorSwatchPicker: "Specimene de culoare",
  dropzoneLabel: "Zonă de plasare",
  selectPlaceholder: "Selectați un element",
  tableResizer: "Instrument de redimensionare"
};
var N4 = {};
N4 = {
  colorSwatchPicker: "Цветовые образцы",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Выберите элемент",
  tableResizer: "Средство изменения размера"
};
var K4 = {};
K4 = {
  colorSwatchPicker: "Vzorkovníky farieb",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Vyberte položku",
  tableResizer: "Nástroj na zmenu veľkosti"
};
var A4 = {};
A4 = {
  colorSwatchPicker: "Barvne palete",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Izberite element",
  tableResizer: "Spreminjanje velikosti"
};
var B4 = {};
B4 = {
  colorSwatchPicker: "Uzorci boje",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Izaberite stavku",
  tableResizer: "Promena veličine"
};
var R4 = {};
R4 = {
  colorSwatchPicker: "Färgrutor",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Välj en artikel",
  tableResizer: "Storleksändrare"
};
var I4 = {};
I4 = {
  colorSwatchPicker: "Renk örnekleri",
  dropzoneLabel: "Bırakma Bölgesi",
  selectPlaceholder: "Bir öğe seçin",
  tableResizer: "Yeniden boyutlandırıcı"
};
var z4 = {};
z4 = {
  colorSwatchPicker: "Зразки кольорів",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Виберіть елемент",
  tableResizer: "Засіб змінення розміру"
};
var O4 = {};
O4 = {
  colorSwatchPicker: "颜色色板",
  dropzoneLabel: "放置区域",
  selectPlaceholder: "选择一个项目",
  tableResizer: "尺寸调整器"
};
var U4 = {};
U4 = {
  colorSwatchPicker: "色票",
  dropzoneLabel: "放置區",
  selectPlaceholder: "選取項目",
  tableResizer: "大小調整器"
};
var G4 = {};
G4 = {
  "ar-AE": f4,
  "bg-BG": p4,
  "cs-CZ": h4,
  "da-DK": m4,
  "de-DE": g4,
  "el-GR": b4,
  "en-US": v4,
  "es-ES": C4,
  "et-EE": V4,
  "fi-FI": H4,
  "fr-FR": y4,
  "he-IL": w4,
  "hr-HR": M4,
  "hu-HU": x4,
  "it-IT": $4,
  "ja-JP": D4,
  "ko-KR": k4,
  "lt-LT": _4,
  "lv-LV": Z4,
  "nb-NO": E4,
  "nl-NL": P4,
  "pl-PL": S4,
  "pt-BR": L4,
  "pt-PT": T4,
  "ro-RO": F4,
  "ru-RU": N4,
  "sk-SK": K4,
  "sl-SI": A4,
  "sr-SP": B4,
  "sv-SE": R4,
  "tr-TR": I4,
  "uk-UA": z4,
  "zh-CN": O4,
  "zh-TW": U4
};
const Sn = /* @__PURE__ */ U({}), W4 = /* @__PURE__ */ U(null), d6 = /* @__PURE__ */ we(function(e, i) {
  let { render: l } = J(W4);
  return /* @__PURE__ */ w.createElement(w.Fragment, null, l(e, i));
});
function j4(t, e) {
  var i;
  let l = t?.renderDropIndicator, r = t == null || (i = t.isVirtualDragging) === null || i === void 0 ? void 0 : i.call(t), o = oe((a) => {
    if (r || e?.isDropTarget(a)) return l ? l(a) : /* @__PURE__ */ w.createElement(d6, {
      target: a
    });
  }, [
    e?.target,
    r,
    l
  ]);
  return t?.useDropIndicator ? o : void 0;
}
function u6(t, e, i) {
  var l, r;
  let o = t.focusedKey, a = null;
  if (!(e == null || (l = e.isVirtualDragging) === null || l === void 0) && l.call(e) && (i == null || (r = i.target) === null || r === void 0 ? void 0 : r.type) === "item") {
    a = i.target.key;
    var s;
    i.target.dropPosition === "after" && (a = (s = i.collection.getKeyAfter(a)) !== null && s !== void 0 ? s : a);
  }
  return X(() => new Set([
    o,
    a
  ].filter((d) => d != null)), [
    o,
    a
  ]);
}
const mr = /* @__PURE__ */ U({}), c6 = /* @__PURE__ */ Ei("header", function(e, i) {
  return [e, i] = ve(e, i, mr), /* @__PURE__ */ w.createElement("header", {
    className: "react-aria-Header",
    ...e,
    ref: i
  }, e.children);
}), gr = /* @__PURE__ */ U({}), f6 = /* @__PURE__ */ Ei("separator", function(e, i) {
  [e, i] = ve(e, i, gr);
  let { elementType: l, orientation: r, style: o, className: a, slot: s, ...d } = e, u = l || "hr";
  u === "hr" && r === "vertical" && (u = "div");
  let { separatorProps: c } = Mu({
    ...d,
    elementType: l,
    orientation: r
  });
  return /* @__PURE__ */ w.createElement(u, {
    ...me(e),
    ...c,
    style: o,
    className: a ?? "react-aria-Separator",
    ref: i,
    slot: s || void 0
  });
}), Ti = /* @__PURE__ */ U(null), At = /* @__PURE__ */ U(null), br = /* @__PURE__ */ we(function(e, i) {
  [e, i] = ve(e, i, Ti);
  let l = J(At);
  return l ? /* @__PURE__ */ w.createElement(q4, {
    state: l,
    props: e,
    listBoxRef: i
  }) : /* @__PURE__ */ w.createElement(Pn, {
    content: /* @__PURE__ */ w.createElement(i4, e)
  }, (r) => /* @__PURE__ */ w.createElement(p6, {
    props: e,
    listBoxRef: i,
    collection: r
  }));
});
function p6({ props: t, listBoxRef: e, collection: i }) {
  t = {
    ...t,
    collection: i,
    children: null,
    items: null
  };
  let { layoutDelegate: l } = J(ri), r = l4({
    ...t,
    layoutDelegate: l
  });
  return /* @__PURE__ */ w.createElement(q4, {
    state: r,
    props: t,
    listBoxRef: e
  });
}
function q4({ state: t, props: e, listBoxRef: i }) {
  var l;
  let { filter: r, collectionProps: o, collectionRef: a } = J(_l) || {};
  e = X(() => o ? {
    ...e,
    ...o
  } : e, [
    e,
    o
  ]);
  let { dragAndDropHooks: s, layout: d = "stack", orientation: u = "vertical" } = e;
  i = Xe(X(() => _i(i, a !== void 0 ? a : null), [
    a,
    i
  ]));
  let c = zu(t, r), { collection: f, selectionManager: h } = c, p = !!s?.useDraggableCollectionState, m = !!s?.useDroppableCollectionState, { direction: b } = Je(), { disabledBehavior: v, disabledKeys: g } = h, y = Mn({
    usage: "search",
    sensitivity: "base"
  }), { isVirtualized: $, layoutDelegate: _, dropTargetDelegate: Z, CollectionRoot: D } = J(ri), A = X(() => e.keyboardDelegate || new _n({
    collection: f,
    collator: y,
    ref: i,
    disabledKeys: g,
    disabledBehavior: v,
    layout: d,
    orientation: u,
    direction: b,
    layoutDelegate: _
  }), [
    f,
    y,
    i,
    v,
    g,
    u,
    b,
    e.keyboardDelegate,
    d,
    _
  ]), { listBoxProps: M } = lu({
    ...e,
    shouldSelectOnPressUp: p || e.shouldSelectOnPressUp,
    keyboardDelegate: A,
    isVirtualized: $
  }, c, i), F = N(p), K = N(m);
  le(() => {
    process.env.NODE_ENV !== "production" && (F.current !== p && console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."), K.current !== m && console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."));
  }, [
    p,
    m
  ]);
  let C, P, T, E = !1, R = null, V = N(null);
  if (p && s) {
    C = s.useDraggableCollectionState({
      collection: f,
      selectionManager: h,
      preview: s.renderDragPreview ? V : void 0
    }), s.useDraggableCollection({}, C, i);
    let te = s.DragPreview;
    R = s.renderDragPreview ? /* @__PURE__ */ w.createElement(te, {
      ref: V
    }, s.renderDragPreview) : null;
  }
  if (m && s) {
    P = s.useDroppableCollectionState({
      collection: f,
      selectionManager: h
    });
    let te = s.dropTargetDelegate || Z || new s.ListDropTargetDelegate(f, i, {
      orientation: u,
      layout: d,
      direction: b
    });
    T = s.useDroppableCollection({
      keyboardDelegate: A,
      dropTargetDelegate: te
    }, P, i), E = P.isDropTarget({
      type: "root"
    });
  }
  let { focusProps: x, isFocused: H, isFocusVisible: I } = ot(), ie = c.collection.size === 0 || c.collection.size === 1 && ((l = c.collection.getItem(c.collection.getFirstKey())) === null || l === void 0 ? void 0 : l.type) === "loader", S = {
    isDropTarget: E,
    isEmpty: ie,
    isFocused: H,
    isFocusVisible: I,
    layout: e.layout || "stack",
    state: c
  }, G = Ce({
    className: e.className,
    style: e.style,
    defaultClassName: "react-aria-ListBox",
    values: S
  }), O = null;
  return ie && e.renderEmptyState && (O = /* @__PURE__ */ w.createElement("div", {
    // eslint-disable-next-line
    role: "option",
    style: {
      display: "contents"
    }
  }, e.renderEmptyState(S))), /* @__PURE__ */ w.createElement(xn, null, /* @__PURE__ */ w.createElement("div", {
    ...me(e),
    ...Q(M, x, T?.collectionProps),
    ...G,
    ref: i,
    slot: e.slot || void 0,
    onScroll: e.onScroll,
    "data-drop-target": E || void 0,
    "data-empty": ie || void 0,
    "data-focused": H || void 0,
    "data-focus-visible": I || void 0,
    "data-layout": e.layout || "stack",
    "data-orientation": e.orientation || "vertical"
  }, /* @__PURE__ */ w.createElement(Ue, {
    values: [
      [
        Ti,
        e
      ],
      [
        At,
        c
      ],
      [
        Sn,
        {
          dragAndDropHooks: s,
          dragState: C,
          dropState: P
        }
      ],
      [
        gr,
        {
          elementType: "div"
        }
      ],
      [
        W4,
        {
          render: g6
        }
      ],
      [
        c4,
        {
          name: "ListBoxSection",
          render: h6
        }
      ]
    ]
  }, /* @__PURE__ */ w.createElement(D, {
    collection: f,
    scrollRef: i,
    persistedKeys: u6(h, s, P),
    renderDropIndicator: j4(s, P)
  })), O, R));
}
function h6(t, e, i, l = "react-aria-ListBoxSection") {
  let r = J(At), { dragAndDropHooks: o, dropState: a } = J(Sn), { CollectionBranch: s } = J(ri), [d, u] = Kt();
  var c;
  let { headingProps: f, groupProps: h } = uu({
    heading: u,
    "aria-label": (c = t["aria-label"]) !== null && c !== void 0 ? c : void 0
  }), p = Ce({
    defaultClassName: l,
    className: t.className,
    style: t.style,
    values: {}
  });
  return /* @__PURE__ */ w.createElement("section", {
    ...me(t),
    ...h,
    ...p,
    ref: e
  }, /* @__PURE__ */ w.createElement(mr.Provider, {
    value: {
      ...f,
      ref: d
    }
  }, /* @__PURE__ */ w.createElement(s, {
    collection: r.collection,
    parent: i,
    renderDropIndicator: j4(o, a)
  })));
}
const m6 = /* @__PURE__ */ Ei("item", function(e, i, l) {
  let r = Xe(i), o = J(At), { dragAndDropHooks: a, dragState: s, dropState: d } = J(Sn), { optionProps: u, labelProps: c, descriptionProps: f, ...h } = du({
    key: l.key,
    "aria-label": e?.["aria-label"]
  }, o, r), { hoverProps: p, isHovered: m } = Ke({
    isDisabled: !h.allowsSelection && !h.hasAction,
    onHoverStart: l.props.onHoverStart,
    onHoverChange: l.props.onHoverChange,
    onHoverEnd: l.props.onHoverEnd
  }), b = null;
  s && a && (b = a.useDraggableItem({
    key: l.key
  }, s));
  let v = null;
  d && a && (v = a.useDroppableItem({
    target: {
      type: "item",
      key: l.key,
      dropPosition: "on"
    }
  }, d, r));
  let g = s && s.isDragging(l.key), y = Ce({
    ...e,
    id: void 0,
    children: e.children,
    defaultClassName: "react-aria-ListBoxItem",
    values: {
      ...h,
      isHovered: m,
      selectionMode: o.selectionManager.selectionMode,
      selectionBehavior: o.selectionManager.selectionBehavior,
      allowsDragging: !!s,
      isDragging: g,
      isDropTarget: v?.isDropTarget
    }
  });
  le(() => {
    !l.textValue && process.env.NODE_ENV !== "production" && console.warn("A `textValue` prop is required for <ListBoxItem> elements with non-plain text children in order to support accessibility features such as type to select.");
  }, [
    l.textValue
  ]);
  let $ = e.href ? "a" : "div";
  return /* @__PURE__ */ w.createElement($, {
    ...Q(u, p, b?.dragProps, v?.dropProps),
    ...y,
    ref: r,
    "data-allows-dragging": !!s || void 0,
    "data-selected": h.isSelected || void 0,
    "data-disabled": h.isDisabled || void 0,
    "data-hovered": m || void 0,
    "data-focused": h.isFocused || void 0,
    "data-focus-visible": h.isFocusVisible || void 0,
    "data-pressed": h.isPressed || void 0,
    "data-dragging": g || void 0,
    "data-drop-target": v?.isDropTarget || void 0,
    "data-selection-mode": o.selectionManager.selectionMode === "none" ? void 0 : o.selectionManager.selectionMode
  }, /* @__PURE__ */ w.createElement(Ue, {
    values: [
      [
        at,
        {
          slots: {
            [or]: c,
            label: c,
            description: f
          }
        }
      ]
    ]
  }, y.children));
});
function g6(t, e) {
  e = Xe(e);
  let { dragAndDropHooks: i, dropState: l } = J(Sn), { dropIndicatorProps: r, isHidden: o, isDropTarget: a } = i.useDropIndicator(t, l, e);
  return o ? null : /* @__PURE__ */ w.createElement(v6, {
    ...t,
    dropIndicatorProps: r,
    isDropTarget: a,
    ref: e
  });
}
function b6(t, e) {
  let { dropIndicatorProps: i, isDropTarget: l, ...r } = t, o = Ce({
    ...r,
    defaultClassName: "react-aria-DropIndicator",
    values: {
      isDropTarget: l
    }
  });
  return /* @__PURE__ */ w.createElement("div", {
    ...i,
    ...o,
    // eslint-disable-next-line
    role: "option",
    ref: e,
    "data-drop-target": l || void 0
  });
}
const v6 = /* @__PURE__ */ we(b6);
Ei("loader", function(e, i, l) {
  let r = J(At), { isVirtualized: o } = J(ri), { isLoading: a, onLoadMore: s, scrollOffset: d, ...u } = e, c = N(null), f = X(() => ({
    onLoadMore: s,
    collection: r?.collection,
    sentinelRef: c,
    scrollOffset: d
  }), [
    s,
    d,
    r?.collection
  ]);
  t0(f, c);
  let h = Ce({
    ...u,
    id: void 0,
    children: l.rendered,
    defaultClassName: "react-aria-ListBoxLoadingIndicator",
    values: null
  }), p = {
    // For Android talkback
    tabIndex: -1
  };
  return o && (p["aria-posinset"] = l.index + 1, p["aria-setsize"] = r.collection.size), /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement("div", {
    style: {
      position: "relative",
      width: 0,
      height: 0
    },
    inert: i0(!0)
  }, /* @__PURE__ */ w.createElement("div", {
    "data-testid": "loadMoreSentinel",
    ref: c,
    style: {
      position: "absolute",
      height: 1,
      width: 1
    }
  })), a && h.children && /* @__PURE__ */ w.createElement("div", {
    ...Q(me(e), p),
    ...h,
    // aria-selected isn't needed here since this option is not selectable.
    // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
    role: "option",
    ref: i
  }, h.children));
});
const C6 = /* @__PURE__ */ U(null), Ln = /* @__PURE__ */ U(null), vr = /* @__PURE__ */ U(null), Y4 = /* @__PURE__ */ U(null), V6 = /* @__PURE__ */ we(function(e, i) {
  [e, i] = ve(e, i, C6);
  let l = N(null), r = q0(e.formatOptions), o = w5({
    ...e,
    numberFormatter: r
  }), [a, s] = Kt(!e["aria-label"] && !e["aria-labelledby"]), { groupProps: d, trackProps: u, labelProps: c, outputProps: f } = M5({
    ...e,
    label: s
  }, o, l), h = Ce({
    ...e,
    values: {
      orientation: o.orientation,
      isDisabled: o.isDisabled,
      state: o
    },
    defaultClassName: "react-aria-Slider"
  }), p = me(e);
  return delete p.id, /* @__PURE__ */ w.createElement(Ue, {
    values: [
      [
        Ln,
        o
      ],
      [
        vr,
        {
          ...u,
          ref: l
        }
      ],
      [
        Y4,
        f
      ],
      [
        Ct,
        {
          ...c,
          ref: a
        }
      ]
    ]
  }, /* @__PURE__ */ w.createElement("div", {
    ...p,
    ...d,
    ...h,
    ref: i,
    slot: e.slot || void 0,
    "data-orientation": o.orientation,
    "data-disabled": o.isDisabled || void 0
  }));
}), H6 = /* @__PURE__ */ we(function(e, i) {
  [e, i] = ve(e, i, Y4);
  let { children: l, style: r, className: o, ...a } = e, s = J(Ln), d = Ce({
    className: o,
    style: r,
    children: l,
    defaultChildren: s.getThumbValueLabel(0),
    defaultClassName: "react-aria-SliderOutput",
    values: {
      orientation: s.orientation,
      isDisabled: s.isDisabled,
      state: s
    }
  });
  return /* @__PURE__ */ w.createElement("output", {
    ...a,
    ...d,
    ref: i,
    "data-orientation": s.orientation || void 0,
    "data-disabled": s.isDisabled || void 0
  });
}), y6 = /* @__PURE__ */ we(function(e, i) {
  [e, i] = ve(e, i, vr);
  let l = J(Ln), { onHoverStart: r, onHoverEnd: o, onHoverChange: a, ...s } = e, { hoverProps: d, isHovered: u } = Ke({
    onHoverStart: r,
    onHoverEnd: o,
    onHoverChange: a
  }), c = Ce({
    ...e,
    defaultClassName: "react-aria-SliderTrack",
    values: {
      orientation: l.orientation,
      isDisabled: l.isDisabled,
      isHovered: u,
      state: l
    }
  });
  return /* @__PURE__ */ w.createElement("div", {
    ...Q(s, d),
    ...c,
    ref: i,
    "data-hovered": u || void 0,
    "data-orientation": l.orientation || void 0,
    "data-disabled": l.isDisabled || void 0
  });
}), w6 = /* @__PURE__ */ we(function(e, i) {
  let { inputRef: l = null } = e, r = J(Ln), { ref: o } = vt(vr), { index: a = 0 } = e, s = N(null), d = l || s, [u, c] = Kt(!e["aria-label"] && !e["aria-labelledby"]), { thumbProps: f, inputProps: h, labelProps: p, isDragging: m, isFocused: b, isDisabled: v } = x5({
    ...e,
    index: a,
    trackRef: o,
    inputRef: d,
    label: c
  }, r), { focusProps: g, isFocusVisible: y } = ot(), { hoverProps: $, isHovered: _ } = Ke(e), Z = Ce({
    ...e,
    defaultClassName: "react-aria-SliderThumb",
    values: {
      state: r,
      isHovered: _,
      isDragging: m,
      isFocused: b,
      isFocusVisible: y,
      isDisabled: v
    }
  }), D = me(e);
  return delete D.id, /* @__PURE__ */ w.createElement("div", {
    ...Q(D, f, $),
    ...Z,
    ref: i,
    style: {
      ...f.style,
      ...Z.style
    },
    "data-hovered": _ || void 0,
    "data-dragging": m || void 0,
    "data-focused": b || void 0,
    "data-focus-visible": y || void 0,
    "data-disabled": v || void 0
  }, /* @__PURE__ */ w.createElement(Dn, null, /* @__PURE__ */ w.createElement("input", {
    ref: d,
    ...Q(h, g)
  })), /* @__PURE__ */ w.createElement(Ue, {
    values: [
      [
        Ct,
        {
          ...p,
          ref: u
        }
      ]
    ]
  }, Z.children));
}), Cr = /* @__PURE__ */ U({
  placement: "bottom"
}), M6 = /* @__PURE__ */ we(function(e, i) {
  [e, i] = ve(e, i, Cr);
  let l = e.placement, r = {
    position: "absolute",
    transform: l === "top" || l === "bottom" ? "translateX(-50%)" : "translateY(-50%)"
  };
  l != null && (r[l] = "100%");
  let o = Ce({
    ...e,
    defaultClassName: "react-aria-OverlayArrow",
    values: {
      placement: l
    }
  });
  o.style && Object.keys(o.style).forEach((s) => o.style[s] === void 0 && delete o.style[s]);
  let a = me(e);
  return /* @__PURE__ */ w.createElement("div", {
    ...a,
    ...o,
    style: {
      ...r,
      ...o.style
    },
    ref: i,
    "data-placement": l
  });
}), Tn = /* @__PURE__ */ U(null), Po = /* @__PURE__ */ U(null), X4 = /* @__PURE__ */ we(function(e, i) {
  [e, i] = ve(e, i, Tn);
  let l = J(Fn), r = Li(e), o = e.isOpen != null || e.defaultOpen != null || !l ? r : l, a = ua(i, o.isOpen) || e.isExiting || !1, s = Eu(), { direction: d } = Je();
  if (s) {
    let u = e.children;
    return typeof u == "function" && (u = u({
      trigger: e.trigger || null,
      placement: "bottom",
      isEntering: !1,
      isExiting: !1,
      defaultChildren: null
    })), /* @__PURE__ */ w.createElement(w.Fragment, null, u);
  }
  return o && !o.isOpen && !a ? null : /* @__PURE__ */ w.createElement(x6, {
    ...e,
    triggerRef: e.triggerRef,
    state: o,
    popoverRef: i,
    isExiting: a,
    dir: d
  });
});
function x6({ state: t, isExiting: e, UNSTABLE_portalContainer: i, clearContexts: l, ...r }) {
  let o = N(null), [a, s] = ne(0), d = N(null), u = J(Po), c = u && r.trigger === "SubmenuTrigger";
  ce(() => {
    o.current && t.isOpen && s(o.current.getBoundingClientRect().width);
  }, [
    t.isOpen,
    o
  ]);
  var f;
  let { popoverProps: h, underlayProps: p, arrowProps: m, placement: b } = X5({
    ...r,
    offset: (f = r.offset) !== null && f !== void 0 ? f : 8,
    arrowSize: a,
    // If this is a submenu/subdialog, use the root popover's container
    // to detect outside interaction and add aria-hidden.
    groupRef: c ? u : d
  }, t), v = r.popoverRef, g = da(v, !!b) || r.isEntering || !1, y = Ce({
    ...r,
    defaultClassName: "react-aria-Popover",
    values: {
      trigger: r.trigger || null,
      placement: b,
      isEntering: g,
      isExiting: e
    }
  }), $ = !r.isNonModal || r.trigger === "SubmenuTrigger", [_, Z] = ne(!1);
  ce(() => {
    v.current && Z($ && !v.current.querySelector("[role=dialog]"));
  }, [
    v,
    $
  ]), le(() => {
    _ && v.current && !v.current.contains(document.activeElement) && Jt(v.current);
  }, [
    _,
    v
  ]);
  let D = X(() => {
    let K = y.children;
    if (l) for (let C of l) K = /* @__PURE__ */ w.createElement(C.Provider, {
      value: null
    }, K);
    return K;
  }, [
    y.children,
    l
  ]), A = {
    ...h.style,
    ...y.style
  }, M = /* @__PURE__ */ w.createElement("div", {
    ...Q(me(r), h),
    ...y,
    role: _ ? "dialog" : void 0,
    tabIndex: _ ? -1 : void 0,
    "aria-label": r["aria-label"],
    "aria-labelledby": r["aria-labelledby"],
    ref: v,
    slot: r.slot || void 0,
    style: A,
    dir: r.dir,
    "data-trigger": r.trigger,
    "data-placement": b,
    "data-entering": g || void 0,
    "data-exiting": e || void 0
  }, !r.isNonModal && /* @__PURE__ */ w.createElement(mo, {
    onDismiss: t.close
  }), /* @__PURE__ */ w.createElement(Cr.Provider, {
    value: {
      ...m,
      placement: b,
      ref: o
    }
  }, D), /* @__PURE__ */ w.createElement(mo, {
    onDismiss: t.close
  }));
  if (!c) return /* @__PURE__ */ w.createElement(go, {
    ...r,
    shouldContainFocus: _,
    isExiting: e,
    portalContainer: i
  }, !r.isNonModal && t.isOpen && /* @__PURE__ */ w.createElement("div", {
    "data-testid": "underlay",
    ...p,
    style: {
      position: "fixed",
      inset: 0
    }
  }), /* @__PURE__ */ w.createElement("div", {
    ref: d,
    style: {
      display: "contents"
    }
  }, /* @__PURE__ */ w.createElement(Po.Provider, {
    value: d
  }, M)));
  var F;
  return /* @__PURE__ */ w.createElement(go, {
    ...r,
    shouldContainFocus: _,
    isExiting: e,
    portalContainer: (F = i ?? u?.current) !== null && F !== void 0 ? F : void 0
  }, M);
}
const $6 = /* @__PURE__ */ U({}), J4 = /* @__PURE__ */ U(null), Vr = /* @__PURE__ */ U(null), Zl = /* @__PURE__ */ U(null), fn = /* @__PURE__ */ U(null);
function D6(t) {
  let e = s4(t), i = N(null), { menuTriggerProps: l, menuProps: r } = rr({
    ...t,
    type: "menu"
  }, e, i), [o, a] = ne(null), s = oe(() => {
    i.current && a(i.current.offsetWidth + "px");
  }, [
    i
  ]);
  Vi({
    ref: i,
    onResize: s
  });
  let d = N(null);
  return /* @__PURE__ */ w.createElement(Ue, {
    values: [
      [
        J4,
        {
          ...r,
          ref: d
        }
      ],
      [
        Fn,
        e
      ],
      [
        Zl,
        e
      ],
      [
        Tn,
        {
          trigger: "MenuTrigger",
          triggerRef: i,
          scrollRef: d,
          placement: "bottom start",
          style: {
            "--trigger-width": o
          },
          "aria-labelledby": r["aria-labelledby"]
        }
      ]
    ]
  }, /* @__PURE__ */ w.createElement(D0, {
    ...l,
    ref: i,
    isPressed: e.isOpen
  }, t.children));
}
const k6 = /* @__PURE__ */ U(null), _6 = /* @__PURE__ */ we(function(e, i) {
  return [e, i] = ve(e, i, J4), /* @__PURE__ */ w.createElement(Pn, {
    content: /* @__PURE__ */ w.createElement(i4, e)
  }, (l) => /* @__PURE__ */ w.createElement(Z6, {
    props: e,
    collection: l,
    menuRef: i
  }));
});
function Z6({ props: t, collection: e, menuRef: i }) {
  let { filter: l, collectionProps: r, collectionRef: o } = J(_l) || {};
  i = Xe(X(() => _i(i, o !== void 0 ? o : null), [
    o,
    i
  ]));
  let a = X(() => l ? e.UNSTABLE_filter(l) : e, [
    e,
    l
  ]), s = Ju({
    ...t,
    collection: a,
    children: void 0
  }), d = J(Zl), { isVirtualized: u, CollectionRoot: c } = J(ri), { menuProps: f } = fu({
    ...t,
    ...r,
    isVirtualized: u,
    onClose: t.onClose || d?.close
  }, s, i), h = Ce({
    defaultClassName: "react-aria-Menu",
    className: t.className,
    style: t.style,
    values: {
      isEmpty: s.collection.size === 0
    }
  }), p = null;
  return s.collection.size === 0 && t.renderEmptyState && (p = /* @__PURE__ */ w.createElement("div", {
    role: "menuitem",
    style: {
      display: "contents"
    }
  }, t.renderEmptyState())), /* @__PURE__ */ w.createElement(xn, null, /* @__PURE__ */ w.createElement("div", {
    ...me(t),
    ...f,
    ...h,
    ref: i,
    slot: t.slot || void 0,
    "data-empty": s.collection.size === 0 || void 0,
    onScroll: t.onScroll
  }, /* @__PURE__ */ w.createElement(Ue, {
    values: [
      [
        Vr,
        s
      ],
      [
        gr,
        {
          elementType: "div"
        }
      ],
      [
        c4,
        {
          name: "MenuSection",
          render: Q4
        }
      ],
      [
        k6,
        {
          parentMenuRef: i,
          shouldUseVirtualFocus: r?.shouldUseVirtualFocus
        }
      ],
      [
        El,
        null
      ],
      [
        _l,
        null
      ],
      [
        fn,
        s.selectionManager
      ],
      /* Ensure root MenuTriggerState is defined, in case Menu is rendered outside a MenuTrigger. */
      /* We assume the context can never change between defined and undefined. */
      /* eslint-disable-next-line react-hooks/rules-of-hooks */
      [
        Zl,
        d ?? s4({})
      ]
    ]
  }, /* @__PURE__ */ w.createElement(c, {
    collection: s.collection,
    persistedKeys: r6(s.selectionManager.focusedKey),
    scrollRef: i
  })), p));
}
class E6 extends Si {
  get focusedKey() {
    return this.parent.focusedKey;
  }
  get isFocused() {
    return this.parent.isFocused;
  }
  setFocusedKey(e, i) {
    return this.parent.setFocusedKey(e, i);
  }
  setFocused(e) {
    this.parent.setFocused(e);
  }
  get childFocusStrategy() {
    return this.parent.childFocusStrategy;
  }
  constructor(e, i) {
    super(e.collection, i), this.parent = e;
  }
}
function Q4(t, e, i, l = "react-aria-MenuSection") {
  var r, o;
  let a = J(Vr), { CollectionBranch: s } = J(ri), [d, u] = Kt();
  var c;
  let { headingProps: f, groupProps: h } = hu({
    heading: u,
    "aria-label": (c = i.props["aria-label"]) !== null && c !== void 0 ? c : void 0
  }), p = Ce({
    defaultClassName: l,
    className: (r = i.props) === null || r === void 0 ? void 0 : r.className,
    style: (o = i.props) === null || o === void 0 ? void 0 : o.style,
    values: {}
  }), m = J(fn), b = cr(t), v = t.selectionMode != null ? new E6(m, b) : m;
  return /* @__PURE__ */ w.createElement("section", {
    ...me(t),
    ...h,
    ...p,
    ref: e
  }, /* @__PURE__ */ w.createElement(Ue, {
    values: [
      [
        mr,
        {
          ...f,
          ref: d
        }
      ],
      [
        fn,
        v
      ]
    ]
  }, /* @__PURE__ */ w.createElement(s, {
    collection: a.collection,
    parent: i
  })));
}
const P6 = /* @__PURE__ */ Fu("section", Q4), El = /* @__PURE__ */ U(null), So = /* @__PURE__ */ Ei("item", function(e, i, l) {
  var r;
  [e, i] = ve(e, i, El);
  let o = (r = vt(El)) === null || r === void 0 ? void 0 : r.id, a = J(Vr), s = Xe(i), d = J(fn), { menuItemProps: u, labelProps: c, descriptionProps: f, keyboardShortcutProps: h, ...p } = pu({
    ...e,
    id: o,
    key: l.key,
    selectionManager: d
  }, a, s), { hoverProps: m, isHovered: b } = Ke({
    isDisabled: p.isDisabled
  }), v = Ce({
    ...e,
    id: void 0,
    children: l.rendered,
    defaultClassName: "react-aria-MenuItem",
    values: {
      ...p,
      isHovered: b,
      isFocusVisible: p.isFocusVisible,
      selectionMode: d.selectionMode,
      selectionBehavior: d.selectionBehavior,
      hasSubmenu: !!e["aria-haspopup"],
      isOpen: e["aria-expanded"] === "true"
    }
  }), g = e.href ? "a" : "div";
  return /* @__PURE__ */ w.createElement(g, {
    ...Q(u, m),
    ...v,
    ref: s,
    "data-disabled": p.isDisabled || void 0,
    "data-hovered": b || void 0,
    "data-focused": p.isFocused || void 0,
    "data-focus-visible": p.isFocusVisible || void 0,
    "data-pressed": p.isPressed || void 0,
    "data-selected": p.isSelected || void 0,
    "data-selection-mode": d.selectionMode === "none" ? void 0 : d.selectionMode,
    "data-has-submenu": !!e["aria-haspopup"] || void 0,
    "data-open": e["aria-expanded"] === "true" || void 0
  }, /* @__PURE__ */ w.createElement(Ue, {
    values: [
      [
        at,
        {
          slots: {
            [or]: c,
            label: c,
            description: f
          }
        }
      ],
      [
        $6,
        h
      ]
    ]
  }, v.children));
}), Fn = /* @__PURE__ */ U(null), S6 = /* @__PURE__ */ U(null), e2 = /* @__PURE__ */ U(null), t2 = /* @__PURE__ */ we(function(e, i) {
  [e, i] = ve(e, i, S6);
  let { children: l, isDisabled: r = !1, isInvalid: o = !1, isRequired: a = !1 } = e, s = X(() => {
    var d;
    return /* @__PURE__ */ w.createElement(Ti.Provider, {
      value: {
        items: (d = e.items) !== null && d !== void 0 ? d : e.defaultItems
      }
    }, typeof l == "function" ? l({
      isOpen: !1,
      isDisabled: r,
      isInvalid: o,
      isRequired: a,
      defaultChildren: null
    }) : l);
  }, [
    l,
    r,
    o,
    a,
    e.items,
    e.defaultItems
  ]);
  return /* @__PURE__ */ w.createElement(Pn, {
    content: s
  }, (d) => /* @__PURE__ */ w.createElement(T6, {
    props: e,
    collection: d,
    comboBoxRef: i
  }));
}), L6 = [
  Ct,
  Pi,
  $i,
  fr,
  at
];
function T6({ props: t, collection: e, comboBoxRef: i }) {
  let { name: l, formValue: r = "key", allowsCustomValue: o } = t;
  o && (r = "text");
  let { validationBehavior: a } = vt(ei) || {};
  var s, d;
  let u = (d = (s = t.validationBehavior) !== null && s !== void 0 ? s : a) !== null && d !== void 0 ? d : "native", { contains: c } = xa({
    sensitivity: "base"
  }), f = Ou({
    defaultFilter: t.defaultFilter || c,
    ...t,
    // If props.items isn't provided, rely on collection filtering (aka listbox.items is provided or defaultItems provided to Combobox)
    items: t.items,
    children: void 0,
    collection: e,
    validationBehavior: u
  }), h = N(null), p = N(null), m = N(null), b = N(null), [v, g] = Kt(!t["aria-label"] && !t["aria-labelledby"]), { buttonProps: y, inputProps: $, listBoxProps: _, labelProps: Z, descriptionProps: D, errorMessageProps: A, ...M } = gu({
    ...Qt(t),
    label: g,
    inputRef: p,
    buttonRef: h,
    listBoxRef: m,
    popoverRef: b,
    name: r === "text" ? l : void 0,
    validationBehavior: u
  }, f), [F, K] = ne(null), C = oe(() => {
    if (p.current) {
      var V;
      let x = (V = h.current) === null || V === void 0 ? void 0 : V.getBoundingClientRect(), H = p.current.getBoundingClientRect(), I = x ? Math.min(x.left, H.left) : H.left, ie = x ? Math.max(x.right, H.right) : H.right;
      K(ie - I + "px");
    }
  }, [
    h,
    p,
    K
  ]);
  Vi({
    ref: p,
    onResize: C
  });
  let P = X(() => ({
    isOpen: f.isOpen,
    isDisabled: t.isDisabled || !1,
    isInvalid: M.isInvalid || !1,
    isRequired: t.isRequired || !1
  }), [
    f.isOpen,
    t.isDisabled,
    M.isInvalid,
    t.isRequired
  ]), T = Ce({
    ...t,
    values: P,
    defaultClassName: "react-aria-ComboBox"
  }), E = me(t);
  delete E.id;
  var R;
  return /* @__PURE__ */ w.createElement(Ue, {
    values: [
      [
        e2,
        f
      ],
      [
        Ct,
        {
          ...Z,
          ref: v
        }
      ],
      [
        Pi,
        {
          ...y,
          ref: h,
          isPressed: f.isOpen
        }
      ],
      [
        $i,
        {
          ...$,
          ref: p
        }
      ],
      [
        Fn,
        f
      ],
      [
        Tn,
        {
          ref: b,
          triggerRef: p,
          scrollRef: m,
          placement: "bottom start",
          isNonModal: !0,
          trigger: "ComboBox",
          style: {
            "--trigger-width": F
          },
          clearContexts: L6
        }
      ],
      [
        Ti,
        {
          ..._,
          ref: m
        }
      ],
      [
        At,
        f
      ],
      [
        at,
        {
          slots: {
            description: D,
            errorMessage: A
          }
        }
      ],
      [
        fr,
        {
          isInvalid: M.isInvalid,
          isDisabled: t.isDisabled || !1
        }
      ],
      [
        ur,
        M
      ]
    ]
  }, /* @__PURE__ */ w.createElement("div", {
    ...E,
    ...T,
    ref: i,
    slot: t.slot || void 0,
    "data-focused": f.isFocused || void 0,
    "data-open": f.isOpen || void 0,
    "data-disabled": t.isDisabled || void 0,
    "data-invalid": M.isInvalid || void 0,
    "data-required": t.isRequired || void 0
  }), l && r === "key" && /* @__PURE__ */ w.createElement("input", {
    type: "hidden",
    name: l,
    value: (R = f.selectedKey) !== null && R !== void 0 ? R : ""
  }));
}
function F6(t) {
  return t && t.__esModule ? t.default : t;
}
const Hr = /* @__PURE__ */ U(null), i2 = /* @__PURE__ */ U(null), N6 = /* @__PURE__ */ we(function(e, i) {
  [e, i] = ve(e, i, Hr);
  let { children: l, isDisabled: r = !1, isInvalid: o = !1, isRequired: a = !1 } = e, s = X(() => typeof l == "function" ? l({
    isOpen: !1,
    isDisabled: r,
    isInvalid: o,
    isRequired: a,
    isFocused: !1,
    isFocusVisible: !1,
    defaultChildren: null
  }) : l, [
    l,
    r,
    o,
    a
  ]);
  return /* @__PURE__ */ w.createElement(Pn, {
    content: s
  }, (d) => /* @__PURE__ */ w.createElement(A6, {
    props: e,
    collection: d,
    selectRef: i
  }));
}), K6 = [
  Ct,
  Pi,
  at
];
function A6({ props: t, selectRef: e, collection: i }) {
  let { validationBehavior: l } = vt(ei) || {};
  var r, o;
  let a = (o = (r = t.validationBehavior) !== null && r !== void 0 ? r : l) !== null && o !== void 0 ? o : "native", s = ju({
    ...t,
    collection: i,
    children: void 0,
    validationBehavior: a
  }), { isFocusVisible: d, focusProps: u } = ot({
    within: !0
  }), c = N(null), [f, h] = Kt(!t["aria-label"] && !t["aria-labelledby"]), { labelProps: p, triggerProps: m, valueProps: b, menuProps: v, descriptionProps: g, errorMessageProps: y, ...$ } = Hu({
    ...Qt(t),
    label: h,
    validationBehavior: a
  }, s, c), [_, Z] = ne(null), D = oe(() => {
    c.current && Z(c.current.offsetWidth + "px");
  }, [
    c
  ]);
  Vi({
    ref: c,
    onResize: D
  });
  let A = X(() => ({
    isOpen: s.isOpen,
    isFocused: s.isFocused,
    isFocusVisible: d,
    isDisabled: t.isDisabled || !1,
    isInvalid: $.isInvalid || !1,
    isRequired: t.isRequired || !1
  }), [
    s.isOpen,
    s.isFocused,
    d,
    t.isDisabled,
    $.isInvalid,
    t.isRequired
  ]), M = Ce({
    ...t,
    values: A,
    defaultClassName: "react-aria-Select"
  }), F = me(t);
  delete F.id;
  let K = N(null);
  return /* @__PURE__ */ w.createElement(Ue, {
    values: [
      [
        Hr,
        t
      ],
      [
        i2,
        s
      ],
      [
        n2,
        b
      ],
      [
        Ct,
        {
          ...p,
          ref: f,
          elementType: "span"
        }
      ],
      [
        Pi,
        {
          ...m,
          ref: c,
          isPressed: s.isOpen,
          autoFocus: t.autoFocus
        }
      ],
      [
        Fn,
        s
      ],
      [
        Tn,
        {
          trigger: "Select",
          triggerRef: c,
          scrollRef: K,
          placement: "bottom start",
          style: {
            "--trigger-width": _
          },
          "aria-labelledby": v["aria-labelledby"],
          clearContexts: K6
        }
      ],
      [
        Ti,
        {
          ...v,
          ref: K
        }
      ],
      [
        At,
        s
      ],
      [
        at,
        {
          slots: {
            description: g,
            errorMessage: y
          }
        }
      ],
      [
        ur,
        $
      ]
    ]
  }, /* @__PURE__ */ w.createElement("div", {
    ...F,
    ...M,
    ...u,
    ref: e,
    slot: t.slot || void 0,
    "data-focused": s.isFocused || void 0,
    "data-focus-visible": d || void 0,
    "data-open": s.isOpen || void 0,
    "data-disabled": t.isDisabled || void 0,
    "data-invalid": $.isInvalid || void 0,
    "data-required": t.isRequired || void 0
  }), /* @__PURE__ */ w.createElement(wu, {
    autoComplete: t.autoComplete,
    state: s,
    triggerRef: c,
    label: h,
    name: t.name,
    isDisabled: t.isDisabled
  }));
}
const n2 = /* @__PURE__ */ U(null), B6 = /* @__PURE__ */ we(function(e, i) {
  var l, r;
  [e, i] = ve(e, i, n2);
  let o = J(i2), { placeholder: a } = vt(Hr), s = o.selectedKey != null ? o.collection.getItem(o.selectedKey) : null, d = s?.props.children;
  typeof d == "function" && (d = d({
    isHovered: !1,
    isPressed: !1,
    isSelected: !1,
    isFocused: !1,
    isFocusVisible: !1,
    isDisabled: !1,
    selectionMode: "single",
    selectionBehavior: "toggle"
  }));
  let u = wn(F6(G4), "react-aria-components");
  var c, f, h;
  let p = Ce({
    ...e,
    defaultChildren: (c = d ?? a) !== null && c !== void 0 ? c : u.format("selectPlaceholder"),
    defaultClassName: "react-aria-SelectValue",
    values: {
      selectedItem: (f = (l = o.selectedItem) === null || l === void 0 ? void 0 : l.value) !== null && f !== void 0 ? f : null,
      selectedText: (h = (r = o.selectedItem) === null || r === void 0 ? void 0 : r.textValue) !== null && h !== void 0 ? h : null,
      isPlaceholder: !s
    }
  }), m = me(e);
  return /* @__PURE__ */ w.createElement("span", {
    ref: i,
    ...m,
    ...p,
    "data-placeholder": !s || void 0
  }, /* @__PURE__ */ w.createElement(at.Provider, {
    value: void 0
  }, p.children));
}), R6 = /* @__PURE__ */ U(null), I6 = /* @__PURE__ */ we(function(e, i) {
  let { inputRef: l = null, ...r } = e;
  [e, i] = ve(r, i, R6);
  let o = Xe(_i(l, e.inputRef !== void 0 ? e.inputRef : null)), a = ir(e), { labelProps: s, inputProps: d, isSelected: u, isDisabled: c, isReadOnly: f, isPressed: h } = xu({
    ...Qt(e),
    // ReactNode type doesn't allow function children.
    children: typeof e.children == "function" ? !0 : e.children
  }, a, o), { isFocused: p, isFocusVisible: m, focusProps: b } = ot(), v = e.isDisabled || e.isReadOnly, { hoverProps: g, isHovered: y } = Ke({
    ...e,
    isDisabled: v
  }), $ = Ce({
    ...e,
    defaultClassName: "react-aria-Switch",
    values: {
      isSelected: u,
      isPressed: h,
      isHovered: y,
      isFocused: p,
      isFocusVisible: m,
      isDisabled: c,
      isReadOnly: f,
      state: a
    }
  }), _ = me(e);
  return delete _.id, /* @__PURE__ */ w.createElement("label", {
    ...Q(_, s, g, $),
    ref: i,
    slot: e.slot || void 0,
    "data-selected": u || void 0,
    "data-pressed": h || void 0,
    "data-hovered": y || void 0,
    "data-focused": p || void 0,
    "data-focus-visible": m || void 0,
    "data-disabled": c || void 0,
    "data-readonly": f || void 0
  }, /* @__PURE__ */ w.createElement(Dn, {
    elementType: "span"
  }, /* @__PURE__ */ w.createElement("input", {
    ...Q(d, b),
    ref: o
  })), $.children);
}), z6 = /* @__PURE__ */ U({}), O6 = /* @__PURE__ */ U(null), U6 = /* @__PURE__ */ we(function(e, i) {
  [e, i] = ve(e, i, z6);
  let l = v5(e), { groupProps: r } = u5(e, l, i), o = Ce({
    ...e,
    values: {
      isDisabled: l.isDisabled,
      state: l
    },
    defaultClassName: "react-aria-ToggleButtonGroup"
  });
  return /* @__PURE__ */ w.createElement("div", {
    ...r,
    ...o,
    ref: i,
    slot: e.slot || void 0,
    "data-orientation": e.orientation || "horizontal",
    "data-disabled": e.isDisabled || void 0
  }, /* @__PURE__ */ w.createElement(O6.Provider, {
    value: l
  }, o.children));
}), yr = /* @__PURE__ */ U(null), l2 = /* @__PURE__ */ U(null);
function G6(t) {
  let e = d4(t), i = N(null), { triggerProps: l, tooltipProps: r } = Du(t, e, i);
  return /* @__PURE__ */ w.createElement(Ue, {
    values: [
      [
        yr,
        e
      ],
      [
        l2,
        {
          ...r,
          triggerRef: i
        }
      ]
    ]
  }, /* @__PURE__ */ w.createElement($0, {
    ...l,
    ref: i
  }, t.children));
}
const W6 = /* @__PURE__ */ we(function({ UNSTABLE_portalContainer: e, ...i }, l) {
  [i, l] = ve(i, l, l2);
  let r = J(yr), o = d4(i), a = i.isOpen != null || i.defaultOpen != null || !r ? o : r, s = ua(l, a.isOpen) || i.isExiting || !1;
  return !a.isOpen && !s ? null : /* @__PURE__ */ w.createElement(j5, {
    portalContainer: e
  }, /* @__PURE__ */ w.createElement(j6, {
    ...i,
    tooltipRef: l,
    isExiting: s
  }));
});
function j6(t) {
  let e = J(yr), i = N(null), [l, r] = ne(0);
  ce(() => {
    i.current && e.isOpen && r(i.current.getBoundingClientRect().width);
  }, [
    e.isOpen,
    i
  ]);
  let { overlayProps: o, arrowProps: a, placement: s } = w1({
    placement: t.placement || "top",
    targetRef: t.triggerRef,
    overlayRef: t.tooltipRef,
    offset: t.offset,
    crossOffset: t.crossOffset,
    isOpen: e.isOpen,
    arrowSize: l,
    arrowBoundaryOffset: t.arrowBoundaryOffset,
    shouldFlip: t.shouldFlip,
    onClose: () => e.close(!0)
  }), d = da(t.tooltipRef, !!s) || t.isEntering || !1, u = Ce({
    ...t,
    defaultClassName: "react-aria-Tooltip",
    values: {
      placement: s,
      isEntering: d,
      isExiting: t.isExiting,
      state: e
    }
  });
  t = Q(t, o);
  let { tooltipProps: c } = $u(t, e);
  return /* @__PURE__ */ w.createElement("div", {
    ...c,
    ref: t.tooltipRef,
    ...u,
    style: {
      ...o.style,
      ...u.style
    },
    "data-placement": s ?? void 0,
    "data-entering": d || void 0,
    "data-exiting": t.isExiting || void 0
  }, /* @__PURE__ */ w.createElement(Cr.Provider, {
    value: {
      ...a,
      placement: s,
      ref: i
    }
  }, u.children));
}
const q6 = {
  top: "origin-bottom",
  "top left": "origin-bottom-left",
  "top right": "origin-bottom-right",
  bottom: "origin-top",
  "bottom left": "origin-top-left",
  "bottom right": "origin-top-right",
  left: "origin-right",
  "left top": "origin-top-right",
  "left bottom": "origin-bottom-right",
  start: "origin-right",
  "start top": "origin-top-left",
  "start bottom": "origin-bottom-left",
  right: "origin-left",
  "right top": "origin-top-left",
  "right bottom": "origin-bottom-left",
  end: "origin-left",
  "end top": "origin-top-left",
  "end bottom": "origin-bottom-left"
}, wr = ({
  title: t,
  description: e,
  children: i,
  arrow: l = !1,
  delay: r = 300,
  closeDelay: o = 0,
  trigger: a,
  isDisabled: s,
  isOpen: d,
  defaultOpen: u,
  offset: c = 6,
  crossOffset: f,
  placement: h = "top",
  onOpenChange: p,
  ...m
}) => {
  const b = [
    "top left",
    "top end",
    "bottom left",
    "bottom end"
  ].includes(h), v = [
    "top right",
    "top start",
    "bottom right",
    "bottom start"
  ].includes(h);
  return /* @__PURE__ */ L(
    G6,
    {
      trigger: a,
      delay: r,
      closeDelay: o,
      isDisabled: s,
      isOpen: d,
      defaultOpen: u,
      onOpenChange: p,
      children: [
        i,
        /* @__PURE__ */ n(
          W6,
          {
            ...m,
            offset: c,
            placement: h,
            crossOffset: f ?? (b ? -12 : v ? 12 : 0),
            className: ({ isEntering: y, isExiting: $ }) => k(
              y && "ease-out animate-in",
              $ && "ease-in animate-out"
            ),
            children: ({ isEntering: y, isExiting: $ }) => /* @__PURE__ */ L(
              "div",
              {
                className: k(
                  "z-50 flex max-w-xs flex-col items-start gap-1 rounded-lg bg-primary-solid px-3 shadow-lg will-change-transform",
                  e ? "py-3" : "py-2",
                  // Map placements to transform-origin
                  q6[h],
                  y && "ease-out animate-in fade-in zoom-in-95 in-placement-left:slide-in-from-right-0.5 in-placement-right:slide-in-from-left-0.5 in-placement-top:slide-in-from-bottom-0.5 in-placement-bottom:slide-in-from-top-0.5",
                  $ && "ease-in animate-out fade-out zoom-out-95 in-placement-left:slide-out-to-right-0.5 in-placement-right:slide-out-to-left-0.5 in-placement-top:slide-out-to-bottom-0.5 in-placement-bottom:slide-out-to-top-0.5"
                ),
                children: [
                  /* @__PURE__ */ n("span", { className: "text-xs font-semibold text-white", children: t }),
                  e && /* @__PURE__ */ n("span", { className: "text-xs font-medium text-tooltip-supporting-text", children: e }),
                  l && /* @__PURE__ */ n(M6, { children: /* @__PURE__ */ n(
                    "svg",
                    {
                      viewBox: "0 0 100 100",
                      className: "size-2.5 fill-bg-primary-solid in-placement-left:-rotate-90 in-placement-right:rotate-90 in-placement-top:rotate-0 in-placement-bottom:rotate-180",
                      children: /* @__PURE__ */ n("path", { d: "M0,0 L35.858,35.858 Q50,50 64.142,35.858 L100,0 Z" })
                    }
                  ) })
                ]
              }
            )
          }
        )
      ]
    }
  );
}, r2 = (t) => {
  if (t.asChild) {
    const r = N(null), { focusableProps: o } = Nt(
      {
        isDisabled: t.isDisabled
      },
      r
    );
    return Pl(
      t.children,
      Q(o, t.children.props, { ref: r })
    );
  }
  const { asChild: e, className: i, ...l } = t;
  return /* @__PURE__ */ n(
    Vt,
    {
      ...l,
      className: (r) => k(
        "h-max w-max outline-hidden",
        typeof i == "function" ? i(r) : i
      ),
      children: t.children
    }
  );
}, Y6 = {
  xs: "size-1.5",
  sm: "size-2",
  md: "size-2.5",
  lg: "size-3",
  xl: "size-3.5",
  "2xl": "size-4",
  "3xl": "size-4.5",
  "4xl": "size-5"
}, o2 = ({
  size: t,
  status: e,
  className: i
}) => /* @__PURE__ */ n(
  "span",
  {
    className: k(
      "absolute right-0 bottom-0 rounded-full ring-[1.5px] ring-bg-primary",
      e === "online" ? "bg-fg-success-secondary" : "bg-fg-disabled_subtle",
      Y6[t],
      i
    )
  }
), X6 = {
  xs: { root: "size-2.5", tick: "size-[4.38px" },
  sm: { root: "size-3", tick: "size-[5.25px]" },
  md: { root: "size-3.5", tick: "size-[6.13px]" },
  lg: { root: "size-4", tick: "size-[7px]" },
  xl: { root: "size-4.5", tick: "size-[7.88px]" },
  "2xl": { root: "size-5", tick: "size-[8.75px]" },
  "3xl": { root: "size-6", tick: "size-[10.5px]" },
  "4xl": { root: "size-8", tick: "size-[14px]" }
}, a2 = ({ size: t, className: e }) => /* @__PURE__ */ L(
  "svg",
  {
    "data-verified": !0,
    className: k("z-10 text-utility-blue-500", X6[t].root, e),
    viewBox: "0 0 10 10",
    fill: "none",
    children: [
      /* @__PURE__ */ n(
        "path",
        {
          d: "M7.72237 1.77098C7.81734 2.00068 7.99965 2.18326 8.2292 2.27858L9.03413 2.61199C9.26384 2.70714 9.44635 2.88965 9.5415 3.11936C9.63665 3.34908 9.63665 3.60718 9.5415 3.83689L9.20833 4.64125C9.11313 4.87106 9.113 5.12943 9.20863 5.35913L9.54122 6.16325C9.58839 6.27702 9.61268 6.39897 9.6127 6.52214C9.61272 6.6453 9.58847 6.76726 9.54134 6.88105C9.4942 6.99484 9.42511 7.09823 9.33801 7.18531C9.2509 7.27238 9.14749 7.34144 9.03369 7.38854L8.22934 7.72171C7.99964 7.81669 7.81706 7.99899 7.72174 8.22855L7.38833 9.03348C7.29318 9.26319 7.11067 9.4457 6.88096 9.54085C6.65124 9.636 6.39314 9.636 6.16343 9.54085L5.35907 9.20767C5.12935 9.11276 4.87134 9.11295 4.64177 9.20821L3.83684 9.54115C3.60725 9.63608 3.34937 9.636 3.11984 9.54092C2.89032 9.44585 2.70791 9.26356 2.6127 9.03409L2.27918 8.22892C2.18421 7.99923 2.0019 7.81665 1.77235 7.72133L0.967421 7.38792C0.737807 7.29281 0.555355 7.11041 0.460169 6.88083C0.364983 6.65125 0.364854 6.39327 0.45981 6.16359L0.792984 5.35924C0.8879 5.12952 0.887707 4.87151 0.792445 4.64193L0.459749 3.83642C0.41258 3.72265 0.388291 3.60069 0.388272 3.47753C0.388252 3.35436 0.412501 3.2324 0.459634 3.11861C0.506767 3.00482 0.57586 2.90144 0.662965 2.81436C0.75007 2.72728 0.853479 2.65822 0.967283 2.61113L1.77164 2.27795C2.00113 2.18306 2.1836 2.00099 2.27899 1.7717L2.6124 0.966768C2.70755 0.737054 2.89006 0.554547 3.11978 0.459397C3.34949 0.364246 3.60759 0.364246 3.83731 0.459397L4.64166 0.792571C4.87138 0.887487 5.12939 0.887293 5.35897 0.792031L6.16424 0.459913C6.39392 0.364816 6.65197 0.364836 6.88164 0.459968C7.11131 0.555099 7.29379 0.737554 7.38895 0.967208L7.72247 1.77238L7.72237 1.77098Z",
          className: "fill-current"
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M6.95829 3.68932C7.02509 3.58439 7.04747 3.45723 7.02051 3.3358C6.99356 3.21437 6.91946 3.10862 6.81454 3.04182C6.70961 2.97502 6.58245 2.95264 6.46102 2.97959C6.33959 3.00655 6.23384 3.08064 6.16704 3.18557L4.33141 6.06995L3.49141 5.01995C3.41375 4.92281 3.30069 4.8605 3.17709 4.84673C3.05349 4.83296 2.92949 4.86885 2.83235 4.94651C2.73522 5.02417 2.67291 5.13723 2.65914 5.26083C2.64536 5.38443 2.68125 5.50843 2.75891 5.60557L4.00891 7.16807C4.0555 7.22638 4.11533 7.27271 4.18344 7.30323C4.25154 7.33375 4.32595 7.34757 4.40047 7.34353C4.47499 7.3395 4.54747 7.31773 4.61188 7.28004C4.67629 7.24234 4.73077 7.18981 4.77079 7.12682L6.95829 3.68932Z",
          fill: "white"
        }
      )
    ]
  }
), Yi = {
  xxs: {
    root: "size-4 outline-[0.5px] -outline-offset-[0.5px]",
    initials: "text-xs font-semibold",
    icon: "size-3"
  },
  xs: {
    root: "size-6 outline-[0.5px] -outline-offset-[0.5px]",
    initials: "text-xs font-semibold",
    icon: "size-4"
  },
  sm: {
    root: "size-8 outline-[0.75px] -outline-offset-[0.75px]",
    initials: "text-sm font-semibold",
    icon: "size-5"
  },
  md: {
    root: "size-10 outline-1 -outline-offset-1",
    initials: "text-md font-semibold",
    icon: "size-6"
  },
  lg: {
    root: "size-12 outline-1 -outline-offset-1",
    initials: "text-lg font-semibold",
    icon: "size-7"
  },
  xl: {
    root: "size-14 outline-1 -outline-offset-1",
    initials: "text-xl font-semibold",
    icon: "size-8"
  },
  "2xl": {
    root: "size-16 outline-1 -outline-offset-1",
    initials: "text-display-xs font-semibold",
    icon: "size-8"
  }
}, Nn = ({
  contrastBorder: t = !0,
  size: e = "md",
  src: i,
  alt: l,
  initials: r,
  placeholder: o,
  placeholderIcon: a,
  badge: s,
  status: d,
  verified: u,
  focusable: c = !1,
  className: f
}) => {
  const [h, p] = ne(!1), m = () => i && !h ? /* @__PURE__ */ n(
    "img",
    {
      "data-avatar-img": !0,
      className: "size-full rounded-full object-cover",
      src: i,
      alt: l,
      onError: () => p(!0)
    }
  ) : r ? /* @__PURE__ */ n("span", { className: k("text-quaternary", Yi[e].initials), children: r }) : a ? /* @__PURE__ */ n(
    a,
    {
      className: k("text-fg-quaternary", Yi[e].icon)
    }
  ) : o || /* @__PURE__ */ n(Al, { className: k("text-fg-quaternary", Yi[e].icon) }), b = () => d ? /* @__PURE__ */ n(
    o2,
    {
      status: d,
      size: e === "xxs" ? "xs" : e
    }
  ) : u ? /* @__PURE__ */ n(
    a2,
    {
      size: e === "xxs" ? "xs" : e,
      className: k(
        "absolute right-0 bottom-0",
        (e === "xxs" || e === "xs") && "-right-px -bottom-px"
      )
    }
  ) : s;
  return /* @__PURE__ */ L(
    "div",
    {
      "data-avatar": !0,
      className: k(
        "relative inline-flex shrink-0 items-center justify-center rounded-full bg-avatar-bg outline-transparent",
        // Focus styles
        c && "group-outline-focus-ring group-focus-visible:outline-2 group-focus-visible:outline-offset-2",
        t && "outline outline-avatar-contrast-border",
        Yi[e].root,
        f
      ),
      children: [
        m(),
        b()
      ]
    }
  );
}, nl = {
  sm: { root: "gap-2", title: "text-sm font-semibold", subtitle: "text-xs" },
  md: { root: "gap-2", title: "text-sm font-semibold", subtitle: "text-sm" },
  lg: { root: "gap-3", title: "text-md font-semibold", subtitle: "text-md" },
  xl: { root: "gap-4", title: "text-lg font-semibold", subtitle: "text-md" }
}, $8 = ({
  title: t,
  subtitle: e,
  className: i,
  ...l
}) => /* @__PURE__ */ L(
  "div",
  {
    className: k(
      "group flex min-w-0 flex-1 items-center",
      nl[l.size].root,
      i
    ),
    children: [
      /* @__PURE__ */ n(Nn, { ...l }),
      /* @__PURE__ */ L("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ n("p", { className: k("text-primary", nl[l.size].title), children: t }),
        /* @__PURE__ */ n(
          "p",
          {
            className: k("truncate text-tertiary", nl[l.size].subtitle),
            children: e
          }
        )
      ] })
    ]
  }
), Ge = {
  sm: {
    root: "size-18 p-0.75",
    rootWithPlaceholder: "p-1",
    content: "",
    icon: "size-9",
    initials: "text-display-sm font-semibold",
    badge: "bottom-0.5 right-0.5"
  },
  md: {
    root: "size-24 p-1",
    rootWithPlaceholder: "p-1.25",
    content: "shadow-xl",
    icon: "size-12",
    initials: "text-display-md font-semibold",
    badge: "bottom-1 right-1"
  },
  lg: {
    root: "size-40 p-1.5",
    rootWithPlaceholder: "p-1.75",
    content: "shadow-2xl",
    icon: "size-20",
    initials: "text-display-xl font-semibold",
    badge: "bottom-2 right-2"
  }
}, Lo = {
  sm: "2xl",
  md: "3xl",
  lg: "4xl"
}, D8 = ({
  contrastBorder: t = !0,
  size: e = "md",
  src: i,
  alt: l,
  initials: r,
  placeholder: o,
  placeholderIcon: a,
  verified: s,
  badge: d,
  status: u,
  className: c
}) => {
  const [f, h] = ne(!1), p = () => i && !f ? /* @__PURE__ */ n(
    "img",
    {
      src: i,
      alt: l,
      onError: () => h(!0),
      className: k(
        "size-full rounded-full object-cover",
        t && "outline-1 -outline-offset-1 outline-avatar-contrast-border",
        Ge[e].content
      )
    }
  ) : r ? /* @__PURE__ */ n(
    "div",
    {
      className: k(
        "flex size-full items-center justify-center rounded-full bg-tertiary ring-1 ring-secondary_alt",
        Ge[e].content
      ),
      children: /* @__PURE__ */ n("span", { className: k("text-quaternary", Ge[e].initials), children: r })
    }
  ) : a ? /* @__PURE__ */ n(
    "div",
    {
      className: k(
        "flex size-full items-center justify-center rounded-full bg-tertiary ring-1 ring-secondary_alt",
        Ge[e].content
      ),
      children: /* @__PURE__ */ n(
        a,
        {
          className: k("text-fg-quaternary", Ge[e].icon)
        }
      )
    }
  ) : /* @__PURE__ */ n(
    "div",
    {
      className: k(
        "flex size-full items-center justify-center rounded-full bg-tertiary ring-1 ring-secondary_alt",
        Ge[e].content
      ),
      children: o || /* @__PURE__ */ n(Al, { className: k("text-fg-quaternary", Ge[e].icon) })
    }
  ), m = () => u ? /* @__PURE__ */ n(
    o2,
    {
      status: u,
      size: Lo[e],
      className: Ge[e].badge
    }
  ) : s ? /* @__PURE__ */ n(
    a2,
    {
      size: Lo[e],
      className: k("absolute", Ge[e].badge)
    }
  ) : d;
  return /* @__PURE__ */ L(
    "div",
    {
      className: k(
        "relative flex shrink-0 items-center justify-center rounded-full bg-primary ring-1 ring-secondary_alt",
        Ge[e].root,
        (!i || f) && Ge[e].rootWithPlaceholder,
        c
      ),
      children: [
        p(),
        m()
      ]
    }
  );
}, kt = {
  sm: {
    wh: 8,
    c: 4,
    r: 2.5
  },
  md: {
    wh: 10,
    c: 5,
    r: 4
  }
}, J6 = ({
  size: t = "md",
  ...e
}) => /* @__PURE__ */ n(
  "svg",
  {
    width: kt[t].wh,
    height: kt[t].wh,
    viewBox: `0 0 ${kt[t].wh} ${kt[t].wh}`,
    fill: "none",
    ...e,
    children: /* @__PURE__ */ n(
      "circle",
      {
        cx: kt[t].c,
        cy: kt[t].c,
        r: kt[t].r,
        fill: "currentColor",
        stroke: "currentColor"
      }
    )
  }
), Di = {
  gray: {
    root: "bg-utility-gray-100 text-utility-gray-700 ring-utility-gray-200",
    addon: "text-utility-gray-500",
    addonButton: "hover:bg-utility-gray-100 text-utility-gray-400 hover:text-utility-gray-500"
  },
  brand: {
    root: "bg-utility-brand-50 text-utility-brand-700 ring-utility-brand-200",
    addon: "text-utility-brand-500",
    addonButton: "hover:bg-utility-brand-100 text-utility-brand-400 hover:text-utility-brand-500"
  },
  error: {
    root: "bg-utility-error-50 text-utility-error-700 ring-utility-error-200",
    addon: "text-utility-error-500",
    addonButton: "hover:bg-utility-error-100 text-utility-error-400 hover:text-utility-error-500"
  },
  warning: {
    root: "bg-utility-warning-50 text-utility-warning-700 ring-utility-warning-200",
    addon: "text-utility-warning-500",
    addonButton: "hover:bg-utility-warning-100 text-utility-warning-400 hover:text-utility-warning-500"
  },
  success: {
    root: "bg-utility-success-50 text-utility-success-700 ring-utility-success-200",
    addon: "text-utility-success-500",
    addonButton: "hover:bg-utility-success-100 text-utility-success-400 hover:text-utility-success-500"
  },
  blue: {
    root: "bg-utility-blue-50 text-utility-blue-700 ring-utility-blue-200",
    addon: "text-utility-blue-500",
    addonButton: "hover:bg-utility-blue-100 text-utility-blue-400 hover:text-utility-blue-500"
  },
  indigo: {
    root: "bg-utility-indigo-50 text-utility-indigo-700 ring-utility-indigo-200",
    addon: "text-utility-indigo-500",
    addonButton: "hover:bg-utility-indigo-100 text-utility-indigo-400 hover:text-utility-indigo-500"
  },
  purple: {
    root: "bg-utility-purple-50 text-utility-purple-700 ring-utility-purple-200",
    addon: "text-utility-purple-500",
    addonButton: "hover:bg-utility-purple-100 text-utility-purple-400 hover:text-utility-purple-500"
  },
  pink: {
    root: "bg-utility-pink-50 text-utility-pink-700 ring-utility-pink-200",
    addon: "text-utility-pink-500",
    addonButton: "hover:bg-utility-pink-100 text-utility-pink-400 hover:text-utility-pink-500"
  },
  orange: {
    root: "bg-utility-orange-50 text-utility-orange-700 ring-utility-orange-200",
    addon: "text-utility-orange-500",
    addonButton: "hover:bg-utility-orange-100 text-utility-orange-400 hover:text-utility-orange-500"
  }
};
Object.fromEntries(
  Object.entries(Di).map(([t, e]) => [
    t,
    { root: "", addon: e.addon }
  ])
);
const bt = {
  "pill-color": {
    common: "size-max flex items-center whitespace-nowrap rounded-full ring-1 ring-inset",
    styles: Di
  },
  "badge-color": {
    common: "size-max flex items-center whitespace-nowrap rounded-md ring-1 ring-inset",
    styles: Di
  }
}, pn = {
  "pill-color": {
    common: "size-max flex items-center whitespace-nowrap rounded-full ring-1 ring-inset",
    styles: Di
  },
  "badge-color": {
    common: "size-max flex items-center whitespace-nowrap rounded-md ring-1 ring-inset",
    styles: Di
  }
}, k8 = (t) => {
  const { type: e = "pill-color", size: i = "md", color: l = "gray", children: r } = t, o = bt[e] || bt["pill-color"], d = {
    "pill-color": {
      sm: "py-0.5 px-2 text-xs font-medium",
      md: "py-0.5 px-2.5 text-sm font-medium",
      lg: "py-1 px-3 text-sm font-medium"
    },
    "badge-color": {
      sm: "py-0.5 px-1.5 text-xs font-medium",
      md: "py-0.5 px-2 text-sm font-medium",
      lg: "py-1 px-2.5 text-sm font-medium rounded-lg"
    }
  };
  return /* @__PURE__ */ n(
    "span",
    {
      className: k(
        o.common,
        d[e]?.[i] || d["pill-color"][i],
        o.styles[l].root,
        t.className
      ),
      children: r
    }
  );
}, _8 = (t) => {
  const {
    size: e = "md",
    color: i = "gray",
    type: l = "pill-color",
    className: r,
    children: o
  } = t, a = pn[l] || pn["pill-color"], u = {
    "pill-color": {
      sm: "gap-1 py-0.5 pl-1.5 pr-2 text-xs font-medium",
      md: "gap-1.5 py-0.5 pl-2 pr-2.5 text-sm font-medium",
      lg: "gap-1.5 py-1 pl-2.5 pr-3 text-sm font-medium"
    },
    "badge-color": {
      sm: "gap-1 py-0.5 px-1.5 text-xs font-medium",
      md: "gap-1.5 py-0.5 px-2 text-sm font-medium",
      lg: "gap-1.5 py-1 px-2.5 text-sm font-medium rounded-lg"
    }
  };
  return /* @__PURE__ */ L(
    "span",
    {
      className: k(
        a.common,
        u[l]?.[e] || u["pill-color"][e],
        a.styles[i].root,
        r
      ),
      children: [
        /* @__PURE__ */ n(J6, { className: a.styles[i].addon, size: "sm" }),
        o
      ]
    }
  );
}, Z8 = (t) => {
  const {
    size: e = "md",
    color: i = "gray",
    type: l = "pill-color",
    iconLeading: r,
    iconTrailing: o,
    children: a,
    className: s
  } = t, d = pn[l] || pn["pill-color"], u = r ? "leading" : "trailing", h = {
    "pill-color": {
      sm: {
        trailing: "gap-0.5 py-0.5 pl-2 pr-1.5 text-xs font-medium",
        leading: "gap-0.5 py-0.5 pr-2 pl-1.5 text-xs font-medium"
      },
      md: {
        trailing: "gap-1 py-0.5 pl-2.5 pr-2 text-sm font-medium",
        leading: "gap-1 py-0.5 pr-2.5 pl-2 text-sm font-medium"
      },
      lg: {
        trailing: "gap-1 py-1 pl-3 pr-2.5 text-sm font-medium",
        leading: "gap-1 py-1 pr-3 pl-2.5 text-sm font-medium"
      }
    },
    "badge-color": {
      sm: {
        trailing: "gap-0.5 py-0.5 pl-2 pr-1.5 text-xs font-medium",
        leading: "gap-0.5 py-0.5 pr-2 pl-1.5 text-xs font-medium"
      },
      md: {
        trailing: "gap-1 py-0.5 pl-2 pr-1.5 text-sm font-medium",
        leading: "gap-1 py-0.5 pr-2 pl-1.5 text-sm font-medium"
      },
      lg: {
        trailing: "gap-1 py-1 pl-2.5 pr-2 text-sm font-medium rounded-lg",
        leading: "gap-1 py-1 pr-2.5 pl-2 text-sm font-medium rounded-lg"
      }
    }
  };
  return /* @__PURE__ */ L(
    "span",
    {
      className: k(
        d.common,
        h[l]?.[e]?.[u] || h["pill-color"][e][u],
        d.styles[i].root,
        s
      ),
      children: [
        r && /* @__PURE__ */ n(
          r,
          {
            className: k(d.styles[i].addon, "size-3 stroke-3")
          }
        ),
        a,
        o && /* @__PURE__ */ n(
          o,
          {
            className: k(d.styles[i].addon, "size-3 stroke-3")
          }
        )
      ]
    }
  );
}, E8 = (t) => {
  const {
    size: e = "md",
    color: i = "gray",
    type: l = "pill-color",
    imgSrc: r,
    children: o
  } = t, a = bt[l] || bt["pill-color"], u = {
    "pill-color": {
      sm: "gap-1 py-0.5 pl-[3px] pr-2 text-xs font-medium",
      md: "gap-1.5 py-0.5 pl-1 pr-2.5 text-sm font-medium",
      lg: "gap-1.5 py-1 pl-1.5 pr-3 text-sm font-medium"
    },
    "badge-color": {
      sm: "gap-1 py-0.5 pl-1 pr-1.5 text-xs font-medium",
      md: "gap-1.5 py-0.5 pl-1.5 pr-2 text-sm font-medium",
      lg: "gap-1.5 py-1 pl-2 pr-2.5 text-sm font-medium rounded-lg"
    }
  };
  return /* @__PURE__ */ L(
    "span",
    {
      className: k(
        a.common,
        u[l]?.[e] || u["pill-color"][e],
        a.styles[i].root
      ),
      children: [
        /* @__PURE__ */ n(
          "img",
          {
            src: r,
            className: "size-4 max-w-none rounded-full",
            alt: "Badge image"
          }
        ),
        o
      ]
    }
  );
}, P8 = (t) => {
  const {
    size: e = "md",
    color: i = "gray",
    type: l = "pill-color",
    icon: r = Bl,
    buttonLabel: o,
    children: a
  } = t, s = bt[l] || bt["pill-color"], c = {
    "pill-color": {
      sm: "gap-0.5 py-0.5 pl-2 pr-[3px] text-xs font-medium",
      md: "gap-0.5 py-0.5 pl-2.5 pr-1 text-sm font-medium",
      lg: "gap-0.5 py-1 pl-3 pr-1.5 text-sm font-medium"
    },
    "badge-color": {
      sm: "gap-0.5 py-0.5 pl-1.5 pr-[3px] text-xs font-medium",
      md: "gap-0.5 py-0.5 pl-2 pr-1 text-sm font-medium",
      lg: "gap-0.5 py-1 pl-2.5 pr-1.5 text-sm font-medium rounded-lg"
    }
  };
  return /* @__PURE__ */ L(
    "span",
    {
      className: k(
        s.common,
        c[l]?.[e] || c["pill-color"][e],
        s.styles[i].root
      ),
      children: [
        a,
        /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            "aria-label": o,
            onClick: t.onButtonClick,
            className: k(
              "flex cursor-pointer items-center justify-center p-0.5 outline-focus-ring transition duration-100 ease-linear focus-visible:outline-2",
              s.styles[i].addonButton,
              l === "pill-color" ? "rounded-full" : "rounded-[3px]"
            ),
            children: /* @__PURE__ */ n(r, { className: "size-3 stroke-[3px] transition-inherit-all" })
          }
        )
      ]
    }
  );
}, S8 = (t) => {
  const {
    size: e = "md",
    color: i = "gray",
    type: l = "pill-color",
    icon: r
  } = t, o = bt[l] || bt["pill-color"], d = {
    "pill-color": {
      sm: "p-[5px]",
      md: "p-1.5",
      lg: "p-2"
    },
    "badge-color": {
      sm: "p-[5px]",
      md: "p-1.5",
      lg: "p-2 rounded-lg"
    }
  };
  return /* @__PURE__ */ n(
    "span",
    {
      className: k(
        o.common,
        d[l]?.[e] || d["pill-color"][e],
        o.styles[i].root
      ),
      children: /* @__PURE__ */ n(r, { className: k("size-3 stroke-[3px]", o.styles[i].addon) })
    }
  );
}, Q6 = (t) => typeof t == "function", e3 = (t) => typeof t == "function" && t.prototype && (!!t.prototype.isReactComponent || !!t.prototype.render), t3 = (t) => typeof t == "object" && t !== null && t.$$typeof.toString() === "Symbol(react.forward_ref)", ki = (t) => Q6(t) || t3(t) || e3(t), it = {
  common: {
    root: [
      "group relative inline-flex h-max cursor-pointer items-center justify-center whitespace-nowrap transition duration-100 ease-linear before:absolute focus-visible:outline-2 focus-visible:outline-offset-2",
      // When button is used within `InputGroup`
      "in-data-input-wrapper:focus:!z-50 in-data-input-wrapper:in-data-leading:-mr-px in-data-input-wrapper:in-data-leading:rounded-r-none in-data-input-wrapper:in-data-leading:before:rounded-r-none in-data-input-wrapper:in-data-trailing:-ml-px in-data-input-wrapper:in-data-trailing:rounded-l-none in-data-input-wrapper:in-data-trailing:before:rounded-l-none",
      // Disabled styles
      "disabled:cursor-not-allowed disabled:text-fg-disabled disabled:fill-fg-disabled",
      // Icon styles
      "disabled:*:data-icon:text-fg-disabled_subtle",
      // Same as `icon` but for SSR icons that cannot be passed to the client as functions.
      "*:data-icon:pointer-events-none *:data-icon:size-5 *:data-icon:shrink-0 *:data-icon:transition-inherit-all"
    ].join(" "),
    icon: "pointer-events-none size-5 shrink-0 transition-inherit-all"
  },
  sizes: {
    sm: {
      root: [
        "h-8 gap-1 rounded-lg px-3 py-2 text-sm font-medium data-icon-only:aspect-square data-icon-only:w-8 *:data-icon:size-4.5",
        "in-data-input-wrapper:px-3.5 in-data-input-wrapper:py-2.5 in-data-input-wrapper:data-icon-only:p-2.5"
      ].join(" "),
      linkRoot: "gap-1"
    },
    md: {
      root: [
        "h-10 gap-1 rounded-lg px-3.5 py-2.5 text-sm font-medium data-icon-only:aspect-square data-icon-only:w-10",
        "in-data-input-wrapper:gap-1.5 in-data-input-wrapper:px-4 in-data-input-wrapper:text-md in-data-input-wrapper:data-icon-only:p-3"
      ].join(" "),
      linkRoot: "gap-1"
    },
    lg: {
      root: "h-12 gap-1.5 rounded-lg px-4 py-2.5 text-md font-medium data-icon-only:aspect-square data-icon-only:w-12",
      linkRoot: "gap-1.5"
    }
  },
  colors: {
    primary: {
      root: [
        "bg-brand-solid text-white fill-white hover:bg-brand-solid_hover data-loading:bg-brand-solid_hover",
        // Disabled styles
        "disabled:bg-disabled disabled:ring-disabled_subtle",
        // Icon styles
        "*:data-icon:text-button-primary hover:*:data-icon:text-button-primary-icon_hover"
      ].join(" ")
    },
    secondary: {
      root: [
        "bg-primary text-secondary fill-secondary ring-1 ring-primary ring-inset hover:bg-primary_hover hover:text-secondary_hover data-loading:bg-primary_hover",
        // Disabled styles
        "disabled:ring-disabled_subtle",
        // Icon styles
        "*:data-icon:text-fg-secondary hover:*:data-icon:text-fg-secondary_hover"
      ].join(" ")
    },
    tertiary: {
      root: [
        "text-tertiary fill-tertiary hover:bg-primary_hover hover:text-tertiary_hover data-loading:bg-primary_hover",
        // Icon styles
        "*:data-icon:text-fg-tertiary hover:*:data-icon:text-fg-tertiary_hover"
      ].join(" ")
    },
    "link-color": {
      root: [
        "justify-normal rounded-xs p-0! text-brand-primary hover:text-brand-primary_hover",
        // Inner text underline
        "*:data-text:underline *:data-text:decoration-transparent *:data-text:underline-offset-2 hover:*:data-text:decoration-current",
        // Icon styles
        "*:data-icon:text-fg-brand-primary_alt hover:*:data-icon:text-brand-primary_hover"
      ].join(" ")
    },
    "primary-destructive": {
      root: [
        "bg-error-solid text-white fill-white ring-1 ring-transparent outline-error ring-inset hover:bg-error-solid_hover",
        // Disabled styles
        "disabled:bg-disabled disabled:ring-disabled_subtle",
        // Icon styles
        "*:data-icon:text-white hover:*:data-icon:text-white"
      ].join(" ")
    },
    "secondary-destructive": {
      root: [
        "bg-primary text-error-primary fill-red-600 ring-1 ring-error_subtle outline-error ring-inset hover:bg-error-primary hover:text-error-primary_hover data-loading:bg-error-primary",
        // Disabled styles
        "disabled:bg-primary disabled:ring-disabled_subtle",
        // Icon styles
        "*:data-icon:text-fg-error-secondary hover:*:data-icon:text-fg-error-primary"
      ].join(" ")
    },
    "tertiary-destructive": {
      root: [
        "text-error-primary fill-red-600 outline-error hover:bg-error-primary hover:text-error-primary_hover data-loading:bg-error-primary",
        // Icon styles
        "*:data-icon:text-fg-error-secondary hover:*:data-icon:text-fg-error-primary"
      ].join(" ")
    },
    "link-destructive": {
      root: [
        "justify-normal rounded-xs p-0! text-error-primary fill-error-primary outline-error hover:text-error-primary_hover",
        // Inner text underline
        "*:data-text:underline *:data-text:decoration-transparent *:data-text:underline-offset-2 hover:*:data-text:decoration-current",
        // Icon styles
        "*:data-icon:text-fg-error-secondary hover:*:data-icon:text-fg-error-primary"
      ].join(" ")
    }
  }
}, L8 = ({
  size: t = "sm",
  color: e = "primary",
  children: i,
  className: l,
  noTextPadding: r,
  iconLeading: o,
  iconTrailing: a,
  isDisabled: s,
  isLoading: d,
  showTextWhileLoading: u,
  ...c
}) => {
  const f = "href" in c ? c.href : void 0, h = f ? hr : Vt, p = (o || a) && !i, m = ["link-color", "link-destructive"].includes(e);
  r = m || r;
  let b = {};
  return f ? b = {
    ...c,
    href: s ? void 0 : f,
    // Since anchor elements do not support the `disabled` attribute and state,
    // we need to specify `data-rac` and `data-disabled` in order to be able
    // to use the `disabled:` selector in classes.
    ...s ? { "data-rac": !0, "data-disabled": !0 } : {}
  } : b = {
    ...c,
    type: c.type || "button",
    isPending: d,
    isDisabled: s
  }, /* @__PURE__ */ L(
    h,
    {
      "data-loading": d ? !0 : void 0,
      "data-icon-only": p ? !0 : void 0,
      ...b,
      className: k(
        it.common.root,
        it.sizes[t]?.root || it.sizes.sm.root,
        it.colors[e]?.root || it.colors.primary.root,
        m && it.sizes[t]?.linkRoot,
        (d || f && (s || d)) && "pointer-events-none",
        // If in `loading` state, hide everything except the loading icon (and text if `showTextWhileLoading` is true).
        d && (u ? "[&>*:not([data-icon=loading]):not([data-text])]:hidden" : "[&>*:not([data-icon=loading])]:invisible"),
        l
      ),
      children: [
        Yt(o) && o,
        ki(o) && /* @__PURE__ */ n(o, { "data-icon": "leading", className: it.common.icon }),
        d && /* @__PURE__ */ L(
          "svg",
          {
            fill: "none",
            "data-icon": "loading",
            viewBox: "0 0 20 20",
            className: k(
              it.common.icon,
              !u && "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            ),
            children: [
              /* @__PURE__ */ n(
                "circle",
                {
                  className: "stroke-current opacity-30",
                  cx: "10",
                  cy: "10",
                  r: "8",
                  fill: "none",
                  strokeWidth: "2"
                }
              ),
              /* @__PURE__ */ n(
                "circle",
                {
                  className: "origin-center animate-spin stroke-current",
                  cx: "10",
                  cy: "10",
                  r: "8",
                  fill: "none",
                  strokeWidth: "2",
                  strokeDasharray: "12.5 50",
                  strokeLinecap: "round"
                }
              )
            ]
          }
        ),
        i && /* @__PURE__ */ n(
          "span",
          {
            "data-text": !0,
            className: k("transition-inherit-all", !r && "px-0.5"),
            children: i
          }
        ),
        Yt(a) && a,
        ki(a) && /* @__PURE__ */ n(a, { "data-icon": "trailing", className: it.common.icon })
      ]
    }
  );
}, i3 = {
  secondary: "bg-primary text-fg-quaternary shadow-xs-skeumorphic ring-1 ring-primary ring-inset hover:bg-primary_hover hover:text-fg-quaternary_hover disabled:shadow-xs disabled:ring-disabled_subtle",
  tertiary: "text-fg-quaternary hover:bg-primary_hover hover:text-fg-quaternary_hover"
}, T8 = ({
  tooltip: t,
  children: e,
  className: i,
  isDisabled: l,
  icon: r,
  size: o = "sm",
  color: a = "secondary",
  tooltipPlacement: s = "top",
  ...d
}) => {
  const u = "href" in d ? d.href : void 0, c = u ? hr : Vt;
  let f = {};
  u ? f = {
    ...d,
    href: l ? void 0 : u,
    // Since anchor elements do not support the `disabled` attribute and state,
    // we need to specify `data-rac` and `data-disabled` in order to be able
    // to use the `disabled:` selector in classes.
    ...l ? { "data-rac": !0, "data-disabled": !0 } : {}
  } : f = {
    ...d,
    type: d.type || "button",
    isDisabled: l
  };
  const h = /* @__PURE__ */ L(
    c,
    {
      "aria-label": t,
      ...f,
      className: k(
        "group relative inline-flex h-max cursor-pointer items-center justify-center rounded-md p-1.5 outline-focus-ring transition duration-100 ease-linear focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:text-fg-disabled_subtle",
        i3[a],
        // Icon styles
        "*:data-icon:pointer-events-none *:data-icon:shrink-0 *:data-icon:text-current *:data-icon:transition-inherit-all",
        o === "xs" ? "*:data-icon:size-4" : "*:data-icon:size-5",
        i
      ),
      children: [
        ki(r) && /* @__PURE__ */ n(r, { "data-icon": !0 }),
        Yt(r) && r
      ]
    }
  );
  return t ? /* @__PURE__ */ n(
    wr,
    {
      title: t,
      placement: s,
      isDisabled: l,
      offset: o === "xs" ? 4 : 6,
      children: h
    }
  ) : h;
}, To = {
  xs: { root: "size-7", icon: "size-4" },
  sm: { root: "size-9", icon: "size-5" },
  md: { root: "size-10", icon: "size-5" },
  lg: { root: "size-11", icon: "size-6" }
}, n3 = {
  light: "text-fg-quaternary hover:bg-primary_hover hover:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2 outline-focus-ring",
  dark: "text-fg-white/70 hover:text-fg-white hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 outline-focus-ring"
}, F8 = ({
  label: t,
  className: e,
  size: i = "sm",
  theme: l = "light",
  ...r
}) => /* @__PURE__ */ n(
  Vt,
  {
    ...r,
    "aria-label": t || "Close",
    className: (o) => k(
      "flex cursor-pointer items-center justify-center rounded-lg p-2 transition duration-100 ease-linear focus:outline-hidden",
      To[i].root,
      n3[l],
      typeof e == "function" ? e(o) : e
    ),
    children: /* @__PURE__ */ n(
      Bl,
      {
        "aria-hidden": "true",
        className: k("shrink-0 transition-inherit-all", To[i].icon)
      }
    )
  }
), l3 = ({
  colorful: t,
  ...e
}) => /* @__PURE__ */ L("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", ...e, children: [
  /* @__PURE__ */ n(
    "path",
    {
      d: "M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z",
      fill: t ? "#4285F4" : "currentColor"
    }
  ),
  /* @__PURE__ */ n(
    "path",
    {
      d: "M12.24 24.0008C15.4764 24.0008 18.2058 22.9382 20.1944 21.1039L16.3274 18.1055C15.2516 18.8375 13.8626 19.252 12.2444 19.252C9.11376 19.252 6.45934 17.1399 5.50693 14.3003H1.51648V17.3912C3.55359 21.4434 7.70278 24.0008 12.24 24.0008Z",
      fill: t ? "#34A853" : "currentColor"
    }
  ),
  /* @__PURE__ */ n(
    "path",
    {
      d: "M5.50253 14.3003C4.99987 12.8099 4.99987 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z",
      fill: t ? "#FBBC04" : "currentColor"
    }
  ),
  /* @__PURE__ */ n(
    "path",
    {
      d: "M12.24 4.74966C13.9508 4.7232 15.6043 5.36697 16.8433 6.54867L20.2694 3.12262C18.1 1.0855 15.2207 -0.034466 12.24 0.000808666C7.70277 0.000808666 3.55359 2.55822 1.51648 6.61481L5.50252 9.70575C6.45052 6.86173 9.10935 4.74966 12.24 4.74966Z",
      fill: t ? "#EA4335" : "currentColor"
    }
  )
] }), r3 = ({
  colorful: t,
  ...e
}) => /* @__PURE__ */ n("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", ...e, children: /* @__PURE__ */ n(
  "path",
  {
    d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z",
    fill: t ? "#1877F2" : "currentColor"
  }
) }), o3 = (t) => /* @__PURE__ */ n("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", ...t, children: /* @__PURE__ */ n(
  "path",
  {
    d: "M20.8426 17.1449C20.5099 17.9135 20.1161 18.6211 19.6598 19.2715C19.0379 20.1583 18.5286 20.7721 18.1362 21.113C17.5278 21.6724 16.876 21.959 16.178 21.9753C15.6769 21.9753 15.0726 21.8327 14.3691 21.5434C13.6634 21.2555 13.0148 21.113 12.4218 21.113C11.7998 21.113 11.1328 21.2555 10.4193 21.5434C9.70475 21.8327 9.1291 21.9834 8.68898 21.9984C8.01963 22.0269 7.35246 21.7322 6.6865 21.113C6.26145 20.7422 5.7298 20.1067 5.09291 19.2063C4.40957 18.2449 3.84778 17.13 3.40766 15.8589C2.9363 14.486 2.70001 13.1565 2.70001 11.8694C2.70001 10.3951 3.01859 9.12345 3.65671 8.05784C4.15821 7.20191 4.82539 6.52672 5.66041 6.03105C6.49543 5.53539 7.39768 5.2828 8.36931 5.26664C8.90096 5.26664 9.59815 5.43109 10.4645 5.75429C11.3285 6.07858 11.8832 6.24303 12.1264 6.24303C12.3083 6.24303 12.9245 6.05074 13.9692 5.66738C14.9571 5.31186 15.7909 5.16466 16.474 5.22264C18.3249 5.37202 19.7155 6.10167 20.6403 7.41619C18.9849 8.4192 18.1661 9.82403 18.1824 11.6262C18.1973 13.03 18.7065 14.1981 19.7074 15.1256C20.1609 15.5561 20.6675 15.8888 21.231 16.1251C21.1088 16.4795 20.9798 16.819 20.8426 17.1449ZM16.5976 0.440369C16.5976 1.54062 16.1956 2.56792 15.3944 3.51878C14.4275 4.64917 13.258 5.30236 11.9898 5.19929C11.9737 5.06729 11.9643 4.92837 11.9643 4.78239C11.9643 3.72615 12.4241 2.59576 13.2407 1.67152C13.6483 1.20356 14.1668 0.814453 14.7955 0.504058C15.4229 0.198295 16.0164 0.0292007 16.5745 0.000244141C16.5908 0.147331 16.5976 0.294426 16.5976 0.440355V0.440369Z",
    fill: "currentColor"
  }
) }), fi = {
  common: {
    root: "group relative inline-flex h-max cursor-pointer items-center justify-center font-semibold whitespace-nowrap outline-focus-ring transition duration-100 ease-linear before:absolute focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:stroke-fg-disabled disabled:text-fg-disabled disabled:*:text-fg-disabled",
    icon: "pointer-events-none shrink-0 transition-inherit-all"
  },
  sizes: {
    sm: {
      root: "gap-2 rounded-lg px-3 py-2 text-sm data-icon-only:p-2"
    },
    md: {
      root: "gap-2.5 rounded-lg px-3.5 py-2.5 text-sm data-icon-only:p-2.5"
    },
    lg: {
      root: "gap-3 rounded-lg px-4 py-2.5 text-md data-icon-only:p-2.5"
    }
  },
  colors: {
    gray: {
      root: "bg-primary text-secondary ring-1 ring-primary ring-inset hover:bg-primary_hover hover:text-secondary_hover",
      icon: "text-fg-quaternary group-hover:text-fg-quaternary_hover"
    },
    black: {
      root: "bg-black text-white ring-1 ring-transparent ring-inset before:absolute before:inset-px before:border before:border-white/12 before:mask-b-from-0%",
      icon: ""
    },
    facebook: {
      root: "bg-[#1877F2] text-white ring-1 ring-transparent ring-inset before:absolute before:inset-px before:border before:border-white/12 before:mask-b-from-0% hover:bg-[#0C63D4]",
      icon: ""
    }
  }
}, N8 = ({
  size: t = "md",
  theme: e = "brand",
  social: i,
  className: l,
  children: r,
  disabled: o,
  ...a
}) => {
  const s = "href" in a ? a.href : void 0, d = s ? hr : Vt, u = !r, c = {
    google: "gray",
    facebook: "facebook",
    apple: "black"
  }, f = e === "brand" ? fi.colors[c[i]] : fi.colors.gray, p = {
    google: l3,
    facebook: r3,
    apple: o3
  }[i];
  let m = {};
  return s ? m = {
    ...a,
    href: o ? void 0 : s,
    // Since anchor elements do not support the `disabled` attribute and state,
    // we need to specify `data-rac` and `data-disabled` in order to be able
    // to use the `disabled:` selector in classes.
    ...o ? { "data-rac": !0, "data-disabled": !0 } : {}
  } : m = {
    ...a,
    type: a.type || "button",
    isDisabled: o
  }, /* @__PURE__ */ L(
    d,
    {
      isDisabled: o,
      ...m,
      "data-icon-only": u ? !0 : void 0,
      className: k(
        fi.common.root,
        fi.sizes[t].root,
        f.root,
        l
      ),
      children: [
        /* @__PURE__ */ n(
          p,
          {
            className: k(
              fi.common.icon,
              e === "gray" ? f.icon : e === "brand" && (i === "facebook" || i === "apple") ? "text-white" : e === "color" && i === "apple" ? "text-alpha-black" : ""
            ),
            colorful: e === "brand" && i === "google" || e === "color" && (i === "google" || i === "facebook") || void 0
          }
        ),
        r
      ]
    }
  );
}, a3 = U({ size: "sm" }), K8 = ({
  children: t,
  size: e = "sm",
  className: i,
  ...l
}) => /* @__PURE__ */ n(a3.Provider, { value: { size: e }, children: /* @__PURE__ */ n(
  U6,
  {
    selectionMode: "single",
    className: k(
      "relative z-0 inline-flex w-max rounded-lg  ring-1 ring-primary divide-x divide-border-primary",
      i
    ),
    ...l,
    children: t
  }
) }), s2 = ({
  className: t,
  isSelected: e,
  isDisabled: i,
  isIndeterminate: l,
  size: r = "sm",
  isFocusVisible: o = !1
}) => /* @__PURE__ */ L(
  "div",
  {
    className: k(
      "flex size-4 shrink-0 cursor-pointer appearance-none items-center justify-center rounded bg-primary ring-1 ring-primary ring-inset",
      r === "md" && "size-5 rounded-md",
      (e || l) && "bg-brand-solid ring-bg-brand-solid",
      i && "cursor-not-allowed bg-disabled_subtle ring-disabled",
      o && "outline-2 outline-offset-2 outline-focus-ring",
      t
    ),
    children: [
      /* @__PURE__ */ n(
        "svg",
        {
          "aria-hidden": "true",
          viewBox: "0 0 14 14",
          fill: "none",
          className: k(
            "pointer-events-none absolute h-3 w-2.5 text-fg-white opacity-0 transition-inherit-all",
            r === "md" && "size-3.5",
            l && "opacity-100",
            i && "text-fg-disabled_subtle"
          ),
          children: /* @__PURE__ */ n(
            "path",
            {
              d: "M2.91675 7H11.0834",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        }
      ),
      /* @__PURE__ */ n(
        "svg",
        {
          "aria-hidden": "true",
          viewBox: "0 0 14 14",
          fill: "none",
          className: k(
            "pointer-events-none absolute size-3 text-fg-white opacity-0 transition-inherit-all",
            r === "md" && "size-3.5",
            e && !l && "opacity-100",
            i && "text-fg-disabled_subtle"
          ),
          children: /* @__PURE__ */ n(
            "path",
            {
              d: "M11.6666 3.5L5.24992 9.91667L2.33325 7",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        }
      )
    ]
  }
);
s2.displayName = "CheckboxBase";
const s3 = ({
  label: t,
  hint: e,
  size: i = "sm",
  className: l,
  ...r
}) => {
  const o = {
    sm: {
      root: "gap-2",
      textWrapper: "",
      label: "text-sm font-medium",
      hint: "text-sm"
    },
    md: {
      root: "gap-3",
      textWrapper: "gap-0.5",
      label: "text-md font-medium",
      hint: "text-md"
    }
  };
  return /* @__PURE__ */ n(
    s6,
    {
      ...r,
      className: (a) => k(
        "flex items-start",
        a.isDisabled && "cursor-not-allowed",
        o[i].root,
        typeof l == "function" ? l(a) : l
      ),
      children: ({ isSelected: a, isIndeterminate: s, isDisabled: d, isFocusVisible: u }) => /* @__PURE__ */ L(nt, { children: [
        /* @__PURE__ */ n(
          s2,
          {
            size: i,
            isSelected: a,
            isIndeterminate: s,
            isDisabled: d,
            isFocusVisible: u,
            className: t || e ? "mt-0.5" : ""
          }
        ),
        (t || e) && /* @__PURE__ */ L(
          "div",
          {
            className: k("inline-flex flex-col", o[i].textWrapper),
            children: [
              t && /* @__PURE__ */ n(
                "p",
                {
                  className: k(
                    "text-secondary select-none",
                    o[i].label
                  ),
                  children: t
                }
              ),
              e && /* @__PURE__ */ n(
                "span",
                {
                  className: k("text-tertiary", o[i].hint),
                  onClick: (c) => c.stopPropagation(),
                  children: e
                }
              )
            ]
          }
        )
      ] })
    }
  );
};
s3.displayName = "Checkbox";
const d3 = ({
  label: t,
  children: e,
  addon: i,
  icon: l,
  unstyled: r,
  ...o
}) => r ? /* @__PURE__ */ n(So, { id: t, textValue: t, ...o }) : /* @__PURE__ */ n(
  So,
  {
    ...o,
    className: (a) => k(
      "group block cursor-pointer px-1.5 py-px outline-hidden",
      a.isDisabled && "cursor-not-allowed",
      typeof o.className == "function" ? o.className(a) : o.className
    ),
    children: (a) => /* @__PURE__ */ L(
      "div",
      {
        className: k(
          "relative flex items-center rounded-md px-2.5 py-2 outline-focus-ring transition duration-100 ease-linear",
          !a.isDisabled && "group-hover:bg-primary_hover",
          a.isFocused && "bg-primary_hover",
          a.isFocusVisible && "outline-2 -outline-offset-2"
        ),
        children: [
          l && /* @__PURE__ */ n(
            l,
            {
              "aria-hidden": "true",
              className: k(
                "mr-2 size-4 shrink-0 stroke-[2.25px]",
                a.isDisabled ? "text-fg-disabled" : "text-fg-quaternary"
              )
            }
          ),
          /* @__PURE__ */ n(
            "span",
            {
              className: k(
                "grow truncate text-sm font-medium",
                a.isDisabled ? "text-disabled" : "text-secondary",
                a.isFocused && "text-secondary_hover"
              ),
              children: t || (typeof e == "function" ? e(a) : e)
            }
          ),
          i && /* @__PURE__ */ n(
            "span",
            {
              className: k(
                "ml-3 shrink-0 rounded px-1 py-px text-xs font-medium ring-1 ring-secondary ring-inset",
                a.isDisabled ? "text-disabled" : "text-quaternary"
              ),
              children: i
            }
          )
        ]
      }
    )
  }
), u3 = (t) => /* @__PURE__ */ n(
  _6,
  {
    disallowEmptySelection: !0,
    selectionMode: "single",
    ...t,
    className: (e) => k(
      "h-min overflow-y-auto py-1 outline-hidden select-none",
      typeof t.className == "function" ? t.className(e) : t.className
    )
  }
), c3 = (t) => /* @__PURE__ */ n(
  X4,
  {
    placement: "bottom right",
    ...t,
    className: (e) => k(
      "w-62 overflow-auto rounded-lg bg-primary shadow-lg ring-1 ring-secondary_alt will-change-transform",
      e.isEntering && "duration-150 ease-out animate-in fade-in placement-right:origin-left placement-right:slide-in-from-left-0.5 placement-top:origin-bottom placement-top:slide-in-from-bottom-0.5 placement-bottom:origin-top placement-bottom:slide-in-from-top-0.5",
      e.isExiting && "duration-100 ease-in animate-out fade-out placement-right:origin-left placement-right:slide-out-to-left-0.5 placement-top:origin-bottom placement-top:slide-out-to-bottom-0.5 placement-bottom:origin-top placement-bottom:slide-out-to-top-0.5",
      typeof t.className == "function" ? t.className(e) : t.className
    ),
    children: t.children
  }
), f3 = (t) => /* @__PURE__ */ n(
  f6,
  {
    ...t,
    className: k("my-1 h-px w-full bg-border-secondary", t.className)
  }
), p3 = (t) => /* @__PURE__ */ n(
  Vt,
  {
    ...t,
    "aria-label": "Open menu",
    className: (e) => k(
      "cursor-pointer rounded-md text-fg-quaternary outline-focus-ring transition duration-100 ease-linear",
      (e.isPressed || e.isHovered) && "text-fg-quaternary_hover",
      (e.isPressed || e.isFocusVisible) && "outline-2 outline-offset-2",
      typeof t.className == "function" ? t.className(e) : t.className
    ),
    children: /* @__PURE__ */ n(zo, { className: "size-5 transition-inherit-all" })
  }
), A8 = {
  Root: D6,
  Popover: c3,
  Menu: u3,
  Section: P6,
  SectionHeader: c6,
  Item: d3,
  Separator: f3,
  DotsButton: p3
}, h3 = (t) => /* @__PURE__ */ n(u4, { ...t });
h3.displayName = "Form";
const d2 = w.createContext(null);
d2.displayName = "HookFormContext";
const m3 = (t) => {
  const { children: e, ...i } = t;
  return w.createElement(d2.Provider, { value: i }, e);
};
U(
  {}
);
const g3 = ({
  form: t,
  ...e
}) => /* @__PURE__ */ n(m3, { ...t, children: /* @__PURE__ */ n(u4, { ...e }) });
g3.displayName = "HookForm";
const Bt = ({ isInvalid: t, className: e, ...i }) => /* @__PURE__ */ n(
  Dl,
  {
    ...i,
    slot: t ? "errorMessage" : "description",
    className: k(
      "text-sm text-tertiary",
      // Invalid state
      t && "text-error-primary",
      "group-invalid:text-error-primary",
      e
    )
  }
);
Bt.displayName = "HintText";
const Rt = ({
  isRequired: t,
  tooltip: e,
  tooltipDescription: i,
  className: l,
  ...r
}) => /* @__PURE__ */ L(
  n4,
  {
    "data-label": "true",
    ...r,
    className: k(
      "flex cursor-default items-center gap-0.5 text-sm font-medium text-secondary",
      l
    ),
    children: [
      r.children,
      /* @__PURE__ */ n(
        "span",
        {
          className: k(
            "hidden text-brand-tertiary",
            t && "block",
            typeof t > "u" && "group-required:block"
          ),
          children: "*"
        }
      ),
      e && /* @__PURE__ */ n(
        wr,
        {
          title: e,
          description: i,
          placement: "top",
          children: /* @__PURE__ */ n(
            r2,
            {
              isDisabled: !1,
              className: "cursor-pointer text-fg-quaternary transition duration-200 hover:text-fg-quaternary_hover focus:text-fg-quaternary_hover",
              children: /* @__PURE__ */ n(Nl, { className: "size-4" })
            }
          )
        }
      )
    ]
  }
);
Rt.displayName = "Label";
const u2 = ({
  size: t = "sm",
  placeholder: e,
  icon: i,
  isRequired: l,
  isDisabled: r,
  isInvalid: o,
  tooltip: a,
  shortcut: s,
  ref: d,
  groupRef: u,
  wrapperClassName: c,
  tooltipClassName: f,
  inputClassName: h,
  iconClassName: p,
  ...m
}) => {
  const b = a || o, v = i, g = J(c2), y = g?.size || t, $ = {
    sm: {
      root: k(
        "h-8 px-2.5 py-2",
        b && "pr-8",
        v && "pl-9.5"
      ),
      iconLeading: "left-3",
      iconTrailing: "right-3",
      shortcut: "pr-2.5"
    },
    md: {
      root: k(
        "h-10 px-3 py-2.5 text-md",
        b && "pr-9",
        v && "pl-10.5"
      ),
      iconLeading: "left-3.5",
      iconTrailing: "right-3.5",
      shortcut: "pr-3"
    }
  };
  return /* @__PURE__ */ L(
    pr,
    {
      isDisabled: r,
      isInvalid: o,
      ref: u,
      className: ({ isFocusWithin: _, isDisabled: Z, isInvalid: D }) => k(
        "relative flex w-full flex-row place-content-center place-items-center rounded-lg bg-primary ring-1 ring-primary transition-color duration-100 ease-linear ring-inset",
        _ && !Z && "ring-2 ring-brand",
        // Disabled state styles
        Z && "cursor-not-allowed bg-disabled_subtle ring-disabled",
        "group-disabled:cursor-not-allowed group-disabled:bg-disabled_subtle group-disabled:ring-disabled",
        // Invalid state styles
        D && "ring-error_subtle",
        "group-invalid:ring-error_subtle",
        // Invalid state with focus-within styles
        D && _ && "ring-2 ring-error",
        _ && "group-invalid:ring-2 group-invalid:ring-error",
        g?.wrapperClassName,
        c
      ),
      children: [
        i && /* @__PURE__ */ n(
          i,
          {
            className: k(
              "pointer-events-none absolute size-5 text-fg-quaternary",
              r && "text-fg-disabled",
              $[y].iconLeading,
              g?.iconClassName,
              p
            )
          }
        ),
        /* @__PURE__ */ n(
          dr,
          {
            ...m,
            ref: d,
            placeholder: e,
            className: k(
              "m-0 w-full bg-transparent text-sm text-primary ring-0 outline-hidden placeholder:text-placeholder autofill:rounded-lg autofill:text-primary",
              r && "cursor-not-allowed text-disabled",
              $[y].root,
              g?.inputClassName,
              h
            )
          }
        ),
        a && !o && /* @__PURE__ */ n(wr, { title: a, placement: "top", children: /* @__PURE__ */ n(
          r2,
          {
            className: k(
              "absolute cursor-pointer text-fg-quaternary transition duration-200 hover:text-fg-quaternary_hover focus:text-fg-quaternary_hover",
              $[y].iconTrailing,
              g?.tooltipClassName,
              f
            ),
            children: /* @__PURE__ */ n(Nl, { className: "size-4" })
          }
        ) }),
        o && /* @__PURE__ */ n(
          Oo,
          {
            className: k(
              "pointer-events-none absolute size-4 text-fg-error-secondary",
              $[y].iconTrailing,
              g?.tooltipClassName,
              f
            )
          }
        ),
        s && /* @__PURE__ */ n(
          "div",
          {
            className: k(
              "pointer-events-none absolute inset-y-0.5 right-0.5 z-10 flex items-center rounded-r-[inherit] bg-linear-to-r from-transparent to-bg-primary to-40% pl-8",
              $[y].shortcut
            ),
            children: /* @__PURE__ */ n(
              "span",
              {
                className: k(
                  "pointer-events-none rounded px-1 py-px text-xs font-medium text-quaternary ring-1 ring-secondary select-none ring-inset",
                  r && "bg-transparent text-disabled"
                ),
                "aria-hidden": "true",
                children: typeof s == "string" ? s : "⌘K"
              }
            )
          }
        )
      ]
    }
  );
};
u2.displayName = "InputBase";
const c2 = U({}), Mr = ({ className: t, ...e }) => /* @__PURE__ */ n(c2.Provider, { value: e, children: /* @__PURE__ */ n(
  i6,
  {
    ...e,
    "data-input-wrapper": !0,
    className: (i) => k(
      "group flex h-max w-full flex-col items-start justify-start gap-1.5",
      typeof t == "function" ? t(i) : t
    )
  }
) });
Mr.displayName = "TextField";
const b3 = ({
  size: t = "sm",
  placeholder: e,
  icon: i,
  label: l,
  hint: r,
  shortcut: o,
  hideRequiredIndicator: a,
  className: s,
  ref: d,
  groupRef: u,
  tooltip: c,
  iconClassName: f,
  inputClassName: h,
  wrapperClassName: p,
  tooltipClassName: m,
  ...b
}) => /* @__PURE__ */ n(
  Mr,
  {
    "aria-label": l ? void 0 : e,
    ...b,
    className: s,
    children: ({ isInvalid: v }) => /* @__PURE__ */ L(nt, { children: [
      l && /* @__PURE__ */ n(
        Rt,
        {
          isRequired: a ? !a : void 0,
          children: l
        }
      ),
      /* @__PURE__ */ n(
        u2,
        {
          ref: d,
          groupRef: u,
          size: t,
          placeholder: e,
          icon: i,
          shortcut: o,
          iconClassName: f,
          inputClassName: h,
          wrapperClassName: p,
          tooltipClassName: m,
          tooltip: c
        }
      ),
      r && /* @__PURE__ */ n(Bt, { isInvalid: v, children: r })
    ] })
  }
);
b3.displayName = "Input";
const v3 = ({
  position: t = "leading",
  size: e = "sm",
  isDisabled: i,
  children: l,
  ...r
}) => /* @__PURE__ */ n(
  "span",
  {
    ...r,
    className: k(
      "flex text-md text-tertiary ring-1 ring-border-primary ring-inset",
      // Styles when the prefix is within an `InputGroup`
      "in-data-input-wrapper:in-data-leading:-mr-px in-data-input-wrapper:in-data-leading:rounded-l-lg",
      "in-data-input-wrapper:in-data-trailing:-ml-px in-data-input-wrapper:in-data-trailing:rounded-r-lg",
      // Size styles based on size when within an `InputGroup`
      "in-data-input-wrapper:in-data-[input-size=md]:py-2.5 in-data-input-wrapper:in-data-[input-size=md]:pr-3 in-data-input-wrapper:in-data-[input-size=md]:px-3 in-data-input-wrapper:in-data-[input-size=sm]:px-3 in-data-input-wrapper:in-data-[input-size=sm]:py-2",
      // Disabled styles
      i && "border-disabled bg-disabled_subtle text-tertiary",
      "in-data-input-wrapper:group-disabled:bg-disabled_subtle in-data-input-wrapper:group-disabled:text-disabled in-data-input-wrapper:group-disabled:ring-border-disabled",
      r.className
    ),
    children: l
  }
), f2 = ({
  size: t = "sm",
  prefix: e,
  leadingAddon: i,
  trailingAddon: l,
  label: r,
  hint: o,
  children: a,
  ...s
}) => {
  const d = !!i, u = !!l, c = {
    sm: {
      input: k(
        // Apply padding styles when select element is passed as a child
        d && "group-has-[&>select]:px-2.5 group-has-[&>select]:pl-2.5",
        u && (e ? "group-has-[&>select]:pr-6 group-has-[&>select]:pl-0" : "group-has-[&>select]:pr-6 group-has-[&>select]:pl-3")
      ),
      leadingText: "pl-3"
    },
    md: {
      input: k(
        // Apply padding styles when select element is passed as a child
        d && "group-has-[&>select]:px-2.5 group-has-[&>select]:pl-2.5",
        u && (e ? "group-has-[&>select]:pr-6 group-has-[&>select]:pl-0" : "group-has-[&>select]:pr-6 group-has-[&>select]:pl-3")
      ),
      leadingText: "pl-3"
    }
  };
  return /* @__PURE__ */ n(
    Mr,
    {
      size: t,
      "aria-label": r || void 0,
      inputClassName: k(c[t].input),
      tooltipClassName: k(
        u && !d && "group-has-[&>select]:right-0"
      ),
      wrapperClassName: k(
        "z-10",
        // Apply styles based on the presence of leading or trailing elements
        d && "rounded-l-none",
        u && "rounded-r-none",
        // When select element is passed as a child
        "group-has-[&>select]:bg-transparent group-has-[&>select]:ring-0 group-has-[&>select]:focus-within:ring-0",
        // In `Input` component, there is "group-disabled" class so here we need to use "group-disabled:group-has-[&>select]" to avoid conflict
        "group-disabled:group-has-[&>select]:bg-transparent"
      ),
      ...s,
      children: (f) => /* @__PURE__ */ L(nt, { children: [
        r && /* @__PURE__ */ n(Rt, { ...f, children: r }),
        /* @__PURE__ */ L(
          "div",
          {
            "data-input-size": t,
            className: k(
              "group relative flex h-max w-full flex-row justify-center rounded-lg bg-primary transition-all duration-100 ease-linear",
              // Only apply focus ring when child is select and input is focused
              "has-[&>select]:ring-1 has-[&>select]:ring-border-primary has-[&>select]:ring-inset has-[&>select]:has-[input:focus]:ring-2 has-[&>select]:has-[input:focus]:ring-border-brand",
              f.isDisabled && "cursor-not-allowed has-[&>select]:bg-disabled_subtle has-[&>select]:ring-border-disabled",
              f.isInvalid && "has-[&>select]:ring-border-error_subtle has-[&>select]:has-[input:focus]:ring-border-error"
            ),
            children: [
              i && /* @__PURE__ */ n("section", { "data-leading": d || void 0, children: i }),
              e && /* @__PURE__ */ n(
                "span",
                {
                  className: k("my-auto grow pr-2", c[t].leadingText),
                  children: /* @__PURE__ */ n(
                    "p",
                    {
                      className: k(
                        "text-sm text-tertiary",
                        f.isDisabled && "text-disabled"
                      ),
                      children: e
                    }
                  )
                }
              ),
              a,
              l && /* @__PURE__ */ n("section", { "data-trailing": u || void 0, children: l })
            ]
          }
        ),
        o && /* @__PURE__ */ n(Bt, { ...f, children: o })
      ] })
    }
  );
};
f2.Prefix = v3;
f2.displayName = "InputGroup";
var C3 = Object.defineProperty, V3 = Object.defineProperties, H3 = Object.getOwnPropertyDescriptors, hn = Object.getOwnPropertySymbols, p2 = Object.prototype.hasOwnProperty, h2 = Object.prototype.propertyIsEnumerable, Fo = (t, e, i) => e in t ? C3(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, y3 = (t, e) => {
  for (var i in e || (e = {})) p2.call(e, i) && Fo(t, i, e[i]);
  if (hn) for (var i of hn(e)) h2.call(e, i) && Fo(t, i, e[i]);
  return t;
}, w3 = (t, e) => V3(t, H3(e)), M3 = (t, e) => {
  var i = {};
  for (var l in t) p2.call(t, l) && e.indexOf(l) < 0 && (i[l] = t[l]);
  if (t != null && hn) for (var l of hn(t)) e.indexOf(l) < 0 && h2.call(t, l) && (i[l] = t[l]);
  return i;
};
function x3(t) {
  let e = setTimeout(t, 0), i = setTimeout(t, 10), l = setTimeout(t, 50);
  return [e, i, l];
}
function $3(t) {
  let e = Y.useRef();
  return Y.useEffect(() => {
    e.current = t;
  }), e.current;
}
var D3 = 18, m2 = 40, k3 = `${m2}px`, _3 = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function Z3({ containerRef: t, inputRef: e, pushPasswordManagerStrategy: i, isFocused: l }) {
  let [r, o] = Y.useState(!1), [a, s] = Y.useState(!1), [d, u] = Y.useState(!1), c = Y.useMemo(() => i === "none" ? !1 : (i === "increase-width" || i === "experimental-no-flickering") && r && a, [r, a, i]), f = Y.useCallback(() => {
    let h = t.current, p = e.current;
    if (!h || !p || d || i === "none") return;
    let m = h, b = m.getBoundingClientRect().left + m.offsetWidth, v = m.getBoundingClientRect().top + m.offsetHeight / 2, g = b - D3, y = v;
    document.querySelectorAll(_3).length === 0 && document.elementFromPoint(g, y) === h || (o(!0), u(!0));
  }, [t, e, d, i]);
  return Y.useEffect(() => {
    let h = t.current;
    if (!h || i === "none") return;
    function p() {
      let b = window.innerWidth - h.getBoundingClientRect().right;
      s(b >= m2);
    }
    p();
    let m = setInterval(p, 1e3);
    return () => {
      clearInterval(m);
    };
  }, [t, i]), Y.useEffect(() => {
    let h = l || document.activeElement === e.current;
    if (i === "none" || !h) return;
    let p = setTimeout(f, 0), m = setTimeout(f, 2e3), b = setTimeout(f, 5e3), v = setTimeout(() => {
      u(!0);
    }, 6e3);
    return () => {
      clearTimeout(p), clearTimeout(m), clearTimeout(b), clearTimeout(v);
    };
  }, [e, l, i, f]), { hasPWMBadge: r, willPushPWMBadge: c, PWM_BADGE_SPACE_WIDTH: k3 };
}
var g2 = Y.createContext({}), b2 = Y.forwardRef((t, e) => {
  var i = t, { value: l, onChange: r, maxLength: o, textAlign: a = "left", pattern: s, placeholder: d, inputMode: u = "numeric", onComplete: c, pushPasswordManagerStrategy: f = "increase-width", pasteTransformer: h, containerClassName: p, noScriptCSSFallback: m = E3, render: b, children: v } = i, g = M3(i, ["value", "onChange", "maxLength", "textAlign", "pattern", "placeholder", "inputMode", "onComplete", "pushPasswordManagerStrategy", "pasteTransformer", "containerClassName", "noScriptCSSFallback", "render", "children"]), y, $, _, Z, D;
  let [A, M] = Y.useState(typeof g.defaultValue == "string" ? g.defaultValue : ""), F = l ?? A, K = $3(F), C = Y.useCallback((W) => {
    r?.(W), M(W);
  }, [r]), P = Y.useMemo(() => s ? typeof s == "string" ? new RegExp(s) : s : null, [s]), T = Y.useRef(null), E = Y.useRef(null), R = Y.useRef({ value: F, onChange: C, isIOS: typeof window < "u" && (($ = (y = window?.CSS) == null ? void 0 : y.supports) == null ? void 0 : $.call(y, "-webkit-touch-callout", "none")) }), V = Y.useRef({ prev: [(_ = T.current) == null ? void 0 : _.selectionStart, (Z = T.current) == null ? void 0 : Z.selectionEnd, (D = T.current) == null ? void 0 : D.selectionDirection] });
  Y.useImperativeHandle(e, () => T.current, []), Y.useEffect(() => {
    let W = T.current, z = E.current;
    if (!W || !z) return;
    R.current.value !== W.value && R.current.onChange(W.value), V.current.prev = [W.selectionStart, W.selectionEnd, W.selectionDirection];
    function Ve() {
      if (document.activeElement !== W) {
        G(null), te(null);
        return;
      }
      let ee = W.selectionStart, ue = W.selectionEnd, He = W.selectionDirection, Ae = W.maxLength, Ht = W.value, Qe = V.current.prev, st = -1, dt = -1, yt;
      if (Ht.length !== 0 && ee !== null && ue !== null) {
        let P2 = ee === ue, S2 = ee === Ht.length && Ht.length < Ae;
        if (P2 && !S2) {
          let wt = ee;
          if (wt === 0) st = 0, dt = 1, yt = "forward";
          else if (wt === Ae) st = wt - 1, dt = wt, yt = "backward";
          else if (Ae > 1 && Ht.length > 1) {
            let An = 0;
            if (Qe[0] !== null && Qe[1] !== null) {
              yt = wt < Qe[1] ? "backward" : "forward";
              let L2 = Qe[0] === Qe[1] && Qe[0] < Ae;
              yt === "backward" && !L2 && (An = -1);
            }
            st = An + wt, dt = An + wt + 1;
          }
        }
        st !== -1 && dt !== -1 && st !== dt && T.current.setSelectionRange(st, dt, yt);
      }
      let Dr = st !== -1 ? st : ee, kr = dt !== -1 ? dt : ue, E2 = yt ?? He;
      G(Dr), te(kr), V.current.prev = [Dr, kr, E2];
    }
    if (document.addEventListener("selectionchange", Ve, { capture: !0 }), Ve(), document.activeElement === W && ie(!0), !document.getElementById("input-otp-style")) {
      let ee = document.createElement("style");
      if (ee.id = "input-otp-style", document.head.appendChild(ee), ee.sheet) {
        let ue = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        pi(ee.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), pi(ee.sheet, `[data-input-otp]:autofill { ${ue} }`), pi(ee.sheet, `[data-input-otp]:-webkit-autofill { ${ue} }`), pi(ee.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), pi(ee.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let ke = () => {
      z && z.style.setProperty("--root-height", `${W.clientHeight}px`);
    };
    ke();
    let Te = new ResizeObserver(ke);
    return Te.observe(W), () => {
      document.removeEventListener("selectionchange", Ve, { capture: !0 }), Te.disconnect();
    };
  }, []);
  let [x, H] = Y.useState(!1), [I, ie] = Y.useState(!1), [S, G] = Y.useState(null), [O, te] = Y.useState(null);
  Y.useEffect(() => {
    x3(() => {
      var W, z, Ve, ke;
      (W = T.current) == null || W.dispatchEvent(new Event("input"));
      let Te = (z = T.current) == null ? void 0 : z.selectionStart, ee = (Ve = T.current) == null ? void 0 : Ve.selectionEnd, ue = (ke = T.current) == null ? void 0 : ke.selectionDirection;
      Te !== null && ee !== null && (G(Te), te(ee), V.current.prev = [Te, ee, ue]);
    });
  }, [F, I]), Y.useEffect(() => {
    K !== void 0 && F !== K && K.length < o && F.length === o && c?.(F);
  }, [o, c, K, F]);
  let fe = Z3({ containerRef: E, inputRef: T, pushPasswordManagerStrategy: f, isFocused: I }), ge = Y.useCallback((W) => {
    let z = W.currentTarget.value.slice(0, o);
    if (z.length > 0 && P && !P.test(z)) {
      W.preventDefault();
      return;
    }
    typeof K == "string" && z.length < K.length && document.dispatchEvent(new Event("selectionchange")), C(z);
  }, [o, C, K, P]), ae = Y.useCallback(() => {
    var W;
    if (T.current) {
      let z = Math.min(T.current.value.length, o - 1), Ve = T.current.value.length;
      (W = T.current) == null || W.setSelectionRange(z, Ve), G(z), te(Ve);
    }
    ie(!0);
  }, [o]), $e = Y.useCallback((W) => {
    var z, Ve;
    let ke = T.current;
    if (!h && (!R.current.isIOS || !W.clipboardData || !ke)) return;
    let Te = W.clipboardData.getData("text/plain"), ee = h ? h(Te) : Te;
    W.preventDefault();
    let ue = (z = T.current) == null ? void 0 : z.selectionStart, He = (Ve = T.current) == null ? void 0 : Ve.selectionEnd, Ae = (ue !== He ? F.slice(0, ue) + ee + F.slice(He) : F.slice(0, ue) + ee + F.slice(ue)).slice(0, o);
    if (Ae.length > 0 && P && !P.test(Ae)) return;
    ke.value = Ae, C(Ae);
    let Ht = Math.min(Ae.length, o - 1), Qe = Ae.length;
    ke.setSelectionRange(Ht, Qe), G(Ht), te(Qe);
  }, [o, C, P, F]), Me = Y.useMemo(() => ({ position: "relative", cursor: g.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [g.disabled]), Ze = Y.useMemo(() => ({ position: "absolute", inset: 0, width: fe.willPushPWMBadge ? `calc(100% + ${fe.PWM_BADGE_SPACE_WIDTH})` : "100%", clipPath: fe.willPushPWMBadge ? `inset(0 ${fe.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0, height: "100%", display: "flex", textAlign: a, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [fe.PWM_BADGE_SPACE_WIDTH, fe.willPushPWMBadge, a]), re = Y.useMemo(() => Y.createElement("input", w3(y3({ autoComplete: g.autoComplete || "one-time-code" }, g), { "data-input-otp": !0, "data-input-otp-placeholder-shown": F.length === 0 || void 0, "data-input-otp-mss": S, "data-input-otp-mse": O, inputMode: u, pattern: P?.source, "aria-placeholder": d, style: Ze, maxLength: o, value: F, ref: T, onPaste: (W) => {
    var z;
    $e(W), (z = g.onPaste) == null || z.call(g, W);
  }, onChange: ge, onMouseOver: (W) => {
    var z;
    H(!0), (z = g.onMouseOver) == null || z.call(g, W);
  }, onMouseLeave: (W) => {
    var z;
    H(!1), (z = g.onMouseLeave) == null || z.call(g, W);
  }, onFocus: (W) => {
    var z;
    ae(), (z = g.onFocus) == null || z.call(g, W);
  }, onBlur: (W) => {
    var z;
    ie(!1), (z = g.onBlur) == null || z.call(g, W);
  } })), [ge, ae, $e, u, Ze, o, O, S, g, P?.source, F]), B = Y.useMemo(() => ({ slots: Array.from({ length: o }).map((W, z) => {
    var Ve;
    let ke = I && S !== null && O !== null && (S === O && z === S || z >= S && z < O), Te = F[z] !== void 0 ? F[z] : null, ee = F[0] !== void 0 ? null : (Ve = d?.[z]) != null ? Ve : null;
    return { char: Te, placeholderChar: ee, isActive: ke, hasFakeCaret: ke && Te === null };
  }), isFocused: I, isHovering: !g.disabled && x }), [I, x, o, O, S, g.disabled, F]), se = Y.useMemo(() => b ? b(B) : Y.createElement(g2.Provider, { value: B }, v), [v, B, b]);
  return Y.createElement(Y.Fragment, null, m !== null && Y.createElement("noscript", null, Y.createElement("style", null, m)), Y.createElement("div", { ref: E, "data-input-otp-container": !0, style: Me, className: p }, se, Y.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, re)));
});
b2.displayName = "Input";
function pi(t, e) {
  try {
    t.insertRule(e);
  } catch {
    console.error("input-otp could not insert CSS rule:", e);
  }
}
var E3 = `
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;
const v2 = U({
  size: "sm",
  id: "",
  digits: 4,
  disabled: !1
}), Kn = () => {
  const t = J(v2);
  if (!t)
    throw new Error(
      "The 'usePinInputContext' hook must be used within a '<PinInput />'"
    );
  return t;
}, C2 = ({
  className: t,
  size: e = "md",
  digits: i = 4,
  disabled: l,
  ...r
}) => {
  const o = Sl();
  return /* @__PURE__ */ n(v2.Provider, { value: { size: e, digits: i, disabled: l, id: o }, children: /* @__PURE__ */ n(
    "div",
    {
      role: "group",
      className: k("flex h-max flex-col gap-1.5", t),
      ...r
    }
  ) });
};
C2.displayName = "Root";
const V2 = ({
  inputClassName: t,
  containerClassName: e,
  width: i,
  ...l
}) => {
  const { id: r, size: o, digits: a, disabled: s } = Kn(), d = {
    sm: "h-12",
    md: "h-16",
    lg: "h-20"
  };
  return /* @__PURE__ */ n(
    b2,
    {
      ...l,
      size: i,
      maxLength: a,
      disabled: s,
      id: "pin-input-" + r,
      "aria-label": "Enter your pin",
      "aria-labelledby": "pin-input-label-" + r,
      "aria-describedby": "pin-input-description-" + r,
      containerClassName: k(
        "flex flex-row gap-3",
        o === "sm" && "gap-2",
        d[o],
        e
      ),
      className: k("w-full! disabled:cursor-not-allowed", t)
    }
  );
};
V2.displayName = "Group";
const P3 = {
  sm: "size-12 px-2 py-0.5 text-display-md font-medium",
  md: "size-16 px-2 py-2.5 text-display-lg font-medium",
  lg: "size-20 px-2 py-3 text-display-xl font-medium"
}, H2 = ({
  index: t,
  className: e,
  ...i
}) => {
  const { size: l, disabled: r } = Kn(), { slots: o, isFocused: a } = J(g2), s = o[t];
  return /* @__PURE__ */ n(
    "div",
    {
      ...i,
      "aria-label": "Enter digit " + (t + 1) + " of " + o.length,
      className: k(
        "relative flex items-center justify-center rounded-xl bg-primary text-center text-placeholder_subtle ring-1 ring-primary transition-[box-shadow,background-color] duration-100 ease-linear ring-inset",
        P3[l],
        a && s?.isActive && "ring-2 ring-brand outline-2  outline-brand",
        s?.char && "text-brand-tertiary_alt ring-2 ring-brand",
        r && "bg-disabled_subtle text-fg-disabled_subtle ring-disabled",
        e
      ),
      children: s?.char ? s.char : s?.hasFakeCaret ? /* @__PURE__ */ n(S3, { size: l }) : 0
    }
  );
};
H2.displayName = "Slot";
const S3 = ({ size: t = "md" }) => /* @__PURE__ */ n(
  "div",
  {
    className: k(
      "pointer-events-none h-[1em] w-0.5 animate-caret-blink bg-fg-brand-primary",
      t === "lg" ? "text-display-xl font-medium" : "text-display-lg font-medium"
    )
  }
), y2 = (t) => /* @__PURE__ */ n(
  "div",
  {
    role: "separator",
    ...t,
    className: k(
      "text-center text-display-xl font-medium text-placeholder_subtle",
      t.className
    ),
    children: "-"
  }
);
y2.displayName = "Separator";
const w2 = ({ className: t, ...e }) => {
  const { id: i } = Kn();
  return /* @__PURE__ */ n(
    "label",
    {
      ...e,
      htmlFor: "pin-input-" + i,
      id: "pin-input-label-" + i,
      className: k("text-sm font-medium text-secondary", t)
    }
  );
};
w2.displayName = "Label";
const M2 = ({ className: t, ...e }) => {
  const { id: i } = Kn();
  return /* @__PURE__ */ n(
    "p",
    {
      ...e,
      id: "pin-input-description-" + i,
      role: "description",
      className: k("text-sm text-tertiary", t)
    }
  );
};
M2.displayName = "Description";
const Fi = C2;
Fi.Slot = H2;
Fi.Label = w2;
Fi.Group = V2;
Fi.Separator = y2;
Fi.Description = M2;
const xr = (t) => /* @__PURE__ */ n(
  X4,
  {
    placement: "bottom",
    containerPadding: 0,
    offset: 4,
    ...t,
    className: (e) => k(
      "max-h-64! w-(--trigger-width) overflow-x-hidden overflow-y-auto rounded-lg bg-primary py-1 shadow-lg ring-1 ring-secondary_alt outline-hidden will-change-transform",
      e.isEntering && "duration-150 ease-out animate-in fade-in placement-right:origin-left placement-right:slide-in-from-left-0.5 placement-top:origin-bottom placement-top:slide-in-from-bottom-0.5 placement-bottom:origin-top placement-bottom:slide-in-from-top-0.5",
      e.isExiting && "duration-100 ease-in animate-out fade-out placement-right:origin-left placement-right:slide-out-to-left-0.5 placement-top:origin-bottom placement-top:slide-out-to-bottom-0.5 placement-bottom:origin-top placement-bottom:slide-out-to-top-0.5",
      t.size === "md" && "max-h-80!",
      typeof t.className == "function" ? t.className(e) : t.className
    )
  }
);
function L3() {
  return typeof window.ResizeObserver < "u";
}
function x2(t) {
  const { ref: e, box: i, onResize: l } = t;
  le(() => {
    let r = e?.current;
    if (r)
      if (L3()) {
        const o = new window.ResizeObserver((a) => {
          a.length && l();
        });
        return o.observe(r, { box: i }), () => {
          r && o.unobserve(r);
        };
      } else
        return window.addEventListener("resize", l, !1), () => {
          window.removeEventListener("resize", l, !1);
        };
  }, [l, e, i]);
}
const T3 = ({
  size: t,
  shortcut: e,
  placeholder: i,
  shortcutClassName: l,
  ...r
}) => {
  const o = J(e2), a = o?.selectedItem?.value || null, s = o?.inputValue || null, d = s?.split(a?.supportingText)?.[0] || "", u = s?.split(d)[1];
  return /* @__PURE__ */ n(
    pr,
    {
      ...r,
      className: ({ isFocusWithin: c, isDisabled: f }) => k(
        "relative flex w-full items-center gap-2 rounded-lg bg-primary ring-1 ring-primary outline-hidden transition-all duration-100 ease-linear ring-inset",
        f && "cursor-not-allowed bg-disabled_subtle",
        c && "ring-2 ring-brand",
        mn[t].root
      ),
      children: ({ isDisabled: c }) => /* @__PURE__ */ L(nt, { children: [
        /* @__PURE__ */ n(Kl, { className: "pointer-events-none size-5 text-fg-quaternary" }),
        /* @__PURE__ */ L("div", { className: "relative flex w-full items-center gap-2", children: [
          s && /* @__PURE__ */ L(
            "span",
            {
              className: "absolute top-1/2 z-0 inline-flex w-full -translate-y-1/2 gap-2 truncate",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ n(
                  "p",
                  {
                    className: k(
                      "text-sm font-medium text-primary",
                      c && "text-disabled"
                    ),
                    children: d
                  }
                ),
                u && /* @__PURE__ */ n(
                  "p",
                  {
                    className: k(
                      "-ml-[3px] text-sm text-tertiary",
                      c && "text-disabled"
                    ),
                    children: u
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ n(
            dr,
            {
              placeholder: i,
              className: "z-10 w-full appearance-none bg-transparent text-sm text-transparent caret-alpha-black/90 placeholder:text-placeholder focus:outline-hidden disabled:cursor-not-allowed disabled:text-disabled disabled:placeholder:text-disabled"
            }
          )
        ] }),
        e && /* @__PURE__ */ n(
          "div",
          {
            className: k(
              "absolute inset-y-0.5 right-0.5 z-10 flex items-center rounded-r-[inherit] bg-linear-to-r from-transparent to-bg-primary to-40% pl-8",
              c && "to-bg-disabled_subtle",
              mn[t].shortcut,
              l
            ),
            children: /* @__PURE__ */ n(
              "span",
              {
                className: k(
                  "pointer-events-none rounded px-1 py-px text-xs font-medium text-quaternary ring-1 ring-secondary select-none ring-inset",
                  c && "bg-transparent text-disabled"
                ),
                "aria-hidden": "true",
                children: "⌘K"
              }
            )
          }
        )
      ] })
    }
  );
}, F3 = ({
  placeholder: t = "Search",
  shortcut: e = !0,
  size: i = "sm",
  children: l,
  items: r,
  shortcutClassName: o,
  ...a
}) => {
  const s = N(null), [d, u] = ne(""), c = oe(() => {
    if (!s.current) return;
    const f = s.current?.getBoundingClientRect();
    u(f.width + "px");
  }, [s, u]);
  return x2({
    ref: s,
    box: "border-box",
    onResize: c
  }), /* @__PURE__ */ n($r.Provider, { value: { size: i }, children: /* @__PURE__ */ n(t2, { menuTrigger: "focus", ...a, children: (f) => /* @__PURE__ */ L("div", { className: "flex flex-col gap-1.5", children: [
    a.label && /* @__PURE__ */ n(Rt, { isRequired: f.isRequired, tooltip: a.tooltip, children: a.label }),
    /* @__PURE__ */ n(
      T3,
      {
        ref: s,
        placeholder: t,
        shortcut: e,
        shortcutClassName: o,
        size: i,
        onFocus: c,
        onPointerEnter: c
      }
    ),
    /* @__PURE__ */ n(
      xr,
      {
        size: i,
        triggerRef: s,
        style: { width: d },
        className: a.popoverClassName,
        children: /* @__PURE__ */ n(br, { items: r, className: "size-full outline-hidden", children: l })
      }
    ),
    a.hint && /* @__PURE__ */ n(Bt, { isInvalid: f.isInvalid, children: a.hint })
  ] }) }) });
}, N3 = {
  sm: "p-2 pr-2.5",
  md: "p-2.5 pl-2"
}, $2 = ({
  label: t,
  id: e,
  value: i,
  avatarUrl: l,
  supportingText: r,
  isDisabled: o,
  icon: a,
  className: s,
  children: d,
  ...u
}) => {
  const { size: c } = J($r), f = t || (typeof d == "string" ? d : ""), h = r ? f + " " + r : f;
  return /* @__PURE__ */ n(
    m6,
    {
      id: e,
      value: i ?? {
        id: e,
        label: f,
        avatarUrl: l,
        supportingText: r,
        isDisabled: o,
        icon: a
      },
      textValue: h,
      isDisabled: o,
      ...u,
      className: (p) => k(
        "w-full px-1.5 py-px outline-hidden",
        typeof s == "function" ? s(p) : s
      ),
      children: (p) => /* @__PURE__ */ L(
        "div",
        {
          className: k(
            "flex cursor-pointer items-center gap-2 rounded-md outline-hidden select-none",
            p.isSelected && "bg-active",
            p.isDisabled && "cursor-not-allowed",
            p.isFocused && "bg-primary_hover",
            p.isFocusVisible && "ring-2 ring-focus-ring ring-inset",
            // Icon styles
            "*:data-icon:size-5 *:data-icon:shrink-0 *:data-icon:text-fg-quaternary",
            p.isDisabled && "*:data-icon:text-fg-disabled",
            N3[c]
          ),
          children: [
            l ? /* @__PURE__ */ n(Nn, { "aria-hidden": "true", size: "xs", src: l, alt: t }) : ki(a) ? /* @__PURE__ */ n(a, { "data-icon": !0, "aria-hidden": "true" }) : Yt(a) ? a : null,
            /* @__PURE__ */ L("div", { className: "flex w-full min-w-0 flex-1 flex-wrap gap-x-2", children: [
              /* @__PURE__ */ n(
                Dl,
                {
                  slot: "label",
                  className: k(
                    "truncate text-sm font-medium whitespace-nowrap text-primary",
                    p.isDisabled && "text-disabled"
                  ),
                  children: t || (typeof d == "function" ? d(p) : d)
                }
              ),
              r && /* @__PURE__ */ n(
                Dl,
                {
                  slot: "description",
                  className: k(
                    "text-sm whitespace-nowrap text-tertiary",
                    p.isDisabled && "text-disabled"
                  ),
                  children: r
                }
              )
            ] }),
            p.isSelected && /* @__PURE__ */ n(
              Io,
              {
                "aria-hidden": "true",
                className: k(
                  "ml-auto text-fg-brand-primary",
                  c === "sm" ? "size-4 stroke-[2.5px]" : "size-5",
                  p.isDisabled && "text-fg-disabled"
                )
              }
            )
          ]
        }
      )
    }
  );
}, mn = {
  sm: { root: "h-8 py-2 px-2.5", shortcut: "pr-2.5" },
  md: { root: "h-10 py-2.5 px-3.5", shortcut: "pr-3" }
}, K3 = ({
  isOpen: t,
  isFocused: e,
  isDisabled: i,
  size: l,
  placeholder: r,
  placeholderIcon: o,
  ref: a
}) => /* @__PURE__ */ n(
  Vt,
  {
    ref: a,
    className: k(
      "relative flex w-full cursor-pointer items-center rounded-lg bg-primary ring-1 ring-primary outline-hidden transition duration-100 ease-linear ring-inset",
      (e || t) && "ring-2 ring-brand",
      i && "cursor-not-allowed bg-disabled_subtle text-disabled"
    ),
    children: /* @__PURE__ */ n(
      B6,
      {
        className: k(
          "flex h-max w-full items-center justify-start gap-2 truncate text-left align-middle",
          // Icon styles
          "*:data-icon:size-5 *:data-icon:shrink-0 *:data-icon:text-fg-quaternary in-disabled:*:data-icon:text-fg-disabled",
          mn[l].root
        ),
        children: (s) => {
          const d = s.selectedItem?.icon || o;
          return /* @__PURE__ */ L(nt, { children: [
            s.selectedItem?.avatarUrl ? /* @__PURE__ */ n(
              Nn,
              {
                size: "xs",
                src: s.selectedItem.avatarUrl,
                alt: s.selectedItem.label
              }
            ) : ki(d) ? /* @__PURE__ */ n(d, { "data-icon": !0, "aria-hidden": "true" }) : Yt(d) ? d : null,
            s.selectedItem ? /* @__PURE__ */ L("section", { className: "flex w-full gap-2 truncate", children: [
              /* @__PURE__ */ n("p", { className: "truncate text-sm font-medium text-primary", children: s.selectedItem?.label }),
              s.selectedItem?.supportingText && /* @__PURE__ */ n("p", { className: "text-sm text-tertiary", children: s.selectedItem?.supportingText })
            ] }) : /* @__PURE__ */ n(
              "p",
              {
                className: k(
                  "text-sm text-placeholder",
                  i && "text-disabled"
                ),
                children: r
              }
            ),
            /* @__PURE__ */ n(
              Tl,
              {
                "aria-hidden": "true",
                className: k(
                  "ml-auto shrink-0 text-fg-quaternary",
                  l === "sm" ? "size-4 stroke-[2.5px]" : "size-5"
                )
              }
            )
          ] });
        }
      }
    )
  }
), $r = U({
  size: "sm"
}), A3 = ({
  placeholder: t = "Select",
  placeholderIcon: e,
  size: i = "sm",
  children: l,
  items: r,
  label: o,
  hint: a,
  tooltip: s,
  className: d,
  ...u
}) => /* @__PURE__ */ n($r.Provider, { value: { size: i }, children: /* @__PURE__ */ n(
  N6,
  {
    ...u,
    className: (c) => k(
      "flex flex-col gap-1.5",
      typeof d == "function" ? d(c) : d
    ),
    children: (c) => /* @__PURE__ */ L(nt, { children: [
      o && /* @__PURE__ */ n(Rt, { isRequired: c.isRequired, tooltip: s, children: o }),
      /* @__PURE__ */ n(
        K3,
        {
          ...c,
          size: i,
          placeholder: t,
          placeholderIcon: e
        }
      ),
      /* @__PURE__ */ n(xr, { size: i, className: u.popoverClassName, children: /* @__PURE__ */ n(br, { items: r, className: "size-full outline-hidden", children: l }) }),
      a && /* @__PURE__ */ n(Bt, { isInvalid: c.isInvalid, children: a })
    ] })
  }
) }), D2 = A3;
D2.ComboBox = F3;
D2.Item = $2;
const B8 = ({
  label: t,
  hint: e,
  options: i,
  className: l,
  ...r
}) => {
  const o = Sl(), a = `select-native-${o}`, s = `select-native-hint-${o}`;
  return /* @__PURE__ */ L("div", { className: k("w-full in-data-input-wrapper:w-max", l), children: [
    t && /* @__PURE__ */ n(Rt, { htmlFor: a, id: a, className: "mb-1.5", children: t }),
    /* @__PURE__ */ L("div", { className: "relative grid w-full items-center", children: [
      /* @__PURE__ */ n(
        "select",
        {
          ...r,
          id: a,
          defaultValue: "default",
          "aria-describedby": s,
          "aria-labelledby": a,
          className: k(
            "appearance-none rounded-lg bg-primary px-3.5 py-2.5 text-sm font-medium text-primary ring-1 ring-primary outline-hidden transition duration-100 ease-linear ring-inset placeholder:text-fg-quaternary focus-visible:ring-2 focus-visible:ring-brand disabled:cursor-not-allowed disabled:bg-disabled_subtle disabled:text-disabled",
            // Styles when the select is within an `InputGroup`
            "in-data-input-wrapper:flex in-data-input-wrapper:h-full in-data-input-wrapper:gap-1 in-data-input-wrapper:bg-inherit in-data-input-wrapper:px-3 in-data-input-wrapper:py-2 in-data-input-wrapper:font-normal in-data-input-wrapper:text-tertiary in-data-input-wrapper:shadow-none in-data-input-wrapper:ring-transparent",
            // Styles for the select when `TextField` is disabled
            "in-data-input-wrapper:group-disabled:pointer-events-none in-data-input-wrapper:group-disabled:cursor-not-allowed in-data-input-wrapper:group-disabled:bg-transparent in-data-input-wrapper:group-disabled:text-disabled",
            // Common styles for sizes and border radius within `InputGroup`
            "in-data-input-wrapper:in-data-leading:rounded-r-none in-data-input-wrapper:in-data-trailing:rounded-l-none in-data-input-wrapper:in-data-[input-size=md]:py-2.5 in-data-input-wrapper:in-data-leading:in-data-[input-size=md]:pl-3.5 in-data-input-wrapper:in-data-[input-size=sm]:py-2 in-data-input-wrapper:in-data-[input-size=sm]:pl-3",
            // For "leading" dropdown within `InputGroup`
            "in-data-input-wrapper:in-data-leading:in-data-[input-size=md]:pr-4.5 in-data-input-wrapper:in-data-leading:in-data-[input-size=sm]:pr-4.5",
            // For "trailing" dropdown within `InputGroup`
            "in-data-input-wrapper:in-data-trailing:in-data-[input-size=md]:pr-8 in-data-input-wrapper:in-data-trailing:in-data-[input-size=sm]:pr-7.5"
          ),
          children: i.map((d) => /* @__PURE__ */ n("option", { value: d.value, children: d.label }, d.value))
        }
      ),
      /* @__PURE__ */ n(
        Tl,
        {
          "aria-hidden": "true",
          className: "pointer-events-none absolute right-3.5 size-5 text-fg-quaternary in-data-input-wrapper:right-0 in-data-input-wrapper:size-4 in-data-input-wrapper:stroke-[2.625px] in-data-input-wrapper:in-data-trailing:in-data-[input-size=sm]:right-3 in-data-input-wrapper:in-data-trailing:in-data-[input-size=md]:right-3.5"
        }
      )
    ] }),
    e && /* @__PURE__ */ n(Bt, { className: "mt-2", id: s, children: e })
  ] });
}, No = {
  sm: { root: "p-0.5", icon: "size-2.5" },
  md: { root: "p-0.5", icon: "size-3" },
  lg: { root: "p-[3px]", icon: "size-3.5" }
}, B3 = ({
  size: t = "md",
  className: e,
  ...i
}) => /* @__PURE__ */ n(
  Vt,
  {
    slot: "remove",
    "aria-label": "Remove this tag",
    className: k(
      "flex cursor-pointer rounded-[3px] text-fg-quaternary outline-focus-ring transition duration-100 ease-linear hover:bg-primary_hover hover:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed",
      No[t].root,
      e
    ),
    ...i,
    children: /* @__PURE__ */ n(
      Uo,
      {
        className: k("transition-inherit-all", No[t].icon),
        strokeWidth: "3"
      }
    )
  }
), k2 = U({
  size: "sm",
  selectedKeys: [],
  selectedItems: {},
  onRemove: () => {
  },
  onInputChange: () => {
  }
}), R3 = ({
  name: t,
  items: e,
  children: i,
  className: l,
  size: r = "sm",
  selectedItems: o,
  onItemCleared: a,
  onItemInserted: s,
  shortcut: d,
  placeholder: u = "Search",
  ...c
}) => {
  const { contains: f } = xa({ sensitivity: "base" }), h = o.items.map((M) => M?.id), p = oe(
    (M, F) => !h.includes(M.id) && f(M.label ?? "", F),
    [f, h]
  ), m = Gu({
    initialItems: e,
    filter: p
  }), [b, v] = ne({
    selectedKey: null,
    inputValue: ""
  }), g = oe(
    (M) => {
      const F = M.values().next().value;
      F && (o.remove(F), a?.(F));
    },
    [o, a]
  ), y = (M) => {
    if (!M)
      return;
    const F = m.getItem(M);
    F && (h.includes(M) || (o.append(F), v({
      inputValue: "",
      selectedKey: M
    }), s?.(M)), m.setFilterText(""));
  }, $ = (M) => {
    v((F) => ({
      inputValue: M,
      selectedKey: M === "" ? null : F.selectedKey
    })), m.setFilterText(M);
  }, _ = N(null), [Z, D] = ne(""), A = oe(() => {
    if (!_.current) return;
    let M = _.current?.getBoundingClientRect();
    D(M.width + "px");
  }, [_, D]);
  return x2({
    ref: _,
    onResize: A,
    box: "border-box"
  }), /* @__PURE__ */ n(
    k2.Provider,
    {
      value: {
        size: r,
        selectedKeys: h,
        selectedItems: o,
        onInputChange: $,
        onRemove: g
      },
      children: /* @__PURE__ */ n(
        t2,
        {
          allowsEmptyCollection: !0,
          menuTrigger: "focus",
          items: m.items,
          onInputChange: $,
          inputValue: b.inputValue,
          selectedKey: b.selectedKey,
          onSelectionChange: y,
          ...c,
          children: (M) => /* @__PURE__ */ L("div", { className: "flex flex-col gap-1.5", children: [
            c.label && /* @__PURE__ */ n(Rt, { isRequired: M.isRequired, tooltip: c.tooltip, children: c.label }),
            /* @__PURE__ */ n(
              z3,
              {
                size: r,
                shortcut: d,
                ref: _,
                placeholder: u,
                onFocus: A,
                onPointerEnter: A
              }
            ),
            /* @__PURE__ */ n(
              xr,
              {
                size: "md",
                triggerRef: _,
                style: { width: Z },
                className: c?.popoverClassName,
                children: /* @__PURE__ */ n(
                  br,
                  {
                    selectionMode: "multiple",
                    className: "size-full outline-hidden",
                    children: i
                  }
                )
              }
            ),
            c.hint && /* @__PURE__ */ n(Bt, { isInvalid: M.isInvalid, children: c.hint })
          ] })
        }
      )
    }
  );
}, I3 = ({
  isDisabled: t,
  shortcut: e,
  shortcutClassName: i,
  placeholder: l
}) => {
  const r = Q0(), o = J(k2), a = (u) => {
    if (!(!(u.currentTarget.selectionStart === 0 && u.currentTarget.selectionEnd === 0) && u.currentTarget.value !== ""))
      switch (u.key) {
        case "Backspace":
        case "ArrowLeft":
          r?.focusPrevious({ wrap: !1, tabbable: !1 });
          break;
        case "ArrowRight":
          r?.focusNext({ wrap: !1, tabbable: !1 });
          break;
      }
  }, s = (u, c) => {
    u.preventDefault();
    const f = o?.selectedItems?.items?.[0]?.id === c;
    switch (u.key) {
      case " ":
      case "Enter":
      case "Backspace":
        f ? r?.focusNext({ wrap: !1, tabbable: !1 }) : r?.focusPrevious({ wrap: !1, tabbable: !1 }), o.onRemove(/* @__PURE__ */ new Set([c]));
        break;
      case "ArrowLeft":
        r?.focusPrevious({ wrap: !1, tabbable: !1 });
        break;
      case "ArrowRight":
        r?.focusNext({ wrap: !1, tabbable: !1 });
        break;
    }
  }, d = o?.selectedItems?.items?.length === 0;
  return /* @__PURE__ */ L("div", { className: "relative flex w-full flex-1 flex-row flex-wrap items-center justify-start gap-1.5", children: [
    !d && o?.selectedItems?.items?.map((u) => /* @__PURE__ */ L(
      "span",
      {
        className: "flex items-center rounded-md bg-primary py-0.5 pr-1 pl-[5px] ring-1 ring-primary ring-inset",
        children: [
          /* @__PURE__ */ n(Nn, { size: "xxs", alt: u?.label, src: u?.avatarUrl }),
          /* @__PURE__ */ n("p", { className: "ml-[5px] truncate text-sm font-medium whitespace-nowrap text-secondary select-none", children: u?.label }),
          /* @__PURE__ */ n(
            B3,
            {
              size: "md",
              isDisabled: t,
              className: "ml-[3px]",
              onKeyDown: (c) => s(c, u.id),
              onPress: () => o.onRemove(/* @__PURE__ */ new Set([u.id]))
            }
          )
        ]
      },
      u.id
    )),
    /* @__PURE__ */ L(
      "div",
      {
        className: k(
          "relative flex min-w-[20%] flex-1 flex-row items-center",
          !d && "ml-0.5",
          e && "min-w-[30%]"
        ),
        children: [
          /* @__PURE__ */ n(
            dr,
            {
              placeholder: l,
              onKeyDown: a,
              className: "w-full flex-[1_0_0] appearance-none bg-transparent text-sm text-ellipsis text-primary caret-alpha-black/90 outline-none placeholder:text-placeholder focus:outline-hidden disabled:cursor-not-allowed disabled:text-disabled disabled:placeholder:text-disabled"
            }
          ),
          e && /* @__PURE__ */ n(
            "div",
            {
              "aria-hidden": "true",
              className: k(
                "absolute inset-y-0.5 right-0.5 z-10 flex items-center rounded-r-[inherit] bg-linear-to-r from-transparent to-bg-primary to-40% pl-8",
                i
              ),
              children: /* @__PURE__ */ n(
                "span",
                {
                  className: k(
                    "pointer-events-none rounded px-1 py-px text-xs font-medium text-quaternary ring-1 ring-secondary select-none ring-inset",
                    t && "bg-transparent text-disabled"
                  ),
                  children: "⌘K"
                }
              )
            }
          )
        ]
      }
    )
  ] });
}, z3 = ({
  size: t,
  isDisabled: e,
  shortcut: i,
  placeholder: l,
  shortcutClassName: r,
  placeholderIcon: o = Kl,
  ...a
}) => /* @__PURE__ */ n(
  pr,
  {
    ...a,
    className: ({ isFocusWithin: s, isDisabled: d }) => k(
      "relative flex w-full items-center gap-2 rounded-lg bg-primary ring-1 ring-primary outline-hidden transition duration-100 ease-linear ring-inset",
      d && "cursor-not-allowed bg-disabled_subtle",
      s && "ring-2 ring-brand",
      mn[t].root
    ),
    children: ({ isDisabled: s }) => /* @__PURE__ */ L(nt, { children: [
      o && /* @__PURE__ */ n(o, { className: "pointer-events-none size-5 text-fg-quaternary" }),
      /* @__PURE__ */ n(xn, { contain: !1, autoFocus: !1, restoreFocus: !1, children: /* @__PURE__ */ n(
        I3,
        {
          isDisabled: s,
          size: t,
          shortcut: i,
          shortcutClassName: r,
          placeholder: l
        }
      ) })
    ] })
  }
), O3 = R3;
O3.Item = $2;
const U3 = {
  default: "hidden",
  bottom: "absolute top-2 left-1/2 -translate-x-1/2 translate-y-full text-md font-medium text-primary",
  "top-floating": "absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-secondary shadow-lg ring-1 ring-secondary_alt"
}, R8 = ({
  labelPosition: t = "default",
  minValue: e = 0,
  maxValue: i = 100,
  labelFormatter: l,
  formatOptions: r,
  ...o
}) => /* @__PURE__ */ L(
  V6,
  {
    ...o,
    minValue: e,
    maxValue: i,
    formatOptions: r ?? {
      style: "percent",
      maximumFractionDigits: 0
    },
    children: [
      /* @__PURE__ */ n(n4, {}),
      /* @__PURE__ */ n(y6, { className: "relative h-2 w-full rounded-full bg-quaternary", children: ({
        state: { values: s, getThumbValue: d, getThumbPercent: u, getFormattedValue: c }
      }) => {
        const f = s.length === 1 ? 0 : u(0), h = s.length === 1 ? u(0) : u(1) - f;
        return /* @__PURE__ */ L(nt, { children: [
          /* @__PURE__ */ n(
            "span",
            {
              className: "absolute z-10 h-2 w-full rounded-full bg-brand-solid",
              style: {
                left: `${f * 100}%`,
                width: `${h * 100}%`
              }
            }
          ),
          s.map((p, m) => /* @__PURE__ */ n(
            w6,
            {
              index: m,
              className: ({ isFocusVisible: b, isDragging: v }) => k(
                "absolute top-1/2 z-20 box-border size-6 cursor-grab rounded-full bg-slider-handle-bg shadow-md ring-2 ring-slider-handle-border ring-inset",
                b && "outline-2 outline-offset-2 outline-focus-ring",
                v && "cursor-grabbing"
              ),
              children: /* @__PURE__ */ n(
                H6,
                {
                  className: k("whitespace-nowrap", U3[t]),
                  children: l ? l(d(m)) : c(d(m) / 100)
                }
              )
            },
            m
          ))
        ] });
      } })
    ]
  }
), G3 = ({
  className: t,
  isHovered: e,
  isDisabled: i,
  isFocusVisible: l,
  isSelected: r,
  size: o = "sm"
}) => {
  const s = {
    default: {
      sm: {
        root: "h-5 w-9 p-0.5",
        switch: k("size-4", r && "translate-x-4")
      },
      md: {
        root: "h-6 w-11 p-0.5",
        switch: k("size-5", r && "translate-x-5")
      }
    }
  }.default[o];
  return /* @__PURE__ */ n(
    "div",
    {
      className: k(
        "cursor-pointer rounded-full bg-tertiary outline-focus-ring transition duration-150 ease-linear",
        r && "bg-brand-solid",
        r && e && "bg-brand-solid_hover",
        i && "cursor-not-allowed bg-disabled",
        l && "outline-2 outline-offset-2",
        s.root,
        t
      ),
      children: /* @__PURE__ */ n(
        "div",
        {
          style: {
            transition: "transform 0.15s ease-in-out, translate 0.15s ease-in-out, border-color 0.1s linear, background-color 0.1s linear"
          },
          className: k(
            "rounded-full bg-fg-white shadow-sm",
            i && "bg-toggle-button-fg_disabled",
            s.switch
          )
        }
      )
    }
  );
}, I8 = ({
  label: t,
  hint: e,
  className: i,
  size: l = "sm",
  ...r
}) => {
  const o = {
    sm: {
      root: "gap-2",
      textWrapper: "",
      label: "text-sm font-medium",
      hint: "text-sm"
    },
    md: {
      root: "gap-3",
      textWrapper: "gap-0.5",
      label: "text-md font-medium",
      hint: "text-md"
    }
  };
  return /* @__PURE__ */ n(
    I6,
    {
      ...r,
      className: (a) => k(
        "flex w-max items-start",
        a.isDisabled && "cursor-not-allowed",
        o[l].root,
        typeof i == "function" ? i(a) : i
      ),
      children: ({ isSelected: a, isDisabled: s, isFocusVisible: d, isHovered: u }) => /* @__PURE__ */ L(nt, { children: [
        /* @__PURE__ */ n(
          G3,
          {
            size: l,
            isHovered: u,
            isDisabled: s,
            isFocusVisible: d,
            isSelected: a,
            className: ""
          }
        ),
        (t || e) && /* @__PURE__ */ L("div", { className: k("flex flex-col", o[l].textWrapper), children: [
          t && /* @__PURE__ */ n(
            "p",
            {
              className: k(
                "text-secondary select-none",
                o[l].label
              ),
              children: t
            }
          ),
          e && /* @__PURE__ */ n(
            "span",
            {
              className: k("text-tertiary", o[l].hint),
              onClick: (c) => c.stopPropagation(),
              children: e
            }
          )
        ] })
      ] })
    }
  );
}, z8 = ({
  variant: t = "ActablSymbol",
  svgClassName: e,
  ...i
}) => {
  const l = Q3[t];
  return /* @__PURE__ */ n(l, { ...i });
}, W3 = ({
  className: t,
  svgClassName: e,
  childrenClassName: i,
  ...l
}) => /* @__PURE__ */ n("div", { ...l, className: k("h-[80px] w-[80px]", t), children: /* @__PURE__ */ n(
  "svg",
  {
    viewBox: "0 0 80 80",
    fill: "none",
    className: k("size-full text-inherit", e),
    children: /* @__PURE__ */ n(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M58.8443 53.9041C57.4181 52.8422 56.4142 51.8865 55.8859 50.9838C55.3575 50.0812 55.0936 48.9132 55.0936 47.4796V34.5775C55.0936 25.2859 49.3875 20.6667 37.9757 20.6667C33.9074 20.6667 30.7378 21.2507 28.4129 22.3126C26.0884 23.4276 24.1862 24.9674 22.654 26.985L29.6811 31.9228C31.0018 30.4892 32.2696 29.4804 33.5379 28.8433C34.8057 28.2062 36.2851 27.8876 37.9757 27.8876C40.5646 27.8876 42.3607 28.4185 43.259 29.5335C44.1569 30.6485 44.6853 31.9759 44.7912 33.5687C44.7385 34.4183 44.3685 35.0023 43.7874 35.374C43.153 35.7456 42.0968 36.0111 40.5646 36.1704L36.7602 36.5421C34.119 36.8075 31.7413 37.2323 29.5751 37.8694C27.409 38.5066 25.4545 39.7277 23.8167 41.4268C22.1789 43.1789 21.3334 45.6213 21.3334 48.807C21.3334 52.3643 22.4428 55.1253 24.6618 57.0367C26.8807 59.0012 29.8395 59.9569 33.5906 59.9569C36.5491 59.9569 39.0324 59.4259 41.0401 58.3109C43.0475 57.1959 44.6325 55.8155 45.7947 54.1695C46.9042 56.5057 48.9647 58.4171 51.9763 59.9569L58.8443 53.9041ZM44.7912 45.5151C44.7912 47.4796 44.0513 49.1786 42.5719 50.506C41.0929 51.8865 38.9796 52.5767 36.2851 52.4705C34.7529 52.4705 33.5379 52.0988 32.6396 51.3555C31.7413 50.6122 31.3189 49.5503 31.3189 48.1698C31.3189 46.3646 31.9001 45.0903 33.1151 44.4532C34.3301 43.816 35.8096 43.3913 37.6057 43.232L39.9834 43.0196C42.3607 42.7541 43.9457 42.4887 44.7912 42.1701V45.5151Z",
        fill: "#161B79"
      }
    )
  }
) }), j3 = ({
  className: t,
  svgClassName: e,
  childrenClassName: i,
  ...l
}) => /* @__PURE__ */ n("div", { ...l, className: k("h-[80px] w-[80px]", t), children: /* @__PURE__ */ n(
  "svg",
  {
    viewBox: "0 0 80 80",
    fill: "none",
    className: k("size-full text-inherit", e),
    children: /* @__PURE__ */ n(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M73.3244 60.7519C73.1564 60.4999 46.8597 18.9405 45.6975 17.0782C45.2494 16.3501 44.6333 16 43.7652 16C41.4128 16.014 39.0603 16.014 36.7079 16C35.8958 16 35.2937 16.3221 34.8736 17.0082C34.4255 17.7363 7.97484 58.7496 6.57459 60.934C6.01449 61.8021 6.36455 62.6843 7.37273 62.8943C7.55476 62.9363 15.0741 62.9643 18.6727 62.9643C18.9668 62.9643 19.1068 62.8803 19.2048 62.6002C19.7369 61.102 20.465 59.7017 21.5012 58.4695C22.9995 56.6912 24.8898 55.795 27.2002 55.795C35.7418 55.781 53.0348 55.753 53.4549 55.795C56.0033 56.0331 57.5996 57.2513 58.8178 58.8196C59.686 59.9678 60.3581 61.242 60.8342 62.6002C60.9322 62.8803 61.0863 62.9643 61.3803 62.9643C63.1726 62.9503 70.3419 62.9783 72.1482 62.9503C72.6943 62.9363 73.2684 62.8943 73.5765 62.3202C73.8425 61.7461 73.6605 61.256 73.3244 60.7519ZM53.4269 52.4064C48.9461 52.4064 30.9949 52.4064 26.5001 52.4204C26.1361 52.4204 26.066 52.3364 26.1361 52.0004C26.6681 49.5079 27.6483 47.2535 29.3146 45.3072C31.0369 43.2768 33.5854 41.4285 37.5761 41.0224V38.9221H38.8783V37.4658H37.5901V35.4914H42.4489V37.4658H41.1467V38.9221H42.4489V41.0224C48.7361 41.7786 51.2985 45.9093 52.1247 47.2955C52.9648 48.7238 53.4969 50.2641 53.861 51.8744C53.959 52.4064 53.973 52.4064 53.4269 52.4064Z",
        fill: "#161B79"
      }
    )
  }
) }), q3 = ({
  className: t,
  svgClassName: e,
  childrenClassName: i,
  ...l
}) => /* @__PURE__ */ n("div", { ...l, className: k("h-[80px] w-[80px]", t), children: /* @__PURE__ */ L(
  "svg",
  {
    viewBox: "0 0 80 80",
    fill: "none",
    className: k("size-full text-inherit", e),
    children: [
      /* @__PURE__ */ n(
        "path",
        {
          d: "M68.6666 21.0836V23.5022L43.169 19.1401L34.1187 23.5022V20.9973L43.2705 16.1745L68.6666 21.0836Z",
          fill: "#161B79"
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M68.6666 28.7569V31.8089L43.169 28.0514L34.1187 31.6505V28.7569L43.2705 25.0858L68.6666 28.7569Z",
          fill: "#161B79"
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M43.2271 34.0548L68.6667 37.0348V39.6549L43.2561 36.8477L37.1935 38.748L37.1935 38.9927L18.2515 36.1278L11.3333 39.151V37.0348L18.2515 33.81L35.366 36.6173L43.2271 34.0548Z",
          fill: "#161B79"
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M68.6666 44.7944L43.227 43.0092L37.3095 43.9018V47.0402L43.1255 46.0469L68.6666 47.5729V44.7944Z",
          fill: "#161B79"
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M68.6666 55.3181V52.5972L43.227 51.8054L37.1064 52.2805V54.675L18.2225 53.7777L11.3333 54.6415V57.0313L18.2225 56.1531L37.3095 56.7865V55.3094L43.169 55.059L68.6666 55.3181Z",
          fill: "#161B79"
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M68.6666 60.5296V63.1497L43.14 63.8551L37.1064 63.3945V62.8186H18.2225L11.3333 62.6602V60.5296H18.3096L37.1064 60.7023L43.256 60.7743L68.6666 60.5296Z",
          fill: "#161B79"
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M37.3095 43.1964V45.4567L18.2225 43.0093L11.3333 45.4567V43.1676L18.3096 40.5187L37.3095 43.1964Z",
          fill: "#161B79"
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M37.3095 51.0424V48.7678L18.2661 47.1266L11.3333 48.7678V51.0424L18.1935 49.502L37.3095 51.0424Z",
          fill: "#161B79"
        }
      )
    ]
  }
) }), Y3 = ({
  className: t,
  svgClassName: e,
  childrenClassName: i,
  ...l
}) => /* @__PURE__ */ n("div", { ...l, className: k("h-[80px] w-[80px]", t), children: /* @__PURE__ */ L(
  "svg",
  {
    viewBox: "0 0 80 80",
    fill: "none",
    className: k("size-full text-inherit", e),
    children: [
      /* @__PURE__ */ n(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M44.438 36.8125L47.6286 38.4635C51.046 40.1896 51.424 42.8612 51.424 43.9419C51.424 47.7092 48.4602 50.5759 44.5136 50.5759C42.7445 50.5759 40.9148 49.9905 39.191 48.8649C38.7374 49.3902 38.4803 49.9155 38.3896 50.4558C38.3896 50.5309 38.314 50.5909 38.2535 50.5909H37.3916C37.316 50.5909 37.2555 50.5159 37.2555 50.4408V43.3115H29.1506C29.075 43.3115 29.0145 43.2514 29.0145 43.1764V42.2308C29.0145 42.1558 29.075 42.0957 29.1506 42.0957C32.2655 42.0957 32.7797 41.3303 32.7797 36.6925V29.1129C32.7797 24.5051 32.2655 23.7546 29.1506 23.7546C29.075 23.7546 29.0145 23.6796 29.0145 23.6045V22.659C29.0145 22.5839 29.075 22.5089 29.1506 22.5089H39.0247C43.7425 22.5089 46.7969 24.8803 46.7969 28.5275C46.7969 28.6776 46.7969 28.8277 46.7818 28.9628C47.2203 29.1579 47.5983 29.383 47.9159 29.5932C48.1427 29.323 48.4451 28.9328 48.5207 28.3024C48.5207 28.2273 48.5812 28.1823 48.6568 28.1823H49.6095C49.6851 28.1823 49.7455 28.2423 49.7455 28.3174V36.3172C49.7455 36.4073 49.6851 36.4673 49.6095 36.4673H48.6568C48.5812 36.4673 48.5207 36.4073 48.5207 36.3473C48.3846 35.0265 47.9008 32.4149 46.177 31.0941C45.2697 32.8051 43.3947 33.9758 40.8997 34.3661H40.8543C41.4592 35.1615 42.6084 35.867 44.438 36.8125ZM40.4309 32.2498C40.6729 31.2892 41.4894 30.6888 42.4269 30.4187C42.064 31.2292 41.4289 31.9196 40.4309 32.2498ZM39.0398 24.5051H36.4692V32.4599H37.4823C38.072 30.1635 40.1588 28.4675 42.805 28.2423C42.7142 26.3812 41.686 24.5051 39.0398 24.5051ZM38.6466 43.2965C39.312 46.5234 41.5953 48.4296 44.8917 48.4296C46.9935 48.4296 48.4149 47.2139 48.43 45.3978C48.43 43.8968 47.2506 42.6211 44.6044 41.3153L41.3533 39.6643C39.0096 38.4485 37.6184 36.6324 37.3614 34.4861H36.4541V36.6625C36.4541 41.3003 36.9682 42.0657 40.0832 42.0657C40.1588 42.0657 40.2192 42.1258 40.2192 42.2008V43.1614C40.2192 43.2364 40.1588 43.2965 40.0832 43.2965H38.6466Z",
          fill: "#161B79"
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M17.205 45.1276V10.6667H62.7951L62.78 45.2927C62.16 50.771 59.6953 54.2381 55.3404 58.7258C51.1367 63.0635 46.056 66.3054 40.6578 68.0915L39.9925 68.3166L39.3271 68.0915C33.9591 66.3204 28.8785 63.0785 24.6597 58.7258C20.3048 54.2381 17.8249 50.6059 17.205 45.1276ZM54.4331 57.8703C58.5914 53.5777 60.9503 50.2907 61.5249 45.1126H61.5401V11.9275H18.4751V45.1876C19.0497 50.3057 21.4086 53.5927 25.5669 57.8703C28.4097 60.7971 33.1728 64.7445 39.7354 66.9208L39.9925 67.0108L40.2495 66.9208C45.3756 65.2248 50.4109 62.0128 54.4331 57.8703Z",
          fill: "#161B79"
        }
      )
    ]
  }
) }), X3 = ({
  className: t,
  svgClassName: e,
  childrenClassName: i,
  ...l
}) => /* @__PURE__ */ n("div", { ...l, className: k("h-[80px] w-[80px]", t), children: /* @__PURE__ */ L(
  "svg",
  {
    viewBox: "0 0 80 80",
    fill: "none",
    className: k("size-full text-inherit", e),
    children: [
      /* @__PURE__ */ n(
        "path",
        {
          d: "M42.0911 45.017V20.2069H59.854L55.4059 28.2936H60.4895L67.5385 16H12.4469L19.4959 28.2787H24.5795L20.1313 20.2069H37.909V45.017L39.9927 48.8374L42.0911 45.017Z",
          fill: "#161B79"
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M39.9927 64L21.4318 31.6531H26.4119L39.9927 56.4187L53.5735 31.6531H58.5536L39.9927 64Z",
          fill: "#161B79"
        }
      )
    ]
  }
) }), J3 = ({
  className: t,
  svgClassName: e,
  childrenClassName: i,
  ...l
}) => /* @__PURE__ */ n("div", { ...l, className: k("h-[113px] w-[56px]", t), children: /* @__PURE__ */ L(
  "svg",
  {
    viewBox: "0 0 113 56",
    fill: "none",
    className: k("h-full text-inherit", e),
    children: [
      /* @__PURE__ */ n(
        "path",
        {
          d: "M48.7728 13V21.5776H54.5575V25.8522H48.7728V34.1164C48.7728 35.3133 48.9431 36.1397 49.3116 36.6241C49.6802 37.1086 50.304 37.3365 51.183 37.3365H54.5292V41.6111H51.183C49.1981 41.6111 47.6385 41.3831 46.4759 40.8987C45.3417 40.4142 44.491 39.6448 43.9807 38.5619C43.4703 37.479 43.215 35.9972 43.215 34.1164V13H48.7728Z",
          fill: "#161B79"
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M20.1329 38.9039C19.3674 38.3339 18.8286 37.821 18.545 37.3365C18.2615 36.8521 18.1198 36.2252 18.1198 35.4557V28.5309C18.1198 23.5439 15.0572 21.0647 8.93228 21.0647C6.74874 21.0647 5.04755 21.3782 3.79972 21.9481C2.55211 22.5465 1.53118 23.373 0.708812 24.4558L4.48042 27.1061C5.18923 26.3367 5.86971 25.7952 6.5504 25.4532C7.23088 25.1113 8.02491 24.9403 8.93228 24.9403C10.3218 24.9403 11.2858 25.2253 11.768 25.8237C12.2499 26.4221 12.5334 27.1346 12.5903 27.9895C12.562 28.4454 12.3634 28.7589 12.0515 28.9584C11.7111 29.1579 11.1442 29.3004 10.3218 29.3858L8.27993 29.5853C6.8623 29.7278 5.58614 29.9558 4.42353 30.2978C3.26092 30.6397 2.21187 31.2952 1.33283 32.2071C0.453795 33.1475 0 34.4583 0 36.1682C0 38.0775 0.595471 39.5593 1.78641 40.5852C2.97736 41.6396 4.56542 42.1526 6.57873 42.1526C8.16658 42.1526 9.49942 41.8676 10.577 41.2691C11.6544 40.6707 12.5051 39.9298 13.1289 39.0464C13.7244 40.3002 14.8303 41.3262 16.4467 42.1526L20.1329 38.9039ZM12.5903 34.4013C12.5903 35.4557 12.1932 36.3677 11.3992 37.0801C10.6054 37.821 9.47108 38.1915 8.02491 38.1345C7.20254 38.1345 6.5504 37.935 6.06827 37.536C5.58614 37.1371 5.35946 36.5671 5.35946 35.8262C5.35946 34.8573 5.67136 34.1734 6.3235 33.8314C6.97564 33.4894 7.76968 33.2615 8.73372 33.176L10.0099 33.062C11.2858 32.9195 12.1365 32.777 12.5903 32.606V34.4013Z",
          fill: "#161B79"
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M22.7702 34.2589C22.7702 36.7951 23.5643 38.7329 25.1521 40.1008C26.7402 41.4686 29.0085 42.1526 31.9577 42.1526C33.9425 42.1526 35.5589 41.8676 36.8065 41.3261C38.0543 40.7847 39.0751 39.9298 39.8691 38.7899L36.0977 35.7122C35.4172 36.5101 34.7932 37.0801 34.2261 37.3935C33.6589 37.707 32.9218 37.878 31.9861 37.878C30.8235 37.878 29.9161 37.5645 29.2921 36.9376C28.6399 36.3107 28.328 35.4272 28.328 34.2589V28.9584C28.328 27.79 28.6683 26.9066 29.2921 26.2797C29.9161 25.6527 30.8235 25.3393 31.9861 25.3393C32.9218 25.3393 33.6589 25.5102 34.2261 25.8237C34.7932 26.1372 35.4172 26.7071 36.0977 27.505L39.8691 24.4274C38.2812 22.1761 35.6439 21.0647 31.9577 21.0647C29.0085 21.0647 26.7402 21.7486 25.1521 23.1165C23.5643 24.4843 22.7702 26.4221 22.7702 28.9584V34.2589Z",
          fill: "#161B79"
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M78.3485 38.9039C77.583 38.3339 77.0442 37.821 76.7606 37.3365C76.4487 36.8521 76.3068 36.2252 76.3352 35.4557V28.5309C76.3352 23.5439 73.2728 21.0647 67.1479 21.0647C64.9643 21.0647 63.2629 21.3782 62.0153 21.9481C60.7677 22.5465 59.7468 23.373 58.9244 24.4558L62.696 27.1061C63.4048 26.3367 64.0853 25.7952 64.766 25.4532C65.4464 25.1113 66.2405 24.9403 67.1479 24.9403C68.5374 24.9403 69.5014 25.2253 69.9835 25.8237C70.4654 26.4221 70.749 27.1346 70.8057 27.9895C70.7774 28.4454 70.579 28.7589 70.2671 28.9584C69.9267 29.1579 69.3595 29.3004 68.5371 29.3858L66.4955 29.5853C65.0779 29.7278 63.8017 29.9558 62.6391 30.2978C61.4765 30.6397 60.4274 31.2952 59.5484 32.2071C58.6694 33.1475 58.2156 34.4583 58.2156 36.1682C58.2156 38.0775 58.811 39.5593 60.002 40.5852C61.1929 41.6396 62.781 42.1526 64.7943 42.1526C66.3822 42.1526 67.715 41.8676 68.7926 41.2691C69.87 40.6707 70.7207 39.9298 71.3445 39.0464C71.94 40.3002 73.0459 41.3262 74.6623 42.1526L78.3485 38.9039ZM70.7774 34.4013C70.7774 35.4557 70.3804 36.3677 69.5864 37.0801C68.8209 37.821 67.6867 38.1915 66.2122 38.1345C65.3898 38.1345 64.7376 37.935 64.2555 37.536C63.7734 37.1371 63.5465 36.5671 63.5465 35.8262C63.5465 34.8573 63.8584 34.1734 64.5107 33.8314C65.1629 33.4894 65.9569 33.2615 66.921 33.176L68.1969 33.062C69.4731 32.9195 70.3238 32.777 70.7774 32.606V34.4013Z",
          fill: "#161B79"
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M86.9122 13V23.6579C88.3867 21.9196 90.4283 21.0647 93.0655 21.0647C94.9371 21.0647 96.5249 21.5206 97.8578 22.4041C99.1621 23.2875 100.155 24.4843 100.807 25.9947C101.459 27.4765 101.771 29.1294 101.771 30.9247V32.2926C101.771 34.0879 101.459 35.7407 100.807 37.2226C100.155 38.7044 99.1621 39.9013 97.8578 40.8132C96.5533 41.6966 94.9371 42.1526 93.0655 42.1526C90.4 42.1526 88.3584 41.3262 86.9122 39.6733V41.6396H81.3827V13H86.9122ZM95.0221 36.2537C95.8445 35.1708 96.2414 33.8599 96.2414 32.2926V30.9247C96.2414 29.3574 95.8445 28.0465 95.0221 26.9636C94.1997 25.8807 93.0088 25.3393 91.4493 25.3393C89.0674 25.3393 87.5643 26.5076 86.9122 28.8444V34.4013C87.5643 36.7381 89.0674 37.9065 91.4493 37.9065C93.0088 37.878 94.1997 37.3366 95.0221 36.2537Z",
          fill: "#161B79"
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M110.958 35.4557V13H105.457V35.6267C105.457 37.3365 105.741 38.6759 106.308 39.6163C106.875 40.5567 107.867 41.4116 109.314 42.1526L113 38.9039C112.234 38.3339 111.696 37.821 111.412 37.3365C111.1 36.8521 110.958 36.2252 110.958 35.4557Z",
          fill: "#161B79"
        }
      )
    ]
  }
) }), Q3 = {
  ActablSymbol: W3,
  AlSymbol: j3,
  HeSymbol: q3,
  PsSymbol: Y3,
  TrSymbol: X3,
  ActablFull: J3
}, e8 = (t, e, i = 5) => {
  const r = Math.min(Math.max(e, 0), i) - t;
  return r >= 1 ? 100 : r <= 0 ? 0 : Math.round(r * 100);
}, t8 = ({ progress: t = 100, ...e }) => {
  const i = Sl();
  return /* @__PURE__ */ L(
    "svg",
    {
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      ...e,
      className: k("size-5 text-warning-400", e.className),
      children: [
        /* @__PURE__ */ n(
          "path",
          {
            d: "M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z",
            className: "fill-bg-tertiary"
          }
        ),
        /* @__PURE__ */ n("g", { clipPath: `url(#clip-${i})`, children: /* @__PURE__ */ n(
          "path",
          {
            d: "M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z",
            fill: "currentColor"
          }
        ) }),
        /* @__PURE__ */ n("defs", { children: /* @__PURE__ */ n("clipPath", { id: `clip-${i}`, children: /* @__PURE__ */ n("rect", { width: `${t}%`, height: "20", fill: "white" }) }) })
      ]
    }
  );
}, i8 = ({
  rating: t = 5,
  stars: e = 5,
  starClassName: i,
  ...l
}) => /* @__PURE__ */ n("div", { ...l, className: k("flex", l.className), children: Array.from({ length: e }).map((r, o) => /* @__PURE__ */ n(
  t8,
  {
    progress: e8(o, t, e),
    className: i
  },
  o
)) }), Ko = (t) => /* @__PURE__ */ L(
  "svg",
  {
    width: "36",
    height: "81",
    viewBox: "0 0 36 81",
    fill: "none",
    ...t,
    className: k("text-fg-primary", t.className),
    children: [
      /* @__PURE__ */ n(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M34.188 79.123C21.8844 77.4193 12.9273 67.7396 8.84084 54.5087C7.16207 49.0327 6.91909 42.9593 7.50445 36.6094C8.58681 25.2702 13.7888 15.4245 21.3764 8.24482C21.4095 8.21163 21.4206 8.20057 21.4316 8.23376C21.4537 8.26695 21.52 8.30013 21.5531 8.32226C21.5973 8.34439 21.6083 8.32226 21.5752 8.37757C13.5237 15.7563 8.35488 27.4938 7.79161 39.3529C6.91909 56.2898 15.1362 71.2907 27.4509 76.4569C29.5162 77.3308 31.6809 77.9946 33.934 78.3375C34.0886 78.5367 34.177 78.8132 34.188 79.123Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M3.51737 50.8359C4.52243 52.0306 6.12388 53.2033 7.84683 52.7497C7.93518 52.8825 8.38801 53.5462 8.45428 53.6458C8.53159 53.7675 8.67517 53.8892 8.78561 53.7896C8.85188 53.7453 8.9071 53.6458 8.84084 53.4909C8.58681 53.1812 8.34383 52.8603 8.05667 52.5285C7.54863 49.8402 6.80864 48.0481 5.26241 46.2338C3.4732 44.1541 1.6398 43.2248 0.502216 42.8376C0.336548 42.7934 0.181926 42.7491 0.0162576 42.6938C-0.0941877 43.7337 0.380727 45.2493 0.756241 46.1121C1.48518 47.8822 2.28039 49.4309 3.51737 50.8359Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M18.317 12.9686C18.1735 13.0239 17.3341 13.2451 17.2347 13.0792C17.2015 13.0349 17.2457 12.869 17.323 12.8579C17.6323 12.8247 17.9747 12.8026 18.2729 12.7362C18.814 11.0326 20.3161 10.2914 21.6967 10.0038C23.3533 9.6719 25.1757 10.1808 27.1306 10.4573C27.23 10.4795 27.3404 10.4905 27.4288 10.4905C27.3956 10.5569 27.3515 10.6012 27.3073 10.6675C26.49 11.7849 25.2088 12.8137 23.9608 13.3226C23.1214 13.6766 22.1164 13.8757 21.1334 13.8425C20.0952 13.7983 19.2227 13.5659 18.317 12.9686Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M21.5531 8.3112C21.6194 8.33332 21.6194 8.3112 21.7408 8.24482C21.9728 8.02357 22.1716 7.89082 22.4035 7.68063C23.7289 7.69169 24.9879 7.29344 26.1807 6.49693C26.7109 6.14293 27.241 5.71148 27.6828 5.19154C28.7431 4.05209 29.5935 2.38164 29.9801 0.854996C30.0022 0.766495 30.0132 0.711182 30.0242 0.622681C29.9248 0.666931 29.8365 0.711183 29.7371 0.755433C27.5945 1.61832 25.5181 2.01657 23.7951 3.68703C22.6244 4.80435 22.017 6.15399 22.2599 7.45938C21.9949 7.66957 21.7188 7.86869 21.4647 8.11207C21.3543 8.21163 21.4868 8.3112 21.5531 8.3112Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M13.7557 20.1039C13.6121 20.1814 12.8058 20.6018 12.6843 20.4579C12.6291 20.4026 12.6512 20.2256 12.7285 20.1924C13.0267 20.0818 13.3801 20.0044 13.6783 19.8716C13.7888 18.6658 14.4625 17.5374 15.7989 16.763C17.8421 15.6789 20.1615 15.8559 22.3483 15.6678C22.4587 15.6568 22.5581 15.6568 22.6575 15.6457C22.6244 15.7121 22.5913 15.7674 22.5692 15.8338C21.8402 17.0949 20.6585 18.4556 19.4546 19.23C18.6484 19.7721 17.6544 20.1814 16.6604 20.3805C15.6111 20.5907 14.7165 20.469 13.7557 20.1039Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M3.0535 38.7113C3.71618 40.2047 4.90898 41.842 6.65402 41.9526C6.70924 42.1075 7.02953 42.8266 7.07371 42.9372C7.10685 43.0921 7.21729 43.258 7.36087 43.1916C7.42714 43.1695 7.4934 43.081 7.48236 42.9261C7.31669 42.5279 7.10685 42.2181 6.90804 41.8088C7.06267 39.0653 6.90804 37.0629 5.85881 34.8062C4.666 32.2064 3.03141 30.713 2.02636 29.9829C1.90487 29.8722 1.76129 29.7837 1.61771 29.6952C1.38578 30.7572 1.46309 32.4056 1.60667 33.357C1.86069 35.2818 2.26934 36.9744 3.0535 38.7113Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M5.00838 27.6929C5.29554 29.2859 6.01344 30.89 7.60385 31.5869C7.62594 31.7529 7.80265 32.5273 7.82474 32.6489C7.82474 32.8149 7.87996 33.0029 8.03458 32.9808C8.07876 32.9698 8.18921 32.9255 8.20025 32.7596C8.13399 32.3392 8.0125 31.8635 7.93519 31.4099C8.46532 29.474 8.75248 27.704 8.66412 25.8123C8.52054 23.1462 7.52654 20.8341 5.95821 18.9756C5.83672 18.8428 5.74837 18.699 5.63792 18.5773C5.19614 19.4955 4.90898 21.0664 4.83167 22.0067C4.666 23.9095 4.67705 25.8233 5.00838 27.6929Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M9.01755 17.637C8.97337 19.2742 9.37097 21.1106 10.7405 22.1727C10.7295 22.3386 10.6963 23.1351 10.6963 23.2457C10.6742 23.4006 10.6853 23.5887 10.8399 23.6219C10.8951 23.6219 10.9945 23.6108 11.0277 23.4559C11.0608 23.0466 11.0718 22.416 11.0939 21.9625C12.2646 19.9712 12.8942 17.8029 12.9163 15.3249C12.9604 12.4597 12.2536 10.6343 11.6903 9.48383C11.613 9.32896 11.5357 9.17408 11.4584 9.01921C10.8399 9.77146 10.2545 11.2096 9.98947 12.0946C9.45933 13.8868 9.07277 15.7563 9.01755 17.637Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M15.092 8.45501C14.7386 9.99271 14.838 12.2495 15.9867 13.1787C15.9425 13.3779 15.8431 14.0638 15.832 14.2186C15.7878 14.3846 15.7547 14.5394 15.8872 14.6058C15.9425 14.6279 15.9866 14.628 16.0529 14.4841C16.1302 14.0527 16.1523 13.6987 16.2186 13.2562C17.8532 11.5083 18.7809 9.78252 19.3 7.42619C19.8191 4.95923 19.7418 3.00114 19.5209 1.61832C19.4988 1.45238 19.4546 1.28644 19.4105 1.10944C17.9747 2.25995 16.9586 3.77553 16.0971 5.50129C15.6332 6.44162 15.2688 7.40406 15.092 8.45501Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M10.0889 29.5182C9.95633 29.6399 9.22739 30.3369 9.05068 30.2484C9.0065 30.2041 8.97337 29.9718 9.05068 29.9275C9.32679 29.7063 9.68022 29.5404 9.95633 29.3302C9.86798 28.0026 10.1662 26.653 11.37 25.3919C13.2255 23.5887 15.6884 22.9802 17.9305 22.051C18.0299 22.0067 18.1293 21.9514 18.2508 21.9071C18.2287 21.9846 18.2176 22.0731 18.1845 22.1505C17.7427 23.6993 16.8592 25.5025 15.7878 26.7194C15.092 27.538 14.1533 28.3235 13.1703 28.8434C12.1432 29.3965 11.1712 29.5735 10.0889 29.5182Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M8.54263 40.3264C8.44323 40.5034 7.85787 41.4548 7.67012 41.4105C7.5928 41.4105 7.51549 41.1782 7.57072 41.0897C7.81369 40.7689 8.12294 40.5145 8.33279 40.1826C7.95727 38.9657 8.13399 37.2067 9.03964 35.5252C10.4754 33.0693 12.5739 31.8746 14.6061 30.1599C14.6944 30.0714 14.7828 29.9939 14.8822 29.8944C14.8932 29.9718 14.9043 30.0603 14.8932 30.1599C14.8491 31.8414 14.4073 33.9543 13.6231 35.5474C13.1151 36.6204 12.364 37.6935 11.5026 38.5896C10.608 39.4856 9.65813 40.0056 8.54263 40.3264Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M9.55873 50.9244C9.48142 51.1346 9.08382 52.263 8.88501 52.3072C8.81875 52.2961 8.68621 52.1302 8.74144 52.0085C8.90711 51.6324 9.09486 51.2009 9.24948 50.8138C8.56472 50.1611 8.33279 48.3468 8.88501 46.444C9.80171 43.6562 11.8449 41.5654 13.4906 39.2533C13.5679 39.1427 13.6452 39.0321 13.7225 38.9214C13.7446 38.9989 13.7557 39.0874 13.7777 39.1759C14.0649 40.8021 14.0428 42.9593 13.601 44.7183C13.3028 45.8909 12.7837 47.1852 12.11 48.2915C11.4142 49.4641 10.5859 50.2717 9.55873 50.9244Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M7.0958 63.3256C8.34383 64.1442 10.5748 64.7637 12.11 63.757C12.2315 63.8455 12.8721 64.2327 12.9494 64.2991C13.0598 64.4097 13.2145 64.4871 13.3139 64.3323C13.3691 64.2659 13.4022 64.1553 13.2918 64.0336C12.9715 63.8123 12.6181 63.6685 12.2757 63.4473C11.105 61.0135 9.84589 59.3652 7.9131 58.1483C5.70419 56.7323 3.85975 56.7101 2.67799 56.7101C2.51232 56.7101 2.34665 56.7212 2.18098 56.7212C2.46814 59.1218 5.43912 62.2968 7.0958 63.3256Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M13.2255 61.4449C13.2145 61.5998 13.1372 62.2857 13.0267 62.7061C12.9936 62.8277 12.9825 63.0048 12.8169 62.9384C12.7506 62.9273 12.6843 62.7835 12.6843 62.7171C12.7616 62.3078 12.8279 61.8432 12.861 61.4339C12.099 60.9471 11.5026 59.3541 11.3811 57.396C11.5136 54.4423 12.839 51.7651 13.8992 48.9774C13.9324 48.8557 13.9765 48.7229 14.0207 48.5902C14.0649 48.6565 14.087 48.7229 14.1312 48.7893C14.838 50.2496 15.3792 52.2962 15.4234 54.1436C15.4676 55.3494 15.2908 56.7544 14.9374 58.0598C14.5619 59.3983 14.0097 60.4493 13.2255 61.4449Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M13.8551 73.4257C15.2908 73.7134 17.2347 73.647 18.4496 72.0982C18.7588 72.1425 19.2558 72.2199 19.5761 72.242C19.6645 72.2531 19.7307 72.1867 19.7639 72.0761C19.786 71.9987 19.7639 71.8991 19.6203 71.8217C19.2558 71.7442 18.8914 71.7442 18.5048 71.6778C16.8923 69.7861 15.3682 68.7241 13.1703 68.3259C10.6301 67.8612 8.47637 68.5139 7.32774 68.9896C7.17311 69.0449 7.00744 69.1113 6.86387 69.1888C7.27251 70.1069 8.46532 71.0473 9.21635 71.5008C10.6521 72.4522 12.1211 73.1381 13.8551 73.4257Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M18.9908 69.4321C19.0128 69.5981 19.0349 70.2618 19.0349 70.7043C19.0239 70.826 19.057 70.992 18.8914 71.003C18.814 71.003 18.7257 70.9035 18.7257 70.826C18.6926 70.4167 18.7146 69.9742 18.6484 69.5538C17.798 69.2883 16.6714 67.994 16.1523 66.2129C15.5559 63.3588 16.2075 60.4161 16.5168 57.396C16.5389 57.2633 16.5278 57.1305 16.5389 56.9867C16.5941 57.042 16.6604 57.0973 16.7156 57.1526C17.7538 58.2921 18.792 60.051 19.289 61.7768C19.6313 62.9052 19.8081 64.2991 19.8081 65.6376C19.786 67.0426 19.4988 68.2263 18.9908 69.4321Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M27.0312 75.24C27.1085 75.3617 27.2079 75.9148 27.3183 76.3352C27.3515 76.4348 27.4177 76.5896 27.2631 76.645C27.1858 76.6781 27.0864 76.6118 27.0643 76.5454C26.9207 76.1914 26.9207 75.8153 26.744 75.4613C25.9157 75.6604 24.4799 74.6094 23.5411 73.2377C22.2379 70.8703 22.0943 68.0936 21.5862 65.2726C21.5752 65.1398 21.531 65.0182 21.5089 64.8854C21.5752 64.8965 21.6414 64.9407 21.7077 64.9628C22.9557 65.5934 24.3805 66.7107 25.2972 68.0825C25.9267 68.9675 26.5121 70.1955 26.8434 71.4234C27.1858 72.7177 27.1968 73.9457 27.0312 75.24Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ n(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M22.514 80.5058C23.9829 80.3067 25.8825 79.6319 26.7219 77.7512C27.0201 77.6627 27.5392 77.6074 27.8485 77.5189C27.9368 77.5078 27.981 77.4083 27.9921 77.2866C27.9921 77.2202 27.9479 77.1207 27.7933 77.0985C27.4288 77.1538 27.0643 77.2645 26.6557 77.3087C24.5241 76.0476 22.8011 75.4723 20.5591 75.7931C17.9857 76.1582 16.1081 77.4525 15.1031 78.2822C14.9595 78.4039 14.8159 78.5145 14.6834 78.6362C15.3019 79.3996 16.6935 79.9084 17.5218 80.1297C19.1454 80.5833 20.7358 80.7603 22.514 80.5058Z",
          fill: "currentColor"
        }
      )
    ]
  }
), O8 = ({
  title: t = "Best Design Tool",
  subtitle: e = "2,000+ reviews",
  rating: i,
  theme: l = "dark",
  className: r,
  ...o
}) => /* @__PURE__ */ L("div", { ...o, className: k("flex items-center -space-x-0.5", r), children: [
  /* @__PURE__ */ n(
    Ko,
    {
      className: k("shrink-0", l === "light" && "text-fg-white")
    }
  ),
  /* @__PURE__ */ L("div", { className: "flex flex-col items-center gap-1", children: [
    /* @__PURE__ */ n(
      i8,
      {
        rating: i,
        className: "gap-0.5",
        starClassName: "size-4"
      }
    ),
    /* @__PURE__ */ L("div", { className: "text-center", children: [
      /* @__PURE__ */ n(
        "p",
        {
          className: k(
            "text-sm font-semibold",
            l === "light" ? "text-primary_on-brand" : "text-primary"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ n(
        "p",
        {
          className: k(
            "text-xs font-medium",
            l === "light" ? "text-secondary_on-brand" : "text-secondary"
          ),
          children: e
        }
      )
    ] })
  ] }),
  /* @__PURE__ */ n(
    Ko,
    {
      className: k(
        "shrink-0 -scale-x-100",
        l === "light" && "text-fg-white"
      )
    }
  )
] }), U8 = (t) => /* @__PURE__ */ L("svg", { width: "34", height: "24", viewBox: "0 0 34 24", fill: "none", ...t, children: [
  /* @__PURE__ */ n(
    "path",
    {
      d: "M0 4C0 1.79086 1.79086 0 4 0H30C32.2091 0 34 1.79086 34 4V20C34 22.2091 32.2091 24 30 24H4C1.79086 24 0 22.2091 0 20V4Z",
      fill: "#1F72CD"
    }
  ),
  /* @__PURE__ */ n(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6.09517 8.5L2.91406 15.7467H6.7223L7.19441 14.5913H8.27355L8.74566 15.7467H12.9375V14.8649L13.311 15.7467H15.4793L15.8528 14.8462V15.7467H24.5706L25.6307 14.6213L26.6232 15.7467L31.1009 15.7561L27.9097 12.1436L31.1009 8.5H26.6927L25.6608 9.60463L24.6995 8.5H15.2156L14.4013 10.3704L13.5678 8.5H9.7675V9.35186L9.34474 8.5H6.09517ZM6.83205 9.52905H8.68836L10.7984 14.4431V9.52905H12.8319L14.4617 13.0524L15.9637 9.52905H17.987V14.7291H16.7559L16.7458 10.6544L14.9509 14.7291H13.8495L12.0446 10.6544V14.7291H9.51179L9.03162 13.5633H6.43745L5.95827 14.728H4.60123L6.83205 9.52905ZM24.1196 9.52905H19.1134V14.726H24.0421L25.6307 13.0036L27.1618 14.726H28.7624L26.436 12.1426L28.7624 9.52905H27.2313L25.6507 11.2316L24.1196 9.52905ZM7.73508 10.4089L6.8804 12.4856H8.58876L7.73508 10.4089ZM20.3497 11.555V10.6057V10.6048H23.4734L24.8364 12.1229L23.413 13.6493H20.3497V12.613H23.0808V11.555H20.3497Z",
      fill: "white"
    }
  )
] }), G8 = (t) => /* @__PURE__ */ L("svg", { width: "34", height: "24", viewBox: "0 0 34 24", fill: "none", ...t, children: [
  /* @__PURE__ */ n(
    "path",
    {
      d: "M0.5 4C0.5 2.067 2.067 0.5 4 0.5H30C31.933 0.5 33.5 2.067 33.5 4V20C33.5 21.933 31.933 23.5 30 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4Z",
      fill: "white"
    }
  ),
  /* @__PURE__ */ n(
    "path",
    {
      d: "M0.5 4C0.5 2.067 2.067 0.5 4 0.5H30C31.933 0.5 33.5 2.067 33.5 4V20C33.5 21.933 31.933 23.5 30 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4Z",
      className: "stroke-border-secondary",
      strokeWidth: "0.75"
    }
  ),
  /* @__PURE__ */ n(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9.44921 8.34316C9.16382 8.69506 8.70721 8.97261 8.2506 8.93296C8.19353 8.45715 8.41707 7.95161 8.67867 7.63936C8.96406 7.27755 9.46348 7.01983 9.86777 7C9.91533 7.49563 9.72983 7.98135 9.44921 8.34316ZM9.86297 9.02712C9.46071 9.003 9.09366 9.15319 8.79718 9.2745C8.60639 9.35256 8.44483 9.41867 8.32191 9.41867C8.18397 9.41867 8.01574 9.34903 7.82685 9.27084L7.82685 9.27084C7.57935 9.16838 7.29638 9.05124 6.99964 9.05686C6.31948 9.06677 5.68688 9.46823 5.33967 10.1076C4.62621 11.3863 5.15417 13.2796 5.84384 14.3205C6.18155 14.8359 6.58584 15.4009 7.11855 15.3811C7.35291 15.3719 7.5215 15.2973 7.69597 15.2202C7.89683 15.1314 8.10549 15.0391 8.43131 15.0391C8.74582 15.0391 8.94536 15.129 9.1369 15.2152C9.31903 15.2973 9.49393 15.376 9.75358 15.3712C10.3053 15.3613 10.6525 14.8557 10.9902 14.3403C11.3547 13.7871 11.5148 13.2471 11.5391 13.1652L11.542 13.1557C11.5414 13.1551 11.5369 13.153 11.5289 13.1492C11.4071 13.0911 10.476 12.6469 10.467 11.4557C10.4581 10.4559 11.2056 9.94935 11.3233 9.86961L11.3233 9.8696C11.3304 9.86476 11.3353 9.86149 11.3374 9.85978C10.8618 9.12625 10.1198 9.04695 9.86297 9.02712ZM13.6824 15.3167V7.5898H16.4649C17.9013 7.5898 18.9049 8.62071 18.9049 10.1274C18.9049 11.6341 17.8822 12.675 16.4268 12.675H14.8334V15.3167H13.6824ZM14.8333 8.60088H16.1603C17.1592 8.60088 17.7299 9.15599 17.7299 10.1324C17.7299 11.1088 17.1592 11.6688 16.1556 11.6688H14.8333V8.60088ZM22.7053 14.3898C22.4009 14.9945 21.7302 15.3761 21.0072 15.3761C19.9371 15.3761 19.1903 14.712 19.1903 13.7108C19.1903 12.7196 19.9133 12.1496 21.2498 12.0653L22.6862 11.9761V11.5499C22.6862 10.9204 22.2915 10.5784 21.5875 10.5784C21.0072 10.5784 20.5839 10.8907 20.4983 11.3665H19.4614C19.4947 10.3653 20.3984 9.63675 21.6208 9.63675C22.9383 9.63675 23.7945 10.3554 23.7945 11.4706V15.3167H22.729V14.3898H22.7053ZM21.3163 14.4592C20.7027 14.4592 20.3127 14.1519 20.3127 13.6811C20.3127 13.1954 20.6885 12.9129 21.4067 12.8683L22.6861 12.784V13.2202C22.6861 13.9438 22.0964 14.4592 21.3163 14.4592ZM27.3284 15.619C26.867 16.9721 26.3391 17.4181 25.2166 17.4181C25.131 17.4181 24.8456 17.4082 24.779 17.3884V16.4616C24.8503 16.4715 25.0263 16.4814 25.1167 16.4814C25.6256 16.4814 25.911 16.2584 26.087 15.6785L26.1916 15.3365L24.2415 9.7111H25.4449L26.8004 14.2759H26.8242L28.1798 9.7111H29.3499L27.3284 15.619Z",
      fill: "black"
    }
  )
] }), W8 = (t) => /* @__PURE__ */ L("svg", { width: "34", height: "24", viewBox: "0 0 34 24", fill: "none", ...t, children: [
  /* @__PURE__ */ n(
    "path",
    {
      d: "M0.5 4C0.5 2.067 2.067 0.5 4 0.5H30C31.933 0.5 33.5 2.067 33.5 4V20C33.5 21.933 31.933 23.5 30 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4Z",
      fill: "white"
    }
  ),
  /* @__PURE__ */ n(
    "path",
    {
      d: "M0.5 4C0.5 2.067 2.067 0.5 4 0.5H30C31.933 0.5 33.5 2.067 33.5 4V20C33.5 21.933 31.933 23.5 30 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4Z",
      className: "stroke-border-secondary",
      strokeWidth: "0.75"
    }
  ),
  /* @__PURE__ */ n(
    "path",
    {
      d: "M14 23L33 17.25V20C33 21.6569 31.6569 23 30 23H14Z",
      fill: "#FD6020"
    }
  ),
  /* @__PURE__ */ n(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M29.3937 9.11084C30.439 9.11084 31.0139 9.59438 31.0139 10.5077C31.0662 11.2062 30.5958 11.7972 29.9686 11.9046L31.3797 13.8925H30.2822L29.0801 11.9584H28.9756V13.8925H28.0871V9.11084H29.3937ZM28.9756 11.3137H29.2369C29.8118 11.3137 30.0731 11.045 30.0731 10.5615C30.0731 10.1317 29.8118 9.86304 29.2369 9.86304H28.9756V11.3137ZM25.0034 13.8925H27.5122V13.0866H25.8919V11.7972H27.4599V10.9913H25.8919V9.91674H27.5122V9.11084H25.0034V13.8925ZM22.3902 12.3345L21.1881 9.11084H20.2474L22.1812 14H22.6515L24.5853 9.11084H23.6446L22.3902 12.3345ZM11.7805 11.5286C11.7805 12.8717 12.8258 14 14.1324 14C14.5505 14 14.9164 13.8925 15.2822 13.7314V12.6568C15.0209 12.9792 14.655 13.1941 14.2369 13.1941C13.4007 13.1941 12.7212 12.5494 12.7212 11.6897V11.5823C12.669 10.7227 13.3484 9.97048 14.1847 9.91675C14.6028 9.91675 15.0209 10.1317 15.2822 10.454V9.37948C14.9686 9.16458 14.5505 9.11085 14.1847 9.11085C12.8258 9.0034 11.7805 10.1317 11.7805 11.5286ZM10.1603 10.9376C9.63762 10.7227 9.48082 10.6152 9.48082 10.3466C9.53309 10.0242 9.79441 9.75557 10.108 9.8093C10.3693 9.8093 10.6306 9.97048 10.8397 10.1854L11.3101 9.54066C10.9442 9.2183 10.4739 9.00339 10.0035 9.00339C9.27176 8.94967 8.64459 9.54066 8.59232 10.2928V10.3466C8.59232 10.9913 8.85365 11.3674 9.68988 11.636C9.89894 11.6897 10.108 11.7972 10.3171 11.9046C10.4739 12.0121 10.5784 12.1733 10.5784 12.3882C10.5784 12.7643 10.2648 13.0866 9.95121 13.0866H9.89894C9.48082 13.0866 9.11497 12.818 8.95818 12.4419L8.38326 13.0329C8.69685 13.6239 9.32403 13.9463 9.95121 13.9463C10.7874 14 11.4669 13.3553 11.5191 12.4956V12.3345C11.4669 11.6897 11.2056 11.3674 10.1603 10.9376ZM7.12892 13.8925H8.01742V9.11084H7.12892V13.8925ZM3 9.11086H4.30662H4.56794C5.8223 9.16458 6.81532 10.2391 6.76306 11.5286C6.76306 12.227 6.44947 12.8717 5.92682 13.3553C5.45644 13.7314 4.88153 13.9463 4.30662 13.8926H3V9.11086ZM4.14983 13.0866C4.56794 13.1404 5.03833 12.9792 5.35191 12.7105C5.6655 12.3882 5.8223 11.9584 5.8223 11.4748C5.8223 11.045 5.6655 10.6152 5.35191 10.2928C5.03833 10.0242 4.56794 9.86302 4.14983 9.91674H3.8885V13.0866H4.14983Z",
      fill: "black"
    }
  ),
  /* @__PURE__ */ n(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.9481 9C16.6415 9 15.5439 10.0745 15.5439 11.4714C15.5439 12.8146 16.5892 13.9429 17.9481 13.9966C19.307 14.0503 20.3523 12.9221 20.4046 11.5252C20.3523 10.1283 19.307 9 17.9481 9V9Z",
      fill: "#FD6020"
    }
  )
] }), j8 = (t) => /* @__PURE__ */ L("svg", { width: "34", height: "24", viewBox: "0 0 34 24", fill: "none", ...t, children: [
  /* @__PURE__ */ n(
    "path",
    {
      d: "M0.5 4C0.5 2.067 2.067 0.5 4 0.5H30C31.933 0.5 33.5 2.067 33.5 4V20C33.5 21.933 31.933 23.5 30 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4Z",
      fill: "white"
    }
  ),
  /* @__PURE__ */ n(
    "path",
    {
      d: "M0.5 4C0.5 2.067 2.067 0.5 4 0.5H30C31.933 0.5 33.5 2.067 33.5 4V20C33.5 21.933 31.933 23.5 30 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4Z",
      className: "stroke-border-secondary",
      strokeWidth: "0.75"
    }
  ),
  /* @__PURE__ */ n(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.179 16.8294C15.9949 17.8275 14.459 18.43 12.7807 18.43C9.03582 18.43 6 15.4303 6 11.73C6 8.02966 9.03582 5.02997 12.7807 5.02997C14.459 5.02997 15.9949 5.63247 17.179 6.63051C18.363 5.63247 19.8989 5.02997 21.5773 5.02997C25.3221 5.02997 28.358 8.02966 28.358 11.73C28.358 15.4303 25.3221 18.43 21.5773 18.43C19.8989 18.43 18.363 17.8275 17.179 16.8294Z",
      fill: "#ED0006"
    }
  ),
  /* @__PURE__ */ n(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.1787 16.8294C18.6366 15.6005 19.5611 13.7719 19.5611 11.73C19.5611 9.68801 18.6366 7.85941 17.1787 6.63051C18.3628 5.63247 19.8987 5.02997 21.577 5.02997C25.3219 5.02997 28.3577 8.02966 28.3577 11.73C28.3577 15.4303 25.3219 18.43 21.577 18.43C19.8987 18.43 18.3628 17.8275 17.1787 16.8294Z",
      fill: "#F9A000"
    }
  ),
  /* @__PURE__ */ n(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.1793 16.8294C18.6372 15.6005 19.5616 13.7719 19.5616 11.73C19.5616 9.68805 18.6372 7.85946 17.1793 6.63055C15.7213 7.85946 14.7969 9.68805 14.7969 11.73C14.7969 13.7719 15.7213 15.6005 17.1793 16.8294Z",
      fill: "#FF5E00"
    }
  )
] }), q8 = (t) => /* @__PURE__ */ L("svg", { width: "34", height: "24", viewBox: "0 0 34 24", fill: "none", ...t, children: [
  /* @__PURE__ */ n(
    "path",
    {
      d: "M0.5 4C0.5 2.067 2.067 0.5 4 0.5H30C31.933 0.5 33.5 2.067 33.5 4V20C33.5 21.933 31.933 23.5 30 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4Z",
      fill: "white"
    }
  ),
  /* @__PURE__ */ n(
    "path",
    {
      d: "M0.5 4C0.5 2.067 2.067 0.5 4 0.5H30C31.933 0.5 33.5 2.067 33.5 4V20C33.5 21.933 31.933 23.5 30 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4Z",
      className: "stroke-border-secondary",
      strokeWidth: "0.75"
    }
  ),
  /* @__PURE__ */ n(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10.7501 15.8582H8.69031L7.14576 9.79235C7.07245 9.51332 6.91679 9.26664 6.68782 9.15038C6.11639 8.85821 5.48672 8.62568 4.7998 8.50841V8.27487H8.11789C8.57583 8.27487 8.91929 8.62568 8.97653 9.0331L9.77793 13.4086L11.8367 8.27487H13.8392L10.7501 15.8582ZM14.984 15.8582H13.0388L14.6406 8.27487H16.5858L14.984 15.8582ZM19.1025 10.3757C19.1597 9.96725 19.5032 9.73372 19.9039 9.73372C20.5336 9.67508 21.2195 9.79235 21.7919 10.0835L22.1354 8.45079C21.5629 8.21725 20.9333 8.09998 20.3619 8.09998C18.4738 8.09998 17.1 9.15038 17.1 10.6082C17.1 11.7173 18.0731 12.2996 18.7601 12.6504C19.5032 13.0002 19.7894 13.2337 19.7322 13.5835C19.7322 14.1082 19.1597 14.3418 18.5883 14.3418C17.9014 14.3418 17.2145 14.1669 16.5858 13.8747L16.2424 15.5084C16.9293 15.7996 17.6724 15.9169 18.3594 15.9169C20.4763 15.9745 21.7919 14.9251 21.7919 13.35C21.7919 11.3664 19.1025 11.2502 19.1025 10.3757ZM28.5998 15.8582L27.0553 8.27487H25.3962C25.0528 8.27487 24.7093 8.50841 24.5948 8.85821L21.7347 15.8582H23.7372L24.1369 14.7502H26.5973L26.8263 15.8582H28.5998ZM25.6824 10.3171L26.2539 13.1751H24.6521L25.6824 10.3171Z",
      fill: "#172B85"
    }
  )
] }), Y8 = (t) => /* @__PURE__ */ L("svg", { width: "34", height: "24", viewBox: "0 0 34 24", fill: "none", ...t, children: [
  /* @__PURE__ */ n(
    "path",
    {
      d: "M0.5 4C0.5 2.067 2.067 0.5 4 0.5H30C31.933 0.5 33.5 2.067 33.5 4V20C33.5 21.933 31.933 23.5 30 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4Z",
      fill: "white"
    }
  ),
  /* @__PURE__ */ n(
    "path",
    {
      d: "M0.5 4C0.5 2.067 2.067 0.5 4 0.5H30C31.933 0.5 33.5 2.067 33.5 4V20C33.5 21.933 31.933 23.5 30 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4Z",
      className: "stroke-border-secondary",
      strokeWidth: "0.75"
    }
  ),
  /* @__PURE__ */ n(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14.614 18.4483L14.8347 16.9992L14.3431 16.9873H11.9951L13.6268 6.2937C13.6319 6.26132 13.6484 6.23126 13.6724 6.20987C13.6965 6.18849 13.7272 6.17676 13.7594 6.17676H17.7184C19.0328 6.17676 19.9398 6.45939 20.4133 7.01734C20.6353 7.27908 20.7767 7.55267 20.8452 7.85364C20.9169 8.16951 20.9181 8.54685 20.8481 9.00715L20.843 9.04063V9.33561L21.0651 9.46563C21.252 9.56815 21.4006 9.68546 21.5145 9.81975C21.7044 10.0436 21.8272 10.3281 21.8791 10.6652C21.9328 11.012 21.9151 11.4248 21.8272 11.892C21.7259 12.4295 21.5622 12.8976 21.341 13.2805C21.1376 13.6334 20.8785 13.9262 20.5708 14.153C20.277 14.3686 19.928 14.5322 19.5333 14.6369C19.1509 14.7398 18.7149 14.7917 18.2367 14.7917H17.9286C17.7083 14.7917 17.4943 14.8737 17.3263 15.0207C17.1579 15.1708 17.0465 15.3758 17.0123 15.6L16.989 15.7305L16.599 18.2848L16.5814 18.3785C16.5767 18.4082 16.5686 18.423 16.5568 18.433C16.5463 18.4422 16.5311 18.4483 16.5164 18.4483H14.614Z",
      fill: "#28356A"
    }
  ),
  /* @__PURE__ */ n(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M21.2761 9.07458C21.2644 9.15267 21.2508 9.23246 21.2356 9.31445C20.7136 12.0851 18.9273 13.0422 16.646 13.0422H15.4845C15.2055 13.0422 14.9703 13.2516 14.9269 13.536L14.1638 18.5393C14.1356 18.7261 14.2748 18.8944 14.4571 18.8944H16.5173C16.7612 18.8944 16.9684 18.7112 17.0069 18.4626L17.0271 18.3544L17.415 15.8102L17.4399 15.6707C17.4779 15.4211 17.6856 15.2378 17.9295 15.2378H18.2376C20.2336 15.2378 21.7961 14.4003 22.2528 11.9765C22.4435 10.964 22.3448 10.1185 21.84 9.52389C21.6873 9.34464 21.4977 9.1958 21.2761 9.07458Z",
      fill: "#298FC2"
    }
  ),
  /* @__PURE__ */ n(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M20.7298 8.84956C20.65 8.82549 20.5677 8.80374 20.4833 8.78407C20.3984 8.76488 20.3115 8.7479 20.222 8.73299C19.9089 8.68069 19.5656 8.65588 19.1981 8.65588H16.0951C16.0186 8.65588 15.946 8.67372 15.8811 8.70598C15.7379 8.7771 15.6316 8.91714 15.6058 9.08857L14.9457 13.4101L14.9268 13.5361C14.9701 13.2516 15.2053 13.0423 15.4843 13.0423H16.6459C18.9271 13.0423 20.7134 12.0847 21.2354 9.31451C21.2511 9.23252 21.2642 9.15273 21.2759 9.07464C21.1438 9.00218 21.0008 8.94023 20.8467 8.88744C20.8087 8.87437 20.7694 8.86178 20.7298 8.84956Z",
      fill: "#22284F"
    }
  ),
  /* @__PURE__ */ n(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M15.6056 9.08862C15.6314 8.91718 15.7377 8.77715 15.8809 8.70652C15.9462 8.67414 16.0184 8.6563 16.0948 8.6563H19.1979C19.5654 8.6563 19.9086 8.68123 20.2218 8.73353C20.3113 8.74831 20.3982 8.76542 20.4831 8.7846C20.5675 8.80415 20.6498 8.82603 20.7296 8.84998C20.7692 8.8622 20.8085 8.8749 20.8469 8.88749C21.0009 8.94028 21.1441 9.00272 21.2761 9.07469C21.4315 8.05082 21.2748 7.3537 20.7393 6.72245C20.1488 6.0274 19.0831 5.72998 17.7194 5.72998H13.7603C13.4817 5.72998 13.2441 5.9393 13.2011 6.22426L11.5521 17.0279C11.5196 17.2416 11.679 17.4344 11.8876 17.4344H14.3318L15.6056 9.08862Z",
      fill: "#28356A"
    }
  )
] }), X8 = (t) => /* @__PURE__ */ L("svg", { width: "34", height: "24", viewBox: "0 0 34 24", fill: "none", ...t, children: [
  /* @__PURE__ */ n(
    "path",
    {
      d: "M0.5 4C0.5 2.067 2.067 0.5 4 0.5H30C31.933 0.5 33.5 2.067 33.5 4V20C33.5 21.933 31.933 23.5 30 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4Z",
      fill: "white"
    }
  ),
  /* @__PURE__ */ n(
    "path",
    {
      d: "M0.5 4C0.5 2.067 2.067 0.5 4 0.5H30C31.933 0.5 33.5 2.067 33.5 4V20C33.5 21.933 31.933 23.5 30 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4Z",
      className: "stroke-border-secondary",
      strokeWidth: "0.75"
    }
  ),
  /* @__PURE__ */ n(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M18.2684 8.14192L16.5413 8.52349V7.08202L18.2684 6.70752V8.14192ZM21.8602 8.94038C21.1858 8.94038 20.7523 9.26542 20.5115 9.49153L20.422 9.05344H18.9082V17.2924L20.6285 16.9179L20.6354 14.9183C20.8831 15.102 21.2478 15.3634 21.8533 15.3634C23.085 15.3634 24.2066 14.3459 24.2066 12.106C24.1997 10.0568 23.0643 8.94038 21.8602 8.94038ZM21.4473 13.8089C21.0413 13.8089 20.8005 13.6605 20.6353 13.4768L20.6285 10.8553C20.8074 10.6504 21.0551 10.509 21.4473 10.509C22.0735 10.509 22.507 11.2298 22.507 12.1554C22.507 13.1023 22.0803 13.8089 21.4473 13.8089ZM29.6289 12.1766C29.6289 10.3677 28.7756 8.94038 27.1448 8.94038C25.5072 8.94038 24.5163 10.3677 24.5163 12.1625C24.5163 14.2894 25.6861 15.3634 27.365 15.3634C28.1839 15.3634 28.8031 15.1726 29.271 14.9041V13.4909C28.8031 13.7312 28.2664 13.8795 27.5852 13.8795C26.9178 13.8795 26.326 13.6393 26.2503 12.8055H29.6151C29.6151 12.7666 29.6176 12.6782 29.6204 12.5763L29.6204 12.5761C29.6243 12.4377 29.6289 12.2743 29.6289 12.1766ZM26.2296 11.5054C26.2296 10.7069 26.7044 10.3748 27.1379 10.3748C27.5576 10.3748 28.0049 10.7069 28.0049 11.5054H26.2296ZM16.5412 9.06052H18.2683V15.2433H16.5412V9.06052ZM14.5803 9.06051L14.6904 9.5834C15.0963 8.82026 15.9014 8.97572 16.1216 9.06051V10.6857C15.9083 10.608 15.2202 10.509 14.8142 11.0531V15.2433H13.094V9.06051H14.5803ZM11.2498 7.52717L9.57081 7.8946L9.56392 13.5545C9.56392 14.6003 10.3277 15.3705 11.3461 15.3705C11.9103 15.3705 12.3232 15.2645 12.5503 15.1373V13.7029C12.3301 13.7947 11.2429 14.1198 11.2429 13.074V10.5656H12.5503V9.0605H11.2429L11.2498 7.52717ZM7.1832 10.4737C6.8185 10.4737 6.59831 10.5797 6.59831 10.8553C6.59831 11.1562 6.97726 11.2885 7.4474 11.4527C8.21383 11.7204 9.22258 12.0728 9.22685 13.3779C9.22685 14.6427 8.24287 15.3705 6.81162 15.3705C6.21986 15.3705 5.57304 15.2504 4.93311 14.9677V13.286C5.51112 13.611 6.2405 13.8513 6.81162 13.8513C7.19696 13.8513 7.4722 13.7453 7.4722 13.4203C7.4722 13.087 7.0614 12.9346 6.56547 12.7507C5.81018 12.4706 4.85742 12.1173 4.85742 10.9401C4.85742 9.6894 5.78636 8.9404 7.1832 8.9404C7.75432 8.9404 8.31856 9.03225 8.88968 9.26543V10.926C8.36673 10.6362 7.70615 10.4737 7.1832 10.4737Z",
      fill: "#6461FC"
    }
  )
] }), J8 = (t) => /* @__PURE__ */ L("svg", { width: "34", height: "24", viewBox: "0 0 34 24", fill: "none", ...t, children: [
  /* @__PURE__ */ n(
    "path",
    {
      d: "M0.5 4C0.5 2.067 2.067 0.5 4 0.5H30C31.933 0.5 33.5 2.067 33.5 4V20C33.5 21.933 31.933 23.5 30 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4Z",
      fill: "white"
    }
  ),
  /* @__PURE__ */ n(
    "path",
    {
      d: "M0.5 4C0.5 2.067 2.067 0.5 4 0.5H30C31.933 0.5 33.5 2.067 33.5 4V20C33.5 21.933 31.933 23.5 30 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4Z",
      className: "stroke-border-secondary",
      strokeWidth: "0.75"
    }
  ),
  /* @__PURE__ */ n(
    "path",
    {
      d: "M10.5185 5.00073H15.8767C16.6247 5.00073 17.0899 5.62831 16.9154 6.40082L14.4208 17.4262C14.2447 18.196 13.4959 18.8241 12.7474 18.8241H7.38973C6.64282 18.8241 6.17657 18.196 6.35106 17.4262L8.84672 6.40082C9.0212 5.62831 9.76968 5.00073 10.5185 5.00073Z",
      fill: "#E21836"
    }
  ),
  /* @__PURE__ */ n(
    "path",
    {
      d: "M15.4303 5H21.5921C22.3399 5 22.0027 5.62758 21.8268 6.40009L19.3326 17.4255C19.1576 18.1953 19.2121 18.8234 18.4628 18.8234H12.301C11.5516 18.8234 11.0878 18.1953 11.2639 17.4255L13.758 6.40009C13.9351 5.62758 14.682 5 15.4303 5Z",
      fill: "#00447C"
    }
  ),
  /* @__PURE__ */ n(
    "path",
    {
      d: "M21.348 5H26.7062C27.4552 5 27.9204 5.62758 27.7445 6.40009L25.2503 17.4255C25.0742 18.1953 24.3248 18.8234 23.576 18.8234H18.2203C17.4709 18.8234 17.0061 18.1953 17.1816 17.4255L19.6762 6.40009C19.8507 5.62758 20.5986 5 21.348 5Z",
      fill: "#007B84"
    }
  ),
  /* @__PURE__ */ n(
    "path",
    {
      d: "M11.9181 8.53326C11.3671 8.53904 11.2043 8.53326 11.1524 8.52062C11.1324 8.61836 10.7605 10.384 10.7595 10.3855C10.6794 10.7427 10.6212 10.9973 10.4233 11.1617C10.311 11.2573 10.1799 11.3035 10.0279 11.3035C9.78352 11.3035 9.64116 11.1786 9.61726 10.9417L9.61269 10.8603C9.61269 10.8603 9.68714 10.3818 9.68714 10.3792C9.68714 10.3792 10.0774 8.77015 10.1472 8.55746C10.1509 8.54536 10.1519 8.53904 10.1529 8.53326C9.39328 8.54012 9.25863 8.53326 9.24936 8.52062C9.24427 8.53797 9.22546 8.63772 9.22546 8.63772L8.82699 10.4512L8.79278 10.605L8.72656 11.1081C8.72656 11.2573 8.75503 11.3791 8.81171 11.4821C8.99325 11.8087 9.51108 11.8576 9.80402 11.8576C10.1815 11.8576 10.5355 11.7751 10.7748 11.6244C11.1901 11.3717 11.2988 10.9769 11.3957 10.626L11.4406 10.446C11.4406 10.446 11.8426 8.77485 11.9109 8.55746C11.9135 8.54536 11.9145 8.53904 11.9181 8.53326ZM13.2858 9.88137C13.1889 9.88137 13.0118 9.90557 12.8527 9.98583C12.795 10.0164 12.7404 10.0516 12.6828 10.0867L12.7348 9.89347L12.7063 9.86094C12.369 9.93125 12.2935 9.94066 11.9819 9.98583L11.9558 10.0037C11.9196 10.3125 11.8875 10.5447 11.7533 11.1517C11.7023 11.3754 11.6493 11.6013 11.5961 11.8245L11.6105 11.8528C11.9298 11.8355 12.0267 11.8355 12.3042 11.8402L12.3267 11.8151C12.3619 11.6291 12.3665 11.5856 12.4446 11.209C12.4813 11.0305 12.5578 10.6381 12.5956 10.4985C12.6649 10.4654 12.7334 10.4329 12.7987 10.4329C12.9542 10.4329 12.9353 10.5725 12.9293 10.6282C12.9226 10.7216 12.8659 11.0268 12.8078 11.2888L12.769 11.458C12.742 11.5829 12.7123 11.7043 12.6853 11.8281L12.6971 11.8528C13.0118 11.8355 13.1078 11.8355 13.3766 11.8402L13.4082 11.8151C13.4568 11.5247 13.471 11.447 13.5572 11.0241L13.6006 10.8299C13.6848 10.4497 13.7271 10.2569 13.6634 10.0998C13.596 9.92385 13.4343 9.88137 13.2858 9.88137ZM14.8137 10.2794C14.6464 10.3125 14.5397 10.3346 14.4337 10.3488C14.3286 10.3662 14.226 10.3819 14.0644 10.405L14.0516 10.417L14.0398 10.4265C14.023 10.5505 14.0112 10.6576 13.9889 10.7836C13.9699 10.9139 13.9408 11.0619 13.8934 11.2746C13.8567 11.4374 13.8378 11.4941 13.8169 11.5514C13.7965 11.6087 13.774 11.6643 13.7328 11.8245L13.7424 11.8392L13.7505 11.8528C13.9016 11.8454 14.0005 11.8402 14.1021 11.8392C14.2036 11.8355 14.3087 11.8392 14.4714 11.8402L14.4857 11.8282L14.501 11.815C14.5245 11.6707 14.528 11.6318 14.5424 11.5614C14.5566 11.4858 14.5811 11.3812 14.6414 11.1018C14.6698 10.9706 14.7016 10.8398 14.7311 10.7059C14.7618 10.5725 14.7939 10.4412 14.8245 10.31L14.8199 10.2941L14.8137 10.2794ZM14.8173 9.74272C14.6653 9.65036 14.3985 9.67967 14.2189 9.80725C14.0398 9.93228 14.0195 10.1097 14.171 10.2033C14.3204 10.2931 14.5882 10.2664 14.7662 10.1377C14.9449 10.01 14.9672 9.83414 14.8173 9.74272ZM15.7367 11.8818C16.0442 11.8818 16.3595 11.7945 16.5968 11.5356C16.7794 11.3256 16.8631 11.0131 16.8921 10.8845C16.9865 10.458 16.913 10.2589 16.8207 10.1376C16.6804 9.95279 16.4325 9.8935 16.1754 9.8935C16.0207 9.8935 15.6524 9.90923 15.3647 10.1823C15.1581 10.3792 15.0626 10.6465 15.0051 10.9028C14.9469 11.1638 14.8801 11.6339 15.3 11.8088C15.4295 11.866 15.6163 11.8818 15.7367 11.8818ZM15.7127 10.9223C15.7836 10.5993 15.8673 10.3283 16.0809 10.3283C16.2484 10.3283 16.2605 10.5299 16.1861 10.854C16.1728 10.9259 16.1116 11.1933 16.029 11.3072C15.9712 11.3912 15.9029 11.4421 15.8275 11.4421C15.805 11.4421 15.6714 11.4421 15.6693 11.2379C15.6682 11.1371 15.6882 11.0341 15.7127 10.9223ZM17.661 11.8402L17.685 11.8151C17.7191 11.6292 17.7247 11.5855 17.8002 11.209C17.8379 11.0305 17.916 10.6382 17.9527 10.4985C18.0222 10.4653 18.0895 10.4328 18.1569 10.4328C18.3114 10.4328 18.2926 10.5724 18.2864 10.6281C18.2808 10.7217 18.2241 11.0267 18.165 11.2888L18.1283 11.4579C18.1002 11.5829 18.0696 11.7042 18.0426 11.8281L18.0543 11.8529C18.3701 11.8355 18.4625 11.8355 18.7328 11.8402L18.7655 11.8151C18.8129 11.5246 18.8257 11.4469 18.9145 11.0242L18.9568 10.8298C19.0414 10.4496 19.0843 10.2569 19.0216 10.0999C18.9522 9.92389 18.7895 9.88141 18.6431 9.88141C18.546 9.88141 18.368 9.90548 18.2099 9.98587C18.1533 10.0164 18.0967 10.0515 18.041 10.0867L18.0895 9.89351L18.0635 9.86084C17.7263 9.93129 17.6492 9.9407 17.338 9.98587L17.3141 10.0038C17.2763 10.3126 17.2457 10.5446 17.1115 11.1518C17.0605 11.3755 17.0074 11.6013 16.9544 11.8245L16.9686 11.8529C17.2885 11.8355 17.384 11.8355 17.661 11.8402ZM19.9812 11.8528C20.001 11.7531 20.1189 11.1618 20.12 11.1618C20.12 11.1618 20.2204 10.7279 20.2266 10.7122C20.2266 10.7122 20.2582 10.667 20.2898 10.6491H20.3363C20.775 10.6491 21.2703 10.6491 21.6586 10.3551C21.9228 10.1535 22.1034 9.85567 22.184 9.49375C22.2049 9.40501 22.2203 9.29948 22.2203 9.19394C22.2203 9.05533 22.1933 8.9182 22.1152 8.81105C21.9172 8.52589 21.5229 8.52065 21.0678 8.5185C21.0663 8.5185 20.8434 8.52065 20.8434 8.52065C20.2608 8.52804 20.0271 8.52589 19.9311 8.51379C19.923 8.55749 19.9078 8.6352 19.9078 8.6352C19.9078 8.6352 19.6991 9.63088 19.6991 9.63249C19.6991 9.63249 19.1996 11.7494 19.1761 11.8492C19.6848 11.8429 19.8934 11.8429 19.9812 11.8528ZM20.3679 10.0841C20.3679 10.0841 20.5898 9.09042 20.5887 9.09418L20.5959 9.04323L20.599 9.00437L20.6877 9.01379C20.6877 9.01379 21.1453 9.05425 21.1561 9.05533C21.3367 9.12726 21.4111 9.31265 21.3591 9.55465C21.3117 9.77581 21.1724 9.96174 20.9933 10.0515C20.8459 10.1276 20.6653 10.134 20.4791 10.134H20.3587L20.3679 10.0841ZM21.7494 10.9407C21.6908 11.198 21.6234 11.668 22.0412 11.8355C22.1744 11.8939 22.2938 11.9112 22.4151 11.9049C22.5432 11.8978 22.6619 11.8316 22.7719 11.7364C22.762 11.7755 22.7521 11.8147 22.7421 11.8539L22.7611 11.8791C23.0616 11.866 23.1548 11.866 23.4804 11.8686L23.5099 11.8455C23.5575 11.5577 23.6023 11.2784 23.7258 10.728C23.786 10.4643 23.8461 10.2032 23.9079 9.94067L23.8982 9.91177C23.562 9.9759 23.4722 9.98961 23.1488 10.0368L23.1243 10.0574C23.121 10.0841 23.1176 10.1098 23.1145 10.1355C23.0642 10.0519 22.9913 9.98047 22.8789 9.93597C22.7351 9.87775 22.3973 9.95277 22.107 10.2249C21.903 10.4192 21.8051 10.6854 21.7494 10.9407ZM22.4555 10.9564C22.5274 10.6392 22.6101 10.3709 22.8243 10.3709C22.9597 10.3709 23.031 10.4996 23.0165 10.719C23.005 10.7737 22.9926 10.8314 22.9779 10.8966C22.9564 10.9908 22.9332 11.0842 22.9106 11.1778C22.8876 11.2418 22.8608 11.3022 22.8315 11.3424C22.7763 11.4228 22.6452 11.4726 22.5697 11.4726C22.5483 11.4726 22.4161 11.4726 22.4116 11.2721C22.4105 11.1722 22.4305 11.0693 22.4555 10.9564ZM26.1424 9.9092L26.1164 9.87868C25.7838 9.94805 25.7236 9.95908 25.418 10.0016L25.3955 10.0247C25.3944 10.0285 25.3935 10.0342 25.392 10.0395L25.3909 10.0342C25.1634 10.5746 25.1701 10.458 24.9849 10.8834C24.9838 10.864 24.9838 10.8519 24.9828 10.8313L24.9364 9.9092L24.9073 9.87868C24.5589 9.94805 24.5506 9.95908 24.2288 10.0016L24.2038 10.0247C24.2002 10.0357 24.2002 10.0478 24.1981 10.061L24.2002 10.0657C24.2405 10.2773 24.2308 10.2301 24.2711 10.5641C24.2899 10.728 24.315 10.8928 24.3338 11.0547C24.3656 11.3256 24.3833 11.4589 24.4221 11.8723C24.2048 12.2415 24.1533 12.3812 23.9441 12.7052L23.9456 12.7084L23.7982 12.9483C23.7814 12.9735 23.7661 12.9909 23.7447 12.9983C23.7212 13.0103 23.6906 13.0124 23.6482 13.0124H23.5665L23.4452 13.4278L23.8614 13.4352C24.1058 13.4342 24.2594 13.3165 24.3421 13.1584L24.6038 12.6967H24.5996L24.6272 12.6642C24.8032 12.274 26.1424 9.9092 26.1424 9.9092ZM21.7494 15.3652H21.5728L22.2264 13.1401H22.4432L22.512 12.9108L22.5187 13.1657C22.5106 13.3233 22.631 13.463 22.9473 13.4399H23.3131L23.439 13.0114H23.3013C23.2222 13.0114 23.1855 12.9908 23.1901 12.9467L23.1834 12.6874H22.506V12.6887C22.287 12.6934 21.6329 12.7104 21.5005 12.7467C21.3402 12.7892 21.1714 12.9142 21.1714 12.9142L21.2377 12.6847H20.604L20.472 13.1401L19.8097 15.3992H19.6812L19.5552 15.8246H20.8173L20.775 15.9664H21.3969L21.4382 15.8246H21.6127L21.7494 15.3652ZM21.2316 13.5922C21.1301 13.6211 20.9413 13.7087 20.9413 13.7087L21.1092 13.1401H21.6127L21.4912 13.5544C21.4912 13.5544 21.3357 13.5638 21.2316 13.5922ZM21.2412 14.4046C21.2412 14.4046 21.0831 14.4251 20.979 14.4493C20.8765 14.4813 20.6842 14.5821 20.6842 14.5821L20.8577 13.9903H21.3637L21.2412 14.4046ZM20.9591 15.3705H20.4541L20.6005 14.871H21.104L20.9591 15.3705ZM22.1754 13.9903H22.9034L22.7987 14.339H22.0611L21.9504 14.7203H22.5958L22.1071 15.4287C22.0729 15.4807 22.0422 15.4991 22.0081 15.5138C21.9739 15.5317 21.9289 15.5526 21.877 15.5526H21.6979L21.5749 15.9702H22.0432C22.2867 15.9702 22.4304 15.8562 22.5366 15.7066L22.8717 15.2344L22.9437 15.7138C22.959 15.8036 23.0217 15.8562 23.0641 15.8766C23.111 15.9008 23.1595 15.9424 23.2279 15.9486C23.3013 15.9518 23.3543 15.9543 23.3896 15.9543H23.6197L23.7579 15.487H23.6671C23.615 15.487 23.5253 15.478 23.51 15.4612C23.4947 15.4408 23.4947 15.4093 23.4865 15.3615L23.4135 14.881H23.1145L23.2457 14.7203H23.9819L24.0951 14.339H23.4135L23.5197 13.9903H24.1992L24.3252 13.5602H22.2993L22.1754 13.9903ZM16.0269 15.4676L16.1968 14.8857H16.8951L17.0227 14.4529H16.3238L16.4305 14.0948H17.1135L17.2401 13.6757H15.531L15.4071 14.0948H15.7953L15.6918 14.4529H15.3025L15.1734 14.8931H15.5616L15.3351 15.6629C15.3045 15.7648 15.3495 15.8037 15.3779 15.851C15.4071 15.8971 15.4366 15.9276 15.5029 15.945C15.5714 15.9607 15.6183 15.9701 15.682 15.9701H16.4693L16.6095 15.4907L16.2606 15.54C16.1932 15.54 16.0065 15.5317 16.0269 15.4676ZM16.107 12.6821L15.93 13.0113C15.8922 13.0833 15.8581 13.1279 15.8274 13.1485C15.8004 13.1658 15.7468 13.1731 15.6692 13.1731H15.5769L15.4535 13.5943H15.7601C15.9076 13.5943 16.0208 13.5386 16.0749 13.5108C16.133 13.4788 16.1483 13.4971 16.1932 13.4524L16.2968 13.3601H17.2543L17.3814 12.9215H16.6805L16.8028 12.6821H16.107ZM17.5207 15.476C17.5044 15.4518 17.5161 15.4092 17.5411 15.3205L17.8028 14.4287H18.7338C18.8695 14.4267 18.9675 14.4251 19.0312 14.4204C19.0997 14.413 19.1741 14.3878 19.2552 14.3427C19.3389 14.2953 19.3818 14.2455 19.4179 14.1882C19.4583 14.1311 19.5231 14.006 19.5787 13.8132L19.9077 12.6847L18.9415 12.6905C18.9415 12.6905 18.644 12.7357 18.513 12.7856C18.3808 12.8412 18.192 12.9966 18.192 12.9966L18.2792 12.6873H17.6824L16.8468 15.54C16.8171 15.6508 16.7973 15.7312 16.7927 15.7795C16.7911 15.8315 16.8564 15.883 16.8988 15.9218C16.9488 15.9607 17.0227 15.9544 17.0936 15.9607C17.1682 15.9665 17.2742 15.9701 17.4206 15.9701H17.8793L18.0201 15.4807L17.6095 15.5207C17.5656 15.5207 17.5339 15.4965 17.5207 15.476ZM17.9717 13.8264H18.9496L18.8874 14.027C18.8787 14.0317 18.8578 14.0171 18.7583 14.0292H17.9114L17.9717 13.8264ZM18.1676 13.1537H19.1537L19.0828 13.3953C19.0828 13.3953 18.618 13.3906 18.5436 13.4047C18.216 13.463 18.0247 13.6432 18.0247 13.6432L18.1676 13.1537ZM18.9093 14.6987C18.9012 14.7287 18.8884 14.747 18.8705 14.7607C18.8507 14.7739 18.8185 14.7786 18.7706 14.7786H18.6313L18.6395 14.5343H18.0599L18.0364 15.7285C18.0355 15.8147 18.0436 15.8646 18.1048 15.9045C18.1661 15.9544 18.3548 15.9607 18.6088 15.9607H18.972L19.1031 15.5137L18.7869 15.5316L18.6818 15.5379C18.6674 15.5316 18.6537 15.5258 18.6384 15.5101C18.6251 15.4965 18.6027 15.5048 18.6063 15.4187L18.6088 15.1125L18.9404 15.0984C19.1195 15.0984 19.196 15.0385 19.2613 14.9813C19.3236 14.9266 19.344 14.8637 19.3675 14.7786L19.4231 14.5075H18.9674L18.9093 14.6987Z",
      fill: "#FEFEFE"
    }
  )
] }), Q8 = ({ size: t = 24, ...e }) => /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", ...e, children: /* @__PURE__ */ n(
  "path",
  {
    d: "M17.7705 10.0969C18.319 8.56875 19.8986 4.14844 19.8986 2.73281C19.8986 1.48594 19.1627 0.440625 17.8502 0.440625C15.7596 0.440625 13.8846 6.61406 13.2986 8.08594C12.844 6.75 10.7158 0 8.84083 0C7.38301 0 6.69864 1.07344 6.69864 2.42344C6.69864 4.07812 8.30176 8.36719 8.88301 10.0172C8.5877 9.90937 8.26895 9.81562 7.94551 9.81562C6.84864 9.81562 5.68145 11.1797 5.68145 12.2812C5.68145 12.6984 5.91114 13.2844 6.05645 13.6734C4.32676 14.1422 3.66114 15.2953 3.66114 17.0344C3.65645 20.4187 6.8627 24 11.3721 24C16.9033 24 20.344 19.8469 20.344 14.4891C20.344 12.4688 20.0205 10.6453 17.7705 10.0969V10.0969ZM16.1111 5.0625C16.2986 4.48594 17.1002 2.04844 17.8502 2.04844C18.2533 2.04844 18.3611 2.46563 18.3611 2.79844C18.3611 3.69375 16.5518 8.63906 16.1533 9.73594L14.5596 9.45469L16.1111 5.0625V5.0625ZM8.17051 2.26406C8.17051 1.70625 8.8502 0.121875 10.3408 4.47188L11.9627 9.17344C11.2315 9.1125 10.6643 9.03281 10.3033 9.23906C9.79239 7.88906 8.17051 3.62812 8.17051 2.26406V2.26406ZM8.0627 11.4375C9.43614 11.4375 11.208 15.8719 11.208 16.4719C11.208 16.7109 10.9783 17.0062 10.7111 17.0062C9.73145 17.0062 7.10645 13.4016 7.10645 12.4266C7.11114 12.0656 7.70176 11.4375 8.0627 11.4375V11.4375ZM16.7018 20.1703C15.3377 21.6703 13.594 22.4484 11.5596 22.4484C8.7752 22.4484 6.57676 20.9203 5.51739 18.3094C4.71583 16.275 5.69551 15.1078 6.48301 15.1078C7.01739 15.1078 9.02833 17.9344 9.02833 18.5344C9.02833 18.7641 8.66739 18.9234 8.47989 18.9234C7.7252 18.9234 7.42989 18.1969 6.08458 16.5141C4.69239 17.9062 7.04551 20.5875 8.81739 20.5875C10.0408 20.5875 10.8377 19.4531 10.5986 18.6188C10.7721 18.6188 10.9877 18.6328 11.1471 18.5906C11.1986 19.8609 11.5736 21.375 13.1018 21.4828C13.1018 21.4406 13.1955 21.15 13.1955 21.1359C13.1955 20.3203 12.6986 19.6078 12.6986 18.7781C12.6986 17.4516 13.7158 16.1672 14.7471 15.4172C15.1221 15.1359 15.5768 14.9625 16.0174 14.8031C16.4721 14.6297 16.9549 14.4281 17.3018 14.0812C17.2502 13.5562 17.0346 13.0922 16.5096 13.0922C15.2111 13.0922 10.8565 13.2797 10.8565 11.2313C10.8565 10.9172 10.8611 10.6172 11.6721 10.6172C13.1861 10.6172 17.0299 10.9922 18.1549 11.9813C19.0033 12.7359 19.294 17.2875 16.7018 20.1703V20.1703ZM12.0799 14.2641C12.5346 14.4094 13.0033 14.4516 13.4721 14.5453C13.1252 14.7984 12.8158 15.1078 12.5205 15.4406C12.3893 15.0422 12.2299 14.6531 12.0799 14.2641V14.2641Z",
    fill: "currentColor"
  }
) }), ec = ({ size: t = 24, ...e }) => /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", ...e, children: /* @__PURE__ */ n(
  "path",
  {
    d: "M20.8428 17.1449C20.5101 17.9135 20.1163 18.6211 19.66 19.2715C19.0381 20.1583 18.5288 20.7721 18.1364 21.113C17.528 21.6724 16.8762 21.959 16.1782 21.9753C15.6771 21.9753 15.0728 21.8327 14.3693 21.5434C13.6636 21.2555 13.015 21.113 12.422 21.113C11.8 21.113 11.133 21.2555 10.4195 21.5434C9.70493 21.8327 9.12928 21.9834 8.68916 21.9984C8.01981 22.0269 7.35264 21.7322 6.68668 21.113C6.26164 20.7422 5.72999 20.1067 5.09309 19.2063C4.40976 18.2449 3.84796 17.13 3.40784 15.8589C2.93648 14.486 2.7002 13.1565 2.7002 11.8694C2.7002 10.3951 3.01878 9.12345 3.65689 8.05784C4.1584 7.20191 4.82557 6.52672 5.66059 6.03105C6.49562 5.53539 7.39786 5.2828 8.36949 5.26664C8.90114 5.26664 9.59833 5.43109 10.4647 5.75429C11.3287 6.07858 11.8834 6.24303 12.1266 6.24303C12.3085 6.24303 12.9247 6.05074 13.9694 5.66738C14.9573 5.31186 15.7911 5.16466 16.4742 5.22264C18.3251 5.37202 19.7157 6.10167 20.6405 7.41619C18.9851 8.4192 18.1662 9.82403 18.1825 11.6262C18.1975 13.03 18.7067 14.1981 19.7075 15.1256C20.1611 15.5561 20.6676 15.8888 21.2312 16.1251C21.109 16.4795 20.98 16.819 20.8428 17.1449V17.1449ZM16.5978 0.440369C16.5978 1.54062 16.1958 2.56792 15.3946 3.51878C14.4277 4.64917 13.2582 5.30236 11.99 5.19929C11.9738 5.06729 11.9645 4.92837 11.9645 4.78239C11.9645 3.72615 12.4243 2.59576 13.2408 1.67152C13.6485 1.20356 14.167 0.814453 14.7957 0.504058C15.4231 0.198295 16.0166 0.0292007 16.5747 0.000244141C16.591 0.147331 16.5978 0.294426 16.5978 0.440355V0.440369Z",
    fill: "currentColor"
  }
) }), tc = ({ size: t = 24, ...e }) => /* @__PURE__ */ L("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", ...e, children: [
  /* @__PURE__ */ n(
    "path",
    {
      d: "M1.74167 17.875C0.783333 17.875 0 18.6583 0 19.6167C0 20.575 0.783333 21.3583 1.74167 21.3583C2.7 21.3583 3.48333 20.575 3.48333 19.6167C3.48333 18.6583 2.70833 17.875 1.74167 17.875Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ n(
    "path",
    {
      d: "M23.1833 2.66663L12.2166 6.16663V2.70829L0.391602 6.48329V16.5083L10.5916 13.25V16.6916L23.9999 12.4166L20.3666 8.86663L23.1833 2.66663ZM10.5916 11.5333L2.02494 14.2666V7.67496L10.5916 4.94163V11.5333ZM20.9666 11.675L12.2166 14.4666V7.88329L20.2749 5.30829L18.4249 9.20829L20.9666 11.675Z",
      fill: "currentColor"
    }
  )
] }), ic = ({ size: t = 24, ...e }) => /* @__PURE__ */ L("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", ...e, children: [
  /* @__PURE__ */ n(
    "path",
    {
      d: "M7.50197 13.0057C7.50197 14.0114 8.28047 14.8343 9.14548 14.8343C10.0105 14.8343 10.789 14.0114 10.789 13.0057C10.789 12 10.0105 11.1771 9.14548 11.1771C8.28047 11.1771 7.50197 12 7.50197 13.0057Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ n(
    "path",
    {
      d: "M13.211 13.0057C13.211 14.0114 13.9895 14.8343 14.8545 14.8343C15.7195 14.8343 16.498 14.0114 16.498 13.0057C16.498 12 15.7195 11.1771 14.8545 11.1771C13.9895 11.1771 13.211 12 13.211 13.0057Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ n(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0.560538 2.80805C0 3.90817 0 5.3483 0 8.22857V15.7714C0 18.6517 0 20.0918 0.560538 21.192C1.0536 22.1596 1.84036 22.9464 2.80805 23.4395C3.90817 24 5.3483 24 8.22857 24H15.7714C18.6517 24 20.0918 24 21.192 23.4395C22.1596 22.9464 22.9464 22.1596 23.4395 21.192C24 20.0918 24 18.6517 24 15.7714V8.22857C24 5.3483 24 3.90817 23.4395 2.80805C22.9464 1.84036 22.1596 1.0536 21.192 0.560538C20.0918 0 18.6517 0 15.7714 0H8.22857C5.3483 0 3.90817 0 2.80805 0.560538C1.84036 1.0536 1.0536 1.84036 0.560538 2.80805ZM14.595 5.14286C16.2385 5.23429 17.7955 5.78286 19.0931 6.88C20.5636 9.80572 21.3421 13.0971 21.4286 16.48C20.1311 17.9429 18.3145 18.8571 16.4115 18.8571C16.4115 18.8571 15.806 18.1257 15.3735 17.4857C16.498 17.2114 17.536 16.5714 18.228 15.5657C17.6225 15.9314 17.017 16.2971 16.4115 16.5714C15.633 16.9371 14.8545 17.12 14.076 17.3029C13.384 17.3943 12.692 17.4857 12 17.4857C11.308 17.4857 10.616 17.3943 9.92398 17.3029C9.14548 17.12 8.36697 16.9371 7.58847 16.5714C6.98296 16.2971 6.37746 15.9314 5.77195 15.5657C6.46396 16.5714 7.50197 17.2114 8.62647 17.4857C8.19397 18.1257 7.58847 18.8571 7.58847 18.8571C5.68545 18.8571 3.86894 17.9429 2.57143 16.48C2.65793 13.0971 3.43644 9.80572 4.90695 6.88C6.20446 5.78286 7.76147 5.23429 9.40498 5.14286L9.66448 5.41714C8.19397 5.78286 6.89646 6.51429 5.68545 7.52C7.15596 6.69714 8.79948 6.14857 10.5295 5.96571C11.0485 5.87429 11.481 5.87429 12 5.87429C12.519 5.87429 12.9515 5.87429 13.4705 5.96571C15.2005 6.14857 16.844 6.69714 18.3145 7.52C17.1035 6.51429 15.806 5.78286 14.3355 5.41714L14.595 5.14286Z",
      fill: "currentColor"
    }
  )
] }), nc = ({ size: t = 24, ...e }) => /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", ...e, children: /* @__PURE__ */ n(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 0C5.37527 0 0 5.37527 0 12C0 18.6248 5.37527 24 12 24C18.6117 24 24 18.6248 24 12C24 5.37527 18.6117 0 12 0ZM19.9262 5.53145C21.3579 7.27549 22.217 9.50107 22.243 11.9089C21.9046 11.8438 18.5206 11.154 15.1106 11.5835C15.0325 11.4143 14.9675 11.2321 14.8894 11.0499C14.6811 10.5554 14.4469 10.0477 14.2126 9.56617C17.9869 8.0304 19.705 5.81779 19.9262 5.53145ZM12 1.77007C14.603 1.77007 16.9848 2.74621 18.7939 4.34708C18.6117 4.60738 17.0629 6.67679 13.4186 8.04337C11.7397 4.95878 9.87855 2.43384 9.5922 2.04338C10.3601 1.86117 11.1671 1.77007 12 1.77007ZM7.63995 2.73319C7.91325 3.09761 9.73538 5.63558 11.4404 8.65508C6.65076 9.9306 2.42083 9.90458 1.96529 9.90458C2.62906 6.72885 4.77657 4.08676 7.63995 2.73319ZM1.74404 12.0131C1.74404 11.9089 1.74404 11.8048 1.74404 11.7007C2.18655 11.7136 7.15835 11.7787 12.2733 10.243C12.5727 10.8156 12.846 11.4013 13.1063 11.987C12.9761 12.026 12.8329 12.0651 12.7028 12.1041C7.41865 13.8091 4.60738 18.4685 4.3731 18.859C2.7462 17.0499 1.74404 14.6421 1.74404 12.0131ZM12 22.256C9.6312 22.256 7.44469 21.449 5.71366 20.0954C5.89588 19.718 7.97827 15.7094 13.757 13.692C13.783 13.679 13.7961 13.679 13.8221 13.666C15.2668 17.4013 15.8525 20.5379 16.0087 21.436C14.7722 21.9696 13.4186 22.256 12 22.256ZM17.7137 20.4989C17.6096 19.8742 17.0629 16.8807 15.7223 13.1974C18.9371 12.6898 21.7484 13.5228 22.0998 13.6399C21.6573 16.4902 20.0174 18.9501 17.7137 20.4989Z",
    fill: "currentColor"
  }
) }), lc = ({ size: t = 24, ...e }) => /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", ...e, children: /* @__PURE__ */ n(
  "path",
  {
    d: "M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z",
    fill: "currentColor"
  }
) }), rc = ({ size: t = 24, ...e }) => /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", ...e, children: /* @__PURE__ */ n(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.25 2C7.51349 2 6.81155 2.28629 6.29747 2.78895C5.78414 3.29087 5.5 3.96677 5.5 4.66667C5.5 5.36657 5.78414 6.04247 6.29747 6.54438C6.81155 7.04705 7.51349 7.33333 8.25 7.33333H11V2H8.25ZM13 2V7.33333H15.75C16.1142 7.33333 16.4744 7.26316 16.8097 7.12736C17.145 6.99157 17.4482 6.79311 17.7025 6.54438C17.9569 6.29571 18.1574 6.00171 18.2938 5.67977C18.4301 5.35788 18.5 5.0137 18.5 4.66667C18.5 4.31964 18.4301 3.97545 18.2938 3.65356C18.1574 3.33162 17.9569 3.03763 17.7025 2.78895C17.4482 2.54022 17.145 2.34177 16.8097 2.20598C16.4744 2.07017 16.1142 2 15.75 2H13ZM18.6884 8.33334C18.8324 8.22191 18.9702 8.10211 19.1008 7.9744C19.5429 7.54211 19.8948 7.02769 20.1353 6.45991C20.3759 5.89208 20.5 5.28266 20.5 4.66667C20.5 4.05067 20.3759 3.44126 20.1353 2.87342C19.8948 2.30564 19.5429 1.79122 19.1008 1.35894C18.6587 0.926696 18.1351 0.584984 17.5605 0.352241C16.9858 0.119512 16.3707 0 15.75 0H8.25C6.99738 0 5.79167 0.486331 4.89923 1.35894C4.00603 2.23228 3.5 3.42165 3.5 4.66667C3.5 5.91169 4.00603 7.10105 4.89923 7.9744C5.03021 8.10247 5.16794 8.22222 5.31158 8.33333C5.16794 8.44445 5.03021 8.5642 4.89923 8.69227C4.00603 9.56562 3.5 10.755 3.5 12C3.5 13.245 4.00603 14.4344 4.89923 15.3077C5.03022 15.4358 5.16795 15.5556 5.31159 15.6667C5.16795 15.7778 5.03022 15.8975 4.89923 16.0256C4.00603 16.899 3.5 18.0883 3.5 19.3333C3.5 20.5784 4.00603 21.7677 4.89923 22.6411C5.79167 23.5137 6.99738 24 8.25 24C9.5026 24 10.7083 23.5137 11.6008 22.6411C12.494 21.7677 13 20.5784 13 19.3333V15.8051C13.2922 16.0089 13.6073 16.1799 13.9395 16.3144C14.5142 16.5472 15.1293 16.6667 15.75 16.6667C16.3707 16.6667 16.9858 16.5472 17.5605 16.3144C18.1351 16.0817 18.6587 15.74 19.1008 15.3077C19.5429 14.8754 19.8948 14.361 20.1353 13.7932C20.3759 13.2254 20.5 12.616 20.5 12C20.5 11.384 20.3759 10.7746 20.1353 10.2068C19.8948 9.63898 19.5429 9.12456 19.1008 8.69227C18.9702 8.56456 18.8324 8.44476 18.6884 8.33334ZM11 14.6667V9.33333H8.25C7.51349 9.33333 6.81155 9.61962 6.29747 10.1223C5.78414 10.6242 5.5 11.3001 5.5 12C5.5 12.6999 5.78414 13.3758 6.29747 13.8777C6.81155 14.3804 7.51349 14.6667 8.25 14.6667H11ZM11 16.6667H8.25C7.51349 16.6667 6.81155 16.953 6.29747 17.4556C5.78414 17.9575 5.5 18.6334 5.5 19.3333C5.5 20.0332 5.78414 20.7091 6.29747 21.2111C6.81155 21.7137 7.51349 22 8.25 22C8.98651 22 9.6884 21.7137 10.2025 21.2111C10.7159 20.7091 11 20.0332 11 19.3333V16.6667ZM15.75 9.33333C15.3858 9.33333 15.0256 9.4035 14.6903 9.53931C14.355 9.6751 14.0518 9.87356 13.7975 10.1223C13.5431 10.371 13.3426 10.665 13.2062 10.9869C13.0699 11.3088 13 11.653 13 12C13 12.347 13.0699 12.6912 13.2062 13.0131C13.3426 13.335 13.5431 13.629 13.7975 13.8777C14.0518 14.1264 14.355 14.3249 14.6903 14.4607C15.0256 14.5965 15.3858 14.6667 15.75 14.6667C16.1142 14.6667 16.4744 14.5965 16.8097 14.4607C17.145 14.3249 17.4482 14.1264 17.7025 13.8777C17.9569 13.629 18.1574 13.335 18.2938 13.0131C18.4301 12.6912 18.5 12.347 18.5 12C18.5 11.653 18.4301 11.3088 18.2938 10.9869C18.1574 10.665 17.9569 10.371 17.7025 10.1223C17.4482 9.87356 17.145 9.6751 16.8097 9.53931C16.4744 9.4035 16.1142 9.33333 15.75 9.33333Z",
    fill: "currentColor"
  }
) }), oc = ({ size: t = 24, ...e }) => /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", ...e, children: /* @__PURE__ */ n(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 0C5.3724 0 0 5.3808 0 12.0204C0 17.3304 3.438 21.8364 8.2068 23.4252C8.8068 23.5356 9.0252 23.1648 9.0252 22.8456C9.0252 22.5612 9.0156 21.804 9.0096 20.802C5.6712 21.528 4.9668 19.1904 4.9668 19.1904C4.422 17.8008 3.6348 17.4312 3.6348 17.4312C2.5452 16.6872 3.7176 16.7016 3.7176 16.7016C4.9212 16.7856 5.5548 17.94 5.5548 17.94C6.6252 19.776 8.364 19.2456 9.0468 18.9384C9.1572 18.162 9.4668 17.6328 9.81 17.3328C7.146 17.0292 4.344 15.9972 4.344 11.3916C4.344 10.08 4.812 9.006 5.5788 8.166C5.4552 7.8624 5.0436 6.6396 5.6964 4.986C5.6964 4.986 6.7044 4.662 8.9964 6.2172C9.97532 5.95022 10.9853 5.81423 12 5.8128C13.02 5.8176 14.046 5.9508 15.0048 6.2172C17.2956 4.662 18.3012 4.9848 18.3012 4.9848C18.9564 6.6396 18.5436 7.8624 18.4212 8.166C19.1892 9.006 19.6548 10.08 19.6548 11.3916C19.6548 16.0092 16.848 17.0256 14.1756 17.3232C14.6064 17.694 14.9892 18.4272 14.9892 19.5492C14.9892 21.1548 14.9748 22.452 14.9748 22.8456C14.9748 23.1672 15.1908 23.5416 15.8004 23.424C18.19 22.6225 20.2672 21.0904 21.7386 19.0441C23.2099 16.9977 24.001 14.5408 24 12.0204C24 5.3808 18.6264 0 12 0Z",
    fill: "currentColor"
  }
) }), ac = ({ size: t = 24, ...e }) => /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", ...e, children: /* @__PURE__ */ n(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.8426 6.54781C15.6036 5.36611 13.9501 4.72235 12.2392 4.74881C9.10863 4.74881 6.44981 6.86086 5.5018 9.70486V9.70493C4.99913 11.1953 4.99913 12.8091 5.50179 14.2994H5.50619C6.45861 17.139 9.11303 19.2511 12.2437 19.2511C13.8597 19.2511 15.247 18.8378 16.3223 18.1077V18.1047C17.5878 17.2669 18.452 15.9486 18.721 14.4582H12.2393V9.83722H23.558C23.6991 10.6397 23.7653 11.4599 23.7653 12.2756C23.7653 15.9254 22.4609 19.0112 20.1913 21.1012L20.1937 21.103C18.2051 22.9373 15.4757 24 12.2392 24C7.70204 24 3.55286 21.4426 1.51575 17.3904V17.3904C-0.186243 13.9996 -0.186239 10.0048 1.51576 6.61398H1.51579L1.51575 6.61395C3.55286 2.55737 7.70204 -4.58262e-05 12.2392 -4.58262e-05C15.22 -0.0353205 18.0992 1.08465 20.2686 3.12176L16.8426 6.54781Z",
    fill: "currentColor"
  }
) }), sc = ({ size: t = 24, ...e }) => /* @__PURE__ */ L("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", ...e, children: [
  /* @__PURE__ */ n(
    "path",
    {
      d: "M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8688 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8063 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8063 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ n(
    "path",
    {
      d: "M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z",
      fill: "currentColor"
    }
  ),
  /* @__PURE__ */ n(
    "path",
    {
      d: "M19.8469 5.59214C19.8469 6.38902 19.2 7.0312 18.4078 7.0312C17.6109 7.0312 16.9688 6.38433 16.9688 5.59214C16.9688 4.79526 17.6156 4.15308 18.4078 4.15308C19.2 4.15308 19.8469 4.79995 19.8469 5.59214Z",
      fill: "currentColor"
    }
  )
] }), dc = ({ size: t = 24, ...e }) => /* @__PURE__ */ L("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", ...e, children: [
  /* @__PURE__ */ L("g", { clipPath: "url(#clip0_7441_94320)", children: [
    /* @__PURE__ */ n(
      "path",
      {
        opacity: "0.2",
        d: "M0.363357 13.6945L0.421539 4.96865C0.431721 3.38902 1.53645 2.03484 3.06154 1.73302L11.4884 0.0624719C13.5132 -0.338983 15.3924 1.24574 15.3794 3.34247L15.3212 12.0697C15.3103 13.6487 14.2055 15.0021 12.6804 15.3047L4.25354 16.9752C2.22881 17.3767 0.349539 15.7919 0.363357 13.6945Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ n(
      "path",
      {
        opacity: "0.5",
        d: "M4.49226 17.1762L4.55044 8.44892C4.5599 6.87073 5.66535 5.51728 7.19045 5.21473L15.6174 3.54492C17.6421 3.14346 19.5214 4.72746 19.5075 6.82492L19.4494 15.5522C19.4392 17.1311 18.3344 18.4846 16.8094 18.7871L8.38245 20.4576C6.35772 20.8584 4.47845 19.2744 4.49226 17.1776V17.1762Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ n(
      "path",
      {
        opacity: "0.8",
        d: "M8.62091 20.6576L8.67909 11.9303C8.68928 10.3507 9.794 8.99797 11.3191 8.69542L19.746 7.02487C21.7707 6.62342 23.65 8.20815 23.6362 10.3049L23.578 19.0321C23.5678 20.6118 22.4631 21.9652 20.938 22.2671L12.5111 23.9376C10.4864 24.3391 8.60709 22.7543 8.62019 20.6576H8.62091Z",
        fill: "currentColor"
      }
    )
  ] }),
  /* @__PURE__ */ n("defs", { children: /* @__PURE__ */ n("clipPath", { id: "clip0_7441_94320", children: /* @__PURE__ */ n("rect", { width: "24", height: "24", fill: "white" }) }) })
] }), uc = ({ size: t = 24, ...e }) => /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", ...e, children: /* @__PURE__ */ n(
  "path",
  {
    d: "M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5563 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2938 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516V20.4516Z",
    fill: "currentColor"
  }
) }), cc = ({ size: t = 24, ...e }) => /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", ...e, children: /* @__PURE__ */ n(
  "path",
  {
    d: "M12 0C5.37188 0 0 5.37188 0 12C0 17.0859 3.16406 21.4266 7.62656 23.175C7.52344 22.2234 7.425 20.7703 7.66875 19.7344C7.88906 18.7969 9.075 13.7719 9.075 13.7719C9.075 13.7719 8.71406 13.0547 8.71406 11.9906C8.71406 10.3219 9.67969 9.075 10.8844 9.075C11.9062 9.075 12.4031 9.84375 12.4031 10.7672C12.4031 11.7984 11.7469 13.3359 11.4094 14.7609C11.1281 15.9562 12.0094 16.9313 13.1859 16.9313C15.3187 16.9313 16.9594 14.6812 16.9594 11.4375C16.9594 8.56406 14.8969 6.55313 11.9484 6.55313C8.53594 6.55313 6.52969 9.1125 6.52969 11.7609C6.52969 12.7922 6.92812 13.8984 7.425 14.4984C7.52344 14.6156 7.5375 14.7234 7.50937 14.8406C7.42031 15.2203 7.21406 16.0359 7.17656 16.2C7.125 16.4203 7.00313 16.4672 6.77344 16.3594C5.27344 15.6609 4.33594 13.4719 4.33594 11.7094C4.33594 7.92188 7.0875 4.44844 12.2625 4.44844C16.425 4.44844 19.6594 7.41563 19.6594 11.3813C19.6594 15.5156 17.0531 18.8438 13.4344 18.8438C12.2203 18.8438 11.0766 18.2109 10.6828 17.4656C10.6828 17.4656 10.0828 19.7578 9.9375 20.3203C9.66562 21.3609 8.93437 22.6688 8.44687 23.4656C9.57187 23.8125 10.7625 24 12 24C18.6281 24 24 18.6281 24 12C24 5.37188 18.6281 0 12 0Z",
    fill: "currentColor"
  }
) }), fc = ({ size: t = 24, ...e }) => /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", ...e, children: /* @__PURE__ */ n(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM18.2456 10.2456C19.214 10.2456 20 11.0316 20 12C20 12.7158 19.5649 13.3333 18.9895 13.614C19.0175 13.7824 19.0316 13.9509 19.0316 14.1333C19.0316 16.828 15.9018 19.0035 12.0281 19.0035C8.15439 19.0035 5.02457 16.828 5.02457 14.1333C5.02457 13.9509 5.0386 13.7684 5.06667 13.6C4.44913 13.3193 4.02808 12.7158 4.02808 12C4.02808 11.0316 4.81404 10.2456 5.78246 10.2456C6.24562 10.2456 6.68071 10.4421 6.98948 10.7368C8.1965 9.85261 9.86667 9.30524 11.7333 9.2491L12.6176 5.06664C12.6456 4.98243 12.6877 4.91226 12.7579 4.87015C12.8281 4.82805 12.9123 4.81401 12.9965 4.82805L15.9018 5.44559C16.0983 5.02454 16.5193 4.74384 17.0105 4.74384C17.6983 4.74384 18.2597 5.30524 18.2597 5.99296C18.2597 6.68068 17.6983 7.24208 17.0105 7.24208C16.3368 7.24208 15.7895 6.70875 15.7614 6.0491L13.1649 5.50173L12.3649 9.2491C14.1895 9.31927 15.8456 9.88068 17.0386 10.7368C17.3474 10.428 17.7684 10.2456 18.2456 10.2456ZM9.24913 12C8.56141 12 8.00001 12.5614 8.00001 13.2491C8.00001 13.9368 8.56141 14.4982 9.24913 14.4982C9.93685 14.4982 10.4983 13.9368 10.4983 13.2491C10.4983 12.5614 9.93685 12 9.24913 12ZM12.014 17.4596C12.4912 17.4596 14.1193 17.4035 14.9754 16.5473C15.1018 16.421 15.1018 16.2245 15.0035 16.0842C14.8772 15.9579 14.6667 15.9579 14.5404 16.0842C13.993 16.6175 12.8561 16.814 12.0281 16.814C11.2 16.814 10.0491 16.6175 9.51579 16.0842C9.38948 15.9579 9.17895 15.9579 9.05264 16.0842C8.92632 16.2105 8.92632 16.421 9.05264 16.5473C9.89474 17.3895 11.5368 17.4596 12.014 17.4596ZM13.5018 13.2491C13.5018 13.9368 14.0632 14.4982 14.7509 14.4982C15.4386 14.4982 16 13.9368 16 13.2491C16 12.5614 15.4386 12 14.7509 12C14.0632 12 13.5018 12.5614 13.5018 13.2491Z",
    fill: "currentColor"
  }
) }), pc = ({ size: t = 24, ...e }) => /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", ...e, children: /* @__PURE__ */ n(
  "path",
  {
    d: "M9.11911 0.350322L9.38845 1.44131C8.32691 1.70367 7.31091 2.12432 6.3746 2.68912L5.79842 1.72428C6.82904 1.10015 7.94881 0.63684 9.11911 0.350322V0.350322ZM14.8809 0.350322L14.6115 1.44131C15.6731 1.70367 16.6891 2.12432 17.6254 2.68912L18.2084 1.72428C17.1751 1.1007 16.0531 0.637446 14.8809 0.350322V0.350322ZM1.72427 5.79503C1.10072 6.82716 0.637457 7.94795 0.350307 9.11913L1.44129 9.38846C1.70365 8.32693 2.1243 7.31093 2.68911 6.37461L1.72427 5.79503ZM1.12423 12C1.12414 11.4545 1.16517 10.9097 1.24696 10.3704L0.135519 10.1999C-0.0451731 11.392 -0.0451731 12.6046 0.135519 13.7967L1.24696 13.6297C1.1653 13.0903 1.12427 12.5455 1.12423 12V12ZM18.2016 22.2723L17.6254 21.3109C16.6906 21.8762 15.6756 22.2969 14.615 22.5587L14.8843 23.6497C16.0532 23.3604 17.1716 22.8961 18.2016 22.2723ZM22.8758 12C22.8757 12.5455 22.8347 13.0903 22.753 13.6297L23.8645 13.7967C24.0452 12.6046 24.0452 11.392 23.8645 10.1999L22.753 10.3704C22.8348 10.9097 22.8759 11.4545 22.8758 12V12ZM23.6497 14.8775L22.5587 14.6082C22.297 15.671 21.8763 16.6882 21.3109 17.6254L22.2757 18.205C22.8999 17.172 23.3632 16.0499 23.6497 14.8775V14.8775ZM13.6297 22.7531C12.5494 22.9167 11.4506 22.9167 10.3703 22.7531L10.2033 23.8645C11.3943 24.0452 12.6057 24.0452 13.7967 23.8645L13.6297 22.7531ZM20.7552 18.4505C20.1072 19.3292 19.3302 20.1051 18.4505 20.7518L19.1187 21.6587C20.0876 20.9454 20.9449 20.0916 21.6621 19.1255L20.7552 18.4505ZM18.4505 3.24485C19.3302 3.89279 20.1072 4.66977 20.7552 5.54955L21.6621 4.87451C20.9474 3.90756 20.0925 3.05263 19.1255 2.33796L18.4505 3.24485ZM3.24483 5.54955C3.89278 4.66977 4.66976 3.89279 5.54954 3.24485L4.87449 2.33796C3.90754 3.05263 3.05262 3.90756 2.33795 4.87451L3.24483 5.54955ZM22.2757 5.79503L21.3109 6.37461C21.8762 7.30945 22.2969 8.3244 22.5587 9.38506L23.6497 9.11572C23.3625 7.94563 22.8992 6.82596 22.2757 5.79503V5.79503ZM10.3703 1.24698C11.4506 1.08331 12.5494 1.08331 13.6297 1.24698L13.7967 0.135534C12.6057 -0.0451779 11.3943 -0.0451779 10.2033 0.135534L10.3703 1.24698ZM3.82101 21.9587L1.49925 22.4974L2.04134 20.1756L0.946941 19.9199L0.404856 22.2417C0.370939 22.3856 0.365734 22.5348 0.389539 22.6808C0.413344 22.8267 0.465692 22.9666 0.543588 23.0923C0.621485 23.218 0.723402 23.3271 0.843508 23.4134C0.963615 23.4997 1.09956 23.5615 1.24355 23.5952C1.41196 23.6327 1.58655 23.6327 1.75495 23.5952L4.07671 23.0599L3.82101 21.9587ZM1.17878 18.9176L2.27658 19.1698L2.65161 17.5606C2.10394 16.642 1.69604 15.6469 1.44129 14.6082L0.350307 14.8775C0.595705 15.8718 0.966907 16.8307 1.45493 17.7311L1.17878 18.9176ZM6.42915 21.3518L4.81994 21.7268L5.07564 22.8246L6.25868 22.5485C7.15838 23.038 8.11751 23.4093 9.11229 23.6531L9.38163 22.5621C8.34612 22.304 7.35459 21.8939 6.43938 21.345L6.42915 21.3518ZM12 2.24932C6.61325 2.25273 2.25272 6.62009 2.25272 12.0034C2.25568 13.837 2.77433 15.6328 3.74941 17.1856L2.81185 21.1882L6.81099 20.2506C11.3693 23.1178 17.3902 21.7507 20.2574 17.1958C23.1247 12.641 21.7609 6.62009 17.2061 3.74943C15.6467 2.76884 13.842 2.24882 12 2.24932",
    fill: "currentColor"
  }
) }), hc = ({ size: t = 24, ...e }) => /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", ...e, children: /* @__PURE__ */ n(
  "path",
  {
    d: "M23.9132 17.4571C23.7478 17.0035 23.4291 16.7584 23.0675 16.5623C23.0001 16.5255 22.9388 16.4887 22.8836 16.4642C22.7733 16.4091 22.663 16.3539 22.5527 16.2988C21.425 15.6982 20.5425 14.9505 19.9358 14.0557C19.7642 13.8044 19.611 13.5348 19.4884 13.259C19.4332 13.1119 19.4394 13.0261 19.4761 12.9464C19.5129 12.8851 19.5619 12.8361 19.6232 12.7932C19.8193 12.6645 20.0155 12.5358 20.1503 12.45C20.3893 12.2907 20.5854 12.1681 20.708 12.0823C21.1676 11.7575 21.4924 11.4143 21.6947 11.0282C21.9827 10.4889 22.0195 9.85761 21.7989 9.28765C21.4924 8.47868 20.7325 7.98226 19.8071 7.98226C19.611 7.98226 19.421 8.00065 19.2249 8.04355C19.1758 8.0558 19.1207 8.06806 19.0716 8.08032C19.0778 7.52874 19.0655 6.94653 19.0165 6.37044C18.8449 4.35413 18.134 3.30002 17.3985 2.4604C16.9266 1.93334 16.3751 1.48596 15.7561 1.13663C14.6407 0.499254 13.3721 0.174438 11.9931 0.174438C10.6142 0.174438 9.35171 0.499254 8.2363 1.13663C7.61732 1.48596 7.06574 1.93334 6.59384 2.4604C5.85841 3.30002 5.15362 4.36026 4.9759 6.37044C4.92687 6.94653 4.91461 7.52874 4.92074 8.08032C4.87171 8.06806 4.82268 8.0558 4.76752 8.04355C4.57754 8.00065 4.38142 7.98226 4.19144 7.98226C3.26602 7.98226 2.50607 8.4848 2.19965 9.28765C1.97902 9.85761 2.01579 10.4889 2.30383 11.0282C2.50607 11.4143 2.83089 11.7575 3.29053 12.0823C3.41311 12.1681 3.60309 12.2907 3.84824 12.45C3.97694 12.5358 4.16692 12.6584 4.35691 12.7809C4.42432 12.8238 4.47948 12.879 4.52238 12.9464C4.55915 13.0261 4.56528 13.1119 4.50399 13.2712C4.38142 13.5409 4.23434 13.8044 4.06274 14.0496C3.46826 14.9198 2.61026 15.6614 1.51937 16.2559C0.943285 16.5623 0.342683 16.7645 0.085282 17.4571C-0.104704 17.978 0.0178675 18.5663 0.502026 19.0689C0.679755 19.2527 0.888127 19.4121 1.11489 19.5347C1.58679 19.7921 2.08933 19.9943 2.61639 20.1353C2.7267 20.1659 2.82476 20.2088 2.91669 20.2701C3.09442 20.4233 3.0699 20.6562 3.30279 20.9994C3.41923 21.1771 3.57245 21.3303 3.74405 21.4529C4.24047 21.7961 4.79817 21.8145 5.38651 21.839C5.9197 21.8574 6.5203 21.8819 7.21283 22.1087C7.50087 22.2006 7.79505 22.3844 8.13825 22.5989C8.96561 23.1076 10.0933 23.8001 11.987 23.8001C13.8807 23.8001 15.0145 23.1015 15.848 22.5928C16.1912 22.3844 16.4854 22.2006 16.7612 22.1087C17.4476 21.8819 18.0543 21.8574 18.5875 21.839C19.1758 21.8145 19.7335 21.7961 20.23 21.4529C20.4383 21.3058 20.6099 21.122 20.7325 20.9013C20.9041 20.6133 20.898 20.411 21.0573 20.2701C21.1431 20.2088 21.2412 20.1659 21.3392 20.1414C21.8663 20.0004 22.3811 19.7982 22.8591 19.5347C23.0981 19.406 23.3188 19.2343 23.5026 19.0321L23.5087 19.026C23.9868 18.5357 24.1032 17.9596 23.9132 17.4571ZM22.234 18.358C21.2105 18.9218 20.5241 18.8605 19.9971 19.2037C19.5436 19.4917 19.8132 20.1169 19.4884 20.3436C19.0839 20.6194 17.895 20.3252 16.3628 20.8339C15.0942 21.2507 14.2914 22.458 12.0115 22.458C9.73168 22.458 8.94722 21.2568 7.66022 20.8339C6.12807 20.3252 4.93912 20.6255 4.53464 20.3436C4.20982 20.1169 4.47335 19.4917 4.02596 19.2037C3.49278 18.8605 2.8125 18.9218 1.78903 18.358C1.13327 17.9964 1.50711 17.7757 1.72162 17.6716C5.43554 15.8759 6.03001 13.0996 6.05453 12.8913C6.08517 12.64 6.12194 12.4439 5.84616 12.1926C5.58263 11.9475 4.40594 11.2182 4.07499 10.9914C3.53568 10.6114 3.29666 10.2376 3.47439 9.77181C3.59696 9.45312 3.89726 9.33055 4.20982 9.33055C4.30788 9.33055 4.40594 9.34281 4.50399 9.36119C5.09847 9.48989 5.67456 9.78407 6.0055 9.86987C6.0484 9.88212 6.08517 9.88825 6.12807 9.88825C6.3058 9.88825 6.36709 9.79632 6.35483 9.59408C6.31806 8.94445 6.22613 7.68196 6.33031 6.49914C6.47127 4.87507 6.9922 4.06609 7.61732 3.35518C7.91762 3.01197 9.32107 1.52886 12.0115 1.52886C14.702 1.52886 16.1054 3.00585 16.4057 3.34905C17.0308 4.05996 17.5518 4.86894 17.6927 6.49301C17.7969 7.67583 17.705 8.93832 17.6621 9.58795C17.6498 9.80245 17.7111 9.88212 17.8888 9.88212C17.9317 9.88212 17.9685 9.87599 18.0114 9.86374C18.3423 9.78406 18.9184 9.48376 19.5129 9.35506C19.611 9.33055 19.709 9.32442 19.8071 9.32442C20.1196 9.32442 20.4199 9.44699 20.5425 9.76568C20.7202 10.2315 20.4812 10.6053 19.9419 10.9853C19.6171 11.212 18.4404 11.9413 18.1707 12.1865C17.895 12.4377 17.9317 12.6339 17.9624 12.8851C17.9869 13.0935 18.5814 15.8698 22.2953 17.6654C22.5159 17.7696 22.8836 17.9964 22.234 18.358Z",
    fill: "currentColor"
  }
) }), mc = ({ size: t = 24, ...e }) => /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", ...e, children: /* @__PURE__ */ n(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.43 8.85893C11.2628 9.3444 8.93014 10.3492 5.43189 11.8733C4.86383 12.0992 4.56626 12.3202 4.53917 12.5363C4.49339 12.9015 4.95071 13.0453 5.57347 13.2411C5.65818 13.2678 5.74595 13.2954 5.83594 13.3246C6.44864 13.5238 7.27283 13.7568 7.70129 13.766C8.08994 13.7744 8.52373 13.6142 9.00264 13.2853C12.2712 11.079 13.9584 9.96381 14.0643 9.93977C14.139 9.92281 14.2426 9.90148 14.3128 9.96385C14.3829 10.0262 14.376 10.1443 14.3686 10.176C14.3233 10.3691 12.5281 12.0381 11.5991 12.9018C11.3095 13.171 11.1041 13.362 11.0621 13.4056C10.968 13.5033 10.8721 13.5958 10.78 13.6846C10.2108 14.2333 9.78391 14.6448 10.8036 15.3168C11.2936 15.6397 11.6858 15.9067 12.077 16.1731C12.5042 16.4641 12.9303 16.7543 13.4816 17.1157C13.6221 17.2077 13.7562 17.3034 13.8869 17.3965C14.3841 17.751 14.8307 18.0694 15.3826 18.0186C15.7032 17.9891 16.0345 17.6876 16.2027 16.7884C16.6002 14.6631 17.3816 10.0585 17.5622 8.16097C17.578 7.99473 17.5581 7.78197 17.5422 7.68857C17.5262 7.59518 17.4928 7.46211 17.3714 7.3636C17.2276 7.24694 17.0056 7.22234 16.9064 7.22408C16.455 7.23203 15.7626 7.47282 12.43 8.85893Z",
    fill: "currentColor"
  }
) }), gc = ({ size: t = 24, ...e }) => /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", ...e, children: /* @__PURE__ */ n(
  "path",
  {
    d: "M17.0725 0H13.0278V16.3478C13.0278 18.2957 11.4722 19.8957 9.53626 19.8957C7.60034 19.8957 6.04469 18.2957 6.04469 16.3478C6.04469 14.4348 7.56577 12.8695 9.43257 12.8V8.69567C5.31872 8.7652 2 12.1391 2 16.3478C2 20.5913 5.38786 24 9.57085 24C13.7538 24 17.1416 20.5565 17.1416 16.3478V7.9652C18.6627 9.07827 20.5295 9.73913 22.5 9.77393V5.66957C19.4579 5.56522 17.0725 3.06087 17.0725 0Z",
    fill: "currentColor"
  }
) }), bc = ({ size: t = 24, ...e }) => /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", ...e, children: /* @__PURE__ */ n(
  "path",
  {
    d: "M14.6 24C11 24 8.3 22.15 8.3 17.7V10.6H5V6.75C8.6 5.8 10.1 2.7 10.3 0H14.05V6.1H18.4V10.6H14.05V16.8C14.05 18.65 15 19.3 16.5 19.3H18.6V24H14.6Z",
    fill: "currentColor"
  }
) }), vc = ({ size: t = 24, ...e }) => /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", ...e, children: /* @__PURE__ */ n(
  "path",
  {
    d: "M7.55016 21.75C16.6045 21.75 21.5583 14.2468 21.5583 7.74192C21.5583 7.53098 21.5536 7.31536 21.5442 7.10442C22.5079 6.40752 23.3395 5.54432 24 4.55536C23.1025 4.95466 22.1496 5.21544 21.1739 5.3288C22.2013 4.71297 22.9705 3.74553 23.3391 2.60583C22.3726 3.17862 21.3156 3.58267 20.2134 3.80067C19.4708 3.01162 18.489 2.48918 17.4197 2.31411C16.3504 2.13905 15.2532 2.32111 14.2977 2.83216C13.3423 3.3432 12.5818 4.15477 12.1338 5.14137C11.6859 6.12798 11.5754 7.23468 11.8195 8.29036C9.86249 8.19215 7.94794 7.68377 6.19998 6.79816C4.45203 5.91255 2.90969 4.6695 1.67297 3.14958C1.0444 4.2333 0.852057 5.51571 1.13503 6.73615C1.418 7.9566 2.15506 9.02351 3.19641 9.72005C2.41463 9.69523 1.64998 9.48474 0.965625 9.10598V9.16692C0.964925 10.3042 1.3581 11.4066 2.07831 12.2868C2.79852 13.167 3.80132 13.7706 4.91625 13.995C4.19206 14.1932 3.43198 14.2221 2.69484 14.0794C3.00945 15.0575 3.62157 15.913 4.44577 16.5264C5.26997 17.1398 6.26512 17.4807 7.29234 17.5013C5.54842 18.8712 3.39417 19.6142 1.17656 19.6107C0.783287 19.6101 0.390399 19.586 0 19.5385C2.25286 20.9838 4.87353 21.7514 7.55016 21.75Z",
    fill: "currentColor"
  }
) }), Cc = ({ size: t = 24, ...e }) => /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 22", fill: "none", ...e, children: /* @__PURE__ */ n(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.9455 22L10.396 14.0901L3.44886 22H0.509766L9.09209 12.2311L0.509766 0H8.05571L13.286 7.45502L19.8393 0H22.7784L14.5943 9.31648L23.4914 22H15.9455ZM19.2185 19.77H17.2398L4.71811 2.23H6.6971L11.7121 9.25316L12.5793 10.4719L19.2185 19.77Z",
    fill: "currentColor"
  }
) }), Vc = ({ size: t = 24, ...e }) => /* @__PURE__ */ n("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "none", ...e, children: /* @__PURE__ */ n(
  "path",
  {
    d: "M23.7609 7.20005C23.7609 7.20005 23.5266 5.54536 22.8047 4.8188C21.8906 3.86255 20.8688 3.85786 20.4 3.80161C17.0438 3.55786 12.0047 3.55786 12.0047 3.55786H11.9953C11.9953 3.55786 6.95625 3.55786 3.6 3.80161C3.13125 3.85786 2.10938 3.86255 1.19531 4.8188C0.473438 5.54536 0.24375 7.20005 0.24375 7.20005C0.24375 7.20005 0 9.14536 0 11.086V12.9047C0 14.8454 0.239062 16.7907 0.239062 16.7907C0.239062 16.7907 0.473437 18.4454 1.19062 19.1719C2.10469 20.1282 3.30469 20.0954 3.83906 20.1985C5.76094 20.3813 12 20.4375 12 20.4375C12 20.4375 17.0438 20.4282 20.4 20.1891C20.8688 20.1329 21.8906 20.1282 22.8047 19.1719C23.5266 18.4454 23.7609 16.7907 23.7609 16.7907C23.7609 16.7907 24 14.85 24 12.9047V11.086C24 9.14536 23.7609 7.20005 23.7609 7.20005ZM9.52031 15.1125V8.36724L16.0031 11.7516L9.52031 15.1125Z",
    fill: "currentColor"
  }
) }), n8 = (t) => {
  const { size: e = "lg", className: i } = t, l = a8[e];
  return /* @__PURE__ */ n(l, { className: i });
}, l8 = (t) => /* @__PURE__ */ L(
  "svg",
  {
    width: "768",
    height: "768",
    viewBox: "0 0 768 768",
    fill: "none",
    ...t,
    className: k("text-indigo-100", t.className),
    children: [
      /* @__PURE__ */ n(
        "mask",
        {
          id: "mask0_4933_392997",
          style: { maskType: "alpha" },
          maskUnits: "userSpaceOnUse",
          x: "0",
          y: "0",
          width: "768",
          height: "768",
          children: /* @__PURE__ */ n("rect", { width: "768", height: "768", fill: "url(#paint0_radial_4933_392997)" })
        }
      ),
      /* @__PURE__ */ L("g", { mask: "url(#mask0_4933_392997)", children: [
        /* @__PURE__ */ n("circle", { cx: "384", cy: "384", r: "95.5", stroke: "currentColor" }),
        /* @__PURE__ */ n("circle", { cx: "384", cy: "384", r: "143.5", stroke: "currentColor" }),
        /* @__PURE__ */ n("circle", { cx: "384", cy: "384", r: "191.5", stroke: "currentColor" }),
        /* @__PURE__ */ n("circle", { cx: "384", cy: "384", r: "239.5", stroke: "currentColor" }),
        /* @__PURE__ */ n("circle", { cx: "384", cy: "384", r: "287.5", stroke: "currentColor" }),
        /* @__PURE__ */ n("circle", { cx: "384", cy: "384", r: "335.5", stroke: "currentColor" }),
        /* @__PURE__ */ n("circle", { cx: "384", cy: "384", r: "383.5", stroke: "currentColor" })
      ] }),
      /* @__PURE__ */ n("defs", { children: /* @__PURE__ */ L(
        "radialGradient",
        {
          id: "paint0_radial_4933_392997",
          cx: "0",
          cy: "0",
          r: "1",
          gradientUnits: "userSpaceOnUse",
          gradientTransform: "translate(384 384) rotate(90) scale(384 384)",
          children: [
            /* @__PURE__ */ n("stop", {}),
            /* @__PURE__ */ n("stop", { offset: "1", stopOpacity: "0" })
          ]
        }
      ) })
    ]
  }
), r8 = (t) => /* @__PURE__ */ L(
  "svg",
  {
    width: "480",
    height: "480",
    viewBox: "0 0 480 480",
    fill: "none",
    ...t,
    className: k("text-indigo-100", t.className),
    children: [
      /* @__PURE__ */ n(
        "mask",
        {
          id: "mask0_4933_393068",
          style: { maskType: "alpha" },
          maskUnits: "userSpaceOnUse",
          x: "0",
          y: "0",
          width: "480",
          height: "480",
          children: /* @__PURE__ */ n("rect", { width: "480", height: "480", fill: "url(#paint0_radial_4933_393068)" })
        }
      ),
      /* @__PURE__ */ L("g", { mask: "url(#mask0_4933_393068)", children: [
        /* @__PURE__ */ n("circle", { cx: "240", cy: "240", r: "79.5", stroke: "currentColor" }),
        /* @__PURE__ */ n("circle", { cx: "240", cy: "240", r: "111.5", stroke: "currentColor" }),
        /* @__PURE__ */ n("circle", { cx: "240", cy: "240", r: "143.5", stroke: "currentColor" }),
        /* @__PURE__ */ n("circle", { cx: "240", cy: "240", r: "143.5", stroke: "currentColor" }),
        /* @__PURE__ */ n("circle", { cx: "240", cy: "240", r: "175.5", stroke: "currentColor" }),
        /* @__PURE__ */ n("circle", { cx: "240", cy: "240", r: "207.5", stroke: "currentColor" }),
        /* @__PURE__ */ n("circle", { cx: "240", cy: "240", r: "239.5", stroke: "currentColor" })
      ] }),
      /* @__PURE__ */ n("defs", { children: /* @__PURE__ */ L(
        "radialGradient",
        {
          id: "paint0_radial_4933_393068",
          cx: "0",
          cy: "0",
          r: "1",
          gradientUnits: "userSpaceOnUse",
          gradientTransform: "translate(240 240) rotate(90) scale(240 240)",
          children: [
            /* @__PURE__ */ n("stop", {}),
            /* @__PURE__ */ n("stop", { offset: "1", stopOpacity: "0" })
          ]
        }
      ) })
    ]
  }
), o8 = (t) => /* @__PURE__ */ L(
  "svg",
  {
    width: "336",
    height: "336",
    viewBox: "0 0 336 336",
    fill: "none",
    ...t,
    className: k("text-indigo-100", t.className),
    children: [
      /* @__PURE__ */ n(
        "mask",
        {
          id: "mask0_4947_375931",
          style: { maskType: "alpha" },
          maskUnits: "userSpaceOnUse",
          x: "0",
          y: "0",
          width: "336",
          height: "336",
          children: /* @__PURE__ */ n("rect", { width: "336", height: "336", fill: "url(#paint0_radial_4947_375931)" })
        }
      ),
      /* @__PURE__ */ L("g", { mask: "url(#mask0_4947_375931)", children: [
        /* @__PURE__ */ n("circle", { cx: "168", cy: "168", r: "47.5", stroke: "currentColor" }),
        /* @__PURE__ */ n("circle", { cx: "168", cy: "168", r: "71.5", stroke: "currentColor" }),
        /* @__PURE__ */ n("circle", { cx: "168", cy: "168", r: "95.5", stroke: "currentColor" }),
        /* @__PURE__ */ n("circle", { cx: "168", cy: "168", r: "119.5", stroke: "currentColor" }),
        /* @__PURE__ */ n("circle", { cx: "168", cy: "168", r: "143.5", stroke: "currentColor" }),
        /* @__PURE__ */ n("circle", { cx: "168", cy: "168", r: "167.5", stroke: "currentColor" })
      ] }),
      /* @__PURE__ */ n("defs", { children: /* @__PURE__ */ L(
        "radialGradient",
        {
          id: "paint0_radial_4947_375931",
          cx: "0",
          cy: "0",
          r: "1",
          gradientUnits: "userSpaceOnUse",
          gradientTransform: "translate(168 168) rotate(90) scale(168 168)",
          children: [
            /* @__PURE__ */ n("stop", {}),
            /* @__PURE__ */ n("stop", { offset: "1", stopOpacity: "0" })
          ]
        }
      ) })
    ]
  }
), a8 = {
  sm: o8,
  md: r8,
  lg: l8
}, s8 = (t) => {
  const { size: e = "lg", className: i } = t, l = f8[e];
  return /* @__PURE__ */ n(l, { className: i });
}, d8 = (t) => /* @__PURE__ */ L(
  "svg",
  {
    width: "768",
    height: "768",
    viewBox: "0 0 768 768",
    fill: "none",
    ...t,
    className: k("text-indigo-100", t.className),
    children: [
      /* @__PURE__ */ n(
        "mask",
        {
          id: "mask0_4933_393109",
          style: { maskType: "alpha" },
          maskUnits: "userSpaceOnUse",
          x: "0",
          y: "0",
          width: "768",
          height: "768",
          children: /* @__PURE__ */ n("rect", { width: "768", height: "768", fill: "url(#paint0_radial_4933_393109)" })
        }
      ),
      /* @__PURE__ */ n("g", { mask: "url(#mask0_4933_393109)", children: /* @__PURE__ */ L("g", { clipPath: "url(#clip0_4933_393109)", children: [
        /* @__PURE__ */ L("g", { clipPath: "url(#clip1_4933_393109)", children: [
          /* @__PURE__ */ n("line", { x1: "0.5", x2: "0.5", y2: "768", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "48.5", x2: "48.5", y2: "768", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "96.5", x2: "96.5", y2: "768", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "144.5", x2: "144.5", y2: "768", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "192.5", x2: "192.5", y2: "768", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "240.5", x2: "240.5", y2: "768", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "288.5", x2: "288.5", y2: "768", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "336.5", x2: "336.5", y2: "768", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "384.5", x2: "384.5", y2: "768", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "432.5", x2: "432.5", y2: "768", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "480.5", x2: "480.5", y2: "768", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "528.5", x2: "528.5", y2: "768", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "576.5", x2: "576.5", y2: "768", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "624.5", x2: "624.5", y2: "768", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "672.5", x2: "672.5", y2: "768", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "720.5", x2: "720.5", y2: "768", stroke: "currentColor" })
        ] }),
        /* @__PURE__ */ n(
          "rect",
          {
            x: "0.5",
            y: "0.5",
            width: "767",
            height: "767",
            stroke: "currentColor"
          }
        ),
        /* @__PURE__ */ L("g", { clipPath: "url(#clip2_4933_393109)", children: [
          /* @__PURE__ */ n("line", { y1: "47.5", x2: "768", y2: "47.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "95.5", x2: "768", y2: "95.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "143.5", x2: "768", y2: "143.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "191.5", x2: "768", y2: "191.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "239.5", x2: "768", y2: "239.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "287.5", x2: "768", y2: "287.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "335.5", x2: "768", y2: "335.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "383.5", x2: "768", y2: "383.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "431.5", x2: "768", y2: "431.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "479.5", x2: "768", y2: "479.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "527.5", x2: "768", y2: "527.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "575.5", x2: "768", y2: "575.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "623.5", x2: "768", y2: "623.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "671.5", x2: "768", y2: "671.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "719.5", x2: "768", y2: "719.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "767.5", x2: "768", y2: "767.5", stroke: "currentColor" })
        ] }),
        /* @__PURE__ */ n(
          "rect",
          {
            x: "0.5",
            y: "0.5",
            width: "767",
            height: "767",
            stroke: "currentColor"
          }
        )
      ] }) }),
      /* @__PURE__ */ L("defs", { children: [
        /* @__PURE__ */ L(
          "radialGradient",
          {
            id: "paint0_radial_4933_393109",
            cx: "0",
            cy: "0",
            r: "1",
            gradientUnits: "userSpaceOnUse",
            gradientTransform: "translate(384 384) rotate(90) scale(384 384)",
            children: [
              /* @__PURE__ */ n("stop", {}),
              /* @__PURE__ */ n("stop", { offset: "1", stopOpacity: "0" })
            ]
          }
        ),
        /* @__PURE__ */ n("clipPath", { id: "clip0_4933_393109", children: /* @__PURE__ */ n("rect", { width: "768", height: "768", fill: "white" }) }),
        /* @__PURE__ */ n("clipPath", { id: "clip1_4933_393109", children: /* @__PURE__ */ n("rect", { width: "768", height: "768", fill: "white" }) }),
        /* @__PURE__ */ n("clipPath", { id: "clip2_4933_393109", children: /* @__PURE__ */ n("rect", { width: "768", height: "768", fill: "white" }) })
      ] })
    ]
  }
), u8 = (t) => /* @__PURE__ */ L(
  "svg",
  {
    width: "480",
    height: "480",
    viewBox: "0 0 480 480",
    ...t,
    fill: "none",
    className: k("text-indigo-100", t.className),
    children: [
      /* @__PURE__ */ n(
        "mask",
        {
          id: "mask0_4933_393121",
          style: { maskType: "alpha" },
          maskUnits: "userSpaceOnUse",
          x: "0",
          y: "0",
          width: "480",
          height: "480",
          children: /* @__PURE__ */ n("rect", { width: "480", height: "480", fill: "url(#paint0_radial_4933_393121)" })
        }
      ),
      /* @__PURE__ */ n("g", { mask: "url(#mask0_4933_393121)", children: /* @__PURE__ */ L("g", { clipPath: "url(#clip0_4933_393121)", children: [
        /* @__PURE__ */ L("g", { clipPath: "url(#clip1_4933_393121)", children: [
          /* @__PURE__ */ n("line", { x1: "0.5", x2: "0.5", y2: "480", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "32.5", x2: "32.5", y2: "480", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "64.5", x2: "64.5", y2: "480", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "96.5", x2: "96.5", y2: "480", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "128.5", x2: "128.5", y2: "480", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "160.5", x2: "160.5", y2: "480", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "192.5", x2: "192.5", y2: "480", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "224.5", x2: "224.5", y2: "480", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "256.5", x2: "256.5", y2: "480", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "288.5", x2: "288.5", y2: "480", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "320.5", x2: "320.5", y2: "480", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "352.5", x2: "352.5", y2: "480", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "384.5", x2: "384.5", y2: "480", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "416.5", x2: "416.5", y2: "480", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "448.5", x2: "448.5", y2: "480", stroke: "currentColor" })
        ] }),
        /* @__PURE__ */ n(
          "rect",
          {
            x: "0.5",
            y: "0.5",
            width: "479",
            height: "479",
            stroke: "currentColor"
          }
        ),
        /* @__PURE__ */ L("g", { clipPath: "url(#clip2_4933_393121)", children: [
          /* @__PURE__ */ n("line", { y1: "31.5", x2: "480", y2: "31.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "63.5", x2: "480", y2: "63.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "95.5", x2: "480", y2: "95.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "127.5", x2: "480", y2: "127.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "159.5", x2: "480", y2: "159.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "191.5", x2: "480", y2: "191.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "223.5", x2: "480", y2: "223.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "255.5", x2: "480", y2: "255.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "287.5", x2: "480", y2: "287.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "319.5", x2: "480", y2: "319.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "351.5", x2: "480", y2: "351.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "383.5", x2: "480", y2: "383.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "415.5", x2: "480", y2: "415.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "447.5", x2: "480", y2: "447.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "479.5", x2: "480", y2: "479.5", stroke: "currentColor" })
        ] }),
        /* @__PURE__ */ n(
          "rect",
          {
            x: "0.5",
            y: "0.5",
            width: "479",
            height: "479",
            stroke: "currentColor"
          }
        )
      ] }) }),
      /* @__PURE__ */ L("defs", { children: [
        /* @__PURE__ */ L(
          "radialGradient",
          {
            id: "paint0_radial_4933_393121",
            cx: "0",
            cy: "0",
            r: "1",
            gradientUnits: "userSpaceOnUse",
            gradientTransform: "translate(240 240) rotate(90) scale(240 240)",
            children: [
              /* @__PURE__ */ n("stop", {}),
              /* @__PURE__ */ n("stop", { offset: "1", stopOpacity: "0" })
            ]
          }
        ),
        /* @__PURE__ */ n("clipPath", { id: "clip0_4933_393121", children: /* @__PURE__ */ n("rect", { width: "480", height: "480", fill: "white" }) }),
        /* @__PURE__ */ n("clipPath", { id: "clip1_4933_393121", children: /* @__PURE__ */ n("rect", { width: "480", height: "480", fill: "white" }) }),
        /* @__PURE__ */ n("clipPath", { id: "clip2_4933_393121", children: /* @__PURE__ */ n("rect", { width: "480", height: "480", fill: "white" }) })
      ] })
    ]
  }
), c8 = (t) => /* @__PURE__ */ L(
  "svg",
  {
    width: "336",
    height: "336",
    viewBox: "0 0 336 336",
    ...t,
    fill: "none",
    className: k("text-indigo-100", t.className),
    children: [
      /* @__PURE__ */ n(
        "mask",
        {
          id: "mask0_4947_375939",
          style: { maskType: "alpha" },
          maskUnits: "userSpaceOnUse",
          x: "0",
          y: "0",
          width: "336",
          height: "336",
          children: /* @__PURE__ */ n("rect", { width: "336", height: "336", fill: "url(#paint0_radial_4947_375939)" })
        }
      ),
      /* @__PURE__ */ n("g", { mask: "url(#mask0_4947_375939)", children: /* @__PURE__ */ L("g", { clipPath: "url(#clip0_4947_375939)", children: [
        /* @__PURE__ */ L("g", { clipPath: "url(#clip1_4947_375939)", children: [
          /* @__PURE__ */ n("line", { x1: "0.5", x2: "0.5", y2: "336", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "24.5", x2: "24.5", y2: "336", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "48.5", x2: "48.5", y2: "336", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "72.5", x2: "72.5", y2: "336", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "96.5", x2: "96.5", y2: "336", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "120.5", x2: "120.5", y2: "336", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "144.5", x2: "144.5", y2: "336", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "168.5", x2: "168.5", y2: "336", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "192.5", x2: "192.5", y2: "336", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "216.5", x2: "216.5", y2: "336", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "240.5", x2: "240.5", y2: "336", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "264.5", x2: "264.5", y2: "336", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "288.5", x2: "288.5", y2: "336", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { x1: "312.5", x2: "312.5", y2: "336", stroke: "currentColor" })
        ] }),
        /* @__PURE__ */ n(
          "rect",
          {
            x: "0.5",
            y: "0.5",
            width: "335",
            height: "335",
            stroke: "currentColor"
          }
        ),
        /* @__PURE__ */ L("g", { clipPath: "url(#clip2_4947_375939)", children: [
          /* @__PURE__ */ n("line", { y1: "23.5", x2: "336", y2: "23.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "47.5", x2: "336", y2: "47.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "71.5", x2: "336", y2: "71.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "95.5", x2: "336", y2: "95.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "119.5", x2: "336", y2: "119.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "143.5", x2: "336", y2: "143.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "167.5", x2: "336", y2: "167.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "191.5", x2: "336", y2: "191.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "215.5", x2: "336", y2: "215.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "239.5", x2: "336", y2: "239.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "263.5", x2: "336", y2: "263.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "287.5", x2: "336", y2: "287.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "311.5", x2: "336", y2: "311.5", stroke: "currentColor" }),
          /* @__PURE__ */ n("line", { y1: "335.5", x2: "336", y2: "335.5", stroke: "currentColor" })
        ] }),
        /* @__PURE__ */ n(
          "rect",
          {
            x: "0.5",
            y: "0.5",
            width: "335",
            height: "335",
            stroke: "currentColor"
          }
        )
      ] }) }),
      /* @__PURE__ */ L("defs", { children: [
        /* @__PURE__ */ L(
          "radialGradient",
          {
            id: "paint0_radial_4947_375939",
            cx: "0",
            cy: "0",
            r: "1",
            gradientUnits: "userSpaceOnUse",
            gradientTransform: "translate(168 168) rotate(90) scale(168 168)",
            children: [
              /* @__PURE__ */ n("stop", {}),
              /* @__PURE__ */ n("stop", { offset: "1", stopOpacity: "0" })
            ]
          }
        ),
        /* @__PURE__ */ n("clipPath", { id: "clip0_4947_375939", children: /* @__PURE__ */ n("rect", { width: "336", height: "336", fill: "white" }) }),
        /* @__PURE__ */ n("clipPath", { id: "clip1_4947_375939", children: /* @__PURE__ */ n("rect", { width: "336", height: "336", fill: "white" }) }),
        /* @__PURE__ */ n("clipPath", { id: "clip2_4947_375939", children: /* @__PURE__ */ n("rect", { width: "336", height: "336", fill: "white" }) })
      ] })
    ]
  }
), f8 = {
  sm: c8,
  md: u8,
  lg: d8
}, p8 = (t) => {
  const { size: e = "md", className: i } = t, l = g8[e];
  return /* @__PURE__ */ n(l, { className: i });
}, h8 = (t) => /* @__PURE__ */ L("svg", { width: "960", height: "960", viewBox: "0 0 960 960", fill: "none", ...t, children: [
  /* @__PURE__ */ n(
    "mask",
    {
      id: "mask0_4940_405685",
      style: { maskType: "alpha" },
      maskUnits: "userSpaceOnUse",
      x: "0",
      y: "0",
      width: "960",
      height: "960",
      children: /* @__PURE__ */ n("rect", { width: "960", height: "960", fill: "url(#paint0_radial_4940_405685)" })
    }
  ),
  /* @__PURE__ */ L("g", { mask: "url(#mask0_4940_405685)", children: [
    /* @__PURE__ */ L("g", { clipPath: "url(#clip0_4940_405685)", children: [
      /* @__PURE__ */ n("mask", { id: "path-3-inside-1_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M0 0H96V96H0V0Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M96 96V97H97V96H96ZM95 0V96H97V0H95ZM96 95H0V97H96V95Z",
          fill: "#D0D5DD",
          mask: "url(#path-3-inside-1_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-5-inside-2_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M96 0H192V96H96V0Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M192 96V97H193V96H192ZM191 0V96H193V0H191ZM192 95H96V97H192V95Z",
          fill: "#D0D5DD",
          mask: "url(#path-5-inside-2_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-7-inside-3_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M192 0H288V96H192V0Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M288 96V97H289V96H288ZM287 0V96H289V0H287ZM288 95H192V97H288V95Z",
          fill: "#D0D5DD",
          mask: "url(#path-7-inside-3_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-9-inside-4_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M288 0H384V96H288V0Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M384 96V97H385V96H384ZM383 0V96H385V0H383ZM384 95H288V97H384V95Z",
          fill: "#D0D5DD",
          mask: "url(#path-9-inside-4_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-11-inside-5_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M384 0H480V96H384V0Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M480 96V97H481V96H480ZM479 0V96H481V0H479ZM480 95H384V97H480V95Z",
          fill: "#D0D5DD",
          mask: "url(#path-11-inside-5_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-13-inside-6_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M480 0H576V96H480V0Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M576 96V97H577V96H576ZM575 0V96H577V0H575ZM576 95H480V97H576V95Z",
          fill: "#D0D5DD",
          mask: "url(#path-13-inside-6_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-15-inside-7_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M576 0H672V96H576V0Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M672 96V97H673V96H672ZM671 0V96H673V0H671ZM672 95H576V97H672V95Z",
          fill: "#D0D5DD",
          mask: "url(#path-15-inside-7_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-17-inside-8_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M672 0H768V96H672V0Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M768 96V97H769V96H768ZM767 0V96H769V0H767ZM768 95H672V97H768V95Z",
          fill: "#D0D5DD",
          mask: "url(#path-17-inside-8_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-19-inside-9_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M768 0H864V96H768V0Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M864 96V97H865V96H864ZM863 0V96H865V0H863ZM864 95H768V97H864V95Z",
          fill: "#D0D5DD",
          mask: "url(#path-19-inside-9_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-21-inside-10_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M864 0H960V96H864V0Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M960 96V97H961V96H960ZM959 0V96H961V0H959ZM960 95H864V97H960V95Z",
          fill: "#D0D5DD",
          mask: "url(#path-21-inside-10_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-23-inside-11_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M0 96H96V192H0V96Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M96 192V193H97V192H96ZM95 96V192H97V96H95ZM96 191H0V193H96V191Z",
          fill: "#D0D5DD",
          mask: "url(#path-23-inside-11_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-25-inside-12_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M96 96H192V192H96V96Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M192 192V193H193V192H192ZM191 96V192H193V96H191ZM192 191H96V193H192V191Z",
          fill: "#D0D5DD",
          mask: "url(#path-25-inside-12_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-27-inside-13_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M192 96H288V192H192V96Z" }) }),
      /* @__PURE__ */ n("path", { d: "M192 96H288V192H192V96Z", fill: "#F2F4F7" }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M288 192V193H289V192H288ZM287 96V192H289V96H287ZM288 191H192V193H288V191Z",
          fill: "#D0D5DD",
          mask: "url(#path-27-inside-13_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-29-inside-14_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M288 96H384V192H288V96Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M384 192V193H385V192H384ZM383 96V192H385V96H383ZM384 191H288V193H384V191Z",
          fill: "#D0D5DD",
          mask: "url(#path-29-inside-14_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-31-inside-15_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M384 96H480V192H384V96Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M480 192V193H481V192H480ZM479 96V192H481V96H479ZM480 191H384V193H480V191Z",
          fill: "#D0D5DD",
          mask: "url(#path-31-inside-15_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-33-inside-16_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M480 96H576V192H480V96Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M576 192V193H577V192H576ZM575 96V192H577V96H575ZM576 191H480V193H576V191Z",
          fill: "#D0D5DD",
          mask: "url(#path-33-inside-16_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-35-inside-17_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M576 96H672V192H576V96Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M672 192V193H673V192H672ZM671 96V192H673V96H671ZM672 191H576V193H672V191Z",
          fill: "#D0D5DD",
          mask: "url(#path-35-inside-17_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-37-inside-18_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M672 96H768V192H672V96Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M768 192V193H769V192H768ZM767 96V192H769V96H767ZM768 191H672V193H768V191Z",
          fill: "#D0D5DD",
          mask: "url(#path-37-inside-18_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-39-inside-19_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M768 96H864V192H768V96Z" }) }),
      /* @__PURE__ */ n("path", { d: "M768 96H864V192H768V96Z", fill: "#F2F4F7" }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M864 192V193H865V192H864ZM863 96V192H865V96H863ZM864 191H768V193H864V191Z",
          fill: "#D0D5DD",
          mask: "url(#path-39-inside-19_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-41-inside-20_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M864 96H960V192H864V96Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M960 192V193H961V192H960ZM959 96V192H961V96H959ZM960 191H864V193H960V191Z",
          fill: "#D0D5DD",
          mask: "url(#path-41-inside-20_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-43-inside-21_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M0 192H96V288H0V192Z" }) }),
      /* @__PURE__ */ n("path", { d: "M0 192H96V288H0V192Z", fill: "#F2F4F7" }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M96 288V289H97V288H96ZM95 192V288H97V192H95ZM96 287H0V289H96V287Z",
          fill: "#D0D5DD",
          mask: "url(#path-43-inside-21_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-45-inside-22_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M96 192H192V288H96V192Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M192 288V289H193V288H192ZM191 192V288H193V192H191ZM192 287H96V289H192V287Z",
          fill: "#D0D5DD",
          mask: "url(#path-45-inside-22_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-47-inside-23_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M192 192H288V288H192V192Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M288 288V289H289V288H288ZM287 192V288H289V192H287ZM288 287H192V289H288V287Z",
          fill: "#D0D5DD",
          mask: "url(#path-47-inside-23_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-49-inside-24_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M288 192H384V288H288V192Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M384 288V289H385V288H384ZM383 192V288H385V192H383ZM384 287H288V289H384V287Z",
          fill: "#D0D5DD",
          mask: "url(#path-49-inside-24_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-51-inside-25_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M384 192H480V288H384V192Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M480 288V289H481V288H480ZM479 192V288H481V192H479ZM480 287H384V289H480V287Z",
          fill: "#D0D5DD",
          mask: "url(#path-51-inside-25_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-53-inside-26_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M480 192H576V288H480V192Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M576 288V289H577V288H576ZM575 192V288H577V192H575ZM576 287H480V289H576V287Z",
          fill: "#D0D5DD",
          mask: "url(#path-53-inside-26_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-55-inside-27_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M576 192H672V288H576V192Z" }) }),
      /* @__PURE__ */ n("path", { d: "M576 192H672V288H576V192Z", fill: "#F2F4F7" }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M672 288V289H673V288H672ZM671 192V288H673V192H671ZM672 287H576V289H672V287Z",
          fill: "#D0D5DD",
          mask: "url(#path-55-inside-27_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-57-inside-28_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M672 192H768V288H672V192Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M768 288V289H769V288H768ZM767 192V288H769V192H767ZM768 287H672V289H768V287Z",
          fill: "#D0D5DD",
          mask: "url(#path-57-inside-28_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-59-inside-29_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M768 192H864V288H768V192Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M864 288V289H865V288H864ZM863 192V288H865V192H863ZM864 287H768V289H864V287Z",
          fill: "#D0D5DD",
          mask: "url(#path-59-inside-29_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-61-inside-30_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M864 192H960V288H864V192Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M960 288V289H961V288H960ZM959 192V288H961V192H959ZM960 287H864V289H960V287Z",
          fill: "#D0D5DD",
          mask: "url(#path-61-inside-30_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-63-inside-31_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M0 288H96V384H0V288Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M96 384V385H97V384H96ZM95 288V384H97V288H95ZM96 383H0V385H96V383Z",
          fill: "#D0D5DD",
          mask: "url(#path-63-inside-31_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-65-inside-32_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M96 288H192V384H96V288Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M192 384V385H193V384H192ZM191 288V384H193V288H191ZM192 383H96V385H192V383Z",
          fill: "#D0D5DD",
          mask: "url(#path-65-inside-32_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-67-inside-33_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M192 288H288V384H192V288Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M288 384V385H289V384H288ZM287 288V384H289V288H287ZM288 383H192V385H288V383Z",
          fill: "#D0D5DD",
          mask: "url(#path-67-inside-33_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-69-inside-34_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M288 288H384V384H288V288Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M384 384V385H385V384H384ZM383 288V384H385V288H383ZM384 383H288V385H384V383Z",
          fill: "#D0D5DD",
          mask: "url(#path-69-inside-34_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-71-inside-35_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M384 288H480V384H384V288Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M480 384V385H481V384H480ZM479 288V384H481V288H479ZM480 383H384V385H480V383Z",
          fill: "#D0D5DD",
          mask: "url(#path-71-inside-35_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-73-inside-36_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M480 288H576V384H480V288Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M576 384V385H577V384H576ZM575 288V384H577V288H575ZM576 383H480V385H576V383Z",
          fill: "#D0D5DD",
          mask: "url(#path-73-inside-36_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-75-inside-37_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M576 288H672V384H576V288Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M672 384V385H673V384H672ZM671 288V384H673V288H671ZM672 383H576V385H672V383Z",
          fill: "#D0D5DD",
          mask: "url(#path-75-inside-37_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-77-inside-38_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M672 288H768V384H672V288Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M768 384V385H769V384H768ZM767 288V384H769V288H767ZM768 383H672V385H768V383Z",
          fill: "#D0D5DD",
          mask: "url(#path-77-inside-38_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-79-inside-39_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M768 288H864V384H768V288Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M864 384V385H865V384H864ZM863 288V384H865V288H863ZM864 383H768V385H864V383Z",
          fill: "#D0D5DD",
          mask: "url(#path-79-inside-39_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-81-inside-40_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M864 288H960V384H864V288Z" }) }),
      /* @__PURE__ */ n("path", { d: "M864 288H960V384H864V288Z", fill: "#F2F4F7" }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M960 384V385H961V384H960ZM959 288V384H961V288H959ZM960 383H864V385H960V383Z",
          fill: "#D0D5DD",
          mask: "url(#path-81-inside-40_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-83-inside-41_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M0 384H96V480H0V384Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M96 480V481H97V480H96ZM95 384V480H97V384H95ZM96 479H0V481H96V479Z",
          fill: "#D0D5DD",
          mask: "url(#path-83-inside-41_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-85-inside-42_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M96 384H192V480H96V384Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M192 480V481H193V480H192ZM191 384V480H193V384H191ZM192 479H96V481H192V479Z",
          fill: "#D0D5DD",
          mask: "url(#path-85-inside-42_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-87-inside-43_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M192 384H288V480H192V384Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M288 480V481H289V480H288ZM287 384V480H289V384H287ZM288 479H192V481H288V479Z",
          fill: "#D0D5DD",
          mask: "url(#path-87-inside-43_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-89-inside-44_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M288 384H384V480H288V384Z" }) }),
      /* @__PURE__ */ n("path", { d: "M288 384H384V480H288V384Z", fill: "#F2F4F7" }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M384 480V481H385V480H384ZM383 384V480H385V384H383ZM384 479H288V481H384V479Z",
          fill: "#D0D5DD",
          mask: "url(#path-89-inside-44_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-91-inside-45_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M384 384H480V480H384V384Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M480 480V481H481V480H480ZM479 384V480H481V384H479ZM480 479H384V481H480V479Z",
          fill: "#D0D5DD",
          mask: "url(#path-91-inside-45_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-93-inside-46_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M480 384H576V480H480V384Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M576 480V481H577V480H576ZM575 384V480H577V384H575ZM576 479H480V481H576V479Z",
          fill: "#D0D5DD",
          mask: "url(#path-93-inside-46_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-95-inside-47_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M576 384H672V480H576V384Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M672 480V481H673V480H672ZM671 384V480H673V384H671ZM672 479H576V481H672V479Z",
          fill: "#D0D5DD",
          mask: "url(#path-95-inside-47_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-97-inside-48_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M672 384H768V480H672V384Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M768 480V481H769V480H768ZM767 384V480H769V384H767ZM768 479H672V481H768V479Z",
          fill: "#D0D5DD",
          mask: "url(#path-97-inside-48_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-99-inside-49_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M768 384H864V480H768V384Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M864 480V481H865V480H864ZM863 384V480H865V384H863ZM864 479H768V481H864V479Z",
          fill: "#D0D5DD",
          mask: "url(#path-99-inside-49_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-101-inside-50_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M864 384H960V480H864V384Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M960 480V481H961V480H960ZM959 384V480H961V384H959ZM960 479H864V481H960V479Z",
          fill: "#D0D5DD",
          mask: "url(#path-101-inside-50_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-103-inside-51_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M0 480H96V576H0V480Z" }) }),
      /* @__PURE__ */ n("path", { d: "M0 480H96V576H0V480Z", fill: "#F2F4F7" }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M96 576V577H97V576H96ZM95 480V576H97V480H95ZM96 575H0V577H96V575Z",
          fill: "#D0D5DD",
          mask: "url(#path-103-inside-51_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-105-inside-52_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M96 480H192V576H96V480Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M192 576V577H193V576H192ZM191 480V576H193V480H191ZM192 575H96V577H192V575Z",
          fill: "#D0D5DD",
          mask: "url(#path-105-inside-52_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-107-inside-53_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M192 480H288V576H192V480Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M288 576V577H289V576H288ZM287 480V576H289V480H287ZM288 575H192V577H288V575Z",
          fill: "#D0D5DD",
          mask: "url(#path-107-inside-53_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-109-inside-54_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M288 480H384V576H288V480Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M384 576V577H385V576H384ZM383 480V576H385V480H383ZM384 575H288V577H384V575Z",
          fill: "#D0D5DD",
          mask: "url(#path-109-inside-54_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-111-inside-55_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M384 480H480V576H384V480Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M480 576V577H481V576H480ZM479 480V576H481V480H479ZM480 575H384V577H480V575Z",
          fill: "#D0D5DD",
          mask: "url(#path-111-inside-55_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-113-inside-56_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M480 480H576V576H480V480Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M576 576V577H577V576H576ZM575 480V576H577V480H575ZM576 575H480V577H576V575Z",
          fill: "#D0D5DD",
          mask: "url(#path-113-inside-56_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-115-inside-57_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M576 480H672V576H576V480Z" }) }),
      /* @__PURE__ */ n("path", { d: "M576 480H672V576H576V480Z", fill: "#F2F4F7" }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M672 576V577H673V576H672ZM671 480V576H673V480H671ZM672 575H576V577H672V575Z",
          fill: "#D0D5DD",
          mask: "url(#path-115-inside-57_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-117-inside-58_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M672 480H768V576H672V480Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M768 576V577H769V576H768ZM767 480V576H769V480H767ZM768 575H672V577H768V575Z",
          fill: "#D0D5DD",
          mask: "url(#path-117-inside-58_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-119-inside-59_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M768 480H864V576H768V480Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M864 576V577H865V576H864ZM863 480V576H865V480H863ZM864 575H768V577H864V575Z",
          fill: "#D0D5DD",
          mask: "url(#path-119-inside-59_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-121-inside-60_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M864 480H960V576H864V480Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M960 576V577H961V576H960ZM959 480V576H961V480H959ZM960 575H864V577H960V575Z",
          fill: "#D0D5DD",
          mask: "url(#path-121-inside-60_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-123-inside-61_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M0 576H96V672H0V576Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M96 672V673H97V672H96ZM95 576V672H97V576H95ZM96 671H0V673H96V671Z",
          fill: "#D0D5DD",
          mask: "url(#path-123-inside-61_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-125-inside-62_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M96 576H192V672H96V576Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M192 672V673H193V672H192ZM191 576V672H193V576H191ZM192 671H96V673H192V671Z",
          fill: "#D0D5DD",
          mask: "url(#path-125-inside-62_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-127-inside-63_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M192 576H288V672H192V576Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M288 672V673H289V672H288ZM287 576V672H289V576H287ZM288 671H192V673H288V671Z",
          fill: "#D0D5DD",
          mask: "url(#path-127-inside-63_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-129-inside-64_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M288 576H384V672H288V576Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M384 672V673H385V672H384ZM383 576V672H385V576H383ZM384 671H288V673H384V671Z",
          fill: "#D0D5DD",
          mask: "url(#path-129-inside-64_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-131-inside-65_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M384 576H480V672H384V576Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M480 672V673H481V672H480ZM479 576V672H481V576H479ZM480 671H384V673H480V671Z",
          fill: "#D0D5DD",
          mask: "url(#path-131-inside-65_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-133-inside-66_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M480 576H576V672H480V576Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M576 672V673H577V672H576ZM575 576V672H577V576H575ZM576 671H480V673H576V671Z",
          fill: "#D0D5DD",
          mask: "url(#path-133-inside-66_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-135-inside-67_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M576 576H672V672H576V576Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M672 672V673H673V672H672ZM671 576V672H673V576H671ZM672 671H576V673H672V671Z",
          fill: "#D0D5DD",
          mask: "url(#path-135-inside-67_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-137-inside-68_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M672 576H768V672H672V576Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M768 672V673H769V672H768ZM767 576V672H769V576H767ZM768 671H672V673H768V671Z",
          fill: "#D0D5DD",
          mask: "url(#path-137-inside-68_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-139-inside-69_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M768 576H864V672H768V576Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M864 672V673H865V672H864ZM863 576V672H865V576H863ZM864 671H768V673H864V671Z",
          fill: "#D0D5DD",
          mask: "url(#path-139-inside-69_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-141-inside-70_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M864 576H960V672H864V576Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M960 672V673H961V672H960ZM959 576V672H961V576H959ZM960 671H864V673H960V671Z",
          fill: "#D0D5DD",
          mask: "url(#path-141-inside-70_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-143-inside-71_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M0 672H96V768H0V672Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M96 768V769H97V768H96ZM95 672V768H97V672H95ZM96 767H0V769H96V767Z",
          fill: "#D0D5DD",
          mask: "url(#path-143-inside-71_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-145-inside-72_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M96 672H192V768H96V672Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M192 768V769H193V768H192ZM191 672V768H193V672H191ZM192 767H96V769H192V767Z",
          fill: "#D0D5DD",
          mask: "url(#path-145-inside-72_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-147-inside-73_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M192 672H288V768H192V672Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M288 768V769H289V768H288ZM287 672V768H289V672H287ZM288 767H192V769H288V767Z",
          fill: "#D0D5DD",
          mask: "url(#path-147-inside-73_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-149-inside-74_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M288 672H384V768H288V672Z" }) }),
      /* @__PURE__ */ n("path", { d: "M288 672H384V768H288V672Z", fill: "#F2F4F7" }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M384 768V769H385V768H384ZM383 672V768H385V672H383ZM384 767H288V769H384V767Z",
          fill: "#D0D5DD",
          mask: "url(#path-149-inside-74_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-151-inside-75_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M384 672H480V768H384V672Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M480 768V769H481V768H480ZM479 672V768H481V672H479ZM480 767H384V769H480V767Z",
          fill: "#D0D5DD",
          mask: "url(#path-151-inside-75_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-153-inside-76_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M480 672H576V768H480V672Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M576 768V769H577V768H576ZM575 672V768H577V672H575ZM576 767H480V769H576V767Z",
          fill: "#D0D5DD",
          mask: "url(#path-153-inside-76_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-155-inside-77_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M576 672H672V768H576V672Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M672 768V769H673V768H672ZM671 672V768H673V672H671ZM672 767H576V769H672V767Z",
          fill: "#D0D5DD",
          mask: "url(#path-155-inside-77_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-157-inside-78_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M672 672H768V768H672V672Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M768 768V769H769V768H768ZM767 672V768H769V672H767ZM768 767H672V769H768V767Z",
          fill: "#D0D5DD",
          mask: "url(#path-157-inside-78_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-159-inside-79_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M768 672H864V768H768V672Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M864 768V769H865V768H864ZM863 672V768H865V672H863ZM864 767H768V769H864V767Z",
          fill: "#D0D5DD",
          mask: "url(#path-159-inside-79_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-161-inside-80_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M864 672H960V768H864V672Z" }) }),
      /* @__PURE__ */ n("path", { d: "M864 672H960V768H864V672Z", fill: "#F2F4F7" }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M960 768V769H961V768H960ZM959 672V768H961V672H959ZM960 767H864V769H960V767Z",
          fill: "#D0D5DD",
          mask: "url(#path-161-inside-80_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-163-inside-81_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M0 768H96V864H0V768Z" }) }),
      /* @__PURE__ */ n("path", { d: "M0 768H96V864H0V768Z", fill: "#F2F4F7" }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M96 864V865H97V864H96ZM95 768V864H97V768H95ZM96 863H0V865H96V863Z",
          fill: "#D0D5DD",
          mask: "url(#path-163-inside-81_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-165-inside-82_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M96 768H192V864H96V768Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M192 864V865H193V864H192ZM191 768V864H193V768H191ZM192 863H96V865H192V863Z",
          fill: "#D0D5DD",
          mask: "url(#path-165-inside-82_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-167-inside-83_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M192 768H288V864H192V768Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M288 864V865H289V864H288ZM287 768V864H289V768H287ZM288 863H192V865H288V863Z",
          fill: "#D0D5DD",
          mask: "url(#path-167-inside-83_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-169-inside-84_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M288 768H384V864H288V768Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M384 864V865H385V864H384ZM383 768V864H385V768H383ZM384 863H288V865H384V863Z",
          fill: "#D0D5DD",
          mask: "url(#path-169-inside-84_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-171-inside-85_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M384 768H480V864H384V768Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M480 864V865H481V864H480ZM479 768V864H481V768H479ZM480 863H384V865H480V863Z",
          fill: "#D0D5DD",
          mask: "url(#path-171-inside-85_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-173-inside-86_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M480 768H576V864H480V768Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M576 864V865H577V864H576ZM575 768V864H577V768H575ZM576 863H480V865H576V863Z",
          fill: "#D0D5DD",
          mask: "url(#path-173-inside-86_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-175-inside-87_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M576 768H672V864H576V768Z" }) }),
      /* @__PURE__ */ n("path", { d: "M576 768H672V864H576V768Z", fill: "#F2F4F7" }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M672 864V865H673V864H672ZM671 768V864H673V768H671ZM672 863H576V865H672V863Z",
          fill: "#D0D5DD",
          mask: "url(#path-175-inside-87_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-177-inside-88_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M672 768H768V864H672V768Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M768 864V865H769V864H768ZM767 768V864H769V768H767ZM768 863H672V865H768V863Z",
          fill: "#D0D5DD",
          mask: "url(#path-177-inside-88_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-179-inside-89_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M768 768H864V864H768V768Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M864 864V865H865V864H864ZM863 768V864H865V768H863ZM864 863H768V865H864V863Z",
          fill: "#D0D5DD",
          mask: "url(#path-179-inside-89_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-181-inside-90_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M864 768H960V864H864V768Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M960 864V865H961V864H960ZM959 768V864H961V768H959ZM960 863H864V865H960V863Z",
          fill: "#D0D5DD",
          mask: "url(#path-181-inside-90_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-183-inside-91_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M0 864H96V960H0V864Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M96 960V961H97V960H96ZM95 864V960H97V864H95ZM96 959H0V961H96V959Z",
          fill: "#D0D5DD",
          mask: "url(#path-183-inside-91_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-185-inside-92_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M96 864H192V960H96V864Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M192 960V961H193V960H192ZM191 864V960H193V864H191ZM192 959H96V961H192V959Z",
          fill: "#D0D5DD",
          mask: "url(#path-185-inside-92_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-187-inside-93_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M192 864H288V960H192V864Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M288 960V961H289V960H288ZM287 864V960H289V864H287ZM288 959H192V961H288V959Z",
          fill: "#D0D5DD",
          mask: "url(#path-187-inside-93_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-189-inside-94_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M288 864H384V960H288V864Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M384 960V961H385V960H384ZM383 864V960H385V864H383ZM384 959H288V961H384V959Z",
          fill: "#D0D5DD",
          mask: "url(#path-189-inside-94_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-191-inside-95_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M384 864H480V960H384V864Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M480 960V961H481V960H480ZM479 864V960H481V864H479ZM480 959H384V961H480V959Z",
          fill: "#D0D5DD",
          mask: "url(#path-191-inside-95_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-193-inside-96_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M480 864H576V960H480V864Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M576 960V961H577V960H576ZM575 864V960H577V864H575ZM576 959H480V961H576V959Z",
          fill: "#D0D5DD",
          mask: "url(#path-193-inside-96_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-195-inside-97_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M576 864H672V960H576V864Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M672 960V961H673V960H672ZM671 864V960H673V864H671ZM672 959H576V961H672V959Z",
          fill: "#D0D5DD",
          mask: "url(#path-195-inside-97_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-197-inside-98_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M672 864H768V960H672V864Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M768 960V961H769V960H768ZM767 864V960H769V864H767ZM768 959H672V961H768V959Z",
          fill: "#D0D5DD",
          mask: "url(#path-197-inside-98_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-199-inside-99_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M768 864H864V960H768V864Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M864 960V961H865V960H864ZM863 864V960H865V864H863ZM864 959H768V961H864V959Z",
          fill: "#D0D5DD",
          mask: "url(#path-199-inside-99_4940_405685)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-201-inside-100_4940_405685", fill: "white", children: /* @__PURE__ */ n("path", { d: "M864 864H960V960H864V864Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M960 960V961H961V960H960ZM959 864V960H961V864H959ZM960 959H864V961H960V959Z",
          fill: "#D0D5DD",
          mask: "url(#path-201-inside-100_4940_405685)"
        }
      )
    ] }),
    /* @__PURE__ */ n("rect", { x: "0.5", y: "0.5", width: "959", height: "959", stroke: "#D0D5DD" })
  ] }),
  /* @__PURE__ */ L("defs", { children: [
    /* @__PURE__ */ L(
      "radialGradient",
      {
        id: "paint0_radial_4940_405685",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(480 -0.000114441) rotate(90) scale(960 501.059)",
        children: [
          /* @__PURE__ */ n("stop", {}),
          /* @__PURE__ */ n("stop", { offset: "0.953125", stopOpacity: "0" })
        ]
      }
    ),
    /* @__PURE__ */ n("clipPath", { id: "clip0_4940_405685", children: /* @__PURE__ */ n("rect", { width: "960", height: "960", fill: "white" }) })
  ] })
] }), m8 = (t) => /* @__PURE__ */ L("svg", { width: "960", height: "960", viewBox: "0 0 960 960", fill: "none", ...t, children: [
  /* @__PURE__ */ n(
    "mask",
    {
      id: "mask0_4940_405682",
      style: { maskType: "alpha" },
      maskUnits: "userSpaceOnUse",
      x: "0",
      y: "0",
      width: "960",
      height: "960",
      children: /* @__PURE__ */ n("rect", { width: "960", height: "960", fill: "url(#paint0_radial_4940_405682)" })
    }
  ),
  /* @__PURE__ */ L("g", { mask: "url(#mask0_4940_405682)", children: [
    /* @__PURE__ */ L("g", { clipPath: "url(#clip0_4940_405682)", children: [
      /* @__PURE__ */ n("mask", { id: "path-3-inside-1_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M0 0H64V64H0V0Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M64 64V65H65V64H64ZM63 0V64H65V0H63ZM64 63H0V65H64V63Z",
          fill: "#D0D5DD",
          mask: "url(#path-3-inside-1_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-5-inside-2_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M64 0H128V64H64V0Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M128 64V65H129V64H128ZM127 0V64H129V0H127ZM128 63H64V65H128V63Z",
          fill: "#D0D5DD",
          mask: "url(#path-5-inside-2_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-7-inside-3_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M128 0H192V64H128V0Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M192 64V65H193V64H192ZM191 0V64H193V0H191ZM192 63H128V65H192V63Z",
          fill: "#D0D5DD",
          mask: "url(#path-7-inside-3_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-9-inside-4_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M192 0H256V64H192V0Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M256 64V65H257V64H256ZM255 0V64H257V0H255ZM256 63H192V65H256V63Z",
          fill: "#D0D5DD",
          mask: "url(#path-9-inside-4_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-11-inside-5_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M256 0H320V64H256V0Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M320 64V65H321V64H320ZM319 0V64H321V0H319ZM320 63H256V65H320V63Z",
          fill: "#D0D5DD",
          mask: "url(#path-11-inside-5_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-13-inside-6_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M320 0H384V64H320V0Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M384 64V65H385V64H384ZM383 0V64H385V0H383ZM384 63H320V65H384V63Z",
          fill: "#D0D5DD",
          mask: "url(#path-13-inside-6_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-15-inside-7_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M384 0H448V64H384V0Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M448 64V65H449V64H448ZM447 0V64H449V0H447ZM448 63H384V65H448V63Z",
          fill: "#D0D5DD",
          mask: "url(#path-15-inside-7_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-17-inside-8_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M448 0H512V64H448V0Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M512 64V65H513V64H512ZM511 0V64H513V0H511ZM512 63H448V65H512V63Z",
          fill: "#D0D5DD",
          mask: "url(#path-17-inside-8_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-19-inside-9_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M512 0H576V64H512V0Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M576 64V65H577V64H576ZM575 0V64H577V0H575ZM576 63H512V65H576V63Z",
          fill: "#D0D5DD",
          mask: "url(#path-19-inside-9_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-21-inside-10_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M576 0H640V64H576V0Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M640 64V65H641V64H640ZM639 0V64H641V0H639ZM640 63H576V65H640V63Z",
          fill: "#D0D5DD",
          mask: "url(#path-21-inside-10_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-23-inside-11_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M640 0H704V64H640V0Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M704 64V65H705V64H704ZM703 0V64H705V0H703ZM704 63H640V65H704V63Z",
          fill: "#D0D5DD",
          mask: "url(#path-23-inside-11_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-25-inside-12_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M704 0H768V64H704V0Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M768 64V65H769V64H768ZM767 0V64H769V0H767ZM768 63H704V65H768V63Z",
          fill: "#D0D5DD",
          mask: "url(#path-25-inside-12_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-27-inside-13_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M768 0H832V64H768V0Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M832 64V65H833V64H832ZM831 0V64H833V0H831ZM832 63H768V65H832V63Z",
          fill: "#D0D5DD",
          mask: "url(#path-27-inside-13_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-29-inside-14_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M832 0H896V64H832V0Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M896 64V65H897V64H896ZM895 0V64H897V0H895ZM896 63H832V65H896V63Z",
          fill: "#D0D5DD",
          mask: "url(#path-29-inside-14_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-31-inside-15_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M896 0H960V64H896V0Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M960 64V65H961V64H960ZM959 0V64H961V0H959ZM960 63H896V65H960V63Z",
          fill: "#D0D5DD",
          mask: "url(#path-31-inside-15_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-33-inside-16_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M0 64H64V128H0V64Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M64 128V129H65V128H64ZM63 64V128H65V64H63ZM64 127H0V129H64V127Z",
          fill: "#D0D5DD",
          mask: "url(#path-33-inside-16_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-35-inside-17_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M64 64H128V128H64V64Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M128 128V129H129V128H128ZM127 64V128H129V64H127ZM128 127H64V129H128V127Z",
          fill: "#D0D5DD",
          mask: "url(#path-35-inside-17_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-37-inside-18_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M128 64H192V128H128V64Z" }) }),
      /* @__PURE__ */ n("path", { d: "M128 64H192V128H128V64Z", fill: "#F2F4F7" }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M192 128V129H193V128H192ZM191 64V128H193V64H191ZM192 127H128V129H192V127Z",
          fill: "#D0D5DD",
          mask: "url(#path-37-inside-18_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-39-inside-19_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M192 64H256V128H192V64Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M256 128V129H257V128H256ZM255 64V128H257V64H255ZM256 127H192V129H256V127Z",
          fill: "#D0D5DD",
          mask: "url(#path-39-inside-19_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-41-inside-20_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M256 64H320V128H256V64Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M320 128V129H321V128H320ZM319 64V128H321V64H319ZM320 127H256V129H320V127Z",
          fill: "#D0D5DD",
          mask: "url(#path-41-inside-20_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-43-inside-21_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M320 64H384V128H320V64Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M384 128V129H385V128H384ZM383 64V128H385V64H383ZM384 127H320V129H384V127Z",
          fill: "#D0D5DD",
          mask: "url(#path-43-inside-21_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-45-inside-22_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M384 64H448V128H384V64Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M448 128V129H449V128H448ZM447 64V128H449V64H447ZM448 127H384V129H448V127Z",
          fill: "#D0D5DD",
          mask: "url(#path-45-inside-22_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-47-inside-23_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M448 64H512V128H448V64Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M512 128V129H513V128H512ZM511 64V128H513V64H511ZM512 127H448V129H512V127Z",
          fill: "#D0D5DD",
          mask: "url(#path-47-inside-23_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-49-inside-24_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M512 64H576V128H512V64Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M576 128V129H577V128H576ZM575 64V128H577V64H575ZM576 127H512V129H576V127Z",
          fill: "#D0D5DD",
          mask: "url(#path-49-inside-24_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-51-inside-25_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M576 64H640V128H576V64Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M640 128V129H641V128H640ZM639 64V128H641V64H639ZM640 127H576V129H640V127Z",
          fill: "#D0D5DD",
          mask: "url(#path-51-inside-25_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-53-inside-26_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M640 64H704V128H640V64Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M704 128V129H705V128H704ZM703 64V128H705V64H703ZM704 127H640V129H704V127Z",
          fill: "#D0D5DD",
          mask: "url(#path-53-inside-26_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-55-inside-27_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M704 64H768V128H704V64Z" }) }),
      /* @__PURE__ */ n("path", { d: "M704 64H768V128H704V64Z", fill: "#F2F4F7" }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M768 128V129H769V128H768ZM767 64V128H769V64H767ZM768 127H704V129H768V127Z",
          fill: "#D0D5DD",
          mask: "url(#path-55-inside-27_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-57-inside-28_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M768 64H832V128H768V64Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M832 128V129H833V128H832ZM831 64V128H833V64H831ZM832 127H768V129H832V127Z",
          fill: "#D0D5DD",
          mask: "url(#path-57-inside-28_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-59-inside-29_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M832 64H896V128H832V64Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M896 128V129H897V128H896ZM895 64V128H897V64H895ZM896 127H832V129H896V127Z",
          fill: "#D0D5DD",
          mask: "url(#path-59-inside-29_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-61-inside-30_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M896 64H960V128H896V64Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M960 128V129H961V128H960ZM959 64V128H961V64H959ZM960 127H896V129H960V127Z",
          fill: "#D0D5DD",
          mask: "url(#path-61-inside-30_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-63-inside-31_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M0 128H64V192H0V128Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M64 192V193H65V192H64ZM63 128V192H65V128H63ZM64 191H0V193H64V191Z",
          fill: "#D0D5DD",
          mask: "url(#path-63-inside-31_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-65-inside-32_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M64 128H128V192H64V128Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M128 192V193H129V192H128ZM127 128V192H129V128H127ZM128 191H64V193H128V191Z",
          fill: "#D0D5DD",
          mask: "url(#path-65-inside-32_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-67-inside-33_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M128 128H192V192H128V128Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M192 192V193H193V192H192ZM191 128V192H193V128H191ZM192 191H128V193H192V191Z",
          fill: "#D0D5DD",
          mask: "url(#path-67-inside-33_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-69-inside-34_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M192 128H256V192H192V128Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M256 192V193H257V192H256ZM255 128V192H257V128H255ZM256 191H192V193H256V191Z",
          fill: "#D0D5DD",
          mask: "url(#path-69-inside-34_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-71-inside-35_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M256 128H320V192H256V128Z" }) }),
      /* @__PURE__ */ n("path", { d: "M256 128H320V192H256V128Z", fill: "#F2F4F7" }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M320 192V193H321V192H320ZM319 128V192H321V128H319ZM320 191H256V193H320V191Z",
          fill: "#D0D5DD",
          mask: "url(#path-71-inside-35_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-73-inside-36_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M320 128H384V192H320V128Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M384 192V193H385V192H384ZM383 128V192H385V128H383ZM384 191H320V193H384V191Z",
          fill: "#D0D5DD",
          mask: "url(#path-73-inside-36_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-75-inside-37_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M384 128H448V192H384V128Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M448 192V193H449V192H448ZM447 128V192H449V128H447ZM448 191H384V193H448V191Z",
          fill: "#D0D5DD",
          mask: "url(#path-75-inside-37_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-77-inside-38_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M448 128H512V192H448V128Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M512 192V193H513V192H512ZM511 128V192H513V128H511ZM512 191H448V193H512V191Z",
          fill: "#D0D5DD",
          mask: "url(#path-77-inside-38_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-79-inside-39_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M512 128H576V192H512V128Z" }) }),
      /* @__PURE__ */ n("path", { d: "M512 128H576V192H512V128Z", fill: "#F2F4F7" }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M576 192V193H577V192H576ZM575 128V192H577V128H575ZM576 191H512V193H576V191Z",
          fill: "#D0D5DD",
          mask: "url(#path-79-inside-39_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-81-inside-40_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M576 128H640V192H576V128Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M640 192V193H641V192H640ZM639 128V192H641V128H639ZM640 191H576V193H640V191Z",
          fill: "#D0D5DD",
          mask: "url(#path-81-inside-40_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-83-inside-41_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M640 128H704V192H640V128Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M704 192V193H705V192H704ZM703 128V192H705V128H703ZM704 191H640V193H704V191Z",
          fill: "#D0D5DD",
          mask: "url(#path-83-inside-41_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-85-inside-42_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M704 128H768V192H704V128Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M768 192V193H769V192H768ZM767 128V192H769V128H767ZM768 191H704V193H768V191Z",
          fill: "#D0D5DD",
          mask: "url(#path-85-inside-42_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-87-inside-43_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M768 128H832V192H768V128Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M832 192V193H833V192H832ZM831 128V192H833V128H831ZM832 191H768V193H832V191Z",
          fill: "#D0D5DD",
          mask: "url(#path-87-inside-43_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-89-inside-44_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M832 128H896V192H832V128Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M896 192V193H897V192H896ZM895 128V192H897V128H895ZM896 191H832V193H896V191Z",
          fill: "#D0D5DD",
          mask: "url(#path-89-inside-44_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-91-inside-45_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M896 128H960V192H896V128Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M960 192V193H961V192H960ZM959 128V192H961V128H959ZM960 191H896V193H960V191Z",
          fill: "#D0D5DD",
          mask: "url(#path-91-inside-45_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-93-inside-46_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M0 192H64V256H0V192Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M64 256V257H65V256H64ZM63 192V256H65V192H63ZM64 255H0V257H64V255Z",
          fill: "#D0D5DD",
          mask: "url(#path-93-inside-46_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-95-inside-47_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M64 192H128V256H64V192Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M128 256V257H129V256H128ZM127 192V256H129V192H127ZM128 255H64V257H128V255Z",
          fill: "#D0D5DD",
          mask: "url(#path-95-inside-47_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-97-inside-48_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M128 192H192V256H128V192Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M192 256V257H193V256H192ZM191 192V256H193V192H191ZM192 255H128V257H192V255Z",
          fill: "#D0D5DD",
          mask: "url(#path-97-inside-48_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-99-inside-49_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M192 192H256V256H192V192Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M256 256V257H257V256H256ZM255 192V256H257V192H255ZM256 255H192V257H256V255Z",
          fill: "#D0D5DD",
          mask: "url(#path-99-inside-49_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-101-inside-50_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M256 192H320V256H256V192Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M320 256V257H321V256H320ZM319 192V256H321V192H319ZM320 255H256V257H320V255Z",
          fill: "#D0D5DD",
          mask: "url(#path-101-inside-50_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-103-inside-51_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M320 192H384V256H320V192Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M384 256V257H385V256H384ZM383 192V256H385V192H383ZM384 255H320V257H384V255Z",
          fill: "#D0D5DD",
          mask: "url(#path-103-inside-51_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-105-inside-52_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M384 192H448V256H384V192Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M448 256V257H449V256H448ZM447 192V256H449V192H447ZM448 255H384V257H448V255Z",
          fill: "#D0D5DD",
          mask: "url(#path-105-inside-52_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-107-inside-53_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M448 192H512V256H448V192Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M512 256V257H513V256H512ZM511 192V256H513V192H511ZM512 255H448V257H512V255Z",
          fill: "#D0D5DD",
          mask: "url(#path-107-inside-53_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-109-inside-54_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M512 192H576V256H512V192Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M576 256V257H577V256H576ZM575 192V256H577V192H575ZM576 255H512V257H576V255Z",
          fill: "#D0D5DD",
          mask: "url(#path-109-inside-54_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-111-inside-55_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M576 192H640V256H576V192Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M640 256V257H641V256H640ZM639 192V256H641V192H639ZM640 255H576V257H640V255Z",
          fill: "#D0D5DD",
          mask: "url(#path-111-inside-55_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-113-inside-56_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M640 192H704V256H640V192Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M704 256V257H705V256H704ZM703 192V256H705V192H703ZM704 255H640V257H704V255Z",
          fill: "#D0D5DD",
          mask: "url(#path-113-inside-56_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-115-inside-57_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M704 192H768V256H704V192Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M768 256V257H769V256H768ZM767 192V256H769V192H767ZM768 255H704V257H768V255Z",
          fill: "#D0D5DD",
          mask: "url(#path-115-inside-57_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-117-inside-58_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M768 192H832V256H768V192Z" }) }),
      /* @__PURE__ */ n("path", { d: "M768 192H832V256H768V192Z", fill: "#F2F4F7" }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M832 256V257H833V256H832ZM831 192V256H833V192H831ZM832 255H768V257H832V255Z",
          fill: "#D0D5DD",
          mask: "url(#path-117-inside-58_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-119-inside-59_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M832 192H896V256H832V192Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M896 256V257H897V256H896ZM895 192V256H897V192H895ZM896 255H832V257H896V255Z",
          fill: "#D0D5DD",
          mask: "url(#path-119-inside-59_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-121-inside-60_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M896 192H960V256H896V192Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M960 256V257H961V256H960ZM959 192V256H961V192H959ZM960 255H896V257H960V255Z",
          fill: "#D0D5DD",
          mask: "url(#path-121-inside-60_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-123-inside-61_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M0 256H64V320H0V256Z" }) }),
      /* @__PURE__ */ n("path", { d: "M0 256H64V320H0V256Z", fill: "#F2F4F7" }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M64 320V321H65V320H64ZM63 256V320H65V256H63ZM64 319H0V321H64V319Z",
          fill: "#D0D5DD",
          mask: "url(#path-123-inside-61_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-125-inside-62_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M64 256H128V320H64V256Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M128 320V321H129V320H128ZM127 256V320H129V256H127ZM128 319H64V321H128V319Z",
          fill: "#D0D5DD",
          mask: "url(#path-125-inside-62_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-127-inside-63_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M128 256H192V320H128V256Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M192 320V321H193V320H192ZM191 256V320H193V256H191ZM192 319H128V321H192V319Z",
          fill: "#D0D5DD",
          mask: "url(#path-127-inside-63_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-129-inside-64_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M192 256H256V320H192V256Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M256 320V321H257V320H256ZM255 256V320H257V256H255ZM256 319H192V321H256V319Z",
          fill: "#D0D5DD",
          mask: "url(#path-129-inside-64_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-131-inside-65_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M256 256H320V320H256V256Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M320 320V321H321V320H320ZM319 256V320H321V256H319ZM320 319H256V321H320V319Z",
          fill: "#D0D5DD",
          mask: "url(#path-131-inside-65_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-133-inside-66_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M320 256H384V320H320V256Z" }) }),
      /* @__PURE__ */ n("path", { d: "M320 256H384V320H320V256Z", fill: "#F2F4F7" }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M384 320V321H385V320H384ZM383 256V320H385V256H383ZM384 319H320V321H384V319Z",
          fill: "#D0D5DD",
          mask: "url(#path-133-inside-66_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-135-inside-67_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M384 256H448V320H384V256Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M448 320V321H449V320H448ZM447 256V320H449V256H447ZM448 319H384V321H448V319Z",
          fill: "#D0D5DD",
          mask: "url(#path-135-inside-67_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-137-inside-68_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M448 256H512V320H448V256Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M512 320V321H513V320H512ZM511 256V320H513V256H511ZM512 319H448V321H512V319Z",
          fill: "#D0D5DD",
          mask: "url(#path-137-inside-68_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-139-inside-69_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M512 256H576V320H512V256Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M576 320V321H577V320H576ZM575 256V320H577V256H575ZM576 319H512V321H576V319Z",
          fill: "#D0D5DD",
          mask: "url(#path-139-inside-69_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-141-inside-70_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M576 256H640V320H576V256Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M640 320V321H641V320H640ZM639 256V320H641V256H639ZM640 319H576V321H640V319Z",
          fill: "#D0D5DD",
          mask: "url(#path-141-inside-70_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-143-inside-71_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M640 256H704V320H640V256Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M704 320V321H705V320H704ZM703 256V320H705V256H703ZM704 319H640V321H704V319Z",
          fill: "#D0D5DD",
          mask: "url(#path-143-inside-71_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-145-inside-72_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M704 256H768V320H704V256Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M768 320V321H769V320H768ZM767 256V320H769V256H767ZM768 319H704V321H768V319Z",
          fill: "#D0D5DD",
          mask: "url(#path-145-inside-72_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-147-inside-73_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M768 256H832V320H768V256Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M832 320V321H833V320H832ZM831 256V320H833V256H831ZM832 319H768V321H832V319Z",
          fill: "#D0D5DD",
          mask: "url(#path-147-inside-73_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-149-inside-74_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M832 256H896V320H832V256Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M896 320V321H897V320H896ZM895 256V320H897V256H895ZM896 319H832V321H896V319Z",
          fill: "#D0D5DD",
          mask: "url(#path-149-inside-74_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-151-inside-75_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M896 256H960V320H896V256Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M960 320V321H961V320H960ZM959 256V320H961V256H959ZM960 319H896V321H960V319Z",
          fill: "#D0D5DD",
          mask: "url(#path-151-inside-75_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-153-inside-76_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M0 320H64V384H0V320Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M64 384V385H65V384H64ZM63 320V384H65V320H63ZM64 383H0V385H64V383Z",
          fill: "#D0D5DD",
          mask: "url(#path-153-inside-76_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-155-inside-77_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M64 320H128V384H64V320Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M128 384V385H129V384H128ZM127 320V384H129V320H127ZM128 383H64V385H128V383Z",
          fill: "#D0D5DD",
          mask: "url(#path-155-inside-77_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-157-inside-78_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M128 320H192V384H128V320Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M192 384V385H193V384H192ZM191 320V384H193V320H191ZM192 383H128V385H192V383Z",
          fill: "#D0D5DD",
          mask: "url(#path-157-inside-78_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-159-inside-79_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M192 320H256V384H192V320Z" }) }),
      /* @__PURE__ */ n("path", { d: "M192 320H256V384H192V320Z", fill: "#F2F4F7" }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M256 384V385H257V384H256ZM255 320V384H257V320H255ZM256 383H192V385H256V383Z",
          fill: "#D0D5DD",
          mask: "url(#path-159-inside-79_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-161-inside-80_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M256 320H320V384H256V320Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M320 384V385H321V384H320ZM319 320V384H321V320H319ZM320 383H256V385H320V383Z",
          fill: "#D0D5DD",
          mask: "url(#path-161-inside-80_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-163-inside-81_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M320 320H384V384H320V320Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M384 384V385H385V384H384ZM383 320V384H385V320H383ZM384 383H320V385H384V383Z",
          fill: "#D0D5DD",
          mask: "url(#path-163-inside-81_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-165-inside-82_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M384 320H448V384H384V320Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M448 384V385H449V384H448ZM447 320V384H449V320H447ZM448 383H384V385H448V383Z",
          fill: "#D0D5DD",
          mask: "url(#path-165-inside-82_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-167-inside-83_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M448 320H512V384H448V320Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M512 384V385H513V384H512ZM511 320V384H513V320H511ZM512 383H448V385H512V383Z",
          fill: "#D0D5DD",
          mask: "url(#path-167-inside-83_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-169-inside-84_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M512 320H576V384H512V320Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M576 384V385H577V384H576ZM575 320V384H577V320H575ZM576 383H512V385H576V383Z",
          fill: "#D0D5DD",
          mask: "url(#path-169-inside-84_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-171-inside-85_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M576 320H640V384H576V320Z" }) }),
      /* @__PURE__ */ n("path", { d: "M576 320H640V384H576V320Z", fill: "#F2F4F7" }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M640 384V385H641V384H640ZM639 320V384H641V320H639ZM640 383H576V385H640V383Z",
          fill: "#D0D5DD",
          mask: "url(#path-171-inside-85_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-173-inside-86_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M640 320H704V384H640V320Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M704 384V385H705V384H704ZM703 320V384H705V320H703ZM704 383H640V385H704V383Z",
          fill: "#D0D5DD",
          mask: "url(#path-173-inside-86_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-175-inside-87_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M704 320H768V384H704V320Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M768 384V385H769V384H768ZM767 320V384H769V320H767ZM768 383H704V385H768V383Z",
          fill: "#D0D5DD",
          mask: "url(#path-175-inside-87_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-177-inside-88_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M768 320H832V384H768V320Z" }) }),
      /* @__PURE__ */ n("path", { d: "M768 320H832V384H768V320Z", fill: "#F2F4F7" }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M832 384V385H833V384H832ZM831 320V384H833V320H831ZM832 383H768V385H832V383Z",
          fill: "#D0D5DD",
          mask: "url(#path-177-inside-88_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-179-inside-89_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M832 320H896V384H832V320Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M896 384V385H897V384H896ZM895 320V384H897V320H895ZM896 383H832V385H896V383Z",
          fill: "#D0D5DD",
          mask: "url(#path-179-inside-89_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-181-inside-90_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M896 320H960V384H896V320Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M960 384V385H961V384H960ZM959 320V384H961V320H959ZM960 383H896V385H960V383Z",
          fill: "#D0D5DD",
          mask: "url(#path-181-inside-90_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-183-inside-91_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M0 384H64V448H0V384Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M64 448V449H65V448H64ZM63 384V448H65V384H63ZM64 447H0V449H64V447Z",
          fill: "#D0D5DD",
          mask: "url(#path-183-inside-91_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-185-inside-92_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M64 384H128V448H64V384Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M128 448V449H129V448H128ZM127 384V448H129V384H127ZM128 447H64V449H128V447Z",
          fill: "#D0D5DD",
          mask: "url(#path-185-inside-92_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-187-inside-93_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M128 384H192V448H128V384Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M192 448V449H193V448H192ZM191 384V448H193V384H191ZM192 447H128V449H192V447Z",
          fill: "#D0D5DD",
          mask: "url(#path-187-inside-93_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-189-inside-94_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M192 384H256V448H192V384Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M256 448V449H257V448H256ZM255 384V448H257V384H255ZM256 447H192V449H256V447Z",
          fill: "#D0D5DD",
          mask: "url(#path-189-inside-94_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-191-inside-95_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M256 384H320V448H256V384Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M320 448V449H321V448H320ZM319 384V448H321V384H319ZM320 447H256V449H320V447Z",
          fill: "#D0D5DD",
          mask: "url(#path-191-inside-95_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-193-inside-96_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M320 384H384V448H320V384Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M384 448V449H385V448H384ZM383 384V448H385V384H383ZM384 447H320V449H384V447Z",
          fill: "#D0D5DD",
          mask: "url(#path-193-inside-96_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-195-inside-97_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M384 384H448V448H384V384Z" }) }),
      /* @__PURE__ */ n("path", { d: "M384 384H448V448H384V384Z", fill: "#F2F4F7" }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M448 448V449H449V448H448ZM447 384V448H449V384H447ZM448 447H384V449H448V447Z",
          fill: "#D0D5DD",
          mask: "url(#path-195-inside-97_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-197-inside-98_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M448 384H512V448H448V384Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M512 448V449H513V448H512ZM511 384V448H513V384H511ZM512 447H448V449H512V447Z",
          fill: "#D0D5DD",
          mask: "url(#path-197-inside-98_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-199-inside-99_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M512 384H576V448H512V384Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M576 448V449H577V448H576ZM575 384V448H577V384H575ZM576 447H512V449H576V447Z",
          fill: "#D0D5DD",
          mask: "url(#path-199-inside-99_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-201-inside-100_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M576 384H640V448H576V384Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M640 448V449H641V448H640ZM639 384V448H641V384H639ZM640 447H576V449H640V447Z",
          fill: "#D0D5DD",
          mask: "url(#path-201-inside-100_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-203-inside-101_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M640 384H704V448H640V384Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M704 448V449H705V448H704ZM703 384V448H705V384H703ZM704 447H640V449H704V447Z",
          fill: "#D0D5DD",
          mask: "url(#path-203-inside-101_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-205-inside-102_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M704 384H768V448H704V384Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M768 448V449H769V448H768ZM767 384V448H769V384H767ZM768 447H704V449H768V447Z",
          fill: "#D0D5DD",
          mask: "url(#path-205-inside-102_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-207-inside-103_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M768 384H832V448H768V384Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M832 448V449H833V448H832ZM831 384V448H833V384H831ZM832 447H768V449H832V447Z",
          fill: "#D0D5DD",
          mask: "url(#path-207-inside-103_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-209-inside-104_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M832 384H896V448H832V384Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M896 448V449H897V448H896ZM895 384V448H897V384H895ZM896 447H832V449H896V447Z",
          fill: "#D0D5DD",
          mask: "url(#path-209-inside-104_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-211-inside-105_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M896 384H960V448H896V384Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M960 448V449H961V448H960ZM959 384V448H961V384H959ZM960 447H896V449H960V447Z",
          fill: "#D0D5DD",
          mask: "url(#path-211-inside-105_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-213-inside-106_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M0 448H64V512H0V448Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M64 512V513H65V512H64ZM63 448V512H65V448H63ZM64 511H0V513H64V511Z",
          fill: "#D0D5DD",
          mask: "url(#path-213-inside-106_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-215-inside-107_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M64 448H128V512H64V448Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M128 512V513H129V512H128ZM127 448V512H129V448H127ZM128 511H64V513H128V511Z",
          fill: "#D0D5DD",
          mask: "url(#path-215-inside-107_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-217-inside-108_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M128 448H192V512H128V448Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M192 512V513H193V512H192ZM191 448V512H193V448H191ZM192 511H128V513H192V511Z",
          fill: "#D0D5DD",
          mask: "url(#path-217-inside-108_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-219-inside-109_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M192 448H256V512H192V448Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M256 512V513H257V512H256ZM255 448V512H257V448H255ZM256 511H192V513H256V511Z",
          fill: "#D0D5DD",
          mask: "url(#path-219-inside-109_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-221-inside-110_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M256 448H320V512H256V448Z" }) }),
      /* @__PURE__ */ n("path", { d: "M256 448H320V512H256V448Z", fill: "#F2F4F7" }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M320 512V513H321V512H320ZM319 448V512H321V448H319ZM320 511H256V513H320V511Z",
          fill: "#D0D5DD",
          mask: "url(#path-221-inside-110_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-223-inside-111_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M320 448H384V512H320V448Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M384 512V513H385V512H384ZM383 448V512H385V448H383ZM384 511H320V513H384V511Z",
          fill: "#D0D5DD",
          mask: "url(#path-223-inside-111_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-225-inside-112_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M384 448H448V512H384V448Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M448 512V513H449V512H448ZM447 448V512H449V448H447ZM448 511H384V513H448V511Z",
          fill: "#D0D5DD",
          mask: "url(#path-225-inside-112_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-227-inside-113_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M448 448H512V512H448V448Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M512 512V513H513V512H512ZM511 448V512H513V448H511ZM512 511H448V513H512V511Z",
          fill: "#D0D5DD",
          mask: "url(#path-227-inside-113_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-229-inside-114_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M512 448H576V512H512V448Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M576 512V513H577V512H576ZM575 448V512H577V448H575ZM576 511H512V513H576V511Z",
          fill: "#D0D5DD",
          mask: "url(#path-229-inside-114_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-231-inside-115_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M576 448H640V512H576V448Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M640 512V513H641V512H640ZM639 448V512H641V448H639ZM640 511H576V513H640V511Z",
          fill: "#D0D5DD",
          mask: "url(#path-231-inside-115_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-233-inside-116_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M640 448H704V512H640V448Z" }) }),
      /* @__PURE__ */ n("path", { d: "M640 448H704V512H640V448Z", fill: "#F2F4F7" }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M704 512V513H705V512H704ZM703 448V512H705V448H703ZM704 511H640V513H704V511Z",
          fill: "#D0D5DD",
          mask: "url(#path-233-inside-116_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-235-inside-117_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M704 448H768V512H704V448Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M768 512V513H769V512H768ZM767 448V512H769V448H767ZM768 511H704V513H768V511Z",
          fill: "#D0D5DD",
          mask: "url(#path-235-inside-117_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-237-inside-118_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M768 448H832V512H768V448Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M832 512V513H833V512H832ZM831 448V512H833V448H831ZM832 511H768V513H832V511Z",
          fill: "#D0D5DD",
          mask: "url(#path-237-inside-118_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-239-inside-119_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M832 448H896V512H832V448Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M896 512V513H897V512H896ZM895 448V512H897V448H895ZM896 511H832V513H896V511Z",
          fill: "#D0D5DD",
          mask: "url(#path-239-inside-119_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-241-inside-120_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M896 448H960V512H896V448Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M960 512V513H961V512H960ZM959 448V512H961V448H959ZM960 511H896V513H960V511Z",
          fill: "#D0D5DD",
          mask: "url(#path-241-inside-120_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-243-inside-121_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M0 512H64V576H0V512Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M64 576V577H65V576H64ZM63 512V576H65V512H63ZM64 575H0V577H64V575Z",
          fill: "#D0D5DD",
          mask: "url(#path-243-inside-121_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-245-inside-122_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M64 512H128V576H64V512Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M128 576V577H129V576H128ZM127 512V576H129V512H127ZM128 575H64V577H128V575Z",
          fill: "#D0D5DD",
          mask: "url(#path-245-inside-122_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-247-inside-123_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M128 512H192V576H128V512Z" }) }),
      /* @__PURE__ */ n("path", { d: "M128 512H192V576H128V512Z", fill: "#F2F4F7" }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M192 576V577H193V576H192ZM191 512V576H193V512H191ZM192 575H128V577H192V575Z",
          fill: "#D0D5DD",
          mask: "url(#path-247-inside-123_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-249-inside-124_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M192 512H256V576H192V512Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M256 576V577H257V576H256ZM255 512V576H257V512H255ZM256 575H192V577H256V575Z",
          fill: "#D0D5DD",
          mask: "url(#path-249-inside-124_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-251-inside-125_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M256 512H320V576H256V512Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M320 576V577H321V576H320ZM319 512V576H321V512H319ZM320 575H256V577H320V575Z",
          fill: "#D0D5DD",
          mask: "url(#path-251-inside-125_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-253-inside-126_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M320 512H384V576H320V512Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M384 576V577H385V576H384ZM383 512V576H385V512H383ZM384 575H320V577H384V575Z",
          fill: "#D0D5DD",
          mask: "url(#path-253-inside-126_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-255-inside-127_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M384 512H448V576H384V512Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M448 576V577H449V576H448ZM447 512V576H449V512H447ZM448 575H384V577H448V575Z",
          fill: "#D0D5DD",
          mask: "url(#path-255-inside-127_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-257-inside-128_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M448 512H512V576H448V512Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M512 576V577H513V576H512ZM511 512V576H513V512H511ZM512 575H448V577H512V575Z",
          fill: "#D0D5DD",
          mask: "url(#path-257-inside-128_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-259-inside-129_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M512 512H576V576H512V512Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M576 576V577H577V576H576ZM575 512V576H577V512H575ZM576 575H512V577H576V575Z",
          fill: "#D0D5DD",
          mask: "url(#path-259-inside-129_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-261-inside-130_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M576 512H640V576H576V512Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M640 576V577H641V576H640ZM639 512V576H641V512H639ZM640 575H576V577H640V575Z",
          fill: "#D0D5DD",
          mask: "url(#path-261-inside-130_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-263-inside-131_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M640 512H704V576H640V512Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M704 576V577H705V576H704ZM703 512V576H705V512H703ZM704 575H640V577H704V575Z",
          fill: "#D0D5DD",
          mask: "url(#path-263-inside-131_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-265-inside-132_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M704 512H768V576H704V512Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M768 576V577H769V576H768ZM767 512V576H769V512H767ZM768 575H704V577H768V575Z",
          fill: "#D0D5DD",
          mask: "url(#path-265-inside-132_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-267-inside-133_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M768 512H832V576H768V512Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M832 576V577H833V576H832ZM831 512V576H833V512H831ZM832 575H768V577H832V575Z",
          fill: "#D0D5DD",
          mask: "url(#path-267-inside-133_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-269-inside-134_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M832 512H896V576H832V512Z" }) }),
      /* @__PURE__ */ n("path", { d: "M832 512H896V576H832V512Z", fill: "#F2F4F7" }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M896 576V577H897V576H896ZM895 512V576H897V512H895ZM896 575H832V577H896V575Z",
          fill: "#D0D5DD",
          mask: "url(#path-269-inside-134_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-271-inside-135_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M896 512H960V576H896V512Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M960 576V577H961V576H960ZM959 512V576H961V512H959ZM960 575H896V577H960V575Z",
          fill: "#D0D5DD",
          mask: "url(#path-271-inside-135_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-273-inside-136_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M0 576H64V640H0V576Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M64 640V641H65V640H64ZM63 576V640H65V576H63ZM64 639H0V641H64V639Z",
          fill: "#D0D5DD",
          mask: "url(#path-273-inside-136_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-275-inside-137_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M64 576H128V640H64V576Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M128 640V641H129V640H128ZM127 576V640H129V576H127ZM128 639H64V641H128V639Z",
          fill: "#D0D5DD",
          mask: "url(#path-275-inside-137_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-277-inside-138_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M128 576H192V640H128V576Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M192 640V641H193V640H192ZM191 576V640H193V576H191ZM192 639H128V641H192V639Z",
          fill: "#D0D5DD",
          mask: "url(#path-277-inside-138_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-279-inside-139_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M192 576H256V640H192V576Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M256 640V641H257V640H256ZM255 576V640H257V576H255ZM256 639H192V641H256V639Z",
          fill: "#D0D5DD",
          mask: "url(#path-279-inside-139_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-281-inside-140_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M256 576H320V640H256V576Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M320 640V641H321V640H320ZM319 576V640H321V576H319ZM320 639H256V641H320V639Z",
          fill: "#D0D5DD",
          mask: "url(#path-281-inside-140_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-283-inside-141_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M320 576H384V640H320V576Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M384 640V641H385V640H384ZM383 576V640H385V576H383ZM384 639H320V641H384V639Z",
          fill: "#D0D5DD",
          mask: "url(#path-283-inside-141_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-285-inside-142_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M384 576H448V640H384V576Z" }) }),
      /* @__PURE__ */ n("path", { d: "M384 576H448V640H384V576Z", fill: "#F2F4F7" }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M448 640V641H449V640H448ZM447 576V640H449V576H447ZM448 639H384V641H448V639Z",
          fill: "#D0D5DD",
          mask: "url(#path-285-inside-142_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-287-inside-143_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M448 576H512V640H448V576Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M512 640V641H513V640H512ZM511 576V640H513V576H511ZM512 639H448V641H512V639Z",
          fill: "#D0D5DD",
          mask: "url(#path-287-inside-143_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-289-inside-144_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M512 576H576V640H512V576Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M576 640V641H577V640H576ZM575 576V640H577V576H575ZM576 639H512V641H576V639Z",
          fill: "#D0D5DD",
          mask: "url(#path-289-inside-144_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-291-inside-145_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M576 576H640V640H576V576Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M640 640V641H641V640H640ZM639 576V640H641V576H639ZM640 639H576V641H640V639Z",
          fill: "#D0D5DD",
          mask: "url(#path-291-inside-145_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-293-inside-146_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M640 576H704V640H640V576Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M704 640V641H705V640H704ZM703 576V640H705V576H703ZM704 639H640V641H704V639Z",
          fill: "#D0D5DD",
          mask: "url(#path-293-inside-146_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-295-inside-147_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M704 576H768V640H704V576Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M768 640V641H769V640H768ZM767 576V640H769V576H767ZM768 639H704V641H768V639Z",
          fill: "#D0D5DD",
          mask: "url(#path-295-inside-147_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-297-inside-148_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M768 576H832V640H768V576Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M832 640V641H833V640H832ZM831 576V640H833V576H831ZM832 639H768V641H832V639Z",
          fill: "#D0D5DD",
          mask: "url(#path-297-inside-148_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-299-inside-149_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M832 576H896V640H832V576Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M896 640V641H897V640H896ZM895 576V640H897V576H895ZM896 639H832V641H896V639Z",
          fill: "#D0D5DD",
          mask: "url(#path-299-inside-149_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-301-inside-150_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M896 576H960V640H896V576Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M960 640V641H961V640H960ZM959 576V640H961V576H959ZM960 639H896V641H960V639Z",
          fill: "#D0D5DD",
          mask: "url(#path-301-inside-150_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-303-inside-151_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M0 640H64V704H0V640Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M64 704V705H65V704H64ZM63 640V704H65V640H63ZM64 703H0V705H64V703Z",
          fill: "#D0D5DD",
          mask: "url(#path-303-inside-151_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-305-inside-152_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M64 640H128V704H64V640Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M128 704V705H129V704H128ZM127 640V704H129V640H127ZM128 703H64V705H128V703Z",
          fill: "#D0D5DD",
          mask: "url(#path-305-inside-152_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-307-inside-153_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M128 640H192V704H128V640Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M192 704V705H193V704H192ZM191 640V704H193V640H191ZM192 703H128V705H192V703Z",
          fill: "#D0D5DD",
          mask: "url(#path-307-inside-153_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-309-inside-154_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M192 640H256V704H192V640Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M256 704V705H257V704H256ZM255 640V704H257V640H255ZM256 703H192V705H256V703Z",
          fill: "#D0D5DD",
          mask: "url(#path-309-inside-154_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-311-inside-155_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M256 640H320V704H256V640Z" }) }),
      /* @__PURE__ */ n("path", { d: "M256 640H320V704H256V640Z", fill: "#F2F4F7" }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M320 704V705H321V704H320ZM319 640V704H321V640H319ZM320 703H256V705H320V703Z",
          fill: "#D0D5DD",
          mask: "url(#path-311-inside-155_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-313-inside-156_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M320 640H384V704H320V640Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M384 704V705H385V704H384ZM383 640V704H385V640H383ZM384 703H320V705H384V703Z",
          fill: "#D0D5DD",
          mask: "url(#path-313-inside-156_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-315-inside-157_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M384 640H448V704H384V640Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M448 704V705H449V704H448ZM447 640V704H449V640H447ZM448 703H384V705H448V703Z",
          fill: "#D0D5DD",
          mask: "url(#path-315-inside-157_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-317-inside-158_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M448 640H512V704H448V640Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M512 704V705H513V704H512ZM511 640V704H513V640H511ZM512 703H448V705H512V703Z",
          fill: "#D0D5DD",
          mask: "url(#path-317-inside-158_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-319-inside-159_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M512 640H576V704H512V640Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M576 704V705H577V704H576ZM575 640V704H577V640H575ZM576 703H512V705H576V703Z",
          fill: "#D0D5DD",
          mask: "url(#path-319-inside-159_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-321-inside-160_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M576 640H640V704H576V640Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M640 704V705H641V704H640ZM639 640V704H641V640H639ZM640 703H576V705H640V703Z",
          fill: "#D0D5DD",
          mask: "url(#path-321-inside-160_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-323-inside-161_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M640 640H704V704H640V640Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M704 704V705H705V704H704ZM703 640V704H705V640H703ZM704 703H640V705H704V703Z",
          fill: "#D0D5DD",
          mask: "url(#path-323-inside-161_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-325-inside-162_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M704 640H768V704H704V640Z" }) }),
      /* @__PURE__ */ n("path", { d: "M704 640H768V704H704V640Z", fill: "#F2F4F7" }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M768 704V705H769V704H768ZM767 640V704H769V640H767ZM768 703H704V705H768V703Z",
          fill: "#D0D5DD",
          mask: "url(#path-325-inside-162_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-327-inside-163_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M768 640H832V704H768V640Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M832 704V705H833V704H832ZM831 640V704H833V640H831ZM832 703H768V705H832V703Z",
          fill: "#D0D5DD",
          mask: "url(#path-327-inside-163_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-329-inside-164_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M832 640H896V704H832V640Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M896 704V705H897V704H896ZM895 640V704H897V640H895ZM896 703H832V705H896V703Z",
          fill: "#D0D5DD",
          mask: "url(#path-329-inside-164_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-331-inside-165_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M896 640H960V704H896V640Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M960 704V705H961V704H960ZM959 640V704H961V640H959ZM960 703H896V705H960V703Z",
          fill: "#D0D5DD",
          mask: "url(#path-331-inside-165_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-333-inside-166_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M0 704H64V768H0V704Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M64 768V769H65V768H64ZM63 704V768H65V704H63ZM64 767H0V769H64V767Z",
          fill: "#D0D5DD",
          mask: "url(#path-333-inside-166_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-335-inside-167_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M64 704H128V768H64V704Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M128 768V769H129V768H128ZM127 704V768H129V704H127ZM128 767H64V769H128V767Z",
          fill: "#D0D5DD",
          mask: "url(#path-335-inside-167_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-337-inside-168_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M128 704H192V768H128V704Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M192 768V769H193V768H192ZM191 704V768H193V704H191ZM192 767H128V769H192V767Z",
          fill: "#D0D5DD",
          mask: "url(#path-337-inside-168_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-339-inside-169_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M192 704H256V768H192V704Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M256 768V769H257V768H256ZM255 704V768H257V704H255ZM256 767H192V769H256V767Z",
          fill: "#D0D5DD",
          mask: "url(#path-339-inside-169_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-341-inside-170_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M256 704H320V768H256V704Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M320 768V769H321V768H320ZM319 704V768H321V704H319ZM320 767H256V769H320V767Z",
          fill: "#D0D5DD",
          mask: "url(#path-341-inside-170_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-343-inside-171_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M320 704H384V768H320V704Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M384 768V769H385V768H384ZM383 704V768H385V704H383ZM384 767H320V769H384V767Z",
          fill: "#D0D5DD",
          mask: "url(#path-343-inside-171_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-345-inside-172_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M384 704H448V768H384V704Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M448 768V769H449V768H448ZM447 704V768H449V704H447ZM448 767H384V769H448V767Z",
          fill: "#D0D5DD",
          mask: "url(#path-345-inside-172_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-347-inside-173_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M448 704H512V768H448V704Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M512 768V769H513V768H512ZM511 704V768H513V704H511ZM512 767H448V769H512V767Z",
          fill: "#D0D5DD",
          mask: "url(#path-347-inside-173_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-349-inside-174_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M512 704H576V768H512V704Z" }) }),
      /* @__PURE__ */ n("path", { d: "M512 704H576V768H512V704Z", fill: "#F2F4F7" }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M576 768V769H577V768H576ZM575 704V768H577V704H575ZM576 767H512V769H576V767Z",
          fill: "#D0D5DD",
          mask: "url(#path-349-inside-174_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-351-inside-175_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M576 704H640V768H576V704Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M640 768V769H641V768H640ZM639 704V768H641V704H639ZM640 767H576V769H640V767Z",
          fill: "#D0D5DD",
          mask: "url(#path-351-inside-175_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-353-inside-176_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M640 704H704V768H640V704Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M704 768V769H705V768H704ZM703 704V768H705V704H703ZM704 767H640V769H704V767Z",
          fill: "#D0D5DD",
          mask: "url(#path-353-inside-176_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-355-inside-177_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M704 704H768V768H704V704Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M768 768V769H769V768H768ZM767 704V768H769V704H767ZM768 767H704V769H768V767Z",
          fill: "#D0D5DD",
          mask: "url(#path-355-inside-177_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-357-inside-178_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M768 704H832V768H768V704Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M832 768V769H833V768H832ZM831 704V768H833V704H831ZM832 767H768V769H832V767Z",
          fill: "#D0D5DD",
          mask: "url(#path-357-inside-178_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-359-inside-179_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M832 704H896V768H832V704Z" }) }),
      /* @__PURE__ */ n("path", { d: "M832 704H896V768H832V704Z", fill: "#F2F4F7" }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M896 768V769H897V768H896ZM895 704V768H897V704H895ZM896 767H832V769H896V767Z",
          fill: "#D0D5DD",
          mask: "url(#path-359-inside-179_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-361-inside-180_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M896 704H960V768H896V704Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M960 768V769H961V768H960ZM959 704V768H961V704H959ZM960 767H896V769H960V767Z",
          fill: "#D0D5DD",
          mask: "url(#path-361-inside-180_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-363-inside-181_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M0 768H64V832H0V768Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M64 832V833H65V832H64ZM63 768V832H65V768H63ZM64 831H0V833H64V831Z",
          fill: "#D0D5DD",
          mask: "url(#path-363-inside-181_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-365-inside-182_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M64 768H128V832H64V768Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M128 832V833H129V832H128ZM127 768V832H129V768H127ZM128 831H64V833H128V831Z",
          fill: "#D0D5DD",
          mask: "url(#path-365-inside-182_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-367-inside-183_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M128 768H192V832H128V768Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M192 832V833H193V832H192ZM191 768V832H193V768H191ZM192 831H128V833H192V831Z",
          fill: "#D0D5DD",
          mask: "url(#path-367-inside-183_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-369-inside-184_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M192 768H256V832H192V768Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M256 832V833H257V832H256ZM255 768V832H257V768H255ZM256 831H192V833H256V831Z",
          fill: "#D0D5DD",
          mask: "url(#path-369-inside-184_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-371-inside-185_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M256 768H320V832H256V768Z" }) }),
      /* @__PURE__ */ n("path", { d: "M256 768H320V832H256V768Z", fill: "#F2F4F7" }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M320 832V833H321V832H320ZM319 768V832H321V768H319ZM320 831H256V833H320V831Z",
          fill: "#D0D5DD",
          mask: "url(#path-371-inside-185_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-373-inside-186_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M320 768H384V832H320V768Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M384 832V833H385V832H384ZM383 768V832H385V768H383ZM384 831H320V833H384V831Z",
          fill: "#D0D5DD",
          mask: "url(#path-373-inside-186_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-375-inside-187_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M384 768H448V832H384V768Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M448 832V833H449V832H448ZM447 768V832H449V768H447ZM448 831H384V833H448V831Z",
          fill: "#D0D5DD",
          mask: "url(#path-375-inside-187_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-377-inside-188_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M448 768H512V832H448V768Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M512 832V833H513V832H512ZM511 768V832H513V768H511ZM512 831H448V833H512V831Z",
          fill: "#D0D5DD",
          mask: "url(#path-377-inside-188_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-379-inside-189_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M512 768H576V832H512V768Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M576 832V833H577V832H576ZM575 768V832H577V768H575ZM576 831H512V833H576V831Z",
          fill: "#D0D5DD",
          mask: "url(#path-379-inside-189_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-381-inside-190_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M576 768H640V832H576V768Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M640 832V833H641V832H640ZM639 768V832H641V768H639ZM640 831H576V833H640V831Z",
          fill: "#D0D5DD",
          mask: "url(#path-381-inside-190_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-383-inside-191_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M640 768H704V832H640V768Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M704 832V833H705V832H704ZM703 768V832H705V768H703ZM704 831H640V833H704V831Z",
          fill: "#D0D5DD",
          mask: "url(#path-383-inside-191_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-385-inside-192_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M704 768H768V832H704V768Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M768 832V833H769V832H768ZM767 768V832H769V768H767ZM768 831H704V833H768V831Z",
          fill: "#D0D5DD",
          mask: "url(#path-385-inside-192_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-387-inside-193_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M768 768H832V832H768V768Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M832 832V833H833V832H832ZM831 768V832H833V768H831ZM832 831H768V833H832V831Z",
          fill: "#D0D5DD",
          mask: "url(#path-387-inside-193_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-389-inside-194_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M832 768H896V832H832V768Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M896 832V833H897V832H896ZM895 768V832H897V768H895ZM896 831H832V833H896V831Z",
          fill: "#D0D5DD",
          mask: "url(#path-389-inside-194_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-391-inside-195_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M896 768H960V832H896V768Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M960 832V833H961V832H960ZM959 768V832H961V768H959ZM960 831H896V833H960V831Z",
          fill: "#D0D5DD",
          mask: "url(#path-391-inside-195_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-393-inside-196_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M0 832H64V896H0V832Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M64 896V897H65V896H64ZM63 832V896H65V832H63ZM64 895H0V897H64V895Z",
          fill: "#D0D5DD",
          mask: "url(#path-393-inside-196_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-395-inside-197_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M64 832H128V896H64V832Z" }) }),
      /* @__PURE__ */ n("path", { d: "M64 832H128V896H64V832Z", fill: "#F2F4F7" }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M128 896V897H129V896H128ZM127 832V896H129V832H127ZM128 895H64V897H128V895Z",
          fill: "#D0D5DD",
          mask: "url(#path-395-inside-197_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-397-inside-198_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M128 832H192V896H128V832Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M192 896V897H193V896H192ZM191 832V896H193V832H191ZM192 895H128V897H192V895Z",
          fill: "#D0D5DD",
          mask: "url(#path-397-inside-198_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-399-inside-199_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M192 832H256V896H192V832Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M256 896V897H257V896H256ZM255 832V896H257V832H255ZM256 895H192V897H256V895Z",
          fill: "#D0D5DD",
          mask: "url(#path-399-inside-199_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-401-inside-200_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M256 832H320V896H256V832Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M320 896V897H321V896H320ZM319 832V896H321V832H319ZM320 895H256V897H320V895Z",
          fill: "#D0D5DD",
          mask: "url(#path-401-inside-200_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-403-inside-201_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M320 832H384V896H320V832Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M384 896V897H385V896H384ZM383 832V896H385V832H383ZM384 895H320V897H384V895Z",
          fill: "#D0D5DD",
          mask: "url(#path-403-inside-201_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-405-inside-202_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M384 832H448V896H384V832Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M448 896V897H449V896H448ZM447 832V896H449V832H447ZM448 895H384V897H448V895Z",
          fill: "#D0D5DD",
          mask: "url(#path-405-inside-202_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-407-inside-203_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M448 832H512V896H448V832Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M512 896V897H513V896H512ZM511 832V896H513V832H511ZM512 895H448V897H512V895Z",
          fill: "#D0D5DD",
          mask: "url(#path-407-inside-203_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-409-inside-204_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M512 832H576V896H512V832Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M576 896V897H577V896H576ZM575 832V896H577V832H575ZM576 895H512V897H576V895Z",
          fill: "#D0D5DD",
          mask: "url(#path-409-inside-204_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-411-inside-205_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M576 832H640V896H576V832Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M640 896V897H641V896H640ZM639 832V896H641V832H639ZM640 895H576V897H640V895Z",
          fill: "#D0D5DD",
          mask: "url(#path-411-inside-205_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-413-inside-206_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M640 832H704V896H640V832Z" }) }),
      /* @__PURE__ */ n("path", { d: "M640 832H704V896H640V832Z", fill: "#F2F4F7" }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M704 896V897H705V896H704ZM703 832V896H705V832H703ZM704 895H640V897H704V895Z",
          fill: "#D0D5DD",
          mask: "url(#path-413-inside-206_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-415-inside-207_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M704 832H768V896H704V832Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M768 896V897H769V896H768ZM767 832V896H769V832H767ZM768 895H704V897H768V895Z",
          fill: "#D0D5DD",
          mask: "url(#path-415-inside-207_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-417-inside-208_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M768 832H832V896H768V832Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M832 896V897H833V896H832ZM831 832V896H833V832H831ZM832 895H768V897H832V895Z",
          fill: "#D0D5DD",
          mask: "url(#path-417-inside-208_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-419-inside-209_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M832 832H896V896H832V832Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M896 896V897H897V896H896ZM895 832V896H897V832H895ZM896 895H832V897H896V895Z",
          fill: "#D0D5DD",
          mask: "url(#path-419-inside-209_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-421-inside-210_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M896 832H960V896H896V832Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M960 896V897H961V896H960ZM959 832V896H961V832H959ZM960 895H896V897H960V895Z",
          fill: "#D0D5DD",
          mask: "url(#path-421-inside-210_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-423-inside-211_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M0 896H64V960H0V896Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M64 960V961H65V960H64ZM63 896V960H65V896H63ZM64 959H0V961H64V959Z",
          fill: "#D0D5DD",
          mask: "url(#path-423-inside-211_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-425-inside-212_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M64 896H128V960H64V896Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M128 960V961H129V960H128ZM127 896V960H129V896H127ZM128 959H64V961H128V959Z",
          fill: "#D0D5DD",
          mask: "url(#path-425-inside-212_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-427-inside-213_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M128 896H192V960H128V896Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M192 960V961H193V960H192ZM191 896V960H193V896H191ZM192 959H128V961H192V959Z",
          fill: "#D0D5DD",
          mask: "url(#path-427-inside-213_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-429-inside-214_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M192 896H256V960H192V896Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M256 960V961H257V960H256ZM255 896V960H257V896H255ZM256 959H192V961H256V959Z",
          fill: "#D0D5DD",
          mask: "url(#path-429-inside-214_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-431-inside-215_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M256 896H320V960H256V896Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M320 960V961H321V960H320ZM319 896V960H321V896H319ZM320 959H256V961H320V959Z",
          fill: "#D0D5DD",
          mask: "url(#path-431-inside-215_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-433-inside-216_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M320 896H384V960H320V896Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M384 960V961H385V960H384ZM383 896V960H385V896H383ZM384 959H320V961H384V959Z",
          fill: "#D0D5DD",
          mask: "url(#path-433-inside-216_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-435-inside-217_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M384 896H448V960H384V896Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M448 960V961H449V960H448ZM447 896V960H449V896H447ZM448 959H384V961H448V959Z",
          fill: "#D0D5DD",
          mask: "url(#path-435-inside-217_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-437-inside-218_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M448 896H512V960H448V896Z" }) }),
      /* @__PURE__ */ n("path", { d: "M448 896H512V960H448V896Z", fill: "#F2F4F7" }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M512 960V961H513V960H512ZM511 896V960H513V896H511ZM512 959H448V961H512V959Z",
          fill: "#D0D5DD",
          mask: "url(#path-437-inside-218_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-439-inside-219_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M512 896H576V960H512V896Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M576 960V961H577V960H576ZM575 896V960H577V896H575ZM576 959H512V961H576V959Z",
          fill: "#D0D5DD",
          mask: "url(#path-439-inside-219_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-441-inside-220_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M576 896H640V960H576V896Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M640 960V961H641V960H640ZM639 896V960H641V896H639ZM640 959H576V961H640V959Z",
          fill: "#D0D5DD",
          mask: "url(#path-441-inside-220_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-443-inside-221_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M640 896H704V960H640V896Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M704 960V961H705V960H704ZM703 896V960H705V896H703ZM704 959H640V961H704V959Z",
          fill: "#D0D5DD",
          mask: "url(#path-443-inside-221_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-445-inside-222_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M704 896H768V960H704V896Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M768 960V961H769V960H768ZM767 896V960H769V896H767ZM768 959H704V961H768V959Z",
          fill: "#D0D5DD",
          mask: "url(#path-445-inside-222_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-447-inside-223_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M768 896H832V960H768V896Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M832 960V961H833V960H832ZM831 896V960H833V896H831ZM832 959H768V961H832V959Z",
          fill: "#D0D5DD",
          mask: "url(#path-447-inside-223_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-449-inside-224_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M832 896H896V960H832V896Z" }) }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M896 960V961H897V960H896ZM895 896V960H897V896H895ZM896 959H832V961H896V959Z",
          fill: "#D0D5DD",
          mask: "url(#path-449-inside-224_4940_405682)"
        }
      ),
      /* @__PURE__ */ n("mask", { id: "path-451-inside-225_4940_405682", fill: "white", children: /* @__PURE__ */ n("path", { d: "M896 896H960V960H896V896Z" }) }),
      /* @__PURE__ */ n("path", { d: "M896 896H960V960H896V896Z", fill: "#F2F4F7" }),
      /* @__PURE__ */ n(
        "path",
        {
          d: "M960 960V961H961V960H960ZM959 896V960H961V896H959ZM960 959H896V961H960V959Z",
          fill: "#D0D5DD",
          mask: "url(#path-451-inside-225_4940_405682)"
        }
      )
    ] }),
    /* @__PURE__ */ n("rect", { x: "0.5", y: "0.5", width: "959", height: "959", stroke: "#D0D5DD" })
  ] }),
  /* @__PURE__ */ L("defs", { children: [
    /* @__PURE__ */ L(
      "radialGradient",
      {
        id: "paint0_radial_4940_405682",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(480 -0.000114441) rotate(90) scale(960 501.059)",
        children: [
          /* @__PURE__ */ n("stop", {}),
          /* @__PURE__ */ n("stop", { offset: "0.953125", stopOpacity: "0" })
        ]
      }
    ),
    /* @__PURE__ */ n("clipPath", { id: "clip0_4940_405682", children: /* @__PURE__ */ n("rect", { width: "960", height: "960", fill: "white" }) })
  ] })
] }), g8 = {
  sm: m8,
  md: h8
}, b8 = (t) => {
  const { size: e = "lg", className: i } = t, l = H8[e];
  return /* @__PURE__ */ n(l, { className: i });
}, v8 = (t) => /* @__PURE__ */ L(
  "svg",
  {
    width: "910",
    height: "910",
    viewBox: "0 0 910 910",
    fill: "none",
    ...t,
    className: k("text-border-secondary", t.className),
    children: [
      /* @__PURE__ */ n(
        "mask",
        {
          id: "mask0_16747_25726",
          style: { maskType: "alpha" },
          maskUnits: "userSpaceOnUse",
          x: "-4",
          y: "-4",
          width: "918",
          height: "918",
          children: /* @__PURE__ */ n(
            "path",
            {
              d: "M1.31903 182.741C-1.0717 171.957 5.73229 161.277 16.5162 158.886L727.26 1.31801C738.044 -1.07271 748.724 5.73127 751.114 16.5151L908.682 727.259C911.073 738.042 904.269 748.723 893.485 751.113L182.742 908.681C171.958 911.072 161.278 904.268 158.887 893.484L1.31903 182.741Z",
              fill: "url(#paint0_radial_16747_25726)"
            }
          )
        }
      ),
      /* @__PURE__ */ L("g", { mask: "url(#mask0_16747_25726)", children: [
        /* @__PURE__ */ n(
          "path",
          {
            d: "M417.382 414.687L472.055 402.566C482.569 400.235 492.982 406.869 495.313 417.383L507.434 472.056C509.765 482.57 503.131 492.983 492.617 495.314L437.944 507.435C427.43 509.766 417.017 503.132 414.686 492.618L402.565 437.945C400.234 427.431 406.868 417.018 417.382 414.687Z",
            stroke: "currentColor"
          }
        ),
        /* @__PURE__ */ n(
          "path",
          {
            d: "M360.132 378.213L508.529 345.314C519.043 342.983 529.457 349.617 531.788 360.131L564.686 508.528C567.017 519.043 560.383 529.456 549.869 531.787L401.472 564.686C390.958 567.017 380.545 560.383 378.214 549.868L345.315 401.471C342.984 390.957 349.618 380.544 360.132 378.213Z",
            stroke: "currentColor"
          }
        ),
        /* @__PURE__ */ n(
          "path",
          {
            d: "M302.88 341.74L545.002 288.063C555.516 285.732 565.929 292.366 568.26 302.881L621.937 545.002C624.268 555.516 617.634 565.929 607.12 568.26L364.998 621.937C354.484 624.268 344.071 617.634 341.74 607.12L288.063 364.999C285.732 354.484 292.366 344.071 302.88 341.74Z",
            stroke: "currentColor"
          }
        ),
        /* @__PURE__ */ n(
          "path",
          {
            d: "M245.628 305.267L581.474 230.812C591.988 228.481 602.401 235.114 604.732 245.629L679.188 581.475C681.519 591.989 674.885 602.402 664.37 604.733L328.525 679.188C318.01 681.519 307.597 674.885 305.266 664.371L230.811 328.525C228.48 318.011 235.114 307.598 245.628 305.267Z",
            stroke: "currentColor"
          }
        ),
        /* @__PURE__ */ n(
          "path",
          {
            d: "M188.378 268.794L617.949 173.561C628.463 171.23 638.876 177.864 641.207 188.378L736.44 617.948C738.771 628.462 732.137 638.876 721.623 641.206L292.053 736.44C281.539 738.771 271.125 732.137 268.795 721.623L173.561 292.052C171.23 281.538 177.864 271.125 188.378 268.794Z",
            stroke: "currentColor"
          }
        ),
        /* @__PURE__ */ n(
          "path",
          {
            d: "M131.126 232.321L654.421 116.309C664.935 113.978 675.348 120.612 677.679 131.126L793.691 654.421C796.022 664.935 789.388 675.348 778.874 677.679L255.579 793.691C245.065 796.022 234.652 789.388 232.321 778.874L116.309 255.579C113.978 245.065 120.612 234.652 131.126 232.321Z",
            stroke: "currentColor"
          }
        ),
        /* @__PURE__ */ n(
          "path",
          {
            d: "M73.8744 195.848L690.893 59.058C701.408 56.727 711.821 63.3609 714.152 73.8752L850.942 690.894C853.273 701.409 846.639 711.822 836.124 714.153L219.105 850.942C208.591 853.273 198.178 846.64 195.847 836.125L59.0572 219.106C56.7262 208.592 63.3601 198.179 73.8744 195.848Z",
            stroke: "currentColor"
          }
        ),
        /* @__PURE__ */ n(
          "path",
          {
            d: "M16.6244 159.374L727.368 1.80616C737.882 -0.524797 748.295 6.10908 750.626 16.6234L908.194 727.367C910.525 737.881 903.891 748.294 893.377 750.625L182.634 908.193C172.119 910.524 161.706 903.89 159.375 893.376L1.80718 182.633C-0.52378 172.118 6.1101 161.705 16.6244 159.374Z",
            stroke: "currentColor"
          }
        )
      ] }),
      /* @__PURE__ */ n("defs", { children: /* @__PURE__ */ L(
        "radialGradient",
        {
          id: "paint0_radial_16747_25726",
          cx: "0",
          cy: "0",
          r: "1",
          gradientUnits: "userSpaceOnUse",
          gradientTransform: "translate(455.001 455) rotate(77.5) scale(384 384)",
          children: [
            /* @__PURE__ */ n("stop", {}),
            /* @__PURE__ */ n("stop", { offset: "1", stopOpacity: "0" })
          ]
        }
      ) })
    ]
  }
), C8 = (t) => /* @__PURE__ */ L(
  "svg",
  {
    width: "480",
    height: "480",
    viewBox: "0 0 480 480",
    fill: "none",
    ...t,
    className: k("text-border-secondary", t.className),
    children: [
      /* @__PURE__ */ n(
        "mask",
        {
          id: "mask0_4933_421799",
          style: { maskType: "alpha" },
          maskUnits: "userSpaceOnUse",
          x: "0",
          y: "0",
          width: "480",
          height: "480",
          children: /* @__PURE__ */ n(
            "path",
            {
              d: "M0 12C0 5.37257 5.37258 0 12 0H468C474.627 0 480 5.37258 480 12V468C480 474.627 474.627 480 468 480H12C5.37257 480 0 474.627 0 468V12Z",
              fill: "url(#paint0_radial_4933_421799)"
            }
          )
        }
      ),
      /* @__PURE__ */ L("g", { mask: "url(#mask0_4933_421799)", children: [
        /* @__PURE__ */ n(
          "path",
          {
            d: "M185.833 215.135C184.459 208.934 188.371 202.793 194.572 201.418L264.865 185.835C271.066 184.46 277.207 188.372 278.582 194.573L294.165 264.866C295.54 271.067 291.628 277.208 285.427 278.583L215.134 294.166C208.933 295.541 202.792 291.629 201.417 285.428L185.833 215.135Z",
            stroke: "currentColor"
          }
        ),
        /* @__PURE__ */ n(
          "path",
          {
            d: "M147.667 190.819C146.293 184.619 150.205 178.477 156.406 177.103L289.182 147.667C295.383 146.292 301.524 150.205 302.899 156.405L332.334 289.182C333.709 295.382 329.797 301.523 323.596 302.898L190.82 332.334C184.619 333.709 178.478 329.796 177.103 323.596L147.667 190.819Z",
            stroke: "currentColor"
          }
        ),
        /* @__PURE__ */ n(
          "path",
          {
            d: "M109.499 166.504C108.125 160.303 112.037 154.162 118.238 152.787L313.497 109.499C319.698 108.125 325.839 112.037 327.213 118.238L370.501 313.497C371.876 319.698 367.964 325.839 361.763 327.213L166.504 370.501C160.303 371.876 154.162 367.964 152.787 361.763L109.499 166.504Z",
            stroke: "currentColor"
          }
        ),
        /* @__PURE__ */ n(
          "path",
          {
            d: "M71.3315 142.188C69.9569 135.988 73.8691 129.847 80.0699 128.472L337.812 71.3319C344.013 69.9572 350.154 73.8695 351.528 80.0702L408.669 337.812C410.043 344.013 406.131 350.154 399.93 351.529L142.188 408.669C135.987 410.044 129.846 406.131 128.472 399.931L71.3315 142.188Z",
            stroke: "currentColor"
          }
        ),
        /* @__PURE__ */ n(
          "path",
          {
            d: "M33.1636 117.873C31.7889 111.672 35.7012 105.531 41.9019 104.156L362.127 33.1643C368.328 31.7896 374.469 35.7019 375.843 41.9027L446.836 362.128C448.21 368.328 444.298 374.47 438.097 375.844L117.872 446.836C111.671 448.211 105.53 444.299 104.156 438.098L33.1636 117.873Z",
            stroke: "currentColor"
          }
        ),
        /* @__PURE__ */ n(
          "path",
          {
            d: "M-5.00442 93.5575C-6.37909 87.3568 -2.4668 81.2157 3.73393 79.8411L386.442 -5.00326C392.643 -6.37793 398.784 -2.46564 400.158 3.73509L485.003 386.443C486.377 392.644 482.465 398.785 476.264 400.16L93.5564 485.004C87.3556 486.379 81.2146 482.466 79.8399 476.266L-5.00442 93.5575Z",
            stroke: "currentColor"
          }
        ),
        /* @__PURE__ */ n(
          "path",
          {
            d: "M-43.1704 69.2421C-44.5451 63.0414 -40.6328 56.9003 -34.4321 55.5256L410.759 -43.1708C416.96 -44.5455 423.101 -40.6332 424.475 -34.4325L523.172 410.758C524.546 416.959 520.634 423.1 514.433 424.475L69.2425 523.171C63.0418 524.546 56.9007 520.634 55.526 514.433L-43.1704 69.2421Z",
            stroke: "currentColor"
          }
        )
      ] }),
      /* @__PURE__ */ n("defs", { children: /* @__PURE__ */ L(
        "radialGradient",
        {
          id: "paint0_radial_4933_421799",
          cx: "0",
          cy: "0",
          r: "1",
          gradientUnits: "userSpaceOnUse",
          gradientTransform: "translate(240 240) rotate(90) scale(240 240)",
          children: [
            /* @__PURE__ */ n("stop", {}),
            /* @__PURE__ */ n("stop", { offset: "1", stopOpacity: "0" })
          ]
        }
      ) })
    ]
  }
), V8 = (t) => /* @__PURE__ */ L(
  "svg",
  {
    width: "336",
    height: "336",
    viewBox: "0 0 336 336",
    fill: "none",
    ...t,
    className: k("text-border-secondary", t.className),
    children: [
      /* @__PURE__ */ n(
        "mask",
        {
          id: "mask0_4947_375930",
          style: { maskType: "alpha" },
          maskUnits: "userSpaceOnUse",
          x: "0",
          y: "0",
          width: "336",
          height: "336",
          children: /* @__PURE__ */ n("rect", { width: "336", height: "336", fill: "url(#paint0_radial_4947_375930)" })
        }
      ),
      /* @__PURE__ */ L("g", { mask: "url(#mask0_4947_375930)", children: [
        /* @__PURE__ */ n(
          "path",
          {
            d: "M113.833 143.135C112.459 136.934 116.371 130.793 122.572 129.418L192.865 113.835C199.066 112.46 205.207 116.372 206.582 122.573L222.165 192.866C223.54 199.067 219.628 205.208 213.427 206.583L143.134 222.166C136.933 223.541 130.792 219.629 129.417 213.428L113.833 143.135Z",
            stroke: "currentColor"
          }
        ),
        /* @__PURE__ */ n(
          "path",
          {
            d: "M85.2085 124.898C83.8338 118.697 87.7461 112.556 93.9468 111.181L211.102 85.2084C217.303 83.8337 223.444 87.746 224.819 93.9467L250.792 211.102C252.166 217.303 248.254 223.444 242.053 224.819L124.898 250.791C118.697 252.166 112.556 248.254 111.181 242.053L85.2085 124.898Z",
            stroke: "currentColor"
          }
        ),
        /* @__PURE__ */ n(
          "path",
          {
            d: "M56.5835 106.661C55.2088 100.46 59.1211 94.3188 65.3218 92.9441L229.34 56.5822C235.54 55.2076 241.681 59.1199 243.056 65.3206L279.418 229.338C280.793 235.539 276.88 241.68 270.68 243.055L106.662 279.417C100.461 280.791 94.32 276.879 92.9453 270.678L56.5835 106.661Z",
            stroke: "currentColor"
          }
        ),
        /* @__PURE__ */ n(
          "path",
          {
            d: "M27.9594 88.4235C26.5848 82.2228 30.4971 76.0817 36.6978 74.707L247.578 27.9561C253.778 26.5814 259.92 30.4937 261.294 36.6944L308.045 247.574C309.42 253.775 305.508 259.916 299.307 261.291L88.4269 308.042C82.2261 309.416 76.0851 305.504 74.7104 299.303L27.9594 88.4235Z",
            stroke: "currentColor"
          }
        ),
        /* @__PURE__ */ n(
          "path",
          {
            d: "M-0.665552 70.1864C-2.04022 63.9857 1.87207 57.8446 8.0728 56.47L265.815 -0.670085C272.016 -2.04475 278.157 1.86754 279.531 8.06826L336.671 265.81C338.046 272.011 334.134 278.152 327.933 279.527L70.191 336.667C63.9902 338.042 57.8492 334.129 56.4745 327.929L-0.665552 70.1864Z",
            stroke: "currentColor"
          }
        ),
        /* @__PURE__ */ n(
          "path",
          {
            d: "M-29.2906 51.9496C-30.6652 45.7489 -26.7529 39.6078 -20.5522 38.2332L284.052 -29.296C290.253 -30.6707 296.394 -26.7584 297.769 -20.5577L365.298 284.047C366.672 290.247 362.76 296.388 356.559 297.763L51.9551 365.292C45.7543 366.667 39.6133 362.755 38.2386 356.554L-29.2906 51.9496Z",
            stroke: "currentColor"
          }
        )
      ] }),
      /* @__PURE__ */ n("defs", { children: /* @__PURE__ */ L(
        "radialGradient",
        {
          id: "paint0_radial_4947_375930",
          cx: "0",
          cy: "0",
          r: "1",
          gradientUnits: "userSpaceOnUse",
          gradientTransform: "translate(168 168) rotate(90) scale(168 168)",
          children: [
            /* @__PURE__ */ n("stop", {}),
            /* @__PURE__ */ n("stop", { offset: "1", stopOpacity: "0" })
          ]
        }
      ) })
    ]
  }
), H8 = {
  sm: V8,
  md: C8,
  lg: v8
}, y8 = {
  circle: n8,
  square: b8,
  grid: s8,
  "grid-check": p8
}, Hc = (t) => {
  const { pattern: e } = t, i = y8[e];
  return /* @__PURE__ */ n(
    i,
    {
      ...t,
      size: t.size,
      className: k("pointer-events-none", t.className)
    }
  );
}, yc = (t) => /* @__PURE__ */ n(
  "div",
  {
    ...t,
    className: k("mx-auto max-w-container px-4 md:px-8", t.className),
    children: /* @__PURE__ */ n("hr", { className: "h-px w-full border-none bg-border-secondary" })
  }
), _2 = [
  {
    name: "Afghanistan",
    code: "AF",
    flag: "https://www.actabl.com/images/flags/AF.svg",
    phoneCode: "93",
    phoneMask: "+93-##-###-####"
  },
  {
    name: "Albania",
    code: "AL",
    flag: "https://www.actabl.com/images/flags/AL.svg",
    phoneCode: "355",
    phoneMask: "+355 (###) ###-###"
  },
  {
    name: "Algeria",
    code: "DZ",
    flag: "https://www.actabl.com/images/flags/DZ.svg",
    phoneCode: "213",
    phoneMask: "+213-##-###-####"
  },
  {
    name: "Andorra",
    code: "AD",
    flag: "https://www.actabl.com/images/flags/AD.svg",
    phoneCode: "376",
    phoneMask: "+376-###-###"
  },
  {
    name: "Angola",
    code: "AO",
    flag: "https://www.actabl.com/images/flags/AO.svg",
    phoneCode: "244",
    phoneMask: "+244 (###) ###-###"
  },
  {
    name: "Antigua and Barbuda",
    code: "AG",
    flag: "https://www.actabl.com/images/flags/AG.svg",
    phoneCode: "+1-268",
    phoneMask: "+1 (268) ###-####"
  },
  {
    name: "Argentina",
    code: "AR",
    flag: "https://www.actabl.com/images/flags/AR.svg",
    phoneCode: "54",
    phoneMask: "+54 (###) ###-####"
  },
  {
    name: "Armenia",
    code: "AM",
    flag: "https://www.actabl.com/images/flags/AM.svg",
    phoneCode: "374",
    phoneMask: "+374-##-###-###"
  },
  {
    name: "Australia",
    code: "AU",
    flag: "https://www.actabl.com/images/flags/AU.svg",
    phoneCode: "61",
    phoneMask: "+61-#-####-####"
  },
  {
    name: "Austria",
    code: "AT",
    flag: "https://www.actabl.com/images/flags/AT.svg",
    phoneCode: "43",
    phoneMask: "+43 (###) ###-####"
  },
  {
    name: "Azerbaijan",
    code: "AZ",
    flag: "https://www.actabl.com/images/flags/AZ.svg",
    phoneCode: "994",
    phoneMask: "+994-##-###-##-##"
  },
  {
    name: "Bahamas",
    code: "BS",
    flag: "https://www.actabl.com/images/flags/BS.svg",
    phoneCode: "+1-242",
    phoneMask: "+1 (242) ###-####"
  },
  {
    name: "Bahrain",
    code: "BH",
    flag: "https://www.actabl.com/images/flags/BH.svg",
    phoneCode: "973",
    phoneMask: "+973-####-####"
  },
  {
    name: "Bangladesh",
    code: "BD",
    flag: "https://www.actabl.com/images/flags/BD.svg",
    phoneCode: "880",
    phoneMask: "+880-##-###-###"
  },
  {
    name: "Barbados",
    code: "BB",
    flag: "https://www.actabl.com/images/flags/BB.svg",
    phoneCode: "+1-246",
    phoneMask: "+1 (246) ###-####"
  },
  {
    name: "Belarus",
    code: "BY",
    flag: "https://www.actabl.com/images/flags/BY.svg",
    phoneCode: "375",
    phoneMask: "+375 (##) ###-##-##"
  },
  {
    name: "Belgium",
    code: "BE",
    flag: "https://www.actabl.com/images/flags/BE.svg",
    phoneCode: "32",
    phoneMask: "+32 (###) ###-###"
  },
  {
    name: "Belize",
    code: "BZ",
    flag: "https://www.actabl.com/images/flags/BZ.svg",
    phoneCode: "501",
    phoneMask: "+501-###-####"
  },
  {
    name: "Benin",
    code: "BJ",
    flag: "https://www.actabl.com/images/flags/BJ.svg",
    phoneCode: "229",
    phoneMask: "+229-##-##-####"
  },
  {
    name: "Bhutan",
    code: "BT",
    flag: "https://www.actabl.com/images/flags/BT.svg",
    phoneCode: "975",
    phoneMask: "+975-#-###-###"
  },
  {
    name: "Bolivia",
    code: "BO",
    flag: "https://www.actabl.com/images/flags/BO.svg",
    phoneCode: "591",
    phoneMask: "+591-#-###-####"
  },
  {
    name: "Bosnia and Herzegovina",
    code: "BA",
    flag: "https://www.actabl.com/images/flags/BA.svg",
    phoneCode: "387",
    phoneMask: "+387-##-####"
  },
  {
    name: "Botswana",
    code: "BW",
    flag: "https://www.actabl.com/images/flags/BW.svg",
    phoneCode: "267",
    phoneMask: "+267-##-###-###"
  },
  {
    name: "Brazil",
    code: "BR",
    flag: "https://www.actabl.com/images/flags/BR.svg",
    phoneCode: "55",
    phoneMask: "+55 (##) 9####-####"
  },
  {
    name: "Brunei",
    code: "BN",
    flag: "https://www.actabl.com/images/flags/BN.svg",
    phoneCode: "673",
    phoneMask: "+673-###-####"
  },
  {
    name: "Bulgaria",
    code: "BG",
    flag: "https://www.actabl.com/images/flags/BG.svg",
    phoneCode: "359",
    phoneMask: "+359 (###) ###-###"
  },
  {
    name: "Burkina Faso",
    code: "BF",
    flag: "https://www.actabl.com/images/flags/BF.svg",
    phoneCode: "226",
    phoneMask: "+226-##-##-####"
  },
  {
    name: "Burundi",
    code: "BI",
    flag: "https://www.actabl.com/images/flags/BI.svg",
    phoneCode: "257",
    phoneMask: "+257-##-##-####"
  },
  {
    name: "Cambodia",
    code: "KH",
    flag: "https://www.actabl.com/images/flags/KH.svg",
    phoneCode: "855",
    phoneMask: "+855-##-###-###"
  },
  {
    name: "Cameroon",
    code: "CM",
    flag: "https://www.actabl.com/images/flags/CM.svg",
    phoneCode: "237",
    phoneMask: "+237-####-####"
  },
  {
    name: "Canada",
    code: "CA",
    flag: "https://www.actabl.com/images/flags/CA.svg",
    phoneCode: "1",
    phoneMask: "+1 (###) ###-####"
  },
  {
    name: "Central African Republic",
    code: "CF",
    flag: "https://www.actabl.com/images/flags/CF.svg",
    phoneCode: "236",
    phoneMask: "+236-##-##-####"
  },
  {
    name: "Chad",
    code: "TD",
    flag: "https://www.actabl.com/images/flags/TD.svg",
    phoneCode: "235",
    phoneMask: "+235-##-##-##-##"
  },
  {
    name: "Chile",
    code: "CL",
    flag: "https://www.actabl.com/images/flags/CL.svg",
    phoneCode: "56",
    phoneMask: "+56-#-####-####"
  },
  {
    name: "China",
    code: "CN",
    flag: "https://www.actabl.com/images/flags/CN.svg",
    phoneCode: "86",
    phoneMask: "+86-##-#####-#####"
  },
  {
    name: "Colombia",
    code: "CO",
    flag: "https://www.actabl.com/images/flags/CO.svg",
    phoneCode: "57",
    phoneMask: "+57 (###) ###-####"
  },
  {
    name: "Comoros",
    code: "KM",
    flag: "https://www.actabl.com/images/flags/KM.svg",
    phoneCode: "269",
    phoneMask: "+269-##-#####"
  },
  {
    name: "Costa Rica",
    code: "CR",
    flag: "https://www.actabl.com/images/flags/CR.svg",
    phoneCode: "506",
    phoneMask: "+506-####-####"
  },
  {
    name: "Croatia",
    code: "HR",
    flag: "https://www.actabl.com/images/flags/HR.svg",
    phoneCode: "385",
    phoneMask: "+385-##-###-###"
  },
  {
    name: "Cuba",
    code: "CU",
    flag: "https://www.actabl.com/images/flags/CU.svg",
    phoneCode: "53",
    phoneMask: "+53-#-###-####"
  },
  {
    name: "Cyprus",
    code: "CY",
    flag: "https://www.actabl.com/images/flags/CY.svg",
    phoneCode: "357",
    phoneMask: "+357-##-###-###"
  },
  {
    name: "Czech Republic",
    code: "CZ",
    flag: "https://www.actabl.com/images/flags/CZ.svg",
    phoneCode: "420",
    phoneMask: "+420 (###) ###-###"
  },
  {
    name: "Democratic Republic of the Congo",
    code: "CD",
    flag: "https://www.actabl.com/images/flags/CD.svg",
    phoneCode: "243",
    phoneMask: "+243 (###) ###-###"
  },
  {
    name: "Denmark",
    code: "DK",
    flag: "https://www.actabl.com/images/flags/DK.svg",
    phoneCode: "45",
    phoneMask: "+45-##-##-##-##"
  },
  {
    name: "Djibouti",
    code: "DJ",
    flag: "https://www.actabl.com/images/flags/DJ.svg",
    phoneCode: "253",
    phoneMask: "+253-##-##-##-##"
  },
  {
    name: "Dominica",
    code: "DM",
    flag: "https://www.actabl.com/images/flags/DM.svg",
    phoneCode: "+1-767",
    phoneMask: "+1 (767) ###-####"
  },
  {
    name: "Dominican Republic",
    code: "DO",
    flag: "https://www.actabl.com/images/flags/DO.svg",
    phoneCode: "+1-809 and 1-829",
    phoneMask: "+1 (849) ###-####"
  },
  {
    name: "East Timor",
    code: "TL",
    flag: "https://www.actabl.com/images/flags/TL.svg",
    phoneCode: "670",
    phoneMask: "+670-78#-#####"
  },
  {
    name: "Ecuador",
    code: "EC",
    flag: "https://www.actabl.com/images/flags/EC.svg",
    phoneCode: "593",
    phoneMask: "+593-#-###-####"
  },
  {
    name: "Egypt",
    code: "EG",
    flag: "https://www.actabl.com/images/flags/EG.svg",
    phoneCode: "20",
    phoneMask: "+20 (###) ###-####"
  },
  {
    name: "El Salvador",
    code: "SV",
    flag: "https://www.actabl.com/images/flags/SV.svg",
    phoneCode: "503",
    phoneMask: "+503-##-##-####"
  },
  {
    name: "Equatorial Guinea",
    code: "GQ",
    flag: "https://www.actabl.com/images/flags/GQ.svg",
    phoneCode: "240",
    phoneMask: "+240-##-###-####"
  },
  {
    name: "Eritrea",
    code: "ER",
    flag: "https://www.actabl.com/images/flags/ER.svg",
    phoneCode: "291",
    phoneMask: "+291-#-###-###"
  },
  {
    name: "Estonia",
    code: "EE",
    flag: "https://www.actabl.com/images/flags/EE.svg",
    phoneCode: "372",
    phoneMask: "+372-###-####"
  },
  {
    name: "Eswatini",
    code: "SZ",
    flag: "https://www.actabl.com/images/flags/SZ.svg",
    phoneCode: "268",
    phoneMask: "+268-##-##-####"
  },
  {
    name: "Ethiopia",
    code: "ET",
    flag: "https://www.actabl.com/images/flags/ET.svg",
    phoneCode: "251",
    phoneMask: "+251-##-###-####"
  },
  {
    name: "Fiji",
    code: "FJ",
    flag: "https://www.actabl.com/images/flags/FJ.svg",
    phoneCode: "679",
    phoneMask: "+679-##-#####"
  },
  {
    name: "Finland",
    code: "FI",
    flag: "https://www.actabl.com/images/flags/FI.svg",
    phoneCode: "358",
    phoneMask: "+358 (###) ###-##-##"
  },
  {
    name: "France",
    code: "FR",
    flag: "https://www.actabl.com/images/flags/FR.svg",
    phoneCode: "33",
    phoneMask: "+590 (###) ###-###"
  },
  {
    name: "Gabon",
    code: "GA",
    flag: "https://www.actabl.com/images/flags/GA.svg",
    phoneCode: "241",
    phoneMask: "+241-#-##-##-##"
  },
  {
    name: "Gambia",
    code: "GM",
    flag: "https://www.actabl.com/images/flags/GM.svg",
    phoneCode: "220",
    phoneMask: "+220 (###) ##-##"
  },
  {
    name: "Georgia",
    code: "GE",
    flag: "https://www.actabl.com/images/flags/GE.svg",
    phoneCode: "995",
    phoneMask: "+995 (###) ###-###"
  },
  {
    name: "Germany",
    code: "DE",
    flag: "https://www.actabl.com/images/flags/DE.svg",
    phoneCode: "49",
    phoneMask: "+49-###-###"
  },
  {
    name: "Ghana",
    code: "GH",
    flag: "https://www.actabl.com/images/flags/GH.svg",
    phoneCode: "233",
    phoneMask: "+233 (###) ###-###"
  },
  {
    name: "Greece",
    code: "GR",
    flag: "https://www.actabl.com/images/flags/GR.svg",
    phoneCode: "30",
    phoneMask: "+30 (###) ###-####"
  },
  {
    name: "Grenada",
    code: "GD",
    flag: "https://www.actabl.com/images/flags/GD.svg",
    phoneCode: "+1-473",
    phoneMask: "+1 (473) ###-####"
  },
  {
    name: "Guatemala",
    code: "GT",
    flag: "https://www.actabl.com/images/flags/GT.svg",
    phoneCode: "502",
    phoneMask: "+502-#-###-####"
  },
  {
    name: "Guinea",
    code: "GN",
    flag: "https://www.actabl.com/images/flags/GN.svg",
    phoneCode: "224",
    phoneMask: "+224-##-###-###"
  },
  {
    name: "Guinea-Bissau",
    code: "GW",
    flag: "https://www.actabl.com/images/flags/GW.svg",
    phoneCode: "245",
    phoneMask: "+245-#-######"
  },
  {
    name: "Guyana",
    code: "GY",
    flag: "https://www.actabl.com/images/flags/GY.svg",
    phoneCode: "592",
    phoneMask: "+592-###-####"
  },
  {
    name: "Haiti",
    code: "HT",
    flag: "https://www.actabl.com/images/flags/HT.svg",
    phoneCode: "509",
    phoneMask: "+509-##-##-####"
  },
  {
    name: "Honduras",
    code: "HN",
    flag: "https://www.actabl.com/images/flags/HN.svg",
    phoneCode: "504",
    phoneMask: "+504-####-####"
  },
  {
    name: "Hungary",
    code: "HU",
    flag: "https://www.actabl.com/images/flags/HU.svg",
    phoneCode: "36",
    phoneMask: "+36 (###) ###-###"
  },
  {
    name: "Iceland",
    code: "IS",
    flag: "https://www.actabl.com/images/flags/IS.svg",
    phoneCode: "354",
    phoneMask: "+354-###-####"
  },
  {
    name: "India",
    code: "IN",
    flag: "https://www.actabl.com/images/flags/IN.svg",
    phoneCode: "91",
    phoneMask: "+91 (####) ###-###"
  },
  {
    name: "Indonesia",
    code: "ID",
    flag: "https://www.actabl.com/images/flags/ID.svg",
    phoneCode: "62",
    phoneMask: "+62 (8##) ###-##-###"
  },
  {
    name: "Iran",
    code: "IR",
    flag: "https://www.actabl.com/images/flags/IR.svg",
    phoneCode: "98",
    phoneMask: "+98 (###) ###-####"
  },
  {
    name: "Iraq",
    code: "IQ",
    flag: "https://www.actabl.com/images/flags/IQ.svg",
    phoneCode: "964",
    phoneMask: "+964 (###) ###-####"
  },
  {
    name: "Ireland",
    code: "IE",
    flag: "https://www.actabl.com/images/flags/IE.svg",
    phoneCode: "353",
    phoneMask: "+353 (###) ###-###"
  },
  {
    name: "Israel",
    code: "IL",
    flag: "https://www.actabl.com/images/flags/IL.svg",
    phoneCode: "972",
    phoneMask: "+972-#-###-####"
  },
  {
    name: "Italy",
    code: "IT",
    flag: "https://www.actabl.com/images/flags/IT.svg",
    phoneCode: "39",
    phoneMask: "+39 (###) ####-###"
  },
  {
    name: "Jamaica",
    code: "JM",
    flag: "https://www.actabl.com/images/flags/JM.svg",
    phoneCode: "+1-876",
    phoneMask: "+1 (876) ###-####"
  },
  {
    name: "Japan",
    code: "JP",
    flag: "https://www.actabl.com/images/flags/JP.svg",
    phoneCode: "81",
    phoneMask: "+81 (###) ###-###"
  },
  {
    name: "Jordan",
    code: "JO",
    flag: "https://www.actabl.com/images/flags/JO.svg",
    phoneCode: "962",
    phoneMask: "+962-#-####-####"
  },
  {
    name: "Kazakhstan",
    code: "KZ",
    flag: "https://www.actabl.com/images/flags/KZ.svg",
    phoneCode: "7",
    phoneMask: "+7 (7##) ###-##-##"
  },
  {
    name: "Kenya",
    code: "KE",
    flag: "https://www.actabl.com/images/flags/KE.svg",
    phoneCode: "254",
    phoneMask: "+254-###-######"
  },
  {
    name: "Kiribati",
    code: "KI",
    flag: "https://www.actabl.com/images/flags/KI.svg",
    phoneCode: "686",
    phoneMask: "+686-##-###"
  },
  {
    name: "Kuwait",
    code: "KW",
    flag: "https://www.actabl.com/images/flags/KW.svg",
    phoneCode: "965",
    phoneMask: "+965-####-####"
  },
  {
    name: "Kyrgyzstan",
    code: "KG",
    flag: "https://www.actabl.com/images/flags/KG.svg",
    phoneCode: "996",
    phoneMask: "+996 (###) ###-###"
  },
  {
    name: "Laos",
    code: "LA",
    flag: "https://www.actabl.com/images/flags/LA.svg",
    phoneCode: "856",
    phoneMask: "+856-##-###-###"
  },
  {
    name: "Latvia",
    code: "LV",
    flag: "https://www.actabl.com/images/flags/LV.svg",
    phoneCode: "371",
    phoneMask: "+371-##-###-###"
  },
  {
    name: "Lebanon",
    code: "LB",
    flag: "https://www.actabl.com/images/flags/LB.svg",
    phoneCode: "961",
    phoneMask: "+961-#-###-###"
  },
  {
    name: "Lesotho",
    code: "LS",
    flag: "https://www.actabl.com/images/flags/LS.svg",
    phoneCode: "266",
    phoneMask: "+266-#-###-####"
  },
  {
    name: "Liberia",
    code: "LR",
    flag: "https://www.actabl.com/images/flags/LR.svg",
    phoneCode: "231",
    phoneMask: "+231-##-###-###"
  },
  {
    name: "Libya",
    code: "LY",
    flag: "https://www.actabl.com/images/flags/LY.svg",
    phoneCode: "218",
    phoneMask: "+218-21-###-####"
  },
  {
    name: "Liechtenstein",
    code: "LI",
    flag: "https://www.actabl.com/images/flags/LI.svg",
    phoneCode: "423",
    phoneMask: "+423 (###) ###-####"
  },
  {
    name: "Lithuania",
    code: "LT",
    flag: "https://www.actabl.com/images/flags/LT.svg",
    phoneCode: "370",
    phoneMask: "+370 (###) ##-###"
  },
  {
    name: "Luxembourg",
    code: "LU",
    flag: "https://www.actabl.com/images/flags/LU.svg",
    phoneCode: "352",
    phoneMask: "+352 (###) ###-###"
  },
  {
    name: "Madagascar",
    code: "MG",
    flag: "https://www.actabl.com/images/flags/MG.svg",
    phoneCode: "261",
    phoneMask: "+261-##-##-#####"
  },
  {
    name: "Malawi",
    code: "MW",
    flag: "https://www.actabl.com/images/flags/MW.svg",
    phoneCode: "265",
    phoneMask: "+265-#-####-####"
  },
  {
    name: "Malaysia",
    code: "MY",
    flag: "https://www.actabl.com/images/flags/MY.svg",
    phoneCode: "60",
    phoneMask: "+60-#-###-###"
  },
  {
    name: "Maldives",
    code: "MV",
    flag: "https://www.actabl.com/images/flags/MV.svg",
    phoneCode: "960",
    phoneMask: "+960-###-####"
  },
  {
    name: "Mali",
    code: "ML",
    flag: "https://www.actabl.com/images/flags/ML.svg",
    phoneCode: "223",
    phoneMask: "+223-##-##-####"
  },
  {
    name: "Malta",
    code: "MT",
    flag: "https://www.actabl.com/images/flags/MT.svg",
    phoneCode: "356",
    phoneMask: "+356-####-####"
  },
  {
    name: "Marshall Islands",
    code: "MH",
    flag: "https://www.actabl.com/images/flags/MH.svg",
    phoneCode: "692",
    phoneMask: "+692-###-####"
  },
  {
    name: "Mauritania",
    code: "MR",
    flag: "https://www.actabl.com/images/flags/MR.svg",
    phoneCode: "222",
    phoneMask: "+222-##-##-####"
  },
  {
    name: "Mauritius",
    code: "MU",
    flag: "https://www.actabl.com/images/flags/MU.svg",
    phoneCode: "230",
    phoneMask: "+230-###-####"
  },
  {
    name: "Mexico",
    code: "MX",
    flag: "https://www.actabl.com/images/flags/MX.svg",
    phoneCode: "52",
    phoneMask: "+52-##-##-####"
  },
  {
    name: "Micronesia",
    code: "FM",
    flag: "https://www.actabl.com/images/flags/FM.svg",
    phoneCode: "691",
    phoneMask: "+691-###-####"
  },
  {
    name: "Moldova",
    code: "MD",
    flag: "https://www.actabl.com/images/flags/MD.svg",
    phoneCode: "373",
    phoneMask: "+373-####-####"
  },
  {
    name: "Monaco",
    code: "MC",
    flag: "https://www.actabl.com/images/flags/MC.svg",
    phoneCode: "377",
    phoneMask: "+377-##-###-###"
  },
  {
    name: "Mongolia",
    code: "MN",
    flag: "https://www.actabl.com/images/flags/MN.svg",
    phoneCode: "976",
    phoneMask: "+976-##-##-####"
  },
  {
    name: "Montenegro",
    code: "ME",
    flag: "https://www.actabl.com/images/flags/ME.svg",
    phoneCode: "382",
    phoneMask: "+382-##-###-###"
  },
  {
    name: "Morocco",
    code: "MA",
    flag: "https://www.actabl.com/images/flags/MA.svg",
    phoneCode: "212",
    phoneMask: "+212-##-####-###"
  },
  {
    name: "Mozambique",
    code: "MZ",
    flag: "https://www.actabl.com/images/flags/MZ.svg",
    phoneCode: "258",
    phoneMask: "+258-##-###-###"
  },
  {
    name: "Myanmar",
    code: "MM",
    flag: "https://www.actabl.com/images/flags/MM.svg",
    phoneCode: "95",
    phoneMask: "+95-###-###"
  },
  {
    name: "Namibia",
    code: "NA",
    flag: "https://www.actabl.com/images/flags/NA.svg",
    phoneCode: "264",
    phoneMask: "+264-##-###-####"
  },
  {
    name: "Nauru",
    code: "NR",
    flag: "https://www.actabl.com/images/flags/NR.svg",
    phoneCode: "674",
    phoneMask: "+674-###-####"
  },
  {
    name: "Nepal",
    code: "NP",
    flag: "https://www.actabl.com/images/flags/NP.svg",
    phoneCode: "977",
    phoneMask: "+977-##-###-###"
  },
  {
    name: "Netherlands",
    code: "NL",
    flag: "https://www.actabl.com/images/flags/NL.svg",
    phoneCode: "31",
    phoneMask: "+31-##-###-####"
  },
  {
    name: "New Zealand",
    code: "NZ",
    flag: "https://www.actabl.com/images/flags/NZ.svg",
    phoneCode: "64",
    phoneMask: "+64 (###) ###-####"
  },
  {
    name: "Nicaragua",
    code: "NI",
    flag: "https://www.actabl.com/images/flags/NI.svg",
    phoneCode: "505",
    phoneMask: "+505-####-####"
  },
  {
    name: "Niger",
    code: "NE",
    flag: "https://www.actabl.com/images/flags/NE.svg",
    phoneCode: "227",
    phoneMask: "+227-##-##-####"
  },
  {
    name: "Nigeria",
    code: "NG",
    flag: "https://www.actabl.com/images/flags/NG.svg",
    phoneCode: "234",
    phoneMask: "+234 (###) ###-####"
  },
  {
    name: "North Korea",
    code: "KP",
    flag: "https://www.actabl.com/images/flags/KP.svg",
    phoneCode: "850",
    phoneMask: "+850-####-#############"
  },
  {
    name: "North Macedonia",
    code: "MK",
    flag: "https://www.actabl.com/images/flags/MK.svg",
    phoneCode: "389",
    phoneMask: "+389-##-###-###"
  },
  {
    name: "Norway",
    code: "NO",
    flag: "https://www.actabl.com/images/flags/NO.svg",
    phoneCode: "47",
    phoneMask: "+47 (###) ##-###"
  },
  {
    name: "Oman",
    code: "OM",
    flag: "https://www.actabl.com/images/flags/OM.svg",
    phoneCode: "968",
    phoneMask: "+968-##-###-###"
  },
  {
    name: "Pakistan",
    code: "PK",
    flag: "https://www.actabl.com/images/flags/PK.svg",
    phoneCode: "92",
    phoneMask: "+92 (###) ###-####"
  },
  {
    name: "Palau",
    code: "PW",
    flag: "https://www.actabl.com/images/flags/PW.svg",
    phoneCode: "680",
    phoneMask: "+680-###-####"
  },
  {
    name: "Panama",
    code: "PA",
    flag: "https://www.actabl.com/images/flags/PA.svg",
    phoneCode: "507",
    phoneMask: "+507-###-####"
  },
  {
    name: "Papua New Guinea",
    code: "PG",
    flag: "https://www.actabl.com/images/flags/PG.svg",
    phoneCode: "675",
    phoneMask: "+675 (###) ##-###"
  },
  {
    name: "Paraguay",
    code: "PY",
    flag: "https://www.actabl.com/images/flags/PY.svg",
    phoneCode: "595",
    phoneMask: "+595 (###) ###-###"
  },
  {
    name: "Peru",
    code: "PE",
    flag: "https://www.actabl.com/images/flags/PE.svg",
    phoneCode: "51",
    phoneMask: "+51 (###) ###-###"
  },
  {
    name: "Philippines",
    code: "PH",
    flag: "https://www.actabl.com/images/flags/PH.svg",
    phoneCode: "63",
    phoneMask: "+63 (###) ###-####"
  },
  {
    name: "Poland",
    code: "PL",
    flag: "https://www.actabl.com/images/flags/PL.svg",
    phoneCode: "48",
    phoneMask: "+48 (###) ###-###"
  },
  {
    name: "Portugal",
    code: "PT",
    flag: "https://www.actabl.com/images/flags/PT.svg",
    phoneCode: "351",
    phoneMask: "+351-##-###-####"
  },
  {
    name: "Qatar",
    code: "QA",
    flag: "https://www.actabl.com/images/flags/QA.svg",
    phoneCode: "974",
    phoneMask: "+974-####-####"
  },
  {
    name: "Romania",
    code: "RO",
    flag: "https://www.actabl.com/images/flags/RO.svg",
    phoneCode: "40",
    phoneMask: "+40-##-###-####"
  },
  {
    name: "Russia",
    code: "RU",
    flag: "https://www.actabl.com/images/flags/RU.svg",
    phoneCode: "7",
    phoneMask: "+7 (###) ###-##-##"
  },
  {
    name: "Rwanda",
    code: "RW",
    flag: "https://www.actabl.com/images/flags/RW.svg",
    phoneCode: "250",
    phoneMask: "+250 (###) ###-###"
  },
  {
    name: "Saint Kitts and Nevis",
    code: "KN",
    flag: "https://www.actabl.com/images/flags/KN.svg",
    phoneCode: "+1-869",
    phoneMask: "+1 (869) ###-####"
  },
  {
    name: "Saint Lucia",
    code: "LC",
    flag: "https://www.actabl.com/images/flags/LC.svg",
    phoneCode: "+1-758",
    phoneMask: "+1 (758) ###-####"
  },
  {
    name: "Saint Vincent and the Grenadines",
    code: "VC",
    flag: "https://www.actabl.com/images/flags/VC.svg",
    phoneCode: "+1-784",
    phoneMask: "+1 (784) ###-####"
  },
  {
    name: "Samoa",
    code: "WS",
    flag: "https://www.actabl.com/images/flags/WS.svg",
    phoneCode: "685",
    phoneMask: "+685-##-####"
  },
  {
    name: "San Marino",
    code: "SM",
    flag: "https://www.actabl.com/images/flags/SM.svg",
    phoneCode: "378",
    phoneMask: "+378-####-######"
  },
  {
    name: "Sao Tome and Principe",
    code: "ST",
    flag: "https://www.actabl.com/images/flags/ST.svg",
    phoneCode: "239",
    phoneMask: "+239-##-#####"
  },
  {
    name: "Saudi Arabia",
    code: "SA",
    flag: "https://www.actabl.com/images/flags/SA.svg",
    phoneCode: "966",
    phoneMask: "+966-#-###-####"
  },
  {
    name: "Senegal",
    code: "SN",
    flag: "https://www.actabl.com/images/flags/SN.svg",
    phoneCode: "221",
    phoneMask: "+221-##-###-####"
  },
  {
    name: "Serbia",
    code: "RS",
    flag: "https://www.actabl.com/images/flags/RS.svg",
    phoneCode: "381",
    phoneMask: "+381-##-###-####"
  },
  {
    name: "Seychelles",
    code: "SC",
    flag: "https://www.actabl.com/images/flags/SC.svg",
    phoneCode: "248",
    phoneMask: "+248-#-###-###"
  },
  {
    name: "Sierra Leone",
    code: "SL",
    flag: "https://www.actabl.com/images/flags/SL.svg",
    phoneCode: "232",
    phoneMask: "+232-##-######"
  },
  {
    name: "Singapore",
    code: "SG",
    flag: "https://www.actabl.com/images/flags/SG.svg",
    phoneCode: "65",
    phoneMask: "+65-####-####"
  },
  {
    name: "Slovakia",
    code: "SK",
    flag: "https://www.actabl.com/images/flags/SK.svg",
    phoneCode: "421",
    phoneMask: "+421 (###) ###-###"
  },
  {
    name: "Slovenia",
    code: "SI",
    flag: "https://www.actabl.com/images/flags/SI.svg",
    phoneCode: "386",
    phoneMask: "+386-##-###-###"
  },
  {
    name: "Solomon Islands",
    code: "SB",
    flag: "https://www.actabl.com/images/flags/SB.svg",
    phoneCode: "677",
    phoneMask: "+677-#####"
  },
  {
    name: "Somalia",
    code: "SO",
    flag: "https://www.actabl.com/images/flags/SO.svg",
    phoneCode: "252",
    phoneMask: "+252-#-###-###"
  },
  {
    name: "South Africa",
    code: "ZA",
    flag: "https://www.actabl.com/images/flags/ZA.svg",
    phoneCode: "27",
    phoneMask: "+27-##-###-####"
  },
  {
    name: "South Korea",
    code: "KR",
    flag: "https://www.actabl.com/images/flags/KR.svg",
    phoneCode: "82",
    phoneMask: "+82-##-###-####"
  },
  {
    name: "South Sudan",
    code: "SS",
    flag: "https://www.actabl.com/images/flags/SS.svg",
    phoneCode: "211",
    phoneMask: "+211-##-###-####"
  },
  {
    name: "Spain",
    code: "ES",
    flag: "https://www.actabl.com/images/flags/ES.svg",
    phoneCode: "34",
    phoneMask: "+34 (###) ###-###"
  },
  {
    name: "Sri Lanka",
    code: "LK",
    flag: "https://www.actabl.com/images/flags/LK.svg",
    phoneCode: "94",
    phoneMask: "+94-##-###-####"
  },
  {
    name: "Suriname",
    code: "SR",
    flag: "https://www.actabl.com/images/flags/SR.svg",
    phoneCode: "597",
    phoneMask: "+597-###-###"
  },
  {
    name: "Sweden",
    code: "SE",
    flag: "https://www.actabl.com/images/flags/SE.svg",
    phoneCode: "46",
    phoneMask: "+46-##-###-####"
  },
  {
    name: "Switzerland",
    code: "CH",
    flag: "https://www.actabl.com/images/flags/CH.svg",
    phoneCode: "41",
    phoneMask: "+41-##-###-####"
  },
  {
    name: "Syria",
    code: "SY",
    flag: "https://www.actabl.com/images/flags/SY.svg",
    phoneCode: "963",
    phoneMask: "+963-##-####-###"
  },
  {
    name: "Tajikistan",
    code: "TJ",
    flag: "https://www.actabl.com/images/flags/TJ.svg",
    phoneCode: "992",
    phoneMask: "+992-##-###-####"
  },
  {
    name: "Tanzania",
    code: "TZ",
    flag: "https://www.actabl.com/images/flags/TZ.svg",
    phoneCode: "255",
    phoneMask: "+255-##-###-####"
  },
  {
    name: "Thailand",
    code: "TH",
    flag: "https://www.actabl.com/images/flags/TH.svg",
    phoneCode: "66",
    phoneMask: "+66-##-###-###"
  },
  {
    name: "Togo",
    code: "TG",
    flag: "https://www.actabl.com/images/flags/TG.svg",
    phoneCode: "228",
    phoneMask: "+228-##-###-###"
  },
  {
    name: "Tonga",
    code: "TO",
    flag: "https://www.actabl.com/images/flags/TO.svg",
    phoneCode: "676",
    phoneMask: "+676-#####"
  },
  {
    name: "Trinidad and Tobago",
    code: "TT",
    flag: "https://www.actabl.com/images/flags/TT.svg",
    phoneCode: "+1-868",
    phoneMask: "+1 (868) ###-####"
  },
  {
    name: "Tunisia",
    code: "TN",
    flag: "https://www.actabl.com/images/flags/TN.svg",
    phoneCode: "216",
    phoneMask: "+216-##-###-###"
  },
  {
    name: "Turkey",
    code: "TR",
    flag: "https://www.actabl.com/images/flags/TR.svg",
    phoneCode: "90",
    phoneMask: "+90 (###) ###-####"
  },
  {
    name: "Turkmenistan",
    code: "TM",
    flag: "https://www.actabl.com/images/flags/TM.svg",
    phoneCode: "993",
    phoneMask: "+993-#-###-####"
  },
  {
    name: "Tuvalu",
    code: "TV",
    flag: "https://www.actabl.com/images/flags/TV.svg",
    phoneCode: "688",
    phoneMask: "+688-2####"
  },
  {
    name: "Uganda",
    code: "UG",
    flag: "https://www.actabl.com/images/flags/UG.svg",
    phoneCode: "256",
    phoneMask: "+256 (###) ###-###"
  },
  {
    name: "Ukraine",
    code: "UA",
    flag: "https://www.actabl.com/images/flags/UA.svg",
    phoneCode: "380",
    phoneMask: "+380 (##) ###-##-##"
  },
  {
    name: "United Arab Emirates",
    code: "AE",
    flag: "https://www.actabl.com/images/flags/AE.svg",
    phoneCode: "971",
    phoneMask: "+971-#-###-####"
  },
  {
    name: "United Kingdom",
    code: "GB",
    flag: "https://www.actabl.com/images/flags/GB.svg",
    phoneCode: "44"
  },
  {
    name: "United States",
    code: "US",
    flag: "https://www.actabl.com/images/flags/US.svg",
    phoneCode: "1",
    phoneMask: "+1 (###) ###-####"
  },
  {
    name: "Uruguay",
    code: "UY",
    flag: "https://www.actabl.com/images/flags/UY.svg",
    phoneCode: "598",
    phoneMask: "+598-#-###-##-##"
  },
  {
    name: "Uzbekistan",
    code: "UZ",
    flag: "https://www.actabl.com/images/flags/UZ.svg",
    phoneCode: "998",
    phoneMask: "+998-##-###-####"
  },
  {
    name: "Vanuatu",
    code: "VU",
    flag: "https://www.actabl.com/images/flags/VU.svg",
    phoneCode: "678",
    phoneMask: "+678-#####"
  },
  {
    name: "Venezuela",
    code: "VE",
    flag: "https://www.actabl.com/images/flags/VE.svg",
    phoneCode: "58",
    phoneMask: "+58 (###) ###-####"
  },
  {
    name: "Vietnam",
    code: "VN",
    flag: "https://www.actabl.com/images/flags/VN.svg",
    phoneCode: "84",
    phoneMask: "+84 (###) ####-###"
  },
  {
    name: "Yemen",
    code: "YE",
    flag: "https://www.actabl.com/images/flags/YE.svg",
    phoneCode: "967",
    phoneMask: "+967-##-###-###"
  },
  {
    name: "Zambia",
    code: "ZM",
    flag: "https://www.actabl.com/images/flags/ZM.svg",
    phoneCode: "260",
    phoneMask: "+260-##-###-####"
  },
  {
    name: "Zimbabwe",
    code: "ZW",
    flag: "https://www.actabl.com/images/flags/ZW.svg",
    phoneCode: "263",
    phoneMask: "+263-#-######"
  }
];
_2.map((t) => ({
  id: t.code,
  label: t.code
}));
_2.map((t) => ({
  id: t.code,
  label: t.name,
  icon: (e) => /* @__PURE__ */ n("img", { ...e, src: t.flag, alt: `${t.name} flag` })
}));
const Z2 = [
  {
    value: "UTC−12:00",
    name: "IDLW",
    longName: "International Date Line West"
  },
  {
    value: "UTC−11:00",
    name: "UTC−11",
    longName: "Coordinated Universal Time-11"
  },
  {
    value: "UTC−10:00",
    name: "HST",
    longName: "Hawaii-Aleutian Standard Time"
  },
  { value: "UTC−09:00", name: "AKST", longName: "Alaska Standard Time" },
  { value: "UTC−08:00", name: "PST", longName: "Pacific Standard Time" },
  { value: "UTC−07:00", name: "MST", longName: "Mountain Standard Time" },
  { value: "UTC−06:00", name: "CST", longName: "Central Standard Time" },
  { value: "UTC−05:00", name: "EST", longName: "Eastern Standard Time" },
  { value: "UTC−04:00", name: "AST", longName: "Atlantic Standard Time" },
  { value: "UTC−03:00", name: "ART", longName: "Argentina Time" },
  { value: "UTC−02:00", name: "GST", longName: "South Georgia Time" },
  { value: "UTC−01:00", name: "AZOT", longName: "Azores Standard Time" },
  { value: "UTC+00:00", name: "GMT", longName: "Greenwich Mean Time" },
  { value: "UTC+01:00", name: "CET", longName: "Central European Time" },
  { value: "UTC+02:00", name: "EET", longName: "Eastern European Time" },
  { value: "UTC+03:00", name: "MSK", longName: "Moscow Standard Time" },
  { value: "UTC+03:30", name: "IRST", longName: "Iran Standard Time" },
  { value: "UTC+04:00", name: "GST", longName: "Gulf Standard Time" },
  { value: "UTC+05:00", name: "PKT", longName: "Pakistan Standard Time" },
  { value: "UTC+05:30", name: "IST", longName: "Indian Standard Time" },
  { value: "UTC+06:00", name: "BST", longName: "Bangladesh Standard Time" },
  { value: "UTC+07:00", name: "ICT", longName: "Indochina Time" },
  { value: "UTC+08:00", name: "CST", longName: "China Standard Time" },
  { value: "UTC+09:00", name: "JST", longName: "Japan Standard Time" },
  {
    value: "UTC+10:00",
    name: "AEST",
    longName: "Australian Eastern Standard Time"
  },
  { value: "UTC+11:00", name: "SBT", longName: "Solomon Islands Time" },
  { value: "UTC+12:00", name: "NZST", longName: "New Zealand Standard Time" }
], wc = Z2.map((t) => ({
  id: t.value,
  label: t.name,
  supportingText: t.value,
  icon: Fl
})), Mc = Z2.map(
  (t) => ({
    id: t.value,
    label: `${t.longName} (${t.name})`,
    supportingText: t.value,
    icon: Fl
  })
);
function xc(t) {
  const [e, i] = ne("");
  return le(() => {
    const l = new IntersectionObserver(
      (r) => {
        r.forEach((o) => {
          o.isIntersecting && i(o.target.id);
        });
      },
      { rootMargin: "0% 0% -80% 0%" }
    );
    return t?.forEach((r) => {
      const o = document.getElementById(r);
      o && l.observe(o);
    }), () => {
      t?.forEach((r) => {
        const o = document.getElementById(r);
        o && l.unobserve(o);
      });
    };
  }, [t]), e;
}
const Ao = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px"
}, $c = (t) => {
  const [e, i] = ne(
    typeof window < "u" ? window.matchMedia(`(min-width: ${Ao[t]})`).matches : !0
  );
  return le(() => {
    const l = window.matchMedia(`(min-width: ${Ao[t]})`);
    i(l.matches);
    const r = (o) => i(o.matches);
    return l.addEventListener("change", r), () => l.removeEventListener("change", r);
  }, []), e;
}, Bo = 2e3, Dc = () => {
  const [t, e] = ne(!1), i = (r, o) => {
    try {
      const a = document.createElement("textarea");
      a.value = r, a.style.position = "absolute", a.style.left = "-99999px", document.body.appendChild(a), a.select();
      const s = document.execCommand("copy");
      return a.remove(), e(o || !0), setTimeout(() => e(!1), Bo), s ? { success: !0 } : { success: !1, error: new Error("execCommand returned false") };
    } catch (a) {
      return {
        success: !1,
        error: a instanceof Error ? a : new Error("Fallback copy failed")
      };
    }
  }, l = oe(async (r, o) => {
    if (navigator.clipboard && window.isSecureContext)
      try {
        return await navigator.clipboard.writeText(r), e(o || !0), setTimeout(() => e(!1), Bo), { success: !0 };
      } catch {
        return i(r, o);
      }
    return i(r);
  }, []);
  return { copied: t, copy: l };
};
export {
  z8 as ActablLogos,
  U8 as AmexIcon,
  Q8 as AngelList,
  ec as Apple,
  G8 as ApplePayIcon,
  Nn as Avatar,
  $8 as AvatarLabelGroup,
  D8 as AvatarProfilePhoto,
  Hc as BackgroundPattern,
  k8 as Badge,
  S8 as BadgeIcon,
  P8 as BadgeWithButton,
  _8 as BadgeWithDot,
  Z8 as BadgeWithIcon,
  E8 as BadgeWithImage,
  L8 as Button,
  K8 as ButtonGroup,
  T8 as ButtonUtility,
  s3 as Checkbox,
  F8 as CloseButton,
  tc as Clubhouse,
  ic as Discord,
  W8 as DiscoverIcon,
  J6 as Dot,
  nc as Dribbble,
  A8 as Dropdown,
  lc as Facebook,
  rc as Figma,
  h3 as Form,
  oc as GitHub,
  ac as Google,
  Bt as HintText,
  g3 as HookForm,
  b3 as Input,
  f2 as InputGroup,
  sc as Instagram,
  Rt as Label,
  dc as Layers,
  uc as LinkedIn,
  j8 as MastercardIcon,
  O3 as MultiSelect,
  B8 as NativeSelect,
  Y8 as PayPalIcon,
  Fi as PinInput,
  cc as Pinterest,
  O8 as RatingBadge,
  i8 as RatingStars,
  fc as Reddit,
  yc as SectionDivider,
  D2 as Select,
  pc as Signal,
  R8 as Slider,
  hc as Snapchat,
  N8 as SocialButton,
  X8 as StripeIcon,
  mc as Telegram,
  gc as TikTok,
  I8 as Toggle,
  wr as Tooltip,
  bc as Tumblr,
  vc as Twitter,
  J8 as UnionPayIcon,
  q8 as VisaIcon,
  Cc as X,
  Vc as YouTube,
  _2 as countries,
  k as cx,
  ki as isReactComponent,
  Z2 as timezones,
  wc as timezonesOptions,
  Mc as timezonesOptionsWithLongName,
  xc as useActiveItem,
  $c as useBreakpoint,
  Dc as useClipboard,
  x2 as useResizeObserver
};
//# sourceMappingURL=index.js.map
