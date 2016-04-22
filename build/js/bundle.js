"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

!function e(t, n, i) {
  function r(a, s) {
    if (!n[a]) {
      if (!t[a]) {
        var l = "function" == typeof require && require;if (!s && l) return l(a, !0);if (o) return o(a, !0);var u = new Error("Cannot find module '" + a + "'");throw u.code = "MODULE_NOT_FOUND", u;
      }var c = n[a] = { exports: {} };t[a][0].call(c.exports, function (e) {
        var n = t[a][1][e];return r(n ? n : e);
      }, c, c.exports, e, t, n, i);
    }return n[a].exports;
  }for (var o = "function" == typeof require && require, a = 0; a < i.length; a++) {
    r(i[a]);
  }return r;
}({ 1: [function (e, t, n) {
    (function (e) {
      (function (e, t, n, i, r) {
        !function (t, n) {
          "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "object" == _typeof(e.exports) ? e.exports = t.document ? n(t, !0) : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");return n(e);
          } : n(t);
        }("undefined" != typeof window ? window : this, function (e, t) {
          function n(e) {
            var t = !!e && "length" in e && e.length,
                n = ae.type(e);return "function" === n || ae.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e;
          }function r(e, t, n) {
            if (ae.isFunction(t)) return ae.grep(e, function (e, i) {
              return !!t.call(e, i, e) !== n;
            });if (t.nodeType) return ae.grep(e, function (e) {
              return e === t !== n;
            });if ("string" == typeof t) {
              if (ge.test(t)) return ae.filter(t, e, n);t = ae.filter(t, e);
            }return ae.grep(e, function (e) {
              return ee.call(t, e) > -1 !== n;
            });
          }function o(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType;) {}return e;
          }function a(e) {
            var t = {};return ae.each(e.match(Ce) || [], function (e, n) {
              t[n] = !0;
            }), t;
          }function s() {
            G.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s), ae.ready();
          }function l() {
            this.expando = ae.expando + l.uid++;
          }function u(e, t, n) {
            var i;if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(Pe, "-$&").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
              try {
                n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Oe.test(n) ? ae.parseJSON(n) : n;
              } catch (r) {}Ae.set(e, t, n);
            } else n = void 0;return n;
          }function c(e, t, n, i) {
            var r,
                o = 1,
                a = 20,
                s = i ? function () {
              return i.cur();
            } : function () {
              return ae.css(e, t, "");
            },
                l = s(),
                u = n && n[3] || (ae.cssNumber[t] ? "" : "px"),
                c = (ae.cssNumber[t] || "px" !== u && +l) && De.exec(ae.css(e, t));if (c && c[3] !== u) {
              u = u || c[3], n = n || [], c = +l || 1;do {
                o = o || ".5", c /= o, ae.style(e, t, c + u);
              } while (o !== (o = s() / l) && 1 !== o && --a);
            }return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r;
          }function d(e, t) {
            var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];return void 0 === t || t && ae.nodeName(e, t) ? ae.merge([e], n) : n;
          }function f(e, t) {
            for (var n = 0, i = e.length; i > n; n++) {
              Ee.set(e[n], "globalEval", !t || Ee.get(t[n], "globalEval"));
            }
          }function p(e, t, n, i, r) {
            for (var o, a, s, l, u, c, p = t.createDocumentFragment(), h = [], v = 0, g = e.length; g > v; v++) {
              if (o = e[v], o || 0 === o) if ("object" === ae.type(o)) ae.merge(h, o.nodeType ? [o] : o);else if (Fe.test(o)) {
                for (a = a || p.appendChild(t.createElement("div")), s = (Le.exec(o) || ["", ""])[1].toLowerCase(), l = _e[s] || _e._default, a.innerHTML = l[1] + ae.htmlPrefilter(o) + l[2], c = l[0]; c--;) {
                  a = a.lastChild;
                }ae.merge(h, a.childNodes), a = p.firstChild, a.textContent = "";
              } else h.push(t.createTextNode(o));
            }for (p.textContent = "", v = 0; o = h[v++];) {
              if (i && ae.inArray(o, i) > -1) r && r.push(o);else if (u = ae.contains(o.ownerDocument, o), a = d(p.appendChild(o), "script"), u && f(a), n) for (c = 0; o = a[c++];) {
                Ie.test(o.type || "") && n.push(o);
              }
            }return p;
          }function h() {
            return !0;
          }function v() {
            return !1;
          }function g() {
            try {
              return G.activeElement;
            } catch (e) {}
          }function m(e, t, n, i, r, o) {
            var a, s;if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
              "string" != typeof n && (i = i || n, n = void 0);for (s in t) {
                m(e, s, n, i, t[s], o);
              }return e;
            }if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = v;else if (!r) return e;return 1 === o && (a = r, r = function r(e) {
              return ae().off(e), a.apply(this, arguments);
            }, r.guid = a.guid || (a.guid = ae.guid++)), e.each(function () {
              ae.event.add(this, t, r, i, n);
            });
          }function y(e, t) {
            return ae.nodeName(e, "table") && ae.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
          }function b(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
          }function x(e) {
            var t = Xe.exec(e.type);return t ? e.type = t[1] : e.removeAttribute("type"), e;
          }function w(e, t) {
            var n, i, r, o, a, s, l, u;if (1 === t.nodeType) {
              if (Ee.hasData(e) && (o = Ee.access(e), a = Ee.set(t, o), u = o.events)) {
                delete a.handle, a.events = {};for (r in u) {
                  for (n = 0, i = u[r].length; i > n; n++) {
                    ae.event.add(t, r, u[r][n]);
                  }
                }
              }Ae.hasData(e) && (s = Ae.access(e), l = ae.extend({}, s), Ae.set(t, l));
            }
          }function C(e, t) {
            var n = t.nodeName.toLowerCase();"input" === n && Me.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
          }function T(e, t, n, i) {
            t = J.apply([], t);var r,
                o,
                a,
                s,
                l,
                u,
                c = 0,
                f = e.length,
                h = f - 1,
                v = t[0],
                g = ae.isFunction(v);if (g || f > 1 && "string" == typeof v && !re.checkClone && Ve.test(v)) return e.each(function (r) {
              var o = e.eq(r);g && (t[0] = v.call(this, r, o.html())), T(o, t, n, i);
            });if (f && (r = p(t, e[0].ownerDocument, !1, e, i), o = r.firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
              for (a = ae.map(d(r, "script"), b), s = a.length; f > c; c++) {
                l = r, c !== h && (l = ae.clone(l, !0, !0), s && ae.merge(a, d(l, "script"))), n.call(e[c], l, c);
              }if (s) for (u = a[a.length - 1].ownerDocument, ae.map(a, x), c = 0; s > c; c++) {
                l = a[c], Ie.test(l.type || "") && !Ee.access(l, "globalEval") && ae.contains(u, l) && (l.src ? ae._evalUrl && ae._evalUrl(l.src) : ae.globalEval(l.textContent.replace(Be, "")));
              }
            }return e;
          }function k(e, t, n) {
            for (var i, r = t ? ae.filter(t, e) : e, o = 0; null != (i = r[o]); o++) {
              n || 1 !== i.nodeType || ae.cleanData(d(i)), i.parentNode && (n && ae.contains(i.ownerDocument, i) && f(d(i, "script")), i.parentNode.removeChild(i));
            }return e;
          }function S(e, t) {
            var n = ae(t.createElement(e)).appendTo(t.body),
                i = ae.css(n[0], "display");return n.detach(), i;
          }function E(e) {
            var t = G,
                n = Ye[e];return n || (n = S(e, t), "none" !== n && n || (Qe = (Qe || ae("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Qe[0].contentDocument, t.write(), t.close(), n = S(e, t), Qe.detach()), Ye[e] = n), n;
          }function A(e, t, n) {
            var i,
                r,
                o,
                a,
                s = e.style;return n = n || Ze(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== a && void 0 !== a || ae.contains(e.ownerDocument, e) || (a = ae.style(e, t)), n && !re.pixelMarginRight() && Ge.test(a) && Ue.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o), void 0 !== a ? a + "" : a;
          }function O(e, t) {
            return { get: function get() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments);
              } };
          }function P(e) {
            if (e in rt) return e;for (var t = e[0].toUpperCase() + e.slice(1), n = it.length; n--;) {
              if (e = it[n] + t, e in rt) return e;
            }
          }function q(e, t, n) {
            var i = De.exec(t);return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
          }function D(e, t, n, i, r) {
            for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) {
              "margin" === n && (a += ae.css(e, n + Ne[o], !0, r)), i ? ("content" === n && (a -= ae.css(e, "padding" + Ne[o], !0, r)), "margin" !== n && (a -= ae.css(e, "border" + Ne[o] + "Width", !0, r))) : (a += ae.css(e, "padding" + Ne[o], !0, r), "padding" !== n && (a += ae.css(e, "border" + Ne[o] + "Width", !0, r)));
            }return a;
          }function N(t, n, i) {
            var r = !0,
                o = "width" === n ? t.offsetWidth : t.offsetHeight,
                a = Ze(t),
                s = "border-box" === ae.css(t, "boxSizing", !1, a);if (G.msFullscreenElement && e.top !== e && t.getClientRects().length && (o = Math.round(100 * t.getBoundingClientRect()[n])), 0 >= o || null == o) {
              if (o = A(t, n, a), (0 > o || null == o) && (o = t.style[n]), Ge.test(o)) return o;r = s && (re.boxSizingReliable() || o === t.style[n]), o = parseFloat(o) || 0;
            }return o + D(t, n, i || (s ? "border" : "content"), r, a) + "px";
          }function j(e, t) {
            for (var n, i, r, o = [], a = 0, s = e.length; s > a; a++) {
              i = e[a], i.style && (o[a] = Ee.get(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && je(i) && (o[a] = Ee.access(i, "olddisplay", E(i.nodeName)))) : (r = je(i), "none" === n && r || Ee.set(i, "olddisplay", r ? n : ae.css(i, "display"))));
            }for (a = 0; s > a; a++) {
              i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
            }return e;
          }function M(e, t, n, i, r) {
            return new M.prototype.init(e, t, n, i, r);
          }function L() {
            return e.setTimeout(function () {
              ot = void 0;
            }), ot = ae.now();
          }function I(e, t) {
            var n,
                i = 0,
                r = { height: e };for (t = t ? 1 : 0; 4 > i; i += 2 - t) {
              n = Ne[i], r["margin" + n] = r["padding" + n] = e;
            }return t && (r.opacity = r.width = e), r;
          }function _(e, t, n) {
            for (var i, r = ($.tweeners[t] || []).concat($.tweeners["*"]), o = 0, a = r.length; a > o; o++) {
              if (i = r[o].call(n, t, e)) return i;
            }
          }function F(e, t, n) {
            var i,
                r,
                o,
                a,
                s,
                l,
                u,
                c,
                d = this,
                f = {},
                p = e.style,
                h = e.nodeType && je(e),
                v = Ee.get(e, "fxshow");n.queue || (s = ae._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
              s.unqueued || l();
            }), s.unqueued++, d.always(function () {
              d.always(function () {
                s.unqueued--, ae.queue(e, "fx").length || s.empty.fire();
              });
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = ae.css(e, "display"), c = "none" === u ? Ee.get(e, "olddisplay") || E(e.nodeName) : u, "inline" === c && "none" === ae.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function () {
              p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
            }));for (i in t) {
              if (r = t[i], st.exec(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (h ? "hide" : "show")) {
                  if ("show" !== r || !v || void 0 === v[i]) continue;h = !0;
                }f[i] = v && v[i] || ae.style(e, i);
              } else u = void 0;
            }if (ae.isEmptyObject(f)) "inline" === ("none" === u ? E(e.nodeName) : u) && (p.display = u);else {
              v ? "hidden" in v && (h = v.hidden) : v = Ee.access(e, "fxshow", {}), o && (v.hidden = !h), h ? ae(e).show() : d.done(function () {
                ae(e).hide();
              }), d.done(function () {
                var t;Ee.remove(e, "fxshow");for (t in f) {
                  ae.style(e, t, f[t]);
                }
              });for (i in f) {
                a = _(h ? v[i] : 0, i, d), i in v || (v[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0));
              }
            }
          }function H(e, t) {
            var n, i, r, o, a;for (n in e) {
              if (i = ae.camelCase(n), r = t[i], o = e[n], ae.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a = ae.cssHooks[i], a && "expand" in a) {
                o = a.expand(o), delete e[i];for (n in o) {
                  n in e || (e[n] = o[n], t[n] = r);
                }
              } else t[i] = r;
            }
          }function $(e, t, n) {
            var i,
                r,
                o = 0,
                a = $.prefilters.length,
                s = ae.Deferred().always(function () {
              delete l.elem;
            }),
                l = function l() {
              if (r) return !1;for (var t = ot || L(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, o = 1 - i, a = 0, l = u.tweens.length; l > a; a++) {
                u.tweens[a].run(o);
              }return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1);
            },
                u = s.promise({ elem: e, props: ae.extend({}, t), opts: ae.extend(!0, { specialEasing: {}, easing: ae.easing._default }, n), originalProperties: t, originalOptions: n, startTime: ot || L(), duration: n.duration, tweens: [], createTween: function createTween(t, n) {
                var i = ae.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);return u.tweens.push(i), i;
              }, stop: function stop(t) {
                var n = 0,
                    i = t ? u.tweens.length : 0;if (r) return this;for (r = !0; i > n; n++) {
                  u.tweens[n].run(1);
                }return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this;
              } }),
                c = u.props;for (H(c, u.opts.specialEasing); a > o; o++) {
              if (i = $.prefilters[o].call(u, e, c, u.opts)) return ae.isFunction(i.stop) && (ae._queueHooks(u.elem, u.opts.queue).stop = ae.proxy(i.stop, i)), i;
            }return ae.map(c, _, u), ae.isFunction(u.opts.start) && u.opts.start.call(e, u), ae.fx.timer(ae.extend(l, { elem: e, anim: u, queue: u.opts.queue })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
          }function R(e) {
            return e.getAttribute && e.getAttribute("class") || "";
          }function z(e) {
            return function (t, n) {
              "string" != typeof t && (n = t, t = "*");var i,
                  r = 0,
                  o = t.toLowerCase().match(Ce) || [];if (ae.isFunction(n)) for (; i = o[r++];) {
                "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
              }
            };
          }function W(e, t, n, i) {
            function r(s) {
              var l;return o[s] = !0, ae.each(e[s] || [], function (e, s) {
                var u = s(t, n, i);return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1);
              }), l;
            }var o = {},
                a = e === At;return r(t.dataTypes[0]) || !o["*"] && r("*");
          }function V(e, t) {
            var n,
                i,
                r = ae.ajaxSettings.flatOptions || {};for (n in t) {
              void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
            }return i && ae.extend(!0, e, i), e;
          }function X(e, t, n) {
            for (var i, r, o, a, s = e.contents, l = e.dataTypes; "*" === l[0];) {
              l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            }if (i) for (r in s) {
              if (s[r] && s[r].test(i)) {
                l.unshift(r);break;
              }
            }if (l[0] in n) o = l[0];else {
              for (r in n) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                  o = r;break;
                }a || (a = r);
              }o = o || a;
            }return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0;
          }function B(e, t, n, i) {
            var r,
                o,
                a,
                s,
                l,
                u = {},
                c = e.dataTypes.slice();if (c[1]) for (a in e.converters) {
              u[a.toLowerCase()] = e.converters[a];
            }for (o = c.shift(); o;) {
              if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l;else if ("*" !== l && l !== o) {
                if (a = u[l + " " + o] || u["* " + o], !a) for (r in u) {
                  if (s = r.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                    a === !0 ? a = u[r] : u[r] !== !0 && (o = s[0], c.unshift(s[1]));break;
                  }
                }if (a !== !0) if (a && e["throws"]) t = a(t);else try {
                  t = a(t);
                } catch (d) {
                  return { state: "parsererror", error: a ? d : "No conversion from " + l + " to " + o };
                }
              }
            }return { state: "success", data: t };
          }function Q(e, t, n, i) {
            var r;if (ae.isArray(t)) ae.each(t, function (t, r) {
              n || Dt.test(e) ? i(e, r) : Q(e + "[" + ("object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && null != r ? t : "") + "]", r, n, i);
            });else if (n || "object" !== ae.type(t)) i(e, t);else for (r in t) {
              Q(e + "[" + r + "]", t[r], n, i);
            }
          }function Y(e) {
            return ae.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
          }var U = [],
              G = e.document,
              Z = U.slice,
              J = U.concat,
              K = U.push,
              ee = U.indexOf,
              te = {},
              ne = te.toString,
              ie = te.hasOwnProperty,
              re = {},
              oe = "2.2.3",
              ae = function ae(e, t) {
            return new ae.fn.init(e, t);
          },
              se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
              le = /^-ms-/,
              ue = /-([\da-z])/gi,
              ce = function ce(e, t) {
            return t.toUpperCase();
          };ae.fn = ae.prototype = { jquery: oe, constructor: ae, selector: "", length: 0, toArray: function toArray() {
              return Z.call(this);
            }, get: function get(e) {
              return null != e ? 0 > e ? this[e + this.length] : this[e] : Z.call(this);
            }, pushStack: function pushStack(e) {
              var t = ae.merge(this.constructor(), e);return t.prevObject = this, t.context = this.context, t;
            }, each: function each(e) {
              return ae.each(this, e);
            }, map: function map(e) {
              return this.pushStack(ae.map(this, function (t, n) {
                return e.call(t, n, t);
              }));
            }, slice: function slice() {
              return this.pushStack(Z.apply(this, arguments));
            }, first: function first() {
              return this.eq(0);
            }, last: function last() {
              return this.eq(-1);
            }, eq: function eq(e) {
              var t = this.length,
                  n = +e + (0 > e ? t : 0);return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
            }, end: function end() {
              return this.prevObject || this.constructor();
            }, push: K, sort: U.sort, splice: U.splice }, ae.extend = ae.fn.extend = function () {
            var e,
                t,
                n,
                i,
                r,
                o,
                a = arguments[0] || {},
                s = 1,
                l = arguments.length,
                u = !1;for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || ae.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++) {
              if (null != (e = arguments[s])) for (t in e) {
                n = a[t], i = e[t], a !== i && (u && i && (ae.isPlainObject(i) || (r = ae.isArray(i))) ? (r ? (r = !1, o = n && ae.isArray(n) ? n : []) : o = n && ae.isPlainObject(n) ? n : {}, a[t] = ae.extend(u, o, i)) : void 0 !== i && (a[t] = i));
              }
            }return a;
          }, ae.extend({ expando: "jQuery" + (oe + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(e) {
              throw new Error(e);
            }, noop: function noop() {}, isFunction: function isFunction(e) {
              return "function" === ae.type(e);
            }, isArray: Array.isArray, isWindow: function isWindow(e) {
              return null != e && e === e.window;
            }, isNumeric: function isNumeric(e) {
              var t = e && e.toString();return !ae.isArray(e) && t - parseFloat(t) + 1 >= 0;
            }, isPlainObject: function isPlainObject(e) {
              var t;if ("object" !== ae.type(e) || e.nodeType || ae.isWindow(e)) return !1;if (e.constructor && !ie.call(e, "constructor") && !ie.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;for (t in e) {}return void 0 === t || ie.call(e, t);
            }, isEmptyObject: function isEmptyObject(e) {
              var t;for (t in e) {
                return !1;
              }return !0;
            }, type: function type(e) {
              return null == e ? e + "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e ? te[ne.call(e)] || "object" : typeof e === "undefined" ? "undefined" : _typeof(e);
            }, globalEval: function globalEval(e) {
              var t,
                  n = eval;e = ae.trim(e), e && (1 === e.indexOf("use strict") ? (t = G.createElement("script"), t.text = e, G.head.appendChild(t).parentNode.removeChild(t)) : n(e));
            }, camelCase: function camelCase(e) {
              return e.replace(le, "ms-").replace(ue, ce);
            }, nodeName: function nodeName(e, t) {
              return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
            }, each: function each(e, t) {
              var i,
                  r = 0;if (n(e)) for (i = e.length; i > r && t.call(e[r], r, e[r]) !== !1; r++) {} else for (r in e) {
                if (t.call(e[r], r, e[r]) === !1) break;
              }return e;
            }, trim: function trim(e) {
              return null == e ? "" : (e + "").replace(se, "");
            }, makeArray: function makeArray(e, t) {
              var i = t || [];return null != e && (n(Object(e)) ? ae.merge(i, "string" == typeof e ? [e] : e) : K.call(i, e)), i;
            }, inArray: function inArray(e, t, n) {
              return null == t ? -1 : ee.call(t, e, n);
            }, merge: function merge(e, t) {
              for (var n = +t.length, i = 0, r = e.length; n > i; i++) {
                e[r++] = t[i];
              }return e.length = r, e;
            }, grep: function grep(e, t, n) {
              for (var i, r = [], o = 0, a = e.length, s = !n; a > o; o++) {
                i = !t(e[o], o), i !== s && r.push(e[o]);
              }return r;
            }, map: function map(e, t, i) {
              var r,
                  o,
                  a = 0,
                  s = [];if (n(e)) for (r = e.length; r > a; a++) {
                o = t(e[a], a, i), null != o && s.push(o);
              } else for (a in e) {
                o = t(e[a], a, i), null != o && s.push(o);
              }return J.apply([], s);
            }, guid: 1, proxy: function proxy(e, t) {
              var n, i, r;return "string" == typeof t && (n = e[t], t = e, e = n), ae.isFunction(e) ? (i = Z.call(arguments, 2), r = function r() {
                return e.apply(t || this, i.concat(Z.call(arguments)));
              }, r.guid = e.guid = e.guid || ae.guid++, r) : void 0;
            }, now: Date.now, support: re }), "function" == typeof Symbol && (ae.fn[Symbol.iterator] = U[Symbol.iterator]), ae.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            te["[object " + t + "]"] = t.toLowerCase();
          });var de = function (e) {
            function t(e, t, n, i) {
              var r,
                  o,
                  a,
                  s,
                  l,
                  u,
                  d,
                  p,
                  h = t && t.ownerDocument,
                  v = t ? t.nodeType : 9;if (n = n || [], "string" != typeof e || !e || 1 !== v && 9 !== v && 11 !== v) return n;if (!i && ((t ? t.ownerDocument || t : $) !== N && D(t), t = t || N, M)) {
                if (11 !== v && (u = me.exec(e))) if (r = u[1]) {
                  if (9 === v) {
                    if (!(a = t.getElementById(r))) return n;if (a.id === r) return n.push(a), n;
                  } else if (h && (a = h.getElementById(r)) && F(t, a) && a.id === r) return n.push(a), n;
                } else {
                  if (u[2]) return J.apply(n, t.getElementsByTagName(e)), n;if ((r = u[3]) && w.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(r)), n;
                }if (w.qsa && !X[e + " "] && (!L || !L.test(e))) {
                  if (1 !== v) h = t, p = e;else if ("object" !== t.nodeName.toLowerCase()) {
                    for ((s = t.getAttribute("id")) ? s = s.replace(be, "\\$&") : t.setAttribute("id", s = H), d = S(e), o = d.length, l = fe.test(s) ? "#" + s : "[id='" + s + "']"; o--;) {
                      d[o] = l + " " + f(d[o]);
                    }p = d.join(","), h = ye.test(e) && c(t.parentNode) || t;
                  }if (p) try {
                    return J.apply(n, h.querySelectorAll(p)), n;
                  } catch (g) {} finally {
                    s === H && t.removeAttribute("id");
                  }
                }
              }return A(e.replace(se, "$1"), t, n, i);
            }function n() {
              function e(n, i) {
                return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i;
              }var t = [];return e;
            }function i(e) {
              return e[H] = !0, e;
            }function r(e) {
              var t = N.createElement("div");try {
                return !!e(t);
              } catch (n) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
              }
            }function o(e, t) {
              for (var n = e.split("|"), i = n.length; i--;) {
                C.attrHandle[n[i]] = t;
              }
            }function a(e, t) {
              var n = t && e,
                  i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Q) - (~e.sourceIndex || Q);if (i) return i;if (n) for (; n = n.nextSibling;) {
                if (n === t) return -1;
              }return e ? 1 : -1;
            }function s(e) {
              return function (t) {
                var n = t.nodeName.toLowerCase();return "input" === n && t.type === e;
              };
            }function l(e) {
              return function (t) {
                var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
              };
            }function u(e) {
              return i(function (t) {
                return t = +t, i(function (n, i) {
                  for (var r, o = e([], n.length, t), a = o.length; a--;) {
                    n[r = o[a]] && (n[r] = !(i[r] = n[r]));
                  }
                });
              });
            }function c(e) {
              return e && "undefined" != typeof e.getElementsByTagName && e;
            }function d() {}function f(e) {
              for (var t = 0, n = e.length, i = ""; n > t; t++) {
                i += e[t].value;
              }return i;
            }function p(e, t, n) {
              var i = t.dir,
                  r = n && "parentNode" === i,
                  o = z++;return t.first ? function (t, n, o) {
                for (; t = t[i];) {
                  if (1 === t.nodeType || r) return e(t, n, o);
                }
              } : function (t, n, a) {
                var s,
                    l,
                    u,
                    c = [R, o];if (a) {
                  for (; t = t[i];) {
                    if ((1 === t.nodeType || r) && e(t, n, a)) return !0;
                  }
                } else for (; t = t[i];) {
                  if (1 === t.nodeType || r) {
                    if (u = t[H] || (t[H] = {}), l = u[t.uniqueID] || (u[t.uniqueID] = {}), (s = l[i]) && s[0] === R && s[1] === o) return c[2] = s[2];if (l[i] = c, c[2] = e(t, n, a)) return !0;
                  }
                }
              };
            }function h(e) {
              return e.length > 1 ? function (t, n, i) {
                for (var r = e.length; r--;) {
                  if (!e[r](t, n, i)) return !1;
                }return !0;
              } : e[0];
            }function v(e, n, i) {
              for (var r = 0, o = n.length; o > r; r++) {
                t(e, n[r], i);
              }return i;
            }function g(e, t, n, i, r) {
              for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++) {
                (o = e[s]) && (n && !n(o, i, r) || (a.push(o), u && t.push(s)));
              }return a;
            }function m(e, t, n, r, o, a) {
              return r && !r[H] && (r = m(r)), o && !o[H] && (o = m(o, a)), i(function (i, a, s, l) {
                var u,
                    c,
                    d,
                    f = [],
                    p = [],
                    h = a.length,
                    m = i || v(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !i && t ? m : g(m, f, e, s, l),
                    b = n ? o || (i ? e : h || r) ? [] : a : y;if (n && n(y, b, s, l), r) for (u = g(b, p), r(u, [], s, l), c = u.length; c--;) {
                  (d = u[c]) && (b[p[c]] = !(y[p[c]] = d));
                }if (i) {
                  if (o || e) {
                    if (o) {
                      for (u = [], c = b.length; c--;) {
                        (d = b[c]) && u.push(y[c] = d);
                      }o(null, b = [], u, l);
                    }for (c = b.length; c--;) {
                      (d = b[c]) && (u = o ? ee(i, d) : f[c]) > -1 && (i[u] = !(a[u] = d));
                    }
                  }
                } else b = g(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, l) : J.apply(a, b);
              });
            }function y(e) {
              for (var t, n, i, r = e.length, o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, l = p(function (e) {
                return e === t;
              }, a, !0), u = p(function (e) {
                return ee(t, e) > -1;
              }, a, !0), c = [function (e, n, i) {
                var r = !o && (i || n !== O) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));return t = null, r;
              }]; r > s; s++) {
                if (n = C.relative[e[s].type]) c = [p(h(c), n)];else {
                  if (n = C.filter[e[s].type].apply(null, e[s].matches), n[H]) {
                    for (i = ++s; r > i && !C.relative[e[i].type]; i++) {}return m(s > 1 && h(c), s > 1 && f(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(se, "$1"), n, i > s && y(e.slice(s, i)), r > i && y(e = e.slice(i)), r > i && f(e));
                  }c.push(n);
                }
              }return h(c);
            }function b(e, n) {
              var r = n.length > 0,
                  o = e.length > 0,
                  a = function a(i, _a, s, l, u) {
                var c,
                    d,
                    f,
                    p = 0,
                    h = "0",
                    v = i && [],
                    m = [],
                    y = O,
                    b = i || o && C.find.TAG("*", u),
                    x = R += null == y ? 1 : Math.random() || .1,
                    w = b.length;for (u && (O = _a === N || _a || u); h !== w && null != (c = b[h]); h++) {
                  if (o && c) {
                    for (d = 0, _a || c.ownerDocument === N || (D(c), s = !M); f = e[d++];) {
                      if (f(c, _a || N, s)) {
                        l.push(c);break;
                      }
                    }u && (R = x);
                  }r && ((c = !f && c) && p--, i && v.push(c));
                }if (p += h, r && h !== p) {
                  for (d = 0; f = n[d++];) {
                    f(v, m, _a, s);
                  }if (i) {
                    if (p > 0) for (; h--;) {
                      v[h] || m[h] || (m[h] = G.call(l));
                    }m = g(m);
                  }J.apply(l, m), u && !i && m.length > 0 && p + n.length > 1 && t.uniqueSort(l);
                }return u && (R = x, O = y), v;
              };return r ? i(a) : a;
            }var x,
                w,
                C,
                T,
                k,
                S,
                E,
                A,
                O,
                P,
                q,
                D,
                N,
                j,
                M,
                L,
                I,
                _,
                F,
                H = "sizzle" + 1 * new Date(),
                $ = e.document,
                R = 0,
                z = 0,
                W = n(),
                V = n(),
                X = n(),
                B = function B(e, t) {
              return e === t && (q = !0), 0;
            },
                Q = 1 << 31,
                Y = {}.hasOwnProperty,
                U = [],
                G = U.pop,
                Z = U.push,
                J = U.push,
                K = U.slice,
                ee = function ee(e, t) {
              for (var n = 0, i = e.length; i > n; n++) {
                if (e[n] === t) return n;
              }return -1;
            },
                te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ne = "[\\x20\\t\\r\\n\\f]",
                ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
                oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
                ae = new RegExp(ne + "+", "g"),
                se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                le = new RegExp("^" + ne + "*," + ne + "*"),
                ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                de = new RegExp(oe),
                fe = new RegExp("^" + ie + "$"),
                pe = { ID: new RegExp("^#(" + ie + ")"), CLASS: new RegExp("^\\.(" + ie + ")"), TAG: new RegExp("^(" + ie + "|[*])"), ATTR: new RegExp("^" + re), PSEUDO: new RegExp("^" + oe), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"), bool: new RegExp("^(?:" + te + ")$", "i"), needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i") },
                he = /^(?:input|select|textarea|button)$/i,
                ve = /^h\d$/i,
                ge = /^[^{]+\{\s*\[native \w/,
                me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ye = /[+~]/,
                be = /'|\\/g,
                xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                we = function we(e, t, n) {
              var i = "0x" + t - 65536;return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
            },
                Ce = function Ce() {
              D();
            };try {
              J.apply(U = K.call($.childNodes), $.childNodes), U[$.childNodes.length].nodeType;
            } catch (Te) {
              J = { apply: U.length ? function (e, t) {
                  Z.apply(e, K.call(t));
                } : function (e, t) {
                  for (var n = e.length, i = 0; e[n++] = t[i++];) {}e.length = n - 1;
                } };
            }w = t.support = {}, k = t.isXML = function (e) {
              var t = e && (e.ownerDocument || e).documentElement;return t ? "HTML" !== t.nodeName : !1;
            }, D = t.setDocument = function (e) {
              var t,
                  n,
                  i = e ? e.ownerDocument || e : $;return i !== N && 9 === i.nodeType && i.documentElement ? (N = i, j = N.documentElement, M = !k(N), (n = N.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), w.attributes = r(function (e) {
                return e.className = "i", !e.getAttribute("className");
              }), w.getElementsByTagName = r(function (e) {
                return e.appendChild(N.createComment("")), !e.getElementsByTagName("*").length;
              }), w.getElementsByClassName = ge.test(N.getElementsByClassName), w.getById = r(function (e) {
                return j.appendChild(e).id = H, !N.getElementsByName || !N.getElementsByName(H).length;
              }), w.getById ? (C.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && M) {
                  var n = t.getElementById(e);return n ? [n] : [];
                }
              }, C.filter.ID = function (e) {
                var t = e.replace(xe, we);return function (e) {
                  return e.getAttribute("id") === t;
                };
              }) : (delete C.find.ID, C.filter.ID = function (e) {
                var t = e.replace(xe, we);return function (e) {
                  var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");return n && n.value === t;
                };
              }), C.find.TAG = w.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0;
              } : function (e, t) {
                var n,
                    i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);if ("*" === e) {
                  for (; n = o[r++];) {
                    1 === n.nodeType && i.push(n);
                  }return i;
                }return o;
              }, C.find.CLASS = w.getElementsByClassName && function (e, t) {
                return "undefined" != typeof t.getElementsByClassName && M ? t.getElementsByClassName(e) : void 0;
              }, I = [], L = [], (w.qsa = ge.test(N.querySelectorAll)) && (r(function (e) {
                j.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || L.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + H + "-]").length || L.push("~="), e.querySelectorAll(":checked").length || L.push(":checked"), e.querySelectorAll("a#" + H + "+*").length || L.push(".#.+[+~]");
              }), r(function (e) {
                var t = N.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && L.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), L.push(",.*:");
              })), (w.matchesSelector = ge.test(_ = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && r(function (e) {
                w.disconnectedMatch = _.call(e, "div"), _.call(e, "[s!='']:x"), I.push("!=", oe);
              }), L = L.length && new RegExp(L.join("|")), I = I.length && new RegExp(I.join("|")), t = ge.test(j.compareDocumentPosition), F = t || ge.test(j.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
              } : function (e, t) {
                if (t) for (; t = t.parentNode;) {
                  if (t === e) return !0;
                }return !1;
              }, B = t ? function (e, t) {
                if (e === t) return q = !0, 0;var n = !e.compareDocumentPosition - !t.compareDocumentPosition;return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === N || e.ownerDocument === $ && F($, e) ? -1 : t === N || t.ownerDocument === $ && F($, t) ? 1 : P ? ee(P, e) - ee(P, t) : 0 : 4 & n ? -1 : 1);
              } : function (e, t) {
                if (e === t) return q = !0, 0;var n,
                    i = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    l = [t];if (!r || !o) return e === N ? -1 : t === N ? 1 : r ? -1 : o ? 1 : P ? ee(P, e) - ee(P, t) : 0;if (r === o) return a(e, t);for (n = e; n = n.parentNode;) {
                  s.unshift(n);
                }for (n = t; n = n.parentNode;) {
                  l.unshift(n);
                }for (; s[i] === l[i];) {
                  i++;
                }return i ? a(s[i], l[i]) : s[i] === $ ? -1 : l[i] === $ ? 1 : 0;
              }, N) : N;
            }, t.matches = function (e, n) {
              return t(e, null, null, n);
            }, t.matchesSelector = function (e, n) {
              if ((e.ownerDocument || e) !== N && D(e), n = n.replace(ce, "='$1']"), w.matchesSelector && M && !X[n + " "] && (!I || !I.test(n)) && (!L || !L.test(n))) try {
                var i = _.call(e, n);if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i;
              } catch (r) {}return t(n, N, null, [e]).length > 0;
            }, t.contains = function (e, t) {
              return (e.ownerDocument || e) !== N && D(e), F(e, t);
            }, t.attr = function (e, t) {
              (e.ownerDocument || e) !== N && D(e);var n = C.attrHandle[t.toLowerCase()],
                  i = n && Y.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !M) : void 0;return void 0 !== i ? i : w.attributes || !M ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
            }, t.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }, t.uniqueSort = function (e) {
              var t,
                  n = [],
                  i = 0,
                  r = 0;if (q = !w.detectDuplicates, P = !w.sortStable && e.slice(0), e.sort(B), q) {
                for (; t = e[r++];) {
                  t === e[r] && (i = n.push(r));
                }for (; i--;) {
                  e.splice(n[i], 1);
                }
              }return P = null, e;
            }, T = t.getText = function (e) {
              var t,
                  n = "",
                  i = 0,
                  r = e.nodeType;if (r) {
                if (1 === r || 9 === r || 11 === r) {
                  if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
                    n += T(e);
                  }
                } else if (3 === r || 4 === r) return e.nodeValue;
              } else for (; t = e[i++];) {
                n += T(t);
              }return n;
            }, C = t.selectors = { cacheLength: 50, createPseudo: i, match: pe, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
                  return e[1] = e[1].replace(xe, we), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                }, CHILD: function CHILD(e) {
                  return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e;
                }, PSEUDO: function PSEUDO(e) {
                  var t,
                      n = !e[6] && e[2];return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
                } }, filter: { TAG: function TAG(e) {
                  var t = e.replace(xe, we).toLowerCase();return "*" === e ? function () {
                    return !0;
                  } : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
                }, CLASS: function CLASS(e) {
                  var t = W[e + " "];return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function (e) {
                    return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
                  });
                }, ATTR: function ATTR(e, n, i) {
                  return function (r) {
                    var o = t.attr(r, e);return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0;
                  };
                }, CHILD: function CHILD(e, t, n, i, r) {
                  var o = "nth" !== e.slice(0, 3),
                      a = "last" !== e.slice(-4),
                      s = "of-type" === t;return 1 === i && 0 === r ? function (e) {
                    return !!e.parentNode;
                  } : function (t, n, l) {
                    var u,
                        c,
                        d,
                        f,
                        p,
                        h,
                        v = o !== a ? "nextSibling" : "previousSibling",
                        g = t.parentNode,
                        m = s && t.nodeName.toLowerCase(),
                        y = !l && !s,
                        b = !1;if (g) {
                      if (o) {
                        for (; v;) {
                          for (f = t; f = f[v];) {
                            if (s ? f.nodeName.toLowerCase() === m : 1 === f.nodeType) return !1;
                          }h = v = "only" === e && !h && "nextSibling";
                        }return !0;
                      }if (h = [a ? g.firstChild : g.lastChild], a && y) {
                        for (f = g, d = f[H] || (f[H] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), u = c[e] || [], p = u[0] === R && u[1], b = p && u[2], f = p && g.childNodes[p]; f = ++p && f && f[v] || (b = p = 0) || h.pop();) {
                          if (1 === f.nodeType && ++b && f === t) {
                            c[e] = [R, p, b];break;
                          }
                        }
                      } else if (y && (f = t, d = f[H] || (f[H] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), u = c[e] || [], p = u[0] === R && u[1], b = p), b === !1) for (; (f = ++p && f && f[v] || (b = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== m : 1 !== f.nodeType) || ! ++b || (y && (d = f[H] || (f[H] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), c[e] = [R, b]), f !== t));) {}return b -= r, b === i || b % i === 0 && b / i >= 0;
                    }
                  };
                }, PSEUDO: function PSEUDO(e, n) {
                  var r,
                      o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);return o[H] ? o(n) : o.length > 1 ? (r = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                    for (var i, r = o(e, n), a = r.length; a--;) {
                      i = ee(e, r[a]), e[i] = !(t[i] = r[a]);
                    }
                  }) : function (e) {
                    return o(e, 0, r);
                  }) : o;
                } }, pseudos: { not: i(function (e) {
                  var t = [],
                      n = [],
                      r = E(e.replace(se, "$1"));return r[H] ? i(function (e, t, n, i) {
                    for (var o, a = r(e, null, i, []), s = e.length; s--;) {
                      (o = a[s]) && (e[s] = !(t[s] = o));
                    }
                  }) : function (e, i, o) {
                    return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
                  };
                }), has: i(function (e) {
                  return function (n) {
                    return t(e, n).length > 0;
                  };
                }), contains: i(function (e) {
                  return e = e.replace(xe, we), function (t) {
                    return (t.textContent || t.innerText || T(t)).indexOf(e) > -1;
                  };
                }), lang: i(function (e) {
                  return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, we).toLowerCase(), function (t) {
                    var n;do {
                      if (n = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                    } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
                  };
                }), target: function target(t) {
                  var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
                }, root: function root(e) {
                  return e === j;
                }, focus: function focus(e) {
                  return e === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                }, enabled: function enabled(e) {
                  return e.disabled === !1;
                }, disabled: function disabled(e) {
                  return e.disabled === !0;
                }, checked: function checked(e) {
                  var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
                }, selected: function selected(e) {
                  return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
                }, empty: function empty(e) {
                  for (e = e.firstChild; e; e = e.nextSibling) {
                    if (e.nodeType < 6) return !1;
                  }return !0;
                }, parent: function parent(e) {
                  return !C.pseudos.empty(e);
                }, header: function header(e) {
                  return ve.test(e.nodeName);
                }, input: function input(e) {
                  return he.test(e.nodeName);
                }, button: function button(e) {
                  var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
                }, text: function text(e) {
                  var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                }, first: u(function () {
                  return [0];
                }), last: u(function (e, t) {
                  return [t - 1];
                }), eq: u(function (e, t, n) {
                  return [0 > n ? n + t : n];
                }), even: u(function (e, t) {
                  for (var n = 0; t > n; n += 2) {
                    e.push(n);
                  }return e;
                }), odd: u(function (e, t) {
                  for (var n = 1; t > n; n += 2) {
                    e.push(n);
                  }return e;
                }), lt: u(function (e, t, n) {
                  for (var i = 0 > n ? n + t : n; --i >= 0;) {
                    e.push(i);
                  }return e;
                }), gt: u(function (e, t, n) {
                  for (var i = 0 > n ? n + t : n; ++i < t;) {
                    e.push(i);
                  }return e;
                }) } }, C.pseudos.nth = C.pseudos.eq;for (x in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
              C.pseudos[x] = s(x);
            }for (x in { submit: !0, reset: !0 }) {
              C.pseudos[x] = l(x);
            }return d.prototype = C.filters = C.pseudos, C.setFilters = new d(), S = t.tokenize = function (e, n) {
              var i,
                  r,
                  o,
                  a,
                  s,
                  l,
                  u,
                  c = V[e + " "];if (c) return n ? 0 : c.slice(0);for (s = e, l = [], u = C.preFilter; s;) {
                i && !(r = le.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = !1, (r = ue.exec(s)) && (i = r.shift(), o.push({ value: i, type: r[0].replace(se, " ") }), s = s.slice(i.length));for (a in C.filter) {
                  !(r = pe[a].exec(s)) || u[a] && !(r = u[a](r)) || (i = r.shift(), o.push({ value: i, type: a, matches: r }), s = s.slice(i.length));
                }if (!i) break;
              }return n ? s.length : s ? t.error(e) : V(e, l).slice(0);
            }, E = t.compile = function (e, t) {
              var n,
                  i = [],
                  r = [],
                  o = X[e + " "];if (!o) {
                for (t || (t = S(e)), n = t.length; n--;) {
                  o = y(t[n]), o[H] ? i.push(o) : r.push(o);
                }o = X(e, b(r, i)), o.selector = e;
              }return o;
            }, A = t.select = function (e, t, n, i) {
              var r,
                  o,
                  a,
                  s,
                  l,
                  u = "function" == typeof e && e,
                  d = !i && S(e = u.selector || e);if (n = n || [], 1 === d.length) {
                if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && M && C.relative[o[1].type]) {
                  if (t = (C.find.ID(a.matches[0].replace(xe, we), t) || [])[0], !t) return n;u && (t = t.parentNode), e = e.slice(o.shift().value.length);
                }for (r = pe.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !C.relative[s = a.type]);) {
                  if ((l = C.find[s]) && (i = l(a.matches[0].replace(xe, we), ye.test(o[0].type) && c(t.parentNode) || t))) {
                    if (o.splice(r, 1), e = i.length && f(o), !e) return J.apply(n, i), n;break;
                  }
                }
              }return (u || E(e, d))(i, t, !M, n, !t || ye.test(e) && c(t.parentNode) || t), n;
            }, w.sortStable = H.split("").sort(B).join("") === H, w.detectDuplicates = !!q, D(), w.sortDetached = r(function (e) {
              return 1 & e.compareDocumentPosition(N.createElement("div"));
            }), r(function (e) {
              return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
            }) || o("type|href|height|width", function (e, t, n) {
              return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
            }), w.attributes && r(function (e) {
              return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
            }) || o("value", function (e, t, n) {
              return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue;
            }), r(function (e) {
              return null == e.getAttribute("disabled");
            }) || o(te, function (e, t, n) {
              var i;return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
            }), t;
          }(e);ae.find = de, ae.expr = de.selectors, ae.expr[":"] = ae.expr.pseudos, ae.uniqueSort = ae.unique = de.uniqueSort, ae.text = de.getText, ae.isXMLDoc = de.isXML, ae.contains = de.contains;var fe = function fe(e, t, n) {
            for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
              if (1 === e.nodeType) {
                if (r && ae(e).is(n)) break;i.push(e);
              }
            }return i;
          },
              pe = function pe(e, t) {
            for (var n = []; e; e = e.nextSibling) {
              1 === e.nodeType && e !== t && n.push(e);
            }return n;
          },
              he = ae.expr.match.needsContext,
              ve = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
              ge = /^.[^:#\[\.,]*$/;ae.filter = function (e, t, n) {
            var i = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ae.find.matchesSelector(i, e) ? [i] : [] : ae.find.matches(e, ae.grep(t, function (e) {
              return 1 === e.nodeType;
            }));
          }, ae.fn.extend({ find: function find(e) {
              var t,
                  n = this.length,
                  i = [],
                  r = this;if ("string" != typeof e) return this.pushStack(ae(e).filter(function () {
                for (t = 0; n > t; t++) {
                  if (ae.contains(r[t], this)) return !0;
                }
              }));for (t = 0; n > t; t++) {
                ae.find(e, r[t], i);
              }return i = this.pushStack(n > 1 ? ae.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i;
            }, filter: function filter(e) {
              return this.pushStack(r(this, e || [], !1));
            }, not: function not(e) {
              return this.pushStack(r(this, e || [], !0));
            }, is: function is(e) {
              return !!r(this, "string" == typeof e && he.test(e) ? ae(e) : e || [], !1).length;
            } });var me,
              ye = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
              be = ae.fn.init = function (e, t, n) {
            var i, r;if (!e) return this;if (n = n || me, "string" == typeof e) {
              if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ye.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);if (i[1]) {
                if (t = t instanceof ae ? t[0] : t, ae.merge(this, ae.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : G, !0)), ve.test(i[1]) && ae.isPlainObject(t)) for (i in t) {
                  ae.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                }return this;
              }return r = G.getElementById(i[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = G, this.selector = e, this;
            }return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ae.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(ae) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ae.makeArray(e, this));
          };be.prototype = ae.fn, me = ae(G);var xe = /^(?:parents|prev(?:Until|All))/,
              we = { children: !0, contents: !0, next: !0, prev: !0 };ae.fn.extend({ has: function has(e) {
              var t = ae(e, this),
                  n = t.length;return this.filter(function () {
                for (var e = 0; n > e; e++) {
                  if (ae.contains(this, t[e])) return !0;
                }
              });
            }, closest: function closest(e, t) {
              for (var n, i = 0, r = this.length, o = [], a = he.test(e) || "string" != typeof e ? ae(e, t || this.context) : 0; r > i; i++) {
                for (n = this[i]; n && n !== t; n = n.parentNode) {
                  if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ae.find.matchesSelector(n, e))) {
                    o.push(n);break;
                  }
                }
              }return this.pushStack(o.length > 1 ? ae.uniqueSort(o) : o);
            }, index: function index(e) {
              return e ? "string" == typeof e ? ee.call(ae(e), this[0]) : ee.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }, add: function add(e, t) {
              return this.pushStack(ae.uniqueSort(ae.merge(this.get(), ae(e, t))));
            }, addBack: function addBack(e) {
              return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
            } }), ae.each({ parent: function parent(e) {
              var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
            }, parents: function parents(e) {
              return fe(e, "parentNode");
            }, parentsUntil: function parentsUntil(e, t, n) {
              return fe(e, "parentNode", n);
            }, next: function next(e) {
              return o(e, "nextSibling");
            }, prev: function prev(e) {
              return o(e, "previousSibling");
            }, nextAll: function nextAll(e) {
              return fe(e, "nextSibling");
            }, prevAll: function prevAll(e) {
              return fe(e, "previousSibling");
            }, nextUntil: function nextUntil(e, t, n) {
              return fe(e, "nextSibling", n);
            }, prevUntil: function prevUntil(e, t, n) {
              return fe(e, "previousSibling", n);
            }, siblings: function siblings(e) {
              return pe((e.parentNode || {}).firstChild, e);
            }, children: function children(e) {
              return pe(e.firstChild);
            }, contents: function contents(e) {
              return e.contentDocument || ae.merge([], e.childNodes);
            } }, function (e, t) {
            ae.fn[e] = function (n, i) {
              var r = ae.map(this, t, n);return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = ae.filter(i, r)), this.length > 1 && (we[e] || ae.uniqueSort(r), xe.test(e) && r.reverse()), this.pushStack(r);
            };
          });var Ce = /\S+/g;ae.Callbacks = function (e) {
            e = "string" == typeof e ? a(e) : ae.extend({}, e);var t,
                n,
                i,
                r,
                o = [],
                s = [],
                l = -1,
                u = function u() {
              for (r = e.once, i = t = !0; s.length; l = -1) {
                for (n = s.shift(); ++l < o.length;) {
                  o[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = o.length, n = !1);
                }
              }e.memory || (n = !1), t = !1, r && (o = n ? [] : "");
            },
                c = { add: function add() {
                return o && (n && !t && (l = o.length - 1, s.push(n)), function i(t) {
                  ae.each(t, function (t, n) {
                    ae.isFunction(n) ? e.unique && c.has(n) || o.push(n) : n && n.length && "string" !== ae.type(n) && i(n);
                  });
                }(arguments), n && !t && u()), this;
              }, remove: function remove() {
                return ae.each(arguments, function (e, t) {
                  for (var n; (n = ae.inArray(t, o, n)) > -1;) {
                    o.splice(n, 1), l >= n && l--;
                  }
                }), this;
              }, has: function has(e) {
                return e ? ae.inArray(e, o) > -1 : o.length > 0;
              }, empty: function empty() {
                return o && (o = []), this;
              }, disable: function disable() {
                return r = s = [], o = n = "", this;
              }, disabled: function disabled() {
                return !o;
              }, lock: function lock() {
                return r = s = [], n || (o = n = ""), this;
              }, locked: function locked() {
                return !!r;
              }, fireWith: function fireWith(e, n) {
                return r || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || u()), this;
              }, fire: function fire() {
                return c.fireWith(this, arguments), this;
              }, fired: function fired() {
                return !!i;
              } };return c;
          }, ae.extend({ Deferred: function Deferred(e) {
              var t = [["resolve", "done", ae.Callbacks("once memory"), "resolved"], ["reject", "fail", ae.Callbacks("once memory"), "rejected"], ["notify", "progress", ae.Callbacks("memory")]],
                  n = "pending",
                  i = { state: function state() {
                  return n;
                }, always: function always() {
                  return r.done(arguments).fail(arguments), this;
                }, then: function then() {
                  var e = arguments;return ae.Deferred(function (n) {
                    ae.each(t, function (t, o) {
                      var a = ae.isFunction(e[t]) && e[t];r[o[1]](function () {
                        var e = a && a.apply(this, arguments);e && ae.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments);
                      });
                    }), e = null;
                  }).promise();
                }, promise: function promise(e) {
                  return null != e ? ae.extend(e, i) : i;
                } },
                  r = {};return i.pipe = i.then, ae.each(t, function (e, o) {
                var a = o[2],
                    s = o[3];i[o[1]] = a.add, s && a.add(function () {
                  n = s;
                }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function () {
                  return r[o[0] + "With"](this === r ? i : this, arguments), this;
                }, r[o[0] + "With"] = a.fireWith;
              }), i.promise(r), e && e.call(r, r), r;
            }, when: function when(e) {
              var t,
                  n,
                  i,
                  r = 0,
                  o = Z.call(arguments),
                  a = o.length,
                  s = 1 !== a || e && ae.isFunction(e.promise) ? a : 0,
                  l = 1 === s ? e : ae.Deferred(),
                  u = function u(e, n, i) {
                return function (r) {
                  n[e] = this, i[e] = arguments.length > 1 ? Z.call(arguments) : r, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i);
                };
              };if (a > 1) for (t = new Array(a), n = new Array(a), i = new Array(a); a > r; r++) {
                o[r] && ae.isFunction(o[r].promise) ? o[r].promise().progress(u(r, n, t)).done(u(r, i, o)).fail(l.reject) : --s;
              }return s || l.resolveWith(i, o), l.promise();
            } });var Te;ae.fn.ready = function (e) {
            return ae.ready.promise().done(e), this;
          }, ae.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(e) {
              e ? ae.readyWait++ : ae.ready(!0);
            }, ready: function ready(e) {
              (e === !0 ? --ae.readyWait : ae.isReady) || (ae.isReady = !0, e !== !0 && --ae.readyWait > 0 || (Te.resolveWith(G, [ae]), ae.fn.triggerHandler && (ae(G).triggerHandler("ready"), ae(G).off("ready"))));
            } }), ae.ready.promise = function (t) {
            return Te || (Te = ae.Deferred(), "complete" === G.readyState || "loading" !== G.readyState && !G.documentElement.doScroll ? e.setTimeout(ae.ready) : (G.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s))), Te.promise(t);
          }, ae.ready.promise();var ke = function ke(e, t, n, i, r, o, a) {
            var s = 0,
                l = e.length,
                u = null == n;if ("object" === ae.type(n)) {
              r = !0;for (s in n) {
                ke(e, t, s, n[s], !0, o, a);
              }
            } else if (void 0 !== i && (r = !0, ae.isFunction(i) || (a = !0), u && (a ? (t.call(e, i), t = null) : (u = t, t = function t(e, _t2, n) {
              return u.call(ae(e), n);
            })), t)) for (; l > s; s++) {
              t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            }return r ? e : u ? t.call(e) : l ? t(e[0], n) : o;
          },
              Se = function Se(e) {
            return 1 === e.nodeType || 9 === e.nodeType || ! +e.nodeType;
          };l.uid = 1, l.prototype = { register: function register(e, t) {
              var n = t || {};return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, { value: n, writable: !0, configurable: !0 }), e[this.expando];
            }, cache: function cache(e) {
              if (!Se(e)) return {};var t = e[this.expando];return t || (t = {}, Se(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
            }, set: function set(e, t, n) {
              var i,
                  r = this.cache(e);if ("string" == typeof t) r[t] = n;else for (i in t) {
                r[i] = t[i];
              }return r;
            }, get: function get(e, t) {
              return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t];
            }, access: function access(e, t, n) {
              var i;return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, ae.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t);
            }, remove: function remove(e, t) {
              var n,
                  i,
                  r,
                  o = e[this.expando];if (void 0 !== o) {
                if (void 0 === t) this.register(e);else {
                  ae.isArray(t) ? i = t.concat(t.map(ae.camelCase)) : (r = ae.camelCase(t), t in o ? i = [t, r] : (i = r, i = i in o ? [i] : i.match(Ce) || [])), n = i.length;for (; n--;) {
                    delete o[i[n]];
                  }
                }(void 0 === t || ae.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
              }
            }, hasData: function hasData(e) {
              var t = e[this.expando];return void 0 !== t && !ae.isEmptyObject(t);
            } };var Ee = new l(),
              Ae = new l(),
              Oe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
              Pe = /[A-Z]/g;ae.extend({ hasData: function hasData(e) {
              return Ae.hasData(e) || Ee.hasData(e);
            }, data: function data(e, t, n) {
              return Ae.access(e, t, n);
            }, removeData: function removeData(e, t) {
              Ae.remove(e, t);
            }, _data: function _data(e, t, n) {
              return Ee.access(e, t, n);
            }, _removeData: function _removeData(e, t) {
              Ee.remove(e, t);
            } }), ae.fn.extend({ data: function data(e, t) {
              var n,
                  i,
                  r,
                  o = this[0],
                  a = o && o.attributes;if (void 0 === e) {
                if (this.length && (r = Ae.get(o), 1 === o.nodeType && !Ee.get(o, "hasDataAttrs"))) {
                  for (n = a.length; n--;) {
                    a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = ae.camelCase(i.slice(5)), u(o, i, r[i])));
                  }Ee.set(o, "hasDataAttrs", !0);
                }return r;
              }return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? this.each(function () {
                Ae.set(this, e);
              }) : ke(this, function (t) {
                var n, i;if (o && void 0 === t) {
                  if (n = Ae.get(o, e) || Ae.get(o, e.replace(Pe, "-$&").toLowerCase()), void 0 !== n) return n;if (i = ae.camelCase(e), n = Ae.get(o, i), void 0 !== n) return n;if (n = u(o, i, void 0), void 0 !== n) return n;
                } else i = ae.camelCase(e), this.each(function () {
                  var n = Ae.get(this, i);Ae.set(this, i, t), e.indexOf("-") > -1 && void 0 !== n && Ae.set(this, e, t);
                });
              }, null, t, arguments.length > 1, null, !0);
            }, removeData: function removeData(e) {
              return this.each(function () {
                Ae.remove(this, e);
              });
            } }), ae.extend({ queue: function queue(e, t, n) {
              var i;return e ? (t = (t || "fx") + "queue", i = Ee.get(e, t), n && (!i || ae.isArray(n) ? i = Ee.access(e, t, ae.makeArray(n)) : i.push(n)), i || []) : void 0;
            }, dequeue: function dequeue(e, t) {
              t = t || "fx";var n = ae.queue(e, t),
                  i = n.length,
                  r = n.shift(),
                  o = ae._queueHooks(e, t),
                  a = function a() {
                ae.dequeue(e, t);
              };"inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire();
            }, _queueHooks: function _queueHooks(e, t) {
              var n = t + "queueHooks";return Ee.get(e, n) || Ee.access(e, n, { empty: ae.Callbacks("once memory").add(function () {
                  Ee.remove(e, [t + "queue", n]);
                }) });
            } }), ae.fn.extend({ queue: function queue(e, t) {
              var n = 2;return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ae.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = ae.queue(this, e, t);ae._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ae.dequeue(this, e);
              });
            }, dequeue: function dequeue(e) {
              return this.each(function () {
                ae.dequeue(this, e);
              });
            }, clearQueue: function clearQueue(e) {
              return this.queue(e || "fx", []);
            }, promise: function promise(e, t) {
              var n,
                  i = 1,
                  r = ae.Deferred(),
                  o = this,
                  a = this.length,
                  s = function s() {
                --i || r.resolveWith(o, [o]);
              };for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) {
                n = Ee.get(o[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
              }return s(), r.promise(t);
            } });var qe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
              De = new RegExp("^(?:([+-])=|)(" + qe + ")([a-z%]*)$", "i"),
              Ne = ["Top", "Right", "Bottom", "Left"],
              je = function je(e, t) {
            return e = t || e, "none" === ae.css(e, "display") || !ae.contains(e.ownerDocument, e);
          },
              Me = /^(?:checkbox|radio)$/i,
              Le = /<([\w:-]+)/,
              Ie = /^$|\/(?:java|ecma)script/i,
              _e = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };_e.optgroup = _e.option, _e.tbody = _e.tfoot = _e.colgroup = _e.caption = _e.thead, _e.th = _e.td;var Fe = /<|&#?\w+;/;!function () {
            var e = G.createDocumentFragment(),
                t = e.appendChild(G.createElement("div")),
                n = G.createElement("input");n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), re.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", re.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue;
          }();var He = /^key/,
              $e = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
              Re = /^([^.]*)(?:\.(.+)|)/;ae.event = { global: {}, add: function add(e, t, n, i, r) {
              var o,
                  a,
                  s,
                  l,
                  u,
                  c,
                  d,
                  f,
                  p,
                  h,
                  v,
                  g = Ee.get(e);if (g) for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = ae.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function (t) {
                return "undefined" != typeof ae && ae.event.triggered !== t.type ? ae.event.dispatch.apply(e, arguments) : void 0;
              }), t = (t || "").match(Ce) || [""], u = t.length; u--;) {
                s = Re.exec(t[u]) || [], p = v = s[1], h = (s[2] || "").split(".").sort(), p && (d = ae.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, d = ae.event.special[p] || {}, c = ae.extend({ type: p, origType: v, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && ae.expr.match.needsContext.test(r), namespace: h.join(".") }, o), (f = l[p]) || (f = l[p] = [], f.delegateCount = 0, d.setup && d.setup.call(e, i, h, a) !== !1 || e.addEventListener && e.addEventListener(p, a)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, c) : f.push(c), ae.event.global[p] = !0);
              }
            }, remove: function remove(e, t, n, i, r) {
              var o,
                  a,
                  s,
                  l,
                  u,
                  c,
                  d,
                  f,
                  p,
                  h,
                  v,
                  g = Ee.hasData(e) && Ee.get(e);if (g && (l = g.events)) {
                for (t = (t || "").match(Ce) || [""], u = t.length; u--;) {
                  if (s = Re.exec(t[u]) || [], p = v = s[1], h = (s[2] || "").split(".").sort(), p) {
                    for (d = ae.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, f = l[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--;) {
                      c = f[o], !r && v !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (f.splice(o, 1), c.selector && f.delegateCount--, d.remove && d.remove.call(e, c));
                    }a && !f.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || ae.removeEvent(e, p, g.handle), delete l[p]);
                  } else for (p in l) {
                    ae.event.remove(e, p + t[u], n, i, !0);
                  }
                }ae.isEmptyObject(l) && Ee.remove(e, "handle events");
              }
            }, dispatch: function dispatch(e) {
              e = ae.event.fix(e);var t,
                  n,
                  i,
                  r,
                  o,
                  a = [],
                  s = Z.call(arguments),
                  l = (Ee.get(this, "events") || {})[e.type] || [],
                  u = ae.event.special[e.type] || {};if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (a = ae.event.handlers.call(this, e, l), t = 0; (r = a[t++]) && !e.isPropagationStopped();) {
                  for (e.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();) {
                    e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, i = ((ae.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                  }
                }return u.postDispatch && u.postDispatch.call(this, e), e.result;
              }
            }, handlers: function handlers(e, t) {
              var n,
                  i,
                  r,
                  o,
                  a = [],
                  s = t.delegateCount,
                  l = e.target;if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (; l !== this; l = l.parentNode || this) {
                if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                  for (i = [], n = 0; s > n; n++) {
                    o = t[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? ae(r, this).index(l) > -1 : ae.find(r, this, null, [l]).length), i[r] && i.push(o);
                  }i.length && a.push({ elem: l, handlers: i });
                }
              }return s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a;
            }, props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
              } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(e, t) {
                var n,
                    i,
                    r,
                    o = t.button;return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || G, i = n.documentElement, r = n.body, e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e;
              } }, fix: function fix(e) {
              if (e[ae.expando]) return e;var t,
                  n,
                  i,
                  r = e.type,
                  o = e,
                  a = this.fixHooks[r];for (a || (this.fixHooks[r] = a = $e.test(r) ? this.mouseHooks : He.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new ae.Event(o), t = i.length; t--;) {
                n = i[t], e[n] = o[n];
              }return e.target || (e.target = G), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e;
            }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
                  return this !== g() && this.focus ? (this.focus(), !1) : void 0;
                }, delegateType: "focusin" }, blur: { trigger: function trigger() {
                  return this === g() && this.blur ? (this.blur(), !1) : void 0;
                }, delegateType: "focusout" }, click: { trigger: function trigger() {
                  return "checkbox" === this.type && this.click && ae.nodeName(this, "input") ? (this.click(), !1) : void 0;
                }, _default: function _default(e) {
                  return ae.nodeName(e.target, "a");
                } }, beforeunload: { postDispatch: function postDispatch(e) {
                  void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                } } } }, ae.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
          }, ae.Event = function (e, t) {
            return this instanceof ae.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? h : v) : this.type = e, t && ae.extend(this, t), this.timeStamp = e && e.timeStamp || ae.now(), void (this[ae.expando] = !0)) : new ae.Event(e, t);
          }, ae.Event.prototype = { constructor: ae.Event, isDefaultPrevented: v, isPropagationStopped: v, isImmediatePropagationStopped: v, preventDefault: function preventDefault() {
              var e = this.originalEvent;this.isDefaultPrevented = h, e && e.preventDefault();
            }, stopPropagation: function stopPropagation() {
              var e = this.originalEvent;this.isPropagationStopped = h, e && e.stopPropagation();
            }, stopImmediatePropagation: function stopImmediatePropagation() {
              var e = this.originalEvent;this.isImmediatePropagationStopped = h, e && e.stopImmediatePropagation(), this.stopPropagation();
            } }, ae.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
            ae.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
                var n,
                    i = this,
                    r = e.relatedTarget,
                    o = e.handleObj;return r && (r === i || ae.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
              } };
          }), ae.fn.extend({ on: function on(e, t, n, i) {
              return m(this, e, t, n, i);
            }, one: function one(e, t, n, i) {
              return m(this, e, t, n, i, 1);
            }, off: function off(e, t, n) {
              var i, r;if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ae(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
                for (r in e) {
                  this.off(r, t, e[r]);
                }return this;
              }return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = v), this.each(function () {
                ae.event.remove(this, e, n, t);
              });
            } });var ze = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
              We = /<script|<style|<link/i,
              Ve = /checked\s*(?:[^=]|=\s*.checked.)/i,
              Xe = /^true\/(.*)/,
              Be = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;ae.extend({ htmlPrefilter: function htmlPrefilter(e) {
              return e.replace(ze, "<$1></$2>");
            }, clone: function clone(e, t, n) {
              var i,
                  r,
                  o,
                  a,
                  s = e.cloneNode(!0),
                  l = ae.contains(e.ownerDocument, e);if (!(re.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ae.isXMLDoc(e))) for (a = d(s), o = d(e), i = 0, r = o.length; r > i; i++) {
                C(o[i], a[i]);
              }if (t) if (n) for (o = o || d(e), a = a || d(s), i = 0, r = o.length; r > i; i++) {
                w(o[i], a[i]);
              } else w(e, s);return a = d(s, "script"), a.length > 0 && f(a, !l && d(e, "script")), s;
            }, cleanData: function cleanData(e) {
              for (var t, n, i, r = ae.event.special, o = 0; void 0 !== (n = e[o]); o++) {
                if (Se(n)) {
                  if (t = n[Ee.expando]) {
                    if (t.events) for (i in t.events) {
                      r[i] ? ae.event.remove(n, i) : ae.removeEvent(n, i, t.handle);
                    }n[Ee.expando] = void 0;
                  }n[Ae.expando] && (n[Ae.expando] = void 0);
                }
              }
            } }), ae.fn.extend({ domManip: T, detach: function detach(e) {
              return k(this, e, !0);
            }, remove: function remove(e) {
              return k(this, e);
            }, text: function text(e) {
              return ke(this, function (e) {
                return void 0 === e ? ae.text(this) : this.empty().each(function () {
                  1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                });
              }, null, e, arguments.length);
            }, append: function append() {
              return T(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  var t = y(this, e);t.appendChild(e);
                }
              });
            }, prepend: function prepend() {
              return T(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  var t = y(this, e);t.insertBefore(e, t.firstChild);
                }
              });
            }, before: function before() {
              return T(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
              });
            }, after: function after() {
              return T(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
              });
            }, empty: function empty() {
              for (var e, t = 0; null != (e = this[t]); t++) {
                1 === e.nodeType && (ae.cleanData(d(e, !1)), e.textContent = "");
              }return this;
            }, clone: function clone(e, t) {
              return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return ae.clone(this, e, t);
              });
            }, html: function html(e) {
              return ke(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !We.test(e) && !_e[(Le.exec(e) || ["", ""])[1].toLowerCase()]) {
                  e = ae.htmlPrefilter(e);try {
                    for (; i > n; n++) {
                      t = this[n] || {}, 1 === t.nodeType && (ae.cleanData(d(t, !1)), t.innerHTML = e);
                    }t = 0;
                  } catch (r) {}
                }t && this.empty().append(e);
              }, null, e, arguments.length);
            }, replaceWith: function replaceWith() {
              var e = [];return T(this, arguments, function (t) {
                var n = this.parentNode;ae.inArray(this, e) < 0 && (ae.cleanData(d(this)), n && n.replaceChild(t, this));
              }, e);
            } }), ae.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
            ae.fn[e] = function (e) {
              for (var n, i = [], r = ae(e), o = r.length - 1, a = 0; o >= a; a++) {
                n = a === o ? this : this.clone(!0), ae(r[a])[t](n), K.apply(i, n.get());
              }return this.pushStack(i);
            };
          });var Qe,
              Ye = { HTML: "block", BODY: "block" },
              Ue = /^margin/,
              Ge = new RegExp("^(" + qe + ")(?!px)[a-z%]+$", "i"),
              Ze = function Ze(t) {
            var n = t.ownerDocument.defaultView;return n && n.opener || (n = e), n.getComputedStyle(t);
          },
              Je = function Je(e, t, n, i) {
            var r,
                o,
                a = {};for (o in t) {
              a[o] = e.style[o], e.style[o] = t[o];
            }r = n.apply(e, i || []);for (o in t) {
              e.style[o] = a[o];
            }return r;
          },
              Ke = G.documentElement;!function () {
            function t() {
              s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Ke.appendChild(a);var t = e.getComputedStyle(s);n = "1%" !== t.top, o = "2px" === t.marginLeft, i = "4px" === t.width, s.style.marginRight = "50%", r = "4px" === t.marginRight, Ke.removeChild(a);
            }var n,
                i,
                r,
                o,
                a = G.createElement("div"),
                s = G.createElement("div");s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", re.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), ae.extend(re, { pixelPosition: function pixelPosition() {
                return t(), n;
              }, boxSizingReliable: function boxSizingReliable() {
                return null == i && t(), i;
              }, pixelMarginRight: function pixelMarginRight() {
                return null == i && t(), r;
              }, reliableMarginLeft: function reliableMarginLeft() {
                return null == i && t(), o;
              }, reliableMarginRight: function reliableMarginRight() {
                var t,
                    n = s.appendChild(G.createElement("div"));return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", Ke.appendChild(a), t = !parseFloat(e.getComputedStyle(n).marginRight), Ke.removeChild(a), s.removeChild(n), t;
              } }));
          }();var et = /^(none|table(?!-c[ea]).+)/,
              tt = { position: "absolute", visibility: "hidden", display: "block" },
              nt = { letterSpacing: "0", fontWeight: "400" },
              it = ["Webkit", "O", "Moz", "ms"],
              rt = G.createElement("div").style;ae.extend({ cssHooks: { opacity: { get: function get(e, t) {
                  if (t) {
                    var n = A(e, "opacity");return "" === n ? "1" : n;
                  }
                } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(e, t, n, i) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r,
                    o,
                    a,
                    s = ae.camelCase(t),
                    l = e.style;return t = ae.cssProps[s] || (ae.cssProps[s] = P(s) || s), a = ae.cssHooks[t] || ae.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t] : (o = typeof n === "undefined" ? "undefined" : _typeof(n), "string" === o && (r = De.exec(n)) && r[1] && (n = c(e, t, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (ae.cssNumber[s] ? "" : "px")), re.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l[t] = n)), void 0);
              }
            }, css: function css(e, t, n, i) {
              var r,
                  o,
                  a,
                  s = ae.camelCase(t);return t = ae.cssProps[s] || (ae.cssProps[s] = P(s) || s), a = ae.cssHooks[t] || ae.cssHooks[s], a && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = A(e, t, i)), "normal" === r && t in nt && (r = nt[t]), "" === n || n ? (o = parseFloat(r), n === !0 || isFinite(o) ? o || 0 : r) : r;
            } }), ae.each(["height", "width"], function (e, t) {
            ae.cssHooks[t] = { get: function get(e, n, i) {
                return n ? et.test(ae.css(e, "display")) && 0 === e.offsetWidth ? Je(e, tt, function () {
                  return N(e, t, i);
                }) : N(e, t, i) : void 0;
              }, set: function set(e, n, i) {
                var r,
                    o = i && Ze(e),
                    a = i && D(e, t, i, "border-box" === ae.css(e, "boxSizing", !1, o), o);return a && (r = De.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = ae.css(e, t)), q(e, n, a);
              } };
          }), ae.cssHooks.marginLeft = O(re.reliableMarginLeft, function (e, t) {
            return t ? (parseFloat(A(e, "marginLeft")) || e.getBoundingClientRect().left - Je(e, { marginLeft: 0 }, function () {
              return e.getBoundingClientRect().left;
            })) + "px" : void 0;
          }), ae.cssHooks.marginRight = O(re.reliableMarginRight, function (e, t) {
            return t ? Je(e, { display: "inline-block" }, A, [e, "marginRight"]) : void 0;
          }), ae.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
            ae.cssHooks[e + t] = { expand: function expand(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) {
                  r[e + Ne[i] + t] = o[i] || o[i - 2] || o[0];
                }return r;
              } }, Ue.test(e) || (ae.cssHooks[e + t].set = q);
          }), ae.fn.extend({ css: function css(e, t) {
              return ke(this, function (e, t, n) {
                var i,
                    r,
                    o = {},
                    a = 0;if (ae.isArray(t)) {
                  for (i = Ze(e), r = t.length; r > a; a++) {
                    o[t[a]] = ae.css(e, t[a], !1, i);
                  }return o;
                }return void 0 !== n ? ae.style(e, t, n) : ae.css(e, t);
              }, e, t, arguments.length > 1);
            }, show: function show() {
              return j(this, !0);
            }, hide: function hide() {
              return j(this);
            }, toggle: function toggle(e) {
              return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                je(this) ? ae(this).show() : ae(this).hide();
              });
            } }), ae.Tween = M, M.prototype = { constructor: M, init: function init(e, t, n, i, r, o) {
              this.elem = e, this.prop = n, this.easing = r || ae.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (ae.cssNumber[n] ? "" : "px");
            }, cur: function cur() {
              var e = M.propHooks[this.prop];return e && e.get ? e.get(this) : M.propHooks._default.get(this);
            }, run: function run(e) {
              var t,
                  n = M.propHooks[this.prop];return this.options.duration ? this.pos = t = ae.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : M.propHooks._default.set(this), this;
            } }, M.prototype.init.prototype = M.prototype, M.propHooks = { _default: { get: function get(e) {
                var t;return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ae.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0);
              }, set: function set(e) {
                ae.fx.step[e.prop] ? ae.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ae.cssProps[e.prop]] && !ae.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ae.style(e.elem, e.prop, e.now + e.unit);
              } } }, M.propHooks.scrollTop = M.propHooks.scrollLeft = { set: function set(e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            } }, ae.easing = { linear: function linear(e) {
              return e;
            }, swing: function swing(e) {
              return .5 - Math.cos(e * Math.PI) / 2;
            }, _default: "swing" }, ae.fx = M.prototype.init, ae.fx.step = {};var ot,
              at,
              st = /^(?:toggle|show|hide)$/,
              lt = /queueHooks$/;ae.Animation = ae.extend($, { tweeners: { "*": [function (e, t) {
                var n = this.createTween(e, t);return c(n.elem, e, De.exec(t), n), n;
              }] }, tweener: function tweener(e, t) {
              ae.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ce);for (var n, i = 0, r = e.length; r > i; i++) {
                n = e[i], $.tweeners[n] = $.tweeners[n] || [], $.tweeners[n].unshift(t);
              }
            }, prefilters: [F], prefilter: function prefilter(e, t) {
              t ? $.prefilters.unshift(e) : $.prefilters.push(e);
            } }), ae.speed = function (e, t, n) {
            var i = e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? ae.extend({}, e) : { complete: n || !n && t || ae.isFunction(e) && e, duration: e, easing: n && t || t && !ae.isFunction(t) && t };return i.duration = ae.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ae.fx.speeds ? ae.fx.speeds[i.duration] : ae.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
              ae.isFunction(i.old) && i.old.call(this), i.queue && ae.dequeue(this, i.queue);
            }, i;
          }, ae.fn.extend({ fadeTo: function fadeTo(e, t, n, i) {
              return this.filter(je).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i);
            }, animate: function animate(e, t, n, i) {
              var r = ae.isEmptyObject(e),
                  o = ae.speed(t, n, i),
                  a = function a() {
                var t = $(this, ae.extend({}, e), o);(r || Ee.get(this, "finish")) && t.stop(!0);
              };return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a);
            }, stop: function stop(e, t, n) {
              var i = function i(e) {
                var t = e.stop;delete e.stop, t(n);
              };return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    r = null != e && e + "queueHooks",
                    o = ae.timers,
                    a = Ee.get(this);if (r) a[r] && a[r].stop && i(a[r]);else for (r in a) {
                  a[r] && a[r].stop && lt.test(r) && i(a[r]);
                }for (r = o.length; r--;) {
                  o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                }!t && n || ae.dequeue(this, e);
              });
            }, finish: function finish(e) {
              return e !== !1 && (e = e || "fx"), this.each(function () {
                var t,
                    n = Ee.get(this),
                    i = n[e + "queue"],
                    r = n[e + "queueHooks"],
                    o = ae.timers,
                    a = i ? i.length : 0;for (n.finish = !0, ae.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) {
                  o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                }for (t = 0; a > t; t++) {
                  i[t] && i[t].finish && i[t].finish.call(this);
                }delete n.finish;
              });
            } }), ae.each(["toggle", "show", "hide"], function (e, t) {
            var n = ae.fn[t];ae.fn[t] = function (e, i, r) {
              return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(I(t, !0), e, i, r);
            };
          }), ae.each({ slideDown: I("show"), slideUp: I("hide"), slideToggle: I("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
            ae.fn[e] = function (e, n, i) {
              return this.animate(t, e, n, i);
            };
          }), ae.timers = [], ae.fx.tick = function () {
            var e,
                t = 0,
                n = ae.timers;for (ot = ae.now(); t < n.length; t++) {
              e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            }n.length || ae.fx.stop(), ot = void 0;
          }, ae.fx.timer = function (e) {
            ae.timers.push(e), e() ? ae.fx.start() : ae.timers.pop();
          }, ae.fx.interval = 13, ae.fx.start = function () {
            at || (at = e.setInterval(ae.fx.tick, ae.fx.interval));
          }, ae.fx.stop = function () {
            e.clearInterval(at), at = null;
          }, ae.fx.speeds = { slow: 600, fast: 200, _default: 400 }, ae.fn.delay = function (t, n) {
            return t = ae.fx ? ae.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
              var r = e.setTimeout(n, t);i.stop = function () {
                e.clearTimeout(r);
              };
            });
          }, function () {
            var e = G.createElement("input"),
                t = G.createElement("select"),
                n = t.appendChild(G.createElement("option"));e.type = "checkbox", re.checkOn = "" !== e.value, re.optSelected = n.selected, t.disabled = !0, re.optDisabled = !n.disabled, e = G.createElement("input"), e.value = "t", e.type = "radio", re.radioValue = "t" === e.value;
          }();var ut,
              ct = ae.expr.attrHandle;ae.fn.extend({ attr: function attr(e, t) {
              return ke(this, ae.attr, e, t, arguments.length > 1);
            }, removeAttr: function removeAttr(e) {
              return this.each(function () {
                ae.removeAttr(this, e);
              });
            } }), ae.extend({ attr: function attr(e, t, n) {
              var i,
                  r,
                  o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? ae.prop(e, t, n) : (1 === o && ae.isXMLDoc(e) || (t = t.toLowerCase(), r = ae.attrHooks[t] || (ae.expr.match.bool.test(t) ? ut : void 0)), void 0 !== n ? null === n ? void ae.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = ae.find.attr(e, t), null == i ? void 0 : i));
            }, attrHooks: { type: { set: function set(e, t) {
                  if (!re.radioValue && "radio" === t && ae.nodeName(e, "input")) {
                    var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
                  }
                } } }, removeAttr: function removeAttr(e, t) {
              var n,
                  i,
                  r = 0,
                  o = t && t.match(Ce);if (o && 1 === e.nodeType) for (; n = o[r++];) {
                i = ae.propFix[n] || n, ae.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n);
              }
            } }), ut = { set: function set(e, t, n) {
              return t === !1 ? ae.removeAttr(e, n) : e.setAttribute(n, n), n;
            } }, ae.each(ae.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = ct[t] || ae.find.attr;ct[t] = function (e, t, i) {
              var r, o;return i || (o = ct[t], ct[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, ct[t] = o), r;
            };
          });var dt = /^(?:input|select|textarea|button)$/i,
              ft = /^(?:a|area)$/i;ae.fn.extend({ prop: function prop(e, t) {
              return ke(this, ae.prop, e, t, arguments.length > 1);
            }, removeProp: function removeProp(e) {
              return this.each(function () {
                delete this[ae.propFix[e] || e];
              });
            } }), ae.extend({ prop: function prop(e, t, n) {
              var i,
                  r,
                  o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ae.isXMLDoc(e) || (t = ae.propFix[t] || t, r = ae.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t];
            }, propHooks: { tabIndex: { get: function get(e) {
                  var t = ae.find.attr(e, "tabindex");return t ? parseInt(t, 10) : dt.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1;
                } } }, propFix: { "for": "htmlFor", "class": "className" } }), re.optSelected || (ae.propHooks.selected = { get: function get(e) {
              var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
            }, set: function set(e) {
              var t = e.parentNode;t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            } }), ae.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            ae.propFix[this.toLowerCase()] = this;
          });var pt = /[\t\r\n\f]/g;ae.fn.extend({ addClass: function addClass(e) {
              var t,
                  n,
                  i,
                  r,
                  o,
                  a,
                  s,
                  l = 0;if (ae.isFunction(e)) return this.each(function (t) {
                ae(this).addClass(e.call(this, t, R(this)));
              });if ("string" == typeof e && e) for (t = e.match(Ce) || []; n = this[l++];) {
                if (r = R(n), i = 1 === n.nodeType && (" " + r + " ").replace(pt, " ")) {
                  for (a = 0; o = t[a++];) {
                    i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                  }s = ae.trim(i), r !== s && n.setAttribute("class", s);
                }
              }return this;
            }, removeClass: function removeClass(e) {
              var t,
                  n,
                  i,
                  r,
                  o,
                  a,
                  s,
                  l = 0;if (ae.isFunction(e)) return this.each(function (t) {
                ae(this).removeClass(e.call(this, t, R(this)));
              });if (!arguments.length) return this.attr("class", "");if ("string" == typeof e && e) for (t = e.match(Ce) || []; n = this[l++];) {
                if (r = R(n), i = 1 === n.nodeType && (" " + r + " ").replace(pt, " ")) {
                  for (a = 0; o = t[a++];) {
                    for (; i.indexOf(" " + o + " ") > -1;) {
                      i = i.replace(" " + o + " ", " ");
                    }
                  }s = ae.trim(i), r !== s && n.setAttribute("class", s);
                }
              }return this;
            }, toggleClass: function toggleClass(e, t) {
              var n = typeof e === "undefined" ? "undefined" : _typeof(e);return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ae.isFunction(e) ? this.each(function (n) {
                ae(this).toggleClass(e.call(this, n, R(this), t), t);
              }) : this.each(function () {
                var t, i, r, o;if ("string" === n) for (i = 0, r = ae(this), o = e.match(Ce) || []; t = o[i++];) {
                  r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                } else void 0 !== e && "boolean" !== n || (t = R(this), t && Ee.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Ee.get(this, "__className__") || ""));
              });
            }, hasClass: function hasClass(e) {
              var t,
                  n,
                  i = 0;for (t = " " + e + " "; n = this[i++];) {
                if (1 === n.nodeType && (" " + R(n) + " ").replace(pt, " ").indexOf(t) > -1) return !0;
              }return !1;
            } });var ht = /\r/g,
              vt = /[\x20\t\r\n\f]+/g;ae.fn.extend({ val: function val(e) {
              var t,
                  n,
                  i,
                  r = this[0];{
                if (arguments.length) return i = ae.isFunction(e), this.each(function (n) {
                  var r;1 === this.nodeType && (r = i ? e.call(this, n, ae(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : ae.isArray(r) && (r = ae.map(r, function (e) {
                    return null == e ? "" : e + "";
                  })), t = ae.valHooks[this.type] || ae.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r));
                });if (r) return t = ae.valHooks[r.type] || ae.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(ht, "") : null == n ? "" : n);
              }
            } }), ae.extend({ valHooks: { option: { get: function get(e) {
                  var t = ae.find.attr(e, "value");return null != t ? t : ae.trim(ae.text(e)).replace(vt, " ");
                } }, select: { get: function get(e) {
                  for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, l = 0 > r ? s : o ? r : 0; s > l; l++) {
                    if (n = i[l], (n.selected || l === r) && (re.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ae.nodeName(n.parentNode, "optgroup"))) {
                      if (t = ae(n).val(), o) return t;a.push(t);
                    }
                  }return a;
                }, set: function set(e, t) {
                  for (var n, i, r = e.options, o = ae.makeArray(t), a = r.length; a--;) {
                    i = r[a], (i.selected = ae.inArray(ae.valHooks.option.get(i), o) > -1) && (n = !0);
                  }return n || (e.selectedIndex = -1), o;
                } } } }), ae.each(["radio", "checkbox"], function () {
            ae.valHooks[this] = { set: function set(e, t) {
                return ae.isArray(t) ? e.checked = ae.inArray(ae(e).val(), t) > -1 : void 0;
              } }, re.checkOn || (ae.valHooks[this].get = function (e) {
              return null === e.getAttribute("value") ? "on" : e.value;
            });
          });var gt = /^(?:focusinfocus|focusoutblur)$/;ae.extend(ae.event, { trigger: function trigger(t, n, i, r) {
              var o,
                  a,
                  s,
                  l,
                  u,
                  c,
                  d,
                  f = [i || G],
                  p = ie.call(t, "type") ? t.type : t,
                  h = ie.call(t, "namespace") ? t.namespace.split(".") : [];if (a = s = i = i || G, 3 !== i.nodeType && 8 !== i.nodeType && !gt.test(p + ae.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), u = p.indexOf(":") < 0 && "on" + p, t = t[ae.expando] ? t : new ae.Event(p, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : ae.makeArray(n, [t]), d = ae.event.special[p] || {}, r || !d.trigger || d.trigger.apply(i, n) !== !1)) {
                if (!r && !d.noBubble && !ae.isWindow(i)) {
                  for (l = d.delegateType || p, gt.test(l + p) || (a = a.parentNode); a; a = a.parentNode) {
                    f.push(a), s = a;
                  }s === (i.ownerDocument || G) && f.push(s.defaultView || s.parentWindow || e);
                }for (o = 0; (a = f[o++]) && !t.isPropagationStopped();) {
                  t.type = o > 1 ? l : d.bindType || p, c = (Ee.get(a, "events") || {})[t.type] && Ee.get(a, "handle"), c && c.apply(a, n), c = u && a[u], c && c.apply && Se(a) && (t.result = c.apply(a, n), t.result === !1 && t.preventDefault());
                }return t.type = p, r || t.isDefaultPrevented() || d._default && d._default.apply(f.pop(), n) !== !1 || !Se(i) || u && ae.isFunction(i[p]) && !ae.isWindow(i) && (s = i[u], s && (i[u] = null), ae.event.triggered = p, i[p](), ae.event.triggered = void 0, s && (i[u] = s)), t.result;
              }
            }, simulate: function simulate(e, t, n) {
              var i = ae.extend(new ae.Event(), n, { type: e, isSimulated: !0 });ae.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault();
            } }), ae.fn.extend({ trigger: function trigger(e, t) {
              return this.each(function () {
                ae.event.trigger(e, t, this);
              });
            }, triggerHandler: function triggerHandler(e, t) {
              var n = this[0];return n ? ae.event.trigger(e, t, n, !0) : void 0;
            } }), ae.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
            ae.fn[t] = function (e, n) {
              return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
            };
          }), ae.fn.extend({ hover: function hover(e, t) {
              return this.mouseenter(e).mouseleave(t || e);
            } }), re.focusin = "onfocusin" in e, re.focusin || ae.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            var n = function n(e) {
              ae.event.simulate(t, e.target, ae.event.fix(e));
            };ae.event.special[t] = { setup: function setup() {
                var i = this.ownerDocument || this,
                    r = Ee.access(i, t);r || i.addEventListener(e, n, !0), Ee.access(i, t, (r || 0) + 1);
              }, teardown: function teardown() {
                var i = this.ownerDocument || this,
                    r = Ee.access(i, t) - 1;r ? Ee.access(i, t, r) : (i.removeEventListener(e, n, !0), Ee.remove(i, t));
              } };
          });var mt = e.location,
              yt = ae.now(),
              bt = /\?/;ae.parseJSON = function (e) {
            return JSON.parse(e + "");
          }, ae.parseXML = function (t) {
            var n;if (!t || "string" != typeof t) return null;try {
              n = new e.DOMParser().parseFromString(t, "text/xml");
            } catch (i) {
              n = void 0;
            }return n && !n.getElementsByTagName("parsererror").length || ae.error("Invalid XML: " + t), n;
          };var xt = /#.*$/,
              wt = /([?&])_=[^&]*/,
              Ct = /^(.*?):[ \t]*([^\r\n]*)$/gm,
              Tt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
              kt = /^(?:GET|HEAD)$/,
              St = /^\/\//,
              Et = {},
              At = {},
              Ot = "*/".concat("*"),
              Pt = G.createElement("a");Pt.href = mt.href, ae.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: mt.href, type: "GET", isLocal: Tt.test(mt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Ot, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": ae.parseJSON, "text xml": ae.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
              return t ? V(V(e, ae.ajaxSettings), t) : V(ae.ajaxSettings, e);
            }, ajaxPrefilter: z(Et), ajaxTransport: z(At), ajax: function ajax(t, n) {
              function i(t, n, i, s) {
                var u,
                    d,
                    y,
                    b,
                    w,
                    T = n;2 !== x && (x = 2, l && e.clearTimeout(l), r = void 0, a = s || "", C.readyState = t > 0 ? 4 : 0, u = t >= 200 && 300 > t || 304 === t, i && (b = X(f, C, i)), b = B(f, b, C, u), u ? (f.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (ae.lastModified[o] = w), w = C.getResponseHeader("etag"), w && (ae.etag[o] = w)), 204 === t || "HEAD" === f.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, d = b.data, y = b.error, u = !y)) : (y = T, !t && T || (T = "error", 0 > t && (t = 0))), C.status = t, C.statusText = (n || T) + "", u ? v.resolveWith(p, [d, T, C]) : v.rejectWith(p, [C, T, y]), C.statusCode(m), m = void 0, c && h.trigger(u ? "ajaxSuccess" : "ajaxError", [C, f, u ? d : y]), g.fireWith(p, [C, T]), c && (h.trigger("ajaxComplete", [C, f]), --ae.active || ae.event.trigger("ajaxStop")));
              }"object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (n = t, t = void 0), n = n || {};var r,
                  o,
                  a,
                  s,
                  l,
                  u,
                  c,
                  d,
                  f = ae.ajaxSetup({}, n),
                  p = f.context || f,
                  h = f.context && (p.nodeType || p.jquery) ? ae(p) : ae.event,
                  v = ae.Deferred(),
                  g = ae.Callbacks("once memory"),
                  m = f.statusCode || {},
                  y = {},
                  b = {},
                  x = 0,
                  w = "canceled",
                  C = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
                  var t;if (2 === x) {
                    if (!s) for (s = {}; t = Ct.exec(a);) {
                      s[t[1].toLowerCase()] = t[2];
                    }t = s[e.toLowerCase()];
                  }return null == t ? null : t;
                }, getAllResponseHeaders: function getAllResponseHeaders() {
                  return 2 === x ? a : null;
                }, setRequestHeader: function setRequestHeader(e, t) {
                  var n = e.toLowerCase();return x || (e = b[n] = b[n] || e, y[e] = t), this;
                }, overrideMimeType: function overrideMimeType(e) {
                  return x || (f.mimeType = e), this;
                }, statusCode: function statusCode(e) {
                  var t;if (e) if (2 > x) for (t in e) {
                    m[t] = [m[t], e[t]];
                  } else C.always(e[C.status]);return this;
                }, abort: function abort(e) {
                  var t = e || w;return r && r.abort(t), i(0, t), this;
                } };if (v.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, f.url = ((t || f.url || mt.href) + "").replace(xt, "").replace(St, mt.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = ae.trim(f.dataType || "*").toLowerCase().match(Ce) || [""], null == f.crossDomain) {
                u = G.createElement("a");try {
                  u.href = f.url, u.href = u.href, f.crossDomain = Pt.protocol + "//" + Pt.host != u.protocol + "//" + u.host;
                } catch (T) {
                  f.crossDomain = !0;
                }
              }if (f.data && f.processData && "string" != typeof f.data && (f.data = ae.param(f.data, f.traditional)), W(Et, f, n, C), 2 === x) return C;c = ae.event && f.global, c && 0 === ae.active++ && ae.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !kt.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (bt.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = wt.test(o) ? o.replace(wt, "$1_=" + yt++) : o + (bt.test(o) ? "&" : "?") + "_=" + yt++)), f.ifModified && (ae.lastModified[o] && C.setRequestHeader("If-Modified-Since", ae.lastModified[o]), ae.etag[o] && C.setRequestHeader("If-None-Match", ae.etag[o])), (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ot + "; q=0.01" : "") : f.accepts["*"]);for (d in f.headers) {
                C.setRequestHeader(d, f.headers[d]);
              }if (f.beforeSend && (f.beforeSend.call(p, C, f) === !1 || 2 === x)) return C.abort();w = "abort";for (d in { success: 1, error: 1, complete: 1 }) {
                C[d](f[d]);
              }if (r = W(At, f, n, C)) {
                if (C.readyState = 1, c && h.trigger("ajaxSend", [C, f]), 2 === x) return C;f.async && f.timeout > 0 && (l = e.setTimeout(function () {
                  C.abort("timeout");
                }, f.timeout));try {
                  x = 1, r.send(y, i);
                } catch (T) {
                  if (!(2 > x)) throw T;i(-1, T);
                }
              } else i(-1, "No Transport");return C;
            }, getJSON: function getJSON(e, t, n) {
              return ae.get(e, t, n, "json");
            }, getScript: function getScript(e, t) {
              return ae.get(e, void 0, t, "script");
            } }), ae.each(["get", "post"], function (e, t) {
            ae[t] = function (e, n, i, r) {
              return ae.isFunction(n) && (r = r || i, i = n, n = void 0), ae.ajax(ae.extend({ url: e, type: t, dataType: r, data: n, success: i }, ae.isPlainObject(e) && e));
            };
          }), ae._evalUrl = function (e) {
            return ae.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 });
          }, ae.fn.extend({ wrapAll: function wrapAll(e) {
              var t;return ae.isFunction(e) ? this.each(function (t) {
                ae(this).wrapAll(e.call(this, t));
              }) : (this[0] && (t = ae(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) {
                  e = e.firstElementChild;
                }return e;
              }).append(this)), this);
            }, wrapInner: function wrapInner(e) {
              return ae.isFunction(e) ? this.each(function (t) {
                ae(this).wrapInner(e.call(this, t));
              }) : this.each(function () {
                var t = ae(this),
                    n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
              });
            }, wrap: function wrap(e) {
              var t = ae.isFunction(e);return this.each(function (n) {
                ae(this).wrapAll(t ? e.call(this, n) : e);
              });
            }, unwrap: function unwrap() {
              return this.parent().each(function () {
                ae.nodeName(this, "body") || ae(this).replaceWith(this.childNodes);
              }).end();
            } }), ae.expr.filters.hidden = function (e) {
            return !ae.expr.filters.visible(e);
          }, ae.expr.filters.visible = function (e) {
            return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0;
          };var qt = /%20/g,
              Dt = /\[\]$/,
              Nt = /\r?\n/g,
              jt = /^(?:submit|button|image|reset|file)$/i,
              Mt = /^(?:input|select|textarea|keygen)/i;ae.param = function (e, t) {
            var n,
                i = [],
                r = function r(e, t) {
              t = ae.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
            };if (void 0 === t && (t = ae.ajaxSettings && ae.ajaxSettings.traditional), ae.isArray(e) || e.jquery && !ae.isPlainObject(e)) ae.each(e, function () {
              r(this.name, this.value);
            });else for (n in e) {
              Q(n, e[n], t, r);
            }return i.join("&").replace(qt, "+");
          }, ae.fn.extend({ serialize: function serialize() {
              return ae.param(this.serializeArray());
            }, serializeArray: function serializeArray() {
              return this.map(function () {
                var e = ae.prop(this, "elements");return e ? ae.makeArray(e) : this;
              }).filter(function () {
                var e = this.type;return this.name && !ae(this).is(":disabled") && Mt.test(this.nodeName) && !jt.test(e) && (this.checked || !Me.test(e));
              }).map(function (e, t) {
                var n = ae(this).val();return null == n ? null : ae.isArray(n) ? ae.map(n, function (e) {
                  return { name: t.name, value: e.replace(Nt, "\r\n") };
                }) : { name: t.name, value: n.replace(Nt, "\r\n") };
              }).get();
            } }), ae.ajaxSettings.xhr = function () {
            try {
              return new e.XMLHttpRequest();
            } catch (t) {}
          };var Lt = { 0: 200, 1223: 204 },
              It = ae.ajaxSettings.xhr();re.cors = !!It && "withCredentials" in It, re.ajax = It = !!It, ae.ajaxTransport(function (t) {
            var _n, i;return re.cors || It && !t.crossDomain ? { send: function send(r, o) {
                var a,
                    s = t.xhr();if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) {
                  s[a] = t.xhrFields[a];
                }t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");for (a in r) {
                  s.setRequestHeader(a, r[a]);
                }_n = function n(e) {
                  return function () {
                    _n && (_n = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Lt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()));
                  };
                }, s.onload = _n(), i = s.onerror = _n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function () {
                  4 === s.readyState && e.setTimeout(function () {
                    _n && i();
                  });
                }, _n = _n("abort");try {
                  s.send(t.hasContent && t.data || null);
                } catch (l) {
                  if (_n) throw l;
                }
              }, abort: function abort() {
                _n && _n();
              } } : void 0;
          }), ae.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(e) {
                return ae.globalEval(e), e;
              } } }), ae.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
          }), ae.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
              var t, _n2;return { send: function send(i, r) {
                  t = ae("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", _n2 = function n(e) {
                    t.remove(), _n2 = null, e && r("error" === e.type ? 404 : 200, e.type);
                  }), G.head.appendChild(t[0]);
                }, abort: function abort() {
                  _n2 && _n2();
                } };
            }
          });var _t = [],
              Ft = /(=)\?(?=&|$)|\?\?/;ae.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
              var e = _t.pop() || ae.expando + "_" + yt++;return this[e] = !0, e;
            } }), ae.ajaxPrefilter("json jsonp", function (t, n, i) {
            var r,
                o,
                a,
                s = t.jsonp !== !1 && (Ft.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ft.test(t.data) && "data");return s || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = ae.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Ft, "$1" + r) : t.jsonp !== !1 && (t.url += (bt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
              return a || ae.error(r + " was not called"), a[0];
            }, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
              a = arguments;
            }, i.always(function () {
              void 0 === o ? ae(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, _t.push(r)), a && ae.isFunction(o) && o(a[0]), a = o = void 0;
            }), "script") : void 0;
          }), ae.parseHTML = function (e, t, n) {
            if (!e || "string" != typeof e) return null;"boolean" == typeof t && (n = t, t = !1), t = t || G;var i = ve.exec(e),
                r = !n && [];return i ? [t.createElement(i[1])] : (i = p([e], t, r), r && r.length && ae(r).remove(), ae.merge([], i.childNodes));
          };var Ht = ae.fn.load;ae.fn.load = function (e, t, n) {
            if ("string" != typeof e && Ht) return Ht.apply(this, arguments);var i,
                r,
                o,
                a = this,
                s = e.indexOf(" ");return s > -1 && (i = ae.trim(e.slice(s)), e = e.slice(0, s)), ae.isFunction(t) ? (n = t, t = void 0) : t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (r = "POST"), a.length > 0 && ae.ajax({ url: e, type: r || "GET", dataType: "html", data: t }).done(function (e) {
              o = arguments, a.html(i ? ae("<div>").append(ae.parseHTML(e)).find(i) : e);
            }).always(n && function (e, t) {
              a.each(function () {
                n.apply(this, o || [e.responseText, t, e]);
              });
            }), this;
          }, ae.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            ae.fn[t] = function (e) {
              return this.on(t, e);
            };
          }), ae.expr.filters.animated = function (e) {
            return ae.grep(ae.timers, function (t) {
              return e === t.elem;
            }).length;
          }, ae.offset = { setOffset: function setOffset(e, t, n) {
              var i,
                  r,
                  o,
                  a,
                  s,
                  l,
                  u,
                  c = ae.css(e, "position"),
                  d = ae(e),
                  f = {};"static" === c && (e.style.position = "relative"), s = d.offset(), o = ae.css(e, "top"), l = ae.css(e, "left"), u = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1, u ? (i = d.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), ae.isFunction(t) && (t = t.call(e, n, ae.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + r), "using" in t ? t.using.call(e, f) : d.css(f);
            } }, ae.fn.extend({ offset: function offset(e) {
              if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                ae.offset.setOffset(this, e, t);
              });var t,
                  n,
                  i = this[0],
                  r = { top: 0, left: 0 },
                  o = i && i.ownerDocument;if (o) return t = o.documentElement, ae.contains(t, i) ? (r = i.getBoundingClientRect(), n = Y(o), { top: r.top + n.pageYOffset - t.clientTop, left: r.left + n.pageXOffset - t.clientLeft }) : r;
            }, position: function position() {
              if (this[0]) {
                var e,
                    t,
                    n = this[0],
                    i = { top: 0, left: 0 };return "fixed" === ae.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ae.nodeName(e[0], "html") || (i = e.offset()), i.top += ae.css(e[0], "borderTopWidth", !0), i.left += ae.css(e[0], "borderLeftWidth", !0)), { top: t.top - i.top - ae.css(n, "marginTop", !0), left: t.left - i.left - ae.css(n, "marginLeft", !0) };
              }
            }, offsetParent: function offsetParent() {
              return this.map(function () {
                for (var e = this.offsetParent; e && "static" === ae.css(e, "position");) {
                  e = e.offsetParent;
                }return e || Ke;
              });
            } }), ae.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
            var n = "pageYOffset" === t;ae.fn[e] = function (i) {
              return ke(this, function (e, i, r) {
                var o = Y(e);return void 0 === r ? o ? o[t] : e[i] : void (o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r);
              }, e, i, arguments.length);
            };
          }), ae.each(["top", "left"], function (e, t) {
            ae.cssHooks[t] = O(re.pixelPosition, function (e, n) {
              return n ? (n = A(e, t), Ge.test(n) ? ae(e).position()[t] + "px" : n) : void 0;
            });
          }), ae.each({ Height: "height", Width: "width" }, function (e, t) {
            ae.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, i) {
              ae.fn[i] = function (i, r) {
                var o = arguments.length && (n || "boolean" != typeof i),
                    a = n || (i === !0 || r === !0 ? "margin" : "border");return ke(this, function (t, n, i) {
                  var r;return ae.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? ae.css(t, n, a) : ae.style(t, n, i, a);
                }, t, o ? i : void 0, o, null);
              };
            });
          }), ae.fn.extend({ bind: function bind(e, t, n) {
              return this.on(e, null, t, n);
            }, unbind: function unbind(e, t) {
              return this.off(e, null, t);
            }, delegate: function delegate(e, t, n, i) {
              return this.on(t, e, n, i);
            }, undelegate: function undelegate(e, t, n) {
              return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
            }, size: function size() {
              return this.length;
            } }), ae.fn.andSelf = ae.fn.addBack, "function" == typeof i && i.amd && i("jquery", [], function () {
            return ae;
          });var $t = e.jQuery,
              Rt = e.$;return ae.noConflict = function (t) {
            return e.$ === ae && (e.$ = Rt), t && e.jQuery === ae && (e.jQuery = $t), ae;
          }, t || (e.jQuery = e.$ = ae), ae;
        }), r("undefined" != typeof $ ? $ : window.$);
      }).call(e, void 0, void 0, void 0, void 0, function (e) {
        t.exports = e;
      });
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
  }, {}], 2: [function (e, t, n) {
    (function (n) {
      var i = e;(function (e, t, n, r, o) {
        if ("undefined" == typeof a) {
          var a;a = "function" == typeof n ? $ = i("jquery") : $;
        }a.easing.jswing = a.easing.swing, a.extend(a.easing, { def: "easeOutQuad", swing: function swing(e, t, n, i, r) {
            return a.easing[a.easing.def](e, t, n, i, r);
          }, easeInQuad: function easeInQuad(e, t, n, i, r) {
            return i * (t /= r) * t + n;
          }, easeOutQuad: function easeOutQuad(e, t, n, i, r) {
            return -i * (t /= r) * (t - 2) + n;
          }, easeInOutQuad: function easeInOutQuad(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n;
          }, easeInCubic: function easeInCubic(e, t, n, i, r) {
            return i * (t /= r) * t * t + n;
          }, easeOutCubic: function easeOutCubic(e, t, n, i, r) {
            return i * ((t = t / r - 1) * t * t + 1) + n;
          }, easeInOutCubic: function easeInOutCubic(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n;
          }, easeInQuart: function easeInQuart(e, t, n, i, r) {
            return i * (t /= r) * t * t * t + n;
          }, easeOutQuart: function easeOutQuart(e, t, n, i, r) {
            return -i * ((t = t / r - 1) * t * t * t - 1) + n;
          }, easeInOutQuart: function easeInOutQuart(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t * t * t + n : -i / 2 * ((t -= 2) * t * t * t - 2) + n;
          }, easeInQuint: function easeInQuint(e, t, n, i, r) {
            return i * (t /= r) * t * t * t * t + n;
          }, easeOutQuint: function easeOutQuint(e, t, n, i, r) {
            return i * ((t = t / r - 1) * t * t * t * t + 1) + n;
          }, easeInOutQuint: function easeInOutQuint(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n;
          }, easeInSine: function easeInSine(e, t, n, i, r) {
            return -i * Math.cos(t / r * (Math.PI / 2)) + i + n;
          }, easeOutSine: function easeOutSine(e, t, n, i, r) {
            return i * Math.sin(t / r * (Math.PI / 2)) + n;
          }, easeInOutSine: function easeInOutSine(e, t, n, i, r) {
            return -i / 2 * (Math.cos(Math.PI * t / r) - 1) + n;
          }, easeInExpo: function easeInExpo(e, t, n, i, r) {
            return 0 == t ? n : i * Math.pow(2, 10 * (t / r - 1)) + n;
          }, easeOutExpo: function easeOutExpo(e, t, n, i, r) {
            return t == r ? n + i : i * (-Math.pow(2, -10 * t / r) + 1) + n;
          }, easeInOutExpo: function easeInOutExpo(e, t, n, i, r) {
            return 0 == t ? n : t == r ? n + i : (t /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (-Math.pow(2, -10 * --t) + 2) + n;
          }, easeInCirc: function easeInCirc(e, t, n, i, r) {
            return -i * (Math.sqrt(1 - (t /= r) * t) - 1) + n;
          }, easeOutCirc: function easeOutCirc(e, t, n, i, r) {
            return i * Math.sqrt(1 - (t = t / r - 1) * t) + n;
          }, easeInOutCirc: function easeInOutCirc(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + n : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n;
          }, easeInElastic: function easeInElastic(e, t, n, i, r) {
            var o = 1.70158,
                a = 0,
                s = i;if (0 == t) return n;if (1 == (t /= r)) return n + i;if (a || (a = .3 * r), s < Math.abs(i)) {
              s = i;var o = a / 4;
            } else var o = a / (2 * Math.PI) * Math.asin(i / s);return -(s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / a)) + n;
          }, easeOutElastic: function easeOutElastic(e, t, n, i, r) {
            var o = 1.70158,
                a = 0,
                s = i;if (0 == t) return n;if (1 == (t /= r)) return n + i;if (a || (a = .3 * r), s < Math.abs(i)) {
              s = i;var o = a / 4;
            } else var o = a / (2 * Math.PI) * Math.asin(i / s);return s * Math.pow(2, -10 * t) * Math.sin((t * r - o) * (2 * Math.PI) / a) + i + n;
          }, easeInOutElastic: function easeInOutElastic(e, t, n, i, r) {
            var o = 1.70158,
                a = 0,
                s = i;if (0 == t) return n;if (2 == (t /= r / 2)) return n + i;if (a || (a = r * (.3 * 1.5)), s < Math.abs(i)) {
              s = i;var o = a / 4;
            } else var o = a / (2 * Math.PI) * Math.asin(i / s);return 1 > t ? -.5 * (s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / a)) + n : s * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / a) * .5 + i + n;
          }, easeInBack: function easeInBack(e, t, n, i, r, o) {
            return void 0 == o && (o = 1.70158), i * (t /= r) * t * ((o + 1) * t - o) + n;
          }, easeOutBack: function easeOutBack(e, t, n, i, r, o) {
            return void 0 == o && (o = 1.70158), i * ((t = t / r - 1) * t * ((o + 1) * t + o) + 1) + n;
          }, easeInOutBack: function easeInOutBack(e, t, n, i, r, o) {
            return void 0 == o && (o = 1.70158), (t /= r / 2) < 1 ? i / 2 * (t * t * (((o *= 1.525) + 1) * t - o)) + n : i / 2 * ((t -= 2) * t * (((o *= 1.525) + 1) * t + o) + 2) + n;
          }, easeInBounce: function easeInBounce(e, t, n, i, r) {
            return i - a.easing.easeOutBounce(e, r - t, 0, i, r) + n;
          }, easeOutBounce: function easeOutBounce(e, t, n, i, r) {
            return (t /= r) < 1 / 2.75 ? i * (7.5625 * t * t) + n : 2 / 2.75 > t ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : 2.5 / 2.75 > t ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n;
          }, easeInOutBounce: function easeInOutBounce(e, t, n, i, r) {
            return r / 2 > t ? .5 * a.easing.easeInBounce(e, 2 * t, 0, i, r) + n : .5 * a.easing.easeOutBounce(e, 2 * t - r, 0, i, r) + .5 * i + n;
          } }), a.extend(a.easing, { easeInOutMaterial: function easeInOutMaterial(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t + n : i / 4 * ((t -= 2) * t * t + 2) + n;
          } }), a.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (!function (e) {
          function t(e) {
            var t = e.length,
                i = n.type(e);return "function" === i || n.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e;
          }if (!e.jQuery) {
            var n = function n(e, t) {
              return new n.fn.init(e, t);
            };n.isWindow = function (e) {
              return null != e && e == e.window;
            }, n.type = function (e) {
              return null == e ? e + "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e ? r[a.call(e)] || "object" : typeof e === "undefined" ? "undefined" : _typeof(e);
            }, n.isArray = Array.isArray || function (e) {
              return "array" === n.type(e);
            }, n.isPlainObject = function (e) {
              var t;if (!e || "object" !== n.type(e) || e.nodeType || n.isWindow(e)) return !1;try {
                if (e.constructor && !o.call(e, "constructor") && !o.call(e.constructor.prototype, "isPrototypeOf")) return !1;
              } catch (i) {
                return !1;
              }for (t in e) {}return void 0 === t || o.call(e, t);
            }, n.each = function (e, n, i) {
              var r,
                  o = 0,
                  a = e.length,
                  s = t(e);if (i) {
                if (s) for (; a > o && (r = n.apply(e[o], i), r !== !1); o++) {} else for (o in e) {
                  if (r = n.apply(e[o], i), r === !1) break;
                }
              } else if (s) for (; a > o && (r = n.call(e[o], o, e[o]), r !== !1); o++) {} else for (o in e) {
                if (r = n.call(e[o], o, e[o]), r === !1) break;
              }return e;
            }, n.data = function (e, t, r) {
              if (void 0 === r) {
                var o = e[n.expando],
                    a = o && i[o];if (void 0 === t) return a;if (a && t in a) return a[t];
              } else if (void 0 !== t) {
                var o = e[n.expando] || (e[n.expando] = ++n.uuid);return i[o] = i[o] || {}, i[o][t] = r, r;
              }
            }, n.removeData = function (e, t) {
              var r = e[n.expando],
                  o = r && i[r];o && n.each(t, function (e, t) {
                delete o[t];
              });
            }, n.extend = function () {
              var e,
                  t,
                  i,
                  r,
                  o,
                  a,
                  s = arguments[0] || {},
                  l = 1,
                  u = arguments.length,
                  c = !1;for ("boolean" == typeof s && (c = s, s = arguments[l] || {}, l++), "object" != (typeof s === "undefined" ? "undefined" : _typeof(s)) && "function" !== n.type(s) && (s = {}), l === u && (s = this, l--); u > l; l++) {
                if (null != (o = arguments[l])) for (r in o) {
                  e = s[r], i = o[r], s !== i && (c && i && (n.isPlainObject(i) || (t = n.isArray(i))) ? (t ? (t = !1, a = e && n.isArray(e) ? e : []) : a = e && n.isPlainObject(e) ? e : {}, s[r] = n.extend(c, a, i)) : void 0 !== i && (s[r] = i));
                }
              }return s;
            }, n.queue = function (e, i, r) {
              function o(e, n) {
                var i = n || [];return null != e && (t(Object(e)) ? !function (e, t) {
                  for (var n = +t.length, i = 0, r = e.length; n > i;) {
                    e[r++] = t[i++];
                  }if (n !== n) for (; void 0 !== t[i];) {
                    e[r++] = t[i++];
                  }return e.length = r, e;
                }(i, "string" == typeof e ? [e] : e) : [].push.call(i, e)), i;
              }if (e) {
                i = (i || "fx") + "queue";var a = n.data(e, i);return r ? (!a || n.isArray(r) ? a = n.data(e, i, o(r)) : a.push(r), a) : a || [];
              }
            }, n.dequeue = function (e, t) {
              n.each(e.nodeType ? [e] : e, function (e, i) {
                t = t || "fx";var r = n.queue(i, t),
                    o = r.shift();"inprogress" === o && (o = r.shift()), o && ("fx" === t && r.unshift("inprogress"), o.call(i, function () {
                  n.dequeue(i, t);
                }));
              });
            }, n.fn = n.prototype = { init: function init(e) {
                if (e.nodeType) return this[0] = e, this;throw new Error("Not a DOM node.");
              }, offset: function offset() {
                var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : { top: 0, left: 0 };return { top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0), left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0) };
              }, position: function position() {
                function e() {
                  for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) {
                    e = e.offsetParent;
                  }return e || document;
                }var t = this[0],
                    e = e.apply(t),
                    i = this.offset(),
                    r = /^(?:body|html)$/i.test(e.nodeName) ? { top: 0, left: 0 } : n(e).offset();return i.top -= parseFloat(t.style.marginTop) || 0, i.left -= parseFloat(t.style.marginLeft) || 0, e.style && (r.top += parseFloat(e.style.borderTopWidth) || 0, r.left += parseFloat(e.style.borderLeftWidth) || 0), { top: i.top - r.top, left: i.left - r.left };
              } };var i = {};n.expando = "velocity" + new Date().getTime(), n.uuid = 0;for (var r = {}, o = r.hasOwnProperty, a = r.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++) {
              r["[object " + s[l] + "]"] = s[l].toLowerCase();
            }n.fn.init.prototype = n.fn, e.Velocity = { Utilities: n };
          }
        }(window), function (t) {
          "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "object" == _typeof(e.exports) ? e.exports = t() : "function" == typeof r && r.amd ? r(t) : t();
        }(function () {
          return function (e, t, n, i) {
            function r(e) {
              for (var t = -1, n = e ? e.length : 0, i = []; ++t < n;) {
                var r = e[t];r && i.push(r);
              }return i;
            }function o(e) {
              return g.isWrapped(e) ? e = [].slice.call(e) : g.isNode(e) && (e = [e]), e;
            }function s(e) {
              var t = p.data(e, "velocity");return null === t ? i : t;
            }function l(e) {
              return function (t) {
                return Math.round(t * e) * (1 / e);
              };
            }function u(e, n, i, r) {
              function o(e, t) {
                return 1 - 3 * t + 3 * e;
              }function a(e, t) {
                return 3 * t - 6 * e;
              }function s(e) {
                return 3 * e;
              }function l(e, t, n) {
                return ((o(t, n) * e + a(t, n)) * e + s(t)) * e;
              }function u(e, t, n) {
                return 3 * o(t, n) * e * e + 2 * a(t, n) * e + s(t);
              }function c(t, n) {
                for (var r = 0; v > r; ++r) {
                  var o = u(n, e, i);if (0 === o) return n;var a = l(n, e, i) - t;n -= a / o;
                }return n;
              }function d() {
                for (var t = 0; b > t; ++t) {
                  T[t] = l(t * x, e, i);
                }
              }function f(t, n, r) {
                var o,
                    a,
                    s = 0;do {
                  a = n + (r - n) / 2, o = l(a, e, i) - t, o > 0 ? r = a : n = a;
                } while (Math.abs(o) > m && ++s < y);return a;
              }function p(t) {
                for (var n = 0, r = 1, o = b - 1; r != o && T[r] <= t; ++r) {
                  n += x;
                }--r;var a = (t - T[r]) / (T[r + 1] - T[r]),
                    s = n + a * x,
                    l = u(s, e, i);return l >= g ? c(t, s) : 0 == l ? s : f(t, n, n + x);
              }function h() {
                k = !0, (e != n || i != r) && d();
              }var v = 4,
                  g = .001,
                  m = 1e-7,
                  y = 10,
                  b = 11,
                  x = 1 / (b - 1),
                  w = "Float32Array" in t;if (4 !== arguments.length) return !1;for (var C = 0; 4 > C; ++C) {
                if ("number" != typeof arguments[C] || isNaN(arguments[C]) || !isFinite(arguments[C])) return !1;
              }e = Math.min(e, 1), i = Math.min(i, 1), e = Math.max(e, 0), i = Math.max(i, 0);var T = w ? new Float32Array(b) : new Array(b),
                  k = !1,
                  S = function S(t) {
                return k || h(), e === n && i === r ? t : 0 === t ? 0 : 1 === t ? 1 : l(p(t), n, r);
              };S.getControlPoints = function () {
                return [{ x: e, y: n }, { x: i, y: r }];
              };var E = "generateBezier(" + [e, n, i, r] + ")";return S.toString = function () {
                return E;
              }, S;
            }function c(e, t) {
              var n = e;return g.isString(e) ? x.Easings[e] || (n = !1) : n = g.isArray(e) && 1 === e.length ? l.apply(null, e) : g.isArray(e) && 2 === e.length ? w.apply(null, e.concat([t])) : g.isArray(e) && 4 === e.length ? u.apply(null, e) : !1, n === !1 && (n = x.Easings[x.defaults.easing] ? x.defaults.easing : b), n;
            }function d(e) {
              if (e) {
                var t = new Date().getTime(),
                    n = x.State.calls.length;n > 1e4 && (x.State.calls = r(x.State.calls));
                for (var o = 0; n > o; o++) {
                  if (x.State.calls[o]) {
                    var a = x.State.calls[o],
                        l = a[0],
                        u = a[2],
                        c = a[3],
                        h = !!c,
                        v = null;c || (c = x.State.calls[o][3] = t - 16);for (var m = Math.min((t - c) / u.duration, 1), y = 0, b = l.length; b > y; y++) {
                      var w = l[y],
                          T = w.element;if (s(T)) {
                        var S = !1;if (u.display !== i && null !== u.display && "none" !== u.display) {
                          if ("flex" === u.display) {
                            var E = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];p.each(E, function (e, t) {
                              C.setPropertyValue(T, "display", t);
                            });
                          }C.setPropertyValue(T, "display", u.display);
                        }u.visibility !== i && "hidden" !== u.visibility && C.setPropertyValue(T, "visibility", u.visibility);for (var A in w) {
                          if ("element" !== A) {
                            var O,
                                P = w[A],
                                q = g.isString(P.easing) ? x.Easings[P.easing] : P.easing;if (1 === m) O = P.endValue;else {
                              var D = P.endValue - P.startValue;if (O = P.startValue + D * q(m, u, D), !h && O === P.currentValue) continue;
                            }if (P.currentValue = O, "tween" === A) v = O;else {
                              if (C.Hooks.registered[A]) {
                                var N = C.Hooks.getRoot(A),
                                    j = s(T).rootPropertyValueCache[N];j && (P.rootPropertyValue = j);
                              }var M = C.setPropertyValue(T, A, P.currentValue + (0 === parseFloat(O) ? "" : P.unitType), P.rootPropertyValue, P.scrollData);C.Hooks.registered[A] && (s(T).rootPropertyValueCache[N] = C.Normalizations.registered[N] ? C.Normalizations.registered[N]("extract", null, M[1]) : M[1]), "transform" === M[0] && (S = !0);
                            }
                          }
                        }u.mobileHA && s(T).transformCache.translate3d === i && (s(T).transformCache.translate3d = "(0px, 0px, 0px)", S = !0), S && C.flushTransformCache(T);
                      }
                    }u.display !== i && "none" !== u.display && (x.State.calls[o][2].display = !1), u.visibility !== i && "hidden" !== u.visibility && (x.State.calls[o][2].visibility = !1), u.progress && u.progress.call(a[1], a[1], m, Math.max(0, c + u.duration - t), c, v), 1 === m && f(o);
                  }
                }
              }x.State.isTicking && k(d);
            }function f(e, t) {
              if (!x.State.calls[e]) return !1;for (var n = x.State.calls[e][0], r = x.State.calls[e][1], o = x.State.calls[e][2], a = x.State.calls[e][4], l = !1, u = 0, c = n.length; c > u; u++) {
                var d = n[u].element;if (t || o.loop || ("none" === o.display && C.setPropertyValue(d, "display", o.display), "hidden" === o.visibility && C.setPropertyValue(d, "visibility", o.visibility)), o.loop !== !0 && (p.queue(d)[1] === i || !/\.velocityQueueEntryFlag/i.test(p.queue(d)[1])) && s(d)) {
                  s(d).isAnimating = !1, s(d).rootPropertyValueCache = {};var f = !1;p.each(C.Lists.transforms3D, function (e, t) {
                    var n = /^scale/.test(t) ? 1 : 0,
                        r = s(d).transformCache[t];s(d).transformCache[t] !== i && new RegExp("^\\(" + n + "[^.]").test(r) && (f = !0, delete s(d).transformCache[t]);
                  }), o.mobileHA && (f = !0, delete s(d).transformCache.translate3d), f && C.flushTransformCache(d), C.Values.removeClass(d, "velocity-animating");
                }if (!t && o.complete && !o.loop && u === c - 1) try {
                  o.complete.call(r, r);
                } catch (h) {
                  setTimeout(function () {
                    throw h;
                  }, 1);
                }a && o.loop !== !0 && a(r), s(d) && o.loop === !0 && !t && (p.each(s(d).tweensContainer, function (e, t) {
                  /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100);
                }), x(d, "reverse", { loop: !0, delay: o.delay })), o.queue !== !1 && p.dequeue(d, o.queue);
              }x.State.calls[e] = !1;for (var v = 0, g = x.State.calls.length; g > v; v++) {
                if (x.State.calls[v] !== !1) {
                  l = !0;break;
                }
              }l === !1 && (x.State.isTicking = !1, delete x.State.calls, x.State.calls = []);
            }var p,
                h = function () {
              if (n.documentMode) return n.documentMode;for (var e = 7; e > 4; e--) {
                var t = n.createElement("div");if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e;
              }return i;
            }(),
                v = function () {
              var e = 0;return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function (t) {
                var n,
                    i = new Date().getTime();return n = Math.max(0, 16 - (i - e)), e = i + n, setTimeout(function () {
                  t(i + n);
                }, n);
              };
            }(),
                g = { isString: function isString(e) {
                return "string" == typeof e;
              }, isArray: Array.isArray || function (e) {
                return "[object Array]" === Object.prototype.toString.call(e);
              }, isFunction: function isFunction(e) {
                return "[object Function]" === Object.prototype.toString.call(e);
              }, isNode: function isNode(e) {
                return e && e.nodeType;
              }, isNodeList: function isNodeList(e) {
                return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== i && (0 === e.length || "object" == _typeof(e[0]) && e[0].nodeType > 0);
              }, isWrapped: function isWrapped(e) {
                return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e));
              }, isSVG: function isSVG(e) {
                return t.SVGElement && e instanceof t.SVGElement;
              }, isEmptyObject: function isEmptyObject(e) {
                for (var t in e) {
                  return !1;
                }return !0;
              } },
                m = !1;if (e.fn && e.fn.jquery ? (p = e, m = !0) : p = t.Velocity.Utilities, 8 >= h && !m) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if (7 >= h) return void (a.fn.velocity = a.fn.animate);var y = 400,
                b = "swing",
                x = { State: { isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), isAndroid: /Android/i.test(navigator.userAgent), isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent), isChrome: t.chrome, isFirefox: /Firefox/i.test(navigator.userAgent), prefixElement: n.createElement("div"), prefixMatches: {}, scrollAnchor: null, scrollPropertyLeft: null, scrollPropertyTop: null, isTicking: !1, calls: [] }, CSS: {}, Utilities: p, Redirects: {}, Easings: {}, Promise: t.Promise, defaults: { queue: "", duration: y, easing: b, begin: i, complete: i, progress: i, display: i, visibility: i, loop: !1, delay: !1, mobileHA: !0, _cacheValues: !0 }, init: function init(e) {
                p.data(e, "velocity", { isSVG: g.isSVG(e), isAnimating: !1, computedStyle: null, tweensContainer: null, rootPropertyValueCache: {}, transformCache: {} });
              }, hook: null, mock: !1, version: { major: 1, minor: 2, patch: 2 }, debug: !1 };t.pageYOffset !== i ? (x.State.scrollAnchor = t, x.State.scrollPropertyLeft = "pageXOffset", x.State.scrollPropertyTop = "pageYOffset") : (x.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body, x.State.scrollPropertyLeft = "scrollLeft", x.State.scrollPropertyTop = "scrollTop");var w = function () {
              function e(e) {
                return -e.tension * e.x - e.friction * e.v;
              }function t(t, n, i) {
                var r = { x: t.x + i.dx * n, v: t.v + i.dv * n, tension: t.tension, friction: t.friction };return { dx: r.v, dv: e(r) };
              }function n(n, i) {
                var r = { dx: n.v, dv: e(n) },
                    o = t(n, .5 * i, r),
                    a = t(n, .5 * i, o),
                    s = t(n, i, a),
                    l = 1 / 6 * (r.dx + 2 * (o.dx + a.dx) + s.dx),
                    u = 1 / 6 * (r.dv + 2 * (o.dv + a.dv) + s.dv);return n.x = n.x + l * i, n.v = n.v + u * i, n;
              }return function i(e, t, r) {
                var o,
                    a,
                    s,
                    l = { x: -1, v: 0, tension: null, friction: null },
                    u = [0],
                    c = 0,
                    d = 1e-4,
                    f = .016;for (e = parseFloat(e) || 500, t = parseFloat(t) || 20, r = r || null, l.tension = e, l.friction = t, o = null !== r, o ? (c = i(e, t), a = c / r * f) : a = f; s = n(s || l, a), u.push(1 + s.x), c += 16, Math.abs(s.x) > d && Math.abs(s.v) > d;) {}return o ? function (e) {
                  return u[e * (u.length - 1) | 0];
                } : c;
              };
            }();x.Easings = { linear: function linear(e) {
                return e;
              }, swing: function swing(e) {
                return .5 - Math.cos(e * Math.PI) / 2;
              }, spring: function spring(e) {
                return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e);
              } }, p.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function (e, t) {
              x.Easings[t[0]] = u.apply(null, t[1]);
            });var C = x.CSS = { RegEx: { isHex: /^#([A-f\d]{3}){1,2}$/i, valueUnwrap: /^[A-z]+\((.*)\)$/i, wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/, valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi }, Lists: { colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"], transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"], transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"] }, Hooks: { templates: { textShadow: ["Color X Y Blur", "black 0px 0px 0px"], boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"], clip: ["Top Right Bottom Left", "0px 0px 0px 0px"], backgroundPosition: ["X Y", "0% 0%"], transformOrigin: ["X Y Z", "50% 50% 0px"], perspectiveOrigin: ["X Y", "50% 50%"] }, registered: {}, register: function register() {
                  for (var e = 0; e < C.Lists.colors.length; e++) {
                    var t = "color" === C.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";C.Hooks.templates[C.Lists.colors[e]] = ["Red Green Blue Alpha", t];
                  }var n, i, r;if (h) for (n in C.Hooks.templates) {
                    i = C.Hooks.templates[n], r = i[0].split(" ");var o = i[1].match(C.RegEx.valueSplit);"Color" === r[0] && (r.push(r.shift()), o.push(o.shift()), C.Hooks.templates[n] = [r.join(" "), o.join(" ")]);
                  }for (n in C.Hooks.templates) {
                    i = C.Hooks.templates[n], r = i[0].split(" ");for (var e in r) {
                      var a = n + r[e],
                          s = e;C.Hooks.registered[a] = [n, s];
                    }
                  }
                }, getRoot: function getRoot(e) {
                  var t = C.Hooks.registered[e];return t ? t[0] : e;
                }, cleanRootPropertyValue: function cleanRootPropertyValue(e, t) {
                  return C.RegEx.valueUnwrap.test(t) && (t = t.match(C.RegEx.valueUnwrap)[1]), C.Values.isCSSNullValue(t) && (t = C.Hooks.templates[e][1]), t;
                }, extractValue: function extractValue(e, t) {
                  var n = C.Hooks.registered[e];if (n) {
                    var i = n[0],
                        r = n[1];return t = C.Hooks.cleanRootPropertyValue(i, t), t.toString().match(C.RegEx.valueSplit)[r];
                  }return t;
                }, injectValue: function injectValue(e, t, n) {
                  var i = C.Hooks.registered[e];if (i) {
                    var r,
                        o,
                        a = i[0],
                        s = i[1];return n = C.Hooks.cleanRootPropertyValue(a, n), r = n.toString().match(C.RegEx.valueSplit), r[s] = t, o = r.join(" ");
                  }return n;
                } }, Normalizations: { registered: { clip: function clip(e, t, n) {
                    switch (e) {case "name":
                        return "clip";case "extract":
                        var i;return C.RegEx.wrappedValueAlreadyExtracted.test(n) ? i = n : (i = n.toString().match(C.RegEx.valueUnwrap), i = i ? i[1].replace(/,(\s+)?/g, " ") : n), i;case "inject":
                        return "rect(" + n + ")";}
                  }, blur: function blur(e, t, n) {
                    switch (e) {case "name":
                        return x.State.isFirefox ? "filter" : "-webkit-filter";case "extract":
                        var i = parseFloat(n);if (!i && 0 !== i) {
                          var r = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);i = r ? r[1] : 0;
                        }return i;case "inject":
                        return parseFloat(n) ? "blur(" + n + ")" : "none";}
                  }, opacity: function opacity(e, t, n) {
                    if (8 >= h) switch (e) {case "name":
                        return "filter";case "extract":
                        var i = n.toString().match(/alpha\(opacity=(.*)\)/i);return n = i ? i[1] / 100 : 1;case "inject":
                        return t.style.zoom = 1, parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")";} else switch (e) {case "name":
                        return "opacity";case "extract":
                        return n;case "inject":
                        return n;}
                  } }, register: function register() {
                  9 >= h || x.State.isGingerbread || (C.Lists.transformsBase = C.Lists.transformsBase.concat(C.Lists.transforms3D));for (var e = 0; e < C.Lists.transformsBase.length; e++) {
                    !function () {
                      var t = C.Lists.transformsBase[e];C.Normalizations.registered[t] = function (e, n, r) {
                        switch (e) {case "name":
                            return "transform";case "extract":
                            return s(n) === i || s(n).transformCache[t] === i ? /^scale/i.test(t) ? 1 : 0 : s(n).transformCache[t].replace(/[()]/g, "");case "inject":
                            var o = !1;switch (t.substr(0, t.length - 1)) {case "translate":
                                o = !/(%|px|em|rem|vw|vh|\d)$/i.test(r);break;case "scal":case "scale":
                                x.State.isAndroid && s(n).transformCache[t] === i && 1 > r && (r = 1), o = !/(\d)$/i.test(r);break;case "skew":
                                o = !/(deg|\d)$/i.test(r);break;case "rotate":
                                o = !/(deg|\d)$/i.test(r);}return o || (s(n).transformCache[t] = "(" + r + ")"), s(n).transformCache[t];}
                      };
                    }();
                  }for (var e = 0; e < C.Lists.colors.length; e++) {
                    !function () {
                      var t = C.Lists.colors[e];C.Normalizations.registered[t] = function (e, n, r) {
                        switch (e) {case "name":
                            return t;case "extract":
                            var o;if (C.RegEx.wrappedValueAlreadyExtracted.test(r)) o = r;else {
                              var a,
                                  s = { black: "rgb(0, 0, 0)", blue: "rgb(0, 0, 255)", gray: "rgb(128, 128, 128)", green: "rgb(0, 128, 0)", red: "rgb(255, 0, 0)", white: "rgb(255, 255, 255)" };/^[A-z]+$/i.test(r) ? a = s[r] !== i ? s[r] : s.black : C.RegEx.isHex.test(r) ? a = "rgb(" + C.Values.hexToRgb(r).join(" ") + ")" : /^rgba?\(/i.test(r) || (a = s.black), o = (a || r).toString().match(C.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
                            }return 8 >= h || 3 !== o.split(" ").length || (o += " 1"), o;case "inject":
                            return 8 >= h ? 4 === r.split(" ").length && (r = r.split(/\s+/).slice(0, 3).join(" ")) : 3 === r.split(" ").length && (r += " 1"), (8 >= h ? "rgb" : "rgba") + "(" + r.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";}
                      };
                    }();
                  }
                } }, Names: { camelCase: function camelCase(e) {
                  return e.replace(/-(\w)/g, function (e, t) {
                    return t.toUpperCase();
                  });
                }, SVGAttribute: function SVGAttribute(e) {
                  var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return (h || x.State.isAndroid && !x.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e);
                }, prefixCheck: function prefixCheck(e) {
                  if (x.State.prefixMatches[e]) return [x.State.prefixMatches[e], !0];for (var t = ["", "Webkit", "Moz", "ms", "O"], n = 0, i = t.length; i > n; n++) {
                    var r;if (r = 0 === n ? e : t[n] + e.replace(/^\w/, function (e) {
                      return e.toUpperCase();
                    }), g.isString(x.State.prefixElement.style[r])) return x.State.prefixMatches[e] = r, [r, !0];
                  }return [e, !1];
                } }, Values: { hexToRgb: function hexToRgb(e) {
                  var t,
                      n = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                      i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return e = e.replace(n, function (e, t, n, i) {
                    return t + t + n + n + i + i;
                  }), t = i.exec(e), t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0];
                }, isCSSNullValue: function isCSSNullValue(e) {
                  return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e);
                }, getUnitType: function getUnitType(e) {
                  return (/^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                  );
                }, getDisplayType: function getDisplayType(e) {
                  var t = e && e.tagName.toString().toLowerCase();return (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                  );
                }, addClass: function addClass(e, t) {
                  e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t;
                }, removeClass: function removeClass(e, t) {
                  e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ");
                } }, getPropertyValue: function getPropertyValue(e, n, r, o) {
                function a(e, n) {
                  function r() {
                    u && C.setPropertyValue(e, "display", "none");
                  }var l = 0;if (8 >= h) l = p.css(e, n);else {
                    var u = !1;if (/^(width|height)$/.test(n) && 0 === C.getPropertyValue(e, "display") && (u = !0, C.setPropertyValue(e, "display", C.Values.getDisplayType(e))), !o) {
                      if ("height" === n && "border-box" !== C.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                        var c = e.offsetHeight - (parseFloat(C.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(C.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(C.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(C.getPropertyValue(e, "paddingBottom")) || 0);return r(), c;
                      }if ("width" === n && "border-box" !== C.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                        var d = e.offsetWidth - (parseFloat(C.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(C.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(C.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(C.getPropertyValue(e, "paddingRight")) || 0);return r(), d;
                      }
                    }var f;f = s(e) === i ? t.getComputedStyle(e, null) : s(e).computedStyle ? s(e).computedStyle : s(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === n && (n = "borderTopColor"), l = 9 === h && "filter" === n ? f.getPropertyValue(n) : f[n], ("" === l || null === l) && (l = e.style[n]), r();
                  }if ("auto" === l && /^(top|right|bottom|left)$/i.test(n)) {
                    var v = a(e, "position");("fixed" === v || "absolute" === v && /top|left/i.test(n)) && (l = p(e).position()[n] + "px");
                  }return l;
                }var l;if (C.Hooks.registered[n]) {
                  var u = n,
                      c = C.Hooks.getRoot(u);r === i && (r = C.getPropertyValue(e, C.Names.prefixCheck(c)[0])), C.Normalizations.registered[c] && (r = C.Normalizations.registered[c]("extract", e, r)), l = C.Hooks.extractValue(u, r);
                } else if (C.Normalizations.registered[n]) {
                  var d, f;d = C.Normalizations.registered[n]("name", e), "transform" !== d && (f = a(e, C.Names.prefixCheck(d)[0]), C.Values.isCSSNullValue(f) && C.Hooks.templates[n] && (f = C.Hooks.templates[n][1])), l = C.Normalizations.registered[n]("extract", e, f);
                }if (!/^[\d-]/.test(l)) if (s(e) && s(e).isSVG && C.Names.SVGAttribute(n)) {
                  if (/^(height|width)$/i.test(n)) try {
                    l = e.getBBox()[n];
                  } catch (v) {
                    l = 0;
                  } else l = e.getAttribute(n);
                } else l = a(e, C.Names.prefixCheck(n)[0]);return C.Values.isCSSNullValue(l) && (l = 0), x.debug >= 2 && console.log("Get " + n + ": " + l), l;
              }, setPropertyValue: function setPropertyValue(e, n, i, r, o) {
                var a = n;if ("scroll" === n) o.container ? o.container["scroll" + o.direction] = i : "Left" === o.direction ? t.scrollTo(i, o.alternateValue) : t.scrollTo(o.alternateValue, i);else if (C.Normalizations.registered[n] && "transform" === C.Normalizations.registered[n]("name", e)) C.Normalizations.registered[n]("inject", e, i), a = "transform", i = s(e).transformCache[n];else {
                  if (C.Hooks.registered[n]) {
                    var l = n,
                        u = C.Hooks.getRoot(n);r = r || C.getPropertyValue(e, u), i = C.Hooks.injectValue(l, i, r), n = u;
                  }if (C.Normalizations.registered[n] && (i = C.Normalizations.registered[n]("inject", e, i), n = C.Normalizations.registered[n]("name", e)), a = C.Names.prefixCheck(n)[0], 8 >= h) try {
                    e.style[a] = i;
                  } catch (c) {
                    x.debug && console.log("Browser does not support [" + i + "] for [" + a + "]");
                  } else s(e) && s(e).isSVG && C.Names.SVGAttribute(n) ? e.setAttribute(n, i) : e.style[a] = i;x.debug >= 2 && console.log("Set " + n + " (" + a + "): " + i);
                }return [a, i];
              }, flushTransformCache: function flushTransformCache(e) {
                function t(t) {
                  return parseFloat(C.getPropertyValue(e, t));
                }var n = "";if ((h || x.State.isAndroid && !x.State.isChrome) && s(e).isSVG) {
                  var i = { translate: [t("translateX"), t("translateY")], skewX: [t("skewX")], skewY: [t("skewY")], scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")], rotate: [t("rotateZ"), 0, 0] };p.each(s(e).transformCache, function (e) {
                    /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), i[e] && (n += e + "(" + i[e].join(" ") + ") ", delete i[e]);
                  });
                } else {
                  var r, o;p.each(s(e).transformCache, function (t) {
                    return r = s(e).transformCache[t], "transformPerspective" === t ? (o = r, !0) : (9 === h && "rotateZ" === t && (t = "rotate"), void (n += t + r + " "));
                  }), o && (n = "perspective" + o + " " + n);
                }C.setPropertyValue(e, "transform", n);
              } };C.Hooks.register(), C.Normalizations.register(), x.hook = function (e, t, n) {
              var r = i;return e = o(e), p.each(e, function (e, o) {
                if (s(o) === i && x.init(o), n === i) r === i && (r = x.CSS.getPropertyValue(o, t));else {
                  var a = x.CSS.setPropertyValue(o, t, n);"transform" === a[0] && x.CSS.flushTransformCache(o), r = a;
                }
              }), r;
            };var T = function T() {
              function e() {
                return a ? A.promise || null : l;
              }function r() {
                function e(e) {
                  function u(e, t) {
                    var n = i,
                        r = i,
                        s = i;return g.isArray(e) ? (n = e[0], !g.isArray(e[1]) && /^[\d-]/.test(e[1]) || g.isFunction(e[1]) || C.RegEx.isHex.test(e[1]) ? s = e[1] : (g.isString(e[1]) && !C.RegEx.isHex.test(e[1]) || g.isArray(e[1])) && (r = t ? e[1] : c(e[1], a.duration), e[2] !== i && (s = e[2]))) : n = e, t || (r = r || a.easing), g.isFunction(n) && (n = n.call(o, k, w)), g.isFunction(s) && (s = s.call(o, k, w)), [n || 0, r, s];
                  }function f(e, t) {
                    var n, i;return i = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (e) {
                      return n = e, "";
                    }), n || (n = C.Values.getUnitType(e)), [i, n];
                  }function y() {
                    var e = { myParent: o.parentNode || n.body, position: C.getPropertyValue(o, "position"), fontSize: C.getPropertyValue(o, "fontSize") },
                        i = e.position === M.lastPosition && e.myParent === M.lastParent,
                        r = e.fontSize === M.lastFontSize;M.lastParent = e.myParent, M.lastPosition = e.position, M.lastFontSize = e.fontSize;var a = 100,
                        l = {};if (r && i) l.emToPx = M.lastEmToPx, l.percentToPxWidth = M.lastPercentToPxWidth, l.percentToPxHeight = M.lastPercentToPxHeight;else {
                      var u = s(o).isSVG ? n.createElementNS("http://www.w3.org/2000/svg", "rect") : n.createElement("div");x.init(u), e.myParent.appendChild(u), p.each(["overflow", "overflowX", "overflowY"], function (e, t) {
                        x.CSS.setPropertyValue(u, t, "hidden");
                      }), x.CSS.setPropertyValue(u, "position", e.position), x.CSS.setPropertyValue(u, "fontSize", e.fontSize), x.CSS.setPropertyValue(u, "boxSizing", "content-box"), p.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (e, t) {
                        x.CSS.setPropertyValue(u, t, a + "%");
                      }), x.CSS.setPropertyValue(u, "paddingLeft", a + "em"), l.percentToPxWidth = M.lastPercentToPxWidth = (parseFloat(C.getPropertyValue(u, "width", null, !0)) || 1) / a, l.percentToPxHeight = M.lastPercentToPxHeight = (parseFloat(C.getPropertyValue(u, "height", null, !0)) || 1) / a, l.emToPx = M.lastEmToPx = (parseFloat(C.getPropertyValue(u, "paddingLeft")) || 1) / a, e.myParent.removeChild(u);
                    }return null === M.remToPx && (M.remToPx = parseFloat(C.getPropertyValue(n.body, "fontSize")) || 16), null === M.vwToPx && (M.vwToPx = parseFloat(t.innerWidth) / 100, M.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = M.remToPx, l.vwToPx = M.vwToPx, l.vhToPx = M.vhToPx, x.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), o), l;
                  }if (a.begin && 0 === k) try {
                    a.begin.call(h, h);
                  } catch (b) {
                    setTimeout(function () {
                      throw b;
                    }, 1);
                  }if ("scroll" === O) {
                    var T,
                        S,
                        E,
                        P = /^x$/i.test(a.axis) ? "Left" : "Top",
                        q = parseFloat(a.offset) || 0;a.container ? g.isWrapped(a.container) || g.isNode(a.container) ? (a.container = a.container[0] || a.container, T = a.container["scroll" + P], E = T + p(o).position()[P.toLowerCase()] + q) : a.container = null : (T = x.State.scrollAnchor[x.State["scrollProperty" + P]], S = x.State.scrollAnchor[x.State["scrollProperty" + ("Left" === P ? "Top" : "Left")]], E = p(o).offset()[P.toLowerCase()] + q), l = { scroll: { rootPropertyValue: !1, startValue: T, currentValue: T, endValue: E, unitType: "", easing: a.easing, scrollData: { container: a.container, direction: P, alternateValue: S } }, element: o }, x.debug && console.log("tweensContainer (scroll): ", l.scroll, o);
                  } else if ("reverse" === O) {
                    if (!s(o).tweensContainer) return void p.dequeue(o, a.queue);"none" === s(o).opts.display && (s(o).opts.display = "auto"), "hidden" === s(o).opts.visibility && (s(o).opts.visibility = "visible"), s(o).opts.loop = !1, s(o).opts.begin = null, s(o).opts.complete = null, m.easing || delete a.easing, m.duration || delete a.duration, a = p.extend({}, s(o).opts, a);var D = p.extend(!0, {}, s(o).tweensContainer);for (var N in D) {
                      if ("element" !== N) {
                        var j = D[N].startValue;D[N].startValue = D[N].currentValue = D[N].endValue, D[N].endValue = j, g.isEmptyObject(m) || (D[N].easing = a.easing), x.debug && console.log("reverse tweensContainer (" + N + "): " + JSON.stringify(D[N]), o);
                      }
                    }l = D;
                  } else if ("start" === O) {
                    var D;s(o).tweensContainer && s(o).isAnimating === !0 && (D = s(o).tweensContainer), p.each(v, function (e, t) {
                      if (RegExp("^" + C.Lists.colors.join("$|^") + "$").test(e)) {
                        var n = u(t, !0),
                            r = n[0],
                            o = n[1],
                            a = n[2];if (C.RegEx.isHex.test(r)) {
                          for (var s = ["Red", "Green", "Blue"], l = C.Values.hexToRgb(r), c = a ? C.Values.hexToRgb(a) : i, d = 0; d < s.length; d++) {
                            var f = [l[d]];o && f.push(o), c !== i && f.push(c[d]), v[e + s[d]] = f;
                          }delete v[e];
                        }
                      }
                    });for (var I in v) {
                      var _ = u(v[I]),
                          F = _[0],
                          H = _[1],
                          $ = _[2];I = C.Names.camelCase(I);var R = C.Hooks.getRoot(I),
                          z = !1;if (s(o).isSVG || "tween" === R || C.Names.prefixCheck(R)[1] !== !1 || C.Normalizations.registered[R] !== i) {
                        (a.display !== i && null !== a.display && "none" !== a.display || a.visibility !== i && "hidden" !== a.visibility) && /opacity|filter/.test(I) && !$ && 0 !== F && ($ = 0), a._cacheValues && D && D[I] ? ($ === i && ($ = D[I].endValue + D[I].unitType), z = s(o).rootPropertyValueCache[R]) : C.Hooks.registered[I] ? $ === i ? (z = C.getPropertyValue(o, R), $ = C.getPropertyValue(o, I, z)) : z = C.Hooks.templates[R][1] : $ === i && ($ = C.getPropertyValue(o, I));var W,
                            V,
                            X,
                            B = !1;if (W = f(I, $), $ = W[0], X = W[1], W = f(I, F), F = W[0].replace(/^([+-\/*])=/, function (e, t) {
                          return B = t, "";
                        }), V = W[1], $ = parseFloat($) || 0, F = parseFloat(F) || 0, "%" === V && (/^(fontSize|lineHeight)$/.test(I) ? (F /= 100, V = "em") : /^scale/.test(I) ? (F /= 100, V = "") : /(Red|Green|Blue)$/i.test(I) && (F = F / 100 * 255, V = "")), /[\/*]/.test(B)) V = X;else if (X !== V && 0 !== $) if (0 === F) V = X;else {
                          r = r || y();var Q = /margin|padding|left|right|width|text|word|letter/i.test(I) || /X$/.test(I) || "x" === I ? "x" : "y";switch (X) {case "%":
                              $ *= "x" === Q ? r.percentToPxWidth : r.percentToPxHeight;break;case "px":
                              break;default:
                              $ *= r[X + "ToPx"];}switch (V) {case "%":
                              $ *= 1 / ("x" === Q ? r.percentToPxWidth : r.percentToPxHeight);break;case "px":
                              break;default:
                              $ *= 1 / r[V + "ToPx"];}
                        }switch (B) {case "+":
                            F = $ + F;break;case "-":
                            F = $ - F;break;case "*":
                            F = $ * F;break;case "/":
                            F = $ / F;}l[I] = { rootPropertyValue: z, startValue: $, currentValue: $, endValue: F, unitType: V, easing: H }, x.debug && console.log("tweensContainer (" + I + "): " + JSON.stringify(l[I]), o);
                      } else x.debug && console.log("Skipping [" + R + "] due to a lack of browser support.");
                    }l.element = o;
                  }l.element && (C.Values.addClass(o, "velocity-animating"), L.push(l), "" === a.queue && (s(o).tweensContainer = l, s(o).opts = a), s(o).isAnimating = !0, k === w - 1 ? (x.State.calls.push([L, h, a, null, A.resolver]), x.State.isTicking === !1 && (x.State.isTicking = !0, d())) : k++);
                }var r,
                    o = this,
                    a = p.extend({}, x.defaults, m),
                    l = {};switch (s(o) === i && x.init(o), parseFloat(a.delay) && a.queue !== !1 && p.queue(o, a.queue, function (e) {
                  x.velocityQueueEntryFlag = !0, s(o).delayTimer = { setTimeout: setTimeout(e, parseFloat(a.delay)), next: e };
                }), a.duration.toString().toLowerCase()) {case "fast":
                    a.duration = 200;break;case "normal":
                    a.duration = y;break;case "slow":
                    a.duration = 600;break;default:
                    a.duration = parseFloat(a.duration) || 1;}x.mock !== !1 && (x.mock === !0 ? a.duration = a.delay = 1 : (a.duration *= parseFloat(x.mock) || 1, a.delay *= parseFloat(x.mock) || 1)), a.easing = c(a.easing, a.duration), a.begin && !g.isFunction(a.begin) && (a.begin = null), a.progress && !g.isFunction(a.progress) && (a.progress = null), a.complete && !g.isFunction(a.complete) && (a.complete = null), a.display !== i && null !== a.display && (a.display = a.display.toString().toLowerCase(), "auto" === a.display && (a.display = x.CSS.Values.getDisplayType(o))), a.visibility !== i && null !== a.visibility && (a.visibility = a.visibility.toString().toLowerCase()), a.mobileHA = a.mobileHA && x.State.isMobile && !x.State.isGingerbread, a.queue === !1 ? a.delay ? setTimeout(e, a.delay) : e() : p.queue(o, a.queue, function (t, n) {
                  return n === !0 ? (A.promise && A.resolver(h), !0) : (x.velocityQueueEntryFlag = !0, void e(t));
                }), "" !== a.queue && "fx" !== a.queue || "inprogress" === p.queue(o)[0] || p.dequeue(o);
              }var a,
                  l,
                  u,
                  h,
                  v,
                  m,
                  b = arguments[0] && (arguments[0].p || p.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || g.isString(arguments[0].properties));if (g.isWrapped(this) ? (a = !1, u = 0, h = this, l = this) : (a = !0, u = 1, h = b ? arguments[0].elements || arguments[0].e : arguments[0]), h = o(h)) {
                b ? (v = arguments[0].properties || arguments[0].p, m = arguments[0].options || arguments[0].o) : (v = arguments[u], m = arguments[u + 1]);var w = h.length,
                    k = 0;if (!/^(stop|finish)$/i.test(v) && !p.isPlainObject(m)) {
                  var S = u + 1;m = {};for (var E = S; E < arguments.length; E++) {
                    g.isArray(arguments[E]) || !/^(fast|normal|slow)$/i.test(arguments[E]) && !/^\d/.test(arguments[E]) ? g.isString(arguments[E]) || g.isArray(arguments[E]) ? m.easing = arguments[E] : g.isFunction(arguments[E]) && (m.complete = arguments[E]) : m.duration = arguments[E];
                  }
                }var A = { promise: null, resolver: null, rejecter: null };a && x.Promise && (A.promise = new x.Promise(function (e, t) {
                  A.resolver = e, A.rejecter = t;
                }));var O;switch (v) {case "scroll":
                    O = "scroll";break;case "reverse":
                    O = "reverse";break;case "finish":case "stop":
                    p.each(h, function (e, t) {
                      s(t) && s(t).delayTimer && (clearTimeout(s(t).delayTimer.setTimeout), s(t).delayTimer.next && s(t).delayTimer.next(), delete s(t).delayTimer);
                    });var P = [];return p.each(x.State.calls, function (e, t) {
                      t && p.each(t[1], function (n, r) {
                        var o = m === i ? "" : m;return o === !0 || t[2].queue === o || m === i && t[2].queue === !1 ? void p.each(h, function (n, i) {
                          i === r && ((m === !0 || g.isString(m)) && (p.each(p.queue(i, g.isString(m) ? m : ""), function (e, t) {
                            g.isFunction(t) && t(null, !0);
                          }), p.queue(i, g.isString(m) ? m : "", [])), "stop" === v ? (s(i) && s(i).tweensContainer && o !== !1 && p.each(s(i).tweensContainer, function (e, t) {
                            t.endValue = t.currentValue;
                          }), P.push(e)) : "finish" === v && (t[2].duration = 1));
                        }) : !0;
                      });
                    }), "stop" === v && (p.each(P, function (e, t) {
                      f(t, !0);
                    }), A.promise && A.resolver(h)), e();default:
                    if (!p.isPlainObject(v) || g.isEmptyObject(v)) {
                      if (g.isString(v) && x.Redirects[v]) {
                        var q = p.extend({}, m),
                            D = q.duration,
                            N = q.delay || 0;return q.backwards === !0 && (h = p.extend(!0, [], h).reverse()), p.each(h, function (e, t) {
                          parseFloat(q.stagger) ? q.delay = N + parseFloat(q.stagger) * e : g.isFunction(q.stagger) && (q.delay = N + q.stagger.call(t, e, w)), q.drag && (q.duration = parseFloat(D) || (/^(callout|transition)/.test(v) ? 1e3 : y), q.duration = Math.max(q.duration * (q.backwards ? 1 - e / w : (e + 1) / w), .75 * q.duration, 200)), x.Redirects[v].call(t, t, q || {}, e, w, h, A.promise ? A : i);
                        }), e();
                      }var j = "Velocity: First argument (" + v + ") was not a property map, a known action, or a registered redirect. Aborting.";return A.promise ? A.rejecter(new Error(j)) : console.log(j), e();
                    }O = "start";}var M = { lastParent: null, lastPosition: null, lastFontSize: null, lastPercentToPxWidth: null, lastPercentToPxHeight: null, lastEmToPx: null, remToPx: null, vwToPx: null, vhToPx: null },
                    L = [];p.each(h, function (e, t) {
                  g.isNode(t) && r.call(t);
                });var I,
                    q = p.extend({}, x.defaults, m);if (q.loop = parseInt(q.loop), I = 2 * q.loop - 1, q.loop) for (var _ = 0; I > _; _++) {
                  var F = { delay: q.delay, progress: q.progress };_ === I - 1 && (F.display = q.display, F.visibility = q.visibility, F.complete = q.complete), T(h, "reverse", F);
                }return e();
              }
            };x = p.extend(T, x), x.animate = T;var k = t.requestAnimationFrame || v;return x.State.isMobile || n.hidden === i || n.addEventListener("visibilitychange", function () {
              n.hidden ? (k = function k(e) {
                return setTimeout(function () {
                  e(!0);
                }, 16);
              }, d()) : k = t.requestAnimationFrame || v;
            }), e.Velocity = x, e !== t && (e.fn.velocity = T, e.fn.velocity.defaults = x.defaults), p.each(["Down", "Up"], function (e, t) {
              x.Redirects["slide" + t] = function (e, n, r, o, a, s) {
                var l = p.extend({}, n),
                    u = l.begin,
                    c = l.complete,
                    d = { height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: "" },
                    f = {};l.display === i && (l.display = "Down" === t ? "inline" === x.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function () {
                  u && u.call(a, a);for (var n in d) {
                    f[n] = e.style[n];var i = x.CSS.getPropertyValue(e, n);d[n] = "Down" === t ? [i, 0] : [0, i];
                  }f.overflow = e.style.overflow, e.style.overflow = "hidden";
                }, l.complete = function () {
                  for (var t in f) {
                    e.style[t] = f[t];
                  }c && c.call(a, a), s && s.resolver(a);
                }, x(e, d, l);
              };
            }), p.each(["In", "Out"], function (e, t) {
              x.Redirects["fade" + t] = function (e, n, r, o, a, s) {
                var l = p.extend({}, n),
                    u = { opacity: "In" === t ? 1 : 0 },
                    c = l.complete;l.complete = r !== o - 1 ? l.begin = null : function () {
                  c && c.call(a, a), s && s.resolver(a);
                }, l.display === i && (l.display = "In" === t ? "auto" : "none"), x(this, u, l);
              };
            }), x;
          }(window.jQuery || window.Zepto || window, window, document);
        })), !function (t, n, i, o) {
          "use strict";
          function a(e, t, n) {
            return setTimeout(f(e, n), t);
          }function s(e, t, n) {
            return Array.isArray(e) ? (l(e, n[t], n), !0) : !1;
          }function l(e, t, n) {
            var i;if (e) if (e.forEach) e.forEach(t, n);else if (e.length !== o) for (i = 0; i < e.length;) {
              t.call(n, e[i], i, e), i++;
            } else for (i in e) {
              e.hasOwnProperty(i) && t.call(n, e[i], i, e);
            }
          }function u(e, t, n) {
            for (var i = Object.keys(t), r = 0; r < i.length;) {
              (!n || n && e[i[r]] === o) && (e[i[r]] = t[i[r]]), r++;
            }return e;
          }function c(e, t) {
            return u(e, t, !0);
          }function d(e, t, n) {
            var i,
                r = t.prototype;i = e.prototype = Object.create(r), i.constructor = e, i._super = r, n && u(i, n);
          }function f(e, t) {
            return function () {
              return e.apply(t, arguments);
            };
          }function p(e, t) {
            return (typeof e === "undefined" ? "undefined" : _typeof(e)) == fe ? e.apply(t ? t[0] || o : o, t) : e;
          }function h(e, t) {
            return e === o ? t : e;
          }function v(e, t, n) {
            l(b(t), function (t) {
              e.addEventListener(t, n, !1);
            });
          }function g(e, t, n) {
            l(b(t), function (t) {
              e.removeEventListener(t, n, !1);
            });
          }function m(e, t) {
            for (; e;) {
              if (e == t) return !0;e = e.parentNode;
            }return !1;
          }function y(e, t) {
            return e.indexOf(t) > -1;
          }function b(e) {
            return e.trim().split(/\s+/g);
          }function x(e, t, n) {
            if (e.indexOf && !n) return e.indexOf(t);for (var i = 0; i < e.length;) {
              if (n && e[i][n] == t || !n && e[i] === t) return i;i++;
            }return -1;
          }function w(e) {
            return Array.prototype.slice.call(e, 0);
          }function C(e, t, n) {
            for (var i = [], r = [], o = 0; o < e.length;) {
              var a = t ? e[o][t] : e[o];x(r, a) < 0 && i.push(e[o]), r[o] = a, o++;
            }return n && (i = t ? i.sort(function (e, n) {
              return e[t] > n[t];
            }) : i.sort()), i;
          }function T(e, t) {
            for (var n, i, r = t[0].toUpperCase() + t.slice(1), a = 0; a < ce.length;) {
              if (n = ce[a], i = n ? n + r : t, i in e) return i;a++;
            }return o;
          }function k() {
            return ge++;
          }function S(e) {
            var t = e.ownerDocument;return t.defaultView || t.parentWindow;
          }function E(e, t) {
            var n = this;this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function (t) {
              p(e.options.enable, [e]) && n.handler(t);
            }, this.init();
          }function A(e) {
            var t,
                n = e.options.inputClass;return new (t = n ? n : be ? R : xe ? V : ye ? B : $)(e, O);
          }function O(e, t, n) {
            var i = n.pointers.length,
                r = n.changedPointers.length,
                o = t & Ee && 0 === i - r,
                a = t & (Oe | Pe) && 0 === i - r;n.isFirst = !!o, n.isFinal = !!a, o && (e.session = {}), n.eventType = t, P(e, n), e.emit("hammer.input", n), e.recognize(n), e.session.prevInput = n;
          }function P(e, t) {
            var n = e.session,
                i = t.pointers,
                r = i.length;n.firstInput || (n.firstInput = N(t)), r > 1 && !n.firstMultiple ? n.firstMultiple = N(t) : 1 === r && (n.firstMultiple = !1);var o = n.firstInput,
                a = n.firstMultiple,
                s = a ? a.center : o.center,
                l = t.center = j(i);t.timeStamp = ve(), t.deltaTime = t.timeStamp - o.timeStamp, t.angle = _(s, l), t.distance = I(s, l), q(n, t), t.offsetDirection = L(t.deltaX, t.deltaY), t.scale = a ? H(a.pointers, i) : 1, t.rotation = a ? F(a.pointers, i) : 0, D(n, t);var u = e.element;m(t.srcEvent.target, u) && (u = t.srcEvent.target), t.target = u;
          }function q(e, t) {
            var n = t.center,
                i = e.offsetDelta || {},
                r = e.prevDelta || {},
                o = e.prevInput || {};(t.eventType === Ee || o.eventType === Oe) && (r = e.prevDelta = { x: o.deltaX || 0, y: o.deltaY || 0 }, i = e.offsetDelta = { x: n.x, y: n.y }), t.deltaX = r.x + (n.x - i.x), t.deltaY = r.y + (n.y - i.y);
          }function D(e, t) {
            var n,
                i,
                r,
                a,
                s = e.lastInterval || t,
                l = t.timeStamp - s.timeStamp;if (t.eventType != Pe && (l > Se || s.velocity === o)) {
              var u = s.deltaX - t.deltaX,
                  c = s.deltaY - t.deltaY,
                  d = M(l, u, c);i = d.x, r = d.y, n = he(d.x) > he(d.y) ? d.x : d.y, a = L(u, c), e.lastInterval = t;
            } else n = s.velocity, i = s.velocityX, r = s.velocityY, a = s.direction;t.velocity = n, t.velocityX = i, t.velocityY = r, t.direction = a;
          }function N(e) {
            for (var t = [], n = 0; n < e.pointers.length;) {
              t[n] = { clientX: pe(e.pointers[n].clientX), clientY: pe(e.pointers[n].clientY) }, n++;
            }return { timeStamp: ve(), pointers: t, center: j(t), deltaX: e.deltaX, deltaY: e.deltaY };
          }function j(e) {
            var t = e.length;if (1 === t) return { x: pe(e[0].clientX), y: pe(e[0].clientY) };for (var n = 0, i = 0, r = 0; t > r;) {
              n += e[r].clientX, i += e[r].clientY, r++;
            }return { x: pe(n / t), y: pe(i / t) };
          }function M(e, t, n) {
            return { x: t / e || 0, y: n / e || 0 };
          }function L(e, t) {
            return e === t ? qe : he(e) >= he(t) ? e > 0 ? De : Ne : t > 0 ? je : Me;
          }function I(e, t, n) {
            n || (n = Fe);var i = t[n[0]] - e[n[0]],
                r = t[n[1]] - e[n[1]];return Math.sqrt(i * i + r * r);
          }function _(e, t, n) {
            n || (n = Fe);var i = t[n[0]] - e[n[0]],
                r = t[n[1]] - e[n[1]];return 180 * Math.atan2(r, i) / Math.PI;
          }function F(e, t) {
            return _(t[1], t[0], He) - _(e[1], e[0], He);
          }function H(e, t) {
            return I(t[0], t[1], He) / I(e[0], e[1], He);
          }function $() {
            this.evEl = Re, this.evWin = ze, this.allow = !0, this.pressed = !1, E.apply(this, arguments);
          }function R() {
            this.evEl = Xe, this.evWin = Be, E.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
          }function z() {
            this.evTarget = Ye, this.evWin = Ue, this.started = !1, E.apply(this, arguments);
          }function W(e, t) {
            var n = w(e.touches),
                i = w(e.changedTouches);return t & (Oe | Pe) && (n = C(n.concat(i), "identifier", !0)), [n, i];
          }function V() {
            this.evTarget = Ze, this.targetIds = {}, E.apply(this, arguments);
          }function X(e, t) {
            var n = w(e.touches),
                i = this.targetIds;if (t & (Ee | Ae) && 1 === n.length) return i[n[0].identifier] = !0, [n, n];var r,
                o,
                a = w(e.changedTouches),
                s = [],
                l = this.target;if (o = n.filter(function (e) {
              return m(e.target, l);
            }), t === Ee) for (r = 0; r < o.length;) {
              i[o[r].identifier] = !0, r++;
            }for (r = 0; r < a.length;) {
              i[a[r].identifier] && s.push(a[r]), t & (Oe | Pe) && delete i[a[r].identifier], r++;
            }return s.length ? [C(o.concat(s), "identifier", !0), s] : void 0;
          }function B() {
            E.apply(this, arguments);var e = f(this.handler, this);this.touch = new V(this.manager, e), this.mouse = new $(this.manager, e);
          }function Q(e, t) {
            this.manager = e, this.set(t);
          }function Y(e) {
            if (y(e, it)) return it;var t = y(e, rt),
                n = y(e, ot);return t && n ? rt + " " + ot : t || n ? t ? rt : ot : y(e, nt) ? nt : tt;
          }function U(e) {
            this.id = k(), this.manager = null, this.options = c(e || {}, this.defaults), this.options.enable = h(this.options.enable, !0), this.state = at, this.simultaneous = {}, this.requireFail = [];
          }function G(e) {
            return e & dt ? "cancel" : e & ut ? "end" : e & lt ? "move" : e & st ? "start" : "";
          }function Z(e) {
            return e == Me ? "down" : e == je ? "up" : e == De ? "left" : e == Ne ? "right" : "";
          }function J(e, t) {
            var n = t.manager;return n ? n.get(e) : e;
          }function K() {
            U.apply(this, arguments);
          }function ee() {
            K.apply(this, arguments), this.pX = null, this.pY = null;
          }function te() {
            K.apply(this, arguments);
          }function ne() {
            U.apply(this, arguments), this._timer = null, this._input = null;
          }function ie() {
            K.apply(this, arguments);
          }function re() {
            K.apply(this, arguments);
          }function oe() {
            U.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
          }function ae(e, t) {
            return t = t || {}, t.recognizers = h(t.recognizers, ae.defaults.preset), new se(e, t);
          }function se(e, t) {
            t = t || {}, this.options = c(t, ae.defaults), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = e, this.input = A(this), this.touchAction = new Q(this, this.options.touchAction), le(this, !0), l(t.recognizers, function (e) {
              var t = this.add(new e[0](e[1]));e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3]);
            }, this);
          }function le(e, t) {
            var n = e.element;l(e.options.cssProps, function (e, i) {
              n.style[T(n.style, i)] = t ? e : "";
            });
          }function ue(e, t) {
            var i = n.createEvent("Event");i.initEvent(e, !0, !0), i.gesture = t, t.target.dispatchEvent(i);
          }var ce = ["", "webkit", "moz", "MS", "ms", "o"],
              de = n.createElement("div"),
              fe = "function",
              pe = Math.round,
              he = Math.abs,
              ve = Date.now,
              ge = 1,
              me = /mobile|tablet|ip(ad|hone|od)|android/i,
              ye = "ontouchstart" in t,
              be = T(t, "PointerEvent") !== o,
              xe = ye && me.test(navigator.userAgent),
              we = "touch",
              Ce = "pen",
              Te = "mouse",
              ke = "kinect",
              Se = 25,
              Ee = 1,
              Ae = 2,
              Oe = 4,
              Pe = 8,
              qe = 1,
              De = 2,
              Ne = 4,
              je = 8,
              Me = 16,
              Le = De | Ne,
              Ie = je | Me,
              _e = Le | Ie,
              Fe = ["x", "y"],
              He = ["clientX", "clientY"];E.prototype = { handler: function handler() {}, init: function init() {
              this.evEl && v(this.element, this.evEl, this.domHandler), this.evTarget && v(this.target, this.evTarget, this.domHandler), this.evWin && v(S(this.element), this.evWin, this.domHandler);
            }, destroy: function destroy() {
              this.evEl && g(this.element, this.evEl, this.domHandler), this.evTarget && g(this.target, this.evTarget, this.domHandler), this.evWin && g(S(this.element), this.evWin, this.domHandler);
            } };var $e = { mousedown: Ee, mousemove: Ae, mouseup: Oe },
              Re = "mousedown",
              ze = "mousemove mouseup";d($, E, { handler: function handler(e) {
              var t = $e[e.type];t & Ee && 0 === e.button && (this.pressed = !0), t & Ae && 1 !== e.which && (t = Oe), this.pressed && this.allow && (t & Oe && (this.pressed = !1), this.callback(this.manager, t, { pointers: [e], changedPointers: [e], pointerType: Te, srcEvent: e }));
            } });var We = { pointerdown: Ee, pointermove: Ae, pointerup: Oe, pointercancel: Pe, pointerout: Pe },
              Ve = { 2: we, 3: Ce, 4: Te, 5: ke },
              Xe = "pointerdown",
              Be = "pointermove pointerup pointercancel";t.MSPointerEvent && (Xe = "MSPointerDown", Be = "MSPointerMove MSPointerUp MSPointerCancel"), d(R, E, { handler: function handler(e) {
              var t = this.store,
                  n = !1,
                  i = e.type.toLowerCase().replace("ms", ""),
                  r = We[i],
                  o = Ve[e.pointerType] || e.pointerType,
                  a = o == we,
                  s = x(t, e.pointerId, "pointerId");r & Ee && (0 === e.button || a) ? 0 > s && (t.push(e), s = t.length - 1) : r & (Oe | Pe) && (n = !0), 0 > s || (t[s] = e, this.callback(this.manager, r, { pointers: t, changedPointers: [e], pointerType: o, srcEvent: e }), n && t.splice(s, 1));
            } });var Qe = { touchstart: Ee, touchmove: Ae, touchend: Oe, touchcancel: Pe },
              Ye = "touchstart",
              Ue = "touchstart touchmove touchend touchcancel";d(z, E, { handler: function handler(e) {
              var t = Qe[e.type];if (t === Ee && (this.started = !0), this.started) {
                var n = W.call(this, e, t);t & (Oe | Pe) && 0 === n[0].length - n[1].length && (this.started = !1), this.callback(this.manager, t, { pointers: n[0], changedPointers: n[1], pointerType: we, srcEvent: e });
              }
            } });var Ge = { touchstart: Ee, touchmove: Ae, touchend: Oe, touchcancel: Pe },
              Ze = "touchstart touchmove touchend touchcancel";d(V, E, { handler: function handler(e) {
              var t = Ge[e.type],
                  n = X.call(this, e, t);n && this.callback(this.manager, t, { pointers: n[0], changedPointers: n[1], pointerType: we, srcEvent: e });
            } }), d(B, E, { handler: function handler(e, t, n) {
              var i = n.pointerType == we,
                  r = n.pointerType == Te;if (i) this.mouse.allow = !1;else if (r && !this.mouse.allow) return;t & (Oe | Pe) && (this.mouse.allow = !0), this.callback(e, t, n);
            }, destroy: function destroy() {
              this.touch.destroy(), this.mouse.destroy();
            } });var Je = T(de.style, "touchAction"),
              Ke = Je !== o,
              et = "compute",
              tt = "auto",
              nt = "manipulation",
              it = "none",
              rt = "pan-x",
              ot = "pan-y";Q.prototype = { set: function set(e) {
              e == et && (e = this.compute()), Ke && (this.manager.element.style[Je] = e), this.actions = e.toLowerCase().trim();
            }, update: function update() {
              this.set(this.manager.options.touchAction);
            }, compute: function compute() {
              var e = [];return l(this.manager.recognizers, function (t) {
                p(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()));
              }), Y(e.join(" "));
            }, preventDefaults: function preventDefaults(e) {
              if (!Ke) {
                var t = e.srcEvent,
                    n = e.offsetDirection;if (this.manager.session.prevented) return void t.preventDefault();var i = this.actions,
                    r = y(i, it),
                    o = y(i, ot),
                    a = y(i, rt);return r || o && n & Le || a && n & Ie ? this.preventSrc(t) : void 0;
              }
            }, preventSrc: function preventSrc(e) {
              this.manager.session.prevented = !0, e.preventDefault();
            } };var at = 1,
              st = 2,
              lt = 4,
              ut = 8,
              ct = ut,
              dt = 16,
              ft = 32;U.prototype = { defaults: {}, set: function set(e) {
              return u(this.options, e), this.manager && this.manager.touchAction.update(), this;
            }, recognizeWith: function recognizeWith(e) {
              if (s(e, "recognizeWith", this)) return this;var t = this.simultaneous;return e = J(e, this), t[e.id] || (t[e.id] = e, e.recognizeWith(this)), this;
            }, dropRecognizeWith: function dropRecognizeWith(e) {
              return s(e, "dropRecognizeWith", this) ? this : (e = J(e, this), delete this.simultaneous[e.id], this);
            }, requireFailure: function requireFailure(e) {
              if (s(e, "requireFailure", this)) return this;var t = this.requireFail;return e = J(e, this), -1 === x(t, e) && (t.push(e), e.requireFailure(this)), this;
            }, dropRequireFailure: function dropRequireFailure(e) {
              if (s(e, "dropRequireFailure", this)) return this;e = J(e, this);var t = x(this.requireFail, e);return t > -1 && this.requireFail.splice(t, 1), this;
            }, hasRequireFailures: function hasRequireFailures() {
              return this.requireFail.length > 0;
            }, canRecognizeWith: function canRecognizeWith(e) {
              return !!this.simultaneous[e.id];
            }, emit: function emit(e) {
              function t(t) {
                n.manager.emit(n.options.event + (t ? G(i) : ""), e);
              }var n = this,
                  i = this.state;ut > i && t(!0), t(), i >= ut && t(!0);
            }, tryEmit: function tryEmit(e) {
              return this.canEmit() ? this.emit(e) : void (this.state = ft);
            }, canEmit: function canEmit() {
              for (var e = 0; e < this.requireFail.length;) {
                if (!(this.requireFail[e].state & (ft | at))) return !1;e++;
              }return !0;
            }, recognize: function recognize(e) {
              var t = u({}, e);return p(this.options.enable, [this, t]) ? (this.state & (ct | dt | ft) && (this.state = at), this.state = this.process(t), void (this.state & (st | lt | ut | dt) && this.tryEmit(t))) : (this.reset(), void (this.state = ft));
            }, process: function process() {}, getTouchAction: function getTouchAction() {}, reset: function reset() {} }, d(K, U, { defaults: { pointers: 1 }, attrTest: function attrTest(e) {
              var t = this.options.pointers;return 0 === t || e.pointers.length === t;
            }, process: function process(e) {
              var t = this.state,
                  n = e.eventType,
                  i = t & (st | lt),
                  r = this.attrTest(e);return i && (n & Pe || !r) ? t | dt : i || r ? n & Oe ? t | ut : t & st ? t | lt : st : ft;
            } }), d(ee, K, { defaults: { event: "pan", threshold: 10, pointers: 1, direction: _e }, getTouchAction: function getTouchAction() {
              var e = this.options.direction,
                  t = [];return e & Le && t.push(ot), e & Ie && t.push(rt), t;
            }, directionTest: function directionTest(e) {
              var t = this.options,
                  n = !0,
                  i = e.distance,
                  r = e.direction,
                  o = e.deltaX,
                  a = e.deltaY;return r & t.direction || (t.direction & Le ? (r = 0 === o ? qe : 0 > o ? De : Ne, n = o != this.pX, i = Math.abs(e.deltaX)) : (r = 0 === a ? qe : 0 > a ? je : Me, n = a != this.pY, i = Math.abs(e.deltaY))), e.direction = r, n && i > t.threshold && r & t.direction;
            }, attrTest: function attrTest(e) {
              return K.prototype.attrTest.call(this, e) && (this.state & st || !(this.state & st) && this.directionTest(e));
            }, emit: function emit(e) {
              this.pX = e.deltaX, this.pY = e.deltaY;var t = Z(e.direction);t && this.manager.emit(this.options.event + t, e), this._super.emit.call(this, e);
            } }), d(te, K, { defaults: { event: "pinch", threshold: 0, pointers: 2 }, getTouchAction: function getTouchAction() {
              return [it];
            }, attrTest: function attrTest(e) {
              return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || this.state & st);
            }, emit: function emit(e) {
              if (this._super.emit.call(this, e), 1 !== e.scale) {
                var t = e.scale < 1 ? "in" : "out";this.manager.emit(this.options.event + t, e);
              }
            } }), d(ne, U, { defaults: { event: "press", pointers: 1, time: 500, threshold: 5 }, getTouchAction: function getTouchAction() {
              return [tt];
            }, process: function process(e) {
              var t = this.options,
                  n = e.pointers.length === t.pointers,
                  i = e.distance < t.threshold,
                  r = e.deltaTime > t.time;if (this._input = e, !i || !n || e.eventType & (Oe | Pe) && !r) this.reset();else if (e.eventType & Ee) this.reset(), this._timer = a(function () {
                this.state = ct, this.tryEmit();
              }, t.time, this);else if (e.eventType & Oe) return ct;return ft;
            }, reset: function reset() {
              clearTimeout(this._timer);
            }, emit: function emit(e) {
              this.state === ct && (e && e.eventType & Oe ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = ve(), this.manager.emit(this.options.event, this._input)));
            } }), d(ie, K, { defaults: { event: "rotate", threshold: 0, pointers: 2 }, getTouchAction: function getTouchAction() {
              return [it];
            }, attrTest: function attrTest(e) {
              return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || this.state & st);
            } }), d(re, K, { defaults: { event: "swipe", threshold: 10, velocity: .65, direction: Le | Ie, pointers: 1 }, getTouchAction: function getTouchAction() {
              return ee.prototype.getTouchAction.call(this);
            }, attrTest: function attrTest(e) {
              var t,
                  n = this.options.direction;return n & (Le | Ie) ? t = e.velocity : n & Le ? t = e.velocityX : n & Ie && (t = e.velocityY), this._super.attrTest.call(this, e) && n & e.direction && e.distance > this.options.threshold && he(t) > this.options.velocity && e.eventType & Oe;
            }, emit: function emit(e) {
              var t = Z(e.direction);t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e);
            } }), d(oe, U, { defaults: { event: "tap", pointers: 1, taps: 1, interval: 300, time: 250, threshold: 2, posThreshold: 10 }, getTouchAction: function getTouchAction() {
              return [nt];
            }, process: function process(e) {
              var t = this.options,
                  n = e.pointers.length === t.pointers,
                  i = e.distance < t.threshold,
                  r = e.deltaTime < t.time;if (this.reset(), e.eventType & Ee && 0 === this.count) return this.failTimeout();if (i && r && n) {
                if (e.eventType != Oe) return this.failTimeout();var o = this.pTime ? e.timeStamp - this.pTime < t.interval : !0,
                    s = !this.pCenter || I(this.pCenter, e.center) < t.posThreshold;this.pTime = e.timeStamp, this.pCenter = e.center, s && o ? this.count += 1 : this.count = 1, this._input = e;var l = this.count % t.taps;if (0 === l) return this.hasRequireFailures() ? (this._timer = a(function () {
                  this.state = ct, this.tryEmit();
                }, t.interval, this), st) : ct;
              }return ft;
            }, failTimeout: function failTimeout() {
              return this._timer = a(function () {
                this.state = ft;
              }, this.options.interval, this), ft;
            }, reset: function reset() {
              clearTimeout(this._timer);
            }, emit: function emit() {
              this.state == ct && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
            } }), ae.VERSION = "2.0.4", ae.defaults = { domEvents: !1, touchAction: et, enable: !0, inputTarget: null, inputClass: null, preset: [[ie, { enable: !1 }], [te, { enable: !1 }, ["rotate"]], [re, { direction: Le }], [ee, { direction: Le }, ["swipe"]], [oe], [oe, { event: "doubletap", taps: 2 }, ["tap"]], [ne]], cssProps: { userSelect: "default", touchSelect: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)" } };var pt = 1,
              ht = 2;se.prototype = { set: function set(e) {
              return u(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this;
            }, stop: function stop(e) {
              this.session.stopped = e ? ht : pt;
            }, recognize: function recognize(e) {
              var t = this.session;if (!t.stopped) {
                this.touchAction.preventDefaults(e);var n,
                    i = this.recognizers,
                    r = t.curRecognizer;(!r || r && r.state & ct) && (r = t.curRecognizer = null);for (var o = 0; o < i.length;) {
                  n = i[o], t.stopped === ht || r && n != r && !n.canRecognizeWith(r) ? n.reset() : n.recognize(e), !r && n.state & (st | lt | ut) && (r = t.curRecognizer = n), o++;
                }
              }
            }, get: function get(e) {
              if (e instanceof U) return e;for (var t = this.recognizers, n = 0; n < t.length; n++) {
                if (t[n].options.event == e) return t[n];
              }return null;
            }, add: function add(e) {
              if (s(e, "add", this)) return this;var t = this.get(e.options.event);return t && this.remove(t), this.recognizers.push(e), e.manager = this, this.touchAction.update(), e;
            }, remove: function remove(e) {
              if (s(e, "remove", this)) return this;var t = this.recognizers;return e = this.get(e), t.splice(x(t, e), 1), this.touchAction.update(), this;
            }, on: function on(e, t) {
              var n = this.handlers;return l(b(e), function (e) {
                n[e] = n[e] || [], n[e].push(t);
              }), this;
            }, off: function off(e, t) {
              var n = this.handlers;return l(b(e), function (e) {
                t ? n[e].splice(x(n[e], t), 1) : delete n[e];
              }), this;
            }, emit: function emit(e, t) {
              this.options.domEvents && ue(e, t);var n = this.handlers[e] && this.handlers[e].slice();if (n && n.length) {
                t.type = e, t.preventDefault = function () {
                  t.srcEvent.preventDefault();
                };for (var i = 0; i < n.length;) {
                  n[i](t), i++;
                }
              }
            }, destroy: function destroy() {
              this.element && le(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
            } }, u(ae, { INPUT_START: Ee, INPUT_MOVE: Ae, INPUT_END: Oe, INPUT_CANCEL: Pe, STATE_POSSIBLE: at, STATE_BEGAN: st, STATE_CHANGED: lt, STATE_ENDED: ut, STATE_RECOGNIZED: ct, STATE_CANCELLED: dt, STATE_FAILED: ft, DIRECTION_NONE: qe, DIRECTION_LEFT: De, DIRECTION_RIGHT: Ne, DIRECTION_UP: je, DIRECTION_DOWN: Me, DIRECTION_HORIZONTAL: Le, DIRECTION_VERTICAL: Ie, DIRECTION_ALL: _e, Manager: se, Input: E, TouchAction: Q, TouchInput: V, MouseInput: $, PointerEventInput: R, TouchMouseInput: B, SingleTouchInput: z, Recognizer: U, AttrRecognizer: K, Tap: oe, Pan: ee, Swipe: re, Pinch: te, Rotate: ie, Press: ne, on: v, off: g, each: l, merge: c, extend: u, inherit: d, bindFn: f, prefixed: T }), (typeof r === "undefined" ? "undefined" : _typeof(r)) == fe && r.amd ? r(function () {
            return ae;
          }) : "undefined" != typeof e && e.exports ? e.exports = ae : t[i] = ae;
        }(window, document, "Hammer"), function (e) {
          "function" == typeof r && r.amd ? r(["jquery", "hammerjs"], e) : "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? e(i("jquery"), i("hammerjs")) : e(a, Hammer);
        }(function (e, t) {
          function n(n, i) {
            var r = e(n);r.data("hammer") || r.data("hammer", new t(r[0], i));
          }e.fn.hammer = function (e) {
            return this.each(function () {
              n(this, e);
            });
          }, t.Manager.prototype.emit = function (t) {
            return function (n, i) {
              t.call(this, n, i), e(this.element).trigger({ type: n, gesture: i });
            };
          }(t.Manager.prototype.emit);
        }), function (e) {
          e.Package ? Materialize = {} : e.Materialize = {};
        }(window), Materialize.guid = function () {
          function e() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
          }return function () {
            return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e();
          };
        }(), Materialize.elementOrParentIsFixed = function (e) {
          var t = $(e),
              n = t.add(t.parents()),
              i = !1;return n.each(function () {
            return "fixed" === $(this).css("position") ? (i = !0, !1) : void 0;
          }), i;
        };var s;s = $ ? $.Velocity : a ? a.Velocity : Velocity, function (e) {
          e.fn.collapsible = function (t) {
            var n = { accordion: void 0 };return t = e.extend(n, t), this.each(function () {
              function n(t) {
                s = a.find("> li > .collapsible-header"), t.hasClass("active") ? t.parent().addClass("active") : t.parent().removeClass("active"), t.parent().hasClass("active") ? t.siblings(".collapsible-body").stop(!0, !1).slideDown({ duration: 350, easing: "easeOutQuart", queue: !1, complete: function complete() {
                    e(this).css("height", "");
                  } }) : t.siblings(".collapsible-body").stop(!0, !1).slideUp({ duration: 350, easing: "easeOutQuart", queue: !1, complete: function complete() {
                    e(this).css("height", "");
                  } }), s.not(t).removeClass("active").parent().removeClass("active"), s.not(t).parent().children(".collapsible-body").stop(!0, !1).slideUp({ duration: 350, easing: "easeOutQuart", queue: !1, complete: function complete() {
                    e(this).css("height", "");
                  } });
              }function i(t) {
                t.hasClass("active") ? t.parent().addClass("active") : t.parent().removeClass("active"), t.parent().hasClass("active") ? t.siblings(".collapsible-body").stop(!0, !1).slideDown({ duration: 350, easing: "easeOutQuart", queue: !1, complete: function complete() {
                    e(this).css("height", "");
                  } }) : t.siblings(".collapsible-body").stop(!0, !1).slideUp({ duration: 350, easing: "easeOutQuart", queue: !1, complete: function complete() {
                    e(this).css("height", "");
                  } });
              }function r(e) {
                var t = o(e);return t.length > 0;
              }function o(e) {
                return e.closest("li > .collapsible-header");
              }var a = e(this),
                  s = e(this).find("> li > .collapsible-header"),
                  l = a.data("collapsible");a.off("click.collapse", "> li > .collapsible-header"), s.off("click.collapse"), a.on("click.collapse", "> li > .collapsible-header", function (a) {
                var s = e(this),
                    u = e(a.target);r(u) && (u = o(u)), u.toggleClass("active"), t.accordion || "accordion" === l || void 0 === l ? n(u) : (i(u), s.hasClass("active") && i(s));
              });var s = a.find("> li > .collapsible-header");t.accordion || "accordion" === l || void 0 === l ? n(s.filter(".active").first()) : s.filter(".active").each(function () {
                i(e(this));
              });
            });
          }, e(document).ready(function () {
            e(".collapsible").collapsible();
          });
        }(a), function (e) {
          e.fn.scrollTo = function (t) {
            return e(this).scrollTop(e(this).scrollTop() - e(this).offset().top + e(t).offset().top), this;
          }, e.fn.dropdown = function (t) {
            var n = { inDuration: 300, outDuration: 225, constrain_width: !0, hover: !1, gutter: 0, belowOrigin: !1, alignment: "left" };this.each(function () {
              function i() {
                void 0 !== a.data("induration") && (s.inDuration = a.data("inDuration")), void 0 !== a.data("outduration") && (s.outDuration = a.data("outDuration")), void 0 !== a.data("constrainwidth") && (s.constrain_width = a.data("constrainwidth")), void 0 !== a.data("hover") && (s.hover = a.data("hover")), void 0 !== a.data("gutter") && (s.gutter = a.data("gutter")), void 0 !== a.data("beloworigin") && (s.belowOrigin = a.data("beloworigin")), void 0 !== a.data("alignment") && (s.alignment = a.data("alignment"));
              }function r(t) {
                "focus" === t && (l = !0), i(), u.addClass("active"), a.addClass("active"), s.constrain_width === !0 ? u.css("width", a.outerWidth()) : u.css("white-space", "nowrap");var n = window.innerHeight,
                    r = a.innerHeight(),
                    o = a.offset().left,
                    c = a.offset().top - e(window).scrollTop(),
                    d = s.alignment,
                    f = 0,
                    p = 0,
                    h = 0;s.belowOrigin === !0 && (h = r);var v = 0,
                    g = a.parent();if (!g.is("body") && g[0].scrollHeight > g[0].clientHeight && (v = g[0].scrollTop), o + u.innerWidth() > e(window).width() ? d = "right" : o - u.innerWidth() + a.innerWidth() < 0 && (d = "left"), c + u.innerHeight() > n) if (c + r - u.innerHeight() < 0) {
                  var m = n - c - h;u.css("max-height", m);
                } else h || (h += r), h -= u.innerHeight();if ("left" === d) f = s.gutter, p = a.position().left + f;else if ("right" === d) {
                  var y = a.position().left + a.outerWidth() - u.outerWidth();f = -s.gutter, p = y + f;
                }u.css({ position: "absolute", top: a.position().top + h + v, left: p }), u.stop(!0, !0).css("opacity", 0).slideDown({ queue: !1, duration: s.inDuration, easing: "easeOutCubic", complete: function complete() {
                    e(this).css("height", "");
                  } }).animate({ opacity: 1 }, { queue: !1, duration: s.inDuration, easing: "easeOutSine" });
              }function o() {
                l = !1, u.fadeOut(s.outDuration), u.removeClass("active"), a.removeClass("active"), setTimeout(function () {
                  u.css("max-height", "");
                }, s.outDuration);
              }var a = e(this),
                  s = e.extend({}, n, t),
                  l = !1,
                  u = e("#" + a.attr("data-activates"));if (i(), a.after(u), s.hover) {
                var c = !1;a.unbind("click." + a.attr("id")), a.on("mouseenter", function (e) {
                  c === !1 && (r(), c = !0);
                }), a.on("mouseleave", function (t) {
                  var n = t.toElement || t.relatedTarget;e(n).closest(".dropdown-content").is(u) || (u.stop(!0, !0), o(), c = !1);
                }), u.on("mouseleave", function (t) {
                  var n = t.toElement || t.relatedTarget;e(n).closest(".dropdown-button").is(a) || (u.stop(!0, !0), o(), c = !1);
                });
              } else a.unbind("click." + a.attr("id")), a.bind("click." + a.attr("id"), function (t) {
                l || (a[0] != t.currentTarget || a.hasClass("active") || 0 !== e(t.target).closest(".dropdown-content").length ? a.hasClass("active") && (o(), e(document).unbind("click." + u.attr("id") + " touchstart." + u.attr("id"))) : (t.preventDefault(), r("click")), u.hasClass("active") && e(document).bind("click." + u.attr("id") + " touchstart." + u.attr("id"), function (t) {
                  u.is(t.target) || a.is(t.target) || a.find(t.target).length || (o(), e(document).unbind("click." + u.attr("id") + " touchstart." + u.attr("id")));
                }));
              });a.on("open", function (e, t) {
                r(t);
              }), a.on("close", o);
            });
          }, e(document).ready(function () {
            e(".dropdown-button").dropdown();
          });
        }(a), function (e) {
          var t = 0,
              n = 0,
              i = function i() {
            return n++, "materialize-lean-overlay-" + n;
          };e.fn.extend({ openModal: function openModal(n) {
              var r = e("body"),
                  o = r.innerWidth();r.css("overflow", "hidden"), r.width(o);var a = { opacity: .5, in_duration: 350, out_duration: 250, ready: void 0, complete: void 0, dismissible: !0, starting_top: "4%" },
                  s = e(this);s.hasClass("open") || (overlayID = i(), $overlay = e('<div class="lean-overlay"></div>'), lStack = ++t, $overlay.attr("id", overlayID).css("z-index", 1e3 + 2 * lStack), s.data("overlay-id", overlayID).css("z-index", 1e3 + 2 * lStack + 1), s.addClass("open"), e("body").append($overlay), n = e.extend(a, n), n.dismissible && ($overlay.click(function () {
                s.closeModal(n);
              }), e(document).on("keyup.leanModal" + overlayID, function (e) {
                27 === e.keyCode && s.closeModal(n);
              })), s.find(".modal-close").on("click.close", function (e) {
                s.closeModal(n);
              }), $overlay.css({ display: "block", opacity: 0 }), s.css({ display: "block", opacity: 0 }), $overlay.velocity({ opacity: n.opacity }, { duration: n.in_duration, queue: !1, ease: "easeOutCubic" }), s.data("associated-overlay", $overlay[0]), s.hasClass("bottom-sheet") ? s.velocity({ bottom: "0", opacity: 1 }, { duration: n.in_duration, queue: !1, ease: "easeOutCubic", complete: function complete() {
                  "function" == typeof n.ready && n.ready();
                } }) : (e.Velocity.hook(s, "scaleX", .7), s.css({ top: n.starting_top }), s.velocity({ top: "10%", opacity: 1, scaleX: "1" }, { duration: n.in_duration, queue: !1, ease: "easeOutCubic", complete: function complete() {
                  "function" == typeof n.ready && n.ready();
                } })));
            } }), e.fn.extend({ closeModal: function closeModal(n) {
              var i = { out_duration: 250, complete: void 0 },
                  r = e(this),
                  o = r.data("overlay-id"),
                  a = e("#" + o);r.removeClass("open"), n = e.extend(i, n), e("body").css({ overflow: "", width: "" }), r.find(".modal-close").off("click.close"), e(document).off("keyup.leanModal" + o), a.velocity({ opacity: 0 }, { duration: n.out_duration, queue: !1, ease: "easeOutQuart" }), r.hasClass("bottom-sheet") ? r.velocity({ bottom: "-100%", opacity: 0 }, { duration: n.out_duration, queue: !1, ease: "easeOutCubic", complete: function complete() {
                  a.css({ display: "none" }), "function" == typeof n.complete && n.complete(), a.remove(), t--;
                } }) : r.velocity({ top: n.starting_top, opacity: 0, scaleX: .7 }, { duration: n.out_duration, complete: function complete() {
                  e(this).css("display", "none"), "function" == typeof n.complete && n.complete(), a.remove(), t--;
                } });
            } }), e.fn.extend({ leanModal: function leanModal(t) {
              return this.each(function () {
                var n = { starting_top: "4%" },
                    i = e.extend(n, t);e(this).click(function (t) {
                  i.starting_top = (e(this).offset().top - e(window).scrollTop()) / 1.15;var n = e(this).attr("href") || "#" + e(this).data("target");e(n).openModal(i), t.preventDefault();
                });
              });
            } });
        }(a), function (e) {
          e.fn.materialbox = function () {
            return this.each(function () {
              function t() {
                o = !1;var t = l.parent(".material-placeholder"),
                    i = (window.innerWidth, window.innerHeight, l.data("width")),
                    a = l.data("height");l.velocity("stop", !0), e("#materialbox-overlay").velocity("stop", !0), e(".materialbox-caption").velocity("stop", !0), e("#materialbox-overlay").velocity({ opacity: 0 }, { duration: s, queue: !1, easing: "easeOutQuad", complete: function complete() {
                    r = !1, e(this).remove();
                  } }), l.velocity({ width: i, height: a, left: 0, top: 0 }, { duration: s, queue: !1, easing: "easeOutQuad" }), e(".materialbox-caption").velocity({ opacity: 0 }, { duration: s, queue: !1, easing: "easeOutQuad", complete: function complete() {
                    t.css({ height: "", width: "", position: "", top: "", left: "" }), l.css({ height: "", top: "", left: "", width: "", "max-width": "", position: "", "z-index": "" }), l.removeClass("active"), o = !0, e(this).remove(), n && n.css("overflow", "");
                  } });
              }if (!e(this).hasClass("initialized")) {
                e(this).addClass("initialized");var n,
                    i,
                    r = !1,
                    o = !0,
                    a = 275,
                    s = 200,
                    l = e(this),
                    u = e("<div></div>").addClass("material-placeholder");l.wrap(u), l.on("click", function () {
                  var s = l.parent(".material-placeholder"),
                      u = window.innerWidth,
                      c = window.innerHeight,
                      d = l.width(),
                      f = l.height();if (o === !1) return t(), !1;if (r && o === !0) return t(), !1;for (o = !1, l.addClass("active"), r = !0, s.css({ width: s[0].getBoundingClientRect().width, height: s[0].getBoundingClientRect().height, position: "relative", top: 0, left: 0 }), n = void 0, i = s[0].parentNode; null !== i && !e(i).is(document);) {
                    var p = e(i);"visible" !== p.css("overflow") && (p.css("overflow", "visible"), n = void 0 === n ? p : n.add(p)), i = i.parentNode;
                  }l.css({ position: "absolute", "z-index": 1e3 }).data("width", d).data("height", f);var h = e('<div id="materialbox-overlay"></div>').css({ opacity: 0 }).click(function () {
                    o === !0 && t();
                  });if (l.before(h), h.velocity({ opacity: 1 }, { duration: a, queue: !1, easing: "easeOutQuad" }), "" !== l.data("caption")) {
                    var v = e('<div class="materialbox-caption"></div>');v.text(l.data("caption")), e("body").append(v), v.css({ display: "inline" }), v.velocity({ opacity: 1 }, { duration: a, queue: !1, easing: "easeOutQuad" });
                  }var g = 0,
                      m = d / u,
                      y = f / c,
                      b = 0,
                      x = 0;m > y ? (g = f / d, b = .9 * u, x = .9 * u * g) : (g = d / f, b = .9 * c * g, x = .9 * c), l.hasClass("responsive-img") ? l.velocity({ "max-width": b, width: d }, { duration: 0, queue: !1, complete: function complete() {
                      l.css({ left: 0, top: 0 }).velocity({ height: x, width: b, left: e(document).scrollLeft() + u / 2 - l.parent(".material-placeholder").offset().left - b / 2, top: e(document).scrollTop() + c / 2 - l.parent(".material-placeholder").offset().top - x / 2 }, { duration: a, queue: !1, easing: "easeOutQuad", complete: function complete() {
                          o = !0;
                        } });
                    } }) : l.css("left", 0).css("top", 0).velocity({ height: x, width: b, left: e(document).scrollLeft() + u / 2 - l.parent(".material-placeholder").offset().left - b / 2, top: e(document).scrollTop() + c / 2 - l.parent(".material-placeholder").offset().top - x / 2 }, { duration: a, queue: !1, easing: "easeOutQuad", complete: function complete() {
                      o = !0;
                    } });
                }), e(window).scroll(function () {
                  r && t();
                }), e(document).keyup(function (e) {
                  27 === e.keyCode && o === !0 && r && t();
                });
              }
            });
          }, e(document).ready(function () {
            e(".materialboxed").materialbox();
          });
        }(a), function (e) {
          e.fn.parallax = function () {
            var t = e(window).width();return this.each(function (n) {
              function i(n) {
                var i;i = 601 > t ? r.height() > 0 ? r.height() : r.children("img").height() : r.height() > 0 ? r.height() : 500;var o = r.children("img").first(),
                    a = o.height(),
                    s = a - i,
                    l = r.offset().top + i,
                    u = r.offset().top,
                    c = e(window).scrollTop(),
                    d = window.innerHeight,
                    f = c + d,
                    p = (f - u) / (i + d),
                    h = Math.round(s * p);n && o.css("display", "block"), l > c && c + d > u && o.css("transform", "translate3D(-50%," + h + "px, 0)");
              }var r = e(this);r.addClass("parallax"), r.children("img").one("load", function () {
                i(!0);
              }).each(function () {
                this.complete && e(this).load();
              }), e(window).scroll(function () {
                t = e(window).width(), i(!1);
              }), e(window).resize(function () {
                t = e(window).width(), i(!1);
              });
            });
          };
        }(a), function (e) {
          var t = { init: function init() {
              return this.each(function () {
                var t = e(this);e(window).width(), t.width("100%");var n,
                    i,
                    r = t.find("li.tab a"),
                    o = t.width(),
                    a = Math.max(o, t[0].scrollWidth) / r.length,
                    s = 0;n = e(r.filter('[href="' + location.hash + '"]')), 0 === n.length && (n = e(this).find("li.tab a.active").first()), 0 === n.length && (n = e(this).find("li.tab a").first()), n.addClass("active"), s = r.index(n), 0 > s && (s = 0), void 0 !== n[0] && (i = e(n[0].hash)), t.append('<div class="indicator"></div>');var l = t.find(".indicator");t.is(":visible") && (l.css({ right: o - (s + 1) * a }), l.css({ left: s * a })), e(window).resize(function () {
                  o = t.width(), a = Math.max(o, t[0].scrollWidth) / r.length, 0 > s && (s = 0), 0 !== a && 0 !== o && (l.css({ right: o - (s + 1) * a }), l.css({ left: s * a }));
                }), r.not(n).each(function () {
                  e(this.hash).hide();
                }), t.on("click", "a", function (u) {
                  if (e(this).parent().hasClass("disabled")) return void u.preventDefault();o = t.width(), a = Math.max(o, t[0].scrollWidth) / r.length, n.removeClass("active"), void 0 !== i && i.hide(), n = e(this), i = e(this.hash), r = t.find("li.tab a"), n.addClass("active");var c = s;s = r.index(e(this)), 0 > s && (s = 0), void 0 !== i && i.show(), s - c >= 0 ? (l.velocity({ right: o - (s + 1) * a }, { duration: 300, queue: !1, easing: "easeOutQuad" }), l.velocity({ left: s * a }, { duration: 300, queue: !1, easing: "easeOutQuad", delay: 90 })) : (l.velocity({ left: s * a }, { duration: 300, queue: !1, easing: "easeOutQuad" }), l.velocity({ right: o - (s + 1) * a }, { duration: 300, queue: !1, easing: "easeOutQuad", delay: 90 })), u.preventDefault();
                });
              });
            }, select_tab: function select_tab(e) {
              this.find('a[href="#' + e + '"]').trigger("click");
            } };e.fn.tabs = function (n) {
            return t[n] ? t[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != (typeof n === "undefined" ? "undefined" : _typeof(n)) && n ? void e.error("Method " + n + " does not exist on jQuery.tooltip") : t.init.apply(this, arguments);
          }, e(document).ready(function () {
            e("ul.tabs").tabs();
          });
        }(a), function (e) {
          e.fn.tooltip = function (n) {
            var i = 5,
                r = { delay: 350 };return "remove" === n ? (this.each(function () {
              e("#" + e(this).attr("data-tooltip-id")).remove(), e(this).off("mouseenter.tooltip mouseleave.tooltip");
            }), !1) : (n = e.extend(r, n), this.each(function () {
              var r = Materialize.guid(),
                  o = e(this);o.attr("data-tooltip-id", r);var a = e("<span></span>").text(o.attr("data-tooltip")),
                  s = e("<div></div>");s.addClass("material-tooltip").append(a).appendTo(e("body")).attr("id", r);var l = e("<div></div>").addClass("backdrop");l.appendTo(s), l.css({ top: 0, left: 0 }), o.off("mouseenter.tooltip mouseleave.tooltip");var u,
                  c = !1;o.on({ "mouseenter.tooltip": function mouseenterTooltip(e) {
                  var r = o.attr("data-delay");r = void 0 === r || "" === r ? n.delay : r, u = setTimeout(function () {
                    c = !0, s.velocity("stop"), l.velocity("stop"), s.css({ display: "block", left: "0px", top: "0px" }), s.children("span").text(o.attr("data-tooltip"));var e,
                        n,
                        r,
                        a = o.outerWidth(),
                        u = o.outerHeight(),
                        d = o.attr("data-position"),
                        f = s.outerHeight(),
                        p = s.outerWidth(),
                        h = "0px",
                        v = "0px",
                        g = 8;"top" === d ? (e = o.offset().top - f - i, n = o.offset().left + a / 2 - p / 2, r = t(n, e, p, f), h = "-10px", l.css({ borderRadius: "14px 14px 0 0", transformOrigin: "50% 90%", marginTop: f, marginLeft: p / 2 - l.width() / 2 })) : "left" === d ? (e = o.offset().top + u / 2 - f / 2, n = o.offset().left - p - i, r = t(n, e, p, f), v = "-10px", l.css({ width: "14px", height: "14px", borderRadius: "14px 0 0 14px", transformOrigin: "95% 50%", marginTop: f / 2, marginLeft: p })) : "right" === d ? (e = o.offset().top + u / 2 - f / 2, n = o.offset().left + a + i, r = t(n, e, p, f), v = "+10px", l.css({ width: "14px", height: "14px", borderRadius: "0 14px 14px 0", transformOrigin: "5% 50%", marginTop: f / 2, marginLeft: "0px" })) : (e = o.offset().top + o.outerHeight() + i, n = o.offset().left + a / 2 - p / 2, r = t(n, e, p, f), h = "+10px", l.css({ marginLeft: p / 2 - l.width() / 2 })), s.css({ top: r.y, left: r.x }), g = p / 8, 8 > g && (g = 8), ("right" === d || "left" === d) && (g = p / 10, 6 > g && (g = 6)), s.velocity({ marginTop: h, marginLeft: v }, { duration: 350, queue: !1 }).velocity({ opacity: 1 }, { duration: 300, delay: 50, queue: !1 }), l.css({ display: "block" }).velocity({ opacity: 1 }, { duration: 55, delay: 0, queue: !1 }).velocity({ scale: g }, { duration: 300, delay: 0, queue: !1, easing: "easeInOutQuad" });
                  }, r);
                }, "mouseleave.tooltip": function mouseleaveTooltip() {
                  c = !1, clearTimeout(u), setTimeout(function () {
                    1 != c && (s.velocity({ opacity: 0, marginTop: 0, marginLeft: 0 }, { duration: 225, queue: !1 }), l.velocity({ opacity: 0, scale: 1 }, { duration: 225, queue: !1, complete: function complete() {
                        l.css("display", "none"), s.css("display", "none"), c = !1;
                      } }));
                  }, 225);
                } });
            }));
          };var t = function t(_t3, n, i, r) {
            var o = _t3,
                a = n;return 0 > o ? o = 4 : o + i > window.innerWidth && (o -= o + i - window.innerWidth), 0 > a ? a = 4 : a + r > window.innerHeight + e(window).scrollTop && (a -= a + r - window.innerHeight), { x: o, y: a };
          };e(document).ready(function () {
            e(".tooltipped").tooltip();
          });
        }(a), function (e) {
          "use strict";
          function t(e) {
            return null !== e && e === e.window;
          }function n(e) {
            return t(e) ? e : 9 === e.nodeType && e.defaultView;
          }function i(e) {
            var t,
                i,
                r = { top: 0, left: 0 },
                o = e && e.ownerDocument;return t = o.documentElement, "undefined" != typeof e.getBoundingClientRect && (r = e.getBoundingClientRect()), i = n(o), { top: r.top + i.pageYOffset - t.clientTop, left: r.left + i.pageXOffset - t.clientLeft };
          }function r(e) {
            var t = "";for (var n in e) {
              e.hasOwnProperty(n) && (t += n + ":" + e[n] + ";");
            }return t;
          }function o(e) {
            if (c.allowEvent(e) === !1) return null;for (var t = null, n = e.target || e.srcElement; null !== n.parentElement;) {
              if (!(n instanceof SVGElement || -1 === n.className.indexOf("waves-effect"))) {
                t = n;break;
              }if (n.classList.contains("waves-effect")) {
                t = n;break;
              }n = n.parentElement;
            }return t;
          }function a(t) {
            var n = o(t);null !== n && (u.show(t, n), "ontouchstart" in e && (n.addEventListener("touchend", u.hide, !1), n.addEventListener("touchcancel", u.hide, !1)), n.addEventListener("mouseup", u.hide, !1), n.addEventListener("mouseleave", u.hide, !1));
          }var s = s || {},
              l = document.querySelectorAll.bind(document),
              u = { duration: 750, show: function show(e, t) {
              if (2 === e.button) return !1;var n = t || this,
                  o = document.createElement("div");o.className = "waves-ripple", n.appendChild(o);var a = i(n),
                  s = e.pageY - a.top,
                  l = e.pageX - a.left,
                  c = "scale(" + n.clientWidth / 100 * 10 + ")";"touches" in e && (s = e.touches[0].pageY - a.top, l = e.touches[0].pageX - a.left), o.setAttribute("data-hold", Date.now()), o.setAttribute("data-scale", c), o.setAttribute("data-x", l), o.setAttribute("data-y", s);var d = { top: s + "px", left: l + "px" };o.className = o.className + " waves-notransition", o.setAttribute("style", r(d)), o.className = o.className.replace("waves-notransition", ""), d["-webkit-transform"] = c, d["-moz-transform"] = c, d["-ms-transform"] = c, d["-o-transform"] = c, d.transform = c, d.opacity = "1", d["-webkit-transition-duration"] = u.duration + "ms", d["-moz-transition-duration"] = u.duration + "ms", d["-o-transition-duration"] = u.duration + "ms", d["transition-duration"] = u.duration + "ms", d["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", d["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", d["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", d["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", o.setAttribute("style", r(d));
            }, hide: function hide(e) {
              c.touchup(e);var t = this,
                  n = (1.4 * t.clientWidth, null),
                  i = t.getElementsByClassName("waves-ripple");if (!(i.length > 0)) return !1;n = i[i.length - 1];var o = n.getAttribute("data-x"),
                  a = n.getAttribute("data-y"),
                  s = n.getAttribute("data-scale"),
                  l = Date.now() - Number(n.getAttribute("data-hold")),
                  d = 350 - l;0 > d && (d = 0), setTimeout(function () {
                var e = { top: a + "px", left: o + "px", opacity: "0", "-webkit-transition-duration": u.duration + "ms", "-moz-transition-duration": u.duration + "ms", "-o-transition-duration": u.duration + "ms", "transition-duration": u.duration + "ms", "-webkit-transform": s, "-moz-transform": s, "-ms-transform": s, "-o-transform": s, transform: s };n.setAttribute("style", r(e)), setTimeout(function () {
                  try {
                    t.removeChild(n);
                  } catch (e) {
                    return !1;
                  }
                }, u.duration);
              }, d);
            }, wrapInput: function wrapInput(e) {
              for (var t = 0; t < e.length; t++) {
                var n = e[t];if ("input" === n.tagName.toLowerCase()) {
                  var i = n.parentNode;if ("i" === i.tagName.toLowerCase() && -1 !== i.className.indexOf("waves-effect")) continue;var r = document.createElement("i");r.className = n.className + " waves-input-wrapper";var o = n.getAttribute("style");o || (o = ""), r.setAttribute("style", o), n.className = "waves-button-input", n.removeAttribute("style"), i.replaceChild(r, n), r.appendChild(n);
                }
              }
            } },
              c = { touches: 0, allowEvent: function allowEvent(e) {
              var t = !0;return "touchstart" === e.type ? c.touches += 1 : "touchend" === e.type || "touchcancel" === e.type ? setTimeout(function () {
                c.touches > 0 && (c.touches -= 1);
              }, 500) : "mousedown" === e.type && c.touches > 0 && (t = !1), t;
            }, touchup: function touchup(e) {
              c.allowEvent(e);
            } };s.displayEffect = function (t) {
            t = t || {}, "duration" in t && (u.duration = t.duration), u.wrapInput(l(".waves-effect")), "ontouchstart" in e && document.body.addEventListener("touchstart", a, !1), document.body.addEventListener("mousedown", a, !1);
          }, s.attach = function (t) {
            "input" === t.tagName.toLowerCase() && (u.wrapInput([t]), t = t.parentElement), "ontouchstart" in e && t.addEventListener("touchstart", a, !1), t.addEventListener("mousedown", a, !1);
          }, e.Waves = s, document.addEventListener("DOMContentLoaded", function () {
            s.displayEffect();
          }, !1);
        }(window), Materialize.toast = function (e, t, n, i) {
          function r(e) {
            var t = document.createElement("div");if (t.classList.add("toast"), n) for (var r = n.split(" "), o = 0, l = r.length; l > o; o++) {
              t.classList.add(r[o]);
            }("object" == (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) ? e instanceof HTMLElement : e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) ? t.appendChild(e) : e instanceof a ? t.appendChild(e[0]) : t.innerHTML = e;var u = new Hammer(t, { prevent_default: !1 });return u.on("pan", function (e) {
              var n = e.deltaX,
                  i = 80;t.classList.contains("panning") || t.classList.add("panning");var r = 1 - Math.abs(n / i);0 > r && (r = 0), s(t, { left: n, opacity: r }, { duration: 50, queue: !1, easing: "easeOutQuad" });
            }), u.on("panend", function (e) {
              var n = e.deltaX,
                  r = 80;Math.abs(n) > r ? s(t, { marginTop: "-40px" }, { duration: 375, easing: "easeOutExpo", queue: !1, complete: function complete() {
                  "function" == typeof i && i(), t.parentNode.removeChild(t);
                } }) : (t.classList.remove("panning"), s(t, { left: 0, opacity: 1 }, { duration: 300, easing: "easeOutExpo", queue: !1 }));
            }), t;
          }n = n || "";var o = document.getElementById("toast-container");null === o && (o = document.createElement("div"), o.id = "toast-container", document.body.appendChild(o));var l = r(e);e && o.appendChild(l), l.style.top = "35px", l.style.opacity = 0, s(l, { top: "0px", opacity: 1 }, { duration: 300, easing: "easeOutCubic", queue: !1 });var u = t,
              c = setInterval(function () {
            null === l.parentNode && window.clearInterval(c), l.classList.contains("panning") || (u -= 20), 0 >= u && (s(l, { opacity: 0, marginTop: "-40px" }, { duration: 375, easing: "easeOutExpo", queue: !1, complete: function complete() {
                "function" == typeof i && i(), this[0].parentNode.removeChild(this[0]);
              } }), window.clearInterval(c));
          }, 20);
        }, function (e) {
          var t = { init: function init(t) {
              var n = { menuWidth: 240, edge: "left", closeOnClick: !1 };t = e.extend(n, t), e(this).each(function () {
                function n(n) {
                  a = !1, s = !1, e("body").css({ overflow: "", width: "" }), e("#sidenav-overlay").velocity({ opacity: 0 }, { duration: 200, queue: !1, easing: "easeOutQuad", complete: function complete() {
                      e(this).remove();
                    } }), "left" === t.edge ? (o.css({ width: "", right: "", left: "0" }), r.velocity({ translateX: "-100%" }, { duration: 200, queue: !1, easing: "easeOutCubic", complete: function complete() {
                      n === !0 && (r.removeAttr("style"), r.css("width", t.menuWidth));
                    } })) : (o.css({ width: "", right: "0", left: "" }), r.velocity({ translateX: "100%" }, { duration: 200, queue: !1, easing: "easeOutCubic", complete: function complete() {
                      n === !0 && (r.removeAttr("style"), r.css("width", t.menuWidth));
                    } }));
                }var i = e(this),
                    r = e("#" + i.attr("data-activates"));240 != t.menuWidth && r.css("width", t.menuWidth);var o = e('<div class="drag-target"></div>');e("body").append(o), "left" == t.edge ? (r.css("transform", "translateX(-100%)"), o.css({ left: 0 })) : (r.addClass("right-aligned").css("transform", "translateX(100%)"), o.css({ right: 0 })), r.hasClass("fixed") && window.innerWidth > 992 && r.css("transform", "translateX(0)"), r.hasClass("fixed") && e(window).resize(function () {
                  window.innerWidth > 992 ? 0 != e("#sidenav-overlay").length && s ? n(!0) : r.css("transform", "translateX(0%)") : s === !1 && ("left" === t.edge ? r.css("transform", "translateX(-100%)") : r.css("transform", "translateX(100%)"));
                }), t.closeOnClick === !0 && r.on("click.itemclick", "a:not(.collapsible-header)", function () {
                  n();
                });var a = !1,
                    s = !1;o.on("click", function () {
                  n();
                }), o.hammer({ prevent_default: !1 }).bind("pan", function (i) {
                  if ("touch" == i.gesture.pointerType) {
                    var o = (i.gesture.direction, i.gesture.center.x),
                        a = (i.gesture.center.y, i.gesture.velocityX, e("body")),
                        l = a.innerWidth();if (a.css("overflow", "hidden"), a.width(l), 0 === e("#sidenav-overlay").length) {
                      var u = e('<div id="sidenav-overlay"></div>');u.css("opacity", 0).click(function () {
                        n();
                      }), e("body").append(u);
                    }if ("left" === t.edge && (o > t.menuWidth ? o = t.menuWidth : 0 > o && (o = 0)), "left" === t.edge) o < t.menuWidth / 2 ? s = !1 : o >= t.menuWidth / 2 && (s = !0), r.css("transform", "translateX(" + (o - t.menuWidth) + "px)");else {
                      o < window.innerWidth - t.menuWidth / 2 ? s = !0 : o >= window.innerWidth - t.menuWidth / 2 && (s = !1);var c = o - t.menuWidth / 2;0 > c && (c = 0), r.css("transform", "translateX(" + c + "px)");
                    }var d;"left" === t.edge ? (d = o / t.menuWidth, e("#sidenav-overlay").velocity({ opacity: d }, { duration: 10, queue: !1, easing: "easeOutQuad" })) : (d = Math.abs((o - window.innerWidth) / t.menuWidth), e("#sidenav-overlay").velocity({ opacity: d }, { duration: 10, queue: !1, easing: "easeOutQuad" }));
                  }
                }).bind("panend", function (n) {
                  if ("touch" == n.gesture.pointerType) {
                    var i = n.gesture.velocityX,
                        l = n.gesture.center.x,
                        u = l - t.menuWidth,
                        c = l - t.menuWidth / 2;u > 0 && (u = 0), 0 > c && (c = 0), a = !1, "left" === t.edge ? s && .3 >= i || -.5 > i ? (0 != u && r.velocity({ translateX: [0, u] }, { duration: 300, queue: !1, easing: "easeOutQuad" }), e("#sidenav-overlay").velocity({ opacity: 1 }, { duration: 50, queue: !1, easing: "easeOutQuad" }), o.css({ width: "50%", right: 0, left: "" })) : (!s || i > .3) && (e("body").css({ overflow: "", width: "" }), r.velocity({ translateX: [-1 * t.menuWidth - 10, u] }, { duration: 200, queue: !1, easing: "easeOutQuad" }), e("#sidenav-overlay").velocity({ opacity: 0 }, { duration: 200, queue: !1, easing: "easeOutQuad", complete: function complete() {
                        e(this).remove();
                      } }), o.css({ width: "10px", right: "", left: 0 })) : s && i >= -.3 || i > .5 ? (r.velocity({ translateX: [0, c] }, { duration: 300, queue: !1, easing: "easeOutQuad" }), e("#sidenav-overlay").velocity({ opacity: 1 }, { duration: 50, queue: !1, easing: "easeOutQuad" }), o.css({ width: "50%", right: "", left: 0 })) : (!s || -.3 > i) && (e("body").css({ overflow: "", width: "" }), r.velocity({ translateX: [t.menuWidth + 10, c] }, { duration: 200, queue: !1, easing: "easeOutQuad" }), e("#sidenav-overlay").velocity({ opacity: 0 }, { duration: 200, queue: !1, easing: "easeOutQuad", complete: function complete() {
                        e(this).remove();
                      } }), o.css({ width: "10px", right: 0, left: "" }));
                  }
                }), i.click(function () {
                  if (s === !0) s = !1, a = !1, n();else {
                    var i = e("body"),
                        l = i.innerWidth();i.css("overflow", "hidden"), i.width(l), e("body").append(o), "left" === t.edge ? (o.css({ width: "50%", right: 0, left: "" }), r.velocity({ translateX: [0, -1 * t.menuWidth] }, { duration: 300, queue: !1, easing: "easeOutQuad" })) : (o.css({ width: "50%", right: "", left: 0 }), r.velocity({ translateX: [0, t.menuWidth] }, { duration: 300, queue: !1, easing: "easeOutQuad" }));var u = e('<div id="sidenav-overlay"></div>');u.css("opacity", 0).click(function () {
                      s = !1, a = !1, n(), u.velocity({ opacity: 0 }, { duration: 300, queue: !1, easing: "easeOutQuad", complete: function complete() {
                          e(this).remove();
                        } });
                    }), e("body").append(u), u.velocity({ opacity: 1 }, { duration: 300, queue: !1, easing: "easeOutQuad", complete: function complete() {
                        s = !0, a = !1;
                      } });
                  }return !1;
                });
              });
            }, show: function show() {
              this.trigger("click");
            }, hide: function hide() {
              e("#sidenav-overlay").trigger("click");
            } };e.fn.sideNav = function (n) {
            return t[n] ? t[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != (typeof n === "undefined" ? "undefined" : _typeof(n)) && n ? void e.error("Method " + n + " does not exist on jQuery.sideNav") : t.init.apply(this, arguments);
          };
        }(a), function (e) {
          function t(t, n, i, r) {
            var o = e();return e.each(a, function (e, a) {
              if (a.height() > 0) {
                var s = a.offset().top,
                    l = a.offset().left,
                    u = l + a.width(),
                    c = s + a.height(),
                    d = !(l > n || r > u || s > i || t > c);d && o.push(a);
              }
            }), o;
          }function n() {
            ++u;var n = o.scrollTop(),
                i = o.scrollLeft(),
                r = i + o.width(),
                a = n + o.height(),
                l = t(n + c.top + 200, r + c.right, a + c.bottom, i + c.left);e.each(l, function (e, t) {
              var n = t.data("scrollSpy:ticks");"number" != typeof n && t.triggerHandler("scrollSpy:enter"), t.data("scrollSpy:ticks", u);
            }), e.each(s, function (e, t) {
              var n = t.data("scrollSpy:ticks");"number" == typeof n && n !== u && (t.triggerHandler("scrollSpy:exit"), t.data("scrollSpy:ticks", null));
            }), s = l;
          }function i() {
            o.trigger("scrollSpy:winSize");
          }function r(e, t, n) {
            var i,
                r,
                o,
                a = null,
                s = 0;n || (n = {});var l = function l() {
              s = n.leading === !1 ? 0 : d(), a = null, o = e.apply(i, r), i = r = null;
            };return function () {
              var u = d();s || n.leading !== !1 || (s = u);var c = t - (u - s);return i = this, r = arguments, 0 >= c ? (clearTimeout(a), a = null, s = u, o = e.apply(i, r), i = r = null) : a || n.trailing === !1 || (a = setTimeout(l, c)), o;
            };
          }var o = e(window),
              a = [],
              s = [],
              l = !1,
              u = 0,
              c = { top: 0, right: 0, bottom: 0, left: 0 },
              d = Date.now || function () {
            return new Date().getTime();
          };e.scrollSpy = function (t, i) {
            var s = [];t = e(t), t.each(function (t, n) {
              a.push(e(n)), e(n).data("scrollSpy:id", t), e('a[href="#' + e(n).attr("id") + '"]').click(function (t) {
                t.preventDefault();var n = e(this.hash).offset().top + 1;e("html, body").animate({ scrollTop: n - 200 }, { duration: 400, queue: !1, easing: "easeOutCubic" });
              });
            }), i = i || { throttle: 100 }, c.top = i.offsetTop || 0, c.right = i.offsetRight || 0, c.bottom = i.offsetBottom || 0, c.left = i.offsetLeft || 0;var u = r(n, i.throttle || 100),
                d = function d() {
              e(document).ready(u);
            };return l || (o.on("scroll", d), o.on("resize", d), l = !0), setTimeout(d, 0), t.on("scrollSpy:enter", function () {
              s = e.grep(s, function (e) {
                return 0 != e.height();
              });var t = e(this);s[0] ? (e('a[href="#' + s[0].attr("id") + '"]').removeClass("active"), t.data("scrollSpy:id") < s[0].data("scrollSpy:id") ? s.unshift(e(this)) : s.push(e(this))) : s.push(e(this)), e('a[href="#' + s[0].attr("id") + '"]').addClass("active");
            }), t.on("scrollSpy:exit", function () {
              if (s = e.grep(s, function (e) {
                return 0 != e.height();
              }), s[0]) {
                e('a[href="#' + s[0].attr("id") + '"]').removeClass("active");var t = e(this);s = e.grep(s, function (e) {
                  return e.attr("id") != t.attr("id");
                }), s[0] && e('a[href="#' + s[0].attr("id") + '"]').addClass("active");
              }
            }), t;
          }, e.winSizeSpy = function (t) {
            return e.winSizeSpy = function () {
              return o;
            }, t = t || { throttle: 100 }, o.on("resize", r(i, t.throttle || 100));
          }, e.fn.scrollSpy = function (t) {
            return e.scrollSpy(e(this), t);
          };
        }(a), function (e) {
          e(document).ready(function () {
            function t(t) {
              var n = t.css("font-family"),
                  i = t.css("font-size");i && r.css("font-size", i), n && r.css("font-family", n), "off" === t.attr("wrap") && r.css("overflow-wrap", "normal").css("white-space", "pre"), r.text(t.val() + "\n");var o = r.html().replace(/\n/g, "<br>");r.html(o), t.is(":visible") ? r.css("width", t.width()) : r.css("width", e(window).width() / 2), t.css("height", r.height());
            }Materialize.updateTextFields = function () {
              var t = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";e(t).each(function (t, n) {
                e(n).val().length > 0 || n.autofocus || void 0 !== e(this).attr("placeholder") || e(n)[0].validity.badInput === !0 ? e(this).siblings("label, i").addClass("active") : e(this).siblings("label, i").removeClass("active");
              });
            };var n = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";e(document).on("change", n, function () {
              (0 !== e(this).val().length || void 0 !== e(this).attr("placeholder")) && e(this).siblings("label").addClass("active"), validate_field(e(this));
            }), e(document).ready(function () {
              Materialize.updateTextFields();
            }), e(document).on("reset", function (t) {
              var i = e(t.target);i.is("form") && (i.find(n).removeClass("valid").removeClass("invalid"), i.find(n).each(function () {
                "" === e(this).attr("value") && e(this).siblings("label, i").removeClass("active");
              }), i.find("select.initialized").each(function () {
                var e = i.find("option[selected]").text();i.siblings("input.select-dropdown").val(e);
              }));
            }), e(document).on("focus", n, function () {
              e(this).siblings("label, i").addClass("active");
            }), e(document).on("blur", n, function () {
              var t = e(this);0 === t.val().length && t[0].validity.badInput !== !0 && void 0 === t.attr("placeholder") && t.siblings("label, i").removeClass("active"), 0 === t.val().length && t[0].validity.badInput !== !0 && void 0 !== t.attr("placeholder") && t.siblings("i").removeClass("active"), validate_field(t);
            }), window.validate_field = function (e) {
              var t = void 0 !== e.attr("length"),
                  n = parseInt(e.attr("length")),
                  i = e.val().length;0 === e.val().length && e[0].validity.badInput === !1 ? e.hasClass("validate") && (e.removeClass("valid"), e.removeClass("invalid")) : e.hasClass("validate") && (e.is(":valid") && t && n >= i || e.is(":valid") && !t ? (e.removeClass("invalid"), e.addClass("valid")) : (e.removeClass("valid"), e.addClass("invalid")));
            };var i = "input[type=radio], input[type=checkbox]";e(document).on("keyup.radio", i, function (t) {
              if (9 === t.which) {
                e(this).addClass("tabbed");var n = e(this);return void n.one("blur", function (t) {
                  e(this).removeClass("tabbed");
                });
              }
            });var r = e(".hiddendiv").first();r.length || (r = e('<div class="hiddendiv common"></div>'), e("body").append(r));var o = ".materialize-textarea";e(o).each(function () {
              var n = e(this);n.val().length && t(n);
            }), e("body").on("keyup keydown autoresize", o, function () {
              t(e(this));
            }), e(document).on("change", '.file-field input[type="file"]', function () {
              for (var t = e(this).closest(".file-field"), n = t.find("input.file-path"), i = e(this)[0].files, r = [], o = 0; o < i.length; o++) {
                r.push(i[o].name);
              }n.val(r.join(", ")), n.trigger("change");
            });var a,
                s = "input[type=range]",
                l = !1;e(s).each(function () {
              var t = e('<span class="thumb"><span class="value"></span></span>');e(this).after(t);
            });var u = ".range-field";e(document).on("change", s, function (t) {
              var n = e(this).siblings(".thumb");n.find(".value").html(e(this).val());
            }), e(document).on("input mousedown touchstart", s, function (t) {
              var n = e(this).siblings(".thumb"),
                  i = e(this).outerWidth();n.length <= 0 && (n = e('<span class="thumb"><span class="value"></span></span>'), e(this).after(n)), n.find(".value").html(e(this).val()), l = !0, e(this).addClass("active"), n.hasClass("active") || n.velocity({ height: "30px", width: "30px", top: "-20px", marginLeft: "-15px" }, { duration: 300, easing: "easeOutExpo" }), "input" !== t.type && (a = void 0 === t.pageX || null === t.pageX ? t.originalEvent.touches[0].pageX - e(this).offset().left : t.pageX - e(this).offset().left, 0 > a ? a = 0 : a > i && (a = i), n.addClass("active").css("left", a)), n.find(".value").html(e(this).val());
            }), e(document).on("mouseup touchend", u, function () {
              l = !1, e(this).removeClass("active");
            }), e(document).on("mousemove touchmove", u, function (t) {
              var n,
                  i = e(this).children(".thumb");if (l) {
                i.hasClass("active") || i.velocity({ height: "30px", width: "30px", top: "-20px", marginLeft: "-15px" }, { duration: 300, easing: "easeOutExpo" }), n = void 0 === t.pageX || null === t.pageX ? t.originalEvent.touches[0].pageX - e(this).offset().left : t.pageX - e(this).offset().left;var r = e(this).outerWidth();0 > n ? n = 0 : n > r && (n = r), i.addClass("active").css("left", n), i.find(".value").html(i.siblings(s).val());
              }
            }), e(document).on("mouseout touchleave", u, function () {
              if (!l) {
                var t = e(this).children(".thumb");t.hasClass("active") && t.velocity({ height: "0", width: "0", top: "10px", marginLeft: "-6px" }, { duration: 100 }), t.removeClass("active");
              }
            });
          }), e.fn.material_select = function (t) {
            function n(e, t, n) {
              var r = e.indexOf(t),
                  o = -1 === r;return o ? e.push(t) : e.splice(r, 1), n.siblings("ul.dropdown-content").find("li").eq(t).toggleClass("active"), n.find("option").eq(t).prop("selected", o), i(e, n), o;
            }function i(e, t) {
              for (var n = "", i = 0, r = e.length; r > i; i++) {
                var o = t.find("option").eq(e[i]).text();n += 0 === i ? o : ", " + o;
              }"" === n && (n = t.find("option:disabled").eq(0).text()), t.siblings("input.select-dropdown").val(n);
            }e(this).each(function () {
              var i = e(this);if (!i.hasClass("browser-default")) {
                var r = !!i.attr("multiple"),
                    o = i.data("select-id");if (o && (i.parent().find("span.caret").remove(), i.parent().find("input").remove(), i.unwrap(), e("ul#select-options-" + o).remove()), "destroy" === t) return void i.data("select-id", null).removeClass("initialized");var a = Materialize.guid();i.data("select-id", a);var s = e('<div class="select-wrapper"></div>');s.addClass(i.attr("class"));var l = e('<ul id="select-options-' + a + '" class="dropdown-content select-dropdown ' + (r ? "multiple-select-dropdown" : "") + '"></ul>'),
                    u = i.children("option, optgroup"),
                    c = [],
                    d = !1,
                    f = i.find("option:selected").html() || i.find("option:first").html() || "",
                    p = function p(t, n, i) {
                  var r = n.is(":disabled") ? "disabled " : "",
                      o = "optgroup-option" === i ? "optgroup-option " : "",
                      a = n.data("icon"),
                      s = n.attr("class");if (a) {
                    var u = "";return s && (u = ' class="' + s + '"'), "multiple" === i ? l.append(e('<li class="' + r + '"><img src="' + a + '"' + u + '><span><input type="checkbox"' + r + "/><label></label>" + n.html() + "</span></li>")) : l.append(e('<li class="' + r + o + '"><img src="' + a + '"' + u + "><span>" + n.html() + "</span></li>")), !0;
                  }"multiple" === i ? l.append(e('<li class="' + r + '"><span><input type="checkbox"' + r + "/><label></label>" + n.html() + "</span></li>")) : l.append(e('<li class="' + r + o + '"><span>' + n.html() + "</span></li>"));
                };u.length && u.each(function () {
                  if (e(this).is("option")) r ? p(i, e(this), "multiple") : p(i, e(this));else if (e(this).is("optgroup")) {
                    var t = e(this).children("option");l.append(e('<li class="optgroup"><span>' + e(this).attr("label") + "</span></li>")), t.each(function () {
                      p(i, e(this), "optgroup-option");
                    });
                  }
                }), l.find("li:not(.optgroup)").each(function (o) {
                  e(this).click(function (a) {
                    if (!e(this).hasClass("disabled") && !e(this).hasClass("optgroup")) {
                      var s = !0;r ? (e('input[type="checkbox"]', this).prop("checked", function (e, t) {
                        return !t;
                      }), s = n(c, e(this).index(), i), g.trigger("focus")) : (l.find("li").removeClass("active"), e(this).toggleClass("active"), g.val(e(this).text())), m(l, e(this)), i.find("option").eq(o).prop("selected", s), i.trigger("change"), "undefined" != typeof t && t();
                    }a.stopPropagation();
                  });
                }), i.wrap(s);var h = e('<span class="caret">&#9660;</span>');i.is(":disabled") && h.addClass("disabled");var v = f.replace(/"/g, "&quot;"),
                    g = e('<input type="text" class="select-dropdown" readonly="true" ' + (i.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + a + '" value="' + v + '"/>');i.before(g), g.before(h), g.after(l), i.is(":disabled") || g.dropdown({ hover: !1, closeOnClick: !1 }), i.attr("tabindex") && e(g[0]).attr("tabindex", i.attr("tabindex")), i.addClass("initialized"), g.on({ focus: function focus() {
                    if (e("ul.select-dropdown").not(l[0]).is(":visible") && e("input.select-dropdown").trigger("close"), !l.is(":visible")) {
                      e(this).trigger("open", ["focus"]);var t = e(this).val(),
                          n = l.find("li").filter(function () {
                        return e(this).text().toLowerCase() === t.toLowerCase();
                      })[0];m(l, n);
                    }
                  }, click: function click(e) {
                    e.stopPropagation();
                  } }), g.on("blur", function () {
                  r || e(this).trigger("close"), l.find("li.selected").removeClass("selected");
                }), l.hover(function () {
                  d = !0;
                }, function () {
                  d = !1;
                }), e(window).on({ click: function click() {
                    r && (d || g.trigger("close"));
                  } }), r && i.find("option:selected:not(:disabled)").each(function () {
                  var t = e(this).index();n(c, t, i), l.find("li").eq(t).find(":checkbox").prop("checked", !0);
                });var m = function m(t, n) {
                  if (n) {
                    t.find("li.selected").removeClass("selected");var i = e(n);i.addClass("selected"), l.scrollTo(i);
                  }
                },
                    y = [],
                    b = function b(t) {
                  if (9 == t.which) return void g.trigger("close");if (40 == t.which && !l.is(":visible")) return void g.trigger("open");if (13 != t.which || l.is(":visible")) {
                    t.preventDefault();var n = String.fromCharCode(t.which).toLowerCase(),
                        i = [9, 13, 27, 38, 40];if (n && -1 === i.indexOf(t.which)) {
                      y.push(n);var o = y.join(""),
                          a = l.find("li").filter(function () {
                        return 0 === e(this).text().toLowerCase().indexOf(o);
                      })[0];a && m(l, a);
                    }if (13 == t.which) {
                      var s = l.find("li.selected:not(.disabled)")[0];s && (e(s).trigger("click"), r || g.trigger("close"));
                    }40 == t.which && (a = l.find("li.selected").length ? l.find("li.selected").next("li:not(.disabled)")[0] : l.find("li:not(.disabled)")[0], m(l, a)), 27 == t.which && g.trigger("close"), 38 == t.which && (a = l.find("li.selected").prev("li:not(.disabled)")[0], a && m(l, a)), setTimeout(function () {
                      y = [];
                    }, 1e3);
                  }
                };g.on("keydown", b);
              }
            });
          };
        }(a), function (e) {
          var t = { init: function init(t) {
              var n = { indicators: !0, height: 400, transition: 500, interval: 6e3 };return t = e.extend(n, t), this.each(function () {
                function n(e, t) {
                  e.hasClass("center-align") ? e.velocity({ opacity: 0, translateY: -100 }, { duration: t, queue: !1 }) : e.hasClass("right-align") ? e.velocity({ opacity: 0, translateX: 100 }, { duration: t, queue: !1 }) : e.hasClass("left-align") && e.velocity({ opacity: 0, translateX: -100 }, { duration: t, queue: !1 });
                }function i(e) {
                  e >= u.length ? e = 0 : 0 > e && (e = u.length - 1), c = l.find(".active").index(), c != e && (r = u.eq(c), $caption = r.find(".caption"), r.removeClass("active"), r.velocity({ opacity: 0 }, { duration: t.transition, queue: !1, easing: "easeOutQuad", complete: function complete() {
                      u.not(".active").velocity({ opacity: 0, translateX: 0, translateY: 0 }, { duration: 0, queue: !1 });
                    } }), n($caption, t.transition), t.indicators && o.eq(c).removeClass("active"), u.eq(e).velocity({ opacity: 1 }, { duration: t.transition, queue: !1, easing: "easeOutQuad" }), u.eq(e).find(".caption").velocity({ opacity: 1, translateX: 0, translateY: 0 }, { duration: t.transition, delay: t.transition, queue: !1, easing: "easeOutQuad" }), u.eq(e).addClass("active"), t.indicators && o.eq(e).addClass("active"));
                }var r,
                    o,
                    a,
                    s = e(this),
                    l = s.find("ul.slides").first(),
                    u = l.find("li"),
                    c = l.find(".active").index();-1 != c && (r = u.eq(c)), s.hasClass("fullscreen") || (t.indicators ? s.height(t.height + 40) : s.height(t.height), l.height(t.height)), u.find(".caption").each(function () {
                  n(e(this), 0);
                }), u.find("img").each(function () {
                  var t = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";e(this).attr("src") !== t && (e(this).css("background-image", "url(" + e(this).attr("src") + ")"), e(this).attr("src", t));
                }), t.indicators && (o = e('<ul class="indicators"></ul>'), u.each(function (n) {
                  var r = e('<li class="indicator-item"></li>');r.click(function () {
                    var n = l.parent(),
                        r = n.find(e(this)).index();i(r), clearInterval(a), a = setInterval(function () {
                      c = l.find(".active").index(), u.length == c + 1 ? c = 0 : c += 1, i(c);
                    }, t.transition + t.interval);
                  }), o.append(r);
                }), s.append(o), o = s.find("ul.indicators").find("li.indicator-item")), r ? r.show() : (u.first().addClass("active").velocity({ opacity: 1 }, { duration: t.transition, queue: !1, easing: "easeOutQuad" }), c = 0, r = u.eq(c), t.indicators && o.eq(c).addClass("active")), r.find("img").each(function () {
                  r.find(".caption").velocity({ opacity: 1, translateX: 0, translateY: 0 }, { duration: t.transition, queue: !1, easing: "easeOutQuad" });
                }), a = setInterval(function () {
                  c = l.find(".active").index(), i(c + 1);
                }, t.transition + t.interval);var d = !1,
                    f = !1,
                    p = !1;s.hammer({ prevent_default: !1 }).bind("pan", function (e) {
                  if ("touch" === e.gesture.pointerType) {
                    clearInterval(a);var t = e.gesture.direction,
                        n = e.gesture.deltaX,
                        i = e.gesture.velocityX;$curr_slide = l.find(".active"), $curr_slide.velocity({ translateX: n }, { duration: 50, queue: !1, easing: "easeOutQuad" }), 4 === t && (n > s.innerWidth() / 2 || -.65 > i) ? p = !0 : 2 === t && (n < -1 * s.innerWidth() / 2 || i > .65) && (f = !0);var r;f && (r = $curr_slide.next(), 0 === r.length && (r = u.first()), r.velocity({ opacity: 1 }, { duration: 300, queue: !1, easing: "easeOutQuad" })), p && (r = $curr_slide.prev(), 0 === r.length && (r = u.last()), r.velocity({ opacity: 1 }, { duration: 300, queue: !1, easing: "easeOutQuad" }));
                  }
                }).bind("panend", function (e) {
                  "touch" === e.gesture.pointerType && ($curr_slide = l.find(".active"), d = !1, curr_index = l.find(".active").index(), !p && !f || u.length <= 1 ? $curr_slide.velocity({ translateX: 0 }, { duration: 300, queue: !1, easing: "easeOutQuad" }) : f ? (i(curr_index + 1), $curr_slide.velocity({ translateX: -1 * s.innerWidth() }, { duration: 300, queue: !1, easing: "easeOutQuad", complete: function complete() {
                      $curr_slide.velocity({ opacity: 0, translateX: 0 }, { duration: 0, queue: !1 });
                    } })) : p && (i(curr_index - 1), $curr_slide.velocity({ translateX: s.innerWidth() }, { duration: 300, queue: !1, easing: "easeOutQuad", complete: function complete() {
                      $curr_slide.velocity({ opacity: 0, translateX: 0 }, { duration: 0, queue: !1 });
                    } })), f = !1, p = !1, clearInterval(a), a = setInterval(function () {
                    c = l.find(".active").index(), u.length == c + 1 ? c = 0 : c += 1, i(c);
                  }, t.transition + t.interval));
                }), s.on("sliderPause", function () {
                  clearInterval(a);
                }), s.on("sliderStart", function () {
                  clearInterval(a), a = setInterval(function () {
                    c = l.find(".active").index(), u.length == c + 1 ? c = 0 : c += 1, i(c);
                  }, t.transition + t.interval);
                }), s.on("sliderNext", function () {
                  c = l.find(".active").index(), i(c + 1);
                }), s.on("sliderPrev", function () {
                  c = l.find(".active").index(), i(c - 1);
                });
              });
            }, pause: function pause() {
              e(this).trigger("sliderPause");
            }, start: function start() {
              e(this).trigger("sliderStart");
            }, next: function next() {
              e(this).trigger("sliderNext");
            }, prev: function prev() {
              e(this).trigger("sliderPrev");
            } };e.fn.slider = function (n) {
            return t[n] ? t[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != (typeof n === "undefined" ? "undefined" : _typeof(n)) && n ? void e.error("Method " + n + " does not exist on jQuery.tooltip") : t.init.apply(this, arguments);
          };
        }(a), function (e) {
          e(document).ready(function () {
            e(document).on("click.card", ".card", function (t) {
              e(this).find("> .card-reveal").length && (e(t.target).is(e(".card-reveal .card-title")) || e(t.target).is(e(".card-reveal .card-title i")) ? e(this).find(".card-reveal").velocity({ translateY: 0 }, { duration: 225, queue: !1, easing: "easeInOutQuad", complete: function complete() {
                  e(this).css({ display: "none" });
                } }) : (e(t.target).is(e(".card .activator")) || e(t.target).is(e(".card .activator i"))) && (e(t.target).closest(".card").css("overflow", "hidden"), e(this).find(".card-reveal").css({ display: "block" }).velocity("stop", !1).velocity({ translateY: "-100%" }, { duration: 300, queue: !1, easing: "easeInOutQuad" }))), e(".card-reveal").closest(".card").css("overflow", "hidden");
            });
          });
        }(a), function (e) {
          e(document).ready(function () {
            e(document).on("click.chip", ".chip .material-icons", function (t) {
              e(this).parent().remove();
            });
          });
        }(a), function (e) {
          e.fn.pushpin = function (t) {
            var n = { top: 0, bottom: 1 / 0, offset: 0 };return t = e.extend(n, t), $index = 0, this.each(function () {
              function n(e) {
                e.removeClass("pin-top"), e.removeClass("pinned"), e.removeClass("pin-bottom");
              }function i(i, r) {
                i.each(function () {
                  t.top <= r && t.bottom >= r && !e(this).hasClass("pinned") && (n(e(this)), e(this).css("top", t.offset), e(this).addClass("pinned")), r < t.top && !e(this).hasClass("pin-top") && (n(e(this)), e(this).css("top", 0), e(this).addClass("pin-top")), r > t.bottom && !e(this).hasClass("pin-bottom") && (n(e(this)), e(this).addClass("pin-bottom"), e(this).css("top", t.bottom - a));
                });
              }var r = Materialize.guid(),
                  o = e(this),
                  a = e(this).offset().top;i(o, e(window).scrollTop()), e(window).on("scroll." + r, function () {
                var n = e(window).scrollTop() + t.offset;i(o, n);
              });
            });
          };
        }(a), function (e) {
          e(document).ready(function () {
            e.fn.reverse = [].reverse, e(document).on("mouseenter.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle)", function (n) {
              var i = e(this);t(i);
            }), e(document).on("mouseleave.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle)", function (t) {
              var i = e(this);n(i);
            }), e(document).on("click.fixedActionBtn", ".fixed-action-btn.click-to-toggle > a", function (i) {
              var r = e(this),
                  o = r.parent();o.hasClass("active") ? n(o) : t(o);
            });
          }), e.fn.extend({ openFAB: function openFAB() {
              t(e(this));
            }, closeFAB: function closeFAB() {
              n(e(this));
            } });var t = function t(_t4) {
            if ($this = _t4, $this.hasClass("active") === !1) {
              var n,
                  i,
                  r = $this.hasClass("horizontal");r === !0 ? i = 40 : n = 40, $this.addClass("active"), $this.find("ul .btn-floating").velocity({ scaleY: ".4", scaleX: ".4", translateY: n + "px", translateX: i + "px" }, { duration: 0 });var o = 0;$this.find("ul .btn-floating").reverse().each(function () {
                e(this).velocity({ opacity: "1", scaleX: "1", scaleY: "1", translateY: "0", translateX: "0" }, { duration: 80, delay: o }), o += 40;
              });
            }
          },
              n = function n(e) {
            $this = e;var t,
                n,
                i = $this.hasClass("horizontal");i === !0 ? n = 40 : t = 40, $this.removeClass("active"), $this.find("ul .btn-floating").velocity("stop", !0), $this.find("ul .btn-floating").velocity({ opacity: "0", scaleX: ".4", scaleY: ".4", translateY: t + "px", translateX: n + "px" }, { duration: 80 });
          };
        }(a), function (e) {
          Materialize.fadeInImage = function (t) {
            var n = e(t);n.css({ opacity: 0 }), e(n).velocity({ opacity: 1 }, { duration: 650, queue: !1, easing: "easeOutSine" }), e(n).velocity({ opacity: 1 }, { duration: 1300, queue: !1, easing: "swing", step: function step(t, n) {
                n.start = 100;var i = t / 100,
                    r = 150 - (100 - t) / 1.75;100 > r && (r = 100), t >= 0 && e(this).css({ "-webkit-filter": "grayscale(" + i + ")brightness(" + r + "%)", filter: "grayscale(" + i + ")brightness(" + r + "%)" });
              } });
          }, Materialize.showStaggeredList = function (t) {
            var n = 0;e(t).find("li").velocity({ translateX: "-100px" }, { duration: 0 }), e(t).find("li").each(function () {
              e(this).velocity({ opacity: "1", translateX: "0" }, { duration: 800, delay: n, easing: [60, 10] }), n += 120;
            });
          }, e(document).ready(function () {
            var t = !1,
                n = !1;e(".dismissable").each(function () {
              e(this).hammer({ prevent_default: !1 }).bind("pan", function (i) {
                if ("touch" === i.gesture.pointerType) {
                  var r = e(this),
                      o = i.gesture.direction,
                      a = i.gesture.deltaX,
                      s = i.gesture.velocityX;r.velocity({ translateX: a }, { duration: 50, queue: !1, easing: "easeOutQuad" }), 4 === o && (a > r.innerWidth() / 2 || -.75 > s) && (t = !0), 2 === o && (a < -1 * r.innerWidth() / 2 || s > .75) && (n = !0);
                }
              }).bind("panend", function (i) {
                if (Math.abs(i.gesture.deltaX) < e(this).innerWidth() / 2 && (n = !1, t = !1), "touch" === i.gesture.pointerType) {
                  var r = e(this);if (t || n) {
                    var o;o = t ? r.innerWidth() : -1 * r.innerWidth(), r.velocity({ translateX: o }, { duration: 100, queue: !1, easing: "easeOutQuad", complete: function complete() {
                        r.css("border", "none"), r.velocity({ height: 0, padding: 0 }, { duration: 200, queue: !1, easing: "easeOutQuad", complete: function complete() {
                            r.remove();
                          } });
                      } });
                  } else r.velocity({ translateX: 0 }, { duration: 100, queue: !1, easing: "easeOutQuad" });t = !1, n = !1;
                }
              });
            });
          });
        }(a), function (e) {
          Materialize.scrollFire = function (e) {
            var t = !1;window.addEventListener("scroll", function () {
              t = !0;
            }), setInterval(function () {
              if (t) {
                t = !1;for (var n = window.pageYOffset + window.innerHeight, i = 0; i < e.length; i++) {
                  var r = e[i],
                      o = r.selector,
                      a = r.offset,
                      s = r.callback,
                      l = document.querySelector(o);if (null !== l) {
                    var u = l.getBoundingClientRect().top + window.pageYOffset;if (n > u + a && r.done !== !0) {
                      if ("function" == typeof s) s.call(this);else if ("string" == typeof s) {
                        var c = new Function(s);c();
                      }r.done = !0;
                    }
                  }
                }
              }
            }, 100);
          };
        }(a), function (n) {
          "function" == typeof r && r.amd ? r("picker", ["jquery"], n) : "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? e.exports = n(i("jquery")) : this.Picker = n(a);
        }(function (e) {
          function t(o, a, l, d) {
            function f() {
              return t._.node("div", t._.node("div", t._.node("div", t._.node("div", k.component.nodes(b.open), w.box), w.wrap), w.frame), w.holder);
            }function p() {
              C.data(a, k).addClass(w.input).attr("tabindex", -1).val(C.data("value") ? k.get("select", x.format) : o.value), x.editable || C.on("focus." + b.id + " click." + b.id, function (e) {
                e.preventDefault(), k.$root.eq(0).focus();
              }).on("keydown." + b.id, g), r(o, { haspopup: !0, expanded: !1, readonly: !1, owns: o.id + "_root" });
            }function h() {
              k.$root.on({ keydown: g, focusin: function focusin(e) {
                  k.$root.removeClass(w.focused), e.stopPropagation();
                }, "mousedown click": function mousedownClick(t) {
                  var n = t.target;n != k.$root.children()[0] && (t.stopPropagation(), "mousedown" != t.type || e(n).is("input, select, textarea, button, option") || (t.preventDefault(), k.$root.eq(0).focus()));
                } }).on({ focus: function focus() {
                  C.addClass(w.target);
                }, blur: function blur() {
                  C.removeClass(w.target);
                } }).on("focus.toOpen", m).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function () {
                var t = e(this),
                    n = t.data(),
                    i = t.hasClass(w.navDisabled) || t.hasClass(w.disabled),
                    r = s();r = r && (r.type || r.href), (i || r && !e.contains(k.$root[0], r)) && k.$root.eq(0).focus(), !i && n.nav ? k.set("highlight", k.component.item.highlight, { nav: n.nav }) : !i && "pick" in n ? k.set("select", n.pick) : n.clear ? k.clear().close(!0) : n.close && k.close(!0);
              }), r(k.$root[0], "hidden", !0);
            }function v() {
              var t;x.hiddenName === !0 ? (t = o.name, o.name = "") : (t = ["string" == typeof x.hiddenPrefix ? x.hiddenPrefix : "", "string" == typeof x.hiddenSuffix ? x.hiddenSuffix : "_submit"], t = t[0] + o.name + t[1]), k._hidden = e('<input type=hidden name="' + t + '"' + (C.data("value") || o.value ? ' value="' + k.get("select", x.formatSubmit) + '"' : "") + ">")[0], C.on("change." + b.id, function () {
                k._hidden.value = o.value ? k.get("select", x.formatSubmit) : "";
              }), x.container ? e(x.container).append(k._hidden) : C.after(k._hidden);
            }function g(e) {
              var t = e.keyCode,
                  n = /^(8|46)$/.test(t);return 27 == t ? (k.close(), !1) : void ((32 == t || n || !b.open && k.component.key[t]) && (e.preventDefault(), e.stopPropagation(), n ? k.clear().close() : k.open()));
            }function m(e) {
              e.stopPropagation(), "focus" == e.type && k.$root.addClass(w.focused), k.open();
            }if (!o) return t;var y = !1,
                b = { id: o.id || "P" + Math.abs(~ ~(Math.random() * new Date())) },
                x = l ? e.extend(!0, {}, l.defaults, d) : d || {},
                w = e.extend({}, t.klasses(), x.klass),
                C = e(o),
                T = function T() {
              return this.start();
            },
                k = T.prototype = { constructor: T, $node: C, start: function start() {
                return b && b.start ? k : (b.methods = {}, b.start = !0, b.open = !1, b.type = o.type, o.autofocus = o == s(), o.readOnly = !x.editable, o.id = o.id || b.id, "text" != o.type && (o.type = "text"), k.component = new l(k, x), k.$root = e(t._.node("div", f(), w.picker, 'id="' + o.id + '_root" tabindex="0"')), h(), x.formatSubmit && v(), p(), x.container ? e(x.container).append(k.$root) : C.after(k.$root), k.on({ start: k.component.onStart, render: k.component.onRender, stop: k.component.onStop, open: k.component.onOpen, close: k.component.onClose, set: k.component.onSet }).on({ start: x.onStart, render: x.onRender, stop: x.onStop, open: x.onOpen, close: x.onClose, set: x.onSet }), y = n(k.$root.children()[0]), o.autofocus && k.open(), k.trigger("start").trigger("render"));
              }, render: function render(e) {
                return e ? k.$root.html(f()) : k.$root.find("." + w.box).html(k.component.nodes(b.open)), k.trigger("render");
              }, stop: function stop() {
                return b.start ? (k.close(), k._hidden && k._hidden.parentNode.removeChild(k._hidden), k.$root.remove(), C.removeClass(w.input).removeData(a), setTimeout(function () {
                  C.off("." + b.id);
                }, 0), o.type = b.type, o.readOnly = !1, k.trigger("stop"), b.methods = {}, b.start = !1, k) : k;
              }, open: function open(n) {
                return b.open ? k : (C.addClass(w.active), r(o, "expanded", !0), setTimeout(function () {
                  k.$root.addClass(w.opened), r(k.$root[0], "hidden", !1);
                }, 0), n !== !1 && (b.open = !0, y && c.css("overflow", "hidden").css("padding-right", "+=" + i()), k.$root.eq(0).focus(), u.on("click." + b.id + " focusin." + b.id, function (e) {
                  var t = e.target;t != o && t != document && 3 != e.which && k.close(t === k.$root.children()[0]);
                }).on("keydown." + b.id, function (n) {
                  var i = n.keyCode,
                      r = k.component.key[i],
                      o = n.target;27 == i ? k.close(!0) : o != k.$root[0] || !r && 13 != i ? e.contains(k.$root[0], o) && 13 == i && (n.preventDefault(), o.click()) : (n.preventDefault(), r ? t._.trigger(k.component.key.go, k, [t._.trigger(r)]) : k.$root.find("." + w.highlighted).hasClass(w.disabled) || k.set("select", k.component.item.highlight).close());
                })), k.trigger("open"));
              }, close: function close(e) {
                return e && (k.$root.off("focus.toOpen").eq(0).focus(), setTimeout(function () {
                  k.$root.on("focus.toOpen", m);
                }, 0)), C.removeClass(w.active), r(o, "expanded", !1), setTimeout(function () {
                  k.$root.removeClass(w.opened + " " + w.focused), r(k.$root[0], "hidden", !0);
                }, 0), b.open ? (b.open = !1, y && c.css("overflow", "").css("padding-right", "-=" + i()), u.off("." + b.id), k.trigger("close")) : k;
              }, clear: function clear(e) {
                return k.set("clear", null, e);
              }, set: function set(t, n, i) {
                var r,
                    o,
                    a = e.isPlainObject(t),
                    s = a ? t : {};if (i = a && e.isPlainObject(n) ? n : i || {}, t) {
                  a || (s[t] = n);for (r in s) {
                    o = s[r], r in k.component.item && (void 0 === o && (o = null), k.component.set(r, o, i)), ("select" == r || "clear" == r) && C.val("clear" == r ? "" : k.get(r, x.format)).trigger("change");
                  }k.render();
                }return i.muted ? k : k.trigger("set", s);
              }, get: function get(e, n) {
                if (e = e || "value", null != b[e]) return b[e];if ("valueSubmit" == e) {
                  if (k._hidden) return k._hidden.value;e = "value";
                }if ("value" == e) return o.value;if (e in k.component.item) {
                  if ("string" == typeof n) {
                    var i = k.component.get(e);return i ? t._.trigger(k.component.formats.toString, k.component, [n, i]) : "";
                  }return k.component.get(e);
                }
              }, on: function on(t, n, i) {
                var r,
                    o,
                    a = e.isPlainObject(t),
                    s = a ? t : {};if (t) {
                  a || (s[t] = n);for (r in s) {
                    o = s[r], i && (r = "_" + r), b.methods[r] = b.methods[r] || [], b.methods[r].push(o);
                  }
                }return k;
              }, off: function off() {
                var e,
                    t,
                    n = arguments;for (e = 0, namesCount = n.length; e < namesCount; e += 1) {
                  t = n[e], t in b.methods && delete b.methods[t];
                }return k;
              }, trigger: function trigger(e, n) {
                var i = function i(e) {
                  var i = b.methods[e];i && i.map(function (e) {
                    t._.trigger(e, k, [n]);
                  });
                };return i("_" + e), i(e), k;
              } };return new T();
          }function n(e) {
            var t,
                n = "position";return e.currentStyle ? t = e.currentStyle[n] : window.getComputedStyle && (t = getComputedStyle(e)[n]), "fixed" == t;
          }function i() {
            if (c.height() <= l.height()) return 0;var t = e('<div style="visibility:hidden;width:100px" />').appendTo("body"),
                n = t[0].offsetWidth;t.css("overflow", "scroll");var i = e('<div style="width:100%" />').appendTo(t),
                r = i[0].offsetWidth;return t.remove(), n - r;
          }function r(t, n, i) {
            if (e.isPlainObject(n)) for (var r in n) {
              o(t, r, n[r]);
            } else o(t, n, i);
          }function o(e, t, n) {
            e.setAttribute(("role" == t ? "" : "aria-") + t, n);
          }function a(t, n) {
            e.isPlainObject(t) || (t = { attribute: n }), n = "";for (var i in t) {
              var r = ("role" == i ? "" : "aria-") + i,
                  o = t[i];n += null == o ? "" : r + '="' + t[i] + '"';
            }return n;
          }function s() {
            try {
              return document.activeElement;
            } catch (e) {}
          }var l = e(window),
              u = e(document),
              c = e(document.documentElement);return t.klasses = function (e) {
            return e = e || "picker", { picker: e, opened: e + "--opened", focused: e + "--focused", input: e + "__input", active: e + "__input--active", target: e + "__input--target", holder: e + "__holder", frame: e + "__frame", wrap: e + "__wrap", box: e + "__box" };
          }, t._ = { group: function group(e) {
              for (var n, i = "", r = t._.trigger(e.min, e); r <= t._.trigger(e.max, e, [r]); r += e.i) {
                n = t._.trigger(e.item, e, [r]), i += t._.node(e.node, n[0], n[1], n[2]);
              }return i;
            }, node: function node(t, n, i, r) {
              return n ? (n = e.isArray(n) ? n.join("") : n, i = i ? ' class="' + i + '"' : "", r = r ? " " + r : "", "<" + t + i + r + ">" + n + "</" + t + ">") : "";
            }, lead: function lead(e) {
              return (10 > e ? "0" : "") + e;
            }, trigger: function trigger(e, t, n) {
              return "function" == typeof e ? e.apply(t, n || []) : e;
            }, digits: function digits(e) {
              return (/\d/.test(e[1]) ? 2 : 1
              );
            }, isDate: function isDate(e) {
              return {}.toString.call(e).indexOf("Date") > -1 && this.isInteger(e.getDate());
            }, isInteger: function isInteger(e) {
              return {}.toString.call(e).indexOf("Number") > -1 && e % 1 === 0;
            }, ariaAttr: a }, t.extend = function (n, i) {
            e.fn[n] = function (r, o) {
              var a = this.data(n);return "picker" == r ? a : a && "string" == typeof r ? t._.trigger(a[r], a, [o]) : this.each(function () {
                var o = e(this);o.data(n) || new t(this, n, i, r);
              });
            }, e.fn[n].defaults = i.defaults;
          }, t;
        }), function (n) {
          "function" == typeof r && r.amd ? r(["picker", "jquery"], n) : "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? e.exports = n(i("./picker.js"), i("jquery")) : n(Picker, a);
        }(function (e, t) {
          function n(e, t) {
            var n = this,
                i = e.$node[0],
                r = i.value,
                o = e.$node.data("value"),
                a = o || r,
                s = o ? t.formatSubmit : t.format,
                l = function l() {
              return i.currentStyle ? "rtl" == i.currentStyle.direction : "rtl" == getComputedStyle(e.$root[0]).direction;
            };n.settings = t, n.$node = e.$node, n.queue = { min: "measure create", max: "measure create", now: "now create", select: "parse create validate", highlight: "parse navigate create validate", view: "parse create validate viewset", disable: "deactivate", enable: "activate" }, n.item = {}, n.item.clear = null, n.item.disable = (t.disable || []).slice(0), n.item.enable = -function (e) {
              return e[0] === !0 ? e.shift() : -1;
            }(n.item.disable), n.set("min", t.min).set("max", t.max).set("now"), a ? n.set("select", a, { format: s }) : n.set("select", null).set("highlight", n.item.now), n.key = { 40: 7, 38: -7, 39: function _() {
                return l() ? -1 : 1;
              }, 37: function _() {
                return l() ? 1 : -1;
              }, go: function go(e) {
                var t = n.item.highlight,
                    i = new Date(t.year, t.month, t.date + e);n.set("highlight", i, { interval: e }), this.render();
              } }, e.on("render", function () {
              e.$root.find("." + t.klass.selectMonth).on("change", function () {
                var n = this.value;n && (e.set("highlight", [e.get("view").year, n, e.get("highlight").date]), e.$root.find("." + t.klass.selectMonth).trigger("focus"));
              }), e.$root.find("." + t.klass.selectYear).on("change", function () {
                var n = this.value;n && (e.set("highlight", [n, e.get("view").month, e.get("highlight").date]), e.$root.find("." + t.klass.selectYear).trigger("focus"));
              });
            }, 1).on("open", function () {
              var i = "";n.disabled(n.get("now")) && (i = ":not(." + t.klass.buttonToday + ")"), e.$root.find("button" + i + ", select").attr("disabled", !1);
            }, 1).on("close", function () {
              e.$root.find("button, select").attr("disabled", !0);
            }, 1);
          }var i = 7,
              r = 6,
              o = e._;n.prototype.set = function (e, t, n) {
            var i = this,
                r = i.item;return null === t ? ("clear" == e && (e = "select"), r[e] = t, i) : (r["enable" == e ? "disable" : "flip" == e ? "enable" : e] = i.queue[e].split(" ").map(function (r) {
              return t = i[r](e, t, n);
            }).pop(), "select" == e ? i.set("highlight", r.select, n) : "highlight" == e ? i.set("view", r.highlight, n) : e.match(/^(flip|min|max|disable|enable)$/) && (r.select && i.disabled(r.select) && i.set("select", r.select, n), r.highlight && i.disabled(r.highlight) && i.set("highlight", r.highlight, n)), i);
          }, n.prototype.get = function (e) {
            return this.item[e];
          }, n.prototype.create = function (e, n, i) {
            var r,
                a = this;return n = void 0 === n ? e : n, n == -(1 / 0) || n == 1 / 0 ? r = n : t.isPlainObject(n) && o.isInteger(n.pick) ? n = n.obj : t.isArray(n) ? (n = new Date(n[0], n[1], n[2]), n = o.isDate(n) ? n : a.create().obj) : n = o.isInteger(n) || o.isDate(n) ? a.normalize(new Date(n), i) : a.now(e, n, i), { year: r || n.getFullYear(), month: r || n.getMonth(), date: r || n.getDate(), day: r || n.getDay(), obj: r || n, pick: r || n.getTime() };
          }, n.prototype.createRange = function (e, n) {
            var i = this,
                r = function r(e) {
              return e === !0 || t.isArray(e) || o.isDate(e) ? i.create(e) : e;
            };return o.isInteger(e) || (e = r(e)), o.isInteger(n) || (n = r(n)), o.isInteger(e) && t.isPlainObject(n) ? e = [n.year, n.month, n.date + e] : o.isInteger(n) && t.isPlainObject(e) && (n = [e.year, e.month, e.date + n]), { from: r(e), to: r(n) };
          }, n.prototype.withinRange = function (e, t) {
            return e = this.createRange(e.from, e.to), t.pick >= e.from.pick && t.pick <= e.to.pick;
          }, n.prototype.overlapRanges = function (e, t) {
            var n = this;return e = n.createRange(e.from, e.to), t = n.createRange(t.from, t.to), n.withinRange(e, t.from) || n.withinRange(e, t.to) || n.withinRange(t, e.from) || n.withinRange(t, e.to);
          }, n.prototype.now = function (e, t, n) {
            return t = new Date(), n && n.rel && t.setDate(t.getDate() + n.rel), this.normalize(t, n);
          }, n.prototype.navigate = function (e, n, i) {
            var r,
                o,
                a,
                s,
                l = t.isArray(n),
                u = t.isPlainObject(n),
                c = this.item.view;if (l || u) {
              for (u ? (o = n.year, a = n.month, s = n.date) : (o = +n[0], a = +n[1], s = +n[2]), i && i.nav && c && c.month !== a && (o = c.year, a = c.month), r = new Date(o, a + (i && i.nav ? i.nav : 0), 1), o = r.getFullYear(), a = r.getMonth(); new Date(o, a, s).getMonth() !== a;) {
                s -= 1;
              }n = [o, a, s];
            }return n;
          }, n.prototype.normalize = function (e) {
            return e.setHours(0, 0, 0, 0), e;
          }, n.prototype.measure = function (e, t) {
            var n = this;return t ? "string" == typeof t ? t = n.parse(e, t) : o.isInteger(t) && (t = n.now(e, t, { rel: t })) : t = "min" == e ? -(1 / 0) : 1 / 0, t;
          }, n.prototype.viewset = function (e, t) {
            return this.create([t.year, t.month, 1]);
          }, n.prototype.validate = function (e, n, i) {
            var r,
                a,
                s,
                l,
                u = this,
                c = n,
                d = i && i.interval ? i.interval : 1,
                f = -1 === u.item.enable,
                p = u.item.min,
                h = u.item.max,
                v = f && u.item.disable.filter(function (e) {
              if (t.isArray(e)) {
                var i = u.create(e).pick;i < n.pick ? r = !0 : i > n.pick && (a = !0);
              }return o.isInteger(e);
            }).length;if ((!i || !i.nav) && (!f && u.disabled(n) || f && u.disabled(n) && (v || r || a) || !f && (n.pick <= p.pick || n.pick >= h.pick))) for (f && !v && (!a && d > 0 || !r && 0 > d) && (d *= -1); u.disabled(n) && (Math.abs(d) > 1 && (n.month < c.month || n.month > c.month) && (n = c, d = d > 0 ? 1 : -1), n.pick <= p.pick ? (s = !0, d = 1, n = u.create([p.year, p.month, p.date + (n.pick === p.pick ? 0 : -1)])) : n.pick >= h.pick && (l = !0, d = -1, n = u.create([h.year, h.month, h.date + (n.pick === h.pick ? 0 : 1)])), !s || !l);) {
              n = u.create([n.year, n.month, n.date + d]);
            }return n;
          }, n.prototype.disabled = function (e) {
            var n = this,
                i = n.item.disable.filter(function (i) {
              return o.isInteger(i) ? e.day === (n.settings.firstDay ? i : i - 1) % 7 : t.isArray(i) || o.isDate(i) ? e.pick === n.create(i).pick : t.isPlainObject(i) ? n.withinRange(i, e) : void 0;
            });return i = i.length && !i.filter(function (e) {
              return t.isArray(e) && "inverted" == e[3] || t.isPlainObject(e) && e.inverted;
            }).length, -1 === n.item.enable ? !i : i || e.pick < n.item.min.pick || e.pick > n.item.max.pick;
          }, n.prototype.parse = function (e, t, n) {
            var i = this,
                r = {};return t && "string" == typeof t ? (n && n.format || (n = n || {}, n.format = i.settings.format), i.formats.toArray(n.format).map(function (e) {
              var n = i.formats[e],
                  a = n ? o.trigger(n, i, [t, r]) : e.replace(/^!/, "").length;n && (r[e] = t.substr(0, a)), t = t.substr(a);
            }), [r.yyyy || r.yy, +(r.mm || r.m) - 1, r.dd || r.d]) : t;
          }, n.prototype.formats = function () {
            function e(e, t, n) {
              var i = e.match(/\w+/)[0];return n.mm || n.m || (n.m = t.indexOf(i) + 1), i.length;
            }function t(e) {
              return e.match(/\w+/)[0].length;
            }return { d: function d(e, t) {
                return e ? o.digits(e) : t.date;
              }, dd: function dd(e, t) {
                return e ? 2 : o.lead(t.date);
              }, ddd: function ddd(e, n) {
                return e ? t(e) : this.settings.weekdaysShort[n.day];
              }, dddd: function dddd(e, n) {
                return e ? t(e) : this.settings.weekdaysFull[n.day];
              }, m: function m(e, t) {
                return e ? o.digits(e) : t.month + 1;
              }, mm: function mm(e, t) {
                return e ? 2 : o.lead(t.month + 1);
              }, mmm: function mmm(t, n) {
                var i = this.settings.monthsShort;return t ? e(t, i, n) : i[n.month];
              }, mmmm: function mmmm(t, n) {
                var i = this.settings.monthsFull;return t ? e(t, i, n) : i[n.month];
              }, yy: function yy(e, t) {
                return e ? 2 : ("" + t.year).slice(2);
              }, yyyy: function yyyy(e, t) {
                return e ? 4 : t.year;
              }, toArray: function toArray(e) {
                return e.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g);
              }, toString: function toString(e, t) {
                var n = this;return n.formats.toArray(e).map(function (e) {
                  return o.trigger(n.formats[e], n, [0, t]) || e.replace(/^!/, "");
                }).join("");
              } };
          }(), n.prototype.isDateExact = function (e, n) {
            var i = this;return o.isInteger(e) && o.isInteger(n) || "boolean" == typeof e && "boolean" == typeof n ? e === n : (o.isDate(e) || t.isArray(e)) && (o.isDate(n) || t.isArray(n)) ? i.create(e).pick === i.create(n).pick : t.isPlainObject(e) && t.isPlainObject(n) ? i.isDateExact(e.from, n.from) && i.isDateExact(e.to, n.to) : !1;
          }, n.prototype.isDateOverlap = function (e, n) {
            var i = this,
                r = i.settings.firstDay ? 1 : 0;return o.isInteger(e) && (o.isDate(n) || t.isArray(n)) ? (e = e % 7 + r, e === i.create(n).day + 1) : o.isInteger(n) && (o.isDate(e) || t.isArray(e)) ? (n = n % 7 + r, n === i.create(e).day + 1) : t.isPlainObject(e) && t.isPlainObject(n) ? i.overlapRanges(e, n) : !1;
          }, n.prototype.flipEnable = function (e) {
            var t = this.item;t.enable = e || (-1 == t.enable ? 1 : -1);
          }, n.prototype.deactivate = function (e, n) {
            var i = this,
                r = i.item.disable.slice(0);return "flip" == n ? i.flipEnable() : n === !1 ? (i.flipEnable(1), r = []) : n === !0 ? (i.flipEnable(-1), r = []) : n.map(function (e) {
              for (var n, a = 0; a < r.length; a += 1) {
                if (i.isDateExact(e, r[a])) {
                  n = !0;break;
                }
              }n || (o.isInteger(e) || o.isDate(e) || t.isArray(e) || t.isPlainObject(e) && e.from && e.to) && r.push(e);
            }), r;
          }, n.prototype.activate = function (e, n) {
            var i = this,
                r = i.item.disable,
                a = r.length;return "flip" == n ? i.flipEnable() : n === !0 ? (i.flipEnable(1), r = []) : n === !1 ? (i.flipEnable(-1), r = []) : n.map(function (e) {
              var n, s, l, u;for (l = 0; a > l; l += 1) {
                if (s = r[l], i.isDateExact(s, e)) {
                  n = r[l] = null, u = !0;break;
                }if (i.isDateOverlap(s, e)) {
                  t.isPlainObject(e) ? (e.inverted = !0, n = e) : t.isArray(e) ? (n = e, n[3] || n.push("inverted")) : o.isDate(e) && (n = [e.getFullYear(), e.getMonth(), e.getDate(), "inverted"]);break;
                }
              }if (n) for (l = 0; a > l; l += 1) {
                if (i.isDateExact(r[l], e)) {
                  r[l] = null;break;
                }
              }if (u) for (l = 0; a > l; l += 1) {
                if (i.isDateOverlap(r[l], e)) {
                  r[l] = null;break;
                }
              }n && r.push(n);
            }), r.filter(function (e) {
              return null != e;
            });
          }, n.prototype.nodes = function (e) {
            var t = this,
                n = t.settings,
                a = t.item,
                s = a.now,
                l = a.select,
                u = a.highlight,
                c = a.view,
                d = a.disable,
                f = a.min,
                p = a.max,
                h = function (e, t) {
              return n.firstDay && (e.push(e.shift()), t.push(t.shift())), o.node("thead", o.node("tr", o.group({ min: 0, max: i - 1, i: 1, node: "th", item: function item(i) {
                  return [e[i], n.klass.weekdays, 'scope=col title="' + t[i] + '"'];
                } })));
            }((n.showWeekdaysFull ? n.weekdaysFull : n.weekdaysLetter).slice(0), n.weekdaysFull.slice(0)),
                v = function v(e) {
              return o.node("div", " ", n.klass["nav" + (e ? "Next" : "Prev")] + (e && c.year >= p.year && c.month >= p.month || !e && c.year <= f.year && c.month <= f.month ? " " + n.klass.navDisabled : ""), "data-nav=" + (e || -1) + " " + o.ariaAttr({ role: "button", controls: t.$node[0].id + "_table" }) + ' title="' + (e ? n.labelMonthNext : n.labelMonthPrev) + '"');
            },
                g = function g(i) {
              var r = n.showMonthsShort ? n.monthsShort : n.monthsFull;return "short_months" == i && (r = n.monthsShort), n.selectMonths && void 0 == i ? o.node("select", o.group({ min: 0, max: 11, i: 1, node: "option", item: function item(e) {
                  return [r[e], 0, "value=" + e + (c.month == e ? " selected" : "") + (c.year == f.year && e < f.month || c.year == p.year && e > p.month ? " disabled" : "")];
                } }), n.klass.selectMonth + " browser-default", (e ? "" : "disabled") + " " + o.ariaAttr({ controls: t.$node[0].id + "_table" }) + ' title="' + n.labelMonthSelect + '"') : "short_months" == i ? null != l ? o.node("div", r[l.month]) : o.node("div", r[c.month]) : o.node("div", r[c.month], n.klass.month);
            },
                m = function m(i) {
              var r = c.year,
                  a = n.selectYears === !0 ? 5 : ~ ~(n.selectYears / 2);if (a) {
                var s = f.year,
                    l = p.year,
                    u = r - a,
                    d = r + a;if (s > u && (d += s - u, u = s), d > l) {
                  var h = u - s,
                      v = d - l;u -= h > v ? v : h, d = l;
                }if (n.selectYears && void 0 == i) return o.node("select", o.group({ min: u, max: d, i: 1, node: "option", item: function item(e) {
                    return [e, 0, "value=" + e + (r == e ? " selected" : "")];
                  } }), n.klass.selectYear + " browser-default", (e ? "" : "disabled") + " " + o.ariaAttr({ controls: t.$node[0].id + "_table" }) + ' title="' + n.labelYearSelect + '"');
              }return "raw" == i ? o.node("div", r) : o.node("div", r, n.klass.year);
            };return createDayLabel = function createDayLabel() {
              return null != l ? o.node("div", l.date) : o.node("div", s.date);
            }, createWeekdayLabel = function createWeekdayLabel() {
              var e;e = null != l ? l.day : s.day;var t = n.weekdaysFull[e];return t;
            }, o.node("div", o.node("div", createWeekdayLabel(), "picker__weekday-display") + o.node("div", g("short_months"), n.klass.month_display) + o.node("div", createDayLabel(), n.klass.day_display) + o.node("div", m("raw"), n.klass.year_display), n.klass.date_display) + o.node("div", o.node("div", (n.selectYears ? g() + m() : g() + m()) + v() + v(1), n.klass.header) + o.node("table", h + o.node("tbody", o.group({ min: 0, max: r - 1, i: 1, node: "tr", item: function item(e) {
                var r = n.firstDay && 0 === t.create([c.year, c.month, 1]).day ? -7 : 0;return [o.group({ min: i * e - c.day + r + 1, max: function max() {
                    return this.min + i - 1;
                  }, i: 1, node: "td", item: function item(e) {
                    e = t.create([c.year, c.month, e + (n.firstDay ? 1 : 0)]);var i = l && l.pick == e.pick,
                        r = u && u.pick == e.pick,
                        a = d && t.disabled(e) || e.pick < f.pick || e.pick > p.pick,
                        h = o.trigger(t.formats.toString, t, [n.format, e]);return [o.node("div", e.date, function (t) {
                      return t.push(c.month == e.month ? n.klass.infocus : n.klass.outfocus), s.pick == e.pick && t.push(n.klass.now), i && t.push(n.klass.selected), r && t.push(n.klass.highlighted), a && t.push(n.klass.disabled), t.join(" ");
                    }([n.klass.day]), "data-pick=" + e.pick + " " + o.ariaAttr({ role: "gridcell", label: h, selected: i && t.$node.val() === h ? !0 : null, activedescendant: r ? !0 : null, disabled: a ? !0 : null })), "", o.ariaAttr({ role: "presentation" })];
                  } })];
              } })), n.klass.table, 'id="' + t.$node[0].id + '_table" ' + o.ariaAttr({ role: "grid", controls: t.$node[0].id, readonly: !0 })), n.klass.calendar_container) + o.node("div", o.node("button", n.today, "btn-flat picker__today", "type=button data-pick=" + s.pick + (e && !t.disabled(s) ? "" : " disabled") + " " + o.ariaAttr({ controls: t.$node[0].id })) + o.node("button", n.clear, "btn-flat picker__clear", "type=button data-clear=1" + (e ? "" : " disabled") + " " + o.ariaAttr({ controls: t.$node[0].id })) + o.node("button", n.close, "btn-flat picker__close", "type=button data-close=true " + (e ? "" : " disabled") + " " + o.ariaAttr({ controls: t.$node[0].id })), n.klass.footer);
          }, n.defaults = function (e) {
            return { labelMonthNext: "Next month", labelMonthPrev: "Previous month", labelMonthSelect: "Select a month", labelYearSelect: "Select a year", monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], weekdaysLetter: ["S", "M", "T", "W", "T", "F", "S"], today: "Today", clear: "Clear", close: "Close", format: "d mmmm, yyyy", klass: { table: e + "table", header: e + "header", date_display: e + "date-display", day_display: e + "day-display", month_display: e + "month-display", year_display: e + "year-display", calendar_container: e + "calendar-container", navPrev: e + "nav--prev", navNext: e + "nav--next", navDisabled: e + "nav--disabled", month: e + "month", year: e + "year", selectMonth: e + "select--month", selectYear: e + "select--year", weekdays: e + "weekday", day: e + "day", disabled: e + "day--disabled", selected: e + "day--selected", highlighted: e + "day--highlighted", now: e + "day--today", infocus: e + "day--infocus", outfocus: e + "day--outfocus", footer: e + "footer", buttonClear: e + "button--clear", buttonToday: e + "button--today", buttonClose: e + "button--close" } };
          }(e.klasses().picker + "__"), e.extend("pickadate", n);
        }), function (e) {
          function t() {
            var t = +e(this).attr("length"),
                n = +e(this).val().length,
                i = t >= n;e(this).parent().find('span[class="character-counter"]').html(n + "/" + t), r(i, e(this));
          }function n(t) {
            var n = t.parent().find('span[class="character-counter"]');n.length || (n = e("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1), t.parent().append(n));
          }function i() {
            e(this).parent().find('span[class="character-counter"]').html("");
          }function r(e, t) {
            var n = t.hasClass("invalid");e && n ? t.removeClass("invalid") : e || n || (t.removeClass("valid"), t.addClass("invalid"));
          }e.fn.characterCounter = function () {
            return this.each(function () {
              var r = e(this),
                  o = r.parent().find('span[class="character-counter"]');if (!o.length) {
                var a = void 0 !== r.attr("length");a && (r.on("input", t), r.on("focus", t), r.on("blur", i), n(r));
              }
            });
          }, e(document).ready(function () {
            e("input, textarea").characterCounter();
          });
        }(a), function (e) {
          var t = { init: function init(t) {
              var n = { time_constant: 200, dist: -100, shift: 0, padding: 0, full_width: !1 };return t = e.extend(n, t), this.each(function () {
                function n() {
                  "undefined" != typeof window.ontouchstart && (D[0].addEventListener("touchstart", c), D[0].addEventListener("touchmove", d), D[0].addEventListener("touchend", f)), D[0].addEventListener("mousedown", c), D[0].addEventListener("mousemove", d), D[0].addEventListener("mouseup", f), D[0].addEventListener("click", u);
                }function i(e) {
                  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX;
                }function r(e) {
                  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY;
                }function o(e) {
                  return e >= b ? e % b : 0 > e ? o(b + e % b) : e;
                }function a(e) {
                  var n, i, r, a, s, l, u;for (h = "number" == typeof e ? e : h, v = Math.floor((h + m / 2) / m), r = h - v * m, a = 0 > r ? 1 : -1, s = -a * r * 2 / m, t.full_width ? u = "translateX(0)" : (u = "translateX(" + (D[0].clientWidth - item_width) / 2 + "px) ", u += "translateY(" + (D[0].clientHeight - item_width) / 2 + "px)"), l = p[o(v)], l.style[S] = u + " translateX(" + -r / 2 + "px) translateX(" + a * t.shift * s * n + "px) translateZ(" + t.dist * s + "px)", l.style.zIndex = 0, t.full_width ? tweenedOpacity = 1 : tweenedOpacity = 1 - .2 * s, l.style.opacity = tweenedOpacity, i = b >> 1, n = 1; i >= n; ++n) {
                    t.full_width ? (zTranslation = t.dist, tweenedOpacity = n === i && 0 > r ? 1 - s : 1) : (zTranslation = t.dist * (2 * n + s * a), tweenedOpacity = 1 - .2 * (2 * n + s * a)), l = p[o(v + n)], l.style[S] = u + " translateX(" + (t.shift + (m * n - r) / 2) + "px) translateZ(" + zTranslation + "px)", l.style.zIndex = -n, l.style.opacity = tweenedOpacity, t.full_width ? (zTranslation = t.dist, tweenedOpacity = n === i && r > 0 ? 1 - s : 1) : (zTranslation = t.dist * (2 * n - s * a), tweenedOpacity = 1 - .2 * (2 * n - s * a)), l = p[o(v - n)], l.style[S] = u + " translateX(" + (-t.shift + (-m * n - r) / 2) + "px) translateZ(" + zTranslation + "px)", l.style.zIndex = -n, l.style.opacity = tweenedOpacity;
                  }l = p[o(v)], l.style[S] = u + " translateX(" + -r / 2 + "px) translateX(" + a * t.shift * s + "px) translateZ(" + t.dist * s + "px)", l.style.zIndex = 0, t.full_width ? tweenedOpacity = 1 : tweenedOpacity = 1 - .2 * s, l.style.opacity = tweenedOpacity;
                }function s() {
                  var e, t, n, i;e = Date.now(), t = e - A, A = e, n = h - E, E = h, i = 1e3 * n / (1 + t), k = .8 * i + .2 * k;
                }function l() {
                  var e, n;C && (e = Date.now() - A, n = C * Math.exp(-e / t.time_constant), n > 2 || -2 > n ? (a(T - n), requestAnimationFrame(l)) : a(T));
                }function u(n) {
                  if (P) return n.preventDefault(), n.stopPropagation(), !1;if (!t.full_width) {
                    var i = e(n.target).closest(".carousel-item").index(),
                        r = v % b - i;0 > r ? Math.abs(r + b) < Math.abs(r) && (r += b) : r > 0 && Math.abs(r - b) < r && (r -= b), 0 > r ? e(this).trigger("carouselNext", [Math.abs(r)]) : r > 0 && e(this).trigger("carouselPrev", [r]);
                  }
                }function c(e) {
                  g = !0, P = !1, q = !1, x = i(e), w = r(e), k = C = 0, E = h, A = Date.now(), clearInterval(O), O = setInterval(s, 100);
                }function d(e) {
                  var t, n, o;if (g) if (t = i(e), y = r(e), n = x - t, o = Math.abs(w - y), 30 > o && !q) (n > 2 || -2 > n) && (P = !0, x = t, a(h + n));else {
                    if (P) return e.preventDefault(), e.stopPropagation(), !1;q = !0;
                  }return P ? (e.preventDefault(), e.stopPropagation(), !1) : void 0;
                }function f(e) {
                  return g = !1, clearInterval(O), T = h, (k > 10 || -10 > k) && (C = .9 * k, T = h + C), T = Math.round(T / m) * m, C = T - h, A = Date.now(), requestAnimationFrame(l), e.preventDefault(), e.stopPropagation(), !1;
                }var p,
                    h,
                    v,
                    g,
                    m,
                    b,
                    x,
                    w,
                    C,
                    T,
                    k,
                    S,
                    E,
                    A,
                    O,
                    P,
                    q,
                    D = e(this);return D.hasClass("initialized") ? !0 : (t.full_width && (t.dist = 0, imageHeight = D.find(".carousel-item img").first().load(function () {
                  D.css("height", e(this).height());
                })), D.addClass("initialized"), g = !1, h = T = 0, p = [], item_width = D.find(".carousel-item").first().innerWidth(), m = 2 * item_width + t.padding, D.find(".carousel-item").each(function () {
                  p.push(e(this)[0]);
                }), b = p.length, S = "transform", ["webkit", "Moz", "O", "ms"].every(function (e) {
                  var t = e + "Transform";return "undefined" != typeof document.body.style[t] ? (S = t, !1) : !0;
                }), window.onresize = a, n(), a(h), e(this).on("carouselNext", function (e, t) {
                  void 0 === t && (t = 1), T = h + m * t, h !== T && (C = T - h, A = Date.now(), requestAnimationFrame(l));
                }), void e(this).on("carouselPrev", function (e, t) {
                  void 0 === t && (t = 1), T = h - m * t, h !== T && (C = T - h, A = Date.now(), requestAnimationFrame(l));
                }));
              });
            }, next: function next(t) {
              e(this).trigger("carouselNext", [t]);
            }, prev: function prev(t) {
              e(this).trigger("carouselPrev", [t]);
            } };e.fn.carousel = function (n) {
            return t[n] ? t[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != (typeof n === "undefined" ? "undefined" : _typeof(n)) && n ? void e.error("Method " + n + " does not exist on jQuery.carousel") : t.init.apply(this, arguments);
          };
        }(a), o("undefined" != typeof materialize ? materialize : window.materialize);
      }).call(n, void 0, void 0, void 0, void 0, function (e) {
        t.exports = e;
      });
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
  }, {}], 3: [function (e, t, n) {
    var i = e("jquery");e("materialize"), i(document).ready(function () {
      i(".button-collapse").sideNav();
    });
  }, { jquery: 1, materialize: 2 }] }, {}, [3]);