!function (e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var o = t[i] = {i: i, l: !1, exports: {}};
        return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: i})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var o in e) n.d(i, o, function (t) {
            return e[t]
        }.bind(null, o));
        return i
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 30)
}([function (e, t, n) {
    (function (t) {
        var n;
        n = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}, e.exports = n
    }).call(this, n(6))
}, function (e, t, n) {
    var i;
    !function (t, n) {
        "use strict";
        "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e)
        } : n(t)
    }("undefined" != typeof window ? window : this, (function (n, o) {
        "use strict";
        var r = [], s = Object.getPrototypeOf, a = r.slice, l = r.flat ? function (e) {
                return r.flat.call(e)
            } : function (e) {
                return r.concat.apply([], e)
            }, c = r.push, d = r.indexOf, u = {}, p = u.toString, f = u.hasOwnProperty, h = f.toString, m = h.call(Object),
            g = {}, v = function (e) {
                return "function" == typeof e && "number" != typeof e.nodeType
            }, y = function (e) {
                return null != e && e === e.window
            }, b = n.document, w = {type: !0, src: !0, nonce: !0, noModule: !0};

        function x(e, t, n) {
            var i, o, r = (n = n || b).createElement("script");
            if (r.text = e, t) for (i in w) (o = t[i] || t.getAttribute && t.getAttribute(i)) && r.setAttribute(i, o);
            n.head.appendChild(r).parentNode.removeChild(r)
        }

        function T(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[p.call(e)] || "object" : typeof e
        }

        var C = function (e, t) {
            return new C.fn.init(e, t)
        };

        function k(e) {
            var t = !!e && "length" in e && e.length, n = T(e);
            return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        C.fn = C.prototype = {
            jquery: "3.5.1", constructor: C, length: 0, toArray: function () {
                return a.call(this)
            }, get: function (e) {
                return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
            }, pushStack: function (e) {
                var t = C.merge(this.constructor(), e);
                return t.prevObject = this, t
            }, each: function (e) {
                return C.each(this, e)
            }, map: function (e) {
                return this.pushStack(C.map(this, (function (t, n) {
                    return e.call(t, n, t)
                })))
            }, slice: function () {
                return this.pushStack(a.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, even: function () {
                return this.pushStack(C.grep(this, (function (e, t) {
                    return (t + 1) % 2
                })))
            }, odd: function () {
                return this.pushStack(C.grep(this, (function (e, t) {
                    return t % 2
                })))
            }, eq: function (e) {
                var t = this.length, n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            }, end: function () {
                return this.prevObject || this.constructor()
            }, push: c, sort: r.sort, splice: r.splice
        }, C.extend = C.fn.extend = function () {
            var e, t, n, i, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || v(s) || (s = {}), a === l && (s = this, a--); a < l; a++) if (null != (e = arguments[a])) for (t in e) i = e[t], "__proto__" !== t && s !== i && (c && i && (C.isPlainObject(i) || (o = Array.isArray(i))) ? (n = s[t], r = o && !Array.isArray(n) ? [] : o || C.isPlainObject(n) ? n : {}, o = !1, s[t] = C.extend(c, r, i)) : void 0 !== i && (s[t] = i));
            return s
        }, C.extend({
            expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
                throw new Error(e)
            }, noop: function () {
            }, isPlainObject: function (e) {
                var t, n;
                return !(!e || "[object Object]" !== p.call(e)) && (!(t = s(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && h.call(n) === m)
            }, isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0
            }, globalEval: function (e, t, n) {
                x(e, {nonce: t && t.nonce}, n)
            }, each: function (e, t) {
                var n, i = 0;
                if (k(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                return e
            }, makeArray: function (e, t) {
                var n = t || [];
                return null != e && (k(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n
            }, inArray: function (e, t, n) {
                return null == t ? -1 : d.call(t, e, n)
            }, merge: function (e, t) {
                for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
                return e.length = o, e
            }, grep: function (e, t, n) {
                for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) !== s && i.push(e[o]);
                return i
            }, map: function (e, t, n) {
                var i, o, r = 0, s = [];
                if (k(e)) for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && s.push(o); else for (r in e) null != (o = t(e[r], r, n)) && s.push(o);
                return l(s)
            }, guid: 1, support: g
        }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = r[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function (e, t) {
            u["[object " + t + "]"] = t.toLowerCase()
        }));
        var S = function (e) {
            var t, n, i, o, r, s, a, l, c, d, u, p, f, h, m, g, v, y, b, w = "sizzle" + 1 * new Date, x = e.document,
                T = 0, C = 0, k = le(), S = le(), E = le(), $ = le(), _ = function (e, t) {
                    return e === t && (u = !0), 0
                }, A = {}.hasOwnProperty, O = [], D = O.pop, N = O.push, j = O.push, P = O.slice, I = function (e, t) {
                    for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                    return -1
                },
                L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                M = "[\\x20\\t\\r\\n\\f]",
                H = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                R = "\\[" + M + "*(" + H + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + M + "*\\]",
                q = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
                F = new RegExp(M + "+", "g"), z = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
                B = new RegExp("^" + M + "*," + M + "*"), W = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
                V = new RegExp(M + "|>"), U = new RegExp(q), Y = new RegExp("^" + H + "$"), X = {
                    ID: new RegExp("^#(" + H + ")"),
                    CLASS: new RegExp("^\\.(" + H + ")"),
                    TAG: new RegExp("^(" + H + "|[*])"),
                    ATTR: new RegExp("^" + R),
                    PSEUDO: new RegExp("^" + q),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + L + ")$", "i"),
                    needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
                }, Q = /HTML$/i, G = /^(?:input|select|textarea|button)$/i, K = /^h\d$/i, J = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/,
                te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"), ne = function (e, t) {
                    var n = "0x" + e.slice(1) - 65536;
                    return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                }, ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, oe = function (e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                }, re = function () {
                    p()
                }, se = we((function (e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                }), {dir: "parentNode", next: "legend"});
            try {
                j.apply(O = P.call(x.childNodes), x.childNodes), O[x.childNodes.length].nodeType
            } catch (e) {
                j = {
                    apply: O.length ? function (e, t) {
                        N.apply(e, P.call(t))
                    } : function (e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];) ;
                        e.length = n - 1
                    }
                }
            }

            function ae(e, t, i, o) {
                var r, a, c, d, u, h, v, y = t && t.ownerDocument, x = t ? t.nodeType : 9;
                if (i = i || [], "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x) return i;
                if (!o && (p(t), t = t || f, m)) {
                    if (11 !== x && (u = Z.exec(e))) if (r = u[1]) {
                        if (9 === x) {
                            if (!(c = t.getElementById(r))) return i;
                            if (c.id === r) return i.push(c), i
                        } else if (y && (c = y.getElementById(r)) && b(t, c) && c.id === r) return i.push(c), i
                    } else {
                        if (u[2]) return j.apply(i, t.getElementsByTagName(e)), i;
                        if ((r = u[3]) && n.getElementsByClassName && t.getElementsByClassName) return j.apply(i, t.getElementsByClassName(r)), i
                    }
                    if (n.qsa && !$[e + " "] && (!g || !g.test(e)) && (1 !== x || "object" !== t.nodeName.toLowerCase())) {
                        if (v = e, y = t, 1 === x && (V.test(e) || W.test(e))) {
                            for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((d = t.getAttribute("id")) ? d = d.replace(ie, oe) : t.setAttribute("id", d = w)), a = (h = s(e)).length; a--;) h[a] = (d ? "#" + d : ":scope") + " " + be(h[a]);
                            v = h.join(",")
                        }
                        try {
                            return j.apply(i, y.querySelectorAll(v)), i
                        } catch (t) {
                            $(e, !0)
                        } finally {
                            d === w && t.removeAttribute("id")
                        }
                    }
                }
                return l(e.replace(z, "$1"), t, i, o)
            }

            function le() {
                var e = [];
                return function t(n, o) {
                    return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = o
                }
            }

            function ce(e) {
                return e[w] = !0, e
            }

            function de(e) {
                var t = f.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function ue(e, t) {
                for (var n = e.split("|"), o = n.length; o--;) i.attrHandle[n[o]] = t
            }

            function pe(e, t) {
                var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (i) return i;
                if (n) for (; n = n.nextSibling;) if (n === t) return -1;
                return e ? 1 : -1
            }

            function fe(e) {
                return function (t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }

            function he(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function me(e) {
                return function (t) {
                    return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e
                }
            }

            function ge(e) {
                return ce((function (t) {
                    return t = +t, ce((function (n, i) {
                        for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                    }))
                }))
            }

            function ve(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }

            for (t in n = ae.support = {}, r = ae.isXML = function (e) {
                var t = e.namespaceURI, n = (e.ownerDocument || e).documentElement;
                return !Q.test(t || n && n.nodeName || "HTML")
            }, p = ae.setDocument = function (e) {
                var t, o, s = e ? e.ownerDocument || e : x;
                return s != f && 9 === s.nodeType && s.documentElement ? (h = (f = s).documentElement, m = !r(f), x != f && (o = f.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", re, !1) : o.attachEvent && o.attachEvent("onunload", re)), n.scope = de((function (e) {
                    return h.appendChild(e).appendChild(f.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                })), n.attributes = de((function (e) {
                    return e.className = "i", !e.getAttribute("className")
                })), n.getElementsByTagName = de((function (e) {
                    return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length
                })), n.getElementsByClassName = J.test(f.getElementsByClassName), n.getById = de((function (e) {
                    return h.appendChild(e).id = w, !f.getElementsByName || !f.getElementsByName(w).length
                })), n.getById ? (i.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }, i.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && m) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (i.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, i.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && m) {
                        var n, i, o, r = t.getElementById(e);
                        if (r) {
                            if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                            for (o = t.getElementsByName(e), i = 0; r = o[i++];) if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
                        }
                        return []
                    }
                }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var n, i = [], o = 0, r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
                    if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
                }, v = [], g = [], (n.qsa = J.test(f.querySelectorAll)) && (de((function (e) {
                    var t;
                    h.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + M + "*(?:value|" + L + ")"), e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="), (t = f.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || g.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]"), e.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]")
                })), de((function (e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = f.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                }))), (n.matchesSelector = J.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && de((function (e) {
                    n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", q)
                })), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = J.test(h.compareDocumentPosition), b = t || J.test(h.contains) ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function (e, t) {
                    if (t) for (; t = t.parentNode;) if (t === e) return !0;
                    return !1
                }, _ = t ? function (e, t) {
                    if (e === t) return u = !0, 0;
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e == f || e.ownerDocument == x && b(x, e) ? -1 : t == f || t.ownerDocument == x && b(x, t) ? 1 : d ? I(d, e) - I(d, t) : 0 : 4 & i ? -1 : 1)
                } : function (e, t) {
                    if (e === t) return u = !0, 0;
                    var n, i = 0, o = e.parentNode, r = t.parentNode, s = [e], a = [t];
                    if (!o || !r) return e == f ? -1 : t == f ? 1 : o ? -1 : r ? 1 : d ? I(d, e) - I(d, t) : 0;
                    if (o === r) return pe(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; s[i] === a[i];) i++;
                    return i ? pe(s[i], a[i]) : s[i] == x ? -1 : a[i] == x ? 1 : 0
                }, f) : f
            }, ae.matches = function (e, t) {
                return ae(e, null, null, t)
            }, ae.matchesSelector = function (e, t) {
                if (p(e), n.matchesSelector && m && !$[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
                    var i = y.call(e, t);
                    if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {
                    $(t, !0)
                }
                return ae(t, f, null, [e]).length > 0
            }, ae.contains = function (e, t) {
                return (e.ownerDocument || e) != f && p(e), b(e, t)
            }, ae.attr = function (e, t) {
                (e.ownerDocument || e) != f && p(e);
                var o = i.attrHandle[t.toLowerCase()],
                    r = o && A.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !m) : void 0;
                return void 0 !== r ? r : n.attributes || !m ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, ae.escape = function (e) {
                return (e + "").replace(ie, oe)
            }, ae.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ae.uniqueSort = function (e) {
                var t, i = [], o = 0, r = 0;
                if (u = !n.detectDuplicates, d = !n.sortStable && e.slice(0), e.sort(_), u) {
                    for (; t = e[r++];) t === e[r] && (o = i.push(r));
                    for (; o--;) e.splice(i[o], 1)
                }
                return d = null, e
            }, o = ae.getText = function (e) {
                var t, n = "", i = 0, r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else for (; t = e[i++];) n += o(t);
                return n
            }, (i = ae.selectors = {
                cacheLength: 50,
                createPseudo: ce,
                match: X,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    }, CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                    }, PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    }, CLASS: function (e) {
                        var t = k[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && k(e, (function (e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        }))
                    }, ATTR: function (e, t, n) {
                        return function (i) {
                            var o = ae.attr(i, e);
                            return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(F, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                        }
                    }, CHILD: function (e, t, n, i, o) {
                        var r = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
                        return 1 === i && 0 === o ? function (e) {
                            return !!e.parentNode
                        } : function (t, n, l) {
                            var c, d, u, p, f, h, m = r !== s ? "nextSibling" : "previousSibling", g = t.parentNode,
                                v = a && t.nodeName.toLowerCase(), y = !l && !a, b = !1;
                            if (g) {
                                if (r) {
                                    for (; m;) {
                                        for (p = t; p = p[m];) if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                        h = m = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [s ? g.firstChild : g.lastChild], s && y) {
                                    for (b = (f = (c = (d = (u = (p = g)[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === T && c[1]) && c[2], p = f && g.childNodes[f]; p = ++f && p && p[m] || (b = f = 0) || h.pop();) if (1 === p.nodeType && ++b && p === t) {
                                        d[e] = [T, f, b];
                                        break
                                    }
                                } else if (y && (b = f = (c = (d = (u = (p = t)[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === T && c[1]), !1 === b) for (; (p = ++f && p && p[m] || (b = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && ((d = (u = p[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] = [T, b]), p !== t));) ;
                                return (b -= o) === i || b % i == 0 && b / i >= 0
                            }
                        }
                    }, PSEUDO: function (e, t) {
                        var n,
                            o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                        return o[w] ? o(t) : o.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function (e, n) {
                            for (var i, r = o(e, t), s = r.length; s--;) e[i = I(e, r[s])] = !(n[i] = r[s])
                        })) : function (e) {
                            return o(e, 0, n)
                        }) : o
                    }
                },
                pseudos: {
                    not: ce((function (e) {
                        var t = [], n = [], i = a(e.replace(z, "$1"));
                        return i[w] ? ce((function (e, t, n, o) {
                            for (var r, s = i(e, null, o, []), a = e.length; a--;) (r = s[a]) && (e[a] = !(t[a] = r))
                        })) : function (e, o, r) {
                            return t[0] = e, i(t, null, r, n), t[0] = null, !n.pop()
                        }
                    })), has: ce((function (e) {
                        return function (t) {
                            return ae(e, t).length > 0
                        }
                    })), contains: ce((function (e) {
                        return e = e.replace(te, ne), function (t) {
                            return (t.textContent || o(t)).indexOf(e) > -1
                        }
                    })), lang: ce((function (e) {
                        return Y.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), function (t) {
                            var n;
                            do {
                                if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                    })), target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    }, root: function (e) {
                        return e === h
                    }, focus: function (e) {
                        return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    }, enabled: me(!1), disabled: me(!0), checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    }, selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    }, empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                        return !0
                    }, parent: function (e) {
                        return !i.pseudos.empty(e)
                    }, header: function (e) {
                        return K.test(e.nodeName)
                    }, input: function (e) {
                        return G.test(e.nodeName)
                    }, button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    }, text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    }, first: ge((function () {
                        return [0]
                    })), last: ge((function (e, t) {
                        return [t - 1]
                    })), eq: ge((function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    })), even: ge((function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    })), odd: ge((function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    })), lt: ge((function (e, t, n) {
                        for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0;) e.push(i);
                        return e
                    })), gt: ge((function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    }))
                }
            }).pseudos.nth = i.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) i.pseudos[t] = fe(t);
            for (t in {submit: !0, reset: !0}) i.pseudos[t] = he(t);

            function ye() {
            }

            function be(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                return i
            }

            function we(e, t, n) {
                var i = t.dir, o = t.next, r = o || i, s = n && "parentNode" === r, a = C++;
                return t.first ? function (t, n, o) {
                    for (; t = t[i];) if (1 === t.nodeType || s) return e(t, n, o);
                    return !1
                } : function (t, n, l) {
                    var c, d, u, p = [T, a];
                    if (l) {
                        for (; t = t[i];) if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                    } else for (; t = t[i];) if (1 === t.nodeType || s) if (d = (u = t[w] || (t[w] = {}))[t.uniqueID] || (u[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t; else {
                        if ((c = d[r]) && c[0] === T && c[1] === a) return p[2] = c[2];
                        if (d[r] = p, p[2] = e(t, n, l)) return !0
                    }
                    return !1
                }
            }

            function xe(e) {
                return e.length > 1 ? function (t, n, i) {
                    for (var o = e.length; o--;) if (!e[o](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function Te(e, t, n, i, o) {
                for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++) (r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
                return s
            }

            function Ce(e, t, n, i, o, r) {
                return i && !i[w] && (i = Ce(i)), o && !o[w] && (o = Ce(o, r)), ce((function (r, s, a, l) {
                    var c, d, u, p = [], f = [], h = s.length, m = r || function (e, t, n) {
                            for (var i = 0, o = t.length; i < o; i++) ae(e, t[i], n);
                            return n
                        }(t || "*", a.nodeType ? [a] : a, []), g = !e || !r && t ? m : Te(m, p, e, a, l),
                        v = n ? o || (r ? e : h || i) ? [] : s : g;
                    if (n && n(g, v, a, l), i) for (c = Te(v, f), i(c, [], a, l), d = c.length; d--;) (u = c[d]) && (v[f[d]] = !(g[f[d]] = u));
                    if (r) {
                        if (o || e) {
                            if (o) {
                                for (c = [], d = v.length; d--;) (u = v[d]) && c.push(g[d] = u);
                                o(null, v = [], c, l)
                            }
                            for (d = v.length; d--;) (u = v[d]) && (c = o ? I(r, u) : p[d]) > -1 && (r[c] = !(s[c] = u))
                        }
                    } else v = Te(v === s ? v.splice(h, v.length) : v), o ? o(null, s, v, l) : j.apply(s, v)
                }))
            }

            function ke(e) {
                for (var t, n, o, r = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, d = we((function (e) {
                    return e === t
                }), a, !0), u = we((function (e) {
                    return I(t, e) > -1
                }), a, !0), p = [function (e, n, i) {
                    var o = !s && (i || n !== c) || ((t = n).nodeType ? d(e, n, i) : u(e, n, i));
                    return t = null, o
                }]; l < r; l++) if (n = i.relative[e[l].type]) p = [we(xe(p), n)]; else {
                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                        for (o = ++l; o < r && !i.relative[e[o].type]; o++) ;
                        return Ce(l > 1 && xe(p), l > 1 && be(e.slice(0, l - 1).concat({value: " " === e[l - 2].type ? "*" : ""})).replace(z, "$1"), n, l < o && ke(e.slice(l, o)), o < r && ke(e = e.slice(o)), o < r && be(e))
                    }
                    p.push(n)
                }
                return xe(p)
            }

            return ye.prototype = i.filters = i.pseudos, i.setFilters = new ye, s = ae.tokenize = function (e, t) {
                var n, o, r, s, a, l, c, d = S[e + " "];
                if (d) return t ? 0 : d.slice(0);
                for (a = e, l = [], c = i.preFilter; a;) {
                    for (s in n && !(o = B.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = W.exec(a)) && (n = o.shift(), r.push({
                        value: n,
                        type: o[0].replace(z, " ")
                    }), a = a.slice(n.length)), i.filter) !(o = X[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(), r.push({
                        value: n,
                        type: s,
                        matches: o
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return t ? a.length : a ? ae.error(e) : S(e, l).slice(0)
            }, a = ae.compile = function (e, t) {
                var n, o = [], r = [], a = E[e + " "];
                if (!a) {
                    for (t || (t = s(e)), n = t.length; n--;) (a = ke(t[n]))[w] ? o.push(a) : r.push(a);
                    (a = E(e, function (e, t) {
                        var n = t.length > 0, o = e.length > 0, r = function (r, s, a, l, d) {
                            var u, h, g, v = 0, y = "0", b = r && [], w = [], x = c, C = r || o && i.find.TAG("*", d),
                                k = T += null == x ? 1 : Math.random() || .1, S = C.length;
                            for (d && (c = s == f || s || d); y !== S && null != (u = C[y]); y++) {
                                if (o && u) {
                                    for (h = 0, s || u.ownerDocument == f || (p(u), a = !m); g = e[h++];) if (g(u, s || f, a)) {
                                        l.push(u);
                                        break
                                    }
                                    d && (T = k)
                                }
                                n && ((u = !g && u) && v--, r && b.push(u))
                            }
                            if (v += y, n && y !== v) {
                                for (h = 0; g = t[h++];) g(b, w, s, a);
                                if (r) {
                                    if (v > 0) for (; y--;) b[y] || w[y] || (w[y] = D.call(l));
                                    w = Te(w)
                                }
                                j.apply(l, w), d && !r && w.length > 0 && v + t.length > 1 && ae.uniqueSort(l)
                            }
                            return d && (T = k, c = x), b
                        };
                        return n ? ce(r) : r
                    }(r, o))).selector = e
                }
                return a
            }, l = ae.select = function (e, t, n, o) {
                var r, l, c, d, u, p = "function" == typeof e && e, f = !o && s(e = p.selector || e);
                if (n = n || [], 1 === f.length) {
                    if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && m && i.relative[l[1].type]) {
                        if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                        p && (t = t.parentNode), e = e.slice(l.shift().value.length)
                    }
                    for (r = X.needsContext.test(e) ? 0 : l.length; r-- && (c = l[r], !i.relative[d = c.type]);) if ((u = i.find[d]) && (o = u(c.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                        if (l.splice(r, 1), !(e = o.length && be(l))) return j.apply(n, o), n;
                        break
                    }
                }
                return (p || a(e, f))(o, t, !m, n, !t || ee.test(e) && ve(t.parentNode) || t), n
            }, n.sortStable = w.split("").sort(_).join("") === w, n.detectDuplicates = !!u, p(), n.sortDetached = de((function (e) {
                return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
            })), de((function (e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            })) || ue("type|href|height|width", (function (e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            })), n.attributes && de((function (e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            })) || ue("value", (function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            })), de((function (e) {
                return null == e.getAttribute("disabled")
            })) || ue(L, (function (e, t, n) {
                var i;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            })), ae
        }(n);
        C.find = S, C.expr = S.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = S.uniqueSort, C.text = S.getText, C.isXMLDoc = S.isXML, C.contains = S.contains, C.escapeSelector = S.escape;
        var E = function (e, t, n) {
            for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                if (o && C(e).is(n)) break;
                i.push(e)
            }
            return i
        }, $ = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }, _ = C.expr.match.needsContext;

        function A(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }

        var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function D(e, t, n) {
            return v(t) ? C.grep(e, (function (e, i) {
                return !!t.call(e, i, e) !== n
            })) : t.nodeType ? C.grep(e, (function (e) {
                return e === t !== n
            })) : "string" != typeof t ? C.grep(e, (function (e) {
                return d.call(t, e) > -1 !== n
            })) : C.filter(t, e, n)
        }

        C.filter = function (e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? C.find.matchesSelector(i, e) ? [i] : [] : C.find.matches(e, C.grep(t, (function (e) {
                return 1 === e.nodeType
            })))
        }, C.fn.extend({
            find: function (e) {
                var t, n, i = this.length, o = this;
                if ("string" != typeof e) return this.pushStack(C(e).filter((function () {
                    for (t = 0; t < i; t++) if (C.contains(o[t], this)) return !0
                })));
                for (n = this.pushStack([]), t = 0; t < i; t++) C.find(e, o[t], n);
                return i > 1 ? C.uniqueSort(n) : n
            }, filter: function (e) {
                return this.pushStack(D(this, e || [], !1))
            }, not: function (e) {
                return this.pushStack(D(this, e || [], !0))
            }, is: function (e) {
                return !!D(this, "string" == typeof e && _.test(e) ? C(e) : e || [], !1).length
            }
        });
        var N, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (C.fn.init = function (e, t, n) {
            var i, o;
            if (!e) return this;
            if (n = n || N, "string" == typeof e) {
                if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : j.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), O.test(i[1]) && C.isPlainObject(t)) for (i in t) v(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                return (o = b.getElementById(i[2])) && (this[0] = o, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this)
        }).prototype = C.fn, N = C(b);
        var P = /^(?:parents|prev(?:Until|All))/, I = {children: !0, contents: !0, next: !0, prev: !0};

        function L(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType;) ;
            return e
        }

        C.fn.extend({
            has: function (e) {
                var t = C(e, this), n = t.length;
                return this.filter((function () {
                    for (var e = 0; e < n; e++) if (C.contains(this, t[e])) return !0
                }))
            }, closest: function (e, t) {
                var n, i = 0, o = this.length, r = [], s = "string" != typeof e && C(e);
                if (!_.test(e)) for (; i < o; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                    r.push(n);
                    break
                }
                return this.pushStack(r.length > 1 ? C.uniqueSort(r) : r)
            }, index: function (e) {
                return e ? "string" == typeof e ? d.call(C(e), this[0]) : d.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (e, t) {
                return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
            }, addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), C.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            }, parents: function (e) {
                return E(e, "parentNode")
            }, parentsUntil: function (e, t, n) {
                return E(e, "parentNode", n)
            }, next: function (e) {
                return L(e, "nextSibling")
            }, prev: function (e) {
                return L(e, "previousSibling")
            }, nextAll: function (e) {
                return E(e, "nextSibling")
            }, prevAll: function (e) {
                return E(e, "previousSibling")
            }, nextUntil: function (e, t, n) {
                return E(e, "nextSibling", n)
            }, prevUntil: function (e, t, n) {
                return E(e, "previousSibling", n)
            }, siblings: function (e) {
                return $((e.parentNode || {}).firstChild, e)
            }, children: function (e) {
                return $(e.firstChild)
            }, contents: function (e) {
                return null != e.contentDocument && s(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), C.merge([], e.childNodes))
            }
        }, (function (e, t) {
            C.fn[e] = function (n, i) {
                var o = C.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = C.filter(i, o)), this.length > 1 && (I[e] || C.uniqueSort(o), P.test(e) && o.reverse()), this.pushStack(o)
            }
        }));
        var M = /[^\x20\t\r\n\f]+/g;

        function H(e) {
            return e
        }

        function R(e) {
            throw e
        }

        function q(e, t, n, i) {
            var o;
            try {
                e && v(o = e.promise) ? o.call(e).done(t).fail(n) : e && v(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }

        C.Callbacks = function (e) {
            e = "string" == typeof e ? function (e) {
                var t = {};
                return C.each(e.match(M) || [], (function (e, n) {
                    t[n] = !0
                })), t
            }(e) : C.extend({}, e);
            var t, n, i, o, r = [], s = [], a = -1, l = function () {
                for (o = o || e.once, i = t = !0; s.length; a = -1) for (n = s.shift(); ++a < r.length;) !1 === r[a].apply(n[0], n[1]) && e.stopOnFalse && (a = r.length, n = !1);
                e.memory || (n = !1), t = !1, o && (r = n ? [] : "")
            }, c = {
                add: function () {
                    return r && (n && !t && (a = r.length - 1, s.push(n)), function t(n) {
                        C.each(n, (function (n, i) {
                            v(i) ? e.unique && c.has(i) || r.push(i) : i && i.length && "string" !== T(i) && t(i)
                        }))
                    }(arguments), n && !t && l()), this
                }, remove: function () {
                    return C.each(arguments, (function (e, t) {
                        for (var n; (n = C.inArray(t, r, n)) > -1;) r.splice(n, 1), n <= a && a--
                    })), this
                }, has: function (e) {
                    return e ? C.inArray(e, r) > -1 : r.length > 0
                }, empty: function () {
                    return r && (r = []), this
                }, disable: function () {
                    return o = s = [], r = n = "", this
                }, disabled: function () {
                    return !r
                }, lock: function () {
                    return o = s = [], n || t || (r = n = ""), this
                }, locked: function () {
                    return !!o
                }, fireWith: function (e, n) {
                    return o || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this
                }, fire: function () {
                    return c.fireWith(this, arguments), this
                }, fired: function () {
                    return !!i
                }
            };
            return c
        }, C.extend({
            Deferred: function (e) {
                var t = [["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2], ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]],
                    i = "pending", o = {
                        state: function () {
                            return i
                        }, always: function () {
                            return r.done(arguments).fail(arguments), this
                        }, catch: function (e) {
                            return o.then(null, e)
                        }, pipe: function () {
                            var e = arguments;
                            return C.Deferred((function (n) {
                                C.each(t, (function (t, i) {
                                    var o = v(e[i[4]]) && e[i[4]];
                                    r[i[1]]((function () {
                                        var e = o && o.apply(this, arguments);
                                        e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, o ? [e] : arguments)
                                    }))
                                })), e = null
                            })).promise()
                        }, then: function (e, i, o) {
                            var r = 0;

                            function s(e, t, i, o) {
                                return function () {
                                    var a = this, l = arguments, c = function () {
                                        var n, c;
                                        if (!(e < r)) {
                                            if ((n = i.apply(a, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                            c = n && ("object" == typeof n || "function" == typeof n) && n.then, v(c) ? o ? c.call(n, s(r, t, H, o), s(r, t, R, o)) : (r++, c.call(n, s(r, t, H, o), s(r, t, R, o), s(r, t, H, t.notifyWith))) : (i !== H && (a = void 0, l = [n]), (o || t.resolveWith)(a, l))
                                        }
                                    }, d = o ? c : function () {
                                        try {
                                            c()
                                        } catch (n) {
                                            C.Deferred.exceptionHook && C.Deferred.exceptionHook(n, d.stackTrace), e + 1 >= r && (i !== R && (a = void 0, l = [n]), t.rejectWith(a, l))
                                        }
                                    };
                                    e ? d() : (C.Deferred.getStackHook && (d.stackTrace = C.Deferred.getStackHook()), n.setTimeout(d))
                                }
                            }

                            return C.Deferred((function (n) {
                                t[0][3].add(s(0, n, v(o) ? o : H, n.notifyWith)), t[1][3].add(s(0, n, v(e) ? e : H)), t[2][3].add(s(0, n, v(i) ? i : R))
                            })).promise()
                        }, promise: function (e) {
                            return null != e ? C.extend(e, o) : o
                        }
                    }, r = {};
                return C.each(t, (function (e, n) {
                    var s = n[2], a = n[5];
                    o[n[1]] = s.add, a && s.add((function () {
                        i = a
                    }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), s.add(n[3].fire), r[n[0]] = function () {
                        return r[n[0] + "With"](this === r ? void 0 : this, arguments), this
                    }, r[n[0] + "With"] = s.fireWith
                })), o.promise(r), e && e.call(r, r), r
            }, when: function (e) {
                var t = arguments.length, n = t, i = Array(n), o = a.call(arguments), r = C.Deferred(),
                    s = function (e) {
                        return function (n) {
                            i[e] = this, o[e] = arguments.length > 1 ? a.call(arguments) : n, --t || r.resolveWith(i, o)
                        }
                    };
                if (t <= 1 && (q(e, r.done(s(n)).resolve, r.reject, !t), "pending" === r.state() || v(o[n] && o[n].then))) return r.then();
                for (; n--;) q(o[n], s(n), r.reject);
                return r.promise()
            }
        });
        var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        C.Deferred.exceptionHook = function (e, t) {
            n.console && n.console.warn && e && F.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, C.readyException = function (e) {
            n.setTimeout((function () {
                throw e
            }))
        };
        var z = C.Deferred();

        function B() {
            b.removeEventListener("DOMContentLoaded", B), n.removeEventListener("load", B), C.ready()
        }

        C.fn.ready = function (e) {
            return z.then(e).catch((function (e) {
                C.readyException(e)
            })), this
        }, C.extend({
            isReady: !1, readyWait: 1, ready: function (e) {
                (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0, !0 !== e && --C.readyWait > 0 || z.resolveWith(b, [C]))
            }
        }), C.ready.then = z.then, "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? n.setTimeout(C.ready) : (b.addEventListener("DOMContentLoaded", B), n.addEventListener("load", B));
        var W = function (e, t, n, i, o, r, s) {
            var a = 0, l = e.length, c = null == n;
            if ("object" === T(n)) for (a in o = !0, n) W(e, t, a, n[a], !0, r, s); else if (void 0 !== i && (o = !0, v(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
                return c.call(C(e), n)
            })), t)) for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
        }, V = /^-ms-/, U = /-([a-z])/g;

        function Y(e, t) {
            return t.toUpperCase()
        }

        function X(e) {
            return e.replace(V, "ms-").replace(U, Y)
        }

        var Q = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

        function G() {
            this.expando = C.expando + G.uid++
        }

        G.uid = 1, G.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || (t = {}, Q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            }, set: function (e, t, n) {
                var i, o = this.cache(e);
                if ("string" == typeof t) o[X(t)] = n; else for (i in t) o[X(i)] = t[i];
                return o
            }, get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
            }, access: function (e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            }, remove: function (e, t) {
                var n, i = e[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in i ? [t] : t.match(M) || []).length;
                        for (; n--;) delete i[t[n]]
                    }
                    (void 0 === t || C.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            }, hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !C.isEmptyObject(t)
            }
        };
        var K = new G, J = new G, Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ee = /[A-Z]/g;

        function te(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = function (e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
                    }(n)
                } catch (e) {
                }
                J.set(e, t, n)
            } else n = void 0;
            return n
        }

        C.extend({
            hasData: function (e) {
                return J.hasData(e) || K.hasData(e)
            }, data: function (e, t, n) {
                return J.access(e, t, n)
            }, removeData: function (e, t) {
                J.remove(e, t)
            }, _data: function (e, t, n) {
                return K.access(e, t, n)
            }, _removeData: function (e, t) {
                K.remove(e, t)
            }
        }), C.fn.extend({
            data: function (e, t) {
                var n, i, o, r = this[0], s = r && r.attributes;
                if (void 0 === e) {
                    if (this.length && (o = J.get(r), 1 === r.nodeType && !K.get(r, "hasDataAttrs"))) {
                        for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = X(i.slice(5)), te(r, i, o[i]));
                        K.set(r, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each((function () {
                    J.set(this, e)
                })) : W(this, (function (t) {
                    var n;
                    if (r && void 0 === t) return void 0 !== (n = J.get(r, e)) || void 0 !== (n = te(r, e)) ? n : void 0;
                    this.each((function () {
                        J.set(this, e, t)
                    }))
                }), null, t, arguments.length > 1, null, !0)
            }, removeData: function (e) {
                return this.each((function () {
                    J.remove(this, e)
                }))
            }
        }), C.extend({
            queue: function (e, t, n) {
                var i;
                if (e) return t = (t || "fx") + "queue", i = K.get(e, t), n && (!i || Array.isArray(n) ? i = K.access(e, t, C.makeArray(n)) : i.push(n)), i || []
            }, dequeue: function (e, t) {
                t = t || "fx";
                var n = C.queue(e, t), i = n.length, o = n.shift(), r = C._queueHooks(e, t);
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, (function () {
                    C.dequeue(e, t)
                }), r)), !i && r && r.empty.fire()
            }, _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return K.get(e, n) || K.access(e, n, {
                    empty: C.Callbacks("once memory").add((function () {
                        K.remove(e, [t + "queue", n])
                    }))
                })
            }
        }), C.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? C.queue(this[0], e) : void 0 === t ? this : this.each((function () {
                    var n = C.queue(this, e, t);
                    C._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && C.dequeue(this, e)
                }))
            }, dequeue: function (e) {
                return this.each((function () {
                    C.dequeue(this, e)
                }))
            }, clearQueue: function (e) {
                return this.queue(e || "fx", [])
            }, promise: function (e, t) {
                var n, i = 1, o = C.Deferred(), r = this, s = this.length, a = function () {
                    --i || o.resolveWith(r, [r])
                };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) (n = K.get(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                return a(), o.promise(t)
            }
        });
        var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ie = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"), oe = ["Top", "Right", "Bottom", "Left"],
            re = b.documentElement, se = function (e) {
                return C.contains(e.ownerDocument, e)
            }, ae = {composed: !0};
        re.getRootNode && (se = function (e) {
            return C.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
        });
        var le = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && se(e) && "none" === C.css(e, "display")
        };

        function ce(e, t, n, i) {
            var o, r, s = 20, a = i ? function () {
                    return i.cur()
                } : function () {
                    return C.css(e, t, "")
                }, l = a(), c = n && n[3] || (C.cssNumber[t] ? "" : "px"),
                d = e.nodeType && (C.cssNumber[t] || "px" !== c && +l) && ie.exec(C.css(e, t));
            if (d && d[3] !== c) {
                for (l /= 2, c = c || d[3], d = +l || 1; s--;) C.style(e, t, d + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), d /= r;
                d *= 2, C.style(e, t, d + c), n = n || []
            }
            return n && (d = +d || +l || 0, o = n[1] ? d + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = d, i.end = o)), o
        }

        var de = {};

        function ue(e) {
            var t, n = e.ownerDocument, i = e.nodeName, o = de[i];
            return o || (t = n.body.appendChild(n.createElement(i)), o = C.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), de[i] = o, o)
        }

        function pe(e, t) {
            for (var n, i, o = [], r = 0, s = e.length; r < s; r++) (i = e[r]).style && (n = i.style.display, t ? ("none" === n && (o[r] = K.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && le(i) && (o[r] = ue(i))) : "none" !== n && (o[r] = "none", K.set(i, "display", n)));
            for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
            return e
        }

        C.fn.extend({
            show: function () {
                return pe(this, !0)
            }, hide: function () {
                return pe(this)
            }, toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function () {
                    le(this) ? C(this).show() : C(this).hide()
                }))
            }
        });
        var fe, he, me = /^(?:checkbox|radio)$/i, ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ve = /^$|^module$|\/(?:java|ecma)script/i;
        fe = b.createDocumentFragment().appendChild(b.createElement("div")), (he = b.createElement("input")).setAttribute("type", "radio"), he.setAttribute("checked", "checked"), he.setAttribute("name", "t"), fe.appendChild(he), g.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked, fe.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue, fe.innerHTML = "<option></option>", g.option = !!fe.lastChild;
        var ye = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

        function be(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? C.merge([e], n) : n
        }

        function we(e, t) {
            for (var n = 0, i = e.length; n < i; n++) K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"))
        }

        ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead, ye.th = ye.td, g.option || (ye.optgroup = ye.option = [1, "<select multiple='multiple'>", "</select>"]);
        var xe = /<|&#?\w+;/;

        function Te(e, t, n, i, o) {
            for (var r, s, a, l, c, d, u = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++) if ((r = e[f]) || 0 === r) if ("object" === T(r)) C.merge(p, r.nodeType ? [r] : r); else if (xe.test(r)) {
                for (s = s || u.appendChild(t.createElement("div")), a = (ge.exec(r) || ["", ""])[1].toLowerCase(), l = ye[a] || ye._default, s.innerHTML = l[1] + C.htmlPrefilter(r) + l[2], d = l[0]; d--;) s = s.lastChild;
                C.merge(p, s.childNodes), (s = u.firstChild).textContent = ""
            } else p.push(t.createTextNode(r));
            for (u.textContent = "", f = 0; r = p[f++];) if (i && C.inArray(r, i) > -1) o && o.push(r); else if (c = se(r), s = be(u.appendChild(r), "script"), c && we(s), n) for (d = 0; r = s[d++];) ve.test(r.type || "") && n.push(r);
            return u
        }

        var Ce = /^key/, ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Se = /^([^.]*)(?:\.(.+)|)/;

        function Ee() {
            return !0
        }

        function $e() {
            return !1
        }

        function _e(e, t) {
            return e === function () {
                try {
                    return b.activeElement
                } catch (e) {
                }
            }() == ("focus" === t)
        }

        function Ae(e, t, n, i, o, r) {
            var s, a;
            if ("object" == typeof t) {
                for (a in "string" != typeof n && (i = i || n, n = void 0), t) Ae(e, a, n, i, t[a], r);
                return e
            }
            if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = $e; else if (!o) return e;
            return 1 === r && (s = o, (o = function (e) {
                return C().off(e), s.apply(this, arguments)
            }).guid = s.guid || (s.guid = C.guid++)), e.each((function () {
                C.event.add(this, t, o, i, n)
            }))
        }

        function Oe(e, t, n) {
            n ? (K.set(e, t, !1), C.event.add(e, t, {
                namespace: !1, handler: function (e) {
                    var i, o, r = K.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                        if (r.length) (C.event.special[t] || {}).delegateType && e.stopPropagation(); else if (r = a.call(arguments), K.set(this, t, r), i = n(this, t), this[t](), r !== (o = K.get(this, t)) || i ? K.set(this, t, !1) : o = {}, r !== o) return e.stopImmediatePropagation(), e.preventDefault(), o.value
                    } else r.length && (K.set(this, t, {value: C.event.trigger(C.extend(r[0], C.Event.prototype), r.slice(1), this)}), e.stopImmediatePropagation())
                }
            })) : void 0 === K.get(e, t) && C.event.add(e, t, Ee)
        }

        C.event = {
            global: {}, add: function (e, t, n, i, o) {
                var r, s, a, l, c, d, u, p, f, h, m, g = K.get(e);
                if (Q(e)) for (n.handler && (n = (r = n).handler, o = r.selector), o && C.find.matchesSelector(re, o), n.guid || (n.guid = C.guid++), (l = g.events) || (l = g.events = Object.create(null)), (s = g.handle) || (s = g.handle = function (t) {
                    return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0
                }), c = (t = (t || "").match(M) || [""]).length; c--;) f = m = (a = Se.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), f && (u = C.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = C.event.special[f] || {}, d = C.extend({
                    type: f,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && C.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, r), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, h, s) || e.addEventListener && e.addEventListener(f, s)), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), C.event.global[f] = !0)
            }, remove: function (e, t, n, i, o) {
                var r, s, a, l, c, d, u, p, f, h, m, g = K.hasData(e) && K.get(e);
                if (g && (l = g.events)) {
                    for (c = (t = (t || "").match(M) || [""]).length; c--;) if (f = m = (a = Se.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), f) {
                        for (u = C.event.special[f] || {}, p = l[f = (i ? u.delegateType : u.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) d = p[r], !o && m !== d.origType || n && n.guid !== d.guid || a && !a.test(d.namespace) || i && i !== d.selector && ("**" !== i || !d.selector) || (p.splice(r, 1), d.selector && p.delegateCount--, u.remove && u.remove.call(e, d));
                        s && !p.length && (u.teardown && !1 !== u.teardown.call(e, h, g.handle) || C.removeEvent(e, f, g.handle), delete l[f])
                    } else for (f in l) C.event.remove(e, f + t[c], n, i, !0);
                    C.isEmptyObject(l) && K.remove(e, "handle events")
                }
            }, dispatch: function (e) {
                var t, n, i, o, r, s, a = new Array(arguments.length), l = C.event.fix(e),
                    c = (K.get(this, "events") || Object.create(null))[l.type] || [], d = C.event.special[l.type] || {};
                for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
                if (l.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, l)) {
                    for (s = C.event.handlers.call(this, l, c), t = 0; (o = s[t++]) && !l.isPropagationStopped();) for (l.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace) || (l.handleObj = r, l.data = r.data, void 0 !== (i = ((C.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                    return d.postDispatch && d.postDispatch.call(this, l), l.result
                }
            }, handlers: function (e, t) {
                var n, i, o, r, s, a = [], l = t.delegateCount, c = e.target;
                if (l && c.nodeType && !("click" === e.type && e.button >= 1)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                    for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? C(o, this).index(c) > -1 : C.find(o, this, null, [c]).length), s[o] && r.push(i);
                    r.length && a.push({elem: c, handlers: r})
                }
                return c = this, l < t.length && a.push({elem: c, handlers: t.slice(l)}), a
            }, addProp: function (e, t) {
                Object.defineProperty(C.Event.prototype, e, {
                    enumerable: !0, configurable: !0, get: v(t) ? function () {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function () {
                        if (this.originalEvent) return this.originalEvent[e]
                    }, set: function (t) {
                        Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
                    }
                })
            }, fix: function (e) {
                return e[C.expando] ? e : new C.Event(e)
            }, special: {
                load: {noBubble: !0}, click: {
                    setup: function (e) {
                        var t = this || e;
                        return me.test(t.type) && t.click && A(t, "input") && Oe(t, "click", Ee), !1
                    }, trigger: function (e) {
                        var t = this || e;
                        return me.test(t.type) && t.click && A(t, "input") && Oe(t, "click"), !0
                    }, _default: function (e) {
                        var t = e.target;
                        return me.test(t.type) && t.click && A(t, "input") && K.get(t, "click") || A(t, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, C.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, C.Event = function (e, t) {
            if (!(this instanceof C.Event)) return new C.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : $e, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
        }, C.Event.prototype = {
            constructor: C.Event,
            isDefaultPrevented: $e,
            isPropagationStopped: $e,
            isImmediatePropagationStopped: $e,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, C.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (e) {
                var t = e.button;
                return null == e.which && Ce.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, C.event.addProp), C.each({focus: "focusin", blur: "focusout"}, (function (e, t) {
            C.event.special[e] = {
                setup: function () {
                    return Oe(this, e, _e), !1
                }, trigger: function () {
                    return Oe(this, e), !0
                }, delegateType: t
            }
        })), C.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, (function (e, t) {
            C.event.special[e] = {
                delegateType: t, bindType: t, handle: function (e) {
                    var n, i = this, o = e.relatedTarget, r = e.handleObj;
                    return o && (o === i || C.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
                }
            }
        })), C.fn.extend({
            on: function (e, t, n, i) {
                return Ae(this, e, t, n, i)
            }, one: function (e, t, n, i) {
                return Ae(this, e, t, n, i, 1)
            }, off: function (e, t, n) {
                var i, o;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, C(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (o in e) this.off(o, t, e[o]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = $e), this.each((function () {
                    C.event.remove(this, e, n, t)
                }))
            }
        });
        var De = /<script|<style|<link/i, Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
            je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Pe(e, t) {
            return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
        }

        function Ie(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function Le(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }

        function Me(e, t) {
            var n, i, o, r, s, a;
            if (1 === t.nodeType) {
                if (K.hasData(e) && (a = K.get(e).events)) for (o in K.remove(t, "handle events"), a) for (n = 0, i = a[o].length; n < i; n++) C.event.add(t, o, a[o][n]);
                J.hasData(e) && (r = J.access(e), s = C.extend({}, r), J.set(t, s))
            }
        }

        function He(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && me.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }

        function Re(e, t, n, i) {
            t = l(t);
            var o, r, s, a, c, d, u = 0, p = e.length, f = p - 1, h = t[0], m = v(h);
            if (m || p > 1 && "string" == typeof h && !g.checkClone && Ne.test(h)) return e.each((function (o) {
                var r = e.eq(o);
                m && (t[0] = h.call(this, o, r.html())), Re(r, t, n, i)
            }));
            if (p && (r = (o = Te(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
                for (a = (s = C.map(be(o, "script"), Ie)).length; u < p; u++) c = o, u !== f && (c = C.clone(c, !0, !0), a && C.merge(s, be(c, "script"))), n.call(e[u], c, u);
                if (a) for (d = s[s.length - 1].ownerDocument, C.map(s, Le), u = 0; u < a; u++) c = s[u], ve.test(c.type || "") && !K.access(c, "globalEval") && C.contains(d, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? C._evalUrl && !c.noModule && C._evalUrl(c.src, {nonce: c.nonce || c.getAttribute("nonce")}, d) : x(c.textContent.replace(je, ""), c, d))
            }
            return e
        }

        function qe(e, t, n) {
            for (var i, o = t ? C.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || C.cleanData(be(i)), i.parentNode && (n && se(i) && we(be(i, "script")), i.parentNode.removeChild(i));
            return e
        }

        C.extend({
            htmlPrefilter: function (e) {
                return e
            }, clone: function (e, t, n) {
                var i, o, r, s, a = e.cloneNode(!0), l = se(e);
                if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e))) for (s = be(a), i = 0, o = (r = be(e)).length; i < o; i++) He(r[i], s[i]);
                if (t) if (n) for (r = r || be(e), s = s || be(a), i = 0, o = r.length; i < o; i++) Me(r[i], s[i]); else Me(e, a);
                return (s = be(a, "script")).length > 0 && we(s, !l && be(e, "script")), a
            }, cleanData: function (e) {
                for (var t, n, i, o = C.event.special, r = 0; void 0 !== (n = e[r]); r++) if (Q(n)) {
                    if (t = n[K.expando]) {
                        if (t.events) for (i in t.events) o[i] ? C.event.remove(n, i) : C.removeEvent(n, i, t.handle);
                        n[K.expando] = void 0
                    }
                    n[J.expando] && (n[J.expando] = void 0)
                }
            }
        }), C.fn.extend({
            detach: function (e) {
                return qe(this, e, !0)
            }, remove: function (e) {
                return qe(this, e)
            }, text: function (e) {
                return W(this, (function (e) {
                    return void 0 === e ? C.text(this) : this.empty().each((function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    }))
                }), null, e, arguments.length)
            }, append: function () {
                return Re(this, arguments, (function (e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Pe(this, e).appendChild(e)
                }))
            }, prepend: function () {
                return Re(this, arguments, (function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Pe(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                }))
            }, before: function () {
                return Re(this, arguments, (function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                }))
            }, after: function () {
                return Re(this, arguments, (function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                }))
            }, empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(be(e, !1)), e.textContent = "");
                return this
            }, clone: function (e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map((function () {
                    return C.clone(this, e, t)
                }))
            }, html: function (e) {
                return W(this, (function (e) {
                    var t = this[0] || {}, n = 0, i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !De.test(e) && !ye[(ge.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = C.htmlPrefilter(e);
                        try {
                            for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(be(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {
                        }
                    }
                    t && this.empty().append(e)
                }), null, e, arguments.length)
            }, replaceWith: function () {
                var e = [];
                return Re(this, arguments, (function (t) {
                    var n = this.parentNode;
                    C.inArray(this, e) < 0 && (C.cleanData(be(this)), n && n.replaceChild(t, this))
                }), e)
            }
        }), C.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, (function (e, t) {
            C.fn[e] = function (e) {
                for (var n, i = [], o = C(e), r = o.length - 1, s = 0; s <= r; s++) n = s === r ? this : this.clone(!0), C(o[s])[t](n), c.apply(i, n.get());
                return this.pushStack(i)
            }
        }));
        var Fe = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"), ze = function (e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = n), t.getComputedStyle(e)
        }, Be = function (e, t, n) {
            var i, o, r = {};
            for (o in t) r[o] = e.style[o], e.style[o] = t[o];
            for (o in i = n.call(e), t) e.style[o] = r[o];
            return i
        }, We = new RegExp(oe.join("|"), "i");

        function Ve(e, t, n) {
            var i, o, r, s, a = e.style;
            return (n = n || ze(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || se(e) || (s = C.style(e, t)), !g.pixelBoxStyles() && Fe.test(s) && We.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
        }

        function Ue(e, t) {
            return {
                get: function () {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }

        !function () {
            function e() {
                if (d) {
                    c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", d.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(c).appendChild(d);
                    var e = n.getComputedStyle(d);
                    i = "1%" !== e.top, l = 12 === t(e.marginLeft), d.style.right = "60%", s = 36 === t(e.right), o = 36 === t(e.width), d.style.position = "absolute", r = 12 === t(d.offsetWidth / 3), re.removeChild(c), d = null
                }
            }

            function t(e) {
                return Math.round(parseFloat(e))
            }

            var i, o, r, s, a, l, c = b.createElement("div"), d = b.createElement("div");
            d.style && (d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === d.style.backgroundClip, C.extend(g, {
                boxSizingReliable: function () {
                    return e(), o
                }, pixelBoxStyles: function () {
                    return e(), s
                }, pixelPosition: function () {
                    return e(), i
                }, reliableMarginLeft: function () {
                    return e(), l
                }, scrollboxSize: function () {
                    return e(), r
                }, reliableTrDimensions: function () {
                    var e, t, i, o;
                    return null == a && (e = b.createElement("table"), t = b.createElement("tr"), i = b.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", i.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(i), o = n.getComputedStyle(t), a = parseInt(o.height) > 3, re.removeChild(e)), a
                }
            }))
        }();
        var Ye = ["Webkit", "Moz", "ms"], Xe = b.createElement("div").style, Qe = {};

        function Ge(e) {
            var t = C.cssProps[e] || Qe[e];
            return t || (e in Xe ? e : Qe[e] = function (e) {
                for (var t = e[0].toUpperCase() + e.slice(1), n = Ye.length; n--;) if ((e = Ye[n] + t) in Xe) return e
            }(e) || e)
        }

        var Ke = /^(none|table(?!-c[ea]).+)/, Je = /^--/,
            Ze = {position: "absolute", visibility: "hidden", display: "block"},
            et = {letterSpacing: "0", fontWeight: "400"};

        function tt(e, t, n) {
            var i = ie.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
        }

        function nt(e, t, n, i, o, r) {
            var s = "width" === t ? 1 : 0, a = 0, l = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; s < 4; s += 2) "margin" === n && (l += C.css(e, n + oe[s], !0, o)), i ? ("content" === n && (l -= C.css(e, "padding" + oe[s], !0, o)), "margin" !== n && (l -= C.css(e, "border" + oe[s] + "Width", !0, o))) : (l += C.css(e, "padding" + oe[s], !0, o), "padding" !== n ? l += C.css(e, "border" + oe[s] + "Width", !0, o) : a += C.css(e, "border" + oe[s] + "Width", !0, o));
            return !i && r >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5)) || 0), l
        }

        function it(e, t, n) {
            var i = ze(e), o = (!g.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, i), r = o,
                s = Ve(e, t, i), a = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Fe.test(s)) {
                if (!n) return s;
                s = "auto"
            }
            return (!g.boxSizingReliable() && o || !g.reliableTrDimensions() && A(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === C.css(e, "display", !1, i)) && e.getClientRects().length && (o = "border-box" === C.css(e, "boxSizing", !1, i), (r = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + nt(e, t, n || (o ? "border" : "content"), r, i, s) + "px"
        }

        function ot(e, t, n, i, o) {
            return new ot.prototype.init(e, t, n, i, o)
        }

        C.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = Ve(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function (e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, r, s, a = X(t), l = Je.test(t), c = e.style;
                    if (l || (t = Ge(a)), s = C.cssHooks[t] || C.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
                    "string" === (r = typeof n) && (o = ie.exec(n)) && o[1] && (n = ce(e, t, o), r = "number"), null != n && n == n && ("number" !== r || l || (n += o && o[3] || (C.cssNumber[a] ? "" : "px")), g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
                }
            },
            css: function (e, t, n, i) {
                var o, r, s, a = X(t);
                return Je.test(t) || (t = Ge(a)), (s = C.cssHooks[t] || C.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = Ve(e, t, i)), "normal" === o && t in et && (o = et[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
            }
        }), C.each(["height", "width"], (function (e, t) {
            C.cssHooks[t] = {
                get: function (e, n, i) {
                    if (n) return !Ke.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? it(e, t, i) : Be(e, Ze, (function () {
                        return it(e, t, i)
                    }))
                }, set: function (e, n, i) {
                    var o, r = ze(e), s = !g.scrollboxSize() && "absolute" === r.position,
                        a = (s || i) && "border-box" === C.css(e, "boxSizing", !1, r), l = i ? nt(e, t, i, a, r) : 0;
                    return a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - nt(e, t, "border", !1, r) - .5)), l && (o = ie.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = C.css(e, t)), tt(0, n, l)
                }
            }
        })), C.cssHooks.marginLeft = Ue(g.reliableMarginLeft, (function (e, t) {
            if (t) return (parseFloat(Ve(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, {marginLeft: 0}, (function () {
                return e.getBoundingClientRect().left
            }))) + "px"
        })), C.each({margin: "", padding: "", border: "Width"}, (function (e, t) {
            C.cssHooks[e + t] = {
                expand: function (n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + oe[i] + t] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, "margin" !== e && (C.cssHooks[e + t].set = tt)
        })), C.fn.extend({
            css: function (e, t) {
                return W(this, (function (e, t, n) {
                    var i, o, r = {}, s = 0;
                    if (Array.isArray(t)) {
                        for (i = ze(e), o = t.length; s < o; s++) r[t[s]] = C.css(e, t[s], !1, i);
                        return r
                    }
                    return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
                }), e, t, arguments.length > 1)
            }
        }), C.Tween = ot, ot.prototype = {
            constructor: ot, init: function (e, t, n, i, o, r) {
                this.elem = e, this.prop = n, this.easing = o || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (C.cssNumber[n] ? "" : "px")
            }, cur: function () {
                var e = ot.propHooks[this.prop];
                return e && e.get ? e.get(this) : ot.propHooks._default.get(this)
            }, run: function (e) {
                var t, n = ot.propHooks[this.prop];
                return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ot.propHooks._default.set(this), this
            }
        }, ot.prototype.init.prototype = ot.prototype, ot.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                }, set: function (e) {
                    C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, ot.propHooks.scrollTop = ot.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, C.easing = {
            linear: function (e) {
                return e
            }, swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }, _default: "swing"
        }, C.fx = ot.prototype.init, C.fx.step = {};
        var rt, st, at = /^(?:toggle|show|hide)$/, lt = /queueHooks$/;

        function ct() {
            st && (!1 === b.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ct) : n.setTimeout(ct, C.fx.interval), C.fx.tick())
        }

        function dt() {
            return n.setTimeout((function () {
                rt = void 0
            })), rt = Date.now()
        }

        function ut(e, t) {
            var n, i = 0, o = {height: e};
            for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = oe[i])] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e), o
        }

        function pt(e, t, n) {
            for (var i, o = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), r = 0, s = o.length; r < s; r++) if (i = o[r].call(n, t, e)) return i
        }

        function ft(e, t, n) {
            var i, o, r = 0, s = ft.prefilters.length, a = C.Deferred().always((function () {
                delete l.elem
            })), l = function () {
                if (o) return !1;
                for (var t = rt || dt(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++) c.tweens[r].run(i);
                return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
            }, c = a.promise({
                elem: e,
                props: C.extend({}, t),
                opts: C.extend(!0, {specialEasing: {}, easing: C.easing._default}, n),
                originalProperties: t,
                originalOptions: n,
                startTime: rt || dt(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = C.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0, i = t ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n < i; n++) c.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                }
            }), d = c.props;
            for (!function (e, t) {
                var n, i, o, r, s;
                for (n in e) if (o = t[i = X(n)], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = C.cssHooks[i]) && "expand" in s) for (n in r = s.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o); else t[i] = o
            }(d, c.opts.specialEasing); r < s; r++) if (i = ft.prefilters[r].call(c, e, d, c.opts)) return v(i.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
            return C.map(d, pt, c), v(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), C.fx.timer(C.extend(l, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })), c
        }

        C.Animation = C.extend(ft, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return ce(n.elem, e, ie.exec(t), n), n
                }]
            }, tweener: function (e, t) {
                v(e) ? (t = e, e = ["*"]) : e = e.match(M);
                for (var n, i = 0, o = e.length; i < o; i++) n = e[i], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
            }, prefilters: [function (e, t, n) {
                var i, o, r, s, a, l, c, d, u = "width" in t || "height" in t, p = this, f = {}, h = e.style,
                    m = e.nodeType && le(e), g = K.get(e, "fxshow");
                for (i in n.queue || (null == (s = C._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
                    s.unqueued || a()
                }), s.unqueued++, p.always((function () {
                    p.always((function () {
                        s.unqueued--, C.queue(e, "fx").length || s.empty.fire()
                    }))
                }))), t) if (o = t[i], at.test(o)) {
                    if (delete t[i], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
                        if ("show" !== o || !g || void 0 === g[i]) continue;
                        m = !0
                    }
                    f[i] = g && g[i] || C.style(e, i)
                }
                if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(f)) for (i in u && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = g && g.display) && (c = K.get(e, "display")), "none" === (d = C.css(e, "display")) && (c ? d = c : (pe([e], !0), c = e.style.display || c, d = C.css(e, "display"), pe([e]))), ("inline" === d || "inline-block" === d && null != c) && "none" === C.css(e, "float") && (l || (p.done((function () {
                    h.display = c
                })), null == c && (d = h.display, c = "none" === d ? "" : d)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always((function () {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                }))), l = !1, f) l || (g ? "hidden" in g && (m = g.hidden) : g = K.access(e, "fxshow", {display: c}), r && (g.hidden = !m), m && pe([e], !0), p.done((function () {
                    for (i in m || pe([e]), K.remove(e, "fxshow"), f) C.style(e, i, f[i])
                }))), l = pt(m ? g[i] : 0, i, p), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0))
            }], prefilter: function (e, t) {
                t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
            }
        }), C.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? C.extend({}, e) : {
                complete: n || !n && t || v(e) && e,
                duration: e,
                easing: n && t || t && !v(t) && t
            };
            return C.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in C.fx.speeds ? i.duration = C.fx.speeds[i.duration] : i.duration = C.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                v(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue)
            }, i
        }, C.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(le).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
            }, animate: function (e, t, n, i) {
                var o = C.isEmptyObject(e), r = C.speed(t, n, i), s = function () {
                    var t = ft(this, C.extend({}, e), r);
                    (o || K.get(this, "finish")) && t.stop(!0)
                };
                return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
            }, stop: function (e, t, n) {
                var i = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function () {
                    var t = !0, o = null != e && e + "queueHooks", r = C.timers, s = K.get(this);
                    if (o) s[o] && s[o].stop && i(s[o]); else for (o in s) s[o] && s[o].stop && lt.test(o) && i(s[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                    !t && n || C.dequeue(this, e)
                }))
            }, finish: function (e) {
                return !1 !== e && (e = e || "fx"), this.each((function () {
                    var t, n = K.get(this), i = n[e + "queue"], o = n[e + "queueHooks"], r = C.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, C.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                }))
            }
        }), C.each(["toggle", "show", "hide"], (function (e, t) {
            var n = C.fn[t];
            C.fn[t] = function (e, i, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, i, o)
            }
        })), C.each({
            slideDown: ut("show"),
            slideUp: ut("hide"),
            slideToggle: ut("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, (function (e, t) {
            C.fn[e] = function (e, n, i) {
                return this.animate(t, e, n, i)
            }
        })), C.timers = [], C.fx.tick = function () {
            var e, t = 0, n = C.timers;
            for (rt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || C.fx.stop(), rt = void 0
        }, C.fx.timer = function (e) {
            C.timers.push(e), C.fx.start()
        }, C.fx.interval = 13, C.fx.start = function () {
            st || (st = !0, ct())
        }, C.fx.stop = function () {
            st = null
        }, C.fx.speeds = {slow: 600, fast: 200, _default: 400}, C.fn.delay = function (e, t) {
            return e = C.fx && C.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function (t, i) {
                var o = n.setTimeout(t, e);
                i.stop = function () {
                    n.clearTimeout(o)
                }
            }))
        }, function () {
            var e = b.createElement("input"), t = b.createElement("select").appendChild(b.createElement("option"));
            e.type = "checkbox", g.checkOn = "" !== e.value, g.optSelected = t.selected, (e = b.createElement("input")).value = "t", e.type = "radio", g.radioValue = "t" === e.value
        }();
        var ht, mt = C.expr.attrHandle;
        C.fn.extend({
            attr: function (e, t) {
                return W(this, C.attr, e, t, arguments.length > 1)
            }, removeAttr: function (e) {
                return this.each((function () {
                    C.removeAttr(this, e)
                }))
            }
        }), C.extend({
            attr: function (e, t, n) {
                var i, o, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === r && C.isXMLDoc(e) || (o = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = C.find.attr(e, t)) ? void 0 : i)
            }, attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!g.radioValue && "radio" === t && A(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }, removeAttr: function (e, t) {
                var n, i = 0, o = t && t.match(M);
                if (o && 1 === e.nodeType) for (; n = o[i++];) e.removeAttribute(n)
            }
        }), ht = {
            set: function (e, t, n) {
                return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, C.each(C.expr.match.bool.source.match(/\w+/g), (function (e, t) {
            var n = mt[t] || C.find.attr;
            mt[t] = function (e, t, i) {
                var o, r, s = t.toLowerCase();
                return i || (r = mt[s], mt[s] = o, o = null != n(e, t, i) ? s : null, mt[s] = r), o
            }
        }));
        var gt = /^(?:input|select|textarea|button)$/i, vt = /^(?:a|area)$/i;

        function yt(e) {
            return (e.match(M) || []).join(" ")
        }

        function bt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function wt(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(M) || []
        }

        C.fn.extend({
            prop: function (e, t) {
                return W(this, C.prop, e, t, arguments.length > 1)
            }, removeProp: function (e) {
                return this.each((function () {
                    delete this[C.propFix[e] || e]
                }))
            }
        }), C.extend({
            prop: function (e, t, n) {
                var i, o, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return 1 === r && C.isXMLDoc(e) || (t = C.propFix[t] || t, o = C.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
            }, propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = C.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : gt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }, propFix: {for: "htmlFor", class: "className"}
        }), g.optSelected || (C.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            }, set: function (e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () {
            C.propFix[this.toLowerCase()] = this
        })), C.fn.extend({
            addClass: function (e) {
                var t, n, i, o, r, s, a, l = 0;
                if (v(e)) return this.each((function (t) {
                    C(this).addClass(e.call(this, t, bt(this)))
                }));
                if ((t = wt(e)).length) for (; n = this[l++];) if (o = bt(n), i = 1 === n.nodeType && " " + yt(o) + " ") {
                    for (s = 0; r = t[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                    o !== (a = yt(i)) && n.setAttribute("class", a)
                }
                return this
            }, removeClass: function (e) {
                var t, n, i, o, r, s, a, l = 0;
                if (v(e)) return this.each((function (t) {
                    C(this).removeClass(e.call(this, t, bt(this)))
                }));
                if (!arguments.length) return this.attr("class", "");
                if ((t = wt(e)).length) for (; n = this[l++];) if (o = bt(n), i = 1 === n.nodeType && " " + yt(o) + " ") {
                    for (s = 0; r = t[s++];) for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                    o !== (a = yt(i)) && n.setAttribute("class", a)
                }
                return this
            }, toggleClass: function (e, t) {
                var n = typeof e, i = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each((function (n) {
                    C(this).toggleClass(e.call(this, n, bt(this), t), t)
                })) : this.each((function () {
                    var t, o, r, s;
                    if (i) for (o = 0, r = C(this), s = wt(e); t = s[o++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t); else void 0 !== e && "boolean" !== n || ((t = bt(this)) && K.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""))
                }))
            }, hasClass: function (e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];) if (1 === n.nodeType && (" " + yt(bt(n)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var xt = /\r/g;
        C.fn.extend({
            val: function (e) {
                var t, n, i, o = this[0];
                return arguments.length ? (i = v(e), this.each((function (n) {
                    var o;
                    1 === this.nodeType && (null == (o = i ? e.call(this, n, C(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = C.map(o, (function (e) {
                        return null == e ? "" : e + ""
                    }))), (t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                }))) : o ? (t = C.valHooks[o.type] || C.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(xt, "") : null == n ? "" : n : void 0
            }
        }), C.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = C.find.attr(e, "value");
                        return null != t ? t : yt(C.text(e))
                    }
                }, select: {
                    get: function (e) {
                        var t, n, i, o = e.options, r = e.selectedIndex, s = "select-one" === e.type, a = s ? null : [],
                            l = s ? r + 1 : o.length;
                        for (i = r < 0 ? l : s ? r : 0; i < l; i++) if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = C(n).val(), s) return t;
                            a.push(t)
                        }
                        return a
                    }, set: function (e, t) {
                        for (var n, i, o = e.options, r = C.makeArray(t), s = o.length; s--;) ((i = o[s]).selected = C.inArray(C.valHooks.option.get(i), r) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), r
                    }
                }
            }
        }), C.each(["radio", "checkbox"], (function () {
            C.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t)) return e.checked = C.inArray(C(e).val(), t) > -1
                }
            }, g.checkOn || (C.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        })), g.focusin = "onfocusin" in n;
        var Tt = /^(?:focusinfocus|focusoutblur)$/, Ct = function (e) {
            e.stopPropagation()
        };
        C.extend(C.event, {
            trigger: function (e, t, i, o) {
                var r, s, a, l, c, d, u, p, h = [i || b], m = f.call(e, "type") ? e.type : e,
                    g = f.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = p = a = i = i || b, 3 !== i.nodeType && 8 !== i.nodeType && !Tt.test(m + C.event.triggered) && (m.indexOf(".") > -1 && (g = m.split("."), m = g.shift(), g.sort()), c = m.indexOf(":") < 0 && "on" + m, (e = e[C.expando] ? e : new C.Event(m, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = g.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : C.makeArray(t, [e]), u = C.event.special[m] || {}, o || !u.trigger || !1 !== u.trigger.apply(i, t))) {
                    if (!o && !u.noBubble && !y(i)) {
                        for (l = u.delegateType || m, Tt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) h.push(s), a = s;
                        a === (i.ownerDocument || b) && h.push(a.defaultView || a.parentWindow || n)
                    }
                    for (r = 0; (s = h[r++]) && !e.isPropagationStopped();) p = s, e.type = r > 1 ? l : u.bindType || m, (d = (K.get(s, "events") || Object.create(null))[e.type] && K.get(s, "handle")) && d.apply(s, t), (d = c && s[c]) && d.apply && Q(s) && (e.result = d.apply(s, t), !1 === e.result && e.preventDefault());
                    return e.type = m, o || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(h.pop(), t) || !Q(i) || c && v(i[m]) && !y(i) && ((a = i[c]) && (i[c] = null), C.event.triggered = m, e.isPropagationStopped() && p.addEventListener(m, Ct), i[m](), e.isPropagationStopped() && p.removeEventListener(m, Ct), C.event.triggered = void 0, a && (i[c] = a)), e.result
                }
            }, simulate: function (e, t, n) {
                var i = C.extend(new C.Event, n, {type: e, isSimulated: !0});
                C.event.trigger(i, null, t)
            }
        }), C.fn.extend({
            trigger: function (e, t) {
                return this.each((function () {
                    C.event.trigger(e, t, this)
                }))
            }, triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return C.event.trigger(e, t, n, !0)
            }
        }), g.focusin || C.each({focus: "focusin", blur: "focusout"}, (function (e, t) {
            var n = function (e) {
                C.event.simulate(t, e.target, C.event.fix(e))
            };
            C.event.special[t] = {
                setup: function () {
                    var i = this.ownerDocument || this.document || this, o = K.access(i, t);
                    o || i.addEventListener(e, n, !0), K.access(i, t, (o || 0) + 1)
                }, teardown: function () {
                    var i = this.ownerDocument || this.document || this, o = K.access(i, t) - 1;
                    o ? K.access(i, t, o) : (i.removeEventListener(e, n, !0), K.remove(i, t))
                }
            }
        }));
        var kt = n.location, St = {guid: Date.now()}, Et = /\?/;
        C.parseXML = function (e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t
        };
        var $t = /\[\]$/, _t = /\r?\n/g, At = /^(?:submit|button|image|reset|file)$/i,
            Ot = /^(?:input|select|textarea|keygen)/i;

        function Dt(e, t, n, i) {
            var o;
            if (Array.isArray(t)) C.each(t, (function (t, o) {
                n || $t.test(e) ? i(e, o) : Dt(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
            })); else if (n || "object" !== T(t)) i(e, t); else for (o in t) Dt(e + "[" + o + "]", t[o], n, i)
        }

        C.param = function (e, t) {
            var n, i = [], o = function (e, t) {
                var n = v(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
            if (null == e) return "";
            if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, (function () {
                o(this.name, this.value)
            })); else for (n in e) Dt(n, e[n], t, o);
            return i.join("&")
        }, C.fn.extend({
            serialize: function () {
                return C.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map((function () {
                    var e = C.prop(this, "elements");
                    return e ? C.makeArray(e) : this
                })).filter((function () {
                    var e = this.type;
                    return this.name && !C(this).is(":disabled") && Ot.test(this.nodeName) && !At.test(e) && (this.checked || !me.test(e))
                })).map((function (e, t) {
                    var n = C(this).val();
                    return null == n ? null : Array.isArray(n) ? C.map(n, (function (e) {
                        return {name: t.name, value: e.replace(_t, "\r\n")}
                    })) : {name: t.name, value: n.replace(_t, "\r\n")}
                })).get()
            }
        });
        var Nt = /%20/g, jt = /#.*$/, Pt = /([?&])_=[^&]*/, It = /^(.*?):[ \t]*([^\r\n]*)$/gm, Lt = /^(?:GET|HEAD)$/,
            Mt = /^\/\//, Ht = {}, Rt = {}, qt = "*/".concat("*"), Ft = b.createElement("a");

        function zt(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, o = 0, r = t.toLowerCase().match(M) || [];
                if (v(n)) for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function Bt(e, t, n, i) {
            var o = {}, r = e === Rt;

            function s(a) {
                var l;
                return o[a] = !0, C.each(e[a] || [], (function (e, a) {
                    var c = a(t, n, i);
                    return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1)
                })), l
            }

            return s(t.dataTypes[0]) || !o["*"] && s("*")
        }

        function Wt(e, t) {
            var n, i, o = C.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
            return i && C.extend(!0, e, i), e
        }

        Ft.href = kt.href, C.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: kt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(kt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": qt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": C.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (e, t) {
                return t ? Wt(Wt(e, C.ajaxSettings), t) : Wt(C.ajaxSettings, e)
            },
            ajaxPrefilter: zt(Ht),
            ajaxTransport: zt(Rt),
            ajax: function (e, t) {
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var i, o, r, s, a, l, c, d, u, p, f = C.ajaxSetup({}, t), h = f.context || f,
                    m = f.context && (h.nodeType || h.jquery) ? C(h) : C.event, g = C.Deferred(),
                    v = C.Callbacks("once memory"), y = f.statusCode || {}, w = {}, x = {}, T = "canceled", k = {
                        readyState: 0, getResponseHeader: function (e) {
                            var t;
                            if (c) {
                                if (!s) for (s = {}; t = It.exec(r);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = s[e.toLowerCase() + " "]
                            }
                            return null == t ? null : t.join(", ")
                        }, getAllResponseHeaders: function () {
                            return c ? r : null
                        }, setRequestHeader: function (e, t) {
                            return null == c && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, w[e] = t), this
                        }, overrideMimeType: function (e) {
                            return null == c && (f.mimeType = e), this
                        }, statusCode: function (e) {
                            var t;
                            if (e) if (c) k.always(e[k.status]); else for (t in e) y[t] = [y[t], e[t]];
                            return this
                        }, abort: function (e) {
                            var t = e || T;
                            return i && i.abort(t), S(0, t), this
                        }
                    };
                if (g.promise(k), f.url = ((e || f.url || kt.href) + "").replace(Mt, kt.protocol + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(M) || [""], null == f.crossDomain) {
                    l = b.createElement("a");
                    try {
                        l.href = f.url, l.href = l.href, f.crossDomain = Ft.protocol + "//" + Ft.host != l.protocol + "//" + l.host
                    } catch (e) {
                        f.crossDomain = !0
                    }
                }
                if (f.data && f.processData && "string" != typeof f.data && (f.data = C.param(f.data, f.traditional)), Bt(Ht, f, t, k), c) return k;
                for (u in (d = C.event && f.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Lt.test(f.type), o = f.url.replace(jt, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Nt, "+")) : (p = f.url.slice(o.length), f.data && (f.processData || "string" == typeof f.data) && (o += (Et.test(o) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (o = o.replace(Pt, "$1"), p = (Et.test(o) ? "&" : "?") + "_=" + St.guid++ + p), f.url = o + p), f.ifModified && (C.lastModified[o] && k.setRequestHeader("If-Modified-Since", C.lastModified[o]), C.etag[o] && k.setRequestHeader("If-None-Match", C.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && k.setRequestHeader("Content-Type", f.contentType), k.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + qt + "; q=0.01" : "") : f.accepts["*"]), f.headers) k.setRequestHeader(u, f.headers[u]);
                if (f.beforeSend && (!1 === f.beforeSend.call(h, k, f) || c)) return k.abort();
                if (T = "abort", v.add(f.complete), k.done(f.success), k.fail(f.error), i = Bt(Rt, f, t, k)) {
                    if (k.readyState = 1, d && m.trigger("ajaxSend", [k, f]), c) return k;
                    f.async && f.timeout > 0 && (a = n.setTimeout((function () {
                        k.abort("timeout")
                    }), f.timeout));
                    try {
                        c = !1, i.send(w, S)
                    } catch (e) {
                        if (c) throw e;
                        S(-1, e)
                    }
                } else S(-1, "No Transport");

                function S(e, t, s, l) {
                    var u, p, b, w, x, T = t;
                    c || (c = !0, a && n.clearTimeout(a), i = void 0, r = l || "", k.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, s && (w = function (e, t, n) {
                        for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (i) for (o in a) if (a[o] && a[o].test(i)) {
                            l.unshift(o);
                            break
                        }
                        if (l[0] in n) r = l[0]; else {
                            for (o in n) {
                                if (!l[0] || e.converters[o + " " + l[0]]) {
                                    r = o;
                                    break
                                }
                                s || (s = o)
                            }
                            r = r || s
                        }
                        if (r) return r !== l[0] && l.unshift(r), n[r]
                    }(f, k, s)), !u && C.inArray("script", f.dataTypes) > -1 && (f.converters["text script"] = function () {
                    }), w = function (e, t, n, i) {
                        var o, r, s, a, l, c = {}, d = e.dataTypes.slice();
                        if (d[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                        for (r = d.shift(); r;) if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = d.shift()) if ("*" === r) r = l; else if ("*" !== l && l !== r) {
                            if (!(s = c[l + " " + r] || c["* " + r])) for (o in c) if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], d.unshift(a[1]));
                                break
                            }
                            if (!0 !== s) if (s && e.throws) t = s(t); else try {
                                t = s(t)
                            } catch (e) {
                                return {state: "parsererror", error: s ? e : "No conversion from " + l + " to " + r}
                            }
                        }
                        return {state: "success", data: t}
                    }(f, w, k, u), u ? (f.ifModified && ((x = k.getResponseHeader("Last-Modified")) && (C.lastModified[o] = x), (x = k.getResponseHeader("etag")) && (C.etag[o] = x)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = w.state, p = w.data, u = !(b = w.error))) : (b = T, !e && T || (T = "error", e < 0 && (e = 0))), k.status = e, k.statusText = (t || T) + "", u ? g.resolveWith(h, [p, T, k]) : g.rejectWith(h, [k, T, b]), k.statusCode(y), y = void 0, d && m.trigger(u ? "ajaxSuccess" : "ajaxError", [k, f, u ? p : b]), v.fireWith(h, [k, T]), d && (m.trigger("ajaxComplete", [k, f]), --C.active || C.event.trigger("ajaxStop")))
                }

                return k
            },
            getJSON: function (e, t, n) {
                return C.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return C.get(e, void 0, t, "script")
            }
        }), C.each(["get", "post"], (function (e, t) {
            C[t] = function (e, n, i, o) {
                return v(n) && (o = o || i, i = n, n = void 0), C.ajax(C.extend({
                    url: e,
                    type: t,
                    dataType: o,
                    data: n,
                    success: i
                }, C.isPlainObject(e) && e))
            }
        })), C.ajaxPrefilter((function (e) {
            var t;
            for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
        })), C._evalUrl = function (e, t, n) {
            return C.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function () {
                    }
                },
                dataFilter: function (e) {
                    C.globalEval(e, t, n)
                }
            })
        }, C.fn.extend({
            wrapAll: function (e) {
                var t;
                return this[0] && (v(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function () {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                })).append(this)), this
            }, wrapInner: function (e) {
                return v(e) ? this.each((function (t) {
                    C(this).wrapInner(e.call(this, t))
                })) : this.each((function () {
                    var t = C(this), n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                }))
            }, wrap: function (e) {
                var t = v(e);
                return this.each((function (n) {
                    C(this).wrapAll(t ? e.call(this, n) : e)
                }))
            }, unwrap: function (e) {
                return this.parent(e).not("body").each((function () {
                    C(this).replaceWith(this.childNodes)
                })), this
            }
        }), C.expr.pseudos.hidden = function (e) {
            return !C.expr.pseudos.visible(e)
        }, C.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, C.ajaxSettings.xhr = function () {
            try {
                return new n.XMLHttpRequest
            } catch (e) {
            }
        };
        var Vt = {0: 200, 1223: 204}, Ut = C.ajaxSettings.xhr();
        g.cors = !!Ut && "withCredentials" in Ut, g.ajax = Ut = !!Ut, C.ajaxTransport((function (e) {
            var t, i;
            if (g.cors || Ut && !e.crossDomain) return {
                send: function (o, r) {
                    var s, a = e.xhr();
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (s in e.xhrFields) a[s] = e.xhrFields[s];
                    for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) a.setRequestHeader(s, o[s]);
                    t = function (e) {
                        return function () {
                            t && (t = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Vt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {binary: a.response} : {text: a.responseText}, a.getAllResponseHeaders()))
                        }
                    }, a.onload = t(), i = a.onerror = a.ontimeout = t("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                        4 === a.readyState && n.setTimeout((function () {
                            t && i()
                        }))
                    }, t = t("abort");
                    try {
                        a.send(e.hasContent && e.data || null)
                    } catch (e) {
                        if (t) throw e
                    }
                }, abort: function () {
                    t && t()
                }
            }
        })), C.ajaxPrefilter((function (e) {
            e.crossDomain && (e.contents.script = !1)
        })), C.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /\b(?:java|ecma)script\b/},
            converters: {
                "text script": function (e) {
                    return C.globalEval(e), e
                }
            }
        }), C.ajaxPrefilter("script", (function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        })), C.ajaxTransport("script", (function (e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs) return {
                send: function (i, o) {
                    t = C("<script>").attr(e.scriptAttrs || {}).prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), b.head.appendChild(t[0])
                }, abort: function () {
                    n && n()
                }
            }
        }));
        var Yt, Xt = [], Qt = /(=)\?(?=&|$)|\?\?/;
        C.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var e = Xt.pop() || C.expando + "_" + St.guid++;
                return this[e] = !0, e
            }
        }), C.ajaxPrefilter("json jsonp", (function (e, t, i) {
            var o, r, s,
                a = !1 !== e.jsonp && (Qt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Qt, "$1" + o) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
                return s || C.error(o + " was not called"), s[0]
            }, e.dataTypes[0] = "json", r = n[o], n[o] = function () {
                s = arguments
            }, i.always((function () {
                void 0 === r ? C(n).removeProp(o) : n[o] = r, e[o] && (e.jsonpCallback = t.jsonpCallback, Xt.push(o)), s && v(r) && r(s[0]), s = r = void 0
            })), "script"
        })), g.createHTMLDocument = ((Yt = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Yt.childNodes.length), C.parseHTML = function (e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (g.createHTMLDocument ? ((i = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, t.head.appendChild(i)) : t = b), r = !n && [], (o = O.exec(e)) ? [t.createElement(o[1])] : (o = Te([e], t, r), r && r.length && C(r).remove(), C.merge([], o.childNodes)));
            var i, o, r
        }, C.fn.load = function (e, t, n) {
            var i, o, r, s = this, a = e.indexOf(" ");
            return a > -1 && (i = yt(e.slice(a)), e = e.slice(0, a)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && C.ajax({
                url: e,
                type: o || "GET",
                dataType: "html",
                data: t
            }).done((function (e) {
                r = arguments, s.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e)
            })).always(n && function (e, t) {
                s.each((function () {
                    n.apply(this, r || [e.responseText, t, e])
                }))
            }), this
        }, C.expr.pseudos.animated = function (e) {
            return C.grep(C.timers, (function (t) {
                return e === t.elem
            })).length
        }, C.offset = {
            setOffset: function (e, t, n) {
                var i, o, r, s, a, l, c = C.css(e, "position"), d = C(e), u = {};
                "static" === c && (e.style.position = "relative"), a = d.offset(), r = C.css(e, "top"), l = C.css(e, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (s = (i = d.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), v(t) && (t = t.call(e, n, C.extend({}, a))), null != t.top && (u.top = t.top - a.top + s), null != t.left && (u.left = t.left - a.left + o), "using" in t ? t.using.call(e, u) : ("number" == typeof u.top && (u.top += "px"), "number" == typeof u.left && (u.left += "px"), d.css(u))
            }
        }, C.fn.extend({
            offset: function (e) {
                if (arguments.length) return void 0 === e ? this : this.each((function (t) {
                    C.offset.setOffset(this, e, t)
                }));
                var t, n, i = this[0];
                return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {top: 0, left: 0} : void 0
            }, position: function () {
                if (this[0]) {
                    var e, t, n, i = this[0], o = {top: 0, left: 0};
                    if ("fixed" === C.css(i, "position")) t = i.getBoundingClientRect(); else {
                        for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
                        e && e !== i && 1 === e.nodeType && ((o = C(e).offset()).top += C.css(e, "borderTopWidth", !0), o.left += C.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - o.top - C.css(i, "marginTop", !0),
                        left: t.left - o.left - C.css(i, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map((function () {
                    for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
                    return e || re
                }))
            }
        }), C.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, (function (e, t) {
            var n = "pageYOffset" === t;
            C.fn[e] = function (i) {
                return W(this, (function (e, i, o) {
                    var r;
                    if (y(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o) return r ? r[t] : e[i];
                    r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o
                }), e, i, arguments.length)
            }
        })), C.each(["top", "left"], (function (e, t) {
            C.cssHooks[t] = Ue(g.pixelPosition, (function (e, n) {
                if (n) return n = Ve(e, t), Fe.test(n) ? C(e).position()[t] + "px" : n
            }))
        })), C.each({Height: "height", Width: "width"}, (function (e, t) {
            C.each({padding: "inner" + e, content: t, "": "outer" + e}, (function (n, i) {
                C.fn[i] = function (o, r) {
                    var s = arguments.length && (n || "boolean" != typeof o),
                        a = n || (!0 === o || !0 === r ? "margin" : "border");
                    return W(this, (function (t, n, o) {
                        var r;
                        return y(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? C.css(t, n, a) : C.style(t, n, o, a)
                    }), t, s ? o : void 0, s)
                }
            }))
        })), C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (e, t) {
            C.fn[t] = function (e) {
                return this.on(t, e)
            }
        })), C.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n)
            }, unbind: function (e, t) {
                return this.off(e, null, t)
            }, delegate: function (e, t, n, i) {
                return this.on(t, e, n, i)
            }, undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }, hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function (e, t) {
            C.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }));
        var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        C.proxy = function (e, t) {
            var n, i, o;
            if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return i = a.call(arguments, 2), (o = function () {
                return e.apply(t || this, i.concat(a.call(arguments)))
            }).guid = e.guid = e.guid || C.guid++, o
        }, C.holdReady = function (e) {
            e ? C.readyWait++ : C.ready(!0)
        }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = A, C.isFunction = v, C.isWindow = y, C.camelCase = X, C.type = T, C.now = Date.now, C.isNumeric = function (e) {
            var t = C.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, C.trim = function (e) {
            return null == e ? "" : (e + "").replace(Gt, "")
        }, void 0 === (i = function () {
            return C
        }.apply(t, [])) || (e.exports = i);
        var Kt = n.jQuery, Jt = n.$;
        return C.noConflict = function (e) {
            return n.$ === C && (n.$ = Jt), e && n.jQuery === C && (n.jQuery = Kt), C
        }, void 0 === o && (n.jQuery = n.$ = C), C
    }))
}, function (e, t, n) {
    "use strict";
    (function (e) {
        n.d(t, "a", (function () {
            return i
        })), n.d(t, "b", (function () {
            return o
        })), n.d(t, "d", (function () {
            return r
        })), n.d(t, "c", (function () {
            return s
        })), n.d(t, "e", (function () {
            return a
        }));
        var i = e("body"), o = e("#body-overlay"), r = e("#header-mobile"), s = e("#footer"), a = "$"
    }).call(this, n(1))
}, function (e, t, n) {
    e.exports = function (e) {
        "use strict";

        function t(t) {
            var i = this, o = !1;
            return e(this).one(n.TRANSITION_END, (function () {
                o = !0
            })), setTimeout((function () {
                o || n.triggerTransitionEnd(i)
            }), t), this
        }

        e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
        var n = {
            TRANSITION_END: "bsTransitionEnd", getUID: function (e) {
                do {
                    e += ~~(1e6 * Math.random())
                } while (document.getElementById(e));
                return e
            }, getSelectorFromElement: function (e) {
                var t = e.getAttribute("data-target");
                if (!t || "#" === t) {
                    var n = e.getAttribute("href");
                    t = n && "#" !== n ? n.trim() : ""
                }
                try {
                    return document.querySelector(t) ? t : null
                } catch (e) {
                    return null
                }
            }, getTransitionDurationFromElement: function (t) {
                if (!t) return 0;
                var n = e(t).css("transition-duration"), i = e(t).css("transition-delay"), o = parseFloat(n),
                    r = parseFloat(i);
                return o || r ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0
            }, reflow: function (e) {
                return e.offsetHeight
            }, triggerTransitionEnd: function (t) {
                e(t).trigger("transitionend")
            }, supportsTransitionEnd: function () {
                return Boolean("transitionend")
            }, isElement: function (e) {
                return (e[0] || e).nodeType
            }, typeCheckConfig: function (e, t, i) {
                for (var o in i) if (Object.prototype.hasOwnProperty.call(i, o)) {
                    var r = i[o], s = t[o],
                        a = s && n.isElement(s) ? "element" : null == (l = s) ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
                    if (!new RegExp(r).test(a)) throw new Error(e.toUpperCase() + ': Option "' + o + '" provided type "' + a + '" but expected type "' + r + '".')
                }
                var l
            }, findShadowRoot: function (e) {
                if (!document.documentElement.attachShadow) return null;
                if ("function" == typeof e.getRootNode) {
                    var t = e.getRootNode();
                    return t instanceof ShadowRoot ? t : null
                }
                return e instanceof ShadowRoot ? e : e.parentNode ? n.findShadowRoot(e.parentNode) : null
            }, jQueryDetection: function () {
                if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                var t = e.fn.jquery.split(" ")[0].split(".");
                if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
            }
        };
        return n.jQueryDetection(), e.fn.emulateTransitionEnd = t, e.event.special[n.TRANSITION_END] = {
            bindType: "transitionend",
            delegateType: "transitionend",
            handle: function (t) {
                if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        }, n
    }(n(1))
}, function (e, t, n) {
    "use strict";
    (function (e) {
        var n = {
            $bar: e("#cookies-bar"), $accept: e('[data-accept="cookies"]'), init: function () {
                var e = this;
                e.$bar.length && ("accepted" !== n.getCookie("cookies") && e.show(e.$bar), e.$accept.on("click", (function () {
                    e.hide(e.$bar), e.setCookie("cookies", "accepted", 365)
                })))
            }, show: function () {
                this.$bar.fadeIn(200)
            }, hide: function () {
                this.$bar.fadeOut(200)
            }, getCookie: function (e) {
                for (var t = e + "=", n = decodeURIComponent(document.cookie).split(";"), i = 0; i < n.length; i++) {
                    for (var o = n[i]; " " == o.charAt(0);) o = o.substring(1);
                    if (0 == o.indexOf(t)) return o.substring(t.length, o.length)
                }
                return ""
            }, setCookie: function (e, t, n) {
                var i = new Date;
                i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3);
                var o = "expires=".concat(i.toUTCString());
                document.cookie = "".concat(e, "=").concat(t, ";").concat(o, ";path=/")
            }
        };
        t.a = n
    }).call(this, n(1))
}, function (e, t, n) {
    "use strict";
    (function (t) {
        var i = n(48), o = n(14), r = n(49), s = "localStorage" in t && t.localStorage ? t.localStorage : i;

        function a(e, t) {
            return 1 === arguments.length ? l(e) : c(e, t)
        }

        function l(e) {
            const t = s.getItem(e);
            return o(t)
        }

        function c(e, t) {
            try {
                return s.setItem(e, JSON.stringify(t)), !0
            } catch (e) {
                return !1
            }
        }

        a.set = c, a.get = l, a.remove = function (e) {
            return s.removeItem(e)
        }, a.clear = function () {
            return s.clear()
        }, a.backend = function (e) {
            return e && (s = e), s
        }, a.on = r.on, a.off = r.off, e.exports = a
    }).call(this, n(6))
}, function (e, t) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function (e, t, n) {
    "use strict";
    (function (e) {
        var n = {
            init: function (t) {
                var n = e('<svg class="icon" x="0px" y="0px" viewBox="0 0 32 32"><path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="square" stroke-miterlimit="10" d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11"/></svg>');
                e(".custom-control-indicator", t || "body").html(n)
            }
        };
        t.a = n
    }).call(this, n(1))
}, function (e, t, n) {
    "use strict";
    (function (e) {
        n(46);
        var i = {
            $el: e(".animated"), init: function () {
                this.$el.length && this.$el.appear((function () {
                    var t = e(this), n = e(this).data("animation-delay");
                    setTimeout((function () {
                        t.addClass("animate__animated animate__".concat(t.data("animation"))).addClass("visible")
                    }), n)
                }))
            }
        };
        t.a = i
    }).call(this, n(1))
}, function (e, t, n) {
    "use strict";
    (function (e) {
        var n = {
            $el: e(".back-to-top"), init: function () {
                this.$el.length && this.$el.on("click", (function () {
                    return e("body, html").animate({scrollTop: 0}, 1e3), !1
                }))
            }, handleScroll: function (t) {
                var n = this;
                t > e(window).height() && !n.$el.hasClass("visible") ? n.$el.addClass("visible") : t <= e(window).height() && n.$el.hasClass("visible") && n.$el.removeClass("visible")
            }
        };
        t.a = n
    }).call(this, n(1))
}, function (e, t, n) {
    "use strict";
    (function (e) {
        n(13);
        var i = n(2), o = n(7), r = n(5), s = n.n(r);

        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function l(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var c = {
            activeItem: null,
            activeItemAdditionsTotal: 0,
            activeCategory: null,
            activeAdditions: [],
            categories: null,
            menu: null,
            items: s.a.get("cartItems") || [],
            deliveryPrice: 3.99,
            orderTotal: 0,
            init: function () {
                var e = this;
                e.getData(), e.Panel.init(), e.Modal.init()
            },
            getData: function () {
                var t = this;
                e.getJSON("./data/categories.json", (function (e) {
                    t.categories = e
                })), e.getJSON("./data/menu.json", (function (e) {
                    t.menu = e
                })), e.getJSON("./data/delivery.json", (function (e) {
                    t.deliveryPrice = e.price
                }))
            },
            addActiveItemToCart: function () {
                var e = this, t = function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? a(Object(n), !0).forEach((function (t) {
                            l(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({_ref: (new Date).getTime()}, e.activeItem);
                e.items.push(t), e.Panel.update(), s()("cartItems", e.items)
            },
            updateActiveItemInCart: function () {
                var e = this, t = e.items.findIndex((function (t) {
                    return t._ref === e.activeItem._ref
                }));
                e.items[t] = e.activeItem, e.Panel.update(), s()("cartItems", e.items)
            },
            removeItem: function (e) {
                var t = this, n = t.items.findIndex((function (t) {
                    return t._ref === e.ref
                }));
                t.items.splice(n, 1), t.Panel.update(), s()("cartItems", t.items)
            },
            setActiveAdditions: function (e, t) {
                var n = this;
                if (e.is(":checked")) n.activeItemAdditionsTotal += t.price, n.activeAdditions.push(t); else {
                    var i = n.activeAdditions.findIndex((function (e) {
                        return e.id === t.id
                    }));
                    n.activeItemAdditionsTotal -= t.price, n.activeAdditions.splice(i, 1)
                }
                n.activeItem.additions = n.activeAdditions, n.activeItem.totalPrice = n.activeItem.sizes.find((function (e) {
                    return !0 === e.active
                })).price + n.activeItemAdditionsTotal, n.Modal.updatePrice()
            },
            setActiveSize: function (e, t) {
                var n = this, i = n.activeItem.sizes.find((function (e) {
                    return !0 === e.active
                }));
                i && (i.active = !1);
                var o = n.activeItem.sizes.find((function (e) {
                    return e.id === t.id
                }));
                o.active = !0, n.activeItem.totalPrice = n.activeItem.totalPrice - i.price + o.price, console.log(n.activeItem.sizes, i), n.Modal.updatePrice()
            },
            setActiveItem: function (e) {
                var t = this;
                "EDIT" === t.Modal.mode ? t.activeItem = t.items.find((function (t) {
                    return t._ref === e
                })) : (t.activeItem = t.menu.find((function (t) {
                    return t.id === e
                })), t.activeItem.totalPrice = t.activeItem.price), t.activeCategory = t.categories.find((function (e) {
                    return e.id === t.activeItem.categoryId
                }))
            },
            Panel: {
                DOM: {
                    $panel: e("#panel-cart"),
                    $panelToggler: e('[data-toggle="panel-cart"]'),
                    $headerNotification: e(".module-cart .notification"),
                    $headerValue: e(".module-cart .value"),
                    $details: e(".cart-details"),
                    $table: e(".cart-details .cart-table"),
                    $productsTotal: e(".cart-details .cart-products-total"),
                    $delivery: e(".cart-details .cart-delivery"),
                    $orderTotal: e(".cart-details .cart-total"),
                    $empty: e(".cart-details .cart-empty"),
                    $summary: e(".cart-details .cart-summary")
                }, init: function () {
                    var e = this;
                    e.DOM.$panelToggler.on("click", (function () {
                        return e.DOM.$panel.hasClass("show") ? e.hidePanel() : e.showPanel(), !1
                    })), e.DOM.$details.length && this.update()
                }, update: function () {
                    var t = this, n = 0, o = c.items.length;
                    t.DOM.$table.html(""), c.items.forEach((function (o) {
                        n += o.totalPrice;
                        var r = o.sizes.find((function (e) {
                                return e.active
                            })),
                            s = e('\n          <tr>\n              <td class="title">\n                  <span class="name"><a href="#product-modal" data-toggle="modal">'.concat(o.name, '</a></span>\n                  <span class="caption text-muted">').concat(r.name, " (").concat(r.value, ')</span>\n              </td>\n              <td class="price">').concat(i.e).concat(o.totalPrice.toFixed(2), '</td>\n              <td class="actions">\n                  <button data-toggle="modal" class="action-icon" data-action="open-cart-modal" data-id="').concat(o._ref, '" data-edit="true"><i class="ti ti-pencil"></i></button>\n                  <button class="action-icon" data-action="remove-from-cart"><i class="ti ti-close"></i></button>\n              </td>\n          </tr>\n        '));
                        s.find('[data-action="remove-from-cart"]').on("click", (function () {
                            c.removeItem(o), s.remove()
                        })), s.appendTo(t.DOM.$table)
                    })), t.DOM.$productsTotal.text(n.toFixed(2)), t.DOM.$delivery.text(c.deliveryPrice.toFixed(2)), t.DOM.$orderTotal.text((c.deliveryPrice + n).toFixed(2)), 0 === o ? (t.DOM.$headerNotification.hide(), t.DOM.$empty.show(), t.DOM.$summary.hide(), t.DOM.$table.hide()) : (t.DOM.$headerNotification.show(), t.DOM.$headerNotification.text(o), t.DOM.$empty.hide(), t.DOM.$summary.show(), t.DOM.$table.show()), t.DOM.$headerValue.text(n.toFixed(2))
                }, showPanel: function () {
                    this.DOM.$panel.addClass("show"), i.b.fadeIn(400)
                }, hidePanel: function () {
                    this.DOM.$panel.removeClass("show"), i.b.fadeOut(400)
                }, handleClick: function (e) {
                    this.DOM.$panel.length && "body-overlay" == e.target.id && this.hidePanel()
                }
            },
            Modal: {
                DOM: {
                    $modal: e("#product-modal"),
                    $modalToggler: e('[data-action="open-cart-modal"]'),
                    $addToCart: e('[data-action="add-to-cart"]'),
                    $updateCart: e('[data-action="update-cart"]'),
                    $details: e("#product-modal .panel-details"),
                    $name: e("#product-modal .product-modal-name"),
                    $ingredients: e("#product-modal .product-modal-ingredients"),
                    $price: e("#product-modal .product-modal-price"),
                    $sizes: e("#product-modal .panel-details-size"),
                    $sizesList: e("#product-modal .product-modal-sizes"),
                    $additions: e("#product-modal .panel-details-additions"),
                    $additionsList: e("#product-modal .product-modal-additions")
                }, mode: "ADD", init: function () {
                    var t = this;
                    i.a.on("click", '[data-action="open-cart-modal"]', (function () {
                        e(this).data("edit") ? t.mode = "EDIT" : t.mode = "ADD", t.showProductModal(e(this).data("id"))
                    })), t.DOM.$addToCart.on("click", (function () {
                        c.addActiveItemToCart(), t.hideProductModal()
                    })), t.DOM.$updateCart.on("click", (function () {
                        c.updateActiveItemInCart(), t.hideProductModal()
                    })), t.DOM.$modal.on("show.bs.modal", (function () {
                        "EDIT" === t.mode ? (t.DOM.$addToCart.hide(), t.DOM.$updateCart.show()) : (t.DOM.$addToCart.show(), t.DOM.$updateCart.hide()), t.build()
                    })), t.DOM.$modal.on("hidden.bs.modal", (function () {
                        t.reset()
                    })), t.reset()
                }, build: function () {
                    var t = this;
                    try {
                        t.DOM.$name.text(c.activeItem.name), t.DOM.$ingredients.text(c.activeItem.ingredients.join(", ")), t.DOM.$price.text(c.activeItem.totalPrice.toFixed(2)), c.activeItem.sizes && c.activeItem.sizes.length > 1 ? (t.DOM.$sizesList.html(""), c.activeItem.sizes.forEach((function (n) {
                            var o = e('\n            <div class="form-group">\n                <label class="custom-control custom-radio">\n                    <input name="radio_size" value="'.concat(n.id, '" type="radio" class="custom-control-input" ').concat(n.active ? "checked" : "", '>\n                    <span class="custom-control-indicator"></span>\n                    <span class="custom-control-description">').concat(n.name, " - ").concat(n.value, " <span>(").concat(i.e).concat(n.price.toFixed(2), ")</span></span>\n                </label>\n            </div>\n          "));
                            o.find("input").on("change", (function () {
                                c.setActiveSize(e(this), n)
                            })), o.appendTo(t.DOM.$sizesList)
                        })), t.DOM.$sizes.show(), t.DOM.$sizes.find(".collapse").addClass("show")) : t.DOM.$sizes.hide(), c.activeCategory.additions && c.activeCategory.additions.length > 1 ? (t.DOM.$additionsList.html(""), c.activeCategory.additions.forEach((function (n) {
                            var o = e('\n            <div class="col-sm-6">\n                <div class="form-group">\n                    <label class="custom-control custom-checkbox">\n                        <input type="checkbox" value="'.concat(n.id, '" class="custom-control-input" ').concat(c.activeItem.additions && -1 !== c.activeItem.additions.findIndex((function (e) {
                                return e.id === n.id
                            })) ? "checked" : "", '>\n                        <span class="custom-control-indicator"></span>\n                        <span class="custom-control-description">').concat(n.name, " <span>(").concat(i.e).concat(n.price.toFixed(2), ")</span></span>\n                    </label>\n                </div>\n            </div>\n          "));
                            o.find("input").on("change", (function () {
                                c.setActiveAdditions(e(this), n)
                            })), o.appendTo(t.DOM.$additionsList)
                        })), t.DOM.$additions.show(), (!c.activeItem.sizes || c.activeItem.sizes.length <= 1) && t.DOM.$additions.find(".collapse").addClass("show")) : t.DOM.$additions.hide(), o.a.init(t.$modal)
                    } catch (e) {
                        console.error("[CART_MODAL] Please check a JSON data source and data-id attribute on the button.")
                    }
                }, showProductModal: function (e) {
                    c.setActiveItem(e), this.DOM.$modal.modal("show")
                }, hideProductModal: function () {
                    this.DOM.$modal.modal("hide")
                }, updatePrice: function () {
                    this.DOM.$price.text(c.activeItem.totalPrice.toFixed(2))
                }, reset: function () {
                    this.DOM.$details.each((function () {
                        var t = e(this), n = t.find(".panel-details-title"),
                            i = t.find(".panel-details-content").children();
                        t.find(".collapse").removeClass("show"), n.find("input").prop("checked", !1), t.hasClass("panel-details-form") || i.html("")
                    }))
                }
            }
        };
        t.a = c
    }).call(this, n(1))
}, function (e, t, n) {
    "use strict";
    (function (e) {
        var i = n(2), o = {
            DOM: {
                $nav: e("#nav-main"),
                $scrollers: e("[data-local-scroll]"),
                $mobilePanel: e("#panel-mobile"),
                $mobileNav: null,
                $mobileToggler: e('[data-toggle="panel-mobile"]')
            }, init: function () {
                var t = this;
                t.DOM.$scrollers.find("a").on("click", (function () {
                    var n = e(this), i = new URL(window.location.href), o = new URL(n.attr("href")), r = o.hash;
                    return console.log(i, o, r), i.pathname !== o.pathname && "null" !== o.origin || !r || "" === r || (t.scrollTo(r), n.blur()), !1
                })), t.DOM.$nav.find("li.has-dropdown > a").on("click", (function () {
                    var t = e(this).parent("li");
                    return t.hasClass("dropdown-show") ? (t.removeClass("dropdown-show"), i.a.removeClass("dropdown-visible")) : (t.siblings(".dropdown-show").removeClass("dropdown-show"), t.addClass("dropdown-show"), i.a.addClass("dropdown-visible")), !1
                })), t.DOM.$mobileNav = t.DOM.$nav.clone().attr("id", "nav-main-mobile").removeClass("nav-main").addClass("nav-main-mobile"), t.DOM.$mobileNav.appendTo("#panel-mobile .module-navigation"), t.DOM.$mobileNav.find("li.has-dropdown > a").on("click", (function () {
                    return e(this).next(".dropdown-container, ul").slideToggle(300), !1
                })), t.DOM.$mobileToggler.on("click", (function () {
                    return t.DOM.$mobilePanel.hasClass("show") ? (t.DOM.$mobilePanel.removeClass("show"), i.b.fadeOut(400)) : (t.DOM.$mobilePanel.addClass("show"), i.b.fadeIn(400)), !1
                }))
            }, scrollTo: function (t) {
                var n = e(t);
                n.length ? e("html, body").animate({scrollTop: n.offset().top}, 600) : console.error("[NAVIGATION] Wrong href - the ID does not exist in the DOM")
            }, handleClick: function (e) {
                "body" != e.target.localName && "html" != e.target.localName && "body-wrapper" != e.target.id || (this.DOM.$nav.find("li.dropdown-show").removeClass("dropdown-show"), i.a.removeClass("dropdown-visible"))
            }, hideDropdown: function () {
                e(".dropdown-show").removeClass("dropdown-show"), i.a.removeClass("dropdown-visible")
            }
        };
        t.a = o
    }).call(this, n(1))
}, function (e, t, n) {
    "use strict";
    (function (e) {
        var i = n(2), o = {
            $el: e(".stick-to-content"), init: function () {
                var t = this;
                t.$el.length && (t.offset = t.$el.offset().top, t.handleScroll(e(window).scrollTop()))
            }, handleScroll: function (t) {
                var n = this;
                if (n.$el.length) {
                    var o = 0;
                    e(window).width() <= 991 && (o = i.d.outerHeight()), t > n.offset - o ? n.$el.css({
                        position: "fixed",
                        top: o + "px",
                        width: n.$el.innerWidth() + "px"
                    }) : n.$el.removeAttr("style"), t > i.c.offset().top - n.$el.outerHeight() && n.$el.css({
                        position: "absolute",
                        top: i.c.offset().top - n.$el.outerHeight() - n.offset + "px"
                    })
                }
            }
        };
        t.a = o
    }).call(this, n(1))
}, function (e, t, n) {
    e.exports = function (e, t) {
        "use strict";

        function n(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function r(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach((function (t) {
                    i(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e, t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
        var s = "modal", a = ".bs.modal", l = e.fn[s], c = {backdrop: !0, keyboard: !0, focus: !0, show: !0},
            d = {backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean"},
            u = function () {
                function i(e, t) {
                    this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
                }

                var o, l, u, p = i.prototype;
                return p.toggle = function (e) {
                    return this._isShown ? this.hide() : this.show(e)
                }, p.show = function (t) {
                    var n = this;
                    if (!this._isShown && !this._isTransitioning) {
                        e(this._element).hasClass("fade") && (this._isTransitioning = !0);
                        var i = e.Event("show.bs.modal", {relatedTarget: t});
                        e(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', (function (e) {
                            return n.hide(e)
                        })), e(this._dialog).on("mousedown.dismiss.bs.modal", (function () {
                            e(n._element).one("mouseup.dismiss.bs.modal", (function (t) {
                                e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
                            }))
                        })), this._showBackdrop((function () {
                            return n._showElement(t)
                        })))
                    }
                }, p.hide = function (n) {
                    var i = this;
                    if (n && n.preventDefault(), this._isShown && !this._isTransitioning) {
                        var o = e.Event("hide.bs.modal");
                        if (e(this._element).trigger(o), this._isShown && !o.isDefaultPrevented()) {
                            this._isShown = !1;
                            var r = e(this._element).hasClass("fade");
                            if (r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off("focusin.bs.modal"), e(this._element).removeClass("show"), e(this._element).off("click.dismiss.bs.modal"), e(this._dialog).off("mousedown.dismiss.bs.modal"), r) {
                                var s = t.getTransitionDurationFromElement(this._element);
                                e(this._element).one(t.TRANSITION_END, (function (e) {
                                    return i._hideModal(e)
                                })).emulateTransitionEnd(s)
                            } else this._hideModal()
                        }
                    }
                }, p.dispose = function () {
                    [window, this._element, this._dialog].forEach((function (t) {
                        return e(t).off(a)
                    })), e(document).off("focusin.bs.modal"), e.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
                }, p.handleUpdate = function () {
                    this._adjustDialog()
                }, p._getConfig = function (e) {
                    return e = r(r({}, c), e), t.typeCheckConfig(s, e, d), e
                }, p._triggerBackdropTransition = function () {
                    var n = this;
                    if ("static" === this._config.backdrop) {
                        var i = e.Event("hidePrevented.bs.modal");
                        if (e(this._element).trigger(i), i.defaultPrevented) return;
                        this._element.classList.add("modal-static");
                        var o = t.getTransitionDurationFromElement(this._element);
                        e(this._element).one(t.TRANSITION_END, (function () {
                            n._element.classList.remove("modal-static")
                        })).emulateTransitionEnd(o), this._element.focus()
                    } else this.hide()
                }, p._showElement = function (n) {
                    var i = this, o = e(this._element).hasClass("fade"),
                        r = this._dialog ? this._dialog.querySelector(".modal-body") : null;
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), e(this._dialog).hasClass("modal-dialog-scrollable") && r ? r.scrollTop = 0 : this._element.scrollTop = 0, o && t.reflow(this._element), e(this._element).addClass("show"), this._config.focus && this._enforceFocus();
                    var s = e.Event("shown.bs.modal", {relatedTarget: n}), a = function () {
                        i._config.focus && i._element.focus(), i._isTransitioning = !1, e(i._element).trigger(s)
                    };
                    if (o) {
                        var l = t.getTransitionDurationFromElement(this._dialog);
                        e(this._dialog).one(t.TRANSITION_END, a).emulateTransitionEnd(l)
                    } else a()
                }, p._enforceFocus = function () {
                    var t = this;
                    e(document).off("focusin.bs.modal").on("focusin.bs.modal", (function (n) {
                        document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus()
                    }))
                }, p._setEscapeEvent = function () {
                    var t = this;
                    this._isShown ? e(this._element).on("keydown.dismiss.bs.modal", (function (e) {
                        t._config.keyboard && 27 === e.which ? (e.preventDefault(), t.hide()) : t._config.keyboard || 27 !== e.which || t._triggerBackdropTransition()
                    })) : this._isShown || e(this._element).off("keydown.dismiss.bs.modal")
                }, p._setResizeEvent = function () {
                    var t = this;
                    this._isShown ? e(window).on("resize.bs.modal", (function (e) {
                        return t.handleUpdate(e)
                    })) : e(window).off("resize.bs.modal")
                }, p._hideModal = function () {
                    var t = this;
                    this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop((function () {
                        e(document.body).removeClass("modal-open"), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger("hidden.bs.modal")
                    }))
                }, p._removeBackdrop = function () {
                    this._backdrop && (e(this._backdrop).remove(), this._backdrop = null)
                }, p._showBackdrop = function (n) {
                    var i = this, o = e(this._element).hasClass("fade") ? "fade" : "";
                    if (this._isShown && this._config.backdrop) {
                        if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", o && this._backdrop.classList.add(o), e(this._backdrop).appendTo(document.body), e(this._element).on("click.dismiss.bs.modal", (function (e) {
                            i._ignoreBackdropClick ? i._ignoreBackdropClick = !1 : e.target === e.currentTarget && i._triggerBackdropTransition()
                        })), o && t.reflow(this._backdrop), e(this._backdrop).addClass("show"), !n) return;
                        if (!o) return void n();
                        var r = t.getTransitionDurationFromElement(this._backdrop);
                        e(this._backdrop).one(t.TRANSITION_END, n).emulateTransitionEnd(r)
                    } else if (!this._isShown && this._backdrop) {
                        e(this._backdrop).removeClass("show");
                        var s = function () {
                            i._removeBackdrop(), n && n()
                        };
                        if (e(this._element).hasClass("fade")) {
                            var a = t.getTransitionDurationFromElement(this._backdrop);
                            e(this._backdrop).one(t.TRANSITION_END, s).emulateTransitionEnd(a)
                        } else s()
                    } else n && n()
                }, p._adjustDialog = function () {
                    var e = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                }, p._resetAdjustments = function () {
                    this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                }, p._checkScrollbar = function () {
                    var e = document.body.getBoundingClientRect();
                    this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                }, p._setScrollbar = function () {
                    var t = this;
                    if (this._isBodyOverflowing) {
                        var n = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
                            i = [].slice.call(document.querySelectorAll(".sticky-top"));
                        e(n).each((function (n, i) {
                            var o = i.style.paddingRight, r = e(i).css("padding-right");
                            e(i).data("padding-right", o).css("padding-right", parseFloat(r) + t._scrollbarWidth + "px")
                        })), e(i).each((function (n, i) {
                            var o = i.style.marginRight, r = e(i).css("margin-right");
                            e(i).data("margin-right", o).css("margin-right", parseFloat(r) - t._scrollbarWidth + "px")
                        }));
                        var o = document.body.style.paddingRight, r = e(document.body).css("padding-right");
                        e(document.body).data("padding-right", o).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px")
                    }
                    e(document.body).addClass("modal-open")
                }, p._resetScrollbar = function () {
                    var t = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
                    e(t).each((function (t, n) {
                        var i = e(n).data("padding-right");
                        e(n).removeData("padding-right"), n.style.paddingRight = i || ""
                    }));
                    var n = [].slice.call(document.querySelectorAll(".sticky-top"));
                    e(n).each((function (t, n) {
                        var i = e(n).data("margin-right");
                        void 0 !== i && e(n).css("margin-right", i).removeData("margin-right")
                    }));
                    var i = e(document.body).data("padding-right");
                    e(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
                }, p._getScrollbarWidth = function () {
                    var e = document.createElement("div");
                    e.className = "modal-scrollbar-measure", document.body.appendChild(e);
                    var t = e.getBoundingClientRect().width - e.clientWidth;
                    return document.body.removeChild(e), t
                }, i._jQueryInterface = function (t, n) {
                    return this.each((function () {
                        var o = e(this).data("bs.modal"),
                            s = r(r(r({}, c), e(this).data()), "object" == typeof t && t ? t : {});
                        if (o || (o = new i(this, s), e(this).data("bs.modal", o)), "string" == typeof t) {
                            if (void 0 === o[t]) throw new TypeError('No method named "' + t + '"');
                            o[t](n)
                        } else s.show && o.show(n)
                    }))
                }, o = i, u = [{
                    key: "VERSION", get: function () {
                        return "4.5.0"
                    }
                }, {
                    key: "Default", get: function () {
                        return c
                    }
                }], (l = null) && n(o.prototype, l), u && n(o, u), i
            }();
        return e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function (n) {
            var i, o = this, s = t.getSelectorFromElement(this);
            s && (i = document.querySelector(s));
            var a = e(i).data("bs.modal") ? "toggle" : r(r({}, e(i).data()), e(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || n.preventDefault();
            var l = e(i).one("show.bs.modal", (function (t) {
                t.isDefaultPrevented() || l.one("hidden.bs.modal", (function () {
                    e(o).is(":visible") && o.focus()
                }))
            }));
            u._jQueryInterface.call(e(i), a, this)
        })), e.fn[s] = u._jQueryInterface, e.fn[s].Constructor = u, e.fn[s].noConflict = function () {
            return e.fn[s] = l, u._jQueryInterface
        }, u
    }(n(1), n(3))
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        const t = function (e) {
            try {
                return JSON.parse(e)
            } catch (t) {
                return e
            }
        }(e);
        return void 0 === t ? null : t
    }
}, function (e, t, n) {
    "use strict";
    (function (e) {
        n(45);
        var i = n(8), o = {
            $el: e("#body-wrapper"), init: function () {
                var e = this;
                e.$el.length ? (e.$el.animsition({
                    inClass: "fade-in",
                    outClass: "fade-out-up-sm",
                    inDuration: 800,
                    outDuration: 800,
                    linkElement: 'a:not([target="_blank"]):not([href^="#"])',
                    loading: !0,
                    loadingParentElement: "body",
                    loadingClass: "animsition-loading",
                    loadingInner: "",
                    timeout: !0,
                    timeoutCountdown: 500,
                    onLoadEvent: !0,
                    browser: ["animation-duration", "-webkit-animation-duration"],
                    overlay: !1,
                    overlayClass: "animsition-overlay-slide",
                    overlayParentElement: "body",
                    transition: function (e) {
                        window.location.href = e
                    }
                }), e.$el.on("animsition.inStart", (function () {
                    i.a.init()
                }))) : i.a.init()
            }
        };
        t.a = o
    }).call(this, n(1))
}, function (e, t, n) {
    "use strict";
    (function (e) {
        var n = {
            init: function (t) {
                e(".bg-image, .post-wide .post-image, .post.single .post-image", t || "html").each((function () {
                    var t = e(this), n = t.children("img").attr("src");
                    t.css("background-image", "url(" + n + ")").children("img").hide()
                })), e(".bg-video", t || "html").each((function () {
                    var t = e(this);
                    setTimeout((function () {
                        e('\n          <video muted playsinline autoplay loop preload="none">\n            <source src="'.concat(t.data("src"), '" type="').concat(t.data("type"), '">\n          </video>\n        ')).appendTo(t)
                    }), 500)
                }))
            }
        };
        t.a = n
    }).call(this, n(1))
}, function (e, t, n) {
    "use strict";
    (function (e) {
        n(47);
        var i = {
            init: function () {
                var e = this;
                e.Basic.init(), e.MainOne.init(), e.MainTwo.init(), e.Gallery.init()
            },
            Basic: {
                $el: e(".carousel"), init: function () {
                    this.$el.length && this.$el.slick()
                }
            },
            MainOne: {
                DOM: {
                    $images: e("#section-main-1-carousel-image"),
                    $contents: e("#section-main-1-carousel-content")
                }, init: function () {
                    var t = this;
                    if (t.DOM.$images.length && t.DOM.$images.slick({
                        dots: !0,
                        speed: 800,
                        arrows: !1,
                        asNavFor: t.DOM.$contents
                    }), t.DOM.$contents.length) {
                        t.DOM.$contents.slick({
                            dots: !1,
                            speed: 800,
                            arrows: !1,
                            autoplay: !0,
                            autoplaySpeed: 3500,
                            asNavFor: t.DOM.$images
                        });
                        var n = t.DOM.$contents.next(".content-nav");
                        n.children(".next").on("click", (function () {
                            return t.DOM.$contents.slick("slickNext"), e(this).blur(), !1
                        })), n.children(".prev").on("click", (function () {
                            return t.DOM.$contents.slick("slickPrev"), e(this).blur(), !1
                        }))
                    }
                }
            },
            MainTwo: {
                $el: e("#section-main-2-slider"), init: function () {
                    this.$el.length && this.$el.slick({dots: !0, speed: 800, arrows: !0})
                }
            },
            Gallery: {
                DOM: {$images: e(".gallery-carousel", "#content"), $nav: e(".gallery-nav", "#content")},
                init: function () {
                    var e = this;
                    e.DOM.$images.length && (e.DOM.$images.slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: !0,
                        asNavFor: e.DOM.$nav
                    }), e.DOM.$nav.slick({
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: !0,
                        centerMode: !0,
                        focusOnSelect: !0,
                        responsive: [{breakpoint: 1024, settings: {slidesToShow: 3, slidesToScroll: 3}}],
                        asNavFor: e.DOM.$images
                    }))
                }
            }
        };
        t.a = i
    }).call(this, n(1))
}, function (e, t, n) {
    "use strict";
    (function (e) {
        n(50);
        var i = {
            $el: e(".panel-details"), init: function () {
                var t = this;
                t.$el.length && (t.$el.on("show.bs.collapse", ".collapse", (function () {
                    e(this).parents(".panel-details-container").find(".collapse.show").collapse("hide")
                })), t.$el.on("hide.bs.collapse", ".collapse", (function () {
                    e(this).prev(".panel-details-title").find("input").prop("checked", !0)
                })), t.$el.find(".panel-details-title a").on("click", (function () {
                    e(this).blur()
                })))
            }
        };
        t.a = i
    }).call(this, n(1))
}, function (e, t, n) {
    "use strict";
    (function (e) {
        var i = {
            $tooltip: e("[data-toggle='tooltip']"),
            $tab: e("[data-toggle='tab']"),
            $spy: e("[data-spy='scroll']"),
            init: function () {
                var e = this;
                if (e.$tooltip.length) {
                    n(51);
                    e.$tooltip.tooltip()
                }
                if (e.$tab.length) {
                    n(53);
                    e.$tooltip.tooltip()
                }
                if (e.$spy.length) n(54)
            }
        };
        t.a = i
    }).call(this, n(1))
}, function (e, t, n) {
    "use strict";
    (function (e) {
        n(55);
        var i = {
            init: function () {
                var e = this;
                e.Booking.init(), e.Newsletter.init(), e.Validation.init()
            }, Booking: {
                $el: e(".booking-form"), init: function () {
                    this.$el.length > 0 && this.$el.submit((function () {
                        var t = e(this).find(".btn-submit"), n = e(this);
                        return !!n.valid() && (t.addClass("loading"), e.ajax({
                            type: "POST",
                            url: "./php/booking-form.php",
                            data: n.serialize(),
                            error: function (e) {
                                setTimeout((function () {
                                    t.addClass("error")
                                }), 1200)
                            },
                            success: function (e) {
                                "success" != e ? t.addClass("error") : t.addClass("success")
                            },
                            complete: function (e) {
                                setTimeout((function () {
                                    t.removeClass("loading error success")
                                }), 6e3)
                            }
                        }), !1)
                    }))
                }
            }, Newsletter: {
                $el: e(".sign-up-form"), init: function () {
                    this.$el.length > 0 && this.$el.submit((function () {
                        var t = e(this).find(".btn-submit"), n = e(this);
                        return !!n.valid() && (t.addClass("loading"), e.ajax({
                            type: n.attr("method"),
                            url: n.attr("action"),
                            data: n.serialize(),
                            cache: !1,
                            dataType: "jsonp",
                            jsonp: "c",
                            contentType: "application/json; charset=utf-8",
                            error: function (e) {
                                setTimeout((function () {
                                    t.addClass("error")
                                }), 1200)
                            },
                            success: function (e) {
                                "success" != e.result ? t.addClass("error") : t.addClass("success")
                            },
                            complete: function (e) {
                                setTimeout((function () {
                                    t.removeClass("loading error success")
                                }), 6e3)
                            }
                        }), !1)
                    }))
                }
            }, Validation: {
                $el: e("[data-validate], .validate-form"), init: function () {
                    this.$el.length && this.$el.each((function () {
                        e(this).validate({
                            validClass: "valid", errorClass: "error", onfocusout: function (t, n) {
                                e(t).valid()
                            }, errorPlacement: function (e, t) {
                                return !0
                            }, rules: {email: {required: !0, email: !0}}
                        })
                    }))
                }
            }
        };
        t.a = i
    }).call(this, n(1))
}, function (e, t, n) {
    "use strict";
    (function (e) {
        var i = n(22), o = new i.Loader("AIzaSyBRMEkSrFLFkLKHyLVwT0DLLTqcUhUUZdM"), r = {
            $el: e(".google-map"), init: function () {
                var t = this;
                t.$el.length && o.load().then((function (n) {
                    t.$el.each((function () {
                        var t = e(this), i = new n.maps.LatLng(Number(t.data("lat")), Number(t.data("lon"))),
                            o = new n.maps.Map(t[0], {
                                zoom: 15,
                                mapTypeControl: !1,
                                panControl: !1,
                                zoomControl: !0,
                                scaleControl: !1,
                                streetViewControl: !1,
                                scrollwheel: !1
                            });
                        new n.maps.Marker({
                            position: i,
                            map: o,
                            icon: {
                                url: "assets/img/location-pin.png",
                                anchor: new n.maps.Point(29, 64),
                                size: new n.maps.Size(72, 72),
                                scaledSize: new n.maps.Size(72, 72)
                            }
                        });
                        o.panTo(i)
                    }))
                }))
            }
        };
        t.a = r
    }).call(this, n(1))
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
    }(n(56))
}, function (e, t, n) {
    "use strict";
    (function (e) {
        n(13);
        var i = n(4), o = {
            DOM: {$timeout: e(".modal[data-timeout]"), $video: e('[data-toggle="video-modal"]')},
            init: function () {
                this.DOM.$timeout.each((function () {
                    var t = e(this), n = t.data("timeout"), o = t.data("set-cookie") || null;
                    o ? ("complete" !== i.a.getCookie(o) && t.modal("show"), t.on("hidden.bs.modal", (function () {
                        i.a.setCookie(o, "complete", 365)
                    }))) : setTimeout((function () {
                        t.modal("show")
                    }), n)
                })), this.DOM.$video.on("click", (function () {
                    var t = e(this).data("target"), n = e(this).data("video");
                    return e(t + " iframe").attr("src", n + "?autoplay=1"), e(t).modal("show"), e(t).on("hidden.bs.modal", (function () {
                        var n = e(t + " .modal-content");
                        e(t + " iframe").remove(), n.html('<iframe height="500"></iframe>')
                    })), !1
                }))
            }
        };
        t.a = o
    }).call(this, n(1))
}, function (e, t, n) {
    "use strict";
    var i = n(25), o = {
        init: function () {
            Object(i.jarallax)(document.querySelectorAll(".bg-image.bg-parallax"), {speed: .75})
        }
    };
    t.a = o
}, function (e, t, n) {
    const i = n(57).default, o = n(61).default, r = n(58).default;
    e.exports = {jarallax: i, jarallaxElement: () => r(i), jarallaxVideo: () => o(i)}
}, function (e, t) {
    e.exports = function (e) {
        "complete" === document.readyState || "interactive" === document.readyState ? e.call() : document.attachEvent ? document.attachEvent("onreadystatechange", (function () {
            "interactive" === document.readyState && e.call()
        })) : document.addEventListener && document.addEventListener("DOMContentLoaded", e)
    }
}, function (e, t, n) {
    "use strict";
    (function (e) {
        var i = n(28), o = n.n(i), r = {
            domId: "twitter-feed", init: function () {
                if (e("#".concat(this.domId)).length) {
                    var t = {
                        profile: {screenName: "suelopl"},
                        domId: this.domId,
                        maxTweets: 2,
                        enableLinks: !0,
                        showPermalinks: !1,
                        showUser: !1,
                        showInteraction: !1,
                        showTime: !0,
                        lang: "en"
                    };
                    o.a.fetch(t)
                }
            }
        };
        t.a = r
    }).call(this, n(1))
}, function (e, t, n) {
    var i, o, r;
    o = [], void 0 === (r = "function" == typeof (i = function () {
        var e = "", t = 20, n = !0, i = [], o = !1, r = !0, s = !0, a = null, l = !0, c = !0, d = null, u = !0, p = !1,
            f = !1, h = !0, m = !0, g = !1, v = null;

        function y(e) {
            return e.replace(/<b[^>]*>(.*?)<\/b>/gi, (function (e, t) {
                return t
            })).replace(/class="(?!(tco-hidden|tco-display|tco-ellipsis))+.*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi, "")
        }

        function b(e) {
            for (var t = e.getElementsByTagName("a"), n = t.length - 1; n >= 0; n--) t[n].setAttribute("target", "_blank"), t[n].setAttribute("rel", "noopener")
        }

        function w(e, t) {
            for (var n = [], i = new RegExp("(^| )" + t + "( |$)"), o = e.getElementsByTagName("*"), r = 0, s = o.length; r < s; r++) i.test(o[r].className) && n.push(o[r]);
            return n
        }

        function x(e) {
            if (void 0 !== e && e.innerHTML.indexOf("data-image") >= 0) {
                for (var t = e.innerHTML.match(/data-image=\"([^"]+)\"/gi), n = 0; n < t.length; n++) t[n] = t[n].match(/data-image=\"([^"]+)\"/i)[1], t[n] = decodeURIComponent(t[n]) + ".jpg";
                return t
            }
        }

        var T = {
            fetch: function (l) {
                if (void 0 === l.maxTweets && (l.maxTweets = 20), void 0 === l.enableLinks && (l.enableLinks = !0), void 0 === l.showUser && (l.showUser = !0), void 0 === l.showTime && (l.showTime = !0), void 0 === l.dateFunction && (l.dateFunction = "default"), void 0 === l.showRetweet && (l.showRetweet = !0), void 0 === l.customCallback && (l.customCallback = null), void 0 === l.showInteraction && (l.showInteraction = !0), void 0 === l.showImages && (l.showImages = !1), void 0 === l.useEmoji && (l.useEmoji = !1), void 0 === l.linksInNewWindow && (l.linksInNewWindow = !0), void 0 === l.showPermalinks && (l.showPermalinks = !0), void 0 === l.dataOnly && (l.dataOnly = !1), o) i.push(l); else {
                    o = !0, e = l.domId, t = l.maxTweets, n = l.enableLinks, s = l.showUser, r = l.showTime, c = l.showRetweet, a = l.dateFunction, d = l.customCallback, u = l.showInteraction, p = l.showImages, f = l.useEmoji, h = l.linksInNewWindow, m = l.showPermalinks, g = l.dataOnly;
                    var y = document.getElementsByTagName("head")[0];
                    null !== v && y.removeChild(v), (v = document.createElement("script")).type = "text/javascript", void 0 !== l.list ? v.src = "https://syndication.twitter.com/timeline/list?callback=__twttrf.callback&dnt=false&list_slug=" + l.list.listSlug + "&screen_name=" + l.list.screenName + "&suppress_response_codes=true&lang=" + (l.lang || "en") + "&rnd=" + Math.random() : void 0 !== l.profile ? v.src = "https://syndication.twitter.com/timeline/profile?callback=__twttrf.callback&dnt=false&screen_name=" + l.profile.screenName + "&suppress_response_codes=true&lang=" + (l.lang || "en") + "&rnd=" + Math.random() : void 0 !== l.likes ? v.src = "https://syndication.twitter.com/timeline/likes?callback=__twttrf.callback&dnt=false&screen_name=" + l.likes.screenName + "&suppress_response_codes=true&lang=" + (l.lang || "en") + "&rnd=" + Math.random() : void 0 !== l.collection ? v.src = "https://syndication.twitter.com/timeline/collection?callback=__twttrf.callback&dnt=false&collection_id=" + l.collection.collectionId + "&suppress_response_codes=true&lang=" + (l.lang || "en") + "&rnd=" + Math.random() : v.src = "https://cdn.syndication.twimg.com/widgets/timelines/" + l.id + "?&lang=" + (l.lang || "en") + "&callback=__twttrf.callback&suppress_response_codes=true&rnd=" + Math.random(), y.appendChild(v)
                }
            }, callback: function (v) {
                if (void 0 === v || void 0 === v.body) return o = !1, void (i.length > 0 && (T.fetch(i[0]), i.splice(0, 1)));
                f || (v.body = v.body.replace(/(<img[^c]*class="Emoji[^>]*>)|(<img[^c]*class="u-block[^>]*>)/g, "")), p || (v.body = v.body.replace(/(<img[^c]*class="NaturalImage-image[^>]*>|(<img[^c]*class="CroppedImage-image[^>]*>))/g, "")), s || (v.body = v.body.replace(/(<img[^c]*class="Avatar"[^>]*>)/g, ""));
                var C = document.createElement("div");

                function k(e) {
                    var t = e.getElementsByTagName("img")[0];
                    if (t) t.src = t.getAttribute("data-src-2x"); else {
                        var n = e.getElementsByTagName("a")[0].getAttribute("href").split("twitter.com/")[1],
                            i = document.createElement("img");
                        i.setAttribute("src", "https://twitter.com/" + n + "/profile_image?size=bigger"), e.prepend(i)
                    }
                    return e
                }

                C.innerHTML = v.body, void 0 === C.getElementsByClassName && (l = !1);
                var S = [], E = [], $ = [], _ = [], A = [], O = [], D = [], N = 0;
                if (l) for (var j = C.getElementsByClassName("timeline-Tweet"); N < j.length;) j[N].getElementsByClassName("timeline-Tweet-retweetCredit").length > 0 ? A.push(!0) : A.push(!1), (!A[N] || A[N] && c) && (S.push(j[N].getElementsByClassName("timeline-Tweet-text")[0]), O.push(j[N].getAttribute("data-tweet-id")), s && E.push(k(j[N].getElementsByClassName("timeline-Tweet-author")[0])), $.push(j[N].getElementsByClassName("dt-updated")[0]), D.push(j[N].getElementsByClassName("timeline-Tweet-timestamp")[0]), void 0 !== j[N].getElementsByClassName("timeline-Tweet-media")[0] ? _.push(j[N].getElementsByClassName("timeline-Tweet-media")[0]) : _.push(void 0)), N++; else for (j = w(C, "timeline-Tweet"); N < j.length;) w(j[N], "timeline-Tweet-retweetCredit").length > 0 ? A.push(!0) : A.push(!1), (!A[N] || A[N] && c) && (S.push(w(j[N], "timeline-Tweet-text")[0]), O.push(j[N].getAttribute("data-tweet-id")), s && E.push(k(w(j[N], "timeline-Tweet-author")[0])), $.push(w(j[N], "dt-updated")[0]), D.push(w(j[N], "timeline-Tweet-timestamp")[0]), void 0 !== w(j[N], "timeline-Tweet-media")[0] ? _.push(w(j[N], "timeline-Tweet-media")[0]) : _.push(void 0)), N++;
                S.length > t && (S.splice(t, S.length - t), E.splice(t, E.length - t), $.splice(t, $.length - t), A.splice(t, A.length - t), _.splice(t, _.length - t), D.splice(t, D.length - t));
                var P = [], I = (N = S.length, 0);
                if (g) for (; I < N;) P.push({
                    tweet: S[I].innerHTML,
                    tweetText: S[I].textContent,
                    author: E[I] ? E[I].innerHTML : "Unknown Author",
                    author_data: {
                        profile_url: E[I] ? E[I].querySelector('[data-scribe="element:user_link"]').href : null,
                        profile_image: E[I] ? "https://twitter.com/" + E[I].querySelector('[data-scribe="element:screen_name"]').title.split("@")[1] + "/profile_image?size=bigger" : null,
                        profile_image_2x: E[I] ? "https://twitter.com/" + E[I].querySelector('[data-scribe="element:screen_name"]').title.split("@")[1] + "/profile_image?size=original" : null,
                        screen_name: E[I] ? E[I].querySelector('[data-scribe="element:screen_name"]').title : null,
                        name: E[I] ? E[I].querySelector('[data-scribe="element:name"]').title : null
                    },
                    time: $[I].textContent,
                    timestamp: $[I].getAttribute("datetime").replace("+0000", "Z").replace(/([\+\-])(\d\d)(\d\d)/, "$1$2:$3"),
                    image: x(_[I]) ? x(_[I])[0] : void 0,
                    images: x(_[I]),
                    rt: A[I],
                    tid: O[I],
                    permalinkURL: void 0 === D[I] ? "" : D[I].href
                }), I++; else for (; I < N;) {
                    if ("string" != typeof a) {
                        var L = $[I].getAttribute("datetime"),
                            M = new Date($[I].getAttribute("datetime").replace(/-/g, "/").replace("T", " ").split("+")[0]),
                            H = a(M, L);
                        if ($[I].setAttribute("aria-label", H), S[I].textContent) if (l) $[I].textContent = H; else {
                            var R = document.createElement("p"), q = document.createTextNode(H);
                            R.appendChild(q), R.setAttribute("aria-label", H), $[I] = R
                        } else $[I].textContent = H
                    }
                    var F = "";
                    if (n ? (h && (b(S[I]), s && b(E[I])), s && (F += '<div class="user">' + y(E[I].innerHTML) + "</div>"), F += '<p class="tweet">' + y(S[I].innerHTML) + "</p>", r && (F += m ? '<p class="timePosted"><a href="' + D[I] + '">' + $[I].getAttribute("aria-label") + "</a></p>" : '<p class="timePosted">' + $[I].getAttribute("aria-label") + "</p>")) : (S[I].textContent, s && (F += '<p class="user">' + E[I].textContent + "</p>"), F += '<p class="tweet">' + S[I].textContent + "</p>", r && (F += '<p class="timePosted">' + $[I].textContent + "</p>")), u && (F += '<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to=' + O[I] + '" class="twitter_reply_icon"' + (h ? ' target="_blank" rel="noopener">' : ">") + 'Reply</a><a href="https://twitter.com/intent/retweet?tweet_id=' + O[I] + '" class="twitter_retweet_icon"' + (h ? ' target="_blank" rel="noopener">' : ">") + 'Retweet</a><a href="https://twitter.com/intent/favorite?tweet_id=' + O[I] + '" class="twitter_fav_icon"' + (h ? ' target="_blank" rel="noopener">' : ">") + "Favorite</a></p>"), p && void 0 !== _[I] && void 0 !== x(_[I])) for (var z = x(_[I]), B = 0; B < z.length; B++) F += '<div class="media"><img src="' + z[B] + '" alt="Image from tweet" /></div>';
                    (p || !p && S[I].textContent.length) && P.push(F), I++
                }
                !function (t) {
                    if (null === d) {
                        for (var n = t.length, i = 0, o = document.getElementById(e), r = "<ul>"; i < n;) r += "<li>" + t[i] + "</li>", i++;
                        r += "</ul>", o.innerHTML = r
                    } else d(t)
                }(P), o = !1, i.length > 0 && (T.fetch(i[0]), i.splice(0, 1))
            }
        };
        return window.__twttrf = T, window.twitterFetcher = T, T
    }) ? i.apply(t, o) : i) || (e.exports = r), [Element.prototype, Document.prototype, DocumentFragment.prototype].forEach((function (e) {
        e.hasOwnProperty("prepend") || Object.defineProperty(e, "prepend", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: function () {
                var e = Array.prototype.slice.call(arguments), t = document.createDocumentFragment();
                e.forEach((function (e) {
                    var n = e instanceof Node;
                    t.appendChild(n ? e : document.createTextNode(String(e)))
                })), this.insertBefore(t, this.firstChild)
            }
        })
    }))
}, function (e, t, n) {
    "use strict";
    (function (e) {
        n(59);
        var i = {
            init: function () {
                e(".html-code").each((function () {
                    var t = e(this).html();
                    t = t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), e(this).html(t)
                }))
            }
        };
        t.a = i
    }).call(this, n(1))
}, function (e, t, n) {
    e.exports = n(31)
}, function (e, t, n) {
    "use strict";
    n.r(t), function (e) {
        n(32), n(33), n(34), n(35), n(36), n(37), n(38), n(39), n(40), n(41), n(42), n(43), n(44);
        var t = n(15), i = n(9), o = n(16), r = n(17), s = n(10), a = n(18), l = n(4), c = n(19), d = n(7), u = n(20),
            p = n(21), f = n(11), h = n(23), m = n(24), g = n(12), v = n(27), y = n(29);
        e((function () {
            o.a.init(), i.a.init(), r.a.init(), s.a.init(), a.a.init(), l.a.init(), c.a.init(), d.a.init(), u.a.init(), p.a.init(), f.a.init(), h.a.init(), t.a.init(), m.a.init(), g.a.init(), v.a.init(), y.a.init(), n(60).default.init()
        })), e(document).on("click", (function (e) {
            f.a.handleClick(e), s.a.Panel.handleClick(e)
        }));
        var b = 0;
        e(window).on("scroll", (function () {
            b = e(window).scrollTop(), i.a.handleScroll(b), g.a.handleScroll(b)
        }))
    }.call(this, n(1))
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    n.p
}, function (e, t, n) {
    "use strict";
    n.p
}, function (e, t, n) {
    "use strict";
    n.p
}, function (e, t, n) {
    "use strict";
    n.p
}, function (e, t, n) {
    "use strict";
    n.p
}, function (e, t, n) {
    "use strict";
    n.p
}, function (e, t, n) {
    "use strict";
    n.p
}, function (e, t, n) {
    var i, o, r;
    !function (s) {
        "use strict";
        o = [n(1)], void 0 === (r = "function" == typeof (i = function (e) {
            var t = "animsition", n = {
                init: function (i) {
                    i = e.extend({
                        inClass: "fade-in",
                        outClass: "fade-out",
                        inDuration: 1500,
                        outDuration: 800,
                        linkElement: ".animsition-link",
                        loading: !0,
                        loadingParentElement: "body",
                        loadingClass: "animsition-loading",
                        loadingInner: "",
                        timeout: !1,
                        timeoutCountdown: 5e3,
                        onLoadEvent: !0,
                        browser: ["animation-duration", "-webkit-animation-duration"],
                        overlay: !1,
                        overlayClass: "animsition-overlay-slide",
                        overlayParentElement: "body",
                        transition: function (e) {
                            window.location.href = e
                        }
                    }, i), n.settings = {
                        timer: !1,
                        data: {
                            inClass: "animsition-in-class",
                            inDuration: "animsition-in-duration",
                            outClass: "animsition-out-class",
                            outDuration: "animsition-out-duration",
                            overlay: "animsition-overlay"
                        },
                        events: {
                            inStart: "animsition.inStart",
                            inEnd: "animsition.inEnd",
                            outStart: "animsition.outStart",
                            outEnd: "animsition.outEnd"
                        }
                    };
                    var o = n.supportCheck.call(this, i);
                    return o || !(i.browser.length > 0) || o && this.length ? (n.optionCheck.call(this, i) && e("." + i.overlayClass).length <= 0 && n.addOverlay.call(this, i), i.loading && e("." + i.loadingClass).length <= 0 && n.addLoading.call(this, i), this.each((function () {
                        var o = this, r = e(this), s = e(window), a = e(document);
                        r.data(t) || (i = e.extend({}, i), r.data(t, {options: i}), i.timeout && n.addTimer.call(o), i.onLoadEvent && s.on("load." + t, (function () {
                            n.settings.timer && clearTimeout(n.settings.timer), n.in.call(o)
                        })), s.on("pageshow." + t, (function (e) {
                            e.originalEvent.persisted && n.in.call(o)
                        })), s.on("unload." + t, (function () {
                        })), a.on("click." + t, i.linkElement, (function (t) {
                            t.preventDefault();
                            var i = e(this), r = i.attr("href");
                            2 === t.which || t.metaKey || t.shiftKey || -1 !== navigator.platform.toUpperCase().indexOf("WIN") && t.ctrlKey ? window.open(r, "_blank") : n.out.call(o, i, r)
                        })))
                    }))) : ("console" in window || (window.console = {}, window.console.log = function (e) {
                        return e
                    }), this.length || console.log("Animsition: Element does not exist on page."), o || console.log("Animsition: Does not support this browser."), n.destroy.call(this))
                }, addOverlay: function (t) {
                    e(t.overlayParentElement).prepend('<div class="' + t.overlayClass + '"></div>')
                }, addLoading: function (t) {
                    e(t.loadingParentElement).append('<div class="' + t.loadingClass + '">' + t.loadingInner + "</div>")
                }, removeLoading: function () {
                    var n = e(this).data(t).options;
                    e(n.loadingParentElement).children("." + n.loadingClass).fadeOut().remove()
                }, addTimer: function () {
                    var i = this, o = e(this).data(t).options;
                    n.settings.timer = setTimeout((function () {
                        n.in.call(i), e(window).off("load." + t)
                    }), o.timeoutCountdown)
                }, supportCheck: function (t) {
                    var n = e(this), i = t.browser, o = i.length, r = !1;
                    0 === o && (r = !0);
                    for (var s = 0; s < o; s++) if ("string" == typeof n.css(i[s])) {
                        r = !0;
                        break
                    }
                    return r
                }, optionCheck: function (t) {
                    var i = e(this);
                    return !(!t.overlay && !i.data(n.settings.data.overlay))
                }, animationCheck: function (n, i, o) {
                    var r = e(this).data(t).options, s = typeof n, a = !i && "number" === s,
                        l = i && "string" === s && n.length > 0;
                    return a || l ? n = n : i && o ? n = r.inClass : !i && o ? n = r.inDuration : i && !o ? n = r.outClass : i || o || (n = r.outDuration), n
                }, in: function () {
                    var i = e(this), o = i.data(t).options, r = i.data(n.settings.data.inDuration),
                        s = i.data(n.settings.data.inClass), a = n.animationCheck.call(this, r, !1, !0),
                        l = n.animationCheck.call(this, s, !0, !0), c = n.optionCheck.call(this, o),
                        d = i.data(t).outClass;
                    o.loading && n.removeLoading.call(this), d && i.removeClass(d), c ? n.inOverlay.call(this, l, a) : n.inDefault.call(this, l, a)
                }, inDefault: function (t, i) {
                    var o = e(this);
                    o.css({"animation-duration": i + "ms"}).addClass(t).trigger(n.settings.events.inStart).animateCallback((function () {
                        o.removeClass(t).css({opacity: 1}).trigger(n.settings.events.inEnd)
                    }))
                }, inOverlay: function (i, o) {
                    var r = e(this), s = r.data(t).options;
                    r.css({opacity: 1}).trigger(n.settings.events.inStart), e(s.overlayParentElement).children("." + s.overlayClass).css({"animation-duration": o + "ms"}).addClass(i).animateCallback((function () {
                        r.trigger(n.settings.events.inEnd)
                    }))
                }, out: function (i, o) {
                    var r = e(this), s = r.data(t).options, a = i.data(n.settings.data.outClass),
                        l = r.data(n.settings.data.outClass), c = i.data(n.settings.data.outDuration),
                        d = r.data(n.settings.data.outDuration), u = a || l, p = c || d,
                        f = n.animationCheck.call(this, u, !0, !1), h = n.animationCheck.call(this, p, !1, !1),
                        m = n.optionCheck.call(this, s);
                    r.data(t).outClass = f, m ? n.outOverlay.call(this, f, h, o) : n.outDefault.call(this, f, h, o)
                }, outDefault: function (i, o, r) {
                    var s = e(this), a = s.data(t).options;
                    s.css({"animation-duration": o + 1 + "ms"}).addClass(i).trigger(n.settings.events.outStart).animateCallback((function () {
                        s.trigger(n.settings.events.outEnd), a.transition(r)
                    }))
                }, outOverlay: function (i, o, r) {
                    var s = e(this), a = s.data(t).options, l = s.data(n.settings.data.inClass),
                        c = n.animationCheck.call(this, l, !0, !0);
                    e(a.overlayParentElement).children("." + a.overlayClass).css({"animation-duration": o + 1 + "ms"}).removeClass(c).addClass(i).trigger(n.settings.events.outStart).animateCallback((function () {
                        s.trigger(n.settings.events.outEnd), a.transition(r)
                    }))
                }, destroy: function () {
                    return this.each((function () {
                        var n = e(this);
                        e(window).off("." + t), n.css({opacity: 1}).removeData(t)
                    }))
                }
            };
            e.fn.animateCallback = function (t) {
                var n = "animationend webkitAnimationEnd";
                return this.each((function () {
                    var i = e(this);
                    i.on(n, (function () {
                        return i.off(n), t.call(this)
                    }))
                }))
            }, e.fn.animsition = function (i) {
                return n[i] ? n[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void e.error("Method " + i + " does not exist on jQuery." + t) : n.init.apply(this, arguments)
            }
        }) ? i.apply(t, o) : i) || (e.exports = r)
    }()
}, function (e, t, n) {
    var i, o, r;
    o = [n(1)], void 0 === (r = "function" == typeof (i = function (e) {
        e.fn.appear = function (t, n) {
            var i = e.extend({data: void 0, one: !0, accX: 0, accY: 0}, n);
            return this.each((function () {
                var n = e(this);
                if (n.appeared = !1, t) {
                    var o = e(window), r = function () {
                        if (n.is(":visible")) {
                            var e = o.scrollLeft(), t = o.scrollTop(), r = n.offset(), s = r.left, a = r.top,
                                l = i.accX, c = i.accY, d = n.height(), u = o.height(), p = n.width(), f = o.width();
                            a + d + c >= t && a <= t + u + c && s + p + l >= e && s <= e + f + l ? n.appeared || n.trigger("appear", i.data) : n.appeared = !1
                        } else n.appeared = !1
                    }, s = function () {
                        if (n.appeared = !0, i.one) {
                            o.unbind("scroll", r);
                            var s = e.inArray(r, e.fn.appear.checks);
                            s >= 0 && e.fn.appear.checks.splice(s, 1)
                        }
                        t.apply(this, arguments)
                    };
                    i.one ? n.one("appear", i.data, s) : n.bind("appear", i.data, s), o.scroll(r), e.fn.appear.checks.push(r), r()
                } else n.trigger("appear", i.data)
            }))
        }, e.extend(e.fn.appear, {
            checks: [], timeout: null, checkAll: function () {
                var t = e.fn.appear.checks.length;
                if (t > 0) for (; t--;) e.fn.appear.checks[t]()
            }, run: function () {
                e.fn.appear.timeout && clearTimeout(e.fn.appear.timeout), e.fn.appear.timeout = setTimeout(e.fn.appear.checkAll, 20)
            }
        }), e.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], (function (t, n) {
            var i = e.fn[n];
            i && (e.fn[n] = function () {
                var t = i.apply(this, arguments);
                return e.fn.appear.run(), t
            })
        }))
    }) ? i.apply(t, o) : i) || (e.exports = r)
}, function (e, t, n) {
    var i, o, r;
    !function (s) {
        "use strict";
        o = [n(1)], void 0 === (r = "function" == typeof (i = function (e) {
            var t = window.Slick || {};
            (n = 0, t = function (t, i) {
                var o, r = this;
                r.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: e(t),
                    appendDots: e(t),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function (t, n) {
                        return e('<button type="button" />').text(n + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    focusOnChange: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, r.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, e.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = e(t), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, o = e(t).data("slick") || {}, r.options = e.extend({}, r.defaults, i, o), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, void 0 !== document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = e.proxy(r.autoPlay, r), r.autoPlayClear = e.proxy(r.autoPlayClear, r), r.autoPlayIterator = e.proxy(r.autoPlayIterator, r), r.changeSlide = e.proxy(r.changeSlide, r), r.clickHandler = e.proxy(r.clickHandler, r), r.selectHandler = e.proxy(r.selectHandler, r), r.setPosition = e.proxy(r.setPosition, r), r.swipeHandler = e.proxy(r.swipeHandler, r), r.dragHandler = e.proxy(r.dragHandler, r), r.keyHandler = e.proxy(r.keyHandler, r), r.instanceUid = n++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0)
            }).prototype.activateADA = function () {
                this.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})
            }, t.prototype.addSlide = t.prototype.slickAdd = function (t, n, i) {
                var o = this;
                if ("boolean" == typeof n) i = n, n = null; else if (n < 0 || n >= o.slideCount) return !1;
                o.unload(), "number" == typeof n ? 0 === n && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : i ? e(t).insertBefore(o.$slides.eq(n)) : e(t).insertAfter(o.$slides.eq(n)) : !0 === i ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each((function (t, n) {
                    e(n).attr("data-slick-index", t)
                })), o.$slidesCache = o.$slides, o.reinit()
            }, t.prototype.animateHeight = function () {
                var e = this;
                if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                    var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                    e.$list.animate({height: t}, e.options.speed)
                }
            }, t.prototype.animateSlide = function (t, n) {
                var i = {}, o = this;
                o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({left: t}, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({top: t}, o.options.speed, o.options.easing, n) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({animStart: o.currentLeft}).animate({animStart: t}, {
                    duration: o.options.speed,
                    easing: o.options.easing,
                    step: function (e) {
                        e = Math.ceil(e), !1 === o.options.vertical ? (i[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(i))
                    },
                    complete: function () {
                        n && n.call()
                    }
                })) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? i[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(i), n && setTimeout((function () {
                    o.disableTransition(), n.call()
                }), o.options.speed))
            }, t.prototype.getNavTarget = function () {
                var t = this.options.asNavFor;
                return t && null !== t && (t = e(t).not(this.$slider)), t
            }, t.prototype.asNavFor = function (t) {
                var n = this.getNavTarget();
                null !== n && "object" == typeof n && n.each((function () {
                    var n = e(this).slick("getSlick");
                    n.unslicked || n.slideHandler(t, !0)
                }))
            }, t.prototype.applyTransition = function (e) {
                var t = this, n = {};
                !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
            }, t.prototype.autoPlay = function () {
                var e = this;
                e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
            }, t.prototype.autoPlayClear = function () {
                this.autoPlayTimer && clearInterval(this.autoPlayTimer)
            }, t.prototype.autoPlayIterator = function () {
                var e = this, t = e.currentSlide + e.options.slidesToScroll;
                e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
            }, t.prototype.buildArrows = function () {
                var t = this;
                !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
                    "aria-disabled": "true",
                    tabindex: "-1"
                }))
            }, t.prototype.buildDots = function () {
                var t, n, i = this;
                if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
                    for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
                    i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active")
                }
            }, t.prototype.buildOut = function () {
                var t = this;
                t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each((function (t, n) {
                    e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "")
                })), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
            }, t.prototype.buildRows = function () {
                var e, t, n, i, o, r, s, a = this;
                if (i = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 0) {
                    for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; e < o; e++) {
                        var l = document.createElement("div");
                        for (t = 0; t < a.options.rows; t++) {
                            var c = document.createElement("div");
                            for (n = 0; n < a.options.slidesPerRow; n++) {
                                var d = e * s + (t * a.options.slidesPerRow + n);
                                r.get(d) && c.appendChild(r.get(d))
                            }
                            l.appendChild(c)
                        }
                        i.appendChild(l)
                    }
                    a.$slider.empty().append(i), a.$slider.children().children().children().css({
                        width: 100 / a.options.slidesPerRow + "%",
                        display: "inline-block"
                    })
                }
            }, t.prototype.checkResponsive = function (t, n) {
                var i, o, r, s = this, a = !1, l = s.$slider.width(), c = window.innerWidth || e(window).width();
                if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
                    for (i in o = null, s.breakpoints) s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[i] && (o = s.breakpoints[i]) : r > s.breakpoints[i] && (o = s.breakpoints[i]));
                    null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || n) && (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = o), t || !1 === a || s.$slider.trigger("breakpoint", [s, a])
                }
            }, t.prototype.changeSlide = function (t, n) {
                var i, o, r = this, s = e(t.currentTarget);
                switch (s.is("a") && t.preventDefault(), s.is("li") || (s = s.closest("li")), i = r.slideCount % r.options.slidesToScroll != 0 ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
                    case"previous":
                        o = 0 === i ? r.options.slidesToScroll : r.options.slidesToShow - i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, n);
                        break;
                    case"next":
                        o = 0 === i ? r.options.slidesToScroll : i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, n);
                        break;
                    case"index":
                        var a = 0 === t.data.index ? 0 : t.data.index || s.index() * r.options.slidesToScroll;
                        r.slideHandler(r.checkNavigable(a), !1, n), s.children().trigger("focus");
                        break;
                    default:
                        return
                }
            }, t.prototype.checkNavigable = function (e) {
                var t, n;
                if (n = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1]; else for (var i in t) {
                    if (e < t[i]) {
                        e = n;
                        break
                    }
                    n = t[i]
                }
                return e
            }, t.prototype.cleanUpEvents = function () {
                var t = this;
                t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
            }, t.prototype.cleanUpSlideEvents = function () {
                var t = this;
                t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
            }, t.prototype.cleanUpRows = function () {
                var e, t = this;
                t.options.rows > 0 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e))
            }, t.prototype.clickHandler = function (e) {
                !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
            }, t.prototype.destroy = function (t) {
                var n = this;
                n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function () {
                    e(this).attr("style", e(this).data("originalStyling"))
                })), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, t || n.$slider.trigger("destroy", [n])
            }, t.prototype.disableTransition = function (e) {
                var t = this, n = {};
                n[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
            }, t.prototype.fadeSlide = function (e, t) {
                var n = this;
                !1 === n.cssTransitions ? (n.$slides.eq(e).css({zIndex: n.options.zIndex}), n.$slides.eq(e).animate({opacity: 1}, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
                    opacity: 1,
                    zIndex: n.options.zIndex
                }), t && setTimeout((function () {
                    n.disableTransition(e), t.call()
                }), n.options.speed))
            }, t.prototype.fadeSlideOut = function (e) {
                var t = this;
                !1 === t.cssTransitions ? t.$slides.eq(e).animate({
                    opacity: 0,
                    zIndex: t.options.zIndex - 2
                }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
                    opacity: 0,
                    zIndex: t.options.zIndex - 2
                }))
            }, t.prototype.filterSlides = t.prototype.slickFilter = function (e) {
                var t = this;
                null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
            }, t.prototype.focusHandler = function () {
                var t = this;
                t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", (function (n) {
                    n.stopImmediatePropagation();
                    var i = e(this);
                    setTimeout((function () {
                        t.options.pauseOnFocus && (t.focussed = i.is(":focus"), t.autoPlay())
                    }), 0)
                }))
            }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
                return this.currentSlide
            }, t.prototype.getDotCount = function () {
                var e = this, t = 0, n = 0, i = 0;
                if (!0 === e.options.infinite) if (e.slideCount <= e.options.slidesToShow) ++i; else for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; else if (!0 === e.options.centerMode) i = e.slideCount; else if (e.options.asNavFor) for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
                return i - 1
            }, t.prototype.getLeft = function (e) {
                var t, n, i, o, r = this, s = 0;
                return r.slideOffset = 0, n = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = -1, !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? o = -1.5 : 1 === r.options.slidesToShow && (o = -2)), s = n * r.options.slidesToShow * o), r.slideCount % r.options.slidesToScroll != 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, s = (r.options.slidesToShow - (e - r.slideCount)) * n * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, s = r.slideCount % r.options.slidesToScroll * n * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, s = (e + r.options.slidesToShow - r.slideCount) * n), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, s = 0), !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * n * -1 + s, !0 === r.options.variableWidth && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === r.options.centerMode && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (r.$list.width() - i.outerWidth()) / 2)), t
            }, t.prototype.getOption = t.prototype.slickGetOption = function (e) {
                return this.options[e]
            }, t.prototype.getNavigableIndexes = function () {
                var e, t = this, n = 0, i = 0, o = [];
                for (!1 === t.options.infinite ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); n < e;) o.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
                return o
            }, t.prototype.getSlick = function () {
                return this
            }, t.prototype.getSlideCount = function () {
                var t, n, i = this;
                return n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0, !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each((function (o, r) {
                    if (r.offsetLeft - n + e(r).outerWidth() / 2 > -1 * i.swipeLeft) return t = r, !1
                })), Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
            }, t.prototype.goTo = t.prototype.slickGoTo = function (e, t) {
                this.changeSlide({data: {message: "index", index: parseInt(e)}}, t)
            }, t.prototype.init = function (t) {
                var n = this;
                e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), t && n.$slider.trigger("init", [n]), !0 === n.options.accessibility && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay())
            }, t.prototype.initADA = function () {
                var t = this, n = Math.ceil(t.slideCount / t.options.slidesToShow),
                    i = t.getNavigableIndexes().filter((function (e) {
                        return e >= 0 && e < t.slideCount
                    }));
                t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                    "aria-hidden": "true",
                    tabindex: "-1"
                }).find("a, input, button, select").attr({tabindex: "-1"}), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each((function (n) {
                    var o = i.indexOf(n);
                    if (e(this).attr({
                        role: "tabpanel",
                        id: "slick-slide" + t.instanceUid + n,
                        tabindex: -1
                    }), -1 !== o) {
                        var r = "slick-slide-control" + t.instanceUid + o;
                        e("#" + r).length && e(this).attr({"aria-describedby": r})
                    }
                })), t.$dots.attr("role", "tablist").find("li").each((function (o) {
                    var r = i[o];
                    e(this).attr({role: "presentation"}), e(this).find("button").first().attr({
                        role: "tab",
                        id: "slick-slide-control" + t.instanceUid + o,
                        "aria-controls": "slick-slide" + t.instanceUid + r,
                        "aria-label": o + 1 + " of " + n,
                        "aria-selected": null,
                        tabindex: "-1"
                    })
                })).eq(t.currentSlide).find("button").attr({"aria-selected": "true", tabindex: "0"}).end());
                for (var o = t.currentSlide, r = o + t.options.slidesToShow; o < r; o++) t.options.focusOnChange ? t.$slides.eq(o).attr({tabindex: "0"}) : t.$slides.eq(o).removeAttr("tabindex");
                t.activateADA()
            }, t.prototype.initArrowEvents = function () {
                var e = this;
                !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {message: "previous"}, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {message: "next"}, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
            }, t.prototype.initDotEvents = function () {
                var t = this;
                !0 === t.options.dots && t.slideCount > t.options.slidesToShow && (e("li", t.$dots).on("click.slick", {message: "index"}, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
            }, t.prototype.initSlideEvents = function () {
                var t = this;
                t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
            }, t.prototype.initializeEvents = function () {
                var t = this;
                t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {action: "start"}, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {action: "move"}, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {action: "end"}, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition)
            }, t.prototype.initUI = function () {
                var e = this;
                !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
            }, t.prototype.keyHandler = function (e) {
                var t = this;
                e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({data: {message: !0 === t.options.rtl ? "next" : "previous"}}) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({data: {message: !0 === t.options.rtl ? "previous" : "next"}}))
            }, t.prototype.lazyLoad = function () {
                var t, n, i, o = this;

                function r(t) {
                    e("img[data-lazy]", t).each((function () {
                        var t = e(this), n = e(this).attr("data-lazy"), i = e(this).attr("data-srcset"),
                            r = e(this).attr("data-sizes") || o.$slider.attr("data-sizes"),
                            s = document.createElement("img");
                        s.onload = function () {
                            t.animate({opacity: 0}, 100, (function () {
                                i && (t.attr("srcset", i), r && t.attr("sizes", r)), t.attr("src", n).animate({opacity: 1}, 200, (function () {
                                    t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                                })), o.$slider.trigger("lazyLoaded", [o, t, n])
                            }))
                        }, s.onerror = function () {
                            t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, t, n])
                        }, s.src = n
                    }))
                }

                if (!0 === o.options.centerMode ? !0 === o.options.infinite ? i = (n = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (n = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), i = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (n = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, i = Math.ceil(n + o.options.slidesToShow), !0 === o.options.fade && (n > 0 && n--, i <= o.slideCount && i++)), t = o.$slider.find(".slick-slide").slice(n, i), "anticipated" === o.options.lazyLoad) for (var s = n - 1, a = i, l = o.$slider.find(".slick-slide"), c = 0; c < o.options.slidesToScroll; c++) s < 0 && (s = o.slideCount - 1), t = (t = t.add(l.eq(s))).add(l.eq(a)), s--, a++;
                r(t), o.slideCount <= o.options.slidesToShow ? r(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? r(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && r(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow))
            }, t.prototype.loadSlider = function () {
                var e = this;
                e.setPosition(), e.$slideTrack.css({opacity: 1}), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
            }, t.prototype.next = t.prototype.slickNext = function () {
                this.changeSlide({data: {message: "next"}})
            }, t.prototype.orientationChange = function () {
                this.checkResponsive(), this.setPosition()
            }, t.prototype.pause = t.prototype.slickPause = function () {
                this.autoPlayClear(), this.paused = !0
            }, t.prototype.play = t.prototype.slickPlay = function () {
                var e = this;
                e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
            }, t.prototype.postSlide = function (t) {
                var n = this;
                n.unslicked || (n.$slider.trigger("afterChange", [n, t]), n.animating = !1, n.slideCount > n.options.slidesToShow && n.setPosition(), n.swipeLeft = null, n.options.autoplay && n.autoPlay(), !0 === n.options.accessibility && (n.initADA(), n.options.focusOnChange && e(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()))
            }, t.prototype.prev = t.prototype.slickPrev = function () {
                this.changeSlide({data: {message: "previous"}})
            }, t.prototype.preventDefault = function (e) {
                e.preventDefault()
            }, t.prototype.progressiveLazyLoad = function (t) {
                t = t || 1;
                var n, i, o, r, s, a = this, l = e("img[data-lazy]", a.$slider);
                l.length ? (n = l.first(), i = n.attr("data-lazy"), o = n.attr("data-srcset"), r = n.attr("data-sizes") || a.$slider.attr("data-sizes"), (s = document.createElement("img")).onload = function () {
                    o && (n.attr("srcset", o), r && n.attr("sizes", r)), n.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, n, i]), a.progressiveLazyLoad()
                }, s.onerror = function () {
                    t < 3 ? setTimeout((function () {
                        a.progressiveLazyLoad(t + 1)
                    }), 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, n, i]), a.progressiveLazyLoad())
                }, s.src = i) : a.$slider.trigger("allImagesLoaded", [a])
            }, t.prototype.refresh = function (t) {
                var n, i, o = this;
                i = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > i && (o.currentSlide = i), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), n = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, {currentSlide: n}), o.init(), t || o.changeSlide({
                    data: {
                        message: "index",
                        index: n
                    }
                }, !1)
            }, t.prototype.registerBreakpoints = function () {
                var t, n, i, o = this, r = o.options.responsive || null;
                if ("array" === e.type(r) && r.length) {
                    for (t in o.respondTo = o.options.respondTo || "window", r) if (i = o.breakpoints.length - 1, r.hasOwnProperty(t)) {
                        for (n = r[t].breakpoint; i >= 0;) o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1), i--;
                        o.breakpoints.push(n), o.breakpointSettings[n] = r[t].settings
                    }
                    o.breakpoints.sort((function (e, t) {
                        return o.options.mobileFirst ? e - t : t - e
                    }))
                }
            }, t.prototype.reinit = function () {
                var t = this;
                t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
            }, t.prototype.resize = function () {
                var t = this;
                e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout((function () {
                    t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
                }), 50))
            }, t.prototype.removeSlide = t.prototype.slickRemove = function (e, t, n) {
                var i = this;
                if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : i.slideCount - 1 : !0 === t ? --e : e, i.slideCount < 1 || e < 0 || e > i.slideCount - 1) return !1;
                i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit()
            }, t.prototype.setCSS = function (e) {
                var t, n, i = this, o = {};
                !0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, !1 === i.transformsEnabled ? i.$slideTrack.css(o) : (o = {}, !1 === i.cssTransitions ? (o[i.animType] = "translate(" + t + ", " + n + ")", i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", i.$slideTrack.css(o)))
            }, t.prototype.setDimensions = function () {
                var e = this;
                !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({padding: "0px " + e.options.centerPadding}) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({padding: e.options.centerPadding + " 0px"})), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
                var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
                !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
            }, t.prototype.setFade = function () {
                var t, n = this;
                n.$slides.each((function (i, o) {
                    t = n.slideWidth * i * -1, !0 === n.options.rtl ? e(o).css({
                        position: "relative",
                        right: t,
                        top: 0,
                        zIndex: n.options.zIndex - 2,
                        opacity: 0
                    }) : e(o).css({position: "relative", left: t, top: 0, zIndex: n.options.zIndex - 2, opacity: 0})
                })), n.$slides.eq(n.currentSlide).css({zIndex: n.options.zIndex - 1, opacity: 1})
            }, t.prototype.setHeight = function () {
                var e = this;
                if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                    var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                    e.$list.css("height", t)
                }
            }, t.prototype.setOption = t.prototype.slickSetOption = function () {
                var t, n, i, o, r, s = this, a = !1;
                if ("object" === e.type(arguments[0]) ? (i = arguments[0], a = arguments[1], r = "multiple") : "string" === e.type(arguments[0]) && (i = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r) s.options[i] = o; else if ("multiple" === r) e.each(i, (function (e, t) {
                    s.options[e] = t
                })); else if ("responsive" === r) for (n in o) if ("array" !== e.type(s.options.responsive)) s.options.responsive = [o[n]]; else {
                    for (t = s.options.responsive.length - 1; t >= 0;) s.options.responsive[t].breakpoint === o[n].breakpoint && s.options.responsive.splice(t, 1), t--;
                    s.options.responsive.push(o[n])
                }
                a && (s.unload(), s.reinit())
            }, t.prototype.setPosition = function () {
                var e = this;
                e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
            }, t.prototype.setProps = function () {
                var e = this, t = document.body.style;
                e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
            }, t.prototype.setSlideClasses = function (e) {
                var t, n, i, o, r = this;
                if (n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode) {
                    var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
                    t = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t + s, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + e, n.slice(i - t + 1 + s, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")
                } else e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, i = !0 === r.options.infinite ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
                "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad()
            }, t.prototype.setupInfinite = function () {
                var t, n, i, o = this;
                if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (n = null, o.slideCount > o.options.slidesToShow)) {
                    for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1) n = t - 1, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
                    for (t = 0; t < i + o.slideCount; t += 1) n = t, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
                    o.$slideTrack.find(".slick-cloned").find("[id]").each((function () {
                        e(this).attr("id", "")
                    }))
                }
            }, t.prototype.interrupt = function (e) {
                e || this.autoPlay(), this.interrupted = e
            }, t.prototype.selectHandler = function (t) {
                var n = this, i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
                    o = parseInt(i.attr("data-slick-index"));
                o || (o = 0), n.slideCount <= n.options.slidesToShow ? n.slideHandler(o, !1, !0) : n.slideHandler(o)
            }, t.prototype.slideHandler = function (e, t, n) {
                var i, o, r, s, a, l, c = this;
                if (t = t || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e)) if (!1 === t && c.asNavFor(e), i = e, a = c.getLeft(i), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(s, (function () {
                    c.postSlide(i)
                })) : c.postSlide(i)); else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(s, (function () {
                    c.postSlide(i)
                })) : c.postSlide(i)); else {
                    if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = i < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), r = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (l = (l = c.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== n ? (c.fadeSlideOut(r), c.fadeSlide(o, (function () {
                        c.postSlide(o)
                    }))) : c.postSlide(o), void c.animateHeight();
                    !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(a, (function () {
                        c.postSlide(o)
                    })) : c.postSlide(o)
                }
            }, t.prototype.startLoad = function () {
                var e = this;
                !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
            }, t.prototype.swipeDirection = function () {
                var e, t, n, i, o = this;
                return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(t, e), (i = Math.round(180 * n / Math.PI)) < 0 && (i = 360 - Math.abs(i)), i <= 45 && i >= 0 || i <= 360 && i >= 315 ? !1 === o.options.rtl ? "left" : "right" : i >= 135 && i <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? i >= 35 && i <= 135 ? "down" : "up" : "vertical"
            }, t.prototype.swipeEnd = function (e) {
                var t, n, i = this;
                if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1, !1;
                if (i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1;
                if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
                    switch (n = i.swipeDirection()) {
                        case"left":
                        case"down":
                            t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                            break;
                        case"right":
                        case"up":
                            t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
                    }
                    "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
                } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
            }, t.prototype.swipeHandler = function (e) {
                var t = this;
                if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
                    case"start":
                        t.swipeStart(e);
                        break;
                    case"move":
                        t.swipeMove(e);
                        break;
                    case"end":
                        t.swipeEnd(e)
                }
            }, t.prototype.swipeMove = function (e) {
                var t, n, i, o, r, s, a = this;
                return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || r && 1 !== r.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && s > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s), n = a.swipeDirection(), void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, e.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), i = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (i = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + i * o : a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
            }, t.prototype.swipeStart = function (e) {
                var t, n = this;
                if (n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return n.touchObject = {}, !1;
                void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, n.dragging = !0
            }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
                var e = this;
                null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
            }, t.prototype.unload = function () {
                var t = this;
                e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
            }, t.prototype.unslick = function (e) {
                var t = this;
                t.$slider.trigger("unslick", [t, e]), t.destroy()
            }, t.prototype.updateArrows = function () {
                var e = this;
                Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode || e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode) && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
            }, t.prototype.updateDots = function () {
                var e = this;
                null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
            }, t.prototype.visibility = function () {
                var e = this;
                e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
            }, e.fn.slick = function () {
                var e, n, i = this, o = arguments[0], r = Array.prototype.slice.call(arguments, 1), s = i.length;
                for (e = 0; e < s; e++) if ("object" == typeof o || void 0 === o ? i[e].slick = new t(i[e], o) : n = i[e].slick[o].apply(i[e].slick, r), void 0 !== n) return n;
                return i
            };
            var n
        }) ? i.apply(t, o) : i) || (e.exports = r)
    }()
}, function (e, t, n) {
    "use strict";
    var i = {};
    e.exports = {
        getItem: function (e) {
            return e in i ? i[e] : null
        }, setItem: function (e, t) {
            return i[e] = t, !0
        }, removeItem: function (e) {
            return !!(e in i) && delete i[e]
        }, clear: function () {
            return i = {}, !0
        }
    }
}, function (e, t, n) {
    "use strict";
    (function (t) {
        var i = n(14), o = {};

        function r(e) {
            e || (e = t.event);
            var n = o[e.key];
            n && n.forEach((function (t) {
                t(i(e.newValue), i(e.oldValue), e.url || e.uri)
            }))
        }

        e.exports = {
            on: function (e, n) {
                o[e] ? o[e].push(n) : o[e] = [n], t.addEventListener ? t.addEventListener("storage", r, !1) : t.attachEvent ? t.attachEvent("onstorage", r) : t.onstorage = r
            }, off: function (e, t) {
                var n = o[e];
                n.length > 1 ? n.splice(n.indexOf(t), 1) : o[e] = []
            }
        }
    }).call(this, n(6))
}, function (e, t, n) {
    e.exports = function (e, t) {
        "use strict";

        function n(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function r(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach((function (t) {
                    i(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e, t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
        var s = "collapse", a = "bs.collapse", l = e.fn[s], c = {toggle: !0, parent: ""},
            d = {toggle: "boolean", parent: "(string|element)"}, u = function () {
                function i(e, n) {
                    this._isTransitioning = !1, this._element = e, this._config = this._getConfig(n), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                    for (var i = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), o = 0, r = i.length; o < r; o++) {
                        var s = i[o], a = t.getSelectorFromElement(s),
                            l = [].slice.call(document.querySelectorAll(a)).filter((function (t) {
                                return t === e
                            }));
                        null !== a && l.length > 0 && (this._selector = a, this._triggerArray.push(s))
                    }
                    this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                }

                var o, l, u, p = i.prototype;
                return p.toggle = function () {
                    e(this._element).hasClass("show") ? this.hide() : this.show()
                }, p.show = function () {
                    var n, o, r = this;
                    if (!(this._isTransitioning || e(this._element).hasClass("show") || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function (e) {
                        return "string" == typeof r._config.parent ? e.getAttribute("data-parent") === r._config.parent : e.classList.contains("collapse")
                    }))).length && (n = null), n && (o = e(n).not(this._selector).data(a)) && o._isTransitioning))) {
                        var s = e.Event("show.bs.collapse");
                        if (e(this._element).trigger(s), !s.isDefaultPrevented()) {
                            n && (i._jQueryInterface.call(e(n).not(this._selector), "hide"), o || e(n).data(a, null));
                            var l = this._getDimension();
                            e(this._element).removeClass("collapse").addClass("collapsing"), this._element.style[l] = 0, this._triggerArray.length && e(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0);
                            var c = "scroll" + (l[0].toUpperCase() + l.slice(1)),
                                d = t.getTransitionDurationFromElement(this._element);
                            e(this._element).one(t.TRANSITION_END, (function () {
                                e(r._element).removeClass("collapsing").addClass("collapse show"), r._element.style[l] = "", r.setTransitioning(!1), e(r._element).trigger("shown.bs.collapse")
                            })).emulateTransitionEnd(d), this._element.style[l] = this._element[c] + "px"
                        }
                    }
                }, p.hide = function () {
                    var n = this;
                    if (!this._isTransitioning && e(this._element).hasClass("show")) {
                        var i = e.Event("hide.bs.collapse");
                        if (e(this._element).trigger(i), !i.isDefaultPrevented()) {
                            var o = this._getDimension();
                            this._element.style[o] = this._element.getBoundingClientRect()[o] + "px", t.reflow(this._element), e(this._element).addClass("collapsing").removeClass("collapse show");
                            var r = this._triggerArray.length;
                            if (r > 0) for (var s = 0; s < r; s++) {
                                var a = this._triggerArray[s], l = t.getSelectorFromElement(a);
                                null !== l && (e([].slice.call(document.querySelectorAll(l))).hasClass("show") || e(a).addClass("collapsed").attr("aria-expanded", !1))
                            }
                            this.setTransitioning(!0), this._element.style[o] = "";
                            var c = t.getTransitionDurationFromElement(this._element);
                            e(this._element).one(t.TRANSITION_END, (function () {
                                n.setTransitioning(!1), e(n._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                            })).emulateTransitionEnd(c)
                        }
                    }
                }, p.setTransitioning = function (e) {
                    this._isTransitioning = e
                }, p.dispose = function () {
                    e.removeData(this._element, a), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                }, p._getConfig = function (e) {
                    return (e = r(r({}, c), e)).toggle = Boolean(e.toggle), t.typeCheckConfig(s, e, d), e
                }, p._getDimension = function () {
                    return e(this._element).hasClass("width") ? "width" : "height"
                }, p._getParent = function () {
                    var n, o = this;
                    t.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                    var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                        s = [].slice.call(n.querySelectorAll(r));
                    return e(s).each((function (e, t) {
                        o._addAriaAndCollapsedClass(i._getTargetFromElement(t), [t])
                    })), n
                }, p._addAriaAndCollapsedClass = function (t, n) {
                    var i = e(t).hasClass("show");
                    n.length && e(n).toggleClass("collapsed", !i).attr("aria-expanded", i)
                }, i._getTargetFromElement = function (e) {
                    var n = t.getSelectorFromElement(e);
                    return n ? document.querySelector(n) : null
                }, i._jQueryInterface = function (t) {
                    return this.each((function () {
                        var n = e(this), o = n.data(a), s = r(r(r({}, c), n.data()), "object" == typeof t && t ? t : {});
                        if (!o && s.toggle && "string" == typeof t && /show|hide/.test(t) && (s.toggle = !1), o || (o = new i(this, s), n.data(a, o)), "string" == typeof t) {
                            if (void 0 === o[t]) throw new TypeError('No method named "' + t + '"');
                            o[t]()
                        }
                    }))
                }, o = i, u = [{
                    key: "VERSION", get: function () {
                        return "4.5.0"
                    }
                }, {
                    key: "Default", get: function () {
                        return c
                    }
                }], (l = null) && n(o.prototype, l), u && n(o, u), i
            }();
        return e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', (function (n) {
            "A" === n.currentTarget.tagName && n.preventDefault();
            var i = e(this), o = t.getSelectorFromElement(this), r = [].slice.call(document.querySelectorAll(o));
            e(r).each((function () {
                var t = e(this), n = t.data(a) ? "toggle" : i.data();
                u._jQueryInterface.call(t, n)
            }))
        })), e.fn[s] = u._jQueryInterface, e.fn[s].Constructor = u, e.fn[s].noConflict = function () {
            return e.fn[s] = l, u._jQueryInterface
        }, u
    }(n(1), n(3))
}, function (e, t, n) {
    e.exports = function (e, t, n) {
        "use strict";

        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(n), !0).forEach((function (t) {
                    o(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e, t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
        var a = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"], l = {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            }, c = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
            d = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

        function u(e, t, n) {
            if (0 === e.length) return e;
            if (n && "function" == typeof n) return n(e);
            for (var i = (new window.DOMParser).parseFromString(e, "text/html"), o = Object.keys(t), r = [].slice.call(i.body.querySelectorAll("*")), s = function (e, n) {
                var i = r[e], s = i.nodeName.toLowerCase();
                if (-1 === o.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
                var l = [].slice.call(i.attributes), u = [].concat(t["*"] || [], t[s] || []);
                l.forEach((function (e) {
                    (function (e, t) {
                        var n = e.nodeName.toLowerCase();
                        if (-1 !== t.indexOf(n)) return -1 === a.indexOf(n) || Boolean(e.nodeValue.match(c) || e.nodeValue.match(d));
                        for (var i = t.filter((function (e) {
                            return e instanceof RegExp
                        })), o = 0, r = i.length; o < r; o++) if (n.match(i[o])) return !0;
                        return !1
                    })(e, u) || i.removeAttribute(e.nodeName)
                }))
            }, l = 0, u = r.length; l < u; l++) s(l);
            return i.body.innerHTML
        }

        var p = "tooltip", f = ".bs.tooltip", h = e.fn[p], m = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
            g = ["sanitize", "whiteList", "sanitizeFn"], v = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string|function)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                whiteList: "object",
                popperConfig: "(null|object)"
            }, y = {AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"}, b = {
                animation: !0,
                template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                selector: !1,
                placement: "top",
                offset: 0,
                container: !1,
                fallbackPlacement: "flip",
                boundary: "scrollParent",
                sanitize: !0,
                sanitizeFn: null,
                whiteList: l,
                popperConfig: null
            }, w = {
                HIDE: "hide" + f,
                HIDDEN: "hidden" + f,
                SHOW: "show" + f,
                SHOWN: "shown" + f,
                INSERTED: "inserted" + f,
                CLICK: "click" + f,
                FOCUSIN: "focusin" + f,
                FOCUSOUT: "focusout" + f,
                MOUSEENTER: "mouseenter" + f,
                MOUSELEAVE: "mouseleave" + f
            }, x = function () {
                function o(e, n) {
                    if (void 0 === t) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                    this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(n), this.tip = null, this._setListeners()
                }

                var r, a, l, c = o.prototype;
                return c.enable = function () {
                    this._isEnabled = !0
                }, c.disable = function () {
                    this._isEnabled = !1
                }, c.toggleEnabled = function () {
                    this._isEnabled = !this._isEnabled
                }, c.toggle = function (t) {
                    if (this._isEnabled) if (t) {
                        var n = this.constructor.DATA_KEY, i = e(t.currentTarget).data(n);
                        i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                    } else {
                        if (e(this.getTipElement()).hasClass("show")) return void this._leave(null, this);
                        this._enter(null, this)
                    }
                }, c.dispose = function () {
                    clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                }, c.show = function () {
                    var i = this;
                    if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
                    var o = e.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        e(this.element).trigger(o);
                        var r = n.findShadowRoot(this.element),
                            s = e.contains(null !== r ? r : this.element.ownerDocument.documentElement, this.element);
                        if (o.isDefaultPrevented() || !s) return;
                        var a = this.getTipElement(), l = n.getUID(this.constructor.NAME);
                        a.setAttribute("id", l), this.element.setAttribute("aria-describedby", l), this.setContent(), this.config.animation && e(a).addClass("fade");
                        var c = "function" == typeof this.config.placement ? this.config.placement.call(this, a, this.element) : this.config.placement,
                            d = this._getAttachment(c);
                        this.addAttachmentClass(d);
                        var u = this._getContainer();
                        e(a).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(a).appendTo(u), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new t(this.element, a, this._getPopperConfig(d)), e(a).addClass("show"), "ontouchstart" in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);
                        var p = function () {
                            i.config.animation && i._fixTransition();
                            var t = i._hoverState;
                            i._hoverState = null, e(i.element).trigger(i.constructor.Event.SHOWN), "out" === t && i._leave(null, i)
                        };
                        if (e(this.tip).hasClass("fade")) {
                            var f = n.getTransitionDurationFromElement(this.tip);
                            e(this.tip).one(n.TRANSITION_END, p).emulateTransitionEnd(f)
                        } else p()
                    }
                }, c.hide = function (t) {
                    var i = this, o = this.getTipElement(), r = e.Event(this.constructor.Event.HIDE), s = function () {
                        "show" !== i._hoverState && o.parentNode && o.parentNode.removeChild(o), i._cleanTipClass(), i.element.removeAttribute("aria-describedby"), e(i.element).trigger(i.constructor.Event.HIDDEN), null !== i._popper && i._popper.destroy(), t && t()
                    };
                    if (e(this.element).trigger(r), !r.isDefaultPrevented()) {
                        if (e(o).removeClass("show"), "ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, e(this.tip).hasClass("fade")) {
                            var a = n.getTransitionDurationFromElement(o);
                            e(o).one(n.TRANSITION_END, s).emulateTransitionEnd(a)
                        } else s();
                        this._hoverState = ""
                    }
                }, c.update = function () {
                    null !== this._popper && this._popper.scheduleUpdate()
                }, c.isWithContent = function () {
                    return Boolean(this.getTitle())
                }, c.addAttachmentClass = function (t) {
                    e(this.getTipElement()).addClass("bs-tooltip-" + t)
                }, c.getTipElement = function () {
                    return this.tip = this.tip || e(this.config.template)[0], this.tip
                }, c.setContent = function () {
                    var t = this.getTipElement();
                    this.setElementContent(e(t.querySelectorAll(".tooltip-inner")), this.getTitle()), e(t).removeClass("fade show")
                }, c.setElementContent = function (t, n) {
                    "object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = u(n, this.config.whiteList, this.config.sanitizeFn)), t.html(n)) : t.text(n) : this.config.html ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text())
                }, c.getTitle = function () {
                    var e = this.element.getAttribute("data-original-title");
                    return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
                }, c._getPopperConfig = function (e) {
                    var t = this;
                    return s(s({}, {
                        placement: e,
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {behavior: this.config.fallbackPlacement},
                            arrow: {element: ".arrow"},
                            preventOverflow: {boundariesElement: this.config.boundary}
                        },
                        onCreate: function (e) {
                            e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                        },
                        onUpdate: function (e) {
                            return t._handlePopperPlacementChange(e)
                        }
                    }), this.config.popperConfig)
                }, c._getOffset = function () {
                    var e = this, t = {};
                    return "function" == typeof this.config.offset ? t.fn = function (t) {
                        return t.offsets = s(s({}, t.offsets), e.config.offset(t.offsets, e.element) || {}), t
                    } : t.offset = this.config.offset, t
                }, c._getContainer = function () {
                    return !1 === this.config.container ? document.body : n.isElement(this.config.container) ? e(this.config.container) : e(document).find(this.config.container)
                }, c._getAttachment = function (e) {
                    return y[e.toUpperCase()]
                }, c._setListeners = function () {
                    var t = this;
                    this.config.trigger.split(" ").forEach((function (n) {
                        if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, (function (e) {
                            return t.toggle(e)
                        })); else if ("manual" !== n) {
                            var i = "hover" === n ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                                o = "hover" === n ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                            e(t.element).on(i, t.config.selector, (function (e) {
                                return t._enter(e)
                            })).on(o, t.config.selector, (function (e) {
                                return t._leave(e)
                            }))
                        }
                    })), this._hideModalHandler = function () {
                        t.element && t.hide()
                    }, e(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = s(s({}, this.config), {}, {
                        trigger: "manual",
                        selector: ""
                    }) : this._fixTitle()
                }, c._fixTitle = function () {
                    var e = typeof this.element.getAttribute("data-original-title");
                    (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                }, c._enter = function (t, n) {
                    var i = this.constructor.DATA_KEY;
                    (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e(n.getTipElement()).hasClass("show") || "show" === n._hoverState ? n._hoverState = "show" : (clearTimeout(n._timeout), n._hoverState = "show", n.config.delay && n.config.delay.show ? n._timeout = setTimeout((function () {
                        "show" === n._hoverState && n.show()
                    }), n.config.delay.show) : n.show())
                }, c._leave = function (t, n) {
                    var i = this.constructor.DATA_KEY;
                    (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = "out", n.config.delay && n.config.delay.hide ? n._timeout = setTimeout((function () {
                        "out" === n._hoverState && n.hide()
                    }), n.config.delay.hide) : n.hide())
                }, c._isWithActiveTrigger = function () {
                    for (var e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
                    return !1
                }, c._getConfig = function (t) {
                    var i = e(this.element).data();
                    return Object.keys(i).forEach((function (e) {
                        -1 !== g.indexOf(e) && delete i[e]
                    })), "number" == typeof (t = s(s(s({}, this.constructor.Default), i), "object" == typeof t && t ? t : {})).delay && (t.delay = {
                        show: t.delay,
                        hide: t.delay
                    }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), n.typeCheckConfig(p, t, this.constructor.DefaultType), t.sanitize && (t.template = u(t.template, t.whiteList, t.sanitizeFn)), t
                }, c._getDelegateConfig = function () {
                    var e = {};
                    if (this.config) for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                    return e
                }, c._cleanTipClass = function () {
                    var t = e(this.getTipElement()), n = t.attr("class").match(m);
                    null !== n && n.length && t.removeClass(n.join(""))
                }, c._handlePopperPlacementChange = function (e) {
                    this.tip = e.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
                }, c._fixTransition = function () {
                    var t = this.getTipElement(), n = this.config.animation;
                    null === t.getAttribute("x-placement") && (e(t).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
                }, o._jQueryInterface = function (t) {
                    return this.each((function () {
                        var n = e(this).data("bs.tooltip"), i = "object" == typeof t && t;
                        if ((n || !/dispose|hide/.test(t)) && (n || (n = new o(this, i), e(this).data("bs.tooltip", n)), "string" == typeof t)) {
                            if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                            n[t]()
                        }
                    }))
                }, r = o, l = [{
                    key: "VERSION", get: function () {
                        return "4.5.0"
                    }
                }, {
                    key: "Default", get: function () {
                        return b
                    }
                }, {
                    key: "NAME", get: function () {
                        return p
                    }
                }, {
                    key: "DATA_KEY", get: function () {
                        return "bs.tooltip"
                    }
                }, {
                    key: "Event", get: function () {
                        return w
                    }
                }, {
                    key: "EVENT_KEY", get: function () {
                        return f
                    }
                }, {
                    key: "DefaultType", get: function () {
                        return v
                    }
                }], (a = null) && i(r.prototype, a), l && i(r, l), o
            }();
        return e.fn[p] = x._jQueryInterface, e.fn[p].Constructor = x, e.fn[p].noConflict = function () {
            return e.fn[p] = h, x._jQueryInterface
        }, x
    }(n(1), n(52), n(3))
}, function (e, t, n) {
    "use strict";
    n.r(t), function (e) {
        var n = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
            i = function () {
                for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1) if (n && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
                return 0
            }();
        var o = n && window.Promise ? function (e) {
            var t = !1;
            return function () {
                t || (t = !0, window.Promise.resolve().then((function () {
                    t = !1, e()
                })))
            }
        } : function (e) {
            var t = !1;
            return function () {
                t || (t = !0, setTimeout((function () {
                    t = !1, e()
                }), i))
            }
        };

        function r(e) {
            return e && "[object Function]" === {}.toString.call(e)
        }

        function s(e, t) {
            if (1 !== e.nodeType) return [];
            var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
            return t ? n[t] : n
        }

        function a(e) {
            return "HTML" === e.nodeName ? e : e.parentNode || e.host
        }

        function l(e) {
            if (!e) return document.body;
            switch (e.nodeName) {
                case"HTML":
                case"BODY":
                    return e.ownerDocument.body;
                case"#document":
                    return e.body
            }
            var t = s(e), n = t.overflow, i = t.overflowX, o = t.overflowY;
            return /(auto|scroll|overlay)/.test(n + o + i) ? e : l(a(e))
        }

        function c(e) {
            return e && e.referenceNode ? e.referenceNode : e
        }

        var d = n && !(!window.MSInputMethodContext || !document.documentMode),
            u = n && /MSIE 10/.test(navigator.userAgent);

        function p(e) {
            return 11 === e ? d : 10 === e ? u : d || u
        }

        function f(e) {
            if (!e) return document.documentElement;
            for (var t = p(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
            var i = n && n.nodeName;
            return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === s(n, "position") ? f(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
        }

        function h(e) {
            return null !== e.parentNode ? h(e.parentNode) : e
        }

        function m(e, t) {
            if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
            var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, i = n ? e : t, o = n ? t : e,
                r = document.createRange();
            r.setStart(i, 0), r.setEnd(o, 0);
            var s, a, l = r.commonAncestorContainer;
            if (e !== l && t !== l || i.contains(o)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && f(s.firstElementChild) !== s ? f(l) : l;
            var c = h(e);
            return c.host ? m(c.host, t) : m(e, h(t).host)
        }

        function g(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                n = "top" === t ? "scrollTop" : "scrollLeft", i = e.nodeName;
            if ("BODY" === i || "HTML" === i) {
                var o = e.ownerDocument.documentElement, r = e.ownerDocument.scrollingElement || o;
                return r[n]
            }
            return e[n]
        }

        function v(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = g(t, "top"), o = g(t, "left"),
                r = n ? -1 : 1;
            return e.top += i * r, e.bottom += i * r, e.left += o * r, e.right += o * r, e
        }

        function y(e, t) {
            var n = "x" === t ? "Left" : "Top", i = "Left" === n ? "Right" : "Bottom";
            return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + i + "Width"])
        }

        function b(e, t, n, i) {
            return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], p(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
        }

        function w(e) {
            var t = e.body, n = e.documentElement, i = p(10) && getComputedStyle(n);
            return {height: b("Height", t, n, i), width: b("Width", t, n, i)}
        }

        var x = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }, T = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            return function (t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(), C = function (e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }, k = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        };

        function S(e) {
            return k({}, e, {right: e.left + e.width, bottom: e.top + e.height})
        }

        function E(e) {
            var t = {};
            try {
                if (p(10)) {
                    t = e.getBoundingClientRect();
                    var n = g(e, "top"), i = g(e, "left");
                    t.top += n, t.left += i, t.bottom += n, t.right += i
                } else t = e.getBoundingClientRect()
            } catch (e) {
            }
            var o = {left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top},
                r = "HTML" === e.nodeName ? w(e.ownerDocument) : {}, a = r.width || e.clientWidth || o.width,
                l = r.height || e.clientHeight || o.height, c = e.offsetWidth - a, d = e.offsetHeight - l;
            if (c || d) {
                var u = s(e);
                c -= y(u, "x"), d -= y(u, "y"), o.width -= c, o.height -= d
            }
            return S(o)
        }

        function $(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = p(10),
                o = "HTML" === t.nodeName, r = E(e), a = E(t), c = l(e), d = s(t), u = parseFloat(d.borderTopWidth),
                f = parseFloat(d.borderLeftWidth);
            n && o && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
            var h = S({top: r.top - a.top - u, left: r.left - a.left - f, width: r.width, height: r.height});
            if (h.marginTop = 0, h.marginLeft = 0, !i && o) {
                var m = parseFloat(d.marginTop), g = parseFloat(d.marginLeft);
                h.top -= u - m, h.bottom -= u - m, h.left -= f - g, h.right -= f - g, h.marginTop = m, h.marginLeft = g
            }
            return (i && !n ? t.contains(c) : t === c && "BODY" !== c.nodeName) && (h = v(h, t)), h
        }

        function _(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = e.ownerDocument.documentElement, i = $(e, n), o = Math.max(n.clientWidth, window.innerWidth || 0),
                r = Math.max(n.clientHeight, window.innerHeight || 0), s = t ? 0 : g(n), a = t ? 0 : g(n, "left"),
                l = {top: s - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: o, height: r};
            return S(l)
        }

        function A(e) {
            var t = e.nodeName;
            if ("BODY" === t || "HTML" === t) return !1;
            if ("fixed" === s(e, "position")) return !0;
            var n = a(e);
            return !!n && A(n)
        }

        function O(e) {
            if (!e || !e.parentElement || p()) return document.documentElement;
            for (var t = e.parentElement; t && "none" === s(t, "transform");) t = t.parentElement;
            return t || document.documentElement
        }

        function D(e, t, n, i) {
            var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], r = {top: 0, left: 0},
                s = o ? O(e) : m(e, c(t));
            if ("viewport" === i) r = _(s, o); else {
                var d = void 0;
                "scrollParent" === i ? "BODY" === (d = l(a(t))).nodeName && (d = e.ownerDocument.documentElement) : d = "window" === i ? e.ownerDocument.documentElement : i;
                var u = $(d, s, o);
                if ("HTML" !== d.nodeName || A(s)) r = u; else {
                    var p = w(e.ownerDocument), f = p.height, h = p.width;
                    r.top += u.top - u.marginTop, r.bottom = f + u.top, r.left += u.left - u.marginLeft, r.right = h + u.left
                }
            }
            var g = "number" == typeof (n = n || 0);
            return r.left += g ? n : n.left || 0, r.top += g ? n : n.top || 0, r.right -= g ? n : n.right || 0, r.bottom -= g ? n : n.bottom || 0, r
        }

        function N(e) {
            return e.width * e.height
        }

        function j(e, t, n, i, o) {
            var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            if (-1 === e.indexOf("auto")) return e;
            var s = D(n, i, r, o), a = {
                top: {width: s.width, height: t.top - s.top},
                right: {width: s.right - t.right, height: s.height},
                bottom: {width: s.width, height: s.bottom - t.bottom},
                left: {width: t.left - s.left, height: s.height}
            }, l = Object.keys(a).map((function (e) {
                return k({key: e}, a[e], {area: N(a[e])})
            })).sort((function (e, t) {
                return t.area - e.area
            })), c = l.filter((function (e) {
                var t = e.width, i = e.height;
                return t >= n.clientWidth && i >= n.clientHeight
            })), d = c.length > 0 ? c[0].key : l[0].key, u = e.split("-")[1];
            return d + (u ? "-" + u : "")
        }

        function P(e, t, n) {
            var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, o = i ? O(t) : m(t, c(n));
            return $(n, o, i)
        }

        function I(e) {
            var t = e.ownerDocument.defaultView.getComputedStyle(e),
                n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
                i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
            return {width: e.offsetWidth + i, height: e.offsetHeight + n}
        }

        function L(e) {
            var t = {left: "right", right: "left", bottom: "top", top: "bottom"};
            return e.replace(/left|right|bottom|top/g, (function (e) {
                return t[e]
            }))
        }

        function M(e, t, n) {
            n = n.split("-")[0];
            var i = I(e), o = {width: i.width, height: i.height}, r = -1 !== ["right", "left"].indexOf(n),
                s = r ? "top" : "left", a = r ? "left" : "top", l = r ? "height" : "width", c = r ? "width" : "height";
            return o[s] = t[s] + t[l] / 2 - i[l] / 2, o[a] = n === a ? t[a] - i[c] : t[L(a)], o
        }

        function H(e, t) {
            return Array.prototype.find ? e.find(t) : e.filter(t)[0]
        }

        function R(e, t, n) {
            return (void 0 === n ? e : e.slice(0, function (e, t, n) {
                if (Array.prototype.findIndex) return e.findIndex((function (e) {
                    return e[t] === n
                }));
                var i = H(e, (function (e) {
                    return e[t] === n
                }));
                return e.indexOf(i)
            }(e, "name", n))).forEach((function (e) {
                e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                var n = e.function || e.fn;
                e.enabled && r(n) && (t.offsets.popper = S(t.offsets.popper), t.offsets.reference = S(t.offsets.reference), t = n(t, e))
            })), t
        }

        function q() {
            if (!this.state.isDestroyed) {
                var e = {instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {}};
                e.offsets.reference = P(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = j(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = M(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = R(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
            }
        }

        function F(e, t) {
            return e.some((function (e) {
                var n = e.name;
                return e.enabled && n === t
            }))
        }

        function z(e) {
            for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
                var o = t[i], r = o ? "" + o + n : e;
                if (void 0 !== document.body.style[r]) return r
            }
            return null
        }

        function B() {
            return this.state.isDestroyed = !0, F(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[z("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
        }

        function W(e) {
            var t = e.ownerDocument;
            return t ? t.defaultView : window
        }

        function V(e, t, n, i) {
            n.updateBound = i, W(e).addEventListener("resize", n.updateBound, {passive: !0});
            var o = l(e);
            return function e(t, n, i, o) {
                var r = "BODY" === t.nodeName, s = r ? t.ownerDocument.defaultView : t;
                s.addEventListener(n, i, {passive: !0}), r || e(l(s.parentNode), n, i, o), o.push(s)
            }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n
        }

        function U() {
            this.state.eventsEnabled || (this.state = V(this.reference, this.options, this.state, this.scheduleUpdate))
        }

        function Y() {
            var e, t;
            this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, W(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach((function (e) {
                e.removeEventListener("scroll", t.updateBound)
            })), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
        }

        function X(e) {
            return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
        }

        function Q(e, t) {
            Object.keys(t).forEach((function (n) {
                var i = "";
                -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && X(t[n]) && (i = "px"), e.style[n] = t[n] + i
            }))
        }

        var G = n && /Firefox/i.test(navigator.userAgent);

        function K(e, t, n) {
            var i = H(e, (function (e) {
                return e.name === t
            })), o = !!i && e.some((function (e) {
                return e.name === n && e.enabled && e.order < i.order
            }));
            if (!o) {
                var r = "`" + t + "`", s = "`" + n + "`";
                console.warn(s + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
            }
            return o
        }

        var J = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
            Z = J.slice(3);

        function ee(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = Z.indexOf(e),
                i = Z.slice(n + 1).concat(Z.slice(0, n));
            return t ? i.reverse() : i
        }

        var te = "flip", ne = "clockwise", ie = "counterclockwise";

        function oe(e, t, n, i) {
            var o = [0, 0], r = -1 !== ["right", "left"].indexOf(i), s = e.split(/(\+|\-)/).map((function (e) {
                return e.trim()
            })), a = s.indexOf(H(s, (function (e) {
                return -1 !== e.search(/,|\s/)
            })));
            s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
            var l = /\s*,\s*|\s+/,
                c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
            return (c = c.map((function (e, i) {
                var o = (1 === i ? !r : r) ? "height" : "width", s = !1;
                return e.reduce((function (e, t) {
                    return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, s = !0, e) : s ? (e[e.length - 1] += t, s = !1, e) : e.concat(t)
                }), []).map((function (e) {
                    return function (e, t, n, i) {
                        var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), r = +o[1], s = o[2];
                        if (!r) return e;
                        if (0 === s.indexOf("%")) {
                            var a = void 0;
                            switch (s) {
                                case"%p":
                                    a = n;
                                    break;
                                case"%":
                                case"%r":
                                default:
                                    a = i
                            }
                            return S(a)[t] / 100 * r
                        }
                        if ("vh" === s || "vw" === s) {
                            return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r
                        }
                        return r
                    }(e, o, t, n)
                }))
            }))).forEach((function (e, t) {
                e.forEach((function (n, i) {
                    X(n) && (o[t] += n * ("-" === e[i - 1] ? -1 : 1))
                }))
            })), o
        }

        var re = {
            placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () {
            }, onUpdate: function () {
            }, modifiers: {
                shift: {
                    order: 100, enabled: !0, fn: function (e) {
                        var t = e.placement, n = t.split("-")[0], i = t.split("-")[1];
                        if (i) {
                            var o = e.offsets, r = o.reference, s = o.popper, a = -1 !== ["bottom", "top"].indexOf(n),
                                l = a ? "left" : "top", c = a ? "width" : "height",
                                d = {start: C({}, l, r[l]), end: C({}, l, r[l] + r[c] - s[c])};
                            e.offsets.popper = k({}, s, d[i])
                        }
                        return e
                    }
                }, offset: {
                    order: 200, enabled: !0, fn: function (e, t) {
                        var n = t.offset, i = e.placement, o = e.offsets, r = o.popper, s = o.reference,
                            a = i.split("-")[0], l = void 0;
                        return l = X(+n) ? [+n, 0] : oe(n, r, s, a), "left" === a ? (r.top += l[0], r.left -= l[1]) : "right" === a ? (r.top += l[0], r.left += l[1]) : "top" === a ? (r.left += l[0], r.top -= l[1]) : "bottom" === a && (r.left += l[0], r.top += l[1]), e.popper = r, e
                    }, offset: 0
                }, preventOverflow: {
                    order: 300, enabled: !0, fn: function (e, t) {
                        var n = t.boundariesElement || f(e.instance.popper);
                        e.instance.reference === n && (n = f(n));
                        var i = z("transform"), o = e.instance.popper.style, r = o.top, s = o.left, a = o[i];
                        o.top = "", o.left = "", o[i] = "";
                        var l = D(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                        o.top = r, o.left = s, o[i] = a, t.boundaries = l;
                        var c = t.priority, d = e.offsets.popper, u = {
                            primary: function (e) {
                                var n = d[e];
                                return d[e] < l[e] && !t.escapeWithReference && (n = Math.max(d[e], l[e])), C({}, e, n)
                            }, secondary: function (e) {
                                var n = "right" === e ? "left" : "top", i = d[n];
                                return d[e] > l[e] && !t.escapeWithReference && (i = Math.min(d[n], l[e] - ("right" === e ? d.width : d.height))), C({}, n, i)
                            }
                        };
                        return c.forEach((function (e) {
                            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                            d = k({}, d, u[t](e))
                        })), e.offsets.popper = d, e
                    }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent"
                }, keepTogether: {
                    order: 400, enabled: !0, fn: function (e) {
                        var t = e.offsets, n = t.popper, i = t.reference, o = e.placement.split("-")[0], r = Math.floor,
                            s = -1 !== ["top", "bottom"].indexOf(o), a = s ? "right" : "bottom", l = s ? "left" : "top",
                            c = s ? "width" : "height";
                        return n[a] < r(i[l]) && (e.offsets.popper[l] = r(i[l]) - n[c]), n[l] > r(i[a]) && (e.offsets.popper[l] = r(i[a])), e
                    }
                }, arrow: {
                    order: 500, enabled: !0, fn: function (e, t) {
                        var n;
                        if (!K(e.instance.modifiers, "arrow", "keepTogether")) return e;
                        var i = t.element;
                        if ("string" == typeof i) {
                            if (!(i = e.instance.popper.querySelector(i))) return e
                        } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                        var o = e.placement.split("-")[0], r = e.offsets, a = r.popper, l = r.reference,
                            c = -1 !== ["left", "right"].indexOf(o), d = c ? "height" : "width", u = c ? "Top" : "Left",
                            p = u.toLowerCase(), f = c ? "left" : "top", h = c ? "bottom" : "right", m = I(i)[d];
                        l[h] - m < a[p] && (e.offsets.popper[p] -= a[p] - (l[h] - m)), l[p] + m > a[h] && (e.offsets.popper[p] += l[p] + m - a[h]), e.offsets.popper = S(e.offsets.popper);
                        var g = l[p] + l[d] / 2 - m / 2, v = s(e.instance.popper), y = parseFloat(v["margin" + u]),
                            b = parseFloat(v["border" + u + "Width"]), w = g - e.offsets.popper[p] - y - b;
                        return w = Math.max(Math.min(a[d] - m, w), 0), e.arrowElement = i, e.offsets.arrow = (C(n = {}, p, Math.round(w)), C(n, f, ""), n), e
                    }, element: "[x-arrow]"
                }, flip: {
                    order: 600,
                    enabled: !0,
                    fn: function (e, t) {
                        if (F(e.instance.modifiers, "inner")) return e;
                        if (e.flipped && e.placement === e.originalPlacement) return e;
                        var n = D(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                            i = e.placement.split("-")[0], o = L(i), r = e.placement.split("-")[1] || "", s = [];
                        switch (t.behavior) {
                            case te:
                                s = [i, o];
                                break;
                            case ne:
                                s = ee(i);
                                break;
                            case ie:
                                s = ee(i, !0);
                                break;
                            default:
                                s = t.behavior
                        }
                        return s.forEach((function (a, l) {
                            if (i !== a || s.length === l + 1) return e;
                            i = e.placement.split("-")[0], o = L(i);
                            var c = e.offsets.popper, d = e.offsets.reference, u = Math.floor,
                                p = "left" === i && u(c.right) > u(d.left) || "right" === i && u(c.left) < u(d.right) || "top" === i && u(c.bottom) > u(d.top) || "bottom" === i && u(c.top) < u(d.bottom),
                                f = u(c.left) < u(n.left), h = u(c.right) > u(n.right), m = u(c.top) < u(n.top),
                                g = u(c.bottom) > u(n.bottom),
                                v = "left" === i && f || "right" === i && h || "top" === i && m || "bottom" === i && g,
                                y = -1 !== ["top", "bottom"].indexOf(i),
                                b = !!t.flipVariations && (y && "start" === r && f || y && "end" === r && h || !y && "start" === r && m || !y && "end" === r && g),
                                w = !!t.flipVariationsByContent && (y && "start" === r && h || y && "end" === r && f || !y && "start" === r && g || !y && "end" === r && m),
                                x = b || w;
                            (p || v || x) && (e.flipped = !0, (p || v) && (i = s[l + 1]), x && (r = function (e) {
                                return "end" === e ? "start" : "start" === e ? "end" : e
                            }(r)), e.placement = i + (r ? "-" + r : ""), e.offsets.popper = k({}, e.offsets.popper, M(e.instance.popper, e.offsets.reference, e.placement)), e = R(e.instance.modifiers, e, "flip"))
                        })), e
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport",
                    flipVariations: !1,
                    flipVariationsByContent: !1
                }, inner: {
                    order: 700, enabled: !1, fn: function (e) {
                        var t = e.placement, n = t.split("-")[0], i = e.offsets, o = i.popper, r = i.reference,
                            s = -1 !== ["left", "right"].indexOf(n), a = -1 === ["top", "left"].indexOf(n);
                        return o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0), e.placement = L(t), e.offsets.popper = S(o), e
                    }
                }, hide: {
                    order: 800, enabled: !0, fn: function (e) {
                        if (!K(e.instance.modifiers, "hide", "preventOverflow")) return e;
                        var t = e.offsets.reference, n = H(e.instance.modifiers, (function (e) {
                            return "preventOverflow" === e.name
                        })).boundaries;
                        if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                            if (!0 === e.hide) return e;
                            e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === e.hide) return e;
                            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                        }
                        return e
                    }
                }, computeStyle: {
                    order: 850, enabled: !0, fn: function (e, t) {
                        var n = t.x, i = t.y, o = e.offsets.popper, r = H(e.instance.modifiers, (function (e) {
                            return "applyStyle" === e.name
                        })).gpuAcceleration;
                        void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var s = void 0 !== r ? r : t.gpuAcceleration, a = f(e.instance.popper), l = E(a),
                            c = {position: o.position}, d = function (e, t) {
                                var n = e.offsets, i = n.popper, o = n.reference, r = Math.round, s = Math.floor,
                                    a = function (e) {
                                        return e
                                    }, l = r(o.width), c = r(i.width), d = -1 !== ["left", "right"].indexOf(e.placement),
                                    u = -1 !== e.placement.indexOf("-"), p = t ? d || u || l % 2 == c % 2 ? r : s : a,
                                    f = t ? r : a;
                                return {
                                    left: p(l % 2 == 1 && c % 2 == 1 && !u && t ? i.left - 1 : i.left),
                                    top: f(i.top),
                                    bottom: f(i.bottom),
                                    right: p(i.right)
                                }
                            }(e, window.devicePixelRatio < 2 || !G), u = "bottom" === n ? "top" : "bottom",
                            p = "right" === i ? "left" : "right", h = z("transform"), m = void 0, g = void 0;
                        if (g = "bottom" === u ? "HTML" === a.nodeName ? -a.clientHeight + d.bottom : -l.height + d.bottom : d.top, m = "right" === p ? "HTML" === a.nodeName ? -a.clientWidth + d.right : -l.width + d.right : d.left, s && h) c[h] = "translate3d(" + m + "px, " + g + "px, 0)", c[u] = 0, c[p] = 0, c.willChange = "transform"; else {
                            var v = "bottom" === u ? -1 : 1, y = "right" === p ? -1 : 1;
                            c[u] = g * v, c[p] = m * y, c.willChange = u + ", " + p
                        }
                        var b = {"x-placement": e.placement};
                        return e.attributes = k({}, b, e.attributes), e.styles = k({}, c, e.styles), e.arrowStyles = k({}, e.offsets.arrow, e.arrowStyles), e
                    }, gpuAcceleration: !0, x: "bottom", y: "right"
                }, applyStyle: {
                    order: 900, enabled: !0, fn: function (e) {
                        var t, n;
                        return Q(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach((function (e) {
                            !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                        })), e.arrowElement && Object.keys(e.arrowStyles).length && Q(e.arrowElement, e.arrowStyles), e
                    }, onLoad: function (e, t, n, i, o) {
                        var r = P(o, t, e, n.positionFixed),
                            s = j(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return t.setAttribute("x-placement", s), Q(t, {position: n.positionFixed ? "fixed" : "absolute"}), n
                    }, gpuAcceleration: void 0
                }
            }
        }, se = function () {
            function e(t, n) {
                var i = this, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                x(this, e), this.scheduleUpdate = function () {
                    return requestAnimationFrame(i.update)
                }, this.update = o(this.update.bind(this)), this.options = k({}, e.Defaults, s), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(k({}, e.Defaults.modifiers, s.modifiers)).forEach((function (t) {
                    i.options.modifiers[t] = k({}, e.Defaults.modifiers[t] || {}, s.modifiers ? s.modifiers[t] : {})
                })), this.modifiers = Object.keys(this.options.modifiers).map((function (e) {
                    return k({name: e}, i.options.modifiers[e])
                })).sort((function (e, t) {
                    return e.order - t.order
                })), this.modifiers.forEach((function (e) {
                    e.enabled && r(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state)
                })), this.update();
                var a = this.options.eventsEnabled;
                a && this.enableEventListeners(), this.state.eventsEnabled = a
            }

            return T(e, [{
                key: "update", value: function () {
                    return q.call(this)
                }
            }, {
                key: "destroy", value: function () {
                    return B.call(this)
                }
            }, {
                key: "enableEventListeners", value: function () {
                    return U.call(this)
                }
            }, {
                key: "disableEventListeners", value: function () {
                    return Y.call(this)
                }
            }]), e
        }();
        se.Utils = ("undefined" != typeof window ? window : e).PopperUtils, se.placements = J, se.Defaults = re, t.default = se
    }.call(this, n(6))
}, function (e, t, n) {
    e.exports = function (e, t) {
        "use strict";

        function n(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e, t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
        var i = e.fn.tab, o = function () {
            function i(e) {
                this._element = e
            }

            var o, r, s, a = i.prototype;
            return a.show = function () {
                var n = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass("active") || e(this._element).hasClass("disabled"))) {
                    var i, o, r = e(this._element).closest(".nav, .list-group")[0],
                        s = t.getSelectorFromElement(this._element);
                    if (r) {
                        var a = "UL" === r.nodeName || "OL" === r.nodeName ? "> li > .active" : ".active";
                        o = (o = e.makeArray(e(r).find(a)))[o.length - 1]
                    }
                    var l = e.Event("hide.bs.tab", {relatedTarget: this._element}),
                        c = e.Event("show.bs.tab", {relatedTarget: o});
                    if (o && e(o).trigger(l), e(this._element).trigger(c), !c.isDefaultPrevented() && !l.isDefaultPrevented()) {
                        s && (i = document.querySelector(s)), this._activate(this._element, r);
                        var d = function () {
                            var t = e.Event("hidden.bs.tab", {relatedTarget: n._element}),
                                i = e.Event("shown.bs.tab", {relatedTarget: o});
                            e(o).trigger(t), e(n._element).trigger(i)
                        };
                        i ? this._activate(i, i.parentNode, d) : d()
                    }
                }
            }, a.dispose = function () {
                e.removeData(this._element, "bs.tab"), this._element = null
            }, a._activate = function (n, i, o) {
                var r = this,
                    s = (!i || "UL" !== i.nodeName && "OL" !== i.nodeName ? e(i).children(".active") : e(i).find("> li > .active"))[0],
                    a = o && s && e(s).hasClass("fade"), l = function () {
                        return r._transitionComplete(n, s, o)
                    };
                if (s && a) {
                    var c = t.getTransitionDurationFromElement(s);
                    e(s).removeClass("show").one(t.TRANSITION_END, l).emulateTransitionEnd(c)
                } else l()
            }, a._transitionComplete = function (n, i, o) {
                if (i) {
                    e(i).removeClass("active");
                    var r = e(i.parentNode).find("> .dropdown-menu .active")[0];
                    r && e(r).removeClass("active"), "tab" === i.getAttribute("role") && i.setAttribute("aria-selected", !1)
                }
                if (e(n).addClass("active"), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !0), t.reflow(n), n.classList.contains("fade") && n.classList.add("show"), n.parentNode && e(n.parentNode).hasClass("dropdown-menu")) {
                    var s = e(n).closest(".dropdown")[0];
                    if (s) {
                        var a = [].slice.call(s.querySelectorAll(".dropdown-toggle"));
                        e(a).addClass("active")
                    }
                    n.setAttribute("aria-expanded", !0)
                }
                o && o()
            }, i._jQueryInterface = function (t) {
                return this.each((function () {
                    var n = e(this), o = n.data("bs.tab");
                    if (o || (o = new i(this), n.data("bs.tab", o)), "string" == typeof t) {
                        if (void 0 === o[t]) throw new TypeError('No method named "' + t + '"');
                        o[t]()
                    }
                }))
            }, o = i, s = [{
                key: "VERSION", get: function () {
                    return "4.5.0"
                }
            }], (r = null) && n(o.prototype, r), s && n(o, s), i
        }();
        return e(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function (t) {
            t.preventDefault(), o._jQueryInterface.call(e(this), "show")
        })), e.fn.tab = o._jQueryInterface, e.fn.tab.Constructor = o, e.fn.tab.noConflict = function () {
            return e.fn.tab = i, o._jQueryInterface
        }, o
    }(n(1), n(3))
}, function (e, t, n) {
    e.exports = function (e, t) {
        "use strict";

        function n(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function r(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach((function (t) {
                    i(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e, t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
        var s = "scrollspy", a = e.fn[s], l = {offset: 10, method: "auto", target: ""},
            c = {offset: "number", method: "string", target: "(string|element)"}, d = function () {
                function i(t, n) {
                    var i = this;
                    this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(n), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on("scroll.bs.scrollspy", (function (e) {
                        return i._process(e)
                    })), this.refresh(), this._process()
                }

                var o, a, d, u = i.prototype;
                return u.refresh = function () {
                    var n = this, i = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                        o = "auto" === this._config.method ? i : this._config.method,
                        r = "position" === o ? this._getScrollTop() : 0;
                    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map((function (n) {
                        var i, s = t.getSelectorFromElement(n);
                        if (s && (i = document.querySelector(s)), i) {
                            var a = i.getBoundingClientRect();
                            if (a.width || a.height) return [e(i)[o]().top + r, s]
                        }
                        return null
                    })).filter((function (e) {
                        return e
                    })).sort((function (e, t) {
                        return e[0] - t[0]
                    })).forEach((function (e) {
                        n._offsets.push(e[0]), n._targets.push(e[1])
                    }))
                }, u.dispose = function () {
                    e.removeData(this._element, "bs.scrollspy"), e(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                }, u._getConfig = function (n) {
                    if ("string" != typeof (n = r(r({}, l), "object" == typeof n && n ? n : {})).target && t.isElement(n.target)) {
                        var i = e(n.target).attr("id");
                        i || (i = t.getUID(s), e(n.target).attr("id", i)), n.target = "#" + i
                    }
                    return t.typeCheckConfig(s, n, c), n
                }, u._getScrollTop = function () {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                }, u._getScrollHeight = function () {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }, u._getOffsetHeight = function () {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                }, u._process = function () {
                    var e = this._getScrollTop() + this._config.offset, t = this._getScrollHeight(),
                        n = this._config.offset + t - this._getOffsetHeight();
                    if (this._scrollHeight !== t && this.refresh(), e >= n) {
                        var i = this._targets[this._targets.length - 1];
                        this._activeTarget !== i && this._activate(i)
                    } else {
                        if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                        for (var o = this._offsets.length; o--;) this._activeTarget !== this._targets[o] && e >= this._offsets[o] && (void 0 === this._offsets[o + 1] || e < this._offsets[o + 1]) && this._activate(this._targets[o])
                    }
                }, u._activate = function (t) {
                    this._activeTarget = t, this._clear();
                    var n = this._selector.split(",").map((function (e) {
                        return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                    })), i = e([].slice.call(document.querySelectorAll(n.join(","))));
                    i.hasClass("dropdown-item") ? (i.closest(".dropdown").find(".dropdown-toggle").addClass("active"), i.addClass("active")) : (i.addClass("active"), i.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"), i.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")), e(this._scrollElement).trigger("activate.bs.scrollspy", {relatedTarget: t})
                }, u._clear = function () {
                    [].slice.call(document.querySelectorAll(this._selector)).filter((function (e) {
                        return e.classList.contains("active")
                    })).forEach((function (e) {
                        return e.classList.remove("active")
                    }))
                }, i._jQueryInterface = function (t) {
                    return this.each((function () {
                        var n = e(this).data("bs.scrollspy");
                        if (n || (n = new i(this, "object" == typeof t && t), e(this).data("bs.scrollspy", n)), "string" == typeof t) {
                            if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                            n[t]()
                        }
                    }))
                }, o = i, d = [{
                    key: "VERSION", get: function () {
                        return "4.5.0"
                    }
                }, {
                    key: "Default", get: function () {
                        return l
                    }
                }], (a = null) && n(o.prototype, a), d && n(o, d), i
            }();
        return e(window).on("load.bs.scrollspy.data-api", (function () {
            for (var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), n = t.length; n--;) {
                var i = e(t[n]);
                d._jQueryInterface.call(i, i.data())
            }
        })), e.fn[s] = d._jQueryInterface, e.fn[s].Constructor = d, e.fn[s].noConflict = function () {
            return e.fn[s] = a, d._jQueryInterface
        }, d
    }(n(1), n(3))
}, function (e, t, n) {
    var i, o, r;
    o = [n(1)], void 0 === (r = "function" == typeof (i = function (e) {
        e.extend(e.fn, {
            validate: function (t) {
                if (this.length) {
                    var n = e.data(this[0], "validator");
                    return n || (this.attr("novalidate", "novalidate"), n = new e.validator(t, this[0]), e.data(this[0], "validator", n), n.settings.onsubmit && (this.on("click.validate", ":submit", (function (t) {
                        n.submitButton = t.currentTarget, e(this).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== e(this).attr("formnovalidate") && (n.cancelSubmit = !0)
                    })), this.on("submit.validate", (function (t) {
                        function i() {
                            var i, o;
                            return n.submitButton && (n.settings.submitHandler || n.formSubmitted) && (i = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm)), !(n.settings.submitHandler && !n.settings.debug) || (o = n.settings.submitHandler.call(n, n.currentForm, t), i && i.remove(), void 0 !== o && o)
                        }

                        return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : i() : (n.focusInvalid(), !1)
                    }))), n)
                }
                t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
            }, valid: function () {
                var t, n, i;
                return e(this[0]).is("form") ? t = this.validate().form() : (i = [], t = !0, n = e(this[0].form).validate(), this.each((function () {
                    (t = n.element(this) && t) || (i = i.concat(n.errorList))
                })), n.errorList = i), t
            }, rules: function (t, n) {
                var i, o, r, s, a, l, c = this[0],
                    d = void 0 !== this.attr("contenteditable") && "false" !== this.attr("contenteditable");
                if (null != c && (!c.form && d && (c.form = this.closest("form")[0], c.name = this.attr("name")), null != c.form)) {
                    if (t) switch (o = (i = e.data(c.form, "validator").settings).rules, r = e.validator.staticRules(c), t) {
                        case"add":
                            e.extend(r, e.validator.normalizeRule(n)), delete r.messages, o[c.name] = r, n.messages && (i.messages[c.name] = e.extend(i.messages[c.name], n.messages));
                            break;
                        case"remove":
                            return n ? (l = {}, e.each(n.split(/\s/), (function (e, t) {
                                l[t] = r[t], delete r[t]
                            })), l) : (delete o[c.name], r)
                    }
                    return (s = e.validator.normalizeRules(e.extend({}, e.validator.classRules(c), e.validator.attributeRules(c), e.validator.dataRules(c), e.validator.staticRules(c)), c)).required && (a = s.required, delete s.required, s = e.extend({required: a}, s)), s.remote && (a = s.remote, delete s.remote, s = e.extend(s, {remote: a})), s
                }
            }
        });
        var t, n = function (e) {
            return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        };
        e.extend(e.expr.pseudos || e.expr[":"], {
            blank: function (t) {
                return !n("" + e(t).val())
            }, filled: function (t) {
                var i = e(t).val();
                return null !== i && !!n("" + i)
            }, unchecked: function (t) {
                return !e(t).prop("checked")
            }
        }), e.validator = function (t, n) {
            this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = n, this.init()
        }, e.validator.format = function (t, n) {
            return 1 === arguments.length ? function () {
                var n = e.makeArray(arguments);
                return n.unshift(t), e.validator.format.apply(this, n)
            } : (void 0 === n || (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), e.each(n, (function (e, n) {
                t = t.replace(new RegExp("\\{" + e + "\\}", "g"), (function () {
                    return n
                }))
            }))), t)
        }, e.extend(e.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                pendingClass: "pending",
                validClass: "valid",
                errorElement: "label",
                focusCleanup: !1,
                focusInvalid: !0,
                errorContainer: e([]),
                errorLabelContainer: e([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function (e) {
                    this.lastActive = e, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)))
                },
                onfocusout: function (e) {
                    this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
                },
                onkeyup: function (t, n) {
                    9 === n.which && "" === this.elementValue(t) || -1 !== e.inArray(n.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (t.name in this.submitted || t.name in this.invalid) && this.element(t)
                },
                onclick: function (e) {
                    e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
                },
                highlight: function (t, n, i) {
                    "radio" === t.type ? this.findByName(t.name).addClass(n).removeClass(i) : e(t).addClass(n).removeClass(i)
                },
                unhighlight: function (t, n, i) {
                    "radio" === t.type ? this.findByName(t.name).removeClass(n).addClass(i) : e(t).removeClass(n).addClass(i)
                }
            },
            setDefaults: function (t) {
                e.extend(e.validator.defaults, t)
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date (ISO).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                equalTo: "Please enter the same value again.",
                maxlength: e.validator.format("Please enter no more than {0} characters."),
                minlength: e.validator.format("Please enter at least {0} characters."),
                rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
                range: e.validator.format("Please enter a value between {0} and {1}."),
                max: e.validator.format("Please enter a value less than or equal to {0}."),
                min: e.validator.format("Please enter a value greater than or equal to {0}."),
                step: e.validator.format("Please enter a multiple of {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function () {
                    this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var t, n = this.currentForm, i = this.groups = {};

                    function o(t) {
                        var i = void 0 !== e(this).attr("contenteditable") && "false" !== e(this).attr("contenteditable");
                        if (!this.form && i && (this.form = e(this).closest("form")[0], this.name = e(this).attr("name")), n === this.form) {
                            var o = e.data(this.form, "validator"), r = "on" + t.type.replace(/^validate/, ""),
                                s = o.settings;
                            s[r] && !e(this).is(s.ignore) && s[r].call(o, this, t)
                        }
                    }

                    e.each(this.settings.groups, (function (t, n) {
                        "string" == typeof n && (n = n.split(/\s/)), e.each(n, (function (e, n) {
                            i[n] = t
                        }))
                    })), t = this.settings.rules, e.each(t, (function (n, i) {
                        t[n] = e.validator.normalizeRule(i)
                    })), e(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", o).on("click.validate", "select, option, [type='radio'], [type='checkbox']", o), this.settings.invalidHandler && e(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
                }, form: function () {
                    return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                }, checkForm: function () {
                    this.prepareForm();
                    for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
                    return this.valid()
                }, element: function (t) {
                    var n, i, o = this.clean(t), r = this.validationTargetFor(o), s = this, a = !0;
                    return void 0 === r ? delete this.invalid[o.name] : (this.prepareElement(r), this.currentElements = e(r), (i = this.groups[r.name]) && e.each(this.groups, (function (e, t) {
                        t === i && e !== r.name && (o = s.validationTargetFor(s.clean(s.findByName(e)))) && o.name in s.invalid && (s.currentElements.push(o), a = s.check(o) && a)
                    })), n = !1 !== this.check(r), a = a && n, this.invalid[r.name] = !n, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e(t).attr("aria-invalid", !n)), a
                }, showErrors: function (t) {
                    if (t) {
                        var n = this;
                        e.extend(this.errorMap, t), this.errorList = e.map(this.errorMap, (function (e, t) {
                            return {message: e, element: n.findByName(t)[0]}
                        })), this.successList = e.grep(this.successList, (function (e) {
                            return !(e.name in t)
                        }))
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                }, resetForm: function () {
                    e.fn.resetForm && e(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                    var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                    this.resetElements(t)
                }, resetElements: function (e) {
                    var t;
                    if (this.settings.unhighlight) for (t = 0; e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""), this.findByName(e[t].name).removeClass(this.settings.validClass); else e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
                }, numberOfInvalids: function () {
                    return this.objectLength(this.invalid)
                }, objectLength: function (e) {
                    var t, n = 0;
                    for (t in e) void 0 !== e[t] && null !== e[t] && !1 !== e[t] && n++;
                    return n
                }, hideErrors: function () {
                    this.hideThese(this.toHide)
                }, hideThese: function (e) {
                    e.not(this.containers).text(""), this.addWrapper(e).hide()
                }, valid: function () {
                    return 0 === this.size()
                }, size: function () {
                    return this.errorList.length
                }, focusInvalid: function () {
                    if (this.settings.focusInvalid) try {
                        e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").trigger("focus").trigger("focusin")
                    } catch (e) {
                    }
                }, findLastActive: function () {
                    var t = this.lastActive;
                    return t && 1 === e.grep(this.errorList, (function (e) {
                        return e.element.name === t.name
                    })).length && t
                }, elements: function () {
                    var t = this, n = {};
                    return e(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter((function () {
                        var i = this.name || e(this).attr("name"),
                            o = void 0 !== e(this).attr("contenteditable") && "false" !== e(this).attr("contenteditable");
                        return !i && t.settings.debug && window.console && console.error("%o has no name assigned", this), o && (this.form = e(this).closest("form")[0], this.name = i), !(this.form !== t.currentForm || i in n || !t.objectLength(e(this).rules()) || (n[i] = !0, 0))
                    }))
                }, clean: function (t) {
                    return e(t)[0]
                }, errors: function () {
                    var t = this.settings.errorClass.split(" ").join(".");
                    return e(this.settings.errorElement + "." + t, this.errorContext)
                }, resetInternals: function () {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([])
                }, reset: function () {
                    this.resetInternals(), this.currentElements = e([])
                }, prepareForm: function () {
                    this.reset(), this.toHide = this.errors().add(this.containers)
                }, prepareElement: function (e) {
                    this.reset(), this.toHide = this.errorsFor(e)
                }, elementValue: function (t) {
                    var n, i, o = e(t), r = t.type,
                        s = void 0 !== o.attr("contenteditable") && "false" !== o.attr("contenteditable");
                    return "radio" === r || "checkbox" === r ? this.findByName(t.name).filter(":checked").val() : "number" === r && void 0 !== t.validity ? t.validity.badInput ? "NaN" : o.val() : (n = s ? o.text() : o.val(), "file" === r ? "C:\\fakepath\\" === n.substr(0, 12) ? n.substr(12) : (i = n.lastIndexOf("/")) >= 0 || (i = n.lastIndexOf("\\")) >= 0 ? n.substr(i + 1) : n : "string" == typeof n ? n.replace(/\r/g, "") : n)
                }, check: function (t) {
                    t = this.validationTargetFor(this.clean(t));
                    var n, i, o, r, s = e(t).rules(), a = e.map(s, (function (e, t) {
                        return t
                    })).length, l = !1, c = this.elementValue(t);
                    for (i in "function" == typeof s.normalizer ? r = s.normalizer : "function" == typeof this.settings.normalizer && (r = this.settings.normalizer), r && (c = r.call(t, c), delete s.normalizer), s) {
                        o = {method: i, parameters: s[i]};
                        try {
                            if ("dependency-mismatch" === (n = e.validator.methods[i].call(this, c, t, o.parameters)) && 1 === a) {
                                l = !0;
                                continue
                            }
                            if (l = !1, "pending" === n) return void (this.toHide = this.toHide.not(this.errorsFor(t)));
                            if (!n) return this.formatAndAdd(t, o), !1
                        } catch (e) {
                            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + o.method + "' method.", e), e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + o.method + "' method."), e
                        }
                    }
                    if (!l) return this.objectLength(s) && this.successList.push(t), !0
                }, customDataMessage: function (t, n) {
                    return e(t).data("msg" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()) || e(t).data("msg")
                }, customMessage: function (e, t) {
                    var n = this.settings.messages[e];
                    return n && (n.constructor === String ? n : n[t])
                }, findDefined: function () {
                    for (var e = 0; e < arguments.length; e++) if (void 0 !== arguments[e]) return arguments[e]
                }, defaultMessage: function (t, n) {
                    "string" == typeof n && (n = {method: n});
                    var i = this.findDefined(this.customMessage(t.name, n.method), this.customDataMessage(t, n.method), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[n.method], "<strong>Warning: No message defined for " + t.name + "</strong>"),
                        o = /\$?\{(\d+)\}/g;
                    return "function" == typeof i ? i = i.call(this, n.parameters, t) : o.test(i) && (i = e.validator.format(i.replace(o, "{$1}"), n.parameters)), i
                }, formatAndAdd: function (e, t) {
                    var n = this.defaultMessage(e, t);
                    this.errorList.push({
                        message: n,
                        element: e,
                        method: t.method
                    }), this.errorMap[e.name] = n, this.submitted[e.name] = n
                }, addWrapper: function (e) {
                    return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
                }, defaultShowErrors: function () {
                    var e, t, n;
                    for (e = 0; this.errorList[e]; e++) n = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
                    if (this.settings.unhighlight) for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                }, validElements: function () {
                    return this.currentElements.not(this.invalidElements())
                }, invalidElements: function () {
                    return e(this.errorList).map((function () {
                        return this.element
                    }))
                }, showLabel: function (t, n) {
                    var i, o, r, s, a = this.errorsFor(t), l = this.idOrName(t), c = e(t).attr("aria-describedby");
                    a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass), a.html(n)) : (i = a = e("<" + this.settings.errorElement + ">").attr("id", l + "-error").addClass(this.settings.errorClass).html(n || ""), this.settings.wrapper && (i = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, i, e(t)) : i.insertAfter(t), a.is("label") ? a.attr("for", l) : 0 === a.parents("label[for='" + this.escapeCssMeta(l) + "']").length && (r = a.attr("id"), c ? c.match(new RegExp("\\b" + this.escapeCssMeta(r) + "\\b")) || (c += " " + r) : c = r, e(t).attr("aria-describedby", c), (o = this.groups[t.name]) && (s = this, e.each(s.groups, (function (t, n) {
                        n === o && e("[name='" + s.escapeCssMeta(t) + "']", s.currentForm).attr("aria-describedby", a.attr("id"))
                    }))))), !n && this.settings.success && (a.text(""), "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, t)), this.toShow = this.toShow.add(a)
                }, errorsFor: function (t) {
                    var n = this.escapeCssMeta(this.idOrName(t)), i = e(t).attr("aria-describedby"),
                        o = "label[for='" + n + "'], label[for='" + n + "'] *";
                    return i && (o = o + ", #" + this.escapeCssMeta(i).replace(/\s+/g, ", #")), this.errors().filter(o)
                }, escapeCssMeta: function (e) {
                    return e.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
                }, idOrName: function (e) {
                    return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
                }, validationTargetFor: function (t) {
                    return this.checkable(t) && (t = this.findByName(t.name)), e(t).not(this.settings.ignore)[0]
                }, checkable: function (e) {
                    return /radio|checkbox/i.test(e.type)
                }, findByName: function (t) {
                    return e(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']")
                }, getLength: function (t, n) {
                    switch (n.nodeName.toLowerCase()) {
                        case"select":
                            return e("option:selected", n).length;
                        case"input":
                            if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length
                    }
                    return t.length
                }, depend: function (e, t) {
                    return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t)
                }, dependTypes: {
                    boolean: function (e) {
                        return e
                    }, string: function (t, n) {
                        return !!e(t, n.form).length
                    }, function: function (e, t) {
                        return e(t)
                    }
                }, optional: function (t) {
                    var n = this.elementValue(t);
                    return !e.validator.methods.required.call(this, n, t) && "dependency-mismatch"
                }, startRequest: function (t) {
                    this.pending[t.name] || (this.pendingRequest++, e(t).addClass(this.settings.pendingClass), this.pending[t.name] = !0)
                }, stopRequest: function (t, n) {
                    this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], e(t).removeClass(this.settings.pendingClass), n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.submitButton && e("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                }, previousValue: function (t, n) {
                    return n = "string" == typeof n && n || "remote", e.data(t, "previousValue") || e.data(t, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(t, {method: n})
                    })
                }, destroy: function () {
                    this.resetForm(), e(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")
                }
            },
            classRuleSettings: {
                required: {required: !0},
                email: {email: !0},
                url: {url: !0},
                date: {date: !0},
                dateISO: {dateISO: !0},
                number: {number: !0},
                digits: {digits: !0},
                creditcard: {creditcard: !0}
            },
            addClassRules: function (t, n) {
                t.constructor === String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t)
            },
            classRules: function (t) {
                var n = {}, i = e(t).attr("class");
                return i && e.each(i.split(" "), (function () {
                    this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this])
                })), n
            },
            normalizeAttributeRule: function (e, t, n, i) {
                /min|max|step/.test(n) && (null === t || /number|range|text/.test(t)) && (i = Number(i), isNaN(i) && (i = void 0)), i || 0 === i ? e[n] = i : t === n && "range" !== t && (e[n] = !0)
            },
            attributeRules: function (t) {
                var n, i, o = {}, r = e(t), s = t.getAttribute("type");
                for (n in e.validator.methods) "required" === n ? ("" === (i = t.getAttribute(n)) && (i = !0), i = !!i) : i = r.attr(n), this.normalizeAttributeRule(o, s, n, i);
                return o.maxlength && /-1|2147483647|524288/.test(o.maxlength) && delete o.maxlength, o
            },
            dataRules: function (t) {
                var n, i, o = {}, r = e(t), s = t.getAttribute("type");
                for (n in e.validator.methods) "" === (i = r.data("rule" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase())) && (i = !0), this.normalizeAttributeRule(o, s, n, i);
                return o
            },
            staticRules: function (t) {
                var n = {}, i = e.data(t.form, "validator");
                return i.settings.rules && (n = e.validator.normalizeRule(i.settings.rules[t.name]) || {}), n
            },
            normalizeRules: function (t, n) {
                return e.each(t, (function (i, o) {
                    if (!1 !== o) {
                        if (o.param || o.depends) {
                            var r = !0;
                            switch (typeof o.depends) {
                                case"string":
                                    r = !!e(o.depends, n.form).length;
                                    break;
                                case"function":
                                    r = o.depends.call(n, n)
                            }
                            r ? t[i] = void 0 === o.param || o.param : (e.data(n.form, "validator").resetElements(e(n)), delete t[i])
                        }
                    } else delete t[i]
                })), e.each(t, (function (i, o) {
                    t[i] = e.isFunction(o) && "normalizer" !== i ? o(n) : o
                })), e.each(["minlength", "maxlength"], (function () {
                    t[this] && (t[this] = Number(t[this]))
                })), e.each(["rangelength", "range"], (function () {
                    var n;
                    t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (n = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/), t[this] = [Number(n[0]), Number(n[1])]))
                })), e.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
            },
            normalizeRule: function (t) {
                if ("string" == typeof t) {
                    var n = {};
                    e.each(t.split(/\s/), (function () {
                        n[this] = !0
                    })), t = n
                }
                return t
            },
            addMethod: function (t, n, i) {
                e.validator.methods[t] = n, e.validator.messages[t] = void 0 !== i ? i : e.validator.messages[t], n.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t))
            },
            methods: {
                required: function (t, n, i) {
                    if (!this.depend(i, n)) return "dependency-mismatch";
                    if ("select" === n.nodeName.toLowerCase()) {
                        var o = e(n).val();
                        return o && o.length > 0
                    }
                    return this.checkable(n) ? this.getLength(t, n) > 0 : null != t && t.length > 0
                }, email: function (e, t) {
                    return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
                }, url: function (e, t) {
                    return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(e)
                }, date: (t = !1, function (e, n) {
                    return t || (t = !0, this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")), this.optional(n) || !/Invalid|NaN/.test(new Date(e).toString())
                }), dateISO: function (e, t) {
                    return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
                }, number: function (e, t) {
                    return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
                }, digits: function (e, t) {
                    return this.optional(t) || /^\d+$/.test(e)
                }, minlength: function (t, n, i) {
                    var o = e.isArray(t) ? t.length : this.getLength(t, n);
                    return this.optional(n) || o >= i
                }, maxlength: function (t, n, i) {
                    var o = e.isArray(t) ? t.length : this.getLength(t, n);
                    return this.optional(n) || o <= i
                }, rangelength: function (t, n, i) {
                    var o = e.isArray(t) ? t.length : this.getLength(t, n);
                    return this.optional(n) || o >= i[0] && o <= i[1]
                }, min: function (e, t, n) {
                    return this.optional(t) || e >= n
                }, max: function (e, t, n) {
                    return this.optional(t) || e <= n
                }, range: function (e, t, n) {
                    return this.optional(t) || e >= n[0] && e <= n[1]
                }, step: function (t, n, i) {
                    var o, r = e(n).attr("type"), s = "Step attribute on input type " + r + " is not supported.",
                        a = new RegExp("\\b" + r + "\\b"), l = function (e) {
                            var t = ("" + e).match(/(?:\.(\d+))?$/);
                            return t && t[1] ? t[1].length : 0
                        }, c = function (e) {
                            return Math.round(e * Math.pow(10, o))
                        }, d = !0;
                    if (r && !a.test(["text", "number", "range"].join())) throw new Error(s);
                    return o = l(i), (l(t) > o || c(t) % c(i) != 0) && (d = !1), this.optional(n) || d
                }, equalTo: function (t, n, i) {
                    var o = e(i);
                    return this.settings.onfocusout && o.not(".validate-equalTo-blur").length && o.addClass("validate-equalTo-blur").on("blur.validate-equalTo", (function () {
                        e(n).valid()
                    })), t === o.val()
                }, remote: function (t, n, i, o) {
                    if (this.optional(n)) return "dependency-mismatch";
                    o = "string" == typeof o && o || "remote";
                    var r, s, a, l = this.previousValue(n, o);
                    return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), l.originalMessage = l.originalMessage || this.settings.messages[n.name][o], this.settings.messages[n.name][o] = l.message, i = "string" == typeof i && {url: i} || i, a = e.param(e.extend({data: t}, i.data)), l.old === a ? l.valid : (l.old = a, r = this, this.startRequest(n), (s = {})[n.name] = t, e.ajax(e.extend(!0, {
                        mode: "abort",
                        port: "validate" + n.name,
                        dataType: "json",
                        data: s,
                        context: r.currentForm,
                        success: function (e) {
                            var i, s, a, c = !0 === e || "true" === e;
                            r.settings.messages[n.name][o] = l.originalMessage, c ? (a = r.formSubmitted, r.resetInternals(), r.toHide = r.errorsFor(n), r.formSubmitted = a, r.successList.push(n), r.invalid[n.name] = !1, r.showErrors()) : (i = {}, s = e || r.defaultMessage(n, {
                                method: o,
                                parameters: t
                            }), i[n.name] = l.message = s, r.invalid[n.name] = !0, r.showErrors(i)), l.valid = c, r.stopRequest(n, c)
                        }
                    }, i)), "pending")
                }
            }
        });
        var i, o = {};
        return e.ajaxPrefilter ? e.ajaxPrefilter((function (e, t, n) {
            var i = e.port;
            "abort" === e.mode && (o[i] && o[i].abort(), o[i] = n)
        })) : (i = e.ajax, e.ajax = function (t) {
            var n = ("mode" in t ? t : e.ajaxSettings).mode, r = ("port" in t ? t : e.ajaxSettings).port;
            return "abort" === n ? (o[r] && o[r].abort(), o[r] = i.apply(this, arguments), o[r]) : i.apply(this, arguments)
        }), e
    }) ? i.apply(t, o) : i) || (e.exports = r)
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function () {
        function e(e, t) {
            if (void 0 === e && (e = null), void 0 === t && (t = {}), this.apiKey = e, this.options = t, "undefined" == typeof window) throw new Error("google-maps is supported only in browser environment")
        }

        return e.prototype.load = function () {
            var t = this;
            return void 0 !== this.api ? Promise.resolve(this.api) : void 0 !== this.loader ? this.loader : (window[e.CALLBACK_NAME] = function () {
                if (t.api = window.google, void 0 === t.resolve) throw new Error("Should not happen");
                t.resolve(t.api)
            }, window.gm_authFailure = function () {
                if (void 0 === t.reject) throw new Error("Should not happen");
                t.reject(new Error("google-maps: authentication error"))
            }, this.loader = new Promise((function (e, n) {
                t.resolve = e, t.reject = n;
                var i = document.createElement("script");
                i.src = t.createUrl(), i.async = !0, i.onerror = function (e) {
                    return n(e)
                }, document.head.appendChild(i)
            })))
        }, e.prototype.createUrl = function () {
            var t = ["callback=" + e.CALLBACK_NAME];
            for (var n in this.apiKey && t.push("key=" + this.apiKey), this.options) if (this.options.hasOwnProperty(n)) {
                var i = this.options[n];
                "version" === n && (n = "v"), "libraries" === n && (i = i.join(",")), t.push(n + "=" + i)
            }
            return "//maps.googleapis.com/maps/api/js?" + t.join("&")
        }, e.CALLBACK_NAME = "_dk_google_maps_loader_cb", e
    }();
    t.Loader = i
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(26), o = n.n(i), r = n(0);
    const {navigator: s} = r.window,
        a = -1 < s.userAgent.indexOf("MSIE ") || -1 < s.userAgent.indexOf("Trident/") || -1 < s.userAgent.indexOf("Edge/"),
        l = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(s.userAgent), c = (() => {
            const e = "transform WebkitTransform MozTransform".split(" "), t = document.createElement("div");
            for (let n = 0; n < e.length; n += 1) if (t && void 0 !== t.style[e[n]]) return e[n];
            return !1
        })();
    let d, u;

    function p() {
        l ? (!d && document.body && (d = document.createElement("div"), d.style.cssText = "position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;", document.body.appendChild(d)), u = (d ? d.clientHeight : 0) || r.window.innerHeight || document.documentElement.clientHeight) : u = r.window.innerHeight || document.documentElement.clientHeight
    }

    p(), r.window.addEventListener("resize", p), r.window.addEventListener("orientationchange", p), r.window.addEventListener("load", p), o()(() => {
        p()
    });
    const f = [];

    function h() {
        f.length && (f.forEach((e, t) => {
            const {instance: n, oldData: i} = e, o = n.$item.getBoundingClientRect(), s = {
                    width: o.width,
                    height: o.height,
                    top: o.top,
                    bottom: o.bottom,
                    wndW: r.window.innerWidth,
                    wndH: u
                }, a = !i || i.wndW !== s.wndW || i.wndH !== s.wndH || i.width !== s.width || i.height !== s.height,
                l = a || !i || i.top !== s.top || i.bottom !== s.bottom;
            f[t].oldData = s, a && n.onResize(), l && n.onScroll()
        }), r.window.requestAnimationFrame(h))
    }

    let m = 0;

    class g {
        constructor(e, t) {
            const n = this;
            n.instanceID = m, m += 1, n.$item = e, n.defaults = {
                type: "scroll",
                speed: .5,
                imgSrc: null,
                imgElement: ".jarallax-img",
                imgSize: "cover",
                imgPosition: "50% 50%",
                imgRepeat: "no-repeat",
                keepImg: !1,
                elementInViewport: null,
                zIndex: -100,
                disableParallax: !1,
                disableVideo: !1,
                videoSrc: null,
                videoStartTime: 0,
                videoEndTime: 0,
                videoVolume: 0,
                videoLoop: !0,
                videoPlayOnlyVisible: !0,
                videoLazyLoading: !0,
                onScroll: null,
                onInit: null,
                onDestroy: null,
                onCoverImage: null
            };
            const i = n.$item.dataset || {}, o = {};
            if (Object.keys(i).forEach(e => {
                const t = e.substr(0, 1).toLowerCase() + e.substr(1);
                t && void 0 !== n.defaults[t] && (o[t] = i[e])
            }), n.options = n.extend({}, n.defaults, o, t), n.pureOptions = n.extend({}, n.options), Object.keys(n.options).forEach(e => {
                "true" === n.options[e] ? n.options[e] = !0 : "false" === n.options[e] && (n.options[e] = !1)
            }), n.options.speed = Math.min(2, Math.max(-1, parseFloat(n.options.speed))), "string" == typeof n.options.disableParallax && (n.options.disableParallax = new RegExp(n.options.disableParallax)), n.options.disableParallax instanceof RegExp) {
                const e = n.options.disableParallax;
                n.options.disableParallax = () => e.test(s.userAgent)
            }
            if ("function" != typeof n.options.disableParallax && (n.options.disableParallax = () => !1), "string" == typeof n.options.disableVideo && (n.options.disableVideo = new RegExp(n.options.disableVideo)), n.options.disableVideo instanceof RegExp) {
                const e = n.options.disableVideo;
                n.options.disableVideo = () => e.test(s.userAgent)
            }
            "function" != typeof n.options.disableVideo && (n.options.disableVideo = () => !1);
            let r = n.options.elementInViewport;
            r && "object" == typeof r && void 0 !== r.length && ([r] = r), r instanceof Element || (r = null), n.options.elementInViewport = r, n.image = {
                src: n.options.imgSrc || null,
                $container: null,
                useImgTag: !1,
                position: /iPad|iPhone|iPod|Android/.test(s.userAgent) ? "absolute" : "fixed"
            }, n.initImg() && n.canInitParallax() && n.init()
        }

        css(e, t) {
            return "string" == typeof t ? r.window.getComputedStyle(e).getPropertyValue(t) : (t.transform && c && (t[c] = t.transform), Object.keys(t).forEach(n => {
                e.style[n] = t[n]
            }), e)
        }

        extend(e, ...t) {
            return e = e || {}, Object.keys(t).forEach(n => {
                t[n] && Object.keys(t[n]).forEach(i => {
                    e[i] = t[n][i]
                })
            }), e
        }

        getWindowData() {
            return {
                width: r.window.innerWidth || document.documentElement.clientWidth,
                height: u,
                y: document.documentElement.scrollTop
            }
        }

        initImg() {
            const e = this;
            let t = e.options.imgElement;
            return t && "string" == typeof t && (t = e.$item.querySelector(t)), t instanceof Element || (e.options.imgSrc ? (t = new Image, t.src = e.options.imgSrc) : t = null), t && (e.options.keepImg ? e.image.$item = t.cloneNode(!0) : (e.image.$item = t, e.image.$itemParent = t.parentNode), e.image.useImgTag = !0), !!e.image.$item || (null === e.image.src && (e.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", e.image.bgImage = e.css(e.$item, "background-image")), !(!e.image.bgImage || "none" === e.image.bgImage))
        }

        canInitParallax() {
            return c && !this.options.disableParallax()
        }

        init() {
            const e = this, t = {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden",
                pointerEvents: "none"
            };
            let n = {};
            if (!e.options.keepImg) {
                const t = e.$item.getAttribute("style");
                if (t && e.$item.setAttribute("data-jarallax-original-styles", t), e.image.useImgTag) {
                    const t = e.image.$item.getAttribute("style");
                    t && e.image.$item.setAttribute("data-jarallax-original-styles", t)
                }
            }
            if ("static" === e.css(e.$item, "position") && e.css(e.$item, {position: "relative"}), "auto" === e.css(e.$item, "z-index") && e.css(e.$item, {zIndex: 0}), e.image.$container = document.createElement("div"), e.css(e.image.$container, t), e.css(e.image.$container, {"z-index": e.options.zIndex}), a && e.css(e.image.$container, {opacity: .9999}), e.image.$container.setAttribute("id", "jarallax-container-" + e.instanceID), e.$item.appendChild(e.image.$container), e.image.useImgTag ? n = e.extend({
                "object-fit": e.options.imgSize,
                "object-position": e.options.imgPosition,
                "font-family": `object-fit: ${e.options.imgSize}; object-position: ${e.options.imgPosition};`,
                "max-width": "none"
            }, t, n) : (e.image.$item = document.createElement("div"), e.image.src && (n = e.extend({
                "background-position": e.options.imgPosition,
                "background-size": e.options.imgSize,
                "background-repeat": e.options.imgRepeat,
                "background-image": e.image.bgImage || `url("${e.image.src}")`
            }, t, n))), "opacity" !== e.options.type && "scale" !== e.options.type && "scale-opacity" !== e.options.type && 1 !== e.options.speed || (e.image.position = "absolute"), "fixed" === e.image.position) {
                const t = function (e) {
                    const t = [];
                    for (; null !== e.parentElement;) 1 === (e = e.parentElement).nodeType && t.push(e);
                    return t
                }(e.$item).filter(e => {
                    const t = r.window.getComputedStyle(e),
                        n = t["-webkit-transform"] || t["-moz-transform"] || t.transform;
                    return n && "none" !== n || /(auto|scroll)/.test(t.overflow + t["overflow-y"] + t["overflow-x"])
                });
                e.image.position = t.length ? "absolute" : "fixed"
            }
            n.position = e.image.position, e.css(e.image.$item, n), e.image.$container.appendChild(e.image.$item), e.onResize(), e.onScroll(!0), e.options.onInit && e.options.onInit.call(e), "none" !== e.css(e.$item, "background-image") && e.css(e.$item, {"background-image": "none"}), e.addToParallaxList()
        }

        addToParallaxList() {
            f.push({instance: this}), 1 === f.length && r.window.requestAnimationFrame(h)
        }

        removeFromParallaxList() {
            const e = this;
            f.forEach((t, n) => {
                t.instance.instanceID === e.instanceID && f.splice(n, 1)
            })
        }

        destroy() {
            const e = this;
            e.removeFromParallaxList();
            const t = e.$item.getAttribute("data-jarallax-original-styles");
            if (e.$item.removeAttribute("data-jarallax-original-styles"), t ? e.$item.setAttribute("style", t) : e.$item.removeAttribute("style"), e.image.useImgTag) {
                const n = e.image.$item.getAttribute("data-jarallax-original-styles");
                e.image.$item.removeAttribute("data-jarallax-original-styles"), n ? e.image.$item.setAttribute("style", t) : e.image.$item.removeAttribute("style"), e.image.$itemParent && e.image.$itemParent.appendChild(e.image.$item)
            }
            e.$clipStyles && e.$clipStyles.parentNode.removeChild(e.$clipStyles), e.image.$container && e.image.$container.parentNode.removeChild(e.image.$container), e.options.onDestroy && e.options.onDestroy.call(e), delete e.$item.jarallax
        }

        clipContainer() {
            if ("fixed" !== this.image.position) return;
            const e = this, t = e.image.$container.getBoundingClientRect(), {width: n, height: i} = t;
            if (!e.$clipStyles) {
                e.$clipStyles = document.createElement("style"), e.$clipStyles.setAttribute("type", "text/css"), e.$clipStyles.setAttribute("id", "jarallax-clip-" + e.instanceID), (document.head || document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles)
            }
            const o = `#jarallax-container-${e.instanceID} {\n           clip: rect(0 ${n}px ${i}px 0);\n           clip: rect(0, ${n}px, ${i}px, 0);\n        }`;
            e.$clipStyles.styleSheet ? e.$clipStyles.styleSheet.cssText = o : e.$clipStyles.innerHTML = o
        }

        coverImage() {
            const e = this, t = e.image.$container.getBoundingClientRect(), n = t.height, {speed: i} = e.options,
                o = "scroll" === e.options.type || "scroll-opacity" === e.options.type;
            let r = 0, s = n, a = 0;
            return o && (0 > i ? (r = i * Math.max(n, u), u < n && (r -= i * (n - u))) : r = i * (n + u), 1 < i ? s = Math.abs(r - u) : 0 > i ? s = r / i + Math.abs(r) : s += (u - n) * (1 - i), r /= 2), e.parallaxScrollDistance = r, a = o ? (u - s) / 2 : (n - s) / 2, e.css(e.image.$item, {
                height: s + "px",
                marginTop: a + "px",
                left: "fixed" === e.image.position ? t.left + "px" : "0",
                width: t.width + "px"
            }), e.options.onCoverImage && e.options.onCoverImage.call(e), {
                image: {height: s, marginTop: a},
                container: t
            }
        }

        isVisible() {
            return this.isElementInViewport || !1
        }

        onScroll(e) {
            const t = this, n = t.$item.getBoundingClientRect(), i = n.top, o = n.height, s = {};
            let a = n;
            if (t.options.elementInViewport && (a = t.options.elementInViewport.getBoundingClientRect()), t.isElementInViewport = 0 <= a.bottom && 0 <= a.right && a.top <= u && a.left <= r.window.innerWidth, !e && !t.isElementInViewport) return;
            const l = Math.max(0, i), c = Math.max(0, o + i), d = Math.max(0, -i), p = Math.max(0, i + o - u),
                f = Math.max(0, o - (i + o - u)), h = Math.max(0, -i + u - o), m = 1 - (u - i) / (u + o) * 2;
            let g = 1;
            if (o < u ? g = 1 - (d || p) / o : c <= u ? g = c / u : f <= u && (g = f / u), "opacity" !== t.options.type && "scale-opacity" !== t.options.type && "scroll-opacity" !== t.options.type || (s.transform = "translate3d(0,0,0)", s.opacity = g), "scale" === t.options.type || "scale-opacity" === t.options.type) {
                let e = 1;
                0 > t.options.speed ? e -= t.options.speed * g : e += t.options.speed * (1 - g), s.transform = `scale(${e}) translate3d(0,0,0)`
            }
            if ("scroll" === t.options.type || "scroll-opacity" === t.options.type) {
                let e = t.parallaxScrollDistance * m;
                "absolute" === t.image.position && (e -= i), s.transform = `translate3d(0,${e}px,0)`
            }
            t.css(t.image.$item, s), t.options.onScroll && t.options.onScroll.call(t, {
                section: n,
                beforeTop: l,
                beforeTopEnd: c,
                afterTop: d,
                beforeBottom: p,
                beforeBottomEnd: f,
                afterBottom: h,
                visiblePercent: g,
                fromViewportCenter: m
            })
        }

        onResize() {
            this.coverImage(), this.clipContainer()
        }
    }

    const v = function (e, t, ...n) {
        ("object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);
        const i = e.length;
        let o, r = 0;
        for (; r < i; r += 1) if ("object" == typeof t || void 0 === t ? e[r].jarallax || (e[r].jarallax = new g(e[r], t)) : e[r].jarallax && (o = e[r].jarallax[t].apply(e[r].jarallax, n)), void 0 !== o) return o;
        return e
    };
    v.constructor = g, t.default = v
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "default", (function () {
        return r
    }));
    var i = n(0), o = n.n(i);

    function r(e = o.a.jarallax) {
        if (void 0 === e) return;
        const t = e.constructor;
        ["initImg", "canInitParallax", "init", "destroy", "clipContainer", "coverImage", "isVisible", "onScroll", "onResize"].forEach(e => {
            const n = t.prototype[e];
            t.prototype[e] = function (...t) {
                const i = this;
                if ("initImg" === e && null !== i.$item.getAttribute("data-jarallax-element") && (i.options.type = "element", i.pureOptions.speed = i.$item.getAttribute("data-jarallax-element") || i.pureOptions.speed), "element" !== i.options.type) return n.apply(i, t);
                switch (i.pureOptions.threshold = i.$item.getAttribute("data-threshold") || "", e) {
                    case"init":
                        const e = i.pureOptions.speed.split(" ");
                        i.options.speed = i.pureOptions.speed || 0, i.options.speedY = e[0] ? parseFloat(e[0]) : 0, i.options.speedX = e[1] ? parseFloat(e[1]) : 0;
                        const o = i.pureOptions.threshold.split(" ");
                        i.options.thresholdY = o[0] ? parseFloat(o[0]) : null, i.options.thresholdX = o[1] ? parseFloat(o[1]) : null, n.apply(i, t);
                        const r = i.$item.getAttribute("data-jarallax-original-styles");
                        return r && i.$item.setAttribute("style", r), !0;
                    case"onResize":
                        const s = i.css(i.$item, "transform");
                        i.css(i.$item, {transform: ""});
                        const a = i.$item.getBoundingClientRect();
                        i.itemData = {
                            width: a.width,
                            height: a.height,
                            y: a.top + i.getWindowData().y,
                            x: a.left
                        }, i.css(i.$item, {transform: s});
                        break;
                    case"onScroll":
                        const l = i.getWindowData(),
                            c = (l.y + l.height / 2 - i.itemData.y - i.itemData.height / 2) / (l.height / 2),
                            d = c * i.options.speedY, u = c * i.options.speedX;
                        let p = d, f = u;
                        null !== i.options.thresholdY && d > i.options.thresholdY && (p = 0), null !== i.options.thresholdX && u > i.options.thresholdX && (f = 0), i.css(i.$item, {transform: `translate3d(${f}px,${p}px,0)`});
                        break;
                    case"initImg":
                    case"isVisible":
                    case"clipContainer":
                    case"coverImage":
                        return !0
                }
                return n.apply(i, t)
            }
        })
    }
}, function (e, t) {
    !function () {
        "use strict";
        var e = window, t = document, n = t.documentElement, i = t.head || t.getElementsByTagName("head")[0] || n;
        for (var o = "", r = t.getElementsByTagName("script"), s = r.length; --s >= 0;) {
            var a = r[s], l = a.src.match(/^[^?#]*\/run_prettify\.js(\?[^#]*)?(?:#.*)?$/);
            if (l) {
                o = l[1] || "", a.parentNode.removeChild(a);
                break
            }
        }
        var c = !0, d = [], u = [], p = [];
        o.replace(/[?&]([^&=]+)=([^&]+)/g, (function (e, t, n) {
            n = decodeURIComponent(n), "autorun" == (t = decodeURIComponent(t)) ? c = !/^[0fn]/i.test(n) : "lang" == t ? d.push(n) : "skin" == t ? u.push(n) : "callback" == t && p.push(n)
        }));
        for (var f = "https://cdn.rawgit.com/google/code-prettify/master/loader", h = (s = 0, d.length); s < h; ++s) !function (e) {
            var n = t.createElement("script");
            n.onload = n.onerror = n.onreadystatechange = function () {
                !n || n.readyState && !/loaded|complete/.test(n.readyState) || (n.onerror = n.onload = n.onreadystatechange = null, --m, g(), n.parentNode && n.parentNode.removeChild(n), n = null)
            }, n.type = "text/javascript", n.src = f + "/lang-" + encodeURIComponent(d[s]) + ".js", i.insertBefore(n, i.firstChild)
        }(d[s]);
        var m = d.length;

        function g() {
            m || e.setTimeout(b, 0)
        }

        var v = [];
        for (s = 0, h = u.length; s < h; ++s) v.push(f + "/skins/" + encodeURIComponent(u[s]) + ".css");
        v.push(f + "/prettify.css"), function (e) {
            var n = e.length;
            !function o(r) {
                if (r !== n) {
                    var s = t.createElement("link");
                    s.rel = "stylesheet", s.type = "text/css", r + 1 < n && (s.error = s.onerror = function () {
                        o(r + 1)
                    }), s.href = e[r], i.appendChild(s)
                }
            }(0)
        }(v);
        var y = function () {
            var e;
            return window.PR_SHOULD_USE_CONTINUATION = !0, function () {
                var t = window, n = ["break,continue,do,else,for,if,return,while"],
                    i = [[n, "auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,restrict,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"], "catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],
                    o = [i, "alignas,alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,noexcept,noreturn,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],
                    r = [i, "abstract,assert,boolean,byte,extends,finally,final,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],
                    s = [i, "abstract,add,alias,as,ascending,async,await,base,bool,by,byte,checked,decimal,delegate,descending,dynamic,event,finally,fixed,foreach,from,get,global,group,implicit,in,interface,internal,into,is,join,let,lock,null,object,out,override,orderby,params,partial,readonly,ref,remove,sbyte,sealed,select,set,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,value,var,virtual,where,yield"],
                    a = [i, "abstract,async,await,constructor,debugger,enum,eval,export,function,get,implements,instanceof,interface,let,null,set,undefined,var,with,yield,Infinity,NaN"],
                    l = "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",
                    c = [n, "and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
                    d = [n, "alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],
                    u = [n, "case,done,elif,esac,eval,fi,function,in,local,set,then,until"],
                    p = /^(DIR|FILE|array|vector|(de|priority_)?queue|(forward_)?list|stack|(const_)?(reverse_)?iterator|(unordered_)?(multi)?(set|map)|bitset|u?(int|float)\d*)\b/;

                function f(e, t, n, i, o) {
                    if (n) {
                        var r = {
                            sourceNode: e,
                            pre: 1,
                            langExtension: null,
                            numberLines: null,
                            sourceCode: n,
                            spans: null,
                            basePos: t,
                            decorations: null
                        };
                        i(r), o.push.apply(o, r.decorations)
                    }
                }

                var h = /\S/;

                function m(e) {
                    for (var t = void 0, n = e.firstChild; n; n = n.nextSibling) {
                        var i = n.nodeType;
                        t = 1 === i ? t ? e : n : 3 === i && h.test(n.nodeValue) ? e : t
                    }
                    return t === e ? void 0 : t
                }

                function g(e, t) {
                    var n, i = {};
                    !function () {
                        for (var o = e.concat(t), r = [], s = {}, a = 0, l = o.length; a < l; ++a) {
                            var c = o[a], d = c[3];
                            if (d) for (var u = d.length; --u >= 0;) i[d.charAt(u)] = c;
                            var p = c[1], f = "" + p;
                            s.hasOwnProperty(f) || (r.push(p), s[f] = null)
                        }
                        r.push(/[\0-\uffff]/), n = function (e) {
                            for (var t = 0, n = !1, i = !1, o = 0, r = e.length; o < r; ++o) {
                                if ((p = e[o]).ignoreCase) i = !0; else if (/[a-z]/i.test(p.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi, ""))) {
                                    n = !0, i = !1;
                                    break
                                }
                            }
                            var s = {b: 8, t: 9, n: 10, v: 11, f: 12, r: 13};

                            function a(e) {
                                var t = e.charCodeAt(0);
                                if (92 !== t) return t;
                                var n = e.charAt(1);
                                return (t = s[n]) || ("0" <= n && n <= "7" ? parseInt(e.substring(1), 8) : "u" === n || "x" === n ? parseInt(e.substring(2), 16) : e.charCodeAt(1))
                            }

                            function l(e) {
                                if (e < 32) return (e < 16 ? "\\x0" : "\\x") + e.toString(16);
                                var t = String.fromCharCode(e);
                                return "\\" === t || "-" === t || "]" === t || "^" === t ? "\\" + t : t
                            }

                            function c(e) {
                                var t = e.substring(1, e.length - 1).match(new RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]", "g")),
                                    n = [], i = "^" === t[0], o = ["["];
                                i && o.push("^");
                                for (var r = i ? 1 : 0, s = t.length; r < s; ++r) {
                                    var c = t[r];
                                    if (/\\[bdsw]/i.test(c)) o.push(c); else {
                                        var d, u = a(c);
                                        r + 2 < s && "-" === t[r + 1] ? (d = a(t[r + 2]), r += 2) : d = u, n.push([u, d]), d < 65 || u > 122 || (d < 65 || u > 90 || n.push([32 | Math.max(65, u), 32 | Math.min(d, 90)]), d < 97 || u > 122 || n.push([-33 & Math.max(97, u), -33 & Math.min(d, 122)]))
                                    }
                                }
                                n.sort((function (e, t) {
                                    return e[0] - t[0] || t[1] - e[1]
                                }));
                                var p = [], f = [];
                                for (r = 0; r < n.length; ++r) {
                                    (h = n[r])[0] <= f[1] + 1 ? f[1] = Math.max(f[1], h[1]) : p.push(f = h)
                                }
                                for (r = 0; r < p.length; ++r) {
                                    var h = p[r];
                                    o.push(l(h[0])), h[1] > h[0] && (h[1] + 1 > h[0] && o.push("-"), o.push(l(h[1])))
                                }
                                return o.push("]"), o.join("")
                            }

                            function d(e) {
                                for (var i = e.source.match(new RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)", "g")), o = i.length, r = [], s = 0, a = 0; s < o; ++s) {
                                    if ("(" === (u = i[s])) ++a; else if ("\\" === u.charAt(0)) {
                                        (d = +u.substring(1)) && (d <= a ? r[d] = -1 : i[s] = l(d))
                                    }
                                }
                                for (s = 1; s < r.length; ++s) -1 === r[s] && (r[s] = ++t);
                                for (s = 0, a = 0; s < o; ++s) {
                                    if ("(" === (u = i[s])) r[++a] || (i[s] = "(?:"); else if ("\\" === u.charAt(0)) {
                                        var d;
                                        (d = +u.substring(1)) && d <= a && (i[s] = "\\" + r[d])
                                    }
                                }
                                for (s = 0; s < o; ++s) "^" === i[s] && "^" !== i[s + 1] && (i[s] = "");
                                if (e.ignoreCase && n) for (s = 0; s < o; ++s) {
                                    var u, p = (u = i[s]).charAt(0);
                                    u.length >= 2 && "[" === p ? i[s] = c(u) : "\\" !== p && (i[s] = u.replace(/[a-zA-Z]/g, (function (e) {
                                        var t = e.charCodeAt(0);
                                        return "[" + String.fromCharCode(-33 & t, 32 | t) + "]"
                                    })))
                                }
                                return i.join("")
                            }

                            var u = [];
                            for (o = 0, r = e.length; o < r; ++o) {
                                var p;
                                if ((p = e[o]).global || p.multiline) throw new Error("" + p);
                                u.push("(?:" + d(p) + ")")
                            }
                            return new RegExp(u.join("|"), i ? "gi" : "g")
                        }(r)
                    }();
                    var o = t.length, r = function (e) {
                        for (var s = e.sourceCode, a = e.basePos, l = e.sourceNode, c = [a, "pln"], d = 0, u = s.match(n) || [], p = {}, h = 0, m = u.length; h < m; ++h) {
                            var g, v = u[h], y = p[v], b = void 0;
                            if ("string" == typeof y) g = !1; else {
                                var w = i[v.charAt(0)];
                                if (w) b = v.match(w[1]), y = w[0]; else {
                                    for (var x = 0; x < o; ++x) if (w = t[x], b = v.match(w[1])) {
                                        y = w[0];
                                        break
                                    }
                                    b || (y = "pln")
                                }
                                !(g = y.length >= 5 && "lang-" === y.substring(0, 5)) || b && "string" == typeof b[1] || (g = !1, y = "src"), g || (p[v] = y)
                            }
                            var C = d;
                            if (d += v.length, g) {
                                var k = b[1], S = v.indexOf(k), E = S + k.length;
                                b[2] && (S = (E = v.length - b[2].length) - k.length);
                                var $ = y.substring(5);
                                f(l, a + C, v.substring(0, S), r, c), f(l, a + C + S, k, T($, k), c), f(l, a + C + E, v.substring(E), r, c)
                            } else c.push(a + C, y)
                        }
                        e.decorations = c
                    };
                    return r
                }

                function v(e) {
                    var t = [], n = [];
                    e.tripleQuotedStrings ? t.push(["str", /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/, null, "'\""]) : e.multiLineStrings ? t.push(["str", /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/, null, "'\"`"]) : t.push(["str", /^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/, null, "\"'"]), e.verbatimStrings && n.push(["str", /^@\"(?:[^\"]|\"\")*(?:\"|$)/, null]);
                    var i = e.hashComments;
                    i && (e.cStyleComments ? (i > 1 ? t.push(["com", /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, null, "#"]) : t.push(["com", /^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/, null, "#"]), n.push(["str", /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/, null])) : t.push(["com", /^#[^\r\n]*/, null, "#"])), e.cStyleComments && (n.push(["com", /^\/\/[^\r\n]*/, null]), n.push(["com", /^\/\*[\s\S]*?(?:\*\/|$)/, null]));
                    var o = e.regexLiterals;
                    if (o) {
                        var r = o > 1 ? "" : "\n\r", s = r ? "." : "[\\S\\s]",
                            a = "/(?=[^/*" + r + "])(?:[^/\\x5B\\x5C" + r + "]|\\x5C" + s + "|\\x5B(?:[^\\x5C\\x5D" + r + "]|\\x5C" + s + ")*(?:\\x5D|$))+/";
                        n.push(["lang-regex", RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(" + a + ")")])
                    }
                    var l = e.types;
                    l && n.push(["typ", l]);
                    var c = ("" + e.keywords).replace(/^ | $/g, "");
                    c.length && n.push(["kwd", new RegExp("^(?:" + c.replace(/[\s,]+/g, "|") + ")\\b"), null]), t.push(["pln", /^\s+/, null, " \r\n\t "]);
                    var d = "^.[^\\s\\w.$@'\"`/\\\\]*";
                    return e.regexLiterals && (d += "(?!s*/)"), n.push(["lit", /^@[a-z_$][a-z_$@0-9]*/i, null], ["typ", /^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/, null], ["pln", /^[a-z_$][a-z_$@0-9]*/i, null], ["lit", new RegExp("^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*", "i"), null, "0123456789"], ["pln", /^\\[\s\S]?/, null], ["pun", new RegExp(d), null]), g(t, n)
                }

                var y = v({
                    keywords: [o, s, r, a, l, c, d, u],
                    hashComments: !0,
                    cStyleComments: !0,
                    multiLineStrings: !0,
                    regexLiterals: !0
                });

                function b(e, t, n) {
                    for (var i = /(?:^|\s)nocode(?:\s|$)/, o = /\r\n?|\n/, r = e.ownerDocument, s = r.createElement("li"); e.firstChild;) s.appendChild(e.firstChild);
                    var a = [s];

                    function l(e) {
                        var t = e.nodeType;
                        if (1 != t || i.test(e.className)) {
                            if ((3 == t || 4 == t) && n) {
                                var s = e.nodeValue, a = s.match(o);
                                if (a) {
                                    var d = s.substring(0, a.index);
                                    e.nodeValue = d;
                                    var u = s.substring(a.index + a[0].length);
                                    if (u) e.parentNode.insertBefore(r.createTextNode(u), e.nextSibling);
                                    c(e), d || e.parentNode.removeChild(e)
                                }
                            }
                        } else if ("br" === e.nodeName) c(e), e.parentNode && e.parentNode.removeChild(e); else for (var p = e.firstChild; p; p = p.nextSibling) l(p)
                    }

                    function c(e) {
                        for (; !e.nextSibling;) if (!(e = e.parentNode)) return;
                        for (var t, n = function e(t, n) {
                            var i = n ? t.cloneNode(!1) : t, o = t.parentNode;
                            if (o) {
                                var r = e(o, 1), s = t.nextSibling;
                                r.appendChild(i);
                                for (var a = s; a; a = s) s = a.nextSibling, r.appendChild(a)
                            }
                            return i
                        }(e.nextSibling, 0); (t = n.parentNode) && 1 === t.nodeType;) n = t;
                        a.push(n)
                    }

                    for (var d = 0; d < a.length; ++d) l(a[d]);
                    t === (0 | t) && a[0].setAttribute("value", t);
                    var u = r.createElement("ol");
                    u.className = "linenums";
                    for (var p = Math.max(0, t - 1 | 0) || 0, f = (d = 0, a.length); d < f; ++d) (s = a[d]).className = "L" + (d + p) % 10, s.firstChild || s.appendChild(r.createTextNode(" ")), u.appendChild(s);
                    e.appendChild(u)
                }

                var w = {};

                function x(e, n) {
                    for (var i = n.length; --i >= 0;) {
                        var o = n[i];
                        w.hasOwnProperty(o) ? t.console && console.warn("cannot override language handler %s", o) : w[o] = e
                    }
                }

                function T(e, t) {
                    return e && w.hasOwnProperty(e) || (e = /^\s*</.test(t) ? "default-markup" : "default-code"), w[e]
                }

                function C(e) {
                    var n, i, o, r, s, a, l, c = e.langExtension;
                    try {
                        var d = (n = e.sourceNode, i = e.pre, o = /(?:^|\s)nocode(?:\s|$)/, r = [], s = 0, a = [], l = 0, function e(t) {
                            var n = t.nodeType;
                            if (1 == n) {
                                if (o.test(t.className)) return;
                                for (var c = t.firstChild; c; c = c.nextSibling) e(c);
                                var d = t.nodeName.toLowerCase();
                                "br" !== d && "li" !== d || (r[l] = "\n", a[l << 1] = s++, a[l++ << 1 | 1] = t)
                            } else if (3 == n || 4 == n) {
                                var u = t.nodeValue;
                                u.length && (u = i ? u.replace(/\r\n?/g, "\n") : u.replace(/[ \t\r\n]+/g, " "), r[l] = u, a[l << 1] = s, s += u.length, a[l++ << 1 | 1] = t)
                            }
                        }(n), {sourceCode: r.join("").replace(/\n$/, ""), spans: a}), u = d.sourceCode;
                        e.sourceCode = u, e.spans = d.spans, e.basePos = 0, T(c, u)(e), function (e) {
                            var t = /\bMSIE\s(\d+)/.exec(navigator.userAgent);
                            t = t && +t[1] <= 8;
                            var n, i, o = /\n/g, r = e.sourceCode, s = r.length, a = 0, l = e.spans, c = l.length,
                                d = 0, u = e.decorations, p = u.length, f = 0;
                            for (u[p] = s, i = n = 0; i < p;) u[i] !== u[i + 2] ? (u[n++] = u[i++], u[n++] = u[i++]) : i += 2;
                            for (p = n, i = n = 0; i < p;) {
                                for (var h = u[i], m = u[i + 1], g = i + 2; g + 2 <= p && u[g + 1] === m;) g += 2;
                                u[n++] = h, u[n++] = m, i = g
                            }
                            p = u.length = n;
                            var v = e.sourceNode, y = "";
                            v && (y = v.style.display, v.style.display = "none");
                            try {
                                for (; d < c;) {
                                    l[d];
                                    var b, w = l[d + 2] || s, x = u[f + 2] || s, T = (g = Math.min(w, x), l[d + 1]);
                                    if (1 !== T.nodeType && (b = r.substring(a, g))) {
                                        t && (b = b.replace(o, "\r")), T.nodeValue = b;
                                        var C = T.ownerDocument, k = C.createElement("span");
                                        k.className = u[f + 1];
                                        var S = T.parentNode;
                                        S.replaceChild(k, T), k.appendChild(T), a < w && (l[d + 1] = T = C.createTextNode(r.substring(g, w)), S.insertBefore(T, k.nextSibling))
                                    }
                                    (a = g) >= w && (d += 2), a >= x && (f += 2)
                                }
                            } finally {
                                v && (v.style.display = y)
                            }
                        }(e)
                    } catch (e) {
                        t.console && console.log(e && e.stack || e)
                    }
                }

                function k(e, t, n) {
                    var i = n || !1, o = t || null, r = document.createElement("div");
                    return r.innerHTML = "<pre>" + e + "</pre>", r = r.firstChild, i && b(r, i, !0), C({
                        langExtension: o,
                        numberLines: i,
                        sourceNode: r,
                        pre: 1,
                        sourceCode: null,
                        basePos: null,
                        spans: null,
                        decorations: null
                    }), r.innerHTML
                }

                function S(e, n) {
                    var i = n || document.body, o = i.ownerDocument || document;

                    function r(e) {
                        return i.getElementsByTagName(e)
                    }

                    for (var s = [r("pre"), r("code"), r("xmp")], a = [], l = 0; l < s.length; ++l) for (var c = 0, d = s[l].length; c < d; ++c) a.push(s[l][c]);
                    s = null;
                    var u = Date;
                    u.now || (u = {
                        now: function () {
                            return +new Date
                        }
                    });
                    var p = 0, f = /\blang(?:uage)?-([\w.]+)(?!\S)/, h = /\bprettyprint\b/, g = /\bprettyprinted\b/,
                        v = /pre|xmp/i, y = /^code$/i, w = /^(?:pre|code|xmp)$/i, x = {};
                    !function n() {
                        for (var i = t.PR_SHOULD_USE_CONTINUATION ? u.now() + 250 : 1 / 0; p < a.length && u.now() < i; p++) {
                            for (var r = a[p], s = x, l = r; l = l.previousSibling;) {
                                var c = l.nodeType, d = (7 === c || 8 === c) && l.nodeValue;
                                if (d ? !/^\??prettify\b/.test(d) : 3 !== c || /\S/.test(l.nodeValue)) break;
                                if (d) {
                                    s = {}, d.replace(/\b(\w+)=([\w:.%+-]+)/g, (function (e, t, n) {
                                        s[t] = n
                                    }));
                                    break
                                }
                            }
                            var T = r.className;
                            if ((s !== x || h.test(T)) && !g.test(T)) {
                                for (var k = !1, S = r.parentNode; S; S = S.parentNode) {
                                    var E = S.tagName;
                                    if (w.test(E) && S.className && h.test(S.className)) {
                                        k = !0;
                                        break
                                    }
                                }
                                if (!k) {
                                    r.className += " prettyprinted";
                                    var $, _, A = s.lang;
                                    if (!A) !(A = T.match(f)) && ($ = m(r)) && y.test($.tagName) && (A = $.className.match(f)), A && (A = A[1]);
                                    if (v.test(r.tagName)) _ = 1; else {
                                        var O = r.currentStyle, D = o.defaultView,
                                            N = O ? O.whiteSpace : D && D.getComputedStyle ? D.getComputedStyle(r, null).getPropertyValue("white-space") : 0;
                                        _ = N && "pre" === N.substring(0, 3)
                                    }
                                    var j = s.linenums;
                                    (j = "true" === j || +j) || (j = !!(j = T.match(/\blinenums\b(?::(\d+))?/)) && (!j[1] || !j[1].length || +j[1])), j && b(r, j, _), C({
                                        langExtension: A,
                                        sourceNode: r,
                                        numberLines: j,
                                        pre: _,
                                        sourceCode: null,
                                        basePos: null,
                                        spans: null,
                                        decorations: null
                                    })
                                }
                            }
                        }
                        p < a.length ? t.setTimeout(n, 250) : "function" == typeof e && e()
                    }()
                }

                x(y, ["default-code"]), x(g([], [["pln", /^[^<?]+/], ["dec", /^<!\w[^>]*(?:>|$)/], ["com", /^<\!--[\s\S]*?(?:-\->|$)/], ["lang-", /^<\?([\s\S]+?)(?:\?>|$)/], ["lang-", /^<%([\s\S]+?)(?:%>|$)/], ["pun", /^(?:<[%?]|[%?]>)/], ["lang-", /^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i], ["lang-js", /^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i], ["lang-css", /^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i], ["lang-in.tag", /^(<\/?[a-z][^<>]*>)/i]]), ["default-markup", "htm", "html", "mxml", "xhtml", "xml", "xsl"]), x(g([["pln", /^[\s]+/, null, " \t\r\n"], ["atv", /^(?:\"[^\"]*\"?|\'[^\']*\'?)/, null, "\"'"]], [["tag", /^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i], ["atn", /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i], ["lang-uq.val", /^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/], ["pun", /^[=<>\/]+/], ["lang-js", /^on\w+\s*=\s*\"([^\"]+)\"/i], ["lang-js", /^on\w+\s*=\s*\'([^\']+)\'/i], ["lang-js", /^on\w+\s*=\s*([^\"\'>\s]+)/i], ["lang-css", /^style\s*=\s*\"([^\"]+)\"/i], ["lang-css", /^style\s*=\s*\'([^\']+)\'/i], ["lang-css", /^style\s*=\s*([^\"\'>\s]+)/i]]), ["in.tag"]), x(g([], [["atv", /^[\s\S]+/]]), ["uq.val"]), x(v({
                    keywords: o,
                    hashComments: !0,
                    cStyleComments: !0,
                    types: p
                }), ["c", "cc", "cpp", "cxx", "cyc", "m"]), x(v({keywords: "null,true,false"}), ["json"]), x(v({
                    keywords: s,
                    hashComments: !0,
                    cStyleComments: !0,
                    verbatimStrings: !0,
                    types: p
                }), ["cs"]), x(v({keywords: r, cStyleComments: !0}), ["java"]), x(v({
                    keywords: u,
                    hashComments: !0,
                    multiLineStrings: !0
                }), ["bash", "bsh", "csh", "sh"]), x(v({
                    keywords: c,
                    hashComments: !0,
                    multiLineStrings: !0,
                    tripleQuotedStrings: !0
                }), ["cv", "py", "python"]), x(v({
                    keywords: l,
                    hashComments: !0,
                    multiLineStrings: !0,
                    regexLiterals: 2
                }), ["perl", "pl", "pm"]), x(v({
                    keywords: d,
                    hashComments: !0,
                    multiLineStrings: !0,
                    regexLiterals: !0
                }), ["rb", "ruby"]), x(v({
                    keywords: a,
                    cStyleComments: !0,
                    regexLiterals: !0
                }), ["javascript", "js", "ts", "typescript"]), x(v({
                    keywords: "all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",
                    hashComments: 3,
                    cStyleComments: !0,
                    multilineStrings: !0,
                    tripleQuotedStrings: !0,
                    regexLiterals: !0
                }), ["coffee"]), x(g([], [["str", /^[\s\S]+/]]), ["regex"]);
                var E = t.PR = {
                    createSimpleLexer: g,
                    registerLangHandler: x,
                    sourceDecorator: v,
                    PR_ATTRIB_NAME: "atn",
                    PR_ATTRIB_VALUE: "atv",
                    PR_COMMENT: "com",
                    PR_DECLARATION: "dec",
                    PR_KEYWORD: "kwd",
                    PR_LITERAL: "lit",
                    PR_NOCODE: "nocode",
                    PR_PLAIN: "pln",
                    PR_PUNCTUATION: "pun",
                    PR_SOURCE: "src",
                    PR_STRING: "str",
                    PR_TAG: "tag",
                    PR_TYPE: "typ",
                    prettyPrintOne: k,
                    prettyPrint: e = e = S
                }, $ = t.define;
                "function" == typeof $ && $.amd && $("google-code-prettify", [], (function () {
                    return E
                }))
            }(), e
        }();

        function b() {
            c && function (i) {
                var o = t.addEventListener, r = !1, s = !0, a = o ? "addEventListener" : "attachEvent",
                    l = o ? "removeEventListener" : "detachEvent", c = o ? "" : "on", d = function (n) {
                        "readystatechange" == n.type && "complete" != t.readyState || (("load" == n.type ? e : t)[l](c + n.type, d, !1), !r && (r = !0) && i.call(e, n.type || n))
                    }, u = function () {
                        try {
                            n.doScroll("left")
                        } catch (t) {
                            return void e.setTimeout(u, 50)
                        }
                        d("poll")
                    };
                if ("complete" == t.readyState) i.call(e, "lazy"); else {
                    if (t.createEventObject && n.doScroll) {
                        try {
                            s = !e.frameElement
                        } catch (e) {
                        }
                        s && u()
                    }
                    t[a](c + "DOMContentLoaded", d, !1), t[a](c + "readystatechange", d, !1), e[a](c + "load", d, !1)
                }
            }((function () {
                var t = p.length;
                y(t ? function () {
                    for (var n = 0; n < t; ++n) !function (t) {
                        e.setTimeout((function () {
                            e.exports[p[t]].apply(e, arguments)
                        }), 0)
                    }(n)
                } : void 0)
            }))
        }

        g()
    }()
}, function (e, t, n) {
    "use strict";
    n.r(t), function (e) {
        var n = {
            $styleswitcher: e('\n    <div id="style-switcher-wrapper">\n      <span id="style-switcher-toggle"><img src="assets/img/icons/settings.svg" alt=""></span>\n      <div id="style-switcher">\n        <div class="style-switcher-title">Color</div>\n        <ul id="color-switcher" class="style-switcher-list list-colors"></ul>\n        <div class="style-switcher-bottom">\n            <a href="http://themeforest.net/user/suelo/portfolio?ref=suelo" target="_blank" class="btn btn-sm btn-outline-primary"><span>Check other products</span></a>\n        </div>\n        <a class="style-switcher-close"><img src="assets/img/icons/close.svg" alt=""></a>\n      </div>\n    </div>\n  '),
            colors: [{name: "beige", color: "#ddae71"}, {name: "blue", color: "#497ece"}, {
                name: "green",
                color: "#56a75f"
            }, {name: "mint", color: "#47a782"}, {name: "orange", color: "#d66b52"}, {
                name: "red",
                color: "#d15454"
            }, {name: "teal", color: "#58adb7"}],
            init: function () {
                var t = this;
                t.$styleswitcher.appendTo("body");
                var n = e("#theme").attr("href").substring(5),
                    i = (n = (n = n.substring(0, n.length - 4)).split("-"))[1], o = e("#color-switcher");
                t.colors.forEach((function (t) {
                    e('\n        <li>\n          <a href="#" data-color="'.concat(t.name, '">\n            <span class="color" style="background-color: ').concat(t.color, ';"></span>\n          </a>\n        </li>\n      ')).appendTo(o)
                })), t.$styleswitcher.find("ul a").on("click", (function () {
                    return e(this).parents("ul").find("a.active").removeClass("active"), e(this).addClass("active"), !1
                })), o.find("a").each((function () {
                    e(this).data("color") == i && e(this).addClass("active")
                })), o.find("a").on("click", (function () {
                    return i = e(this).data("color"), t.setStyle(i), !1
                })), e("#style-switcher-toggle").on("click", (function (t) {
                    e("#style-switcher-wrapper").toggleClass("show"), t.stopPropagation()
                })), e("#style-switcher .style-switcher-close").on("click", (function (t) {
                    e("#style-switcher-wrapper").removeClass("show"), t.stopPropagation()
                })), e("#style-switcher-wrapper").on("click", (function (t) {
                    e("#style-switcher-wrapper").removeClass("show")
                })), t.$styleswitcher.on("click", (function (e) {
                    e.stopPropagation()
                }))
            },
            setStyle: function (t) {
                e("#theme").attr("href", "dist/theme-" + t + ".css")
            }
        };
        t.default = n
    }.call(this, n(1))
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "default", (function () {
        return h
    }));
    var i = n(0), o = n.n(i);

    function r() {
        this.done = [], this.fail = []
    }

    r.prototype = {
        execute(e, t) {
            let n = e.length;
            for (t = Array.prototype.slice.call(t); n;) n -= 1, e[n].apply(null, t)
        }, resolve(...e) {
            this.execute(this.done, e)
        }, reject(...e) {
            this.execute(this.fail, e)
        }, done(e) {
            this.done.push(e)
        }, fail(e) {
            this.fail.push(e)
        }
    };
    let s = 0, a = 0, l = 0, c = 0, d = 0;
    const u = new r, p = new r;

    class f {
        constructor(e, t) {
            const n = this;
            n.url = e, n.options_default = {
                autoplay: !1,
                loop: !1,
                mute: !1,
                volume: 100,
                showContols: !0,
                startTime: 0,
                endTime: 0
            }, n.options = n.extend({}, n.options_default, t), n.videoID = n.parseURL(e), n.videoID && (n.ID = s, s += 1, n.loadAPI(), n.init())
        }

        extend(...e) {
            const t = e[0] || {};
            return Object.keys(e).forEach(n => {
                e[n] && Object.keys(e[n]).forEach(i => {
                    t[i] = e[n][i]
                })
            }), t
        }

        parseURL(e) {
            const t = function (e) {
                const t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/);
                return !(!t || 11 !== t[1].length) && t[1]
            }(e), n = function (e) {
                const t = e.match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/);
                return !(!t || !t[3]) && t[3]
            }(e), i = function (e) {
                const t = e.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/), n = {};
                let i = 0;
                return t.forEach(e => {
                    const t = e.match(/^(mp4|webm|ogv|ogg)\:(.*)/);
                    t && t[1] && t[2] && (n["ogv" === t[1] ? "ogg" : t[1]] = t[2], i = 1)
                }), !!i && n
            }(e);
            return t ? (this.type = "youtube", t) : n ? (this.type = "vimeo", n) : !!i && (this.type = "local", i)
        }

        isValid() {
            return !!this.videoID
        }

        on(e, t) {
            this.userEventsList = this.userEventsList || [], (this.userEventsList[e] || (this.userEventsList[e] = [])).push(t)
        }

        off(e, t) {
            this.userEventsList && this.userEventsList[e] && (t ? this.userEventsList[e].forEach((n, i) => {
                n === t && (this.userEventsList[e][i] = !1)
            }) : delete this.userEventsList[e])
        }

        fire(e, ...t) {
            this.userEventsList && void 0 !== this.userEventsList[e] && this.userEventsList[e].forEach(e => {
                e && e.apply(this, t)
            })
        }

        play(e) {
            const t = this;
            t.player && ("youtube" === t.type && t.player.playVideo && (void 0 !== e && t.player.seekTo(e || 0), o.a.YT.PlayerState.PLAYING !== t.player.getPlayerState() && t.player.playVideo()), "vimeo" === t.type && (void 0 !== e && t.player.setCurrentTime(e), t.player.getPaused().then(e => {
                e && t.player.play()
            })), "local" === t.type && (void 0 !== e && (t.player.currentTime = e), t.player.paused && t.player.play()))
        }

        pause() {
            const e = this;
            e.player && ("youtube" === e.type && e.player.pauseVideo && o.a.YT.PlayerState.PLAYING === e.player.getPlayerState() && e.player.pauseVideo(), "vimeo" === e.type && e.player.getPaused().then(t => {
                t || e.player.pause()
            }), "local" === e.type && (e.player.paused || e.player.pause()))
        }

        mute() {
            const e = this;
            e.player && ("youtube" === e.type && e.player.mute && e.player.mute(), "vimeo" === e.type && e.player.setVolume && e.player.setVolume(0), "local" === e.type && (e.$video.muted = !0))
        }

        unmute() {
            const e = this;
            e.player && ("youtube" === e.type && e.player.mute && e.player.unMute(), "vimeo" === e.type && e.player.setVolume && e.player.setVolume(e.options.volume), "local" === e.type && (e.$video.muted = !1))
        }

        setVolume(e = !1) {
            const t = this;
            t.player && e && ("youtube" === t.type && t.player.setVolume && t.player.setVolume(e), "vimeo" === t.type && t.player.setVolume && t.player.setVolume(e), "local" === t.type && (t.$video.volume = e / 100))
        }

        getVolume(e) {
            const t = this;
            t.player ? ("youtube" === t.type && t.player.getVolume && e(t.player.getVolume()), "vimeo" === t.type && t.player.getVolume && t.player.getVolume().then(t => {
                e(t)
            }), "local" === t.type && e(100 * t.$video.volume)) : e(!1)
        }

        getMuted(e) {
            const t = this;
            t.player ? ("youtube" === t.type && t.player.isMuted && e(t.player.isMuted()), "vimeo" === t.type && t.player.getVolume && t.player.getVolume().then(t => {
                e(!!t)
            }), "local" === t.type && e(t.$video.muted)) : e(null)
        }

        getImageURL(e) {
            const t = this;
            if (t.videoImage) e(t.videoImage); else {
                if ("youtube" === t.type) {
                    const n = ["maxresdefault", "sddefault", "hqdefault", "0"];
                    let i = 0;
                    const o = new Image;
                    o.onload = function () {
                        120 !== (this.naturalWidth || this.width) || i === n.length - 1 ? (t.videoImage = `https://img.youtube.com/vi/${t.videoID}/${n[i]}.jpg`, e(t.videoImage)) : (i += 1, this.src = `https://img.youtube.com/vi/${t.videoID}/${n[i]}.jpg`)
                    }, o.src = `https://img.youtube.com/vi/${t.videoID}/${n[i]}.jpg`
                }
                if ("vimeo" === t.type) {
                    let n = new XMLHttpRequest;
                    n.open("GET", `https://vimeo.com/api/v2/video/${t.videoID}.json`, !0), n.onreadystatechange = function () {
                        if (4 === this.readyState && 200 <= this.status && 400 > this.status) {
                            const n = JSON.parse(this.responseText);
                            t.videoImage = n[0].thumbnail_large, e(t.videoImage)
                        }
                    }, n.send(), n = null
                }
            }
        }

        getIframe(e) {
            this.getVideo(e)
        }

        getVideo(e) {
            const t = this;
            t.$video ? e(t.$video) : t.onAPIready(() => {
                let n;
                if (t.$video || (n = document.createElement("div"), n.style.display = "none"), "youtube" === t.type) {
                    let e, i;
                    t.playerOptions = {}, t.playerOptions.videoId = t.videoID, t.playerOptions.playerVars = {
                        autohide: 1,
                        rel: 0,
                        autoplay: 0,
                        playsinline: 1
                    }, t.options.showContols || (t.playerOptions.playerVars.iv_load_policy = 3, t.playerOptions.playerVars.modestbranding = 1, t.playerOptions.playerVars.controls = 0, t.playerOptions.playerVars.showinfo = 0, t.playerOptions.playerVars.disablekb = 1), t.playerOptions.events = {
                        onReady(e) {
                            if (t.options.mute ? e.target.mute() : t.options.volume && e.target.setVolume(t.options.volume), t.options.autoplay && t.play(t.options.startTime), t.fire("ready", e), t.options.loop && !t.options.endTime) {
                                const e = .1;
                                t.options.endTime = t.player.getDuration() - e
                            }
                            setInterval(() => {
                                t.getVolume(n => {
                                    t.options.volume !== n && (t.options.volume = n, t.fire("volumechange", e))
                                })
                            }, 150)
                        }, onStateChange(n) {
                            t.options.loop && n.data === o.a.YT.PlayerState.ENDED && t.play(t.options.startTime), e || n.data !== o.a.YT.PlayerState.PLAYING || (e = 1, t.fire("started", n)), n.data === o.a.YT.PlayerState.PLAYING && t.fire("play", n), n.data === o.a.YT.PlayerState.PAUSED && t.fire("pause", n), n.data === o.a.YT.PlayerState.ENDED && t.fire("ended", n), n.data === o.a.YT.PlayerState.PLAYING ? i = setInterval(() => {
                                t.fire("timeupdate", n), t.options.endTime && t.player.getCurrentTime() >= t.options.endTime && (t.options.loop ? t.play(t.options.startTime) : t.pause())
                            }, 150) : clearInterval(i)
                        }, onError(e) {
                            t.fire("error", e)
                        }
                    };
                    const r = !t.$video;
                    if (r) {
                        const e = document.createElement("div");
                        e.setAttribute("id", t.playerID), n.appendChild(e), document.body.appendChild(n)
                    }
                    t.player = t.player || new o.a.YT.Player(t.playerID, t.playerOptions), r && (t.$video = document.getElementById(t.playerID), t.videoWidth = parseInt(t.$video.getAttribute("width"), 10) || 1280, t.videoHeight = parseInt(t.$video.getAttribute("height"), 10) || 720)
                }
                if ("vimeo" === t.type) {
                    if (t.playerOptions = {
                        id: t.videoID,
                        autopause: 0,
                        transparent: 0,
                        autoplay: t.options.autoplay ? 1 : 0,
                        loop: t.options.loop ? 1 : 0,
                        muted: t.options.mute ? 1 : 0
                    }, t.options.volume && (t.playerOptions.volume = t.options.volume), t.options.showContols || (t.playerOptions.badge = 0, t.playerOptions.byline = 0, t.playerOptions.portrait = 0, t.playerOptions.title = 0, t.playerOptions.background = 1), !t.$video) {
                        let e = "";
                        Object.keys(t.playerOptions).forEach(n => {
                            "" !== e && (e += "&"), e += `${n}=${encodeURIComponent(t.playerOptions[n])}`
                        }), t.$video = document.createElement("iframe"), t.$video.setAttribute("id", t.playerID), t.$video.setAttribute("src", `https://player.vimeo.com/video/${t.videoID}?${e}`), t.$video.setAttribute("frameborder", "0"), t.$video.setAttribute("mozallowfullscreen", ""), t.$video.setAttribute("allowfullscreen", ""), n.appendChild(t.$video), document.body.appendChild(n)
                    }
                    let e;
                    t.player = t.player || new o.a.Vimeo.Player(t.$video, t.playerOptions), t.options.startTime && t.options.autoplay && t.player.setCurrentTime(t.options.startTime), t.player.getVideoWidth().then(e => {
                        t.videoWidth = e || 1280
                    }), t.player.getVideoHeight().then(e => {
                        t.videoHeight = e || 720
                    }), t.player.on("timeupdate", n => {
                        e || (t.fire("started", n), e = 1), t.fire("timeupdate", n), t.options.endTime && t.options.endTime && n.seconds >= t.options.endTime && (t.options.loop ? t.play(t.options.startTime) : t.pause())
                    }), t.player.on("play", e => {
                        t.fire("play", e), t.options.startTime && 0 === e.seconds && t.play(t.options.startTime)
                    }), t.player.on("pause", e => {
                        t.fire("pause", e)
                    }), t.player.on("ended", e => {
                        t.fire("ended", e)
                    }), t.player.on("loaded", e => {
                        t.fire("ready", e)
                    }), t.player.on("volumechange", e => {
                        t.fire("volumechange", e)
                    }), t.player.on("error", e => {
                        t.fire("error", e)
                    })
                }
                if ("local" === t.type) {
                    let e;
                    t.$video || (t.$video = document.createElement("video"), t.options.showContols && (t.$video.controls = !0), t.options.mute ? t.$video.muted = !0 : t.$video.volume && (t.$video.volume = t.options.volume / 100), t.options.loop && (t.$video.loop = !0), t.$video.setAttribute("playsinline", ""), t.$video.setAttribute("webkit-playsinline", ""), t.$video.setAttribute("id", t.playerID), n.appendChild(t.$video), document.body.appendChild(n), Object.keys(t.videoID).forEach(e => {
                        !function (e, t, n) {
                            const i = document.createElement("source");
                            i.src = t, i.type = n, e.appendChild(i)
                        }(t.$video, t.videoID[e], "video/" + e)
                    })), t.player = t.player || t.$video, t.player.addEventListener("playing", n => {
                        e || t.fire("started", n), e = 1
                    }), t.player.addEventListener("timeupdate", (function (e) {
                        t.fire("timeupdate", e), t.options.endTime && t.options.endTime && this.currentTime >= t.options.endTime && (t.options.loop ? t.play(t.options.startTime) : t.pause())
                    })), t.player.addEventListener("play", e => {
                        t.fire("play", e)
                    }), t.player.addEventListener("pause", e => {
                        t.fire("pause", e)
                    }), t.player.addEventListener("ended", e => {
                        t.fire("ended", e)
                    }), t.player.addEventListener("loadedmetadata", (function () {
                        t.videoWidth = this.videoWidth || 1280, t.videoHeight = this.videoHeight || 720, t.fire("ready"), t.options.autoplay && t.play(t.options.startTime)
                    })), t.player.addEventListener("volumechange", e => {
                        t.getVolume(e => {
                            t.options.volume = e
                        }), t.fire("volumechange", e)
                    }), t.player.addEventListener("error", e => {
                        t.fire("error", e)
                    })
                }
                e(t.$video)
            })
        }

        init() {
            this.playerID = "VideoWorker-" + this.ID
        }

        loadAPI() {
            if (a && l) return;
            let e = "";
            if ("youtube" !== this.type || a || (a = 1, e = "https://www.youtube.com/iframe_api"), "vimeo" === this.type && !l) {
                if (l = 1, void 0 !== o.a.Vimeo) return;
                e = "https://player.vimeo.com/api/player.js"
            }
            if (!e) return;
            let t = document.createElement("script"), n = document.getElementsByTagName("head")[0];
            t.src = e, n.appendChild(t), n = null, t = null
        }

        onAPIready(e) {
            if ("youtube" === this.type && (void 0 !== o.a.YT && 0 !== o.a.YT.loaded || c ? "object" == typeof o.a.YT && 1 === o.a.YT.loaded ? e() : u.done(() => {
                e()
            }) : (c = 1, window.onYouTubeIframeAPIReady = function () {
                window.onYouTubeIframeAPIReady = null, u.resolve("done"), e()
            })), "vimeo" === this.type) if (void 0 !== o.a.Vimeo || d) void 0 !== o.a.Vimeo ? e() : p.done(() => {
                e()
            }); else {
                d = 1;
                const t = setInterval(() => {
                    void 0 !== o.a.Vimeo && (clearInterval(t), p.resolve("done"), e())
                }, 20)
            }
            "local" === this.type && e()
        }
    }

    function h(e = o.a.jarallax) {
        if (void 0 === e) return;
        const t = e.constructor, n = t.prototype.onScroll;
        t.prototype.onScroll = function () {
            const e = this;
            n.apply(e), !e.isVideoInserted && e.video && (!e.options.videoLazyLoading || e.isElementInViewport) && !e.options.disableVideo() && (e.isVideoInserted = !0, e.video.getVideo(t => {
                const n = t.parentNode;
                e.css(t, {
                    position: e.image.position,
                    top: "0px",
                    left: "0px",
                    right: "0px",
                    bottom: "0px",
                    width: "100%",
                    height: "100%",
                    maxWidth: "none",
                    maxHeight: "none",
                    margin: 0,
                    zIndex: -1
                }), e.$video = t, "local" === e.video.type && (e.image.src ? e.$video.setAttribute("poster", e.image.src) : e.image.$item && "IMG" === e.image.$item.tagName && e.image.$item.src && e.$video.setAttribute("poster", e.image.$item.src)), e.image.$container.appendChild(t), n.parentNode.removeChild(n)
            }))
        };
        const i = t.prototype.coverImage;
        t.prototype.coverImage = function () {
            const e = this, t = i.apply(e), n = !!e.image.$item && e.image.$item.nodeName;
            if (t && e.video && n && ("IFRAME" === n || "VIDEO" === n)) {
                let i = t.image.height, o = i * e.image.width / e.image.height, r = (t.container.width - o) / 2,
                    s = t.image.marginTop;
                t.container.width > o && (o = t.container.width, i = o * e.image.height / e.image.width, r = 0, s += (t.image.height - i) / 2), "IFRAME" === n && (i += 400, s -= 200), e.css(e.$video, {
                    width: o + "px",
                    marginLeft: r + "px",
                    height: i + "px",
                    marginTop: s + "px"
                })
            }
            return t
        };
        const r = t.prototype.initImg;
        t.prototype.initImg = function () {
            const e = this, t = r.apply(e);
            return e.options.videoSrc || (e.options.videoSrc = e.$item.getAttribute("data-jarallax-video") || null), e.options.videoSrc ? (e.defaultInitImgResult = t, !0) : t
        };
        const s = t.prototype.canInitParallax;
        t.prototype.canInitParallax = function () {
            const e = this;
            let t = s.apply(e);
            if (!e.options.videoSrc) return t;
            const n = new f(e.options.videoSrc, {
                autoplay: !0,
                loop: e.options.videoLoop,
                showContols: !1,
                startTime: e.options.videoStartTime || 0,
                endTime: e.options.videoEndTime || 0,
                mute: e.options.videoVolume ? 0 : 1,
                volume: e.options.videoVolume || 0
            });

            function i() {
                e.image.$default_item && (e.image.$item = e.image.$default_item, e.image.$item.style.display = "block", e.coverImage(), e.clipContainer(), e.onScroll())
            }

            if (n.isValid()) if (this.options.disableParallax() && (t = !0, e.image.position = "absolute", e.options.type = "scroll", e.options.speed = 1), t) {
                if (n.on("ready", () => {
                    if (e.options.videoPlayOnlyVisible) {
                        const t = e.onScroll;
                        e.onScroll = function () {
                            t.apply(e), e.videoError || !e.options.videoLoop && (e.options.videoLoop || e.videoEnded) || (e.isVisible() ? n.play() : n.pause())
                        }
                    } else n.play()
                }), n.on("started", () => {
                    e.image.$default_item = e.image.$item, e.image.$item = e.$video, e.image.width = e.video.videoWidth || 1280, e.image.height = e.video.videoHeight || 720, e.coverImage(), e.clipContainer(), e.onScroll(), e.image.$default_item && (e.image.$default_item.style.display = "none")
                }), n.on("ended", () => {
                    e.videoEnded = !0, i()
                }), n.on("error", () => {
                    e.videoError = !0, i()
                }), e.video = n, !e.defaultInitImgResult && (e.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", "local" !== n.type)) return n.getImageURL(t => {
                    e.image.bgImage = `url("${t}")`, e.init()
                }), !1
            } else e.defaultInitImgResult || n.getImageURL(t => {
                const n = e.$item.getAttribute("style");
                n && e.$item.setAttribute("data-jarallax-original-styles", n), e.css(e.$item, {
                    "background-image": `url("${t}")`,
                    "background-position": "center",
                    "background-size": "cover"
                })
            });
            return t
        };
        const a = t.prototype.destroy;
        t.prototype.destroy = function () {
            const e = this;
            e.image.$default_item && (e.image.$item = e.image.$default_item, delete e.image.$default_item), a.apply(e)
        }
    }
}]);
