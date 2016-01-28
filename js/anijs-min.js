!function (a, b) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document)throw new Error("AniJS requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    var c = function (b) {
        var c = "data-anijs", d = "default", e = "$", f = "if", g = "on", h = "do", i = "to", j = "(\\s+|^)", k = "(\\s+|$)", l = "animationend", m = "transitionend", n = "target";
        b = {
            rootDOMTravelScope: {}, eventProviderCollection: {}, init: function () {
                o._t = {};
                var a = o._a();
                b.registerHelper(d, a), o._u = d, b.rootDOMTravelScope = document, b.Parser = o.Parser, o._v = o._p(), o._w = ""
            }, setDOMRootTravelScope: function (a) {
                var c;
                try {
                    "document" === a ? c = document : (c = document.querySelector(a), c || (c = document))
                } catch (d) {
                    c = document
                }
                b.rootDOMTravelScope = c
            }, run: function () {
                var a = [], d = {};
                b.purgeAll(), b.eventProviderCollection = {}, a = o._o(b.rootDOMTravelScope);
                var e, f = a.length, g = 0;
                for (g; f > g; g++)e = a[g], d = o._n(e.getAttribute(c)), o._c(e, d);
                var h = b.getEventProvider("AniJSEventProvider");
                h && h.dispatchEvent("onRunFinished")
            }, createAnimation: function (a, b) {
                var c = b || "";
                o._c(c, a)
            }, getHelper: function (a) {
                var b = o._t;
                return b[a] || b[d]
            }, registerHelper: function (a, b) {
                o._t[a] = b
            }, purge: function (a) {
                if (a && "" !== a && " " !== a) {
                    var c = document.querySelectorAll(a), d = c.length, e = 0;
                    for (e; d > e; e++)b.EventSystem.purgeEventTarget(c[e])
                }
            }, purgeAll: function () {
                b.EventSystem.purgeAll()
            }, purgeEventTarget: function (a) {
                b.EventSystem.purgeEventTarget(a)
            }, setClassNamesWhenAnim: function (a) {
                o._w = " " + a
            }, createEventProvider: function () {
                return b.EventSystem.createEventTarget()
            }, registerEventProvider: function (a) {
                var c = b.eventProviderCollection;
                return a.id && a.value && b.EventSystem.isEventTarget(a.value) ? (c[a.id] = a.value, 1) : ""
            }, getEventProvider: function (a) {
                return b.eventProviderCollection[a]
            }
        };
        var o = {};
        return o._a = function () {
            var a = {
                removeAnim: function (a, b) {
                    a.target && b.nodeHelper.removeClass(a.target, b.behavior)
                }, holdAnimClass: function () {
                }
            };
            return a
        }, o._b = function () {
            return new Parser
        }, o._c = function (a, b) {
            var c, d = b.length, e = 0;
            for (e; d > e; e++)c = b[e], o._d(a, c)
        }, o._d = function (a, c) {
            var d = o._e(c), e = o._f(a, c);
            if ("" !== d) {
                var f, g = e.length, h = 0;
                for (h; g > h; h++)if (f = e[h], b.EventSystem.isEventTarget(f)) {
                    var i = function (d) {
                        var e = o._g(a, c, d), f = o._h(c), g = o._j(a, c), h = o._i(a, c);
                        "" !== o._w && (Array.isArray(f) || (f += o._w));
                        var i = {
                            behaviorTargetList: e,
                            nodeHelper: o.NodeHelper,
                            animationEndEvent: o._v,
                            behavior: f,
                            after: h,
                            eventSystem: b.EventSystem
                        }, j = new b.AnimationContext(i);
                        g && o.Util.isFunction(g) ? g(d, j) : j.run()
                    };
                    b.EventSystem.addEventListenerHelper(f, d, i, !1), b.EventSystem.registerEventHandle(f, d, i)
                }
            }
        }, o._e = function (a) {
            var b = "", c = a.event || b;
            return c === l ? c = o._p() : c === m && (c = o._q()), c
        }, o._f = function (c, d) {
            var e, f = c, g = [f], h = b.rootDOMTravelScope;
            if (d.eventTarget)if (e = o._m(d.eventTarget), e.length > 0)g = e; else if ("document" === d.eventTarget)g = [document]; else if ("window" === d.eventTarget)g = [a]; else if (d.eventTarget.split)try {
                g = h.querySelectorAll(d.eventTarget)
            } catch (i) {
                g = []
            }
            return g
        }, o._g = function (a, c, d) {
            var f = a, g = [f], h = b.rootDOMTravelScope, i = c.behaviorTarget;
            if (i)if (i === n && d.currentTarget)g = [d.currentTarget]; else {
                i = i.split(e).join(",");
                try {
                    g = h.querySelectorAll(i)
                } catch (j) {
                    g = []
                }
            }
            return g
        }, o._h = function (a) {
            var b, c = a.behavior || "";
            return Array.isArray(c) && (b = o._k({}, a, c[0]), b ? c[0] = b : c = c.join(" ")), c
        }, o._i = function (a, b) {
            var c = o._k(a, b, b.after);
            return c
        }, o._j = function (a, b) {
            var c = o._k(a, b, b.before);
            return c
        }, o._k = function (a, b, c) {
            var d = c || "", e = o._l(b);
            if (d && !o.Util.isFunction(d)) {
                var f = o._t, g = f[e];
                d = g && g[d] ? g[d] : !1
            }
            return d
        }, o._l = function (a) {
            var b = a.helper || o._u;
            return b
        }, o._m = function (a) {
            {
                var c = [];
                b.eventProviderCollection
            }
            if (a)if (a.id && b.EventSystem.isEventTarget(a.value))c.push(a.value), b.registerEventProvider(a); else if (a.split) {
                eventProviderIDList = a.split("$");
                var d, e = eventProviderIDList.length, f = 1;
                for (f; e > f; f++)if (d = eventProviderIDList[f], d && " " !== d) {
                    d = d.trim();
                    var g = b.getEventProvider(d);
                    g || (g = b.EventSystem.createEventTarget(), b.registerEventProvider({id: d, value: g})), c.push(g)
                }
            }
            return c
        }, o._n = function (a) {
            return o.Parser.parse(a)
        }, o._o = function (a) {
            var b = "[" + c + "]";
            return a.querySelectorAll(b)
        }, o._p = function () {
            var a = o._r(), b = [l, "oAnimationEnd", l, "webkitAnimationEnd"];
            return b[a]
        }, o._q = function () {
            var a = o._r(), b = [m, "oTransitionEnd", m, "webkitTransitionEnd"];
            return b[a]
        }, o._r = function () {
            for (var a = document.createElement("fakeelement"), b = ["animation", "OAnimation", "MozAnimation", "webkitAnimation"], c = 0; c < b.length; c++)if (void 0 !== a.style[b[c]])return c
        }, b.AnimationContext = function (a) {
            var b = this;
            b.init = function (a) {
                b.behaviorTargetList = a.behaviorTargetList || [], b.nodeHelper = a.nodeHelper, b.animationEndEvent = a.animationEndEvent, b.behavior = a.behavior, b.after = a.after, b.eventSystem = a.eventSystem
            }, b.doDefaultAction = function (a, c) {
                var d = b, e = d.nodeHelper, f = d.animationEndEvent, g = d.after;
                e.addClass(a, c), d.eventSystem.addEventListenerHelper(a, f, function (a) {
                    a.stopPropagation(), d.eventSystem.removeEventListenerHelper(a.target, a.type, arguments.callee), g ? o.Util.isFunction(g) && g(a, b) : e.removeClass(a.target, c)
                })
            }, b.doFunctionAction = function (a, c) {
                var d = b, e = d.after, f = {};
                c[0](f, b, a, c), o.Util.isFunction(e) && e(f, b)
            }, b.run = function () {
                var a = b, c = a.behaviorTargetList, d = c.length, e = a.behavior, f = 0;
                for (b.hasRunned = 1, f; d > f; f++)Array.isArray(e) ? b.doFunctionAction(c[f], e) : b.doDefaultAction(c[f], e)
            }, b.init(a)
        }, o.Parser = {
            parse: function (a) {
                return this.parseDeclaration(a)
            }, parseDeclaration: function (a) {
                var b, c, d = [];
                b = a.split(";");
                var e = b.length, f = 0;
                for (f; e > f; f++)c = this.parseSentence(b[f]), d.push(c);
                return d
            }, parseSentence: function (a) {
                var b, c, d = {};
                b = a.split(",");
                var e = b.length, f = 0;
                for (f; e > f; f++)c = this.parseDefinition(b[f]), d[c.key] = c.value;
                return d
            }, parseDefinition: function (a) {
                var b, c, d, e = {}, j = "event", k = "eventTarget", l = "behavior", m = "behaviorTarget";
                return b = a.split(":"), b.length > 1 && (c = b[0].trim(), b.length > 2 ? (d = b.slice(1), d = d.join(":"), d = d.trim()) : d = b[1].trim(), e.value = d, c === f ? c = j : c === g ? c = k : c === h ? (c = l, d = this.parseDoDefinition(d)) : c === i && (c = m), e.key = c, e.value = d), e
            }, parseDoDefinition: function (a) {
                var b = a.split("$");
                return b.length > 1 && (b = b[1].split(" "), a = [], a[0] = b[0], a[1] = b.slice(1).join(" ")), a
            }
        }, o.NodeHelper = {
            addClass: function (a, b) {
                b instanceof Array || (b = b.split(" "));
                for (var c = 0, d = b.length; d > c; ++c)b[c] && !new RegExp(j + b[c] + k).test(a.className) && (a.className = a.className.trim() + " " + b[c])
            }, removeClass: function (a, b) {
                b instanceof Array || (b = b.split(" "));
                for (var c = 0, d = b.length; d > c; ++c)a.className = a.className.replace(new RegExp(j + b[c] + k), " ").trim()
            }, hasClass: function (a, b) {
                return b && new RegExp(j + b + k).test(a.className)
            }
        }, o.Util = {
            isFunction: function (a) {
                return !!(a && a.constructor && a.call && a.apply)
            }
        }, b.EventSystem = {
            eventCollection: {}, eventIdCounter: 0, isEventTarget: function (a) {
                return a.addEventListener ? 1 : 0
            }, createEventTarget: function () {
                return new b.EventTarget
            }, addEventListenerHelper: function (a, b, c) {
                a.addEventListener(b, c, !1)
            }, removeEventListenerHelper: function (a, b, c) {
                a.removeEventListener(b, c)
            }, purgeAll: function () {
                var a, b, c = this, d = c.eventCollection, e = Object.keys(d), f = e.length, g = 0;
                for (g; f > g; g++)a = e[g], b = d[a], b && b.handleCollection && b.handleCollection.length > 0 && c.purgeEventTarget(b.handleCollection[0].element), delete d[a]
            }, purgeEventTarget: function (a) {
                var b, c = this, d = a._aniJSEventID;
                if (d) {
                    b = c.eventCollection[d].handleCollection;
                    var e, f = b.length, g = 0;
                    for (g; f > g; g++)e = b[g], c.removeEventListenerHelper(a, e.eventType, e.listener);
                    c.eventCollection[d] = a._aniJSEventID = null, delete c.eventCollection[d], delete a._aniJSEventID
                }
            }, registerEventHandle: function (a, b, c) {
                var d = this, e = a._aniJSEventID, f = d.eventCollection, g = {eventType: b, listener: c, element: a};
                if (e)f[e].handleCollection.push(g); else {
                    var h = {handleCollection: [g]};
                    f[++d.eventIdCounter] = h, a._aniJSEventID = d.eventIdCounter
                }
            }
        }, b.EventTarget = function () {
            this._listeners = {}
        }, b.EventTarget.prototype = {
            constructor: b.EventTarget, addEventListener: function (a, b) {
                var c = this;
                "undefined" == typeof c._listeners[a] && (c._listeners[a] = []), c._listeners[a].push(b)
            }, dispatchEvent: function (a) {
                var b = this;
                if ("string" == typeof a && (a = {type: a}), a.target || (a.target = b), !a.type)throw new Error("Event object missing 'type' property.");
                if (this._listeners[a.type] instanceof Array)for (var c = b._listeners[a.type], d = 0, e = c.length; e > d; d++)c[d].call(b, a)
            }, removeEventListener: function (a, b) {
                var c = this;
                if (c._listeners[a] instanceof Array)for (var d = c._listeners[a], e = 0, f = d.length; f > e; e++)if (d[e] === b) {
                    d.splice(e, 1);
                    break
                }
            }
        }, b
    }(c || {});
    return c.init(), c.run(), "function" == typeof define && define.amd && define("anijs", [], function () {
        return c
    }), "undefined" == typeof b && (a.AniJS = c), c
});