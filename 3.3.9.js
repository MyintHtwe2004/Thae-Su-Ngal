!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).ytlib = {})
}(this, function(e) {
    "use strict";
  var ju = "dfsa";
    var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function n(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports
    }
    var r = function(e) {
            return e && e.Math == Math && e
        },
        o = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof t && t) || function() {
            return this
        }() || Function("return this")(),
        i = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        },
        a = !i(function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        }),
        l = {}.propertyIsEnumerable,
        u = Object.getOwnPropertyDescriptor,
        s = {
            f: u && !l.call({
                1: 2
            }, 1) ? function(e) {
                var t = u(this, e);
                return !!t && t.enumerable
            } : l
        },
        c = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        },
        d = {}.toString,
        f = function(e) {
            return d.call(e).slice(8, -1)
        },
        p = "".split,
        m = i(function() {
            return !Object("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return "String" == f(e) ? p.call(e, "") : Object(e)
        } : Object,
        h = function(e) {
            if (null == e)
                throw TypeError("Can't call method on " + e);
            return e
        },
        v = function(e) {
            return m(h(e))
        },
        g = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        },
        A = function(e, t) {
            if (!g(e))
                return e;
            var n,
                r;
            if (t && "function" == typeof (n = e.toString) && !g(r = n.call(e)))
                return r;
            if ("function" == typeof (n = e.valueOf) && !g(r = n.call(e)))
                return r;
            if (!t && "function" == typeof (n = e.toString) && !g(r = n.call(e)))
                return r;
            throw TypeError("Can't convert object to primitive value")
        },
        y = {}.hasOwnProperty,
        b = function(e, t) {
            return y.call(e, t)
        },
        w = o.document,
        D = g(w) && g(w.createElement),
        B = !a && !i(function() {
            return 7 != Object.defineProperty(D ? w.createElement("div") : {}, "a", {
                get: function() {
                    return 7
                }
            }).a
        }),
        _ = Object.getOwnPropertyDescriptor,
        x = {
            f: a ? _ : function(e, t) {
                if (e = v(e), t = A(t, !0), B)
                    try {
                        return _(e, t)
                    } catch (e) {}
                if (b(e, t))
                    return c(!s.f.call(e, t), e[t])
            }
        },
        E = function(e) {
            if (!g(e))
                throw TypeError(String(e) + " is not an object");
            return e
        },
        C = Object.defineProperty,
        T = {
            f: a ? C : function(e, t, n) {
                if (E(e), t = A(t, !0), E(n), B)
                    try {
                        return C(e, t, n)
                    } catch (e) {}
                if ("get" in n || "set" in n)
                    throw TypeError("Accessors not supported");
                return "value" in n && (e[t] = n.value), e
            }
        },
        k = a ? function(e, t, n) {
            return T.f(e, t, c(1, n))
        } : function(e, t, n) {
            return e[t] = n, e
        },
        S = function(e, t) {
            try {
                k(o, e, t)
            } catch (n) {
                o[e] = t
            }
            return t
        },
        N = o["__core-js_shared__"] || S("__core-js_shared__", {}),
        O = Function.toString;
    "function" != typeof N.inspectSource && (N.inspectSource = function(e) {
        return O.call(e)
    });
    var P,
        I,
        M,
        L = N.inspectSource,
        F = o.WeakMap,
        R = "function" == typeof F && /native code/.test(L(F)),
        V = n(function(e) {
            (e.exports = function(e, t) {
                return N[e] || (N[e] = void 0 !== t ? t : {})
            })("versions", []).push({
                version: "3.9.1",
                mode: "global",
                copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
            })
        }),
        j = 0,
        U = Math.random(),
        H = function(e) {
            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++j + U).toString(36)
        },
        q = V("keys"),
        G = {};
    if (R) {
        var Z = N.state || (N.state = new (0, o.WeakMap)),
            z = Z.get,
            Q = Z.has,
            Y = Z.set;
        P = function(e, t) {
            return t.facade = e, Y.call(Z, e, t), t
        },
        I = function(e) {
            return z.call(Z, e) || {}
        },
        M = function(e) {
            return Q.call(Z, e)
        }
    } else {
        var J = q.state || (q.state = H("state"));
        G[J] = !0,
        P = function(e, t) {
            return t.facade = e, k(e, J, t), t
        },
        I = function(e) {
            return b(e, J) ? e[J] : {}
        },
        M = function(e) {
            return b(e, J)
        }
    }
    var K,
        W = {
            set: P,
            get: I,
            has: M,
            enforce: function(e) {
                return M(e) ? I(e) : P(e, {})
            },
            getterFor: function(e) {
                return function(t) {
                    var n;
                    if (!g(t) || (n = I(t)).type !== e)
                        throw TypeError("Incompatible receiver, " + e + " required");
                    return n
                }
            }
        },
        X = n(function(e) {
            var t = W.get,
                n = W.enforce,
                r = String(String).split("String");
            (e.exports = function(e, t, i, a) {
                var l,
                    u = !!a && !!a.unsafe,
                    s = !!a && !!a.enumerable,
                    c = !!a && !!a.noTargetGet;
                "function" == typeof i && ("string" != typeof t || b(i, "name") || k(i, "name", t), (l = n(i)).source || (l.source = r.join("string" == typeof t ? t : ""))),
                e !== o ? (u ? !c && e[t] && (s = !0) : delete e[t], s ? e[t] = i : k(e, t, i)) : s ? e[t] = i : S(t, i)
            })(Function.prototype, "toString", function() {
                return "function" == typeof this && t(this).source || L(this)
            })
        }),
        $ = o,
        ee = function(e) {
            return "function" == typeof e ? e : void 0
        },
        te = function(e, t) {
            return arguments.length < 2 ? ee($[e]) || ee(o[e]) : $[e] && $[e][t] || o[e] && o[e][t]
        },
        ne = Math.ceil,
        re = Math.floor,
        oe = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? re : ne)(e)
        },
        ie = Math.min,
        ae = function(e) {
            return e > 0 ? ie(oe(e), 9007199254740991) : 0
        },
        le = Math.max,
        ue = Math.min,
        se = function(e, t) {
            var n = oe(e);
            return n < 0 ? le(n + t, 0) : ue(n, t)
        },
        ce = function(e) {
            return function(t, n, r) {
                var o,
                    i = v(t),
                    a = ae(i.length),
                    l = se(r, a);
                if (e && n != n) {
                    for (; a > l;)
                        if ((o = i[l++]) != o)
                            return !0
                } else
                    for (; a > l; l++)
                        if ((e || l in i) && i[l] === n)
                            return e || l || 0;
                return !e && -1
            }
        },
        de = {
            includes: ce(!0),
            indexOf: ce(!1)
        },
        fe = de.indexOf,
        pe = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"].concat("length", "prototype"),
        me = {
            f: Object.getOwnPropertyNames || function(e) {
                return function(e, t) {
                    var n,
                        r = v(e),
                        o = 0,
                        i = [];
                    for (n in r)
                        !b(G, n) && b(r, n) && i.push(n);
                    for (; t.length > o;)
                        b(r, n = t[o++]) && (~fe(i, n) || i.push(n));
                    return i
                }(e, pe)
            }
        },
        he = {
            f: Object.getOwnPropertySymbols
        },
        ve = te("Reflect", "ownKeys") || function(e) {
            var t = me.f(E(e)),
                n = he.f;
            return n ? t.concat(n(e)) : t
        },
        ge = function(e, t) {
            for (var n = ve(t), r = T.f, o = x.f, i = 0; i < n.length; i++) {
                var a = n[i];
                b(e, a) || r(e, a, o(t, a))
            }
        },
        Ae = /#|\.prototype\./,
        ye = function(e, t) {
            var n = we[be(e)];
            return n == Be || n != De && ("function" == typeof t ? i(t) : !!t)
        },
        be = ye.normalize = function(e) {
            return String(e).replace(Ae, ".").toLowerCase()
        },
        we = ye.data = {},
        De = ye.NATIVE = "N",
        Be = ye.POLYFILL = "P",
        _e = ye,
        xe = x.f,
        Ee = function(e, t) {
            var n,
                r,
                i,
                a,
                l,
                u = e.target,
                s = e.global,
                c = e.stat;
            if (n = s ? o : c ? o[u] || S(u, {}) : (o[u] || {}).prototype)
                for (r in t) {
                    if (a = t[r], i = e.noTargetGet ? (l = xe(n, r)) && l.value : n[r], !_e(s ? r : u + (c ? "." : "#") + r, e.forced) && void 0 !== i) {
                        if (typeof a == typeof i)
                            continue;
                        ge(a, i)
                    }
                    (e.sham || i && i.sham) && k(a, "sham", !0),
                    X(n, r, a, e)
                }
        },
        Ce = de.indexOf,
        Te = [].indexOf,
        ke = !!Te && 1 / [1].indexOf(1, -0) < 0,
        Se = !!(K = [].indexOf) && i(function() {
            K.call(null, function() {
                throw 1
            }, 1)
        });
    Ee({
        target: "Array",
        proto: !0,
        forced: ke || !Se
    }, {
        indexOf: function(e) {
            return ke ? Te.apply(this, arguments) || 0 : Ce(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Ne,
        Oe,
        Pe = Array.isArray || function(e) {
            return "Array" == f(e)
        },
        Ie = function(e, t, n) {
            var r = A(t);
            r in e ? T.f(e, r, c(0, n)) : e[r] = n
        },
        Me = "process" == f(o.process),
        Le = te("navigator", "userAgent") || "",
        Fe = o.process,
        Re = Fe && Fe.versions,
        Ve = Re && Re.v8;
    Ve ? Oe = (Ne = Ve.split("."))[0] + Ne[1] : Le && (!(Ne = Le.match(/Edge\/(\d+)/)) || Ne[1] >= 74) && (Ne = Le.match(/Chrome\/(\d+)/)) && (Oe = Ne[1]);
    var je = Oe && +Oe,
        Ue = !!Object.getOwnPropertySymbols && !i(function() {
            return !Symbol.sham && (Me ? 38 === je : je > 37 && je < 41)
        }),
        He = Ue && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        qe = V("wks"),
        Ge = o.Symbol,
        Ze = He ? Ge : Ge && Ge.withoutSetter || H,
        ze = function(e) {
            return b(qe, e) && (Ue || "string" == typeof qe[e]) || (qe[e] = Ue && b(Ge, e) ? Ge[e] : Ze("Symbol." + e)), qe[e]
        },
        Qe = ze("species"),
        Ye = function(e) {
            return je >= 51 || !i(function() {
                    var t = [];
                    return (t.constructor = {})[Qe] = function() {
                        return {
                            foo: 1
                        }
                    }, 1 !== t[e](Boolean).foo
                })
        },
        Je = Ye("slice"),
        Ke = ze("species"),
        We = [].slice,
        Xe = Math.max;
    Ee({
        target: "Array",
        proto: !0,
        forced: !Je
    }, {
        slice: function(e, t) {
            var n,
                r,
                o,
                i = v(this),
                a = ae(i.length),
                l = se(e, a),
                u = se(void 0 === t ? a : t, a);
            if (Pe(i) && ("function" != typeof (n = i.constructor) || n !== Array && !Pe(n.prototype) ? g(n) && null === (n = n[Ke]) && (n = void 0) : n = void 0, n === Array || void 0 === n))
                return We.call(i, l, u);
            for (r = new (void 0 === n ? Array : n)(Xe(u - l, 0)), o = 0; l < u; l++, o++)
                l in i && Ie(r, o, i[l]);
            return r.length = o, r
        }
    });
    var $e = function() {
        var e = E(this),
            t = "";
        return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
    };
    function et(e, t) {
        return RegExp(e, t)
    }
    var tt,
        nt,
        rt = {
            UNSUPPORTED_Y: i(function() {
                var e = et("a", "y");
                return e.lastIndex = 2, null != e.exec("abcd")
            }),
            BROKEN_CARET: i(function() {
                var e = et("^r", "gy");
                return e.lastIndex = 2, null != e.exec("str")
            })
        },
        ot = RegExp.prototype.exec,
        it = String.prototype.replace,
        at = ot,
        lt = (nt = /b*/g, ot.call(tt = /a/, "a"), ot.call(nt, "a"), 0 !== tt.lastIndex || 0 !== nt.lastIndex),
        ut = rt.UNSUPPORTED_Y || rt.BROKEN_CARET,
        st = void 0 !== /()??/.exec("")[1];
    (lt || st || ut) && (at = function(e) {
        var t,
            n,
            r,
            o,
            i = this,
            a = ut && i.sticky,
            l = $e.call(i),
            u = i.source,
            s = 0,
            c = e;
        return a && (-1 === (l = l.replace("y", "")).indexOf("g") && (l += "g"), c = String(e).slice(i.lastIndex), i.lastIndex > 0 && (!i.multiline || i.multiline && "\n" !== e[i.lastIndex - 1]) && (u = "(?: " + u + ")", c = " " + c, s++), n = new RegExp("^(?:" + u + ")", l)), st && (n = new RegExp("^" + u + "$(?!\\s)", l)), lt && (t = i.lastIndex), r = ot.call(a ? n : i, c), a ? r ? (r.input = r.input.slice(s), r[0] = r[0].slice(s), r.index = i.lastIndex, i.lastIndex += r[0].length) : i.lastIndex = 0 : lt && r && (i.lastIndex = i.global ? r.index + r[0].length : t), st && r && r.length > 1 && it.call(r[0], n, function() {
            for (o = 1; o < arguments.length - 2; o++)
                void 0 === arguments[o] && (r[o] = void 0)
        }), r
    });
    var ct = at;
    Ee({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== ct
    }, {
        exec: ct
    }),
    ze("species");
    var dt = !i(function() {
            var e = /./;
            return e.exec = function() {
                var e = [];
                return e.groups = {
                    a: "7"
                }, e
            }, "7" !== "".replace(e, "$<a>")
        }),
        ft = "$0" === "a".replace(/./, "$0"),
        pt = ze("replace"),
        mt = !!/./[pt] && "" === /./[pt]("a", "$0"),
        ht = (i(function() {
            var e = /(?:)/,
                t = e.exec;
            e.exec = function() {
                return t.apply(this, arguments)
            };
            var n = "ab".split(e);
            return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
        }), function(e) {
            return function(t, n) {
                var r,
                    o,
                    i = String(h(t)),
                    a = oe(n),
                    l = i.length;
                return a < 0 || a >= l ? e ? "" : void 0 : (r = i.charCodeAt(a)) < 55296 || r > 56319 || a + 1 === l || (o = i.charCodeAt(a + 1)) < 56320 || o > 57343 ? e ? i.charAt(a) : r : e ? i.slice(a, a + 2) : o - 56320 + (r - 55296 << 10) + 65536
            }
        }),
        vt = (ht(!1), ht(!0)),
        gt = function(e, t, n) {
            return t + (n ? vt(e, t).length : 1)
        },
        At = function(e) {
            return Object(h(e))
        },
        yt = Math.floor,
        bt = "".replace,
        wt = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
        Dt = /\$([$&'`]|\d{1,2})/g,
        Bt = function(e, t, n, r, o, i) {
            var a = n + e.length,
                l = r.length,
                u = Dt;
            return void 0 !== o && (o = At(o), u = wt), bt.call(i, u, function(i, u) {
                var s;
                switch (u.charAt(0)) {
                case "$":
                    return "$";
                case "&":
                    return e;
                case "`":
                    return t.slice(0, n);
                case "'":
                    return t.slice(a);
                case "<":
                    s = o[u.slice(1, -1)];
                    break;
                default:
                    var c = +u;
                    if (0 === c)
                        return i;
                    if (c > l) {
                        var d = yt(c / 10);
                        return 0 === d ? i : d <= l ? void 0 === r[d - 1] ? u.charAt(1) : r[d - 1] + u.charAt(1) : i
                    }
                    s = r[c - 1]
                }
                return void 0 === s ? "" : s
            })
        },
        _t = function(e, t) {
            var n = e.exec;
            if ("function" == typeof n) {
                var r = n.call(e, t);
                if ("object" != typeof r)
                    throw TypeError("RegExp exec method returned something other than an Object or null");
                return r
            }
            if ("RegExp" !== f(e))
                throw TypeError("RegExp#exec called on incompatible receiver");
            return ct.call(e, t)
        },
        xt = Math.max,
        Et = Math.min;
    !function(e, t, n, r) {
        var o = ze(e),
            a = !i(function() {
                var t = {};
                return t[o] = function() {
                    return 7
                }, 7 != ""[e](t)
            }),
            l = a && !i(function() {
                var e = !1,
                    t = /a/;
                return t.exec = function() {
                    return e = !0, null
                }, t[o](""), !e
            });
        if (!a || !l || !dt || !ft || mt) {
            var u = /./[o],
                s = function(e, t, n, r) {
                    var o = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
                        i = r.REPLACE_KEEPS_$0,
                        l = o ? "$" : "$0";
                    return [function(n, r) {
                        var o = h(this),
                            i = null == n ? void 0 : n[e];
                        return void 0 !== i ? i.call(n, o, r) : t.call(String(o), n, r)
                    }, function(e, n) {
                        if (!o && i || "string" == typeof n && -1 === n.indexOf(l)) {
                            var r = function(e, t, n, r, o) {
                                return t.exec === ct ? a ? {
                                    done: !0,
                                    value: u.call(t, n, r)
                                } : {
                                    done: !0,
                                    value: e.call(n, t, r)
                                } : {
                                    done: !1
                                }
                            }(t, e, this, n);
                            if (r.done)
                                return r.value
                        }
                        var s = E(e),
                            c = String(this),
                            d = "function" == typeof n;
                        d || (n = String(n));
                        var f = s.global;
                        if (f) {
                            var p = s.unicode;
                            s.lastIndex = 0
                        }
                        for (var m = [];;) {
                            var h = _t(s, c);
                            if (null === h)
                                break;
                            if (m.push(h), !f)
                                break;
                            "" === String(h[0]) && (s.lastIndex = gt(c, ae(s.lastIndex), p))
                        }
                        for (var v, g = "", A = 0, y = 0; y < m.length; y++) {
                            h = m[y];
                            for (var b = String(h[0]), w = xt(Et(oe(h.index), c.length), 0), D = [], B = 1; B < h.length; B++)
                                D.push(void 0 === (v = h[B]) ? v : String(v));
                            var _ = h.groups;
                            if (d) {
                                var x = [b].concat(D, w, c);
                                void 0 !== _ && x.push(_);
                                var C = String(n.apply(void 0, x))
                            } else
                                C = Bt(b, c, w, D, _, n);
                            w >= A && (g += c.slice(A, w) + C, A = w + b.length)
                        }
                        return g + c.slice(A)
                    }]
                }(o, ""[e], 0, {
                    REPLACE_KEEPS_$0: ft,
                    REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: mt
                }),
                c = s[1];
            X(String.prototype, e, s[0]),
            X(RegExp.prototype, o, function(e, t) {
                return c.call(e, this, t)
            })
        }
    }("replace");
    var Ct = {
        title: "",
        icon: "",
        videoSrc: ""
    };
    function Tt(e, t, n, r, o, i, a) {
        try {
            var l = e[i](a),
                u = l.value
        } catch (e) {
            return void n(e)
        }
        l.done ? t(u) : Promise.resolve(u).then(r, o)
    }
    function kt(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);
                function a(e) {
                    Tt(i, r, o, a, l, "next", e)
                }
                function l(e) {
                    Tt(i, r, o, a, l, "throw", e)
                }
                a(void 0)
            })
        }
    }
    var St = (new Date).valueOf(),
        Nt = new Map,
        Ot = e => {
            window.webkit && window.webkit.messageHandlers && (St++, window.webkit.messageHandlers.jsbridge.postMessage(encodeURIComponent(JSON.stringify({
                uid: St,
                type: "block.resources",
                data: e
            }))))
        },
        Pt = function() {
            var e = kt(function* (e) {
                var t = ++St;
                return window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.jsbridge.postMessage(encodeURIComponent(JSON.stringify({
                    data: e,
                    uid: t,
                    type: "video.play"
                }))), new Promise(e => {
                    Nt.set(t, t => {
                        e(t)
                    })
                })
            });
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        It = e => {
            St++,
            window.webkit.messageHandlers.jsbridge.postMessage(encodeURIComponent(JSON.stringify({
                data: e,
                uid: St,
                type: "obtain.allImage"
            })))
        },
        Mt = e => {
            St++,
            window.webkit.messageHandlers.jsbridge.postMessage(encodeURIComponent(JSON.stringify({
                data: e,
                uid: St,
                type: "video.extract"
            })))
        },
        Lt = function() {
            var e = kt(function* () {
                window.webkit && window.webkit.messageHandlers && (St++, window.webkit.messageHandlers.jsbridge.postMessage(encodeURIComponent(JSON.stringify({
                    uid: St,
                    type: "state.changed"
                }))))
            });
            return function() {
                return e.apply(this, arguments)
            }
        }(),
        Ft = function() {
            var e = kt(function* () {
                var e = ++St;
                return window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.jsbridge.postMessage(encodeURIComponent(JSON.stringify({
                    uid: e,
                    type: "config.get"
                }))), new Promise(t => {
                    Nt.set(e, e => {
                        t(e)
                    })
                })
            });
            return function() {
                return e.apply(this, arguments)
            }
        }(),
        Rt = function() {
            var e = kt(function* (e) {
                St++,
                window.webkit.messageHandlers.jsbridge.postMessage(encodeURIComponent(JSON.stringify({
                    data: e,
                    uid: St,
                    type: "go.normalplayer"
                })))
            });
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        Vt = function() {
            var e = kt(function* (e) {
                St++,
                window.webkit.messageHandlers.jsbridge.postMessage(encodeURIComponent(JSON.stringify({
                    data: e,
                    uid: St,
                    type: "event.track"
                })))
            });
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        jt = {
            __proto__: null,
            postMessageToVsplayer: e => {
                try {
                    var t = e && JSON.parse(decodeURIComponent(e));
                    if (t) {
                        var {uid: n, data: r} = t;
                        if (Nt.has(n)) {
                            var o = Nt.get(n);
                            o && o(r),
                            Nt.delete(n)
                        }
                    }
                } catch (t) {
                    console.log("postMessageToVsplayer error", e)
                }
            },
            onBlockPageResource: Ot,
            onPlayVideo: Pt,
            onObtainAllImage: It,
            extractYouTubeInfo: Mt,
            onStateChanged: Lt,
            getConfig: Ft,
            jumpNormalPlayer: Rt,
            eventTrack: Vt
        },
        Ut = "\t\n\v\f\r                　\u2028\u2029\ufeff",
        Ht = "[" + Ut + "]",
        qt = RegExp("^" + Ht + Ht + "*"),
        Gt = RegExp(Ht + Ht + "*$"),
        Zt = function(e) {
            return function(t) {
                var n = String(h(t));
                return 1 & e && (n = n.replace(qt, "")), 2 & e && (n = n.replace(Gt, "")), n
            }
        },
        zt = (Zt(1), Zt(2), Zt(3));
    function Qt(e) {
        var t = document.createElement("link");
        if (t.setAttribute("rel", "stylesheet"), t.setAttribute("type", "text/css"), t.setAttribute("href", "data:text/css;charset=UTF-8," + encodeURIComponent(e)), document.head)
            document.head.appendChild(t);
        else {
            var n = function() {
                document.head.appendChild(t),
                document.removeEventListener("DOMContentLoaded", n, !1)
            };
            document.addEventListener("DOMContentLoaded", n, !1)
        }
    }
    function Yt() {
        var e = document.querySelectorAll('[rel="icon"]'),
            t = [location.origin + "/favicon.ico"];
        e.forEach(e => {
            e.href && (0 === e.href.indexOf("http") ? t.push(e.href) : t.push(location.origin + e.href))
        });
        var n = t[t.length - 1];
        return Ct.icon = n, n
    }
    function Jt() {
        var e = document.title;
        return Ct.title = e, e
    }
    Ee({
        target: "String",
        proto: !0,
        forced: i(function() {
            return !!Ut.trim() || "​᠎" != "​᠎".trim() || "trim" !== Ut.trim.name
        })
    }, {
        trim: function() {
            return zt(this)
        }
    });
    var Kt = {
        history: "none",
        id: 0,
        listeners: new Map
    };
    function Wt() {
        for (var [e, t] of Kt.listeners.entries())
            t && t(Kt.history)
    }
    function Xt() {
        location.href.match(/.*music.youtube.com\/watch.*/) && Qt("\n    #main-panel.ytmusic-player-page {\n      overflow: hidden;\n      height: 0px\n    }\n    .side-panel.ytmusic-player-page {\n      margin: 0px;\n    }\n    .content.ytmusic-player-page {\n      padding: 0px;\n    }\n    #ytmusic-mealbar-promo-renderer.ytmusic-popup-container {\n      display: none;\n    }\n  "),
        location.href.match(/.*music.youtube.com/) && Qt("\n    ytmusic-mealbar-promo-renderer.style-scope.ytmusic-popup-container {\n      display: none;\n    }\n  "),
        location.href.match(/.*y2mate.*/) && Qt('\n    iframe[style*="2147483647"] {transform:scaleX(0)}\n  ')
    }
    !function() {
        function e(e, t) {
            return function() {
                var n = e.apply(this, arguments);
                return Lt(), Kt.history = t, Wt(), Xt(), n
            }
        }
        history.pushState = e(history.pushState, "push"),
        history.popState = e(history.popState, "pop"),
        history.replaceState = e(history.replaceState, "none"),
        window.addEventListener("popstate", function() {
            Lt(),
            Kt.history = "pop",
            Wt()
        })
    }(),
    window.performance && window.performance.getEntriesByType && window.addEventListener("load", function() {
        function e(e) {
            var t = e.match(/url\\(.+?\\)/g);
            return t ? t.map(e => e.replace(/url\\(['\\"]?(.+?)['\\"]?\\)/g, "$1")) : []
        }
        var t = function() {
                var t = [...Array.prototype.slice.call(document.images)].map(e => e.src),
                    n = Array.prototype.slice.call(document.scripts);
                t = [...t, ...n.map(e => e.src)];
                var r = Array.prototype.slice.call(document.getElementsByTagName("link"));
                return t = [...t, ...r.map(e => e.href)], [...Array.prototype.slice.call(document.styleSheets)].forEach(n => {
                    n.cssRules && Array.prototype.slice.call(n.cssRules).forEach(n => {
                        t = [...t, ...e(n.cssText)]
                    })
                }), [...Array.prototype.slice.call(document.querySelectorAll("*[style]"))].forEach(n => {
                    t = [...t, ...e(n.getAttributeNode("style").value)]
                }), [...Array.prototype.slice.call(document.querySelectorAll("td[background], tr[background], table[background]"))].forEach(e => {
                    t.push(e.getAttributeNode("background").value)
                }), t.filter(e => null != e && "" != e)
            }(),
            n = window.performance.getEntriesByType("resource").map(e => e.name);
        n = n.filter(e => null != e && "" != e);
        var r = t.filter(e => !n.includes(e));
        Ot(r)
    }),
    Xt();
    var $t = {
            __proto__: null,
            getIcon: Yt,
            getTitle: Jt,
            registerStateChangedListener: function(e) {
                var t = Kt.id++;
                return Kt.listeners.set(t, e), () => {
                    Kt.listeners.delete(t)
                }
            }
        },
        en = ze("species"),
        tn = function(e, t) {
            var n;
            return Pe(e) && ("function" != typeof (n = e.constructor) || n !== Array && !Pe(n.prototype) ? g(n) && null === (n = n[en]) && (n = void 0) : n = void 0), new (void 0 === n ? Array : n)(0 === t ? 0 : t)
        },
        nn = Ye("splice"),
        rn = Math.max,
        on = Math.min;
    function an() {}
    Ee({
        target: "Array",
        proto: !0,
        forced: !nn
    }, {
        splice: function(e, t) {
            var n,
                r,
                o,
                i,
                a,
                l,
                u = At(this),
                s = ae(u.length),
                c = se(e, s),
                d = arguments.length;
            if (0 === d ? n = r = 0 : 1 === d ? (n = 0, r = s - c) : (n = d - 2, r = on(rn(oe(t), 0), s - c)), s + n - r > 9007199254740991)
                throw TypeError("Maximum allowed length exceeded");
            for (o = tn(u, r), i = 0; i < r; i++)
                (a = c + i) in u && Ie(o, i, u[a]);
            if (o.length = r, n < r) {
                for (i = c; i < s - r; i++)
                    l = i + n,
                    (a = i + r) in u ? u[l] = u[a] : delete u[l];
                for (i = s; i > s - r + n; i--)
                    delete u[i - 1]
            } else if (n > r)
                for (i = s - r; i > c; i--)
                    l = i + n - 1,
                    (a = i + r - 1) in u ? u[l] = u[a] : delete u[l];
            for (i = 0; i < n; i++)
                u[i + c] = arguments[i + 2];
            return u.length = s - r + n, o
        }
    });
    var ln = {},
        un = 0;
    function sn(e, t=window.location.href) {
        e = e.replace(/[\[\]]/g, "\\$&");
        var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
        return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
    }
    function cn() {
        try {
            return window.self === window.top
        } catch (e) {
            return !1
        }
    }
    function dn(e) {
        var t = document.createElement("style");
        t.appendChild(document.createTextNode("\n    #__box{position: fixed;z-index: 999; right: 20px;bottom: 100px;width: 64px;height:  64px;background-color: #ffc829;border-radius: 50%;display: flex;justify-content: center;align-items: center;}\n    #__box img {width:48px;height:48px}@-webkit-keyframes vibrate-2{0%{-webkit-transform:translate(0);transform:translate(0)}20%{-webkit-transform:translate(2px,-2px);transform:translate(2px,-2px)}40%{-webkit-transform:translate(2px,2px);transform:translate(2px,2px)}60%{-webkit-transform:translate(-2px,2px);transform:translate(-2px,2px)}80%{-webkit-transform:translate(-2px,-2px);transform:translate(-2px,-2px)}100%{-webkit-transform:translate(0);transform:translate(0)}}@keyframes vibrate-2{0%{-webkit-transform:translate(0);transform:translate(0)}20%{-webkit-transform:translate(2px,-2px);transform:translate(2px,-2px)}40%{-webkit-transform:translate(2px,2px);transform:translate(2px,2px)}60%{-webkit-transform:translate(-2px,2px);transform:translate(-2px,2px)}80%{-webkit-transform:translate(-2px,-2px);transform:translate(-2px,-2px)}100%{-webkit-transform:translate(0);transform:translate(0)}}\n    .vibrate-2{-webkit-animation:vibrate-2 .3s linear infinite both;animation:vibrate-2 .3s linear infinite both}\n  ")),
        document.getElementsByTagName("head")[0].appendChild(t);
        var n = document.createElement("div");
        n.id = "__box",
        n.classList.add("vibrate-2"),
        n.addEventListener("click", () => {
            e()
        });
        var r = document.createElement("img");
        r.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABWklEQVR4Xu2YUQ4CMQhE4WZ6CD2kHsK9GWaNH8YYYykDxM5+7xbmdaB0VRZ/dHH9QgB0wOIEWAKLG4BNEF4CZmYzLlNVaI7QxXfhBEAHsATYA9gEJwjwFOAxyDkAOqtAF+cgxEmQozDvArwM/eNlyMxOInKZGPAQn55V9Tq6sPsYbAbBJX6H5QbwPOM7OMEtfhpAAwhT4kMAFEKYFh8GoABCiPhQAIkQwsSHA0iAECoeAgAIIVw8DAAAAkQ8FEAgBJh4OIAACFDxKQAmIMDFpwFwQEgRnwpgAEKa+HQAP0BIFV8C4AuEdPFlAD5AKBFfCuAFgnj+5OzfRzxTP0QiEqhegwCqd6A6Ph1QvQPV8V0OMLObiByqk3+Lv6nqcTQnAhgl9jy/6QCWwOI9oFsDfFSyqm6jJe1qgqNBOr9PAJ13JyM3OiCDcucYdEDn3cnIjQ7IoNw5xvIOuANS+rtBpNg8iQAAAABJRU5ErkJggg==",
        n.appendChild(r),
        document.body.appendChild(n)
    }
    function fn(e=500) {
        return new Promise(t => {
            setTimeout(() => {
                t("")
            }, e)
        })
    }
    var pn,
        mn = "",
        hn = (e, t, n) => {
            mn !== e && (mn = e, Pt({
                videoSource: e,
                isYouTubeMusic: !1,
                icon: t || Yt(),
                title: n || Jt(),
                isAd: !1,
                videoKey: location.href,
                url: location.href
            }))
        },
        vn = function(e, t=200, n=50) {
            var r,
                o = 0;
            return new Promise(i => {
                r = setInterval(() => {
                    o > n && (clearInterval(r), i(null));
                    var t = e();
                    t && (console.log("count", o), clearInterval(r), i(t)),
                    o += 1
                }, t)
            })
        },
        gn = 1e3;
    function An() {
        clearInterval(pn)
    }
    var yn,
        bn = {
            id: "",
            formats: [],
            title: "",
            duration: "",
            thumbnails: "",
            age_limit: 18
        },
        wn = ["url_high", "url_hls", "url_low"],
        Dn = function() {
            var e = kt(function* () {
                var e,
                    t,
                    n = yield vn(() => html5player);
                n.id_video && (bn.id = n.id_video),
                n.video_title && (bn.title = n.video_title);
                var r = null == (e = document.querySelector("span.duration")) ? void 0 : e.innerText;
                r && (bn.duration = r);
                var o = null == (t = document.querySelector(".video-pic>img")) ? void 0 : t.src;
                o ? bn.thumbnails = o : n.url_thumb169 && (bn.thumbnails = n.url_thumb169),
                bn.formats = wn.map(e => {
                    var t = n[e];
                    return t ? {
                        url: t,
                        quality: e.split("_")[1]
                    } : null
                }).filter(e => e),
                bn.formats[0] && hn(bn.formats[0].url, bn.thumbnails, bn.title)
            });
            return function() {
                return e.apply(this, arguments)
            }
        }();
    function Bn(e) {
        var t,
            n,
            r,
            o,
            i = e;
        if (!i)
            return null;
        try {
            var a,
                l;
            (null == (a = i) || null == (l = a.nextSibling) ? void 0 : l.classList.contains("img")) && (o = getComputedStyle(i.nextSibling).backgroundImage.slice(4, -1).replace(/"/g, ""))
        } catch (e) {}
        for (; i.parentElement && "body" !== i.parentElement.tagName;)
            if ((i = i.parentElement).dataset.store)
                try {
                    r = JSON.parse(i.dataset.store);
                    break
                } catch (e) {}
        return {
            videoID: null == (t = r) ? void 0 : t.videoID,
            videoURL: null == (n = r) ? void 0 : n.videoURL,
            cover: o,
            shortText: "facebook",
            title: "facebook_" + Date.now()
        }
    }
    function _n() {
        return -1 !== location.host.indexOf(".facebook.")
    }
    function xn() {
        setTimeout(() => {
            var e,
                t = document.getElementById("tiktok-share"),
                n = t && t.querySelector(".report-container");
            if (n) {
                var r = null == (e = n.lastChild) ? void 0 : e.cloneNode(!0);
                r && (r.addEventListener("click", () => {
                    var e = document.querySelector("video");
                    if (e) {
                        var t = e.src;
                        console.log(t),
                        t && window.open(t, "_blank")
                    }
                }, {
                    capture: !1
                }), r.querySelector("span").innerText = "Download", r.querySelector(".platicon").innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAE1ElEQVRoQ9WaXWgcVRTH/2dMmiBotdD2oSAqahRffFDQ2oeIxlYqik22iAVFmrnnNpJSP6E++PHSKhW/FtO5M6mo+AGNH6iUtsaPRdIK6oNP1lSNovShKdSmQkmbOEfuZifZJLvZnZ0RMxcGFvaec35z99zzce8SEo729vamtra22wGsCYFVBKzCzGO1H7OPAMecqc9Dw8PDnxUKhckkpqkRYa31ijAMc0LUQUAHgPNj6jkjwCCJDDqOM+B53mhMecQGZ+ZeAbYBuLxk7DiI9pHIPgB/ABgjorHm5uYx+/3ExMRSEVkKwD6XCNF6iKwHsLIkP0LAy8aYfBz4usGZuSsEthFwszUgwB6E4QdBEOyPYzCa67ruHXCcTgI2l/QdcqZe4P169NUFzsw7BNhuFRJwMCR6KfC8g/UYqDXH1XqtI/KwAGtL+ncaY56sJVcTXGkdQKQbwGkCHjHG7KmltJHvmXmzAC8CuBBE/b7nuQvpWRBcMY8AuExEjlj4IAgONwJVr4zruqstNBFdA+A335hoH81TURXcVWqUiJYT8JExZkO9xtOYx8wfCnCPiJwIfH9FJZ0VwV3mrwhoF6AvMOahNGDi6nCZXyOgR4BCYMwtc+XngdcSiAuQZP5CCzgL3IY8AQbsT9Tc1LS6r6/vlySGk8r29PRcMTE5ebjksrnyUDkL3GUesnGagO6k0UMppULHOdrveYUkL1CKNv0CHAqMWRPpmgYvZcRXbZw2xqxLYszKKmap5p9xdTPzARvnCdgaZdgieLH2EPnGpnEhWpdGckkT3CYpEjkAYMQhusnWNkVwpRSDyLNpPDDGJpvEI01wC+My9xfLAxHt+76ZAtf6HYjcJ45zd7B79yeJqVN2lSL4li13URh+DKJ3fc/bRLlc7ryLly07BWDcN2Z5GtBp+3jEpJhPAGj96+TJi8h13dvIcQYBDPjGbEwTnICCqZA8GrWhmPcCyEkYdtB05Sey0ff9gUaVzpWzPp46uFI5EO0lYCe5zG8ScD8BNxhjvl/M4Mx8vQDfCfAWKebPAdxKwFXGmJ8XOfiVAhwF8IUFPwLgaodoZSO9X7UX/S9cpZRvjgP4yYKfBnBBy5Ilrfl8/uxiXvHe3t6Ws+fOjQP4O9PgmXWVhjen67rXBUHwQyX3quXj3Vq3x60cmXlmczYaDpl5lwCPQeRZ3/efiRPHldbvQeReAq41xvxY776aFQ4bTUBa6ztDkU+LRivAV1txpfUbEHnANuCtLS035vN5GxzqGmpWAkqQ8l2tN5HI25XgK4ErrT2IMIBfJQy7qrnZAiF2JuUnLbKY+UEBXi8uPPB4YMwLUZFVnvKVUq+AaCsBfxJRl+d539a1zGWTZhVZaZS1SmuGiFcOX77iSqnnQfQEgFGIdPq+PxQXel5ZWwRPoZGIWr8InoBddsUBfC3AUwBOhUSd/Z73ZVxoO79iI5FW66a0fhQiRVcpjd8BXArgDAGdxhjbfsUeVVs3qymtZpmZtwuwo4zuH3GcDUk6q6rNcmQkreMJpdTTIMpBZJyInqv36LjST1HzeKK06tk8ECptggXP7GI7aAKBuo/gylwme4ee0/BZPGaO4DN5sD8Nn8WrlAg+k5dXZfDZuy4sj2iZu6Ath8/klfjcfPJ//QnhX+BBY6Y9bJHoAAAAAElFTkSuQmCC" />', n.appendChild(r), n.firstChild && n.removeChild(n.firstChild))
            }
        }, 100)
    }
    function En() {
        (yn = new MutationObserver(function(e) {
            e.forEach(e => {
                var {type: t, addedNodes: n} = e;
                "childList" === t && Array.from(n).forEach(e => {
                    "tiktok-share" === e.id && setTimeout(() => {
                        var e;
                        yn.disconnect(),
                        (e = document.getElementById("tiktok-share")) && (xn(), new MutationObserver(function(e) {
                            e.forEach(e => {
                                var {addedNodes: t} = e;
                                t.length > 0 && xn()
                            })
                        }).observe(e, {
                            childList: !0
                        }))
                    }, 10)
                })
            })
        })).observe(document.body, {
            childList: !0
        })
    }
    console.log("tiktok");
    var Cn = [].reverse,
        Tn = [1, 2];
    Ee({
        target: "Array",
        proto: !0,
        forced: String(Tn) === String(Tn.reverse())
    }, {
        reverse: function() {
            return Pe(this) && (this.length = this.length), Cn.call(this)
        }
    });
    var kn = {
            "3gpp": "3gp",
            "smptett+xml": "tt",
            "ttaf+xml": "dfxp",
            "ttml+xml": "ttml",
            "x-flv": "flv",
            "x-mp4-fragmented": "mp4",
            "x-ms-sami": "sami",
            "x-ms-wmv": "wmv",
            mpegurl: "m3u8",
            "x-mpegurl": "m3u8",
            "vnd.apple.mpegurl": "m3u8",
            "dash+xml": "mpd",
            "f4m+xml": "f4m",
            "hds+xml": "f4m",
            "vnd.ms-sstr+xml": "ism",
            quicktime: "mov",
            mp2t: "ts",
            "x-wav": "wav"
        },
        Sn = ["avc1", "avc2", "avc3", "avc4", "vp9", "vp8", "hev1", "hev2", "h263", "h264", "mp4v", "hvc1", "av01", "theora"],
        Nn = ["mp4a", "opus", "vorbis", "mp3", "aac", "ac-3", "ec-3", "eac3", "dtsc", "dtse", "dtsh", "dtsl"];
    function On(e) {
        var t = /function *\(([^()]*)\)[ \n\t]*{(.*)}/gim.exec(e.replace(/\n/g, " "));
        return t ? new Function(t[1].split(","), t[2]) : null
    }
    function Pn(e) {
        var t = null == e ? void 0 : e.mimeType,
            n = {
                filesize: null == e ? void 0 : e.contentLength,
                width: null == e ? void 0 : e.width,
                height: null == e ? void 0 : e.height,
                type: e.mimeType,
                quality: e.quality,
                itag: e.itag,
                fps: null == e ? void 0 : e.fps,
                bitrate: (null == e ? void 0 : e.averageBitrate) || (null == e ? void 0 : e.bitrate)
            };
        try {
            if (t) {
                var r = t.match(/((?:[^\/]+)\/(?:[^;]+))(?:;\s*codecs="([^"]+)")?/),
                    o = function(e) {
                        if (!e)
                            return "";
                        var t = {
                            "audio/mp4": "m4a",
                            "audio/mpeg": "mp3"
                        };
                        if (e in t)
                            return t[e];
                        var n,
                            r = e.split("/");
                        try {
                            n = r[1].split(";")[0].trim().toLowerCase()
                        } catch (e) {}
                        return kn[n] || n
                    }(r[1]),
                    i = function(e) {
                        if (!e)
                            return {};
                        var t,
                            n,
                            r,
                            o = (r = e.trim(), r.replace(/^\s+|\s+$/g, "")).split(",").map(e => e.trim());
                        for (var i of o) {
                            var a = i.split(".")[0];
                            if (Sn.includes(a))
                                t || (t = i);
                            else {
                                if (!Nn.includes(a))
                                    throw new Error("WARNING: Unkonwn codec " + i);
                                n || (n = i)
                            }
                        }
                        return t || n ? {
                            vcodec: t || "",
                            acodec: n || ""
                        } : 2 === o.length ? {
                            vcodec: o[0],
                            acodec: o[1]
                        } : {}
                    }(r[2]);
                n.ext = o,
                n = Object.assign({}, n, i)
            }
        } catch (e) {}
        return n
    }
    function In(e) {
        var t;
        return e ? (null == e ? void 0 : e.simpleText) || (null == e || null == (t = e.runs) ? void 0 : t.map(e => e.text).join("")) : ""
    }
    class Mn {
        constructor(e)
        {
            this.transformPlan = this.getTransformPlan(e);
            var t = /^\w+\W/,
                n = this.transformPlan[0].match(t);
            if (!n)
                throw new Error("constructor: could not find match for " + t);
            var r = n[0].substr(0, n[0].length - 1);
            if (!r)
                throw new Error("constructor: could not find keyVar");
            this.transformMap = this.getTransformMap(e, r),
            this.jsFuncPatterns = [/\w+\.(\w+)\(\w,(\d+)\)/, /\w+\[(\"\w+\")\]\(\w,(\d+)\)/]
        }
        getTransformMap(e, t)
        {
            var n = this.getTransformObject(e, t),
                r = {};
            for (var o of n) {
                var [i, a] = o.split(":", 2),
                    l = On(a);
                r[i] = l
            }
            return r
        }
        getTransformObject(e, t)
        {
            var n,
                r = "var " + t + "={(.*?)};";
            try {
                n = new RegExp(r, "s")
            } catch (e) {
                n = new RegExp("var " + t + "={([\\s\\S]*?)};")
            }
            var o = e.match(n);
            if (!o)
                throw new Error("getTransformObject: could not find match for " + n);
            return o[1].replace(/\n/g, " ").split(", ")
        }
        getSignature(e)
        {
            var t = e.split("");
            for (var n of this.transformPlan) {
                var {name: r, arg: o} = this.parseFunction(n);
                this.transformMap[r](t, o)
            }
            return t.join("")
        }
        getTransformPlan(e)
        {
            var t = this.getInitialFunctionName(e);
            return function(e, t, n) {
                var r = t.match(e);
                if (!r)
                    throw new Error("matched regex search: " + e);
                return r[1]
            }(new RegExp(t + '=function\\(\\w\\){[a-z=\\.\\(\\"\\)]*;(.*);(?:.+)}'), e).split(";")
        }
        getInitialFunctionName(e)
        {
            for (var t of [/\b[cs]\s*&&\s*[adf]\.set\([^,]+\s*,\s*encodeURIComponent\s*\(\s*([a-zA-Z0-9$]+)\(/, /\b[a-zA-Z0-9]+\s*&&\s*[a-zA-Z0-9]+\.set\([^,]+\s*,\s*encodeURIComponent\s*\(\s*([a-zA-Z0-9$]+)\(/, /(?:\b|[^a-zA-Z0-9$])([a-zA-Z0-9$]{2})\s*=\s*function\(\s*a\s*\)\s*{\s*a\s*=\s*a\.split\(\s*""\s*\)/, /([a-zA-Z0-9$]+)\s*=\s*function\(\s*a\s*\)\s*{\s*a\s*=\s*a\.split\(\s*""\s*\)/, /(["\'])signature\1\s*,\s*([a-zA-Z0-9$]+)\(/, /\.sig\|\|([a-zA-Z0-9$]+)\(/, /yt\.akamaized\.net\/\)\s*\|\|\s*.*?\s*[cs]\s*&&\s*[adf]\.set\([^,]+\s*,\s*(?:encodeURIComponent\s*\()?\s*([a-zA-Z0-9$]+)\(/, /\b[cs]\s*&&\s*[adf]\.set\([^,]+\s*,\s*([a-zA-Z0-9$]+)\(/, /\b[a-zA-Z0-9]+\s*&&\s*[a-zA-Z0-9]+\.set\([^,]+\s*,\s*([a-zA-Z0-9$]+)\(/, /\bc\s*&&\s*a\.set\([^,]+\s*,\s*\([^)]*\)\s*\(\s*([a-zA-Z0-9$]+)\(/, /\bc\s*&&\s*[a-zA-Z0-9]+\.set\([^,]+\s*,\s*\([^)]*\)\s*\(\s*([a-zA-Z0-9$]+)\(/, /\bc\s*&&\s*[a-zA-Z0-9]+\.set\([^,]+\s*,\s*\([^)]*\)\s*\(\s*([a-zA-Z0-9$]+)\(/]) {
                var n = e.match(t);
                if (n)
                    return n[1]
            }
            throw new Error("get_initial_function_name: could not find match for multiple")
        }
        mapFunction(e)
        {
            var t = [[/{\w\.reverse\(\)}/, this.reverse], [/{\w\.splice\(0,\w\)}/, this.splice], [/{var\s\w=\w\[0\];\w\[0\]=\w\[\w\%\w.length\];\w\[\w\]=\w}/, this.swap], [/{var\s\w=\w\[0\];\w\[0\]=\w\[\w\%\w.length\];\w\[\w\%\w.length\]=\w}/, this.swap]];
            for (var [n, r] of t)
                if (e.match(n))
                    return r;
            throw new Error("map_functions: could not find match for multiple")
        }
        reverse(e)
        {
            return e.reverse()
        }
        splice(e, t)
        {
            return e.splice(0, t)
        }
        swap(e, t)
        {
            var n = e[0];
            return e[0] = e[t % e.length], e[t] = n, e
        }
        parseFunction(e)
        {
            for (var t of this.jsFuncPatterns) {
                var n = e.match(t);
                if (n) {
                    var [r, o, i] = n;
                    return {
                        name: o,
                        arg: i
                    }
                }
            }
            throw new Error("parse_function: could not find match for js_func_patterns")
        }
    }
    var Ln = ["compactVideoRenderer"],
        Fn = /ytInitialPlayerResponse\s*=\s*({.+?})\s*;/,
        Rn = /(?:window\s*\[\s*["\']ytInitialData["\']\s*\]|ytInitialData)\s*=\s*({.+?})\s*;/,
        Vn = function() {
            var e = kt(function* (e) {
                try {
                    var t = yield fetch(e);
                    return yield t.text()
                } catch (e) {
                    return ""
                }
            });
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        jn = function() {
            var e = kt(function* () {
                try {
                    var e,
                        t,
                        n,
                        r,
                        o = function() {
                            var e,
                                t,
                                n = document.getElementsByTagName("script"),
                                r = Array.prototype.slice.call(n, 0),
                                o = "";
                            for (var i of r)
                                if ("string" == typeof i.src && i.src.includes("base.js"))
                                    o = i.src;
                                else if ("string" == typeof i.innerText) {
                                    var a = i.innerText.match(Fn);
                                    if (a) {
                                        e = JSON.parse(a[1]);
                                        continue
                                    }
                                    (a = i.innerText.match(Rn)) && (t = JSON.parse(a[1]))
                                }
                            return {
                                baseURL: o,
                                initialPlayerResponse: e,
                                initialData: t
                            }
                        }();
                    if (!o.initialData || !o.initialPlayerResponse) {
                        var i;
                        yield new Promise(e => {
                            setTimeout(() => {
                                e(!0)
                            }, 1e3)
                        });
                        var a = function() {
                            for (var e of ["ytd-app", "ytm-app", "#app"]) {
                                var t = document.querySelector(e);
                                if (t)
                                    return t
                            }
                            return null
                        }();
                        if (!a)
                            throw new Error("Can't find ytdApp");
                        var l = (null == a ? void 0 : a.data) || (null == a || null == (i = a.__data) ? void 0 : i.data);
                        if (!l)
                            throw new Error("Can't find data in ytbApp");
                        o.initialData || (o.initialData = l.response),
                        o.initialPlayerResponse || (o.initialPlayerResponse = l.playerResponse)
                    }
                    var u = yield Vn(o.baseURL),
                        s = function(e) {
                            var t = [];
                            if (!e)
                                throw new Error("could not find streamingData");
                            "formats" in e && (t = t.concat(e.formats)),
                            "adaptiveFormats" in e && (t = t.concat(e.adaptiveFormats));
                            try {
                                return t.map(e => {
                                    if (!e.url)
                                        throw new Error("key error");
                                    return Object.assign({
                                        url: e.url
                                    }, Pn(e))
                                })
                            } catch (e) {
                                var n = t.map(e => e["cipher" in e ? "cipher" : "signatureCipher"].split("&").reduce((e, t) => {
                                    var [n, r] = t.split("=");
                                    return e[n] = r, e
                                }, {}));
                                return t.map((e, t) => Object.assign({
                                    url: n[t].url,
                                    s: n[t].s
                                }, Pn(e)))
                            }
                        }(o.initialPlayerResponse.streamingData);
                    C = s,
                    T = new Mn(u),
                    C.forEach((e, t) => {
                        var n = e.url || "";
                        if (n.indexOf("signature") > 0 || !e.s && (n.indexOf("&sig=") > 0 || n.indexOf("&lsig=") > 0))
                            ;
                        else {
                            var r = T.getSignature(decodeURIComponent(e.s)),
                                o = decodeURIComponent(n) + "&sig=" + r;
                            C[t].url = o
                        }
                    }),
                    s = C;
                    var c = ((null == (D = o.initialData) || null == (B = D.contents) || null == (_ = B.twoColumnWatchNextResults) || null == (x = _.secondaryResults) || null == (E = x.secondaryResults) ? void 0 : E.results) || []).reduce((e, t) => {
                            var n = Object.keys(t);
                            if (Ln.includes(n[0])) {
                                var r,
                                    o = t[n[0]];
                                e.push({
                                    type: n[0] || "",
                                    videoId: null == o ? void 0 : o.videoId,
                                    title: In(null == o ? void 0 : o.title),
                                    thumbnails: null == o || null == (r = o.thumbnail) ? void 0 : r.thumbnails,
                                    author: In(null == o ? void 0 : o.shortBylineText),
                                    publishedTime: In(null == o ? void 0 : o.publishedTimeText),
                                    viewCountText: In(null == o ? void 0 : o.viewCountText),
                                    shortViewCountText: In(null == o ? void 0 : o.shortViewCountText),
                                    lengthText: In(null == o ? void 0 : o.lengthText)
                                })
                            }
                            return e
                        }, []),
                        d = (null == (e = o.initialPlayerResponse) ? void 0 : e.videoDetails) || {},
                        f = (null == (t = o.initialPlayerResponse) || null == (n = t.microformat) ? void 0 : n.playerMicroformatRenderer) || {},
                        p = (null == (r = o.initialPlayerResponse) ? void 0 : r.title) || In(null == f ? void 0 : f.title),
                        m = null == d ? void 0 : d.shortDescription,
                        h = [];
                    for (var v of [d, f]) {
                        for (var g of (null == v || null == (A = v.thumbnail) ? void 0 : A.thumbnails) || []) {
                            var A,
                                y = null == g ? void 0 : g.url;
                            y && h.push({
                                height: null == g ? void 0 : g.height,
                                url: y,
                                width: null == g ? void 0 : g.width
                            })
                        }
                        if (h.length > 0)
                            break
                    }
                    var b = (null == d ? void 0 : d.channelId) || (null == f ? void 0 : f.externalChannelId),
                        w = {
                            title: p,
                            formats: s,
                            thumbnails: h,
                            description: m,
                            category: null == f ? void 0 : f.category,
                            duration: (null == d ? void 0 : d.lengthSeconds) || (null == f ? void 0 : f.lengthSeconds),
                            viewCount: (null == d ? void 0 : d.viewCount) || (null == f ? void 0 : f.viewCount),
                            keywords: (null == d ? void 0 : d.keywords) || [],
                            uploader: null == d ? void 0 : d.author,
                            channelID: b,
                            recommendInfo: c
                        };
                    b && (w.channelURL = "https://www.youtube.com/channel/" + b),
                    Vt({
                        name: "WebViewExtract",
                        properties: {
                            action: "success",
                            url: location.href,
                            build_number: 1
                        }
                    }),
                    Mt(w)
                } catch (e) {
                    Mt({}),
                    Vt({
                        name: "WebViewExtract",
                        properties: {
                            action: "failure",
                            url: location.href,
                            build_number: 1,
                            error_msg: (null == e ? void 0 : e.message) || "unknow error"
                        }
                    })
                }
                var D,
                    B,
                    _,
                    x,
                    E,
                    C,
                    T
            });
            return function() {
                return e.apply(this, arguments)
            }
        }(),
        Un = function() {
            jn()
        };
    function Hn(e) {
        for (var t = e.substring(1).split("&"), n = {}, r = 0; r < t.length; r++) {
            var o = t[r].split("=");
            n[decodeURIComponent(o[0])] = decodeURIComponent(o[1])
        }
        return n
    }
    function qn() {
        return (qn = kt(function* () {
            yield vn(() => !!document.querySelector("ytmusic-app"));
            var e = document.querySelector("ytmusic-app");
            if (e)
                try {
//                    var t = e.navigator_.__proto__.navigate;
                  var na = e.navigator_ ? e.navigator_ : e.navigator;
                  var t = na.__proto__.navigate;
                    na.__proto__.navigate = function(e) {
                        try {
                            var n = e.getUrl(),
                                r = {};
                            try {
                                r = Hn("?" + n.split("?")[1])
                            } catch (e) {}
                            if (0 === n.indexOf("watch"))
                                return "playlist" in r && !("v" in r) && (n = "playlist?list=" + r.playlist), Rt({
                                    url: "https://music.youtube.com/" + n,
                                    type: "youtubeMusic"
                                }), null;
                            0 === n.indexOf("playlist") && "list" in r && Rt({
                                url: "https://music.youtube.com/" + n,
                                type: "youtubeMusic"
                            })
                        } catch (e) {
                          console.log('into catch >>>>>', e)
                        }
                        return t.call(this, e)
                    }
                } catch (e) {}
        })).apply(this, arguments)
    }
    var Gn = !1,
        Zn = () => !!location.host.match(/^music.youtube.com.*/),
        zn = () => !!location.host.match(/^((m.)|(www.))?youtube.com.*/),
        Qn = () => !!location.href.match(/\/watch\?v=.*&list=/),
        Yn = zn ? 500 : 200;
    function Jn(e, t, n) {
        return Kn(e, t, Object.assign({}, n, {
            mode: !0
        }))
    }
    function Kn(e, t, n) {
        setTimeout(() => {
            Pt({
                asyncMode: null == n ? void 0 : n.mode,
                videoSource: e,
                url: (null == n ? void 0 : n.url) || location.href,
                isYouTubeMusic: Zn(),
                icon: Yt(),
                title: t || Jt(),
                isAd: !1,
                videoKey: Zn() || zn() ? location.href : null == n ? void 0 : n.videoID,
                data: n,
                urlParams: {
                    fromPlaylist: sn("fromPlaylist")
                }
            })
        }, 0)
    }
    zn() ? document.addEventListener("click", function(e) {
        var t = function(e, t) {
                var n = String("A").toUpperCase();
                return function(e, t, n, r) {
                    for (e && !n && (e = e.parentNode), n = 0; e;) {
                        if (t(e))
                            return e;
                        e = e.parentNode,
                        n++
                    }
                    return null
                }(e, function(e) {
                    return !(n && e.nodeName != n)
                }, !0)
            }(e.target),
            n = t && t.href;
        n && function(e) {
            var t = new URL(e);
            if ("/watch" === t.pathname)
                return !0;
            if ("/playlist" === t.pathname) {
                var n = Hn(t.search);
                if ("list" in n && "index" in n && "playnext" in n)
                    return !0
            }
            return !1
        }(n) && (e.stopPropagation(), e.preventDefault(), Rt({
            url: n,
            type: "youtube"
        }))
    }, !0) : Zn() && function() {
        qn.apply(this, arguments)
    }(),
    window.__firefox__ || (window.__firefox__ = {});
    var Wn,
        Xn,
        $n,
        er,
        tr = [location.host, "false", "false", ""],
        nr = tr[0],
        rr = null,
        or = 1,
        ir = !1;
    function ar(e, t) {
        for (var n = new Array, r = 0; r < e.length; r++)
            n.push(e[r]);
        for (r = 0; r < t.length; r++)
            n.push(t[r]);
        return n
    }
    function lr(e, t) {
        var n = document.createEvent("HTMLEvents");
        n.initEvent(t, !1, !0),
        n.isTakeEvent = !0,
        (null != e.originVideo ? e.originVideo : e).dispatchEvent(n)
    }
    function ur() {
        rr.pause()
    }
    function sr() {
        rr.webkitEnterFullScreen()
    }
    function cr() {
        var e;
        $n && (or = 1, document.removeEventListener("DOMNodeInserted", yr, !1), document.addEventListener("DOMNodeInserted", yr, !1), e = null, ar(document.getElementsByTagName("video"), document.getElementsByTagName("audio")).forEach(function(t) {
            Dr(t),
            br(t, "get"),
            !e && 0 < Ar(t).src.length && (e = t)
        }))
    }
    function dr() {
        var e = null;
        !this.originVideo && this.parentNode && (e = function(e) {
            var t = e.parentNode;
            if (t) {
                var n = e.cloneNode(!0);
                return n.onclick = function(e) {
                    e && e.target && ("VIDEO" != (e = e.target).nodeName && "AUDIO" != e.nodeName || e.play())
                }, n.takeListened = !0, n.originVideo = e, function(e) {
                    e.removeAttribute("src");
                    for (var t = e.getElementsByTagName("source"), n = 0; n < t.length; n++)
                        t[n].removeAttribute("src")
                }(n), Dr(n), t.replaceChild(n, e), n
            }
        }(this));
        var t = window.event;
        if (!t || "click" != t.type && "tap" != t.type && 0 != t.type.indexOf("touch") || (or = 0), -1 == window.location.hostname.indexOf("youku.com") || 1 != or) {
            var n = gr(this, "play");
            if (br(rr = this, n ? "get" : "play"), e && br(rr, "play"), window.setTimeout(function() {
                lr(this, "play")
            }, 100), n && 0 < er.length) {
                for (var r = !1, o = 0; o < er.length; o++)
                    if (-1 != n.src.indexOf(er[o])) {
                        r = !0;
                        break
                    }
                r && lr(this, "ended")
            }
        }
    }
    function fr() {
        var e = this instanceof HTMLAudioElement;
        rr = this,
        e || "www.bilibili.com" == location.host ? (or = 0, gr(this, "play")) : gr(this, "get")
    }
    function pr(e) {
        var t,
            n;
        !e.isTakeEvent && $n && (or = 0, (n = gr(rr = t = e.target, "play")) ? mr(t, n) : br(null != t.originVideo ? t.originVideo : t, "play"))
    }
    function mr(e, t) {
        window.setTimeout(function() {
            if (e.pause(), t && 0 < er.length) {
                for (var n = !1, r = 0; r < er.length; r++)
                    if (-1 != t.src.indexOf(er[r])) {
                        n = !0;
                        break
                    }
                n && lr(e, "ended")
            }
        }, 100)
    }
    function hr(e) {
        e.stopImmediatePropagation()
    }
    var vr = "";
    function gr(e, t) {
        if (ir || !e)
            return null;
        if (-1 != nr.indexOf("xvideos.com") && e.hasAttribute("disableremoteplayback"))
            return null;
        var n = Ar(e);
        if (0 == n.src.length && (n = Ar(e.originVideo)), 0 == n.src.length)
            return null;
        var r = function(e) {
                var t,
                    n = e.getAttribute("title");
                return n && 0 != n.length || (t = document.querySelector(".x-video-title,.video-title-left")) && (n = t.innerText), n && 0 != n.length || (n = document.title), n || ""
            }(e),
            o = location.href,
            i = document.querySelector("meta[name='referrer']");
        i && i.content && ("no-referrer" != i.content && "never" != i.content || (o = ""));
        var a = {
            src: n.src,
            support: n.support,
            title: r,
            isMainFrame: cn(),
            referer: o,
            autoPlay: or,
            msgId: t,
            videoEnable: $n,
            video: e instanceof HTMLVideoElement
        };
        return $n && n.src.startsWith("blob") || "play" === a.msgId && vr !== a.src && (vr = a.src, function(e, t, n) {
            if (Gn)
                Un();
            else {
                var r,
                    o,
                    i = 50;
                if ((Zn() || zn()) && Qn())
                    return o = setInterval(() => {
                        var n = document.querySelector(zn() ? "ytm-playlist-panel-video-renderer[selected=true]" : "ytmusic-player-queue-item[selected]"),
                            r = {};
                        if (i -= 1, n) {
                            var a,
                                l,
                                u,
                                s,
                                c,
                                d,
                                f,
                                p,
                                m,
                                h;
                            clearInterval(o);
                            var v = n.data;
                            r = {
                                title: Array.isArray(null == v || null == (a = v.title) ? void 0 : a.runs) ? null == (l = v.title.runs[0]) ? void 0 : l.text : "",
                                cover: Array.isArray(null == v || null == (u = v.thumbnail) ? void 0 : u.thumbnails) && (null == v || null == (s = v.thumbnail) ? void 0 : s.thumbnails.length) > 0 ? null == (c = v.thumbnail.thumbnails[(null == v || null == (d = v.thumbnail) ? void 0 : d.thumbnails.length) - 1]) ? void 0 : c.url : "",
                                shortText: Array.isArray(null == v || null == (f = v.shortBylineText) ? void 0 : f.runs) ? null == (p = v.shortBylineText.runs[0]) ? void 0 : p.text : "",
                                duration: Array.isArray(null == v || null == (m = v.lengthText) ? void 0 : m.runs) ? null == (h = v.lengthText.runs[0]) ? void 0 : h.text : ""
                            },
                            Jn(e, t, r)
                        } else
                            i <= 0 && clearInterval(o)
                    }, Yn), void Kn(e);
                _n() ? r = Bn(n) : -1 !== location.host.indexOf(".instagram.") && (r = function(e) {
                    if (!e)
                        return {};
                    try {
                        for (var t, n, r = null == e ? void 0 : e.poster, o = e[Object.keys(e).find(e => e.includes("__reactInternalInstance"))]; o.return;) {
                            if ("article" === o.elementType) {
                                n = o.stateNode;
                                break
                            }
                            o = o.return
                        }
                        if (!n)
                            return {};
                        var i = null == (t = Array.from(n.querySelectorAll("header a")).find(e => e.innerText)) ? void 0 : t.innerText;
                        return {
                            cover: r,
                            shortText: i,
                            title: "Instagram_" + i + "_" + Date.now()
                        }
                    } catch (e) {
                        return {}
                    }
                }(n)),
                zn() && !Qn() && setTimeout(() => {
                    var n = document.getElementById("app");
                    if (n) {
                        var r,
                            o,
                            i,
                            a,
                            l,
                            u,
                            s,
                            c,
                            d,
                            f,
                            p,
                            m,
                            h,
                            v,
                            g,
                            A,
                            y,
                            b,
                            w,
                            D,
                            B = {
                                title: null == (r = n.data) || null == (o = r.playerResponse) || null == (i = o.videoDetails) ? void 0 : i.title,
                                cover: Array.isArray(null == (a = n.data) || null == (l = a.playerResponse) || null == (u = l.videoDetails) || null == (s = u.thumbnail) ? void 0 : s.thumbnails) ? null == (c = n.data) || null == (d = c.playerResponse) || null == (f = d.videoDetails) || null == (p = f.thumbnail) || null == (m = p.thumbnails.find(e => {
                                    var {url: t} = e;
                                    return 0 !== t.indexOf("hqdefault")
                                })) ? void 0 : m.url : null == (h = n.data) || null == (v = h.playerResponse) || null == (g = v.videoDetails) || null == (A = g.thumbnail) || null == (y = A.thumbnails[0]) ? void 0 : y.url,
                                shortText: null == (b = n.data) || null == (w = b.playerResponse) || null == (D = w.videoDetails) ? void 0 : D.author
                            };
                        Jn(e, t, B)
                    }
                }, 500),
                Kn(e, t, r)
            }
        }(a.src, a.o, e)), a
    }
    function Ar(e) {
        if (!e)
            return {
                src: ""
            };
        var t = e.src;
        if (t && 0 < t.length)
            t = e.src;
        else {
            for (var n = "", r = !0, o = e.getElementsByTagName("source"), i = 0; i < o.length; ++i) {
                var a = o[i],
                    l = a.getAttribute("src"),
                    u = a.getAttribute("type");
                if (l && 0 < l.length) {
                    var s = a.src;
                    if (s && 0 < s.length) {
                        if ("video/webm" == u) {
                            t = s,
                            r = !1;
                            break
                        }
                        var c = e.canPlayType(u);
                        if ("probably" == c) {
                            t = s;
                            break
                        }
                        "maybe" == c ? t = s : n = s
                    }
                }
            }
            (!t || t.length <= 0) && 0 < n.length && (t = n, r = !1)
        }
        return {
            src: t || "",
            support: r
        }
    }
    function yr(e) {
        var t,
            n = e.target;
        n && n.getElementsByTagName && (t = ar(n.getElementsByTagName("video"), n.getElementsByTagName("audio")), n instanceof HTMLMediaElement && t.push(n), t.forEach(function(e) {
            Dr(e),
            br(e, "get")
        }))
    }
    function br(e, t) {
        if (e) {
            e.alookSrcObserver && e.alookSrcObserver.disconnect();
            var n = new MutationObserver(function(n) {
                n.forEach(function(n) {
                    "src" === n.attributeName ? gr(e, t = e.alookAutoPlay || e.autoplay ? "play" : t || "get") && "play" == t && mr(e) : "autoplay" === n.attributeName && (e.alookAutoPlay = e.autoplay, e.autoplay && gr(e, "play"))
                })
            });
            n.observe(e, {
                attributes: !0,
                attributesFilter: ["src"]
            }),
            e.alookSrcObserver = n
        }
    }
    function wr(e, t, n) {
        e.takeEventArray || (e.takeEventArray = new Array),
        -1 == e.takeEventArray.indexOf(t) && (e.addEventListener(t, n, !1), e.takeEventArray.push(t))
    }
    function Dr(e) {
        wr(e, "play", pr),
        wr(e, "pause", hr),
        e.alookAutoPlay = !1,
        e.removeAttribute("autoplay"),
        e.setAttribute("preload", "none"),
        e.setAttribute("webkit-playsinline", ""),
        e.setAttribute("playsinline", ""),
        e.tagName && "audio" != e.tagName.toLowerCase() && (e.controls = 1)
    }
    cn() ? (window.addEventListener("popstate", function(e) {
        ir = !0,
        cr(),
        ir = !1
    }), Wn = window.history.pushState, window.history.pushState = function(e, t, n) {
        Wn.apply(window.history, arguments),
        cr()
    }, Xn = window.history.replaceState, window.history.replaceState = function(e, t, n) {
        Xn.apply(window.history, arguments)
    }, window.__firefox__.videoStopLoading = function() {
        var e,
            t;
        0 != $n && (cr(), 1 != (e = document.body.children).length || "VIDEO" != e[0].tagName && "AUDIO" != e[0].tagName || (t = document.body.innerHTML, t += '<div id="AlookVideoCover" style="max-width: 100%;position: fixed;left: 0;right: 0;top: 0;bottom: 0; max-height: 100%;width: 100%; height: 100%;">', document.body.innerHTML = t, window.setTimeout(function() {
            document.getElementById("AlookVideoCover").onclick = function() {
                gr(void 0, "play")
            }
        }, 50)))
    }, window.__firefox__.setVideoClick = function() {
        or = 0;
        for (var e = window.frames, t = 0; t < e.length; t++)
            e[t].postMessage('{"videoClickPlay":1}', "*")
    }, window.__firefox__.videoDispatchEnd = function() {
        if (rr)
            lr(rr, "ended");
        else
            for (var e = window.frames, t = 0; t < e.length; t++)
                e[t].postMessage('{"videoDispatchEnd":1}', "*")
    }, window.__firefox__.floatingPlayCacheNode = function() {
        if (rr)
            ur();
        else
            for (var e = window.frames, t = 0; t < e.length; t++)
                e[t].postMessage('{"floatingPlayCacheNode":1}', "*")
    }, window.__firefox__.fullScreenPlayCacheNode = function() {
        if (rr)
            sr();
        else
            for (var e = window.frames, t = 0; t < e.length; t++)
                e[t].postMessage('{"fullScreenPlayCacheNode":1}', "*")
    }) : window.addEventListener("message", function(e) {
        "string" == typeof e.data && (-1 != e.data.indexOf("videoDispatchEnd") ? rr && lr(rr, "ended") : -1 != e.data.indexOf("videoClickPlay") ? or = 0 : -1 != e.data.indexOf("videoFloatingPlay") ? ur() : -1 != e.data.indexOf("fullScreenPlayCacheNode") && sr())
    });
    var Br = function() {
            $n = !function() {
                if (!cn() && "avgle.com" == nr)
                    return 1;
                var e = location.host;
                return -1 != e.indexOf("google.com") && location.search && -1 != location.search.indexOf("tbm=isch") || cn() && ("m.iqiyi.com" == e || "www.iqiyi.com" == e)
            }(),
            "true" == tr[2] && cn(),
            er = 0 == tr[3].length ? Array() : tr[3].split(" "),
            cr(),
            window.MediaSource = void 0,
            HTMLVideoElement.prototype.play = dr,
            HTMLVideoElement.prototype.load = fr,
            HTMLVideoElement.prototype.webkitEnterFullScreen = function(e) {},
            HTMLVideoElement.prototype.webkitEnterFullscreen = function(e) {},
            HTMLVideoElement.prototype.webkitRequestFullScreen = function(e) {},
            HTMLVideoElement.prototype.webkitRequestFullscreen = function(e) {},
            HTMLVideoElement.prototype.webkitSetPresentationMode = function(e) {}
        },
        _r = !!location.host.match(/^music.youtube.com.*/),
        xr = !!location.host.match(/^((m.)|(www.))?youtube.com.*/);
    function Er(e, t, n) {
        e.includes(".facebook.") && !e.includes(".m3u8") || Pt({
            videoSource: e,
            url: (null == n ? void 0 : n.url) || window.location.href,
            isYouTubeMusic: _r,
            icon: Yt(),
            title: Jt(),
            isAd: t,
            videoKey: _r || xr ? t ? null : window.location.href : null == n ? void 0 : n.videoID,
            data: n,
            urlParams: {
                fromPlaylist: sn("fromPlaylist")
            }
        })
    }
    function Cr(e) {
        return Tr.apply(this, arguments)
    }
    function Tr() {
        return (Tr = kt(function* (e) {
            if (e) {
                var t = e.src || e.currentSrc;
                if (e.pause(), t && t.length) {
                    e.removeAttribute("src"),
                    e.innerHTML = "",
                    e.setAttribute("controls", "true"),
                    e.setAttribute("preload", "none"),
                    e.load(),
                    yield fn(500);
                    var n = {};
                    _n() && (n = Bn(e)),
                    window.location.href.match(/.*youtube.com\/watch.*/) && Sr.isPopFirstPlaying || (setTimeout(() => {
                        e.currentTime = e.duration + 10
                    }, 3e3), Er(t, !1, n)),
                    Sr.isPopFirstPlaying = !1,
                    Sr.playingVideo = {
                        url: window.location.href,
                        src: t,
                        title: e.title
                    }
                }
            }
        })).apply(this, arguments)
    }
    function kr(e) {
        Cr(e.target)
    }
    var Sr = {
        enable: !1,
        nodes: [],
        observer: void 0,
        tempVideo: "https://kupee-static.s3.amazonaws.com/games/support/blank.m4v",
        playingVideo: void 0,
        isPopFirstPlaying: !1
    };
    function Nr() {
        document.querySelectorAll("video").forEach(e => {
            Cr(e),
            Sr.nodes.push(e),
            e.addEventListener("loadstart", kr),
            e.addEventListener("playing", kr)
        })
    }
    function Or(e) {
        e && e.dispatchEvent(new MouseEvent("click", {
            view: window,
            bubbles: !0,
            cancelable: !0
        }))
    }
    var Pr = ["#left-controls tp-yt-paper-icon-button.previous-button", "ytmusic-player-bar paper-icon-button.previous-button"],
        Ir = ["#left-controls tp-yt-paper-icon-button.next-button", "ytmusic-player-bar paper-icon-button.next-button"];
    function Mr(e) {
        for (var t of "next" === e ? Ir : Pr) {
            var n = document.querySelector(t);
            if (n)
                return n
        }
        return null
    }
    function isGoogleSearchPage() {
        return location.href.indexOf(".google.com/search?q=") !== -1
    }
    let each = function(nodes, cb) {
        for (let index = 0; index < nodes.length; index++) {
            const element = nodes[index];
            cb(element, index, nodes)
        }
    };
    function Lr({videoPlayerEnable: e, extractorMode: t}) {
        if (isGoogleSearchPage()) {
            var observe = new MutationObserver(function(mutations, observe) {
                each(document.querySelectorAll("video-voyager a[href*='m.youtube.com/watch']"), item => {
                    if (!item.__handle) {
                        item.__handle = true;
                        item.addEventListener("click", function(event) {
                            event.preventDefault();
                            Rt({
                                url: item.href,
                                type: "youtube"
                            })
                        })
                    }
                })
            });
            observe.observe(document.querySelector("body"), {
                childList: true,
                subtree: true
            });
            return
        }
        location.host.includes(".pornhub.") ? e && setTimeout(() => {
            var {pathname: e} = location;
            e.startsWith("/view_video.php") && dn(() => {
                pn = setInterval(() => {
                    if (--gn && gn <= 0)
                        An();
                    else {
                        var e = document.querySelector("video-element video");
                        if (e) {
                            var t = e.src || e.currentSrc;
                            t && new URL(t).search.length > 0 && (e.pause(), e.innerHTML = "", e.load(), An(), hn(t))
                        }
                    }
                }, 2e3)
            })
        }, 1e3) : location.host.includes(".xnxx.") || location.host.includes(".xvideos.") ? e && (console.log("xvideo"), setTimeout(() => {
            var {pathname: e} = location;
            e.startsWith("/video") && dn(Dn)
        }, 1e3)) : _n() ? e && (Sr.enable || (Nr(), function() {
            function e() {
                Sr.observer = function(e) {
                    var t;
                    t = "function" != typeof e.callback ? an : e.callback;
                    var n = e.root || document;
                    if ("undefined" == typeof MutationObserver)
                        return n.addEventListener("DOMNodeInserted", function(e) {
                            t(e.target)
                        }), null;
                    var r = new MutationObserver(function(e) {
                        e.forEach(function(e) {
                            "childList" == e.type && t(e)
                        })
                    });
                    return r.observe(n, {
                        childList: !0,
                        subtree: e.subtree
                    }), r
                }({
                    root: document.body,
                    subtree: !0,
                    callback: function(e) {
                        var t,
                            n,
                            r;
                        t = "defer" + un++,
                        n = function() {
                            var t;
                            (t = e).addedNodes.length && t.addedNodes.forEach(e => {
                                "video" === e.nodeName.toLocaleLowerCase() && (Sr.nodes.find(t => e.isSameNode(t)) || (e.addEventListener("loadstart", kr), e.addEventListener("playing", kr), Sr.nodes.push(e)))
                            }),
                            t.removedNodes.length && t.removedNodes.forEach(e => {
                                if ("video" === e.nodeName.toLocaleLowerCase()) {
                                    var t = Sr.nodes.findIndex(t => e.isSameNode(t));
                                    -1 !== t && (e.removeEventListener("loadstart", kr), e.removeEventListener("playing", kr), Sr.nodes.splice(t, 1))
                                }
                            })
                        },
                        (r = ln[t]) ? (r.cb = n, clearTimeout(r.timer)) : ln[t] = r = {
                            name: t,
                            cb: n
                        },
                        r.timer = setTimeout(function() {
                            delete ln[r.name],
                            r.cb()
                        }, 10)
                    }
                })
            }
            if (Sr.observer && Sr.observer.disconnect(), document.body)
                Nr(),
                e();
            else {
                var t = function() {
                    Nr(),
                    e(),
                    document.removeEventListener("DOMContentLoaded", t, !1)
                };
                document.addEventListener("DOMContentLoaded", t, !1)
            }
        }(), Sr.enable = !0)) : -1 !== location.host.indexOf(".tiktok.") ? document.body ? En() : document.addEventListener("DOMContentLoaded", function() {
            En()
        }) : e && location.href.indexOf("m.youtube.com/shorts/") !== -1 && function(e) {
            if (Gn = e, document.body)
                Br();
            else {
                var t = function() {
                    Br(),
                    document.removeEventListener("DOMContentLoaded", t, !1)
                };
                document.addEventListener("DOMContentLoaded", t, !1)
            }
        }("true" === t)
    }
    var Fr = {
        __proto__: null,
        simulationClick: Or,
        onPlayNextVideo: function() {
            var e;
            if (_r && (e = Mr("next")))
                Or(e);
            else if (xr) {
                var t = document.querySelectorAll(".playlist-controls-primary button");
                if (t.length > 0)
                    return void Or(t[t.length - 1]);
                var n = document.querySelector("ytm-compact-video-renderer a") || document.querySelector("a.large-media-item-thumbnail-container");
                n && n.href && (window.location.href = n.href)
            }
        },
        toggle: Lr,
        onPlayPreviousVideo: function() {
            if (_r) {
                var e = Mr("previous");
                if (e)
                    return void Or(e)
            }
            if (xr) {
                var t = document.querySelectorAll(".playlist-controls-primary button");
                if (t.length > 0)
                    return void Or(t[0])
            }
        }
    };
    window.__firefox__ || (window.__firefox__ = {}),
    window.__firefox__.isNightMode = !1;
    var Rr = /rgb\(\s*?2\d{2}\s*?,\s*?2\d{2}\s*?,\s*?2\d{2}\s*?\)/i,
        Vr = /rgb\(\s*?1(6|7|8|9)\d\s*?,\s*?1(6|7|8|9)\d\s*?,\s*?1(6|7|8|9)\d\s*?\)/i,
        jr = /rgba\(255\, 255\, 255\,/i,
        Ur = /rgb|-webkit-gradient/i,
        Hr = .8 * window.innerWidth,
        qr = null,
        Gr = null,
        Zr = /\bCANVAS\b|\bIMG\b|\bIFRAME\b|\bBR\b|\bSCRIPT\b|\bNOSCRIPT\b|\bSTYLE\b|\bMETA\b|\bLINK\b|\bTITLE\b/,
        zr = /\bCANVAS\b|\bIMG\b|\bIFRAME\b|\bBR\b|\bSCRIPT\b/,
        Qr = "Normal",
        Yr = !1,
        Jr = !1,
        Kr = !1,
        Wr = !1,
        Xr = "alook_theme";
    function $r(e, t, n) {
        return e.split(t).join(n)
    }
    function eo(e) {
        var t;
        Hr = .8 * window.innerWidth,
        Qr != e ? ("Night" == e ? (no(), null == qr && ((qr = document.createElement("style")).id = Xr), to(), (t = document.head ? document.head : document.documentElement).appendChild(qr), t.addEventListener("DOMNodeRemoved", io, !1), mo(ao)) : ("Night" == Qr && (function() {
            document.head.removeEventListener("DOMNodeRemoved", io),
            document.documentElement.removeEventListener("DOMNodeRemoved", io);
            var e = document.getElementById(Xr);
            e && e.parentNode && e.parentNode.removeChild(e)
        }(), document.body && document.body.clientWidth && mo(fo)), "Green" == e ? (null == Gr && (Gr = document.createElement("style")), Gr.innerText = "*{background-color: #d1efd6!important}", (document.head ? document.head : document.documentElement).appendChild(Gr), mo(ro)) : no()), Qr = e) : "Night" == e && to()
    }
    function to() {
        if (null != qr) {
            for (var e = "[AT_][AT_TransBg]{background-color:transparent!important}.black_border{border:1px solid rgba(0,0,0,0.2)}#bg_sheep{background-image:none!important}#bg_cow{background-image:none!important}[AT_][AT_Bg]{background:#292929!important}[AT_][AT_BgLight]{background:#181818!important}[AT_][AT_BgColor]{background:#292929!important;color:#a7a7a7!important}[AT_][AT_BgLinear]{background:rgba(40,40,40,.6)!important}[AT_][AT_Border]{border-color:#45484c!important}:not([AT_]){border-color:#292929!important;background-color:#292929!important}*{text-shadow:none!important;box-shadow:none!important}:after,:before{-webkit-filter:brightness(0.4)}body,html{background:#292929!important;color:#a7a7a7!important}abbr,address,article,aside,b,bdi,bdo,blockquote,br,caption,cite,code,col,colgroup,data,datalist,dc,dd,dfn,dl,dt,em,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hr,i,kbd,keygen,label,legend,li,main,mark,meter,nav,ol,optgroup,option,output,p,pre,progress,q,rp,rt,ruby,s,samp,section,small,span,strong,sub,sup,table,tbody,td,textarea,tfoot,th,thead,time,tr,u,ul,var,wbr{background-color:none;color:#a7a7a7!important}textarea{background-color:#292929!important}div,div[AT_]{color:#a7a7a7!important}[AT_]{color:#a7a7a7!important}a[AT_]:visited,a[AT_]:visited [AT_],a[AT_]:visited div[AT_],a:visited,a:visited *{color:#bd8cff!important}button:not([AT_TransBg]):not([AT_]),div:not([AT_TransBg]):not([AT_]),input:not([AT_TransBg]):not([AT_]),select:not([AT_TransBg]):not([AT_]){background:#292929!important}button[AT_ActionDone]:not([AT_TransBg]):not([AT_BgLinear]):not([AT_BgColor]),div[AT_ActionDone]:not([AT_TransBg]):not([AT_BgLinear]):not([AT_BgColor]),input[AT_ActionDone]:not([AT_TransBg]):not([AT_BgLinear]):not([AT_BgColor]),select[AT_ActionDone]:not([AT_TransBg]):not([AT_BgLinear]):not([AT_BgColor]){background-color:#292929!important}input[type=date],input[type=date] *,input[type=datetime-local],input[type=datetime-local] *,input[type=month],input[type=month] *,input[type=time],input[type=time] *,select,select *{color:#b0b0b0!important}button,input:not([type=button]):not([type=submit]):not([type=reset]):not([type=image]):not([type=file]):not([type=date]):not([type=datetime-local]):not([type=month]):not([type=time]),input[type=button],input[type=file],input[type=image],input[type=reset],input[type=submit]{color:#b0b0b0!important;border-color:#45484c!important}", t = 1; t < 9; t++)
                e += "[AT_][AT_TransBg" + t + "]{background-color:#181818" + Number(parseInt(255 * t * .1)).toString(16) + "!important}";
            Yr && (e = $r(e, "292929", Jr ? "000000" : "121212"), e = $r(e, "a7a7a7", "bcbcbc"), qr.innerText = e)
        }
    }
    function no() {
        Gr && Gr.parentNode && Gr.parentNode.removeChild(Gr)
    }
    function ro() {
        Gr.innerText = "body,[A_Green]{background-color: #d1efd6!important}",
        document.addEventListener("DOMNodeInserted", co, !1);
        for (var e = (document.body ? document.body : document).getElementsByTagName("*"), t = 0; t < e.length; t++)
            oo(e[t])
    }
    function oo(e) {
        var t = window.getComputedStyle(e, null);
        (Rr.test(t.backgroundColor) || jr.test(t.backgroundColor)) && e.setAttribute("A_Green", 1)
    }
    function io(e) {
        e.target && Xr == e.target.id && window.setTimeout(function() {
            "Night" == Qr && (document.head ? document.head : document.documentElement).appendChild(qr)
        }, 1)
    }
    function ao() {
        document.addEventListener("DOMNodeInserted", co, !1);
        for (var e = (document.body ? document.body : document).getElementsByTagName("*"), t = 0; t < e.length; t++)
            lo(e[t]);
        null != qr && (qr.innerText += "a,a *,a[AT_]{color:#6d97d5!important}")
    }
    function lo(e) {
        e && !e.hasAttribute("AT_") && e.setAttribute("AT_", "");
        var t = function(e) {
            if (!e || e.nodeType == Node.TEXT_NODE || e.nodeType == Node.COMMENT_NODE)
                return null;
            if (zr.test(e.tagName))
                return null;
            var t = window.getComputedStyle(e, null);
            return t ? function(e) {
                var t = parseInt(e.width, 0),
                    n = parseInt(e.height, 0),
                    r = e.backgroundColor,
                    o = 1,
                    i = r.split(",");
                4 == i.length && (o = parseFloat(i[3]));
                var a = o < .9,
                    l = !1,
                    u = e.borderColor;
                (Rr.test(u) || Vr.test(u)) && (l = !0);
                var s,
                    c = !1,
                    d = !1,
                    f = !1,
                    p = e.backgroundImage;
                "" !== p && "none" !== p ? -1 == p.indexOf("url(") && Ur.test(p) ? c = !0 : "no-repeat" != (s = e.backgroundRepeat) && "repeat" == s && (Hr < t || 100 < n) && (d = !0) : a && !Rr.test(r) && !jr.test(r) || (f = !0);
                var m = "";
                return m = a ? c ? "AT_BgLinear" : o < .1 ? "AT_TransBg" : "AT_TransBg" + Math.floor(10 * o) : c ? "AT_BgLinear" : d ? " AT_BgColor" : "", f && (m += t < Hr && n < 100 && (60 < t || 60 < n) && "visible" == e.visibility ? "AT_BgLight" : " AT_Bg"), l && (m += " AT_Border"), m
            }(t) : null
        }(e);
        if (t && 0 < t.length && e.tagName && "svg" != e.tagName.toLowerCase())
            for (var n = t.split(" "), r = 0; r < n.length; r++)
                0 < n[r].length && e.setAttribute(n[r], "")
    }
    function uo(e) {
        if (e && (so(e), e.getElementsByTagName))
            for (var t = e.getElementsByTagName("*"), n = 0; n < t.length; n++)
                so(t[n])
    }
    function so(e) {
        e && e.nodeType != Node.TEXT_NODE && e.nodeType != Node.COMMENT_NODE && !Zr.test(e.tagName) && ("Night" == Qr ? lo(e) : Wr && oo(e))
    }
    function co(e) {
        window.setTimeout(uo, 1, e.target)
    }
    function fo() {
        document.removeEventListener("DOMNodeInserted", co, !1);
        for (var e = /AT_[\s\S]*?\b/g, t = document.getElementsByTagName("*"), n = 0; n < t.length; ++n) {
            var r = t[n];
            if (r && r.nodeType != Node.TEXT_NODE && r.nodeType != Node.COMMENT_NODE) {
                if (zr.test(r.tagName))
                    continue;
                if (r.hasAttribute("AT_")) {
                    r.removeAttribute("AT_"),
                    r.removeAttribute("AT_ActionDone");
                    for (var o = r.getAttributeNames(), i = 0; i < o.length; i++) {
                        var a = o[i].match(e);
                        a && 0 < a.length && r.removeAttribute(o[i])
                    }
                }
            }
        }
    }
    function po(e) {
        /interactive|complete/.test(document.readyState) ? Kr || (window.setTimeout(e, 1), Kr = !0) : window.setTimeout(po, 500, e)
    }
    function mo(e) {
        /interactive|complete/.test(document.readyState) ? window.setTimeout(e, 1) : (document.addEventListener("readystatechange", function t() {
            "complete" == document.readyState && (Kr || (window.setTimeout(e, 1), Kr = !0), document.removeEventListener("readystatechange", t, !1))
        }, !1), po(e))
    }
    function ho(e, t) {
        var n;
        !e || -1 == (n = (n = e.getAttribute("style")) || "").indexOf(t) && e.setAttribute("style", n + t)
    }
    function vo(e) {
        e && (e.style.backgroundColor = null, e.style.filter = null)
    }
    class go {
        constructor()
        {
            this.isYouTubeMusic = "music.youtube.com" === window.location.host,
            this.isYouTube = "m.youtube.com" === window.location.host,
            this.isIns = window.location.host.includes("instagram")
        }
        inDarkModeWhitelist()
        {
            var e = window.location.host;
            return ["music.youtube.com", "enjoysapce.live"].includes(e)
        }
        toggle(e=!1)
        {
            var t;
            this.inDarkModeWhitelist() || (this.isIns ? e && ((t = document.createElement("style")).id = "dy-ins-dark-theme", t.innerText = ":not(#z){--bshadow:0 2px 4px var(--shadow);--t:transparent!important;--avatar:a_radius;--ui-font:'font_name',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,Ubuntu,Cantarell,'Noto Sans',var(--emoji-font),sans-serif;--emoji-font:'font_name','joypixels','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';--white:#fff;--dark:#1f232a;--darken:#252a33;--darker:#333943;--light:#e9e9e9;--lighter:#a1a1a1;--accent:#7289da;--shadow:rgba(0,0,0,0.145);--yellow:#e5c512;--orange:#df4b16;--red:#dc322f;--magenta:#f33682;--violet:#6c71c4;--blue:#268bd2;--cyan:#2aa198;--green:#859900;--dark-rgb:31,35,42;--darken-rgb:37,42,51;--darker-rgb:51,57,67;--light-rgb:233,233,233;--lighter-rgb:161,161,161;--accent-rgb:114,137,218;--shadow-rgb:0,0,0;--white-rgb:255,255,255;--b6a:var(--darker-rgb);--b38:var(--darker-rgb);--ce3:var(--darker-rgb);--ca6:var(--darker-rgb);--d87:var(--darken-rgb);--f23:var(--darken-rgb);--b3f:var(--dark-rgb);--i1d:var(--light-rgb);--f75:var(--light-rgb);--f52:var(--lighter-rgb);--bb2:var(--darken-rgb);--f23:var(--dark-rgb);--fe0:var(--accent-rgb);--d69:var(--accent-rgb);--c37:var(--accent-rgb);--eca:var(--darken-rgb);--jb7:var(--shadow-rgb);--fa7:var(--darken-rgb);--de5:var(--white-rgb);--ig-link:var(--accent-rgb);--ig-primary-text:233,233,233;--ig-secondary-text:var(--lighter-rgb);--ig-tertiary-text:var(--lighter-rgb);--ig-text-on-color:var(--white-rgb);--ig-text-on-media:var(--dark-rgb);--ig-primary-background:var(--darken-rgb);--ig-secondary-background:var(--dark-rgb);--ig-highlight-background:var(--darker-rgb);--ig-elevated-background:var(--darken-rgb);--ig-elevated-separator:var(--darker-rgb);--ig-primary-text:var(--light-rgb);--ig-primary-button:var(--accent-rgb);--ig-secondary-button:var(--light-rgb);--ig-badge:var(--accent-rgb);--ig-separator:var(--darker-rgb);--post-separator:var(--darker-rgb);--ig-stroke:var(--darker-rgb);--font-family-system:var(--ui-font)!important}::-webkit-scrollbar{width:.5em}*{scrollbar-width:thin}html{scrollbar-color:var(--accent) rgba(136,136,136,0.082)}::-webkit-scrollbar{background-color:rgba(136,136,136,.082)!important}::-webkit-scrollbar-thumb{background-color:var(--accent)!important}body{color:var(--light)!important;background-color:var(--dark)!important}body ::placeholder{color:var(--lighter)!important}body ::-webkit-input-placeholder{color:var(--lighter)!important}body[style*='background: white']{background-color:var(--dark)!important}body[style*='background: white'] svg{fill:var(--lighter)!important}body[class*='404'] .top-bar,body[class*=error] .top-bar{color:var(--light)!important;border-color:var(--darker)!important;background-color:var(--darken)!important}body[class*='404'] .top-bar .logo,body[class*=error] .top-bar .logo{filter:invert(.8)!important}body[class*='404'] a,body[class*='404'] strong,body[class*=error] a,body[class*=error] strong{color:var(--accent)!important}body svg[fill='#262626']{fill:var(--light)}body svg[fill='#ffffff']{fill:var(--light)}body svg[fill='#8e8e8e']{fill:var(--lighter)}body svg[fill='#ed4956']{fill:var(--red)}body svg[fill='#0095f6']{fill:var(--blue)}body svg path{transition:fill-opacity .2s ease}body svg:hover path{fill-opacity:0.6}body svg[fill=\"#8e8e8e\"]{color:var(--lighter)!important;fill:var(--lighter)!important}body svg[fill=\"#262626\"]{color:var(--light)!important}body .coreSpriteLoggedOutWordmark,body .coreSpriteMobileNavDirect,body .coreSpriteTaggedNull{filter:invert(.8)!important}[class*=SpriteAdd_friend_],[class*=SpriteApp],[class*=SpriteCamera],[class*=SpriteCircle_add],[class*=SpriteDirect],[class*=SpriteDropdownArrowGrey],[class*=SpriteFacebook],[class*=SpriteFriend_],[class*=SpriteInfo__filled__16__grey],[class*=SpriteKeyhole],[class*=SpriteLink],[class*=SpriteLocation_],[class*=SpriteLock_],[class*=SpriteMail],[class*=SpritePagingChevron],[class*=SpriteProfileChannelNullState],[class*=Spritez]{filter:invert(.8)!important}img[src*='44884218_345707102882519_2446069589734326272']{filter:invert(.8)!important}body ._2Lks6{color:var(--accent)!important}body a[href='/']>div>div img[src*='logo.png'],body a[href='/']>div>div>i[role=img]{filter:invert(.8)}body i[role=img],body img[src*='out_wordmark.png']{filter:invert(.8)}body .HZ802,body .nHGTw{color:var(--white)!important;background-color:var(--accent)!important}body .HZ802 .H9zXO::after,body .nHGTw .H9zXO::after{background-color:var(--accent)!important}.iMofo{box-shadow:0 4px 16px var(--shadow)!important}body .HZ802 [class*=Sprite]+div>div,body .nHGTw [class*=Sprite]+div>div{color:var(--white)!important}body>[role=dialog],body>[role=presentation]{background:rgba(var(--b3f),.8)!important}.not-logged-in .N9d2H{display:none!important}.not-logged-in [style*='overflow: hidden']{overflow:unset!important}.not-logged-in [style*='overflow: hidden']>[role=presentation]{display:none!important}body .LFGs8{color:var(--accent)!important}body .yQ0j1{color:var(--lighter)!important}body .M-jxE,body .M-jxE>button{background-color:var(--darken)!important}body ._4Kbb_{margin-top:1rem;color:var(--light)!important;border-color:var(--darker)!important;background-color:var(--darken)!important}.hUQXy,.hUQXy:visited{color:var(--accent)!important}body .jju9v{border:1px solid var(--darker);color:var(--light)!important;background-color:var(--darken)!important}body .hI7cq{color:var(--light)!important}body .isgrP>ul{background-color:var(--t)!important}body ._7LpC8 a,body .rin8p{color:var(--accent)!important}body .-wdIA,body .d-Vzv,body .rb9ad{border-color:var(--darker)!important}body .leaflet-container{background-color:var(--darken)!important;box-shadow:0 1px var(--darker)}body .leaflet-tile{filter:invert(.9) hue-rotate(180deg)!important}body .leaflet-popup-content-wrapper,body .leaflet-popup-tip{background-color:var(--darken)!important;box-shadow:0 3px 14px var(--shadow)}body .Sux9m{border-color:#aaa!important;background-color:rgba(238,238,238,.067)!important;--eca:var(--light-rgb)}body .Sux9m ::placeholder{color:#eee!important}body .Sux9m ::-webkit-input-placeholder{color:#eee!important}body .Sux9m+div [class*=glyphsSpriteDirect_]{filter:invert(.3)!important}body .tCibT{border:1px solid var(--darker)!important;box-shadow:var(--bshadow)!important}.R8iOs{border:1px solid var(--darker)!important;color:var(--light)!important;background-color:var(--dark)!important}.R8iOs>*{color:inherit}.G_hoz,[role=button]+span[class='']>div[class]{background-color:var(--darker)!important}body article+div+div.GZkEI li[style]>div>div>[role],body header+div+div.GZkEI li[style]>div>div>[role]{--d87:var(--dark-rgb)}body .HaS-3,body .WidCF{border-right:1px solid var(--darker);background-size:200% 200%!important;background:linear-gradient(115deg,var(--dark) 40%,var(--darken),var(--dark) 60%);animation:Loader 2.5s ease infinite!important;background-color:var(--darken)!important}body>[role=dialog]>[role=dialog]>[role=dialog]{border:1px solid var(--darker)!important;box-shadow:0 0 16px var(--darken)}body [role=dialog]>article>header{overflow-x:hidden!important}body [role=dialog]>article>header+div{--jb7:var(--darken-rgb)}body>[role=presentation]>[role=dialog]>div{border:1px solid var(--darker)!important}body>[role=presentation] button.aOOlW:not(.SRPMb):active,body>[role=presentation] button.aOOlW:not(.SRPMb):hover{background-color:var(--darken)!important}body article>header~div .WXPwG .Yi5aA{background-color:var(--white)!important}body img+div[style='height: 100%;'],body video+div[style='height: 100%;']{position:unset!important;display:none!important}body ._9AhH0{position:unset!important}body .PyenC,body .fXIG0{bottom:40px!important}body ._a3gq ._aaqh{color:var(--red)!important;background-color:var(--lighter)!important}body .GBPOY{border-radius:3px;border-color:var(--darker)!important;background-color:var(--darken)!important}body .GBPOY a{color:var(--light)!important}body .uo5MA,body .uo5MA>div:nth-child(1){box-shadow:var(--bshadow)!important;border:1px solid var(--darker);background-color:var(--dark)!important}body .uo5MA>div:nth-child(2){background-color:var(--dark)!important}body .uo5MA>div:nth-child(3){border-radius:0 0 6px 6px}body .uo5MA .DPiy6{background-color:var(--t)!important}body .QOqBd{background-color:rgba(136,136,136,.067)!important}.X3a-9{background-color:var(--dark)!important}body .CMoMH:not(._6FEQj){background-color:var(--dark)!important}body .CMoMH._6FEQj{background-color:var(--darker)!important}body [role=listbox] [aria-hidden=false]>[style*='left: calc(']+div{--eca:var(--white-rgb)!important}body .XjicZ{border-top:1px solid var(--darker);background-color:var(--darken)!important}body .XjicZ p{color:var(--light)!important}body footer{width:100%!important;margin:0 auto!important;max-width:935px!important;border-top:1px solid var(--darker)!important}.XfvCs{margin-bottom:30px!important}body footer>div::after{content:var(--note);white-space:pre-wrap;text-align:center;margin-top:1rem}@keyframes Loader{0%{background-position:33% 0}50%{background-position:68% 100%}100%{background-position:33% 0}}", (document.head || document.documentElement).appendChild(t)) : function(e) {
                var t = e || ["false", "false", "false", "false"];
                Yr = "true" == t[1],
                Wr = "true" == t[2],
                Jr = "true" == t[3],
                function(e) {
                    var t,
                        n,
                        r;
                    function o() {
                        window.__firefox__.isNightMode ? eo("Night") : eo(Wr ? "Green" : "Normal")
                    }
                    window.__firefox__.isNightMode = e,
                    t = e,
                    vo(r = document.documentElement),
                    vo(document.body),
                    t ? (ho(r, n = Yr ? Jr ? "background-color:#000000 !important;" : "background-color:#121212 !important;" : "background-color:#292929 !important;filter: brightness(80%)!important"), ho(document.body, n)) : Wr && (ho(r, n = "background-color:#d1efd6 !important;"), ho(document.body, n)),
                    document.head ? o() : window.setTimeout(function() {
                        o()
                    }, 0)
                }("true" == t[0])
            }(e ? ["true", "true", "false", "false"] : ["false", "false", "false", "false"]))
        }
        isActivated()
        {
            return "dark-mode" === document.querySelector("html").getAttribute("theme")
        }
    }
    var Ao = new go,
        yo = ["m.youtube.com", "music.youtube.com"],
        bo = !1;
    function wo() {
        try {
            return window.self === window.top
        } catch (e) {
            return !1
        }
    }
    window.__firefox__ || (window.__firefox__ = {}),
    wo() ? (window.__firefox__.setMainFrameNoImageEnable = _o, window.__firefox__.sendNoImageEnableToFrames = xo) : window.addEventListener("message", function(e) {
        "string" == typeof e.data && -1 != e.data.indexOf("setNoImageEnable") && _o(!0)
    });
    var Do = "__firefox__NoImageMode",
        Bo = null;
    function _o(e) {
        var t,
            n,
            r;
        if (bo != e)
            if (bo = e) {
                xo(),
                n = '*{background-image:none !important;}img,input[type="image"]{visibility:hidden !important;}',
                (r = document.getElementById(Do)) ? r.innerHTML = n : ((t = document.createElement("style")).type = "text/css", t.id = Do, t.appendChild(document.createTextNode(n)), document.documentElement.appendChild(t));
                for (var o = document.getElementsByTagName("img"); 0 < o.length;)
                    o[0].src = "",
                    o[0].remove();
                for (var i = document.getElementsByTagName("input"), a = new Array, l = 0; l < i.length; l++)
                    "image" === i[l].getAttribute("type") && (i[l].src = "", a.push(i[l]));
                a.forEach(function(e) {
                    e.parentNode && e.parentNode.removeChild(e)
                }),
                a = [],
                (Bo = new MutationObserver(function(e) {
                    e.forEach(function(e) {
                        for (var t = 0; t < e.addedNodes.length; ++t)
                            e.addedNodes[t] instanceof HTMLImageElement && (e.addedNodes[t].src = "", e.addedNodes[t].remove()),
                            e.addedNodes[t] instanceof HTMLInputElement && "image" == e.addedNodes[t].getAttribute("type") && (e.addedNodes[t].src = "", e.addedNodes[t].remove())
                    })
                })).observe(document, {
                    childList: !0,
                    subtree: !0
                })
            } else {
                var u = document.getElementById(Do);
                u && u.remove(),
                Bo.disconnect(),
                Bo = null
            }
    }
    function xo() {
        if (bo && wo())
            for (var e = window.frames, t = 0; t < e.length; t++)
                e[t].postMessage('{"setNoImageEnable":1}', "*")
    }
    var Eo = _o,
        Co = {
            config: {
                videoPlayerEnable: !1,
                darkModeEnable: !1,
                adBlockEnable: !1,
                mainFrameNoImageEnable: !1,
                autoShuffle: "false",
                extractorMode: !1
            }
        };
    function To(e) {
        "string" == typeof e && (e = e && JSON.parse(decodeURIComponent(e))),
        Co.config = e,
        Lr(e),
        Ao.toggle(e.darkModeEnable),
        e.adBlockEnable && null !== document.location && -1 !== yo.indexOf(document.location.hostname) && function(e) {
            var t;
            try {
                (t = e.createElement("script")).appendChild(e.createTextNode(decodeURIComponent("(function()%20%7B%0A%2F%2F%20%3E%3E%3E%3E%20start%20of%20private%20namespace%0A%0Atry%20%7B%0A%2F%2F%0A(function()%20%7B%0A%20%20%20%20const%20rawPrunePaths%20%3D%20'%5B%5D.playerResponse.adPlacements%20%5B%5D.playerResponse.playerAds%20playerResponse.adPlacements%20playerResponse.playerAds%20adPlacements%20playerAds'%3B%0A%20%20%20%20const%20rawNeedlePaths%20%3D%20'%7B%7B2%7D%7D'%3B%0A%20%20%20%20const%20prunePaths%20%3D%20rawPrunePaths%20!%3D%3D%20'%7B%7B1%7D%7D'%20%26%26%20rawPrunePaths%20!%3D%3D%20''%0A%20%20%20%20%20%20%20%20%3F%20rawPrunePaths.split(%2F%20%2B%2F)%0A%20%20%20%20%20%20%20%20%3A%20%5B%5D%3B%0A%20%20%20%20let%20needlePaths%3B%0A%20%20%20%20let%20log%2C%20reLogNeedle%3B%0A%20%20%20%20if%20(%20prunePaths.length%20!%3D%3D%200%20)%20%7B%0A%20%20%20%20%20%20%20%20needlePaths%20%3D%20prunePaths.length%20!%3D%3D%200%20%26%26%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20rawNeedlePaths%20!%3D%3D%20'%7B%7B2%7D%7D'%20%26%26%20rawNeedlePaths%20!%3D%3D%20''%0A%20%20%20%20%20%20%20%20%20%20%20%20%3F%20rawNeedlePaths.split(%2F%20%2B%2F)%0A%20%20%20%20%20%20%20%20%20%20%20%20%3A%20%5B%5D%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20log%20%3D%20console.log.bind(console)%3B%0A%20%20%20%20%20%20%20%20let%20needle%3B%0A%20%20%20%20%20%20%20%20if%20(%20rawNeedlePaths%20%3D%3D%3D%20''%20%7C%7C%20rawNeedlePaths%20%3D%3D%3D%20'%7B%7B2%7D%7D'%20)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20needle%20%3D%20'.%3F'%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20if%20(%20rawNeedlePaths.charAt(0)%20%3D%3D%3D%20'%2F'%20%26%26%20rawNeedlePaths.slice(-1)%20%3D%3D%3D%20'%2F'%20)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20needle%20%3D%20rawNeedlePaths.slice(1%2C%20-1)%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20needle%20%3D%20rawNeedlePaths.replace(%2F%5B.*%2B%3F%5E%24%7B%7D()%7C%5B%5C%5D%5C%5C%5D%2Fg%2C%20'%5C%5C%24%26')%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20reLogNeedle%20%3D%20new%20RegExp(needle)%3B%0A%20%20%20%20%7D%0A%20%20%20%20const%20findOwner%20%3D%20function(root%2C%20path%2C%20prune%20%3D%20false)%20%7B%0A%20%20%20%20%20%20%20%20let%20owner%20%3D%20root%3B%0A%20%20%20%20%20%20%20%20let%20chain%20%3D%20path%3B%0A%20%20%20%20%20%20%20%20for%20(%3B%3B)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(%20typeof%20owner%20!%3D%3D%20'object'%20%7C%7C%20owner%20%3D%3D%3D%20null%20%20)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20pos%20%3D%20chain.indexOf('.')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(%20pos%20%3D%3D%3D%20-1%20)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20found%20%3D%20owner.hasOwnProperty(chain)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(%20found%20%3D%3D%3D%20false%20)%20%7B%20return%20false%3B%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(%20prune%20)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20delete%20owner%5Bchain%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20true%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20prop%20%3D%20chain.slice(0%2C%20pos)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20prop%20%3D%3D%3D%20'%5B%5D'%20%26%26%20Array.isArray(owner)%20%7C%7C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20prop%20%3D%3D%3D%20'*'%20%26%26%20owner%20instanceof%20Object%0A%20%20%20%20%20%20%20%20%20%20%20%20)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20next%20%3D%20chain.slice(pos%20%2B%201)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20found%20%3D%20false%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20for%20(%20const%20key%20of%20Object.keys(owner)%20)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20found%20%3D%20findOwner(owner%5Bkey%5D%2C%20next%2C%20prune)%20%7C%7C%20found%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20found%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(%20owner.hasOwnProperty(prop)%20%3D%3D%3D%20false%20)%20%7B%20return%20false%3B%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20owner%20%3D%20owner%5Bprop%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20chain%20%3D%20chain.slice(pos%20%2B%201)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%20%20%20%20const%20mustProcess%20%3D%20function(root)%20%7B%0A%20%20%20%20%20%20%20%20for%20(%20const%20needlePath%20of%20needlePaths%20)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(%20findOwner(root%2C%20needlePath)%20%3D%3D%3D%20false%20)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20return%20true%3B%0A%20%20%20%20%7D%3B%0A%20%20%20%20const%20pruner%20%3D%20function(o)%20%7B%0A%20%20%20%20%20%20%20%20if%20(%20log%20!%3D%3D%20undefined%20)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20json%20%3D%20JSON.stringify(o%2C%20null%2C%202)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(%20reLogNeedle.test(json)%20)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20log('uBO%3A'%2C%20location.hostname%2C%20json)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20o%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20if%20(%20mustProcess(o)%20%3D%3D%3D%20false%20)%20%7B%20return%20o%3B%20%7D%0A%20%20%20%20%20%20%20%20for%20(%20const%20path%20of%20prunePaths%20)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20findOwner(o%2C%20path%2C%20true)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20return%20o%3B%0A%20%20%20%20%7D%3B%0A%20%20%20%20JSON.parse%20%3D%20new%20Proxy(JSON.parse%2C%20%7B%0A%20%20%20%20%20%20%20%20apply%3A%20function()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20pruner(Reflect.apply(...arguments))%3B%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%7D)%3B%0A%20%20%20%20Response.prototype.json%20%3D%20new%20Proxy(Response.prototype.json%2C%20%7B%0A%20%20%20%20%20%20%20%20apply%3A%20function()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20Reflect.apply(...arguments).then(o%20%3D%3E%20pruner(o))%3B%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%7D)%3B%0A%7D)()%3B%0A%7D%20catch%20(%20e%20)%20%7B%20%7D%0Atry%20%7B%0A(function()%20%7B%0A%20%20%20%20const%20chain%20%3D%20'ytInitialPlayerResponse.adPlacements'%3B%0A%20%20%20%20let%20cValue%20%3D%20'undefined'%3B%0A%20%20%20%20const%20thisScript%20%3D%20document.currentScript%3B%0A%20%20%20%20if%20(%20cValue%20%3D%3D%3D%20'undefined'%20)%20%7B%0A%20%20%20%20%20%20%20%20cValue%20%3D%20undefined%3B%0A%20%20%20%20%7D%20else%20if%20(%20cValue%20%3D%3D%3D%20'false'%20)%20%7B%0A%20%20%20%20%20%20%20%20cValue%20%3D%20false%3B%0A%20%20%20%20%7D%20else%20if%20(%20cValue%20%3D%3D%3D%20'true'%20)%20%7B%0A%20%20%20%20%20%20%20%20cValue%20%3D%20true%3B%0A%20%20%20%20%7D%20else%20if%20(%20cValue%20%3D%3D%3D%20'null'%20)%20%7B%0A%20%20%20%20%20%20%20%20cValue%20%3D%20null%3B%0A%20%20%20%20%7D%20else%20if%20(%20cValue%20%3D%3D%3D%20'noopFunc'%20)%20%7B%0A%20%20%20%20%20%20%20%20cValue%20%3D%20function()%7B%7D%3B%0A%20%20%20%20%7D%20else%20if%20(%20cValue%20%3D%3D%3D%20'trueFunc'%20)%20%7B%0A%20%20%20%20%20%20%20%20cValue%20%3D%20function()%7B%20return%20true%3B%20%7D%3B%0A%20%20%20%20%7D%20else%20if%20(%20cValue%20%3D%3D%3D%20'falseFunc'%20)%20%7B%0A%20%20%20%20%20%20%20%20cValue%20%3D%20function()%7B%20return%20false%3B%20%7D%3B%0A%20%20%20%20%7D%20else%20if%20(%20%2F%5E%5Cd%2B%24%2F.test(cValue)%20)%20%7B%0A%20%20%20%20%20%20%20%20cValue%20%3D%20parseFloat(cValue)%3B%0A%20%20%20%20%20%20%20%20if%20(%20isNaN(cValue)%20)%20%7B%20return%3B%20%7D%0A%20%20%20%20%20%20%20%20if%20(%20Math.abs(cValue)%20%3E%200x7FFF%20)%20%7B%20return%3B%20%7D%0A%20%20%20%20%7D%20else%20if%20(%20cValue%20%3D%3D%3D%20%22''%22%20)%20%7B%0A%20%20%20%20%20%20%20%20cValue%20%3D%20''%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20return%3B%0A%20%20%20%20%7D%0A%20%20%20%20let%20aborted%20%3D%20false%3B%0A%20%20%20%20const%20mustAbort%20%3D%20function(v)%20%7B%0A%20%20%20%20%20%20%20%20if%20(%20aborted%20)%20%7B%20return%20true%3B%20%7D%0A%20%20%20%20%20%20%20%20aborted%20%3D%0A%20%20%20%20%20%20%20%20%20%20%20%20(v%20!%3D%3D%20undefined%20%26%26%20v%20!%3D%3D%20null)%20%26%26%0A%20%20%20%20%20%20%20%20%20%20%20%20(cValue%20!%3D%3D%20undefined%20%26%26%20cValue%20!%3D%3D%20null)%20%26%26%0A%20%20%20%20%20%20%20%20%20%20%20%20(typeof%20v%20!%3D%3D%20typeof%20cValue)%3B%0A%20%20%20%20%20%20%20%20return%20aborted%3B%0A%20%20%20%20%7D%3B%0A%20%20%20%20%2F%2F%20https%3A%2F%2Fgithub.com%2FuBlockOrigin%2FuBlock-issues%2Fissues%2F156%0A%20%20%20%20%2F%2F%20%20%20Support%20multiple%20trappers%20for%20the%20same%20property.%0A%20%20%20%20const%20trapProp%20%3D%20function(owner%2C%20prop%2C%20configurable%2C%20handler)%20%7B%0A%20%20%20%20%20%20%20%20if%20(%20handler.init(owner%5Bprop%5D)%20%3D%3D%3D%20false%20)%20%7B%20return%3B%20%7D%0A%20%20%20%20%20%20%20%20const%20odesc%20%3D%20Object.getOwnPropertyDescriptor(owner%2C%20prop)%3B%0A%20%20%20%20%20%20%20%20let%20prevGetter%2C%20prevSetter%3B%0A%20%20%20%20%20%20%20%20if%20(%20odesc%20instanceof%20Object%20)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(%20odesc.configurable%20%3D%3D%3D%20false%20)%20%7B%20return%3B%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(%20odesc.get%20instanceof%20Function%20)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20prevGetter%20%3D%20odesc.get%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(%20odesc.set%20instanceof%20Function%20)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20prevSetter%20%3D%20odesc.set%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20Object.defineProperty(owner%2C%20prop%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20configurable%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20get()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(%20prevGetter%20!%3D%3D%20undefined%20)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20prevGetter()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20handler.getter()%3B%20%2F%2F%20cValue%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20set(a)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(%20prevSetter%20!%3D%3D%20undefined%20)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20prevSetter(a)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20handler.setter(a)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D%3B%0A%20%20%20%20const%20trapChain%20%3D%20function(owner%2C%20chain)%20%7B%0A%20%20%20%20%20%20%20%20const%20pos%20%3D%20chain.indexOf('.')%3B%0A%20%20%20%20%20%20%20%20if%20(%20pos%20%3D%3D%3D%20-1%20)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20trapProp(owner%2C%20chain%2C%20false%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20v%3A%20undefined%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20init%3A%20function(v)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(%20mustAbort(v)%20)%20%7B%20return%20false%3B%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this.v%20%3D%20v%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20true%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20getter%3A%20function()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20document.currentScript%20%3D%3D%3D%20thisScript%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3F%20this.v%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%20cValue%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20setter%3A%20function(a)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(%20mustAbort(a)%20%3D%3D%3D%20false%20)%20%7B%20return%3B%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20cValue%20%3D%20a%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20const%20prop%20%3D%20chain.slice(0%2C%20pos)%3B%0A%20%20%20%20%20%20%20%20const%20v%20%3D%20owner%5Bprop%5D%3B%0A%20%20%20%20%20%20%20%20chain%20%3D%20chain.slice(pos%20%2B%201)%3B%0A%20%20%20%20%20%20%20%20if%20(%20v%20instanceof%20Object%20%7C%7C%20typeof%20v%20%3D%3D%3D%20'object'%20%26%26%20v%20!%3D%3D%20null%20)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20trapChain(v%2C%20chain)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20trapProp(owner%2C%20prop%2C%20true%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20v%3A%20undefined%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20init%3A%20function(v)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this.v%20%3D%20v%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20true%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20getter%3A%20function()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20this.v%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20setter%3A%20function(a)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this.v%20%3D%20a%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(%20a%20instanceof%20Object%20)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20trapChain(a%2C%20chain)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D%3B%0A%20%20%20%20trapChain(window%2C%20chain)%3B%0A%7D)()%3B%0A%7D%20catch%20(%20e%20)%20%7B%20%7D%0Atry%20%7B%0A(function()%20%7B%0A%20%20%20%20const%20chain%20%3D%20'playerResponse.adPlacements'%3B%0A%20%20%20%20let%20cValue%20%3D%20'undefined'%3B%0A%20%20%20%20const%20thisScript%20%3D%20document.currentScript%3B%0A%20%20%20%20if%20(%20cValue%20%3D%3D%3D%20'undefined'%20)%20%7B%0A%20%20%20%20%20%20%20%20cValue%20%3D%20undefined%3B%0A%20%20%20%20%7D%20else%20if%20(%20cValue%20%3D%3D%3D%20'false'%20)%20%7B%0A%20%20%20%20%20%20%20%20cValue%20%3D%20false%3B%0A%20%20%20%20%7D%20else%20if%20(%20cValue%20%3D%3D%3D%20'true'%20)%20%7B%0A%20%20%20%20%20%20%20%20cValue%20%3D%20true%3B%0A%20%20%20%20%7D%20else%20if%20(%20cValue%20%3D%3D%3D%20'null'%20)%20%7B%0A%20%20%20%20%20%20%20%20cValue%20%3D%20null%3B%0A%20%20%20%20%7D%20else%20if%20(%20cValue%20%3D%3D%3D%20'noopFunc'%20)%20%7B%0A%20%20%20%20%20%20%20%20cValue%20%3D%20function()%7B%7D%3B%0A%20%20%20%20%7D%20else%20if%20(%20cValue%20%3D%3D%3D%20'trueFunc'%20)%20%7B%0A%20%20%20%20%20%20%20%20cValue%20%3D%20function()%7B%20return%20true%3B%20%7D%3B%0A%20%20%20%20%7D%20else%20if%20(%20cValue%20%3D%3D%3D%20'falseFunc'%20)%20%7B%0A%20%20%20%20%20%20%20%20cValue%20%3D%20function()%7B%20return%20false%3B%20%7D%3B%0A%20%20%20%20%7D%20else%20if%20(%20%2F%5E%5Cd%2B%24%2F.test(cValue)%20)%20%7B%0A%20%20%20%20%20%20%20%20cValue%20%3D%20parseFloat(cValue)%3B%0A%20%20%20%20%20%20%20%20if%20(%20isNaN(cValue)%20)%20%7B%20return%3B%20%7D%0A%20%20%20%20%20%20%20%20if%20(%20Math.abs(cValue)%20%3E%200x7FFF%20)%20%7B%20return%3B%20%7D%0A%20%20%20%20%7D%20else%20if%20(%20cValue%20%3D%3D%3D%20%22''%22%20)%20%7B%0A%20%20%20%20%20%20%20%20cValue%20%3D%20''%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20return%3B%0A%20%20%20%20%7D%0A%20%20%20%20let%20aborted%20%3D%20false%3B%0A%20%20%20%20const%20mustAbort%20%3D%20function(v)%20%7B%0A%20%20%20%20%20%20%20%20if%20(%20aborted%20)%20%7B%20return%20true%3B%20%7D%0A%20%20%20%20%20%20%20%20aborted%20%3D%0A%20%20%20%20%20%20%20%20%20%20%20%20(v%20!%3D%3D%20undefined%20%26%26%20v%20!%3D%3D%20null)%20%26%26%0A%20%20%20%20%20%20%20%20%20%20%20%20(cValue%20!%3D%3D%20undefined%20%26%26%20cValue%20!%3D%3D%20null)%20%26%26%0A%20%20%20%20%20%20%20%20%20%20%20%20(typeof%20v%20!%3D%3D%20typeof%20cValue)%3B%0A%20%20%20%20%20%20%20%20return%20aborted%3B%0A%20%20%20%20%7D%3B%0A%20%20%20%20%2F%2F%20https%3A%2F%2Fgithub.com%2FuBlockOrigin%2FuBlock-issues%2Fissues%2F156%0A%20%20%20%20%2F%2F%20%20%20Support%20multiple%20trappers%20for%20the%20same%20property.%0A%20%20%20%20const%20trapProp%20%3D%20function(owner%2C%20prop%2C%20configurable%2C%20handler)%20%7B%0A%20%20%20%20%20%20%20%20if%20(%20handler.init(owner%5Bprop%5D)%20%3D%3D%3D%20false%20)%20%7B%20return%3B%20%7D%0A%20%20%20%20%20%20%20%20const%20odesc%20%3D%20Object.getOwnPropertyDescriptor(owner%2C%20prop)%3B%0A%20%20%20%20%20%20%20%20let%20prevGetter%2C%20prevSetter%3B%0A%20%20%20%20%20%20%20%20if%20(%20odesc%20instanceof%20Object%20)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(%20odesc.configurable%20%3D%3D%3D%20false%20)%20%7B%20return%3B%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(%20odesc.get%20instanceof%20Function%20)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20prevGetter%20%3D%20odesc.get%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(%20odesc.set%20instanceof%20Function%20)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20prevSetter%20%3D%20odesc.set%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20Object.defineProperty(owner%2C%20prop%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20configurable%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20get()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(%20prevGetter%20!%3D%3D%20undefined%20)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20prevGetter()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20handler.getter()%3B%20%2F%2F%20cValue%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20set(a)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(%20prevSetter%20!%3D%3D%20undefined%20)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20prevSetter(a)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20handler.setter(a)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D%3B%0A%20%20%20%20const%20trapChain%20%3D%20function(owner%2C%20chain)%20%7B%0A%20%20%20%20%20%20%20%20const%20pos%20%3D%20chain.indexOf('.')%3B%0A%20%20%20%20%20%20%20%20if%20(%20pos%20%3D%3D%3D%20-1%20)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20trapProp(owner%2C%20chain%2C%20false%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20v%3A%20undefined%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20init%3A%20function(v)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(%20mustAbort(v)%20)%20%7B%20return%20false%3B%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this.v%20%3D%20v%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20true%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20getter%3A%20function()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20document.currentScript%20%3D%3D%3D%20thisScript%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3F%20this.v%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%20cValue%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20setter%3A%20function(a)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(%20mustAbort(a)%20%3D%3D%3D%20false%20)%20%7B%20return%3B%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20cValue%20%3D%20a%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20const%20prop%20%3D%20chain.slice(0%2C%20pos)%3B%0A%20%20%20%20%20%20%20%20const%20v%20%3D%20owner%5Bprop%5D%3B%0A%20%20%20%20%20%20%20%20chain%20%3D%20chain.slice(pos%20%2B%201)%3B%0A%20%20%20%20%20%20%20%20if%20(%20v%20instanceof%20Object%20%7C%7C%20typeof%20v%20%3D%3D%3D%20'object'%20%26%26%20v%20!%3D%3D%20null%20)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20trapChain(v%2C%20chain)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20trapProp(owner%2C%20prop%2C%20true%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20v%3A%20undefined%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20init%3A%20function(v)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this.v%20%3D%20v%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20true%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20getter%3A%20function()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20this.v%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20setter%3A%20function(a)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this.v%20%3D%20a%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(%20a%20instanceof%20Object%20)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20trapChain(a%2C%20chain)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D%3B%0A%20%20%20%20trapChain(window%2C%20chain)%3B%0A%7D)()%3B%0A%7D%20catch%20(%20e%20)%20%7B%20%7D%0A%0A%2F%2F%20%3C%3C%3C%3C%20end%20of%20private%20namespace%0A%7D)()%3B"))),
                (e.head || e.documentElement).appendChild(t)
            } catch (e) {}
            t && (t.parentNode && t.parentNode.removeChild(t), t.textContent = "")
        }(document),
        e.mainFrameNoImageEnable && Eo(!0),
        console.log(e),
        "true" === e.autoShuffle && function() {
            var e = () => {
                    var e = setInterval(() => {
                        var t = document.querySelectorAll("ytmusic-responsive-list-item-renderer a"),
                            n = t.length;
                        if (So++, 0 !== n) {
                            e && clearInterval(e);
                            var r = Math.floor(Math.random() * n);
                            Or(t[r] ? t[r] : t[0])
                        } else
                            30 === So && e && clearInterval(e)
                    }, 500)
                },
                {href: t} = location;
            ko || (t.includes("music.youtube.com/playlist?") && (document.body ? e() : document.addEventListener("DOMContentLoaded", e)), ko = !0)
        }()
    }
    var ko = !1,
        So = 0;
    Ft().then(e => {
        e && To(e)
    });
    var No = {
        __proto__: null,
        set: To,
        get: function() {
            return Co.config
        }
    };
    function Oo() {
        try {
            return window.self === window.top
        } catch (e) {
            return !1
        }
    }
    var Po = 260;
    function Io(e) {
        var t = e.target;
        t && (t.takeMarkLoaded = !0, t.dataset.takeMarkLoaded = !0)
    }
    function Mo(e, t) {
        for (var n = new Array, r = 0; r < e.length; r++)
            n.push(e[r]);
        for (r = 0; r < t.length; r++)
            n.push(t[r]);
        return n
    }
    function Lo(e) {
        if (e && e.getElementsByTagName)
            for (var t = [...Array.from(e.getElementsByTagName("img")), ...Array.from(e.getElementsByTagName("input"))], n = 0; n < t.length; n++)
                t[n].addEventListener("load", Io)
    }
    function Fo(e) {
        var t = e.target;
        t && "takeHighlightCoverX" !== t.id && (t.parentNode && "takeHighlightCoverX" === t.parentNode.id || Oo() && (Vo(t) && t.addEventListener("load", Io), Lo(t)))
    }
    function Ro() {
        Oo() && Lo(document),
        document.addEventListener("DOMNodeInserted", Fo)
    }
    function Vo(e) {
        if (e) {
            if (e.takeBgImgSrc && e.takeBgImgSrc())
                return !0;
            if ((e instanceof HTMLImageElement || e instanceof HTMLInputElement) && !(e instanceof HTMLInputElement && "image" !== e.getAttribute("type")) && e.takeImgSrc && e.takeImgSrc())
                return !0
        }
        return !1
    }
    function jo(e, t, n) {
        return e && t && (n < e && n < t || 1.3 * n < e && n / 2 < t || 1.3 * n < t && n / 2 < e)
    }
    function Uo(e, t, n, r) {
        if (r && "gif" == r.split("?")[0].split(".").pop().toLowerCase() && (t = 180 < t ? 180 : t), n && jo(e.naturalWidth, e.naturalHeight, t))
            return 1;
        if (jo(e.clientWidth, e.clientHeight, t))
            return 1;
        var o = e.getBoundingClientRect();
        return !!jo(o.width, o.height, t)
    }
    -1 != location.host.indexOf(".google.") && (Po = 200),
    Element.prototype.takeImgSrc = function() {
        var e = this.src;
        if (e && 0 === e.indexOf("http"))
            return e;
        var t = this.takeBgImgSrc();
        if (t)
            return t;
        if (!(this instanceof HTMLImageElement))
            return null;
        var n = this.getAttribute("data-src");
        if (n && 0 === n.indexOf("http"))
            return n;
        for (var r = this.attributes, o = 0; o < r.length; o++) {
            var i = r[o].nodeValue;
            if (i && 0 === i.indexOf("http"))
                return i
        }
        return this.src
    },
    Element.prototype.takeBgImgSrc = function() {
        var e = this.style.backgroundImage;
        return e && 0 < e.indexOf("http") ? e.slice(4, -1).replace(/"/g, "") : null
    },
    Ro(),
    document.addEventListener("DOMContentLoaded", Ro),
    console.log("ytlib loaded"),
    document.addEventListener("DOMContentLoaded", () => {
        navigator.mediaDevices = !0
    }),
    e.config = No,
    e.darkmode = Ao,
    e.dom = $t,
    e.extract = Un,
    e.getAllImage = function(e) {
        var t = function(e, t, n) {
                var r = Mo(document.getElementsByTagName("img"), document.getElementsByTagName("input"));
                r = Mo(r, document.querySelectorAll("[style*='background-image']"));
                for (var o = new Array, i = new Array, a = new Array, l = 0; l < r.length; l++) {
                    var u,
                        s = r[l];
                    Vo(s) && (u = s.takeImgSrc(), Uo(s, e, n, u) ? (a.push(s), o.push(u)) : s.takeMarkLoaded || i.push(s))
                }
                0 < a.length && i.forEach(function(e) {
                    var t = document.createElement("a"),
                        n = e.takeImgSrc();
                    t.href = n;
                    for (var r = t.host, i = 0; i < a.length; i++) {
                        var l = a[i];
                        if (l.parentNode === e.parentNode || l.parentNode && e.parentNode && l.parentNode.parentNode === e.parentNode.parentNode) {
                            var u = l.takeImgSrc();
                            if (t.href = u, t.host == r) {
                                o.push(n);
                                break
                            }
                        }
                    }
                });
                var c = new Array;
                for (l = 0; l < o.length; l++) {
                    var d = o[l];
                    0 != d.length && -1 == d.indexOf("/ad/") && -1 == d.indexOf("/ads/") && -1 == d.indexOf("_ads") && -1 == d.indexOf("ads_") && -1 == d.indexOf("-ad-") && -1 == c.indexOf(d) && c.push(d)
                }
                return c
            }(e ? Po : 20, 0, !e),
            n = {};
        return n.bigImages = t, function(e) {
            e.referrer = location.href;
            var t = document.querySelector("meta[name='referrer']");
            (null == t ? void 0 : t.content) && ("no-referrer" != t.content && "never" != t.content || (e.referrer = "")),
            e.title = document.title,
            e.ua = navigator.userAgent
        }(n), It(n), n
    },
    e.jsbridge = jt,
    e.setMainFrameNoImageEnable = Eo,
    e.store = Ct,
    e.video = Fr,
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
});
